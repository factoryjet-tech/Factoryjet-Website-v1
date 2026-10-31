import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/erp-ai-agents, built 2026-10-29. Australian version of
   /services/erp-ai-agents, angled at AI agents inside Xero, MYOB, NetSuite and
   Odoo. Structure mirrors /au/ai-agents and /au/shopify-development.

   Overlap check 2026-10-29: no other /au/ route owns ERP AI agents.
   /au/accounts-payable-automation covers one job (supplier invoices) and is
   linked from here; /au/ai-agents is the broad AI agent page.

   Australian search demand, DataForSEO, location 2036, read 2026-10-29
   (monthly): "myob acumatica" 1,300, "xero api" 1,000, "xero mcp" 390,
   "myob api" 320, "ai accounting software" 210, "erp systems australia" 210,
   "xero ai" 170, "xero jax" 140, "ai bookkeeping" 110, "odoo ai" 90,
   "erp ai" / "ai for erp" 90, "xero integration" 90, "myob ai" 70,
   "netsuite australia" 70, "netsuite ai" 50. An AI Overview showed on all 8
   SERPs pulled. FAQ questions come from the People Also Ask boxes on those
   SERPs (xero ai, xero mcp, erp ai, netsuite ai, erp systems australia).

   Truth rules for anyone editing this file:
   - Every platform, law and price fact links to a page fetched and read on
     2026-10-29 (SRC map below). Re-fetch before changing one.
   - No Australian client is named or implied. Sow Easy (WooCommerce + Odoo,
     launch still ahead) and the two unnamed QuickBooks projects (in progress)
     appear once, in the WORK block, framed as work on the same platforms, not
     as Australian work and not as finished work.
   - No FactoryJet prices. The only figures are Flowtivity's AUD build ranges,
     whose guide does not say whether GST is included; the page says so.
   - No running, hosting, model or support cost figures (Bhavesh, 11 Oct 2026).
   - FAQPage JSON-LD is generated from FAQ_ITEMS, the same array <AuFaq>
     renders. There is no second FAQ list in this file.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/erp-ai-agents';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'ERP AI Agents Australia | Xero, MYOB, NetSuite, Odoo';
const H1 = 'AI Agents for ERP in Australia: Inside Xero, MYOB, NetSuite and Odoo';
const DESCRIPTION =
  'AI agents inside Xero, MYOB, NetSuite and Odoo for Australian businesses. They draft orders, bills and POs for your team to approve. You own the code.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'ERP AI Agents', url: CANONICAL },
];

