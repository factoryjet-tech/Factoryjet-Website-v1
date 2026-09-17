#!/usr/bin/env node

/**
 * audit-sitemap-urls.mjs
 *
 * Checks every URL our live sitemaps hand to search engines, the way a crawler
 * meets it: one request per URL, redirects NOT followed.
 *
 * WHY: Bing Webmaster Tools shows thousands of redirects, robots.txt blocks and 4xx
 * answers against roughly 500 indexed pages. A sitemap should list only final,
 * indexable, self-canonical URLs. Every other entry spends crawl budget on a URL
 * that can never be indexed, and tells Bing our sitemap is not trustworthy.
 *
 * WHAT IT DOES
 *   1. Reads the sitemap index (default https://factoryjet.com/sitemap.xml) and every
 *      child sitemap it lists. Nested indexes are followed.
 *   2. Reads robots.txt from the same host and applies the bingbot group, or the
 *      "*" group when there is no bingbot group (the RFC 9309 rule).
 *   3. Requests every URL without following redirects, about 5 at a time, and puts
 *      each one in exactly one class:
 *        ok              200, indexable, canonical is itself (or absent)
 *        redirect        3xx. Location is recorded, then the chain is walked hop by
 *                        hop (still manual) to find what to list instead
 *        client-error    4xx
 *        server-error    5xx
 *        noindex         200, but meta robots / meta bingbot / X-Robots-Tag says noindex
 *        canonical       200, but rel=canonical names a different URL
 *        robots-blocked  robots.txt disallows it for bingbot (Bing never fetches it)
 *        fetch-error     network failure or timeout
 *        other-status    anything else (1xx, 204, 304 and so on)
 *      Extra findings (duplicate listings, possible soft 404, conflicting tags) go
 *      in "notes".
 *   4. With --links, also collects every same-site <a href> and hreflang alternate
 *      on the sitemap pages, checks each distinct target once, and lists the ones
 *      that redirect or fail, ranked by how many pages link to them. Sitemaps are
 *      only one way Bing finds URLs; the links on every page are another.
 *
 * GEO REDIRECTS: functions/_middleware.js sends some human visitors a 302 based on
 * their country, marked with an X-FJ-Geo-Redirect header. Crawlers never get it.
 * When the script sees that header it asks again with a crawler-style user agent
 * (the same name plus a contact URL, which the middleware exempts because it
 * contains "+http") and classifies what a crawler actually receives.
 *
 * STALE EDGE CACHE: Cloudflare can serve old HTML for hours after a deploy, so by
 * default each request carries a throwaway ?cb= parameter plus Cache-Control:
 * no-cache. The parameter is stripped again before anything is compared or printed.
 * Pass --no-cache-bust to see exactly what the edge is serving right now.
 *
 * USAGE
 *   node scripts/audit-sitemap-urls.mjs
 *   node scripts/audit-sitemap-urls.mjs --json /tmp/sitemap-audit.json
 *   node scripts/audit-sitemap-urls.mjs --also pipeline/research/data/bing_pages.json
 *   node scripts/audit-sitemap-urls.mjs --links
 *
 * OPTIONS
 *   --sitemap <url>     sitemap or sitemap index to start from
 *   --concurrency <n>   parallel requests (default 5)
 *   --json <path>       also write every result as JSON to this path
 *   --also <file>       extra URLs to check that are not sitemap entries: a newline
 *                       list, a JSON array of strings, or a JSON array of objects with
 *                       a Url, url, loc or Query field (bing_pages.json works as is).
 *                       Can be repeated.
 *   --links             also check same-site links and hreflang targets on every
 *                       sitemap page (more requests; still one per distinct URL)
 *   --no-cache-bust     request URLs exactly as listed
 *   --strict            exit 1 when any sitemap URL is not "ok"
 *
 * No dependencies. Node 18+ (global fetch). Read-only: it only sends GET requests.
 * Exit codes: 0 done, 1 problems found with --strict, 2 bad option, unreadable
 * sitemap or crash.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const USER_AGENT = 'FactoryJetSitemapAudit/1.0';
// Same tool, identified the way crawlers identify themselves. functions/_middleware.js
// exempts any user agent containing "+http" from its per-visitor geo redirect.
const CRAWLER_USER_AGENT = `${USER_AGENT} (+https://factoryjet.com)`;
const TIMEOUT_MS = 30_000;
const MAX_HTML_BYTES = 8 * 1024 * 1024;
const MAX_REDIRECT_HOPS = 5;
const MAX_SITEMAP_DEPTH = 3;
const RUN_TOKEN = `fjsa${Date.now().toString(36)}`;

const CLASSES = [
  'ok',
  'redirect',
  'client-error',
  'server-error',
  'noindex',
  'canonical',
  'robots-blocked',
  'fetch-error',
  'other-status',
];

// ── CLI ─────────────────────────────────────────────────────────────────────

function fail(message, code = 2) {
  console.error(message);
  process.exit(code);
}

function printHelp() {
  const text = fs.readFileSync(fileURLToPath(import.meta.url), 'utf8');
  const start = text.indexOf('USAGE');
  const end = text.indexOf('*/', start);
  console.log(text.slice(start, end).replace(/^ \* ?/gm, ''));
}

