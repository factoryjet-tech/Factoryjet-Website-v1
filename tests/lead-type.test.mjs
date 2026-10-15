import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  onRequestPost, leadTypeOf, isVendorPitch, LEAD_TYPES,
  networkCountryCode, countryFromNetwork, NETWORK_COUNTRIES,
  signEnrichToken, buildEnrichFirestoreRequest,
} from '../functions/api/notify-lead.js';

// Every website lead carries one lead type (Buyer, Vendor pitch, Likely spam or
// Test) and, when Cloudflare knows it, the visitor's country. Both must reach
// Firestore, the ERPNext Lead and the alert email as the same value.
// Nothing here touches the network: fetch is stubbed throughout. Every name and
// message below is invented.

const DOC = '2026-10-12_10-00-00_lead_ab12cd';
const ERP = 'https://erp.test';
const ENV = { RESEND_API_KEY: 'r', LEAD_ENRICH_SECRET: 'lead-secret', ERPNEXT_API_KEY: 'k', ERPNEXT_API_SECRET: 's', ERPNEXT_URL: ERP };
const VISITOR_IP = '203.0.113.9';

// ── Fixtures ─────────────────────────────────────────────────────────────────
const SELLERS = {
  conference: 'We run the Northfield Retail Tech Expo in May. I would like to invite your company to exhibit, and I can send the sponsorship packages for your team.',
  sponsorContact: 'Our summit is in June. Kindly connect us with the right person or team responsible for sponsorships so I can share the stand prices.',
  contactList: 'Are you looking to reach Shopify store owners and Amazon sellers? Send me your target countries and I will reply with counts.',
  listPurchase: 'Would you be interested in acquiring our verified Shopify users email list? It holds 40,000 contacts.',
  paidLinks: 'We sell paid links on 300 finance blogs. Permanent, do-follow, one fee per link placement.',
  guestPost: 'I write guest posts for home improvement sites and can include a link to your services page.',
};
const BUYERS = {
  outsource: 'We want to outsource our Shopify development and need a quote for a 300 SKU store.',
  vetting: 'Do you outsource any of your development or is it all done in-house?',
  firstPage: 'I want my shop on the first page of Google for hunting apparel. Can you help?',
  whiteLabel: 'We are a small agency looking for a white-label Shopify partner for two client builds.',
  selfDescription: 'We offer design and installation of custom kitchens and need a new website.',
  eventOrganiser: 'We run a trade conference and need a site that sells sponsorship packages and exhibitor booths.',
  galleryStaff: 'The person responsible for exhibitions at our gallery asked me to find a web agency.',
  emailList: 'We have an email list of 20,000 subscribers. Need to import our customer list into the new store.',
  mailingList: 'Our customers are interested in buying gift cards and joining our mailing list.',
  ownTargets: 'Our target countries are the US and Canada. We are looking to reach more plumbers.',
  designPartner: 'We are looking for a design partner for our rebrand and a new website.',
  zipAfterDrive: 'We are at 4521 Lakeview Dr 75001 and need a booking site.',
  followUp: 'We do follow up with every customer by hand today and want an AI agent to do it.',
};

test('seller messages are tagged as vendor pitches', () => {
  for (const [key, message] of Object.entries(SELLERS)) {
    assert.equal(isVendorPitch({ email: 'sam@example.com', company: '', message }), true, key);
  }
  assert.equal(isVendorPitch({ email: 'raj.seoexpert@example.com' }), true, 'role word in the address');
  assert.equal(isVendorPitch({ email: 'hello@example.com', company: 'Rapid Link Builders' }), true, 'company name');
  assert.equal(isVendorPitch({ email: 'sam@example.com', message: 'Sponsored guest\npost on our site, DA 62.' }), true, 'a line break inside the phrase');
});

test('buyer messages that share words with sellers are never tagged', () => {
  for (const [key, message] of Object.entries(BUYERS)) {
    assert.equal(isVendorPitch({ email: 'dana@example.com', company: 'Lakeview Dental', message }), false, key);
  }
  // The address rule fires with no message at all (hero forms), so a name that
  // merely contains "seo" or a charity's outreach inbox must not trip it.
  for (const email of ['joseortiz@example.com', 'jiwoo.seo@example.com', 'seo.yeon@example.com', 'outreach@riversidefoodbank.example']) {
    assert.equal(isVendorPitch({ email, company: '', message: '' }), false, email);
  }
  assert.equal(isVendorPitch({}), false, 'empty input');
});

