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
  assert.match(source, /US_FOOTER_COLUMNS\.map\(/);
  assert.match(source, /column\.links\.map\(/);
  assert.doesNotMatch(source, /['"]use client['"]|dangerouslySetInnerHTML/);
});

test('chrome-only destinations identified by the orphan-risk audit remain reachable', () => {
  const paths = new Set(US_FOOTER_COLUMNS.flatMap(column => column.links).map(link => link.href));
  for (const href of ['/services/dtc-ecommerce-agency', '/services/ecommerce-audit',
    '/comparisons/shopify-plus-vs-custom-headless-nextjs', '/comparisons/headless-commerce-vs-monolithic',
    '/comparisons/n8n-vs-langchain-vs-crewai-enterprise']) assert.ok(paths.has(href), href);
});

test('compact footer selection does not replace locale-specific or custom footers', () => {
  const source = readFileSync(new URL('../src/components/v2/SiteFooter.tsx', import.meta.url), 'utf8');
  assert.match(source, /if \(resolvedColumns === US_FOOTER_COLUMNS\)/);
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
