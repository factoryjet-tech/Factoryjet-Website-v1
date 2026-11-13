import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import {
  onRequestPost, leadTypeOf, cleanQualifierFields, websiteHref, vendorNotifyTo,
  VENDOR_NOTIFY_TO_DEFAULT, LEAD_INTENTS, cleanEnrichInput, buildHtml,
} from '../functions/api/notify-lead.js';

// "What brings you here?" and the company website (founder decision, 13 Nov 2026).
// A self-declared vendor is saved, labelled "Vendor pitch", emailed to the vendor
// inbox, gets no High-priority ERPNext ToDo and counts no conversion. A form that
// sends neither answer behaves exactly as before. Nothing here touches the
// network: fetch is stubbed throughout. Every name below is invented.

const DOC = '2026-11-13_10-00-00_lead_ab12cd';
const ERP = 'https://erp.test';
const ENV = { RESEND_API_KEY: 'r', LEAD_ENRICH_SECRET: 'lead-secret', ERPNEXT_API_KEY: 'k', ERPNEXT_API_SECRET: 's', ERPNEXT_URL: ERP };

function stubFetch() {
  const calls = [];
  const original = globalThis.fetch;
  const json = (obj) => new Response(JSON.stringify(obj), { status: 200, headers: { 'Content-Type': 'application/json' } });
  globalThis.fetch = async (url, opts = {}) => {
    const u = String(url);
    const method = opts.method || 'GET';
    calls.push({ url: u, method, body: typeof opts.body === 'string' ? JSON.parse(opts.body) : null });
    if (u.startsWith(`${ERP}/api/resource/Lead`) && method === 'GET') return json({ data: [] });
    if (u === `${ERP}/api/resource/Lead` && method === 'POST') return json({ data: { name: 'CRM-LEAD-0001' } });
    if (u === `${ERP}/api/resource/ToDo`) return json({ data: { name: 'TODO-1' } });
    return json({});
  };
  return { calls, restore: () => { globalThis.fetch = original; } };
}

async function create(extra, env = ENV) {
  const f = stubFetch();
  const pending = [];
  try {
    const res = await onRequestPost({
      env,
      waitUntil: (p) => pending.push(p),
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com' },
        body: JSON.stringify({ docId: DOC, name: 'Dana Reyes', email: 'dana@lakeview.example', source: 'us_hero_inline', ...extra }),
      }),
    });
    await Promise.all(pending);
    return {
      out: await res.json(),
      saved: f.calls.find((c) => c.url.includes('firestore.googleapis.com')),
      mail: f.calls.find((c) => c.url.includes('api.resend.com')),
      lead: f.calls.find((c) => c.url === `${ERP}/api/resource/Lead` && c.method === 'POST'),
      todo: f.calls.find((c) => c.url === `${ERP}/api/resource/ToDo`),
    };
  } finally { f.restore(); }
}

// ── Server ───────────────────────────────────────────────────────────────────
test('a self-declared vendor is saved, labelled, sent to the vendor inbox and gets no follow-up task', async () => {
  const { out, saved, mail, lead, todo } = await create({ intent: 'vendor', website: 'quickseo.example' });
  assert.equal(out.ok, true);
  assert.equal(saved.body.fields.leadType.stringValue, 'Vendor pitch');
  assert.equal(saved.body.fields.intent.stringValue, 'vendor');
  assert.equal(saved.body.fields.website.stringValue, 'quickseo.example');
  assert.equal(saved.body.fields.websiteValid.stringValue, 'yes');
  assert.deepEqual(mail.body.to, [VENDOR_NOTIFY_TO_DEFAULT]);
  assert.equal(VENDOR_NOTIFY_TO_DEFAULT, 'bhavesh.b@factoryjet.com');
  assert.match(mail.body.subject, /^🧾 Vendor pitch — New lead: Dana Reyes/);
  assert.match(mail.body.html, /I offer a product or service/);
  assert.equal(lead.body.custom_lead_type, 'Vendor pitch');
  assert.match(lead.body.notes[0].note, /What brings you here: I offer a product or service/);
  assert.equal(todo, undefined, 'no High-priority ToDo for a vendor');
});

