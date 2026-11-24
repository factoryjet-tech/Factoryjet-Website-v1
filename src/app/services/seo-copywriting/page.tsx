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
   /services/seo-copywriting, built 2026-11-24.

   Why this page exists: a Search Console gap audit on 24 Nov 2026 found
   factoryjet.com earning impressions for SEO copywriting with no page for it
   ("seo copywriting services colorado springs" pos 25.7, "seo copywriting
   tampa" 17.9, "seo content agency" 43.1, "seo content consultant" 75.4; about
   580 impressions in 12 months). DataForSEO US, 24 Nov 2026: "seo content
   writing" 1,000/mo, "seo copywriting" 880, "seo copywriter" 880, "website
   copywriting services" 480, "seo copywriting services" 390, "seo content
   writing services" 390, "seo content agency" 140, "seo content services" 140.
   Page writing is one of the six services Bhavesh confirmed on 24 Nov 2026.

   SERP read on 24 Nov 2026 (DataForSEO, US, "seo copywriting services"): 7 of
   the top 8 organic results were directories or listicles (citiesagencies,
   DesignRush, Softlist, Semrush agency list, Content Whale, G2, Embarque); the
   eighth was a local SEO service page. Both queries showed an AI Overview.

   Truth rules for anyone editing this file:
   - Process claims are limited to what is confirmed: page writing is sold;
     drafts go to the client for review before they go live; a batch of pages
     such as 5 service pages typically takes 7 days, each quote carries its own
     date (Bhavesh, 24 Nov 2026); NO link building; no ranking guarantee;
     house terms (fixed price per job, no monthly minimum); 500+ businesses
     served, 97% on-time delivery, founded 2014.
   - No FactoryJet prices. Dollar figures are third parties' published ranges,
     each linked through SRC.
   - No client names or results here: none were confirmed for copywriting.

   Schema: WebPage + Service + FAQPage + BreadcrumbList, through <JsonLd>.
   FAQPage is built from the same FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/seo-copywriting';
const PAGE_TITLE = 'SEO Copywriting Services for Websites and Stores | FactoryJet';
const PAGE_DESC =
  'SEO copywriting for service businesses and online stores: service, location, product and category pages, blog posts and FAQs, researched from search data and reviewed by a person.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'seo copywriting services',
    'seo content writing services',
    'seo copywriting',
    'seo content writing',
    'seo copywriter',
    'seo content agency',
    'seo copywriting agency',
    'seo content services',
    'website copywriting services',
    'seo writing services',
    'seo blog writing services',
    'seo article writing services',
    'product description writing services',
    'ai seo content writing',
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
        alt: 'FactoryJet SEO copywriting services for websites and online stores',
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
  { name: 'SEO Copywriting', url: CANONICAL_URL },
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
  name: 'SEO Copywriting',
  serviceType:
    'SEO copywriting and SEO content writing: service pages, location pages, product and category copy, blog posts, FAQ sections and answer-first copy for AI search, with title tags and meta descriptions',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Service businesses, local businesses and online stores' },
  description:
    'FactoryJet writes website pages built around what buyers type into Google and ask AI assistants. Each page starts from search volume data, a read of the current top results and the questions buyers ask. A person reviews every draft for facts and fit, the client approves it before it goes live, and each batch is quoted at a fixed price in writing. Link building is not included.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-24. ── */
