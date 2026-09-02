import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MarketplaceFeeCalculator from '@/components/commerce/MarketplaceFeeCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/marketplace';

export const metadata: Metadata = {
  title: 'Marketplace Fee & Margin Calculator (Amazon, Walmart, Target Plus, Faire) | FactoryJet',
  description:
    'Free multichannel marketplace fee calculator. Calculate net profit margins, referral fees, and fulfillment costs across Amazon FBA, Walmart WFS, Target Plus DVS, Faire Wholesale, and Shopify DTC.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Marketplace Fee & Margin Calculator | FactoryJet',
    description:
      'Compare exact platform commissions and fulfillment unit economics across Amazon, Walmart, Target Plus, Faire, and Shopify DTC with our interactive calculator.',
    url: 'https://factoryjet.com/marketplace-fee-calculator',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Marketplace Fee Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketplace Fee & Margin Calculator | FactoryJet',
    description: 'Calculate and model multichannel net margins across Amazon, Walmart, Target Plus, Faire, and Shopify DTC.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/marketplace-fee-calculator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'fees', label: 'Fees & Rates' },
  { key: 'fulfillment', label: 'Fulfillment Costs' },
  { key: 'margins', label: 'Margin Strategy' },
  { key: 'multichannel', label: 'Multichannel Tech' },
];

