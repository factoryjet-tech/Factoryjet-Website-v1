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
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'NetSuite to Shopify Plus Migration Services | FactoryJet',
  description:
    'Migrate NetSuite SuiteCommerce to Shopify Plus without downtime. We keep your NetSuite ERP in sync while lifting checkout speed. Get a fixed quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'NetSuite to Shopify Plus Migration Services | FactoryJet',
    description:
      'Migrate NetSuite SuiteCommerce to Shopify Plus without downtime. Keep NetSuite ERP in sync while lifting checkout speed.',
    url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'NetSuite to Shopify Plus Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NetSuite to Shopify Plus Migration Services | FactoryJet',
    description: 'Migrate NetSuite SuiteCommerce to Shopify Plus with full ERP sync.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify Plus' },
  { key: 'erp', label: 'NetSuite ERP Integration' },
  { key: 'b2b', label: 'B2B & Contract Pricing' },
  { key: 'cost', label: 'Costs & ROI' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are enterprise businesses moving from NetSuite SuiteCommerce to Shopify Plus?',
    answer:
      'Businesses love NetSuite as an ERP, but SuiteCommerce has severe limitations as a modern e-commerce storefront: slow page load speeds, high annual software license add-ons, extreme difficulty making basic marketing updates, and reliance on expensive SuiteScript developers for simple theme changes. Shopify Plus provides a world-class, 1-click checkout and marketing flexibility while keeping NetSuite as the core back-office engine.',
  },
  {
    category: 'basics',
    question: 'Do we have to replace NetSuite ERP when migrating off SuiteCommerce?',
    answer:
      'No. NetSuite remains your central ERP and single source of truth for general ledger, multi-location inventory, purchase orders, customer records, and warehouse fulfillment. We only replace the web storefront layer (SuiteCommerce Standard or SuiteCommerce Advanced) with Shopify Plus.',
  },
  {
    category: 'basics',
    question: 'How do Shopify Plus and NetSuite communicate after migration?',
    answer:
      'We establish high-throughput, bi-directional API pipelines using custom RESTlet integrations, Celigo Integrator.io, Boomi, or native Shopify-NetSuite connectors. Orders placed on Shopify Plus sync to NetSuite sales orders in under 200 milliseconds, and inventory counts from NetSuite update Shopify in real time.',
  },
  {
    category: 'erp',
    question: 'How do NetSuite custom fields and item records map to Shopify Plus?',
    answer:
      'NetSuite inventory items, matrix items, assembly items, and custom transaction fields map directly into Shopify products, variants, and native metafield definitions. We audit your NetSuite Item record schema to ensure all custom attributes sync cleanly without manual data entry.',
  },
  {
    category: 'erp',
    question: 'How are multi-location warehouses and 3PL inventory allocations handled?',
    answer:
      'Shopify Plus natively supports multi-location inventory management. Each warehouse location in NetSuite maps directly to a designated Shopify inventory location, allowing smart regional routing and automated fulfillment splits across your distribution centers.',
  },
  {
    category: 'b2b',
    question: 'How do NetSuite customer price levels and custom price matrices map to Shopify Plus?',
    answer:
      'NetSuite Price Levels, Quantity Pricing Schedules, and Customer-Specific Item Pricing map directly to Shopify Plus B2B Price Lists, Company Locations, and Quantity Rules. Logged-in wholesale buyers see their exact negotiated contract prices automatically.',
  },
  {
    category: 'b2b',
    question: 'Can B2B buyers checkout with Net 30 terms and purchase orders on Shopify Plus?',
    answer:
      'Yes. Shopify Plus B2B natively supports payment terms (Net 15, Net 30, Net 60, Due on Fulfillment) and custom PO number entry at checkout. Approved orders sync directly into NetSuite as standard pending sales orders for invoicing.',
  },
  {
    category: 'cost',
    question: 'How much does a NetSuite SuiteCommerce to Shopify Plus migration cost?',
    answer:
      'Enterprise migrations typically range between $25,000 and $75,000 depending on catalog size, matrix item complexity, custom ERP workflows, and B2B pricing rules. We provide a comprehensive audit and a guaranteed fixed-price proposal before starting any development.',
  },
  {
    category: 'cost',
    question: 'How much does switching to Shopify Plus save in annual software licensing fees?',
    answer:
      'Most enterprise merchants save between $30,000 and $100,000+ per year by eliminating NetSuite SuiteCommerce module renewal licenses, expensive SuiteCommerce Advanced developer retainers, and third-party hosting add-ons.',
  },
  {
    category: 'seo',
    question: 'Will we lose our organic Google search rankings when moving off SuiteCommerce?',
    answer:
      'Not with our migration protocol. SuiteCommerce uses unique URL routing paths. We crawl 100% of your legacy indexed URLs, create an exhaustive 1-to-1 redirect map, and deploy single-hop 301 redirects to ensure every customer bookmark and search engine ranking transfers seamlessly.',
  },
  {
    category: 'seo',
    question: 'How do you preserve structured data and schema markup during replatforming?',
    answer:
      'We audit all existing product, organization, and review schema on your SuiteCommerce site and rebuild comprehensive JSON-LD schemas into your new Shopify Plus theme, maintaining full Google rich snippet and AI answer engine eligibility.',
  },
  {
    category: 'cutover',
    question: 'How do you ensure zero lost orders during DNS cutover?',
    answer:
      'We run dual-sync pipelines during the staging period. Right before DNS switchover, we execute a final delta sync of latest customer accounts, orders, and customer transaction records, then switch DNS during scheduled off-peak hours with real-time ERP queue monitoring.',
  },
];

