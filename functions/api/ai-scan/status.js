/**
 * Cloudflare Pages Function — GET /api/ai-scan/status?slug=…
 *
 * Same-origin poll proxy for the AI Visibility Checker. Forwards to the
 * Seen-in-Search partner result endpoint with the server-side partner key, so
 * the browser never sees SIS or the key and never hits a cross-origin request.
 * Returns SIS's JSON verbatim (status/progress while running, full result when
 * done). Never cached — the browser polls this every few seconds.
 */

function corsHeaders(origin) {
  const allow = origin.includes('factoryjet.com') || origin.includes('pages.dev') || origin === '';
  return {
    'Access-Control-Allow-Origin': allow ? origin || 'https://factoryjet.com' : 'https://factoryjet.com',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const origin = request.headers.get('Origin') || '';
  const cors = corsHeaders(origin);
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...cors },
    });

  const slug = new URL(request.url).searchParams.get('slug') || '';
  if (!/^[a-z0-9-]{1,80}$/i.test(slug)) {
    return json({ error: 'bad slug' }, 400);
  }

  const base = (env.SIS_API_BASE || 'https://app.seeninsearch.com').replace(/\/+$/, '');
  const key = env.SIS_PARTNER_KEY;
  if (!key) {
    return json({ error: 'not_configured' }, 503);
  }

  try {
    const r = await fetch(`${base}/api/partner/scans/${encodeURIComponent(slug)}`, {
      headers: { 'x-partner-key': key },
    });
    const data = await r.json().catch(() => ({}));
    return json(data, r.status);
  } catch {
    return json({ error: 'sis_unreachable' }, 502);
  }
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}
