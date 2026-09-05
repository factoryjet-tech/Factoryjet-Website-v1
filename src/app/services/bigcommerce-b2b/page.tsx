import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import B2bWholesaleCalculator from '@/components/commerce/B2bWholesaleCalculator';
import Net30PaymentComparison from '@/components/commerce/Net30PaymentComparison';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'BigCommerce B2B Edition Agency & Development | FactoryJet',
  description:
    'Scale enterprise wholesale with BigCommerce B2B Edition. Custom quoting, corporate account hierarchies, sales rep tools, PunchOut, and real-time ERP sync.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'BigCommerce B2B Edition Agency & Development | FactoryJet',
    description:
      'Enterprise B2B wholesale portals on BigCommerce B2B Edition. Custom quotes, buyer approval workflows, PunchOut catalogs, and ERP synchronization.',
    url: 'https://factoryjet.com/services/bigcommerce-b2b',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'BigCommerce B2B Edition Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce B2B Edition Agency | FactoryJet',
    description: 'Build enterprise B2B portals with BigCommerce B2B Edition, automated RFQ workflows, and ERP connectors.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/bigcommerce-b2b' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'BigCommerce B2B Edition', url: '/services/bigcommerce-b2b' },
];

const FAQ_CATEGORIES = [
  { key: 'features', label: 'B2B Edition Features' },
  { key: 'quoting', label: 'Quoting & PunchOut' },
  { key: 'erp', label: 'ERP & Workflows' },
  { key: 'commercials', label: 'Scoping & Pricing' },
];

