import type { Metadata } from 'next';
import Link from 'next/link';

import Image from 'next/image';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Shopify Development Agency USA: Custom Stores | FactoryJet',
  description:
    'Hire senior Shopify developers for custom themes, store migrations, and Shopify Plus B2B solutions. Fast turnaround, clean code. Get a free commerce audit.',
  authors: [{ name: 'FactoryJet' }],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development Agency USA: Custom Stores | FactoryJet',
    description:
      'Hire senior Shopify developers for custom themes, store migrations, and Shopify Plus B2B solutions. Fast turnaround, clean code. Get a free commerce audit.',
    url: 'https://factoryjet.com/services/shopify-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Shopify Development Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Agency USA: Custom Stores | FactoryJet',
    description:
      'Hire senior Shopify developers for custom themes, store migrations, and Shopify Plus B2B solutions. Fast turnaround, clean code. Get a free commerce audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/shopify-development',
    languages: {
      'en-in': 'https://factoryjet.com/services/shopify-development',
      'en-us': 'https://factoryjet.com/services/shopify-development',
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

const PAGE_MODIFIED = '2026-08-29';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/shopify-development#webpage',
  url: 'https://factoryjet.com/services/shopify-development',
  name: 'Shopify Development Agency USA | Custom Stores & Shopify Plus | FactoryJet',
  description: 'Hire senior Shopify developers for custom theme development, store design and customization, Shopify Plus, B2B, and migrations.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & Chief Technical Architect',
  },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Development Services USA',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  serviceType: 'Shopify Development',
  description:
    'Custom Shopify and Shopify Plus store development for US DTC brands, B2B merchants, and e-commerce businesses. Custom themes, store migrations, headless Hydrogen builds, fixed-price, milestone-paid.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SHOPIFY_SERVICES = [
  {
    name: 'Custom Shopify Theme Development.',
    description:
      'We design themes in Figma. We write clean Liquid code with custom sections. Your team can edit content directly without developer tickets.',
    example: 'Clients average 2.3× improvement in mobile add-to-cart rate vs. generic themes.',
    linkLabel: 'See theme examples',
    linkHref: '/portfolio',
  },
  {
    name: 'Shopify Store Setup & Launch.',
    description:
      'We configure your complete store setup. We import product catalogs and set up collections. We configure Stripe, PayPal, and Shop Pay. Then we manage shipping zones, tax rules, and DNS launch.',
    example: 'Complete Shopify launch, theme, products, payments, in 3–5 weeks.',
    linkLabel: 'Book a call',
    linkHref: '/contact',
  },
  {
    name: 'Shopify Plus Development.',
    description:
      'Checkout Extensibility (checkout UI extensions, payment customization), B2B wholesale portal with net terms and company accounts, multi-storefront management, and Shopify Flow automation.',
    example: 'Required for brands processing $1M+/year or needing B2B wholesale features.',
    linkLabel: 'Assess if you need Plus',
    linkHref: '/contact',
  },
  {
    name: 'Store Migrations to Shopify.',
    description:
      'We migrate stores from WooCommerce, BigCommerce, and Magento. We preserve products, customer records, and order history. We map 301 redirects to protect organic search rankings.',
    example: 'Zero downtime launch day. All redirects in place before DNS switch.',
    linkLabel: 'Plan your migration',
    linkHref: '/contact',
  },
  {
    name: 'Headless Shopify (Hydrogen).',
    description:
      'Decouple your storefront from Shopify\'s backend using Hydrogen (React/Remix) for sub-1-second page loads, full design freedom, and custom UX impossible within standard Liquid themes.',
    example: 'Best for brands doing $5M+/year where a 0.5% conversion lift = $25K+ annually.',
    linkLabel: 'Is headless right for you?',
    linkHref: '/contact',
  },
  {
    name: 'Shopify App Integration & Custom Apps.',
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
    title: 'Discover.',
    description:
      'A 30-minute store audit. We review your platform and catalog data. We analyze traffic and conversion metrics. This allows us to define the right Shopify architecture before scoping work.',
  },
  {
    number: '02',
    title: 'Design.',
    description:
      'Full Figma mockups for your homepage, product page, collection page, and cart. You approve desktop and mobile before we write a line of Liquid. Two revision rounds included.',
  },
  {
    number: '03',
    title: 'Build.',
    description:
      'Custom Liquid theme or Hydrogen build with daily commits to your GitHub repo. Staging store URL available within 48 hours. Products, collections, and metafields configured.',
  },
  {
    number: '04',
    title: 'Test.',
    description:
      'Full checkout flow tested across Stripe, PayPal, and Shop Pay. Cross-browser and device testing on iOS, Android, Chrome, Safari, and Firefox. Lighthouse audit run before sign-off.',
  },
  {
    number: '05',
    title: 'Launch.',
    description:
      'DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded handover walkthrough. Your theme code and all app credentials delivered to your GitHub.',
  },
];