test('leadTypeOf precedence: Test, then Likely spam, then Vendor pitch, then Buyer', () => {
  const pitch = { email: 'sam@example.com', company: '', message: SELLERS.guestPost };
  const plain = { email: 'dana@example.com', company: 'Lakeview Dental', message: BUYERS.outsource };
  assert.deepEqual(LEAD_TYPES, ['Buyer', 'Vendor pitch', 'Likely spam', 'Test']);

  assert.equal(leadTypeOf({ name: 'FactoryJet Test Lead (ignore)', ...pitch, trapFilled: true, turnstileVerdict: 'failed' }), 'Test');
  assert.equal(leadTypeOf({ name: '  factoryjet test lead 2', ...plain }), 'Test', 'leading space and case are ignored');
  assert.equal(leadTypeOf({ name: 'Sam', ...pitch, trapFilled: true }), 'Likely spam', 'trap outranks a pitch');
  assert.equal(leadTypeOf({ name: 'Sam', ...pitch, turnstileVerdict: 'failed' }), 'Likely spam', 'failed bot check outranks a pitch');
  assert.equal(leadTypeOf({ name: 'Sam', ...pitch }), 'Vendor pitch');
  assert.equal(leadTypeOf({ name: 'Dana', ...plain }), 'Buyer');
  for (const turnstileVerdict of ['verified', 'absent', 'unchecked', undefined]) {
    assert.equal(leadTypeOf({ name: 'Dana', ...plain, turnstileVerdict }), 'Buyer', `verdict ${turnstileVerdict} is not spam`);
  }
  assert.equal(leadTypeOf({ name: 'Dana Test', ...plain }), 'Buyer', 'only the exact test-lead name prefix counts');
  assert.equal(leadTypeOf({}), 'Buyer');
});

test('network country: a two-letter code from Cloudflare, never XX or T1', () => {
  assert.equal(networkCountryCode({ cf: { country: 'US' } }), 'US');
  assert.equal(networkCountryCode({ cf: { country: 'gb' } }), 'GB');
  for (const country of ['XX', 'T1', '', 'USA', 'U', '12', null, undefined, 42]) {
    assert.equal(networkCountryCode({ cf: { country } }), '', `rejects ${country}`);
  }
  assert.equal(networkCountryCode({}), '');
  assert.equal(networkCountryCode({ cf: {} }), '');
  assert.equal(networkCountryCode(undefined), '');
});

// Country names as ERPNext stores them, read from the live Country list on
// erp.factoryjet.com on 2026-10-12. Lead.country is a Link, so a name outside
// that list makes the Lead insert fail. To add a country to NETWORK_COUNTRIES,
// check its exact spelling in ERPNext first, then add it here too.
const VERIFIED_IN_ERPNEXT = new Set([
  'Australia', 'Austria', 'Bahrain', 'Bangladesh', 'Belgium', 'Brazil', 'Canada', 'Denmark', 'Egypt', 'Finland',
  'France', 'Germany', 'Hong Kong', 'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Kenya', 'Kuwait',
  'Malaysia', 'Mexico', 'Nepal', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman', 'Pakistan',
  'Philippines', 'Poland', 'Portugal', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Africa', 'Spain', 'Sri Lanka',
  'Sweden', 'Switzerland', 'Thailand', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam',
]);

