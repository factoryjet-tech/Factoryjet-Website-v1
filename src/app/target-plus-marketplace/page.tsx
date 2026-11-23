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

// Target's own pages. All read on 16 Nov 2026 unless the label says otherwise.
const TP_HOME = 'https://plus.target.com/';
const TP_APPLY = 'https://plus.target.com/apply';
const TP_PROVIDERS = 'https://plus.target.com/service-providers';
const TP_GROWTH = 'https://corporate.target.com/news-features/article/2026/07/target-plus-growth';
const TP_SHOPIFY =
  'https://corporate.target.com/press/release/2024/06/target-and-shopify-partner-to-help-consumers-discover-and-shop-an-expanded-assortment-on-target-com';
const TGT_SUPPLIERS =
  'https://corporate.target.com/sustainability-governance/people-thriving-team-communities/responsible-supply-chains/suppliers';
const READ = 'read 16 Nov 2026';
const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

const PAGE_TITLE = 'Target Plus Marketplace Requirements & Setup | FactoryJet';
const PAGE_DESCRIPTION =
  'Target Plus is Target’s invite-only marketplace. Target’s seller requirements, the 70-day onboarding, the integration routes it allows, and how we help.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-11-16';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description:
      'Target Plus requirements, acceptance, the 70-day onboarding and the integration routes Target approves, with every fact sourced from Target.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Target Plus marketplace requirements and setup' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: 'Target Plus requirements, acceptance, onboarding and integration routes, sourced from Target.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA (the FAQPage schema is built from this same array)
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'approval', label: 'Joining Target Plus' },
  { key: 'tech', label: 'Integration & EDI' },
  { key: 'operations', label: 'Shipping & Returns' },
  { key: 'commercials', label: 'Fees & Working With Us' },
];

