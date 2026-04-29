import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CityEnrichment } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ENRICHED_DIR = join(__dirname, '..', '..', 'data', 'enriched', 'gb');

function loadUkCityData(): Record<string, CityEnrichment> {
  const result: Record<string, CityEnrichment> = {};
  let files: string[];
  try {
    files = readdirSync(ENRICHED_DIR).filter((f) => f.endsWith('.json'));
  } catch {
    // Directory missing on a fresh checkout — empty catalog is correct.
    return result;
  }
  for (const file of files) {
    const slug = file.replace(/\.json$/, '');
    const raw = readFileSync(join(ENRICHED_DIR, file), 'utf-8');
    const parsed = JSON.parse(raw) as CityEnrichment;
    // Trust the writer: validation happens at write time, not at load time.
    // A separate `pnpm validate-city-data` script (future) re-validates on demand.
    result[slug] = parsed;
  }
  return result;
}

export const ukCityData: Record<string, CityEnrichment> = loadUkCityData();
