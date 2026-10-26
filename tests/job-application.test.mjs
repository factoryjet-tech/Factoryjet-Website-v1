import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateApplication, sniffCvType, countWords, normalizeUrl, sourceToErp, buildApplicantDoc,
  erpDatetime, erpDatePlusDays, receiptEmail, applicationLines, linesToHtml, ROLES, MAX_CV_BYTES,
} from '../functions/api/job-application.js';

const PDF = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31]);
const ZIP = new Uint8Array([0x50, 0x4b, 0x03, 0x04, 0x14, 0x00]);
const NOTE = Array.from({ length: 150 }, (_, i) => `word${i}`).join(' ');

function goodFields(over = {}) {
  return {
    role: 'ai-search-growth-specialist',
    name: 'Asha Rao',
    email: 'Asha@Example.com',
    phone: '+91 98450 12345',
    linkedin: 'linkedin.com/in/asha',
    work_link: 'https://example.com/store',
    work_note: 'Rewrote 40 product titles and fixed the schema.',
    ai_link: 'github.com/asha/fix',
    ai_note: 'Claude Code wrote the script; I checked every page live.',
    ai_search_note: NOTE,
    onsite_ok: 'yes',
    salary_ok: 'no',
    notice_period: '30 days',
    current_city: 'Bangalore',
    source: 'LinkedIn',
    consent: 'yes',
    ...over,
  };
}
const goodCv = { bytes: PDF, name: 'cv.pdf', size: 120000 };

test('a complete application passes and is normalised', () => {
  const r = validateApplication(goodFields(), goodCv);
  assert.equal(r.ok, true);
  assert.equal(r.value.email, 'asha@example.com');
  assert.equal(r.value.linkedin, 'https://linkedin.com/in/asha');
  assert.equal(r.value.aiLink, 'https://github.com/asha/fix');
  assert.equal(r.value.onsiteOk, true);
  assert.equal(r.value.salaryOk, false);
  assert.equal(r.value.source, 'LinkedIn');
  assert.equal(r.value.cvType, 'pdf');
});

test('a "No" on a knockout is saved, not rejected', () => {
  const r = validateApplication(goodFields({ onsite_ok: 'no', salary_ok: 'no', notice_period: '90 days' }), goodCv);
  assert.equal(r.ok, true);
});

test('missing required fields are reported per field', () => {
  const r = validateApplication({ role: 'ai-search-growth-specialist' }, null);
  assert.equal(r.ok, false);
  for (const k of ['name', 'email', 'phone', 'work_link', 'work_note', 'ai_link', 'ai_note', 'ai_search_note',
    'onsite_ok', 'salary_ok', 'notice_period', 'current_city', 'consent', 'cv']) {
    assert.ok(r.errors[k], `expected an error for ${k}`);
  }
  assert.equal(r.errors.linkedin, undefined, 'LinkedIn is optional');
});

test('unknown role is refused', () => {
  const r = validateApplication(goodFields({ role: 'ceo' }), goodCv);
  assert.equal(r.ok, false);
  assert.ok(r.errors.role);
});

test('the note has a word ceiling of 180', () => {
  const long = Array.from({ length: 181 }, () => 'w').join(' ');
  const r = validateApplication(goodFields({ ai_search_note: long }), goodCv);
  assert.match(r.errors.ai_search_note, /181/);
  assert.equal(countWords('  one  two\nthree '), 3);
  assert.equal(countWords(''), 0);
});

test('short answers over 300 characters are refused', () => {
  const r = validateApplication(goodFields({ work_note: 'x'.repeat(301) }), goodCv);
  assert.ok(r.errors.work_note);
});

test('CV type is read from the bytes, not the name', () => {
  assert.equal(sniffCvType(PDF, 'cv.exe'), 'pdf');
  assert.equal(sniffCvType(ZIP, 'cv.docx'), 'docx');
  assert.equal(sniffCvType(ZIP, 'cv.zip'), null);
  assert.equal(sniffCvType(new Uint8Array([0x4d, 0x5a, 0, 0]), 'cv.pdf'), null);
  const r = validateApplication(goodFields(), { bytes: new Uint8Array([1, 2, 3, 4]), name: 'cv.pdf', size: 10 });
  assert.ok(r.errors.cv);
});

