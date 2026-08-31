import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import ReplatformingScopeEstimator from '@/components/commerce/ReplatformingScopeEstimator';
import ZeroDowntimeMigrationMatrix from '@/components/commerce/ZeroDowntimeMigrationMatrix';
import SeoLinkEquityChecklist from '@/components/commerce/SeoLinkEquityChecklist';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'WooCommerce to Shopify Migration Services | FactoryJet',
  description:
    'Migrate WooCommerce to Shopify with zero downtime. Clean WordPress database tables, transfer order history, and protect SEO. Get a fixed quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WooCommerce to Shopify Migration Services | FactoryJet',
    description:
      'Migrate WooCommerce to Shopify with zero downtime. Clean WordPress database tables, transfer order history, and protect SEO.',
    url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'WooCommerce to Shopify Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce to Shopify Migration Services | FactoryJet',
    description: 'Migrate WooCommerce to Shopify with zero downtime or SEO loss.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify' },
  { key: 'database', label: 'Database & Plugin Cleanup' },
  { key: 'speed', label: 'Speed & Hosting' },
  { key: 'cost', label: 'Costs & Fixed Pricing' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are WooCommerce store owners switching to Shopify?',
    answer:
      'WooCommerce store owners switch to Shopify to eliminate the endless maintenance cycle of broken WordPress plugin updates, slow MySQL database queries, server crashes during flash sales, and security vulnerabilities. Shopify provides 99.99% uptime, 1-click Shop Pay checkout, and zero server maintenance overhead.',
  },
  {
    category: 'basics',
    question: 'How long does a WooCommerce to Shopify migration take?',
    answer:
      'Standard WooCommerce migrations take between 2 to 5 weeks depending on catalog size, custom plugin logic, and third-party integrations. We provide an initial technical audit and a fixed-schedule roadmap before starting any work.',
  },
  {
    category: 'database',
    question: 'How do you clean up bloated WordPress wp_postmeta and plugin tables during export?',
    answer:
      'WooCommerce stores often accumulate hundreds of thousands of orphaned rows in MySQL wp_postmeta and custom plugin tables. We run automated sanitization scripts to extract clean product schemas, variants, customer records, and order history into normalized Shopify metafields.',
  },
  {
    category: 'database',
    question: 'How are WooCommerce custom product add-ons and subscriptions handled on Shopify?',
    answer:
      'We replace fragile PHP subscription and custom field plugins with modern Shopify native Subscriptions (e.g. Recharge or native Shopify Subscriptions) and custom line-item properties, ensuring all recurring billing tokens transfer cleanly without customer re-entry.',
  },
  {
    category: 'speed',
    question: 'How much faster will our store be after moving to Shopify?',
    answer:
      'Most merchants experience a 40% to 70% reduction in page load latency. Shopify serves content through a global multi-region CDN with automated asset compression, image optimization, and sub-100ms server response times, regardless of traffic spikes.',
  },
  {
    category: 'speed',
    question: 'Will our store crash during Black Friday or major flash sales on Shopify?',
    answer:
      'No. Unlike self-hosted WordPress servers that require expensive caching and database scaling, Shopify handles over 40,000 checkout transactions per minute and sustained peak traffic during Black Friday Cyber Monday with 99.99% guaranteed uptime.',
  },
  {
    category: 'cost',
    question: 'How much does a WooCommerce to Shopify migration cost?',
    answer:
      'Our fixed-price WooCommerce migrations typically range between $8,000 and $25,000 depending on catalog size, custom theme redesign requirements, and third-party app integrations. We guarantee no surprise billable hours.',
  },
  {
    category: 'cost',
    question: 'How much do brands save by eliminating WordPress hosting and maintenance retainers?',
    answer:
      'Store owners typically save between $5,000 and $25,000 annually by eliminating specialized managed WordPress hosting (e.g. WP Engine, Kinsta, Cloudways), security monitoring tools, and developer retainers for weekly plugin troubleshooting.',
  },
  {
    category: 'seo',
    question: 'Will our organic Google search traffic drop when moving from WooCommerce?',
    answer:
      'Not with our migration protocol. WooCommerce uses custom permalink structures. We crawl 100% of your existing indexed URLs, generate an exhaustive 1-to-1 redirect map, and deploy single-hop 301 redirects to ensure all search rankings and customer bookmarks transfer smoothly.',
  },
  {
    category: 'seo',
    question: 'What happens to Yoast SEO or Rank Math metadata during migration?',
    answer:
      'We extract all custom meta titles, meta descriptions, canonical URLs, and Open Graph tags stored in Yoast SEO or Rank Math database fields and import them directly into Shopify SEO fields and structured JSON-LD schemas.',
  },
  {
    category: 'cutover',
    question: 'How do you ensure zero lost orders during DNS switchover?',
    answer:
      'We execute a delta sync immediately prior to DNS cutover to capture all recent customer accounts, orders, and fulfillment updates. We switch DNS during off-peak hours and monitor real-time payment transactions on Shopify.',
  },
  {
    category: 'cutover',
    question: 'Can customer reviews and ratings from WooCommerce plugins be migrated?',
    answer:
      'Yes. Reviews from plugins like Judge.me, Yotpo, Loox, or native WooCommerce comment reviews are exported, cleaned, and imported directly into your chosen Shopify review platform with verified buyer badges intact.',
  },
];

