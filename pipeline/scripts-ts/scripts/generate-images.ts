/**
 * generate-images.ts — Runware image generation for landing page slots.
 *
 * Reads the enriched city JSON, builds prompts for each of the 6 image
 * slots defined in fj-images.skill.md, generates WebP images via the
 * Runware API (FLUX Dev, runware:97@1), and writes them to
 *   <repo>/public/images/{country}/{city}/{service}/{slot}.webp
 *
 * No sharp needed — we use outputType: 'base64Data' + outputFormat: 'WEBP'
 * so the SDK returns base64-encoded WebP which we write directly.
 *
 * CLI:
 *   pnpm generate-images --country us --city austin --service web-design
 *   pnpm generate-images --country gb --city london --service web-design --dry-run
 *
 * Prerequisites:
 *   pnpm enrich  --country us --city austin          (writes enriched JSON)
 *   pnpm assemble --country us --city austin          (writes page.tsx with img paths)
 *
 * Runware docs: https://docs.runware.ai/en/text-to-image/request-images
 * SDK version:  @runware/sdk-js ^1.2.9
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Runware } from '@runware/sdk-js';
import { requireRunwareKey } from '../config/env.js';
import type { CountryCode } from '../src/lib/locales/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// scripts/ → pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..');
// pipeline/scripts-ts/ → repo root
const REPO_ROOT = join(SCRIPTS_TS_ROOT, '..', '..');

/* ------------------------------------------------------------------ */
/*   CLI                                                                */
/* ------------------------------------------------------------------ */

interface CliArgs {
  country: CountryCode;
  city: string;
  service: string;
  dryRun: boolean;
  slot?: string; // optional: run only one slot for testing
}

