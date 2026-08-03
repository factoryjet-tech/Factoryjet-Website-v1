#!/usr/bin/env node
/**
 * Photoreal PEOPLE imagery for the commerce pages.
 *
 * POLICY: CLAUDE.md previously banned AI-generated photorealistic people.
 * That ban was explicitly LIFTED by Bhavesh on 2026-08-03 (raised twice,
 * reaffirmed twice, stock photography explicitly declined). See CLAUDE.md.
 * Do not revert these or strip the images without checking with him first.
 *
 * Constraints that still apply:
 *  - Review every output before shipping: hands, faces, and garbled text are
 *    FLUX's three common failure modes.
 *  - Never make legible text the sharp-focus subject (learned 2026-08-03 when a
 *    whiteboard came back reading "TNEGRATION" / "REROTICATION").
 *  - Candid documentary framing, not stock-photo eye contact and grinning.
 *  - No resemblance to identifiable real individuals; no brands or logos.
 *
 * Model: bfl:7@1 (FLUX.2), prompt-only — it rejects `negativePrompt` outright,
 * so constraints are phrased positively inside the prompt.
 *
 * Usage: node scripts/generate-commerce-people-images.mjs [pageKey]
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

const OUT_DIR = join('public', 'images', 'us', 'commerce')

// Candid documentary styling. "Mid-action, looking at their work" avoids the
// dead-eyed stock-photo stare. Explicit hand phrasing reduces finger artifacts.
const STYLE =
  'candid documentary photography, photorealistic, hyper realistic skin texture and fabric detail, ' +
  'natural window light, shallow depth of field, warm neutral palette with a subtle warm orange accent, ' +
  'shot on 35mm film, subjects absorbed in their work and looking at what they are doing rather than at the camera, ' +
  'relaxed natural expressions, hands clearly and correctly formed, ' +
  'plain unbranded clothing and surfaces with no logos and no readable text, ' +
  'straight photography with no illustration and no 3d rendering'

const PAGES = {
  replatforming: [
    ['team-planning', 'Two colleagues standing at a large whiteboard in a bright office, one gesturing toward a diagram while the other holds a notebook, mid-conversation, business casual, late thirties, different ethnicities'],
    ['ops-review', 'A woman in her forties sitting at a desk reviewing two monitors, chin resting on hand, concentrating, warm morning light from a window beside her'],
  ],
  'magento-to-shopify': [
    ['pair-review', 'Two developers sitting side by side at a desk looking at the same ultrawide monitor, one pointing at the screen, mugs beside the keyboard, relaxed office, mixed ages'],
    ['lead-dev', 'A man in his thirties at a standing desk, sleeves rolled up, typing, a second screen showing a product grid, soft afternoon light'],
  ],
  'woocommerce-to-shopify': [
    ['owner-packing', 'A small business owner in her thirties packing an order at a wooden bench, folding tissue paper into a kraft box, focused on her hands, warm daylight through a shopfront window'],
    ['laptop-orders', 'A man in his forties leaning on a packing bench checking a laptop showing an order list, one hand on a stack of boxes, natural light'],
  ],
  'squarespace-to-shopify': [
    ['studio-owner', 'A ceramicist in her thirties arranging handmade homeware on a light table for a product photo, adjusting a piece with both hands, bright airy studio'],
    ['boutique-floor', 'A shop owner folding textiles on a boutique display table, seen from the side, soft daylight, calm uncluttered interior'],
  ],
  'wix-to-shopify': [
    ['counter-owner', 'An independent shop owner in his fifties behind a small retail counter, writing in a ledger beside a laptop, morning light through the shopfront'],
    ['stock-check', 'A woman in her twenties checking stock on a shelf with a tablet in one hand, side view, warm retail interior'],
  ],
  'wordpress-to-shopify': [
    ['editor-desk', 'A writer in her forties at a desk marking up printed pages with a red pencil, laptop open beside her, bookshelves behind, warm lamp light'],
    ['content-team', 'Three colleagues around a table in a bright office reviewing printed page layouts spread between them, mid-discussion, mixed ages and ethnicities'],
  ],
  'salesforce-commerce-cloud-to-shopify-plus': [
    ['exec-meeting', 'Four executives around a long conference table in a glass-walled meeting room, one standing and presenting toward wall monitors, others listening, city view behind, diverse group'],
    ['architect-review', 'A senior engineer in her forties standing at a whiteboard with arms folded, studying a system diagram, colleague seated nearby taking notes'],
  ],
  'b2b-ecommerce': [
    ['trade-counter-staff', 'A wholesale counter assistant in a work apron handing a boxed order across a trade counter, industrial shelving behind, natural light from high windows'],
    ['warehouse-team', 'Two warehouse workers in hi-vis vests checking a pallet against a clipboard in a distribution centre aisle, mid-task, bright overhead light'],
  ],
  'ecommerce-for-manufacturers': [
    ['engineer-floor', 'A manufacturing engineer in her thirties in safety glasses inspecting a machined metal component held in both hands, clean factory floor behind, industrial daylight'],
    ['dealer-desk', 'A parts counter specialist in his fifties at a dealer desk, one hand on a technical binder, monitor showing a parts catalogue beside him, workshop light'],
  ],
}

async function generate(prompt) {
  const taskUUID = crypto.randomUUID()
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { taskType: 'authentication', apiKey: API_KEY },
      { taskType: 'imageInference', taskUUID, positivePrompt: `${prompt}. ${STYLE}`,
        width: 1280, height: 800, model: 'bfl:7@1', numberResults: 1 },
    ]),
  })
  if (!res.ok) throw new Error(`Runware ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const data = await res.json()
  const hit = data.data?.find((d) => d.taskUUID === taskUUID)
  if (!hit?.imageURL) throw new Error(`no imageURL: ${JSON.stringify(data).slice(0, 200)}`)
  return Buffer.from(await (await fetch(hit.imageURL)).arrayBuffer())
}

const only = process.argv[2]
const targets = only ? { [only]: PAGES[only] } : PAGES
if (only && !PAGES[only]) { console.error(`unknown page: ${only}`); process.exit(1) }

await mkdir(OUT_DIR, { recursive: true })
let ok = 0, fail = 0
for (const [page, shots] of Object.entries(targets)) {
  for (const [slug, prompt] of shots) {
    const base = `${page}-people-${slug}`
    const webp = join(OUT_DIR, `${base}.webp`)
    if (existsSync(webp)) { console.log(`  skip ${base}`); continue }
    try {
      const buf = await generate(prompt)
      const png = join(OUT_DIR, `${base}.png`)
      await writeFile(png, buf)
      execFileSync('cwebp', ['-q', '82', '-quiet', png, '-o', webp])
      execFileSync('rm', [png])
      ok++; console.log(`  ok   ${base}.webp`)
    } catch (e) {
      fail++; console.log(`  FAIL ${base}: ${String(e.message).slice(0, 120)}`)
    }
  }
}
console.log(`\ndone: ${ok} generated, ${fail} failed -> ${OUT_DIR}`)
