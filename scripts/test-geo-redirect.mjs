/**
 * Standalone test for the NA geo-redirect decision logic in functions/_middleware.js.
 * No framework — run with:  node scripts/test-geo-redirect.mjs  (exit 1 on any failure).
 *
 * This is the primary verification for the edge Function: it exercises the PURE
 * decision function across the geo × crawler × path matrix without needing the
 * Cloudflare runtime (which cannot be run locally — see the OOM hazard note in repo memory).
 */
import {
  decideNaRedirect, isExemptCrawler, indiaTarget, isIndiaPath,
  decideInRedirect, decideGeoRedirect, usTarget, isGeoSensitivePath,
} from '../functions/_middleware.js'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
const GOOGLEBOT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const GPTBOT = 'Mozilla/5.0 (compatible; GPTBot/1.1; +https://openai.com/gptbot)'
const PERPLEXITY = 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)'
const CLAUDEBOT = 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)'

let failures = 0
function expect(name, actual, expected) {
  const ok = actual === expected
  if (!ok) { failures++; console.error(`  ✗ ${name}\n      expected: ${JSON.stringify(expected)}\n      actual:   ${JSON.stringify(actual)}`) }
  else { console.log(`  ✓ ${name}`) }
}

console.log('NA geo-redirect decision — cases:')

// --- NA humans on India pages → redirected to the mapped US target ---
expect('US human /web-design/mumbai → US web-design',
  decideNaRedirect({ path: '/web-design/mumbai', country: 'US', userAgent: CHROME }), '/services/web-design')
expect('US human /web-design (hub) → US web-design',
  decideNaRedirect({ path: '/web-design', country: 'US', userAgent: CHROME }), '/services/web-design')
expect('CA human /services/ecommerce-development/mumbai → US ecommerce hub',
  decideNaRedirect({ path: '/services/ecommerce-development/mumbai', country: 'CA', userAgent: CHROME }), '/services/ecommerce-development')
expect('US human /seo/hyderabad → US seo',
  decideNaRedirect({ path: '/seo/hyderabad', country: 'US', userAgent: CHROME }), '/services/seo')
expect('US human /seo (hub) → US seo',
  decideNaRedirect({ path: '/seo', country: 'US', userAgent: CHROME }), '/services/seo')
expect('US human /services/ai-agent-development/ai-voice-agent → US ai-agents',
  decideNaRedirect({ path: '/services/ai-agent-development/ai-voice-agent', country: 'US', userAgent: CHROME }), '/services/ai-agents')
expect('US human /ai-seo → US ai-seo',
  decideNaRedirect({ path: '/ai-seo', country: 'US', userAgent: CHROME }), '/services/ai-seo')
expect('US human /n8n-automation → US ai-workflow-automation',
  decideNaRedirect({ path: '/n8n-automation', country: 'US', userAgent: CHROME }), '/services/ai-workflow-automation')
expect('US human /whatsapp-chatbot → US ai-chatbot-development',
  decideNaRedirect({ path: '/whatsapp-chatbot', country: 'US', userAgent: CHROME }), '/services/ai-chatbot-development')
expect('US human /digital-marketing → US services hub',
  decideNaRedirect({ path: '/digital-marketing', country: 'US', userAgent: CHROME }), '/services')
expect('US human /digital-marketing/mumbai → US services hub',
  decideNaRedirect({ path: '/digital-marketing/mumbai', country: 'US', userAgent: CHROME }), '/services')
expect('US GPTBot /digital-marketing → NOT redirected (protect indexing)',
  decideNaRedirect({ path: '/digital-marketing', country: 'US', userAgent: GPTBOT }), null)
expect('India human /digital-marketing → NOT redirected',
  decideNaRedirect({ path: '/digital-marketing', country: 'IN', userAgent: CHROME }), null)
expect('trailing slash normalized: US human /web-design/mumbai/ → US web-design',
  decideNaRedirect({ path: '/web-design/mumbai/', country: 'US', userAgent: CHROME }), '/services/web-design')
expect('lowercase country code handled: us human /ai-seo → US ai-seo',
  decideNaRedirect({ path: '/ai-seo', country: 'us', userAgent: CHROME }), '/services/ai-seo')

// --- Crawlers from NA → NEVER redirected (protects indexing + AI citation) ---
expect('US Googlebot /web-design/mumbai → NOT redirected',
  decideNaRedirect({ path: '/web-design/mumbai', country: 'US', userAgent: GOOGLEBOT }), null)
