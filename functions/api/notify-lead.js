/**
 * Cloudflare Pages Function — /api/notify-lead
 *
 * Receives a POST from ContactFormModal after successful Firestore write,
 * then sends a real-time lead notification email to bhavesh@factoryjet.com
 * via the Resend API.
 *
 * Why a Pages Function instead of a Next.js API route:
 *   The site uses `output: 'export'` in production, which compiles to pure
 *   static HTML/JS. Next.js API routes are server-side and are stripped out
 *   during static export. Cloudflare Pages Functions run as edge workers
 *   *alongside* the static site — same URL space, no new infrastructure.
 *
 * Setup (one-time):
 *   1. Create a Resend account at resend.com (free, 3k emails/mo)
 *   2. Verify factoryjet.com as a sending domain in Resend → Domains
 *   3. Create an API key in Resend → API Keys
 *   4. Add RESEND_API_KEY to Cloudflare Pages → Settings → Environment Variables
 *      (Production + Preview). Never commit it to the repo.
 *   5. Redeploy — Cloudflare picks up the new env var automatically.
 */

const NOTIFY_TO   = 'bhavesh@factoryjet.com';
const NOTIFY_FROM = 'FactoryJet Leads <leads@factoryjet.com>';

// Firestore project + public web API key. The key is the same one shipped in the
// client bundle (NEXT_PUBLIC_FIREBASE_API_KEY), so this exposes nothing new.
// Env vars override the fallbacks if ever set in Cloudflare Pages settings.
const FB_PROJECT = 'factoryjet-c5f8a';
const FB_API_KEY = 'AIzaSyC1EBwPNqicJfuygSKfpy4te8CajzSFvL4';

/**
 * Authoritative server-side lead write to Firestore via the REST API.
 * This is the reliable capture path — it does NOT depend on the browser
 * Firestore SDK, which hangs in production. PATCH to an explicit document id
 * is an upsert, so it shares the client's docId without creating duplicates.
 */