const FAQ_ITEMS = [
  // Joining Target Plus
  {
    category: 'approval',
    question: 'What is the Target Plus marketplace?',
    answer:
      'Target Plus is Target’s invite-only third-party marketplace on Target.com. Brands and authorized resellers list their own products, Target runs the checkout, and the partner ships each order from the US. Target’s seller site says each SKU has one dedicated seller, so you do not compete with other sellers on the same item, and you keep control of pricing, promotions and how your brand is shown.',
  },
  {
    category: 'approval',
    question: 'Is Target a marketplace now?',
    answer:
      'Partly. Most of what Target.com sells is still Target’s own stock. Target Plus, launched in 2019, adds third-party sellers on top. In a July 2026 article Target said it added dozens of new, hand-picked brands that summer, naming Forever 21, JanSport and JLab, and that Target Plus brands now make up more than half of its K-beauty assortment.',
  },
  {
    category: 'approval',
    question: 'What is the difference between Target and Target Plus items?',
    answer:
      'Target items are bought, stocked and shipped by Target, or shipped for Target by a vendor. Target Plus items belong to a partner brand, which holds the stock and ships the order itself. The shopper uses one Target.com checkout either way. Behind the scenes the contracts, fees and systems are different.',
  },
  {
    category: 'approval',
    question: 'How do I get invited to sell on Target Plus?',
    answer:
      'You apply on Target’s partner application form at plus.target.com/apply, and Target decides who joins. The form asks six yes-or-no prerequisite questions first: US registration and tax IDs, shipping, returns, GS1 barcodes, item-type rules and onboarding. Target says it is looking for new assortment through direct brand and authorized reseller partnerships. A product range Target.com does not already carry is the strongest thing you can bring.',
  },
  {
    category: 'approval',
    question: 'What are the Target Plus seller requirements?',
    answer:
      'From Target’s apply page: a US-registered business with a US address, a W-9, an EIN (SSNs are not accepted) and a DUNS number. You ship with UPS, USPS or FedEx, only from the US, with a 24-hour lead time and delivery in 2 to 5 business days after shipping, and you cannot use competitor fulfillment services. You also need GS1 barcodes, grid size charts for wearables, UL WERCSmart registration for hazmat items and the ability to receive pallet returns.',
  },
  {
    category: 'approval',
    question: 'What does Target look for in a Target Plus brand?',
    answer:
      'Target’s application says it wants new assortment for its guests through direct brands and authorized resellers. In its July 2026 article, Target said it focuses on brands that add something meaningful for guests and match its point of view on style, design and value. In practice, show Target the gap your products fill on Target.com, not just your sales on other marketplaces.',
  },
  {
    category: 'approval',
    question: 'Can Shopify brands sell on Target Plus?',
    answer:
      'Yes, if Target accepts them. Target and Shopify announced a partnership in June 2024, and Shopify Marketplace Connect is one of the channel partners Target lists on its service provider page. It syncs listings, orders and stock from Shopify. Acceptance is still Target’s decision, and brands that run stock in an ERP often pick a different integrator.',
  },
  {
    category: 'approval',
    question: 'Does selling on Target Plus get my products into Target stores?',
    answer:
      'Target does not publish any rule that links Target Plus sales to shelf space. Store buying runs through Target’s merchant teams as a separate process. Target’s July 2026 article describes the opposite use: Target Plus lets stores focus on what guests want to shop in person while the marketplace widens choice online. Treat it as an online channel on its own merits.',
  },

  // Integration & EDI
  {
    category: 'tech',
    question: 'How do I connect my store or ERP to Target Plus?',
    answer:
      'Target gives you two routes. Most brands use one of the channel partners on Target’s service provider page, such as Shopify Marketplace Connect, Acenda, ChannelEngine, Rithum, Zentail or Feedonomics. The other route is a direct API integration, which Target allows only for brands with their own in-house US technical team. Your ERP, store and 3PL then connect to whichever route you choose.',
  },
  {
    category: 'tech',
    question: 'Can an agency build our Target Plus API integration for us?',
    answer:
      'Not as a direct API integration. Target’s service provider page says the direct route needs a dedicated US-based in-house team, that contract or temporary developers do not qualify, and that API credentials must stay with internal employees. So an outside firm, FactoryJet included, should not hold your Target Plus API keys. What we do is connect your ERP, Shopify store and 3PL to a Target-approved channel partner, and get your product data ready for it.',
  },
  {
    category: 'tech',
    question: 'Which Target Plus integrators does Target approve?',
    answer:
      'On 16 Nov 2026 Target’s service provider page listed 12 channel partners: Acenda, Akeneo, Base.com, ChannelEngine, Feedonomics, Goflow, Mirakl Connect, Rithum, Rokt Catalog, Shopify Marketplace Connect, StoreAutomator and Zentail. Target says every partner is vetted. The list changes, so check Target’s page before you sign with one.',
  },
  {
    category: 'tech',
    question: 'How do you connect NetSuite, Business Central or another ERP to Target Plus?',
    answer:
      'Through the channel partner. Your ERP sends products, prices and stock to the integrator, and the integrator sends Target Plus orders back into the ERP. FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, and has connected a live store to QuickBooks Enterprise. For Microsoft Dynamics 365 Business Central, Microsoft publishes a Shopify connector, so Business Central to Shopify to Marketplace Connect is one route. We confirm the route on your own systems before any build.',
  },
  {
    category: 'tech',
    question: 'Is Target Plus EDI-based?',
    answer:
      'No. Target Plus partners connect through Target’s APIs, usually by way of a channel partner. EDI is how Target’s own vendors trade documents: Target’s supplier standards list the ability to use EDI to receive purchase orders. Some brands do both, selling to Target as a vendor over EDI and listing other products on Target Plus. We work out which you need before any build starts.',
  },
  {
    category: 'tech',
    question: 'What are the Target EDI requirements for vendors?',
    answer:
      'Target’s supplier standards include the ability to use EDI to receive purchase orders. The usual X12 set is the 850 purchase order, the 856 advance ship notice and the 810 invoice. Target gives each vendor the exact documents, versions and test steps during setup. We build to that guide rather than guess, and our Shopify EDI integration page covers the EDI providers we work with.',
  },
  {
    category: 'tech',
    question: 'What is Target DVS?',
    answer:
      'DVS stands for direct vendor ship. A guest orders on Target.com, the order goes to the vendor, and the vendor ships it from its own warehouse or 3PL. Target does not hold that stock. DVS is part of Target’s vendor program and runs on EDI. Target Plus partners also ship their own orders, but Target Plus is a separate marketplace program with its own contract.',
  },
  {
    category: 'tech',
    question: 'Why does Target Plus require GS1 barcodes?',
    answer:
      'Target’s apply page says every product needs a GS1 barcode on the product itself. A valid UPC has 12 digits, passes the checksum and starts with 0, 1, 6, 7, 8 or 9. A valid EAN has 13 digits, passes the checksum and starts with 1 to 9. Codes with 11 or 14 digits are invalid. We run your whole barcode list against these rules before you apply.',
  },

  // Shipping & Returns
  {
    category: 'operations',
    question: 'What are the shipping rules on Target Plus?',
    answer:
      'Target’s apply page lists small-parcel, direct-to-consumer shipping with a 24-hour lead time and delivery within 2 to 5 business days after shipping. You ship with UPS, USPS or FedEx, from the US only, with no international shipping. You cannot use a competitor’s fulfillment service, so stock held in another retailer’s fulfillment program cannot fill these orders.',
  },
  {
    category: 'operations',
    question: 'Can we use our existing 3PL for Target Plus orders?',
    answer:
      'Usually yes, if the 3PL meets Target’s rules: US shipping with UPS, USPS or FedEx inside 24 hours, no competitor fulfillment service, and the ability to receive returns, including pallets from a semi-truck. We connect the 3PL’s warehouse system to your integrator so orders and tracking numbers move without manual entry.',
  },
  {
    category: 'operations',
    question: 'How are returns handled for Target Plus orders?',
    answer:
      'Target’s apply page says partners must receive individual and palletized returns from a semi-truck at a business location. That means a loading dock, or a 3PL that can take pallets. Guest-facing return terms for marketplace items sit in the partner agreement, so ask Target for them in writing during onboarding.',
  },
  {
    category: 'operations',
    question: 'How long does Target Plus onboarding take?',
    answer:
      'Target’s apply page gives a 70-day onboarding timeline: purchasable assortment live, inventory in place by day 45, and all trainings completed. Onboarding and support calls run 8am to 5pm Central time, in English. On the integration side, Target says direct API teams typically build their feeds within 30 days, and Acenda says on Target’s page that most of its brands onboard within 30 days.',
  },

  // Fees & Working With Us
  {
    category: 'commercials',
    question: 'What does Target Plus charge sellers?',
    answer:
      'Target does not publish Target Plus commission or fees on its seller site. They come in the partner agreement Target sends to accepted brands, so treat any fixed percentage you read online with care. The costs Target does name: you pay for UL WERCSmart registration on hazmat items, and you pay your channel partner, whose pricing varies. Target’s directory describes Acenda as flat-rate and Feedonomics as flat monthly pricing.',
  },
  {
    category: 'commercials',
    question: 'Is Target Plus worth it compared with Amazon and Walmart?',
    answer:
      'It depends on your margin and operations. Amazon and Walmart are open to most sellers and publish their fees. Target Plus is invite-only, with terms in a private agreement, one seller per SKU and strict shipping and returns rules. Brands with a clean catalog, US stock and same-day dispatch fit best. Compare all three on your own numbers before you decide.',
  },
  {
    category: 'commercials',
    question: 'What does FactoryJet do for Target Plus brands?',
    answer:
      'We get you ready and connected. Before you apply, we check your business against every prerequisite on Target’s form and fix product data and barcodes. After acceptance, we help you pick a Target-approved integrator, connect your ERP, Shopify store and 3PL to it, set stock buffers and run test orders inside Target’s 70-day window. You keep your Target Plus account and credentials.',
  },
  {
    category: 'commercials',
    question: 'How does FactoryJet price Target Plus work?',
    answer:
      'We quote a fixed price per phase in writing after scoping, for example readiness, then integration, then launch. Before you sign, we show working software on your own data. Each build includes defect cover for a stated period, and there is no monthly minimum. We never take a percentage of your sales.',
  },
  {
    category: 'commercials',
    question: 'How do inventory buffers stop cancelled orders?',
    answer:
      'A buffer holds back a few units from the stock count you send to Target. If your warehouse sells the last units on another channel before the next sync, Target still shows zero instead of taking an order you cannot ship. We set buffers per product, based on how fast each item sells, and sync often enough that the buffer stays small.',
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
  serviceType: 'Target Plus marketplace readiness and integration',
  name: 'Target Plus Marketplace Setup and Integration',
  description:
    'Target Plus readiness checks against Target’s published prerequisites, product data and GS1 barcode fixes, and ERP, Shopify and 3PL connections to a Target-approved channel partner.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US brands and authorized resellers applying to or selling on Target Plus' },
};

