import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ecommerceAlternates } from '@/data/hreflangMap';

import Image from 'next/image';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import ServiceHeroImageBand from '@/components/v2/ServiceHeroImageBand';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development USA | Shopify & Custom Stores | FactoryJet',
  description:
    'High-converting Shopify, WooCommerce & BigCommerce stores for US businesses. Mobile-first, Lighthouse 95+ Starting at $3,999.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development USA | Custom Online Stores | FactoryJet',
    description:
      'Shopify, WooCommerce, BigCommerce, and custom e-commerce for US businesses. fixed-price. Conversion-optimized. Starting at $3,999.',
    url: 'https://factoryjet.com/us/services/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development USA | Custom Online Stores | FactoryJet',
    description:
      'Shopify, WooCommerce, BigCommerce, and custom e-commerce for US businesses. fixed-price, milestone-paid.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development',
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which e-commerce platform is right for my business — Shopify, WooCommerce, or custom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify is the best default for most product-based businesses: it handles hosting, security, and payment infrastructure so you focus on selling. WooCommerce is right when you\'re already on WordPress and need deep content-commerce integration. BigCommerce suits mid-market brands that need native B2B features without Shopify Plus pricing. Custom Next.js Commerce is for businesses with unique data models, complex product configurators, or performance requirements that exceed what platform themes can deliver.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does e-commerce development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s e-commerce development starts at $3,999 for a platform store build (Shopify or WooCommerce with a custom theme). A full store with advanced features — product configurator, subscription logic, B2B pricing, or a headless frontend — runs $9,500–$20,000. Fully custom e-commerce platforms with proprietary product logic, multi-vendor marketplaces, or complex ERP integrations start at $20,000 and are scoped after discovery. All prices are significantly lower than comparable US agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an e-commerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A platform store (Shopify or WooCommerce) with a custom theme and standard features takes 3–5 weeks. A store with subscription logic, a product configurator, or B2B pricing tiers takes 5–8 weeks. Custom-built e-commerce platforms and headless storefronts run 8–14 weeks depending on catalog size, integration complexity, and whether we\'re migrating data from an existing platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my existing store to a new platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — platform migrations are one of our most common e-commerce engagements. We migrate products (including variants, metafields, and images), customers, orders, and reviews. We preserve your URL structure with 301 redirects to protect SEO equity. We\'ve migrated stores from WooCommerce, Magento, Squarespace, Wix, BigCommerce, and custom platforms to Shopify — and from Shopify to headless Next.js.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is headless e-commerce and when does my store need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Headless e-commerce separates the storefront (what customers see) from the backend commerce engine (inventory, orders, checkout). The frontend is rebuilt in a fast framework like Next.js or Remix while Shopify or a headless commerce API handles transactions. The result: sub-1-second page loads, full design freedom, and custom UX that platform themes can\'t deliver. Most stores under $5M/year revenue don\'t need headless — the build cost outweighs the conversion uplift. Above that, the math changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my e-commerce store rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every store we build includes technical e-commerce SEO: Product and BreadcrumbList schema markup for Google Shopping eligibility, optimized meta titles and descriptions for product and collection templates, canonical URLs to prevent duplicate content issues (common on Shopify and WooCommerce), compressed images with descriptive alt text, Core Web Vitals optimization, and sitemap submission to Google Search Console. Content SEO — collection page copy, blog strategy, keyword research — is available as an add-on.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Commerce Development Services USA',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'E-Commerce Development',
  description:
    'Custom e-commerce development for US businesses. Shopify, WooCommerce, BigCommerce, and headless Next.js Commerce. Conversion-optimized, mobile-first, Lighthouse 95+. fixed-price, milestone-paid.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Platform Store Build',
      price: '3999',
      priceCurrency: 'USD',
      description: 'Custom Shopify or WooCommerce store with a Figma-designed theme, products, payments, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'Advanced E-Commerce',
      price: '9500',
      priceCurrency: 'USD',
      description: 'E-commerce with subscription logic, product configurator, B2B pricing, or multi-channel integration.',
    },
    {
      '@type': 'Offer',
      name: 'Custom or Headless Commerce',
      price: '20000',
      priceCurrency: 'USD',
      description: 'Headless storefront, custom platform, or multi-vendor marketplace with proprietary product logic.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const ECOMM_SERVICES = [
  {
    name: 'Shopify & Shopify Plus',
    description:
      'Custom Liquid themes, full store builds, Shopify Plus checkout customization, B2B wholesale portals, and headless Hydrogen storefronts. The right Shopify setup for your catalog size and revenue stage.',
    example: 'Our most common e-commerce engagement. 120+ Shopify stores delivered.',
    linkLabel: 'See Shopify services',
    linkHref: '/us/services/shopify-development',
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
      'A Next.js or Remix storefront connected to Shopify, BigCommerce, or a headless commerce API (Medusa, Vendure, Commerce.js). Sub-1-second page loads and full design freedom — for brands where performance directly moves revenue.',
    example: 'Recommended for stores doing $5M+/year or with complex product configurator needs.',
    linkLabel: 'Is headless right for you?',
    linkHref: '/contact',
  },
  {
    name: 'E-Commerce Platform Migration',
    description:
      'Full data migrations from WooCommerce, Magento, Squarespace, Wix, PrestaShop, and custom platforms — preserving product catalog, customer data, order history, and SEO URL structure with 301 redirects.',
    example: 'Zero downtime launch day. All redirects mapped before DNS switch.',
    linkLabel: 'Plan your migration',
    linkHref: '/contact',
  },
  {
    name: 'Multi-Vendor Marketplace',
    description:
      'Custom marketplace platforms with vendor onboarding, split payment logic, commission management, seller dashboards, and product approval workflows — built on Next.js with Stripe Connect.',
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
      'A 30-minute strategy session. We audit your current platform, catalog, traffic, and conversion data — then recommend the right tech stack before scoping a single hour of work.',
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
      'Engineering in your chosen platform — Liquid, WooCommerce PHP, BigCommerce Stencil, or Next.js. Daily commits to your GitHub repo. Staging store live within 48–72 hours.',
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

const ECOMM_STATS = [
  {
    value: '500+',
    label: 'businesses served across web design, e-commerce, and custom software since 1999',
    microcopy: 'FactoryJet has been building for US clients for 25+ years',
    categoryLabel: 'TRACK RECORD',
  },
  {
    value: '2.3×',
    label: 'average improvement in add-to-cart rate — custom build vs. generic theme',
    microcopy: 'measured across FactoryJet e-commerce builds in 2024',
    categoryLabel: 'CONVERSION LIFT',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid e-commerce builds with full code ownership',
    microcopy: 'same design quality, same engineering standard — predictable from quote to launch',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_ECOMM_STATS = [
  {
    value: '$1.19T',
    label: 'projected US e-commerce sales in 2025 — up from $1.06T in 2023',
    sourceUrl: 'https://www.emarketer.com/content/us-ecommerce-forecast-2025',
    sourceLabel: 'eMarketer 2025 Forecast',
  },
  {
    value: '21%',
    label: 'of total US retail sales now happen online — up from 15% in 2020',
    sourceUrl: 'https://www.census.gov/retail/ecommerce.html',
    sourceLabel: 'US Census Bureau Retail Data',
  },
  {
    value: '69%',
    label: 'average cart abandonment rate across e-commerce — mostly fixable with better UX',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    sourceLabel: 'Baymard Institute Research',
  },
];

const INDUSTRIES = [
  {
    name: 'Fashion & Apparel',
    description:
      'Variant-heavy product pages with size guides, color swatches, and fit recommenders. Back-in-stock alerts, lookbook galleries, cross-sell bundles, and Klaviyo browse-abandonment flows.',
    example: 'High-SKU apparel builds with 200+ product variants and infinite-scroll collection pages.',
    linkLabel: 'See apparel examples',
    linkHref: '/portfolio',
  },
  {
    name: 'Health, Beauty & Supplements',
    description:
      'Subscription-first stores with ReCharge or Skio, ingredient transparency product pages, before/after galleries, quiz-based product recommenders, and compliance-conscious copy review.',
    example: 'Subscription stores typically reach 40% of revenue on auto-renew within 90 days.',
  },
  {
    name: 'Food, Beverage & Gifting',
    description:
      'Custom box builders, gift message flows, perishable shipping logic, ZIP code validation for delivery windows, and 3PL integration for automated fulfillment with ShipStation or Shippo.',
    example: 'Seasonal gifting brands handle 10× traffic spikes with zero checkout errors.',
  },
  {
    name: 'Home, Furniture & Lifestyle',
    description:
      'High-AOV product pages with room-scene photography, product configurators, white-glove delivery options, and Affirm or Klarna financing. Built for purchase decisions that take weeks, not seconds.',
    example: 'Financing widget placement increases AOV 15% on average across furniture builds.',
  },
  {
    name: 'B2B & Wholesale',
    description:
      'Wholesale portals with company accounts, net terms, volume pricing tiers, minimum order quantities, and a separate buyer-facing storefront — all synced to a single inventory source.',
    example: 'B2B clients eliminate manual order entry and quote-to-invoice delays entirely.',
  },
  {
    name: 'Electronics & Tech Accessories',
    description:
      'Spec-rich product pages with comparison tables, compatibility finders, warranty registration, and multi-channel inventory sync across Amazon, eBay, and your own storefront.',
    example: 'Multi-channel sync eliminates oversells and manual inventory reconciliation.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US E-Commerce Agency' },
  { label: 'Freelancer' },
  { label: 'DIY (Squarespace/Wix)' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$3,999',
      '$15,000–$60,000',
      '$5,000–$15,000',
      '$23–$49/month (forever)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['3–5 weeks', '3–6 months', '6–12 weeks (unreliable)', '1 week (but you build it)'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Platform migration with SEO preservation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Checkout + payment testing before launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance on delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership (your GitHub)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
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
    priceRange: 'From $3,999',
    description:
      'A custom-designed Shopify or WooCommerce store — ready to sell on launch day. Best for product-based businesses launching their first online store or replacing a template site.',
    features: [
      'Platform of your choice: Shopify or WooCommerce',
      'Custom Figma design — homepage, PDP, collection, cart',
      'Up to 100 products imported and configured',
      'Payment setup: Stripe, PayPal, Shop Pay',
      'Shipping zones and tax configuration',
      'Technical SEO: schema, sitemaps, canonical URLs',
      'Google Analytics 4 + Search Console setup',
      'Lighthouse 95+ on delivery',
    ],
    cta: { label: 'Book a Consultation', modal: true, region: 'us' },
  },
  {
    name: 'Advanced E-Commerce',
    priceRange: 'From $9,500',
    description:
      'A full-featured store with subscription logic, B2B pricing, a product configurator, or multi-channel inventory sync. The right tier for brands with complex selling models.',
    features: [
      'Everything in Platform Store, plus:',
      'Subscription products (ReCharge or Skio)',
      'B2B wholesale portal or tiered pricing',
      'Product configurator or bundle builder',
      'Advanced Klaviyo email flows (8+ automated sequences)',
      'Multi-channel inventory sync (Amazon, eBay, or 3PL)',
      'Reviews platform integration (Yotpo, Okendo, or Judge.me)',
      'Post-purchase upsell flow',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Headless / Custom',
    priceRange: 'From $20,000',
    description:
      'A headless Next.js storefront, fully custom commerce platform, or multi-vendor marketplace. For brands where standard platform themes can\'t meet performance or UX requirements.',
    features: [
      'Headless Next.js or Remix storefront',
      'Commerce backend: Shopify, BigCommerce, Medusa, or custom',
      'Sub-1-second page loads on mobile (streaming SSR)',
      'Custom product logic, pricing engine, or configurator',
      'Multi-vendor marketplace with Stripe Connect split payments',
      'ERP or WMS integration (NetSuite, SAP, Brightpearl)',
      'International multi-currency and multi-language setup',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration',
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
  { key: 'trust',     label: 'Working With Us' },
];

const FAQ_ITEMS = [

  /* ── Platform Selection ── */
  {
    category: 'platform',
    question: 'Which e-commerce platform is right for my business?',
    answer:
      'Shopify is the best default for most product-based businesses — reliable hosting, payment infrastructure, and a huge app ecosystem. WooCommerce is right when you\'re already on WordPress and need deep content-commerce integration (recipes, editorial, guides). BigCommerce suits mid-market brands that need native B2B features without Shopify Plus pricing. Custom Next.js Commerce or headless builds are for businesses with unique product logic, complex configurators, or performance requirements that exceed what platform themes can deliver. We make this assessment during discovery — we won\'t push a more complex solution than you need.',
  },
  {
    category: 'platform',
    question: 'What is headless e-commerce and when does my store need it?',
    answer:
      'Headless e-commerce separates your storefront (what customers see) from the commerce backend (inventory, orders, checkout). The frontend is rebuilt in a fast framework like Next.js, while Shopify or another API handles transactions. The result is sub-1-second page loads, full design freedom, and custom UX that platform themes can\'t match. Most stores under $5M/year revenue don\'t need headless — the additional build cost doesn\'t justify the conversion uplift. Above that revenue level, the math usually works in its favor.',
  },
  {
    category: 'platform',
    question: 'Can you build a multi-vendor marketplace instead of a single-brand store?',
    answer:
      'Yes. We build custom marketplace platforms with vendor onboarding flows, split payment logic via Stripe Connect, commission management, seller dashboards, product approval workflows, and dispute handling. These are fully custom Next.js builds — Shopify and WooCommerce aren\'t architected for true multi-vendor marketplaces, so we don\'t force them into that shape.',
  },

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does e-commerce development cost?',
    answer:
      'FactoryJet\'s e-commerce development starts at $3,999 for a platform store build (Shopify or WooCommerce with a custom theme, products, payments, and launch). Advanced stores with subscription logic, B2B pricing, or product configurators run $9,500. Headless storefronts, custom platforms, and multi-vendor marketplaces start at $20,000 and are scoped after a free discovery call. All prices are significantly lower than comparable US e-commerce agencies.',
  },
  {
    category: 'pricing',
    question: 'How long does an e-commerce build take?',
    answer:
      'A platform store (Shopify or WooCommerce) with a custom theme and standard features takes 3–5 weeks. An advanced store with subscriptions, B2B pricing, or a product configurator takes 5–8 weeks. Headless Next.js storefronts and custom commerce platforms run 8–14 weeks depending on catalog size, integration complexity, and whether we\'re migrating data from an existing store.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep e-commerce pricing fixed and predictable?',
    answer:
      'We work fixed-price and milestone-paid — every store is scoped upfront with no hourly billing and no scope-creep invoices. Building e-commerce for US businesses since 2005 means we estimate accurately on the first call, so the quote you sign is what you pay. You get the same Figma-first design process, the same platform engineering quality, the same Lighthouse audit before handover — and full code ownership at handoff.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my existing store to a new platform?',
    answer:
      'Yes — platform migrations are one of our most common e-commerce engagements. We migrate products (including variants, metafields, and images), customers, order history, and reviews. We map your URL structure and implement 301 redirects for every changed URL before DNS switch. We\'ve migrated stores from WooCommerce, Magento, Squarespace, Wix, PrestaShop, BigCommerce, and custom platforms to Shopify — and from Shopify to headless Next.js.',
  },
  {
    category: 'migration',
    question: 'Will my Google rankings survive a platform migration?',
    answer:
      'Yes — if done correctly. Before any migration, we audit your existing URL structure, identify which product and collection pages have rankings worth protecting, and build a complete redirect map before touching DNS. Every changed URL gets a 301 redirect. We submit the new sitemap to Google Search Console on launch day and monitor organic traffic for 30 days post-launch. Most clients see rankings fully recover within 6–8 weeks.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'What SEO comes included with an e-commerce build?',
    answer:
      'Every e-commerce store we build includes technical SEO as standard: Product and BreadcrumbList schema markup for Google Shopping eligibility, optimized title tags and meta descriptions for product and collection page templates, canonical URLs to prevent duplicate content issues (common on Shopify and WooCommerce by default), compressed images with descriptive alt text, XML sitemap submission to Google Search Console, and Core Web Vitals optimization. Content SEO — collection page copy, keyword research, blog strategy — is available as a separate add-on.',
  },
  {
    category: 'technical',
    question: 'What payment gateways can you integrate?',
    answer:
      'We configure and test Stripe (our default), PayPal, Shop Pay, Apple Pay, Google Pay, Affirm (buy-now-pay-later), Klarna, and Afterpay depending on your platform and market. For B2B clients, we also integrate net terms via Resolve Pay or similar. All payment flows are tested end-to-end on staging before launch — we don\'t go live with an untested checkout.',
  },
  {
    category: 'technical',
    question: 'Can you integrate my e-commerce store with my ERP, 3PL, or accounting software?',
    answer:
      'Yes. Common integrations include: ERPs (NetSuite, SAP B1, Brightpearl, Cin7), 3PLs (ShipBob, ShipMonk, custom warehouse systems), accounting (QuickBooks, Xero), shipping (ShipStation, Shippo, EasyPost), and POS systems (Shopify POS, Square, Lightspeed). If your system has an API or supports webhooks, we can connect to it.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US e-commerce agency?',
    answer:
      'Three things: price (fixed-price — specialized team serving US businesses since 1999), ownership (full codebase delivered to your GitHub on launch day, zero lock-in), and honesty (we\'ll tell you when a simpler solution fits better than a more expensive one). We\'ve delivered 500+ projects for US businesses. We know what actually drives e-commerce revenue versus what looks good in a proposal.',
  },
  {
    category: 'trust',
    question: 'Do I own the code after the project is done?',
    answer:
      'Yes — 100%. The full codebase is delivered to your GitHub repository on launch day. You own every file, every integration, and all API credentials. No proprietary platform, no monthly FactoryJet retainer required to keep your store running. Any developer — ours or someone you hire later — can maintain and extend it.',
  },

  {
    category: 'platform',
    question: 'Can you build a subscription or recurring-revenue e-commerce store?',
    answer:
      'Yes — subscription e-commerce is one of the highest-ROI models we build. We implement subscription logic using Recharge (the Shopify standard), Bold Subscriptions, or WooCommerce Subscriptions depending on your platform. Subscription products include: subscription boxes (monthly, quarterly), consumable replenishment programs (coffee, supplements, pet food), digital membership access, and B2B auto-replenishment. Subscription stores generate 30–50% higher customer lifetime value than one-time-purchase stores. We configure cancel flows designed to reduce churn, tiered subscription pricing, and loyalty points for subscribers.',
  },
  {
    category: 'technical',
    question: 'Do you build B2B e-commerce stores with wholesale pricing and net terms?',
    answer:
      'Yes — B2B e-commerce is a growing part of our work. We build: wholesale ordering portals with tiered dealer pricing (show retail price to consumers, wholesale price to authenticated dealers), net-30/net-60 payment terms via Resolve Pay, Apruve, or Shopify\'s native B2B tools, company account management with multiple users per buyer account, custom price lists per customer segment, minimum order quantity enforcement, purchase order upload, and reorder pads. Shopify Plus includes native B2B features; standard Shopify B2B is handled via apps. WooCommerce B2B uses WholesaleX or B2BKing.',
  },
  {
    category: 'technical',
    question: 'How do I optimize my e-commerce store for mobile shoppers?',
    answer:
      'Mobile accounts for 65–75% of US e-commerce traffic but only 55–60% of revenue — the gap is caused by poor mobile checkout UX. FactoryJet closes it with: mobile-first layout design (375px screen built before desktop), one-tap Apple Pay and Google Pay checkout (eliminates the single largest cart abandonment point), thumb-friendly product page layouts with sticky Add-to-Cart buttons, lazy-loaded images that deliver fast initial paint on mobile networks, and Google Core Web Vitals compliance (LCP under 2.5s, CLS below 0.1, INP under 200ms). Every store passes Lighthouse 90+ on mobile before delivery.',
  },
  {
    category: 'technical',
    question: 'Can you build a multi-language or international e-commerce store?',
    answer:
      'Yes — international e-commerce configuration is a standard capability. We implement Shopify Markets for multi-language, multi-currency storefronts: automatic currency conversion with presentment currencies, translated product descriptions and collection pages via Shopify\'s Translate & Adapt app or Weglot, international shipping zones with zone-specific carrier rate calculations, duty and import tax display at checkout via Shopify\'s Landed Cost feature, HS tariff code fields for customs declarations, and international payment methods (Klarna for EU, iDEAL for Netherlands, Mercado Pago for Latin America). We also handle IOSS registration guidance for EU sales above €150 thresholds.',
  },
  {
    category: 'seo',
    question: 'How does FactoryJet optimize e-commerce stores for Google and AI search?',
    answer:
      'Beyond standard technical SEO, FactoryJet builds AEO (Answer Engine Optimization) into every store — structured content that appears in ChatGPT, Perplexity, and Google AI Overviews. This means: Product schema with pricing, availability, and ratings for Google Shopping; FAQPage schema targeting transactional questions consumers ask about your category; BreadcrumbList schema for category page signals; collection page copy answering \'what is [product category]\' and \'best [product] for [use case]\' queries; and internal linking that creates topic authority clusters. Early adopters of AEO are winning significant zero-click search positions their competitors haven\'t claimed yet.',
  },
  {
    category: 'trust',
    question: 'What ongoing support does FactoryJet offer after my store launches?',
    answer:
      'Every e-commerce project includes a 14–30 day post-launch support window covering bug fixes, minor adjustments, and launch questions at no additional charge. Beyond that, FactoryJet offers monthly retainer plans from $299/month: up to 4 hours of development time, priority same-day bug response, and access to a dedicated engineer who knows your codebase. Retainer clients get pre-built seasonal campaign assets, quarterly performance reviews, and priority scheduling for new feature development. We also offer one-time project engagements for specific post-launch work: new collections, checkout A/B tests, app integrations, and performance audits.',
  },
  {
    category: 'trust',
    question: 'How do I know if I need an e-commerce agency or a freelancer for my store?',
    answer:
      'A freelancer works well for: a simple theme installation, a single-app integration, or a small catalog store with no custom requirements. An agency makes sense when: you need a custom design (not a theme), you\'re migrating from another platform with SEO equity to protect, you have complex product logic (variants, subscriptions, B2B pricing), or you need the project delivered on a deadline. FactoryJet operates at agency quality with transparent fixed pricing — you get a full team (designer, developer, QA) at the cost of a mid-market freelancer, with a 7-day delivery guarantee on standard Shopify builds.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your e-commerce store in 7 days',
  description: 'Our proven 7-day process for delivering professional, conversion-optimized e-commerce stores for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="ecommerce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ecommerce-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ecommerce-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="speakable-schema-ecommerce-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Ecommerce Development USA | Shopify & Custom Stores | FactoryJet",
          "url": "https://factoryjet.com/us/services/ecommerce-development/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'E-Commerce', href: '/us/services/ecommerce-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Consultation', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · USA"
          headline="An Online Store That Sells on Any Platform, at Any Scale"
          lead="Most US e-commerce stores are built on generic themes and convert below 1%. FactoryJet builds custom Shopify, WooCommerce, BigCommerce, and headless stores — designed in Figma, engineered for conversion — fixed-price, milestone-paid, and predictable from quote to launch."
          primaryCta={{ label: 'Book a Consultation', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served',
            'Starting at $3,999',
            'All major platforms',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                THE COST OF A 1% CONVERSION RATE
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Same traffic. Better store. The math is simple.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Monthly visitors', value: '5,000' },
                  { label: 'Average order value', value: '$80' },
                  { label: 'Generic theme (1% conv.)', value: '$4,000/mo' },
                  { label: 'Custom store (2.3% conv.)', value: '$9,200/mo' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-fj-neutral-100 pb-3">
                    <p className="font-fj-body text-[0.875rem] text-fj-neutral-500">{row.label}</p>
                    <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}>{row.value}</p>
                  </div>
                ))}
                <div className="rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3">
                  <p className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28]">
                    +$5,200/month from the same traffic. A custom store pays for itself in under 60 days.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/card-ecommerce.webp"
          imageAlt="Custom e-commerce checkout flow on dual screens — FactoryJet e-commerce development"
          stats={[
            { value: '500+', label: 'Businesses Served' },
            { value: '7 Days', label: 'Delivery Guarantee' },
            { value: 'From $3,999', label: 'Fixed Price, Confirmed Upfront' },
            { value: '25 Yrs', label: 'E-Commerce Expertise' },
          ]}
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 25 years of e-commerce. US brands trust the results."
        />

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
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                The average US e-commerce store converts at 1.4%. The top quartile converts at 3–5%. The difference isn&apos;t product — it&apos;s the store. Slow load times, confusing navigation, a mobile checkout that leaks customers at the payment step, and product pages that bury the &quot;add to cart&quot; button below the fold. These are engineering and design problems, not marketing problems.
              </p>

              {/* Key e-commerce metrics — aria-hidden decorative */}
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
                FactoryJet designs every e-commerce store around conversion: where the size guide goes, when the sticky cart appears, how the mobile PDP stacks, what trust signals appear above the fold, and how the checkout flow handles hesitation. We&apos;ve built 120+ Shopify stores and hundreds of WooCommerce and custom builds across the US. The data from those builds informs every decision we make on the next one.
              </p>
              <p>
                We&apos;re platform-agnostic. Shopify, WooCommerce, BigCommerce, headless Next.js — we recommend the right stack for your catalog, your team&apos;s technical comfort, and your revenue stage. Then we build it properly, hand over the code, and get out of the way.
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
                  { platform: 'Shopify', best: 'DTC brands, subscriptions, rapid launch', starting: '$3,999' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce', starting: '$3,999' },
                  { platform: 'BigCommerce', best: 'B2B, mid-market, multi-channel', starting: '$5,999' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, checkout UI', starting: '$15,000' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX', starting: '$20,000' },
                  { platform: 'Custom Platform', best: 'Marketplace, proprietary logic', starting: '$20,000' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.platform}</p>
                      <p className="fj-display flex-shrink-0 font-bold text-[#F05A28]" style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}>
                        {item.starting}
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

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your store has traffic. The conversion rate is where revenue goes to die."
          lead="69% of shopping carts are abandoned before checkout. Most of those abandonments are fixable — with faster load times, better mobile UX, and a checkout flow that doesn't leak customers at the payment step."
          pillars={[
            {
              icon: '📱',
              title: 'Mobile is where your customers shop. It\'s where most stores fail.',
              body: 'Over 65% of US e-commerce traffic is now mobile. The average template-built store converts at 0.5% on mobile versus 1.8% on desktop — a 3.6× gap that exists entirely because the mobile experience wasn\'t designed, it was adapted. Tap targets are too small. Images are uncompressed. The checkout requires typing in a 16-digit card number on a phone keyboard.',
            },
            {
              icon: '🐢',
              title: 'Every second of load time costs you 7% in conversions',
              body: 'Google\'s research shows a 1-second delay in page load reduces conversions by 7%. The average Shopify or WooCommerce store using a theme-store template loads in 4–6 seconds on mobile 4G. That\'s 21–35% of your potential revenue gone before a product image finishes rendering. A properly optimized custom build loads in under 2 seconds.',
            },
            {
              icon: '💸',
              title: 'US e-commerce agencies quote $15,000–$60,000 for this',
              body: 'A mid-tier US e-commerce agency charges $15,000–$60,000 for a custom store build, before retainers, migration fees, or app configuration. FactoryJet delivers the same Figma-first design, the same platform engineering quality, and the same Lighthouse audit — fixed-price, milestone-paid, with full code ownership at handoff. We have been building e-commerce for US clients since 1999.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 5 Stages"
          lead="Discovery before we commit to a platform. Design approval before we commit to code. Full checkout testing before we commit to launch."
          stages={ECOMM_JOURNEY_STAGES}
          closingNote="5 STAGES · 3–14 WEEKS TO LAUNCH · PLATFORM-AGNOSTIC · ZERO DOWNTIME LAUNCH DAY"
        />

        {/* ── 6. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six E-Commerce Services for US Businesses"
          lead="From a Shopify launch to a fully custom marketplace — we scope the right engagement for your platform, catalog complexity, and revenue stage."
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
                          color: '#F05A28',
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
                  fill
                  className="object-cover object-center"
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
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify / Shopify Plus</strong> — Custom Liquid themes and Hydrogen headless builds. Checkout Extensibility for Plus clients. Our most-used platform for DTC brands.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WooCommerce on WordPress</strong> — Custom themes with Gutenberg blocks, WooCommerce Subscriptions, Bookings, and Product Bundles. Built for teams that need editorial and commerce on a single CMS.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">BigCommerce (Stencil)</strong> — Custom Stencil themes and headless builds using the BigCommerce Storefront API. Used for B2B brands that need native price lists, quote management, and ERP integration.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Next.js + Headless Commerce</strong> — For performance-critical stores. We connect Next.js to Shopify, BigCommerce, Medusa, or a custom commerce API — streaming SSR, edge caching, sub-1-second LCP.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Stripe, Klaviyo, ShipStation</strong> — Payment, email, and fulfillment infrastructure that integrates cleanly into any platform we build on.
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
                borderTopColor: '#0052CC',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  E-Commerce Tech Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Storefronts', tools: 'Shopify Liquid, WooCommerce, Next.js' },
                  { category: 'Design', tools: 'Figma, custom component systems' },
                  { category: 'Payments', tools: 'Stripe, PayPal, Affirm, Klarna' },
                  { category: 'Email & SMS', tools: 'Klaviyo, Omnisend, Postscript' },
                  { category: 'Subscriptions', tools: 'ReCharge, Skio, WooCommerce Sub.' },
                  { category: 'Shipping', tools: 'ShipStation, Shippo, EasyPost' },
                  { category: 'Analytics', tools: 'GA4, Meta Pixel, Triple Whale, Northbeam' },
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
            "US e-commerce sales are projected to reach $1.19 trillion in 2025 — 21% of all US retail. The businesses capturing the majority of that growth are not the largest brands. They're the mid-size DTC companies with fast, well-built stores that convert mobile traffic efficiently, run automated post-purchase email flows, and don't lose half their ad spend to slow load times.",
            "FactoryJet has served e-commerce businesses in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the US since 1999. We understand what a 10–50 person brand needs from an e-commerce store: not enterprise complexity, but professional design, sub-2-second mobile performance, and a checkout flow that doesn't leak customers.",
            "The businesses we build for aren't buying a new store because their current one looks bad. They're buying it because they calculated the cost of staying on a template: 1% conversion rate × 5,000 monthly visitors × $80 AOV = $4,000/month. 2.3% × 5,000 × $80 = $9,200/month. That $5,200 monthly difference pays for the build in under 60 days.",
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
                    href={`/us/services/ecommerce-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
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

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Agency vs. Freelancer vs. DIY Platforms"
          lead="Not all e-commerce development options deliver the same output. Here's the honest comparison."
          pullQuote={{
            stat: '$3,999',
            caption: 'starting price — same Figma design, platform engineering, and Lighthouse audits as a $20,000 US agency project.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices and timelines reflect typical US market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11b. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="CLIENT RESULTS"
          headline="What US founders say after we build their e-commerce store"
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price E-Commerce Development"
            lead="No hourly billing. No scope creep surprises. Every tier includes a fixed price, fixed scope, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Platform subscription fees (Shopify, BigCommerce) are billed directly by the platform. App subscription fees go directly to app providers. Custom scopes quoted after a free discovery call. You own all code and credentials on launch day."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We've built e-commerce since 2005. We know what actually moves revenue."
          lead="FactoryJet has delivered 500+ projects for US businesses across every e-commerce platform. We know which design decisions move the needle on conversion — and which ones just look good in an agency proposal."
          pillars={[
            {
              icon: '📐',
              title: 'Platform-agnostic. We recommend what fits — not what we prefer.',
              body: 'Most agencies have a platform they push regardless of your situation — either because they have a partnership deal or because it\'s all they know. We build on Shopify, WooCommerce, BigCommerce, and custom Next.js. We make the recommendation based on your catalog, your team, and your revenue stage — not our partnership incentives.',
            },
            {
              icon: '📊',
              title: 'Conversion-first design backed by 120+ store builds',
              body: 'We know from 120+ Shopify builds and hundreds of WooCommerce and custom stores that sticky carts outperform static ones, that social proof within 200px of the Add to Cart button lifts conversion, and that every unnecessary field in checkout reduces completion rate by 1–2%. We design around those data points — not around what looks good in a mockup.',
            },
            {
              icon: '🔒',
              title: 'Your code, your hosting, your GitHub — on launch day.',
              body: 'The full codebase lands in your repository the day you go live. No proprietary builder that holds your store hostage. No monthly retainer required to keep your site running. No FactoryJet dependency baked into your architecture. You can hire any developer in the world to maintain it tomorrow.',
            },
          ]}
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every e-commerce discovery call — answered here, without the runaround."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve — internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">E-Commerce Development Services by City</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { city: 'Austin, TX', href: '/us/austin/ecommerce-development/' },
                { city: 'Miami, FL', href: '/us/miami/ecommerce-development/' },
                { city: 'Denver, CO', href: '/us/denver/ecommerce-development/' },
                { city: 'Nashville, TN', href: '/us/nashville/ecommerce-development/' },
                { city: 'Portland, OR', href: '/us/portland/ecommerce-development/' },
                { city: 'Charlotte, NC', href: '/us/charlotte/ecommerce-development/' },
                { city: 'Raleigh, NC', href: '/us/raleigh/ecommerce-development/' },
                { city: 'Tampa, FL', href: '/us/tampa/ecommerce-development/' },
                { city: 'New York, NY', href: '/us/new-york/ecommerce-development/' },
                { city: 'Cleveland, OH', href: '/us/cleveland/ecommerce-development/' },
                { city: 'Boise, ID', href: '/us/boise/ecommerce-development/' },
                { city: 'Sioux Falls, SD', href: '/us/sioux-falls/ecommerce-development/' },
                { city: 'Lincoln, NE', href: '/us/lincoln/ecommerce-development/' },
                { city: 'Chattanooga, TN', href: '/us/chattanooga/ecommerce-development/' },
                { city: 'Fargo, ND', href: '/us/fargo/ecommerce-development/' },
              ].map(({ city, href }) => (
                <Link key={href} href={href} className="px-4 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Reading — internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce for US small businesses in 2026</p>
              </Link>
              <Link href="/blog/best-ecommerce-platform-tampa-boutiques-dtc-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">How Tampa boutiques and DTC brands pick an ecommerce platform</p>
              </Link>
              <Link href="/blog/austin-ecommerce-checkout-optimization-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Cut cart abandonment: an Austin checkout optimization guide</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book an E-Commerce Consultation, No Obligation"
            sub="In 30 minutes, we'll audit your current store or platform, identify what's costing you revenue, recommend the right tech stack, and give you a fixed price. No pitch. No pressure. An honest assessment from engineers who've built 500+ stores."
            primaryCta={{ label: 'Book Your Free Consultation', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price. Full code ownership. Platform-agnostic. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
