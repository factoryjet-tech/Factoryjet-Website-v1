import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/odoo-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every Odoo, HMRC, GOV.UK, ICO, EU and supplier fact was read on the
      owner's own page on 2026-10-29 and links to it through the SRC map below.
      Re-read the page before changing a fact, and update READ_ON.
   2. No FactoryJet price. The only money figures are a sourced UK market range
      (Softomate Solutions, a London Odoo agency, inside the cost FAQ) and
      Odoo's own listed AI credit price. Never add running or upkeep figures.
   3. Client proof sits in ONE block (the "Work we can show" section): Sow Easy
      (UK wholesale, WooCommerce plus Odoo, Odoo link still being tested on
      staging) and GPSUK (built on Commerceflo, not Odoo). No results claimed.
   4. No partner or accreditation status is claimed for FactoryJet.
   5. Structure mirrors /uk/shopify-xero-integration (imports, components,
      CSS module, schema). Reviewer pass on 2026-10-29 rewrote the passages
      that echoed /services/odoo-ai-agents and /uk/shopify-xero-integration.
      Keep new copy in fresh words; do not paste from either page.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions.

   UK search demand (DataForSEO Google Ads volumes, location 2826, pulled
   2026-10-29): "odoo partner uk" 110, "odoo uk" 70, "odoo api" 70, "odoo 20"
   50, "odoo ai" 40, "odoo mcp" 40, "odoo xero integration" 20, "odoo ai
   agent" 10, "odoo making tax digital" 10. An AI Overview showed on all four
   UK result pages pulled that day. FAQ wording draws on the UK People Also
   Ask boxes for "odoo ai" and "odoo making tax digital". */

const CANONICAL = 'https://factoryjet.com/uk/odoo-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Odoo AI Agents UK: Built for UK VAT and MTD | FactoryJet';
const H1 = 'Odoo AI Agents for UK Firms, With VAT and MTD Left Intact';
const DESCRIPTION =
  'Odoo AI agents for UK firms on Odoo 19 and 20: trade orders, supplier bills and stock answers drafted for a person to approve, with UK VAT and MTD intact.';
