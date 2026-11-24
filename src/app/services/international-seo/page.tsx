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
   /services/international-seo, built 2026-11-24.

   Why this page exists: the 24 Nov 2026 Search Console gap audit found
   impressions with no page behind them: "international seo consultant"
   (pos 89.3), "international seo consulting service" (77.6), "international
   ai seo services" (26.4), about 384 impressions in 90 days. DataForSEO US,
   24 Nov 2026: hreflang 720/mo, international seo agency 590, global seo
   agency 590, international seo 320, hreflang tags 320, international seo
   services 260, international seo strategy 210, international seo consultant
   170 (UK 210), international seo consulting 170, international seo company
   110, multilingual seo 110, multilingual seo services 110, global seo
   services 90. Bhavesh confirmed on 24 Nov 2026 that FactoryJet sells
   international SEO.

   SERP read on 24 Nov 2026 (DataForSEO, US): all top 10 results for
   "international seo services" were agency lists or directories (Semrush
   Agency Partners, Embarque, Click Intelligence, Ballistic Media, omnius,
   SuperbCompanies and others), with an AI Overview. "international seo
   consultant" mixed lists with two consultant pages; none of the pages read
   gave prices or a structure comparison. People Also Ask was generic.

   First-hand facts about factoryjet.com used on this page, each checked on
   the live site on 24 Nov 2026 with curl:
   - US version at the root, /uk, /au and /uae folders on the one .com.
   - Reciprocal hreflang on the home cluster (en-US, en-GB, en-AU, en-AE,
     x-default to the US root) and on service clusters such as AI SEO.
   - <html lang> and og:locale differ per market (en-US / en-GB / en-AU).
   - Separate XML sitemaps per market: sitemap-us 192 URLs, sitemap-uk 68,
     sitemap-au 46 on that day.
   - UK and AU copy uses British spelling ("optimis" 103 times on /uk/ai-seo,
     0 on /services/ai-seo).
   - functions/_middleware.js redirects a few human visitors by country, never
     known crawlers, and fails open when the country is unknown.
   - src/data/hreflangMap.ts notes the en-IN entry removed 2026-10-31 because it
     pointed at the US homepage (one URL claimed for two regions).

   Truth rules for anyone editing this file:
   - No team location. No FactoryJet prices (market figures only, sourced).
   - NO link building. No ranking guarantee. House terms only.
   - Translation into non-English languages is not claimed as a FactoryJet
     service: a native speaker writes or checks that copy.
   - No client names or results: none were confirmed for international SEO.

   Schema: WebPage + Service + FAQPage + BreadcrumbList, through <JsonLd>.
   FAQPage is built from the same FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/international-seo';
const PAGE_TITLE = 'International SEO Services & Consultant | FactoryJet';
const PAGE_DESC =
  'International SEO for businesses selling in more than one country: site structure, hreflang, market-by-market keyword research, localised pages and AI search in each market. Audit first.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'international seo services',
    'international seo consultant',
    'international seo consulting',
    'international seo agency',
    'international seo company',
    'international seo',
    'international seo strategy',
    'global seo services',
    'global seo agency',
    'multilingual seo services',
    'multilingual seo',
    'hreflang',
    'hreflang tags',
    'international ai seo',
    'seo for multiple countries',
    'ecommerce international seo',
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
        alt: 'FactoryJet international SEO services for multi-country websites and stores',
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
  { name: 'International SEO', url: CANONICAL_URL },
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
  name: 'International SEO',
  serviceType:
    'International and multilingual SEO: market selection, ccTLD, subfolder or subdomain structure, hreflang setup and repair, market-by-market keyword research, localised page briefs, ecommerce currency and shipping signals, and AI search visibility per market',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Online stores and service businesses selling in more than one country' },
  description:
    'FactoryJet sets up and repairs websites that serve more than one country or language. Work starts with an audit of where traffic and buyers already come from, then covers URL structure, hreflang, per-market keyword research, localised page briefs, ecommerce signals and AI search checks in each market. Each phase is quoted at a fixed price in writing. Link building is not included.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-24. ── */