const SRC = {
  googleHelpful: {
    short: 'Google: helpful, people-first content',
    label: 'Google Search Central: Creating helpful, reliable, people-first content',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  },
  googleGenAi: {
    short: 'Google: generative AI content',
    label: 'Google Search Central: Google Search\'s guidance on using generative AI content on your website',
    url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
  },
  googleSpam: {
    short: 'Google: spam policies',
    label: 'Google Search Central: Spam policies for Google web search (scaled content abuse, link spam)',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
  },
  googleTitle: {
    short: 'Google: title links',
    label: 'Google Search Central: Influencing your title links in search results',
    url: 'https://developers.google.com/search/docs/appearance/title-link',
  },
  googleSnippet: {
    short: 'Google: snippets and meta descriptions',
    label: 'Google Search Central: Control your snippets in search results',
    url: 'https://developers.google.com/search/docs/appearance/snippet',
  },
  googleHireSeo: {
    short: 'Google: Do you need an SEO?',
    label: 'Google Search Central: Do you need an SEO?',
    url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  },
  embarque: {
    short: 'Embarque, Dec 2025',
    label: 'Embarque: We Found the 20 Best SEO Copywriting Agencies (vendor, last updated Dec 12, 2025)',
    url: 'https://www.embarque.io/post/best-seo-copywriting-agencies',
  },
  textbroker: {
    short: 'Textbroker prices',
    label: 'Textbroker: Prices and conditions for clients (vendor, no date shown)',
    url: 'https://www.textbroker.com/clients-prices-conditions',
  },
  urbanWriters: {
    short: 'The Urban Writers',
    label: 'The Urban Writers: SEO content writing services (vendor, no date shown)',
    url: 'https://theurbanwriters.com/pages/seo-content-writing-services',
  },
  softlist: {
    short: 'Softlist, Jan 2026',
    label: 'Softlist: Top copywriting services for ecommerce (affiliate review site, updated Jan 12, 2026)',
    url: 'https://www.softlist.io/professional-copywriting-services/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'SEO copywriting basics' },
  { key: 'pages', label: 'Pages we write' },
  { key: 'process', label: 'How the work is done' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Basics ─────────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is SEO copywriting?',
    answer:
      'SEO copywriting is writing website pages so they match what people type into Google and still persuade the person who lands on them. A good SEO page answers the search, explains the offer in plain words and makes the next step obvious. The keywords follow from that, not the other way round.',
  },
  {
    category: 'basics',
    question: 'What is the difference between SEO copywriting and SEO content writing?',
    answer:
      'People use the terms loosely. Copywriting usually means pages that sell, such as service, location and product pages. Content writing usually means pages that teach, such as blog posts and guides. Both need the same research. We write both, and most sites need a mix.',
  },
  {
    category: 'basics',
    question: 'What does an SEO copywriter do?',
    answer:
      'An SEO copywriter looks up what buyers search for, reads the pages that already rank, collects the questions buyers ask, and then writes a page that answers all of it better. The job also covers the title tag, the meta description, headings, FAQs and links to the right pages on the same site.',
  },
  {
    category: 'basics',
    question: 'Is SEO copywriting still worth it with AI search?',
    answer:
      'Yes, and the bar is higher. Google AI Overviews, ChatGPT and Perplexity quote pages that answer a question plainly and early. A page that opens with a clear answer, uses specific facts and has a real FAQ is easier for both Google and AI assistants to quote than a page padded with keywords.',
  },
  {
    category: 'basics',
    question: 'Does Google penalize AI-written content?',
    answer:
      'Not for being AI-written. Google\'s guidance says generative AI can help with research and structure, but generating many pages without adding value for users may break its spam policies on scaled content abuse. The test is whether the page helps the reader, whoever or whatever typed it.',
  },
  {
    category: 'basics',
    question: 'How many words should an SEO page be?',
    answer:
      'As many as it takes to answer the search, and no more. A location page for a plumber may need 600 words. A guide to choosing a commercial roofing system may need 2,500. We set length from what the current top results cover and what buyers ask, never from a word-count target.',
  },
  // ── Pages ──────────────────────────────────────────────────────
  {
    category: 'pages',
    question: 'What kinds of pages do you write?',
    answer:
      'Service pages, location and city pages, product and category copy for online stores, blog posts and guides, FAQ sections, and the title tags and meta descriptions for each. We also rewrite existing pages that rank on page two or three, which is often faster to pay off than a new page.',
  },
  {
    category: 'pages',
    question: 'Do you write location pages for service businesses?',
    answer:
      'Yes. A location page should say something true about that place: the areas you cover, the jobs you do there, how fast you can get there and what customers in that area ask. We do not write one page and swap the city name, because that gives a buyer nothing and gives Google no reason to rank it.',
  },
  {
    category: 'pages',
    question: 'Do you write product descriptions and category pages for online stores?',
    answer:
      'Yes, for Shopify, WooCommerce and other platforms. Category pages are usually where a store can win the most search traffic, because they match broad searches like "women\'s trail running shoes". Product copy is written from your specs and buyer questions, so it answers sizing, materials and use before the customer has to ask.',
  },
  {
    category: 'pages',
    question: 'What does AI-search-ready copy mean?',
    answer:
      'It means the page answers the main question in its first lines, in a few sentences that can be quoted on their own. It also uses plain facts, named things and a real FAQ that matches how people ask. Those are the parts AI Overviews, ChatGPT and Perplexity tend to lift into their answers.',
  },
  {
    category: 'pages',
    question: 'Do you write the title tag and meta description too?',
    answer:
      'Yes, for every page. Google says to write descriptive and concise text for title elements, and it sometimes uses the meta description as the search snippet. The title earns the click. We write both so they match the search and the page, not a list of keywords.',
  },
  {
    category: 'pages',
    question: 'Can you add FAQ sections and schema to the pages?',
    answer:
      'Yes. Each page can carry an FAQ section built from real questions buyers ask, and we can add the matching structured data so the questions are readable by search engines. We build the schema from the same list as the visible FAQ, so the two never drift apart.',
  },
  // ── Process ────────────────────────────────────────────────────
  {
    category: 'process',
    question: 'How do you research a page before writing it?',
    answer:
      'Three inputs. Search data: monthly volume for the main term and the related terms people use. The current top results: what they cover, what they skip and what kind of page Google ranks. Buyer questions: People Also Ask, AI assistant answers and the questions your sales team hears. The outline comes from those, before any writing starts.',
  },
  {
    category: 'process',
    question: 'Is every page reviewed by a person?',
    answer:
      'Yes. A person on our team checks every draft before you see it: facts, claims, whether it answers the search and whether it sounds like your business. Then it comes to you for review. Nothing goes live until you approve it.',
  },
  {
    category: 'process',
    question: 'What do you need from us to start?',
    answer:
      'Your website, what you sell, where you sell it, who buys it and what makes you different. Any notes from sales calls help, as do the questions customers ask most. For a store, product specs and your best sellers. A 30-minute call usually covers it.',
  },
  {
    category: 'process',
    question: 'How long does it take to write a batch of pages?',
    answer:
      'A batch of pages, such as 5 service pages, typically takes 7 days. Each job is quoted on its own and the quote carries its own delivery date before you approve it. Across all our projects we deliver 97% on time.',
  },
  {
    category: 'process',
    question: 'How many revisions are included?',
    answer:
      'The quote states it before you approve the job. In practice, most changes come from facts only you know, such as a service you no longer offer or a new area you cover, so we ask those questions before writing rather than after.',
  },
  {
    category: 'process',
    question: 'Can you publish the pages on our site?',
    answer:
      'Yes, if you want us to. We can load the pages into your CMS with the headings, links, FAQ and schema in place, or hand them over as documents for your team to publish. Either way, you approve the final copy first.',
  },
  // ── Working ────────────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much do SEO copywriting services cost?',
    answer:
      'Published rates vary widely. Embarque, which sells SEO copywriting, says rates usually range from $0.05 to $0.20 per word, and Textbroker\'s content marketplace starts at 2.3 cents per word. FactoryJet does not publish a price list: each batch of pages gets a fixed quote in writing.',
  },
  {
    category: 'working',
    question: 'Do you guarantee rankings?',
    answer:
      'No, and no honest provider can. Google\'s own guidance on hiring an SEO says no one can guarantee a number one ranking. What we commit to in writing is the pages, the research behind them and the delivery date.',
  },
  {
    category: 'working',
    question: 'Do you do link building?',
    answer:
      'No. We do not do link building, so it is not part of any copywriting job. We do add sensible internal links between your own pages, which helps readers and search engines find related services.',
  },
  {
    category: 'working',
    question: 'Who owns the copy?',
    answer:
      'You do, once the job is paid. The pages, the outlines and the research notes are yours to keep, edit and publish wherever you like.',
  },
  {
    category: 'working',
    question: 'Is there a minimum order or monthly contract?',
    answer:
      'No monthly minimum. You can start with one page or one batch, see how it reads and performs, and order more when it works. Ongoing monthly writing is also quoted in writing before it starts.',
  },
  {
    category: 'working',
    question: 'Do you write for agencies under their brand?',
    answer:
      'Yes. Agencies can hire us to write pages for their clients with no FactoryJet name on the work. Our white label SEO page explains how that works.',
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

/* ── Pages we write. ── */
const PAGE_TYPES: ReadonlyArray<{ t: string; b: string; for: string; href?: string; link?: string }> = [
  {
    t: 'Service pages',
    b: 'One page per service you sell, written for the exact words buyers use. What the service is, who it suits, what it involves, what affects the cost and what happens after they get in touch.',
    for: 'Service businesses',
  },
  {
    t: 'Location and city pages',
    b: 'Pages for the cities and areas you cover, each with facts true to that place: the jobs you do there, the areas served and the questions local customers ask. No city-name swaps.',
    for: 'Local and multi-location businesses',
    href: '/services/local-seo',
    link: 'Local SEO',
  },
  {
    t: 'Category pages',
    b: 'The copy above and below the product grid, written for the broad searches a category can win. Usually the biggest search opportunity in an online store.',
    for: 'Online stores',
    href: '/services/ecommerce-seo',
    link: 'Ecommerce SEO',
  },
  {
    t: 'Product descriptions',
    b: 'Written from your specs and the questions buyers ask: sizing, materials, fit, use and care. Unique per product, so your pages do not repeat the manufacturer copy every other store uses.',
    for: 'Online stores',
    href: '/services/shopify-seo',
    link: 'Shopify SEO',
  },
  {
    t: 'Blog posts and guides',
    b: 'Articles that answer the questions buyers ask before they are ready to buy, each linking to the service or category page it supports.',
    for: 'Both',
  },
  {
    t: 'Answer-first copy and FAQs for AI search',
    b: 'A short, quotable answer at the top of each page and an FAQ built from real buyer questions. The parts Google AI Overviews, ChatGPT and Perplexity tend to quote.',
    for: 'Both',
    href: '/services/ai-seo',
    link: 'AI SEO',
  },
];

/* ── How a page is researched and written. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Search data',
    b: 'Monthly US search volume for the main term and the related terms buyers use, pulled from keyword data. This sets what the page is for and which words it must use.',
  },
  {
    n: '02',
    t: 'Read the current top results',
    b: 'What kind of page Google ranks for the term, what those pages cover, what they skip, and whether an AI Overview appears. The gap is where the new page wins.',
  },
  {
    n: '03',
    t: 'Collect buyer questions',
    b: 'People Also Ask questions, what AI assistants say when asked about the topic, and the questions your sales team hears. These become the headings and the FAQ.',
  },
  {
    n: '04',
    t: 'Outline, then draft',
    b: 'An outline with the answer up top, the headings, the FAQ and the internal links. Then the draft, title tag and meta description, written in your voice.',
  },
  {
    n: '05',
    t: 'Human review',
    b: 'A person on our team checks every fact, claim and number, and whether the page answers the search better than what ranks today.',
  },
  {
    n: '06',
    t: 'Your review, then live',
    b: 'You read and approve the page. We publish it in your CMS with the FAQ and schema in place, or hand it over for your team to publish.',
  },
];

/* ── What a finished page includes. ── */
const DELIVERABLE: ReadonlyArray<string> = [
  'A title tag and meta description',
  'A short answer in the first lines',
  'Headings built from buyer questions',
  'Body copy in your voice',
  'An FAQ section from real questions',
  'Matching FAQ schema, if we publish',
  'Internal links to related pages',
  'A note of the terms and questions it targets',
];

/* ── Included and not included. ── */
const INCLUDED: ReadonlyArray<string> = [
  'Search volume and SERP research per page',
  'Buyer questions from People Also Ask and AI answers',
  'Service, location, category and product copy',
  'Blog posts and guides',
  'Title tags and meta descriptions',
  'FAQ sections and matching schema',
  'Internal links between your own pages',
  'A person checks every draft before you see it',
];
const NOT_INCLUDED: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Link building', b: 'We do not do link building. No link packages, guest posts for links or outreach.' },
  { t: 'Ranking guarantees', b: 'Nobody can promise a position on Google. Google says so itself.' },
  { t: 'Pages in bulk with nothing new', b: 'We do not mass-produce near-identical pages. Google calls that scaled content abuse.' },
  { t: 'Anything live without your approval', b: 'Every page comes to you for review before it is published.' },
  { t: 'A monthly minimum', b: 'Start with one page or one batch. Order more when it works.' },
];

/* ── What Google says, in four rules. ── */
const GOOGLE_RULES: ReadonlyArray<{ t: string; b: string; source: SrcKey }> = [
  {
    t: 'Write for people first',
    b: 'Google describes people-first content as created primarily for people, not to manipulate rankings. It also asks publishers to be clear about who made a page, how and why.',
    source: 'googleHelpful',
  },
  {
    t: 'AI tools are allowed, empty pages are not',
    b: 'Google says generative AI can help with research and structure. Generating many pages without adding value for users may break its spam policies.',
    source: 'googleGenAi',
  },
  {
    t: 'Scale is not a strategy',
    b: 'Google defines scaled content abuse as many pages generated mainly to manipulate rankings. Fifty city pages with only the name changed can fit that description.',
    source: 'googleSpam',
  },
  {
    t: 'Titles and descriptions still matter',
    b: 'Google asks for descriptive, concise title elements and sometimes uses the meta description for the snippet. Those two lines decide whether anyone clicks.',
    source: 'googleTitle',
  },
];

/* ── Service businesses vs stores. ── */
const AUDIENCES: ReadonlyArray<{ t: string; lead: string; points: ReadonlyArray<string> }> = [
  {
    t: 'For service businesses',
    lead: 'Buyers search for a service plus a place, then call or fill in a form. The page has to prove you do the job, in their area, and make contact easy.',
    points: [
      'One page per service, not one page for everything',
      'Location pages with facts true to each area',
      'What affects the cost, answered honestly',
      'Clear next step: call, form or booking',
    ],
  },
  {
    t: 'For online stores',
    lead: 'Buyers search broad terms on category pages and exact terms on product pages. The copy has to help them choose, then answer the questions that stop a sale.',
    points: [
      'Category copy for the searches a category can win',
      'Product copy from specs, not the manufacturer blurb',
      'Sizing, materials, shipping and returns answered',
      'Buying guides that link to the right categories',
    ],
  },
];

/* ── Market cost ranges. Every row is a third party's published figure. ── */
const COSTS: ReadonlyArray<{ item: string; range: string; source: SrcKey }> = [
  { item: 'SEO copywriting agencies, per word', range: '$0.05 to $0.20 per word, "usually"', source: 'embarque' },
  { item: 'Content marketplace, per word', range: 'From 2.3 cents per word', source: 'textbroker' },
  { item: 'SEO-trained freelance writer via a writing service', range: '$7.03 to $7.25 per 100 words', source: 'urbanWriters' },
  { item: 'Human-only content from a managed platform', range: '$0.16 per word (Verblio, as listed)', source: 'softlist' },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Content marketplace' },
  { label: 'Freelance writer' },
  { label: 'In-house writer' },
];
const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Search research per page',
    values: ['Yes: volume, top results and buyer questions', 'Usually you supply the keyword', 'Depends on the person', 'Depends on the hire and tools'],
  },
  {
    feature: 'Knows the rest of SEO',
    values: ['Yes: technical, local, ecommerce and AI search', 'Writing only', 'Sometimes', 'Sometimes'],
  },
  {
    feature: 'Publishes with FAQ and schema',
    values: ['Yes, if you want it', 'No, you get a document', 'Sometimes', 'Yes, with developer help'],
  },
  {
    feature: 'How you pay',
    values: ['Fixed quote per batch', 'Per word', 'Per word, page or hour', 'Salary and tools'],
  },
  {
    feature: 'Fits when',
    values: [
      'Pages need to rank and convert, and you want one team to own it',
      'You need volume and will edit it yourself',
      'You have a steady, narrow writing need',
      'Writing is a large, permanent part of your marketing',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/ai-seo', t: 'AI search and SEO', b: 'Our main SEO service, for Google and AI assistants together.' },
  { href: '/services/seo-consulting', t: 'SEO consulting', b: 'Strategy and a page plan for teams that write in-house.' },
  { href: '/services/seo-audit', t: 'SEO audit', b: 'Find what is holding the site back before writing new pages.' },
  { href: '/services/local-seo', t: 'Local SEO', b: 'Map pack, Business Profile and near-me searches.' },
  { href: '/services/ecommerce-seo', t: 'Ecommerce SEO', b: 'Category pages, product schema and filters for online stores.' },
  { href: '/services/technical-seo', t: 'Technical SEO', b: 'Crawling, indexing, speed and site moves, fixed in code.' },
  { href: '/services/white-label-seo', t: 'White label SEO', b: 'Page writing and SEO work for agencies, under their brand.' },
  { href: '/ai-visibility-checker', t: 'AI visibility checker', b: 'Free check of whether ChatGPT and Perplexity name a business.' },
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

export default function SeoCopywritingPage() {
  return (
    <>
      <JsonLd id="seo-copywriting-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="seo-copywriting-faq-schema" data={faqSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="Get pages written" title="SEO copywriting" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SEO COPYWRITING &middot; SERVICE BUSINESSES AND STORES
                  </span>
                </div>
                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  SEO copywriting services for pages that rank and sell.
                </h1>
                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    SEO copywriting is writing website pages around what buyers type into Google and ask AI assistants,
                    so the page gets found and the reader takes the next step. FactoryJet writes service pages, location
                    pages, product and category copy, blog posts and FAQs for service businesses and online stores.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    Every page starts from search data, a read of what ranks today and the questions buyers ask. A
                    person checks every draft, you approve it before it goes live, and a batch such as 5 service pages
                    typically takes 7 days.
                  </p>
                </div>
                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_seo_copywriting_hero"
                    service="SEO Copywriting"
                    submitLabel="Get pages written"
                    trustText="Fixed quote per batch, in writing. Founder replies within 24 hours."
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
                  <span>No monthly minimum</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What one page brief holds
                  </figcaption>
                  <dl className="mt-4 grid gap-3">
                    {[
                      { k: 'Main search term', v: 'The words buyers type, with monthly US volume' },
                      { k: 'Related terms', v: 'The variations the page must also answer' },
                      { k: 'What ranks today', v: 'Page types in the top results, and what they miss' },
                      { k: 'Buyer questions', v: 'From People Also Ask, AI answers and your sales calls' },
                      { k: 'Short answer', v: 'The 2 to 3 sentences that open the page' },
                      { k: 'Links', v: 'Which of your pages it links to, and which link to it' },
                    ].map((row) => (
                      <div key={row.k} className="border-t border-fj-neutral-200 pt-3 first:border-t-0 first:pt-0">
                        <dt className="font-fj-display text-[15px] font-bold text-fj-ink">{row.k}</dt>
                        <dd className="mt-0.5 font-fj-body text-[14px] leading-snug text-fj-neutral-600">{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 rounded-xl bg-fj-cream px-4 py-3 font-fj-body text-[13px] leading-snug text-fj-ink">
                    The brief is done before any writing starts. You can see it on request.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE WRITE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">SEO content writing services</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Six kinds of pages we write.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Pages that sell and pages that teach need the same research. Most sites need a mix: service or category
              pages to capture buyers who are ready, and guides to answer the questions that come first.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {PAGE_TYPES.map((p, i) => (
                <li
                  key={p.t}
                  className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <p className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">{p.for}</p>
                  <h3 className="mt-2 font-fj-display text-lg font-bold text-fj-ink">{p.t}</h3>
                  <p className="mt-1.5 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                  {p.href && p.link ? (
                    <Link
                      href={p.href}
                      className="mt-3 inline-flex min-h-11 items-center font-fj-body text-sm font-semibold text-[#B23E13] underline underline-offset-4"
                    >
                      {p.link}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. HOW WE RESEARCH AND WRITE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How we research a page</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Research first. Then writing. Then two reviews.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Most weak SEO pages fail before the first sentence: they target a term nobody searches, or a term
                  where Google ranks a different kind of page. Six steps, the same for every page, stop that.
                </p>
                <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-white p-5">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Example: this page, {CHECKED_ON}
                  </p>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                    &ldquo;SEO copywriting services&rdquo; gets 390 US searches a month. In the top 8 results, 7 were
                    directories or &ldquo;best agencies&rdquo; lists, and Google showed an AI Overview.
                  </p>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    So buyers are comparing providers. This page answers what a comparison needs: what is included,
                    what is not, how the work is checked and what the market charges.
                  </p>
                </div>
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

        {/* 4. SERVICE BUSINESSES VS STORES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Who it is for</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Service businesses and stores need different pages.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {AUDIENCES.map((a, i) => (
                <div
                  key={a.t}
                  className={`rounded-2xl border border-fj-neutral-200 p-6 ${i === 0 ? 'bg-fj-cream lg:col-span-7' : 'bg-white lg:col-span-5'}`}
                >
                  <h3 className="font-fj-display text-xl font-bold text-fj-ink">{a.t}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{a.lead}</p>
                  <ul className="mt-4 grid gap-2.5">
                    {a.points.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT A FINISHED PAGE INCLUDES + SCOPE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What you get</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Eight parts of every finished page.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A page is more than its body copy. The title tag earns the click, the opening answer earns the AI
                  citation, and the FAQ catches the questions the headings did not.
                </p>
              </div>
              <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                {DELIVERABLE.map((x, i) => (
                  <li key={x} className="flex items-start gap-3 rounded-2xl border border-fj-neutral-200 bg-white p-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-fj-cream font-fj-mono text-xs font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-fj-body text-[15px] leading-snug text-fj-ink">{x}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Scope</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              What is and is not included.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Included</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {INCLUDED.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Each batch is quoted on its own at a fixed price, with its own delivery date.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 lg:col-span-5">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Not included</h3>
                <ul className="mt-4 grid gap-3">
                  {NOT_INCLUDED.map((x) => (
                    <li key={x.t}>
                      <p className="font-fj-display text-base font-bold text-fj-ink">{x.t}</p>
                      <p className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.b}</p>
                    </li>
                  ))}
                </ul>
                <SourceLinks ids={['googleHireSeo', 'googleSpam']} />
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Know which pages you need? Send us the list."
          sub="Tell us your site, what you sell and where. We reply with questions, then a fixed quote per batch with a delivery date, before any writing starts."
          label="Get pages written"
        />

        {/* 6. GOOGLE RULES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">What Google says</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Four Google rules every SEO page has to pass.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These come from Google&rsquo;s own Search Central documentation, read on {CHECKED_ON}. They are why we
              research before we write and why a person checks every page.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {GOOGLE_RULES.map((r, i) => (
                <li
                  key={r.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <h3 className="font-fj-display text-base font-bold text-fj-ink">{r.t}</h3>
                  <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{r.b}</p>
                  <SourceLinks ids={r.source === 'googleTitle' ? ['googleTitle', 'googleSnippet'] : [r.source]} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. COST */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Market cost ranges</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What SEO copywriting costs, from published rates.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These are other firms&rsquo; published figures, each linked. Per-word rates mostly buy the writing
                  alone. Research, publishing and schema are often extra or left to you.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  FactoryJet does not publish a price list. We quote each batch of pages at a fixed price in writing,
                  research and review included.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white" tabIndex={0} role="region" aria-label="Market cost ranges for SEO copywriting">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Item</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Published figure</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COSTS.map((c) => (
                        <tr key={c.item} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">
                            {c.item}
                          </th>
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
                  Embarque, Textbroker and The Urban Writers sell writing services; Softlist is an affiliate review
                  site. None of these pages cites a survey. At $0.05 to $0.20 per word, a 1,000-word service page comes
                  to $50 to $200 for the writing alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMPARISON */}
        <ComparisonTable
          eyebrow="Ways to get SEO pages written"
          headline="SEO team, content marketplace, freelancer or hire."
          lead="Each fits a different business. A marketplace is a fair choice when you need volume and will edit it yourself. An SEO team fits when the pages have to rank and bring in buyers."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="General patterns, not a review of any named provider."
          scrollRegionLabel="Comparison of ways to get SEO pages written"
        />

        {/* 9. RELATED */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">Related SEO services.</h2>
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

        {/* 10. SOURCES */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every Google rule and every price on this page was read from the pages listed here. Search volumes
                  are US monthly averages from Google Ads keyword data. Prices move, so check the linked page before
                  you act on one.
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

        {/* 11. FAQ */}
        <FAQ
          eyebrow="SEO copywriting FAQ"
          headline="SEO copywriting questions, answered."
          lead="What business owners and marketing leads ask before they hire someone to write their pages. Answers about our process describe how FactoryJet works today."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 12. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="SEO copywriting"
          headline="Pages built on search data, checked by a person."
          sub="Send us the pages you need, or the ones that are not working. We research each one, write it, check it, and send it to you for approval before it goes live."
          primaryCta={{ label: 'Get pages written', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Fixed quote per batch. No monthly minimum. Nothing goes live without your approval."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
