// Shared, render-agnostic data for /uk/birmingham.
//
// Everything here is imported by BOTH the visible render and the JSON-LD block so the
// two can never drift. Do not copy any of these arrays into a component or into a
// <script type="application/ld+json"> literal. Import them.
//
// Plain data module, no "use client": safe for the Server Component page.tsx AND for
// the client sections to import.

export const CANONICAL = 'https://factoryjet.com/uk/birmingham';

/** Single source for the visible breadcrumb trail and for BreadcrumbList JSON-LD. */
export const CRUMBS = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Birmingham', url: CANONICAL },
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
 * External citations. Every URL below was fetched with curl on 2026-08-25 and
 * returned HTTP 200, and the `claim` text was read out of the fetched page body.
 * Do not add an entry here that has not been fetched and read.
 */
export const CITATIONS: Citation[] = [
  {
    id: 1,
    source: 'Google Search Central',
    title: 'SEO Starter Guide',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    claim:
      'Google states that some changes take effect in a few hours and others could take several months, and that you likely want to wait a few weeks before judging whether a change helped.',
  },
  {
    id: 2,
    source: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    claim:
      'Google publishes the pass marks for the three Core Web Vitals: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
  {
    id: 3,
    source: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177',
    claim:
      'Google says a business cannot list an office in a co-working space unless that office has clear signage, receives customers there during business hours, and is staffed during business hours by your own people.',
  },
  {
    id: 4,
    source: 'Office for National Statistics',
    title: 'UK business: activity, size and location, 2025',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025',
    claim:
      'The ONS reports that the number of VAT and PAYE registered businesses in the UK rose by 0.4% over the year, and publishes the regional counts that the West Midlands figures on this page come from.',
  },
];
