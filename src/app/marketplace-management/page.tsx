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

// Freshness signal. Bump only when the page content actually changes.
const PAGE_MODIFIED = '2026-10-22';

const PAGE_URL = 'https://factoryjet.com/marketplace-management';
const PAGE_TITLE = 'Marketplace Management Agency: Amazon, Walmart | FactoryJet';
const PAGE_DESCRIPTION =
  'Marketplace management for US brands on Amazon, Walmart, Target Plus, Faire and TikTok Shop: one catalog, shared stock, MAP rules. Fixed price per phase.';

/* Primary sources for marketplace fees and rules on this page (all read 22 Oct 2026). */
const SRC = {
  amazon: 'https://sell.amazon.com/pricing',
  fba: 'https://sell.amazon.com/fulfillment-by-amazon',
  walmart: 'https://marketplace.walmart.com/pricing/',
  wfs: 'https://marketplace.walmart.com/walmart-fulfillment-services/',
  wfsFees: 'https://marketplacelearn.walmart.com/guides/Walmart%20Fulfillment%20Services%20(WFS)/WFS%20basics/WFS-fees',
  targetApply: 'https://plus.target.com/apply',
  targetShopify: 'https://corporate.target.com/press/release/2024/06/target-and-shopify-partner-to-help-consumers-discover-and-shop-an-expanded-assortment-on-target-com',
  faire: 'https://www.faire.com/tos-brand',
};

const LINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Marketplace Management & Brand Accelerator Agency | FactoryJet',
    description:
      'Unified catalog, inventory synchronization, and advertising growth across Amazon, Walmart, Target Plus, and Faire Wholesale.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Marketplace Management Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Channel Marketplace Management Agency | FactoryJet',
    description: 'Sell across Amazon, Walmart, Target Plus, Faire, and TikTok Shop from one catalog and one shared stock pool.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'strategy', label: 'Strategy & Fit' },
  { key: 'operations', label: 'Inventory & Operations' },
  { key: 'channels', label: 'Channel Specifics' },
  { key: 'fees', label: 'Fees & Requirements' },
  { key: 'commercials', label: 'Pricing & Handover' },
];

