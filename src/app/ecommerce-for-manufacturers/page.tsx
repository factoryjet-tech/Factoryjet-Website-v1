import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-02';

export const metadata: Metadata = {
  title: 'E-Commerce for Manufacturers & Distributors | Dealer Portals | FactoryJet',
  description:
    'Manufacturer ecommerce and distributor ecommerce built as dealer portals: per-account and contract pricing, territory rules, configurable products, spec sheets, bulk order pads, EDI and punchout, and ERP integration with NetSuite, SAP, Epicor Prophet 21, Infor, and Dynamics 365.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'E-Commerce for Manufacturers & Distributors | Dealer Portals | FactoryJet',
    description: 'B2B ecommerce for manufacturers and distributors: dealer portals, contract pricing, territory rules, bulk ordering, EDI, punchout, and ERP integration.',
    url: 'https://factoryjet.com/ecommerce-for-manufacturers',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce for manufacturers and distributors' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'E-Commerce for Manufacturers & Distributors | FactoryJet', description: 'Dealer and distributor portals with contract pricing, bulk ordering, EDI, punchout, and ERP integration.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/ecommerce-for-manufacturers' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Manufacturer basics' },
  { key: 'dealers', label: 'Dealers & distributors' },
  { key: 'catalog', label: 'Catalog & products' },
  { key: 'integrations', label: 'ERP & integrations' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'What is ecommerce for manufacturers?', answer: 'Manufacturer ecommerce is a trade ordering system rather than a shop. Dealers, distributors, and specifiers log in, see the pricing their contract entitles them to, check real stock, configure or specify a product, and place or repeat an order without emailing a rep. The storefront reads pricing and availability from the ERP that already runs the plant, so what a dealer sees is what your finance and inventory systems agree on.' },
  { category: 'basics', question: 'What is a B2B website?', answer: 'A B2B website sells to other businesses rather than consumers, which changes the mechanics rather than just the audience. Buyers log in to see pricing their account is entitled to, order against agreed terms rather than a card, reorder from history, and often route the order through an approval step. Public pricing and single-click checkout, the defaults of a consumer store, are usually the wrong answer.' },
  { category: 'basics', question: 'How much does it cost to create a B2B website?', answer: 'Four things drive nearly all of the variance: catalogue size, whether products are configurable, the state of your product data, and how deep the ERP integration goes. A dealer portal on a clean catalogue with a simple ERP sync is a very different project from a configurable-product build with EDI and punchout. We scope it on a short call and send a fixed proposal before any work starts.' },
  { category: 'basics', question: 'Who else builds ecommerce for manufacturers and distributors?', answer: 'The field splits three ways. Platform vendors such as NetSuite SuiteCommerce and BigCommerce sell the software. Specialist B2B platforms including OroCommerce, Virto Commerce, and Coredna target distribution specifically. Agencies such as OnTap Group and HeadQ, and ourselves, build on top of Shopify Plus, Adobe Commerce, or BigCommerce. The right answer depends on whether your constraint is the platform or the implementation.' },
  { category: 'basics', question: 'Why do manufacturers need ecommerce if they sell through distributors?', answer: 'Selling through distributors does not remove the ordering problem, it moves it. Distributors still place orders, check stock, chase lead times, and request quotes, and most of that still arrives by email and phone. A dealer portal absorbs that traffic, cuts re-keying errors, and gives you first-party visibility of who orders what. It does not disintermediate your channel unless you choose to sell direct, and most of our manufacturer builds deliberately do not.' },
  { category: 'basics', question: 'What is the difference between manufacturer ecommerce and distributor ecommerce?', answer: 'A manufacturer typically sells a deep but narrow catalog of its own products to a controlled dealer network, so the hard parts are configuration, spec data, territory rules, and warranty. A distributor resells a broad catalog from many suppliers, so the hard parts are catalog volume, parametric search, supplier data quality, and multi-warehouse inventory accuracy. We build both, but they are different jobs and the platform choice can differ.' },
  { category: 'basics', question: 'Will an online channel undercut our dealers?', answer: 'Only if you design it to. The common pattern is a dealer-only portal with no public pricing, where a consumer enquiry is routed to the nearest authorised dealer by postcode or territory. Some manufacturers add a direct channel later at list price so dealers are never undercut. We build the rules you want rather than assuming a direct-to-consumer model.' },
  { category: 'basics', question: 'How long does a manufacturer ecommerce build take?', answer: 'Most run from a few weeks to a few months. The variables that move the timeline are catalog complexity, whether products are configurable, how clean the product data is, and how much ERP integration is in scope. Product data quality is the single most common cause of delay, so we assess it during scoping rather than discovering it mid-build.' },
  { category: 'dealers', question: 'Can you build a dealer portal?', answer: 'Yes. A dealer portal gives each authorised dealer its own login, contract pricing, assigned assortment, order and invoice history, one-click reordering, quote requests, and net terms. Head office accounts can sit above branch accounts so a group sees its own branches while a single branch sees only itself.' },
  { category: 'dealers', question: 'Can you handle territory and channel rules?', answer: 'Yes. We implement territory restrictions so a dealer only sees products and pricing it is authorised to sell in its region, plus dealer-locator routing that sends public enquiries to the right partner. Where you run tiered dealer programmes, gold and silver tiers can carry different pricing, assortments, and payment terms.' },
  { category: 'dealers', question: 'Can distributors order in bulk without rebuilding the basket?', answer: 'Yes. Bulk order pads let a buyer paste or upload a list of part numbers and quantities and go straight to checkout. Saved lists, reorder from previous order, and CSV upload cover the repeat ordering that makes up most distributor volume. Case, pallet, and box units of measure are enforced at the cart so you do not receive orders in quantities you cannot ship.' },
  { category: 'dealers', question: 'Do you support EDI for large accounts?', answer: 'Yes. Large distributors and retail buyers frequently will not use a portal at all, and mandating one loses the order. We implement EDI 850 purchase orders, 855 acknowledgements, 856 advance ship notices, and 810 invoices so those accounts trade the way they already do, while their orders land in the same pipeline as portal orders.' },
  { category: 'dealers', question: 'What about buyers who order through procurement software?', answer: 'Punchout handles that. With cXML or OCI punchout, a buyer inside Coupa, Ariba, Jaggaer, or Oracle procurement clicks through to your catalog, builds a basket at their contracted pricing, and returns an approved requisition to their own system. For enterprise and public-sector buyers this is often the only route their policy allows.' },
  { category: 'catalog', question: 'Can you handle configurable or made-to-order products?', answer: 'Yes. We build product configurators that enforce real engineering rules: valid option combinations, dependent options, dimensional inputs with tolerances, and derived part numbers or SKUs. The output can be a priced order, or a quote request where the configuration needs engineering sign-off before a price is committed.' },
  { category: 'catalog', question: 'Can buyers find parts by specification rather than by name?', answer: 'Yes, and for technical catalogs this matters more than search. Parametric or faceted search lets a buyer filter by the attributes that actually identify a part: material, dimension, voltage, thread, pressure rating, finish. We also build compatibility and fitment finders where a part must match a machine, model, or year.' },
  { category: 'catalog', question: 'Can you publish spec sheets, CAD files, and technical documents?', answer: 'Yes. Datasheets, installation guides, CAD and BIM files, safety data sheets, certificates of conformity, and warranty documents attach to the product record and stay downloadable from the product page and the order history. For regulated categories we version them so a buyer can retrieve the document that applied at the time of their order.' },
  { category: 'catalog', question: 'Our product data is a mess. Can you still build this?', answer: 'Yes, and it is the normal starting point. Most manufacturer catalogs live across an ERP part master, spreadsheets, and PDF price lists. We assess the data during scoping and either clean and structure it into the platform or stand up a PIM such as Akeneo, Salsify, or Plytix as the source of truth. Being honest about the state of the data early is what keeps the build on schedule.' },
  { category: 'catalog', question: 'Can you show accurate stock across multiple plants and warehouses?', answer: 'Yes. Inventory syncs per location, so a dealer sees availability at the warehouse that will actually serve it rather than a national total that is misleading. Where you run make-to-order or long lead times, we show expected lead time instead of a stock figure, which is more useful to a buyer than a zero.' },
  { category: 'integrations', question: 'Which ERPs do you integrate with?', answer: 'NetSuite, SAP S/4HANA and Business One, Microsoft Dynamics 365 Business Central, Epicor Kinetic and Prophet 21, Infor CloudSuite Industrial, Sage X3 and Intacct, Acumatica, IFS, QuickBooks Enterprise, and Odoo. Epicor Prophet 21 and Infor come up most often in distribution specifically. Where no direct connector exists, we build middleware against the ERP API or file interface.' },
  { category: 'integrations', question: 'What data syncs between the portal and the ERP?', answer: 'The part master and product attributes, customer and dealer account hierarchies, contract and tiered price lists, credit limits and payment terms, inventory by location, orders, invoices, and shipment tracking. Pricing and stock are read from the ERP rather than copied into the storefront, which is what stops a dealer being quoted a number your finance system disagrees with.' },
  { category: 'integrations', question: 'Can you connect Epicor Prophet 21 to an ecommerce storefront?', answer: 'Yes. Prophet 21 is common in distribution and exposes the objects a portal needs: items, customers, contract pricing, availability, orders, and invoices. We scope which objects sync, in which direction, and at what frequency before writing code, because near-real-time inventory and nightly price list updates are very different builds with very different costs.' },
  { category: 'integrations', question: 'How do credit limits and net terms work against the ERP?', answer: 'At checkout the portal reads the account credit limit and open balance from the ERP. Within limit and current, the dealer checks out on account with net terms. Over limit or past due, the order is either held for approval or restricted to card payment, whichever rule you prefer. Nothing relies on a manually maintained copy of the balance.' },
  { category: 'integrations', question: 'Can you integrate a CPQ or quoting system?', answer: 'Yes. Where quotes need engineering or margin approval, we either build the quote workflow into the portal or integrate an existing CPQ so the configured quote, approval chain, and resulting order stay connected. The important part is that an accepted quote becomes an order without anyone re-keying it.' },
  { category: 'working', question: 'Which platform is best for a manufacturer?', answer: 'It depends on catalog size and how much configuration you need. Shopify Plus suits a manageable catalog with clean B2B rules and is the fastest to launch. Adobe Commerce suits very large catalogs and deep native B2B. BigCommerce sits well in the mid-market. Commerceflo fits when a unified engine across channels is the goal. We compare them against your part count, configuration complexity, and ERP on a scoping call.' },
  { category: 'working', question: 'How much does a manufacturer ecommerce build cost?', answer: 'It depends on catalog size, whether products are configurable, the state of your product data, and the depth of ERP integration. Those four things drive most of the variance. We scope on a short call and send a fixed proposal before any work starts, so you are not signing up to an hourly estimate that moves.' },
  { category: 'working', question: 'Can you replatform our existing dealer portal?', answer: 'Yes. We handle migration of products, dealer accounts, contract pricing, and order history, with 301 redirects and a cutover plan that protects rankings and uptime. Contract pricing and account hierarchies are the parts most often lost in a bad migration, so we reconcile them against the ERP before and after cutover.' },
  { category: 'working', question: 'Do we own what you build?', answer: 'Yes. You own the code, the data, and the platform accounts. We are not renting you a tool you lose access to if you stop working with us, and there is no proprietary layer you cannot maintain without us.' },
  { category: 'working', question: 'Do you work with US manufacturers and distributors?', answer: 'Yes, most of the brands we work with are US-based, across manufacturing, distribution, industrial, and MRO, with a decade-plus of commerce builds behind us.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'E-commerce development for manufacturers and distributors',
  name: 'Manufacturer and distributor e-commerce development',
  description: 'B2B ecommerce for manufacturers and distributors: dealer and distributor portals with contract pricing, territory rules, configurable products, parametric search, spec sheets, bulk order pads, EDI, punchout, and ERP integration with NetSuite, SAP, Epicor Prophet 21, Infor, Dynamics 365, and Acumatica.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Manufacturers, distributors, wholesalers, and industrial suppliers' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/ecommerce-for-manufacturers#webpage',
  url: 'https://factoryjet.com/ecommerce-for-manufacturers',
  name: 'E-Commerce for Manufacturers & Distributors',
  description: 'Manufacturer and distributor ecommerce: dealer portals, contract pricing, configurable products, EDI, punchout, and ERP integration.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds B2B, wholesale, and manufacturer commerce for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'B2B E-Commerce', item: 'https://factoryjet.com/b2b-ecommerce' },
  { '@type': 'ListItem', position: 3, name: 'E-Commerce for Manufacturers', item: 'https://factoryjet.com/ecommerce-for-manufacturers' },
] };

