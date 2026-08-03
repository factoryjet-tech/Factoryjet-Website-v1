#!/usr/bin/env node
/**
 * Photoreal section imagery for the 2026-08 commerce pages (replatforming hub +
 * 6 spokes, /b2b-ecommerce, /ecommerce-for-manufacturers).
 *
 * POLICY (CLAUDE.md + visual-asset policy): AI-generated photorealistic PEOPLE
 * are banned. Every prompt below is an ENVIRONMENT or object scene. Hands at a
 * keyboard or a distant, out-of-focus silhouette are acceptable; a recognisable
 * face is not. Prompts carry explicit negatives to enforce that.
 *
 * Model: bfl:7@1 (FLUX.2) for photorealism. Runware is prompt-only, no img2img.
 * Output: 1280x800 -> webp q82, written to public/images/us/commerce/.
 *
 * Usage: node scripts/generate-commerce-page-images.mjs [pageKey]
 *        node scripts/generate-commerce-page-images.mjs          (all pages)
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const ENV_FILE = '.env.local'
if (existsSync(ENV_FILE)) {
  for (const line of (await readFile(ENV_FILE, 'utf8')).split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
const API_KEY = process.env.RUNWARE_API_KEY
if (!API_KEY) { console.error('RUNWARE_API_KEY missing from .env.local'); process.exit(1) }

const OUT_DIR = join('public', 'images', 'us', 'commerce')

// Shared style so the set reads as one system and sits on the cream (#FAFAF7)
// background without fighting the orange (#F05A28) accent.
// bfl:7@1 (FLUX.2) is PROMPT-ONLY: it rejects `negativePrompt` outright with
// invalidParameter. Constraints therefore have to be phrased positively inside
// the prompt itself ("completely unoccupied" rather than "no people").
const STYLE =
  'editorial photography, photorealistic, natural window light, shallow depth of field, ' +
  'warm neutral palette, muted earth tones with a subtle warm orange accent, clean composition, ' +
  'documentary realism, shot on 35mm film, high detail, ' +
  'the scene is completely unoccupied and empty of any person, ' +
  'plain unbranded surfaces with no logos and no readable text, ' +
  'straight photography with no illustration and no 3d rendering'

const PAGES = {
  replatforming: [
    ['migration-planning', 'An empty modern office desk with two large monitors side by side, one showing a legacy admin interface and one showing a clean modern storefront layout, printed URL mapping spreadsheets fanned across the desk, morning light'],
    ['cutover-night', 'A quiet operations room at night, a wall of muted dashboards, a single desk lamp, coffee cup, notebook open with a hand-drawn cutover checklist, calm and controlled atmosphere'],
    ['warehouse-continuity', 'A tidy fulfilment warehouse aisle with labelled shelving and stacked cartons, a barcode scanner resting on a packing bench, daylight from high windows, no workers visible'],
  ],
  'magento-to-shopify': [
    ['legacy-stack', 'A developer workstation with an ultrawide monitor showing dense code in a dark editor, a second screen with a product catalogue grid, mechanical keyboard, notebook with architecture sketches, late afternoon light'],
    ['catalog-attributes', 'A close overhead shot of printed product specification sheets and attribute tables spread on a wooden desk, a pencil and ruler resting on top, warm daylight'],
    ['enterprise-retail', 'A modern enterprise retail operations office, empty glass meeting room with a whiteboard covered in migration flow diagrams, plants, soft daylight'],
  ],
  'woocommerce-to-shopify': [
    ['packing-bench', 'A small business packing bench with kraft boxes, tissue paper, tape dispenser and a laptop showing an order list, warm morning light through a window, no people'],
    ['plugin-sprawl', 'An overhead flat lay of a cluttered desk with a laptop, sticky notes, tangled cables and several external drives, representing accumulated complexity, natural light'],
    ['subscription-box', 'A neat row of identical subscription boxes ready for dispatch on a wooden table, labels facing forward, soft daylight, minimal styling'],
  ],
  'squarespace-to-shopify': [
    ['product-styling', 'A minimal product photography setup on a light table, ceramic homeware pieces arranged for a shoot, softbox light, clean pale background'],
    ['boutique-counter', 'An empty boutique retail counter with a tablet point of sale, folded textiles and a small plant, bright airy interior, no people'],
    ['brand-archive', 'An overhead shot of printed lookbook pages and colour swatches fanned across a pale desk, scissors and a pencil, natural light'],
  ],
  'wix-to-shopify': [
    ['small-shop', 'A small independent shop interior at opening time, shelves neatly stocked, a laptop open on the counter, warm daylight through the shopfront, no people'],
    ['rebuild-desk', 'A designer desk with a tablet showing a wireframe grid, printed page layouts pinned to a board behind, pencils and a ruler, clean bright workspace'],
    ['stock-shelf', 'Close view of neatly organised retail stock on shelving with small handwritten price cards, shallow depth of field, warm light'],
  ],
  'wordpress-to-shopify': [
    ['editorial-desk', 'An editorial writing desk with printed article proofs marked in red pencil, a laptop showing a long text document, coffee cup, stacked reference books, warm lamp light'],
    ['content-archive', 'A wall of neatly labelled archive boxes and binders in a bright office, representing a large content library, daylight'],
    ['hybrid-architecture', 'Two laptops side by side on a clean desk, one showing a long-form article layout and one showing a product page, notebook between them with a hand-drawn diagram'],
  ],
  'salesforce-commerce-cloud-to-shopify-plus': [
    ['enterprise-war-room', 'A large empty corporate meeting room with a long table, several monitors on the wall showing muted dashboards, glass walls, city light outside, no people'],
    // NOTE: the original prompt here asked for a hand-drawn whiteboard diagram in
    // sharp focus and FLUX rendered the labels as garbled pseudo-words
    // ("TNEGRATION", "REROTICATION"), which reads instantly as AI-generated.
    // Rule learned: never make legible text the sharp-focus subject. Text that is
    // small, distant, or out of focus is fine. This replacement conveys
    // "integration" through cabling instead of writing.
    ['integration-map', 'A neatly organised network rack with colour-coded patch cables running in ordered bundles, soft equipment indicator lights, clean quiet data room, shallow depth of field'],
    ['multi-market', 'An overhead shot of a desk with printed regional catalogue pages and a world map notebook, several currency price lists, pen resting on top'],
  ],
  'headless-commerce': [
    ['storefront-build', 'A front-end developer workstation with a large monitor showing a component-based storefront layout in a browser and a second screen with a terminal running a build, notebook with a wireframe sketch, evening office light'],
    ['api-layer', 'A close overhead shot of a desk with a tablet showing a clean API response view, a printed architecture sketch beside it, pen resting on top, soft daylight'],
    ['speed-lab', 'A minimal desk with a laptop showing a performance waterfall chart and a stopwatch beside the trackpad, clean bright workspace'],
  ],
  'commerceflo': [
    ['unified-engine', 'A wide clean desk with three screens side by side showing a storefront, a marketplace listing grid, and a retail point of sale, one shared inventory figure visible across them, calm modern office'],
    ['channel-floor', 'A brand operations room with a wall of neatly organised product samples on shelving and a single desk with a monitor, warm daylight, unoccupied'],
    ['stock-truth', 'A close shot of a warehouse tablet mounted on a shelving upright showing a simple stock count, labelled bins either side, bright industrial light'],
  ],
  'b2b-ecommerce': [
    ['trade-counter', 'A wholesale trade counter with an order terminal, stacked catalogues and a clipboard, industrial shelving behind, daylight from high windows, no people'],
    ['pallet-aisle', 'A distribution warehouse aisle with wrapped pallets and clear location labels, forklift parked at the end, bright overhead light, no workers'],
    ['erp-desk', 'An office desk with a monitor showing a dense order and inventory table, printed purchase orders in a tray, calculator and pen, calm daylight'],
  ],
  'ecommerce-for-manufacturers': [
    ['factory-floor', 'A clean modern manufacturing floor with CNC machinery and organised part bins, no operators visible, industrial daylight, muted palette'],
    ['parts-bins', 'Close overhead view of labelled metal parts organised in compartment trays, calipers and a technical drawing beside them, workshop light'],
    ['dealer-portal', 'A dealer trade counter with a monitor showing a parts catalogue grid, printed spec sheets and a technical binder open beside it, warm daylight'],
  ],
}

async function generate(prompt) {
  const taskUUID = crypto.randomUUID()
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { taskType: 'authentication', apiKey: API_KEY },
      {
        taskType: 'imageInference',
        taskUUID,
        positivePrompt: `${prompt}. ${STYLE}`,
        width: 1280,
        height: 800,
        model: 'bfl:7@1',
        numberResults: 1,
      },
    ]),
  })
  if (!res.ok) throw new Error(`Runware ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = await res.json()
  const hit = data.data?.find((d) => d.taskUUID === taskUUID)
  if (!hit?.imageURL) throw new Error(`no imageURL: ${JSON.stringify(data).slice(0, 300)}`)
  return Buffer.from(await (await fetch(hit.imageURL)).arrayBuffer())
}

const only = process.argv[2]
const targets = only ? { [only]: PAGES[only] } : PAGES
if (only && !PAGES[only]) { console.error(`unknown page: ${only}`); process.exit(1) }

await mkdir(OUT_DIR, { recursive: true })
let ok = 0, fail = 0
for (const [page, shots] of Object.entries(targets)) {
  for (const [slug, prompt] of shots) {
    const base = `${page}-${slug}`
    const webp = join(OUT_DIR, `${base}.webp`)
    if (existsSync(webp)) { console.log(`  skip (exists) ${base}`); continue }
    try {
      const buf = await generate(prompt)
      const png = join(OUT_DIR, `${base}.png`)
      await writeFile(png, buf)
      execFileSync('cwebp', ['-q', '82', '-quiet', png, '-o', webp])
      execFileSync('rm', [png])
      ok++
      console.log(`  ok   ${base}.webp`)
    } catch (e) {
      fail++
      console.log(`  FAIL ${base}: ${String(e.message).slice(0, 140)}`)
    }
  }
}
console.log(`\ndone: ${ok} generated, ${fail} failed -> ${OUT_DIR}`)
