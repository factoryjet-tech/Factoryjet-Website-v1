import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/services/shopify-migration-agency';

export const metadata: Metadata = {
  title: 'Shopify Migration Agency | Zero-Downtime | FactoryJet.',
  description: 'Shopify migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, and BigCommerce to Shopify Plus with 100% SEO retention.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet.',
    description: 'Shopify migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, and BigCommerce to Shopify Plus with 100% SEO retention.',
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
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet.',
    description: 'Shopify migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, and BigCommerce to Shopify Plus with 100% SEO retention.',
    images: ['https://factoryjet.com/images/us/shopify-migration/hero.webp'],
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify Migration Agency', url: CANONICAL },
];

const MIGRATION_PLATFORMS = [
  {
    name: 'Magento / Adobe Commerce',
    slug: 'magento-to-shopify',
    link: '/replatforming/magento',
    badge: 'High Enterprise Demand',
    pain: 'Costly cloud hosting bills reach $4,000 to $15,000 monthly. Teams battle endless PHP security patches and fragile extensions. Slow catalog rendering hurts conversions.',
    solution: 'Automated database ETL converts complex EAV catalogs into clean Shopify metafields. Multipass preserves customer passwords. Brands lower ongoing ownership costs by 70%.',
    keyStats: ['70% lower TCO.', 'Zero server patching.', 'Sub-second checkout.'],
  },
  {
    name: 'WooCommerce / WordPress',
    slug: 'woocommerce-to-shopify',
    link: '/replatforming/woocommerce',
    badge: 'DTC & High-Growth Brands',
    pain: 'High-volume flash sales trigger database deadlocks and cart crashes. Plugin updates frequently break checkout steps. Slow mobile speeds degrade user experience.',
    solution: 'We migrate all products, order histories, and subscription tokens to Shopify Plus. Customers enjoy one-tap Shop Pay checkout backed by a 99.99% uptime SLA.',
    keyStats: ['99.99% uptime.', '1-tap Shop Pay.', 'Automated tax & fraud.'],
  },
  {
    name: 'BigCommerce Enterprise',
    slug: 'bigcommerce-to-shopify-plus',
    link: '/replatforming/bigcommerce',
    badge: 'B2B & Multi-Storefront',
    pain: 'Store owners face restrictive checkout customization limits and fragmented app tools. Sluggish API response times degrade speed during catalog promotions.',
    solution: 'We migrate B2B price lists and company accounts to Shopify Plus. We set Net terms and custom rules in Checkout Extensibility.',
    keyStats: ['Unified B2B + DTC.', 'Custom checkout rules.', 'Fast Storefront GraphQL.'],
  },
  {
    name: 'Salesforce Commerce Cloud (SFCC)',
    slug: 'salesforce-commerce-cloud-to-shopify-plus',
    link: '/replatforming/sfcc-to-shopify',
    badge: 'Global Enterprise Scale',
    pain: 'Brands face steep percentage-of-GMV licensing fees and proprietary vendor lock-in. Multi-month developer onboarding cycles stall product releases.',
    solution: 'We migrate multi-location catalogs to Shopify Plus Markets and modern Next.js frontends. Brands save over $300,000 annually in licensing and hosting fees.',
    keyStats: ['Save $300k+/yr licensing.', 'Modern React/Next.js stack.', 'Rapid sprint cadence.'],
  },
  {
    name: 'Custom PHP / Laravel / Rails',
    slug: 'custom-monolith-to-shopify',
    link: '/replatforming',
    badge: 'Bespoke Monoliths',
    pain: 'Legacy monoliths create dangerous single-point failures and tech debt. Unmaintained payment gateways create severe operational risks when core staff leave.',
    solution: 'We extract custom business logic into Shopify Functions and Webhooks. This eliminates custom servers and PCI compliance overhead completely.',
    keyStats: ['Zero technical debt.', 'PCI-DSS Level 1 compliance.', 'Full API extensibility.'],
  },
  {
    name: 'Squarespace / Wix',
    slug: 'squarespace-to-shopify',
    link: '/replatforming/squarespace',
    badge: 'Scaling SMBs',
    pain: 'Brands face strict catalog size limits and rigid checkouts. Basic platforms lack advanced ERP sync and global currency tools.',
    solution: 'We migrate catalogs and collections to custom Shopify themes. Stores gain multi-carrier shipping automation and higher conversions.',
    keyStats: ['Uncapped catalog scaling.', 'Multi-carrier shipping rules.', 'Advanced marketing integrations.'],
  },
];

