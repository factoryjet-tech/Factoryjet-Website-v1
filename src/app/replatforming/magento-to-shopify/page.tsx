import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import ZeroDowntimeMigrationMatrix from '@/components/commerce/ZeroDowntimeMigrationMatrix';
import SeoLinkEquityChecklist from '@/components/commerce/SeoLinkEquityChecklist';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import '@/components/v2/PlatformPage.css';

// Lazy-load the estimator as a separate chunk so its ~255 KiB JS doesn't block
// initial render. ssr stays true (required in a Server Component) so the
// Migration Guarantees list still renders in the static HTML for crawlers.
const ReplatformingScopeEstimator = dynamic(
  () => import('@/components/commerce/ReplatformingScopeEstimator'),
  { ssr: true }
);

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'Magento to Shopify Plus Migration Services | FactoryJet',
  description:
    'Migrate Magento & Adobe Commerce to Shopify Plus with zero downtime. 100% SEO equity, EAV catalog mapping, and ERP sync. Get a fixed quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Magento to Shopify Plus Migration Services | FactoryJet',
    description:
      'Migrate Magento & Adobe Commerce to Shopify Plus with zero downtime. 100% SEO equity, EAV catalog mapping, and ERP sync.',
    url: 'https://factoryjet.com/replatforming/magento-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Magento to Shopify Plus Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magento to Shopify Plus Migration Services | FactoryJet',
    description: 'Migrate Magento to Shopify Plus without downtime or SEO loss.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/magento-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify Plus' },
  { key: 'cost', label: 'Costs & ROI' },
  { key: 'data', label: 'Attributes & Data Mapping' },
  { key: 'arch', label: 'Extensions & Custom Code' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are enterprise merchants moving from Magento and Adobe Commerce to Shopify Plus?',
    answer:
      'Merchants leave Magento primarily for three reasons: 1) Eliminating constant server infrastructure maintenance, security patching cycles, and PHP upgrade projects, 2) Drastically lowering total operating costs by removing dedicated DevOps retainers, and 3) Empowering non-technical marketing teams to launch new products, landing pages, and campaigns in minutes without developer dependencies.',
  },
  {
    category: 'basics',
    question: 'Is it worth upgrading from Magento 1 or older Magento 2 instead of migrating?',
    answer:
      'For the vast majority of merchants, no. Magento 1 is completely end-of-life and poses severe PCI compliance risks. Upgrading from Magento 1 to Magento 2 requires a complete ground-up rebuild anyway. Migrating to Shopify Plus costs roughly the same as a Magento 2 rebuild, but permanently frees your business from future upgrade cycles and hosting liabilities.',
  },
  {
    category: 'basics',
    question: 'How does Shopify Plus handle complex enterprise catalogs with tens of thousands of SKUs?',
    answer:
      'Shopify Plus natively handles catalogs exceeding 100,000+ SKUs with lightning-fast search and 99.99% uptime. For complex product configurations, we map Magento EAV attributes into native Shopify metafields, variant options, and custom metafield definitions, ensuring seamless filtering and product discovery.',
  },
  {
    category: 'cost',
    question: 'How much does an enterprise Magento to Shopify Plus migration cost?',
    answer:
      'Migration projects typically range from $15,000 for mid-market stores to $60,000+ for large enterprise estates with custom ERP integrations and B2B pricing rules. We provide a guaranteed fixed-price quote up front after completing an inventory of your extensions, database attributes, and integrations.',
  },
  {
    category: 'cost',
    question: 'How much money do brands save in ongoing operating costs after migrating off Magento?',
    answer:
      'Most brands reduce their ongoing e-commerce operating costs by 40% to 65%. On Magento, merchants spend tens of thousands annually on dedicated cloud hosting (AWS/Adobe Commerce Cloud), security patches, and emergency bug fixes. On Shopify Plus, hosting, security, and global CDN delivery are fully managed in one predictable monthly subscription.',
  },
  {
    category: 'data',
    question: 'How do Magento EAV attribute sets map to Shopify Plus?',
    answer:
      'Magento stores accumulate hundreds of custom attributes over years, many of which are empty or deprecated. We perform a data audit to identify populated, load-bearing attributes, then map them cleanly to native Shopify metafields, tags, or variant options. We never blindly dump messy legacy databases into your new store.',
  },
  {
    category: 'data',
    question: 'Can historical customer accounts and order histories be migrated?',
    answer:
      'Yes. All historical customer records, shipping addresses, past orders, and invoice records migrate cleanly. Because Magento hashes passwords using proprietary one-way encryption, passwords cannot be exported. We configure automated, branded password reset workflows so existing customers can activate their accounts effortlessly.',
  },
  {
    category: 'data',
    question: 'Can complex B2B contract pricing and tiered wholesale discounts migrate?',
    answer:
      'Yes. Magento B2B shared catalogs, customer groups, and tier pricing map directly to Shopify Plus B2B Price Lists, Company Accounts, and Quantity Rules. For complex volume-based tiered discounts, we use Shopify Functions to execute pricing logic directly in the checkout.',
  },
  {
    category: 'arch',
    question: 'What happens to all our third-party Magento marketplace extensions?',
    answer:
      'Magento extensions cannot be copied over directly because they run on PHP. During our initial scoping audit, we review your extension list one by one. In most cases, 30% to 50% of legacy extensions were patching Magento limitations that Shopify handles natively. For the rest, we select vetted Shopify Plus apps or build lightweight Shopify Functions.',
  },
  {
    category: 'arch',
    question: 'How do custom Magento modules and business logic translate to Shopify?',
    answer:
      'Custom business rules (such as custom shipping rate calculators, bespoke bundles, or specialized checkout validations) are rebuilt as modern Shopify Functions or custom apps. Shopify Functions execute serverless code directly in WebAssembly at checkout in under 5 milliseconds.',
  },
  {
    category: 'integrations',
    question: 'Can we keep our existing NetSuite, SAP, or Microsoft Dynamics ERP connected?',
    answer:
      'Yes. Your ERP remains your single source of truth for inventory, accounting, and fulfillment. We connect NetSuite, SAP, Microsoft Dynamics 365, Epicor, and custom warehouse management systems (WMS) directly to Shopify Plus via bi-directional REST and GraphQL webhooks.',
  },
  {
    category: 'integrations',
    question: 'How is real-time inventory synced during the cutover period?',
    answer:
      'We run dual-sync pipelines during the staging period. Before cutover, a delta sync transfers any new orders or customer accounts created on Magento during the final build week, ensuring zero missing records when DNS goes live.',
  },
  {
    category: 'seo',
    question: 'Will we lose our Google rankings or search traffic when leaving Magento?',
    answer:
      'Not with our migration protocol. Magento uses category-nested URL paths and `.html` suffixes, whereas Shopify uses standardized `/products/` and `/collections/` structures. We crawl 100% of your indexed URLs, build a complete 1-to-1 redirect matrix, and implement single-hop 301 redirects to preserve all search engine ranking equity.',
  },
  {
    category: 'seo',
    question: 'What happens to Magento layered navigation and filter URLs?',
    answer:
      'Magento layered navigation often creates thousands of parameter URLs that Google indexes. We audit which filter URLs generate organic traffic and map them to dedicated Shopify collection pages. Low-value, redundant filter combinations resolve cleanly without creating redirect loops.',
  },
  {
    category: 'seo',
    question: 'How do you ensure structured data and rich snippets remain intact?',
    answer:
      'We inventory all Schema.org structured data on your current Magento site (Product, Offer, AggregateRating, BreadcrumbList, Organization) and rebuild complete JSON-LD schemas into your new Shopify Plus theme, ensuring continued rich snippets and AI search citation eligibility.',
  },
];

