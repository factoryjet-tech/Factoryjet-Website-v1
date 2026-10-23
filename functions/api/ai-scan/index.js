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
 *   TURNSTILE_SECRET_KEY  same secret notify-lead.js and job-application.js read
 *
 * Bot defence: unlike notify-lead (which only flags), this endpoint BLOCKS without
 * a valid Turnstile token, because each request can spend money on a paid scan.
 * It fails open only when the secret is unset (local/preview) or siteverify itself
 * is unreachable, so our own outage never locks out real visitors.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Max lengths applied before any field is used or forwarded. */
export const MAX_LEN = { name: 120, email: 254, mobile: 40, company: 160, website: 253 };

const clip = (v, n) => String(v || '').trim().slice(0, n);

/** Hostnames a Turnstile token may have been issued on. */
export function allowedTurnstileHost(hostname) {
  const h = String(hostname || '').toLowerCase();
  return h === 'factoryjet.com' || h === 'www.factoryjet.com' || h.endsWith('.pages.dev');
}

/**
 * Verify a Turnstile token. Returns 'verified' | 'blocked' | 'unchecked'.
 *   unchecked: secret unset, or siteverify unreachable (fail open, logged).
 *   blocked:   token missing, rejected, or issued on a host that is not ours.
 */
export async function verifyTurnstile(env, token, ip, fetchImpl = fetch) {
  const secret = env && env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn('ai-scan: TURNSTILE_SECRET_KEY unset, skipping bot check');
    return 'unchecked';
  }
  if (!token) return 'blocked';
  let out;
  try {
    const form = new FormData();
    form.append('secret', secret);
    form.append('response', String(token).slice(0, 2048));
    if (ip) form.append('remoteip', ip);
    const res = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body: form,
    });
    out = await res.json();
  } catch (err) {
    console.error('ai-scan: Turnstile verify error, failing open:', err);
    return 'unchecked';
  }
  if (!out || !out.success) return 'blocked';
  if (!allowedTurnstileHost(out.hostname)) {
    console.warn('ai-scan: Turnstile token from unexpected host:', out.hostname);
    return 'blocked';
  }
  return 'verified';
}

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
  if (!body || typeof body !== 'object') return json({ error: 'invalid json' }, 400);

  // Honeypot — a filled hidden field means a bot. Silent success, no lead, no scan.
  if (String(body.company_url || '').trim() !== '') {
    return json({ ok: true, slug: null, status: null });
  }

  // Bot check before any lead or scan spend.
  const human = await verifyTurnstile(env, body.turnstileToken, request.headers.get('CF-Connecting-IP') || '');
  if (human === 'blocked') {
    return json(
      { error: 'We could not confirm you are human. Please wait a moment and press the button again.', code: 'turnstile' },
      403,
    );
  }

  const name = clip(body.name, MAX_LEN.name);
  const email = clip(body.email, MAX_LEN.email);
  const mobile = clip(body.mobile || body.phone, MAX_LEN.mobile);
  const company = clip(body.company, MAX_LEN.company);
  const website = normalizeWebsite(clip(body.website || body.domain, MAX_LEN.website));

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
