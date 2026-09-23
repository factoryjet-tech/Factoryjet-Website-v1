# Lead Enrichment Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** After the inline name+email form saves a lead, open a modal that collects phone, company, and a free-text brief, and attach them to the same lead in Firestore, ERPNext, and the alert email.

**Architecture:** The existing Cloudflare Pages Function `functions/api/notify-lead.js` gains an `enrichToken` in its create response and a `mode: 'enrich'` branch that patches only the new fields. On the client, a small hook (`useLeadEnrichment`) fires the conversion immediately, lazy-loads the modal, and redirects to `/thank-you?...&counted=1` when the visitor sends or skips. The two inline forms swap their redirect for the hook.

**Tech Stack:** Next.js 15 / React 19 (client components), Cloudflare Pages Functions (Workers runtime, Web Crypto), Firestore REST, ERPNext REST, Resend, GTM dataLayer. Tests: Node 24 built-in `node:test` (runs `.mjs` and strips types from imported `.ts`).

**Spec:** `docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md`

## Global Constraints

- Never run `next dev` / `next build` locally (machine OOMs). Verify with `npx tsc --noEmit`, `node scripts/validate-build.mjs`, `node scripts/check-tracked-imports.mjs`, `npm test`.
- Stage files by explicit path only (other sessions leave uncommitted files in this tree). Never `git add -A`.
- No em dashes in any user-facing copy.
- Conversion event shape is fixed: `{ event: 'lead_converted', region, lead_source, lead_id }`, dedupe key `fj_conv_<lid>`.
- Enrich token: `"<issuedAtMs>.<hex HMAC-SHA256(key, docId + '.' + issuedAtMs)>"`, key = `env.LEAD_ENRICH_SECRET || env.ERPNEXT_API_SECRET`, valid for 2 hours. (Refines spec 6.1: the docId timestamp is the visitor's local time, so the server's own issue time is carried in the token instead.)
- Enrich writes only `phone`, `company`, `message` (whichever are non-empty) plus `enrichedAt`, `enrichSource` to Firestore `contactus/<docId>`.
- Server clips: phone 100, company 100, message 10,000 chars. Client sends at most 10,000 message chars.
- Modal copy is exactly the approved copy in spec section 4.
- Design tokens: `#F05A28` large accents, `#B23E13` small accent text, `#14110F` ink, `#46403B` body, `#E7DED6` lines, `#FFF8F5` wash; fonts `var(--font-plus-jakarta)` 800 / `var(--font-inter)` / `var(--font-geist-mono)`.

## Review Focus