/* ─── External sources, each fetched and read 2026-10-29 ─────────────────── */
// Xero media release, 27 March 2026: multi-year partnership with Anthropic,
// "Claude's AI directly into Xero"; JAX described as Xero's AI superagent;
// shared data used only for the session and not used to train Claude.
const SRC_XERO_ANTHROPIC = 'https://www.xero.com/au/media-releases/xero-and-anthropic-collaborate/';
// GitHub XeroAPI/xero-mcp-server README: "a Model Context Protocol (MCP) server
// implementation for Xero"; MIT licence; Custom Connection or Bearer Token
// auth; list, create and update tools incl. create-invoice and "Update an
// existing draft invoice"; payroll timesheet tools.
const SRC_XERO_MCP = 'https://github.com/XeroAPI/xero-mcp-server';
// MYOB developer, Business API v2: "Both AccountRight, Essentials and MYOB
// Business integrate with the API"; "MYOB Business will replace our MYOB
// Essentials and MYOB AccountRight product lines for new customers in Australia."
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/v2/';
// MYOB Acumatica product page: cloud ERP, formerly MYOB Advanced, "The cloud
// ERP of choice for mid-sized businesses".
const SRC_MYOB_ACUMATICA = 'https://www.myob.com/au/erp-software/products/myob-acumatica';
// Oracle NetSuite Help Center: NetSuite "has adopted the Model Context Protocol
// (MCP)"; MCP Standard Tools SuiteApp; you can build your own tools.
const SRC_NS_CONNECTOR = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html';
// Oracle: required features Server SuiteScript and OAuth 2.0; role permission
// MCP Server Connection; REST Web Services for the standard tools; cannot run
// under the Administrator role or full-permission roles.
const SRC_NS_PERMS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0714080625.html';
// Oracle FAQ: "not a paid feature"; MCP Standard Tools is "a free SuiteApp";
// Claude Pro and ChatGPT currently supported; may need a paid AI client plan.
const SRC_NS_FAQ = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4160616848.html';
// Odoo 19 External JSON-2 API: /json/2/<model>/<method>, bearer API key;
// "Access to data via the external API is only available on Custom Odoo
// pricing plans"; XML-RPC and JSON-RPC "scheduled for removal in Odoo 22
// (fall 2028) / Odoo Online 21.1 (winter 2027)".
const SRC_ODOO_API = 'https://www.odoo.com/documentation/19.0/developer/reference/external_api.html';
// Odoo 19 AI agents: "a smart assistant in Odoo that can understand natural
// language, perform tasks"; built from Topics and Sources; agents need the AI app.
const SRC_ODOO_AGENTS = 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html';
// business.gov.au eInvoicing: Peppol "is a common standard in Australia";
// eInvoices delivered by ATO approved service providers; ATO administers the
// network but cannot view invoices; software choice does not matter.
const SRC_EINVOICING = 'https://business.gov.au/finance/payments-and-invoicing/e-invoicing';
// OAIC, AI products guidance: obligations apply to personal information input
// into AI and to output; do not enter personal information into publicly
// available generative AI tools; due diligence is not "set and forget".
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC APP guidelines ch.1, para 1.35: "From 10 December 2026, APP 1.7 requires
// APP entities to include the information outlined in APP 1.8" for computer
// programs that use personal information in decisions that could significantly
// affect an individual's rights or interests.
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// Flowtivity, AI agent cost pricing guide Australia, 5 March 2026: multi-system
// workflow automation $20,000 to $50,000+ (6 to 12 weeks); customer service
// automation $10,000 to $25,000 (4 to 8 weeks); full implementation $15,000 to
// $50,000+. "figures are in AUD". GST basis not stated.
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
// Read 2026-10-31. Dext AU home page: "intelligent bookkeeping automation
// platform" that captures receipts, invoices and expenses; integrates with
// QuickBooks Online, Xero, Sage, Zoho and more.
const SRC_DEXT = 'https://dext.com/au';
// Hubdoc home page: document capture; "Works with" Xero, QuickBooks Online;
// creates transactions in Xero and QuickBooks Online with the source attached.
const SRC_HUBDOC = 'https://www.hubdoc.com/';
// ApprovalMax home page: "The approval engine behind your AP process";
// integrates with Xero, QuickBooks Online and NetSuite.
const SRC_APPROVALMAX = 'https://www.approvalmax.com/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'ERP AI agents, the basics' },
  { key: 'systems', label: 'Xero, MYOB, NetSuite and Odoo' },
  { key: 'rules',   label: 'Privacy, GST and eInvoicing' },
  { key: 'working', label: 'Cost, timing and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is an ERP AI agent?',
    answer: 'It is software we build to work inside Xero, MYOB, NetSuite or Odoo. Something lands in an inbox, say a trade customer’s purchase order or a supplier bill. The agent pulls out the lines, checks them against your customers, prices and stock, and leaves a draft record waiting. Someone on your team reviews that draft. Nothing is confirmed or posted until they say yes.' },
  { category: 'basics', question: 'Is AI replacing ERP systems?',
    answer: 'No. The makers are building AI into their own systems instead. Xero announced a partnership with Anthropic in March 2026 to bring Claude into Xero. Oracle has opened NetSuite to outside AI clients through MCP. Odoo 19 ships its own AI agents. Every agent we build reads its facts from your ERP and writes its drafts back there, so the ERP becomes more central, if anything.',
    links: [{ href: SRC_XERO_ANTHROPIC, label: 'Xero media release, 27 March 2026' }] },
  { category: 'basics', question: 'What is the best AI for ERP?',
    answer: 'Start with what your system already supports, then pick a model for the job. For NetSuite, Oracle names Claude Pro and ChatGPT as clients that work with its AI Connector Service today. Xero is partnering with Anthropic, the maker of Claude. For a custom agent we choose the model with you, based on the task, how messy the documents are and where your data is allowed to go.' },
  { category: 'basics', question: 'Can AI bookkeeping or ChatGPT do my books?',
    answer: 'A chatbot on its own should not run your books. AI bookkeeping that works is narrower. A custom agent can take the repetitive layer: lining up Stripe or Afterpay payouts against orders, finding the purchase order behind each supplier bill, and proposing a GST code from your past coding. The result is a queue of drafts for your bookkeeper, who still approves every line and still owns the BAS.' },
  { category: 'basics', question: 'Is it safe to put bank statements into ChatGPT?',
    answer: 'Not into a free, public chatbot. A bank statement names the people and businesses you pay and are paid by, and the OAIC’s AI guidance tells organisations to keep personal information out of publicly available generative AI tools. A custom agent is different: it runs under business terms, sees only the fields its job needs, signs in with its own limited login and logs every lookup. Bank data then stays inside a setup you control.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC guidance on AI products' }] },
  { category: 'basics', question: 'Is Xero an ERP?',
    answer: 'Xero is accounting software, and many Australian businesses run it as the centre of a wider stack: Cin7 Core or Unleashed for inventory, Shopify or a marketplace for sales, a payroll app alongside. Together those behave like an ERP. An AI agent works well across that kind of stack, because most of the slow work is copying data between the pieces. When the stack outgrows Xero, MYOB Acumatica, NetSuite and Odoo are the usual next steps.' },

  // ── Systems ──
  { category: 'systems', question: 'Can ChatGPT or Claude integrate with Xero?',
    answer: 'Yes, through the Xero API and Xero’s own MCP server. Xero publishes the MCP server on GitHub under the MIT licence, and the README lists tools to list contacts, invoices and bank transactions, create invoices and quotes, and update draft invoices. Any MCP-capable AI client can use it. We use the same route for custom agents, with OAuth scopes (the list of record types a login is allowed to touch) limited to the records the job needs. Payroll and Single Touch Payroll reporting stay in your payroll app.',
    links: [{ href: SRC_XERO_MCP, label: 'Xero MCP server on GitHub' }] },
  { category: 'systems', question: 'What is the Xero MCP server?',
    answer: 'MCP, the Model Context Protocol, is an open standard for connecting AI applications to outside systems. Xero’s MCP server is its implementation for Xero, published on GitHub. It signs in either with a Custom Connection, where you set a client ID and secret, or with a bearer token (a temporary access key passed with each request) for working across several Xero organisations. Its tools cover reading, creating and updating accounting records, so the permissions you grant matter.' },
  { category: 'systems', question: 'What is Xero AI (JAX), and how is a custom agent different?',
    answer: 'JAX is the name Xero gives its own AI. In its March 2026 release Xero called JAX its AI superagent and said it would handle tasks such as predicting cash flow gaps and identifying unpaid invoices. JAX works inside Xero. A custom agent is for jobs that cross systems, such as turning an emailed purchase order into a Cin7 sales order and a Xero invoice, with your own approval rules.' },
  { category: 'systems', question: 'Can an AI agent work with MYOB?',
    answer: 'Yes, through the MYOB API. One Business API covers AccountRight, Essentials and MYOB Business, per MYOB’s developer pages, and new Australian customers are now put on MYOB Business rather than the older two. An agent can read and draft records there under its own access. For mid-sized businesses on MYOB Acumatica, MYOB’s cloud ERP formerly called MYOB Advanced, we confirm the connection your edition allows during scoping.',
    links: [{ href: SRC_MYOB_API, label: 'MYOB Business API documentation' }] },
  { category: 'systems', question: 'Does NetSuite have AI?',
    answer: 'Yes. NetSuite now speaks the Model Context Protocol, according to Oracle’s help centre, and ships a SuiteApp (an add-on installed inside NetSuite) called MCP Standard Tools for working with your NetSuite data, with the option to build your own tools. Oracle does not charge for the connector or that SuiteApp, per its FAQ; the cost sits with your AI client subscription, if any. We build custom tools on top when a job needs rules the standard set lacks.',
    links: [{ href: SRC_NS_FAQ, label: 'Oracle: NetSuite AI Connector Service FAQ' }] },
  { category: 'systems', question: 'How do I connect an AI agent to NetSuite?',
    answer: 'Switch on what Oracle lists: two features, Server SuiteScript (NetSuite’s own scripting) and OAuth 2.0 (a standard sign-in method for apps), plus the MCP Server Connection permission on the role the agent uses. The standard tools also need REST Web Services (NetSuite’s web API) if the agent creates or updates records. Oracle blocks the connection for Administrator and for roles with full permissions, which forces a narrower role. We set up a dedicated role with only the record types the job touches.',
    links: [{ href: SRC_NS_PERMS, label: 'Oracle: required features and permissions' }] },
  { category: 'systems', question: 'Does Odoo have AI agents?',
    answer: 'Yes, in Odoo 19. Odoo’s documentation calls an agent a smart assistant that understands natural language and performs tasks, built from topics, which hold its instructions and tools, and sources, which hold its reference material. Creating agents needs the AI app installed. For agents that live outside Odoo, check your plan first: Odoo says its external API is only available on Custom pricing plans.',
    links: [{ href: SRC_ODOO_AGENTS, label: 'Odoo 19 documentation: AI agents' }] },
  { category: 'systems', question: 'We have an old Odoo integration. Will it keep working?',
    answer: 'Check which API it uses. Odoo’s developer docs give the XML-RPC and JSON-RPC endpoints (the two older ways programs talk to Odoo) an end date: Odoo Online 21.1 in 2027, then Odoo 22 in 2028. Anything new should use the External JSON-2 API, which takes a bearer API key. If your current connector uses the old endpoints, we can move it across while building the agent.',
    links: [{ href: SRC_ODOO_API, label: 'Odoo 19: External JSON-2 API' }] },
  { category: 'systems', question: 'Can an AI agent work with Cin7 or Unleashed?',
    answer: 'Yes. Many Australian wholesalers keep stock in Cin7 Core, formerly DEAR, or Unleashed, with Xero or MYOB holding the books. Some run QuickBooks Online instead. An agent often sits between them, turning an order into a sales order in the inventory system and an invoice in the accounts. We check which connection each system offers on your plan before quoting.' },

  // ── Rules ──
  { category: 'rules', question: 'Does the Privacy Act apply to an ERP AI agent?',
    answer: 'Yes, if your business is covered by the Privacy Act 1988 and the agent handles personal information. Customer names and delivery addresses on a sales order are personal information, and the OAIC’s guidance says your obligations follow that data into the AI and into the drafts it writes back. We map which fields each agent sees before building, and keep everything else out of its reach.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC guidance on AI products' }] },
  { category: 'rules', question: 'Is a credit-limit agent covered by the December 2026 privacy rules?',
    answer: 'They might. From 10 December 2026, APP 1.7 requires covered businesses to explain in their privacy policy when a computer program uses personal information to make, or substantially help make, a decision that could significantly affect someone’s rights or interests. An agent that drafts a sales order for approval is unlikely to be that. One that sets credit limits or refuses accounts might be. We document what each agent decides so your adviser can judge.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC APP guidelines, chapter 1' }] },
  { category: 'rules', question: 'Will the agent code GST and lodge our BAS?',
    answer: 'It will suggest GST codes, and it will not lodge anything. The agent proposes a tax rate on each draft bill or invoice from the supplier’s history and the tax rates set up in Xero or MYOB. A person approves the batch. Your BAS, and every conversation with the ATO, stays with your bookkeeper or registered agent. Payroll and Single Touch Payroll reporting stay in your payroll software, outside the agent’s role.' },
  { category: 'rules', question: 'Can the agent handle Peppol eInvoices?',
    answer: 'Yes, and they are easier than PDFs. Business.gov.au says Peppol is a common standard in Australia and that eInvoices are delivered through ATO-approved service providers to software connected to the Peppol network. Because the invoice arrives as data rather than as a page to read, the agent spends its effort on matching it to the purchase order and receipt, then drafting the bill for approval.',
    links: [{ href: SRC_EINVOICING, label: 'business.gov.au: eInvoicing' }] },

  // ── Working with us ──
  { category: 'working', question: 'How much does an ERP AI agent cost in Australia?',
    answer: 'Flowtivity’s March 2026 Australian guide puts multi-system workflow automation at A$20,000 to A$50,000 or more, and a full consultant-led implementation at A$15,000 to A$50,000 or more. The guide says its figures are in AUD and does not say whether GST is included. These are market ranges, not our prices. FactoryJet quotes a fixed price per phase in writing after a short scoping call.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity, Australian AI agent pricing guide (March 2026)' }] },
  { category: 'working', question: 'How long does it take to build an ERP AI agent?',
    answer: 'Flowtivity’s Australian guide gives 6 to 12 weeks for multi-system workflow automation, which is a fair guide for an agent that writes to two systems. One that only reads and answers is quicker. Access is often the slowest part: a sandbox or test file, a dedicated role for the agent, and a yes from the person responsible for the ERP. The timeline goes in writing with the quote.' },
  { category: 'working', question: 'Can we see it working before we sign?',
    answer: 'Yes, and we insist on it. You send a sample of last week’s emailed purchase orders or supplier bills. We run them through an early version of the agent and put its drafts next to what your team keyed in by hand. You decide from that comparison whether a build is worth paying for.' },
  { category: 'working', question: 'Can we send a brief or an RFP?',
    answer: 'Please do. A written brief gets a faster, firmer answer than a form. Name the systems and editions you run, the job you want the agent to take, roughly how many documents arrive each week, who approves today, and any deadline such as a financial year end or a system migration. We reply with questions, then a written scope and a fixed price per phase.' },
  { category: 'working', question: 'Who owns the agent, and what happens after launch?',
    answer: 'Your business does. The repository is yours from the first commit, along with the prompts and connection code. If you prefer, the model and hosting bills go straight to your own accounts, at cost and without any markup. Anything we got wrong is fixed within the build price during a cover period set before work starts. After that, support is your choice, priced per change, with no monthly minimum.' },
];

