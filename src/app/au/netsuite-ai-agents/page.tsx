import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/netsuite-ai-agents, built 2026-10-29. Australian twin of
   /services/netsuite-ai-agents (US). Ideas reused, no sentence copied.

   Why an Australian page: Oracle's own help center says two of NetSuite's
   AP features do not reach Australian businesses. Bill Capture "is available
   only in the United States" and Intelligent Payment Automation pays vendors
   in the United States in USD. Australian AP teams on NetSuite therefore need
   their own route from supplier invoice to approved bill, which is the job
   this page sells.

   DataForSEO, Australia (location 2036), 29 Oct 2026: "netsuite australia"
   70/mo, "netsuite ai" 50, "netsuite integration" 30, "netsuite shopify
   integration" 30, "netsuite partner australia" 20, "netsuite ap automation"
   20, "netsuite developer" 20; "netsuite ai agent(s)", "netsuite mcp" and
   "netsuite ai connector" had no AU volume. AI Overview on all three SERPs
   pulled. PAA used for FAQs: "Does NetSuite have an AI?", "What is NetSuite
   intelligent payment automation?", "Is NetSuite better than Xero?", plus
   related searches on the AI Connector with Claude, ChatGPT and Copilot, and
   connector cost. Spend: about US$0.10.

   Truth rules for anyone editing this file:
   - Every Oracle fact links to docs.oracle.com and was fetched on 29 Oct 2026
     (plain HTTP request, page text read). Re-fetch before changing one.
   - OAIC facts fetched the same day. business.gov.au e-invoicing page fetched
     the same day. ato.gov.au returned 403 to a scripted request, so nothing
     here cites the ATO directly.
   - Market ranges: Flowtivity (AUD, "early 2026") and Web Video Digital
     (5 Aug 2026), both re-fetched 29 Oct 2026. Neither page states whether
     GST is included, and the page says so. No FactoryJet prices. No running,
     upkeep, model or retainer figures (Bhavesh, 11 Oct 2026).
   - Experience claim is the one Bhavesh confirmed on 2026-10-09 for the US
     page: NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, on RFQ
     automation, daily bookkeeping, and purchase and sales order generation.
     No client is named and no client is presented as Australian.
   - No partner claim. FactoryJet is not a listed Oracle NetSuite partner.
   - Catch and MyDeal are left out on purpose: their marketplace status could
     not be confirmed from a primary source on the build date.

   Schema: Service (areaServed Australia) + BreadcrumbList + WebPage/Article +
   FAQPage. FAQPage mainEntity is mapped from FAQ_ITEMS, the same array the
   visible <AuFaq> renders. There is no second FAQ array in this file.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/netsuite-ai-agents';
const UPDATED = '2026-10-29';
const TITLE = 'NetSuite AI Agents Australia | AI Connector & AP | FactoryJet';
const H1 = 'NetSuite AI Agents for Australian Businesses: Built Into Your Account';
const DESCRIPTION =
  'Custom AI agents inside Oracle NetSuite for Australian companies: supplier bills, sales orders, marketplace and courier exceptions, all approved by your team. Demo on your data first.';

/* One array feeds the visible trail and the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'NetSuite AI Agents', url: CANONICAL },
];

/* ─── Sources, each fetched 29 Oct 2026 ─────────────────────────────── */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
// "Bill Capture is available only in the United States."
const SRC_BILL_LIMITS = `${NS}/article_0417034348.html`;
// IPA limitations: business subsidiaries can use it to pay vendors in the United States; USD; not in sandbox, development or Release Preview accounts.
const SRC_IPA_LIMITS = `${NS}/section_0530040548.html`;
// AI Connector FAQ: "not a paid feature"; MCP Standard Tools is a free SuiteApp; enable Server SuiteScript and OAuth 2.0; Claude Pro and ChatGPT currently supported; log retention 21 days production, 7 days sandbox.
const SRC_CONNECTOR_FAQ = `${NS}/article_4160616848.html`;
// Required features and permissions: not possible with the Administrator role or roles with full permissions.
const SRC_CONNECTOR_PERMS = `${NS}/section_0714080625.html`;
// Risks page: NetSuite "cannot control the behavior of external AI agents, MCP clients, third-party MCP servers".
const SRC_RISKS = `${NS}/article_9002708453.html`;
// ANZ Localization overview: free managed SuiteApp; PTR, TPAR, templates; best for Australia edition, JCurve Premium, OneWorld with AU/NZ subsidiaries.
const SRC_ANZ = `${NS}/article_158677153915.html`;
// Installing ANZ Localization: with SuiteTax supports BAS, GST101A, PTR, Supplier ABN List; free, managed SuiteApp.
const SRC_ANZ_INSTALL = `${NS}/article_158677437293.html`;
// Known limitations: JCurve and JCurve Financials not supported, they lack Server SuiteScript and SDF; no multi-book.
const SRC_ANZ_LIMITS = `${NS}/article_158677431009.html`;
// BAS report: NetSuite calculates each box; "intended for record-keeping purposes only".
const SRC_BAS = `${NS}/section_N1839201.html`;
// Approving sales orders: Pending Approval must be approved by someone with the right permissions.
const SRC_SO_APPROVE = `${NS}/section_N1218788.html`;
// NetSuite Next "is being made available to customers in phases".
const SRC_ASK_ORACLE = `${NS}/article_5100902387.html`;
// OAIC AI guidance (published 21 Oct 2024, updated 17 Jan 2025).
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC APP 1 guidelines: from 10 December 2026, APP 1.7 to 1.9 on computer programs that make significant decisions; cites the Privacy and Other Legislation Amendment Act 2024 explanatory memorandum.
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// business.gov.au: eInvoicing over the Peppol network via ATO-approved service providers.
const SRC_EINVOICING = 'https://business.gov.au/finance/payments-and-invoicing/e-invoicing';
// Flowtivity: custom AI agent A$5,000 to A$50,000+, enterprise-grade multi-system agents can exceed A$50,000, AUD, early 2026.
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
// Web Video Digital (5 Aug 2026): AUD 15,000 to AUD 150,000; most SMB projects AUD 30,000 to AUD 80,000.
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';

