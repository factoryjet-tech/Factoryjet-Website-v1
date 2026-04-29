/**
 * Combined city catalog. Importers should pull from here, not from
 * the per-country files directly — keeps the call site country-agnostic.
 */

import type { City } from './types.js';
import { UK_CITIES } from './uk.js';
import { US_CITIES } from './us.js';

export type { City } from './types.js';

export const ALL_CITIES: readonly City[] = [...UK_CITIES, ...US_CITIES];

export function getCitiesByCountry(countryCode: string): readonly City[] {
  return ALL_CITIES.filter((c) => c.countryCode === countryCode.toUpperCase());
}

export function getCityBySlug(slug: string): City | undefined {
  return ALL_CITIES.find((c) => c.slug === slug);
}

export { UK_CITIES, US_CITIES };