const STAT_CARDS = [
  { num: '99.99%', title: 'Guaranteed Uptime', desc: 'Eliminate server crashes during flash sales and peak marketing campaigns.', icon: '⚡' },
  { num: '$15k+', title: 'Annual Savings', desc: 'Eliminate expensive managed hosting, security plugins, and emergency PHP bug fixes.', icon: '💰' },
  { num: '50%', title: 'Higher Checkout Speed', desc: 'Shop Pay 1-click accelerated checkout reduces cart abandonment on mobile devices.', icon: '🛍️' },
  { num: '100%', title: 'SEO Rankings Preserved', desc: 'Comprehensive 1-to-1 301 URL redirect mapping protects all organic search rankings.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Frustration of Broken WordPress Plugin Updates',
    problem: 'Updating WooCommerce or third-party PHP plugins frequently breaks site styling, checkout flows, or database connections.',
    solution: 'Shopify handles all core software updates, security patches, and hosting infrastructure automatically with zero merchant intervention.',
  },
  {
    num: '02',
    title: 'Eliminating Slow Database Queries and Server Crashes',
    problem: 'Bloated MySQL wp_postmeta tables and shared hosting environments cause sluggish page loads and site downtime during flash sales.',
    solution: 'Shopify delivers sub-second page loads globally via global multi-region CDNs and handles unlimited concurrent traffic spikes effortlessly.',
  },
  {
    num: '03',
    title: 'Unlocking Shop Pay 1-Click Checkout Conversion',
    problem: 'Multi-step WooCommerce checkouts have high friction and significant mobile cart abandonment rates.',
    solution: 'Shop Pay enables over 150 million pre-authenticated shoppers to complete purchases in a single click, instantly boosting conversions.',
  },
  {
    num: '04',
    title: 'Giving Marketing Teams Total Creative Freedom',
    problem: 'Editing WooCommerce page layouts requires complex shortcodes, page builders (Elementor/Divi), or child theme coding.',
    solution: 'Shopify Online Store 2.0 visual drag-and-drop sections allow marketing teams to create dynamic landing pages in minutes.',
  },
];

