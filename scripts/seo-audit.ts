#!/usr/bin/env tsx
/**
 * FactoryJet SEO Audit Tool v1.0
 * ─────────────────────────────────────────────────────────────────────────────
 * Deep technical SEO audit for factoryjet.com
 * Zero external dependencies — uses Node 22 built-in fetch + TypeScript.
 *
 * Usage:
 *   npx tsx scripts/seo-audit.ts
 *   SITE_URL=https://staging.factoryjet.com npx tsx scripts/seo-audit.ts
 *
 * Output:
 *   seo-audit-report-YYYY-MM-DD.md  (in project root)
 *   seo-audit-data-YYYY-MM-DD.json  (raw data, for Claude fix prompt)
 *
 * Checks performed:
 *   Infrastructure  : robots.txt, llms.txt, sitemap(s)
 *   Per-page        : HTTP status, title, meta desc, H1, canonical, JSON-LD,
 *                     OG tags, hreflang, image alt text, redirect detection
 *   Cross-page      : Duplicate titles, duplicate descriptions, orphan detection
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ─── Config ───────────────────────────────────────────────────────────────────
const CONFIG = {
  baseUrl:       process.env.SITE_URL || 'https://factoryjet.com',
  concurrency:   4,
  delayMs:       250,
  timeoutMs:     20_000,
  userAgent:     'FactoryJetSEOAudit/1.0 (+https://factoryjet.com)',
  sitemapPaths: [
    '/sitemap.xml',
    '/sitemap-us/sitemap.xml',
    '/sitemap-india/sitemap.xml',
    '/sitemap-uk/sitemap.xml',
  ],
  requiredCrawlers: [
    'Googlebot', 'Bingbot', 'GPTBot', 'ClaudeBot', 'PerplexityBot',
  ],
  title: { min: 30, max: 65 },
  desc:  { min: 100, max: 165 },
};

// ─── Types ────────────────────────────────────────────────────────────────────
type Severity = 'critical' | 'warning' | 'info';

interface Issue {
  severity: Severity;
  category: string;
  url:      string;
  detail:   string;
}

interface ImageInfo {
  src:           string;
  alt:           string | null;
  isNextImage:   boolean;
}

interface PageMeta {
  title:          string;
  description:    string;
  canonical:      string;
  h1s:            string[];
  h2Count:        number;
  ogTitle:        string;
  ogDescription:  string;
  ogImage:        string;
  hreflangs:      Array<{ lang: string; href: string }>;
  jsonLd:         Array<Record<string, unknown>>;
  jsonLdErrors:   string[];
  images:         ImageInfo[];
  internalLinks:  string[];
}

interface PageResult {
  url:        string;
  status:     number;
  finalUrl:   string;
  redirected: boolean;
  error?:     string;
  meta?:      PageMeta;
}

// ─── Issue registry ───────────────────────────────────────────────────────────
const allIssues: Issue[] = [];

function addIssue(severity: Severity, category: string, url: string, detail: string): void {
  allIssues.push({ severity, category, url, detail });
}

function getIssues(severity: Severity): Issue[] {
  return allIssues.filter(i => i.severity === severity);
}

// ─── Fetch helper ─────────────────────────────────────────────────────────────
interface FetchResult {
  ok:         boolean;
  status:     number;
  finalUrl:   string;
  redirected: boolean;
  body:       string;
  error?:     string;
}

async function fetchUrl(url: string): Promise<FetchResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CONFIG.timeoutMs);

  try {
    const res = await fetch(url, {
      signal:   controller.signal,
      redirect: 'follow',
      headers:  { 'User-Agent': CONFIG.userAgent },
    });
    const body = await res.text();
    return {
      ok:         res.ok,
      status:     res.status,
      finalUrl:   res.url,
      redirected: res.redirected,
      body,
    };
  } catch (err: unknown) {
    return {
      ok:         false,
      status:     0,
      finalUrl:   url,
      redirected: false,
      body:       '',
      error:      err instanceof Error ? err.message : String(err),
    };
  } finally {
    clearTimeout(timer);
  }
}

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

// ─── HTML parsing (regex-based, zero deps) ────────────────────────────────────
function parseHtml(html: string): PageMeta {
  const meta: PageMeta = {
    title:         '',
    description:   '',
    canonical:     '',
    h1s:           [],
    h2Count:       0,
    ogTitle:       '',
    ogDescription: '',
    ogImage:       '',
    hreflangs:     [],
    jsonLd:        [],
    jsonLdErrors:  [],
    images:        [],
    internalLinks: [],
  };

  // Title
  const titleM = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  meta.title = titleM ? titleM[1].replace(/\s+/g, ' ').trim() : '';

  // Meta description — handle both attribute orders
  const descPatterns = [
    /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i,
    /<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i,
  ];
  for (const p of descPatterns) {
    const m = html.match(p);
    if (m) { meta.description = m[1].trim(); break; }
  }

  // Canonical
  const canonM = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
               ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  meta.canonical = canonM ? canonM[1].trim() : '';

  // H1s — strip inner tags
  for (const m of html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)) {
    meta.h1s.push(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  }

  // H2 count
  meta.h2Count = (html.match(/<h2[^>]*>/gi) ?? []).length;

  // OG tags
  const ogTag = (prop: string): string => {
    const m = html.match(new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`, 'i'))
           ?? html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${prop}["']`, 'i'));
    return m ? m[1] : '';
  };
  meta.ogTitle       = ogTag('og:title');
  meta.ogDescription = ogTag('og:description');
  meta.ogImage       = ogTag('og:image');

  // Hreflang — handle varied attribute orders
  for (const m of html.matchAll(/<link[^>]+rel=["']alternate["'][^>]*>/gi)) {
    const tag = m[0];
    const langM = tag.match(/hreflang=["']([^"']+)["']/i);
    const hrefM = tag.match(/href=["']([^"']+)["']/i);
    if (langM && hrefM) {
      meta.hreflangs.push({ lang: langM[1], href: hrefM[1] });
    }
  }

  // JSON-LD
  for (const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      meta.jsonLd.push(JSON.parse(m[1]) as Record<string, unknown>);
    } catch (e) {
      meta.jsonLdErrors.push(e instanceof Error ? e.message : String(e));
    }
  }

  // Images
  for (const m of html.matchAll(/<img([^>]+)>/gi)) {
    const attrs   = m[1];
    const srcM    = attrs.match(/src=["']([^"']+)["']/i);
    const altM    = attrs.match(/alt=["']([^"']*)["']/i);
    const isNext  = attrs.includes('data-nimg') || attrs.includes('/_next/image');
    meta.images.push({
      src:         srcM ? srcM[1] : '',
      alt:         altM ? altM[1] : null,
      isNextImage: isNext,
    });
  }

  // Internal links
  for (const m of html.matchAll(/<a[^>]+href=["']([^"'#?]+)["']/gi)) {
    const href = m[1];
    if (href.startsWith('/') || href.includes('factoryjet.com')) {
      meta.internalLinks.push(href);
    }
  }

  return meta;
}

// ─── Phase 1: robots.txt ──────────────────────────────────────────────────────
async function checkRobots(): Promise<void> {
  console.log('  ✦ robots.txt');
  const res = await fetchUrl(`${CONFIG.baseUrl}/robots.txt`);

  if (!res.ok) {
    addIssue('critical', 'robots.txt', '/robots.txt',
      `robots.txt not found or returned ${res.status}. Crawlers may refuse to index.`);
    return;
  }

  const body = res.body;
  const hasWildcard = /User-agent:\s*\*/i.test(body);

  for (const bot of CONFIG.requiredCrawlers) {
    const mentioned = new RegExp(`User-agent:\\s*${bot}`, 'i').test(body);
    if (!mentioned && !hasWildcard) {
      addIssue('warning', 'robots.txt', '/robots.txt',
        `${bot} not covered by any User-agent rule (no wildcard either)`);
    }
  }

  // Check no important bots are fully blocked
  for (const m of body.matchAll(/User-agent:\s*([^\n\r]+)[\r\n]+Disallow:\s*\/\s*$/gim)) {
    const agent = m[1].trim();
    if (agent !== '*') {
      addIssue('critical', 'robots.txt', '/robots.txt',
        `${agent} is completely blocked (Disallow: /)`);
    }
  }

  if (!/Sitemap:/i.test(body)) {
    addIssue('warning', 'robots.txt', '/robots.txt',
      'No "Sitemap:" directive — add Sitemap: https://factoryjet.com/sitemap.xml');
  }
}

