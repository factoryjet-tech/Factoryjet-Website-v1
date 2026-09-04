import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/roofing-seo: US roofing SEO vertical page.

   Intent owned by THIS page (read before editing):
     roofing seo (2,400/mo, KD 7) · seo for roofers (2,400/mo, KD 12) ·
     seo roofing (2,400/mo, KD 8) · roofing company seo (1,000/mo, KD 8) ·
     seo for roofing companies (1,000/mo, KD 15) · roofing seo company (1,000/mo)
     · roofing seo services (720/mo) · roofing marketing agency (480/mo) ·
     roofing website design (320/mo, KD 3) · roofing contractor seo (260/mo) ·
     roofing seo agency (260/mo, KD 1) · local seo for roofing companies (260/mo)
     · roofing leads (1,300/mo, KD 0) and its variants.

   Does NOT own: generic local SEO (/services/local-seo), generic retainer
   (/services/seo), audits (/services/seo-audit), AI answer engines
   (/services/ai-seo). Each is linked rather than duplicated.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no shared files touched. Cost-shaped PAA questions are answered
   with scope drivers and pricing models, never with a number.

   Schema: WebPage + speakable, Service, ItemList (programme deliverables),
   ItemList (competitor set), FAQPage derived from FAQ_ITEMS, BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/roofing-seo';