const FAQ_ITEMS = [
  // Fees & Rates
  {
    category: 'fees',
    question: 'How do Amazon, Walmart, Target Plus, and Faire marketplace fees compare?',
    answer:
      'Amazon charges an average 15% category referral fee (ranging from 8% to 17% depending on the category) plus FBA fulfillment fees. Walmart charges comparable 15% category referral fees but offers lower WFS fulfillment fees. Target Plus charges an 8% to 15% referral fee with zero monthly account fees. Faire charges 25% on first-time wholesale boutique orders and 15% on reorders on wholesale wholesale prices.',
  },
  {
    category: 'fees',
    question: 'What hidden marketplace costs do brands frequently overlook?',
    answer:
      'The most frequent hidden costs include aged inventory surcharges, low-inventory-level fees on Amazon, inbound placement service fees, return processing fees, and mandatory advertising spend (ACOS/ROAS) required to maintain organic search rank against competitors.',
  },
  {
    category: 'fees',
    question: 'Are there monthly recurring subscription fees on each marketplace?',
    answer:
      'Amazon Professional accounts cost $39.99 per month. Walmart Marketplace has zero monthly subscription fees. Target Plus has zero monthly subscription fees. Faire Wholesale charges zero monthly subscription fees, monetizing entirely through transactional commission percentages.',
  },
  {
    category: 'fees',
    question: 'How do payment processing fees differ on marketplaces vs DTC stores?',
    answer:
      'On marketplaces (Amazon, Walmart, Target Plus), payment processing and merchant acquiring fees are covered inside the standard referral commission. On your direct Shopify store, you pay credit card merchant fees (typically 2.4% to 2.9% plus $0.30 per transaction) separately.',
  },

  // Fulfillment Costs
  {
    category: 'fulfillment',
    question: 'What is the cost difference between Amazon FBA and Walmart WFS?',
    answer:
      'Walmart Fulfillment Services (WFS) is on average 10% to 15% cheaper than Amazon FBA for standard-sized consumer packages under 2 lbs. Walmart also charges lower seasonal storage rates during Q4 peak holiday shipping months.',
  },
  {
    category: 'fulfillment',
    question: 'How does Direct Vendor Ship (DVS) fulfillment work on Target Plus?',
    answer:
      'Target Plus utilizes Direct Vendor Ship (DVS), meaning orders are fulfilled directly from your own warehouse or third-party logistics (3PL) provider. You retain complete control over storage costs, packing quality, and parcel shipping carrier negotiations.',
  },
  {
    category: 'fulfillment',
    question: 'How do return costs impact net profitability across marketplaces?',
    answer:
      'Amazon customer return rates average 10% to 25% in apparel and consumer goods, with sellers absorbing return shipping and inspection fees. Target Plus allows in-store returns across 1,900+ stores, consolidating return shipments to minimize individual freight costs.',
  },

  // Margin Strategy
  {
    category: 'margins',
    question: 'What is a healthy net profit margin for multichannel commerce brands?',
    answer:
      'A sustainable net profit margin after COGS, platform referral fees, fulfillment, and ad spend is typically 18% to 30% on direct DTC storefronts and 12% to 22% across third-party marketplaces.',
  },
  {
    category: 'margins',
    question: 'Should brands maintain uniform pricing across all marketplace channels?',
    answer:
      'Yes. Amazon and Walmart automated crawlers actively monitor pricing across competitor websites. If your product is listed at a lower price on another marketplace or your DTC site, Amazon will suppress the Buy Box. Maintaining uniform MSRP avoids algorithmic suppression.',
  },
  {
    category: 'margins',
    question: 'How can brands protect margins when wholesale buyers purchase through Faire?',
    answer:
      'Faire orders represent wholesale purchases where boutique retailers buy at 50% wholesale MSRP. Because order volumes are significantly higher (average B2B order value of $450+), the lower gross margin is offset by zero individual consumer acquisition cost and high repeat reorder rates.',
  },

  // Multichannel Tech
  {
    category: 'multichannel',
    question: 'How does FactoryJet unify inventory across all marketplace channels?',
    answer:
      'We engineer a centralized inventory and order orchestration hub connecting your core commerce platform (Shopify Plus, BigCommerce, or custom ERP) to Amazon SP-API, Walmart Marketplace API, Target EDI (850/856/810), and Faire API, updating inventory counts in real time.',
  },
  {
    category: 'multichannel',
    question: 'How do automated inventory buffers prevent out-of-stock penalties?',
    answer:
      'When available warehouse inventory drops below defined safety thresholds, our automated rules decrement marketplace feed allocations to zero while reserving remaining stock for your primary DTC store, protecting your seller account rating.',
  },
  {
    category: 'multichannel',
    question: 'Can multichannel software eliminate manual order entry for warehouse teams?',
    answer:
      'Yes. All incoming purchase orders from Amazon, Walmart, Target Plus, and Faire route automatically into your primary fulfillment queue or warehouse management system (WMS), generating carrier labels and compliant packing slips instantly.',
  },
  {
    category: 'multichannel',
    question: 'What ERP systems can be connected to this multichannel architecture?',
    answer:
      'We build bi-directional connectors for NetSuite, SAP, Microsoft Dynamics 365, Acumatica, Katana Cloud Manufacturing, QuickBooks Enterprise, and custom PostgreSQL/REST backends.',
  },
  {
    category: 'multichannel',
    question: 'How does multichannel catalog syndication handle variant attributes?',
    answer:
      'Each marketplace requires unique category taxonomy and attribute schemas. Our convertation pipelines map your master product database to each channel’s required data structure without duplicating manual SKU entry.',
  },
  {
    category: 'multichannel',
    question: 'How quickly can FactoryJet deploy an integrated multichannel commerce engine?',
    answer:
      'A complete multi-marketplace integration with automated inventory sync, EDI pipelines, and ERP connectors is typically fully built and deployed in 3 to 4 weeks.',
  },
  {
    category: 'multichannel',
    question: 'What is the pricing model for FactoryJet’s multichannel implementation?',
    answer:
      'We operate on transparent, fixed-price project milestones for architecture, integration, and launch, with optional monthly retainers for ongoing optimization. We never take a percentage cut of your revenue.',
  },
  {
    category: 'multichannel',
    question: 'How do we schedule a multichannel architecture review with the founder?',
    answer:
      'You can book a 30-minute scoping call directly with Bhavesh Barot. We will review your current channel mix, catalog structure, and fulfillment workflows, delivering a fixed-price integration roadmap.',
  },
  {
    category: 'margins',
    question: 'How do seasonal peak fulfillment surcharges affect Q4 marketplace unit margins?',
    answer:
      'During the fourth-quarter holiday peak season from October 15 through January 14, Amazon and Walmart implement seasonal fulfillment surcharges of $0.35 to $2.50+ per unit depending on dimensional parcel weight. Brands that fail to adjust unit margin models often experience profit erosion despite record revenue volume. We model Q4 peak surcharges in advance to ensure advertising target ROAS benchmarks preserve bottom-line profitability.',
  },
  {
    category: 'multichannel',
    question: 'How does automated multi-channel pricing governance prevent Amazon Buy Box loss?',
    answer:
      'Amazon algorithmic web crawlers scan external retail channels including Walmart, Target, and brand DTC websites. If your product is detected at a lower price elsewhere, Amazon suppresses the Buy Box and revokes organic placement. We deploy automated Minimum Advertised Price (MAP) governance tools that maintain uniform pricing across all channels while allowing private promo codes on your DTC store.',
  },
  {
    category: 'margins',
    question: 'What are the hidden storage fees associated with aged marketplace inventory?',
    answer:
      'Amazon assesses aged inventory surcharges on items stored in FBA fulfillment centers for longer than 180 days, escalating significantly at 271, 365, and 450+ days. To eliminate these penalties, our automated inventory tools trigger flash promotions or automated stock removal orders to external 3PL facilities before surcharges hit.',
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

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Multichannel Marketplace Fee & Margin Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Interactive calculator comparing net unit profit margins, platform commissions, and fulfillment costs across Amazon FBA, Walmart WFS, Target Plus DVS, Faire Wholesale, and Shopify DTC.',
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
    { '@type': 'ListItem', position: 3, name: 'Fee Calculator', item: 'https://factoryjet.com/marketplace-fee-calculator' },
  ],
};

