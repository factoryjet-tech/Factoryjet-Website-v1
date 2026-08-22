import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'BigCommerce to Shopify Plus Migration Guide | 100% SEO Preservation | FactoryJet',
  description:
    'Comprehensive enterprise migration blueprint from BigCommerce to Shopify Plus. Transfer customer records, B2B price lists, order histories, 301 SEO redirects, and ERP middleware with zero downtime.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'BigCommerce to Shopify Plus Migration: Enterprise Replatforming Blueprint | FactoryJet',
    description:
      'Step-by-step technical guide for migrating from BigCommerce to Shopify Plus. Preserve 100% of organic SEO rankings, migrate B2B wholesale accounts, and connect NetSuite ERP.',
    url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'BigCommerce to Shopify Plus Migration Blueprint' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce to Shopify Plus Migration: Complete Guide | FactoryJet',
    description: 'Enterprise replatforming guide with zero downtime, 100% SEO rank protection, and B2B pricing sync.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'migration', label: 'Migration Protocol' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'b2b', label: 'B2B & Customer Data' },
  { key: 'timeline', label: 'Timeline & Fixed Scoping' },
];

const FAQ_ITEMS = [
  {
    category: 'migration',
    question: 'How do you transfer custom SEO meta titles, meta descriptions, and OpenGraph tags from BigCommerce?',
    answer:
      'We extract all custom SEO metadata fields from BigCommerce category and product records, mapping them directly into Shopify Metafields and template metadata schemas to preserve 100% of search engine snippet formatting.',
  },
  {
    category: 'b2b',
    question: 'How are multi-currency price lists transferred from BigCommerce to Shopify Markets?',
    answer:
      'We export localized foreign currency price lists from BigCommerce, mapping fixed regional prices or automated FX exchange rate rules into Shopify Markets price sheets.',
  },
  {
    category: 'migration',
    question: 'How do you migrate BigCommerce gift card balances and store credit?',
    answer:
      'We extract active gift card codes and customer store credit balances from BigCommerce, re-issuing corresponding gift cards and credit allocations in Shopify Plus via Admin GraphQL APIs.',
  },
  {
    category: 'seo',
    question: 'How do you handle pagination and faceted filter canonical URLs?',
    answer:
      'We configure clean canonical tag structures on Shopify collection pages, preventing search engines from indexing repetitive parameter strings while ensuring primary category landing pages maintain maximum SEO authority.',
  },
  {
    category: 'b2b',
    question: 'How do you map BigCommerce customer address books with multiple shipping locations?',
    answer:
      'We convert BigCommerce multi-address customer profiles into Shopify Plus Company Locations, assigning specific shipping addresses and tax exemptions to each corporate branch.',
  },
  {
    category: 'timeline',
    question: 'How do you ensure zero data loss for customer orders placed during DNS propagation?',
    answer:
      'Our automated delta migration scripts poll BigCommerce APIs continuously during DNS propagation, instantly transferring any final orders into Shopify Plus to maintain 100% order fidelity.',
  },
  {
    category: 'migration',
    question: 'How are custom fields and product options converted during migration?',
    answer:
      'We convert BigCommerce Custom Fields and modifier options into native Shopify Metafields and GraphQL product attributes, preserving all technical specifications, filter dimensions, and merchandising details.',
  },
  {
    category: 'seo',
    question: 'How do you handle category hierarchy and navigation menu migration?',
    answer:
      'We map BigCommerce multi-level category trees into Shopify Smart Collections and custom navigation menus, ensuring breadcrumb structures and internal link equity remain fully intact for search engines.',
  },
  {
    category: 'b2b',
    question: 'How do you test B2B contract pricing before launching the new store?',
    answer:
      'We run automated price-check validation scripts across thousands of SKUs in a private Shopify Plus staging store, comparing calculated B2B line-item prices against live BigCommerce B2B contract matrices to guarantee 100% price accuracy.',
  },
  {
    category: 'timeline',
    question: 'What post-launch support is provided after migration cutover?',
    answer:
      'FactoryJet provides 30 days of intensive post-launch hyper-care, monitoring live checkout transactions, error tracking logs, ERP synchronization pipelines, and Google Search Console indexing reports.',
  },
  // Migration Protocol
  {
    category: 'migration',
    question: 'How do you migrate historical customer order data from BigCommerce to Shopify Plus?',
    answer:
      'We extract full historical order records via BigCommerce REST V2/V3 APIs, convert the payload schemas to match Shopify GraphQL Order schemas (including billing addresses, fulfillment line items, tracking numbers, and financial transaction statuses), and ingest them into Shopify Plus without triggering phantom customer notification emails.',
  },
  {
    category: 'migration',
    question: 'How do you transfer customer account passwords between platforms?',
    answer:
      'Because passwords are cryptographically hashed in BigCommerce for security, they cannot be decrypted. For Shopify Plus enterprise clients, we implement Shopify Multipass to authenticate users directly from existing identity providers, or configure automated, personalized account activation email flows that invite customers to set a password in one click.',
  },
  {
    category: 'migration',
    question: 'How do you handle complex product variant matrices and custom options?',
    answer:
      'BigCommerce allows up to 600 variants per product, while Shopify Plus supports 2,000 variants through native Combined Listings and GraphQL APIs. We map complex modifier options and SKU matrices cleanly without duplicating parent catalog entries.',
  },

  // SEO & 301 Redirects
  {
    category: 'seo',
    question: 'How do you prevent organic SEO rank loss during a BigCommerce to Shopify Plus migration?',
    answer:
      'We crawl all indexed URLs on your BigCommerce store, extract historical ranking keywords from Google Search Console, and construct a comprehensive 1-to-1 301 redirect table. We map old `/categories/` and product URL paths directly to their new Shopify equivalents, test on staging, and validate post-launch to ensure 100% link equity preservation.',
  },
  {
    category: 'seo',
    question: 'How does URL structure differ between BigCommerce and Shopify?',
    answer:
      'BigCommerce uses custom flat URLs (e.g. `/product-name/`), whereas Shopify uses standard directory taxonomies (`/products/product-name` and `/collections/collection-name`). Our automated 301 redirect map ensures every legacy URL resolves to its exact Shopify target with zero 404 errors.',
  },
  {
    category: 'seo',
    question: 'How do you migrate customer review histories and star ratings?',
    answer:
      'We export verified review histories, reviewer names, star ratings, and timestamped UGC media from BigCommerce or apps like Yotpo/Okendo, formatting and re-importing them into your new Shopify review framework with structured JSON-LD AggregateRating schema.',
  },

  // B2B & Customer Data
  {
    category: 'b2b',
    question: 'How do you migrate BigCommerce B2B Edition price lists and customer groups to Shopify Plus?',
    answer:
      'We extract negotiated wholesale contract pricing, customer group tier assignments, and company location profiles from BigCommerce B2B Edition, mapping them into Shopify Plus native B2B Company records, Catalogs, and Price Lists.',
  },
  {
    category: 'b2b',
    question: 'How do you switch ERP connectors from BigCommerce to Shopify Plus?',
    answer:
      'We update API middleware endpoints connecting NetSuite, SAP, or Microsoft Dynamics 365 to listen to Shopify Plus GraphQL webhooks. We run parallel sync validation on staging to ensure inventory decrements and purchase order ingestion match historical ERP records perfectly before cutover.',
  },
  {
    category: 'b2b',
    question: 'Can sales rep quote histories be preserved in the migration?',
    answer:
      'Yes. Open and historical wholesale quotes can be converted into draft orders or archived within customer company profiles in Shopify Admin, allowing account managers to continue servicing corporate accounts without disruption.',
  },

  // Timeline & Fixed Scoping
  {
    category: 'timeline',
    question: 'How long does an enterprise BigCommerce to Shopify Plus migration take?',
    answer:
      'A complete enterprise migration including bespoke theme design, catalog data transfer, ERP middleware cutover, and 301 redirect mapping is typically completed in 4 to 8 weeks.',
  },
  {
    category: 'timeline',
    question: 'Will our store experience any checkout downtime during migration cutover?',
    answer:
      'Zero downtime. We build and test the entire store on a private staging environment. During cutover, we perform a delta sync of orders placed in the final hours, switch DNS records, and verify live checkout without taking your store offline for even a second.',
  },
  {
    category: 'timeline',
    question: 'How do we schedule a BigCommerce to Shopify Plus migration scoping consultation?',
    answer:
      'You can book a 30-minute scoping call directly with founder Bhavesh Barot. We will audit your current BigCommerce catalog, review your custom app dependencies, and deliver a comprehensive fixed-price migration proposal.',
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
  headline: 'BigCommerce to Shopify Plus Migration Guide: Complete Enterprise Replatforming Blueprint',
  description:
    'An enterprise technical guide for migrating from BigCommerce to Shopify Plus with zero downtime, 100% SEO preservation, and B2B wholesale pricing synchronization.',
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
  url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'BigCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  ],
};

const STATS = [
  { b: 'Zero Downtime', s: 'frictionless staging cutover' },
  { b: '100% SEO Safe', s: 'comprehensive 301 mapping' },
  { b: 'B2B Preserved', s: 'price lists & Net terms' },
  { b: '500+ Migrations', s: 'delivered across global brands' },
];

const SOURCED = [
  {
    v: '+24% Lift',
    d: 'average increase in mobile conversion rate achieved by brands migrating from legacy BigCommerce themes to Shopify Shop Pay.',
    src: 'Shopify Plus Enterprise Conversion Study',
    href: 'https://www.shopify.com/plus',
  },
  {
    v: '0 Lost URLs',
    d: 'standard guaranteed by FactoryJet 1-to-1 301 redirect mapping protocol across all catalog, category, and blog URLs.',
    src: 'FactoryJet SEO Migration Protocol',
    href: 'https://factoryjet.com',
  },
  {
    v: '4 to 8 Weeks',
    d: 'average enterprise replatforming timeframe from initial data extraction to zero-downtime production cutover.',
    src: 'FactoryJet Delivery Benchmarks',
    href: 'https://factoryjet.com',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Catalog & Variant Data Extraction', d: 'Extract all SKUs, variant matrices, metafields, image galleries, and custom attributes via BigCommerce REST V3 APIs with zero data truncation.' },
  { i: '◇', t: '2. Customer Account & Order History Migration', d: 'Transfer full customer account profiles, order histories, line item metadata, and configure automated 1-click password activation invites.' },
  { i: '↯', t: '3. B2B Wholesale Price Lists & Company Profiles', d: 'Map BigCommerce B2B customer groups and custom price lists into Shopify Plus native Company profiles, Catalogs, and Net terms.' },
  { i: '▤', t: '4. Bespoke Frontend Theme & UI/UX Design', d: 'Rebuild your digital storefront using clean, modular Shopify Liquid or Headless Next.js 15 with sub-second mobile page load speed.' },
  { i: '⛓', t: '5. Comprehensive 1-to-1 301 SEO Redirect Mapping', d: 'Map every indexed BigCommerce URL to its new Shopify equivalent, preserving 100% of organic keyword rankings, backlinks, and authority.' },
  { i: '⤢', t: '6. ERP, WMS & Marketplace Middleware Cutover', d: 'Re-point NetSuite, SAP, Katana, Klaviyo, and marketplace data pipelines to Shopify Plus GraphQL webhooks with zero data gaps.' },
];

export default function BigCommerceToShopifyPage() {
  return (
    <>
      <script id="bc-sp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bc-sp-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="bc-sp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Enterprise Replatforming Protocol</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  BigCommerce to <span className="pp-grad">Shopify Plus migration.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  A turnkey enterprise migration blueprint. Transfer customer accounts, B2B wholesale price lists,
                  order histories, ERP data pipelines, and preserve 100% of organic SEO search rankings with zero downtime.
                </p>
                <HeroInlineForm source="us_bigcommerce_to_shopify_hero" region="us" submitLabel="Get a Migration Plan & Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="BigCommerce to Shopify Plus migration pipeline diagram showing automated data transfer, 301 redirects, and ERP sync."
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
                  Enterprise Migration Architecture
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    BigCommerce REST V3 → Data conversion Engine → Shopify Plus GraphQL Admin
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Full Catalog', desc: 'SKUs & Variants' },
                    { name: 'Customer Data', desc: 'Accounts & Orders' },
                    { name: 'B2B Price Lists', desc: 'Catalogs & Terms' },
                    { name: '301 Redirects', desc: '100% SEO Safe' },
                    { name: 'ERP Middleware', desc: 'NetSuite / SAP' },
                    { name: 'Shop Pay', desc: '1-Tap Checkout' },
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
                    Zero-Downtime Guarantee
                  </div>
                  <div>Fixed-Price Scoping · Senior Engineering</div>
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
            <p className="pp-mlabel">// why brands migrate to shopify plus</p>
            <h2 style={{ marginTop: '10px' }}>Why enterprise brands migrate from BigCommerce to Shopify Plus</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/bigcommerce-to-shopify-plus-migration-pipeline.webp`}
                alt="BigCommerce to Shopify Plus migration and automated data conversion pipeline"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The Replatforming Advantage:</strong> While BigCommerce provides solid e-commerce tooling,
                enterprise merchants frequently migrate to Shopify Plus to capitalize on higher mobile checkout conversion
                via Shop Pay, unified DTC and B2B store management, superior physical retail POS integration, and access to the
                world's largest commerce developer and app ecosystem.
              </p>
              <p>
                A successful replatforming requires rigorous data mapping: migrating complex product variant matrices, preserving
                negotiated B2B wholesale price lists, transferring complete customer order histories, and constructing comprehensive
                1-to-1 301 redirect tables to protect organic search rankings.
              </p>
              <p>
                FactoryJet executes end-to-end BigCommerce to Shopify Plus migrations with zero downtime, fixed pricing, and senior engineering precision.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified migration benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>Migration Success Metrics by the Numbers</h2>
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
            <p className="pp-mlabel">// migration methodology</p>
            <h2 style={{ marginTop: '10px' }}>6 Core Stages of our BigCommerce to Shopify Plus Protocol</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              How our senior commerce engineers execute complete replatforming with zero data loss or downtime.
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

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec" id="migration-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_bigcommerce_to_shopify_page"
              defaultPlatform="bigcommerce"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 7-Step Migration Execution Protocol ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// execution protocol</p>
            <h2 style={{ marginTop: '10px' }}>The 7-Step BigCommerce to Shopify Plus Migration Protocol</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Replatforming an enterprise catalog requires meticulous planning and automated data conversion scripts.
                Here is our step-by-step technical process:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 1: Architecture Audit &amp; Data Schema Mapping</h3>
              <p>
                We extract your complete BigCommerce catalog, custom fields, metafields, customer records, and order histories via REST V3 APIs,
                mapping every field to its corresponding Shopify Plus GraphQL schema.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 2: B2B Price Lists &amp; Customer Group Conversion</h3>
              <p>
                We convert BigCommerce customer groups, tiered quantity breaks, and negotiated contract pricing into native Shopify Plus Company
                profiles and Catalogs with customized Net 30/60 terms.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 3: Bespoke Storefront Design &amp; Theme Engineering</h3>
              <p>
                We rebuild your frontend user experience using modern Shopify Liquid or Headless Next.js 15, optimizing for sub-second mobile page loads,
                rapid faceted filtering, and frictionless Shop Pay checkout.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 4: Comprehensive 1-to-1 301 Redirect Architecture</h3>
              <p>
                We crawl every indexed BigCommerce URL, mapping old `/categories/` and product slugs directly to their new Shopify equivalents,
                ensuring zero 404 errors and 100% preservation of organic search rankings.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 5: ERP, CRM &amp; Logistics Middleware Cutover</h3>
              <p>
                We re-point NetSuite, SAP, Katana, Klaviyo, and third-party logistics (3PL) integrations to listen to Shopify Plus webhooks,
                testing bi-directional inventory and order synchronization on staging.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 6: Final Delta Sync &amp; Data Validation</h3>
              <p>
                In the final hours before cutover, our automated delta migration scripts pull any new customer orders and inventory changes
                that occurred on BigCommerce during staging testing.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 7: Zero-Downtime DNS Cutover &amp; Post-Launch Monitoring</h3>
              <p>
                We execute zero-downtime DNS cutover, validate structured JSON-LD schemas, ping search engines via IndexNow, and monitor live checkout
                conversion 24/7 to ensure complete commercial continuity.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Enterprise Migration Data Protocol Deep Dive ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// data protocol deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>Technical Data conversion &amp; Verification Protocol</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                A flawless enterprise replatforming relies on deterministic data pipelines and rigorous verification stages:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Automated Schema Normalization &amp; JSON conversion</h3>
              <p>
                Our proprietary migration scripts extract BigCommerce REST V3 JSON objects, clean HTML formatting artifacts,
                normalize variant option names, and map all data into Shopify Plus GraphQL mutation payloads.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Parallel Staging Testing &amp; Order Simulation</h3>
              <p>
                We execute end-to-end checkout simulations on staging across all payment gateways, tax calculation engines,
                and shipping carrier webhooks, validating that financial reports match accounting benchmarks exactly.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Enterprise Migration Quality Assurance Protocol ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// qa &amp; validation</p>
            <h2 style={{ marginTop: '10px' }}>Comprehensive QA &amp; Data Reconciliation Protocol</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Our rigorous quality assurance methodology guarantees that every data entity is verified before cutover:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Automated Record Count &amp; Schema Reconciliation</h3>
              <p>
                We execute automated database audit scripts that compare SKU totals, variant counts, customer records, and order histories
                between BigCommerce and Shopify Plus, flagging and resolving any schema discrepancies.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. End-to-End Payment Gateway &amp; Webhook Simulation</h3>
              <p>
                We process test transactions across credit cards, Shop Pay, PayPal, and purchase orders on Net terms in a staging environment,
                verifying that order confirmation webhooks trigger ERP fulfillment pipelines accurately.
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
                headline="Frequently asked questions about migrating from BigCommerce to Shopify Plus"
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
                <p className="pp-mlabel">// migration consultation</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to migrate to Shopify Plus with zero downtime?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a technical replatforming consultation directly with our founder. We will evaluate your BigCommerce
                  store, calculate your migration roadmap, and deliver a fixed-price proposal.
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
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Impulse Branding"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Managing Director, Impulse Branding</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;FactoryJet handled our entire BigCommerce to Shopify Plus migration directly. Every customer record,
                  order history, and B2B price list transferred perfectly, and our mobile conversion jumped 24% immediately.&rdquo;
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
