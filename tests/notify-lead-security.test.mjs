import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildHtml, isStrictEmail, isSafeSitePath, clipLeadFields, LEAD_FIELD_CAPS,
  healthKeyMatches, onRequestGet, onRequestPost,
} from '../functions/api/notify-lead.js';

// Nothing here touches the network: fetch is stubbed wherever a handler runs.
function stubFetch(status = 200) {
  const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    calls.push({ url: String(url), method: opts.method || 'GET', body: opts.body && typeof opts.body === 'string' ? JSON.parse(opts.body) : null });
    return new Response('{}', { status, headers: { 'Content-Type': 'application/json' } });
  };
  return { calls, restore: () => { globalThis.fetch = original; } };
}

// ── Email escaping ───────────────────────────────────────────────────────────
test('the alert email escapes every visitor value and plants no foreign links', () => {
  const evil = '<a href="https://evil.tld/erp-login">Open in CRM</a>';
  const html = buildHtml({
    name: `Eve ${evil}`, email: 'eve@acme.com', phone: evil, company: evil, region: evil,
    message: `line one\n${evil}`, page: '/contact', attribution: {},
  });
  assert.doesNotMatch(html, /evil\.tld\/erp-login">/, 'no live anchor from visitor input');
  assert.match(html, /&lt;a href=&quot;https:\/\/evil\.tld\/erp-login&quot;&gt;Open in CRM&lt;\/a&gt;/);
  assert.match(html, /line one<br>&lt;a href/, 'message newlines become <br> after escaping');
  assert.match(html, /Reply to Eve<\/a>/);
});

test('email only becomes a mailto link (and reply button) when it is a strict address', () => {
  const good = buildHtml({ name: 'Jo', email: "o'brien@acme.co.uk", attribution: {} });
  assert.match(good, /href="mailto:o'brien@acme\.co\.uk"/);
  assert.match(good, /Reply to Jo/);

  const bad = buildHtml({ name: 'Jo', email: 'a"onmouseover="x"@b.com', attribution: {} });
  assert.doesNotMatch(bad, /mailto:/);
  assert.doesNotMatch(bad, /Reply to/);
  assert.match(bad, /a&quot;onmouseover=&quot;x&quot;@b\.com/);

  for (const e of ['a?cc=x@evil.tld', 'a b@c.com', 'a@b', 'a@-b.com', '<a@b.com>', `${'a'.repeat(250)}@b.com`]) {
    assert.equal(isStrictEmail(e), false, e);
  }
  for (const e of ['jane@acme.com', 'first.last+tag@sub.example.co']) assert.equal(isStrictEmail(e), true, e);
});

// ── Page-link rule ───────────────────────────────────────────────────────────
test('a page only links to factoryjet.com when it is a single-slash path', () => {
  for (const p of ['/contact', '/us/ai-agents?x=1', '/']) assert.equal(isSafeSitePath(p), true, p);
  for (const p of ['@evil.tld/login', '//evil.tld', '/\\evil.tld', '/a@evil.tld', '/a b', 'contact', '', null]) {
    assert.equal(isSafeSitePath(p), false, String(p));
  }
  const html = buildHtml({ name: 'Jo', email: 'jo@acme.com', page: '@evil.tld/login', attribution: { landingPage: '//evil.tld' } });
  assert.doesNotMatch(html, /href="https:\/\/factoryjet\.com@evil/);
  assert.doesNotMatch(html, /href="https:\/\/factoryjet\.com\/\/evil/);
  assert.match(html, /<span style="color:#6B7280;font-size:12px;">@evil\.tld\/login<\/span>/);
  assert.match(buildHtml({ page: '/contact', attribution: {} }), /href="https:\/\/factoryjet\.com\/contact"/);
});

// ── Truncation ───────────────────────────────────────────────────────────────
test('lead fields are trimmed and cut to their caps, never rejected', () => {
  const long = (n) => ` ${'x'.repeat(n + 50)} `;
  const out = clipLeadFields({
    name: long(200), email: long(400), phone: long(100), company: long(300), service: long(200),
    message: long(10_000), page: long(1000), region: long(1000), source: long(1000), docId: long(1000),
  });
  for (const [k, cap] of Object.entries(LEAD_FIELD_CAPS)) assert.equal(out[k].length, cap, k);
  for (const k of ['region', 'source', 'docId']) assert.equal(out[k].length, 500, k);
  assert.equal(clipLeadFields({ name: '  Jane  ' }).name, 'Jane');
  assert.equal(clipLeadFields({}).message, '');
});

test('a 1 MB message is stored and emailed at 5000 characters', async () => {
  const f = stubFetch();
  try {
    const res = await onRequestPost({
      env: { RESEND_API_KEY: 'r', LEAD_ENRICH_SECRET: 's' },
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Jane', email: 'jane@acme.com', message: 'y'.repeat(1_000_000) }),
      }),
    });
    assert.equal(res.status, 200);
    const saved = f.calls.find((c) => c.url.includes('firestore.googleapis.com'));
    assert.equal(saved.body.fields.message.stringValue.length, 5000);
    const mail = f.calls.find((c) => c.url.includes('api.resend.com'));
    assert.ok(mail.body.html.length < 20_000);
    assert.equal(mail.body.reply_to, 'jane@acme.com');
  } finally { f.restore(); }
});

test('reply_to is left off when the email is not a strict address', async () => {
  const f = stubFetch();
  try {
    await onRequestPost({
      env: { RESEND_API_KEY: 'r' },
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Jane', email: 'not-an-email' }),
      }),
    });
    const mail = f.calls.find((c) => c.url.includes('api.resend.com'));
    assert.equal('reply_to' in mail.body, false);
  } finally { f.restore(); }
});