const FAQ_ITEMS = [
  // B2B Edition Features
  {
    category: 'features',
    question: 'What is BigCommerce B2B Edition and who is it designed for?',
    answer:
      'BigCommerce B2B Edition is an enterprise wholesale suite built on BigCommerce. It gives you multi-tier company hierarchies and buyer approval rules. It includes automated RFQ quoting engines and sales rep masquerade. It is built for manufacturers, distributors, and wholesale brands.',
  },
  {
    category: 'features',
    question: 'How do corporate buyer account hierarchies work in BigCommerce B2B Edition?',
    answer:
      'Corporate clients set up company accounts. They build parent-child links across divisions and branches. Company admins assign granular roles to team members. For example, senior buyers have full approval authority while junior staff have spend limits.',
  },
  {
    category: 'features',
    question: 'Can B2B customers create custom shopping lists and quick-order pads?',
    answer:
      'Yes. Buyers can save custom shopping lists for recurring restocks. They search products by part number or SKU. They can also upload bulk CSV spreadsheets to fill carts in seconds.',
  },
  {
    category: 'features',
    question: 'How are customer-specific price lists managed in BigCommerce B2B?',
    answer:
      'You can set custom price lists for customer groups or individual accounts. Support percentage discounts or fixed contract unit prices. You can also assign volume tiers and custom shipping rates.',
  },

  // Quoting & PunchOut
  {
    category: 'quoting',
    question: 'How does the automated Request for Quote (RFQ) engine work?',
    answer:
      'Buyers can convert shopping carts into quote requests with one click. They attach custom notes and target prices. Sales reps get instant alerts. They review margins, adjust line discounts, and return digital quotes. Buyers complete checkout in one click.',
  },
  {
    category: 'quoting',
    question: 'What is PunchOut e-procurement (cXML / OCI) and how is it supported?',
    answer:
      'PunchOut lets enterprise buyers access your catalog from within their procurement software. This supports SAP Ariba, Coupa, and Jaggaer. When a buyer completes a cart, items transfer into their ERP for PO approval.',
  },
  {
    category: 'quoting',
    question: 'How does sales representative masquerade work?',
    answer:
      'Sales reps can log into the store for any wholesale customer. They view custom pricing and build orders. They configure quotes and submit purchase orders on the buyer’s behalf.',
  },

  // ERP & Workflows
  {
    category: 'erp',
    question: 'How does FactoryJet connect BigCommerce B2B Edition to our ERP?',
    answer:
      'We build REST and GraphQL middleware connecting BigCommerce B2B Edition to your ERP. We support NetSuite, SAP, Dynamics 365, Epicor, Infor, and Acumatica. Credit balances, open invoices, inventory counts, and orders sync in real time.',
  },
  {
    category: 'erp',
    question: 'How are invoice payments and Net terms handled?',
    answer:
      'Wholesale buyers check out on Net 30, 60, or 90 terms. Credit lines are approved in advance. The portal provides invoice management. Finance teams can view open balances. They download PDF invoices and pay via ACH or card.',
  },
  {
    category: 'erp',
    question: 'Can BigCommerce B2B Edition run a hybrid DTC and B2B model?',
    answer:
      'Yes. BigCommerce B2B Edition powers unified storefronts. Retail consumers browse standard pricing on the main site. Logged-in wholesale accounts see custom price lists, Net terms, and quoting tools.',
  },

  // Commercials & Scoping
  {
    category: 'commercials',
    question: 'How long does a BigCommerce B2B Edition implementation take?',
    answer:
      'A complete enterprise B2B portal deployment takes 5 to 8 weeks. This includes catalog mapping and price list setup. It also covers ERP connector integration and end-to-end testing.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for BigCommerce B2B development?',
    answer:
      'We work on transparent fixed-price milestone contracts. We never charge percentage revenue shares. We never bill open-ended hourly rates.',
  },
  {
    category: 'commercials',
    question: 'How do we schedule a BigCommerce B2B scoping call with the founder?',
    answer:
      'You can book a 30-minute scoping call directly with Bhavesh Barot. We analyze your wholesale pricing rules and ERP architecture. Then we deliver a comprehensive fixed-scope proposal.',
  },
  {
    category: 'b2b',
    question: 'How do you handle custom trade credit applications and customer onboarding on BigCommerce?',
    answer:
      'We build automated corporate registration flows. Wholesale applicants submit credit references, resale forms, and company details. Once approved, buyer accounts receive custom payment terms and price lists right away.',
  },
  {
    category: 'b2b',
    question: 'How does BigCommerce B2B Edition support multi-tier customer group pricing?',
    answer:
      'Create unlimited customer groups with custom price lists and volume tiers. You can also assign category percentage discounts. Corporate buyers see contracted pricing as soon as they log in.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B Edition integrate with warehouse management systems (WMS)?',
    answer:
      'We link BigCommerce B2B to WMS platforms. We support ShipHero, Deposco, SkuVault, and Logiwa. Orders route to fulfillment queues instantly. The system creates compliant pallet shipping labels. It sends ASN tracking updates to buyer accounts.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B connect to Acumatica and QuickBooks Enterprise?',
    answer:
      'We build bi-directional API pipelines for Acumatica and QuickBooks. Inventory levels, purchase orders, customer contract terms, and tracking numbers sync in real time. This cuts manual entry completely.',
  },
  {
    category: 'b2b',
    question: 'Can corporate buyers set up multi-user approval workflows with spend limits?',
    answer:
      'Yes. Enterprise accounts can set up multi-tier approval chains. Junior buyers can draft orders. Purchases over $5,000 route to a purchasing manager for digital approval prior to fulfillment.',
  },
  {
    category: 'features',
    question: 'How does BigCommerce B2B Edition handle contract pricing for thousands of custom SKUs?',
    answer:
      'Brands assign custom SKU rates and margins. Currency rules apply to accounts without slowing catalog speeds. BigCommerce B2B Edition uses fast price list APIs supporting over 100,000 price entries.',
  },
  {
    category: 'features',
    question: 'Can corporate buyers download official invoices and statement of accounts in PDF?',
    answer:
      'Yes. Corporate buyers and accounting teams get self-service access to past orders and tracking numbers. They can review open balances and download PDF invoices directly in their B2B portal.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B Edition support multi-warehouse inventory routing and LTL freight shipping?',
    answer:
      'We integrate carrier freight APIs and multi-location inventory routing. For oversized or pallet orders, checkout calculates real-time LTL freight rates. Orders route to the nearest warehouse automatically.',
  },
  {
    category: 'commercials',
    question: 'What is the difference between BigCommerce B2B Edition and Adobe Commerce (Magento B2B)?',
    answer:
      'Adobe Commerce requires heavy self-hosted servers, frequent security patches, and high maintenance costs. BigCommerce B2B Edition delivers an enterprise SaaS setup. It provides native quoting, PunchOut, and corporate hierarchies at a lower cost of ownership.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B Edition handle custom freight carrier rate calculation?',
    answer:
      'We connect LTL freight rating engines like Freightview and ShipHawk. They calculate live freight rates. Quotes factor in freight class, dock access, and liftgate needs.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'BigCommerce B2B Edition Development Agency',
  name: 'BigCommerce B2B Edition Wholesale Development',
  description:
    'Enterprise BigCommerce B2B Edition development, custom quoting engines, PunchOut e-procurement, sales rep masquerade, and real-time ERP integration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'B2B Manufacturers, Distributors, and Enterprises' },
};

const howtoSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Deploys BigCommerce B2B Edition Wholesale Portals',
  description: 'Our 3-stage enterprise framework for building BigCommerce B2B portals.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Wholesale Hierarchy & Quoting Blueprint', text: 'We map buyer permission rules, pricing tiers, and quoting negotiation logic.' },
    { '@type': 'HowToStep', position: 2, name: 'B2B Edition Architecture & ERP Connection', text: 'We configure BigCommerce B2B Edition, invoice payment portals, and ERP connectors (NetSuite, SAP, Epicor).' },
    { '@type': 'HowToStep', position: 3, name: 'PunchOut & User Acceptance Testing', text: 'We test PunchOut cXML feeds, quote approval workflows, and live buyer ordering.' },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/bigcommerce-b2b#webpage',
  name: 'BigCommerce B2B Edition Agency & Development | FactoryJet',
  description: 'Enterprise B2B wholesale portals on BigCommerce B2B Edition with custom quotes, buyer hierarchies, and ERP sync.',
  url: 'https://factoryjet.com/services/bigcommerce-b2b',
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
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'B2B E-Commerce', item: 'https://factoryjet.com/b2b-ecommerce' },
    { '@type': 'ListItem', position: 3, name: 'BigCommerce B2B', item: 'https://factoryjet.com/services/bigcommerce-b2b' },
  ],
};

