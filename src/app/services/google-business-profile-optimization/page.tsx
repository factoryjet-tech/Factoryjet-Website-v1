import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';
import JsonLd from '@/components/JsonLd';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/google-business-profile-optimization, built 2026-11-24.

   Why this page exists: a 24 Nov 2026 Search Console gap audit found 95
   Google Business Profile queries over 12 months (1,483 impressions, 0
   clicks, average position 21.7), mostly city variants such as
   "google business profile optimization tampa", with no page on the site
   about the topic. GBP was only an H2 on /services/local-seo, /uk/local-seo
   and /au/local-seo. DataForSEO US volumes pulled 2026-11-24:
   "google business profile optimization" 6,600/mo, "... services" 1,900/mo,
   "google business profile management" 2,400/mo, "google business profile
   verification" 2,900/mo, "google my business optimization" 590/mo.

   Truth rules for anyone editing this file:
   - Every Google rule links to Google's own help page through the SRC map.
     Each URL was opened on 2026-11-24 (CHECKED_ON).
   - No FactoryJet prices. The dollar figures are vendors' published list
     prices, each named, linked and labelled as a vendor price, not a survey.
   - No client is named and no ranking outcome is claimed. Google itself
     says a better local ranking cannot be requested or bought.
   - The "what the results page showed" block restates our own DataForSEO
     pull of 2026-11-24. Re-pull before changing it.
   - Layout and schema mirror /services/shopify-netsuite-integration, with
     JSON-LD emitted only through <JsonLd>.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered sitewide by src/app/layout.tsx and referenced here by @id.
   FAQPage mainEntity is built from the same FAQ_ITEMS array the visible
   <FAQ> renders. Breadcrumb JSON-LD is built from BREADCRUMB_ITEMS, the same
   array the visible <Breadcrumbs> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/google-business-profile-optimization';
