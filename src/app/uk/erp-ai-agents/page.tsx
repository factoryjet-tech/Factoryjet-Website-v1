import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/erp-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every platform, tax and legal fact was read on the maker's, regulator's
      or legislator's own page on 2026-10-29 and links to it through the SRC
      map below. Re-read the page before changing a fact, and update READ_ON.
   2. Sage platform features are left out on purpose: sage.com and Sage's
      developer pages returned HTTP 403 to our fetches on 2026-10-29, so no
      Sage feature, API, date or price is stated beyond the product name
      Sage Copilot. Add one only after reading Sage's own page.
   3. No FactoryJet price and no running or upkeep cost. The only money
      figures are two named UK market ranges for a build (LeverX, Fulminous),
      inside the cost section and the cost FAQ.
   4. Clients appear in ONE block (section 9) and nowhere else. GPSUK (built on
      Commerceflo) and Sow Easy (WooCommerce plus Odoo, Odoo link still in
      build per src/data/case-studies/index.ts) are named with Bhavesh's
      permission of 29 Oct 2026. No results are claimed for either.
   5. Structure mirrors /uk/ecommerce-consultant and /uk/shopify-xero-integration
      (imports, components, CSS, schema). Copy is written fresh for this page;
      the US page /services/erp-ai-agents supplied ideas, not sentences.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions.

   UK search data, DataForSEO, location 2826, pulled 2026-10-29: "sage ai" 880
   a month, "sage copilot" 480, "ai for erp", "erp ai", "ai erp", "ai in erp"
   and "xero ai" 140 each, "xero jax" 110, "netsuite ai" 50, "odoo ai" 40.
   FAQ wording draws on the People Also Ask boxes for "sage copilot", "xero ai"
   and "erp ai" in the same pull. */

const CANONICAL = 'https://factoryjet.com/uk/erp-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'AI Agents for ERP UK: Sage, Xero, NetSuite, Odoo | FactoryJet';
const H1 = 'ERP AI Agents for UK Businesses: Quotes, Sales Orders and Supplier Bills Drafted in Sage, NetSuite, Business Central, Odoo or Xero for Your Team to Approve';
const DESCRIPTION =
  'AI agents built inside Sage, NetSuite, Business Central, Odoo and Xero for UK firms. They draft quotes, orders and bills; your team approves before anything posts.';