/* ─── FAQ source of truth (drives the visible FAQ AND the FAQPage schema) ─── */
const FAQ_CATEGORIES = [
  { key: 'oracle', label: 'NetSuite AI in Australia' },
  { key: 'jobs', label: 'Jobs an agent can do' },
  { key: 'control', label: 'Control, privacy and audit' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── NetSuite AI in Australia ──
  { category: 'oracle', question: 'Does NetSuite have AI that works in Australia?',
    answer: 'Some of it. The NetSuite AI Connector Service, which lets Claude or ChatGPT work with your records, has requirements that list features and permissions, with no country named. Two accounts payable features do name one: Oracle says Bill Capture is available only in the United States, and Intelligent Payment Automation pays US vendors in US dollars. Ask Oracle arrives with NetSuite Next, which Oracle is releasing to customers in phases.',
    links: [{ href: SRC_BILL_LIMITS, label: 'Oracle: Bill Capture considerations' }] },
  { category: 'oracle', question: 'Can Australian companies use NetSuite Bill Capture?',
    answer: 'Not today. Oracle’s Bill Capture considerations page states that the feature is available only in the United States. An Australian AP team on NetSuite still keys supplier invoices or uses an outside tool. That is the gap a custom agent fills: it reads the PDF, checks the ABN and GST against the vendor record, and saves a draft vendor bill for your team to approve.',
    links: [{ href: SRC_BILL_LIMITS, label: 'Oracle: Bill Capture considerations' }] },
  { category: 'oracle', question: 'What is NetSuite Intelligent Payment Automation, and does it pay Australian suppliers?',
    answer: 'It is Oracle’s SuiteApp, powered by BILL, for paying vendors from inside NetSuite. Oracle’s limitations page says business subsidiaries can use it to pay vendors in the United States, in US dollars, and that it cannot run in sandbox, development or Release Preview accounts. For AUD supplier payments, Australian companies keep their existing bank file or payment process.',
    links: [{ href: SRC_IPA_LIMITS, label: 'Oracle: Intelligent Payment Automation limitations' }] },
  { category: 'oracle', question: 'How much does the NetSuite AI Connector cost?',
    answer: 'Nothing extra from Oracle. Its FAQ describes the AI Connector Service as not a paid feature, and lists the MCP Standard Tools SuiteApp as free to install. Your AI client is a separate subscription; Oracle lists Claude Pro and ChatGPT as currently supported. A custom agent built on top of NetSuite is a build project, priced on scope. Market ranges for those builds are further down this page.',
    links: [{ href: SRC_CONNECTOR_FAQ, label: 'Oracle: AI Connector Service FAQ' }] },
  { category: 'oracle', question: 'How do I connect Claude, ChatGPT or Copilot to NetSuite?',
    answer: 'Through Oracle’s AI Connector Service, which uses the Model Context Protocol, an open standard for linking AI tools to business systems. Your administrator enables Server SuiteScript and OAuth 2.0, then gives a role the MCP Server Connection permission. Oracle blocks the Administrator role and any full-permission role from connecting. Oracle says Claude Pro and ChatGPT are supported, and some ChatGPT plans need Developer Mode.',
    links: [{ href: SRC_CONNECTOR_PERMS, label: 'Oracle: required features and permissions' }] },
  { category: 'oracle', question: 'We are on NetSuite JCurve. Can we use these AI tools?',
    answer: 'Check before you plan anything. Oracle’s ANZ Localization limitations page says JCurve and JCurve Financials do not have the Server SuiteScript and SuiteCloud Development Framework features. Oracle’s AI Connector FAQ lists Server SuiteScript as a feature you must enable. JCurve Premium is a different case, listed by Oracle as supported for ANZ Localization. Your NetSuite account manager can confirm your edition.',
    links: [{ href: SRC_ANZ_LIMITS, label: 'Oracle: known limitations of ANZ Localization' }] },
  { category: 'oracle', question: 'Is NetSuite better than Xero for a growing Australian business?',
    answer: 'They suit different stages. Xero suits one entity with simple stock. NetSuite is an ERP built for several subsidiaries, warehouses and approval chains, and Oracle ships a free ANZ Localization SuiteApp for BAS, TPAR and Payment Times reporting. Some groups keep Xero in a smaller entity and run NetSuite at group level. An AI agent can work in either; we build for the system you already run.',
    links: [{ href: SRC_ANZ, label: 'Oracle: ANZ Localization' }] },

  // ── Jobs ──
  { category: 'jobs', question: 'What is a NetSuite AI agent?',
    answer: 'A piece of software, built for your account, that handles one repeated office job in NetSuite. It watches an inbox, a folder or a channel feed, reads what arrives, looks up your vendors, items and customer pricing, and saves a pending transaction. A named person approves it. The agent works through a NetSuite role made just for it, so it can only touch what that role allows.' },
  { category: 'jobs', question: 'Can an AI agent process supplier invoices in NetSuite for Australian GST?',
    answer: 'Yes, as a draft. The agent reads the invoice, matches the supplier by ABN, checks the GST amount against the tax code on the vendor and item, and matches the bill to the purchase order and item receipt. Anything that does not match goes to your AP lead with the difference highlighted. It never posts or pays a bill without a person approving it.',
    links: [{ href: '/au/accounts-payable-automation', label: 'Accounts payable automation in Australia' }] },
  { category: 'jobs', question: 'Can an agent turn emailed purchase orders into NetSuite sales orders?',
    answer: 'Yes. Trade customers and retailers often send purchase orders as PDFs or spreadsheets. The agent reads each line, maps the customer’s product codes to your items, applies their price level and saves the sales order as Pending Approval. Oracle’s help center says a sales order in that status must be approved by someone with the right permissions before NetSuite processes it.',
    links: [{ href: SRC_SO_APPROVE, label: 'Oracle: approving sales orders' }] },
  { category: 'jobs', question: 'Can it handle orders from Amazon.com.au, Bunnings Marketplace or THE ICONIC?',
    answer: 'It works on the exceptions, which is where the hours go. Most channels already feed NetSuite through a connector. The agent watches for orders that fail to import, SKUs that do not map, prices that differ from your NetSuite price level and stock that is about to oversell. It drafts the fix and a short note for your channel manager to approve.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }] },
  { category: 'jobs', question: 'Can an agent watch StarTrack, Australia Post or Sendle deliveries?',
    answer: 'Yes, if the carrier tracking reaches NetSuite or a system the agent can read. The agent checks item fulfilments that have stalled, compares them with carrier tracking and flags parcels that will miss the promised date. It drafts the customer update and, for a lost parcel, the claim details. Your customer service lead decides what gets sent.' },
  { category: 'jobs', question: 'Can it help with BAS preparation in NetSuite?',
    answer: 'It can tidy the inputs, never lodge. Oracle says NetSuite calculates each BAS box, and that any BAS NetSuite produces is for record-keeping only. An agent can flag transactions with a missing or odd GST code, suppliers without an ABN, and bills coded to the wrong period, so your accountant reviews a cleaner ledger before lodging with the ATO.',
    links: [{ href: SRC_BAS, label: 'Oracle: Business Activity Statement report' }] },
  { category: 'jobs', question: 'Can an AI agent send e-invoices over Peppol from NetSuite?',
    answer: 'The agent does not replace your e-invoicing provider. business.gov.au explains that eInvoices travel over the Peppol network through ATO-approved service providers, so NetSuite needs one of those connections. Where you have it, an agent can check outgoing invoices for missing ABNs or purchase order numbers before they leave, and flag rejected ones for your AR team.',
    links: [{ href: SRC_EINVOICING, label: 'business.gov.au: eInvoicing' }] },
  { category: 'jobs', question: 'Can an agent connect NetSuite with Shopify, Cin7 or a Xero subsidiary?',
    answer: 'Yes. Many Australian groups run NetSuite at head office with Shopify for direct sales, Cin7 Core in a warehouse, or Xero in a smaller entity. The agent reads from each through its official API and reconciles the gaps: orders in Shopify with no NetSuite record, stock counts that disagree, intercompany invoices that were never matched. It reports the gaps and drafts fixes.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },

  // ── Control, privacy, audit ──
  { category: 'control', question: 'Does the AI see all our NetSuite data?',
    answer: 'No. Oracle runs connector tools under the permissions of the role you choose, and blocks the Administrator role and full-permission roles. We create one role for the agent with access to the record types its job needs. Oracle’s risk page adds a warning: once data leaves NetSuite for an outside AI agent or MCP client, NetSuite cannot control how it is handled.',
    links: [{ href: SRC_RISKS, label: 'Oracle: risks and controls' }] },
  { category: 'control', question: 'Does the Privacy Act apply to a NetSuite AI agent?',
    answer: 'Yes, if your business is covered by the Privacy Act 1988 and the agent handles personal information, such as customer contacts or staff records. OAIC guidance covers both what goes into an AI tool and anything personal that comes back out of it. We map which fields the agent sees and keep it to the minimum the job needs.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC: privacy and commercially available AI products' }] },
  { category: 'control', question: 'What changes on 10 December 2026 for automated decisions?',
    answer: 'From 10 December 2026, new APP 1 rules, which came from the Privacy and Other Legislation Amendment Act 2024, mean your privacy policy must describe any program that uses personal information in a decision with a significant effect on a person. If an agent decides credit holds or customer pricing, that may apply. We document each decision an agent makes so your privacy adviser can judge.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC: APP guidelines chapter 1' }] },
  { category: 'control', question: 'How do our auditors see what the agent did?',
    answer: 'Two records. Oracle keeps an Execution Log for connector calls, with a retention of 21 days for production accounts and 7 for a sandbox, per its FAQ. Audit trails usually need to last longer, so every agent we build also writes its own log of what it read, what it saved and who approved it, kept for as long as your retention policy requires.',
    links: [{ href: SRC_CONNECTOR_FAQ, label: 'Oracle: AI Connector Service FAQ' }] },

  // ── Cost and working with us ──
  { category: 'working', question: 'How much does a custom NetSuite AI agent cost in Australia?',
    answer: 'Flowtivity’s early-2026 Australian guide puts a custom AI agent at A$5,000 to A$50,000 or more, and says enterprise-grade agents with several system integrations can exceed A$50,000. Web Video Digital’s August 2026 guide gives a wider band, A$15,000 to A$150,000. Neither guide says whether GST is included, and neither is NetSuite-specific. These are market ranges, not our prices. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity: AI agent cost in Australia' }, { href: SRC_WVD, label: 'Web Video Digital: custom AI agent cost' }] },
  { category: 'working', question: 'Can we see it working before we sign?',
    answer: 'Yes. Before any contract, we run a first version of the agent on your own documents: a batch of supplier invoices your team has already entered, or customer purchase orders you have already keyed. You compare its drafts with what your team did, line by line. If it does not match well enough, you have spent nothing and we tell you why.' },
  { category: 'working', question: 'What should we send you to get a quote?',
    answer: 'A short brief or RFP is ideal. Tell us your NetSuite edition and subsidiaries, the one job you want handled first, how many documents a week it involves, and the other systems it touches, such as Shopify, Cin7, a 3PL or your bank. Ten real sample documents with sensitive details removed let us quote a fixed price, with no guesswork.' },
  { category: 'working', question: 'Do you replace our NetSuite partner?',
    answer: 'No. Your NetSuite partner or in-house administrator keeps looking after configuration, SuiteFlow workflows and upgrades. We build the agent around the account as they have set it up, working in your sandbox first, and agree with them which saved searches, roles and scripts the agent depends on. The agent’s code and notes live in a separate repository, so your partner can see exactly what it touches.' },
  { category: 'working', question: 'Who owns the agent, and who supports it after launch?',
    answer: 'You own the code and the repository from day one. The AI account and hosting can sit in your own accounts at cost, with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved first, with no monthly minimum. We can keep managing the servers and models for you if you prefer.' },
];

