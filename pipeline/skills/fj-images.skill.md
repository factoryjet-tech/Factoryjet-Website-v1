# Skill: fj-images
# Use when: generating AI images for any FactoryJet landing page section via Runware API

## Overview

Every FactoryJet landing page uses AI-generated images in specific slots. This skill
defines the Runware model selection, prompt templates, output dimensions, and file-path
conventions for each slot type.

Run: `pnpm run generate-images --country us --city austin --service web-design`
Script: `pipeline/scripts-ts/scripts/generate-images.ts`
SDK: `@runware/sdk-js` — `runware.requestImages()`

---

## The Runware slot system

Each image slot in the HTML has four `data-runware-*` attributes that the
`generate-images.ts` script reads to know exactly what to produce:

```html
<div class="runware-slot"
     data-runware-prompt="[FULL PROMPT TEXT]"
     data-runware-model="runware:97@1"
     data-runware-width="800"
     data-runware-height="600"
     data-output-path="/public/images/us/austin/web-design/hero.webp">
```

The script:
1. Scans the assembled page TSX / HTML for elements with `class="runware-slot"`
2. Reads the four attributes
3. Calls `requestImages()` for each slot (batched, max 4 parallel)
4. Writes the resulting WebP to `data-output-path`
5. Replaces the slot's placeholder content with `<img src="..." alt="..." />`

---

## Model selection per slot type

| Slot type            | Model              | Why |
|---------------------|--------------------|-----|
| Hero (photorealistic) | `runware:100@1` | FLUX Schnell — Apache 2.0, fully commercial |
| City landmark         | `runware:100@1` | FLUX Schnell — Apache 2.0, fully commercial |
| Service mockup        | `runware:100@1` | FLUX Schnell — Apache 2.0, fully commercial |
| Portfolio card        | `runware:100@1` | FLUX Schnell — Apache 2.0, fully commercial |
| Industry icons        | `runware:100@1` | FLUX Schnell — faster, cheaper for simple illustrations |
| Background texture    | `runware:100@1` | FLUX Schnell — abstract/pattern only |

⚠️ CRITICAL: `runware:97@1` = FLUX Dev = NON-COMMERCIAL LICENSE — BANNED from all production use.
Always use `runware:100@1` (FLUX Schnell, Apache 2.0) for every slot, every page, every tenant.

---

## Output dimensions per slot

| Slot                  | Width | Height | Aspect Ratio | Notes |
|-----------------------|-------|--------|--------------|-------|
| Hero rightSlot        | 800   | 600    | 4:3          | 7/5 grid col-span-5 |
| CityContextSection    | 600   | 400    | 3:2          | 60/40 grid right col |
| ServiceExplanation    | 800   | 600    | 4:3          | 60/40 grid right col |
| Portfolio card (×3)   | 600   | 400    | 3:2          | Card image header |
| IndustryIcon          | 80    | 80     | 1:1          | Pill icon — use Schnell |
| OG / social preview   | 1200  | 630    | ~1.9:1       | Not a page slot |

All images are saved as `.webp`. Quality target: 85.
Never save as PNG or JPEG — always convert to WebP in the script.

---

## File path convention

```
/public/images/{country}/{city}/{service}/{slot-name}.webp
```

Examples:
- `/public/images/us/austin/web-design/hero.webp`
- `/public/images/us/austin/web-design/city-context.webp`
- `/public/images/us/austin/web-design/service-mockup.webp`
- `/public/images/us/austin/web-design/portfolio-health.webp`
- `/public/images/us/austin/web-design/portfolio-brewery.webp`
- `/public/images/us/austin/web-design/portfolio-realestate.webp`
- `/public/images/us/miami/web-design/hero.webp`
- `/public/images/gb/london/web-design/hero.webp`
- `/public/images/ae/dubai/ecommerce/hero.webp`

Country codes: `us` / `gb` / `ae` / `au` / `in` / `de` / `fr` / `br` / `mx`
Always use lowercase, hyphen-separated city slugs.

---

## Prompt templates per slot type

### Hero rightSlot
Goal: editorial product photography showing a beautiful website on a device.

