// Shared, render-agnostic data for /au/seo, the Australian SEO hub.
//
// WHY THIS PAGE EXISTS AND /au/web-design DOES NOT.
// /au already targets "web design agency australia" and ranks as the national web design
// page, so a second national web design hub would compete with it for the same term. That
// is the cannibalisation pattern that forced two US service pages to be retired by 301 in
// July 2026, and we are not repeating it.
//
// SEO is different: /au mentions search only in passing and targets no SEO head term. The
// August 2026 measurement put "seo services australia" at 590/mo with a weakest page-1
// incumbent of 33 referring domains, which is 1.2x our 28 earned and therefore reachable.
// "seo agency australia" and "seo company australia" (1,300/mo) are deliberately NOT the
// primary target: their weakest page-1 incumbent measured 143 referring domains, roughly
// five times our authority.

export const CANONICAL = 'https://factoryjet.com/au/seo';

export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'SEO Services', url: CANONICAL },
];

export interface Citation {
  id: number;
  source: string;
  title: string;
  url: string;
  /** Fetch-verified 2026-08-25, HTTP 200, claim read from the response body. */
  claim: string;
}

export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Google Search Central',
    title: 'SEO Starter Guide',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    claim:
      'Google states that some changes might take effect in a few hours while others could take several months, and that you likely want to wait a few weeks before assessing whether your work had beneficial effects in Google Search results.',
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
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, up 85,130 or 3.1% across 2025-26, with a 16.9% entry rate and a 13.8% exit rate.',
  },
];

/**
 * The cities where we measured a page-1 incumbent within reach of our 28 earned referring
 * domains, and where a page therefore exists. Sydney, Perth and the Gold Coast are absent
 * on purpose: their weakest page-1 incumbents measured 119, 125 and 136 respectively.
 */
export const CITY_ROWS: Array<{
  city: string;
  slug: string;
  headline: string;
  weakest: number;
  verdict: string;
}> = [
  {
    city: 'Brisbane',
    slug: 'brisbane',
    headline: '1,900 searches a month for an SEO agency',
    weakest: 35,
    verdict: 'Reachable within a link cycle',
  },
  {
    city: 'Melbourne',
    slug: 'melbourne',
    headline: '1,300 a month for an SEO consultant',
    weakest: 8,
    verdict: 'Reachable now',
  },
  {
    city: 'Adelaide',
    slug: 'adelaide',
    headline: '1,300 a month for an SEO agency',
    weakest: 37,
    verdict: 'Reachable within a link cycle',
  },
  {
    city: 'Canberra',
    slug: 'canberra',
    headline: '880 a month, the thinnest field in the country',
    weakest: 7,
    verdict: 'Reachable now',
  },
];
