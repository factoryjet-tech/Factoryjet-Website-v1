// Single source of truth for the Sheffield page's URL, breadcrumb trail and the
// external sources it cites.
//
// The crumbs array feeds BOTH the visible <Breadcrumbs> trail in page.tsx AND the
// BreadcrumbList JSON-LD in layout.tsx. Never hand-copy a second array: a trail
// Google is told about but a human cannot see is a soft cloaking problem.
//
// Every URL in SOURCES was fetched and confirmed 200 on 2026-08-25, and the claim
// attached to it was read off the fetched page, not assumed.

export const CANONICAL = 'https://factoryjet.com/uk/sheffield';

export interface Crumb {
  name: string;
  url: string;
}

export const CRUMBS: Crumb[] = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Sheffield', url: CANONICAL },
];

export const SOURCES = [
  {
    id: 'idbrlu',
    label: 'ONS, UK Business Counts: local units by industry and employment size band',
    href: 'https://www.nomisweb.co.uk/datasets/idbrlu',
    note: 'Inter Departmental Business Register extract published through Nomis. Sheffield local authority (E08000019), 2025 reference year.',
  },
  {
    id: 'gbp-local-ranking',
    label: 'Google Business Profile Help, Tips to improve your local ranking on Google',
    href: 'https://support.google.com/business/answer/7091',
    note: 'States that local results are based mainly on relevance, distance and prominence, and that prominence is influenced by links and reviews.',
  },
  {
    id: 'cwv',
    label: 'Google Search Central, Core Web Vitals',
    href: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    note: 'Publishes the good thresholds: LCP within 2.5 seconds, INP under 200 milliseconds, CLS under 0.1.',
  },
  {
    id: 'localbusiness-sd',
    label: 'Google Search Central, Local business (LocalBusiness) structured data',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
    note: 'Documents the markup that tells Google a business its hours, departments and location details.',
  },
] as const;

// ONS UK Business Counts, Sheffield (E08000019), 2025 reference year.
// Queried from the Nomis API on 2026-08-25. Totals: 20,205 local units, of which
// 13,490 employ 0 to 4 people and 2,790 employ 5 to 9, so 16,280 of 20,205
// (80.6 per cent) employ fewer than ten people.
export const SHEFFIELD_BUSINESS_STATS = [
  {
    id: 'units',
    display: '20,205',
    label: 'business sites in Sheffield, on the official ONS business register',
  },
  {
    id: 'micro',
    display: '13,490',
    label: 'of them employ four people or fewer',
  },
  {
    id: 'under10',
    display: '4 in 5',
    label: 'Sheffield business sites employ fewer than ten people',
  },
  {
    id: 'large',
    display: '110',
    label: 'employ 250 people or more, so the market is almost all small firms',
  },
];
