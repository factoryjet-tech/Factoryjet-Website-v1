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
const PAGE_URL = 'https://factoryjet.com/target-plus-marketplace';
const TP_APPLY = 'https://plus.target.com/apply';
const TP_GROWTH = 'https://corporate.target.com/news-features/article/2026/07/target-plus-growth';
const TP_SHOPIFY =
  'https://corporate.target.com/press/release/2024/06/target-and-shopify-partner-to-help-consumers-discover-and-shop-an-expanded-assortment-on-target-com';
const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

const PAGE_TITLE = 'Target Plus Agency: Target DVS and EDI Setup | FactoryJet';
const PAGE_DESCRIPTION =
  'Target DVS means you ship Target.com orders from your own warehouse. We set up Target Plus listings, EDI 850, 856 and 810 links, and order feeds.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Target Plus Agency: Target DVS and EDI Setup | FactoryJet',
    description:
      'Target DVS and Target Plus explained, with Target’s published partner requirements and the EDI 850, 856 and 810 documents vendors use.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Target Plus Marketplace Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Target Plus Agency: Target DVS and EDI Setup | FactoryJet',
    description: 'Target DVS and Target Plus explained, with Target’s published partner requirements and EDI basics.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'approval', label: 'Approval & Fit' },
  { key: 'dvs', label: 'DVS & EDI Tech' },
  { key: 'operations', label: 'Logistics & Returns' },
  { key: 'commercials', label: 'Terms & Pricing' },
];

