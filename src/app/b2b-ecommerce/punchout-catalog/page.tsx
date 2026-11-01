import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-10-31';
const PAGE_PUBLISHED = '2026-10-29';
const PAGE_MODIFIED_LABEL = new Date(`${PAGE_MODIFIED}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const PAGE_TITLE = 'Punchout Catalog Integration for Coupa & Ariba';
const CANONICAL_URL = 'https://factoryjet.com/b2b-ecommerce/punchout-catalog';

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | FactoryJet`,
  description:
    'Punchout catalog integration for B2B suppliers. cXML and OCI from Shopify Plus, BigCommerce or Adobe Commerce into Coupa, Ariba and Jaggaer, POs into your ERP.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: `${PAGE_TITLE} | FactoryJet`,
    description:
      'cXML and OCI punchout from your B2B store into Coupa, SAP Ariba, Jaggaer and Oracle, with contract pricing and purchase orders flowing into your ERP.',
    url: CANONICAL_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, punchout catalog development' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | FactoryJet`,
    description: 'cXML and OCI punchout from your B2B store into Coupa, SAP Ariba, Jaggaer and Oracle, with POs into your ERP.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ── Sources. Fetched and checked on 29 Oct 2026. ───────────────────────── */
const SRC_CXML = 'https://cxml.org/';
const SRC_COUPA = 'https://compass.coupa.com/en-us/products/product-documentation/supplier-resources/supplier-integration-resources/purchase-orders-and-punchouts/punchout-ordering';
const SRC_SHOPIFY_B2B = 'https://help.shopify.com/en/manual/b2b';
const SRC_COUPA_CART_FAIL = 'https://compass.coupa.com/en-us/products/product-documentation/supplier-resources/for-suppliers/integration-resources/purchase-orders-and-punchouts/punchout-failed-punchout-failed-to-return-a-cart';
const SRC_KOLONELL = 'https://kolonell.com/en/blog/punchout-catalog-integration-ariba-coupa-cost-2026';
/* Added 31 Oct 2026, each fetched that day. */
const SRC_SAP_PUNCHOUT = 'https://learning.sap.com/courses/loading-catalogs/working-with-punchout-catalogs_e7638548-6f70-4ffb-b4af-7b5e2171f867';
const SRC_ARIBA_STARTPAGE = 'https://support.ariba.com/item/view/124906_en';
const SRC_AMAZON_PUNCHOUT = 'https://business.amazon.com/en/find-solutions/punchout';
const SRC_TRADECENTRIC = 'https://tradecentric.com/';
const SRC_SHOPIFY_PUNCHOUT_APP = 'https://apps.shopify.com/punchout-cloud';

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Punchout Basics' },
  { key: 'protocols', label: 'cXML, OCI & Levels' },
  { key: 'platforms', label: 'Store Platforms' },
  { key: 'erp', label: 'Pricing & ERP' },
  { key: 'cost', label: 'Cost & Timeline' },
  { key: 'working', label: 'Working Together' },
];

/** Single source of truth for the FAQ. Feeds BOTH the visible <FAQ> component
 *  and the FAQPage JSON-LD below, so the schema can never drift from the page. */
