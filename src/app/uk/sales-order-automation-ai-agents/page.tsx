import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/sales-order-automation-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every third-party fact (ERP and accounting API behaviour, HMRC and
      GOV.UK rules, ICO guidance, market price ranges) was read on the maker's
      or regulator's own page on 29 October 2026 and links to it through the
      SRC constants below. Re-read the page before changing a fact.
   2. No FactoryJet price, and nothing on what an agent costs to run. The only
      money figures are two named firms' published UK build ranges.
   3. Client proof is limited to GPSUK (Commerceflo trade storefront) and
      Sow Easy (WooCommerce plus Odoo, still in build). Neither is described
      as an order agent client.
   4. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema). The copy is written fresh. FAQ answers on accuracy, timing and the demo
      were reworked on 29 Oct 2026 so they no longer track the US answers on
      /services/sales-order-automation-ai-agents; keep them UK-specific.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/sales-order-automation-ai-agents';
const UPDATED = '2026-10-31';
const UPDATED_LABEL = '31 October 2026';
const READ_ON = '29 October 2026';
const TITLE = 'Sales Order Automation UK: AI for Emailed POs | FactoryJet';
const H1 = 'Sales Order Automation for UK Trade Suppliers';
const DESCRIPTION =
  'AI agents that read emailed purchase orders from UK trade customers and save draft sales orders in Sage, Business Central, NetSuite, Odoo or Xero for approval.';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Sales Order Automation AI Agents', url: CANONICAL },
];