async function writeLeadToFirestore(env, lead) {
  const project = (env && env.FIREBASE_PROJECT_ID) || FB_PROJECT;
  const apiKey  = (env && (env.FIREBASE_API_KEY || env.NEXT_PUBLIC_FIREBASE_API_KEY)) || FB_API_KEY;
  const docId   = (lead.docId && String(lead.docId).replace(/[^A-Za-z0-9_-]/g, '')) ||
                  `${new Date().toISOString().replace(/[:.]/g, '-')}_${(lead.name || 'lead').replace(/\s+/g, '').slice(0, 15)}`;
  // Collection allow-list — never let the client write to an arbitrary path.
  const ALLOWED = ['contactus', 'contactpage', 'location_leads'];
  const collection = ALLOWED.includes(lead.collection) ? lead.collection : 'contactus';

  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/${collection}/${encodeURIComponent(docId)}?key=${apiKey}`;
  const s = (v) => ({ stringValue: v == null ? '' : String(v) });
  const body = {
    fields: {
      name:       s(lead.name),
      email:      s(lead.email),
      phone:      s(lead.phone),
      company:    s(lead.company),
      service:    s(lead.service),
      message:    s(lead.message),
      region:     s(lead.region),
      source:     s(lead.source),
      page:       s(lead.page),
      // Where the visitor came from (see src/utils/leadAttribution.ts)
      landingPage:       s(lead.landingPage),
      referrer:          s(lead.referrer),
      utmSource:         s(lead.utmSource),
      utmMedium:         s(lead.utmMedium),
      utmCampaign:       s(lead.utmCampaign),
      clickId:           s(lead.clickId),
      lastTouchReferrer: s(lead.lastTouchReferrer),
      lastTouchLanding:  s(lead.lastTouchLanding),
      lastTouchCampaign: s(lead.lastTouchCampaign),
      lastTouchAt:       s(lead.lastTouchAt),
      channel:           s(channelLabel(lead)),
      turnstileToken: s(lead.turnstileToken),
      turnstileVerdict: s(lead.turnstileVerdict),
      status:     s('new'),
      capturedBy: s('server'),
      createdAt:  { timestampValue: new Date().toISOString() },
    },
  };

  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) return { saved: true, docId };
    const errText = await res.text();
    console.error('Firestore REST write failed:', res.status, errText);
    return { saved: false, status: res.status };
  } catch (err) {
    console.error('Firestore REST write error:', err);
    return { saved: false, error: String(err) };
  }
}

// ERPNext base URL only. The API key and secret MUST come from Cloudflare Pages
// environment secrets (ERPNEXT_API_KEY, ERPNEXT_API_SECRET). Never hardcode
// them here: this repository is public on GitHub.
const DEFAULT_ERPNEXT_URL = 'https://erp.factoryjet.com';

// ERPNext must never hold up the visitor or the email alert. Each ERPNext request
// gets its own time limit, and the lead request only waits a short grace period
// for the CRM record (so the alert can link it) before answering the visitor and
// letting the sync finish in the background via context.waitUntil.
// 2026-09-17: the first live test took 16s because an ERPNext call stalled.
const ERP_FETCH_TIMEOUT_MS = 8000;
const ERP_EMAIL_GRACE_MS = 2500;
const ERP_HEADERS = {
  Accept: 'application/json',
  'User-Agent': 'FactoryJet-LeadSync/1.0 (+https://factoryjet.com)',
};

/** fetch() with a hard time limit. Throws an AbortError when the limit is hit. */
async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Short, non-sensitive description of a failed request, for logs and the health check. */
function describeFetchError(err) {
  if (err && err.name === 'AbortError') return 'timeout';
  return `network_error: ${String((err && err.message) || err).slice(0, 120)}`;
}

function erpTimeout(env) {
  const n = Number(env && env.ERPNEXT_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? n : ERP_FETCH_TIMEOUT_MS;
}

/**
 * Direct push to ERPNext CRM Lead via REST API, plus follow-up task assignment.
 * Ensures every incoming web lead directly registers inside ERPNext with an
 * actionable ToDo task on Bhavesh's dashboard.
 */
async function writeLeadToERPNext(env, lead) {
  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  const apiKey = env && env.ERPNEXT_API_KEY;
  const apiSecret = env && env.ERPNEXT_API_SECRET;

  if (!apiKey || !apiSecret) {
    console.error('ERPNext lead sync skipped: ERPNEXT_API_KEY/ERPNEXT_API_SECRET not configured');
    return { saved: false, error: 'not configured' };
  }

  const authHeader = `token ${apiKey}:${apiSecret}`;

  // 1. Deduplication check: see if a lead with this Firebase docId already exists
  let leadId = null;
  if (lead.docId) {
    try {
      const checkRes = await fetchWithTimeout(
        `${erpUrl}/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([["custom_firebase_doc_id", "=", lead.docId]]))}&fields=${encodeURIComponent(JSON.stringify(["name"]))}`,
        {
          headers: { ...ERP_HEADERS, 'Authorization': authHeader },
        },
        erpTimeout(env)
      );
      if (!checkRes.ok) console.warn('ERPNext duplicate check returned HTTP', checkRes.status);
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        if (checkData.data && checkData.data.length > 0) {
          leadId = checkData.data[0].name;
          console.log(`Lead already exists in ERPNext with docId ${lead.docId}: ${leadId}`);
          return { saved: true, leadId, duplicate: true };
        }
      }
    } catch (err) {
      console.warn('ERPNext deduplication check warning:', describeFetchError(err));
    }
  }

  // 2. Create Lead
  const payload = {
    lead_name: lead.name || 'Website Inquiry',
    email_id: lead.email || '',
    mobile_no: lead.phone || '',
    company_name: lead.company || lead.name || 'Individual',
    source: 'Website',
    status: 'Open',
    lead_owner: 'bhavesh@factoryjet.com',
    custom_firebase_doc_id: lead.docId || '',
    custom_sequence_status: 'Not Contacted',
    notes: [
      {
        note: `Came from: ${channelLabel(lead)}\n${attributionLines(lead)}Form: ${lead.source || 'Website'}\nForm page: https://factoryjet.com${lead.page || ''}\nService: ${serviceLabel(lead.service)}\nRegion: ${lead.region ? String(lead.region).toUpperCase() : 'Not specified'}\nMessage: ${lead.message || 'N/A'}\nFirebase Doc ID: ${lead.docId || 'N/A'}`
      }
    ]
  };

  try {
    const res = await fetchWithTimeout(`${erpUrl}/api/resource/Lead`, {
      method: 'POST',
      headers: {
        ...ERP_HEADERS,
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(payload),
    }, erpTimeout(env));

    if (res.ok) {
      const data = await res.json();
      leadId = data?.data?.name;
    } else {
      const errText = (await res.text()).slice(0, 500);
      console.error('ERPNext Lead write failed:', res.status, errText);
      return { saved: false, status: res.status, error: `http_${res.status}` };
    }
  } catch (err) {
    const kind = describeFetchError(err);
    console.error('ERPNext Lead write error:', kind);
    return { saved: false, error: kind };
  }

  // 3. Create high-priority follow-up ToDo task assigned to bhavesh@factoryjet.com
  let todoId = null;
  if (leadId) {
    try {
      const serviceName = serviceLabel(lead.service);
      const todoPayload = {
        description: `Follow up with ${lead.name || 'Website Lead'} (${lead.company || 'Individual'})\nService: ${serviceName} · Page: ${lead.page || '/'}\nCame from: ${channelLabel(lead)}${lead.landingPage ? ` · Landed on: ${lead.landingPage}` : ''}\nPhone: ${lead.phone || 'N/A'} · Email: ${lead.email || 'N/A'}\nInquiry: ${lead.message || 'N/A'}`,
        status: 'Open',
        priority: 'High',
        allocated_to: 'bhavesh@factoryjet.com',
        assigned_by: 'Administrator',
        reference_type: 'Lead',
        reference_name: leadId,
        date: new Date().toISOString().slice(0, 10),
      };

      const todoRes = await fetchWithTimeout(`${erpUrl}/api/resource/ToDo`, {
        method: 'POST',
        headers: {
          ...ERP_HEADERS,
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(todoPayload),
      }, erpTimeout(env));

      if (todoRes.ok) {
        const todoData = await todoRes.json();
        todoId = todoData?.data?.name;
      } else {
        console.warn('ERPNext ToDo creation warning:', await todoRes.text());
      }
    } catch (todoErr) {
      console.warn('ERPNext ToDo creation exception:', describeFetchError(todoErr));
    }
  }

  return { saved: true, leadId, todoId };
}


/** Pretty-print the service slug into a human label */
function serviceLabel(id) {
  const map = {
    website:     'Website Design',
    ecommerce:   'E-Commerce / Shopify',
    seo:         'SEO / Local SEO',
    'ai-seo':    'AI SEO / GEO',
    maintenance: 'AMC / Maintenance',
    other:       'Other / Custom',
  };
  return map[id] || id || 'Not specified';
}

/** Trim an untrusted string from the request body to a safe length. */
function clipText(value, max) {
  return value == null ? '' : String(value).trim().slice(0, max);
}

/** Escape text for the HTML email. */
function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Referring hosts we know, mapped to a plain channel name for the lead record.
const KNOWN_REFERRERS = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, 'ChatGPT'],
  [/(^|\.)perplexity\.ai$/, 'Perplexity'],
  [/(^|\.)claude\.ai$/, 'Claude'],
  [/(^|\.)gemini\.google\.com$/, 'Gemini'],
  [/(^|\.)copilot\.microsoft\.com$|(^|\.)copilot\.com$/, 'Microsoft Copilot'],
  [/(^|\.)bing\.com$/, 'Bing'],
  [/(^|\.)google\.[a-z.]+$/, 'Google'],
  [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)linkedin\.com$|(^|\.)lnkd\.in$/, 'LinkedIn'],
  [/(^|\.)clutch\.co$/, 'Clutch'],
  [/(^|\.)designrush\.com$/, 'DesignRush'],
  [/(^|\.)goodfirms\.co$/, 'GoodFirms'],
];

