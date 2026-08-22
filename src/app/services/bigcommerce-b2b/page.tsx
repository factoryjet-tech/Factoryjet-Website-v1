import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'BigCommerce B2B Edition Agency & Development | FactoryJet',
  description:
    'Scale enterprise wholesale with BigCommerce B2B Edition. Custom quoting engine, corporate account hierarchies, sales rep masquerade, PunchOut e-procurement, and real-time ERP integration.',
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
      'BigCommerce B2B Edition is an enterprise wholesale package built directly on BigCommerce that provides advanced B2B workflows, including multi-tiered corporate account hierarchies, buyer purchasing approval rules, automated request-for-quote (RFQ) negotiation engines, and sales representative order masquerade. It is designed for industrial manufacturers, distributors, and high-volume wholesale brands.',
  },
  {
    category: 'features',
    question: 'How do corporate buyer account hierarchies work in BigCommerce B2B Edition?',
    answer:
      'Corporate customers can set up structured company accounts with parent-child relationships across multiple corporate divisions and physical facilities. Within each account, corporate administrators can assign granular employee roles, such as Senior Buyer with approval authority versus Junior Requisitioner with order submission limits.',
  },
  {
    category: 'features',
    question: 'Can B2B customers create custom shopping lists and quick-order pads?',
    answer:
      'Yes. Buyers can create and save unlimited custom shopping lists for recurring facility restocks, search products by exact manufacturer part number (MPN) or SKU, and upload bulk CSV spreadsheets to populate complex multi-thousand-item carts in seconds.',
  },
  {
    category: 'features',
    question: 'How are customer-specific price lists managed in BigCommerce B2B?',
    answer:
      'You can define custom price lists for specific customer groups or individual corporate accounts, supporting percentage discounts, fixed contracted unit prices, volume-tiered discounts, and custom shipping rate schedules.',
  },

  // Quoting & PunchOut
  {
    category: 'quoting',
    question: 'How does the automated Request for Quote (RFQ) engine work?',
    answer:
      'Buyers can convert their shopping cart into a formal quote request with one click, attaching custom notes and target pricing. Internal sales representatives receive immediate notifications, review margin thresholds, adjust line-item discounts, and return a binding digital quote with an expiration window for instant buyer checkout.',
  },
  {
    category: 'quoting',
    question: 'What is PunchOut e-procurement (cXML / OCI) and how is it supported?',
    answer:
      'PunchOut enables enterprise buyers to access your BigCommerce product catalog directly from within their internal enterprise procurement software (such as SAP Ariba, Coupa, or Jaggaer). When the buyer completes their cart, the order transfers automatically into their corporate procurement system for PO authorization.',
  },
  {
    category: 'quoting',
    question: 'How does sales representative masquerade work?',
    answer:
      'Sales representatives and customer service agents can log into the storefront on behalf of any authorized wholesale customer. Reps can view the customer’s contracted pricing, build carts, configure custom quotes, and submit purchase orders on the buyer’s behalf.',
  },

  // ERP & Workflows
  {
    category: 'erp',
    question: 'How does FactoryJet connect BigCommerce B2B Edition to our ERP?',
    answer:
      'We build bi-directional REST and GraphQL integration middleware connecting BigCommerce B2B Edition to NetSuite, SAP, Microsoft Dynamics 365, Epicor, Infor, or Acumatica. Customer credit balances, open invoices, inventory counts, and purchase orders synchronize in real time.',
  },
  {
    category: 'erp',
    question: 'How are invoice payments and Net terms handled?',
    answer:
      'Wholesale buyers can check out using pre-approved credit limits on Net 30, 60, or 90 terms. The buyer portal provides complete self-service invoice management, allowing accounts payable teams to view open balances, download PDF invoices, and pay multiple invoices via ACH or corporate card.',
  },
  {
    category: 'erp',
    question: 'Can BigCommerce B2B Edition run a hybrid DTC and B2B model?',
    answer:
      'Yes. BigCommerce B2B Edition can power a single unified storefront where retail consumers browse standard retail pricing while logged-in wholesale accounts see their custom negotiated price lists, Net terms, and quoting tools.',
  },

  // Commercials & Scoping
  {
    category: 'commercials',
    question: 'How long does a BigCommerce B2B Edition implementation take?',
    answer:
      'A complete enterprise B2B portal deployment typically takes 5 to 8 weeks, including catalog data mapping, price list configuration, ERP connector integration, and testing.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for BigCommerce B2B development?',
    answer:
      'We work on transparent fixed-price milestone contracts. We never charge percentage revenue shares or hidden hourly overages.',
  },
  {
    category: 'commercials',
    question: 'How do we schedule a BigCommerce B2B scoping call with the founder?',
    answer:
      'You can book a 30-minute scoping consultation directly with Bhavesh Barot. We will analyze your wholesale pricing rules, ERP landscape, and quoting workflows to deliver a comprehensive fixed-scope proposal.',
  },
  {
    category: 'b2b',
    question: 'How do you handle custom trade credit applications and customer onboarding on BigCommerce?',
    answer:
      'We build automated corporate registration flows where wholesale applicants submit credit references, resale certificates, and company identification. Upon automated credit scoring and admin verification, buyer accounts are assigned custom payment terms and price lists automatically.',
  },
  {
    category: 'b2b',
    question: 'How does BigCommerce B2B Edition support multi-tier customer group pricing?',
    answer:
      'BigCommerce B2B Edition allows merchants to create unlimited customer groups with custom price lists, volume break discounts, and category-level percentage margins. Corporate buyers automatically see their contracted pricing upon logging into their account.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B Edition integrate with warehouse management systems (WMS)?',
    answer:
      'We build automated bi-directional data pipelines connecting BigCommerce B2B Edition to modern warehouse management systems such as ShipHero, Deposco, SkuVault, and Logiwa. Purchase orders route to designated fulfillment queues instantly, generating compliant pallet shipping labels and triggering automatic ASN (Advanced Shipping Notice) tracking updates back to corporate buyer accounts.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B connect to Acumatica and QuickBooks Enterprise?',
    answer:
      'We engineer bi-directional API pipelines that synchronize inventory levels, purchase orders, customer contract terms, and tracking numbers in real time, eliminating manual data entry between your accounting software and digital storefront.',
  },
  {
    category: 'b2b',
    question: 'Can corporate buyers set up multi-user approval workflows with spend limits?',
    answer:
      'Yes. Master account administrators can invite junior buyers with designated monthly spending caps. Orders exceeding the authorization threshold automatically route to senior managers for one-click approval before order release.',
  },
  {
    category: 'integrations',
    question: 'How does BigCommerce B2B Edition handle custom freight carrier rate calculation?',
    answer:
      'We connect specialized LTL freight rating engines (Freightview, ShipHawk, or custom API endpoints) that calculate real-time pallet shipping rates based on shipment weight, freight class, commercial dock delivery, and liftgate requirements.',
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

const SERVICE_SCHEMA = {
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

const HOWTO_SCHEMA = {
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

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'B2B E-Commerce', item: 'https://factoryjet.com/b2b-ecommerce' },
    { '@type': 'ListItem', position: 3, name: 'BigCommerce B2B', item: 'https://factoryjet.com/services/bigcommerce-b2b' },
  ],
};

