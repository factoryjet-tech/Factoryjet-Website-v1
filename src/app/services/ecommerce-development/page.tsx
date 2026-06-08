import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { ecommerceAlternates } from '@/data/hreflangMap';
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
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development India | Custom Stores | FactoryJet',
  description:
    'High-converting Shopify, WooCommerce & custom stores for Indian businesses. Razorpay & UPI integrated. GST-compliant. 7-day Shopify delivery.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development India | Custom Online Stores | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, B2B, and quick-commerce for Indian businesses. Razorpay, UPI, GST-compliant. Starting at ₹59,999. 7-day delivery guarantee.',
    url: 'https://factoryjet.com/services/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-ecommerce.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Ecommerce Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development India | Custom Online Stores | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C and B2B e-commerce for Indian businesses. Razorpay + UPI integrated. GST-compliant.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which e-commerce platform is best for Indian businesses — Shopify, WooCommerce, or custom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Shopify is the best default for most Indian DTC and B2C brands: Razorpay, PayU, and UPI integrations work natively, it's easy to manage without technical staff, and a basic store goes live in 7 days. WooCommerce is the right choice when you're already on WordPress, need deep editorial-commerce integration (recipes, brand stories, guides), or want to keep long-term hosting costs low. Custom platforms built on Next.js or Laravel make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces — where off-the-shelf platforms hit their ceiling. FactoryJet makes this recommendation during discovery at no charge.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does e-commerce development cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's e-commerce development starts at ₹59,999 for a standard Shopify or WooCommerce store — custom-designed, Razorpay and UPI integrated, GST-compliant, and mobile-first. Advanced stores with subscription logic, B2B pricing tiers, or product configurators run ₹99,999. Custom-built D2C platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999 and are scoped after a discovery call. All prices are 50–60% lower than comparable Indian digital agencies.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an e-commerce store in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Shopify store with a custom design and standard features takes 7–14 days. A WooCommerce store with advanced product types takes 3–5 weeks. Stores with subscription logic, B2B pricing, or a product configurator take 5–8 weeks. Custom platforms, multi-vendor marketplaces, and quick-commerce apps take 8–16 weeks depending on scope and catalog size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which payment gateway should I integrate — Razorpay, PayU, or CCAvenue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Razorpay is our default recommendation for most Indian e-commerce stores — it covers UPI, cards, net banking, EMI, wallets (Paytm, PhonePe), and BNPL in a single integration, with clean API documentation and straightforward settlement cycles. PayU is a solid alternative with competitive MDR rates for high-volume merchants. CCAvenue is better for international payment acceptance. For stores targeting only UPI payments, PhonePe Business and Paytm for Business are simpler integrations. We integrate all major Indian payment gateways and test every payment flow end-to-end before launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do your e-commerce stores support GST invoicing and compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — GST compliance is built into every Indian e-commerce store we deliver. This includes: auto-generated GST invoices at order placement, GSTIN capture at checkout for B2B buyers, HSN code mapping per product, state-wise GST rate configuration, and monthly GSTR-1 export compatibility. We integrate with Tally, Zoho Books, or custom accounting exports on request. For marketplaces, we configure seller-level GSTIN handling and split invoicing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a quick-commerce or D2C app for Indian consumers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build quick-commerce platforms with real-time inventory management across dark stores, delivery partner management with live tracking, route optimization, surge pricing, and sub-30-minute delivery workflows. D2C apps (iOS + Android) are built on React Native with Razorpay checkout, WhatsApp order notifications, and personalised product recommendations. Quick-commerce MVPs typically take 12–16 weeks. We also build the dark store management system and ops dashboard as part of the same engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate Shiprocket, Delhivery, or other Indian logistics providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — shipping integrations are standard in every Indian e-commerce build. We integrate Shiprocket (multi-carrier access: Delhivery, Bluedart, XpressBees, Ekart, Shadowfax), Delhivery directly via API, Dunzo for hyperlocal, and Shadowfax for quick commerce. Integration includes: real-time rate calculation at checkout, AWB generation, tracking updates pushed to customer via SMS and WhatsApp, automated NDR workflows, and returns portal. For D2C brands on Shopify, we use the Shiprocket Shopify app; for custom platforms, we use the Shiprocket API.",
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Commerce Development Services India',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: 'E-Commerce Development',
  description:
    'Custom e-commerce development for Indian businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and quick-commerce apps. Razorpay & UPI integrated. GST-compliant. Mobile-first, Lighthouse 95+. Starting at ₹59,999.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Shopify / WooCommerce Store',
      price: '59999',
      priceCurrency: 'INR',
      description:
        'Custom-designed Shopify or WooCommerce store with Razorpay, UPI, GST invoicing, Shiprocket integration, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'Advanced E-Commerce Store',
      price: '99999',
      priceCurrency: 'INR',
      description:
        'E-commerce store with subscription logic, B2B pricing tiers, product configurator, or multi-channel inventory sync.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Platform / Marketplace',
      price: '199999',
      priceCurrency: 'INR',
      description:
        'Custom D2C platform, multi-vendor marketplace, or quick-commerce app with proprietary logic and full code ownership.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const IN_ECOMM_SERVICES = [
  {
    name: 'Shopify & Shopify Plus',
    description:
      'Custom Liquid themes, full store builds with Razorpay and UPI payment integration, GST-compliant invoicing, and Shiprocket logistics setup. The fastest path to a professional online store — live in 7 days.',
    example: 'Our most common engagement for Indian DTC brands. 120+ Shopify stores delivered.',
    linkLabel: 'See Shopify services',
    linkHref: '/services/shopify-development',
  },
  {
    name: 'WooCommerce Development',
    description:
      'Custom WooCommerce stores on WordPress with performance-optimised themes, advanced product types (subscriptions, bundles, booking), regional language support, and a CMS your team can manage without a developer.',
    example: 'Best when you need deep content-commerce integration or already run WordPress.',
    linkLabel: 'Get an Audit',
    linkHref: '/contact',
  },
  {
    name: 'Custom D2C Platforms',
    description:
      'High-performance D2C storefronts built on Next.js with Razorpay Checkout embedded, personalised product feeds, loyalty programs, and WhatsApp-native order notifications — for brands where Shopify themes hit their ceiling.',
    example: 'Recommended for D2C brands at ₹1 crore+ monthly revenue with unique product logic.',
    linkLabel: 'Explore custom builds',
    linkHref: '/contact',
  },
  {
    name: 'B2B E-Commerce Portals',
    description:
      'Wholesale and distributor portals with company accounts, tier-based pricing per dealer, net-credit terms, minimum order enforcement, purchase order uploads, and reorder pads — synced to a single inventory source.',
    example: 'B2B clients eliminate manual order entry and reduce sales team workload by 40%.',
    linkLabel: 'Plan your B2B portal',
    linkHref: '/contact',
  },
  {
    name: 'Multi-Vendor Marketplaces',
    description:
      'Custom marketplace platforms with vendor onboarding, GST-split invoicing, commission management, seller dashboards, product approval workflows, and dispute handling — built for the Indian marketplace model.',
    example: 'For brands moving from single-store retail to a platform/aggregator model.',
    linkLabel: 'Get a scoping call',
    linkHref: '/contact',
  },
  {
    name: 'Quick-Commerce & Mobile Apps',
    description:
      'React Native iOS/Android apps and quick-commerce platforms with dark store management, Delhivery/Shiprocket integration, real-time order tracking, route optimisation, and surge pricing — built for 30-minute delivery SLAs.',
    example: 'MVPs delivered in 12–16 weeks. Dark store ops dashboard included.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

const IN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute strategy session. We audit your current platform or business model, identify the right tech stack, and map the payment, logistics, and GST integrations needed before scoping a single hour of work.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Figma wireframes and high-fidelity mockups for your homepage, product pages, collection pages, and checkout flow. You approve desktop and mobile designs before any code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering in your chosen platform — Shopify Liquid, WooCommerce PHP, or custom Next.js/Laravel. Razorpay, UPI, and GST invoicing wired in. Staging store live within 48–72 hours.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Full checkout tested across Razorpay (UPI, cards, net banking, EMI, wallets), Shiprocket rate calculation, and GST invoice generation. Cross-device on iOS, Android, Chrome, and Safari. Lighthouse audit before sign-off.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'DNS transfer, SSL, Google Analytics 4, Meta Pixel, Google Search Console setup, sitemap submission, and a recorded handover. Full codebase delivered to your GitHub on launch day. 14-day support window included.',
  },
];

