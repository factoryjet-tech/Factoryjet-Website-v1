#!/usr/bin/env node
/**
 * Schema-truth audit — does our structured data describe the page that exists?
 *
 * WHY THIS EXISTS
 * scripts/audit-36-parameters*.mjs score pages by substring presence. On
 * 2026-08-24 they reported 99.60/100 on a tree that would not compile, while
 * ~102 live pages carried VideoObject markup for videos that were never made
 * (no .mp4 in the repo, no /embed route, no <video> on the page). A grep for
 * the string "VideoObject" cannot tell truth from fabrication. This can.
 *
 * Every check here compares the JSON-LD against the RENDERED HTML it ships in,
 * fetched live with a cache-buster. Nothing is measured from .tsx source.
 *
 * CHECKS (each independently fail-able)
 *   S1 parse        every ld+json block is valid JSON
 *   S2 urls         every URL the schema references resolves (2xx)
 *   S3 media        VideoObject/AudioObject is backed by a real element on the page
 *   S4 entities     no two same-@type nodes without distinct @id (competing entities)
 *   S5 faq-parity   schema Question count matches visible FAQ count
 *   S6 headings     no skipped heading level (h2 -> h4), exactly one h1
 *   S7 rating       AggregateRating is accompanied by visible reviews on the page
 *   S8 freshness    dateModified present, parseable, not in the future
 *
 * Usage:
 *   node scripts/audit-schema-truth.mjs --filter /uk/
 *   node scripts/audit-schema-truth.mjs --limit 20 --verbose
 *   node scripts/audit-schema-truth.mjs --out pipeline/research/data/schema-truth.json
 *
 * Exits non-zero if any page fails any check, so it can gate a deploy.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const ORIGIN = 'https://factoryjet.com';
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const has = (n) => argv.includes(n);

const FILTER = arg('--filter', null);
const LIMIT = Number(arg('--limit', Infinity));
const CONCURRENCY = Number(arg('--concurrency', 6));
const OUT = arg('--out', null);
const VERBOSE = has('--verbose');

/* Classify by STATUS, not by a hardcoded host list, which goes stale.
 *
 * Measured 2026-08-24: linkedin.com returns 999, and clutch.co, goodfirms.co,
 * designrush.com and crunchbase.com all return 403 even to a full Chrome UA.
 * Those are real profiles behind bot protection, not dead links. Only a status
 * that positively asserts absence should fail the audit.
 *
 * 404 / 410 / 451  -> broken. The resource is gone or was never there.
 * 401 / 403 / 429 / 999 -> unverifiable. Access-controlled or bot-blocked.
 * 5xx              -> unverifiable. Their problem, probably transient.
 */
const DEFINITELY_DEAD = new Set([404, 410, 451]);

/* A real browser UA. Some hosts 403 anything that self-identifies as a bot. */
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/* Vocabulary URLs are identifiers, not documents. Never fetch. */
const NON_FETCHABLE = [/^https?:\/\/schema\.org/i, /^https?:\/\/www\.w3\.org/i];

const bust = (u) => u + (u.includes('?') ? '&' : '?') + 'cb=' + Math.random().toString(36).slice(2);

