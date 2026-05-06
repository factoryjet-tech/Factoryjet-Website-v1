/**
 * Locale type contract for the v2 ProgSEO multi-country pivot.
 *
 * One `Locale` describes a single country's resolved runtime context —
 * currency, language, regulatory authority, official stats body, and the
 * agency-archetype string that ComparisonTable / IndustriesGrid copy
 * pulls in for the "local agency" comparator.
 *
 * Per-country `locale.json` files at `src/data/countries/<cc>/locale.json`
 * MUST conform to this shape. The resolver in `src/lib/locales/index.ts`
 * imports those JSONs typed `as Locale` so any drift surfaces at typecheck.
 *
 * Per factoryjet.DESIGN.md §5.
 */

export type CountryCode = 'gb' | 'us' | 'au' | 'ae' | 'in' | 'br' | 'mx';

export interface Locale {
  /** Lowercase ISO 3166-1 alpha-2 code. Matches the directory name under
   *  `src/data/countries/`. */
  countryCode: CountryCode;
  /** Display name, e.g. "United Kingdom". */
  countryName: string;
  /** Adjectival form, e.g. "British" / "American". Used in body copy and
   *  comparison-table archetype labels. */
  countryAdjective: string;
  /** BCP 47 language tag, e.g. "en-GB". Aligns with the keys in
   *  `src/data/hreflangMap.ts`. */
  bcp47: string;
  /** ISO 4217 currency code, e.g. "GBP". */
  currencyCode: string;
  /** Render-ready currency symbol, e.g. "£". */
  currencySymbol: string;
  /** Currency display name, e.g. "Pound Sterling". */
  currencyName: string;
  /** ISO 639-1 language code (without region), e.g. "en". */
  languageCode: string;
  /** Display name of the country's official statistics body. */
  officialStatsBodyName: string;
  /** Canonical URL for the stats body homepage (no trailing slash). */
  officialStatsBodyUrl: string;
  /** Display name of the primary regulatory / corporate-registry authority. */
  regulatoryAuthorityName: string;
  /** Short label used in ComparisonTable / IndustriesGrid copy to refer to
   *  the country's local-agency archetype, e.g. "London digital agency". */
  agencyArchetypeLabel: string;
}
