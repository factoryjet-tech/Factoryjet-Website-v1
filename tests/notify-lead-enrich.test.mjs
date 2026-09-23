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

test('Firestore details go to a create-only sibling doc with only filled fields', () => {
  const { url, body } = buildEnrichFirestoreRequest({}, DOC, { phone: '', company: '', message: 'Need B2B portal' }, 'us_hero_inline', '2026-09-23T10:00:00.000Z');
  assert.match(url, /documents\/contactus\/2026-09-23_10-00-00_JaneDoe_ab12_details\?currentDocument\.exists=false&key=/);
  assert.doesNotMatch(url, /updateMask/);
  assert.deepEqual(Object.keys(body.fields).sort(), ['enrichSource', 'enrichedAt', 'leadDocId', 'message']);
  assert.equal(body.fields.leadDocId.stringValue, DOC);
  assert.equal(body.fields.message.stringValue, 'Need B2B portal');
  assert.equal(body.fields.enrichedAt.timestampValue, '2026-09-23T10:00:00.000Z');
});

// ── Task 2: enrich path end to end (fetch stubbed) ───────────────────────────
import { onRequestPost, enrichLeadInERPNext } from '../functions/api/notify-lead.js';

const ENV = { ERPNEXT_API_KEY: 'k', ERPNEXT_API_SECRET: 's', RESEND_API_KEY: 'r', ERPNEXT_URL: 'https://erp.test' };

function stubFetch(handler) {
  const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    const call = { url: String(url), method: opts.method || 'GET', body: opts.body ? JSON.parse(opts.body) : null };
    calls.push(call);
    const [status, json] = handler(call) || [200, {}];
    return new Response(JSON.stringify(json), { status, headers: { 'Content-Type': 'application/json' } });
  };
  return { calls, restore: () => { globalThis.fetch = original; } };
}

function ctx(body, env = ENV) {
  const pending = [];
  return {
    pending,
    context: {
      env,
      waitUntil: (p) => pending.push(p),
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com' }, body: JSON.stringify(body),
      }),
    },
  };
}

test('enrich rejects a bad token with 403 and touches nothing', async () => {
  const f = stubFetch(() => { throw new Error('must not fetch'); });
  try {
    const { context } = ctx({ mode: 'enrich', docId: DOC, enrichToken: '1.bad', phone: '1' });
    const res = await onRequestPost(context);
    assert.equal(res.status, 403);
    assert.equal(f.calls.length, 0);
  } finally { f.restore(); }
});

test('enrich honeypot and all-empty fields are accepted without writes', async () => {
  const f = stubFetch(() => { throw new Error('must not fetch'); });
  try {
    const token = await signEnrichToken('s', DOC);
    for (const extra of [{ honeypot: 'bot', phone: '1' }, { phone: ' ', company: '', message: '' }]) {
      const { context } = ctx({ mode: 'enrich', docId: DOC, enrichToken: token, ...extra });
      const res = await onRequestPost(context);
      assert.equal(res.status, 200);
      assert.deepEqual(await res.json(), { ok: true, enriched: false });
    }
    assert.equal(f.calls.length, 0);
  } finally { f.restore(); }
});

test('enrich happy path: Firestore mask, ERPNext comment then PUT, details email', async () => {
  const f = stubFetch((c) => {
    if (c.url.includes('/api/resource/Lead?')) return [200, { data: [{ name: 'CRM-LEAD-0042' }] }];
    return [200, { data: {} }];
  });
  try {
    const token = await signEnrichToken('s', DOC);
    const { context, pending } = ctx({
      mode: 'enrich', docId: DOC, enrichToken: token, name: 'Jane Doe', email: 'jane@acme.com',
      phone: '+1 555 0100', company: '', message: 'Shopify Plus B2B with NetSuite', source: 'us_hero_inline',
    });
    const res = await onRequestPost(context);
    await Promise.all(pending);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { ok: true, saved: true, emailed: true });

    const fs = f.calls.find((c) => c.url.includes('firestore.googleapis.com'));
    assert.equal(fs.method, 'PATCH');
    assert.match(fs.url, /contactus\/2026-09-23_10-00-00_JaneDoe_ab12_details\?currentDocument\.exists=false/);
    assert.deepEqual(Object.keys(fs.body.fields).sort(), ['enrichSource', 'enrichedAt', 'leadDocId', 'message', 'phone']);

    const comment = f.calls.find((c) => c.url.endsWith('/api/resource/Comment'));
    assert.equal(comment.body.reference_name, 'CRM-LEAD-0042');
    assert.match(comment.body.content, /Shopify Plus B2B with NetSuite/);
    const put = f.calls.find((c) => c.method === 'PUT');
    assert.match(put.url, /\/api\/resource\/Lead\/CRM-LEAD-0042$/);
    assert.deepEqual(put.body, { mobile_no: '+1 555 0100' });
    assert.ok(f.calls.indexOf(comment) < f.calls.indexOf(put), 'comment must be written before the PUT');

    const mail = f.calls.find((c) => c.url.includes('api.resend.com'));
    assert.match(mail.body.subject, /Details added: Jane Doe/);
    assert.deepEqual(mail.body.reply_to, 'jane@acme.com');
  } finally { f.restore(); }
});