const IN_ECOMM_STATS = [
  {
    value: '500+',
    label: 'businesses served across India, US, UK, and UAE since 1999',
    microcopy: 'FactoryJet has been building e-commerce for 25+ years',
    categoryLabel: 'TRACK RECORD',
  },
  {
    value: '2.4×',
    label: 'average improvement in add-to-cart rate — custom build vs. generic Shopify theme',
    microcopy: 'measured across FactoryJet e-commerce builds in 2024',
    categoryLabel: 'CONVERSION LIFT',
  },
  {
    value: '50–60%',
    label: 'cheaper than a comparable Indian digital agency for the same build quality',
    microcopy: 'same Figma-first design, same platform engineering, lower overhead',
    categoryLabel: 'COST ADVANTAGE',
  },
];

const IN_MARKET_STATS = [
  {
    value: '₹12.5L Cr',
    label: "India's projected e-commerce market by 2030 — growing at 23% annually",
    sourceUrl: 'https://www.ibef.org/industry/ecommerce',
    sourceLabel: 'India Brand Equity Foundation',
  },
  {
    value: '65%',
    label: 'of Indian e-commerce transactions happen on mobile — highest share globally',
    sourceUrl: 'https://www.redseer.com/reports',
    sourceLabel: 'RedSeer Strategy Consultants',
  },
  {
    value: '₹2,000 Cr+',
    label: "daily UPI transaction volume — India's payment ecosystem is built for e-commerce",
    sourceUrl: 'https://www.npci.org.in/statistics',
    sourceLabel: 'NPCI Monthly Statistics',
  },
];