/**
 * One plain-language answer to "where did this lead come from?".
 * Order: ad click, UTM campaign, known referrer, other referrer, then an earlier
 * external visit, else direct or unknown.
 */
function channelLabel(lead) {
  const click = { 'google-ads': 'Google Ads', 'microsoft-ads': 'Microsoft Ads', meta: 'Meta ads', linkedin: 'LinkedIn ads' };
  if (lead.clickId && click[lead.clickId]) return click[lead.clickId];
  const knownName = (host) => {
    const hit = host && KNOWN_REFERRERS.find(([re]) => re.test(String(host).toLowerCase()));
    return hit ? hit[1] : '';
  };
  // ChatGPT and others tag outbound links with utm_source=<their domain>, so a
  // known source name wins over the generic "Campaign" label.
  const fromReferrer = knownName(lead.referrer);
  if (fromReferrer) return `${fromReferrer} (${lead.referrer})`;
  const fromUtm = knownName(lead.utmSource);
  if (fromUtm) return `${fromUtm} (utm_source=${lead.utmSource})`;
  if (lead.utmSource) return `Campaign: ${lead.utmSource}${lead.utmMedium ? ` / ${lead.utmMedium}` : ''}`;
  if (lead.referrer) return `Referral from ${lead.referrer}`;
  if (lead.lastTouchReferrer) return `Direct visit, first came via ${lead.lastTouchReferrer}`;
  if (lead.landingPage) return 'Direct or unknown (no referring site)';
  return 'Unknown (no visit data captured)';
}