test('ERPNext: retries the docId lookup while the create is still running', async () => {
  let lookups = 0;
  const slept = [];
  const f = stubFetch((c) => {
    if (c.url.includes('custom_firebase_doc_id')) { lookups++; return [200, { data: lookups < 3 ? [] : [{ name: 'CRM-LEAD-7' }] }]; }
    return [200, { data: {} }];
  });
  try {
    const out = await enrichLeadInERPNext(ENV, { docId: DOC, email: 'a@b.co', phone: '1', company: 'Acme', message: 'hi' }, async (ms) => { slept.push(ms); });
    assert.deepEqual(out, { saved: true, leadId: 'CRM-LEAD-7', returning: false });
    assert.equal(lookups, 3);
    assert.deepEqual(slept, [2000, 4000]);
  } finally { f.restore(); }
});

test('ERPNext: returning email gets a comment only, no field overwrite', async () => {
  const f = stubFetch((c) => {
    if (c.url.includes('email_id')) return [200, { data: [{ name: 'CRM-LEAD-OLD', custom_firebase_doc_id: 'an-older-doc' }] }];
    if (c.url.includes('custom_firebase_doc_id')) return [200, { data: [] }];
    return [200, { data: {} }];
  });
  try {
    const out = await enrichLeadInERPNext(ENV, { docId: DOC, email: 'old@b.co', phone: '1', company: 'Acme', message: 'again' }, async () => {});
    assert.equal(out.returning, true);
    assert.equal(f.calls.some((c) => c.method === 'PUT'), false);
    const comment = f.calls.find((c) => c.url.endsWith('/api/resource/Comment'));
    assert.match(comment.body.content, /returning lead/);
    assert.match(comment.body.content, /Company: Acme/);
  } finally { f.restore(); }
});

test('ERPNext: a rejected mobile_no PUT still reports saved (comment carries the data)', async () => {
  const f = stubFetch((c) => {
    if (c.url.includes('custom_firebase_doc_id')) return [200, { data: [{ name: 'CRM-LEAD-9' }] }];
    if (c.method === 'PUT') return [417, { exc_type: 'InvalidPhoneNumberError' }];
    return [200, { data: {} }];
  });
  try {
    const out = await enrichLeadInERPNext(ENV, { docId: DOC, email: 'a@b.co', phone: 'call after 5pm', company: '', message: '' }, async () => {});
    assert.equal(out.saved, true);
    const comment = f.calls.find((c) => c.url.endsWith('/api/resource/Comment'));
    assert.match(comment.body.content, /call after 5pm/);
  } finally { f.restore(); }
});

test('create response includes an enrichToken that verifies for the returned docId', async () => {
  const f = stubFetch(() => [200, {}]);
  try {
    const env = { LEAD_ENRICH_SECRET: 'lead-secret' };
    const { context, pending } = ctx({ docId: DOC, name: 'Jane', email: 'jane@acme.com', source: 'us_hero_inline' }, env);
    const res = await onRequestPost(context);
    await Promise.all(pending);
    const out = await res.json();
    assert.equal(out.docId, DOC);
    assert.equal(await verifyEnrichToken('lead-secret', out.docId, out.enrichToken), true);
  } finally { f.restore(); }
});

test('ERPNext: a slow create found via email with THIS docId is not treated as returning', async () => {
  const slept = [];
  const f = stubFetch((c) => {
    if (c.url.includes('custom_firebase_doc_id') && c.url.includes('filters')) {
      if (decodeURIComponent(c.url).includes('"custom_firebase_doc_id","="')) return [200, { data: [] }];
    }
    if (c.url.includes('email_id')) return [200, { data: [{ name: 'CRM-LEAD-NEW', custom_firebase_doc_id: DOC }] }];
    return [200, { data: {} }];
  });
  try {
    const out = await enrichLeadInERPNext(ENV, { docId: DOC, email: 'new@b.co', phone: '+1 555 0100', company: 'Acme', message: 'hi' }, async (ms) => { slept.push(ms); });
    assert.deepEqual(out, { saved: true, leadId: 'CRM-LEAD-NEW', returning: false });
    assert.deepEqual(slept, [2000, 4000, 8000]);
    const put = f.calls.find((c) => c.method === 'PUT');
    assert.deepEqual(put.body, { mobile_no: '+1 555 0100', company_name: 'Acme' });
  } finally { f.restore(); }
});

test('enrich: details already saved (duplicate/retry) skip the CRM and email', async () => {
  const f = stubFetch((c) => {
    if (c.url.includes('firestore.googleapis.com')) return [409, { error: { code: 409, status: 'ALREADY_EXISTS' } }];
    throw new Error('must not reach ERPNext or Resend: ' + c.url);
  });
  try {
    const token = await signEnrichToken('s', DOC);
    const { context, pending } = ctx({ mode: 'enrich', docId: DOC, enrichToken: token, name: 'Jane', email: 'jane@acme.com', message: 'again' });
    const res = await onRequestPost(context);
    await Promise.all(pending);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { ok: true, duplicate: true });
    assert.equal(f.calls.length, 1);
  } finally { f.restore(); }
});
