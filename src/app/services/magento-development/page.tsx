import type { Metadata } from 'next';
import Link from 'next/link';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { magentoDevelopmentAlternates } from '@/data/hreflangMap';

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
   Primary:   "magento development" (2,400/mo)
              "magento development services" (480/mo)
              "magento development company" (390/mo)
              "magento development agency" (210/mo)
   Secondary: "magento developer" · "magento ecommerce development"
              "magento 2 development" · "magento custom development"
--------------------------------------------------------------------------─-- */

export const metadata: Metadata = {
  title: 'Magento Development Company USA | FactoryJet',
  description:
    'US Magento development company. Magento 2 & Adobe Commerce builds, custom modules, migrations, and speed optimization. Fixed-price, milestone-paid.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Magento Development Company USA | Hire Magento Developers | FactoryJet',
    description:
      'Hire certified Magento developers for US businesses. Magento 2 & Adobe Commerce builds, custom modules, migrations from Magento 1, and performance optimization, delivered by senior engineers.',
    url: 'https://factoryjet.com/services/magento-development',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'Magento Development Services: FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magento Development Company USA | Hire Magento Developers | FactoryJet',
    description:
      'Hire certified Magento developers: Magento 2 & Adobe Commerce builds, custom modules, migrations & performance tuning.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/magento-development',
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
   JSON-LD Schemas, FAQPage · Service · BreadcrumbList
--------------------------------------------------------------------------─-- */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/magento-development#webpage',
  url: 'https://factoryjet.com/services/magento-development',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Magento Development Services',
  description:
    'Custom Magento and Adobe Commerce development for US e-commerce businesses, full store builds, module development, Magento 1 to 2 migrations, and performance optimization.',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '2014',
    areaServed: 'US',
    
  },
  serviceType: 'Magento Development',
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Magento Development', url: 'https://factoryjet.com/services/magento-development' },
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
    title: 'Technical Discovery.',
    description:
      'A technical call to review your Magento environment. We evaluate existing customizations, integrations, and goals. For migrations, we audit your legacy store. For new builds, we define full server architecture. You receive a fixed-price proposal before committing.',
  },
  {
    number: '02',
    title: 'Architecture & Planning.',
    description:
      'We document the full technical scope before coding. We map module structures, database schemas, and API integration points. For migrations, we catalog every custom extension. We decide what needs a custom rebuild versus native Magento 2 features.',
  },
  {
    number: '03',
    title: 'Development & Integration.',
    description:
      'Senior certified developers build your store or modules in staging. All code adheres to official Magento standards. We write inline documentation and run automated test suites. Code touches production only after passing full test suites.',
  },
  {
    number: '04',
    title: 'QA & Performance Testing.',
    description:
      'We run regression testing, load testing, and performance profiling. We verify checkout flows, external APIs, and mobile views. We measure Core Web Vitals and optimize server cache settings before launch.',
  },
  {
    number: '05',
    title: 'Launch + 30-Day Support.',
    description:
      `We deploy with zero-downtime procedures. We monitor orders and server logs for 48 hours. Every engagement includes 30 days of direct post-launch support. Issues get resolved immediately without extra ticket delays.`,
  },
];

