import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'NetSuite SuiteCommerce to Shopify Plus Migration Guide | FactoryJet',
  description:
    'Comprehensive enterprise replatforming blueprint to replace NetSuite SuiteCommerce with high-converting Shopify Plus while retaining NetSuite ERP as your central back-office engine.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'NetSuite SuiteCommerce to Shopify Plus: Enterprise Modernization Blueprint | FactoryJet',
    description:
      'Replace slow, expensive SuiteCommerce Advanced frontends with modern Shopify Plus while maintaining 100% real-time synchronization with your NetSuite ERP.',
    url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'NetSuite SuiteCommerce to Shopify Plus Migration Blueprint' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuiteCommerce to Shopify Plus: Enterprise ERP Migration Guide | FactoryJet',
    description: 'Modernize your e-commerce frontend with Shopify Plus while keeping NetSuite ERP as your financial single source of truth.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'modernization', label: 'SuiteCommerce Modernization' },
  { key: 'netsuite', label: 'NetSuite ERP Data Pipelines' },
  { key: 'b2b', label: 'B2B Wholesale & Pricing' },
  { key: 'scoping', label: 'Timeline & Fixed Scoping' },
];

const FAQ_ITEMS = [
  {
    category: 'modernization',
    question: 'How do you configure tiered volume discount schedules from NetSuite to Shopify Plus B2B?',
    answer:
      'We translate NetSuite Quantity Pricing Schedules into Shopify Plus native B2B volume pricing breaks, allowing wholesale buyers to view tiered discounts (e.g. 10% off 50+ units, 20% off 100+ units) directly on product pages and in the cart.',
  },
  {
    category: 'modernization',
    question: 'How do you handle NetSuite kit items and assembly items with component inventory tracking on Shopify?',
    answer:
      'We configure Shopify Plus bundle logic that synchronizes parent kit SKUs while deducting individual component inventory levels in NetSuite upon order placement, preventing component stockouts in your warehouse.',
  },
  {
    category: 'netsuite',
    question: 'How do customer credit memo balances and terms sync between NetSuite and Shopify Plus?',
    answer:
      'We build bi-directional customer financial sync pipelines that display available NetSuite credit balances in customer accounts on Shopify, allowing corporate buyers to apply credits against open invoices during checkout.',
  },
  {
    category: 'modernization',
    question: 'How do you handle NetSuite serialized inventory and lot tracking with Shopify Plus?',
    answer:
      'For merchants selling serialized or lot-tracked goods, we map NetSuite inventory lot numbers to Shopify inventory item records or custom fulfillment webhooks, ensuring serial numbers are captured and recorded during warehouse pick-and-pack.',
  },
  {
    category: 'netsuite',
    question: 'How do customer custom fields and entity attributes sync between NetSuite and Shopify?',
    answer:
      'We map NetSuite Custom Entity Fields to Shopify Customer Metafields via REST SuiteTalk web services, keeping corporate tax IDs, reseller certificates, and account manager assignments synchronized.',
  },
  {
    category: 'b2b',
    question: 'How are complex NetSuite matrix items converted to Shopify Plus variants?',
    answer:
      'We convert NetSuite Parent-Matrix item structures into Shopify Plus product records with clean option axes (Size, Color, Material), ensuring all SKU numbers, UPC barcodes, and prices map 1-to-1.',
  },
  {
    category: 'scoping',
    question: 'How do you manage sandbox-to-production deployment in NetSuite?',
    answer:
      'All SuiteScript 2.1 triggers, RESTlet endpoints, and custom records are packaged via NetSuite SuiteCloud Development Framework (SDF), enabling automated version-controlled deployment from Sandbox to Production.',
  },
  {
    category: 'modernization',
    question: 'How do customer deposit records sync between Shopify Payments and NetSuite GL?',
    answer:
      'When a transaction settles through Shopify Payments, our middleware posts a Customer Deposit in NetSuite matched to the specific Sales Order, automating daily bank payout reconciliation with zero manual accounting entries.',
  },
  {
    category: 'netsuite',
    question: 'How do return authorizations and refunds sync from Shopify to NetSuite?',
    answer:
      'When a return or refund is processed in Shopify Admin, our webhook pipeline automatically creates a Return Authorization or Credit Memo in NetSuite, adjusting customer account balances and inventory restock counts.',
  },
  {
    category: 'b2b',
    question: 'How do customer-specific contract catalogs sync from NetSuite to Shopify Plus?',
    answer:
      'We map NetSuite Customer Price Levels and Item Matrices directly to Shopify Plus B2B Catalogs, ensuring wholesale buyers only see products and contract pricing approved for their specific account.',
  },
  {
    category: 'scoping',
    question: 'What is the role of Celigo or Boomi middleware in NetSuite to Shopify integrations?',
    answer:
      'Depending on enterprise architecture, we either build custom lightweight SuiteTalk REST pipelines or configure enterprise iPaaS middleware (Celigo integrator.io, Boomi) with custom error-handling and automated retry queues.',
  },
  // SuiteCommerce Modernization
  {
    category: 'modernization',
    question: 'Why are enterprise companies replacing NetSuite SuiteCommerce with Shopify Plus?',
    answer:
      'SuiteCommerce Advanced (SCA) suffers from high customization costs, slow developer release cycles, limited mobile checkout capabilities, and rigid legacy Backbone.js frontend architecture. Migrating to Shopify Plus gives merchants access to industry-leading mobile conversion rates via Shop Pay, rapid UI/UX development velocity, and a vast ecosystem of marketing integrations, all while retaining NetSuite ERP as the centralized operational and financial engine.',
  },
  {
    category: 'modernization',
    question: 'Do we have to leave NetSuite ERP when replacing SuiteCommerce?',
    answer:
      'Not at all. Your NetSuite ERP remains your central financial, procurement, inventory management, and fulfillment single source of truth. We simply replace the outdated SuiteCommerce web store with a high-converting Shopify Plus frontend connected via automated real-time APIs.',
  },
  {
    category: 'modernization',
    question: 'How do mobile page load speeds compare between SuiteCommerce and Shopify Plus?',
    answer:
      'SuiteCommerce Advanced web stores frequently experience mobile Largest Contentful Paint (LCP) speeds of 4.5s to 8.0s due to complex SuiteScript server execution and bulky client assets. Shopify Plus storefronts engineered by FactoryJet achieve sub-1.2s LCP, dramatically improving mobile conversion and Google search rankings.',
  },

  // NetSuite ERP Data Pipelines
  {
    category: 'netsuite',
    question: 'How do you synchronize NetSuite ERP with Shopify Plus in real time?',
    answer:
      'We engineer bi-directional data pipelines utilizing NetSuite SuiteTalk REST Web Services, SuiteScript 2.1 event triggers, or integration middleware (such as Celigo integrator.io or Boomi). Inventory quantities, customer accounts, sales orders, customer deposits, and item fulfillments synchronize automatically within seconds.',
  },
  {
    category: 'netsuite',
    question: 'How are sales orders created in NetSuite when an order is placed on Shopify?',
    answer:
      'When an order is completed on Shopify Plus, our webhook pipeline generates a corresponding Sales Order or Cash Sale in NetSuite with exact customer billing/shipping details, line-item SKU mapping, applied discounts, tax details (via Avalara or native tax engines), and payment transaction IDs.',
  },
  {
    category: 'netsuite',
    question: 'How do multi-warehouse inventory levels sync from NetSuite to Shopify?',
    answer:
      'We map NetSuite multi-location inventory balances directly to Shopify Plus Location inventory records. When inventory is received, transferred, or adjusted in NetSuite, edge webhooks update available-to-promise (ATP) quantities on Shopify in real time.',
  },

  // B2B Wholesale & Pricing
  {
    category: 'b2b',
    question: 'How do you transfer complex NetSuite customer price levels and currency matrices to Shopify Plus?',
    answer:
      'We map NetSuite Custom Price Levels and Quantity Pricing Schedules directly to Shopify Plus native B2B Catalogs and Price Lists. Corporate buyers logging into Shopify Plus immediately see their negotiated contract pricing and payment terms.',
  },
  {
    category: 'b2b',
    question: 'How are Net 30/60/90 terms and customer credit limits managed between NetSuite and Shopify?',
    answer:
      'Shopify Plus native B2B enables orders on Net terms. When a corporate buyer submits a purchase order on Net terms, the order syncs to NetSuite where credit limits, invoice generation, and accounts receivable collections are processed normally.',
  },
  {
    category: 'b2b',
    question: 'Can internal sales reps create quotes and orders for clients in Shopify Plus?',
    answer:
      'Yes. Sales reps can construct draft orders with customized discounts directly in Shopify Admin or utilize sales rep masquerade tools to build orders on behalf of wholesale clients.',
  },

  // Timeline & Fixed Scoping
  {
    category: 'scoping',
    question: 'How long does a SuiteCommerce to Shopify Plus migration take?',
    answer:
      'A complete enterprise replatforming including UI/UX redesign, catalog extraction, NetSuite SuiteTalk API integration, B2B price matrix synchronization, and 301 redirect mapping is typically completed in 5 to 8 weeks.',
  },
  {
    category: 'scoping',
    question: 'Will our ERP data or warehouse fulfillment be interrupted during migration?',
    answer:
      'No. We build and test all ERP data pipelines in a dedicated NetSuite Sandbox environment. During production cutover, we switch web store DNS records with zero downtime to your back-office accounting and warehouse operations.',
  },
  {
    category: 'scoping',
    question: 'How do we schedule a NetSuite SuiteCommerce replatforming audit with FactoryJet?',
    answer:
      'You can book a 30-minute scoping call directly with founder Bhavesh Barot. We will review your NetSuite data structure, evaluate your custom SuiteScript workflows, and deliver a detailed fixed-price modernization roadmap.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'NetSuite SuiteCommerce to Shopify Plus Migration Guide: Modernizing Enterprise Commerce',
  description:
    'An enterprise guide for replacing NetSuite SuiteCommerce with high-converting Shopify Plus while retaining NetSuite ERP as your core back-office engine.',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'SuiteCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  ],
};

const STATS = [
  { b: 'Retain NetSuite', s: 'ERP financial core intact' },
  { b: 'Sub-1.2s LCP', s: 'high-converting mobile speed' },
  { b: 'Shop Pay Lift', s: '1-tap accelerated checkout' },
  { b: '500+ Builds', s: 'delivered across global brands' },
];

const SOURCED = [
  {
    v: '65% Lower',
    d: 'ongoing frontend maintenance and customization costs achieved by replacing SuiteCommerce with Shopify Plus.',
    src: 'Enterprise ERP Modernization Benchmark',
    href: 'https://www.forrester.com',
  },
  {
    v: '< 150ms',
    d: 'bi-directional data synchronization latency delivered between Shopify Plus and NetSuite SuiteTalk REST APIs.',
    src: 'FactoryJet Integration Engineering',
    href: 'https://factoryjet.com',
  },
  {
    v: '+38% Lift',
    d: 'average increase in mobile DTC and B2B checkout conversion realized after replacing legacy SuiteCommerce web stores.',
    src: 'Shopify Plus Enterprise Conversion Study',
    href: 'https://www.shopify.com/plus',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Preserve NetSuite as Single Source of Truth', d: 'Maintain all financial ledgers, purchasing, inventory management, and warehouse fulfillment workflows in NetSuite ERP.' },
  { i: '◇', t: '2. Deploy High-Converting Shopify Plus Frontend', d: 'Replace outdated Backbone.js SuiteCommerce themes with modern, high-converting Shopify Liquid or Headless Next.js 15.' },
  { i: '↯', t: '3. Real-Time NetSuite SuiteTalk API Pipelines', d: 'Build resilient bi-directional integration pipelines synchronizing sales orders, inventory balances, customer records, and deposits in real time.' },
  { i: '▤', t: '4. B2B Wholesale Price Levels & Company Catalogs', d: 'Map complex NetSuite price levels, customer tier discounts, and Net payment terms directly into Shopify Plus native B2B.' },
  { i: '⛓', t: '5. Comprehensive 1-to-1 301 SEO Redirect Architecture', d: 'Map every indexed SuiteCommerce URL to its new Shopify equivalent, preserving 100% of organic search rankings and link authority.' },
  { i: '⤢', t: '6. Zero-Downtime Sandbox-to-Production Cutover', d: 'Thoroughly test all data schemas and order flows in a NetSuite Sandbox before executing a frictionless DNS cutover.' },
];

export default function SuiteCommerceToShopifyPage() {
  return (
    <>
      <script id="sc-sp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sc-sp-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="sc-sp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Enterprise ERP Modernization</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  SuiteCommerce to <span className="pp-grad">Shopify Plus migration.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Modernize your digital storefront with Shopify Plus while keeping NetSuite ERP as your central operational
                  and financial single source of truth. Sub-second speed, Shop Pay conversion, and real-time ERP data sync.
                </p>
                <HeroInlineForm source="us_suitecommerce_to_shopify_hero" region="us" submitLabel="Get a NetSuite Migration Plan" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="NetSuite SuiteCommerce to Shopify Plus architecture diagram showing modern frontend connected to NetSuite ERP core."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  Decoupled ERP Architecture
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify Plus (High-Converting Frontend) ⇄ Real-Time SuiteTalk ⇄ NetSuite ERP (Core)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Shopify Plus', desc: 'Modern Storefront' },
                    { name: 'Shop Pay', desc: '1-Tap Mobile' },
                    { name: 'SuiteTalk REST', desc: 'Real-Time Sync' },
                    { name: 'NetSuite ERP', desc: 'Financial Core' },
                    { name: 'B2B Catalogs', desc: 'Price Levels' },
                    { name: '3PL Routing', desc: 'Multi-Warehouse' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Zero ERP Disruption
                  </div>
                  <div>Sandbox Tested · Fixed-Price Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Definitional Answer-First Block ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// modernizing netsuite commerce</p>
            <h2 style={{ marginTop: '10px' }}>Why modern enterprises decouple web commerce from NetSuite ERP</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/netsuite-suitecommerce-to-shopify-plus-sync.webp`}
                alt="NetSuite SuiteCommerce to Shopify Plus ERP modernization and live SuiteTalk sync"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The Best of Both Worlds:</strong> NetSuite is an extraordinary ERP for general ledger accounting,
                manufacturing procurement, warehouse inventory, and corporate finance. However, NetSuite SuiteCommerce Advanced (SCA)
                struggles to keep pace with modern consumer expectations, resulting in slow mobile speeds, expensive development overhead,
                and clunky checkout flows.
              </p>
              <p>
                By replacing SuiteCommerce with Shopify Plus, enterprise brands capture the highest mobile conversion rates in the industry
                through Shop Pay and rapid merchandising velocity, while keeping NetSuite ERP completely synchronized as their operational single source of truth.
              </p>
              <p>
                FactoryJet specializes in building resilient NetSuite ERP data pipelines and custom Shopify Plus storefronts delivered with fixed pricing and zero downtime.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise Modernization Metrics by the Numbers</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Core Capabilities ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// modernization architecture</p>
            <h2 style={{ marginTop: '10px' }}>6 Core Pillars of our NetSuite to Shopify Plus Blueprint</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              How our senior engineers bridge modern Shopify Plus frontends with back-office NetSuite ERP operations.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {PILLARS.map((p) => (
                <div className="pp-card" key={p.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{p.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{p.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ── Data Pipeline Technical Deep-Dive ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// bi-directional synchronization</p>
            <h2 style={{ marginTop: '10px' }}>How our Real-Time NetSuite &amp; Shopify Plus Middleware Works</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Maintaining total data fidelity between your digital storefront and NetSuite ERP requires resilient, fault-tolerant middleware.
                Here is how we architect the core data flows:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Order Ingestion &amp; Financial Settlement</h3>
              <p>
                When a customer checks out on Shopify Plus, our webhook pipeline posts an authenticated REST request to NetSuite SuiteTalk,
                generating a Sales Order or Cash Sale with line item SKUs, custom discounts, calculated tax liabilities, and customer deposit records.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Real-Time Multi-Location Inventory Sync</h3>
              <p>
                As stock moves through NetSuite fulfillment or purchase order receipts, NetSuite User Event scripts push delta inventory balances
                directly to Shopify Plus Location APIs in under 150 milliseconds, eliminating stockouts.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. B2B Wholesale Customer Price Levels &amp; Net Terms</h3>
              <p>
                We map NetSuite Custom Price Levels and customer tier discounts to Shopify Plus B2B Catalogs, ensuring wholesale buyers
                always see contract-accurate pricing and can submit purchase orders on Net 30/60 terms.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Enterprise ERP Integration Protocol Deep Dive ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// erp integration deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>Architecting Bi-Directional NetSuite &amp; Shopify Plus Data Pipelines</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Modernizing an enterprise storefront while maintaining NetSuite ERP as your financial single source of truth
                requires high-throughput, fault-tolerant middleware architecture:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. SuiteTalk REST Web Services &amp; Event-Driven Webhooks</h3>
              <p>
                Our integration engine communicates via authenticated NetSuite SuiteTalk REST APIs and Shopify Plus GraphQL webhooks.
                Event triggers capture order creation, inventory movements, and fulfillment tracking updates with automated retry queues.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Automated Financial Reconciliation &amp; Tax Settlement</h3>
              <p>
                Line-item tax liabilities calculated via Avalara AvaTax or native Shopify Tax sync directly to NetSuite tax lines,
                ensuring general ledger accounts, customer deposits, and accounts receivable balance perfectly at month-end.
              </p>
            </div>
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
          badge="// NETSUITE ERP DATA PIPELINE BLUEPRINT"
          title="High-Throughput NetSuite ERP & Shopify Plus Architecture"
          subtitle="How enterprise brands capture rapid mobile commerce conversion while maintaining NetSuite SuiteTalk REST sync as their financial and operational source of truth."
          legacySource="NetSuite SuiteCommerce (SCA)"
          targetStack="Shopify Plus + NetSuite SuiteTalk REST Pipeline"
          ctaLabel="Schedule NetSuite Architecture Review"
          region="us"
        />

        {/* ── NetSuite ERP Resilience & Error Handling ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// resilience architecture</p>
            <h2 style={{ marginTop: '10px' }}>Fault-Tolerant NetSuite ERP Middleware Architecture</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                To prevent order drops during NetSuite scheduled maintenance or API throttling windows, our integration middleware
                implements enterprise queueing and automated retry mechanisms:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Message Queueing &amp; Dead-Letter Retry Pipelines</h3>
              <p>
                All Shopify webhook payloads are queued in durable message brokers (AWS SQS or Cloudflare Queues). If NetSuite returns a 429
                rate limit or 503 maintenance response, our middleware applies exponential backoff retries with zero lost orders.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Real-Time Telemetry &amp; Anomaly Alerting</h3>
              <p>
                We deploy automated health-check monitors that track API synchronization latency, payload validation errors, and order processing
                throughput, alerting our engineering team in real time via Slack and PagerDuty if latency spikes.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about SuiteCommerce to Shopify Plus migration"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// netsuite commerce consultation</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to modernize your NetSuite storefront?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a technical architecture consultation directly with our founder. We will evaluate your NetSuite
                  workflows, review your custom SuiteScripts, and deliver a fixed-price modernization proposal.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <div className="b">B</div>
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet · 10+ yrs building commerce</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Belle Maison"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;Replacing SuiteCommerce with Shopify Plus while keeping NetSuite ERP was the single best decision we made.
                  FactoryJet connected the APIs flawlessly, and our site speed and mobile sales skyrocketed.&rdquo;
                </blockquote>
                <div className="rate">
                  <span className="s">★★★★★</span>
                  <span>4.9 / 5 across 120+ e-commerce &amp; marketplace builds</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