const HOW_STEPS = [
  {
    stage: 'Before you apply',
    name: 'Readiness check and application',
    text: 'We test your business against all six prerequisite questions on Target’s form: tax IDs, carriers, 24-hour shipping, pallet returns, GS1 barcodes, size charts and hazmat registration. We fix what fails, then you apply.',
  },
  {
    stage: 'Days 1 to 30',
    name: 'Integrator choice and system links',
    text: 'You pick a Target-approved channel partner with our help. We connect your ERP, Shopify store and 3PL to it, map product attributes to Target’s rules, and set per-product stock buffers.',
  },
  {
    stage: 'Days 30 to 70',
    name: 'Test orders and launch',
    text: 'We run test orders end to end, confirm tracking numbers reach Target, and check the returns flow, so your assortment is live and inventory is in place by Target’s day-45 mark.',
  },
];

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get ready for and launch on Target Plus',
  description: 'Readiness, integration and launch steps that fit inside Target’s 70-day Target Plus onboarding timeline.',
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

// All four come from plus.target.com (home and apply pages), read 16 Nov 2026.
const STATS = [
  { b: 'Invite-only', s: 'Target picks who joins' },
  { b: '1 seller', s: 'per SKU, no SKU-level competition' },
  { b: '70 days', s: 'Target onboarding timeline' },
  { b: '24 hours', s: 'shipping lead time' },
];

