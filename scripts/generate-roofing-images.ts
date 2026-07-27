#!/usr/bin/env tsx
/**
 * Runware imagery for /services/roofing-seo (2026-07-26).
 * Uses FLUX.2 max (bfl:7@1) for the highest-quality output.
 *
 * Follows the FactoryJet visual policy: abstract / architectural composition only.
 * No AI-generated people, no fake photorealistic humans, no text, no logos.
 *
 * Usage: pnpm tsx scripts/generate-roofing-images.ts
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

const MODEL = 'bfl:7@1' // FLUX.2 max

const SHARED_NEG =
  'no people, no faces, no hands, no text, no lettering, no watermarks, no logos, ' +
  'no neural network graphics, no circuit boards, no glowing neon, no gradient mesh'

const IMAGES: Array<{ file: string; w: number; h: number; prompt: string }> = [
  {
    file: 'hero.webp',
    w: 1440,
    h: 864,
    prompt:
      'Wide aerial drone photograph angled across a neighbourhood of clean suburban American rooftops, ' +
      'crisp asphalt shingle geometry filling the whole frame edge to edge, strong parallel ridge lines and valleys receding into the distance, ' +
      'warm late afternoon light with long soft shadows, muted natural palette of warm greys slate and terracotta, ' +
      'editorial architectural photography, high detail, sharp focus, full bleed composition, uniform exposure across the frame. ' + SHARED_NEG,
  },
  {
    file: 'search-visibility.webp',
    w: 1200,
    h: 896,
    prompt:
      'Minimalist abstract editorial illustration of a local map grid, clean intersecting streets rendered as thin ink lines on a soft cream background, ' +
      'three simple solid location pins in warm terracotta orange clustered in one district, subtle depth, flat vector-clean style, ' +
      'Linear and Stripe design aesthetic, generous white space, professional, calm. ' + SHARED_NEG,
  },
  {
    file: 'roof-detail.webp',
    w: 1200,
    h: 896,
    prompt:
      'Close-up architectural detail of a new asphalt shingle roof ridge meeting clean flashing, ' +
      'repeating textural pattern, warm neutral greys with a soft terracotta undertone, natural daylight, ' +
      'shallow depth of field, editorial construction photography, crisp and precise, no clutter. ' + SHARED_NEG,
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
        positivePrompt: prompt,
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
  if (!result?.imageURL) throw new Error(`No imageURL in response: ${JSON.stringify(data).slice(0, 400)}`)
  const imgRes = await fetch(result.imageURL)
  return Buffer.from(await imgRes.arrayBuffer())
}

async function main() {
  const outDir = join('public', 'images', 'us', 'services', 'roofing-seo')
  await mkdir(outDir, { recursive: true })

  const only = process.argv.slice(2).find((a) => a.startsWith('--only='))?.split('=')[1]
  for (const img of IMAGES) {
    if (only && img.file !== only) continue
    process.stdout.write(`Generating ${img.file} (${img.w}x${img.h}, ${MODEL})... `)
    try {
      const buf = await generate(img.prompt, img.w, img.h)
      await sharp(buf).webp({ quality: 82 }).toFile(join(outDir, img.file))
      console.log('OK')
    } catch (err) {
      console.error(`FAILED: ${(err as Error).message}`)
      process.exitCode = 1
    }
  }
  console.log(`\nDone. Files in ${outDir}`)
}

main()
