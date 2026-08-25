#!/usr/bin/env tsx
/**
 * Generate photoreal blog hero images via Runware, then write optimized WebP
 * into public/blog-images/.
 *
 * Usage:
 *   pnpm tsx scripts/generate-blog-hero-images.ts --only is-geo-replacing-seo-2026
 *   pnpm tsx scripts/generate-blog-hero-images.ts --all
 *   pnpm tsx scripts/generate-blog-hero-images.ts --all --model bfl:7@1
 *
 * Requires RUNWARE_API_KEY in .env.local.
 *
 * Prompt rules (deliberate, do not relax without asking):
 *  - No brand logos or trademarked marks (Walmart, Shopify, Google, etc).
 *  - No fabricated identifiable faces. People appear only as hands, or distant
 *    / turned-away figures, per the FactoryJet visual-asset policy.
 *  - No rendered text: image models garble lettering and it reads as AI slop.
 */
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'
import { config } from 'dotenv'

config({ path: '.env.local' })

const API_KEY = process.env.RUNWARE_API_KEY
if (!API_KEY) {
  console.error('RUNWARE_API_KEY missing from .env.local')
  process.exit(1)
}

const args = process.argv.slice(2)
const modelIdx = args.indexOf('--model')
const MODEL = modelIdx >= 0 ? args[modelIdx + 1] : 'bfl:7@1'
const onlyIdx = args.indexOf('--only')
const ONLY = onlyIdx >= 0 ? args[onlyIdx + 1] : null
const ALL = args.includes('--all')

// Shared photographic direction, appended to every prompt for a consistent set.
const STYLE =
  'shot on a full-frame camera with a 35mm lens, natural window light, shallow depth of field, ' +
  'true-to-life color, fine surface detail, subtle film grain, editorial commercial photography, ' +
  'photorealistic, hyper realistic, ultra detailed, 8k, sharp focus, professional color grading'

// FLUX.2 (bfl:7@1) is prompt-only and rejects `negativePrompt`, so exclusions are
// phrased positively and appended to the prompt instead.
const EXCLUSIONS =
  'Clean frame with no text, no lettering, no signage, no watermarks and no brand logos anywhere. ' +
  'Photographic realism only, not an illustration or 3d render.'

type Spec = { file: string; prompt: string; alt: string }

