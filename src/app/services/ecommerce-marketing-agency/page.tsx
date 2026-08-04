import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';
import { Megaphone, Users, ShoppingCart, Mail, Film, Store, Target, Sparkles, Check } from 'lucide-react';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ecommerce-marketing-agency: US paid acquisition and marketing hub.

   Search intent owned here: "ecommerce marketing agency", "ecommerce advertising
   agency", "ecommerce ad agency", "ad agency ecommerce", "ecommerce digital
   marketing agency". PAID and OWNED channels only.

   Anti-cannibalization guards (stated in the copy, not just in comments):
     /services/ecommerce-seo            → organic search
     /services/ecommerce-growth-agency  → full funnel and CRO
     /services/ecommerce-development    → building the store
   Every section on this page frames the work as media buying, creative, feeds,
   retention, and measurement so the three pages never compete for the same query.

   Editorial rules honored: no commercial figures of any kind anywhere on the
   page, no long dashes, plain img tags, FinalCTA rather than the quote block,
   exactly one dark section, and a page-local hreflang map so no shared data
   file needs touching (those are wired centrally).
───────────────────────────────────────────────────────────────────────────── */

const URL = 'https://factoryjet.com/services/ecommerce-marketing-agency';

/* Page-local alternates. Kept here so no shared data file needs editing. */
const ALTERNATES = {
  'en-US': URL,
  'x-default': URL,
} as const;

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Ecommerce Marketing Agency for US Brands | FactoryJet',
  description:
    'FactoryJet is an ecommerce marketing and advertising agency for US brands. We run Google Ads, Meta, TikTok, marketplace ads, shopping feeds, creative, and email and SMS as one paid acquisition program measured on profit. Book a free channel audit.',
  keywords: [
    'ecommerce marketing agency',
    'ecommerce advertising agency',
    'ecommerce ad agency',
    'ad agency ecommerce',
    'ecommerce digital marketing agency',
    'ecommerce ppc agency',
    'ecommerce paid social agency',
    'ecommerce email marketing agency',
    'shopping feed management',
    'marketplace advertising agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Marketing Agency for US Brands | FactoryJet',
    description:
      'Paid search, paid social, marketplace ads, creative, and retention for US ecommerce brands. One senior in-house team, measured on profit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Ecommerce Marketing Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Marketing Agency for US Brands | FactoryJet',
    description:
      'Google Ads, Meta, TikTok, marketplace ads, creative, email and SMS. One senior in-house team, measured on profit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: ALTERNATES,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'channels', label: 'Channels & creative' },
  { key: 'measurement', label: 'Measurement & reporting' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Basics ── */
  {
    category: 'basics',
    question: 'What does an ecommerce marketing agency do?',
    answer:
      'An ecommerce marketing agency plans, buys, and optimizes the channels that bring buyers to an online store and bring them back again. In practice that means paid search, shopping feeds, paid social, marketplace and retail media ads, creative production, and email and SMS. The agency owns the demand side of your revenue: which channels get spend, what the ads say, who sees them, and what each channel returns.',
  },
  {
    category: 'basics',
    question: 'What is the difference between an ecommerce marketing agency and an ecommerce SEO agency?',
    answer:
      'A marketing or advertising agency buys attention. An SEO agency earns it. Paid work turns on and off with spend and gives you results in days. SEO compounds slowly and keeps paying after you stop. Most healthy stores run both. We keep them as separate services so you can see exactly what each one returns: paid lives on this page, organic lives on our ecommerce SEO page.',
  },
  {
    category: 'basics',
    question: 'What is an ecommerce advertising agency?',
    answer:
      'An ecommerce advertising agency is the media buying half of ecommerce marketing. It builds and runs ad accounts on Google, Meta, TikTok, Amazon, and similar platforms, produces the creative those platforms need, manages the product feed behind shopping ads, and reports on what the spend returned. Some agencies stop at the ad account. We also handle the feed, the creative, and the landing experience, because an ad is only as good as what it lands on.',
  },
  {
    category: 'basics',
    question: 'What is ecommerce development?',
    answer:
      'Ecommerce development is the work of building the store itself: the theme or storefront, the product catalog structure, checkout, payments, shipping logic, and the integrations that connect your store to inventory, accounting, and shipping systems. It is a build discipline, not a marketing one. FactoryJet does both, but they are separate services. Ecommerce development is covered on our ecommerce development page.',
  },
  {
    category: 'basics',
    question: 'What does an ecommerce developer do?',
    answer:
      'An ecommerce developer builds and maintains the technical side of an online store. Day to day that looks like building theme templates and product page layouts, wiring payment and shipping providers, connecting the store to an ERP or inventory system, building custom checkout or subscription logic, and fixing the performance and bug issues that quietly lose orders. On a marketing engagement, developers matter because landing pages, tracking, and feed structure all sit in their territory.',
  },
  {
    category: 'basics',
    question: 'What are the top 5 ecommerce companies?',
    answer:
      'By worldwide sales volume the usual names are Amazon, Alibaba, JD.com, Pinduoduo, and Walmart. In the United States the list is generally Amazon, Walmart, Apple, eBay, and Target. Those are marketplaces and giant retailers, not agencies, and they matter to you for one reason: Amazon and Walmart are also ad platforms, so the same companies you compete with are places you can buy demand.',
  },
  {
    category: 'basics',
    question: 'Do I need an ecommerce marketing agency or a general digital marketing agency?',
    answer:
      'Pick the specialist if your revenue comes from a catalog. Ecommerce has problems a generalist rarely touches: product feeds, catalog structure, promotions, returns, margin by SKU, marketplace listings, and repeat purchase behavior. A generalist optimizing for leads will optimize the wrong thing on a store. Ask any agency to explain how they would handle your feed and your margin data. The answer tells you quickly.',
  },
  {
    category: 'basics',
    question: 'Which platforms do you work with?',
    answer:
      'Shopify and Shopify Plus, Magento and Adobe Commerce, BigCommerce, and WooCommerce on the store side. On the ad side, Google Ads and Merchant Center, Meta, TikTok, Pinterest, Microsoft Advertising, Amazon Ads, and Walmart Connect. On the retention side, Klaviyo, Shopify Email, and Attentive.',
  },

  /* ── Channels & creative ── */
  {
    category: 'channels',
    question: 'Which paid channel should an ecommerce brand start with?',
    answer:
      'Almost always branded and shopping search on Google first, because that captures demand that already exists and gives you a clean read on your true baseline. Then broaden into non-branded shopping and Performance Max, then paid social for demand creation. Starting with paid social when your search coverage is leaky is the single most common way brands waste spend.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Shopping and Performance Max?',
    answer:
      'Yes, and we treat the product feed as part of the campaign rather than an afterthought. Google Performance Max campaigns reach across YouTube, Display, Search, Discover, Gmail, and Maps from one campaign, and Google uses your feed, creative assets, audience signals, and conversion values to decide what to show. That means feed quality and asset quality are the levers you actually control, so that is where we spend our time.',
  },
  {
    category: 'channels',
    question: 'Do you manage Meta and TikTok ads?',
    answer:
      'Yes. Meta and TikTok are demand creation channels: you are interrupting someone, not answering them, so the creative carries most of the weight. We run structured creative testing on hooks, formats, and offers, keep a rolling library of winners, and refresh before fatigue shows up in the numbers rather than after.',
  },
  {
    category: 'channels',
    question: 'Do you run Amazon, Walmart, and TikTok Shop advertising?',
    answer:
      'Yes. Marketplace ads behave differently from site ads: the shopper is already in buying mode, the listing is the landing page, and your competitors sit on the same screen. We coordinate marketplace ads with your own site so product listings, promotions, and creative stay consistent instead of quietly undercutting each other.',
  },
  {
    category: 'channels',
    question: 'What is retail media and does my brand need it?',
    answer:
      'Retail media is advertising you buy inside a retailer or marketplace, like sponsored product placements on Amazon or Walmart. You need it if a meaningful share of your category demand already searches inside those platforms rather than on Google. If you sell a considered, brand-led product that people search for by name, your own channels usually come first.',
  },
  {
    category: 'channels',
    question: 'Do you produce the ad creative or do we?',
    answer:
      'We produce it. Static, motion, and user generated style creative, built from a running list of angles we test rather than one hero concept everyone hopes will work. If you already have an in-house studio we plug into it and supply the briefs, the testing structure, and the read on what is winning.',
  },
  {
    category: 'channels',
    question: 'How much creative does a paid social account actually need?',
    answer:
      'More than most brands expect and fewer polished pieces than they think. What matters is variety of angle, not volume of assets. A small set of genuinely different hooks, offers, and formats beats a large set of the same idea in different colors. We keep a rolling test slate so there is always a next concept ready when a winner fatigues.',
  },
  {
    category: 'channels',
    question: 'Is email and SMS part of ecommerce marketing or is that separate?',
    answer:
      'It is part of it, and it is usually the fastest thing to fix. Paid brings a buyer once. Flows bring them back. Welcome, browse abandonment, cart abandonment, post purchase, replenishment, and win back sequences do the quiet compounding work that lifts what each customer is worth over their lifetime, which is what makes paid acquisition sustainable at all.',
  },
  {
    category: 'channels',
    question: 'Do you handle the product feed and Merchant Center?',
    answer:
      'Yes. Feed work is unglamorous and it is where a lot of shopping performance is decided: titles that match how people search, correct product types and GTINs, clean images, accurate availability attributes, and supplemental feeds for the fields your platform does not export cleanly. A great bidding strategy on a bad feed still loses.',
  },
  {
    category: 'channels',
    question: 'Can you improve the landing pages our ads point to?',
    answer:
      'Yes, and we usually have to. Sending paid traffic to a generic collection page is a common leak. We build and iterate on the pages behind the ads so the promise in the creative matches the first screen the visitor sees. Deeper conversion rate work across the whole site sits with our ecommerce growth service.',
  },

  /* ── Measurement & reporting ── */
  {
    category: 'measurement',
    question: 'How do you measure whether the marketing is working?',
    answer:
      'Three layers. Platform metrics tell us how a campaign is behaving. Blended numbers across all channels tell us whether the whole program is working. Contribution, meaning what is left after product, shipping, payment fees, and media come out, tells us whether it is worth doing at all. If a channel looks good in the platform and bad in the blended view, we trust the blended view.',
  },
  {
    category: 'measurement',
    question: 'What is ROAS and why do you say it is not enough on its own?',
    answer:
      'ROAS is return on ad spend: revenue attributed to a channel divided by what you spent there. It is useful and it is easy to flatter. Retargeting and branded search will always look excellent because they harvest demand other channels created. Judge the program on blended performance and on contribution, then use channel ROAS to decide where the next dollar goes inside that program.',
  },
  {
    category: 'measurement',
    question: 'How do you handle attribution when every platform claims the same sale?',
    answer:
      'We expect the double counting and plan for it. Platform reporting is directional, not truth. Google Ads data driven attribution distributes credit across the interactions on a conversion path instead of giving everything to the last click, and Google notes it works best once an account has enough conversion volume to model, so smaller accounts need extra caution. On top of that we watch blended performance, run holdouts where the spend justifies it, and ask new customers how they found you.',
  },
  {
    category: 'measurement',
    question: 'Do you set up GA4 and conversion tracking?',
    answer:
      'Yes, and we audit it before we touch a campaign. Broken or duplicated conversion events are the most common reason an account looks unfixable. We verify server side and browser side events, deduplicate them, confirm purchase values match the platform, and only then start optimizing.',
  },
  {
    category: 'measurement',
    question: 'What does reporting look like and how often do we get it?',
    answer:
      'A live dashboard you can open any time, a short written note each week on what changed and why, and a longer monthly review that covers what we learned, what we are killing, and what we are trying next. Plain language, no vanity charts, no slide decks built to impress rather than inform.',
  },
  {
    category: 'measurement',
    question: 'How long before we see results from paid ads?',
    answer:
      'Tracking fixes and account structure cleanups can move numbers within the first few weeks. Creative testing needs a full cycle of learning before you can trust it. Retention flows compound quietly from the moment they launch. The honest answer is that early signal comes fast and durable signal takes a quarter.',
  },
  {
    category: 'measurement',
    question: 'What happens if a channel is not working?',
    answer:
      'We say so and we cut it. There is a version of this business where an agency keeps a losing channel alive because it is billable. We would rather concentrate spend where it returns and tell you plainly that something did not work, because the alternative gets found out anyway.',
  },

  /* ── Working together ── */
  {
    category: 'working',
    question: 'What happens in month one?',
    answer:
      'Week one is diagnosis: account structure, tracking accuracy, feed health, creative library, and retention flows. Week two you get a prioritized plan with the reasoning attached. Weeks three and four we ship the highest impact fixes, launch the first test slate, and set the reporting rhythm. You should be able to see what changed and why by the end of it.',
  },
  {
    category: 'working',
    question: 'What determines the scope of an ecommerce marketing engagement?',
    answer:
      'Scope is driven by how many channels you want live, how large and how complex your catalog is, how much creative volume the channels need, whether marketplaces are in play, how much tracking and feed remediation the account needs first, and whether landing page work is included. We map those factors to your goals and put the scope in writing before anything starts.',
  },
  {
    category: 'working',
    question: 'Should we hire an agency or build an in-house team?',
    answer:
      'In-house wins on context and availability. An agency wins on breadth and on pattern recognition across many accounts. The practical answer for most small and mid sized brands is an agency running the channels while one internal owner holds strategy and brand. Bringing it in-house makes more sense once your spend is large enough to justify a full specialist per channel.',
  },
  {
    category: 'working',
    question: 'Who will actually work on our account?',
    answer:
      'FactoryJet senior in-house specialists. The people in your kickoff are the people in your ad accounts. We do not run a model where a senior team sells the work and a junior pod delivers it, which is a large part of why clients stay.',
  },
  {
    category: 'working',
    question: 'Do we have to sign a long contract?',
    answer:
      'No. We work on short rolling terms and earn the renewal with results. If a bigger build is bundled into the engagement we scope that separately and clearly up front so nothing is a surprise later.',
  },
  {
    category: 'working',
    question: 'Do you work with brands that already have an agency?',
    answer:
      'Often, yes. Sometimes that starts as a second opinion on account health, sometimes it is a specific channel your current partner does not cover, like marketplaces or feed management. We will tell you honestly if your existing setup is in good shape, because pretending otherwise is a bad way to start a relationship.',
  },
  {
    category: 'working',
    question: 'What size ecommerce brands do you work with?',
    answer:
      'Mostly US small and mid market brands: stores that have proven the product and are ready to put real weight behind acquisition, through to established brands scaling across several channels and marketplaces. We size the engagement to your stage rather than pushing one standard package at everyone.',
  },
  {
    category: 'working',
    question: 'Do we own our ad accounts and data?',
    answer:
      'Always. We work inside your accounts, your Merchant Center, your analytics, and your email platform. If we ever part ways you keep every account, every audience, every creative asset, and every piece of historical data. Agencies that hold accounts hostage are telling you something about their confidence in the work.',
  },
  {
    category: 'working',
    question: 'How do we get started?',
    answer:
      'Send us your store URL and your email and we will run a free channel audit: account structure, tracking, feed, creative, and retention flows, with a prioritized plan you keep whether or not you work with us. No long sales cycle and no pressure.',
  },
];

/* ── Listicle data ────────────────────────────────────────────────────────── */
const CHANNEL_LADDER = [
  {
    b: 'Branded and shopping search',
    p: 'Start where demand already exists. Branded search protects the customers you have earned, and shopping search puts your product in front of people who typed the thing you sell.',
  },
  {
    b: 'Non-branded shopping and Performance Max',
    p: 'Once the feed is clean and tracking is trustworthy, widen into cold shopping demand. This is where feed quality stops being a technical detail and starts being the campaign.',
  },
  {
    b: 'Paid social for demand creation',
    p: 'Meta and TikTok reach people who were not looking for you. Creative carries the result here, so this step only makes sense once you can produce and test a real slate of angles.',
  },
  {
    b: 'Retargeting, sized honestly',
    p: 'Retargeting always looks excellent and rarely creates demand. Keep it, keep it small, and never let its flattering numbers set the strategy for the whole account.',
  },
  {
    b: 'Email and SMS retention',
    p: 'Welcome, cart, browse, post purchase, replenishment, and win back flows. This is the layer that makes everything above it viable, because it lifts what a customer is worth over time.',
  },
  {
    b: 'Marketplace and retail media',
    p: 'Amazon, Walmart Connect, and TikTok Shop ads reach buyers already in checkout mode. Worth adding when your category has real search volume inside those platforms.',
  },
  {
    b: 'Upper funnel and brand',
    p: 'YouTube, creators, and broad reach campaigns. These belong last, when the measured channels are healthy and you need a bigger pool of demand to keep scaling.',
  },
];

const HIRING_CHECKS = [
  {
    b: 'They audit tracking before they touch a campaign',
    p: 'If the first conversation is about creative and not about whether your conversion data is trustworthy, they are about to optimize toward numbers that are wrong.',
  },
  {
    b: 'They report on blended performance, not just platform ROAS',
    p: 'Ask what happened to total revenue during their last engagement, not what the ad platform claimed. The gap between those two answers is the whole story.',
  },
  {
    b: 'They own the product feed',
    p: 'Shopping performance is decided in the feed as much as in the bidding. An agency that treats the feed as your problem is handing you half a service.',
  },
  {
    b: 'They produce creative in volume, with a system',
    p: 'Paid social is a creative testing business now. Ask to see how they generate angles and how they decide what wins, not just a reel of pretty assets.',
  },
  {
    b: 'You keep the accounts',
    p: 'Your ad accounts, Merchant Center, analytics, and email platform stay in your name. No exceptions, no matter how it is framed.',
  },
  {
    b: 'They will tell you when a channel is not worth it',
    p: 'An agency that has never recommended cutting a channel is either extraordinarily lucky or is optimizing for its own retention rather than your profit.',
  },
];

const AGENCY_ALTERNATIVES = [
  {
    b: 'Tinuiti',
    p: 'A large independent performance marketing agency with deep retail media and marketplace practice. Strong fit for brands with enterprise scale spend and internal marketing teams to match.',
  },
  {
    b: 'Common Thread Collective',
    p: 'A well regarded direct to consumer paid media shop with a rigorous forecasting framework, especially in the Shopify world. Excellent on acquisition, narrower on the store and marketplace side.',
  },
  {
    b: 'Disruptive Advertising',
    p: 'A recognized paid search and conversion optimization agency managing significant ad spend. Strong on ads and testing, lighter on feed engineering, marketplaces, and store development.',
  },
  {
    b: 'Where FactoryJet fits',
    p: 'One senior in-house team running paid search, paid social, feeds, creative, marketplaces, and retention, with store development in the same building. Built for small and mid market brands rather than enterprise scale engagements.',
  },
];

const CHANNELS = [
  {
    Icon: Megaphone,
    title: 'Paid search & shopping',
    body: 'Google Ads and Microsoft Advertising: branded protection, non-branded shopping, Performance Max, and the Merchant Center feed that decides how any of it performs.',
    link: '/services/ecommerce-seo',
    label: 'How paid and organic search fit together',
    span: 'w3',
  },
  {
    Icon: Users,
    title: 'Paid social',
    body: 'Meta, TikTok, and Pinterest run as a creative testing program rather than a set of campaigns. New angles ship on a schedule, not when performance has already dipped.',
    link: '/contact',
    label: 'See the creative process',
    span: 'w3',
  },
  {
    Icon: ShoppingCart,
    title: 'Marketplace ads',
    body: 'Amazon, Walmart Connect, and TikTok Shop, coordinated with your own store.',
    link: '/services/ecommerce-development',
    label: 'Marketplace setup',
    span: 'cell',
  },
  {
    Icon: Mail,
    title: 'Email & SMS retention',
    body: 'Klaviyo and Shopify Email flows that win the second order without buying the customer twice.',
    link: '/contact',
    label: 'Retention playbook',
    span: 'cell',
  },
  {
    Icon: Film,
    title: 'Creative production',
    body: 'Static, motion, and creator style assets, briefed from what the data says is working.',
    link: '/contact',
    label: 'Creative testing',
    span: 'cell',
  },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'Account structure, tracking accuracy, feed health, creative library, and retention flows. We find what is broken before we spend anything.' },
  { n: 'Step 02', h: 'Fix the floor', p: 'Conversion tracking, feed remediation, and account structure first. Optimizing toward numbers that are wrong is the fastest way to waste a quarter.' },
  { n: 'Step 03', h: 'Launch and test', p: 'Channels go live in a deliberate order with a creative test slate behind each one. Every test has a hypothesis and a read date.' },
  { n: 'Step 04', h: 'Scale what returns', p: 'Concentrate spend where contribution is real, cut what is not working, and keep the next test slate ready before the current winner fatigues.' },
];