test('country map: explicit names only, blank for anything else', () => {
  assert.equal(countryFromNetwork('US'), 'United States');
  assert.equal(countryFromNetwork('GB'), 'United Kingdom');
  assert.equal(countryFromNetwork('IN'), 'India');
  assert.equal(countryFromNetwork('AU'), 'Australia');
  assert.equal(countryFromNetwork('AE'), 'United Arab Emirates');
  assert.equal(countryFromNetwork('CA'), 'Canada');
  assert.equal(countryFromNetwork('gb'), 'United Kingdom', 'case does not matter');
  // Real codes left out on purpose (ERPNext spells them "Korea, Republic of" and
  // "Russian Federation"), an unassigned code, and junk.
  for (const code of ['KR', 'RU', 'GL', 'ZZ', 'XX', 'T1', '', null, undefined, 'constructor', 'toString', '__proto__']) {
    assert.equal(countryFromNetwork(code), '', `blank for ${code}`);
  }
  for (const [code, name] of Object.entries(NETWORK_COUNTRIES)) {
    assert.match(code, /^[A-Z]{2}$/);
    assert.ok(VERIFIED_IN_ERPNEXT.has(name), `${code} maps to "${name}", which is not in the verified ERPNext list`);
  }
  assert.ok(Object.isFrozen(NETWORK_COUNTRIES));
});

// ── End to end, fetch stubbed ────────────────────────────────────────────────
function stubFetch(handler = () => null) {
  const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    const call = { url: String(url), method: opts.method || 'GET', body: typeof opts.body === 'string' ? JSON.parse(opts.body) : null };
    calls.push(call);
    const [status, json] = handler(call) || [200, {}];
    return new Response(JSON.stringify(json), { status, headers: { 'Content-Type': 'application/json' } });
  };
  return { calls, restore: () => { globalThis.fetch = original; } };
}

/** ERPNext as it behaves for a brand-new lead: no match, insert works, default country India. */
function freshErp(overrides = () => null) {
  return (c) => overrides(c)
    || (c.url.includes('/api/resource/Lead?') ? [200, { data: [] }] : null)
    || (c.method === 'POST' && c.url === `${ERP}/api/resource/Lead` ? [200, { data: { name: 'CRM-LEAD-1', country: c.body.country || 'India' } }] : null)
    || (c.url.endsWith('/api/resource/ToDo') ? [200, { data: { name: 'TODO-1' } }] : null);
}

async function submit(extra = {}, { country, handler = freshErp(), env = ENV } = {}) {
  const f = stubFetch(handler);
  const pending = [];
  try {
    const request = new Request('https://factoryjet.com/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com', 'CF-Connecting-IP': VISITOR_IP },
      body: JSON.stringify({ docId: DOC, name: 'Dana Whitfield', email: 'dana@example.com', source: 'contact_page', collection: 'contactpage', page: '/contact', region: 'us', ...extra }),
    });
    if (country !== undefined) Object.defineProperty(request, 'cf', { value: { country } });
    const res = await onRequestPost({ env, request, waitUntil: (p) => pending.push(p) });
    await Promise.all(pending);
    const find = (fn) => f.calls.find(fn);
    return {
      res, out: await res.json(), calls: f.calls,
      saved: find((c) => c.url.includes('firestore.googleapis.com')),
      leadPosts: f.calls.filter((c) => c.method === 'POST' && c.url === `${ERP}/api/resource/Lead`),
      leadPuts: f.calls.filter((c) => c.method === 'PUT' && c.url.startsWith(`${ERP}/api/resource/Lead/`)),
      todo: find((c) => c.url.endsWith('/api/resource/ToDo')),
      comment: find((c) => c.url.endsWith('/api/resource/Comment')),
      mail: find((c) => c.url.includes('api.resend.com')),
    };
  } finally { f.restore(); }
}

test('a buyer with no phone: type and network country reach Firestore, ERPNext and the email', async () => {
  const { out, calls, saved, leadPosts, leadPuts, todo, mail } = await submit({ message: BUYERS.outsource }, { country: 'US' });
  assert.equal(out.ok, true);
  assert.equal('leadType' in out, false, 'the label is never sent back to the browser');

  assert.equal(saved.body.fields.leadType.stringValue, 'Buyer');
  assert.equal(saved.body.fields.ipCountry.stringValue, 'US');

  assert.equal(leadPosts.length, 1);
  const lead = leadPosts[0].body;
  assert.equal(lead.custom_lead_type, 'Buyer');
  assert.equal(lead.country, 'United States');
  assert.equal(lead.status, 'Open', 'status is the same for every type');
  assert.equal(lead.custom_sequence_status, 'Not Contacted');
  const note = lead.notes[0].note;
  assert.equal(note.split('\n')[0], 'Lead type: Buyer', 'first line of the note');
  assert.ok(note.split('\n').includes('Visitor country (from network): US'));
  assert.equal(leadPuts.length, 0, 'country was sent, so there is no India default to clear');
  assert.match(todo.body.description, /Lead type: Buyer · Service: /);
  assert.match(mail.body.subject, /^🔥 New lead: Dana Whitfield/);

  assert.ok(!JSON.stringify(calls.map((c) => c.body)).includes(VISITOR_IP), 'the IP address is never stored or forwarded');
});

