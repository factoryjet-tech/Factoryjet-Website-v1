/**
 * Cloudflare Pages Function — /api/job-application
 *
 * Receives the careers form (multipart, with a CV file) from
 * src/components/careers/ApplicationForm.tsx and saves it as a Job Applicant in
 * ERPNext (HR app), with the CV as a private attachment. Spec:
 * docs/HIRING-PIPELINE-SPEC.md, section 4.5.
 *
 * Order of work:
 *   1. Validate the form and the file. Bad input gets a 400 with field errors,
 *      so the browser can show them. This is the only part the visitor waits on
 *      apart from Turnstile.
 *   2. Verify Turnstile. A failed check never blocks the save; it is stored on
 *      the record and the scorer skips it (same rule as notify-lead.js).
 *   3. Respond 200, then in waitUntil: save to ERPNext, attach the CV, send the
 *      candidate a receipt. If ERPNext fails or times out, the whole
 *      application, CV attached, is emailed to Bhavesh with an [ERP DOWN]
 *      subject, so an outage like the Contabo one on 2026-10-15 loses nobody.
 *
 * ERPNext names Job Applicant records by email address (checked 2026-10-15),
 * so one email holds one record across every opening. A repeat application is
 * added to the existing record as a Comment instead of failing.
 *
 * Secrets (Cloudflare Pages project factoryjet-v2, production):
 *   CAREERS_ERP_API_KEY, CAREERS_ERP_API_SECRET  careers-bot user, HR User role only
 *   RESEND_API_KEY, TURNSTILE_SECRET_KEY         already used by notify-lead.js
 * Optional vars: CAREERS_ERP_URL, CAREERS_FROM, CAREERS_REPLY_TO,
 *   CAREERS_RETENTION_DAYS, CAREERS_NOTIFY_TO, ERPNEXT_TIMEOUT_MS
 *
 * Never logs applicant details. Never echoes ERPNext ids or errors to the browser.
 */

const DEFAULT_ERP_URL = 'https://erp.factoryjet.com';

// PLACEHOLDER (Bhavesh to decide, spec section 10): the careers inbox. Until it
// exists, replies to the receipt go to bhavesh@factoryjet.com via CAREERS_REPLY_TO's
// default below, so no candidate reply bounces.
const DEFAULT_FROM = 'FactoryJet Careers <careers@factoryjet.com>';
const DEFAULT_REPLY_TO = 'bhavesh@factoryjet.com';
const DEFAULT_NOTIFY_TO = 'bhavesh@factoryjet.com';

// PLACEHOLDER (Bhavesh to decide, spec section 10): days to keep an applicant's
// data. Must match RETENTION_DAYS in src/data/careers.ts, which the consent text shows.
const DEFAULT_RETENTION_DAYS = 180;

// Bump when the consent wording in src/data/careers.ts changes.
export const CONSENT_VERSION = '2026-10-15';

// Role slug (from the page URL) -> ERPNext Job Opening. Only listed roles accept applications.
export const ROLES = Object.freeze({
  'ai-search-growth-specialist': {
    jobOpening: 'HR-OPN-2026-0001',
    title: 'AI Search & Growth Specialist',
  },
});

export const MAX_CV_BYTES = 5 * 1024 * 1024;
export const MAX_NOTE_WORDS = 180;
const MAX_SHORT_ANSWER = 300;
const ERP_FETCH_TIMEOUT_MS = 8000;

export const NOTICE_PERIODS = ['Immediate', '15 days', '30 days', '60 days', '90 days'];

// URL ?source= value -> ERPNext Job Applicant Source. "Website Listing" is the
// stock HR source; LinkedIn, Naukri, Indeed, Referral and Other were created 2026-10-15.
const SOURCES = Object.freeze({
  linkedin: 'LinkedIn',
  naukri: 'Naukri',
  indeed: 'Indeed',
  referral: 'Referral',
  website: 'Website Listing',
  other: 'Other',
});

export function sourceToErp(value) {
  const key = String(value || '').trim().toLowerCase();
  return SOURCES[key] || 'Other';
}

export function countWords(text) {
  const t = String(text || '').trim();
  return t ? t.split(/\s+/).length : 0;
}

function clip(value, max) {
  return String(value == null ? '' : value).trim().slice(0, max);
}

