import type { Metadata } from 'next';
import Link from 'next/link';
import { ecommerceAlternates } from '@/data/hreflangMap';

import Image from 'next/image';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import RelatedGuides from '@/components/v2/RelatedGuides';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import MidPageCTA from '@/components/v2/MidPageCTA';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development Company USA | FactoryJet',
  description:
    'Custom Shopify, WooCommerce and headless stores for US brands. Most stores go live in 3 to 5 weeks, with a fixed quote upfront and support after launch.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company USA | FactoryJet',
    description:
      'We design, build and support custom Shopify, WooCommerce and headless stores for US brands. Fixed quote upfront, most stores live in 3 to 5 weeks.',
    url: 'https://factoryjet.com/services/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Company USA | FactoryJet',
    description:
      'Custom Shopify, WooCommerce and headless stores for US brands. Fixed quote upfront, milestone-paid, and the same team supports you after launch.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development',
    languages: ecommerceAlternates,
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
   JSON-LD Schema, faqSchema is declared after FAQ_ITEMS below, since it
   derives mainEntity from that array via .map()
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-09-28';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Commerce Development Services',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  // This hub is the canonical parent for 13 India city pages and links 13 US
  // city pages, so areaServed lists every market we actually deliver in rather
  // than claiming the United States alone.
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: 'E-Commerce Development',
  description:
    'Custom e-commerce development for US brands, also delivered in the UK, the UAE and India. Shopify, WooCommerce, BigCommerce and headless Next.js stores: designed, built, launched and supported after launch. Custom-theme stores take 3 to 5 weeks, advanced stores 5 to 8 weeks, headless or custom builds 8 to 14 weeks. Fixed price, milestone-paid, full code ownership.',
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'E-Commerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
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
   Section data
───────────────────────────────────────────────────────────────────────────── */

const ECOMM_SERVICES = [
  {
    name: 'Shopify & Shopify Plus',
    description:
      'Custom Liquid themes, full store builds, Shopify Plus checkout customization, B2B wholesale portals, and headless Hydrogen storefronts. The right Shopify setup for your catalog size and revenue stage.',
    example: 'Our most common e-commerce engagement.',
    linkLabel: 'See Shopify services',
    linkHref: '/services/shopify-development',
  },
  {
    name: 'WooCommerce Development',
    description:
      'Custom WooCommerce stores built on WordPress with performance-optimized themes, advanced product types (subscriptions, bundles, bookings), and a CMS your team can actually use without developer help.',
    example: 'Best when you need deep content-commerce integration or already run WordPress.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'BigCommerce Development',
    description:
      'Custom Stencil themes and headless BigCommerce builds for mid-market brands that need native B2B features, multi-channel selling, and enterprise integrations without Shopify Plus pricing.',
    example: 'Used by B2B brands needing complex pricing rules without third-party apps.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Headless & Custom Commerce',
    description:
      'A Next.js or Remix storefront connected to Shopify, BigCommerce, or a headless commerce API (Medusa, Vendure, Commerce.js). Sub-1-second page loads and full design freedom, for brands where performance directly moves revenue.',
    example: 'Recommended for stores doing $5M+/year or with complex product configurator needs.',
    linkLabel: 'Is headless right for you?',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce Platform Migration',
    description:
      'Full data migrations from WooCommerce, Magento, Squarespace, Wix, PrestaShop, and custom platforms, preserving product catalog, customer data, order history, and SEO URL structure with 301 redirects.',
    example: 'Zero downtime launch day. All redirects mapped before DNS switch.',
    linkLabel: 'Plan your migration',
    linkHref: '/contact',
  },
  {
    name: 'Multi-Vendor Marketplace',
    description:
      'Custom marketplace platforms with vendor onboarding, split payment logic, commission management, seller dashboards, and product approval workflows, built on Next.js with Stripe Connect.',
    example: 'For brands moving from single-store retail to a marketplace model.',
    linkLabel: 'Get a scoping call',
    linkHref: '/contact',
  },
];

const ECOMM_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute strategy session. We audit your current platform, catalog, traffic, and conversion data, then recommend the right tech stack before scoping a single hour of work.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Figma wireframes and full visual mockups for your homepage, product pages, collection pages, and cart. You approve desktop and mobile before any code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering in your chosen platform: Liquid, WooCommerce PHP, BigCommerce Stencil, or Next.js. Daily commits to your GitHub repo. Staging store live within 48-72 hours.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Full checkout flow tested across Stripe, PayPal, Shop Pay, and Affirm/Klarna. Cross-device testing on iOS, Android, Chrome, Safari, and Firefox. Lighthouse audit before sign-off.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'DNS transfer, SSL, Google Analytics 4 + Meta Pixel configuration, Google Shopping feed setup, sitemap submission, and a recorded handover. Your codebase delivered to GitHub on day one.',
  },
];

/* Build timelines. Wording confirmed by Bhavesh on 2026-09-24 (these are the
   ranges every other page is told to copy). Do not stretch or shorten them. */
const BUILD_TIMELINES = [
  { scope: 'Platform store', detail: 'Custom-designed Shopify or WooCommerce store', weeks: '3-5 weeks' },
  { scope: 'Advanced store', detail: 'Subscriptions, B2B pricing or a migration', weeks: '5-8 weeks' },
  { scope: 'Headless or custom', detail: 'Next.js storefront, marketplace or custom platform', weeks: '8-14 weeks' },
] as const;

/* Proof near the top of the page. Only published, verified case studies from
   src/data/case-studies (no invented metrics: those entries deliberately carry
   none). Both stores run on Commerceflo, not Shopify, and the cards say so. */
const PROOF_CASES = [
  {
    client: 'Belle Maison',
    market: 'Wholesale distributor, Mumbai',
    platform: 'Built on Commerceflo',
    what: 'One storefront for retail shoppers and trade buyers. Trade accounts log in, see their own prices, and turn a quote into an order without anyone retyping it.',
    href: '/case-studies/belle-maison-ecommerce-success',
  },
  {
    client: 'GPSUK',
    market: 'Promotional products, United Kingdom',
    platform: 'Built on Commerceflo',
    what: 'A B2B storefront for a supplier whose buyers reorder branded stock. Trade accounts browse the catalogue, get account pricing, and move from quote to order online.',
    href: '/case-studies/gpsuk-promotional-products',
  },
] as const;

