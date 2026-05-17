import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Shopify Development Company in India | Custom Stores From ₹50,000 | FactoryJet',
  description:
    'FactoryJet builds custom Shopify and Shopify Plus stores for Indian DTC brands and e-commerce businesses. Razorpay, UPI, GST invoicing, Shiprocket integrated. 7-day delivery. Full code ownership. From ₹50,000.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development India | Custom Shopify Stores From ₹50,000 | FactoryJet',
    description:
      'Custom Shopify stores for Indian DTC brands. Razorpay + UPI integrated. GST-compliant. Shiprocket + Delhivery. 7-day delivery. From ₹50,000.',
    url: 'https://factoryjet.com/services/shopify-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Shopify Development India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development India | Custom Shopify Stores | FactoryJet',
    description:
      'Custom Shopify stores for Indian DTC brands. Razorpay + UPI + GST built in. 7-day delivery. From ₹50,000.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/shopify-development',
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
      name: 'How much does a custom Shopify store cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's Shopify development starts at ₹50,000 for a custom theme applied to an existing Shopify store. A full store build — custom theme, products, Razorpay and UPI payment integration, Shiprocket logistics, GST invoicing, and launch — runs ₹1,00,000. Shopify Plus builds with B2B wholesale portals, multi-storefront management, and Checkout Extensibility start at ₹2,00,000. All prices are 50–60% lower than comparable Indian digital agencies.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a Shopify store in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A custom Shopify theme applied to an existing store takes 5–7 days. A full store build from scratch — theme, product catalog, Razorpay + UPI payment integration, Shiprocket logistics, GST invoicing, and launch — takes 7–14 days. Shopify Plus builds with B2B features, multi-storefronts, or headless Hydrogen setups take 5–10 weeks depending on complexity.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shopify work well for Indian businesses — Razorpay, UPI, and GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Shopify has excellent support for Indian payment methods and compliance. Razorpay's Shopify plugin supports UPI, cards, net banking, EMI, Paytm, PhonePe, and BNPL (LazyPay, Simpl) in a single checkout integration. GST-compliant invoices can be auto-generated at order placement using metafield-based invoice templates or third-party apps like QuickBooks Commerce. Shiprocket integrates natively with Shopify for access to Delhivery, Bluedart, XpressBees, and 15+ couriers. FactoryJet configures all of this as standard in every Indian Shopify build.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Shopify Plus, or will standard Shopify work for my Indian business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Standard Shopify (Basic, Grow, or Advanced at $29–$299/month) works well for most Indian D2C brands doing under ₹5 crore/year in revenue. Shopify Plus (starting at $2,500/month) is worth it when you need: fully custom checkout UI via Checkout Extensibility, a B2B wholesale portal with company accounts and net terms, management of 10+ storefronts from one admin, or advanced Shopify Flow automation. We assess this during discovery — we will not push you to Plus if your revenue stage doesn't justify the subscription cost.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my WooCommerce or OpenCart store to Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Shopify migrations are one of our most common engagements. We migrate products (including variants, images, and metafields), customers, order history, and reviews from WooCommerce, OpenCart, Magento, BigCommerce, Wix, Squarespace, and custom PHP platforms. We preserve your URL structure with 301 redirects to protect SEO rankings, test the full checkout flow on staging before DNS switch, and migrate all existing Razorpay or PayU payment configurations. Zero downtime on launch day.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a Shopify store with WhatsApp order notifications and abandoned cart recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — WhatsApp commerce integration is standard in our Indian Shopify builds. We integrate Interakt, Wati, or AiSensy for: order confirmation notifications via WhatsApp, abandoned cart recovery messages (3× better open rate than email for Indian consumers), shipping tracking updates from Shiprocket, and post-delivery review requests. WhatsApp flows are configured with opt-in at checkout and comply with TRAI DLT regulations for business messaging.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Shopify store rank on Google India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every Shopify store we build includes technical SEO: Product and BreadcrumbList schema markup for Google Shopping eligibility, optimised title tags and meta descriptions for all product and collection page templates, canonical URLs to fix Shopify's duplicate URL issues (collection/product vs. product URLs), compressed WebP images with descriptive alt text, sitemap submission to Google Search Console, and Core Web Vitals optimisation for Indian mobile networks. Collection page copy targeting Indian search intent (e.g. 'buy [product] online India', 'best [product] under ₹X') is available as an add-on.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own my Shopify theme code after the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — the full Liquid theme codebase is delivered to your GitHub repository on launch day. You own every file. You can hire any Shopify developer in the world to maintain or extend it — you are not locked into FactoryJet. We document all custom sections, metafields, and app integrations during handover so future work does not require archaeology.",
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Development Services India',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    telephone: '+919699977699',
    email: 'connect@factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: 'Shopify Development',
  description:
    'Custom Shopify and Shopify Plus development for Indian DTC brands and e-commerce businesses. Razorpay, UPI, GST invoicing, Shiprocket integrated. 7-day delivery. From ₹50,000.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Shopify Theme Build',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom Shopify theme designed in Figma and built in Liquid for an existing Shopify store.',
    },
    {
      '@type': 'Offer',
      name: 'Full Shopify Store Build',
      price: '100000',
      priceCurrency: 'INR',
      description:
        'Complete Shopify store from scratch — custom theme, products, Razorpay + UPI, GST invoicing, Shiprocket, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'Shopify Plus & Advanced',
      price: '200000',
      priceCurrency: 'INR',
      description:
        'Shopify Plus with Checkout Extensibility, B2B wholesale portal, multi-storefront, or headless Hydrogen.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const IN_SHOPIFY_SERVICES = [
  {
    name: 'Custom Shopify Theme Development',
    description:
      'A Shopify theme built from scratch in Figma, then coded in Liquid with custom sections your team can edit from the theme editor — no developer needed for day-to-day content changes. Mobile-first, Lighthouse 95+ on delivery.',
    example: 'Average 2.4× improvement in mobile add-to-cart rate vs. generic Shopify themes.',
    linkLabel: 'See theme examples',
    linkHref: '/portfolio',
  },
  {
    name: 'Full Shopify Store Setup & Launch',
    description:
      'Complete store configuration: product catalogue import, collections architecture, Razorpay + UPI payment integration, Shiprocket logistics, GST-compliant invoicing, and a live launch with DNS transfer.',
    example: 'Custom Shopify launch — theme, products, payments, logistics — in 7–14 days.',
    linkLabel: 'Book a free call',
    linkHref: '/contact',
  },
  {
    name: 'Shopify Plus Development',
    description:
      'Checkout Extensibility (custom checkout UI, payment method customisation), B2B wholesale portal with company accounts and dealer pricing, multi-storefront management, and Shopify Flow automation for Indian business workflows.',
    example: 'Required for brands processing ₹5 crore+/year or needing B2B wholesale features.',
    linkLabel: 'Assess if you need Plus',
    linkHref: '/contact',
  },
  {
    name: 'Store Migrations to Shopify',
    description:
      'Full data migrations from WooCommerce, OpenCart, Magento, Wix, Squarespace, and custom PHP platforms — preserving products, customers, order history, and SEO URL structure with 301 redirects.',
    example: 'Zero downtime on launch day. All redirects mapped before DNS switch.',
    linkLabel: 'Plan your migration',
    linkHref: '/contact',
  },
  {
    name: 'Headless Shopify (Hydrogen)',
    description:
      'Decouple your storefront from Shopify\'s backend using Hydrogen (React/Remix) for sub-1-second page loads on Indian 4G networks, full design freedom, and custom UX impossible within standard Liquid themes.',
    example: 'Best for Indian D2C brands at ₹5 crore+/month where performance directly moves revenue.',
    linkLabel: 'Is headless right for you?',
    linkHref: '/contact',
  },
  {
    name: 'Shopify App Integration & WhatsApp Commerce',
    description:
      'Integrate and theme-configure any Shopify app (reviews, subscriptions, loyalty, upsell, bundles). Add WhatsApp order notifications, abandoned cart recovery, and shipping tracking via Interakt, Wati, or AiSensy.',
    example: 'WhatsApp abandoned cart recovery delivers 3× better open rates than email in India.',
    linkLabel: 'Get a free assessment',
    linkHref: '/contact',
  },
];

