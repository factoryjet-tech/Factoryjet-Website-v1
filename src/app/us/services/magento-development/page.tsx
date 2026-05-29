import type { Metadata } from 'next';
import Script from 'next/script';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { magentoDevelopmentAlternates } from '@/data/hreflangMap';

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
   Primary:   "magento development" (2,400/mo)
              "magento development services" (480/mo)
              "magento development company" (390/mo)
              "magento development agency" (210/mo)
   Secondary: "magento developer" · "magento ecommerce development"
              "magento 2 development" · "magento custom development"
--------------------------------------------------------------------------─-- */

export const metadata: Metadata = {
  title: 'Magento Development — Custom Adobe Commerce | FactoryJet',
  description:
    'Expert Magento development for US businesses. Custom modules, migrations & performance optimization. fixed-price, milestone-paid. Free consultation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Magento Development Services | FactoryJet',
    description:
      'Custom Magento and Adobe Commerce development for US businesses. Module development, migrations from Magento 1, performance optimization, and full-stack builds — delivered by senior engineers.',
    url: 'https://factoryjet.com/us/services/magento-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'Magento Development Services — FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magento Development Services | FactoryJet',
    description:
      'Custom Magento and Adobe Commerce development. Module builds, migrations, performance tuning',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/magento-development',
    languages: magentoDevelopmentAlternates,
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
      name: 'What is Magento development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magento development refers to building, customizing, and extending e-commerce stores on the Magento platform (now Adobe Commerce). This includes building new Magento 2 stores from scratch, developing custom modules and extensions, migrating stores from Magento 1 to Magento 2, integrating third-party systems (ERP, CRM, shipping), optimizing performance, and maintaining existing Magento installations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Magento development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magento development costs depend heavily on scope. A custom module or extension typically costs $2,000–$8,000. A full Magento 2 store build runs $8,000–$40,000+ depending on complexity. A Magento 1 to Magento 2 migration costs $5,000–$20,000. US agencies charge $150–$300/hour for Magento development. FactoryJet builds and migrates Magento stores at significantly lower cost with senior Magento-certified developers on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use Magento or Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magento (Adobe Commerce) is better for complex, high-volume e-commerce operations with advanced catalog management needs, custom B2B workflows, multi-store/multi-currency requirements, or deep ERP integrations. Shopify is better for straightforward retail operations that want speed to market, lower maintenance overhead, and a simpler tech stack. If you have more than 10,000 SKUs, complex product configurations, or B2B pricing rules, Magento is likely the right choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Magento still relevant in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Adobe Commerce (Magento 2) is a dominant enterprise and mid-market e-commerce platform, used by thousands of US businesses and powering billions in GMV. Adobe actively develops it with regular security patches and new features. Magento 1 reached end-of-life in 2020, so stores still running Magento 1 need to migrate. Magento 2 remains a top choice for businesses with complex catalog, B2B, or multi-store requirements that Shopify and WooCommerce cannot handle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Magento migration take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Magento 1 to Magento 2 migration typically takes 8–16 weeks depending on store complexity, data volume, and the number of custom extensions that need to be rebuilt. Simple stores with standard functionality migrate faster; stores with heavy custom code, complex catalog structures, or third-party integrations take longer. FactoryJet provides a detailed migration timeline and fixed-price proposal after a technical audit of your existing store.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does FactoryJet charge for Magento development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet provides fixed-price Magento development proposals based on your specific scope. Custom module development starts at $2,999. Full Magento 2 store builds start at $7,999. Magento 1 to Magento 2 migrations start at $4,999. All projects include senior Magento-certified developers, code documentation, and a 30-day post-launch support window. Request a free technical consultation for a custom quote.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Magento Development Services',
  description:
    'Custom Magento and Adobe Commerce development for US e-commerce businesses — full store builds, module development, Magento 1 to 2 migrations, and performance optimization.',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '1999',
    areaServed: 'US',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  serviceType: 'Magento Development',
  offers: {
    '@type': 'Offer',
    price: '2999',
    priceCurrency: 'USD',
    description: 'Custom Magento module development starting price',
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
      name: 'Magento Development',
      item: 'https://factoryjet.com/us/services/magento-development',
    },
  ],
};