const MIGRATION_DATA_PROTOCOLS = [
  {
    title: '100,000+ SKU Catalog & Metafields ETL.',
    desc: 'We map complex legacy databases directly into Shopify variants. We convert custom attributes into structured Metafields with zero data corruption.',
    points: ['Variant attribute preservation.', 'Media asset CDN transfer.', 'Custom metadata schema mapping.'],
  },
  {
    title: 'Customer Passwords & Historical Auth Continuity.',
    desc: 'We use Shopify Plus Multipass and token bridges to preserve password hashes. Customers log in smoothly post-migration with no reset emails needed.',
    points: ['Zero customer login friction.', 'Loyalty point & credit migration.', 'Encrypted customer data transfer.'],
  },
  {
    title: 'Historical Orders, Invoices & Tax Reconciliation.',
    desc: 'We import past orders, line items, and refund records into Shopify Plus. This ensures smooth customer service and accurate ERP financial reporting.',
    points: ['100% order history retention.', 'Financial settlement checks.', 'ERP & accounting sync continuity.'],
  },
  {
    title: '1:1 301 URL Redirect Mapping & SEO Shield.',
    desc: 'Every legacy URL maps to Shopify with strict 301 redirects. This preserves backlinks, domain authority, and search traffic.',
    points: ['Zero 404 crawl errors.', 'Google Search Console sync.', 'Backlink juice preservation.'],
  },
];

