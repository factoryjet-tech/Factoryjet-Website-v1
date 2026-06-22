#!/usr/bin/env node
/**
 * Fixture tests for the validator. Runs as part of Patch #22 verification.
 * Uses no live API. Prints PASS/FAIL per case and exits non-zero on any FAIL.
 */

import { validateEnrichment } from '../lib/city-enrichment/validator.js';

function nowIso(offsetDays = 0): string {
  return new Date(Date.now() - offsetDays * 24 * 60 * 60 * 1000).toISOString();
}

interface MutableSource {
  url: string;
  accessedAt: string;
  publisher?: string;
}

interface MutableSourcedNumber {
  value: number;
  unit: string;
  asOfYear: number;
  sources: MutableSource[];
}

interface MutableIndustry {
  name: string;
  rank: number;
  sources: MutableSource[];
}

interface MutableCompetitor {
  name: string;
  websiteUrl: string;
  positioning: string;
  pricingPublic: boolean;
  pricingNotes?: string;
  sources: MutableSource[];
}

interface MutableLandmark {
  name: string;
  type: 'architectural' | 'cultural' | 'commercial' | 'natural';
}

interface MutableRecord {
  citySlug: string;
  countryCode: 'GB' | 'US';
  population: MutableSourcedNumber;
  industries: MutableIndustry[];
  competitors: MutableCompetitor[];
  landmarks: MutableLandmark[];
  enrichmentVersion: number;
  lastEnrichedAt: string;
}

function goodRecord(): MutableRecord {
  return {
    citySlug: 'manchester',
    countryCode: 'GB',
    population: {
      value: 553230,
      unit: 'people',
      asOfYear: 2023,
      sources: [
        {
          url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates',
          accessedAt: nowIso(1),
          publisher: 'ONS',
        },
      ],
    },
    industries: [
      {
        name: 'Financial Services',
        rank: 1,
        sources: [{ url: 'https://en.wikipedia.org/wiki/Economy_of_Manchester', accessedAt: nowIso(1) }],
      },
      {
        name: 'Technology',
        rank: 2,
        sources: [{ url: 'https://en.wikipedia.org/wiki/Economy_of_Manchester', accessedAt: nowIso(1) }],
      },
      {
        name: 'Higher Education',
        rank: 3,
        sources: [{ url: 'https://en.wikipedia.org/wiki/Economy_of_Manchester', accessedAt: nowIso(1) }],
      },
    ],
    competitors: [
      {
        name: 'Agency A',
        websiteUrl: 'https://example-agency-a.co.uk',
        positioning: 'Mid-market web design firm with retainer model.',
        pricingPublic: false,
        sources: [{ url: 'https://en.wikipedia.org/wiki/Manchester', accessedAt: nowIso(1) }],
      },
      {
        name: 'Agency B',
        websiteUrl: 'https://example-agency-b.co.uk',
        positioning: 'SEO-led agency targeting professional services.',
        pricingPublic: true,
        pricingNotes: 'from £4000',
        sources: [{ url: 'https://en.wikipedia.org/wiki/Manchester', accessedAt: nowIso(1) }],
      },
      {
        name: 'Agency C',
        websiteUrl: 'https://example-agency-c.co.uk',
        positioning: 'Branding-first studio for B2B clients.',
        pricingPublic: false,
        sources: [{ url: 'https://en.wikipedia.org/wiki/Manchester', accessedAt: nowIso(1) }],
      },
    ],
    landmarks: [
      { name: 'Manchester Town Hall', type: 'architectural' },
      { name: 'Old Trafford', type: 'commercial' },
      { name: 'Castlefield', type: 'cultural' },
    ],
    enrichmentVersion: 1,
    lastEnrichedAt: nowIso(0),
  };
}

interface Case {
  name: string;
  mutate: (r: MutableRecord) => unknown;
  expectOk: boolean;
}

const cases: Case[] = [
  { name: 'good record passes', mutate: (r) => r, expectOk: true },
  {
    name: 'population host not on headline allowlist fails',
    mutate: (r) => {
      const src = r.population.sources[0];
      if (src) src.url = 'https://www.statista.com/manchester';
      return r;
    },
    expectOk: false,
  },
  {
    name: 'fewer than 3 industries fails',
    mutate: (r) => {
      r.industries = r.industries.slice(0, 2);
      return r;
    },
    expectOk: false,
  },
  {
    name: 'duplicate industry ranks fail',
    mutate: (r) => {
      const ind = r.industries[1];
      if (ind) ind.rank = 1;
      return r;
    },
    expectOk: false,
  },
  {
    name: 'stale accessedAt fails',
    mutate: (r) => {
      const src = r.population.sources[0];
      if (src) src.accessedAt = nowIso(30);
      return r;
    },
    expectOk: false,
  },
  {
    name: 'wrong enrichmentVersion fails',
    mutate: (r) => {
      r.enrichmentVersion = 99;
      return r;
    },
    expectOk: false,
  },
  {
    name: 'agency directory host accepted for competitor source',
    mutate: (r) => {
      const c = r.competitors[0];
      if (c) {
        const src = c.sources[0];
        if (src) src.url = 'https://digitalagencynetwork.com/agencies/london/';
      }
      return r;
    },
    expectOk: true,
  },
  {
    name: 'whitehat-seo accepted for competitor source',
    mutate: (r) => {
      const c = r.competitors[0];
      if (c) {
        const src = c.sources[0];
        if (src) src.url = 'https://whitehat-seo.co.uk/blog/london-agencies';
      }
      return r;
    },
    expectOk: true,
  },
  {
    name: 'data.london.gov.uk accepted for industry source',
    mutate: (r) => {
      const ind = r.industries[0];
      if (ind) {
        const src = ind.sources[0];
        if (src) src.url = 'https://data.london.gov.uk/dataset/economy';
      }
      return r;
    },
    expectOk: true,
  },
  {
    name: 'random unknown host still rejected for industry source',
    mutate: (r) => {
      const ind = r.industries[0];
      if (ind) {
        const src = ind.sources[0];
        if (src) src.url = 'https://random-blog-site.example.com/london';
      }
      return r;
    },
    expectOk: false,
  },
];

let failed = 0;
for (const c of cases) {
  const result = validateEnrichment(c.mutate(goodRecord()));
  const pass = result.ok === c.expectOk;
  // eslint-disable-next-line no-console
  console.log(
    `${pass ? 'PASS' : 'FAIL'}  ${c.name}${pass ? '' : `  (issues: ${JSON.stringify(result.issues)})`}`,
  );
  if (!pass) failed += 1;
}

if (failed > 0) {
  // eslint-disable-next-line no-console
  console.error(`${failed} validator test(s) failed`);
  process.exit(1);
}