const FAQ_ITEMS = [
  // Approval & Fit
  {
    category: 'approval',
    question: 'What is Target DVS?',
    answer:
      'Target DVS stands for direct vendor ship. When a guest orders on Target.com, the order goes to the vendor, and the vendor ships it from its own warehouse or 3PL straight to the guest. Target does not hold that stock. Target’s 1P vendors on DVS trade purchase orders, ship notices and invoices with Target over EDI. Target Plus partners also ship their own orders, but Target Plus is a separate marketplace program.',
  },
  {
    category: 'approval',
    question: 'What is Target Plus?',
    answer:
      'Target Plus is Target’s invite-only third-party marketplace on Target.com. Target picks who joins and says it looks for direct brand and authorized reseller partnerships. Partners list their products on Target.com, Target runs the checkout, and the partner ships each order from the US. In a July 2026 article, Target said it added dozens of new, hand-picked brands to Target Plus that summer.',
  },
  {
    category: 'approval',
    question: 'What is the difference between Target and Target Plus?',
    answer:
      'Target sells products it buys from vendors. It stocks and ships them itself, or has vendors ship them directly through DVS. Target Plus is the marketplace side. Partner brands list their own products on Target.com, hold their own stock and ship orders to the guest. The shopper sees one Target.com checkout either way. The contracts, fees and systems behind the two are different.',
  },
  {
    category: 'approval',
    question: 'What is a Target Plus partner?',
    answer:
      'A Target Plus partner is a brand or authorized reseller that Target has invited to sell on Target.com through its marketplace. The partner owns the inventory, builds listings to Target’s content rules, ships orders inside Target’s lead time and receives returns. Target runs checkout and the guest relationship. Commission and other terms are set in Target’s partner agreement.',
  },
  {
    category: 'approval',
    question: 'How do brands get invited or approved for Target Plus?',
    answer:
      'Target Plus is invite-only. Brands can apply on Target’s Target Plus apply page, and Target decides who joins. Before you apply, check yourself against the published prerequisites: a US-registered business with a US address, a W-9, an EIN and a DUNS number, US-only shipping with UPS, USPS or FedEx, a 24-hour lead time and GS1 barcodes on every product. We help you check each item before you submit.',
  },
  {
    category: 'approval',
    question: 'What are the Target Plus seller requirements?',
    answer:
      'Target’s apply page lists them. You need a US-registered business with a US address, a W-9, an EIN (SSNs are not accepted) and a DUNS number. You ship with UPS, USPS or FedEx, fulfill only from the US, ship within 24 hours and deliver in 2 to 5 business days. You also need GS1 barcodes, grid size charts for wearables and UL WERCSmart registration for hazmat items.',
  },
  {
    category: 'approval',
    question: 'Can Shopify brands sell on Target Plus?',
    answer:
      'Yes, if Target accepts them. In June 2024, Target and Shopify announced a partnership that lets Shopify merchants apply to Target Plus through Shopify’s Marketplace Connect app. Acceptance is still Target’s decision. Once accepted, Marketplace Connect can sync listings, stock and orders. Brands that run stock in an ERP or a custom catalog often need a direct integration instead.',
  },
  {
    category: 'approval',
    question: 'Does selling on Target Plus lead to Target store shelf space?',
    answer:
      'Target does not publish any rule that links Target Plus sales to store placement. Store buying runs through Target’s merchant teams as a separate process. Treat Target Plus as an online channel on its own merits. If your products sell well there, you will have sales and review data to show a buyer later, but nobody can promise you shelf space.',
  },

  // DVS & EDI Tech
  {
    category: 'dvs',
    question: 'What are the Target EDI requirements?',
    answer:
      'Target’s 1P vendors, including DVS vendors, trade business documents with Target over EDI. The usual X12 set covers purchase orders, ship notices and invoices. Target gives each vendor the exact documents, versions and test steps during setup, in its vendor guides on Partners Online. We do not guess at those rules. We read your Target guide and build to it. Target Plus partners usually connect through Target’s API or a connector instead.',
  },
  {
    category: 'dvs',
    question: 'What is a Target 850?',
    answer:
      'An 850 is the standard X12 EDI purchase order. When people say Target 850, they mean the purchase order Target sends to a vendor. It lists the items, quantities, prices and ship-to details. For a DVS vendor, an 850 can carry a guest order to ship. Your system reads the 850, creates the order and starts the pick.',
  },
  {
    category: 'dvs',
    question: 'What are the 856 and 810 EDI documents?',
    answer:
      'The 856 is the X12 advance ship notice. It tells the buyer what shipped, in which carton and with which tracking number. The 810 is the X12 invoice, which the vendor sends to get paid. With the 850 purchase order, these three documents make up the basic order to payment loop that most vendors run with large US retailers, Target included.',
  },
  {
    category: 'dvs',
    question: 'What is EDI and why do retailers use it?',
    answer:
      'EDI stands for electronic data interchange. It is a standard format for business documents like purchase orders and invoices, sent from one system to another instead of by email or typed into a portal. Large retailers use it because it handles high order volume with fewer typing errors. Most US retailers use the ANSI X12 standard, which gives each document a number, such as 850 for a purchase order.',
  },
  {
    category: 'dvs',
    question: 'Is Target Plus EDI-only?',
    answer:
      'No. Target Plus is a marketplace, so partners connect through Target’s own API or a connector such as Shopify Marketplace Connect. EDI is how Target’s 1P vendors, including DVS vendors, trade orders and invoices. Some brands do both: they sell to Target as a vendor over EDI and list other products on Target Plus. We work out which setup you need before any build starts.',
  },
  {
    category: 'dvs',
    question: 'How does FactoryJet connect Shopify, Business Central or another ERP to Target?',
    answer:
      'We start with what Target gave you: your partner or vendor setup documents. Then we map your products, stock and orders from Shopify, Microsoft Business Central, NetSuite or another ERP to the format Target asks for. That can be Marketplace Connect, Target’s API or an EDI link through your EDI provider. Before you sign, we show the flow working on your own data.',
  },
  {
    category: 'dvs',
    question: 'Why does Target Plus require GS1 barcodes?',
    answer:
      'Target’s apply page says every product needs a GS1 barcode: a 12-digit UPC or a 13-digit EAN. Codes with 11 or 14 digits are not valid. A GS1 barcode ties each product to your company prefix, so Target can match the item to the right brand. We check your full barcode list against these rules before you apply.',
  },
  {
    category: 'dvs',
    question: 'How do inventory buffers stop cancelled orders?',
    answer:
      'A buffer holds back a few units from the stock count you send to Target. If your warehouse sells the last units on another channel before the next sync, Target still shows zero instead of taking an order you cannot ship. We set buffers per product, based on how fast each item sells, and sync stock often enough that the buffer stays small.',
  },

  // Logistics & Returns
  {
    category: 'operations',
    question: 'What are the shipping rules on Target Plus?',
    answer:
      'Target’s apply page lists small-parcel, direct-to-consumer shipping with a 24-hour lead time, and delivery within 2 to 5 business days after shipping. You ship with UPS, USPS or FedEx, from the US only, with no international shipping. You also cannot use a competitor’s fulfillment service, so stock held in another retailer’s fulfillment program cannot fill these orders.',
  },
  {
    category: 'operations',
    question: 'Can we use our existing 3PL for Target Plus orders?',
    answer:
      'Usually yes, if the 3PL meets Target’s rules. It must ship from the US with UPS, USPS or FedEx inside the 24-hour lead time, and it cannot be a competitor’s fulfillment service. It also needs to receive returns, including palletized returns from a semi-truck. We connect the 3PL’s warehouse system so orders and tracking numbers move without manual entry.',
  },
  {
    category: 'operations',
    question: 'How are returns handled for Target Plus orders?',
    answer:
      'Target’s apply page says partners must be able to receive returns at a business location, both single parcels and palletized returns delivered by semi-truck. That means you need a dock, or a 3PL that can take pallets. Ask Target about its current guest return options for marketplace items, because those terms sit in the partner agreement, not on a public page.',
  },
  {
    category: 'operations',
    question: 'How long does Target Plus onboarding take?',
    answer:
      'Target’s apply page gives a 70-day onboarding timeline. Inventory must be in place and trainings done by day 45. Target’s partner support calls run 8am to 5pm Central time, in English. Our integration work fits inside that window, so get your product data, barcodes and warehouse setup ready before Target starts the clock.',
  },

  // Terms & Pricing
  {
    category: 'commercials',
    question: 'What commission does Target Plus charge?',
    answer:
      'Target does not publish Target Plus commission rates. They are set in the partner agreement Target sends to accepted brands. Be careful with any fixed percentage you read online. Ask Target for the current terms in writing, then compare them with Amazon and Walmart fees on your own products before you decide.',
  },
  {
    category: 'commercials',
    question: 'Is Target Plus worth it compared with Amazon and Walmart?',
    answer:
      'It depends on your margin and your operations. Amazon and Walmart are open to most sellers and publish their fees. Target Plus is invite-only, with commission set in a private agreement and strict shipping and returns rules. Brands with a clean catalog, US stock and next-day shipping are the best fit. Compare all three on your own numbers first.',
  },
  {
    category: 'commercials',
    question: 'What is FactoryJet’s pricing model for Target Plus work?',
    answer:
      'We quote a fixed price per phase in writing after scoping, for example readiness, then integration, then launch. Before you sign, we show working software on your own data. Each build includes defect cover for a stated period, and there is no monthly minimum. We never take a percentage of your sales.',
  },
  {
    category: 'commercials',
    question: 'How long does a Target integration build take?',
    answer:
      'It depends on your systems. A Shopify store using Marketplace Connect is mostly setup and product data work. A custom link from an ERP, or an EDI connection, takes longer because it needs field mapping and test orders. We give you a written timeline after scoping that fits inside Target’s 70-day onboarding window.',
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

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Target Plus Marketplace Agency & DVS Integration',
  name: 'Target Plus Marketplace Management & Growth',
  description:
    'Target Plus readiness checks, listing setup, Target DVS and EDI integration, and order and stock feeds for US brands.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and Wholesale Brands Expanding to Target' },
};