function parseArgs(argv: string[]): CliArgs {
  const valid: CountryCode[] = ['gb', 'us', 'au', 'ae', 'in', 'br', 'mx'];
  const args: CliArgs = { country: 'us', city: '', service: 'web-design', dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') { args.dryRun = true; continue; }
    const v = argv[++i];
    if (!v) throw new Error(`${a} requires a value`);
    if (a === '--country') {
      if (!valid.includes(v as CountryCode)) throw new Error(`Unknown country: ${v}`);
      args.country = v as CountryCode;
    } else if (a === '--city')    { args.city    = v; }
    else if (a === '--service')   { args.service = v; }
    else if (a === '--slot')      { args.slot    = v; }
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (!args.city) throw new Error('--city is required');
  return args;
}

/* ------------------------------------------------------------------ */
/*   Enriched city data (minimal surface we need)                      */
/* ------------------------------------------------------------------ */

interface EnrichedCity {
  cityName:      string;
  countryName:   string;
  industries?:   Array<{ name: string }>;
  landmarks?:    Array<{ name: string; description?: string }>;
  // Fallback: any field shape produced by enrich-cities.ts
  [key: string]: unknown;
}

function loadEnrichedCity(country: string, citySlug: string): EnrichedCity {
  const p = join(SCRIPTS_TS_ROOT, 'data', 'enriched', country, `${citySlug}.json`);
  if (!existsSync(p)) {
    throw new Error(
      `Enriched data not found: ${p}\nRun: pnpm enrich --country ${country} --city ${citySlug}`,
    );
  }
  return JSON.parse(readFileSync(p, 'utf-8')) as EnrichedCity;
}

/* ------------------------------------------------------------------ */
/*   Slot definitions                                                   */
/* ------------------------------------------------------------------ */

interface SlotDef {
  name:       string;   // e.g. "hero"
  prompt:     string;
  model:      string;
  width:      number;
  height:     number;
}

/** Derive city display name from slug. "new-york" → "New York" */
function cityDisplay(slug: string): string {
  return slug.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

/**
 * Build the 6 slot definitions for a city × service page.
 * Prompts are derived from city enrichment data.
 * See fj-images.skill.md for prompt design rules.
 */
function buildSlots(args: CliArgs, city: EnrichedCity): SlotDef[] {
  const cityName  = city.cityName ?? cityDisplay(args.city);
  const svcLabel  = args.service.replace(/-/g, ' ');
  // Top 3 industry names from enriched data (fallback to generic)
  const industries = city.industries ?? [];
  const ind0 = industries[0]?.name ?? 'Health & Wellness';
  const ind1 = industries[1]?.name ?? 'Food & Beverage';
  const ind2 = industries[2]?.name ?? 'Real Estate';
  // Landmark from enriched data (fallback to city hall)
  const landmark = city.landmarks?.[0]?.name ?? `${cityName} City Hall`;

  // Negative prompt shared across all photorealistic slots
  const noText = 'text, watermarks, logos, blurry, people faces, distorted';

  // IMPORTANT: FLUX_DEV ('runware:97@1') = non-commercial license — NEVER use for production.
  // FLUX_SCHNELL ('runware:100@1') = Apache 2.0 — fully commercial, the ONLY approved model.
  const FLUX_SCHNELL = 'runware:100@1';

  const all: SlotDef[] = [
    // 02 · Hero rightSlot — 800×600 · device + office
    {
      name:   'hero',
      model:  FLUX_SCHNELL,
      width:  800,
      height: 600,
      prompt: [
        `Professional ${svcLabel} portfolio website displayed on a MacBook Pro laptop,`,
        `${cityName} modern tech office or studio environment visible in background,`,
        `clean modern UI visible on screen, no text on screen,`,
        `editorial product photography, warm natural window light, shallow depth of field,`,
        `Canon 5D style, 85mm lens, high detail, ${noText}`,
      ].join(' '),
    },

    // 05 · CityContextSection — 600×400 · city landmark
    {
      name:   'city-context',
      model:  FLUX_SCHNELL,
      width:  600,
      height: 400,
      prompt: [
        `${landmark}, ${cityName} skyline in background,`,
        `golden afternoon sunlight, wide angle architectural photography,`,
        `dramatic but natural sky, crisp architectural detail, no text overlays,`,
        `${noText}`,
      ].join(' '),
    },

    // 06 · ServiceExplanation rightSlot — 800×600 · UI mockup on device
    {
      name:   'service-mockup',
      model:  FLUX_SCHNELL,
      width:  800,
      height: 600,
      prompt: [
        `Beautiful ${svcLabel} website mockup displayed on MacBook Pro screen,`,
        `blue and white clean modern UI design, professional web agency portfolio page,`,
        `white studio background, studio lighting, no text visible on screen,`,
        `product photography style, sharp detail, ${noText}`,
      ].join(' '),
    },

    // 09 · Portfolio card 1 — 600×400 · industry-matched website screenshot
    {
      name:   'portfolio-1',
      model:  FLUX_SCHNELL,
      width:  600,
      height: 400,
      prompt: [
        `${ind0} brand website displayed on laptop screen,`,
        `clean minimal design matching the industry aesthetic,`,
        `professional product photography, white or light studio background,`,
        `warm studio lighting, no text on screen, ${noText}`,
      ].join(' '),
    },

    // 09 · Portfolio card 2 — 600×400
    {
      name:   'portfolio-2',
      model:  FLUX_SCHNELL,
      width:  600,
      height: 400,
      prompt: [
        `${ind1} business website on laptop and tablet simultaneously,`,
        `modern web design matching the industry color palette,`,
        `professional product photography, neutral studio background,`,
        `natural studio lighting, no text on screen, ${noText}`,
      ].join(' '),
    },

    // 09 · Portfolio card 3 — 600×400
    {
      name:   'portfolio-3',
      model:  FLUX_SCHNELL,
      width:  600,
      height: 400,
      prompt: [
        `${ind2} professional website on desktop iMac monitor,`,
        `clean professional design with high contrast, ${cityName} office setting,`,
        `natural window light, no text on screen, ${noText}`,
      ].join(' '),
    },
  ];

  return all;
}

/* ------------------------------------------------------------------ */
/*   Output path helpers                                               */
/* ------------------------------------------------------------------ */

function outputPath(country: string, citySlug: string, service: string, slotName: string): string {
  return join(REPO_ROOT, 'public', 'images', country, citySlug, service, `${slotName}.webp`);
}

/* ------------------------------------------------------------------ */
/*   Image generation                                                  */
/* ------------------------------------------------------------------ */

async function generateSlot(
  runware: Runware,
  slot: SlotDef,
  destPath: string,
  dryRun: boolean,
): Promise<void> {
  if (dryRun) {
    console.log(`  [dry-run] Would generate ${slot.name} → ${destPath.replace(REPO_ROOT + '/', '')}`);
    console.log(`            Prompt: ${slot.prompt.slice(0, 120)}…`);
    return;
  }

  const results = await runware.requestImages({
    positivePrompt: slot.prompt,
    model:          slot.model,
    numberResults:  1,
    outputType:     'base64Data',
    outputFormat:   'WEBP',
    width:          slot.width,
    height:         slot.height,
    includeCost:    true,
  });

  if (!results || results.length === 0) {
    throw new Error(`[generate-images] No result returned for slot "${slot.name}"`);
  }

  // The SDK returns base64Data as a runtime property even if not in the TS interface
  const raw = results[0] as unknown as Record<string, unknown>;
  const b64 = raw['imageBase64Data'] as string | undefined;

  if (!b64) {
    throw new Error(
      `[generate-images] No imageBase64Data for slot "${slot.name}". ` +
      `Full result keys: ${Object.keys(raw).join(', ')}`,
    );
  }

  const buf = Buffer.from(b64, 'base64');
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, buf);

  const kb   = (buf.byteLength / 1024).toFixed(1);
  const cost = typeof raw['cost'] === 'number' ? ` · cost $${raw['cost'].toFixed(5)}` : '';
  console.log(`  ✓ ${slot.name.padEnd(16)} ${slot.width}×${slot.height}  ${kb.padStart(6)} KB${cost}`);
}

/* ------------------------------------------------------------------ */
/*   Main                                                              */
/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const city = loadEnrichedCity(args.country, args.city);

  let slots = buildSlots(args, city);
  if (args.slot) {
    slots = slots.filter((s) => s.name === args.slot);
    if (slots.length === 0) throw new Error(`No slot named "${args.slot}"`);
  }

  console.log(`FactoryJet · generate-images`);
  console.log(`  country : ${args.country}`);
  console.log(`  city    : ${args.city}  (${city.cityName ?? args.city})`);
  console.log(`  service : ${args.service}`);
  console.log(`  slots   : ${slots.map((s) => s.name).join(', ')}`);
  console.log(`  mode    : ${args.dryRun ? 'DRY RUN' : 'LIVE — Runware API calls will be made'}`);
  console.log('');

  if (args.dryRun) {
    for (const slot of slots) {
      const dest = outputPath(args.country, args.city, args.service, slot.name);
      await generateSlot(null as unknown as Runware, slot, dest, true);
    }
    console.log('\n[dry-run] Done. No API calls made.');
    return;
  }

  const runware = new Runware({ apiKey: requireRunwareKey() });

  // Process in batches of 3 to avoid rate-limiting
  const BATCH_SIZE = 3;
  let totalCost = 0;

  for (let i = 0; i < slots.length; i += BATCH_SIZE) {
    const batch = slots.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(slots.length / BATCH_SIZE);
    console.log(`Batch ${batchNum}/${totalBatches} — generating ${batch.length} image(s)…`);

    await Promise.all(
      batch.map((slot) => {
        const dest = outputPath(args.country, args.city, args.service, slot.name);
        return generateSlot(runware, slot, dest, false);
      }),
    );

    // Small pause between batches to be a good API citizen
    if (i + BATCH_SIZE < slots.length) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  await runware.disconnect().catch(() => {
    // disconnect is best-effort — websocket cleanup
  });

  console.log('');
  console.log(`✓ ${slots.length} image(s) written to public/images/${args.country}/${args.city}/${args.service}/`);
  console.log(`  Next step: pnpm build  (images will be served from the Next.js public/ directory)`);
}

main().catch((err: unknown) => {
  console.error('[generate-images] fatal:', err instanceof Error ? err.message : err);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
