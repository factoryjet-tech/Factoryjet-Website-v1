/**
 * Cloudflare Pages Function — North-America geo-routing (edge middleware)
 *
 * WHY: The site is a static export. India-positioned pages (web-design cities,
 * ecommerce cities, /seo/*, /ai-seo, etc.) and their US twins (/services/*) live
 * at different URLs and are geo-weighted with hreflang. hreflang keeps Google from
 * *serving* India pages to NA searchers, but nothing stopped a real US/Canada human
 * who lands on an India URL directly (old ranking, backlink, shared link) from
 * seeing India content. This middleware closes that gap: US/CA humans on an India
 * URL are 302-redirected to the nearest US equivalent.
 *
 * NON-NEGOTIABLE — crawlers are ALWAYS exempt. Googlebot, Bingbot, GPTBot,
 * PerplexityBot, ClaudeBot, OAI-SearchBot etc. crawl from US IPs. If we redirected
 * them, the India pages would fall out of Google's index AND out of AI answers —
 * the exact opposite of the goal (India pages are the best-converting cluster).
 * So verified/known crawlers always receive the real India page (200). The
 * redirect is for human browsers only.
 *
 * The decision logic below is a PURE function (decideNaRedirect) exported for
 * scripts/test-geo-redirect.mjs — edit rules there and the test covers them.
 *
 * Runtime notes:
 *   - `cf-ipcountry` header is set by Cloudflare on every request (ISO country, or
 *     'XX'/'T1' when unknown). Unknown → fail open (serve content, no redirect).
 *   - Any thrown error fails open (never let geo logic take a page down).
 *   - Composes with the existing dashboard Redirect Rules (GB→/uk, Gulf→/uae) and
 *     the /api/* Pages Function — non-India paths pass straight through via next().
 */

const SITE_ORIGIN = 'https://factoryjet.com'

// Countries treated as "North America" for this redirect — US + Canada only.
export const NA_COUNTRIES = new Set(['US', 'CA'])

// Search + AI + social crawlers that MUST always receive the real India page (200),
// never a geo-redirect. Substring-matched, case-insensitively, against User-Agent.
// Over-inclusive ON PURPOSE: letting an extra bot through is harmless; redirecting a
// real crawler deindexes the page. Mirrors robots.txt's AI-bot allowlist + the major
// search and social-preview crawlers.
export const EXEMPT_CRAWLER_UA = [
  // search
  'googlebot', 'google-inspectiontool', 'storebot-google', 'bingbot', 'bingpreview',
  'slurp', 'duckduckbot', 'baiduspider', 'yandex', 'sogou', 'exabot', 'applebot',
  // AI retrieval / answer engines
  'gptbot', 'oai-searchbot', 'chatgpt-user', 'perplexitybot', 'claudebot',
  'claude-web', 'anthropic-ai', 'amazonbot', 'meta-externalagent', 'youbot',
  'cohere', 'ccbot',
  // social / link preview (need the real page for correct unfurls)
  'facebookexternalhit', 'twitterbot', 'linkedinbot', 'slackbot', 'discordbot',
  'whatsapp', 'telegrambot', 'pinterest', 'redditbot', 'embedly',
  // generic crawler self-identifiers
  'crawler', 'spider', 'bot/', '+http',
]