const SRC = {
  googleMultiRegional: {
    short: 'Google: multi-regional sites',
    label: 'Google Search Central: Managing multi-regional and multilingual sites (last updated 2025-12-10)',
    url: 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites',
  },
  googleHreflang: {
    short: 'Google: localized versions',
    label: 'Google Search Central: Tell Google about localized versions of your page (last updated 2026-09-21)',
    url: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
  },
  googleLocaleAdaptive: {
    short: 'Google: locale-adaptive pages',
    label: 'Google Search Central: How Google crawls locale-adaptive pages',
    url: 'https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages',
  },
  googleHireSeo: {
    short: 'Google: Do you need an SEO?',
    label: 'Google Search Central: Do you need an SEO?',
    url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  },
  ahrefsPricing: {
    short: 'Ahrefs, Aug 2024',
    label: 'Ahrefs: SEO Pricing, How Much Does SEO Cost? (439 people polled, updated Aug 15, 2024)',
    url: 'https://ahrefs.com/blog/seo-pricing/',
  },
  serankingPricing: {
    short: 'SE Ranking survey',
    label: 'SE Ranking: SEO pricing survey of agencies (260 responses)',
    url: 'https://seranking.com/blog/seo-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'International SEO basics' },
  { key: 'structure', label: 'Domains and hreflang' },
  { key: 'markets', label: 'Markets, language and stores' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Basics ─────────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is international SEO?',
    answer:
      'International SEO is setting up a website so search engines show the right version of each page to people in each country or language. It covers how the site is structured (separate domains, subdomains or folders), hreflang tags that link the versions together, keyword research done per market, and pages written for local buyers rather than copied from the home market.',
  },
  {
    category: 'basics',
    question: 'What is the difference between multilingual and multi-regional SEO?',
    answer:
      'Multilingual means the site has more than one language, such as English and French. Multi-regional means it targets more than one country, such as the US and the UK, even in the same language. Google uses these exact two terms. Many sites are both: a Canadian store with English and French pages that also sells into the US.',
  },
  {
    category: 'basics',
    question: 'How do I know if my business needs international SEO?',
    answer:
      'Look at three places. Search Console: are you getting impressions from countries you do not have pages for? Analytics: are orders or leads already arriving from abroad? Sales: do buyers ask about shipping, currency or support in another country? If two of the three say yes, the demand is there and the site is not built for it yet.',
  },
  {
    category: 'basics',
    question: 'Can I rank in other countries with one English website?',
    answer:
      'Sometimes, for searches where nobody has a better local page. But a single US page usually loses to a page written for the UK or Australian buyer, with local spelling, prices in their currency and delivery terms they can use. If a market matters to revenue, it deserves its own version.',
  },
  {
    category: 'basics',
    question: 'What does an international SEO consultant do?',
    answer:
      'An international SEO consultant decides which markets to target first, picks the URL structure, specifies hreflang, plans keyword research per country and checks that the right page ranks in each place. A good one also tells you which markets are not worth a separate version yet, which saves translation and maintenance cost.',
  },
  // ── Structure ──────────────────────────────────────────────────
  {
    category: 'structure',
    question: 'Should I use a ccTLD, a subfolder or a subdomain for international SEO?',
    answer:
      'For most businesses, subfolders on one domain (example.com/uk/) are the simplest to run and keep all your authority in one place. That is the setup factoryjet.com uses. Country domains (example.co.uk) send the clearest country signal but each one starts with no history and needs its own upkeep. Subdomains sit in between. Google lists the pros and cons of each and does not recommend URL parameters such as ?loc=uk.',
  },
  {
    category: 'structure',
    question: 'What is hreflang?',
    answer:
      'Hreflang is an HTML attribute that tells Google which pages are versions of each other and which language and country each one is for. It goes in the page head, an HTTP header or the XML sitemap. With it, a UK searcher sees your UK page instead of your US page.',
  },
  {
    category: 'structure',
    question: 'What are the most common hreflang mistakes?',
    answer:
      'Missing return links (page A names page B but B does not name A, so Google may ignore both), wrong codes such as en-UK instead of en-GB, a region code with no language, hreflang pointing at redirected, noindexed or non-canonical URLs, two regions pointing at one URL, and no x-default.',
  },
  {
    category: 'structure',
    question: 'Is it en-GB or en-UK in hreflang?',
    answer:
      'en-GB. Hreflang uses ISO 3166-1 country codes, and the code for the United Kingdom is GB. Google says codes outside the ISO lists are not supported, so en-UK is quietly ignored.',
  },
  {
    category: 'structure',
    question: 'What is x-default in hreflang?',
    answer:
      'x-default names the page to show when no other version matches the searcher, usually a country selector or your main market. On factoryjet.com, x-default points at the US root, so a searcher in a country with no dedicated version lands there.',
  },
  {
    category: 'structure',
    question: 'Should I redirect visitors to their country version automatically?',
    answer:
      'Google advises against automatic redirects based on guessed language or IP address, because they can stop people and crawlers from seeing every version. Show a visible country switcher instead. If you redirect anyway, never redirect search or AI crawlers, do nothing when the country is unknown, and keep every version reachable by a link. That is how the few redirects on our own site work.',
  },
  {
    category: 'structure',
    question: 'Does the HTML lang attribute help Google pick the language?',
    answer:
      'No. Google says it works out the language from the visible content and does not use code-level language information such as the lang attribute. Set lang correctly anyway for screen readers and browsers, but do not rely on it for SEO. Keep one language per page.',
  },
  // ── Markets ────────────────────────────────────────────────────
  {
    category: 'markets',
    question: 'What is the difference between translation and localisation?',
    answer:
      'Translation turns the words into another language. Localisation rewrites the page for the buyer in that market: their spelling, their search terms, their currency, delivery times, returns rules, examples and proof. A UK and a US page can share a language and still need localisation.',
  },
  {
    category: 'markets',
    question: 'Can I use machine translation or AI for international pages?',
    answer:
      'As a first draft, yes. As the final page, only after a native speaker has checked it. Machine output misses the terms local buyers search for and gets product details wrong, and Google advises against translating only boilerplate while leaving the main content in one language.',
  },
  {
    category: 'markets',
    question: 'Why can I not just translate my keyword list?',
    answer:
      'Because people in each market search differently. The same service can have a different name, a different spelling or a different volume. On 24 Nov 2026, "international seo consultant" got about 170 searches a month in the US and about 210 in the UK. Each market needs its own keyword research.',
  },
  {
    category: 'markets',
    question: 'How does international SEO work for an online store?',
    answer:
      'Each market version needs prices in local currency, delivery and returns terms for that country, product structured data whose price and currency match the page, and, if you run Google Shopping, a product feed per country. Category pages are written for that market\'s search terms. Most of the work sits in the platform settings, not just in the copy.',
  },
  {
    category: 'markets',
    question: 'Do ChatGPT and Google AI Overviews show different answers in different countries?',
    answer:
      'Often, yes. The same buyer question can return different businesses and sources in the US, UK and Australia. We run the same buyer questions in each target market and check which pages get named, then fix the pages that should be cited and are not.',
  },
  {
    category: 'markets',
    question: 'Which markets should I start with?',
    answer:
      'Start where you can already serve buyers and where search demand exists. Measure demand per market before writing anything, then launch one market properly before adding the next. A half-built version in four countries usually does worse than one finished version.',
  },
  // ── Working ────────────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much do international SEO services cost?',
    answer:
      'We found no published survey of international SEO prices specifically. For SEO in general, Ahrefs reports most businesses spend between $500 and $5,000 a month, with agencies averaging $3,209. International work costs more as markets and languages are added. FactoryJet quotes each phase at a fixed price in writing after an audit.',
  },
  {
    category: 'working',
    question: 'How long does international SEO take to show results?',
    answer:
      'Fixes to hreflang and structure show up in Search Console as Google recrawls the affected pages. A brand-new market version has to earn rankings from scratch, which usually takes months, and no honest provider can promise a position. Google says no one can guarantee a number one ranking.',
  },
  {
    category: 'working',
    question: 'Do you do international link building?',
    answer:
      'No. We do not do link building in any market. Our work covers structure, hreflang, research, pages, ecommerce signals and AI search checks.',
  },
  {
    category: 'working',
    question: 'Do you translate pages into other languages?',
    answer:
      'For non-English markets, a native speaker writes or checks the final copy, either your team or a translation provider you choose. We supply the keyword research, the page brief and the technical setup, and we check the finished page for search.',
  },
  {
    category: 'working',
    question: 'Can you fix an international setup that is already live?',
    answer:
      'Yes, and that is the most common starting point. We crawl every version, test every hreflang pair for return links and valid codes, compare which page ranks in each country with which one should, and give you a fix list in priority order before any work is quoted.',
  },
  {
    category: 'working',
    question: 'Which platforms do you work with?',
    answer:
      'Next.js and other custom builds, Shopify, WooCommerce and WordPress. Each handles markets differently: Shopify Markets can create country folders and hreflang for you, while WordPress and custom builds need hreflang set up by hand or by plugin. We check what your platform outputs before recommending a structure.',
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

/* ── Signals that a business needs international SEO. ── */
const SIGNALS: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Search Console shows other countries', b: 'Impressions or clicks from countries you have no page for. Demand is arriving before the site is ready for it.' },
  { t: 'Orders or leads already come from abroad', b: 'Buyers are finding you anyway. A page built for them converts more of the ones who arrive.' },
  { t: 'The wrong country page ranks', b: 'Your US page shows in UK results, or your UK page shows in Australia. Classic sign of missing or broken hreflang.' },
  { t: 'You are launching a new language', b: 'A French or Spanish version needs separate URLs and research from day one, not a translation plugin added later.' },
  { t: 'You ship, price or support in other currencies', b: 'The offer is international already. Search signals should say so.' },
  { t: 'You are moving to Shopify Markets or a new platform', b: 'A replatform is the cheapest moment to choose the right structure. Changing it later means redirecting every URL.' },
];

/* ── Structure options, in Google's own pros and cons. ── */
const STRUCTURES: ReadonlyArray<{ t: string; ex: string; pros: string; cons: string; fit: string }> = [
  {
    t: 'Subfolders on one domain',
    ex: 'example.com/uk/',
    pros: 'Easy to set up, low maintenance on one host, every market shares the domain\'s history.',
    cons: 'The country is less obvious from the URL alone. Separating sites later is harder.',
    fit: 'Most businesses. This is what factoryjet.com uses.',
  },
  {
    t: 'Country domains (ccTLDs)',
    ex: 'example.co.uk',
    pros: 'The clearest country signal to people and to Google. Server location does not matter.',
    cons: 'Costs more, needs more infrastructure, can target only one country, and each domain starts with no history.',
    fit: 'Large brands with a local team and budget in each country.',
  },
  {
    t: 'Subdomains',
    ex: 'uk.example.com',
    pros: 'Easy to set up and allows different servers per market.',
    cons: 'People may not know if "uk" means a country or a language. Often treated as a separate site.',
    fit: 'When a market must run on a different platform or server.',
  },
  {
    t: 'URL parameters',
    ex: 'example.com?loc=uk',
    pros: 'None worth having.',
    cons: 'Google says it does not recommend them. Hard to segment and easy to break.',
    fit: 'Never. Move away from it.',
  },
];

/* ── Hreflang breakages. ── */
const HREFLANG_ERRORS: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Missing return links', b: 'Page A lists page B, but B does not list A. Google says the pair may then be ignored. This is the mistake it lists first.' },
  { t: 'Invented codes', b: 'en-UK instead of en-GB, or a code like es-419, which Google says it does not support. Language codes come from ISO 639-1, countries from ISO 3166-1.' },
  { t: 'Country with no language', b: 'hreflang="gb" is invalid. A region code alone is not allowed; it needs the language first.' },
  { t: 'Pointing at the wrong URL', b: 'Alternates that redirect, return 404, carry noindex or are not the canonical version. Each one weakens the set.' },
  { t: 'Two regions, one URL', b: 'We found this on our own site: an en-IN entry pointed at the US homepage, so one URL claimed two countries. We removed it.' },
  { t: 'Canonical across markets', b: 'A UK page whose canonical tag points at the US page tells Google to drop the UK page, whatever hreflang says.' },
  { t: 'No x-default', b: 'Without a fallback, searchers in unlisted countries get whatever Google guesses.' },
];