/* ─── What Oracle ships, checked for Australia ─── */
const ORACLE_ROWS: { m: string; n: string; t: string; u: string }[] = [
  { m: 'NetSuite AI Connector Service', n: 'Claude, ChatGPT and other MCP clients read and update records', t: 'Not a paid feature', u: SRC_CONNECTOR_FAQ },
  { m: 'Connector role rules', n: 'Administrator and full-permission roles cannot connect', t: 'Oracle rule', u: SRC_CONNECTOR_PERMS },
  { m: 'Bill Capture', n: 'scans vendor bills into drafts', t: 'US only', u: SRC_BILL_LIMITS },
  { m: 'Intelligent Payment Automation', n: 'pays vendors from NetSuite via BILL', t: 'US vendors, USD', u: SRC_IPA_LIMITS },
  { m: 'ANZ Localization SuiteApp', n: 'BAS with SuiteTax, TPAR, Payment Times Report, Supplier ABN List', t: 'Free, managed', u: SRC_ANZ_INSTALL },
  { m: 'JCurve and JCurve Financials', n: 'no Server SuiteScript or SuiteCloud Development Framework', t: 'Check first', u: SRC_ANZ_LIMITS },
];

/* ─── Six jobs we build first ─── */
const JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Supplier invoices to draft vendor bills', d: 'The agent reads each PDF from the AP inbox, finds the vendor by ABN, checks GST against the tax code and matches the bill to its purchase order and receipt. Clean bills wait in a queue for one-click approval. Mismatches go to your AP lead with the difference shown.' },
  { n: '02', t: 'Customer purchase orders to pending sales orders', d: 'Retail and trade buyers send orders as PDFs, spreadsheets and email bodies. The agent maps their codes to your items, applies the customer’s price level, checks stock by location and saves a Pending Approval sales order.' },
  { n: '03', t: 'Marketplace and store order exceptions', d: 'Orders from Amazon.com.au, eBay Australia, Kogan, Bunnings Marketplace, THE ICONIC or your Shopify store that failed to import, carry an unmapped SKU or a wrong price. The agent drafts the fix for your channel manager.' },
  { n: '04', t: 'Courier and fulfilment follow-up', d: 'Stalled item fulfilments checked against StarTrack, Australia Post or Sendle tracking. Late parcels flagged before the customer calls, with a drafted update and, where needed, the claim details ready.' },
  { n: '05', t: 'RFQs and quotes as NetSuite estimates', d: 'A buyer’s request for quote is read, each line matched to an item, contract or tier pricing applied, and an estimate, NetSuite’s word for a quote, saved for your sales team to check and send.' },
  { n: '06', t: 'Month-end and BAS housekeeping', d: 'Bank lines suggested against open invoices and bills, transactions with a missing GST code flagged, suppliers without an ABN listed. Your accountant reviews and posts. The agent never lodges anything with the ATO.' },
];

