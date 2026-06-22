import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import type { CountryCode, Locale } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// lib/locales/ -> lib/ -> pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');

const _require = createRequire(import.meta.url);

export function resolveLocale(countryCode: CountryCode): Locale {
  const localeFile = join(
    SCRIPTS_TS_ROOT,
    'data',
    'locales',
    countryCode,
    'locale.json',
  );
  if (!existsSync(localeFile)) {
    throw new Error(`Locale not found for country: ${countryCode}`);
  }
  return _require(localeFile) as Locale;
}
