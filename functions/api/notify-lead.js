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

/**
 * Direct push to ERPNext CRM Lead via REST API.
 * Ensures every incoming web lead directly registers inside ERPNext.
 */
async function writeLeadToERPNext(env, lead) {
  const erpUrl = (env && env.ERPNEXT_URL) || 'https://erp.factoryjet.com';
  const apiKey = env && env.ERPNEXT_API_KEY;
  const apiSecret = env && env.ERPNEXT_API_SECRET;

  if (!apiKey || !apiSecret) {
    console.error('ERPNext lead sync skipped: ERPNEXT_API_KEY/ERPNEXT_API_SECRET not configured');
    return { saved: false, error: 'not configured' };
  }

  const payload = {
    lead_name: lead.name || 'Website Inquiry',
    email_id: lead.email || '',
    mobile_no: lead.phone || '',
    company_name: lead.company || lead.name || 'Individual',
    source: 'Website',
    notes: [
      {
        note: `Source: ${lead.source || 'Website'}\nPage: https://factoryjet.com${lead.page || ''}\nService: ${serviceLabel(lead.service)}\nRegion: ${lead.region || 'India'}\nMessage: ${lead.message || 'N/A'}`
      }
    ]
  };

  try {
    const res = await fetch(`${erpUrl}/api/resource/Lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${apiKey}:${apiSecret}`
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return { saved: true, leadId: data?.data?.name };
    }
    const errText = await res.text();
    console.error('ERPNext Lead write failed:', res.status, errText);
    return { saved: false, status: res.status, error: errText };
  } catch (err) {
    console.error('ERPNext Lead write error:', err);
    return { saved: false, error: String(err) };
  }
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

/** Build a clean HTML email body */
function buildHtml({ name, email, phone, company, service, message, region, page, turnstileVerdict }) {
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
                ${page ? row('Source page', `<a href="https://factoryjet.com${page}" style="color:#6B7280;font-size:12px;">factoryjet.com${page}</a>`) : ''}
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
    turnstileToken: body.turnstileToken, turnstileVerdict,
  });

  // ── (1b) Concurrently push lead to ERPNext CRM ─────────────────────────────
  let erpResult = { saved: false };
  try {
    erpResult = await writeLeadToERPNext(env, {
      name, email, phone, company, service, message, region, source, page,
    });
  } catch (err) {
    console.error('ERPNext lead sync exception:', err);
  }

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
          html: buildHtml({ name, email, phone, company, service, message, region, page, turnstileVerdict }),
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
