#!/usr/bin/env node
/**
 * Sitewide audit against docs/AI-SEO-RULEBOOK.md Tier B rules.
 *
 * SOURCE-SIDE ONLY. It reports schema/structural signals that are visible in the
 * .tsx tree (dateModified, Person schema, FAQ wiring, table markup).
 *
 * It deliberately does NOT count words or <li> elements from source.
 * Rulebook §4b: word count and density MUST be measured on rendered HTML.
 * Use scripts/audit-rendered.mjs for that.
 *
 * Usage: node scripts/audit-rulebook.mjs [--json]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const ROOT = process.cwd();
const APP = join(ROOT, 'src/app');

/** Recursively collect every page.tsx under src/app. */
function collectPages(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectPages(full, out);
    else if (entry === 'page.tsx') out.push(full);
  }
  return out;
}

/** src/app/uk/london/seo/page.tsx -> /uk/london/seo */
function toRoute(file) {
  const rel = relative(APP, dirname(file)).split('/').filter(Boolean);
  const segs = rel.filter((s) => !(s.startsWith('(') && s.endsWith(')')));
  return '/' + segs.join('/');
}

/**
 * A page's signals can live in the page.tsx OR in a component it imports from
 * src/lib or src/components. Follow local relative + @/ imports one level deep
 * so shared-template pages are not scored as false negatives.
 */
function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith('@/')) base = join(ROOT, 'src', spec.slice(2));
  else if (spec.startsWith('.')) base = join(dirname(fromFile), spec);
  else return null;
  for (const cand of [base + '.tsx', base + '.ts', join(base, 'index.tsx'), join(base, 'index.ts')]) {
    if (existsSync(cand)) return cand;
  }
  return null;
}

function textWithImports(file, depth = 1, seen = new Set()) {
  if (seen.has(file)) return '';
  seen.add(file);
  let src;
  try { src = readFileSync(file, 'utf8'); } catch { return ''; }
  if (depth <= 0) return src;
  let combined = src;
  for (const m of src.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
    const resolved = resolveImport(m[1], file);
    if (resolved) combined += '\n' + textWithImports(resolved, depth - 1, seen);
  }
  return combined;
}

const CHECKS = {
  dateModified: (t) => /dateModified/.test(t),
  personSchema: (t) => /['"]?@type['"]?\s*:\s*['"]Person['"]/.test(t),
  faq: (t) => /<FAQ\b|faqItems|FAQ_ITEMS|faqs\s*[:=]/.test(t),
  table: (t) => /<table\b|<ComparisonTable|comparisonRows|COMPARISON_/i.test(t),
  breadcrumb: (t) => /BreadcrumbList/.test(t),
};

/**
 * Find `const FOO_SCHEMA = {...}` blocks that are declared but never referenced
 * again — i.e. never JSON.stringify'd into a <script type="application/ld+json">.
 *
 * This is a silent failure: tsc is happy, the constant looks right in review, and
 * the schema simply never ships. Caught 3 pages on 2026-08-03 (headless-commerce,
 * omnichannel-commerce, commerceflo) whose dateModified and Person author existed
 * only in source. Confirmed independently against rendered HTML.
 */
function unrenderedSchemas(file) {
  const src = readFileSync(file, 'utf8');
  const out = [];
  for (const m of src.matchAll(/^const ([A-Z_0-9]+)\s*=\s*\{/gm)) {
    const name = m[1];
    let i = src.indexOf('{', m.index), depth = 0, end = i;
    for (; end < src.length; end++) {
      if (src[end] === '{') depth++;
      else if (src[end] === '}' && --depth === 0) break;
    }
    const block = src.slice(i, end + 1);
    if (!/['"]?@context['"]?\s*:/.test(block)) continue; // only schema.org objects
    const rest = src.slice(0, m.index) + src.slice(end + 1);
    if (!new RegExp(`\\b${name}\\b`).test(rest)) out.push(name);
  }
  return out;
}

const pages = collectPages(APP).sort();
const rows = [];
for (const file of pages) {
  const route = toRoute(file);
  const isDynamic = /\[/.test(route);
  const t = textWithImports(file);
  const r = { route, file: relative(ROOT, file), dynamic: isDynamic };
  for (const [k, fn] of Object.entries(CHECKS)) r[k] = fn(t);
  r.unrenderedSchemas = unrenderedSchemas(file);
  rows.push(r);
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(rows, null, 2));
  process.exit(0);
}

const statics = rows.filter((r) => !r.dynamic);
const dyn = rows.filter((r) => r.dynamic);

const pct = (n, d) => `${n}/${d} (${Math.round((n / d) * 100)}%)`;
console.log(`Routes: ${rows.length} total, ${statics.length} static, ${dyn.length} dynamic templates\n`);
console.log('Coverage across STATIC routes (imports followed 1 level):');
for (const k of Object.keys(CHECKS)) {
  console.log(`  ${k.padEnd(14)} ${pct(statics.filter((r) => r[k]).length, statics.length)}`);
}

console.log('\n--- Static routes MISSING dateModified ---');
const missing = statics.filter((r) => !r.dateModified).map((r) => r.route);
missing.forEach((r) => console.log('  ' + r));
console.log(`  (${missing.length} routes)`);

console.log('\n--- Dynamic templates (cover many URLs each) ---');
dyn.forEach((r) => console.log(`  ${r.route.padEnd(28)} dateModified=${r.dateModified} person=${r.personSchema}`));

const orphaned = rows.filter((r) => r.unrenderedSchemas.length);
console.log('\n--- Schema declared but NEVER rendered (silent: tsc cannot catch this) ---');
if (!orphaned.length) console.log('  none');
orphaned.forEach((r) => console.log(`  ${r.route.padEnd(34)} ${r.unrenderedSchemas.join(', ')}`));
if (orphaned.length) process.exitCode = 1;