const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is a punchout catalog?', answer: 'A punchout catalog lets a buyer shop your online store from inside their own procurement system, such as Coupa or SAP Ariba. They click your company name, land on your store already logged in, see their contract prices and build a cart. The cart goes back to their system as a requisition for approval. Once it is approved, a purchase order comes back to you.' },
  { category: 'basics', question: 'Why are our biggest customers asking us for punchout?', answer: 'Large companies send their spending through a procurement system so every purchase follows approval rules and budgets. If you are not inside that system, their buyers have to raise a manual request or pick a supplier who is. Punchout puts your catalog and your live prices inside their buying process, so ordering from you is as easy as ordering from anyone else on their approved list.' },
  { category: 'basics', question: 'What is a punchout supplier or punchout vendor?', answer: 'A punchout supplier, or punchout vendor, is a seller whose online store a buyer can open from inside their procurement system. The buyer\'s team adds you as a supplier, enters your punchout URL and credentials, and tests the round trip with you. After that, their staff see your company as a button in their buying screen. Distributors and manufacturers usually become punchout suppliers because a large customer asks them to.' },
  { category: 'basics', question: 'What is punchout in Amazon Business?', answer: 'Amazon Business is itself a punchout supplier. Its punchout page says buyers start in their e-procurement system, punch out to Amazon Business, and route the cart back for approval. Amazon says more than 200 e-procurement systems integrate with it. Your customers may already buy from Amazon this way. A punchout catalog on your store gives your products the same place in their buying screen.' },
  { category: 'basics', question: 'What are punchout items, and how are they different from hosted catalog items?', answer: 'Punchout items live on your own store. The buyer sees them only after punching out from their procurement system, so prices, stock and options are always current. Hosted catalog items, also called static catalog items, sit in a file you upload into the buyer\'s system. That file goes stale when prices or stock change, and you have to load it again. Many buyers accept both. Large or configurable catalogs suit punchout better.' },
  { category: 'basics', question: 'Do we still need our normal B2B store if we add punchout?', answer: 'Yes, in most cases. Punchout serves the buyers who purchase through a procurement system. Smaller accounts, field buyers and quick reorders often still come through your trade portal, by EDI (electronic data interchange, a direct system-to-system order feed) or through a sales rep. We build punchout on top of the store you already run, so every route uses the same catalog, the same contract prices and the same inventory.' },
  { category: 'protocols', question: 'What is cXML?', answer: 'cXML, short for Commerce XML, is a shared format for sending business documents between procurement systems and suppliers. It defines the messages for a punchout session, the returned cart and the purchase order, plus later documents such as order confirmations, ship notices and invoices. Coupa, SAP Ariba and Jaggaer all use it. The specification is published at cxml.org, which listed version 1.2.071 in August 2026.' },
  { category: 'protocols', question: 'What is OCI punchout?', answer: 'OCI stands for Open Catalog Interface. It is SAP\'s own punchout method, used mostly by companies buying through SAP procurement tools. The buyer\'s system opens your store with a return address called the HOOK_URL. When the buyer finishes shopping, your store posts the cart back to that address as a set of form fields. The purchase order then usually reaches you by another route, such as email, EDI or cXML.' },
  { category: 'protocols', question: 'What is the difference between Level 1 and Level 2 punchout?', answer: 'With Level 1, the buyer clicks your company name in their procurement system and lands on your store\'s home page or a chosen category. With Level 2, your items are searchable inside the buyer\'s system, and a click takes them straight to that product on your store. Level 2 needs an item index file that stays up to date, so it takes more work. Some buyers ask for Level 2 from the start.' },
  { category: 'protocols', question: 'How do we set up an Ariba punchout catalog as a supplier?', answer: 'Your customer adds you as a supplier on SAP Business Network. You give them a punchout URL that answers cXML setup requests. SAP\'s training material says a Level 1 catalog needs a static index file, often a single comma-separated line, while Level 2 needs one line per item. Each setup response must return a 200 status code and a StartPage URL, per an SAP Ariba support note. Then you run the buyer\'s tests together.' },
  { category: 'protocols', question: 'Which procurement systems can you connect our store to, and should we build cXML or OCI first?', answer: 'We connect B2B stores to Coupa, SAP Ariba, Jaggaer and Oracle procurement through their cXML punchout interfaces, and to SAP buying tools that use OCI. Build the method your first customer asks for. Their supplier enablement guide names the system and the method. Login mapping, contract prices and the order flow into your ERP are shared by both, so the second method costs less than the first.' },
  { category: 'platforms', question: 'Can Shopify Plus support punchout?', answer: 'Yes. Shopify B2B gives you companies, catalogs with pricing set per customer, and payment terms, but punchout is not part of it out of the box. We add it with a punchout connector or a custom app. That piece answers the setup request, logs the buyer into the right Shopify company, and sends the finished cart back to their procurement system in the format it expects.' },
  { category: 'platforms', question: 'Can BigCommerce B2B Edition do punchout?', answer: 'Yes, with a connector. BigCommerce B2B Edition handles company accounts, buyer roles, quotes and price lists. Punchout is added through a partner connector or custom code. We set up that layer, map each procurement login to a B2B Edition company, and make sure the returned cart carries the right part numbers, units of measure and contract prices so the purchase order matches.' },
  { category: 'platforms', question: 'Can you add punchout to Adobe Commerce (Magento)?', answer: 'Yes. Adobe Commerce has company accounts, shared catalogs and requisition lists, which map well to punchout buyers. Punchout itself comes from an extension or a custom module. We build or configure that module, connect it to shared catalogs so each buyer sees their contract prices, and test the full round trip with your customer before go-live.' },
  { category: 'platforms', question: 'Should we use a punchout connector app or a custom build?', answer: 'A connector app is the fastest start if your platform has one and your customer\'s system is on its list. Shopify\'s app store, for example, lists punchout apps sold as monthly subscriptions. A custom build suits unusual pricing rules, an older store, or a buyer test script the app cannot pass, and you own the code. We read your customer\'s requirements first and tell you which one fits.' },
  { category: 'platforms', question: 'We run a custom or older store. Can punchout still work?', answer: 'Yes. Punchout only needs your store to accept a setup request, start a logged-in session and send a cart back in the right format. We can build that as a small service that sits beside a custom or older store. If the store is due for replacement anyway, we can plan punchout into the new build so you only pay for it once.' },
  { category: 'erp', question: 'How do punchout orders get into our ERP?', answer: 'After the buyer approves the requisition, their system sends a purchase order, usually a cXML OrderRequest. We receive it, check it against the cart that was returned, and create the sales order in your ERP, such as NetSuite, SAP Business One, Dynamics 365 Business Central, Acumatica or Odoo. Order confirmations, ship notices and invoices can flow back to the buyer the same way.' },
  { category: 'erp', question: 'How do contract prices show up for each punchout buyer?', answer: 'Each punchout login carries the buyer\'s company identity. We map that identity to the right customer account in your store, which reads contract prices from your ERP or your price lists. The buyer sees only their agreed prices and approved items. The same prices are written into the returned cart, so the purchase order matches what the buyer saw on screen.' },
  { category: 'erp', question: 'What usually goes wrong in a punchout project?', answer: 'Small data mismatches. Units of measure are a common one: Coupa\'s own troubleshooting guide for a cart that fails to return tells admins to check that the right units of measure are enabled. Others are missing classification codes such as UNSPSC (a standard code for each type of product), a shared secret (the password the buyer\'s system sends with each request) entered wrong, and prices that differ between the cart and the purchase order. We test each of these with the buyer before go-live.' },
  { category: 'erp', question: 'Can punchout run alongside EDI?', answer: 'Yes. Many suppliers use both: punchout for shopping and the cart, and EDI for purchase orders, ship notices and invoices with customers who prefer it. We make sure both routes write to the same order and stock records in your ERP, so a punchout order and an EDI order look the same to your warehouse and your finance team.' },
  { category: 'cost', question: 'How much does punchout catalog integration cost?', answer: 'It depends on the procurement system, the level and your ERP. As one market reference, Kolonell, a remote web studio that builds punchout connectors, published a range of EUR 12,000 to 35,000 excl. VAT per procurement platform on 8 October 2026, with Level 1 cXML at the low end and Level 2 at the high end. That is a euro price, not a US quote. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'How long does a punchout integration take?', answer: 'Kolonell\'s October 2026 guide puts one procurement platform at 6 to 12 weeks, including 2 to 4 weeks of testing with the customer. The buyer\'s supplier enablement team sets the test dates, so we agree a plan with them early. A second customer on a system you already connect to is much faster, because the connector, pricing and ERP order flow already exist.' },
  { category: 'working', question: 'What do you need from us to scope a punchout project, and will you work with our customer\'s team?', answer: 'Send the supplier enablement guide or RFP your customer sent, the name of their procurement system, your store platform, your ERP, and how you set contract prices today. With those, we tell you which method you need and what has to be built. During testing, we can join calls with your customer\'s procurement team and work through their checklist, while you keep the customer relationship and the commercial terms.' },
  { category: 'working', question: 'Can we add more customers after the first one goes live?', answer: 'Yes. Once the connector for a procurement system is built, each new customer on that system mostly needs their own credentials, a company account and a contract price list, plus a round of testing with their team. A second procurement system reuses the login mapping, pricing rules and ERP order flow from the first one.' },
  { category: 'working', question: 'Who owns the punchout code when the project ends?', answer: 'You do. You own the code and the repository from day one. Hosting and any connector apps can run in your own accounts at cost, with no markup. Defects found after launch are fixed inside the build price for a cover period we agree before work starts. Support after that is optional, each change is quoted and approved, and there is no monthly minimum.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Punchout catalog development',
  name: 'Punchout catalog development and integration (cXML and OCI)',
  description:
    'Punchout catalog development for distributors and manufacturers. We build cXML and OCI punchout from Shopify Plus, BigCommerce B2B Edition, Adobe Commerce or custom stores into Coupa, SAP Ariba, Jaggaer, Oracle and SAP procurement, with contract pricing per buyer and purchase orders flowing into the ERP.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'Distributors and manufacturers selling to enterprise buyers' },
};