const STATS = [
  {
    v: '16.9%',
    l: 'of all US retail sales happened online in the first quarter of 2026, according to the Census Bureau. Your category is competing for that share whether you advertise or not.',
    src: 'US Census Bureau, Q1 2026',
    href: 'https://www.census.gov/retail/ecommerce.html',
  },
  {
    v: '9.8%',
    l: 'year over year growth in US ecommerce sales in the first quarter of 2026. Demand keeps expanding, and so does the number of brands bidding to reach it.',
    src: 'US Census Bureau, Q1 2026',
    href: 'https://www.census.gov/retail/ecommerce.html',
  },
  {
    v: '6',
    l: 'Google surfaces a single Performance Max campaign can appear across: YouTube, Display, Search, Discover, Gmail, and Maps. One campaign type, six places your feed and creative have to hold up.',
    src: 'Google Ads Help',
    href: 'https://support.google.com/google-ads/answer/10724817',
  },
];

const RELATED = [
  { href: '/services/ecommerce-seo', t: 'Ecommerce SEO', p: 'Organic rankings for collection and product pages. The compounding half of search.' },
  { href: '/services/ecommerce-growth-agency', t: 'Ecommerce growth agency', p: 'Full funnel work including conversion rate optimization and lifetime value.' },
  { href: '/services/ecommerce-development', t: 'Ecommerce development', p: 'Building, replatforming, and integrating the store itself.' },
  { href: '/services/shopify-development', t: 'Shopify development', p: 'Shopify and Shopify Plus builds, themes, apps, and custom checkout work.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Ecommerce Marketing Agency',
  serviceType: 'Ecommerce marketing and advertising',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is an ecommerce marketing and advertising agency for US brands, running paid search and shopping, paid social, marketplace and retail media ads, product feed management, ad creative production, and email and SMS retention as one paid acquisition program measured on contribution profit.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ecommerce marketing services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads and Google Shopping management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid social advertising on Meta and TikTok' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketplace and retail media advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product feed and Merchant Center management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce ad creative production and testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email and SMS retention marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce conversion tracking and attribution setup' } },
    ],
  },
};