Template:
```
{service_description} website on MacBook Pro laptop, {city} {descriptor} office or studio environment,
clean modern {style} design visible on screen, editorial product photography, warm natural light,
shallow depth of field, no text visible on screen, --ar 4:3
```

Examples by service:
- web-design: "Professional web design portfolio website on MacBook Pro laptop, Austin Texas modern office, clean Next.js website design visible on screen, editorial photography, warm light, shallow depth of field"
- ecommerce: "Shopify e-commerce store displayed on MacBook Pro, clean product grid layout, Miami tropical office environment, editorial product photography, natural light"
- ai-agents: "AI agent dashboard interface on MacBook Pro screen, dark mode UI with blue data visualizations, Denver tech startup office, editorial photography"

Hard rules for hero prompts:
- ALWAYS include device (MacBook Pro, iMac, iPad Pro)
- ALWAYS include city context (subtle — office environment, not landmark)
- NEVER ask for text/logo visible on screen (will render garbled)
- NEVER ask for people's faces (rights/realism issues)
- Always end with photographic style descriptor

---

### CityContextSection
Goal: recognizable city landmark, architectural/aerial, warm editorial light.

Template:
```
{landmark}, {city} {state_or_country}, {lighting_condition}, {photography_style},
{composition}, no text overlays
```

Examples:
- Austin: "Texas State Capitol building dome, Austin downtown skyline in background, golden afternoon light, wide angle architectural photography, dramatic sky"
- Miami: "Miami Beach Art Deco architecture on Ocean Drive, turquoise sky, midday sun, street-level perspective, vibrant colors"
- Denver: "Rocky Mountain skyline from Denver city park, snow-capped peaks, clear blue sky, wide landscape photography, golden hour light"
- Nashville: "Broadway honky-tonk district neon signs Nashville Tennessee, dusk blue hour, street photography perspective"
- London: "Tower Bridge spanning the River Thames, London skyline, dramatic golden hour light, wide angle architectural photography"
- Dubai: "Burj Khalifa tower against clear blue sky, modern Dubai skyline, sharp architectural photography, daytime"

Hard rules for city prompts:
- Use real, recognizable landmarks — verify they exist
- No invented landmarks
- No people's faces
- Natural light only — no neon halos or artificial glow

---

### ServiceExplanation rightSlot
Goal: clean product mockup showing the service type.

Template:
```
{service_type} interface mockup displayed on {device}, {color_palette} color scheme,
clean minimal {style} design, professional product photography, white or light background,
studio lighting, no text visible, --ar 4:3
```

Examples by service:
- web-design: "Beautiful website design mockup on MacBook Pro screen, blue and white color scheme, clean modern UI, studio lighting, white background"
- ecommerce: "Shopify store product page on laptop and iPhone simultaneously, clean e-commerce UI, white background, studio product photography"
- ai-agents: "AI automation dashboard on MacBook Pro, dark mode interface with clean data charts, blue accent colors, studio lighting"
- shopify: "Shopify storefront on laptop screen, modern product grid, clean white and orange design, studio photography"

---

### Portfolio card slots (×3)
Goal: website-on-screen photography that matches the specific industry.

Template:
```
{industry} website on laptop screen, {industry_color_palette} color palette,
clean modern web design, professional product photography, {lighting}
```

City-specific portfolio card prompts for Austin / web-design:

Card 1 — Health & Wellness:
```
Health and wellness brand website on MacBook Pro, green and white minimal design,
yoga or supplement brand landing page visible on screen, studio photography, white background
```

Card 2 — Food & Beverage:
```
Craft brewery or restaurant website on laptop and tablet simultaneously,
dark moody design with amber and charcoal palette, artisan food brand,
professional product photography, warm studio light
```

Card 3 — Real Estate:
```
Real estate agency website on desktop iMac monitor, clean professional navy and white design,
property listings visible on screen, Austin Texas office setting, natural light
```

For other cities, match industries to local economy:
- Miami: tourism, hospitality, healthcare, Latin food & beverage
- Denver: outdoor gear, tech, craft beer, real estate
- Nashville: music, hospitality, healthcare, real estate
- London: finance, legal, retail, hospitality
- Dubai: luxury retail, hospitality, real estate, finance

---

## generate-images.ts architecture

