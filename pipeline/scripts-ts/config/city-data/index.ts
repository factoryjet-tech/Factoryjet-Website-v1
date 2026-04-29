import type { CityEnrichment } from './types.js';
import { ukCityData } from './uk.js';
import { usCityData } from './us.js';

export type {
  CityEnrichment,
  Source,
  SourcedNumber,
  IndustryProfile,
  Competitor,
  Landmark,
  LandmarkType,
} from './types.js';
export { CURRENT_ENRICHMENT_VERSION } from './types.js';
export { ukCityData, usCityData };

export type CountryCode = 'GB' | 'US';

export function getCityEnrichment(country: CountryCode, slug: string): CityEnrichment | undefined {
  if (country === 'GB') return ukCityData[slug];
  if (country === 'US') return usCityData[slug];
  return undefined;
}

export function listEnrichedSlugs(country: CountryCode): string[] {
  if (country === 'GB') return Object.keys(ukCityData);
  if (country === 'US') return Object.keys(usCityData);
  return [];
}
