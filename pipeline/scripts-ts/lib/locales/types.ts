/**
 * Pipeline-local mirror of src/lib/locales/types.ts.
 *
 * Must stay field-for-field identical to the runtime Locale interface
 * (M1.d.3). The only addition is `benchmarkFallback`, which is
 * pipeline-only.
 */

export type CountryCode = 'gb' | 'us' | 'au' | 'ae' | 'in' | 'br' | 'mx';

export interface Locale {
  countryCode: CountryCode;
  countryName: string;
  countryAdjective: string;
  bcp47: string;
  currencyCode: string;
  currencySymbol: string;
  currencyName: string;
  languageCode: string;
  officialStatsBodyName: string;
  officialStatsBodyUrl: string;
  regulatoryAuthorityName: string;
  agencyArchetypeLabel: string;
  /** Numeric currency fallback used when no public-priced competitors are found.
   *  Currency-coded by locale (i.e. 5000 means 5000 GBP for gb, 6500 USD for us, etc.). */
  benchmarkFallback: number;
}