const STATS = [
  { b: 'Enterprise B2B', s: 'RFQ quoting & PunchOut ready.' },
  { b: 'Buyer Roles', s: 'Granular corporate permissions.' },
  { b: 'ERP Real-Time', s: 'NetSuite, SAP & Epicor sync.' },
  { b: '0% Rev-Share', s: 'Fixed-price project scoping.' },
];

const SOURCED = [
  {
    v: '50%+',
    d: 'Quote turnaround time cut achieved by manufacturers using automated BigCommerce B2B RFQ tools.',
    src: 'BigCommerce Enterprise Study.',
    href: 'https://www.bigcommerce.com/b2b-edition',
  },
  {
    v: '74%',
    d: 'Enterprise buyers prefer PunchOut ordering. They buy directly within their internal ERP systems.',
    src: 'Gartner B2B Digital Commerce Survey.',
    href: 'https://www.gartner.com',
  },
  {
    v: '3.2x',
    d: 'increase in wholesale reorder frequency realized by distributors providing self-service invoice payment portals.',
    src: 'Forrester B2B Commerce Benchmark.',
    href: 'https://www.forrester.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Automated RFQ & Quoting Engine.', d: 'Buyers request custom quotes from their carts. Sales reps return adjusted pricing with expiration windows.' },
  { i: '◇', t: 'Corporate Account Hierarchies.', d: 'Configure multi-level buyer organizations. Set spend limits and facility shipping addresses.' },
  { i: '↯', t: 'Sales Representative Masquerade.', d: 'Sales teams browse on behalf of corporate clients. They construct custom order proposals and close deals instantly.' },
  { i: '▤', t: 'PunchOut E-Procurement (cXML & OCI).', d: 'Connect your catalog directly to buyer ERPs like SAP Ariba and Coupa. Enable automated enterprise requisitioning.' },
  { i: '⛓', t: 'Self-Service Invoice Portal & Net Terms.', d: 'Give accounting teams access to open invoices. Let buyers download statements and execute ACH payments.' },
  { i: '⤢', t: 'Bi-Directional ERP & WMS Connectors.', d: 'Sync inventory counts and open purchase orders. Update contract pricing and credit balances across your core ERP.' },
];