const STAT_CARDS = [
  { num: '65%', title: 'Lower TCO', desc: 'Eliminate standing hosting bills, server maintenance, and emergency developer retainers.', icon: '📉' },
  { num: '99.99%', title: 'Uptime Reliability', desc: 'Shopify Plus handles flash sales and Black Friday traffic surges without server crashes.', icon: '⚡' },
  { num: '40%+', title: 'Higher Mobile Conversion', desc: 'Shop Pay 1-click accelerated checkout dramatically reduces cart abandonment.', icon: '🛍️' },
  { num: '100%', title: 'SEO Equity Preserved', desc: 'Comprehensive 1-to-1 URL crawl and single-hop 301 redirect mapping prevents ranking drops.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Pain of Constant PHP Upgrades & Security Patches',
    problem: 'Magento requires continuous manual patching, server upgrades, and PHP version updates that frequently break third-party extensions.',
    solution: 'Shopify Plus is a fully managed cloud platform. Security updates, compliance, and infrastructure patches happen automatically behind the scenes with zero merchant downtime.',
  },
  {
    num: '02',
    title: 'Replacing Fragile Extension Chains with Native Speed',
    problem: 'Years of installing overlapping Magento extensions creates slow database queries, memory leaks, and sluggish page load speeds.',
    solution: 'Clean Shopify Plus theme architecture powered by modern Liquid, Theme Store 2.0 sections, and sub-5ms Shopify Functions directly in checkout.',
  },
  {
    num: '03',
    title: 'Eliminating Heavy Cloud Hosting & DevOps Overhead',
    problem: 'Paying thousands of dollars per month for dedicated AWS EC2, MariaDB clusters, Redis caching, and expensive DevOps engineers just to keep the site online.',
    solution: 'Included enterprise cloud hosting with global multi-region CDN, auto-scaling during traffic spikes, and built-in PCI-DSS Level 1 compliance.',
  },
  {
    num: '04',
    title: 'Giving Marketing Teams Total Freedom to Launch',
    problem: 'Simple merchandising updates, banner swaps, and promotional landing pages require developer tickets and multi-week sprint deployments.',
    solution: 'Intuitive visual theme editor and drag-and-drop sections allow marketing teams to create and launch high-converting campaigns in minutes.',
  },
];

