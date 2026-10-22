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

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

const PAGE_URL = 'https://factoryjet.com/marketplace-fee-calculator';
const PAGE_TITLE = 'Marketplace Fee Calculator: Amazon, WFS, Faire | FactoryJet';
const PAGE_DESCRIPTION =
  'Free marketplace fee calculator. Compare profit per unit on Amazon, Walmart WFS, Target Plus, Faire and Shopify, with each fee sourced as of 22 Oct 2026.';

/* Primary sources for every fee on this page (all read 22 Oct 2026). */
const SRC = {
  amazon: 'https://sell.amazon.com/pricing',
  fba: 'https://sell.amazon.com/fulfillment-by-amazon',
  walmart: 'https://marketplace.walmart.com/pricing/',
  wfs: 'https://marketplace.walmart.com/walmart-fulfillment-services/',
  wfsFees: 'https://marketplacelearn.walmart.com/guides/Walmart%20Fulfillment%20Services%20(WFS)/WFS%20basics/WFS-fees',
  wfsCalc: 'https://marketplacelearn.walmart.com/guides/Shipping%20&%20fulfillment/Walmart%20Fulfillment%20Services%20(WFS)/WFS-fees-calculator',
  target: 'https://plus.target.com/',
  targetApply: 'https://plus.target.com/apply',
  faire: 'https://www.faire.com/tos-brand',
  ebay: 'https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822',
  shopify: 'https://www.shopify.com/blog/ecommerce-website-cost',
};

