#!/usr/bin/env tsx
/**
 * Generate per-service hero + service-explanation imagery via Runware API.
 * Usage: pnpm tsx scripts/generate-runware-images.ts --service web-design
 *
 * Requires RUNWARE_API_KEY in .env.local.
 * Outputs WebP files to public/images/services/<slug>/.
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
const serviceIdx = args.indexOf('--service')
const service = serviceIdx >= 0 ? args[serviceIdx + 1] : null
if (!service) {
  console.error('Usage: --service <slug>')
  process.exit(1)
}

// Per-service prompts. Add more services here as they roll out.
const PROMPTS: Record<string, { hero: string; serviceExplanation: string }> = {
  'web-design': {
    hero: 'Minimalist abstract geometric composition with floating architectural shapes and clean planes, soft cream off-white background, deep cobalt blue accents, sharp clean edges, editorial design, ultra modern, Stripe Mercury Linear aesthetic, professional, high contrast, no people, no text, no logos, vector-clean illustration',
    serviceExplanation: 'Abstract digital interface composition, stacked floating UI panels with soft drop shadows, cream background, deep cobalt blue and ink accents, modern editorial illustration, Anthropic Linear aesthetic, professional, no people, no text, no logos, calm composition',
  },
}

const prompts = PROMPTS[service]
if (!prompts) {
  console.error(`No prompts defined for service: ${service}`)
  process.exit(1)
}

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
        positivePrompt: prompt,
        width,
        height,
        model: 'runware:101@1',
        numberResults: 1,
      },
    ]),
  })
  if (!res.ok) throw new Error(`Runware API ${res.status}: ${await res.text()}`)
  const data = await res.json()
  const result = data.data?.find((d: { taskUUID: string; imageURL?: string }) => d.taskUUID === taskUUID)
  if (!result?.imageURL) throw new Error(`No imageURL in response: ${JSON.stringify(data)}`)
  const imgRes = await fetch(result.imageURL)
  return Buffer.from(await imgRes.arrayBuffer())
}

async function main() {
  const outDir = join('public', 'images', 'services', service as string)
  await mkdir(outDir, { recursive: true })

  console.log(`Generating hero image for ${service}...`)
  const heroBuf = await generate(prompts.hero, 1280, 768)
  await sharp(heroBuf).webp({ quality: 85 }).toFile(join(outDir, 'hero.webp'))
  console.log(`✓ ${join(outDir, 'hero.webp')}`)

  console.log(`Generating service-explanation image for ${service}...`)
  const seBuf = await generate(prompts.serviceExplanation, 1024, 768)
  await sharp(seBuf).webp({ quality: 85 }).toFile(join(outDir, 'service-explanation.webp'))
  console.log(`✓ ${join(outDir, 'service-explanation.webp')}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
