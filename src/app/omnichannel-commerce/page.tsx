import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/omnichannel';

export const metadata: Metadata = {
  title: 'Omnichannel Commerce Agency | Omnichannel Ecommerce Solutions | FactoryJet',
  description:
    'Omnichannel commerce agency for DTC and B2B brands. We build omnichannel ecommerce solutions that connect your web store, retail POS, marketplaces, and B2B portal to one catalog, one inventory, and one customer view, on Shopify, BigCommerce, Adobe Commerce, headless, or Commerceflo.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Omnichannel Commerce Agency | Omnichannel Ecommerce Solutions | FactoryJet',
    description: 'We build omnichannel ecommerce solutions that connect web, retail POS, marketplaces, and B2B to one catalog and one inventory.',
    url: 'https://factoryjet.com/omnichannel-commerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, omnichannel commerce agency' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Omnichannel Commerce Agency | FactoryJet', description: 'Omnichannel ecommerce solutions: one catalog, one inventory, every channel.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/omnichannel-commerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Omnichannel basics' },
  { key: 'connecting', label: 'Connecting channels' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'working', label: 'Working together' },
];
const FAQ_ITEMS = [
  { category: 'basics', question: 'What is omnichannel commerce?', answer: 'Omnichannel commerce means every place you sell reads from one catalogue, one inventory pool, and one order record. A customer buying online, in store, or through a marketplace hits the same stock number and lands in the same order book. Multi-channel means selling in several places; omnichannel means those places agree with each other.' },
  { category: 'basics', question: 'What is the difference between multichannel and omnichannel?', answer: 'Multichannel is presence: you sell on your store, on Amazon, and in a shop. Omnichannel is consistency: those channels share inventory, pricing, and customer history, so a return bought online can be processed in store and stock never oversells. Most brands are multichannel by accident and omnichannel only on purpose.' },
  { category: 'basics', question: 'Why does inventory oversell across channels?', answer: 'Because each channel keeps its own copy of the stock number and they reconcile on a schedule rather than in real time. The gap between syncs is where overselling happens, and it gets worse the more channels you add. Fixing it means one system owning stock and every channel reading from it.' },
  { category: 'basics', question: 'What is BOPIS and do we need it?', answer: 'Buy online, pick up in store. It needs accurate store-level inventory, a staff-facing pick flow, and a customer notification path. It is worth building when you have real footfall and stock sitting in stores; it is a distraction if your stores carry little inventory or your volume is mostly shipped.' },
  { category: 'connecting', question: 'Which ecommerce agency handles omnichannel integrations?', answer: 'Look for one that treats integration as the project rather than the follow-up phase. The storefront is the easy part. Ask how they handle inventory reconciliation, partial fulfilment, and returns across channels, because those three are where omnichannel builds actually fail.' },
  { category: 'connecting', question: 'Can you connect our POS to the online store?', answer: 'Yes. Shopify POS is the cleanest case; Lightspeed, Square, and older on-premise systems usually need middleware. What matters is deciding which system owns stock and which merely reports it. Two systems both believing they own inventory is the root of most omnichannel problems.' },
  { category: 'connecting', question: 'How do marketplaces fit into omnichannel?', answer: 'Amazon, Walmart, eBay, and Faire each become another channel drawing on the same inventory pool, with their own listing rules and fulfilment expectations. The work is less about listing and more about keeping stock buffers, pricing rules, and order routing sane once several channels compete for the same units.' },
  { category: 'connecting', question: 'Do we need an OMS?', answer: 'Not always. Below a certain complexity, the commerce platform can act as the order manager. A dedicated OMS earns its place when you have multiple fulfilment locations, complex routing rules, or partial shipments across warehouses. We will tell you which side of that line you sit on rather than selling you one by default.' },
  { category: 'platforms', question: 'What is the best platform for omnichannel commerce?', answer: 'Shopify Plus with POS covers most retail-plus-online brands cleanly. Adobe Commerce suits very large catalogues with complex rules. BigCommerce sits well in the mid-market. Where the requirement is genuinely one engine across many channels, Commerceflo is built for that. The right answer follows your store count and fulfilment complexity.' },
  { category: 'platforms', question: 'Do we need to replatform to go omnichannel?', answer: 'Frequently not. Omnichannel is mostly an integration and data-ownership problem, and many platforms can support it once inventory has a single owner. If your current platform genuinely cannot express multi-location stock, that is a real replatforming trigger, and our replatforming work covers that path.' },
  { category: 'working', question: 'How long does an omnichannel build take?', answer: 'Usually a few months, driven by how many systems have to agree rather than by storefront design. Each additional channel, warehouse, or legacy system adds reconciliation work. We scope the integration surface first because that is what sets the timeline.' },
  { category: 'working', question: 'What does ecommerce website development cost for omnichannel?', answer: 'It depends on channel count, fulfilment complexity, and how much legacy integration is involved. We scope it on a short call and send a fixed proposal before any work starts, so the number does not move mid-project.' },
  { category: 'basics', question: 'What is omnichannel commerce?', answer: 'Omnichannel commerce means selling across every channel your customers use, web, mobile, retail, marketplaces, and social, with one connected system behind it. An omnichannel ecommerce platform reads from one catalog and one inventory, so a customer can buy anywhere and you still see one order history and one source of truth.' },
  { category: 'basics', question: 'What is the difference between multichannel and omnichannel ecommerce?', answer: 'Multichannel means you sell in many places that each run on their own stock and pricing. Omnichannel connects those channels to one catalog, one inventory, and one customer record, so they act as a single system. We build the connected, omnichannel version, not a pile of disconnected tools.' },
  { category: 'basics', question: 'What is an omnichannel commerce platform?', answer: 'It is the system that keeps your storefront, POS, marketplaces, and B2B portal reading from one catalog and one inventory, with one view of every customer and order. We build it on the platform that fits and connect it to the rest of your stack.' },
  { category: 'basics', question: 'What are the benefits of omnichannel commerce?', answer: 'One source of truth for stock and pricing, no oversells, the ability to buy and fulfill anywhere, one customer profile, and the ability to add a channel without building a new silo. Research from Harvard Business Review found omnichannel customers make more repeat trips and spend more than single-channel shoppers.' },
  { category: 'connecting', question: 'Can you connect my online store and retail POS?', answer: 'Yes. We connect your store and POS so stock, pricing, and customers are shared, and we enable ship-from-store and buy-online-pickup-in-store (BOPIS) on one live inventory.' },
  { category: 'connecting', question: 'Can you sync inventory across marketplaces like Amazon and Walmart?', answer: 'Yes. We sync listings, pricing, and orders across Amazon, Walmart, eBay, and your own store from one inventory, so you never oversell and never reconcile stock by hand.' },
  { category: 'connecting', question: 'Do you build ship-from-store, BOPIS, and endless aisle?', answer: 'Yes. Ship-from-store, buy-online-pickup-in-store, curbside, and endless aisle all run on the single connected inventory we set up, with fulfillment routing across your locations.' },
  { category: 'connecting', question: 'Can you integrate our ERP, OMS, PIM, and 3PL?', answer: 'Yes. On the ERP side that usually means NetSuite, SAP Business One, Microsoft Dynamics 365 Business Central, Acumatica or Brightpearl. For product data we work with Akeneo, Salsify and Plytix. Order management runs through Fluent Commerce, Manhattan Active or the platform native OMS, POS through Lightspeed, Square or Toast, and fulfilment through ShipBob, ShipStation or your existing 3PL. Everything lands in one order and inventory layer so each channel reads the same data instead of keeping its own copy.' },
  { category: 'platforms', question: 'Which platforms do you build omnichannel on?', answer: 'Shopify and Shopify Plus, BigCommerce, Adobe Commerce (Magento), headless and composable builds, and Commerceflo. We are platform-agnostic and recommend the fit for your catalog, channels, and budget.' },
  { category: 'platforms', question: 'What is the best omnichannel commerce platform?', answer: 'There is no single best one; it depends on your catalog size, the channels you sell on, your B2B needs, and your budget. We compare the options against your situation on a scoping call and recommend the fit rather than the most expensive tool.' },
  { category: 'platforms', question: 'Is Shopify good for omnichannel commerce?', answer: 'Shopify and Shopify Plus handle online plus retail POS well and connect to marketplaces, which suits many DTC and DTC-plus-B2B brands. For very large catalogs or deep B2B, we may recommend Adobe Commerce or a headless build instead.' },
  { category: 'platforms', question: 'Do you build headless or composable omnichannel commerce?', answer: 'Yes. When you need custom front ends across many channels or top-tier performance, we build headless and composable commerce with your storefront decoupled from the commerce engine and connected through APIs.' },
  { category: 'working', question: 'Can DTC and B2B run on one omnichannel system?', answer: 'Yes. We run a consumer storefront and a gated B2B portal on the same catalog and inventory, with tiered pricing, net terms, and reordering for trade accounts.' },
  { category: 'working', question: 'Can you migrate our channels without losing SEO?', answer: 'Yes. We handle replatforming and data migration, including products, customers, orders, and pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'working', question: 'How long does an omnichannel commerce build take?', answer: 'It depends on how many channels and systems we connect and how complex your catalog and pricing are. After a short scoping call you get a phased timeline with milestones, and a fixed proposal before any work starts.' },
  { category: 'working', question: 'Do we own the omnichannel system you build?', answer: 'Yes. You own and operate everything we build. We design, build, implement, and then hand it over, and we stay on call to support and scale it. We never run your store for you.' },
];
const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Omnichannel commerce development and implementation',
  name: 'Omnichannel commerce solutions',
  description: 'Omnichannel commerce agency. We design, build, and implement omnichannel ecommerce solutions that connect web, retail POS, marketplaces, social, and B2B to one catalog, one inventory, and one customer view, on Shopify, BigCommerce, Adobe Commerce, headless, or Commerceflo.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' }, audience: { '@type': 'BusinessAudience', name: 'DTC and B2B retail and commerce brands' },
};
const HOWTO_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How FactoryJet builds an omnichannel commerce system',
  description: 'Our process for designing, building, and implementing a unified omnichannel commerce system for US DTC and B2B brands.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Map', text: 'We map your channels, catalog, inventory, and systems, then recommend the platform and write a fixed proposal.' },
    { '@type': 'HowToStep', position: 2, name: 'Unify', text: 'We connect storefront, POS, marketplaces, and B2B to one catalog and one inventory.' },
    { '@type': 'HowToStep', position: 3, name: 'Integrate', text: 'We wire your ERP, OMS, PIM, POS, and 3PL into one order and inventory layer.' },
    { '@type': 'HowToStep', position: 4, name: 'Launch', text: 'We migrate data with 301 redirects, test on staging, and run a clean cutover that protects SEO.' },
    { '@type': 'HowToStep', position: 5, name: 'Own and scale', text: 'You own and run the system; we support and add channels as you grow.' },
  ],
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds omnichannel and B2B commerce for DTC and B2B brands.',
  
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const PAGE_MODIFIED = '2026-08-03';
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/omnichannel-commerce#webpage',
  url: 'https://factoryjet.com/omnichannel-commerce',
  name: 'Omnichannel Commerce Agency',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Omnichannel Commerce', item: 'https://factoryjet.com/omnichannel-commerce' },
] };