const SOURCED = [
  {
    v: '12',
    d: 'channel partners on Target’s own service provider page, from Shopify Marketplace Connect to Acenda, ChannelEngine and Rithum. Each is vetted by Target.',
    src: `plus.target.com/service-providers (${READ})`,
    href: TP_PROVIDERS,
  },
  {
    v: 'Day 45',
    d: 'is when Target expects inventory in place, inside a 70-day onboarding that also needs your assortment live and trainings done.',
    src: `plus.target.com/apply (${READ})`,
    href: TP_APPLY,
  },
  {
    v: 'Over half',
    d: 'of Target’s K-beauty assortment now comes from Target Plus brands, Target said in July 2026, after adding dozens of hand-picked brands that summer.',
    src: `Target, 1 July 2026 (${READ})`,
    href: TP_GROWTH,
  },
];

// Prerequisites from plus.target.com/apply, read 16 Nov 2026.
const REQUIREMENTS = [
  'A US-registered business with a US business address',
  'A W-9, an EIN (social security numbers are not accepted) and a DUNS number',
  'Ship with UPS, USPS or FedEx',
  'Fulfill all orders from the US, with no international shipping',
  'Small-parcel direct-to-consumer shipping with a 24-hour lead time, delivered within 2 to 5 business days after shipping',
  'No use of competitor fulfillment services',
  'Able to receive individual and palletized returns from a semi-truck at a business location',
  'GS1 barcodes on the product itself: a 12-digit UPC starting 0, 1, 6, 7, 8 or 9, or a 13-digit EAN starting 1 to 9, both passing the checksum (11 or 14 digits are invalid)',
  'Size charts in grid (not image) format for wearable products',
  'Hazmat items registered with UL WERCSmart, at the seller’s cost',
  'Meet the 70-day onboarding: assortment live, inventory in place by day 45, trainings completed',
  'Onboarding and support calls from 8am to 5pm CST, in English',
];

const ACCEPTANCE_STEPS = [
  {
    t: 'Check the six prerequisites',
    d: 'Target’s form opens with six yes-or-no questions. A single “no” is worth fixing before you submit, not after.',
  },
  {
    t: 'Submit the partner application',
    d: 'Apply at plus.target.com/apply. Target says it wants new assortment through direct brand and authorized reseller partnerships.',
  },
  {
    t: 'Wait for Target’s decision',
    d: 'Target Plus is invite-only and Target decides who joins. It does not publish a response time or acceptance rate.',
  },
  {
    t: 'Talk to your Acquisition Partner',
    d: 'Target’s service provider page tells accepted brands to tell their Acquisition Partner how they plan to integrate.',
  },
  {
    t: 'Start the 70-day onboarding',
    d: 'Assortment live, inventory in place by day 45, trainings done. Your integration needs to be ready inside this window.',
  },
];

const ROUTES = [
  {
    name: 'Shopify Marketplace Connect',
    who: 'Brands whose catalog and stock live in Shopify',
    how: 'Shopify’s own app syncs listings, orders and inventory to Target Plus and other marketplaces.',
    us: 'We clean product data and attributes in Shopify, connect your ERP or 3PL to Shopify, and set buffers.',
  },
  {
    name: 'Another Target channel partner',
    who: 'Brands running stock in an ERP, a PIM or several warehouses',
    how: 'Acenda, ChannelEngine, Rithum, Zentail, Feedonomics and the other listed partners carry your feed and orders.',
    us: 'We connect NetSuite, Odoo, SAP Business One, ERPNext, QuickBooks or your custom system to the partner and test orders end to end.',
  },
  {
    name: 'Direct API integration',
    who: 'Brands with a dedicated in-house US engineering team',
    how: 'Your own staff build and run the API feeds, typically within 30 days, using Target’s staging environment.',
    us: 'Target says contract developers do not qualify, so we do not build this route. We can still prepare your product data and ERP side.',
  },
];