const FAQ_ITEMS = [
  // Strategy & Fit
  {
    category: 'strategy',
    question: 'Will selling on Amazon cannibalize our direct Shopify store sales?',
    answer:
      'Not when you set it up with clear roles. Many shoppers search Amazon first and never visit brand sites, so a listing there catches demand that would otherwise go to a competitor. Keep your own store the home of exclusive bundles, loyalty rewards and subscriptions, and hold one price across channels so neither one undercuts the other.',
  },
  {
    category: 'strategy',
    question: 'What is the difference between Seller Central and Vendor Central?',
    answer:
      'On Seller Central (3P), you sell to shoppers yourself, set your own prices, control your stock and pay Amazon referral fees. On Vendor Central (1P), you sell stock to Amazon as a supplier at a wholesale price, and Amazon sets the shelf price. We mostly help brands on Seller Central, because it keeps price control and margin with the brand.',
  },
  {
    category: 'strategy',
    question: 'How do we prevent channel conflict and MAP pricing violations?',
    answer:
      'We set price-sync rules that hold your Minimum Advertised Price (MAP) on every channel, so no listing drops below it by accident. We also use Amazon Brand Registry tools to spot unauthorized sellers who undercut your price, and we report them through Amazon’s own process. Your team gets an alert whenever a listing breaks the price floor.',
  },
  {
    category: 'strategy',
    question: 'When is a brand ready for marketplace expansion?',
    answer:
      'A brand is ready when its products already sell steadily on its own site, its supply can handle a second or third channel, every product has a valid GS1 barcode, and it holds a registered trademark for Amazon Brand Registry. If any one of those is missing, fix it first. Launching early usually means stockouts or listings you cannot defend.',
  },

  // Inventory & Operations
  {
    category: 'operations',
    question: 'How does inventory sync between Shopify and Amazon work?',
    answer:
      'We connect your main inventory database to marketplace APIs using webhook listeners. When an order lands on Amazon, the Shopify stock count drops within seconds. When new stock arrives at your main warehouse, the available quantity updates on every channel without anyone touching a spreadsheet. FBA stock is tracked as its own pool, since Amazon holds it.',
  },
  {
    category: 'operations',
    question: 'What happens if a product sells out simultaneously on multiple channels?',
    answer:
      'We set inventory safety buffers per SKU, for example holding back 5 units. When warehouse stock drops to that level, marketplace listings switch to zero available while your own website sells the last units. That stops marketplaces from taking orders you cannot ship, which protects your seller ratings on every channel.',
  },
  {
    category: 'operations',
    question: 'WFS vs FBA: should we use Amazon FBA, Walmart WFS, or our own 3PL?',
    answer:
      'Most brands mix them. FBA earns Prime delivery on Amazon, and WFS gives Walmart listings Walmart’s own fulfillment, while your 3PL ships website, Target Plus and wholesale orders. Compare per-unit costs first: WFS starts at $3.45 for items of 1 lb or less, and FBA fees vary by size tier on Amazon’s FBA page. Then split stock to keep storage fees low.',
  },
  {
    category: 'operations',
    question: 'How are returns and damaged inventory handled?',
    answer:
      'Marketplace returns go either to the marketplace’s own centers, for FBA and WFS stock, or back to your central 3PL. We set up reconciliation reports that track return reasons by SKU and flag units marked unfulfillable, so you can claim reimbursements where they apply and fix the product or listing problem behind repeat returns.',
  },
  {
    category: 'operations',
    question: 'Can we sell B2B wholesale orders on marketplaces?',
    answer:
      'Yes. We set up Amazon Business for quantity price tiers and connect Faire Wholesale so independent shops can order from you. On Faire, retailers get 60 days to pay with no interest, and Faire takes 15% plus a $10 new customer fee on each retailer’s first order. Wholesale orders then flow into the same order queue as your other channels.',
  },

  // Channel Specifics
  {
    category: 'channels',
    question: 'Is Walmart Marketplace worth the investment for a DTC brand?',
    answer:
      'It is worth testing for most brands that already sell on Amazon. Walmart says it charges no setup or monthly fee, and the referral fee is 15% in many categories, so a small test costs little. Run your SKUs through our marketplace fee calculator first, list the ones that clear your margin, and use WFS to reach Walmart’s fast-delivery badges.',
  },
  {
    category: 'channels',
    question: 'How difficult is it to get approved for Target Plus?',
    answer:
      'Target Plus is invite-only. Target’s apply page asks for a US-registered business with a W-9, EIN and DUNS number, GS1 barcodes on every product, US-only shipping with UPS, USPS or FedEx inside a 24-hour lead time, and the ability to take palletized returns. Onboarding runs 70 days. We help qualified brands prepare each item before they apply.',
  },
  {
    category: 'channels',
    question: 'How does TikTok Shop integrate with our existing e-commerce stack?',
    answer:
      'We connect TikTok Shop to your product catalog, so shoppers check out inside the app while orders route to your central warehouse. Stock counts come from the same pool as your other channels. We also set up affiliate commission rules so creators can promote your products, and we keep TikTok listings in step with your main catalog.',
  },
  {
    category: 'channels',
    question: 'Can we sell internationally on European or Asian marketplaces?',
    answer:
      'Yes. We support expansion to Amazon’s UK and European stores, such as Germany and France, Mercado Libre in Latin America, and regional marketplaces. That work covers currency conversion, VAT settings and translated catalog feeds. Each new country adds tax and compliance steps, so we scope it as its own phase with its own fixed price.',
  },
  {
    category: 'channels',
    question: 'What is Amazon Brand Registry and why does it matter?',
    answer:
      'Amazon Brand Registry is Amazon’s program for trademark owners. It gives you A+ Content, brand Storefronts, Sponsored Brands ads and tools to report counterfeit or copycat listings. It is not required to sell, but without it you have little control over your own product pages. We get your registry set up and keep its assets active.',
  },

  // Pricing & Handover
  {
    category: 'commercials',
    question: 'Do you charge a percentage of our marketplace sales?',
    answer:
      'No. We quote a fixed price per phase, in writing, after scoping. Before you sign, we show you working software on your own data. Every build includes defect cover for a stated period, and there is no monthly minimum. Many agencies bill a share of marketplace revenue; we never take a percentage of your sales.',
  },
  {
    category: 'commercials',
    question: 'Who owns the marketplace accounts and advertising data?',
    answer:
      'You own every Seller Central account, ad dashboard and brand registry login. We work through user permissions you grant inside your own accounts, and we never move your listings or data into agency-owned accounts. If we part ways, you remove our access and keep everything, including the integrations we built.',
  },
  {
    category: 'commercials',
    question: 'How long does a multi-marketplace setup take?',
    answer:
      'We give you the timeline in writing after scoping, because it depends on your channels, your catalog size and the systems we connect. Marketplace approval also sets the pace: Target Plus, for example, runs a 70-day onboarding. Each phase has a fixed price and a set scope, so you know what goes live first and when.',
  },
  {
    category: 'commercials',
    question: 'What happens after the initial build and launch?',
    answer:
      'Your team gets full documentation, video walkthroughs and standard operating procedures (SOPs) for every channel. Defect cover for a stated period is included in the build price. After that, there is no monthly minimum. You ask for changes when you need them, and we quote each one before work starts.',
  },

  // Fees & Requirements
  {
    category: 'fees',
    question: 'How do brands manage orders from multiple marketplaces?',
    answer:
      'They pull every order into one queue. A central system, often Shopify or the ERP, takes orders from Amazon, Walmart, Target Plus, Faire and TikTok Shop through each marketplace’s API, sends them to the warehouse, and pushes tracking numbers back. Stock counts come from one shared pool, so a sale on one channel lowers the count on all of them.',
  },
  {
    category: 'fees',
    question: 'What does it cost to sell on Amazon, Walmart and Faire?',
    answer:
      'As of 22 Oct 2026, Amazon charges $39.99 a month on the Professional plan plus a referral fee, 15% in many categories. Walmart charges no monthly fee and a referral fee, 15% in many categories. Faire takes 15% of wholesale orders plus a $10 new customer fee on each retailer’s first order. Our marketplace fee calculator compares them side by side.',
  },
  {
    category: 'fees',
    question: 'Does Target Plus use EDI?',
    answer:
      'Target Plus is a marketplace, and partners connect through Target’s integration or connectors such as Shopify Marketplace Connect. EDI documents such as the 850 purchase order, 856 ship notice and 810 invoice are how Target’s first-party vendors, including Direct Vendor Ship (DVS) suppliers, trade with Target. We confirm which setup applies to you during scoping.',
  },
  {
    category: 'fees',
    question: 'Can Shopify brands apply to Target Plus?',
    answer:
      'Yes. Target and Shopify announced a partnership in June 2024 that lets Shopify merchants apply to sell on Target.com through Shopify Marketplace Connect. Target Plus is still invite-only, so the application goes through Target’s review. Brands still need the same basics: a US business, GS1 barcodes, US-only shipping and the ability to take palletized returns.',
  },
  {
    category: 'strategy',
    question: 'Do you build launch plans for startups selling on large marketplaces?',
    answer:
      'Yes. A launch plan covers which marketplace to open first, which SKUs to list, the fee and margin model for each, inventory split between FBA, WFS and your 3PL, and the listing content and ads for the first months. Startups usually do best on one marketplace first, then add a second once stock and reviews are steady.',
  },
  {
    category: 'strategy',
    question: 'Can one operations platform run Amazon FBA, Walmart and Faire together?',
    answer:
      'Yes. We build one operations layer on your Shopify store or ERP that connects Amazon FBA, Walmart Marketplace and WFS, and Faire. It holds the master catalog, one stock pool for the stock you ship yourself, a view of FBA and WFS stock held by the marketplaces, and one order queue. Your team runs every channel from one screen.',
  },
  {
    category: 'channels',
    question: 'Do you manage Walmart listing content and Walmart ads?',
    answer:
      'Yes. We write Walmart titles and bullets, build rich product content where Walmart allows it, set up Walmart Connect ads, and work toward the Pro Seller badge. Walmart content uses different fields and rules from Amazon A+ Content, so we map your master product data into Walmart’s format instead of copying Amazon listings across.',
  },
  {
    category: 'channels',
    question: 'Do you manage Target Plus as an agency?',
    answer:
      'Yes, for invited brands and brands preparing to apply. We get the application basics ready, connect your catalog and inventory to Target Plus, set up direct shipping from your warehouse or 3PL, and keep listings and stock in step with your other channels. Target sets commission terms in its partner agreement, so we model them once you have the offer.',
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
  about: { '@id': `${PAGE_URL}#service` },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  serviceType: 'Marketplace Management & Multi-Channel E-Commerce Agency',
  name: 'Multi-Channel Marketplace Management & Growth',
  description:
    'End-to-end marketplace management, catalog synchronization, FBA/WFS fulfillment routing, and advertising optimization across Amazon, Walmart Marketplace, Target Plus, Faire, and TikTok Shop.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US DTC and B2B Brands' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Launches & Scales Multi-Channel Marketplaces',
  description: 'Our structured 3-stage framework for expanding brands across Amazon, Walmart, Target Plus, and Faire Wholesale.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Catalog Audit & API Sync', text: 'We audit SKU taxonomy, barcode authenticity, brand registry tokens, and build direct API feeds connecting your core store.' },
    { '@type': 'HowToStep', position: 2, name: 'Creative, SEO & Inbound Logistics', text: 'We write listing copy, build A+ content modules, and configure FBA/WFS inbound shipments.' },
    { '@type': 'HowToStep', position: 3, name: 'Advertising, Buy-Box Defense & Velocity', text: 'We launch targeted Sponsored Ads, request reviews through each marketplace’s approved tools, and enforce MAP price rules.' },
  ],
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://factoryjet.com/omnichannel-commerce' },
    { '@type': 'ListItem', position: 3, name: 'Marketplace Management', item: PAGE_URL },
  ],
};