test('the phone prefix beats the network country, and the note still shows the network', async () => {
  const { saved, leadPosts } = await submit({ phone: '+44 7700 900123' }, { country: 'IN' });
  assert.equal(leadPosts[0].body.country, 'United Kingdom');
  assert.ok(leadPosts[0].body.notes[0].note.includes('\nVisitor country (from network): IN\n'));
  assert.equal(saved.body.fields.ipCountry.stringValue, 'IN');
});

test('an unknown or unmapped network country leaves country blank and never blocks the lead', async () => {
  const cases = [
    { country: 'XX', code: '', line: 'unknown' },
    { country: 'T1', code: '', line: 'unknown' },
    { country: undefined, code: '', line: 'unknown' },
    { country: 'GL', code: 'GL', line: 'GL' },
  ];
  for (const { country, code, line } of cases) {
    const { out, saved, leadPosts, leadPuts } = await submit({}, { country });
    assert.equal(out.erpLeadId, 'CRM-LEAD-1', `saved for ${country}`);
    assert.equal(saved.body.fields.ipCountry.stringValue, code);
    assert.equal('country' in leadPosts[0].body, false, `no country key for ${country}`);
    assert.ok(leadPosts[0].body.notes[0].note.includes(`\nVisitor country (from network): ${line}\n`));
    assert.deepEqual(leadPuts.map((c) => c.body), [{ country: '' }], 'the India default is cleared');
  }
});

test('a vendor pitch carries the same label in Firestore, the CRM, the task and the subject', async () => {
  const { saved, leadPosts, todo, mail } = await submit({ name: 'Sam Okoro', email: 'sam@example.com', message: SELLERS.contactList }, { country: 'IN' });
  assert.equal(saved.body.fields.leadType.stringValue, 'Vendor pitch');
  assert.equal(leadPosts[0].body.custom_lead_type, 'Vendor pitch');
  assert.equal(leadPosts[0].body.notes[0].note.split('\n')[0], 'Lead type: Vendor pitch');
  assert.equal(leadPosts[0].body.status, 'Open', 'a label, not a block');
  assert.match(todo.body.description, /Lead type: Vendor pitch · /);
  assert.match(mail.body.subject, /^🧾 Vendor pitch — New lead: Sam Okoro/);
});

test('trap or failed bot check wins over a pitch; the test-lead name wins over both', async () => {
  const pitch = { name: 'Sam Okoro', email: 'sam@example.com', message: SELLERS.paidLinks };

  const trapped = await submit({ ...pitch, honeypot: 'Acme Inc.' });
  assert.equal(trapped.saved.body.fields.leadType.stringValue, 'Likely spam');
  assert.equal(trapped.leadPosts[0].body.custom_lead_type, 'Likely spam');
  assert.equal(trapped.leadPosts[0].body.notes[0].note.split('\n')[0], 'Lead type: Likely spam');
  assert.match(trapped.mail.body.subject, /^⚠️ LIKELY SPAM — New lead: Sam Okoro/);

  const failedCheck = freshErp((c) => (c.url.includes('challenges.cloudflare.com') ? [200, { success: false }] : null));
  const bot = await submit({ ...pitch, turnstileToken: 'tok' }, { handler: failedCheck, env: { ...ENV, TURNSTILE_SECRET_KEY: 't' } });
  assert.equal(bot.saved.body.fields.turnstileVerdict.stringValue, 'failed');
  assert.equal(bot.saved.body.fields.leadType.stringValue, 'Likely spam');
  assert.equal(bot.leadPosts[0].body.custom_lead_type, 'Likely spam');
  assert.match(bot.mail.body.subject, /^⚠️ LIKELY SPAM — /);

  const ours = await submit({ ...pitch, name: 'FactoryJet Test Lead (ignore)', honeypot: 'x' });
  assert.equal(ours.saved.body.fields.leadType.stringValue, 'Test');
  assert.equal(ours.saved.body.fields.honeypot.stringValue, 'filled', 'the trap is still recorded');
  assert.equal(ours.leadPosts[0].body.custom_lead_type, 'Test');
  assert.match(ours.mail.body.subject, /^🧪 TEST · New lead: FactoryJet Test Lead/);
});