/* ─── Systems the agent works inside. Each restates the maker's page. ─── */
const SYSTEMS: { t: string; d: string; src?: { href: string; label: string } }[] = [
  { t: 'Xero', d: 'Through the Xero API and Xero’s own MCP server, published on GitHub, an agent can list, create and update accounting records, including draft invoices and quotes. Xero also announced a multi-year partnership with Anthropic on 27 March 2026. We build each Xero integration on those official connections and give the agent a role scoped to the job.', src: { href: SRC_XERO_MCP, label: 'Xero MCP server' } },
  { t: 'MYOB Business and AccountRight', d: 'Agents draft bills, invoices and sales orders through the MYOB API (MYOB Business API), and your team approves each one inside MYOB. The agent gets a login of its own, separate from any staff member’s.', src: { href: SRC_MYOB_API, label: 'MYOB Business API' } },
  { t: 'MYOB Acumatica', d: 'MYOB’s cloud ERP for mid-sized businesses, formerly MYOB Advanced, covering finance, stock and projects in one system. The edition and licence you hold decide the connection; we confirm it in scoping.', src: { href: SRC_MYOB_ACUMATICA, label: 'MYOB Acumatica' } },
  { t: 'NetSuite', d: 'Oracle has adopted the Model Context Protocol for NetSuite and ships MCP Standard Tools as a free SuiteApp. The role the agent signs in with sets what it can reach, so we design that role first, record type by record type.', src: { href: SRC_NS_FAQ, label: 'Oracle NetSuite AI Connector FAQ' } },
  { t: 'Odoo', d: 'Odoo 19 has its own AI agents, built from topics and sources. Outside agents use the External JSON-2 API, which Odoo says is only available on Custom pricing plans. The older RPC endpoints are due for removal in Odoo 22 and Odoo Online 21.1.', src: { href: SRC_ODOO_API, label: 'Odoo External JSON-2 API' } },
  { t: 'Cin7 Core, Unleashed, QuickBooks', d: 'The inventory and accounts tools many Australian wholesalers run beside Xero or MYOB. The agent usually sits between them, so one order becomes one sales order and one invoice without anyone retyping it.' },
];