/* ----------------------------------------------------------------------------─
   Section Data
--------------------------------------------------------------------------─-- */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Technical Discovery',
    description:
      'A technical call to understand your Magento environment, existing customizations, integrations, and goals. For migrations, we audit your Magento 1 store. For new builds, we define the full architecture. You get a fixed-price proposal before committing.',
  },
  {
    number: '02',
    title: 'Architecture & Planning',
    description:
      'We document the full technical scope: module structure, database schema, integration points, and deployment plan. For migrations, we map every custom extension and identify what needs to be rebuilt vs. replaced with a Magento 2 native equivalent.',
  },
  {
    number: '03',
    title: 'Development & Integration',
    description:
      'Senior Magento-certified developers build your store, modules, or migration in a staging environment. All code follows Magento coding standards, includes inline documentation, and passes automated testing before it touches your production environment.',
  },
  {
    number: '04',
    title: 'QA & Performance Testing',
    description:
      'Full regression testing, load testing, and performance profiling before any production deployment. We test checkout flows, third-party integrations, edge cases, and mobile responsiveness. Page speed and Core Web Vitals are measured and optimized.',
  },
  {
    number: '05',
    title: 'Launch + 30-Day Support',
    description:
      `We deploy to production with zero-downtime deployment practices, monitor for issues in the first 48 hours, and provide 30 days of post-launch support. No "we'll fix that in the next sprint" — issues get resolved on the same project.`,
  },
];

