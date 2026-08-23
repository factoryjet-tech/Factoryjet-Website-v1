import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Shopify Plus B2B Agency & Wholesale Development | FactoryJet',
  description:
    'Scale B2B wholesale on Shopify Plus. Custom B2B price lists, company account hierarchies, Net 30/60 terms, volume pricing tiers, and real-time ERP integration on one unified store.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Plus B2B Agency & Wholesale Development | FactoryJet',
    description:
      'Unified B2B wholesale development on Shopify Plus. Run DTC and B2B from a single backend with custom pricing lists, Net terms, and ERP synchronization.',
    url: 'https://factoryjet.com/services/shopify-plus-b2b',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify Plus B2B Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Plus B2B Agency | FactoryJet',
    description: 'Build high-converting wholesale portals with Shopify Plus native B2B features, custom price rules, and ERP integrations.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/shopify-plus-b2b' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'features', label: 'B2B Features' },
  { key: 'architecture', label: 'Blended vs Dedicated' },
  { key: 'erp', label: 'ERP & Integrations' },
  { key: 'commercials', label: 'Terms & Scoping' },
];

const FAQ_ITEMS = [
  // B2B Features
  {
    category: 'features',
    question: 'What is Shopify Plus B2B and how does it replace third-party wholesale apps?',
    answer:
      'Shopify Plus B2B is Shopify’s native suite of wholesale capabilities built directly into the core platform architecture. It eliminates slow, brittle third-party wholesale apps by providing native company account profiles, multi-tiered price lists, quantity price breaks, Net payment terms, and custom checkout validation rules directly in the checkout pipeline.',
  },
  {
    category: 'features',
    question: 'How do custom B2B price lists work in Shopify Plus?',
    answer:
      'You can assign percentage-off discounts or fixed dollar prices to specific products, collections, or entire catalogs. These price lists are bound to specific wholesale company profiles or buyer locations, ensuring each business customer only sees their negotiated contract pricing upon logging in.',
  },
  {
    category: 'features',
    question: 'Can corporate clients manage multiple buyer locations and permissions?',
    answer:
      'Yes. Shopify Plus B2B supports company hierarchies where corporate parent accounts can manage multiple shipping locations, assign unique buyer permissions (such as Ordering Only versus Admin Approver), and set distinct purchasing limits for each location.',
  },
  {
    category: 'features',
    question: 'How are Net 30, Net 60, and credit terms handled at checkout?',
    answer:
      'Authorized wholesale buyers can complete checkout by submitting purchase orders on payment terms (Net 7, 15, 30, 60, or 90). The store automatically generates commercial invoices, sets payment due dates, and sends automated reminder webhooks when balances come due.',
  },

  // Blended vs Dedicated
  {
    category: 'architecture',
    question: 'What is the difference between a blended DTC + B2B store and a dedicated B2B expansion store?',
    answer:
      'A blended store serves both everyday retail consumers and wholesale buyers from a single storefront URL, using customer login state to dynamically reveal wholesale pricing and payment terms. A dedicated expansion store uses a separate Shopify Plus instance exclusively for wholesale, providing isolated theme styling, distinct catalogs, and independent analytics.',
  },
  {
    category: 'architecture',
    question: 'When should a brand choose a blended store versus a dedicated expansion store?',
    answer:
      'A blended store is ideal when you want to minimize catalog maintenance and capitalize on your primary DTC domain authority. A dedicated expansion store is recommended when wholesale catalogs have completely different product lines, distinct shipping rules, or highly complex custom quoting logic.',
  },
  {
    category: 'architecture',
    question: 'Can wholesale buyers use quick-order forms and CSV bulk reordering?',
    answer:
      'Yes. We build high-speed B2B matrix order forms where corporate buyers can enter SKU quantities across multiple sizes and colors on a single grid, or upload CSV spreadsheet orders to populate carts in seconds.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B handle minimum order quantities (MOQs) and case pack rules?',
    answer:
      'Using Shopify Functions and native B2B rules, we enforce strict minimum order values, minimum SKU quantities, and incremental packaging constraints (e.g. must purchase in multiples of 6 or 12) without theme code workarounds.',
  },

  // ERP & Integrations
  {
    category: 'erp',
    question: 'How does FactoryJet integrate Shopify Plus B2B with NetSuite or SAP?',
    answer:
      'We engineer resilient API middleware connecting Shopify Plus GraphQL Admin API directly to your ERP (NetSuite, SAP, Microsoft Dynamics 365, Acumatica, or QuickBooks Enterprise). Customer contract terms, credit limits, inventory balances, and purchase orders sync bi-directionally in real time.',
  },
  {
    category: 'erp',
    question: 'How do tax exemptions and resale certificates work for B2B buyers?',
    answer:
      'We integrate automated tax exemption engines (such as Avalara AvaTax or Vertex) with Shopify Plus B2B company profiles, validating state resale certificates and applying 0% sales tax automatically to qualified wholesale purchases.',
  },
  {
    category: 'erp',
    question: 'Can sales representatives place and manage orders on behalf of B2B customers (sales rep masquerade)?',
    answer:
      'Yes. We configure sales representative draft order workflows and masquerade capabilities, allowing internal account managers to build quotes, apply custom line-item discounts, and send instant payment checkout links directly to wholesale buyers.',
  },

  // Commercials & Scoping
  {
    category: 'commercials',
    question: 'What is the timeline for migrating from legacy wholesale apps or Magento to Shopify Plus B2B?',
    answer:
      'A standard B2B wholesale portal migration typically takes 4 to 6 weeks, covering company account imports, price list configuration, ERP connector development, and staff training.',
  },
  {
    category: 'commercials',
    question: 'Do we have to pay extra per-transaction fees on Shopify Plus B2B orders?',
    answer:
      'No. When wholesale buyers checkout on Net terms or manual invoicing, there are zero third-party payment processing fees. For credit card payments, standard Shopify Plus merchant rates apply.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for Shopify Plus B2B development?',
    answer:
      'We deliver all B2B development on fixed-price project scopes with clearly defined milestones. We do not bill hourly overages or take percentage cuts of your wholesale revenue.',
  },
  {
    category: 'commercials',
    question: 'How do we schedule a Shopify Plus B2B technical scoping session with the founder?',
    answer:
      'You can schedule a 30-minute scoping call directly with Bhavesh Barot. We will review your wholesale price matrices, ERP requirements, and buyer workflows to deliver a comprehensive fixed-scope proposal.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B handle multi-currency wholesale pricing for global distributors?',
    answer:
      'Shopify Plus B2B allows merchants to assign country-specific currency price lists and payment terms to international corporate accounts. European distributors see pricing in Euros with Net 60 terms, while UK wholesale clients see British Pounds, all managed within a single unified store administration.',
  },
  {
    category: 'erp',
    question: 'Can sales representatives edit draft B2B orders directly in Shopify Admin before payment?',
    answer:
      'Yes. Internal sales reps can construct draft orders, adjust custom item discounts, specify custom shipping freight rates, and email payment invoices with one-click Net payment terms directly from the Shopify Admin.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B manage tax exemption certificates for wholesale accounts?',
    answer:
      'We integrate automated tax compliance systems (Avalara AvaTax or Vertex) with Shopify Plus B2B. Corporate buyers upload their state resale certificates directly during onboarding, which automatically marks verified accounts as tax-exempt upon verification.',
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
  serviceType: 'Shopify Plus B2B Wholesale Development Agency',
  name: 'Shopify Plus B2B Wholesale Portal Development',
  description:
    'Complete Shopify Plus native B2B wholesale portal development, custom price lists, Net terms, company account hierarchies, and ERP integrations.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B Brands Scaling Wholesale' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Launches Shopify Plus B2B Wholesale Portals',
  description: 'Our proven 3-phase technical framework for deploying Shopify Plus native B2B wholesale systems.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Wholesale Price Matrix & Account Modeling', text: 'We map contract pricing rules, tier structures, company hierarchies, and tax exemption workflows.' },
    { '@type': 'HowToStep', position: 2, name: 'Native B2B Architecture & ERP Integration', text: 'We configure Shopify Plus B2B price lists, Net payment terms, Shopify Functions checkout rules, and ERP connectors.' },
    { '@type': 'HowToStep', position: 3, name: 'Buyer Testing & Full Wholesale Launch', text: 'We validate matrix order forms, test ERP invoice synchronizations, and onboard wholesale accounts.' },
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
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus B2B', item: 'https://factoryjet.com/services/shopify-plus-b2b' },
  ],
};