const PARTNERS = [
  'Shopify Partner',
  'Shop Pay Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Judge.me Verified Partner',
  'Recharge Subscriptions',
  'Cloudflare CDN',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Database & Plugin Audit',
    d: 'We inspect your WooCommerce database, custom post types, subscriptions, and active plugins to build a clean migration specification.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Sanitization & Extraction',
    d: 'We extract products, variants, customer records, order histories, and Yoast SEO metadata, cleaning up bloated database rows.',
    icon: '🧹',
  },
  {
    n: '03',
    t: 'Modern Shopify Storefront Build',
    d: 'We design and code a lightning-fast Shopify 2.0 theme with modular sections, mobile-first design, and optimized micro-animations.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & 301 Redirect Mapping',
    d: 'We crawl 100% of your indexed WooCommerce URLs to generate single-hop 301 redirects, preserving all search rankings and backlinks.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Launch',
    d: 'We perform a final delta sync of latest customer accounts and orders, point DNS to Shopify, and monitor live checkout conversions.',
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
  name: 'WooCommerce to Shopify Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Replatforming & Database Migration',
  description:
    'End-to-end migration from WooCommerce to Shopify with database sanitization, customer order history transfer, and 100% SEO ranking protection.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WooCommerce to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'WooCommerce to Shopify Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating WooCommerce stores to Shopify.',
  url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
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
    { '@type': 'ListItem', position: 3, name: 'WooCommerce to Shopify', item: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
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

export default function WooCommerceToShopifyPage() {
  return (
    <>
      <script id="woocommerce-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="woocommerce-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="woocommerce-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="woocommerce-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="woocommerce-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>WooCommerce to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from WooCommerce to Shopify with Zero Ranking Loss
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Escape plugin conflicts, slow hosting servers, and database maintenance. We transfer your products, customers, and order history while boosting your checkout speed with Shop Pay.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Migration Audit" region="us" btnVariant="primary-dark" />
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
                  src="/images/replatforming/woocommerce-hero-founder.jpg"
                  alt="E-commerce brand founder reviewing Shopify checkout speed and conversion analytics"
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
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; Ecosystem Partners</div>
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
                  src="/images/replatforming/woocommerce-team-engineers.jpg"
                  alt="FactoryJet senior migration engineers auditing WooCommerce database tables"
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
                  We specialize in frictionless migrations from WooCommerce to Shopify. We sanitize your messy WordPress database, preserve all customer accounts and order records, and build a high-speed storefront that never crashes during traffic spikes.
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
                term="WordPress wp_postmeta Data Sanitization"
                definition="WooCommerce stores product variants, custom fields, and order line items across bloated WordPress wp_posts and wp_postmeta MySQL tables. Replatforming to Shopify involves automated ETL extraction scripts that clean serialized JSON strings and normalize data into clean Shopify native Metafields and Variant matrices."
                keyTakeaways={[
                  'Cleans gigabytes of obsolete plugin transients, orphaned post meta, and legacy revision history',
                  'Transforms custom Advanced Custom Fields (ACF) into native Shopify Metafields and Metaobjects',
                  'Preserves multi-year customer purchase receipts, shipping addresses, and tax history without data corruption',
                ]}
                citationSource="FactoryJet WordPress Database Architecture Standard (2026)"
              />
              <AnswerFirstDefinition
                term="WooCommerce Plugin Chain Decommissioning"
                definition="WooCommerce stores typically depend on 30 to 60+ third-party WordPress plugins for basic checkout, subscriptions, and SEO functionality. Replatforming replaces fragile plugin dependency chains with Shopify's native 99.99% cloud infrastructure, Shop Pay, and high-performance Theme Store 2.0 sections."
                keyTakeaways={[
                  'Permanently eliminates WordPress PHP memory exhaustion crashes during traffic surges and sales',
                  'Removes perpetual plugin security patching vulnerabilities and staging update test overhead',
                  'Standardizes on audited, sandboxed Shopify App Store partners with verified SLAs',
                ]}
                citationSource="FactoryJet E-Commerce Reliability Benchmark (2026)"
              />
              <AnswerFirstDefinition
                term="WooCommerce Permalink 1:1 301 Redirect Mapping"
                definition="WooCommerce utilizes custom WordPress permalink patterns (e.g. /product/item-slug or /product-category/category-name). Comprehensive 1:1 301 redirect mapping ensures every historical WooCommerce product, category, tag, and blog URL routes directly to its corresponding Shopify destination."
                keyTakeaways={[
                  'Captures 100% of historical indexable WooCommerce permalinks and media attachment URLs',
                  'Protects accumulated backlink domain authority and Google organic search keyword rankings',
                  'Prevents Google soft 404 indexing penalties with single-hop permanent 301 redirects',
                ]}
                citationSource="FactoryJet SEO Preservation & URL Routing Standard (2026)"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE WOOCOMMERCE (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Growing Brands Are Leaving WooCommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                WooCommerce places all maintenance and server burdens on your team. Here is what changes when you move to Shopify:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The WooCommerce Issue:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Fix:</span>
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
              source="woocommerce_to_shopify_page"
              defaultSource="woocommerce"
              defaultTarget="shopify"
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
            badge="// WOOCOMMERCE TO SHOPIFY ARCHITECTURE BLUEPRINT"
            title="Enterprise Architecture: Moving from WooCommerce to Shopify"
            subtitle="Sanitize WordPress MySQL database bloat, replace fragile PHP plugins with native Shopify apps, and unlock sub-second Shop Pay conversion."
            legacySource="WooCommerce + WordPress MySQL"
            targetStack="Shopify Modern Cloud Architecture"
            ctaLabel="Schedule WooCommerce Migration Scoping"
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
                WooCommerce vs. Shopify
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare key operational, infrastructure, and revenue factors side by side:
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>WooCommerce (Self-Hosted)</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Hosted Platform</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Server &amp; Maintenance</td>
                    <td>Requires manual server tuning, security patches, and database cleanup</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>100% managed infrastructure with 99.99% uptime</td>
                    <td>Zero time spent fixing server outages or broken PHP dependencies</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Experience</td>
                    <td>Multi-step form with high friction and mobile abandonment</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>Higher conversion rate with 150M+ pre-authenticated buyer accounts</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Flash Sale Scalability</td>
                    <td>Vulnerable to server slowdowns and database locking under high load</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Handles 40,000+ checkouts per minute seamlessly</td>
                    <td>Run aggressive marketing and flash sales with complete peace of mind</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Security &amp; Compliance</td>
                    <td>Requires manual SSL configuration and PCI compliance certification</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Certified Level 1 PCI-DSS compliant out of the box</td>
                    <td>Total protection for customer payment data and zero compliance overhead</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Marketing Agility</td>
                    <td>Relies on clunky shortcodes or slow page builders</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Visual Online Store 2.0 drag-and-drop sections</td>
                    <td>Launch promotional landing pages in minutes without developer assistance</td>
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
                  Our 5-Step Migration Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We execute every phase with senior developer precision: database sanitization is verified before build, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your WooCommerce Audit" region="us" btnVariant="primary-dark" />
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
                <span>Verified Merchant Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Brand Founders Say About Our Migration
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from founders and e-commerce directors who moved from WooCommerce to Shopify:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our WooCommerce site crashed twice during last year&apos;s holiday sales. We moved to Shopify with FactoryJet, and our store held up effortlessly under record traffic with zero slowdowns.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    DK
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>David Krause</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Founder, Specialty Food &amp; Beverage</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We were terrified of losing our Google rankings. FactoryJet mapped every single legacy WordPress URL and redirected them with single-hop 301s. Our organic traffic actually grew post-launch.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    SM
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Sarah Mitchell</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Head of Marketing, Sustainable Home Goods</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We save over $1,200 a month just by dropping our managed WordPress server and emergency developer retainer. The Shopify admin is a breath of fresh air for our marketing team.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    AP
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Alex Peterson</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Managing Director, Consumer Electronics Accessories</div>
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
            <SeoLinkEquityChecklist sourcePlatform="woocommerce" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off WooCommerce"
          lead="Everything store owners, developers, and marketing leaders ask when migrating to Shopify:"
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
              <span>Fixed-Price Migration Guarantee</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade WooCommerce to Shopify?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your WooCommerce store URL and SKU count. We will audit your current plugins, database size, and deliver a detailed migration roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule WooCommerce Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