function parseArgs(argv) {
  const opts = {
    sitemap: 'https://factoryjet.com/sitemap.xml',
    concurrency: 5,
    json: null,
    also: [],
    cacheBust: true,
    strict: false,
    links: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const value = () => {
      const v = argv[++i];
      if (v === undefined) fail(`${arg} needs a value. Run with --help for usage.`);
      return v;
    };
    if (arg === '--sitemap') opts.sitemap = value();
    else if (arg === '--concurrency') opts.concurrency = Math.max(1, Math.min(20, parseInt(value(), 10) || 5));
    else if (arg === '--json') opts.json = value();
    else if (arg === '--also') opts.also.push(value());
    else if (arg === '--no-cache-bust') opts.cacheBust = false;
    else if (arg === '--strict') opts.strict = true;
    else if (arg === '--links') opts.links = true;
    else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else fail(`Unknown option: ${arg}. Run with --help for usage.`);
  }
  return opts;
}

const OPTS = parseArgs(process.argv.slice(2));

// ── HTTP ────────────────────────────────────────────────────────────────────

let bustCounter = 0;

function withCacheBust(url) {
  if (!OPTS.cacheBust) return url;
  const hashAt = url.indexOf('#');
  const base = hashAt === -1 ? url : url.slice(0, hashAt);
  return `${base}${base.includes('?') ? '&' : '?'}cb=${RUN_TOKEN}${(bustCounter++).toString(36)}`;
}

const CACHE_BUST_RE = new RegExp(`([?&])cb=${RUN_TOKEN}[0-9a-z]*(&|$)`);

function stripCacheBust(url) {
  return url.replace(CACHE_BUST_RE, (_m, lead, trail) => (trail === '&' ? lead : ''));
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function drain(res) {
  try {
    await res.body?.cancel();
  } catch {
    // Nothing to do: the body is being discarded anyway.
  }
}

function describeError(err) {
  if (!err) return 'unknown error';
  if (err.name === 'TimeoutError' || err.name === 'AbortError') return `timeout after ${TIMEOUT_MS / 1000}s`;
  const cause = err.cause && (err.cause.code || err.cause.message);
  return cause ? `${err.message} (${cause})` : err.message;
}

let requestCount = 0;

// One GET, redirects not followed. Retries once on a network error, 429 or 503.
async function request(url, userAgent) {
  let lastError;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      requestCount++;
      const res = await fetch(withCacheBust(url), {
        method: 'GET',
        redirect: 'manual',
        headers: {
          'User-Agent': userAgent,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Cache-Control': 'no-cache',
        },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if ((res.status === 429 || res.status === 503) && attempt === 1) {
        await drain(res);
        await sleep(3000);
        continue;
      }
      return res;
    } catch (err) {
      lastError = err;
      if (attempt === 1) await sleep(2000);
    }
  }
  throw lastError;
}

async function readBody(res, limit = MAX_HTML_BYTES) {
  if (!res.body) return '';
  const reader = res.body.getReader();
  const chunks = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(Buffer.from(value.buffer, value.byteOffset, value.byteLength));
    size += value.byteLength;
    if (size >= limit) {
      await reader.cancel().catch(() => {});
      break;
    }
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    for (;;) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

// ── URL helpers ─────────────────────────────────────────────────────────────

function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    return u.toString();
  } catch {
    return url;
  }
}

function resolveUrl(href, base) {
  try {
    return stripCacheBust(new URL(href, base).toString());
  } catch {
    return href;
  }
}

function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (m, entity) => {
    const e = entity.toLowerCase();
    if (e === 'amp') return '&';
    if (e === 'quot') return '"';
    if (e === 'apos') return "'";
    if (e === 'lt') return '<';
    if (e === 'gt') return '>';
    const code = e.startsWith('#x') ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return Number.isFinite(code) && code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m;
  });
}

// Maps /sitemap-{section}/sitemap.xml to the file that generates it, when it exists.
function generatorFor(sitemapUrl) {
  let pathname;
  try {
    pathname = new URL(sitemapUrl).pathname;
  } catch {
    return null;
  }
  const candidates = [];
  const section = pathname.match(/^\/(sitemap-[a-z0-9-]+)\/sitemap\.xml$/i);
  if (section) candidates.push(`src/app/${section[1]}/sitemap.ts`);
  if (pathname === '/sitemap.xml') candidates.push('src/app/sitemap.xml/route.ts');
  return candidates.find((c) => fs.existsSync(path.join(ROOT_DIR, c))) || null;
}

