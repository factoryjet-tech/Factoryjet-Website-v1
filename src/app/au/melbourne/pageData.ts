// Shared, render-agnostic data for /au/melbourne.
//
// Imported by BOTH the visible render and the JSON-LD block so the two can never drift.
// Plain data module, no "use client".

export const CANONICAL = 'https://factoryjet.com/au/melbourne';

/** Single source for the visible breadcrumb trail and for BreadcrumbList JSON-LD. */
export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Melbourne', url: CANONICAL },
];

export interface Citation {
  id: number;
  source: string;
  title: string;
  url: string;
  /** What this source actually says. Fetch-verified 2026-08-25, all HTTP 200. */
  claim: string;
}

/**
 * External citations, every URL fetched with curl on 2026-08-25 and the claim text read
 * out of the response body. business.gov.au and the ACCC guidance pages were considered
 * and rejected: both return 200 but render body copy with JavaScript, so nothing in them
 * can be verified from the fetched HTML.
 */
export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, and reports a 19,581 increase in the number of businesses in Victoria across 2025-26, the second largest net increase of any state or territory.',
  },
  {
    id: 2,
    source: 'Google Search Central',
    title: 'SEO Starter Guide',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    claim:
      'Google states that some changes might take effect in a few hours while others could take several months, and that you likely want to wait a few weeks before assessing whether your work had beneficial effects in Google Search results.',
  },
  {
    id: 3,
    source: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    claim:
      'Google publishes the pass marks for the three Core Web Vitals: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
];

/** Suburbs and regions named on the page, also read into JSON-LD areaServed. */
export const SERVICE_AREAS = [
  'Melbourne CBD',
  'Southbank',
  'Docklands',
  'Richmond',
  'Collingwood',
  'Fitzroy',
  'South Yarra',
  'St Kilda',
  'Carlton',
  'Footscray',
  'Box Hill',
  'Dandenong',
  'Preston',
  'Geelong',
];