/** Extra attribution lines for the CRM note. Empty string when nothing was captured. */
function attributionLines(lead) {
  let out = '';
  if (lead.landingPage) out += `Landing page: https://factoryjet.com${lead.landingPage}\n`;
  if (lead.utmCampaign) out += `Campaign name: ${lead.utmCampaign}\n`;
  if (lead.lastTouchReferrer && lead.lastTouchReferrer !== lead.referrer) {
    out += `Earlier visit: via ${lead.lastTouchReferrer}${lead.lastTouchLanding ? ` to ${lead.lastTouchLanding}` : ''}${lead.lastTouchAt ? ` on ${lead.lastTouchAt.slice(0, 10)}` : ''}\n`;
  }
  return out;
}

/** Build a clean HTML email body */
function buildHtml({ name, email, phone, company, service, message, region, page, turnstileVerdict, erpLeadId, attribution }) {
  const a = attribution || {};
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Lead — FactoryJet</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#F05A28,#d44d1f);padding:28px 32px;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">FactoryJet</p>
              <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">🔥 New Lead</h1>
              <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">${now} IST</p>
            </td>
          </tr>

          <!-- Lead Details -->
          <tr>
            <td style="padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('Name',    name    || '—')}
                ${row('Email',   email ? `<a href="mailto:${email}" style="color:#F05A28;text-decoration:none;">${email}</a>` : '—')}
                ${row('Phone',   phone   || '—')}
                ${row('Company', company || '—')}
                ${row('Service', `<span style="display:inline-block;background:#FFF1EB;color:#F05A28;padding:3px 10px;border-radius:20px;font-weight:600;font-size:13px;">${serviceLabel(service)}</span>`)}
                ${row('Region',  (region || '').toUpperCase() || '—')}
                ${message ? row('Message', `<span style="color:#374151;">${message}</span>`) : ''}
                ${erpLeadId ? row('CRM Lead', `<a href="https://erp.factoryjet.com/app/lead/${encodeURIComponent(erpLeadId)}" style="color:#F05A28;font-weight:600;text-decoration:none;">${erpLeadId} (Assigned to Bhavesh)</a>`) : ''}
                ${row('Came from', `<strong>${escapeHtml(channelLabel(a))}</strong>`)}
                ${a.landingPage ? row('Landing page', `<a href="https://factoryjet.com${escapeHtml(a.landingPage)}" style="color:#6B7280;font-size:12px;">factoryjet.com${escapeHtml(a.landingPage)}</a>`) : ''}
                ${a.utmCampaign ? row('Campaign', escapeHtml(a.utmCampaign)) : ''}
                ${page ? row('Form page', `<a href="https://factoryjet.com${page}" style="color:#6B7280;font-size:12px;">factoryjet.com${page}</a>`) : ''}
                ${turnstileVerdict === 'failed'
                  ? row('Spam check', '<span style="color:#B23E13;font-weight:600;">Failed bot check — treat with suspicion</span>')
                  : ''}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;">
              <a href="mailto:${email || ''}" style="display:inline-block;background:#F05A28;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Reply to ${name ? name.split(' ')[0] : 'Lead'}</a>
              ${erpLeadId ? `<a href="https://erp.factoryjet.com/app/lead/${encodeURIComponent(erpLeadId)}" style="display:inline-block;margin-left:12px;background:#111827;color:#ffffff;padding:12px 20px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Open in CRM →</a>` : ''}
              <a href="https://console.firebase.google.com/project/factoryjet-c5f8a/firestore/data/contactus" style="display:inline-block;margin-left:12px;color:#6B7280;font-size:13px;text-decoration:none;">View in Firestore →</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">Sent by FactoryJet lead notification system · <a href="https://factoryjet.com" style="color:#9ca3af;">factoryjet.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:8px 0;vertical-align:top;width:110px;">
        <span style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
      </td>
      <td style="padding:8px 0;vertical-align:top;">
        <span style="font-size:14px;color:#111827;">${value}</span>
      </td>
    </tr>`;
}

/**
 * Verify the Turnstile token with Cloudflare.
 *
 * Until now the token was stored and never checked, which made the widget purely
 * decorative — link-building outreach walked straight through it.
 *
 * This FLAGS, it never blocks. That is deliberate:
 *   - the widget is interaction-only, so a real visitor can legitimately submit
 *     with no token at all if it has not finished rendering;
 *   - Turnstile tokens expire (~5 min), so someone who opens the form, gets
 *     distracted and submits later fails verification while being entirely real;
 *   - losing one real lead costs far more than receiving ten spam ones, and this
 *     file exists because a 2026-06-22 regression silently lost ~100% of leads.
 *
 * Returns: 'verified' | 'failed' | 'absent' | 'unchecked'
 */
async function verifyTurnstile(env, token, ip) {
  const secret = env && env.TURNSTILE_SECRET_KEY;
  if (!secret) return 'unchecked';        // not configured — degrade quietly
  if (!token) return 'absent';            // legit users can land here; not spam
  try {
    const form = new FormData();
    form.append('secret', secret);
    form.append('response', token);
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body: form,
    });
    const out = await res.json();
    return out.success ? 'verified' : 'failed';
  } catch (err) {
    console.error('Turnstile verify error:', err);
    return 'unchecked';                   // never let our own outage look like spam
  }
}

/** Cloudflare Pages Function entry point */
export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS — allow requests from factoryjet.com and Cloudflare preview URLs
  const origin = request.headers.get('Origin') || '';
  const allowed = origin.includes('factoryjet.com') || origin.includes('pages.dev') || origin === '';
  const corsHeaders = {
    'Access-Control-Allow-Origin':  allowed ? origin : 'https://factoryjet.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const { docId, collection, name, email, phone, company, service, message, region, source, page } = body;

  // Where the visitor came from (src/utils/leadAttribution.ts). Untrusted input:
  // trimmed here, escaped in the email, and paths must start with "/".
  // Attribution values never need markup or quotes, so strip them before the
  // values reach Firestore, the CRM note (rendered as HTML in ERPNext) or email.
  const attr = (v, max) => clipText(v, max).replace(/[<>"'`]/g, '');
  const pathOnly = (v) => { const p = attr(v, 200); return p.startsWith('/') ? p : ''; };
  const attribution = {
    landingPage:       pathOnly(body.landingPage),
    referrer:          attr(body.referrer, 100),
    utmSource:         attr(body.utmSource, 120),
    utmMedium:         attr(body.utmMedium, 120),
    utmCampaign:       attr(body.utmCampaign, 120),
    clickId:           attr(body.clickId, 20),
    lastTouchReferrer: attr(body.lastTouchReferrer, 100),
    lastTouchLanding:  pathOnly(body.lastTouchLanding),
    lastTouchCampaign: attr(body.lastTouchCampaign, 120),
    lastTouchAt:       attr(body.lastTouchAt, 40),
  };

  // Guard: need at minimum a name + email
  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'name and email are required' }), {
      status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Spam signal only — see verifyTurnstile. Never gates capture.
  const turnstileVerdict = await verifyTurnstile(
    env, body.turnstileToken, request.headers.get('CF-Connecting-IP')
  );

  // ── (1) AUTHORITATIVE: persist the lead to Firestore server-side ───────────
  // This is the reliable capture path; it runs regardless of email status.
  const fsResult = await writeLeadToFirestore(env, {
    docId, collection, name, email, phone, company, service, message, region, source, page,
    ...attribution,
    turnstileToken: body.turnstileToken, turnstileVerdict,
  });

  // ── (1b) Push lead to ERPNext CRM without ever blocking the visitor ────────
  // Wait at most ERP_EMAIL_GRACE_MS so a quick CRM write can be linked in the
  // alert email; otherwise answer now and let the sync finish in the background.
  const erpPromise = writeLeadToERPNext(env, {
    docId: fsResult.docId || docId,
    name, email, phone, company, service, message, region, source, page,
    ...attribution,
  }).then((result) => {
    if (!result.saved) console.error('ERPNext lead sync did not save:', result.error || result.status || 'unknown');
    return result;
  }).catch((err) => {
    console.error('ERPNext lead sync exception:', describeFetchError(err));
    return { saved: false, error: describeFetchError(err) };
  });
  if (typeof context.waitUntil === 'function') context.waitUntil(erpPromise);
  const erpResult = await Promise.race([
    erpPromise,
    new Promise((resolve) => setTimeout(() => resolve({ saved: false, pending: true }), ERP_EMAIL_GRACE_MS)),
  ]);

  // ── (2) Notify by email via Resend (best-effort) ───────────────────────────
  let emailed = false;
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set — lead saved, email skipped');
  } else {
    const serviceStr = serviceLabel(service);
    // Only an outright verification FAILURE is worth flagging in the subject.
    // 'absent' and 'unchecked' are normal for real people and stay unmarked, so
    // the warning keeps its meaning instead of appearing on half the leads.
    const subject = `${turnstileVerdict === 'failed' ? '⚠️ LIKELY SPAM — ' : '🔥 '}New lead: ${name} — ${serviceStr}${region ? ` (${region.toUpperCase()})` : ''}`;
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: NOTIFY_FROM,
          to: [NOTIFY_TO],
          subject,
          html: buildHtml({
            name, email, phone, company, service, message, region, page,
            turnstileVerdict, erpLeadId: erpResult.leadId, attribution,
          }),
          reply_to: email,
        }),
      });
      emailed = resendRes.ok;
      if (!resendRes.ok) {
        console.error('Resend API error:', resendRes.status, await resendRes.text());
      }
    } catch (err) {
      console.error('Resend fetch error:', err);
    }
  }

  // Capture is successful if the lead was saved OR an alert email was sent.
  const ok = fsResult.saved || erpResult.saved || emailed;
  return new Response(
    JSON.stringify({
      ok,
      saved: fsResult.saved,
      erpLeadId: erpResult.leadId || null,
      erpPending: Boolean(erpResult.pending),
      emailed,
      docId: fsResult.docId || docId,
    }),
    {
      // 502 only when ALL paths failed, so the client retries.
      status: ok ? 200 : 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    },
  );
}