const STATS = [
  {
    value: '25+',
    label: 'years of e-commerce development experience.',
    microcopy: 'including Magento since the earliest versions.',
    categoryLabel: 'EXPERIENCE',
  },
  {
    value: 'Fixed Price',
    label: 'milestone-paid Magento builds with full code ownership.',
    microcopy: 'senior-only team, predictable from quote to launch.',
    categoryLabel: 'PRICING MODEL',
  },
  {
    value: '500+',
    label: 'e-commerce projects delivered for US businesses.',
    microcopy: 'from module customizations to full migrations.',
    categoryLabel: 'TRACK RECORD',
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
    feature: 'Magento-certified developers.',
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
    feature: 'Magento 1 → 2 migration expertise.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Performance & Core Web Vitals.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'ERP / CRM integrations.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
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
    feature: 'Fixed price, confirmed before any work starts.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="off" kind="partial" />,
    ],
  },
  {
    feature: 'Magento coding standards compliance.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="off" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership + documentation.',
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
    priceRange: 'Get a quote',
    description:
      `Custom Magento 2 module development built to official coding standards. We build custom admin tools, pricing rules, and third-party API connections. Every module is documented, tested, and upgrade-safe.`,
    features: [
      'Custom module architecture and development.',
      'Admin UI components (grids, forms, ACL).',
      'Plugin / preference / observer patterns, done right.',
      'REST and GraphQL API integration.',
      'Unit and integration test coverage.',
      'Magento Marketplace-ready packaging if needed.',
      'Full code documentation.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Migration (M1 → M2)',
    priceRange: 'Get a quote',
    description:
      'Magento 1 to Magento 2 migration done properly. We transfer products, customer accounts, and order history. We rebuild custom extensions and craft modern Hyvä storefronts. Every integration is re-tested.',
    features: [
      'Pre-migration technical audit of your M1 store.',
      'Full data migration, products, orders, customers, CMS.',
      'Custom extension rebuild or M2 equivalent sourcing.',
      'Theme rebuild in Luma or Hyvä.',
      'Third-party integration re-wiring (ERP, CRM, shipping).',
      'Performance optimization: FPC, Varnish, Redis.',
      'UAT support and cutover planning.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Migration Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Full Store Build',
    priceRange: 'Talk to the founder',
    description:
      'A new Magento 2 store engineered for enterprise scale. We build custom themes, configure complex catalogs, and set up payment gateways. We integrate ERP systems and technical SEO foundations.',
    features: [
      'Magento 2 Open Source or Adobe Commerce setup.',
      'Custom theme on Hyvä or Luma.',
      'Full catalog configuration, attributes, facets, pricing rules.',
      'Multi-store or multi-currency setup if needed.',
      'Payment gateway + shipping carrier integration.',
      'ERP / CRM / 3PL integration.',
      'Full technical SEO, sitemap, schema, canonical, hreflang.',
      '30-day post-launch support.',
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
    answer: `Magento Open Source is the free self-hosted edition. Adobe Commerce adds advanced B2B features, customer groups, and visual catalog tools. Adobe Commerce also includes cloud hosting options. Most mid-market brands run successfully on Magento Open Source. Adobe Commerce is justified for large stores with complex wholesale rules.`,
    category: 'platform',
  },
  {
    question: 'Is Magento 2 good for large product catalogs?',
    answer: `Yes, Magento 2 excels at managing large product catalogs. It handles hundreds of thousands of SKUs with complex attributes. It supports advanced faceted filters and custom variants. When paired with Elasticsearch, Redis, and Varnish, it delivers fast search results. It outperforms other platforms on catalog scale.`,
    category: 'platform',
  },
  {
    question: 'What is Hyvä and should I use it for my Magento 2 store?',
    answer: `Hyvä is a modern frontend framework for Magento 2. It replaces the default Luma theme. It removes heavy legacy scripts like RequireJS and Knockout.js. Instead, it uses Alpine.js and Tailwind CSS. This speeds up page load times dramatically. For new builds, Hyvä is usually the best choice.`,
    category: 'platform',
  },
  {
    question: 'Does Magento work with B2B e-commerce?',
    answer: `Yes, B2B commerce is a major strength of Magento. Adobe Commerce includes native company accounts and custom price catalogs. It provides approval workflows, requisition lists, and quick SKU ordering. Magento Open Source also supports B2B through custom modules. We build custom portals tailored to your wholesale workflows.`,
    category: 'platform',
  },
  {
    question: 'Can Magento handle multiple stores and currencies?',
    answer: `Yes, Magento has outstanding multi-store architecture. A single backend can run multiple storefronts across different domains. Each storefront can have unique themes, catalogs, and pricing rules. Native multi-currency and multi-language support are built in. It is ideal for international and multi-brand operations.`,
    category: 'platform',
  },

  // -- Magento Migration --------------------------------------------------
  {
    question: 'Is Magento 1 still safe to use in 2025?',
    answer: `No, Magento 1 reached end of life in 2020. Adobe no longer provides security patches. Running Magento 1 exposes your business to automated malware attacks. Credit card compliance is difficult to maintain on unsupported software. Migrating to Magento 2 or a modern platform is critical.`,
    category: 'migration',
  },
  {
    question: 'What data migrates from Magento 1 to Magento 2?',
    answer: `We migrate product catalogs, categories, and custom attribute sets. We also transfer customer accounts and historical order data. CMS pages, blocks, and URL rewrites transfer smoothly. Custom legacy extensions must be rebuilt or replaced. Store themes must also be redesigned for Magento 2.`,
    category: 'migration',
  },
  {
    question: 'Can I migrate from Magento 1 to Shopify instead of Magento 2?',
    answer: `Yes, migrating to Shopify makes sense for certain businesses. If your catalog is simple, Shopify is a great option. It requires lower server maintenance. Do you need deep B2B pricing or large catalogs? Magento 2 remains the best choice. We evaluate both options during discovery.`,
    category: 'migration',
  },
  {
    question: 'Will my SEO rankings survive a Magento migration?',
    answer: `Yes, your rankings can survive intact with proper planning. We implement comprehensive 301 redirects for every legacy URL. We preserve URL paths and migrate all metadata and schema markup. We also submit clean XML sitemaps after launch. Careful planning protects your organic traffic.`,
    category: 'migration',
  },
  {
    question: 'How long does a Magento 1 to Magento 2 migration take?',
    answer: `Standard migrations take 8 to 12 weeks. Complex stores with many custom extensions take 12 to 20 weeks. The longest phases involve custom extension development and user testing. We provide a firm timeline after auditing your store.`,
    category: 'migration',
  },

  // -- Development Work --------------------------------------------------─
  {
    question: 'What is a Magento custom module?',
    answer: `A custom module is a package of code that extends Magento. Modules add custom features without altering core files. Examples include custom shipping calculators, product configurators, and ERP connectors. Modules use standard plugins and observers. They install via Composer and survive system updates.`,
    category: 'development',
  },
  {
    question: 'How do you integrate Magento with an ERP system?',
    answer: `ERP integrations sync data between Magento and your back-office software. Orders flow from Magento into your ERP. Inventory counts and pricing update from the ERP back to Magento. We build integrations using REST and GraphQL APIs. We also work with middleware platforms like Celigo.`,
    category: 'development',
  },
  {
    question: 'Can you fix or optimize an existing Magento 2 store?',
    answer: `Yes, we frequently optimize and repair existing Magento stores. Common tasks include fixing slow database queries and configuring Varnish cache. We also resolve buggy third-party extensions and patch security holes. We conduct a technical audit first and provide a fixed-price proposal.`,
    category: 'development',
  },
  {
    question: 'What Magento integrations do you support?',
    answer: `We integrate ERP systems like NetSuite, SAP, Sage, and QuickBooks. We connect CRMs like Salesforce and HubSpot. We also wire payment gateways like Stripe and PayPal. We connect shipping providers like ShipStation and FedEx. We handle PIM integrations with Akeneo as well.`,
    category: 'development',
  },
  {
    question: 'Do you follow Magento coding standards?',
    answer: `Yes, all FactoryJet developers follow official Magento standards. We never edit core files. We write clean code using plugins, observers, and service contracts. We adhere to PSR-2 code standards and write inline documentation. This ensures your store remains upgrade-safe and stable.`,
    category: 'development',
  },

  // -- Cost & Pricing ----------------------------------------------------─
  {
    question: 'Why is Magento development so expensive in the US?',
    answer: `Magento requires deep specialized engineering skills. Traditional agencies bill high hourly rates for certified developers. A single complex module can lead to massive invoices. FactoryJet uses fixed-price proposals with lean senior teams. You get top-tier expertise without open-ended hourly bills.`,
    category: 'cost',
  },
  {
    question: 'Do you charge hourly or fixed price for Magento development?',
    answer: `We charge fixed prices for Magento projects. Fixed pricing eliminates budget risk and ensures clear milestones. For ongoing support, we provide monthly retainer packages with defined hours. You always know project costs before development starts.`,
    category: 'cost',
  },
  {
    question: 'How much does a Magento performance optimization project cost?',
    answer: `Performance tuning is a fixed-price project scoped to your store. We audit slow database queries, caching layers, and extension code. We configure Varnish, Redis, and Elasticsearch. We also optimize frontend assets. We deliver a clear scope and price after our initial audit.`,
    category: 'cost',
  },
  {
    question: 'Is Magento more expensive to run than Shopify?',
    answer: `Magento Open Source has zero software licensing fees. However, it requires dedicated cloud hosting. Adobe Commerce adds an annual enterprise license fee. Shopify charges monthly plan fees and transaction cuts. For high-volume stores, Magento often costs less overall than enterprise SaaS.`,
    category: 'cost',
  },

  // -- Working with FactoryJet --------------------------------------------─
  {
    question: 'What happens during the Magento technical consultation?',
    answer: `The consultation is a 30 to 45 minute technical review. We discuss your current store setup, project goals, and timeline. For existing stores, we review admin and server configurations. We provide a detailed fixed-price proposal within 3 business days. There is zero sales pressure.`,
    category: 'factoryjet',
  },
  {
    question: 'Do you offer ongoing Magento maintenance and support?',
    answer: `Yes, we provide monthly maintenance retainers. Our retainers cover security patches, extension updates, and uptime monitoring. We also include allocated developer hours for minor updates. Every project includes 30 days of complimentary post-launch support.`,
    category: 'factoryjet',
  },
  {
    question: 'Have you worked on Magento projects for US businesses before?',
    answer: `Yes, FactoryJet has built Magento stores for US companies for 10 years. We have delivered B2B portals, retail stores, and ERP sync systems. We work exclusively with US clients during US business hours. You can review relevant case studies on our discovery call.`,
    category: 'factoryjet',
  },
  {
    question: 'Can I see examples of your Magento work?',
    answer: `Yes, we share relevant project examples during consultation calls. We keep certain client details confidential under agreements. However, we walk through architecture and code patterns for similar projects. You can also review published projects on our portfolio page.`,
    category: 'factoryjet',
  },
  {
    question: 'What time zone does FactoryJet work in for Magento projects?',
    answer: `We operate in US time zones. All meetings and calls take place during standard US business hours. We provide daily progress updates via Slack or email. For critical server emergencies, we provide fast help to keep your store online.`,
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
  name: 'How FactoryJet builds your Magento store',
  description: 'Our proven process for delivering professional, high-performance Magento stores for US businesses.',
  totalTime: 'P7D',
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

export default function MagentoDevelopmentPage() {
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
        formSlot={<HeroInlineForm region="us" source="us_services_magento_development_hero" />}
          eyebrow="MAGENTO DEVELOPMENT SERVICES"
          headline="Senior Magento developers. Fixed-price projects. fixed-price, milestone-paid."
          lead="We build custom modules, Magento migrations, and Adobe Commerce stores. We integrate enterprise ERP systems and tune server performance. Every project is delivered by certified Magento engineers at a fixed price."
          secondaryCta={{ label: 'View Our Work', href: '/portfolio' }}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Magento Development Services.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { service: 'Custom Module Development.', detail: 'Built to Magento coding standards.' },
                  { service: 'Magento 1 → 2 Migration.', detail: 'Data, extensions, theme, integrations.' },
                  { service: 'Adobe Commerce Builds.', detail: 'Full-stack B2B and B2C stores.' },
                  { service: 'Hyvä Theme Development.', detail: 'Modern, high-performance frontends.' },
                  { service: 'ERP / CRM Integration.', detail: 'NetSuite, Salesforce, SAP, and more.' },
                  { service: 'Performance Optimization.', detail: 'Varnish, Redis, Elasticsearch tuning.' },
                  { service: 'Security Patching.', detail: 'Up-to-date, hardened Magento installs.' },
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
                  Fixed-price Magento projects. Senior engineers on every engagement.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 2. LOGO BAR ---------------------------------------------------- */}
        <LogoBar tagline="500+ e-commerce businesses trust FactoryJet, from custom modules to full Magento migrations." />

        {/* -- 3. TRUST BLOCK ----------------------------------------------─-- */}
        <BigThreeTrustBlock
          eyebrow="WHY FACTORYJET FOR MAGENTO"
          headline="Magento-certified engineers. Fixed-price proposals. fixed-price, milestone-paid."
        />

        {/* -- 4. WHAT WE BUILD --------------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="WHAT WE BUILD"
          headline="Every Type of Magento Development, From Modules to Full Migrations."
          lead="Magento is a powerful platform. Professional development requires deep platform knowledge and careful design. Our engineers understand Magento internals deeply. Here is what we deliver."
          body={
            <>
              <p>
                Custom module development is our most frequent engagement. We build custom pricing engines and product configurators. We create wholesale ordering workflows and live ERP sync tools. Modules extend Magento cleanly without touching core files. Your custom features survive security patches and version updates.
              </p>

              <p>
                Magento 1 to Magento 2 migration requires careful execution. Flawed migrations cause organic ranking drops and broken integrations. We protect SEO rankings with precise 301 redirect mapping. We transfer all catalog data and rebuild necessary extensions. We deploy modern Hyvä or Luma themes. They load fast under high traffic.
              </p>

              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white shadow-sm">
                <div className="border-b border-fj-neutral-100 px-6 py-3">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    Magento Development Capabilities.
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-100">
                  {[
                    { area: 'Custom modules.', detail: 'Plugins, observers, preferences, service contracts.' },
                    { area: 'Theme development.', detail: 'Hyvä, Luma, custom frontend components.' },
                    { area: 'M1 → M2 migration.', detail: 'Data, extensions, theme, integrations, SEO.' },
                    { area: 'API integrations.', detail: 'REST, GraphQL, third-party webhooks.' },
                    { area: 'Performance tuning.', detail: 'Varnish, Redis, Elasticsearch, image optimization.' },
                    { area: 'B2B development.', detail: 'Company accounts, custom pricing, approval workflows.' },
                  ].map(({ area, detail }) => (
                    <div key={area} className="grid grid-cols-2 gap-4 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-fj-ink">{area}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Performance optimization is our third core focus. Misconfigured cache backends and unindexed tables slow down stores. Missing Varnish cache or Elasticsearch setups causes high server load. We audit your full hosting infrastructure. We fix speed bottlenecks at the root cause.
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
                  Common Magento Problems We Fix.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { problem: 'Still on Magento 1.', risk: 'Active security vulnerabilities, PCI issues.' },
                  { problem: 'Slow store (5s+ load).', risk: 'Lost conversions, Google ranking penalty.' },
                  { problem: 'Broken extensions.', risk: 'Checkout failures, data corruption.' },
                  { problem: 'No ERP sync.', risk: 'Manual inventory errors, overselling.' },
                  { problem: 'Unpatched security.', risk: 'Skimmer attacks, payment data theft.' },
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
          headline="Magento Development for US E-Commerce Businesses in Every Industry."
        />

        {/* -- 6. WHY MAGENTO MIGRATIONS FAIL -------------------------------- */}
        <StrategicDarkSection
          eyebrow="WHERE MAGENTO PROJECTS GO WRONG"
          headline="Three Reasons Magento Projects Go Over Budget and Miss Deadlines."
          lead="Magento is a powerful platform. Teams that lack depth face costly delays. Here is what causes most project failures, and how FactoryJet prevents them."
          pillars={[
            {
              title: 'Overlooking custom extension rebuild scope.',
              body: `Most older stores run 10 to 30 installed extensions. Some have modern equivalents available for purchase. Other extensions require custom rebuilds from scratch. Agencies that skip pre-migration audits often miss scope by 40 percent. FactoryJet audits every extension before quoting. We map exact requirements before writing code.`,
            },
            {
              title: 'Core file modifications that break on every patch.',
              body: `Editing core Magento files creates deep technical debt. Core edits get wiped out whenever you apply a security patch. This breaks checkout and forces expensive manual fixes. FactoryJet uses plugins, observers, and preferences exclusively. Your store stays secure and patches install cleanly.`,
            },
            {
              title: 'SEO ranking loss from poor migration planning.',
              body: `Careless migrations can lose 40 percent of organic traffic within 60 days. Missing 301 redirects confuse search crawlers. FactoryJet includes an exhaustive SEO migration checklist. We map every legacy URL, migrate metadata, and rebuild structured data schemas. We monitor Google Search Console closely after launch.`,
            },
          ]}
        />

        {/* -- 7. COMPARISON TABLE -------------------------------------------- */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. Freelancer vs. Traditional Agency vs. Budget Dev Shop"
          lead="Not all Magento developers are equal. Compare senior Magento expertise against alternatives. Choose the model that fits your operational needs."
          pullQuote={{
            stat: 'Fixed Price',
            caption: 'milestone-paid Magento builds with full code ownership, senior engineers on every project.',
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
          lead="Magento projects fail when teams lack platform depth. We have built on Magento since its earliest releases. Our development practices prevent the delays and bugs that merchants often face."
          reverseOnDesktop
          body={
            <>
              <p>
                Every FactoryJet project is led by senior Magento engineers. We do not assign generalist web developers to Magento codebases. Magento architecture demands deep expertise. We know how to optimize tables, indexers, and caching layers. That depth keeps your store fast.
              </p>

              <p>
                We follow strict coding standards on every project. We never modify core files. We write clean composer modules and PSR-2 compliant code. We document all architecture thoroughly. Any skilled developer can maintain your code with ease.
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
                Fixed-price proposals protect your budget. We scope technical requirements accurately before coding. If a migration requires extra development hours, we absorb the cost. We never bill overrun invoices. We audit first so our numbers remain firm.
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
                  Our Magento Engineering Standards.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { standard: 'No core file modifications.', detail: 'Plugins and preferences only, upgrade-safe.' },
                  { standard: 'PSR-2 code style.', detail: 'Consistent, readable, maintainable code.' },
                  { standard: 'Composer-managed deps.', detail: 'Proper version control for all packages.' },
                  { standard: 'Unit + integration tests.', detail: 'Automated test coverage before delivery.' },
                  { standard: 'Full code documentation.', detail: 'Every module ships with usage docs.' },
                  { standard: 'Staging → production.', detail: 'No direct-to-prod deploys, ever.' },
                  { standard: 'Performance verification.', detail: 'Load testing before launch clearance.' },
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
          headline="From Technical Discovery to Production, 5 Stages."
          lead="Every project follows a disciplined process. There are no mid-project surprises. We eliminate scope debates. You get a clear path to a working system in production."
          stages={JOURNEY_STAGES}
        />

        {/* -- 11. PRICING ---------------------------------------------------- */}
        <PricingTiers
          eyebrow="PRICING"
          headline="Fixed-Price Magento Development Packages."
          lead="Starting price estimates for common Magento projects. Every project receives a custom quote after discovery. Scope drives price. We audit technical requirements before quoting."
          tiers={PRICING_TIERS}
        />

        {/* -- 12. TESTIMONIALS --------------------------------------------─-- */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 on Google across 500+ projects. Real results from real businesses."
        />

        {/* -- 12b. HIRE MAGENTO DEVELOPERS. ----------------------------------- */}
        <section className="py-14 md:py-20 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">HIRE MAGENTO DEVELOPERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-5 max-w-3xl">Hire certified Magento developers (Magento 2 &amp; Adobe Commerce)</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#3A3A40] leading-relaxed space-y-4">
                <p>
                  Magento architecture demands careful execution. Bad technical decisions compound over time. When you{' '}
                  <strong>hire Magento developers</strong> through FactoryJet, you work directly with certified engineers. We have deployed Magento 2 and Adobe Commerce stores at scale. We never assign junior generalists to your budget. Our dedicated team owns architecture, code, and speed end to end.
                </p>
                <p>
                  Need ongoing capacity? Hire a dedicated Magento expert on a monthly retainer. We handle module development, version upgrades, and performance tuning. For broader project requirements, review our{' '}
                  <Link href="/services/ecommerce-development" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce development services</Link>.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E0] bg-white p-7">
                <h3 className="text-xl font-bold text-[#0F0F12] mb-3">When teams hire a certified Magento developer.</h3>
                <ul className="space-y-2.5 text-[#3A3A40] text-[15px]">
                  <li>• Building or replatforming on Magento 2 / Adobe Commerce.</li>
                  <li>• Migrating from Magento 1 before it costs you sales.</li>
                  <li>• Custom module &amp; B2B workflow development.</li>
                  <li>• Performance, security &amp; Core Web Vitals rescue.</li>
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
          headline="Everything US Businesses Ask About Magento Development."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1">
              <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce for US small businesses.</p>
              </a>
            </div>
          </div>
        </section>

        {/* -- 14. FINAL CTA -------------------------------------------------- */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Ready to talk Magento?"
          sub="Book a 30 to 45 minute technical consultation. We review your architecture and audit technical requirements. You receive a fixed-price proposal within 3 business days. There is zero obligation."
          primaryCta={{ label: 'Book Your Free Technical Consultation', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our E-Commerce Work', href: '/portfolio' }}
          objectionHandler="No commitment required. Fixed-price proposal delivered within 2-3 business days."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