const STATS = [
  { b: 'Dealer portals', s: 'contract pricing & territories' },
  { b: 'EDI + punchout', s: 'for accounts that skip portals' },
  { b: 'Any ERP', s: 'P21, NetSuite, SAP, Infor' },
  { b: '10+ yrs', s: 'building commerce' },
];
// Citations fetch-verified 2026-08-02 against the linked primary sources.
// Do not edit a figure here without re-verifying the source page first.
const SOURCED = [
  { v: '17%', d: 'year-over-year growth in US B2B ecommerce sales across sites, password-protected portals, and apps in 2023, reaching roughly $2.3 trillion.', src: 'Digital Commerce 360', href: 'https://www.digitalcommerce360.com/2024/02/27/b2b-market-2023-2024/' },
  { v: 'Ten', d: 'channels the average B2B buyer now uses across the buying journey, from researching suppliers to reordering, up from five in 2016.', src: 'McKinsey B2B Pulse', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-multiplier-effect-of-omnichannel' },
  { v: 'One third', d: 'of B2B buyers prefer digital self-service at any given stage, alongside a third wanting remote contact and a third wanting in-person. A dealer portal serves one of the three, not all of them.', src: 'McKinsey B2B Pulse', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-multiplier-effect-of-omnichannel' },
];
const PAINS = [
  { i: '✉', t: 'Dealers order by email and phone', d: 'Inside sales re-keys orders from inboxes and voicemails, and a typo in a part number becomes a return, a credit note, and a lost afternoon.' },
  { i: '▦', t: 'Contract pricing lives in PDFs', d: 'Each dealer agreement sits in a file somewhere, so every quote is manual and the price a dealer is given does not always match the one finance expects.' },
  { i: '⛌', t: 'Nobody trusts the stock figure', d: 'Availability is quoted from memory or a nightly export, so dealers call to check before ordering, which is the phone call the portal was meant to remove.' },
];
const BENEFITS = [
  { i: '↻', t: 'Repeat orders without a rep', d: 'Reorder pads, saved lists, and CSV upload absorb the routine volume that currently occupies your inside sales team.' },
  { i: '◷', t: 'Hours back for inside sales', d: 'Order entry stops being a typing job, so the team works on quotes, lapsed accounts, and the orders that genuinely need a human.' },
  { i: '✓', t: 'Contract pricing applied correctly', d: 'Each dealer sees the price its agreement entitles it to, read from the ERP, so quotes stop going out wrong.' },
  { i: '⌕', t: 'Buyers find the right part', d: 'Parametric search and fitment finders cut wrong-part orders, which are the most expensive kind of order to process twice.' },
  { i: '⇄', t: 'One order pipeline', d: 'Portal, EDI, punchout, and rep-written orders all land in the same place, so you are not reconciling several order books.' },
  { i: '◎', t: 'Channel visibility', d: 'First-party data on who orders what and how often, instead of inferring demand from distributor forecasts.' },
];
const FEATURES = [
  { t: 'Dealer & distributor portals', d: 'Per-account logins, assigned assortments, order and invoice history, and reordering for every authorised partner.' },
  { t: 'Contract & tiered pricing', d: 'Contract, tiered, and volume pricing per account, read live from the ERP rather than maintained twice.' },
  { t: 'Territory & channel rules', d: 'Region-restricted catalogs and pricing, dealer-locator routing, and tiered dealer programmes.' },
  { t: 'Product configurators', d: 'Rule-driven configuration with dependent options, dimensional inputs, and derived part numbers, priced or sent to quote.' },
  { t: 'Parametric & fitment search', d: 'Attribute-level filtering and compatibility finders so buyers identify parts by specification, not by guessing a name.' },
  { t: 'Bulk order pads & CSV upload', d: 'Paste or upload part numbers and quantities straight to checkout, with case and pallet units enforced at the cart.' },
  { t: 'EDI & punchout', d: 'EDI 850/855/856/810 and cXML or OCI punchout into Coupa, Ariba, Jaggaer, and Oracle procurement.' },
  { t: 'ERP integration', d: 'NetSuite, SAP, Epicor Prophet 21 and Kinetic, Infor, Dynamics 365, Sage, Acumatica, IFS, and custom middleware.' },
];
const SEGMENTS = [
  { t: 'Industrial & MRO', d: 'Very large attribute-heavy catalogs, parametric search, compatibility finders, contract pricing, and approval workflows for procurement teams. Multi-warehouse availability that a buyer can act on without calling.' },
  { t: 'Machinery & equipment', d: 'Configurable and made-to-order products, spec sheets and CAD downloads, serial-number-linked spare parts, and warranty registration. Quote-to-order where engineering sign-off is needed before a price is committed.' },
  { t: 'Building products & materials', d: 'Trade pricing by merchant account, case and pallet units, delivery-window and route logic, and branch-level stock. Specification documents and certificates attached at the product record.' },
  { t: 'Electrical & electronic components', d: 'Deep part hierarchies, datasheets, lifecycle and compliance status, alternates and cross-references, and reel or tray quantity handling for volume buyers.' },
  { t: 'Automotive & aftermarket parts', d: 'Year-make-model fitment lookup, cross-reference to OE part numbers, core charges and returns, and dealer or jobber pricing tiers.' },
  { t: 'Food, beverage & CPG manufacturers', d: 'Case and pallet ordering, lot and expiry handling, route and delivery-window logic, and 3PL integration for high-frequency wholesale accounts.' },
];
const STEPS = [
  { n: '01', t: 'Scope & data audit', d: 'We map your part master, dealer accounts, contract pricing, and ERP, and assess product data quality honestly, because that is what usually moves a timeline.' },
  { n: '02', t: 'Design & build', d: 'Dealer portal plus catalog: contract pricing, territory rules, configuration, parametric search, and bulk ordering.' },
  { n: '03', t: 'Integrate', d: 'ERP, PIM, EDI, punchout, and WMS wired into one order and inventory layer.' },
  { n: '04', t: 'Migrate & launch', d: 'Data migration with 301 redirects, pricing reconciled against the ERP, staging QA, then a clean cutover.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function EcommerceForManufacturersPage() {
  return (
    <>
      <script id="mfg-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="mfg-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="mfg-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="mfg-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="mfg-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">E-commerce for manufacturers &amp; distributors</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Dealer portals your channel will actually use.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We build manufacturer and distributor ecommerce: dealer portals with contract pricing, territory rules,
                  configurable products, parametric part search, and bulk ordering, integrated with the ERP that already
                  runs your business. Your dealers self-serve, your inside sales team stops re-keying orders.
                </p>
                <HeroInlineForm source="us_mfg_hero" region="us" submitLabel="Get a channel commerce audit" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/manchester/industry-manufacturing.webp"
                  alt="A manufacturing operation whose dealer ordering runs through an integrated commerce portal"
                  width={600}
                  height={480}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Definition block */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// the basics'}</p>
                <h2 style={{ marginTop: '10px' }}>What is manufacturer e-commerce?</h2>
                <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
                  <p>
                    Manufacturer e-commerce is a trade ordering system, not a shop. Dealers, distributors, and specifiers
                    log in, see the pricing their contract entitles them to, check stock at the warehouse that will serve
                    them, configure or specify a product, and place or repeat an order without emailing a rep.
                  </p>
                  <p>
                    That makes it a different build from a consumer store. The catalog is technical rather than
                    persuasive, buyers search by specification rather than by browsing, pricing is per-account rather than
                    public, and the storefront is only as good as its connection to the ERP that holds the part master,
                    the price lists, and the stock.
                  </p>
                  <p>
                    Distributor e-commerce solves the same problem from the other side of the channel: a broad catalog
                    sourced from many suppliers, where the difficulty moves from configuration to catalog volume, supplier
                    data quality, and multi-warehouse inventory accuracy.
                  </p>
                  <p>
                    We design, build, and implement that system on the platform that fits, then hand it over for you to
                    own and run. This page covers the manufacturing and distribution case specifically. For the wider
                    trade-selling picture, see our{' '}
                    <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      B2B e-commerce
                    </Link>{' '}
                    build. If you already run a dealer portal and the platform underneath it is the problem, see{' '}
                    <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      e-commerce replatforming
                    </Link>.
                  </p>
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-trade-portal.webp"
                  alt="A trade portal showing per-account pricing, stock by location, and one-click reordering"
                  width={600}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sourced stats */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the market'}</p>
            <h2 style={{ marginTop: '10px' }}>Why your buyers already expect this</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.v}</h3>
                  <p>{s.d}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px' }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>{s.src}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the problem'}</p>
            <h2 style={{ marginTop: '10px' }}>What channel ordering looks like without it</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {PAINS.map((p) => (
                <li className="pp-card" key={p.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{p.i}</span> {p.t}</h3><p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the outcome'}</p>
            <h2 style={{ marginTop: '10px' }}>What changes after launch</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <li className="pp-card" key={b.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{b.i}</span> {b.t}</h3><p>{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what we build'}</p>
            <h2 style={{ marginTop: '10px' }}>Manufacturer and distributor commerce features</h2>
            <ul className="pp-bento n8" style={{ marginTop: '32px' }}>
              {FEATURES.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ERP integration */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-erp-integration.webp"
                  alt="Dashboards showing a dealer portal connected to ERP, PIM, and warehouse systems"
                  width={600}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">{'// ERP & integrations'}</p>
                <h2 style={{ marginTop: '10px' }}>ERP-integrated channel commerce</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  A dealer portal is only trusted if the numbers in it are the numbers in your ERP. We read pricing,
                  credit, and inventory from the system of record rather than copying them into the storefront, which is
                  what stops a dealer being quoted a price finance disagrees with or ordering stock you do not hold.
                </p>
                <ul style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
                  {[
                    'ERP: NetSuite, SAP S/4HANA and Business One, Epicor Kinetic and Prophet 21, Infor CloudSuite Industrial, Microsoft Dynamics 365 Business Central, Sage X3 and Intacct, Acumatica, IFS, QuickBooks Enterprise, Odoo',
                    'What we sync: part master and attributes, dealer account hierarchies, contract and tiered price lists, credit limits and terms, inventory by location, orders, invoices, shipment tracking',
                    'EDI: 850 purchase orders, 855 acknowledgements, 856 advance ship notices, 810 invoices',
                    'Punchout: cXML and OCI into Coupa, Ariba, Jaggaer, and Oracle procurement',
                    'PIM and product data: Akeneo, Salsify, Plytix, plus CAD, BIM, datasheet, and SDS document handling',
                    'WMS and 3PL: multi-warehouse availability, branch stock, and shipment status',
                    'Custom middleware where no direct connector exists',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who we build for'}</p>
            <h2 style={{ marginTop: '10px' }}>By manufacturing and distribution sector</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              The catalog rules differ sharply by sector. Here is how the build changes across the ones we know best.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {SEGMENTS.map((u) => (
                <li className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Not sure whether your product data is ready?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                That is the question that decides most manufacturer builds, and it is worth answering before anyone
                writes a proposal. We will look at your part master, pricing structure, and ERP and tell you what a
                realistic build looks like.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        {/* Comparison table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>Which platform fits a manufacturer or distributor</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Part count, configuration complexity, and ERP depth decide this far more than a feature checklist.</p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Platform</th><th>Best for</th><th>Trade-off</th><th>Our read</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="name">Shopify Plus</td>
                    <td>Clean admin, fast to launch, B2B built in</td>
                    <td>Variant ceilings on highly configurable products</td>
                    <td>Fits most dealer portals and distributor catalogues</td>
                  </tr>
                  <tr>
                    <td className="name">Adobe Commerce</td>
                    <td>Very large attribute-heavy catalogues</td>
                    <td>Hosting, patching and upgrades are yours</td>
                    <td>Fits deep technical catalogues and complex B2B rules</td>
                  </tr>
                  <tr>
                    <td className="name">BigCommerce</td>
                    <td>Strong B2B Edition at mid-market cost</td>
                    <td>Smaller app ecosystem</td>
                    <td>Good middle ground for distributors</td>
                  </tr>
                  <tr>
                    <td className="name">OroCommerce</td>
                    <td>Purpose-built for B2B and distribution</td>
                    <td>Smaller talent pool, heavier implementation</td>
                    <td>Worth considering for pure-play distribution</td>
                  </tr>
                  <tr>
                    <td className="name">NetSuite SuiteCommerce</td>
                    <td>Native to NetSuite ERP</td>
                    <td>Weaker storefront flexibility</td>
                    <td>Compelling only if NetSuite already runs the business</td>
                  </tr>
                  <tr>
                    <td className="name">Commerceflo</td>
                    <td>Unified catalogue, inventory and order engine</td>
                    <td>Newer platform</td>
                    <td>Where one engine across channels is the goal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>How we build it</h2>
            <ul className="pp-bento n4" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {/* People */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>Dealers, distributors, and the people serving them</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>Manufacturer portals are judged by the branch manager placing a reorder on a Tuesday morning.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/ecommerce-for-manufacturers-people-engineer-floor.webp" alt="A manufacturing engineer in safety glasses inspecting a machined component"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Configurable products enforce real engineering rules, not a guess at valid options.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img src="/images/us/commerce/ecommerce-for-manufacturers-people-dealer-desk.webp" alt="A parts counter specialist working with a technical binder and a parts catalogue"
                       width={1280} height={800} loading="lazy" decoding="async" />
                </div>
                <figcaption>Contract pricing is read live from the ERP, so quotes stop going out wrong.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="MANUFACTURER E-COMMERCE FAQ"
          headline="Questions manufacturers and distributors ask"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* Final CTA */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your dealer portal</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us your part count, how your dealer pricing works, and which ERP you run. We will tell you what
                  fits, what it takes, and what it costs, in a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a channel commerce audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Fixed proposal, no hourly billing surprises',
                    'Platform-agnostic: we recommend fit, not the most expensive option',
                    'You own the code, the data, and the platform accounts',
                    'Product data assessed before we quote, not after',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
