import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/shopify-edi-integration, built 2026-10-29.

   Why this page exists: United Kingdom searches measured 2026-10-29
   (DataForSEO, location 2826): "edifact" 210, "edi invoicing" 170, "edi uk"
   140, "edi integration" 110, "tradacoms" 40, "edi retail" 30, "eancom" 20,
   "ecommerce edi" 20, "netsuite edi integration" 20, "shopify edi" 10,
   "shopify edi integration" 10, "edi providers uk" 10. The US twin is /services/shopify-edi-integration.
   No other /uk/ page covered EDI (checked by topic words on 2026-10-29).

   Truth rules for anyone editing this file.
   1. Every standard, tax rule, platform feature and list price was read on
      the owner's own page on 2026-10-29 and links to it through the SRC map
      below. GS1 UK, GS1, UNECE, XEDI and the Shopify App Store were read in a
      real browser because they refuse a plain fetch. Re-read the page before
      changing a figure, and update READ_ON.
   2. No FactoryJet price. The only money figures are the list prices of one
      named UK EDI product. No GBP build range is quoted, because no named UK
      agency range for this job could be verified on 2026-10-29.
   3. No partner, accreditation or approval claim with GS1, any EDI network or
      any retailer. No retailer's own EDI rules are stated, because none could
      be read on a retailer's own page.
   4. Client proof is GPSUK (Commerceflo) and Sow Easy (WooCommerce and Odoo,
      Odoo link still in build). Neither is presented as Shopify or EDI work.
   5. Nothing on what an integration costs to run or look after.
   6. Structure mirrors /uk/shopify-xero-integration and
      /uk/ecommerce-consultant (imports, components, CSS, schema). The copy is
      written fresh for this page.
   7. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/shopify-edi-integration';
