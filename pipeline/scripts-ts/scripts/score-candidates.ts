/**
 * CLI: run the full opportunity-scoring pipeline against the mock
 * provider and print ranked top-N globally and per-country.
 *
 * This is the first script that produces actually-useful pipeline
 * output (vs. the smoke tests which prove infrastructure). The mock
 * provider's deterministic output means the rankings are reproducible
 * across runs — useful for human eyeballing during development.
 *
 * Usage:
 *   pnpm score                  # default top-50 global, top-25 per country
 *   pnpm score 100              # top-100 global
 *   pnpm score 100 50           # top-100 global, top-50 per country
 *
 * Replace 'mock' with 'google-ads' here once Patch #11 lands.
 */

import { runScoringPipeline } from '../lib/opportunity-scoring/index.js';
// Side-effect import: registers all currently-implemented providers.
import '../lib/keyword-research/providers/index.js';

const PROVIDER = 'mock';

function pad(s: string, width: number): string {
  if (s.length >= width) return s.slice(0, width);
  return s + ' '.repeat(width - s.length);
}

function fmtPct(n: number): string {
  return (n * 100).toFixed(1).padStart(5, ' ') + '%';
}

function main(globalTop: number, perCountryTop: number): Promise<void> {
  return runScoringPipeline({ provider: PROVIDER }).then((result) => {
    console.log('\n=========================================================');
    console.log(' FactoryJet — Opportunity Scoring (provider: ' + PROVIDER + ')');
    console.log('=========================================================');
    console.log(
      ` Candidates scored : ${result.stats.candidateCount}` +
        ` | Countries: ${result.stats.countriesScored}` +
        ` | Duration: ${result.stats.durationMs}ms`,
    );

    // Global top-N.
    console.log(`\n--- TOP ${globalTop} GLOBAL ---`);
    console.log(
      pad('#', 4) +
        pad('Total', 8) +
        pad('Vol', 7) +
        pad('Int', 7) +
        pad('Pay', 7) +
        pad('Gap', 7) +
        pad('Country', 9) +
        pad('Candidate', 50),
    );
    console.log('-'.repeat(99));
    for (let i = 0; i < Math.min(globalTop, result.ranked.length); i++) {
      const sc = result.ranked[i];
      if (!sc) continue;
      console.log(
        pad(String(i + 1), 4) +
          pad(fmtPct(sc.breakdown.total), 8) +
          pad(fmtPct(sc.breakdown.volume), 7) +
          pad(fmtPct(sc.breakdown.intent), 7) +
          pad(fmtPct(sc.breakdown.payingCapacity), 7) +
          pad(fmtPct(sc.breakdown.competitionGap), 7) +
          pad(sc.candidate.city.countryCode, 9) +
          pad(sc.candidate.targetKeyword, 50),
      );
    }

    // Per-country.
    for (const [countryCode, group] of result.byCountry.entries()) {
      console.log(`\n--- TOP ${perCountryTop} — ${countryCode} ---`);
      console.log(
        pad('#', 4) +
          pad('Total', 8) +
          pad('Vol', 7) +
          pad('Int', 7) +
          pad('Gap', 7) +
          pad('Candidate', 50),
      );
      console.log('-'.repeat(82));
      for (let i = 0; i < Math.min(perCountryTop, group.length); i++) {
        const sc = group[i];
        if (!sc) continue;
        console.log(
          pad(String(i + 1), 4) +
            pad(fmtPct(sc.breakdown.total), 8) +
            pad(fmtPct(sc.breakdown.volume), 7) +
            pad(fmtPct(sc.breakdown.intent), 7) +
            pad(fmtPct(sc.breakdown.competitionGap), 7) +
            pad(sc.candidate.targetKeyword, 50),
        );
      }
    }

    console.log('\n');
  });
}

const args = process.argv.slice(2);
const globalTopArg = args[0] ? Number.parseInt(args[0], 10) : 50;
const perCountryTopArg = args[1] ? Number.parseInt(args[1], 10) : 25;
const globalTop = Number.isFinite(globalTopArg) && globalTopArg > 0 ? globalTopArg : 50;
const perCountryTop =
  Number.isFinite(perCountryTopArg) && perCountryTopArg > 0 ? perCountryTopArg : 25;

main(globalTop, perCountryTop)
  .then(() => process.exit(0))
  .catch((err: unknown) => {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\n[score] FAILED: ${msg}`);
    if (err instanceof Error && err.stack) console.error(err.stack);
    process.exit(1);
  });
