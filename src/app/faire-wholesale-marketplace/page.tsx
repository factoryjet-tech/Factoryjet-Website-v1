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
  title: 'Faire Wholesale Marketplace Agency | B2B Integration & Brand Growth | FactoryJet',
  description:
    'Scale wholesale revenue across 500,000+ independent retail boutiques on Faire. Automated Shopify, BigCommerce, and ERP catalog sync, Net 60 payment reconciliation, and B2B brand positioning.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Faire Wholesale Marketplace Agency & Integration | FactoryJet',
    description:
      'Connect your Shopify store or ERP directly to Faire Wholesale. Automate inventory, tiered B2B pricing, and boutique reorders without manual order entry.',
    url: 'https://factoryjet.com/faire-wholesale-marketplace',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Faire Wholesale Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faire Wholesale Marketplace Agency | FactoryJet',
    description: 'Grow your B2B wholesale brand on Faire with direct catalog sync, Net 60 order routing, and zero channel conflict.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/faire-wholesale-marketplace' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Faire Overview' },
  { key: 'sync', label: 'Integration & ERP' },
  { key: 'pricing', label: 'Margins & Terms' },
  { key: 'growth', label: 'B2B Scaling' },
];

const FAQ_ITEMS = [
  // Faire Overview
  {
    category: 'basics',
    question: 'What is Faire Wholesale and how does it work for brands?',
    answer:
      'Faire is the leading online B2B wholesale marketplace connecting emerging and established brands with more than 500,000 independent retail boutiques across North America and Europe. Retailers browse wholesale catalogs, place opening orders with Net 60 payment terms, and receive free returns on first orders, while Faire guarantees payment to the brand.',
  },
  {
    category: 'basics',
    question: 'How does Faire differ from selling on Amazon or direct DTC?',
    answer:
      'Faire is strictly business-to-business (B2B). Buyers are verified brick-and-mortar boutique owners, specialty retailers, and gift shop operators buying in case packs with minimum order quantities (MOQs). Unlike Amazon consumer fees and race-to-the-bottom pricing, Faire enables high-margin repeat wholesale accounts that place steady restocking reorders.',
  },
  {
    category: 'basics',
    question: 'What commission does Faire charge on wholesale orders?',
    answer:
      'Faire charges a 15% commission on reorders from retailers who discover your brand through the marketplace (25% on the very first opening order). However, for existing retail accounts or buyers invited through your custom Faire Direct link, commission is 0% for life. We architect your sales pipeline to maximize 0% commission Faire Direct conversions.',
  },
  {
    category: 'basics',
    question: 'Can any brand sell on Faire?',
    answer:
      'Faire reviews and curates applications based on product quality, packaging readiness for retail shelves, wholesale pricing structure, and brand aesthetic. We assist brands with catalog packaging, pricing model preparation, and application approvals.',
  },

  // Integration & ERP
  {
    category: 'sync',
    question: 'How does Shopify or ERP integration with Faire work?',
    answer:
      'We establish direct API synchronization between your core commerce platform (Shopify Plus, BigCommerce, WooCommerce, or custom ERP) and Faire. Product variants, wholesale pricing, case pack configurations, and available inventory sync in real time. Incoming Faire wholesale orders automatically route to your warehouse for picking and packing.',
  },
  {
    category: 'sync',
    question: 'How do you prevent stockouts between direct consumer sales and wholesale orders?',
    answer:
      'We configure automated inventory allocation rules and safety buffers. If a large wholesale order arrives on Faire for 100 units, available inventory on your Shopify DTC storefront and Amazon FBA feeds immediately adjusts to reflect reserved inventory, eliminating overselling risks.',
  },
  {
    category: 'sync',
    question: 'Can we offer custom case pack quantities and minimum order amounts?',
    answer:
      'Yes. We configure Minimum Order Values (e.g., $150 minimum for opening orders, $100 for reorders) and establish case pack multiples (e.g., sold in multiples of 6 or 12 units) so retail buyers cannot order single consumer units at wholesale rates.',
  },
  {
    category: 'sync',
    question: 'How are shipping labels and logistics handled on Faire?',
    answer:
      'Brands can choose between Ship with Faire (generating discounted prepaid carrier labels through Faire’s negotiated rates) or Ship on Your Own (using your own 3PL and carrier accounts, with actual shipping costs reimbursed by Faire). We configure the lowest-cost shipping profile for your product dimensions.',
  },

  // Margins & Terms
  {
    category: 'pricing',
    question: 'How does Net 60 payment work without cash flow risk for the brand?',
    answer:
      'Faire extends Net 60 financing terms to verified retailers at its own credit risk. You receive payment directly into your bank account on your standard payout schedule (typically 1 to 2 business days after carrier scan), regardless of when the retailer pays Faire.',
  },
  {
    category: 'pricing',
    question: 'How should wholesale pricing (WS) and retail pricing (MSRP) be structured?',
    answer:
      'Wholesale pricing typically requires a 50% discount off MSRP (keystone pricing, e.g., $10 wholesale for a $20 retail product). We help brands calculate unit economics, packaging margins, and case pack tiers to ensure profitability after referral fees and shipping.',
  },
  {
    category: 'pricing',
    question: 'How do you protect MAP pricing and prevent retail price erosion?',
    answer:
      'We set strict Minimum Advertised Price (MAP) policies on your Faire brand portal and provide compliance agreements for retail buyers. Independent boutiques are prohibited from listing your products on third-party discounters like Amazon or eBay.',
  },

  // B2B Scaling
  {
    category: 'growth',
    question: 'How do you rank higher in Faire marketplace search results?',
    answer:
      'Faire’s ranking algorithm prioritizes Top Shop badge status, fast fulfillment lead times (under 3 days), low order cancellation rates, complete catalog attributes, high reorder rates, and active promotion during Faire Markets virtual trade shows. We manage all operational criteria to maintain Top Shop placement.',
  },
  {
    category: 'growth',
    question: 'What is a Top Shop badge and why is it critical on Faire?',
    answer:
      'Top Shop is Faire’s premium seller tier awarded to brands with a 4.8+ rating, 95%+ on-time shipping rate, and fast response times. Top Shop brands receive priority search placement, exclusive promotional badges, and access to Faire Market co-funded discounts.',
  },
  {
    category: 'growth',
    question: 'How do you turn one-time boutique buyers into lifetime reordering accounts?',
    answer:
      'We implement automated B2B customer communication workflows, seasonal catalog release notifications, personalized restock reminders based on typical sell-through cycles, and exclusive Faire Direct promotional incentives.',
  },
  {
    category: 'growth',
    question: 'Can we sell wholesale internationally in the UK and Europe on Faire?',
    answer:
      'Yes. Faire operates across 15+ European countries (UK, France, Germany, etc.). We configure multi-currency price lists (USD, EUR, GBP), localized product descriptions, and automated customs documentation for compliant international cross-border B2B shipping.',
  },
  {
    category: 'growth',
    question: 'What is the onboarding timeline for Faire Wholesale integration?',
    answer:
      'A complete Faire integration typically takes 10 to 14 business days, including catalog data mapping, case pack setup, inventory webhook automation, ERP testing, and Top Shop operational readiness.',
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
  serviceType: 'Faire Wholesale Marketplace Agency & B2B Integration',
  name: 'Faire Wholesale B2B Marketplace Management & Growth',
  description:
    'Full-service Faire Wholesale management, automated Shopify/ERP catalog synchronization, Net 60 order routing, Top Shop badge optimization, and B2B boutique reorder acceleration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and B2B Brands Expanding to Wholesale' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Launches & Automates Faire Wholesale Operations',
  description: 'Our 3-stage integration blueprint for scaling wholesale revenue on Faire.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Wholesale Catalog & Case Pack Setup', text: 'We structure wholesale pricing tiers, case pack quantities, minimum order amounts, and retail margin calculations.' },
    { '@type': 'HowToStep', position: 2, name: 'Automated API & Inventory Sync', text: 'We build direct webhooks between Faire, Shopify Plus, and your ERP to automate stock levels and order ingestion.' },
    { '@type': 'HowToStep', position: 3, name: 'Top Shop Optimization & Virtual Trade Shows', text: 'We maintain Top Shop operational metrics, participate in Faire Markets, and drive 0% commission Faire Direct reorders.' },
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
    { '@type': 'ListItem', position: 2, name: 'Marketplaces', item: 'https://factoryjet.com/marketplace-management' },
    { '@type': 'ListItem', position: 3, name: 'Faire Wholesale', item: 'https://factoryjet.com/faire-wholesale-marketplace' },
  ],
};