// India-only URL clusters → nearest US destination for a redirected NA human.
// More-specific prefixes first. Keep in sync with the locale="in" pages in src/app
// (see docs/superpowers/specs/2026-07-08-na-geo-redirect-design.md).
export const INDIA_TO_US_RULES = [
  // ecommerce city pages — sub-paths only; the bare hub /services/ecommerce-development is US-owned
  { match: (p) => p.startsWith('/services/ecommerce-development/'), target: '/services/ecommerce-development' },
  // India AI-agent hub + sub-pages → US /services/ai-agents
  { match: (p) => p === '/services/ai-agent-development' || p.startsWith('/services/ai-agent-development/'), target: '/services/ai-agents' },
  // India web-design hub + city pages → US /services/web-design
  { match: (p) => p === '/web-design' || p.startsWith('/web-design/'), target: '/services/web-design' },
  // India SEO hub + city + discipline pages → US /services/seo
  { match: (p) => p === '/seo' || p.startsWith('/seo/'), target: '/services/seo' },
  // standalone India service pages → precise US twins
  { match: (p) => p === '/ai-seo', target: '/services/ai-seo' },
  { match: (p) => p === '/shopify-development', target: '/services/shopify-development' },
  { match: (p) => p === '/wordpress-development', target: '/services/wordpress-development' },
  { match: (p) => p === '/n8n-automation', target: '/services/ai-workflow-automation' },
  { match: (p) => p === '/whatsapp-chatbot', target: '/services/ai-chatbot-development' },
]

/** Drop a trailing slash (except root) so `/web-design/` and a target with no slash
 *  can never self-match into a redirect loop. */
export function normalizePath(pathname) {
  if (!pathname) return '/'
  let p = pathname
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  return p
}

/** True when the User-Agent belongs to a search/AI/social crawler we must not redirect. */
export function isExemptCrawler(userAgent) {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  return EXEMPT_CRAWLER_UA.some((sig) => ua.includes(sig))
}

/** The US target for an India path, or null if the path is not an India-cluster page. */
export function indiaTarget(pathname) {
  const p = normalizePath(pathname)
  for (const rule of INDIA_TO_US_RULES) {
    if (rule.match(p)) return rule.target
  }
  return null
}

/** True when the path belongs to an India-only cluster (so its response is
 *  country/UA-dependent and must not be stored in the shared edge cache). */
export function isIndiaPath(pathname) {
  return indiaTarget(pathname) !== null
}

/**
 * The single pure decision. Returns a US target path to redirect to, or null to
 * serve the request unchanged.
 *   - Non-NA country (or unknown) → null (fail open)
 *   - Known crawler → null (protects indexing + AI citation)
 *   - India-cluster path → its US target
 */
export function decideNaRedirect({ path, country, userAgent }) {
  if (!country || !NA_COUNTRIES.has(country.toUpperCase())) return null
  if (isExemptCrawler(userAgent)) return null
  return indiaTarget(path)
}

// --- Cloudflare Pages Functions entrypoint ---
export async function onRequest(context) {
  const { request, next } = context
  try {
    const url = new URL(request.url)
    const path = url.pathname

    // Only India-cluster paths are country/UA-dependent. Everything else passes
    // straight through untouched (keeps its normal edge caching + the /api function).
    if (!isIndiaPath(path)) return next()

    const country = request.headers.get('cf-ipcountry') || ''
    const userAgent = request.headers.get('user-agent') || ''
    const target = decideNaRedirect({ path, country, userAgent })

    if (target) {
      return new Response(null, {
        status: 302, // temporary — transfers no ranking signal; India URL stays canonical
        headers: {
          Location: SITE_ORIGIN + target + url.search,
          'Cache-Control': 'no-store', // never cache a per-visitor geo decision
          'X-FJ-Geo-Redirect': 'na-to-us', // deploy/verification marker
        },
      })
    }

    // Serving the India page (crawler or non-NA visitor). CRITICAL: strip shared-edge
    // caching so a cached 200 can't later be served to an NA human without this
    // Function running. Without this, an exempt crawler's 200 would populate the edge
    // cache and defeat the redirect. Cost is negligible (Pages still serves from edge).
    const res = await next()
    const headers = new Headers(res.headers)
    headers.set('Cache-Control', 'private, no-store')
    headers.set('X-FJ-Geo-Redirect', 'india-served') // deploy marker — visible from any country
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers })
  } catch {
    // Fail open: any error → serve the page normally. Geo logic must never 500 a page.
  }
  return next()
}
