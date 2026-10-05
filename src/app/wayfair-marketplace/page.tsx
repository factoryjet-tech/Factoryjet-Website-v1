import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

import WayfairOrderFlow from './WayfairOrderFlow';

/* ─────────────────────────────────────────────────────────────────────────────
   /wayfair-marketplace, built 2026-10-05.

   Why this page exists: narrow pages that name one sales channel and make one
   clear offer were the only pages that produced US buyer leads in the week
   before this was written, and Wayfair had no page on the site. US monthly
   searches (DataForSEO, 2026-10-05): "selling on wayfair" 260, "sell on
   wayfair" 210, "wayfair dropship" 140, "how to sell on wayfair" 90, "wayfair
   supplier" 70. The live top 10 is Wayfair's own pages, Reddit, Quora and
   small sites, with an AI Overview and no Maps pack.

   Truth rules for anyone editing this file:
   - Every statement about Wayfair comes from a Wayfair page read on
     2026-10-05. The four linked on the page are in WAYFAIR_FACTS below. The
     rest are the sell.wayfair.com home page FAQ, its "Ship Fast & Reliably"
     page, and developer.wayfair.io (home, API and EDI introductions, the
     dropship orders guide). The developer portal renders with JavaScript, so
     check it in a browser, not with curl. If Wayfair changes a rule, change the sentence and PAGE_MODIFIED
     together.
   - No FactoryJet client is named and no Wayfair result is claimed. We had no
     confirmed Wayfair client when this was written. Say what we do, never
     what we have done there.
   - No FactoryJet prices. The dollar figures in the comparison table are the
     retailers' own published seller fees.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. FAQPage mainEntity is
   built from the same FAQ_ITEMS array the visible <FAQ> renders, and the
   Service offer catalog is built from the same SERVICES array as the tiles.
   There is no second hand-written list of either.

   Static server component throughout, apart from the shared client widgets
   every page reuses (HeroInlineForm, and ModalCTAButton inside FinalCTA).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/wayfair-marketplace';
const PAGE_TITLE = 'Sell on Wayfair | Supplier Setup and Management | FactoryJet';
const PAGE_DESC =
  'Sell on Wayfair with FactoryJet. We handle the supplier application, catalog and product data, inventory feeds, EDI or API order links, and ongoing management.';
const PAGE_PUBLISHED = '2026-10-05';
const PAGE_MODIFIED = '2026-10-05';
const SOURCES_READ = '5 October 2026';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'sell on wayfair',
    'selling on wayfair',
    'how to sell on wayfair',
    'wayfair supplier',
    'wayfair seller',
    'wayfair vendor',
    'wayfair dropship',
    'wayfair marketplace',
    'wayfair partner home',
    'wayfair edi',
    'wayfair api integration',
    'wayfair shopify integration',
    'wayfair castlegate',
    'wayfair agency',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet Wayfair supplier setup and management' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Marketplaces', url: 'https://factoryjet.com/marketplace-management' },
  { name: 'Sell on Wayfair', url: CANONICAL_URL },
];

/* ── Facts from Wayfair's own supplier pages. Each was read in the raw HTML on
   2026-10-05 and each card links to the page that holds the sentence. ── */
const WAYFAIR_FACTS = [
  {
    value: 'A few days',
    label:
      'Wayfair\'s stated onboarding time for most suppliers who have product data, business documents and warehouse details ready. Otherwise, 2 to 3 weeks.',
    sourceUrl: 'https://sell.wayfair.com/onboarding-checklist',
    sourceLabel: 'New Supplier Onboarding checklist, Wayfair',
  },
  {
    value: 'Net 60',
    label:
      'Wayfair pays within 60 days of the invoice date. Quick Pay pays within 30 days for a 2% fee.',
    sourceUrl: 'https://sell.wayfair.com/start-beginners-guide',
    sourceLabel: 'Beginner\'s Guide, Wayfair',
  },
  {
    value: 'API or EDI',
    label:
      'Wayfair\'s two automated links for orders and inventory. The API works in real time and EDI at regular intervals. You can also work by hand in the portal.',
    sourceUrl: 'https://sell.wayfair.com/operate-manage-orders',
    sourceLabel: 'Manage Orders, Wayfair',
  },
  {
    value: '30 days',
    label:
      'How long after delivery Wayfair takes back an unused item, with exceptions. If it comes back unused, you refund the wholesale cost.',
    sourceUrl: 'https://sell.wayfair.com/operate-returns',
    sourceLabel: 'Returns, Wayfair',
  },
] as const;

