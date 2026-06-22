/**
 * Geographic priority scoring constants for the FactoryJet pipeline.
 *
 * Source of truth: GTM brand profile + carry-over rubric.
 *   US=10, UK=9, AU=8, Canada=8, W.Europe=7, MENA=6,
 *   Other Americas=5, India=3, S/SE Asia=3.
 *
 * `payingCapacity` is one factor of:
 *   score = volume × intent × payingCapacity × competitionGap
 *
 * NOTE: Singapore (SG) is included at SEA=3 per the literal rubric, but
 * has materially higher paying capacity than the regional average. Revisit
 * before any SG pages are scored for production publishing.
 */

export type Region =
  | 'NA'
  | 'EU'
  | 'OC'
  | 'MENA'
  | 'LATAM'
  | 'SA'
  | 'SEA';

export interface CountryTier {
  /** ISO 3166-1 alpha-2 */
  code: string;
  name: string;
  region: Region;
  /** 1–10 scoring weight (higher = stronger paying market) */
  payingCapacity: number;
}

export const COUNTRY_TIERS: Record<string, CountryTier> = {
  // Tier 1
  US: { code: 'US', name: 'United States', region: 'NA', payingCapacity: 10 },
  GB: { code: 'GB', name: 'United Kingdom', region: 'EU', payingCapacity: 9 },
  AU: { code: 'AU', name: 'Australia', region: 'OC', payingCapacity: 8 },
  CA: { code: 'CA', name: 'Canada', region: 'NA', payingCapacity: 8 },

  // W. Europe (= 7)
  DE: { code: 'DE', name: 'Germany', region: 'EU', payingCapacity: 7 },
  FR: { code: 'FR', name: 'France', region: 'EU', payingCapacity: 7 },
  NL: { code: 'NL', name: 'Netherlands', region: 'EU', payingCapacity: 7 },
  IE: { code: 'IE', name: 'Ireland', region: 'EU', payingCapacity: 7 },
  CH: { code: 'CH', name: 'Switzerland', region: 'EU', payingCapacity: 7 },
  SE: { code: 'SE', name: 'Sweden', region: 'EU', payingCapacity: 7 },

  // MENA (= 6)
  AE: { code: 'AE', name: 'United Arab Emirates', region: 'MENA', payingCapacity: 6 },
  SA: { code: 'SA', name: 'Saudi Arabia', region: 'MENA', payingCapacity: 6 },
  QA: { code: 'QA', name: 'Qatar', region: 'MENA', payingCapacity: 6 },

  // Other Americas (= 5)
  MX: { code: 'MX', name: 'Mexico', region: 'LATAM', payingCapacity: 5 },
  BR: { code: 'BR', name: 'Brazil', region: 'LATAM', payingCapacity: 5 },

  // India (= 3)
  IN: { code: 'IN', name: 'India', region: 'SA', payingCapacity: 3 },

  // S/SE Asia (= 3) — see file header note re: Singapore.
  SG: { code: 'SG', name: 'Singapore', region: 'SEA', payingCapacity: 3 },
  PH: { code: 'PH', name: 'Philippines', region: 'SEA', payingCapacity: 3 },
  ID: { code: 'ID', name: 'Indonesia', region: 'SEA', payingCapacity: 3 },
};

/** Returns paying-capacity weight for a country code, or `1` if unknown. */
export function getPayingCapacity(countryCode: string): number {
  const tier = COUNTRY_TIERS[countryCode.toUpperCase()];
  return tier?.payingCapacity ?? 1;
}

/** Returns the full tier record, or `undefined` if unknown. */
export function getCountryTier(countryCode: string): CountryTier | undefined {
  return COUNTRY_TIERS[countryCode.toUpperCase()];
}
