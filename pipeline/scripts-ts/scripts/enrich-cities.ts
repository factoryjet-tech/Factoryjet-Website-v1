#!/usr/bin/env node
/**
 * CLI entry for the city enrichment runner.
 *
 * Usage:
 *   pnpm enrich [options]
 *
 * Options:
 *   --country <gb|us|all>   Country to enrich (default: all)
 *   --city <slug>           Single city; overrides --country
 *   --limit <n>             Max cities to process this run (default: env MAX_CITIES_PER_RUN or 5)
 *   --force                 Re-enrich cities that already have data
 *   --dry-run               Walk the plan without calling Anthropic
 *   --help                  Print usage
 *
 * Env:
 *   ANTHROPIC_API_KEY       Required for non-dry-run; loaded from ~/.factoryjet/anthropic.env
 *   MAX_CITIES_PER_RUN      Default 5
 *   MAX_USD_PER_RUN         Default 5
 *   WALL_CLOCK_PER_CITY_MS  Default 240000
 */

import { UK_CITIES, US_CITIES } from '../config/cities/index.js';
import type { City } from '../config/cities/types.js';
import { enrichBatch } from '../lib/city-enrichment/index.js';
import type { EnrichmentJob } from '../lib/city-enrichment/types.js';

interface CliArgs {
  country: 'gb' | 'us' | 'all';
  city?: string;
  limit: number;
  force: boolean;
  dryRun: boolean;
  help: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    country: 'all',
    limit: Number(process.env.MAX_CITIES_PER_RUN ?? 5),
    force: false,
    dryRun: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--force') {
      args.force = true;
    } else if (a === '--dry-run') {
      args.dryRun = true;
    } else if (a === '--country') {
      const v = argv[++i];
      if (v !== 'gb' && v !== 'us' && v !== 'all') throw new Error(`invalid --country: ${v}`);
      args.country = v;
    } else if (a === '--city') {
      args.city = argv[++i];
    } else if (a === '--limit') {
      const raw = argv[++i];
      const n = Number(raw);
      if (!Number.isFinite(n) || n <= 0) throw new Error('--limit must be a positive integer');
      args.limit = n;
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
      'Usage: pnpm enrich [options]',
      '',
      '  --country <gb|us|all>   Country to enrich (default: all)',
      '  --city <slug>           Single city; overrides --country',
      '  --limit <n>             Max cities (default: env MAX_CITIES_PER_RUN or 5)',
      '  --force                 Re-enrich existing records',
      '  --dry-run               Walk the plan without calling Anthropic',
      '  --help                  Print this message',
      '',
      'Env: ANTHROPIC_API_KEY (required for non-dry-run, loaded from ~/.factoryjet/anthropic.env)',
    ].join('\n'),
  );
}

function buildJobs(args: CliArgs): EnrichmentJob[] {
  const ukJobs: EnrichmentJob[] = UK_CITIES.map((c: City) => ({
    citySlug: c.slug,
    cityDisplayName: c.name,
    countryCode: 'GB',
    countryDisplayName: 'United Kingdom',
  }));
  const usJobs: EnrichmentJob[] = US_CITIES.map((c: City) => ({
    citySlug: c.slug,
    cityDisplayName: c.name,
    countryCode: 'US',
    countryDisplayName: 'United States',
  }));

  if (args.city) {
    const all = [...ukJobs, ...usJobs];
    const found = all.find((j) => j.citySlug === args.city);
    if (!found) throw new Error(`city slug not found: ${args.city}`);
    return [found];
  }

  if (args.country === 'gb') return ukJobs;
  if (args.country === 'us') return usJobs;
  return [...ukJobs, ...usJobs];
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

  if (args.help) {
    printHelp();
    return;
  }

  const jobs = buildJobs(args);

  // eslint-disable-next-line no-console
  console.error(
    `[enrich] mode=${args.dryRun ? 'dry-run' : 'live'} country=${args.country} city=${
      args.city ?? '(any)'
    } limit=${args.limit} force=${args.force}`,
  );
  // eslint-disable-next-line no-console
  console.error(`[enrich] ${jobs.length} candidate jobs (will process up to ${args.limit})`);

  const outcomes = await enrichBatch({
    jobs,
    budget: {
      maxCities: args.limit,
      maxUsdPerRun: Number(process.env.MAX_USD_PER_RUN ?? 5),
      wallClockPerCityMs: Number(process.env.WALL_CLOCK_PER_CITY_MS ?? 240_000),
    },
    force: args.force,
    dryRun: args.dryRun,
    onOutcome: (o) => {
      // eslint-disable-next-line no-console
      console.error(
        `  [${o.outcome}] ${o.citySlug} (${o.countryCode})  cost=$${o.costUsd.toFixed(4)}  ${
          o.errorMessage ?? o.outputPath ?? ''
        }`,
      );
    },
  });

  const success = outcomes.filter((o) => o.outcome === 'success').length;
  const failed = outcomes.length - success;
  // eslint-disable-next-line no-console
  console.error(`[enrich] done: ${success} success, ${failed} other`);

  if (failed > 0 && success === 0) process.exit(1);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`[enrich] fatal: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