/* ── Wayfair's quick checklist, as published on its onboarding page, plus the
   insurance certificate the same page asks for in its closing note. ── */
const WAYFAIR_REQUIREMENTS: ReadonlyArray<string> = [
  '1 product ready to sell',
  '3 or more images per product, at least 1000 x 1000 px',
  'Detailed specs for each product: name, model or manufacturer part number, materials, dimensions and wholesale cost',
  'Drop-ship capability from a warehouse in your selling region',
  'Legal business information, such as a business registration number',
  'Banking and tax details for your selling region',
  'A plan for managing orders, printing labels and updating inventory',
  'A certificate of insurance, as soon as possible after onboarding',
];

/* ── What FactoryJet does. Rendered as the tiles AND mapped into the Service
   schema's offer catalog, so the two cannot drift. ── */
type ServiceTile = { n: string; title: string; body: string; span: string };

const SERVICES: ReadonlyArray<ServiceTile> = [
  {
    n: '01',
    title: 'Supplier application support',
    body:
      'We check your business against Wayfair\'s onboarding checklist before you apply and list what is missing. We prepare what the application asks for: warehouse addresses, categories, contacts and first products. You apply as the legal business and sign the drop-ship agreement yourself.',
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Catalog and product data',
    body:
      'We turn your product records into the data Wayfair wants for every SKU: names, part numbers, materials, dimensions, weights, carton sizes, care notes, warnings and base cost. We check every image against the 1000 x 1000 px minimum. Wayfair builds the product name from these details, so a gap becomes a weak listing.',
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Inventory and product feeds',
    body:
      'A feed is a regular file or data link that tells Wayfair what you have. We build the inventory feed from your store, ERP or warehouse system, per warehouse if you ship from more than one. Wayfair can only sell what is available to ship, so we agree the update schedule and a safety buffer with your operations team.',
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Order integration with your store or ERP',
    body:
      'We connect Wayfair orders to the system your team already works in, by EDI or API. The link pulls new purchase orders, confirms each line, passes the order to your warehouse and returns the ship notice with tracking. Wayfair\'s developer portal (developer.wayfair.io) says to check for new orders about every 30 minutes.',
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Ongoing channel management',
    body:
      'After launch we watch the numbers Wayfair watches: fill rate (the share of orders you ship in full), cancellations, returns and order incidents such as damage or a wrong item. We add products, fix listings that draw returns, and manage pay-per-click ads if you run them. We review the numbers with you monthly.',
    span: 'lg:col-span-7',
  },
];

/* ── Step by step. Each step names who does the work. ── */
type ProcessStep = { title: string; who: string; body: string };

const PROCESS_STEPS: ReadonlyArray<ProcessStep> = [
  {
    title: 'Readiness check',
    who: 'FactoryJet',
    body:
      'We compare your catalog, images, documents and warehouse setup with Wayfair\'s checklist and send a written list of gaps.',
  },
  {
    title: 'Application, agreement and account',
    who: 'You, with FactoryJet',
    body:
      'You apply as the legal business, create the Partner Home account, sign the drop-ship agreement and add insurance, banking and tax details. We prepare the answers and documents the forms need. We do not sign or negotiate for you.',
  },
  {
    title: 'Catalog build',
    who: 'FactoryJet',
    body:
      'We load your first products, starting with in-stock bestsellers as Wayfair recommends. Each gets full specs, at least 3 images and a base cost you approve.',
  },
  {
    title: 'Inventory feed and order link',
    who: 'FactoryJet',
    body:
      'We choose portal, EDI or API with you, then build and test it. Wayfair asks for test documents on EDI, and for a pass in its sandbox (a practice copy of the live system) on API, before live data flows.',
  },
  {
    title: 'Go live and manage',
    who: 'FactoryJet, with your warehouse',
    body:
      'You upload positive inventory so shoppers can buy. We follow the first orders from purchase order to tracking number, then move into regular management.',
  },
];

