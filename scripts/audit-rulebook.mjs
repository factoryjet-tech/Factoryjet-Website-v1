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
 * Walk a balanced {...} or [...] block starting at `start`, stepping over string
 * literals, template literals and comments so a brace inside copy cannot end it
 * early. Returns the index of the closing delimiter, or -1 if unbalanced.
 */
function blockEnd(src, start) {
  const open = src[start];
  const close = open === '{' ? '}' : ']';
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') { i = src.indexOf('\n', i); if (i < 0) return -1; continue; }
    if (c === '/' && src[i + 1] === '*') { const j = src.indexOf('*/', i + 2); if (j < 0) return -1; i = j + 1; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const quote = c;
      for (i++; i < src.length; i++) {
        if (src[i] === '\\') { i++; continue; }
        if (src[i] === quote) break;
      }
      continue;
    }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return i;
  }
  return -1;
}

/**
 * Find module-scope `const FOO = {...}` / `const FOO = [...]` blocks that are
 * declared but never referenced again anywhere in the file.
 *
 * This is a silent failure: tsc is happy (an unused const is legal), every build
 * guard passes, the constant looks right in review, and it simply never ships.
 *
 * Two flavours, reported separately because they differ in severity:
 *   - `schema`: a schema.org object that never reaches a <script type="ld+json">.
 *     Actively harmful — the page claims structured data it does not emit. Caught
 *     3 pages on 2026-08-03 (headless-commerce, omnichannel-commerce, commerceflo)
 *     whose dateModified and Person author existed only in source. FATAL.
 *   - `data`: any other never-rendered content array/object. Dead weight rather
 *     than a correctness bug. Caught the 7 *PRICING_TIERS consts under
 *     /services/ai-agent-development on 2026-08-17. Reported, non-fatal.
 *
 * `export const` is deliberately not matched: it may be consumed by another file.
 */
function deadConsts(file) {
  const src = readFileSync(file, 'utf8');
  const out = [];
  for (const m of src.matchAll(/^const ([A-Z][A-Z_0-9]*)\s*=\s*([[{])/gm)) {
    const name = m[1];
    const open = m.index + m[0].length - 1;
    const end = blockEnd(src, open);
    if (end < 0) continue;
    const block = src.slice(open, end + 1);
    const rest = src.slice(0, m.index) + src.slice(end + 1);
    if (new RegExp(`\\b${name}\\b`).test(rest)) continue;
    const kind = /['"]?@context['"]?\s*:/.test(block) ? 'schema' : 'data';
    out.push({ name, kind, lines: block.split('\n').length });
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
  r.deadConsts = deadConsts(file);
  rows.push(r);
}

/**
 * Dead consts are not a page-only problem, so sweep the shared component tree too.
 * Kept separate from `rows` so the coverage percentages above stay page-scoped.
 */
function collectComponents(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectComponents(full, out);
    else if (/\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}
const componentRows = collectComponents(join(ROOT, 'src/components'))
  .map((file) => ({ route: relative(ROOT, file), deadConsts: deadConsts(file) }))
  .filter((r) => r.deadConsts.length);

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

const all = [...rows, ...componentRows];
const named = (r, kind) => r.deadConsts.filter((c) => c.kind === kind);

const orphaned = all.filter((r) => named(r, 'schema').length);
console.log('\n--- Schema declared but NEVER rendered (silent: tsc cannot catch this) ---');
if (!orphaned.length) console.log('  none');
orphaned.forEach((r) =>
  console.log(`  ${r.route.padEnd(34)} ${named(r, 'schema').map((c) => c.name).join(', ')}`),
);

const deadData = all.filter((r) => named(r, 'data').length);
const deadLines = deadData.reduce((s, r) => s + named(r, 'data').reduce((n, c) => n + c.lines, 0), 0);
console.log('\n--- Content const declared but NEVER rendered (dead weight, non-fatal) ---');
if (!deadData.length) console.log('  none');
deadData.forEach((r) =>
  console.log(`  ${r.route.padEnd(34)} ${named(r, 'data').map((c) => `${c.name} (${c.lines}L)`).join(', ')}`),
);
if (deadData.length) console.log(`  (${deadLines} lines across ${deadData.length} files)`);

if (orphaned.length) process.exitCode = 1;