test('a CV over 5 MB is refused', () => {
  const r = validateApplication(goodFields(), { bytes: PDF, name: 'cv.pdf', size: MAX_CV_BYTES + 1 });
  assert.match(r.errors.cv, /5 MB/);
});

test('links: bare domains get https, other schemes are rejected', () => {
  assert.equal(normalizeUrl('example.com/a'), 'https://example.com/a');
  assert.equal(normalizeUrl('javascript:alert(1)'), '');
  assert.equal(normalizeUrl('localhost'), '');
  const r = validateApplication(goodFields({ linkedin: 'not a link' }), goodCv);
  assert.ok(r.errors.linkedin);
});

test('sources map to ERPNext Job Applicant Source names', () => {
  assert.equal(sourceToErp('linkedin'), 'LinkedIn');
  assert.equal(sourceToErp('NAUKRI'), 'Naukri');
  assert.equal(sourceToErp('website'), 'Website Listing');
  assert.equal(sourceToErp('twitter'), 'Other');
  assert.equal(sourceToErp(''), 'Other');
});

test('the ERPNext document uses the Phase 1 field names and the job opening id', () => {
  const v = validateApplication(goodFields(), goodCv).value;
  const now = new Date('2026-10-15T08:45:00Z'); // 14:15 IST
  const doc = buildApplicantDoc(v, { turnstileVerdict: 'verified', retentionDays: 180, now });
  assert.equal(doc.job_title, ROLES['ai-search-growth-specialist'].jobOpening);
  assert.equal(doc.job_title, 'HR-OPN-2026-0001');
  assert.equal(doc.custom_stage, 'Unscored');
  assert.equal(doc.status, 'Open');
  assert.equal(doc.custom_onsite_ok, 1);
  assert.equal(doc.custom_salary_ok, 0);
  assert.equal(doc.custom_consent_at, '2026-10-15 14:15:00');
  assert.equal(doc.custom_retention_until, '2027-04-13');
  assert.equal(doc.custom_turnstile_verdict, 'verified');
  for (const k of Object.keys(doc)) {
    assert.ok(!k.startsWith('custom_') || /^custom_[a-z_]+$/.test(k), k);
  }
});

test('IST date helpers cross midnight correctly', () => {
  assert.equal(erpDatetime(new Date('2026-10-15T19:00:00Z')), '2026-10-16 00:30:00');
  assert.equal(erpDatePlusDays(0, new Date('2026-10-15T19:00:00Z')), '2026-10-16');
});

test('emails escape applicant text', () => {
  const v = validateApplication(goodFields({ name: '<script>x</script> Rao' }), goodCv).value;
  const r = receiptEmail(v);
  assert.ok(!r.html.includes('<script>'));
  const html = linesToHtml(applicationLines(v, 'verified'));
  assert.ok(!html.includes('<script>'));
  assert.ok(!/—/.test(r.html), 'no em dash in candidate email');
});

// ── Full request flow with ERPNext and Resend mocked ───────────────────────────
import { onRequestPost } from '../functions/api/job-application.js';

function requestWith(over = {}, cvBytes = PDF, extra = {}) {
  const fd = new FormData();
  for (const [k, v] of Object.entries(goodFields(over))) fd.append(k, v);
  fd.append('cv', new Blob([cvBytes], { type: 'application/pdf' }), 'cv.pdf');
  for (const [k, v] of Object.entries(extra)) fd.append(k, v);
  return new Request('https://factoryjet.com/api/job-application', {
    method: 'POST', body: fd, headers: { Origin: 'https://factoryjet.com' },
  });
}