const STATS = [
  { b: '6 Marketplaces', s: 'managed under one architecture' },
  { b: '500+', s: 'businesses served since 2014' },
  { b: '97%', s: 'on-time delivery' },
  { b: '10+ Yrs', s: 'scaling omnichannel commerce' },
];

const SOURCED = [
  {
    v: '$0',
    d: 'Walmart Marketplace setup or monthly fee. Walmart charges a referral fee per sale instead, 15% in many categories (read 22 Oct 2026).',
    src: 'Walmart Marketplace pricing',
    href: SRC.walmart,
  },
  {
    v: '15% + $10',
    d: 'Faire commission on a retailer’s opening order. Reorders pay 15%, and qualified Faire Direct orders pay 0% (read 22 Oct 2026).',
    src: 'Faire brand terms',
    href: SRC.faire,
  },
  {
    v: '70 days',
    d: 'Target Plus onboarding timeline, with inventory in place by day 45. Target Plus is invite-only (read 22 Oct 2026).',
    src: 'Target Plus application requirements',
    href: SRC.targetApply,
  },
];

const BENEFITS = [
  { i: '◈', t: 'Unified Catalog Engine', d: 'Edit your product titles, descriptions, and media once in Shopify or your PIM. Our integration pipeline dispatches compliant feeds to Amazon, Walmart, and Target Plus automatically.' },
  { i: '◇', t: 'Real-Time Inventory Allocation', d: 'Configurable inventory safety buffers prevent overselling during flash sales and peak seasonal volume. When warehouse stock hits low thresholds, external listings throttle down safely.' },
  { i: '↯', t: 'MAP Enforcement & Buy Box Defense', d: 'Automated monitoring tracks third-party reseller violations, rogue listings, and unauthorized price cuts to protect your direct margin and brand integrity.' },
  { i: '▤', t: 'Fulfillment Routing (FBA + WFS + 3PL)', d: 'Intelligent order routing assigns fulfillment based on lowest shipping cost, transit speed, and marketplace delivery promise requirements.' },
  { i: '⛓', t: 'High-Converting A+ Content', d: 'Custom comparison charts, lifestyle image modules and clear bullet structure, built inside Amazon’s A+ Content rules so shoppers get answers without leaving the listing.' },
  { i: '⤢', t: 'Full Account Ownership', d: 'You own every seller central account, brand registry token, and advertising profile. We manage the architecture and growth without holding your assets hostage.' },
];