const STATS = [
  { b: '500k+ Boutiques', s: 'active retail buyers on Faire' },
  { b: '99.9% Sync Uptime', s: 'real-time inventory & ERP connection' },
  { b: '0% Commission', s: 'on all Faire Direct wholesale accounts' },
  { b: 'Net 60 Terms', s: 'guaranteed payouts with zero credit risk' },
];

const SOURCED = [
  {
    v: '500,000+',
    d: 'independent retail stores and specialty boutiques actively source new wholesale product lines on Faire.',
    src: 'Faire Global Retailer Benchmark',
    href: 'https://www.faire.com',
  },
  {
    v: '74%',
    d: 'of independent boutique owners prefer online B2B marketplaces over traditional in-person trade shows for seasonal reorders.',
    src: 'National Retail Federation (NRF)',
    href: 'https://nrf.com',
  },
  {
    v: '2.8x',
    d: 'higher annual order volume generated by wholesale brands maintaining verified Top Shop badge status on Faire.',
    src: 'Wholesale Commerce Report',
    href: 'https://www.statista.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Automated Catalog & Inventory Sync', d: 'Eliminate manual CSV uploads. Product changes in Shopify or your ERP sync directly to Faire with real-time stock protection.' },
  { i: '◇', t: 'Faire Direct 0% Commission Funnel', d: 'Convert existing retail accounts and trade show leads through your custom Faire Direct link to eliminate marketplace commission forever.' },
  { i: '↯', t: 'Top Shop Operational Management', d: 'We monitor fulfillment speed, lead times, and response rates to guarantee your brand maintains the prestigious Top Shop badge.' },
  { i: '▤', t: 'B2B Case Packs & MOQ Optimization', d: 'Structure case packs, opening minimums, and volume breaks that maximize average order value (AOV) for boutique buyers.' },
  { i: '⛓', t: 'Faire Market & Promotion Strategy', d: 'Maximize wholesale sales during semi-annual Faire Markets with co-funded discounts, email announcements, and tiered promos.' },
  { i: '⤢', t: 'Cross-Border UK & European Expansion', d: 'Sell to independent retailers across the UK and 15+ European nations with automated currency conversion and VAT compliance.' },
];