const UPDATED = '2026-10-31';
const UPDATED_LABEL = '31 October 2026';
const READ_ON = '29 October 2026';
const TITLE = 'Shopify EDI Integration UK: EANCOM & Tradacoms | FactoryJet';
const H1 = 'Shopify EDI Integration for UK Suppliers';
const DESCRIPTION =
  'Shopify EDI integration for UK suppliers: EANCOM orders from retailers into Shopify, despatch advice and VAT invoices back, linked to Xero, Sage or your ERP.';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify EDI Integration', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  gs1ukEdi: { label: 'GS1 UK: What is EDI (electronic data interchange)?', url: 'https://www.gs1uk.org/knowledge-hub/standards/what-is-edi-electronic-data-interchange' },
  gs1ukTradacomsEnd: { label: 'GS1 UK: Ending support for TRADACOMS (14 June 2017)', url: 'https://www.gs1uk.org/insights/news/ending-support-for-tradacoms' },
  gs1ukTradacoms: { label: 'GS1 UK: Can GS1 UK support me with Tradacoms?', url: 'https://www.gs1uk.org/knowledge-hub/standards/can-gs1-uk-support-me-with-tradacoms' },
  gs1ukSscc: { label: 'GS1 UK: What is an SSCC?', url: 'https://www.gs1uk.org/knowledge-hub/barcodes/what-is-an-sscc' },
  gs1Eancom: { label: 'GS1: EANCOM', url: 'https://www.gs1.org/standards/eancom' },
  uneceDir: { label: 'UNECE: UN/EDIFACT D.21B message type directory', url: 'https://service.unece.org/trade/untdid/d21b/trmd/trmdi1.htm' },
  rfc4130: { label: 'RFC 4130: AS2, Business Data Interchange Using HTTP (July 2005)', url: 'https://www.rfc-editor.org/rfc/rfc4130.txt' },
  govEinvoice: { label: 'GOV.UK: Promoting electronic invoicing, consultation response (updated 26 November 2025)', url: 'https://www.gov.uk/government/consultations/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector/outcome/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector-consultation-response' },
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govVatInvoices: { label: 'GOV.UK: VAT record keeping, VAT invoices', url: 'https://www.gov.uk/vat-record-keeping/vat-invoices' },
  shopifyB2b: { label: 'Shopify Help: Shopify B2B', url: 'https://help.shopify.com/en/manual/b2b' },
  shopifyTerms: { label: 'Shopify Help: B2B payment terms', url: 'https://help.shopify.com/en/manual/b2b/payment-terms' },
  devDraftInput: { label: 'shopify.dev: DraftOrderInput', url: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput' },
  devFulfillment: { label: 'shopify.dev: fulfillmentCreate mutation', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate' },
  devWebhooks: { label: 'shopify.dev: About webhooks', url: 'https://shopify.dev/docs/apps/build/webhooks' },
  xediHome: { label: 'XEDI: home page', url: 'https://xedi.com/' },
  xediPricing: { label: 'XEDI: EDI pricing', url: 'https://xedi.com/pricing' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Question wording draws on Google People Also Ask boxes and related searches
   for "edi integration", "edi uk", "edifact", "tradacoms", "edi invoicing"
   and "edi software", pulled for the United Kingdom on 2026-10-29
   (DataForSEO, location 2826), plus the searches themselves. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'EDI in the UK' },
  { key: 'retail', label: 'Retailers, GS1 and VAT' },
  { key: 'shopify', label: 'The Shopify side' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // EDI in the UK
  {
    category: 'basics',
    question: 'Can Shopify take EDI orders from UK retailers and distributors?',
    answer:
      'Yes, through an EDI provider with a Shopify connector or through a custom link. The buyer’s system sends a purchase order, often as an EANCOM ORDERS message, and it arrives in Shopify as a draft order or an order against that buyer’s company account. The order response, despatch advice and invoice go back the same way. XEDI, a UK provider, lists Shopify and Shopify Plus EDI integration on its own site (read on 29 October 2026).',
  },
  {
    category: 'basics',
    question: 'What is EDI in the UK?',
    answer:
      'EDI means electronic data interchange, and in UK retail EDI is how most large buyers send orders. GS1 UK describes it as the automated exchange of business documents, such as purchase orders, invoices and shipping notices, between different computer systems. The standards GS1 UK supports are GS1 EANCOM, GS1 XML, GS1 UN/CEFACT XML Profiles and GS1 EDI Business Terms, and some older links use Tradacoms. Nobody retypes an order from a PDF or an email: the buyer’s system sends it, and yours reads it.',
  },
  {
    category: 'basics',
    question: 'What is the difference between EANCOM and EDIFACT?',
    answer:
      'EANCOM is a slimmed-down version of EDIFACT. GS1 describes EANCOM as a GS1 subset of the UN/EDIFACT standard that keeps only the message elements business applications need and the syntax requires. It also uses GS1 identification keys: GTINs for products, GLNs for locations and SSCCs for pallets and cases. The message names stay the same, so an EANCOM purchase order is still an ORDERS message.',
  },
  {
    category: 'basics',
    question: 'Is Tradacoms still used, and should a new link use it?',
    answer:
      'Some older trading links may still ask for it. GS1 UK says Tradacoms was developed in the early 1980s for UK retailers and wholesalers, that no new message types have been developed since 1998, and that it stopped supporting Tradacoms from 1 July 2017. It advises new EDI users to adopt EANCOM or GS1 XML wherever possible. We build to whatever your buyer’s guide specifies.',
  },
  {
    category: 'basics',
    question: 'What is the difference between ANSI X12 and EDIFACT?',
    answer:
      'They are two separate rulebooks for the same kind of message. RFC 4130, which defines AS2 for carrying EDI over HTTP, lists the two side by side: ANSI X12 and UN/EDIFACT. X12 numbers its documents, so a purchase order is an 850. EDIFACT names them, so the same order is ORDERS. EANCOM, the main EDI standard GS1 UK supports, is built on EDIFACT. If you also supply US buyers, our US Shopify EDI page covers X12.',
  },
  {
    category: 'basics',
    question: 'What is the difference between API and EDI integration?',
    answer:
      'EDI is a fixed message format agreed between trading partners, often carried by an EDI provider. An API is a way for one program to ask another for data directly, which is how Shopify, Xero and most ERPs are reached. A Shopify EDI link, like most ecommerce EDI, uses both. The EDIFACT message arrives from the buyer, and the link turns it into Shopify API calls, such as creating a draft order with the buyer’s purchase order number.',
  },
  {
    category: 'basics',
    question: 'How do EDI messages travel: AS2, a VAN or SFTP?',
    answer:
      'The message format and the way it travels are two separate choices. AS2, set out in RFC 4130, sends EDI files over the web with a digital signature, encryption and a signed receipt back. A VAN, or value-added network, is a provider’s mailbox service that passes files between trading partners. SFTP is a secure file drop both sides log in to. Your buyer’s EDI guide names the one it uses.',
  },
  {
    category: 'basics',
    question: 'Is EDI a legal requirement in the UK?',
    answer:
      'No UK law requires EDI for ordering. It is a trading requirement: a retailer or distributor writes it into its supplier terms, and you agree to it when you take the account. Invoicing is moving the other way. GOV.UK says mandatory e-invoicing for all VAT invoices is coming from 2029, though not for sales to consumers, and that the technical standards are still to be developed.',
  },
  // Retailers, GS1 and VAT
  {
    category: 'retail',
    question: 'What are GTIN, GLN and SSCC, and do we need them?',
    answer:
      'They are the GS1 numbers EANCOM uses. A GTIN identifies a product, the number behind its barcode. A GLN identifies a location, such as a retailer’s distribution centre or one of its stores. GS1 UK describes the SSCC as its identifier for shippers and logistics units, used to track a case or pallet. Expect your buyer to order by GTIN, deliver to a GLN and scan an SSCC label at goods-in.',
  },
  {
    category: 'retail',
    question: 'Does GS1 UK set up EDI for us?',
    answer:
      'No. GS1 UK says it provides the standards for EDI but does not provide the technology to implement it with your trading partners, and it recommends speaking to a GS1 UK partner early on. It does give members free access to its GS1 Print service to generate SSCCs and logistics labels. The connection itself comes from an EDI provider, a custom link, or both.',
  },
  {
    category: 'retail',
    question: 'What is a despatch advice, and why must it match the labels?',
    answer:
      'A despatch advice, the DESADV message in the UN/EDIFACT directory, tells the buyer what is on its way before it arrives: which order, which products, how many, packed in which cases or on which pallets. Each case or pallet carries an SSCC label. The buyer’s goods-in team scans the label and looks for the same SSCC in the despatch advice. If the two disagree, the delivery has to be checked by hand.',
  },
  {
    category: 'retail',
    question: 'What does an EDI invoice need for UK VAT?',
    answer:
      'The same content a paper VAT invoice needs, in the buyer’s message format. GOV.UK says VAT invoices must include your VAT number and show the VAT separately. HMRC’s Making Tax Digital notice says the digital record of each supply holds the time of supply, the value before VAT and the VAT rate. The INVOIC message carries those per line. Your accountant confirms the rates, and the link applies them.',
  },
  {
    category: 'retail',
    question: 'How does the 2029 e-invoicing mandate affect EDI suppliers?',
    answer:
      'It makes the invoice side of EDI the normal way to bill business customers. The government’s consultation response says all VAT invoices must be e-invoices from 2029, that it has focused on a decentralised model, and that it will develop standards for interoperability. It names EDIFACT among the formats in use today. Until the standard is published, we build invoices so the output format can change without rebuilding the order rules.',
  },
  {
    category: 'retail',
    question: 'Does an EDI or Shopify link count as a digital link for Making Tax Digital?',
    answer:
      'Data moved by software counts. VAT Notice 700/22 lists API transfer, automated data transfer, and XML or CSV import and export among accepted digital links. It says HMRC does not count copy and paste as a digital link, and that moving data between programs by hand is not acceptable. A link that moves orders and invoices between the EDI provider, Shopify and Xero or Sage by API stays on the accepted list.',
  },
  // The Shopify side
  {
    category: 'shopify',
    question: 'What does an EDI purchase order become inside Shopify?',
    answer:
      'Usually a draft order, so a person can check it before it becomes a confirmed order. Shopify’s DraftOrderInput accepts a purchase order number, payment terms, a purchasing entity for the buying company, and a time after which reserved stock is released. That covers what an ORDERS message brings. You choose per trading partner whether orders stop as drafts or go straight through.',
  },
  {
    category: 'shopify',
    question: 'Which Shopify plans support B2B orders from EDI buyers?',
    answer:
      'Shopify’s help centre says Shopify B2B is available on the Basic, Grow, Advanced and Shopify Plus plans, and not on Starter or Retail. B2B customers are set up as companies in the Shopify admin, each with its own pricing, currency, products, payment and shipping methods. An EDI order is posted against the right company, so it picks up that buyer’s prices and terms. Read on 29 October 2026.',
  },
  {
    category: 'shopify',
    question: 'Can Shopify payment terms match a retailer’s terms?',
    answer:
      'For the common ones, yes. Shopify’s B2B help page lists net 7, 15, 30, 45, 60 and 90 days, counted from the order date, plus due on fulfilment, for company locations and draft orders. A fixed calendar date is available on individual draft orders only. If a buyer pays on terms Shopify does not list, such as end of month following, the due date is worked out in your accounts system instead.',
  },
  {
    category: 'shopify',
    question: 'Can NetSuite EDI orders, or Xero and Sage ones, run alongside Shopify?',
    answer:
      'Yes. The order can go to Shopify, and the invoice and stock movement to Xero, Sage 50, Sage 200, Sage Intacct, QuickBooks, NetSuite, Dynamics 365 Business Central or Odoo. Warehouse systems such as Linnworks, Mintsoft or Brightpearl can sit in the chain too. The first job is naming one master for orders and one for stock, so goods come off the shelf once and the invoice is raised once.',
  },
  {
    category: 'shopify',
    question: 'What happens if a Shopify webhook is missed?',
    answer:
      'The link has to notice and catch up. A webhook is the alert Shopify sends when something changes, such as a new fulfilment. Shopify’s developer documentation says webhook delivery is not always guaranteed, that ordering is not guaranteed, and that an app should not rely on webhooks alone. It recommends reconciliation jobs: scheduled checks that fetch data from Shopify and compare it. We build one into every EDI link, so a missing notification does not leave a despatch advice or an invoice unsent.',
  },
  {
    category: 'shopify',
    question: 'Can Royal Mail, DPD or Evri tracking go back to the buyer?',
    answer:
      'Yes, where the buyer asks for it. Shopify’s fulfillmentCreate mutation marks items as fulfilled and accepts tracking information. When your warehouse books a parcel with Royal Mail, DPD or Evri and records the tracking number on the Shopify fulfilment, the link can add it to the despatch advice. Pallet deliveries to a distribution centre rely on SSCC labels instead.',
  },
  // Cost and working with us
  {
    category: 'working',
    question: 'How much does Shopify EDI integration cost in the UK?',
    answer:
      'The EDI provider and the build are priced separately. On 29 October 2026, XEDI, a UK provider, listed web-portal plans at £128, £256 and £348 per trading partner a month, plus usage. Its comparison table ticks Shopify integration only on Enterprise, which is custom-priced. We found no published GBP build range from a named UK agency. FactoryJet quotes the build as a fixed price per phase, in writing, after a short scoping call.',
  },
  {
    category: 'working',
    question: 'How long does it take to go live with EDI on Shopify?',
    answer:
      'It depends on four steps, and three are not ours. Your team supplies the GTIN for each product and the GLN for each delivery point. Your EDI provider sets up the mailbox for each buyer. We build and show the link on your own data. Then the buyer runs its own test cycle and decides when you go live. The written quote sets our part against the go-live date your buyer gave you.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For an EDI job that means a sample ORDERS message from your buyer’s guide arriving as a draft order in a test Shopify store, against the right company and prices, with the order response, despatch advice and invoice it would send back laid out for you to check.',
  },
  {
    category: 'working',
    question: 'Who owns the link, and who looks after it?',
    answer:
      'You own the code and the repository from day one. Hosting can run in your own accounts, at cost, with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional. The build is a fixed price per phase, quoted in writing. Each change is quoted and approved per request, and there is no monthly minimum.',
  },
  {
    category: 'working',
    question: 'We already have an EDI provider and a 3PL. Can you build around them?',
    answer:
      'Yes. If you already trade through an EDI provider, we build on it rather than move you. Your provider keeps carrying messages to and from buyers, and your warehouse or 3PL (the outside logistics firm that stores and ships your stock) keeps packing orders. We build what joins them: Shopify, your accounts and your stock system each receiving and sending what the buyer’s guide asks for.',
  },
];

/* The messages. Names are the UN/EDIFACT directory's own (D.21B). The
   Shopify column restates shopify.dev and Shopify Help pages read the same
   day. */
const MESSAGES: { code: string; name: string; dir: string; shopify: string }[] = [
  { code: 'ORDERS', name: 'Purchase order message', dir: 'Buyer to you', shopify: 'A draft order or order, with the buyer’s PO number, company and payment terms' },
  { code: 'ORDCHG', name: 'Purchase order change request message', dir: 'Buyer to you', shopify: 'An edit to the open draft order, held for a person if stock has already been picked' },
  { code: 'ORDRSP', name: 'Purchase order response message', dir: 'You to buyer', shopify: 'Built from the draft order once lines are accepted, changed or refused' },
  { code: 'DESADV', name: 'Despatch advice message', dir: 'You to buyer', shopify: 'Built from the Shopify fulfilment, with SSCCs for each case or pallet' },
  { code: 'INVOIC', name: 'Invoice message', dir: 'You to buyer', shopify: 'Built from the order lines and VAT rates, or from the invoice in your accounts system' },
  { code: 'PRICAT', name: 'Price/sales catalogue message', dir: 'Either way', shopify: 'Product, GTIN and price updates against the buyer’s B2B catalogue' },
  { code: 'INVRPT', name: 'Inventory report message', dir: 'You to buyer', shopify: 'Stock read from Shopify, or from the system that owns stock' },
  { code: 'SLSRPT', name: 'Sales data report message', dir: 'Buyer to you', shopify: 'Store sales by product, kept for forecasting rather than posted as orders' },
  { code: 'RECADV', name: 'Receiving advice message', dir: 'Buyer to you', shopify: 'What the buyer booked in, compared with the despatch advice' },
  { code: 'APERAK', name: 'Application error and acknowledgement message', dir: 'Either way', shopify: 'An alert to a person when a message is rejected' },
];

/* Who owns each record. The owner column is the map we propose on day one. */
const OWNERS: { record: string; owner: string; note: string }[] = [
  { record: 'Products and GTINs', owner: 'Your ERP or Shopify, agreed once', note: 'Every variant the buyer can order needs the GTIN it orders by.' },
  { record: 'Buyer accounts and delivery points', owner: 'Shopify B2B companies and locations', note: 'Each GLN the buyer sends maps to one company location.' },
  { record: 'Trade prices and terms', owner: 'Shopify B2B, or the ERP if it holds price lists', note: 'Shopify lists net 7 to net 90 and due on fulfilment.' },
  { record: 'Orders', owner: 'Shopify', note: 'Draft first, confirmed after checks, per trading partner.' },
  { record: 'Stock', owner: 'Agreed per business: Shopify, Linnworks, Mintsoft, Brightpearl or the ERP', note: 'One master, so stock comes off once.' },
  { record: 'Invoices and VAT', owner: 'Your accounts system: Xero, Sage, QuickBooks, NetSuite, Business Central or Odoo', note: 'Your accountant sets the VAT rates the INVOIC carries.' },
  { record: 'Despatch and tracking', owner: 'Your warehouse, recorded on the Shopify fulfilment', note: 'Royal Mail, DPD or Evri tracking where the buyer asks for it.' },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify EDI Integration UK',
      serviceType: 'EDI integration for Shopify stores selling to UK retailers and distributors: EANCOM and Tradacoms orders, order responses, despatch advice and invoices, GS1 identifiers, links to accounts, ERP and warehouse systems',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'For UK suppliers, FactoryJet scopes, builds, tests and supports EDI trading from a Shopify store. Purchase orders from retailers, wholesalers and distributors arrive as Shopify draft orders against the buyer’s company account, and the order response, despatch advice and VAT invoice go back in the buyer’s format. Work covers choosing an EDI provider, mapping GTINs and GLNs, and links to Xero, Sage, NetSuite, Business Central, Odoo and warehouse systems.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      datePublished: '2026-10-29',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: twinAlternates['shopify-edi-integration'],
  },
  openGraph: {
    title: TITLE,
    description:
      'How UK suppliers take EDI orders from retailers and distributors into Shopify and send despatch advice and VAT invoices back: EANCOM, Tradacoms, GS1 numbers and the 2029 e-invoicing change.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const scList = { listStyle: 'none', margin: 0, padding: 0 } as const;
const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids, on = READ_ON }: { ids: SrcKey[]; on?: string }) {
  return (
    <p style={srcNote}>
      Sources, read on {on}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function ShopifyEdiIntegrationUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-edi-integration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Shopify EDI Integration UK</span>
                  <span className="chip">EANCOM and Tradacoms</span>
                  <span className="chip">GS1 GTIN, GLN, SSCC</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Retailer and distributor orders come into Shopify. Despatch advice and invoices go back out. A UK
                  retailer, wholesaler or distributor has said yes to your range, and its buying system will send
                  purchase orders by EDI. FactoryJet connects those orders to Shopify, and to the Xero, Sage, NetSuite,
                  Business Central or Odoo set-up behind it. Order responses, despatch advice and VAT invoices go back
                  in the format your buyer’s guide asks for.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_edi_integration_hero" service="Shopify EDI Integration" submitLabel="Scope my EDI link" />
                </div>
              </div>

              <div className="card card-top-orange" style={{ position: 'sticky', top: 96 }}>
                <span className="eyebrow">The four messages most UK suppliers meet first</span>
                <ul style={scList}>
                <li className="scorecard-row">
                  <div><div className="scorecard-metric">ORDERS: purchase order</div><div className="scorecard-note">buyer to you, lands as a Shopify draft order</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>In</div>
                </li>
                <li className="scorecard-row">
                  <div><div className="scorecard-metric">ORDRSP: order response</div><div className="scorecard-note">lines accepted, changed or refused</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Out</div>
                </li>
                <li className="scorecard-row">
                  <div><div className="scorecard-metric">DESADV: despatch advice</div><div className="scorecard-note">what is on each SSCC-labelled pallet</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Out</div>
                </li>
                <li className="scorecard-row">
                  <div><div className="scorecard-metric">INVOIC: invoice</div><div className="scorecard-note">VAT shown separately, line by line</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Out</div>
                </li>
                </ul>
                <p style={{ fontSize: 12.5, marginTop: 10 }}>
                  Message names from the UN/EDIFACT directory. EANCOM, the GS1 subset of UN/EDIFACT, uses the same
                  names.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Can a Shopify store trade by EDI with UK retailers and distributors?</span>
              <p>
                Yes. A buyer’s purchase order, often an EANCOM ORDERS message, becomes a Shopify draft order against
                that buyer’s B2B company, carrying its purchase order number and payment terms. The order response,
                despatch advice and invoice are built from Shopify and your accounts system and sent back. An EDI
                provider carries the messages. A connector or a custom link joins it to Shopify.
              </p>
            </div>
            <Sources ids={['gs1Eancom', 'uneceDir', 'devDraftInput', 'shopifyB2b']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                <b>EANCOM</b> is GS1’s cut-down version of UN/EDIFACT, the United Nations rulebook for trade
                messages, and the main EDI standard GS1 UK supports. A <b>GTIN</b> is the number behind a product
                barcode, and a <b>GLN</b> identifies a place, such as a distribution centre. An <b>SSCC</b> is the
                serial number on a pallet or case label that the buyer scans at goods-in.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Before any message is mapped, we write down with you what happens when a 40-line order arrives for a
              store GLN you have never seen, at a case size Shopify sells as single units, on terms your accounts
              system has to chase. Those rules take longer to agree than the EDI mailbox takes to switch on.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '2022', t: 'is the year GS1 says the EANCOM standards files were last updated', s: 'GS1, EANCOM', u: SRC.gs1Eancom.url },
                { v: '1998', t: 'is the year since which GS1 UK says no new Tradacoms message types have been developed', s: 'GS1 UK, Tradacoms', u: SRC.gs1ukTradacoms.url },
                { v: '1 July 2017', t: 'is the date GS1 UK stopped supporting Tradacoms and backed EANCOM and GS1 XML', s: 'GS1 UK, ending support', u: SRC.gs1ukTradacomsEnd.url },
                { v: '2029', t: 'is when the government says all VAT invoices must be issued as e-invoices', s: 'GOV.UK, e-invoicing response', u: SRC.govEinvoice.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. STANDARDS: EANCOM, TRADACOMS, GS1 XML */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK EDI standards</span>
                <h2>EANCOM, Tradacoms or GS1 XML: which one your buyer will send</h2>
                <div className="stack mt-6">
                  <p>
                    <b>EANCOM</b> is the standard GS1 UK advises new EDI users to adopt. GS1 describes it as a GS1 subset of UN/EDIFACT that
                    keeps only the elements business applications need, built around GS1 numbers for products,
                    locations and logistics units. Its standards files were last updated in 2022.
                  </p>
                  <p>
                    <b>Tradacoms</b> is older and British. GS1 UK says it was developed in the early 1980s for UK
                    retailers and wholesalers to process orders and invoices, that no new message types have been
                    developed since 1998, and that GS1 UK has not supported it since 1 July 2017. That notice was written to existing
                    users, so a supplier taking on an older account may still be asked for it.
                  </p>
                  <p>
                    <b>GS1 XML</b> is the other format GS1 UK lists as supported and actively developed, beside the
                    GS1 UN/CEFACT XML profile.
                  </p>
                  <p>
                    The format is the buyer’s choice, written into its supplier EDI guide. We read that guide before
                    anything else, because it also sets the message versions, the identifiers it expects and how it
                    wants you to test.
                  </p>
                </div>
                <Sources ids={['gs1Eancom', 'gs1ukEdi', 'gs1ukTradacoms', 'gs1ukTradacomsEnd']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Status as GS1 UK and GS1 describe it</span>
                <ul style={scList}>
                  <li className="scorecard-row"><div><div className="scorecard-metric">EANCOM</div><div className="scorecard-note">GS1 subset of UN/EDIFACT, files updated 2022</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Supported</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">GS1 XML</div><div className="scorecard-note">actively developed, used worldwide</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Supported</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Tradacoms</div><div className="scorecard-note">early 1980s, no new messages since 1998</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Legacy</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">ANSI X12</div><div className="scorecard-note">the US format, numbered documents</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>US buyers</div></li>
                </ul>
                <p style={{ fontSize: 12.5, marginTop: 10 }}>
                  RFC 4130 names X12 and UN/EDIFACT as the two EDI formats it carries. For X12 work, see our{' '}
                  <a href="/services/shopify-edi-integration" style={inlineLink}>US Shopify EDI integration page</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE MESSAGES */}
        <section className="sec-lg" id="messages">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">The messages</span>
              <h2>Ten EDIFACT messages, and where each one meets Shopify</h2>
              <p className="lead mt-4">
                Names and descriptions come from the UN/EDIFACT D.21B message directory published by UNECE. Most
                buyers start with the first four. The rest depend on the account.
              </p>
            </div>
            <p className="md:hidden mt-6" style={srcNote}>Swipe sideways to see every column.</p>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="EDIFACT messages and Shopify" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
              <thead>
                <tr>
                  <th>Message</th>
                  <th>Directory name</th>
                  <th>Direction</th>
                  <th className="fj">Where it meets Shopify</th>
                </tr>
              </thead>
              <tbody>
                {MESSAGES.map((m) => (
                  <tr key={m.code}>
                    <td className="feat">{m.code}</td>
                    <td>{m.name}</td>
                    <td>{m.dir}</td>
                    <td className="fj">{m.shopify}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
            <p style={srcNote}>
              The Shopify column is the map we propose on day one. Which messages you exchange is set by each buyer’s
              guide.
            </p>
            <Sources ids={['uneceDir', 'devDraftInput', 'devFulfillment', 'shopifyB2b']} />
          </div>
        </section>

        {/* 6. RECORD OWNERS AND LOCAL SYSTEMS */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Start with owners</span>
              <h2>Who owns each record when EDI, Shopify and your accounts all touch the same order</h2>
              <p className="lead mt-4">
                An EDI order touches three or four systems before it is paid. Each record needs one home, or the same
                pallet gets invoiced twice. The list below is where we start, and yours is agreed in writing.
              </p>
            </div>
            <p className="md:hidden mt-6" style={srcNote}>Swipe sideways to see every column.</p>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="Record owners" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
              <thead>
                <tr>
                  <th>Record</th>
                  <th className="fj">Owner</th>
                  <th>Worth knowing</th>
                </tr>
              </thead>
              <tbody>
                {OWNERS.map((o) => (
                  <tr key={o.record}>
                    <td className="feat">{o.record}</td>
                    <td className="fj">{o.owner}</td>
                    <td>{o.note}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
            <Sources ids={['shopifyB2b', 'shopifyTerms', 'devFulfillment']} />
            <p className="mt-6" style={{ maxWidth: 820 }}>
              If the accounts side is Xero, our{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration page</a> covers VAT by
              rate, payouts and Making Tax Digital in detail. For trade buyers who order on a website as well as by
              EDI, see <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a>.
            </p>
          </div>
        </section>

        {/* 7. VAT, MTD AND THE 2029 E-INVOICING MANDATE */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">VAT and e-invoicing</span>
                <h2>EDI invoicing in the UK: VAT, Making Tax Digital and the 2029 e-invoicing change</h2>
                <div className="stack mt-6">
                  <p>
                    <b>What the invoice carries.</b> GOV.UK says VAT invoices must include your VAT number and show
                    the VAT separately. HMRC’s VAT Notice 700/22 says the digital record of each supply holds the
                    time of supply, the value before VAT and the rate charged. An INVOIC message carries all three on
                    each line, at the rates your accountant has set.
                  </p>
                  <p>
                    <b>Digital links.</b> The same notice lists API transfer, automated data transfer, and XML or CSV
                    import and export among accepted digital links. It says HMRC does not count copy and paste as one.
                    A link that moves the order and invoice between the EDI provider, Shopify and your accounts system
                    by software stays on the accepted side.
                  </p>
                  <p>
                    <b>2029.</b> The government’s response to its e-invoicing consultation, updated 26 November 2025,
                    says all VAT invoices must be issued as e-invoices from 2029. That covers invoices to businesses
                    and to government, not to consumers. It names EDIFACT among the formats businesses use today.
                  </p>
                  <p>
                    The response says the government has focused on a decentralised model. Businesses send
                    e-invoices directly through their chosen software providers, rather than through a central
                    government platform. It will develop standards for interoperability, so that
                    different invoicing systems can read each other’s files. Public bodies already have to accept
                    e-invoices that comply with BS EN 16931, a standard the response points to for cross-border
                    compatibility.
                  </p>
                  <p>
                    Because the UK standard is not set yet, we keep the invoice output separate from the order rules.
                    When HMRC publishes the format, only that layer changes.
                  </p>
                </div>
                <Sources ids={['govVatInvoices', 'govNotice', 'govEinvoice']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What VAT Notice 700/22 accepts as a digital link</span>
                <ul style={scList}>
                  <li className="scorecard-row"><div><div className="scorecard-metric">API transfer</div><div className="scorecard-note">how Shopify and most accounts systems are reached</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Automated data transfer</div><div className="scorecard-note">an EDI provider passing messages on</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">XML or CSV import and export</div><div className="scorecard-note">download from one system, upload to another</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Copy and paste, or retyping</div><div className="scorecard-note">HMRC does not count it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Not a link</div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ROUTES AND LIST PRICES */}
        <section className="sec-lg dot-grid" id="routes">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Three routes</span>
                <h2>Web EDI portal, provider connector or custom link: which one fits</h2>
                <div className="stack mt-6">
                  <p>
                    <b>A web EDI portal.</b> Orders arrive in an online mailbox, and a person keys the replies. It
                    suits one buyer and a handful of orders a week. When staff start keying the same orders into
                    Shopify a second time, it is time to move on.
                  </p>
                  <p>
                    <b>An EDI provider with a Shopify connector.</b> The provider carries messages to every buyer and
                    a connector places orders in Shopify. XEDI, a UK provider, lists Shopify and Shopify Plus EDI
                    integration on its site. It suits a store where Shopify owns orders and stock and each buyer’s
                    rules fit the connector’s settings.
                  </p>
                  <p>
                    <b>A custom link.</b> Built when the rules belong to your business: case sizes Shopify sells as
                    units, stock held in Linnworks, Mintsoft or an ERP, invoices raised in Sage or NetSuite, several
                    warehouses, or a buyer whose guide the connector cannot follow. It sits beside your EDI provider,
                    not in place of it.
                  </p>
                </div>
                <Sources ids={['xediHome']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">One UK provider’s list prices, read on {READ_ON}</span>
                <ul style={scList}>
                  <li className="scorecard-row"><div><div className="scorecard-metric">XEDI Growth</div><div className="scorecard-note">receive orders, send invoices</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£128</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">XEDI Scale</div><div className="scorecard-note">adds despatch notices and SKU mapping</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£256</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">XEDI Advanced</div><div className="scorecard-note">adds automated invoice reconciliation</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£348</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">XEDI Enterprise</div><div className="scorecard-note">Shopify, ERP and API integration</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></li>
                </ul>
                <p style={{ fontSize: 12.5, marginTop: 10 }}>
                  Per trading partner, per month, with usage charged on top. The pricing page does not say whether VAT
                  is added. Growth, Scale and Advanced are web-portal plans. XEDI’s comparison table lists Shopify
                  integration on Enterprise only. We work with whichever provider you already use.
                </p>
                <Sources ids={['xediPricing']} />
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send your buyer’s EDI guide. We reply with the route.'}
          sub={'Tell us which retailers or distributors you supply, the format they send and where your stock and invoices live. On a short call we say whether a portal, a provider connector or a custom link is the right job, and we quote a fixed price if there is work for us.'}
          label={'Scope my EDI link'}
        />

        {/* 9. WHERE LINKS BREAK */}
        <section className="sec-lg" id="where-links-break">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Where links break</span>
              <h2>Five places a Shopify EDI link needs its own rules</h2>
              <p className="lead mt-4">
                Your catalogue, delivery points and accounts are specific to your business, even when the messages
                follow a standard. These are the five rules we write down before mapping a single field.
              </p>
            </div>
            <div className="stack mt-10" style={{ maxWidth: 820 }}>
              <h3>1. Every orderable variant needs a GTIN</h3>
              <p>
                The buyer orders by GTIN, so a variant without one cannot be matched. Where the retailer orders an
                outer case of 12 and Shopify sells singles, the case has its own GTIN and the link multiplies the
                quantity. That rule is per product, and it goes in the map.
              </p>
              <h3 className="mt-6">2. Each delivery point is a Shopify company location</h3>
              <p>
                A distributor may send one order for its warehouse and the next for a store. Each GLN maps to one
                company location in Shopify B2B, where Shopify lets you set payment terms. An unknown GLN stops the
                order as a draft for a person to check, and nothing ships to a guessed address.
              </p>
              <h3 className="mt-6">3. Trade prices without VAT, retail prices with it</h3>
              <p>
                Buyers order at trade prices before VAT. Many UK Shopify stores show retail prices with VAT included.
                The link has to know which it is reading on each side, or every line drifts by a penny and the INVOIC
                no longer matches the buyer’s order.
              </p>
              <h3 className="mt-6">4. SSCC labels and the despatch advice must agree</h3>
              <p>
                The DESADV lists what is on each pallet or case by SSCC. GS1 UK gives members free use of its GS1 Print
                service to generate SSCCs and labels. Whatever prints the label, the same numbers have to reach the
                despatch advice, so the link reads them from the warehouse, not from a separate spreadsheet.
              </p>
              <h3 className="mt-6">5. A missed webhook must not mean a missed invoice</h3>
              <p>
                A webhook is the alert Shopify sends to another system when something changes, such as an order being
                fulfilled. Shopify’s developer documentation says webhook delivery is not always guaranteed, ordering
                is not guaranteed, and apps should run reconciliation jobs: scheduled checks that fetch the data from
                Shopify and compare it. Every EDI link we build has one, so a fulfilment that was never announced still produces its despatch advice and
                invoice.
              </p>
            </div>
            <Sources ids={['shopifyB2b', 'shopifyTerms', 'gs1ukSscc', 'devWebhooks']} />
          </div>
        </section>

        {/* 10. UK PROOF */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK trade work</span>
              <h2>UK trade integration work: GPSUK on Commerceflo and Sow Easy on Odoo</h2>
              <p className="lead mt-4">
                Neither is a Shopify store. Both turned on the question an EDI link turns on: which system owns stock,
                prices and the order.
              </p>
            </div>
            <ul className="col-2 mt-10">
              <li className="card">
                <h3>GPSUK, built on Commerceflo</h3>
                <p className="mt-4">
                  A UK supplier of branded promotional products selling to business customers. We built its trade
                  storefront on Commerceflo, so buyers log in, see their own account prices and move from quote to
                  order without anyone retyping it.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
              <li className="card">
                <h3>Sow Easy, WooCommerce with Odoo</h3>
                <p className="mt-4">
                  A UK wholesale distributor that runs stock, pricing and SKUs in Odoo. We are building its WooCommerce
                  trade store to read all three from Odoo. The store and the Odoo link are being tested on staging, and
                  launch is still ahead.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
            </ul>
          </div>
        </section>

        {/* 11. HOUSE TERMS + BRIEF ASK */}
        <section className="sec-lg" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>Our terms, and what to send us with your brief or RFP</h2>
                <ul className="scope-list yes-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>A demo before you sign.</b> Working software on your own data: one of your buyer’s sample orders arriving in a test Shopify store, with the replies it would send.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own.</li>
                  <li><b>You own it.</b> The code and the repository are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> Hosting can run in your own accounts, at cost, with no markup.</li>
                  <li><b>Defects covered.</b> Fixed inside the build price for a cover period agreed before work starts.</li>
                  <li><b>Support you choose.</b> Optional. Each change is quoted and approved, with no monthly minimum.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. After launch we can keep managing the servers, APIs and maintenance, so your team does
                  not have to.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Running a tender? Send the RFP. Otherwise, send these</span>
                <ul style={scList}>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Your buyers</div><div className="scorecard-note">retailers and distributors, live or about to go live</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Each buyer’s EDI guide</div><div className="scorecard-note">format, versions, test steps</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">A sample order file</div><div className="scorecard-note">EANCOM or Tradacoms, from the guide</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">Your systems</div><div className="scorecard-note">Shopify plan, accounts, ERP, warehouse</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></li>
                  <li className="scorecard-row"><div><div className="scorecard-metric">The go-live date</div><div className="scorecard-note">the one your buyer gave you</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></li>
                </ul>
                <div className="mt-6">
                  <ModalCTAButton label="Send my EDI brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Project steps</span>
              <h2>How we build a Shopify EDI link, in seven steps</h2>
              <p className="lead mt-4">
                The steps are the same with a provider connector or a custom link. Only step four changes size.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read the buyer’s EDI guide', d: 'We list every message it asks for, the format and version, the identifiers it expects and the test steps it sets. That list is the brief.' },
                { n: '02', t: 'Map products and places', d: 'Each orderable product gets its GTIN and case size, and each GLN the buyer sends gets a Shopify company location. Gaps go back to you before any build.' },
                { n: '03', t: 'Name an owner for every record', d: 'Orders, stock, prices, invoices and despatch each get one home across Shopify, your accounts system and your warehouse. The one-page map is signed by both sides.' },
                { n: '04', t: 'Choose the lightest route that fits', d: 'Your current EDI provider and its Shopify connector come first. We quote custom work only for the rules a connector cannot follow, as a fixed price in writing.' },
                { n: '05', t: 'Show it on your own data', d: 'Before a contract, a sample order from the buyer’s guide arrives in a test store, and the order response, despatch advice and invoice it would send are laid out for you to check.' },
                { n: '06', t: 'Pass the buyer’s tests', d: 'A changed order, a part delivery, an unknown GLN, a zero-rated line and a rejected message all go through, then the buyer’s own test cycle.' },
                { n: '07', t: 'Go live and check each early order line by line', d: 'For each early live order we compare the ORDERS lines with the Shopify order, the DESADV SSCCs with the warehouse labels, and the INVOIC totals with the invoice in your accounts system. Any APERAK rejection raises an alert to a named person. If you choose support, the team that built the link looks after it. The code and the map are yours either way.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 13. WHO IT IS FOR */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who this is for</span>
              <h2>UK brands, manufacturers and wholesalers supplying trade buyers by EDI</h2>
            </div>
            <ul className="stack mt-10" style={{ ...scList, maxWidth: 820 }}>
              <li className="card"><h3>Brands that won a retail listing</h3><p className="mt-4">You sell on Shopify and a UK retailer has asked for EANCOM orders, despatch advice and invoices before the first delivery. Your first rule: every variant the retailer can order needs the GTIN it orders by, before the first ORDERS message arrives.</p></li>
              <li className="card"><h3>Food, drink and household makers</h3><p className="mt-4">Several grocers or wholesalers, each with its own guide, case sizes and delivery points, all feeding one Shopify store. Your first rule: an outer case of 12 carries its own GTIN, and the link multiplies it into singles for Shopify.</p></li>
              <li className="card"><h3>Distributors and manufacturers</h3><p className="mt-4">Trade customers whose buying systems send purchase orders, with stock in an ERP and invoices raised in Sage, NetSuite or Business Central. Your first rule: the ERP stays the one master for stock, so goods come off the shelf once.</p></li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              For the store itself, see <a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus in the UK</a> or{' '}
              <a href="/uk/shopify-development" style={inlineLink}>Shopify development</a>. For a wider look at stock,
              accounts and channels before you commit, see our{' '}
              <a href="/uk/ecommerce-consultant" style={inlineLink}>UK ecommerce consultant page</a>.
            </p>
          </div>
        </section>

        {/* 14. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every standard, tax rule, platform feature and list price on this page was read on the pages below on
                that day. Prices move and HMRC sets the tax rules, so open the linked page before you act on one.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 15. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify EDI questions from UK suppliers</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 16. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Take your next retailer order straight into Shopify</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within 24 hours to set up a short call about your
              buyers, their EDI guides and the systems behind your store. You leave the call knowing which route fits
              and what the first phase covers.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Scope my EDI link" region="uk" modalVariant="default" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