```typescript
// pipeline/scripts-ts/scripts/generate-images.ts
// Usage: pnpm run generate-images --country us --city austin --service web-design

import Runware from '@runware/sdk-js';
import { requireRunwareKey } from '../lib/keys';
import { glob } from 'glob';
import * as fs from 'fs/promises';
import * as path from 'path';
import sharp from 'sharp'; // for WebP conversion

interface RunwareSlot {
  prompt:     string;
  model:      string;
  width:      number;
  height:     number;
  outputPath: string;
}

async function main() {
  const args   = parseArgs(process.argv.slice(2));
  const runware = new Runware({ apiKey: requireRunwareKey() });

  // 1. Find the assembled page file
  const pageFile = resolvePageFile(args.country, args.city, args.service);

  // 2. Extract all runware-slot attributes via regex (no DOM parser needed)
  const slots = extractSlots(await fs.readFile(pageFile, 'utf8'));
  console.log(`Found ${slots.length} Runware slots in ${pageFile}`);

  // 3. Generate images in batches of 4
  const BATCH = 4;
  for (let i = 0; i < slots.length; i += BATCH) {
    const batch = slots.slice(i, i + BATCH);
    await Promise.all(batch.map(slot => generateAndSave(runware, slot)));
    console.log(`✓ Batch ${Math.floor(i / BATCH) + 1}/${Math.ceil(slots.length / BATCH)} complete`);
  }

  console.log('✓ All images generated. Run assembler to embed src paths.');
}

async function generateAndSave(runware: Runware, slot: RunwareSlot): Promise<void> {
  const result = await runware.requestImages({
    positivePrompt: slot.prompt,
    model:          slot.model,
    numberResults:  1,
    outputType:     ['URL'],
    width:          slot.width,
    height:         slot.height,
  });

  const imageUrl  = result[0].imageURL;
  const response  = await fetch(imageUrl);
  const buffer    = Buffer.from(await response.arrayBuffer());
  const webpBuffer = await sharp(buffer).webp({ quality: 85 }).toBuffer();

  const absPath = path.join(process.cwd(), '..', '..', slot.outputPath);
  await fs.mkdir(path.dirname(absPath), { recursive: true });
  await fs.writeFile(absPath, webpBuffer);
  console.log(`  ✓ Saved ${slot.outputPath}`);
}
```

---

## Prompt quality rules

### Always include
- Device or environment context (MacBook Pro, office, city landmark)
- Lighting condition (golden afternoon light, studio lighting, natural window light)
- Photography style (editorial photography, product photography, architectural photography)
- Negative: "no text visible on screen" for device slots

### Banned in all prompts
- People's faces (renders poorly, rights issues)
- Text/logos on screens (always renders garbled)
- Watermarks or copyright symbols
- "photorealistic portrait" — use environment/scene photography instead
- Brand names of competitors
- Generic stock-photo keywords like "beautiful woman smiling" or "diverse team"

### City localization
Each city's hero and portfolio images must feel geographically grounded:
- Include a subtle city-specific detail (office style, light quality, landmark glimpse)
- Do NOT just swap the city name — change the environmental context too
- Austin: warm Texas light, modern tech office, brick warehouses
- Miami: tropical light, pastel colors, ocean-adjacent environment
- Denver: mountain views through windows, outdoor brand aesthetic
- London: Georgian architecture glimpses, overcast-but-warm natural light
- Dubai: contemporary glass tower context, bright desert light

---

## Pipeline execution order

```
Step 1: Enrich city data        → pnpm enrich --country us --city austin
Step 2: Generate copy           → pnpm generate-copy --country us --city austin --service web-design
Step 3: Assemble page TSX       → pnpm assemble --country us --city austin --service web-design
Step 4: Generate images         → pnpm generate-images --country us --city austin --service web-design
Step 5: Lighthouse audit        → pnpm lighthouse --url http://localhost:3000/us/austin/web-design
Step 6: Push to production      → git push origin main (Cloudflare Pages auto-deploys)
```

Image generation (Step 4) runs AFTER assembly (Step 3) because the assembler
writes the `data-runware-*` attributes that the image script reads.

At 6 slots per page × 10 seconds average per image = ~60 seconds per page.
At 10 pages/day = ~10 minutes of GPU time/day. Well within Runware's rate limits.