/** Single source of truth for the project steps. Feeds BOTH the visible
 *  numbered list and the HowTo JSON-LD below. */
const STEPS = [
  { n: '01', t: 'Read your customer\'s requirements', d: 'We go through the supplier enablement guide or RFP your customer sent: which procurement system, cXML or OCI, Level 1 or Level 2, which documents they expect back, and their test dates.' },
  { n: '02', t: 'Map accounts, prices and item data', d: 'We match each procurement identity to a company account in your store, confirm where contract prices live, and check units of measure, part numbers and classification codes against what the buyer\'s system accepts.' },
  { n: '03', t: 'Show it working on your data, then fix the price', d: 'Before you sign, you see a test punchout session open your own catalog with a sample buyer\'s prices. Then you get the scope and one fixed price in writing, paid in stages tied to milestones.' },
  { n: '04', t: 'Build the punchout connector', d: 'We build or configure the piece that answers the setup request, logs the buyer in, and returns the cart as a cXML PunchOutOrderMessage or an OCI form post.' },
  { n: '05', t: 'Connect purchase orders to your ERP', d: 'Incoming purchase orders become sales orders in your ERP. Where the buyer wants them, order confirmations, ship notices and invoices go back the same way.' },
  { n: '06', t: 'Test with the buyer and go live', d: 'We run the buyer\'s test script with their procurement team, fix what surfaces, and switch on production credentials. Defects after launch are fixed inside the build price for the agreed cover period.' },
];

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds a punchout catalog integration',
  description: 'Our step-by-step process for a punchout catalog project: requirements, account and price mapping, a working demo on your data, connector build, ERP order flow, and buyer testing.',
  step: STEPS.map((s, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: s.t,
    text: s.d,
  })),
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: 'cXML and OCI punchout catalog development from B2B stores into Coupa, SAP Ariba, Jaggaer, Oracle and SAP procurement, with contract pricing and purchase orders into the ERP.',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & CEO',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'B2B E-Commerce', url: 'https://factoryjet.com/b2b-ecommerce' },
  { name: 'Punchout Catalog', url: CANONICAL_URL },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const STATS = [
  { b: 'cXML + OCI', s: 'both punchout methods' },
  { b: 'Coupa · Ariba', s: 'plus Jaggaer, Oracle and SAP' },
  { b: '4 store types', s: 'Shopify Plus, BigCommerce, Adobe, custom' },
  { b: 'PO to ERP', s: 'orders land as sales orders' },
];