const BENEFITS = [
  { i: '◇', t: 'Readiness check before you apply', d: 'Every prerequisite on Target’s form tested against your business, from DUNS number and carriers to pallet returns.' },
  { i: '▤', t: 'Barcode and product data fixes', d: 'UPC and EAN checksums and starting digits validated, attributes mapped, grid size charts built for wearables.' },
  { i: '⛓', t: 'ERP and 3PL links to your integrator', d: 'Products, prices and stock flow out from your system of record; Target Plus orders flow back in without retyping.' },
  { i: '↯', t: 'Shipping inside 24 hours', d: 'Orders reach your warehouse or 3PL as they land, and tracking numbers flow back to Target automatically.' },
  { i: '⤢', t: 'Stock buffers and returns plan', d: 'Per-product buffers so you never take an order you cannot ship, plus a plan for parcel and pallet returns.' },
  { i: '◈', t: 'Target vendor EDI, if you need it', d: 'If you also sell to Target as a vendor, we build the 850, 856 and 810 flow to the guide Target gives you.' },
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
                <p className="pp-eyebrow">Target Plus marketplace</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '20ch' }}>
                  Get on the Target Plus marketplace, connected and shipping.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  Target Plus is Target’s invite-only marketplace. Approved brands and authorized resellers list
                  products on Target.com, Target runs checkout, and the partner ships each order from the US within 24
                  hours. FactoryJet gets you ready: we check your business against Target’s published requirements, fix
                  product data and GS1 barcodes, and connect your Shopify store, ERP and 3PL to a Target-approved
                  integrator.
                </p>
                <HeroInlineForm source="us_target_plus_hero" region="us" submitLabel="Get a Target Plus Scope" />
              </div>

              {/* Hero diagram: the integration path Target allows */}
              <div
                role="img"
                aria-label="Diagram: your store, ERP and 3PL connect to a Target-approved channel partner, which connects to Target Plus on Target.com."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Shopify', desc: 'Store' },
                    { name: 'ERP', desc: 'NetSuite · Odoo' },
                    { name: '3PL', desc: 'Warehouse' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" style={{ textAlign: 'center', fontFamily: 'var(--pp-mono)', color: 'var(--pp-muted)', margin: '8px 0' }}>↓ products, stock ↑ orders, tracking</div>
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
                  }}
                >
                  Target-approved channel partner
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Marketplace Connect · Acenda · ChannelEngine · Rithum
                  </small>
                </div>
                <div aria-hidden="true" style={{ textAlign: 'center', fontFamily: 'var(--pp-mono)', color: 'var(--pp-muted)', margin: '8px 0' }}>↓ ↑</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Target Plus', desc: 'Target.com' },
                    { name: 'GS1 barcodes', desc: 'UPC or EAN' },
                    { name: 'Carriers', desc: 'UPS · USPS · FedEx' },
                  ].map((ch) => (
                    <div key={ch.name} style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '13px', display: 'block', color: 'var(--pp-ink)' }}>{ch.name}</b>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Answer first ── */}
        <section className="pp-sec" style={{ paddingTop: '8px', paddingBottom: '32px' }}>
          <div className="pp-wrap pp-narrow">
            <div className="pp-card" style={{ borderLeft: '4px solid var(--pp-orange)' }}>
              <h2 style={{ fontSize: '22px' }}>How do you get on Target Plus?</h2>
              <p style={{ marginTop: '10px', color: 'var(--pp-body)' }}>
                Apply on Target’s partner form and wait for Target to invite you. Before you apply, meet Target’s
                published prerequisites: a US business with a W-9, EIN and DUNS number, US shipping within 24 hours by
                UPS, USPS or FedEx, pallet returns and GS1 barcodes. Once accepted, Target gives you a 70-day onboarding to
                connect your systems through an approved route and go live.
              </p>
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

        {/* ── Proof + next step (added 23 Nov 2026: engaged US readers had no next step until section 6).
            Every claim about the client is taken from the Sow Easy entry in src/data/case-studies/index.ts. ── */}
        <section className="pp-sec" aria-labelledby="tp-proof-title">
          <div className="pp-wrap">
            <div className="pp-herogrid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(28px,4vw,48px)', alignItems: 'start' }}>
              <div>
                <p className="pp-eyebrow">Store and ERP work we are doing now</p>
                <h2 id="tp-proof-title" style={{ margin: '12px 0 12px', maxWidth: '24ch' }}>
                  Sow Easy: a trade store that reads stock, prices and SKUs from Odoo
                </h2>
                <p className="pp-lead" style={{ maxWidth: '56ch' }}>
                  A Target Plus connection depends on one clean source for products, prices and stock. That is the
                  same problem we are solving for Sow Easy, a B2B distributor that runs its stock, pricing and product
                  data in Odoo.
                </p>
                <dl className="pp-duo" style={{ marginTop: '22px', maxWidth: '640px' }}>
                  {[
                    { t: 'What we are building', d: 'A WooCommerce trade store with product pages and trade ordering.' },
                    { t: 'Where the data lives', d: 'Odoo owns stock, pricing and SKUs. The store reads from it, so there is no second copy to drift.' },
                    { t: 'How it is tested', d: 'Product data and ordering are checked against Odoo staging before anything touches live stock.' },
                    { t: 'Status', d: 'Build in progress. Launch is still ahead, so no sales results are reported.' },
                  ].map((f) => (
                    <div key={f.t} style={{ borderTop: '1px solid var(--pp-line)', paddingTop: '12px' }}>
                      <dt style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--pp-orange-dark)', marginBottom: '6px' }}>{f.t}</dt>
                      <dd style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-ink)' }}>{f.d}</dd>
                    </div>
                  ))}
                </dl>
                <a href="/case-studies/sow-easy-distributor-portal" style={{ ...LINK, display: 'inline-block', marginTop: '20px', fontWeight: 600 }}>
                  Read the Sow Easy case study <span aria-hidden="true">→</span>
                </a>
              </div>

              <div style={{ border: '1px solid var(--pp-line)', borderTop: '4px solid var(--pp-orange)', borderRadius: '18px', background: '#fff', padding: '24px' }}>
                <p className="pp-eyebrow">Your next step</p>
                <h3 style={{ marginTop: '10px', fontSize: 'clamp(20px,2.2vw,24px)', fontWeight: 800 }}>Check if you are ready for Target Plus</h3>
                <p style={{ marginTop: '10px', fontSize: '15px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                  Tell us your store, ERP and 3PL. On a short call we check them against Target’s published requirements
                  and tell you which integration route fits.
                </p>
                <div style={{ marginTop: '18px' }}>
                  <ModalCTAButton label="Book a Target Plus readiness call" region="us" btnVariant="primary-light" />
                </div>
                <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, borderTop: '1px solid var(--pp-line)' }}>
                  {['Fixed price per phase, in writing', 'A demo on your own data before you sign', '500+ projects delivered, 97% on time'].map((t) => (
                    <li key={t} style={{ fontSize: '14px', color: 'var(--pp-ink)', padding: '10px 0', borderBottom: '1px solid var(--pp-line)' }}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Is + Requirements ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// what Target Plus is</p>
            <h2 style={{ marginTop: '10px' }}>What is the Target Plus marketplace, and what does Target require?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <a href={TP_HOME} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus</a> is the
                third-party side of Target.com. Target’s seller site makes three promises to partners: a curated
                marketplace instead of an endless aisle, one dedicated seller per SKU, and full brand control over
                presentation, assortment, pricing and promotions. Target runs the checkout and the guest relationship.
                You hold the stock and ship the order.
              </p>
              <p>
                It is not a place you sign up for. Target says Target Plus is invite-only and that it looks for new
                assortment through direct brand and authorized reseller partnerships. Shopify merchants can reach it
                through Marketplace Connect, under a{' '}
                <a href={TP_SHOPIFY} target="_blank" rel="noopener noreferrer" style={LINK}>June 2024 Target and Shopify partnership</a>.
              </p>
              <p>
                Target lists these Target Plus seller requirements on its{' '}
                <a href={TP_APPLY} target="_blank" rel="noopener noreferrer" style={LINK}>partner application</a>{' '}
                ({READ}):
              </p>
              <ol style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                {REQUIREMENTS.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
              <p>
                Two items need the most lead time to fix. Barcodes must come from GS1 itself, so codes bought from a
                reseller or 11-digit codes copied from another channel will not pass. Pallet returns need a loading dock
                or a 3PL that takes semi-truck deliveries, which a home office cannot offer.
              </p>
            </div>
          </div>
        </section>

        {/* ── How acceptance works ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how acceptance works</p>
            <h2 style={{ marginTop: '10px', maxWidth: '26ch' }}>How to sell on Target Plus: the five steps from application to launch</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              Every step below comes from Target’s own seller pages. Target does not publish an acceptance rate or a
              response time, and nobody outside Target can promise you an invite.
            </p>
            <ol className="pp-bento" style={{ marginTop: '32px', listStyle: 'none', padding: 0 }}>
              {ACCEPTANCE_STEPS.map((s, i) => (
                <li className="pp-card" key={s.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', color: 'var(--pp-orange-dark)', marginBottom: '8px' }}>Step {i + 1}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{s.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="pp-editorial" style={{ marginTop: '28px', maxWidth: '68ch' }}>
              <p>
                What gets a brand invited? Target’s{' '}
                <a href={TP_GROWTH} target="_blank" rel="noopener noreferrer" style={LINK}>July 2026 article</a>{' '}
                says it focuses on brands that add something meaningful for guests and fit its point of view on style,
                design and value. It named Forever 21, JanSport and JLab among that summer’s launches, and said Target
                Plus brands now supply more than half of its K-beauty assortment. The pattern is categories where
                Target.com is thin. Lead your application with the gap you fill.
              </p>
            </div>
          </div>
        </section>

        {/* ── Integration routes ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// integration options</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus integration: the three routes Target allows</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Target’s{' '}
              <a href={TP_PROVIDERS} target="_blank" rel="noopener noreferrer" style={LINK}>service provider page</a>{' '}
              ({READ}) lists 12 vetted channel partners and one direct API option. The direct route has a rule most
              guides skip: it needs a dedicated US-based in-house team, contract or temporary developers do not
              qualify, and API credentials must stay with your own employees.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Best for</th>
                    <th>How it works</th>
                    <th>What FactoryJet does</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTES.map((r, i) => (
                    <tr key={r.name} className={i % 2 === 0 ? 'me' : undefined}>
                      <td className="name">{r.name}</td>
                      <td>{r.who}</td>
                      <td>{r.how}</td>
                      <td>{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pp-editorial" style={{ marginTop: '28px', maxWidth: '68ch' }}>
              <p>
                The 12 channel partners Target listed: Acenda, Akeneo, Base.com, ChannelEngine, Feedonomics, Goflow,
                Mirakl Connect, Rithum, Rokt Catalog, Shopify Marketplace Connect, StoreAutomator and Zentail. Some are
                feed and listing tools, some run orders and stock too, and Akeneo is a product information system. Pick
                on what your system of record is and who will run the feed day to day.
              </p>
              <p>
                For ERP brands, the integrator is the middle layer. Your ERP sends products, prices and stock out, and
                takes Target Plus orders in. We have worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs,
                and connected a live store to QuickBooks Enterprise; see our{' '}
                <a href="/services/ecommerce-erp-integration" style={LINK}>ecommerce ERP integration</a> work. For
                Microsoft Dynamics 365 Business Central, Microsoft publishes a{' '}
                <a href="https://apps.shopify.com/dynamics-365-business-central" target="_blank" rel="noopener noreferrer" style={LINK}>Shopify connector</a>, so Business Central to
                Shopify to Marketplace Connect is one route. We confirm which one fits your systems before any build.
              </p>
            </div>
            <div style={{ marginTop: '22px' }}>
              <ModalCTAButton label="Map my Target Plus integration" region="us" btnVariant="secondary-light" />
            </div>
          </div>
        </section>

        {/* ── Fees ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// fees and costs</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus fees: what Target publishes and what it does not</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Target does not publish Target Plus commission rates or seller fees on plus.target.com. They come in the
                partner agreement Target sends to accepted brands. Percentages quoted on blogs are second-hand, so get
                the current terms from Target in writing.
              </p>
              <p>The costs Target’s own pages do name:</p>
              <ol style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li>
                  <b>UL WERCSmart registration</b> for any hazmat or environmental-safety item. Target’s apply page says
                  the seller pays all registration costs.
                </li>
                <li>
                  <b>Your channel partner.</b> Pricing varies by integrator. Target’s directory describes Acenda as
                  flat-rate with no transaction fees or long-term contracts, and Feedonomics as flat monthly pricing.
                </li>
                <li>
                  <b>GS1 barcodes</b> for every product, since Target accepts only GS1-sourced UPC or EAN codes.
                </li>
                <li>
                  <b>Fulfillment that meets the rules:</b> US-only shipping inside 24 hours and a site that can receive
                  pallet returns.
                </li>
              </ol>
              <p>
                To compare Target Plus with Amazon and Walmart on your own products, use our{' '}
                <a href="/marketplace-fee-calculator" style={LINK}>marketplace fee calculator</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// from Target’s own pages</p>
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
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we do</p>
            <h2 style={{ marginTop: '10px' }}>Six things we handle so your Target Plus launch fits the 70 days</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              We design, build and support the systems side. You keep your Target Plus account, your integrator
              contract and your credentials.
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

        {/* ── Target EDI and DVS ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// Target EDI and DVS</p>
                <h2 style={{ marginTop: '8px' }}>Target EDI requirements are for vendors, not Target Plus sellers</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Target Plus runs on Target’s APIs through a channel partner. EDI belongs to Target’s vendor program:
                  Target’s{' '}
                  <a href={TGT_SUPPLIERS} target="_blank" rel="noopener noreferrer" style={LINK}>supplier standards</a>{' '}
                  list the ability to use EDI to receive purchase orders. That includes DVS (direct vendor ship), where
                  a vendor ships Target.com orders from its own warehouse.
                </p>
                <p style={{ marginTop: '12px', color: 'var(--pp-body)' }}>
                  If you sell to Target as a vendor too, we build the usual X12 loop to the guide Target gives you: the
                  850 purchase order in, the 856 ship notice and 810 invoice back, landing in your ERP. Our{' '}
                  <a href="/services/shopify-edi-integration" style={LINK}>Shopify EDI integration</a> page covers the
                  EDI providers we connect.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Scope Target EDI or Target Plus" region="us" btnVariant="secondary-light" />
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
            <p className="pp-mlabel">// side by side</p>
            <h2 style={{ marginTop: '10px' }}>Target Plus vs. Amazon and Walmart marketplaces</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              What each marketplace publishes, {READ}.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>What you need to know</th>
                    <th>Target Plus</th>
                    <th>Amazon</th>
                    <th>Walmart Marketplace</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">How sellers get in</td>
                    <td>Invite-only, picked by Target</td>
                    <td>Open registration</td>
                    <td>Application-based</td>
                  </tr>
                  <tr>
                    <td className="name">Published fees</td>
                    <td>Not published; set in the partner agreement</td>
                    <td>
                      Professional plan $39.99 a month plus referral fees by category (
                      <a href="https://sell.amazon.com/pricing" target="_blank" rel="noopener noreferrer" style={LINK}>Amazon pricing</a>)
                    </td>
                    <td>
                      No setup or monthly fees; referral fees vary by category (
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
                    <td className="name">Shipping lead time</td>
                    <td>24 hours, delivered 2 to 5 business days after shipping</td>
                    <td>Set by Amazon’s seller policies</td>
                    <td>Set by Walmart’s seller policies</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Returns</td>
                    <td>Receive parcel and palletized returns at a business location</td>
                    <td>Set by Amazon’s return policies</td>
                    <td>Set by Walmart’s return policies</td>
                  </tr>
                  <tr>
                    <td className="name">Our page for it</td>
                    <td>This page</td>
                    <td><a href="/services/amazon-agency" style={LINK}>Amazon agency</a></td>
                    <td><a href="/services/walmart-marketplace-agency" style={LINK}>Walmart agency</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '18px', color: 'var(--pp-body)', maxWidth: '68ch' }}>
              Running Target Plus beside other channels? See how we run Amazon, Walmart and Faire together on our{' '}
              <a href="/marketplace-management" style={LINK}>marketplace management</a> page, or compare it with
              wholesale on <a href="/faire-wholesale-marketplace" style={LINK}>Faire</a>.
            </p>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// timeline</p>
            <h2 style={{ marginTop: '10px' }}>A Target Plus launch plan that fits Target’s 70 days</h2>
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
                Two dates come from Target, not from us. The{' '}
                <a href={TP_APPLY} target="_blank" rel="noopener noreferrer" style={LINK}>apply page</a> sets the
                70-day onboarding with inventory in place by day 45. The{' '}
                <a href={TP_PROVIDERS} target="_blank" rel="noopener noreferrer" style={LINK}>service provider page</a>{' '}
                says direct API teams typically build their feeds within 30 days, and Acenda states there that most of
                its brands onboard within 30 days. Readiness work happens before you apply, so it does not eat into
                Target’s clock.
              </p>
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
                headline="Target Plus marketplace questions, answered"
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
                <p className="pp-mlabel">// start with a readiness check</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to apply to Target Plus?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  We check your business against Target’s requirements, map the integration route that fits your
                  systems, and give you a fixed price per phase in writing before any build starts.
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
