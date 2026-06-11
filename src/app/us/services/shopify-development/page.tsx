import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

import Image from 'next/image';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

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
  title: 'Shopify Development Agency USA — Custom Stores From $3,999',
  description:
    'Hire vetted Shopify developers & experts for custom theme development, store design & customization, Shopify Plus & migrations — live in 7 days from $3,999. Free audit.',
  authors: [{ name: 'FactoryJet' }],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development Agency USA — Custom Stores From $3,999',
    description:
      'Hire vetted Shopify developers & experts for custom theme development, store design & customization, Shopify Plus & migrations — live in 7 days from $3,999. Free audit.',
    url: 'https://factoryjet.com/us/services/shopify-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Shopify Development Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Agency USA — Custom Stores From $3,999',
    description:
      'Hire vetted Shopify developers & experts for custom theme development, store design & customization, Shopify Plus & migrations — live in 7 days from $3,999. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/shopify-development',
    languages: {
      'en-in': 'https://factoryjet.com/services/shopify-development',
      'en-us': 'https://factoryjet.com/us/services/shopify-development',
      'x-default': 'https://factoryjet.com/services/shopify-development',
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a custom Shopify store cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s Shopify development starts at $3,999 for a custom theme build on an existing Shopify store. A full store build with custom theme, product setup, payment integration, and launch runs $7,500. Shopify Plus builds with advanced checkout customization, B2B features, and multi-store setups start at $15,000. Every project is fixed-price and milestone-paid, so you know the full cost up front — senior engineering without traditional-agency overhead or six-month timelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a Shopify store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom Shopify theme applied to an existing store typically takes 2–3 weeks. A full store build from scratch — theme, product catalog setup, payment configuration, shipping, and launch — takes 3–5 weeks. Shopify Plus builds with advanced B2B, multi-storefront, or headless Hydrogen setups take 6–10 weeks depending on complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my WooCommerce or BigCommerce store to Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — migrations are one of our most common Shopify engagements. We migrate products, customers, orders, and SEO URLs from WooCommerce, BigCommerce, Magento, Squarespace Commerce, and custom platforms. We preserve your URL structure with 301 redirects, migrate customer account data, and test the full checkout flow before switching DNS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Shopify Plus, or will standard Shopify work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard Shopify (Basic, Grow, Advanced) works well for most DTC brands doing under $1M/year in revenue. Shopify Plus is worth the investment when you need: custom checkout UI (checkout.liquid or Checkout Extensibility), B2B wholesale portal, multi-storefront management (10+ stores), advanced script-based discounting, or dedicated Shopify support. We assess this during discovery — we won\'t push you to Plus if you don\'t need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is headless Shopify and does my store need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Headless Shopify separates the storefront (what customers see) from the Shopify backend (inventory, orders, checkout) and rebuilds the front end in a faster framework like Hydrogen (React/Remix) or Next.js. You get dramatically better performance (sub-1s page loads) and full design freedom — but it costs more to build and maintain. Most brands under $5M/year revenue don\'t need headless; above that, the conversion rate improvement typically justifies the investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Shopify store be optimized for SEO and Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every Shopify store we build includes technical SEO: optimized title tags and meta descriptions for all product and collection pages, schema markup (Product, BreadcrumbList, Organization), canonical URLs to handle Shopify\'s duplicate URL issues, compressed images with alt tags, sitemap submission to Google Search Console, and Core Web Vitals optimization. Collection page content and blog strategy are available as separate add-ons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build custom Shopify apps or integrate third-party apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes to both. We integrate any Shopify App Store app into your theme (reviews, loyalty, subscriptions, bundles, upsell widgets, etc.) and build custom private apps and public Shopify apps when standard App Store solutions don\'t fit your workflow. Custom apps are built using Shopify\'s GraphQL Admin API and Polaris design system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I want to change my theme or add features after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All code is delivered to your GitHub repository on launch day. You own it. You can hire any Shopify developer to work on it, or continue with FactoryJet on a project or retainer basis. We document all custom sections, metafields, and app integrations during handover so future work doesn\'t require archaeology.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire a Shopify developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fixed-scope FactoryJet build starts at $3,999 for a custom theme on an existing store and $7,500 for a full store build, with a firm quote after discovery. To hire a Shopify developer on an ongoing basis, retainers start at $299/month for up to 4 hours of dedicated development. US freelance Shopify developers typically run $50–$150/hour, which is why most brands prefer our fixed-scope or retainer model — you know the number before work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire a dedicated Shopify expert for my store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every engagement assigns you a dedicated Shopify expert — the same engineer designs, builds, and supports your store, so there is no handoff between teams. You can keep that expert on after launch through a monthly retainer for theme updates, app integrations, and conversion experiments, with direct access to the person who wrote your store\'s code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom Shopify theme development and customization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We build custom Shopify themes from scratch — designed in Figma and coded in clean, editable Liquid — and we customize existing themes when a full rebuild is not needed. Customization covers theme section development, app styling, metafield-driven content, checkout adjustments on Shopify Plus, and performance cleanup. You own the code in your GitHub repository so any future Shopify developer can maintain it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide Shopify store design as well as development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — design and development are one engagement at FactoryJet. A conversion-focused Shopify website designer handles layout, hierarchy, trust signals, and mobile flow, while the engineer builds it in Liquid. You approve desktop and mobile mockups in Figma before any code is written, so the store you see in design is the store you launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best Shopify development agency in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'For SMB and DTC brands, FactoryJet makes a strong case: custom Shopify themes built by senior engineers, fixed pricing, and 7-day delivery on standard stores. The best Shopify development company in USA for you depends on scope — a brand heading to Shopify Plus needs the best Shopify Plus agency in USA (scripts, checkout extensibility, B2B), while a first store needs speed and conversion fundamentals from the best Shopify website design company in USA it can afford. Whoever you evaluate among the best Shopify experts in USA, ask for store speed scores and conversion before/afters, not just portfolio screenshots. That is what the best Shopify development services in USA are measured on.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Shopify website cost in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Shopify website cost in USA: template customization runs $1,500–$5,000, a custom theme $5,000–$15,000, and Shopify Plus builds $20,000+. FactoryJet builds custom Shopify stores from $3,999, fixed-price and milestone-paid. If you are asking how much does Shopify store cost in USA all-in, add apps ($50–$300/mo) and the platform fee ($39–$399/mo) — Shopify store cost in USA is a build cost plus a running cost, and honest agencies quote both.' },
    },
    {
      '@type': 'Question',
      name: 'What are the top 10 Shopify development companies in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Lists of the top 10 Shopify development agencies in USA usually rank Plus-certified enterprise shops first, which is the wrong filter if you are an SMB. FactoryJet competes in the top 10 Shopify development companies in USA conversation for small and mid-market brands: senior engineers, fixed pricing, fast delivery. When scanning any roundup of the top 10 Shopify experts in USA, check three things: who actually writes the Liquid code, whether pricing is published, and store speed scores on past builds.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Development Services USA',
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
  serviceType: 'Shopify Development',
  description:
    'Custom Shopify and Shopify Plus store development for US DTC brands, B2B merchants, and e-commerce businesses. Custom themes, store migrations, headless Hydrogen builds. fixed-price, milestone-paid.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Shopify Theme Build',
      price: '3999',
      priceCurrency: 'USD',
      description: 'Custom Shopify theme designed in Figma and built in Liquid for an existing store.',
    },
    {
      '@type': 'Offer',
      name: 'Full Shopify Store Build',
      price: '7500',
      priceCurrency: 'USD',
      description: 'Complete Shopify store from scratch — custom theme, product setup, payments, shipping, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'Shopify Plus & Headless',
      price: '15000',
      priceCurrency: 'USD',
      description: 'Shopify Plus with checkout customization, B2B portal, or headless Hydrogen storefront.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SHOPIFY_SERVICES = [
  {
    name: 'Custom Shopify Theme Development',
    description:
      'A Shopify theme built from scratch in Figma, then coded in Liquid with custom sections your team can edit from the theme editor — no developer needed for day-to-day content changes.',
    example: 'Clients average 2.3× improvement in mobile add-to-cart rate vs. generic themes.',
    linkLabel: 'See theme examples',
    linkHref: '/portfolio',
  },
  {
    name: 'Shopify Store Setup & Launch',
    description:
      'Full store configuration from scratch: product catalog import, collections architecture, payment providers (Stripe, PayPal, Shop Pay), shipping zones, tax setup, and launch with DNS transfer.',
    example: 'Complete Shopify launch — theme, products, payments — in 3–5 weeks.',
    linkLabel: 'Book a call',
    linkHref: '/contact',
  },
  {
    name: 'Shopify Plus Development',
    description:
      'Checkout Extensibility (checkout UI extensions, payment customization), B2B wholesale portal with net terms and company accounts, multi-storefront management, and Shopify Flow automation.',
    example: 'Required for brands processing $1M+/year or needing B2B wholesale features.',
    linkLabel: 'Assess if you need Plus',
    linkHref: '/contact',
  },
  {
    name: 'Store Migrations to Shopify',
    description:
      'Full data migrations from WooCommerce, BigCommerce, Magento, Squarespace Commerce, and custom platforms — preserving products, customers, order history, and SEO URL structure with 301 redirects.',
    example: 'Zero downtime launch day. All redirects in place before DNS switch.',
    linkLabel: 'Plan your migration',
    linkHref: '/contact',
  },
  {
    name: 'Headless Shopify (Hydrogen)',
    description:
      'Decouple your storefront from Shopify\'s backend using Hydrogen (React/Remix) for sub-1-second page loads, full design freedom, and custom UX impossible within standard Liquid themes.',
    example: 'Best for brands doing $5M+/year where a 0.5% conversion lift = $25K+ annually.',
    linkLabel: 'Is headless right for you?',
    linkHref: '/contact',
  },
  {
    name: 'Shopify App Integration & Custom Apps',
    description:
      'Install, configure, and theme-integrate any Shopify App Store app (reviews, subscriptions, bundles, loyalty, upsell). Build custom private apps via the Admin API when off-the-shelf solutions don\'t fit.',
    example: 'Klaviyo, ReCharge, Gorgias, Yotpo, Bold, and 50+ integrations delivered.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const SHOPIFY_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute store audit. We review your current platform, catalog, traffic, and conversion data to define the right Shopify architecture and tech stack before scoping a line of work.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Full Figma mockups for your homepage, product page, collection page, and cart. You approve desktop and mobile before we write a line of Liquid. Two revision rounds included.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Custom Liquid theme or Hydrogen build with daily commits to your GitHub repo. Staging store URL available within 48 hours. Products, collections, and metafields configured.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Full checkout flow tested across Stripe, PayPal, and Shop Pay. Cross-browser and device testing on iOS, Android, Chrome, Safari, and Firefox. Lighthouse audit run before sign-off.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded handover walkthrough. Your theme code and all app credentials delivered to your GitHub.',
  },
];

