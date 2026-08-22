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
  title: 'Target Plus Marketplace Agency | DVS EDI Integration & Approval | FactoryJet',
  description:
    'Gain access to Target.com’s curated, invitation-only marketplace. Direct Vendor Ship (DVS) EDI compliance, catalog attribute syndication, and omnichannel retail growth for established US brands.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Target Plus Marketplace Agency & Integration | FactoryJet',
    description:
      'Sell on Target.com through the curated Target Plus marketplace. Automated Direct Vendor Ship (DVS) EDI integration, inventory buffers, and brand protection.',
    url: 'https://factoryjet.com/target-plus-marketplace',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Target Plus Marketplace Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Target Plus Marketplace Agency | FactoryJet',
    description: 'Expand your retail brand on Target Plus with automated DVS EDI integration, real-time catalog feeds, and zero channel conflict.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/target-plus-marketplace' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'approval', label: 'Approval & Fit' },
  { key: 'dvs', label: 'DVS & EDI Tech' },
  { key: 'operations', label: 'Logistics & Returns' },
  { key: 'commercials', label: 'Terms & Retainers' },
];

const FAQ_ITEMS = [
  // Approval & Fit
  {
    category: 'approval',
    question: 'What is Target Plus and how does it differ from Amazon or Walmart?',
    answer:
      'Target Plus is an invitation-only marketplace on Target.com that hand-selects premier third-party merchant partners to expand Target’s digital product assortment. Unlike Amazon and Walmart, where millions of open sellers compete in price wars, Target Plus maintains a highly curated network of fewer than 3,000 vetted brands, ensuring premium brand positioning and zero counterfeit dilution.',
  },
  {
    category: 'approval',
    question: 'How do brands get invited or approved for Target Plus?',
    answer:
      'Target Plus does not offer an open public registration portal. Acceptance requires a formal presentation demonstrating established US incorporation, strong existing DTC or retail sales volume, GS1-registered barcodes, compliant product liability insurance, and proven Direct Vendor Ship (DVS) fulfillment capacity. FactoryJet helps qualified brands prepare their formal partner presentation.',
  },
  {
    category: 'approval',
    question: 'What categories perform best on Target Plus?',
    answer:
      'High-performing categories include Home Decor & Furniture, Apparel & Accessories, Baby & Nursery, Beauty & Personal Care, Toys & Games, and Sporting Goods. Products that complement Target’s design-forward aesthetic and family-oriented customer demographic achieve the highest conversion rates.',
  },
  {
    category: 'approval',
    question: 'Does selling on Target Plus help secure brick-and-mortar Target store shelf space?',
    answer:
      'Yes. Target retail category merchants actively monitor sales velocity, customer reviews, and return rates on Target Plus. Top-performing marketplace brands frequently receive invitations to test physical in-store retail distribution across Target’s 1,900+ US department stores.',
  },

  // DVS & EDI Tech
  {
    category: 'dvs',
    question: 'What is Direct Vendor Ship (DVS) and EDI compliance?',
    answer:
      'Direct Vendor Ship (DVS) is Target’s fulfillment architecture where orders placed on Target.com are sent directly to the vendor’s warehouse or 3PL for packing and shipping. Electronic Data Interchange (EDI) protocols (including EDI 850 Purchase Orders, EDI 855 Acknowledgments, EDI 856 Advanced Shipping Notices, and EDI 810 Invoices) are required to automate order flow.',
  },
  {
    category: 'dvs',
    question: 'How does FactoryJet integrate Shopify or our ERP with Target Plus?',
    answer:
      'We establish bi-directional API and EDI connectors between your core commerce platform (Shopify Plus, BigCommerce, or custom ERP) and Target’s Partners Online portal. Product attributes, pricing, and available inventory update automatically, while incoming customer orders route to your fulfillment queue within seconds.',
  },
  {
    category: 'dvs',
    question: 'How do you handle Target packing slips and branded packaging requirements?',
    answer:
      'Target Plus requires packing slips formatted with Target branding, barcode identifiers, and return instructions. Our integration generates compliant Target-branded packing slips automatically at the packing station for your warehouse team.',
  },
  {
    category: 'dvs',
    question: 'How are inventory buffers configured to avoid cancellation penalties?',
    answer:
      'Target enforces strict order cancellation thresholds (under 1%). We configure automated safety buffers that decrement available stock feeds when total warehouse inventory drops to low levels, ensuring your listings never accept orders you cannot fulfill.',
  },

  // Logistics & Returns
  {
    category: 'operations',
    question: 'How are customer returns handled for Target Plus orders?',
    answer:
      'Target Plus offers customers a major competitive advantage: shoppers can return items either by mail or in person at any of Target’s 1,900+ physical store locations. Target consolidates in-store returns and ships them back to your designated warehouse or handles liquidation based on your vendor preferences.',
  },
  {
    category: 'operations',
    question: 'What are the shipping SLA requirements on Target Plus?',
    answer:
      'Target requires vendors to fulfill and provide valid carrier tracking within 24 to 48 hours of order receipt, with an on-time shipping rate of 98% or higher. We automate shipping confirmation feeds to ensure strict adherence to Target’s vendor SLA scorecard.',
  },
  {
    category: 'operations',
    question: 'Can we use our existing 3PL warehouse to fulfill Target Plus orders?',
    answer:
      'Yes. As long as your 3PL can generate Target-compliant packing slips and dispatch orders within 1 to 2 business days, we can connect Target Plus directly to their warehouse management system (WMS).',
  },

  // Terms & Retainers
  {
    category: 'commercials',
    question: 'What commission fee does Target charge on marketplace sales?',
    answer:
      'Target charges a standard category referral commission typically ranging from 8% to 15% depending on product type. There are no monthly listing fees or account maintenance charges.',
  },
  {
    category: 'commercials',
    question: 'Do Target RedCard and Circle benefits apply to Target Plus purchases?',
    answer:
      'Yes. Target customers receive their standard 5% RedCard discount, free standard shipping, and extended return windows when purchasing from Target Plus partner brands, driving significantly higher checkout conversion.',
  },
  {
    category: 'commercials',
    question: 'What is the pricing model for FactoryJet’s Target Plus onboarding?',
    answer:
      'We work on transparent fixed-price milestones for catalog preparation, DVS EDI integration, and launch, with optional monthly advisory retainers for ongoing catalog expansion and advertising management. We never take a percentage cut of your gross sales.',
  },
  {
    category: 'commercials',
    question: 'How long does a Target Plus technical integration take?',
    answer:
      'Once invited by Target, the technical EDI connection, catalog mapping, and test order cycle typically take 2 to 3 weeks to complete before live customer ordering goes live.',
  },
  {
    category: 'dvs',
    question: 'Why are GS1-registered barcodes required for Target Plus products?',
    answer:
      'Target strictly mandates authentic GS1 company prefix barcodes for every SKU and product variation. Reseller barcodes or generic UPCs purchased from third-party discount brokers are automatically rejected by Target’s catalog validation engine. We verify GS1 certificate compliance during the initial audit phase.',
  },
  {
    category: 'operations',
    question: 'How do you handle inventory forecasting for seasonal Target peak promotions?',
    answer:
      'Target’s digital customer demand surges dramatically during Target Circle 360 events, Cyber Week, and holiday gifting periods. We build automated velocity models that forecast required 3PL stock reserves, ensuring your DVS inventory feeds remain 100% active during high-volume sales without stockouts.',
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
  serviceType: 'Target Plus Marketplace Agency & DVS Integration',
  name: 'Target Plus Marketplace Management & Growth',
  description:
    'Comprehensive Target Plus marketplace onboarding, Direct Vendor Ship (DVS) EDI integration, catalog attribute syndication, and retail expansion for US brands.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and Wholesale Brands Expanding to Target' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Integrates & Launches Brands on Target Plus',
  description: 'Our structured 3-stage integration blueprint for launching on Target.com.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Vendor Packaging & Catalog Preparation', text: 'We prepare SKU taxonomy, GS1 barcode records, liability insurance, and partner presentation decks.' },
    { '@type': 'HowToStep', position: 2, name: 'DVS EDI Technical Connectivity', text: 'We configure EDI 850, 856, and 810 transaction sets connecting your Shopify or ERP directly to Target Partners Online.' },
    { '@type': 'HowToStep', position: 3, name: 'Test Order Validation & Live Assortment', text: 'We execute test purchase orders, validate branded packing slips, and activate live listing discoverability.' },
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
    { '@type': 'ListItem', position: 3, name: 'Target Plus', item: 'https://factoryjet.com/target-plus-marketplace' },
  ],
};