/** The punchout round trip, as Coupa's own supplier documentation describes it. */
const ROUND_TRIP = [
  { t: 'Setup request', d: 'The buyer clicks your company inside their procurement system. It sends your store a PunchOutSetupRequest, a cXML message that says who the buyer is.' },
  { t: 'Setup response', d: 'Your store checks the credentials and replies with a one-time address. The buyer lands on your store, logged in to their company account.' },
  { t: 'Shopping', d: 'The buyer searches, sees their contract prices and stock, and builds a cart on your live catalog.' },
  { t: 'Cart return', d: 'At checkout, your store sends the cart back as a PunchOutOrderMessage. Nothing is ordered yet.' },
  { t: 'Approval', d: 'The cart becomes a requisition in the buyer\'s system and follows their approval rules and budgets.' },
  { t: 'Purchase order', d: 'Once approved, their system sends an OrderRequest, the purchase order, which we turn into a sales order in your ERP.' },
];

const PROTOCOLS = [
  { name: 'cXML Level 1', who: 'Coupa, SAP Ariba, Jaggaer, Oracle', how: 'Buyer clicks your name, lands on your store home page or a chosen category', order: 'cXML OrderRequest' },
  { name: 'cXML Level 2', who: 'Buyers who want your items in their own search', how: 'Your items are indexed in their system; a click opens that exact product', order: 'cXML OrderRequest' },
  { name: 'OCI', who: 'SAP procurement tools', how: 'Store opens with a HOOK_URL; cart posts back as form fields', order: 'Often email, EDI (a direct system-to-system order feed) or cXML' },
];

const BUILD = [
  { t: 'Setup and login', d: 'We answer the setup request, check the shared secret (a password the buyer\'s system sends with each request), and open a session tied to the right company account and buyer.' },
  { t: 'Contract pricing per buyer', d: 'Each buyer sees the prices, items and minimums in their contract, read from your ERP or price lists.' },
  { t: 'Cart return', d: 'Carts go back with part numbers, units of measure, classification codes and prices in the format the buyer\'s system expects.' },
  { t: 'Purchase order intake', d: 'Incoming OrderRequests are checked against the returned cart, then created as sales orders in your ERP.' },
  { t: 'Order documents back', d: 'Order confirmations, ship notices and invoices returned over cXML where your customer asks for them.' },
  { t: 'Level 2 item index', d: 'An item file kept in step with your catalog so your products show up inside the buyer\'s own search.' },
  { t: 'Multi-customer setup', d: 'Credentials, company accounts and price lists per customer, so adding the next account is a short job.' },
  { t: 'Test and monitoring logs', d: 'A log of every setup request, cart and order, so a failed session can be traced fast.' },
];

const PLATFORMS = [
  { t: 'Shopify Plus', d: 'Shopify B2B companies and catalogs hold the buyer and their prices. We add punchout with a connector or a custom app and keep checkout rules intact.', href: '/services/shopify-plus-b2b', link: 'Shopify Plus B2B' },
  { t: 'BigCommerce B2B Edition', d: 'Company accounts, buyer roles and price lists carry over. We add the punchout layer through a partner connector or custom code.', href: '/services/bigcommerce-b2b', link: 'BigCommerce B2B' },
  { t: 'Adobe Commerce (Magento)', d: 'Shared catalogs and company accounts map well to punchout buyers. We build or configure the punchout module and test it end to end.', href: '/services/magento-development', link: 'Adobe Commerce development' },
  { t: 'Custom or older stores', d: 'A small punchout service sits beside your store and reads its catalog and contract prices. Or we plan it into a rebuild.', href: '', link: '' },
];

