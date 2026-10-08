import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { onRequestPost } from '../functions/api/notify-lead.js';

// A filled trap field used to be dropped in the browser with no record. A browser
// autofill can fill it for a real visitor, so the lead is now kept and marked.
// Nothing here touches the network: fetch is stubbed throughout.

const DOC = '2026-10-08_10-00-00_lead_ab12cd';
const ENV = { RESEND_API_KEY: 'r', LEAD_ENRICH_SECRET: 'lead-secret' };

function stubFetch() {
  const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    calls.push({ url: String(url), method: opts.method || 'GET', body: opts.body ? JSON.parse(opts.body) : null });
    return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
  };
  return { calls, restore: () => { globalThis.fetch = original; } };
}

async function create(extra) {
  const f = stubFetch();
  const pending = [];
  try {
    const res = await onRequestPost({
      env: ENV,
      waitUntil: (p) => pending.push(p),
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com' },
        body: JSON.stringify({ docId: DOC, name: 'Jane', email: 'jane@acme.com', source: 'contact_page', collection: 'contactpage', ...extra }),
      }),
    });
    await Promise.all(pending);
    return {
      res, out: await res.json(),
      saved: f.calls.find((c) => c.url.includes('firestore.googleapis.com')),
      mail: f.calls.find((c) => c.url.includes('api.resend.com')),
    };
  } finally { f.restore(); }
}

test('a lead with the trap field filled is saved, emailed and marked likely spam', async () => {
  const { res, out, saved, mail } = await create({ honeypot: 'Acme Inc.' });
  assert.equal(res.status, 200);
  assert.equal(out.ok, true);
  assert.equal(saved.body.fields.honeypot.stringValue, 'filled');
  assert.equal(saved.body.fields.email.stringValue, 'jane@acme.com');
  assert.match(mail.body.subject, /^⚠️ LIKELY SPAM — New lead: Jane/);
  assert.match(mail.body.html, /Hidden trap field was filled/);
  assert.doesNotMatch(mail.body.html, /Acme Inc\./, 'the trap value itself is never echoed');
});

test('a normal lead is unmarked, and a whitespace-only trap value counts as empty', async () => {
  for (const extra of [{}, { honeypot: '' }, { honeypot: '   ' }]) {
    const { out, saved, mail } = await create(extra);
    assert.equal(out.ok, true);
    assert.equal(saved.body.fields.honeypot.stringValue, '');
    assert.match(mail.body.subject, /^🔥 New lead: Jane/);
    assert.doesNotMatch(mail.body.html, /Hidden trap field was filled/);
  }
});

// ── Browser side ─────────────────────────────────────────────────────────────
function load(file, modules, globals = {}) {
  const source = readFileSync(new URL(file, import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports, ...globals,
    require: (name) => { assert.ok(name in modules, `Unexpected dependency ${name}`); return modules[name]; },
  });
  return exports;
}

test('submitLead sends the trap value to the server', async () => {
  const payloads = [];
  const { submitLead } = load('../src/utils/submitLead.ts', {
    '@/utils/leadAttribution': { readLeadAttribution: () => ({}) },
    '@/utils/leadService': { resolveServiceCategory: () => 'Other', serviceFromValue: () => '' },
    '@/utils/leadConversion': { rememberLeadContext: () => {} },
    'firebase/firestore': { setDoc: async () => {}, doc: () => ({}) },
    '@/firebase': { db: null },
  }, {
    AbortController, setTimeout, clearTimeout,
    fetch: async (_url, init) => { payloads.push(JSON.parse(init.body)); return { ok: true, json: async () => ({ ok: true }) }; },
  });
  await submitLead({ name: 'Jane', email: 'jane@acme.com', source: 'contact_page', page: '/contact', honeypot: 'Acme Inc.' });
  await submitLead({ name: 'Jane', email: 'jane@acme.com', source: 'contact_page', page: '/contact' });
  assert.equal(payloads[0].honeypot, 'Acme Inc.');
  assert.equal(payloads[1].honeypot, '');
});

test('keepTrappedLead saves the lead, records a trap event and never a conversion', async () => {
  const events = [], sent = [];
  let fail = false;
  const { keepTrappedLead } = load('../src/utils/trappedLead.ts', {
    '@/utils/submitLead': { submitLead: async (input) => { sent.push(input); if (fail) throw new Error('Lead capture was not confirmed'); return { ok: true, docId: 'd' }; } },
    '@/utils/gtm': { pushToDataLayer: (e) => events.push(e) },
  });
  const input = { name: 'Jane', email: 'jane@acme.com', source: 'contact_page', honeypot: 'Acme Inc.' };

  assert.equal(await keepTrappedLead(input), true);
  assert.equal(sent[0].honeypot, 'Acme Inc.');
  assert.deepEqual(events.map((e) => [e.event, e.form_name]), [['form_spam_trap', 'contact_page']]);

  fail = true;
  assert.equal(await keepTrappedLead(input), false, 'a failed save reports false instead of throwing');
  assert.ok(events.every((e) => !['form_success', 'lead_converted', 'generate_lead'].includes(e.event)));
});

test('no lead form drops a filled trap field any more', () => {
  for (const file of ['LeadFormInline', 'ContactFormModal', 'ExitIntentLeadForm', 'HeroInlineForm']) {
    const src = readFileSync(new URL(`../src/components/${file}.tsx`, import.meta.url), 'utf8');
    assert.ok(/keepTrappedLead\(/.test(src), `${file} keeps a trapped lead`);
    assert.ok(!/honeypot\.trim\(\) !== ''\) \{ (setIsSuccess\(true\); )?return; \}/.test(src), `${file} no longer drops it`);
  }
});