expect('US GPTBot /seo/mumbai → NOT redirected',
  decideNaRedirect({ path: '/seo/mumbai', country: 'US', userAgent: GPTBOT }), null)
expect('US PerplexityBot /ai-seo → NOT redirected',
  decideNaRedirect({ path: '/ai-seo', country: 'US', userAgent: PERPLEXITY }), null)
expect('US ClaudeBot /services/ecommerce-development/delhi → NOT redirected',
  decideNaRedirect({ path: '/services/ecommerce-development/delhi', country: 'US', userAgent: CLAUDEBOT }), null)

// --- Non-NA visitors → never redirected (India/GB/unknown) ---
expect('India human /web-design/mumbai → NOT redirected',
  decideNaRedirect({ path: '/web-design/mumbai', country: 'IN', userAgent: CHROME }), null)
expect('GB human /web-design → NOT redirected (handled elsewhere)',
  decideNaRedirect({ path: '/web-design', country: 'GB', userAgent: CHROME }), null)
expect('unknown country → NOT redirected (fail open)',
  decideNaRedirect({ path: '/web-design', country: '', userAgent: CHROME }), null)
expect('T1/Tor country → NOT redirected',
  decideNaRedirect({ path: '/web-design', country: 'T1', userAgent: CHROME }), null)

// --- US pages / shared pages → never redirected (no loops, no over-match) ---
expect('US human root / → NOT redirected',
  decideNaRedirect({ path: '/', country: 'US', userAgent: CHROME }), null)
expect('US human /services/web-design (US twin) → NOT redirected (no loop)',
  decideNaRedirect({ path: '/services/web-design', country: 'US', userAgent: CHROME }), null)
expect('US human /services/ecommerce-development (US hub, no trailing) → NOT redirected (no loop)',
  decideNaRedirect({ path: '/services/ecommerce-development', country: 'US', userAgent: CHROME }), null)
expect('US human /services/seo (US twin) → NOT redirected',
  decideNaRedirect({ path: '/services/seo', country: 'US', userAgent: CHROME }), null)
expect('US human /services/ai-agents (US twin) → NOT redirected',
  decideNaRedirect({ path: '/services/ai-agents', country: 'US', userAgent: CHROME }), null)
expect('US human /austin/ecommerce-development (US city) → NOT redirected',
  decideNaRedirect({ path: '/austin/ecommerce-development', country: 'US', userAgent: CHROME }), null)
expect('US human /austin/web-design (US city) → NOT redirected',
  decideNaRedirect({ path: '/austin/web-design', country: 'US', userAgent: CHROME }), null)
expect('US human /contact (shared) → NOT redirected',
  decideNaRedirect({ path: '/contact', country: 'US', userAgent: CHROME }), null)
expect('US human /api/notify-lead → NOT redirected (function passthrough)',
  decideNaRedirect({ path: '/api/notify-lead', country: 'US', userAgent: CHROME }), null)

// --- unit checks on helpers ---
expect('isExemptCrawler(Googlebot) = true', isExemptCrawler(GOOGLEBOT), true)
expect('isExemptCrawler(Chrome) = false', isExemptCrawler(CHROME), false)
expect('isExemptCrawler(empty) = false', isExemptCrawler(''), false)
expect('indiaTarget(/services/ecommerce-development) = null (hub not matched)',
  indiaTarget('/services/ecommerce-development'), null)

// --- isIndiaPath: drives the cache-stripping branch (must be true for every India cluster) ---
expect('isIndiaPath(/web-design/mumbai) = true', isIndiaPath('/web-design/mumbai'), true)
expect('isIndiaPath(/seo) = true', isIndiaPath('/seo'), true)
expect('isIndiaPath(/services/ecommerce-development/delhi) = true', isIndiaPath('/services/ecommerce-development/delhi'), true)
expect('isIndiaPath(/ai-seo) = true', isIndiaPath('/ai-seo'), true)
expect('isIndiaPath(/services/web-design) = false (US twin, keeps caching)', isIndiaPath('/services/web-design'), false)
expect('isIndiaPath(/) = false (root passes through)', isIndiaPath('/'), false)
expect('isIndiaPath(/api/notify-lead) = false (function passthrough)', isIndiaPath('/api/notify-lead'), false)