const PAGE_TITLE = 'Google Business Profile Optimization Services | FactoryJet';
const PAGE_DESC =
  'Google Business Profile optimization for US businesses. We fix what risks suspension, fill every field, build reviews and track the calls and visits it brings.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'google business profile optimization',
    'google business profile optimization services',
    'google business profile management',
    'google business profile management services',
    'gbp optimization',
    'google my business optimization',
    'google business profile seo',
    'how to optimize google business profile',
    'google maps optimization',
    'google business profile suspended',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: { 'en-US': CANONICAL_URL, 'x-default': CANONICAL_URL },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Google Business Profile optimization services for US businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** One array feeds the visible <Breadcrumbs> and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Local SEO', url: 'https://factoryjet.com/services/local-seo' },
  { name: 'Google Business Profile Optimization', url: CANONICAL_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Google Business Profile Optimization',
  serviceType:
    'Google Business Profile optimization and management: guideline audit, categories, services and products, attributes, photos and video, review requests and replies, Google posts, service-area setup, multi-location profiles, UTM tracking and reporting',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet audits a Google Business Profile against Google’s own guidelines, fixes what could get it suspended, fills every relevant field, builds a steady review request and reply routine, posts updates, and tags profile links so calls, direction requests and website visits from the profile can be counted. One-time optimization or ongoing management, for storefront, service-area, hybrid and multi-location businesses.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-24. ── */
const SRC = {
  gRanking: {
    short: 'Google: improve your local ranking',
    label: 'Google Business Profile Help: Tips to improve your local ranking on Google',
    url: 'https://support.google.com/business/answer/7091?hl=en',
  },
  gGuidelines: {
    short: 'Google: profile guidelines',
    label: 'Google Business Profile Help: Guidelines for representing your business on Google',
    url: 'https://support.google.com/business/answer/3038177?hl=en',
  },
  gHelp: {
    short: 'Google Business Profile Help',
    label: 'Google Business Profile Help Center',
    url: 'https://support.google.com/business/?hl=en',
  },
  semrush: {
    short: 'Semrush GBP guide, Feb 2026',
    label: 'Semrush: Google Business Profile optimization, by Alex Lindley (February 19, 2026)',
    url: 'https://www.semrush.com/blog/google-business-profile-optimization/',
  },
  gmbGorillaOpt: {
    short: 'GMB Gorilla optimization prices',
    label: 'GMB Gorilla: Google Business Profile optimization service (vendor list prices)',
    url: 'https://gmbgorilla.com/google-my-business-optimization-service/',
  },
  gmbGorillaMgmt: {
    short: 'GMB Gorilla management prices',
    label: 'GMB Gorilla: Google Business Profile management service (vendor list prices)',
    url: 'https://gmbgorilla.com/google-my-business-management-service/',
  },
  whitespark: {
    short: 'Whitespark GBP management',
    label: 'Whitespark: Google Business Profile management service (vendor list price)',
    url: 'https://whitespark.ca/google-my-business-management-service/',
  },
  merchynt: {
    short: 'Merchynt pricing guide',
    label: 'Merchynt: Google Business Profile management pricing guide (vendor guide)',
    url: 'https://merchynt.com/post/google-my-business-management-pricing',
  },
  sitesBySara: {
    short: 'Sites by Sara prices',
    label: 'Sites by Sara: Local SEO and Google Business Profile management (vendor list prices)',
    url: 'https://sitesbysara.com/local-seo-google-business-profile/',
  },
  webfx: {
    short: 'WebFX local SEO pricing',
    label: 'WebFX: Local SEO pricing (vendor page, updated September 2026)',
    url: 'https://www.webfx.com/local-seo/pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'ranking', label: 'Ranking and reviews' },
  { key: 'rules', label: 'Rules and suspensions' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── The basics ──────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is Google Business Profile optimization?',
    answer:
      'It is the work of making your free Google listing complete, accurate and active, so it shows up for more local searches on Google Search and Maps and turns more of those views into calls, direction requests and website visits. It covers your categories, services, hours, photos, reviews, posts and the links on the profile, all kept inside Google’s rules.',
  },
  {
    category: 'basics',
    question: 'Is Google Business Profile the same as Google My Business?',
    answer:
      'Yes. Google My Business was renamed Google Business Profile. People still search for both names, and "GMB optimization" and "GBP optimization" describe the same work.',
  },
  {
    category: 'basics',
    question: 'What does a Google Business Profile optimization service include?',
    answer:
      'Ours covers an audit against Google’s guidelines, the business name and address checked against those rules, primary and secondary categories, services and products, attributes, photos and video, a review request and reply routine, regular Google posts, service-area setup where it applies, and UTM tags on the profile’s website link so visits from the profile show up separately in GA4.',
  },
  {
    category: 'basics',
    question: 'Is profile optimization a one-time job or ongoing?',
    answer:
      'Both exist. A one-time optimization fixes and fills the profile once. Ongoing management keeps reviews answered, posts current and photos fresh, and watches for edits that anyone, including Google, can suggest to your listing. Most single-location businesses need the one-time fix first and then a light monthly routine they can run themselves or hand to us.',
  },
  {
    category: 'basics',
    question: 'Do I need a website to have a Google Business Profile?',
    answer:
      'No, a profile can exist without one. A website still helps, because Google judges how well your profile matches a search partly from what it can read about you across the web. The two should state the same name, address, hours and services.',
  },
  // ── Ranking and reviews ─────────────────────────────────────────
  {
    category: 'ranking',
    question: 'How does Google rank Google Business Profiles?',
    answer:
      'Google says local results are mainly based on relevance, distance and popularity, which the same help page also calls prominence. Relevance is how well the profile matches the search. Distance is how far the business is from the searcher. Prominence is how well known the business is, and Google says more reviews and positive ratings can help.',
  },
  {
    category: 'ranking',
    question: 'Can you guarantee a top-three spot in the map pack?',
    answer:
      'No. Google states that there is no way to request or pay for a better local ranking, and distance from the searcher is outside anyone’s control. What we can promise is the work: a profile that follows the rules, is complete, and gives Google and searchers more reasons to choose you.',
  },
  {
    category: 'ranking',
    question: 'Which Google Business Profile category should I choose?',
    answer:
      'The most specific primary category that describes your main service, then a few secondary categories for other real services. The primary category tells Google what you mainly do, and picking a broad one, such as Contractor instead of Roofing Contractor, is one of the most common mistakes we find.',
  },
  {
    category: 'ranking',
    question: 'How do I get more Google reviews?',
    answer:
      'Ask every customer, at the moment the job is done, with a direct link to your review form. A routine that asks each customer works better than a push every few months. Keep the request plain, with no gift or discount attached, and send it to every customer, not only the happy ones.',
  },
  {
    category: 'ranking',
    question: 'Should I reply to every Google review?',
    answer:
      'Yes, including the bad ones. Google lists responding to reviews among its tips for local ranking. A short, specific reply shows the next reader that a person is paying attention, which matters as much as the rating itself.',
  },
  {
    category: 'ranking',
    question: 'Do Google posts help ranking?',
    answer:
      'Google does not say posts are a ranking factor. They keep the profile current and give searchers a reason to click, for example an offer, an event or a new service. We post on a schedule you approve and measure clicks from posts rather than assume they move rank.',
  },
  {
    category: 'ranking',
    question: 'How long does Google Business Profile optimization take to work?',
    answer:
      'Fixes to the name, categories and missing fields often show in the profile’s own Performance numbers within weeks. Gains that depend on reviews build over months. We report from your profile’s Performance data and GA4 so you can see the trend yourself.',
  },
  // ── Rules and suspensions ───────────────────────────────────────
  {
    category: 'rules',
    question: 'Why was my Google Business Profile suspended?',
    answer:
      'The usual causes are in Google’s guidelines: extra words in the business name, an address that is a virtual office or a PO box, a service-area business showing its home address, more than one profile for the same location, or a phone number or link that redirects somewhere other than the business. We find which rule was broken, fix it, and then file the reinstatement request through Google.',
  },
  {
    category: 'rules',
    question: 'Can I add keywords to my business name?',
    answer:
      'No. Google says unnecessary information in a business name is not permitted and can lead to suspension. Taglines, service words and city names added to the name are the most common reason profiles we audit are at risk. Your profile name should match your real-world signage.',
  },
  {
    category: 'rules',
    question: 'Can a service-area business hide its address?',
    answer:
      'Yes, and Google says it should. A business that serves customers at their location, such as a plumber or a mobile detailer, should hide its address and set a service area. Google says that area should not reach farther than about two hours of driving time from where the business is based.',
  },
  {
    category: 'rules',
    question: 'Can I use a virtual office or a coworking address?',
    answer:
      'Not a virtual office. Google says a rented mailing address that the business does not operate from is not eligible for a profile, and PO boxes are not accepted. If you have no staffed location that customers can visit, set the profile up as a service-area business instead.',
  },
  {
    category: 'rules',
    question: 'Can I use a call tracking number on my profile?',
    answer:
      'Be careful. Google’s guidelines say the number must be under the direct control of the business and must not redirect people to numbers other than the business’s own. We prefer to measure calls from the profile’s own Performance report and to tag the website link with UTM parameters, which adds no redirect at all.',
  },
  // ── Cost and working with us ───────────────────────────────────
  {
    category: 'working',
    question: 'How much does Google Business Profile optimization cost?',
    answer:
      'Published vendor prices we read on 24 Nov 2026 run from about $325 to $500 per profile for a one-time optimization, and from $99 to $499 a month for ongoing management, with some local SEO bundles at $850 a month. These are vendors’ own list prices, linked in the cost table on this page. FactoryJet quotes each job at a fixed price in writing after a short call.',
  },
  {
    category: 'working',
    question: 'Will I lose control of my profile if you manage it?',
    answer:
      'No. You stay the primary owner. You add us as a manager from inside your profile, so we never need your Google password, and you can remove our access at any time with one click.',
  },
  {
    category: 'working',
    question: 'Do you manage profiles for businesses with many locations?',
    answer:
      'Yes. Each location gets its own profile, as Google requires, with categories, hours and photos set for that location. We keep the shared facts consistent across all of them and report each location separately, so a weak branch does not hide inside a total.',
  },
  {
    category: 'working',
    question: 'Do you work with online stores that also have a showroom or pickup point?',
    answer:
      'Yes, and it is where we spend much of our time, since FactoryJet builds ecommerce stores. A staffed showroom, warehouse counter or pickup point can qualify for a profile. Google also lets eligible retailers show in-store products on the profile, which we connect to the store catalog where it applies.',
  },
  {
    category: 'working',
    question: 'Is Google Business Profile optimization part of local SEO?',
    answer:
      'Yes. The profile is one part of local SEO. The rest is your website’s location and service pages, consistent listings on other directories, and local links. If you need the whole program, see our local SEO services. If only the profile needs work, this page is the right starting point.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── What the work covers. ── */
const INCLUDED: ReadonlyArray<{ t: string; b: string }> = [
  {
    t: 'Guideline audit',
    b: 'Every field checked against Google’s guidelines first, because a profile that breaks a rule can be suspended no matter how complete it is.',
  },
  {
    t: 'Name, address and hours',
    b: 'The name matched to your signage, the address shown or hidden correctly, and hours, holiday hours and phone checked against your website.',
  },
  {
    t: 'Categories',
    b: 'The most specific primary category for your main service, then secondary categories only for services you offer.',
  },
  {
    t: 'Services and products',
    b: 'Each service listed with a plain description, products added where they fit, and attributes such as accessibility or online booking filled in.',
  },
  {
    t: 'Photos and video',
    b: 'Real photos of the outside, the inside, the team and the work, named and added on a schedule. No stock images.',
  },
  {
    t: 'Review routine',
    b: 'A short link and a message your team sends after each job, plus replies to every review, good or bad, in your voice.',
  },
  {
    t: 'Google posts',
    b: 'Offers, events and updates posted on a schedule you approve, so the profile never looks abandoned.',
  },
  {
    t: 'Tracking that adds no redirect',
    b: 'UTM tags on the website and booking links, so GA4 shows visits from the profile apart from the rest of Google.',
  },
];

/* ── Guideline risks. Each rule restates Google's own guidelines page. ── */
const RULES: ReadonlyArray<{ rule: string; risk: string; fix: string }> = [
  {
    rule: 'Extra words in the business name',
    risk: 'Google does not allow taglines, store codes, city names or service words added to the name, and says it can suspend the profile.',
    fix: 'Name matched to signage. Services go in the categories and services fields instead.',
  },
  {
    rule: 'Virtual office or PO box address',
    risk: 'A rented address the business does not operate from is not eligible. PO boxes are not accepted.',
    fix: 'Moved to a real staffed address, or set up as a service-area business.',
  },
  {
    rule: 'Service-area business showing its address',
    risk: 'Google says businesses that serve customers at the customer’s location should hide their address.',
    fix: 'Address hidden, service area set by city or ZIP code.',
  },
  {
    rule: 'Service area set too wide',
    risk: 'Google says the area should not reach farther than about two hours of driving time.',
    fix: 'Service area cut back to where you work.',
  },
  {
    rule: 'Two profiles for one location',
    risk: 'Google allows one profile per business at each location.',
    fix: 'Duplicates found and the extra profile merged or removed through Google.',
  },
  {
    rule: 'Phone number or link that redirects',
    risk: 'The number must be under the business’s direct control and must not send people to numbers or pages other than the business’s own.',
    fix: 'Main number restored. Calls counted from the profile’s Performance report instead.',
  },
];

/* ── Business types. ── */
const BUSINESS_TYPES: ReadonlyArray<{ t: string; who: string; b: string }> = [
  {
    t: 'Storefront',
    who: 'Clinics, shops, restaurants, offices customers visit',
    b: 'Address shown, hours exact, photos of the entrance and parking so first-time visitors find the door. Reviews and categories carry most of the weight.',
  },
  {
    t: 'Service-area business',
    who: 'Roofers, plumbers, HVAC, cleaners, mobile services',
    b: 'Address hidden, service area set by city or ZIP code, photos of real jobs. Google says the area should stay within about two hours of driving time, so we set it to where you work.',
  },
  {
    t: 'Hybrid',
    who: 'Businesses with a counter and a van',
    b: 'Address shown and a service area set. Google says the location must be staffed and able to receive customers during the stated hours.',
  },
  {
    t: 'Multi-location',
    who: 'Chains, franchises, groups of practices',
    b: 'One profile per location, managed together. Shared facts kept identical, local facts kept local, and each location reported on its own.',
  },
  {
    t: 'Online store with a showroom or pickup point',
    who: 'Ecommerce brands with a staffed location',
    b: 'The staffed location gets the profile, the store is the website link, and eligible retailers can show in-store products from their catalog.',
  },
];

/* ── Market prices. Every row is a vendor's own published figure, linked. ── */
const COSTS: ReadonlyArray<{ item: string; range: string; source: SrcKey }> = [
  { item: 'One-time optimization, 1 to 4 profiles', range: '$500 per profile', source: 'gmbGorillaOpt' },
  { item: 'One-time optimization, 11 to 25 profiles', range: '$325 per profile', source: 'gmbGorillaOpt' },
  { item: 'Setup fee for an unclaimed profile', range: '$499 one time', source: 'gmbGorillaMgmt' },
  { item: 'Setup and audit fee', range: '$300 to $500', source: 'merchynt' },
  { item: 'Monthly management, per location', range: '$99, $249 or $399 a month, by plan', source: 'gmbGorillaMgmt' },
  { item: 'Monthly management, per location', range: '$125 to $400 a month', source: 'merchynt' },
  { item: 'Monthly management', range: 'From $499 a month, no setup fee', source: 'whitespark' },
  { item: 'Local SEO bundle including profile management', range: '$850 a month, plus $250 a month per extra location', source: 'sitesBySara' },
  { item: 'Full local SEO retainer (wider scope)', range: '$500 to $3,000 a month', source: 'webfx' },
];

/* ── Process. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'You add us as a manager',
    b: 'From inside your profile, in a minute. You stay the primary owner and we never ask for your Google password.',
  },
  {
    n: '02',
    t: 'Audit against the rules',
    b: 'Every field compared with Google’s guidelines and with your website. You get a written list: what breaks a rule, what is missing, what is out of date.',
  },
  {
    n: '03',
    t: 'Fix the risks first',
    b: 'Name, address, duplicate profiles and redirecting numbers are fixed before anything is added, so new work is not built on a profile that can be suspended.',
  },
  {
    n: '04',
    t: 'Fill and tag every field',
    b: 'Categories, services, products, attributes, photos and descriptions. Website and booking links get UTM tags so GA4 counts visits from the profile.',
  },
  {
    n: '05',
    t: 'Start the review routine',
    b: 'A short review link, a message your team can send after each job, and replies to the reviews already waiting.',
  },
  {
    n: '06',
    t: 'Report from your own data',
    b: 'Calls, direction requests and website clicks from the profile’s Performance report, plus profile visits in GA4. Then you decide: run it yourself or hand us the monthly routine.',
  },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'One-time optimization package' },
  { label: 'Doing it yourself' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Starts with a guideline audit',
    values: ['Yes, risks fixed before anything is added', 'Sometimes, as a scorecard', 'Only if you read Google’s guidelines first'],
  },
  {
    feature: 'Ongoing reviews and posts',
    values: ['Optional monthly routine, or handed back to your team', 'Usually a separate monthly plan', 'Your time, every week'],
  },
  {
    feature: 'Tracking',
    values: ['UTM tags plus the profile’s Performance report', 'Varies; some use tracking numbers', 'Profile Performance report'],
  },
  {
    feature: 'Website fixes when the profile is not the problem',
    values: ['Same team builds and fixes websites', 'Usually out of scope', 'You or your web developer'],
  },
  {
    feature: 'Who owns the profile',
    values: ['You. We are added as a manager', 'Should be you; check the contract', 'You'],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/local-seo', t: 'Local SEO services', b: 'The full program: profile, location pages, citations and local links.' },
  { href: '/services/ai-seo', t: 'AI SEO', b: 'Getting named in ChatGPT, Perplexity and Google AI answers.' },
  { href: '/services/seo-audit', t: 'SEO audit', b: 'When the website, not the profile, is what holds you back.' },
  { href: '/services/small-business-seo', t: 'Small business SEO', b: 'Search work sized for single-location owners.' },
  { href: '/services/roofing-seo', t: 'Roofing SEO', b: 'Service-area profiles and lead pages for roofers.' },
  { href: '/services/dental-seo', t: 'Dental SEO', b: 'Practice profiles, reviews and new-patient pages.' },
  { href: '/services/law-firm-seo', t: 'Law firm SEO', b: 'Practice-area pages and local visibility for firms.' },
  { href: '/blog/local-seo-cost-2026', t: 'Local SEO cost in 2026', b: 'Published market ranges for the wider local SEO job.' },
];

function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function GoogleBusinessProfileOptimizationPage() {
  return (
    <>
      <JsonLd id="gbp-optimization-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="gbp-optimization-faq-schema" data={faqSchema} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="Audit my profile" title="Profile audit" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    GOOGLE BUSINESS PROFILE OPTIMIZATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  Google Business Profile optimization services, inside Google&rsquo;s rules.
                </h1>

                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    Google Business Profile optimization makes your free Google listing complete, accurate and active, so
                    it appears in more local searches on Google Search and Maps and turns more views into calls, direction
                    requests and visits.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    We start with what can get a profile suspended, then fix categories, services, photos and reviews,
                    and tag every link so you can count what the profile brings in.
                  </p>
                </div>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_google_business_profile_optimization_hero"
                    service="Google Business Profile Optimization"
                    submitLabel="Audit my profile"
                    trustText="Send your business name and city. The founder reviews your profile and replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>97% on-time delivery</span>
                  <span>Founded 2014</span>
                  <span>Sources checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What Google says decides local results
                  </figcaption>
                  <dl className="mt-4 grid gap-4">
                    {[
                      { k: 'Relevance', v: 'How well your profile matches the search. Categories, services and descriptions.', lever: 'You control it' },
                      { k: 'Distance', v: 'How far you are from the person searching.', lever: 'Mostly fixed' },
                      { k: 'Prominence', v: 'How well known you are. Google also calls it popularity, and names reviews and ratings.', lever: 'You build it' },
                    ].map((r, i) => (
                      <div key={r.k} className={i > 0 ? 'border-t border-fj-neutral-200 pt-4' : ''}>
                        <dt className="flex items-baseline justify-between gap-3">
                          <span className="font-fj-display text-base font-bold text-fj-ink">{r.k}</span>
                          <span className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">{r.lever}</span>
                        </dt>
                        <dd className="mt-1 font-fj-body text-[15px] leading-snug text-fj-neutral-600">{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 rounded-xl bg-fj-cream px-4 py-3 font-fj-body text-[13px] leading-snug text-fj-ink">
                    Google also says there is no way to request or pay for a better local ranking. Anyone who promises
                    a spot is guessing.
                  </p>
                  <SourceLinks ids={['gRanking']} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IT IS + WHAT THE RESULTS PAGE SHOWED */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">The short version</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What Google Business Profile optimization is, and what it is not.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your Google Business Profile, once called Google My Business, is the panel that appears when someone
                  searches your name, and the pin they tap in the map pack and on Google Maps. It is free. Google fills
                  gaps in it from what it finds elsewhere, and anyone can suggest an edit to it.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Optimization means three things. The profile follows Google&rsquo;s rules, so it cannot be suspended.
                  Every field that applies to your business is filled with the same facts your website states, so Google
                  can match you to more searches. And the profile stays active, with reviews answered and photos and
                  posts added, so the people who find it choose you.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  It is not buying a ranking, stuffing keywords into your name, or creating extra profiles for areas you
                  do not have an office in. Each of those breaks a written rule and puts the whole listing at risk.
                </p>
                <SourceLinks ids={['gRanking', 'gGuidelines']} />
              </div>

              <aside className="min-w-0 lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What the results page showed, {CHECKED_ON}
                  </p>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    We pulled the US Google results for &ldquo;google business profile optimization&rdquo; and
                    &ldquo;google business profile optimization services&rdquo; and read the pages that ranked.
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {[
                      'Both searches opened with an AI Overview. Its references included Google’s own help page on local ranking, Reddit threads and YouTube videos.',
                      'Two of the top six organic results for the main term were Reddit threads from small business owners.',
                      'Of the three agency service pages we could open, two published prices and one covered suspensions. None said anything about AI search.',
                      'US monthly searches: 6,600 for the main term, 2,900 for "google business profile verification" and 2,400 for "google business profile management".',
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Search volumes are Google Ads estimates pulled through DataForSEO on {CHECKED_ON}. Results pages change
                    daily.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 3. WHAT'S INCLUDED */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">What the work covers</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Eight parts of a Google Business Profile we optimize.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The order matters. Rules come first, then the fields Google uses to match you to a search, then the
              routine that keeps the profile alive. Google&rsquo;s own tips name the same areas: verify, keep information
              current, respond to reviews and add photos.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {INCLUDED.map((b, i) => (
                <li
                  key={b.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-5 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <span className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-fj-display text-lg font-bold text-fj-ink">{b.t}</h3>
                  <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{b.b}</p>
                </li>
              ))}
            </ul>
            <SourceLinks ids={['gRanking', 'semrush']} />
          </div>
        </section>

        {/* 4. SUSPENSION RISKS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Before anything else</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Six things that get a Google Business Profile suspended.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Google publishes its rules for profiles and says it can suspend profiles that break them. A suspended
                  profile disappears from Maps, reviews and all. Most of what we see at risk comes from a well-meant
                  shortcut, often taken by a past agency.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Each row restates Google&rsquo;s guidelines page as read on {CHECKED_ON}. If your profile is already
                  suspended, we find the broken rule, fix it, and then file the reinstatement request.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Google Business Profile suspension risks and fixes">
                  <table className="w-full min-w-[600px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">What we find</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Google&rsquo;s rule</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Our fix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RULES.map((r) => (
                        <tr key={r.rule} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="w-[26%] px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">{r.rule}</th>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{r.risk}</td>
                          <td className="w-[30%] px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">{r.fix}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <SourceLinks ids={['gGuidelines']} />
              </div>
            </div>
          </div>
        </section>

        {/* 5. BUSINESS TYPES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Set up for how you serve customers</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Storefront, service-area, hybrid or many locations.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The right setup depends on where your customers meet you. Getting this wrong is the root of most address
              problems, so we decide it before touching anything else.
            </p>
            <ol className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {BUSINESS_TYPES.map((r, i) => (
                <li
                  key={r.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${
                    i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : i === 2 ? 'lg:col-span-5' : i === 3 ? 'lg:col-span-7' : 'lg:col-span-12'
                  }`}
                >
                  <h3 className="font-fj-display text-xl font-bold text-fj-ink">{r.t}</h3>
                  <p className="mt-1 font-fj-mono text-xs font-semibold uppercase tracking-wider text-[#B23E13]">{r.who}</p>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{r.b}</p>
                </li>
              ))}
            </ol>
            <SourceLinks ids={['gGuidelines', 'gRanking']} />
          </div>
        </section>

        {/* 6. AI SEARCH */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">AI answers</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Your profile and AI search tell the same story, or they should.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Google now answers many searches with an AI Overview before the regular results, and both searches we
                  checked for this page did. Assistants such as ChatGPT and Perplexity also answer &ldquo;who should I
                  hire near me&rdquo; questions. None of them publish exactly which sources they weigh.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  What we can control is consistency. When your profile, your website and your listings on other sites
                  give the same name, address, hours and services, any summary has one version of you to repeat. When
                  they disagree, it may repeat the wrong one, or skip you.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  So every profile we optimize is checked against the website line by line. If you want to be named in
                  AI answers beyond Maps, that is our{' '}
                  <Link href="/services/ai-seo" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI SEO
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/generative-engine-optimization" className="font-semibold text-fj-ink underline underline-offset-4">
                    generative engine optimization
                  </Link>{' '}
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Send your business name and city. We will tell you what is wrong with the profile."
          sub="We check your profile against Google's guidelines and your website, and reply with the list of fixes in order. If it is a job you can do yourself, we say so."
          label="Audit my profile"
        />

        {/* 7. COST */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Published prices</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What Google Business Profile optimization costs.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We found no independent survey of what businesses pay for profile work alone. These are vendors&rsquo;
                  own published list prices, each linked, read on {CHECKED_ON}. Every one of these firms sells the
                  service. WebFX&rsquo;s range is for a full local SEO retainer, shown for scale.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  FactoryJet does not publish a price list. We quote each job at a fixed price in writing after a short
                  call, and there is no monthly minimum.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Published vendor prices for Google Business Profile optimization">
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Item</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Published price</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COSTS.map((c) => (
                        <tr key={`${c.item}-${c.source}`} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">{c.item}</th>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.range}</td>
                          <td className="px-4 py-4">
                            <a
                              href={SRC[c.source].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-fj-body text-[13px] font-semibold text-[#B23E13] underline underline-offset-2"
                            >
                              {SRC[c.source].short}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  GMB Gorilla lists $375 per profile for 5 to 10 profiles. Merchynt sells its own software and puts doing
                  it yourself at 5 to 10 hours of work a month. Whitespark does not say whether its price is per location.
                </p>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  For the wider local SEO job, see our{' '}
                  <Link href="/blog/local-seo-cost-2026" className="font-semibold text-fj-ink underline underline-offset-4">
                    local SEO cost guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  How we optimize a Google Business Profile.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six steps, the same for one location or fifty. The first three protect the profile. The last three
                  grow what it brings in.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  When the profile is fine and the website is the problem, we say so. FactoryJet also builds and fixes
                  websites, so a slow or thin site can be handled by the same team through an{' '}
                  <Link href="/services/seo-audit" className="font-semibold text-fj-ink underline underline-offset-4">
                    SEO audit
                  </Link>{' '}
                  or{' '}
                  <Link href="/services/web-design" className="font-semibold text-fj-ink underline underline-offset-4">
                    web design
                  </Link>
                  .
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-bold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 9. HOUSE TERMS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How we work with you</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  The profile, the reviews and the data stay yours.
                </h2>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'You stay the owner', d: 'We are added as a manager from inside your profile. No shared passwords, and you can remove us at any time.' },
                  { t: 'Reports from your own accounts', d: 'Numbers come from your profile’s Performance report and your GA4, so you can check every figure yourself.' },
                  { t: 'Fixed price per job', d: 'The audit, the one-time fix and any monthly routine are each scoped and priced in writing before work starts.' },
                  { t: 'No monthly minimum', d: 'Ongoing management is optional. Many owners take the routine in-house once the profile is fixed.' },
                  { t: 'Founder-led', d: 'The person who scopes the work answers for it. FactoryJet has served 500+ businesses since 2014.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <p className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. COMPARISON */}
        <ComparisonTable
          eyebrow="Your options"
          headline="FactoryJet, a one-time package, or doing it yourself."
          lead="A single-location owner with time can do most of this alone, and Google's help pages explain each field. You pay someone for the audit against the rules, the routine you never get to, and the website fixes a profile package leaves out."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Package details are general, based on the vendor pages linked on this page as read on ${CHECKED_ON}. Check any provider's own terms.`}
          scrollRegionLabel="Comparison of ways to optimize a Google Business Profile"
        />

        {/* 11. RELATED */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">Related local and search services.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-bold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. SOURCES */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every Google rule on this page comes from Google&rsquo;s own help pages. Every price comes from the
                  vendor page linked beside it. Google changes its rules and vendors change their prices, so check the
                  linked page before you act on one.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Published {PAGE_PUBLISHED} &middot; Reviewed {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <FAQ
          eyebrow="Google Business Profile FAQ"
          headline="Google Business Profile questions, answered plainly."
          lead={`What owners ask before handing over their profile. Google's rules are restated from its help pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 14. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Google Business Profile optimization"
          headline="A profile that follows the rules and gives people a reason to call."
          sub="Send your business name and city. We check the profile against Google's guidelines and your website, fix the risks first, and show you the calls and visits it brings from your own data."
          primaryCta={{ label: 'Audit my profile', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="You stay the owner of your profile. Fixed quote in writing before work starts. No monthly minimum."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
