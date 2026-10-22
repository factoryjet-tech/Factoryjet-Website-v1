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
const PAGE_URL = 'https://factoryjet.com/faire-wholesale-marketplace';
// Faire's current brand terms page. Full text read 22 Oct 2026 from Faire's published PDF
// (https://cdn.faire.com/Brand-TOS-July-5-2023-English-version-2.pdf). Re-read before changing a fee.
const FAIRE_TERMS = 'https://www.faire.com/tos-brand';
const FAIRE_HOME = 'https://www.faire.com/';
const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

const PAGE_TITLE = 'Faire Wholesale B2B Agency: Fees and ERP Sync | FactoryJet';
const PAGE_DESCRIPTION =
  'Faire charges 15% plus a $10 new customer fee on opening orders, 15% on reorders and 0% on Faire Direct. We connect Shopify or your ERP to Faire.';

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Faire Wholesale B2B Agency: Fees and ERP Sync | FactoryJet',
    description:
      'What Faire charges brands, how selling on Faire works, and how to connect Shopify or your ERP to Faire wholesale.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Faire Wholesale Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faire Wholesale B2B Agency | FactoryJet',
    description: 'What Faire charges brands, and how to connect Shopify or your ERP to Faire wholesale.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
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
    question: 'How much does it cost to sell on Faire?',
    answer:
      'Under Faire’s brand terms, an opening order (the first order from a new retailer) costs 15% of the order subtotal plus a $10 new customer fee. Reorders from that retailer cost 15%. Qualified Faire Direct orders, from retailers you bring yourself, carry 0% commission. Faire also charges a payment processing fee. Terms change, so check the current commission in your Faire Brand Portal before you set prices.',
  },
  {
    category: 'basics',
    question: 'What is Faire Wholesale and how does it work for brands?',
    answer:
      'Faire is an online wholesale marketplace that connects brands with independent retailers in North America and Europe. Retailers browse brand catalogs and place orders. Faire gives retailers invoices due in 60 days, interest-free, and lets them return first orders to Faire at no cost. The brand ships each order, and Faire pays the brand after taking its commission and fees.',
  },
  {
    category: 'basics',
    question: 'Why is Faire so expensive?',
    answer:
      'The 15% commission pays for what Faire gives both sides: 60-day interest-free invoices for retailers, free returns of first orders to Faire, and a marketplace where new shops can find you. The extra $10 fee applies only to the first order from each new retailer. To lower your cost, move retailers you already sell to onto Faire Direct, where qualified orders carry 0% commission.',
  },
  {
    category: 'basics',
    question: 'How does Faire differ from selling on Amazon or direct to consumers?',
    answer:
      'Faire is business-to-business. Buyers are retailers, such as boutiques, gift shops and specialty stores, buying stock to resell, often in case packs with order minimums. Amazon and your own store sell to consumers one unit at a time. On Faire the goal is a retailer who reorders every season, so a steady base of repeat accounts matters more than one big sale.',
  },
  {
    category: 'basics',
    question: 'Is Faire a B2B marketplace?',
    answer:
      'Yes. Faire is a B2B wholesale marketplace. Brands list wholesale and suggested retail prices, and retailers buy to resell in their own stores. Faire sits between the two: it gives the retailer payment terms and pays the brand, so the brand does not chase unpaid invoices. That is why buyers search for it as a Faire B2B platform.',
  },
  {
    category: 'basics',
    question: 'Can any brand sell on Faire?',
    answer:
      'Brands apply to Faire, and Faire reviews each application. Strong applications have retail-ready packaging, clear wholesale and retail prices, good product photos and a catalog that fits independent shops. We help brands get the catalog, pricing and product data ready before they apply, so the brand portal is complete on day one.',
  },
  {
    category: 'basics',
    question: 'Can you buy from Faire without a business?',
    answer:
      'Faire is built for retailers buying stock to resell. Retailers sign up with business details, and Faire uses them to decide who can order at wholesale prices. If you are a shopper, buy from the brand’s own store or from a shop that carries it. For brands this is a plus, because wholesale prices stay with real retailers.',
  },
  {
    category: 'basics',
    question: 'Which wholesale platform has the most active retail buyers?',
    answer:
      'No wholesale platform publishes audited buyer counts that you can compare side by side, so be careful with any ranking you read. Compare platforms on fit instead: which retailers in your category use them, what each one charges, the payment terms and how orders reach your systems. Faire is a common choice for independent shops. Our Faire alternatives page compares the other options.',
  },

  // Integration & ERP
  {
    category: 'sync',
    question: 'How does Shopify or ERP integration with Faire work?',
    answer:
      'We connect your store or ERP to Faire through Faire’s integrations or its API. Products, wholesale prices, case packs and stock levels stay in step with Faire. New Faire orders land in your order system or 3PL for picking, and tracking numbers flow back. Before you sign, we show the sync working on your own catalog.',
  },
  {
    category: 'sync',
    question: 'Can Faire connect to our ERP?',
    answer:
      'Yes. We link Faire to ERPs such as NetSuite, SAP Business One or Odoo through Faire’s API or a connector. Faire orders come into the ERP as sales orders, stock counts go back to Faire, and payouts can be matched in your accounts. The exact build depends on your ERP and on how you track wholesale stock against direct sales.',
  },
  {
    category: 'sync',
    question: 'How do you prevent stockouts between direct sales and wholesale orders?',
    answer:
      'We set stock allocation rules and safety buffers across channels. When a large Faire order comes in, the stock shown on your own store and other marketplaces drops right away to reflect the units now reserved. That way two channels never sell the same last units, and you do not have to cancel a retailer’s order.',
  },
  {
    category: 'sync',
    question: 'Can we set custom case packs and order minimums?',
    answer:
      'Yes. Faire’s Brand Portal has settings for order minimums and case pack sizes, so retailers buy in the quantities you choose instead of single units. We set the minimums and pack sizes in Faire and in your own system, so the two always match and your warehouse picks the right quantity.',
  },
  {
    category: 'sync',
    question: 'How are shipping labels and logistics handled on Faire?',
    answer:
      'Brands can buy shipping labels through Faire or ship with their own carrier accounts and 3PL. Faire sets the current shipping options and any reimbursement rules, so check them in your Brand Portal. We pick the option that fits your product sizes and warehouse, and connect tracking so retailers can see where their order is.',
  },

  // Margins & Terms
  {
    category: 'pricing',
    question: 'How do 60-day terms work without cash flow risk for the brand?',
    answer:
      'Faire gives retailers invoices due in 60 days, interest-free. The retailer pays Faire, not you. Faire pays the brand on its own payout schedule, shown in your Brand Portal. Faire also charges a payment processing fee. Check the current rate and payout options in your Brand Portal, because Faire sets and changes them.',
  },
  {
    category: 'pricing',
    question: 'What percentage should I take off retail for my wholesale price?',
    answer:
      'Many brands use keystone pricing: the wholesale price is half the suggested retail price, so a $20 retail item sells to shops at $10. That leaves the retailer room for their margin. Before you copy that, start from your cost per unit, then take off Faire’s 15% commission, its fees and your shipping. If the numbers fail at half of retail, change the price or the pack size.',
  },
  {
    category: 'pricing',
    question: 'How do you protect MAP pricing and stop retail price erosion?',
    answer:
      'We help you write a minimum advertised price (MAP) policy and share it with the retailers who carry you. A MAP policy sets the lowest price a retailer can advertise your product at. We also check where your products appear online, so you can follow up with any retailer who breaks the policy before it spreads.',
  },
  {
    category: 'pricing',
    question: 'What is Faire Direct?',
    answer:
      'Faire Direct is Faire’s program for retailers you bring yourself. You send a retailer your Faire Direct link, they order through Faire, and qualified Faire Direct orders carry 0% commission under Faire’s brand terms. The retailer still gets Faire’s payment terms. It is the cheapest way to move your existing wholesale accounts onto Faire.',
  },

  // B2B Scaling
  {
    category: 'growth',
    question: 'How do you rank higher in Faire marketplace search results?',
    answer:
      'Faire does not publish its ranking formula. What you can control is complete product data, clear photos, short lead times, few cancelled orders, quick replies to retailers and a steady reorder rate. We fix catalog data first, then track those operating numbers every week, so one slow shipping week does not drag your listing down.',
  },
  {
    category: 'growth',
    question: 'What is a Top Shop badge on Faire?',
    answer:
      'Top Shop is a badge Faire gives to some brands. Faire sets the criteria and can change them, so check the current rules in your Brand Portal instead of trusting a number you read online. The same habits help either way: ship on time, answer retailers fast and keep orders from being cancelled.',
  },
  {
    category: 'growth',
    question: 'How do you turn one-time boutique buyers into reordering accounts?',
    answer:
      'We set up B2B follow-ups that match how retailers buy: new season catalog alerts, restock reminders timed to how fast your products sell in shops, and Faire Direct invites for retailers who first found you elsewhere. Each message goes to the buyer at the shop, not a general inbox, and stops once they reorder.',
  },
  {
    category: 'growth',
    question: 'Can we sell wholesale in the UK and Europe on Faire?',
    answer:
      'Yes. Faire serves retailers in Europe and the UK as well as North America. Fees and terms for brands outside North America can differ, so check your Brand Portal for the rates that apply to you. We set up price lists in local currency, write product details for each market and plan shipping and customs paperwork for cross-border orders.',
  },
  {
    category: 'growth',
    question: 'Are you a Faire agency or Faire growth agency?',
    answer:
      'Yes. We set up and run the technical side of Faire for brands: catalog and pricing setup, Shopify or ERP sync, order routing, Faire Direct onboarding for your existing retailers and reorder follow-ups. Ongoing help is an option you pick, with no monthly minimum. Every build is a fixed price per phase, quoted in writing after scoping.',
  },
  {
    category: 'growth',
    question: 'How long does a Faire integration take?',
    answer:
      'It depends on your catalog size and your systems. A Shopify store with a clean catalog is mostly setup and data work. An ERP link with custom case packs and pricing rules takes longer, because it needs field mapping and test orders. We give you a written timeline after scoping, and you see a working demo on your own data before you sign.',
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
  serviceType: 'Faire Wholesale Marketplace Agency & B2B Integration',
  name: 'Faire Wholesale B2B Marketplace Management & Growth',
  description:
    'Faire wholesale setup and management, Shopify and ERP catalog sync, order routing, Faire Direct onboarding and B2B reorder follow-ups.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and B2B Brands Expanding to Wholesale' },
};

