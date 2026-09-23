import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fireLeadConversion, thankYouUrl } from '../src/utils/leadConversion.ts';

function memoryStorage() {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => { m.set(k, v); } };
}

test('fires once per lid with the fixed event shape', () => {
  const pushed = [];
  const storage = memoryStorage();
  const deps = { push: (d) => pushed.push(d), storage };
  assert.equal(fireLeadConversion({ lid: 'L1', region: 'US', source: 'us_hero_inline' }, deps), true);
  assert.equal(fireLeadConversion({ lid: 'L1', region: 'US', source: 'us_hero_inline' }, deps), false);
  assert.deepEqual(pushed, [{ event: 'lead_converted', region: 'us', lead_source: 'us_hero_inline', lead_id: 'L1' }]);
  assert.equal(storage.getItem('fj_conv_L1'), '1');
});

test('no lid means no conversion', () => {
  const pushed = [];
  assert.equal(fireLeadConversion({ lid: '' }, { push: (d) => pushed.push(d), storage: memoryStorage() }), false);
  assert.equal(pushed.length, 0);
});

test('throwing storage (private mode) still fires exactly once per call', () => {
  const pushed = [];
  const storage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.equal(fireLeadConversion({ lid: 'L2' }, { push: (d) => pushed.push(d), storage }), true);
  assert.deepEqual(pushed, [{ event: 'lead_converted', region: 'us', lead_source: 'unknown', lead_id: 'L2' }]);
});

test('thankYouUrl encodes params and flags counted', () => {
  assert.equal(
    thankYouUrl({ lid: 'a b', region: 'us', source: 'blog_x&y', counted: true }),
    '/thank-you?source=blog_x%26y&service=unknown&region=us&lid=a%20b&counted=1',
  );
  assert.equal(thankYouUrl({ lid: 'z' }), '/thank-you?source=unknown&service=unknown&region=us&lid=z');
});