const STAT_CARDS = [
  { num: '70%', title: 'Faster Page Speed', desc: 'Transform sluggish SuiteCommerce pages into sub-second Shopify Plus shopping experiences.', icon: '⚡' },
  { num: '$50k+', title: 'Annual License Savings', desc: 'Eliminate expensive SuiteCommerce add-on modules and specialized SuiteScript retainers.', icon: '💰' },
  { num: 'Sub-200ms', title: 'ERP Sync Latency', desc: 'Real-time bi-directional orders, inventory, and B2B pricing sync directly into NetSuite.', icon: '🔄' },
  { num: '100%', title: 'Zero Downtime', desc: 'Complete 1-to-1 301 URL redirect mapping preserves all search rankings and customer links.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Sluggish Performance of SuiteCommerce Frontends',
    problem: 'SuiteCommerce Advanced and Standard architectures rely on legacy client-side rendering frameworks that result in slow mobile load times and high bounce rates.',
    solution: 'Shopify Plus delivers sub-second page loads globally via multi-region CDNs, modern Liquid rendering, and Shop Pay 1-click checkout conversion.',
  },
  {
    num: '02',
    title: 'Eliminating the Heavy SuiteScript Developer Bottleneck',
    problem: 'Even minor marketing changes, banner updates, and landing page designs require specialized SuiteScript engineers billing high hourly retainers.',
    solution: 'Shopify Online Store 2.0 visual editor allows your marketing team to launch new campaigns, product bundles, and promotions in minutes without writing code.',
  },
  {
    num: '03',
    title: 'Unlocking Modern E-Commerce Marketing & App Ecosystems',
    problem: 'SuiteCommerce has a virtually nonexistent third-party app marketplace, making social selling, modern loyalty programs, and advanced reviews difficult to implement.',
    solution: 'Instant access to thousands of premier Shopify Plus enterprise apps like Klaviyo, Gorgias, Yotpo, Triple Whale, and native TikTok and Meta social commerce channels.',
  },
  {
    num: '04',
    title: 'Maintaining NetSuite as the Core ERP with Zero Operational Friction',
    problem: 'Fearing that leaving SuiteCommerce will break complex wholesale pricing rules, multi-warehouse stock allocations, and custom ERP workflows.',
    solution: 'We architect robust bi-directional API pipelines that keep NetSuite as your single operational source of truth while upgrading your customer-facing experience.',
  },
];

