import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/netsuite-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every Oracle, HMRC, ICO and European Commission fact was read on the
      owner's own page on 2026-10-29 and links to that page through the SRC map
      below. docs.oracle.com answered a plain request that day. Re-read the page
      before changing a fact, and update READ_ON.
   2. No FactoryJet price. The only money figures are LeverX's UK market bands
      for an AI agent build, named as LeverX's. Never add a figure for what an
      agent costs to run or maintain.
   3. Experience claim, as confirmed by Bhavesh on 2026-10-09 for the US twin:
      FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and
      custom ERPs, on RFQ automation, daily bookkeeping, and purchase and sales
      order generation. No NetSuite client is named and no result is claimed.
      No partner status is claimed or denied.
   4. Client proof: GPSUK (Commerceflo) and Sow Easy (WooCommerce plus Odoo,
      build in progress per src/data/case-studies/index.ts) only, never shown
      as NetSuite or Shopify work, and with no invented metric.
   5. Structure mirrors /uk/shopify-xero-integration and /uk/ecommerce-consultant
      (imports, components, CSS, schema). The copy is written fresh for the UK.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions.
   7. Search data: DataForSEO, United Kingdom, 2026-10-29. "netsuite uk" 70 a
      month, "netsuite ai" 50, "netsuite partner uk" 50, "netsuite ap
      automation" 30, "netsuite making tax digital" 10. Question wording draws
      on the People Also Ask boxes for "netsuite making tax digital" and
      "netsuite automation" pulled that day. */

