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
   /services/white-label-seo, built 2026-11-24.

   Why this page exists: a Search Console gap audit on 24 Nov 2026 found
   factoryjet.com already earning impressions for white label SEO with no page
   for it (61 queries, 730 impressions, average position 54, e.g. "phoenix
   arizona white label seo company"). DataForSEO, 24 Nov 2026: "white label seo"
   720/mo US (KD 4), "white label seo services" 720/mo (KD 0), "white label seo
   agency" 390/mo, "white label local seo" 320/mo. Bhavesh confirmed on
   24 Nov 2026 that FactoryJet sells white label SEO to agencies.

   Truth rules for anyone editing this file:
   - Process claims are limited to what is already confirmed and live on the
     site: agencies hire us for audits, technical fixes and page writing for
     their own clients, the agency keeps the client relationship, every task is
     quoted in writing and approved first (/phoenix/seo FAQ); monthly plain
     language report on the client's own GA4 and Search Console in Looker
     Studio, no proprietary score (/services/local-seo); no ranking guarantee
     (/services/seo-consulting); house terms (fixed price per phase, no monthly
     minimum); 500+ businesses served, 97% on-time delivery, founded 2014.
   - NOT confirmed, so NOT on the page: whether FactoryJet signs an NDA or a
     non-solicit, task turnaround in days, report file formats, link building.
     The agreement checklist below is advice for choosing any provider.
   - No FactoryJet prices. Dollar figures are third parties' published ranges,
     each linked through SRC.
   - The vendor branch of the lead form goes to a separate inbox. The trust
     line on the hero form tells agencies to choose "Hire FactoryJet".

   Schema: WebPage + Service + FAQPage + BreadcrumbList, through <JsonLd>.
   FAQPage is built from the same FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/white-label-seo';
const PAGE_TITLE = 'White Label SEO Services for Agencies | FactoryJet';
const PAGE_DESC =
  'White label SEO for agencies: audits, technical fixes, page writing and local SEO delivered under your brand. You keep the client. Fixed quote per task.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'white label seo',
    'white label seo services',
    'white label seo agency',
    'white label seo for agencies',
    'white label seo company',
    'white label seo provider',
    'white label local seo',
    'white label seo reseller',
    'white label seo reporting',
    'seo outsourcing for agencies',
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
        alt: 'FactoryJet white label SEO services for marketing agencies',
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
  { name: 'White Label SEO', url: CANONICAL_URL },
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
  name: 'White Label SEO for Agencies',
  serviceType:
    'White label SEO fulfilment for marketing agencies: SEO audits, technical SEO fixes, page writing, local SEO and Google Business Profile work, ecommerce SEO and AI search visibility, delivered under the agency\'s brand',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Marketing agencies, web design agencies and consultants' },
  description:
    'FactoryJet does SEO work for agencies\' clients without its own name on the deliverables. The agency keeps the client relationship, the brand and the price it charges. FactoryJet quotes each task in writing, does the work after the agency approves it, and sends a monthly plain-language report built on the client\'s own Google Analytics and Search Console data.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by inline source links (`short`) and by the
   visible Sources list (`label`). Opened on 2026-11-24. ── */
const SRC = {
  googleHireSeo: {
    short: 'Google: Do you need an SEO?',
    label: 'Google Search Central: Do you need an SEO?',
    url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  },
  googleSpam: {
    short: 'Google: spam policies (link spam)',
    label: 'Google Search Central: Spam policies for Google web search',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
  },
  gbpManagers: {
    short: 'Google: Business Profile managers',
    label: 'Google Business Profile Help: Manage your Business Profile owners and managers',
    url: 'https://support.google.com/business/answer/3403100',
  },
  gscUsers: {
    short: 'Google: Search Console users',
    label: 'Search Console Help: Managing owners, users and permissions',
    url: 'https://support.google.com/webmasters/answer/7687615',
  },
  ga4Access: {
    short: 'Google: Analytics access',
    label: 'Analytics Help: Add, edit and delete users and user groups',
    url: 'https://support.google.com/analytics/answer/9305788',
  },
  suff: {
    short: 'Suff Digital, Jul 2026',
    label: 'Suff Digital: White Label SEO Pricing, What Agencies Pay in 2026 (vendor, published Jul 19, 2026)',
    url: 'https://www.suffdigital.com/resources/guides/white-label-seo-pricing',
  },
  ezrankings: {
    short: 'EZ Rankings, updated Sep 2024',
    label: 'EZ Rankings: White Label SEO Programs (vendor, updated Sep 5, 2024)',
    url: 'https://www.ezrankings.com/blog/white-label-seo-programs',
  },
  ahrefs: {
    short: 'Ahrefs survey of 439 providers',
    label: 'Ahrefs: SEO Pricing, How Much Does SEO Cost? 439 People Polled (updated Aug 15, 2024)',
    url: 'https://ahrefs.com/blog/seo-pricing/',
  },
  seranking: {
    short: 'SE Ranking survey, Dec 2024',
    label: 'SE Ranking: SEO pricing survey insights, How much does SEO cost in 2025? (Dec 13, 2024)',
    url: 'https://seranking.com/blog/seo-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. One array, rendered visibly AND used for FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'White label SEO basics' },
  { key: 'delivery', label: 'How the work is delivered' },
  { key: 'brand', label: 'Your brand and your client' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Basics ─────────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is white label SEO?',
    answer:
      'White label SEO is SEO work done by one company and sold by another under its own brand. An agency sells SEO to its client, sets the price and presents the results. A provider such as FactoryJet does the audits, fixes and writing in the background, with no provider name on the deliverables.',
  },
  {
    category: 'basics',
    question: 'How does white label SEO work?',
    answer:
      'The agency sells SEO to its client and sends the provider a brief and access to the client\'s accounts. The provider quotes each task, the agency approves it, and the work is done. Reports and files carry the agency\'s brand. The agency presents them to the client and handles every call.',
  },
  {
    category: 'basics',
    question: 'What is the difference between white label SEO and an SEO reseller program?',
    answer:
      'People use the two terms for the same thing. Where they differ, a reseller program usually means fixed packages bought from a dashboard, the same for every client. White label work is usually scoped per client. Ask any provider what exactly is delivered for one client in one month, and who does it.',
  },
  {
    category: 'basics',
    question: 'Is white label SEO legitimate?',
    answer:
      'Yes. Subcontracting is normal in agency work, the same as an agency hiring a freelance developer. Two things decide whether it is done well: the quality of the work, and your contract with your client. Check that your client agreement lets you use subcontractors before you start.',
  },
  {
    category: 'basics',
    question: 'Who uses white label SEO?',
    answer:
      'Web design, paid ads, social media and branding agencies whose clients ask for SEO. SEO agencies with more client work than staff. Consultants who sell strategy and need someone to do the technical work. The common thread is an agency that owns the client and wants the work done well under its name.',
  },
  {
    category: 'basics',
    question: 'Is white label SEO worth it for an agency?',
    answer:
      'It is worth it when the work is good enough to put your name on and your margin covers the time you spend managing the client. It is not worth it when you cannot check what was done. Before you sign with any provider, ask for a sample audit and a sample monthly report.',
  },
  // ── Delivery ───────────────────────────────────────────────────
  {
    category: 'delivery',
    question: 'What SEO work does FactoryJet deliver for agencies?',
    answer:
      'SEO audits with a ranked fix list, technical fixes made in the site, page writing, local SEO and Google Business Profile work, ecommerce and Shopify SEO, and AI search visibility for ChatGPT, Perplexity and Google AI Overviews. Each task is quoted in writing and starts only after you approve it.',
  },
  {
    category: 'delivery',
    question: 'What do white label SEO reports look like?',
    answer:
      'A monthly report in plain language, tied to calls, form fills and sales rather than a wall of keyword positions. It is a Looker Studio view built on the client\'s own Google Analytics 4 and Search Console data, with no FactoryJet name on it. We do not invent a score that only we can calculate.',
  },
  {
    category: 'delivery',
    question: 'How fast is white label SEO work delivered?',
    answer:
      'Each task gets a delivery date in the written quote, before you approve it. An audit, a set of technical fixes and a batch of new pages take different amounts of time, so we date each one rather than promise one number. Across all projects, FactoryJet delivers 97% on time.',
  },
  {
    category: 'delivery',
    question: 'What access do you need to a client\'s accounts?',
    answer:
      'Usually manager access to the Google Business Profile, a user on Search Console and Google Analytics, and a login to the website. All of it is added to the client\'s own accounts, so access can be removed in a few clicks when the work ends. The client never hands over ownership.',
  },
  {
    category: 'delivery',
    question: 'Do you guarantee rankings?',
    answer:
      'No, and no provider honestly can. Google\'s own guidance on hiring an SEO says no one can guarantee a number one ranking. What we commit to in writing is the task, the delivery date and a written list of every change we made.',
  },
  // ── Brand ──────────────────────────────────────────────────────
  {
    category: 'brand',
    question: 'Will my client know I use a white label provider?',
    answer:
      'Not from us. Reports, audits and files carry your brand, not ours, and we do not contact your client. You keep the relationship and every call. What you tell your client about how your agency works is your decision.',
  },
  {
    category: 'brand',
    question: 'Who owns the client relationship?',
    answer:
      'You do. You sell the work, set the price, sign the client contract and present the results. FactoryJet works for your agency, under an agreement with your agency. The client\'s accounts, website and data stay in the client\'s name throughout.',
  },
  {
    category: 'brand',
    question: 'What should a white label SEO agreement include?',
    answer:
      'With any provider, put five things in writing: confidentiality of your client list and data, a promise not to approach your clients, who owns the work and the accounts, how access is removed when the work ends, and what happens to work in progress if either side stops.',
  },
  // ── Working ────────────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does white label SEO cost?',
    answer:
      'Published wholesale ranges run from about $250 to $3,000 per client per month, depending on scope. EZ Rankings gives $250 to $1,500 and Suff Digital gives $300 to $3,000; both sell white label SEO. FactoryJet does not publish a price list: each task gets a fixed quote in writing.',
  },
  {
    category: 'working',
    question: 'How should an agency price white label SEO to its clients?',
    answer:
      'Start from the provider\'s fixed quote, add the time your team spends on calls, reviews and reporting, then add your margin. Suff Digital puts a typical margin at 40 to 60 percent. Price what the client gets, such as an audit and a fix list, not a vague package you cannot explain line by line.',
  },
  {
    category: 'working',
    question: 'Is there a minimum contract or monthly minimum?',
    answer:
      'No monthly minimum. Each task is quoted and approved on its own, so you can start with one audit for one client and add more when it works. Ongoing monthly work is also quoted in writing before it starts.',
  },
  {
    category: 'working',
    question: 'How do we start working together?',
    answer:
      'Send a short brief through the form on this page and choose "Hire FactoryJet". Tell us your agency, the client\'s website and what the client has asked for. The founder replies within 24 hours, usually with a question first, then a written quote.',
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

/* ── Who keeps what. ── */
type Holder = 'agency' | 'factoryjet' | 'client';
const HOLDER_LABEL: Record<Holder, string> = {
  agency: 'Your agency',
  factoryjet: 'FactoryJet',
  client: 'Your client',
};
const SPLIT: ReadonlyArray<{ item: string; holder: Holder; note: string }> = [
  { item: 'The client relationship', holder: 'agency', note: 'Every call, email and meeting with the client is yours. We work through you.' },
  { item: 'Your brand on the work', holder: 'agency', note: 'Reports, audits and files go out in your name. Ours is not on them.' },
  { item: 'The price the client pays', holder: 'agency', note: 'You set it. We quote you, not your client.' },
  { item: 'Sign-off on each task', holder: 'agency', note: 'Nothing starts until you approve a written quote for it.' },
  { item: 'Audits, fixes and page writing', holder: 'factoryjet', note: 'The SEO work itself, done to a written scope and dated in the quote.' },
  { item: 'A list of every change', holder: 'factoryjet', note: 'What was changed, where and why, so you can answer any client question.' },
  { item: 'Accounts, website and data', holder: 'client', note: 'Analytics, Search Console, Business Profile and the site stay in the client\'s name.' },
];

/* ── What we deliver under your brand. ── */
const SCOPE: ReadonlyArray<{ t: string; b: string; href: string; link: string }> = [
  {
    t: 'SEO audits',
    b: 'A crawl of the site, Search Console and Analytics read side by side, and a fix list ranked by what is holding the site back. Written so you can present it as your own.',
    href: '/services/seo-audit',
    link: 'How our audits work',
  },
  {
    t: 'Technical fixes, made in the site',
    b: 'Crawling, indexing, redirects, page speed, schema and site moves, fixed in the code or the CMS, not left as a list for the client\'s developer.',
    href: '/services/technical-seo',
    link: 'Technical SEO',
  },
  {
    t: 'Page writing',
    b: 'Service pages, location pages and articles written for the queries the client\'s buyers type. Every draft comes to you for review before it goes live.',
    href: '/services/seo-consulting',
    link: 'Keyword and page planning',
  },
  {
    t: 'Local SEO and Business Profiles',
    b: 'Google Business Profile, service areas, local pages and listings for clients who sell to a city or region. Done through manager access the client can remove.',
    href: '/services/local-seo',
    link: 'Local SEO',
  },
  {
    t: 'Ecommerce and Shopify SEO',
    b: 'Category and product pages, filters, duplicate URLs and product schema for online stores, including Shopify and WooCommerce.',
    href: '/services/ecommerce-seo',
    link: 'Ecommerce SEO',
  },
  {
    t: 'AI search visibility',
    b: 'Getting the client named in ChatGPT, Perplexity and Google AI Overviews, with the answers checked and reported each month.',
    href: '/services/ai-seo',
    link: 'AI SEO',
  },
];

/* ── Fulfilment, step by step. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'You send the brief',
    b: 'The client\'s website, what they sell, where they sell it and what they have asked you for. Add anything you have already promised them.',
  },
  {
    n: '02',
    t: 'We quote each task in writing',
    b: 'A fixed price, a scope and a delivery date per task. You approve it before any work starts, and you price it to your client however you like.',
  },
  {
    n: '03',
    t: 'The client adds access',
    b: 'Manager or user access on the client\'s own Analytics, Search Console, Business Profile and website. Nobody hands over a password or an account.',
  },
  {
    n: '04',
    t: 'We do the work',
    b: 'Audits, fixes and pages to the approved scope. Drafts and fix lists come to you for review first. We do not contact your client.',
  },
  {
    n: '05',
    t: 'You get a list of every change',
    b: 'What we changed, on which page and why. If your client asks what happened this month, you have the answer in one place.',
  },
  {
    n: '06',
    t: 'A monthly report goes out in your name',
    b: 'Plain language, tied to calls, form fills and sales, built on the client\'s own data. You present it. We stay in the background.',
  },
];

/* ── Included and not included. ── */
const INCLUDED: ReadonlyArray<string> = [
  'SEO audits with a ranked fix list',
  'Technical fixes made in the site or CMS',
  'Page writing, reviewed by you before it goes live',
  'Local SEO and Google Business Profile work',
  'Ecommerce and Shopify SEO',
  'AI search visibility checks and fixes',
  'A written list of every change',
  'A monthly plain-language report on the client\'s own data',
];
const NOT_INCLUDED: ReadonlyArray<{ t: string; b: string }> = [
  { t: 'Ranking guarantees', b: 'Nobody can promise a position on Google. Google says so itself.' },
  { t: 'Contact with your client', b: 'You keep the relationship. We talk to your agency, not to your client.' },
  { t: 'A proprietary score', b: 'Reports use the client\'s own Analytics and Search Console numbers, which anyone can check.' },
  { t: 'Work you have not approved', b: 'Every task is quoted in writing and approved before it starts.' },
  { t: 'A monthly minimum', b: 'Start with one audit for one client. Add more when it works.' },
];

/* ── Market cost ranges. Every row is a third party's figure, linked.
   Wholesale = what an agency pays a provider. Retail = what a business pays
   an agency, shown so an agency can see the room between the two. ── */
const COSTS: ReadonlyArray<{ item: string; range: string; kind: 'Wholesale' | 'Retail'; source: SrcKey }> = [
  { item: 'White label SEO, per client per month', range: '$300 to $3,000, by plan tier and market', kind: 'Wholesale', source: 'suff' },
  { item: 'White label SEO program, per month', range: '$250 to $1,500, depending on the client\'s needs', kind: 'Wholesale', source: 'ezrankings' },
  { item: 'Agency markup on white label SEO', range: '40 to 60 percent margin', kind: 'Wholesale', source: 'suff' },
  { item: 'SEO agency retainer, average', range: '$3,209 a month (freelancers: $1,348)', kind: 'Retail', source: 'ahrefs' },
  { item: 'SEO agency retainers below $1,000 a month', range: '64% of agencies surveyed', kind: 'Retail', source: 'seranking' },
  { item: 'SEO project fee, most common band', range: '$500 to $2,000 per project', kind: 'Retail', source: 'seranking' },
];

/* ── Red flags when choosing any provider. ── */
const RED_FLAGS: ReadonlyArray<{ t: string; b: string; sources?: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A promise of first place',
    b: 'Google\'s guidance on hiring an SEO says no one can guarantee a number one ranking. A provider that promises one is telling you something else about how it works.',
    sources: ['googleHireSeo'],
  },
  {
    t: 'Links sold by the hundred',
    b: 'Bulk link packages are how agencies get a client penalised. Google\'s spam policies name buying or selling links for ranking as link spam.',
    sources: ['googleSpam'],
  },
  {
    t: 'Reports you cannot check',
    b: 'If the numbers come from the provider\'s own tool and not from the client\'s Analytics and Search Console, you cannot verify them in front of your client.',
  },
  {
    t: 'No list of what changed',
    b: 'A report full of charts with no list of the pages and settings that were changed leaves you unable to answer the client\'s first question.',
  },
  {
    t: 'Logins instead of access',
    b: 'A provider that asks for the client\'s passwords, or to own the accounts, makes leaving hard. User and manager access on the client\'s own accounts is the norm.',
    sources: ['gbpManagers', 'gscUsers', 'ga4Access'],
  },
  {
    t: 'The same plan for every client',
    b: 'A dentist in Phoenix and an online store selling across the US need different work. One fixed package for both is a sign nobody looked at the site.',
  },
];

const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet white label', isFactoryJet: true },
  { label: 'Reseller dashboard plan' },
  { label: 'Freelancer' },
  { label: 'In-house SEO hire' },
];
const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What you buy',
    values: [
      'Scoped tasks per client, quoted in writing',
      'Fixed packages, the same for every client',
      'One person\'s hours',
      'A salary and the tools around it',
    ],
  },
  {
    feature: 'Brand on the work',
    values: ['Yours', 'Yours, often on a shared dashboard', 'Yours, if agreed', 'Yours'],
  },
  {
    feature: 'Technical fixes in the site',
    values: ['Yes, made in the code or CMS', 'Often a report only', 'Depends on the person', 'Depends on the hire'],
  },
  {
    feature: 'Grows with your client list',
    values: ['Yes, task by task', 'Yes, plan by plan', 'Limited by one person\'s time', 'Only by hiring again'],
  },
  {
    feature: 'Fits when',
    values: [
      'Clients need different work and you want it done under your name',
      'Many small clients need the same basic work',
      'A small, steady amount of one kind of work',
      'SEO is a large, permanent part of your agency',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/ai-seo', t: 'AI search and SEO', b: 'Our main SEO service for businesses that hire us directly.' },
  { href: '/services/seo-consulting', t: 'SEO consulting', b: 'Strategy and a roadmap for teams that can do the work themselves.' },
  { href: '/services/seo-audit', t: 'SEO audit', b: 'The diagnosis on its own, with a ranked fix list.' },
  { href: '/services/technical-seo', t: 'Technical SEO', b: 'Crawling, indexing, speed and site moves, fixed in code.' },
  { href: '/services/local-seo', t: 'Local SEO', b: 'Map pack, Business Profile and near-me searches.' },
  { href: '/services/ecommerce-seo', t: 'Ecommerce SEO', b: 'Category pages, product schema and filters for online stores.' },
  { href: '/services/shopify-seo', t: 'Shopify SEO', b: 'SEO built around how Shopify handles URLs, collections and apps.' },
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

export default function WhiteLabelSeoPage() {
  return (
    <>
      <JsonLd id="white-label-seo-schema" data={[webPageSchema, serviceSchema, breadcrumbSchema]} />
      <JsonLd id="white-label-seo-faq-schema" data={faqSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="Send a client brief" title="Agencies" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO with the direct answer */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-10 pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    WHITE LABEL SEO &middot; FOR AGENCIES
                  </span>
                </div>
                <h1 className="font-fj-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  White label SEO for agencies, delivered under your brand.
                </h1>
                <div id="short-answer" className="mt-5 max-w-2xl">
                  <p className="font-fj-body text-lg leading-relaxed text-fj-ink">
                    White label SEO means we do the SEO work for your clients and you sell it as your own. FactoryJet
                    handles audits, technical fixes, page writing, local SEO and AI search visibility. Your agency
                    keeps the client, the brand on every report and the price the client pays.
                  </p>
                  <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                    Each task is quoted to you in writing and starts only after you approve it. Reports are built on
                    the client&rsquo;s own Analytics and Search Console data, with no FactoryJet name on them.
                  </p>
                </div>
                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_white_label_seo_hero"
                    service="White Label SEO"
                    submitLabel="Send a client brief"
                    trustText="Agencies outsourcing client SEO: choose Hire FactoryJet. Founder replies within 24 hours."
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
                    Who sees what
                  </figcaption>
                  <div className="mt-4 rounded-xl border border-[#F05A28]/30 bg-[#FFF8F5] p-4">
                    <p className="font-fj-display text-base font-bold text-fj-ink">Your client sees</p>
                    <ul className="mt-2 grid gap-1.5">
                      {['Your agency name', 'Your report and your logo', 'Your account manager', 'Your invoice'].map((x) => (
                        <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-snug text-fj-ink">
                          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 rounded-xl border border-dashed border-fj-neutral-200 p-4">
                    <p className="font-fj-display text-base font-bold text-fj-ink">Behind the scenes</p>
                    <ul className="mt-2 grid gap-1.5">
                      {['FactoryJet audits the site', 'Fixes are made in the site', 'Pages are drafted for your review', 'Report data comes from the client’s own accounts'].map((x) => (
                        <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-snug text-fj-neutral-600">
                          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fj-neutral-600" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 rounded-xl bg-fj-cream px-4 py-3 font-fj-body text-[13px] leading-snug text-fj-ink">
                    We work for your agency. We do not contact your client.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHO KEEPS WHAT */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">What your agency keeps</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  You keep the client. We do the SEO work.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The question agency owners ask first is what they give up. The answer should be nothing that faces
                  the client. The relationship, the brand and the price stay with you.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  The client keeps something too: ownership of their own accounts and data. That protects you as much
                  as them, because no provider can hold the client hostage.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Who keeps what in white label SEO">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead className="bg-fj-cream">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Item</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">Who holds it</th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">What that means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SPLIT.map((s) => (
                        <tr key={s.item} className="border-t border-fj-neutral-200 align-top">
                          <th scope="row" className="w-[30%] px-4 py-4 font-fj-display text-[15px] font-bold text-fj-ink">
                            {s.item}
                          </th>
                          <td className="w-[20%] px-4 py-4">
                            <span
                              className={`font-fj-mono text-xs font-bold uppercase tracking-wider ${
                                s.holder === 'agency' ? 'text-[#B23E13]' : 'text-fj-ink'
                              }`}
                            >
                              {HOLDER_LABEL[s.holder]}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SCOPE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">White label SEO services</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              The SEO work we deliver under your brand.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The same work we do for businesses that hire us directly, with your name on it instead of ours. Buy one
              piece for one client, or several for a client on a monthly program.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {SCOPE.map((s, i) => (
                <li
                  key={s.t}
                  className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <h3 className="font-fj-display text-lg font-bold text-fj-ink">{s.t}</h3>
                  <p className="mt-1.5 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.b}</p>
                  <Link
                    href={s.href}
                    className="mt-3 inline-flex min-h-11 items-center font-fj-body text-sm font-semibold text-[#B23E13] underline underline-offset-4"
                  >
                    {s.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. HOW FULFILMENT WORKS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How fulfilment works</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  From your brief to a report in your name.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six steps, the same for every client. You approve the work before it starts and review drafts before
                  they go live. We never step in front of you.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Turnaround is set per task. Each quote carries its own delivery date, and across all our projects we
                  deliver 97% on time.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
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

        {/* 5. REPORTING */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">White label SEO reporting</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Reports your client can check against their own data.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A white label report is only as good as the numbers behind it. If they come from the provider&rsquo;s
                  own tool, you cannot show the client where they came from. Ours come from the client&rsquo;s own
                  Google Analytics 4 and Search Console, in a Looker Studio view.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  It is written in plain language and tied to what the client cares about: calls, form fills and sales.
                  Keyword positions appear where they explain something, not as a wall of rows nobody acts on.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'Monthly', d: 'One report a month per client, ready for you to present.' },
                  { t: 'Your brand, not ours', d: 'No FactoryJet name, logo or link on the report.' },
                  { t: 'The client’s own data', d: 'Built on their Analytics 4 and Search Console, so every number can be checked.' },
                  { t: 'A list of every change', d: 'Which pages and settings changed this month, and why.' },
                  { t: 'No invented score', d: 'We do not report a number only we can calculate.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <p className="font-fj-display text-lg font-bold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. INCLUDED / NOT INCLUDED */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Scope</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              What is and is not included.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">Included, task by task</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {INCLUDED.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Each item is quoted on its own. A client can start with an audit and nothing else.
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

        <MidPageCTA
          headline="Have a client asking for SEO? Send us the brief."
          sub="Tell us the client's website and what they asked you for. We reply with questions, then a fixed quote per task that you approve before anything starts."
          label="Send a client brief"
        />

        {/* 7. CONFIDENTIALITY + AGREEMENT CHECKLIST */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Confidentiality</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  Put these five things in writing with any provider.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your client list is the most valuable thing your agency owns. Before you share a single client name
                  or login with a white label provider, agree these points on paper. They protect you whoever you hire.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'Confidentiality', d: 'Your client names, data and results stay private, during the work and after it ends.' },
                  { t: 'No approaching your clients', d: 'The provider agrees not to pitch or take on your clients directly.' },
                  { t: 'Who owns the work', d: 'Pages, fix lists and reports belong to you and your client once paid for.' },
                  { t: 'Access, not accounts', d: 'The provider works through user or manager access on the client’s own accounts, removed when the work ends.' },
                  { t: 'What happens if either side stops', d: 'How work in progress is handed over, and how fast access comes off.' },
                ].map((x, i) => (
                  <li key={x.t} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white font-fj-mono text-xs font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-fj-display text-base font-bold text-fj-ink">{x.t}</p>
                      <p className="mt-0.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. RED FLAGS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Choosing a white label SEO company</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
              Six signs a white label provider will cost you the client.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The risk in white label SEO is not that the client finds out. It is that the work is poor and your name
              is on it. These are the signs to look for before you sign with anyone.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RED_FLAGS.map((f, i) => (
                <li
                  key={f.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-5 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <h3 className="font-fj-display text-base font-bold text-fj-ink">{f.t}</h3>
                  <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{f.b}</p>
                  {f.sources ? <SourceLinks ids={f.sources} /> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. COST */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Market cost ranges</p>
                <h2 className="mt-4 font-fj-display text-3xl font-bold text-fj-ink sm:text-4xl">
                  What white label SEO costs, from published ranges.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These are other firms&rsquo; published figures, each linked. Most come from companies that sell white
                  label SEO themselves, so read them as market ranges, not as our prices.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  FactoryJet does not publish a price list. We quote each task at a fixed price in writing, and you set
                  what your client pays.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-fj-neutral-200" tabIndex={0} role="region" aria-label="Market cost ranges for white label SEO">
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
                            <span className="mt-1 block font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">{c.kind}</span>
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
                  Suff Digital and EZ Rankings sell white label SEO, and neither page cites a survey for its range. The
                  Ahrefs and SE Ranking figures are surveys of what businesses pay agencies, not what agencies pay a
                  provider. Ahrefs averages assume each respondent charges the top of their price band.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMPARISON */}
        <ComparisonTable
          eyebrow="Ways to add SEO to your agency"
          headline="White label partner, reseller plan, freelancer or hire."
          lead="Each fits a different agency. A reseller plan can be the right call for many small clients who need the same basic work. Scoped white label work fits when clients need different things."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="General patterns, not a review of any named provider."
          scrollRegionLabel="Comparison of ways for an agency to deliver SEO"
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
                  Every Google policy and every price range on this page was read from the pages listed here. Prices
                  move, so check the linked page before you act on one.
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
          eyebrow="White label SEO FAQ"
          headline="White label SEO questions from agency owners."
          lead="What agencies ask before they hand client SEO to a provider. Answers about our process describe how FactoryJet works today."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 14. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="White label SEO"
          headline="Your brand on the report. Our team on the work."
          sub="Send us one client brief. We quote each task in writing, do the work after you approve it and send a monthly report in your name, built on the client's own data."
          primaryCta={{ label: 'Send a client brief', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Fixed quote per task. No monthly minimum. We never contact your client."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