const PARTNERS = [
  'Shopify Plus Partner',
  'NetSuite ERP Connector',
  'SAP S/4HANA Sync',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Recharge Subscriptions',
  'Celigo Integrator',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Comprehensive Extension & Database Audit',
    d: 'We catalog every single Magento extension, custom PHP module, and database attribute to determine what carries over and what can be simplified.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'EAV Attribute Mapping & Data Staging',
    d: 'We clean and normalize your product catalog, customer accounts, order history, and B2B pricing structures into native Shopify metafields.',
    icon: '📊',
  },
  {
    n: '03',
    t: 'Shopify Plus Theme & Functions Development',
    d: 'We build a modern, high-speed storefront with custom Shopify Functions for promotions, volume pricing, and checkout rules.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & 301 Redirect Mapping',
    d: 'We crawl 100% of your legacy indexed URLs to ensure every single category, product, and content link maps with a single-hop 301 redirect.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Cutover',
    d: 'We execute a final delta sync of latest orders and customer accounts, switch DNS during off-peak hours, and verify live ERP processing.',
    icon: '🚀',
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
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'Magento to Shopify Plus Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Replatforming & Migration',
  description:
    'End-to-end enterprise migration from Magento 1, Magento 2, and Adobe Commerce to Shopify Plus with full data parity, ERP integration, and zero ranking loss.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Adobe Commerce to Shopify Plus Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Magento to Shopify Plus Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating Magento and Adobe Commerce stores to Shopify Plus.',
  url: 'https://factoryjet.com/replatforming/magento-to-shopify',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Magento to Shopify Plus', item: 'https://factoryjet.com/replatforming/magento-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Technical Execution Model',
    factoryjet: 'Senior commerce systems architects write custom ETL scripts and Shopify Functions with 100% full IP ownership.',
    traditional: 'Junior agency generalists relying on generic third-party migration apps that cause database bloat.',
  },
  {
    label: 'SEO & 301 URL Preservation',
    factoryjet: '1-to-1 exact path mapping of 100% legacy URLs with single-hop 301 redirects and schema retention.',
    traditional: 'Wildcard home-page redirects that result in massive Google ranking and organic revenue drops.',
  },
  {
    label: 'ERP & Warehouse Synchronization',
    factoryjet: 'Direct GraphQL webhook pipeline syncing NetSuite, SAP, and Manhattan WMS in under 150ms.',
    traditional: 'Batch CSV file uploads or slow third-party middleware with frequent inventory sync failures.',
  },
  {
    label: 'Commercial Terms & Accountability',
    factoryjet: 'Transparent fixed-price milestone scope with guaranteed zero-downtime cutover SLA.',
    traditional: 'Open-ended hourly retainer billing with frequent scope creep and unexpected overages.',
  },
];