1. Visitor whose name contains an apostrophe or accent ("O'Brien", "José"): the client docId differs from the server's sanitized id. Expected: enrichment still lands on the same record. Pinned in Task 1 (token verifies after sanitizing).
2. Phone text ERPNext rejects ("call after 5pm"): Expected: the message and phone still reach ERPNext as a comment even when the `mobile_no` update fails. Pinned in Task 2 (comment is written before the PUT, PUT failure is tolerated).
3. Visitor fills only the message: Expected: phone/company already on the record are not blanked. Pinned in Task 1 (update mask only lists filled fields).
4. Private browsing (sessionStorage throws): Expected: exactly one conversion. Pinned in Task 3 (`fireLeadConversion` with throwing storage) and Task 5 (`counted=1` skip on /thank-you).
5. Modal chunk fails to load (flaky network): Expected: visitor still reaches /thank-you. Pinned in Task 4 (hook's import `.catch` redirects).

---

### Task 1: Server enrich helpers (token, input cleaning, Firestore request)

**Files:**
- Modify: `functions/api/notify-lead.js` (insert a new block after `verifyTurnstile`, before `onRequestPost`)
- Create: `tests/notify-lead-enrich.test.mjs`
- Modify: `package.json` (add `"test": "node --test tests/"`)

**Interfaces:**
- Produces (exported from `functions/api/notify-lead.js`):
  - `signEnrichToken(key: string, docId: string, issuedAt?: number): Promise<string|null>`
  - `verifyEnrichToken(key: string, docId: string, token: unknown, now?: number): Promise<boolean>`
  - `sanitizeDocId(docId: unknown): string`
  - `cleanEnrichInput(body: object): { phone: string, company: string, message: string }`
  - `buildEnrichFirestoreRequest(env, docId, fields, source, nowIso?): { url: string, body: object }`
  - internal `enrichKey(env): string`

- [ ] **Step 1: Write the failing tests** in `tests/notify-lead-enrich.test.mjs`:

```js
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
```

- [ ] **Step 2: Add the test script and run it to verify it fails**

In `package.json` `scripts`, add after `"typecheck"`: `"test": "node --test tests/",`

Run: `npm test`
Expected: FAIL, `SyntaxError: The requested module '../functions/api/notify-lead.js' does not provide an export named 'signEnrichToken'`

- [ ] **Step 3: Implement** by inserting this block in `functions/api/notify-lead.js` immediately before `/** Cloudflare Pages Function entry point */`:

```js
// ─────────────────────────────────────────────────────────────────────────────
// Lead enrichment (step 2). After the inline name+email form saves a lead, a
// modal asks for phone, company and a free-text brief. Those details are
// attached to the SAME lead here. Spec:
// docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md
//
// The create response carries an enrichToken, "<issuedAtMs>.<hmac>", which the
// modal sends back. The HMAC key is LEAD_ENRICH_SECRET, else ERPNEXT_API_SECRET
// (already configured; used only as key material, never exposed).
// ─────────────────────────────────────────────────────────────────────────────
const ENRICH_MAX_AGE_MS = 2 * 60 * 60 * 1000;
const ENRICH_CLOCK_SKEW_MS = 60 * 1000;
const ENRICH_LOOKUP_DELAYS_MS = [0, 2000, 3000];

function enrichKey(env) {
  return (env && (env.LEAD_ENRICH_SECRET || env.ERPNEXT_API_SECRET)) || '';
}

async function hmacHex(key, text) {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(text));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Same sanitizing writeLeadToFirestore applies, so client and server ids agree. */
export function sanitizeDocId(docId) {
  return docId == null ? '' : String(docId).replace(/[^A-Za-z0-9_-]/g, '');
}

export async function signEnrichToken(key, docId, issuedAt = Date.now()) {
  if (!key || !docId) return null;
  return `${issuedAt}.${await hmacHex(key, `${docId}.${issuedAt}`)}`;
}

export async function verifyEnrichToken(key, docId, token, now = Date.now()) {
  if (!key || !docId || typeof token !== 'string') return false;
  const dot = token.indexOf('.');
  if (dot < 1) return false;
  const issuedAt = Number(token.slice(0, dot));
  if (!Number.isFinite(issuedAt)) return false;
  if (issuedAt > now + ENRICH_CLOCK_SKEW_MS || now - issuedAt > ENRICH_MAX_AGE_MS) return false;
  const expected = await hmacHex(key, `${docId}.${issuedAt}`);
  const given = token.slice(dot + 1);
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ given.charCodeAt(i);
  return diff === 0;
}

export function cleanEnrichInput(body) {
  const b = body || {};
  return {
    phone: clipText(b.phone, 100),
    company: clipText(b.company, 100),
    message: clipText(b.message, 10000),
  };
}

/** PATCH request that touches only the filled enrich fields on contactus/<docId>. */
export function buildEnrichFirestoreRequest(env, docId, fields, source, nowIso = new Date().toISOString()) {
  const project = (env && env.FIREBASE_PROJECT_ID) || FB_PROJECT;
  const apiKey  = (env && (env.FIREBASE_API_KEY || env.NEXT_PUBLIC_FIREBASE_API_KEY)) || FB_API_KEY;
  const s = (v) => ({ stringValue: v == null ? '' : String(v) });
  const out = {};
  for (const k of ['phone', 'company', 'message']) if (fields[k]) out[k] = s(fields[k]);
  out.enrichedAt = { timestampValue: nowIso };
  out.enrichSource = s(source);
  const mask = Object.keys(out).map((p) => `updateMask.fieldPaths=${p}`).join('&');
  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/contactus/${encodeURIComponent(docId)}?${mask}&key=${apiKey}`;
  return { url, body: { fields: out } };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS, 7 tests.

- [ ] **Step 5: Commit**

```bash
git add functions/api/notify-lead.js tests/notify-lead-enrich.test.mjs package.json
git commit -m "feat(leads): enrich token and field helpers for step-2 lead details"
```

---

### Task 2: Server enrich path (ERPNext, email, handler) and token in the create response

**Files:**
- Modify: `functions/api/notify-lead.js` (append to the Task 1 block; one line in `onRequestPost` body parsing; response JSON)
- Test: `tests/notify-lead-enrich.test.mjs` (append)

**Interfaces:**
- Consumes: Task 1 exports; existing `fetchWithTimeout`, `erpTimeout`, `describeFetchError`, `escapeHtml`, `row`, `clipText`, `ERP_HEADERS`, `ERP_EMAIL_GRACE_MS`, `DEFAULT_ERPNEXT_URL`, `NOTIFY_FROM`, `NOTIFY_TO`.
- Produces:
  - `enrichLeadInERPNext(env, { docId, email, name, phone, company, message }, sleep?): Promise<{ saved: boolean, leadId?: string, returning?: boolean, error?: string }>` (exported)
  - POST `{ mode: 'enrich', docId, enrichToken, name, email, phone, company, message, source, honeypot }` returns `{ ok, saved, emailed }` (200), `{ ok: false, error: 'invalid token' }` (403), or `{ ok: true, enriched: false }` (honeypot / all empty).
  - Create POST response gains `enrichToken: string | null`.

- [ ] **Step 1: Append the failing tests** to `tests/notify-lead-enrich.test.mjs`:

```js
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
    assert.match(fs.url, /fieldPaths=phone/);
    assert.match(fs.url, /fieldPaths=message/);
    assert.doesNotMatch(fs.url, /fieldPaths=company/);

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
    assert.deepEqual(slept, [2000, 3000]);
  } finally { f.restore(); }
});

test('ERPNext: returning email gets a comment only, no field overwrite', async () => {
  const f = stubFetch((c) => {
    if (c.url.includes('custom_firebase_doc_id')) return [200, { data: [] }];
    if (c.url.includes('email_id')) return [200, { data: [{ name: 'CRM-LEAD-OLD' }] }];
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL, `does not provide an export named 'enrichLeadInERPNext'`

- [ ] **Step 3: Implement.** Append to the Task 1 block (still before `/** Cloudflare Pages Function entry point */`):

```js
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function erpFindLead(env, erpUrl, authHeader, field, value) {
  const res = await fetchWithTimeout(
    `${erpUrl}/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([[field, '=', value]]))}&fields=${encodeURIComponent(JSON.stringify(['name']))}&limit_page_length=1`,
    { headers: { ...ERP_HEADERS, Authorization: authHeader } },
    erpTimeout(env),
  );
  if (!res.ok) { console.warn('ERPNext enrich lookup returned HTTP', res.status); return null; }
  const rows = ((await res.json()) || {}).data || [];
  return rows.length ? rows[0].name : null;
}

/**
 * Attach step-2 details to the Lead created from this docId. The create call may
 * still be running (it finishes in waitUntil), so look up a few times. A visitor
 * whose email already existed had their inquiry attached to the older Lead as a
 * comment at step 1; their details go there too, without overwriting its fields.
 * The comment is written BEFORE the field update: ERPNext rejects phone text it
 * cannot parse, and the comment must survive that.
 */
export async function enrichLeadInERPNext(env, lead, sleep = (ms) => new Promise((r) => setTimeout(r, ms))) {
  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  if (!env || !env.ERPNEXT_API_KEY || !env.ERPNEXT_API_SECRET) return { saved: false, error: 'not configured' };
  const authHeader = `token ${env.ERPNEXT_API_KEY}:${env.ERPNEXT_API_SECRET}`;

  let leadId = null;
  for (const delay of ENRICH_LOOKUP_DELAYS_MS) {
    if (delay) await sleep(delay);
    try { leadId = await erpFindLead(env, erpUrl, authHeader, 'custom_firebase_doc_id', lead.docId); }
    catch (err) { console.warn('ERPNext enrich lookup warning:', describeFetchError(err)); }
    if (leadId) break;
  }
  let returning = false;
  if (!leadId && lead.email) {
    try { leadId = await erpFindLead(env, erpUrl, authHeader, 'email_id', String(lead.email).trim()); }
    catch (err) { console.warn('ERPNext enrich email lookup warning:', describeFetchError(err)); }
    returning = Boolean(leadId);
  }
  if (!leadId) {
    console.error('ERPNext enrich: no Lead found for docId', lead.docId);
    return { saved: false, error: 'lead_not_found' };
  }

  const send = (path, method, payload) => fetchWithTimeout(`${erpUrl}${path}`, {
    method,
    headers: { ...ERP_HEADERS, 'Content-Type': 'application/json', Authorization: authHeader },
    body: JSON.stringify(payload),
  }, erpTimeout(env));

  const text = [
    returning ? 'Details added on the website (returning lead)' : 'Details added on the website',
    lead.phone && `Phone: ${lead.phone}`,
    lead.company && `Company: ${lead.company}`,
    lead.message && `Message:\n${lead.message}`,
  ].filter(Boolean).join('\n');
  let commented = false;
  try {
    const res = await send('/api/resource/Comment', 'POST', {
      comment_type: 'Comment',
      reference_doctype: 'Lead',
      reference_name: leadId,
      content: `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>`,
    });
    commented = res.ok;
    if (!res.ok) console.warn('ERPNext enrich comment returned HTTP', res.status);
  } catch (err) {
    console.warn('ERPNext enrich comment warning:', describeFetchError(err));
  }

  if (!returning) {
    const update = {};
    if (lead.phone) update.mobile_no = lead.phone;
    if (lead.company) update.company_name = lead.company;
    if (Object.keys(update).length) {
      try {
        const res = await send(`/api/resource/Lead/${encodeURIComponent(leadId)}`, 'PUT', update);
        if (!res.ok) console.warn('ERPNext enrich field update returned HTTP', res.status, 'fields', Object.keys(update).join(','));
      } catch (err) {
        console.warn('ERPNext enrich field update warning:', describeFetchError(err));
      }
    }
  }
  return { saved: commented, leadId, returning };
}

function buildEnrichHtml({ name, email, phone, company, message, erpLeadId, returning }) {
  const erpLink = erpLeadId
    ? `<a href="${DEFAULT_ERPNEXT_URL}/app/lead/${encodeURIComponent(erpLeadId)}">${escapeHtml(erpLeadId)}</a>${returning ? ' (returning lead)' : ''}`
    : 'Updating in the background';
  return `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f6f5f3;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7ded6;border-radius:10px;">
    <tr><td style="padding:22px 26px 6px;">
      <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#B23E13;font-weight:700;">Details added</div>
      <div style="font-size:20px;font-weight:700;color:#14110F;margin-top:6px;">${escapeHtml(name || email)} added project details</div>
    </td></tr>
    <tr><td style="padding:8px 26px 22px;"><table width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', escapeHtml(name || 'N/A'))}
      ${row('Email', escapeHtml(email || 'N/A'))}
      ${row('Phone', escapeHtml(phone || 'Not given'))}
      ${row('Company', escapeHtml(company || 'Not given'))}
      ${row('Message', message ? escapeHtml(message).replace(/\n/g, '<br>') : 'Not given')}
      ${row('CRM lead', erpLink)}
    </table></td></tr>
  </table></body></html>`;
}

async function sendEnrichEmail(env, data) {
  if (!env || !env.RESEND_API_KEY) { console.error('RESEND_API_KEY not set, enrich email skipped'); return false; }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        subject: `📝 Details added: ${(data.name || data.email || 'website lead').replace(/[\r\n]+/g, ' ')}`,
        html: buildEnrichHtml(data),
        ...(EMAIL_SHAPE.test(data.email || '') ? { reply_to: data.email } : {}),
      }),
    });
    if (!res.ok) console.error('Resend enrich error:', res.status);
    return res.ok;
  } catch (err) {
    console.error('Resend enrich fetch error:', err);
    return false;
  }
}

