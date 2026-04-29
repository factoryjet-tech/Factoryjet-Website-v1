/**
 * City catalog types. Shared between UK and US (and future country)
 * catalog files.
 */

import type { CountryCode } from '../../lib/keyword-research/types.js';

export interface City {
  /** URL-safe slug, e.g. 'london', 'san-francisco'. Used in page paths. */
  slug: string;
  /** Display name for headlines, meta tags, etc. */
  name: string;
  /** ISO 3166-1 alpha-2 country code. Joins with country-tiers paying capacity. */
  countryCode: CountryCode;
  /** Approximate metro-area population. */
  population: number;
  /**
   * Tier within the country (1=highest priority, 3=lowest).
   * Used to bias scoring when two candidates are otherwise equivalent.
   */
  tier: 1 | 2 | 3;
  /** Search-term variants users might type. First entry is canonical. */
  keywords: readonly string[];
}
