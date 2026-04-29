import type { CountryCode } from '../../config/city-data/index.js';

export interface EnrichmentJob {
  citySlug: string;
  cityDisplayName: string;
  countryCode: CountryCode;
  countryDisplayName: string;
}

export interface EnrichmentOutcome {
  citySlug: string;
  countryCode: CountryCode;
  outcome: 'success' | 'validation_failed' | 'parse_failed' | 'api_error';
  costUsd: number;
  durationMs: number;
  /** On failure, path to the staging file. On success, path to the enriched file. */
  outputPath?: string;
  errorMessage?: string;
}

export interface RunBudget {
  maxCities: number;
  maxUsdPerRun: number;
  wallClockPerCityMs: number;
}