const HOW_STEPS = [
  {
    stage: 'Stage 1',
    name: 'Readiness Check & Application',
    text: 'We check your business against every prerequisite on Target’s apply page: W-9, EIN, DUNS, US shipping, carriers, GS1 barcodes, size charts and hazmat registration. Then we help you prepare the application.',
  },
  {
    stage: 'Stage 2',
    name: 'Listings, Stock & Order Integration',
    text: 'We connect Shopify or your ERP to Target through Marketplace Connect, Target’s API or an EDI link for 850, 856 and 810 documents, depending on your program.',
  },
  {
    stage: 'Stage 3',
    name: 'Test Orders & Launch',
    text: 'We run test orders, confirm tracking numbers flow back, set stock buffers and check returns handling, so you are ready inside Target’s 70-day onboarding window.',
  },
];

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Integrates & Launches Brands on Target Plus',
  description: 'Our 3-stage plan for getting a brand ready for Target Plus and Target DVS.',
  step: HOW_STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Marketplaces', item: 'https://factoryjet.com/marketplace-management' },
    { '@type': 'ListItem', position: 3, name: 'Target Plus', item: PAGE_URL },
  ],
};

// All four figures are from Target's apply page, read 22 Oct 2026.
const STATS = [
  { b: 'Invite-only', s: 'how Target Plus admits partners' },
  { b: '70 days', s: 'Target onboarding timeline' },
  { b: 'Day 45', s: 'inventory in place, trainings done' },
  { b: '2 to 5 days', s: 'delivery after shipping' },
];