/**
 * CRM health check that creates nothing: GET /api/notify-lead?check=crm
 *
 * Reports whether ERPNext credentials are configured, whether ERPNext is
 * reachable from Cloudflare, and whether the credentials authenticate, with
 * timings. It never returns secrets or the API user's name. Use it to verify the
 * CRM layer of lead tracking without sending a test lead.
 */
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const json = (obj, status) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
  if (url.searchParams.get('check') !== 'crm') {
    return json({ error: 'POST a lead, or GET ?check=crm for the CRM health check' }, 405);
  }

  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  const configured = Boolean(env && env.ERPNEXT_API_KEY && env.ERPNEXT_API_SECRET);
  const crm = { configured, reachable: null, authOk: null, httpStatus: null, pingMs: null, authMs: null, error: null };

  let started = Date.now();
  try {
    const ping = await fetchWithTimeout(`${erpUrl}/api/method/ping`, { headers: ERP_HEADERS }, erpTimeout(env));
    crm.reachable = ping.ok;
    crm.httpStatus = ping.status;
  } catch (err) {
    crm.reachable = false;
    crm.error = describeFetchError(err);
  }
  crm.pingMs = Date.now() - started;

  if (configured && crm.reachable) {
    started = Date.now();
    try {
      const auth = await fetchWithTimeout(`${erpUrl}/api/method/frappe.auth.get_logged_user`, {
        headers: { ...ERP_HEADERS, Authorization: `token ${env.ERPNEXT_API_KEY}:${env.ERPNEXT_API_SECRET}` },
      }, erpTimeout(env));
      crm.authOk = auth.ok;
      crm.httpStatus = auth.status;
    } catch (err) {
      crm.authOk = false;
      crm.error = describeFetchError(err);
    }
    crm.authMs = Date.now() - started;
  }

  return json({ crm }, 200);
}

/** Handle CORS preflight */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