/* ── Fit. Every line traces to a Wayfair rule stated earlier on the page. ── */
const FIT_GOOD: ReadonlyArray<string> = [
  'Your products sit in Wayfair\'s home categories, such as furniture, decor, rugs, lighting, kitchen or outdoor.',
  'You hold stock in a North American warehouse or 3PL and can ship single orders.',
  'You sell large items. Wayfair books LTL and White Glove delivery on its own accounts.',
  'You can plan cash around payment in 60 days, or pay the 2% Quick Pay fee for 30.',
];

const FIT_CAUTION: ReadonlyArray<string> = [
  'You need to control the price shoppers see. On Wayfair that decision is Wayfair\'s.',
  'Your products are on Wayfair\'s excluded list, such as exercise machines or power tools.',
  'You cannot ship from North America and are not ready to place stock there.',
  'Your product data is thin. Wayfair wants full specs and 3 images per product.',
];

/* ── Related FactoryJet pages. All five are real routes under src/app. ── */
const RELATED_CHANNELS: ReadonlyArray<{ href: string; label: string; note: string }> = [
  { href: '/marketplace-management', label: 'Marketplace management', note: 'One team and one stock count across every channel.' },
  { href: '/services/amazon-agency', label: 'Amazon agency', note: 'You set the price and pay a referral fee per sale.' },
  { href: '/services/walmart-marketplace-agency', label: 'Walmart Marketplace agency', note: 'Application, listings, fulfillment and ads.' },
  { href: '/target-plus-marketplace', label: 'Target Plus marketplace', note: 'Target\'s invite-only marketplace.' },
  { href: '/faire-wholesale-marketplace', label: 'Faire wholesale marketplace', note: 'Wholesale buyers, with catalog sync to your store or ERP.' },
];

