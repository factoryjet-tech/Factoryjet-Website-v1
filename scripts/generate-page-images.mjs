#!/usr/bin/env node
/**
 * Shared page-image generator for the 2026-08-12 US build.
 *
 * One script so the hard rules live in ONE place instead of being re-derived by every agent:
 *   - model is openai:gpt-image@2 (won our 2026-08-03 head-to-head on hands + UI text)
 *   - dimensions forced to multiples of 16 (Runware rejects otherwise)
 *   - the invented brand NORVELL is pinned into every prompt (left free, the model renders
 *     real retailers, e.g. EVERLANE across a storefront, which reads as a false client claim)
 *   - a style suffix that is the INVERSE of the rejected v1 set (high-key, deep focus, populated)
 *   - a negative-instruction suffix banning prices, metrics and dense screen text, because the
 *     smoke test came back with a product grid showing $29 / $49 / $25 on it
 *   - prompt is linted for currency/metric words BEFORE spending a generation
 *
 * Runware is PROMPT-ONLY. Passing negativePrompt returns HTTP 400, so the bans go in the prompt.
 *
 * Usage:
 *   node scripts/generate-page-images.mjs --slug dallas-web-design --brief /tmp/dallas.json
 *   node scripts/generate-page-images.mjs --slug x --brief b.json --outdir public/images/us/... --dry
 *
 * Brief JSON shape:
 *   [{ "name": "hero", "prompt": "...scene...", "width": 1264, "height": 848 }, ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const MODEL = 'openai:gpt-image@2';
const FALLBACK = 'google:4@3';
const BRAND = 'NORVELL';

const STYLE = [
  'Editorial commercial photograph.',
  'High-key bright natural daylight, deep focus throughout, sharp and crisp.',
  'Clean modern workspace, pale oak and white surfaces, exactly one burnt-orange accent object.',
  'Real people at work, candid posture, natural skin texture, anatomically correct hands,',
  'no eye contact with camera. Shot on 50mm at f5.6. Uniform exposure, full bleed composition.',
].join(' ');

// Runware is prompt-only, so the bans have to be stated positively in the prompt itself.
const BANS = [
  `Any brand name visible in the scene must read "${BRAND}" and no other brand.`,
  'Screens show image-led interfaces only: product photos, large colour blocks, and single short',
  'words such as Shop, New, Sale, Bags. No prices, no currency symbols, no numbers, no percentages,',
  'no dashboards, no charts, no scores, and no paragraphs of text anywhere in the frame.',
  'No text is in sharp focus. No logos of real companies.',
].join(' ');

// Cheap guard so we do not pay for a generation that was always going to violate the rules.
const PROMPT_LINT = [
  [/\$|£|₹|€|\bprice[sd]?\b|\bpricing\b|\bcost\b|\bdollar/i, 'currency or price wording'],
  [/\b\d{2,3}\s?%|\blighthouse\b|\bscore\b|\bmetric|\bkpi\b|\banalytics dashboard\b|\bgraph\b|\bchart\b/i, 'metric or dashboard wording'],
  [/\bshopify\b|\bamazon\b|\bnike\b|\bapple\b|\beverlane\b|\bwalmart\b|\betsy\b/i, 'a real brand name'],
];

function args() {
  const a = process.argv.slice(2);
  const get = (k, d) => { const i = a.indexOf(`--${k}`); return i >= 0 ? a[i + 1] : d; };
  return {
    slug: get('slug'),
    brief: get('brief'),
    outdir: get('outdir'),
    model: get('model', MODEL),
    dry: a.includes('--dry'),
  };
}

function apiKey() {
  const p = path.join(ROOT, '.env.local');
  const m = fs.readFileSync(p, 'utf8').match(/RUNWARE_API_KEY=(.+)/);
  if (!m) throw new Error('RUNWARE_API_KEY missing from .env.local');
  return m[1].trim();
}

const mul16 = (n) => Math.max(256, Math.round(n / 16) * 16);

function buildPrompt(scene) {
  for (const [re, why] of PROMPT_LINT) {
    if (re.test(scene)) {
      throw new Error(`Prompt rejected before spending a generation: contains ${why}.\n  "${scene}"`);
    }
  }
  return `${scene.trim()} ${STYLE} ${BANS}`;
}

async function generate(key, prompt, width, height, model) {
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { taskType: 'authentication', apiKey: key },
      {
        taskType: 'imageInference',
        taskUUID: crypto.randomUUID(),
        positivePrompt: prompt,
        width, height, model,
        numberResults: 1,
        outputFormat: 'JPG',
      },
    ]),
  });
  const json = await res.json();
  const img = (json.data || []).find((d) => d.taskType === 'imageInference');
  if (!img) throw new Error(JSON.stringify(json.errors || json).slice(0, 300));
  return img.imageURL;
}

async function main() {
  const { slug, brief, outdir, model, dry } = args();
  if (!slug || !brief) {
    console.error('usage: --slug <page-slug> --brief <brief.json> [--outdir dir] [--dry]');
    process.exit(1);
  }
  const items = JSON.parse(fs.readFileSync(brief, 'utf8'));
  const dir = outdir ? path.resolve(ROOT, outdir) : path.join(ROOT, 'public', 'images', 'us', slug);
  fs.mkdirSync(dir, { recursive: true });

  const key = apiKey();
  const made = [];
  for (const it of items) {
    const w = mul16(it.width || 1264);
    const h = mul16(it.height || 848);
    let prompt;
    try {
      prompt = buildPrompt(it.prompt);
    } catch (e) {
      console.error(`  SKIP ${it.name}: ${e.message}`);
      continue;
    }
    if (dry) { console.log(`  [dry] ${it.name} ${w}x${h}\n    ${prompt.slice(0, 160)}...`); continue; }

    let url;
    try {
      url = await generate(key, prompt, w, h, model);
    } catch (e) {
      console.error(`  ${it.name}: ${model} failed (${String(e.message).slice(0, 90)}), trying ${FALLBACK}`);
      url = await generate(key, prompt, w, h, FALLBACK);
    }
    const jpg = path.join(dir, `${it.name}.jpg`);
    fs.writeFileSync(jpg, Buffer.from(await (await fetch(url)).arrayBuffer()));
    const webp = path.join(dir, `${it.name}.webp`);
    execFileSync('cwebp', ['-quiet', '-q', '82', jpg, '-o', webp]);
    fs.unlinkSync(jpg);
    const kb = Math.round(fs.statSync(webp).size / 1024);
    made.push({ name: it.name, file: path.relative(ROOT, webp), w, h, kb });
    console.log(`  ok ${it.name.padEnd(18)} ${w}x${h}  ${kb}KB  ${path.relative(ROOT, webp)}`);
  }

  if (made.length) {
    console.log('\nREVIEW REQUIRED. Open every file above with the Read tool and check hands,');
    console.log('faces, and any rendered text before you use it on a page. Policy, not a suggestion.');
    console.log(`\npublic path prefix: /images/us/${slug}/`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