const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Marketplace Fee & Margin Calculator | FactoryJet',
    description:
      'Compare referral fees and fulfillment costs on Amazon, Walmart WFS, Target Plus, Faire and Shopify, with each fee linked to the marketplace’s own page.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Marketplace Fee Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketplace Fee & Margin Calculator | FactoryJet',
    description: 'Model profit per unit across Amazon, Walmart WFS, Target Plus, Faire and Shopify.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
   Fee figures below come from the sources in SRC, read 22 Oct 2026.
   FAQ answers are plain strings, so the links sit in the body copy.
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'fees', label: 'Fees & Rates' },
  { key: 'walmart', label: 'Walmart & WFS' },
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
      'As of 22 Oct 2026, Amazon and Walmart both take a 15% referral fee in many categories, with lower rates in some, such as 8% for consumer electronics. Amazon also charges $39.99 a month on its Professional plan. Walmart has no setup or monthly fee. Faire takes 15% of wholesale orders, plus a $10 new customer fee on a retailer’s first order. Target Plus does not publish its commission. Terms come in its partner agreement.',
  },
  {
    category: 'fees',
    question: 'How much does Faire charge brands?',
    answer:
      'Under Faire’s brand terms, the first order from a new retailer costs 15% of the order subtotal plus a $10 new customer fee. Reorders cost 15%. Qualified Faire Direct orders, where you bring the retailer to Faire yourself, cost 0%. Faire also charges a payment processing fee. Terms change, so check the current commission in your Faire Brand Portal before you set wholesale prices.',
  },
  {
    category: 'fees',
    question: 'How much does eBay charge sellers?',
    answer:
      'As of 22 Oct 2026, eBay’s final value fee is 13.6% of the sale for most categories, up to $7,500, and 2.35% on the part above that. eBay adds a per-order fee of $0.30 on orders of $10 or less and $0.40 on larger orders. You get 250 free listings a month. After that, each listing costs $0.35.',
  },
  {
    category: 'fees',
    question: 'What hidden marketplace costs do brands frequently overlook?',
    answer:
      'The referral fee is only part of the bill. Brands often miss FBA storage and aged inventory fees, WFS peak-season storage, return shipping and handling, the ad spend needed to hold search rank, payment processing on Faire and on their own store, and Faire’s $10 new customer fee on each first order. Add each one to the model before you price a SKU for a new channel.',
  },
  {
    category: 'fees',
    question: 'Are there monthly recurring subscription fees on each marketplace?',
    answer:
      'Amazon charges $39.99 a month for a Professional account, or $0.99 per item sold on the Individual plan. Walmart says it has no setup, monthly or hidden fees. Faire earns through commission on orders. Target Plus sets terms in its partner agreement. Your own Shopify store costs $29 to $299 a month on yearly billing, or $2,300 a month for Shopify Plus on a three-year term.',
  },
  {
    category: 'fees',
    question: 'How do payment processing fees differ on marketplaces vs DTC stores?',
    answer:
      'On Amazon and Walmart, the referral fee is the main per-sale charge listed on their pricing pages. Faire adds a separate payment processing fee on top of its commission. On your own Shopify store, you pay the card rate for your plan, which Shopify lists on its pricing page. That rate changes with your plan, so check it again whenever you switch plans.',
  },
  {
    category: 'fees',
    question: 'How do I evaluate marketplace fees for my products?',
    answer:
      'Start with one SKU. Find its category on each marketplace’s fee page and note the referral rate at your price. Add the fulfillment fee for its packed weight and size, then monthly storage. Add returns and the ad spend you expect per sale. Subtract all of it, plus product cost, from the selling price. Repeat for your top ten SKUs before you commit stock to a new channel.',
  },

  // Walmart & WFS
  {
    category: 'walmart',
    question: 'What is Walmart WFS?',
    answer:
      'Walmart Fulfillment Services (WFS) is Walmart’s fulfillment program for Marketplace sellers. You send stock to Walmart’s warehouses, and Walmart stores, packs and ships your orders. Walmart says WFS has no setup or monthly fees. You pay a fulfillment fee per unit, starting at $3.45 for items of 1 lb or less, plus storage of $0.75 per cubic foot per month from January to September.',
  },
  {
    category: 'walmart',
    question: 'How do I calculate WFS cost for a product?',
    answer:
      'Weigh and measure the item as packed. Enter those numbers in Walmart’s WFS fee calculator to get the fulfillment fee per unit, which starts at $3.45 for 1 lb or less. Work out the cubic feet you will store, then multiply by $0.75 per month, or more for stock held over 30 days in October to December. Add the referral fee for your category. That total is your WFS cost per unit.',
  },
  {
    category: 'walmart',
    question: 'How is this calculator different from Walmart’s WFS cost estimator?',
    answer:
      'Walmart’s estimator gives the official WFS fee for one item from its weight and size. Our calculator compares five channels side by side from your price, product cost, monthly units, category and weight band. It uses planning rates, so it shows which channel earns more per unit, not your exact Walmart invoice. Use ours to pick channels, then confirm the WFS fee in Walmart’s estimator.',
  },
  {
    category: 'walmart',
    question: 'What are Walmart seller fees?',
    answer:
      'Walmart Marketplace charges a referral fee on each sale and no setup or monthly fee, per its pricing page as of 22 Oct 2026. Many categories pay 15%. Consumer electronics pays 8%. Apparel pays 5% up to $15, 10% from $15 to $20, and 15% above $20. Rates run from 3% to 20% across categories. WFS fulfillment and storage are extra if you use them.',
  },
  {
    category: 'walmart',
    question: 'How do I calculate Walmart seller profit?',
    answer:
      'Profit per unit is your selling price minus product cost, the referral fee, the WFS or shipping cost, storage, returns and ad spend. Enter your price, product cost, monthly units, category and weight band in the calculator above. It shows profit per unit and per month next to Amazon, Target Plus, Faire and Shopify. Then check the exact WFS fee in Walmart’s own calculator.',
  },
  {
    category: 'walmart',
    question: 'How much does the average Walmart seller make?',
    answer:
      'Walmart does not publish average seller earnings, and we will not guess at one. Earnings depend on your category, price, packed weight, ad spend and how many units you sell. The useful number is your own profit per unit. Run your SKUs through the calculator above, then multiply by the monthly volume you expect to see a realistic figure for your business.',
  },
  {
    category: 'walmart',
    question: 'Is it worth it to sell on Walmart Marketplace?',
    answer:
      'It is worth testing when your price still leaves profit after Walmart’s referral fee and fulfillment. Walmart charges no setup or monthly fee, so a small test costs little beyond your time and stock. Start with a few SKUs that already sell well elsewhere, run them through the calculator, and list the ones that clear your margin target.',
  },
  {
    category: 'walmart',
    question: 'How can I lower my Walmart shipping costs as a seller?',
    answer:
      'On orders you ship yourself, you pay your carrier, so negotiated rates and smaller boxes cut the bill. On WFS, shipping sits inside the per-unit fulfillment fee, which rises with weight and size. Trimming packed weight below a tier line, such as 1 lb, moves the item to a lower fee. Check the result in Walmart’s WFS fee calculator before you change packaging.',
  },
  {
    category: 'walmart',
    question: 'What does it cost to start with WFS compared with FBA?',
    answer:
      'Walmart says WFS has no setup or monthly fees, and Walmart Marketplace has no monthly fee. Amazon’s Professional plan costs $39.99 a month, or the Individual plan charges $0.99 per item sold. Both programs then charge per-unit fulfillment and monthly storage once stock arrives. So your first real cost on either is the inventory you send in and the freight to get it there.',
  },

  // Fulfillment Costs
  {
    category: 'fulfillment',
    question: 'What is the cost difference between Amazon FBA and Walmart WFS?',
    answer:
      'Walmart claims WFS saves sellers 15% on fulfillment cost per item compared with other marketplace fulfillment providers, based on its own comparison of orders from 1 July 2024 to 30 June 2025. That is Walmart’s claim, not an independent test. FBA fees vary by size tier and weight and are listed on Amazon’s FBA page. Price the same SKU on both before you move stock.',
  },
  {
    category: 'fulfillment',
    question: 'How does Direct Vendor Ship (DVS) fulfillment work on Target Plus?',
    answer:
      'Target Plus partners ship orders from their own warehouse or 3PL. Target’s application page lists the rules: ship with UPS, USPS or FedEx, ship within a 24-hour lead time, deliver within 2 to 5 business days after shipping, and fulfill from the US only. You keep control of storage, packing and carrier rates, but you cannot use competitor fulfillment services.',
  },
  {
    category: 'fulfillment',
    question: 'How do return costs impact net profitability across marketplaces?',
    answer:
      'Each return costs you the refund plus the handling. If you use FBA or WFS, check their fee pages for any return charges in your category. On seller-fulfilled channels you process returns yourself. Target requires Target Plus partners to accept both single-parcel and palletized returns from a semi-truck at a business location, so budget dock space and labor for that.',
  },
  {
    category: 'fulfillment',
    question: 'How do peak-season storage fees affect Q4 margins?',
    answer:
      'WFS storage is $0.75 per cubic foot per month from January to September. From October to December, the first 30 days stay at $0.75, then Walmart adds $1.50 per cubic foot per month beyond 30 days. Check Amazon’s FBA pages for its peak-month storage rates too. Send holiday stock in close to when it will sell, so it does not sit in storage for long.',
  },
  {
    category: 'fulfillment',
    question: 'What does it cost to fulfill a marketplace plus my own website?',
    answer:
      'Running your own site next to marketplaces means two fulfillment bills unless you share stock. FBA and WFS hold their own stock and charge per unit plus storage. Your site and seller-fulfilled channels such as Target Plus and Faire ship from your warehouse or 3PL. One shared stock pool for those channels cuts safety stock and double handling.',
  },

  // Margin Strategy
  {
    category: 'margins',
    question: 'What is a healthy net profit margin for multichannel commerce brands?',
    answer:
      'There is no single healthy number, and we do not publish one. Margin depends on your category, price, packed weight and ad spend. Use the calculator with your own price and product cost, then add your real ad cost per sale. If a channel cannot cover its fees and ads at your current price, fix the price or the pack size before you list.',
  },
  {
    category: 'margins',
    question: 'Should brands maintain uniform pricing across all marketplace channels?',
    answer:
      'One price across channels is the safe default. Amazon and Walmart both compare outside prices, and a lower price elsewhere can cost you the Buy Box. Set a Minimum Advertised Price, keep marketplace prices at or above it, and run deeper deals through private codes on your own store. Check each marketplace’s current pricing policy in its seller help center.',
  },
  {
    category: 'margins',
    question: 'How can brands protect margins when wholesale buyers purchase through Faire?',
    answer:
      'Faire orders are wholesale, so the price is what the retailer pays you, not the shelf price. Set wholesale from your own product cost first, then check it still works after Faire’s 15% commission and the $10 fee on opening orders. Move existing retailers onto Faire Direct, which costs 0% on qualified orders. Faire gives retailers 60 days to pay, interest-free.',
  },
  {
    category: 'margins',
    question: 'What are the storage fees for aged marketplace inventory?',
    answer:
      'Amazon charges an aged inventory surcharge on FBA stock that sits too long, with the age bands and rates on its FBA fee pages. WFS charges an extra $1.50 per cubic foot per month on stock held beyond 30 days in October to December. Track days of cover per SKU, then run a promotion or pull stock back to your own 3PL before those fees start.',
  },

  // Multichannel Tech
  {
    category: 'multichannel',
    question: 'How does FactoryJet unify inventory across all marketplace channels?',
    answer:
      'We build one inventory and order hub that connects your core platform, such as Shopify Plus, BigCommerce or your ERP, to the Amazon SP-API, the Walmart Marketplace API, the Target Plus integration and the Faire API. Each sale updates the shared stock count, and the new count goes out to every channel, so no marketplace keeps selling stock you no longer have.',
  },
  {
    category: 'multichannel',
    question: 'How do automated inventory buffers prevent out-of-stock penalties?',
    answer:
      'When warehouse stock drops below a safety level you set, our rules set marketplace quantities to zero and keep the last units for your own store. That stops marketplaces from taking orders you cannot ship, which protects your seller account rating. You choose the buffer per SKU, and you can raise it ahead of a sale or a holiday spike.',
  },
  {
    category: 'multichannel',
    question: 'Can multichannel software eliminate manual order entry for warehouse teams?',
    answer:
      'Yes. Orders from Amazon, Walmart, Target Plus and Faire flow into your main fulfillment queue or warehouse management system (WMS) on their own. The system then creates carrier labels and packing slips that meet each channel’s rules. Your team picks and packs from one list instead of copying orders from four seller portals by hand.',
  },
  {
    category: 'multichannel',
    question: 'What ERP systems can be connected to this multichannel architecture?',
    answer:
      'We build two-way connectors for NetSuite, SAP, Microsoft Dynamics 365, Acumatica, Katana Cloud Manufacturing, QuickBooks Enterprise, and custom PostgreSQL or REST backends. Orders, stock counts and settlement data move between the ERP and each channel, so finance closes the month from one set of numbers instead of separate marketplace reports.',
  },
  {
    category: 'multichannel',
    question: 'How does multichannel catalog syndication handle variant attributes?',
    answer:
      'Each marketplace uses its own categories and attribute fields for size, color and other variants. Our mapping pipeline converts your master product data into each channel’s format, so you edit a product once and every listing updates. Nobody types the same SKU into four portals, and a missing required field shows up as an error before the listing goes live.',
  },
  {
    category: 'multichannel',
    question: 'How quickly can FactoryJet deploy an integrated multichannel commerce engine?',
    answer:
      'We quote the timeline in writing after scoping, because it depends on how many channels and systems you connect. For reference, our store builds run 3 to 5 weeks for a custom theme, 5 to 8 weeks for advanced work such as subscriptions, B2B or migration, and 8 to 14 weeks for headless or custom builds.',
  },
  {
    category: 'multichannel',
    question: 'What is the pricing model for FactoryJet’s multichannel implementation?',
    answer:
      'We quote a fixed price per phase, in writing, after scoping. Before you sign, we show you working software on your own data, so you see it run first. Every build includes defect cover for a stated period, and there is no monthly minimum. We never take a percentage of your revenue.',
  },
  {
    category: 'multichannel',
    question: 'How do we schedule a multichannel architecture review with the founder?',
    answer:
      'Book a 30-minute scoping call directly with Bhavesh Barot. We review your current channel mix, catalog structure and fulfillment workflow on the call. Afterwards you get a written plan with a fixed price for each phase, so you can decide on the first step without committing to the whole program.',
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
  mainEntity: { '@id': `${PAGE_URL}#app` },
};

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Multichannel Marketplace Fee & Margin Calculator',
  url: PAGE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  dateModified: PAGE_MODIFIED,
  description:
    'Interactive calculator comparing profit per unit, platform commissions, and fulfillment costs across Amazon FBA, Walmart WFS, Target Plus, Faire Wholesale, and Shopify DTC.',
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Marketplaces', item: 'https://factoryjet.com/marketplace-management' },
    { '@type': 'ListItem', position: 3, name: 'Fee Calculator', item: PAGE_URL },
  ],
};

