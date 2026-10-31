import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Run on all Node versions supported by Next, not only Node's newer native TS loader.
const dataSource = readFileSync(new URL('../src/data/usFooterColumns.ts', import.meta.url), 'utf8');
const dataModule = ts.transpileModule(dataSource, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { US_FOOTER_COLUMNS, US_FOOTER_FEATURED_COLUMNS } = await import(
  `data:text/javascript;base64,${Buffer.from(dataModule).toString('base64')}`
);

test('compact US footer features 24 distinct original destinations and labels', () => {
  const original = US_FOOTER_COLUMNS.flatMap(column => column.links);
  const featured = US_FOOTER_FEATURED_COLUMNS.flatMap(column => column.links);
  assert.equal(US_FOOTER_FEATURED_COLUMNS.length, 4);
  assert.equal(featured.length, 24);
  assert.equal(new Set(featured.map(link => link.href)).size, 24);
  for (const link of featured) assert.ok(original.includes(link), link.href);
});

test('the full US directory is server rendered inside native progressive disclosure', () => {
  const source = readFileSync(new URL('../src/components/v2/UsSiteFooter.tsx', import.meta.url), 'utf8');
  assert.match(source, /<details className="us-footer__directory">/);
  assert.match(source, /columns = US_FOOTER_COLUMNS/);
  assert.match(source, /\{columns\.map\(/);
  assert.match(source, /column\.links\.map\(/);
  assert.doesNotMatch(source, /['"]use client['"]|dangerouslySetInnerHTML/);
});

test('chrome-only destinations identified by the orphan-risk audit remain reachable', () => {
  const paths = new Set(US_FOOTER_COLUMNS.flatMap(column => column.links).map(link => link.href));
  for (const href of ['/services/dtc-ecommerce-agency', '/services/ecommerce-audit',
    '/comparisons/shopify-plus-vs-custom-headless-nextjs', '/comparisons/headless-commerce-vs-monolithic',
    '/comparisons/n8n-vs-langchain-vs-crewai-enterprise']) assert.ok(paths.has(href), href);
});

test('compact footer is used for the US, UK and AU sets only, not custom footers', () => {
  const source = readFileSync(new URL('../src/components/v2/SiteFooter.tsx', import.meta.url), 'utf8');
  assert.match(source, /resolvedColumns === US_FOOTER_COLUMNS \? null/);
  assert.match(source, /resolvedColumns === UK_FOOTER_COLUMNS \? UK_FOOTER_FEATURED_COLUMNS/);
  assert.match(source, /resolvedColumns === AU_FOOTER_COLUMNS \? AU_FOOTER_FEATURED_COLUMNS/);
  assert.match(source, /: undefined;/);
  assert.match(source, /linkColumns \?\? LOCALE_COLUMNS\[locale\]/);
});

test('footer region links and legal destinations are not copied into a second data array', () => {
  const source = readFileSync(new URL('../src/components/v2/UsSiteFooter.tsx', import.meta.url), 'utf8');
  assert.match(source, /regions\.map\(/);
  assert.match(source, /bottomLinks\.map\(/);
});

test('mobile footer uses native category disclosures with sticky-bar clearance', () => {
  const component = readFileSync(new URL('../src/components/v2/UsSiteFooter.tsx', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/components/v2/UsSiteFooter.css', import.meta.url), 'utf8');
  assert.match(component, /<details key=\{column\.heading\} className="us-footer__mobile-group">/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*padding-bottom: calc\(88px \+ env\(safe-area-inset-bottom/);
  assert.match(css, /\.us-footer :is\(a, summary\):focus-visible/);
});

// UK and AU footers (2026-10-31) mirror the US one: same component and featured shape.
async function loadRegion(file) {
  const helper = ts.transpileModule(readFileSync(new URL('../src/data/footerFeatured.ts', import.meta.url), 'utf8'),
    { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } }).outputText;
  const helperUrl = `data:text/javascript;base64,${Buffer.from(helper).toString('base64')}`;
  const src = readFileSync(new URL(`../src/data/${file}`, import.meta.url), 'utf8')
    .replace("from './footerFeatured'", `from '${helperUrl}'`);
  const out = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(out).toString('base64')}`);
}

for (const [file, cols, featuredName, prefix] of [
  ['ukFooterColumns.ts', 'UK_FOOTER_COLUMNS', 'UK_FOOTER_FEATURED_COLUMNS', '/uk'],
  ['auFooterColumns.ts', 'AU_FOOTER_COLUMNS', 'AU_FOOTER_FEATURED_COLUMNS', '/au'],
]) {
  test(`${file}: featured view has the US shape and reuses directory links`, async () => {
    const mod = await loadRegion(file);
    const original = mod[cols].flatMap(column => column.links);
    const featured = mod[featuredName].flatMap(column => column.links);
    assert.deepEqual(mod[featuredName].map(c => c.heading), US_FOOTER_FEATURED_COLUMNS.map(c => c.heading));
    assert.equal(featured.length, 24);
    assert.equal(new Set(featured.map(link => link.href)).size, 24);
    for (const link of featured) assert.ok(original.includes(link), link.href);
    assert.ok(original.filter(l => l.href.startsWith(prefix)).length > 40, 'mostly regional links');
    assert.ok(!original.some(l => /wa\.me|walmart|target-plus|wayfair/.test(l.href)), 'no US-only or WhatsApp links');
  });
}
