import type { Metadata } from 'next';
import Script from 'next/script';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { woocommerceDevelopmentAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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
  title: 'WooCommerce Development Services — Custom Stores & Plugins | FactoryJet',
  description:
    'Expert WooCommerce development for US e-commerce businesses. Custom store builds, plugin development, theme customization, payment integrations, and performance optimization. 60–70% cheaper than US agencies. Free consultation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WooCommerce Development Services | FactoryJet',
    description:
      'Custom WooCommerce store builds, plugin development, and integrations for US businesses. Senior WooCommerce developers, fixed-price projects — 60–70% cheaper than US agencies.',
    url: 'https://factoryjet.com/us/services/woocommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'WooCommerce Development Services — FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce Development Services | FactoryJet',
    description:
      'Custom WooCommerce stores, plugin development, and integrations. Fixed-price projects, senior developers, 60–70% cheaper than US agencies.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/woocommerce-development',
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
   JSON-LD Schemas — FAQPage · Service · BreadcrumbList
--------------------------------------------------------------------------─-- */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is WooCommerce development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WooCommerce development involves building, customizing, and extending e-commerce stores on the WooCommerce platform (a WordPress plugin). This includes building custom WooCommerce stores from scratch, developing custom plugins and extensions, customizing themes for WooCommerce, integrating payment gateways and shipping carriers, building ERP and CRM integrations, and optimizing WooCommerce store performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does WooCommerce development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WooCommerce development costs depend on scope. A custom WooCommerce store with a unique theme and standard plugins typically costs $2,999–$8,000. Custom plugin development runs $1,500–$6,000. Complex stores with custom checkout flows, ERP integrations, and B2B pricing cost $8,000–$25,000+. US agencies charge $100–$250/hour for WooCommerce work. FactoryJet builds WooCommerce stores at 60–70% lower cost with senior developers on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use WooCommerce or Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WooCommerce is better if you want full control over your store and hosting, need deep WordPress integration (blog, content marketing, SEO), want to avoid monthly platform fees beyond hosting, or need custom functionality that Shopify apps cannot provide. Shopify is better if you want a simpler setup, don\'t want to manage WordPress hosting, or need a hosted solution with less technical overhead. WooCommerce has a higher ceiling but requires more technical management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does FactoryJet charge for WooCommerce development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds WooCommerce stores starting at $2,999 for a standard store with a custom theme and up to 50 products configured. Custom plugin development starts at $1,499. Complex stores with custom functionality start at $4,999. All projects are fixed-price with no hourly billing. Compared to US agencies charging $100–$250/hour, FactoryJet delivers 60–70% in cost savings with senior WooCommerce developers on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you customize an existing WooCommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — extending and customizing existing WooCommerce stores is a core part of our work. Common customizations include: custom checkout flows, product configurators, membership and subscription setups, wholesale/B2B pricing rules, shipping rate customizations, payment gateway integrations, and performance optimization. We audit the existing store first and provide a fixed-price proposal for the specific customizations you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WooCommerce good for large product catalogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WooCommerce handles large catalogs well when properly configured — with appropriate hosting (WP Engine or Kinsta), a good caching setup (Redis + full-page cache), and an optimized database. Stores with 10,000–50,000 SKUs run well on WooCommerce with the right infrastructure. For very large catalogs (100,000+ SKUs) with complex attributes, Magento 2 or a headless solution is often more appropriate. FactoryJet can help you choose the right platform for your specific catalog size and complexity.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Development Services',
  description:
    'Custom WooCommerce store development, plugin development, theme customization, and integrations for US e-commerce businesses. Fixed-price projects, senior developers.',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '1999',
    areaServed: 'US',
  },
  serviceType: 'WooCommerce Development',
  offers: {
    '@type': 'Offer',
    price: '2999',
    priceCurrency: 'USD',
    description: 'Custom WooCommerce store starting price',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/us/services/ecommerce-development' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'WooCommerce Development',
      item: 'https://factoryjet.com/us/services/woocommerce-development',
    },
  ],
};