const STATS = [
  { b: 'Native B2B', s: 'zero slow third-party wholesale apps' },
  { b: 'Net 30/60/90', s: 'automated purchase order terms' },
  { b: '1 Storefront', s: 'unified DTC + B2B catalog backend' },
  { b: '< 150ms ERP', s: 'real-time NetSuite / SAP sync' },
];

const SOURCED = [
  {
    v: '44%+',
    d: 'faster order placement speed achieved by wholesale corporate buyers using native Shopify Plus B2B matrix order forms.',
    src: 'Shopify Enterprise Commerce Benchmark',
    href: 'https://www.shopify.com/plus',
  },
  {
    v: '$3.6 Trillion',
    d: 'total US B2B digital commerce transaction volume projected by 2026 as manufacturers and distributors migrate online.',
    src: 'Forrester US B2B E-Commerce Forecast',
    href: 'https://www.forrester.com',
  },
  {
    v: '65%',
    d: 'of enterprise B2B buyers prioritize self-service digital reordering portals over manual email and phone order submissions.',
    src: 'McKinsey Global B2B Buyer Survey',
    href: 'https://www.mckinsey.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Custom B2B Price Lists & Quantity Breaks', d: 'Assign distinct wholesale contract pricing, volume tier discounts, and customer-specific catalogs with zero app bloat.' },
  { i: '◇', t: 'Company Profiles & Location Hierarchies', d: 'Allow corporate buyers to manage multiple branch locations, assign unique buyer permissions, and set spend limits.' },
  { i: '↯', t: 'Net Payment Terms & Automated Invoicing', d: 'Enable purchase orders on Net 15/30/60 terms with automatic invoice generation and automated payment reminders.' },
  { i: '▤', t: 'Unified DTC + B2B Storefront Architecture', d: 'Run consumer retail and wholesale operations from a single unified store backend, eliminating double catalog maintenance.' },
  { i: '⛓', t: 'ERP & WMS Bi-Directional Synchronization', d: 'Connect NetSuite, SAP, Acumatica, or Katana directly to Shopify Plus GraphQL APIs for synchronized inventory and orders.' },
  { i: '⤢', t: 'Custom B2B Checkout Rules with Shopify Functions', d: 'Enforce minimum order quantities (MOQs), case pack multiples, and custom freight rules natively in checkout.' },
];