const IN_SHOPIFY_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute store audit. We review your current platform, catalogue, traffic, and conversion data — then recommend the right Shopify architecture, payment stack (Razorpay vs. PayU), and logistics integration before scoping a line of work.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Full Figma mockups for your homepage, product page, collection page, and cart. You approve desktop and mobile before we write a line of Liquid. Indian consumer UX patterns built in — thumb-friendly tap targets, UPI quick-pay placement, trust signals above the fold.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Custom Liquid theme with daily commits to your GitHub repo. Staging store URL available within 48 hours. Razorpay + UPI wired in, Shiprocket rate calculator at checkout, GST invoice metafields configured, WhatsApp flow set up.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Full checkout tested across Razorpay (UPI, cards, net banking, EMI, wallets), Shiprocket shipping rate calculation, and GST invoice generation. Cross-device testing on iOS, Android, Chrome, and Safari. Lighthouse audit before sign-off.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded handover walkthrough. Your theme code and all API credentials delivered to your GitHub. 14-day support window included.',
  },
];

const IN_SHOPIFY_STATS = [
  {
    value: '2.4×',
    label: 'improvement in mobile add-to-cart rate with a custom theme vs. generic Shopify theme',
    microcopy: 'average across FactoryJet Indian Shopify builds in 2024',
    categoryLabel: 'CONVERSION LIFT',
  },
  {
    value: '120+',
    label: 'Shopify stores built and launched for Indian and global DTC brands since 2005',
    microcopy: 'across fashion, health, food, electronics, and lifestyle categories',
    categoryLabel: 'STORES LAUNCHED',
  },
  {
    value: '7 Days',
    label: 'delivery guarantee for standard Shopify store builds — theme, products, payments, and launch',
    microcopy: 'the fastest professional Shopify build timeline in India',
    categoryLabel: 'DELIVERY',
  },
];

