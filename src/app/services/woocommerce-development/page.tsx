import type { Metadata } from 'next';
import Link from 'next/link';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { woocommerceDevelopmentAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ----------------------------------------------------------------------------─
   SEO / Metadata
   Primary:   "woocommerce developer" (1,000/mo)
              "woocommerce development" (590/mo)
              "woocommerce development services" (390/mo)
   Secondary: "woocommerce developer for hire" · "woocommerce custom development"
              "woocommerce plugin development" · "woocommerce store development"
              "woocommerce expert" · "hire woocommerce developer"
--------------------------------------------------------------------------─-- */

export const metadata: Metadata = {
  title: 'WooCommerce Development Agency USA | FactoryJet',
  description:
    'Hire expert US WooCommerce developers. Custom store builds, plugins, integrations, and performance optimization. Fixed-price, milestone-paid.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WooCommerce Development Agency USA | Hire WooCommerce Developers | FactoryJet',
    description:
      'Hire senior WooCommerce developers & experts. Custom store builds, store design, plugin development & integrations for US businesses. Fixed-price.',
    url: 'https://factoryjet.com/services/woocommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'WooCommerce Development Services: FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce Development Agency USA | Hire WooCommerce Developers | FactoryJet',
    description:
      'Hire WooCommerce developers & experts, custom stores, design, plugins & integrations. Fixed-price projects.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/woocommerce-development',
    languages: woocommerceDevelopmentAlternates,
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

/* ----------------------------------------------------------------------------─
   JSON-LD Schemas, FAQPage · Service · BreadcrumbList
--------------------------------------------------------------------------─-- */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/woocommerce-development#webpage',
  url: 'https://factoryjet.com/services/woocommerce-development',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Development Services',
  description:
    'Custom WooCommerce store development, plugin development, theme customization, and integrations for US e-commerce businesses. Fixed-price projects, senior developers.',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '2014',
    areaServed: 'US',
    
  },
  serviceType: 'WooCommerce Development',
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'WooCommerce Development', url: 'https://factoryjet.com/services/woocommerce-development' },
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

/* ----------------------------------------------------------------------------─
   Section Data
--------------------------------------------------------------------------─-- */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'A 30-minute call to review your store requirements. We discuss catalog size, third-party integrations, and revenue goals. You receive a fixed-price proposal before committing.',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'We design the theme and user experience first. You approve wireframes and design before coding begins. For plugin development, we document data models and hook architecture up front. This prevents surprises mid-build.',
  },
  {
    number: '03',
    title: 'Development & Integration',
    description:
      'Senior developers build your store on a private staging server. We integrate payment gateways and shipping APIs. We build custom checkout flows and test every integration in isolation.',
  },
  {
    number: '04',
    title: 'QA & Performance Testing',
    description:
      'We test every checkout step on desktop and mobile. We test edge cases like variable products, backorders, and partial fulfillment. We run Core Web Vitals audits before launch clearance.',
  },
  {
    number: '05',
    title: 'Launch + 30-Day Support',
    description:
      'We deploy to production and verify live payment processing. We monitor server logs and orders for 48 hours. Every build includes 30 days of direct developer support. You reach the team that built your store directly.',
  },
];