async function handleEnrich(context, body, corsHeaders) {
  const { env } = context;
  const reply = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status, headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });

  if (body.honeypot && String(body.honeypot).trim()) return reply({ ok: true, enriched: false });
  const docId = sanitizeDocId(body.docId);
  if (!(await verifyEnrichToken(enrichKey(env), docId, body.enrichToken))) {
    return reply({ ok: false, error: 'invalid token' }, 403);
  }
  const fields = cleanEnrichInput(body);
  if (!fields.phone && !fields.company && !fields.message) return reply({ ok: true, enriched: false });

  const name = clipText(body.name, 120);
  const email = clipText(body.email, 200);
  const source = clipText(body.source, 80).replace(/[<>"'`]/g, '');

  // (1) AUTHORITATIVE: patch only the new fields onto the existing Firestore doc.
  let saved = false;
  try {
    const { url, body: fsBody } = buildEnrichFirestoreRequest(env, docId, fields, source);
    const res = await fetch(url, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fsBody) });
    saved = res.ok;
    if (!res.ok) console.error('Firestore enrich write failed:', res.status, (await res.text()).slice(0, 300));
  } catch (err) {
    console.error('Firestore enrich write error:', err);
  }

  // (2) ERPNext in the background; wait briefly so the email can link the Lead.
  const erpPromise = enrichLeadInERPNext(env, { docId, email, name, ...fields })
    .catch((err) => ({ saved: false, error: describeFetchError(err) }));
  if (typeof context.waitUntil === 'function') context.waitUntil(erpPromise);
  const erp = await Promise.race([
    erpPromise,
    new Promise((resolve) => setTimeout(() => resolve({ pending: true }), ERP_EMAIL_GRACE_MS)),
  ]);

  // (3) Tell the inbox.
  const emailed = await sendEnrichEmail(env, { name, email, ...fields, erpLeadId: erp.leadId, returning: erp.returning });

  const ok = saved || emailed;
  return reply({ ok, saved, emailed }, ok ? 200 : 502);
}
```

In `onRequestPost`, directly after the `try { body = await request.json(); } catch { ... }` block, add:

```js
  // Step-2 details from the enrichment modal attach to an existing lead.
  if (body && body.mode === 'enrich') return handleEnrich(context, body, corsHeaders);