const STATS = [
  { b: '5 Channels', s: 'side-by-side unit economics' },
  { b: '100% Real Fees', s: 'exact 2026 commission schedules' },
  { b: '0% Rev-Share', s: 'FactoryJet fixed-price builds' },
  { b: '< 150ms', s: 'sub-second inventory sync speed' },
];

export default function MarketplaceFeeCalculatorPage() {
  return (
    <>
      <script id="calc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="calc-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
      <script id="calc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="calc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Multichannel Margin Engineering</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Marketplace fee &amp; <span className="pp-grad">margin calculator.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Model exact net margins, referral commissions, and fulfillment costs across Amazon FBA, Walmart WFS,
                  Target Plus DVS, Faire Wholesale, and Shopify DTC.
                </p>
                <HeroInlineForm source="us_fee_calculator_hero" region="us" submitLabel="Get a Multichannel Scope" />
              </div>

              {/* Visual Architecture Preview */}
              <div
                role="img"
                aria-label="Multi-channel margin calculator architecture showing synchronized profit flow across five major commercial channels."
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
                  Unified Profit &amp; Fee Engine
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Amazon · Walmart · Target Plus · Faire · Shopify DTC
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Shopify DTC', desc: 'Max Net Margin' },
                    { name: 'Amazon FBA', desc: 'Prime Scale' },
                    { name: 'Walmart WFS', desc: 'Low Fulfillment' },
                    { name: 'Target Plus', desc: 'Curated Assortment' },
                    { name: 'Faire B2B', desc: 'Boutique Wholesale' },
                    { name: 'Unified ERP', desc: 'Single Stock Pool' },
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
                    2026 Commission Verified
                  </div>
                  <div>Zero Revenue Share · Fixed Scoping</div>
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

        {/* ── Interactive Calculator Component ── */}
        <section className="pp-sec" id="calculator-tool">
          <div className="pp-wrap">
            <MarketplaceFeeCalculator source="us_marketplace_fee_calculator_page" />
          </div>
        </section>

        {/* ── Definitional Guide & Fee Schedule ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// commercial economics</p>
            <h2 style={{ marginTop: '10px' }}>How marketplace fees impact multi-channel profitability</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Expanding from a single Shopify storefront into multi-channel marketplace distribution increases brand
                reach, but without rigorous fee modeling, unexpected commissions and fulfillment surcharges can quickly
                erode bottom-line profit.
              </p>
              <p>
                Each commercial channel operates with distinct unit economics:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li><strong>Amazon Marketplace:</strong> Averages a 15% category referral fee plus FBA fulfillment ($3.86 to $11.50+), aged inventory surcharges, and mandatory Amazon Ads (PPC) spend to sustain organic placement.</li>
                <li><strong>Walmart Marketplace:</strong> Features identical 15% referral rates but charges 10% to 15% lower fulfillment fees through Walmart Fulfillment Services (WFS) with less aggressive advertising costs.</li>
                <li><strong>Target Plus:</strong> Charges an 8% to 15% referral fee on an invitation-only basis, allowing vendors to fulfill via Direct Vendor Ship (DVS) from their own warehouse while benefiting from Target 5% RedCard customer loyalty conversion.</li>
                <li><strong>Faire Wholesale:</strong> Enables direct B2B boutique distribution at 50% wholesale MSRP, charging 25% on first orders and 15% on repeat reorders with zero consumer acquisition spend.</li>
                <li><strong>Shopify DTC:</strong> Retains maximum gross margin (only 2.9% plus $0.30 credit card processing and your own 3PL fulfillment costs), but requires dedicated customer acquisition advertising spend (Meta, Google, TikTok).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Category Deep-Dive Unit Economics ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// vertical profit modeling</p>
            <h2 style={{ marginTop: '10px' }}>Unit Economic Realities Across 5 Major Retail Categories</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              How category referral rules and parcel weight tiers determine multichannel channel viability.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Apparel &amp; Fashion (17% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Apparel carries Amazon’s highest referral commission (17% on items over $15) and high return rates (18% to 25%).
                  Brands on Shopify DTC capture 32% net margin versus 14% on Amazon FBA. Directing paid traffic to Shopify while using
                  Amazon for brand discovery maximizes blended margin.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Beauty &amp; Personal Care (15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Beauty products feature high gross margins (65% to 80% COGS efficiency) and compact parcel weights under 1 lb.
                  Walmart WFS and Target Plus DVS deliver 22% net margins with lower advertising cost per acquisition (CPA) compared
                  to competitive Amazon Sponsored Brand bidding.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Home, Kitchen &amp; Decor (15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Bulky home goods suffer from Amazon dimensional weight fees and Q4 peak storage surcharges. Target Plus DVS allows
                  brands to ship from their own 3PL at negotiated carrier freight rates, avoiding Amazon inbound placement fees.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Consumer Electronics (8% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Electronics benefit from Amazon’s lowest referral commission (8% on products over $100). Because hardware margins
                  are tight (30% to 45% gross margin), high sales velocity on Amazon and Walmart offsets lower unit profitability.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Toys, Baby &amp; Kids (15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Seasonal demand spikes dramatically in Q4. Faire Wholesale allows brands to lock in early bulk retail orders from
                  specialty boutiques in August and September, generating upfront cash flow before holiday marketplace competition peaks.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>B2B Wholesale Bundles (15% Faire Reorder)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Wholesale orders average $450 to $1,200 per transaction. While items sell at 50% wholesale MSRP, packing full master
                  cartons slashes per-unit fulfillment labor and eliminates individual consumer acquisition advertising costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        {/* ── 4-Stage Multichannel Profit Framework ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// margin engineering methodology</p>
            <h2 style={{ marginTop: '10px' }}>The 4-Stage Multichannel Profit Optimization Framework</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Scaling profitable marketplace expansion requires moving beyond ad-hoc catalog listings to an engineered
                multichannel architecture. FactoryJet executes a 4-stage optimization framework for every client:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 1: Unit Economic &amp; Fee Diagnostic</h3>
              <p>
                We audit your complete SKU catalog across dimensions, packaging weights, returns, and category classifications.
                Misclassified product types on Amazon or Walmart can result in paying 15% referral rates instead of 8% or 10%.
                We correct category mappings, optimize packaging dimensions to fit lower parcel weight tiers, and eliminate aged inventory surcharges.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 2: Distributed Inventory &amp; Order Routing</h3>
              <p>
                We connect your primary commerce platform (Shopify Plus, BigCommerce, or ERP) directly to Amazon SP-API, Walmart Marketplace API,
                Target EDI, and Faire API. By pooling physical inventory and setting dynamic buffer rules, we ensure you never oversell during
                promotional spikes while keeping Buy Boxes active with real-time stock levels.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 3: Automated Feed convertation &amp; SEO Syndication</h3>
              <p>
                Each marketplace requires distinct taxonomy, bullet structures, and image resolutions. Our automated convertation pipelines
                syndicate product data from your master database into optimized channel feeds without manual spreadsheet re-entry, embedding
                high-volume search terms and structured attributes to capture organic search ranking.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 4: Unified Margin &amp; Buy Box Governance</h3>
              <p>
                Algorithmic pricing crawlers penalize brands that allow marketplace price discrepancies. We establish automated MAP (Minimum
                Advertised Price) monitoring and Buy Box defense systems, protecting your brand value while ensuring advertising spend drives
                profitable net unit margins.
              </p>
            </div>
          </div>
        </section>

        
        {/* ── Fulfillment Cost Models Compared: FBA vs WFS vs Direct 3PL ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// fulfillment economics deep-dive</p>
            <h2 style={{ marginTop: '10px' }}>FBA vs. WFS vs. Private 3PL: Fulfillment Economics Compared</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Choosing the right fulfillment model directly impacts unit profitability and customer delivery speed.
                Brands expanding across multiple channels must evaluate three distinct logistics architectures:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Fulfillment by Amazon (FBA)</h3>
              <p>
                FBA offers unparalleled prime delivery speed across the United States. However, Amazon assesses complex fee
                schedules including base pick-and-pack rates ($3.86 to $11.50+), dimensional weight surcharges, inbound placement fees,
                and aged inventory surcharges for products stored longer than 180 days. In Q4 peak season (October through January),
                storage rates jump from $0.87 to $2.40 per cubic foot.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Walmart Fulfillment Services (WFS)</h3>
              <p>
                WFS provides two-day nationwide delivery with a transparent pricing model that averages 10% to 15% lower than FBA.
                Walmart does not assess complex inbound placement surcharges, and off-peak storage fees remain competitive at $0.84 per cubic foot.
                For products in beauty, household, and consumer packaged goods, WFS consistently delivers higher net unit margins.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Private 3PL with Direct Vendor Ship (DVS) &amp; Seller Fulfilled</h3>
              <p>
                Utilizing a centralized third-party logistics (3PL) warehouse enables brands to fulfill Target Plus DVS, Faire wholesale orders,
                and direct Shopify DTC purchases from a unified inventory pool. This eliminates fractured safety stock across multiple
                fulfillment networks, lowers master carton handling costs, and gives founders complete packaging branding control.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// fee schedule comparison</p>
            <h2 style={{ marginTop: '10px' }}>2026 Multichannel Commission &amp; Fulfillment Matrix</h2>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>Referral Commission</th>
                    <th>Fulfillment Model</th>
                    <th>Monthly Subscriptions</th>
                    <th>Average Net Margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Shopify Direct (DTC)</td>
                    <td>0% (2.9% + $0.30 payment)</td>
                    <td>Self / 3PL Warehouse</td>
                    <td>$39 to $2,300/mo (Plus)</td>
                    <td>22% to 35%</td>
                  </tr>
                  <tr>
                    <td className="name">Target Plus</td>
                    <td>8% to 15%</td>
                    <td>Direct Vendor Ship (DVS)</td>
                    <td>$0 / month</td>
                    <td>16% to 24%</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Walmart Marketplace</td>
                    <td>8% to 15%</td>
                    <td>Walmart Fulfillment (WFS)</td>
                    <td>$0 / month</td>
                    <td>14% to 22%</td>
                  </tr>
                  <tr>
                    <td className="name">Amazon Marketplace</td>
                    <td>8% to 17% (Avg 15%)</td>
                    <td>Fulfillment by Amazon (FBA)</td>
                    <td>$39.99 / month</td>
                    <td>12% to 20%</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Faire Wholesale (B2B)</td>
                    <td>25% 1st / 15% repeat</td>
                    <td>Brand Warehouse / 3PL</td>
                    <td>$0 / month</td>
                    <td>20% to 32% (on wholesale)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// fee questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about marketplace fee modeling"
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
                <p className="pp-mlabel">// scale your multichannel margins</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to engineer your multichannel stack?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us audit your product catalog profitability across all channels and build an automated inventory
                  synchronization architecture that eliminates out-of-stock penalties.
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
                  &ldquo;We were live in just 6 days. New inquiries come in every day, and the site is still really
                  fast.&rdquo;
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
