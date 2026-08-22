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
  {
    name: 'faire-wholesale-boutique-sync.webp',
    prompt:
      'A stylish boutique store owner and a wholesale brand manager in a bright sunlit contemporary design showroom reviewing premium lifestyle goods on display. ' +
      'One holds an iPad showing wholesale ordering terms. A single warm orange portfolio folder rests on the clean oak table. ' + STYLE,
  },
  {
    name: 'faire-brand-portal-catalog.webp',
    prompt:
      'A brand operations director at a clean white desk in a sunlit loft studio reviewing B2B wholesale pricing tiers and inventory synchronization feeds on a sleek desktop monitor. ' +
      'A ceramic mug with a subtle warm orange interior rim sits on the desk. ' + STYLE,
  },
  {
    name: 'target-plus-curated-retail-showcase.webp',
    prompt:
      'A senior retail merchandise director in a sunlit modern product design showroom reviewing curated home goods and apparel on display. ' +
      'Holding an iPad Pro displaying Target Plus DVS inventory metrics. A single warm orange leather notebook rests on the display counter. ' + STYLE,
  },
  {
    name: 'tiktok-shop-live-studio-commerce.webp',
    prompt:
      'A modern, brightly-lit creator live-streaming studio with professional diffused softbox lighting. ' +
      'A creator holding a beauty product in front of a sleek smartphone mount, with a side monitor displaying live TikTok Shop affiliate sales graphs. A warm orange accent mug sits on the desk. ' + STYLE,
  },
  {
    name: 'omnichannel-vs-multichannel-unified-data.webp',
    prompt:
      'A senior e-commerce operations director at a clean architectural oak desk in a sunlit loft reviewing unified omnichannel inventory data across Shopify, Amazon, and ERP systems on dual high-resolution displays. ' +
      'A warm orange ceramic coffee cup sits beside a leather notebook. ' + STYLE,
  },
  {
    name: 'agentic-commerce-autonomous-ai-shopper.webp',
    prompt:
      'A modern tech workstation showing an AI agent autonomous checkout simulation dashboard with JSON-LD schema feeds and real-time transaction graphs on a curved monitor. ' +
      'Clean ambient studio lighting with a subtle warm orange desk accent lamp. ' + STYLE,
  },
  {
    name: 'shopify-plus-b2b-wholesale-portal.webp',
    prompt:
      'A B2B wholesale operations manager at a clean oak desk in a sunlit industrial loft reviewing wholesale tier pricing and Net 30 payment terms on a 27-inch studio display. ' +
      'A warm orange ceramic mug rests on the desk. ' + STYLE,
  },
  {
    name: 'bigcommerce-b2b-edition-quoting.webp',
    prompt:
      'A B2B enterprise sales director in a modern showroom using a sleek iPad Pro to review automated custom quotation requests and corporate buyer permissions. ' +
      'A warm orange leather notebook rests on the counter. ' + STYLE,
  },
  {
    name: 'san-francisco-silicon-valley-ecommerce-architecture.webp',
    prompt:
      'A senior Silicon Valley commerce architect standing in a sunlit modern tech office in San Francisco reviewing headless Next.js code and edge deployment metrics on a large wall display. ' +
      'A warm orange accent notebook rests on the clean oak conference table. ' + STYLE,
  },
  {
    name: 'dallas-fort-worth-wholesale-logistics-commerce.webp',
    prompt:
      'An enterprise logistics director in a bright high-ceiling corporate office in Dallas reviewing multi-warehouse 3PL inventory routing and NetSuite ERP data on dual monitors. ' +
      'A warm orange ceramic mug sits beside a stainless steel laptop. ' + STYLE,
  },
  {
    name: 'atlanta-enterprise-supply-chain-commerce.webp',
    prompt:
      'A retail operations executive in a sunlit Atlanta modern office analyzing omnichannel point-of-sale and supply chain fulfillment metrics on a high-resolution display. ' +
      'A single warm orange folder rests on the clean desk. ' + STYLE,
  },
  {
    name: 'miami-luxury-crossborder-creator-commerce.webp',
    prompt:
      'A luxury brand founder in a bright sunlit waterfront Miami design studio reviewing international multi-currency checkouts and TikTok Shop live creator analytics on an iPad Pro. ' +
      'A warm orange accent vase sits on the white marble table. ' + STYLE,
  },
  {
    name: 'shopify-plus-vs-bigcommerce-enterprise-matrix.webp',
    prompt:
      'A senior e-commerce technical consultant in a bright glass-walled boardroom reviewing a side-by-side architectural comparison matrix of Shopify Plus and BigCommerce on a studio display. ' +
      'A warm orange notebook sits on the table. ' + STYLE,
  },
  {
    name: 'shopify-plus-vs-magento-adobe-commerce-tco.webp',
    prompt:
      'An enterprise VP of Digital reviewing total cost of ownership graphs comparing SaaS Shopify Plus and legacy Adobe Commerce Magento on a clean modern desk. ' +
      'A warm orange pen rests on a white tablet. ' + STYLE,
  },
  {
    name: 'headless-nextjs-vs-monolithic-liquid-architecture.webp',
    prompt:
      'A software engineer at a clean standing desk in a bright sunlit loft comparing React Server Component rendering latency and sub-second Core Web Vitals graphs on a curved monitor. ' +
      'A warm orange ceramic coffee cup sits on the desk. ' + STYLE,
  },
  {
    name: 'bigcommerce-to-shopify-plus-migration-pipeline.webp',
    prompt:
      'A senior data engineer reviewing automated 301 redirect tables, B2B wholesale price lists, and customer database migration pipelines on a high-resolution studio screen. ' +
      'A single warm orange notebook rests beside the keyboard. ' + STYLE,
  },
  {
    name: 'netsuite-suitecommerce-to-shopify-plus-sync.webp',
    prompt:
      'An enterprise systems architect reviewing bi-directional NetSuite ERP webhook pipelines and Shopify Plus order synchronization diagrams on a wall-mounted display. ' +
      'A warm orange folder sits on the conference table. ' + STYLE,
  },
  {
    name: 'ecommerce-speed-core-web-vitals-performance-engine.webp',
    prompt:
      'A performance optimization engineer in a bright laboratory environment analyzing sub-second Largest Contentful Paint (LCP) and 99+ Google Lighthouse performance scores on dual displays. ' +
      'A warm orange accent desk accessory sits near the monitor. ' + STYLE,
  },
];

async function generateImage(item) {
  const targetPath = join(OUT_DIR, item.name);
  if (existsSync(targetPath)) {
    console.log(`⏩ Skipping existing: ${item.name}`);
    return;
  }
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
