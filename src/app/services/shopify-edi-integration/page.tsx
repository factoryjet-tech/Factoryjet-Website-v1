import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
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

import EdiFlowDiagram from './EdiFlowDiagram';
import { twinAlternates } from '@/data/hreflangMap';

/* -----------------------------------------------------------------------------
   /services/shopify-edi-integration, built 2026-10-11.

   Why this page exists: US searches measured 2026-10-11 (DataForSEO, location
   2840): "edi integration" 590 (KD 5), "ecommerce edi" 170, "netsuite edi
   integration" 90, "edi integration services" 70, "shopify edi" 50, "edi for
   small business" 50, "shopify edi integration" 20. No FactoryJet page covered
   EDI. Bhavesh confirmed on 2026-10-11 that FactoryJet delivers EDI work.

   Truth rules for anyone editing this file:
   1. Every retailer rule, standard, listing detail and list price was read on
     the owner's own page on 2026-10-11 and links to it through the SRC map
     below. Listings and prices move. If you change one, re-fetch the page
     first and update the "read on" wording.
   2. No client is named or described. No FactoryJet price. The dollar figures
     are list prices of named EDI products, one retailer's published fee, and
     one sourced market rate inside the cost FAQ.
   3. No partner, compliance or approval claim with any EDI network, VAN or
     retailer. FactoryJet builds the Shopify side and the links around it.
   4. Nothing on what an integration costs to run or look after.
   5. Structure mirrors /services/shopify-quickbooks-integration. The copy
     does not.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
----------------------------------------------------------------------------- */

const CANONICAL_URL = 'https://factoryjet.com/services/shopify-edi-integration';
const PAGE_TITLE = 'Shopify EDI Integration Services | FactoryJet';
const PAGE_DESC =
  'Shopify EDI integration for brands selling to retailers and B2B stores taking EDI orders. The 850, 855, 856 and 810 explained, with five EDI products compared.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-21';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/shopify-edi-integration';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'shopify edi integration',
    'shopify edi',
    'edi integration',
    'edi integration services',
    'ecommerce edi',
    'edi for small business',
    'netsuite edi integration',
    'shopify edi app',
    'shopify edi integration cost',
    'shopify b2b edi orders',
    'edi 850 to shopify order',
    'edi 856 advance ship notice shopify',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['shopify-edi-integration'],
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Shopify EDI integration services for US businesses',
      },
    ],
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
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify EDI Integration', url: CANONICAL_URL },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Shopify EDI Integration',
  serviceType:
    'EDI integration for Shopify stores, X12 850, 855, 856 and 810 documents, retailer and B2B trading partner connections, EDI links to ERP and 3PL systems',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    "FactoryJet scopes, builds, tests and supports the connection between a Shopify store and its EDI trading partners: purchase orders (850) arriving as Shopify orders or draft orders, with acknowledgments (855), ship notices (856) and invoices (810) going back in the buyer's format. Work covers choosing an EDI product, setting up its Shopify connector, and building a custom link when orders must also reach an ERP or a 3PL, or follow rules a connector cannot.",
  url: CANONICAL_URL,
};

/* -- Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting words read before the
   claim was written. truecommerce.com and the App Store search were read in a
   real browser, because both refuse plain fetches. The ledger with the quoted
   words is in pipeline/research/data/page-opportunities-2026-10-11/handback/us-shopify-edi/sources.json. -- */
