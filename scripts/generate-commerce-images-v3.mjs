#!/usr/bin/env node
/**
 * Commerce section imagery, v3 (2026-08-03). Regenerates all 27 `.pp-figband`
 * images across the 9 commerce pages.
 *
 * MODEL: openai:gpt-image@2 (GPT Image 2), chosen by measured bake-off, not
 * assumption. scripts/runware-model-bakeoff.mjs ran one identical prompt across
 * four frontier models. Result:
 *   GPT Image 2      correct hands, flawless UI text            <- winner
 *   Nano Banana 2    correct hands, good UI text                 strong second
 *   Seedream 5.0 Pro malformed hands                             reject
 *   FLUX.2 [max]     malformed hand, pseudo-text in nav          reject (was v1/v2)
 *
 * WHY v1 LOOKED BAD: the v1 style string asked for exactly the defect that was
 * later reported. It read "warm neutral palette, muted earth tones, shallow depth
 * of field, shot on 35mm film, the scene is completely unoccupied and empty of any
 * person". Muted + shallow DOF + unoccupied gives dim, soft, empty rooms.
 *
 * FILENAMES ARE DELIBERATELY UNCHANGED. Every name below already appears in the
 * page markup, so regenerating in place needs zero .tsx edits and cannot create a
 * missing-image 404.
 *
 * Screens still avoid dense body text. GPT Image 2 renders short UI labels
 * ("SHOP ALL", "Men / Women / Sale") correctly, but paragraphs of small type
 * remain the highest-risk thing to ask for in any generated image.
 *
 * People are permitted (CLAUDE.md ban lifted 2026-08-03). Every image is still
 * reviewed for hand and face artifacts before it ships.
 *
 * Usage:
 *   node scripts/generate-commerce-images-v3.mjs            all 27
 *   node scripts/generate-commerce-images-v3.mjs <substr>   only matching names
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
const MODEL = 'openai:gpt-image@2'

const STYLE =
  'Bright high-key commercial photography. Clean white and very light grey environment, ' +
  'large sunlit windows, white walls, abundant soft diffused daylight. ' +
  'Crisp tack-sharp focus throughout the frame with deep depth of field. ' +
  'Airy, open, optimistic and confident mood. Accurate natural skin tones. ' +
  'Hands anatomically correct with exactly five natural fingers in relaxed natural poses. ' +
  'Exactly one warm orange object in frame as the only strong colour accent. ' +
  'Ultra detailed, professional colour grading, photorealistic, no illustration.'

/* Short UI labels only. Never paragraphs.
 *
 * The store name is forced to an invented word. GPT Image 2 renders brand marks
 * legibly, and left to itself it reaches for real retailers: one generation came
 * back with "EVERLANE" across the storefront header. On a page about storefronts
 * we build, a real brand reads as a client claim and puts someone else's
 * trademark in our marketing. Always pin an invented name. */
const SHOP = 'the screen shows a clean modern e-commerce store: a large grid of colourful ' +
  'clothing product photographs, big blocks of solid colour, generous white space, and only very short ' +
  'menu labels such as "Shop", "New", "Sale". The store is named with the invented word ' +
  '"NORVELL" and no real-world brand name appears anywhere in the image'