const SPECS: Spec[] = [
  {
    file: 'best-seo-agencies-usa',
    prompt:
      'A bright US agency boardroom prepared for a client review, a long walnut table with several empty ' +
      'chairs, one chair at the head turned slightly out as if someone just stood up, printed documents ' +
      'and a water glass at each place, tall windows with soft daylight, warm neutral cream and ' +
      'charcoal palette, no people',
    alt: 'A meeting room set up for an agency review with an empty chair at the head of the table, representing the process of shortlisting an SEO agency in the USA',
  },
  {
    file: 'best-seo-agencies-uk-2026',
    prompt:
      'A calm modern London office meeting room at mid morning, an empty glass conference table with ' +
      'open notebooks and a laptop, a large window overlooking a red brick and glass London street, ' +
      'muted warm neutral tones, cream and charcoal palette, no people',
    alt: 'A London agency meeting room set up for a client review, representing how UK SEO agencies are compared and shortlisted',
  },
  {
    file: 'best-ai-seo-agencies-uk-2026',
    prompt:
      'A tidy modern desk in a UK studio office, a laptop screen showing a soft blurred abstract dashboard, ' +
      'a ceramic coffee cup and a notebook beside it, warm morning light from a tall window, ' +
      'brick wall softly out of focus behind, cream and deep charcoal palette, no people',
    alt: 'A UK studio workspace with an analytics dashboard open on a laptop, representing AI SEO agency work in the UK',
  },
  {
    file: 'best-ai-seo-agencies-india-2026',
    prompt:
      'A bright contemporary office workspace in India at golden hour, a wooden desk with a laptop and ' +
      'a small potted plant, warm sunlight through a large window, a softly blurred modern Indian city ' +
      'skyline visible outside, warm cream and terracotta tones, no people',
    alt: 'A modern Indian office workspace at golden hour with a city skyline beyond the window, representing AI SEO agencies in India',
  },
  {
    file: 'best-geo-agencies-2026',
    prompt:
      'An overhead flat lay on a pale concrete desk surface, an open laptop, a printed document with ' +
      'soft unreadable blurred charts, a pen and a pair of glasses arranged neatly, cool soft daylight, ' +
      'muted cream and slate palette, minimal editorial composition, no people',
    alt: 'An overhead view of a desk with a laptop and printed performance reports, representing how generative engine optimization agencies are evaluated',
  },
  {
    file: 'best-ai-agent-development-companies-small-business-2026',
    prompt:
      'A small business back office, a laptop open on a wooden counter beside a card reader and a stack ' +
      'of shipping boxes, warm practical lighting, lived-in and real rather than staged, ' +
      'warm neutral palette, no people',
    alt: 'A small business back office with a laptop beside shipping boxes and a card reader, representing AI agent development for small companies',
  },
  {
    file: 'best-ai-for-ecommerce-2026',
    prompt:
      'A small ecommerce studio workspace, a laptop on a white desk surrounded by neatly arranged ' +
      'unbranded product boxes and a roll of packing tape, soft diffused daylight from the left, ' +
      'clean bright commercial photography, cream and soft grey palette, no people',
    alt: 'An ecommerce studio desk with a laptop surrounded by unbranded product packaging, representing AI tools used in a real online store',
  },
  {
    file: 'agentic-commerce-vs-traditional-ecommerce',
    prompt:
      'A still life on a pale table showing two objects side by side, a smartphone lying face up with a ' +
      'soft blurred product page on screen, and next to it a small sleek matte speaker device, ' +
      'clean minimal studio lighting, soft shadows, cream background, editorial product photography, no people',
    alt: 'A smartphone showing a product page beside a small voice device, representing the shift from traditional ecommerce browsing to agentic commerce',
  },
  {
    file: 'is-geo-replacing-seo-2026',
    prompt:
      'A quiet countryside road at soft overcast dawn that forks into two lanes and rejoins further ahead, ' +
      'seen from a low wide angle, damp asphalt, green hedgerows either side, muted natural British ' +
      'landscape tones, atmospheric and calm, no people, no vehicles, no signage',
    alt: 'A country road that forks into two lanes and rejoins further ahead, representing generative engine optimization building on traditional SEO rather than replacing it',
  },
  {
    file: 'local-seo-uk-small-businesses-map-pack',
    prompt:
      'A charming UK high street shopfront in the early morning, painted timber frontage with a striped ' +
      'awning and potted plants by the door, wet cobbles reflecting soft light, neighbouring shops ' +
      'softly out of focus, warm inviting natural tones, no people, no readable signage',
    alt: 'A UK high street shopfront on a quiet morning, representing a local small business competing for visibility in the Google Map Pack',
  },
  {
    file: 'shopify-website-cost-2026',
    prompt:
      'A designer desk mid project, a laptop showing a soft blurred online store layout, colour swatch ' +
      'cards and a notebook with pencil sketches of page wireframes spread beside it, warm afternoon ' +
      'light, cream and warm grey palette, shallow depth of field, no people',
    alt: 'A designer desk with wireframe sketches and colour swatches beside a laptop showing an online store layout, representing what goes into the cost of a Shopify build',
  },
  {
    file: 'how-to-sell-on-walmart-marketplace-2026',
    prompt:
      'Interior of a clean modern fulfilment warehouse, a persons hands holding a handheld barcode ' +
      'scanner over a plain unbranded cardboard box on a packing bench, rows of shelving softly out of ' +
      'focus behind, bright even industrial lighting, realistic working environment, hands only, no face',
    alt: 'Hands scanning a plain cardboard box at a warehouse packing bench, representing inventory and fulfilment work for selling on a large online marketplace',
  },
  {
    file: 'what-does-an-ai-automation-agency-do-uk',
    prompt:
      'A small UK office desk at dusk, a laptop left open showing a soft blurred workflow diagram, a ' +
      'desk lamp casting warm light, a mug and a closed notebook beside it, the room quiet and empty, ' +
      'warm amber and deep charcoal tones, calm atmospheric, no people',
    alt: 'A quiet UK office desk at dusk with a workflow running on an open laptop, representing automation that keeps working in the background',
  },
  {
    file: 'what-is-seo-small-business-2026',
    prompt:
      'A US small business owner desk in the late morning, an open laptop angled away showing a soft ' +
      'blurred page of search results, beside it a printed multi-page proposal document with ' +
      'unreadable blurred columns and a pen resting on it, a plain coffee cup to one side, ' +
      'natural light from a window on the left, lived-in and real rather than staged, ' +
      'warm cream and deep charcoal palette, no people',
    alt: 'A desk with a laptop showing search results beside a printed agency proposal, representing a business owner deciding what SEO actually buys',
  },
  {
    file: 'what-is-an-ai-agent-cost-2026',
    prompt:
      'A quiet modern office desk at mid morning, an open laptop showing a soft blurred sequence of ' +
      'task cards moving through columns, a closed notebook and a pen beside it, a second empty chair ' +
      'pushed in at the desk, natural light from a tall window, calm and uncluttered, ' +
      'warm cream and deep charcoal palette, no people',
    alt: 'An office desk with a laptop showing a workflow moving through stages, representing an AI agent doing work on its own',
  },
  {
    file: 'google-ads-cost-small-business-2026',
    prompt:
      'An overhead flat lay on a pale oak desk, a blank white sheet of paper bearing only a plain ' +
      'grey line chart that climbs left to right, the page completely empty of any title, heading, ' +
      'caption, axis label or writing of any kind, a plain pocket calculator, a pen and a white ' +
      'coffee cup arranged around it, no laptop and no keyboard in frame, cool even daylight, ' +
      'minimal editorial composition, muted cream and slate palette, no people',
    alt: 'An overhead view of a desk with a rising line chart printed on paper, a pocket calculator and a pen, representing the arithmetic behind a Google Ads budget',
  },
  {
    file: 'website-running-cost-per-month-2026',
    prompt:
      'A tidy home office desk in the early evening, an open laptop showing a soft blurred uptime ' +
      'dashboard with faint green status rows, a stack of printed invoices held under a small clip, ' +
      'a desk lamp casting warm light, the room quiet and empty, ' +
      'warm amber and deep charcoal tones, no people',
    alt: 'A home office desk at dusk with an uptime dashboard on a laptop beside a clipped stack of invoices, representing the recurring monthly cost of keeping a website running',
  },
  {
    file: 'amazon-seller-fees-100-dollar-sale-2026',
    prompt:
      'A small ecommerce packing bench, three plain unbranded brown shipping cartons of different ' +
      'sizes stacked beside a roll of packing tape and a postal scale, an open laptop to one side ' +
      'showing a soft blurred table of figures, bright diffused daylight from a window, ' +
      'practical and lived-in, warm cream and kraft brown palette, no people',
    alt: 'A packing bench with unbranded shipping cartons, a postal scale and a laptop showing a fee breakdown, representing what a marketplace keeps from each sale',
  },
]

