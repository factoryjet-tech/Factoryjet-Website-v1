import { test } from 'node:test';
import assert from 'node:assert/strict';
import { declaredLang, applyLang } from '../scripts/set-html-lang.mjs';

const page = (head) => `<!DOCTYPE html><html lang="en" class="__variable_x"><head>${head}</head><body></body></html>`;

test('self-referencing hreflang wins', () => {
  const html = page(
    '<link rel="canonical" href="https://factoryjet.com/au/shopify-plus"/>' +
    '<link rel="alternate" hrefLang="en-US" href="https://factoryjet.com/services/shopify-plus-agency"/>' +
    '<link rel="alternate" hrefLang="en-AU" href="https://factoryjet.com/au/shopify-plus"/>' +
    '<meta property="og:locale" content="en_GB"/>'
  );
  assert.equal(declaredLang(html), 'en-AU');
  assert.match(applyLang(html, 'en-AU'), /<html lang="en-AU" class="__variable_x">/);
});

test('falls back to og:locale', () => {
  const html = page('<link rel="canonical" href="https://factoryjet.com/blog/x"/><meta property="og:locale" content="en_GB"/>');
  assert.equal(declaredLang(html), 'en-GB');
});

test('x-default and non-English values are ignored', () => {
  const html = page(
    '<link rel="canonical" href="https://factoryjet.com/"/>' +
    '<link rel="alternate" hrefLang="x-default" href="https://factoryjet.com/"/>' +
    '<meta property="og:locale" content="de_DE"/>'
  );
  assert.equal(declaredLang(html), null);
  assert.equal(applyLang(html, null), null);
});

test('US pages that declare en-US get en-US', () => {
  const html = page('<link rel="canonical" href="https://factoryjet.com/"/><link rel="alternate" hrefLang="en-US" href="https://factoryjet.com/"/>');
  assert.equal(declaredLang(html), 'en-US');
});

test('two self-references are settled by og:locale', () => {
  const head =
    '<link rel="canonical" href="https://factoryjet.com"/>' +
    '<link rel="alternate" hrefLang="en-IN" href="https://factoryjet.com"/>' +
    '<link rel="alternate" hrefLang="en-US" href="https://factoryjet.com"/>';
  assert.equal(declaredLang(page(head + '<meta property="og:locale" content="en_US"/>')), 'en-US');
  assert.equal(declaredLang(page(head)), null);
});