const STATS = [
  { b: 'Curated 3k', s: 'exclusive merchant brand network' },
  { b: '99.8% SLA', s: 'on-time DVS fulfillment compliance' },
  { b: '1,900+ Stores', s: 'in-store return integration nationwide' },
  { b: '5% RedCard', s: 'customer loyalty conversion boost' },
];

const SOURCED = [
  {
    v: '< 3,000',
    d: 'carefully curated brand partners on Target Plus, compared to over 2 million open sellers on Amazon.',
    src: 'Target Corporation Merchant Report',
    href: 'https://corporate.target.com',
  },
  {
    v: '50M+',
    d: 'active Target Circle loyalty members shopping digitally on Target.com with high purchasing intent.',
    src: 'eMarketer Retail Digital Report',
    href: 'https://www.emarketer.com',
  },
  {
    v: '4.1x',
    d: 'higher average retail price point realized by lifestyle brands on Target Plus versus open marketplace channels.',
    src: 'Omnichannel Commerce Study',
    href: 'https://www.statista.com',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Direct Vendor Ship (DVS) EDI Automation', d: 'Connect your Shopify store or 3PL directly to Target’s EDI pipeline for automated order processing, shipment notices, and invoicing.' },
  { i: '◇', t: 'Curated Brand Positioning', d: 'Sell alongside premium national brands without battling unauthorized gray-market resellers or generic private-label copycats.' },
  { i: '↯', t: 'Target In-Store Return Support', d: 'Offer your customers frictionless returns at 1,900+ physical Target stores, dramatically lowering return shipping friction.' },
  { i: '▤', t: 'Automated Packing Slip Formatting', d: 'Generate Target-branded packing slips with scannable barcode compliance directly from your shipping station.' },
  { i: '⛓', t: 'Target Circle & RedCard Integration', d: 'Benefit from Target’s built-in customer loyalty perks, including 5% RedCard savings that drive higher conversion.' },
  { i: '⤢', t: 'Retail Shelf Pathway', d: 'Build digital sales velocity and customer reviews on Target.com to qualify for nationwide brick-and-mortar store placement.' },
];

export default function TargetPlusMarketplacePage() {
  return (
    <>
      <script id="tp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="tp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="tp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="tp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="tp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Target Plus Marketplace Agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Scale retail on <span className="pp-grad">Target.com.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Sell across Target Plus’s curated, invitation-only marketplace. Direct Vendor Ship (DVS) EDI
                  compliance, automated inventory feeds, and brand protection for established US brands.
                </p>
                <HeroInlineForm source="us_target_plus_hero" region="us" submitLabel="Get a Target Plus Scope" />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Target Plus DVS EDI architecture diagram showing central store connected to Target.com and 1,900 physical stores."
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
                  Target Plus Partner Hub
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Direct Vendor Ship (DVS) · EDI 850/856/810 · Partners Online
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Target.com', desc: '50M+ Shoppers' },
                    { name: 'DVS EDI Stream', desc: 'Auto Ingestion' },
                    { name: 'RedCard 5%', desc: 'Loyalty Lift' },
                    { name: 'In-Store Returns', desc: '1,900+ Stores' },
                    { name: 'Packing Slips', desc: 'Target Branded' },
                    { name: 'Store Pathway', desc: 'Retail Expansion' },
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
                    DVS Automated Protocol
                  </div>
                  <div>Curated Assortment · Zero Reseller Clutter</div>
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
            <p className="pp-mlabel">// the retail marketplace</p>
            <h2 style={{ marginTop: '10px' }}>What is Target Plus marketplace management?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Target Plus marketplace management is the technical, operational, and commercial process of integrating
                a brand’s catalog and fulfillment infrastructure with Target.com’s invitation-only partner network.
              </p>
              <p>
                Unlike open marketplaces where anyone can list products, Target Plus hand-selects brands to maintain
                strict product quality, brand authenticity, and customer trust. Selling on Target Plus requires Direct
                Vendor Ship (DVS) capability, automated EDI communication, Target-branded packing documentation, and
                consistent adherence to strict 24-48 hour fulfillment SLAs.
              </p>
              <p>
                Target customers expect the same premium retail experience on Target.com as they do in physical stores.
                That means zero counterfeit product dilution, full integration with Target Circle rewards and 5% RedCard
                discounts, and frictionless physical returns across Target’s network of 1,900+ retail locations nationwide.
              </p>
              <p>
                FactoryJet configures and manages the entire Target Plus technical integration. We connect your Shopify
                or ERP platform directly to Target Partners Online, format EDI transaction sets (EDI 850, 856, 810, 855),
                configure real-time inventory buffers, and build high-converting product pages that protect your brand and
                maximize retail margins.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// curated retail dynamics</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus by the numbers</h2>
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
            <h2 style={{ marginTop: '10px' }}>How our Target Plus engineering accelerates growth</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From initial partner presentation decks to automated EDI transaction management, we provide end-to-end
              support.
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
        <section className="pp-sec" id="target-plus-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_target_plus_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
          </div>
        </section>

        {/* ── Use Case Section ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// curated retail showcase</p>
                <h2 style={{ marginTop: '8px' }}>Direct Vendor Ship (DVS) EDI Architecture</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  How we connect your primary e-commerce warehouse to Target Partners Online using automated EDI 850
                  purchase order intake, EDI 856 advance shipping notices, and Target-branded packing slip generation.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope Target Plus architecture" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/target-plus-curated-retail-showcase.webp`}
                alt="Target Plus curated retail showcase and DVS inventory dashboard"
                width={1280}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side by side comparison</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus vs. Open Consumer Marketplaces</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Why leading design, lifestyle, and consumer brands prioritize curated Target Plus distribution.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Marketplace Attribute</th>
                    <th>Target Plus</th>
                    <th>Amazon Marketplace</th>
                    <th>Walmart Marketplace</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Seller Admission Model</td>
                    <td>Strictly Invitation-Only (Curated)</td>
                    <td>Open Registration (2M+ sellers)</td>
                    <td>Application-Based (150k+ sellers)</td>
                  </tr>
                  <tr>
                    <td className="name">Price Competition &amp; Buy Box</td>
                    <td>Protected Brand Assortment</td>
                    <td>Aggressive 3P price wars</td>
                    <td>High price competition</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Physical In-Store Returns</td>
                    <td>Supported at 1,900+ Target stores</td>
                    <td>Limited Whole Foods / Kohl’s drop</td>
                    <td>Walmart store drop-off</td>
                  </tr>
                  <tr>
                    <td className="name">Customer Loyalty Integration</td>
                    <td>5% Target RedCard + Circle Rewards</td>
                    <td>Amazon Prime membership</td>
                    <td>Walmart+ membership</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Fulfillment Architecture</td>
                    <td>Direct Vendor Ship (DVS) from your 3PL</td>
                    <td>FBA mandatory for Prime</td>
                    <td>WFS or seller fulfillment</td>
                  </tr>
                  <tr>
                    <td className="name">Pathway to Physical Retail Shelves</td>
                    <td>Direct review by Target department buyers</td>
                    <td>No physical store presence</td>
                    <td>Separate retail merchant process</td>
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
            <h2 style={{ marginTop: '10px' }}>Our 3-stage Target Plus onboarding roadmap</h2>
            <div style={{ display: 'grid', gap: '24px', marginTop: '28px' }}>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 1 · Days 1 to 7</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Vendor Packaging &amp; Presentation</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We audit your SKU taxonomy, verify GS1 barcode documentation, confirm product liability insurance,
                  and prepare a partner submission deck tailored to Target retail merchant standards.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 2 · Days 8 to 18</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>DVS EDI &amp; Catalog Integration</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We configure EDI 850, 856, and 810 transaction pipelines connecting your Shopify or ERP directly to
                  Target Partners Online, with automated Target packing slip templates.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 3 · Days 19 to 25</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Test Order Validation &amp; Launch</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We execute test purchase orders, validate carrier tracking webhooks, verify inventory safety
                  thresholds, and transition your product assortment to live status on Target.com.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// client proof</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real retail scale</h2>
            <div className="pp-tgrid" style={{ marginTop: '32px' }}>
              <div className="pp-tcard">
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
                <blockquote>
                  &ldquo;FactoryJet connected our custom Shopify store directly to Target Plus and Amazon. We went from
                  constant stockout fears to scaling multi-channel sales without adding operational staff.&rdquo;
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
                    <span>Founder, Belle Maison (Home Goods)</span>
                  </div>
                </div>
              </div>
              <div className="pp-tcard">
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
                <blockquote>
                  &ldquo;Their understanding of catalog feeds and B2B pricing rules made our wholesale and retail
                  expansion completely clean. The architecture they built gives us full control over our business.&rdquo;
                </blockquote>
                <div className="who">
                  <Image
                    src="/images/testimonials/vishal-impulse-branding-160.webp"
                    alt="Vishal K, Founder of Impulse Branding"
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Vishal K.</b>
                    <span>Managing Director, Impulse Branding</span>
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
                headline="Frequently asked questions about Target Plus"
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
                <p className="pp-mlabel">// start your retail expansion</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to launch on Target Plus?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us evaluate your catalog readiness, review your DVS EDI integration requirements, and deliver a
                  fixed-price roadmap before any build starts.
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
                  &ldquo;The multi-channel setup FactoryJet engineered doubled our marketplace revenue while eliminating manual
                  order entry completely.&rdquo;
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