/** [filename (must match page markup), scene] */
const IMAGES = [
  // /replatforming
  ['replatforming-migration-planning', `Two colleagues smiling at a bright white desk comparing two large monitors side by side, ${SHOP}, one gestures at a screen with an open relaxed hand, an orange notebook on the desk`],
  ['replatforming-warehouse-continuity', 'A cheerful warehouse worker in a light grey polo smiling at camera holding a barcode scanner, spotless bright modern fulfilment centre, white shelving, neat plain cartons, huge skylights, one orange safety marker'],
  ['replatforming-cutover-night', 'A calm confident operations manager smiling at a clean white standing desk, one large monitor showing a simple green all-clear status dashboard with large plain tiles and no small writing, bright open-plan office, green plants, an orange coffee mug'],

  // /replatforming/magento-to-shopify
  ['magento-to-shopify-legacy-stack', `A smiling developer in a light blue shirt sitting upright at a bright white desk with two monitors, ${SHOP}, sunlit white office, an orange plant pot beside the keyboard`],
  ['magento-to-shopify-catalog-attributes', 'A clean overhead flat lay on a pure white surface: neatly arranged colourful folded clothing samples in rows, a tablet showing a simple grid of product photographs, a pencil and a small orange ruler placed precisely, bright even studio lighting'],
  ['magento-to-shopify-enterprise-retail', 'Four colleagues laughing together around a bright white meeting table in a glass-walled room, a large wall screen showing a simple colourful product grid, white walls, abundant daylight, one orange chair among white ones'],

  // /replatforming/woocommerce-to-shopify
  ['woocommerce-to-shopify-plugin-sprawl', 'A cheerful person at a tidy bright white desk arranging colourful sticky notes into neat columns on a clean white wall, sunlit modern office, sharp focus, an orange marker in hand'],
  ['woocommerce-to-shopify-subscription-box', 'A smiling small business owner placing a folded garment into a white subscription box at a spotless white bench, neat stacks of white boxes and tissue paper, bright airy studio, an orange ribbon spool'],
  ['woocommerce-to-shopify-packing-bench', 'A smiling packer sealing a white shipping box at an immaculate white packing bench, neat rows of parcels ready to ship, bright daylight studio, orange tape dispenser'],

  // /replatforming/squarespace-to-shopify
  ['squarespace-to-shopify-boutique-counter', 'A friendly boutique owner smiling behind a clean white retail counter, a tablet point of sale on the counter, neatly folded colourful clothing on white shelving behind, big bright shopfront windows, an orange shopping bag on the counter'],
  ['squarespace-to-shopify-product-styling', 'A smiling product photographer styling a folded knitwear item on a pure white sweep in a bright photo studio, softbox lighting, a camera on a tripod, an orange colour reference card on the table'],
  ['squarespace-to-shopify-brand-archive', 'A cheerful content editor smiling at a bright white desk with a laptop open beside neatly arranged printed lookbook pages, white studio, plants, an orange bookmark'],

  // /replatforming/wix-to-shopify
  ['wix-to-shopify-small-shop', 'A smiling independent shop owner standing confidently in her bright white small retail space, neatly arranged colourful products on white shelves, large sunny window, an orange stool'],
  ['wix-to-shopify-rebuild-desk', `A smiling designer at a bright white desk sketching a simple wireframe on paper beside a large monitor, ${SHOP}, sunlit white studio, an orange pen`],
  ['wix-to-shopify-stock-shelf', 'A cheerful stockroom assistant smiling while checking neatly boxed inventory on clean white shelving, bright well-lit stockroom, tidy labelled plain cartons, an orange clipboard'],

  // /replatforming/wordpress-to-shopify
  ['wordpress-to-shopify-editorial-desk', 'A smiling editor at a bright white desk with a large monitor showing a clean magazine-style article layout with a big photograph and only a short headline, sunlit white office, an orange notebook'],
  ['wordpress-to-shopify-content-archive', 'A smiling librarian-like content manager arranging neatly labelled white archive boxes on clean white shelving, bright airy room, large windows, one orange box among white ones'],
  // The first generation drew "INPUT -> OUTPUT", which is legible but says nothing
  // about the caption (WordPress kept for content, Shopify running commerce). The
  // box labels are now pinned to the actual concept.
  ['wordpress-to-shopify-hybrid-architecture', 'Two colleagues smiling as they draw a simple clean diagram on a large glass whiteboard in a bright white office. The diagram is exactly two hand-drawn rectangles side by side joined by one arrow: the left box is labelled "CONTENT" and the right box is labelled "COMMERCE", with no other writing anywhere on the glass. Big windows, an orange marker in hand'],

  // /replatforming/salesforce-commerce-cloud-to-shopify-plus
  ['salesforce-commerce-cloud-to-shopify-plus-enterprise-war-room', 'Five smiling professionals collaborating around a large bright white conference table, a wall screen showing a simple clean timeline of large plain blocks with no small writing, glass walls, abundant daylight, one orange folder on the table'],
  ['salesforce-commerce-cloud-to-shopify-plus-integration-map', 'A smiling solutions architect at a bright white desk connecting simple labelled cards into a clean flow on a white wall, sunlit modern office, an orange connector card'],
  ['salesforce-commerce-cloud-to-shopify-plus-multi-market', 'A smiling team of three around a bright white desk with a large monitor showing a simple world map with a few clean location pins and no small writing, white walls, big windows, an orange desk globe'],

  // /headless-commerce
  // No score, no numerals, no chart. A rendered "98" reads as a claimed client
  // result, and PRODUCT.md forbids fabricated metrics. Speed is carried by the
  // stopwatch and the storefront instead. Do not reintroduce a number here.
  ['headless-commerce-speed-lab', 'A smiling front-end engineer at a bright white desk looking pleased at a large monitor showing a clean modern storefront page with one big product photograph and a short headline, a large orange stopwatch resting prominently on the white desk beside the keyboard, sunlit white office, no charts and no numbers anywhere in frame'],
  ['headless-commerce-api-layer', `A smiling developer pair reviewing a large monitor together at a bright white desk, ${SHOP}, white sunlit studio, an orange mug`],
  ['headless-commerce-storefront-build', `A smiling designer and developer standing together at a bright white desk looking pleased at a large monitor, ${SHOP}, abundant daylight, white walls, an orange notebook`],

  // /commerceflo
  ['commerceflo-stock-truth', 'A smiling operations lead in a bright white warehouse office holding a tablet, spotless shelving with neat plain cartons visible through a window behind, abundant daylight, an orange safety helmet on the desk'],
  ['commerceflo-channel-floor', 'A cheerful multi-channel retail team of three smiling together in a bright white workspace, three clean monitors on a white desk each showing a simple colourful product grid, big windows, one orange chair'],
  ['commerceflo-unified-engine', 'A smiling operations manager pointing confidently at a large wall screen showing a simple clean diagram of one central box connected to four plain outer boxes with no small writing, bright white meeting room, an orange marker in hand'],
]