async function getPage(url) {
  const res = await fetch(bust(url), { headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' } });
  return { status: res.status, body: await res.text() };
}

/* One network check per unique URL across the whole run. */
const urlCache = new Map();
async function checkUrl(url) {
  if (urlCache.has(url)) return urlCache.get(url);
  const p = (async () => {
    if (NON_FETCHABLE.some((re) => re.test(url))) return { state: 'skipped', reason: 'vocabulary' };
    try { new URL(url); } catch { return { state: 'broken', reason: 'unparseable URL' }; }
    try {
      let res = await fetch(url, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': UA } });
      // Some origins refuse HEAD but serve GET. A 404 to HEAD is also worth
      // re-checking with GET: a few SPA hosts only render the real status on GET.
      if ([403, 404, 405, 501].includes(res.status)) {
        res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': UA } });
      }
      if (res.ok) return { state: 'ok', status: res.status };
      if (DEFINITELY_DEAD.has(res.status)) return { state: 'broken', status: res.status };
      return { state: 'unverifiable', status: res.status, reason: 'access-controlled or bot-blocked' };
    } catch (e) {
      // DNS failure / bad cert / refused connection: the host itself is wrong.
      return { state: 'broken', reason: String(e.message || e).slice(0, 80) };
    }
  })();
  urlCache.set(url, p);
  return p;
}

/* ── JSON-LD extraction and traversal ─────────────────────────────────────── */

function extractLd(html) {
  const raw = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const blocks = [];
  const parseErrors = [];
  raw.forEach((r, i) => {
    try { blocks.push(JSON.parse(r)); }
    catch (e) { parseErrors.push({ index: i, error: String(e.message || e).slice(0, 120) }); }
  });
  return { blocks, parseErrors, rawCount: raw.length };
}

/** Every object node in the graph, depth-first. */
function* walkNodes(node) {
  if (Array.isArray(node)) { for (const n of node) yield* walkNodes(n); return; }
  if (!node || typeof node !== 'object') return;
  yield node;
  for (const v of Object.values(node)) {
    if (v && typeof v === 'object') yield* walkNodes(v);
  }
}

/** URL-bearing keys worth resolving. `@id` is an identifier, handled separately. */
const URL_KEYS = ['url', 'contentUrl', 'embedUrl', 'thumbnailUrl', 'logo', 'image', 'sameAs', 'item', 'mainEntityOfPage', 'targetUrl'];

function collectUrls(blocks) {
  const found = new Set();
  for (const block of blocks) {
    for (const node of walkNodes(block)) {
      for (const key of URL_KEYS) {
        const v = node[key];
        const push = (x) => {
          if (typeof x === 'string' && /^https?:\/\//i.test(x)) found.add(x.split('#')[0]);
        };
        if (Array.isArray(v)) v.forEach(push);
        else if (typeof v === 'string') push(v);
        else if (v && typeof v === 'object' && typeof v.url === 'string') push(v.url);
      }
    }
  }
  return [...found];
}

function typeOf(node) {
  const t = node['@type'];
  return Array.isArray(t) ? t.join('+') : t;
}

/** Top-level entity assertions only: @graph members, or the block itself.
 *
 * This distinction matters. A nested `provider: { "@type": "LocalBusiness" }`
 * inside a Service is a property value describing who provides the service, and
 * is correctly un-@id'd. Counting it as a standalone entity makes every
 * correctly-authored page look like it has duplicates. Only nodes asserted at
 * the top level compete with each other. */
function topLevelNodes(blocks) {
  const out = [];
  for (const block of blocks) {
    const graph = block && block['@graph'];
    if (Array.isArray(graph)) out.push(...graph.filter((n) => n && typeof n === 'object'));
    else if (Array.isArray(block)) out.push(...block.filter((n) => n && typeof n === 'object'));
    else if (block && typeof block === 'object') out.push(block);
  }
  return out;
}

/* ── page-side facts ──────────────────────────────────────────────────────── */

function pageFacts(html) {
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const main = mainMatch ? mainMatch[0] : html;
  // Headings in document order, for the skip walk.
  const headings = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  return {
    headings,
    h1: headings.filter((h) => h === 1).length,
    hasVideoEl: /<video[\s>]/i.test(html) || /<iframe[^>]+(youtube|vimeo|wistia|player|\.mp4)/i.test(html),
    hasAudioEl: /<audio[\s>]/i.test(html),
    // Visible FAQ: <details>/<summary> accordions or elements flagged as faq.
    visibleFaq: Math.max(
      (main.match(/<summary[\s>]/gi) || []).length,
      (main.match(/class="[^"]*faq-q[^"]*"/gi) || []).length,
      (main.match(/data-faq-question/gi) || []).length,
    ),
    // Review text rendered on the page, not just claimed in markup.
    hasVisibleReviews: /\b(review|testimonial|rated|stars?)\b/i.test(main) &&
                       (/<blockquote/i.test(main) || /testimonial/i.test(main)),
  };
}

/** First skipped heading level in document order, or null. */
function firstHeadingSkip(headings) {
  let prev = 0;
  for (const h of headings) {
    if (prev && h > prev + 1) return { from: prev, to: h };
    prev = h;
  }
  return null;
}

/* ── the checks ───────────────────────────────────────────────────────────── */

async function auditPage(url, html) {
  const fails = [];
  const notes = [];
  const { blocks, parseErrors, rawCount } = extractLd(html);
  const facts = pageFacts(html);

  // S1 parse
  if (parseErrors.length) {
    fails.push({ check: 'S1-parse', detail: `${parseErrors.length}/${rawCount} ld+json block(s) are not valid JSON: ${parseErrors[0].error}` });
  }

  const nodes = blocks.flatMap((b) => [...walkNodes(b)]);

  // S2 urls
  const urls = collectUrls(blocks);
  const urlResults = await Promise.all(urls.map(async (u) => ({ url: u, ...(await checkUrl(u)) })));
  const broken = urlResults.filter((r) => r.state === 'broken');
  if (broken.length) {
    fails.push({ check: 'S2-urls', detail: `${broken.length} schema URL(s) do not resolve: ` + broken.slice(0, 3).map((b) => `${b.url} (${b.status || b.reason})`).join(', ') });
  }
  const unverifiable = urlResults.filter((r) => r.state === 'unverifiable');
  if (unverifiable.length) notes.push(`${unverifiable.length} URL(s) unverifiable (host blocks bots)`);

  // S3 media backed by a real element
  const videoNodes = nodes.filter((n) => typeOf(n) === 'VideoObject');
  if (videoNodes.length && !facts.hasVideoEl) {
    fails.push({ check: 'S3-media', detail: `${videoNodes.length} VideoObject node(s) but no <video>/<iframe> player on the page` });
  }
  const audioNodes = nodes.filter((n) => typeOf(n) === 'AudioObject');
  if (audioNodes.length && !facts.hasAudioEl) {
    fails.push({ check: 'S3-media', detail: `AudioObject declared but no <audio> element on the page` });
  }

  // S4 competing entities: same @type asserted more than once at TOP LEVEL,
  // without distinct @id. Nested property values are excluded by design.
  const top = topLevelNodes(blocks);
  const SINGLETON = ['Organization', 'LocalBusiness', 'ProfessionalService', 'WebPage', 'Service', 'Product', 'FAQPage'];
  for (const t of SINGLETON) {
    const same = top.filter((n) => typeOf(n) === t);
    if (same.length < 2) continue;
    const ids = same.map((n) => n['@id']).filter(Boolean);
    const distinct = new Set(ids).size;
    // Nodes sharing one @id merge — fine. Missing @id on 2+ nodes = competing.
    if (ids.length < same.length || distinct > 1) {
      fails.push({ check: 'S4-entities', detail: `${same.length} "${t}" nodes, ${ids.length} carry @id (${distinct} distinct) — un-@id'd duplicates compete as separate entities` });
    }
  }

  // S5 faq parity
  const qCount = nodes.filter((n) => typeOf(n) === 'Question').length;
  if (qCount && facts.visibleFaq) {
    if (qCount !== facts.visibleFaq) {
      fails.push({ check: 'S5-faq-parity', detail: `schema declares ${qCount} Question(s) but ${facts.visibleFaq} render on the page` });
    }
  } else if (qCount && !facts.visibleFaq) {
    notes.push(`${qCount} FAQ questions in schema, none detected in DOM (accordion markup may differ)`);
  }

  // S6 headings
  if (facts.h1 !== 1) fails.push({ check: 'S6-headings', detail: `${facts.h1} <h1> on the page, expected exactly 1` });
  const skip = firstHeadingSkip(facts.headings);
  if (skip) fails.push({ check: 'S6-headings', detail: `heading level skipped: h${skip.from} -> h${skip.to}` });

  // S7 rating sourcing.
  //
  // This is NOT a claim that the reviews are fake. It is a claim that the page
  // asserts a rating in markup that a reader cannot see anywhere on the page.
  // Google's review-snippet policy requires the reviewed content and the rating
  // to be visible to the user on the same page as the markup. The remedy is
  // usually to render the reviews, not to delete the schema.
  const ratings = nodes.filter((n) => typeOf(n) === 'AggregateRating');
  if (ratings.length && !facts.hasVisibleReviews) {
    const r = ratings[0];
    fails.push({
      check: 'S7-rating',
      detail: `AggregateRating ${r.ratingValue}/5 from ${r.reviewCount} reviews is in the JSON-LD, but the rendered page shows no rating, stars, or review text. Render the reviews to make the markup eligible.`,
    });
  }

  // S8 freshness
  const dm = nodes.map((n) => n.dateModified).find(Boolean);
  if (!dm) {
    notes.push('no dateModified in schema');
  } else {
    const d = new Date(dm);
    if (Number.isNaN(d.getTime())) fails.push({ check: 'S8-freshness', detail: `dateModified "${dm}" is not a parseable date` });
    else if (d.getTime() > Date.now() + 864e5) fails.push({ check: 'S8-freshness', detail: `dateModified "${dm}" is in the future` });
  }

  return { url, ldBlocks: rawCount, nodes: nodes.length, urlsChecked: urls.length, fails, notes };
}

/* ── crawl ────────────────────────────────────────────────────────────────── */

async function pool(items, fn, n) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      try { out[idx] = await fn(items[idx]); }
      catch (e) { out[idx] = { url: items[idx], error: String(e.message || e) }; }
    }
  }));
  return out;
}

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const index = await getPage(`${ORIGIN}/sitemap.xml`);
let urls = [];
for (const m of locs(index.body)) {
  const r = await getPage(m);
  urls.push(...locs(r.body));
}
urls = [...new Set(urls)];
if (FILTER) urls = urls.filter((u) => u.includes(FILTER));
urls = urls.slice(0, LIMIT);

