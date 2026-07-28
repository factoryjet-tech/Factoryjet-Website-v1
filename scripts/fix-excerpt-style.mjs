#!/usr/bin/env node
/**
 * One-off sweep: remove em dashes and FactoryJet's own quoted prices from blog
 * post EXCERPT fields.
 *
 * Why excerpts specifically: an excerpt is rendered on the /blog index, in the
 * related-posts block of every post that links to it, and in card listings. So
 * one bad excerpt contaminates dozens of pages, including clean ones. A new,
 * em-dash-free post was rendering 4 em dashes purely from a neighbour's excerpt.
 *
 * What counts as a violation, per the pattern set in b557e91:
 *   - em dash (U+2014), always. Replaced contextually with a comma, colon, or
 *     parentheses, never blindly.
 *   - FactoryJet's OWN price. Third-party and market ranges are KEPT: b557e91
 *     deliberately retained competitors' published rates while stripping ours,
 *     and on a cost-guide post the market range is the whole point.
 *
 * Edits are scoped to the excerpt span only, and each is an exact-substring
 * replacement that must match once, so a silent miss fails loudly.
 *
 * Usage: node scripts/fix-excerpt-style.mjs [--dry]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DRY = process.argv.includes('--dry')
const DIR = 'src/lib/legacy-pages/Blog/posts'

/** file -> [[exact old substring, replacement], ...] applied inside the excerpt only */
const EDITS = {
  'ai-agents-business-operations-uk-smbs-2026.tsx': [['workflows—cutting', 'workflows, cutting']],
  'ai-agents-small-business-usa-2026.tsx': [['experimental — they are', 'experimental. They are']],
  'austin-ecommerce-checkout-optimization-2026.tsx': [['weekend crowds — and then', 'weekend crowds, and then']],
  'best-ai-agent-development-companies-small-business.tsx': [
    ['autonomously — qualifying leads, booking appointments, answering support tickets — without', 'autonomously (qualifying leads, booking appointments, answering support tickets) without'],
  ],
  'best-ecommerce-agency-small-business-australia-2026.tsx': [
    ['full payment integration for under £5,000. FactoryJet builds', 'full payment integration on a clear fixed scope. FactoryJet builds'],
  ],
  'best-ecommerce-platform-tampa-boutiques-dtc-2026.tsx': [
    ['strange intersection — snowbird', 'strange intersection: snowbird'],
    ['brands in 2026 — Shopify', 'brands in 2026: Shopify'],
  ],
  'best-geo-agencies.tsx': [['questions directly — without', 'questions directly, without']],
  'best-web-design-agencies-small-business-2026.tsx': [
    ['web design—AI chatbots, headless CMS, 90+ Lighthouse scores—at', 'web design (AI chatbots, headless CMS, 90+ Lighthouse scores) at'],
  ],
  'best-web-design-agency-us-small-business-2026.tsx': [['client references — not just', 'client references, not just']],
  'best-web-design-companies-small-business-australia.tsx': [['technical quality—with prices', 'technical quality, with prices']],
  'boise-shopify-development-guide-idaho-small-business-2026.tsx': [
    ['Mountain West — an outdoor-recreation', 'Mountain West: an outdoor-recreation'],
    ['Shopify build in 2026 — from Treasure Valley', 'Shopify build in 2026, from Treasure Valley'],
  ],
  'custom-online-store-development-uk-smbs-2026.tsx': [
    ['e-commerce features—multi-currency, B2B workflows, AI personalisation—at', 'e-commerce features (multi-currency, B2B workflows, AI personalisation) at'],
  ],
  'custom-web-development-vs-wordpress-us-small-business-2026.tsx': [
    ["good reason — it's fast", "good reason: it is fast"],
  ],
  'ecommerce-development-denver-co-small-business.tsx': [
    ['lifestyle market — but local', 'lifestyle market, but local'],
    ['Denver ecommerce store for $2,499 in 7 days', 'Denver ecommerce store in 7 days'],
  ],
  'evaluate-web-design-agency-us-smbs-2026.tsx': [['client outcomes—not portfolio', 'client outcomes, not portfolio']],
  'how-to-build-online-store-uk-smb-guide-2026.tsx': [['and launch—with real costs', 'and launch, with real costs']],
  'nyc-b2b-corporate-web-design-guide-2026.tsx': [['is a problem — not a feature', 'is a problem, not a feature']],
  'raleigh-shopify-training-support-triangle-nc-2026.tsx': [['Shopify-led DTC brands — a high-income', 'Shopify-led DTC brands: a high-income']],
  'sell-ai-automation-services-uk-agency-playbook-2026.tsx': [['not a tech vendor—focusing', 'not a tech vendor, focusing']],
  'shopify-store-setup-us-small-business-7-days.tsx': [
    ['why FactoryJet delivers fully optimized Shopify stores for $2,499 — complete with Lighthouse 100/100 and full product setup.', 'why a properly run build still ships with Lighthouse 100/100 and full product setup.'],
  ],
  'shopify-vs-custom-website-us-small-business-2026.tsx': [['correct decision — with real costs', 'correct decision, with real costs']],
  'shopify-website-cost.tsx': [['by project type — verified', 'by project type, verified']],
  'web-design-charlotte-nc-small-business-2026.tsx': [['fastest-growing metros — where the finance', 'fastest-growing metros, where the finance']],
  'web-design-denver-co-small-business-2026.tsx': [
    ['wellness cultures collide — and where', 'wellness cultures collide, and where'],
    ['how to get a 7-day website at $1,999.', 'how to get a professional site built in 7 days.'],
  ],
  'web-design-nashville-tn-small-business-2026.tsx': [['compete hard online — and where', 'compete hard online, and where']],
  'webflow-vs-wordpress-us-small-business-2026.tsx': [
    ['zero plugin chaos — but it caps out', 'zero plugin chaos, but it caps out'],
    ["world's largest plugin ecosystem — but you own", "world's largest plugin ecosystem, but you own"],
  ],
  'website-cost-small-business-usa-2026.tsx': [
    ['every cost tier—DIY builders, freelancers, domestic agencies, and offshore teams—so', 'every cost tier (DIY builders, freelancers, domestic agencies, and offshore teams) so'],
  ],
  'website-development-cost-india-2026.tsx': [['breakdown available — covering', 'breakdown available, covering']],
  'website-redesign-cost-us-small-business-2026.tsx': [
    ['redesigns in 2026 — but the price range', 'redesigns in 2026, but the price range'],
    ['how to get a Lighthouse 100/100 redesign starting at $1,999.', 'how to get a Lighthouse 100/100 redesign without overpaying.'],
  ],
}