/* ─── Six jobs, each drafted by the agent and approved by a person ─── */
const JOBS: { t: string; d: string }[] = [
  { t: 'Customer purchase orders into sales orders', d: 'Trade customers email purchase orders as PDFs, spreadsheets or a few lines in the message body. The agent finds the customer, the delivery address and each SKU in Cin7, NetSuite or Odoo, checks the price on the PO against your price list, and saves a draft sales order with the original attached. A price difference is flagged, never quietly accepted.' },
  { t: 'Marketplace orders and exceptions', d: 'Orders from Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC usually arrive through a connector. The agent watches what the connector cannot handle: a SKU that does not map, a bundle, an address that fails validation. It drafts the fix and asks a person before anything is changed.' },
  { t: 'Supplier bills with GST coded', d: 'Supplier invoices arrive by email or through Peppol. The agent matches each one to its purchase order and goods receipt, suggests the account and GST code from how your team coded that supplier before, and drafts the bill in Xero, MYOB or NetSuite. Our accounts payable automation page covers this job in depth.' },
  { t: 'Purchase orders from reorder points', d: 'A SKU in Unleashed or Odoo drops under its minimum, or a large trade order needs stock you do not hold. The agent prepares the supplier PO from the preferred supplier and last cost on file. Later, if the supplier writes back with a later ship date or a short quantity, your buyer sees it on the same screen.' },
  { t: 'Payment and settlement matching', d: 'Payouts from Stripe, Afterpay and Zip land as single bank lines that cover many orders, less fees. The agent breaks each payout down against its settlement report, matches the orders and fees, and prepares the reconciliation for your bookkeeper to approve.' },
  { t: 'Freight and order status answers', d: 'Staff and customers ask where an order is. A read-only agent looks it up in the ERP and the Australia Post, StarTrack or Sendle tracking, and answers in your help desk or team chat. It cannot change a record, because its role does not allow it.' },
];

/* ─── House terms (approved wording, 15 to 16 Oct 2026) ─── */
const TERMS: { t: string; d: string }[] = [
  { t: 'A demo on your data before you sign', d: 'Working software on a sample of your real documents, so you judge the drafts, not a slide deck.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. You can stop after any of them.' },
  { t: 'You own the code from day one', d: 'Everything we write sits in your repository. Nothing depends on a FactoryJet login.' },
  { t: 'Your accounts, at cost', d: 'The AI model and hosting can run in your own accounts at cost, with no markup from us.' },
  { t: 'Defects fixed inside the build price', d: 'For a cover period we agree in writing before work starts.' },
  { t: 'Support is optional', d: 'Each change is quoted and approved. No monthly minimum. We can keep managing the servers, models and connections if you want us to.' },
];