/* ─── Build steps ─── */
const BUILD_STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Read your brief and sample documents',
    d: 'You send a brief or RFP and around ten real documents with sensitive details removed. We read them before the first call, so the call is about your process, not our pitch.',
    out: 'A written list of questions and the job we think should go first.' },
  { n: '02', t: 'Check what Oracle already gives you',
    d: 'We confirm your edition, SuiteTax status, ANZ Localization setup and whether the AI Connector Service can be switched on. If a free Oracle feature or a SuiteFlow workflow does the job, we tell you and stop there.',
    out: 'A one-page fit note: Oracle feature, workflow, or custom agent.' },
  { n: '03', t: 'Demo on your data, before you sign',
    d: 'A first version of the agent runs on your sample documents in a sandbox or a copy of the data. You compare its drafts with what your team actually entered.',
    out: 'Side-by-side results and a fixed price for the phase.' },
  { n: '04', t: 'Create the agent’s own NetSuite role',
    d: 'A custom role with only the record types and permissions the job needs, never Administrator. Approval steps are written down: what the agent may save alone, what waits for a person, what it must never touch.',
    out: 'A signed-off agent specification with permissions and approvals.' },
  { n: '05', t: 'Build and test in your sandbox',
    d: 'The agent is built against your sandbox and tested on past documents, including the awkward ones: credit notes, split deliveries, foreign-currency suppliers, missing ABNs.',
    out: 'A test report showing match rates and every hand-off case.' },
  { n: '06', t: 'Run beside your team, then go live',
    d: 'For an agreed period the agent drafts and a person reviews every transaction. Low-risk actions move to one-click approval as the numbers prove out. High-risk ones stay with a person.',
    out: 'Pilot results against the measure agreed in step 3, and your go-live decision.' },
  { n: '07', t: 'Support on your terms',
    d: 'Defects are fixed inside the build price for the agreed cover period. After that, changes are quoted and approved one at a time. NetSuite releases and model updates are re-tested before they reach live work.',
    out: 'A live agent you own, with its code, logs and notes.' },
];