async function run(handler, { erp, request = requestWith(), env = {}, siteverify = { success: true, hostname: 'factoryjet.com' } }) {
  const calls = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    const u = String(url);
    calls.push({ url: u, method: opts.method || 'GET', body: opts.body });
    if (u.startsWith('https://api.resend.com')) return new Response('{}', { status: 200 });
    if (u.startsWith('https://challenges.cloudflare.com')) return new Response(JSON.stringify(siteverify));
    return erp(u, opts);
  };
  const pending = [];
  try {
    const res = await handler({
      request,
      env: { CAREERS_ERP_API_KEY: 'k', CAREERS_ERP_API_SECRET: 's', RESEND_API_KEY: 'r', TURNSTILE_SECRET_KEY: 't', ...env },
      waitUntil: (p) => pending.push(p),
    });
    await Promise.all(pending);
    return { res, calls };
  } finally {
    globalThis.fetch = realFetch;
  }
}

test('new applicant: lookup 404, create, private CV upload, receipt sent', async () => {
  const { res, calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    erp: (u, o) => {
      if (u.includes('/api/resource/Job%20Applicant/') && (o.method || 'GET') === 'GET') return new Response('{}', { status: 404 });
      if (u.endsWith('/api/resource/Job%20Applicant')) return new Response(JSON.stringify({ data: { name: 'asha@example.com' } }));
      if (u.endsWith('/api/method/upload_file')) return new Response(JSON.stringify({ message: { file_url: '/private/files/CV-Asha-Rao.pdf' } }));
      if (o.method === 'PUT') return new Response('{}');
      return new Response('{}', { status: 500 });
    },
  });
  assert.equal(res.status, 200);
  const create = calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant'));
  const doc = JSON.parse(create.body);
  assert.equal(doc.email_id, 'asha@example.com');
  assert.equal(doc.custom_turnstile_verdict, 'verified');
  const upload = calls.find((c) => c.url.endsWith('/upload_file'));
  assert.equal(upload.body.get('is_private'), '1');
  assert.equal(upload.body.get('docname'), 'asha@example.com');
  const emails = calls.filter((c) => c.url.startsWith('https://api.resend.com')).map((c) => JSON.parse(c.body));
  assert.equal(emails.length, 1, 'only the receipt, no fallback');
  assert.deepEqual(emails[0].to, ['asha@example.com']);
});

test('returning applicant: comment on the existing record, no second create', async () => {
  const { res, calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    erp: (u, o) => {
      if (u.includes('/api/resource/Job%20Applicant/') && (o.method || 'GET') === 'GET') return new Response('{"data":{}}', { status: 200 });
      if (u.endsWith('/api/resource/Comment')) return new Response('{}');
      if (u.endsWith('/upload_file')) return new Response('{"message":{}}');
      return new Response('{}', { status: 500 });
    },
  });
  assert.equal(res.status, 200);
  assert.ok(!calls.some((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST'));
  const comment = JSON.parse(calls.find((c) => c.url.endsWith('/Comment')).body);
  assert.equal(comment.reference_name, 'asha@example.com');
  const upload = calls.find((c) => c.url.endsWith('/upload_file'));
  assert.equal(upload.body.get('fieldname'), null, 'second CV does not replace the first');
});

test('ERPNext down: candidate still gets 200, Bhavesh gets [ERP DOWN] with the CV attached', async () => {
  const { res, calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    erp: () => { throw new TypeError('fetch failed'); },
  });
  assert.equal(res.status, 200);
  const emails = calls.filter((c) => c.url.startsWith('https://api.resend.com')).map((c) => JSON.parse(c.body));
  const fallback = emails.find((e) => e.subject.startsWith('[ERP DOWN]'));
  assert.ok(fallback, 'fallback email sent');
  assert.deepEqual(fallback.to, ['bhavesh@factoryjet.com']);
  assert.equal(fallback.attachments[0].content, Buffer.from(PDF).toString('base64'));
  assert.match(fallback.html, /ERPNext unreachable/);
});

test('honeypot filled: saved and flagged, but no receipt to the address given', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { company_website: 'spam.biz', 'cf-turnstile-response': 'tok' }),
    erp: (u, o) => {
      if ((o.method || 'GET') === 'GET') return new Response('{}', { status: 404 });
      if (u.endsWith('/api/resource/Job%20Applicant')) return new Response('{"data":{"name":"asha@example.com"}}');
      return new Response('{"message":{}}');
    },
  });
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.custom_turnstile_verdict, 'trap');
  assert.equal(calls.filter((c) => c.url.startsWith('https://api.resend.com')).length, 0);
});

