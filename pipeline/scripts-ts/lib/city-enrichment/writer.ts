import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ValidationIssue } from './validator.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// pipeline/scripts-ts/lib/city-enrichment/ -> pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');

function enrichedDir(country: 'GB' | 'US'): string {
  const sub = country === 'GB' ? 'gb' : 'us';
  return join(SCRIPTS_TS_ROOT, 'data', 'enriched', sub);
}

function stagingDir(): string {
  return join(SCRIPTS_TS_ROOT, 'data', 'staging');
}

export function writeEnrichedRecord(
  country: 'GB' | 'US',
  citySlug: string,
  record: unknown,
): string {
  const dir = enrichedDir(country);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${citySlug}.json`);
  writeFileSync(path, JSON.stringify(record, null, 2) + '\n', 'utf-8');
  return path;
}

export interface FailureRecord {
  citySlug: string;
  countryCode: 'GB' | 'US';
  outcome: 'validation_failed' | 'parse_failed' | 'model_error';
  rawText?: string;
  modelError?: string;
  issues?: ValidationIssue[];
  recordedAt: string;
}

export function writeFailure(failure: FailureRecord): string {
  const dir = stagingDir();
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${failure.citySlug}.failed.json`);
  writeFileSync(path, JSON.stringify(failure, null, 2) + '\n', 'utf-8');
  return path;
}