test('VENDOR_NOTIFY_TO overrides the vendor inbox; a malformed value falls back', async () => {
  const { mail } = await create({ intent: 'vendor', website: 'quickseo.example' }, { ...ENV, VENDOR_NOTIFY_TO: 'vendors@factoryjet.example' });
  assert.deepEqual(mail.body.to, ['vendors@factoryjet.example']);
  assert.equal(vendorNotifyTo({ VENDOR_NOTIFY_TO: 'a@b.co?cc=x@y.z' }), VENDOR_NOTIFY_TO_DEFAULT);
  assert.equal(vendorNotifyTo({}), VENDOR_NOTIFY_TO_DEFAULT);
});

test('a buyer goes to the sales inbox with the ToDo, and the website reaches every record', async () => {
  const { saved, mail, lead, todo } = await create({ intent: 'hire', website: 'https://lakeview.example/shop' });
  assert.equal(saved.body.fields.leadType.stringValue, 'Buyer');
  assert.equal(saved.body.fields.intent.stringValue, 'hire');
  assert.deepEqual(mail.body.to, ['bhavesh@factoryjet.com']);
  assert.match(mail.body.subject, /^🔥 New lead: Dana Reyes/);
  assert.match(mail.body.html, /href="https:\/\/lakeview\.example\/shop"/);
  assert.match(lead.body.notes[0].note, /Company website: https:\/\/lakeview\.example\/shop/);
  assert.ok(todo, 'buyer keeps the High-priority ToDo');
});

test('"No website yet" is stored as a flag, not as a website', async () => {
  const { saved, mail } = await create({ intent: 'hire', website: 'ignored.example', noWebsite: true });
  assert.equal(saved.body.fields.noWebsite.stringValue, 'yes');
  assert.equal(saved.body.fields.website, undefined);
  assert.match(mail.body.html, /No website yet/);
});

test('a form that sends no new answer is stored and routed exactly as before', async () => {
  const { saved, mail, todo } = await create({});
  for (const k of ['intent', 'website', 'websiteValid', 'noWebsite']) assert.equal(saved.body.fields[k], undefined, k);
  assert.equal(saved.body.fields.leadType.stringValue, 'Buyer');
  assert.deepEqual(mail.body.to, ['bhavesh@factoryjet.com']);
  assert.doesNotMatch(mail.body.html, /Here to|>Website</);
  assert.ok(todo);
});

test('leadTypeOf: Test and Likely spam outrank a declared vendor; vendor outranks Buyer', () => {
  assert.equal(leadTypeOf({ name: 'FactoryJet Test Lead', intent: 'vendor' }), 'Test');
  assert.equal(leadTypeOf({ name: 'Sam', trapFilled: true, intent: 'vendor' }), 'Likely spam');
  assert.equal(leadTypeOf({ name: 'Sam', email: 'sam@example.com', intent: 'vendor' }), 'Vendor pitch');
  assert.equal(leadTypeOf({ name: 'Sam', email: 'sam@example.com', intent: 'hire' }), 'Buyer');
});