const PARTNERS = [
  'Shopify Plus Partner',
  'NetSuite Certified Developer',
  'Celigo Integrator.io Partner',
  'Boomi Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Avalara AvaTax NetSuite Sync',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'NetSuite Schema & Workflow Audit',
    d: 'We map your NetSuite Item records, Matrix items, custom fields, B2B price levels, and inventory locations to Shopify Plus data models.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Bi-Directional ERP Middleware Integration',
    d: 'We build and test real-time webhooks for orders, stock updates, fulfillment tracking, customer accounts, and wholesale contract price lists.',
    icon: '🔄',
  },
  {
    n: '03',
    t: 'Enterprise Shopify Plus Storefront Build',
    d: 'We design and engineer a custom, high-speed storefront with native B2B company accounts, tiered price rules, and Net terms checkout.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & Redirect Matrix',
    d: 'We crawl every single SuiteCommerce URL to build single-hop 301 redirects, protecting 100% of your Google rankings and domain authority.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Cutover',
    d: 'We perform a final delta sync of latest customer accounts and transactions, switch DNS during off-peak hours, and verify live NetSuite order generation.',
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
  name: 'NetSuite SuiteCommerce to Shopify Plus Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Enterprise E-Commerce Replatforming & ERP Integration',
  description:
    'End-to-end migration from NetSuite SuiteCommerce to Shopify Plus with real-time NetSuite ERP data synchronization, wholesale contract pricing, and zero ranking loss.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SuiteCommerce to Shopify Plus Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NetSuite SuiteCommerce to Shopify Plus Migration Services | FactoryJet',
  description: 'Engineering blueprint for moving from SuiteCommerce to Shopify Plus with bi-directional NetSuite ERP synchronization.',
  url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
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
    { '@type': 'ListItem', position: 3, name: 'NetSuite SuiteCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
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

export default function NetSuiteToShopifyPage() {
  return (
    <>
      <script id="netsuite-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="netsuite-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="netsuite-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="netsuite-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="netsuite-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>SuiteCommerce to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from SuiteCommerce to Shopify Plus While Keeping NetSuite ERP Intact
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Keep NetSuite as your operational single source of truth for orders, inventory, and financials while upgrading your storefront to the lightning-fast conversion power of Shopify Plus.
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
                  src="/images/replatforming/netsuite-hero-director.jpg"
                  alt="Enterprise systems director reviewing NetSuite ERP data integration pipelines"
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
                  src="/images/replatforming/netsuite-team-architects.jpg"
                  alt="FactoryJet senior ERP and e-commerce engineers reviewing bi-directional data flow"
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
                  We specialize in high-throughput e-commerce migrations for NetSuite-powered enterprises. We replace slow, high-maintenance SuiteCommerce storefronts with high-converting Shopify Plus stores while maintaining 100% operational synchronicity with your NetSuite ERP.
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
          </div>
        </section>

        {/* ── 04. WHY LEAVE SUITECOMMERCE (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Leading Brands Are Leaving NetSuite SuiteCommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                NetSuite is a world-class ERP, but SuiteCommerce limits your online revenue potential. Here is what changes when you move the storefront layer to Shopify Plus:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The SuiteCommerce Problem:</span>
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

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />
          </div>
        </section>

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// NETSUITE & SHOPIFY PLUS ENTERPRISE BLUEPRINT"
            title="Enterprise Architecture: Decoupling SuiteCommerce to Shopify Plus"
            subtitle="Keep NetSuite ERP as your core single source of truth for accounting, multi-warehouse inventory, and procurement, while unlocking sub-second Shopify Plus storefront conversion."
            legacySource="NetSuite SuiteCommerce"
            targetStack="Shopify Plus + NetSuite ERP Middleware"
            ctaLabel="Schedule NetSuite Integration Scoping"
            region="us"
          />
        </div>

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
                NetSuite SuiteCommerce vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                SuiteCommerce forces your storefront to inherit ERP architectural rigidity. Decoupling the frontend to Shopify Plus gives your brand the best of both worlds.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>NetSuite SuiteCommerce</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Storefront Speed</td>
                    <td>Slow client-side rendering with high latency</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Sub-second global CDN rendering &amp; caching</td>
                    <td>Drastically reduces bounce rate and improves Google Core Web Vitals</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Marketing Agility</td>
                    <td>Requires SuiteScript code deployments for visual changes</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Intuitive visual drag-and-drop section builder</td>
                    <td>Marketing launches new campaigns same-day with zero developer dependency</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Annual Software Fees</td>
                    <td>Expensive annual SuiteCommerce module renewals</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Predictable flat enterprise Shopify Plus fee</td>
                    <td>Saves tens of thousands of dollars in annual software licensing</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Experience</td>
                    <td>Clunky, multi-page legacy checkout flow</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>Higher conversion rate across mobile and desktop shoppers</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>B2B Wholesale</td>
                    <td>Native NetSuite customer center portal</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Plus B2B with Net terms and custom price lists</td>
                    <td>Modern wholesale ordering experience with instant ERP sales order creation</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>App Ecosystem</td>
                    <td>Extremely limited third-party app marketplace</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>10,000+ top-tier enterprise apps &amp; integrations</td>
                    <td>Instantly plug in Klaviyo, Gorgias, Yotpo, and modern social selling tools</td>
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
                  Our 5-Step NetSuite Replatforming Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We decouple your frontend without ever interrupting your back-office business operations. Every phase has clear sign-off gates: ERP sync latency is verified before build, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your NetSuite Audit" region="us" btnVariant="primary-dark" />
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
                Real feedback from operations and technical directors who migrated off SuiteCommerce onto Shopify Plus:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Leaving SuiteCommerce was the best operational decision we made. Our NetSuite ERP still handles all inventory and accounting, but our conversion rate jumped 44% with Shopify Plus and Shop Pay.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    JH
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Jonathan Hayes</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Chief Technology Officer, B2B Commercial Equipment</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our wholesale buyers love the new B2B portal. They log in and see their exact NetSuite price levels and Net 30 terms without calling customer service. FactoryJet made the migration painless.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    EC
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Elena Chen</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>VP of Operations, Premium Lighting Manufacturer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We saved over $70,000 in our first year alone by dropping our SuiteCommerce license and SuiteScript developer retainer. Our marketing team now updates landing pages in minutes.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    RB
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Robert Bennett</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Managing Director, Specialty Wholesale Distribution</div>
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

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off SuiteCommerce"
          lead="Everything ERP directors, operations managers, and founders ask when migrating to Shopify Plus:"
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
              Ready to Decouple SuiteCommerce &amp; Accelerate Growth?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your NetSuite Item matrix structure and integration requirements. We will audit your current architecture and deliver a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule NetSuite Architecture Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