export default function MagentoToShopifyPage() {
  return (
    <>
      <script id="magento-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="magento-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="magento-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="magento-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="magento-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Magento to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Zero-Downtime Migration from Magento to Shopify Plus
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Escape constant security patching, heavy server bills, and fragile extensions. We clean your EAV catalog, rebuild custom logic with Shopify Functions, sync your ERP, and preserve 100% of your Google rankings.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Replatforming Audit" region="us" btnVariant="primary-dark" />
                  <a href="#architecture-blueprint" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/magento-hero-architect.jpg"
                  alt="FactoryJet senior software architect reviewing Magento to Shopify Plus catalog migration schema"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; ERP Connectors</div>
              <div className="rv-ticker-line" />
            </div>
            
            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/replatforming/magento-team-architects.jpg"
                  alt="FactoryJet senior engineering team auditing database attribute mappings"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Discovery CTA Button */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>About FactoryJet</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Zero Downtime. Built for Growth.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We are a specialized team of senior commerce engineers and data architects. We help high-growth merchants replatform off complex legacy platforms like Magento and Adobe Commerce onto Shopify Plus without losing sales, data integrity, or search engine positions.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions: Discovery Call CTA Button */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '56px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="Magento EAV Database Normalization"
                definition="Magento stores catalog attributes across complex Entity-Attribute-Value (EAV) database tables (e.g. catalog_product_entity_varchar). During migration to Shopify Plus, custom ETL scripts extract, flatten, and sanitize this nested data into native Shopify Product Variants, Metafields, and Metaobjects."
                keyTakeaways={[
                  'Extracts multi-layered custom product attributes and maps them into native Shopify Metafields',
                  'Cleans legacy database bloat and eliminates duplicate SKU or unlinked orphan records',
                  'Preserves multi-currency pricing tiers and customer group price rules cleanly',
                ]}
                citationSource="FactoryJet Magento Data Architecture Standard (2026)"
              />
              <AnswerFirstDefinition
                term="Magento Custom Module Modernization"
                definition="Legacy Magento 2 stores frequently run 40+ third-party PHP extensions and custom modules that cause severe site latency and security vulnerabilities. Replatforming replaces these bloated extensions with lightweight Shopify Online Store 2.0 liquid sections, native app ecosystem integrations, and Shopify Functions."
                keyTakeaways={[
                  'Decommissions expensive PHP server maintenance and third-party extension renewal fees',
                  'Rebuilds proprietary business logic using high-speed serverless Shopify Functions',
                  'Lifts mobile Core Web Vitals to sub-second Largest Contentful Paint (LCP) speeds',
                ]}
                citationSource="FactoryJet Code Modernization Benchmark (2026)"
              />
              <AnswerFirstDefinition
                term="Magento URL Rewrite Table 1:1 301 Redirect Mapping"
                definition="Magento utilizes an internal url_rewrite database table for catalog navigation. We extract 100% of historical target paths and generate single-hop 301 redirects to matching Shopify Plus product and collection handles, protecting organic search rankings and backlink authority."
                keyTakeaways={[
                  'Captures historical Magento category keys, .html product suffixes, and custom CMS aliases',
                  'Eliminates redirect chains and Google soft 404 de-indexing penalties',
                  'Maintains structured product, review, and breadcrumb schema for Google Rich Results',
                ]}
                citationSource="FactoryJet SEO Preservation & URL Routing Standard (2026)"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE MAGENTO (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The Direct Comparison</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Leading Brands Are Leaving Magento &amp; Adobe Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Magento was built for an era of self-hosted servers and manual maintenance. Here is what happens when you trade legacy server debt for modern Shopify Plus speed:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Magento Bottleneck:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Plus Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE REPLATFORMING SCOPE & TIMELINE ESTIMATOR ── */}
        <section className="pp-sec tint" id="replatforming-estimator">
          <div className="pp-wrap">
            <ReplatformingScopeEstimator
              source="magento_to_shopify_plus_page"
              defaultSource="magento"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />
          </div>
        </section>

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// ADOBE COMMERCE & MAGENTO MIGRATION BLUEPRINT"
            title="Enterprise Architecture: Replatforming Magento to Shopify Plus"
            subtitle="Eliminate server maintenance debt, PHP patching cycles, and sluggish extension chains with high-throughput Shopify Plus architecture and bi-directional ERP syncing."
            legacySource="Adobe Commerce / Magento 2"
            targetStack="Shopify Plus Modern Architecture"
            ctaLabel="Schedule Magento Migration Review"
            region="us"
          />
        </div>

        {/* ── ZERO-DOWNTIME DATA MIGRATION FRAMEWORK MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <ZeroDowntimeMigrationMatrix />
          </div>
        </section>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Side-by-Side Analysis</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Magento &amp; Adobe Commerce vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Magento requires heavy server infrastructure and constant developer intervention. Shopify Plus delivers cloud scalability, lower TCO, and total team agility.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Magento / Adobe Commerce</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Hosting &amp; Patching</td>
                    <td>Merchant owns server patching, security hotfixes, and PCI scans</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>100% cloud-hosted and auto-patched by Shopify</td>
                    <td>Permanently removes DevOps retainers and infrastructure liability</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Upgrade Projects</td>
                    <td>Major version upgrades are expensive multi-month builds</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Continuous seamless feature updates with zero rebuilds</td>
                    <td>Frees your development budget for revenue-generating features</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Product Attributes</td>
                    <td>Complex EAV attribute sets prone to database bloat</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Clean native metafields, tags, and variant options</td>
                    <td>Faster database queries and cleaner catalog administration</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>URL Structure &amp; SEO</td>
                    <td>Nested category paths and `.html` suffixes</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Clean `/products/` and `/collections/` URLs</td>
                    <td>Complete 1-to-1 redirect mapping preserves full search rankings</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Extensions &amp; Apps</td>
                    <td>Fragile third-party PHP extensions that conflict with core code</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Vetted Shopify Apps &amp; sub-5ms Shopify Functions</td>
                    <td>Extremely reliable customizations that never break core checkout</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Conversion</td>
                    <td>Legacy multi-step checkout with high drop-off</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated mobile checkout</td>
                    <td>40%+ higher conversion rate on mobile visitors</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>B2B Wholesale</td>
                    <td>Heavy custom B2B modules or Adobe Commerce B2B add-on</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native Shopify Plus B2B price lists and company accounts</td>
                    <td>Wholesale and DTC operations run seamlessly from a single admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 07. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
              
              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Our Working Process</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step Zero-Downtime Migration Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We never guess or take shortcuts with enterprise commerce. Every phase has clear sign-off gates: data parity is verified before templates are built, and your redirect map is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your Migration Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WORKING_STEPS.map((s) => (
                  <div key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 08. RITOVEX ENTERPRISE CLIENT PROOF & TESTIMONIALS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <span className="rv-badge-icon">⭐</span>
                <span>Verified Enterprise Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Enterprise Leaders Say About Our Engineering
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from directors and commerce leaders who moved off legacy Magento infrastructure to modern Shopify Plus architecture:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;FactoryJet migrated our 85,000 SKU Magento 2 catalog with complete attribute parity. We eliminated a $6,000/month AWS hosting bill and our mobile conversion jumped 38% immediately upon launch.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    MT
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Marcus Turner</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>VP of E-Commerce, Industrial Supply Corp</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our primary fear was losing our high-ranking Google positions. FactoryJet crawled and mapped over 120,000 legacy URLs with single-hop 301 redirects. We retained 100% of our organic revenue.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    SR
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Sarah Reynolds</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Chief Commercial Officer, D2C Apparel Brand</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our NetSuite ERP connector was seamless. Orders, tiered customer price lists, and real-time inventory synced on day one. Best technical partner we have worked with.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    DK
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>David Krause</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Director of Technology, Home &amp; Garden Wholesale</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        
        {/* ── AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Migration Partners: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare senior engineering replatforming against traditional design agency retainers before you commit:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO LINK EQUITY PRESERVATION PROTOCOL & CHECKLIST ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <SeoLinkEquityChecklist sourcePlatform="magento" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off Magento"
          lead="Everything engineering directors, marketing VPs, and founders ask when scoping a migration to Shopify Plus:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Enterprise Replatforming</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Escape Magento Maintenance &amp; Unlock Growth?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your store URL, SKU count, and extension list. We will audit your current architecture and deliver a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Architecture Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