export default function ShopifyPlusB2BPage() {
  return (
    <>
      <script id="sp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="sp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="sp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Shopify Plus B2B Wholesale Agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Scale wholesale on <span className="pp-grad">Shopify Plus.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Custom B2B price lists, Net 30/60 terms, company hierarchies, volume pricing tiers, and real-time ERP
                  synchronization on one unified store backend.
                </p>
                <HeroInlineForm source="us_shopify_plus_b2b_hero" region="us" submitLabel="Get a Shopify B2B Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify Plus B2B wholesale architecture diagram showing unified DTC and B2B orders flowing into central ERP."
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
                  Shopify Plus Native B2B Engine
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Custom Price Lists · Company Accounts · Net Terms · ERP Sync
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Custom Pricing', desc: 'Tiered Price Lists' },
                    { name: 'Company Hub', desc: 'Multi-Location' },
                    { name: 'Net Terms', desc: 'Net 30/60/90' },
                    { name: 'Quick Reorder', desc: 'Matrix & CSV' },
                    { name: 'Shopify Rules', desc: 'MOQ Functions' },
                    { name: 'Central ERP', desc: 'NetSuite / SAP' },
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
                    Native Platform Architecture
                  </div>
                  <div>Zero App Bloat · Sub-Second Speed</div>
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
            <p className="pp-mlabel">// the modern wholesale engine</p>
            <h2 style={{ marginTop: '10px' }}>What is Shopify Plus B2B wholesale development?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Shopify Plus B2B development is the technical engineering of wholesale customer portals, contract pricing
                rules, company account permissions, and enterprise ERP integrations utilizing Shopify’s native B2B suite.
              </p>
              <p>
                Historically, wholesale e-commerce required running separate clone stores or installing slow third-party
                apps that injected fragile JavaScript workarounds into the checkout flow. Shopify Plus B2B unifies consumer
                DTC and commercial wholesale into a single catalog and checkout engine.
              </p>
              <p>
                FactoryJet designs and builds complete Shopify Plus B2B architectures. We configure custom price list matrices,
                automate Net payment term approvals, implement matrix quick-order forms, and integrate bi-directional ERP data
                pipelines connecting NetSuite, SAP, or Microsoft Dynamics.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// wholesale market velocity</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus B2B by the numbers</h2>
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
            <h2 style={{ marginTop: '10px' }}>Core capabilities of our Shopify Plus B2B builds</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              Everything enterprise wholesale brands need to automate purchasing, eliminate manual data entry, and accelerate reorders.
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



        {/* ── Use Case & Imagery Section ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// wholesale portal showcase</p>
                <h2 style={{ marginTop: '8px' }}>Native B2B Wholesale Portal Architecture</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  How FactoryJet configures company account hierarchies, custom price lists, Net 30 payment terms, and
                  matrix order forms directly inside Shopify Plus.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope Shopify Plus B2B" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/shopify-plus-b2b-wholesale-portal.webp`}
                alt="Shopify Plus B2B wholesale portal dashboard and pricing tiers"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        
        {/* ── Shopify Functions & B2B Checkout Extensibility Deep Dive ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// modern checkout customization</p>
            <h2 style={{ marginTop: '10px' }}>Custom B2B Validation Rules via Shopify Functions &amp; Checkout Extensibility</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                With the deprecation of legacy checkout.liquid files, enterprise B2B merchants require modern Shopify Functions
                compiled to WebAssembly (WASM) to execute complex server-side validation rules in sub-5 milliseconds.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Dynamic Payment Customization Functions</h3>
              <p>
                We write custom Shopify Functions that dynamically hide or display payment methods based on the authenticated B2B buyer’s
                company profile. While new wholesale applicants are restricted to credit card checkout, verified wholesale partners
                with approved credit limits automatically see Net 30, Net 60, or Purchase Order (PO) payment options.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Automated Cart &amp; Order Validation Functions</h3>
              <p>
                Enforce strict commercial rules before order placement: validate that wholesale orders meet minimum tier values (e.g. $500 minimum),
                ensure case packs are ordered in full carton multiples (e.g. increments of 12 units), and prevent unverified buyers
                from adding restricted catalog lines to their carts.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Custom Delivery Customization &amp; Freight Routing</h3>
              <p>
                For heavy palletized wholesale orders, our delivery customization functions calculate real-time LTL (Less-Than-Truckload)
                freight rates via carrier APIs, applying customer-specific liftgate surcharges and dock delivery options frictionlessly at checkout.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Wholesale Price List Architecture & Tiered Volume Rules ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// catalog tiering architecture</p>
            <h2 style={{ marginTop: '10px' }}>Wholesale Price List Architecture and Dynamic Volume Discounting</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Enterprise B2B merchants often maintain complex pricing structures that vary based on annual purchase volume,
                geographic territory, or negotiated distributor contracts. Shopify Plus B2B provides native tools to model these rules:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Fixed vs. Percentage Price Adjustments</h3>
              <p>
                Assign specific negotiated wholesale dollar amounts per SKU (e.g. $14.50 instead of $32.00 retail) or apply broad percentage-based
                margins across entire product collections (e.g. 45% off MSRP for Gold Tier wholesale accounts).
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Incremental Quantity Breaks and Breakpoint Pricing</h3>
              <p>
                Incentivize larger corporate purchase orders with tiered quantity breaks (e.g. 1-49 units at $20/ea, 50-199 units at $17/ea, 200+ units at $14/ea).
                Shopify Plus updates line item pricing dynamically in the cart grid as buyers adjust quantities.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Territory-Specific Catalog Gating</h3>
              <p>
                Restrict specific product lines based on regional distribution rights. Exclusive regional distributors see only their authorized
                product lines, preventing territorial conflicts between wholesale partners.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural comparison</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus Native B2B vs. Legacy Apps vs. Clone Stores</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Why leading B2B manufacturers and distributors migrate to native Shopify Plus B2B architecture.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>B2B Capability</th>
                    <th>Shopify Plus Native B2B</th>
                    <th>Third-Party Wholesale Apps</th>
                    <th>Separate Wholesale Store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Catalog &amp; Inventory Sync</td>
                    <td>Unified single master catalog</td>
                    <td>Single catalog with script overrides</td>
                    <td>Duplicate catalogs to maintain</td>
                  </tr>
                  <tr>
                    <td className="name">Checkout Speed &amp; Stability</td>
                    <td>Native sub-second checkout</td>
                    <td>Slow JavaScript DOM injection</td>
                    <td>Native separate checkout</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Company &amp; Location Hierarchy</td>
                    <td>Native parent-child company accounts</td>
                    <td>Basic customer tags only</td>
                    <td>Separate customer databases</td>
                  </tr>
                  <tr>
                    <td className="name">Net Terms &amp; Invoicing</td>
                    <td>Native Net 15/30/60 PO checkout</td>
                    <td>App-based draft orders</td>
                    <td>Manual invoice processing</td>
                  </tr>
                  <tr className="me">
                    <td className="name">ERP Integration Complexity</td>
                    <td>Single standard GraphQL API</td>
                    <td>Brittle custom app endpoints</td>
                    <td>Double integration pipelines</td>
                  </tr>
                  <tr>
                    <td className="name">Maintenance &amp; App Fees</td>
                    <td>$0 extra app fees (Included in Plus)</td>
                    <td>$300 to $1,500/mo in app subscriptions</td>
                    <td>Double Shopify subscription cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
          badge="// UNIFIED B2B COMMERCE ARCHITECTURE"
          title="Enterprise B2B Wholesale & DTC on a Single Modern Commerce Engine"
          subtitle="How enterprise brands consolidate multiple wholesale stores into one unified Shopify Plus architecture with custom price lists, Net terms, and real-time ERP synchronization."
          legacySource="Fragmented B2B Stores & Legacy EDI"
          targetStack="Shopify Plus Native B2B + Real-Time ERP Sync"
          ctaLabel="Schedule B2B Wholesale Architecture Review"
          region="us"
        />

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// wholesale answers</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about Shopify Plus B2B"
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
                <p className="pp-mlabel">// modernize wholesale sales</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to launch your Shopify Plus B2B portal?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us review your wholesale pricing rules, ERP synchronization requirements, and buyer workflows to
                  deliver a fixed-price implementation roadmap.
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
                  &ldquo;FactoryJet migrated our entire wholesale catalog to Shopify Plus B2B in under 5 weeks. Our corporate
                  buyers love the self-service ordering, and our accounting team saves 20+ hours a week on invoicing.&rdquo;
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