console.error(`Schema-truth audit: ${urls.length} live URLs${FILTER ? ` matching ${FILTER}` : ''}\n`);

const results = await pool(urls, async (u) => {
  const { status, body } = await getPage(u);
  if (status !== 200) return { url: u, error: `HTTP ${status}` };
  return auditPage(u, body);
}, CONCURRENCY);

/* ── report ───────────────────────────────────────────────────────────────── */

const ok = results.filter((r) => r && !r.error);
const errored = results.filter((r) => r && r.error);
const failing = ok.filter((r) => r.fails.length);

const byCheck = {};
for (const r of failing) for (const f of r.fails) (byCheck[f.check] ||= []).push({ url: r.url, detail: f.detail });

const CHECKS = {
  'S1-parse': 'ld+json blocks are valid JSON',
  'S2-urls': 'schema URLs resolve',
  'S3-media': 'media schema backed by a real element',
  'S4-entities': 'no competing duplicate entities',
  'S5-faq-parity': 'schema FAQ count matches visible FAQ',
  'S6-headings': 'one h1, no skipped levels',
  'S7-rating': 'AggregateRating has visible reviews',
  'S8-freshness': 'dateModified valid and not future',
};

console.log(`=== SCHEMA TRUTH: ${ok.length} pages audited, ${failing.length} failing ===\n`);
console.log('Check          Pages failing   What it means');
console.log('-------------  -------------   -----------------------------------------');
for (const [id, desc] of Object.entries(CHECKS)) {
  const n = byCheck[id] ? byCheck[id].length : 0;
  console.log(`${id.padEnd(14)} ${String(n).padStart(13)}   ${desc}`);
}

