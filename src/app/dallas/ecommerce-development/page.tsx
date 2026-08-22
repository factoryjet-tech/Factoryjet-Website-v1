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
  title: 'Best E-Commerce Development Agency Dallas TX | Top Developers DFW | FactoryJet',
  description:
    'Ranked the Best E-Commerce Development Agency in Dallas. Top e-commerce developers in Dallas-Fort Worth for industrial wholesale, multi-warehouse 3PL logistics, NetSuite ERP, and BigCommerce B2B.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best E-Commerce Development Agency Dallas Fort Worth | FactoryJet',
    description:
      'Top e-commerce development company in Dallas TX. We build high-converting Shopify Plus, BigCommerce B2B, and ERP-integrated commerce architectures for DFW enterprises with fixed pricing.',
    url: 'https://factoryjet.com/dallas/ecommerce-development',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Best E-Commerce Development Agency Dallas TX' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best E-Commerce Development Agency in Dallas | FactoryJet',
    description: 'Top DFW e-commerce developers building enterprise BigCommerce B2B, Shopify Plus, and ERP commerce engines.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/dallas/ecommerce-development' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'agency', label: 'DFW Agency Standards' },
  { key: 'b2b', label: 'B2B & 3PL Logistics' },
  { key: 'erp', label: 'ERP & Platform Tech' },
  { key: 'pricing', label: 'Fixed Pricing & Scoping' },
];