const SHOPIFY_STATS = [
  {
    value: '2.3×',
    label: 'improvement in mobile add-to-cart rate with a custom theme vs. generic',
    microcopy: 'average across FactoryJet Shopify builds in 2024',
    categoryLabel: 'CONVERSION LIFT',
  },
  {
    value: '120+',
    label: 'Shopify stores built and launched across DTC, B2B, and enterprise brands',
    microcopy: 'since FactoryJet began building e-commerce in 2005',
    categoryLabel: 'STORES LAUNCHED',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid Shopify builds with full code ownership',
    microcopy: 'senior Figma design, Liquid engineering, and Lighthouse performance — predictable from quote to launch',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_SHOPIFY_STATS = [
  {
    value: '2.85M+',
    label: 'live Shopify stores worldwide — more than any other e-commerce platform',
    sourceUrl: 'https://www.shopify.com/blog/shopify-stats',
    sourceLabel: 'Shopify 2025 Statistics',
  },
  {
    value: '$378B+',
    label: 'in gross merchandise volume processed by Shopify stores annually',
    sourceUrl: 'https://investors.shopify.com',
    sourceLabel: 'Shopify Investor Relations',
  },
  {
    value: '15%',
    label: 'better checkout conversion on Shopify vs. other platforms, per Shopify data',
    sourceUrl: 'https://www.shopify.com/plus/checkout',
    sourceLabel: 'Shopify Plus Checkout Data',
  },
];

const INDUSTRIES = [
  {
    name: 'DTC & Consumer Brands',
    description:
      'Direct-to-consumer Shopify stores with branded themes, subscription product support via ReCharge, email capture flows, post-purchase upsells, and review collection via Yotpo or Okendo.',
    example: 'Fashion, beauty, health, food, and lifestyle DTC brands across the US.',
    linkLabel: 'See DTC examples',
    linkHref: '/portfolio',
  },
  {
    name: 'B2B & Wholesale',
    description:
      'Shopify Plus B2B portal with company accounts, net payment terms, volume pricing tiers, quantity rules, and a separate wholesale storefront — all managed from a single Shopify admin.',
    example: 'Separate retail and wholesale storefronts with shared inventory. Zero double-entry.',
  },
  {
    name: 'Fashion & Apparel',
    description:
      'Variant-heavy apparel stores with size guide overlays, color swatches, cross-sell lookbooks, fit-recommender quizzes, and Klaviyo flows for back-in-stock and browse abandonment.',
    example: 'High-SKU apparel builds with 200+ variant products and infinite scroll collection pages.',
  },
  {
    name: 'Health, Beauty & Wellness',
    description:
      'Subscription-first stores for supplements, skincare, and wellness products. ReCharge or Skio integration, before/after galleries, ingredient transparency pages, and HIPAA-conscious review handling.',
    example: 'Subscription-first builds typically see 40% of revenue on auto-renew within 90 days.',
  },
  {
    name: 'Food, Beverage & Gifting',
    description:
      'Custom box builders, gift message flows, perishable shipping logic, ZIP code validation, and date-picker delivery. Integrated with ShipStation, Shippo, or your own 3PL for automated fulfillment.',
    example: 'Seasonal gifting brands built with real-time shipping rate calculators and blackout dates.',
  },
  {
    name: 'Home, Lifestyle & Furniture',
    description:
      'High-AOV product pages with room-scene galleries, product configurators, white-glove delivery options, and financing integrations (Affirm, Klarna). Built for purchase decisions that take weeks, not minutes.',
    example: 'High-ticket furniture brands average 15% higher AOV with financing widget placement.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Shopify Agency' },
  { label: 'Freelancer' },
  { label: 'Shopify Theme Store' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$3,999',
      '$15,000–$50,000',
      '$5,000–$12,000',
      '$0–$380 (then you build it)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['3–5 weeks', '3–6 months', '4–10 weeks (unreliable)', '~1 week (but you configure it)'],
  },
  {
    feature: 'Custom Figma design (not a premade theme)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Shopify Plus capability',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Full migration (products, orders, customers)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance on delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Code ownership (your GitHub repo)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no hourly billing)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Theme Build',
    priceRange: 'From $3,999',
    description:
      'A custom Shopify theme designed in Figma and built in Liquid for your existing store. Best for brands that have Shopify set up but need a storefront that actually converts.',
    features: [
      'Custom Figma design — homepage, PDP, collection, cart',
      'Liquid theme built to match Figma exactly',
      'Custom sections editable from Shopify theme editor',
      'Mobile-first, Lighthouse 95+ performance',
      'Metafields setup for extended product data',
      'Technical SEO: schema, canonical URLs, alt tags',
      '2 rounds of design revisions',
      'Code delivered to your GitHub on launch',
      '2–3 week delivery from design sign-off',
    ],
    cta: { label: 'Book a Store Audit', modal: true, region: 'us' },
  },
  {
    name: 'Full Store Build',
    priceRange: 'From $7,500',
    description:
      'A complete Shopify store from scratch — custom theme, full product catalog configuration, payment and shipping setup, app integrations, and a live launch. Our most popular tier.',
    features: [
      'Everything in Theme Build, plus:',
      'Full product catalog import and collections architecture',
      'Payment configuration: Stripe, PayPal, Shop Pay, Affirm/Klarna',
      'Shipping zones, carrier rates, and fulfillment setup',
      'Email marketing integration (Klaviyo) — flows and templates',
      'Up to 3 Shopify App Store integrations (reviews, upsell, loyalty)',
      'Google Analytics 4, Meta Pixel, and Search Console setup',
      'Post-launch Lighthouse audit and Core Web Vitals report',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Shopify Plus',
    priceRange: 'From $15,000',
    description:
      'Shopify Plus with checkout customization, B2B wholesale portal, multi-storefront management, or a headless Hydrogen storefront. For brands scaling past $1M/year.',
    features: [
      'Checkout Extensibility (payment UI, post-purchase offers)',
      'B2B portal: company accounts, net terms, volume pricing',
      'Multi-storefront setup and shared inventory management',
      'Shopify Flow automation (custom order routing, tagging, alerts)',
      'Headless Hydrogen storefront option (React/Remix)',
      'International markets setup (multi-currency, translated storefronts)',
      'Dedicated engineering point of contact',
      '90-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule a Plus Consultation', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'migration', label: 'Migrations' },
  { key: 'seo',       label: 'SEO & Performance' },
  { key: 'trust',     label: 'Working With Us' },
];

const FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a custom Shopify store cost?',
    answer:
      'FactoryJet\'s Shopify development starts at $3,999 for a custom Liquid theme build on an existing store. A full store build — custom theme, product catalog setup, payment configuration, shipping, apps, and launch — runs $7,500. Shopify Plus builds with checkout customization, B2B portals, or headless Hydrogen storefronts start at $15,000. Every project is fixed-price and milestone-paid, so you know the full cost up front — senior engineering without traditional-agency overhead or six-month timelines.',
  },
  {
    category: 'pricing',
    question: 'How long does a Shopify store build take?',
    answer:
      'A custom theme applied to an existing store takes 2–3 weeks from design sign-off. A full store build from scratch takes 3–5 weeks. Shopify Plus or headless Hydrogen builds run 6–10 weeks depending on B2B complexity, number of storefronts, or custom app requirements. We give you a firm timeline after the discovery session — not before, because scope drives everything.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep Shopify pricing fixed and predictable?',
    answer:
      'We work fixed-price and milestone-paid — every Shopify build is scoped upfront with no hourly billing and no scope-creep invoices. Building Shopify stores for US brands since Shopify launched means we estimate accurately on the first call, so the quote you sign is what you pay. You get the same Figma-first design process, the same Liquid and Hydrogen engineering, and the same Lighthouse performance standards — with full code ownership at handoff.',
  },

  /* ── Platform & Tech ── */
  {
    category: 'platform',
    question: 'Do I need Shopify Plus, or will standard Shopify work?',
    answer:
      'Standard Shopify (Basic, Grow, Advanced) works well for most DTC brands under $1M–$2M/year in revenue. Shopify Plus is worth the investment when you need: custom checkout UI (Checkout Extensibility), a B2B wholesale portal with company accounts and net terms, multi-storefront management, advanced Shopify Flow automation, or dedicated Shopify support. We make this assessment during discovery and won\'t push you to Plus if you don\'t need it.',
  },
  {
    category: 'platform',
    question: 'What is headless Shopify (Hydrogen) and does my store need it?',
    answer:
      'Headless Shopify rebuilds your storefront in Hydrogen (React/Remix) while keeping Shopify as the backend for inventory, orders, and checkout. The result is sub-1-second page loads, full design freedom, and custom UX impossible within standard Liquid. Most brands under $5M/year don\'t need headless — the additional build and maintenance cost outweighs the benefit. Above that, a meaningful conversion rate improvement typically pays for it within 6–12 months.',
  },
  {
    category: 'platform',
    question: 'Can you build custom Shopify apps or integrate third-party apps?',
    answer:
      'Yes to both. We integrate any Shopify App Store app into your theme — reviews (Yotpo, Okendo, Judge.me), subscriptions (ReCharge, Skio), loyalty (Smile.io, LoyaltyLion), upsell (CartHook, ReConvert), and more. When off-the-shelf solutions don\'t fit your workflow, we build custom private apps using Shopify\'s GraphQL Admin API and Polaris design system.',
  },
  {
    category: 'platform',
    question: 'What Shopify apps do you typically integrate?',
    answer:
      'Commonly integrated apps by category: Email — Klaviyo (our default), Omnisend; Reviews — Yotpo, Okendo, Judge.me; Subscriptions — ReCharge, Skio; Loyalty — Smile.io; Upsell/Cross-sell — CartHook, ReConvert, Zipify OCU; Shipping — ShipStation, Shippo, EasyPost; Inventory — Inventory Planner, Skubana; Search — Searchie, Boost Commerce. We configure them to match your theme — no floating widget boxes or mismatched UI.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my store from WooCommerce to Shopify?',
    answer:
      'Yes — WooCommerce to Shopify is one of our most common migrations. We export all products (with variants, metafields, and images), customers, and order history. We map your existing URL structure and implement 301 redirects for every product and collection URL to protect your SEO equity. We test the full checkout flow on the staging store before switching DNS, so launch day has zero downtime.',
  },
  {
    category: 'migration',
    question: 'What other platforms can you migrate to Shopify?',
    answer:
      'We\'ve migrated stores from WooCommerce, BigCommerce, Magento (1.x and 2.x), Squarespace Commerce, Wix eCommerce, PrestaShop, Volusion, and custom-built platforms. The migration complexity depends on your product catalog size, number of metafields, and whether you have complex pricing rules or customer segments that need to be rebuilt in Shopify\'s data model.',
  },
  {
    category: 'migration',
    question: 'Will my SEO rankings survive a migration to Shopify?',
    answer:
      'Yes, if the migration is done correctly — and ours are. Before any migration, we audit your current URL structure, identify which product and collection pages have Google rankings worth protecting, and build the redirect map before we touch anything. We implement 301 redirects for every changed URL, submit the new sitemap to Google Search Console on launch day, and monitor organic traffic for 30 days post-launch. Most clients see rankings recover fully within 6–8 weeks.',
  },

  /* ── SEO & Performance ── */
  {
    category: 'seo',
    question: 'Will my Shopify store be optimized for Google?',
    answer:
      'Yes — technical SEO is included in every build. This covers: optimized title tags and meta descriptions for all product, collection, and page templates; Product schema markup for Google Shopping eligibility; BreadcrumbList schema; canonical URLs to handle Shopify\'s duplicate URL patterns (?variant=... URLs); compressed images with descriptive alt tags; sitemap.xml submission to Google Search Console; and Core Web Vitals optimization. Content-level SEO (collection page copy, blog strategy) is available as an add-on.',
  },
  {
    category: 'seo',
    question: 'What Lighthouse score will my Shopify store get?',
    answer:
      'Our custom Liquid themes consistently score 90–97 on Lighthouse Performance (Shopify\'s infrastructure caps some scores vs. static sites) and 100 on Accessibility, Best Practices, and SEO. Headless Hydrogen builds typically score 95+ on Performance. We run a PageSpeed Insights audit before every handover — you see the scores before you sign off.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'Do I own my Shopify theme code after the project?',
    answer:
      'Yes — 100%. The full theme codebase is delivered to your GitHub repository on launch day. You own every line of Liquid, every custom section schema, and all app integration code. Any Shopify developer can work with it in the future. No lock-in, no proprietary framework, no retainer required to keep the store running.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from hiring a US Shopify agency?',
    answer:
      'Three differences: price (fixed-price, specialized team serving US brands since 1999), speed (3–5 weeks vs. 3–6 months at most traditional agencies), and ownership (full code delivery on launch day, not held behind a retainer). We\'ve built 120+ Shopify stores across DTC, B2B, and enterprise brands. We understand what actually drives conversion on a product page — not just what looks good in a proposal.',
  },
  {
    category: 'trust',
    question: 'Can you work with my existing Shopify store without rebuilding everything?',
    answer:
      'Yes. If you have a working store with existing sales and traffic, we never rebuild blindly. We audit what\'s performing, identify specific conversion bottlenecks (slow product pages, broken mobile checkout, confusing navigation), and scope targeted improvements — not a full rebuild unless the codebase genuinely can\'t be salvaged. Sometimes the fix is a new theme. Sometimes it\'s optimizing three pages.',
  },

  {
    category: 'platform',
    question: 'Can you build a Shopify store for B2B wholesale or dealer ordering?',
    answer:
      'Yes — Shopify B2B is increasingly a core use case. For Shopify Plus clients, we configure the native B2B features: company accounts, contact management, custom price lists per company, net payment terms (net-30, net-60), tax exemptions, and a dedicated B2B storefront with password-protected catalog access. For standard Shopify, we implement B2B via apps: Wholesale Gorilla, WholesaleX, or Locksmith for catalog gating. We configure PO upload, minimum order quantities, volume discount tiers, and reorder pads. Shopify\'s B2B handles $40B+ in annual wholesale transactions — it\'s a mature feature set that replaces standalone wholesale portals.',
  },
  {
    category: 'platform',
    question: 'Can you build a subscription Shopify store for a product that ships on a recurring basis?',
    answer:
      'Yes — Shopify subscription stores are a core FactoryJet specialty. We integrate Recharge (the Shopify subscription leader, powering brands like Dr. Axe, Graza, and Hydrant), Bold Subscriptions, or Skio depending on your catalog and churn management needs. Implementation includes: subscription product configuration (frequency options, trial periods, build-a-box), subscription management portal for customers (pause, skip, swap, cancel), cancel-save flows designed to recover 15–25% of would-be churners, subscription analytics dashboard, and Klaviyo integration for subscriber retention emails. Subscription builds typically add $1,000–$2,500 to a base Shopify project.',
  },
  {
    category: 'seo',
    question: 'How does FactoryJet optimize Shopify stores for Google, and what about AI search?',
    answer:
      'Shopify has technical SEO quirks that generic developers miss: duplicate content from collection/product URL patterns, auto-generated pagination parameters that dilute crawl budget, and theme-generated JavaScript that blocks initial page paint and Core Web Vitals scores. FactoryJet fixes all three and adds AEO (Answer Engine Optimization) for ChatGPT and Perplexity: Product schema with price, availability, and review aggregation; FAQPage schema targeting \'best [product]\', \'how to use [product]\', and \'is [product] worth it\' queries; and BreadcrumbList schema for category pages. Stores built with AEO get cited in AI-generated answers — a zero-click traffic source that\'s growing 40% year-over-year.',
  },
  {
    category: 'trust',
    question: 'What makes a Shopify store actually convert vs. just look good?',
    answer:
      'Four things separate high-converting Shopify stores from visually nice ones that underperform: (1) Mobile checkout — 65% of traffic is mobile; one-tap Apple/Google Pay and a clean 3-step checkout recover 20–30% of mobile abandonment. (2) Product page trust signals — reviews, stock scarcity, return policy summary, and size guides placed above the fold near the Add-to-Cart button. (3) Page speed — every 100ms of load time improvement increases conversion by 1%; FactoryJet targets LCP under 2.5s on mobile. (4) Post-purchase upsells — a native Shopify post-purchase offer page can increase AOV 12–18% with zero additional ad spend. Every FactoryJet build implements all four.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing Shopify support after launch?',
    answer:
      'Yes — every Shopify project includes a 30-day post-launch support window for bug fixes, minor adjustments, and launch questions. Beyond that, FactoryJet offers monthly retainer plans from $299/month: up to 4 hours of Shopify development, same-day priority bug response, and access to the engineer who built your store. Common retainer work includes: new collection page builds, metafield schema updates, app integrations, Klaviyo flow updates, seasonal landing pages for Black Friday/Cyber Monday, and performance optimization reviews. We also offer a one-time Shopify Audit package — a 2-hour review of conversion rate, technical SEO, Core Web Vitals, and checkout flow — that clients often run 60–90 days after launch.',
  },
  {
    category: 'pricing',
    question: 'How much does it cost to hire a Shopify developer?',
    answer:
      'It depends on whether you need a project or ongoing capacity. A fixed-scope FactoryJet build starts at $3,999 for a custom theme on an existing store and $7,500 for a full store build, with a firm quote after discovery. If you want to hire a Shopify developer on an ongoing basis, retainers start at $299/month for up to 4 hours of dedicated development. US freelance Shopify developers typically run $50–$150/hour with no fixed ceiling, which is why most brands prefer our fixed-scope or retainer model — you know the number before work starts.',
  },
  {
    category: 'trust',
    question: 'Can I hire a dedicated Shopify expert for my store?',
    answer:
      'Yes. Every engagement assigns you a dedicated Shopify expert — the same engineer designs, builds, and supports your store, so there is no handoff and no context lost between teams. You can keep that expert on after launch through a monthly retainer for theme updates, app integrations, conversion experiments, and seasonal work. You always have direct access to the person who actually wrote your store\'s code.',
  },
  {
    category: 'platform',
    question: 'Do you offer custom Shopify theme development and customization?',
    answer:
      'Both. We build custom Shopify themes from scratch — designed in Figma and coded in clean, editable Liquid — and we customize existing themes when a full rebuild isn\'t needed. Customization work covers theme section development, app styling, metafield-driven content, checkout adjustments on Shopify Plus, and performance cleanup. You own the code in your GitHub repository either way, so any future Shopify developer can maintain it.',
  },
  {
    category: 'platform',
    question: 'Do you provide Shopify store design as well as development?',
    answer:
      'Yes — design and development are one engagement at FactoryJet, not separate vendors. A conversion-focused Shopify website designer handles layout, hierarchy, trust signals, and mobile flow, while the engineer builds it in Liquid. You approve desktop and mobile mockups in Figma before any code is written, so the store you see in design is the store you launch.',
  },

  // ── Money-query coverage, added 2026-06-11 ──
  {
    category: 'trust',
    question: 'Who is the best Shopify development agency in USA?',
    answer:
      'For SMB and DTC brands, FactoryJet makes a strong case: custom Shopify themes built by senior engineers, fixed pricing, and 7-day delivery on standard stores. The best Shopify development company in USA for you depends on scope — a brand heading to Shopify Plus needs the best Shopify Plus agency in USA (scripts, checkout extensibility, B2B), while a first store needs speed and conversion fundamentals from the best Shopify website design company in USA it can afford. Whoever you evaluate among the best Shopify experts in USA, ask for store speed scores and conversion before/afters, not just portfolio screenshots. That is what the best Shopify development services in USA are measured on.',
  },
  {
    category: 'pricing',
    question: 'How much does Shopify website cost in USA?',
    answer:
      'Shopify website cost in USA: template customization runs $1,500–$5,000, a custom theme $5,000–$15,000, and Shopify Plus builds $20,000+. FactoryJet builds custom Shopify stores from $3,999, fixed-price and milestone-paid. If you are asking how much does Shopify store cost in USA all-in, add apps ($50–$300/mo) and the platform fee ($39–$399/mo) — Shopify store cost in USA is a build cost plus a running cost, and honest agencies quote both.',
  },
  {
    category: 'trust',
    question: 'What are the top 10 Shopify development companies in USA?',
    answer:
      'Lists of the top 10 Shopify development agencies in USA usually rank Plus-certified enterprise shops first, which is the wrong filter if you are an SMB. FactoryJet competes in the top 10 Shopify development companies in USA conversation for small and mid-market brands: senior engineers, fixed pricing, fast delivery. When scanning any roundup of the top 10 Shopify experts in USA, check three things: who actually writes the Liquid code, whether pricing is published, and store speed scores on past builds.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your Shopify store in 7 days',
  description: 'Our proven 7-day process for delivering professional, conversion-optimized Shopify stores for US businesses.',
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

export default function ShopifyPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="shopify-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="shopify-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="shopify-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="speakable-schema-shopify-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Shopify Development USA | Custom Shopify Stores | FactoryJet",
          "url": "https://factoryjet.com/us/services/shopify-development/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Store Audit', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SHOPIFY DEVELOPMENT · USA"
          headline="Custom Shopify Stores That Sell, Not Just Look Good"
          lead="Generic Shopify themes convert below 1%. FactoryJet builds custom Shopify and Shopify Plus stores — designed in Figma, built in Liquid — that are fast, on-brand, and optimized for your specific customer journey. engineered for measurable outcomes."
          primaryCta={{ label: 'Book a Store Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '120+ Shopify stores launched',
            'Starting at $3,999',
            'fixed-price, milestone-paid',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT A CUSTOM SHOPIFY STORE CHANGES
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Your theme is your top sales rep. Most stores have it working against them.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Generic theme loads in 4–6s on mobile → 53% of visitors leave before adding to cart',
                  'Custom theme, optimized images, lazy-load → sub-2s load, 2.3× add-to-cart rate',
                  'Confusing navigation and buried CTAs → cart abandonment rate 70%+',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#F05A28]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Avg. 2.3× add-to-cart improvement. Custom theme vs. Shopify default.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/card-shopify.webp"
          imageAlt="Custom Shopify storefront on a MacBook with a skincare product — FactoryJet Shopify development"
          stats={[
            { value: '120+', label: 'Shopify Stores Delivered' },
            { value: '7 Days', label: 'Delivery Guarantee' },
            { value: 'From $3,999', label: 'Fixed Price, Confirmed Upfront' },
            { value: '25 Yrs', label: 'E-Commerce Expertise' },
          ]}
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="120+ Shopify stores. 25 years of e-commerce. US brands trust the results."
        />

        {/* ── 3. WHY SHOPIFY + CUSTOM THEME ───────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHY CUSTOM SHOPIFY"
          headline="Shopify Is the Right Platform. A Generic Theme Is the Wrong Move."
          lead="Shopify is the world's leading e-commerce platform for a reason. But 90% of Shopify stores run on the same five themes — and wonder why their conversion rate is 0.8%."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Custom Liquid theme',
                  'Figma-first design',
                  'Shopify Plus',
                  'Hydrogen headless',
                  'Checkout UI',
                  'Klaviyo integrated',
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
                Shopify gives you the infrastructure: reliable hosting, payment processing, inventory management, and the App Store ecosystem. What it doesn&apos;t give you is a storefront that converts your specific customers. That&apos;s a design and engineering problem — and it&apos;s exactly what a custom theme solves.
              </p>

              {/* Mini conversion stats — aria-hidden decorative */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.8%', label: 'avg. conv. rate, generic theme' },
                  { value: '2.3×', label: 'lift with custom theme' },
                  { value: '309ms', label: "Shopify's avg. TTFB" },
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
                  The theme is not cosmetic. It&apos;s the difference between a 1% and a 3% conversion rate.
                </p>
              </div>
              <p>
                FactoryJet has built Shopify stores since the platform launched. We&apos;ve seen what generic themes cost brands in lost revenue — and what a properly engineered, conversion-optimized custom theme returns. We design in Figma (you approve every page before we build), then code in Liquid with performance, accessibility, and SEO baked in from the first commit.
              </p>
              <p>
                We work with DTC brands, B2B wholesalers, fashion and apparel companies, health and wellness brands, food businesses, and high-AOV home and lifestyle retailers across the US. The industries differ; the standard of engineering doesn&apos;t.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  FactoryJet Shopify Scorecard
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { metric: 'Lighthouse Performance', score: '95+', note: 'custom theme, optimized images' },
                  { metric: 'Lighthouse SEO', score: '100', note: 'schema, canonical, sitemaps' },
                  { metric: 'Mobile Add-to-Cart Rate', score: '2.3×', note: 'vs. generic theme avg.' },
                  { metric: 'Time to First Byte', score: '<310ms', note: "Shopify's global CDN" },
                  { metric: 'Checkout Conversion', score: '+15%', note: 'Shopify checkout vs. custom' },
                  { metric: 'Core Web Vitals', score: 'Green', note: 'all three — LCP, CLS, FID' },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.metric}</p>
                      <p className="font-fj-mono text-[0.6875rem] text-fj-neutral-400" style={{ letterSpacing: '0.04em' }}>{item.note}</p>
                    </div>
                    <p className="fj-display flex-shrink-0 font-bold text-[#F05A28]" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Audited before every handover.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your Shopify store looks fine. It's the conversion rate that's costing you."
          lead="Most Shopify stores leave 50–70% of their revenue on the table. Not because their product is wrong — because their storefront is built for convenience, not conversion."
          pillars={[
            {
              icon: '🐢',
              title: 'Slow themes kill mobile conversions',
              body: 'The average Shopify store using a theme-store template loads in 4–6 seconds on mobile. Google data shows 53% of mobile users abandon a page after 3 seconds. A slow theme isn\'t a minor inconvenience — it\'s your ad spend going to waste before a single product image loads.',
            },
            {
              icon: '📦',
              title: 'Generic product pages don\'t convert',
              body: 'The same Dawn or Refresh theme layout used by 200,000 other Shopify stores won\'t communicate what makes your product different. Your customer needs trust signals specific to your category, imagery that matches how they imagine using your product, and a CTA hierarchy designed around how they actually shop — not how Shopify\'s default template assumes they do.',
            },
            {
              icon: '💸',
              title: 'US Shopify agencies charge $15,000–$50,000 for this',
              body: 'A mid-tier US Shopify agency charges $15,000–$50,000 for a custom theme build — before retainers, app configuration, or migration fees. FactoryJet delivers the same Figma-first design, the same Liquid engineering, and the same Lighthouse performance audit at fixed-price. Our specialized team has been building e-commerce since 2005.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Store Audit to Live Launch in 5 Stages"
          lead="A structured build process with design approval before engineering, a staging store before DNS switch, and a full Lighthouse audit before you sign off."
          stages={SHOPIFY_JOURNEY_STAGES}
          closingNote="5 STAGES · 3–5 WEEKS TO LAUNCH · FIGMA APPROVAL BEFORE BUILD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 6. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Shopify Services for US E-Commerce Brands"
          lead="From a custom theme on an existing store to a full Shopify Plus B2B platform — we scope the right engagement for where your business is and where it's going."
          sectors={SHOPIFY_SERVICES}
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
                {SHOPIFY_STATS.map((stat) => (
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
                  alt="FactoryJet team reviewing a newly launched Shopify store with a client"
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
          headline="Built on Shopify's Native Tools: No Bloated App Stacks"
          lead="We build in Liquid and Hydrogen — Shopify's own languages — so your theme performs at platform speed, not plugin speed."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Shopify Liquid', 'Hydrogen', 'Remix', 'Figma', 'Klaviyo', 'ReCharge', 'Yotpo', 'Shopify Flow'].map((tech) => (
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
                <strong className="font-semibold text-fj-ink">Shopify Liquid</strong> — The native Shopify templating language. We write clean, well-commented Liquid with custom section schemas so your team can edit content from the theme editor without touching code.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify Hydrogen (React/Remix)</strong> — For headless builds where performance and design freedom are the priority. Hydrogen uses Shopify&apos;s Storefront API and ships with streaming SSR, giving sub-1-second page loads that standard Liquid can&apos;t match.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Checkout Extensibility</strong> — For Shopify Plus clients who need custom checkout UI, post-purchase offer pages, and checkout-level discount logic without checkout.liquid hacks.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Klaviyo + Email Flows</strong> — We configure welcome series, abandoned cart, browse abandonment, back-in-stock, and post-purchase flows — all matched to your brand identity, not Klaviyo&apos;s defaults.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify Flow</strong> — For Plus merchants: automated order tagging, fraud flagging, customer segmentation, and cross-store inventory alerts built in Shopify&apos;s native automation tool.
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
                  Shopify Tech Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Storefront', tools: 'Shopify Liquid, Hydrogen (React/Remix)' },
                  { category: 'Design', tools: 'Figma, custom component library' },
                  { category: 'Email', tools: 'Klaviyo (flows, templates, segmentation)' },
                  { category: 'Subscriptions', tools: 'ReCharge, Skio' },
                  { category: 'Reviews', tools: 'Yotpo, Okendo, Judge.me' },
                  { category: 'Shipping', tools: 'ShipStation, Shippo, EasyPost' },
                  { category: 'Analytics', tools: 'GA4, Meta Pixel, Triple Whale' },
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
                  Shopify-native. No third-party lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 9. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US SHOPIFY MARKET"
          headline="Shopify Dominates US E-Commerce. Most Stores Still Underperform."
          leadParagraphs={[
            "Shopify powers 29% of all e-commerce websites globally and holds the number one market share position in the United States. It processes over $378 billion in gross merchandise volume annually across 2.85 million live stores. The infrastructure is exceptional. The average store's conversion rate — around 1.4% — is not.",
            "FactoryJet has built Shopify stores for US brands in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the country since Shopify launched. We understand what DTC brands, B2B wholesalers, and local retailers need from a Shopify store — not enterprise complexity, but professional design, fast product pages, and a checkout experience that doesn't leak customers.",
            "The brands we build for aren't buying a new theme because their current one looks bad. They're buying it because they ran the math: if a $7,500 custom store build improves conversion from 1% to 2.3% on 5,000 monthly visitors at a $80 AOV, that's $52,000 in additional annual revenue from the same traffic.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Same traffic. Better theme. More revenue.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {['Austin TX', 'Miami FL', 'Denver CO', 'Nashville TN', 'Portland OR', 'Charlotte NC', 'Raleigh NC', 'Tampa FL'].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </>
          }
          stats={US_SHOPIFY_STATS}
        />

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Shopify Agency vs. Freelancer vs. Theme Store"
          lead="Not all Shopify development options deliver the same result. Here's what the decision actually looks like when you compare side by side."
          pullQuote={{
            stat: '$3,999',
            caption: 'starting price. Same Figma design, Liquid engineering, and Lighthouse audits as a $20,000 US Shopify agency project.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices and timelines reflect typical US market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11b. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="CLIENT RESULTS"
          headline="What US founders say after we build their Shopify store"
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price Shopify Development"
            lead="No hourly billing. No scope surprises. Every tier includes a fixed scope, fixed price, and a timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Shopify plan fees ($39–$2,000/month) are billed directly by Shopify. App subscription fees (Klaviyo, ReCharge, etc.) go directly to app providers — not marked up by FactoryJet. Custom Plus scopes quoted after a free discovery call."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We've built 120+ Shopify stores. Not slide decks about them."
          lead="FactoryJet has been building e-commerce since 2005. We know what moves the needle on a Shopify product page — and what looks impressive in a proposal but doesn't affect your conversion rate."
          pillars={[
            {
              icon: '🎯',
              title: 'Conversion-first design, not portfolio-first',
              body: 'A Shopify theme\'s job is to sell. We design around your specific customer\'s decision-making process — where trust signals go, how the size guide surfaces, when the sticky cart appears, where to put the review count. These aren\'t aesthetic decisions. They\'re conversion decisions backed by 120+ builds of data.',
            },
            {
              icon: '⚡',
              title: 'Figma approval before a line of Liquid',
              body: 'We show you desktop and mobile mockups for every key page before opening a code editor. If the direction is wrong, we fix it in Figma — not after 3 weeks of engineering. This is how we deliver in 3–5 weeks when traditional agencies quote 6 months.',
            },
            {
              icon: '🔒',
              title: 'Your code, your GitHub, launch day',
              body: 'The full Liquid codebase lands in your GitHub repository the day you go live. No proprietary builder, no FactoryJet platform subscription, no lock-in. Any Shopify developer can maintain it. If you outgrow us — or outgrow Shopify entirely — you walk away with a real, documented codebase.',
            },
          ]}
        />

        {/* ── 13b. HIRE A SHOPIFY DEVELOPER ─────────────────────────────────── */}
        <section className="py-14 md:py-20 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">HIRE SHOPIFY DEVELOPERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Hire a Shopify developer or a dedicated Shopify expert</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#3A3A40] leading-relaxed space-y-4">
                <p>
                  Most US brands don&apos;t want a marketplace gig — they want to <strong>hire a Shopify developer</strong> who
                  has actually shipped revenue-generating stores. Every FactoryJet engagement gives you a dedicated
                  Shopify expert who designs, builds, and launches your store end to end, then stays reachable after
                  go-live. No account-manager telephone game, no invisible handoffs to contractors you never speak with.
                </p>
                <p>
                  Need ongoing capacity instead of a one-off build? You can hire a Shopify expert developer on a
                  monthly retainer for theme work, app integrations, conversion experiments, and seasonal landing
                  pages — the same engineer who built your store, not a rotating pool. Prefer a broader scope? See our
                  full{' '}
                  <Link href="/us/services/ecommerce-development" className="text-[#F05A28] font-medium underline underline-offset-2">ecommerce development services</Link>. Already
                  selling and need traffic? See our{' '}
                  <Link href="/us/services/shopify-seo" className="text-[#F05A28] font-medium underline underline-offset-2">Shopify SEO services</Link>.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-white p-7">
                <h3 className="text-xl font-bold text-[#0F0F12] mb-3">When teams hire a Shopify expert from FactoryJet</h3>
                <ul className="space-y-2.5 text-[#3A3A40] text-[15px]">
                  <li>• You&apos;ve outgrown a template and need a custom Shopify build</li>
                  <li>• Your in-house team needs a Shopify developer for overflow work</li>
                  <li>• A previous freelancer disappeared mid-project</li>
                  <li>• You&apos;re migrating to Shopify and want it done once, correctly</li>
                </ul>
                <Link
                  href="https://calendly.com/bhavesh-factoryjet/30min"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F05A28] px-6 py-3 text-white font-semibold hover:bg-[#d94d20] transition-colors"
                >
                  Talk to the Founder →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13c. THEME DEVELOPMENT, CUSTOMIZATION & STORE DESIGN ───────────── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">DESIGN &amp; CUSTOMIZATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Shopify theme development, customization &amp; store design</h2>
            <p className="text-[#3A3A40] leading-relaxed max-w-3xl mb-8">
              Development and design aren&apos;t separate purchases at FactoryJet — every build pairs a Shopify website
              designer with the engineer writing the Liquid. Whether you need custom Shopify theme development from
              scratch, store customization on top of a premium theme, or a focused redesign of your highest-traffic
              product pages, the work is handled by one team that owns both the look and the conversion math behind it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Custom Shopify theme development</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">Designed in Figma, built in clean Liquid with reusable sections your team can edit — not a locked page builder.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Shopify store customization</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">Theme tweaks, app styling, metafield-driven content, and checkout adjustments on your existing store — without a full rebuild.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Shopify store design &amp; redesign</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">A conversion-first Shopify website designer reworks hierarchy, trust signals, and mobile flow — the things that move revenue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Start"
          lead="The questions we answer on every Shopify discovery call — answered here, without the runaround."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve — internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Shopify Development Services by City</h2>
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
              <Link href="/blog/boise-shopify-development-guide-idaho-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Boise Shopify development for Idaho small businesses</p>
              </Link>
              <Link href="/blog/austin-ecommerce-checkout-optimization-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Austin ecommerce checkout optimization playbook</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a Shopify Store Audit, No Obligation"
            sub="In 30 minutes, we'll audit your current store or platform, identify the specific pages losing you the most revenue, and give you a fixed price to fix it. No pitch. No pressure. An honest assessment from engineers who've built 120+ stores."
            primaryCta={{ label: 'Book Your Free Store Audit', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price. Full code ownership. 120+ Shopify stores delivered."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