const USECASES = [
  {
    t: 'Direct Shopify Plus & ERP Wholesale Synchronization',
    d: 'How we connect your primary e-commerce catalog to Faire’s B2B portal with real-time inventory buffers, custom case packs, and automated order ingestion.',
    img: 'faire-brand-portal-catalog.webp',
  },
  {
    t: 'Boutique Acquisition & 0% Commission Faire Direct Funnels',
    d: 'Arming your sales team with custom Faire Direct links, Net 60 payment terms for buyers, and $100 opening order credits that Faire funds on your behalf.',
    img: 'faire-wholesale-boutique-sync.webp',
  },
];

export default function FaireWholesaleMarketplacePage() {
  return (
    <>
      <script id="faire-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="faire-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="faire-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="faire-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="faire-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Faire Wholesale B2B Agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Scale wholesale to <span className="pp-grad">500k+ boutiques.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Connect your Shopify store or ERP directly to Faire Wholesale. Automate inventory, tiered B2B pricing,
                  and boutique reorders without manual order entry or channel conflict.
                </p>
                <HeroInlineForm source="us_faire_wholesale_hero" region="us" submitLabel="Get a Faire Wholesale Scope" />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Faire Wholesale B2B architecture diagram showing Shopify/ERP connected to 500,000 boutique retail buyers."
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
                  Faire Wholesale Brand Hub
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify Plus / ERP Master Sync · Case Packs · Net 60
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: '500k+ Boutiques', desc: 'Active B2B Buyers' },
                    { name: 'Top Shop Tier', desc: 'Priority Ranking' },
                    { name: 'Faire Direct', desc: '0% Commission' },
                    { name: 'ERP Ingestion', desc: 'Automated 3PL' },
                    { name: 'Net 60 Financing', desc: 'Guaranteed Payout' },
                    { name: 'Faire Markets', desc: 'Virtual Trade Shows' },
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
                    Direct B2B Webhook Pipeline
                  </div>
                  <div>Zero Manual Invoicing · Keystone Margins</div>
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

        {/* ── What Is ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the wholesale opportunity</p>
            <h2 style={{ marginTop: '10px' }}>What is Faire Wholesale marketplace management?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Faire Wholesale marketplace management is the technical and operational discipline of establishing,
                optimizing, and scaling a brand’s presence on Faire, the world’s largest online wholesale marketplace for
                independent retail boutiques.
              </p>
              <p>
                Unlike consumer retail platforms where brands compete for one-off transactions, Faire connects your
                catalog directly with commercial buyers who purchase in case pack multiples and place recurring seasonal
                reorders. However, managing wholesale manually through spreadsheet uploads and disconnected invoicing
                creates stockouts, delayed fulfillment, and lost Top Shop status.
              </p>
              <p>
                FactoryJet builds automated API connectors between your core e-commerce platform and Faire. We configure
                case pack rules, optimize catalog attributes for B2B search visibility, manage Top Shop operational
                metrics, and structure Faire Direct funnels so you acquire wholesale accounts at 0% commission.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// b2b marketplace metrics</p>
            <h2 style={{ marginTop: '10px' }}>The independent retail landscape, by the numbers</h2>
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
            <p className="pp-mlabel">// wholesale growth levers</p>
            <h2 style={{ marginTop: '10px' }}>How we scale your Faire Wholesale business</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From initial catalog mapping to automated warehouse routing and promotional trade show campaigns, we handle
              the technical and operational heavy lifting.
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
        <section className="pp-sec" id="faire-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_faire_wholesale_page"
              defaultPlatform="shopify"
              defaultTarget="bigcommerce-b2b"
            />
          </div>
        </section>

        {/* ── Use Cases ── */}
        {USECASES.map((uc, idx) => (
          <section key={uc.t} className={`pp-sec${idx % 2 === 0 ? '' : ' tint'}`}>
            <div className="pp-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1.05fr 0.95fr' : '0.95fr 1.05fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
                {idx % 2 !== 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.t}
                    width={1280}
                    height={800}
                    style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
                  />
                )}
                <div>
                  <p className="pp-mlabel">{`// execution blueprint 0${idx + 1}`}</p>
                  <h2 style={{ marginTop: '8px' }}>{uc.t}</h2>
                  <p className="pp-lead" style={{ marginTop: '14px' }}>{uc.d}</p>
                  <div style={{ marginTop: '22px' }}>
                    <ModalCTAButton label="Scope Faire integration" region="us" btnVariant="secondary-light" />
                  </div>
                </div>
                {idx % 2 === 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.t}
                    width={1280}
                    height={800}
                    style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side by side comparison</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet vs. Manual Wholesale Administration</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Why growing brands replace manual CSV management with our automated B2B marketplace architecture.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capability / Operational Area</th>
                    <th>FactoryJet Faire Engineering</th>
                    <th>Manual In-House Admin</th>
                    <th>Generic Marketing Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Inventory Synchronization</td>
                    <td>Real-time bi-directional API state machine</td>
                    <td>Manual weekly stock updates</td>
                    <td>Not supported / outsourced</td>
                  </tr>
                  <tr>
                    <td className="name">Order Routing</td>
                    <td>Direct automated ingestion into Shopify / 3PL</td>
                    <td>Manual order re-typing</td>
                    <td>Manual CSV downloads</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Faire Direct 0% Commission</td>
                    <td>Automated onboarding workflows for all leads</td>
                    <td>Inconsistent manual invites</td>
                    <td>Basic ad traffic only</td>
                  </tr>
                  <tr>
                    <td className="name">Top Shop Qualification</td>
                    <td>Continuous SLA monitoring and automated tracking</td>
                    <td>Prone to lead-time slip</td>
                    <td>No operational support</td>
                  </tr>
                  <tr className="me">
                    <td className="name">International Expansion</td>
                    <td>Multi-currency EUR, GBP and customs automation</td>
                    <td>Manual customs paperwork</td>
                    <td>Domestic US only</td>
                  </tr>
                  <tr>
                    <td className="name">Fee Structure</td>
                    <td>Fixed milestone pricing with zero revenue cuts</td>
                    <td>Internal headcount salary</td>
                    <td>Percentage of wholesale sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// execution roadmap</p>
            <h2 style={{ marginTop: '10px' }}>Our 3-stage Faire launch framework</h2>
            <div style={{ display: 'grid', gap: '24px', marginTop: '28px' }}>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 1 · Days 1 to 5</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Catalog Architecture &amp; Case Pack Structuring</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We configure wholesale pricing tiers, case pack quantities, minimum order quantities, and product
                  attribute taxonomy to match Faire’s B2B category standards.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 2 · Days 6 to 10</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Direct API &amp; Webhook Integration</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We build live connectors between Faire, Shopify, and your ERP, ensuring instant stock decrements and
                  automatic tracking number synchronization.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 3 · Days 11 to 14</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Top Shop Acceleration &amp; Faire Direct Launch</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We activate your Faire Direct custom link, enroll in upcoming virtual trade show events, and establish
                  reorder automation workflows for incoming boutique accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// client proof</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real wholesale scale</h2>
            <div className="pp-tgrid" style={{ marginTop: '32px' }}>
              <div className="pp-tcard">
                <blockquote>
                  &ldquo;We were live in 6 days, I genuinely did not believe that was possible. The design is
                  stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed
                  lightning fast.&rdquo;
                </blockquote>
                <div className="who">
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B, Founder of Belle Maison"
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Ricky B.</b>
                    <span>Founder, Belle Maison</span>
                  </div>
                </div>
              </div>
              <div className="pp-tcard">
                <blockquote>
                  &ldquo;In our business, clients size you up before they ever call. FactoryJet built us a website
                  that finally looks as solid as the work we deliver, and we are getting real project inquiries
                  through it.&rdquo;
                </blockquote>
                <div className="who">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Director of Impulse Branding"
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Director, Impulse Branding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about Faire Wholesale"
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
                <p className="pp-mlabel">// start your wholesale expansion</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to sell to 500,000+ retail boutiques on Faire?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us audit your wholesale pricing, review your ERP integration opportunities, and deliver a
                  fixed-price roadmap before any build starts.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_image.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; 10+ yrs building commerce</span>
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
                  &ldquo;We were live in 6 days, I genuinely did not believe that was possible. The design is
                  stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed
                  lightning fast.&rdquo;
                </blockquote>
                <div className="rate">
                  <a href="/case-studies/belle-maison-ecommerce-success" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    Read the Belle Maison case study →
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