test('renamed trap field fj_hp_x filled: saved as trap', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { fj_hp_x: 'spam.biz', 'cf-turnstile-response': 'tok' }),
    erp: newApplicantErp,
  });
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.custom_turnstile_verdict, 'trap');
  assert.equal(emailsOf(calls).length, 0);
});

test('expired token: saved as failed with the siteverify error code in notes', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    siteverify: { success: false, 'error-codes': ['timeout-or-duplicate'] },
    erp: newApplicantErp,
  });
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.custom_turnstile_verdict, 'failed');
  assert.equal(doc.notes, 'Turnstile failed: timeout-or-duplicate');
});

test('long siteverify error list: notes capped at the ERPNext 140-character limit', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    siteverify: { success: false, 'error-codes': Array(30).fill('invalid-input-response') },
    erp: newApplicantErp,
  });
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.notes.length, 140);
});

test('invalid form gets 400 with field errors and touches nothing', async () => {
  const { res, calls } = await run(onRequestPost, {
    request: requestWith({ email: 'nope' }),
    erp: () => new Response('{}'),
  });
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.ok(body.errors.email);
  assert.equal(calls.length, 0);
});

import { fallbackEmail } from '../functions/api/job-application.js';

test('fallback subject: CV NOT ATTACHED when the record saved, ERP DOWN when nothing saved', () => {
  const v = validateApplication(goodFields(), goodCv).value;
  const partial = fallbackEmail(v, { saved: false, applicant: 'asha@example.com', reason: 'CV upload failed (HTTP 500)' }, 'verified');
  assert.match(partial.subject, /^\[CV NOT ATTACHED\]/);
  assert.match(partial.intro, /saved in ERPNext as asha@example\.com/);
  const down = fallbackEmail(v, { saved: false, reason: 'ERPNext timed out' }, 'verified');
  assert.match(down.subject, /^\[ERP DOWN\]/);
  assert.match(down.intro, /did not reach ERPNext/);
});

test('live case from 2026-10-15: upload_file 500 sends CV NOT ATTACHED with the CV', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    erp: (u, o) => {
      if (u.includes('/api/resource/Job%20Applicant/') && (o.method || 'GET') === 'GET') return new Response('{}', { status: 404 });
      if (u.endsWith('/api/resource/Job%20Applicant')) return new Response('{"data":{"name":"asha@example.com"}}');
      if (u.endsWith('/upload_file')) return new Response('{"exc_type":"PdfReadError"}', { status: 500 });
      return new Response('{}', { status: 500 });
    },
  });
  const emails = calls.filter((c) => c.url.startsWith('https://api.resend.com')).map((c) => JSON.parse(c.body));
  const fallback = emails.find((e) => e.to[0] === 'bhavesh@factoryjet.com');
  assert.match(fallback.subject, /^\[CV NOT ATTACHED\]/);
  assert.ok(!fallback.subject.includes('ERP DOWN'));
  assert.equal(fallback.attachments.length, 1);
  assert.ok(emails.some((e) => e.to[0] === 'asha@example.com'), 'candidate still gets the receipt');
});

// ── Turnstile hardening (2026-10-23) ───────────────────────────────────────────
import { turnstileHostnameOk, subjectName } from '../functions/api/job-application.js';

const newApplicantErp = (u, o) => {
  if (u.includes('/api/resource/Job%20Applicant/') && (o.method || 'GET') === 'GET') return new Response('{}', { status: 404 });
  if (u.endsWith('/api/resource/Job%20Applicant')) return new Response('{"data":{"name":"asha@example.com"}}');
  if (u.endsWith('/upload_file')) return new Response('{"message":{}}');
  return new Response('{}');
};
const existingApplicantErp = (u, o) => {
  if (u.includes('/api/resource/Job%20Applicant/') && (o.method || 'GET') === 'GET') return new Response('{"data":{}}', { status: 200 });
  return new Response('{"message":{}}');
};
const emailsOf = (calls) => calls.filter((c) => c.url.startsWith('https://api.resend.com')).map((c) => JSON.parse(c.body));