/* FAQPage schema derived FROM the FAQ items array so the two can never drift. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const channelListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${URL}#channel-ladder`,
  name: 'The paid channel ladder for ecommerce brands',
  description: 'The order FactoryJet recommends US ecommerce brands turn on paid and owned marketing channels.',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: CHANNEL_LADDER.length,
  itemListElement: CHANNEL_LADDER.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.b,
    description: c.p,
  })),
};

const agencyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${URL}#agency-alternatives`,
  name: 'Ecommerce marketing agencies US brands commonly compare',
  numberOfItems: AGENCY_ALTERNATIVES.length,
  itemListElement: AGENCY_ALTERNATIVES.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.b,
    description: a.p,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: 'Ecommerce Marketing Agency for US Brands',
  description:
    'What an ecommerce marketing agency does, which paid and owned channels to turn on and in what order, how to measure them honestly, and how to choose a partner.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
  about: { '@id': `${URL}#service` },
  primaryImageOfPage: { '@type': 'ImageObject', url: 'https://factoryjet.com/images/us/shared/factoryjet-audit-call.webp' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#page-title'],
  },
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder, FactoryJet' },
};

/* ── Shared inline style fragments ───────────────────────────────────────── */
const WRAP = 'mx-auto w-full max-w-[1120px] px-5 sm:px-6 md:px-8';
const CARD =
  'relative rounded-2xl border border-[#EAEAE3] bg-white shadow-[0_18px_40px_-30px_rgba(20,20,35,0.34),0_2px_6px_-3px_rgba(20,20,35,0.07)]';
