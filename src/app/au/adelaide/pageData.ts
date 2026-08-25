// Shared, render-agnostic data for /au/adelaide.
// Imported by BOTH the visible render and the JSON-LD block so the two cannot drift.

export const CANONICAL = 'https://factoryjet.com/au/adelaide';

export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Adelaide', url: CANONICAL },
];

export interface Citation {
  id: number;
  source: string;
  title: string;
  url: string;
  /** Fetch-verified 2026-08-25, HTTP 200, claim read from the response body. */
  claim: string;
}

/**
 * business.gov.au and the ACCC guidance pages were rejected during research: both return
 * 200 but render their body copy with JavaScript, so nothing in them can be verified from
 * the fetched HTML. Do not add them back without a readable source.
 */
export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, a rise of 85,130 or 3.1% across 2025-26, and reports that all states and territories showed growth in business counts.',
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

export const SERVICE_AREAS = [
  'Adelaide CBD',
  'North Adelaide',
  'Norwood',
  'Unley',
  'Glenelg',
  'Port Adelaide',
  'Prospect',
  'Marion',
  'Salisbury',
  'Elizabeth',
  'Mount Barker',
  'Gawler',
];
