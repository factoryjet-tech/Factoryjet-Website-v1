import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import B2bWholesaleCalculator from '@/components/commerce/B2bWholesaleCalculator';
import Net30PaymentComparison from '@/components/commerce/Net30PaymentComparison';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Shopify Plus B2B Agency & Wholesale Development | FactoryJet',
  description:
    'Scale B2B wholesale on Shopify Plus. Custom price lists, company hierarchies, and Net 30 terms. Volume pricing and real-time ERP sync on a single store.',
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
      'Shopify Plus B2B is Shopify’s native wholesale suite. It runs directly in the core platform. This cuts slow third-party wholesale apps. You get native company accounts. You get multi-tier price lists and volume breaks. Net payment terms execute in core checkout. Validation rules run directly with zero delay.',
  },
  {
    category: 'features',
    question: 'How do custom B2B price lists work in Shopify Plus?',
    answer:
      'You can assign percentage discounts or fixed contract prices to products and collections. These price lists connect directly to specific wholesale company profiles or buyer locations. Each business customer sees their exact negotiated contract pricing upon logging in.',
  },
  {
    category: 'features',
    question: 'Can corporate clients manage multiple buyer locations and permissions?',
    answer:
      'Yes. Shopify Plus B2B supports multi-tier company hierarchies. Corporate parent accounts manage multiple shipping locations and branch facilities. They assign unique permissions, such as Ordering Only versus Admin Approver. They also enforce distinct purchasing limits for each location.',
  },
  {
    category: 'features',
    question: 'How are Net 30, Net 60, and credit terms handled at checkout?',
    answer:
      'Wholesale buyers submit purchase orders on terms like Net 30 or Net 60. The store creates invoices with due dates. Reminder webhooks trigger when balances come due.',
  },

  // Blended vs Dedicated
  {
    category: 'architecture',
    question: 'What is the difference between a blended DTC + B2B store and a dedicated B2B expansion store?',
    answer:
      'A blended store serves DTC and wholesale buyers on one domain. Customer login reveals wholesale pricing and payment terms. An expansion store uses a separate Shopify Plus setup for wholesale. This provides isolated theme styling and distinct catalogs.',
  },
  {
    category: 'architecture',
    question: 'When should a brand choose a blended store versus a dedicated expansion store?',
    answer:
      'A blended store minimizes catalog maintenance and strengthens your primary domain authority. A dedicated expansion store works best when wholesale catalogs differ completely. It is also ideal for distinct shipping rules or complex custom quoting logic.',
  },
  {
    category: 'architecture',
    question: 'Can wholesale buyers use quick-order forms and CSV bulk reordering?',
    answer:
      'Yes. We build high-speed B2B matrix order forms. Buyers enter SKU counts across sizes and colors on one grid. They can also upload CSV files to fill carts in seconds.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B handle minimum order quantities (MOQs) and case pack rules?',
    answer:
      'We use Shopify Functions to enforce order rules. This includes minimum order values and SKU quantities. We also set case pack rules. Everything runs server-side with zero theme bloat.',
  },

  // ERP & Integrations
  {
    category: 'erp',
    question: 'How does FactoryJet integrate Shopify Plus B2B with NetSuite or SAP?',
    answer:
      'We build API middleware linking Shopify Plus GraphQL endpoints to your ERP. We support NetSuite, SAP, Dynamics 365, Acumatica, and QuickBooks. Contract terms, credit limits, and inventory balances sync in real time. Purchase orders sync without delay.',
  },
  {
    category: 'erp',
    question: 'How do tax exemptions and resale certificates work for B2B buyers?',
    answer:
      'We link tax engines with Shopify Plus B2B company profiles. We connect systems like Avalara AvaTax or Vertex. The system validates state resale forms. It applies zero sales tax to qualified wholesale purchases.',
  },
  {
    category: 'erp',
    question: 'Can sales representatives place and manage orders on behalf of B2B customers (sales rep masquerade)?',
    answer:
      'Yes. We configure sales rep draft workflows and login tools. Sales reps can build quotes. They apply custom line discounts. They email checkout links directly to wholesale buyers.',
  },

  // Commercials & Scoping
  {
    category: 'commercials',
    question: 'What is the timeline for migrating from legacy wholesale apps or Magento to Shopify Plus B2B?',
    answer:
      'A standard B2B portal migration takes 4 to 6 weeks. This covers company account imports and price list setup. It also includes ERP connector setup and team onboarding.',
  },
  {
    category: 'commercials',
    question: 'Do we have to pay extra per-transaction fees on Shopify Plus B2B orders?',
    answer:
      'No. Wholesale orders on Net terms or manual invoices have zero processing fees. Standard merchant processing rates apply only when corporate buyers pay with a credit card.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for Shopify Plus B2B development?',
    answer:
      'We deliver all B2B development on fixed-price project scopes with milestone deliverables. We do not bill open-ended hourly rates. We never take percentage cuts of your wholesale revenue.',
  },
  {
    category: 'commercials',
    question: 'How do we schedule a Shopify Plus B2B technical scoping session with the founder?',
    answer:
      'You can schedule a 30-minute scoping call directly with founder Bhavesh Barot. We review your wholesale price matrices, ERP requirements, and buyer workflows. Then we deliver a comprehensive fixed-scope technical proposal.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B handle multi-currency wholesale pricing for global distributors?',
    answer:
      'Shopify Plus B2B lets you assign currency price lists to global accounts. European accounts see Euros with Net 60 terms. UK clients see British Pounds. You manage all rules in one store admin.',
  },
  {
    category: 'erp',
    question: 'Can sales representatives edit draft B2B orders directly in Shopify Admin before payment?',
    answer:
      'Yes. Sales reps can create draft orders and adjust line discounts. They set custom freight rates and email invoices. Net terms are set directly in the Shopify Admin.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B manage tax exemption certificates for wholesale accounts?',
    answer:
      'We connect tax systems like Avalara AvaTax or Vertex to Shopify Plus B2B. Corporate buyers upload state resale forms during signup. Verified accounts are marked tax-exempt right away.',
  },
  {
    category: 'features',
    question: 'How does Shopify Plus B2B handle minimum order quantity (MOQ) rules per SKU or collection?',
    answer:
      'We use Shopify Functions to enforce minimum order quantities. We set rules at the SKU level and cart level. For example, we set rules like 24 units per color or $1,500 cart totals. These rules run server-side in checkout with zero delay.',
  },
  {
    category: 'features',
    question: 'Can corporate buyers save multiple credit cards or bank accounts (ACH) for one-click wholesale checkout?',
    answer:
      'Yes. Shopify Plus B2B supports vaulted payment methods. Buyers save corporate cards or ACH bank details for quick reorders. Payments capture when orders ship.',
  },
  {
    category: 'architecture',
    question: 'How does Shopify Plus B2B support custom volume tier pricing tables on product pages?',
    answer:
      'We build native Liquid and JavaScript volume tier tables on product pages. When wholesale buyers order more units, unit price updates in real time. Total savings update on the page instantly.',
  },
  {
    category: 'commercials',
    question: 'What is the difference between Shopify B2B on Plus versus third-party wholesale apps on standard Shopify?',
    answer:
      'Third-party wholesale apps rely on script overrides and customer tags. These fragile setups break during theme updates. Native Shopify Plus B2B is built into core code. It supports true company hierarchies. You get native Net terms in checkout. Direct ERP webhooks run with zero app fees.',
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
  serviceType: 'Shopify Plus B2B Wholesale Development Agency',
  name: 'Shopify Plus B2B Wholesale Portal Development',
  description:
    'Complete Shopify Plus native B2B wholesale portal development, custom price lists, Net terms, company account hierarchies, and ERP integrations.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B Brands Scaling Wholesale' },
};

