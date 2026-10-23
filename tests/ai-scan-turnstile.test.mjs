import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, verifyTurnstile, allowedTurnstileHost, MAX_LEN } from '../functions/api/ai-scan/index.js';

const realFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = realFetch; });

const GOOD = {
  website: 'acme.com', name: 'Jane Doe', email: 'jane@acme.com', mobile: '+1 555 000 0100',
  company: 'Acme', turnstileToken: 'tok',
};

/** Stub fetch: siteverify answers `verify`; records every other call. */
function stubFetch(verify) {
  const calls = [];
  globalThis.fetch = async (url, init) => {
    const u = String(url);
    calls.push({ url: u, init });
    if (u.includes('siteverify')) {
      if (verify instanceof Error) throw verify;
      return new Response(JSON.stringify(verify));
    }
    if (u.includes('/api/notify-lead')) return new Response(JSON.stringify({ ok: true, docId: 'd1' }));
    if (u.includes('/api/partner/scans')) return new Response(JSON.stringify({ slug: 's1', status: 'queued' }));
    return new Response('{}', { status: 404 });
  };
  return calls;
}

function ctx(body, env = { TURNSTILE_SECRET_KEY: 'sec', SIS_PARTNER_KEY: 'k' }) {
  const request = new Request('https://factoryjet.com/api/ai-scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com', 'CF-Connecting-IP': '1.2.3.4' },
    body: JSON.stringify(body),
  });
  return { request, env };
}

const spent = (calls) => calls.filter((c) => !c.url.includes('siteverify'));

test('host allow-list', () => {
  assert.equal(allowedTurnstileHost('factoryjet.com'), true);
  assert.equal(allowedTurnstileHost('www.factoryjet.com'), true);
  assert.equal(allowedTurnstileHost('preview.factoryjet-v2.pages.dev'), true);
  assert.equal(allowedTurnstileHost('evil.com'), false);
  assert.equal(allowedTurnstileHost('factoryjet.com.evil.com'), false);
  assert.equal(allowedTurnstileHost(undefined), false);
});

test('missing token: 403, no lead, no scan', async () => {
  const calls = stubFetch({ success: true, hostname: 'factoryjet.com' });
  const res = await onRequestPost(ctx({ ...GOOD, turnstileToken: '' }));
  assert.equal(res.status, 403);
  assert.ok((await res.json()).error);
  assert.equal(calls.length, 0);
});

test('failed token: 403, no lead, no scan', async () => {
  const calls = stubFetch({ success: false });
  const res = await onRequestPost(ctx(GOOD));
  assert.equal(res.status, 403);
  assert.equal(spent(calls).length, 0);
});

test('token from a foreign hostname is blocked', async () => {
  const calls = stubFetch({ success: true, hostname: 'evil.com' });
  const res = await onRequestPost(ctx(GOOD));
  assert.equal(res.status, 403);
  assert.equal(spent(calls).length, 0);
});

test('valid token: siteverify gets remoteip, lead + scan run', async () => {
  const calls = stubFetch({ success: true, hostname: 'www.factoryjet.com' });
  const res = await onRequestPost(ctx(GOOD));
  assert.equal(res.status, 200);
  const d = await res.json();
  assert.equal(d.slug, 's1');
  assert.equal(d.leadCaptured, true);
  const sv = calls.find((c) => c.url.includes('siteverify'));
  assert.equal(sv.init.body.get('remoteip'), '1.2.3.4');
  assert.equal(sv.init.body.get('secret'), 'sec');
  assert.equal(spent(calls).length, 2);
});

test('siteverify network error fails open', async () => {
  const orig = console.error; console.error = () => {};
  try {
    stubFetch(new Error('down'));
    const res = await onRequestPost(ctx(GOOD));
    assert.equal(res.status, 200);
  } finally { console.error = orig; }
});

test('secret unset fails open with a warning', async () => {
  const orig = console.warn; let warned = false; console.warn = () => { warned = true; };
  try {
    stubFetch({ success: false });
    assert.equal(await verifyTurnstile({}, '', ''), 'unchecked');
    const res = await onRequestPost(ctx({ ...GOOD, turnstileToken: '' }, { SIS_PARTNER_KEY: 'k' }));
    assert.equal(res.status, 200);
    assert.equal(warned, true);
  } finally { console.warn = orig; }
});

test('honeypot still drops silently before any check', async () => {
  const calls = stubFetch({ success: true, hostname: 'factoryjet.com' });
  const res = await onRequestPost(ctx({ ...GOOD, company_url: 'x' }));
  assert.equal(res.status, 200);
  assert.equal(calls.length, 0);
});

test('fields are length-capped before being forwarded', async () => {
  const calls = stubFetch({ success: true, hostname: 'factoryjet.com' });
  const long = 'a'.repeat(1000);
  const res = await onRequestPost(ctx({ ...GOOD, name: long, company: long, mobile: '1'.repeat(500) }));
  assert.equal(res.status, 200);
  const scan = JSON.parse(calls.find((c) => c.url.includes('/api/partner/scans')).init.body);
  assert.equal(scan.name.length, MAX_LEN.name);
  assert.equal(scan.company.length, MAX_LEN.company);
  assert.equal(scan.mobile.length, MAX_LEN.mobile);
  const lead = JSON.parse(calls.find((c) => c.url.includes('/api/notify-lead')).init.body);
  assert.equal(lead.name.length, MAX_LEN.name);
});

test('non-object JSON body is a 400, not a crash', async () => {
  stubFetch({ success: true, hostname: 'factoryjet.com' });
  const res = await onRequestPost(ctx(null));
  assert.equal(res.status, 400);
});