/* ----------------------------------------------------------------------------─
   Section Data
--------------------------------------------------------------------------─-- */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'A 30-minute call to understand your store requirements, catalog size, integrations, and goals. We discuss the right WooCommerce approach for your business and scope the project accurately — you get a fixed-price proposal before committing.',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'For custom stores, we design the theme and user experience before development starts — you approve the design first. For plugin development, we document the technical architecture and data model. No surprises mid-build.',
  },
  {
    number: '03',
    title: 'Development & Integration',
    description:
      'Senior WooCommerce developers build your store or plugin on a staging environment. Payment gateways, shipping integrations, third-party APIs, and custom checkout flows are wired up and tested in isolation before going near production.',
  },
  {
    number: '04',
    title: 'QA & Performance Testing',
    description:
      'Full checkout flow testing, cross-browser and mobile QA, and WooCommerce-specific edge case testing (variable products, backorders, partial fulfillment). We run performance audits and optimize Core Web Vitals before launch clearance.',
  },
  {
    number: '05',
    title: 'Launch + 30-Day Support',
    description:
      'We deploy to your live store, verify all payment and fulfillment flows in production, and monitor for issues in the first 48 hours. Every project includes 30 days of post-launch support — no ticket queue, direct line to the team that built it.',
  },
];

const STATS = [
  {
    value: '$2,999',
    label: 'starting price for a custom WooCommerce store',
    microcopy: 'custom theme, up to 50 products, full integrations',
    categoryLabel: 'OUR STARTING PRICE',
  },
  {
    value: '60–70%',
    label: 'cheaper than US WooCommerce development agencies',
    microcopy: 'senior developers, no US overhead',
    categoryLabel: 'COST ADVANTAGE',
  },
  {
    value: '25+',
    label: 'years of WordPress and WooCommerce development',
    microcopy: '500+ e-commerce projects delivered for US businesses',
    categoryLabel: 'EXPERIENCE',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Freelancer' },
  { label: 'US Agency' },
  { label: 'Offshore Shop' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Senior WooCommerce developers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed-price proposals',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Custom theme design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Core Web Vitals / performance optimization',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Payment & shipping integrations',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: '60–70% lower cost than US agencies',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Full code ownership — no lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'WooCommerce hooks/filters (no core edits)',
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
    priceRange: 'From $2,999',
    description:
      'A WooCommerce store built on a custom theme — not a Flatsome or Astra template. Designed for your products and customers, configured for performance, and ready to sell from launch day.',
    features: [
      'Custom theme design — not a premium template',
      'Up to 50 products configured and uploaded',
      'Payment gateway setup (Stripe, PayPal, Authorize.Net)',
      'Shipping carrier integration (UPS, USPS, FedEx)',
      'Mobile-first design, Core Web Vitals optimized',
      'WooCommerce SEO — product schema, sitemaps, canonical',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Custom Plugin',
    priceRange: 'From $1,499',
    description:
      `A custom WooCommerce plugin or extension that adds functionality your business needs and existing plugins can't provide — built using WooCommerce hooks and filters, not core file edits.`,
    features: [
      'Custom WooCommerce plugin architecture',
      'Proper use of WooCommerce hooks and filters',
      'Admin settings UI if needed',
      'Compatibility testing across WooCommerce versions',
      'PHPDoc inline documentation',
      'Works with existing plugins — no conflicts',
      'WordPress.org submission-ready if needed',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Plugin Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Complex Store',
    priceRange: 'From $4,999',
    description:
      'A WooCommerce store with custom checkout flows, B2B pricing, subscriptions, membership gating, ERP integration, or other complex functionality that goes beyond standard WooCommerce capabilities.',
    features: [
      'Custom checkout flow and order management',
      'B2B pricing rules and wholesale user roles',
      'Subscription or membership functionality',
      'ERP / CRM / inventory system integration',
      'Custom product types or configurators',
      'Advanced shipping rules and rate calculation',
      'High-performance hosting configuration',
      '30-day post-launch support',
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
    answer: `WooCommerce the plugin is free and open source. Your costs come from hosting ($15–$100/month for a WooCommerce-appropriate server), your domain ($12–$20/year), a theme ($50–$300 one-time, or free custom-built), and any premium plugins you need ($50–$300/year each). A basic WooCommerce store can run on $200–$400/year in infrastructure. A professionally built store with custom development and good hosting costs $3,000–$10,000 upfront, then $200–$600/year to run.`,
    category: 'platform',
  },
  {
    question: 'What is the difference between WooCommerce and Shopify?',
    answer: `WooCommerce runs on WordPress — you control your hosting, your data, and your code. There are no platform transaction fees, and customization is unlimited. Shopify is a hosted SaaS platform — lower technical overhead, but you pay monthly fees ($79–$399/month) plus transaction fees, and customization has hard limits. WooCommerce has a higher ceiling but requires more technical management. Shopify is simpler but has ongoing platform costs. FactoryJet builds on both — we'll help you choose the right platform on the discovery call.`,
    category: 'platform',
  },
  {
    question: 'What hosting does WooCommerce need?',
    answer: `WooCommerce needs more server resources than a standard WordPress blog — at minimum, 2GB RAM and a PHP 8.1+ environment with OPcache enabled. For most stores, we recommend managed WordPress hosting: WP Engine ($25–$95/month), Kinsta ($35–$100/month), or SiteGround ($25–$80/month). For high-volume stores, a VPS with Redis, Nginx, and object cache is more appropriate. Shared hosting from GoDaddy or Bluehost is almost never appropriate for WooCommerce — it will be slow.`,
    category: 'platform',
  },
  {
    question: 'Can WooCommerce handle subscriptions and recurring billing?',
    answer: `Yes — WooCommerce Subscriptions (a premium plugin by Woo) adds subscription product types, recurring billing, subscription management for customers and admins, and prorated upgrades/downgrades. It works with Stripe, PayPal, and Authorize.Net for recurring payments. Custom subscription logic (custom billing intervals, usage-based billing, hybrid one-time + recurring products) can be built as a custom plugin. This is a common FactoryJet engagement — we've built custom subscription systems for SaaS companies, membership sites, and product subscription boxes.`,
    category: 'platform',
  },
  {
    question: 'Is WooCommerce good for B2B e-commerce?',
    answer: `WooCommerce handles B2B use cases well with the right plugins and custom development. B2B WooCommerce setups typically include: wholesale pricing by user role, hidden retail pricing for wholesale accounts, minimum order quantities, purchase order / net payment terms, quote request instead of immediate checkout, and company account management. FactoryJet builds custom B2B WooCommerce solutions using a combination of plugins and custom code — we don't assume a premium plugin covers your exact requirements, we build what you actually need.`,
    category: 'platform',
  },

  // -- Development Work --------------------------------------------------─
  {
    question: 'What is a WooCommerce custom plugin?',
    answer: `A custom WooCommerce plugin extends or modifies WooCommerce functionality without editing core files. Custom plugins can add new product types, modify checkout behavior, add admin reports, create custom pricing rules, build custom shipping rate calculators, integrate third-party APIs, or modify the order management workflow. They use WooCommerce's hooks (actions and filters) to modify behavior safely — meaning your customizations survive WooCommerce updates, unlike modifications to template files or core code.`,
    category: 'development',
  },
  {
    question: 'Can you integrate WooCommerce with my ERP or accounting system?',
    answer: `Yes — WooCommerce ERP and accounting integrations are a significant part of our development work. Common integrations include: QuickBooks Online (order sync, customer sync, tax handling), Xero, NetSuite, Sage, and custom ERP systems. These integrations typically sync orders from WooCommerce to the ERP, inventory and pricing from the ERP back to WooCommerce, and customer account data in both directions. We build direct API integrations as well as middleware-based integrations depending on your ERP's capabilities.`,
    category: 'development',
  },
  {
    question: 'Can you customize the WooCommerce checkout?',
    answer: `Yes — WooCommerce checkout customization is one of the most common requests. Common customizations include: removing unnecessary checkout fields (which reduces friction and improves conversion), adding custom fields (delivery notes, purchase order numbers, custom product options), reordering checkout steps, adding upsell or cross-sell offers in checkout, integrating buy-now-pay-later options (Klarna, Affirm, Afterpay), and custom thank-you page logic. All customizations use WooCommerce hooks — no core file editing.`,
    category: 'development',
  },
  {
    question: 'Do you build WooCommerce stores with variable products?',
    answer: `Yes — variable products (products with multiple variants like size, color, or material) are standard WooCommerce functionality. For complex variant setups (hundreds of combinations, conditional variant availability, variant-specific pricing tiers, custom attribute types), we extend WooCommerce's native variable product system with custom code. This is especially common for apparel, furniture, and custom-manufactured products where the default WooCommerce variant UI doesn't quite fit the product.`,
    category: 'development',
  },
  {
    question: 'Can you add wholesale or B2B pricing to an existing WooCommerce store?',
    answer: `Yes — adding wholesale or B2B pricing to an existing WooCommerce store is a common engagement. The implementation depends on your requirements: if you need simple user-role-based pricing, a combination of plugins handles it. If you need customer-specific pricing, negotiated prices by account, tiered volume pricing, or quote-based purchasing, custom plugin development is needed. We audit your existing store and requirements before proposing an approach — there's a wide range of complexity here.`,
    category: 'development',
  },

  // -- Performance & SEO ------------------------------------------------─
  {
    question: 'Why is my WooCommerce store slow?',
    answer: `WooCommerce stores are slow for a few common reasons: inadequate hosting (shared hosting doesn't have the RAM for WooCommerce), no caching setup (WooCommerce disables standard WordPress page cache for logged-in users and cart pages, requiring a dedicated WooCommerce caching solution), unoptimized images, too many plugins making excessive database queries, or a bloated theme loading unnecessary scripts. FactoryJet's performance audit identifies the root causes and fixes them — typically a combination of hosting upgrade, caching configuration, and query optimization.`,
    category: 'performance',
  },
  {
    question: 'Does WooCommerce have good SEO?',
    answer: `WooCommerce has solid SEO foundations: clean URLs, product schema markup support, category and tag pages, and native XML sitemap generation. WordPress's content ecosystem (blog posts, guides) is one of the strongest SEO advantages of WooCommerce over Shopify. Where WooCommerce SEO requires attention: proper configuration of Yoast or RankMath for product and category meta, canonical tag management for variable products (to avoid duplicate content), and pagination handling for large category pages. FactoryJet sets up all of this as part of every store build.`,
    category: 'performance',
  },
  {
    question: 'Can you improve the Core Web Vitals of my WooCommerce store?',
    answer: `Yes — Core Web Vitals optimization on WooCommerce is a common engagement. The biggest issues on WooCommerce stores are typically: Largest Contentful Paint (LCP) caused by unoptimized product images or render-blocking scripts, Cumulative Layout Shift (CLS) caused by elements loading asynchronously without reserved space, and Interaction to Next Paint (INP) caused by excessive JavaScript from page builders or poorly coded plugins. We audit the specific failures on your store, prioritize by impact, and fix them — with before/after Lighthouse scores to verify improvement.`,
    category: 'performance',
  },
  {
    question: 'Should I use a page builder like Elementor with WooCommerce?',
    answer: `Elementor (and similar page builders like Divi or WPBakery) are popular but notorious for adding significant JavaScript and CSS weight to WooCommerce stores, which slows page load and hurts Core Web Vitals. For stores where design flexibility matters more than raw performance, Elementor is workable when configured carefully. For stores where performance is the priority, we recommend purpose-built WooCommerce themes or a custom theme that loads only what's needed. FactoryJet builds custom themes when performance is a hard requirement.`,
    category: 'performance',
  },

  // -- Cost & Pricing ----------------------------------------------------─
  {
    question: 'How much does WooCommerce development cost compared to Shopify development?',
    answer: `WooCommerce development typically costs slightly less than equivalent Shopify development because there are fewer licensing constraints and the platform is more open. A custom WooCommerce store from FactoryJet starts at $2,999 vs. a comparable Shopify store starting at $2,999 — similar upfront. The ongoing cost difference is more significant: WooCommerce hosting costs $200–$600/year; Shopify charges $948–$4,788/year in platform fees alone. For businesses with high GMV, WooCommerce's lower ongoing cost often justifies the slightly higher technical management burden.`,
    category: 'cost',
  },
  {
    question: 'What plugins do I need to buy for a WooCommerce store?',
    answer: `The plugins you need depend on your store's requirements. Core plugins most stores need: a payment gateway plugin (Stripe for WooCommerce is free), a shipping plugin (WooCommerce Shipping is free; carrier-specific rate plugins run $80–$200/year), and an SEO plugin (Yoast or RankMath, $99–$199/year). Optional premium plugins: WooCommerce Subscriptions ($249/year if you need subscriptions), WooCommerce Bookings ($249/year for appointment booking), and various marketing integrations. FactoryJet factors plugin costs into the project scope and recommends only what you actually need.`,
    category: 'cost',
  },
  {
    question: 'Is WooCommerce development cheaper than Shopify development?',
    answer: `The upfront development cost is similar. WooCommerce and Shopify stores built to the same quality level cost roughly the same to develop — FactoryJet starts both at $2,999. The difference shows up in ongoing costs: WooCommerce has no platform fees (you pay hosting), while Shopify charges $79–$399/month plus 0.5–2% transaction fees if you don't use Shopify Payments. For a store doing $1M/year in revenue, that's $5,000–$15,000/year in Shopify fees that WooCommerce doesn't charge.`,
    category: 'cost',
  },

  // -- Working with FactoryJet --------------------------------------------─
  {
    question: 'Do you work with existing WooCommerce stores or only new builds?',
    answer: `Both. A significant portion of FactoryJet's WooCommerce work is extending, optimizing, or fixing existing stores — adding functionality, improving performance, migrating to better hosting, fixing broken plugins, or adding payment and shipping integrations. For existing store work, we start with a technical audit and provide a fixed-price proposal for the specific changes you need. We don't bill by the hour for discovery — you get a clear scope and price before committing.`,
    category: 'factoryjet',
  },
  {
    question: 'Can you migrate my store from Shopify to WooCommerce?',
    answer: `Yes — Shopify to WooCommerce migration is a common engagement. We migrate products (with variants, images, and metadata), customer accounts, order history, and redirect all Shopify URLs to WooCommerce equivalents to preserve SEO. The main considerations are: your Shopify theme needs to be rebuilt on WooCommerce (themes don't transfer), and any Shopify-specific apps need WooCommerce equivalents or custom plugins. We audit your Shopify store first and scope the full migration cost before you commit.`,
    category: 'factoryjet',
  },
  {
    question: 'Will I be able to manage my WooCommerce store myself after launch?',
    answer: `Yes — WooCommerce's admin dashboard is designed to be manageable by non-technical store owners. You can add products, update inventory, process orders, issue refunds, manage coupons, and publish blog posts without any development knowledge. We also provide a training session after launch so you're comfortable with the specific setup of your store. For ongoing technical work (plugin updates, new features, performance monitoring), we offer monthly maintenance retainers.`,
    category: 'factoryjet',
  },
  {
    question: 'Do you offer WooCommerce maintenance and support packages?',
    answer: `Yes — FactoryJet offers monthly WooCommerce maintenance retainers starting at $399/month. These cover: WordPress and WooCommerce core updates, plugin updates with compatibility testing, daily backups with tested restore capability, uptime monitoring, security scanning, and a defined allocation of development hours for small changes and fixes. All project engagements include 30 days of free post-launch support regardless of whether you're on a retainer.`,
    category: 'factoryjet',
  },
  {
    question: 'How do I get started with FactoryJet WooCommerce development?',
    answer: `Book a free 30-minute discovery call. We'll discuss your store requirements, your timeline, your budget, and the technical approach that makes sense for your situation. For existing stores, we'll do a quick technical audit before providing a quote. For new builds, we'll scope the project on the call and follow up with a fixed-price proposal within 24–48 hours. No obligation to move forward, and no sales pressure on the call — we focus on figuring out if we're the right fit.`,
    category: 'factoryjet',
  },
];

/* ----------------------------------------------------------------------------─
   Page
--------------------------------------------------------------------------─-- */

export default function WoocommerceDevelopmentPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <SiteHeader
        navLinks={[
          { label: 'Web Design', href: '/us/services/web-design' },
          { label: 'E-Commerce', href: '/us/services/ecommerce-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
      />

      <main>
        {/* -- 1. HERO -------------------------------------------------------- */}
        <Hero
          eyebrow="WOOCOMMERCE DEVELOPMENT SERVICES"
          headline="Senior WooCommerce developers. Custom stores and plugins. 60–70% less than US agencies."
          lead="Custom WooCommerce store builds, plugin development, B2B functionality, ERP integrations, and performance optimization — fixed-price projects delivered by senior developers with 25+ years of WordPress experience."
          primaryCta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our Work', href: '/us/portfolio' }}
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
                  { service: 'Custom Store Builds', detail: 'Designed from scratch — no templates' },
                  { service: 'Custom Plugin Development', detail: 'Hooks and filters — no core edits' },
                  { service: 'B2B / Wholesale Stores', detail: 'Role pricing, POs, quote workflows' },
                  { service: 'Subscription & Membership', detail: 'Recurring billing, gated content' },
                  { service: 'ERP / CRM Integration', detail: 'QuickBooks, NetSuite, Salesforce, more' },
                  { service: 'Checkout Customization', detail: 'Convert more without redesigning' },
                  { service: 'Performance Optimization', detail: 'Core Web Vitals, caching, speed' },
                  { service: 'Ongoing Maintenance', detail: 'Monthly retainers from $399/mo' },
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
                  Fixed-price WooCommerce projects. From $1,499 for plugins, $2,999 for full stores.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 2. LOGO BAR ---------------------------------------------------- */}
        <LogoBar tagline="500+ US e-commerce businesses trust FactoryJet — from custom plugins to full WooCommerce builds" />

        {/* -- 3. TRUST BLOCK ----------------------------------------------─-- */}
        <BigThreeTrustBlock
          eyebrow="WHY FACTORYJET FOR WOOCOMMERCE"
          headline="Senior WooCommerce developers. Fixed-price proposals. 60–70% cheaper than US agencies."
        />

        {/* -- 4. WHAT WE BUILD --------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD"
          headline="Custom WooCommerce Development That Goes Beyond What Plugins Can Do"
          lead="Most WooCommerce stores hit a ceiling with off-the-shelf plugins — they almost do what you need, with a workaround for the part they don't. Custom development closes that gap. Here's what we build."
          body={
            <>
              <p>
                Custom WooCommerce stores are the foundation. We design and build from scratch — no Flatsome, no Astra, no premium template that makes your store look like a thousand others. The theme is purpose-built for your products, your customers, and your conversion goals. Mobile-first, Core Web Vitals optimized, and ready for high traffic from launch day.
              </p>

              <p>
                Custom plugin development is where most of our WooCommerce engagements go beyond the standard. A custom shipping rate calculator. A product configurator that sets pricing dynamically based on options. A wholesale pricing engine with customer-specific rates. A WooCommerce-to-ERP sync that keeps inventory accurate across both systems. Plugins built using WooCommerce's hooks and filters — which means they survive WooCommerce updates and don't conflict with other plugins.
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
                    { project: 'Custom checkout flow', detail: 'Fewer fields, higher conversion, BNPL options' },
                    { project: 'B2B pricing engine', detail: 'User-role pricing, volume tiers, net terms' },
                    { project: 'Product configurator', detail: 'Dynamic pricing from custom option selections' },
                    { project: 'ERP sync plugin', detail: 'Bidirectional order and inventory sync' },
                    { project: 'Subscription system', detail: 'Custom billing intervals, pausing, upgrades' },
                    { project: 'Wholesale portal', detail: 'Hidden retail prices, bulk order forms, POs' },
                  ].map(({ project, detail }) => (
                    <div key={project} className="grid grid-cols-2 gap-4 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-fj-ink">{project}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Performance optimization is the third major WooCommerce engagement type. Slow WooCommerce stores are almost always fixable — the culprits are usually inadequate hosting, no WooCommerce-aware caching, unoptimized product images, and plugin bloat. We audit the full stack and fix performance at the root cause, not the symptom.
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
                  WooCommerce Problems We Fix
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { problem: 'Slow store (5s+ load)', fix: 'Caching, hosting, image optimization' },
                  { problem: 'Checkout abandonment', fix: 'Custom flow, fewer fields, BNPL' },
                  { problem: 'No wholesale pricing', fix: 'Custom B2B plugin or role-based pricing' },
                  { problem: 'Broken plugin conflicts', fix: 'Plugin audit, conflict resolution' },
                  { problem: 'Inventory sync errors', fix: 'Custom ERP integration plugin' },
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
          lead="Most WooCommerce problems aren't WooCommerce problems — they're implementation problems. Here's what happens when WooCommerce development isn't done by people who know the platform deeply."
          pillars={[
            {
              title: 'Core file edits that break on every update',
              body: `The fastest way to identify a developer who doesn't know WooCommerce: they edit WooCommerce template files directly instead of using child themes and hooks. Template overrides are fine; core WooCommerce PHP edits are not. Core edits get overwritten every time WooCommerce releases an update — which is 8–12 times per year. If your current store requires manual re-application of code changes after every WooCommerce update, your previous developer built it wrong. FactoryJet uses hooks and filters exclusively — your customizations survive every update.`,
            },
            {
              title: 'Plugin bloat that kills store performance',
              body: `The average WooCommerce store has 20–40 plugins installed. Many do trivial things that should be in the theme or custom code instead. Each plugin adds HTTP requests, database queries, and JavaScript to your store — the aggregate effect is significant. We've seen stores where removing 8 unnecessary plugins reduced page load time by 40%. FactoryJet audits plugins before recommending any — and when a plugin adds weight without sufficient value, we build the functionality in custom code instead.`,
            },
            {
              title: `Checkout friction that leaks revenue`,
              body: `WooCommerce's default checkout has too many fields. Most stores don't need separate billing and shipping addresses on the first order. Most stores don't need a phone number field that 40% of customers leave blank or fill with fake data. Every unnecessary field reduces conversion. We've seen checkout conversion rates improve 15–25% from checkout field optimization alone — no redesign, just removing the friction. FactoryJet builds checkout flows around what your specific customer journey actually needs, not WooCommerce's one-size-fits-all defaults.`,
            },
          ]}
        />

        {/* -- 7. COMPARISON TABLE -------------------------------------------- */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. Freelancer vs. US Agency vs. Offshore Shop"
          lead="Not all WooCommerce developers are equal. Here's how FactoryJet compares to the alternatives on the dimensions that matter for your store."
          pullQuote={{
            stat: '$2,999',
            caption: 'starting price for a custom WooCommerce store — custom theme, 50 products, full integrations, Core Web Vitals optimized.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect 2025 US market rates. US agency costs based on $150–$250/hour for equivalent project scope."
        />

        {/* -- 8. STATS ----------------------------------------------------─-- */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={STATS} align="center" />
        </div>

        {/* -- 9. HOW WE WORK ----------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="OUR APPROACH"
          headline="Fixed Prices. WooCommerce Standards. Full Code Ownership. No Lock-In."
          lead="WooCommerce built right should be maintainable by any WordPress developer, not just us. Here's how we build — and why it matters for your store's long-term health."
          reverseOnDesktop
          body={
            <>
              <p>
                FactoryJet has been building on WordPress and WooCommerce since before WooCommerce was called WooCommerce (it started as WooThemes Cart). That's 15+ years of WooCommerce experience — enough depth to know which approaches cause problems 2 years later and which ones hold up. We build for maintainability, not just for launch day.
              </p>

              <p>
                Every WooCommerce plugin or customization we write uses hooks and filters — WooCommerce's official extension points. No core file modifications, no template file edits that break on updates. Child themes where theme customization is needed. Composer-managed dependencies. Inline documentation. This is the standard for professional WooCommerce development, and it's non-negotiable for us.
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
                Fixed-price proposals on every project. We scope carefully, ask the right questions, and quote accurately — because cost overruns are a failure of scoping, not the client's problem. The price you get after the discovery call is the price you pay. No hourly billing, no scope creep invoices, no surprise additions at the end.
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
                  Our WooCommerce Development Standards
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { standard: 'Hooks and filters only', detail: 'No core edits — survives every update' },
                  { standard: 'Child theme architecture', detail: 'Customizations separate from parent theme' },
                  { standard: 'Plugin conflict testing', detail: 'Verified against your existing plugin stack' },
                  { standard: 'Core Web Vitals passing', detail: 'Performance measured, not assumed' },
                  { standard: 'WooCommerce HPOS ready', detail: 'High-performance order storage compatible' },
                  { standard: 'Full code documentation', detail: 'Every plugin shipped with inline docs' },
                  { standard: 'Staging → production', detail: 'No live site development, ever' },
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
          headline="From Discovery Call to Live Store — 5 Stages"
          lead="Every WooCommerce project follows the same structured process. Clear scope before development starts. No surprises mid-project. Full testing before launch."
          stages={JOURNEY_STAGES}
        />

        {/* -- 11. PRICING ---------------------------------------------------- */}
        <PricingTiers
          eyebrow="PRICING"
          headline="Fixed-Price WooCommerce Development Packages"
          lead="Starting prices for common WooCommerce project types. Every project gets a custom quote after the discovery call — scope drives price, and we don't quote without understanding what you need."
          tiers={PRICING_TIERS}
        />

        {/* -- 12. TESTIMONIALS --------------------------------------------─-- */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 500+ projects. Real results from real businesses."
        />

        {/* -- 13. FAQ -------------------------------------------------------- */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything US Businesses Ask About WooCommerce Development"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* -- 14. FINAL CTA -------------------------------------------------- */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Ready to build or improve your WooCommerce store?"
          sub="Book a free 30-minute discovery call. We'll scope your project, answer your technical questions, and give you a fixed-price proposal within 24–48 hours. No obligation."
          primaryCta={{ label: 'Book Your Free Discovery Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our E-Commerce Work', href: '/us/portfolio' }}
          objectionHandler="No commitment required. Fixed-price proposal within 24–48 hours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
