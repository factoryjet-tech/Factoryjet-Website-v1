// Shared, render-agnostic data for /au/canberra.
// Imported by BOTH the visible render and the JSON-LD block so the two cannot drift.

export const CANONICAL = 'https://factoryjet.com/au/canberra';

export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Canberra', url: CANONICAL },
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
 * NOTE ON A SOURCE WE DID NOT USE.
 * digital.gov.au, which publishes the Digital Service Standard, could not be fetched on
 * 2026-08-25 (connection failed, no response). Because of that, this page makes NO claim
 * about Australian government digital policy or any accessibility obligation placed on
 * agencies. It cites the W3C accessibility standard itself, which is verifiable, and
 * talks about accessibility as a practical requirement rather than as a legal one. Do not
 * add a policy claim here without a source that actually returns.
 */
export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'W3C Web Accessibility Initiative',
    title: 'Web Content Accessibility Guidelines (WCAG) Overview',
    url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
    claim:
      'The W3C publishes WCAG as an international standard, currently spanning WCAG 2.0, 2.1 and 2.2, explaining how to make web content more accessible to people with disabilities.',
  },
  {
    id: 2,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, with a 16.9% entry rate and a 13.8% exit rate across 2025-26, and reports growth in every state and territory.',
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

export const SERVICE_AREAS = [
  'Canberra City',
  'Barton',
  'Braddon',
  'Belconnen',
  'Woden',
  'Tuggeranong',
  'Gungahlin',
  'Fyshwick',
  'Mitchell',
  'Queanbeyan',
];