/* ── Comparison. Wayfair cells come from the four Wayfair pages linked above.
   Amazon, Walmart and Target Plus cells come from the pages linked in the
   table footer. All were read on 2026-10-05. ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Wayfair', isFactoryJet: true },
  { label: 'Amazon' },
  { label: 'Walmart Marketplace' },
  { label: 'Target Plus' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'The deal',
    values: [
      'Wholesale. You set a base cost, Wayfair pays it and sets the shopper price.',
      'Marketplace. You set your own prices and pay a referral fee on each sale.',
      'Marketplace. You keep your own prices competitive and pay a referral fee.',
      'Curated marketplace, one seller per SKU. You pay a referral rate.',
    ],
  },
  {
    feature: 'Monthly fee',
    values: [
      'None named on the supplier pages we read.',
      '$39.99 a month (Professional) or $0.99 per item sold (Individual).',
      'None. Walmart states zero setup, monthly or hidden fees.',
      'None. Target states no monthly seller fees.',
    ],
  },
  {
    feature: 'Fee on a furniture or home sale',
    values: [
      'Wayfair pays your base cost. Quick Pay takes 2% for payment in 30 days.',
      'Furniture: 15% up to $200, then 10% above it. Home and Kitchen: 15%.',
      'Indoor and Outdoor Furniture: 15% up to $200, then 10% above it. Home, Kitchen, Decor and Garden: 15%.',
      'A referral rate Target calls competitive. The figure is not published.',
    ],
  },
  {
    feature: 'How you get in',
    values: [
      'Apply online. Wayfair verifies your business information.',
      'Register and choose a selling plan.',
      'Meet minimum qualifications, including a business tax ID, a history of ecommerce success and GS1 barcodes.',
      'Invite-only, with an application form. Target aims to reply within 30 days.',
    ],
  },
  {
    feature: 'Who ships the order',
    values: [
      'You, from a warehouse or 3PL in North America. Wayfair pays the carrier.',
      'You (Fulfilled by Merchant) or Amazon (Fulfillment by Amazon).',
      'Walmart Fulfillment Services, or your own US warehouse with returns capability.',
      'You, from the US, within 24 business hours, at your cost.',
    ],
  },
];

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.

   Questions come from Google People Also Ask on "sell on wayfair", "how to
   sell on wayfair", "wayfair supplier", "wayfair seller", "wayfair vendor",
   "wayfair dropship", "wayfair castlegate" and "wayfair supplier fees"
   (DataForSEO, US, 2026-10-05), plus the integration queries with measured
   volume ("wayfair edi", "wayfair partner home", "wayfair shopify
   integration"). Answers about Wayfair restate Wayfair's own pages. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Selling on Wayfair' },
  { key: 'money', label: 'Costs and getting paid' },
  { key: 'requirements', label: 'Requirements and setup' },
  { key: 'integration', label: 'Integration and operations' },
  { key: 'factoryjet', label: 'Working with FactoryJet' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Selling on Wayfair ───────────────────────────────────────────
  {
    category: 'basics',
    question: 'Can anyone sell on Wayfair?',
    answer:
      'No. Wayfair\'s supplier program is for businesses. Its onboarding checklist asks for a business registration number, banking and tax details, a warehouse or 3PL address in your selling region and a certificate of insurance, and Wayfair verifies the business. We found no route on its supplier site for a person to list their own used furniture.',
  },
  {
    category: 'basics',
    question: 'How do I become a Wayfair supplier?',
    answer:
      'Wayfair lists four steps. Prepare your catalog, product content and legal business details. Set up an account on Partner Home, its supplier portal. Sign the drop-ship agreement, set up your inventory feed and upload your insurance. Then upload your catalog. FactoryJet prepares the product data and feeds and works beside you at each step.',
  },
  {
    category: 'basics',
    question: 'Is Wayfair just dropshipping?',
    answer:
      'Mostly, from a supplier\'s side. Wayfair\'s Beginner\'s Guide calls drop-shipping its primary method of fulfillment. A shopper orders on Wayfair, Wayfair sends a purchase order to your warehouse, and you pick, pack and ship from your own stock. The other route is CastleGate, where you send stock ahead to Wayfair\'s warehouses and Wayfair ships it.',
  },
  {
    category: 'basics',
    question: 'Does Wayfair have third-party sellers?',
    answer:
      'Yes, though Wayfair calls them suppliers or partners, and says its catalog is millions of products sourced from them. The deal differs from Amazon or Walmart Marketplace. A Wayfair supplier sells to Wayfair at a base cost and Wayfair sets the shopper price. An Amazon or Walmart seller sets their own price and pays a referral fee on each sale.',
  },
  // ── Costs and getting paid ───────────────────────────────────────
  {
    category: 'money',
    question: 'How much does it cost to sell on Wayfair?',
    answer:
      'Wayfair buys from you at wholesale. You set a base cost for each product and that is what Wayfair pays you. We found no listing fee or monthly fee on the supplier pages we read on 5 October 2026. The charges Wayfair names are a 2% Quick Pay fee, small parcel pickup fees on your own carrier account, and pay-per-click ads if you opt in. Your drop-ship agreement is the governing document.',
  },
  {
    category: 'money',
    question: 'Who sets the price shoppers see on Wayfair?',
    answer:
      'Wayfair does. You set the base cost, and Wayfair\'s Beginner\'s Guide says Wayfair then sets the retail price on its site. Its supplier FAQ adds that pricing is dynamic and that your base cost, shipping costs, inventory position and incident rate all feed into it. If you need full control of the shopper price, Wayfair is the wrong channel for that product.',
  },
  {
    category: 'money',
    question: 'Do suppliers pay for shipping on Wayfair orders?',
    answer:
      'No, according to Wayfair\'s Beginner\'s Guide. Orders are billed to Wayfair\'s carrier accounts: FedEx for small parcels, LTL (less-than-truckload) freight for large items, or White Glove delivery. You print Wayfair\'s prepaid labels from Partner Home, or use your own and bill Wayfair as the third party. You do arrange daily small parcel pickups and pay any pickup fee.',
  },
  {
    category: 'money',
    question: 'How and when does Wayfair pay suppliers?',
    answer:
      'Wayfair pays you the base cost of what you sold, by credit card or ACH bank transfer. Net 60 means you are paid within 60 days of the invoice date. Quick Pay means you can be paid within 30 days, and Wayfair takes a 2% fee on payments made inside those 30 days.',
  },
  // ── Requirements and setup ───────────────────────────────────────
  {
    category: 'requirements',
    question: 'What does Wayfair require from a new supplier?',
    answer:
      'Wayfair\'s quick checklist has seven items: 1 product ready to sell, 3 or more images per product at 1000 x 1000 px or larger, detailed product specs, drop-ship capability from a warehouse in your selling region, legal business details, banking and tax details, and a plan for orders, labels and inventory updates. It also asks for a certificate of insurance.',
  },
  {
    category: 'requirements',
    question: 'How long does it take to get set up on Wayfair?',
    answer:
      'Wayfair says most suppliers can complete onboarding in a few days if their product data, documents and warehouse details are ready, and that it may take 2 to 3 weeks without them. An EDI or API link adds a testing step before Wayfair turns on live data. We give you a dated plan once we have seen your catalog and systems.',
  },
  {
    category: 'requirements',
    question: 'What can you not sell on Wayfair?',
    answer:
      'Wayfair\'s Beginner\'s Guide lists what it does not carry: exercise and cardio machines, medicine and medical devices, baby rattles and pacifiers, bicycles, skateboards, power tools, furs, and computer software and hardware. Its onboarding checklist also excludes perishables and certain electronics. Everything else must meet its Supplier Code of Conduct.',
  },
  // ── Integration and operations ───────────────────────────────────
  {
    category: 'integration',
    question: 'Does Wayfair use EDI or an API?',
    answer:
      'Both. Wayfair describes an API that exchanges order and inventory data in real time, and EDI that exchanges it at regular intervals. Its developer portal says the APIs use GraphQL, and that EDI supports ANSI X12 (versions 4010 and 4030), EDIFACT and CSV files over a VAN, AS2 or SFTP connection. Suppliers can also work by hand in Partner Home.',
  },
  {
    category: 'integration',
    question: 'Can you connect Wayfair to my Shopify store or ERP?',
    answer:
      'Yes. We build the link that pulls Wayfair purchase orders into your store, ERP or warehouse system, sends stock levels back, and returns the ship notice with tracking. We work with Shopify, BigCommerce, WooCommerce and Magento stores, and with back-office systems such as NetSuite, SAP and QuickBooks. Where a ready-made connector fits, we set that up instead of writing custom code.',
  },
  {
    category: 'integration',
    question: 'What is Wayfair Partner Home?',
    answer:
      'Partner Home is Wayfair\'s portal for suppliers. Wayfair says it is where you manage your catalog, update inventory, ship and fulfill orders, get paid and track performance with dashboards and reports. Its Operations Hub shows your fill rate, cancellations, returns and order incidents.',
  },
  {
    category: 'integration',
    question: 'What is CastleGate, and does Wayfair have its own distribution centers?',
    answer:
      'Yes. CastleGate is Wayfair\'s own logistics service, and Wayfair says CastleGate Fulfillment delivers to 97% of U.S. customers in as little as two days. Its Beginner\'s Guide points suppliers who cannot drop-ship to CastleGate, while its supplier FAQ says the program is open to partners that have finished onboarding and started selling. Ask Wayfair which applies to you before you plan stock.',
  },
  {
    category: 'integration',
    question: 'How do returns work for Wayfair suppliers?',
    answer:
      'Wayfair takes back unused items up to 30 days after delivery, with exceptions, and sends the shopper a return label. The item goes to your warehouse, you inspect it, and if it is unused you refund the wholesale cost. Eligible suppliers can choose Wayfair-managed returns, where Wayfair receives, inspects and resells the item in exchange for a partial refund on each one.',
  },
  // ── Working with FactoryJet ──────────────────────────────────────
  {
    category: 'factoryjet',
    question: 'What does FactoryJet do for a Wayfair supplier?',
    answer:
      'Five pieces of work: supplier application support, catalog and product data, inventory and product feeds, order integration with your store or ERP, and ongoing management. We build each piece and stay on after launch. Wayfair decides who it accepts, so we do not promise an approval. You keep the Wayfair account, the agreement and everything we build.',
  },
  {
    category: 'factoryjet',
    question: 'How does FactoryJet charge for Wayfair setup and management?',
    answer:
      'FactoryJet quotes a fixed price in writing after a short scoping call, based on your catalog size and the systems we connect. We do not publish a rate card, because the work depends on how many products you list and what we link up.',
  },
];

/* ── JSON-LD. Every const below is rendered in the component. ── */
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  author: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  publisher: { '@id': ORG_ID },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Wayfair Supplier Setup and Management',
  serviceType:
    'Wayfair supplier application support, catalog and product data, inventory feeds, EDI and API order integration, and ongoing channel management',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'US home, furniture, decor and home improvement brands' },
  description:
    'FactoryJet sets up and manages the Wayfair supplier channel for US home brands: application support, catalog and product data, inventory feeds, order integration with the brand\'s store or ERP by EDI or API, and ongoing management after launch. The brand keeps the Wayfair account, the agreement and everything FactoryJet builds.',
  url: CANONICAL_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wayfair supplier services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.body },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const EXTERNAL_LINK_CLASS =
  'inline-flex items-center gap-1.5 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline';
