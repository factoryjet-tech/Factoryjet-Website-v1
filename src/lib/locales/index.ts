/**
 * Locale resolver — entry point for runtime locale lookup.
 *
 * `resolveLocale(country)` returns the populated `Locale` object for a
 * given country code. Throws on unpopulated countries so the failure mode
 * is explicit (silent locale-undefined would lead to subtle UI bugs in
 * ProgSEO routes).
 *
 * Currently populated: gb, us. Other CountryCode values exist in the type
 * (au, ae, in, br, mx) but their `locale.json` files are not yet authored
 * — they're added in M1.d.4 and later.
 *
 * Per factoryjet.DESIGN.md §5.
 */

import type { Locale, CountryCode } from './types';
import gbLocale from '@/data/countries/gb/locale.json';
import usLocale from '@/data/countries/us/locale.json';

/* Partial<Record<...>> — only populated countries appear as keys; the
 * resolver throws for missing ones rather than returning `undefined`,
 * so consumers can rely on the return type being `Locale`, not `Locale | undefined`. */
const LOCALE_MAP: Partial<Record<CountryCode, Locale>> = {
  gb: gbLocale as Locale,
  us: usLocale as Locale,
  // au, ae, in, br, mx — locale.json not yet populated; added in later patches.
};

export function resolveLocale(country: CountryCode): Locale {
  const locale = LOCALE_MAP[country];
  if (!locale) {
    throw new Error(
      `Locale not yet populated for country: ${country}. ` +
        `Populated: ${Object.keys(LOCALE_MAP).join(', ')}`,
    );
  }
  return locale;
}

/**
 * Reverse lookup: given a BCP 47 language tag (e.g. "en-GB"), return the
 * matching `CountryCode` if one is populated. Used to align with
 * `src/data/hreflangMap.ts` which keys cross-locale URLs by BCP 47.
 *
 * Returns `undefined` (rather than throwing) because the caller is
 * typically resolving from external/SEO input where unknown values are
 * expected.
 */
export function bcp47ToCountryCode(bcp47: string): CountryCode | undefined {
  const normalized = bcp47.toLowerCase();
  for (const [code, locale] of Object.entries(LOCALE_MAP)) {
    if (locale && locale.bcp47.toLowerCase() === normalized) {
      return code as CountryCode;
    }
  }
  return undefined;
}

/**
 * List of populated country codes — useful for build-time enumeration of
 * routes that have locale data available.
 */
export function listPopulatedLocales(): CountryCode[] {
  return Object.keys(LOCALE_MAP) as CountryCode[];
}

export type { Locale, CountryCode } from './types';