async function generate(prompt: string): Promise<Buffer> {
  const taskUUID = crypto.randomUUID()
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { taskType: 'authentication', apiKey: API_KEY },
      {
        taskType: 'imageInference',
        taskUUID,
        positivePrompt: `${prompt}, ${STYLE}. ${EXCLUSIONS}`,
        width: 1344,
        height: 768,
        model: MODEL,
        numberResults: 1,
        outputFormat: 'PNG',
      },
    ]),
  })
  if (!res.ok) throw new Error(`Runware API ${res.status}: ${await res.text()}`)
  const data = await res.json()
  if (data.errors?.length) throw new Error(`Runware error: ${JSON.stringify(data.errors)}`)
  const result = data.data?.find((d: { taskUUID: string; imageURL?: string }) => d.taskUUID === taskUUID)
  if (!result?.imageURL) throw new Error(`No imageURL in response: ${JSON.stringify(data)}`)
  const imgRes = await fetch(result.imageURL)
  return Buffer.from(await imgRes.arrayBuffer())
}

async function main() {
  const targets = ONLY ? SPECS.filter((s) => s.file === ONLY) : ALL ? SPECS : []
  if (!targets.length) {
    console.error('Nothing to do. Pass --all, or --only <file-slug>. Available:')
    SPECS.forEach((s) => console.error(`  ${s.file}`))
    process.exit(1)
  }

  const outDir = join('public', 'blog-images')
  await mkdir(outDir, { recursive: true })
  console.log(`model=${MODEL}  count=${targets.length}\n`)

  for (const spec of targets) {
    process.stdout.write(`${spec.file} ... `)
    try {
      const buf = await generate(spec.prompt)
      const out = join(outDir, `${spec.file}.webp`)
      await sharp(buf).resize(1344, 768, { fit: 'cover' }).webp({ quality: 82 }).toFile(out)
      const { size } = await sharp(out).metadata().then(async () => {
        const fs = await import('node:fs/promises')
        return fs.stat(out)
      })
      console.log(`ok  (${Math.round(size / 1024)}KB)`)
    } catch (e) {
      console.log('FAILED')
      console.error(`  ${(e as Error).message}`)
    }
  }

  console.log('\nAlt text for each generated image (must match what was rendered):')
  targets.forEach((s) => console.log(`  ${s.file}\n    ${s.alt}`))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