const CHANNELS = [
  { t: 'Amazon Marketplace', d: 'Seller Central & Vendor Central management, Brand Registry, Sponsored Products, Sponsored Brands, Amazon DSP programmatic ads, and FBA optimization.' },
  { t: 'Walmart Marketplace', d: 'Application prep, Walmart Fulfillment Services (WFS) onboarding, Walmart Connect PPC ad management, and Pro Seller Badge qualification.' },
  { t: 'Target Plus', d: 'Invite-only application prep, Target Plus integration through Target’s API or Shopify Marketplace Connect, direct shipping from your warehouse, and product positioning for Target.com shoppers.' },
  { t: 'Faire Wholesale', d: 'B2B wholesale marketplace integration, so independent retailers can order from you on 60-day terms, with payouts reconciled automatically.' },
  { t: 'TikTok Shop', d: 'Direct social commerce store setup, affiliate creator commission architecture, in-app checkout integration, and live-selling inventory synchronization.' },
  { t: 'Wayfair & Specialists', d: 'Drop-ship vendor integration, heavy-freight shipping rate tables, CastleGate fulfillment integration, and dimension-accurate 3D asset syndication.' },
];

const USECASES = [
  {
    t: 'Unified Catalog Synchronization Across Channels',
    d: 'How we connect your primary e-commerce database directly to Amazon and Walmart APIs with automated mapping, currency conversions, and attribute validation.',
    img: 'marketplace-catalog-sync.webp',
  },
  {
    t: 'Hybrid Inbound Fulfillment (FBA, WFS & 3PL Logistics)',
    d: 'Routing inventory strategically across Amazon FBA and Walmart WFS fulfillment centers to qualify for fast-delivery badges without paying for long-term storage.',
    img: 'marketplace-fulfillment-wfs-fba.webp',
  },
  {
    t: 'Programmatic Marketplace Advertising & DSP',
    d: 'Full-funnel Sponsored Product search ads, Sponsored Brand video units, and Amazon DSP programmatic re-targeting that drives profitable incremental ROAS.',
    img: 'marketplace-advertising-dsp.webp',
  },
  {
    t: 'Brand Registry Defense & High-Converting A+ Creative',
    d: 'Securing trademark protection across global marketplaces, eliminating unauthorized resellers, and building high-converting brand storefronts.',
    img: 'marketplace-brand-control.webp',
  },
];

