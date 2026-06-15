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
function buildHtml({ name, email, phone, company, service, message, region, page }) {
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

  const { name, email, phone, company, service, message, region, page } = body;

  // Guard: need at minimum a name + email
  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'name and email are required' }), {
      status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Require RESEND_API_KEY env var (set in Cloudflare Pages → Settings → Env Vars)
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set in Cloudflare Pages environment variables');
    // Return 200 so the modal doesn't show an error to the user — lead is already in Firestore
    return new Response(JSON.stringify({ ok: true, warn: 'email skipped — no API key' }), {
      status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Send email via Resend
  const serviceStr = serviceLabel(service);
  const subject = `🔥 New lead: ${name} — ${serviceStr}${region ? ` (${region.toUpperCase()})` : ''}`;

  let resendRes;
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:    NOTIFY_FROM,
        to:      [NOTIFY_TO],
        subject,
        html:    buildHtml({ name, email, phone, company, service, message, region, page }),
        reply_to: email,
      }),
    });
  } catch (err) {
    console.error('Resend fetch error:', err);
    // Still 200 — lead is in Firestore, email is best-effort
    return new Response(JSON.stringify({ ok: true, warn: 'email delivery error' }), {
      status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  if (!resendRes.ok) {
    const errBody = await resendRes.text();
    console.error('Resend API error:', resendRes.status, errBody);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
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