/* ─── House terms ─── */
const TERMS: { t: string; d: string }[] = [
  { t: 'Demo on your data before you sign', d: 'Working software on your own documents first. No contract until you have seen it match your team’s work.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. You can stop after any of them.' },
  { t: 'You own the code from day one', d: 'The repository, prompts, scripts and documentation are yours. AI and hosting can run in your own accounts at cost, no markup.' },
  { t: 'Defect cover inside the build price', d: 'Bugs are fixed at no extra charge for a cover period agreed before work starts.' },
  { t: 'Optional support, no monthly minimum', d: 'Each later change is quoted and approved first. We can keep managing the servers, models and API connections if you want us to.' },
];

/* ─── Related AU pages (routes checked in src/app/au on 29 Oct 2026) ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/ai-agents', t: 'AI agents in Australia', d: 'Agents for Xero, MYOB, HubSpot, ServiceM8 and Microsoft 365, with the same approval rules.' },
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier invoice capture and approval for Xero and MYOB businesses.' },
  { h: '/au/ai-development', t: 'AI development', d: 'Larger builds: AI inside your own product, apps and data platforms.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure which NetSuite job comes first? A readiness assessment ranks them.' },
  { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Stores and B2B portals that feed NetSuite cleanly in the first place.' },
  { h: '/services/netsuite-ai-agents', t: 'NetSuite AI agents (US)', d: 'Our US page, with more detail on MCP Standard Tools and US-only features.' },
];

/* ─── JSON-LD ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'NetSuite AI Agent Development for Australian Businesses',
      serviceType: 'AI agents for Oracle NetSuite, NetSuite AI Connector Service setup, accounts payable automation, sales order automation, marketplace order exception handling',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports custom AI agents inside Oracle NetSuite accounts for Australian companies. Agents draft vendor bills from supplier invoices, sales orders from customer purchase orders and fixes for marketplace and courier exceptions, under a dedicated NetSuite role, with a person approving each transaction. The client owns the code.',
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
      datePublished: UPDATED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agents built into Oracle NetSuite for Australian companies. Bill Capture is US only, so we build the supplier invoice, sales order and exception agents your team approves.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: NetSuite AI agents for Australian businesses' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

export default function NetSuiteAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-netsuite-ai-agents" type="application/ld+json"
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

        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">NetSuite AI agents · Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your company outgrew Xero or MYOB and moved to NetSuite, yet your AP team still keys supplier
                invoices by hand, because Oracle’s Bill Capture works only in the United States. Orders arrive from
                Amazon.com.au, Bunnings Marketplace, Shopify and trade buyers’ PDFs, and StarTrack exceptions land in
                someone’s inbox. We build AI agents inside your NetSuite account that draft the bills, orders and
                fixes. Your team approves each one.
              </p>
              <HeroInlineForm
                region="au"
                source="au_netsuite_ai_agents_hero"
                submitLabel="See a demo on my data"
                service="NetSuite AI Agents"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>

            <div className="specpanel" role="group" aria-label="What every NetSuite agent build includes">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY NETSUITE BUILD</span>
                <span className="sys"><span>NETSUITE</span><span>APPROVAL</span></span>
              </div>
              <div className="specpanel-body">
                <div className="specrow run">
                  <span className="idx">before any contract</span>
                  <span className="title">Demo on your own documents</span>
                  <span className="tag">First</span>
                </div>
                <div className="specrow run">
                  <span className="idx">never Administrator</span>
                  <span className="title">A NetSuite role made for the agent</span>
                  <span className="tag">Scoped</span>
                </div>
                <div className="specrow hold">
                  <span className="idx">code, scripts and repo</span>
                  <span className="title">Owned by you from day one</span>
                  <span className="tag">Yours</span>
                </div>
              </div>
              <div className="specpanel-foot">RULE · The agent drafts in NetSuite. A named person approves.</div>
            </div>
          </div>
        </section>

        {/* ═══ LEDGER (Oracle and OAIC facts, fetched 29 Oct 2026) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'US only', t: 'where Oracle makes NetSuite Bill Capture available, so Australian AP teams need another route', s: 'Oracle', u: SRC_BILL_LIMITS },
              { v: 'USD', t: 'the only currency Intelligent Payment Automation pays in, to US vendors', s: 'Oracle', u: SRC_IPA_LIMITS },
              { v: 'Free', t: 'the NetSuite AI Connector Service, which Oracle says is not a paid feature', s: 'Oracle FAQ', u: SRC_CONNECTOR_FAQ },
              { v: '10 Dec 2026', t: 'new privacy policy rules start for programs that make significant decisions', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
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
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER FIRST ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a NetSuite AI agent do for an Australian company?</h2>
            </div>
            <div className="factlist">
              <div className="fact">
                <div className="sec">§01</div>
                <p data-speakable="true">
                  <span className="stat">A NetSuite AI agent takes one repeated job, such as turning supplier invoices into
                  vendor bills, and does the reading, matching and data entry inside your NetSuite account.</span> It works
                  under its own role with limited permissions, saves each transaction as a draft or pending record, and
                  waits for a named person to approve it.
                </p>
              </div>
              <div className="fact">
                <div className="sec">§02</div>
                <p>
                  Australian NetSuite users get less of Oracle’s built-in AP help than US users. We read Oracle’s help
                  center on 29 October 2026: <a href={SRC_BILL_LIMITS} {...extLink}>Bill Capture is listed as available
                  only in the United States</a>, and <a href={SRC_IPA_LIMITS} {...extLink}>Intelligent Payment
                  Automation pays US vendors in USD</a>. An AP officer in Sydney or Perth reconciling AUD supplier bills
                  with GST and ABNs gets neither.
                </p>
              </div>
              <div className="fact">
                <div className="sec">§03</div>
                <p>
                  What Oracle does give Australian accounts is free: the <a href={SRC_CONNECTOR_FAQ} {...extLink}>AI
                  Connector Service</a> for Claude and ChatGPT, and the <a href={SRC_ANZ} {...extLink}>ANZ Localization
                  SuiteApp</a> for BAS, TPAR and Payment Times reporting. A custom agent sits on top of both. It
                  starts work when a document arrives, without anyone typing a prompt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT ORACLE SHIPS, CHECKED FOR AUSTRALIA ═══ */}
        <section className="section facts au-top" id="oracle-in-australia">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Checked on Oracle’s help center, 29 Oct 2026</div>
              <h2>What NetSuite’s own AI does and does not cover in Australia</h2>
              <p className="lead">
                Before we quote a custom agent, we check whether Oracle already ships the feature for your edition and
                country. Six rows decide most Australian projects.
              </p>
            </div>
            <div className="factlist">
              <div className="fact"><div className="sec">§01</div><div>
                <div className="factlabel">Oracle features, Australian status</div>
                <ul className="trigrows">
                  {ORACLE_ROWS.map((r) => (
                    <li key={r.m}><span className="m"><a href={r.u} {...extLink}>{r.m}</a></span><span className="n">{r.n}</span><span className="t">{r.t}</span></li>
                  ))}
                </ul>
              </div></div>
              <div className="fact"><div className="sec">§02</div><p>
                One Australian detail catches people out. Oracle’s <a href={SRC_ANZ_LIMITS} {...extLink}>ANZ
                Localization limitations page</a> says JCurve and JCurve Financials lack Server SuiteScript, and
                Oracle’s connector FAQ lists Server SuiteScript as a feature you must switch on. If your account
                started life on JCurve, confirm the edition before planning around the AI Connector.
              </p></div>
              <div className="fact"><div className="sec">§03</div><p>
                A second detail matters for finance teams. Oracle’s <a href={SRC_BAS} {...extLink}>BAS report
                page</a> says NetSuite calculates every box, and that a BAS it produces is for record-keeping only.
                Lodging stays with your accountant or tax agent. Our agents prepare cleaner inputs and never lodge.
              </p></div>
            </div>
          </div>
        </section>

        {/* ═══ JOBS ═══ */}
        <section className="section capabilities" id="jobs">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Where Australian NetSuite teams lose hours</div>
              <h2>Six NetSuite jobs an AI agent can take first</h2>
              <p className="lead">
                Each one starts with a document or a feed your team already handles by hand, and ends with a
                transaction a person approves in NetSuite.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">JOB‑{j.n}</span></div>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ APPROVAL SPLIT ═══ */}
        <section className="section facts au-top" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Who decides what</div>
              <h2>The agent drafts. Your team approves anything that moves money.</h2>
            </div>
            <div className="factlist">
              <div className="fact"><div className="sec">§01</div><p>
                Oracle already designs for this. Its <a href={SRC_SO_APPROVE} {...extLink}>sales order
                approval</a> rule says a Pending Approval order must be approved by someone with the right permissions
                before NetSuite processes it. We use the same statuses, so approvals happen on the NetSuite screens
                your controller already knows.
              </p></div>
              <div className="fact"><div className="sec">§02</div><div>
                <div className="factlabel">A typical split for an Australian NetSuite account</div>
                <ul className="trigrows">
                  <li><span className="m">Reading invoices, POs and tracking</span><span className="n">inbox, folders, channel feeds</span><span className="t">Automatic</span></li>
                  <li><span className="m">Draft vendor bills and sales orders</span><span className="n">saved as pending</span><span className="t">Draft only</span></li>
                  <li><span className="m">Customer emails and courier claims</span><span className="n">until the pilot proves accuracy</span><span className="t">Approve</span></li>
                  <li><span className="m">Supplier payments, credits, price changes</span><span className="n">AUD bank files stay with finance</span><span className="t">Always approve</span></li>
                  <li><span className="m">BAS lodgement, deleting records</span><span className="n">outside the agent’s job</span><span className="t">Never</span></li>
                </ul>
              </div></div>
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How a NetSuite agent project runs</div>
              <h2>Seven steps from your brief to a live NetSuite agent</h2>
              <p className="lead">
                Click a step for the detail and the deliverable. Every phase is priced on its own, so you decide after
                each one whether to carry on.
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
            headline={'Send us ten supplier invoices. See the NetSuite drafts.'}
            sub={'Strip the bank details, send ten documents your AP team has already entered, and we will show you the agent’s drafts beside your team’s entries before you sign anything.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ COMPARISON ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Four ways to add AI to NetSuite</div>
              <h2>Oracle’s connector, a SuiteFlow workflow, an AP tool or a custom agent</h2>
              <p className="lead">
                Each is the right answer for some job. Match the option to the work, then decide who builds it.
              </p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table">
              <table>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                    <th>AI Connector + Claude or ChatGPT</th>
                    <th>SuiteFlow or SuiteScript by your partner</th>
                    <th>Third-party AP tool</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Repeated jobs started by a document or feed</td><td>Questions and one-off updates</td><td>Fixed rules with clean inputs</td><td>Supplier invoices only</td></tr>
                  <tr><th scope="row">Starts without a prompt</th><td className="fj">Yes</td><td>No, a person asks</td><td>Yes</td><td>Yes</td></tr>
                  <tr><th scope="row">Reads messy PDFs and emails</th><td className="fj">Yes</td><td>When a person uploads them</td><td>No</td><td>Invoices, yes</td></tr>
                  <tr><th scope="row">Australian GST and ABN checks</th><td className="fj">Built to your tax codes</td><td>Depends on the prompt</td><td>If scripted</td><td>Check the vendor</td></tr>
                  <tr><th scope="row">Covers orders, couriers, marketplaces</th><td className="fj">Yes</td><td>Ad hoc</td><td>Case by case</td><td>No</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: code and repository</td><td>You, inside your AI plan</td><td>You, inside NetSuite</td><td>Licensed to you</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ PROOF + HOUSE TERMS + BRIEF ═══ */}
        <section className="section au-top" id="terms">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Work we have done</div>
              <h2>ERP agent work behind this page, and the terms we work on</h2>
              <p>
                Our ERP agent work covers RFQ automation, daily bookkeeping and the generation of purchase and sales
                orders, on NetSuite as well as Odoo, SAP Business One, ERPNext and custom-built ERPs. FactoryJet has served more than 500
                businesses since 2014, with more than a decade of commerce work.
              </p>
              <p>
                <b>Send us a brief or an RFP.</b> One page is enough: your NetSuite edition and subsidiaries, the job
                you want handled first, weekly volumes, and the systems around NetSuite, such as Shopify, Cin7 Core, a
                3PL, Xero in a smaller entity, or Afterpay and Stripe settlements. Add ten sample documents with
                sensitive details removed. We reply with questions, then a fixed price for the first phase.
              </p>
              <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
            </div>
            <div className="au-panel">
              <div className="eyebrow">Terms</div>
              <ol className="au-numlist">
                {TERMS.map((t) => (
                  <li key={t.t}><span><b>{t.t}.</b> {t.d}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ COST ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Market ranges, not our prices</div>
              <h2>What does a custom NetSuite AI agent cost in Australia?</h2>
              <p className="lead">
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity’s early-2026 Australian guide</a> puts a custom AI
                agent at A$5,000 to A$50,000 or more, and says enterprise-grade agents with several system
                integrations can exceed A$50,000. <a href={SRC_WVD} {...extLink}>Web Video Digital’s August 2026
                guide</a> gives A$15,000 to A$150,000 overall and places most small-to-medium projects between A$30,000 and A$80,000.
                Neither guide states whether GST is included, and neither is NetSuite-specific. FactoryJet quotes a
                fixed price in writing after a short scoping call.
              </p>
            </div>
            <div className="au-panel">
              <div className="eyebrow">What moves a NetSuite quote</div>
              <ul className="trigrows">
                <li><span className="m">Record types the agent writes to</span><span className="t">Reach</span></li>
                <li><span className="m">Subsidiaries, currencies and tax codes</span><span className="t">Setup</span></li>
                <li><span className="m">How varied the incoming documents are</span><span className="t">Handling</span></li>
                <li><span className="m">Systems outside NetSuite</span><span className="t">Integrations</span></li>
                <li><span className="m">Approval and audit log needs</span><span className="t">Control</span></li>
                <li><span className="m">Demo on your data</span><span className="t">Before you sign</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act 1988 and OAIC guidance</div>
              <h2>Australian privacy rules shape the agent’s NetSuite role</h2>
            </div>
            <div className="factlist">
              <div className="fact"><div className="sec">§01</div><p>
                NetSuite holds customer contacts, staff records and supplier bank details. The <a href={SRC_OAIC_AI} {...extLink}>OAIC’s
                guidance on commercially available AI</a> treats both the prompt and the answer as covered when either
                holds personal information, and as best practice advises against typing personal information into
                public AI chatbots. We map the fields each agent needs and leave the rest out of its role.
              </p></div>
              <div className="fact"><div className="sec">§02</div><p>
                Oracle’s <a href={SRC_RISKS} {...extLink}>risk and controls page</a> is plain that NetSuite cannot control
                how outside AI agents or MCP clients behave once data leaves the account. That is why we tell you, before
                building, which model provider will see which fields, and in which region it runs.
              </p></div>
              <div className="fact"><div className="sec">§03</div><p>
                From 10 December 2026, the <a href={SRC_OAIC_APP1} {...extLink}>new APP 1 rules</a> that followed the
                Privacy and Other Legislation Amendment Act 2024 make a privacy policy disclose where software uses personal
                information to reach decisions that significantly affect people. An agent that sets credit holds or customer pricing
                may fall in scope, so each agent ships with a written record of what it decides. We are not lawyers; your
                adviser makes the call.
              </p></div>
            </div>
          </div>
        </section>

        {/* ═══ RELATED ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Other pages for Australian NetSuite and finance teams</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>FactoryJet services</h3>
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
          heading="NetSuite AI agents: questions Australian finance and operations teams ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See a NetSuite agent draft your own supplier bills</h2>
              <p>
                Leave a name and a work email. Within 24 hours the founder writes back to set up a call on your NetSuite
                account, the first job worth handing over, and which documents the demo should run on.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-consulting">Start with AI consulting</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
