#!/usr/bin/env node
/**
 * Estimate the RENDERED word count of an unbuilt page, so we can catch a page that will
 * hard-fail audit-perfect-page.mjs BEFORE we deploy it.
 *
 * Why this exists: agents self-measure word counts source-side and the numbers wander wildly,
 * because a naive counter sweeps data arrays, JSX text, component props, metadata and schema
 * strings. The audit measures rendered HTML on a LIVE url, which we cannot produce locally
 * (next build OOMs this machine). So instead we calibrate: extract source-side prose the same
 * way for pages whose TRUE rendered count is already known from a live audit run, derive the
 * average shared-chrome delta, and apply it.
 *
 * Calibration source: pipeline/research/data/perfect-page-audit-all-2026-08-12.json (357 live pages).
 *
 * Bands enforced by scripts/audit-perfect-page.mjs:
 *   service    2500-5000     city  2000-4500
 *   >5000 scores half        >6000 FAILS
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const AUDIT = path.join(ROOT, 'pipeline/research/data/perfect-page-audit-all-2026-08-12.json');

// Pull the prose a reader actually sees: long string literals and JSX text.
// Deliberately drops imports, the metadata block, JSON-LD, className/href/src attributes.
function sourceWords(file) {
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/^import[^\n]*\n/gm, '');
  s = s.replace(/export const metadata[\s\S]*?\n\};\n/m, '');
  s = s.replace(/const [A-Za-z_]*[Ss]chema[\s\S]*?\n\};\n/gm, '');
  s = s.replace(/dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}/g, '');
  s = s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/[^\n]*$/gm, '');
  s = s.replace(/(className|href|src|id|alt|rel|target|type|width|height|loading|fetchPriority)=\{?["'][^"']*["']\}?/g, '');

  const out = [];
  // Backtick handling is the subtle one. A naive /`([^`\\]{25,})`/ starts matching at the
  // CLOSING backtick of a short literal (anything under the 25-char floor, e.g. `${h}%`),
  // pairs it with the OPENING backtick of the next literal, and swallows all the JSX in
  // between. On src/app/services/small-business-seo/page.tsx that ate 23,938 characters and
  // produced a false "over band" verdict. Pages with many short template literals (that file
  // has 25 backticks) were badly wrong while pages with few (local-seo has 3) looked fine.
  // Fix: reject any candidate span that contains a JSX tag opening, since real prose does not.
  const JSXISH = /<[A-Za-z/]/;
  for (const m of s.matchAll(/'([^'\\\n]{25,})'|"([^"\\\n]{25,})"|`([^`\\]{25,})`/g)) {
    const text = m[1] || m[2] || m[3];
    if (JSXISH.test(text)) continue;
    out.push(text);
  }
  // JSX text nodes. The original pattern here excluded \n, which meant any <p> whose prose
  // wrapped across lines was invisible: one agent deleted eleven paragraphs and this number
  // did not move at all. Allow newlines inside the text node and normalise whitespace after.
  for (const m of s.matchAll(/>\s*([A-Za-z][^<>{}]{20,}?)\s*</g)) {
    out.push(m[1].replace(/\s+/g, ' '));
  }
  return out.join(' ').split(/\s+/).filter((w) => /[a-z]/i.test(w)).length;
}

const raw = JSON.parse(fs.readFileSync(AUDIT, 'utf8'));
// The audit file may be an array or an object wrapping one; accept either.
const audit = Array.isArray(raw)
  ? raw
  : (raw.pages || raw.results || Object.values(raw).find(Array.isArray) || []);
const live = new Map();
for (const p of audit) if (p && p.path && p.words) live.set(String(p.path).replace(/\/$/, ''), p.words);
if (!live.size) { console.error('No live word counts found in the audit file.'); process.exit(1); }

// Calibrate SEPARATELY per profile. A city page that ships TestimonialsSection,
// PortfolioShowcase and the IndustriesGrid showcase block carries far more shared chrome
// than a service page that ships none of them, so one blended delta would systematically
// overstate the new service pages (which deliberately omit all three, per brief section 2b).
function calibrate(label, entries) {
  const deltas = [];
  for (const [route, rel] of entries) {
    const f = path.join(ROOT, rel);
    const truth = live.get(route);
    if (!fs.existsSync(f) || !truth) continue;
    const est = sourceWords(f);
    deltas.push(truth - est);
    console.log(`  cal ${label.padEnd(8)} ${route.padEnd(38)} source=${String(est).padStart(5)}  live=${String(truth).padStart(5)}  delta=${truth - est}`);
  }
  if (!deltas.length) return null;
  deltas.sort((a, b) => a - b);
  const median = deltas[Math.floor(deltas.length / 2)];
  const spread = deltas[deltas.length - 1] - deltas[0];
  // A wide spread means the shared chrome varies so much between pages of this profile that a
  // single delta cannot be trusted. Say so loudly instead of printing a confident wrong number.
  const confidence = spread <= 900 ? 'GOOD' : spread <= 1500 ? 'WEAK' : 'UNRELIABLE';
  console.log(`  -> ${label}: median ${median >= 0 ? '+' : ''}${median}, spread ${spread}, confidence ${confidence}`);
  return { median, spread, confidence };
}

const CITY_CAL = ['austin', 'cleveland', 'new-york', 'miami', 'denver', 'tampa', 'raleigh', 'nashville', 'charlotte', 'portland']
  .map((c) => [`/${c}/web-design`, `src/app/${c}/web-design/page.tsx`]);
const SERVICE_CAL = ['roofing-seo', 'ai-seo', 'seo-consulting', 'ecommerce-marketing-agency', 'law-firm-seo', 'shopify-development', 'web-design', 'local-seo']
  .map((s) => [`/services/${s}`, `src/app/services/${s}/page.tsx`]);

const CITY = calibrate('city', CITY_CAL);
console.log('');
const SERVICE = calibrate('service', SERVICE_CAL);
const CONF = { city: CITY, service: SERVICE ?? CITY };
const DELTA = { city: CITY.median, service: (SERVICE ?? CITY).median };
console.log('');

// Pages built in this wave.
const TARGETS = [
  ...['dallas', 'chicago', 'phoenix', 'san-diego', 'detroit', 'atlanta', 'seattle', 'houston', 'st-louis']
    .map((c) => [`/${c}/web-design`, `src/app/${c}/web-design/page.tsx`, 'city']),
  ...['dallas', 'chicago', 'phoenix', 'san-diego', 'boston', 'las-vegas', 'los-angeles']
    .map((c) => [`/${c}/seo`, `src/app/${c}/seo/page.tsx`, 'city']),
  ...['b2b-website-design', 'manufacturing-website-design', 'saas-website-design',
      'restaurant-website-design', 'nonprofit-website-design', 'ai-agents-for-real-estate',
      'ai-agents-for-healthcare', 'ecommerce-app-development']
    .map((s) => [`/services/${s}`, `src/app/services/${s}/page.tsx`, 'service']),
];

const BANDS = { city: [2000, 4500], service: [2500, 5000] };
const rows = [];
for (const [route, rel, profile] of TARGETS) {
  const f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) { console.log(`  MISSING ${route}`); continue; }
  const est = sourceWords(f) + DELTA[profile];
  const [lo, hi] = BANDS[profile];
  let verdict = 'ok';
  if (est > 6000) verdict = 'HARD FAIL';
  else if (est > 5000) verdict = 'half credit';
  else if (est < lo) verdict = 'below floor';
  else if (est > hi) verdict = 'over band';
  rows.push({ route, profile, est, verdict, conf: CONF[profile].confidence });
}
rows.sort((a, b) => b.est - a.est);
console.log(`  ${'route'.padEnd(42)}${'profile'.padEnd(9)}${'est rendered'.padStart(12)}   verdict`);
for (const r of rows) {
  const flag = r.conf === 'GOOD' ? '' : `  (${r.conf} estimate)`;
  console.log(`  ${r.route.padEnd(42)}${r.profile.padEnd(9)}${String(r.est).padStart(12)}   ${r.verdict}${flag}`);
}
const bad = rows.filter((r) => r.verdict === 'HARD FAIL');
console.log(`\n  ${rows.length} pages checked, ${bad.length} projected HARD FAIL, ` +
  `${rows.filter((r) => r.verdict === 'half credit').length} projected half credit`);
for (const [k, v] of Object.entries(CONF)) {
  if (v.confidence !== 'GOOD') {
    console.log(`\n  WARNING: the ${k} calibration has a spread of ${v.spread} words, so every ${k}`);
    console.log(`  estimate above is ${v.confidence}. Do NOT cut content on the strength of it.`);
    console.log(`  Deploy, then run audit-perfect-page.mjs against the LIVE url and trim what really fails.`);
  }
}
console.log('\n  Estimates only. The authoritative check is audit-perfect-page.mjs on a LIVE url.');
