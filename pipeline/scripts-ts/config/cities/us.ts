/**
 * US city catalog — programmatic SEO targets.
 *
 * 25 cities, tiered by SMB count, digital-services purchasing density,
 * and agency-services market activity. US is the highest-paying-capacity
 * market in the country-tier rubric (10/10), so even tier-3 US cities
 * typically outscore most non-US tier-2 markets in the final ranking.
 *
 * Population figures are approximate metro-area totals.
 */

import type { City } from './types.js';

export const US_CITIES: readonly City[] = [
  // Tier 1 — top-5 combined SMB count + tech-services purchasing density
  { slug: 'new-york',       name: 'New York',       countryCode: 'US', population: 19_900_000, tier: 1, keywords: ['new york', 'nyc', 'new york city'] },
  { slug: 'los-angeles',    name: 'Los Angeles',    countryCode: 'US', population: 13_200_000, tier: 1, keywords: ['los angeles', 'la'] },
  { slug: 'chicago',        name: 'Chicago',        countryCode: 'US', population:  9_500_000, tier: 1, keywords: ['chicago'] },
  { slug: 'san-francisco',  name: 'San Francisco',  countryCode: 'US', population:  4_700_000, tier: 1, keywords: ['san francisco', 'sf', 'bay area'] },
  { slug: 'boston',         name: 'Boston',         countryCode: 'US', population:  4_900_000, tier: 1, keywords: ['boston'] },

  // Tier 2 — active SMB agency-services markets
  { slug: 'seattle',        name: 'Seattle',        countryCode: 'US', population:  4_000_000, tier: 2, keywords: ['seattle'] },
  { slug: 'austin',         name: 'Austin',         countryCode: 'US', population:  2_400_000, tier: 2, keywords: ['austin'] },
  { slug: 'denver',         name: 'Denver',         countryCode: 'US', population:  2_950_000, tier: 2, keywords: ['denver'] },
  { slug: 'atlanta',        name: 'Atlanta',        countryCode: 'US', population:  6_100_000, tier: 2, keywords: ['atlanta'] },
  { slug: 'dallas',         name: 'Dallas',         countryCode: 'US', population:  7_700_000, tier: 2, keywords: ['dallas', 'dallas fort worth', 'dfw'] },
  { slug: 'houston',        name: 'Houston',        countryCode: 'US', population:  7_200_000, tier: 2, keywords: ['houston'] },
  { slug: 'miami',          name: 'Miami',          countryCode: 'US', population:  6_200_000, tier: 2, keywords: ['miami'] },
  { slug: 'washington-dc',  name: 'Washington DC',  countryCode: 'US', population:  6_400_000, tier: 2, keywords: ['washington dc', 'washington', 'dc'] },
  { slug: 'philadelphia',   name: 'Philadelphia',   countryCode: 'US', population:  6_200_000, tier: 2, keywords: ['philadelphia', 'philly'] },
  { slug: 'san-diego',      name: 'San Diego',      countryCode: 'US', population:  3_300_000, tier: 2, keywords: ['san diego'] },

  // Tier 3 — third-wave growth markets
  { slug: 'phoenix',        name: 'Phoenix',        countryCode: 'US', population:  4_950_000, tier: 3, keywords: ['phoenix'] },
  { slug: 'portland',       name: 'Portland',       countryCode: 'US', population:  2_500_000, tier: 3, keywords: ['portland'] },
  { slug: 'minneapolis',    name: 'Minneapolis',    countryCode: 'US', population:  3_700_000, tier: 3, keywords: ['minneapolis', 'twin cities'] },
  { slug: 'charlotte',      name: 'Charlotte',      countryCode: 'US', population:  2_700_000, tier: 3, keywords: ['charlotte'] },
  { slug: 'nashville',      name: 'Nashville',      countryCode: 'US', population:  2_000_000, tier: 3, keywords: ['nashville'] },
  { slug: 'tampa',          name: 'Tampa',          countryCode: 'US', population:  3_200_000, tier: 3, keywords: ['tampa', 'tampa bay'] },
  { slug: 'raleigh',        name: 'Raleigh',        countryCode: 'US', population:  1_400_000, tier: 3, keywords: ['raleigh', 'raleigh durham'] },
  { slug: 'salt-lake-city', name: 'Salt Lake City', countryCode: 'US', population:  1_200_000, tier: 3, keywords: ['salt lake city', 'slc'] },
  { slug: 'indianapolis',   name: 'Indianapolis',   countryCode: 'US', population:  2_100_000, tier: 3, keywords: ['indianapolis', 'indy'] },
  { slug: 'columbus',       name: 'Columbus',       countryCode: 'US', population:  2_200_000, tier: 3, keywords: ['columbus'] },
];