const HOW_STEPS = [
  {
    stage: 'Stage 1',
    name: 'Catalog Architecture & Case Pack Structuring',
    text: 'We set wholesale pricing, case pack quantities, order minimums and product attributes to match Faire’s categories.',
  },
  {
    stage: 'Stage 2',
    name: 'Direct API & Webhook Integration',
    text: 'We build live connectors between Faire, Shopify and your ERP, so stock drops the moment an order lands and tracking numbers sync on their own.',
  },
  {
    stage: 'Stage 3',
    name: 'Faire Direct Launch & Reorder Follow-ups',
    text: 'We turn on your Faire Direct link for existing retailers, plan your next Faire Markets event and set up reorder follow-ups for new accounts.',
  },
];

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Launches & Automates Faire Wholesale Operations',
  description: 'Our 3-stage plan for launching and running wholesale on Faire.',
  step: HOW_STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Marketplaces', item: 'https://factoryjet.com/marketplace-management' },
    { '@type': 'ListItem', position: 3, name: 'Faire Wholesale', item: PAGE_URL },
  ],
};

// Fee figures: Faire brand terms, read 22 Oct 2026. Retailer terms: faire.com, read 22 Oct 2026.
const STATS = [
  { b: '15% + $10', s: 'Faire fee on an opening order' },
  { b: '15%', s: 'Faire commission on reorders' },
  { b: '0% Commission', s: 'on qualified Faire Direct orders' },
  { b: '60-Day Terms', s: 'interest-free invoices for retailers' },
];

