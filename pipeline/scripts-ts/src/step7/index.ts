#!/usr/bin/env node
/**
 * CLI entry for Step 7 page-copy generation.
 *
 * Usage:
 *   pnpm generate --city <slug> --service <slug> [--country <gb|us|au|ca>]
 *                 [--dry-run] [--force]
 *
 * Default country: gb. Default service: web-design (the only one with a
 * seed today).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WEB_DESIGN_SERVICE, type ServiceSeed } from '../../config/services/web-design.js';
import type { CityEnrichment } from '../../config/city-data/types.js';
import { generatePageCopy } from './copyGenerator.js';
import { validatePageCopy } from './copyValidator.js';
import type { PageCopyOutput, PageGenerationInput } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// pipeline/scripts-ts/src/step7/ -> pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');

const COUNTRY_NAMES: Record<string, string> = {
  gb: 'United Kingdom',
  us: 'United States',
  au: 'Australia',
  ca: 'Canada',
};

interface CliArgs {
  city: string;
  service: string;
  country: 'gb' | 'us' | 'au' | 'ca';
  dryRun: boolean;
  force: boolean;
  help: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    city: '',
    service: 'web-design',
    country: 'gb',
    dryRun: false,
    force: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--dry-run') {
      args.dryRun = true;
    } else if (a === '--force') {
      args.force = true;
    } else if (a === '--city') {
      const v = argv[++i];
      if (!v) throw new Error('--city requires a value');
      args.city = v;
    } else if (a === '--service') {
      const v = argv[++i];
      if (!v) throw new Error('--service requires a value');
      args.service = v;
    } else if (a === '--country') {
      const v = argv[++i];
      if (v !== 'gb' && v !== 'us' && v !== 'au' && v !== 'ca') {
        throw new Error(`invalid --country: ${v}`);
      }
      args.country = v;
    } else {
      throw new Error(`unknown argument: ${a}`);
    }
  }
  return args;
}

function printHelp(): void {
  // eslint-disable-next-line no-console
  console.log(
    [
      'Usage: pnpm generate --city <slug> --service <slug> [--country gb|us|au|ca] [--dry-run] [--force]',
      '',
      '  --city <slug>      Required. City slug matching pipeline/scripts-ts/data/enriched/<country>/<slug>.json',
      '  --service <slug>   Required. Service slug. Currently only "web-design" is supported.',
      '  --country <code>   gb | us | au | ca (default: gb)',
      '  --dry-run          Generate copy and validate; do not write file.',
      '  --force            Overwrite existing output file.',
      '  --help             Print this help.',
      '',
      'Env: ANTHROPIC_API_KEY (required; loaded from ~/.factoryjet/anthropic.env if file present)',
    ].join('\n'),
  );
}

function loadCity(country: string, slug: string): CityEnrichment {
  const path = join(SCRIPTS_TS_ROOT, 'data', 'enriched', country, `${slug}.json`);
  if (!existsSync(path)) {
    // eslint-disable-next-line no-console
    console.error(
      `[generate] Enriched city file not found: ${path}\n` +
        `Run Step 5 (city enrichment) for this city first.`,
    );
    process.exit(1);
  }
  const raw = readFileSync(path, 'utf-8');
  return JSON.parse(raw) as CityEnrichment;
}

function loadService(slug: string): ServiceSeed {
  if (slug !== 'web-design') {
    // eslint-disable-next-line no-console
    console.error(
      `[generate] Service seed not found for "${slug}". Only "web-design" is available today.`,
    );
    process.exit(1);
  }
  return WEB_DESIGN_SERVICE;
}

/**
 * Pricing benchmark heuristic:
 *   1. Extract numeric GBP figures from competitor pricingNotes when
 *      pricingPublic === true.
 *   2. If no public-priced competitors, return 5000 GBP fallback.
 *   3. Mean of extracted floors.
 */
function computeCompetitorPricingBenchmark(city: CityEnrichment): {
  value: number;
  path: 'computed' | 'fallback';
} {
  const publicPriced = city.competitors.filter((c) => c.pricingPublic);
  if (publicPriced.length === 0) {
    return { value: 5000, path: 'fallback' };
  }
  const figures: number[] = [];
  for (const c of publicPriced) {
    const notes = c.pricingNotes ?? '';
    // Match £1,200 or £1200 — capture the first numeric figure.
    const match = notes.match(/£\s*([\d,]+)/);
    if (match && match[1]) {
      const n = Number(match[1].replace(/,/g, ''));
      if (Number.isFinite(n) && n > 0) figures.push(n);
    }
  }
  if (figures.length === 0) return { value: 5000, path: 'fallback' };
  const mean = Math.round(figures.reduce((a, b) => a + b, 0) / figures.length);
  return { value: mean, path: 'computed' };
}

