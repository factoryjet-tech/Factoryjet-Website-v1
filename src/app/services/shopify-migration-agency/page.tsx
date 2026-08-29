import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CANONICAL = 'https://factoryjet.com/services/shopify-migration-agency';

export const metadata: Metadata = {
  title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
  description:
    'Enterprise Shopify migration agency. Migrate from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus with zero downtime and 100% SEO preservation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
    description:
      'Enterprise Shopify migration agency. Migrate from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus with zero downtime and 100% SEO preservation.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/shopify-migration/hero.webp',
        width: 1024,
        height: 1024,
        alt: 'Enterprise Shopify Plus Migration Engineering Dashboard',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
    description:
      'Enterprise Shopify migration agency. Migrate from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus with zero downtime and 100% SEO preservation.',
    images: ['https://factoryjet.com/images/us/shopify-migration/hero.webp'],
  },
};

const MIGRATION_PLATFORMS = [
  {
    name: 'Magento / Adobe Commerce',
    slug: 'magento-to-shopify',
    link: '/replatforming/magento-to-shopify',
    badge: 'High Enterprise Demand',
    pain: 'Crippling hosting bills ($4k-$12k/mo), complex PHP security patch cycles, slow catalog rendering, and fragile third-party extension dependencies.',
    solution: 'Automated database ETL of complex EAV catalog models into clean Shopify metafields, customer password hash preservation, and 80% lower ongoing maintenance overhead.',
    keyStats: ['70% lower TCO', 'Zero server patching', 'Sub-second checkout'],
  },
  {
    name: 'WooCommerce / WordPress',
    slug: 'woocommerce-to-shopify',
    link: '/replatforming/woocommerce-to-shopify',
    badge: 'DTC & Growth Brands',
    pain: 'Frequent database lockups during traffic spikes, plugin version conflicts, slow checkout funnels, and constant vulnerability scans.',
    solution: 'Full product variants, customer order history, and subscription token migration to Shopify Plus with native Shop Pay checkout acceleration.',
    keyStats: ['99.99% uptime', '1-tap Shop Pay', 'Automated tax & fraud'],
  },
  {
    name: 'BigCommerce Enterprise',
    slug: 'bigcommerce-to-shopify-plus',
    link: '/replatforming/bigcommerce-to-shopify-plus',
    badge: 'B2B & Multi-Storefront',
    pain: 'Fragmented app ecosystem, restrictive checkout customization limits, and sluggish headless API response times under high concurrent load.',
    solution: 'Seamless migration of B2B price lists, parent-child company accounts, and custom logic to native Shopify Plus B2B and Checkout Extensibility.',
    keyStats: ['Unified B2B + DTC', 'Custom checkout rules', 'Fast Storefront GraphQL'],
  },
  {
    name: 'Salesforce Commerce Cloud (SFCC)',
    slug: 'salesforce-commerce-cloud-to-shopify-plus',
    link: '/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    badge: 'Global Enterprise Scale',
    pain: 'Excessive licensing percentages on GMV, vendor lock-in, multi-month developer onboarding cycles, and bloated legacy pipelines.',
    solution: 'Enterprise multi-currency, multi-location catalog migration to Shopify Plus Markets and Hydrogen/Next.js headless frontends, saving $300k+/year in licensing.',
    keyStats: ['Save $300k+/yr licensing', 'Modern React/Next.js stack', 'Rapid sprint cadence'],
  },
  {
    name: 'Custom PHP / Laravel / Rails',
    slug: 'custom-monolith-to-shopify',
    link: '/replatforming',
    badge: 'Bespoke Monoliths',
    pain: 'Accumulated technical debt, single-point-of-failure in-house codebases, unmaintained custom payment gateways, and high developer turnover risk.',
    solution: 'Architectural extraction of custom business logic into Shopify Functions and Webhook microservices, eliminating custom server maintenance entirely.',
    keyStats: ['Zero technical debt', 'PCI-DSS Level 1 compliance', 'Full API extensibility'],
  },
  {
    name: 'Squarespace / Wix',
    slug: 'squarespace-to-shopify',
    link: '/replatforming/squarespace-to-shopify',
    badge: 'Scaling SMBs',
    pain: 'Severe catalog size ceilings, lack of advanced ERP/inventory sync, rigid checkout flows, and minimal international tax/currency support.',
    solution: 'Rapid migration of catalog, collections, and brand assets to custom high-converting Shopify Liquid or headless storefronts.',
    keyStats: ['Uncapped catalog scaling', 'Multi-carrier shipping rules', 'Advanced marketing integrations'],
  },
];