const howtoSchema = {
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

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/shopify-plus-b2b#webpage',
  name: 'Shopify Plus B2B Agency & Wholesale Development | FactoryJet',
  description: 'Scale B2B wholesale on Shopify Plus with custom pricing and ERP sync.',
  url: 'https://factoryjet.com/services/shopify-plus-b2b',
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

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify Plus B2B', url: '/services/shopify-plus-b2b' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://factoryjet.com${item.url}`,
  })),
};

const STATS = [
  { b: 'Native B2B.', s: 'Zero slow third-party wholesale apps.' },
  { b: 'Net 30/60/90.', s: 'Automated purchase order terms.' },
  { b: '1 Storefront.', s: 'Unified DTC + B2B catalog backend.' },
  { b: '< 150ms ERP.', s: 'Real-time NetSuite / SAP sync.' },
];

const SOURCED = [
  {
    v: '44%+',
    d: 'Faster order placement speed achieved by wholesale buyers. Powered by native Shopify Plus B2B matrix order forms.',
    src: 'Shopify Enterprise Commerce Benchmark.',
    href: 'https://www.shopify.com/plus',
  },
  {
    v: '$3.6 Trillion',
    d: 'Total US B2B digital commerce volume projected by 2026. Driven as manufacturers and distributors migrate online.',
    src: 'Forrester US B2B E-Commerce Forecast.',
    href: 'https://www.forrester.com',
  },
  {
    v: '65%',
    d: 'Enterprise B2B buyers prioritize digital reorder portals. They favor online tools over manual phone and email orders.',
    src: 'McKinsey Global B2B Buyer Survey.',
    href: 'https://www.mckinsey.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Custom B2B Price Lists & Quantity Breaks.', d: 'Assign distinct wholesale contract pricing and volume tier discounts. Manage customer-specific catalogs with zero app bloat.' },
  { i: '◇', t: 'Company Profiles & Location Hierarchies.', d: 'Allow corporate buyers to manage multiple branch locations. Assign unique buyer permissions and set clear spend limits.' },
  { i: '↯', t: 'Net Payment Terms & Automated Invoicing.', d: 'Enable purchase orders on Net 15, 30, and 60 terms. Generate automatic invoices and send scheduled payment reminders.' },
  { i: '▤', t: 'Unified DTC + B2B Storefront Architecture.', d: 'Run consumer retail and wholesale from a single store backend. This eliminates double catalog maintenance.' },
  { i: '⛓', t: 'ERP & WMS Bi-Directional Synchronization.', d: 'Connect NetSuite, SAP, Acumatica, or Katana to Shopify Plus GraphQL APIs. Sync inventory and orders in real time.' },
  { i: '⤢', t: 'Custom B2B Checkout Rules with Shopify Functions.', d: 'Enforce minimum order quantities (MOQs) and case pack multiples. Apply custom freight rules natively in checkout.' },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Technical Execution Model.',
    factoryjet: 'Senior commerce systems architects write custom ETL scripts. We build Shopify Functions with 100% full IP ownership.',
    traditional: 'Junior agency generalists relying on generic third-party migration apps that cause database bloat.',
  },
  {
    label: 'SEO & 301 URL Preservation.',
    factoryjet: 'We map 100% of legacy URLs one-to-one. We configure single-hop 301 redirects and preserve schema markup.',
    traditional: 'Wildcard home-page redirects that result in massive Google ranking and organic revenue drops.',
  },
  {
    label: 'ERP & Warehouse Synchronization.',
    factoryjet: 'Direct GraphQL webhook pipeline syncing NetSuite, SAP, and Manhattan WMS. Sync executes in under 150ms.',
    traditional: 'Batch CSV file uploads or slow third-party middleware with frequent inventory sync failures.',
  },
  {
    label: 'Commercial Terms & Accountability.',
    factoryjet: 'Transparent fixed-price milestone scope. We guarantee a zero-downtime cutover SLA.',
    traditional: 'Open-ended hourly retainer billing with frequent scope creep and unexpected overages.',
  },
];