const IN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indian Digital Agency' },
  { label: 'Freelancer' },
  { label: 'DIY (Wix/Shopify Basic)' },
] as const;

const IN_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '₹59,999',
      '₹2,00,000–₹10,00,000',
      '₹50,000–₹1,50,000',
      '₹0 + ₹2,000–₹8,000/month',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['7–14 days (Shopify)', '8–24 weeks', '6–16 weeks (unreliable)', '1–2 weeks (DIY effort)'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Razorpay + UPI + EMI integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'GST-compliant invoicing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Shiprocket / Delhivery integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance on delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership (your GitHub)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
];

const IN_PRICING_TIERS = [
  {
    name: 'Starter Store',
    priceRange: '',
    description:
      'A professionally designed Shopify or WooCommerce store — ready to sell on launch day. The right starting point for D2C brands and retailers going online for the first time.',
    features: [
      'Platform of your choice: Shopify or WooCommerce',
      'Custom Figma design — homepage, PDP, collections, cart',
      'Razorpay / PayU integration: UPI, cards, net banking, wallets',
      'GST-compliant auto-invoicing at checkout',
      'Shiprocket integration with real-time shipping rates',
      'Up to 50 products imported and configured',
      'WhatsApp order notifications via Interakt or Wati',
      'Technical SEO: schema markup, sitemaps, meta tags',
      'Google Analytics 4 + Search Console setup',
    ],
    cta: { label: 'Book a Store Audit', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Growth Store',
    priceRange: '',
    description:
      'A full-featured store with subscription logic, B2B pricing, a product configurator, or multi-channel inventory sync — for brands with more complex selling models.',
    features: [
      'Everything in Starter Store, plus:',
      'Subscription products (recurring orders, auto-renewal)',
      'B2B wholesale portal with tiered dealer pricing',
      'Product configurator or bundle builder',
      'Advanced WhatsApp automation (abandoned cart, win-back)',
      'Multi-channel inventory sync (Amazon, Flipkart, or 3PL)',
      'Reviews platform integration (Stamped, Okendo, or Judge.me)',
      'Post-purchase upsell flow and loyalty points setup',
      '30-day post-launch support window',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Custom Platform',
    priceRange: '',
    description:
      'A custom-built D2C platform, multi-vendor marketplace, or quick-commerce app — for businesses where Shopify and WooCommerce hit their ceiling.',
    features: [
      'Custom Next.js / React Native frontend',
      'Custom commerce backend or Shopify headless API',
      'Sub-1-second page loads (streaming SSR + edge caching)',
      'Multi-vendor marketplace with commission & payout logic',
      'Quick-commerce: dark store management + route optimisation',
      'ERP / Tally / Zoho Books integration',
      'Regional language support (Hindi, Tamil, Bengali + more)',
      'Dedicated engineering point of contact throughout',
      '90-day post-launch support and iteration',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true as const, region: 'in' as const },
  },
] as const;

const IN_FAQ_CATEGORIES = [
  { key: 'platform',   label: 'Platform Selection' },
  { key: 'pricing',    label: 'Pricing & Timeline' },
  { key: 'india',      label: 'India-Specific' },
  { key: 'technical',  label: 'Technical & SEO' },
  { key: 'migration',  label: 'Migrations' },
  { key: 'trust',      label: 'Working With Us' },
];

const IN_FAQ_ITEMS = [

  /* ── Platform Selection ── */
  {
    category: 'platform',
    question: 'Which e-commerce platform is best for an Indian business — Shopify, WooCommerce, or custom?',
    answer:
      "Shopify is the best default for most Indian DTC and B2C brands — Razorpay, PayU, and UPI work natively, inventory management is clean, and a standard store goes live in 7 days. WooCommerce is the right call when you're already running WordPress, need deep editorial-commerce integration (brand stories, recipes, guides), or want to avoid Shopify's monthly subscription cost long-term. Custom platforms on Next.js or Laravel make sense when you need proprietary pricing logic, a multi-vendor marketplace, or a quick-commerce system — where off-the-shelf platforms hit their technical ceiling. We make this recommendation during discovery at no charge.",
  },
  {
    category: 'platform',
    question: 'Should I sell on my own website or on Amazon/Flipkart?',
    answer:
      "Both, eventually — but own your store first. Marketplaces (Amazon, Flipkart, Meesho) give you traffic but take 15–40% commission, control your customer relationship, and can delist you without notice. Your own store gives you full margin, customer data, repeat purchase capability via WhatsApp and email, and brand equity. The optimal model: use marketplaces for acquisition, bring customers to your own store for retention. FactoryJet builds stores specifically designed for this strategy — with post-purchase WhatsApp flows and loyalty programs that pull marketplace customers back to your direct channel.",
  },
  {
    category: 'platform',
    question: 'Can you build a multi-vendor marketplace for the Indian market?',
    answer:
      'Yes — Indian marketplace development is one of our specialisations. We build custom platforms with vendor onboarding flows, GSTIN verification, GST-split invoicing (seller-wise), commission management with automated Razorpay payouts, seller dashboards, product approval workflows, and dispute handling. These are fully custom Next.js builds — Shopify and WooCommerce are not architected for true multi-vendor marketplaces at scale, so we do not force them into that shape.',
  },
  {
    category: 'platform',
    question: 'Can you build a subscription-based D2C store for Indian consumers?',
    answer:
      'Yes — subscription e-commerce is one of the highest-ROI models for Indian D2C brands. We implement subscription logic for monthly boxes (beauty, food, wellness), consumable replenishment (coffee, supplements, pet care), and auto-renewal plans. For Shopify we use ReCharge or Appstle Subscriptions. For WooCommerce we use WooCommerce Subscriptions. For custom platforms we build the subscription engine natively. We configure WhatsApp pause/skip/cancel flows designed to reduce churn — because Indian consumers prefer WhatsApp over email for subscription management.',
  },

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does e-commerce development cost in India?',
    answer:
      "FactoryJet's e-commerce development starts at ₹59,999 for a Shopify or WooCommerce store — custom-designed in Figma, Razorpay and UPI integrated, GST-compliant invoicing, Shiprocket shipping, and a full product catalogue import. Advanced stores with subscription logic, B2B pricing, or product configurators run ₹99,999. Custom platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999 and are scoped after a discovery call. All prices are 50–60% lower than comparable Indian digital agencies for the same output quality.",
  },
  {
    category: 'pricing',
    question: 'How long does an e-commerce build take?',
    answer:
      'A Shopify store with a custom design and standard features takes 7–14 days. A WooCommerce store with advanced product types takes 3–5 weeks. Stores with subscription logic, B2B pricing, or a product configurator take 5–8 weeks. Custom platforms, multi-vendor marketplaces, and quick-commerce apps take 8–16 weeks depending on scope, catalogue size, and integration complexity.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than other Indian e-commerce agencies?',
    answer:
      "We are a specialised e-commerce engineering team — not a full-service agency with account management layers, large offices, or generalist developers. The same Figma-first design process, the same platform engineering quality, the same Lighthouse audit before handover — at dramatically lower overhead. We have been building e-commerce for Indian and global clients since 1999. You're paying for the build, not our admin structure.",
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Which payment gateway should I use — Razorpay, PayU, or CCAvenue?',
    answer:
      'Razorpay is our default recommendation for most Indian stores — it covers UPI, cards, net banking, EMI, wallets (Paytm, PhonePe, Mobikwik), BNPL (LazyPay, Simpl), and international cards in a single integration. Settlement is T+2 and the dashboard is excellent. PayU is a strong alternative with competitive MDR for high-volume merchants. CCAvenue is better if you need international payment acceptance alongside Indian methods. For stores targeting only UPI, PhonePe for Business is simpler. We integrate any of these and test every payment method end-to-end before launch.',
  },
  {
    category: 'india',
    question: 'Do your stores support GST invoicing and compliance?',
    answer:
      'Yes — GST compliance is built into every Indian e-commerce store we deliver. This includes auto-generated GST invoices at order placement, GSTIN capture at checkout for B2B buyers, HSN code mapping per product category, state-wise IGST/CGST/SGST rate configuration, and monthly GSTR-1 export compatibility. We integrate with Tally, Zoho Books, or custom accounting exports on request. For multi-vendor marketplaces, we configure seller-level GSTIN handling and split invoicing.',
  },
  {
    category: 'india',
    question: 'Which logistics partner should I use — Shiprocket, Delhivery, or Dunzo?',
    answer:
      'Shiprocket is our default recommendation for most Indian e-commerce stores — it gives you access to Delhivery, Bluedart, XpressBees, Ekart, Shadowfax, and more under one integration, with automated NDR workflows, returns management, and weight dispute resolution. Delhivery directly via API is better for high-volume brands (10,000+ shipments/month) needing custom SLAs. Dunzo and Shadowfax are right for hyperlocal same-day delivery. We integrate any of these, wire up real-time rate calculation at checkout, and set up tracking updates via WhatsApp and SMS.',
  },
  {
    category: 'india',
    question: 'Can you add regional language support (Hindi, Tamil, Bengali) to my store?',
    answer:
      'Yes — multi-language support is available for all platforms we build on. For Shopify, we use the Translate & Adapt app or Langify for regional language storefronts. For WooCommerce, we implement WPML or TranslatePress. For custom platforms, we build the i18n layer natively. Language-switched URLs follow SEO-safe hreflang patterns. We have translated stores in Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati. Automatic translation is available via DeepL or Google Translate APIs for product descriptions at scale.',
  },
  {
    category: 'india',
    question: 'Can you build a quick-commerce or dark store management system?',
    answer:
      'Yes — quick commerce is a growing part of our India work. We build quick-commerce platforms with real-time inventory across dark stores, delivery partner management and live tracking, route optimisation, surge pricing, and sub-30-minute delivery workflows. D2C mobile apps (iOS + Android) are built on React Native with Razorpay checkout, WhatsApp order notifications, and personalised recommendations. Quick-commerce MVPs typically take 12–16 weeks. The dark store ops dashboard and rider management interface are included in the same project scope.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'What SEO comes included with an e-commerce build?',
    answer:
      'Every Indian e-commerce store we build includes technical SEO as standard: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title tags and meta descriptions for product and collection page templates, canonical URLs to prevent duplicate content issues (common on Shopify and WooCommerce by default), compressed images with descriptive alt text, XML sitemap submitted to Google Search Console, and Core Web Vitals optimisation (LCP under 2.5s, CLS below 0.1). Local SEO schema for Indian city targeting is available as an add-on.',
  },
  {
    category: 'technical',
    question: 'How do you optimise e-commerce stores for Indian mobile users?',
    answer:
      'India has 65% mobile commerce share and a significant percentage of users on 4G networks with slower data speeds than urban 5G. FactoryJet optimises for this: mobile-first layout designed at 375px before desktop, Lighthouse 90+ on mobile before delivery, images served in WebP via CDN, lazy loading for below-fold product images, one-tap UPI and Razorpay Turbo checkout to eliminate card-entry friction, and WhatsApp-native CTAs for Indian consumers who prefer WhatsApp over email. Every store passes Core Web Vitals green on mobile before launch.',
  },
  {
    category: 'technical',
    question: 'Can you integrate my store with my ERP, Tally, or accounting software?',
    answer:
      'Yes. Common integrations include: Tally ERP 9 and Tally Prime (via API bridge), Zoho Books and Zoho Inventory, QuickBooks, ERPNext, SAP B1, Unicommerce (for multi-channel inventory), Increff (warehouse management), and Delhivery WISMO for logistics tracking. If your system has an API or webhooks, we can connect to it. For Tally, we use either the Tally ODBC connector or a custom sync bridge depending on your network setup.',
  },
  {
    category: 'technical',
    question: 'Will my e-commerce store rank on Google India?',
    answer:
      'Every store we build is optimised for Google India search from day one: Product schema markup for Google Shopping eligibility, product and collection page title templates with Indian search intent (e.g. "buy [product] online India"), BreadcrumbList schema for category signals, image alt text with regional context, GST price display for Indian search compliance, Core Web Vitals green on mobile, and sitemap submission to Google Search Console. Content SEO — collection page copy targeting high-volume Indian keywords — is available as a separate add-on.',
  },

  /* ── Migrations ── */
  {
    category: 'migration',
    question: 'Can you migrate my existing store to a new platform?',
    answer:
      'Yes — platform migrations are common in our India work. We migrate products (including variants, metafields, and images), customers, order history, and reviews. We map your existing URL structure and implement 301 redirects for every changed URL before DNS switch. We have migrated stores from WooCommerce, Magento, OpenCart, Wix, Squarespace, custom PHP, and legacy Indian platforms to Shopify and Next.js. Zero-downtime launch day is standard — DNS switches after the staging store is fully validated.',
  },
  {
    category: 'migration',
    question: 'Will my Google rankings survive a platform migration?',
    answer:
      'Yes — if done correctly. Before any migration, we audit your existing URL structure, identify which product and category pages carry rankings worth protecting, and build a complete redirect map before touching DNS. Every changed URL gets a 301 redirect. We submit the new sitemap to Google Search Console on launch day and monitor organic traffic for 30 days post-launch. Most clients see rankings fully recover within 6–8 weeks. Indian e-commerce stores with regional keywords typically recover faster than global markets.',
  },

  /* ── Working With Us ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from an Indian digital agency?',
    answer:
      'Three things: specialisation (we build e-commerce exclusively — no generic web design projects, no social media management, no SEO retainers), ownership (full codebase delivered to your GitHub on launch day, no lock-in), and honesty (we will tell you when a ₹59,999 Shopify store fits better than a ₹1,99,999 custom build). We have delivered 500+ projects for Indian and global businesses. We know what actually drives Indian e-commerce revenue — and what looks good in an agency proposal but does not move the needle.',
  },
  {
    category: 'trust',
    question: 'Do I own the code after the project is done?',
    answer:
      'Yes — 100%. The full codebase is delivered to your GitHub repository on launch day. You own every file, every integration, and all API credentials. No proprietary builder holding your store hostage. No FactoryJet retainer required to keep your store running. Any developer — ours or someone you hire later — can maintain and extend it. This is non-negotiable for us — we have seen too many Indian businesses trapped in agency-hosted setups with no exit.',
  },
  {
    category: 'trust',
    question: 'What ongoing support does FactoryJet offer after launch?',
    answer:
      'Every e-commerce project includes a 14–30 day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly retainer plans from ₹9,999/month: up to 4 hours of development, priority same-day bug response, and a dedicated engineer who knows your codebase. Retainer clients get quarterly performance reviews, pre-built festival campaign assets (Diwali, Holi, Independence Day), and priority scheduling for new feature work.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development',
};

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <Script
        id="in-ecommerce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="in-ecommerce-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'E-Commerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="E-COMMERCE DEVELOPMENT · INDIA"
          headline="An Online Store That Sells — On Any Platform, at Any Scale"
          lead="Most Indian e-commerce stores are built on generic themes and convert below 1%. FactoryJet builds custom Shopify, WooCommerce, D2C, and B2B stores — Razorpay and UPI integrated, GST-compliant, Lighthouse 95+ — from ₹59,999."
          primaryCta={{ label: 'Book a Store Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'Razorpay + UPI + GST',
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
                Same traffic. Better store. The math is clear.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Monthly visitors', value: '5,000' },
                  { label: 'Average order value', value: '₹1,500' },
                  { label: 'Generic theme (1% conv.)', value: '₹75,000/mo' },
                  { label: 'Custom store (2.4% conv.)', value: '₹1,80,000/mo' },
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
                    +₹1,05,000/month from the same traffic. A custom store pays for itself in 45 days.
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
          headline="500+ businesses served. 25 years of e-commerce. Indian brands trust the results."
        />

        {/* ── 4. E-COMMERCE EXPLAINED ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="E-COMMERCE EXPLAINED"
          headline="What Separates a Store That Sells from One That Doesn't"
          lead="Most Indian e-commerce stores aren't failing because their product is wrong. They're failing because their store is slow, hard to use on mobile, and built to look good rather than convert."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Shopify',
                  'WooCommerce',
                  'Next.js Commerce',
                  'Razorpay',
                  'UPI',
                  'Shiprocket',
                  'WhatsApp Commerce',
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
                The average Indian e-commerce store converts at 0.8–1.2%. The top quartile converts at
                3–5%. The difference is not product quality — it is the store. Slow load times on 4G
                networks, UPI checkout that requires too many steps, product pages that bury the
                &quot;buy now&quot; button below four paragraphs of description, and a mobile layout
                designed for a 13-inch screen. These are engineering and design problems, not marketing
                problems.
              </p>

              {/* Key India e-commerce metrics */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.9%', label: 'India avg. e-comm conv. rate' },
                  { value: '65%', label: 'e-commerce via mobile India' },
                  { value: '72%', label: 'carts abandoned before checkout' },
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
                  A great e-commerce store is an engineering project measured in revenue — not a design
                  project measured in compliments.
                </p>
              </div>

              <p>
                FactoryJet designs every store around Indian consumer behaviour: where the UPI button
                goes, when the WhatsApp chat trigger appears, how the mobile PDP stacks on a 375px
                screen, what trust signals appear above the fold, and how the EMI option is surfaced at
                checkout. We have built 120+ Shopify stores and hundreds of WooCommerce and custom
                builds. The data from those builds informs every decision we make on the next one.
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
                  Platform Comparison — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'Shopify', best: 'DTC brands, subscriptions, fast launch', starting: '₹59,999' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce', starting: '₹59,999' },
                  { platform: 'BigCommerce', best: 'B2B, mid-market, multi-channel', starting: '₹99,999' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, custom checkout', starting: '₹1,99,999' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX', starting: '₹1,99,999' },
                  { platform: 'Multi-Vendor Marketplace', best: 'Platform model, aggregator', starting: '₹5,00,000' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.platform}
                      </p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#F05A28]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.starting}
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
                  We recommend the right platform. Not the most expensive one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your store has traffic. The conversion rate is where revenue goes to die."
          lead="72% of Indian shopping carts are abandoned before checkout. Most of those abandonments are fixable — with faster mobile load times, frictionless UPI checkout, and a store designed for the 375px screen your customers actually use."
          pillars={[
            {
              icon: '📱',
              title: "India's e-commerce is mobile-first. Most stores aren't.",
              body: 'Over 65% of Indian e-commerce traffic arrives on mobile — but most stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. Tap targets too small for thumbs. Product images that take 8 seconds to load on 4G. Checkout flows with 7 steps where 3 would do.',
            },
            {
              icon: '💳',
              title: 'UPI has 87% of India\'s payment volume. Most stores do it wrong.',
              body: 'UPI is India\'s dominant payment method — but how it\'s implemented in checkout determines whether customers complete the purchase. Poor implementations (third-party redirects, slow QR code generation, no UPI app deep-linking) create friction at the exact moment of maximum intent. FactoryJet implements Razorpay Turbo — a one-tap UPI flow that eliminates the 3–4 redirect steps that kill mobile conversions.',
            },
            {
              icon: '💸',
              title: 'Indian agencies charge ₹2–10 lakhs for what should cost ₹59,999.',
              body: 'A mid-tier Indian digital agency charges ₹2,00,000–₹10,00,000 for a custom e-commerce build — and delivers a Shopify theme with logo colours changed. FactoryJet delivers a genuinely custom Figma-designed store, properly integrated with Razorpay, Shiprocket, and GST invoicing, at 50–60% less — because our structure is specialised and lean, not overhead-heavy.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 5 Stages"
          lead="Platform recommendation before we scope. Design approval before we build. Full payment and logistics testing before we launch."
          stages={IN_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS TO 16 WEEKS · PLATFORM-AGNOSTIC · ZERO DOWNTIME LAUNCH DAY"
        />

        {/* ── 7. OUR TECH STACK ─────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR TECH STACK"
          headline="Platform-Agnostic Engineering — We Use What Fits Your Business"
          lead="We don't have a preferred platform vendor. We have a standard of build quality that applies regardless of which platform you're on."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Next.js', 'Shopify Liquid', 'WooCommerce', 'React Native', 'Razorpay API', 'Shiprocket API', 'Firebase', 'Figma'].map(
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
                <strong className="font-semibold text-fj-ink">Shopify / Shopify Plus</strong> — Custom
                Liquid themes with Razorpay, PayU, and UPI integrated. Checkout Extensibility for Shopify
                Plus clients. GST-compliant invoice metaobjects built into every store.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WooCommerce on WordPress</strong> — Custom
                themes with Gutenberg blocks, WooCommerce Subscriptions, Bookings, and Product Bundles.
                Razorpay for WooCommerce integrated with GST invoice generation via Zoho or Tally bridge.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Next.js + Headless Commerce</strong> — For
                D2C brands that need sub-1-second page loads on Indian 4G networks. We connect Next.js to
                Shopify, BigCommerce, or a custom commerce API with edge caching on Cloudflare.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">React Native (iOS + Android)</strong> — For
                quick-commerce and D2C apps. Razorpay Checkout SDK embedded. WhatsApp notification hooks
                via Interakt or Wati. Push notifications for abandoned cart recovery.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Razorpay, Shiprocket, Unicommerce</strong>{' '}
                — Payment, logistics, and inventory infrastructure that integrates cleanly into any
                platform we build on.
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
                  E-Commerce Tech Stack — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Storefronts', tools: 'Shopify Liquid, WooCommerce, Next.js' },
                  { category: 'Design', tools: 'Figma, custom component systems' },
                  { category: 'Payments', tools: 'Razorpay, PayU, CCAvenue, UPI' },
                  { category: 'Logistics', tools: 'Shiprocket, Delhivery, Dunzo, Shadowfax' },
                  { category: 'WhatsApp', tools: 'Interakt, Wati, AiSensy' },
                  { category: 'Email & SMS', tools: 'Klaviyo, WebEngage, MSG91' },
                  { category: 'Analytics', tools: 'GA4, Meta Pixel, CleverTap, MoEngage' },
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
                  Full stack. Code ownership. Zero lock-in.
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

              {/* Stats */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {IN_ECOMM_STATS.map((stat) => (
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
                        fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-2 font-fj-body font-semibold text-fj-ink"
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
                  src="/images/services/card-ecommerce.webp"
                  alt="FactoryJet team reviewing a newly launched Indian e-commerce store with a client"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. INDIA MARKET CONTEXT ──────────────────────────────────────── */}
        <CityContextSection
          eyebrow="INDIA'S DIGITAL COMMERCE MARKET"
          headline="India's E-Commerce Market Is ₹12.5 Lakh Crore by 2030. Most Businesses Capture Almost None of It."
          leadParagraphs={[
            "India's e-commerce market is growing at 23% annually and is projected to reach $150 billion (₹12.5 lakh crore) by 2030. The businesses capturing the majority of that growth are not Flipkart or Meesho. They are the D2C brands, B2B distributors, and regional retailers who built fast, well-designed stores that convert India's mobile-first consumers — while the competition is still selling entirely through marketplaces at 30% commission.",
            "FactoryJet has built e-commerce stores for businesses in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Surat, Jaipur, and Kolkata. We understand what an Indian SME needs: not enterprise complexity, but a professional store that loads fast on 4G, accepts UPI in one tap, generates GST invoices automatically, and integrates with Shiprocket for same-day dispatch.",
            "The businesses we build for have usually done the math. A DTC brand with 5,000 monthly visitors and a ₹1,500 average order value generates ₹75,000/month at 1% conversion on a generic theme. At 2.4% — what a properly optimised custom store delivers — that is ₹1,80,000/month. The ₹1,05,000 monthly difference pays for the build in under 45 days.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The best ROI in Indian e-commerce is a better store — not a bigger ad budget.
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
                    href={`/services/ecommerce-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </>
          }
          stats={IN_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indian Agency vs. Freelancer vs. DIY Platforms"
          lead="Not all e-commerce development options deliver the same output. Here's the honest comparison."
          pullQuote={{
            stat: '₹59,999',
            caption:
              'starting price — same Figma design, Razorpay integration, GST compliance, and Lighthouse performance as a ₹5,00,000 Indian agency project.',
          }}
          columns={IN_COMPARISON_COLUMNS}
          rows={IN_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six E-Commerce Services for Indian Businesses"
          lead="From a Shopify launch to a custom quick-commerce platform — we scope the right engagement for your business model, platform, and growth stage."
          sectors={IN_ECOMM_SERVICES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after we build their e-commerce store"
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every Indian e-commerce discovery call — answered here, without the runaround."
          categories={IN_FAQ_CATEGORIES}
          items={IN_FAQ_ITEMS}
        />

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book an E-Commerce Audit — No Obligation"
            sub="In 30 minutes, we will audit your current store or business model, identify what is costing you revenue, recommend the right platform and payment stack, and give you a fixed price. No pitch. No pressure. An honest assessment from engineers who have built e-commerce for 25+ years."
            primaryCta={{ label: 'Book Your Audit', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price. Full code ownership. Razorpay + UPI + GST built in. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