const IMG = '/images/us/services/odoo-ai-agents';

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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Odoo AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  odooUk: { label: 'Odoo 20.0 documentation: United Kingdom fiscal localisation', url: 'https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/united_kingdom.html' },
  odooAi: { label: 'Odoo 20.0 documentation: AI', url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai.html' },
  odooAgents: { label: 'Odoo 20.0 documentation: AI agents', url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html' },
  odooMcp: { label: 'Odoo 20.0 documentation: AI MCP server', url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html' },
  odooMcpTools: { label: 'Odoo 20.0 documentation: Available MCP tools', url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server/mcp_tools.html' },
  odooServerActions: { label: 'Odoo 20.0 documentation: AI server actions', url: 'https://www.odoo.com/documentation/20.0/applications/productivity/ai/server-actions.html' },
  odooApi: { label: 'Odoo 20.0 documentation: External JSON-2 API', url: 'https://www.odoo.com/documentation/20.0/developer/reference/external_api.html' },
  odooRelease20: { label: 'Odoo: Odoo 20 release notes', url: 'https://www.odoo.com/odoo-20-release-notes' },
  odooIap: { label: 'Odoo In-App Services: Odoo AI credits', url: 'https://iap.odoo.com/iap/in-app-services/867' },
  odooSupport: { label: 'Odoo 20.0 documentation: Standard and extended support', url: 'https://www.odoo.com/documentation/20.0/administration/standard_extended_support.html' },
  odooOnline: { label: 'Odoo 20.0 documentation: Odoo Online', url: 'https://www.odoo.com/documentation/20.0/administration/odoo_online.html' },
  odooBills: { label: 'Odoo 20.0 documentation: Document digitisation of vendor bills', url: 'https://www.odoo.com/documentation/20.0/applications/finance/accounting/vendor_bills/invoice_digitization.html' },
  odooShippers: { label: 'Odoo 20.0 documentation: Third-party shipping connectors', url: 'https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper.html' },
  odooAmazon: { label: 'Odoo 20.0 documentation: Amazon Connector configuration', url: 'https://www.odoo.com/documentation/20.0/applications/sales/sales/amazon_connector/setup.html' },
  odooPayments: { label: 'Odoo 20.0 documentation: Payment providers', url: 'https://www.odoo.com/documentation/20.0/applications/finance/payment_providers.html' },
  appsXero: { label: 'Odoo Apps Store: search results for Xero', url: 'https://apps.odoo.com/apps/modules/browse?search=xero' },
  appsRoyalMail: { label: 'Odoo Apps Store: search results for Royal Mail', url: 'https://apps.odoo.com/apps/modules/browse?search=royal%20mail' },
  appsGoCardless: { label: 'Odoo Apps Store: search results for GoCardless', url: 'https://apps.odoo.com/apps/modules/browse?search=gocardless' },
  appsLinnworks: { label: 'Odoo Apps Store: search results for Linnworks', url: 'https://apps.odoo.com/apps/modules/browse?search=linnworks' },
  odooPartnersUk: { label: 'Odoo: Gold partners in the United Kingdom', url: 'https://www.odoo.com/partners/grade/gold-1/country/united-kingdom-222' },
  govVatRates: { label: 'GOV.UK: VAT rates', url: 'https://www.gov.uk/vat-rates' },
  govVatRecords: { label: 'GOV.UK: Keeping VAT records', url: 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records' },
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govMtdSoftware: { label: 'GOV.UK: software compatible with Making Tax Digital for VAT', url: 'https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-vat' },
  govDuaa: { label: 'GOV.UK: Data (Use and Access) Act 2025, plans for commencement', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement' },
  icoAi: { label: 'ICO: Artificial intelligence guidance and the AI and data protection risk toolkit', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/' },
  euAiAct: { label: 'European Commission: AI Act regulatory framework', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  odooPricing: { label: 'Odoo: Pricing', url: 'https://www.odoo.com/pricing' },
  softomateCost: { label: 'Softomate Solutions (London): Odoo implementation cost UK, 2026 breakdown', url: 'https://www.softomatesolutions.com/blog/odoo-implementation-cost-uk/' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema). */
const FAQ_CATEGORIES = [
  { key: 'odoo', label: 'Odoo and its AI' },
  { key: 'tax', label: 'VAT, MTD and CIS' },
  { key: 'systems', label: 'UK systems around Odoo' },
  { key: 'rules', label: 'Data and AI rules' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Odoo and its AI
  {
    category: 'odoo',
    question: 'Does Odoo use AI?',
    answer:
      'Yes. Odoo 20 ships an AI app with agents you configure from skills and sources, AI server actions inside its automations, and an MCP server that outside AI tools can connect to. Accounting has read supplier bills with OCR and AI for longer: you email a PDF to the journal’s alias and Odoo fills in a draft bill. Odoo’s support table dates Odoo 20.0 to September 2026.',
  },
  {
    category: 'odoo',
    question: 'Is Odoo AI free?',
    answer:
      'No. The Odoo 20 release notes say every AI feature now needs credits bought through Odoo’s in-app purchase service. When we read Odoo’s AI credits page on 29 October 2026 it offered 20 free credits, then packs of 10 to 1,000 credits listed at 1.00 euro a credit. That bill covers Odoo’s own AI features. A custom agent built outside Odoo is quoted separately, as its own project.',
  },
  {
    category: 'odoo',
    question: 'What is an Odoo AI agent, in plain English?',
    answer:
      'A helper inside Odoo that understands typed requests and uses Odoo tools to act on them. You give it instructions, reference material such as PDFs, and skills. Odoo 20 lists eight built-in skills, including Create Records and Update Records. An agent with no skills can answer questions but cannot change your data. A custom agent does the same kind of work from outside Odoo, through its API.',
  },
  {
    category: 'odoo',
    question: 'Can an Odoo AI agent create sales orders or supplier bills?',
    answer:
      'It can create records, within the access rights of the Odoo user it runs as. We set it to stop at a draft. A trade order becomes a draft quotation, a supplier invoice becomes a draft bill, and a named person in your team confirms each one. That keeps the VAT on every posted entry under the control of the people who answer to HMRC.',
  },
  {
    category: 'odoo',
    question: 'What is the Odoo MCP server, and can Claude or ChatGPT use it?',
    answer:
      'It is Odoo 20’s door for outside AI assistants. MCP (Model Context Protocol) is a shared format those assistants use to call other programs, and Odoo serves it from a /mcp address on your own database. Odoo’s page names Claude Code, Antigravity and Codex as compatible clients and gives set-up steps for Claude, Grok and ChatGPT. As shipped, the server offers five tools that only read. Write tools stay hidden until someone exposes them in Odoo’s settings.',
  },
  {
    category: 'odoo',
    question: 'What are the downsides of Odoo for AI agent work?',
    answer:
      'Three catch UK firms out. Outside software can only reach your data through the API on Odoo’s Custom plan, not One App Free or Standard. Odoo Online will not install custom modules or Apps Store modules, so any connector has to live outside Odoo. And Online gets a new version every two to three months, so an agent there needs testing more often than one on Odoo.sh or your own server.',
  },
  // VAT, MTD and CIS
  {
    category: 'tax',
    question: 'Does Odoo support Making Tax Digital for VAT?',
    answer:
      'Yes, through its UK localisation. Odoo’s documentation says the UK Accounting Reports module sends the VAT return to HMRC over the MTD VAT API: you connect to HMRC once, import your obligations and click Send to HMRC. Two limits matter. Only UK-based companies can submit, and a return more than three months late cannot go through Odoo, so it has to be filed with HMRC directly.',
  },
  {
    category: 'tax',
    question: 'Can an AI agent submit our VAT Return to HMRC?',
    answer:
      'We do not build it to. The agent prepares drafts: orders, bills and suggested tax codes. Your accountant or finance lead reviews the period and presses Send to HMRC in Odoo, as today. GOV.UK says some VAT records must be kept digitally under Making Tax Digital. We keep the check with whoever signs the return. Tax advice stays with your accountant.',
  },
  {
    category: 'tax',
    question: 'Does an AI agent break HMRC’s digital links rule?',
    answer:
      'Not when it writes into Odoo through the API. HMRC’s VAT Notice 700/22 lists API transfer among the accepted digital links, alongside CSV import and export. The same notice says copy and paste is not a digital link. An agent that reads a supplier PDF and saves a draft bill in Odoo by API means nobody retypes that bill. Ask your accountant to check your full chain of software against the notice.',
  },
  {
    category: 'tax',
    question: 'Which VAT rates does the agent apply?',
    answer:
      'The ones your Odoo already holds. The UK localisation creates UK taxes automatically, with a VAT100-ready tax structure, and GOV.UK lists a 20% standard rate, a 5% reduced rate and a 0% zero rate. The agent suggests a tax on each line from the product and the supplier’s history, and flags anything it is unsure about. Your accountant decides the mapping before the agent touches a live record.',
  },
  {
    category: 'tax',
    question: 'We run several UK companies in one Odoo database. What should we watch?',
    answer:
      'The HMRC connection. Odoo’s UK page says only one company and one user can be connected to HMRC at a time, so whoever files has to reset the credentials and reconnect for each company before each submission. An agent working across companies also needs its access split by company in Odoo’s record rules, so a bill for one entity can never be drafted in another.',
  },
  {
    category: 'tax',
    question: 'Does Odoo handle CIS for construction firms?',
    answer:
      'Yes. Odoo’s UK localisation includes a Construction Industry Scheme module that sends the monthly return to HMRC and adds a CIS deduction report, and it installs the HMRC API module with it. An agent can help with the paperwork in front of that: reading subcontractor invoices and drafting bills with the right CIS set-up for a person to check. The monthly return stays with your team.',
  },
  // UK systems around Odoo
  {
    category: 'systems',
    question: 'Does Odoo integrate with Xero?',
    answer:
      'Not in Odoo’s own documentation. The Odoo Apps Store returned 57 apps for a Xero search on 29 October 2026, and Odoo Online cannot install any of them. Some UK firms keep Xero for the books while Odoo runs stock and orders, or are moving from Xero or Sage into Odoo Accounting. The first job is deciding which system owns the ledger, so VAT is never counted in two places.',
  },
  {
    category: 'systems',
    question: 'Can Odoo ship with Royal Mail, DPD or Evri?',
    answer:
      'Not through a connector Odoo documents itself. Its shipping page lists DHL Express, FedEx, UPS, Sendcloud and others, and says Sendcloud supports shipping from the United Kingdom. Royal Mail, DPD and Evri are not on that list. The Odoo Apps Store returned 17 apps for a Royal Mail search on 29 October 2026. Where no module fits, we build the courier link to Odoo ourselves.',
  },
  {
    category: 'systems',
    question: 'Can Odoo take orders from Amazon.co.uk and other UK marketplaces?',
    answer:
      'Amazon, yes. Odoo’s Amazon Connector links a paid seller account, and the marketplaces available to that account are synchronised into Odoo. eBay UK, OnBuy, ManoMano and the B&Q marketplace are not covered by Odoo’s own connectors, so they need a third-party module or a custom link. An agent helps where orders arrive with problems: an unknown SKU, a price that differs, a missing address.',
  },
  {
    category: 'systems',
    question: 'Which Odoo plan do we need for a custom agent?',
    answer:
      'Custom. Odoo’s API documentation limits the external API to that plan, so One App Free and Standard are shut out, and its pricing page lists Agentic AI and External API under Custom too. For a UK firm on Standard, that means no outside agent can turn a supplier inbox into draft bills, and no link from Xero, Linnworks or a courier can write into Odoo. Settle the plan question first.',
  },
  {
    category: 'systems',
    question: 'Does this work on Odoo Online, Odoo.sh and our own server?',
    answer:
      'Yes, though the agent sits somewhere different on each. Odoo Online refuses custom modules, so there the agent runs on a separate server and talks to Odoo over the JSON-2 API. On Odoo.sh or your own server, part of the logic can live inside Odoo as a module, which helps when a supplier bill and its stock receipt must be saved together or not at all. Testing on Online uses a duplicate that expires after 15 days, with at most five per database.',
  },
  // Data and AI rules
  {
    category: 'rules',
    question: 'Is an Odoo AI agent safe under UK GDPR?',
    answer:
      'It can be designed to be. The agent signs in as its own bot user with the narrowest access the job needs, which Odoo’s API page recommends, so it cannot read payroll or HR records it has no use for. Its key expires within three months. The ICO publishes guidance on AI and data protection and a risk toolkit, and we work through it with your data protection lead before launch.',
  },
  {
    category: 'rules',
    question: 'Does the Data (Use and Access) Act 2025 change anything?',
    answer:
      'Yes, and most of it is already in force. GOV.UK says the Act received Royal Assent on 19 June 2025, and that the Commencement No. 6 Regulations brought most of the data protection provisions in Part 5 into force on 5 February 2026. For agents that draft orders and bills for a person to confirm, two habits carry over unchanged: take only the data the job needs, and keep a named person answerable for each decision.',
  },
  {
    category: 'rules',
    question: 'We sell into the EU. Does the EU AI Act matter for us?',
    answer:
      'Check it if an agent talks to EU customers. The European Commission says the Act’s transparency rules come into effect in August 2026, and that people using a chatbot should be told they are dealing with a machine. Rules for high-risk uses such as employment start on 2 December 2027. Agents that draft orders and bills for your own staff are a different case, but ask your legal adviser.',
  },
  // Working with us
  {
    category: 'working',
    question: 'How much does an Odoo AI agent project cost in the UK?',
    answer:
      'It depends on the job and on how much of your Odoo is already in shape. Softomate Solutions, a London Odoo agency, puts UK Odoo implementations at £8,000 to £120,000 in its 2026 guide, and says five or more integrations add £15,000 to £40,000. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'working',
    question: 'Should we hire an Odoo partner or an AI agent builder?',
    answer:
      'It depends on where the work sits. Odoo lists its UK Gold partners on its own site, and a partner is the natural call for setting up Odoo itself, its UK localisation and the AI app. An AI agent builder such as FactoryJet suits work that starts outside Odoo, such as an inbox of trade orders, or crosses two systems. Many firms use both, with one named owner for each job.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we run working software on your own data. For an Odoo agent we take three or four real documents you have already processed, such as a trade order and two supplier invoices, and show the drafts the agent produces beside what your team posted. If the drafts are wrong, you have spent nothing.',
  },
  {
    category: 'working',
    question: 'What do you need from us to quote?',
    answer:
      'A short brief, or your RFP if you have one. Tell us your Odoo version and hosting, your plan, the apps you use, the one job you want handled first, how many documents a week it involves, and the other systems involved, such as Xero, Linnworks, Royal Mail or Amazon.co.uk. A sample document helps most. We reply with questions, then a fixed price for the first phase.',
  },
  {
    category: 'working',
    question: 'What happens to our agent when Odoo releases a new version?',
    answer:
      'We test it again. Odoo 19.0 came out in September 2025 and 20.0 in September 2026, and Odoo Online receives in-between versions every two to three months. The API key the agent uses can last three months at most, so renewal goes in the calendar from day one. If you choose support, the same team handles both, with each change quoted and approved first.',
  },
];

/* What Odoo's UK localisation does already. Each row restates Odoo's UK
   fiscal localisation page as read on 2026-10-29. */
const UK_MODULES: { module: string; does: string; agent: string }[] = [
  { module: 'UK Accounting (l10n_uk)', does: 'A CT600-ready chart of accounts and a VAT100-ready tax structure. UK taxes are created automatically with their accounts.', agent: 'The agent uses these taxes. It never invents one.' },
  { module: 'UK Accounting Reports (l10n_uk_reports)', does: 'UK reports, and the VAT return sent to HMRC over the MTD VAT API with a Send to HMRC button.', agent: 'Stays with your accountant. The agent prepares the entries behind the return.' },
  { module: 'UK BACS Payment Files (l10n_uk_bacs)', does: 'Bacs files for supplier batch payments and customer direct debits.', agent: 'The agent can propose a payment batch. A person validates it.' },
  { module: 'UK Construction Industry Scheme (l10n_uk_reports_cis)', does: 'Sends the CIS monthly return to HMRC and adds a CIS deduction report.', agent: 'The agent reads subcontractor invoices into draft bills.' },
  { module: 'UK HMRC API (l10n_uk_hmrc)', does: 'The HMRC basics the other modules use.', agent: 'No change. The agent never holds HMRC credentials.' },
];

/* Jobs. One card each. */
const JOBS: { n: string; t: string; b: string; items: string[]; sources: SrcKey[] }[] = [
  {
    n: '01',
    t: 'Trade orders that arrive by email',
    b: 'Retailers, contractors and distributors send purchase orders as PDFs, spreadsheets or a typed list. The agent turns each one into a draft quotation in Odoo.',
    items: [
      'Finds the customer account, the delivery address and each product code',
      'Checks the price against that customer’s pricelist and flags any difference',
      'Applies the UK tax set on the product, so VAT is right before anyone confirms',
      'Leaves the original document on the draft for the person who confirms it',
    ],
    sources: ['odooAgents', 'odooApi'],
  },
  {
    n: '02',
    t: 'Supplier bills Odoo could not read cleanly',
    b: 'Odoo already reads emailed bills with OCR. The agent takes what is left: bills with no purchase order, credit notes, and suppliers who invoice in euros.',
    items: [
      'Matches the bill to its purchase order and goods receipt',
      'Suggests the account and VAT code from how your team coded that supplier before',
      'Puts every bill it could not match at the top of the batch, with the reason',
    ],
    sources: ['odooBills', 'govNotice'],
  },
  {
    n: '03',
    t: 'Marketplace order exceptions',
    b: 'Amazon.co.uk orders can flow in through Odoo’s Amazon Connector. eBay UK, OnBuy, ManoMano and the B&Q marketplace need a module or a custom link. The agent handles what fails on the way in.',
    items: [
      'Holds orders with an unknown SKU or a price outside your rules',
      'Drafts the fix for a person: the right product, or a note to the channel team',
    ],
    sources: ['odooAmazon'],
  },
  {
    n: '04',
    t: 'Courier and stock questions',
    b: 'Staff and customers ask where an order is or whether a line is in stock. The agent looks the answer up in Odoo as it stands and edits nothing.',
    items: [
      'A read-only Odoo user, so a wrong answer can never become a wrong record',
      'Royal Mail, DPD and Evri tracking reached through a shipping module or a custom link',
      'Hands the question to a person, with the order already found, when it needs a decision',
    ],
    sources: ['odooShippers', 'odooMcpTools'],
  },
  {
    n: '05',
    t: 'Odoo beside Xero, Sage or Linnworks',
    b: 'Some UK firms run Odoo for stock and orders while the books stay in Xero or Sage, or Linnworks runs the channels. The agent keeps the two sides in step.',
    items: [
      'One owner named for each number: stock, price, customer, ledger',
      'Mismatches listed for a person each morning, never fixed silently',
      'Payments from Stripe or GoCardless matched to the right invoice',
    ],
    sources: ['appsXero', 'appsLinnworks', 'appsGoCardless', 'odooPayments'],
  },
  {
    n: '06',
    t: 'Subcontractor invoices for CIS',
    b: 'Construction firms on Odoo receive subcontractor invoices in every format. The agent reads each one into a draft bill for the CIS module to work from.',
    items: [
      'Finds the subcontractor record and the job',
      'Flags an invoice whose subcontractor set-up looks wrong, before the bill is posted',
    ],
    sources: ['odooUk'],
  },
];

/* Three routes to an AI agent in Odoo. Cells restate Odoo's own pages. */
const ROUTES: { feat: string; app: string; mcp: string; custom: string }[] = [
  { feat: 'Where it lives', app: 'Inside Odoo, in the AI app', mcp: 'In an AI tool on someone’s computer, such as Claude Code or Codex, talking to your database', custom: 'On a server you own, connected to Odoo through the JSON-2 API' },
  { feat: 'What starts it', app: 'A chat, a record or an Odoo automation', mcp: 'A person typing a request', custom: 'Whatever arrives: an inbox, a marketplace, a courier update' },
  { feat: 'How it is paid for', app: 'Odoo AI credits, bought in Odoo', mcp: 'The AI tool’s own plan, plus your Odoo plan', custom: 'A fixed build price, quoted in writing' },
  { feat: 'Writes to Odoo', app: 'Through the Create Records and Update Records skills', mcp: 'Only after someone exposes the write tools in Odoo’s settings', custom: 'Drafts only, through a bot user with narrow access' },
  { feat: 'UK VAT and MTD', app: 'Uses your UK localisation as it stands', mcp: 'Uses your UK localisation as it stands', custom: 'Uses your UK localisation, with tax mapping signed off by your accountant' },
  { feat: 'Good fit when', app: 'The job starts and ends inside Odoo', mcp: 'One person wants to ask Odoo questions from their own AI tool', custom: 'The work starts outside Odoo, crosses two systems, or follows rules of your own' },
];

/* Process. Seven steps, in the order we work. */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Read your Odoo', d: 'Version, hosting, plan, installed apps and the UK modules in use. Each database lists its own models on its /doc page, so we read yours before promising anything.' },
  { n: '02', t: 'Check what Odoo already does', d: 'Bill reading, the UK localisation, Amazon Connector, Sendcloud. If a built-in feature covers the job, we tell you to switch it on and stop there.' },
  { n: '03', t: 'Pick one job and agree its rules', d: 'One task, such as trade orders from email. Your team’s rules for it go on paper, with the VAT mapping signed off by your accountant and a named person who confirms each draft.' },
  { n: '04', t: 'Try it on last month’s paperwork', d: 'Before a contract, three or four orders or bills your team has already posted go through a first version. You hold its drafts up against the real entries, line by line and VAT code by VAT code.' },
  { n: '05', t: 'Work away from live', d: 'All building happens on a copy of your database that is never connected to HMRC. We test the UK taxes there, and the CIS set-up if you use it. The agent signs in as a bot user whose API key has a fixed end date.' },
  { n: '06', t: 'A parallel run your accountant signs off', d: 'For an agreed number of weeks your team posts as usual while the agent drafts the same documents, and we go through every mismatch together. Go-live waits until your accountant has signed off the VAT on those drafts.' },
  { n: '07', t: 'Launch, then stay on if you want us', d: 'Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, with each change quoted and approved first.' },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Odoo AI Agents UK',
      serviceType: 'Odoo AI agent design, build and support for UK businesses: trade order intake, supplier bill drafting, marketplace order exceptions, stock and courier answers, Odoo alongside Xero, Sage and Linnworks',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds, tests and supports AI agents for UK businesses that run Odoo 19 or Odoo 20 with the UK localisation. Agents read trade orders, supplier invoices and marketplace orders, and save drafts in Odoo for a named person to confirm. UK VAT taxes, Making Tax Digital submission and CIS returns stay in Odoo’s own UK modules and with the client’s accountant.',
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agents for UK companies on Odoo: trade orders, supplier bills and marketplace exceptions drafted in Odoo for a person to confirm. UK localisation, VAT and HMRC submission left where they are.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-agents-og.webp', width: 1200, height: 630, alt: 'FactoryJet builds AI agents for UK businesses' }],
  },
  robots: { index: true, follow: true },
};

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

export default function OdooAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-odoo-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Odoo AI Agents UK</span>
                  <span className="chip">Odoo 19 and 20</span>
                  <span className="chip">UK VAT, MTD, CIS</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  You run Odoo with the UK localisation. Trade orders still arrive as PDFs, supplier bills pile
                  up in an inbox, Amazon.co.uk and eBay UK orders need checking, and the books may sit in Xero or
                  Sage. FactoryJet designs, builds and supports AI agents that read that work and save drafts in
                  Odoo. A named person confirms each one, and your VAT return goes to HMRC exactly as it does now.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_odoo_ai_agents_hero" service="Odoo AI Agents" submitLabel="See a demo on my data" />
                </div>

              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/trade-counter-order.webp`} width={1200} height={800} fetchPriority="high" decoding="async" alt="At a wooden trade counter a man in a dark green work shirt passes a plain cardboard box to a woman in a mustard jacket, with stocked shelves behind him" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What changes, and what stays</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Trade orders and supplier bills</div><div className="scorecard-note">read by the agent, saved as drafts</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Drafted</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Each draft confirmed</div><div className="scorecard-note">by a named person in your team</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Approved</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">UK taxes and the VAT return</div><div className="scorecard-note">Odoo’s UK modules, your accountant</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Unchanged</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Working software on your data</div><div className="scorecard-note">before any contract</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>First</div>
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
              <span className="lab">What does an Odoo AI agent do for a UK business?</span>
              <p>
                It reads work that arrives outside Odoo, such as an emailed trade order or a supplier invoice, and
                saves a draft in Odoo using your products, prices and UK taxes. A person confirms each draft. Odoo
                20 ships agents of its own, paid for in Odoo AI credits. A custom agent connects through Odoo’s API
                on the Custom plan and follows rules written for your business.
              </p>
            </div>
            <Sources ids={['odooAgents', 'odooRelease20', 'odooApi']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                The <b>UK localisation</b> is the set of Odoo modules that add the UK chart of accounts, UK taxes
                and the link to HMRC. <b>Making Tax Digital</b>, or MTD, is HMRC’s rule that VAT records are kept
                in software and returns are sent from it. A <b>bot user</b> is an Odoo login made only for the
                agent, with the least access its job needs.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              On a working UK Odoo set-up the tax side is usually settled: the localisation holds the taxes and
              sends the return. The gap sits earlier, in the orders and bills someone retypes from email into
              Odoo. That retyping is the work an agent takes on, and it is where a wrong VAT code costs the most
              to unpick at quarter end.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: 'Custom', t: 'is the only Odoo plan where outside software can reach your data through the API', s: 'Odoo docs, External JSON-2 API', u: SRC.odooApi.url },
                { v: '3 months', t: 'is the longest an Odoo API key can last, so an agent’s key is renewed on a timetable', s: 'Odoo docs, External JSON-2 API', u: SRC.odooApi.url },
                { v: '3 months', t: 'late is the point after which Odoo can no longer send a VAT return to HMRC', s: 'Odoo docs, UK localisation', u: SRC.odooUk.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHAT THE UK LOCALISATION ALREADY DOES */}
        <section className="sec-lg dot-grid" id="uk-localisation">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Start with what Odoo ships</span>
              <h2>What Odoo’s UK localisation already does, and where an agent fits around it</h2>
              <p className="lead mt-4">
                Odoo’s UK modules handle the tax side: the chart of accounts, UK taxes, the VAT return to HMRC, Bacs
                files and CIS. None of that needs an agent. What the modules do not do is read a supplier’s PDF or
                a customer’s spreadsheet. That reading is where the agent works, and it hands everything to the
                UK modules in the form they expect.
              </p>
            </div>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Odoo UK modules and the agent" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Odoo UK module</th>
                    <th>What Odoo says it does</th>
                    <th className="fj">Where the agent stands</th>
                  </tr>
                </thead>
                <tbody>
                  {UK_MODULES.map((m) => (
                    <tr key={m.module}>
                      <td className="feat">{m.module}</td>
                      <td>{m.does}</td>
                      <td className="fj">{m.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>Only UK companies submit</h3><p className="mt-4">Odoo’s UK page says only UK-based companies can submit reports to HMRC. A group with a non-UK parent in the same database plans around that.</p></li>
              <li className="card"><h3>One HMRC login at a time</h3><p className="mt-4">One company and one user can be connected to HMRC at once. Several UK entities in one database means resetting the connection before each filing.</p></li>
              <li className="card"><h3>Late returns leave Odoo</h3><p className="mt-4">Odoo only fetches open obligations from the last three months. A return later than that is filed by contacting HMRC directly.</p></li>
            </ul>
            <Sources ids={['odooUk']} />
          </div>
        </section>

        {/* 5. VAT AND MTD */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">VAT and Making Tax Digital</span>
                <h2>How an agent keeps UK VAT records clean instead of creating a second set</h2>
                <div className="stack mt-6">
                  <p>
                    Once a figure is inside Odoo, HMRC’s VAT Notice 700/22 says every later move of it between
                    programs must be by digital link. That is the rule an agent has to respect. GOV.UK adds that
                    some VAT records must be kept digitally, and it keeps a list of software that can send VAT
                    returns under Making Tax Digital.
                  </p>
                  <p>
                    Copy and paste fails the notice’s test. Exporting and importing a CSV passes, and so does
                    sending data over an API. The API is how an agent saves a draft bill in Odoo, so a supplier
                    invoice someone retypes today would reach Odoo by an accepted link instead.
                  </p>
                  <p>
                    The tax itself comes from Odoo. GOV.UK lists three rates: 20% standard, 5% reduced and 0% zero.
                    The UK localisation creates the matching taxes. The agent picks among those taxes and shows its
                    reasoning on the draft, and your accountant signs off the mapping before go-live.
                  </p>
                </div>
                <Sources ids={['govMtdSoftware', 'govVatRecords', 'govNotice', 'govVatRates', 'odooUk']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Who does what at VAT time</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Who does what at VAT time"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">Read orders and bills</div><div className="scorecard-note">from email, PDF or spreadsheet</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Agent</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Suggest the VAT code</div><div className="scorecard-note">from Odoo’s UK taxes only</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Agent</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Confirm each draft</div><div className="scorecard-note">a named person, inside Odoo</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Your team</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Decide the tax mapping</div><div className="scorecard-note">signed off before launch</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Accountant</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Send the return to HMRC</div><div className="scorecard-note">Send to HMRC, in Odoo</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accountant</div></td></tr></tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. JOBS */}
        <section className="sec-lg dot-grid" id="jobs">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The work</span>
              <h2>Six jobs UK firms on Odoo give an AI agent first</h2>
              <p className="lead mt-4">
                Each one starts with something that arrives from outside Odoo and ends with a draft a person
                confirms. Pick one to begin with. A second job can follow once the first has run beside your team
                and its drafts match what people would have posted.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {JOBS.map((j) => (
                <li key={j.n} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{j.t}</h3>
                    <span className="plat-pill">{j.n}</span>
                  </div>
                  <p style={{ fontSize: 14, color: T.ink }}>{j.b}</p>
                  <ul className="scope-list yes-list mt-4">
                    {j.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <Sources ids={j.sources} />
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              Counts we found on {READ_ON}: Odoo’s own shipping page lists DHL Express, FedEx, UPS and Sendcloud
              among its connectors, with no Royal Mail, DPD or Evri. The Odoo Apps Store returned 57 apps for
              Xero, 17 for Royal Mail, 18 for GoCardless and 1 for Linnworks. None of them can be installed on Odoo
              Online, so there the link runs outside Odoo.
            </p>
            <Sources ids={['odooShippers', 'appsXero', 'appsRoyalMail', 'appsGoCardless', 'appsLinnworks', 'odooOnline']} />
          </div>
        </section>

        <MidPageCTA
          headline={'Send one trade order and two supplier invoices. We show you the drafts.'}
          sub={'Tell us your Odoo version, hosting and plan, and which UK systems sit beside it. On a short call we say whether Odoo’s own AI covers the job or a custom agent is the better route, and we run your documents through a first version before you sign anything.'}
          label={'See a demo on my data'}
        />

        {/* 7. THREE ROUTES */}
        <section className="sec-lg" id="routes">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Three routes</span>
              <h2>Odoo’s AI app, its MCP server, or a custom agent: which suits a UK firm</h2>
              <p className="lead mt-4">
                All three use the same UK localisation underneath. They differ in where the agent lives and
                who answers for it when something goes wrong.
              </p>
            </div>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Three routes to an AI agent in Odoo" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 900 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Odoo’s AI app</th>
                    <th>Odoo’s MCP server</th>
                    <th className="fj">Custom agent built by FactoryJet</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTES.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.app}</td>
                      <td>{r.mcp}</td>
                      <td className="fj">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              One warning from Odoo’s own pages if you build on its AI server actions: Odoo says the server action
              does not enforce business rules, and a tool it calls runs unconditionally unless the tool’s code
              prevents it. Credit limits, margin floors and VAT checks belong in that code.
            </p>
            <Sources ids={['odooAgents', 'odooMcp', 'odooMcpTools', 'odooServerActions', 'odooIap', 'odooApi']} />
          </div>
        </section>

        {/* 8. CONTROLS AND UK RULES */}
        <section className="sec-lg dot-grid" id="controls">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Controls</span>
                <h2>How the agent is kept in its lane: Odoo access rights, UK GDPR and the EU AI Act</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>Its own bot user.</b> Odoo’s API page recommends a dedicated bot for integrations, with the minimum permissions and an empty password so nobody can log in as it.</li>
                  <li><b>Every call checked.</b> Odoo validates each API call against the access rights, record rules and field access of that user. If the bot cannot see payroll, the agent cannot either.</li>
                  <li><b>A key that runs out.</b> Odoo will not create an API key that lasts more than three months, so renewal is scheduled from the first week.</li>
                  <li><b>Drafts, never postings.</b> Quotations, bills and payment batches are saved as drafts. Confirming stays with a person.</li>
                  <li><b>A trail you can read.</b> Odoo’s access log records the bot account, so you can list everything the agent drafted last month.</li>
                </ul>
                <Sources ids={['odooApi']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK and EU rules worth a line in the brief</span>
                <div className="stack mt-4">
                  <p style={{ fontSize: 14 }}>
                    <b>UK GDPR.</b> The ICO publishes guidance on applying UK GDPR to AI systems and an AI and data
                    protection risk toolkit. We work through it with your data protection lead before launch.
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <b>Data (Use and Access) Act 2025.</b> GOV.UK says it received Royal Assent on 19 June 2025, and
                    most of the data protection changes in Part 5 have been in force since 5 February 2026.
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <b>EU AI Act.</b> For UK firms selling into the EU, the European Commission says the transparency
                    rules apply from August 2026, and people using a chatbot should be told it is a machine. Rules
                    for high-risk areas such as employment apply from 2 December 2027.
                  </p>
                </div>
                <Sources ids={['icoAi', 'govDuaa', 'euAiAct']} />
              </div>
            </div>
          </div>
        </section>

        {/* 9. WORK WE CAN SHOW (the only block that names clients) */}
        <section className="sec-lg" id="work">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Work we can show</span>
              <h2>UK trade and wholesale work, on Odoo and beside it</h2>
            </div>
            <ul className="col-2 mt-10">
              <li className="plat-card">
                <div className="plat-top">
                  <h3 className="plat-name">Sow Easy</h3>
                  <span className="plat-pill">WooCommerce and Odoo</span>
                </div>
                <p style={{ fontSize: 14 }}>
                  A UK wholesale distributor. We are building its WooCommerce trade store on WordPress, joined to
                  Odoo, with Odoo kept as the source of stock, pricing and SKUs. The Odoo link is being tested
                  against Odoo staging, and the store has not launched yet.
                </p>
                <p className="plat-best"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
              <li className="plat-card">
                <div className="plat-top">
                  <h3 className="plat-name">GPSUK</h3>
                  <span className="plat-pill">Commerceflo</span>
                </div>
                <p style={{ fontSize: 14 }}>
                  A UK supplier of branded promotional products to business buyers. Its trade storefront is built on
                  Commerceflo, where buyers log in, see their own account prices and reorder. This one is not an
                  Odoo project. It shows the trade ordering side of the same problem.
                </p>
                <p className="plat-best"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
            </ul>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              Odoo is one of several ERPs we build agents for, and our{' '}
              <a href="/services/erp-ai-agents" style={inlineLink}>ERP AI agents</a> page covers the others. Our{' '}
              <a href="/services/odoo-ai-agents" style={inlineLink}>Odoo AI agent development</a> page goes deeper on
              Odoo 19 and 20 themselves.
            </p>
          </div>
        </section>

        {/* 10. TERMS AND BRIEF */}
        <section className="sec-lg dot-grid" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How the work is agreed</span>
                <h2>Terms, in the order you will meet them</h2>
                <ul className="scope-list yes-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>A demo before you sign.</b> Working software on your own Odoo data before any contract.</li>
                  <li><b>A fixed price for each phase.</b> Every phase is scoped, priced and signed on its own, so you can stop after the first.</li>
                  <li><b>You own it from day one.</b> The code and the repository are yours.</li>
                  <li><b>Your accounts, at cost.</b> The AI and hosting can run in your own accounts at cost, with no markup.</li>
                  <li><b>Defects covered.</b> Fixed inside the build price for a cover period agreed before work starts.</li>
                  <li><b>Support if you want it.</b> Optional. Each change is quoted and approved, with no monthly minimum. We can keep managing the servers, AI models, API connections and upkeep for you.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Send a brief or an RFP</span>
                <p style={{ fontSize: 14, marginTop: 8 }}>
                  If you are running a tender, send the RFP as it stands. Otherwise a one-page brief covering these
                  six points gets you a fixed price for the first phase.
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">Odoo version, hosting and plan</div><div className="scorecard-note">Online, Odoo.sh or your own server</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">UK modules in use</div><div className="scorecard-note">MTD, Bacs, CIS, multi-company</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The first job</div><div className="scorecard-note">and how many documents a week</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Systems beside Odoo</div><div className="scorecard-note">Xero, Sage, Linnworks, Mintsoft, marketplaces</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who confirms the drafts</div><div className="scorecard-note">by role, not by name</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>5</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Two or three sample documents</div><div className="scorecard-note">with personal data removed if you prefer</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>6</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>How we build an Odoo AI agent for a UK business, in seven steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Your accountant joins at step three, for the VAT mapping. Your Odoo administrator joins at step
                  five, for the bot user and the test copy.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/planning-wall-notes.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="Two colleagues seen from behind stand at a wall of blank yellow paper notes while one of them points to a single orange note" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step three in practice: every rule a person follows today goes on the wall, and the one that
                    matters most for VAT gets marked before anything is built.
                  </p>
                </div>
              </div>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How we build an Odoo AI agent, in seven steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol></figure>
          </div>
        </section>

        {/* 12. WHO IT IS FOR */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who this is for</span>
              <h2>Odoo AI agents for UK wholesalers, manufacturers, contractors and multi-channel sellers</h2>
              <p className="lead mt-4">
                Established companies with Odoo in place and a team that confirms orders and bills every day.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Who this is for"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="svc-card"><th><h3>Wholesale and distribution</h3></th><td><p className="mt-4">Retail and trade customers email purchase orders all day. Each becomes a draft quotation at that account’s prices.</p></td></tr><tr className="svc-card"><th><h3>Manufacturers</h3></th><td><p className="mt-4">Supplier bills for materials and carriage arrive in every format. The agent matches them to purchase orders and receipts.</p></td></tr><tr className="svc-card"><th><h3>Construction contractors</h3></th><td><p className="mt-4">Subcontractor invoices drafted into bills for Odoo’s CIS module, checked before the monthly return.</p></td></tr><tr className="svc-card"><th><h3>Multi-channel sellers</h3></th><td><p className="mt-4">Amazon.co.uk, eBay UK, OnBuy and your own store, with order exceptions held for a person instead of failing quietly.</p></td></tr></tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              Related UK pages: <a href="/uk/ai-agents" style={inlineLink}>AI agent development in the UK</a>,{' '}
              <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation</a> for supplier
              bills, <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a> if your books
              stay in Xero, <a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a>,{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a> for trade ordering, and{' '}
              <a href="/uk/ai-consulting" style={inlineLink}>AI consulting</a> if you are still choosing the first job.
            </p>
          </div>
        </section>

        {/* 13. SOURCES */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every Odoo feature, plan limit, app count, tax rule, legal date and price range on this page was read
                on the pages below that day. Odoo changes with each version and HMRC sets its own rules, so open
                the linked page before acting on a detail.
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

        {/* 14. FAQ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Odoo AI agent questions from UK finance and operations teams</h2>
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
                  <p>Bhavesh replies within one business day.</p>
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

        {/* 15. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>See your own Odoo orders and bills drafted before you sign</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to set up a short call about
              your Odoo, your UK set-up and the first job. You leave knowing whether Odoo’s own AI covers it or a
              custom agent is the better route.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