test('a returning lead gets the label and the country line in the comment, and its field is left alone', async () => {
  const handler = (c) => (c.url.includes('email_id') ? [200, { data: [{ name: 'CRM-LEAD-OLD' }] }] : null)
    || (c.url.includes('/api/resource/Lead?') ? [200, { data: [] }] : null)
    || (c.url.endsWith('/api/resource/ToDo') ? [200, { data: { name: 'TODO-2' } }] : null);
  const { out, leadPosts, leadPuts, comment, todo } = await submit({ name: 'Sam Okoro', email: 'sam@example.com', message: SELLERS.guestPost }, { country: 'GB', handler });
  assert.equal(out.erpLeadId, 'CRM-LEAD-OLD');
  assert.equal(leadPosts.length, 0, 'no second Lead');
  assert.equal(leadPuts.length, 0, 'the older Lead keeps its own lead type and country');
  assert.equal(comment.body.reference_name, 'CRM-LEAD-OLD');
  assert.match(comment.body.content, /<p>Lead type: Vendor pitch<br>Service: /);
  assert.match(comment.body.content, /Visitor country \(from network\): GB<br>/);
  assert.match(todo.body.description, /^Returning lead, new inquiry\. Follow up with Sam Okoro/);
  assert.match(todo.body.description, /Lead type: Vendor pitch · /);
});

test('ERPNext refusing the labels (4xx) never loses the Lead: one retry without them', async () => {
  let posts = 0;
  const refuseOnce = freshErp((c) => {
    if (c.method === 'POST' && c.url === `${ERP}/api/resource/Lead`) {
      posts++;
      if (posts === 1) return [417, { exc_type: 'LinkValidationError' }];
    }
    return null;
  });
  const { out, leadPosts, leadPuts, todo } = await submit({ message: BUYERS.firstPage }, { country: 'US', handler: refuseOnce });
  assert.equal(leadPosts.length, 2);
  assert.equal(leadPosts[0].body.country, 'United States');
  assert.equal(leadPosts[0].body.custom_lead_type, 'Buyer');
  assert.equal('country' in leadPosts[1].body, false);
  assert.equal('custom_lead_type' in leadPosts[1].body, false);
  const { custom_lead_type: _type, country: _country, ...firstWithoutLabels } = leadPosts[0].body;
  assert.deepEqual(leadPosts[1].body, firstWithoutLabels, 'everything else is sent again unchanged');
  assert.equal(leadPosts[1].body.notes[0].note.split('\n')[0], 'Lead type: Buyer', 'the note still carries both');
  assert.equal(out.erpLeadId, 'CRM-LEAD-1');
  assert.deepEqual(leadPuts.map((c) => c.body), [{ country: '' }], 'no country was saved, so the India default is cleared');
  assert.ok(todo, 'the follow-up task is still created');
});

test('a 5xx from ERPNext is not retried (the Lead may have been saved)', async () => {
  const down = freshErp((c) => (c.method === 'POST' && c.url === `${ERP}/api/resource/Lead` ? [502, {}] : null));
  const { res, out, leadPosts, saved, mail } = await submit({}, { country: 'US', handler: down });
  assert.equal(leadPosts.length, 1);
  assert.equal(out.erpLeadId, null);
  assert.equal(res.status, 200, 'Firestore and the email still captured the lead');
  assert.equal(saved.body.fields.leadType.stringValue, 'Buyer');
  assert.ok(mail);
});