const SHOPIFY_STATS = [
  {
    value: '2.3×',
    label: 'Improvement in mobile add-to-cart rate with a custom theme vs. generic.',
    microcopy: 'Average across FactoryJet Shopify builds in 2024.',
    categoryLabel: 'CONVERSION LIFT',
  },
  {
    value: '120+',
    label: 'Shopify stores built and launched across DTC, B2B, and enterprise brands.',
    microcopy: 'Engineered by FactoryJet for performance and high conversions.',
    categoryLabel: 'STORES LAUNCHED',
  },
  {
    value: 'Fixed Price',
    label: 'Milestone-paid Shopify builds with full code ownership.',
    microcopy: 'Senior Figma design, Liquid engineering, and Lighthouse performance.',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_SHOPIFY_STATS = [
  {
    value: '2.85M+',
    label: 'Live Shopify stores worldwide, more than any other e-commerce platform.',
    sourceUrl: 'https://www.shopify.com/blog/shopify-stats',
    sourceLabel: 'Shopify 2025 Statistics',
  },
  {
    value: '$378B+',
    label: 'In gross merchandise volume processed by Shopify stores annually.',
    sourceUrl: 'https://investors.shopify.com',
    sourceLabel: 'Shopify Investor Relations',
  },
  {
    value: '15%',
    label: 'Better checkout conversion on Shopify vs. other platforms, per Shopify data.',
    sourceUrl: 'https://www.shopify.com/plus/checkout',
    sourceLabel: 'Shopify Plus Checkout Data',
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
    feature: 'Pricing model.',
    values: [
      'Fixed-price, quoted upfront.',
      'Multiples higher, often hourly.',
      'Hourly, no ceiling.',
      'Cheap one-time theme (you build it).',
    ],
  },
  {
    feature: 'Delivery timeline.',
    values: ['3–5 weeks.', '3–6 months.', '4–10 weeks (unreliable).', '~1 week (but you configure it).'],
  },
  {
    feature: 'Custom Figma design.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Shopify Plus capability.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Full data migration.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract.',
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
    priceRange: 'Get a quote',
    description:
      'A custom Shopify theme designed in Figma and built in Liquid for your existing store. Best for brands that have Shopify set up but need a storefront that actually converts.',
    features: [
      'Custom Figma design, homepage, PDP, collection, and cart.',
      'Liquid theme built to match Figma exactly.',
      'Custom sections editable from Shopify theme editor.',
      'Mobile-first, Lighthouse 95+ performance.',
      'Metafields setup for extended product data.',
      'Technical SEO: schema, canonical URLs, alt tags.',
      '2 rounds of design revisions included.',
      'Code delivered to your GitHub on launch.',
      '2–3 week delivery from design sign-off.',
    ],
    cta: { label: 'Book a Store Audit', modal: true, region: 'us' },
  },
  {
    name: 'Full Store Build',
    priceRange: 'Get a quote',
    description:
      'A complete Shopify store from scratch, custom theme, full product catalog configuration, payment and shipping setup, app integrations, and a live launch. Our most popular tier.',
    features: [
      'Everything in Theme Build, plus full store setup.',
      'Full product catalog import and collections architecture.',
      'Payment configuration: Stripe, PayPal, Shop Pay, Affirm, and Klarna.',
      'Shipping zones, carrier rates, and fulfillment setup.',
      'Email marketing integration with Klaviyo flows and templates.',
      'Up to 3 Shopify App Store integrations for reviews, upsell, and loyalty.',
      'Google Analytics 4, Meta Pixel, and Search Console setup.',
      'Post-launch Lighthouse audit and Core Web Vitals report.',
      '30-day post-launch support window included.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Shopify Plus',
    priceRange: 'Talk to the founder',
    description:
      'Shopify Plus with checkout customization, B2B wholesale portal, multi-storefront management, or a headless Hydrogen storefront. For brands scaling past $1M/year.',
    features: [
      'Checkout Extensibility with payment UI and post-purchase offers.',
      'B2B portal: company accounts, net terms, and volume pricing.',
      'Multi-storefront setup and shared inventory management.',
      'Shopify Flow automation for order routing, tagging, and alerts.',
      'Headless Hydrogen storefront option using React and Remix.',
      'International markets setup with multi-currency and translations.',
      'Dedicated senior engineering point of contact throughout build.',
      '90-day post-launch support and iteration window included.',
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
      'FactoryJet provides fixed-price Shopify development scoped to your exact catalog. Main cost drivers include custom theme design, catalog migrations, and third-party app setups. Complex builds like Shopify Plus B2B wholesale portals or headless Hydrogen apps require broader scopes. Every build is milestone-paid with clear deliverables confirmed before work starts. You receive senior engineering without agency bloat or surprise hourly invoices.',
  },
  {
    category: 'pricing',
    question: 'How long does a Shopify store build take?',
    answer:
      'A custom theme on an existing store takes 2–3 weeks from design sign-off. A full store build from scratch takes 3–5 weeks. Shopify Plus or headless Hydrogen builds run 6–10 weeks depending on B2B complexity or custom app requirements. We give you a firm timeline during discovery, because clear scope drives delivery speed.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep Shopify pricing fixed and predictable?',
    answer:
      'We work on a fixed-price, milestone-paid basis. Every build is scoped upfront with no hourly billing and no surprise invoices. Years of building Shopify stores helps us estimate accurately on the first call. The quote you approve is what you pay. You get clean Liquid engineering, high Lighthouse scores, and complete code ownership.',
  },

  /* ── Platform & Tech ── */
  {
    category: 'platform',
    question: 'Do I need Shopify Plus, or will standard Shopify work?',
    answer:
      'Standard Shopify works well for most DTC brands under $2M in annual revenue. Shopify Plus is worth the investment when you need custom checkout extensions, native B2B wholesale pricing, or multi-storefront setups. We evaluate your sales volume during discovery. We never recommend Plus unless your operations genuinely require it.',
  },
  {
    category: 'platform',
    question: 'What is headless Shopify (Hydrogen) and does my store need it?',
    answer:
      'Headless Shopify decouples your storefront using Hydrogen while keeping Shopify for checkout and inventory. This architecture delivers sub-second loads and bespoke user experiences. Most brands under $5M annually do well on standard Liquid themes. For high-volume brands, a small conversion lift easily covers headless infrastructure costs.',
  },
  {
    category: 'platform',
    question: 'Can you build custom Shopify apps or integrate third-party apps?',
    answer:
      'Yes to both. We integrate any Shopify App Store tool into your custom theme. This includes reviews, subscriptions, loyalty programs, and upsells. When public apps lack necessary features, we build custom private apps using the Shopify GraphQL Admin API and Polaris components.',
  },
  {
    category: 'platform',
    question: 'What Shopify apps do you typically integrate?',
    answer:
      'We regularly integrate Klaviyo for email, Yotpo and Okendo for reviews, and Recharge for subscriptions. For fulfillment, we connect ShipStation and EasyPost. For search, we configure Algolia and Boost Commerce. We style every app to match your theme perfectly with zero UI clutter.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my store from WooCommerce to Shopify?',
    answer:
      'Yes, WooCommerce migrations are a core weekly service. We transfer all products, customer records, and historical orders. We map your historical URL structure and create 1:1 301 redirects for every link. We test transactions on a staging store before DNS cutover to ensure zero downtime.',
  },
  {
    category: 'migration',
    question: 'What other platforms can you migrate to Shopify?',
    answer:
      'We migrate stores from Magento, BigCommerce, Squarespace, Wix, and custom databases. Complexity depends on catalog volume, custom metafields, and legacy pricing rules. We clean and format all data before importing it into native Shopify fields.',
  },
  {
    category: 'migration',
    question: 'Will my SEO rankings survive a migration to Shopify?',
    answer:
      'Yes, when handled with proper engineering, your rankings will stay safe. We crawl your entire legacy domain to document all ranking URLs. We build comprehensive 301 redirect maps and preserve all title tags, meta descriptions, and structured data. We verify indexing in Google Search Console post-launch.',
  },

  /* ── SEO & Performance ── */
  {
    category: 'seo',
    question: 'Will my Shopify store be optimized for Google?',
    answer:
      'Yes, technical SEO is baked into every theme we build. We configure clean canonical tags, Product schema, and BreadcrumbList markup. We compress images, optimize Web Vitals, and generate automated sitemaps. Your store launches ready to rank for primary commercial keywords.',
  },
  {
    category: 'seo',
    question: 'What Lighthouse score will my Shopify store get?',
    answer:
      'Our custom Liquid themes consistently score 90–97 on Lighthouse Performance. They achieve 100 on Accessibility, Best Practices, and SEO. Headless Hydrogen builds reach 95+ on Performance. We run live PageSpeed audits before launch so you verify scores upfront.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'Do I own my Shopify theme code after the project?',
    answer:
      'Yes, you own 100% of your codebase. We push the entire theme to your private GitHub repository on launch day. Every template, section schema, and asset belongs to your company. Any developer can maintain or update your store in the future without proprietary lock-in.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from hiring a US Shopify agency?',
    answer:
      'We offer three distinct advantages: fixed pricing, faster delivery, and direct senior access. Traditional agencies take four to six months and bill hourly. We build custom stores in three to five weeks. You work directly with senior architects who write the actual Liquid code.',
  },
  {
    category: 'trust',
    question: 'Can you work with my existing Shopify store without rebuilding everything?',
    answer:
      'Yes, we frequently optimize existing stores without full rebuilds. We audit conversion funnels, fix slow mobile templates, and streamline checkout flows. Often, targeted optimizations on your product pages and navigation deliver major revenue gains without rebuilding from scratch.',
  },

  {
    category: 'platform',
    question: 'Can you build a Shopify store for B2B wholesale or dealer ordering?',
    answer:
      'Yes, Shopify B2B is a core agency specialization. For Shopify Plus clients, we configure native wholesale features. These include company accounts, custom price lists, net payment terms, and tax resale rules. For standard Shopify, we configure wholesale tools like Wholesale Gorilla or Locksmith. We set up minimum order quantities, volume pricing, and custom reorder pads. Shopify B2B replaces expensive legacy portals with a streamlined checkout.',
  },
  {
    category: 'platform',
    question: 'Can you build a subscription Shopify store for a product that ships on a recurring basis?',
    answer:
      'Yes, recurring subscription stores are a major focus for our team. We integrate platforms like Recharge, Skio, or Bold Subscriptions. Implementation covers subscription product setups, recurring billing schedules, and customer self-service portals. Customers can easily pause, skip, or swap upcoming orders. We also build custom cancel-save flows that recover up to 25% of churn. Klaviyo retention flows keep subscribers engaged over the long term.',
  },
  {
    category: 'seo',
    question: 'How does FactoryJet optimize Shopify stores for Google, and what about AI search?',
    answer:
      'Shopify has unique technical quirks that amateur developers often miss. These include duplicate variant URLs, pagination dilution, and app script bloat. FactoryJet resolves these issues directly in Liquid code. We also implement full Answer Engine Optimization for AI search engines. We deploy Product schemas with live pricing and availability. We also add FAQPage and BreadcrumbList schemas. This structure helps search engines and AI engines parse your products with high confidence.',
  },
  {
    category: 'trust',
    question: 'What makes a Shopify store actually convert vs. just look good?',
    answer:
      'High-converting Shopify stores excel across four core areas. First, mobile checkout must be instant with one-tap Apple Pay or Shop Pay. Second, trust signals and reviews must sit prominently near the main CTA. Third, page speeds must load under two seconds on mobile networks. Fourth, post-purchase one-click upsells boost average order value by 15%. FactoryJet implements all four pillars across every custom build.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing Shopify support after launch?',
    answer:
      'Every build includes a 30-day post-launch support window for adjustments and questions. After that, we offer flexible monthly retainer plans with dedicated engineering hours. Retainer services include new landing pages, speed audits, app integrations, and promotion setups. We also provide standalone conversion audits 60 to 90 days after launch. You always have direct access to the engineer who wrote your store code.',
  },
  {
    category: 'pricing',
    question: 'How much does it cost to hire a Shopify developer?',
    answer:
      'Costs depend on your specific project scope and catalog size. A custom theme build on an existing store costs less than a ground-up migration. We provide a firm fixed quote after your initial discovery call. Freelancers often bill hourly without hard ceilings, which leads to budget overruns. Our milestone-paid structure ensures total cost certainty from day one.',
  },
  {
    category: 'trust',
    question: 'Can I hire a dedicated Shopify expert for my store?',
    answer:
      'Yes, we provide dedicated senior Shopify engineers for ongoing work. The same engineer who builds your storefront can support your growth. You avoid handoff friction and maintain technical continuity. We offer monthly blocks of hours for feature updates, seasonal promotions, and performance monitoring.',
  },
  {
    category: 'platform',
    question: 'Do you offer custom Shopify theme development and customization?',
    answer:
      'We build custom Shopify themes from scratch using clean Liquid and Tailwind CSS. We also customize existing premium themes when a full ground-up build is unnecessary. Our team develops custom sections, connects metafields, and streamlines checkout journeys. You receive clean, modular code that your marketing team can manage easily.',
  },
  {
    category: 'platform',
    question: 'Do you provide Shopify store design as well as development?',
    answer:
      'Yes, design and development are integrated into a unified workflow. Our designers create full Figma mockups for desktop and mobile before coding starts. You review and approve every layout, interaction, and responsive breakpoint. This ensures your live storefront matches the approved aesthetic with pixel-perfect precision.',
  },

  // ── Money-query coverage, added 2026-06-11 ──
  {
    category: 'trust',
    question: 'Who is the best Shopify development agency in USA?',
    answer:
      'FactoryJet is purpose-built for growing DTC and B2B brands. We provide senior Liquid engineering, milestone pricing, and fast turnarounds. Brands scaling past $2M often need specialized Shopify Plus features. First-time store launches need speed, clean design, and high mobile conversion. When vetting agencies, review verified Lighthouse scores and actual checkout speed. Real store performance matters far more than generic agency awards.',
  },
  {
    category: 'pricing',
    question: 'How much does Shopify website cost in USA?',
    answer:
      'Shopify store costs scale with catalog complexity and design depth. Custom Figma themes require deeper engineering than basic template tweaks. Shopify Plus and headless builds represent the highest enterprise tier. In addition to initial builds, factor in platform fees and app subscriptions. We quote all upfront development costs and expected app expenses before work begins.',
  },
  {
    category: 'trust',
    question: 'What are the top 10 Shopify development companies in USA?',
    answer:
      'Many agency roundups focus solely on enterprise shops with massive retainers. FactoryJet focuses on agile mid-market and SMB brands needing top-tier engineering. We provide senior developers, fixed pricing, and rapid delivery. When reviewing agencies, verify who actually writes the code. Ensure they commit to fixed quotes and deliver sub-2s mobile load times.',
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
  name: 'How FactoryJet builds your Shopify store',
  description: 'Our process for delivering professional, conversion-optimized Shopify stores for US brands.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Stage 01 | Discover',
      text: 'A 30-minute store audit. We review your current platform, catalog, traffic, and conversion data to define the right Shopify architecture and tech stack before scoping a line of work.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Stage 02 | Design',
      text: 'Full Figma mockups for your homepage, product page, collection page, and cart. You approve desktop and mobile before we write a line of Liquid. Two revision rounds included.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Stage 03 | Build',
      text: 'Custom Liquid theme or Hydrogen build with daily commits to your GitHub repo. Staging store URL available within 48 hours. Products, collections, and metafields configured.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Stage 04 | Test',
      text: 'Full checkout flow tested across Stripe, PayPal, and Shop Pay. Cross-browser and device testing on iOS, Android, Chrome, Safari, and Firefox. Lighthouse audit run before sign-off.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Stage 05 | Launch',
      text: 'DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded handover walkthrough. Your theme code and all app credentials delivered to your GitHub.',
    },
  ],
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify Development', url: '/services/shopify-development' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://factoryjet.com${item.url}`,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ShopifyPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="shopify-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="shopify-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="shopify-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="shopify-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="speakable-schema-shopify-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://factoryjet.com/services/shopify-development#webpage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'Shopify', href: '/services/shopify-development' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Store Audit', modal: true, region: 'us' }}
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_shopify_development_hero" />}
          eyebrow="SHOPIFY DEVELOPMENT · USA"
          headline="Custom Shopify Stores That Sell, Not Just Look Good"
          lead="Generic Shopify themes convert below 1%. FactoryJet builds custom Shopify and Shopify Plus stores, designed in Figma, built in Liquid, that are fast, on-brand, and optimized for your specific customer journey. engineered for measurable outcomes."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '120+ Shopify stores launched.',
            'Fixed-price, quoted upfront.',
            'Milestone-paid delivery.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT A CUSTOM SHOPIFY STORE CHANGES
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Your theme is your top sales rep. Most stores have it working against them.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Generic themes load in 4–6s on mobile. Up to 53% of visitors leave before adding items to cart.',
                  'Custom themes load in under 2 seconds. Brands average a 2.3× lift in add-to-cart rate.',
                  'Confusing menus and buried CTAs hurt sales. Clear hierarchy lowers abandonment rates.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
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
          imageAlt="Custom Shopify storefront on a MacBook with a skincare product, FactoryJet Shopify development"
          stats={[
            { value: '120+', label: 'Shopify Stores Delivered.' },
            { value: 'DTC + B2B', label: 'On one Shopify store.' },
            { value: 'Fixed Price', label: 'Confirmed Upfront, No Surprises.' },
            { value: 'Decade+', label: 'Building e-commerce.' },
          ]}
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="120+ Shopify stores built. A decade-plus of e-commerce. US brands trust the results."
        />

        {/* ── 3. WHY SHOPIFY + CUSTOM THEME ───────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHY CUSTOM SHOPIFY"
          headline="Shopify Is the Right Platform. A Generic Theme Is the Wrong Move."
          lead="Shopify is the world's leading e-commerce platform for a reason. But 90% of Shopify stores run on the same five themes, and wonder why their conversion rate is 0.8%."
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
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Shopify gives you the infrastructure: reliable hosting, payment processing, inventory management, and the App Store ecosystem. What it doesn&apos;t give you is a storefront that converts your specific customers. That&apos;s a design and engineering problem, and it&apos;s exactly what a custom theme solves.
              </p>

              {/* Mini conversion stats, aria-hidden decorative */}
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
                FactoryJet has built Shopify stores since the platform launched. We&apos;ve seen what generic themes cost brands in lost revenue, and what a properly engineered, conversion-optimized custom theme returns. We design in Figma. You approve every page before we build. Then we code in Liquid with high performance and clean SEO.
              </p>
              <p>
                We work with DTC brands and B2B wholesalers. We serve fashion and apparel companies. We also support food brands and high-AOV lifestyle retailers across the US. The industries differ; the standard of engineering doesn&apos;t.
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
                  { metric: 'Core Web Vitals', score: 'Green', note: 'all three: LCP, CLS, INP' },
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
          lead="Most Shopify stores leave 50–70% of their revenue on the table. Not because their product is wrong, because their storefront is built for convenience, not conversion."
          pillars={[
            {
              icon: '🐢',
              title: 'Slow themes kill mobile conversions.',
              body: 'The average Shopify store using a theme-store template loads in 4–6 seconds on mobile. Google data shows 53% of mobile users abandon a page after 3 seconds. A slow theme is not a minor inconvenience. It wastes your ad spend before a single product image loads.',
            },
            {
              icon: '📦',
              title: 'Generic product pages do not convert.',
              body: 'The same Dawn or Refresh theme layout used by 200,000 other Shopify stores will not communicate your product value. Your customer needs trust signals specific to your category. They need imagery that matches their expectations. They need an intentional CTA hierarchy designed around how they shop.',
            },
            {
              icon: '💸',
              title: 'US Shopify agencies charge multiples higher for this.',
              body: 'A mid-tier US agency bills a multiple of our rate for custom theme development. FactoryJet delivers the same Figma-first design, clean Liquid engineering, and Lighthouse performance at a fixed price.',
            },
          ]}
        />

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Store Audit to Live Launch in 5 Stages."
          lead="A structured build process with design approval before engineering, a staging store before DNS switch, and a full Lighthouse audit before you sign off."
          stages={SHOPIFY_JOURNEY_STAGES}
          closingNote="5 STAGES · 3–5 WEEKS TO LAUNCH · FIGMA APPROVAL BEFORE BUILD · ZERO DOWNTIME LAUNCH."
        />

        {/* ── 6. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six Shopify Services for US E-Commerce Brands."
          lead="From a custom theme on an existing store to a full Shopify Plus B2B platform, we scope the right engagement for where your business is and where it's going."
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
          lead="We build in Liquid and Hydrogen, Shopify's own languages, so your theme performs at platform speed, not plugin speed."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Shopify Liquid', 'Hydrogen', 'Remix', 'Figma', 'Klaviyo', 'ReCharge', 'Yotpo', 'Shopify Flow'].map((tech) => (
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
                <strong className="font-semibold text-fj-ink">Shopify Liquid</strong>: The native Shopify templating language. We write clean, well-commented Liquid with custom section schemas so your team can edit content from the theme editor without touching code.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify Hydrogen (React/Remix)</strong>, For headless builds where performance and design freedom are the priority. Hydrogen uses Shopify&apos;s Storefront API and ships with streaming SSR, giving sub-1-second page loads that standard Liquid can&apos;t match.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Checkout Extensibility</strong>, For Shopify Plus clients who need custom checkout UI, post-purchase offer pages, and checkout-level discount logic without checkout.liquid hacks.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Klaviyo + Email Flows</strong>: We configure welcome series, abandoned cart, browse abandonment, back-in-stock, and post-purchase flows: all matched to your brand identity, not Klaviyo&apos;s defaults.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify Flow</strong>: For Plus merchants: automated order tagging, fraud flagging, customer segmentation, and cross-store inventory alerts built in Shopify&apos;s native automation tool.
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
            "Shopify powers 29% of all e-commerce websites globally and holds the number one market share position in the United States. It processes over $378 billion in gross merchandise volume annually across 2.85 million live stores. The infrastructure is exceptional. The average store's conversion rate, around 1.4%, is not.",
            "FactoryJet builds custom Shopify stores for high-growth US brands across the country. We understand what DTC brands, B2B wholesalers, and local retailers need. They need professional design, fast product pages, and checkout flows that retain customers without excessive technical debt.",
            "The brands we build for run the numbers first. Improving conversion from 1% to 2.3% on 5,000 monthly visitors at an $80 AOV yields $52,000 in additional annual revenue from the exact same traffic.",
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
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
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

        {/* ── 9b. INTERACTIVE ROI CALCULATOR ──────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <EcommerceRoiCalculator
              source="us_shopify_development_service_page"
              defaultPlatform="shopify"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Shopify Agency vs. Freelancer vs. Theme Store"
          lead="Not all Shopify development options deliver the same result. Here's what the decision actually looks like when you compare side by side."
          pullQuote={{
            stat: 'Fixed price',
            caption: 'quoted upfront. Same Figma design, Liquid engineering, and Lighthouse audits as a US Shopify agency project that costs several times more.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Timelines reflect typical US market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers, quoted upfront after a free discovery call."
        />

        {/* ── 11b. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their Shopify store"
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price Shopify Development"
            lead="No hourly billing. No scope surprises. Every tier includes a fixed scope, fixed price, and a timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="Shopify's own plan fee is billed directly by Shopify. App subscription fees (Klaviyo, ReCharge, etc.) go directly to app providers, not marked up by FactoryJet. Every scope, including custom Plus work, is quoted after a free discovery call."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We've built 120+ Shopify stores. Not slide decks about them."
          lead="FactoryJet has been building e-commerce. We know what moves the needle on a Shopify product page, and what looks impressive in a proposal but doesn't affect your conversion rate."
          pillars={[
            {
              icon: '🎯',
              title: 'Conversion-first design, not portfolio-first',
              body: 'A Shopify theme\'s job is to sell. We design around your specific customer\'s decision-making process, where trust signals go, how the size guide surfaces, when the sticky cart appears, where to put the review count. These aren\'t aesthetic decisions. They\'re conversion decisions backed by 120+ builds of data.',
            },
            {
              icon: '⚡',
              title: 'Figma approval before a line of Liquid',
              body: 'We show you desktop and mobile mockups for every key page before opening a code editor. If the direction is wrong, we fix it in Figma, not after 3 weeks of engineering. This is how we deliver in 3–5 weeks when traditional agencies quote 6 months.',
            },
            {
              icon: '🔒',
              title: 'Your code, your GitHub, launch day',
              body: 'The full Liquid codebase lands in your GitHub repository the day you go live. No proprietary builder, no FactoryJet platform subscription, no lock-in. Any Shopify developer can maintain it. If you outgrow us, or outgrow Shopify entirely, you walk away with a real, documented codebase.',
            },
          ]}
        />

        {/* ── 13b. HIRE A SHOPIFY DEVELOPER ─────────────────────────────────── */}
        <section className="py-14 md:py-20 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">HIRE SHOPIFY DEVELOPERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Hire a Shopify developer or a dedicated Shopify expert</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#3A3A40] leading-relaxed space-y-4">
                <p>
                  Most US brands avoid marketplace gigs. They prefer to <strong>hire a Shopify developer</strong> with a proven track record. Every FactoryJet project pairs you with a dedicated Shopify expert. We design, code, and deploy your store directly without account managers or contractor handoffs.
                </p>
                <p>
                  Need ongoing engineering capacity? You can hire a dedicated developer on a monthly retainer. We handle theme updates, app setups, conversion tests, and seasonal landing pages. Need broader technical architecture? Explore our{' '}
                  <Link href="/services/ecommerce-development" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce development services</Link>. Already live and scaling? Review our{' '}
                  <Link href="/services/shopify-seo" className="text-[#B23E13] font-medium underline underline-offset-2">Shopify SEO services</Link>.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-white p-7">
                <h3 className="text-xl font-bold text-[#0F0F12] mb-3">When teams hire a Shopify expert from FactoryJet</h3>
                <ul className="space-y-2.5 text-[#3A3A40] text-[15px]">
                  <li>• You&apos;ve outgrown a template and need a custom Shopify build.</li>
                  <li>• Your in-house team needs a Shopify developer for overflow work.</li>
                  <li>• A previous freelancer disappeared mid-project.</li>
                  <li>• You&apos;re migrating to Shopify and want it done once, correctly.</li>
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

        {/* ── 13c. THEME DEVELOPMENT, CUSTOMIZATION & STORE DESIGN ───────────── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">DESIGN &amp; CUSTOMIZATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Shopify theme development, customization &amp; store design</h2>
            <p className="text-[#3A3A40] leading-relaxed max-w-3xl mb-8">
              Development and design are paired from day one. Every build unites a Shopify designer with the Liquid engineer. We build custom themes from scratch or refine premium themes. We also overhaul high-traffic product pages. One dedicated team owns both the visual look and the conversion math.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Custom Shopify theme development</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">We design in Figma and code in clean Liquid. Your team can edit every section directly in the theme editor.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Shopify store customization</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">We refine existing themes through custom metafields, app styling, and checkout enhancements without requiring a full rebuild.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAFAF7] p-6">
                <h3 className="text-lg font-bold text-[#0F0F12] mb-2">Shopify store design &amp; redesign</h3>
                <p className="text-[#3A3A40] text-[15px] leading-relaxed">Our designers rebuild visual hierarchy, mobile flows, and trust elements to boost actual revenue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything You Need to Know Before You Start"
          lead="The questions we answer on every Shopify discovery call, answered here, without the runaround."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve, internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Shopify Development Services by City</h2>
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
              ].map(({ city, href }) => (
                <Link key={href} href={href} className="px-4 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors">
                  {city}
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