const REVIEWED_DATE = 'July 26, 2026';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Roofing SEO Agency: SEO for Roofing Contractors | FactoryJet',
  description:
    'Roofing SEO built around how roofs actually sell: storm spikes, claims, financing, and service areas. Founder-led for US roofing contractors. Free audit.',
  keywords: [
    'roofing seo',
    'seo for roofers',
    'seo roofing',
    'roofing seo company',
    'roofing seo companies',
    'roofing seo agency',
    'roofing seo services',
    'seo for roofing companies',
    'roofing company seo',
    'roofing contractor seo',
    'seo for roofing contractors',
    'local seo for roofing companies',
    'roofing marketing agency',
    'roofing marketing company',
    'marketing for roofing companies',
    'roofing digital marketing',
    'roofing website design',
    'roofing leads',
    'roofing contractor leads',
    'commercial roofing leads',
    'how to get roofing leads',
    'roofing seo experts',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Roofing SEO Services: SEO for Roofers & Roofing Companies | FactoryJet',
    description:
      'Roofing SEO for US contractors. Service-area search, storm-season content, claims and financing intent, map pack prominence, and getting quoted by AI answer engines.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/roofing-seo/hero.webp',
        width: 1440,
        height: 864,
        alt: 'Aerial view of a suburban neighbourhood of shingle rooftops at golden hour',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing SEO Services: SEO for Roofers & Roofing Companies | FactoryJet',
    description:
      'Roofing SEO built around storm spikes, insurance claims, financing intent and service-area search. Founder-led, and honest about what SEO can and cannot do.',
    images: ['https://factoryjet.com/images/us/services/roofing-seo/hero.webp'],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Why roofing search behaves differently (answer-first support tiles)
───────────────────────────────────────────────────────────────────────────── */

type Difference = { tag: string; title: string; body: string; tint: string; accent: string };

const DIFFERENCES: ReadonlyArray<Difference> = [
  {
    tag: '01',
    title: 'Demand arrives in spikes, not a curve',
    body:
      'A dentist gets roughly the same number of searches every week of the year. A roofer gets a flat line and then a wall. One hailstorm rewrites a county worth of search demand inside forty-eight hours. NOAA puts the highest hailstorm frequency in the country where Nebraska, Colorado and Wyoming meet, an area it calls hail alley, at seven to nine hail days a year. If your storm pages go live after the storm, you are publishing into a race you already lost.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Half your buyers are talking to an insurer',
    body:
      'They are not searching for a roof. They are searching for how a claim works, whether the adjuster was right, what actual cash value means next to replacement cost, and whether a denial can be re-opened. That is a completely separate query set from roof replacement near me, and almost no roofing site covers it properly. The contractor who answers those questions gets the call before the estimate stage.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'The other half are asking about paying for it',
    body:
      'A roof is one of the largest unplanned bills a homeowner ever gets handed. A significant slice of roofing search is people who already know they need the work and are stuck on how to fund it. Financing questions, deductible questions, and what happens if I only fix part of it. Answering those on your own site keeps that person on your site instead of sending them back to Google in a worse mood.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'You have a service area, not a storefront',
    body:
      'Google treats roofers as service-area businesses, and its own Business Profile guidance says a service-area business should hide its address and keep its overall service area inside roughly two hours of driving time. Get that setup wrong and you either look like a residential address in the map pack or you claim half a state and rank in none of it.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Seasonality is regional and unforgiving',
    body:
      'Phoenix and Minneapolis do not share a roofing calendar. In cold markets the replacement window closes and does not re-open for months, so the content that has to rank in April needs to be indexed and settled in January. Planning an SEO programme on a generic twelve-month content calendar ignores the one constraint that actually governs a roofing business.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'Emergency and planned are two different buyers',
    body:
      'One has water coming through a ceiling right now and will call whoever answers. The other is comparing four estimates over three weeks and reading about underlayment. They need different pages, different page speed tolerance, and different calls to action. Most roofing sites are built entirely for the second buyer and quietly lose the first one on mobile.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Programme listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Google Business Profile audit and citation cleanup',
    body:
      'For a roofing contractor, your Google Business Profile drives more immediate phone calls than any blog post. We configure primary categories, hide or display service addresses in line with Google guidelines, and verify driving radiuses. We audit citations across BrightLocal and Whitespark, ensuring name, address, and phone numbers match your state contractor license.',
  },
  {
    n: '02',
    title: 'City pages with job proof from CompanyCam and EagleView',
    body:
      'Google ranks local roofers partly on proximity. We build dedicated landing pages for each city you genuinely serve. Instead of repetitive doorway text, each page features real project locations, drone imagery, and aerial measurement data synced from CompanyCam, Hover, and EagleView reports.',
  },
  {
    n: '03',
    title: 'Service architecture mapped to residential and commercial trades',
    body:
      'Roof replacement, storm repairs, emergency tarping, gutters, and commercial systems like TPO, EPDM, and modified bitumen need separate URL silos. Splitting these prevents keyword cannibalization and routes estimates directly into field CRMs like Jobber, ServiceTitan, or AccuLynx.',
  },
  {
    n: '04',
    title: 'Pre-storm damage content published before hail season',
    body:
      'Publishing hail damage content after a storm hits is too late; search engines take weeks to index and rank new pages. We build weather-event landing pages months ahead. Homeowners search for hail size thresholds, insurance adjuster processes, and emergency inspection steps before storm chasers arrive.',
  },
  {
    n: '05',
    title: 'Insurance claims and adjuster documentation guides',
    body:
      'Actual cash value versus replacement cost value, depreciation schedules, and insurance supplement protocols are typed by homeowners every day. Providing unbiased claims guidance positions your team as trusted local experts before adjusters arrive on site.',
  },
  {
    n: '06',
    title: 'Financing calculators integrated with Roofr and SumoQuote',
    body:
      'Cost is the number one friction point in roofing. We build interactive payment calculators and quote estimate funnels integrated with Roofr, SumoQuote, or Leap workflows. Homeowners explore monthly payment options on your site instead of bouncing back to competitor directories.',
  },
  {
    n: '07',
    title: 'Review generation integrated into CRM job closeout',
    body:
      'Google states that review count and sentiment directly affect map pack prominence. We automate customer review requests triggered when a job completes in AccuLynx, Jobber, or ServiceTitan, helping happy property owners leave detailed feedback on Google Business Profile.',
  },
  {
    n: '08',
    title: 'Mobile-first performance engineered for homeowners in driveways',
    body:
      'Emergency buyers looking at water leaking through a ceiling will not wait for slow sliders. We build lightweight, sub-second pages with click-to-call buttons and instant inspection request forms engineered for one-handed phone use.',
  },
  {
    n: '09',
    title: 'Technical health monitoring and AI search optimization',
    body:
      'We monitor crawl health and indexing status via Google Search Console and Screaming Frog. We track local map pack visibility in Semrush and Ahrefs. Structured schema markup ensures AI Overviews and answer engines quote your roofing specifications accurately.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: four ways roofers get work
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; seo: string; bought: string; ads: string; canvass: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Who owns the lead',
    seo: 'You. It arrives on your own property',
    bought: 'The marketplace. You are renting access',
    ads: 'You, for exactly as long as you keep bidding',
    canvass: 'You, and your crew earned it door by door',
  },
  {
    label: 'Exclusivity',
    seo: 'Exclusive. The homeowner called you',
    bought: 'Usually shared with several other roofers',
    ads: 'Exclusive click, competitive auction',
    canvass: 'Exclusive, until the next knock',
  },
  {
    label: 'Speed to first lead',
    seo: 'Slow to start, weeks to months',
    bought: 'Immediate. Same day if you want',
    ads: 'Fast. Days',
    canvass: 'Immediate, and entirely people-limited',
  },
  {
    label: 'What happens over time',
    seo: 'Compounds. Rankings hold after you pause',
    bought: 'Flat. Stop paying, stop receiving',
    ads: 'Flat. Stop bidding, phone goes quiet',
    canvass: 'Flat, and capped by headcount',
  },
  {
    label: 'When a storm hits your market',
    seo: 'Wins if the pages were already ranked',
    bought: 'Prices surge exactly when demand does',
    ads: 'Auction gets crowded fast by storm chasers',
    canvass: 'Extremely effective, and so is everyone else',
  },
  {
    label: 'Typical lead quality',
    seo: 'High. They chose you and read your site',
    bought: 'Mixed. Speed to dial decides the sale',
    ads: 'Good, though claim-shoppers are common',
    canvass: 'Variable, and heavy on tyre-kickers',
  },
  {
    label: 'What kills it',
    seo: 'Impatience, and doorway page shortcuts',
    bought: 'Margin erosion and shared-lead fatigue',
    ads: 'Bid inflation and a weak landing page',
    canvass: 'Crew turnover and permit rules',
  },
  {
    label: 'Best when',
    seo: 'You intend to be in this market for years',
    bought: 'You need volume this week to keep crews busy',
    ads: 'You need control over which jobs come in',
    canvass: 'A storm just hit and you have people ready',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Real competitor set on these SERPs (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'roofingwebmasters.com',
    note: 'Roofing only, and it shows',
    detail:
      'Shows up on three of the roofing SEO queries we pulled at an average position of 3.7. They have been doing roofing and nothing but roofing for a long time. If what you want is a vendor who has already seen a thousand roofing sites, they are a genuine answer and we will say so.',
  },
  {
    domain: 'roofingseo.services',
    note: 'The narrowest focus in the set',
    detail:
      'Ranks first for roofing seo services, a term with about 720 searches a month, and fourth for seo for roofing companies at roughly 1,000 a month. A domain built to own one phrase, doing exactly that. Hard to out-rank on the head term by trying to be more roofing than them.',
  },
  {
    domain: 'profitroofingsystems.com',
    note: 'Small footprint, very high placement',
    detail:
      'Appears on only two of these queries but averages position 2.5 when it does. That is the profile of a specialist that has earned real trust on a narrow set of terms rather than spraying content everywhere.',
  },
  {
    domain: 'roofing-seo.com',
    note: 'Exact-match domain, mid-page',
    detail:
      'Three appearances at an average position of 7.7. Proof that an exact-match domain still gets you onto the page in this category, and also that it is no longer enough on its own to get you to the top of it.',
  },
  {
    domain: 'bluecorona.com',
    note: 'Home services generalist at scale',
    detail:
      'Three appearances averaging 10.7. Roofing is one vertical inside a much larger home services operation. Bigger team, broader capability, and roofing is not the only thing anyone there thinks about on a Tuesday.',
  },
  {
    domain: 'servicetitan.com',
    note: 'Not an agency at all',
    detail:
      'Averages position 2.5 across the queries where it appears, and it is a software company. It ranks on the strength of a large content library attached to a brand contractors already trust. Worth knowing, because you are frequently competing with software marketing rather than with another agency.',
  },
  {
    domain: 'thriveagency.com',
    note: 'The widest footprint in the set',
    detail:
      'Appears on eleven of these queries at an average position of 3.8, the broadest coverage of anyone here. A large generalist agency that treats roofing as one of many verticals and wins on sheer domain strength.',
  },
  {
    domain: 'webfx.com',
    note: 'Volume player, mid-page average',
    detail:
      'Five appearances at an average position of 11.4. Enormous content operation, roofing handled as one page in a very large library. Present on almost everything, dominant on comparatively little of it.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 30 items across 6 categories, all grounded in live US PAA
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Roofing SEO basics' },
  { key: 'leads', label: 'Roofing leads' },
  { key: 'local', label: 'Local, reviews & marketing' },
  { key: 'cost', label: 'Scope, timing & results' },
  { key: 'ai', label: 'AI search & 2026' },
  { key: 'trade', label: 'Roofing trade questions' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Roofing SEO basics ─────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is roofing SEO?',
    answer:
      'Roofing SEO is the process of getting your roofing business found when local property owners search for roof replacement, storm repairs, or commercial installation. It targets Google map packs, organic rankings, and AI summaries with verified service-area signals and technical schema.',
  },
  {
    category: 'basics',
    question: 'What are the 4 types of SEO?',
    answer:
      'The four types are local SEO (Google Business Profile and local citations), on-page SEO (service and city page content), technical SEO (page speed and structured data), and off-page SEO (industry links and supplier citations). For roofers, local and technical SEO deliver the highest immediate return.',
  },
  {
    category: 'basics',
    question: 'Do I need a new website, or can you optimise the one I have?',
    answer:
      'We optimize existing websites whenever possible. A complete rebuild is only recommended if your current platform cannot pass Core Web Vitals on mobile, lacks clean URL architecture for city pages, or blocks essential schema markup.',
  },

  /* ── Roofing leads ──────────────────────────────────────────────────── */
  {
    category: 'leads',
    question: 'How do I get roofing leads?',
    answer:
      'Sustainable roofing lead generation combines local organic search and map pack visibility with customer referrals and paid ads. Organic search builds an exclusive lead asset that you own, reducing your reliance on shared lead brokers.',
  },
  {
    category: 'leads',
    question: 'Should I buy roofing leads?',
    answer:
      'Bought marketplace leads can provide quick temporary volume, but they are typically sold to three to five competing contractors simultaneously. Building organic search authority generates exclusive leads where homeowners contact your company directly.',
  },
  {
    category: 'leads',
    question: 'Do you generate commercial roofing leads too?',
    answer:
      'Yes. Commercial roofing requires dedicated landing pages targeting property managers, facility directors, and HOAs. Content focuses on commercial membrane systems like TPO, EPDM, and metal, roof coatings, warranty terms, and preventative maintenance agreements.',
  },

  /* ── Local, reviews & marketing ─────────────────────────────────────── */
  {
    category: 'local',
    question: 'Does my roofing company need a physical address to rank?',
    answer:
      'Google categorizes roofers as service-area businesses. You need a verified physical address to establish your Google Business Profile, but guidelines allow you to hide your street address while defining a driving radius of up to two hours.',
  },
  {
    category: 'local',
    question: 'How far can my roofing service area realistically reach?',
    answer:
      'Google allows service-area designations up to two hours of driving time from your base. However, map pack prominence is strongest within 20 to 30 miles. It is more profitable to dominate three key counties than to dilute relevance across twelve.',
  },
  {
    category: 'local',
    question: 'Do reviews actually affect roofing rankings?',
    answer:
      'Yes. Google explicitly names review count and review velocity as primary prominence factors for local map rankings. Consistently gathering customer reviews mentioning specific roofing services and replying to each review directly improves visibility.',
  },

  /* ── Scope, timing & results ────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'What is the best CRM for roofing companies?',
    answer:
      'Top roofing CRMs include AccuLynx, Jobber, and ServiceTitan. They manage job estimating, CompanyCam photo integration, and invoicing. We ensure your website tracking sends lead attribution data directly into your CRM so you know exactly which keywords produce revenue.',
  },
  {
    category: 'cost',
    question: 'How long does SEO usually take for a roofing company?',
    answer:
      'Google Business Profile optimizations and citation cleanups often show initial ranking improvements within 30 to 60 days. Competitive city pages and storm-related organic rankings compound over three to six months as domain authority grows.',
  },
  {
    category: 'cost',
    question: 'How do you measure whether roofing SEO is working?',
    answer:
      'We track leading metrics like map pack rankings across your target zip codes, organic impressions in Google Search Console, and phone clicks. We tie these directly to booked roof inspections and signed job revenue inside your CRM.',
  },

  /* ── AI search & 2026 ───────────────────────────────────────────────── */
  {
    category: 'ai',
    question: 'Do AI Overviews and ChatGPT change roofing SEO?',
    answer:
      'AI Overviews answer broad informational queries directly in the search results. For contractors, success means structuring content so AI engines cite your business as the authoritative local source, while transactional searches continue driving direct phone calls.',
  },
  {
    category: 'ai',
    question: 'Do you guarantee first-page rankings for roofing keywords?',
    answer:
      'No ethical agency guarantees specific rank positions, and Google explicitly warns against firms that do. We guarantee rigorous technical execution, transparent reporting, and proven search architecture built to outperform competitors sustainably.',
  },
  {
    category: 'ai',
    question: 'Is it worth paying for SEO services?',
    answer:
      'For established roofing contractors looking to build a sustainable pipeline of high-margin retail and commercial replacements, SEO offers one of the lowest customer acquisition costs across digital channels.',
  },

  /* ── Roofing trade questions ────────────────────────────────────────── */
  {
    category: 'trade',
    question: 'What is the 25% rule for roofing?',
    answer:
      'In many building codes, if more than 25 percent of a roof system is damaged or replaced within a 12-month period, the entire roof section must be brought up to current code. This frequently turns partial repairs into complete insurance replacements.',
  },
  {
    category: 'trade',
    question: 'What are the signs of a bad roofing job?',
    answer:
      'Common indicators include crooked shingle courses, mismatched lot colors, missing drip edges, reused flashing, improperly spaced nails, and neglected ridge ventilation. Highlighting verified installation standards on your site reassures homeowners.',
  },
  {
    category: 'trade',
    question: 'How long does a roofing job usually take?',
    answer:
      'A standard residential architectural shingle replacement on a 2,500-square-foot home typically takes one to two days. Complex steep-slope architectural tile, synthetic slate, or large commercial flat roofs can take three to five days.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  dateModified: '2026-08-04',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Roofing SEO Services: SEO for Roofers and Roofing Companies',
  description:
    'Roofing SEO for US contractors, built around storm-driven demand, insurance claim intent, financing questions and service-area search rather than generic local SEO.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Roofing SEO' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/services/roofing-seo/hero.webp',
    width: 1440,
    height: 864,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-roofing-seo'],
  },
  lastReviewed: '2026-07-26',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roofing SEO Services',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Roofing SEO / SEO for Roofers / Roofing Contractor SEO / Local SEO for Roofing Companies / Roofing Website Design / Roofing Lead Generation',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US residential and commercial roofing contractors',
  },
  description:
    'Search programme for US roofing contractors covering Google Business Profile and map pack visibility, city and service page architecture, storm and hail damage content, insurance claim and financing intent, review generation, roofing website performance, and citation inside AI answer engines.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Roofing SEO programme',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'What a roofing SEO programme actually does',
  description:
    'The nine pieces of work that make up a serious roofing SEO programme, in the order they normally happen.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roofing SEO companies ranking on US roofing SEO queries',
  description:
    'Agencies and sites that currently appear on United States roofing SEO search results, with their observed average positions.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.detail,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Roofing SEO', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function RoofingSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="roof-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="roof-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="roof-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="roof-rivals-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="roof-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="roof-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Roofing SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 3.7rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Roofing SEO for contractors who intend to still be here{' '}
                <span className="italic" style={{ color: ORANGE }}>after the storm</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Roofing demand does not arrive evenly. It arrives as a wall of searches the morning after
                hail, from homeowners who are half in an insurance claim and half worried about paying for it.
                We build the search programme that catches all three moments in the towns you actually drive to.{' '}
                <b className="font-bold text-fj-ink">Leads you own, not leads you rent.</b>
              </p>
              <HeroInlineForm region="us" source="services_roofing_seo_hero" submitLabel="Get a roofing SEO review" />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the founder
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/services/local-seo"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Just need the map pack fixed?
                </Link>
              </div>
            </div>

            {/* Right: hero image + a hard-edged demand card, no blur, no glow */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/services/roofing-seo/hero.webp"
                  alt="Aerial view of a suburban neighbourhood of asphalt shingle rooftops photographed at golden hour"
                  width={1440}
                  height={864}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>

              <div
                className="relative z-10 mx-4 -mt-10 rounded-2xl border bg-white p-5 sm:mx-6 sm:p-6"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.10)' }}
              >
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  Live US search demand
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'roofing seo', v: '2,400 a month', d: 'difficulty 7' },
                    { k: 'seo for roofers', v: '2,400 a month', d: 'difficulty 12' },
                    { k: 'roofing leads', v: '1,300 a month', d: 'difficulty 0' },
                    { k: 'roofing company seo', v: '1,000 a month', d: 'difficulty 8' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                        {row.v}
                        <small className="ml-2" style={{ color: ORANGE_DARK }}>
                          {row.d}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  US search volumes and keyword difficulty pulled from DataForSEO, July 2026. Difficulty runs 0
                  to 100. These are genuinely winnable terms, which is why we built this page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST BLUF ────────────────────────────────────── */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="what-is-roofing-seo"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is roofing SEO, and why is it not just local SEO?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Roofing SEO is the work of getting a roofing company found</b> in
                the map pack, the organic results and the AI answer box, for the towns it can actually drive
                to. The mechanics look like local SEO from a distance. Up close, four things make it a
                different job.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                First, demand is event-driven. A dental practice has a flat search curve. A roofer has a flat
                line and then a hailstorm, and the pages that win that spike had to be ranked before it
                happened. Second, a large share of buyers are inside an insurance claim, searching adjuster
                and deductible language rather than roof language. Third, another large share already know
                they need the work and are searching about how to pay for it. Fourth, you are a service-area
                business, so distance and service-area setup govern your visibility in a way a shopfront
                never has to think about.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Get those four right and search becomes the one lead source you own outright. Get them wrong
                and you end up renting demand from a marketplace that raises its price the week a storm makes
                it worth having. If you want the generic version of this work, our{' '}
                <Link href="/services/local-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  local SEO service
                </Link>{' '}
                covers it. This page is the roofing-specific build.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHY ROOFING SEARCH IS DIFFERENT ──────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six things a generic agency gets wrong
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Roofing search does not behave like{' '}
              <span className="italic" style={{ color: ORANGE }}>any other local trade</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              If someone pitches you the same twelve-month content calendar they use for dentists and law
              firms, this is the list they have not read. Every one of these changes what gets built and
              when it has to be live.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DIFFERENCES.map((d) => (
                <div key={d.tag} className="rounded-2xl p-7" style={{ background: d.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: d.accent }}>
                    {d.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. SERVICE AREA, NOT STOREFRONT (image + Google rules) ───── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/services/roofing-seo/search-visibility.webp"
                alt="Minimal map grid showing three terracotta location pins marking a roofing company service area"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                The map pack is the whole game
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                You serve a driving radius, <span className="italic" style={{ color: ORANGE }}>not a street address</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Google names three factors behind local ranking: relevance, distance and prominence. Roofers
                get judged hardest on the second, because distance is measured from whoever is searching. That
                single fact should shape how you draw your service area, which towns get their own page, and
                how honest you are about where you really work.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Hide the address, keep the location',
                    s: 'Google says a service-area business should hide its address, and uses a tradesperson working from home as the example',
                  },
                  {
                    t: 'Two hours of driving is the published ceiling',
                    s: 'Its guidance says your overall service area should not extend farther than roughly two hours of driving from your base',
                  },
                  {
                    t: 'Distance is a ranking factor, not a preference',
                    s: 'Claim five counties and you will lose the map pack in most of them to a roofer who is simply closer',
                  },
                  {
                    t: 'Prominence is partly reviews',
                    s: 'Google states review count and rating feed prominence, along with how many sites link to you',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                Nearly every roofing site we look at breaks at least one of these, usually by claiming a
                service area the size of a state. Narrowing it feels like giving up territory. It is normally
                the fastest visibility gain available.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 5. LISTICLE: what the programme actually does ───────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The programme
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Nine things a roofing SEO programme <span className="italic" style={{ color: ORANGE }}>actually does</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In roughly the order they happen. If a roofing SEO proposal is mostly items eight and nine with
              a monthly blog attached, the foundation work has been skipped and the blog will not save it.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Items eight and nine live with our{' '}
              <Link href="/services/web-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                web design team
              </Link>{' '}
              and our{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO practice
              </Link>
              . That matters more than it sounds: most roofing SEO vendors write a ticket asking someone else
              to make the site faster, then wait. We build the site, so the fix ships.
            </p>
          </div>
        </section>

        {/* ─── 6. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four ways roofers get work
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              SEO vs bought leads vs paid ads vs <span className="italic" style={{ color: ORANGE }}>knocking doors</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              An honest side by side, including where each one fails. We sell the first column and we will
              still tell you to use the third when crews are idle next week. The roofers who stay busy run
              several of these at once.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of roofing SEO, bought marketplace leads, paid search advertising and door to
                  door canvassing across lead ownership, exclusivity, speed, durability, storm behaviour,
                  lead quality and failure modes.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      Roofing SEO
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Bought leads
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Paid search
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Canvassing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th
                        scope="row"
                        className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                      >
                        {row.label}
                      </th>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.seo}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.bought}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.ads}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.canvass}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. The honest summary: bought leads and ads solve
              this month, search solves next year, and only one of the four keeps working after you stop
              paying for it.
            </p>
          </div>
        </section>

        {/* ─── 7. THE COMPETITOR SET (named, fair, real data) ───────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The roofing SEO market already has{' '}
              <span className="italic" style={{ color: ORANGE }}>real specialists</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live US results for the roofing SEO queries on this page in July 2026. Here is
              who actually shows up, with their observed average positions. Several of them are good. You
              should know that before you talk to us, not after.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {r.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What we do differently</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We build the website as well as the search programme, so the speed and structure fixes ship instead of sitting in someone else’s backlog',
                    'One senior person runs the account. The founder scopes it, does the analysis and shows up on the calls',
                    'We treat AI answer engines as a target in their own right, which almost nobody in the roofing-specific set is set up for yet',
                    'We will not sell you a national roofing package if you serve three counties, and we will say so on the first call',
                    'We will tell you when paid search or Local Services Ads is the faster answer, even though it is not what we are selling',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Where we honestly stand</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'FactoryJet has 44 referring domains. Large competitors in this space have hundreds or thousands. We are the challenger and we are not going to pretend otherwise',
                    'Our own visible US rankings today include position 10 for local seo nashville and position 8 for seo agency austin texas. Climbing, not arrived',
                    'We are not a roofing-only shop. If your only criterion is roofing tenure, roofingwebmasters.com has more of it than we do',
                    'We publish no client counts, no invented case study numbers and no testimonials we cannot stand behind',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  We would rather lose a deal to a specialist who suits you better than win one by inflating
                  what we have done. If that reads as a strange thing to put on a sales page, it is the same
                  reason we will tell you when your Business Profile, not your blog, is the actual problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. FIT CHECK ────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[720px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When roofing SEO is the wrong <span className="italic" style={{ color: ORANGE }}>thing to buy</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A mismatched engagement wastes your season and our reputation, and roofing has a short season.
              Read both columns before you book a call.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You intend to be working the same service area in three years, not chasing storms across states',
                    'You are paying a lead marketplace and want to reduce that dependence rather than grow it',
                    'You do both residential and commercial and the two are currently jammed onto the same pages',
                    'Your site was built by whoever built it, and nobody has looked at mobile speed since',
                    'You have finished jobs and happy customers but almost no reviews to show for them',
                    'You want the storm pages ranked before the next season, not written after it',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You need the phone ringing next week to keep crews paid. Buy ads or buy leads, then start this',
                    'You are a storm-chasing operation that will not be in this market next season',
                    'You want three hundred city pages for towns you have never worked in, which is how roofing sites get penalised',
                    'You are expecting guaranteed rankings, which Google itself says nobody can promise',
                    'Nobody on your side can answer the phone or reply to a form inside a few hours',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If you are a smaller owner-run roofer without a marketing person, our{' '}
                  <Link href="/services/small-business-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business SEO
                  </Link>{' '}
                  programme is scoped for that. If you just want to know what is broken before committing to
                  anything, start with an{' '}
                  <Link href="/services/seo-audit" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    SEO audit
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. CITATIONS ────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the claims on this page <span className="italic" style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              You should not take a marketing company&rsquo;s word for how Google treats roofers. Three
              primary sources back the specific claims we make above. Open them before you hire anyone,
              including us.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body:
                    'Google states that service-area businesses should hide their address, using a tradesperson working from a residential address as the example, and that the overall service area should not extend farther than about two hours of driving time from where the business is based.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'How local ranking is decided',
                  body:
                    'Google names three factors: relevance, distance and prominence. It says prominence is partly based on how many websites link to you and how many reviews you have, that more reviews and positive ratings can help local ranking, and that replying to reviews helps you stand out.',
                  href: 'https://support.google.com/business/answer/7091',
                },
                {
                  src: 'NOAA National Severe Storms Laboratory',
                  title: 'Where hail actually falls',
                  body:
                    'NOAA reports that Nebraska, Colorado and Wyoming usually have the most hailstorms, and that the area where the three states meet, known as hail alley, averages seven to nine hail days a year. This is why storm content has to be regional and has to be early.',
                  href: 'https://www.nssl.noaa.gov/education/svrwx101/hail/',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.body}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
                    style={{ color: ORANGE_DARK }}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volumes and keyword difficulty quoted on this page come from DataForSEO, United States,
              pulled July 2026. Competitor positions are the observed averages across the roofing SEO queries
              we sampled on the same date. Rankings move, so treat them as a snapshot rather than a permanent
              scoreboard.
            </p>
          </div>
        </section>

        {/* ─── 10. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[460px]">
              <img
                src="/images/us/services/roofing-seo/roof-detail.webp"
                alt="Close-up of a shingle roof ridge line and metal flashing detail on a residential roof"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 18px 40px rgba(40,30,90,0.18)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                Who you actually work with
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                The details decide it, <span className="italic" style={{ color: ORANGE_DARK }}>same as on the roof</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A roof fails at the flashing, the valleys and the penetrations, not in the middle of a clean
                slope. Search works the same way. Sites lose on the unglamorous joins: a service area drawn
                wrong, nine city pages saying the same thing, a phone number that is not tappable. We work
                the joins.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led analysis', s: 'The person who scopes the work is the person who does it' },
                  { t: 'Search and build in one team', s: 'We design and develop sites too, so fixes ship rather than queue' },
                  { t: 'Classic search and AI answers together', s: 'Map pack, blue links and citation inside AI summaries in one plan' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no guaranteed rankings' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={LAV} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
              </p>
              <div className="mt-6">
                <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related <span className="italic" style={{ color: ORANGE }}>services</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'Local SEO',
                  href: '/services/local-seo',
                  desc: 'Map pack, Google Business Profile and near-me search for any service-area business, roofing or otherwise.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'The done-for-you retainer. Technical, content and authority work run end to end by our team.',
                },
                {
                  label: 'SEO audit',
                  href: '/services/seo-audit',
                  desc: 'Find out what is actually broken before committing to a programme. A prioritised fix list you can act on.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named and cited inside ChatGPT, Perplexity and Google AI Overviews, not just ranked in blue links.',
                },
                {
                  label: 'Small business SEO',
                  href: '/services/small-business-seo',
                  desc: 'Scoped for owner-run contractors without a marketing department or an in-house marketer.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'Roofing website design built for phone speed, tappable calls and forms people finish while annoyed.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[168px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 12. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Roofing SEO FAQ"
          headline="The questions roofers actually search"
          lead="Thirty-six answers covering how roofing SEO works, where leads really come from, how the map pack judges a service-area business, what drives scope, and a few trade questions homeowners keep asking you. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 13. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE THE NEXT SEASON"
          headline="Find out what is actually holding your roofing leads back"
          sub="Book a call with the founder. We will look at your Business Profile, your service area setup, your site speed on mobile and the queries in your market, then tell you plainly whether search is worth building for you or whether you should spend the next quarter somewhere else."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See local SEO', href: '/services/local-seo' }}
          objectionHandler="Founder-led. No guaranteed rankings, no invented case studies, and you own the site and the roadmap."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