const STATS = [
  { b: '5 Channels', s: 'side-by-side unit economics' },
  { b: '22 Oct 2026', s: 'fee pages last read' },
  { b: '0% Rev-Share', s: 'FactoryJet fixed-price builds' },
  { b: '500+', s: 'businesses served since 2014' },
];

export default function MarketplaceFeeCalculatorPage() {
  return (
    <>
      <script id="calc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="calc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
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
                  Model net margins, referral commissions, and fulfillment costs across Amazon FBA, Walmart WFS,
                  Target Plus, Faire Wholesale, and Shopify DTC.
                </p>
                <p style={{ maxWidth: '52ch', margin: '0 0 18px', fontSize: '15px', color: 'var(--pp-body)' }}>
                  Marketplace fees are a referral fee on each sale, plus fulfillment, storage and any plan fee. As of
                  22 Oct 2026, <a href={SRC.amazon} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon</a> and{' '}
                  <a href={SRC.walmart} target="_blank" rel="noopener noreferrer" style={LINK}>Walmart</a> both take 15% in
                  many categories, Amazon adds $39.99 a month on its Professional plan, and{' '}
                  <a href={SRC.faire} target="_blank" rel="noopener noreferrer" style={LINK}>Faire</a> takes 15% of wholesale
                  orders plus $10 on a retailer’s first order.
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
                    { name: 'Shopify DTC', desc: 'Your Own Store' },
                    { name: 'Amazon FBA', desc: 'Prime Scale' },
                    { name: 'Walmart WFS', desc: 'Walmart Fulfillment' },
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
                    Fee pages read 22 Oct 2026
                  </div>
                  <div>Zero Revenue Share · Fixed Price per Phase</div>
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
                Moving from one Shopify store into marketplaces widens your reach. Without a fee model, though,
                commissions and fulfillment charges can wipe out the profit on each order. The calculator above uses
                planning rates to compare channels. The fees below come from each marketplace’s own pages, read on
                22 Oct 2026. Confirm them before you set prices, because marketplaces change fees.
              </p>
              <p>
                Each commercial channel operates with distinct unit economics:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                <li>
                  <strong>Amazon Marketplace:</strong> referral fees run by category: 15% for Home and Kitchen, Toys and
                  Games, and Everything Else; 8% for Consumer Electronics; Clothing and Accessories at 5% for $15 or less,
                  10% over $15 to $20 and 17% over $20. Most categories have a $0.30 minimum. The Professional plan is
                  $39.99 a month, or $0.99 per item on Individual (
                  <a href={SRC.amazon} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon pricing</a>, read 22 Oct 2026).
                  FBA fees vary by size tier and weight and are listed on{' '}
                  <a href={SRC.fba} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon’s FBA page</a>.
                </li>
                <li>
                  <strong>Walmart Marketplace:</strong> no setup or monthly fee. Referral fees are 15% for Home, Kitchen,
                  Decor and Garden, Toys and Games, and Everything Else; 8% for Consumer Electronics; Apparel at 5% up to
                  $15, 10% from $15 to $20 and 15% above $20. Rates range from 3% to 20% (
                  <a href={SRC.walmart} target="_blank" rel="noopener noreferrer" style={LINK}>Walmart pricing</a>, read 22 Oct 2026).
                  WFS fulfillment starts at $3.45 per unit for 1 lb or less (
                  <a href={SRC.wfsFees} target="_blank" rel="noopener noreferrer" style={LINK}>WFS fees</a>, read 22 Oct 2026).
                </li>
                <li>
                  <strong>Target Plus:</strong> an invite-only marketplace. Target does not publish its commission; terms come
                  in its partner agreement. Partners ship from their own warehouse or 3PL (
                  <a href={SRC.targetApply} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus requirements</a>, read 22 Oct 2026).
                  See our{' '}
                  <a href="/target-plus-marketplace" style={LINK}>Target Plus guide</a> for the full application checklist.
                </li>
                <li>
                  <strong>Faire Wholesale:</strong> 15% of the order subtotal plus a $10 new customer fee on a retailer’s
                  first order, 15% on reorders, and 0% on qualified Faire Direct orders, plus a payment processing fee (
                  <a href={SRC.faire} target="_blank" rel="noopener noreferrer" style={LINK}>Faire brand terms</a>, read 22 Oct 2026).
                  Check your Faire Brand Portal for current rates. More in our{' '}
                  <a href="/faire-wholesale-marketplace" style={LINK}>Faire wholesale guide</a>.
                </li>
                <li>
                  <strong>eBay:</strong> a 13.6% final value fee in most categories on the sale up to $7,500 and 2.35% above,
                  plus $0.30 per order at $10 or less and $0.40 over $10 (
                  <a href={SRC.ebay} target="_blank" rel="noopener noreferrer" style={LINK}>eBay selling fees</a>, read 22 Oct 2026).
                </li>
                <li>
                  <strong>Shopify DTC:</strong> no referral fee. Plans are $29, $79 or $299 a month billed yearly, and Shopify
                  Plus is $2,300 a month on a three-year term (
                  <a href={SRC.shopify} target="_blank" rel="noopener noreferrer" style={LINK}>Shopify</a>, updated 3 Sep 2026).
                  You also pay your plan’s card rate, your own 3PL, and the ad spend to bring shoppers in.
                </li>
              </ul>
              <p style={{ marginTop: '16px' }}>
                <strong>Costs the referral fee does not cover:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'grid', gap: '6px' }}>
                <li>FBA storage and aged inventory surcharges, listed on Amazon’s FBA pages.</li>
                <li>WFS storage at $0.75 per cubic foot a month, plus $1.50 extra beyond 30 days in October to December.</li>
                <li>Return shipping, inspection and restocking labor.</li>
                <li>Ad spend needed to hold search rank on each marketplace.</li>
                <li>Payment processing on Faire and on your own store.</li>
                <li>Faire’s $10 new customer fee on each retailer’s first order.</li>
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
              How category referral rules and parcel weight tiers decide which channels pay. Rates come from{' '}
              <a href={SRC.amazon} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon</a>,{' '}
              <a href={SRC.walmart} target="_blank" rel="noopener noreferrer" style={LINK}>Walmart</a> and{' '}
              <a href={SRC.faire} target="_blank" rel="noopener noreferrer" style={LINK}>Faire</a> (read 22 Oct 2026).
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Apparel &amp; Fashion (5% to 17% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Price decides the fee. A $14 tee pays 5% on both Amazon and Walmart. A $40 jacket pays 17% on Amazon
                  and 15% on Walmart. Model each price band on its own, and expect returns to cost more here than in
                  most categories.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Beauty &amp; Personal Care (8% to 15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Amazon and Walmart both charge 8% at $10 or less and 15% above. Items under 1 lb packed fall into the
                  lowest WFS fee band, which starts at $3.45 per unit, so small beauty SKUs are a natural first test on
                  Walmart.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Home, Kitchen &amp; Decor (15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Both Amazon and Walmart charge 15%. Bulky home goods pay more for fulfillment and storage because fees
                  rise with size and weight. Target Plus orders ship from your own 3PL at your own carrier rates, so
                  marketplace size-tier fees do not apply there.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Consumer Electronics (8% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Amazon and Walmart both charge 8% for consumer electronics, one of the lowest rates on either fee
                  table. Hardware margins tend to be thin, so sales volume on the big marketplaces does most of the work.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>Toys, Baby &amp; Kids (8% to 15% Referral)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Toys and Games pay 15% on Amazon and Walmart. Amazon’s Baby category pays 8% at $10 or less and 15%
                  above. Demand peaks in Q4, so Faire can help you lock in early boutique orders before the holiday rush
                  on the big marketplaces.
                </p>
              </div>
              <div className="pp-card">
                <div style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', fontWeight: 700, color: 'var(--pp-ink)' }}>B2B Wholesale Bundles (15% Faire Commission)</div>
                <p style={{ marginTop: '8px', fontSize: '14.5px', color: 'var(--pp-body)' }}>
                  Faire takes 15% plus $10 on a retailer’s opening order, 15% on reorders, and 0% on qualified Faire
                  Direct orders. Retailers get 60 days to pay. Shipping full master cartons cuts packing labor per unit, and
                  you pay no ad cost to win each shopper.
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
                Profitable marketplace growth needs a planned system, not one-off listings. FactoryJet runs the same
                four stages for every client:
              </p>
              <ol style={{ paddingLeft: '22px', marginTop: '12px', display: 'grid', gap: '6px' }}>
                <li>Audit the fees on every SKU and fix category and packaging mistakes.</li>
                <li>Connect inventory and orders across every channel from one stock pool.</li>
                <li>Map product data into each marketplace’s feed format automatically.</li>
                <li>Hold one price across channels and watch the Buy Box.</li>
              </ol>
              <p style={{ marginTop: '12px' }}>
                Want a team to run this for you? See our{' '}
                <a href="/marketplace-management" style={LINK}>marketplace management service</a>, or the channel pages for{' '}
                <a href="/services/amazon-agency" style={LINK}>Amazon</a> and{' '}
                <a href="/services/walmart-marketplace-agency" style={LINK}>Walmart Marketplace</a>.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 1: Unit Economic &amp; Fee Diagnostic</h3>
              <p>
                We audit your SKU catalog for size, packed weight, returns and category. A product filed in the wrong
                category on Amazon or Walmart can pay 15% instead of 8%. We fix category mappings, trim packaging to drop
                into lower weight tiers, and flag stock that is heading for aged inventory fees.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 2: Distributed Inventory &amp; Order Routing</h3>
              <p>
                We connect your primary commerce platform (Shopify Plus, BigCommerce, or ERP) directly to Amazon SP-API, Walmart Marketplace API,
                the Target Plus integration, and Faire API. By pooling physical inventory and setting buffer rules, we keep you from overselling during
                promotional spikes while keeping Buy Boxes active with current stock levels.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 3: Automated Feed Mapping &amp; SEO Syndication</h3>
              <p>
                Each marketplace has its own categories, bullet rules and image sizes. Our mapping pipeline sends product
                data from your master database into each channel’s feed, with no spreadsheet re-entry. It also adds the
                search terms and attributes shoppers filter by, so listings show up in marketplace search.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Stage 4: Unified Margin &amp; Buy Box Governance</h3>
              <p>
                Price gaps between channels can cost you the Buy Box. We set up MAP (Minimum Advertised Price)
                monitoring and Buy Box alerts, so your brand price holds and your ad spend goes to sales that still make
                a profit.
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
                Your fulfillment model sets both your cost per unit and how fast customers get orders. Brands selling on
                several channels usually choose between three setups:
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>1. Fulfillment by Amazon (FBA)</h3>
              <p>
                FBA gives your listings Prime delivery. In return, Amazon charges a fulfillment fee per unit that varies
                by size tier and weight, monthly storage, and aged inventory surcharges on stock that sits too long. Amazon
                lists every current rate on its{' '}
                <a href={SRC.fba} target="_blank" rel="noopener noreferrer" style={LINK}>Fulfillment by Amazon page</a> (read
                22 Oct 2026). Pull the fee for your exact size tier before you compare it with anything else.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>2. Walmart Fulfillment Services (WFS)</h3>
              <p>
                As of 22 Oct 2026,{' '}
                <a href={SRC.wfsFees} target="_blank" rel="noopener noreferrer" style={LINK}>WFS fees</a> start at $3.45 per
                unit for items of 1 lb or less. Storage is $0.75 per cubic foot per month from January to September. From
                October to December, stock held beyond 30 days pays an extra $1.50 per cubic foot per month. Walmart says{' '}
                <a href={SRC.wfs} target="_blank" rel="noopener noreferrer" style={LINK}>WFS</a> has no setup or monthly fees
                and claims a 15% saving on fulfillment cost per item compared with other marketplace fulfillment providers. That figure is Walmart’s own
                comparison of orders from 1 July 2024 to 30 June 2025.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>WFS cost calculator: ours vs. Walmart’s</h3>
              <p>
                Walmart has its own{' '}
                <a href={SRC.wfsCalc} target="_blank" rel="noopener noreferrer" style={LINK}>WFS fee calculator</a>. It
                returns the official WFS fee for one item from its weight and size. Our calculator does a different job:
                it puts WFS next to Amazon FBA, Target Plus, Faire and Shopify for the same product, using planning rates,
                so you can see which channel earns more per unit. Use ours to choose channels. Use Walmart’s to confirm
                the exact fee.
              </p>
              <p>To estimate WFS cost for one SKU:</p>
              <ol style={{ paddingLeft: '22px', marginTop: '8px', display: 'grid', gap: '6px' }}>
                <li>Weigh and measure the item as packed for shipping.</li>
                <li>Enter the weight and size in Walmart’s WFS fee calculator to get the fulfillment fee per unit.</li>
                <li>Work out the cubic feet you will store and multiply by $0.75 a month, adding $1.50 for stock held beyond 30 days in October to December.</li>
                <li>Add Walmart’s referral fee for your category and price.</li>
                <li>Enter your price and product cost in the calculator above to compare WFS with the other channels.</li>
              </ol>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>3. Private 3PL with Direct Vendor Ship (DVS) &amp; Seller Fulfilled</h3>
              <p>
                A central third-party logistics (3PL) warehouse lets you ship Target Plus orders, Faire wholesale orders
                and Shopify orders from one stock pool. That removes split safety stock across several networks, cuts
                master carton handling, and keeps your packaging under your control. Target Plus requires UPS, USPS or
                FedEx, a 24-hour lead time and delivery within 2 to 5 business days after shipping (
                <a href={SRC.targetApply} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus</a>, read 22 Oct 2026).
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
                    <th>Other Fees to Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Shopify Direct (DTC)</td>
                    <td>0% (card rate set by your plan)</td>
                    <td>Self / 3PL Warehouse</td>
                    <td>$29 to $299/mo billed yearly; Plus $2,300/mo (3-year term)</td>
                    <td>Card processing, your 3PL, ad spend</td>
                  </tr>
                  <tr>
                    <td className="name">Target Plus</td>
                    <td>Not published (set by partner agreement)</td>
                    <td>Direct Vendor Ship (DVS)</td>
                    <td>Set by partner agreement</td>
                    <td>Your 3PL; palletized returns handling</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Walmart Marketplace</td>
                    <td>3% to 20% by category (15% in many)</td>
                    <td>Walmart Fulfillment (WFS) or seller fulfilled</td>
                    <td>$0 (no setup or monthly fee)</td>
                    <td>WFS from $3.45/unit (1 lb or less); storage $0.75/cu ft/mo</td>
                  </tr>
                  <tr>
                    <td className="name">Amazon Marketplace</td>
                    <td>3% to 45% by category (15% in many); $0.30 minimum in most</td>
                    <td>Fulfillment by Amazon (FBA) or seller fulfilled</td>
                    <td>$39.99/mo Professional or $0.99 per item</td>
                    <td>FBA fees by size tier and weight; storage; aged inventory</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Faire Wholesale (B2B)</td>
                    <td>15% + $10 new customer fee (opening order); 15% reorders; 0% Faire Direct</td>
                    <td>Brand Warehouse / 3PL</td>
                    <td>Commission-based (see brand terms)</td>
                    <td>Payment processing fee</td>
                  </tr>
                  <tr>
                    <td className="name">eBay</td>
                    <td>13.6% up to $7,500, 2.35% above (most categories)</td>
                    <td>Seller fulfilled</td>
                    <td>250 free listings, then $0.35 each</td>
                    <td>$0.30 per order ($10 or less), $0.40 over $10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '14px', fontSize: '13px', color: 'var(--pp-muted)', maxWidth: '90ch' }}>
              Sources, read 22 Oct 2026:{' '}
              <a href={SRC.amazon} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon pricing</a>,{' '}
              <a href={SRC.walmart} target="_blank" rel="noopener noreferrer" style={LINK}>Walmart pricing</a>,{' '}
              <a href={SRC.wfsFees} target="_blank" rel="noopener noreferrer" style={LINK}>WFS fees</a>,{' '}
              <a href={SRC.target} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus</a>,{' '}
              <a href={SRC.faire} target="_blank" rel="noopener noreferrer" style={LINK}>Faire brand terms</a>,{' '}
              <a href={SRC.ebay} target="_blank" rel="noopener noreferrer" style={LINK}>eBay selling fees</a>, and{' '}
              <a href={SRC.shopify} target="_blank" rel="noopener noreferrer" style={LINK}>Shopify</a> (updated 3 Sep 2026).
              Marketplaces change fees, so check each page before you set prices.
            </p>
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