const ECOMM_STATS = [
  {
    value: '500+',
    label: 'businesses served across web design, e-commerce, and custom software.',
    microcopy: 'FactoryJet has been building for clients in India, the US, the UK and the UAE for 12+ years.',
    categoryLabel: 'TRACK RECORD',
  },
  {
    value: '97%',
    label: 'of projects delivered on time or early.',
    microcopy: 'we give you a launch date on day one and plan the build backwards from it.',
    categoryLabel: 'ON-TIME DELIVERY',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid e-commerce builds with full code ownership.',
    microcopy: 'same design quality, same engineering standard, predictable from quote to launch.',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_ECOMM_STATS = [
  {
    value: '$1.19T',
    label: 'projected US e-commerce sales in 2025, up from $1.06T in 2023.',
    sourceUrl: 'https://www.emarketer.com/content/us-ecommerce-forecast-2025',
    sourceLabel: 'eMarketer 2025 Forecast',
  },
  {
    value: '21%',
    label: 'of total US retail sales now happen online, up from 15% in 2020.',
    sourceUrl: 'https://www.census.gov/retail/ecommerce.html',
    sourceLabel: 'US Census Bureau Retail Data',
  },
  {
    value: '69%',
    label: 'average cart abandonment rate across e-commerce, mostly fixable with better UX.',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    sourceLabel: 'Baymard Institute Research',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Traditional Agency' },
  { label: 'Freelancer' },
  { label: 'DIY (Squarespace/Wix)' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model.',
    values: [
      'Fixed-price, quoted upfront.',
      'Multiples higher, often hourly.',
      'Hourly, no ceiling.',
      'Cheap monthly fee (you build it).',
    ],
  },
  {
    feature: 'Delivery timeline.',
    values: ['3-5 weeks.', '3-6 months.', '6-12 weeks (unreliable).', '1 week (but you build it).'],
  },
  {
    feature: 'Custom design (not a template).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Platform migration with SEO preservation.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Checkout + payment testing before launch.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance on delivery.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership (your GitHub).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Platform Store',
    priceRange: 'Get a quote',
    description:
      'A custom-designed Shopify or WooCommerce store, ready to sell on launch day. Best for product-based businesses launching their first online store or replacing a template site.',
    features: [
      'Platform of your choice: Shopify or WooCommerce.',
      'Custom Figma design, homepage, PDP, collection, cart.',
      'Up to 100 products imported and configured.',
      'Payment setup: Stripe, PayPal, Shop Pay.',
      'Shipping zones and tax configuration.',
      'Technical SEO: schema, sitemaps, canonical URLs.',
      'Google Analytics 4 + Search Console setup.',
      'Lighthouse 95+ on delivery.',
    ],
    cta: { label: 'Book a Consultation', modal: true, region: 'us' },
  },
  {
    name: 'Advanced E-Commerce',
    priceRange: 'Get a quote',
    description:
      'A full-featured store with subscription logic, B2B pricing, a product configurator, or multi-channel inventory sync. The right tier for brands with complex selling models.',
    features: [
      'Everything in Platform Store, plus advanced capabilities.',
      'Subscription products (ReCharge or Skio).',
      'B2B wholesale portal or tiered pricing.',
      'Product configurator or bundle builder.',
      'Advanced Klaviyo email flows (8+ automated sequences).',
      'Multi-channel inventory sync (Amazon, eBay, or 3PL).',
      'Reviews platform integration (Yotpo, Okendo, or Judge.me).',
      'Post-purchase upsell flow.',
      '30-day post-launch support window.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Headless / Custom',
    priceRange: 'Talk to the founder',
    description:
      'A headless Next.js storefront, fully custom commerce platform, or multi-vendor marketplace. For brands where standard platform themes can\'t meet performance or UX requirements.',
    features: [
      'Headless Next.js or Remix storefront.',
      'Commerce backend: Shopify, BigCommerce, Medusa, or custom.',
      'Sub-1-second page loads on mobile (streaming SSR).',
      'Custom product logic, pricing engine, or configurator.',
      'Multi-vendor marketplace with Stripe Connect split payments.',
      'ERP or WMS integration (NetSuite, SAP, Brightpearl).',
      'International multi-currency and multi-language setup.',
      'Dedicated engineering point of contact.',
      '90-day post-launch support and iteration.',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'platform',  label: 'Platform Selection' },
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'migration', label: 'Migrations' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'seo',       label: 'AI Search & GEO' },
  { key: 'trust',     label: 'Working With Us' },
];

const FAQ_ITEMS = [

  /* ── Platform Selection ── */
  {
    category: 'platform',
    question: 'Which e-commerce platform is right for my business?',
    answer:
      'Shopify is the best default for most product-based businesses, reliable hosting, payment infrastructure, and a huge app ecosystem. WooCommerce is right when you\'re already on WordPress and need deep content-commerce integration (recipes, editorial, guides). BigCommerce suits mid-market brands that need native B2B features without Shopify Plus pricing. Custom Next.js Commerce or headless builds are for businesses with unique product logic, complex configurators, or performance requirements that exceed what platform themes can deliver. We make this assessment during discovery, we won\'t push a more complex solution than you need.',
  },
  {
    category: 'platform',
    question: 'What is headless e-commerce and when does my store need it?',
    answer:
      'Headless e-commerce separates your storefront (what customers see) from the commerce backend (inventory, orders, checkout). The frontend is rebuilt in a fast framework like Next.js, while Shopify or another API handles transactions. The result is sub-1-second page loads, full design freedom, and custom UX that platform themes can\'t match. Most stores under $5M/year revenue don\'t need headless: the additional build cost doesn\'t justify the conversion uplift. Above that revenue level, the math usually works in its favor.',
  },
  {
    category: 'platform',
    question: 'Can you build a multi-vendor marketplace instead of a single-brand store?',
    answer:
      'Yes. We build custom marketplace platforms with vendor onboarding flows. They feature split payment logic via Stripe Connect, commission management, seller dashboards, and dispute handling. These are custom Next.js builds. Shopify and WooCommerce are not built for true multi-vendor marketplaces, so we do not force them into that shape.',
  },

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does e-commerce development cost?',
    answer:
      'A small store on a pre-built theme can launch for about $1,000 to $5,000, and a store with custom design and integrations typically costs $5,000 to $25,000, according to BigCommerce. Where yours lands depends on four things: the platform, how many products and variants you have, whether you are moving from an old store, and which systems the store has to talk to (ERP, 3PL, subscriptions, B2B pricing). A custom-theme Shopify or WooCommerce store is the smallest build. Headless and marketplace builds are the largest. We give you one fixed price after a free 30-minute call, paid in milestones. Our ecommerce website cost and Shopify development cost guides go deeper.',
  },
  {
    category: 'pricing',
    question: 'How long does an e-commerce build take?',
    answer:
      'A platform store with a custom theme takes 3 to 5 weeks. An advanced store with subscriptions or B2B pricing takes 5 to 8 weeks. Headless Next.js storefronts and custom platforms run 8 to 14 weeks depending on catalog size, integrations, and migration requirements.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep e-commerce pricing fixed and predictable?',
    answer:
      'We work fixed-price and milestone-paid. Every store is scoped upfront with no hourly billing or surprise invoices. Twelve years of building stores means we estimate accurately on the first call. The quote you sign is what you pay. You get Figma-first design, strict platform engineering, a Lighthouse performance audit, and full code ownership.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my existing store to a new platform?',
    answer:
      'Yes. Platform migrations are one of our most common engagements. We migrate products, variants, metafields, images, customers, order history, and reviews. We map your URL structure and implement 301 redirects for every changed URL before DNS switch. We migrate stores from WooCommerce, Magento, Squarespace, Wix, PrestaShop, and BigCommerce to Shopify, or from Shopify to headless Next.js.',
  },
  {
    category: 'migration',
    question: 'Will my Google rankings survive a platform migration?',
    answer:
      'Yes, if the migration is done carefully. Before we move anything, we list every URL that gets search traffic today. We build a complete 301 redirect map (a rule that sends each old address to its new one) before touching DNS. We submit new sitemaps to Google Search Console on launch day and watch organic traffic for 30 days after launch. A small dip for a few weeks is normal with any move. A missing redirect map is what causes lasting losses.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'What SEO comes included with an e-commerce build?',
    answer:
      'Every e-commerce store we build includes technical SEO as standard. We add Product and BreadcrumbList schema markup for Google Shopping. We write optimized title tags and meta descriptions for templates. We set canonical URLs to prevent duplicate content. We compress images with descriptive alt text and submit XML sitemaps to Google Search Console. Content SEO and keyword research are available as add-ons.',
  },
  {
    category: 'technical',
    question: 'What payment gateways can you integrate?',
    answer:
      'We configure Stripe, PayPal, Shop Pay, Apple Pay, Google Pay, Affirm, Klarna, and Afterpay. For B2B clients, we integrate net terms via Resolve Pay or native tools. All payment flows are tested end-to-end on staging before launch.',
  },
  {
    category: 'technical',
    question: 'Can you integrate my e-commerce store with my ERP, 3PL, or accounting software?',
    answer:
      'Yes. Common integrations include NetSuite, SAP B1, Brightpearl, and Cin7 for ERP. For fulfillment, we integrate ShipBob and ShipMonk. For finance, we connect QuickBooks and Xero. For retail POS, we integrate Shopify POS, Square, and Lightspeed via REST APIs and webhooks.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US or UK e-commerce agency?',
    answer:
      'Four things: price, ownership, support and honesty. Our engineering team is based in India, so a fixed-price build usually costs well under a typical US agency quote for the same scope. You own the full codebase on launch day, with no lock-in. We stay on after launch for fixes and improvements instead of handing you off. And we tell you when a simpler, cheaper setup fits better. We have delivered 500+ projects across the US, the UK, the UAE and India.',
  },
  {
    category: 'trust',
    question: 'Do I own the code after the project is done?',
    answer:
      'Yes, 100%. The full codebase is delivered to your GitHub repository on launch day. You own every file, every integration, and all API credentials. No proprietary platform and no recurring agency license is needed. Any qualified developer can maintain and extend the code.',
  },

  {
    category: 'platform',
    question: 'Can you build a subscription or recurring-revenue e-commerce store?',
    answer:
      'Yes. Subscription e-commerce is one of our highest-ROI offerings. We implement subscription logic using Recharge, Bold Subscriptions, or WooCommerce Subscriptions. Models include subscription boxes, consumable replenishment, and digital memberships. We also set up customer portals where subscribers can skip, swap or pause, and cancel flows that offer a pause before a cancel.',
  },
  {
    category: 'technical',
    question: 'Do you build B2B e-commerce stores with wholesale pricing and net terms?',
    answer:
      'Yes. B2B e-commerce is a core part of our work. We build wholesale ordering portals with tiered dealer pricing. We configure net-30 and net-60 terms via Resolve Pay or native Shopify B2B tools. Features include company account management, custom price lists per segment, minimum order quantities, and purchase order uploads. Shopify Plus includes native B2B features. WooCommerce B2B uses WholesaleX or B2BKing.',
  },
  {
    category: 'technical',
    question: 'How do I optimize my e-commerce store for mobile shoppers?',
    answer:
      'Most e-commerce traffic now arrives on phones, but phones still convert worse than desktop. Poor mobile checkout is usually the reason. We design every layout for a 375px phone screen first. We enable one-tap Apple Pay and Google Pay checkout to eliminate cart abandonment. We add thumb-friendly buttons, sticky add-to-cart bars, and lazy-loaded images. Every store passes Google Core Web Vitals with Lighthouse 90+ before launch.',
  },
  {
    category: 'technical',
    question: 'Can you build a multi-language or international e-commerce store?',
    answer:
      'Yes. International e-commerce is a standard capability. We implement Shopify Markets for multi-language and multi-currency storefronts. Features include automatic currency conversion with presentment currencies. We translate pages with Translate & Adapt or Weglot. We configure zone-specific shipping rates and landed cost calculations for duties and taxes at checkout. We also support local payment methods like Klarna and iDEAL.',
  },
  {
    category: 'seo',
    question: 'How does FactoryJet optimize e-commerce stores for Google and AI search?',
    answer:
      'Beyond standard technical SEO, FactoryJet builds answer engine optimization into every store. This gets your brand cited in ChatGPT, Perplexity, and Google AI Overviews. We configure Product schema with pricing, availability, and ratings. We add BreadcrumbList schema and category FAQPage schema. We structure collection copy to answer specific buyer questions and build topic authority.',
  },
  {
    category: 'trust',
    question: 'What ongoing support does FactoryJet offer after my store launches?',
    answer:
      'Every e-commerce project includes a 14 to 30 day post-launch support window. This covers bug fixes and launch questions at no added charge. Beyond launch, we offer monthly retainers for ongoing development, priority bug response, and seasonal updates. We also offer one-time sprints for checkout testing, app integrations, and performance audits.',
  },
  {
    category: 'trust',
    question: 'How do I know if I need an e-commerce agency or a freelancer for my store?',
    answer:
      'A freelancer works well for simple theme setups or single app installs. An agency makes sense when you need custom design, an SEO-safe migration, or complex product logic. FactoryJet delivers agency quality at predictable fixed pricing. You get a full team of designer, developer, and QA engineer, with full code ownership on launch day.',
  },
  {
    category: 'trust',
    question: 'What does a custom ecommerce development company actually do?',
    answer:
      'A custom ecommerce development company designs and builds your store end to end rather than installing a generic template. For FactoryJet, that means custom storefront design, custom theme code, payment configuration, and ERP integrations. It also includes SEO-safe migrations and rigorous QA. You get the full codebase on GitHub at launch, ensuring zero vendor lock-in.',
  },
  {
    category: 'platform',
    question: 'Do you build custom ecommerce platforms, or only Shopify and WooCommerce stores?',
    answer:
      'Both. Most businesses are best served by Shopify or WooCommerce, and that is where we start the conversation. But when off-the-shelf platforms cannot support your product logic, multi-vendor marketplaces, proprietary pricing engines, deep ERP coupling, we operate as a custom ecommerce software development company and build a bespoke platform, typically headless on a React/Next.js front end. We recommend the simplest option that fits, not the most expensive.',
  },
  {
    category: 'pricing',
    question: 'How does pricing work for an e-commerce build?',
    answer:
      'You get one fixed price for an agreed scope, written down before work starts. There is no hourly billing. You pay in milestones, usually tied to design approval, the staging store and launch. Platform fees (Shopify, BigCommerce) and app subscriptions are billed to you directly by those companies, so you always see them. If you add something mid-project, we quote that change before we build it.',
  },
  {
    category: 'trust',
    question: 'What should I have ready before the first call?',
    answer:
      'Nothing formal. It helps to know what you sell, roughly how many products and variants you have, which platform you are on today (if any), and one or two stores you like. If you have monthly traffic or sales numbers, bring them. We use the call to recommend a platform and scope, then send a fixed quote and a launch date.',
  },
  {
    category: 'trust',
    question: 'Can you improve my current store instead of rebuilding it?',
    answer:
      'Often, yes. If your platform is right and the problem is speed, checkout friction or a weak product page, a focused fix costs far less than a rebuild. We start with an audit and tell you plainly whether a rebuild is worth it. For Shopify stores we also run ongoing support and maintenance, so the same team keeps improving the store after the fix.',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your e-commerce store',
  description: 'Our process for delivering this work, typically 3 to 14 weeks depending on scope.',
  // Aligned 2026-08-04 to the timeline this page actually states (3 to 14 weeks).
  // 7-day delivery is real for standard website builds, but this page's own
  // process section says 3 to 14 weeks, so P7D contradicted the visible content.
  totalTime: 'P98D',
  // Derived from ECOMM_JOURNEY_STAGES (the visible process section) so the
  // schema can never describe a different process than the page shows.
  // The old hand-written steps described a Next.js/WordPress website build.
  step: ECOMM_JOURNEY_STAGES.map((stage, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: stage.title,
    text: stage.description,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ecommerce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ecommerce-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ecommerce-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="ecommerce-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="speakable-schema-ecommerce-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://factoryjet.com/services/ecommerce-development#webpage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'E-Commerce', href: '/services/ecommerce-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Consultation', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        {/* Rewritten 2026-09-28. The old H1 ("An Online Store That Sells on Any
            Platform, at Any Scale") made no promise a buyer could check, and the
            right-hand card sold an unverified "2.3x conversion" figure. The hero now
            answers what we build, for whom, on which platforms and how long it takes,
            using only the confirmed timelines. */}
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_services_ecommerce_development_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT COMPANY, USA"
          headline="We design, build and support online stores for US brands. Most go live in 3 to 5 weeks."
          lead="Shopify, WooCommerce, BigCommerce or a custom headless build. We move your products, customers and SEO over, connect payments, shipping and email, and stay on after launch. You get a fixed quote before work starts, and you own the code."
          secondaryCta={{ label: 'How pricing works', href: '#pricing-explained' }}
          trustItems={[
            'Fixed quote before work starts',
            '97% delivered on time or early',
            'You own the code on launch day',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-8">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT YOU GET, AND HOW LONG IT TAKES
              </p>
              <p className="mt-3 font-fj-display text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-fj-ink">
                Pick the store you need. We give you a launch date on the first call.
              </p>
              <ul className="mt-5 divide-y divide-fj-neutral-100 border-y border-fj-neutral-100">
                {BUILD_TIMELINES.map((row) => (
                  <li key={row.scope} className="flex items-start justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{row.scope}</p>
                      <p className="mt-0.5 font-fj-body text-[0.8125rem] text-fj-neutral-600">{row.detail}</p>
                    </div>
                    <p className="shrink-0 font-fj-display text-[1rem] font-bold tracking-[-0.02em] text-[#B23E13]">
                      {row.weeks}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                Every build includes custom design, payments, shipping and tax setup, technical SEO, analytics, checkout testing on real devices, and support after launch.
              </p>
            </div>
          }
        />

        {/* ── 2. SHORT ANSWER + PROOF ──────────────────────────────────────── */}
        {/* Replaces the hero image band and BigThreeTrustBlock. That block's
            showcase variant hardcodes "7-day delivery", which contradicts the 3-14
            week e-commerce timelines this page states. Proof shown here is only
            published case studies and a verbatim client quote. */}
        <section className="border-y border-fj-neutral-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">THE SHORT ANSWER</p>
                <h2 className="mt-3 font-fj-display text-[clamp(1.625rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.03em] text-fj-ink">
                  What an ecommerce development company should do for you
                </h2>
                <p
                  data-speakable
                  className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600"
                >
                  FactoryJet builds custom Shopify, WooCommerce, BigCommerce and headless stores for small and mid-size US brands. A custom-theme store takes 3 to 5 weeks. A store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks. Headless and custom builds take 8 to 14 weeks. You get one fixed price after a free call, you pay in milestones, and you own the code and every login on launch day. After launch, the same team stays on to fix, test and improve the store.
                </p>
                <p className="mt-4 font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600">
                  Not sure which platform fits? Start with our{' '}
                  <Link href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="font-medium text-[#B23E13] underline underline-offset-2">
                    Shopify vs WooCommerce guide
                  </Link>
                  , or tell us what you sell in the form above and we will recommend one.
                </p>

                <figure className="mt-8 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7">
                  <blockquote className="font-fj-display text-[1.125rem] font-semibold leading-[1.45] tracking-[-0.01em] text-fj-ink">
                    &ldquo;We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <img
                      src="/images/testimonials/ricky-belle-maison-128.webp"
                      alt="Ricky B., founder of Belle Maison"
                      width={44}
                      height={44}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <span className="font-fj-body text-[0.875rem] leading-snug text-fj-neutral-600">
                      <strong className="font-semibold text-fj-ink">Ricky B.</strong>, Founder, Belle Maison
                      <br />
                      Store built by FactoryJet on Commerceflo, not Shopify.
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-5">
                <p className="fj-eyebrow">STORES WE HAVE BUILT</p>
                <div className="mt-4 space-y-4">
                  {PROOF_CASES.map((c) => (
                    <Link
                      key={c.client}
                      href={c.href}
                      className="block rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                    >
                      <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#B23E13]">
                        {c.market}
                      </p>
                      <p className="mt-2 font-fj-display text-[1.25rem] font-bold tracking-[-0.02em] text-fj-ink">
                        {c.client}
                      </p>
                      <p className="mt-2 font-fj-body text-[0.9375rem] leading-relaxed text-fj-neutral-600">{c.what}</p>
                      <p className="mt-3 font-fj-body text-[0.8125rem] font-semibold text-fj-ink">
                        {c.platform} &middot; Read the case study <span aria-hidden="true">&rarr;</span>
                      </p>
                    </Link>
                  ))}
                </div>
                <p className="mt-5 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  500+ projects delivered for businesses in the US, the UK, the UAE and India.{' '}
                  <Link href="/case-studies" className="font-medium text-[#B23E13] underline underline-offset-2">
                    See all case studies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT GREAT E-COMMERCE LOOKS LIKE ─────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE EXPLAINED"
          headline="What Separates a Store That Sells from One That Doesn't"
          lead="Most e-commerce stores aren't failing because their product is wrong. They're failing because their store is slow, hard to navigate on mobile, or designed to look good rather than convert."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Shopify',
                  'WooCommerce',
                  'BigCommerce',
                  'Next.js Commerce',
                  'Hydrogen',
                  'Stripe',
                  'Klaviyo',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                The average US e-commerce store converts at 1.4%. The top quartile converts at 3-5%. The difference isn&apos;t product, it&apos;s the store. Slow load times, confusing navigation, a mobile checkout that leaks customers at the payment step, and product pages that bury the &quot;add to cart&quot; button below the fold. These are engineering and design problems, not marketing problems.
              </p>

              {/* Key e-commerce metrics, aria-hidden decorative */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '1.4%', label: 'US avg. e-comm conv. rate' },
                  { value: '69%', label: 'avg. cart abandonment' },
                  { value: '53%', label: 'mobile abandons after 3s' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A great e-commerce store isn&apos;t a design project. It&apos;s an engineering project measured in revenue.
                </p>
              </div>
              <p>
                FactoryJet designs every e-commerce store around conversion: where the size guide goes, when the sticky cart appears, how the mobile PDP stacks, what trust signals appear above the fold, and how the checkout flow handles hesitation. Every store we launch teaches us something about the next one, and those lessons go straight into your build.
              </p>
              <p>
                We&apos;re platform-agnostic. Shopify, WooCommerce, BigCommerce, headless Next.js, we recommend the right stack for your catalog, your team&apos;s technical comfort, and your revenue stage. Then we build it properly, hand over the code, and get out of the way.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Platform Comparison
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'Shopify', best: 'DTC brands, subscriptions, rapid launch.', tier: 'Entry' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce.', tier: 'Entry' },
                  { platform: 'BigCommerce', best: 'B2B, mid-market, multi-channel.', tier: 'Mid' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, checkout UI.', tier: 'Scale' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX.', tier: 'Custom' },
                  { platform: 'Custom Platform', best: 'Marketplace, proprietary logic.', tier: 'Custom' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.platform}</p>
                      <p className="fj-display flex-shrink-0 font-bold text-[#B23E13]" style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}>
                        {item.tier}
                      </p>
                    </div>
                    <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400" style={{ letterSpacing: '0.04em' }}>
                      {item.best}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  We recommend the right platform. We don&apos;t push the most expensive one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK, the page's only dark section) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your store has traffic. The conversion rate is where revenue goes to die."
          lead="69% of shopping carts are abandoned before checkout. Most of those abandonments are fixable, with faster load times, better mobile UX, and a checkout flow that doesn't leak customers at the payment step."
          pillars={[
            {
              icon: '📱',
              title: 'Mobile is where your customers shop. It\'s where most stores fail.',
              body: 'Over 65% of US e-commerce traffic is now mobile. The average template-built store converts at 0.5% on mobile versus 1.8% on desktop: a 3.6× gap that exists entirely because the mobile experience wasn\'t designed, it was adapted. Tap targets are too small. Images are uncompressed. The checkout requires typing in a 16-digit card number on a phone keyboard.',
            },
            {
              icon: '🐢',
              title: 'Every second of load time costs you 7% in conversions',
              body: 'Google\'s research shows a 1-second delay in page load reduces conversions by 7%. The average Shopify or WooCommerce store using a theme-store template loads in 4-6 seconds on mobile 4G. That\'s 21-35% of your potential revenue gone before a product image finishes rendering. A properly optimized custom build loads in under 2 seconds.',
            },
            {
              icon: '💸',
              title: 'Most agencies disappear after launch day',
              body: 'The store goes live, the invoice clears, and the agency moves on. Then an app update breaks checkout or a theme change slows every page, and nobody who built it is around. We quote support as part of the plan, not as an afterthought, and the team that built your store is the team that fixes it. We are an India-based engineering team, which is also why a fixed-price build from us usually costs well under a comparable US agency quote.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 5 Stages"
          lead="Discovery before we commit to a platform. Design approval before we commit to code. Full checkout testing before we commit to launch."
          stages={ECOMM_JOURNEY_STAGES}
          closingNote="5 STAGES · 3-14 WEEKS TO LAUNCH · PLATFORM-AGNOSTIC · ZERO DOWNTIME LAUNCH DAY"
        />

        {/* ── 5b. MID-PAGE CTA ─────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Get a fixed quote and a launch date for your store"
          sub="Tell us what you sell, how many products you have and which platform you are on today. We reply with a platform recommendation, a fixed price and a launch date. No hourly billing, no obligation."
          label="Get my store quote"
          note="Bhavesh, our founder, reads every request and usually replies within 2 to 3 hours."
        />

        {/* ── 6. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six E-Commerce Services for Growing Brands"
          lead="From a Shopify launch to a fully custom marketplace, we scope the right engagement for your platform, catalog complexity, and revenue stage."
          sectors={ECOMM_SERVICES}
        />

        {/* ── 7. STATS BAND ────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16">

              {/* Stats */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {ECOMM_STATS.map((stat) => (
                  <div key={stat.value}>
                    {stat.categoryLabel && (
                      <div
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.13em',
                          color: '#B23E13',
                          background: 'rgba(240,90,40,0.06)',
                          border: '1px solid rgba(240,90,40,0.22)',
                        }}
                      >
                        <span
                          className="inline-block h-1 w-1 rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        />
                        {stat.categoryLabel}
                      </div>
                    )}
                    <p
                      className="fj-display font-bold"
                      style={{
                        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-3 font-fj-body font-semibold text-fj-ink"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                    >
                      {stat.label}
                    </p>
                    {stat.microcopy && (
                      <p
                        className="mt-1.5 font-fj-body text-fj-neutral-400"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                      >
                        {stat.microcopy}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Photo */}
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '5 / 3' }}
              >
                <Image
                  src="/images/services/web-design-stats-photo.webp"
                  alt="FactoryJet team reviewing a newly launched e-commerce store with a client"
                  width={640}
                  height={384}
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. TECH STACK ────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR TECH STACK"
          headline="Platform-Agnostic Engineering: We Use What Fits Your Business"
          lead="We don't have a preferred platform vendor. We have a standard of build quality that applies regardless of which platform you're on."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Next.js', 'Shopify Liquid', 'WooCommerce', 'BigCommerce Stencil', 'Figma', 'Stripe', 'Klaviyo', 'ReCharge'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify / Shopify Plus</strong>, Custom Liquid themes and Hydrogen headless builds. Checkout Extensibility for Plus clients. Our most-used platform for DTC brands.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WooCommerce on WordPress</strong>: Custom themes with Gutenberg blocks, WooCommerce Subscriptions, Bookings, and Product Bundles. Built for teams that need editorial and commerce on a single CMS.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">BigCommerce (Stencil)</strong>, Custom Stencil themes and headless builds using the BigCommerce Storefront API. Used for B2B brands that need native price lists, quote management, and ERP integration.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Next.js + Headless Commerce</strong>, For performance-critical stores. We connect Next.js to Shopify, BigCommerce, Medusa, or a custom commerce API, streaming SSR, edge caching, sub-1-second LCP.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Stripe, Klaviyo, ShipStation</strong>: Payment, email, and fulfillment infrastructure that integrates cleanly into any platform we build on.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  E-Commerce Tech Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Storefronts.', tools: 'Shopify Liquid, WooCommerce, Next.js.' },
                  { category: 'Design.', tools: 'Figma, custom component systems.' },
                  { category: 'Payments.', tools: 'Stripe, PayPal, Affirm, Klarna.' },
                  { category: 'Email & SMS.', tools: 'Klaviyo, Omnisend, Postscript.' },
                  { category: 'Subscriptions.', tools: 'ReCharge, Skio, WooCommerce Sub.' },
                  { category: 'Shipping.', tools: 'ShipStation, Shippo, EasyPost.' },
                  { category: 'Analytics.', tools: 'GA4, Meta Pixel, Triple Whale, Northbeam.' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Full stack. Code ownership. Zero lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 9. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US E-COMMERCE MARKET"
          headline="US E-Commerce Is a $1.19 Trillion Market. Most Small Businesses Capture Almost None of It."
          leadParagraphs={[
            "US e-commerce sales are projected to reach $1.19 trillion in 2025, 21% of all US retail. The businesses capturing the majority of that growth are not the largest brands. They're the mid-size DTC companies with fast, well-built stores that convert mobile traffic efficiently, run automated post-purchase email flows, and don't lose half their ad spend to slow load times.",
            "FactoryJet has served e-commerce businesses in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the US. We understand what a 10-50 person brand needs from an e-commerce store: not enterprise complexity, but professional design, sub-2-second mobile performance, and a checkout flow that doesn't leak customers.",
            "The businesses we build for rarely buy a new store because the old one looks bad. They buy it because they did the math on their own numbers. At 5,000 visitors a month and an $80 average order, every half point of conversion rate is worth $2,000 a month in sales. Run the same sum on your store before you talk to anyone, including us.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The best ROI in e-commerce is usually a better store, not more ad spend.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: 'Austin TX',      slug: 'austin' },
                  { label: 'Miami FL',       slug: 'miami' },
                  { label: 'Denver CO',      slug: 'denver' },
                  { label: 'Nashville TN',   slug: 'nashville' },
                  { label: 'Portland OR',    slug: 'portland' },
                  { label: 'Charlotte NC',   slug: 'charlotte' },
                  { label: 'Raleigh NC',     slug: 'raleigh' },
                  { label: 'Tampa FL',       slug: 'tampa' },
                  { label: 'Chattanooga TN', slug: 'chattanooga' },
                  { label: 'Boise ID',       slug: 'boise' },
                  { label: 'Fargo ND',       slug: 'fargo' },
                  { label: 'Lincoln NE',     slug: 'lincoln' },
                  { label: 'Sioux Falls SD', slug: 'sioux-falls' },
                ].map(({ label, slug }) => (
                  <a
                    key={slug}
                    href={`/${slug}/ecommerce-development`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </>
          }
          stats={US_ECOMM_STATS}
        />

        {/* ── 9b. INTERACTIVE ROI CALCULATOR ──────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <EcommerceRoiCalculator
              source="us_ecommerce_development_service_page"
              defaultPlatform="shopify"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Traditional Agency vs. Freelancer vs. DIY Platforms"
          lead="Not all e-commerce development options deliver the same output. Here's the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption: 'quoted upfront, same Figma design, platform engineering, and Lighthouse audits as a traditional agency project that costs several times more.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Timelines reflect typical agency and freelancer ranges as of 2026. FactoryJet fixed-price contracts available for all tiers, quoted upfront after a free discovery call."
        />

        {/* ── 11b. HOW PRICING WORKS ───────────────────────────────────────── */}
        {/* Replaces TestimonialsSection here: the same real quote now sits near the
            top, and that component's US stats carry an unverified "$50M+" figure and
            render a dark band (this page now keeps a single dark section). */}
        <section id="pricing-explained" className="scroll-mt-24 bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">WHAT IT COSTS</p>
                <h2 className="mt-3 font-fj-display text-[clamp(1.625rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.03em] text-fj-ink">
                  How pricing works for an ecommerce build
                </h2>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                  We do not publish one price, because a 40-product Shopify store and a B2B store synced to NetSuite are different jobs. What we do promise: one fixed price for an agreed scope, written down before work starts, paid in milestones. Nothing is billed by the hour.
                </p>
                <ul className="mt-6 space-y-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-600">
                  <li><strong className="font-semibold text-fj-ink">Platform.</strong> Shopify and WooCommerce builds cost less than headless or fully custom ones.</li>
                  <li><strong className="font-semibold text-fj-ink">Catalog size.</strong> More products, variants and custom fields mean more setup and testing.</li>
                  <li><strong className="font-semibold text-fj-ink">Migration.</strong> Moving products, customers, orders and SEO from an old store adds scope.</li>
                  <li><strong className="font-semibold text-fj-ink">Integrations.</strong> ERP, 3PL, subscriptions and B2B pricing each add work.</li>
                  <li><strong className="font-semibold text-fj-ink">Running costs.</strong> Platform and app fees are billed to you directly by Shopify, BigCommerce and the app makers, so you always see them.</li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7">
                  <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    SET A BUDGET FIRST
                  </p>
                  <p className="mt-3 font-fj-display text-[1.25rem] font-bold leading-snug tracking-[-0.02em] text-fj-ink">
                    Our cost guides show typical market ranges, with sources.
                  </p>
                  <ul className="mt-5 space-y-3 font-fj-body text-[0.9375rem]">
                    <li>
                      <Link href="/blog/ecommerce-website-cost-2026" className="font-medium text-[#B23E13] underline underline-offset-2">
                        What an ecommerce website costs in 2026
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/shopify-development-cost-2026" className="font-medium text-[#B23E13] underline underline-offset-2">
                        Shopify development cost in 2026
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/the-true-cost-of-shopify-plus-2026" className="font-medium text-[#B23E13] underline underline-offset-2">
                        The true cost of Shopify Plus
                      </Link>
                    </li>
                    <li>
                      <Link href="/website-cost" className="font-medium text-[#B23E13] underline underline-offset-2">
                        How much a website costs in 2026
                      </Link>
                    </li>
                  </ul>
                  <p className="mt-5 border-t border-fj-neutral-100 pt-5 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                    Want a number for your store? Fill in the form at the top of this page and we will send a fixed quote after a free 30-minute call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price E-Commerce Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed price, fixed scope, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="Platform subscription fees (Shopify, BigCommerce) are billed directly by the platform. App subscription fees go directly to app providers. Every scope is quoted after a free discovery call. You own all code and credentials on launch day."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (light, was dark) ─────────────────────────── */}
        {/* Converted to a light band on 2026-09-28 so the page keeps a single dark
            section, per the page build spec. The "120+ store builds" claim was dropped
            because it is not in the confirmed-claims list. */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">WHY FACTORYJET</p>
            <h2 className="mt-3 max-w-[26ch] font-fj-display text-[clamp(1.625rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.03em] text-fj-ink">
              We build the store, then we stay to look after it.
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
              FactoryJet has delivered 500+ projects for businesses in the US, the UK, the UAE and India. Design, development, launch and support all come from one team, so nobody hands you off.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
              {[
                {
                  title: 'We recommend what fits, not what pays us most.',
                  body: 'We build on Shopify, WooCommerce, BigCommerce and custom Next.js. We pick based on your catalog, your team and your plans, and we will tell you when a simpler setup is enough.',
                  span: 'md:col-span-5',
                },
                {
                  title: 'Design decisions made for buying, not for the portfolio.',
                  body: 'Where the size guide sits, when the sticky cart appears, how the mobile product page stacks, which trust signals show near Add to Cart. Every checkout field we remove is one less reason to leave.',
                  span: 'md:col-span-7',
                },
                {
                  title: 'Your code, your hosting, your GitHub, on launch day.',
                  body: 'The full codebase lands in your repository on launch day. No proprietary builder holds your store hostage, and any qualified developer can maintain it.',
                  span: 'md:col-span-7',
                },
                {
                  title: 'Support after launch, from the people who built it.',
                  body: 'Every build includes a post-launch support window. After that, you can keep us on a monthly retainer for fixes, seasonal updates and new features.',
                  span: 'md:col-span-5',
                },
              ].map((p) => (
                <div key={p.title} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${p.span}`}>
                  <div className="mb-4 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                  <h3 className="font-fj-display text-[1.1875rem] font-bold leading-snug tracking-[-0.02em] text-fj-ink">{p.title}</h3>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-relaxed text-fj-neutral-600">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 13b. HIRE ECOMMERCE DEVELOPERS ────────────────────────────────── */}
        <section className="py-14 md:py-20 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">HIRE ECOMMERCE DEVELOPERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Hire ecommerce developers from a custom ecommerce development company.</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#3A3A40] leading-relaxed space-y-4">
                <p>
                  When you <strong>hire ecommerce developers</strong> through FactoryJet, you get a full team: designer, developer, and QA engineer. You do not get a single freelancer juggling multiple clients. As a custom ecommerce development company, we have delivered 500+ projects across the US, the UK, and the UAE. We build everything from DTC stores to multi-vendor marketplaces and B2B platforms.
                </p>
                <p>
                  You can hire a dedicated ecommerce developer for a fixed-scope build. Or keep a team on retainer for ongoing feature work. Either way, the codebase is yours on GitHub from launch day with no lock-in. Once the store is live, that same team can carry on as your{' '}
                  <Link href="/services/ecommerce-growth-agency" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce growth partner</Link>, or keep the store running on a{' '}
                  <Link href="/services/shopify-maintenance-services" className="text-[#B23E13] font-medium underline underline-offset-2">support and maintenance retainer</Link>.
                </p>
                <p>
                  Know your platform already? Go straight to{' '}
                  <Link href="/services/shopify-development" className="text-[#B23E13] font-medium underline underline-offset-2">Shopify development</Link>,{' '}
                  <Link href="/services/woocommerce-development" className="text-[#B23E13] font-medium underline underline-offset-2">WooCommerce development</Link>,{' '}
                  <Link href="/services/magento-development" className="text-[#B23E13] font-medium underline underline-offset-2">Magento development</Link>,{' '}
                  <Link href="/services/ecommerce-app-development" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce app development</Link>, or compare options in our{' '}
                  <Link href="/best-ecommerce-platforms" className="text-[#B23E13] font-medium underline underline-offset-2">best ecommerce platforms guide</Link>.
                  If the storefront needs to run separately from the backend, that is a{' '}
                  <Link href="/headless-commerce" className="text-[#B23E13] font-medium underline underline-offset-2">headless commerce</Link> build.
                  Still setting a budget? Our guide to{' '}
                  <Link href="/blog/ecommerce-website-cost-2026" className="text-[#B23E13] font-medium underline underline-offset-2">what an ecommerce website costs in 2026</Link>{' '}
                  prices Shopify, WooCommerce, BigCommerce and custom builds side by side.
                </p>
                <p>
                  Most of the stores we build sell in more than one place. If the marketplaces are part of the plan, we
                  run{' '}
                  <Link href="/services/amazon-agency" className="text-[#B23E13] font-medium underline underline-offset-2">Amazon</Link>,{' '}
                  <Link href="/services/walmart-marketplace-agency" className="text-[#B23E13] font-medium underline underline-offset-2">Walmart Marketplace</Link> and{' '}
                  <Link href="/services/tiktok-shop-agency" className="text-[#B23E13] font-medium underline underline-offset-2">TikTok Shop</Link> alongside the
                  storefront, so catalogue, pricing and fulfilment stay in one system rather than three.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-white p-7">
                <h3 className="text-xl font-bold text-[#0F0F12] mb-3">What a custom ecommerce development company handles</h3>
                <ul className="space-y-2.5 text-[#3A3A40] text-[15px]">
                  <li>• Custom storefronts on Shopify, WooCommerce &amp; Magento.</li>
                  <li>• Fully custom ecommerce platforms &amp; marketplaces.</li>
                  <li>• ERP, 3PL, POS &amp; payment integrations.</li>
                  <li>• Migrations with SEO-safe 301 redirect mapping.</li>
                </ul>
                <Link
                  href="https://calendly.com/bhavesh-factoryjet/30min"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#B23E13] px-6 py-3 text-white font-semibold hover:bg-[#d94d20] transition-colors"
                >
                  Talk to the Founder →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every e-commerce discovery call, answered here, without the runaround."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve, internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">E-Commerce Development Services by City</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { city: 'Austin, TX', href: '/austin/ecommerce-development/' },
                { city: 'Miami, FL', href: '/miami/ecommerce-development/' },
                { city: 'Denver, CO', href: '/denver/ecommerce-development/' },
                { city: 'Nashville, TN', href: '/nashville/ecommerce-development/' },
                { city: 'Portland, OR', href: '/portland/ecommerce-development/' },
                { city: 'Charlotte, NC', href: '/charlotte/ecommerce-development/' },
                { city: 'Raleigh, NC', href: '/raleigh/ecommerce-development/' },
                { city: 'Tampa, FL', href: '/tampa/ecommerce-development/' },
                { city: 'Boise, ID', href: '/boise/ecommerce-development/' },
                { city: 'Sioux Falls, SD', href: '/sioux-falls/ecommerce-development/' },
                { city: 'Lincoln, NE', href: '/lincoln/ecommerce-development/' },
                { city: 'Chattanooga, TN', href: '/chattanooga/ecommerce-development/' },
                { city: 'Fargo, ND', href: '/fargo/ecommerce-development/' },
              ].map(({ city, href }) => (
                <Link key={href} href={href} className="px-4 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors">
                  {city}.
                </Link>
              ))}
            </div>

            {/* India city pages. This page is the canonical parent for
                /services/ecommerce-development/[city], which are India markets and are
                listed in sitemap-india. Added 2026-07-26: all 13 had zero inbound links. */}
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mt-12 mb-3">Serving India.</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">E-Commerce Development Services in India.</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { city: 'Mumbai', slug: 'mumbai' },
                { city: 'Delhi', slug: 'delhi' },
                { city: 'Bangalore', slug: 'bangalore' },
                { city: 'Hyderabad', slug: 'hyderabad' },
                { city: 'Chennai', slug: 'chennai' },
                { city: 'Pune', slug: 'pune' },
                { city: 'Ahmedabad', slug: 'ahmedabad' },
                { city: 'Kolkata', slug: 'kolkata' },
                { city: 'Jaipur', slug: 'jaipur' },
                { city: 'Surat', slug: 'surat' },
                { city: 'Kochi', slug: 'kochi' },
                { city: 'Lucknow', slug: 'lucknow' },
                { city: 'Chandigarh', slug: 'chandigarh' },
              ].map(({ city, slug }) => (
                <Link
                  key={slug}
                  href={`/services/ecommerce-development/${slug}`}
                  className="px-4 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
                >
                  {city}.
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce for US small businesses in 2026.</p>
              </Link>
              <Link href="/blog/best-ecommerce-platform-tampa-boutiques-dtc-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">How Tampa boutiques and DTC brands pick an ecommerce platform.</p>
              </Link>
              <Link href="/blog/austin-ecommerce-checkout-optimization-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Cut cart abandonment: an Austin checkout optimization guide.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="light"
            eyebrow="READY TO START"
            headline="Get a fixed quote and a launch date for your store"
            sub="In a free 30-minute call we look at your current store or plan, point out what is costing you sales, and recommend a platform. Then we send a fixed price and a launch date in writing. No pitch, no pressure."
            primaryCta={{ label: 'Book a Free Store Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See Case Studies', href: '/case-studies' }}
            objectionHandler="Fixed price. You own the code. Support after launch. 500+ projects delivered."
          />
        </div>

      </main>

      <RelatedGuides
        links={[
          { href: '/blog/shopify-vs-custom-website-us-small-business-2026', label: 'Shopify vs a custom website for US small business.' },
          { href: '/blog/mobile-only-design-strategy', label: 'Mobile-only vs responsive design: which to pick.' },
        ]}
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