// ── robots.txt ──────────────────────────────────────────────────────────────

function parseRobots(text) {
  const groups = [];
  let current = null;
  let lastWasAgent = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    const colon = line.indexOf(':');
    if (!line || colon === -1) continue;
    const field = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (field === 'user-agent') {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else {
      if ((field === 'allow' || field === 'disallow') && current && value) {
        current.rules.push({ allow: field === 'allow', pattern: value });
      }
      lastWasAgent = false;
    }
  }
  return groups;
}

// RFC 9309 section 2.2.1: a crawler obeys the group(s) naming its product token,
// merged, and falls back to the "*" group only when no group names it. msnbot is
// checked too, as Bing's legacy token.
function robotsRulesForBing(groups) {
  for (const name of ['bingbot', 'msnbot', '*']) {
    const matching = groups.filter((g) => g.agents.includes(name));
    if (matching.length) return { group: name, rules: matching.flatMap((g) => g.rules) };
  }
  return { group: null, rules: [] };
}

function robotsPatternMatches(pattern, target) {
  let p = pattern;
  let anchored = false;
  if (p.endsWith('$')) {
    anchored = true;
    p = p.slice(0, -1);
  }
  const body = p
    .split('*')
    .map((part) => part.replace(/[.+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*');
  return new RegExp(`^${body}${anchored ? '$' : ''}`).test(target);
}

// RFC 9309 section 2.2.2: the most specific (longest) match wins, and when an Allow
// and a Disallow rule are equivalent, Allow is used.
function robotsVerdict(rules, url) {
  let target;
  try {
    const u = new URL(url);
    target = `${u.pathname}${u.search}`;
  } catch {
    return { allowed: true, rule: null };
  }
  let best = null;
  for (const rule of rules) {
    if (!robotsPatternMatches(rule.pattern, target)) continue;
    const len = rule.pattern.length;
    if (!best || len > best.len || (len === best.len && rule.allow && !best.rule.allow)) {
      best = { rule, len };
    }
  }
  if (!best) return { allowed: true, rule: null };
  return {
    allowed: best.rule.allow,
    rule: `${best.rule.allow ? 'Allow' : 'Disallow'}: ${best.rule.pattern}`,
  };
}

// ── HTML signals ────────────────────────────────────────────────────────────

function parseAttributes(tag) {
  const attrs = {};
  const inner = tag.replace(/^<\s*[a-zA-Z0-9-]+/, '').replace(/\/?\s*>$/, '');
  const re = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let m;
  while ((m = re.exec(inner))) {
    attrs[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

function robotsDirectivesSayNoindex(content) {
  return content
    .toLowerCase()
    .split(',')
    .map((s) => s.trim())
    .some((d) => d === 'noindex' || d === 'none');
}

// X-Robots-Tag may scope directives to one crawler: "bingbot: noindex, nofollow".
function headerSaysNoindexForBing(value) {
  if (!value) return false;
  const valueKeys = new Set(['unavailable_after', 'max-snippet', 'max-image-preview', 'max-video-preview']);
  let scope = null;
  for (let part of value.split(',')) {
    part = part.trim().toLowerCase();
    const scoped = part.match(/^([a-z0-9_-]+)\s*:\s*(.*)$/);
    if (scoped && !valueKeys.has(scoped[1])) {
      scope = scoped[1];
      part = scoped[2].trim();
    }
    const appliesToBing = scope === null || scope === 'bingbot' || scope === 'msnbot';
    if (appliesToBing && (part === 'noindex' || part === 'none')) return true;
  }
  return false;
}

const ASSET_PATH_RE = /\.(png|jpe?g|gif|webp|avif|svg|ico|pdf|css|js|mjs|json|xml|txt|woff2?|ttf|otf|mp4|webm|mp3|zip|webmanifest)$/i;

// A same-site page URL (www and http variants count: they cost a redirect too), or null.
function internalLinkTarget(href, pageUrl) {
  const h = (href || '').trim();
  if (!h || /^(mailto:|tel:|javascript:|data:|sms:|#)/i.test(h)) return null;
  let u;
  try {
    u = new URL(h, pageUrl);
  } catch {
    return null;
  }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
  if (!siteHost || u.hostname.replace(/^www\./, '') !== siteHost) return null;
  if (u.pathname.startsWith('/_next/') || u.pathname.startsWith('/cdn-cgi/') || ASSET_PATH_RE.test(u.pathname)) return null;
  u.hash = '';
  return stripCacheBust(u.toString());
}

function readHtmlSignals(html, pageUrl, collectLinks = false) {
  // Tags inside scripts (JSON, RSC payloads) and comments are not real tags.
  const markup = html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  const canonicals = [];
  const links = [];
  for (const tag of markup.match(/<link\b[^>]*>/gi) || []) {
    const attrs = parseAttributes(tag);
    const rel = (attrs.rel || '').toLowerCase().split(/\s+/);
    if (rel.includes('canonical') && attrs.href) canonicals.push(resolveUrl(attrs.href, pageUrl));
    if (collectLinks && rel.includes('alternate') && attrs.hreflang && attrs.href) {
      const target = internalLinkTarget(attrs.href, pageUrl);
      if (target) links.push({ url: target, kind: 'hreflang' });
    }
  }
  if (collectLinks) {
    for (const tag of markup.match(/<a\b[^>]*>/gi) || []) {
      const target = internalLinkTarget(parseAttributes(tag).href, pageUrl);
      if (target) links.push({ url: target, kind: 'a' });
    }
  }
  const robotsMeta = [];
  const googlebotNoindex = [];
  for (const tag of markup.match(/<meta\b[^>]*>/gi) || []) {
    const attrs = parseAttributes(tag);
    const name = (attrs.name || '').toLowerCase();
    if (!attrs.content) continue;
    if (name === 'robots' || name === 'bingbot' || name === 'msnbot') robotsMeta.push(`${name}: ${attrs.content}`);
    else if (name === 'googlebot' && robotsDirectivesSayNoindex(attrs.content)) googlebotNoindex.push(attrs.content);
  }
  const title = (markup.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
  return {
    canonicals: [...new Set(canonicals)],
    robotsMeta,
    googlebotNoindex,
    links,
    title: title ? decodeEntities(title.trim()).slice(0, 160) : null,
  };
}

// ── Probing ─────────────────────────────────────────────────────────────────

let robotsRules = [];
let siteHost = null; // sitemap host without "www.", set in main()

// Requests one URL (no redirect following) and classifies the answer. With
// collectLinks, a 200 HTML page also returns its same-site links in result._links.
async function probe(url, userAgent = USER_AGENT, collectLinks = false) {
  const result = { url, class: null, status: null, notes: [] };

  const verdict = robotsVerdict(robotsRules, url);
  if (!verdict.allowed) result.robotsRule = verdict.rule;

  let res;
  try {
    res = await request(url, userAgent);
  } catch (err) {
    result.class = verdict.allowed ? 'fetch-error' : 'robots-blocked';
    result.error = describeError(err);
    return result;
  }
  result.status = res.status;
  const geo = res.headers.get('x-fj-geo-redirect');

  if (res.status >= 300 && res.status < 400) {
    await drain(res);
    const location = res.headers.get('location');
    result.location = location ? resolveUrl(location, url) : null;
    if (geo && userAgent !== CRAWLER_USER_AGENT) {
      const crawlerView = await probe(url, CRAWLER_USER_AGENT, collectLinks);
      crawlerView.geoRedirect = { status: res.status, rule: geo, location: result.location };
      crawlerView.notes.unshift(
        `people in the audit's country get a ${res.status} geo redirect (${geo}) to ${result.location}; crawlers are exempt, so this is the crawler view`
      );
      return crawlerView;
    }
    result.class = verdict.allowed ? 'redirect' : 'robots-blocked';
    if (!result.location) result.notes.push('3xx without a Location header');
    return result;
  }

  if (res.status >= 400) {
    await drain(res);
    result.class = verdict.allowed ? (res.status < 500 ? 'client-error' : 'server-error') : 'robots-blocked';
    return result;
  }

  if (res.status !== 200) {
    await drain(res);
    result.class = verdict.allowed ? 'other-status' : 'robots-blocked';
    return result;
  }

  const contentType = res.headers.get('content-type') || '';
  const xRobots = res.headers.get('x-robots-tag');
  if (xRobots) result.xRobotsTag = xRobots;
  let signals = { canonicals: [], robotsMeta: [], googlebotNoindex: [], links: [], title: null };
  if (/html/i.test(contentType)) {
    let html;
    try {
      html = await readBody(res);
    } catch (err) {
      // The timeout also covers the body, so a slow page lands here, not in a crash.
      result.class = verdict.allowed ? 'fetch-error' : 'robots-blocked';
      result.error = `body: ${describeError(err)}`;
      return result;
    }
    signals = readHtmlSignals(html, url, collectLinks);
  } else {
    await drain(res);
    result.notes.push(`not HTML (${contentType || 'no content-type'})`);
  }
  result.title = signals.title;
  if (collectLinks) result._links = signals.links;
  if (signals.robotsMeta.length) result.robotsMeta = signals.robotsMeta;
  if (signals.canonicals.length) result.canonical = signals.canonicals[0];
  if (signals.canonicals.length > 1) {
    result.notes.push(`${signals.canonicals.length} different canonical tags: ${signals.canonicals.join(' | ')}`);
  }
  if (signals.googlebotNoindex.length) {
    result.notes.push(`meta googlebot says "${signals.googlebotNoindex.join('; ')}" (Google only; Bing ignores it)`);
  }
  if (signals.title && /\b404\b|page not found|not found/i.test(signals.title)) {
    result.notes.push(`title looks like an error page ("${signals.title}"): possible soft 404`);
  }

  const noindex =
    headerSaysNoindexForBing(xRobots) ||
    signals.robotsMeta.some((m) => robotsDirectivesSayNoindex(m.slice(m.indexOf(':') + 1)));
  const canonicalElsewhere =
    signals.canonicals.length > 0 && signals.canonicals.some((c) => normalizeUrl(c) !== normalizeUrl(url));

  if (!verdict.allowed) result.class = 'robots-blocked';
  else if (noindex) result.class = 'noindex';
  else if (canonicalElsewhere) result.class = 'canonical';
  else result.class = 'ok';

  if (noindex && canonicalElsewhere) result.notes.push('also canonicalised to another URL');
  if (!verdict.allowed && noindex) result.notes.push('also noindex (Bing cannot see it, because robots.txt blocks the fetch)');
  if (result.canonical && canonicalElsewhere) {
    const a = normalizeUrl(result.canonical);
    const b = normalizeUrl(url);
    let sameHost = true;
    try {
      sameHost = new URL(a).host === new URL(b).host;
    } catch {
      result.notes.push(`canonical is not a valid absolute URL: ${result.canonical}`);
    }
    if (a.replace(/\/$/, '') === b.replace(/\/$/, '')) result.canonicalDiff = 'trailing slash only';
    else if (!sameHost) result.canonicalDiff = 'different host';
    else result.canonicalDiff = 'different URL';
  }
  return result;
}

// Probes a URL and, for a redirect, walks the chain one manual hop at a time.
async function audit(url, collectLinks = false) {
  const result = await probe(url, USER_AGENT, collectLinks);
  if (result.class !== 'redirect') return result;

  const chain = [];
  const seen = new Set([normalizeUrl(url)]);
  let hop = result;
  while (hop.class === 'redirect' && hop.location && chain.length < MAX_REDIRECT_HOPS) {
    const next = hop.location;
    if (seen.has(normalizeUrl(next))) {
      result.notes.push(`redirect loop back to ${next}`);
      result.loop = true;
      break;
    }
    seen.add(normalizeUrl(next));
    hop = await probe(next);
    chain.push({ url: next, status: hop.status, class: hop.class });
  }
  result.chain = chain;
  result.redirectHops = 1 + chain.filter((c) => c.class === 'redirect').length;
  if (result.redirectHops > 1) result.notes.push(`${result.redirectHops}-hop redirect chain`);
  result.final = {
    url: hop.url,
    status: hop.status,
    class: hop.class,
    canonical: hop.canonical || null,
  };
  return result;
}

// ── Sitemaps ────────────────────────────────────────────────────────────────

function parseSitemapXml(xml) {
  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  const blockRe = isIndex ? /<sitemap\b[\s\S]*?<\/sitemap>/gi : /<url\b[\s\S]*?<\/url>/gi;
  const entries = [];
  for (const block of xml.match(blockRe) || []) {
    const loc = block.match(/<loc>\s*(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?\s*<\/loc>/i);
    if (!loc) continue;
    const lastmod = block.match(/<lastmod>\s*([^<]*?)\s*<\/lastmod>/i);
    entries.push({ loc: decodeEntities(loc[1].trim()), lastmod: lastmod ? lastmod[1] : null });
  }
  return { isIndex, entries };
}

async function fetchSitemap(url) {
  const info = { url, generator: generatorFor(url), status: null, problems: [] };
  let current = url;
  for (let hops = 0; hops <= 3; hops++) {
    let res;
    try {
      res = await request(current, USER_AGENT);
    } catch (err) {
      info.problems.push(`fetch failed: ${describeError(err)}`);
      return { info, xml: null };
    }
    info.status = res.status;
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      await drain(res);
      const next = resolveUrl(res.headers.get('location'), current);
      info.problems.push(`sitemap URL redirects (${res.status}) to ${next}`);
      current = next;
      continue;
    }
    if (res.status !== 200) {
      await drain(res);
      info.problems.push(`sitemap answered ${res.status}`);
      return { info, xml: null };
    }
    const type = res.headers.get('content-type') || '';
    if (!/xml/i.test(type)) info.problems.push(`content-type is "${type}", expected XML`);
    try {
      return { info, xml: await readBody(res, 60 * 1024 * 1024) };
    } catch (err) {
      info.problems.push(`reading the sitemap failed: ${describeError(err)}`);
      return { info, xml: null };
    }
  }
  info.problems.push('too many redirects');
  return { info, xml: null };
}

async function collectSitemapUrls(startUrl) {
  const sitemaps = [];
  const listings = new Map(); // normalized URL -> { url, sitemaps: [..] }
  let listed = 0;

  async function walk(url, depth) {
    const { info, xml } = await fetchSitemap(url);
    sitemaps.push(info);
    if (!xml) return;
    const { isIndex, entries } = parseSitemapXml(xml);
    info.type = isIndex ? 'index' : 'urlset';
    info.entries = entries.length;
    if (!entries.length) info.problems.push('no <loc> entries found');
    if (isIndex) {
      if (depth >= MAX_SITEMAP_DEPTH) {
        info.problems.push('nested too deep, children skipped');
        return;
      }
      for (const entry of entries) await walk(entry.loc, depth + 1);
      return;
    }
    for (const entry of entries) {
      listed++;
      const key = normalizeUrl(entry.loc);
      if (!listings.has(key)) listings.set(key, { url: entry.loc, sitemaps: [] });
      listings.get(key).sitemaps.push(url);
    }
  }

  await walk(startUrl, 0);
  return { sitemaps, listings, listed };
}

function loadExtraUrls(file) {
  const text = fs.readFileSync(path.resolve(file), 'utf8').trim();
  let urls = [];
  if (text.startsWith('[') || text.startsWith('{')) {
    const data = JSON.parse(text);
    const items = Array.isArray(data) ? data : data.urls || data.pages || [];
    for (const item of items) {
      if (typeof item === 'string') urls.push(item);
      else if (item && typeof item === 'object') {
        const v = item.Url || item.url || item.loc || item.Query;
        if (typeof v === 'string') urls.push(v);
      }
    }
  } else {
    urls = text.split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));
  }
  return urls.filter((u) => /^https?:\/\//i.test(u));
}

// ── Recommendations ─────────────────────────────────────────────────────────

function recommend(result, inSitemap) {
  switch (result.class) {
    case 'ok':
      return null;
    case 'redirect': {
      const f = result.final;
      if (result.loop) return 'remove: redirect loop';
      if (!f || !f.url) return 'remove: redirect with no usable Location';
      if (f.class === 'ok') {
        return inSitemap(f.url)
          ? `remove: redirects to ${f.url}, which is already listed`
          : `replace with ${f.url}`;
      }
      if (f.class === 'canonical' && f.canonical) {
        return inSitemap(f.canonical)
          ? `remove: redirect target canonicalises to ${f.canonical}, which is already listed`
          : `replace with ${f.canonical} (the redirect target's canonical); check it first`;
      }
      return `remove: redirect ends at ${f.url} (${f.status ?? 'no answer'}, ${f.class})`;
    }
    case 'client-error':
    case 'server-error':
      return `remove, or restore the page (answers ${result.status})`;
    case 'noindex':
      return 'remove, or drop the noindex if the page should rank';
    case 'canonical':
      if (!result.canonical) return 'remove';
      if (result.canonicalTarget && result.canonicalTarget.class !== 'ok') {
        return `fix the page: canonical points at ${result.canonical}, which is ${result.canonicalTarget.class} (${result.canonicalTarget.status ?? 'no answer'})`;
      }
      return inSitemap(result.canonical)
        ? `remove: canonical is ${result.canonical}, which is already listed`
        : `replace with ${result.canonical}, or fix the canonical tag if this URL is the real page`;
    case 'robots-blocked':
      return `remove, or change robots.txt (${result.robotsRule})`;
    case 'fetch-error':
      return 're-run the audit; the request failed';
    default:
      return `check by hand (answers ${result.status})`;
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const startedAt = new Date();
  console.log(`Sitemap audit, ${startedAt.toISOString()}`);
  console.log(`Start: ${OPTS.sitemap}  (concurrency ${OPTS.concurrency}, cache bust ${OPTS.cacheBust ? 'on' : 'off'})`);

  // robots.txt first, so every probe can apply it.
  const origin = new URL(OPTS.sitemap).origin;
  siteHost = new URL(OPTS.sitemap).hostname.replace(/^www\./, '');
  let robotsInfo = { url: `${origin}/robots.txt`, status: null, group: null, rules: 0 };
  try {
    const res = await request(robotsInfo.url, USER_AGENT);
    robotsInfo.status = res.status;
    if (res.status === 200) {
      const picked = robotsRulesForBing(parseRobots(await readBody(res)));
      robotsRules = picked.rules;
      robotsInfo.group = picked.group;
      robotsInfo.rules = picked.rules.length;
    } else {
      await drain(res);
    }
  } catch (err) {
    robotsInfo.error = describeError(err);
  }
  console.log(
    `robots.txt: ${robotsInfo.status ?? robotsInfo.error}; Bing follows the "${robotsInfo.group ?? 'none'}" group (${robotsInfo.rules} rules)`
  );

  const { sitemaps, listings, listed } = await collectSitemapUrls(OPTS.sitemap);
  const urlsets = sitemaps.filter((s) => s.type === 'urlset');
  if (!listings.size) {
    for (const s of sitemaps) console.error(`  ${s.url}: ${s.problems.join('; ') || 'empty'}`);
    fail('No URLs found in the sitemap. Nothing to audit.');
  }
  console.log(`Sitemaps: ${sitemaps.length} read (${urlsets.length} URL lists), ${listed} entries, ${listings.size} unique URLs`);
  for (const s of sitemaps) {
    const gen = s.generator ? `  <- ${s.generator}` : '';
    const problems = s.problems.length ? `  PROBLEMS: ${s.problems.join('; ')}` : '';
    console.log(`  ${s.type ?? '?'}  ${s.entries ?? 0}  ${s.url}${gen}${problems}`);
  }

  const entries = [...listings.values()];
  const inSitemap = (u) => listings.has(normalizeUrl(u));
  const linkTargets = new Map(); // normalized target -> { url, pages: Set, kinds: Set }
  let done = 0;
  const results = await pool(entries, OPTS.concurrency, async (entry) => {
    const r = await audit(entry.url, OPTS.links);
    for (const link of r._links || []) {
      const key = normalizeUrl(link.url);
      if (key === normalizeUrl(entry.url)) continue; // self links cost nothing extra
      if (!linkTargets.has(key)) linkTargets.set(key, { url: link.url, pages: new Set(), kinds: new Set() });
      linkTargets.get(key).pages.add(entry.url);
      linkTargets.get(key).kinds.add(link.kind);
    }
    delete r._links;
    r.sitemaps = entry.sitemaps;
    r.generators = [...new Set(entry.sitemaps.map(generatorFor).filter(Boolean))];
    if (entry.sitemaps.length > 1) r.notes.push(`listed ${entry.sitemaps.length} times: ${entry.sitemaps.join(', ')}`);
    try {
      const u = new URL(entry.url);
      if (u.origin !== origin) r.notes.push(`different origin from the sitemap (${u.origin})`);
    } catch {
      r.notes.push('not a valid absolute URL');
    }
    done++;
    if (done % 50 === 0 || done === entries.length) process.stderr.write(`  checked ${done}/${entries.length}\n`);
    return r;
  });

  // Canonical targets that are not sitemap entries: check them once so the
  // recommendation does not send the sitemap from one bad URL to another.
  const canonicalTargets = [
    ...new Set(results.filter((r) => r.class === 'canonical' && r.canonical && !inSitemap(r.canonical)).map((r) => normalizeUrl(r.canonical))),
  ];
  const targetResults = new Map();
  await pool(canonicalTargets, OPTS.concurrency, async (u) => targetResults.set(u, await audit(u)));
  for (const r of results) {
    if (r.class === 'canonical' && r.canonical) {
      const own = results.find((x) => normalizeUrl(x.url) === normalizeUrl(r.canonical));
      const t = own || targetResults.get(normalizeUrl(r.canonical));
      if (t) r.canonicalTarget = { status: t.status, class: t.class };
    }
  }

  for (const r of results) r.action = recommend(r, inSitemap);

  // Same-site link targets found on sitemap pages (--links). Each distinct target is
  // requested once; sitemap URLs reuse the result from the main pass.
  let links = [];
  if (OPTS.links) {
    const byUrl = new Map(results.map((r) => [normalizeUrl(r.url), r]));
    const targets = [...linkTargets.values()];
    const unchecked = targets.filter((t) => !byUrl.has(normalizeUrl(t.url)));
    console.log(`\nLinks: ${targets.length} distinct same-site targets on sitemap pages, ${unchecked.length} are not sitemap URLs; checking those`);
    let linkDone = 0;
    await pool(unchecked, OPTS.concurrency, async (t) => {
      byUrl.set(normalizeUrl(t.url), await audit(t.url));
      linkDone++;
      if (linkDone % 100 === 0 || linkDone === unchecked.length) process.stderr.write(`  links ${linkDone}/${unchecked.length}\n`);
    });
    links = targets
      .map((t) => {
        const r = byUrl.get(normalizeUrl(t.url));
        return {
          url: t.url,
          class: r.class,
          status: r.status,
          location: r.location || null,
          final: r.final || null,
          canonical: r.class === 'canonical' ? r.canonical : undefined,
          inSitemap: inSitemap(t.url),
          linkingPages: t.pages.size,
          kinds: [...t.kinds],
          examplePages: [...t.pages].slice(0, 5),
          notes: r.notes,
        };
      })
      .sort((a, b) => b.linkingPages - a.linkingPages || a.url.localeCompare(b.url));
  }

  // Extra URLs (for example Bing's top pages): same checks, reported separately.
  let extra = [];
  if (OPTS.also.length) {
    const extraUrls = [...new Set(OPTS.also.flatMap(loadExtraUrls).map(normalizeUrl))];
    const outside = extraUrls.filter((u) => !inSitemap(u));
    console.log(`\nExtra URLs: ${extraUrls.length} given, ${extraUrls.length - outside.length} already in the sitemap, checking ${outside.length}`);
    extra = await pool(outside, OPTS.concurrency, async (u) => {
      const r = await audit(u);
      r.action = r.class === 'ok' ? 'fine, but not in any sitemap' : recommend(r, inSitemap);
      return r;
    });
    for (const u of extraUrls.filter((x) => inSitemap(x))) {
      const r = results.find((x) => normalizeUrl(x.url) === u);
      if (r) extra.push({ ...r, notes: [...r.notes, 'also a sitemap entry'] });
    }
  }

  // ── Report ──
  const counts = Object.fromEntries(CLASSES.map((c) => [c, 0]));
  for (const r of results) counts[r.class] = (counts[r.class] || 0) + 1;
  console.log('\nResult by class (sitemap URLs)');
  for (const c of CLASSES) if (counts[c]) console.log(`  ${c.padEnd(15)} ${counts[c]}`);
  const geo = results.filter((r) => r.geoRedirect).length;
  if (geo) console.log(`  (${geo} URLs geo-redirect people in the audit's country; classified by the crawler view)`);

  const problems = results.filter((r) => r.class !== 'ok');
  console.log(`\nSitemap URLs to fix: ${problems.length}`);
  for (const r of problems) {
    const where = r.generators.length ? r.generators.join(', ') : r.sitemaps.join(', ');
    const status = r.status ?? 'no answer';
    const to = r.location ? ` -> ${r.location}` : r.canonical && r.class === 'canonical' ? ` canonical ${r.canonical}` : '';
    console.log(`  [${r.class}] ${status} ${r.url}${to}`);
    console.log(`      from: ${where}`);
    console.log(`      action: ${r.action}`);
    if (r.notes.length) console.log(`      notes: ${r.notes.join(' / ')}`);
  }

  const noted = results.filter((r) => r.class === 'ok' && r.notes.length);
  if (noted.length) {
    console.log(`\nOK URLs with notes: ${noted.length}`);
    for (const r of noted) console.log(`  ${r.url}\n      notes: ${r.notes.join(' / ')}`);
  }

  if (OPTS.links) {
    const badLinks = links.filter((l) => l.class !== 'ok');
    const linkCounts = {};
    for (const l of badLinks) linkCounts[l.class] = (linkCounts[l.class] || 0) + 1;
    const instances = badLinks.reduce((sum, l) => sum + l.linkingPages, 0);
    console.log(
      `\nLink targets not OK: ${badLinks.length} of ${links.length} (${Object.entries(linkCounts).map(([c, n]) => `${c} ${n}`).join(', ') || 'none'}), linked from ${instances} page/target pairs`
    );
    for (const l of badLinks.slice(0, 60)) {
      const to = l.location ? ` -> ${l.location}` : l.canonical ? ` canonical ${l.canonical}` : '';
      const final = l.final && l.final.url !== l.location ? ` (final ${l.final.status} ${l.final.url})` : '';
      console.log(`  [${l.class}] ${l.status ?? 'no answer'} ${l.url}${to}${final}  <- ${l.linkingPages} pages (${l.kinds.join('+')})`);
    }
    if (badLinks.length > 60) console.log(`  ...and ${badLinks.length - 60} more (see --json)`);
  }

  if (extra.length) {
    const extraProblems = extra.filter((r) => r.class !== 'ok');
    console.log(`\nExtra URLs not OK: ${extraProblems.length} of ${extra.length}`);
    for (const r of extraProblems) {
      const to = r.location ? ` -> ${r.location}` : r.canonical && r.class === 'canonical' ? ` canonical ${r.canonical}` : '';
      console.log(`  [${r.class}] ${r.status ?? 'no answer'} ${r.url}${to}`);
    }
  }

  const finishedAt = new Date();
  console.log(`\nDone in ${Math.round((finishedAt - startedAt) / 1000)}s, ${requestCount} requests.`);

  if (OPTS.json) {
    const report = {
      generatedAt: finishedAt.toISOString(),
      userAgent: USER_AGENT,
      crawlerUserAgent: CRAWLER_USER_AGENT,
      options: { ...OPTS },
      robots: robotsInfo,
      sitemaps,
      totals: { entries: listed, unique: listings.size, byClass: counts, requests: requestCount },
      results,
      links,
      extra,
    };
    fs.writeFileSync(path.resolve(OPTS.json), `${JSON.stringify(report, null, 2)}\n`);
    console.log(`JSON written to ${path.resolve(OPTS.json)}`);
  }

  if (OPTS.strict && problems.length) process.exit(1);
}

main().catch((err) => {
  console.error('Fatal error:', err && err.stack ? err.stack : err);
  process.exit(2);
});