/* ─── Seven steps ─── */
const BUILD_STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Read your brief and list the systems', d: 'We start from your written brief or a short call, then list every system the job touches, with its edition and plan: Xero or MYOB, NetSuite or Odoo, Cin7 or Unleashed, the store and the marketplaces.', out: 'A one-page system map, with the plan limits that matter, such as Odoo’s Custom-plan rule for its external API.' },
  { n: '02', t: 'Collect real documents', d: 'You send 20 to 50 recent examples of the documents that start the job: customer POs, supplier bills, payout reports. We also note what your team entered for each one.', out: 'A test set built from your own history.' },
  { n: '03', t: 'Show the demo on your data', d: 'A first version of the agent drafts records from that test set. Your team compares its drafts with what they entered. This happens before any contract.', out: 'A side-by-side comparison you can judge for yourself.' },
  { n: '04', t: 'Write the rules and the approval points', d: 'What the agent may do alone, what needs a named person to approve, and what it can never touch. We also list the personal information it will see and which privacy rules apply.', out: 'An agent specification and a fixed price for each phase.' },
  { n: '05', t: 'Connect with a dedicated, limited role', d: 'The agent gets its own login in each system, with only the record types and actions the job needs: a NetSuite role without Administrator rights, a Xero connection without payroll scopes.', out: 'Working connections in a sandbox or test file.' },
  { n: '06', t: 'Run a supervised pilot', d: 'The agent drafts live records and a person approves every one for an agreed period. Each approval, edit and rejection is logged, so the numbers show when a step is ready to move to bulk approval.', out: 'Pilot results and a go-live decision that is yours.' },
  { n: '07', t: 'Go live and keep it working', d: 'ERPs release updates and model makers retire versions. Odoo has already set removal dates for its older APIs. We watch the logs, re-test after changes and fix what breaks, inside the defect cover period and after it if you choose.', out: 'A live agent you own, with the team that built it on call.' },
];

/* ─── Work on the same platforms (not Australian clients; not all finished). No results claimed. ─── */
const WORK: { who: string; kind: string; what: string; href: string; cta: string }[] = [
  { who: 'Sow Easy', kind: 'B2B distribution · WooCommerce and Odoo', what: 'A WooCommerce trade store being joined to Odoo, with Odoo as the master for stock, pricing and product identifiers. It is being tested against Odoo’s staging system; launch is still ahead. The same Odoo connection work sits under an Odoo AI agent.', href: '/case-studies/sow-easy-distributor-portal', cta: 'Read the case study' },
  { who: 'Two Shopify + QuickBooks projects', kind: 'Shopify · QuickBooks Online and Enterprise', what: 'Both in progress: one Shopify store being joined to QuickBooks Online, the other to QuickBooks Enterprise, so orders reach the books without retyping.', href: '/services/erp-ai-agents', cta: 'See our ERP agent work' },
];

