#!/usr/bin/env node
/**
 * Head-to-head on ONE prompt across the frontier image models Runware exposes,
 * so the model choice for the commerce imagery is measured rather than assumed.
 *
 * The prompt used is the one that FAILED on FLUX.2 [max]: two people at monitors.
 * FLUX produced a malformed hand and, on a sibling prompt, pseudo-text in a nav
 * bar. Hands and legible UI text are the two things to judge here.
 *
 * Usage: node scripts/runware-model-bakeoff.mjs
 * Output: public/images/_bakeoff/<model>.webp  (scratch, not for shipping)
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
if (!API_KEY) { console.error('RUNWARE_API_KEY missing'); process.exit(1) }

const OUT = join('public', 'images', '_bakeoff')

const MODELS = [
  ['flux2-max',      'bfl:7@1'],
  ['nano-banana-2',  'google:4@3'],
  ['gpt-image-2',    'openai:gpt-image@2'],
  ['seedream-5-pro', 'bytedance:seedream@5.0-pro'],
]

const PROMPT =
  'Two colleagues standing together at a bright white desk, both smiling warmly, ' +
  'comparing two large desktop monitors side by side. Each monitor displays a clean modern ' +
  'e-commerce website: a large grid of colourful clothing product photographs with big simple ' +
  'blocks of solid colour and generous white space. One person gestures toward a screen with an ' +
  'open, relaxed hand. Large sunny windows behind them, white walls, a single orange notebook ' +
  'on the desk as the only strong colour accent. ' +
  'Bright high-key commercial photography, crisp tack-sharp focus throughout with deep depth of field, ' +
  'abundant soft diffused daylight, airy and open, vibrant and optimistic, ' +
  'accurate natural skin tones, hands anatomically correct with exactly five natural fingers, ' +
  'ultra detailed, professional colour grading.'

async function run(label, model) {
  const body = [{
    taskType: 'imageInference',
    taskUUID: crypto.randomUUID(),
    positivePrompt: PROMPT,
    model,
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
  if (json.errors?.length) {
    console.log(`  ✗ ${label}: ${json.errors[0]?.message?.slice(0, 160)}`)
    return
  }
  const url = json.data?.[0]?.imageURL
  if (!url) { console.log(`  ✗ ${label}: no imageURL`); return }
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
  const tmp = join(OUT, `${label}.png`)
  await writeFile(tmp, buf)
  execFileSync('cwebp', ['-q', '92', tmp, '-o', join(OUT, `${label}.webp`)], { stdio: 'ignore' })
  execFileSync('rm', [tmp])
  console.log(`  ✓ ${label}`)
}

await mkdir(OUT, { recursive: true })
console.log(`Bake-off across ${MODELS.length} models on one prompt...`)
for (const [label, model] of MODELS) {
  process.stdout.write(`  ${label} (${model}) ... \n`)
  try { await run(label, model) } catch (e) { console.log(`  ✗ ${label}: ${e.message.slice(0, 160)}`) }
}
console.log('\nReview each for: hand anatomy, UI text legibility, brightness, sharpness.')