/* ─── External sources, each read on 29 October 2026 ───────────────── */
// Microsoft Learn, Business Central API v2.0 salesOrder resource (ms.date
// 2026-08-21): POST creates a sales order; status "can be "Draft", "In Review"
// or "Open""; externalDocumentNumber field; requestedDeliveryDate field.
const SRC_BC_SALESORDER = 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/resources/dynamics_salesorder';
// Xero's own OpenAPI file for the Accounting API: paths /Quotes, /Invoices and
// /PurchaseOrders exist, no sales order path. QuoteStatusCodes enum: DRAFT,
// SENT, DECLINED, ACCEPTED, INVOICED, DELETED.
const SRC_XERO_OPENAPI = 'https://github.com/XeroAPI/Xero-OpenAPI/blob/master/xero_accounting.yaml';
const SRC_XERO_QUOTES = 'https://developer.xero.com/documentation/api/accounting/quotes';
// Odoo 19 developer docs, External API: "Access to data via the external API
// is only available on Custom Odoo pricing plans." and "not available on One
// App Free or Standard plans."
const SRC_ODOO_API = 'https://www.odoo.com/documentation/19.0/developer/reference/external_api.html';
// Brightpearl API docs, POST order: "This message enables you to create new
// sales orders/credits and purchase orders/credits in your Brightpearl system."
const SRC_BRIGHTPEARL = 'https://api-docs.brightpearl.com/order/order/post.html';
// Sage UK knowledge base, "The sales order process" (Sage 50 Accounts): the
// Sales Orders module is only in the Professional edition; dispatching an
// order creates a sales invoice.
const SRC_SAGE50_SO = 'https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200908113445020';
// HMRC VAT Notice 700/22, Making Tax Digital for VAT (updated 1 April 2022):
// a digital link is an electronic transfer between software; "cut and paste"
// or "copy and paste" is not a digital link; manual transfer between software
// is not acceptable.
const SRC_MTD = 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat';
// GOV.UK, e-invoicing consultation response (updated 26 November 2025): "the UK
// will introduce mandatory e-invoicing for all VAT invoices from 2029." No
// standard chosen yet; decentralised model under study.
const SRC_EINVOICE = 'https://www.gov.uk/government/consultations/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector/outcome/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector-consultation-response';
// ICO, contracts between controllers and processors: Article 28(3) terms,
// processing only on "documented instructions", no sub-processor without the
// controller's prior written authorisation.
const SRC_ICO_CONTRACT = 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/';
// Fulminous (UK), AI agent development cost UK, last updated 23 September 2026:
// back-office / ops agent "Automates data entry, invoice processing, and
// multi-system workflows", £30,000 to £90,000, ranges "excluding VAT".
const SRC_FULMINOUS = 'https://fulminous.co.uk/ai-agent-development-cost-uk';
// LeverX (en-GB), AI agent development cost UK, published 4 October 2026:
// single-workflow £10K to £30K; multi-step agent with integrations £30K to
// £80K; example "an order management agent that checks inventory, validates
// customer details, creates or updates an order in an ERP system". VAT not stated.
const SRC_LEVERX = 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Sales orders and POs' },
  { key: 'systems', label: 'Sage, Xero, Business Central and more' },
  { key: 'agent',   label: 'How the agent behaves' },
  { key: 'uk',      label: 'UK rules and data' },
  { key: 'working', label: 'Cost, timing and terms' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Sales orders and POs ──
  { category: 'basics', question: 'What is the difference between a PO and a sales order?',
    answer: 'The purchase order comes from your customer. It is their request: these items, this quantity, this price, delivered by this date. The sales order is yours. It is the record in your ERP that you have accepted the request and will supply it. Most UK suppliers copy the customer’s PO number into the sales order so the invoice can quote it later, and that copying step is exactly what an order agent drafts for you.' },
  { category: 'basics', question: 'What are the steps involved in the sales order process?',
    answer: 'For a trade supplier the usual run is: the order arrives, someone keys it as a sales order, the order is checked against stock and the account’s credit limit, it is approved and acknowledged to the customer, then picked, packed and dispatched with Royal Mail, DPD, Evri or a pallet carrier, and finally invoiced. An order agent works on the first three steps. People keep the approval, and the warehouse keeps the rest.' },
  { category: 'basics', question: 'Who prepares a sales order?',
    answer: 'In most UK wholesalers and manufacturers it is a sales order processor, a customer service team or an internal sales rep, and in smaller firms the finance person does it between other jobs. With an agent in place that person stops keying and starts reviewing. The agent prepares the draft with the customer, lines and prices filled in, and the same person checks it and approves it in the ERP they already use.' },
  { category: 'basics', question: 'Are sales orders the same as invoices?',
    answer: 'No. A sales order is a promise to supply and it does not post to your accounts. The invoice is the bill, raised once the goods have gone, and for a VAT-registered business it is the document that carries VAT. In most ERPs the invoice is made from the sales order once the goods ship. In Xero, which has quotes and invoices but no sales order record, an accepted quote often plays the sales order role.' },
  { category: 'basics', question: 'What is an example of order processing done by an AI agent?',
    answer: 'Say a garden centre group emails a two-page PDF purchase order for 40 lines, using its own product codes. The agent reads it, finds the account, translates each customer code into your SKU, checks each price against that customer’s price list and each quantity against stock, and writes a draft sales order. Three lines show a price below the agreed list, so the draft is held with those lines highlighted for your team.' },

  { category: 'basics', question: 'Is purchase order automation the same as sales order automation?',
    answer: 'They are two sides of one document. Sales order automation, this page, handles the POs your customers send you and turns them into sales orders. Purchase order automation usually means the buying side: raising POs to your suppliers and matching their invoices against them. The same agent pattern does both jobs. Our accounts payable automation page covers the supplier side.' },

  // ── Systems ──
  { category: 'systems', question: 'Does Xero have sales orders?',
    answer: 'Not as a separate record. Xero’s own published API file has paths for quotes, invoices and purchase orders, with none for a sales order. A Xero quote moves through draft, sent, accepted and invoiced, so many UK firms on Xero treat an accepted quote as the order. Our agent can write the customer’s PO into a draft Xero quote with the reference attached. If you need stock allocation and part shipments, an inventory app or ERP usually sits beside Xero.' },
  { category: 'systems', question: 'Can an agent create sales orders in Dynamics 365 Business Central?',
    answer: 'Yes. Microsoft’s Business Central API documentation lists a create method for sales orders, a field for the customer’s external document number, a requested delivery date, and a status that can be Draft, In Review or Open. So the agent writes each order as a draft with the customer’s PO number in that field, and your team releases it. We read your environment first, because extensions often add required fields.' },
  { category: 'systems', question: 'Does it work with Sage 50, Sage 200 and Sage Intacct?',
    answer: 'Yes. The edition decides the route. Sage’s own UK knowledge base says the Sales Orders module in Sage 50 Accounts is only in the Professional edition, where dispatching an order creates the sales invoice. Sage 200 and Sage Intacct setups depend on the modules and add-ons you license. In the first week we confirm what your edition exposes, and we tell you plainly if the route is weaker than you expected.' },
  { category: 'systems', question: 'Can it write orders into Odoo?',
    answer: 'Yes, as quotations that your team confirms into sales orders. Check your plan first. Odoo’s developer documentation limits external API access to Custom pricing plans and rules out One App Free and Standard. If you are on Standard, moving to Custom is a cost to weigh before the build. Our Odoo link for Sow Easy, a UK wholesale client, is tested against Odoo’s staging system, with launch still ahead.' },
  { category: 'systems', question: 'We use Brightpearl, Linnworks or Mintsoft. Where does the agent fit?',
    answer: 'Brightpearl’s API documentation says its order message can create sales orders, so the agent can write trade orders straight into Brightpearl beside your web and marketplace orders. Linnworks and Mintsoft usually sit downstream as order hubs or warehouse systems. In those setups the agent writes to whichever system owns the order and price list, and the existing link carries it on to picking and the courier label.' },
  { category: 'systems', question: 'What about NetSuite and QuickBooks?',
    answer: 'Both can be reached through their APIs, and the record differs. On NetSuite the agent writes the order where your own approval roles already sit, so release happens the way it does today. QuickBooks setups in the UK vary more, and some firms run an inventory app beside QuickBooks that owns the orders. We look at your actual account, edition and add-ons before promising which record the agent will write, and we put that answer in the written quote.' },
  { category: 'systems', question: 'Do marketplace orders from Amazon.co.uk, eBay or OnBuy need this?',
    answer: 'Usually not. Orders from Amazon.co.uk, eBay UK, OnBuy or the B&Q marketplace already arrive as structured data through a connector, so nobody retypes them. The agent is for the orders trade accounts email in. It can share the same SKU checks, so both routes end up in the ERP in the same shape.' },

  // ── How the agent behaves ──
  { category: 'agent', question: 'How accurate is AI at reading purchase orders?',
    answer: 'There is no single figure worth quoting, because accuracy depends on who sends you orders. The number that matters is a score sheet built from your own past orders: one row per order, one column per field (account, PO number, delivery date, each line’s code, quantity and price), each marked as matching your team’s entry or not. The weak spots in UK trade are usually Excel exports with merged header cells and scanned delivery-address blocks. Any field the agent cannot read with confidence goes to a person.' },
  { category: 'agent', question: 'What happens when the price on the PO does not match our price list?',
    answer: 'The draft is held and the line is highlighted with both figures side by side: the customer’s price and the price your system holds for that account. The same goes for a discontinued item, a quantity outside the pack size, an account on stop or a delivery date you cannot meet. Your team decides, and nothing is acknowledged to the customer until a person approves the order.' },
  { category: 'agent', question: 'Our customers use their own product codes. Can the agent cope?',
    answer: 'Yes, and that is most of the work. Trade buyers order using their own codes, old catalogue numbers or a description. The agent builds a cross-reference from orders your team has already matched, then uses it on new ones. When it meets a code it has not seen, it suggests the likeliest SKU and asks. Each answer is saved, so the same code goes through cleanly next time.' },
  { category: 'agent', question: 'Can the agent send order acknowledgements to customers?',
    answer: 'Yes, once a person has approved the order. The acknowledgement is built from the approved sales order, not from the customer’s PO, so it shows what you have agreed to supply: items, prices, quantities and the dispatch date. If you are sending fewer than were ordered, splitting the delivery or offering a substitute, the email says so in plain words before it goes.' },
  { category: 'agent', question: 'Will it ever confirm an order without a person checking it?',
    answer: 'Only if you decide that it should, for cases you name. At launch every draft waits for approval. Once a few weeks of drafts have been checked, you can choose to let repeat orders from known accounts, inside a value limit, go straight through. That decision is written down, can be reversed, and never covers a new customer, a new item or a price exception.' },

  // ── UK rules and data ──
  { category: 'uk', question: 'Does Making Tax Digital affect how orders reach our accounts?',
    answer: 'Indirectly. Making Tax Digital for VAT applies to your VAT records, and the sales invoice is where VAT is recorded, not the order. HMRC’s VAT Notice 700/22 says copy and paste is not a digital link and that moving data by hand between software is not acceptable. An agent that writes orders by API, so the invoice is raised from the order inside your system, keeps that chain digital.' },
  { category: 'uk', question: 'Is the 2029 e-invoicing mandate relevant to sales orders?',
    answer: 'It is relevant to what happens after them. Under the plan set out by GOV.UK, every VAT invoice in the UK must be an e-invoice from 2029, and the technical standard is still to be picked. Suppliers whose invoices are raised from clean, structured sales orders will find that change easier. The agent does not send e-invoices, but it gets your order data into the shape that makes them simpler later.' },
  { category: 'uk', question: 'Purchase orders contain buyers’ names and emails. What about UK GDPR?',
    answer: 'A buyer’s name and work email are personal data, so the agent is set up as processing for you under your instructions. ICO guidance on controller and processor contracts says a processor may act only on documented instructions and may not add another processor without your prior written authorisation. Before the build you get a written list of every service the order data passes through, including the AI model provider.' },

  // ── Cost, timing and terms ──
  { category: 'working', question: 'How much does sales order automation cost in the UK?',
    answer: 'For a build, published ranges for UK projects run from £10,000 to £90,000. LeverX gives £10,000 to £30,000 for one workflow, and £30,000 to £80,000 for a multi-step agent, using an order agent that writes to an ERP as its example; it does not state VAT. Fulminous gives £30,000 to £90,000, ex VAT, for a back-office data entry agent. FactoryJet gives a fixed price in writing after a short scoping call.' },
  { category: 'working', question: 'How long does it take to build an order agent?',
    answer: 'The written quote gives the date, and it depends on your setup more than on the agent. Three things in UK setups add time. Sage 200 run on a server in your office needs a secure route in before anything can be written. A second Business Central or Sage company means a second set of price lists and rules. EDI from a large UK retailer runs on that retailer’s own format and testing timetable, which we do not control.' },
  { category: 'working', question: 'Can we see it working on our own orders before we sign?',
    answer: 'Yes. Pick a recent month of trade orders from the accounts that cause the most retyping, include the Sage, Business Central, Xero or Odoo records your team made from them, and send both. The demo comes back as drafts in the shape your system expects, plus the score sheet and the lines that would have been held. You decide from that whether to go further.' },
  { category: 'working', question: 'Who owns the agent, and do we have to pay a monthly fee?',
    answer: 'You own the agent, the code, the part-number cross-reference and the test orders from day one, and they can run in your own cloud account with the AI and hosting billed to you at cost. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: FactoryJet can keep managing it, with each change quoted and approved, and no monthly minimum.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Sales Order Automation AI Agents UK',
      serviceType: 'AI agent development for sales order entry: reading emailed purchase orders and writing draft sales orders into ERP and accounting systems',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description: DESCRIPTION,
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
      about: { '@id': `${CANONICAL}#service` },
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['sales-order-automation-ai-agents'] },
  openGraph: {
    title: TITLE,
    description:
      'Your trade customers email PDFs and spreadsheets. We build the AI agent that turns them into draft sales orders in your ERP, checked against your price lists, for your team to approve.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/b2b-ecommerce/b2b-ecommerce-warehouse.webp', width: 1200, height: 800, alt: 'Two colleagues in a UK warehouse aisle checking a trade order on a tablet' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const ext = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

export default function SalesOrderAutomationUKPage() {
  return (
    <>
      <script id="ld-uk-sales-order-automation-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Sales Order Automation</span>
                  <span className="chip">Emailed POs to Draft Orders</span>
                  <span className="chip">Your Team Approves</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  We build AI agents that turn emailed purchase orders into draft sales orders. Your trade customers send
                  PDFs, spreadsheets and typed emails. The agent checks each one against your prices, stock and credit
                  limits, then saves a draft in Sage, Business Central, NetSuite, Odoo, Brightpearl or Xero for your team
                  to approve.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><a href="/about" style={{ textDecoration: 'underline' }}><b>Bhavesh Barot</b></a>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm
                    region="uk"
                    source="uk_sales_order_automation_hero"
                    service="Sales Order Automation AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/b2b-ecommerce/b2b-ecommerce-warehouse.webp" width={1200} height={800} fetchPriority="high" decoding="async" alt="Two colleagues in a UK warehouse aisle checking a trade order on a tablet, between racks of boxed stock" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What reaches your approver</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Draft sales order</div><div className="scorecard-note">customer, lines, PO number filled in</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Draft</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Price and stock checked</div><div className="scorecard-note">against that account’s price list</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Checked</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Odd lines flagged</div><div className="scorecard-note">with the reason and the original PO</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Flagged</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Confirmed to the customer</div><div className="scorecard-note">only after a person approves</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is sales order automation for a UK trade supplier?</span>
              <p>
                Sales order automation, also called AI order processing or automated order entry, takes the purchase
                order a customer sends and creates the matching sales order in your ERP or accounting system without
                anyone retyping it. An AI agent reads the PO in whatever layout it arrives, matches the account and the
                product codes, checks each line against that account’s price list, and saves a draft. A person on your
                team approves it, and anything unusual reaches them first with the reason attached.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Six terms used on this page</span>
              <p>
                A <b>purchase order (PO)</b> is the order your customer sends you. A <b>sales order</b> is your record
                in the ERP that you will supply it. An <b>ERP</b> is the system that runs your stock, orders and
                finance, such as Sage 200 or Business Central. A <b>cross-reference</b> is the list that translates a
                customer’s own product code into your SKU, the code your stock system uses. <b>EDI</b> (electronic
                data interchange) is a fixed format that large retailers use to send orders straight from their system
                to yours. An <b>API</b> is the door a piece of software opens so another program can read and write
                its records without a person typing.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Web and marketplace orders already arrive as data. The emailed trade order is the one that still gets
              keyed by hand, often by your most experienced person, because they know which customer means which
              product. The agent we build learns those habits from orders your team has already entered, so that
              knowledge sits in your system instead of one inbox.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (each one sourced) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: 'Draft', t: 'is one of three statuses Business Central gives a sales order created through its API, with In Review and Open', s: 'Microsoft Learn', u: SRC_BC_SALESORDER },
                { v: 'No SO', t: 'record in Xero’s Accounting API: it lists quotes, invoices and purchase orders, so a quote plays the order role', s: 'Xero OpenAPI', u: SRC_XERO_OPENAPI },
                { v: 'Copy & paste', t: 'does not count as a digital link between software under Making Tax Digital for VAT', s: 'HMRC VAT Notice 700/22', u: SRC_MTD },
                { v: '2029', t: 'is when the UK plans mandatory e-invoicing for all VAT invoices', s: 'GOV.UK consultation response', u: SRC_EINVOICE },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...ext} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHAT HAPPENS TO ONE ORDER ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">One order, start to finish</span>
              <h2>What the agent does with a purchase order from a trade account</h2>
              <p className="lead mt-4">
                Take a typical Monday: a builders’ merchant emails a PDF, a salon chain sends a spreadsheet, and a
                long-standing customer types eight lines into the body of an email. Each one goes through the same
                seven checks before anyone sees it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Picks the order out of the mailbox', d: 'It watches the shared orders address, separates real orders from chasers, delivery queries and remittances, and reads attachments in PDF, Excel, CSV or the email body itself.' },
                { n: '02', t: 'Finds the account', d: 'It matches the sender, the bill-to and the delivery address to the right customer record, including branches that order under a parent account.' },
                { n: '03', t: 'Translates every product code', d: 'Customer codes, old catalogue numbers and plain descriptions become your SKUs through a cross-reference built from orders your team has already matched.' },
                { n: '04', t: 'Checks price, pack size and stock', d: 'Each line is compared with that account’s price list, your case quantities and live stock, so a wrong price or a short line shows up before the order is accepted.' },
                { n: '05', t: 'Checks credit and terms', d: 'An account on stop or over its limit goes to your credit controller before anything is entered.' },
                { n: '06', t: 'Writes the draft', d: 'The sales order is saved as a draft in your ERP with the customer’s PO number, requested delivery date, delivery service (Royal Mail, DPD, Evri or pallet) and the original attached.' },
                { n: '07', t: 'Hands it to a person', d: 'Clean drafts go to the approval list. Drafts with a problem go to a separate list with the reason beside each flagged line. Approval stays inside your ERP.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8" style={{ maxWidth: 900 }}>
              The agent has its own user in your ERP. That user looks up accounts, SKUs, price lists and stock levels, and saves
              drafts. Approving an order, editing a price list or taking a customer off stop are outside its rights. Those stay with your
              people, and the log shows every draft it wrote and why.
            </p>
          </div>
        </section>

        {/* ═══ 5. UK SYSTEMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The systems UK suppliers run</span>
                <h2>Where the draft lands: Sage, Business Central, NetSuite, Odoo, Brightpearl or Xero</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Dynamics 365 Business Central.</b> Microsoft’s API reference lists a create method for sales
                    orders, a field for the external document number (the customer’s own PO number) and a status of Draft, In Review or
                    Open. That maps cleanly onto how we want the agent to behave: write a draft, put the PO number
                    where your invoice will pick it up, and leave release to your team.
                  </p>
                  <p>
                    <b>Xero.</b> Xero’s own published API file has a quotes path, an invoices path and a purchase orders path, with nothing for sales orders. A Xero quote moves through draft, sent, accepted and invoiced, so the agent writes the
                    customer’s order as a draft quote with the PO attached. Firms that need allocation and part
                    shipments usually run an inventory app beside Xero, and the agent writes there instead.
                  </p>
                  <p>
                    <b>Odoo.</b> The agent writes a quotation that your team confirms into a sales order. Odoo’s
                    developer documentation limits external API access to Custom pricing plans, ruling out One App
                    Free and Standard, so we check your plan in the first call.
                  </p>
                  <p>
                    <b>Brightpearl.</b> Its API documentation says the order message creates sales orders and purchase
                    orders, so trade orders can sit next to your Shopify and marketplace orders in one place.
                  </p>
                  <p>
                    <b>Sage 50 Accounts.</b> Sage’s UK knowledge base says the Sales Orders module is only in the
                    Professional edition. There, dispatching an order creates the sales invoice, so a draft written by
                    the agent follows your normal route to the ledger.
                  </p>
                  <p>
                    <b>Sage 200 and Sage Intacct, NetSuite, QuickBooks, Linnworks and Mintsoft.</b> The record
                    the agent writes depends on your edition and add-ons, and we confirm it in week one. Where Linnworks or
                    Mintsoft runs the warehouse, the agent writes to the system that owns the price list and your
                    current link carries the order to picking and the courier label.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read on {READ_ON}:{' '}
                  <a href={SRC_BC_SALESORDER} {...ext} style={srcLink}>Microsoft Learn, Business Central salesOrder resource</a>;{' '}
                  <a href={SRC_XERO_OPENAPI} {...ext} style={srcLink}>Xero Accounting API OpenAPI file</a>;{' '}
                  <a href={SRC_XERO_QUOTES} {...ext} style={srcLink}>Xero Developer, Quotes</a>;{' '}
                  <a href={SRC_ODOO_API} {...ext} style={srcLink}>Odoo 19, External API</a>;{' '}
                  <a href={SRC_BRIGHTPEARL} {...ext} style={srcLink}>Brightpearl API, POST order</a>;{' '}
                  <a href={SRC_SAGE50_SO} {...ext} style={srcLink}>Sage UK knowledge base, the sales order process</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Which record the agent writes</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Business Central</div><div className="scorecard-note">status Draft, PO in external document no.</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Sales order</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sage 50 Professional</div><div className="scorecard-note">Sales Orders module</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Sales order</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sage 200, Intacct, NetSuite</div><div className="scorecard-note">confirmed for your edition in week one</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Per edition</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Odoo (Custom plan)</div><div className="scorecard-note">your team confirms it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Quotation</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Brightpearl</div><div className="scorecard-note">beside web and marketplace orders</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Sales order</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Xero</div><div className="scorecard-note">no sales order record</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Draft quote</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. CHANNELS THAT DO NOT NEED IT ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Scope it honestly</span>
              <h2>Which orders need an agent, and which already arrive as data</h2>
              <div className="stack mt-6">
                <p>
                  Orders from Amazon.co.uk, eBay UK, OnBuy and the B&amp;Q marketplace come through
                  connectors as structured records. So do orders from your own Shopify, WooCommerce or Commerceflo
                  store, and card or pay-later payments taken through Stripe, Klarna or Clearpay. Nobody retypes those,
                  and an agent adds nothing there.
                </p>
                <p>
                  The retyping lives in trade: account customers who order on terms, by email, from their own
                  purchasing system or a spreadsheet they have used for ten years. Some of them will never log in to a
                  portal. For those buyers the agent is the shortest route from their inbox to your ERP, and it can run
                  alongside a <a href="/uk/b2b-ecommerce" style={{ textDecoration: 'underline' }}>B2B trade portal</a> for
                  the customers who will.
                </p>
                <p>
                  Large retail customers who insist on EDI are a third route. An EDI network carries those orders as
                  data, so they need no reading. Whether the same price and stock checks can run on them depends on how
                  your EDI provider passes orders to your ERP, and we scope that separately.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send a sample of past orders and see the drafts an agent would have written'}
          sub={'Send us a sample of real purchase orders and the sales orders keyed from them. On a short call with the founder we show you what an agent would have drafted, and which lines it would have flagged.'}
          label={'See a demo on my data'}
        />

        {/* ═══ 7. UK RULES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK rules that touch order data</span>
              <h2>Making Tax Digital, the 2029 e-invoicing plan and UK GDPR</h2>
              <div className="stack mt-6">
                <p>
                  <b>Making Tax Digital for VAT.</b> VAT is recorded on the invoice raised from the order, so that is
                  the record HMRC cares about. HMRC’s VAT Notice 700/22 says copy and paste does not count as a digital link and that moving
                  data by hand between software programs is not acceptable. When the agent writes orders by API and the
                  invoice is raised from the order inside your system, the chain from customer PO to VAT return stays
                  digital.
                </p>
                <p>
                  <b>E-invoicing from 2029.</b> In its consultation response (last updated 26 November 2025), the government says it will make e-invoicing compulsory for every VAT invoice from 2029. Which technical standard is used has not been settled. Suppliers whose invoices come from clean, structured sales orders will have
                  less to fix when it lands.
                </p>
                <p>
                  <b>UK GDPR.</b> Purchase orders carry buyers’ names, work emails and phone numbers. The ICO’s guidance
                  on controller and processor contracts says a processor may act only on your documented instructions
                  and may not bring in another processor without your prior written authorisation. Before the build we
                  give your IT lead a written list of every service the order data passes through, including the AI
                  model provider, so the contract can name them.
                </p>
              </div>
              <p style={srcNote}>
                Sources, read on {READ_ON}:{' '}
                <a href={SRC_MTD} {...ext} style={srcLink}>HMRC, VAT Notice 700/22: Making Tax Digital for VAT</a>;{' '}
                <a href={SRC_EINVOICE} {...ext} style={srcLink}>GOV.UK, promoting electronic invoicing: consultation response</a>;{' '}
                <a href={SRC_ICO_CONTRACT} {...ext} style={srcLink}>ICO, what needs to be included in the contract</a>.
                We are not tax advisers or lawyers: confirm your position with your accountant or adviser.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 8. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>ERP features, a PO parsing app, an EDI network or a custom order agent</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Four ways UK suppliers cut order keying. Each is right for someone, and the best answer is often two of
              them together.
            </p>
            <p className="md:hidden mt-6" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see all four options.</p>
            <div className="card mt-8" tabIndex={0} role="region" aria-label="Comparison of four ways to automate sales order entry" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 820 }}>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th className="fj">Custom order agent (FactoryJet)</th>
                    <th>PO parsing app</th>
                    <th>EDI network</th>
                    <th>ERP features alone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Many customers, many layouts</span></td><td><span className="partial">A few steady layouts</span></td><td><span className="partial">Large retailers that require it</span></td><td><span className="partial">Orders already structured</span></td></tr>
                  <tr><td className="feat">Customer product codes</td><td className="fj"><span className="yes">Learns your cross-reference</span></td><td><span className="partial">Manual mapping rules</span></td><td><span className="yes">Agreed per partner</span></td><td><span className="no">Usually by hand</span></td></tr>
                  <tr><td className="feat">Price, stock and credit checks</td><td className="fj"><span className="yes">Your rules, inside your ERP</span></td><td><span className="no">Reads only</span></td><td><span className="partial">Message only, checks are yours</span></td><td><span className="yes">Built in, after keying</span></td></tr>
                  <tr><td className="feat">Writes a draft sales order</td><td className="fj"><span className="yes">Yes, with the reason for any flag</span></td><td><span className="partial">Often via a second tool</span></td><td><span className="partial">Through an integration</span></td><td><span className="no">A person keys it</span></td></tr>
                  <tr><td className="feat">Who owns it</td><td className="fj"><span className="yes">You, code and data</span></td><td><span className="partial">Rented</span></td><td><span className="partial">Rented per partner</span></td><td><span className="yes">You</span></td></tr>
                  <tr><td className="feat">Changes when a customer changes layout</td><td className="fj"><span className="yes">Reads the new layout</span></td><td><span className="partial">New template</span></td><td><span className="yes">Fixed format</span></td><td><span className="no">Not applicable</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              If most of your orders come from three customers who send the same PDF every week, a parsing app may be
              enough, and we will tell you so in the demo. The agent earns its place when there are dozens of trade
              accounts, each with its own habits.
            </p>
          </div>
        </section>

        {/* ═══ 9. COST (sourced market ranges only) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What firms publish for UK builds</span>
                <h2>What a custom sales order agent costs to build in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    LeverX, in a UK cost guide dated 4 October 2026, gives £10,000 to £30,000 for an agent that handles one
                    workflow and £30,000 to £80,000 for a multi-step agent working across several systems. Its example
                    for that higher band is an order management agent that checks inventory, validates customer details
                    and creates or updates an order in an ERP. LeverX does not say whether its figures include VAT.
                  </p>
                  <p>
                    Fulminous, whose page was last updated on 23 September 2026, gives £30,000 to £90,000 for a
                    back-office agent that automates data entry and multi-system workflows, and states its figures
                    exclude VAT.
                  </p>
                  <p>
                    What moves a project within those ranges: how many customer layouts you receive, whether customer
                    product codes need a cross-reference, how many ERP companies or warehouses the order can land in,
                    and whether acknowledgements and EDI are in scope. FactoryJet quotes the build, and any support you
                    choose, as fixed prices in writing after a short scoping call.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read on {READ_ON}:{' '}
                  <a href={SRC_FULMINOUS} {...ext} style={srcLink}>Fulminous, AI agent development cost UK</a>;{' '}
                  <a href={SRC_LEVERX} {...ext} style={srcLink}>LeverX, AI agent development cost UK</a>.
                  Third-party figures, not FactoryJet prices.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Published UK build ranges</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Single-workflow agent</div><div className="scorecard-note">LeverX, VAT not stated</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£10k to £30k</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Multi-step agent writing to an ERP</div><div className="scorecard-note">LeverX, VAT not stated</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£30k to £80k</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Back-office data entry agent</div><div className="scorecard-note">Fulminous, ex VAT</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£30k to £90k</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">FactoryJet</div><div className="scorecard-note">after a short scoping call</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Fixed, in writing</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. HOUSE TERMS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>Terms for a UK sales order automation project</h2>
                <ul className="scope-list num-list mt-10" style={{ maxWidth: 580 }}>
                  <li><b>A demo on your data before you sign.</b> Working software running over your own past purchase orders, with each draft next to the order your team keyed.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own, so the pilot does not commit you to the full build.</li>
                  <li><b>You own it from day one.</b> The code, the repository, the cross-reference and the test orders are yours. AI and hosting can run in your own accounts at cost, with no markup.</li>
                  <li><b>Defects fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> FactoryJet can keep managing the servers, AI, APIs and maintenance. Each change is quoted and approved, and there is no monthly minimum.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Proof from UK trade work</span>
                <div className="stack" style={{ marginTop: 8 }}>
                  <p style={{ fontSize: 14 }}>
                    <b>GPSUK</b>, a UK promotional products supplier, runs its trade storefront on Commerceflo, built
                    by FactoryJet. Business buyers see their own account pricing and move from quote to order without
                    the order being rebuilt by hand.{' '}
                    <a href="/case-studies/gpsuk-promotional-products" style={{ textDecoration: 'underline' }}>Read the GPSUK case study</a>.
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <b>Sow Easy</b>, a UK wholesale distributor, is having its WordPress WooCommerce trade store joined
                    to Odoo by FactoryJet, with Odoo as the master for stock, pricing and product codes. The Odoo link
                    is still in build and tested on staging.{' '}
                    <a href="/case-studies/sow-easy-distributor-portal" style={{ textDecoration: 'underline' }}>Read the Sow Easy case study</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. PROJECT STEPS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">The project, step by step</span>
              <h2>Six steps from your order inbox to a live agent</h2>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Scoping call', d: 'Thirty minutes with the founder on your ERP, your order volume, your trade accounts and where the keying hurts most. You get a written note of what we heard.' },
                { n: '02', t: 'Demo on your past orders', d: 'You send a sample of purchase orders with the sales orders keyed from them. We run a first version over them and show you the drafts and the flags.' },
                { n: '03', t: 'Fixed quote per phase', d: 'A written price for the pilot and, separately, for the production build and any support you want. You sign one phase at a time.' },
                { n: '04', t: 'Pilot on one mailbox', d: 'The agent writes drafts into a test company or with every draft held for approval. Your team checks each one and corrects the cross-reference as it goes.' },
                { n: '05', t: 'Production build', d: 'Permissions, logging, approval rules, acknowledgement emails and monitoring. We add further mailboxes, ERP companies or EDI if they are in scope.' },
                { n: '06', t: 'Hand-over or support', d: 'You get the code, the rules and the documentation. FactoryJet can keep running it with changes quoted one by one, or your own team takes it on.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 12. BRIEF / RFP ASK ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Writing a brief or an RFP?</span>
                <h2>What to put in a sales order automation brief or RFP</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  If you have a written brief or an RFP, attach it to the form and we reply to it point by point. If
                  not, these six answers let us price the pilot accurately on the first call.
                </p>
                <ul className="scope-list num-list mt-10" style={{ maxWidth: 580 }}>
                  <li><b>Your ERP or accounting system</b>, its edition, and whether it is cloud or on your own server.</li>
                  <li><b>Orders per week</b> that arrive by email, and roughly how many trade accounts send them.</li>
                  <li><b>Formats you receive:</b> PDF, Excel, CSV, email body, scans or photos.</li>
                  <li><b>Customer product codes:</b> whether buyers use your SKUs or their own.</li>
                  <li><b>Checks your team makes today</b> before an order is accepted: price, pack size, stock, credit, delivery date.</li>
                  <li><b>Twenty or thirty past orders</b> with the sales orders keyed from them, for the demo.</li>
                </ul>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <span className="eyebrow">Related UK pages</span>
                <div className="flex-wrap mt-4">
                  <a className="city-pill" href="/uk/ai-agents">AI agents UK</a>
                  <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
                  <a className="city-pill" href="/uk/accounts-payable-automation">Accounts payable automation UK</a>
                  <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration UK</a>
                  <a className="city-pill" href="/uk/ai-development">AI development UK</a>
                  <a className="city-pill" href="/services/sales-order-automation-ai-agents">Sales order automation (US)</a>
                </div>
                <p className="mt-6" style={{ fontSize: 14 }}>
                  The same agent pattern runs on the supplier side too: our{' '}
                  <a href="/uk/accounts-payable-automation" style={{ textDecoration: 'underline' }}>accounts payable automation</a>{' '}
                  page covers reading supplier invoices and matching them to your own purchase orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Sales order automation questions UK suppliers ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
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

        {/* ═══ 14. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>A sales order automation demo on your own purchase orders</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your ERP,
              your trade accounts and how orders reach you today. Then we run a demo over a sample of your past orders,
              before you sign anything.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See AI agents UK</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