export default function BigCommerceB2BPage() {
  return (
    <>
      <script id="bc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="bc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="bc-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      <script id="bc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script id="bc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="bc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <div className="pp-wrap" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">BigCommerce B2B Edition Agency.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Enterprise wholesale on. <span className="pp-grad">BigCommerce B2B.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Custom quoting engines, corporate hierarchies, and sales rep masquerade. Native PunchOut e-procurement and real-time ERP sync for distributors.
                </p>
                <HeroInlineForm source="us_bigcommerce_b2b_hero" region="us" submitLabel="Get a BigCommerce B2B Scope." />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="BigCommerce B2B Edition architecture diagram showing RFQ quoting engine, PunchOut integration, and ERP sync."
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
                  BigCommerce B2B Edition Suite.
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    RFQ Quoting · PunchOut cXML · Buyer Approval · NetSuite / SAP.
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'RFQ Engine', desc: 'Custom Quotes.' },
                    { name: 'PunchOut', desc: 'Ariba / Coupa.' },
                    { name: 'Buyer Roles', desc: 'Approval Limits.' },
                    { name: 'Rep Masquerade', desc: 'Sales Ordering.' },
                    { name: 'Invoice Hub', desc: 'ACH & Net Terms.' },
                    { name: 'ERP Core', desc: 'SAP / Dynamics.' },
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
                    Enterprise B2B Certified.
                  </div>
                  <div>Complex Quoting &amp; PunchOut Ready.</div>
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

        {/* ── What Is Section ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// enterprise wholesale architecture</p>
            <h2 style={{ marginTop: '10px' }}>What is BigCommerce B2B Edition development?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                BigCommerce B2B Edition development is the enterprise engineering of wholesale buyer portals.
                We build custom quotation negotiation systems and buyer permission hierarchies. We also deploy
                PunchOut e-procurement integrations on BigCommerce.
              </p>
              <p>
                Industrial manufacturers and distributors need tools that standard retail platforms lack.
                They require multi-tier buyer purchasing approval limits. They need custom quotes with line discounts.
                They also need direct PunchOut links to SAP Ariba or Coupa, plus sales rep masquerade.
              </p>
              <p>
                FactoryJet builds end-to-end BigCommerce B2B Edition portals. We configure complex price list matrices.
                We deploy automated RFQ workflows and build custom self-service invoice payment hubs. We also engineer
                bi-directional ERP connectors linking NetSuite, SAP, Epicor, or Dynamics 365.
              </p>
              <p>
                Digitize manual order entry and phone quotes on BigCommerce B2B Edition. Manufacturers and distributors achieve a 40%+ cut in order costs. Quote turnaround drops from days to minutes.
              </p>
              <p>
                Launch a dedicated wholesale portal or headless Catalyst store. Our systems engineering ensures sub-second catalog speeds and zero downtime. We protect data across millions in monthly volume. We remove software friction so sales reps focus on client relationships. Every project includes post-launch hypercare, staff training, and clear milestones.
              </p>
              <p>
                Manage complex multi-brand catalogs with millions of fitment SKUs. BigCommerce B2B Edition scales smoothly. It runs without database lockups or server strain.
              </p>
            </div>

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '36px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="BigCommerce B2B Edition Architecture."
                definition="BigCommerce B2B Edition is an enterprise wholesale SaaS platform. It integrates native RFQ negotiation, multi-tier company hierarchies, and buyer approval rules. It also provides sales rep order masquerade and self-service invoice portals on open APIs."
                keyTakeaways={[
                  'Provides enterprise B2B functionality without the high hosting overhead of open-source platforms.',
                  'REST and GraphQL APIs support real-time synchronization with ERPs like NetSuite, SAP, and Epicor.',
                  'Composable headless storefront support through modern Next.js Catalyst architecture.',
                ]}
                citationSource="FactoryJet BigCommerce B2B Architecture Standard (2026)"
              />
              <AnswerFirstDefinition
                term="Automated RFQ & Digital Quoting Engines."
                definition="An automated RFQ engine lets buyers turn shopping carts into quote proposals. Sales reps receive instant margin alerts. They adjust line discounts and return digital quotes. Buyers complete checkout with one click."
                keyTakeaways={[
                  'Reduces quote negotiation turnaround time from 72 hours to under 15 minutes.',
                  'Maintains strict gross margin guardrails for sales representatives during discount adjustments.',
                  'Converts accepted quotes into authorized sales orders without manual invoice re-entry.',
                ]}
                citationSource="FactoryJet B2B Quoting Benchmark (2026)"
              />
              <AnswerFirstDefinition
                term="PunchOut e-Procurement (cXML / OCI)."
                definition="PunchOut e-procurement connects your catalog directly to buyer ERP tools like SAP Ariba, Coupa, and Oracle Fusion. Corporate buyers browse contracted catalogs. They transfer items into their ERP for approval without public checkout."
                keyTakeaways={[
                  'Meets mandatory procurement compliance rules for Fortune 500, government, and healthcare buyers.',
                  'Eliminates manual purchase order PDF entry and asynchronous billing disputes.',
                  'Automates electronic Purchase Order (OrderRequest) ingestion directly into warehouse picking queues.',
                ]}
                citationSource="FactoryJet Enterprise e-Procurement Standard (2026)"
              />
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// enterprise benchmark data</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce B2B Edition by the numbers.</h2>
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

        {/* ── Benefits ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it matters</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise capabilities of our BigCommerce B2B builds.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              Designed to automate wholesale sales pipelines, accelerate high-ticket RFQs, and eliminate administrative overhead.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <div className="pp-card" key={b.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{b.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{b.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive ROI Calculator ── */}
        <section className="pp-sec" id="bigcommerce-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_bigcommerce_b2b_page"
              defaultPlatform="magento"
              defaultTarget="bigcommerce-b2b"
            />
          </div>
        </section>

        {/* ── Use Case & Imagery Section ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// enterprise quoting showcase</p>
                <h2 style={{ marginTop: '8px' }}>BigCommerce B2B Quoting &amp; PunchOut Architecture</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  How FactoryJet configures automated RFQ engines. We set corporate buyer roles and PunchOut feeds for manufacturers.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope BigCommerce B2B" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/bigcommerce-b2b-edition-quoting.webp`}
                alt="BigCommerce B2B Edition quotation dashboard and buyer permissions."
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        
        {/* ── PunchOut E-Procurement Architecture: SAP Ariba & Coupa Flows ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// enterprise e-procurement</p>
            <h2 style={{ marginTop: '10px' }}>PunchOut cXML Architecture. Connecting Enterprise Buyers on SAP Ariba and Coupa.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Enterprise buyers, healthcare systems, and government teams often mandate PunchOut tools. Procurement teams access your catalog directly from within their internal ERP systems. They avoid public consumer storefronts completely.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. PunchOut Setup Request (cXML POSR)</h3>
              <p>
                A buyer initiates a purchase in SAP Ariba or Coupa. Their system sends an authenticated cXML payload to BigCommerce. Our middleware opens a buyer session with pre-negotiated contract pricing.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Catalog Browsing &amp; Order Message Transfer (cXML POOM)</h3>
              <p>
                The buyer browses your technical catalog and builds their order list. They click PunchOut. The BigCommerce store transfers itemized SKUs, descriptions, and contract prices back to the buyer ERP for approval.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Automated Purchase Order Ingestion (cXML OrderRequest)</h3>
              <p>
                Once approved, the buyer ERP transmits an electronic Purchase Order into your BigCommerce queue. It generates picking slips in your warehouse management software without manual data entry.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Headless Catalyst & Custom B2B Customer Portal Framework ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// headless b2b architecture</p>
            <h2 style={{ marginTop: '10px' }}>Headless BigCommerce Catalyst Architecture for Enterprise Wholesale.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                For high-volume distributors needing custom buying flows, FactoryJet builds composable frontends. We use BigCommerce Catalyst on Next.js 15 App Router.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. High-Performance B2B SKU Ordering Grid</h3>
              <p>
                Our headless ordering grids let buyers view 500+ parts at once. They enter quantities directly into line items. Buyers can build a $50,000 order in under 30 seconds.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Real-Time Multi-Warehouse Inventory Status</h3>
              <p>
                Display live inventory across regional fulfillment centers. Corporate buyers select preferred warehouse locations. This cuts transit times and freight expenses.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. One-Click Reordering &amp; Scheduled Recurring Deliveries</h3>
              <p>
                Corporate clients save recurring supply orders. They set replenishment schedules and download official PDF tax invoices directly.
              </p>
            </div>
          </div>
        </section>

        {/* ── Enterprise Corporate Account Modeling & Approvals ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// account modeling &amp; governance</p>
            <h2 style={{ marginTop: '10px' }}>Corporate Account Hierarchies &amp; Multi-Tier Buyer Approval Workflows</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Consumer stores treat buyers as individuals. Enterprise B2B purchasing demands strict organizational hierarchies and spending controls.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Multi-Tiered Corporate Account Structures</h3>
              <p>
                Configure master corporate accounts with parent-child structures across subsidiaries and job sites. Account admins have full oversight of company orders, invoices, and credit limits.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Role-Based Buyer Permissions &amp; Spending Caps</h3>
              <p>
                Assign granular roles to team members. Senior buyers authorize orders up to $25,000. Junior requisitioners build quote lists. Accounts payable staff manage ACH payments. Orders exceeding thresholds trigger management approval automatically.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Address Book &amp; Billing Entity Isolation</h3>
              <p>
                Restrict buyer logins to authorized delivery addresses and tax jurisdictions. Branch managers see only approved delivery docks. This prevents misrouted shipments and billing errors.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bi-Directional ERP & WMS Middleware Architecture ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// enterprise erp middleware</p>
            <h2 style={{ marginTop: '10px' }}>Bi-Directional ERP Integration: NetSuite, SAP, Epicor, &amp; Dynamics.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                FactoryJet builds API pipelines connecting BigCommerce B2B Edition to your core ERP systems.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Real-Time Customer Contract Pricing Synchronization</h3>
              <p>
                When wholesale contracts or volume discounts update in your ERP, webhooks fire. Our sync updates BigCommerce B2B price lists in bulk instantly. This cuts manual entry errors.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Live Credit Line &amp; Aging Invoice Verification</h3>
              <p>
                Before checkout on Net terms, our middleware checks ERP ledgers in under 150ms. If an account has past-due balances, checkout pauses. It prompts for credit card payment right away.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Automated Purchase Order Ingestion &amp; Fulfillment Routing</h3>
              <p>
                Submitted orders transmit directly into your ERP and WMS. The system creates picking tickets. It reserves warehouse stock and sends ASN updates to the portal.
              </p>
            </div>
          </div>
        </section>

        {/* ── PunchOut e-Procurement for Fortune 500 Purchasing ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// fortune 500 procurement</p>
            <h2 style={{ marginTop: '10px' }}>PunchOut e-Procurement (cXML / OCI): Connecting to SAP Ariba &amp; Coupa.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Fortune 500 corporations, universities, and agencies often mandate e-procurement integrations for approved vendors.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Frictionless Procurement Session Handshake</h3>
              <p>
                Buyers click PunchOut in tools like SAP Ariba, Coupa, or Oracle Fusion. They enter your custom BigCommerce catalog without separate login credentials.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Electronic Bill-of-Materials Transfer</h3>
              <p>
                When the buyer fills their cart, items move to their ERP. They submit as a purchase requisition.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6-Phase Wholesale Sprint Roadmap ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// sprint methodology</p>
            <h2 style={{ marginTop: '10px' }}>The 6-Phase BigCommerce B2B Implementation Sprint Roadmap.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Our structured sprint process guarantees predictable timelines, resilient ERP sync, and smooth buyer onboarding.
              </p>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <li>
                  <strong>Phase 1: B2B Quoting &amp; Price Matrix Architecture (Week 1).</strong> Scope customer tier matrices and volume breaks. Map corporate account structures and ERP API endpoints.
                </li>
                <li>
                  <strong>Phase 2: Company Accounts &amp; Buyer Hierarchy Setup (Week 2).</strong> Provision BigCommerce B2B Edition company records. Set spend thresholds and build staff approval chains.
                </li>
                <li>
                  <strong>Phase 3: High-Speed Quick Order &amp; CSV Matrix Interface (Week 3).</strong> Build high-speed SKU bulk entry pads. Develop CSV spreadsheet upload tools and recurring replenishment features.
                </li>
                <li>
                  <strong>Phase 4: Digital Quoting Engine &amp; Sales Rep Masquerade (Week 4).</strong> Configure automated RFQ workflows and margin rules. Launch sales representative order entry portals.
                </li>
                <li>
                  <strong>Phase 5: Bi-Directional ERP &amp; PunchOut Integration (Weeks 5 - 6).</strong> Build and test real-time connectors for NetSuite, SAP, Epicor, or Coupa e-procurement systems.
                </li>
                <li>
                  <strong>Phase 6: Buyer UAT, Training &amp; Zero-Downtime Launch (Weeks 7 - 8).</strong> Run test purchasing cycles with key wholesale partners. Train sales and accounting teams. Launch the live portal with zero downtime.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platform comparison</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce B2B Edition vs. Shopify Plus B2B vs. Magento B2B.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Compare enterprise B2B capabilities across the top commercial platforms.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>B2B Capability</th>
                    <th>BigCommerce B2B Edition</th>
                    <th>Shopify Plus B2B</th>
                    <th>Adobe Commerce (Magento)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Automated RFQ &amp; Quoting Engine.</td>
                    <td>Native built-in quoting engine.</td>
                    <td>Requires custom draft order apps.</td>
                    <td>Native quoting (complex setup).</td>
                  </tr>
                  <tr>
                    <td className="name">PunchOut E-Procurement (cXML).</td>
                    <td>Native PunchOut integration suite.</td>
                    <td>Requires third-party middleware.</td>
                    <td>Requires complex custom modules.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Sales Rep Masquerade Ordering.</td>
                    <td>Native sales representative login.</td>
                    <td>Draft order creation flow.</td>
                    <td>Admin panel order entry.</td>
                  </tr>
                  <tr>
                    <td className="name">Corporate Buyer Hierarchies.</td>
                    <td>Granular roles &amp; spend limits.</td>
                    <td>Company location accounts.</td>
                    <td>Company accounts &amp; roles.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Maintenance &amp; Hosting Overhead.</td>
                    <td>Fully SaaS hosted (Zero maintenance).</td>
                    <td>Fully SaaS hosted (Zero maintenance).</td>
                    <td>Heavy server infrastructure &amp; patches.</td>
                  </tr>
                  <tr>
                    <td className="name">Total Cost of Ownership.</td>
                    <td>Predictable SaaS tier.</td>
                    <td>$2,300/mo base Plus fee.</td>
                    <td>High hosting &amp; developer retainers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Net-30 Payment Terms Comparison ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <Net30PaymentComparison />
          </div>
        </section>

        {/* ── Interactive B2B Wholesale Savings & ROI Calculator ── */}
        <section className="pp-sec tint" id="b2b-wholesale-roi-calculator">
          <div className="pp-wrap">
            <B2bWholesaleCalculator
              source="bigcommerce_b2b_service_page"
              defaultRevenue={6000000}
              defaultAov={3200}
              defaultAccounts={210}
            />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// enterprise answers</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about BigCommerce B2B Edition."
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// scale enterprise wholesale</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to launch on BigCommerce B2B Edition?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us evaluate your B2B quoting workflows. We review buyer permissions and your ERP architecture. We deliver a fixed-scope proposal before any build begins.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call.
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_image.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet."
                    width={46}
                    height={46}
                    quality={95}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; 10+ yrs building commerce.</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Impulse Branding."
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Director, Impulse Branding.</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;In our business, clients size you up before they ever call. FactoryJet built us a website
                  that looks as solid as our work. We now get qualified enterprise project inquiries through it.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/impulse-branding-migration" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Impulse Branding case study &rarr;.
                  </a>
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