const SOURCED = [
  {
    v: '15% + $10',
    d: 'on an opening order: 15% of the order subtotal plus a $10 new customer fee on the first order from each new retailer.',
    src: 'Faire brand terms (read 22 Oct 2026)',
    href: FAIRE_TERMS,
  },
  {
    v: '0%',
    d: 'commission on qualified Faire Direct orders, which come from retailers you bring to Faire yourself. Reorders on the marketplace stay at 15%.',
    src: 'Faire brand terms (read 22 Oct 2026)',
    href: FAIRE_TERMS,
  },
  {
    v: '60 days',
    d: 'for retailers to pay, interest-free. Retailers can also return first orders to Faire at no cost to them.',
    src: 'faire.com (read 22 Oct 2026)',
    href: FAIRE_HOME,
  },
];

const BENEFITS = [
  { i: '◈', t: 'Automated Catalog & Inventory Sync', d: 'No more manual CSV uploads. Product changes in Shopify or your ERP sync to Faire, with stock buffers so you never oversell.' },
  { i: '◇', t: 'Faire Direct 0% Commission Funnel', d: 'Bring existing retail accounts and trade show leads in through your Faire Direct link, so qualified orders carry 0% commission.' },
  { i: '↯', t: 'Operating Numbers, Tracked Weekly', d: 'We track lead times, cancellations and reply times, the numbers retailers see, and flag a slip before it shows on your listing.' },
  { i: '▤', t: 'B2B Case Packs & Order Minimums', d: 'Set case packs, opening minimums and volume breaks that lift the size of each boutique order without scaring off new shops.' },
  { i: '⛓', t: 'Faire Market & Promotion Planning', d: 'Plan products, promotions and retailer emails around Faire Markets events, so new shops see your best lines first.' },
  { i: '⤢', t: 'Cross-Border UK & European Expansion', d: 'Sell to independent retailers in the UK and Europe, with price lists in local currency and shipping paperwork planned up front.' },
];

