import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  signEnrichToken, verifyEnrichToken, sanitizeDocId, cleanEnrichInput, buildEnrichFirestoreRequest,
} from '../functions/api/notify-lead.js';

const KEY = 'test-secret';
const DOC = '2026-09-23_10-00-00_JaneDoe_ab12';

test('token round-trips for the same docId', async () => {
  const t = await signEnrichToken(KEY, DOC, 1_000_000);
  assert.equal(await verifyEnrichToken(KEY, DOC, t, 1_000_000 + 60_000), true);
});

test('token rejects another docId, a tampered signature, and a missing key', async () => {
  const t = await signEnrichToken(KEY, DOC, 1_000_000);
  assert.equal(await verifyEnrichToken(KEY, DOC + 'x', t, 1_000_000), false);
  assert.equal(await verifyEnrichToken(KEY, DOC, t.slice(0, -1) + (t.endsWith('0') ? '1' : '0'), 1_000_000), false);
  assert.equal(await verifyEnrichToken('', DOC, t, 1_000_000), false);
  assert.equal(await verifyEnrichToken(KEY, DOC, 'garbage', 1_000_000), false);
  assert.equal(await verifyEnrichToken(KEY, DOC, undefined, 1_000_000), false);
});

test('token expires after 2 hours and rejects future issue times', async () => {
  const t = await signEnrichToken(KEY, DOC, 1_000_000);
  assert.equal(await verifyEnrichToken(KEY, DOC, t, 1_000_000 + 2 * 3600_000 + 1), false);
  assert.equal(await verifyEnrichToken(KEY, DOC, t, 1_000_000 - 120_000), false);
});

test('signEnrichToken returns null without a key or docId', async () => {
  assert.equal(await signEnrichToken('', DOC), null);
  assert.equal(await signEnrichToken(KEY, ''), null);
});

test("docIds with apostrophes/accents sanitize to the server's id", async () => {
  const clientId = "2026-09-23_10-00-00_O'BrienJosé_ab12";
  const serverId = sanitizeDocId(clientId);
  assert.equal(serverId, '2026-09-23_10-00-00_OBrienJos_ab12');
  const t = await signEnrichToken(KEY, serverId, 5);
  assert.equal(await verifyEnrichToken(KEY, sanitizeDocId(clientId), t, 10), true);
});

test('cleanEnrichInput trims and clips', () => {
  const out = cleanEnrichInput({ phone: '  +1 555 0100  ', company: 'x'.repeat(150), message: 'm'.repeat(12_000) });
  assert.equal(out.phone, '+1 555 0100');
  assert.equal(out.company.length, 100);
  assert.equal(out.message.length, 10_000);
  assert.deepEqual(cleanEnrichInput({}), { phone: '', company: '', message: '' });
});

test('Firestore request masks only filled fields plus enrich metadata', () => {
  const { url, body } = buildEnrichFirestoreRequest({}, DOC, { phone: '', company: '', message: 'Need B2B portal' }, 'us_hero_inline', '2026-09-23T10:00:00.000Z');
  assert.match(url, /documents\/contactus\/2026-09-23_10-00-00_JaneDoe_ab12\?/);
  assert.match(url, /updateMask\.fieldPaths=message/);
  assert.match(url, /updateMask\.fieldPaths=enrichedAt/);
  assert.match(url, /updateMask\.fieldPaths=enrichSource/);
  assert.doesNotMatch(url, /fieldPaths=phone/);
  assert.doesNotMatch(url, /fieldPaths=(createdAt|status|name|email)/);
  assert.deepEqual(Object.keys(body.fields).sort(), ['enrichSource', 'enrichedAt', 'message']);
  assert.equal(body.fields.message.stringValue, 'Need B2B portal');
  assert.equal(body.fields.enrichedAt.timestampValue, '2026-09-23T10:00:00.000Z');
});