const STATS = [
  {
    value: '25+',
    label: 'years of e-commerce development experience',
    microcopy: 'including Magento since the earliest versions',
    categoryLabel: 'EXPERIENCE',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid Magento builds with full code ownership',
    microcopy: 'senior-only team — predictable from quote to launch',
    categoryLabel: 'PRICING MODEL',
  },
  {
    value: '500+',
    label: 'e-commerce projects delivered for US businesses',
    microcopy: 'from module customizations to full migrations',
    categoryLabel: 'TRACK RECORD',
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
    feature: 'Magento-certified developers',
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
    feature: 'Magento 1 → 2 migration expertise',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Performance & Core Web Vitals',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'ERP / CRM integrations',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
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
    feature: 'significantly lower cost than US agencies',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Magento coding standards compliance',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership + documentation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Module Development',
    priceRange: 'From $2,999',
    description:
      `Custom Magento 2 module or extension development — built to Magento coding standards, documented, and tested. Ideal for adding custom functionality, building admin features, or extending Magento's native capabilities.`,
    features: [
      'Custom module architecture and development',
      'Admin UI components (grids, forms, ACL)',
      'Plugin / preference / observer patterns — done right',
      'REST and GraphQL API integration',
      'Unit and integration test coverage',
      'Magento Marketplace-ready packaging if needed',
      'Full code documentation',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Migration (M1 → M2)',
    priceRange: 'From $4,999',
    description:
      'Magento 1 to Magento 2 migration — the right way. Full data migration (products, orders, customers), custom extension rebuild or replacement, theme rebuild, and integration re-wiring. No shortcuts.',
    features: [
      'Pre-migration technical audit of your M1 store',
      'Full data migration — products, orders, customers, CMS',
      'Custom extension rebuild or M2 equivalent sourcing',
      'Theme rebuild in Luma or Hyvä',
      'Third-party integration re-wiring (ERP, CRM, shipping)',
      'Performance optimization — FPC, Varnish, Redis',
      'UAT support and cutover planning',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Migration Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Full Store Build',
    priceRange: 'From $7,999',
    description:
      'A new Magento 2 (Adobe Commerce) store built from scratch — custom theme, configured catalog, payment and shipping setup, SEO foundation, and full third-party integrations. Sized for complex, high-volume operations.',
    features: [
      'Magento 2 Open Source or Adobe Commerce setup',
      'Custom theme on Hyvä or Luma',
      'Full catalog configuration — attributes, facets, pricing rules',
      'Multi-store or multi-currency setup if needed',
      'Payment gateway + shipping carrier integration',
      'ERP / CRM / 3PL integration',
      'Full technical SEO — sitemap, schema, canonical, hreflang',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Store Build Quote', modal: true, region: 'us' },
  },
] as const;

/* ─-- FAQ Categories ----------------------------------------------------─-- */
const FAQ_CATEGORIES = [
  { key: 'platform',    label: 'Platform & Technology' },
  { key: 'migration',   label: 'Magento Migration' },
  { key: 'development', label: 'Development Work' },
  { key: 'cost',        label: 'Cost & Pricing' },
  { key: 'factoryjet',  label: 'Working with FactoryJet' },
];

const FAQ_ITEMS = [
  // -- Platform & Technology ----------------------------------------------
  {
    question: 'What is the difference between Magento Open Source and Adobe Commerce?',
    answer: `Magento Open Source (formerly Magento Community Edition) is the free, self-hosted version of Magento 2. Adobe Commerce (formerly Magento Commerce / Enterprise Edition) is the paid version with additional features: advanced B2B functionality, customer segmentation, loyalty programs, visual merchandising, page builder, and cloud hosting options. Most small and mid-market businesses run on Magento Open Source. Adobe Commerce is typically justified at $5M+ GMV or when you need the advanced B2B and merchandising features.`,
    category: 'platform',
  },
  {
    question: 'Is Magento 2 good for large product catalogs?',
    answer: `Yes — Magento 2 is purpose-built for large, complex product catalogs. It handles hundreds of thousands of SKUs with configurable products, layered navigation, and complex attribute sets. Properly optimized (Elasticsearch for search, Varnish for full-page cache, Redis for session and cache storage), a Magento 2 store can handle enormous catalogs and high traffic volumes. This is where Magento outperforms Shopify and WooCommerce, which struggle with catalog complexity at scale.`,
    category: 'platform',
  },
  {
    question: 'What is Hyvä and should I use it for my Magento 2 store?',
    answer: `Hyvä is a modern Magento 2 frontend theme framework that replaces the default Luma theme. It uses Alpine.js and Tailwind CSS instead of RequireJS and Knockout.js — resulting in dramatically faster page load times (often 3–5x) and much simpler frontend code. For new Magento 2 builds in 2025, Hyvä is generally the right choice if you don't need Magento's native Page Builder. FactoryJet builds on Hyvä for new stores when performance is the priority.`,
    category: 'platform',
  },
  {
    question: 'Does Magento work with B2B e-commerce?',
    answer: `Yes — B2B is one of Magento's strongest use cases. Adobe Commerce includes native B2B features: company accounts, shared catalogs with customer-group pricing, custom purchase approval workflows, requisition lists, quick order by SKU, and net payment terms. Magento Open Source can handle basic B2B with extensions. If you need a complex B2B portal with negotiated pricing, buyer hierarchies, and approval workflows, Adobe Commerce is the right platform.`,
    category: 'platform',
  },
  {
    question: 'Can Magento handle multiple stores and currencies?',
    answer: `Yes — Magento's multi-store architecture is one of its strongest differentiators. A single Magento installation can run multiple websites, each with separate domains, themes, product catalogs, pricing, and tax configurations. Multi-currency and multi-language are supported natively. This makes Magento ideal for brands with separate B2B and B2C storefronts, regional stores with different catalogs, or wholesale and retail operations on the same platform.`,
    category: 'platform',
  },

  // -- Magento Migration --------------------------------------------------
  {
    question: 'Is Magento 1 still safe to use in 2025?',
    answer: `No — Magento 1 reached official end-of-life in June 2020. It no longer receives security patches from Adobe. Running a Magento 1 store in 2025 means running unpatched security vulnerabilities that are actively exploited by automated attacks. Payment card industry (PCI DSS) compliance is also increasingly difficult to maintain on an unsupported platform. If you're still on Magento 1, migration to Magento 2 or an alternative platform is urgent.`,
    category: 'migration',
  },
  {
    question: 'What data migrates from Magento 1 to Magento 2?',
    answer: `A proper Magento 1 to Magento 2 migration transfers: products and categories (including attributes and images), customers (account data and order history), orders and invoices, CMS pages and blocks, URL rewrites, and store configuration. What doesn't migrate automatically: custom Magento 1 extensions (they need to be rebuilt or replaced with M2 equivalents), custom theme code (the M2 theme is a rebuild), and integrations with third-party systems (APIs need re-wiring).`,
    category: 'migration',
  },
  {
    question: 'Can I migrate from Magento 1 to Shopify instead of Magento 2?',
    answer: `Yes — and for some businesses, that's the right move. If your Magento 1 store has a relatively simple catalog, standard checkout, and no deep custom functionality, migrating to Shopify may be simpler and cheaper than rebuilding on Magento 2. Magento 2 makes more sense when you need advanced catalog complexity, B2B features, multi-store, or deep custom workflows that Shopify can't handle. FactoryJet can advise on the right platform for your specific business after a discovery call.`,
    category: 'migration',
  },
  {
    question: 'Will my SEO rankings survive a Magento migration?',
    answer: `SEO can survive a Magento migration intact — but only if it's done carefully. The key factors: proper URL redirect mapping (all old URLs redirect 301 to new equivalents), preserved URL structure where possible, migrated meta titles and descriptions, maintained canonical tags, and proper sitemap resubmission after launch. FactoryJet includes an SEO migration checklist in every M1-to-M2 project. Poorly managed migrations lose 20–50% of organic traffic; well-managed ones are transparent to Google.`,
    category: 'migration',
  },
  {
    question: 'How long does a Magento 1 to Magento 2 migration take?',
    answer: `A straightforward Magento 1 migration with standard extensions takes 8–12 weeks. Stores with heavy custom code, complex catalog structures, or many third-party integrations take 12–20 weeks. The longest phases are typically extension auditing/rebuilding and UAT testing. FactoryJet provides a timeline estimate after a technical audit of your existing M1 store — we don't guess, we measure.`,
    category: 'migration',
  },

  // -- Development Work --------------------------------------------------─
  {
    question: 'What is a Magento custom module?',
    answer: `A Magento module is a self-contained package of code that extends or modifies Magento's functionality. Custom modules add features that aren't part of Magento's core — for example: a custom shipping rate calculator, a product configurator, a wholesale price management system, a custom loyalty rewards system, or a Magento-to-ERP sync. Modules follow Magento's architecture (plugins, observers, preferences, service contracts) and install via Composer without modifying core files.`,
    category: 'development',
  },
  {
    question: 'How do you integrate Magento with an ERP system?',
    answer: `ERP integration with Magento typically involves bidirectional data sync: order data flows from Magento to the ERP, and inventory/pricing/product data flows from the ERP to Magento. This is usually done via REST or GraphQL APIs on the Magento side, and the ERP's native API or an integration middleware (like Celigo or MuleSoft) on the other. FactoryJet builds direct API integrations as well as middleware-based integrations depending on your ERP and sync complexity requirements.`,
    category: 'development',
  },
  {
    question: 'Can you fix or optimize an existing Magento 2 store?',
    answer: `Yes — a significant portion of our Magento work is optimizing, debugging, or extending existing stores. Common projects include: performance optimization (slow load times, database query bottlenecks, cache configuration), security patching and hardening, fixing broken or poorly coded third-party extensions, adding new features without disrupting existing functionality, and resolving checkout or payment issues. We do a technical audit first, then provide a fixed-price proposal for the work.`,
    category: 'development',
  },
  {
    question: 'What Magento integrations do you support?',
    answer: `FactoryJet has built integrations between Magento 2 and a wide range of third-party systems: ERP (NetSuite, SAP, Sage, QuickBooks), CRM (Salesforce, HubSpot), payment gateways (Stripe, Authorize.Net, PayPal), shipping carriers and 3PLs (ShipStation, ShipBob, FedEx, UPS), marketing platforms (Klaviyo, Mailchimp, Dotdigital), and PIM systems (Akeneo). If you have a specific integration in mind, ask on the consultation call and we'll tell you what's involved.`,
    category: 'development',
  },
  {
    question: 'Do you follow Magento coding standards?',
    answer: `Yes — all FactoryJet Magento development follows official Magento coding standards and best practices. This means no core file modifications (everything via plugins, observers, or preferences), proper module structure (composer.json, registration.php, module.xml), PSR-2 coding style, Magento ECG code smell detection, and inline documentation. Code that follows these standards is maintainable, upgradeable, and won't break on Magento patches — which matters a lot for long-term stability.`,
    category: 'development',
  },

  // -- Cost & Pricing ----------------------------------------------------─
  {
    question: 'Why is Magento development so expensive in the US?',
    answer: `US Magento development is expensive for two reasons: Magento expertise is specialized (fewer developers know it deeply compared to WordPress or Shopify), and US agencies charge $150–$300/hour. A custom module that takes 40 hours to build properly costs $6,000–$12,000 at those rates. FactoryJet's senior Magento developers work at significantly lower hourly rates due to our lean team structure — delivering the same technical depth at significantly lower cost.`,
    category: 'cost',
  },
  {
    question: 'Do you charge hourly or fixed price for Magento development?',
    answer: `FactoryJet charges fixed prices for Magento projects whenever possible — we strongly prefer fixed-price over hourly billing because it eliminates scope creep risk for you and forces us to scope accurately. For well-defined projects (module development, migrations, new builds), we provide a fixed price after the discovery call. For ongoing retainer work (maintenance, support, iterative development), we offer monthly retainer packages with defined hours.`,
    category: 'cost',
  },
  {
    question: 'How much does a Magento performance optimization project cost?',
    answer: `Magento performance optimization typically costs $2,000–$6,000 depending on what's needed. A typical performance engagement includes a technical audit (identifying slow queries, cache misconfig, unoptimized extensions), Varnish and Redis configuration, image optimization, Elasticsearch tuning, and frontend asset optimization. We provide a fixed price after the audit. Some performance issues are simple configuration fixes; others require extension rewrites — we won't know until we look.`,
    category: 'cost',
  },
  {
    question: 'Is Magento more expensive to run than Shopify?',
    answer: `Magento 2 Open Source has no platform license fee, but it requires self-managed hosting — typically $200–$1,000/month for a properly configured server environment (Nginx, PHP-FPM, Redis, Elasticsearch, Varnish). Adobe Commerce adds a license fee starting at ~$22,000/year for smaller stores. Shopify charges $79–$399/month plus transaction fees. For high-volume stores, Magento's total cost is often lower than Shopify Plus ($2,300/month). For simpler operations, Shopify's lower infrastructure complexity often wins.`,
    category: 'cost',
  },

  // -- Working with FactoryJet --------------------------------------------─
  {
    question: 'What happens during the Magento technical consultation?',
    answer: `The free technical consultation is a 30–45 minute call where we understand your current Magento environment (or your requirements for a new build), your technical goals, your timeline, and any constraints. For existing stores, we'll ask you to share access to your Magento admin and hosting so we can do a technical audit before quoting. You'll get a fixed-price proposal within 2–3 business days of the audit. No obligation to proceed.`,
    category: 'factoryjet',
  },
  {
    question: 'Do you offer ongoing Magento maintenance and support?',
    answer: `Yes — FactoryJet offers monthly Magento maintenance retainers that cover: security patches and updates, performance monitoring, extension updates, bug fixes, and small development tasks. Retainers start at $599/month and are structured with a defined hours allocation. For larger ongoing development needs, we offer dedicated developer arrangements at a fixed monthly cost. Every project engagement includes 30 days of free post-launch support regardless of retainer.`,
    category: 'factoryjet',
  },
  {
    question: 'Have you worked on Magento projects for US businesses before?',
    answer: `Yes — FactoryJet has been building Magento stores and custom modules for US e-commerce businesses since Magento 1. Our portfolio includes B2B wholesale portals, multi-store retail operations, high-SKU catalog sites, and Magento-to-ERP integrations across a range of industries. We serve US clients exclusively and operate in US time zones for all client communication. Ask to see relevant Magento case studies on your consultation call.`,
    category: 'factoryjet',
  },
  {
    question: 'Can I see examples of your Magento work?',
    answer: `Yes — we share relevant Magento portfolio examples during the consultation call. Due to client confidentiality, we don't publish all projects publicly, but we'll show you work relevant to your specific type of project (B2B, multi-store, migration, custom module, etc.). You can also see general e-commerce work on our portfolio page. The best way to evaluate our technical depth is the consultation conversation — our developers talk through architecture, not just show screenshots.`,
    category: 'factoryjet',
  },
  {
    question: 'What time zone does FactoryJet work in for Magento projects?',
    answer: `FactoryJet serves US clients exclusively. We schedule all client communication (calls, reviews, demos) during US business hours — typically 9 AM–5 PM Eastern. Daily async updates are provided through your preferred tool (Slack, email, or project management). For urgent production issues, we provide same-day response during business hours and best-effort off-hours response for critical emergencies.`,
    category: 'factoryjet',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your Magento store',
  description: 'Our proven process for delivering professional, high-performance Magento stores for US businesses.',
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

/* ----------------------------------------------------------------------------─
   Page
--------------------------------------------------------------------------─-- */

export default function MagentoDevelopmentPage() {
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
      <Script id="howto-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
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
          eyebrow="MAGENTO DEVELOPMENT SERVICES"
          headline="Senior Magento developers. Fixed-price projects. fixed-price, milestone-paid."
          lead="Custom module development, Magento 1 to 2 migrations, Adobe Commerce builds, ERP integrations, and performance optimization — delivered by Magento-certified engineers since 1999."
          primaryCta={{ label: 'Get a Free Technical Consultation', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our Work', href: '/us/portfolio' }}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Magento Development Services
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { service: 'Custom Module Development', detail: 'Built to Magento coding standards' },
                  { service: 'Magento 1 → 2 Migration', detail: 'Data, extensions, theme, integrations' },
                  { service: 'Adobe Commerce Builds', detail: 'Full-stack B2B and B2C stores' },
                  { service: 'Hyvä Theme Development', detail: 'Modern, high-performance frontends' },
                  { service: 'ERP / CRM Integration', detail: 'NetSuite, Salesforce, SAP, and more' },
                  { service: 'Performance Optimization', detail: 'Varnish, Redis, Elasticsearch tuning' },
                  { service: 'Security Patching', detail: 'Up-to-date, hardened Magento installs' },
                  { service: 'Ongoing Maintenance', detail: 'Monthly retainers from $599/mo' },
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
                  Fixed-price Magento projects. Senior engineers on every engagement.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 2. LOGO BAR ---------------------------------------------------- */}
        <LogoBar tagline="500+ US e-commerce businesses trust FactoryJet — from custom modules to full Magento migrations" />

        {/* -- 3. TRUST BLOCK ----------------------------------------------─-- */}
        <BigThreeTrustBlock
          eyebrow="WHY FACTORYJET FOR MAGENTO"
          headline="Magento-certified engineers. Fixed-price proposals. fixed-price, milestone-paid."
        />

        {/* -- 4. WHAT WE BUILD --------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD"
          headline="Every Type of Magento Development — From Modules to Full Migrations"
          lead="Magento is a complex platform. Good Magento development requires deep platform knowledge, careful architecture, and engineers who understand how Magento's internals actually work. Here's what we deliver."
          body={
            <>
              <p>
                Custom module development is the most common Magento engagement. Whether you need a custom pricing engine, a product configurator, a wholesale ordering workflow, or a Magento-to-ERP data sync — modules let you extend Magento without touching core files, so your customizations survive upgrades and patches.
              </p>

              <p>
                Magento 1 to Magento 2 migration is the most high-stakes engagement. Getting it wrong means SEO ranking loss, broken integrations, and months of cleanup. Getting it right means seamless data transfer, rebuilt extensions that actually work on M2, and a performant Hyvä or Luma theme that holds up under load. FactoryJet has run this process enough times to know where migrations go wrong and how to prevent it.
              </p>

              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white shadow-sm">
                <div className="border-b border-fj-neutral-100 px-6 py-3">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    Magento Development Capabilities
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-100">
                  {[
                    { area: 'Custom modules', detail: 'Plugins, observers, preferences, service contracts' },
                    { area: 'Theme development', detail: 'Hyvä, Luma, custom frontend components' },
                    { area: 'M1 → M2 migration', detail: 'Data, extensions, theme, integrations, SEO' },
                    { area: 'API integrations', detail: 'REST, GraphQL, third-party webhooks' },
                    { area: 'Performance tuning', detail: 'Varnish, Redis, Elasticsearch, image optimization' },
                    { area: 'B2B development', detail: 'Company accounts, custom pricing, approval workflows' },
                  ].map(({ area, detail }) => (
                    <div key={area} className="grid grid-cols-2 gap-4 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-fj-ink">{area}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Performance optimization is the third major engagement type. A misconfigured Magento install — wrong cache backend, Elasticsearch not set up for search, no Varnish in front of the store — will be slow regardless of how well the code is written. We audit the full infrastructure stack, not just the application layer, and fix performance at the root cause.
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
                  Common Magento Problems We Fix
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { problem: 'Still on Magento 1', risk: 'Active security vulnerabilities, PCI issues' },
                  { problem: 'Slow store (5s+ load)', risk: 'Lost conversions, Google ranking penalty' },
                  { problem: 'Broken extensions', risk: 'Checkout failures, data corruption' },
                  { problem: 'No ERP sync', risk: 'Manual inventory errors, overselling' },
                  { problem: 'Unpatched security', risk: 'Skimmer attacks, payment data theft' },
                ].map(({ problem, risk }) => (
                  <div key={problem} className="py-3.5">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{problem}</p>
                    <p className="font-fj-mono text-[0.75rem] text-fj-neutral-400 mt-1">Risk: {risk}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Technical audit first. Fixed-price proposal second. No surprises.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 5. INDUSTRIES -------------------------------------------------- */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="Magento Development for US E-Commerce Businesses in Every Industry"
        />

        {/* -- 6. WHY MAGENTO MIGRATIONS FAIL -------------------------------- */}
        <StrategicDarkSection
          eyebrow="WHERE MAGENTO PROJECTS GO WRONG"
          headline="Three Reasons Magento Projects Go Over Budget and Miss Deadlines"
          lead="Magento is a powerful platform — and a punishing one for teams that don't know it deeply. Here's what causes most Magento project failures, and how FactoryJet avoids them."
          pillars={[
            {
              title: 'Underestimating custom extension rebuild scope',
              body: `Most Magento 1 stores have 10–30 installed extensions. Some have M2 equivalents you can buy. Some need to be rebuilt from scratch. Some were built by your previous agency and exist nowhere else. Agencies that don't audit every extension before quoting consistently underestimate this work by 30–50%. FactoryJet runs a full extension audit before providing a migration quote — we know what we're walking into before the first line of code is written.`,
            },
            {
              title: 'Core file modifications that break on every patch',
              body: `The most common Magento technical debt is core file modifications — code changes made directly to Magento's core files instead of through plugins or preferences. These modifications get overwritten every time you apply a security patch, causing broken functionality and forcing you to manually re-apply changes. FactoryJet never modifies core files. All customizations use Magento's official extension points, which means your store can be patched and upgraded without losing custom functionality.`,
            },
            {
              title: 'SEO ranking loss from poor migration planning',
              body: `A Magento migration that doesn't carefully handle URL redirects, canonical tags, and sitemap resubmission can lose 30–50% of organic traffic in the first 60 days after launch. FactoryJet includes a full SEO migration checklist in every M1-to-M2 project: URL mapping and redirect configuration, meta data migration, structured data rebuild, and post-launch Search Console monitoring. SEO preservation isn't an add-on — it's part of the migration scope.`,
            },
          ]}
        />

        {/* -- 7. COMPARISON TABLE -------------------------------------------- */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. Freelancer vs. US Agency vs. Offshore Shop"
          lead="Not all Magento developers are equal. Here's what separates senior Magento expertise from the alternatives — and what the decision actually costs."
          pullQuote={{
            stat: 'Fixed Price',
            caption: 'milestone-paid Magento builds with full code ownership — senior engineers on every project.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect 2025 US market rates. Hourly rates converted to project costs for a 40-hour custom module engagement."
        />

        {/* -- 8. STATS ----------------------------------------------------─-- */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={STATS} align="center" />
        </div>

        {/* -- 9. HOW WE WORK ----------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="OUR ENGINEERING APPROACH"
          headline="Fixed Prices. Senior Engineers. Magento Standards. Full Documentation."
          lead="Magento projects fail when teams don't know the platform deeply. We've been building on Magento since its early versions — and every principle of how we work is designed to prevent the outcomes most Magento clients have experienced before finding us."
          reverseOnDesktop
          body={
            <>
              <p>
                Every FactoryJet Magento project is handled by senior engineers who specialize in Magento — not generalist developers who work in whatever framework the project demands this week. Magento's architecture is nuanced enough that deep specialization matters: plugins vs. preferences vs. observers, EAV vs. flat tables, indexer management, and the caching layers that make the difference between a fast store and a slow one.
              </p>

              <p>
                We work to Magento coding standards on every project. No core file modifications. Proper composer.json and module registration. PSR-2 code style. Inline documentation. This isn't just good practice — it means your code can be maintained by any Magento developer, not just us. You're not creating a dependency on FactoryJet to understand your own codebase.
              </p>

              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Magento expertise you can verify. Fixed prices you can plan around. Code you'll still be able to maintain in 5 years.
                </p>
              </div>

              <p>
                Fixed-price proposals mean we scope accurately before we start. If we quote $4,999 for a migration and it takes longer than estimated, that's on us — not on you in the form of an overrun invoice. This requires thorough discovery, which is why we audit before we quote. It's more work upfront, but it's the only way to give a number we can stand behind.
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
                  Our Magento Engineering Standards
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { standard: 'No core file modifications', detail: 'Plugins and preferences only — upgrade-safe' },
                  { standard: 'PSR-2 code style', detail: 'Consistent, readable, maintainable code' },
                  { standard: 'Composer-managed deps', detail: 'Proper version control for all packages' },
                  { standard: 'Unit + integration tests', detail: 'Automated test coverage before delivery' },
                  { standard: 'Full code documentation', detail: 'Every module ships with usage docs' },
                  { standard: 'Staging → production', detail: 'No direct-to-prod deploys, ever' },
                  { standard: 'Performance verification', detail: 'Load testing before launch clearance' },
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
          headline="From Technical Discovery to Production — 5 Stages"
          lead="Every Magento project follows the same disciplined process. No surprises mid-project. No scope debates at the finish line. Just a clear path from discovery to a working, tested system in production."
          stages={JOURNEY_STAGES}
        />

        {/* -- 11. PRICING ---------------------------------------------------- */}
        <PricingTiers
          eyebrow="PRICING"
          headline="Fixed-Price Magento Development Packages"
          lead="Starting prices for common Magento project types. Every project gets a custom quote after the technical discovery call — scope drives price, and we don't quote accurately without auditing first."
          tiers={PRICING_TIERS}
        />

        {/* -- 12. TESTIMONIALS --------------------------------------------─-- */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 500+ projects. Real results from real businesses."
        />

        {/* -- 13. FAQ -------------------------------------------------------- */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything US Businesses Ask About Magento Development"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading — internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1">
              <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce for US small businesses</p>
              </a>
            </div>
          </div>
        </section>

        {/* -- 14. FINAL CTA -------------------------------------------------- */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Ready to talk Magento?"
          sub="Book a 30–45 minute technical consultation. We'll understand your project, audit what's needed, and give you a fixed-price proposal within 2–3 business days. No obligation."
          primaryCta={{ label: 'Book Your Free Technical Consultation', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our E-Commerce Work', href: '/us/portfolio' }}
          objectionHandler="No commitment required. Fixed-price proposal delivered within 2–3 business days."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
