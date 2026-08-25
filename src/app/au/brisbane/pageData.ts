// Shared, render-agnostic data for /au/brisbane.
//
// Imported by BOTH the visible render and the JSON-LD block so the two can never drift.
// Do not copy any of these arrays into a component or into a
// <script type="application/ld+json"> literal. Import them.
//
// Plain data module, no "use client": safe for the Server Component page.tsx AND for
// any client section that needs it.

export const CANONICAL = 'https://factoryjet.com/au/brisbane';

/** Single source for the visible breadcrumb trail and for BreadcrumbList JSON-LD. */
export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Brisbane', url: CANONICAL },
];

export interface Citation {
  /** Number shown in the visible list and used for the inline marker. */
  id: number;
  /** Publisher, shown first so a reader can judge the source before the title. */
  source: string;
  title: string;
  url: string;
  /** What this source actually says. Fetch-verified 2026-08-25, all HTTP 200. */
  claim: string;
}

/**
 * External citations. Every URL below was fetched with curl on 2026-08-25, returned
 * HTTP 200, and the `claim` text was read out of the fetched page body. Nothing here is
 * paraphrased from memory.
 *
 * Two sources that were considered and REJECTED: business.gov.au and the ACCC's false or
 * misleading claims guidance. Both return 200 but render their body copy with JavaScript,
 * so the fetched HTML contains navigation chrome only and no claim can be verified from
 * it. Do not add either back without a source that can actually be read.
 */
export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, and reports a 19,244 increase in the number of businesses in Queensland across 2025-26, against a 16.9% national entry rate and a 13.8% exit rate.',
  },
  {
    id: 2,
    source: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    claim:
      'Google publishes the pass marks for the three Core Web Vitals: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
  {
    id: 3,
    source: 'Google Search Central',
    title: 'SEO Starter Guide',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    claim:
      'Google states that some changes might take effect in a few hours while others could take several months, and that you likely want to wait a few weeks before assessing whether your work had beneficial effects in Google Search results.',
  },
];

/**
 * Suburbs and regions we actually name on the page. Kept here rather than inline so the
 * hero, the local-market section and the JSON-LD areaServed all read from one list.
 */
export const SERVICE_AREAS = [
  'Brisbane CBD',
  'Fortitude Valley',
  'South Brisbane',
  'Newstead',
  'Milton',
  'Woolloongabba',
  'Chermside',
  'Mount Gravatt',
  'Ipswich',
  'Logan',
  'Redlands',
  'Moreton Bay',
];