const EXCERPT_RE = /^(\s*excerpt:\s*)([\s\S]*?)(,\n\s*(?:category|author|slug|date|readTime|imageUrl|meta):)/m

let changed = 0
let failed = 0

for (const [file, edits] of Object.entries(EDITS)) {
  const path = join(DIR, file)
  const src = readFileSync(path, 'utf8')
  const m = src.match(EXCERPT_RE)
  if (!m) {
    console.error(`✖ ${file}: no excerpt field found`)
    failed++
    continue
  }
  let excerpt = m[2]
  const before = excerpt
  for (const [oldStr, newStr] of edits) {
    const count = excerpt.split(oldStr).length - 1
    if (count !== 1) {
      console.error(`✖ ${file}: expected exactly 1 match, found ${count} for: ${oldStr.slice(0, 60)}`)
      failed++
      continue
    }
    excerpt = excerpt.replace(oldStr, newStr)
  }
  if (excerpt === before) continue
  if (excerpt.includes('—')) {
    console.error(`✖ ${file}: em dash still present after edits`)
    failed++
    continue
  }
  const out = src.replace(EXCERPT_RE, (_all, a, _b, c) => `${a}${excerpt}${c}`)
  if (!DRY) writeFileSync(path, out)
  changed++
  console.log(`${DRY ? 'would fix' : 'fixed'}  ${file}`)
}

console.log(`\n${DRY ? 'would change' : 'changed'}: ${changed}, failed: ${failed}`)
if (failed) process.exit(1)