const ENTERPRISE_ETL_DATA = [
  {
    entity: 'Products & Multi-Variant Matrix.',
    source: 'Magento catalog_product_entity, WooCommerce wp_posts + wp_postmeta, SFCC product-catalog XML.',
    destination: 'Shopify GraphQL ProductCreate & ProductVariantsCreate mutations.',
    transformation: 'We normalize EAV attributes into Shopify options. Custom fields map directly to Metafields.',
    validation: 'Automated SKU counts verify variant parity. Image assets pass CDN delivery checks.',
  },
  {
    entity: 'Customer Accounts & Passwords.',
    source: 'Legacy customer database tables, bcrypt / Argon2 / SHA-256 password hashes, historical addresses.',
    destination: 'Shopify Plus Multipass API & Customer Account SSO tokens.',
    transformation: 'We bridge legacy password hashes to Shopify Multipass. Customers avoid forced password resets.',
    validation: 'We test logins across 500 sample accounts. Every sample profile authenticates cleanly.',
  },
  {
    entity: 'Historical Orders & Invoices.',
    source: 'Legacy sales_order, order line items, tax breakdown tables, fulfillment tracking numbers.',
    destination: 'Shopify Plus Orders API with historical fulfillment status and financial transaction logs.',
    transformation: 'We map line items, invoice IDs, and coupons. Ledger keys sync with ERP accounting systems.',
    validation: 'Financial settlement checks run against ledgers. Balances reconcile penny for penny.',
  },
  {
    entity: 'B2B Wholesale Price Lists & Accounts.',
    source: 'Custom B2B price tables and group tiers. Net payment terms and locations.',
    destination: 'Shopify Plus Native B2B Company, Location & Catalogs GraphQL schemas.',
    transformation: 'We map corporate hierarchies and tiered price lists. Company locations map to native B2B rules.',
    validation: 'We run wholesale checkout simulations. Buyer permissions and draft orders pass testing.',
  },
  {
    entity: 'SEO URL Rewrite Hierarchies.',
    source: 'Legacy url_rewrite tables, historical XML sitemaps, Google Search Console indexed URL inventory.',
    destination: 'Cloudflare Edge Worker 301 Redirect Rules & Shopify URL Redirect API.',
    transformation: 'We map legacy paths to Shopify URLs via regex. We strip query strings and old file extensions.',
    validation: 'Automated crawl checks verify 301 statuses. Every link lands with zero redirect loops.',
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Discovery, Architecture & Data Modeling.',
    timeline: 'Weeks 1 - 2.',
    desc: 'We extract legacy schemas and audit third-party integrations. We map custom product types and business logic into a data matrix.',
    deliverables: [
      'Comprehensive data dictionary and field mapping matrix. Covers products, customers, orders, and metafields.',
      'Third-party application rationalization matrix. Full API replacement strategy.',
      'Technical SEO baseline crawl audit. Complete legacy URL indexation inventory.',
      'Security and risk assessment. Full audit for customer auth and payment data.',
    ],
  },
  {
    phase: 'Phase 2: Automated ETL Pipeline & Test Migration.',
    timeline: 'Weeks 3 - 4.',
    desc: 'We write custom ETL scripts in Python and Node.js. Then we run test imports into a private staging store.',
    deliverables: [
      'Automated extraction scripts with idempotency safeguards. Full data sanitization.',
      'Initial staging import of full product catalog. Complete collections and custom metafields.',
      'Automated data validation reports. Flags missing attributes, orphan variants, or image issues.',
      'Review and sign-off on product presentation. Full alignment with category managers.',
    ],
  },
  {
    phase: 'Phase 3: Storefront Engineering & Custom App Integration.',
    timeline: 'Weeks 5 - 7.',
    desc: 'Our team builds your custom theme or Next.js frontend. We wire ERP middleware and checkout extensions.',
    deliverables: [
      'Custom Liquid 2.0 theme build. Decoupled Next.js 15 App Router storefront.',
      'Algolia or Searchspring instant search. Fast faceted filtering integration.',
      'Shopify Checkout Extensibility UI components. Custom upsells and shipping validation rules.',
      'ERP and WMS bidirectional middleware sync. NetSuite, SAP, Acumatica, and Brightpearl.',
    ],
  },
  {
    phase: 'Phase 4: Customer, Order & Subscription Data Migration.',
    timeline: 'Week 8.',
    desc: 'We migrate past orders, tax records, and tracking codes. Customer accounts and subscription contracts transfer cleanly.',
    deliverables: [
      'Historical order records and invoice data. Full financial settlement settlement.',
      'Customer profile migration. Shopify Multipass frictionless login configuration.',
      'Subscription contract migration. Recharge, Skio, or native Shopify Subscriptions.',
      'Loyalty points and reward balances transferred. Zero customer balance loss.',
    ],
  },
  {
    phase: 'Phase 5: Technical SEO Audit & 301 Redirect Shield.',
    timeline: 'Week 9.',
    desc: 'We validate the 1:1 301 redirect map at the edge. We verify canonical tags, sitemaps, and schema.',
    deliverables: [
      '1:1 301 permanent redirect map uploaded. Validated across staging edge proxies.',
      'Deep JSON-LD Schema.org graphs. Product, AggregateOffer, BreadcrumbList, Organization.',
      'Core Web Vitals lab and field validation. Guaranteed 95+ mobile performance score.',
      'Pre-launch Google Search Console URL inspection. Crawler simulation testing.',
    ],
  },
  {
    phase: 'Phase 6: End-to-End UAT, Load Testing & Staging Sign-Off.',
    timeline: 'Week 10.',
    desc: 'We test order placement, inventory deduction, and payment capture on staging stores. We verify tax rules, order tracking, and refund processing.',
    deliverables: [
      'End-to-end transactional testing. Covers credit cards, Shop Pay, PayPal, Apple Pay, and Klarna.',
      'Automated load testing. Simulates 10,000+ concurrent shoppers during flash-sale scenarios.',
      'ERP order ingestion checks. Inventory deduction testing in sandbox environments.',
      'Formal UAT sign-off. Full review across e-commerce, marketing, operations, and finance teams.',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime DNS Cutover & Hypercare War Room.',
    timeline: 'Launch Day & Post-Launch.',
    desc: 'We execute live cutovers using Cloudflare Edge routing. Delta order syncing runs smoothly. We provide 30 days of dedicated engineering hypercare.',
    deliverables: [
      'Delta sync of orders and customers. Captures records during the final cutover window.',
      'Zero-downtime DNS switchover. Live transaction settlement and webhook monitoring.',
      'Immediate post-launch search crawler indexing monitoring and 404 error log scanning.',
      '30-day dedicated post-launch hypercare engineering retainer with guaranteed SLA response times.',
    ],
  },
];

const FAQS = [
  {
    question: "Will our organic Google search traffic drop after migrating to Shopify Plus?",
    answer: "No. Traffic remains stable when technical steps are followed. We map legacy URLs to exact Shopify targets. 1:1 301 redirects keep traffic steady. We preserve meta tags, headers, and structured schema. Real-time Google Search Console monitoring protects your rankings.",
  },
  {
    question: "How do you prevent 404 errors during migration?",
    answer: "We crawl every URL indexed by search engines and historical server logs. Then we build a comprehensive 1:1 redirect map. Redirects run at the edge via Cloudflare Workers and Shopify native rules. Shoppers land directly on destination pages with zero 404 errors.",
  },
  {
    question: "What happens to our historical order records and invoices?",
    answer: "We migrate all past order records, line items, and addresses into Shopify Plus. Tax breakdowns, discount codes, and tracking numbers transfer cleanly. Your team retains complete order visibility in Shopify admin and ERP systems.",
  },
  {
    question: "Can existing customers log into Shopify without resetting their passwords?",
    answer: "Yes. On Shopify Plus, we implement Multipass auth and secure token bridging. Existing customers keep their original credentials. They log in smoothly on their first visit without disruptive password reset emails.",
  },
  {
    question: "What happens to customer loyalty points and store credit during migration?",
    answer: "We extract loyalty points and tier statuses. Store credit ledgers transfer cleanly. Then we import balances directly into your new loyalty app on Shopify Plus. Customers retain every dollar of credit.",
  },
  {
    question: "Will our store experience any downtime during the platform migration?",
    answer: "No. Your current store remains live and takes orders normally throughout development. We build and test everything on private staging servers. During cutover, we sync delta orders. We switch DNS in minutes with zero downtime.",
  },
  {
    question: "How do you handle orders placed on the old store right before DNS cutover?",
    answer: "We run an automated Delta Sync worker. Right after the DNS switch, our script scans for orders. It imports new records into Shopify Plus and forwards them to your warehouse.",
  },
  {
    question: "How does Shopify Plus connect to our ERP system like NetSuite or SAP?",
    answer: "We connect Shopify Plus to your ERP system. We use Shopify webhooks, Celigo, or custom middleware. This maintains real-time inventory counts and financial settlement.",
  },
  {
    question: "What happens to our custom third-party integrations and shipping carriers?",
    answer: "During initial discovery, we audit all 3PL warehouses, shipping calculators, and tax engines. We reconnect FedEx, UPS, and Avalara. We use verified connectors or custom Shopify Functions.",
  },
  {
    question: "Can you migrate our complex B2B wholesale pricing tiers and company accounts?",
    answer: "Yes. Shopify Plus offers native B2B wholesale features. We migrate corporate accounts and custom price lists. Volume breaks and Net terms map directly. You avoid extra app fees or separate storefronts.",
  },
  {
    question: "How long does an enterprise Shopify migration take?",
    answer: "Most enterprise migrations take 6 to 12 weeks from kickoff to launch. Timeline depends on catalog size, ERP complexity, and custom design needs. We work in two-week sprints with clear weekly milestone reviews.",
  },
  {
    question: "What is the pricing model for a Shopify Plus migration?",
    answer: "We operate on transparent, fixed-price milestone contracts. Scope covers data ETL, theme engineering, ERP connections, and redirect shields. You receive complete cost certainty with zero hourly billing overages.",
  },
  {
    question: "Who owns the code and intellectual property after migration?",
    answer: "You own 100% of all assets. Theme files and ETL code live in your private GitHub repository. All rights transfer to your company upon launch.",
  },
  {
    question: "How do you handle delta order sync during the DNS propagation window?",
    answer: "DNS propagation can take a few hours across global internet providers. Our delta worker continuously queries the legacy database for any orders. It imports new records into Shopify Plus. This prevents duplicate or lost shipments.",
  },
  {
    question: "How are custom product bundles, tiered quantity discounts, and custom pricing migrated?",
    answer: "We build native discount rules using Shopify Functions. These rules run server-side in checkout under 50 milliseconds. Shoppers enjoy fast checkout with zero client script lag.",
  },
  {
    question: "What happens to customer subscription tokens and recurring billing contracts?",
    answer: "We migrate saved payment tokens securely between payment gateways. Active subscriptions import into Recharge, Skio, or Shopify Subscriptions. Customers stay subscribed with no action needed.",
  },
  {
    question: "How do you migrate custom gift cards, store credit, and loyalty points?",
    answer: "Unused gift card balances export into Shopify Plus Gift Card APIs. We verify outstanding balances before and after cutover. This ensures exact ledger settlement with your finance team.",
  },
  {
    question: 'What makes custom ETL migration safer than Cart2Cart?',
    answer: "Generic migration apps use rigid field mappings. They often corrupt variant sets and truncate metafields. We write custom ETL scripts tailored to your database schema. This guarantees full data accuracy.",
  },
  {
    question: "How do you audit and verify that 100% of URLs are correctly 301 redirected?",
    answer: "We run automated crawls using headless browser scripts. Our test suite requests every legacy URL. It verifies that links return 301 codes and point to active Shopify pages.",
  },
  {
    question: "What post-launch support is provided after migration cutover?",
    answer: "Every migration project includes 30 days of dedicated hypercare support. We monitor server logs and Google indexing. We verify ERP sync health. Your store operates smoothly with senior engineer support.",
  },
];

const migrationPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Enterprise Shopify Migration & Replatforming Services',
      description:
        'Enterprise Shopify Plus migration agency specializing in zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
      provider: {
        '@type': 'Organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
        logo: 'https://factoryjet.com/FinalLogo.svg',
      },
      serviceType: 'E-Commerce Development',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
      description: 'Shopify migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, and BigCommerce to Shopify Plus with 100% SEO retention.',
      datePublished: '2026-01-15',
      dateModified: PAGE_MODIFIED,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & Principal E-Commerce Architect',
        url: 'https://factoryjet.com/about',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ],
};