const CANONICAL = 'https://factoryjet.com/uk/netsuite-ai-agents';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'NetSuite AI Agents UK: VAT, MTD and Approvals | FactoryJet';
const H1 = 'NetSuite AI Agents for UK Companies: Supplier Bills, Sales Orders and Quotes Drafted in NetSuite, in Pounds and With VAT, Approved by Your Team';
const DESCRIPTION =
  'AI agents inside Oracle NetSuite for UK subsidiaries and UK-led groups: bills, orders and quotes in pounds with VAT, built around MTD and approvals. Demo first.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

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
  { name: 'NetSuite AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const NS = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help';
const SRC = {
  nsConnector: { label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service', url: `${NS}/article_7200233106.html` },
  nsFaq: { label: 'Oracle NetSuite Help Center: NetSuite AI Connector Service FAQ', url: `${NS}/article_4160616848.html` },
  nsPerms: { label: 'Oracle NetSuite Help Center: Required Features and Permissions', url: `${NS}/section_0714080625.html` },
  nsRisks: { label: 'Oracle NetSuite Help Center: Associated Risks, Controls, and Mitigation Strategies', url: `${NS}/article_9002708453.html` },
  nsConcurrency: { label: 'Oracle NetSuite Help Center: AI Connector Service and Concurrency Governance', url: `${NS}/section_0827103226.html` },
  nsBest: { label: 'Oracle NetSuite Help Center: Best Practices for MCP Standard Tools SuiteApp', url: `${NS}/article_1017113407.html` },
  nsGenAi: { label: 'Oracle NetSuite Help Center: Generative AI Feature Availability in NetSuite', url: `${NS}/article_3132707887.html` },
  nsBillLimits: { label: 'Oracle NetSuite Help Center: Bill Capture Considerations', url: `${NS}/article_0417034348.html` },
  nsIpa: { label: 'Oracle NetSuite Help Center: Intelligent Payment Automation', url: `${NS}/article_8155141819.html` },
  nsIpaLimits: { label: 'Oracle NetSuite Help Center: Intelligent Payment Automation Limitations', url: `${NS}/section_0530040548.html` },
  nsUkSetup: { label: 'Oracle NetSuite Help Center: United Kingdom Account Setup', url: `${NS}/section_156922707542.html` },
  nsMtd: { label: 'Oracle NetSuite Help Center: Making Tax Digital for VAT', url: `${NS}/section_1543299566.html` },
  nsMtdSetup: { label: 'Oracle NetSuite Help Center: Making Tax Digital for VAT Overview and Setup', url: `${NS}/section_1543833477.html` },
  nsEstimates: { label: 'Oracle NetSuite Help Center: Estimates', url: `${NS}/section_N1069662.html` },
  nsSoApprove: { label: 'Oracle NetSuite Help Center: Approving Sales Orders', url: `${NS}/section_N1218788.html` },
  ns3Way: { label: 'Oracle NetSuite Help Center: 3 Way Match Vendor Bill Approval Workflow', url: `${NS}/section_4096219721.html` },
  govVatRecords: { label: 'GOV.UK: Keeping VAT records', url: 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records' },
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  icoTransfers: { label: 'ICO: A brief guide to international transfers (UK GDPR)', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-transfers-a-guide/' },
  ecAiAct: { label: 'European Commission: AI Act, regulatory framework for AI', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  leverx: { label: 'LeverX: AI Agent Development Cost UK (published 4 October 2026)', url: 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema). */
const FAQ_CATEGORIES = [
  { key: 'connector', label: 'NetSuite AI and the connector' },
  { key: 'uk', label: 'UK subsidiaries, VAT and MTD' },
  { key: 'agents', label: 'Agents and the jobs they do' },
  { key: 'data', label: 'Data, roles and the law' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // NetSuite AI and the connector
  {
    category: 'connector',
    question: 'Does Oracle NetSuite use AI?',
    answer:
      'Yes, in several places. Oracle lists Text Enhance and Enriched Bank Data as available everywhere, in all languages NetSuite supports. Bill Capture is listed for the United States only. Separately, the NetSuite AI Connector Service lets an outside AI client such as Claude or ChatGPT work with your records. A custom agent is the third route, for a job with rules that belong to your business.',
  },
  {
    category: 'connector',
    question: 'What is the NetSuite AI Connector Service?',
    answer:
      'It is how Oracle lets an outside AI tool work inside your NetSuite account. Oracle says NetSuite has adopted the Model Context Protocol, an open standard for connecting AI applications to other systems, and supplies a SuiteApp called MCP Standard Tools for records, reports, saved searches and queries. You can also write your own tools. Everything runs under a NetSuite role your administrator chooses.',
  },
  {
    category: 'connector',
    question: 'How much does the NetSuite AI connector cost?',
    answer:
      'Oracle’s FAQ says the NetSuite AI Connector Service is not a paid feature and that MCP Standard Tools is a free SuiteApp. You may still need a paid plan with your AI provider: Oracle names Claude Pro and ChatGPT as the clients it currently supports. A custom agent built on top of the connector, or on NetSuite’s web services, is a separate project with its own fixed quote.',
  },
  {
    category: 'connector',
    question: 'Can we connect Claude or ChatGPT to our NetSuite account?',
    answer:
      'Yes. Oracle supports both, and its FAQ warns that on certain ChatGPT plans Developer Mode must be turned on before an MCP connector works. Your administrator enables the features, gives a non-administrator role the MCP Server Connection permission and OAuth 2.0 access tokens, and installs MCP Standard Tools. One detail trips people up: Oracle says the server address must end in /all, or the connection appears disconnected.',
  },
  {
    category: 'connector',
    question: 'Why will the AI connector not run under the Administrator role?',
    answer:
      'Oracle blocks it on purpose. Its help centre explains the reason as protection in case the outside AI tool is ever compromised: the connector refuses to start under Administrator, or under any role with full access to NetSuite features. You create a narrower role instead. We go further and give each agent its own role, which is also what Oracle’s risk page recommends.',
  },
  // UK subsidiaries, VAT and MTD
  {
    category: 'uk',
    question: 'Is NetSuite Bill Capture available in the UK?',
    answer:
      'Not as Oracle documents it today. Oracle’s Bill Capture page says the feature is available only in the United States, and its generative AI availability table adds that it is currently open to a limited number of accounts hosted in US data centres. A UK subsidiary that wants supplier invoices read and drafted as vendor bills needs another route, and a custom agent is one of them.',
  },
  {
    category: 'uk',
    question: 'Can a UK subsidiary use NetSuite Intelligent Payment Automation?',
    answer:
      'Not to pay its own suppliers in pounds. Oracle’s limitations page says only companies with US business subsidiaries can use the SuiteApp to pay vendors in the United States, that bill payments are in US dollars only, and that it works only in a production account. In a OneWorld group, the US entity can use it while the UK entity pays another way.',
  },
  {
    category: 'uk',
    question: 'How do UK companies pay suppliers from NetSuite?',
    answer:
      'Oracle’s United Kingdom setup guide points to the Electronic Bank Payments SuiteApp, which it says enables bank payments of vendor bills, employee expenses, commissions, customer refunds and customer payments within the UK. An agent can prepare the bills and flag the odd ones before the payment run. Approving the run and releasing the money stay with named people on your finance team.',
  },
  {
    category: 'uk',
    question: 'Does NetSuite support Making Tax Digital for VAT?',
    answer:
      'Yes. Oracle says the Making Tax Digital for VAT feature lets a UK VAT-registered company keep VAT records digitally, generate the VAT100 return and submit it to HMRC through the VAT (MTD) API. It needs the International Tax Reports SuiteApp. In a OneWorld account you pick the UK VAT-registered subsidiary during set-up. Accounts that file from the Country Tax Report page follow a separate MTD topic in Oracle’s help.',
  },
  {
    category: 'uk',
    question: 'Can we test MTD VAT submissions in a NetSuite sandbox?',
    answer:
      'No. Oracle says the Making Tax Digital for VAT feature does not support NetSuite test environments such as sandbox accounts, because the HMRC website is not equipped with a testing environment. So we test an agent’s effect on VAT a different way: in the sandbox we compare the tax codes and amounts it posted against what your team would have posted, before anything reaches a return.',
  },
  {
    category: 'uk',
    question: 'What is SuiteTax, and does it change how an agent works?',
    answer:
      'SuiteTax is NetSuite’s newer tax engine. Oracle’s UK setup guide says accounts without it use the International Tax Reports SuiteApp for the VAT100, while accounts with it use the Tax Reporting Framework, with UK reports in the United Kingdom Localization SuiteApp. The agent itself does not file anything. What changes is how it reads and checks tax codes, so we confirm which engine you run on the first call.',
  },
  {
    category: 'uk',
    question: 'Does adding an AI agent break the MTD digital link rules?',
    answer:
      'Not if the data moves by software. HMRC’s VAT Notice 700/22 says a digital link needs no manual intervention, such as copying information by hand, and lists API transfer and automated data transfer among the links it accepts. An agent that reads a supplier invoice and writes the vendor bill into NetSuite through its API is that kind of link. Ask your accountant to check the whole chain.',
  },
  {
    category: 'uk',
    question: 'Can our accountant still prepare and file the VAT return?',
    answer:
      'Yes, and nothing we build files a return. The agent drafts transactions and flags coding it is unsure of. Your finance team or accountant reviews them, runs the VAT100 in NetSuite and submits it. GOV.UK says VAT records must be kept for at least 6 years, or 10 under the One Stop Shop schemes, so the agent’s notes on each bill are kept with the record.',
  },
  // Agents and the jobs they do
  {
    category: 'agents',
    question: 'What can a NetSuite AI agent do for a UK finance team?',
    answer:
      'The jobs that start with a document arriving. Supplier invoices in pounds and euros turned into vendor bills that wait for approval. Customer purchase orders turned into sales orders. Requests for quote turned into estimates. Bank lines and open bills prepared for a payment run. VAT coding checked before the period closes. In each case the agent drafts and a named person approves.',
  },
  {
    category: 'agents',
    question: 'Can an AI agent create sales orders from emailed purchase orders?',
    answer:
      'Yes, under a role that allows it. The agent finds the customer, the delivery address and each item, checks the price on the order against NetSuite, and saves the sales order as pending. In Oracle’s words, NetSuite will not process an order in that state until a user with the right permissions approves it. Oracle also advises setting an External ID on every record a tool creates, which stops one email making two orders.',
  },
  {
    category: 'agents',
    question: 'Can an agent draft quotes for our UK trade customers?',
    answer:
      'Yes. NetSuite calls a customer quote an estimate. Oracle says you can create one, email it, set an expiry date, and convert it to a sales order, invoice or cash sale when the customer accepts. The agent reads the request, matches each line to an item, applies that account’s pricing in pounds with VAT, and saves the estimate. Your sales team checks and sends it.',
  },
  {
    category: 'agents',
    question: 'Can an agent match supplier invoices to purchase orders in NetSuite?',
    answer:
      'Yes, and NetSuite already gives it something to work with. Oracle’s 3 Way Match Vendor Bill Approval Workflow checks a bill against its purchase order and item receipt for differences in terms, location, quantity and amount, and sends any bill that fails those checks to its assigned supervisor. The agent creates the bill with the right purchase order attached, so that workflow can do its job.',
  },
  {
    category: 'agents',
    question: 'Is NetSuite better than Xero for a growing UK business?',
    answer:
      'It depends on the shape of the company: how many legal entities, currencies and warehouses you run, and who else in the group works in the same ledger. We do not sell licences for either, so we have no stake in the answer. Our part starts once the ledger is chosen. If you are on Xero, our Shopify Xero integration page covers that side. If you are on NetSuite, this page does.',
  },
  // Data, roles and the law
  {
    category: 'data',
    question: 'Can the AI see all of our NetSuite data?',
    answer:
      'No. Oracle says tools reach only what the connected role is allowed to see, cannot run as administrators, cannot call outside APIs and cannot run elevated scripts. It also says plainly that NetSuite cannot control how data is handled after it leaves NetSuite for the AI provider. So we give each agent a role with only the records its job needs, starting read-only.',
  },
  {
    category: 'data',
    question: 'Is sending NetSuite data to an AI provider a UK GDPR issue?',
    answer:
      'It can be, if personal information leaves the UK. The ICO calls this a restricted transfer, says every one must be covered by UK adequacy regulations, appropriate safeguards or an exception, and says the business that starts the transfer is responsible for the rules. Supplier contacts and customer names count. We map where each field goes before the build, so your data protection lead can sign it off.',
  },
  {
    category: 'data',
    question: 'Does the EU AI Act affect a UK company that sells into the EU?',
    answer:
      'Ask your counsel, because it depends on what the system does and who it faces. The European Commission says the Act became applicable on 2 August 2026, with some exceptions, and that its transparency rules took effect in August 2026. One example it gives: people using a chatbot should be made aware they are talking to a machine. Back-office agents that draft bills for staff are a different case from a customer chat.',
  },
  {
    category: 'data',
    question: 'How do we see what an AI agent did in NetSuite?',
    answer:
      'Oracle keeps an Execution Log for the connector on the integration record, and its FAQ says entries are kept for 21 days in a production account and 7 in a sandbox. Auditors usually want longer than that, so the agents we build also write their own log: what arrived, what the agent read in NetSuite, what it saved and who approved it.',
  },
  // Cost and working with us
  {
    category: 'working',
    question: 'How much does a NetSuite AI agent cost in the UK?',
    answer:
      'The clearest UK figures we found are from LeverX, in a guide dated 4 October 2026. It puts a single-workflow agent at £10,000 to £30,000 over 5 to 9 weeks, a multi-step agent with integrations at £30,000 to £80,000 over 10 to 18 weeks, and an enterprise multi-agent system at £80,000 to £200,000 or more. LeverX does not say whether VAT is included, and the bands are not NetSuite-specific. FactoryJet quotes a fixed price per phase in writing after a short scoping call.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For NetSuite that usually means a handful of supplier invoices or purchase orders your team has already keyed, processed by an early build of the agent in your sandbox, so your finance lead can compare its drafts, VAT codes included, line by line with what was actually posted.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who looks after it?',
    answer:
      'You own the code and the repository from day one. The AI and hosting can run in your own accounts at cost, with no markup. Defects are fixed inside the build price for a cover period we agree before work starts. Support after that is optional, each change is quoted and approved, and there is no monthly minimum. We can keep managing the servers, models and API connections if you want us to.',
  },
];

/* What Oracle ships, and where it reaches a UK entity. Each row restates
   Oracle's own pages as read on 2026-10-29. */
const SHIPS: { name: string; where: string; uk: string; sources: SrcKey[] }[] = [
  {
    name: 'NetSuite AI Connector Service',
    where: 'Not a paid feature. Claude Pro and ChatGPT named as supported',
    uk: 'Usable by UK staff for questions and lookups, under a non-administrator role. Answers only when a person asks.',
    sources: ['nsConnector', 'nsFaq'],
  },
  {
    name: 'MCP Standard Tools SuiteApp',
    where: 'Free SuiteApp',
    uk: 'Record, report, saved search and query tools. Oracle says AI clients usually handle about 5,000 rows per call.',
    sources: ['nsFaq'],
  },
  {
    name: 'Bill Capture',
    where: 'United States only, English, limited to some accounts in US data centres',
    uk: 'Not listed for UK entities. Supplier invoices need another route into NetSuite.',
    sources: ['nsBillLimits', 'nsGenAi'],
  },
  {
    name: 'Intelligent Payment Automation',
    where: 'US business subsidiaries, US dollars only, production accounts only',
    uk: 'Not for paying UK suppliers in pounds. A US sister company can use it.',
    sources: ['nsIpa', 'nsIpaLimits'],
  },
  {
    name: 'Electronic Bank Payments SuiteApp',
    where: 'Listed in Oracle’s UK setup guide',
    uk: 'Bank payments of vendor bills, expenses, commissions and refunds within the UK.',
    sources: ['nsUkSetup'],
  },
  {
    name: 'Enriched Bank Data and Text Enhance',
    where: 'Everywhere, all supported languages',
    uk: 'Available to UK accounts. Enriched matching runs up to 10,000 transactions per rule run.',
    sources: ['nsGenAi'],
  },
  {
    name: 'Making Tax Digital for VAT',
    where: 'UK VAT-registered companies, International Tax Reports SuiteApp',
    uk: 'Digital VAT records, VAT100 generation and submission to HMRC. Not supported in sandbox accounts.',
    sources: ['nsMtd', 'nsMtdSetup'],
  },
];

/* Jobs. One card each, bullets deliberately uneven. */
const JOBS: { n: string; title: string; body: string; items: string[]; note: string; sources: SrcKey[] }[] = [
  {
    n: '01',
    title: 'Supplier invoices into vendor bills',
    body: 'UK suppliers email PDFs in pounds, EU suppliers in euros. Each one becomes a draft vendor bill in NetSuite, held until someone approves it.',
    items: [
      'Reads the supplier, invoice number, VAT number, net, VAT and gross, and the VAT rate on each line',
      'Finds the purchase order and item receipt, so NetSuite’s 3 Way Match workflow can check them',
      'Flags a supplier whose bank details differ from the vendor record, and holds the bill',
      'Suggests the account, department and tax code from how your team coded that supplier before',
    ],
    note: 'This is the job Bill Capture does for US accounts. Oracle lists it for the United States only, so a UK subsidiary starts here.',
    sources: ['nsBillLimits', 'ns3Way'],
  },
  {
    n: '02',
    title: 'Sales orders from trade purchase orders',
    body: 'Trade customers send purchase orders by email or as spreadsheets. The agent drafts the sales order and attaches the original.',
    items: [
      'Matches the customer, the delivery address and each item, and flags a line it cannot match',
      'Checks the customer’s price against NetSuite and names the line where they differ',
      'Sets an External ID so the same email cannot create a second order',
    ],
    note: 'Saved as Pending Approval. Oracle says such an order must be approved by someone with the right permissions before NetSuite processes it.',
    sources: ['nsSoApprove', 'nsBest'],
  },
  {
    n: '03',
    title: 'Quotes as NetSuite estimates',
    body: 'A buyer asks for prices on 40 lines. The agent drafts the estimate from your items and that account’s pricing, with VAT shown.',
    items: [
      'Reads the request whether it is typed in the email, a PDF or a spreadsheet',
      'Applies account pricing and sets an expiry date on the estimate',
      'Leaves the send to your sales team',
      'Lists any line it could not price, with the reason',
    ],
    note: 'Oracle says an accepted estimate can be converted to a sales order, invoice or cash sale, so nothing is re-keyed when the customer says yes.',
    sources: ['nsEstimates'],
  },
  {
    n: '04',
    title: 'Payment run preparation',
    body: 'Before each UK payment run, the agent lists what is due and what looks wrong.',
    items: [
      'Bills due in the run, grouped by supplier and currency',
      'Duplicates by supplier, amount and invoice number',
      'Bills still waiting on a receipt or an approval',
    ],
    note: 'The agent pays no one. Oracle’s risk page uses making payments as its example of what a misled agent could do without the user meaning it to, and puts paying on its list of high-impact actions a person should confirm.',
    sources: ['nsUkSetup', 'nsRisks'],
  },
  {
    n: '05',
    title: 'VAT coding checks before the period closes',
    body: 'A week before the VAT return, the agent reads the period’s transactions and lists the ones whose tax code looks out of line.',
    items: [
      'A zero-rated code on a supplier who normally charges 20%',
      'An EU purchase with no reverse charge code',
      'A sales invoice missing a tax code',
      'A bill whose VAT does not equal net times rate, to the penny',
      'Credits posted at a different rate from the invoice they reverse',
    ],
    note: 'Your finance team reviews the list, corrects what needs correcting, and runs and submits the VAT100 from NetSuite as it does today.',
    sources: ['nsMtd', 'govVatRecords'],
  },
];

/* Guardrails. Who keeps each one. */
const GUARDS: { rule: string; keeper: string; note: string; sources: SrcKey[] }[] = [
  { rule: 'No Administrator role', keeper: 'NetSuite enforces', note: 'The connector will not run under Administrator or a full-permission role.', sources: ['nsPerms'] },
  { rule: 'A log of every call', keeper: 'NetSuite enforces', note: 'The Execution Log is kept 21 days in production and 7 days in a sandbox.', sources: ['nsFaq'] },
  { rule: 'Shared API capacity', keeper: 'NetSuite enforces', note: 'The connector uses whatever concurrency your other integrations have not been allocated.', sources: ['nsConcurrency'] },
  { rule: 'One role per agent, read-only first', keeper: 'We set up', note: 'Oracle advises separate roles per tool and read-only or low-impact tools during first evaluation.', sources: ['nsRisks'] },
  { rule: 'An External ID on every record', keeper: 'We set up', note: 'Oracle’s best practice when a tool creates a record. It stops duplicates.', sources: ['nsBest'] },
  { rule: 'Our own log, kept longer', keeper: 'We set up', note: 'What arrived, what was read, what was saved and who approved it, kept for your audit period.', sources: ['govVatRecords'] },
  { rule: 'Approval before anything is processed', keeper: 'Your team keeps', note: 'Bills, orders and estimates are saved as pending. Your approval set-up decides who signs off.', sources: ['nsSoApprove', 'ns3Way'] },
  { rule: 'Paying and filing stay with people', keeper: 'Your team keeps', note: 'Payment runs and the VAT100 submission are never handed to an agent.', sources: ['nsRisks', 'nsMtd'] },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'NetSuite AI Agent Development UK',
      serviceType:
        'AI agents for Oracle NetSuite: supplier invoice to vendor bill, sales orders from purchase orders, estimates from RFQs, payment run preparation, VAT coding checks, AI Connector Service and MCP set-up, support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet plans, builds, tests and supports agents that work inside Oracle NetSuite for UK subsidiaries and UK-headquartered NetSuite users. Agents read supplier invoices, customer purchase orders and requests for quote, look up items, prices, suppliers and tax codes in NetSuite, and save vendor bills, sales orders and estimates in pounds with VAT for a named person to approve. Work covers a role made for each agent, sandbox testing, a period running beside the finance team, launch and optional support.',
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
      datePublished: PUBLISHED,
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'For UK subsidiaries and UK-led NetSuite groups: what Oracle’s AI reaches in the UK, where Bill Capture and payment automation stop, and agents that draft bills, orders and quotes in pounds with VAT for your team to approve.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet, AI agents inside Oracle NetSuite for UK companies' }],
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

export default function NetSuiteAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-netsuite-ai-agents" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />NetSuite AI Agents UK</span>
                  <span className="chip">GBP, VAT, MTD</span>
                  <span className="chip">OneWorld Subsidiaries</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 580 }}>
                  You run the UK arm of a group on NetSuite OneWorld, or your UK business moved onto NetSuite from
                  Sage 200 or Xero. Supplier invoices still arrive as PDFs, trade orders as emails, and orders from
                  Shopify, Amazon.co.uk or Linnworks pass through on their way to the ledger. FactoryJet builds AI
                  agents that turn those documents into vendor bills, sales orders and estimates in NetSuite, coded
                  for UK VAT, and saved for your team to approve.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 580 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 580 }}>
                  <HeroInlineForm region="uk" source="uk_netsuite_ai_agents_hero" service="NetSuite AI Agents" submitLabel="See a demo on my data" />
                </div>
                <p style={{ fontSize: 13.5, color: T.n400, marginTop: 10, maxWidth: 580 }}>
                  Working software on your own data before you sign. Founder replies within 24 hours.
                </p>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">What Oracle documents for a UK entity</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Bill Capture</div><div className="scorecard-note">reads vendor bills with AI</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>US only</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Intelligent Payment Automation</div><div className="scorecard-note">pays vendors through BILL</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>USD only</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Making Tax Digital for VAT</div><div className="scorecard-note">VAT100 to HMRC, no sandbox</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Built in</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">AI Connector Service</div><div className="scorecard-note">Claude or ChatGPT, non-admin role</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Not paid</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Agent built for your rules</div><div className="scorecard-note">drafts in pounds, person approves</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Our job</div>
                </div>
                <Sources ids={['nsBillLimits', 'nsIpaLimits', 'nsMtdSetup', 'nsFaq']} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Can a UK company use AI agents inside NetSuite?</span>
              <p>
                Yes. Oracle’s AI Connector Service lets Claude or ChatGPT work with NetSuite records under a limited
                role, and Oracle says it is not a paid feature. Two of Oracle’s finance AI tools stop at the US
                border: Bill Capture is listed for the United States only, and Intelligent Payment Automation pays
                in US dollars only. A UK subsidiary that wants supplier invoices and orders drafted automatically
                usually needs a custom agent, built around VAT, Making Tax Digital and its own approvals.
              </p>
            </div>
            <Sources ids={['nsFaq', 'nsBillLimits', 'nsIpaLimits']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                <b>OneWorld</b> is the NetSuite edition for groups with several companies, each set up as a{' '}
                <b>subsidiary</b> with its own currency and tax. The <b>VAT100</b> is the UK VAT return as NetSuite
                names it. <b>MCP</b>, the Model Context Protocol, is the open standard Oracle adopted so AI tools
                can call NetSuite. An <b>agent</b> here means software that does one office job, from a document
                arriving to a draft transaction waiting for a person.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              If a US parent chose NetSuite and set it up around US habits, the UK team inherits a ledger where two
              of Oracle’s finance AI tools do not reach it. Moving system is rarely the answer. One agent on one job,
              built for how a UK finance team codes, approves and files, usually is.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: 'US only', t: 'is where Oracle lists Bill Capture, its AI that reads vendor bills', s: 'Oracle, Bill Capture considerations', u: SRC.nsBillLimits.url },
                { v: '6 years', t: 'is the minimum GOV.UK sets for keeping VAT records, 10 under the One Stop Shop schemes', s: 'GOV.UK, Keeping VAT records', u: SRC.govVatRecords.url },
                { v: '21 days', t: 'is how long Oracle keeps the AI connector’s Execution Log in production', s: 'Oracle, AI Connector FAQ', u: SRC.nsFaq.url },
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

        {/* 4. WHAT ORACLE SHIPS, AND WHAT REACHES A UK ENTITY */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Check what you already have</span>
              <h2>What Oracle ships in NetSuite, and which parts reach a UK subsidiary</h2>
              <p className="lead mt-4">
                We read Oracle’s help centre for each feature on {READ_ON} before writing this table. The first
                question on every scoping call is the same: can something already in your account do the job? If it
                can, we say so and the project gets smaller.
              </p>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="NetSuite AI features and UK availability" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Oracle feature</th>
                    <th>Where Oracle says it works</th>
                    <th className="fj">What it means for a UK entity</th>
                  </tr>
                </thead>
                <tbody>
                  {SHIPS.map((s) => (
                    <tr key={s.name}>
                      <td className="feat">{s.name}</td>
                      <td>{s.where}</td>
                      <td className="fj">{s.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Sources ids={['nsConnector', 'nsFaq', 'nsBillLimits', 'nsGenAi', 'nsIpa', 'nsIpaLimits', 'nsUkSetup', 'nsMtd', 'nsMtdSetup']} />
            <p className="mt-6" style={{ maxWidth: 800 }}>
              The gap sits in accounts payable. A US sister company can have bills read by Bill Capture and paid
              through BILL. The UK company next to it in the same OneWorld account keys its supplier invoices by
              hand and pays through Electronic Bank Payments. That gap is where a custom agent earns its place. For
              supplier bills on other UK ledgers too, see our{' '}
              <a href="/uk/accounts-payable-automation" style={inlineLink}>UK accounts payable automation</a> page.
            </p>
          </div>
        </section>

        {/* 5. JOBS */}
        <section className="sec-lg" id="jobs">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Five jobs</span>
              <h2>Five NetSuite jobs we build agents for, in the order UK finance teams usually ask</h2>
              <p className="lead mt-4">
                Each agent does one job under one NetSuite role. It drafts, a named person approves, and nothing is
                paid or filed by software.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {JOBS.map((j) => (
                <li key={j.n} className="card">
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 14, color: T.small }}>{j.n}</span>
                  <h3 className="mt-2">{j.title}</h3>
                  <p className="mt-4">{j.body}</p>
                  <ul className="scope-list yes-list mt-4">
                    {j.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <p className="mt-4" style={{ fontSize: 14 }}>{j.note}</p>
                  <Sources ids={j.sources} />
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ maxWidth: 800 }}>
              The same agents work when the document comes from a system rather than an inbox: a Shopify or
              Amazon.co.uk order export, a Linnworks or Mintsoft dispatch file, a Brightpearl stock report, or a
              Stripe, GoCardless, Klarna or Clearpay settlement. For trade storefronts that feed NetSuite, see{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a>.
            </p>
          </div>
        </section>

        {/* 6. VAT AND MTD */}
        <section className="sec-lg dot-grid" id="vat-and-mtd">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">VAT and Making Tax Digital</span>
                <h2>Where an agent sits in Making Tax Digital for VAT</h2>
                <div className="stack mt-6">
                  <p>
                    NetSuite already handles the HMRC end. Oracle says its Making Tax Digital for VAT feature keeps
                    VAT records digitally, generates the VAT100 and submits it through HMRC’s VAT (MTD) API, and that
                    it can also take a CSV of consolidated VAT records from NetSuite and other systems. It needs the
                    International Tax Reports SuiteApp, and in a OneWorld account you set it up on the UK
                    VAT-registered subsidiary.
                  </p>
                  <p>
                    The agent works further back, where a document becomes a transaction. HMRC’s VAT Notice 700/22
                    says that once data is in the software that keeps your electronic account, any further transfer
                    must use digital links, and it lists API transfer and automated data transfer among the links it
                    accepts. An agent that writes a vendor bill into NetSuite through its API keeps that chain
                    digital. Retyping a PDF does not.
                  </p>
                  <p>
                    One catch for testing. Oracle says the MTD feature does not run in sandbox accounts, because HMRC
                    has no test environment for it. So we never test an agent by submitting a return. We test it by
                    comparing the tax code and VAT amount on each transaction it drafted against what your team
                    posted for the same document.
                  </p>
                  <p>
                    Whether a given set-up meets the rules is your accountant’s call. We write down the data path, from
                    the supplier’s PDF to the VAT100 box, so they can check it.
                  </p>
                </div>
                <Sources ids={['nsMtd', 'nsMtdSetup', 'govNotice', 'govVatRecords']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Who does what at VAT time</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Reads the supplier invoice</div><div className="scorecard-note">net, VAT, rate, VAT number</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Agent</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Drafts the vendor bill</div><div className="scorecard-note">with a suggested tax code</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Agent</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Approves the bill</div><div className="scorecard-note">your approval workflow</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Your team</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Lists odd tax codes before close</div><div className="scorecard-note">a week before the return</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Agent</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Runs and submits the VAT100</div><div className="scorecard-note">from NetSuite to HMRC</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Your team</div></div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send five supplier invoices your team has already keyed. We show you the agent’s drafts.'}
          sub={'Tell us your NetSuite edition, whether you run SuiteTax, and which job hurts most. On a short call we say whether Oracle’s own tools cover it, and if not, we run a first version on your documents in your sandbox before you sign anything.'}
          label={'See a demo on my data'}
        />

        {/* 7. GUARDRAILS */}
        <section className="sec-lg" id="guardrails">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Roles, logs and approvals</span>
              <h2>Eight guardrails on every NetSuite agent, and who keeps each one</h2>
              <p className="lead mt-4">
                Three are enforced by NetSuite whatever we do. Three we set up. Two stay with your team for good.
              </p>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="Guardrails on a NetSuite agent" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Guardrail</th>
                    <th className="fj">Who keeps it</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {GUARDS.map((g) => (
                    <tr key={g.rule}>
                      <td className="feat">{g.rule}</td>
                      <td className="fj">{g.keeper}</td>
                      <td>{g.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Sources ids={['nsPerms', 'nsFaq', 'nsConcurrency', 'nsRisks', 'nsBest', 'nsSoApprove', 'ns3Way']} />

            <div className="col-2 mt-12">
              <div className="card">
                <h3>UK GDPR: where the data goes</h3>
                <p className="mt-4">
                  Oracle says NetSuite cannot control how data is handled once it leaves NetSuite for the AI
                  provider. If supplier contacts or customer names go to a provider outside the UK, the ICO calls that
                  a restricted transfer: it must be covered by UK adequacy regulations, appropriate safeguards or an
                  exception, and the business that starts it is responsible. We map each field the agent sends
                  before the build, for your data protection lead to sign off.
                </p>
                <Sources ids={['nsFaq', 'icoTransfers']} />
              </div>
              <div className="card">
                <h3>EU AI Act: if you sell into the EU</h3>
                <p className="mt-4">
                  The European Commission says the AI Act became applicable on 2 August 2026, with exceptions, and
                  that its transparency rules took effect in August 2026. Its example is a chatbot: people should be
                  made aware they are talking to a machine. An agent that drafts vendor bills for your own staff is a
                  different case from one that answers EU customers. Your counsel decides which applies.
                </p>
                <Sources ids={['ecAiAct']} />
              </div>
            </div>
          </div>
        </section>

        {/* 8. EXPERIENCE AND UK PROOF */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who builds it</span>
                <h2>ERP work behind this page, and two UK trade businesses we work with</h2>
                <div className="stack mt-6">
                  <p>
                    FactoryJet has worked on NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, on RFQ
                    automation, daily bookkeeping, and purchase and sales order generation. The same team designs
                    the agent, builds it, runs it beside your staff and supports it after launch.
                  </p>
                  <p>
                    Two UK trade businesses we work with, on other platforms. <b>GPSUK</b> sells promotional
                    products to business buyers through a trade storefront we built on Commerceflo, where buyers log
                    in and see their own account prices. <b>Sow Easy</b>, a UK wholesale distributor, is getting a
                    WooCommerce trade store that reads stock, pricing and SKUs from Odoo. That build is in progress
                    and being tested on staging.
                  </p>
                </div>
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  Read the <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>GPSUK case study</a>{' '}
                  and the <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Sow Easy case study</a>.
                  For agents on other UK systems, see{' '}
                  <a href="/uk/ai-agents" style={inlineLink}>AI agent development in the UK</a>. US teams can read our{' '}
                  <a href="/services/netsuite-ai-agents" style={inlineLink}>NetSuite AI agents page for the US</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Systems UK NetSuite users connect</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Shops and marketplaces</div><div className="scorecard-note">Shopify, Amazon.co.uk, eBay UK, OnBuy, ManoMano</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Orders</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Stock and dispatch</div><div className="scorecard-note">Linnworks, Brightpearl, Mintsoft</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Stock</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Couriers</div><div className="scorecard-note">Royal Mail, DPD, Evri</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Costs</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Payments</div><div className="scorecard-note">Stripe, GoCardless, Klarna, Clearpay</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Settlements</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Ledgers before NetSuite</div><div className="scorecard-note">Sage 50, Sage 200, Xero, QuickBooks</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>History</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build a NetSuite agent for a UK team, in seven steps</h2>
              <p className="lead mt-4">
                Your NetSuite administrator is involved in steps two and four. Your finance lead signs off steps
                three and six.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read one month of the documents', d: 'We take a month of the supplier invoices, purchase orders or RFQs the job covers and list every variation: currencies, VAT rates, credit notes, missing PO numbers, multi-page PDFs.' },
                { n: '02', t: 'Check what Oracle already gives you', d: 'With your administrator we check your edition, SuiteTax or not, the SuiteApps installed and what the AI connector can already answer. Anything Oracle covers comes off the scope.' },
                { n: '03', t: 'Write the rules down', d: 'Which account, department and tax code each kind of line takes, who approves what, and what the agent does when it is unsure. Your finance lead signs the page.' },
                { n: '04', t: 'Create one role for the agent', d: 'A NetSuite role with only the records the job needs, read-only to start. Never Administrator, which Oracle blocks for the connector anyway.' },
                { n: '05', t: 'Show it on your own data, before a contract', d: 'A first version runs in your sandbox on documents your team has already keyed, so you compare its drafts with what was posted, line by line.' },
                { n: '06', t: 'Run it beside your team', d: 'For an agreed period the agent drafts and your team still keys. We compare both every day, VAT codes included, and change the rules where they differ.' },
                { n: '07', t: 'Go live, keep the logs, stay on', d: 'The agent moves to production with its own log kept for your audit period. You own the code. Support after the cover period is your choice.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 10. COST, TERMS AND THE BRIEF */}
        <section className="sec-lg dot-grid" id="cost-and-terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Cost and terms</span>
                <h2>What UK firms charge for an AI agent build, and how we price ours</h2>
                <div className="stack mt-6">
                  <p>
                    LeverX, writing for UK buyers on 4 October 2026, sorts agent builds into three bands. One workflow:
                    £10,000 to £30,000, over 5 to 9 weeks. Several steps across several systems: £30,000 to £80,000,
                    over 10 to 18 weeks. A group of agents working together across an enterprise: £80,000 to £200,000
                    or more, over 5 to 9 months. LeverX calls them indicative market benchmarks. It does not say whether
                    VAT is included, and the bands cover every kind of agent, not only NetSuite.
                  </p>
                  <p>
                    FactoryJet quotes a fixed price per phase in writing after a short scoping call. Each phase is
                    scoped, priced and signed on its own, so the first one can be a single agent on a single job.
                  </p>
                </div>
                <Sources ids={['leverx']} />
                <h3 className="mt-8">Our terms</h3>
                <ul className="scope-list yes-list mt-4" style={{ maxWidth: 600 }}>
                  <li><b>You own the code and the repository from day one.</b></li>
                  <li><b>AI and hosting can run in your own accounts at cost,</b> with no markup.</li>
                  <li><b>Defects are fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved, with no monthly minimum.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Send us your brief or RFP</span>
                <p style={{ fontSize: 14.5 }}>
                  If you have written a brief or run a formal RFP, send it. Attach it in the second step of the form
                  as a PDF or Word file. These five points get you the most precise answer:
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">NetSuite edition and subsidiaries</div><div className="scorecard-note">OneWorld or not, which entities are UK</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tax engine</div><div className="scorecard-note">SuiteTax or International Tax Reports</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The job and its monthly volume</div><div className="scorecard-note">invoices, orders or RFQs a month</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your approval set-up</div><div className="scorecard-note">who signs off what, and the limits</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your NetSuite administrator</div><div className="scorecard-note">in-house or your partner, welcome on the call</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
                <div className="mt-6">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
            </div>
            <p className="mt-8" style={{ maxWidth: 800 }}>
              Not sure an agent is the right first step? Our{' '}
              <a href="/uk/ai-consulting" style={inlineLink}>UK AI consulting</a> work starts with the question of
              which job to automate first. If your books are in Xero rather than NetSuite, see{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>.
            </p>
          </div>
        </section>

        {/* 11. SOURCES */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every Oracle feature, limit and requirement on this page was read on Oracle’s own help centre on
                that day, and every tax and data rule on the HMRC, GOV.UK, ICO or European Commission page below.
                Oracle releases NetSuite updates through the year, so open the linked page before you act on one.
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

        {/* 12. FAQ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>NetSuite AI questions from UK finance teams and their administrators</h2>
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

        {/* 13. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>See a NetSuite agent draft your own supplier invoices</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to set up a short call about
              your NetSuite account, your UK entities and the job you want off your team’s desk. You leave knowing
              whether Oracle’s own tools cover it or an agent is the right job.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See UK AI agents</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