// ─── Phase 1: llms.txt ───────────────────────────────────────────────────────
async function checkLlmsTxt(): Promise<void> {
  console.log('  ✦ llms.txt');
  const res = await fetchUrl(`${CONFIG.baseUrl}/llms.txt`);

  if (!res.ok) {
    addIssue('warning', 'llms.txt', '/llms.txt',
      'llms.txt not found. AI crawlers lack structured guidance on your content. ' +
      'Add /public/llms.txt to boost GEO/AEO visibility.');
    return;
  }

  const body = res.body;
  const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Gemini'];
  for (const bot of aiBots) {
    if (!body.includes(bot)) {
      addIssue('info', 'llms.txt', '/llms.txt',
        `${bot} not mentioned — consider adding explicit Allow for AI citation`);
    }
  }
}

// ─── Phase 2: Sitemap parsing ────────────────────────────────────────────────
async function parseSitemaps(): Promise<string[]> {
  console.log('  ✦ Sitemaps');
  const collected = new Set<string>();
  let sitemapsFound = 0;

  const parseSitemap = async (url: string): Promise<void> => {
    const res = await fetchUrl(url);
    await sleep(CONFIG.delayMs);

    if (!res.ok) {
      const isMain = url.endsWith('/sitemap.xml');
      addIssue(
        isMain ? 'critical' : 'info',
        'Sitemap',
        url,
        `Sitemap not found (${res.status})`
      );
      return;
    }

    sitemapsFound++;

    // Nested sitemap index → recurse
    for (const m of res.body.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<\/sitemap>/gi)) {
      await parseSitemap(m[1].trim());
    }

    // Collect page URLs
    for (const m of res.body.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<\/url>/gi)) {
      collected.add(m[1].trim());
    }

    // Warn if no <lastmod>
    if (!res.body.includes('<lastmod>')) {
      addIssue('info', 'Sitemap', url,
        'No <lastmod> tags — add for better crawl budget efficiency');
    }
  };

  for (const p of CONFIG.sitemapPaths) {
    await parseSitemap(`${CONFIG.baseUrl}${p}`);
  }

  const urls = [...collected].filter(u => u.includes('factoryjet.com'));

  if (urls.length === 0) {
    addIssue('critical', 'Sitemap', '/sitemap.xml',
      'No page URLs found in any sitemap. Googlebot cannot discover pages.');
  } else if (urls.length < 30) {
    addIssue('warning', 'Sitemap', '/sitemap.xml',
      `Only ${urls.length} URLs in sitemap — expected 50+. ` +
      'Missing pages won\'t be crawled.');
  }

  console.log(`    Found ${urls.length} URLs across ${sitemapsFound} sitemap(s)`);
  return urls;
}