export default function ShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationPageSchema) }}
      />
      <SiteHeader />

      <main className="pp-main">
        <div className="pp-container" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" />
            ENTERPRISE REPLATFORMING &amp; DATA MIGRATION
          </div>
          <h1 className="pp-hero-title">
            Enterprise Shopify Migration Agency: Zero Downtime. Zero SEO Loss.
          </h1>
          <p className="pp-hero-sub">
            Migrate your store from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus. We run automated database ETL. We preserve passwords and map 301 redirects. ERPs sync with zero downtime and full data integrity.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Shopify Migration Hero Lead"
              region="us"
              submitLabel="Request Free Migration Audit →."
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#migration-protocols"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>🛡️</span> Explore Migration Protocols
              </a>
              <a
                href="#migration-roadmap"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>🗓️</span> 7-Phase Sprint Roadmap
              </a>
            </div>
          </div>

          {/* Context-Aware Bespoke Hero Visual */}
          <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '1000px', margin: '2.5rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image
              src="/images/us/shopify-migration/hero.webp"
              alt="Enterprise 100,000 SKU Shopify Plus Database Migration Dashboard"
              width={1024}
              height={1024}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* ANSWER-FIRST EXECUTIVE BRIEF */}
        <section className="pp-section" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="pp-container" style={{ maxWidth: '1080px' }}>
            <div className="pp-section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="pp-badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#f97316', border: '1px solid rgba(234, 88, 12, 0.3)' }}>
                EXECUTIVE BRIEF.
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Enterprise Replatforming Fails (And How We Engineer Success).
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  Over <strong>68% of enterprise replatforming projects</strong> face severe post-launch issues. Brands suffer sudden search traffic drops of 30% to 60%. Broken accounts force messy customer password resets. Missing order records paralyze customer support. Unplanned launch downtime costs hundreds of thousands in lost revenue.
                </p>
                <p>
                  These failures stem from flawed migration engineering, not the destination platform. Many agencies rely on generic migration apps or unverified CSV exports. These tools truncate custom product metafields. They break parent-child variant links and fail to map complex URL hierarchies.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>FactoryJet treats replatforming as a disciplined software engineering process.</strong> We build custom, auditable database ETL pipelines in Python and Node.js. Our scripts extract raw data from legacy MySQL, PostgreSQL, or Oracle databases. We sanitize attributes and load records cleanly via Shopify Plus GraphQL APIs.
                </p>
                <p>
                  We use <strong>Shopify Multipass auth</strong> to keep customer password hashes intact. We validate 1:1 301 redirects at the edge. Coverage reaches 100% of historical URLs. We run live delta sync during cutover. This guarantees zero downtime and protects search rankings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 PLATFORM REPLATFORMING PATHS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">REPLATFORMING PATHWAYS.</span>
              <h2 className="pp-section-title">Select Your Source E-Commerce Platform.</h2>
              <p className="pp-section-sub">
                Explore platform-specific migration runbooks, data mapping protocols, and total cost of ownership comparisons.
              </p>
            </div>

            <div className="pp-grid-3">
              {MIGRATION_PLATFORMS.map((p, i) => (
                <div key={i} className="pp-card pp-platform-card">
                  <span className="pp-platform-badge">{p.badge}</span>
                  <h3 className="pp-platform-name">{p.name}</h3>
                  <div className="pp-platform-pain">
                    <strong>Legacy Pain:</strong> {p.pain}
                  </div>
                  <div className="pp-platform-sol">
                    <strong>Shopify Solution:</strong> {p.solution}
                  </div>
                  <div className="pp-platform-stats">
                    {p.keyStats.map((k, idx) => (
                      <span key={idx} className="pp-stat-pill">
                        {k}
                      </span>
                    ))}
                  </div>
                  <Link href={p.link} className="pp-platform-link">
                    Explore {p.name} Migration Guide →.
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 PILLARS OF ZERO DATA LOSS */}
        <section id="migration-protocols" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">ZERO DATA LOSS ARCHITECTURE.</span>
              <h2 className="pp-section-title">The 4 Pillars of Enterprise Migration Integrity.</h2>
              <p className="pp-section-sub">
                How our team guarantees data integrity. Complete continuity during high-volume replatforming.
              </p>
            </div>

            <div className="pp-grid-2">
              {MIGRATION_DATA_PROTOCOLS.map((m, i) => (
                <div key={i} className="pp-card pp-protocol-card">
                  <h3 className="pp-protocol-title">{m.title}</h3>
                  <p className="pp-protocol-desc">{m.desc}</p>
                  <ul className="pp-protocol-points">
                    {m.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', width: '100%', maxWidth: '1000px', margin: '3rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src="/images/us/shopify-migration/migration-war-room.webp"
                alt="301 URL Redirect Mapping and Migration War Room Analytics Dashboard"
                width={1200}
                height={896}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* ENTERPRISE DATA MAPPING & ATTRIBUTE NORMALIZATION MATRIX */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">DATABASE ETL MATRIX.</span>
              <h2 className="pp-section-title">Relational Schema to Shopify Plus Data Mapping Matrix.</h2>
              <p className="pp-section-sub">
                How our automated pipelines convert legacy database tables. Clean mapping into native Shopify GraphQL schemas.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Data Entity.</th>
                    <th>Source Relational Database Tables.</th>
                    <th>Shopify Plus Target Schema.</th>
                    <th>Transformation &amp; Normalization Logic.</th>
                    <th>Verification Checksum.</th>
                  </tr>
                </thead>
                <tbody>
                  {ENTERPRISE_ETL_DATA.map((e, i) => (
                    <tr key={i}>
                      <td className="pp-table-factor" style={{ fontWeight: 700, color: '#f97316' }}>{e.entity}</td>
                      <td style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{e.source}</td>
                      <td style={{ fontSize: '0.85rem', color: '#93c5fd' }}>{e.destination}</td>
                      <td style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{e.transformation}</td>
                      <td style={{ fontSize: '0.85rem', color: '#86efac' }}>{e.validation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMERCE ROI CALCULATOR */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">FINANCIAL MODELING.</span>
              <h2 className="pp-section-title">Calculate Your Replatforming ROI.</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate your direct cost savings from cutting legacy hosting fees. Calculate revenue gains from eliminating mobile checkout friction.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* 7-PHASE SPRINT ROADMAP (35+ DELIVERABLES) */}
        <section id="migration-roadmap" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SPRINT METHODOLOGY.</span>
              <h2 className="pp-section-title">The 10-Week Enterprise Replatforming Sprint Roadmap.</h2>
              <p className="pp-section-sub">
                A milestone-driven migration process. Designed for complete transparency, data checks, and zero launch risk.
              </p>
            </div>

            <div className="pp-roadmap-grid">
              {MIGRATION_ROADMAP.map((m, i) => (
                <div key={i} className="pp-card pp-roadmap-card">
                  <div className="pp-roadmap-header">
                    <span className="pp-roadmap-phase">{m.phase}</span>
                    <span className="pp-roadmap-time">{m.timeline}</span>
                  </div>
                  <p className="pp-roadmap-desc">{m.desc}</p>
                  <div className="pp-roadmap-deliv-title">Sprint Deliverables:</div>
                  <ul className="pp-roadmap-delivs">
                    {m.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE 20+ PAA FAQS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <FAQ
              headline="Frequently Asked Questions"
              lead="Granular, transparent answers to the most critical technical, SEO, customer auth, and operational migration questions."
              items={FAQS}
            />
          </div>
        </section>

        {/* FOUNDER E-E-A-T AUTHOR CARD */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '850px' }}>
            <AuthorCard variant="dark" />
          </div>
        </section>

        {/* REGIONAL SILO INTERLINKING */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container">
            <div className="pp-section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="pp-badge">US REGIONAL COVERAGE.</span>
              <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>
                Local E-Commerce Engineering Teams Across Major US Markets
              </h2>
            </div>
            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
