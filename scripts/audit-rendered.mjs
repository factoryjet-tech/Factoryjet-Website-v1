#!/usr/bin/env node
/**
 * Rendered-HTML audit of every URL in the live sitemap index, against
 * docs/AI-SEO-RULEBOOK.md Tier B rules 8-13.
 *
 * Rulebook §4b: word count and density are measured on RENDERED HTML, never on
 * .tsx source (source roughly doubles the count). Method below matches
 * pipeline/research/dfs_citation_anatomy.py so figures stay comparable with the
 * n=58 benchmark: strip script/style/noscript/svg, strip remaining tags, count.
 *
 * Stripping <script> also removes JSON-LD, which is intended.
 *
 * Benchmarks (median of 58 Google-AI-Overview-cited pages):
 *   words 2813 | h2 11 | <li> 110 | visible FAQ 72% | dateModified 56%
 *
 * Usage: node scripts/audit-rendered.mjs [--limit N] [--out <path>]
 * Default output: pipeline/research/data/rendered_audit_2026-08-03.json
 * Pass a dated --out on each re-run so audits stay diffable against each other.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const ORIGIN = 'https://factoryjet.com';
const CONCURRENCY = 8;
const args = process.argv.slice(2);
const limitArg = args.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(args[limitArg + 1]) : Infinity;
const outArg = args.indexOf('--out');
const OUT = outArg > -1 ? args[outArg + 1] : 'pipeline/research/data/rendered_audit_2026-08-03.json';

const BENCH = { words: 2813, h2: 11, li: 110 };

async function get(url) {
  // Cache-buster + no-cache header: Cloudflare serves stale HTML for up to ~20h
  // after a deploy, which would silently audit the previous build.
  const bust = url + (url.includes('?') ? '&' : '?') + 'cb=' + Math.random().toString(36).slice(2);
  const res = await fetch(bust, { headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' } });
  return { status: res.status, body: await res.text() };
}

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

/** Rendered word count, matching dfs_citation_anatomy.py. */
function renderedWords(html) {
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ');
  return stripped.split(/\s+/).filter(Boolean).length;
}

function count(html, re) {
  return (html.match(re) || []).length;
}

function analyse(url, html) {
  // Body-only for structural counts so header/footer nav lists do not inflate <li>.
  const bodyMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const body = bodyMatch ? bodyMatch[0] : html;
  const jsonLd = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1]).join(' ');
  return {
    url,
    words: renderedWords(html),
    h1: count(html, /<h1[\s>]/gi),
    h2: count(html, /<h2[\s>]/gi),
    h3: count(html, /<h3[\s>]/gi),
    liAll: count(html, /<li[\s>]/gi),
    liMain: count(body, /<li[\s>]/gi),
    tables: count(html, /<table[\s>]/gi),
    dateModified: /"dateModified"/.test(jsonLd),
    personSchema: /"@type"\s*:\s*"Person"/.test(jsonLd),
    faqSchema: /"@type"\s*:\s*"FAQPage"/.test(jsonLd),
    breadcrumb: /"@type"\s*:\s*"BreadcrumbList"/.test(jsonLd),
    faqQuestions: count(jsonLd, /"@type"\s*:\s*"Question"/g),
  };
}

async function pool(items, fn, n) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      try { out[idx] = await fn(items[idx]); }
      catch (e) { out[idx] = { url: items[idx], error: String(e) }; }
    }
  }));
  return out;
}

const index = await get(`${ORIGIN}/sitemap.xml`);
const childMaps = locs(index.body);
let urls = [];
for (const m of childMaps) {
  const r = await get(m);
  const found = locs(r.body);
  console.error(`${m.replace(ORIGIN, '')}: ${found.length}`);
  urls.push(...found);
}
urls = [...new Set(urls)].slice(0, LIMIT);
console.error(`\nAuditing ${urls.length} live URLs...\n`);

const results = await pool(urls, async (u) => {
  const { status, body } = await get(u);
  if (status !== 200) return { url: u, status, error: `HTTP ${status}` };
  return { status, ...analyse(u, body) };
}, CONCURRENCY);

const ok = results.filter((r) => !r.error);
const failed = results.filter((r) => r.error);

const med = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
};
const pctOf = (n) => `${n}/${ok.length} (${Math.round((n / ok.length) * 100)}%)`;

console.log(`=== RENDERED AUDIT: ${ok.length} pages (${failed.length} failed) ===\n`);
console.log(`Metric                  ours (median)   benchmark   verdict`);
const line = (label, ourVal, bench) =>
  console.log(`${label.padEnd(22)} ${String(ourVal).padStart(9)}   ${String(bench).padStart(9)}   ${ourVal >= bench ? 'OK' : 'BELOW'}`);
line('rendered words', med(ok.map((r) => r.words)), BENCH.words);
line('h2 count', med(ok.map((r) => r.h2)), BENCH.h2);
line('<li> in <main>', med(ok.map((r) => r.liMain)), BENCH.li);
line('<li> whole page', med(ok.map((r) => r.liAll)), BENCH.li);

console.log(`\ndateModified   ${pctOf(ok.filter((r) => r.dateModified).length)}   benchmark 56%`);
console.log(`Person schema  ${pctOf(ok.filter((r) => r.personSchema).length)}   benchmark 41%`);
console.log(`FAQPage schema ${pctOf(ok.filter((r) => r.faqSchema).length)}   benchmark 41%`);
console.log(`BreadcrumbList ${pctOf(ok.filter((r) => r.breadcrumb).length)}`);
console.log(`exactly one h1 ${pctOf(ok.filter((r) => r.h1 === 1).length)}   benchmark 55/58`);

const badH1 = ok.filter((r) => r.h1 !== 1);
if (badH1.length) {
  console.log(`\n--- h1 violations (Tier A rule 1) ---`);
  badH1.forEach((r) => console.log(`  h1=${r.h1}  ${r.url.replace(ORIGIN, '')}`));
}

console.log(`\n--- Weakest 25 by <li> in <main> (benchmark 110) ---`);
[...ok].sort((a, b) => a.liMain - b.liMain).slice(0, 25)
  .forEach((r) => console.log(`  li=${String(r.liMain).padStart(3)}  w=${String(r.words).padStart(5)}  ${r.url.replace(ORIGIN, '')}`));

if (failed.length) {
  console.log(`\n--- Failed ---`);
  failed.forEach((r) => console.log(`  ${r.error}  ${r.url}`));
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString(), benchmark: BENCH, results }, null, 2));
console.log(`\nWrote ${OUT}`);
