#!/usr/bin/env node
/**
 * Generate branded case-study cards (hero fallback + OG share image) with
 * ImageMagick directly. No headless browser, no Next.js build, so it carries
 * none of the OOM risk `next dev`/`next build` has on this machine.
 *
 * Why this exists (2026-07-31): 6 case studies referenced `-hero.jpg` and
 * `-og.png` files under public/images/case-studies/ that were never created,
 * 404ing in production and breaking social-share previews. 3 of the 6 already
 * have a real client screenshot under public/images/portfolio/ (reused here
 * for the hero image); the other 3 have no real asset at all, so both files
 * fall back to the same generated card. Every stat/label on the card is
 * copied verbatim from the already-approved CaseStudy.headlineMetric in
 * src/data/case-studies/index.ts, nothing here is a new or invented number.
 *
 * Usage: node scripts/generate-case-study-cards.mjs
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'public/images/case-studies')
const PORTFOLIO_DIR = join(ROOT, 'public/images/portfolio')

const FONT = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
const CHARCOAL = '#0F0F12'
const ORANGE = '#F05A28'
const CREAM = '#FAFAF7'

// Stat + label are copied verbatim from each case study's `headlineMetric`
// in src/data/case-studies/index.ts. realHero points at an existing, already
//-shipped screenshot of the actual delivered client site.
const CARDS = [
  {
    slug: 'belle-maison-ecommerce-success',
    client: 'Belle Maison',
    category: 'E-Comm',
    stat: '$180K',
    label: 'Revenue in 120 Days',
    realHero: 'belle-maison.webp',
  },
  {
    slug: 'impulse-branding-migration',
    client: 'Impulse Branding',
    category: 'Corporate',
    stat: '$360K',
    label: 'Pipeline Influenced in 6 Months',
    realHero: 'impulse-branding.webp',
  },
  {
    slug: 'formative-concepts-bim',
    client: 'Formative Concepts',
    category: 'Corporate',
    stat: '5,000+',
    label: 'Monthly Global Visitors',
    realHero: 'formative-concepts.webp',
  },
  {
    slug: 'grofresh-manufacturing-erp',
    client: 'GroFresh Agro',
    category: 'Manufacturing',
    stat: '+70%',
    label: 'Operational Efficiency Gain',
    realHero: null,
  },
  {
    slug: 'fliying-pixel-agency',
    client: 'Fliying Pixel',
    category: 'Corporate',
    stat: '500+',
    label: 'Qualified Leads from Organic Traffic',
    realHero: null,
  },
  {
    slug: 'rukman-transport-logistics',
    client: 'Rukman Transport',
    category: 'Logistics',
    stat: '+300%',
    label: 'Organic Search Visibility Lift',
    realHero: null,
  },
]

/** Break a label onto 2 lines near its midpoint if it's likely to overflow. */
function wrap(text, max = 30) {
  if (text.length <= max) return text
  const mid = Math.floor(text.length / 2)
  let breakAt = text.lastIndexOf(' ', mid)
  if (breakAt === -1) breakAt = text.indexOf(' ', mid)
  if (breakAt === -1) return text
  return text.slice(0, breakAt) + '\n' + text.slice(breakAt + 1)
}

function renderCard(card, outPath) {
  const args = [
    '-size', '1200x630', `xc:${CHARCOAL}`,
    // top accent bar
    '-fill', ORANGE, '-draw', 'rectangle 0,0 1200,10',
    '-font', FONT,
    '-fill', ORANGE, '-pointsize', '28', '-gravity', 'NorthWest',
    '-annotate', '+70+70', `CASE STUDY   ${card.category.toUpperCase()}`,
    '-fill', CREAM, '-pointsize', '54', '-gravity', 'NorthWest',
    '-annotate', '+70+150', card.client,
    '-fill', ORANGE, '-pointsize', '128', '-gravity', 'NorthWest',
    '-annotate', '+70+360', card.stat,
    '-fill', '#D8D6D0', '-pointsize', '32', '-gravity', 'NorthWest',
    '-annotate', '+70+500', wrap(card.label),
    '-fill', ORANGE, '-pointsize', '24', '-gravity', 'SouthWest',
    '-annotate', '+70+56', 'FACTORYJET.COM',
    outPath,
  ]
  execFileSync('magick', args, { stdio: 'inherit' })
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

for (const card of CARDS) {
  const ogPath = join(OUT_DIR, `${card.slug}-og.png`)
  renderCard(card, ogPath)
  console.log(`✓ ${card.slug}-og.png`)

  const heroPath = join(OUT_DIR, `${card.slug}-hero.jpg`)
  if (card.realHero) {
    const src = join(PORTFOLIO_DIR, card.realHero)
    execFileSync('magick', [src, '-quality', '88', heroPath], { stdio: 'inherit' })
    console.log(`✓ ${card.slug}-hero.jpg (from real screenshot: ${card.realHero})`)
  } else {
    execFileSync('magick', [ogPath, '-quality', '88', heroPath], { stdio: 'inherit' })
    console.log(`✓ ${card.slug}-hero.jpg (generated card, no real asset exists)`)
  }
}

console.log(`\nDone. ${CARDS.length} case studies, ${CARDS.length * 2} files in ${OUT_DIR}`)