/* ─── Internal links: live AU routes (checked on disk 2026-10-29) + US page ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'One job in depth: supplier invoices read into Xero or MYOB, matched and sent for approval.' },
  { h: '/au/accounts-receivable-automation', t: 'Accounts receivable automation', d: 'The other side of the books: customer invoices, payment matching and overdue follow-up.' },
  { h: '/au/netsuite-ai-agents', t: 'NetSuite AI agents', d: 'NetSuite on its own page, starting with supplier bills and accounts payable inside NetSuite.' },
  { h: '/au/ai-agents', t: 'AI agents and automation', d: 'The broader page: agents for enquiries, CRMs, job systems and Microsoft 365.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure which job to start with? A readiness assessment ranks the options.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'When the agent needs a store or a B2B portal to work with.' },
  { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify stores connected to Xero, MYOB, Afterpay, Zip and Australia Post.' },
  { h: '/services/erp-ai-agents', t: 'ERP AI agents (US)', d: 'Our US page, covering SAP Business One and ERPNext as well.' },
];

/* ─── JSON-LD. Organization is sitewide (src/data/organization.ts), referenced by @id. ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'ERP AI Agent Development for Australian Businesses',
      serviceType: 'AI agents for ERP and accounting systems: Xero, MYOB, MYOB Acumatica, NetSuite, Odoo, Cin7 and Unleashed; sales order, purchase order, supplier bill and reconciliation automation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports AI agents that work inside Xero, MYOB, NetSuite, Odoo and the inventory systems around them for Australian businesses. Each agent reads incoming documents, drafts the record in the ERP and waits for a person to approve it. The client owns the code.',
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
      inLanguage: 'en-AU',
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
      author: { '@id': 'https://factoryjet.com/#bhavesh-barot' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['erp-ai-agents'] },
  openGraph: {
    title: TITLE,
    description:
      'AI agents inside Xero, MYOB, NetSuite and Odoo for established Australian businesses. Orders, supplier bills and purchase orders drafted for your team to approve, with a demo on your own data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'erp-ai-agents';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const HERO_ICONS = [
  'M4 6h16v12H4V6Zm0 0 8 6 8-6',
  'M5 12l4 4 10-10M4 20h16',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

export default function ErpAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-erp-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />

        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">ERP AI Agents · Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Trade orders still arrive as emailed PDFs. Supplier bills wait for someone to code the GST. Marketplace
                orders from Amazon.com.au and Bunnings Marketplace need fixing before they reach Cin7 or Unleashed. We
                build AI agents that do that work inside Xero, MYOB, NetSuite and Odoo, and save every record as a draft
                for your team to approve.
              </p>
              <HeroInlineForm region="au" source="au_erp_ai_agents_hero" submitLabel="See a demo on my data" service="ERP AI Agents" trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
            </div>

            <form
              className="specpanel"
              aria-label="What every ERP AI agent build includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every ERP agent build includes: it reads the document, drafts the record in the ERP, and a named person approves before anything posts"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY ERP AGENT</span>
                <span className="sys"><span>XERO · MYOB</span><span>NETSUITE · ODOO</span></span>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="What every ERP agent build includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="erp-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">POs, bills, payout reports</span>
                  <span className="title">Reads what arrives</span>
                  <span className="tag">Agent</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="erp-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">before anything posts</span>
                  <span className="title">A named person approves</span>
                  <span className="tag">Your team</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="erp-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in your repository</span>
                  <span className="title">Code, prompts, integrations</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The agent drafts. Your team approves. The ERP stays the record.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (fetch-verified 29 Oct 2026) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '27 Mar 2026', t: 'Xero announced a multi-year partnership with Anthropic to bring Claude into Xero', s: 'Xero', u: SRC_XERO_ANTHROPIC },
              { v: 'MCP', t: 'is how NetSuite now lets ChatGPT, Claude and other AI clients reach its data, via a free SuiteApp', s: 'Oracle NetSuite FAQ', u: SRC_NS_FAQ },
              { v: 'Custom plan', t: 'is the only Odoo plan with access to data through the external API', s: 'Odoo 19 docs', u: SRC_ODOO_API },
              { v: '10 Dec 2026', t: 'new APP 1 privacy policy rules start for computer programs that make significant decisions', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><a href="/author/bhavesh-barot"><b>Bhavesh Barot</b></a>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an ERP AI agent do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An ERP AI agent reads the documents that start your office work, such as a
                    customer purchase order or a supplier bill, and drafts the matching record in Xero, MYOB, NetSuite or
                    Odoo.</span> A named person approves each draft before it posts. The agent signs in with its own
                    limited role, and every lookup and write is logged. FactoryJet builds custom ERP AI agents for
                    Australian businesses on Xero, MYOB, MYOB Acumatica, NetSuite and Odoo, and shows each agent working
                    on your own documents before you sign.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Five terms, in plain English</div>
                    <p>
                      An <b>ERP</b> (enterprise resource planning system) is the software that holds your stock, orders
                      and money in one place. An <b>API</b> is the published set of requests one program can send another to fetch
                      records or add new ones. <b>MCP</b>, the Model Context Protocol, is an open standard that lets AI
                      tools make those requests. An <b>OAuth scope</b> is one permission on a login, such as read invoices,
                      so the agent can reach only what it is granted. A <b>SuiteApp</b> is an add-on installed inside
                      NetSuite. Xero, NetSuite and Odoo all now publish ways for AI to connect.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    This page is for established businesses: wholesalers and distributors with trade accounts,
                    manufacturers quoting from part lists, and brands selling across a web store and several Australian
                    marketplaces. If one person spends most of a day each week retyping orders or coding bills between
                    two systems, that job is usually where the first agent goes.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A wholesale operations manager in a Melbourne warehouse office comparing an emailed purchase order with the draft sales order an AI agent prepared" />
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS ═══ */}
        <section className="section platforms" id="systems">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Where the agents work</div>
                <h2>Xero, MYOB, NetSuite and Odoo: what each one lets an agent do</h2>
              </div>
              <p>
                Each system opens a different door to AI, and each door has its own limits. These notes restate the
                maker’s own documentation as we read it on 29 October 2026, with a link to check it yourself.
              </p>
            </div>
            <div className="platlist" role="list">
              {SYSTEMS.map((s, i) => (
                <div key={s.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.t}</h3></div>
                  <p className="plat-build">
                    {s.d}
                    {s.src ? <>{' '}<a href={s.src.href} {...extLink}>{s.src.label}</a>.</> : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ JOBS ═══ */}
        <section className="section facts au-top" id="jobs">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What the agent does</div>
              <h2>Six ERP jobs an AI agent drafts for your team to approve</h2>
              <p className="lead">
                Each job starts with something arriving from outside and ends with a draft record. None of them posts
                money, stock or a customer message without a person saying yes.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {JOBS.map((j, i) => (
                  <div className="fact" key={j.t}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{j.t}</h3>
                      <p>{j.d}</p>
                      {i === 0 ? (
                        <p className="au-note">
                          See <a href="/au/sales-order-automation-ai-agents">sales order automation with AI agents</a> for this job in depth.
                        </p>
                      ) : null}
                      {i === 2 ? (
                        <p className="au-note">
                          See <a href="/au/accounts-payable-automation">accounts payable automation for Xero and MYOB</a>. Peppol background: <a href={SRC_EINVOICING} {...extLink}>business.gov.au, eInvoicing</a>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto"
                subject="A Brisbane bookkeeper approving a batch of supplier bills an AI agent drafted in Xero, with GST codes suggested on each line" />
            </div>
          </div>
        </section>

        {/* ═══ APPROVAL SPLIT ═══ */}
        <section className="section facts au-top" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Who keeps what</div>
              <h2>What can an ERP AI agent change without a person approving it?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Your ERP stays the single source for price lists, stock on hand and trade terms. The agent asks for
                  them fresh on every document it handles, so when your team updates a price in Xero or NetSuite at
                  9am, the 9.05am order is checked against the new figure.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The agent’s login decides what it can touch, so each system gets a narrow one of its own: a NetSuite
                  role covering only the record types the job uses, Xero OAuth scopes for those records alone, an Odoo
                  API key for one integration user, a MYOB login that belongs to the agent and no staff member.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <div className="factlabel">A typical approval split</div>
                  <ul className="trigrows">
                    <li><span className="m">Looking up stock, prices, orders</span><span className="n">read-only questions</span><span className="t">Automatic</span></li>
                    <li><span className="m">Drafting sales orders and bills</span><span className="n">saved as drafts in the ERP</span><span className="t">Draft only</span></li>
                    <li><span className="m">Confirming an order or posting a bill</span><span className="n">a named approver</span><span className="t">Approve</span></li>
                    <li><span className="m">Payments, credits, price changes</span><span className="n">money leaving or moving</span><span className="t">Always approve</span></li>
                    <li><span className="m">Payroll, STP, BAS lodgement</span><span className="n">outside the agent’s role</span><span className="t">Never</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto"
                subject="A Sydney finance manager approving a draft purchase order an AI agent prepared in NetSuite, on a laptop beside a printed supplier quote" />
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">How a project runs</div>
              <h2>From your brief to a live ERP agent, in seven steps</h2>
              <p className="lead">
                Open any step to see what happens and what you get. The demo on your data comes at step three, before
                you sign anything.
              </p>
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Send us one week of purchase orders or supplier bills'}
            sub={'We will run them through a first version of the agent and show you its drafts beside what your team entered. Tell us which systems you run.'}
            label={'See a demo on my data'}
            note="The founder replies within 24 hours." 
          />
        </div>

        {/* ═══ BRIEF / RFP ═══ */}
        <section className="section au-top" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Briefs and RFPs welcome</div>
              <h2>What to put in your brief for an ERP AI agent</h2>
              <p className="lead">
                A written brief gets a firmer answer than a contact form. If you are running a formal RFP, send it as
                it is. Otherwise these five points are enough for us to come back with questions and a scope.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Your systems and editions.</b> Xero or MYOB Business, MYOB Acumatica, NetSuite, Odoo and its plan, plus Cin7 Core, Unleashed, your store and the marketplaces you sell on.</span></li>
                  <li><span><b>The one job to start with.</b> For example, trade POs into sales orders, or supplier bills into Xero.</span></li>
                  <li><span><b>Volume.</b> Roughly how many documents arrive each week, and how many people handle them today.</span></li>
                  <li><span><b>Who approves now.</b> The person or role who signs off the record today, and any dollar limits.</span></li>
                  <li><span><b>Dates that matter.</b> A financial year end on 30 June, a system migration, a peak season.</span></li>
                </ol>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What you get back</div>
                <ul className="trigrows">
                  <li><span className="m">Questions on anything unclear</span><span className="t">First reply</span></li>
                  <li><span className="m">A system map with plan limits</span><span className="t">Written</span></li>
                  <li><span className="m">A demo on your documents</span><span className="t">Before you sign</span></li>
                  <li><span className="m">Scope and price per phase</span><span className="t">Fixed</span></li>
                  <li><span className="m">Founder on every reply</span><span className="t">Within 24 hours</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Terms</div>
                <h2>ERP AI agent project terms: demo, fixed price, code ownership</h2>
              </div>
              <p>
                The same terms on every project, written into the proposal. An ERP agent needs re-testing each time
                the ERP or the AI model changes, so what happens after launch is written down as plainly as the build.
              </p>
            </div>
            <div className="platlist" role="list">
              {TERMS.map((t, i) => (
                <div key={t.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{t.t}</h3></div>
                  <p className="plat-build">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN RULES ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act, GST and eInvoicing</div>
              <h2>The Australian rules that shape an ERP agent</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Staff details on expense claims and bank details on supplier cards are the fields most easily swept
                  into an ERP agent by accident. The OAIC’s AI products guidance also says checking an AI product is not
                  a set-and-forget job. So the list of fields each agent may see goes into its written specification
                  before we build, and is reviewed whenever the agent takes on a new job.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  A worked example for APP 1.7: an agent checks each trade order against the customer’s credit limit.
                  If it flags an order over the limit and a credit controller decides what happens, the agent only
                  advises. If it puts a sole trader’s account on stop by itself, it sits much closer to the decisions the
                  10 December 2026 rule covers, and your privacy policy may need to describe it. We build the first kind
                  by default and leave the call on the second to your adviser.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    Once your software is connected to Peppol, supplier eInvoices arrive as data, so the agent skips the
                    reading and goes straight to matching. Business.gov.au notes that the ATO runs the network but cannot
                    see the invoices sent across it.
                    GST codes are suggested from your own tax rates and supplier history, and approved by a person. BAS
                    lodgement and Single Touch Payroll reporting stay with your accountant and payroll software.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, guidance on privacy and commercially available AI products</a>;{' '}
                    <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP guidelines chapter 1</a>;{' '}
                    <a href={SRC_EINVOICING} {...extLink}>business.gov.au, eInvoicing</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">In every build</div>
                <ul className="trigrows">
                  <li><span className="m">Only the fields the job needs</span><span className="t">Privacy Act</span></li>
                  <li><span className="m">Business AI terms, never a public chatbot</span><span className="t">OAIC</span></li>
                  <li><span className="m">A record of what each agent decides</span><span className="t">APP 1</span></li>
                  <li><span className="m">GST suggested, approved by a person</span><span className="t">Your rates</span></li>
                  <li><span className="m">No BAS, STP or payroll access</span><span className="t">Excluded</span></li>
                </ul>
                <p>We are not lawyers or tax agents and do not give legal or tax sign-off. We build to the rules you and your adviser set.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>Built-in ERP AI vs an off-the-shelf app vs a custom agent</h2>
              <p className="lead">
                Start with what your system already gives you. A custom agent earns its place when the job crosses
                systems or needs your own approval rules. Off-the-shelf here means tools such as{' '}
                <a href={SRC_DEXT} {...extLink}>Dext</a> and <a href={SRC_HUBDOC} {...extLink}>Hubdoc</a>, which capture
                bills and receipts into Xero or QuickBooks Online, and <a href={SRC_APPROVALMAX} {...extLink}>ApprovalMax</a>,
                an accounts payable approval tool for Xero, QuickBooks Online and NetSuite.
              </p>
            </div>
            <p className="md:hidden" style={{ fontSize: 13, margin: '0 0 8px', color: '#4A4A45' }}>Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                    <th>Built-in AI (JAX, Odoo AI, NetSuite connector)</th>
                    <th>Off-the-shelf app (Dext, Hubdoc, ApprovalMax)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Jobs that cross Xero, Cin7, a store and marketplaces</td><td>Questions and tasks inside one system</td><td>One standard task, such as bill capture or bill approval</td></tr>
                  <tr><th scope="row">Your approval rules</th><td className="fj">Written with you, per record type</td><td>The maker’s settings</td><td>The app’s settings</td></tr>
                  <tr><th scope="row">Works across systems</th><td className="fj">Yes, by design</td><td>Mostly within its own system</td><td>Usually two systems</td></tr>
                  <tr><th scope="row">Demo on your data first</th><td className="fj">Before you sign</td><td>Included or add-on, try it in your own system</td><td>Varies by vendor, often a trial</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: the repository</td><td>The ERP maker</td><td>The app vendor</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team, optional, no monthly minimum</td><td>The maker’s support</td><td>The vendor’s help desk</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ COST ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Cost</div>
              <div>
                <h2>How much does an ERP AI agent cost in Australia?</h2>
                <p className="lead">
                  <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity’s March 2026 Australian guide</a> puts multi-system
                  workflow automation at A$20,000 to A$50,000 or more over 6 to 12 weeks. That is a market range, not a
                  FactoryJet price. Where a project lands depends mostly on the four things below.
                </p>
              </div>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>How many systems the agent writes to.</b> Reading from Xero is lighter work than writing to Xero and Cin7 in the same step.</span></li>
                  <li><span><b>How messy the documents are.</b> Peppol eInvoices are structured; scanned PDFs and free-text emails need more testing.</span></li>
                  <li><span><b>The approval design.</b> One approver is simpler than limits by dollar value, customer or supplier.</span></li>
                  <li><span><b>Access and plans.</b> An Odoo database not on a Custom plan, or a NetSuite account without the right features, adds a step.</span></li>
                </ol>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Systems written to</span><span className="t">Reach</span></li>
                  <li><span className="m">Document types and quality</span><span className="t">Handling</span></li>
                  <li><span className="m">Approval levels</span><span className="t">Control</span></li>
                  <li><span className="m">Plan and permission changes</span><span className="t">Access</span></li>
                  <li><span className="m">AI model and hosting</span><span className="t">Your accounts, at cost</span></li>
                  <li><span className="m">Demo on your data</span><span className="t">Before you sign</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WORK ON THE SAME PLATFORMS (not Australian clients; some still in progress) ═══ */}
        <section className="section platforms" id="work">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Work on the same platforms</div>
                <h2>ERP integration work on Odoo and QuickBooks</h2>
              </div>
              <p>
                Connection work on the same platforms an Australian ERP agent uses, which is where most of the effort in
                an agent project goes. Our ERP agent work covers RFQ automation, daily bookkeeping and the generation of
                purchase and sales orders, on Odoo, NetSuite, SAP Business One, ERPNext and custom-built ERPs. Before
                any contract we show working software on the buyer’s own data: for one prospect, a demo pricing agent
                ran on their own rule book and re-priced a job they had already quoted.
              </p>
            </div>
            <div className="platlist" role="list">
              {WORK.map((w, i) => (
                <div key={w.who} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{w.who}</h3></div>
                  <p className="plat-build"><b>{w.kind}.</b> {w.what} <a href={w.href}>{w.cta}</a>.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ RELATED ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Other pages for Australian ERP and AI projects</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>AI, ecommerce and finance automation</h3>
                <span className="mono agentdir-count">{RELATED.length} pages</span>
              </div>
              <ul className="agentdir-grid au-grid-2">
                {RELATED.map((c) => (
                  <li key={c.h}>
                    <a href={c.h}>
                      <span className="agentdir-t">{c.t}</span>
                      <span className="agentdir-l">{c.d}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="ERP AI agents: questions Australian finance and operations teams ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources, read 29 October 2026</div>
            <div className="refs">
              <a href={SRC_XERO_ANTHROPIC} {...extLink}>Xero and Anthropic partnership</a>
              <a href={SRC_XERO_MCP} {...extLink}>Xero MCP server</a>
              <a href={SRC_MYOB_API} {...extLink}>MYOB Business API</a>
              <a href={SRC_MYOB_ACUMATICA} {...extLink}>MYOB Acumatica</a>
              <a href={SRC_NS_CONNECTOR} {...extLink}>NetSuite AI Connector Service</a>
              <a href={SRC_NS_PERMS} {...extLink}>NetSuite required permissions</a>
              <a href={SRC_NS_FAQ} {...extLink}>NetSuite AI Connector FAQ</a>
              <a href={SRC_ODOO_API} {...extLink}>Odoo External JSON-2 API</a>
              <a href={SRC_ODOO_AGENTS} {...extLink}>Odoo 19 AI agents</a>
              <a href={SRC_EINVOICING} {...extLink}>business.gov.au, eInvoicing</a>
              <a href={SRC_OAIC_AI} {...extLink}>OAIC, AI products guidance</a>
              <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, AI agent cost in Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See your own orders and bills drafted by an agent before you sign</h2>
              <p>
                Send your name, work email and the systems you run. The founder replies within 24 hours to arrange a
                demo on a sample of your documents. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See all AI agent work</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
    </>
  );
}
