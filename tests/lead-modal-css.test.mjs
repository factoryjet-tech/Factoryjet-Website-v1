import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Final-review fix M5: iOS Safari zooms into any focused field under 16px.
test('modal fields are at least 16px so iOS does not zoom on focus', () => {
  const css = readFileSync(new URL('../src/components/lead/LeadEnrichModal.css', import.meta.url), 'utf8');
  const rule = css.match(/\.lem-input, \.lem-textarea \{([^}]*)\}/);
  assert.ok(rule, '.lem-input, .lem-textarea rule exists');
  assert.match(rule[1], /font-size: 16px/);
});
