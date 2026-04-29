/**
 * Build (city, service) candidates with synthesized target keywords.
 *
 * Default candidate-id format: `{citySlug}__{serviceSlug}`.
 * Default target keyword: `{first service keyword} {first city keyword}`.
 *
 * Both can be overridden via options if a future refinement wants
 * different keyword shapes (e.g. "[service] in [city]" vs
 * "[city] [service]"). Default is "service first, city last" which
 * matches the most common search pattern in the live UK Search
 * campaign data.
 */

import { ALL_CITIES, type City } from '../../config/cities/index.js';
import { SERVICES, type Service } from '../../config/services.js';
import type { Candidate } from './types.js';

export interface BuildCandidatesOptions {
  /** Filter cities by country code (uppercase ISO alpha-2). */
  countryCode?: string;
  /** Filter cities by tier. */
  cityTiers?: ReadonlyArray<1 | 2 | 3>;
  /** Restrict to specific service slugs. */
  serviceSlugs?: readonly string[];
}

export function synthesizeTargetKeyword(city: City, service: Service): string {
  const cityToken = city.keywords[0] ?? city.name.toLowerCase();
  const serviceToken = service.keywords[0] ?? service.name.toLowerCase();
  return `${serviceToken} ${cityToken}`.trim();
}

export function buildCandidateId(city: City, service: Service): string {
  return `${city.slug}__${service.slug}`;
}

export function buildCandidates(
  options: BuildCandidatesOptions = {},
): Candidate[] {
  let cities: readonly City[] = ALL_CITIES;
  if (options.countryCode) {
    const cc = options.countryCode.toUpperCase();
    cities = cities.filter((c) => c.countryCode === cc);
  }
  if (options.cityTiers && options.cityTiers.length > 0) {
    const tiers = options.cityTiers;
    cities = cities.filter((c) => tiers.includes(c.tier));
  }

  let services: readonly Service[] = SERVICES;
  if (options.serviceSlugs && options.serviceSlugs.length > 0) {
    const slugs = options.serviceSlugs;
    services = services.filter((s) => slugs.includes(s.slug));
  }

  const out: Candidate[] = [];
  for (const city of cities) {
    for (const service of services) {
      out.push({
        id: buildCandidateId(city, service),
        city,
        service,
        targetKeyword: synthesizeTargetKeyword(city, service),
      });
    }
  }
  return out;
}