// ── Enrich token ─────────────────────────────────────────────────────────────
test('no enrich token is issued when the Firestore write fails', async () => {
  const f = stubFetch(500);
  try {
    const res = await onRequestPost({
      env: { LEAD_ENRICH_SECRET: 's' },
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docId: 'someone-elses-doc', name: 'Jane', email: 'jane@acme.com' }),
      }),
    });
    const out = await res.json();
    assert.equal(out.saved, false);
    assert.equal(out.enrichToken, null);
  } finally { f.restore(); }
});

// ── Health check gate ────────────────────────────────────────────────────────
const get = (url, headers = {}) => new Request(url, { headers });
const BASE = 'https://factoryjet.com/api/notify-lead';

test('health key: header or ?key= must match, and an unset key keeps it closed', async () => {
  const env = { HEALTH_CHECK_KEY: 'k3y' };
  assert.equal(await healthKeyMatches(env, get(`${BASE}?check=crm`, { 'X-Health-Key': 'k3y' })), true);
  assert.equal(await healthKeyMatches(env, get(`${BASE}?check=crm&key=k3y`)), true);
  assert.equal(await healthKeyMatches(env, get(`${BASE}?check=crm`, { 'X-Health-Key': 'k3' })), false);
  assert.equal(await healthKeyMatches(env, get(`${BASE}?check=crm`)), false);
  assert.equal(await healthKeyMatches({}, get(`${BASE}?check=crm`, { 'X-Health-Key': '' })), false);
  assert.equal(await healthKeyMatches({}, get(`${BASE}?check=crm&key=undefined`)), false);
});

test('without the key, ?check=crm answers like any other GET and calls nothing', async () => {
  const f = stubFetch();
  try {
    const plain = await onRequestGet({ env: {}, request: get(BASE) });
    const plainBody = await plain.text();
    for (const [env, headers] of [[{}, {}], [{ HEALTH_CHECK_KEY: 'k3y' }, {}], [{ HEALTH_CHECK_KEY: 'k3y' }, { 'X-Health-Key': 'nope' }]]) {
      const res = await onRequestGet({ env, request: get(`${BASE}?check=crm`, headers) });
      assert.equal(res.status, 405);
      assert.equal(await res.text(), plainBody);
    }
    assert.doesNotMatch(plainBody, /check=crm/);
    assert.equal(f.calls.length, 0, 'no ERPNext call without the key');

    const ok = await onRequestGet({ env: { HEALTH_CHECK_KEY: 'k3y' }, request: get(`${BASE}?check=crm`, { 'X-Health-Key': 'k3y' }) });
    assert.equal(ok.status, 200);
    assert.ok('crm' in (await ok.json()));
  } finally { f.restore(); }
});
