import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { smallBusinessSeoServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import ComparisonTable from '@/components/v2/ComparisonTable';

import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';
import './small-business-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/small-business-seo, built 2026-06-03. US SEO program.

   Design: "Navigator (light)" system cloned from /us/services/local-seo (scoped
   under .sbseo). Light hero with a growth/leads card visual (replaces the map),
   get-found / get-clicked / get-customer pillar triad, "what's included" services
   bento, dark comparison scorecard, owner-persona cards, a leads-growth
   mini-dashboard, founder team block, FAQ, CTA. Brand palette + brand next/font.

   Perf (100/100): no hero image (CSS card = text LCP), fixed-height hero visual
   (zero CLS), team image lazy + reserved, zero page JS. display:'optional' fonts.

   Honesty: no pricing section; CTAs → free SEO audit modal + Calendly; verified
   claims only (4.9/5, 500+, month-to-month, 7-day/Lighthouse 95+); growth card
   labeled illustrative; no em-dashes. Anti-cannibalization: owns "small business
   SEO services / company / agency / affordable SEO"; local/near-me intent stays
   on /us/services/local-seo (linked, not duplicated).
   Schema: Service + Organization + FAQPage(22) + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 3, 2026';

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & contracts',
    items: [
      {
        q: 'How much do small business SEO services cost in the US?',
        a: `FactoryJet pricing is fixed and scoped to your goals. The main drivers are your market and how fast you want to move. We scope every plan to the work that actually brings customers, then quote it up front on a short call so you know the full cost before work starts. The simplest way to get a real figure is to start with a free SEO audit.`,
      },
      {
        q: 'Is affordable SEO for small business actually worth it?',
        a: `Yes, when the budget goes to the right moves. Affordable SEO does not mean cutting corners. It means spending on the handful of fixes that bring calls and leads, and skipping the busywork bigger agencies bill for. For most owners, one new customer a month covers the engagement, and SEO compounds, so the cost per lead keeps falling.`,
      },
      {
        q: 'Do you lock me into a long contract?',
        a: `No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.`,
      },
      {
        q: 'Do you offer SEO packages for small business?',
        a: `We build one focused plan instead of rigid tiers full of filler line items. Whether you think of it as small business SEO services, an SEO package, or just "get me more customers," we scope it to your budget and goals, lead with the highest-impact work, and adjust as results come in.`,
      },
      {
        q: 'What do I get from the free SEO audit?',
        a: `A full review of your website, your Google presence, the keywords you should rank for, and the competitors beating you, plus a prioritized 90-day roadmap. It is a complete picture of why you are not getting traffic and what to fix first, and you keep it whether or not you continue.`,
      },
    ],
  },
  {
    id: 'faq-choosing',
    label: 'Choosing a company',
    items: [
      {
        q: 'What makes the best SEO services for small business?',
        a: `Focus and honesty. The best small business SEO companies do a few things well, report in calls and leads instead of vanity rankings, and work month-to-month so they have to keep earning it. Be wary of anyone selling padded packages or promising the top of Google in a week.`,
      },
      {
        q: 'How do I choose a small business SEO company?',
        a: `Ask three questions: who actually does the work, what they report on, and whether you are locked in. With FactoryJet the answers are the founder, your calls and leads, and month-to-month. Any small business SEO consultant worth hiring should answer those plainly.`,
      },
      {
        q: 'Are you an SEO agency or a consultant?',
        a: `Both, in the way that matters to a small business. You get a senior SEO consultant, the founder, running your strategy directly, with the full capability of an agency behind the work. You are not handed to a junior who rotates off your account next quarter.`,
      },
      {
        q: 'Do you only work with small businesses?',
        a: `Small and growing businesses are our focus, which is why the plans, pricing, and reporting are built for owners, not enterprise committees. If you run a single location or a small team, you are exactly who this is for.`,
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      {
        q: 'What do small business SEO services with FactoryJet include?',
        a: `We fix your website and on-page SEO, tune your Google Business Profile so you show up locally, publish content around what your customers search, and report it in calls and leads. One focused plan, no filler tasks padded onto an invoice.`,
      },
      {
        q: 'Do you fix my website or just do SEO?',
        a: `We optimize what you have first, making it fast, crawlable, and built around buyer searches. If your site is too slow or cannot be ranked, we can rebuild it in about seven days at a 100/100 Lighthouse score, but that is a recommendation, never a forced upsell.`,
      },
      {
        q: 'Do you handle local and "near me" searches?',
        a: `Yes, as part of the plan. If your growth depends mostly on the Google map pack and "near me" searches, our dedicated local SEO services go deeper on your Google Business Profile, reviews, and citations. We will point you to the right focus on your free audit.`,
      },
      {
        q: 'Do you do content and keywords too?',
        a: `Yes. We research the keywords your customers actually type, then publish pages and posts that answer them. Content is what turns SEO into steady, compounding traffic instead of a one-time fix.`,
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & timeline',
    items: [
      {
        q: 'How long does small business SEO take to work?',
        a: `You will usually see a first measurable lift in 30 to 90 days from technical and on-page fixes, with momentum compounding by month four to six as content and authority build. Anyone promising the top of Google in a week is selling something that will not last.`,
      },
      {
        q: 'Do you guarantee first-page rankings?',
        a: `No honest SEO company can guarantee a specific position, because Google controls it. What we guarantee is the work, full transparency, and a strategy built to compound. Because it is month-to-month, the results have to keep you, not a contract.`,
      },
      {
        q: 'How do you report results?',
        a: `You get a monthly report in plain language tied to calls, form fills, and sales, not a wall of keyword positions nobody acts on. You will always know what we did and what it brought in.`,
      },
      {
        q: 'What if I do not see results?',
        a: `We review progress every month and adjust the plan. Because the engagement is month-to-month, you are never trapped paying for work that is not moving the numbers.`,
      },
    ],
  },
  {
    id: 'faq-industries',
    label: 'Industries & fit',
    items: [
      {
        q: 'Which small businesses do you work with?',
        a: `We get results for local and home services like HVAC, contractors, salons, and clinics, for shops and restaurants, and for B2B and professional services like accountants, agencies, and consultants across the US.`,
      },
      {
        q: 'Is SEO worth it for a very small or new business?',
        a: `Often it is the best money a small business spends, because organic traffic does not stop when you stop paying like ads do. We start with the affordable, high-impact fixes so a new business sees movement without a big budget.`,
      },
      {
        q: 'Can you help if I have tried SEO before and it did not work?',
        a: `Yes, and it is common. Usually the budget went to busywork or vague reporting. The free audit shows exactly what was missed, and the month-to-month model means you only keep paying if it works this time.`,
      },
      {
        q: 'Who will I actually be working with?',
        a: `The founder, Bhavesh. The person who scopes your small business SEO is the same person accountable for the calls and leads it earns, not a junior who rotates off the account next quarter.`,
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export const metadata: Metadata = {
  title: 'Small Business SEO Services USA | FactoryJet',
  description:
    'US small business SEO company. Affordable SEO services bringing calls and leads from Google. Founder-led, month-to-month, transparent reporting.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Small Business SEO Services in the US: More Customers from Google | FactoryJet',
    description:
      'A US small business SEO agency offering affordable SEO services for small businesses. Website, local, and content SEO scoped to your budget. Founder-led, month-to-month, reported in calls and leads.',
    url: 'https://factoryjet.com/services/small-business-seo',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet small business SEO services for US businesses' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business SEO Services in the US: More Customers from Google | FactoryJet',
    description:
      'Affordable small business SEO services that bring calls and customers from Google. Founder-led, month-to-month, reported in leads.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/small-business-seo',
    languages: smallBusinessSeoServicesAlternatesUS,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/small-business-seo#webpage',
  url: 'https://factoryjet.com/services/small-business-seo',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Small Business SEO Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Small Business SEO / Affordable SEO Services / Local SEO for Small Business / On-Page SEO / Content SEO / SEO Consulting',
  description:
    'US-focused small business SEO services that bring calls and customers from Google. Website and on-page SEO, Google Business Profile, and content, scoped to a small business budget. Founder-led, month-to-month, reported in calls and leads.',
  url: 'https://factoryjet.com/services/small-business-seo',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_FLAT.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Small Business SEO', url: 'https://factoryjet.com/services/small-business-seo' },
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

function Check({ fill = '#0C7150' }: { fill?: string }) {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Partial() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#E0982A" />
      <path d="M10 5.5v5M10 13.5v.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const PERSONAS = [
  { mk: 'mk-o', kk: 'Local & service', h: 'Home & local services', p: 'HVAC, contractors, salons, and clinics. We win the searches nearby customers run and turn them into booked jobs.' },
  { mk: 'mk-g', kk: 'Storefront', h: 'Shops & restaurants', p: 'Get found by nearby customers and pull foot traffic from Google and Maps with the right local signals.' },
  { mk: 'mk-l', kk: 'Professional', h: 'B2B & professional services', p: 'Accountants, agencies, and consultants. Rank for the high-intent searches that fill your pipeline.' },
  { mk: 'mk-o', kk: 'Online', h: 'Small online stores', p: 'Product and category pages that rank, so a small catalog competes with the big names on the searches that convert.' },
  { mk: 'mk-g', kk: 'Multi-location', h: 'Growing small chains', p: 'Two to ten locations, each optimized to compete in its own market without competing with each other.' },
  { mk: 'mk-l', kk: 'Solo & startup', h: 'New & solo businesses', p: 'Just getting started. We lead with affordable, high-impact fixes so you see movement without a big budget.' },
];

const SCORE_ROWS = ['Who runs your SEO', 'Monthly cost', 'Small-business focus', 'What we report', 'Website fixes included', 'Contract terms'];
const SCORE_FJ = ['The founder, Bhavesh', 'Scoped to your budget', 'Built for SMBs', 'Calls & leads', 'Yes, built in', 'Month-to-month'];
const SCORE_AG = [['A rotating junior', 'p'], ['High retainer', 'x'], ['Enterprise-first', 'p'], ['Rankings & traffic', 'p'], ['Add-on cost', 'p'], ['6 to 12 month lock-in', 'x']] as const;
const SCORE_DIY = [['Solo, stretched thin', 'p'], ['Low', 'c'], ['Hit or miss', 'p'], ['Little or none', 'x'], ['Not covered', 'x'], ['Flexible', 'c']] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Additive strengthening pass (2026-08-13). ADD-ONLY: nothing above this block
   was removed, and all 21 FAQs are untouched. Adds cited numbers, an 18-point
   owner checklist, a five-way comparison table, and the named systems small
   business SEO actually runs on.

   Every source below was opened with curl on 2026-08-13, returned HTTP 200, and
   the exact claim was located in the fetched HTML before it was written here.
   If a source stops resolving, cut the claim rather than leaving it uncited.
───────────────────────────────────────────────────────────────────────────── */

const LINK_STYLE = {
  color: 'var(--ls-orange-d)',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
} as const;

const GOOGLE_HIRING_SEO = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const GOOGLE_STARTER_GUIDE = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
const GOOGLE_PROFILE_RANKING = 'https://support.google.com/business/answer/7091';
const BRIGHTLOCAL_SURVEY = 'https://www.brightlocal.com/research/local-consumer-review-survey/';
const WEB_DEV_VITALS = 'https://web.dev/articles/vitals';

const SBSEO_STATS = [
  {
    value: '#1',
    label:
      'Google’s own guidance on hiring an SEO says it flatly: no one can guarantee a #1 ranking on Google, and you should be wary of anyone who promises one. So we sell the work and report the leads, never a position.',
    sourceUrl: GOOGLE_HIRING_SEO,
    sourceLabel: 'Do you need an SEO? Google Search Central',
  },
  {
    value: 'Hours to months',
    label:
      'Google’s starter guide says some changes show up in Search within a few hours while others take several months, and suggests waiting a few weeks before judging the effect. That is the real timeline, from the people who run the index.',
    sourceUrl: GOOGLE_STARTER_GUIDE,
    sourceLabel: 'SEO Starter Guide, Google Search Central',
  },
  {
    value: '47%',
    label:
      'Share of consumers who will not use a business with fewer than 20 reviews. Getting found is half the job. What people see once they find you decides whether the phone rings.',
    sourceUrl: BRIGHTLOCAL_SURVEY,
    sourceLabel: 'BrightLocal Local Consumer Review Survey',
  },
  {
    value: '2.5s',
    label:
      'The Largest Contentful Paint threshold Google publishes for a good page experience, measured at the 75th percentile of real visits, alongside Interaction to Next Paint of 200 ms or less and Cumulative Layout Shift of 0.1 or less. Your pages get held to that same bar.',
    sourceUrl: WEB_DEV_VITALS,
    sourceLabel: 'Core Web Vitals thresholds, web.dev',
  },
];

/* The order we actually work in. An owner can run this alone and be better off,
   which is the point of publishing it. */
const OWNER_CHECKLIST = [
  {
    title: 'Claim and finish your Google Business Profile',
    body: 'Google’s own help page says businesses with complete and accurate information are more likely to show up in local results. Categories, services, hours, photos, and a real description. Free, and most owners stop at the name and the phone number.',
  },
  {
    title: 'Verify the site in Google Search Console',
    body: 'This is the only place Google tells you which of your pages it indexed and which it skipped. Before anyone sells you content, check whether the pages you already have are even in the index.',
  },
  {
    title: 'Wire GA4 through Google Tag Manager to calls and forms',
    body: 'Google Analytics 4 counts sessions by default, and sessions do not pay anyone. Fire click-to-call, form submits, and WhatsApp taps as named GA4 events through Google Tag Manager so the report is about leads.',
  },
  {
    title: 'Add Bing Webmaster Tools while you are at it',
    body: 'Smaller than Google and free. It also feeds answer engines that never crawl Google directly, so it is worth the twenty minutes even though the traffic looks small.',
  },
  {
    title: 'Rewrite titles on pages that already get impressions',
    body: 'Search Console shows pages ranking on page two with a title nobody clicks. Rewriting those is the fastest win on the whole list, because the ranking is already earned.',
  },
  {
    title: 'One page per service, not one page listing every service',
    body: 'A single page trying to rank for six things ranks for none of them. Split it, then point each page at the words a buyer would actually type.',
  },
  {
    title: 'Check the site on a phone against Core Web Vitals',
    body: 'Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift, measured on field data from real visits, not one Lighthouse run on a fast laptop. A slow page loses the customer after the click, which no amount of ranking fixes.',
  },
  {
    title: 'Ship structured data as JSON-LD',
    body: 'schema.org markup for your organization, your services, and your FAQ, written in JSON-LD. Search engines and AI answer engines both read structured data before they read your layout, so schema markup is cheap surface area.',
  },
  {
    title: 'Check sitemap.xml and robots.txt',
    body: 'Two files that quietly decide what gets crawled. A stale sitemap.xml full of deleted URLs and a robots.txt blocking a folder you forgot about are both common, and both invisible until someone looks.',
  },
  {
    title: 'Fix internal linking from your strongest pages down',
    body: 'Your homepage and your one popular blog post carry most of your topical authority. Internal linking passes it to the service pages that need it. It costs nothing and almost nobody does it deliberately.',
  },
  {
    title: 'Ask every happy customer for a review, every time',
    body: 'Nearly half of consumers skip a business with fewer than twenty reviews. Build the ask into the job: a text after the invoice, a line in the receipt email. Then answer every review, good and bad.',
  },
  {
    title: 'Write the answers to the questions you get on the phone',
    body: 'The questions customers ask before they buy are the questions they type into Google first. Answer them plainly on the page. That same plain answer is what an AI engine quotes back.',
  },
  {
    title: 'Cut or merge the thin and duplicate pages',
    body: 'Content pruning is unglamorous and it works. Ten near-identical pages compete with each other and waste crawl budget that should be spent on the five pages that convert.',
  },
  {
    title: 'Set canonical tags and single-hop 301 redirects',
    body: 'Old URLs, tracking parameters, and www variants split your signals across duplicates. Write a redirect map, ship each 301 redirect as one hop, and put a self-referencing canonical tag on everything that stays.',
  },
  {
    title: 'Keep your name, address, and phone identical everywhere',
    body: 'Directories copy each other, so one wrong suite number spreads. If most of your customers come from the map pack, this is where the depth lives and it is worth going further than this list does.',
  },
  {
    title: 'Track what the phone call was worth',
    body: 'A tracking number through a service like Twilio, or simply asking every caller how they found you and writing it down. Either beats guessing. SEO you cannot attribute is SEO you will cancel in month four.',
  },
  {
    title: 'Publish one useful thing a month, not ten thin ones',
    body: 'Depth on a narrow topic builds topical authority faster than volume across a wide one. One page that genuinely answers a buying question outranks five that skim it.',
  },
  {
    title: 'Watch what happens after the click',
    body: 'A heatmap and one session recording usually explain a page that gets traffic and no calls faster than another round of A/B testing. That is CRO, and it is often worth more than the next ranking.',
  },
];

const SMB_SYSTEMS = [
  {
    name: 'Google Business Profile',
    body: 'Categories, services, hours, photos, posts, and Q and A. Google’s help documentation states that complete, accurate information makes a business more likely to appear in local results, and it is still the cheapest visibility a small business owns.',
  },
  {
    name: 'Google Search Console',
    body: 'Which queries you already surface for, which pages are indexed, and which Google decided to drop. Every technical SEO audit we run starts here, and on larger sites we add log file analysis when pages are not being crawled at all.',
  },
  {
    name: 'Google Analytics 4 and Google Tag Manager',
    body: 'GA4 is where calls, form submits, and WhatsApp taps land as named events, fired through Google Tag Manager. Where the site allows it we move to server-side tracking with consent mode, so your first-party data survives browser changes.',
  },
  {
    name: 'Looker Studio',
    body: 'The monthly report is a Looker Studio view built on your own GA4 and Search Console data. You keep access. We do not invent a proprietary score, because a number only we can calculate is a number you cannot check.',
  },
  {
    name: 'Bing Webmaster Tools',
    body: 'Free, quick to verify, and it feeds answer engines that do not crawl Google. Small traffic, small effort, and it costs you an afternoon once.',
  },
  {
    name: 'Your website platform',
    body: 'Most small business sites run on WordPress, Shopify, WooCommerce, Squarespace, or Wix. We work in whichever one you have. Where we rebuild, it is Next.js with static site generation and edge caching on Cloudflare, so the CDN does the work instead of a caching plugin.',
  },
  {
    name: 'Review platforms',
    body: 'Google reviews first, then the ones your industry actually reads. If you sell products, review apps such as Yotpo or Judge.me collect a separate stream from your Google reviews, so do not let anyone report them as one number.',
  },
  {
    name: 'The tools already on your invoice',
    body: 'Review requests and lead follow-up usually run through what you already pay for, whether that is Mailchimp, HubSpot, or a Twilio number. If you have none of it, n8n, Zapier, or Make.com will wire the request flow for close to nothing.',
  },
];

const REPORT_LINES = [
  'Calls and form submits, counted as GA4 events rather than estimated',
  'Which queries brought them, pulled from Google Search Console',
  'Pages that gained or lost impressions this month, and what we changed',
  'Review count, average rating, and how many we responded to',
  'Core Web Vitals field data on the pages that matter, not a one-off Lighthouse score',
  'What we are doing next month, and why that and not something else',
];

const APPROACH_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Doing it yourself' },
  { label: 'A low-cost SEO tool' },
  { label: 'A local freelancer' },
  { label: 'A full agency retainer' },
] as const;

const APPROACH_ROWS = [
  {
    feature: 'Who does the work',
    values: [
      'The founder scopes it and stays on the account',
      'You, in the hours left after running the business',
      'Software. It reports, it does not fix anything',
      'One person, usually good at the part they are good at',
      'An account manager, with a strategist on the kickoff call',
    ],
  },
  {
    feature: 'Best fit',
    values: [
      'An owner who wants it handled and wants to see the leads',
      'One location, a simple site, and real hours to spare',
      'Someone who already knows what to fix and needs the data',
      'A narrow, well-defined job with a clear finish line',
      'A bigger budget and a marketing lead to manage the account',
    ],
  },
  {
    feature: 'Website and technical fixes',
    values: [
      'Included. Core Web Vitals, canonical tags, 301 redirects, and internal linking',
      'Possible with a weekend and patience, harder on a page builder',
      'Flags issues, fixes none of them',
      'Depends entirely on the freelancer’s background',
      'Usually flagged in the audit and handed back to your developer',
    ],
  },
  {
    feature: 'Structured data and schema',
    values: [
      'schema.org markup shipped as JSON-LD and validated before launch',
      'A plugin gets you part of the way',
      'Detects missing structured data, writes none',
      'Sometimes, if you ask for it by name',
      'Covered, though schema markup is often the first thing dropped',
    ],
  },
  {
    feature: 'Content',
    values: [
      'Pages built around what your buyers type, published on a schedule',
      'Nobody knows your customers better. Few owners find the time',
      'Suggests topics. Writing is still yours',
      'Often the strongest thing a good freelancer offers',
      'Included, sometimes produced at volume rather than depth',
    ],
  },
  {
    feature: 'Reviews',
    values: [
      'A request flow wired through your existing tools, plus a reply on every review',
      'Works if you remember to ask. Most owners forget',
      'Monitoring and alerts. The asking stays manual',
      'Varies. Ask before you sign',
      'Usually included, occasionally an add-on',
    ],
  },
  {
    feature: 'What gets reported',
    values: [
      'Calls and form submits as GA4 events, in a Looker Studio view you keep',
      'Whatever you check yourself in Search Console and GA4',
      'Rankings, backlinks, and site errors',
      'Depends on the person. Often a monthly email',
      'Rankings and traffic, sometimes calls',
    ],
  },
  {
    feature: 'Commitment',
    values: [
      'Month to month',
      'Your own hours, which is the real cost',
      'An annual subscription in most cases',
      'Project by project, or a small monthly',
      'Six to twelve month lock-in is still common',
    ],
  },
];

export default function SmallBusinessSeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="sbseo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sbseo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="sbseo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sbseo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="sbseo">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Small business SEO services &middot; United States
              </span>
              <h1 className="rise d2">
                Small business SEO that brings you <span className="it">more customers</span>
              </h1>
              <p className="lead rise d3">
                Affordable SEO for small business owners who want calls and customers from Google, not a confusing
                report. We do the handful of things that actually move rankings, then show you the leads it brought in.
                Founder-led, month-to-month, no jargon. <b>That is the whole job.</b>
              </p>
              <HeroInlineForm region="us" source="services_small_business_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Talk to the founder
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hstat rise d5">
                <div className="s"><span className="n"><span className="star">&#9733;</span> 4.9</span><span className="l">Google review rating</span></div>
                <span className="sep" />
                <div className="s"><span className="n">500+</span><span className="l">businesses served</span></div>
                <span className="sep" />
                <div className="s"><span className="n">Month-to-month</span><span className="l">no lock-in</span></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="gcard">
                <div className="gtop">
                  <div className="gbiz"><span className="gav">B</span><span><span className="gnm">Your Business</span><br /><span className="gsub">Found on Google &middot; this quarter</span></span></div>
                  <span className="gpill">&#9650; Growing</span>
                </div>
                <div className="gchart">
                  {[34, 44, 40, 58, 66, 82, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
                </div>
                <div className="gcap"><span>Jan</span><span>Apr</span><span>Jul</span></div>
                <div className="gmetric">
                  <div className="gm"><div className="k">Calls from Google</div><div className="v">38 <small>&#9650; 2.4&times;</small></div></div>
                  <div className="gm"><div className="k">New leads / mo</div><div className="v">27 <small>&#9650;</small></div></div>
                </div>
                <div className="gfine">Illustrative growth. Results vary by business and market.</div>
              </div>
              <div className="fchip f1 float"><div className="k">New leads</div><div className="v">38</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Found on Google</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p>
              FactoryJet is a US small business SEO company that gets you found on Google and turns those searches into
              customers. We fix the website first, so pages meet the published Core Web Vitals thresholds and carry
              structured data as JSON-LD, then finish your Google Business Profile, then publish content around what
              your buyers actually search. Calls and form submits come back as GA4 events through Google Tag Manager,
              so the work is reported in leads rather than rankings. Founder-led and month-to-month.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by founders across India and the UK</div>
            <div className="logos">
              {['Belle Maison', 'Formative', 'Impulse', 'GPSUK', 'Sow Easy', 'Shevvaa'].map((n) => (
                <span key={n} style={{ whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3b. CITED NUMBERS - additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow">The numbers</div>
            <h2 style={{ marginTop: 14 }}>Four things worth knowing before you hire anyone for SEO</h2>
            <p className="dek">
              Small business SEO is sold with a lot of confident noise. These four figures come from Google and from
              published research, and each one links to the source, so you can check it instead of taking our word for
              it.
            </p>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 40 }}
            >
              {SBSEO_STATS.map((s) => (
                <div
                  key={s.value}
                  style={{ background: '#fff', border: '1px solid var(--ls-line)', borderTop: '3px solid var(--ls-orange)', borderRadius: 18, padding: 24 }}
                >
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.05, letterSpacing: '-.03em', color: 'var(--ls-orange)' }}>{s.value}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ls-n600)', marginTop: 12 }}>{s.label}</p>
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--ls-orange-d)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true"><path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {s.sourceLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PILLAR TRIAD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 700 }}>
            <h2>From invisible on Google to <span className="it">booked solid</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              Small business SEO is really three jobs. We do all three and report the only one that pays your bills:
              customers.
            </p>
          </div>
          <div className="wrap">
            <div className="triad">
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg></div>
                <h3>Get found</h3>
                <p className="sub">We fix your site and Google listing so you show up when nearby customers search what you sell, including &ldquo;near me.&rdquo;</p>
                <span className="wd">Website + local setup</span>
              </div>
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" strokeLinejoin="round" /></svg></div>
                <h3>Get the click</h3>
                <p className="sub">Titles, reviews, and pages that make people pick you over the other results, not just see you.</p>
                <span className="wd">Titles + reviews + pages</span>
              </div>
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <h3>Get the customer</h3>
                <p className="sub">Clear calls-to-action and fast pages turn that click into a call, a form, or a sale you can count.</p>
                <span className="wd">Conversion + speed</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow">What&rsquo;s included</div>
            <h2 style={{ marginTop: 14 }}>Everything in your <span className="it">small business SEO</span> plan</h2>
            <p className="dek">
              No confusing SEO packages with filler line items. One focused plan around what grows a small business,
              scoped to your budget.
            </p>
            <div className="bento2">
              <div className="tile feat">
                <span className="badge">Where we start</span>
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg></div>
                <div className="kk">Foundation</div>
                <h3>Website &amp; on-page SEO</h3>
                <p>We make your site fast, crawlable, and built around the searches your customers actually type, so Google can rank you and visitors convert. That means Core Web Vitals measured on a phone, structured data shipped as JSON-LD, a clean canonical tag on every page, and internal linking that passes authority where it is needed. This is the foundation every small business SEO plan is built on.</p>
                <div className="impact">Impact on leads <span className="bar"><i style={{ width: '94%' }} /></span> High</div>
              </div>
              <div className="tile">
                <div className="ic ic-g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-6-5.7-6-10a6 6 0 0112 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg></div>
                <div className="kk">Get found nearby</div>
                <h3>Google listing &amp; local</h3>
                <p>Your Google Business Profile tuned so you appear in local and &ldquo;near me&rdquo; searches.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3" strokeLinecap="round" /></svg></div>
                <div className="kk">Compounding growth</div>
                <h3>Content &amp; keywords</h3>
                <p>Pages and posts that answer buyer questions and pull in steady, free traffic month after month.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Plain-English proof</div>
                <h3>Reporting in leads, not rankings</h3>
                <p>A monthly report tied to calls, form fills, and sales, built from your own GA4 and Google Search Console data in a Looker Studio view you keep. You always know what your SEO marketing is actually earning. No vanity rankings nobody acts on.</p>
              </div>
            </div>
          </div>
        </section>

    

        {/* 5b. THE OWNER CHECKLIST - additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow">How it actually works</div>
            <h2 style={{ marginTop: 14 }}>The 18 checks we run first, in the order we run them</h2>
            <p className="dek">
              This is our own working order, published in full. Run it yourself and you will be better off than most
              small businesses in your market. Hire us and you get the same list done properly, faster, and measured.
              Either way it is the list you can hold any SEO company to.
            </p>
            <ol style={{ listStyle: 'none', margin: '40px 0 0', padding: 0, display: 'grid', gap: 12, maxWidth: 860 }}>
              {OWNER_CHECKLIST.map((c, i) => (
                <li
                  key={c.title}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--ls-line)', borderRadius: 14, padding: '18px 20px' }}
                >
                  <span style={{ flexShrink: 0, fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 18, width: 34, height: 34, lineHeight: '34px', textAlign: 'center', borderRadius: 10, background: 'var(--ls-orange-soft)', color: 'var(--ls-orange-d)' }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ls-ink)' }}>{c.title}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ls-n600)', marginTop: 4 }}>{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div style={{ maxWidth: 760, marginTop: 40 }}>
              <p className="dek" style={{ maxWidth: 760 }}>
                Item one deserves a footnote, because it is the only free thing on the list that Google itself
                comments on. Google’s{' '}
                <a href={GOOGLE_PROFILE_RANKING} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                  Business Profile ranking documentation
                </a>{' '}
                says local results are based mainly on relevance, distance, and prominence, and that businesses with
                complete and accurate information are more likely to show up. Finishing your profile is an afternoon
                of work with no invoice attached.
              </p>
              <p className="dek" style={{ maxWidth: 760, marginTop: 16 }}>
                Most of this overlaps with our wider{' '}
                <Link href="/services/seo" style={LINK_STYLE}>SEO services</Link>, because small business SEO is
                ordinary SEO with a smaller budget and less patience for busywork. The{' '}
                <Link href="/services/seo-audit" style={LINK_STYLE}>free SEO audit</Link> runs this exact list and
                hands you the findings whether or not you hire us. If most of your customers arrive through the map
                pack and &ldquo;near me&rdquo; searches, the deeper work sits on{' '}
                <Link href="/services/local-seo" style={LINK_STYLE}>local SEO</Link> instead, and if you sell products
                online, the category and product side lives on{' '}
                <Link href="/services/ecommerce-seo" style={LINK_STYLE}>ecommerce SEO</Link>, where a clean product
                feed into Google Merchant Center and an abandoned cart flow usually matter more than another blog
                post.
              </p>
              <p className="dek" style={{ maxWidth: 760, marginTop: 16 }}>
                Because buyers now ask ChatGPT and Google’s AI answers the same questions they used to type into a
                search box, the structured data, reviews, and plain answers built here are the same signals that feed{' '}
                <Link href="/services/ai-seo" style={LINK_STYLE}>AI SEO</Link> and{' '}
                <Link href="/services/generative-engine-optimization" style={LINK_STYLE}>AI search optimization</Link>.
                And when the real bottleneck is the site rather than the SEO, we say so: that is a{' '}
                <Link href="/services/web-design" style={LINK_STYLE}>web design</Link> job, and for owners starting
                from nothing,{' '}
                <Link href="/services/small-business-website-design" style={LINK_STYLE}>small business website design</Link>{' '}
                comes before any of this. Billing you for another month of tuning a site that cannot be tuned is not a
                service.
              </p>
              <p className="dek" style={{ maxWidth: 760, marginTop: 16 }}>
                Where the competitor set and the review bar differ enough to change the plan, we publish a
                metro-specific SEO page:{' '}
                <Link href="/austin/seo" style={LINK_STYLE}>Austin</Link>,{' '}
                <Link href="/dallas/seo" style={LINK_STYLE}>Dallas</Link>,{' '}
                <Link href="/chicago/seo" style={LINK_STYLE}>Chicago</Link>,{' '}
                <Link href="/los-angeles/seo" style={LINK_STYLE}>Los Angeles</Link>,{' '}
                <Link href="/boston/seo" style={LINK_STYLE}>Boston</Link>,{' '}
                <Link href="/phoenix/seo" style={LINK_STYLE}>Phoenix</Link>,{' '}
                <Link href="/san-diego/seo" style={LINK_STYLE}>San Diego</Link>, and{' '}
                <Link href="/las-vegas/seo" style={LINK_STYLE}>Las Vegas</Link>. Start there if you are in one of
                them.
              </p>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want to know what is actually stopping you?'}
          sub={'Send your site and the terms you want. We will show you the real gap and what closes it, with no retainer pitch.'}
          label={'Get a free SEO review'}
        />

        {/* 5c. FIVE APPROACHES - additive pass 2026-08-13 */}
        <ComparisonTable
          eyebrow="How the options compare"
          headline="Five honest ways to get this done, including not hiring us"
          lead={
            'We are one of five workable options here, not the only one. With a simple site, one location, and real hours to spare, doing it yourself genuinely works, and the checklist above is the whole method. A tool solves the measuring and none of the fixing. A good freelancer is excellent at the thing they are good at and quiet about the rest. A full agency retainer buys you a team you have to manage. Find the row that matters most to you and decide on that row.'
          }
          columns={APPROACH_COLUMNS}
          rows={APPROACH_ROWS}
          footer={
            'Columns describe the typical shape of each option as of 2026, not a scorecard. Freelancers and agencies vary enormously, so ask every one of them the same questions this table answers, us included.'
          }
        />

        {/* 5d. INTERACTIVE OPPORTUNITY ESTIMATOR */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive Revenue & Ranking Estimator
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Estimate Your Small Business SEO Opportunity
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Calculate estimated local search traffic volume, organic lead pipeline value, and return on investment for your market.
              </p>
            </div>
            <LocalSeoOpportunityEstimator region="us" />
          </div>
        </section>

        {/* 6. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2>Founder-led vs a big agency vs <span className="it">the cheap freelancer</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              How an honest small business SEO agency compares to the alternatives most owners weigh.
            </p>
          </div>
          <div className="wrap">
            <div className="score">
              <div className="score-grid">
                <div className="col lab hidem">
                  <div className="ch">What you get</div>
                  {SCORE_ROWS.map((r) => <div key={r} className="row">{r}</div>)}
                </div>
                <div className="col win">
                  <div className="ch">FactoryJet</div>
                  {SCORE_FJ.map((v) => <div key={v} className="row"><Check /> {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Big agency</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Cheap freelancer</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6b. NAMED SYSTEMS - additive pass 2026-08-13 */}
        <section>
          <div className="wrap">
            <div className="eyebrow">Where the work happens</div>
            <h2 style={{ marginTop: 14 }}>The systems your visibility <span className="it">actually runs on</span></h2>
            <p className="dek">
              Small business SEO is not one dashboard. Your visibility sits across a handful of accounts that do not
              talk to each other, and the gaps between them are where rankings and leads leak. Here is each one, and
              what it is for.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14, marginTop: 40 }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
                {SMB_SYSTEMS.slice(0, 4).map((s) => (
                  <li key={s.name} style={{ background: '#fff', border: '1px solid var(--ls-line)', borderLeft: '3px solid var(--ls-orange)', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ls-ink)' }}>{s.name}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ls-n600)', marginTop: 4 }}>{s.body}</p>
                  </li>
                ))}
              </ul>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
                {SMB_SYSTEMS.slice(4).map((s) => (
                  <li key={s.name} style={{ background: '#fff', border: '1px solid var(--ls-line)', borderLeft: '3px solid var(--ls-orange)', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ls-ink)' }}>{s.name}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ls-n600)', marginTop: 4 }}>{s.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <h3 style={{ marginTop: 52, fontSize: 22 }}>On the site itself, it is a technical SEO audit before it is anything clever</h3>
            <p className="dek" style={{ marginTop: 10, maxWidth: 760 }}>
              Every page we touch gets schema.org structured data written as JSON-LD, a self-referencing canonical
              tag, a single-hop 301 redirect for anything retired, and internal linking from the pages that already
              carry authority. Pages are held to the published{' '}
              <a href={WEB_DEV_VITALS} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                Core Web Vitals thresholds
              </a>{' '}
              on a phone, so Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift are
              measured on field data from real visits rather than one Lighthouse run on a fast laptop. We run an
              accessibility audit against WCAG at the same time, because a page a screen reader cannot use is a page
              some of your customers cannot use either.
            </p>
            <p className="dek" style={{ marginTop: 16, maxWidth: 760 }}>
              Where a rebuild or a replatforming is involved, the url mapping and the redirect map get written before
              anything moves, not after somebody notices the calls stopped. On bigger sites we add log file analysis
              and content pruning, because crawl budget spent on ten near-identical pages is crawl budget not spent on
              the five that convert. And when a page gets traffic but no calls, a heatmap and one session recording
              answer it faster than another round of A/B testing.
            </p>
            <p className="dek" style={{ marginTop: 16, maxWidth: 760 }}>
              On timing, we quote Google rather than ourselves. Its{' '}
              <a href={GOOGLE_STARTER_GUIDE} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                SEO Starter Guide
              </a>{' '}
              says some changes take a few hours to show up in Search and others take several months, and it suggests
              waiting a few weeks before judging the effect. That matches what we tell owners on the first call, and
              it is why the engagement is month to month rather than a year of faith.
            </p>

            <h3 style={{ marginTop: 52, fontSize: 22 }}>What lands in your inbox each month</h3>
            <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'grid', gap: 10, maxWidth: 760 }}>
              {REPORT_LINES.map((r) => (
                <li key={r} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.55, color: 'var(--ls-n600)' }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
                    <circle cx="10" cy="10" r="9" fill="#0C7150" />
                    <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: 'var(--ls-n400)', marginTop: 18, maxWidth: 760 }}>
              Reports are assembled from your own Google Business Profile, Google Search Console, and GA4 data, in a
              Looker Studio view you keep access to. There is no proprietary metric, because a number only we can
              calculate is a number you cannot check.
            </p>
          </div>
        </section>

        {/* 7. PERSONAS */}
        <section className="ind">
          <div className="wrap">
            <h2>Built for owners <span className="it">like you</span></h2>
            <p className="dek">
              Small business SEO services tuned to how your specific customers search and buy.
            </p>
            <div className="ind-grid">
              {PERSONAS.map((p) => (
                <div key={p.h} className="indcard">
                  <span className={`marker ${p.mk}`}><i /></span>
                  <div className="kk">{p.kk}</div>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. GROWTH / ROI DASHBOARD */}
        <section className="rep">
          <span className="orb" />
          <div className="wrap rep-grid">
            <div>
              <div className="eyebrow eyebrow-warm">Affordable, not cheap</div>
              <h2 style={{ marginTop: 14 }}>The best SEO for small business <span className="it">pays for itself</span></h2>
              <p className="lead">
                Affordable SEO does not mean cutting corners. It means spending your budget on the few moves that bring
                customers, and skipping the busywork agencies bill for. For most owners, one new customer a month covers
                the whole engagement, and it compounds from there.
              </p>
              <div className="cta-row">
                <ModalCTAButton label="See what fits your budget" region="us" btnVariant="primary-dark" />
              </div>
            </div>
            <div className="repcard">
              <div className="rep-top">
                <div className="rc"><div className="k">Calls from Google</div><div className="v">38</div><span className="up">&#9650; 2.4&times; in 6 months</span></div>
                <div className="rc"><div className="k">Contract</div><div className="v" style={{ fontSize: 20 }}>Month<br />to month</div></div>
              </div>
              <div className="revbars">
                <div className="k">New leads per month</div>
                <div className="bars">
                  {[30, 38, 36, 52, 64, 80, 100].map((h, idx) => (
                    <i key={idx} className={idx >= 5 ? 'hi' : undefined} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rep-fine">Illustrative example of a healthy small business growth curve. Results vary by business, market, and budget.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis">
              <div className="photo">
                <Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet small business SEO team" fill loading="lazy" sizes="(max-width: 880px) 90vw, 460px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average Google review rating</div>
            </div>
            <div>
              <h2>A small business SEO consultant, <span className="it">not a call center</span></h2>
              <p className="lead">
                I run your strategy myself, so the person who scopes your SEO is the person accountable for the calls and
                leads it earns. Returns on your time, not just your spend.
              </p>
              <ul className="feat-list">
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span><div>Founder-led strategy<small>Not handed to a junior team</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M7 14l4-4 3 3 5-6" /></svg></span><div>Affordable and results-first<small>Budget spent on what brings customers</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></span><div>500+ businesses served<small>4.9 / 5 average Google review rating</small></div></li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow">Small business SEO FAQ</div>
            <h2 style={{ marginTop: 14 }}>Questions, <span className="it">answered straight</span></h2>
            <div className="faq-wrap">
              <aside className="faq-nav">
                {FAQ_GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
              </aside>
              <div className="faq-list">
                {FAQ_GROUPS.map((g, gi) => (
                  <div className="faq-grp" id={g.id} key={g.id}>
                    <div className="faq-cat">{g.label}</div>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={gi === 0 && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-card">
              <span className="orb o1" /><span className="orb o2" />
              <div>
                <div className="eyebrow eyebrow-warm2">Free SEO audit</div>
                <h2 style={{ marginTop: 14 }}>See how to get <span className="it">more customers from Google</span></h2>
                <p className="lead">
                  Book a free SEO audit and a 20-minute call with the founder. We will show you what is holding your
                  rankings back and what to fix first. No junior reps, no pressure.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real audit, not a sales pitch</li>
                  <li><Check fill="#F05A28" /> Scoped to your budget</li>
                  <li><Check fill="#F05A28" /> 4.9 / 5 average Google review rating</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get a free SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50" style={{ borderColor: 'rgba(26,23,18,0.18)' }}>
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. Reported in leads, not rankings.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