const FOOTNOTE_LINK_CLASS = 'underline underline-offset-2 hover:text-fj-ink';

function SourceArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ListMark({ tone }: { tone: 'good' | 'caution' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={tone === 'good' ? '#0C7150' : '#B23E13'} />
      {tone === 'good' ? (
        <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M10 5.5v5.5M10 14.2v.3" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function WayfairMarketplacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    WAYFAIR SUPPLIER SETUP &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.25rem]">
                  Sell on Wayfair with a team that sets up and manages your supplier channel.
                </h1>

                <p className="mt-6 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  Wayfair buys from you at a wholesale cost, sets the shopper price itself, and sends every order to
                  your warehouse to ship. FactoryJet handles the supplier application, your product data, the
                  inventory feed that tells Wayfair what is in stock, and the order link to your store or ERP (the
                  software that tracks your stock and orders). Then we stay on to manage the channel.
                </p>

                <div className="mt-8">
                  <HeroInlineForm region="us" source="wayfair_marketplace_hero" submitLabel="Check my Wayfair readiness" />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-6 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
                  <span>Founded 2014</span>
                  <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
                  <span>You keep the account and the code</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <WayfairOrderFlow />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg" data-speakable>
                To sell on Wayfair in the US, a brand sets up an account on Partner Home (Wayfair&rsquo;s supplier
                portal), signs the drop-ship agreement, and loads its catalog and an inventory feed. Drop-ship means
                you ship each order straight to the shopper from your own warehouse, which has to be in North
                America. Wayfair pays the wholesale cost you set and decides the shopper price. FactoryJet prepares the application, builds the catalog and feeds, connects orders to
                your store or ERP by EDI or API (two ways for software to pass orders without retyping), and manages
                the channel after launch.
              </p>
            </div>
          </div>
        </section>

        {/* 3. WAYFAIR'S OWN RULES, EACH LINKED TO ITS SOURCE */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Checked against Wayfair&rsquo;s own pages</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Four Wayfair rules that shape the whole project.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We read Wayfair&rsquo;s supplier pages on {SOURCES_READ}. Each card links to the page it came from,
                  so you can check it.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {WAYFAIR_FACTS.map((f) => (
                  <div key={f.value} className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6">
                    <div className="font-fj-display text-3xl font-bold tracking-[-0.02em] text-[#F05A28]">{f.value}</div>
                    <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{f.label}</p>
                    <a href={f.sourceUrl} target="_blank" rel="noopener noreferrer" className={`mt-4 ${EXTERNAL_LINK_CLASS}`}>
                      <SourceArrow />
                      {f.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW SELLING ON WAYFAIR WORKS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The supplier model</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              How selling on Wayfair works.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Wayfair treats you as a supplier. That changes who sets the price and what your systems have to do.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="grid gap-10 lg:col-span-7">
                <div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">The dropship model</h3>
                  <p className="mt-3 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                    Dropshipping means the supplier keeps the stock and ships each order straight to the shopper.
                    Wayfair&rsquo;s Beginner&rsquo;s Guide calls it Wayfair&rsquo;s primary method of fulfillment. A
                    shopper orders on Wayfair, Wayfair sends a purchase order (its formal request for that item) to
                    your warehouse, and you pick, pack and ship. You need a warehouse or a 3PL (a third-party
                    logistics company that stores and ships for you) in North America.
                  </p>
                </div>

                <div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">
                    Who sets the price and who pays the carrier
                  </h3>
                  <p className="mt-3 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                    You set a base cost for each product, which is the wholesale price Wayfair pays you. Wayfair sets
                    the retail price and covers shipping to the customer. Orders go out on Wayfair&rsquo;s carrier
                    accounts: FedEx for small parcels, LTL freight (less-than-truckload, for large items) or White
                    Glove delivery. You book the daily small parcel pickups and pay any pickup fee yourself.
                  </p>
                </div>

                <div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Partner Home, EDI and API</h3>
                  <p className="mt-3 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                    Partner Home is Wayfair&rsquo;s supplier portal, where you manage your catalog, update inventory,
                    ship orders and get paid. Each SKU (stock keeping unit, the code for one product in one size and
                    color) needs its own data there. For orders, inventory and tracking, Wayfair lets you work by
                    hand in the portal or automate with EDI or API. EDI (electronic data interchange) is a long-used
                    file standard for swapping orders and shipping notices between two companies&rsquo; systems. An
                    API is a live connection between two pieces of software.
                  </p>
                </div>

                <div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">CastleGate, the Wayfair-run option</h3>
                  <p className="mt-3 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                    CastleGate is Wayfair&rsquo;s own logistics service. You send stock to its warehouses and Wayfair
                    ships the orders. Wayfair&rsquo;s supplier FAQ says CastleGate Fulfillment is open to partners
                    that have finished onboarding and started selling.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 sm:p-7 lg:sticky lg:top-24">
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">
                    What Wayfair requires before you go live
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {WAYFAIR_REQUIREMENTS.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                        <ListMark tone="good" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://sell.wayfair.com/onboarding-checklist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 ${EXTERNAL_LINK_CLASS}`}
                  >
                    <SourceArrow />
                    Read Wayfair&rsquo;s full onboarding checklist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE DO */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The service</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What FactoryJet does on your Wayfair channel.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Five pieces of work, done by one team that stays on after launch. Wayfair is one channel inside our
              wider{' '}
              <Link href="/marketplace-management" className="font-semibold text-[#B23E13] underline underline-offset-2">
                marketplace management
              </Link>{' '}
              service, so the same stock count can feed your other channels.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {SERVICES.map((s) => (
                <div key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-white p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                    {s.n}
                  </div>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{s.title}</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{s.body}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-white p-7 lg:col-span-5">
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">What stays yours</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  The Partner Home login, the drop-ship agreement, the payout account and the connector code are in
                  your company&rsquo;s name. We work through user access your admin grants. If you move the work
                  in-house later, nothing has to be rebuilt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. STEP-BY-STEP PROCESS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-6 md:px-8">
            <p className="fj-eyebrow">Step by step</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              From application to first order in five steps.
            </h2>
            <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each step names who does the work, so nothing sits waiting on the wrong desk.
            </p>

            <ol className="mt-12 grid gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-start gap-5 rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream px-5 py-5 sm:px-6"
                >
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{step.title}</h3>
                    <p className="mt-1 font-fj-mono text-[11px] font-semibold uppercase tracking-wider text-[#B23E13]">
                      Who does it: {step.who}
                    </p>
                    <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MidPageCTA
          headline="Find out what your catalog is missing before you apply."
          sub="Send us your product list and tell us where you ship from. We check both against Wayfair's onboarding checklist and send back a written list of gaps, at no cost."
          label="Get a Wayfair readiness check"
        />

        {/* 7. COMPARISON */}
        <ComparisonTable
          eyebrow="How the channels compare"
          headline="Wayfair vs Amazon vs Walmart vs Target Plus for a home brand."
          lead="Wayfair buys from you at wholesale. The other three let you sell on their site and charge a fee on each sale. Every cell comes from the retailer's own seller pages."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          scrollRegionLabel="Comparison of Wayfair, Amazon, Walmart Marketplace and Target Plus for a home brand"
          footer={
            <>
              Read on {SOURCES_READ}: the Wayfair pages linked above,{' '}
              <a href="https://sell.amazon.com/pricing" target="_blank" rel="noopener noreferrer" className={FOOTNOTE_LINK_CLASS}>
                Amazon&rsquo;s standard selling fees
              </a>
              , Walmart Marketplace&rsquo;s{' '}
              <a href="https://marketplace.walmart.com/pricing/" target="_blank" rel="noopener noreferrer" className={FOOTNOTE_LINK_CLASS}>
                referral fee table
              </a>{' '}
              and{' '}
              <a href="https://marketplace.walmart.com/" target="_blank" rel="noopener noreferrer" className={FOOTNOTE_LINK_CLASS}>
                seller FAQ
              </a>
              , and Target Plus&rsquo;s{' '}
              <a href="https://plus.target.com/how-it-works" target="_blank" rel="noopener noreferrer" className={FOOTNOTE_LINK_CLASS}>
                eligibility requirements
              </a>{' '}
              and{' '}
              <a href="https://plus.target.com/" target="_blank" rel="noopener noreferrer" className={FOOTNOTE_LINK_CLASS}>
                seller FAQ
              </a>
              . Fees change, so check each page before you plan margins.
            </>
          }
        />

        {/* 8. FIT */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">An honest read</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When Wayfair fits a brand, and when it does not.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 lg:col-span-7">
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Wayfair tends to fit when</h3>
                <ul className="mt-4 grid gap-3">
                  {FIT_GOOD.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                      <ListMark tone="good" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 lg:col-span-5">
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Think twice when</h3>
                <ul className="mt-4 grid gap-3">
                  {FIT_CAUTION.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                      <ListMark tone="caution" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-10 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              If Wayfair is the wrong fit, a marketplace where you set your own price may suit the product better.
              The same team sets up and manages these.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED_CHANNELS.map((c, i) => (
                <li key={c.href} className={i < 2 ? 'lg:col-span-6' : 'lg:col-span-4'}>
                  <Link
                    href={c.href}
                    className="block h-full rounded-xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-base font-semibold text-fj-ink">{c.label}</span>
                    <span className="mt-1 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{c.note}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-fj-mono text-xs text-fj-neutral-600">
              Reviewed and updated {PAGE_MODIFIED} &middot; Bhavesh Barot, Founder
            </p>
          </div>
        </section>

        {/* 9. FAQ */}
        <FAQ
          eyebrow="Wayfair supplier FAQ"
          headline="Questions about selling on Wayfair, answered plainly."
          lead="Taken from what people search and ask about becoming a Wayfair supplier. Facts about Wayfair come from its own supplier pages, read on 5 October 2026."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 10. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Sell on Wayfair"
          headline="Find out if your brand is ready for Wayfair."
          sub="Send us your catalog and tell us where you ship from. We check both against Wayfair's onboarding checklist and tell you what to fix before you apply."
          primaryCta={{ label: 'Check my Wayfair readiness', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="No approval promises. Wayfair decides who it accepts. You keep the account, the agreement and the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