export default function ShopifyPlusB2BPage() {
  return (
    <>
      <script id="sp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      <script id="sp-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script id="sp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script id="sp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Shopify Plus B2B Wholesale Agency.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Scale wholesale on <span className="pp-grad">Shopify Plus.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Custom B2B price lists. Net 30 and 60 terms. Company hierarchies and volume tiers. Real-time ERP synchronization on one unified store backend.
                </p>
                <HeroInlineForm source="us_shopify_plus_b2b_hero" region="us" submitLabel="Get a Shopify B2B Scope." />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify Plus B2B wholesale architecture diagram. Shows unified DTC and B2B orders flowing into central ERP."
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
                  Shopify Plus Native B2B Engine.
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Custom Price Lists · Company Accounts · Net Terms · ERP Sync.
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Custom Pricing', desc: 'Tiered Price Lists.' },
                    { name: 'Company Hub', desc: 'Multi-Location.' },
                    { name: 'Net Terms', desc: 'Net 30/60/90.' },
                    { name: 'Quick Reorder', desc: 'Matrix & CSV.' },
                    { name: 'Shopify Rules', desc: 'MOQ Functions.' },
                    { name: 'Central ERP', desc: 'NetSuite / SAP.' },
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
                    Native Platform Architecture.
                  </div>
                  <div>Zero App Bloat · Sub-Second Speed.</div>
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
                Shopify Plus B2B development is the technical engineering of wholesale customer portals. It includes contract pricing rules and company permissions. ERP integrations connect directly with Shopify’s native suite.
              </p>
              <p>
                Historically, wholesale required running separate clone stores or slow third-party apps. These apps injected fragile JavaScript workarounds into the checkout flow. Shopify Plus B2B unifies DTC retail and commercial wholesale. Both run on a single catalog and checkout engine.
              </p>
              <p>
                FactoryJet designs and builds complete Shopify Plus B2B architectures. We configure custom price list matrices. We automate Net payment approvals. We implement matrix quick-order forms. We also build two-way ERP data pipelines with NetSuite, SAP, or Microsoft Dynamics.
              </p>
              <p>
                Consolidating wholesale onto Shopify Plus eliminates manual purchase order entry. It removes phone-based credit card authorization and slow inventory reconciliation. Corporate buyers get a consumer-grade digital purchasing flow. Operations teams gain full visibility across receivables, fulfillment routing, and tax compliance.
              </p>
              <p>
                We build unified blended storefronts and dedicated expansion stores. Our architectures ensure fast response times and complete data integrity. They provide automated tax compliance and scale across high wholesale order volumes.
              </p>
            </div>

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '36px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="Shopify Plus Native B2B Architecture."
                definition="Shopify Plus Native B2B is a built-in enterprise wholesale suite. It runs retail and trade wholesale on a single engine. This eliminates slow third-party apps. Merchants get native Company records. They get multi-location shipping. Custom price lists and Net terms run directly in checkout."
                keyTakeaways={[
                  'Consolidates consumer DTC and B2B wholesale into one unified inventory and catalog backend.',
                  'Sub-second checkout execution powered by native Shopify Functions instead of script injection.',
                  'Zero monthly third-party wholesale app subscriptions or maintenance overhead.',
                ]}
                citationSource="FactoryJet Shopify Plus B2B Architecture Standard (2026)."
              />
              <AnswerFirstDefinition
                term="Shopify Functions & Checkout Extensibility for B2B."
                definition="Shopify Functions are server-side WebAssembly modules running in sub-5ms within checkout. For B2B brands, Functions enforce order minimums and pack multiples. They apply tiered pricing discounts automatically. They also gate Net 30 payment methods based on buyer company credentials."
                keyTakeaways={[
                  'Replaces deprecated checkout scripts with high-speed, secure WebAssembly logic.',
                  'Validates buyer credit limits and payment terms dynamically before order completion.',
                  'Enforces minimum spend brackets and customer-specific freight rules without theme code hacks.',
                ]}
                citationSource="FactoryJet WebAssembly & Checkout Extensibility Standard (2026)."
              />
              <AnswerFirstDefinition
                term="Parent-Child Company Hierarchies."
                definition="A Company record models corporate buying organizations with multiple locations and employee roles. Parent companies manage global credit terms and tax certificates. Branch managers access location-specific catalogs and purchase limits."
                keyTakeaways={[
                  'Corporate parent entities manage consolidated billing, credit lines, and tax resale certificates.',
                  'Subsidiary branches maintain independent shipping endpoints, delivery docks, and tax jurisdictions.',
                  'Role-based permissions separate ordering requisitioners from corporate management approvers.',
                ]}
                citationSource="FactoryJet Enterprise Commerce Entity Modeling (2026)."
              />
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// wholesale market velocity</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus B2B by the numbers.</h2>
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
            <h2 style={{ marginTop: '10px' }}>Core capabilities of our Shopify Plus B2B builds.</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              Everything wholesale brands need to automate purchasing. Eliminate manual data entry and speed up repeat orders.
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
                <h2 style={{ marginTop: '8px' }}>Native B2B Wholesale Portal Architecture.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  We configure company account hierarchies and custom price lists. We set up Net 30 payment terms. We build matrix order forms directly in Shopify Plus.
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
        {/* ── Shopify Functions & B2B Checkout Extensibility Deep Dive ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// modern checkout customization</p>
            <h2 style={{ marginTop: '10px' }}>Custom B2B Validation Rules via Shopify Functions &amp; Checkout Extensibility.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                With legacy checkout scripts deprecated, enterprise merchants need modern Shopify Functions.
                Compiled to WebAssembly (WASM), they execute server-side validation rules in sub-5 milliseconds.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Dynamic Payment Customization Functions.</h3>
              <p>
                We write custom Shopify Functions that dynamically control payment methods. The authenticated buyer company profile
                determines what appears at checkout. New wholesale applicants must use credit cards. Verified accounts with approved
                terms see Net 30, Net 60, or Purchase Order options automatically.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Automated Cart &amp; Order Validation Functions.</h3>
              <p>
                Enforce strict commercial rules before order placement. Validate that wholesale orders meet minimum tier values.
                Ensure case packs follow carton multiples, such as units of 12. Gated logic prevents unverified buyers from adding
                restricted catalog lines to carts.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Custom Delivery Customization &amp; Freight Routing.</h3>
              <p>
                Palletized wholesale orders require tailored shipping logic. Our delivery functions calculate real-time LTL freight
                rates via carrier APIs. They apply customer liftgate surcharges and dock delivery options directly in checkout.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wholesale Price List Architecture & Tiered Volume Rules ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// catalog tiering architecture</p>
            <h2 style={{ marginTop: '10px' }}>Wholesale Price List Architecture and Dynamic Volume Discounting.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Enterprise B2B merchants often maintain complex pricing structures. Pricing rules vary by annual order volume,
                geographic territory, or distributor agreements. Shopify Plus B2B provides native tools to model these requirements.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Fixed vs. Percentage Price Adjustments.</h3>
              <p>
                Assign negotiated wholesale prices per SKU directly. You can also apply percentage margins across whole collections.
                For example, assign 45% off MSRP for Gold Tier accounts.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Incremental Quantity Breaks and Breakpoint Pricing.</h3>
              <p>
                Incentivize larger corporate orders with volume price breaks. Set up tier brackets with clear quantity minimums.
                Shopify Plus recalculates line item pricing dynamically as buyers adjust numbers.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Territory-Specific Catalog Gating.</h3>
              <p>
                Restrict specific product lines based on distribution rights. Regional distributors see only their authorized catalog
                lines. This prevents territorial conflicts across wholesale accounts.
              </p>
            </div>
          </div>
        </section>

        {/* ── Enterprise B2B Data & Entity Modeling ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// data &amp; entity modeling</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise B2B Entity Modeling: Companies, Locations, and Buyer Roles.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Traditional platforms treat every user as an individual customer. Shopify Plus B2B introduces a relational data
                model designed for multi-location corporate buying.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Parent Company Records.</h3>
              <p>
                A single corporate entity acts as the master record. It houses global payment terms, tax exemption certificates,
                and corporate credit limits.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Company Locations &amp; Shipping Endpoints.</h3>
              <p>
                Parent companies can set up multiple subsidiary delivery locations. Each location maintains its own shipping
                addresses, assigned sales reps, and distinct catalog views.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Granular Buyer Roles &amp; Purchasing Permissions.</h3>
              <p>
                Corporate accounts can invite multiple staff members with specific roles. Ordering roles build carts and submit purchase
                orders. Location managers control local addresses and users. Company admins authorize invoices and manage vaulted payment methods.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bi-Directional ERP Middleware Integration ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// erp &amp; wms integration</p>
            <h2 style={{ marginTop: '10px' }}>Bi-Directional ERP Integration: NetSuite, SAP, Dynamics, &amp; Acumatica.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                A modern B2B wholesale portal must connect with your back-office systems. FactoryJet builds real-time API
                pipelines linking Shopify Plus GraphQL endpoints to your master ERP.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Real-Time Inventory Reservation &amp; Multi-Warehouse Routing.</h3>
              <p>
                When a buyer places a purchase order, our middleware checks stock. It reviews inventory across fulfillment centers.
                It reserves inventory in your ERP and routes items to the optimal facility.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Customer Credit Limit &amp; Aging Invoice Synchronization.</h3>
              <p>
                Our Shopify Functions query ERP financial ledgers in sub-150ms before purchase orders clear. If an account has
                overdue balances or exceeds credit lines, checkout prompts for card payment automatically.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Asynchronous Master Price Matrix Updates.</h3>
              <p>
                When contracts change in your ERP, webhooks fire. Shopify Plus B2B price lists update in bulk instantly.
                This eliminates manual data entry errors entirely.
              </p>
            </div>
          </div>
        </section>

        {/* ── B2B Tax Compliance & Resale Exemption Management ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// tax compliance &amp; legal</p>
            <h2 style={{ marginTop: '10px' }}>B2B Automated Tax Compliance &amp; State Resale Certificate Validation.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Managing sales tax across US states requires thorough verification. Our workflows ensure accurate tax collection
                while exempting qualified wholesale buyers.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Automated Resale Certificate Onboarding.</h3>
              <p>
                During registration, buyers submit state resale certificate numbers and exemption forms. Integrations with Avalara
                AvaTax or Vertex validate certificates in real time.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Automated Zero-Tax Wholesale Checkout.</h3>
              <p>
                Once verified on a Company Record, tax status is set. Shopify Plus applies zero sales tax on wholesale items. It maintains
                standard retail tax rates for regular consumers on the same store.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6-Phase Wholesale Sprint Roadmap ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// sprint methodology</p>
            <h2 style={{ marginTop: '10px' }}>The 6-Phase Shopify Plus B2B Implementation Sprint Roadmap.</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Our structured six-phase sprint ensures zero downtime. It protects ledger accounting and speeds up buyer adoption.
              </p>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <li>
                  <strong>Phase 1: B2B Price Matrix &amp; ERP Architecture Blueprint (Week 1).</strong> We audit existing wholesale price sheets. We review tier discount brackets. We map buyer rosters and ERP endpoints.
                </li>
                <li>
                  <strong>Phase 2: Company Accounts &amp; Buyer Hierarchy Setup (Week 2).</strong> We set up native Shopify Plus B2B Company records. We build multi-location address hierarchies. We configure role permissions.
                </li>
                <li>
                  <strong>Phase 3: High-Speed Quick Order Matrix &amp; CSV Ordering UI (Week 3).</strong> We engineer bespoke wholesale ordering interfaces. We build multi-variant SKU entry grids. We add one-click CSV reordering tools.
                </li>
                <li>
                  <strong>Phase 4: Shopify Functions &amp; Checkout Extensibility (Week 4).</strong> We build custom WebAssembly functions for MOQ rules. We enforce tiered spend logic. We gate payment methods for Net terms.
                </li>
                <li>
                  <strong>Phase 5: Bi-Directional ERP &amp; Tax Middleware Integration (Week 5).</strong> We connect NetSuite, SAP, or QuickBooks. We enable real-time inventory locking. Draft orders and invoices sync automatically.
                </li>
                <li>
                  <strong>Phase 6: Wholesale Buyer UAT &amp; Live Portal Launch (Week 6).</strong> We run end-to-end order test cycles with corporate accounts. We train your sales team. We launch with zero downtime.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// architectural comparison</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus Native B2B vs. Legacy Apps vs. Clone Stores.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Why top B2B brands migrate to native Shopify Plus B2B setups.
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
                    <td className="name">Catalog &amp; Inventory Sync.</td>
                    <td>Unified single master catalog.</td>
                    <td>Single catalog with script overrides.</td>
                    <td>Duplicate catalogs to maintain.</td>
                  </tr>
                  <tr>
                    <td className="name">Checkout Speed &amp; Stability.</td>
                    <td>Native sub-second checkout.</td>
                    <td>Slow JavaScript DOM injection.</td>
                    <td>Native separate checkout.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Company &amp; Location Hierarchy.</td>
                    <td>Native parent-child company accounts.</td>
                    <td>Basic customer tags only.</td>
                    <td>Separate customer databases.</td>
                  </tr>
                  <tr>
                    <td className="name">Net Terms &amp; Invoicing.</td>
                    <td>Native Net 15/30/60 PO checkout.</td>
                    <td>App-based draft orders.</td>
                    <td>Manual invoice processing.</td>
                  </tr>
                  <tr className="me">
                    <td className="name">ERP Integration Complexity.</td>
                    <td>Single standard GraphQL API.</td>
                    <td>Brittle custom app endpoints.</td>
                    <td>Double integration pipelines.</td>
                  </tr>
                  <tr>
                    <td className="name">Maintenance &amp; App Fees.</td>
                    <td>Zero extra app fees (Included in Plus).</td>
                    <td>High monthly app subscription overhead.</td>
                    <td>Double Shopify subscription cost.</td>
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

        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
          badge="// UNIFIED B2B COMMERCE ARCHITECTURE."
          title="Enterprise B2B Wholesale & DTC on a Single Modern Commerce Engine."
          subtitle="Consolidate multiple wholesale stores into one unified Shopify Plus setup. Run custom price lists, Net terms, and real-time ERP sync smoothly."
          legacySource="Fragmented B2B Stores & Legacy EDI."
          targetStack="Shopify Plus Native B2B + Real-Time ERP Sync."
          ctaLabel="Schedule B2B Wholesale Architecture Review."
          region="us"
        />

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
                Evaluating Migration Partners: What to Ask.
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare senior engineering replatforming against traditional design agency retainers before you commit.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor.</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model.</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies.</div>
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

        {/* ── Interactive B2B Wholesale Savings & ROI Calculator ── */}
        <section className="pp-sec" id="b2b-wholesale-roi-calculator">
          <div className="pp-wrap">
            <B2bWholesaleCalculator
              source="shopify_plus_b2b_service_page"
              defaultRevenue={5000000}
              defaultAov={2400}
              defaultAccounts={180}
            />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <FAQ
              eyebrow="SHOPIFY PLUS B2B FAQ"
              headline="Frequently asked questions about Shopify Plus B2B."
              lead="Direct technical answers on pricing matrices, Net terms, ERP integration, and wholesale migrations."
              categories={FAQ_CATEGORIES}
              items={FAQ_ITEMS}
            />
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
                  Let us review your wholesale pricing rules, ERP synchronization requirements, and buyer workflows. We deliver a fixed-price implementation roadmap.
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
                    <b>Bhavesh Barot.</b>
                    <span>Founder, FactoryJet. Over 10 years of commerce engineering.</span>
                  </div>
                </div>
                <p style={{ marginTop: '20px', fontSize: '13.5px', color: 'var(--pp-muted)' }}>
                  Explore related capabilities: <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce platforms</Link>, <Link href="/services/shopify-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Shopify store development</Link>, <Link href="/agentic-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>agentic commerce</Link>, and <Link href="/services/ai-agent-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>AI agent operations</Link>.
                </p>
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
                    <span>Director, Impulse Branding</span>
                  </div>
                </div>
                <blockquote>
                  &ldquo;In our business, clients size you up before they ever call. FactoryJet built us a website
                  that finally looks as solid as the work we deliver, and we are getting real project inquiries
                  through it.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/impulse-branding-migration" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Impulse Branding case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
        <div className="pp-wrap">
          <AuthorCard />
        </div>
      </section>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
