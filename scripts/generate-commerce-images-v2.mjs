#!/usr/bin/env node
/**
 * Commerce section imagery, v2 (2026-08-03).
 *
 * WHY v2: the v1 set was rejected in review as dark, soft and lifeless. The cause
 * was the v1 STYLE string itself, which asked for exactly that:
 *   "warm neutral palette, muted earth tones, shallow depth of field,
 *    shot on 35mm film, the scene is completely unoccupied and empty of any person"
 * Muted + shallow DOF + unoccupied is a recipe for dim, unfocused, empty rooms.
 *
 * v2 brief: bright, sharp, white-background, smiling people, believable commerce
 * UI, vibrant and confidence-building.
 *
 * Two hard constraints that shape every prompt below:
 *
 *  1. bfl:7@1 (FLUX.2) is PROMPT-ONLY. It rejects `negativePrompt` with
 *     invalidParameter. Every constraint must be phrased POSITIVELY inside the
 *     prompt ("hands relaxed and clearly visible", not "no deformed hands").
 *
 *  2. NEVER make legible text the sharp-focus subject. FLUX renders dense UI text
 *     as pseudo-words, and one v1 image was rejected for exactly this. So when a
 *     screen is in frame, it shows a PRODUCT-IMAGE GRID, large colour blocks and
 *     chunky UI furniture, never paragraphs or dense tables. This is the real
 *     tension with "perfect mockups of ecommerce websites": a sharp, text-dense
 *     screen is the single most likely thing to render as garbage. Simplified,
 *     image-led UI is what actually looks convincing.
 *
 * People are permitted (CLAUDE.md ban lifted 2026-08-03 by Bhavesh). Every
 * generated person must still be reviewed for hand/face artifacts before ship.
 *
 * Usage:
 *   node scripts/generate-commerce-images-v2.mjs --test     3 images, style check
 *   node scripts/generate-commerce-images-v2.mjs            full set
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
const MODEL = 'bfl:7@1'

/* Bright, high-key, deep focus. The inverse of v1 on every axis that was wrong:
   white not muted, sharp throughout not shallow DOF, populated not empty. */
const STYLE =
  'bright high-key commercial photography, clean white and very light grey studio background, ' +
  'crisp tack-sharp focus throughout the entire frame with deep depth of field, ' +
  'abundant soft diffused daylight with gentle natural shadows, airy and open, ' +
  'vibrant and optimistic mood, fresh modern workplace, ' +
  'accurate natural skin tones, hands relaxed and clearly visible with five natural fingers, ' +
  'a single warm orange object in frame as the only strong colour accent, ' +
  'straight photography, ultra detailed, sharp, professional colour grading'

/* Screens: image-led UI only. See constraint 2 above. */
const SCREEN =
  'the monitor displays a clean modern e-commerce website with a large grid of ' +
  'colourful product photographs and big simple blocks of solid colour, ' +
  'the interface is purely visual with generous white space and no paragraphs of small writing'

const SETS = {
  replatforming: [
    ['migration-planning-v2',
      `Two colleagues standing together at a bright white desk smiling as they compare two large monitors side by side, ${SCREEN}, one person gesturing at the screen, big sunny windows behind them, white walls, a single orange notebook on the desk`],
    ['cutover-night-v2',
      `A confident smiling operations manager at a clean white standing desk giving a thumbs up beside a large monitor, ${SCREEN}, a bright open-plan office with white walls and green plants behind, an orange coffee mug on the desk`],
    ['warehouse-continuity-v2',
      'A cheerful warehouse team member in a clean light-grey polo smiling directly at camera while holding a barcode scanner, spotless bright modern fulfilment centre with white shelving and neatly stacked plain cartons, huge skylights flooding the space with daylight, an orange safety marker on a post'],
  ],
  'magento-to-shopify': [
    ['legacy-stack-v2',
      `A smiling developer in a light shirt sitting upright at a bright white desk with two monitors, ${SCREEN}, sunlit white office, an orange desk plant pot beside the keyboard`],
    ['catalog-attributes-v2',
      'A clean overhead flat lay on a pure white surface of neatly arranged colourful product samples, a tablet showing a simple grid of product photographs, a pencil and a small orange ruler placed precisely, bright even studio lighting, crisp shadows'],
    ['enterprise-retail-v2',
      'Four colleagues laughing together around a bright white meeting table in a glass-walled room, a large wall screen showing a simple colourful product grid, white walls and abundant daylight, one orange chair among white ones'],
  ],
  'woocommerce-to-shopify': [
    ['packing-bench-v2',
      'A smiling small-business owner in a light apron packing a white product box at a spotless white bench, neat kraft boxes and tissue paper stacked beside her, a laptop open showing a simple colourful product grid, bright airy studio with white walls, orange tape dispenser'],
    ['plugin-sprawl-v2',
      'A cheerful person at a tidy bright white desk organising colourful sticky notes on a clean white wall, sunlit modern office, sharp focus, an orange marker in hand'],
  ],
}

async function generate(name, prompt) {
  const body = [{
    taskType: 'imageInference',
    taskUUID: crypto.randomUUID(),
    positivePrompt: `${prompt}. ${STYLE}`,
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
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors))
  const url = json.data?.[0]?.imageURL
  if (!url) throw new Error('no imageURL: ' + JSON.stringify(json).slice(0, 400))

  const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
  const tmp = join(OUT_DIR, `${name}.png`)
  await writeFile(tmp, buf)
  // cwebp keeps this off the Node heap; sharp in-process has OOMed this machine before.
  execFileSync('cwebp', ['-q', '86', tmp, '-o', join(OUT_DIR, `${name}.webp`)], { stdio: 'ignore' })
  execFileSync('rm', [tmp])
  console.log(`  ✓ ${name}.webp`)
}

await mkdir(OUT_DIR, { recursive: true })
const testMode = process.argv.includes('--test')

const jobs = []
for (const [page, items] of Object.entries(SETS)) {
  for (const [name, prompt] of items) jobs.push([page, name, prompt])
}
const queue = testMode ? jobs.slice(0, 3) : jobs

console.log(`Generating ${queue.length} image(s)${testMode ? ' (TEST)' : ''}...`)
for (const [page, name, prompt] of queue) {
  process.stdout.write(`  ${page} / ${name} ... `)
  try { await generate(name, prompt) } catch (e) { console.log(`✗ ${e.message}`) }
}
console.log('\nReview every image for hand/face artifacts and pseudo-text before shipping.')
