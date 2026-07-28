#!/usr/bin/env tsx
/**
 * Generate the missing UK og:image set and a couple of stray service photos.
 *
 * Usage:
 *   pnpm tsx scripts/generate-og-images.ts --all
 *   pnpm tsx scripts/generate-og-images.ts --only uk/seo-og
 *
 * Context (2026-07-28): an asset audit found every UK service and city page
 * pointing at an og:image that 404s, so each UK share rendered a blank card.
 * These are FactoryJet's own service pages, so generic representative imagery
 * is appropriate. Client case-study imagery is deliberately NOT in this file:
 * those pages carry real client names, testimonials and revenue figures, and a
 * generated image there could be read as evidence of the client's actual work.
 *
 * Same prompt rules as scripts/generate-blog-hero-images.ts: no brand logos, no
 * fabricated identifiable faces, no rendered text. FLUX.2 is prompt-only, so
 * exclusions are phrased positively rather than via negativePrompt.
 *
 * og:image is 1200x630, the standard Open Graph ratio.
 */
import { mkdir, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
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

const STYLE =
  'shot on a full-frame camera with a 35mm lens, natural light, shallow depth of field, ' +
  'true-to-life colour, fine surface detail, editorial commercial photography, photorealistic, ' +
  'hyper realistic, ultra detailed, sharp focus, professional colour grading'

const EXCLUSIONS =
  'Clean frame with no text, no lettering, no signage, no watermarks and no brand logos anywhere. ' +
  'Photographic realism only, not an illustration or 3d render.'

type Spec = { out: string; prompt: string }

const SPECS: Spec[] = [
  // ── UK service pages ──────────────────────────────────────────────────────
  {
    out: 'images/uk/seo-og.webp',
    prompt:
      'A bright UK agency office, a desk with an open laptop showing a soft blurred line graph trending ' +
      'upward, a notebook and pen beside it, tall sash window with soft London daylight, ' +
      'muted cream and charcoal palette, no people',
  },
  {
    out: 'images/uk/ai-seo-og.webp',
    prompt:
      'A modern UK workspace at blue hour, a laptop glowing softly on a walnut desk showing an ' +
      'indistinct analytics panel, a warm desk lamp to one side, exposed brick wall behind softly out ' +
      'of focus, deep charcoal and warm amber tones, no people',
  },
  {
    out: 'images/uk/web-design-og.webp',
    prompt:
      'A UK design studio desk from above, paper wireframe sketches, a colour swatch fan, a pencil and ' +
      'a tablet showing a soft blurred layout, clean pale oak surface, bright diffused daylight, ' +
      'cream and slate palette, no people',
  },
  {
    out: 'images/uk/ecommerce-development-og.webp',
    prompt:
      'A small UK ecommerce operation, plain unbranded parcels stacked neatly beside an open laptop on ' +
      'a workbench, a roll of packing tape and a label printer, warm practical light from a window, ' +
      'realistic working environment, no people',
  },
  {
    out: 'images/uk/ecommerce-seo-og.webp',
    prompt:
      'A tidy retail stockroom corner in the UK, a laptop propped on a shelf showing a soft blurred ' +
      'performance chart, plain cardboard boxes and folded garments nearby, soft natural light, ' +
      'warm neutral tones, no people',
  },
  {
    out: 'images/uk/local-seo-og.webp',
    prompt:
      'A UK village high street at golden hour seen from across the road, a row of small independent ' +
      'shopfronts with awnings and flower boxes, warm low sunlight on brick, gentle depth of field, ' +
      'no people, no readable signage',
  },
  {
    out: 'images/uk/seo-audit-og.webp',
    prompt:
      'An overhead flat lay on a pale desk, a printed report with soft unreadable blurred charts, a pair ' +
      'of glasses, a fountain pen and a cup of tea arranged neatly, cool soft daylight, ' +
      'minimal editorial composition, muted cream and slate palette, no people',
  },
  {
    out: 'images/uk/shopify-development-og.webp',
    prompt:
      'A developer workspace in a UK studio, two monitors showing soft blurred code and a store layout, ' +
      'a mechanical keyboard and a mug on a dark wood desk, warm evening light, ' +
      'deep charcoal and warm amber palette, no people',
  },
  {
    out: 'images/uk/shopify-seo-og.webp',
    prompt:
      'A product photography corner in a small UK studio, an unbranded ceramic product on a lit backdrop ' +
      'with a laptop just visible to one side showing a soft blurred chart, clean bright studio light, ' +
      'cream and soft grey palette, no people',
  },
  {
    out: 'images/uk/ai-agents-og.webp',
    prompt:
      'A quiet UK office at dusk, an empty desk with a laptop left open running a soft indistinct ' +
      'process on screen, warm desk lamp, a closed notebook and a cold mug of tea, ' +
      'calm atmospheric, warm amber against deep charcoal, no people',
  },
  {
    out: 'images/uk/london-seo-og.webp',
    prompt:
      'A London office interior looking out through a tall window onto a classic red brick and glass ' +
      'street scene, a desk with a laptop in soft foreground blur, overcast London daylight, ' +
      'muted cool tones with warm interior light, no people',
  },
  {
    out: 'images/uk/london/web-design-og.webp',
    prompt:
      'A creative studio in a converted London warehouse, exposed brick and steel beams, a long shared ' +
      'desk with a tablet showing soft blurred design work, large industrial windows, ' +
      'warm natural light, cream and charcoal palette, no people',
  },

  // ── Stray service photos ──────────────────────────────────────────────────
  {
    out: 'images/services/card-automation.webp',
    prompt:
      'A close up of a laptop screen on a dark desk showing a soft out of focus flowchart of connected ' +
      'nodes, warm rim light from a desk lamp, shallow depth of field, ' +
      'deep charcoal with warm amber accents, no people',
  },
  {
    out: 'images/web-design-stats-photo.webp',
    prompt:
      'A designer at a bright desk seen from behind over the shoulder, out of focus, working on a large ' +
      'monitor showing a soft blurred website layout, plants and daylight in the room, ' +
      'warm cream and soft green palette, face not visible',
  },
]

async function generate(prompt: string, width: number, height: number): Promise<Buffer> {
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
        width,
        height,
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
  const targets = ONLY ? SPECS.filter((s) => s.out.includes(ONLY)) : ALL ? SPECS : []
  if (!targets.length) {
    console.error('Nothing to do. Pass --all, or --only <path-fragment>. Available:')
    SPECS.forEach((s) => console.error(`  ${s.out}`))
    process.exit(1)
  }
  console.log(`model=${MODEL}  count=${targets.length}\n`)

  for (const spec of targets) {
    process.stdout.write(`${spec.out} ... `)
    try {
      // og:image is 1200x630. Request 1216x640 (multiple of 64) then resize.
      const buf = await generate(spec.prompt, 1216, 640)
      const outPath = join('public', spec.out)
      await mkdir(dirname(outPath), { recursive: true })
      await sharp(buf).resize(1200, 630, { fit: 'cover' }).webp({ quality: 82 }).toFile(outPath)
      const { size } = await stat(outPath)
      console.log(`ok  (${Math.round(size / 1024)}KB)`)
    } catch (e) {
      console.log('FAILED')
      console.error(`  ${(e as Error).message}`)
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