const STATS = [
  { b: 'Enterprise B2B', s: 'RFQ quoting & PunchOut ready' },
  { b: 'Buyer Roles', s: 'granular corporate permissions' },
  { b: 'ERP Real-Time', s: 'NetSuite, SAP & Epicor sync' },
  { b: '0% Rev-Share', s: 'fixed-price project scoping' },
];

const SOURCED = [
  {
    v: '50%+',
    d: 'reduction in wholesale quotation turnaround time achieved by manufacturers deploying automated BigCommerce B2B RFQ engines.',
    src: 'BigCommerce Enterprise Study',
    href: 'https://www.bigcommerce.com/b2b-edition',
  },
  {
    v: '74%',
    d: 'of enterprise B2B procurement professionals prefer digital PunchOut catalog ordering directly within their ERP systems.',
    src: 'Gartner B2B Digital Commerce Survey',
    href: 'https://www.gartner.com',
  },
  {
    v: '3.2x',
    d: 'increase in wholesale reorder frequency realized by distributors providing self-service invoice payment portals.',
    src: 'Forrester B2B Commerce Benchmark',
    href: 'https://www.forrester.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Automated RFQ & Quoting Engine', d: 'Enable buyers to request custom quotes from their carts and allow sales reps to return adjusted pricing with expiration windows.' },
  { i: '◇', t: 'Corporate Account Hierarchies & Approval Workflows', d: 'Configure multi-level buyer organizations with designated approvers, spend limits, and facility-specific shipping addresses.' },
  { i: '↯', t: 'Sales Representative Masquerade & Order Creation', d: 'Allow sales teams to browse on behalf of corporate clients, construct custom order proposals, and close deals instantly.' },
  { i: '▤', t: 'PunchOut E-Procurement (cXML & OCI)', d: 'Connect your catalog directly to buyer ERPs like SAP Ariba and Coupa for automated enterprise requisitioning.' },
  { i: '⛓', t: 'Self-Service Invoice Portal & Net Terms', d: 'Give corporate accounting teams the ability to view open invoices, download statements, and execute ACH payments.' },
  { i: '⤢', t: 'Bi-Directional ERP & WMS Connectors', d: 'Synchronize inventory counts, open purchase orders, customer contract pricing, and credit balances across your core ERP.' },
];