const IN_SHOPIFY_MARKET_STATS = [
  {
    value: '2.85M+',
    label: 'live Shopify stores globally — Shopify powers more e-commerce than any other platform',
    sourceUrl: 'https://www.shopify.com/blog/shopify-stats',
    sourceLabel: 'Shopify 2025 Statistics',
  },
  {
    value: '65%',
    label: 'of Indian e-commerce traffic is mobile — Shopify is built for the mobile-first experience',
    sourceUrl: 'https://www.redseer.com/reports',
    sourceLabel: 'RedSeer Strategy Consultants',
  },
  {
    value: '₹3,000 Cr+',
    label: 'in daily UPI transaction volume — Shopify + Razorpay is the native stack for Indian DTC',
    sourceUrl: 'https://www.npci.org.in/statistics',
    sourceLabel: 'NPCI Monthly Statistics',
  },
];

const IN_SHOPIFY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indian Shopify Agency' },
  { label: 'Freelancer' },
  { label: 'Shopify Theme Store' },
] as const;

const IN_SHOPIFY_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '₹50,000',
      '₹2,00,000–₹8,00,000',
      '₹40,000–₹1,50,000',
      '₹0–₹25,000 (then you configure it)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–12 weeks (unreliable)', '~1 week (you build it)'],
  },
  {
    feature: 'Custom Figma design (not a premade theme)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Razorpay + UPI + EMI integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GST-compliant invoicing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Shiprocket / Delhivery integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ on delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership (your GitHub)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no hourly billing)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
];