```

In `onRequestPost`, directly before the final `return new Response(` of the create path, add:

```js
  // Lets the step-2 modal attach phone/company/message to THIS lead.
  const enrichToken = await signEnrichToken(enrichKey(env), sanitizeDocId(fsResult.docId || docId));
```

and add `enrichToken,` to the response object after `docId: fsResult.docId || docId,`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS, 14 tests.

- [ ] **Step 5: Commit**

```bash
git add functions/api/notify-lead.js tests/notify-lead-enrich.test.mjs
git commit -m "feat(leads): enrich path attaches step-2 details to the same lead"
```

---

### Task 3: Client helpers (conversion, submitLead token, enrichLead)

**Files:**
- Create: `src/utils/leadConversion.ts`
- Create: `src/utils/enrichLead.ts`
- Modify: `src/utils/submitLead.ts` (`LeadResult`, `postNotifyLead`, return)
- Create: `tests/lead-conversion.test.mjs`

**Interfaces:**
- Produces:
  - `fireLeadConversion(c: { lid: string; region?: string; source?: string }, deps?: { push?: (d: Record<string, unknown>) => void; storage?: Pick<Storage, 'getItem' | 'setItem'> | null }): boolean`
  - `thankYouUrl(c: { lid: string; region?: string; source?: string; counted?: boolean }): string`
  - `enrichLead(input: EnrichInput): Promise<boolean>` with `EnrichInput = { docId: string; enrichToken: string; name: string; email: string; phone: string; company: string; message: string; source: string; honeypot?: string }`
  - `LeadResult.enrichToken?: string | null`

- [ ] **Step 1: Write the failing test** `tests/lead-conversion.test.mjs`:

```js
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
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: FAIL, `Cannot find module '.../src/utils/leadConversion.ts'`

- [ ] **Step 3: Implement** `src/utils/leadConversion.ts` (no imports, so Node can load it for tests):

```ts
/**
 * leadConversion — the single place that pushes the lead conversion.
 *
 * GTM (container GTM-PKWD8SHF) turns the `lead_converted` dataLayer event into
 * GA4 generate_lead plus the region-routed Google Ads conversion. Its triggers
 * have no page-path condition (verified live 2026-09-23), so this can fire on the
 * form's own page. Deduped per lead id in sessionStorage; /thank-you also skips
 * when the URL carries counted=1, so a blocked sessionStorage cannot double-count.
 * No imports on purpose: tests/lead-conversion.test.mjs loads this file in Node.
 */

export interface LeadConversion {
  lid: string;
  region?: string;
  source?: string;
}

interface ConversionDeps {
  push?: (data: Record<string, unknown>) => void;
  storage?: Pick<Storage, 'getItem' | 'setItem'> | null;
}

function defaultPush(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

function defaultStorage(): Pick<Storage, 'getItem' | 'setItem'> | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

export function fireLeadConversion({ lid, region, source }: LeadConversion, deps: ConversionDeps = {}): boolean {
  if (!lid) return false;
  const push = deps.push ?? defaultPush;
  const storage = deps.storage === undefined ? defaultStorage() : deps.storage;
  const key = `fj_conv_${lid}`;
  try {
    if (storage && storage.getItem(key)) return false;
  } catch {
    /* storage blocked: count it, /thank-you's counted=1 prevents a second count */
  }
  push({ event: 'lead_converted', region: (region || 'us').toLowerCase(), lead_source: source || 'unknown', lead_id: lid });
  try {
    if (storage) storage.setItem(key, '1');
  } catch {
    /* ignore */
  }
  return true;
}

export function thankYouUrl({ lid, region, source, counted }: LeadConversion & { counted?: boolean }): string {
  return `/thank-you?source=${encodeURIComponent(source || 'unknown')}&service=unknown&region=${encodeURIComponent(region || 'us')}&lid=${encodeURIComponent(lid)}${counted ? '&counted=1' : ''}`;
}
```

`src/utils/enrichLead.ts`:

```ts
/**
 * enrichLead — sends the step-2 modal details (phone, company, message) to
 * /api/notify-lead in `enrich` mode so they attach to the lead step 1 created.
 * Bounded like submitLead: 8s, then one 6s retry. Never throws.
 */

export interface EnrichInput {
  docId: string;
  enrichToken: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
  honeypot?: string;
}

/** Server keeps 10,000 characters; send no more so the request stays small. */
export const ENRICH_MESSAGE_MAX = 10000;

async function post(payload: Record<string, unknown>, timeoutMs: number): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function enrichLead(input: EnrichInput): Promise<boolean> {
  const payload = { mode: 'enrich', ...input, message: input.message.slice(0, ENRICH_MESSAGE_MAX) };
  if (await post(payload, 8000)) return true;
  return post(payload, 6000);
}
```

In `src/utils/submitLead.ts`:
- In `interface LeadResult`, after `erpLeadId?: string | null;` add:
  ```ts
  /** Server-signed token that lets the step-2 modal attach details to this lead. */
  enrichToken?: string | null;
  ```
- Change `postNotifyLead`'s return type to `Promise<{ ok: boolean; erpLeadId?: string | null; enrichToken?: string | null }>` and its success return to `return { ok: true, erpLeadId: data?.erpLeadId || null, enrichToken: data?.enrichToken || null };`
- After `const erpLeadId = postRes.erpLeadId;` add `const enrichToken = postRes.enrichToken ?? null;`
- Change the final `return { ok, docId, erpLeadId };` to `return { ok, docId, erpLeadId, enrichToken };`

- [ ] **Step 4: Run tests and typecheck**

Run: `npm test && npx tsc --noEmit`
Expected: 18 tests PASS; tsc exits 0.

- [ ] **Step 5: Commit**

```bash
git add src/utils/leadConversion.ts src/utils/enrichLead.ts src/utils/submitLead.ts tests/lead-conversion.test.mjs
git commit -m "feat(leads): shared conversion helper, enrich client, token from submitLead"
```

---

### Task 4: The modal and the hook that drives it

**Files:**
- Create: `src/components/lead/LeadEnrichModal.tsx`
- Create: `src/components/lead/LeadEnrichModal.css`
- Create: `src/components/lead/useLeadEnrichment.tsx`

**Interfaces:**
- Consumes: `fireLeadConversion`, `thankYouUrl` (Task 3), `enrichLead`, `ENRICH_MESSAGE_MAX` (Task 3), `pushToDataLayer` from `@/utils/gtm`.
- Produces:
  - `LeadEnrichModal` default export, props `{ firstName: string; onSubmit: (f: EnrichFields) => Promise<void>; onSkip: () => void }`, `EnrichFields = { phone: string; company: string; message: string; honeypot: string }` (exported type)
  - `useLeadEnrichment(): { start: (c: EnrichStart) => void; prefetch: () => void; modal: React.ReactNode }`, `EnrichStart = { ok: boolean; docId: string; enrichToken?: string | null; name: string; email: string; source: string; region: string }`

No unit test runner for React exists in this repo and local rendering is banned; this task is verified by `tsc`, by the Review Focus 5 path being in code (import `.catch` redirects), and by the live end-to-end test in Task 6.

- [ ] **Step 1: Create `src/components/lead/LeadEnrichModal.css`:**

```css
/* Step-2 lead details modal. Tokens match the AI Agent Development page. */
.lem-backdrop { position: fixed; inset: 0; z-index: 10000; display: grid; place-items: center; padding: 16px; background: rgba(20,17,15,.55); animation: lem-fade .18s ease-out; }
.lem-card { position: relative; width: min(560px, 100%); max-height: calc(100dvh - 32px); overflow-y: auto; background: #FFFFFF; color: #14110F; border: 1px solid #E7DED6; border-radius: 14px; padding: 32px 32px 26px; box-shadow: 0 30px 60px -30px rgba(20,17,15,.45); font-family: var(--font-inter, 'Inter'), system-ui, sans-serif; font-size: 15px; line-height: 1.6; text-align: left; animation: lem-rise .22s ease-out; }
.lem-card *, .lem-card *::before, .lem-card *::after { box-sizing: border-box; }
.lem-close { position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; display: grid; place-items: center; border: 1px solid #E7DED6; border-radius: 50%; background: #FFFFFF; color: #46403B; cursor: pointer; }
.lem-close:hover { border-color: #14110F; color: #14110F; }
.lem-eyebrow { display: flex; align-items: center; gap: 10px; margin: 0 44px 0 0; color: #B23E13; font-family: var(--font-geist-mono, 'Geist Mono'), ui-monospace, monospace; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
.lem-eyebrow::before { content: ''; flex: 0 0 14px; height: 2px; background: #F05A28; }
.lem-title { margin: 14px 0 0; font-family: var(--font-plus-jakarta, 'Plus Jakarta Sans'), sans-serif; font-weight: 800; font-size: clamp(24px, 3.4vw, 30px); line-height: 1.12; letter-spacing: -0.03em; text-wrap: balance; }
.lem-lead { margin: 12px 0 0; color: #46403B; }
.lem-founder { display: flex; align-items: center; gap: 12px; margin-top: 18px; padding: 12px 14px; background: #FFF8F5; border: 1px solid #E7DED6; border-radius: 10px; }
.lem-founder img { flex: 0 0 40px; width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.lem-founder p { margin: 0; font-size: 13.5px; color: #46403B; line-height: 1.45; }
.lem-founder strong { display: block; color: #14110F; font-weight: 600; }
.lem-form { display: grid; gap: 16px; margin-top: 22px; }
.lem-field { display: grid; gap: 6px; }
.lem-label { font-size: 13.5px; font-weight: 600; color: #14110F; }
.lem-help { font-size: 12.5px; color: #6E635A; }
.lem-input, .lem-textarea { width: 100%; min-height: 48px; border: 1px solid #D8CCC0; border-radius: 8px; padding: 12px 14px; background: #FFFFFF; color: #14110F; font: inherit; }
.lem-textarea { min-height: 112px; resize: vertical; overflow: hidden; }
.lem-input:focus-visible, .lem-textarea:focus-visible, .lem-send:focus-visible, .lem-skip:focus-visible, .lem-close:focus-visible { outline: 2px solid #B23E13; outline-offset: 2px; }
.lem-trap { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
.lem-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 20px; margin-top: 4px; }
.lem-send { display: inline-flex; align-items: center; gap: 12px; min-height: 50px; padding: 12px 22px; border: 0; border-radius: 8px; background: #14110F; color: #FFFFFF; font: 600 15px/1 var(--font-inter, 'Inter'), system-ui, sans-serif; cursor: pointer; transition: background .18s ease; }
.lem-send:hover { background: #B23E13; }
.lem-send[disabled] { opacity: .7; cursor: default; }
.lem-skip { border: 0; background: none; padding: 8px 2px; color: #46403B; font: 500 14px var(--font-inter, 'Inter'), system-ui, sans-serif; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.lem-skip:hover { color: #B23E13; }
.lem-trust { margin: 16px 0 0; padding-top: 14px; border-top: 1px solid #E7DED6; font-size: 12.5px; color: #6E635A; }
@media (max-width: 640px) {
  .lem-backdrop { padding: 0; place-items: end stretch; }
  .lem-card { width: 100%; height: 100dvh; max-height: 100dvh; border-radius: 0; border: 0; padding: 22px 20px calc(24px + env(safe-area-inset-bottom, 0px)); }
  .lem-send { flex: 1 1 100%; justify-content: center; }
}
@keyframes lem-fade { from { opacity: 0; } }
@keyframes lem-rise { from { opacity: 0; transform: translateY(14px); } }
@media (prefers-reduced-motion: reduce) { .lem-backdrop, .lem-card { animation: none; } }
```

- [ ] **Step 2: Create `src/components/lead/LeadEnrichModal.tsx`:**

```tsx
'use client';

/**
 * LeadEnrichModal — step 2 of the inline lead forms. Opens after name + email are
 * saved and asks for phone, company and a free-text brief. Every field is
 * optional; the lead already exists. Spec:
 * docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './LeadEnrichModal.css';

export interface EnrichFields {
  phone: string;
  company: string;
  message: string;
  honeypot: string;
}

export interface LeadEnrichModalProps {
  firstName: string;
  onSubmit: (fields: EnrichFields) => Promise<void>;
  onSkip: () => void;
}

const FOCUSABLE = 'button:not([disabled]), input:not([tabindex="-1"]), textarea';

export default function LeadEnrichModal({ firstName, onSubmit, onSkip }: LeadEnrichModalProps) {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [sending, setSending] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    phoneRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !sendingRef.current) { e.preventDefault(); onSkip(); return; }
      if (e.key !== 'Tab' || !cardRef.current) return;
      const items = Array.from(cardRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onSkip]);

  const grow = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sendingRef.current) return;
    sendingRef.current = true;
    setSending(true);
    await onSubmit({ phone, company, message, honeypot });
  };

  const skip = () => { if (!sendingRef.current) onSkip(); };

  return createPortal(
    <div className="lem-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) skip(); }}>
      <div className="lem-card" ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="lem-title" aria-describedby="lem-lead">
        <button type="button" className="lem-close" aria-label="Close and continue" onClick={skip}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
        <p className="lem-eyebrow">Got it{firstName ? `, ${firstName}` : ''}. Your request is in.</p>
        <h2 id="lem-title" className="lem-title">Add a few details, get a real answer</h2>
        <p id="lem-lead" className="lem-lead">
          With a phone number and a few lines about your project, our first reply can be an actual answer: a
          recommendation, a rough timeline, what it would take. Without them, it&apos;s usually a round of questions first.
        </p>
        <div className="lem-founder">
          <img src="/images/team/bhavesh-barot.webp" alt="Bhavesh Barot, founder of FactoryJet" width={40} height={40} />
          <p><strong>I read every request myself.</strong>Bhavesh Barot, Founder</p>
        </div>
        <form className="lem-form" onSubmit={handleSubmit} noValidate>
          <label className="lem-field">
            <span className="lem-label">Phone number</span>
            <input ref={phoneRef} className="lem-input" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="lem-help">Only if a quick call suits you better than email.</span>
          </label>
          <label className="lem-field">
            <span className="lem-label">Company name</span>
            <input className="lem-input" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} />
          </label>
          <label className="lem-field">
            <span className="lem-label">What do you need built, fixed, or figured out?</span>
            <textarea
              className="lem-textarea" rows={4} value={message}
              placeholder="Your platform, what's broken or missing, and any deadline. Write as much as you like."
              onChange={(e) => { setMessage(e.target.value); grow(e.target); }}
            />
          </label>
          <input className="lem-trap" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          <div className="lem-actions">
            <button type="submit" className="lem-send" disabled={sending}>
              {sending ? 'Sending…' : 'Send details'}
              {!sending && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </button>
            <button type="button" className="lem-skip" onClick={skip}>Skip, just email me</button>
          </div>
        </form>
        <p className="lem-trust">You&apos;ll hear back within 24 hours on business days. We never sell or share your details.</p>
      </div>
    </div>,
    document.body,
  );
}
```

- [ ] **Step 3: Create `src/components/lead/useLeadEnrichment.tsx`:**

```tsx
'use client';

/**
 * useLeadEnrichment — what an inline lead form does after submitLead() succeeds:
 *   1. count the lead now (fireLeadConversion), so a visitor who closes the tab
 *      with the modal open is still a conversion;
 *   2. lazy-load and open LeadEnrichModal;
 *   3. on Send or Skip, go to /thank-you?...&counted=1 (no second count there).
 * If the save failed, there is no token, or the modal code fails to load, it goes
 * straight to /thank-you as the forms always did.
 */

import React, { useCallback, useRef, useState } from 'react';
import { fireLeadConversion, thankYouUrl } from '@/utils/leadConversion';
import { enrichLead } from '@/utils/enrichLead';
import { pushToDataLayer } from '@/utils/gtm';
import type { EnrichFields, LeadEnrichModalProps } from './LeadEnrichModal';

export interface EnrichStart {
  ok: boolean;
  docId: string;
  enrichToken?: string | null;
  name: string;
  email: string;
  source: string;
  region: string;
}

type ModalComponent = React.ComponentType<LeadEnrichModalProps>;

const loadModal = () => import('./LeadEnrichModal').then((m) => m.default as ModalComponent);

export function useLeadEnrichment() {
  const [active, setActive] = useState<{ ctx: EnrichStart; Modal: ModalComponent } | null>(null);
  const doneRef = useRef(false);

  const finish = useCallback((ctx: EnrichStart) => {
    if (doneRef.current) return;
    doneRef.current = true;
    window.location.assign(thankYouUrl({ lid: ctx.docId, region: ctx.region, source: ctx.source, counted: true }));
  }, []);

  const prefetch = useCallback(() => { loadModal().catch(() => {}); }, []);

  const start = useCallback((ctx: EnrichStart) => {
    fireLeadConversion({ lid: ctx.docId, region: ctx.region, source: ctx.source });
    if (!ctx.ok || !ctx.enrichToken) { finish(ctx); return; }
    loadModal()
      .then((Modal) => {
        pushToDataLayer({ event: 'lead_enrich_shown', form_name: ctx.source });
        setActive({ ctx, Modal });
      })
      .catch(() => finish(ctx));
  }, [finish]);

  const onSkip = useCallback(() => {
    if (!active) return;
    pushToDataLayer({ event: 'lead_enrich_skipped', form_name: active.ctx.source });
    finish(active.ctx);
  }, [active, finish]);

  const onSubmit = useCallback(async (f: EnrichFields) => {
    if (!active) return;
    const { ctx } = active;
    const filled = (['phone', 'company', 'message'] as const).filter((k) => f[k].trim() !== '');
    if (filled.length === 0 || f.honeypot.trim() !== '') {
      pushToDataLayer({ event: 'lead_enrich_skipped', form_name: ctx.source });
      finish(ctx);
      return;
    }
    pushToDataLayer({ event: 'lead_enrich_submitted', form_name: ctx.source, fields_filled: filled.join(',') });
    await enrichLead({
      docId: ctx.docId,
      enrichToken: ctx.enrichToken || '',
      name: ctx.name,
      email: ctx.email,
      phone: f.phone.trim(),
      company: f.company.trim(),
      message: f.message.trim(),
      source: ctx.source,
    });
    finish(ctx);
  }, [active, finish]);

  const firstName = active ? active.ctx.name.trim().split(/\s+/)[0].slice(0, 30) : '';
  const modal = active ? <active.Modal firstName={firstName} onSkip={onSkip} onSubmit={onSubmit} /> : null;

  return { start, prefetch, modal };
}
```

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/lead/LeadEnrichModal.tsx src/components/lead/LeadEnrichModal.css src/components/lead/useLeadEnrichment.tsx
git commit -m "feat(leads): step-2 details modal and the hook that opens it"
```

---

### Task 5: Wire the two inline forms and /thank-you

**Files:**
- Modify: `src/components/HeroInlineForm.tsx` (imports, hook, submit handler, render)
- Modify: `src/components/BlogLeadCapture.tsx` (same)
- Modify: `src/app/thank-you/ThankYouContent.tsx` (use helper, honour `counted=1`)

**Interfaces:**
- Consumes: `useLeadEnrichment` (Task 4), `fireLeadConversion` (Task 3), `submitLead` returning `enrichToken` (Task 3).

- [ ] **Step 1: HeroInlineForm.** Add import after the `@/utils/gtm` import:

```ts
import { useLeadEnrichment } from '@/components/lead/useLeadEnrichment';
```

After `const startedRef = useRef(false);` add `const enrichment = useLeadEnrichment();`. In `onFirstInteraction`, after `trackFormStart(source);` add `enrichment.prefetch();`.

Replace the `try { ... } catch { ... } finally { setIsSubmitting(false); }` block in `handleSubmit` with:

```tsx
    try {
      // Durable, server-first capture — never hangs on the browser Firestore SDK.
      const { ok, docId, enrichToken } = await submitLead({ name, email, region, source });
      trackFormSuccess(source);
      // Counts the lead now, then opens the step-2 details modal; it goes to
      // /thank-you?...&counted=1 when the visitor sends or skips.
      enrichment.start({ ok, docId, enrichToken, name, email, source, region: region || 'us' });
    } catch (err) {
      console.error('Hero inline form error:', err);
      trackFormError(source, 'submit_failed');
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
```

Wrap the returned JSX in a fragment and render the modal after the form: `return (<>` … `</form>{enrichment.modal}</>);`. Update the file's header comment line "and redirects to /thank-you (single conversion source)." to "counts the lead, opens the step-2 details modal (useLeadEnrichment), then goes to /thank-you."

- [ ] **Step 2: BlogLeadCapture.** Same import, `const enrichment = useLeadEnrichment();`, `enrichment.prefetch();` in `onFirstInteraction`, and replace its `try/catch/finally` with:

```tsx
    try {
      const { ok, docId, enrichToken } = await submitLead({ name, email, region: 'us', source });
      trackFormSuccess(source);
      enrichment.start({ ok, docId, enrichToken, name, email, source, region: 'us' });
    } catch (err) {
      console.error('Blog lead capture error:', err);
      trackFormError(source, 'submit_failed');
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
```

(Match the existing `console.error` label and error string in the file if they differ.) Render `{enrichment.modal}` just before the component's outermost closing tag.

- [ ] **Step 3: ThankYouContent.** Add `import { fireLeadConversion } from '@/utils/leadConversion';`. In the `useEffect`, read `counted` alongside `lid`: declare `let counted = false;` and in the `try` add `counted = sp.get('counted') === '1';`. Replace everything from `// One dataLayer push -> GTM fires` through the end of the `sessionStorage` try/catch with:

```ts
    // The inline forms already counted this lead on their own page (counted=1).
    if (counted) return;

    // One dataLayer push -> GTM fires GA4 generate_lead + the region-routed Ads
    // conversion. Deduped per lid; see src/utils/leadConversion.ts.
    fireLeadConversion({ lid, region, source });
```

Remove the `pushToDataLayer` import if nothing else in the file uses it.

- [ ] **Step 4: Verify**

Run: `npx tsc --noEmit && npm test && node scripts/validate-build.mjs`
Expected: all exit 0.
Run: `grep -n "window.location.assign" src/components/HeroInlineForm.tsx src/components/BlogLeadCapture.tsx`
Expected: no matches (the hook owns the redirect).

- [ ] **Step 5: Commit**

```bash
git add src/components/HeroInlineForm.tsx src/components/BlogLeadCapture.tsx src/app/thank-you/ThankYouContent.tsx
git commit -m "feat(leads): inline forms open the details modal; thank-you honours counted=1"
```

---

### Task 6: Docs, fill-rate script, pre-push gate, live verification

**Files:**
- Modify: `TRACKING.md` (the "The lead flow (code side)" section)
- Create: `pipeline/research/lead_enrich_fill_rate.py`

- [ ] **Step 1: TRACKING.md.** In "The lead flow (code side)", after the step describing `/thank-you`, add:

```markdown
**Inline forms (HeroInlineForm, BlogLeadCapture), since 2026-09-23:** the form
fires `lead_converted` itself the moment `submitLead()` succeeds
(`src/utils/leadConversion.ts`, same event and `fj_conv_<lid>` dedupe), opens the
step-2 details modal, then redirects to `/thank-you?...&counted=1`. `/thank-you`
does not fire when `counted=1` is present. The live GTM lead triggers have no
page-path condition (verified 2026-09-23), so this is counted identically.
Modal behaviour events (dataLayer only, no GA4 tag): `lead_enrich_shown`,
`lead_enrich_submitted` (`fields_filled`), `lead_enrich_skipped`.
```

- [ ] **Step 2: Fill-rate script** `pipeline/research/lead_enrich_fill_rate.py`:

```python
#!/usr/bin/env python3
"""Share of inline-form leads that added step-2 details (phone/company/message).

Reads ERPNext with ERPNEXT_API_KEY / ERPNEXT_API_SECRET from the environment.
Usage: ERPNEXT_API_KEY=... ERPNEXT_API_SECRET=... python3 lead_enrich_fill_rate.py [days=21]
"""
import json, os, sys, urllib.parse, urllib.request, datetime

URL = os.environ.get("ERPNEXT_URL", "https://erp.factoryjet.com")
AUTH = f"token {os.environ['ERPNEXT_API_KEY']}:{os.environ['ERPNEXT_API_SECRET']}"
DAYS = int(sys.argv[1]) if len(sys.argv) > 1 else 21
since = (datetime.date.today() - datetime.timedelta(days=DAYS)).isoformat()

def get(path, **params):
    q = urllib.parse.urlencode({k: json.dumps(v) if not isinstance(v, (str, int)) else v for k, v in params.items()})
    req = urllib.request.Request(f"{URL}{path}?{q}", headers={"Authorization": AUTH, "Accept": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=30))["data"]

leads = get("/api/resource/Lead", filters=[["creation", ">=", since], ["source", "=", "Website"]],
            fields=["name", "custom_firebase_doc_id"], limit_page_length=1000)
comments = get("/api/resource/Comment", filters=[["reference_doctype", "=", "Lead"], ["creation", ">=", since],
               ["content", "like", "%Details added on the website%"]], fields=["reference_name"], limit_page_length=1000)
enriched = {c["reference_name"] for c in comments}
total = len(leads)
filled = sum(1 for l in leads if l["name"] in enriched)
print(f"Last {DAYS} days: {total} website leads, {filled} added details"
      + (f" ({filled / total:.0%})" if total else ""))
```

- [ ] **Step 3: Full pre-push gate**

Run: `npm test && npx tsc --noEmit && node scripts/validate-build.mjs && node scripts/check-tracked-imports.mjs && node scripts/check-watermarks.mjs`
Expected: all exit 0. Then `git status --short functions src tests TRACKING.md package.json pipeline/research/lead_enrich_fill_rate.py docs/superpowers` shows only this plan's files as changed.

- [ ] **Step 4: Commit**

```bash
git add TRACKING.md pipeline/research/lead_enrich_fill_rate.py docs/superpowers/plans/2026-09-23-lead-enrichment-modal.md
git commit -m "docs(leads): tracking notes and fill-rate script for the details modal"
```

- [ ] **Step 5: Hand Bhavesh the push command** (deploy workflow: he pushes `NextJS`; Cloudflare builds in ~90s).

- [ ] **Step 6: Live verification after deploy** (a test lead named "TEST enrich", a test inbox address):
  1. `curl -s -H 'Cache-Control: no-cache' "https://factoryjet.com/api/notify-lead?check=crm&cb=$$"` shows `authOk: true`.
  2. Submit the hero form on a live page, confirm the modal opens, fill phone + message, send.
  3. Two emails arrive (new lead, "Details added"); ERPNext Lead has `mobile_no` and the "Details added" comment; GA4 realtime shows one `generate_lead`.
  4. Repeat and click Skip: one conversion, no details email.
  5. `python3 scripts/check-tracking-health.py` reports healthy.
  6. Ask Bhavesh before deleting the two test Leads in ERPNext.