const STATS = [
  { b: 'One catalog', s: 'across every channel' },
  { b: 'DTC + B2B', s: 'on one system' },
  { b: 'Any platform', s: 'Shopify, BigCommerce, Adobe' },
  { b: '10+ yrs', s: 'building commerce' },
];
const SOURCED = [
  { v: '73%', d: 'of shoppers use multiple channels during a single buying journey, not just one.', src: 'Harvard Business Review, 46,000-shopper study', href: 'https://hbr.org/2017/01/a-study-of-46000-shoppers-shows-that-omnichannel-retailing-works' },
  { v: '23%', d: 'more repeat shopping trips from omnichannel customers within six months, who also spend 10% more online.', src: 'Harvard Business Review', href: 'https://hbr.org/2017/01/a-study-of-46000-shoppers-shows-that-omnichannel-retailing-works' },
  { v: '$129B', d: 'in US buy-online-pickup-in-store (BOPIS) sales in 2024, on track for roughly $509B by 2033.', src: 'ResearchAndMarkets, 2025', href: 'https://www.businesswire.com/news/home/20250313984021/en/' },
];
const BENEFITS = [
  { i: '◎', t: 'One source of truth', d: 'Pricing, stock, and orders read from one record, so channels never fight over inventory.' },
  { i: '⇄', t: 'Buy and fulfill anywhere', d: 'Ship-from-store, buy-online-pickup-in-store, curbside, and endless aisle on one inventory.' },
  { i: '◷', t: 'No oversells', d: 'Live inventory sync across web, POS, and marketplaces ends manual reconciliation.' },
  { i: '↻', t: 'One customer view', d: 'One profile and order history across every channel powers better service and marketing.' },
  { i: '⤢', t: 'Add channels fast', d: 'A new marketplace or retail door plugs into the same engine, not a new silo.' },
  { i: '✓', t: 'DTC and B2B together', d: 'Retail and trade pricing on one catalog, with gated B2B logins where you need them.' },
];
const CAPABILITIES = [
  { t: 'Storefront + POS unification', d: 'Your online store and retail point of sale sharing one catalog, inventory, and customer record.' },
  { t: 'Inventory & order management', d: 'A single OMS view with live stock, fulfillment routing, and order orchestration across locations.' },
  { t: 'Marketplace integration', d: 'Amazon, Walmart, and eBay listings, pricing, and orders synced to one inventory.' },
  { t: 'B2B portal on the same catalog', d: 'Gated trade ordering with tiered pricing and net terms alongside your DTC store.' },
  { t: 'Customer data & loyalty', d: 'One customer profile and loyalty program that follows the shopper across channels.' },
  { t: 'ERP, PIM & 3PL integration', d: 'NetSuite, SAP Business One, Dynamics 365, Akeneo, Fluent Commerce, ShipBob and your existing 3PL, wired into one order and inventory layer.' },
];
const USECASES = [
  { t: 'Retail + DTC brands', img: 'retail-dtc.webp', alt: 'Store associate at a point-of-sale tablet handing a wrapped order to a customer in a boutique', d: 'Connect your online store and retail POS so stock, pricing, and customers are shared. Ship-from-store, buy-online-pickup-in-store, and a single loyalty profile across web and counter mean shoppers get one experience and you get one set of numbers.' },
  { t: 'Multi-location & franchise', img: 'multi-location.webp', alt: 'Operations manager reviewing multi-store inventory dashboards on a wall of screens', d: 'One catalog and inventory across many stores, with per-location stock, fulfillment routing, and reporting that rolls up to one view. Open a new door without spinning up a new system, and route every order to the location that fulfills it best.' },
  { t: 'Wholesale + DTC hybrid', img: 'wholesale-dtc.webp', alt: 'Warehouse team packing trade and retail orders side by side on a fulfillment floor', d: 'Run a consumer storefront and a gated B2B portal on the same products and stock, with tiered pricing, net terms, and reordering for trade accounts. Your wholesale and retail demand draw from one inventory instead of competing spreadsheets.' },
  { t: 'Marketplace sellers', img: 'marketplace.webp', alt: 'Hands on a laptop showing a clean multi-marketplace orders dashboard', d: 'Sell on Amazon, Walmart, and your own store from one inventory, with listings, pricing, and orders synced so you never oversell. Add a channel when it makes sense, and keep one clean view of stock and revenue across all of them.' },
];
const COMPARE = [
  { cap: 'Inventory', single: 'One store', multi: 'Separate per channel', omni: 'One live inventory', me: false },
  { cap: 'Pricing & catalog', single: 'One list', multi: 'Re-keyed per tool', omni: 'One catalog, channel rules', me: false },
  { cap: 'Customer view', single: 'Partial', multi: 'Fragmented', omni: 'One profile + history', me: false },
  { cap: 'Fulfillment', single: 'Basic', multi: 'Manual routing', omni: 'Ship-from-store, BOPIS, endless aisle', me: true },
  { cap: 'Add a channel', single: 'Hard', multi: 'New silo', omni: 'Plugs into one engine', me: false },
];
const STEPS = [
  { n: '01', t: 'Map', d: 'We map your channels, catalog, inventory, and systems, then recommend the platform and write a fixed proposal.' },
  { n: '02', t: 'Unify', d: 'Storefront, POS, marketplaces, and B2B connected to one catalog and one inventory.' },
  { n: '03', t: 'Integrate', d: 'ERP, OMS, PIM, POS, and 3PL wired into one order and inventory layer.' },
  { n: '04', t: 'Launch & own', d: 'Data migration with 301 redirects, staging QA, a clean cutover, then you own and run it.' },
];