for (const [id, items] of Object.entries(byCheck)) {
  console.log(`\n--- ${id}: ${items.length} page(s) ---`);
  const show = VERBOSE ? items : items.slice(0, 8);
  for (const it of show) console.log(`  ${it.url.replace(ORIGIN, '')}\n      ${it.detail}`);
  if (!VERBOSE && items.length > show.length) console.log(`  ...and ${items.length - show.length} more (--verbose to list all)`);
}

const allNotes = ok.flatMap((r) => r.notes.map((n) => ({ url: r.url, n })));
if (allNotes.length && VERBOSE) {
  console.log(`\n--- notes (not failures) ---`);
  allNotes.forEach((x) => console.log(`  ${x.url.replace(ORIGIN, '')}: ${x.n}`));
} else if (allNotes.length) {
  console.log(`\n${allNotes.length} advisory note(s), --verbose to list`);
}

if (errored.length) {
  console.log(`\n--- unreachable ---`);
  errored.forEach((r) => console.log(`  ${r.error}  ${r.url.replace(ORIGIN, '')}`));
}

console.log(`\nUnique URLs resolved: ${urlCache.size}`);

if (OUT) {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString(), filter: FILTER, results }, null, 2));
  console.log(`Wrote ${OUT}`);
}

if (failing.length || errored.length) {
  console.error(`\nFAIL: ${failing.length} page(s) carry schema that misdescribes the page.`);
  process.exit(1);
}
console.log('\nPASS: every page\'s structured data matches the page it ships on.');