// ── Step 2 (details added in the modal) ──────────────────────────────────────
async function enrich(fields, currentType) {
  const handler = (c) => {
    if (c.url.includes('/api/resource/Lead?')) return [200, { data: [{ name: 'CRM-LEAD-7' }] }];
    if (c.method === 'GET' && c.url === `${ERP}/api/resource/Lead/CRM-LEAD-7`) return [200, { data: currentType === undefined ? { name: 'CRM-LEAD-7' } : { name: 'CRM-LEAD-7', custom_lead_type: currentType } }];
    return [200, { data: {} }];
  };
  const f = stubFetch(handler);
  const pending = [];
  try {
    const enrichToken = await signEnrichToken(ENV.LEAD_ENRICH_SECRET, DOC);
    const res = await onRequestPost({
      env: ENV,
      waitUntil: (p) => pending.push(p),
      request: new Request('https://factoryjet.com/api/notify-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://factoryjet.com' },
        body: JSON.stringify({ mode: 'enrich', docId: DOC, enrichToken, name: 'Sam Okoro', email: 'sam@example.com', source: 'us_hero_inline', ...fields }),
      }),
    });
    await Promise.all(pending);
    return {
      res, calls: f.calls,
      details: f.calls.find((c) => c.url.includes('firestore.googleapis.com')),
      comment: f.calls.find((c) => c.url.endsWith('/api/resource/Comment')),
      reads: f.calls.filter((c) => c.method === 'GET' && c.url === `${ERP}/api/resource/Lead/CRM-LEAD-7`),
      puts: f.calls.filter((c) => c.method === 'PUT'),
    };
  } finally { f.restore(); }
}

test('a pitch typed at step 2 turns a Buyer into a Vendor pitch', async () => {
  for (const current of ['Buyer', '', undefined]) {
    const { res, details, comment, puts, calls } = await enrich({ company: 'Okoro Media', message: SELLERS.guestPost }, current);
    assert.equal(res.status, 200);
    assert.equal(details.body.fields.leadType.stringValue, 'Vendor pitch');
    assert.match(comment.body.content, /^<p>Details added on the website<br>Lead type: Vendor pitch<br>Company: Okoro Media/);
    assert.deepEqual(puts.map((c) => c.body), [{ company_name: 'Okoro Media' }, { custom_lead_type: 'Vendor pitch' }], `current "${current}"`);
    assert.ok(calls.indexOf(comment) < calls.indexOf(puts[0]), 'the comment is written first');
  }
});

test('step 2 never overwrites a Likely spam or Test label, and buyer details add nothing', async () => {
  for (const current of ['Likely spam', 'Test', 'Vendor pitch']) {
    const { puts, comment } = await enrich({ message: SELLERS.guestPost }, current);
    assert.deepEqual(puts, [], `"${current}" is left alone`);
    assert.match(comment.body.content, /Lead type: Vendor pitch/);
  }
  const plain = await enrich({ phone: '+1 555 0100', message: BUYERS.outsource }, 'Likely spam');
  assert.equal('leadType' in plain.details.body.fields, false);
  assert.doesNotMatch(plain.comment.body.content, /Lead type/);
  assert.equal(plain.reads.length, 0, 'no extra ERPNext read for a buyer');
  assert.deepEqual(plain.puts.map((c) => c.body), [{ mobile_no: '+1 555 0100' }]);
});

test('the details doc carries a lead type only when the details raise a flag', () => {
  const at = '2026-10-12T10:00:00.000Z';
  const keys = (leadType) => Object.keys(buildEnrichFirestoreRequest({}, DOC, { message: 'hello' }, 'us_hero_inline', at, leadType).body.fields).sort();
  assert.deepEqual(keys(undefined), ['enrichSource', 'enrichedAt', 'leadDocId', 'message']);
  assert.deepEqual(keys('Buyer'), ['enrichSource', 'enrichedAt', 'leadDocId', 'message']);
  assert.deepEqual(keys('Vendor pitch'), ['enrichSource', 'enrichedAt', 'leadDocId', 'leadType', 'message']);
});