// ─── Phase 3: Per-page audit ─────────────────────────────────────────────────
function getExpectedSchemaTypes(url: string): string[] {
  const expected: string[] = ['WebPage'];
  if (url.match(/\/(austin|miami|denver|nashville|portland|charlotte|raleigh|tampa|new-york|cleveland|mumbai|bangalore|delhi|hyderabad|chennai|pune|ahmedabad|kolkata|surat|jaipur|kochi|lucknow|chandigarh|madurai)\//)) {
    expected.push('LocalBusiness');
  }
  if (url.includes('/blog/') || url.includes('/guide')) {
    expected.push('Article');
  }
  return expected;
}

async function auditPage(url: string): Promise<PageResult> {
  const res = await fetchUrl(url);

  const result: PageResult = {
    url,
    status:     res.status,
    finalUrl:   res.finalUrl,
    redirected: res.redirected,
    error:      res.error,
  };

  if (res.error) {
    addIssue('critical', 'HTTP', url, `Request failed: ${res.error}`);
    return result;
  }

  if (res.status === 404) {
    addIssue('critical', 'HTTP', url, `404 Not Found — page in sitemap is broken`);
    return result;
  }

  if (res.status >= 500) {
    addIssue('critical', 'HTTP', url, `Server error ${res.status}`);
    return result;
  }

  if (res.status >= 400) {
    addIssue('critical', 'HTTP', url, `Client error ${res.status}`);
    return result;
  }

  if (res.redirected && res.finalUrl !== url) {
    const finalPath = res.finalUrl.replace(CONFIG.baseUrl, '');
    const origPath  = url.replace(CONFIG.baseUrl, '');
    addIssue('warning', 'Redirect', url,
      `Redirects → ${finalPath}. Update sitemap to use final URL to avoid crawl waste.`);
  }

  const meta = parseHtml(res.body);
  result.meta = meta;

  // ── Title
  if (!meta.title) {
    addIssue('critical', 'Title Tag', url, 'No <title> tag found');
  } else {
    const len = meta.title.length;
    if (len < CONFIG.title.min) {
      addIssue('warning', 'Title Tag', url,
        `Too short (${len} chars, min ${CONFIG.title.min}): "${meta.title}"`);
    } else if (len > CONFIG.title.max) {
      addIssue('warning', 'Title Tag', url,
        `Too long (${len} chars, max ${CONFIG.title.max}): "${meta.title.slice(0, 70)}…"`);
    }
  }

  // ── Meta description
  if (!meta.description) {
    addIssue('critical', 'Meta Description', url, 'No meta description found');
  } else {
    const len = meta.description.length;
    if (len < CONFIG.desc.min) {
      addIssue('warning', 'Meta Description', url,
        `Too short (${len} chars, min ${CONFIG.desc.min}): "${meta.description}"`);
    } else if (len > CONFIG.desc.max) {
      addIssue('warning', 'Meta Description', url,
        `Too long (${len} chars, max ${CONFIG.desc.max}): "${meta.description.slice(0, 80)}…"`);
    }
  }

  // ── H1
  if (meta.h1s.length === 0) {
    addIssue('critical', 'H1 Tag', url, 'No H1 tag found');
  } else if (meta.h1s.length > 1) {
    addIssue('warning', 'H1 Tag', url,
      `${meta.h1s.length} H1 tags found (should be exactly 1): ` +
      meta.h1s.slice(0, 3).map(h => `"${h.slice(0, 50)}"`).join(' | '));
  }

  // ── Canonical
  if (!meta.canonical) {
    addIssue('warning', 'Canonical', url, 'No canonical tag — Google may choose wrong canonical');
  } else {
    const norm = (u: string) => u.replace(/\/$/, '').toLowerCase();
    if (norm(meta.canonical) !== norm(url)) {
      addIssue('warning', 'Canonical', url,
        `Canonical points to different URL:\n  Page:      ${url}\n  Canonical: ${meta.canonical}`);
    }
  }

  // ── JSON-LD
  if (meta.jsonLd.length === 0 && meta.jsonLdErrors.length === 0) {
    addIssue('warning', 'JSON-LD Schema', url, 'No JSON-LD schema found — missing structured data');
  }

  for (const err of meta.jsonLdErrors) {
    addIssue('critical', 'JSON-LD Schema', url, `Invalid JSON-LD (parse error): ${err}`);
  }

  if (meta.jsonLd.length > 0) {
    const getTypes = (schema: Record<string, unknown>): string[] => {
      const types: string[] = [];
      const t = schema['@type'];
      if (typeof t === 'string') types.push(t);
      if (Array.isArray(t)) types.push(...t.map(String));
      const graph = schema['@graph'];
      if (Array.isArray(graph)) {
        for (const node of graph) {
          types.push(...getTypes(node as Record<string, unknown>));
        }
      }
      return types;
    };

    const foundTypes = meta.jsonLd.flatMap(getTypes);
    const expected   = getExpectedSchemaTypes(url);

    for (const exp of expected) {
      if (!foundTypes.includes(exp) && exp === 'LocalBusiness') {
        addIssue('warning', 'JSON-LD Schema', url,
          `City/local page missing LocalBusiness schema. ` +
          `Found: ${foundTypes.join(', ') || 'none'}`);
      }
    }
  }

  // ── OG tags
  if (!meta.ogTitle)       addIssue('warning', 'Open Graph', url, 'Missing og:title');
  if (!meta.ogDescription) addIssue('warning', 'Open Graph', url, 'Missing og:description');
  if (!meta.ogImage)       addIssue('warning', 'Open Graph', url, 'Missing og:image — affects social sharing previews');

  // ── Hreflang
  const isIntlPage = url.includes('/us/') || url.match(
    /\/(web-design|ecommerce-development|services)\/(mumbai|bangalore|delhi|hyderabad|chennai|pune|ahmedabad|kolkata|surat|jaipur|kochi|lucknow|chandigarh|madurai)\//
  );
  if (isIntlPage && meta.hreflangs.length === 0) {
    addIssue('warning', 'Hreflang', url,
      'International page missing hreflang tags — may cause geo-targeting issues');
  }

  // ── Images
  const noAlt = meta.images.filter(img => img.alt === null);
  if (noAlt.length > 0) {
    addIssue('warning', 'Image Alt Text', url,
      `${noAlt.length} image(s) missing alt attribute (accessibility + SEO impact)`);
  }

  const rawImgs = meta.images.filter(img => !img.isNextImage);
  if (rawImgs.length > 0) {
    addIssue('info', 'Next/Image', url,
      `${rawImgs.length} raw <img> tag(s) detected — ` +
      'use next/image for automatic optimization and lazy loading');
  }

  return result;
}

// ─── Phase 3: Concurrent batch processor ─────────────────────────────────────
async function auditAllPages(urls: string[]): Promise<PageResult[]> {
  const results: PageResult[] = [];
  const { concurrency, delayMs } = CONFIG;

  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(u => auditPage(u)));
    results.push(...batchResults);
    await sleep(delayMs);

    const done = Math.min(i + concurrency, urls.length);
    process.stdout.write(`\r    Progress: ${done}/${urls.length} pages audited…`);
  }
  process.stdout.write('\n');
  return results;
}

