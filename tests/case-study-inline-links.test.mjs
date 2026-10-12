import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Run on all Node versions supported by Next, not only Node's newer native TS loader.
const parserSource = readFileSync(new URL('../src/data/case-studies/inline-links.ts', import.meta.url), 'utf8');
const parserModule = ts.transpileModule(parserSource, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { parseInlineLinks } = await import(
  `data:text/javascript;base64,${Buffer.from(parserModule).toString('base64')}`
);

const dataSource = readFileSync(new URL('../src/data/case-studies/index.ts', import.meta.url), 'utf8');
const templateSource = readFileSync(new URL('../src/app/case-studies/[slug]/page.tsx', import.meta.url), 'utf8');

test('body copy without link syntax comes back as one text segment', () => {
  assert.deepEqual(parseInlineLinks('Plain copy, no links.'), ['Plain copy, no links.']);
  assert.deepEqual(parseInlineLinks(''), []);
});

test('an https link splits the copy into text, link, text', () => {
  assert.deepEqual(parseInlineLinks('See the [dock levellers](https://example.com/dock-levelers) page.'), [
    'See the ',
    { text: 'dock levellers', href: 'https://example.com/dock-levelers' },
    ' page.',
  ]);
});

test('only absolute https URLs become links', () => {
  for (const body of [
    '[x](javascript:alert(1))',
    '[x](http://example.com/)',
    '[x](/relative)',
    '[x](https://example.com/a b)',
    '<a href="https://example.com/">x</a>',
  ]) {
    assert.deepEqual(parseInlineLinks(body), [body], body);
  }
});

test('the Yadav case study links the three product pages with single-hop URLs', () => {
  const start = dataSource.indexOf("slug: 'yadav-entrance-automation-website-seo'");
  const entry = dataSource.slice(start, dataSource.indexOf('\n  },', start));
  const hrefs = [...entry.matchAll(/\]\((https:\/\/[^\s()]+)\)/g)].map(match => match[1]);
  assert.deepEqual(hrefs, [
    'https://yadaventranceautomation.com/high-speed-doors',
    'https://yadaventranceautomation.com/motorized-rolling-shutter',
    'https://yadaventranceautomation.com/dock-levelers',
  ]);
  assert.match(entry, /clientUrl: 'https:\/\/yadaventranceautomation\.com\/'/);
});

test('the template renders the client site and body links as plain crawlable anchors', () => {
  assert.match(templateSource, /href=\{cs\.clientUrl\}/);
  assert.match(templateSource, /href=\{segment\.href\}/);
  assert.equal(templateSource.match(/\{renderInline\(p(, true)?\)\}/g)?.length, 4);
  // The file header mentions 'use client' in a comment, so only a real directive line counts.
  assert.doesNotMatch(templateSource, /nofollow|^['"]use client['"]/m);
});