test('turnstile hostnames: factoryjet.com, www and *.pages.dev only', () => {
  assert.ok(turnstileHostnameOk('factoryjet.com'));
  assert.ok(turnstileHostnameOk('www.factoryjet.com'));
  assert.ok(turnstileHostnameOk('abc123.factoryjet-v2.pages.dev'));
  assert.ok(!turnstileHostnameOk('evil.com'));
  assert.ok(!turnstileHostnameOk('factoryjet.com.evil.com'));
  assert.ok(!turnstileHostnameOk('pages.dev'));
  assert.ok(!turnstileHostnameOk(''));
});

test('token solved on another hostname: saved as failed, no receipt', async () => {
  const { calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    siteverify: { success: true, hostname: 'evil.example' },
    erp: newApplicantErp,
  });
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.custom_turnstile_verdict, 'failed');
  assert.equal(doc.notes, 'Turnstile failed: hostname evil.example');
  assert.equal(emailsOf(calls).length, 0);
});

test('no TURNSTILE_SECRET_KEY: application saved, no receipt sent', async () => {
  const { res, calls } = await run(onRequestPost, {
    request: requestWith({}, PDF, { 'cf-turnstile-response': 'tok' }),
    env: { TURNSTILE_SECRET_KEY: '' },
    erp: newApplicantErp,
  });
  assert.equal(res.status, 200);
  const doc = JSON.parse(calls.find((c) => c.url.endsWith('/api/resource/Job%20Applicant') && c.method === 'POST').body);
  assert.equal(doc.custom_turnstile_verdict, 'unchecked');
  assert.ok(!calls.some((c) => c.url.startsWith('https://challenges.cloudflare.com')));
  assert.equal(emailsOf(calls).length, 0);
});

test('existing email without a verified token: record untouched, Bhavesh gets the application', async () => {
  const { calls } = await run(onRequestPost, { erp: existingApplicantErp }); // no token -> absent
  assert.ok(!calls.some((c) => c.url.endsWith('/api/resource/Comment')));
  assert.ok(!calls.some((c) => c.url.endsWith('/upload_file')));
  const emails = emailsOf(calls);
  assert.equal(emails.length, 1);
  assert.deepEqual(emails[0].to, ['bhavesh@factoryjet.com']);
  assert.match(emails[0].html, /existing applicant/);
});

test('existing email with no secret configured still gets the comment', async () => {
  const { calls } = await run(onRequestPost, { env: { TURNSTILE_SECRET_KEY: '' }, erp: existingApplicantErp });
  assert.ok(calls.some((c) => c.url.endsWith('/api/resource/Comment')));
});

test('receipt subject: no CR/LF, only name characters, max 40', () => {
  assert.equal(subjectName('Asha\r\nBcc: x@y.com'), 'Asha Bcc xycom');
  assert.equal(subjectName("O'Brien-Smith"), "O'Brien-Smith");
  assert.equal(subjectName('x'.repeat(60)).length, 40);
  const v = validateApplication(goodFields({ name: 'http://spam.example/win\r\n Rao' }), goodCv).value;
  const r = receiptEmail(v);
  assert.ok(!/[\r\n]/.test(r.subject));
  assert.ok(!r.subject.includes('://'));
  assert.ok(!r.subject.includes('.'));
});

test('free text is truncated to the caps', () => {
  const r = validateApplication(goodFields({ name: 'A'.repeat(500), linkedin: `linkedin.com/in/${'a'.repeat(600)}` }), goodCv);
  assert.equal(r.ok, true);
  assert.equal(r.value.name.length, 120);
  assert.ok(r.value.linkedin.length <= 300 + 'https://'.length);
});