const SRC = {
  x12: {
    short: 'X12: transaction sets',
    label: 'X12: Transaction Sets, the names and purposes of the 850, 855, 856, 810, 846 and 997',
    url: 'https://x12.org/products/transaction-sets',
  },
  rfc4130: {
    short: 'RFC 4130: AS2',
    label: 'RFC 4130: Business Data Interchange Using HTTP, Applicability Statement 2 (AS2), July 2005',
    url: 'https://www.rfc-editor.org/rfc/rfc4130.txt',
  },
  target: {
    short: 'Target: supplier standards',
    label: 'Target Corporation: Suppliers, standards for Target suppliers',
    url: 'https://corporate.target.com/sustainability-governance/people-thriving-team-communities/responsible-supply-chains/suppliers',
  },
  krogerCompliance: {
    short: 'Kroger: EDI compliance',
    label: 'The Kroger Co. EDI portal: EDI Compliance',
    url: 'https://edi.kroger.com/EDIPortal/EDICompliance.html',
  },
  krogerFaq: {
    short: 'Kroger: EDI FAQ',
    label: 'The Kroger Co. EDI portal: EDI Frequently Asked Questions',
    url: 'https://edi.kroger.com/EDIPortal/FAQ.html',
  },
  krogerVans: {
    short: 'Kroger: VANs and providers',
    label: 'The Kroger Co. EDI portal: EDI VANs and Providers',
    url: 'https://edi.kroger.com/EDIPortal/VansAndProviders.html',
  },
  gs1: {
    short: 'GS1 US: SSCC',
    label: 'GS1 US: Serial Shipping Container Codes (SSCC)',
    url: 'https://www.gs1us.org/upcs-barcodes-prefixes/serialized-shipping-container-codes',
  },
  shopifyEdi: {
    short: 'Shopify: EDI in shipping',
    label: 'Shopify blog: EDI Meaning in Shipping, by Shopify Staff (May 6, 2026)',
    url: 'https://www.shopify.com/blog/edi-shipping',
  },
  helpB2b: {
    short: 'Shopify Help: Shopify B2B',
    label: 'Shopify Help Center: Shopify B2B',
    url: 'https://help.shopify.com/en/manual/b2b',
  },
  devDraft: {
    short: 'shopify.dev: draft orders',
    label: 'shopify.dev: draftOrderCreate mutation',
    url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate',
  },
  devFulfillment: {
    short: 'shopify.dev: fulfillments',
    label: 'shopify.dev: fulfillmentCreate mutation',
    url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate',
  },
  devWebhooks: {
    short: 'shopify.dev: webhooks',
    label: 'shopify.dev: About webhooks',
    url: 'https://shopify.dev/docs/apps/build/webhooks',
  },
  appSearch: {
    short: 'Shopify App Store: search for edi',
    label: 'Shopify App Store: search results for edi',
    url: 'https://apps.shopify.com/search?q=edi',
  },
  appSps: {
    short: 'Shopify App Store: SPS Commerce',
    label: 'Shopify App Store: All EDI Orders. One Platform., by SPS Commerce',
    url: 'https://apps.shopify.com/sps-commerce',
  },
  appCrstl: {
    short: 'Shopify App Store: Crstl',
    label: 'Shopify App Store: Crstl: No-code EDI for Brands, by Crstl',
    url: 'https://apps.shopify.com/crstl-b2b-commerce-network',
  },
  orderfulShopify: {
    short: 'Orderful: Shopify',
    label: 'Orderful: Orderful + Shopify integration',
    url: 'https://www.orderful.com/integrations/shopify',
  },
  orderfulPricing: {
    short: 'Orderful: pricing',
    label: 'Orderful: Pricing',
    url: 'https://www.orderful.com/pricing',
  },
  truecommerce: {
    short: 'TrueCommerce: storefront integrations',
    label: 'TrueCommerce: eCommerce Platform Integrations',
    url: 'https://www.truecommerce.com/integrations/ecommerce-platforms/',
  },
  cleoConnectors: {
    short: 'Cleo: connectors',
    label: 'Cleo: Integration connectors',
    url: 'https://www.cleo.com/solutions/integration-connectors',
  },
  cleoPricing: {
    short: 'Cleo: pricing',
    label: 'Cleo: EDI pricing',
    url: 'https://www.cleo.com/edi-pricing',
  },
  cartcoders: {
    short: 'CartCoders: 2026 rate guide',
    label: 'CartCoders: Shopify Developer Cost Breakdown for 2026 (updated Jul 3, 2026)',
    url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* -- FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from Google's People Also Ask boxes and related searches for
   the page's terms (DataForSEO, US, location 2840, pulled 2026-10-11), plus
   the searches themselves. -- */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'EDI in plain words' },
  { key: 'retail', label: 'Selling to retailers' },
  { key: 'shopify', label: 'The Shopify side' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // -- EDI in plain words ---------------------------------------------
  {
    category: 'basics',
    question: 'Is Shopify EDI capable?',
    answer:
      "Yes, through an EDI product or a custom link. When we searched the Shopify App Store for edi on 11 October 2026, the first page of results held two EDI products, from SPS Commerce and Crstl. Orderful, TrueCommerce and Cleo list Shopify connections on their own sites. Each route does the same job: a trading partner's purchase order becomes a Shopify order, and the replies go back.",
  },
  {
    category: 'basics',
    question: 'What is EDI integration?',
    answer:
      'EDI stands for electronic data interchange. It is the fixed-format messaging that large retailers and distributors use to send purchase orders and receive invoices, computer to computer. EDI integration joins those messages to the system you run the business on. For a Shopify seller, a purchase order arrives as a Shopify order and the replies go back without anyone retyping them.',
  },
  {
    category: 'basics',
    question: 'What are the EDI 850, 855, 856 and 810?',
    answer:
      'They are the four documents most sellers meet first. X12, the body that maintains the US standard, names them Purchase Order (850), Purchase Order Acknowledgment (855), Ship Notice/Manifest (856) and Invoice (810). The buyer sends the 850. You send the 855 to confirm the order, the 856 when the goods ship, and the 810 to get paid.',
  },
  {
    category: 'basics',
    question: 'What are the two EDI file types?',
    answer:
      "X12 and EDIFACT. RFC 4130, an internet standard for sending EDI over the web, names both: the ANSI X12 format and the United Nations format, UN/EDIFACT. Kroger's vendor pages refer to X12 transaction sets, and every document number on this page (850, 855, 856, 810) is an X12 number.",
  },
  {
    category: 'basics',
    question: 'Can you give me an example of EDI?',
    answer:
      "A grocery chain wants more stock from a sauce maker. Nobody sends an email or picks up a phone. The chain's buying system sends an 850 purchase order with item numbers, quantities and prices. The maker's system answers with an 855, sends an 856 when the pallet leaves, then an 810 invoice. Each side confirms what it received with a 997.",
  },
  {
    category: 'basics',
    question: 'What has replaced EDI?',
    answer:
      "Nothing has, at the retailers whose pages we read on 11 October 2026. Kroger's vendor site says new vendors are required to do EDI, and Target lists the ability to use EDI to receive purchase orders among its supplier standards. What has changed is how sellers connect. Orderful, for example, sells an API for EDI that other systems are built onto. An API is a way for two programs to talk.",
  },
  {
    category: 'basics',
    question: 'Is EDI the same as SAP?',
    answer:
      'No. SAP makes ERP software, the system a company uses to run its orders, stock and accounts. EDI is the message format two companies use to trade documents. The two meet when an EDI purchase order has to land inside the ERP. FactoryJet has worked on SAP Business One and other ERPs, so one link can feed Shopify and the ERP together.',
  },
  {
    category: 'basics',
    question: 'What is a VAN in EDI?',
    answer:
      "VAN stands for value-added network. Kroger's vendor site describes it as a private network provider that a company hires to carry its EDI. Think of it as a post office for EDI documents. Kroger says its preferred way to exchange documents is through VANs, and that it does not require any specific VAN or EDI provider.",
  },
  // -- Selling to retailers -------------------------------------------
  {
    category: 'retail',
    question: 'Do I need EDI to sell to big retailers?',
    answer:
      "Often, yes. Target's supplier page lists the ability to use EDI to receive purchase orders among the standards a supplier commits to. Kroger's vendor FAQ says new vendors are required to do EDI, and that most must accept purchase orders and send invoices that way. Each retailer sets its own rules, so read your buyer's supplier guide before you sign.",
  },
  {
    category: 'retail',
    question: 'What happens if I do not use EDI with a retailer that asks for it?',
    answer:
      'It depends on the retailer. Kroger publishes its rule. A vendor that ships to a Kroger distribution center is given 90 days to comply. After that, Kroger deducts 1% of the invoice amount or $250, whichever is greater, to help offset its manual processing. Other retailers set their own terms in the supplier agreement.',
  },
  {
    category: 'retail',
    question: 'What is a 997, and do I have to send one?',
    answer:
      "A 997 is a Functional Acknowledgment, a receipt saying a document arrived and could be read. It does not mean the order was accepted. Kroger's compliance page says a functional acknowledgment is required, and its FAQ says documents are acknowledged within the time the standard sets or 24 hours, whichever is shorter. A good link sends each 997 without anyone pressing a button.",
  },
  {
    category: 'retail',
    question: 'What is an ASN, and does every retailer want one?',
    answer:
      "ASN means advance ship notice, the 856. It tells the buyer what is in each shipment before the truck arrives. Shopify's own EDI article says that in many cases a retailer will not accept a truck unless the ship notice was received and validated at least 24 hours ahead. Rules differ by retailer. Kroger's FAQ says only selected suppliers on specific programs must send ASNs.",
  },
  {
    category: 'retail',
    question: 'What is an SSCC or GS1-128 label?',
    answer:
      'It is the carton or pallet label a retailer scans at the dock. GS1 US describes the SSCC as an 18-digit number given to one shipping unit, such as a case or a pallet, that works like a license plate. It is usually printed as a GS1-128 barcode. Plan for the 856 ship notice to carry the same carton numbers that are printed on the labels.',
  },
  {
    category: 'retail',
    question: 'Do I have to test with each retailer?',
    answer:
      "Expect to. Kroger's vendor FAQ points suppliers to its requirements pages for how it tests each EDI document, and says a supplier approved for one store division is approved for all divisions in the same EDI support area. Other retailers set out their own testing in the supplier guide. Build testing time into the launch date your buyer gives you.",
  },
  // -- The Shopify side ------------------------------------------------
  {
    category: 'shopify',
    question: 'Where does an EDI purchase order land in Shopify?',
    answer:
      "As an order or a draft order. A draft order is one a person can check before it is completed. Shopify's developer documentation shows that a draft order can carry a purchase order number, payment terms and the company that is buying, which covers what an 850 sends. Whether it lands as a draft or as a confirmed order is your choice, made for each trading partner.",
  },
  {
    category: 'shopify',
    question: 'Can my B2B customers send orders to my Shopify store by EDI?',
    answer:
      "Yes. Some business customers never log in to a portal, because their purchasing system sends purchase orders on its own. Their 850 can become a Shopify order against their company account, at the prices and payment terms you have set for them. Shopify's help center says B2B customers are set up as companies, each with its own pricing and payment methods.",
  },
  {
    category: 'shopify',
    question: 'Which EDI apps work with Shopify?',
    answer:
      'Five names came up in our check on 11 October 2026. SPS Commerce and Crstl have listings on the Shopify App Store. Orderful publishes a Shopify integration page with the documents it supports. TrueCommerce lists Shopify as a featured storefront integration, and Cleo lists Shopify among its application connectors. The products section on this page restates what each maker says, with list prices where published.',
  },
  {
    category: 'shopify',
    question: 'Can EDI orders reach my ERP or 3PL as well as Shopify?',
    answer:
      "Yes. A 3PL is an outside warehouse that ships for you. SPS Commerce's listing names 3PL, NetSuite, QuickBooks, SAP and ShipStation among the systems it works with. Crstl's names NetSuite, QuickBooks Online, Cin7 and ShipHero. When the same order must reach two systems, decide which one is the master for orders, so stock comes off only once.",
  },
  {
    category: 'shopify',
    question: 'Can you connect EDI to NetSuite as well as Shopify?',
    answer:
      "Yes. Several EDI products list NetSuite beside Shopify. SPS Commerce and Crstl name it on their App Store listings, and Cleo's pricing page lists an ERP Connect option for NetSuite, Dynamics 365 BC or Acumatica. FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs. We map which system receives the purchase order first and which one sends each reply.",
  },
  {
    category: 'shopify',
    question: 'How do the ship notice and the invoice get back from Shopify?',
    answer:
      "From what happens in the store. Shopify's developer documentation describes webhooks, which tell another program about an event in near real time, and a fulfillment record that holds tracking information. When an order is marked as shipped, the link builds the 856 from that record. The 810 invoice follows from the order's lines and prices, in the buyer's format.",
  },
  {
    category: 'shopify',
    question: 'Does the retailer need to see my stock?',
    answer:
      'Some do. The X12 document for it is the 846, Inventory Inquiry/Advice, which a seller can use to tell a buyer what is available. A link can read stock from Shopify, or from your ERP if that is where stock is kept, and send the 846 on the schedule the buyer asks for.',
  },
  // -- Cost and working with us ----------------------------------------
  {
    category: 'working',
    question: 'How much does Shopify EDI integration cost?',
    answer:
      "It depends on the route. List prices read on 11 October 2026: Crstl's Shopify app starts at $149 a month. Orderful lists web EDI at $189 a month per trading partner and its Integrated plan from $399 a month. Cleo lists WebEDI from $99 a month. SPS Commerce asks you to contact it for pricing. CartCoders' 2026 rate guide puts Shopify developers in the US and Canada at $120 to $200 an hour. FactoryJet quotes its own work as a fixed price, in writing, after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a Shopify EDI integration take?',
    answer:
      'The trading partner sets most of the clock. Orderful says a partner already on its network goes live in under 9 days. Kroger gives a vendor 90 days to comply once it asks for EDI. A custom link adds time to map your item codes and to run test documents. We put the timeline in the written quote, beside the launch date your buyer has given you.',
  },
  {
    category: 'working',
    question: 'When is an EDI app enough, and when do I need a custom link?',
    answer:
      'An app is enough when you have one or two trading partners and orders can land in Shopify the way the app puts them. Build a custom link when orders must also reach an ERP or a 3PL, when pack sizes or item codes need rules of your own, when B2B customers have price lists the app cannot read, or when you ship from more than one warehouse. We tell you which on the scoping call.',
  },
  {
    category: 'working',
    question: 'What is the simplest way for a small business to start with EDI?',
    answer:
      'A web portal, often called web EDI. A person reads each purchase order on a website and types the replies. Cleo lists its WebEDI from $99 a month, and Orderful lists web EDI at $189 a month per trading partner. That works while orders are few. Once the same orders are being retyped into Shopify every week, a connector or a custom link earns its place.',
  },
  {
    category: 'working',
    question: 'Can we see a demo before a contract?',
    answer:
      "Yes. We show working software on your own data before a contract. For an EDI project that means a sample purchase order from your trading partner's guide becoming an order in a test store, along with the acknowledgment and the invoice it would send back.",
  },
  {
    category: 'working',
    question: 'Who looks after the integration after launch?',
    answer:
      'We do. FactoryJet quotes the build, and any support you choose, as fixed prices, in writing, after a short scoping call. After launch we can keep managing the servers, the APIs and the maintenance, so your team does not have to. When a trading partner changes its guide, the change comes to us. You own the code we write.',
  },
  {
    category: 'working',
    question: 'Do you work with the EDI provider or 3PL we already use?',
    answer:
      'Yes. If you already use an EDI network, we build on it. The provider carries the documents and your 3PL ships the goods. Our work is the part in between, where Shopify and your other systems send and receive what each one needs. We work remotely with US clients and schedule calls in US business hours.',
  },
  {
    category: 'working',
    question: 'Which businesses is this for?',
    answer:
      'Consumer brands that have won a retail account, food and drink makers that supply grocers, distributors with a B2B store, and manufacturers whose customers send purchase orders. FactoryJet was founded in 2014, has served more than 500 businesses and is a registered Shopify Partner.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* -- The documents. Numbers and names are X12's. The plain-word notes restate
   X12, Shopify's EDI article and Kroger's compliance page. -- */
type Flow = 'in' | 'out' | 'both';

const FLOW_LABEL: Record<Flow, string> = {
  in: 'Buyer to you',
  out: 'You to buyer',
  both: 'Both ways',
};

const DOCS: ReadonlyArray<{ code: string; name: string; flow: Flow; note: string }> = [
  {
    code: '850',
    name: 'Purchase Order',
    flow: 'in',
    note: 'The order itself, with items, quantities, prices and where to ship. In Shopify it becomes an order, or a draft order that someone checks first.',
  },
  {
    code: '855',
    name: 'Purchase Order Acknowledgment',
    flow: 'out',
    note: 'Your answer to the order. It confirms what you will ship and flags what you cannot, such as an item that is out of stock or a price that does not match.',
  },
  {
    code: '856',
    name: 'Ship Notice/Manifest',
    flow: 'out',
    note: 'The advance ship notice, or ASN. It lists what is in the shipment, how it is packed and which carrier has it, before the truck arrives.',
  },
  {
    code: '810',
    name: 'Invoice',
    flow: 'out',
    note: "The bill for what shipped. It takes the place of a PDF invoice and starts the buyer's payment process.",
  },
  {
    code: '997',
    name: 'Functional Acknowledgment',
    flow: 'both',
    note: 'A receipt that says a document arrived and could be read. It is not a yes to the order.',
  },
  {
    code: '846',
    name: 'Inventory Inquiry/Advice',
    flow: 'out',
    note: 'A stock feed. Some buyers ask for it so their systems know what you can ship.',
  },
];

/* -- The two cases. Retailer facts are Target's and Kroger's own pages. The
   Shopify facts are from Shopify's help center and developer documentation. -- */
type Case = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  note: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const CASES: ReadonlyArray<Case> = [
  {
    n: '01',
    title: 'You sell to retailers that ask for EDI',
    body: 'A buyer at a chain says yes to your product. The supplier guide that follows says orders will arrive by EDI.',
    items: [
      "Target's supplier page lists the ability to use EDI to receive purchase orders among the standards a supplier commits to",
      "Kroger's vendor FAQ says new vendors are required to do EDI. Most must accept purchase orders and send invoices that way",
      'A vendor that ships to a Kroger distribution center is given 90 days to comply. After that, Kroger deducts 1% of the invoice amount or $250, whichever is greater',
      'Kroger does not require a specific EDI provider. Its own list of third-party providers includes SPS Commerce and TrueCommerce',
    ],
    note: 'The retailer writes the rules in this case. Ask your buyer for the EDI guide and the launch date before you choose a product, because the guide decides which documents you need.',
    sources: ['target', 'krogerFaq', 'krogerCompliance', 'krogerVans'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Your customers send you EDI orders',
    body: 'You run a B2B store. Some customers log in and order. Others have a purchasing system that sends purchase orders on its own, and they ask you to accept them.',
    items: [
      "Shopify's help center says B2B customers are set up as companies, each with its own pricing and payment methods",
      "Shopify's developer documentation shows a draft order created for a company, with a purchase order number and payment terms",
      "The customer's 850 becomes that order. Your 855, 856 and 810 go back to their system",
    ],
    note: 'You have more say in this case. You and the customer agree which documents to trade, and the 850 with the 810 is often where it starts.',
    sources: ['helpB2b', 'devDraft'],
    span: 'lg:col-span-5',
  },
];

/* -- EDI products with a Shopify connection. Each line restates the maker's
   own page as published on 2026-10-11. List prices only where the maker prints
   one. -- */
const PRODUCTS: ReadonlyArray<{
  name: string;
  where: string;
  price: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'SPS Commerce',
    where: 'Shopify App Store listing',
    price: 'Free to install. The listing says to contact SPS Commerce for full pricing before you install.',
    says: 'The app is titled All EDI Orders. One Platform. Its listing says it integrates Shopify orders, fulfillment and inventory into SPS, and names 3PL, Microsoft, NetSuite, QuickBooks, SAP and ShipStation among the systems it works with. On the App Store since September 30, 2022.',
    sources: ['appSps'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Crstl',
    where: 'Shopify App Store listing',
    price: 'Starts at $149 a month. The listing says there are no document fees.',
    says: 'Listed as Crstl: No-code EDI for Brands. It says it syncs EDI dropship and wholesale orders, and draft orders, with a Shopify store, and sends and receives purchase orders, ship notices and invoices. Launched on May 1, 2024.',
    sources: ['appCrstl'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Orderful',
    where: 'orderful.com',
    price: 'Web EDI at $189 a month per trading partner. Integrated plan, an API for EDI, starting at $399 a month. Enterprise is custom.',
    says: 'Its Shopify page lists seven documents: 850, 855, 856, 810, 860, 820 and 997. Orderful says a trading partner already on its network goes live in under 9 days, and describes its pricing as flat per partner.',
    sources: ['orderfulShopify', 'orderfulPricing'],
    span: 'lg:col-span-5',
  },
  {
    name: 'TrueCommerce',
    where: 'truecommerce.com',
    price: 'No list price on the page we read.',
    says: 'Lists Shopify as a featured storefront integration over a REST API. TrueCommerce says the integration bridges your ERP and your online storefront for order flow, pricing and inventory accuracy.',
    sources: ['truecommerce'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Cleo',
    where: 'cleo.com',
    price: 'WebEDI, a browser portal, starting at $99 a month. ERP Connect starting at $200 a month. Cleo Integration Cloud is custom pricing.',
    says: 'Lists Shopify eCommerce among its application connectors. Cleo says its starting prices are entry points, and that the quote confirms transaction usage and any setup charges before you commit.',
    sources: ['cleoConnectors', 'cleoPricing'],
    span: 'lg:col-span-12',
  },
];

/* -- When a product is enough and when a custom link is the better job. These
   are FactoryJet's own scoping rules and carry no third-party source. -- */
const FITS: ReadonlyArray<{ title: string; items: ReadonlyArray<string>; span: string; led: boolean }> = [
  {
    title: "A product's own Shopify connector is enough when",
    items: [
      'You trade with one or two partners and the product already supports them',
      'A purchase order can land in Shopify as a plain order or draft order',
      'You ship from one place, in standard cartons',
      'Shopify is the only system that needs the order',
    ],
    span: 'lg:col-span-5',
    led: false,
  },
  {
    title: 'A custom link is the better job when',
    items: [
      'The same order must reach an ERP or a 3PL as well as Shopify, and one of them has to be the master',
      "Your SKUs, pack sizes or units differ from the buyer's item numbers and need a cross-reference table",
      'B2B customers send purchase orders against price lists and payment terms held in Shopify',
      'You already use an EDI network and only the Shopify side is missing',
      'An order needs a check before it is accepted, such as a credit limit or a minimum quantity',
    ],
    span: 'lg:col-span-7',
    led: true,
  },
];

/* -- Where these links break. Six come from the linked pages. The fifth is a
   rule of ours and carries no source. -- */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Every trading partner has its own guide',
    b: "Kroger's EDI FAQ page alone links nine separate requirements pages, among them Kroger/Peyton's, Fred Meyer and Harris Teeter. A map built for one buyer has to be checked against the next buyer's guide.",
    sources: ['krogerFaq'],
  },
  {
    t: 'Item codes that do not match',
    b: "Your Shopify SKU and the buyer's item number are different codes. Kroger's FAQ says its Fred Meyer division creates its own UPC, starting 40001, when a vendor has no orderable UPC for a pack. The link needs a cross-reference table.",
    sources: ['krogerFaq'],
  },
  {
    t: 'A 997 that never goes out',
    b: "Kroger's FAQ says it monitors for acknowledgments and takes action when one has not arrived within the time the standard sets or 24 hours, whichever is shorter.",
    sources: ['krogerFaq', 'krogerCompliance'],
  },
  {
    t: 'A ship notice that is late or wrong',
    b: "Shopify's own EDI article says that in many cases a retailer will not accept a truck unless the ship notice was received and validated at least 24 hours ahead, and that retailers charge suppliers penalties for notices with errors.",
    sources: ['shopifyEdi'],
  },
  {
    t: 'Two systems taking the same order',
    b: 'If a purchase order lands in Shopify and in the ERP, stock comes off twice unless one of them is the master for orders. Pick the master before anything is built.',
    sources: [],
  },
  {
    t: 'Carton labels planned last',
    b: 'GS1 US describes the SSCC as an 18-digit number for one shipping unit, such as a case or a pallet, usually printed as a GS1-128 barcode. Decide early where those labels get printed. Orderful, for one, sells a label API starting at $99 a month.',
    sources: ['gs1', 'orderfulPricing'],
  },
  {
    t: 'Trading on paper past the deadline',
    b: 'Kroger gives a vendor 90 days to move to EDI. After that it deducts 1% of the invoice amount or $250, whichever is greater.',
    sources: ['krogerCompliance'],
  },
];

/* -- Who this is for. Kinds of seller the work suits, not a client list.
   Pictures were generated on 2026-10-11 and checked at full size. -- */
const SELLERS: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/retail-brand-packing.webp`,
    alt: 'A woman in a green apron presses a blank white label onto a plain brown carton at a wooden packing bench',
    t: 'Consumer brands entering retail chains',
    b: 'A buyer says yes, then a supplier guide arrives. Orders start coming as 850s and cartons need the labels the retailer scans.',
  },
  {
    img: `${IMG}/food-maker-jars.webp`,
    alt: 'A man in a white coat and hair net places unlabeled glass jars into a cardboard tray on a steel table',
    t: 'Food and drink makers supplying grocers',
    b: 'Grocery buyers order by the case and the pallet. The pack size on the purchase order has to match what your store calls one unit.',
  },
  {
    img: `${IMG}/distributor-pallet-aisle.webp`,
    alt: 'A man in a navy polo shirt pulls an orange pallet truck loaded with wrapped brown boxes down a warehouse aisle',
    t: 'Distributors with a B2B store',
    b: 'Some customers log in and order. Others want their purchasing system to send the order. Both should end up in the same Shopify order list.',
  },
  {
    img: `${IMG}/manufacturer-parts-bench.webp`,
    alt: 'A woman in safety glasses and a blue work shirt holds a small metal bracket up to inspect it above trays of brackets',
    t: 'Manufacturers and parts makers',
    b: 'Customers send purchase orders against agreed prices. The order has to reach the ERP that plans production as well as the store.',
  },
];

/* -- Process. Six steps, in the order we work. -- */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Read the trading partner guide',
    b: 'Each retailer or customer has its own EDI guide. It names the documents, the fields and the way it tests. We read it before we quote, because the guide sets the size of the job.',
  },
  {
    n: '02',
    t: 'Decide where each document lands',
    b: 'We write a short map and you approve it. It says where the 850 lands in Shopify, what sets off the 855, the 856 and the 810, and which system is the master for the order.',
  },
  {
    n: '03',
    t: 'Match the item codes',
    b: "Your SKUs, the buyer's item numbers and the pack sizes go into one cross-reference table. It is built and checked first, because every document depends on it.",
  },
  {
    n: '04',
    t: 'Choose the route',
    b: "If a product's own Shopify connector does the job, that is what we recommend. A custom link is quoted only for what the connector leaves out.",
  },
  {
    n: '05',
    t: 'Run sample documents',
    b: 'We feed sample purchase orders into a test store and show you the Shopify order each one produces, with the 855, 856 and 810 it would send back. Live orders wait until you and the trading partner have both passed them.',
  },
  {
    n: '06',
    t: 'Go live and stay on',
    b: "We check the first live documents against the trading partner's replies. After launch we can keep managing the servers, the APIs and the maintenance, so your team does not have to.",
  },
];

/* -- Comparison: custom link vs a product's connector vs a web EDI portal -- */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom link built by FactoryJet', isFactoryJet: true },
  { label: "An EDI product's Shopify connector" },
  { label: 'A web EDI portal' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Code we write between Shopify, your other systems and the EDI network you choose',
      "The maker's ready-made link between its EDI network and Shopify",
      'A website where a person reads each order and types each reply',
    ],
  },
  {
    feature: 'Where the purchase order lands',
    values: [
      'Where you decide: a Shopify order, a draft order for review, your ERP, or more than one',
      "Where the product puts it. Crstl's listing says orders and draft orders",
      'In the portal. Someone keys it into Shopify',
    ],
  },
  {
    feature: 'Rules it can follow',
    values: [
      'Yours: item cross-references, pack sizes, customer price lists, order checks',
      'The settings the product offers',
      'The checks the person keying it makes',
    ],
  },
  {
    feature: `List price read on ${CHECKED_ON}`,
    values: [
      'Build and support quoted as fixed prices in writing',
      'Crstl from $149 a month. Orderful Integrated from $399 a month. SPS Commerce on request',
      'Cleo WebEDI from $99 a month. Orderful web EDI $189 a month per trading partner',
    ],
  },
  {
    feature: 'Who supports it',
    values: ['FactoryJet, after launch as well. The code is yours', "The product's maker", 'Your own staff'],
  },
  {
    feature: 'Best fit',
    values: [
      'Orders must reach more than one system, or follow rules of your own',
      'One or two trading partners and a standard setup',
      'A few orders a month from one trading partner',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  {
    href: '/services/ecommerce-erp-integration',
    t: 'Ecommerce ERP integration',
    b: 'When the purchase order has to reach your ERP as well as the store.',
  },
  {
    href: '/services/shopify-quickbooks-integration',
    t: 'Shopify QuickBooks integration',
    b: 'Items, stock, prices and payouts kept in step with QuickBooks Online, Desktop or Enterprise.',
  },
  {
    href: '/services/shopify-plus-b2b',
    t: 'Shopify Plus B2B',
    b: 'Wholesale buyers with their own catalogs and terms inside one Shopify store.',
  },
  {
    href: '/b2b-ecommerce',
    t: 'B2B ecommerce',
    b: 'Portals where business customers see their own prices and reorder.',
  },
  {
    href: '/ecommerce-for-manufacturers',
    t: 'Ecommerce for manufacturers',
    b: 'Stores for companies that make what they sell.',
  },
  {
    href: '/services/erp-ai-agents',
    t: 'ERP AI agents',
    b: 'AI agents that prepare quotes, purchase orders and sales orders inside your ERP.',
  },
  {
    href: '/services/sales-order-automation-ai-agents',
    t: 'Sales order automation agents',
    b: 'Purchase orders that arrive by email or PDF turned into draft sales orders.',
  },
  {
    href: '/services/shopify-development',
    t: 'Shopify development',
    b: 'Store builds with the EDI and ERP links planned from the first day.',
  },
  {
    href: '/services/shopify-maintenance-services',
    t: 'Shopify maintenance and support',
    b: 'Ongoing care for the store and the links around it.',
  },
];

/** Small inline source links. Renders nothing when a claim is our own and has
 *  no source. py-1 keeps each link tall enough to tap when links wrap onto
 *  stacked rows. */
function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ShopifyEdiIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-fj-cream text-fj-ink`}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className={`${styles.hero} relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16`}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SHOPIFY EDI INTEGRATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Shopify EDI integration for retailer orders, ship notices and invoices.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  EDI is the fixed-format messaging that large retailers and distributors use to send orders and
                  receive invoices.
                </p>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}> We connect it to your Shopify store, with an EDI product when one fits and a
                  custom link when your rules need one. The quote is a fixed price, in writing, before work starts.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_shopify_edi_integration_hero"
                    service="Shopify EDI Integration"
                    submitLabel="Scope my EDI integration"
                  />
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

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>Registered Shopify Partner</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Retailer and vendor pages read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    The first documents, and which way each one travels
                  </figcaption>
                  <EdiFlowDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: sent by the buyer, lands in Shopify.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: sent from your store to the buyer.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Buyer means the retailer or business customer that sends the purchase order. We write down
                    where each document lands for your store before any build starts.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Yes. Shopify can exchange EDI with retailers and distributors through an EDI product or a custom
                link. The buyer&rsquo;s 850 purchase order becomes a Shopify order. The 855 acknowledgment, 856 ship
                notice and 810 invoice go back in the buyer&rsquo;s format. On {CHECKED_ON}, the Shopify App Store
                listed EDI products from SPS Commerce and Crstl.
              </p>
              <SourceLinks ids={['x12', 'appSearch', 'appSps', 'appCrstl']} />
            </div>
          </div>
        </section>

        {/* 3. THE DOCUMENTS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">EDI in plain words</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The four EDI documents a Shopify seller meets first.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  EDI stands for electronic data interchange. Two companies&rsquo; computers swap business documents
                  in a fixed format, so an order never has to be retyped from an email.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  In the US the format comes from X12, which says it has been chartered by the American National
                  Standards Institute for more than 40 years. Every document has a number.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  The buyer sends one. You send three back. A fifth, the 997, is a receipt that travels both ways.
                </p>
                <SourceLinks ids={['x12', 'shopifyEdi', 'krogerCompliance']} />
              </div>

              <div className={`${styles.factsBox} lg:col-span-8`} tabIndex={0} data-visual-facts="DOCS">
<table className={`${styles.facts} bg-white`}><tbody>
{DOCS.map((d) => (
<tr key={d.code}><th scope="row">
<div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">
                        {d.code} {d.name}
                      </div>
                      <div
                        className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                          d.flow === 'in' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {FLOW_LABEL[d.flow]}
                      </div>
                    </div>
</th><td>
<p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{d.note}</p>
</td></tr>
))}
</tbody></table>
</div>
            </div>
          </div>
        </section>

        {/* 4. THE TWO CASES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Which seller are you</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Two ways EDI reaches a Shopify store.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              The documents are the same in both cases. What changes is who is asking, and how much say you have over
              the rules. For company accounts and price lists, see{' '}
              <Link href="/services/shopify-plus-b2b" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify Plus B2B
              </Link>
              . When the order also has to reach your ERP, see{' '}
              <Link
                href="/services/ecommerce-erp-integration"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                ecommerce ERP integration
              </Link>
              . When wholesale buyers also order on the site and need payment terms or their own delivery rules at
              checkout, see{' '}
              <Link href="/services/shopify-checkout-customization" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify checkout customization
              </Link>
              .
            </p>

            <div className={`${styles.factsBox} mt-12`} tabIndex={0} data-visual-facts="CASES">
<table className={`${styles.facts} bg-fj-cream`}><tbody>
{CASES.map((c) => (
<tr key={c.n}><th scope="row">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {c.n}
                  </div>
<h3 className="font-fj-display text-xl font-semibold text-fj-ink">{c.title}</h3>
</th><td>
<p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{c.body}</p>
<ul className="mt-4 grid gap-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
<p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Before you start.</span> {c.note}
                  </p>
<SourceLinks ids={c.sources} />
</td></tr>
))}
</tbody></table>
</div>
            <p className="mt-6 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Retailer rules are as published on {CHECKED_ON}. Your own buyer&rsquo;s guide is the one that counts.
            </p>
          </div>
        </section>

        {/* 5. THE PRODUCTS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The products</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five EDI products with a Shopify connection, and what each one publishes.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              All five were read on their makers&rsquo; own pages on {CHECKED_ON}. A card gives a list price only
              where the maker prints one. Two details matter most when you compare them: where the purchase order
              lands, and how the price grows as you add trading partners.
            </p>
            <div className={`${styles.factsBox} mt-10`} tabIndex={0} data-visual-facts="PRODUCTS">
<table className={`${styles.facts} bg-white`}><tbody>
{PRODUCTS.map((p) => (
<tr key={p.name}><th scope="row">
<h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.name}</h3>
<div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                    Read on {p.where}
                  </div>
</th><td>
<p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{p.says}</p>
<p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    <span className="font-semibold text-fj-ink">List price.</span> {p.price}
                  </p>
<SourceLinks ids={p.sources} />
</td></tr>
))}
</tbody></table>
</div>
            <p className="mt-6 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Listing details and prices are as published on {CHECKED_ON}. A search for edi on the Shopify App Store
              that day returned the SPS Commerce and Crstl apps on its first page.
            </p>
            <SourceLinks ids={['appSearch']} />
          </div>
        </section>

        {/* 6. PRODUCT OR CUSTOM LINK */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The decision</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When an EDI product is enough, and when a custom link is the better job.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              A custom link does not replace the EDI network. Someone still has to translate X12 and deliver it to
              the buyer, and that is what the products above do. The custom part is the join between that network and
              your own systems.
            </p>
            <div className={`${styles.factsBox} mt-10`} tabIndex={0} data-visual-facts="FITS">
<table className={`${styles.facts} bg-fj-cream`}><tbody>
{FITS.map((f) => (
<tr key={f.title}><th scope="row">
<h3 className="font-fj-display text-xl font-semibold text-fj-ink">{f.title}</h3>
</th><td>
<ul className="mt-4 grid gap-2">
                    {f.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
</td></tr>
))}
</tbody></table>
</div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-ink">
              The two can be combined: a product for the network, and a custom link on the Shopify side.
              Orderful&rsquo;s Integrated plan, for example, is sold as an API for EDI that other systems are built
              onto.
            </p>
            <SourceLinks ids={['orderfulPricing']} />
          </div>
        </section>

        {/* 7. WHERE IT BREAKS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Where it goes wrong</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Seven things that go wrong between Shopify and a trading partner.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each one links to the page it comes from, except the fifth, which is our own rule.
            </p>
            <div className={`${styles.factsBox} mt-10`} tabIndex={0} data-visual-facts="BREAKS">
<table className={`${styles.facts} bg-white`}><tbody>
{BREAKS.map((l) => (
<tr key={l.t}><th scope="row">
<h3 className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</h3>
</th><td>
<p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
<SourceLinks ids={l.sources} />
</td></tr>
))}
</tbody></table>
</div>
          </div>
        </section>

        <MidPageCTA
          headline="Send us your trading partner's EDI guide. We reply with a plan."
          sub="Tell us which retailers or customers ask for EDI and where their orders need to land. You get back the route we would take and, if it needs building, a fixed quote in writing."
          label="Scope my EDI integration"
        />

        {/* 8. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  For sellers whose buyers order by purchase order.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  These four sell different things. Each one receives orders from another company&rsquo;s system
                  and has to answer in that company&rsquo;s format.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If you make what you sell, see{' '}
                  <Link
                    href="/ecommerce-for-manufacturers"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    ecommerce for manufacturers
                  </Link>
                  . For a wholesale portal with customer pricing, see{' '}
                  <Link href="/b2b-ecommerce" className="font-semibold text-fj-ink underline underline-offset-4">
                    B2B ecommerce
                  </Link>
                  .
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {SELLERS.map((s) => (
                  <li key={s.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                    <img src={s.img}
                      alt={s.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{s.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How we work</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we scope, build and test an EDI link.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The trading partner&rsquo;s guide is the brief. We show working software on your own data before a
                  contract, and you own the code we write. If your books are in QuickBooks, the{' '}
                  <Link
                    href="/services/shopify-quickbooks-integration"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify QuickBooks integration
                  </Link>{' '}
                  page covers that side.
                </p>
                <img src={`${IMG}/dock-check-shipment.webp`}
                  alt="Two people check a pallet of wrapped brown boxes at a loading dock doorway, one holding an orange clipboard"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 10. COMPARISON: custom link vs a product's connector vs a web EDI portal */}
        <ComparisonTable
          eyebrow="Three routes compared"
          headline="A web portal, a product's connector, or a custom link."
          lead="A web portal is the right start for a few orders a month. A connector suits a standard setup. A custom link earns its place when orders have to reach more than one system or follow rules of your own."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Prices are the makers' published list prices on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of three ways to connect Shopify to EDI trading partners"
        />

        {/* 11. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Related work</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Shopify, B2B and ERP services beside this one.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Sources</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What we read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We opened all of these pages on that day and wrote each claim from what the page said. Retailers
                  revise their guides and vendors change prices, so read the linked page yourself before you rely on
                  a figure.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <FAQ
          eyebrow="Shopify EDI integration FAQ"
          headline="What Shopify sellers ask about EDI."
          lead={`Questions come from Google's question boxes for these searches on ${CHECKED_ON}, and from the searches themselves. Retailer and vendor answers are from their own pages, read the same day.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 14. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Shopify EDI integration"
          headline="Purchase orders in. Ship notices and invoices out."
          sub="Name the trading partners that ask for EDI and say where their orders should land. You get the document map in writing and a test run with sample documents before go-live. The same team supports it afterwards."
          primaryCta={{ label: 'Scope my EDI integration', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Fixed quote in writing before work starts. You own the code we write. Registered Shopify Partner."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