const EYEBROW = 'font-fj-mono text-[12px] font-semibold uppercase tracking-[0.13em] text-[#B23E13]';
const H2 = 'font-fj-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.022em] text-[#141414]';

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#B23E13' }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#8a5e00' }}>{t}</span>;

/* ── Small building blocks ───────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mb-8 max-w-[64ch] md:mb-12">
      <span className={EYEBROW}>{eyebrow}</span>
      <h2 className={`mt-3 ${H2}`}>{title}</h2>
      {lead && <p className="mt-3.5 font-fj-body text-[16.5px] leading-[1.6] text-[#4A4A45]">{lead}</p>}
    </div>
  );
}

function NumberedItem({ i, b, p }: { i: number; b: string; p: string }) {
  return (
    <div className={`${CARD} flex gap-4 p-5 sm:p-6`}>
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] font-fj-display text-[14px] font-extrabold"
        style={{ background: 'rgba(240,90,40,0.09)', color: '#B23E13' }}
        aria-hidden="true"
      >
        {String(i).padStart(2, '0')}
      </span>
      <div>
        <b className="font-fj-display text-[16.5px] font-bold leading-snug text-[#141414]">{b}</b>
        <p className="mt-1.5 font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">{p}</p>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function EcommerceMarketingAgencyPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, webPageSchema, channelListSchema, agencyListSchema]} id="ema-schema" />
      <JsonLd data={faqSchema} id="ema-faq-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Marketing Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="bg-white font-fj-body text-[#141414]">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Marketing Agency', url: URL },
        ]} />
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden border-b border-[#EAEAE3] py-12 md:py-16"
          style={{
            backgroundImage: [
              'radial-gradient(circle 420px at -40px -60px, rgba(240,90,40,0.13) 0%, rgba(240,90,40,0.045) 55%, transparent 72%)',
              'radial-gradient(circle, rgba(15,15,18,0.05) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '100% 100%, 22px 22px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div className={`${WRAP} grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12`}>
            <div>
              <span
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-fj-body text-[13px] font-semibold"
                style={{ color: '#B23E13', border: '1px solid rgba(240,90,40,0.28)', background: 'rgba(240,90,40,0.08)' }}
              >
                <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                Ecommerce Marketing Agency · United States
              </span>

              <h1
                id="page-title"
                className="max-w-[19ch] font-fj-display text-[clamp(1.85rem,3.6vw,2.6rem)] font-extrabold leading-[1.06] tracking-[-0.028em] text-[#141414]"
              >
                The ecommerce marketing agency that makes paid channels{' '}
                <span style={{ color: '#B23E13' }}>pay for themselves</span>
              </h1>

              <p className="mt-4 max-w-[46ch] font-fj-body text-[clamp(15.5px,1.5vw,17.5px)] leading-[1.6] text-[#3A3A38]">
                Google Ads, Meta, TikTok, marketplace ads, product feeds, creative, and email and SMS. One senior in-house
                team, one plan, and reporting that answers the only question that matters: did this make you money?
              </p>

              <div className="mt-6">
                <HeroInlineForm region="us" source="us_services_ecommerce_marketing_hero" submitLabel="Get my free channel audit" />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-fj-body text-[13px] text-[#4A4A45]">
                <span className="inline-flex items-center gap-1.5">
                  <Check size={15} strokeWidth={2.4} color="#B23E13" aria-hidden="true" /> 500+ commerce projects shipped
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check size={15} strokeWidth={2.4} color="#B23E13" aria-hidden="true" /> 12 years in commerce
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check size={15} strokeWidth={2.4} color="#B23E13" aria-hidden="true" /> You keep every ad account
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[20px] border border-[#EAEAE3] shadow-[0_30px_60px_-34px_rgba(20,20,30,0.5)]">
                <img
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="A FactoryJet marketing specialist reviewing ecommerce ad account performance with a client"
                  width={1536}
                  height={1024}
                  className="block h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Channel mix chip. Illustrative label only, not a client claim. */}
              <div
                className="absolute bottom-3.5 left-3.5 rounded-[14px] border border-white/70 px-3.5 py-2.5 shadow-[0_10px_26px_-12px_rgba(20,20,30,0.42)]"
                style={{ background: 'rgba(255,255,255,0.92)' }}
              >
                <span className="mb-1.5 block font-fj-mono text-[10.5px] uppercase tracking-[0.05em] text-[#4A4A45]">
                  Channels we run
                </span>
                <span className="flex flex-wrap gap-1.5">
                  {['Search', 'Shopping', 'Social', 'Marketplace', 'Email'].map((c) => (
                    <span
                      key={c}
                      className="rounded-full px-2 py-0.5 font-fj-mono text-[10.5px] font-semibold"
                      style={{ color: '#B23E13', background: 'rgba(240,90,40,0.10)', border: '1px solid rgba(240,90,40,0.22)' }}
                    >
                      {c}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANSWER FIRST (BLUF) ──────────────────────────────────────────── */}
        <section id="answer-first" className="border-b border-[#EAEAE3]" style={{ background: '#F8F8F6' }}>
          <div className={`${WRAP} grid items-start gap-6 py-8 md:grid-cols-[auto_1fr] md:gap-8 md:py-10`}>
            <div className="max-w-[16ch]">
              <span className="mb-2 block font-fj-mono text-[11px] uppercase tracking-[0.14em] text-[#B23E13]">Quick answer</span>
              <p className="font-fj-display text-[clamp(20px,2.3vw,25px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#141414]">
                What does an ecommerce marketing agency do?
              </p>
            </div>
            <div className="max-w-[64ch] font-fj-body text-[clamp(16px,1.6vw,18px)] leading-[1.62] text-[#3A3A38]">
              <p>
                <b className="text-[#141414]">
                  An ecommerce marketing agency plans, buys, and optimizes the channels that bring buyers to an online store
                  and bring them back again.
                </b>{' '}
                That covers paid search and Google Shopping, paid social on Meta and TikTok, marketplace and retail media ads
                on Amazon and Walmart, the product feed behind all of it, the ad creative those platforms consume, and the
                email and SMS flows that lift what each customer is worth. It is distinct from{' '}
                <Link href="/services/ecommerce-seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                  ecommerce SEO
                </Link>
                , which earns organic search demand rather than buying it, and from{' '}
                <Link href="/services/ecommerce-development" className="font-semibold text-[#B23E13] underline underline-offset-2">
                  ecommerce development
                </Link>
                , which builds the store the traffic lands on. FactoryJet runs all three for US brands, as separate services
                with separate reporting, so you always know what each one returned.
              </p>
            </div>
          </div>
        </section>

        {/* ── PLATFORM STRIP ───────────────────────────────────────────────── */}
        <section className="border-b border-[#EAEAE3] py-7">
          <div className={WRAP}>
            <p className="mb-4 text-center font-fj-mono text-[11px] uppercase tracking-[0.12em] text-[#4A4A45]">
              Buying and building on the platforms your customers already use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
              {['Google Ads', 'Meta', 'TikTok', 'Amazon Ads', 'Klaviyo', 'Shopify'].map((n) => (
                <span key={n} className="font-fj-display text-[17px] font-extrabold tracking-[-0.02em] text-[#57574F]">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHERE THIS SITS (anti-cannibalization, human framing) ────────── */}
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="Pick the right service"
              title="Marketing, SEO, growth, and development are four different jobs"
              lead="Plenty of agencies blur these together and then report on whichever one happens to look best that month. We keep them separate. Here is the honest map so you can pick the one you actually need."
            />
            <div className="grid gap-3.5 md:grid-cols-2">
              <div className={`${CARD} p-6`} style={{ borderColor: 'rgba(240,90,40,0.35)' }}>
                <span className="font-fj-mono text-[11px] uppercase tracking-[0.12em] text-[#B23E13]">You are here</span>
                <h3 className="mt-2 font-fj-display text-[18px] font-extrabold text-[#141414]">Ecommerce marketing</h3>
                <p className="mt-2 font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">
                  Buying demand and owning the customer relationship: paid search and shopping, paid social, marketplace ads,
                  feeds, creative, email and SMS. Results arrive in days and stop when the spend stops.
                </p>
              </div>
              {RELATED.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className={`${CARD} block p-6 transition-transform duration-200 hover:-translate-y-1`}
                >
                  <h3 className="font-fj-display text-[18px] font-extrabold text-[#141414]">{r.t}</h3>
                  <p className="mt-2 font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">{r.p}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-fj-body text-[13.5px] font-semibold text-[#B23E13]">
                    Visit the page →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARKET CONTEXT (cited) ───────────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="Why the paid side matters"
              title="Three numbers worth knowing before you set a channel plan"
              lead="Not scare tactics, just context. Two come from the US Census Bureau, one from Google's own documentation."
            />
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.v} className={`${CARD} p-6`}>
                  <div className="font-fj-display text-[34px] font-extrabold leading-[1.04]" style={{ color: '#F05A28' }}>
                    {s.v}
                  </div>
                  <p className="mt-2 font-fj-body text-[14.5px] leading-[1.55] text-[#3A3A38]">{s.l}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-body text-[12.5px] text-[#B23E13] underline underline-offset-2"
                  >
                    Source: {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE RUN (bento) ──────────────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="What we run"
              title="Every paid and owned channel, handled by one team"
              lead="Most brands end up with a media buyer over here, a feed guy over there, and an email freelancer who has never seen an ad account. Nobody owns the number. We do."
            />
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link
                  key={title}
                  href={link}
                  className={`${CARD} block p-6 transition-transform duration-200 hover:-translate-y-1 ${
                    span === 'w3' ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <span
                    className="mb-4 grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: 'rgba(240,90,40,0.09)', color: '#B23E13' }}
                    aria-hidden="true"
                  >
                    <Icon size={21} strokeWidth={2} />
                  </span>
                  <h3 className="font-fj-display text-[18px] font-extrabold tracking-[-0.01em] text-[#141414]">{title}</h3>
                  <p className="mt-2 font-fj-body text-[14.5px] leading-[1.58] text-[#4A4A45]">{body}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-fj-body text-[13.5px] font-semibold text-[#B23E13]">
                    {label} →
                  </span>
                </Link>
              ))}

              <div className={`${CARD} p-6 sm:col-span-2 lg:col-span-6`}>
                <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <span
                      className="mb-4 grid h-11 w-11 place-items-center rounded-xl"
                      style={{ background: 'rgba(240,90,40,0.09)', color: '#B23E13' }}
                      aria-hidden="true"
                    >
                      <Target size={21} strokeWidth={2} />
                    </span>
                    <h3 className="font-fj-display text-[18px] font-extrabold tracking-[-0.01em] text-[#141414]">
                      Feeds, tracking, and the unglamorous plumbing
                    </h3>
                    <p className="mt-2 font-fj-body text-[14.5px] leading-[1.58] text-[#4A4A45]">
                      Product titles written the way people actually search, correct product types and identifiers,
                      supplemental feeds for the attributes your platform will not export cleanly, deduplicated conversion
                      events, and purchase values that match reality. This is where a surprising share of shopping performance
                      is decided, and it is the first thing we look at.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Merchant Center', 'Feed rules', 'GA4', 'Server side events', 'Value tracking', 'Consent'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1.5 font-fj-mono text-[12px] font-semibold"
                        style={{ color: '#B23E13', background: 'rgba(240,90,40,0.08)', border: '1px solid rgba(240,90,40,0.2)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LISTICLE 1: channel ladder ───────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="The order matters"
              title="The 7 channels to turn on, in the order we recommend turning them on"
              lead="You do not need all seven. You do need them in roughly this sequence, because each one performs better and reads more clearly once the one above it is healthy."
            />
            <ol className="grid list-none gap-3.5 md:grid-cols-2">
              {CHANNEL_LADDER.map((c, i) => (
                <li key={c.b}>
                  <NumberedItem i={i + 1} b={c.b} p={c.p} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── DARK SECTION (the only one on this page): measurement ────────── */}
        <section style={{ background: '#0A0F1C', color: '#F5F5F2' }}>
          <div className={`${WRAP} py-14 md:py-20`}>
            <div className="mb-9 max-w-[62ch] md:mb-12">
              <span className="font-fj-mono text-[12px] font-semibold uppercase tracking-[0.13em]" style={{ color: '#F05A28' }}>
                How we measure
              </span>
              <h2 className="mt-3 font-fj-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.022em] text-white">
                Ad platforms grade their own homework. We do not take their word for it.
              </h2>
              <p className="mt-3.5 font-fj-body text-[16.5px] leading-[1.6]" style={{ color: '#C9C9D2' }}>
                Every platform will happily claim the same sale. Read those reports uncritically and you will scale the
                channel that harvested the order rather than the one that created it. Here is how we avoid that.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  k: 'Layer 1',
                  h: 'Platform metrics, held loosely',
                  p: 'Useful for deciding what to change inside a campaign. Not useful for deciding whether a channel deserves more spend. We read them as diagnostics, never as a verdict.',
                },
                {
                  k: 'Layer 2',
                  h: 'Blended performance across everything',
                  p: 'Total revenue against total spend across every channel. It cannot be gamed by attribution windows, and it is the number we hold ourselves to when we ask you to increase spend anywhere.',
                },
                {
                  k: 'Layer 3',
                  h: 'Contribution, after everything comes out',
                  p: 'What is left once product, shipping, payment fees, and media are accounted for. A channel can look wonderful on revenue and still be quietly unprofitable. This layer catches that.',
                },
              ].map((p) => (
                <div
                  key={p.k}
                  className="rounded-2xl p-6"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span className="font-fj-mono text-[12px]" style={{ color: '#FF7A45' }}>
                    {p.k}
                  </span>
                  <h3 className="mt-3 font-fj-display text-[19px] font-extrabold text-white">{p.h}</h3>
                  <p className="mt-2 font-fj-body text-[14.5px] leading-[1.6]" style={{ color: '#C9C9D2' }}>
                    {p.p}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <div className="flex flex-wrap items-start gap-3">
                <Sparkles size={20} strokeWidth={2} color="#FF7A45" aria-hidden="true" />
                <p className="max-w-[78ch] font-fj-body text-[15px] leading-[1.65]" style={{ color: '#D6D6DE' }}>
                  A note on attribution models. Google Ads data driven attribution spreads conversion credit across the
                  interactions on a path instead of handing everything to the last click, which is a genuine improvement over
                  last click. Google is also clear that the model needs a meaningful volume of conversions and interactions in
                  the account before it has enough data to work from, so smaller accounts should treat its output with care.
                  That is exactly why we keep the blended and contribution layers above it.{' '}
                  <a
                    href="https://support.google.com/google-ads/answer/6394265"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold underline underline-offset-2"
                    style={{ color: '#FFAE8A' }}
                  >
                    Google Ads Help: about data driven attribution
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="How it works"
              title="From free channel audit to a program that scales, in four steps"
              lead="No discovery theatre. The first thing we do is find out whether your numbers can be trusted, because everything after that depends on it."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t-2 border-[#141414] pt-4">
                  <span className="font-fj-mono text-[12px] text-[#B23E13]">{s.n}</span>
                  <h3 className="my-2 font-fj-display text-[18px] font-extrabold text-[#141414]">{s.h}</h3>
                  <p className="font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <ComparisonTable
              eyebrow="COMPARE"
              headline="FactoryJet vs an ads-only shop vs a freelance media buyer vs an in-house hire"
              lead="Four honest options. None of them is wrong for every brand, and the right answer depends mostly on how many channels you need live at once."
              columns={[
                { label: 'FactoryJet', isFactoryJet: true },
                { label: 'Ads-only agency' },
                { label: 'Freelance media buyer' },
                { label: 'In-house hire' },
              ]}
              rows={[
                { feature: 'Paid search and shopping', values: [yes, yes, partial('Usually one platform'), partial('Depends on hire')] },
                { feature: 'Paid social creative testing', values: [yes, partial('Often outsourced'), partial('Buying only'), partial('Depends on hire')] },
                { feature: 'Product feed engineering', values: [yes, no('Rarely'), no('Rarely'), no('Rarely')] },
                { feature: 'Marketplace and retail media ads', values: [yes, partial('Sometimes'), no('Rarely'), no('Rarely')] },
                { feature: 'Email and SMS retention', values: [yes, no('Separate vendor'), no('Separate vendor'), partial('Depends on hire')] },
                { feature: 'Landing pages and store fixes', values: [yes, no('No'), no('No'), no('Needs dev support')] },
                { feature: 'Conversion tracking audit first', values: [yes, partial('Sometimes'), no('Rarely'), partial('Sometimes')] },
                { feature: 'Reporting on contribution, not just ROAS', values: [yes, partial('Channel metrics'), no('Limited'), yes] },
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), yes, no('Two to three months')] },
                { feature: 'You keep the ad accounts', values: [yes, partial('Ask first'), yes, yes] },
              ]}
            />
          </div>
        </section>

        {/* ── LISTICLE 2: hiring checklist ─────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="Before you sign anything"
              title="6 things to check before hiring an ecommerce ad agency"
              lead="Use this on us too. If we cannot answer all six clearly on the first call, you should be talking to somebody else."
            />
            <ol className="grid list-none gap-3.5 md:grid-cols-2">
              {HIRING_CHECKS.map((c, i) => (
                <li key={c.b}>
                  <NumberedItem i={i + 1} b={c.b} p={c.p} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── AGENCY ALTERNATIVES ─────────────────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={WRAP}>
            <SectionHeader
              eyebrow="Who else is out there"
              title="Ecommerce marketing agencies brands compare us with"
              lead="There are good agencies in this space and pretending otherwise would be insulting. Here is where a few well known names fit, and where we fit."
            />
            <div className="grid gap-3.5 md:grid-cols-2">
              {AGENCY_ALTERNATIVES.map((r, i) => (
                <div key={r.b} className={`${CARD} flex gap-4 p-5 sm:p-6`}>
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px]"
                    style={{ background: 'rgba(240,90,40,0.09)', color: '#B23E13' }}
                    aria-hidden="true"
                  >
                    {i === AGENCY_ALTERNATIVES.length - 1 ? <Store size={17} strokeWidth={2.2} /> : <Megaphone size={17} strokeWidth={2.2} />}
                  </span>
                  <div>
                    <b className="font-fj-display text-[16.5px] font-bold text-[#141414]">{r.b}</b>
                    <p className="mt-1.5 font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">{r.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-[70ch] font-fj-body text-[13.5px] leading-[1.6] text-[#4A4A45]">
              Descriptions reflect each agency&rsquo;s publicly stated positioning and are offered as a fair comparison, not as
              criticism. Every one of them is a reasonable choice for the right brand.
            </p>
          </div>
        </section>

        {/* ── E-E-A-T ──────────────────────────────────────────────────────── */}
        <section className="pb-14 md:pb-20">
          <div className={`${WRAP} grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch`}>
            <div className={`${CARD} grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-7`}>
              <img
                src="/bhavesh_image.jpg"
                alt="Bhavesh Barot, Founder of FactoryJet"
                width={76}
                height={76}
                className="h-[76px] w-[76px] rounded-full border-2 border-white object-cover shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="font-fj-mono text-[11px] uppercase tracking-[0.1em] text-[#B23E13]">Led by the founder</span>
                <h2 className="my-1.5 font-fj-display text-[19px] font-extrabold text-[#141414]">
                  Bhavesh Barot, Founder of FactoryJet
                </h2>
                <p className="font-fj-body text-[14.5px] leading-[1.6] text-[#4A4A45]">
                  Twelve years building and growing commerce for more than 500 businesses across the US, UK, and India. Every
                  marketing engagement is run by FactoryJet&rsquo;s senior in-house team, not passed to subcontractors. You talk
                  to the people who are actually in your ad accounts.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#EAEAE3] pt-4 font-fj-body text-[13px] text-[#6B6B62]">
                  <span>Recognized on</span>
                  <b className="font-fj-display font-bold text-[#141414]">Clutch</b>
                  <b className="font-fj-display font-bold text-[#141414]">GoodFirms</b>
                  <b className="font-fj-display font-bold text-[#141414]">DesignRush</b>
                  <b className="font-fj-display font-bold text-[#141414]">SoftwareSuggest</b>
                </div>
              </div>
            </div>
            <div className="min-h-[250px] overflow-hidden rounded-2xl border border-[#EAEAE3] shadow-[0_26px_54px_-40px_rgba(20,20,30,0.5)]">
              <img
                src="/images/us/services/service-team.webp"
                alt="The FactoryJet marketing team reviewing campaign performance"
                width={1200}
                height={800}
                className="h-full min-h-[250px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Ecommerce marketing agency FAQs"
          lead="The questions US ecommerce founders actually ask before they hand over an ad account. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <FinalCTA
          variant="light"
          eyebrow="Get started"
          headline="Find out which of your channels is actually paying for itself"
          sub="Send us your store URL and we will run a free channel audit across your ad accounts, tracking, product feed, creative, and retention flows. You keep the plan either way."
          primaryCta={{ label: 'Get my free channel audit', href: '/contact' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="No long contracts. You keep every ad account, audience, and asset."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
