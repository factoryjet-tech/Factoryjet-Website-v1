#!/usr/bin/env tsx
/**
 * Generate per-city hero (portrait) + team (landscape) imagery for the India
 * digital-marketing city pages, matching the style already shipped on the 5 live
 * cities (mumbai/bangalore/delhi/pune/hyderabad).
 *
 * Usage: npx tsx scripts/generate-dm-city-images.ts
 * Requires RUNWARE_API_KEY in .env.local.
 * Outputs: public/images/services/digital-marketing/<city>/{hero,team}.webp
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

const STYLE =
  'bright airy modern office interior, floor-to-ceiling windows with a softly blurred Indian city skyline behind, warm natural daylight, shallow depth of field, photorealistic corporate photography, high detail, professional, no text, no logos, no watermark'

// Vary the hero subject per city so faces differ across the set.
const CITIES: { slug: string; heroSubject: string }[] = [
  { slug: 'noida', heroSubject: 'a confident Indian businessman in his 30s wearing a smart navy blazer, arms crossed, warm friendly smile' },
  { slug: 'ahmedabad', heroSubject: 'a confident Indian businesswoman in her 30s wearing a deep teal blazer, arms crossed, warm friendly smile' },
  { slug: 'chennai', heroSubject: 'a confident Indian businessman in his 40s wearing a charcoal shirt, arms crossed, warm approachable smile' },
  { slug: 'kolkata', heroSubject: 'a confident Indian businesswoman in her 30s wearing a rust-orange blazer, arms crossed, warm friendly smile' },
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
  for (const { slug, heroSubject } of CITIES) {
    const outDir = join('public', 'images', 'services', 'digital-marketing', slug)
    await mkdir(outDir, { recursive: true })

    try {
      console.log(`[${slug}] hero...`)
      const heroPrompt = `${heroSubject}, standing in ${STYLE}`
      const heroBuf = await generate(heroPrompt, 832, 1216)
      await sharp(heroBuf).webp({ quality: 82 }).toFile(join(outDir, 'hero.webp'))
      console.log(`  ✓ ${join(outDir, 'hero.webp')}`)

      console.log(`[${slug}] team...`)
      const teamPrompt = `a small team of four Indian marketing professionals, mixed men and women in smart business casual, collaborating and smiling around a laptop at a table, a whiteboard with colourful marketing charts nearby, ${STYLE}`
      const teamBuf = await generate(teamPrompt, 1216, 832)
      await sharp(teamBuf).webp({ quality: 82 }).toFile(join(outDir, 'team.webp'))
      console.log(`  ✓ ${join(outDir, 'team.webp')}`)
    } catch (e) {
      console.error(`  ✗ ${slug}:`, e instanceof Error ? e.message : e)
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