test('qualifier input is cleaned: unknown intents dropped, markup stripped, never a script link', () => {
  assert.deepEqual(LEAD_INTENTS, ['hire', 'vendor']);
  assert.equal(cleanQualifierFields({ intent: 'admin' }).intent, '');
  assert.equal(cleanQualifierFields({ website: ' <b>acme.com</b> ' }).website, 'bacme.com/b');
  assert.equal(cleanQualifierFields({ website: 'x'.repeat(500) }).website.length, 200);
  assert.equal(websiteHref('javascript:alert(1)'), '');
  assert.equal(websiteHref('none'), '');
  assert.equal(websiteHref('acme.co.uk'), 'https://acme.co.uk/');
  const html = buildHtml({ name: 'A', email: 'a@b.co', website: 'javascript:alert(1)', intent: 'hire' });
  assert.doesNotMatch(html, /href="javascript/);
});

test('step 2 keeps only a listed "How did you find us?" answer', () => {
  assert.equal(cleanEnrichInput({ foundVia: 'ChatGPT or another AI assistant' }).foundVia, 'ChatGPT or another AI assistant');
  assert.equal(cleanEnrichInput({ foundVia: '<script>' }).foundVia, '');
});

// ── Browser ──────────────────────────────────────────────────────────────────
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

function loadSubmitLead(payloads) {
  return load('../src/utils/submitLead.ts', {
    '@/utils/leadAttribution': { readLeadAttribution: () => ({}) },
    '@/utils/leadService': { resolveServiceCategory: () => 'Other', serviceFromValue: () => '' },
    '@/utils/leadConversion': { rememberLeadContext: () => {} },
    'firebase/firestore': { setDoc: async () => {}, doc: () => ({}) },
    '@/firebase': { db: null },
  }, {
    AbortController, setTimeout, clearTimeout,
    fetch: async (_url, init) => { payloads.push(JSON.parse(init.body)); return { ok: true, json: async () => ({ ok: true }) }; },
  });
}

test('submitLead sends intent and website only when the form gives them', async () => {
  const payloads = [];
  const { submitLead, isWebsiteLike } = loadSubmitLead(payloads);
  await submitLead({ name: 'Jane', email: 'jane@acme.example', source: 'test', page: '/', intent: 'vendor', website: ' acme.example ' });
  await submitLead({ name: 'Jane', email: 'jane@acme.example', source: 'test', page: '/', intent: 'hire', website: 'x.example', noWebsite: true });
  await submitLead({ name: 'Jane', email: 'jane@acme.example', source: 'test', page: '/' });
  assert.equal(payloads[0].intent, 'vendor');
  assert.equal(payloads[0].website, 'acme.example');
  assert.equal(payloads[1].noWebsite, true);
  assert.equal('website' in payloads[1], false);
  for (const k of ['intent', 'website', 'noWebsite']) assert.equal(k in payloads[2], false, `${k} absent for older forms`);
  for (const ok of ['acme.com', 'www.acme.co.uk', 'https://acme.com/shop']) assert.equal(isWebsiteLike(ok), true, ok);
  for (const bad of ['', 'none', 'acme', 'my site.com', 'a@b.com']) assert.equal(isWebsiteLike(bad), false, bad);
});

test('keepVendorLead saves the lead, records form_vendor_submit and never a conversion', async () => {
  const events = [], sent = [];
  let fail = false;
  const { keepVendorLead, VENDOR_CONFIRMATION } = load('../src/utils/trappedLead.ts', {
    '@/utils/submitLead': { submitLead: async (input) => { sent.push(input); if (fail) throw new Error('Lead capture was not confirmed'); return { ok: true, docId: 'd' }; } },
    '@/utils/gtm': { pushToDataLayer: (e) => events.push(e) },
  });
  const input = { name: 'Sam', email: 'sam@quickseo.example', source: 'us_hero_inline', intent: 'vendor', website: 'quickseo.example' };
  assert.equal(await keepVendorLead(input), true);
  assert.equal(sent[0].intent, 'vendor');
  assert.deepEqual(events.map((e) => [e.event, e.form_name]), [['form_vendor_submit', 'us_hero_inline']]);
  fail = true;
  assert.equal(await keepVendorLead(input), false, 'a failed save reports false instead of throwing');
  assert.ok(events.every((e) => !['form_success', 'form_submit', 'lead_converted', 'generate_lead'].includes(e.event)));
  assert.doesNotMatch(VENDOR_CONFIRMATION, /—|–/, 'no dashes as asides in user-facing text');
});

test('each qualifying form sends vendors through keepVendorLead, before any conversion call', () => {
  for (const file of ['HeroInlineForm', 'ContactFormModal', 'LeadFormInline']) {
    const src = readFileSync(new URL(`../src/components/${file}.tsx`, import.meta.url), 'utf8');
    assert.ok(/LEAD_INTENT_OPTIONS/.test(src), `${file} asks what brings the visitor here`);
    assert.ok(/isWebsiteLike\(/.test(src), `${file} requires a website`);
    // The vendor branch returns before trackFormSubmit, trackFormSuccess,
    // enrichment.start, markLeadSubmitted and /thank-you.
    const branch = src.slice(src.indexOf("intent === 'vendor'"));
    const vendorBlock = branch.slice(0, branch.indexOf('return;') + 7);
    assert.ok(/keepVendorLead\(/.test(vendorBlock), `${file} vendor branch keeps the lead`);
    for (const call of ['trackFormSubmit(', 'trackFormSuccess(', 'enrichment.start(', 'markLeadSubmitted(', '/thank-you']) {
      assert.ok(!vendorBlock.includes(call), `${file} vendor branch must not call ${call}`);
    }
    assert.ok(src.indexOf("intent === 'vendor'") < src.indexOf('trackFormSuccess('), `${file} vendor branch comes first`);
  }
});
