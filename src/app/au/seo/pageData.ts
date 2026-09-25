// Shared, render-agnostic data for /au/seo, the Australian "AI Search & SEO" hub.
//
// WHY THIS PAGE EXISTS AND /au/web-design DOES NOT.
// /au already targets "web design agency australia", so a second national web design hub
// would compete with it for the same term. SEO is different: /au targets no SEO head term.
//
// KEYWORDS (DataForSEO, Google Australia, fetched 2026-09-24):
// primary "seo services australia" (590/mo cluster), plus "seo agency australia" /
// "seo company australia" (one 1,300/mo cluster), "seo agency" 4,400, "seo services" 3,600,
// "seo company" 2,400, "seo consultant" 1,600, "local seo services" 880, "seo audit" 590,
// "ecommerce seo" 480, "shopify seo services" 320, "technical seo agency" 260.
// The August 2026 winnability pass found the weakest page-1 incumbent for the
// agency/company cluster at 143 referring domains, about five times our 28 earned, so the
// page leads on "seo services australia" and carries the agency/company terms as twins.

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
  /** Fetch-verified 2026-09-25, HTTP 200, claim read from the response body. */
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
    source: 'Google Search Central',
    title: 'Spam policies for Google web search',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
    claim:
      'Google lists buying or selling links for ranking purposes, including exchanging money, goods or services for links, as examples of link spam.',
  },
  {
    id: 4,
    source: 'Google Business Profile Help',
    title: 'Tips to improve your local ranking on Google',
    url: 'https://support.google.com/business/answer/7091',
    claim:
      'Google states there is no way to request or pay for a better local ranking, and that local results are based mainly on relevance, distance and prominence, with prominence informed by links and reviews.',
  },
  {
    id: 5,
    source: 'Google Business Profile Help',
    title: 'Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177',
    claim:
      'A virtual office is not eligible for a Business Profile, service-area businesses should hide their address, and a service area generally should not extend beyond about two hours of driving from the business base.',
  },
  {
    id: 6,
    source: 'Australian Bureau of Statistics',
    title: 'Counts of Australian Businesses, including Entries and Exits',
    url: 'https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release',
    claim:
      'The ABS counted 2,814,778 actively trading businesses in Australia at 30 June 2026, up 85,130 or 3.1% across 2025-26, with a 16.9% entry rate and a 13.8% exit rate.',
  },
];

/**
 * Cities where the August 2026 pass measured a page-1 incumbent within reach of our 28
 * earned referring domains, and where a page therefore exists. Sydney, Perth and the Gold
 * Coast are absent on purpose: their weakest page-1 incumbents measured 119, 125 and 136.
 */
export const CITY_ROWS: Array<{
  city: string;
  slug: string;
  headline: string;
  weakest: number;
  verdict: string;
}> = [
  { city: 'Brisbane', slug: 'brisbane', headline: '1,900 searches a month for an SEO agency', weakest: 35, verdict: 'Reachable within a link cycle' },
  { city: 'Melbourne', slug: 'melbourne', headline: '1,300 a month for an SEO consultant', weakest: 8, verdict: 'Reachable now' },
  { city: 'Adelaide', slug: 'adelaide', headline: '1,300 a month for an SEO agency', weakest: 37, verdict: 'Reachable within a link cycle' },
  { city: 'Canberra', slug: 'canberra', headline: '880 a month, the thinnest field in the country', weakest: 7, verdict: 'Reachable now' },
];

/**
 * How often Google showed an AI Overview and a local map pack, by service line.
 * FactoryJet measurement, 156 live Google Australia results, 24 September 2026
 * (pipeline/research/data/market-au-2026-09-24/serps.json).
 */
export const AIO_ROWS: Array<{ line: string; tested: number; aio: string; pack: string; note: string }> = [
  { line: 'SEO, city searches (e.g. "seo agency brisbane")', tested: 14, aio: '2 of 14', pack: '12 of 14', note: 'The map pack and ordinary results still take the click. Local SEO pays.' },
  { line: 'SEO, national searches (e.g. "seo services")', tested: 10, aio: '7 of 10', pack: '6 of 10', note: 'Write so an AI summary can cite you, as well as rank.' },
  { line: 'Web design', tested: 29, aio: '10 of 29', pack: '20 of 29', note: 'Mostly classic results plus a map pack.' },
  { line: 'AI agents and automation', tested: 40, aio: '30 of 40', pack: '3 of 40', note: 'Much of the click is absorbed above the results.' },
  { line: 'Ecommerce builds', tested: 40, aio: '36 of 40', pack: '5 of 40', note: 'AI summaries dominate; citations matter more than position.' },
  { line: 'AI SEO and GEO', tested: 9, aio: '9 of 9', pack: '0 of 9', note: 'Every term tested. This is where AI SEO work belongs.' },
];

/** Named Australian SEO agencies. Notes based on each homepage, fetched 2026-09-25. */
export const AGENCIES: Array<{ name: string; note: string }> = [
  { name: 'FactoryJet', note: 'That is us. Senior engineers who measure demand and competition before scoping, fix technical and local SEO first, write pages for verified Australian search terms, and earn links rather than buy them. Strongest where search meets ecommerce and web builds. Everything stays in your name.' },
  { name: 'StudioHawk', note: 'Describes itself as a specialist SEO and AI search agency in Australia with no generalists, and names large Australian brands among its clients. Appears at or near the top of most national and city SEO searches we measured.' },
  { name: 'Prosperity Media', note: 'An SEO, GEO, content and digital PR agency that says it won Best Large SEO/GEO Agency at the Semrush Search Awards, and works with businesses and enterprise companies.' },
  { name: 'SIXGUN', note: 'A Melbourne digital marketing agency that describes itself as award-winning and helps brands be found by the people who matter most. Often named in AI answers about Australian SEO agencies.' },
  { name: 'Impressive Digital', note: 'A Melbourne digital marketing agency positioning around revenue, margins and predictable growth. Ranks on page one for several national SEO agency searches.' },
  { name: 'Dilate Digital', note: 'A Perth full-service digital marketing agency with a no-contracts message. Appears in Perth, Brisbane and national SEO results.' },
  { name: 'Digital Nomads HQ', note: 'A Sunshine Coast digital marketing agency that describes itself as award-winning and serves clients locally and across Australia. Frequently named in AI answers about SEO for small businesses.' },
];

/** Monthly Google Australia search volume, DataForSEO, 24 September 2026. */
export const DEMAND: Array<{ kw: string; v: string; w: string; note: string }> = [
  { kw: 'seo agency', v: '4,400', w: '100%', note: 'Head term, strong incumbents' },
  { kw: 'seo services', v: '3,600', w: '82%', note: 'Head term, AI Overview shown' },
  { kw: 'seo company', v: '2,400', w: '55%', note: 'Buyer intent' },
  { kw: 'seo consultant', v: '1,600', w: '36%', note: 'Low difficulty, mixed intent' },
  { kw: 'seo agency / company australia', v: '1,300', w: '30%', note: 'National buyer intent' },
  { kw: 'local seo services', v: '880', w: '20%', note: 'Buyer intent' },
  { kw: 'seo services australia', v: '590', w: '13%', note: 'This page’s primary term' },
  { kw: 'seo audit', v: '590', w: '13%', note: 'Often the first step' },
  { kw: 'ecommerce seo', v: '480', w: '11%', note: 'Growing, about 2x on last year' },
  { kw: 'technical seo agency', v: '260', w: '6%', note: 'Low difficulty' },
];
