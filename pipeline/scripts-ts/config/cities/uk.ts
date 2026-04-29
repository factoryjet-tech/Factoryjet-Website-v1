/**
 * UK city catalog — programmatic SEO targets.
 *
 * 20 cities, tiered by combined SMB density and digital-services
 * purchasing capacity. Tier 1 = highest priority for first-wave page
 * generation. Population figures are approximate metro-area totals.
 *
 * Edits should be code-reviewed — adding/removing cities is a
 * strategic decision, not a database tweak.
 */

import type { City } from './types.js';

export const UK_CITIES: readonly City[] = [
  // Tier 1 — flagship UK markets
  { slug: 'london',      name: 'London',      countryCode: 'GB', population: 9_500_000, tier: 1, keywords: ['london'] },
  { slug: 'manchester',  name: 'Manchester',  countryCode: 'GB', population: 2_800_000, tier: 1, keywords: ['manchester'] },
  { slug: 'birmingham',  name: 'Birmingham',  countryCode: 'GB', population: 2_650_000, tier: 1, keywords: ['birmingham'] },
  { slug: 'edinburgh',   name: 'Edinburgh',   countryCode: 'GB', population:   540_000, tier: 1, keywords: ['edinburgh'] },

  // Tier 2 — major regional cities with active SMB markets
  { slug: 'glasgow',     name: 'Glasgow',     countryCode: 'GB', population: 1_700_000, tier: 2, keywords: ['glasgow'] },
  { slug: 'leeds',       name: 'Leeds',       countryCode: 'GB', population: 1_900_000, tier: 2, keywords: ['leeds'] },
  { slug: 'bristol',     name: 'Bristol',     countryCode: 'GB', population:   720_000, tier: 2, keywords: ['bristol'] },
  { slug: 'liverpool',   name: 'Liverpool',   countryCode: 'GB', population: 1_550_000, tier: 2, keywords: ['liverpool'] },
  { slug: 'cardiff',     name: 'Cardiff',     countryCode: 'GB', population:   480_000, tier: 2, keywords: ['cardiff'] },
  { slug: 'belfast',     name: 'Belfast',     countryCode: 'GB', population:   650_000, tier: 2, keywords: ['belfast'] },
  { slug: 'sheffield',   name: 'Sheffield',   countryCode: 'GB', population:   730_000, tier: 2, keywords: ['sheffield'] },
  { slug: 'newcastle',   name: 'Newcastle',   countryCode: 'GB', population:   810_000, tier: 2, keywords: ['newcastle', 'newcastle upon tyne'] },

  // Tier 3 — secondary cities, growth markets
  { slug: 'nottingham',  name: 'Nottingham',  countryCode: 'GB', population:   780_000, tier: 3, keywords: ['nottingham'] },
  { slug: 'southampton', name: 'Southampton', countryCode: 'GB', population:   860_000, tier: 3, keywords: ['southampton'] },
  { slug: 'leicester',   name: 'Leicester',   countryCode: 'GB', population:   720_000, tier: 3, keywords: ['leicester'] },
  { slug: 'coventry',    name: 'Coventry',    countryCode: 'GB', population:   380_000, tier: 3, keywords: ['coventry'] },
  { slug: 'brighton',    name: 'Brighton',    countryCode: 'GB', population:   290_000, tier: 3, keywords: ['brighton', 'brighton and hove'] },
  { slug: 'reading',     name: 'Reading',     countryCode: 'GB', population:   320_000, tier: 3, keywords: ['reading'] },
  { slug: 'cambridge',   name: 'Cambridge',   countryCode: 'GB', population:   145_000, tier: 3, keywords: ['cambridge'] },
  { slug: 'oxford',      name: 'Oxford',      countryCode: 'GB', population:   165_000, tier: 3, keywords: ['oxford'] },
];