const SOURCED = [
  {
    v: '70 days',
    d: 'is the onboarding timeline Target gives new Target Plus partners, with inventory in place and trainings done by day 45.',
    src: 'plus.target.com/apply (read 22 Oct 2026)',
    href: TP_APPLY,
  },
  {
    v: '24 hours',
    d: 'is the shipping lead time Target lists for small-parcel orders, with delivery 2 to 5 business days after shipping.',
    src: 'plus.target.com/apply (read 22 Oct 2026)',
    href: TP_APPLY,
  },
  {
    v: 'Dozens',
    d: 'of new, hand-picked brands joined Target Plus in summer 2026, according to Target. The marketplace stays invite-only.',
    src: 'Target, 1 July 2026 (read 22 Oct 2026)',
    href: TP_GROWTH,
  },
];

// Verbatim prerequisites from plus.target.com/apply, read 22 Oct 2026.
const REQUIREMENTS = [
  'A US-registered business with a US business address',
  'A W-9, an EIN (SSNs are not accepted) and a DUNS number',
  'Ship with UPS, USPS or FedEx',
  'Fulfill all orders from the US, with no international shipping',
  'Small-parcel direct-to-consumer shipping with a 24-hour lead time, delivered within 2 to 5 business days after shipping',
  'No use of competitor fulfillment services',
  'Able to receive individual and palletized returns from a semi-truck at a business location',
  'GS1 barcodes on every product: UPC with 12 digits or EAN with 13 digits (11 or 14 digits are invalid)',
  'Size charts in grid format for wearable products',
  'Hazmat items registered with UL WERCSmart, at the seller’s cost',
  'Support calls with Target from 8am to 5pm CST, in English',
];

const BENEFITS = [
  { i: '◈', t: 'Target DVS & EDI Order Flow', d: 'Read Target 850 purchase orders into your system, and send 856 ship notices and 810 invoices back, built to your Target vendor guide.' },
  { i: '◇', t: 'Target Plus Readiness Check', d: 'We test your business against each prerequisite on Target’s apply page before you submit, from DUNS number to GS1 barcodes.' },
  { i: '↯', t: 'Shipping Inside 24 Hours', d: 'Orders reach your warehouse or 3PL as soon as they land, and tracking numbers flow back to Target without manual entry.' },
  { i: '▤', t: 'Listing & Product Data Setup', d: 'Product titles, attributes, valid UPC or EAN codes and grid size charts for wearables, mapped to Target’s content rules.' },
  { i: '⛓', t: 'Shopify & ERP Connectors', d: 'Shopify Marketplace Connect, Target’s API, or an EDI provider link from Business Central, NetSuite or another ERP.' },
  { i: '⤢', t: 'Stock Buffers & Returns Plan', d: 'Per-product stock buffers so you never take an order you cannot ship, plus a plan for parcel and pallet returns.' },
];