export default function MarketplaceManagementPage() {
  return (
    <>
      <script id="mp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="mp-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="mp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="mp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="mp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="mp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Marketplace Management &amp; Growth</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  One catalog engine. <span className="pp-grad">Every major marketplace.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We help US DTC and wholesale brands sell across Amazon, Walmart, Target Plus, Faire, and TikTok Shop
                  without catalog divergence, inventory stockouts, or channel conflict. You own your seller accounts,
                  your customer relationships, and your brand equity.
                </p>
                <p style={{ maxWidth: '52ch', margin: '0 0 18px', fontSize: '15px', color: 'var(--pp-body)' }}>
                  Marketplace management is running your listings, stock, prices, ads and orders on Amazon, Walmart,
                  Target Plus and Faire from one system. FactoryJet connects those channels to your Shopify store or ERP,
                  so stock counts and prices stay in step, every order lands in one queue, and you keep ownership of each
                  seller account.
                </p>
                <HeroInlineForm source="us_marketplace_management_hero" region="us" submitLabel="Get a Marketplace Scope" />
              </div>

              {/* Visual Hero Architecture Graphic */}
              <div
                role="img"
                aria-label="Architecture diagram showing single master core dispatching to Amazon, Walmart, Target Plus, Faire, and TikTok Shop."
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
                  Master Commerce Core (Shopify Plus / ERP)
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Single Source of Truth: Inventory · Pricing · Order Routing
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { name: 'Amazon', desc: 'FBA + Seller Central' },
                    { name: 'Walmart', desc: 'WFS + Marketplace' },
                    { name: 'Target Plus', desc: 'Curated DVS Ship' },
                    { name: 'Faire', desc: 'B2B Wholesale Net 60' },
                    { name: 'TikTok Shop', desc: 'LIVE & Creator Ads' },
                    { name: 'Wayfair', desc: 'Direct Catalog Sync' },
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
                    Real-Time Webhook Engine
                  </div>
                  <div>Shared Stock · One Price Floor</div>
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
            <p className="pp-mlabel">// the core model</p>
            <h2 style={{ marginTop: '10px' }}>What is multi-channel marketplace management?</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Multi-channel marketplace management is the operational and technical system that allows a brand to list,
                price, advertise, and fulfill products across external marketplaces, such as Amazon, Walmart Marketplace,
                Target Plus, and Faire, while maintaining their primary DTC storefront as the central hub of truth.
              </p>
              <p>
                Marketplace expansion usually goes wrong when each channel runs as its own silo.
                Inventory sells out on Shopify while Amazon keeps accepting orders, triggering seller penalties. MAP
                pricing breaks because unauthorized third-party resellers undercut retail prices. Advertising spend is
                wasted because listing content lacks high-converting A+ assets.
              </p>
              <p>
                FactoryJet connects your product catalog, inventory feeds, and order management system directly to
                marketplace APIs. We build automated buffer controls, price-sync rules and listing creative, so new
                channels add revenue without adding the same amount of manual work.
              </p>
              <p><strong>What you need before you launch on a new marketplace:</strong></p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'grid', gap: '6px' }}>
                <li>Products that already sell steadily on your own site.</li>
                <li>GS1 barcodes on every product. Target Plus accepts 12-digit UPC or 13-digit EAN codes only.</li>
                <li>A registered trademark, so you can enroll in Amazon Brand Registry.</li>
                <li>A US business with a W-9, EIN and DUNS number if you plan to apply to Target Plus.</li>
                <li>Enough stock and warehouse capacity to ship within each marketplace’s lead time, such as Target Plus’s 24 hours.</li>
                <li>A fee and margin model per SKU. Our{' '}
                  <a href="/marketplace-fee-calculator" style={LINK}>marketplace fee calculator</a> compares Amazon, Walmart WFS,
                  Target Plus, Faire and Shopify side by side.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                Fees and rules on this page come from each marketplace’s own pages, read 22 Oct 2026:{' '}
                <a href={SRC.amazon} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon pricing</a>,{' '}
                <a href={SRC.fba} target="_blank" rel="noopener noreferrer" style={LINK}>Amazon FBA</a>,{' '}
                <a href={SRC.walmart} target="_blank" rel="noopener noreferrer" style={LINK}>Walmart pricing</a>,{' '}
                <a href={SRC.wfsFees} target="_blank" rel="noopener noreferrer" style={LINK}>WFS fees</a>,{' '}
                <a href={SRC.targetApply} target="_blank" rel="noopener noreferrer" style={LINK}>Target Plus requirements</a>,{' '}
                <a href={SRC.targetShopify} target="_blank" rel="noopener noreferrer" style={LINK}>Target and Shopify</a> and{' '}
                <a href={SRC.faire} target="_blank" rel="noopener noreferrer" style={LINK}>Faire brand terms</a>.
              </p>
              <p>
                Each channel has its own page. See how we work on{' '}
                <a href="/services/amazon-agency" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>Amazon</a>,{' '}
                <a href="/services/walmart-marketplace-agency" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>Walmart Marketplace</a>,{' '}
                <a href="/target-plus-marketplace" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>Target Plus</a>,{' '}
                <a href="/wayfair-marketplace" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>Wayfair</a>,{' '}
                <a href="/services/tiktok-shop-agency" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>TikTok Shop</a> and{' '}
                <a href="/faire-wholesale-marketplace" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>Faire Wholesale</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// marketplace dynamics</p>
            <h2 style={{ marginTop: '10px' }}>Marketplace fees and rules, by the numbers</h2>
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
            <h2 style={{ marginTop: '10px' }}>How our marketplace engineering protects your brand</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              We build the operational and technical guardrails that allow you to sell across multiple high-volume
              channels without operational chaos.
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
        <section className="pp-sec" id="marketplace-roi-calculator">
          <div className="pp-wrap">
            <EcommerceRoiCalculator
              source="us_marketplace_management_page"
              defaultPlatform="shopify"
              defaultTarget="omnichannel"
            />
          </div>
        </section>

        {/* ── Channels Grid ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// supported channels</p>
            <h2 style={{ marginTop: '10px' }}>Every channel connected to your central operations</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From the largest consumer marketplaces to specialized B2B wholesale networks, we configure and manage
              direct API connectivity. If you still sell each channel on its own, read{' '}
              <a href="/omnichannel-vs-multichannel-commerce" style={LINK}>omnichannel vs multichannel commerce</a> or our{' '}
              <a href="/omnichannel-commerce" style={LINK}>omnichannel commerce service</a>.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {CHANNELS.map((c) => (
                <div className="pp-card" key={c.t}>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-orange-dark)', marginBottom: '6px' }}>{c.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{c.d}</p>
                </div>
              ))}
            </div>
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
                  <p className="pp-mlabel">{`// use case 0${idx + 1}`}</p>
                  <h2 style={{ marginTop: '8px' }}>{uc.t}</h2>
                  <p className="pp-lead" style={{ marginTop: '14px' }}>{uc.d}</p>
                  <div style={{ marginTop: '22px' }}>
                    <ModalCTAButton label="Scope this architecture" region="us" btnVariant="secondary-light" />
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
            <h2 style={{ marginTop: '10px' }}>How FactoryJet compares to traditional agencies</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              We build systems that give your team permanent ownership and control, not opaque black boxes that take a
              cut of every sale.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capability / Deliverable</th>
                    <th>FactoryJet Omnichannel</th>
                    <th>Commodity Amazon Agency</th>
                    <th>Generic Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Core Architecture</td>
                    <td>Single Source of Truth (Shopify / ERP + Sync Engine)</td>
                    <td>Disconnected Amazon silo</td>
                    <td>Manual CSV spreadsheet uploads</td>
                  </tr>
                  <tr>
                    <td className="name">Channel Breadth</td>
                    <td>Amazon, Walmart, Target Plus, Faire, TikTok Shop</td>
                    <td>Amazon-only focus</td>
                    <td>Single account task execution</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Inventory Safety Controls</td>
                    <td>Real-time buffer rules &amp; API state machines</td>
                    <td>Manual periodic checks</td>
                    <td>No automated protection</td>
                  </tr>
                  <tr>
                    <td className="name">Account &amp; Data Ownership</td>
                    <td>100% Client-owned accounts and tokens</td>
                    <td>Sometimes run inside agency-owned portals</td>
                    <td>Client-owned</td>
                  </tr>
                  <tr className="me">
                    <td className="name">MAP &amp; Reseller Defense</td>
                    <td>Automated buy-box tracking &amp; brand enforcement</td>
                    <td>Basic ad management only</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="name">Contract Structure</td>
                    <td>Fixed price per phase, quoted in writing; no monthly minimum</td>
                    <td>Often a percentage of revenue</td>
                    <td>Usually hourly billing</td>
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
            <h2 style={{ marginTop: '10px' }}>Our 3-stage marketplace launch framework</h2>
            <ol style={{ paddingLeft: '22px', marginTop: '18px', display: 'grid', gap: '6px', color: 'var(--pp-body)' }}>
              <li>Audit the catalog and connect your store to each marketplace.</li>
              <li>Build listings and content, then set up FBA and WFS shipments.</li>
              <li>Launch, start ads, and enforce price rules.</li>
            </ol>
            <div style={{ display: 'grid', gap: '24px', marginTop: '28px' }}>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 1 · Audit &amp; Sync</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Catalog Audit &amp; Data Synchronization</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We audit your existing SKU taxonomy, barcode authenticity, brand registry credentials, and channel
                  compliance requirements. We configure the API connectors connecting your core store to the target
                  marketplace platforms.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 2 · Listings &amp; Fulfillment</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Listing Creative, SEO &amp; Fulfillment Setup</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We write keyword-rich titles, clear bullet specifications, and build custom A+ content modules. We
                  configure FBA / WFS inbound routing and establish warehouse inventory threshold rules to prevent
                  stockouts.
                </p>
              </div>
              <div className="pp-card">
                <div className="pp-eyebrow" style={{ marginBottom: '6px' }}>Stage 3 · Launch &amp; Ads</div>
                <h3 style={{ fontSize: '18px', color: 'var(--pp-ink)' }}>Launch, Advertising &amp; Reviews</h3>
                <p style={{ marginTop: '8px', color: 'var(--pp-body)' }}>
                  We trigger live indexing, activate targeted sponsored search campaigns to generate initial sales
                  velocity, and request reviews through each marketplace’s approved tools to build social proof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// client proof</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real multi-channel growth</h2>
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
                headline="Frequently asked questions about marketplace expansion"
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
                <p className="pp-mlabel">// start your expansion</p>
                <h2 style={{ margin: '12px 0 16px' }}>Ready to scale across Amazon, Walmart, and beyond?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Let us audit your catalog, review your channel opportunities, and provide a fixed-price roadmap
                  before any build starts.
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