function buildTargetKeyword(serviceSlug: string, citySlug: string): string {
  // "web-design" + "london" -> "web design london"
  return `${serviceSlug.replace(/-/g, ' ')} ${citySlug.replace(/-/g, ' ')}`;
}

function outputPath(country: string, citySlug: string, serviceSlug: string): string {
  return join(
    SCRIPTS_TS_ROOT,
    'data',
    'generated',
    country,
    citySlug,
    `${serviceSlug}.copy.json`,
  );
}

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  let args: CliArgs;
  try {
    args = parseArgs(argv);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`error: ${err instanceof Error ? err.message : String(err)}\n`);
    printHelp();
    process.exit(2);
  }

  if (args.help || !args.city) {
    if (!args.help && !args.city) {
      // eslint-disable-next-line no-console
      console.error('error: --city is required\n');
    }
    printHelp();
    process.exit(args.help ? 0 : 2);
  }

  const city = loadCity(args.country, args.city);
  const service = loadService(args.service);
  const benchmark = computeCompetitorPricingBenchmark(city);
  // eslint-disable-next-line no-console
  console.log(
    `[generate] competitorPricingBenchmark: £${benchmark.value.toLocaleString()} (${benchmark.path})`,
  );

  const input: PageGenerationInput = {
    city,
    service,
    country: args.country,
    targetKeyword: buildTargetKeyword(args.service, args.city),
    competitorPricingBenchmark: benchmark.value,
  };

  const output = await generatePageCopy(input);

  // Auto-trim guard: meta.description has a hard 160-char SERP cutoff.
  // Sampling variance at temperature 0 can still overshoot by a few chars;
  // we prefer a clean trim over rejecting a $0.10 generation.
  if (output.meta.description.length > 160) {
    output.meta.description = output.meta.description.slice(0, 157) + '…';
  }

  const validation = validatePageCopy(output);
  output.wordCountEstimate = validation.wordCountEstimate;

  // ---------- Summary ----------
  const cityDisplay = args.city
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
  const path = outputPath(args.country, args.city, args.service);

  let status = 'PASSED';
  if (!validation.passed) status = 'FAILED';
  else if (validation.warnings.length > 0) status = 'PASSED WITH WARNINGS';

  // eslint-disable-next-line no-console
  console.log('');
  // eslint-disable-next-line no-console
  console.log(`City: ${cityDisplay} (${args.country.toUpperCase()})`);
  // eslint-disable-next-line no-console
  console.log(`Service: ${service.name}`);
  // eslint-disable-next-line no-console
  console.log(`Sections generated: 9`);
  // eslint-disable-next-line no-console
  console.log(`Word count estimate: ${validation.wordCountEstimate}`);
  // eslint-disable-next-line no-console
  console.log(
    `Uniqueness score: ${validation.uniquenessScore.toFixed(2)} (${output.uniquenessFlags.length} flags)`,
  );
  // eslint-disable-next-line no-console
  console.log(`Validation: ${status}`);

  if (validation.errors.length > 0) {
    // eslint-disable-next-line no-console
    console.log('');
    // eslint-disable-next-line no-console
    console.log('ERRORS:');
    for (const e of validation.errors) {
      // eslint-disable-next-line no-console
      console.log(`  - ${e}`);
    }
  }

  if (validation.warnings.length > 0) {
    // eslint-disable-next-line no-console
    console.log('');
    // eslint-disable-next-line no-console
    console.log('WARNINGS:');
    for (const w of validation.warnings) {
      // eslint-disable-next-line no-console
      console.log(`  - ${w}`);
    }
  }

  if (!validation.passed) {
    process.exit(1);
  }

  // ---------- Write or skip ----------
  if (args.dryRun) {
    // eslint-disable-next-line no-console
    console.log('');
    // eslint-disable-next-line no-console
    console.log(`[DRY RUN] Output would be: ${path}`);
    return;
  }

  if (existsSync(path) && !args.force) {
    // eslint-disable-next-line no-console
    console.error(
      `\nOutput already exists: ${path}\nUse --force to overwrite.`,
    );
    process.exit(1);
  }

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  // eslint-disable-next-line no-console
  console.log('');
  // eslint-disable-next-line no-console
  console.log(`Output written: ${path}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`[generate] fatal: ${err instanceof Error ? err.message : String(err)}`);
  if (err instanceof Error && err.stack) {
    // eslint-disable-next-line no-console
    console.error(err.stack);
  }
  process.exit(1);
});

void COUNTRY_NAMES;