const MIGRATION_DATA_PROTOCOLS = [
  {
    title: '100,000+ SKU Catalog & Metafields ETL',
    desc: 'We map complex legacy relational databases (EAV, custom attributes, hierarchical categories, bundled products, and downloadable assets) directly into Shopify native variants and structured Metafields with zero schema corruption.',
    points: ['Variant attribute preservation', 'Media asset CDN transfer', 'Custom metadata schema mapping'],
  },
  {
    title: 'Customer Passwords & Historical Auth Continuity',
    desc: 'We utilize Shopify Plus Multipass API and cryptographic token bridges (preserving bcrypt/Argon2 password hashes) so your existing customer base logs in seamlessly post-migration without frustrating password reset emails.',
    points: ['Zero customer login friction', 'Loyalty point & credit migration', 'Encrypted customer data transfer'],
  },
  {
    title: 'Historical Orders, Invoices & Tax Reconciliation',
    desc: 'Complete historical transaction and fulfillment data (order status, line items, refund history, custom invoice PDFs, and historical tax rates) imported into Shopify Plus for uninterrupted customer service and ERP consistency.',
    points: ['100% order history retention', 'Financial reconciliation checks', 'ERP & accounting sync continuity'],
  },
  {
    title: '1:1 301 URL Redirect Mapping & SEO Shield',
    desc: 'Every single legacy product, collection, blog post, and CMS page URL is cataloged and matched to its new Shopify equivalent with automated HTTP 301 redirects, preserving historical domain equity and organic rankings.',
    points: ['Zero 404 crawl errors', 'Google Search Console automated validation', 'Backlink equity preservation'],
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Architecture Audit & Data Extraction',
    timeline: 'Week 1–2',
    desc: 'Deep inspection of your legacy database schema, custom third-party integrations, ERP endpoints, payment gateways, and full URL inventory.',
    deliverables: [
      'Comprehensive database ETL mapping specification',
      'Integration compatibility and replacement matrix',
      'Full crawl and 301 URL redirect baseline inventory',
    ],
  },
  {
    phase: 'Phase 2: Shopify Plus Environment & Sandbox Setup',
    timeline: 'Week 2–3',
    desc: 'Provisioning enterprise Shopify Plus organization, configuring global markets, multi-currency settlement, and sandbox API pipelines.',
    deliverables: [
      'Shopify Plus enterprise organization structure',
      'Staging sandbox environment with secure developer access',
      'API rate limit configuration and webhook endpoints',
    ],
  },
  {
    phase: 'Phase 3: Catalog & Customer Data Extraction (ETL)',
    timeline: 'Week 3–4',
    desc: 'Executing automated data migration scripts in sandbox: products, variants, media, customer records, and order history.',
    deliverables: [
      'Full product and collection catalog import with metafields',
      'Customer accounts and historical address book migration',
      'Data integrity validation and automated schema reconciliation',
    ],
  },
  {
    phase: 'Phase 4: Storefront Theme & Custom Functions Engineering',
    timeline: 'Week 4–6',
    desc: 'Building high-performance Shopify Liquid or Next.js 15 headless frontend, custom cart drawers, and Checkout Extensibility validation rules.',
    deliverables: [
      'Custom sub-second responsive storefront engineering',
      'Shopify Checkout Extensibility and payment gateway configuration',
      'ERP, CRM (Klaviyo), and 3rd-party logistics (3PL) integration',
    ],
  },
  {
    phase: 'Phase 5: End-to-End User Acceptance Testing (UAT)',
    timeline: 'Week 6–7',
    desc: 'Rigorous simulated transactions, edge-case order processing, inventory sync testing, mobile responsiveness, and SEO redirect audits.',
    deliverables: [
      'End-to-end checkout, payment, and refund testing',
      '301 redirect map verification across 100% of URLs',
      'ERP inventory update and fulfillment tracking simulation',
    ],
  },
  {
    phase: 'Phase 6: Delta Data Sync & Zero-Downtime Cutover',
    timeline: 'Launch Weekend',
    desc: 'Syncing new orders and customer records created during development, performing DNS switchover, and executing live order validation.',
    deliverables: [
      'Real-time delta data sync of final orders and customers',
      'Zero-downtime Cloudflare DNS cutover',
      'Live payment capture and ERP fulfillment confirmation',
    ],
  },
  {
    phase: 'Phase 7: 30-Day Hypercare & Post-Launch Optimization',
    timeline: 'Post-Launch',
    desc: 'Dedicated technical engineering support, real-time conversion monitoring, Google Search Console indexing checks, and speed tuning.',
    deliverables: [
      '24/7 dedicated engineering hypercare war room',
      'Daily Google Search Console 404 and indexing log analysis',
      'Core Web Vitals and conversion telemetry optimization',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    factor: 'Server & Hosting Maintenance',
    shopify: 'Zero server maintenance. 99.99% cloud uptime managed entirely by Shopify infrastructure.',
    magento: 'Requires expensive dedicated AWS/Azure clusters ($3k-$15k/mo) + ongoing DevOps sysadmin contracts.',
    woocommerce: 'Frequent database crashes during flash sales; requires constant WP core and plugin patching.',
    salesforce: 'Proprietary enterprise cloud with complex multi-month release cycles and mandatory upgrade fees.',
  },
  {
    factor: 'Security & PCI Compliance',
    shopify: 'Native PCI-DSS Level 1 compliance out-of-the-box. Automated fraud analysis and security patching.',
    magento: 'Self-managed PCI compliance audits; high risk of credit card skimming malware (Magecart) if unpatched.',
    woocommerce: 'Vulnerable WordPress plugin attack surface; relies on third-party security firewalls.',
    salesforce: 'Enterprise-grade PCI compliance, but requires certified SFCC security engineers to maintain custom cartridges.',
  },
  {
    factor: 'Checkout Conversion & Speed',
    shopify: 'Highest-converting checkout in ecommerce: native 1-click Shop Pay, Apple Pay, and sub-second execution.',
    magento: 'Multi-step checkout with slow AJAX recalculations and third-party checkout extensions.',
    woocommerce: 'Clunky default checkout often bloated by multiple unminified JavaScript plugins.',
    salesforce: 'Customizable but heavy cartridge architecture resulting in slow mobile TTFB latency.',
  },
  {
    factor: 'Total Cost of Ownership (TCO)',
    shopify: 'Predictable SaaS tier with no unexpected hosting spikes or mandatory infrastructure overhauls.',
    magento: 'Very high TCO: expensive developer hourly rates, server hosting, licensing, and security patches.',
    woocommerce: 'Deceptively cheap upfront; expensive hidden costs in performance optimization and debugging.',
    salesforce: 'Extremely high TCO: GMV revenue share percentages + $250k+/year enterprise licensing contracts.',
  },
  {
    factor: 'App & Integration Ecosystem',
    shopify: '8,000+ modern apps with unified GraphQL APIs, Shopify Functions, and native Checkout Extensibility.',
    magento: 'Legacy marketplace with abandoned extensions that frequently conflict with core upgrades.',
    woocommerce: 'Fragile WordPress plugin directory with high rate of abandoned code and security CVEs.',
    salesforce: 'Limited AppExchange marketplace with high custom cartridge development costs.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'SEO', label: 'SEO & Organic Equity' },
  { key: 'Data', label: 'Data & Catalog Migration' },
  { key: 'Passwords', label: 'Customer Accounts & Passwords' },
  { key: 'Downtime', label: 'Downtime & Launch Safety' },
  { key: 'Integrations', label: 'ERP & Custom Integrations' },
  { key: 'Timeline', label: 'Timeline & Investment' },
  { key: 'B2B', label: 'B2B Wholesale Portals' },
  { key: 'Code Ownership', label: 'Code & IP Ownership' },
];

const FAQ_ITEMS = [
  {
    category: 'SEO',
    question: 'Will our organic Google search traffic drop after migrating to Shopify Plus?',
    answer:
      'Not when executed with our strict 1:1 URL redirect and SEO preservation protocol. We extract 100% of your historical URLs (products, collections, blog posts, static pages), build exact 301 redirect maps, preserve page metadata (titles, descriptions, H1s, schema markup), and submit updated XML sitemaps to Google Search Console immediately upon cutover. In fact, Shopify Plus’s faster page load times and mobile optimization typically produce a net increase in organic rankings within 30 to 60 days.',
  },
  {
    category: 'SEO',
    question: 'How do you prevent 404 errors during migration?',
    answer:
      'We crawl your entire website using Screaming Frog and Google Search Console historical export data to identify every indexable URL. Before DNS cutover, all legacy URL structures (e.g., Magento .html suffixes or WooCommerce category paths) are mapped to Shopify equivalents via automated regex redirect rules uploaded directly to Shopify URL Redirects and Cloudflare Edge rules.',
  },
  {
    category: 'Data',
    question: 'Can you migrate 100,000+ SKUs with complex product variants and custom attributes?',
    answer:
      'Yes. We build custom ETL (Extract, Transform, Load) pipelines that map legacy complex EAV databases, hierarchical categories, custom size charts, technical specifications, and downloadable digital assets directly into Shopify Plus native variants and structured Metafields without data truncation.',
  },
  {
    category: 'Data',
    question: 'What happens to our historical order records and invoices?',
    answer:
      'We import your complete historical order database (order IDs, customer details, line items, fulfillment status, and historical tax breakdowns) into Shopify Plus via the Admin API. This ensures your customer support team and ERP systems maintain uninterrupted historical order lookup.',
  },
  {
    category: 'Passwords',
    question: 'Can existing customers log into Shopify without resetting their passwords?',
    answer:
      'Yes, for enterprise replatforming on Shopify Plus. We utilize the Shopify Plus Multipass API and cryptographic password token bridges that allow customers to log in with their existing credentials without triggering jarring mass password reset emails.',
  },
  {
    category: 'Passwords',
    question: 'What happens to customer loyalty points and store credit during migration?',
    answer:
      'We export customer store credits, gift card balances, and loyalty reward tiers from your legacy platform (e.g. Yotpo, LoyaltyLion, Smile.io, or custom database tables) and migrate them directly into your new Shopify Plus loyalty setup with zero balance loss.',
  },
  {
    category: 'Downtime',
    question: 'Will our store experience any downtime during the platform migration?',
    answer:
      'Zero downtime. Your existing website remains 100% live and processing orders on your current platform throughout the entire design, development, and data migration process. On launch day, we perform a live delta data sync (capturing orders placed during staging) and execute an instant DNS cutover with zero interruption to customer checkout.',
  },
  {
    category: 'Downtime',
    question: 'How do you handle orders placed on the old store right before DNS cutover?',
    answer:
      'We execute a two-step migration process: a bulk data import during staging, followed by an automated delta sync immediately prior to DNS switchover. Any order or customer record created on the legacy platform right before launch is captured and reconciled into Shopify Plus within minutes.',
  },
  {
    category: 'Integrations',
    question: 'How does Shopify Plus connect to our ERP system (NetSuite, SAP, Microsoft Dynamics)?',
    answer:
      'We architect bidirectional middleware integrations connecting Shopify Plus Admin and Webhook APIs to your ERP system (NetSuite SuiteTalk, SAP, Microsoft Business Central, Acumatica, or custom warehouse management systems) for automated real-time inventory synchronization, order routing, and financial reconciliation.',
  },
  {
    category: 'Integrations',
    question: 'What happens to our custom third-party integrations and shipping carriers?',
    answer:
      'We evaluate your entire technology stack (ERP, CRM, 3PL warehouse, custom shipping rate calculators, tax engines like Avalara, and payment gateways) and implement modern Shopify Functions, Checkout Extensibility apps, or custom webhook microservices that deliver identical or improved functionality.',
  },
  {
    category: 'B2B',
    question: 'Can you migrate our complex B2B wholesale pricing tiers and company accounts?',
    answer:
      'Yes. We migrate complex wholesale pricing matrices, tiered quantity discounts, custom customer catalogs, net payment terms (Net 15/30/60), and corporate parent-child company accounts directly into native Shopify Plus B2B architecture.',
  },
  {
    category: 'Timeline',
    question: 'How long does an enterprise Shopify migration take?',
    answer:
      'A standard enterprise migration takes 6 to 10 weeks depending on catalog size, custom functionality, and ERP complexity. We work in structured 2-week sprints with transparent milestone deliverables and staging sandboxes for executive review.',
  },
  {
    category: 'Timeline',
    question: 'What is the pricing model for a Shopify Plus migration?',
    answer:
      'We operate on transparent, fixed-price sprint contracts with clearly defined milestones and deliverables. You receive a comprehensive architectural proposal detailing scope, timelines, and guarantees before work begins—with zero hidden hourly overages.',
  },
  {
    category: 'Code Ownership',
    question: 'Who owns the code and intellectual property after migration?',
    answer:
      'You own 100% of the code, GitHub repositories, design assets, and custom Shopify Functions. FactoryJet never uses proprietary locked middleware or ongoing license fees. Everything is documented and handed over to your internal team.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Enterprise Shopify Migration & Platform Replatforming Services',
  serviceType: 'Shopify Plus Migration Agency, Magento Replatforming, WooCommerce to Shopify & Database ETL',
  description:
    'Senior engineering-led Shopify migration services: zero-downtime database ETL, 100% SEO preservation, 1:1 301 redirects, customer password continuity, and ERP integrations.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/shopify-migration-agency#webpage',
  name: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
  description:
    'Enterprise Shopify migration agency. Migrate from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus with zero downtime and 100% SEO preservation.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Migration Agency', item: CANONICAL },
  ],
};

export default function ShopifyMigrationPage() {
  return (
    <>
      <script
        id="migration-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="migration-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="migration-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="migration-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. HERO BANNER SECTION ── */}
        <section
          className="pp-sec"
          style={{
            paddingTop: 'clamp(44px, 7vh, 88px)',
            paddingBottom: 'clamp(44px, 6vh, 72px)',
            background: '#FFFFFF',
          }}
        >
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Senior Shopify Plus Replatforming Engineering</span>
                </div>

                <h1
                  style={{
                    color: '#141414',
                    margin: '0 0 20px',
                    lineHeight: 1.12,
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(34px, 5.2vw, 56px)',
                  }}
                >
                  Shopify Migration Agency: Zero-Downtime Replatforming
                </h1>

                <p
                  className="pp-lead"
                  style={{
                    color: '#494852',
                    maxWidth: '52ch',
                    margin: '0 0 24px',
                    fontSize: 'clamp(16px, 1.8vw, 18.5px)',
                    lineHeight: 1.6,
                  }}
                >
                  Migrate your enterprise catalog, customer history, and custom workflows from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus with guaranteed 100% SEO ranking preservation and zero checkout downtime.
                </p>

                {/* Answer-First Executive Brief Block */}
                <div
                  style={{
                    background: '#F6F6F9',
                    borderLeft: '3px solid #FF5622',
                    padding: '14px 18px',
                    borderRadius: '0 12px 12px 0',
                    marginBottom: '24px',
                    maxWidth: '52ch',
                  }}
                >
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet is a senior engineering-led Shopify migration agency. We execute risk-free enterprise store migrations: automated 100,000+ SKU database ETL, customer password continuity via Multipass, 1:1 301 URL redirect SEO shields, NetSuite/SAP ERP synchronization, and guaranteed zero-downtime cutover.
                  </p>
                </div>

                {/* 2-Field In-Line Lead Capture Form */}
                <div style={{ maxWidth: '52ch', marginTop: '4px' }}>
                  <HeroInlineForm
                    source="shopify_migration_hero"
                    region="us"
                    submitLabel="Get Migration Blueprint"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '18px' }}>
                  <a
                    href="#migration-platforms"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13.5px',
                      color: '#494852',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF5622" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <span>Explore Zero-Downtime Migration Protocols ↓</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/shopify-migration/hero.webp"
                  alt="Enterprise Shopify Plus Migration Engineering Dashboard"
                  width={1024}
                  height={1024}
                  priority
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. TRUST METRIC STRIP ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '24px 0' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em' }}>
                  100%
                </div>
                <div style={{ fontSize: '13px', color: '#6A6975', fontWeight: 600, marginTop: '4px' }}>
                  SEO Redirect Integrity
                </div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#FF5622', letterSpacing: '-0.02em' }}>
                  Zero
                </div>
                <div style={{ fontSize: '13px', color: '#6A6975', fontWeight: 600, marginTop: '4px' }}>
                  Checkout Downtime
                </div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em' }}>
                  100,000+
                </div>
                <div style={{ fontSize: '13px', color: '#6A6975', fontWeight: 600, marginTop: '4px' }}>
                  Max SKU Catalogs Handled
                </div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em' }}>
                  6–8 Wks
                </div>
                <div style={{ fontSize: '13px', color: '#6A6975', fontWeight: 600, marginTop: '4px' }}>
                  Average Replatforming Sprint
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. PLATFORM MIGRATION MATRIX ── */}
        <section id="migration-platforms" className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <div className="rv-badge" style={{ marginBottom: '16px' }}>
                <span>Source Platform Protocols</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Replatforming Pathways to Shopify Plus
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Every legacy ecommerce platform has unique schema structures and architectural bottlenecks. We provide dedicated database ETL pipelines tailored to your current technology stack.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {MIGRATION_PLATFORMS.map((plat) => (
                <div
                  key={plat.name}
                  style={{
                    background: '#FAFAFC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FF5622', fontWeight: 700, background: 'rgba(255,86,34,0.08)', padding: '4px 10px', borderRadius: '100px' }}>
                      {plat.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
                    {plat.name}
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '13px', color: '#822A12', fontWeight: 600, margin: '0 0 6px' }}>
                      Legacy Bottlenecks:
                    </p>
                    <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: 0 }}>
                      {plat.pain}
                    </p>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '13px', color: '#1B6A28', fontWeight: 600, margin: '0 0 6px' }}>
                      Shopify Plus Architecture:
                    </p>
                    <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: 0 }}>
                      {plat.solution}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #E6E6EC', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {plat.keyStats.map((stat, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '12px', background: '#FFFFFF', border: '1px solid #E6E6EC', color: '#141414', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>
                        {stat}
                      </span>
                    ))}
                  </div>

                  {plat.link && (
                    <div style={{ marginTop: '16px' }}>
                      <Link
                        href={plat.link}
                        style={{ fontSize: '13px', color: '#FF5622', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                      >
                        Read Dedicated {plat.name} Guide →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04. 4 PILLARS OF ZERO DATA LOSS PROTOCOL ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Our 4 Pillars of Zero Data Loss &amp; SEO Integrity
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Platform migration is a delicate database extraction engineering project. We guarantee 100% structural fidelity across every customer, order, and search ranking.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {MIGRATION_DATA_PROTOCOLS.map((prot) => (
                <div
                  key={prot.title}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E6E6EC',
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
                    {prot.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#494852', lineHeight: 1.6, marginBottom: '20px' }}>
                    {prot.desc}
                  </p>
                  <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: '#6A6975', lineHeight: 1.6 }}>
                    {prot.points.map((pt, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. PLATFORM BENCHMARK COMPARISON TABLE ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Shopify Plus vs Magento vs WooCommerce vs Salesforce
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                An objective architectural and financial comparison of enterprise ecommerce platforms across infrastructure, security, and total cost of ownership.
              </p>
            </div>

            <div style={{ overflowX: 'auto', border: '1px solid #E6E6EC', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '760px', fontSize: '13.5px' }}>
                <thead>
                  <tr style={{ background: '#141414', color: '#FFFFFF' }}>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '20%' }}>Capability</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '26%', color: '#FF7A50' }}>Shopify Plus (Target)</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '20%' }}>Magento 2 (Adobe)</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '18%' }}>WooCommerce</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '16%' }}>Salesforce (SFCC)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={row.factor}
                      style={{
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F9F9FB',
                        borderBottom: '1px solid #E6E6EC',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 700, color: '#141414' }}>{row.factor}</td>
                      <td style={{ padding: '16px 20px', color: '#141414', fontWeight: 600, background: 'rgba(255,86,34,0.03)' }}>
                        {row.shopify}
                      </td>
                      <td style={{ padding: '16px 20px', color: '#6A6975' }}>{row.magento}</td>
                      <td style={{ padding: '16px 20px', color: '#6A6975' }}>{row.woocommerce}</td>
                      <td style={{ padding: '16px 20px', color: '#6A6975' }}>{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 06. INTERACTIVE REPLATFORMING ROI CALCULATOR ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '720px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Calculate Your Post-Migration Revenue Uplift
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Model how migrating to Shopify Plus’s sub-second checkout and 1-tap Shop Pay accelerates completion rates and recovers lost revenue.
              </p>
            </div>

            <CommerceRoiCalculator />
          </div>
        </section>

        {/* ── 07. 7-PHASE REPLATFORMING SPRINT ROADMAP ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(40px, 6vh, 64px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Our 7-Phase Enterprise Migration Methodology
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                From database schema extraction to live DNS cutover, every sprint is managed by senior software architects with transparent deliverables.
              </p>
            </div>

            {/* War Room Callout Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                background: '#FAFAFC',
                border: '1px solid #E6E6EC',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 40px)',
                marginBottom: '48px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#FF5622', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Live Cutover War Room
                </span>
                <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: '#141414', margin: '12px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Automated Delta Data Sync &amp; Real-Time Order Verification
                </h3>
                <p style={{ fontSize: '15px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                  On cutover day, our senior engineers operate in a dedicated launch war room. We run automated delta synchronization scripts to capture any orders or customer records placed during staging, verify 100% of 301 URL redirect maps, and monitor payment gateway webhooks in real time.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#141414', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    Zero Loss Database ETL
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    Automated 301 Verification
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    24/7 Hypercare Support
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E6E6EC' }}>
                <Image
                  src="/images/us/shopify-migration/migration-war-room.webp"
                  alt="FactoryJet Technical Migration Engineers Reviewing 301 Redirect Maps and Shopify Plus Cutover"
                  width={1200}
                  height={896}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {MIGRATION_ROADMAP.map((step, idx) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#FF5622', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Phase 0{idx + 1}
                    </span>
                    <span style={{ fontSize: '11.5px', background: '#F1F1F5', color: '#494852', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>
                      {step.timeline}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141414', margin: '0 0 10px' }}>
                    {step.phase}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.6, marginBottom: '16px' }}>
                    {step.desc}
                  </p>
                  <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '12.5px', color: '#6A6975', lineHeight: 1.55 }}>
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ marginBottom: '6px' }}>
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08. REGIONAL US COMMERCE SILO LINKS ── */}
        <section className="pp-sec" style={{ padding: 'clamp(48px, 6vh, 80px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
                US Regional E-Commerce Hubs
              </h2>
              <p style={{ fontSize: '15px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Explore local Shopify Plus and enterprise ecommerce engineering across major United States business corridors.
              </p>
            </div>

            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>

        {/* ── 09. VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 10. 16+ REAL BUYER TECHNICAL FAQS ── */}
        <FAQ
          eyebrow="SHOPIFY MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions: Enterprise Shopify Migration"
          lead="Direct, plain-English answers to what enterprise founders, CTOs, and ecommerce directors ask about platform replatforming:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAFC]"
        />

        {/* ── 11. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Migration Sprints</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Migrate Your Store to Shopify Plus?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Request a comprehensive technical migration scoping proposal. We will audit your legacy database, 301 URL redirect requirements, and custom integration endpoints.
            </p>

            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <HeroInlineForm
                source="shopify_migration_footer"
                region="us"
                submitLabel="Get Migration Blueprint"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