// ─── India visitors on US pages → India twin (added 2026-08-03) ───────────────
console.log('\nIndia-visitor mirror — cases:')

expect('IN human /services/web-design → /web-design',
  decideInRedirect({ path: '/services/web-design', country: 'IN', userAgent: CHROME }), '/web-design')
expect('IN human /services/seo → /seo',
  decideInRedirect({ path: '/services/seo', country: 'IN', userAgent: CHROME }), '/seo')
expect('IN human /services/ai-agents → /services/ai-agent-development',
  decideInRedirect({ path: '/services/ai-agents', country: 'IN', userAgent: CHROME }), '/services/ai-agent-development')
expect('IN human trailing slash normalised',
  decideInRedirect({ path: '/services/ai-seo/', country: 'IN', userAgent: CHROME }), '/ai-seo')
expect('country case-insensitive',
  decideInRedirect({ path: '/services/seo', country: 'in', userAgent: CHROME }), '/seo')

// Crawlers are never redirected, in either direction. Same reasoning as the NA rules:
// a redirected crawler deindexes the page it was trying to read.
expect('Googlebot on /services/seo from IN → NOT redirected',
  decideInRedirect({ path: '/services/seo', country: 'IN', userAgent: GOOGLEBOT }), null)
expect('GPTBot on /services/web-design from IN → NOT redirected',
  decideInRedirect({ path: '/services/web-design', country: 'IN', userAgent: GPTBOT }), null)

// US-only commerce pages have no India twin: an India visitor keeps the US page.
// This is the case Bhavesh actually hit; the footer region selector covers it.
expect('IN human /replatforming → NOT redirected (no India twin)',
  decideInRedirect({ path: '/replatforming', country: 'IN', userAgent: CHROME }), null)
expect('IN human /b2b-ecommerce → NOT redirected (no India twin)',
  decideInRedirect({ path: '/b2b-ecommerce', country: 'IN', userAgent: CHROME }), null)
// Deliberately NOT mirrored: the reverse would narrow the page. See US_TO_INDIA_RULES.
expect('IN human /services/ai-workflow-automation → NOT redirected (reverse would narrow)',
  decideInRedirect({ path: '/services/ai-workflow-automation', country: 'IN', userAgent: CHROME }), null)
expect('US human on a US page → NOT redirected',
  decideInRedirect({ path: '/services/seo', country: 'US', userAgent: CHROME }), null)
expect('unknown country → NOT redirected (fail open)',
  decideInRedirect({ path: '/services/seo', country: 'XX', userAgent: CHROME }), null)

// --- no redirect loop: the two directions must never bounce a visitor back ---
// An IN visitor sent /services/seo → /seo must then be served /seo, not sent back.
expect('LOOP CHECK: IN visitor landing on the India target is served, not redirected',
  decideGeoRedirect({ path: '/seo', country: 'IN', userAgent: CHROME }), null)
expect('LOOP CHECK: US visitor landing on the US target is served, not redirected',
  decideGeoRedirect({ path: '/services/web-design', country: 'US', userAgent: CHROME }), null)

// --- combined entry point routes both directions ---
expect('decideGeoRedirect US on India path → US target',
  decideGeoRedirect({ path: '/seo/mumbai', country: 'US', userAgent: CHROME }), '/services/seo')
expect('decideGeoRedirect IN on US path → India target',
  decideGeoRedirect({ path: '/services/seo', country: 'IN', userAgent: CHROME }), '/seo')
expect('decideGeoRedirect GB visitor → null (neither direction)',
  decideGeoRedirect({ path: '/services/seo', country: 'GB', userAgent: CHROME }), null)

// --- isGeoSensitivePath drives cache-stripping; must cover BOTH rule sets ---
expect('isGeoSensitivePath(/seo) = true (India cluster)', isGeoSensitivePath('/seo'), true)
expect('isGeoSensitivePath(/services/seo) = true (now has an India twin)', isGeoSensitivePath('/services/seo'), true)
expect('isGeoSensitivePath(/replatforming) = false (keeps edge caching)', isGeoSensitivePath('/replatforming'), false)
expect('isGeoSensitivePath(/) = false', isGeoSensitivePath('/'), false)
expect('usTarget(/replatforming) = null', usTarget('/replatforming'), null)

console.log('')
if (failures) { console.error(`❌ ${failures} test(s) failed`); process.exit(1) }
console.log('✅ all geo-redirect decision tests passed')