export default function BigCommerceB2BPage() {
  return (
    <>
      <script id="bc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="bc-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="bc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="bc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">BigCommerce B2B Edition Agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Enterprise wholesale on <span className="pp-grad">BigCommerce B2B.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Custom quoting engine, corporate account hierarchies, sales rep masquerade, PunchOut e-procurement,
                  and real-time ERP integration for industrial manufacturers and distributors.
                </p>
                <HeroInlineForm source="us_bigcommerce_b2b_hero" region="us" submitLabel="Get a BigCommerce B2B Scope" />
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
                  BigCommerce B2B Edition Suite
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    RFQ Quoting · PunchOut cXML · Buyer Approval · NetSuite / SAP
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'RFQ Engine', desc: 'Custom Quotes' },
                    { name: 'PunchOut', desc: 'Ariba / Coupa' },
                    { name: 'Buyer Roles', desc: 'Approval Limits' },
                    { name: 'Rep Masquerade', desc: 'Sales Ordering' },
                    { name: 'Invoice Hub', desc: 'ACH & Net Terms' },
                    { name: 'ERP Core', desc: 'SAP / Dynamics' },
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
                    Enterprise B2B Certified
                  </div>
                  <div>Complex Quoting &amp; PunchOut Ready</div>
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
                BigCommerce B2B Edition development is the enterprise engineering of complex wholesale buyer portals,
                custom quotation negotiation systems, buyer permission hierarchies, and PunchOut e-procurement integrations
                built on BigCommerce’s enterprise commerce platform.
              </p>
              <p>
                Industrial manufacturers and high-volume distributors require capabilities that standard retail platforms
                cannot support: multi-tier buyer purchasing approval limits, custom negotiated quotes with line-item discounts,
                PunchOut connections directly into SAP Ariba or Coupa, and sales rep ordering masquerade.
              </p>
              <p>
                FactoryJet builds end-to-end BigCommerce B2B Edition portals. We configure complex price list matrices,
                deploy automated RFQ workflows, build custom self-service invoice payment hubs, and engineer bi-directional
                ERP connectors linking NetSuite, SAP, Epicor, or Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// enterprise benchmark data</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce B2B Edition by the numbers</h2>
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
            <h2 style={{ marginTop: '10px' }}>Enterprise capabilities of our BigCommerce B2B builds</h2>
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
                  How FactoryJet configures automated Request for Quote (RFQ) negotiation engines, corporate buyer roles,
                  and PunchOut e-procurement feeds for enterprise manufacturers.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope BigCommerce B2B" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/bigcommerce-b2b-edition-quoting.webp`}
                alt="BigCommerce B2B Edition quotation dashboard and buyer permissions"
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
            <h2 style={{ marginTop: '10px' }}>PunchOut cXML Architecture: Connecting Enterprise Buyers on SAP Ariba and Coupa</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Enterprise buyers, healthcare systems, and government organizations often mandate PunchOut e-procurement capabilities.
                Rather than navigating public consumer storefronts, procurement teams access your BigCommerce catalog directly from within
                their internal Enterprise Resource Planning (ERP) procurement software.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. PunchOut Setup Request (cXML POSR)</h3>
              <p>
                When an enterprise buyer initiates a purchase requisition in SAP Ariba or Coupa, their system sends an authenticated
                cXML POSR payload to your BigCommerce store. Our middleware creates an authenticated buyer session with pre-negotiated contract pricing.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Catalog Browsing &amp; Order Message Transfer (cXML POOM)</h3>
              <p>
                The buyer browses your technical catalog, builds their bill-of-materials, and clicks "PunchOut". Instead of taking a payment,
                the BigCommerce store transfers an encrypted cXML POOM payload containing itemized SKUs, descriptions, and contract prices back
                to the buyer's procurement system for internal management approval.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Automated Purchase Order Ingestion (cXML OrderRequest)</h3>
              <p>
                Once internally approved, the buyer's ERP transmits an electronic Purchase Order (cXML OrderRequest) directly into your BigCommerce
                order fulfillment queue, generating picking slips in your warehouse management software without human manual data entry.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Headless Catalyst & Custom B2B Customer Portal Framework ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// headless b2b architecture</p>
            <h2 style={{ marginTop: '10px' }}>Headless BigCommerce Catalyst Architecture for Enterprise Wholesale</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                For high-volume distributors requiring bespoke purchasing interfaces, FactoryJet builds composable frontends
                using BigCommerce Catalyst on Next.js 15 App Router:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. High-Performance B2B SKU Ordering Grid</h3>
              <p>
                Rather than forcing buyers through traditional consumer product detail pages, our headless ordering grids allow
                procurement officers to view 500+ replacement parts simultaneously, enter quantities directly into line-item inputs,
                and populate a $50,000 order in under 30 seconds.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Real-Time Multi-Warehouse Inventory Status</h3>
              <p>
                Display live inventory availability across specific regional distribution centers (e.g. "142 units in Chicago, 85 units in Atlanta").
                Corporate buyers select preferred fulfillment locations to reduce transit times and freight expenses.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. One-Click Reordering &amp; Scheduled Recurring Deliveries</h3>
              <p>
                Enable corporate clients to save standard weekly or monthly consumable orders, configure automated recurring replenishment schedules,
                and download official PDF invoices for internal corporate tax records.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platform comparison</p>
            <h2 style={{ marginTop: '10px' }}>BigCommerce B2B Edition vs. Shopify Plus B2B vs. Magento B2B</h2>
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
                    <td className="name">Automated RFQ &amp; Quoting Engine</td>
                    <td>Native built-in quoting engine</td>
                    <td>Requires custom draft order apps</td>
                    <td>Native quoting (complex setup)</td>
                  </tr>
                  <tr>
                    <td className="name">PunchOut E-Procurement (cXML)</td>
                    <td>Native PunchOut integration suite</td>
                    <td>Requires third-party middleware</td>
                    <td>Requires complex custom modules</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Sales Rep Masquerade Ordering</td>
                    <td>Native sales representative login</td>
                    <td>Draft order creation flow</td>
                    <td>Admin panel order entry</td>
                  </tr>
                  <tr>
                    <td className="name">Corporate Buyer Hierarchies</td>
                    <td>Granular roles &amp; spend limits</td>
                    <td>Company location accounts</td>
                    <td>Company accounts &amp; roles</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Maintenance &amp; Hosting Overhead</td>
                    <td>Fully SaaS hosted (Zero maintenance)</td>
                    <td>Fully SaaS hosted (Zero maintenance)</td>
                    <td>Heavy server infrastructure &amp; patches</td>
                  </tr>
                  <tr>
                    <td className="name">Total Cost of Ownership</td>
                    <td>Predictable SaaS tier</td>
                    <td>$2,300/mo base Plus fee</td>
                    <td>High hosting &amp; developer retainers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// enterprise answers</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about BigCommerce B2B Edition"
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
                  Let us evaluate your B2B quoting workflows, corporate buyer permissions, and ERP landscape to deliver
                  a fixed-price implementation proposal before any build begins.
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
                  &ldquo;BigCommerce B2B Edition gave us the exact custom quotation engine and PunchOut connectivity our enterprise
                  clients demanded. FactoryJet executed the integration flawlessly.&rdquo;
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