const USECASES = [
  {
    t: 'Direct Shopify Plus & ERP Wholesale Synchronization',
    d: 'How we connect your main ecommerce catalog to Faire’s brand portal with stock buffers, custom case packs and automatic order intake.',
    img: 'faire-brand-portal-catalog.webp',
  },
  {
    t: 'Boutique Acquisition & 0% Commission Faire Direct Funnels',
    d: 'Your sales team gets Faire Direct links, so qualified orders from the retailers they bring in carry 0% commission.',
    img: 'faire-wholesale-boutique-sync.webp',
  },
];

export default function FaireWholesaleMarketplacePage() {
  return (
    <>
      <script id="faire-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="faire-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
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
                  Sell wholesale to <span className="pp-grad">independent retailers on Faire.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Selling on Faire costs 15% plus a $10 new customer fee on an opening order, 15% on reorders and 0% on
                  qualified Faire Direct orders, per{' '}
                  <a href={FAIRE_TERMS} target="_blank" rel="noopener noreferrer" style={LINK}>Faire’s brand terms</a>{' '}
                  (read 22 Oct 2026). Faire also charges a payment processing fee. FactoryJet connects Shopify or your ERP
                  to Faire so wholesale orders flow in on their own.
                </p>
                <HeroInlineForm source="us_faire_wholesale_hero" region="us" submitLabel="Get a Faire Wholesale Scope" trustText="Want us to run Faire for you each month instead of a one-time build? Ask, and we will scope it. Founder replies within 24 hours." />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Faire Wholesale B2B architecture diagram showing Shopify/ERP connected to retail buyers on Faire."
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
                    Shopify Plus / ERP Master Sync · Case Packs · 60-Day Terms
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Faire Retailers', desc: 'Independent Stores' },
                    { name: 'Opening Orders', desc: '15% + $10' },
                    { name: 'Faire Direct', desc: '0% Commission' },
                    { name: 'ERP Ingestion', desc: 'Automated 3PL' },
                    { name: '60-Day Terms', desc: 'For Retailers' },
                    { name: 'Faire Markets', desc: 'Trade Events' },
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
                    gap: '12px',
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
                Faire Wholesale marketplace management is the setup and daily running of a brand’s presence on Faire, an
                online wholesale marketplace where independent retailers buy stock from brands.
              </p>
              <p>How selling on Faire works:</p>
              <ol style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li>You apply as a brand, and Faire reviews your application.</li>
                <li>You list products with wholesale prices, suggested retail prices, case packs and order minimums.</li>
                <li>A retailer finds you on the marketplace, or through your Faire Direct link, and places an order.</li>
                <li>Faire gives the retailer an invoice due in 60 days, interest-free.</li>
                <li>You ship the order from your warehouse or 3PL and add tracking.</li>
                <li>Faire pays you, minus its commission and payment processing fee.</li>
                <li>The retailer reorders. Reorders cost 15%, or 0% if they qualify as Faire Direct orders.</li>
              </ol>
              <p>
                Done by hand, with spreadsheet uploads and retyped orders, this creates stockouts and late shipments.
                FactoryJet builds connectors between your store or ERP and Faire, sets case pack rules, cleans up
                catalog data and moves your existing retailers onto Faire Direct.
              </p>
              <p>
                Faire is one of several wholesale channels. If you are weighing other options, read our comparison of{' '}
                <a href="/faire-alternatives" style={LINK}>Faire alternatives</a>. If you also sell on retail
                marketplaces, see{' '}
                <a href="/target-plus-marketplace" style={LINK}>Target Plus</a> and our{' '}
                <a href="/marketplace-management" style={LINK}>marketplace management</a> service, which runs Faire next
                to Amazon and Walmart.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// faire fees, read 22 oct 2026</p>
            <h2 style={{ marginTop: '10px' }}>What Faire charges a brand</h2>
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
            <div className="pp-editorial" style={{ marginTop: '28px', maxWidth: '68ch' }}>
              <p>
                What Faire charges, from{' '}
                <a href={FAIRE_TERMS} target="_blank" rel="noopener noreferrer" style={LINK}>Faire’s brand terms</a>{' '}
                (read 22 Oct 2026):
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li>Opening order (the first order from a retailer): 15% of the order subtotal plus a $10 new customer fee.</li>
                <li>Reorders from that retailer: 15%.</li>
                <li>Qualified Faire Direct orders: 0% commission.</li>
                <li>A payment processing fee on orders. Faire sets the rate; check it in your Brand Portal.</li>
              </ul>
              <p>
                Terms change, so check the commission in your Faire Brand Portal before you set wholesale prices. To
                compare Faire’s cut with Amazon, Walmart and other channels on your own products, use our{' '}
                <a href="/marketplace-fee-calculator" style={LINK}>marketplace fee calculator</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// wholesale growth levers</p>
            <h2 style={{ marginTop: '10px' }}>How we scale your Faire Wholesale business</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From catalog mapping to warehouse routing and Faire Markets planning, we handle the technical and
              day-to-day work.
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
              Why growing brands replace manual CSV work with connected B2B marketplace systems.
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
                    <td>Two-way sync of stock and orders</td>
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
                    <td>Set onboarding steps for every existing retailer</td>
                    <td>Inconsistent manual invites</td>
                    <td>Basic ad traffic only</td>
                  </tr>
                  <tr>
                    <td className="name">Lead Times &amp; Cancellations</td>
                    <td>Tracked weekly, with alerts on slips</td>
                    <td>Prone to lead-time slip</td>
                    <td>No operational support</td>
                  </tr>
                  <tr className="me">
                    <td className="name">International Expansion</td>
                    <td>Local currency price lists and customs paperwork planned</td>
                    <td>Manual customs paperwork</td>
                    <td>Often US only</td>
                  </tr>
                  <tr>
                    <td className="name">Fee Structure</td>
                    <td>Fixed price per phase, no cut of your sales</td>
                    <td>Internal headcount salary</td>
                    <td>Often a retainer or a share of sales</td>
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
            <ol style={{ display: 'grid', gap: '24px', marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {HOW_STEPS.map((s) => (
                <li className="pp-card" key={s.name}>
                  <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>{s.stage}</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>{s.name}</h3>
                  <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// client proof</p>
            <h2 style={{ marginTop: '10px' }}>Founders we have built stores for</h2>
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
                <h2 style={{ margin: '12px 0 16px' }}>Get your brand selling to independent retailers on Faire.</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us review your wholesale pricing and your ERP setup, then give you a fixed price per phase in
                  writing before any build starts.
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