// ─── Phase 4: Cross-page analysis ────────────────────────────────────────────
function crossPageAnalysis(results: PageResult[]): void {
  const titles:    Record<string, string[]> = {};
  const descs:     Record<string, string[]> = {};
  const linkedSet: Set<string>              = new Set();

  for (const page of results) {
    if (!page.meta) continue;
    const { title, description, internalLinks } = page.meta;

    if (title) {
      if (!titles[title]) titles[title] = [];
      titles[title].push(page.url);
    }
    if (description) {
      if (!descs[description]) descs[description] = [];
      descs[description].push(page.url);
    }
    for (const link of internalLinks) {
      const abs = link.startsWith('/') ? `${CONFIG.baseUrl}${link}` : link;
      linkedSet.add(abs.replace(/\/$/, ''));
    }
  }

  // Duplicate titles
  for (const [title, urls] of Object.entries(titles)) {
    if (urls.length > 1) {
      addIssue('critical', 'Duplicate Title', urls[0],
        `Title "${title.slice(0, 60)}" shared by ${urls.length} pages:\n` +
        urls.map(u => `  • ${u}`).join('\n'));
    }
  }

  // Duplicate descriptions
  for (const [desc, urls] of Object.entries(descs)) {
    if (urls.length > 1) {
      addIssue('warning', 'Duplicate Description', urls[0],
        `Same meta description on ${urls.length} pages:\n` +
        urls.map(u => `  • ${u}`).join('\n'));
    }
  }

  // Orphaned pages (in sitemap, not linked from any page)
  const allPageUrls = results.map(r => r.url.replace(/\/$/, ''));
  const orphans = allPageUrls.filter(u => {
    const norm = u.replace(/\/$/, '');
    return norm !== CONFIG.baseUrl && !linkedSet.has(norm);
  });
  if (orphans.length > 0) {
    addIssue('info', 'Orphan Pages', CONFIG.baseUrl,
      `${orphans.length} page(s) in sitemap but not linked from any other page:\n` +
      orphans.map(u => `  • ${u}`).join('\n'));
  }
}

