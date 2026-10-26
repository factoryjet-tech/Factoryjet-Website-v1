/**
 * Test for the retired-URL fallback (GONE_RULES / goneTarget) in functions/_middleware.js.
 * No framework. Run with:  node scripts/test-gone-redirects.mjs  (exit 1 on any failure).
 *
 * Three checks:
 *   1. Known retired URLs from Search Console (2026-10-26) map where we expect.
 *   2. No live route in src/app matches a rule. A match would redirect a real page
 *      whenever a _redirects hop lands on it.
 *   3. Every rule target is a live route, so no rule creates a new 404 or a chain.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { goneTarget, GONE_RULES } from '../functions/_middleware.js'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const APP = path.join(ROOT, 'src/app')

let failures = 0
function expect(name, actual, expected) {
  if (actual === expected) { console.log(`  ✓ ${name}`); return }
  failures++
  console.error(`  ✗ ${name}\n      expected: ${JSON.stringify(expected)}\n      actual:   ${JSON.stringify(actual)}`)
}

// Routes from src/app: static ones exactly, dynamic ones ([slug]) as patterns.
const staticRoutes = new Set()
const dynamicRoutes = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) { walk(full); continue }
    if (entry.name !== 'page.tsx') continue
    const segs = path.relative(APP, dir).split(path.sep).filter((s) => s && !/^\(.*\)$/.test(s))
    const route = '/' + segs.join('/')
    if (segs.some((s) => s.startsWith('['))) {
      dynamicRoutes.push(new RegExp('^' + route.replace(/\[[^\]]+\]/g, '[^/]+') + '$'))
    } else {
      staticRoutes.add(route)
    }
  }
}
walk(APP)
const isRoute = (p) => staticRoutes.has(p) || dynamicRoutes.some((re) => re.test(p))

console.log('Retired-URL fallback — known Search Console 404s:')
const cases = {
  '/index.php': '/',
  '/home/': '/',
  '/post/using-data-driven-insights-to-supercharge-your-e-commerce-funnel': '/blog',
  '/india/pricing/': '/pricing',
  '/india/7-day-website-delivery/': '/web-design',
  '/wordpress-development/mumbai': '/wordpress-development',
  '/shopify-development/kochi': '/shopify-development',
  '/services/shopify-development/chandigarh': '/shopify-development',
  '/shopify-development/ecommerce-development': '/services/shopify-development',
  '/services/ecommerce-development/raleigh': '/raleigh/ecommerce-development',
  '/services/ecommerce-development/miami': '/services/ecommerce-development',
  '/cleveland/ecommerce-development/': '/services/ecommerce-development',
  '/services/ecommerce': '/services/ecommerce-development',
  '/web-design/nashville-tn': '/nashville/web-design',
  '/colorado-springs': '/colorado-springs/seo',
  '/arlington/web-design': '/arlington/seo',
  '/providence': '/providence/seo',
  '/sheffield/': '/uk/sheffield',
  '/manchester': '/uk/manchester',
  '/uk/liverpool/ai-seo': '/uk/liverpool',
  '/edinburgh': '/uk/edinburgh',
  '/uk/ecommerce': '/uk/ecommerce-development',
  '/uk/services': '/uk',
  '/blog/shopify-seo-audit-guide-uk': '/uk/shopify-seo',
  '/how-to-get-chatgpt-to-recommend-your-business-2026': '/blog/how-to-get-chatgpt-to-recommend-your-business-2026',
  '/au/services/ai': '/au/ai-development',
  '/au/services/website-development': '/au/small-business-web-design',
  // Junk URLs stay 404, which is the right answer for them.
  '/h74k/': null,
  '/html/head/title': null,
  '/products/': null,
  // Trailing-slash copies of _redirects sources are handled at runtime, not here.
  '/denver/': null,
}
for (const [from, to] of Object.entries(cases)) expect(`${from} → ${to}`, goneTarget(from), to)

console.log('\nNo live route matches a rule:')
let hits = 0
for (const route of staticRoutes) {
  const t = goneTarget(route)
  if (t) { hits++; failures++; console.error(`  ✗ live route ${route} would redirect to ${t}`) }
}
if (!hits) console.log(`  ✓ ${staticRoutes.size} static routes checked`)

console.log('\nEvery rule target is a live route:')
const targets = new Set(Object.values(cases).filter(Boolean))
for (const [, to] of GONE_RULES) if (!to.includes('$')) targets.add(to)
for (const city of ['lincoln', 'raleigh', 'portland', 'charlotte', 'nashville', 'denver']) targets.add(`/${city}/ecommerce-development`)
for (const city of ['arlington', 'colorado-springs', 'corpus-christi', 'huntington-beach', 'lakewood-ranch', 'providence']) targets.add(`/${city}/seo`)
for (const city of ['birmingham', 'leeds', 'liverpool', 'manchester', 'sheffield', 'edinburgh']) targets.add(`/uk/${city}`)
for (const t of targets) expect(`${t} exists`, isRoute(t), true)

console.log('')
if (failures) { console.error(`❌ ${failures} test(s) failed`); process.exit(1) }
console.log('✅ all retired-URL fallback tests passed')