/** Adds https:// to a bare domain, rejects anything that is not http(s). Returns '' when invalid. */
export function normalizeUrl(value) {
  let v = clip(value, 500);
  if (!v) return '';
  if (!/^https?:\/\//i.test(v)) v = `https://${v}`;
  try {
    const u = new URL(v);
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return '';
    if (!u.hostname.includes('.')) return '';
    return u.toString();
  } catch {
    return '';
  }
}

/**
 * Checks the first bytes, not the file name or the browser's MIME type, both of
 * which the sender controls. Returns 'pdf', 'docx' or null.
 */
export function sniffCvType(bytes, filename) {
  if (!bytes || bytes.length < 4) return null;
  const name = String(filename || '').toLowerCase();
  // %PDF
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) return 'pdf';
  // PK\x03\x04 is any zip; only accept it when the name says .docx
  if (bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04 && name.endsWith('.docx')) {
    return 'docx';
  }
  return null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Validates the text fields and the CV. `fields` is a plain object of strings.
 * `cv` is { bytes: Uint8Array, name, size } or null.
 * Returns { ok: true, value } or { ok: false, errors: { field: message } }.
 */
export function validateApplication(fields, cv) {
  const f = fields || {};
  const errors = {};
  const role = clip(f.role, 80);
  if (!ROLES[role]) errors.role = 'This role is not open.';

  const name = clip(f.name, 140);
  if (name.length < 2) errors.name = 'Please enter your full name.';

  const email = clip(f.email, 200).toLowerCase();
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';

  const phone = clip(f.phone, 40);
  if (phone.replace(/\D/g, '').length < 8) errors.phone = 'Please enter a phone number we can call.';

  const linkedinRaw = clip(f.linkedin, 500);
  const linkedin = linkedinRaw ? normalizeUrl(linkedinRaw) : '';
  if (linkedinRaw && !linkedin) errors.linkedin = 'That does not look like a link.';

  const workLink = normalizeUrl(f.work_link);
  if (!workLink) errors.work_link = 'Please add a link to the work.';
  const workNote = clip(f.work_note, MAX_SHORT_ANSWER + 50);
  if (!workNote) errors.work_note = 'Tell us what you changed.';
  else if (workNote.length > MAX_SHORT_ANSWER) errors.work_note = `Keep it under ${MAX_SHORT_ANSWER} characters.`;

  const aiLink = normalizeUrl(f.ai_link);
  if (!aiLink) errors.ai_link = 'Please add a link to something you built or fixed with an AI tool.';
  const aiNote = clip(f.ai_note, MAX_SHORT_ANSWER + 50);
  if (!aiNote) errors.ai_note = 'Tell us what the AI did and what you did.';
  else if (aiNote.length > MAX_SHORT_ANSWER) errors.ai_note = `Keep it under ${MAX_SHORT_ANSWER} characters.`;

  const aiSearchNote = clip(f.ai_search_note, 2000);
  const words = countWords(aiSearchNote);
  if (words < 20) errors.ai_search_note = 'Please write your note (around 150 words).';
  else if (words > MAX_NOTE_WORDS) errors.ai_search_note = `Please keep it under ${MAX_NOTE_WORDS} words. You have ${words}.`;

  const onsite = clip(f.onsite_ok, 3);
  if (onsite !== 'yes' && onsite !== 'no') errors.onsite_ok = 'Please answer this question.';
  const salary = clip(f.salary_ok, 3);
  if (salary !== 'yes' && salary !== 'no') errors.salary_ok = 'Please answer this question.';

  const notice = clip(f.notice_period, 20);
  if (!NOTICE_PERIODS.includes(notice)) errors.notice_period = 'Please pick your notice period.';

  const city = clip(f.current_city, 80);
  if (!city) errors.current_city = 'Please tell us where you live now.';

  if (clip(f.consent, 3) !== 'yes') errors.consent = 'We need your consent to review your application.';

  if (!cv || !cv.bytes || !cv.size) {
    errors.cv = 'Please attach your CV.';
  } else if (cv.size > MAX_CV_BYTES) {
    errors.cv = 'Your CV is over 5 MB. Please send a smaller file.';
  } else if (!sniffCvType(cv.bytes, cv.name)) {
    errors.cv = 'Please attach your CV as a PDF or Word (.docx) file.';
  }

  if (Object.keys(errors).length) return { ok: false, errors };

  return {
    ok: true,
    value: {
      role,
      name,
      email,
      phone,
      linkedin,
      workLink,
      workNote,
      aiLink,
      aiNote,
      aiSearchNote,
      onsiteOk: onsite === 'yes',
      salaryOk: salary === 'yes',
      noticePeriod: notice,
      currentCity: city,
      source: sourceToErp(f.source),
      cvType: sniffCvType(cv.bytes, cv.name),
    },
  };
}

function pad(n) { return String(n).padStart(2, '0'); }

/** ERPNext Datetime string in IST (the site's time zone), e.g. 2026-10-15 14:15:00 */
export function erpDatetime(date = new Date()) {
  const ist = new Date(date.getTime() + 330 * 60 * 1000);
  return `${ist.getUTCFullYear()}-${pad(ist.getUTCMonth() + 1)}-${pad(ist.getUTCDate())} ` +
    `${pad(ist.getUTCHours())}:${pad(ist.getUTCMinutes())}:${pad(ist.getUTCSeconds())}`;
}

export function erpDatePlusDays(days, date = new Date()) {
  const d = new Date(date.getTime() + 330 * 60 * 1000 + days * 86400000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/** The Job Applicant document for POST /api/resource/Job Applicant. */
export function buildApplicantDoc(v, { turnstileVerdict, retentionDays, now = new Date() }) {
  return {
    applicant_name: v.name,
    email_id: v.email,
    phone_number: v.phone,
    job_title: ROLES[v.role].jobOpening,
    status: 'Open',
    source: v.source,
    custom_stage: 'Unscored',
    custom_linkedin: v.linkedin,
    custom_work_link: v.workLink,
    custom_work_note: v.workNote,
    custom_ai_proof_link: v.aiLink,
    custom_ai_proof_note: v.aiNote,
    custom_ai_search_note: v.aiSearchNote,
    custom_onsite_ok: v.onsiteOk ? 1 : 0,
    custom_salary_ok: v.salaryOk ? 1 : 0,
    custom_notice_period: v.noticePeriod,
    custom_current_city: v.currentCity,
    custom_turnstile_verdict: turnstileVerdict,
    custom_consent_at: erpDatetime(now),
    custom_consent_version: CONSENT_VERSION,
    custom_retention_until: erpDatePlusDays(retentionDays, now),
  };
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** Plain lines describing an application, used for the repeat-application Comment and the fallback email. */
export function applicationLines(v, turnstileVerdict) {
  return [
    ['Role', ROLES[v.role] ? ROLES[v.role].title : v.role],
    ['Name', v.name],
    ['Email', v.email],
    ['Phone', v.phone],
    ['LinkedIn', v.linkedin || '(none)'],
    ['Work link', v.workLink],
    ['What they changed', v.workNote],
    ['AI tool link', v.aiLink],
    ['What the AI did vs what they did', v.aiNote],
    ['AI search note', v.aiSearchNote],
    ['5 days on-site OK', v.onsiteOk ? 'Yes' : 'No'],
    ['Salary range OK', v.salaryOk ? 'Yes' : 'No'],
    ['Notice period', v.noticePeriod],
    ['Current city', v.currentCity],
    ['Source', v.source],
    ['Turnstile', turnstileVerdict],
  ];
}

export function linesToHtml(lines) {
  return lines
    .map(([k, val]) => `<p><b>${escapeHtml(k)}:</b><br>${escapeHtml(val).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

/** Copied from notify-lead.js on purpose: that file has uncommitted work from another session. Same contract. */
async function verifyTurnstile(env, token, ip) {
  const secret = env && env.TURNSTILE_SECRET_KEY;
  if (!secret) return 'unchecked';
  if (!token) return 'absent';
  try {
    const form = new FormData();
    form.append('secret', secret);
    form.append('response', token);
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
    const out = await res.json();
    return out.success ? 'verified' : 'failed';
  } catch (err) {
    console.error('job-application: turnstile verify error', err && err.name);
    return 'unchecked';
  }
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function erpConfig(env) {
  const key = env && env.CAREERS_ERP_API_KEY;
  const secret = env && env.CAREERS_ERP_API_SECRET;
  if (!key || !secret) return null;
  const n = Number(env && env.ERPNEXT_TIMEOUT_MS);
  return {
    url: (env.CAREERS_ERP_URL || DEFAULT_ERP_URL).replace(/\/+$/, ''),
    auth: `token ${key}:${secret}`,
    timeout: Number.isFinite(n) && n > 0 ? n : ERP_FETCH_TIMEOUT_MS,
  };
}

/**
 * Saves the application. Returns { saved: true, applicant, returning } or
 * { saved: false, reason } with a short reason for the fallback email (no secrets).
 */
async function saveToErp(env, v, turnstileVerdict, cv) {
  const erp = erpConfig(env);
  if (!erp) return { saved: false, reason: 'CAREERS_ERP_API_KEY / SECRET not set' };
  const json = { Authorization: erp.auth, 'Content-Type': 'application/json', Accept: 'application/json' };
  const retentionDays = Number(env.CAREERS_RETENTION_DAYS) > 0 ? Number(env.CAREERS_RETENTION_DAYS) : DEFAULT_RETENTION_DAYS;
  const docPath = (name) => `${erp.url}/api/resource/Job%20Applicant/${encodeURIComponent(name)}`;

  try {
    const existing = await fetchWithTimeout(docPath(v.email), { headers: json }, erp.timeout);
    let applicant;
    let returning = false;

    if (existing.status === 200) {
      returning = true;
      applicant = v.email;
      const comment = await fetchWithTimeout(`${erp.url}/api/resource/Comment`, {
        method: 'POST',
        headers: json,
        body: JSON.stringify({
          comment_type: 'Comment',
          reference_doctype: 'Job Applicant',
          reference_name: applicant,
          content: `<p><b>Applied again on ${escapeHtml(erpDatetime())} via factoryjet.com/careers.</b> ` +
            `Job link on this record was not changed.</p>${linesToHtml(applicationLines(v, turnstileVerdict))}`,
        }),
      }, erp.timeout);
      if (!comment.ok) return { saved: false, reason: `comment on existing applicant failed (HTTP ${comment.status})` };
    } else if (existing.status === 404) {
      const created = await fetchWithTimeout(`${erp.url}/api/resource/Job%20Applicant`, {
        method: 'POST',
        headers: json,
        body: JSON.stringify(buildApplicantDoc(v, { turnstileVerdict, retentionDays })),
      }, erp.timeout);
      if (!created.ok) return { saved: false, reason: `create failed (HTTP ${created.status})` };
      const out = await created.json();
      applicant = out && out.data && out.data.name;
      if (!applicant) return { saved: false, reason: 'create returned no name' };
    } else {
      return { saved: false, reason: `lookup failed (HTTP ${existing.status})` };
    }

    // CV as a PRIVATE file attached to the record.
    const ext = v.cvType === 'pdf' ? 'pdf' : 'docx';
    const safeName = v.name.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'applicant';
    const form = new FormData();
    form.append('file', new Blob([cv.bytes], { type: v.cvType === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }), `CV-${safeName}.${ext}`);
    form.append('is_private', '1');
    form.append('doctype', 'Job Applicant');
    form.append('docname', applicant);
    if (!returning) form.append('fieldname', 'resume_attachment');
    const upload = await fetchWithTimeout(`${erp.url}/api/method/upload_file`, {
      method: 'POST',
      headers: { Authorization: erp.auth, Accept: 'application/json' },
      body: form,
    }, erp.timeout);
    if (!upload.ok) return { saved: false, reason: `record saved as ${applicant} but CV upload failed (HTTP ${upload.status})`, applicant };

    if (!returning) {
      // Point resume_attachment at the file in case upload_file did not set it.
      const up = await upload.json().catch(() => null);
      const fileUrl = up && up.message && up.message.file_url;
      if (fileUrl) {
        await fetchWithTimeout(docPath(applicant), {
          method: 'PUT', headers: json, body: JSON.stringify({ resume_attachment: fileUrl }),
        }, erp.timeout).catch(() => null);
      }
    }
    return { saved: true, applicant, returning };
  } catch (err) {
    return { saved: false, reason: err && err.name === 'AbortError' ? 'ERPNext timed out' : 'ERPNext unreachable' };
  }
}

function toBase64(bytes) {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function sendEmail(env, payload) {
  if (!env || !env.RESEND_API_KEY) {
    console.error('job-application: RESEND_API_KEY not set, email skipped');
    return false;
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) console.error('job-application: resend HTTP', res.status);
    return res.ok;
  } catch (err) {
    console.error('job-application: resend error', err && err.name);
    return false;
  }
}

export function receiptEmail(v) {
  const first = v.name.split(/\s+/)[0];
  const title = ROLES[v.role].title;
  return {
    subject: `We got your application, ${first}`,
    html:
      `<p>Hi ${escapeHtml(first)},</p>` +
      `<p>Thanks for applying for the ${escapeHtml(title)} role at FactoryJet.</p>` +
      '<p>A person reads every application, with an AI tool helping to sort them. ' +
      'You will hear from us within 7 days either way.</p>' +
      '<p>FactoryJet</p>',
  };
}

/** Background part: ERPNext save, fallback email when it fails, candidate receipt. */
async function processApplication(env, v, turnstileVerdict, trapFilled, cv) {
  const verdict = trapFilled ? 'trap' : turnstileVerdict;
  const result = await saveToErp(env, v, verdict, cv);

  if (!result.saved) {
    console.error('job-application: ERP save failed:', result.reason);
    await sendEmail(env, {
      from: env.CAREERS_FROM || DEFAULT_FROM,
      to: [env.CAREERS_NOTIFY_TO || DEFAULT_NOTIFY_TO],
      subject: `[ERP DOWN] Job application: ${v.name} (${ROLES[v.role].title})`,
      html:
        `<p><b>This application did not reach ERPNext.</b> Reason: ${escapeHtml(result.reason)}. ` +
        'Add it by hand or forward it once ERPNext is back. The CV is attached.</p>' +
        linesToHtml(applicationLines(v, verdict)),
      attachments: [{ filename: `CV.${v.cvType === 'pdf' ? 'pdf' : 'docx'}`, content: toBase64(cv.bytes) }],
    });
  }

  // Receipt only for submissions that look human. A bot that fills the form with
  // someone else's address must not be able to make us email that person.
  const looksHuman = !trapFilled && (turnstileVerdict === 'verified' || turnstileVerdict === 'unchecked');
  if (looksHuman) {
    const r = receiptEmail(v);
    await sendEmail(env, {
      from: env.CAREERS_FROM || DEFAULT_FROM,
      to: [v.email],
      reply_to: env.CAREERS_REPLY_TO || DEFAULT_REPLY_TO,
      subject: r.subject,
      html: r.html,
    });
  }
}

function corsHeadersFor(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = origin.includes('factoryjet.com') || origin.includes('pages.dev') || origin === '';
  return {
    'Access-Control-Allow-Origin': allowed ? origin || 'https://factoryjet.com' : 'https://factoryjet.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function reply(status, body, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...cors },
  });
}

export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: corsHeadersFor(context.request) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const cors = corsHeadersFor(request);

  const length = Number(request.headers.get('Content-Length') || 0);
  if (length > MAX_CV_BYTES + 200 * 1024) {
    return reply(413, { ok: false, errors: { cv: 'Your CV is over 5 MB. Please send a smaller file.' } }, cors);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return reply(400, { ok: false, errors: { form: 'The form could not be read. Please try again.' } }, cors);
  }

  const fields = {};
  for (const key of ['role', 'name', 'email', 'phone', 'linkedin', 'work_link', 'work_note', 'ai_link', 'ai_note',
    'ai_search_note', 'onsite_ok', 'salary_ok', 'notice_period', 'current_city', 'source', 'consent']) {
    const val = form.get(key);
    fields[key] = typeof val === 'string' ? val : '';
  }

  const file = form.get('cv');
  let cv = null;
  if (file && typeof file === 'object' && typeof file.arrayBuffer === 'function' && file.size > 0) {
    cv = file.size > MAX_CV_BYTES
      ? { bytes: new Uint8Array(4), name: file.name, size: file.size }
      : { bytes: new Uint8Array(await file.arrayBuffer()), name: file.name, size: file.size };
  }

  const checked = validateApplication(fields, cv);
  if (!checked.ok) return reply(400, { ok: false, errors: checked.errors }, cors);

  const trap = form.get('company_website');
  const trapFilled = typeof trap === 'string' && trap.trim() !== '';
  const turnstileVerdict = await verifyTurnstile(
    env, form.get('cf-turnstile-response'), request.headers.get('CF-Connecting-IP'),
  );

  context.waitUntil(processApplication(env, checked.value, turnstileVerdict, trapFilled, cv));
  return reply(200, { ok: true }, cors);
}