const imgStyle = { width: '100%', height: 'auto', objectFit: 'cover' as const, borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block' };

export default function OmnichannelCommercePage() {
  return (
    <>
      <script id="omni-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="omni-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="omni-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="omni-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="omni-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="omni-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* Hero */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Omnichannel commerce</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '16ch' }}>
                  One catalog. Every channel. One system that sells.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We design, build, and run the engine behind omnichannel commerce, so your web store, retail POS,
                  marketplaces, and social shops read from one catalog, one inventory, and one source of truth. DTC and
                  B2B, on the platforms you already use.
                </p>
                <HeroInlineForm source="us_omnichannel_hero" region="us" submitLabel="Get an omnichannel audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A unified omnichannel engine connecting web store, retail POS, marketplaces, social shops, and a B2B portal to one core.">
                <span aria-hidden="true" style={{ position: 'absolute', width: '78%', height: '78%', border: '1px dashed var(--pp-line)', borderRadius: '50%', animation: 'pp-spin 40s linear infinite' }} />
                <div className="pp-core" aria-hidden="true" style={{ width: '120px', height: '120px' }}>
                  <b>Unified<br />engine</b><span>one source of truth</span>
                </div>
                <span className="pp-node" style={{ top: '6%', left: '6%' }} aria-hidden="true"><span className="d" />Web store</span>
                <span className="pp-node" style={{ top: '16%', right: '4%' }} aria-hidden="true"><span className="d" />Retail POS</span>
                <span className="pp-node" style={{ bottom: '14%', left: '3%' }} aria-hidden="true"><span className="d" />Marketplaces</span>
                <span className="pp-node" style={{ bottom: '8%', right: '8%' }} aria-hidden="true"><span className="d" />Social shops</span>
                <span className="pp-node" style={{ top: '47%', right: '-3%' }} aria-hidden="true"><span className="d" />B2B portal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap"><div className="pp-stats">{STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}</div></div>
        </section>

        {/* What is */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the basics</p>
            <h2 style={{ marginTop: '10px' }}>What is omnichannel commerce?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                Omnichannel commerce means selling across every channel your customers use, web, mobile, retail,
                marketplaces, and social, with one connected system behind it. Unlike a multichannel setup where a
                separate store, POS, and marketplace tool each hold their own stock and pricing, an omnichannel ecommerce
                platform reads from one catalog and one inventory, so a customer can buy anywhere and you still see one
                order history and one source of truth.
              </p>
              <p>
                For retail and DTC brands, that is the difference between channels that compete for stock and channels
                that cooperate. A shopper can buy online and pick up in store, return in one place what they bought in
                another, and earn loyalty that follows them everywhere. Your team works from one view of inventory,
                orders, and customers instead of reconciling spreadsheets between systems.
              </p>
              <p>
                We are the agency that designs and builds that connected system, then hands it over for you to own and
                run. Multichannel means you sell in many places; omnichannel means those places act as one. That is the
                difference we engineer, on Shopify, BigCommerce, Adobe Commerce, a headless build, or Commerceflo,
                whichever fits your catalog and channels best.
              </p>
            </div>
          </div>
        </section>

        {/* Sourced stats */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it matters</p>
            <h2 style={{ marginTop: '10px' }}>Shoppers already buy across channels</h2>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '32px', lineHeight: 1, color: 'var(--pp-orange-dark)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <p style={{ marginTop: '10px' }}>{s.d}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '12px', display: 'inline-block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}>Source: {s.src}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it pays off</p>
            <h2 style={{ marginTop: '10px' }}>The benefits of going omnichannel</h2>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {BENEFITS.map((b) => (
                <li className="pp-card" key={b.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{b.i}</span>
                  <h3>{b.t}</h3><p>{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Capabilities */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>An omnichannel commerce system, end to end</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>The pieces that turn separate tools into one connected commerce system your team and customers can trust.</p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {CAPABILITIES.map((c) => (
                <li className="pp-card" key={c.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{c.t}</h3><p>{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Use cases with imagery */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// who we build for</p>
            <h2 style={{ marginTop: '10px' }}>Omnichannel, by business type</h2>
            <div style={{ marginTop: '34px', display: 'grid', gap: 'clamp(28px,4vw,44px)' }}>
              {USECASES.map((u, i) => (
                <div key={u.t} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,44px)', alignItems: 'center' }} className="pp-herogrid">
                  <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                    <h3 style={{ fontSize: '21px' }}>{u.t}</h3>
                    <p className="pp-lead" style={{ marginTop: '10px', fontSize: '16px' }}>{u.d}</p>
                  </div>
                  <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <Image src={`${IMG}/${u.img}`} alt={u.alt} width={1448} height={1086} sizes="(max-width:760px) 100vw, 50vw" style={imgStyle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec tint">
          <div className="pp-wrap" style={{ textAlign: 'center' }}>
            <p className="pp-mlabel">// before you compare</p>
            <h2 style={{ marginTop: '10px' }}>Running separate tools for each channel?</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Tell us what you sell and where. We will map what a unified system would actually replace.
            </p>
            <div style={{ marginTop: '22px' }}>
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the difference</p>
            <h2 style={{ marginTop: '10px' }}>Multichannel vs unified omnichannel</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Capability</th><th>Single channel</th><th>Multichannel (disconnected)</th><th>Unified omnichannel</th></tr></thead>
                <tbody>{COMPARE.map((r) => (<tr key={r.cap} className={r.me ? 'me' : ''}><td className="name">{r.cap}</td><td>{r.single}</td><td>{r.multi}</td><td>{r.omni}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Stock and orders living in different systems?'}
          sub={'Tell us which channels you sell on and what your inventory source of truth is. We will map where it is breaking.'}
          label={'Talk about your channels'}
        />

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>From many tools to one system you own</h2>
            <ul className="pp-bento n4" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</div>
                  <h3 style={{ marginTop: '8px' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder band */}
        <section className="pp-sec tint">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,44px)', alignItems: 'center' }}>
            <div>
              <p className="pp-mlabel">// founder-led</p>
              <h2 style={{ marginTop: '10px', fontSize: 'clamp(24px,2.6vw,32px)' }}>Built with you, owned by you</h2>
              <p className="pp-lead" style={{ marginTop: '12px' }}>
                You work directly with the founder and a small senior team. We design and build your omnichannel commerce
                system, then hand it over. You own and run it, with us on call to support and scale.
              </p>
            </div>
            <Image src={`${IMG}/founder-advisory.webp`} alt="A small team reviewing an online storefront together around a laptop" width={1448} height={1086} sizes="(max-width:760px) 100vw, 50vw" style={imgStyle} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what clients say</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real builds</h2>
            <div style={{ marginTop: '34px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="pp-bento">
              <figure style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', margin: 0 }}>
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }} aria-hidden="true">★★★★★</div>
                <blockquote style={{ fontFamily: 'var(--pp-display)', fontWeight: 600, fontSize: '18px', lineHeight: 1.5, color: 'var(--pp-ink)', margin: '14px 0 20px', letterSpacing: '-0.01em' }}>
                  “We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.”
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B., Founder of Belle Maison" width={48} height={48} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                  <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '15px', color: 'var(--pp-ink)', display: 'block' }}>Ricky B.</b><span style={{ fontSize: '13px', color: 'var(--pp-muted)' }}>Founder, Belle Maison</span></span>
                </figcaption>
              </figure>
              <figure style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', margin: 0 }}>
                <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }} aria-hidden="true">★★★★★</div>
                <blockquote style={{ fontFamily: 'var(--pp-display)', fontWeight: 600, fontSize: '18px', lineHeight: 1.5, color: 'var(--pp-ink)', margin: '14px 0 20px', letterSpacing: '-0.01em' }}>
                  “In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.”
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <Image src="/images/testimonials/vishal-impulse-branding-160.webp" alt="Vishal K., Director of Impulse Branding" width={48} height={48} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                  <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '15px', color: 'var(--pp-ink)', display: 'block' }}>Vishal K.</b><span style={{ fontSize: '13px', color: 'var(--pp-muted)' }}>Director, Impulse Branding</span></span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="OMNICHANNEL COMMERCE FAQ"
          headline="Questions before you build."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* CTA two-column */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,44px)', alignItems: 'center' }}>
            <div>
              <p className="pp-mlabel" style={{ color: 'var(--pp-orange-dark)' }}>// before you commit</p>
              <h2 style={{ marginTop: '12px', maxWidth: '18ch' }}>Make every channel act as one.</h2>
              <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                Tell us where you sell today. We will map your channels, catalog, and inventory into one system and send a
                fixed proposal before any work starts.
              </p>
              <div style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: 'var(--pp-orange)', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Talk to the Founder</a>
                <ModalCTAButton label="Get an omnichannel audit" region="us" btnVariant="secondary-light" />
              </div>
              <div style={{ marginTop: '26px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span aria-hidden="true" style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#F05A28,#C8431A)', color: '#fff', fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>B</span>
                <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Bhavesh, Founder of FactoryJet</b><span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>You work with me directly. No handoffs.</span></span>
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--pp-line)', borderRadius: '18px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B., Belle Maison" width={46} height={46} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }} />
                <span><b style={{ fontFamily: 'var(--pp-display)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Ricky B.</b><span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>Belle Maison</span></span>
              </div>
              <blockquote style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.55, color: 'var(--pp-body)', borderLeft: '2px solid var(--pp-orange)', paddingLeft: '12px', margin: '0 0 16px' }}>
                “We were live in just 6 days. New inquiries come in every day, and the site is still really fast.”
              </blockquote>
              <div style={{ borderTop: '1px solid var(--pp-line)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--pp-muted)' }}>
                <span aria-hidden="true" style={{ color: 'var(--pp-orange)', letterSpacing: '1px' }}>★★★★★</span>
                <span><strong style={{ color: 'var(--pp-ink)' }}>4.9/5</strong> · average Google review rating</span>
              </div>
            </div>
          </div>
          <div className="pp-wrap" style={{ marginTop: '28px' }}>
            <p style={{ fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>,{' '}
              <Link href="/headless-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>,{' '}
              <Link href="/commerceflo" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Commerceflo</Link>, and{' '}
              <Link href="/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
