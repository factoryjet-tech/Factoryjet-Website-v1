#!/usr/bin/env node
/**
 * generate-marketplace-images.mjs
 * 
 * Generates photorealistic commercial photography assets for the US Marketplace
 * Management & Brand Accelerator pages via Runware API.
 */

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ENV_FILE = '.env.local';
if (existsSync(ENV_FILE)) {
  for (const line of (await readFile(ENV_FILE, 'utf8')).split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const API_KEY = process.env.RUNWARE_API_KEY || 'H0UZlC6wrDpk6BzNDAHVmcHIQDxGCOLl';

const OUT_DIR = join('public', 'images', 'us', 'marketplace');
await mkdir(OUT_DIR, { recursive: true });

const MODEL = 'openai:gpt-image@2';

const STYLE =
  'Bright high-key commercial photography. Clean white and very light grey environment, ' +
  'large sunlit windows, white walls, abundant soft diffused daylight. ' +
  'Crisp tack-sharp focus throughout the frame with deep depth of field. ' +
  'Airy, open, optimistic and confident mood. Accurate natural skin tones. ' +
  'Hands anatomically correct with exactly five natural fingers in relaxed natural poses. ' +
  'Exactly one warm orange object in frame as the only strong colour accent. ' +
  'Ultra detailed, professional colour grading, photorealistic, no illustration.';

const PROMPTS = [
  {
    name: 'marketplace-catalog-sync.webp',
    prompt:
      'A confident operations director standing in a bright sunlit modern office next to a large display ' +
      'showing multi-channel product catalog synchronization metrics across Amazon and Walmart. ' +
      'On the clean wooden table lies a single matte orange notebook. ' + STYLE,
  },
  {
    name: 'marketplace-fulfillment-wfs-fba.webp',
    prompt:
      'An organized, spotless, high-ceiling modern fulfillment distribution center bathed in bright natural morning sunlight. ' +
      'Neat pallets of packaged goods with barcodes ready for FBA and WFS dispatch. A clean white clipboard with an orange pen clip resting on a staging table. ' + STYLE,
  },
  {
    name: 'marketplace-advertising-dsp.webp',
    prompt:
      'A digital marketing strategist seated at a sleek white standing desk in a bright loft office, ' +
      'reviewing high-level advertising performance graphs on a dual-monitor setup. On the desk sits a single ceramic mug with a warm orange interior rim. ' + STYLE,
  },
  {
    name: 'marketplace-brand-control.webp',
    prompt:
      'A senior brand director seated at a sunlit conference table reviewing premium product packaging design and high-end digital storefront layouts on an iPad Pro. ' +
      'A single warm orange folder sits beside the tablet. ' + STYLE,
  },
];

async function generateImage(item) {
  const targetPath = join(OUT_DIR, item.name);
  console.log(`\n🎨 Generating: ${item.name}...`);

  const payload = [
    {
      taskType: 'imageInference',
      taskUUID: crypto.randomUUID(),
      positivePrompt: item.prompt,
      width: 1280,
      height: 800,
      model: MODEL,
      numberResults: 1,
      outputFormat: 'WEBP',
    },
  ];

  try {
    const res = await fetch('https://api.runware.ai/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`❌ API error (${res.status}): ${err}`);
      return;
    }

    const data = await res.json();
    const result = data.data?.[0];
    if (result && result.imageURL) {
      console.log(`⬇️ Downloading ${result.imageURL}...`);
      const imgRes = await fetch(result.imageURL);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      await writeFile(targetPath, buffer);
      console.log(`✅ Saved ${targetPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } else {
      console.error('❌ No imageURL in response:', data);
    }
  } catch (err) {
    console.error(`❌ Failed: ${err.message}`);
  }
}

for (const p of PROMPTS) {
  await generateImage(p);
}
console.log('\n✨ All marketplace images generated successfully!');