const IN_SHOPIFY_PRICING_TIERS = [
  {
    name: 'Theme Build',
    priceRange: 'From ₹50,000',
    description:
      'A custom Shopify theme designed in Figma and built in Liquid for your existing store. Best for brands that already have Shopify set up but need a storefront that actually converts.',
    features: [
      'Custom Figma design — homepage, PDP, collection, cart',
      'Liquid theme built to match Figma exactly',
      'Custom sections editable from Shopify theme editor',
      'Mobile-first, Lighthouse 95+ performance',
      'Metafields setup for extended product data',
      'Technical SEO: schema markup, canonical URLs, alt tags',
      '2 rounds of design revisions',
      'Code delivered to your GitHub on launch',
      '5–7 day delivery from design sign-off',
    ],
    cta: { label: 'Book a Free Store Audit', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Full Store Build',
    priceRange: 'From ₹1,00,000',
    description:
      'A complete Shopify store from scratch — custom theme, full product catalogue, Razorpay + UPI payments, Shiprocket logistics, GST invoicing, WhatsApp notifications, and a live launch.',
    features: [
      'Everything in Theme Build, plus:',
      'Full product catalogue import and collections architecture',
      'Razorpay integration: UPI, cards, net banking, EMI, wallets',
      'Shiprocket integration with real-time shipping rate calculator',
      'GST-compliant auto-invoicing at order placement',
      'WhatsApp order notifications and abandoned cart recovery',
      'Google Analytics 4 + Meta Pixel + Search Console setup',
      'Shipping zones, tax configuration, and return policy setup',
      '7–14 day delivery from design sign-off',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Shopify Plus & Headless',
    priceRange: 'From ₹2,00,000',
    description:
      'Shopify Plus with custom checkout UI, B2B wholesale portal, or headless Hydrogen storefront — for brands where standard Shopify has hit its ceiling.',
    features: [
      'Everything in Full Store Build, plus:',
      'Checkout Extensibility (custom checkout UI components)',
      'B2B wholesale portal with company accounts and dealer pricing',
      'Multi-storefront management from one Shopify admin',
      'Shopify Flow automation for order routing and inventory alerts',
      'Headless Hydrogen/Next.js storefront (optional)',
      'Advanced Klaviyo or WebEngage email flows (10+ sequences)',
      'ERP / Tally / Zoho Books integration',
      'Dedicated engineering point of contact + 90-day support',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true as const, region: 'in' as const },
  },
] as const;

const IN_SHOPIFY_FAQ_CATEGORIES = [
  { key: 'cost',       label: 'Cost & Timeline' },
  { key: 'india',      label: 'India-Specific (Razorpay, GST, Shiprocket)' },
  { key: 'platform',   label: 'Platform & Features' },
  { key: 'migration',  label: 'Migrations' },
  { key: 'technical',  label: 'Technical & SEO' },
  { key: 'trust',      label: 'Working With Us' },
];

const IN_SHOPIFY_FAQ_ITEMS = [

  /* ── Cost & Timeline ── */
  {
    category: 'cost',
    question: 'How much does a custom Shopify store cost in India?',
    answer:
      "FactoryJet's Shopify development starts at ₹50,000 for a custom Liquid theme applied to an existing Shopify store. A full store build — custom theme, products, Razorpay + UPI payment integration, Shiprocket logistics, GST invoicing, WhatsApp notifications, and launch — runs ₹1,00,000. Shopify Plus builds with Checkout Extensibility, B2B wholesale portals, and multi-storefront management start at ₹2,00,000 and are scoped after a free discovery call. All prices are 50–60% lower than comparable Indian digital agencies.",
  },
  {
    category: 'cost',
    question: 'How long does it take to build a Shopify store in India?',
    answer:
      'A custom Shopify theme applied to an existing store takes 5–7 days. A full store build from scratch — theme, products, Razorpay + UPI payments, Shiprocket, GST invoicing, WhatsApp flows, and launch — takes 7–14 days. Shopify Plus builds with B2B features or headless Hydrogen take 5–10 weeks depending on complexity. FactoryJet is the fastest professional Shopify development studio in India for standard builds.',
  },
  {
    category: 'cost',
    question: 'Why is FactoryJet cheaper than other Indian Shopify agencies?',
    answer:
      "We are a specialised Shopify engineering team — not a full-service agency. No account management layers, no generalist developers, no large office overhead. The same Figma-first design process, the same Liquid engineering quality, the same Lighthouse audit before handover — at 50–60% lower cost. We have been building Shopify stores since 2005. You pay for the build, not our admin structure.",
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Does Shopify work well for Indian businesses — Razorpay, UPI, and GST?',
    answer:
      "Yes — Shopify has strong native support for Indian commerce. Razorpay's Shopify plugin covers UPI, cards, net banking, EMI, Paytm, PhonePe, Mobikwik, and BNPL (LazyPay, Simpl) in a single checkout widget. PayU and CCAvenue are available as alternatives. GST-compliant invoices are generated automatically at order placement using Shopify metafields or third-party apps. Shiprocket integrates natively with Shopify for access to 15+ Indian courier partners. FactoryJet configures all of this as standard — you receive a fully wired, production-ready Indian Shopify store.",
  },
  {
    category: 'india',
    question: 'Can you set up Shiprocket or Delhivery on my Shopify store?',
    answer:
      'Yes — logistics integration is standard in every Indian Shopify build we deliver. We configure Shiprocket for access to Delhivery, Bluedart, XpressBees, Ekart, Shadowfax, and other carriers under one integration, with automated AWB generation, real-time shipping rate calculation at checkout, tracking updates pushed to customers via WhatsApp and SMS, and automated NDR (non-delivery report) workflows. For high-volume brands (10,000+ shipments/month), we integrate Delhivery directly via API for custom SLAs.',
  },
  {
    category: 'india',
    question: 'Can you add WhatsApp abandoned cart recovery and order notifications to my Shopify store?',
    answer:
      'Yes — WhatsApp commerce is standard in our Indian Shopify builds. We integrate Interakt, Wati, or AiSensy for: order confirmation and dispatch notifications, shipping tracking updates via WhatsApp, abandoned cart recovery messages (Indian consumers open WhatsApp messages at 3× the rate of email), post-delivery review requests, and re-engagement campaigns. All flows are configured with opt-in at checkout and comply with TRAI DLT registration requirements for business messaging.',
  },
  {
    category: 'india',
    question: 'Can you build a Shopify store in Hindi or other regional Indian languages?',
    answer:
      'Yes — multi-language Shopify stores are a standard capability. We implement the Shopify Translate & Adapt app or Langify for regional language storefronts in Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati. Language-switched URLs follow SEO-safe hreflang patterns. Automatic translation is available via DeepL API for product descriptions at scale. All currency and price display remain in INR across all language variants.',
  },

  /* ── Platform & Features ── */
  {
    category: 'platform',
    question: 'Do I need Shopify Plus, or will standard Shopify work?',
    answer:
      "Standard Shopify (Basic, Grow, or Advanced at $29–$299/month) works well for most Indian D2C brands doing under ₹5 crore/year online. Shopify Plus (starting at $2,500/month) is worth the investment when you need: fully custom checkout UI via Checkout Extensibility, a B2B wholesale portal with company accounts and net-30 credit terms, management of 10+ storefronts from one admin, or advanced Shopify Flow automation for complex order routing. We assess this during discovery — we will not push you to Plus if your revenue doesn't justify the subscription cost.",
  },
  {
    category: 'platform',
    question: 'What Shopify apps do you recommend for Indian D2C brands?',
    answer:
      "Our standard Indian D2C Shopify stack: Razorpay for payments, Shiprocket for logistics, Interakt or Wati for WhatsApp, Stamped.io or Okendo for reviews, ReCharge or Appstle for subscriptions, Yotpo Loyalty for retention points, Privy or Klaviyo for email capture and automations, and QuickBooks Commerce or Zoho Books for GST accounting sync. We configure, theme-integrate, and test every app we recommend — we don't just install it and leave.",
  },
  {
    category: 'platform',
    question: 'Can you build a B2B wholesale portal on Shopify for Indian distributor networks?',
    answer:
      'Yes — B2B Shopify development for Indian distributors and wholesalers is a growing part of our work. Shopify Plus has native B2B tools: company accounts with multiple buyer users, dealer-tier price lists, minimum order quantities, and net payment terms. Standard Shopify B2B uses WholesaleX, B2BKing, or custom metafield-based price overrides. We build separate retail and wholesale storefronts sharing a single inventory source — no double-entry, no manual price list management.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my WooCommerce or OpenCart store to Shopify?',
    answer:
      "Yes — Shopify migrations are one of our most common engagements in India. We migrate products (including variants, images, and metafields), customers, order history, and reviews from WooCommerce, OpenCart, Magento, BigCommerce, Wix, Squarespace, and custom PHP platforms. We map your URL structure and implement 301 redirects for every changed URL before DNS switch. Zero downtime on launch day — DNS switches only after the staging store is fully validated with payments and logistics tested.",
  },
  {
    category: 'migration',
    question: 'Will my Google rankings survive migration to Shopify?',
    answer:
      "Yes — if done correctly. Before the migration, we audit your existing URL structure, identify pages with rankings worth protecting, and build a complete redirect map before touching DNS. Every changed URL gets a 301 redirect. We submit the new sitemap to Google Search Console on launch day and monitor organic traffic for 30 days post-launch. Indian e-commerce stores typically see rankings fully recover within 6–8 weeks. Shopify's default canonical URL handling is fixed during migration to prevent common duplicate content issues.",
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my Shopify store be optimised for Google India and mobile search?',
    answer:
      "Yes. Every Shopify store we build includes technical SEO: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates for all product and collection pages, canonical URLs to fix Shopify's native duplicate URL issues, compressed WebP images with descriptive alt text, XML sitemap submission to Google Search Console, and Core Web Vitals optimisation targeting green status on Indian 4G networks. Lighthouse 95+ on mobile before delivery. Collection page copy targeting Indian search intent is available as an add-on.",
  },
  {
    category: 'technical',
    question: 'How do you optimise Shopify for India\'s mobile users on 4G?',
    answer:
      'India has 65% mobile commerce share and a significant percentage of users on 4G with variable data speeds. Our Shopify optimisation for Indian mobile: mobile-first Liquid templates designed at 375px before desktop, WebP image format served via Shopify CDN with lazy loading for below-fold images, Razorpay Turbo for one-tap UPI checkout (eliminates 3–4 redirect steps), sticky Add-to-Cart on PDPs, and thumb-friendly tap targets throughout. Every store passes Lighthouse 90+ on mobile before launch.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'Do I own my Shopify theme code after the project?',
    answer:
      "Yes — 100%. The full Liquid theme codebase is delivered to your GitHub repository on launch day. You own every file, every section, every metafield schema, and all API credentials. You can hire any Shopify developer in the world to maintain or extend it. No FactoryJet retainer required to keep your store running. We document all custom sections and app integrations during handover — future developers won't need archaeology.",
  },
  {
    category: 'trust',
    question: 'What ongoing support does FactoryJet offer after Shopify launch?',
    answer:
      'Every Shopify project includes a 14-day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly retainer plans from ₹9,999/month: up to 4 hours of Shopify development, priority same-day bug response, and a dedicated engineer who knows your theme codebase. Retainer clients get pre-built festival campaign assets (Diwali sale banners, Holi offers, Independence Day promotions) and quarterly performance reviews.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a Shopify Partner agency in India?',
    answer:
      "Three things: specialisation (we build Shopify stores exclusively — no social media campaigns, no generic websites, no SEO retainers), speed (7-day delivery guarantee for standard builds — the fastest in India), and ownership (full Liquid codebase to your GitHub on launch day, zero lock-in). We have delivered 120+ Shopify stores for Indian and global brands since 2005. We know what actually converts on Shopify — and we build around those data points, not around what looks impressive in a mock-up.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <Script
        id="in-shopify-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="in-shopify-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Shopify Development', url: 'https://factoryjet.com/services/shopify-development' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SHOPIFY DEVELOPMENT · INDIA"
          headline="A Shopify Store That Sells — Built in 7 Days"
          lead="Generic Shopify themes convert at 0.8% in India. FactoryJet builds custom Shopify stores — designed in Figma, Razorpay and UPI integrated, GST-compliant, Lighthouse 95+ — from ₹50,000. In 7 days."
          primaryCta={{ label: 'Book a Free Store Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '120+ Shopify stores launched',
            'From ₹50,000',
            '7-day delivery guarantee',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                CUSTOM THEME vs. GENERIC THEME
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Same store. Different design. The gap is revenue.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Monthly visitors', value: '5,000' },
                  { label: 'Average order value', value: '₹1,800' },
                  { label: 'Generic Shopify theme (0.8%)', value: '₹72,000/mo' },
                  { label: 'Custom FactoryJet theme (2.4%)', value: '₹2,16,000/mo' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-fj-neutral-100 pb-3"
                  >
                    <p className="font-fj-body text-[0.875rem] text-fj-neutral-500">{row.label}</p>
                    <p
                      className="fj-display font-semibold text-fj-ink"
                      style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
                    >
                      {row.value}
                    </p>
                  </div>
                ))}
                <div className="rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3">
                  <p className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28]">
                    +₹1,44,000/month from the same traffic. A custom store pays for itself in under 21 days.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="120+ Shopify stores launched. 25 years of e-commerce expertise."
        />

        {/* ── 4. SHOPIFY EXPLAINED ─────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="SHOPIFY FOR INDIAN BUSINESSES"
          headline="Why Shopify — and Why a Custom Build Pays for Itself in Weeks"
          lead="Shopify is the right platform for most Indian DTC brands. But the platform is only as good as the theme running on it. Generic themes convert at 0.8%. Custom builds convert at 2.4%. That gap is revenue."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Shopify Liquid',
                  'Shopify Plus',
                  'Razorpay',
                  'UPI',
                  'Shiprocket',
                  'WhatsApp Commerce',
                  'GST Invoicing',
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
                Shopify is the world&apos;s most popular e-commerce platform for a reason: it handles
                hosting, security, and payment infrastructure so Indian brand founders can focus on
                product and marketing. Razorpay&apos;s native Shopify integration covers UPI, cards,
                net banking, EMI, and digital wallets in a single checkout widget. Shiprocket connects
                Shopify to 15+ Indian courier partners in one integration. GST-compliant invoices are
                auto-generated at every order.
              </p>

              {/* Key Shopify metrics for India */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.8%', label: 'avg. conv. rate — generic Shopify theme' },
                  { value: '2.4×', label: 'conversion lift — custom FactoryJet theme' },
                  { value: '7 Days', label: 'standard Shopify build delivery' },
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
                  Shopify gives you the infrastructure. A custom theme gives you the conversion. Both
                  together — at ₹1,00,000 — pay for themselves in under 30 days.
                </p>
              </div>

              <p>
                FactoryJet has built 120+ Shopify stores for Indian and global brands across fashion,
                health, food, electronics, and lifestyle categories. We know where Indian consumers
                hesitate: the UPI redirect step that loses 20% of carts, the product page layout that
                buries &quot;Add to Cart&quot; below the fold on a 375px screen, the checkout that asks
                for a PIN and an OTP before showing the payment options. We design around those friction
                points — not around what looks good in a Figma file.
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
                  Shopify Plan Comparison — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { plan: 'Shopify Basic', best: 'New stores, testing the market', price: '$29/mo' },
                  { plan: 'Shopify Grow', best: 'Growing D2C brands, 2+ staff', price: '$79/mo' },
                  { plan: 'Shopify Advanced', best: 'Scale, advanced reports, lower MDR', price: '$299/mo' },
                  { plan: 'Shopify Plus', best: 'B2B, multi-store, custom checkout', price: '$2,500/mo' },
                  { plan: 'Headless Hydrogen', best: 'Sub-1s loads, full design control', price: 'Custom' },
                ].map((item) => (
                  <div key={item.plan} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.plan}
                      </p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#F05A28]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.price}
                      </p>
                    </div>
                    <p
                      className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400"
                      style={{ letterSpacing: '0.04em' }}
                    >
                      {item.best}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  We recommend the right plan. We won&apos;t push Plus if you don&apos;t need it.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your Shopify store is live. The conversion rate is where revenue disappears."
          lead="Most Indian Shopify stores run on a ₹5,000 theme with the logo swapped. They convert at 0.8% on mobile. A properly designed custom build converts at 2.4%. That 1.6-point gap represents the majority of your potential revenue — not from more traffic, but from your existing visitors."
          pillars={[
            {
              icon: '📱',
              title: 'India shops on mobile. Generic Shopify themes were not built for it.',
              body: 'Over 65% of Indian Shopify traffic arrives on a 375px screen. Generic themes are desktop-first and adapted down — tap targets too small for thumbs, product images that take 6 seconds to load on 4G, Add-to-Cart buttons buried below the fold, and a UPI checkout that requires three redirects before the payment screen. FactoryJet builds Shopify themes mobile-first — designed at 375px before desktop, Lighthouse 90+ on mobile, and Razorpay Turbo for one-tap UPI.',
            },
            {
              icon: '🧾',
              title: 'Razorpay, GST, and Shiprocket — most Shopify agencies do not set these up correctly.',
              body: 'Payment redirects, missing GST invoices, incorrect shipping rate calculations, and WhatsApp notifications that never reach customers — these are standard in Shopify stores set up by generalist agencies. FactoryJet configures every integration properly: Razorpay Turbo checkout, GST-compliant invoices at order placement, Shiprocket with automated AWB generation and NDR workflows, and WhatsApp order notifications via Interakt. Everything tested end-to-end before launch.',
            },
            {
              icon: '💸',
              title: 'Indian Shopify agencies charge ₹2–8 lakhs and deliver a theme installation.',
              body: 'A mid-tier Indian digital agency charges ₹2,00,000–₹8,00,000 for Shopify development — and typically delivers a Shopify theme with the logo and colours customised. FactoryJet builds a genuinely custom Figma-designed Liquid theme, properly wired to Razorpay, Shiprocket, GST invoicing, and WhatsApp — at 50–60% less. Because our team is specialised and lean, not overhead-heavy.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Store Audit to Live Shopify Store in 5 Stages"
          lead="Platform plan confirmed before design. Mobile approval before Liquid. Payment + logistics testing before launch."
          stages={IN_SHOPIFY_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 TO 70 DAYS · RAZORPAY + UPI + GST STANDARD · ZERO DOWNTIME LAUNCH DAY"
        />

        {/* ── 7. TECH STACK ────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR SHOPIFY TECH STACK"
          headline="Shopify Liquid Built for Indian Consumers — Not Adapted from US Templates"
          lead="Every tool we use is chosen for performance on Indian mobile networks, compatibility with Indian payment methods, and compliance with Indian GST regulations."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Shopify Liquid', 'Figma', 'Razorpay API', 'Shiprocket API', 'Interakt', 'Klaviyo', 'ReCharge', 'Cloudflare CDN'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                      style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify Liquid + Figma</strong> — Every
                store starts as a Figma design at 375px (mobile) and 1440px (desktop). The Liquid theme
                matches the Figma exactly. Custom sections are built so your team can edit content from
                the Shopify theme editor without touching code.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Razorpay + UPI integration</strong> — We
                implement Razorpay Turbo for one-tap UPI checkout, eliminating the 3–4 redirect steps
                that cause 20% cart drop-off. Full coverage: UPI, cards, net banking, EMI, Paytm,
                PhonePe, Mobikwik, LazyPay, and Simpl.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shiprocket + Delhivery</strong> — Real-time
                shipping rate calculation at checkout, automated AWB generation, tracking pushed to
                customers via WhatsApp and SMS, automated NDR (non-delivery) workflows, and returns
                portal.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WhatsApp Commerce (Interakt / Wati)</strong>{' '}
                — Order confirmations, dispatch notifications, abandoned cart recovery, and post-delivery
                review requests — all via WhatsApp, where Indian consumers actually respond.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">GST Compliance</strong> — Auto-generated
                GST invoices at order placement, GSTIN capture at checkout for B2B buyers, HSN code
                mapping, and GSTR-1 compatible export.
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
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Shopify Tech Stack — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Storefront', tools: 'Shopify Liquid, Hydrogen (headless)' },
                  { category: 'Design', tools: 'Figma, custom Liquid section builder' },
                  { category: 'Payments', tools: 'Razorpay, PayU, UPI, EMI, BNPL' },
                  { category: 'Logistics', tools: 'Shiprocket, Delhivery, Dunzo' },
                  { category: 'WhatsApp', tools: 'Interakt, Wati, AiSensy' },
                  { category: 'Email & SMS', tools: 'Klaviyo, WebEngage, MSG91' },
                  { category: 'Analytics', tools: 'GA4, Meta Pixel, CleverTap' },
                ].map((item) => (
                  <div
                    key={item.category}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]"
                        aria-hidden="true"
                      />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">
                      {item.tools}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Built for India. Full code ownership. Zero lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ────────────────────────────────────────────────── */}
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
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {IN_SHOPIFY_STATS.map((stat) => (
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
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '5 / 3' }}
              >
                <Image
                  src="/images/services/card-ecommerce.webp"
                  alt="FactoryJet team launching a custom Shopify store for an Indian D2C brand"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. INDIA SHOPIFY MARKET ──────────────────────────────────────── */}
        <CityContextSection
          eyebrow="SHOPIFY IN INDIA"
          headline="India Has 1.2 Million+ Shopify Stores. Most Convert Below 1%. Yours Doesn't Have To."
          leadParagraphs={[
            "Shopify powers over 2.85 million stores globally — and India is one of its fastest-growing markets. Indian D2C brands on Shopify collectively process billions of rupees in monthly GMV across fashion, beauty, food, electronics, and home categories. The brands capturing the highest share of that growth are not the largest ones. They are the brands with fast, properly optimised Shopify stores that convert mobile traffic efficiently, use Razorpay Turbo for frictionless UPI checkout, and recover abandoned carts via WhatsApp.",
            "FactoryJet has built Shopify stores for brands in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Surat, Jaipur, and Kolkata — across D2C fashion, D2C health and wellness, B2B wholesale portals, food and gifting stores, and quick-commerce Shopify frontends. We understand what an Indian DTC brand at ₹10 lakh to ₹10 crore monthly GMV needs from a Shopify store.",
            "The brands we build for have usually done the math. At 0.8% conversion (generic theme) on 5,000 monthly visitors with a ₹1,800 AOV: ₹72,000/month. At 2.4% (custom FactoryJet theme): ₹2,16,000/month. The ₹1,44,000 monthly difference pays for the ₹1,00,000 full store build in under 21 days. That is the ROI case for a custom Shopify build over a generic theme — and it is the same calculation every time.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A custom Shopify theme is not a design expense. It is a revenue investment with a
                  measurable 30-day payback.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: 'Mumbai', slug: 'mumbai' },
                  { label: 'Delhi', slug: 'delhi' },
                  { label: 'Bangalore', slug: 'bangalore' },
                  { label: 'Hyderabad', slug: 'hyderabad' },
                  { label: 'Chennai', slug: 'chennai' },
                  { label: 'Pune', slug: 'pune' },
                  { label: 'Ahmedabad', slug: 'ahmedabad' },
                  { label: 'Surat', slug: 'surat' },
                  { label: 'Jaipur', slug: 'jaipur' },
                  { label: 'Kolkata', slug: 'kolkata' },
                  { label: 'Lucknow', slug: 'lucknow' },
                  { label: 'Chandigarh', slug: 'chandigarh' },
                  { label: 'Kochi', slug: 'kochi' },
                ].map(({ label, slug }) => (
                  <a
                    key={slug}
                    href={`/services/shopify-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </>
          }
          stats={IN_SHOPIFY_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indian Shopify Agency vs. Freelancer vs. Theme Store"
          lead="Not all Shopify development options deliver the same output. Here's the honest comparison."
          pullQuote={{
            stat: '₹50,000',
            caption:
              'starting price — same Figma-first design, Liquid engineering, Razorpay + UPI integration, and Lighthouse audit as a ₹3,00,000 Indian agency project.',
          }}
          columns={IN_SHOPIFY_COMPARISON_COLUMNS}
          rows={IN_SHOPIFY_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Shopify Services for Indian Businesses"
          lead="From a custom Liquid theme to a headless Shopify Plus enterprise build — we scope the right engagement for your brand, catalogue, and revenue stage."
          sectors={IN_SHOPIFY_SERVICES}
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price Shopify Development"
            lead="No hourly billing. No scope creep. Every tier includes a fixed price, fixed scope, and a delivery timeline we stand behind."
            tiers={IN_SHOPIFY_PRICING_TIERS}
            footnote="All prices in INR. Shopify subscription fees ($29–$299/month) are billed directly by Shopify. Razorpay transaction fees apply per the Razorpay standard rate card. Shiprocket shipping rates are billed directly by Shiprocket. You own all code and credentials on launch day."
          />
        </div>

        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian D2C founders say after we build their Shopify store"
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Build on Shopify"
          lead="The questions we answer on every Indian Shopify discovery call — answered here, without the runaround."
          categories={IN_SHOPIFY_FAQ_CATEGORIES}
          items={IN_SHOPIFY_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="120+ Shopify stores built. We know what actually converts in India."
          lead="FactoryJet has delivered Shopify stores for Indian and global brands since 2005. We know which design decisions move the needle on Indian conversion rates — and which ones only look good in an agency proposal."
          pillars={[
            {
              icon: '🇮🇳',
              title: 'Built for India — Razorpay Turbo, WhatsApp, GST, 4G performance.',
              body: 'Most Shopify agencies build stores from global templates and adapt for India. FactoryJet builds India-first: Razorpay Turbo one-tap UPI checkout, WhatsApp abandoned cart recovery (3× better than email), GST-compliant invoicing, WebP images on Cloudflare CDN for 4G load speeds, and thumb-friendly mobile UX designed at 375px before desktop. Every Shopify store we build is optimised for how Indian consumers actually shop.',
            },
            {
              icon: '📊',
              title: 'Conversion-first design backed by 120+ Shopify store builds.',
              body: 'We know from 120+ Shopify builds that sticky Add-to-Cart outperforms static, that social proof within 200px of the buy button lifts conversion by 12%, that UPI quick-pay must appear above card fields in the Razorpay widget for Indian consumers, and that product images must load under 1.5 seconds on 4G for bounce rate not to spike. We design around those data points — not around what wins a design award.',
            },
            {
              icon: '🔒',
              title: 'Your Liquid code, your GitHub, your Shopify store — on launch day.',
              body: 'The full Liquid theme codebase is delivered to your GitHub on launch day. You own every section, every metafield schema, every Razorpay and Shiprocket integration script. No FactoryJet dependency baked in. Any Shopify developer in the world can maintain and extend it. We have seen too many Indian brands locked into agencies that hold their theme code hostage — we do not build those.',
            },
          ]}
        />

        {/* ── 16. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO BUILD"
            headline="Book a Free Shopify Audit — We'll Tell You Exactly What to Fix"
            sub="In 30 minutes, we will audit your current Shopify store or business model, identify what is costing you conversion, recommend the right Shopify plan and payment stack, and give you a fixed price. No pitch. No pressure. An honest assessment from engineers who have built 120+ Shopify stores."
            primaryCta={{ label: 'Book Your Free Shopify Audit', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price. 7-day delivery. Full code ownership. Razorpay + UPI + GST standard."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