const IMG = '/images/us/services/erp-ai-agents';

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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'ERP AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  bcAgent: { label: 'Microsoft Learn: Sales Order Agent overview, Business Central', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent' },
  bcFaq: { label: 'Microsoft Learn: FAQ for Sales Order Agent, Business Central', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/faqs-sales-order-taker-agent' },
  nsConnector: { label: 'Oracle NetSuite Help: NetSuite AI Connector Service', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html' },
  nsFaq: { label: 'Oracle NetSuite Help: NetSuite AI Connector Service FAQ', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4160616848.html' },
  odooApi: { label: 'Odoo 19 documentation: External JSON-2 API', url: 'https://www.odoo.com/documentation/19.0/developer/reference/external_api.html' },
  odooAgents: { label: 'Odoo 19 documentation: AI agents', url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html' },
  xeroJax: { label: 'Xero UK media release: JAX launches new features (3 September 2025)', url: 'https://www.xero.com/uk/media-releases/xeros-ai-financial-superagent-jax-launches-powerful-new-features/' },
  xeroLondon: { label: 'Xero UK media release: new AI innovations at Xerocon London (8 July 2026)', url: 'https://www.xero.com/uk/media-releases/xero-announces-new-ai-innovations-xerocon-london/' },
  xeroDev: { label: 'Xero Developer: OAuth 2.0 API limits', url: 'https://developer.xero.com/documentation/guides/oauth2/limits/' },
  govMtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govVat700: { label: 'GOV.UK: VAT guide (VAT Notice 700), section 16 on VAT invoices', url: 'https://www.gov.uk/guidance/vat-guide-notice-700' },
  govVatCheck: { label: 'GOV.UK: Check a UK VAT number', url: 'https://www.gov.uk/check-uk-vat-number' },
  govDuaa: { label: 'GOV.UK: Data (Use and Access) Act 2025, data protection and privacy changes', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes' },
  euAiActScope: { label: 'European Commission AI Act Service Desk: Article 2, scope', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2' },
  euAiActTimeline: { label: 'European Commission: AI Act, regulatory framework and timeline', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  leverx: { label: 'LeverX: AI agent development cost UK (4 October 2026)', url: 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk' },
  fulminous: { label: 'Fulminous: AI agent development cost UK (updated 23 September 2026)', url: 'https://fulminous.co.uk/ai-agent-development-cost-uk' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'ERP agents explained' },
  { key: 'systems', label: 'Sage, Xero, NetSuite, Odoo, Business Central' },
  { key: 'rules', label: 'VAT, MTD, UK GDPR and the EU AI Act' },
  { key: 'working', label: 'Cost, time and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ERP agents explained
  {
    category: 'basics',
    question: 'What is an ERP AI agent?',
    answer:
      'It is software that handles one office job inside the system that runs your stock, orders and accounts. It reads what arrives, such as a customer email asking for prices or a supplier bill as a PDF, looks up the matching records in your ERP and fills in a draft quote, order or bill. A named person on your team approves the draft. Only then does it post, under the agent’s own login.',
  },
  {
    category: 'basics',
    question: 'What is the best AI for ERP?',
    answer:
      'Start with what your ERP already supports, then pick the model for the job. Oracle’s FAQ names Claude Pro and ChatGPT as AI clients its NetSuite connector currently supports. Odoo 19’s documentation names ChatGPT and Gemini for its AI app. Microsoft builds the Business Central Sales Order Agent on Azure OpenAI. For a custom agent we choose the model with you, by task, data rules and where the data may be processed.',
  },
  {
    category: 'basics',
    question: 'How is a custom ERP agent different from the Copilot features our ERP already has?',
    answer:
      'Built-in assistants cover the jobs their maker chose, in the way the maker chose. Microsoft’s FAQ says the Business Central Sales Order Agent works only with sales quotes and orders, up to 15 item lines, and reads email from a shared Exchange inbox. A custom agent is built around your process: purchase orders, supplier bills, marketplace orders, a second system such as Linnworks, or your own approval chain. Many firms use both.',
  },
  {
    category: 'basics',
    question: 'Will an AI agent post anything to our ledger without someone checking?',
    answer:
      'Not in anything we build. The agent saves a draft and a named person approves it before it posts. The agent also signs in as its own user, with only the permissions that job needs, so the audit trail shows who did what. Microsoft takes the same line: its Business Central agent asks a person to review every outgoing message and does not post documents.',
  },
  // Systems
  {
    category: 'systems',
    question: 'Does Business Central have an AI agent for sales orders?',
    answer:
      'Yes. Microsoft’s documentation describes the Sales Order Agent: it watches a mailbox, finds the customer, checks stock, creates a sales quote and, once the customer confirms, converts it into an order. It always creates a quote first, because quotes do not affect planning or stock. Designated users approve every outgoing email. Microsoft says it is billed in Copilot Credits, so set up billing before you switch it on.',
  },
  {
    category: 'systems',
    question: 'If Business Central has its own agent, why would we need a custom one?',
    answer:
      'For the jobs outside its stated limits. Microsoft’s FAQ says the agent does not create items, contacts or customers, does not post documents, cannot change a sales order after it exists, and does not handle invoices, credit memos or purchase orders. It also says partners cannot extend it yet. A custom agent can draft purchase orders and supplier bills, or take orders from a marketplace feed, beside Microsoft’s agent.',
  },
  {
    category: 'systems',
    question: 'Does Xero have an AI?',
    answer:
      'Yes. Xero calls it JAX, short for Just Ask Xero. Xero’s September 2025 release describes it automating bank reconciliations, data entry and getting paid. Its July 2026 release from Xerocon London adds document capture, payment follow-ups, checks on bills before payment, and XeroForce, a natural-language builder for custom agents that connect Xero to other apps. Neither release gives UK-specific dates for each feature.',
  },
  {
    category: 'systems',
    question: 'Can ChatGPT or Claude work with Xero?',
    answer:
      'Not on its own. An AI model needs a connection that signs in to your Xero organisation and is allowed to read or write specific records. Xero publishes a developer platform that uses OAuth 2.0 sign-in, and its July 2026 release describes XeroForce for building agents that connect Xero to third-party apps. A custom agent we build connects through Xero’s API, under its own permissions, with your approval step in front of every write.',
  },
  {
    category: 'systems',
    question: 'Is Sage Copilot the same as Microsoft Copilot?',
    answer:
      'No. They come from different companies. Sage Copilot is the name Sage uses for its own AI assistant. Microsoft Copilot is Microsoft’s, and in Business Central Microsoft documents agents such as the Sales Order Agent, which drafts quotes and orders from customer emails. If you run Sage 50, Sage 200 or Sage Intacct, ask Sage or your reseller in writing which Copilot features your edition and licence include, then plan any custom agent around the gaps.',
  },
  {
    category: 'systems',
    question: 'Which is better for AI, Xero or Sage?',
    answer:
      'Neither wins on AI alone. Pick the accounting system on fit: your size, stock, number of companies, your accountant’s preference and the reports you need. Xero documents its own assistant, JAX, and Sage names its assistant Sage Copilot. A custom agent works with either, provided we can reach the records it needs through an API or a file export. On the scoping call we list what your edition exposes before any choice is made.',
  },
  {
    category: 'systems',
    question: 'Can an AI agent connect to NetSuite?',
    answer:
      'Yes. Oracle’s help centre says NetSuite has adopted the Model Context Protocol, a standard for connecting AI tools to business systems, and offers a free SuiteApp called MCP Standard Tools. Its FAQ says the connector is not a paid feature, though your AI client may need a paid plan, and that it does not support Administrator roles. Give the agent its own role with only the permissions the job needs.',
  },
  {
    category: 'systems',
    question: 'Can an outside agent connect to Odoo?',
    answer:
      'Yes. Odoo 19 documents an External JSON-2 API, called at /json/2/ followed by the model and method, using API keys. The same page says the older XML-RPC and JSON-RPC addresses are scheduled for removal in Odoo 22, in fall 2028, and in Odoo Online 21.1, in winter 2027. Anything new should be built on JSON-2, and older integrations need a rewrite on the calendar.',
  },
  {
    category: 'systems',
    question: 'We run Sage 200 with Linnworks or Brightpearl. Can one agent work across both?',
    answer:
      'Yes, if each system’s owner is agreed first. In most UK stacks the order system holds channel orders and stock movements, and Sage holds customers, credit terms and the ledger. The agent reads from the system that owns each record and writes only where the map says it may. We check what your Sage edition and order system expose, by API or export, before we quote.',
  },
  {
    category: 'systems',
    question: 'Can an agent handle orders from Amazon.co.uk, eBay UK or OnBuy?',
    answer:
      'It can prepare them for your ERP. Marketplace orders usually reach the ERP through an order system such as Linnworks, Brightpearl or Mintsoft, or through a connector. The agent’s job is the exceptions: an unknown SKU, a trade buyer ordering through a marketplace, a price below your floor, or an address Royal Mail, DPD or Evri will reject. It flags each one with the reason, for a person to clear.',
  },
  // Rules
  {
    category: 'rules',
    question: 'Does an ERP agent fit HMRC’s Making Tax Digital rules?',
    answer:
      'It can sit inside them. VAT Notice 700/22 says Making Tax Digital requires all VAT-registered businesses to keep records digitally, and that data moving between software must travel by digital link. API transfer is on HMRC’s list of accepted links; copy and paste is not. An agent that writes to your ERP through its API keeps that chain intact. Your accountant should still check the whole set-up against the notice.',
  },
  {
    category: 'rules',
    question: 'Can an agent check a supplier’s VAT invoice before it becomes a bill?',
    answer:
      'Yes, against the fields HMRC lists. VAT Notice 700, paragraph 16.3.1, says a full VAT invoice shows a unique number, the time of supply, the supplier’s VAT registration number, the VAT rate and amount before VAT for each line, and the total VAT in sterling. The agent flags any missing field. GOV.UK runs a service to check a UK VAT number is valid, and a person can confirm a flagged one there.',
  },
  {
    category: 'rules',
    question: 'Does UK GDPR allow an AI agent to make decisions about people?',
    answer:
      'The agents on this page draft records for a person to approve, so a human makes the decision. Where a business does use solely automated decisions with significant effects, GOV.UK says the Data (Use and Access) Act 2025, which received Royal Assent on 19 June 2025, sets a more permissive framework with safeguards: people must be told, can challenge the decision and can obtain human intervention. Take data protection advice for your case.',
  },
  {
    category: 'rules',
    question: 'Does the EU AI Act apply to a UK company?',
    answer:
      'It can. Article 2 of the Act covers providers placing AI systems on the EU market wherever they are established, and providers and deployers in a third country where the output is used in the Union. A UK wholesaler using an agent only on its own UK books is a different case from one whose agent emails quotes to EU buyers. The European Commission says the Act became applicable on 2 August 2026, with some exceptions.',
  },
  // Working with us
  {
    category: 'working',
    question: 'How much does an ERP AI agent cost to build in the UK?',
    answer:
      'Two published UK ranges. Fulminous puts a back-office agent covering data entry, invoice processing and multi-system workflows at £30,000 to £90,000, excluding VAT. LeverX puts a single-workflow agent at £10,000 to £30,000 and a multi-step agent with integrations at £30,000 to £80,000, and does not say whether its figures include VAT. These are market figures, not our prices. FactoryJet quotes a fixed price per phase in writing after scoping.',
  },
  {
    category: 'working',
    question: 'How long does an ERP agent take to build?',
    answer:
      'It depends on the job and on access. An agent that reads and answers is quicker than one that writes orders. The slow part is often outside the code: a test copy of your ERP, a role for the agent, sign-off from whoever owns the system, and your accountant agreeing the posting rules. LeverX’s UK guide lists 5 to 9 weeks for a single workflow. Our timeline goes in writing with the quote.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract we show working software on your own data. For an ERP agent that usually means a quote request you have already answered, or a week of supplier bills, run through a first version in a test copy of your ERP. You compare its drafts with what your team sent or posted, line by line.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who supports it after launch?',
    answer:
      'You own the code and the repository from day one. The AI and hosting can run in your own accounts, at cost, with no markup. Defects are fixed inside the build price for a cover period we agree before work starts. Support is optional: each change is quoted and approved, with no monthly minimum. We can keep managing the servers, AI models and API connections either way.',
  },
  {
    category: 'working',
    question: 'What should we put in a brief or RFP for an ERP agent?',
    answer:
      'Name the ERP and its edition, the other systems in the chain, and the one job you want drafted first. Add three real examples of that job: a quote request, a purchase order or a supplier bill, with what your team did with each. Say who approves today and what an error costs you. A written brief like that lets us quote a fixed price for phase one.',
  },
  {
    category: 'working',
    question: 'Will you work with our ERP partner or our accountant?',
    answer:
      'Yes, and we ask to. Your ERP partner knows the customisations, roles and extensions in your system, and Microsoft notes that custom fields need adding to its own agent’s profile before it can use them. Your accountant decides how bills, VAT and journals should post. We build the agent to follow those decisions and write the rules down so all three parties can read them.',
  },
];

/* Who keeps what. The first decision on any agent build. */
const KEEPS: { data: string; keeper: string; note: string }[] = [
  {
    data: 'Customers, prices, credit terms and stock',
    keeper: 'Your ERP',
    note: 'One copy, held in Sage, NetSuite, Business Central, Odoo or Xero. The agent reads it when it needs it and never keeps a private list.',
  },
  {
    data: 'Reading what arrives',
    keeper: 'The agent',
    note: 'A quote request in an email, a buyer’s purchase order PDF, a supplier bill, a marketplace order with an unknown SKU.',
  },
  {
    data: 'The draft record',
    keeper: 'The agent',
    note: 'A quote, sales order, purchase order or bill, filled from ERP data and saved unposted, with the source document attached.',
  },
  {
    data: 'Approval',
    keeper: 'A named person',
    note: 'Your estimator, sales administrator, buyer or bookkeeper reads the draft and approves, edits or rejects it.',
  },
  {
    data: 'Posting',
    keeper: 'Your ERP',
    note: 'The approved record goes in through the ERP’s own API under the agent’s login, so the audit trail names it.',
  },
  {
    data: 'Posting rules and VAT codes',
    keeper: 'Your accountant',
    note: 'Which nominal code and VAT rate each line takes. The agent follows the map they sign; it never invents a code.',
  },
];

/* The jobs. One card each. */
const JOBS: { n: string; t: string; d: string; items: string[] }[] = [
  {
    n: '01',
    t: 'Quote requests to draft quotes',
    d: 'A trade buyer emails a list of parts or products. The agent builds the quote from your price lists and stock, and your estimator sends it.',
    items: [
      'Reads the email body and attachments, whether the list is typed, a PDF or a spreadsheet',
      'Matches each line to an item code. A line it cannot match is flagged, never guessed',
      'Applies that account’s price list, discounts and lead times from the ERP',
    ],
  },
  {
    n: '02',
    t: 'Customer purchase orders to sales orders',
    d: 'Orders arrive by email, EDI or a portal. The agent turns each into a draft sales order and checks it against the account.',
    items: [
      'Compares the buyer’s price with yours and flags any difference',
      'Checks credit limit and overdue balance before the order is released',
      'Attaches the original PO so the approver sees both side by side',
      'Picks up the buyer’s PO number for the invoice later',
    ],
  },
  {
    n: '03',
    t: 'Purchase orders to suppliers',
    d: 'Stock falls to its reorder point, or a job needs material. The agent drafts the purchase order for your buyer to approve.',
    items: [
      'Uses the supplier, price and lead time your ERP already holds',
      'Reads the supplier’s confirmation and flags a changed date or quantity',
    ],
  },
  {
    n: '04',
    t: 'Supplier bills to draft bills',
    d: 'A PDF bill lands in the accounts inbox. The agent reads it, checks the VAT details and matches it to the PO and goods received.',
    items: [
      'Checks the fields HMRC lists for a full VAT invoice, and flags a missing VAT number',
      'Matches bill, purchase order and delivery, the check accountants call a three-way match',
      'Suggests the nominal code from how your team coded that supplier before',
    ],
  },
  {
    n: '05',
    t: 'Payouts and remittances matched',
    d: 'Money from Stripe, GoCardless, Klarna or Clearpay reaches the bank as lines your bookkeeper has to tie back to sales, refunds and fees. The agent prepares that matching.',
    items: [
      'Splits each payout into sales, refunds and fees for a clearing account',
      'Pairs customer remittance advice with the open invoices it pays',
      'Lists what it could not match, with the reason, at the top of the batch',
    ],
  },
];

/* What each system gives an agent to work with. Each card restates the
   maker's own page as read on 2026-10-29. The Sage card is our practice only. */
const SYSTEMS: { name: string; maker: string; door: string; says: string; sources: SrcKey[] }[] = [
  {
    name: 'Dynamics 365 Business Central',
    maker: 'Microsoft',
    door: 'Built-in Sales Order Agent, plus your own agent beside it',
    says: 'Microsoft’s Sales Order Agent reads customer emails from a monitored mailbox, finds the customer by email address, checks stock and creates a sales quote first, then an order once the customer confirms. A designated user reviews every outgoing message. Its FAQ lists the edges: up to 15 item lines, no invoices, credit memos or purchase orders, and no posting.',
    sources: ['bcAgent', 'bcFaq'],
  },
  {
    name: 'NetSuite',
    maker: 'Oracle',
    door: 'AI Connector Service and MCP Standard Tools',
    says: 'Oracle says NetSuite has adopted the Model Context Protocol and supplies a free SuiteApp, MCP Standard Tools, for working with NetSuite data. Its FAQ names Claude Pro and ChatGPT as supported AI clients, says the connector is not a paid feature, and says it does not support Administrator roles. The agent needs a role of its own.',
    sources: ['nsConnector', 'nsFaq'],
  },
  {
    name: 'Odoo',
    maker: 'Odoo',
    door: 'External JSON-2 API and the Odoo 19 AI app',
    says: 'Odoo 19 has its own AI agents, built from topics (instructions and tools) and sources (the data they refer to). Without topics, Odoo says an agent can only give information, not change the database. For an outside agent, version 19 documents the External JSON-2 API. The older XML-RPC and JSON-RPC addresses go in Odoo 22, fall 2028.',
    sources: ['odooAgents', 'odooApi'],
  },
  {
    name: 'Xero',
    maker: 'Xero',
    door: 'JAX inside Xero, and the Xero API for your own agent',
    says: 'Xero’s July 2026 release describes JAX reading source documents into Xero, matching bank transactions, running payment follow-ups and checking bills for changed bank details or unfamiliar suppliers. It also describes XeroForce, a natural-language builder for agents that connect Xero to other apps. Neither release gives UK dates for each feature.',
    sources: ['xeroJax', 'xeroLondon', 'xeroDev'],
  },
  {
    name: 'Sage 50, Sage 200 and Sage Intacct',
    maker: 'Sage',
    door: 'Whatever your edition and licence expose',
    says: 'Three products with different routes in, and Sage’s own assistant goes by the name Sage Copilot. For a custom agent we start by listing what your edition and licence expose: an API, a database your reseller can open for reading, or a scheduled export. The write-back route is agreed in writing with you and your Sage partner first.',
    sources: [],
  },
  {
    name: 'QuickBooks UK, Brightpearl, Linnworks and Mintsoft',
    maker: 'the rest of the chain',
    door: 'The system that owns each record',
    says: 'Many UK sellers split the work: Linnworks, Brightpearl or Mintsoft hold channel orders and dispatch, while the ledger sits in QuickBooks, Xero or Sage. The agent reads each record from its owner and writes only where the map allows, so a marketplace order from Amazon.co.uk, eBay, OnBuy, ManoMano, B&Q or Zalando never has two masters.',
    sources: [],
  },
];

/* Built-in assistant or custom agent. Built-in cells restate Microsoft's
   Business Central pages as read on 2026-10-29. */
const COMPARE: { feat: string; builtin: string; custom: string }[] = [
  { feat: 'Documents it drafts', builtin: 'Sales quotes and sales orders only', custom: 'Quotes, sales orders, purchase orders, supplier bills, journals: the jobs you choose' },
  { feat: 'Where requests come from', builtin: 'A shared mailbox on Microsoft Exchange', custom: 'Email, EDI, a portal, a marketplace feed or an order system such as Linnworks' },
  { feat: 'Size of document', builtin: 'Up to 15 item lines per sales document', custom: 'Set by your trade, tested on your longest real orders' },
  { feat: 'New customers or items', builtin: 'Does not create items, contacts or customers', custom: 'Can draft a new account for approval, if you want that' },
  { feat: 'Posting', builtin: 'Does not post documents', custom: 'Posts only after a named person approves' },
  { feat: 'Extending it', builtin: 'Partners cannot extend it yet, per Microsoft’s FAQ', custom: 'Your code, in your repository, changed when your process changes' },
  { feat: 'Who supports it', builtin: 'Microsoft and your Business Central partner', custom: 'FactoryJet, with you owning the code' },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'ERP AI Agents UK',
      serviceType: 'AI agent design, development, implementation and support for ERP and accounting systems: Sage, NetSuite, Dynamics 365 Business Central, Odoo, Xero',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds, implements and supports AI agents for UK businesses that run Sage, NetSuite, Dynamics 365 Business Central, Odoo or Xero. The agents read quote requests, customer purchase orders, supplier bills and payouts, and draft quotes, sales orders, purchase orders and bills in the ERP for a named person to approve before anything posts.',
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
      datePublished: UPDATED,
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agents inside Sage, NetSuite, Business Central, Odoo and Xero that draft quotes, sales orders, purchase orders and supplier bills for UK teams to approve. Built-in Copilot features compared, MTD and VAT rules sourced.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${IMG}/wholesale-warehouse-aisle.webp`, width: 1200, height: 800, alt: 'A man in a green polo shirt lifts a plain cardboard box from a shelf in a warehouse aisle beside an orange hand truck' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids }: { ids: SrcKey[] }) {
  return (
    <p style={srcNote}>
      Sources, read on {READ_ON}:{' '}
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

export default function ErpAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-erp-ai-agents" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />ERP AI Agents UK</span>
                  <span className="chip">Draft, Approve, Post</span>
                  <span className="chip">Sage, NetSuite, Business Central, Odoo, Xero</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your sales office retypes emailed orders into Sage 200. Your accounts team keys supplier bills into
                  Xero or Business Central, then checks the VAT by eye. FactoryJet designs, builds and supports AI
                  agents that do the reading and the first draft inside your ERP. A named person on your team
                  approves every quote, order and bill before it posts.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_erp_ai_agents_hero" service="ERP AI Agents" submitLabel="See a demo on my data" trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/wholesale-warehouse-aisle.webp`} width={1200} height={800} fetchPriority="high" decoding="async" alt="A man in a green polo shirt lifts a plain cardboard box from a shelf in a warehouse aisle beside an orange hand truck" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What the agent drafts, and who signs it off</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Quote from an emailed parts list</div><div className="scorecard-note">your price list, your stock</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Estimator</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Sales order from a buyer’s PO</div><div className="scorecard-note">price and credit checked</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Sales admin</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Bill from a supplier PDF</div><div className="scorecard-note">VAT fields and PO matched</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Bookkeeper</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Posted to the ledger</div><div className="scorecard-note">only after approval</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an ERP AI agent do for a UK business?</span>
              <p>
                It reads the documents that arrive all day, such as quote requests, customer purchase orders and
                supplier bills, looks up your ERP and saves a draft quote, order or bill. A person approves it, and
                only then does it post through the ERP’s own API. Microsoft, Odoo, Xero and Sage now offer AI
                assistants of their own, and Oracle offers a connector for outside AI tools. A custom agent covers
                the jobs and systems those do not.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                An <b>API</b> is the documented door one piece of software uses to read or write records in another.
                A <b>draft</b> is a record saved in your ERP but not yet posted, so it changes nothing in stock or the
                ledger. A <b>three-way match</b> is the check that a supplier bill agrees with the purchase order and
                the goods you received.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The agent is the easy part to describe. The work is deciding, record by record, which system owns
              the truth, who approves what, and which nominal code and VAT rate each line takes. We write that down
              with you, your ERP partner and your accountant before a line of code is written.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: '15', t: 'item lines per sales document is the limit Microsoft gives for its Business Central Sales Order Agent', s: 'Microsoft Learn, Sales Order Agent FAQ', u: SRC.bcFaq.url },
                { v: '2028', t: 'is when Odoo says its old XML-RPC and JSON-RPC addresses are removed, in Odoo 22', s: 'Odoo 19, External JSON-2 API', u: SRC.odooApi.url },
                { v: 'API', t: 'transfer is on HMRC’s list of accepted digital links for Making Tax Digital; copy and paste is not', s: 'GOV.UK, VAT Notice 700/22', u: SRC.govMtd.url },
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

        {/* 4. WHO KEEPS WHAT */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Start with owners</span>
                <h2>Who keeps what: the ERP, the agent, your approver and your accountant</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  An agent goes wrong when it keeps its own copy of a price, or posts before anyone has looked. So
                  the first page we write is a map of six jobs and one owner for each. Everything else follows from
                  that page.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/planning-the-agent.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man in a charcoal sweater and a woman in a teal shirt look down at a row of blank index cards on a table, one of them orange" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    One card per record. Each card names the system that owns it and the person who approves
                    changes to it. You, your ERP partner and your accountant sign the finished set.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="Who keeps what" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th className="fj">Owner</th>
                    <th>What that means</th>
                  </tr>
                </thead>
                <tbody>
                  {KEEPS.map((k) => (
                    <tr key={k.data}>
                      <td className="feat">{k.data}</td>
                      <td className="fj">{k.keeper}</td>
                      <td>{k.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. THE JOBS */}
        <section className="sec-lg" id="jobs">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">What the agents do</span>
              <h2>Five jobs an ERP agent drafts for a UK sales office or accounts team</h2>
              <p className="lead mt-4">
                Most clients start with one. Pick the job your team retypes most often, prove it on your own
                documents, then add the next.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {JOBS.map((j) => (
                <li key={j.n} className="card">
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small }}>{j.n}</span>
                  <h3 className="mt-2">{j.t}</h3>
                  <p className="mt-4">{j.d}</p>
                  <ul className="scope-list yes-list mt-4">
                    {j.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              Supplier bills on their own are a deep enough job for a page of their own: see{' '}
              <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation in the UK</a>.
              If your orders start in a Shopify store and end in Xero, see{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>. For trade
              buyers ordering online at their own prices, see{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a>.
            </p>
            <Sources ids={['govVat700', 'govVatCheck']} />
          </div>
        </section>

        {/* 6. SYSTEMS */}
        <section className="sec-lg dot-grid" id="systems">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Your ERP</span>
              <h2>What Sage, NetSuite, Business Central, Odoo and Xero give an agent to work with</h2>
              <p className="lead mt-4">
                Each maker now ships its own AI. That changes the brief: the custom agent should do what the
                built-in one cannot, and leave alone what it already does well. Each card restates the maker’s own
                pages, read on {READ_ON}.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {SYSTEMS.map((s) => (
                <li key={s.name} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{s.name}</h3>
                    <span className="plat-pill">{s.maker}</span>
                  </div>
                  <p style={{ fontSize: 14, color: T.ink }}><b>Way in:</b> {s.door}.</p>
                  <p style={{ fontSize: 14, marginTop: 8 }}>{s.says}</p>
                  {s.sources.length > 0 ? <Sources ids={s.sources} /> : <p style={srcNote}>Our own practice on UK projects, not a maker’s claim.</p>}
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              Payments and couriers sit in the same chain. Payout reports from Stripe, GoCardless, Klarna or
              Clearpay, and dispatch data from Royal Mail, DPD or Evri, become inputs the agent reads. It drafts
              the matching entries, and your team approves them.
            </p>
          </div>
        </section>

        {/* 7. UK RULES */}
        <section className="sec-lg" id="uk-rules">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK rules the agent has to respect</span>
                <h2>Making Tax Digital, VAT invoices, UK GDPR and the EU AI Act</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Making Tax Digital.</b> HMRC’s VAT Notice 700/22 says Making Tax Digital requires all
                    VAT-registered businesses to keep records digitally, and that data moving between software must
                    travel by digital link. API transfer is on HMRC’s accepted list. Copy and paste is not. An agent
                    that writes to your ERP through its API keeps the chain digital, where a person retyping a bill
                    would break it.
                  </p>
                  <p>
                    <b>VAT invoices.</b> VAT Notice 700, paragraph 16.3.1, lists what a full VAT invoice must show,
                    including a unique number, the time of supply, the supplier’s VAT registration number, the VAT
                    rate and pre-VAT amount for each line, and the total VAT in sterling. The bills agent checks for
                    each field and flags what is missing. GOV.UK’s VAT number checker confirms whether a number is
                    valid and who it belongs to.
                  </p>
                  <p>
                    <b>UK GDPR.</b> GOV.UK says the Data (Use and Access) Act 2025, given Royal Assent on 19 June
                    2025, creates a more permissive framework for automated decisions with significant effects, with
                    safeguards: people are told, can challenge the decision and can obtain human intervention. The
                    agents on this page keep a person on every decision, which is the simplest position to defend.
                  </p>
                  <p>
                    <b>The EU AI Act.</b> Article 2 reaches providers and deployers outside the EU where the output
                    of an AI system is used in the Union. A UK firm whose agent sends quotes to buyers in Dublin or
                    Rotterdam should take advice. The European Commission says the Act became applicable on 2 August
                    2026, with some exceptions and later dates for high-risk systems.
                  </p>
                </div>
                <Sources ids={['govMtd', 'govVat700', 'govVatCheck', 'govDuaa', 'euAiActScope', 'euAiActTimeline']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Who decides what</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Nominal codes and VAT rates</div><div className="scorecard-note">signed off before build</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Accountant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The VAT Return</div><div className="scorecard-note">filed from your ERP as today</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Each quote, order and bill</div><div className="scorecard-note">a named approver per job</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Your team</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Data protection position</div><div className="scorecard-note">your DPO or adviser</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Adviser</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Reading, drafting, flagging</div><div className="scorecard-note">logged under its own user</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Agent</div></div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send three real documents. We show you the drafts.'}
          sub={'Pick the job your team retypes most: a quote request, a customer PO or a supplier bill. Tell us your ERP and edition. On a short call we say what the built-in assistant already covers, what a custom agent would add, and we quote phase one as a fixed price.'}
          label={'See a demo on my data'}
        />

        {/* 8. BUILT-IN OR CUSTOM */}
        <section className="sec-lg dot-grid" id="built-in-or-custom">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Built-in or custom</span>
              <h2>Business Central’s own Sales Order Agent beside a custom agent, line by line</h2>
              <p className="lead mt-4">
                Microsoft publishes the clearest limits of any ERP maker, so we use its agent as the worked example.
                If your quotes come from email, run under 15 lines and stay inside Business Central, start with
                Microsoft’s agent. We will tell you so on the first call.
              </p>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="Built-in agent compared with a custom agent" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Business Central Sales Order Agent</th>
                    <th className="fj">Custom agent built by FactoryJet</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.builtin}</td>
                      <td className="fj">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Sources ids={['bcAgent', 'bcFaq']} />
          </div>
        </section>

        {/* 9. WORK WE CAN SHOW (the only block that names clients) */}
        <section className="sec-lg" id="work">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK work we can show</span>
              <h2>The integration work an ERP agent stands on, for two UK clients</h2>
              <p className="lead mt-4">
                An agent is only as good as the link underneath it. These two UK projects are that link: one
                system owning stock and prices, and the storefront reading from it.
              </p>
            </div>
            <ul className="col-2 mt-10">
              <li className="card">
                <span className="eyebrow">Sow Easy · UK wholesale · WooCommerce and Odoo</span>
                <h3 className="mt-2">A trade store that reads stock, prices and SKUs from Odoo</h3>
                <p className="mt-4">
                  A WordPress WooCommerce trade store joined to Odoo, with Odoo as the single source for stock,
                  pricing and product codes. The Odoo link is still in build and is being tested against Odoo’s
                  staging system before launch.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
              <li className="card">
                <span className="eyebrow">GPSUK · UK promotional products · Commerceflo</span>
                <h3 className="mt-2">Trade buyers move from quote to order without a rebuild</h3>
                <p className="mt-4">
                  A trade storefront built on Commerceflo, where UK business buyers log in, see their own account
                  pricing and turn a quote into an order without anyone retyping it.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
            </ul>
          </div>
        </section>

        {/* 10. COST */}
        <section className="sec-lg dot-grid" id="cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What UK builds cost</span>
                <h2>Two published UK market ranges for building an ERP agent</h2>
                <div className="stack mt-6">
                  <p>
                    Fulminous, a UK development firm, puts a back-office agent that covers data entry, invoice
                    processing and multi-system workflows at £30,000 to £90,000, excluding VAT, in a guide last
                    updated on 23 September 2026. It names integrations as the biggest single driver of cost.
                  </p>
                  <p>
                    LeverX’s UK guide, published on 4 October 2026, gives £10,000 to £30,000 for a single-workflow
                    agent built in 5 to 9 weeks, and £30,000 to £80,000 for a multi-step agent with integrations
                    built in 10 to 18 weeks. LeverX calls these indicative market benchmarks and does not say
                    whether they include VAT.
                  </p>
                  <p>
                    These are market figures, not our prices. FactoryJet quotes a fixed price per phase in writing
                    after a short scoping call, starting with the smallest job worth proving.
                  </p>
                </div>
                <Sources ids={['fulminous', 'leverx']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the price</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Read only, or writes records</div><div className="scorecard-note">writing needs approval steps and tests</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How many systems it touches</div><div className="scorecard-note">ERP alone, or ERP plus Linnworks</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">What your ERP exposes</div><div className="scorecard-note">a documented API, or exports only</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How messy the documents are</div><div className="scorecard-note">typed lists or scanned PDFs</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. HOUSE TERMS */}
        <section className="sec-lg" id="terms">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">How we work</span>
              <h2>Our terms, in writing before you sign</h2>
            </div>
            <ul className="scope-list yes-list mt-8" style={{ maxWidth: 820 }}>
              <li><b>A demo on your data before you sign.</b> Working software, run on your own quote requests, orders or bills in a test copy of your ERP.</li>
              <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own. You can stop after any one.</li>
              <li><b>You own it from day one.</b> The code and the repository are yours, and nothing depends on a FactoryJet login.</li>
              <li><b>Your accounts, at cost.</b> The AI and hosting can run in your own cloud and AI accounts, at cost, with no markup.</li>
              <li><b>Defects fixed inside the build price</b> for a cover period we agree before work starts.</li>
              <li><b>Support is optional.</b> Each change is quoted and approved, with no monthly minimum. We can keep managing the servers, AI models and API connections if you want us to.</li>
            </ul>
          </div>
        </section>

        {/* 12. PROCESS (NUMBERED) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Project steps</span>
                <h2>How we build an ERP agent, in seven steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Your ERP partner joins at steps three and six. Your accountant joins at step two for any job that
                  touches the ledger.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/finance-desk-review.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="Two people seen from behind sit at a desk and look at a monitor showing grey bars and one orange bar, with an orange folder on the desk" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Every draft carries its source document. The approver sees the supplier’s PDF and the agent’s
                    bill side by side, and approves, edits or rejects.
                  </p>
                </div>
              </div>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Collect a week of real documents', d: 'Quote requests, customer POs or supplier bills, with what your team did with each. That pile is the brief, and it shows us the awkward cases early.' },
                { n: '02', t: 'Write the map of owners and approvers', d: 'One owner per record, one approver per job, and the nominal codes and VAT rates your accountant signs off. Nothing is built before this page is agreed.' },
                { n: '03', t: 'Check what your ERP exposes', d: 'With your ERP partner we list the API, roles and permissions available in your edition, and what the built-in assistant already does. The agent gets its own user.' },
                { n: '04', t: 'Show a first version on your data', d: 'Before a contract, a first version drafts your real documents in a test copy of your ERP. You compare its drafts with what your team sent or posted.' },
                { n: '05', t: 'Fix the price and build phase one', d: 'A fixed price in writing for the first job. We build the draft, the approval step, the log and the flags for anything it cannot match.' },
                { n: '06', t: 'Test the hard cases in a sandbox', d: 'A part-delivered PO, a credit note, a bill with no VAT number, a price below your floor, an unknown SKU. Each must be flagged, never posted.' },
                { n: '07', t: 'Go live with a person on every draft, then stay on', d: 'For the first weeks we read the log beside your approvers. After that the same team supports the agent, and you own the code.' },
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

        {/* 13. BRIEF / RFP ASK */}
        <section className="sec-lg" id="brief">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send us a brief</span>
                <h2>Running a tender? Send the brief or RFP and we reply in writing</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Established firms usually choose a supplier from a written brief, not a contact form. Send yours,
                  or use the list on the right to write one in half an hour. We reply with what we would build
                  first and a fixed price for that phase.
                </p>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  Still deciding where AI fits at all? Start with{' '}
                  <a href="/uk/ai-consulting" style={inlineLink}>AI consulting in the UK</a>, or see the wider range
                  of <a href="/uk/ai-agents" style={inlineLink}>AI agents we build for UK businesses</a>. US readers
                  can see our <a href="/services/erp-ai-agents" style={inlineLink}>ERP AI agents page for the US</a>.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What a useful brief contains</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your ERP and its edition</div><div className="scorecard-note">Sage 200, NetSuite, Business Central, Odoo 19</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The rest of the chain</div><div className="scorecard-note">Linnworks, Brightpearl, Mintsoft, marketplaces</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The first job to draft</div><div className="scorecard-note">quotes, orders, purchase orders or bills</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Three real examples</div><div className="scorecard-note">with what your team did with each</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who approves today</div><div className="scorecard-note">and what an error costs you</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every platform feature, tax rule, legal point and market range on this page was read on the pages
                below on that day. Makers change features and HMRC changes guidance, so open the linked page before
                you act on a point. For Sage editions we state no feature beyond the name of Sage’s assistant: ask
                Sage or your reseller what your licence includes.
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
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>ERP AI agent questions from UK finance, sales and operations teams</h2>
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
            <h2>See your own quotes, orders or bills drafted inside your ERP</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within 24 hours to set up a short call about your ERP,
              the job your team retypes most and who approves it today. You leave knowing whether your ERP’s own
              assistant covers it, or what a custom agent would add, and the fixed price of phase one.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See all UK AI agents</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