async function generate(name, scene) {
  const body = [{
    taskType: 'imageInference',
    taskUUID: crypto.randomUUID(),
    positivePrompt: `${scene}. ${STYLE}`,
    model: MODEL,
    width: 1280,
    height: 800,
    numberResults: 1,
    outputFormat: 'PNG',
    outputType: 'URL',
  }]
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify(body),
  })
  const json = await res.json()
  if (json.errors?.length) throw new Error(json.errors[0]?.message?.slice(0, 150) ?? 'unknown')
  const url = json.data?.[0]?.imageURL
  if (!url) throw new Error('no imageURL')
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
  const tmp = join(OUT_DIR, `${name}.png`)
  await writeFile(tmp, buf)
  // cwebp out of process: sharp in-process has OOMed this machine before.
  execFileSync('cwebp', ['-q', '88', tmp, '-o', join(OUT_DIR, `${name}.webp`)], { stdio: 'ignore' })
  execFileSync('rm', [tmp])
}

await mkdir(OUT_DIR, { recursive: true })
const filter = process.argv[2]
const queue = filter ? IMAGES.filter(([n]) => n.includes(filter)) : IMAGES

console.log(`Generating ${queue.length} image(s) with ${MODEL}...`)
let ok = 0, failed = []
for (const [name, scene] of queue) {
  process.stdout.write(`  ${name} ... `)
  try { await generate(name, scene); ok++; console.log('OK') }
  catch (e) { failed.push(name); console.log(`FAIL ${e.message}`) }
}
console.log(`\n${ok} generated, ${failed.length} failed.`)
if (failed.length) console.log('Failed: ' + failed.join(', '))
console.log('EVERY image must be visually reviewed for hand/face artifacts and pseudo-text before shipping.')
