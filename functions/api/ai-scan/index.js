/**
 * Cloudflare Pages Function — POST /api/ai-scan
 *
 * The gated entry point for the AI Visibility Checker lead magnet.
 *
 * Flow (money is only spent AFTER a real lead is captured):
 *   1. Validate the 4-field gate + website.
 *   2. Capture the lead via the EXISTING, proven /api/notify-lead pipeline
 *      (Firestore contactus + Resend alert to Bhavesh). We call it over HTTP so
 *      the battle-tested lead path is reused verbatim and left untouched.
 *   3. Trigger the Seen-in-Search scan via its server-to-server partner API.
 *      The partner key lives ONLY in Cloudflare env (SIS_PARTNER_KEY) and never
 *      reaches the browser.
 *
 * Returns { slug } so the browser can poll /api/ai-scan/status?slug=… . The lead
 * is captured regardless of whether the scan service is reachable — a scan hiccup
 * must never cost us the lead.
 *
 * Env (Cloudflare Pages → Settings → Environment Variables):
 *   SIS_PARTNER_KEY   the shared secret (same value as SIS's PARTNER_API_KEY)
 *   SIS_API_BASE      default https://app.seeninsearch.com
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin) {
  const allow = origin.includes('factoryjet.com') || origin.includes('pages.dev') || origin === '';
  return {
    'Access-Control-Allow-Origin': allow ? origin || 'https://factoryjet.com' : 'https://factoryjet.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

/** "https://www.Acme.com/pricing" -> "acme.com". null if not a real host. */
function normalizeWebsite(input) {
  if (!input) return null;
  let s = String(input).trim();
  if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
  try {
    const host = new URL(s).hostname.replace(/^www\./i, '').toLowerCase();
    return host.includes('.') ? host : null;
  } catch {
    return null;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('Origin') || '';
  const cors = corsHeaders(origin);
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json', ...cors } });

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid json' }, 400);
  }

  // Honeypot — a filled hidden field means a bot. Silent success, no lead, no scan.
  if (String(body.company_url || '').trim() !== '') {
    return json({ ok: true, slug: null, status: null });
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const mobile = String(body.mobile || body.phone || '').trim();
  const company = String(body.company || '').trim();
  const website = normalizeWebsite(body.website || body.domain);

  if (!name || !EMAIL_RE.test(email) || !mobile || !company || !website) {
    return json(
      { error: 'Please provide your name, a valid business email, phone, company, and website.' },
      400,
    );
  }

  // 1) Capture the lead via the proven notify-lead pipeline (never blocks the scan).
  let docId = null;
  let leadCaptured = false;
  try {
    const leadRes = await fetch(new URL('/api/notify-lead', request.url).toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: mobile,
        company,
        service: 'ai-seo',
        source: 'ai_visibility_checker',
        region: 'us',
        message: `AI Visibility Check requested for ${website}`,
        page: '/ai-visibility-checker',
      }),
    });
    const lead = await leadRes.json().catch(() => ({}));
    leadCaptured = !!lead.ok;
    docId = lead.docId || null;
  } catch {
    /* lead capture is best-effort here; notify-lead has its own retry/durability */
  }

  // 2) Trigger the Seen-in-Search scan (server-to-server, key stays server-side).
  const base = (env.SIS_API_BASE || 'https://app.seeninsearch.com').replace(/\/+$/, '');
  const key = env.SIS_PARTNER_KEY;
  let slug = null;
  let status = null;
  let cached = false;
  let scanError = null;

  if (!key) {
    scanError = 'not_configured';
  } else {
    try {
      const r = await fetch(`${base}/api/partner/scans`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-partner-key': key },
        body: JSON.stringify({
          brand: company,
          domain: website,
          name,
          email,
          mobile,
          company,
          source: 'ai_visibility_checker',
        }),
      });
      if (r.ok) {
        const d = await r.json();
        slug = d.slug || null;
        status = d.status || null;
        cached = !!d.cached;
      } else {
        scanError = `sis_${r.status}`;
      }
    } catch {
      scanError = 'sis_unreachable';
    }
  }

  return json({ ok: true, leadCaptured, docId, slug, status, cached, scanError });
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}