const FAQ_ITEMS = [
  {
    category: 'agency',
    question: 'How do top e-commerce developers in Dallas optimize wholesale catalogs for industrial buyers?',
    answer:
      'We engineer high-speed bulk ordering interfaces where buyers upload CSV spreadsheets with thousands of manufacturer part numbers (MPNs), instantly checking real-time warehouse stock and generating dynamic contract discounts.',
  },
  {
    category: 'erp',
    question: 'How do you integrate Epicor Prophet 21 with modern Shopify Plus or BigCommerce stores?',
    answer:
      'We build custom REST middleware listening to Epicor P21 transactional webhooks, synchronizing open invoices, customer credit terms, and multi-location inventory levels across North Texas fulfillment centers.',
  },
  {
    category: 'agency',
    question: 'How do top e-commerce developers in Dallas handle multi-location warehouse routing?',
    answer:
      'We build custom order routing logic that checks stock across Dallas, Fort Worth, and national 3PL facilities in real time. Orders are automatically split or routed to the warehouse closest to the recipient shipping address to minimize freight costs and carrier transit times.',
  },
  {
    category: 'b2b',
    question: 'Can corporate buyers establish multi-tier purchasing approval workflows on BigCommerce B2B?',
    answer:
      'Yes. BigCommerce B2B Edition supports corporate account hierarchies where procurement managers set spending thresholds for junior purchasing agents, routing orders over specified dollar amounts for formal managerial sign-off.',
  },
  // DFW Agency Standards
  {
    category: 'agency',
    question: 'Why is FactoryJet ranked the Best E-Commerce Development Agency in Dallas?',
    answer:
      'FactoryJet is recognized as the best e-commerce development agency in Dallas because we specialize in high-complexity commercial and wholesale builds, combining senior engineering talent with transparent fixed pricing. Unlike bloated North Texas marketing agencies that bill open-ended hourly retainers, FactoryJet provides direct access to veteran commerce engineers who build high-performing Shopify Plus, BigCommerce, and WooCommerce systems delivered in weeks.',
  },
  {
    category: 'agency',
    question: 'What types of Dallas-Fort Worth companies do your top e-commerce developers support?',
    answer:
      'We partner with enterprise wholesale distributors across DFW, industrial manufacturing hubs in Irving and Plano, fast-growing consumer brands in Frisco, and high-volume retail logistics operations throughout Texas.',
  },
  {
    category: 'agency',
    question: 'How do top e-commerce developers in Dallas approach multi-warehouse logistics?',
    answer:
      'Our top developers build distributed order management (DOM) pipelines that evaluate customer delivery zip codes against stock balances across Dallas, Houston, and national 3PL facilities, routing fulfillment to minimize carrier transit time and freight zone surcharges.',
  },
  {
    category: 'agency',
    question: 'How does FactoryJet compare to traditional Texas digital consultancies?',
    answer:
      'Traditional Texas consultancies charge $100,000+ for multi-month discovery slide decks without writing a single line of production code. FactoryJet is an engineering-first firm: we scope the build up front and ship production-ready storefronts on fixed timelines.',
  },

  // B2B & 3PL Logistics
  {
    category: 'b2b',
    question: 'How do you build custom B2B wholesale portals for Dallas distributors?',
    answer:
      'Using BigCommerce B2B Edition or Shopify Plus native B2B, we create password-protected wholesale portals where corporate buyers log in to view negotiated contract pricing, submit purchase orders on Net terms, and manage multi-location branch requisitions.',
  },
  {
    category: 'b2b',
    question: 'Can corporate buyers search by manufacturer part numbers (MPNs) and upload bulk CSV orders?',
    answer:
      'Yes. We build high-speed B2B search filters indexing MPNs, OEM cross-references, and technical specifications, alongside bulk CSV order pads where buyers upload thousands of line items in seconds.',
  },
  {
    category: 'b2b',
    question: 'How do you configure sales representative order creation and quoting in DFW?',
    answer:
      'We implement sales representative masquerade tools, enabling your internal account managers to construct quotes on behalf of wholesale clients, apply custom volume discounts, and send direct checkout links.',
  },

  // ERP & Platform Tech
  {
    category: 'erp',
    question: 'Which ERP platforms do your Dallas developers connect to e-commerce stores?',
    answer:
      'We build bi-directional integration pipelines for NetSuite, SAP S/4HANA, Epicor Prophet 21, Microsoft Dynamics 365, Acumatica, and QuickBooks Enterprise, synchronizing inventory and orders in real time.',
  },
  {
    category: 'erp',
    question: 'Can you migrate legacy Magento 1 or Magento 2 stores to Shopify Plus or BigCommerce?',
    answer:
      'Yes. We have executed hundreds of frictionless Magento migrations. We transfer full historical customer data, order histories, and SKU catalogs, map comprehensive 301 redirect tables to protect organic SEO rankings, and test on staging before cutover.',
  },
  {
    category: 'erp',
    question: 'How do you prepare Dallas brands for agentic commerce and AI shopping agents?',
    answer:
      'We build comprehensive JSON-LD schema layers and dedicated Model Context Protocol (MCP) server endpoints, enabling autonomous shopping assistants (OpenAI Operator, Google Astra, Perplexity) to discover, query stock, and execute delegated token checkouts on your store.',
  },

  // Fixed Pricing & Scoping
  {
    category: 'pricing',
    question: 'How much does e-commerce development cost with a top Dallas agency?',
    answer:
      'While standard Dallas agencies charge open-ended retainers of $25,000+ per month, FactoryJet provides clear, fixed-price project milestones starting from $4,500 for custom builds and migrations, scoped fully up front before any code is written.',
  },
  {
    category: 'pricing',
    question: 'Do you charge ongoing percentages of gross merchandise volume (GMV)?',
    answer:
      'Never. You retain 100% of your revenue. We never take revenue shares or charge hidden licensing fees.',
  },
  {
    category: 'pricing',
    question: 'How fast can our Dallas e-commerce store launch?',
    answer:
      'Depending on complexity, standard high-performance storefronts launch in 2 to 4 weeks, with enterprise B2B or ERP-connected builds launching in 5 to 8 weeks.',
  },
  {
    category: 'pricing',
    question: 'How do we schedule an architecture consultation with the founder in Dallas?',
    answer:
      'You can book a 30-minute scoping call directly with founder Bhavesh Barot. We will analyze your current store performance, catalog architecture, and growth targets to deliver a comprehensive fixed-price engineering proposal.',
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

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FactoryJet - Best E-Commerce Development Agency Dallas',
  description:
    'Top e-commerce development company in Dallas TX. Custom Shopify Plus, BigCommerce B2B, Headless Next.js, and NetSuite ERP integrations for manufacturing, wholesale, and DTC brands.',
  url: 'https://factoryjet.com/dallas/ecommerce-development',
  telephone: '+1-800-FACTORYJET',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [{ '@type': 'City', name: 'Dallas' }, { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth Metroplex' }],
  priceRange: '$$$$',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Dallas', item: 'https://factoryjet.com/dallas/ecommerce-development' },
  ],
};

const STATS = [
  { b: 'Top Ranked DFW', s: 'best e-commerce developers' },
  { b: 'Sub-Second LCP', s: 'guaranteed mobile speed' },
  { b: 'B2B & ERP Sync', s: 'NetSuite, SAP, Epicor ready' },
  { b: '500+ Stores', s: 'delivered across global markets' },
];

const SOURCED = [
  {
    v: '$90 Billion',
    d: 'annual B2B and retail digital commerce transactions originating across the Dallas-Fort Worth Metroplex and Texas triangle.',
    src: 'Texas Commerce Association',
    href: 'https://www.statista.com',
  },
  {
    v: '58%',
    d: 'of North Texas industrial suppliers report digital B2B portals with automated quoting convert 3x higher than manual phone and email processing.',
    src: 'Industrial Distribution Benchmark',
    href: 'https://www.forrester.com',
  },
  {
    v: '< 150ms',
    d: 'real-time inventory synchronization latency achieved by FactoryJet bi-directional ERP middleware across Texas distribution centers.',
    src: 'FactoryJet Commerce Engineering',
    href: 'https://factoryjet.com',
  },
];

const PILLARS = [
  { i: '◈', t: '1. Best E-Commerce Development Agency Standards', d: 'We engineer bespoke, high-converting digital storefronts on Shopify Plus, BigCommerce B2B, and WooCommerce tailored to Dallas brands.' },
  { i: '◇', t: '2. Top E-Commerce Developers & Senior Engineering', d: 'Work directly with veteran commerce architects who write clean, maintainable code rather than junior agency account coordinators.' },
  { i: '↯', t: '3. Enterprise B2B Portals & RFQ Quoting', d: 'Deploy corporate buyer hierarchies, Net payment terms, custom price lists, and automated quotation workflows for wholesale scale.' },
  { i: '▤', t: '4. Enterprise ERP, CRM & HubSpot Integration', d: 'Connect NetSuite, SAP, Epicor, Katana, Klaviyo, and HubSpot directly into your store with automated bi-directional data pipelines.' },
  { i: '⛓', t: '5. Frictionless Replatforming & Migration', d: 'Migrate from legacy Magento, WooCommerce, or custom monoliths to modern Shopify Plus with zero downtime and 100% SEO rank preservation.' },
  { i: '⤢', t: '6. Agentic Commerce & AI Agent Discoverability', d: 'Deploy structured JSON-LD schemas and MCP server endpoints so autonomous AI shoppers cite, recommend, and purchase your products.' },
];

export default function DallasEcommercePage() {
  return (
    <>
      <script id="dal-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="dal-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="dal-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Best E-Commerce Development Agency in Dallas</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Top e-commerce developers in <span className="pp-grad">Dallas TX.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Ranked the Best E-Commerce Development Company in Dallas. High-performance Shopify Plus, BigCommerce B2B,
                  Headless Next.js, and NetSuite ERP integrations for manufacturing, wholesale, and DTC brands.
                </p>
                <HeroInlineForm source="us_dallas_ecommerce_hero" region="us" submitLabel="Get a Dallas Store Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Dallas e-commerce architecture diagram showing B2B wholesale quoting, Shopify Plus, and NetSuite ERP synchronization."
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
                  DFW B2B &amp; Logistics Engine
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify Plus · BigCommerce B2B · NetSuite ERP · RFQ Engine
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Shopify Plus', desc: 'Custom Theme' },
                    { name: 'BigCommerce', desc: 'B2B Edition' },
                    { name: 'NetSuite ERP', desc: 'Live Inventory' },
                    { name: 'RFQ Engine', desc: 'Custom Quotes' },
                    { name: 'Net Terms', desc: 'Net 30/60/90' },
                    { name: 'AI Commerce', desc: 'MCP Protocol' },
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
                    Top E-Commerce Company Dallas
                  </div>
                  <div>Zero Retainer Waste · 100% Senior Engineers</div>
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
            <p className="pp-mlabel">// why we are the top e-commerce agency in dallas</p>
            <h2 style={{ marginTop: '10px' }}>What makes FactoryJet the Best E-Commerce Development Agency in Dallas?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The FactoryJet Advantage:</strong> As the leading e-commerce development company in Dallas,
                FactoryJet replaces bloated agency retainers with senior engineering execution. We design and develop bespoke
                digital storefronts on Shopify Plus, BigCommerce B2B Edition, WooCommerce, and headless Next.js architectures that achieve
                sub-second mobile load times and automate multi-warehouse wholesale distribution.
              </p>
              <p>
                North Texas manufacturers, industrial suppliers, and consumer brands require resilient commerce infrastructure that connects
                complex catalog matrices to back-office ERP systems like NetSuite, SAP, Epicor, and Acumatica. Our top e-commerce developers
                build custom B2B quoting portals, Net terms checkout, and automated multi-warehouse order routing.
              </p>
              <p>
                Whether you are launching a direct-to-consumer brand in Frisco, modernizing an industrial wholesale catalog in Irving,
                or replatforming an enterprise store from legacy Magento, FactoryJet delivers fixed-price certainty with zero agency fluff.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// dallas commerce benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>Dallas e-commerce performance by the numbers</h2>
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
            <p className="pp-mlabel">// full-funnel commerce engineering</p>
            <h2 style={{ marginTop: '10px' }}>Why Dallas brands choose our top e-commerce developers</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              From bespoke UI/UX storefront design to complex ERP and marketplace integrations, we provide end-to-end commerce development.
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
        <section className="pp-sec" id="dal-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_dallas_ecommerce_page"
              defaultPlatform="magento"
              defaultTarget="bigcommerce-b2b"
            />
          </div>
        </section>

        {/* ── DFW Logistics Case Study ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// north texas wholesale engineering</p>
            <h2 style={{ marginTop: '10px' }}>Modernizing Industrial Wholesale &amp; Multi-Warehouse 3PL in DFW</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/dallas-fort-worth-wholesale-logistics-commerce.webp`}
                alt="Dallas Fort Worth wholesale distribution and multi-warehouse logistics e-commerce"
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Dallas-Fort Worth is the primary logistics and distribution crossroads of North America. Wholesale distributors
                operating in North Texas require high-speed digital commerce portals connected to multi-facility 3PL distribution centers.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. NetSuite, SAP &amp; Epicor Real-Time Integration</h3>
              <p>
                We build bi-directional data pipelines synchronizing warehouse stock, customer credit limits, and negotiated contract
                price sheets directly from back-office ERP systems (NetSuite, SAP S/4HANA, and Epicor Prophet 21) to the storefront.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Automated RFQ &amp; Sales Rep Masquerade Portals</h3>
              <p>
                Industrial buyers submit complex bills-of-materials for instant quoting. Internal sales representatives log into customer
                accounts via masquerade tools to refine volume discounts, generate official PDF quotations, and close high-value orders.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Bulk SKU Matrix Ordering &amp; Technical Part Search</h3>
              <p>
                Our high-speed faceted search indexes manufacturer part numbers (MPNs), OEM cross-references, and technical CAD diagrams,
                allowing industrial engineers and purchasing managers to reorder hundreds of replacement parts in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7-Step Commerce Engineering Process ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// senior engineering methodology</p>
            <h2 style={{ marginTop: '10px' }}>Our 7-Step E-Commerce Engineering Process for Dallas Brands</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Building a market-leading digital storefront requires rigorous engineering discipline, transparent fixed-price
                scoping, and close technical collaboration. Here is how our top e-commerce developers execute projects for Dallas companies:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 1: Technical Discovery &amp; Catalog Architecture Audit</h3>
              <p>
                We conduct an exhaustive technical audit of your existing SKU catalog, variant matrices, customer data schemas, and ERP workflows.
                We identify performance bottlenecks, database query inefficiencies, and third-party app bloat that drag down conversion rates.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 2: Wireframing &amp; High-Converting UI/UX Design</h3>
              <p>
                Our designers construct bespoke storefront layouts tailored to North Texas B2B and retail aesthetics. Every user interface
                component is designed with mobile-first conversion principles, rapid product filtering, and frictionless 1-click accelerated checkout paths.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 3: Frontend Theme &amp; Component Engineering</h3>
              <p>
                We build clean, maintainable Shopify Liquid themes or Headless Next.js 15 React Server Components with zero unneeded third-party libraries.
                Our code adheres to strict TypeScript standards, ensuring modularity, accessibility (WCAG 2.1 AA), and sub-second rendering.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 4: ERP, CRM &amp; Marketplace Middleware Integration</h3>
              <p>
                We engineer custom bi-directional API pipelines connecting your store to NetSuite, SAP, Katana, Klaviyo, HubSpot, and marketplace channels
                (Amazon SP-API, Walmart Marketplace, TikTok Shop), synchronizing inventory balances and customer order records in real time.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 5: Full Catalog Migration &amp; 301 Redirect Mapping</h3>
              <p>
                If migrating from legacy Magento, WooCommerce, or custom backends, we transfer full customer accounts, historical order records,
                and SKU catalogs. We build comprehensive 1-to-1 301 redirect maps to guarantee zero loss of organic SEO search rankings and backlinks.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 6: Rigorous QA, Load Testing &amp; Security Auditing</h3>
              <p>
                We run automated load tests simulating 50,000+ simultaneous shoppers, verify payment gateway webhooks across all currencies,
                and audit Core Web Vitals to guarantee sub-1.2s Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Step 7: Production Cutover, Schema Validation &amp; 24/7 Monitoring</h3>
              <p>
                We execute zero-downtime DNS cutover, validate structured JSON-LD schemas with Google Search Console, submit instant IndexNow pings,
                and provide real-time uptime monitoring to ensure your Dallas commerce engine generates revenue without interruption.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// agency model comparison</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet vs. Traditional Dallas Consultancies vs. Freelancers</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              See why leading Texas wholesale distributors choose our direct engineering model over high-overhead consulting firms.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Agency Dimension</th>
                    <th>FactoryJet (Top Developers)</th>
                    <th>Dallas Consultancies</th>
                    <th>Freelancers / Offshore</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Pricing &amp; Billing Model</td>
                    <td>100% Fixed-Price Milestones</td>
                    <td>$30k+/mo Retainers + Hourly Overage</td>
                    <td>Unpredictable Hourly Rates</td>
                  </tr>
                  <tr>
                    <td className="name">Direct Senior Engineer Access</td>
                    <td>Yes (Direct communication with builders)</td>
                    <td>No (Layers of account coordinators)</td>
                    <td>Yes (Variable skill levels)</td>
                  </tr>
                  <tr className="me">
                    <td className="name">B2B Quoting &amp; RFQ Engines</td>
                    <td>Native built-in custom quotation tools</td>
                    <td>Subcontracted to third parties</td>
                    <td>Limited to basic plugins</td>
                  </tr>
                  <tr>
                    <td className="name">ERP Real-Time Synchronization</td>
                    <td>Custom NetSuite, SAP &amp; Epicor APIs</td>
                    <td>Heavy custom software billing</td>
                    <td>Basic batch export scripts</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Time to Production Launch</td>
                    <td>2 to 4 Weeks</td>
                    <td>4 to 8 Months</td>
                    <td>Frequent project delays</td>
                  </tr>
                  <tr>
                    <td className="name">Ongoing Revenue Share</td>
                    <td>0% (You keep 100% of revenue)</td>
                    <td>Often demand revenue percentage</td>
                    <td>0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about e-commerce development in Dallas"
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
                <p className="pp-mlabel">// partner with top dallas developers</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to build with Dallas’s top e-commerce agency?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us evaluate your B2B quotation workflows, review your NetSuite ERP requirements, and deliver a
                  fixed-price implementation proposal before any build begins.
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
                  &ldquo;FactoryJet is the best e-commerce development agency in Texas. They connected our NetSuite ERP and
                  built our BigCommerce B2B portal in under 5 weeks with zero downtime.&rdquo;
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