// ─── Report generator ────────────────────────────────────────────────────────
function generateReport(results: PageResult[], sitemapUrls: string[]): string {
  const date     = new Date().toISOString().slice(0, 10);
  const critical = getIssues('critical');
  const warnings = getIssues('warning');
  const info     = getIssues('info');

  const groupBy = (issues: Issue[]): Record<string, Issue[]> =>
    issues.reduce((acc, i) => {
      (acc[i.category] ??= []).push(i);
      return acc;
    }, {} as Record<string, Issue[]>);

  const renderGroup = (issues: Issue[], emoji: string): string => {
    const grouped = groupBy(issues);
    let md = '';
    for (const [cat, catIssues] of Object.entries(grouped)) {
      md += `### ${cat} (${catIssues.length})\n\n`;
      for (const issue of catIssues) {
        md += `- **\`${issue.url.replace(CONFIG.baseUrl, '') || '/'}\`**  \n`;
        md += `  ${issue.detail.split('\n').join('  \n  ')}\n\n`;
      }
    }
    return md;
  };

  let md = `# FactoryJet SEO Audit Report\n\n`;
  md += `> **Date:** ${date}  \n`;
  md += `> **Site:** ${CONFIG.baseUrl}  \n`;
  md += `> **Pages in sitemap:** ${sitemapUrls.length}  \n`;
  md += `> **Pages audited:** ${results.length}  \n\n`;
  md += `---\n\n`;

  // ── Summary table
  md += `## Summary\n\n`;
  md += `| | Severity | Count | Action |\n`;
  md += `|-|----------|-------|--------|\n`;
  md += `| 🔴 | **Critical** | ${critical.length} | Fix immediately — ranking impact |\n`;
  md += `| 🟡 | **Warning** | ${warnings.length} | Fix this sprint |\n`;
  md += `| 🔵 | **Info** | ${info.length} | Improvements / opportunities |\n\n`;

  if (critical.length === 0 && warnings.length === 0) {
    md += `✅ **No critical or warning issues found. Site is in excellent SEO health.**\n\n`;
  }

  md += `---\n\n`;

  // ── Issues by severity
  if (critical.length > 0) {
    md += `## 🔴 Critical Issues\n\n`;
    md += renderGroup(critical, '🔴');
    md += `---\n\n`;
  }

  if (warnings.length > 0) {
    md += `## 🟡 Warnings\n\n`;
    md += renderGroup(warnings, '🟡');
    md += `---\n\n`;
  }

  if (info.length > 0) {
    md += `## 🔵 Info / Opportunities\n\n`;
    md += renderGroup(info, '🔵');
    md += `---\n\n`;
  }

  // ── Per-page table
  md += `## Per-Page Results\n\n`;
  md += `| Page | Status | Title | Desc | H1 | Schema | OG | Hreflang |\n`;
  md += `|------|--------|-------|------|----|----|----|---------|\n`;

  for (const page of results) {
    const slug = (page.url.replace(CONFIG.baseUrl, '') || '/').slice(0, 55);

    if (!page.meta) {
      md += `| \`${slug}\` | ${page.status || 'ERR'} | — | — | — | — | — | — |\n`;
      continue;
    }

    const m = page.meta;
    const tLen = m.title.length;
    const dLen = m.description.length;

    const tOk = tLen >= CONFIG.title.min && tLen <= CONFIG.title.max;
    const dOk = dLen >= CONFIG.desc.min  && dLen <= CONFIG.desc.max;

    const tCell  = m.title ? (tOk ? `✅ ${tLen}` : `⚠️ ${tLen}`) : '❌';
    const dCell  = m.description ? (dOk ? `✅ ${dLen}` : `⚠️ ${dLen}`) : '❌';
    const h1Cell = m.h1s.length === 1 ? '✅' : (m.h1s.length === 0 ? '❌' : `⚠️×${m.h1s.length}`);
    const schCell = m.jsonLdErrors.length > 0
      ? `❌ ERR`
      : m.jsonLd.length > 0 ? `✅ ×${m.jsonLd.length}` : '❌';
    const ogCell   = (m.ogTitle && m.ogDescription && m.ogImage) ? '✅' : '⚠️';
    const hlCell   = m.hreflangs.length > 0 ? `✅ ×${m.hreflangs.length}` : '—';
    const status   = page.redirected ? `${page.status}↗` : String(page.status);

    md += `| \`${slug}\` | ${status} | ${tCell} | ${dCell} | ${h1Cell} | ${schCell} | ${ogCell} | ${hlCell} |\n`;
  }

  md += `\n---\n\n`;
  md += `## How to Use This Report\n\n`;
  md += `1. **Fix Critical issues first** — these directly suppress rankings or break crawling.\n`;
  md += `2. **Address Warnings next** — these are ranking signals you\'re leaving on the table.\n`;
  md += `3. **Consider Info items** — quick wins for AI visibility and technical polish.\n`;
  md += `4. **Re-run after fixes:** \`npx tsx scripts/seo-audit.ts\` to verify improvements.\n`;
  md += `5. **Pass raw JSON to Claude** (\`seo-audit-data-${date}.json\`) for an automated fix session.\n\n`;
  md += `---\n`;
  md += `*FactoryJet SEO Audit Tool v1.0 — generated ${new Date().toISOString()}*\n`;

  return md;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  const date = new Date().toISOString().slice(0, 10);
  const mdFile   = path.join(ROOT, `seo-audit-report-${date}.md`);
  const jsonFile = path.join(ROOT, `seo-audit-data-${date}.json`);

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║       FactoryJet SEO Audit Tool v1.0                    ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`\n  Site:   ${CONFIG.baseUrl}`);
  console.log(`  Report: seo-audit-report-${date}.md`);
  console.log('');

  // ── Phase 1: Infrastructure
  console.log('📋 Phase 1: Infrastructure');
  await checkRobots();
  await sleep(CONFIG.delayMs);
  await checkLlmsTxt();
  await sleep(CONFIG.delayMs);

  // ── Phase 2: Sitemaps
  console.log('\n🗺️  Phase 2: Sitemap Discovery');
  const sitemapUrls = await parseSitemaps();

  if (sitemapUrls.length === 0) {
    console.error('\n❌ No URLs found. Cannot proceed without a sitemap.');
    process.exit(1);
  }

  // ── Phase 3: Per-page audit
  console.log(`\n📄 Phase 3: Per-Page Audit (${sitemapUrls.length} pages)`);
  const pageResults = await auditAllPages(sitemapUrls);

  // ── Phase 4: Cross-page analysis
  console.log('\n🔄 Phase 4: Cross-Page Analysis');
  crossPageAnalysis(pageResults);
  console.log('  ✦ Duplicate title check');
  console.log('  ✦ Duplicate description check');
  console.log('  ✦ Orphan page detection');

  // ── Phase 5: Write outputs
  console.log('\n💾 Phase 5: Generating Report');
  const report = generateReport(pageResults, sitemapUrls);
  fs.writeFileSync(mdFile, report, 'utf8');

  // Also save raw JSON for the Claude fix prompt
  const rawData = {
    date,
    baseUrl:  CONFIG.baseUrl,
    summary: {
      critical: getIssues('critical').length,
      warning:  getIssues('warning').length,
      info:     getIssues('info').length,
      pages:    pageResults.length,
    },
    issues: allIssues,
    pages:  pageResults.map(p => ({
      url:      p.url,
      status:   p.status,
      title:    p.meta?.title ?? null,
      desc:     p.meta?.description ?? null,
      h1:       p.meta?.h1s[0] ?? null,
      canonical:p.meta?.canonical ?? null,
      schemas:  p.meta?.jsonLd.length ?? 0,
      hreflangs:p.meta?.hreflangs.length ?? 0,
    })),
  };
  fs.writeFileSync(jsonFile, JSON.stringify(rawData, null, 2), 'utf8');

  // ── Summary
  const c = getIssues('critical').length;
  const w = getIssues('warning').length;
  const i = getIssues('info').length;

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  AUDIT COMPLETE                                          ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║  🔴 Critical  : ${String(c).padEnd(40)}║`);
  console.log(`║  🟡 Warnings  : ${String(w).padEnd(40)}║`);
  console.log(`║  🔵 Info      : ${String(i).padEnd(40)}║`);
  console.log(`║  📄 Pages     : ${String(pageResults.length).padEnd(40)}║`);
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║  📁 ${`seo-audit-report-${date}.md`.padEnd(52)}║`);
  console.log(`║  📁 ${`seo-audit-data-${date}.json`.padEnd(52)}║`);
  console.log('╚══════════════════════════════════════════════════════════╝\n');
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err);
  process.exit(1);
});