const SOURCED = [
  { v: '1.2.071', d: 'The cXML version listed on cxml.org in August 2026. cXML is the format Coupa, SAP Ariba and Jaggaer use for punchout, purchase orders and invoices.', src: 'cxml.org', href: SRC_CXML },
  { v: 'EUR 12K to 35K', d: 'Market range for one procurement platform connector, in euros excl. VAT, from Kolonell\'s 8 October 2026 guide. Kolonell is a remote studio, so treat this as a euro reference, not a US quote. Level 1 cXML sits at the low end, Level 2 at the high end. Not a FactoryJet price.', src: 'Kolonell, Oct 2026', href: SRC_KOLONELL },
  { v: '6 to 12 weeks', d: 'Time for one procurement platform in the same guide, including 2 to 4 weeks of testing with the customer\'s team.', src: 'Kolonell, Oct 2026', href: SRC_KOLONELL },
];

const CONNECTOR_OPTIONS = [
  { name: 'Punchout app from your platform\'s app store', example: 'Punchout Cloud on the Shopify App Store lists cXML and OCI, with Ariba, Coupa, Jaggaer and Oracle', pay: 'Monthly subscription, per the listing', fits: 'Your platform has an app and your customer\'s system is on its list', src: SRC_SHOPIFY_PUNCHOUT_APP, srcLabel: 'Shopify App Store listing' },
  { name: 'Punchout network vendor', example: 'TradeCentric says it connects 75+ ecommerce platforms to 220+ ERP and eprocurement systems', pay: 'Quoted by the vendor', fits: 'You want a third party to run the connection for many buyers', src: SRC_TRADECENTRIC, srcLabel: 'tradecentric.com' },
  { name: 'Custom build', example: 'A punchout service written for your store, your price rules and your ERP', pay: 'Fixed build price; hosting in your account at cost', fits: 'Unusual pricing, an older store, or a test script an app cannot pass', src: '', srcLabel: '' },
];

