#!/usr/bin/env node
/**
 * Publishes the AI citation study dataset to /public so the study page's claim
 * that its data is open is actually true and checkable.
 *
 * The study page (src/app/ai-citation-study/page.tsx) exists to be cited and
 * linked. It told readers the data was "committed in our repository" while
 * linking to nothing, and the repository is private. A writer who wants to cite
 * it had nothing to point at. This emits a CSV they can download and verify.
 *
 * It ALSO re-derives every headline figure on that page from the source JSON and
 * fails loudly on a mismatch. A wrong number on a page whose whole value is
 * being trusted is worse than no page, so this is a guard, not a convenience.
 *
 * Run: node scripts/export-citation-study-dataset.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'pipeline/research/data/citation_anatomy_pages.json');
const OUT_CSV = join(ROOT, 'public/data/ai-citation-study-2026-08.csv');

const all = JSON.parse(readFileSync(SRC, 'utf8'));
// The study measured only pages that fetched successfully. Anything that
// errored was never in the medians and must not be in the published dataset.
const rows = all.filter((r) => r.ok);

// Match dfs_citation_anatomy.py exactly. It takes the upper-middle element
// rather than averaging the two middles, and floors its percentages with
// integer division. Using a different convention here would flag the page's
// correct figures as wrong. Verified against that script 2026-08-18.
const median = (xs) => {
  const s = [...xs].filter((x) => x !== null && x !== undefined).sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
};
const pct = (f) => Math.floor((100 * rows.filter(f).length) / rows.length);

const derived = {
  pages: rows.length,
  medianWords: median(rows.map((r) => r.words)),
  medianH2: median(rows.map((r) => r.h2)),
  medianLi: median(rows.map((r) => r.li)),
  pctVisibleFaq: pct((r) => r.has_visible_faq),
  pctFaqSchema: pct((r) => r.has_faq_schema),
  pctListicle: pct((r) => r.listicle),
  pctTables: pct((r) => r.tables > 0),
  // dfs_citation_anatomy.py printed this one as a fraction (55/58), not a
  // percentage, so it inherits no floor convention. 55/58 is 94.83%, and the
  // page's 95% is the correct rounding of it.
  pctOneH1: Math.round((100 * rows.filter((r) => r.h1 === 1).length) / rows.length),
  zeroH1: rows.filter((r) => r.h1 === 0).length,
  over6000: rows.filter((r) => r.words > 6000).length,
  between2000and3500: rows.filter((r) => r.words >= 2000 && r.words <= 3500).length,
};

// Every figure asserted on the study page, checked against the source data.
const CLAIMS = [
  ['pages measured', derived.pages, 58],
  ['median words', derived.medianWords, 2813],
  ['median H2', derived.medianH2, 11],
  ['median list items', derived.medianLi, 110],
  ['% visible FAQ', derived.pctVisibleFaq, 72],
  ['% FAQPage schema', derived.pctFaqSchema, 41],
  ['% listicle headline', derived.pctListicle, 18],
  ['% with a table', derived.pctTables, 32],
  ['% exactly one H1', derived.pctOneH1, 95],
  ['pages with zero H1', derived.zeroH1, 0],
  ['pages over 6000 words', derived.over6000, 3],
  ['pages 2000-3500 words', derived.between2000and3500, 25],
];

let bad = 0;
console.log('Verifying published figures against source data:\n');
for (const [label, got, published] of CLAIMS) {
  const ok = got === published;
  if (!ok) bad++;
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${label.padEnd(24)} data=${String(got).padStart(5)}  page=${String(published).padStart(5)}`);
}

const COLS = ['url', 'title', 'words', 'h1', 'h2', 'h3', 'li', 'ul', 'ol', 'tables',
  'has_visible_faq', 'has_faq_schema', 'listicle', 'comparison', 'dateModified', 'schema_types'];

const esc = (v) => {
  if (Array.isArray(v)) v = v.join('|');
  if (v === true) return 'true';
  if (v === false) return 'false';
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const csv = [COLS.join(','), ...rows.map((r) => COLS.map((c) => esc(r[c])).join(','))].join('\n') + '\n';
mkdirSync(dirname(OUT_CSV), { recursive: true });
writeFileSync(OUT_CSV, csv);

console.log(`\nwrote public/data/ai-citation-study-2026-08.csv (${rows.length} rows, ${csv.length} bytes)`);

if (bad) {
  console.error(`\n${bad} published figure(s) do NOT match the data. Fix the page or the data before shipping.`);
  process.exit(1);
}
console.log('All published figures match the source data.');