export default function TargetPlusMarketplacePage() {
  return (
    <>
      <script id="tp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="tp-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
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
                  Target DVS (direct vendor ship) means you ship Target.com orders from your own warehouse or 3PL
                  straight to the guest. Target Plus partners ship their own orders too, through Target’s invite-only
                  marketplace. FactoryJet builds the order, stock and EDI links, and checks you against Target’s
                  published partner requirements.
                </p>
                <HeroInlineForm source="us_target_plus_hero" region="us" submitLabel="Get a Target Plus Scope" />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Target Plus and DVS integration diagram showing a brand’s store connected to Target.com, carriers, barcodes and returns."
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
                    { name: 'Target.com', desc: 'Marketplace' },
                    { name: 'DVS EDI Stream', desc: 'Auto Ingestion' },
                    { name: 'Shopify', desc: 'Marketplace Connect' },
                    { name: 'Returns', desc: 'Parcel + Pallet' },
                    { name: 'GS1 Barcodes', desc: 'UPC or EAN' },
                    { name: 'Carriers', desc: 'UPS · USPS · FedEx' },
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
                  <div>Direct Brands · Authorized Resellers</div>
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
            <h2 style={{ marginTop: '10px' }}>What is Target DVS, and how does Target Plus work?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Target DVS is direct vendor ship. A guest orders on Target.com, the order goes to the vendor, and the
                vendor ships it from its own warehouse or 3PL. Target’s 1P vendors on DVS trade those orders with Target
                over EDI: an 850 purchase order in, an 856 ship notice and an 810 invoice back.
              </p>
              <p>
                <a href={TP_APPLY} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus</a> is Target’s
                invite-only marketplace. Target says it looks for direct brand and authorized reseller partnerships.
                Partners list their own products, Target runs checkout, and the partner ships each order. Shopify
                merchants can apply through Marketplace Connect, under a{' '}
                <a href={TP_SHOPIFY} target="_blank" rel="noopener noreferrer" style={LINK}>June 2024 Target and Shopify partnership</a>.
                Commission terms come in Target’s partner agreement. Target does not publish them.
              </p>
              <p>
                Target lists these prerequisites on its{' '}
                <a href={TP_APPLY} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus apply page</a>{' '}
                (read 22 Oct 2026):
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                {REQUIREMENTS.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p>
                FactoryJet checks your business against that list, then connects your Shopify store or ERP to Target
                through Marketplace Connect, Target’s API or an EDI link. If you also sell on other channels, see how we
                run Amazon, Walmart and Faire together on our{' '}
                <a href="/marketplace-management" style={LINK}>marketplace management</a> page, or compare
                Target Plus with wholesale on{' '}
                <a href="/faire-wholesale-marketplace" style={LINK}>Faire</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// curated retail dynamics</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus by the numbers</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
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
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it matters</p>
            <h2 style={{ marginTop: '10px' }}>How our Target Plus engineering speeds up launch</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From the readiness check to live order and EDI flows, we handle the technical side of selling on
              Target.com.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <li className="pp-card" key={b.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{b.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{b.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{b.d}</p>
                </li>
              ))}
            </ul>
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
                  How we connect your warehouse to Target for DVS: EDI 850 purchase orders come in, EDI 856 advance
                  ship notices and 810 invoices go back, built to the vendor guide Target gives you on Partners
                  Online.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope Target Plus architecture" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <Image
                src={`${IMG}/homeware-showroom-tablet-stock-check.webp`}
                alt="A woman in a navy blazer in a homeware showroom holding a tablet that shows a simple bar chart, folded towels on the table"
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
              How Target Plus compares with Amazon and Walmart on what each marketplace publishes (read 22 Oct 2026).
              Put your own products through the{' '}
              <a href="/marketplace-fee-calculator" style={LINK}>marketplace fee calculator</a> to compare margins.
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
                    <td>Invite-only, picked by Target</td>
                    <td>Open registration</td>
                    <td>Application-based</td>
                  </tr>
                  <tr>
                    <td className="name">Published Fees</td>
                    <td>Not published; set in the partner agreement</td>
                    <td>
                      Professional plan $39.99 a month plus referral fees by category (
                      <a href="https://sell.amazon.com/pricing" target="_blank" rel="noopener noreferrer" style={LINK}>Amazon pricing</a>)
                    </td>
                    <td>
                      No setup or monthly fees; referral fees 3% to 20% by category (
                      <a href="https://marketplace.walmart.com/pricing/" target="_blank" rel="noopener noreferrer" style={LINK}>Walmart pricing</a>)
                    </td>
                  </tr>
                  <tr className="me">
                    <td className="name">Fulfillment</td>
                    <td>Partner ships from the US with UPS, USPS or FedEx; no competitor fulfillment services</td>
                    <td>FBA or seller-fulfilled</td>
                    <td>WFS or seller-fulfilled</td>
                  </tr>
                  <tr>
                    <td className="name">Shipping Lead Time</td>
                    <td>24 hours, delivered 2 to 5 business days after shipping</td>
                    <td>Set by Amazon’s seller policies</td>
                    <td>Set by Walmart’s seller policies</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Returns Requirement</td>
                    <td>Receive parcel and palletized returns at a business location</td>
                    <td>Set by Amazon’s return policies</td>
                    <td>Set by Walmart’s return policies</td>
                  </tr>
                  <tr>
                    <td className="name">Who We Work With</td>
                    <td>This page</td>
                    <td><a href="/services/amazon-agency" style={LINK}>Amazon agency</a></td>
                    <td><a href="/services/walmart-marketplace-agency" style={LINK}>Walmart agency</a></td>
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
            <ol style={{ display: 'grid', gap: '24px', marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {HOW_STEPS.map((s) => (
                <li className="pp-card" key={s.name}>
                  <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>{s.stage}</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>{s.name}</h3>
                  <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="pp-editorial" style={{ marginTop: '28px' }}>
              <p>
                Target runs its own onboarding clock once you are accepted. From the{' '}
                <a href={TP_APPLY} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus apply page</a>{' '}
                (read 22 Oct 2026):
              </p>
              <ol style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li>Apply. Target Plus is invite-only, and Target decides who joins.</li>
                <li>If accepted, start Target’s 70-day onboarding timeline.</li>
                <li>Have inventory in place and finish Target’s trainings by day 45.</li>
                <li>Work through the rest of the 70 days with Target’s partner support, on calls from 8am to 5pm CST in English.</li>
              </ol>
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
                  Let us check your catalog against Target’s requirements, review your DVS and EDI needs, and give you
                  a fixed price per phase in writing before any build starts.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_avatar-240.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
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