const STATS = [
  {
    value: 'Fixed Price',
    label: 'scoped and quoted upfront for a custom WooCommerce store.',
    microcopy: 'custom theme, your product catalog, full integrations.',
    categoryLabel: 'PRICING.',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid WooCommerce builds with full code ownership.',
    microcopy: 'senior developers on every project, no scope-creep invoices.',
    categoryLabel: 'PRICING MODEL.',
  },
  {
    value: '25+',
    label: 'years of WordPress and WooCommerce development.',
    microcopy: '500+ e-commerce projects delivered for US businesses.',
    categoryLabel: 'EXPERIENCE.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Freelancer' },
  { label: 'Traditional Agency' },
  { label: 'Budget Dev Shop' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Senior WooCommerce developers.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price proposals.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Custom theme design (not a template).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Core Web Vitals / performance optimization.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Payment & shipping integrations.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: '30-day post-launch support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'fixed price, confirmed before any work starts.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Full code ownership, no lock-in.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'WooCommerce hooks/filters (no core edits).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Custom Store',
    priceRange: 'Get a quote',
    description:
      'A WooCommerce store built on a custom theme. We do not use generic templates. We design for your products and customers. We configure servers for speed and high order volume.',
    features: [
      'Custom theme design, not a premium template.',
      'Your product catalog configured and uploaded.',
      'Payment gateway setup (Stripe, PayPal, Authorize.Net).',
      'Shipping carrier integration (UPS, USPS, FedEx).',
      'Mobile-first design, Core Web Vitals optimized.',
      'WooCommerce SEO, product schema, sitemaps, canonical.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Custom Plugin',
    priceRange: 'Get a quote',
    description:
      `A custom plugin built for your business. We add features that existing extensions cannot provide. We use standard hooks and filters. We never edit core WordPress files.`,
    features: [
      'Custom WooCommerce plugin architecture.',
      'Proper use of WooCommerce hooks and filters.',
      'Admin settings UI if needed.',
      'Compatibility testing across WooCommerce versions.',
      'PHPDoc inline documentation.',
      'Works with existing plugins, no conflicts.',
      'WordPress.org submission-ready if needed.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Plugin Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Complex Store',
    priceRange: 'Talk to the founder',
    description:
      'A custom store with advanced commerce workflows. We build custom checkout flows, B2B wholesale pricing, and recurring subscriptions. We connect ERP and warehouse systems for live sync.',
    features: [
      'Custom checkout flow and order management.',
      'B2B pricing rules and wholesale user roles.',
      'Subscription or membership functionality.',
      'ERP / CRM / inventory system integration.',
      'Custom product types or configurators.',
      'Advanced shipping rules and rate calculation.',
      'High-performance hosting configuration.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
  },
] as const;

/* ─-- FAQ Categories ----------------------------------------------------─-- */
const FAQ_CATEGORIES = [
  { key: 'platform',    label: 'Platform & Technology' },
  { key: 'development', label: 'Development Work' },
  { key: 'performance', label: 'Performance & SEO' },
  { key: 'cost',        label: 'Cost & Pricing' },
  { key: 'factoryjet',  label: 'Working with FactoryJet' },
];

const FAQ_ITEMS = [
  // -- Platform & Technology ----------------------------------------------
  {
    question: 'Is WooCommerce free?',
    answer: `WooCommerce core is free and open source. Your running costs come from hosting, domain registration, and any premium plugins. A basic store runs on a modest annual hosting budget. Custom store builds are fixed-price projects quoted up front. You pay hosting directly to your provider.`,
    category: 'platform',
  },
  {
    question: 'What is the difference between WooCommerce and Shopify?',
    answer: `WooCommerce runs on WordPress. You control your hosting, your customer data, and your code. There are zero platform transaction fees. Shopify is a hosted SaaS platform with lower technical maintenance. However, Shopify charges monthly subscription fees plus transaction fees. WooCommerce gives you full ownership. Shopify provides hosted simplicity.`,
    category: 'platform',
  },
  {
    question: 'What hosting does WooCommerce need?',
    answer: `WooCommerce requires dedicated server resources. We recommend at least 2GB of RAM and PHP 8.1+ with OPcache. For most stores, managed hosts like WP Engine, Kinsta, or SiteGround work well. High-volume stores benefit from VPS setups with Redis object caching. Cheap shared hosting is too slow for commerce.`,
    category: 'platform',
  },
  {
    question: 'Can WooCommerce handle subscriptions and recurring billing?',
    answer: `Yes, WooCommerce Subscriptions adds recurring billing and subscription product types. It manages customer renewals, prorated upgrades, and payment retries. It supports Stripe, PayPal, and Authorize.Net. We also build custom subscription plugins for usage-based billing and hybrid product boxes.`,
    category: 'platform',
  },
  {
    question: 'Is WooCommerce good for B2B e-commerce?',
    answer: `WooCommerce handles B2B commerce very well. Common setups include wholesale pricing tiers by user role and hidden retail prices. We build custom quote request forms and net payment terms. We also configure minimum order quantities and company accounts. We write custom code to match your exact sales rules.`,
    category: 'platform',
  },

  // -- Development Work --------------------------------------------------─
  {
    question: 'What is a WooCommerce custom plugin?',
    answer: `A custom plugin adds unique features without modifying core files. Plugins create new product types, custom checkout fields, and wholesale pricing rules. They also calculate custom shipping rates and connect external APIs. Custom plugins use official hooks and filters. They survive WordPress core updates without breaking.`,
    category: 'development',
  },
  {
    question: 'Can you integrate WooCommerce with my ERP or accounting system?',
    answer: `Yes, ERP and accounting integrations are core to our work. Common systems include QuickBooks Online, Xero, NetSuite, and Sage. Integrations sync orders from WooCommerce to your ERP. They sync inventory levels and pricing back to your store. We build direct REST API and webhook integrations.`,
    category: 'development',
  },
  {
    question: 'Can you customize the WooCommerce checkout?',
    answer: `Yes, checkout optimization is a frequent request. We remove unnecessary checkout fields to reduce cart friction. We add one-step checkout flows, address autocomplete, and order notes. We also integrate buy-now-pay-later options like Klarna and Affirm. All changes use standard WooCommerce hooks.`,
    category: 'development',
  },
  {
    question: 'Do you build WooCommerce stores with variable products?',
    answer: `Yes, variable products are native to WooCommerce. For complex catalogs, we build custom product configurators. This handles hundreds of color, size, and material combinations. We build conditional variant logic and custom swatch pickers. This is ideal for apparel, furniture, and custom manufacturing.`,
    category: 'development',
  },
  {
    question: 'Can you add wholesale or B2B pricing to an existing WooCommerce store?',
    answer: `Yes, we frequently add B2B pricing to existing stores. For simple needs, user-role pricing plugins handle the rules. For complex needs, we write custom plugins. These support customer-specific contract prices and tiered volume discounts. We audit your catalog and propose the right technical approach.`,
    category: 'development',
  },

  // -- Performance & SEO ------------------------------------------------─
  {
    question: 'Why is my WooCommerce store slow?',
    answer: `WooCommerce stores slow down for several common reasons. Cheap shared hosting lacks required RAM. Missing Redis object caching causes redundant database queries. Bloated plugins and unoptimized product images add heavy load. Our technical audit pinpoints exact bottlenecks. We fix them through server tuning, caching, and code cleanup.`,
    category: 'performance',
  },
  {
    question: 'Does WooCommerce have good SEO?',
    answer: `WooCommerce has strong organic SEO foundations. It provides clean URLs, category taxonomy, and XML sitemaps. The WordPress blogging engine offers a major content advantage over Shopify. We configure product schema markup, canonical tags, and clean pagination. This prevents duplicate content across product variants.`,
    category: 'performance',
  },
  {
    question: 'Can you improve the Core Web Vitals of my WooCommerce store?',
    answer: `Yes, Core Web Vitals optimization is standard in our builds. We fix Largest Contentful Paint by optimizing hero images and deferring scripts. We eliminate layout shift by reserving space for dynamic content. We improve interaction speed by trimming heavy plugin scripts. We verify improvements with before and after Lighthouse scores.`,
    category: 'performance',
  },
  {
    question: 'Should I use a page builder like Elementor with WooCommerce?',
    answer: `Page builders like Elementor add significant JavaScript and CSS weight. That overhead can hurt page speed and Core Web Vitals. If design flexibility is your priority, Elementor can work with careful caching. If conversion speed is your top priority, custom themes perform much better. We build custom lightweight themes for performance-focused brands.`,
    category: 'performance',
  },

  // -- Cost & Pricing ----------------------------------------------------─
  {
    question: 'How much does WooCommerce development cost compared to Shopify development?',
    answer: `Upfront development costs are similar for custom builds on either platform. FactoryJet quotes all projects at a fixed price up front. The ongoing cost difference is where WooCommerce shines. WooCommerce requires only web hosting fees, with zero platform cuts. Shopify charges monthly subscription fees and platform transaction cuts.`,
    category: 'cost',
  },
  {
    question: 'What plugins do I need to buy for a WooCommerce store?',
    answer: `Required plugins depend on your store features. Most stores need Stripe for payments and WooCommerce Shipping for carrier rates. Both are free. SEO plugins like Yoast or RankMath carry small annual fees. Optional extensions like Subscriptions or Bookings require annual licenses from Woo. We recommend only the extensions your store truly needs.`,
    category: 'cost',
  },
  {
    question: 'WooCommerce vs Shopify: how do the development and ongoing costs compare?',
    answer: `Initial development costs are comparable across both platforms. Both require thoughtful design, catalog setup, and custom testing. However, ongoing software costs diverge quickly. WooCommerce charges no platform commission fees. Shopify charges monthly tier fees and third-party app subscriptions. High-volume merchants save thousands each year on WooCommerce.`,
    category: 'cost',
  },

  // -- Working with FactoryJet --------------------------------------------─
  {
    question: 'Do you work with existing WooCommerce stores or only new builds?',
    answer: `We handle both new store builds and existing store enhancements. Much of our work involves speeding up slow stores and fixing buggy plugins. We also add B2B pricing, new payment gateways, and ERP integrations. We start with a technical audit and deliver a fixed-price proposal before starting.`,
    category: 'factoryjet',
  },
  {
    question: 'Can you migrate my store from Shopify to WooCommerce?',
    answer: `Yes, Shopify to WooCommerce migration is a frequent project. We export products, customer accounts, and past order history. We configure 301 redirects for every old URL to protect organic search rankings. We rebuild your storefront theme on WordPress and replace Shopify apps with native plugins. We provide a complete fixed price before work begins.`,
    category: 'factoryjet',
  },
  {
    question: 'Will I be able to manage my WooCommerce store myself after launch?',
    answer: `Yes, the WooCommerce admin dashboard is simple and intuitive. You can add new products, update prices, and process customer orders easily. You can issue refunds, create coupons, and publish blog articles without writing code. We provide full team training after launch so you feel confident managing operations.`,
    category: 'factoryjet',
  },
  {
    question: 'Do you offer WooCommerce maintenance and support packages?',
    answer: `Yes, we provide monthly maintenance retainers. Our retainers cover core WordPress updates, WooCommerce updates, and plugin compatibility testing. We run daily off-site backups with tested restore procedures. We also monitor uptime and conduct regular security scans. Every build includes 30 days of complimentary post-launch support.`,
    category: 'factoryjet',
  },
  {
    question: 'How do I get started with FactoryJet WooCommerce development?',
    answer: `Book a 30-minute discovery call with our founder. We review your catalog size, required integrations, and project timeline. For existing stores, we run a quick technical audit. We follow up with a detailed, fixed-price proposal within 48 hours. There is zero sales pressure. We simply determine if our team is the right fit.`,
    category: 'factoryjet',
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
  name: 'How FactoryJet builds your WooCommerce store',
  description: 'Our process for delivering professional, high-performance WooCommerce stores for US brands.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3-4 | Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5-6 | Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

/* ----------------------------------------------------------------------------─
   Page
--------------------------------------------------------------------------─-- */

export default function WoocommerceDevelopmentPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <SiteHeader
        navLinks={[
          { label: 'Web Design', href: '/services/web-design' },
          { label: 'E-Commerce', href: '/services/ecommerce-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
      />

      <main>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* -- 1. HERO -------------------------------------------------------- */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_woocommerce_development_hero" />}
          eyebrow="WOOCOMMERCE DEVELOPMENT SERVICES"
          headline="Senior WooCommerce developers. Custom stores and plugins. fixed-price, milestone-paid."
          lead="We build custom WooCommerce stores and plugins. We engineer B2B wholesale features, live ERP sync, and speed optimization. Every build is a fixed-price project delivered by senior WordPress developers."
          secondaryCta={{ label: 'View Our Work', href: '/portfolio' }}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  WooCommerce Development Services
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { service: 'Custom Store Builds.', detail: 'Designed from scratch, no templates.' },
                  { service: 'Custom Plugin Development.', detail: 'Hooks and filters, no core edits.' },
                  { service: 'B2B / Wholesale Stores.', detail: 'Role pricing, POs, quote workflows.' },
                  { service: 'Subscription & Membership.', detail: 'Recurring billing, gated content.' },
                  { service: 'ERP / CRM Integration.', detail: 'QuickBooks, NetSuite, Salesforce, more.' },
                  { service: 'Checkout Customization.', detail: 'Convert more without redesigning.' },
                  { service: 'Performance Optimization.', detail: 'Core Web Vitals, caching, speed.' },
                  { service: 'Ongoing Maintenance.', detail: 'Monthly retainers, scoped to your store.' },
                ].map(({ service, detail }) => (
                  <div key={service} className="flex items-center gap-4 px-7 py-3.5">
                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" aria-hidden />
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{service}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Fixed-price WooCommerce projects. Scoped and quoted upfront for plugins and complete store builds.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 2. LOGO BAR ---------------------------------------------------- */}
        <LogoBar tagline="500+ e-commerce businesses trust FactoryJet, from custom plugins to full WooCommerce builds" />

        {/* -- 3. TRUST BLOCK ----------------------------------------------─-- */}
        <BigThreeTrustBlock
          eyebrow="WHY FACTORYJET FOR WOOCOMMERCE"
          headline="Senior WooCommerce developers. Fixed-price proposals. fixed-price, milestone-paid."
        />

        {/* -- 4. WHAT WE BUILD --------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD"
          headline="Custom WooCommerce Development That Goes Beyond What Plugins Can Do"
          lead="Most stores outgrow off-the-shelf plugins. Generic extensions solve part of the problem, leaving awkward workarounds. Custom engineering closes that gap. Here is what we build."
          body={
            <>
              <p>
                Custom WooCommerce stores provide a solid foundation. We design and build every theme from scratch. We never use generic templates that look like competitors. Your theme is purpose-built for your product catalog and conversion goals. It is mobile-first, fast, and ready for high traffic.
              </p>

              <p>
                Custom plugin development handles unique business logic. We build custom shipping rate calculators and dynamic product configurators. We create wholesale pricing engines with customer-specific contract rates. We also build ERP sync plugins to keep stock levels accurate. All plugins use standard hooks and filters so updates never break your store.
              </p>

              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white shadow-sm">
                <div className="border-b border-fj-neutral-100 px-6 py-3">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    Common Custom WooCommerce Projects
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-100">
                  {[
                    { project: 'Custom checkout flow.', detail: 'Fewer fields, higher conversion, BNPL options.' },
                    { project: 'B2B pricing engine.', detail: 'User-role pricing, volume tiers, net terms.' },
                    { project: 'Product configurator.', detail: 'Dynamic pricing from custom option selections.' },
                    { project: 'ERP sync plugin.', detail: 'Bidirectional order and inventory sync.' },
                    { project: 'Subscription system.', detail: 'Custom billing intervals, pausing, upgrades.' },
                    { project: 'Wholesale portal.', detail: 'Hidden retail prices, bulk order forms, POs.' },
                  ].map(({ project, detail }) => (
                    <div key={project} className="grid grid-cols-2 gap-4 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-fj-ink">{project}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Performance optimization is our third core service. Slow WooCommerce stores hurt sales. Common causes include poor hosting, missing object caching, and heavy plugins. We audit your full stack and fix root causes directly.
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
                  WooCommerce Problems We Fix.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { problem: 'Slow store (5s+ load).', fix: 'Caching, hosting, image optimization.' },
                  { problem: 'Checkout abandonment.', fix: 'Custom flow, fewer fields, BNPL.' },
                  { problem: 'No wholesale pricing.', fix: 'Custom B2B plugin or role-based pricing.' },
                  { problem: 'Broken plugin conflicts.', fix: 'Plugin audit, conflict resolution.' },
                  { problem: 'Inventory sync errors.', fix: 'Custom ERP integration plugin.' },
                ].map(({ problem, fix }) => (
                  <div key={problem} className="py-3.5">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{problem}</p>
                    <p className="font-fj-mono text-[0.75rem] text-fj-neutral-400 mt-1">Fix: {fix}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  We audit before we quote. Fixed price before we start.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 5. INDUSTRIES -------------------------------------------------- */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="WooCommerce Development for US E-Commerce Businesses in Every Category"
        />

        {/* -- 6. WHAT GOES WRONG ------------------------------------------─-- */}
        <StrategicDarkSection
          eyebrow="WHAT GOES WRONG"
          headline="Three WooCommerce Development Mistakes That Cost Businesses Money"
          lead="Most WooCommerce problems aren't WooCommerce problems. They're implementation problems. Here's what happens when WooCommerce development isn't done by people who know the platform deeply."
          pillars={[
            {
              title: 'Core file edits that break on every update',
              body: `Untrained developers often edit core WooCommerce files directly. That is a major mistake. Core file changes get overwritten during regular WooCommerce releases. If your store breaks after updates, it was built incorrectly. FactoryJet uses hooks and filters exclusively. Your customizations survive every WordPress and WooCommerce update.`,
            },
            {
              title: 'Plugin bloat that kills store performance',
              body: `Many stores run 30 or more plugins. Many plugins handle trivial tasks that belong in the theme. Each plugin adds extra database queries and script files. Removing unnecessary plugins often speeds up page loads by 40 percent. We audit your plugin stack and replace heavy plugins with clean custom code.`,
            },
            {
              title: `Checkout friction that leaks revenue`,
              body: `Default WooCommerce checkout forms contain too many fields. Most stores do not need separate address fields on initial orders. Extra form fields increase checkout abandonment. Streamlining checkout fields often boosts conversions by 15 to 25 percent. We design clean checkout flows tailored to your actual buyers.`,
            },
          ]}
        />

        {/* -- 7. COMPARISON TABLE -------------------------------------------- */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. Freelancer vs. Traditional Agency vs. Budget Dev Shop"
          lead="Not all WooCommerce developers are equal. Here's how FactoryJet compares to the alternatives on the dimensions that matter for your store."
          pullQuote={{
            stat: 'Fixed price',
            caption: 'quoted upfront for a custom WooCommerce store, custom theme, your product catalog, full integrations, Core Web Vitals optimized.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Comparisons reflect 2025 US market norms. Traditional agencies typically bill hourly for equivalent project scope, at a multiple of our fixed price."
        />

        {/* -- 8. STATS ----------------------------------------------------─-- */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={STATS} align="center" />
        </div>

        {/* -- 9. HOW WE WORK ----------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="OUR APPROACH"
          headline="Fixed Prices. WooCommerce Standards. Full Code Ownership. No Lock-In."
          lead="WooCommerce built right should be maintainable by any WordPress developer, not just us. Here's how we build, and why it matters for your store's long-term health."
          reverseOnDesktop
          body={
            <>
              <p>
                FactoryJet has built on WordPress and WooCommerce for over a decade. We understand what architectures hold up over time. We know which shortcuts create technical debt two years later. We build for longevity and easy maintenance.
              </p>

              <p>
                Every custom plugin uses official WooCommerce hooks and filters. We never modify core files. We build custom child themes, use Composer for dependencies, and document all code. This ensures any WordPress developer can maintain your store.
              </p>

              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  You own the code. Any WooCommerce developer can maintain it. That's by design.
                </p>
              </div>

              <p>
                We provide fixed-price proposals on every engagement. We scope technical requirements thoroughly before work starts. The price quoted after discovery is the final price you pay. We never bill surprise hours or scope-creep invoices.
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
                  Our WooCommerce Development Standards.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { standard: 'Hooks and filters only.', detail: 'No core edits, survives every update.' },
                  { standard: 'Child theme architecture.', detail: 'Customizations separate from parent theme.' },
                  { standard: 'Plugin conflict testing.', detail: 'Verified against your existing plugin stack.' },
                  { standard: 'Core Web Vitals passing.', detail: 'Performance measured, not assumed.' },
                  { standard: 'WooCommerce HPOS ready.', detail: 'High-performance order storage compatible.' },
                  { standard: 'Full code documentation.', detail: 'Every plugin shipped with inline docs.' },
                  { standard: 'Staging → production.', detail: 'No live site development, ever.' },
                ].map(({ standard, detail }) => (
                  <div key={standard} className="flex items-center gap-4 px-7 py-3.5">
                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" aria-hidden />
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{standard}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* -- 10. HOW IT WORKS --------------------------------------------─-- */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Discovery Call to Live Store, 5 Stages"
          lead="Every WooCommerce project follows the same structured process. Clear scope before development starts. No surprises mid-project. Full testing before launch."
          stages={JOURNEY_STAGES}
        />

        {/* -- 11. PRICING ---------------------------------------------------- */}
        <PricingTiers
          eyebrow="PRICING"
          headline="Fixed-Price WooCommerce Development Packages"
          lead="Starting prices for common WooCommerce project types. Every project gets a custom quote after the discovery call, scope drives price, and we don't quote without understanding what you need."
          tiers={PRICING_TIERS}
        />

        {/* -- 12. TESTIMONIALS --------------------------------------------─-- */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 on Google across 500+ projects. Real results from real businesses."
        />

        {/* -- 12b. HIRE WOOCOMMERCE DEVELOPERS ------------------------------- */}
        <section className="py-14 md:py-20 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">HIRE WOOCOMMERCE DEVELOPERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Hire WooCommerce developers &amp; experts, design and build under one roof</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#3A3A40] leading-relaxed space-y-4">
                <p>
                  Most US store owners don&apos;t want to gamble on a marketplace listing, they want to{' '}
                  <strong>hire a WooCommerce developer</strong> who has shipped real stores and won&apos;t vanish
                  mid-project. As a US WooCommerce development agency, FactoryJet gives you a dedicated WooCommerce
                  expert backed by a full team: designer, developer, and QA, all owning your build end to end.
                </p>
                <p>
                  Need ongoing help instead of a one-off build? Hire a dedicated WooCommerce expert on a monthly
                  retainer for theme work, plugin development, performance, and store customization. For mobile storefronts,
                  explore our{' '}
                  <Link href="/services/ecommerce-app-development" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce app development</Link>, or
                  see our{' '}
                  <Link href="/services/ecommerce-development" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce development services</Link> and{' '}
                  <Link href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="text-[#B23E13] font-medium underline underline-offset-2">Shopify vs WooCommerce guide</Link>.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-white p-7">
                <h3 className="text-xl font-bold text-[#0F0F12] mb-3">WooCommerce store design &amp; customization</h3>
                <ul className="space-y-2.5 text-[#3A3A40] text-[15px]">
                  <li>• Custom WooCommerce store design &amp; theme builds.</li>
                  <li>• Store customization on your existing site, no full rebuild.</li>
                  <li>• Custom plugin development &amp; integrations.</li>
                  <li>• Speed, Core Web Vitals &amp; checkout optimization.</li>
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

        {/* -- 13. FAQ -------------------------------------------------------- */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything US Businesses Ask About WooCommerce Development"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce: which is right for your US business?</p>
              </a>
              <a href="/blog/custom-web-development-vs-wordpress-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Custom web development vs WordPress for US small businesses.</p>
              </a>
            </div>
          </div>
        </section>

        {/* -- 14. FINAL CTA -------------------------------------------------- */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Ready to build or improve your WooCommerce store?"
          sub="Book a 30-minute discovery call. We'll scope your project, answer your technical questions, and give you a fixed-price proposal within 24-48 hours. No obligation."
          primaryCta={{ label: 'Book Your Free Discovery Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our E-Commerce Work', href: '/portfolio' }}
          objectionHandler="No commitment required. Fixed-price proposal within 24-48 hours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