/* ── Translation vs localisation. ── */
const LOCALISE: ReadonlyArray<{ k: string; translate: string; localise: string }> = [
  { k: 'Words', translate: 'Same words in another language', localise: 'The words local buyers type into search' },
  { k: 'Spelling', translate: 'Unchanged in the same language', localise: 'optimisation in the UK and Australia, optimization in the US' },
  { k: 'Prices', translate: 'Converted, or left in dollars', localise: 'Local currency, written the local way' },
  { k: 'Delivery and returns', translate: 'Home-market terms', localise: 'What that country\'s buyer actually gets' },
  { k: 'Proof', translate: 'Home-market examples', localise: 'Examples and reviews that make sense locally' },
  { k: 'FAQ', translate: 'Same questions, translated', localise: 'The questions that market asks' },
];

/* ── Process. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  { n: '01', t: 'Audit what exists', b: 'Every country and language version crawled. Every hreflang pair tested for return links, valid codes and live, canonical targets. Search Console split by country to see which page ranks where.' },
  { n: '02', t: 'Measure demand per market', b: 'Search volume for your main terms in each target country, pulled separately. Some markets turn out bigger than expected; some are not worth a version yet.' },
  { n: '03', t: 'Choose the structure', b: 'Subfolders, country domains or subdomains, decided on your platform, team and budget. If a move is needed, a URL-by-URL redirect map comes with it.' },
  { n: '04', t: 'Set up the signals', b: 'Hreflang with return links and x-default, per-market XML sitemaps, canonical tags that stay inside each market, a visible country switcher.' },
  { n: '05', t: 'Brief and build market pages', b: 'A brief per page with the local search terms, questions and offer details. English markets we write; for other languages a native speaker writes or checks the copy.' },
  { n: '06', t: 'Check AI search and rankings per market', b: 'The same buyer questions run in each market through Google and AI assistants. We report which page ranks and gets named in each country, and fix the gaps.' },
];

const INCLUDED: ReadonlyArray<string> = [
  'Audit of every country and language version',
  'Hreflang setup, testing and repair',
  'ccTLD, subfolder or subdomain decision',
  'Redirect maps for structure changes',
  'Keyword research run per market',
  'Page briefs and English-market copy',
  'Currency, shipping and product schema checks',
  'AI search checks in each market',
];
const NOT_INCLUDED: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Link building', b: 'We do not do link building in any market. No link packages, guest posts for links or outreach.' },
  { t: 'Ranking guarantees', b: 'Nobody can promise a position on Google in any country. Google says so itself.' },
  { t: 'Unchecked machine translation', b: 'Non-English pages are written or checked by a native speaker, yours or a provider you choose.' },
  { t: 'A monthly minimum', b: 'Start with the audit. Each later phase is scoped, priced and signed on its own.' },
];

/* ── Market cost figures. General SEO; no international-specific survey found. ── */
const COSTS: ReadonlyArray<{ item: string; range: string; source: SrcKey }> = [
  { item: 'SEO, typical monthly spend', range: '$250 to $10,000 a month; 63% of businesses spend $500 to $5,000', source: 'ahrefsPricing' },
  { item: 'SEO agencies, average monthly retainer', range: '$3,209 a month (consultancies $3,250)', source: 'ahrefsPricing' },
  { item: 'SEO agencies, share charging under $1,000 a month', range: '64% of agencies surveyed', source: 'serankingPricing' },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Translation agency' },
  { label: 'General SEO agency' },
  { label: 'In-house team' },
];
const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Hreflang and structure in code',
    values: ['Yes, set up and tested', 'Rarely', 'Sometimes, often by plugin', 'With developer help'],
  },
  {
    feature: 'Keyword research per market',
    values: ['Yes, each country pulled separately', 'Translates your list', 'Sometimes', 'Depends on tools and time'],
  },
  {
    feature: 'Native-language copy',
    values: ['English markets in-house; other languages with a native speaker', 'Yes, the core service', 'Usually outsourced', 'If you hire for it'],
  },
  {
    feature: 'Ecommerce signals per country',
    values: ['Yes: currency, shipping, product schema', 'No', 'Sometimes', 'Sometimes'],
  },
  {
    feature: 'How you pay',
    values: ['Fixed quote per phase', 'Per word', 'Monthly retainer', 'Salaries and tools'],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/technical-seo', t: 'Technical SEO', b: 'Crawling, indexing, speed, migrations and hreflang, fixed in code.' },
  { href: '/services/ai-seo', t: 'AI search and SEO', b: 'Our main SEO service, for Google and AI assistants together.' },
  { href: '/services/seo-audit', t: 'SEO audit', b: 'A one-time diagnosis with a fix list in priority order.' },
  { href: '/services/ecommerce-seo', t: 'Ecommerce SEO', b: 'Category pages, product schema and filters for online stores.' },
  { href: '/services/shopify-seo', t: 'Shopify SEO', b: 'Including Shopify Markets setups for more than one country.' },
  { href: '/services/seo-consulting', t: 'SEO consulting', b: 'Strategy and a page plan for teams that do the work in-house.' },
  { href: '/services/seo-copywriting', t: 'SEO copywriting', b: 'Pages written from search data and checked by a person.' },
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

export default function InternationalSeoPage() {
  return (
    <>
      <JsonLd id="international-seo-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="international-seo-faq-schema" data={faqSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="Get an international audit" title="International SEO" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    INTERNATIONAL SEO &middot; MULTI-COUNTRY SITES AND STORES
                  </span>
                </div>
                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  International SEO services for sites that sell in more than one country.
                </h1>
                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    International SEO makes sure a buyer in London sees your UK page, a buyer in Sydney sees your
                    Australian page, and Google knows they belong together. FactoryJet chooses the site structure, sets up
                    and repairs hreflang, researches keywords in each market and briefs pages written for local buyers.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    We run our own site this way: a US version at the root, with UK, Australian and UAE versions in
                    folders on the same domain, linked by hreflang. Every engagement starts with an audit of what you
                    already have.
                  </p>
                </div>
                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_international_seo_hero"
                    service="International SEO"
                    submitLabel="Get an international audit"
                    trustText="Fixed quote per phase, in writing. Founder replies within 24 hours."
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
                    How factoryjet.com is set up, {CHECKED_ON}
                  </figcaption>
                  <dl className="mt-4 grid gap-3">
                    {[
                      { k: 'One domain, four markets', v: 'US at the root, then /uk, /au and /uae folders' },
                      { k: 'Hreflang that points both ways', v: 'Each version lists the others: en-US, en-GB, en-AU, en-AE' },
                      { k: 'x-default', v: 'Points at the US root for every other country' },
                      { k: 'A sitemap per market', v: '192 US, 68 UK and 46 Australian URLs on the day we counted' },
                      { k: 'Local spelling', v: 'UK and Australian pages say optimisation; US pages say optimization' },
                    ].map((row) => (
                      <div key={row.k} className="border-t border-fj-neutral-200 pt-3 first:border-t-0 first:pt-0">
                        <dt className="font-fj-display text-[15px] font-bold text-fj-ink">{row.k}</dt>
                        <dd className="mt-0.5 font-fj-body text-[14px] leading-snug text-fj-neutral-600">{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <pre className="mt-4 overflow-x-auto rounded-xl bg-fj-cream px-4 py-3 font-fj-mono text-[11px] leading-relaxed text-fj-ink">
{`<link rel="alternate" hreflang="en-US" href="https://factoryjet.com"/>
<link rel="alternate" hreflang="en-GB" href="https://factoryjet.com/uk"/>
<link rel="alternate" hreflang="en-AU" href="https://factoryjet.com/au"/>
<link rel="alternate" hreflang="en-AE" href="https://factoryjet.com/uae"/>
<link rel="alternate" hreflang="x-default" href="https://factoryjet.com"/>`}
                  </pre>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    From our live homepage head, reordered for reading. View the source of any of the four to check.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHEN YOU NEED IT */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">When a business needs international SEO</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Six signs your site is ready for more than one country.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Google separates two cases. A multilingual site offers more than one language. A multi-regional site
              targets more than one country, even in one language. US, UK and Australian versions in English are
              multi-regional. Both need the same discipline.
            </p>
            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {SIGNALS.map((s, i) => (
                <li
                  key={s.t}
                  className={`flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-fj-display text-lg font-bold text-fj-ink">{s.t}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              Not ready yet? If buyers abroad are rare and you cannot deliver to them, a second version is maintenance
              with no return. Wait until the demand shows up in Search Console.
            </p>
            <SourceLinks ids={['googleMultiRegional']} />
          </div>
        </section>

        {/* 3. STRUCTURE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">ccTLD vs subfolder vs subdomain</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Pick the structure before you write a page.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Changing structure later means redirecting every URL in every market. The pros and cons here follow
                  Google&rsquo;s own table. The &ldquo;fits&rdquo; line is our view.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  We chose subfolders for factoryjet.com because one domain means one history, one host and one set of
                  code to maintain. New market folders share the history the domain already has.
                </p>
                <SourceLinks ids={['googleMultiRegional']} />
              </div>
              <ul className="grid gap-4 lg:col-span-8">
                {STRUCTURES.map((s, i) => (
                  <li key={s.t} className={`rounded-2xl border border-fj-neutral-200 p-6 ${i === 0 ? 'bg-white' : 'bg-white/70'}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-fj-display text-lg font-bold text-fj-ink">{s.t}</h3>
                      <code className="font-fj-mono text-[13px] text-[#B23E13]">{s.ex}</code>
                    </div>
                    <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div>
                        <dt className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Pros</dt>
                        <dd className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">{s.pros}</dd>
                      </div>
                      <div>
                        <dt className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">Cons</dt>
                        <dd className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">{s.cons}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 border-t border-fj-neutral-200 pt-3 font-fj-body text-sm font-semibold text-fj-ink">
                      Fits: <span className="font-normal text-fj-neutral-600">{s.fit}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. HREFLANG */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Hreflang done right</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Seven ways hreflang breaks, and how we test for each.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Hreflang tells Google which pages are versions of each other and which country or language each one
                  serves. It fails quietly: no error on the page, just the wrong version ranking. Google lists missing
                  return links as the most common mistake.
                </p>
                <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Three rules that catch most errors</p>
                  <ul className="mt-3 grid gap-2.5">
                    {[
                      'Every page in a set lists every other page, and itself',
                      'Every URL in the set returns 200, is indexable and is its own canonical',
                      'Codes are language first, then country: en-GB, not en-UK or gb',
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  One more thing Google states plainly: it decides a page&rsquo;s language from the visible text, not from
                  the lang attribute. One language per page, with the navigation in the same language.
                </p>
                <SourceLinks ids={['googleHreflang', 'googleMultiRegional']} />
              </div>
              <ol className="grid gap-3 lg:col-span-7">
                {HREFLANG_ERRORS.map((e, i) => (
                  <li key={e.t} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-fj-cream font-fj-mono text-xs font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-fj-display text-base font-bold text-fj-ink">{e.t}</h3>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{e.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 5. TRANSLATION VS LOCALISATION + KEYWORDS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Translation vs localisation</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              A translated page is not a local page.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Even in one language, US, UK and Australian buyers spell, search and buy differently. Our UK pages use
              British spelling throughout; the US versions use American spelling. Six things change between a
              translation and a page built for the market.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white" tabIndex={0} role="region" aria-label="Translation compared with localisation">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead className="bg-fj-cream">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">What changes</th>
                    <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Translation</th>
                    <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Localisation</th>
                  </tr>
                </thead>
                <tbody>
                  {LOCALISE.map((r) => (
                    <tr key={r.k} className="border-t border-fj-neutral-200 align-top">
                      <th scope="row" className="px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">{r.k}</th>
                      <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{r.translate}</td>
                      <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-ink">{r.localise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 lg:col-span-7">
                <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                  Market-by-market keyword research
                </p>
                <h3 className="mt-2 font-fj-display text-xl font-bold text-fj-ink">Demand is not the same in every country.</h3>
                <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  We pull search volume for each target country separately, never by translating a US list. One
                  example from the research for this page, {CHECKED_ON}:
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-fj-cream p-4">
                    <dt className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">US, per month</dt>
                    <dd className="mt-1 font-fj-display text-2xl font-extrabold text-fj-ink">170</dd>
                  </div>
                  <div className="rounded-xl bg-fj-cream p-4">
                    <dt className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">UK, per month</dt>
                    <dd className="mt-1 font-fj-display text-2xl font-extrabold text-fj-ink">210</dd>
                  </div>
                </dl>
                <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Searches for &ldquo;international seo consultant&rdquo;. The UK market, a fifth the size of the US by
                  population, searches for it more. A US-only plan would have missed that.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 lg:col-span-5">
                <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                  Non-English markets
                </p>
                <h3 className="mt-2 font-fj-display text-xl font-bold text-fj-ink">A native speaker has the last word.</h3>
                <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Machine translation is a fair first draft. It is not a finished page. For French, German, Spanish or
                  any other language, a native speaker writes or checks the final copy, your team or a provider you
                  choose. We supply the research, the brief and the technical setup, and check the result for search.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure your hreflang works? We test every pair."
          sub="Send us your site and the countries you sell in. We crawl every version, test every hreflang pair and show you which page ranks where, then quote the fixes at a fixed price."
          label="Get an international audit"
        />

        {/* 6. ECOMMERCE + AI SEARCH */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Stores and AI search</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              What an international store needs, and what AI assistants see.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Ecommerce signals per country</h3>
                <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Google lists local currency and local addresses among the signals it uses to judge who a page is
                  for. For a store, the signals live mostly in platform settings, not in the copy.
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {[
                    'Prices in local currency, written the local way, with tax shown the way local buyers expect',
                    'Delivery times, costs and returns rules for that country, on the product page',
                    'Product structured data whose price and currency match what the page shows',
                    'A product feed per country if you run Google Shopping or free listings',
                    'Category pages written for that market’s search terms, not renamed US pages',
                    'Shopify Markets, WooCommerce or custom setups checked for what they actually output',
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/ecommerce-seo"
                  className="mt-4 inline-flex min-h-11 items-center font-fj-body text-sm font-semibold text-[#B23E13] underline underline-offset-4"
                >
                  Ecommerce SEO
                </Link>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 lg:col-span-5">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">International AI SEO</h3>
                <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  Ask ChatGPT, Perplexity or Google&rsquo;s AI Overviews the same buyer question in the US, the UK and
                  Australia, and the businesses named can differ. We run the same questions in each target market,
                  record which pages get named, and fix the local pages that should be cited.
                </p>
                <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  It helps that AI assistants quote short, self-contained answers. A local page with its own direct
                  answer, local prices and local proof gives them something to quote for that country.
                </p>
                <Link
                  href="/services/ai-seo"
                  className="mt-4 inline-flex min-h-11 items-center font-fj-body text-sm font-semibold text-[#B23E13] underline underline-offset-4"
                >
                  AI SEO
                </Link>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-fj-neutral-200 bg-white p-6">
              <h3 className="font-fj-display text-lg font-bold text-fj-ink">Automatic redirects: Google says avoid them</h3>
              <p className="mt-2 max-w-4xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Google advises against redirecting visitors by guessed language or IP address, and notes that most of
                its crawling comes from the US. If a business needs redirects anyway, the minimum is: never redirect
                search or AI crawlers, do nothing when the country is unknown, and keep a visible link to every
                version. That is how the few country redirects on our own site work.
              </p>
              <SourceLinks ids={['googleMultiRegional', 'googleLocaleAdaptive']} />
            </div>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How an engagement runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Audit first. Then one market at a time.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Most international problems are already visible in Search Console before anyone writes a page. The
                  audit finds them, and its fix list sets the scope of everything after it.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Each phase is scoped, priced and signed on its own. You can stop after the audit and take the fix
                  list to your own developers.
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

        {/* 8. SCOPE */}
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
                  You own the code and the pages. Each phase is quoted on its own at a fixed price.
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
                <SourceLinks ids={['googleHireSeo']} />
              </div>
            </div>
          </div>
        </section>

        {/* 9. COST */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Market cost figures</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What international SEO costs.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We found no published survey of international SEO prices on their own. The figures here are for SEO
                  in general, from two surveys of SEO providers. International work sits above them as markets and
                  languages are added.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  FactoryJet does not publish a price list. We quote each phase at a fixed price in writing, starting
                  with the audit.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white" tabIndex={0} role="region" aria-label="Market cost figures for SEO">
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
                  Ahrefs polled 439 SEO providers; SE Ranking collected 260 agency responses and notes its sample leans
                  toward small agencies. Both sell SEO software. What moves the price for international work: the
                  number of markets, the number of languages, whether the structure has to change, and how many pages
                  each market needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMPARISON */}
        <ComparisonTable
          eyebrow="Who can do international SEO"
          headline="SEO team, translation agency, general agency or in-house."
          lead="Each fits a different business. A translation agency is the right call when the setup is sound and you need words in another language. An SEO team fits when the structure, hreflang and research need fixing first."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="General patterns, not a review of any named provider."
          scrollRegionLabel="Comparison of ways to get international SEO done"
        />

        {/* 11. RELATED */}
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
                  Every Google rule and every price on this page was read from the pages listed here. Search volumes
                  are monthly averages from Google Ads keyword data for each country. Details of factoryjet.com come
                  from our live pages and code on the same day.
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
          eyebrow="International SEO FAQ"
          headline="International SEO questions, answered."
          lead="What owners and marketing leads ask before they take a site into new countries. Answers about our process describe how FactoryJet works today."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 14. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="International SEO"
          headline="The right page, in the right country, every time."
          sub="Tell us your site and the countries you sell in. We audit every version, test every hreflang pair, and send a fix list with a fixed quote for each phase."
          primaryCta={{ label: 'Get an international audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Fixed quote per phase. No monthly minimum. You own everything we build."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