const TERMS = [
  { t: 'A working draft before you sign', d: 'You see a test punchout session open your own catalog with a sample buyer\'s prices before any contract.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. Payments are tied to milestones.' },
  { t: 'You own the code', d: 'The code and repository are yours from day one. Hosting and connector apps can run in your accounts at cost, with no markup.' },
  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed inside the build price for a cover period we agree before work starts.' },
  { t: 'Support only if you want it', d: 'After that, each change is quoted and approved before we do it. There is no monthly minimum.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const linkStyle = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;

export default function PunchoutCatalogPage() {
  return (
    <>
      <script id="punchout-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="punchout-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="punchout-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="punchout-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="punchout-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="punchout-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ── Hero ── */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">B2B e-commerce · Punchout</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Punchout catalog development for distributors and manufacturers.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  A large customer has told you they only buy through Coupa, SAP Ariba, Jaggaer or Oracle, and they
                  want your punchout URL. We build cXML and OCI punchout from your Shopify Plus, BigCommerce B2B,
                  Adobe Commerce or custom store into their procurement system, with their contract prices on screen
                  and their purchase orders landing in your ERP.
                </p>
                <p style={{ margin: '0 0 18px', fontFamily: 'var(--pp-mono)', fontSize: '12px', color: 'var(--pp-muted)' }}>
                  By{' '}
                  <a href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-muted)', textDecoration: 'underline' }}>Bhavesh Barot</a>
                  , Founder &amp; CEO · Updated <time dateTime={PAGE_MODIFIED}>{PAGE_MODIFIED_LABEL}</time>
                </p>
                <HeroInlineForm source="us_punchout_hero" region="us" submitLabel="Send my punchout brief"
                  service="Punchout Catalog Development"
                  trustText="Working software on your own data before you sign. Bhavesh replies within 24 hours."
                />
              </div>
              <div className="pp-stage" role="img" aria-label="A punchout session: a buyer opens a supplier store from Coupa, sees contract prices, and returns the cart for approval.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /><span style={{ marginLeft: 'auto', fontFamily: 'var(--pp-mono)', fontSize: '10px', color: 'var(--pp-muted)' }}>Example session</span></div>
                  <div className="body">
                    <div className="row"><span className="k">PunchOutSetupRequest</span><span className="v">from Coupa</span></div>
                    <div className="row"><span className="k">Buyer · Acme Facilities</span><span className="v">contract prices</span></div>
                    <div className="row win"><span className="k">Cart returned · 14 lines</span><span className="v">for approval</span></div>
                    <div className="row"><span className="k">OrderRequest · PO</span><span className="v">to ERP</span></div>
                    <div className="row"><span className="k">ShipNotice · cXML</span><span className="v">back to buyer</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />cXML or OCI</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />PO in ERP</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat band ── */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Answer first ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// the short answer</p>
                <h2 style={{ marginTop: '10px' }}>What is a punchout catalog?</h2>
                <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
                  <p>
                    A punchout catalog lets a buyer shop your live B2B store from inside their company&apos;s procurement
                    system. They click your name in Coupa or SAP Ariba, land on your store already logged in, see their
                    contract prices, and send the cart back for approval. The approved purchase order then comes to you.
                  </p>
                  <p>
                    For the buyer, you become as easy to order from as any supplier already on their approved list. For
                    you, the order arrives with the right prices and part numbers, ready to become a sales order in your
                    ERP.
                  </p>
                  <p>
                    Buyers and their eprocurement teams also call this punchout ecommerce, and the store they open is your
                    punchout website. We build and test the link between that store, your customer&apos;s procurement
                    system and your ERP. Then we hand it over. You own the code.
                  </p>
                </div>
              </div>
              <AnswerFirstDefinition
                term="Punchout catalog"
                definition="A punchout catalog is a supplier's live online store opened from inside a buyer's procurement system (Coupa, SAP Ariba, Jaggaer, Oracle or SAP). The buyer shops with contract prices, the cart returns to their system as a requisition for approval, and the approved purchase order is sent back to the supplier, usually over cXML or SAP's OCI."
                keyTakeaways={[
                  'cXML for Coupa, SAP Ariba and Jaggaer; OCI for SAP procurement tools',
                  'Level 1 opens your store; Level 2 puts your items inside the buyer\'s own search',
                  'Purchase orders flow into your ERP as sales orders',
                ]}
                citationSource="FactoryJet, from Coupa supplier documentation and cxml.org (Oct 2026)"
              />
            </div>
          </div>
        </section>

        {/* ── Round trip ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how punchout works</p>
            <h2 style={{ marginTop: '10px' }}>The punchout round trip, in six steps</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              This is the flow{' '}
              <a href={SRC_COUPA} target="_blank" rel="noopener noreferrer" style={linkStyle}>Coupa&apos;s supplier documentation</a>{' '}
              describes, and SAP Ariba and Jaggaer work the same way over cXML. The message names come from the{' '}
              <a href={SRC_CXML} target="_blank" rel="noopener noreferrer" style={linkStyle}>cXML specification</a>. When
              a cart fails to come back, Coupa&apos;s{' '}
              <a href={SRC_COUPA_CART_FAIL} target="_blank" rel="noopener noreferrer" style={linkStyle}>troubleshooting guide</a>{' '}
              tells admins to check that the right units of measure are enabled. Amazon Business sells to the same
              buyers this way:{' '}
              <a href={SRC_AMAZON_PUNCHOUT} target="_blank" rel="noopener noreferrer" style={linkStyle}>its punchout page</a>{' '}
              says buyers start in their e-procurement system and route the cart back for approval.
            </p>
            <ol className="pp-bento" style={{ marginTop: '36px' }}>
              {ROUND_TRIP.map((r, i) => (
                <li className="pp-card" key={r.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '15px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{r.t}</h3><p>{r.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Protocols table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// cXML, OCI and levels</p>
            <h2 style={{ marginTop: '10px' }}>cXML vs OCI, Level 1 vs Level 2</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              Your customer picks the method. Their supplier enablement guide will name the procurement system and
              the level they expect. Here is what each one means for your store.
            </p>
            <p className="md:hidden" style={{ marginTop: '20px', fontFamily: 'var(--pp-mono)', fontSize: '12px', color: 'var(--pp-muted)' }}>Swipe sideways to see every column.</p>
            <div style={{ marginTop: '28px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="pp-table" style={{ minWidth: '720px' }}>
                <thead>
                  <tr><th>Method</th><th>Used by</th><th>How the buyer reaches you</th><th>How the PO arrives</th></tr>
                </thead>
                <tbody>
                  {PROTOCOLS.map((r) => (
                    <tr key={r.name}>
                      <td className="name">{r.name}</td>
                      <td>{r.who}</td>
                      <td>{r.how}</td>
                      <td>{r.order}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Coupa and Ariba setup ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// supplier setup by system</p>
            <h2 style={{ marginTop: '10px' }}>Coupa punchout and SAP Ariba punchout setup for suppliers</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              Each procurement system has its own supplier steps. Here is what the vendors&apos; own documentation
              says, checked on 31 Oct 2026.
            </p>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '16px' }}>
              <article className="pp-card">
                <h3>Coupa punchout</h3>
                <p style={{ marginTop: '10px' }}>
                  Per{' '}
                  <a href={SRC_COUPA} target="_blank" rel="noopener noreferrer" style={linkStyle}>Coupa&apos;s punchout ordering guide</a>,
                  Coupa sends your store a PunchoutSetupRequest with the user&apos;s details. Your store logs them in and
                  replies with a landing page URL. At checkout, your store sends a PunchoutOrderMessage, and the items
                  land on the buyer&apos;s requisition. After approval, Coupa sends an OrderRequest. The same guide lists
                  the common setup errors, such as a wrong URL, a login failure and no cart returned.
                </p>
              </article>
              <article className="pp-card">
                <h3>SAP Ariba punchout</h3>
                <p style={{ marginTop: '10px' }}>
                  Per{' '}
                  <a href={SRC_SAP_PUNCHOUT} target="_blank" rel="noopener noreferrer" style={linkStyle}>SAP&apos;s training on punchout catalogs</a>,
                  the buyer&apos;s request goes through SAP Business Network, which checks the buying company and passes it
                  to your store. The catalog stays on your site and is not uploaded. Level 1 needs a static index file;
                  Level 2 needs one line per item. An{' '}
                  <a href={SRC_ARIBA_STARTPAGE} target="_blank" rel="noopener noreferrer" style={linkStyle}>SAP Ariba support note</a>{' '}
                  says every setup response must carry a 200 status code and a StartPage URL.
                </p>
              </article>
              <article className="pp-card">
                <h3>Jaggaer, Oracle and SAP OCI</h3>
                <p style={{ marginTop: '10px' }}>
                  Jaggaer and Oracle customers send their own supplier guide, which names the messages and the test
                  steps they expect. Customers on SAP&apos;s own buying tools often ask for OCI instead, where the cart
                  goes back as form fields to a HOOK_URL. We read the guide your customer sent before we quote.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── What we build ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>Eight parts of a punchout integration we build</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '60ch' }}>Your customer&apos;s test script checks each of these eight pieces, not only the punchout URL.</p>
            <ul className="pp-bento n8" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {BUILD.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)', fontSize: '15px' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── By platform ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-erp-integration.webp"
                  alt="Dashboards showing a B2B store connected to procurement, ERP and inventory systems"
                  width={600}
                  height={480}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">// store platforms</p>
                <h2 style={{ marginTop: '10px' }}>Punchout on the store you already run</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  On most B2B platforms, punchout is an add-on.{' '}
                  <a href={SRC_SHOPIFY_B2B} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify&apos;s B2B documentation</a>, for example,
                  covers companies and per-customer catalogs, and punchout is added on top. We keep the account and pricing
                  rules you already have and add the punchout layer to them.
                </p>
                <ul style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
                  {PLATFORMS.map((p) => (
                    <li key={p.t} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      <span>
                        <strong style={{ color: 'var(--pp-ink)' }}>{p.t}.</strong> {p.d}
                        {p.href ? (
                          <>
                            {' '}See{' '}
                            <Link href={p.href} style={linkStyle}>{p.link}</Link>.
                          </>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Connector vs custom ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// connector or custom</p>
            <h2 style={{ marginTop: '10px' }}>Punchout connector app vs custom build</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              There are three ways to add punchout to a store. The examples below are named from each vendor&apos;s own
              page, checked on 31 Oct 2026.
            </p>
            <p className="md:hidden" style={{ marginTop: '20px', fontFamily: 'var(--pp-mono)', fontSize: '12px', color: 'var(--pp-muted)' }}>Swipe sideways to see every column.</p>
            <div style={{ marginTop: '28px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="pp-table" style={{ minWidth: '720px' }}>
                <thead>
                  <tr><th>Option</th><th>Example</th><th>How you pay</th><th>Fits when</th></tr>
                </thead>
                <tbody>
                  {CONNECTOR_OPTIONS.map((r) => (
                    <tr key={r.name}>
                      <td className="name">{r.name}</td>
                      <td>
                        {r.example}
                        {r.src ? (
                          <>
                            {' '}(<a href={r.src} target="_blank" rel="noopener noreferrer" style={linkStyle}>{r.srcLabel}</a>)
                          </>
                        ) : null}
                      </td>
                      <td>{r.pay}</td>
                      <td>{r.fits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* MidPage CTA */}
        <MidPageCTA
          headline="Find out which punchout method your customer needs"
          sub="Send us their supplier enablement guide. We will tell you which method they need, what your store already covers, and what has to be built."
          label="Talk to the founder"
        />

        {/* ── Send your brief ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px' }}>
            <p className="pp-mlabel">// send us your brief or RFP</p>
            <h2 style={{ marginTop: '10px' }}>Send us your customer&apos;s brief or RFP</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              Most punchout projects start with a document from the customer: a supplier enablement guide, a vendor
              onboarding pack or an RFP with a punchout section. Send it to us with four facts and we will reply with
              a plan.
            </p>
            <ol style={{ marginTop: '20px', display: 'grid', gap: '12px', paddingLeft: '20px', listStyle: 'decimal' }}>
              {[
                'The customer\'s procurement system, and cXML or OCI if they said.',
                'Your store platform: Shopify Plus, BigCommerce, Adobe Commerce or custom.',
                'Your ERP, and where contract prices live today.',
                'The customer\'s go-live or test date, if they gave one.',
              ].map((c) => (
                <li key={c} style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>{c}</li>
              ))}
            </ol>
            <div className="rv-actions" style={{ marginTop: '24px' }}>
              <ModalCTAButton label="Send my punchout brief" region="us" btnVariant="primary-dark" />
            </div>
            </div>
          </div>
        </section>

        {/* ── Market cost ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what the market charges</p>
            <h2 style={{ marginTop: '10px' }}>Punchout integration cost and timeline</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              These are published market figures, not FactoryJet prices. FactoryJet quotes a fixed price in writing
              after a short scoping call, once we have read your customer&apos;s requirements.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '30px', lineHeight: 1, color: 'var(--pp-orange-dark)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <p style={{ marginTop: '10px' }}>{s.d}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '12px', display: 'inline-block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}>Source: {s.src}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how a project runs</p>
            <h2 style={{ marginTop: '10px' }}>How a punchout project runs</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Six steps, from the customer&apos;s requirements document to the first live purchase order in your ERP.
            </p>
            <div style={{ marginTop: '32px', display: 'grid', gap: '0', maxWidth: '760px' }}>
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: 'flex', gap: '16px', paddingBottom: i < STEPS.length - 1 ? '28px' : '0', position: 'relative' }}>
                  {i < STEPS.length - 1 && (
                    <div aria-hidden="true" style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '2px', background: 'var(--pp-line)' }} />
                  )}
                  <div style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--pp-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</span>
                  </div>
                  <div style={{ paddingTop: '4px' }}>
                    <h3 style={{ fontFamily: 'var(--pp-display)', fontWeight: 700, fontSize: '16px', color: 'var(--pp-ink)', margin: 0 }}>{s.t}</h3>
                    <p style={{ marginTop: '4px', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--pp-body)' }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── House terms ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// how we work</p>
            <h2 style={{ marginTop: '10px' }}>Punchout project terms: fixed price per phase, no monthly minimum</h2>
            <ul className="pp-bento n5" style={{ marginTop: '36px' }}>
              {TERMS.map((t) => (
                <li className="pp-card" key={t.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{t.t}</h3><p>{t.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Related B2B work ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// select client work</p>
            <h2 style={{ marginTop: '10px' }}>B2B account pricing and ERP work that punchout builds on</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              Punchout depends on the same pieces as any B2B store: company accounts, contract prices and orders that
              land in the ERP. Two B2B builds with that work, one live and one in progress:
            </p>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '16px' }}>
              <article className="pp-card">
                <p className="pp-mlabel">GPSUK · Commerceflo</p>
                <h3>Account pricing for trade buyers</h3>
                <p className="pp-lead" style={{ marginTop: '16px', fontSize: '15px' }}>A Commerceflo storefront for a UK promotional products supplier, with account-based pricing and quote-to-order workflows for customers buying against agreed terms.</p>
                <Link href="/case-studies/gpsuk-promotional-products" className="rv-btn-secondary" style={{ marginTop: '18px' }}>Read the GPSUK case study →</Link>
              </article>
              <article className="pp-card">
                <p className="pp-mlabel">Sow Easy · WooCommerce + Odoo</p>
                <h3>Trade store connected to Odoo (in progress)</h3>
                <p className="pp-lead" style={{ marginTop: '16px', fontSize: '15px' }}>WooCommerce ordering for a distributor, being connected to Odoo so trade orders and stock live in one place instead of two. Being tested on staging before launch.</p>
                <Link href="/case-studies/sow-easy-distributor-portal" className="rv-btn-secondary" style={{ marginTop: '18px' }}>Read the Sow Easy case study →</Link>
              </article>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="PUNCHOUT CATALOG FAQ"
          headline="Questions suppliers ask before building punchout."
          lead="Plain answers to what distributors and manufacturers ask when a customer wants them on Coupa, SAP Ariba, Jaggaer or Oracle."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── CTA ── */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ maxWidth: '22ch' }}>Get on your customer&apos;s approved supplier list</h2>
              <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                Send us the punchout requirements your customer gave you. We will map the method, your store and your
                ERP, show it working on your own catalog, and send a fixed proposal before any work starts.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: '#B23E13', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}
                >
                  Talk to the founder
                </a>
                <ModalCTAButton label="Send my punchout brief" region="us" btnVariant="secondary-light" />
              </div>
              <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
                Related:{' '}
                <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce development</Link>,{' '}
                <Link href="/services/ecommerce-erp-integration" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>ERP integration</Link>, and{' '}
                <Link href="/services/shopify-edi-integration" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>EDI integration for Shopify</Link>.
              </p>
            </div>
            <div style={{ border: '1px solid var(--pp-line)', borderRadius: '20px', padding: '28px', background: '#fff', boxShadow: '0 12px 32px -16px rgba(20,17,15,0.18)' }}>
              <p style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em', color: 'var(--pp-ink)', margin: 0 }}>Why suppliers choose FactoryJet</p>
              <p style={{ marginTop: '8px', fontFamily: 'var(--pp-mono)', fontSize: '11px' }}>
                <a href="/case-studies" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>See real, named client case studies →</a>
              </p>
              <div style={{ margin: '20px 0', borderTop: '1px solid var(--pp-line)' }} />
              {[
                'Working draft on your own catalog before you sign',
                'Fixed price per phase, quoted in writing; changes quoted and approved per request',
                'You own the code and the repository from day one',
                'Decade-plus building commerce, B2B included',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ flex: 'none', marginTop: '2px', width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(240,90,40,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pp-orange-dark)' }}>{checkIcon}</div>
                  <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--pp-body)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
