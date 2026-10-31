import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/crm-ai-agents';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'CRM AI Agents Australia | HubSpot & Salesforce | FactoryJet';
const H1 = 'CRM AI Agents Australia: HubSpot and Salesforce Agents for Your Sales Team';
const DESCRIPTION =
  'AI agents built into HubSpot or Salesforce for Australian sales teams: lead scoring, deal updates, Xero and MYOB data, and Spam Act checks. You own the code.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'CRM AI Agents', url: CANONICAL },
];

/* ─── External sources, each fetched and read 29 Oct 2026 ──────────── */
// Federal Register of Legislation, Spam Act 2003, latest compilation (10 March 2016).
// s5(1): an electronic message is sent to an address connected with an email, instant
// messaging or telephone account; s5(5): a voice call over a standard telephone service
// is not an electronic message. s16(1)-(2): no commercial electronic message with an
// Australian link unless the account-holder consented. s17(1): message must clearly and
// accurately identify who authorised it, with contact information "reasonably likely to
// be valid for at least 30 days after the message is sent". s18(1): functional unsubscribe
// facility, "clear and conspicuous", able to receive unsubscribe messages "at all times
// during a period of at least 30 days after the message is sent". Schedule 2 cl 2: consent
// is express, or reasonably inferred from conduct and business relationships. Sch 2 cl 4:
// consent "may not be inferred from the mere fact that the relevant electronic address has
// been published", except a conspicuously published role or employee address, for messages
// relevant to that person's work-related business, functions or duties, where the publication
// is not accompanied by a statement that the account-holder does not want unsolicited commercial
// electronic messages at that address (cl 4(1)(c), from cl 4 as known; not re-fetched 29 Oct 2026). Sch 2 cl 6:
// withdrawal of consent "takes effect at the end of the period of 5 business days".
const SRC_SPAM_ACT = 'https://www.legislation.gov.au/C2004A01214/latest/text';
// OAIC APP guidelines chapter 7: APP 7 restricts using personal information for direct
// marketing and requires a simple opt-out; "APP 7 does not apply to the extent that the
// Do Not Call Register Act 2006, the Spam Act 2003" apply (para 7.8; the Do Not Call Register Act is also named at para 7.48). Fetched 29 Oct 2026.
const SRC_OAIC_APP7 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-7-app-7-direct-marketing';
// OAIC APP guidelines chapter 1: "From 10 December 2026, APP 1.7 requires APP entities to
// include the information outlined in APP 1.8" for computer programs that make, or do
// something substantially and directly related to making, decisions that could reasonably
// be expected to significantly affect an individual's rights or interests. Fetched 29 Oct 2026.
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// HubSpot data centres page: locations European Union, Canada, Australia, United States
// (West), United States (East); existing paid customers can migrate their data to a new
// data center through account settings at no charge. Fetched 29 Oct 2026.
const SRC_HUBSPOT_DC = 'https://www.hubspot.com/data-centers';
// Australian Business Register, ABN Lookup web services: free of charge; register and
// accept the agreement to receive an authentication GUID; uses include ABN validation and
// keeping stored ABN details current. Fetched 29 Oct 2026.
const SRC_ABN_LOOKUP = 'https://abr.business.gov.au/Tools/WebServices';
// HubSpot AI product page: names Agent Hub ("HubSpot's home for every agent running your
// go-to-market"), Agent Builder, and agents incl. Prospecting Agent, Customer Agent, Data Agent.
// Fetched 31 Oct 2026.
const SRC_HUBSPOT_AI = 'https://www.hubspot.com/products/artificial-intelligence';
// Salesforce Agentforce page: "the AI agent platform"; "MuleSoft API connectors to connect Agents
// to any system". Fetched 31 Oct 2026.
const SRC_AGENTFORCE = 'https://www.salesforce.com/agentforce/';
/* Build-only market ranges, fetched and read 29 Oct 2026. Flowtivity, "How Much Does an AI Agent
   Cost in 2026? Australian Pricing Guide" (5 March 2026), AUD, "early 2026": "Lead qualification
   and follow-up" "$8,000 - $20,000"; multi-step agents covering lead qualification and CRM updates
   "sit in the $15,000 to $35,000 range". Web Video Digital (5 August 2026): "between AUD 15,000 and
   AUD 150,000"; small-to-medium projects "AUD 30,000 to AUD 80,000". Neither states a GST basis.
   Never add running, retainer or model-usage figures (Bhavesh, 11 Oct 2026). */
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'CRM agents explained' },
  { key: 'jobs', label: 'What the agent does' },
  { key: 'rules', label: 'Spam Act, privacy and data' },
  { key: 'process', label: 'Brief, demo and timing' },
  { key: 'cost', label: 'Cost and ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What are AI agents in a CRM system?',
    answer: 'A CRM AI agent is software that reads records in HubSpot or Salesforce, works out the next step and then does it, or suggests it to a person. Typical jobs are scoring a new lead, proposing a deal stage, logging an email thread to the right account and drafting a follow-up. An AI model handles the reading and writing. Written rules decide which fields it may change and which actions wait for your rep.' },
  { category: 'basics', question: 'How do you integrate AI agents with a CRM?',
    answer: 'Through the CRM’s official API, with a login of the agent’s own. In HubSpot the agent runs as an app installed in your portal with only the scopes it needs. In Salesforce it signs in as its own integration user, with a permission set (the list of objects and fields it may touch) that your administrator approves. We agree, field by field, what it may write. Everything else stays read-only, and every change is logged with the old value, the new value and the reason.' },
  { category: 'basics', question: 'Does HubSpot have an AI agent?',
    answer: 'It has several. HubSpot’s AI product page lists a Prospecting Agent, a Customer Agent and a Data Agent among others, plus tools for building your own, all managed from what HubSpot calls Agent Hub. These work well when the job stays inside HubSpot. A custom agent fits when the job also needs Xero, MYOB, Cin7 or a second CRM before it acts.',
    links: [{ href: SRC_HUBSPOT_AI, label: 'HubSpot: AI agents and Agent Hub' }] },
  { category: 'basics', question: 'Can Salesforce integrate with AI?',
    answer: 'Yes, two ways. Salesforce sells Agentforce, which it calls its AI agent platform, and its page says MuleSoft API connectors can link those agents to other systems. Or an outside agent signs in to your org as an integration user and works through the Salesforce API. Pick Agentforce for work that lives in Salesforce. A custom agent suits jobs that start in HubSpot or need the ledger first.',
    links: [{ href: SRC_AGENTFORCE, label: 'Salesforce: Agentforce' }] },
  { category: 'basics', question: 'What is an AI CRM, and do we need a new one?',
    answer: 'An AI CRM is a CRM with AI built in to log activity, score leads and draft emails. You rarely need to switch. HubSpot and Salesforce already ship AI features, and an agent can add the rest to the CRM you run today. The CRM stays the record your managers report from. What changes is who keeps it current: the agent logs the call and proposes the next stage, and reps keep the relationship.' },
  { category: 'basics', question: 'Do we need a CRM agent or an AI SDR?',
    answer: 'An AI SDR goes after new business: first emails to prospects, fast replies to inbound enquiries and meetings booked into a rep’s calendar. A CRM agent maintains what you already hold, so contacts, companies and deals stay correct and keep moving. Both draft or send commercial messages, so both need consent, sender and unsubscribe checks under the Spam Act. Australian teams often run the pair from one shared set of scoring rules.' },

  // ── Jobs ──
  { category: 'jobs', question: 'Which sales tasks suit a CRM agent first?',
    answer: 'Start where reps lose the most hours each week. For most Australian B2B teams that is one of four jobs: scoring inbound leads from web forms and trade show lists, logging emails and calls to the right deal, keeping deal stages honest before the Monday pipeline meeting, or drafting follow-ups after a quote. We build one job first, measure it against your own CRM numbers, then add the next.' },
  { category: 'jobs', question: 'Can the agent qualify leads against our Australian ideal customer profile?',
    answer: 'It can. Your sales leader writes the profile in plain English, such as wholesale buyers in Victoria and New South Wales with more than 20 staff, or distributors already stocking a named brand. For each new contact the agent compares the enquiry, the buyer’s own website and any earlier emails with that profile. It assigns a status and an owner, and adds a two-line reason the rep reads before calling.' },
  { category: 'jobs', question: 'Can the agent check ABNs on new company records?',
    answer: 'The Australian Business Register offers free ABN Lookup web services once you register and receive an access key. The agent can validate the ABN a buyer types into a form and keep stored ABN details on the company record current. A record whose ABN fails the check goes to a review list instead of straight to a rep or to Xero.',
    links: [{ href: SRC_ABN_LOOKUP, label: 'ABR: ABN Lookup web services' }] },
  { category: 'jobs', question: 'Can it bring Xero or MYOB invoice data into HubSpot or Salesforce?',
    answer: 'Yes, read-only by default. Before a renewal or upsell call, the agent can show the account’s open and overdue invoices from Xero, MYOB Business or MYOB Acumatica on the company record, with the last payment date. Account managers stop ringing customers who are two invoices behind with a new offer. If you already run a HubSpot Xero integration app, the agent reads what it syncs instead of building a second copy. Writing back to the ledger, such as raising a draft invoice, needs its own approval rule.' },
  { category: 'jobs', question: 'We run HubSpot for marketing and Salesforce for sales. Can one agent handle both?',
    answer: 'One agent can. A common Australian set-up is HubSpot for marketing and Salesforce for the sales team. The agent picks up campaign activity from HubSpot and writes it to the paired Salesforce lead or opportunity through one shared ID, which keeps the two records matched. Before any build we write down which system owns each field. That stops the two CRMs overwriting each other at two in the morning.' },
  { category: 'jobs', question: 'Will the agent send emails or SMS to customers on its own?',
    answer: 'Not unless you switch it on. By default it drafts the email inside the CRM and a rep reviews and sends it. Later, a team may switch on automatic sending for one narrow message, like confirming a meeting a contact booked on your site. Any automatic send first checks consent and unsubscribe status, includes your sender details, and is logged on the record.' },

  // ── Rules ──
  { category: 'rules', question: 'Does the Spam Act 2003 apply to messages an AI agent drafts or sends?',
    answer: 'Yes. The Act applies to anyone who sends, or causes to be sent, a commercial electronic message with an Australian link, and it covers email, SMS and instant messages. Using software does not change who is responsible. Each message needs consent, clear details of who authorised it and how to contact them, and a working unsubscribe option. We build those three checks into the agent before it drafts anything.',
    links: [{ href: SRC_SPAM_ACT, label: 'Spam Act 2003, Federal Register of Legislation' }] },
  { category: 'rules', question: 'Can the agent email contacts we found on a company website?',
    answer: 'Only in a narrow case. Under Schedule 2 of the Spam Act, consent cannot be inferred only because an address was published. The exception is an address published conspicuously for a person or a role, where the message is relevant to that person’s work and the page does not say they want no unsolicited commercial messages. A buyer address on a distributor’s contact page may qualify for a relevant trade offer. Bought lists usually do not. The agent records which basis applies to each contact.' },
  { category: 'rules', question: 'How quickly must we stop emailing someone who unsubscribes?',
    answer: 'Under Schedule 2 of the Spam Act, a withdrawal of consent takes effect at the end of five business days from the day the unsubscribe message was sent. The unsubscribe address in each message must keep working for at least 30 days after sending. We sync unsubscribe status across HubSpot, Salesforce and any sending tool, so a contact who opts out in one system is blocked in all of them.' },
  { category: 'rules', question: 'Does the Spam Act cover calls made by an AI voice agent?',
    answer: 'Not as an electronic message. Section 5 of the Spam Act excludes a voice call made over a standard telephone service, so calls fall under other rules. The OAIC guidance on APP 7 names the Do Not Call Register Act 2006 alongside the Spam Act as laws that govern direct marketing. If your agent will place outbound calls, check the calling rules with your adviser before launch.',
    links: [{ href: SRC_OAIC_APP7, label: 'OAIC, APP guidelines chapter 7, direct marketing' }] },
  { category: 'rules', question: 'Can our HubSpot data stay in Australia?',
    answer: 'HubSpot lists Australia among its five data centre locations, and its data centre page says existing paid customers can move their data to a new data centre through account settings at no charge. Free-only accounts default to the United States. For Salesforce, ask your account executive which region your org runs in. The AI model can also run in a cloud account you choose.',
    links: [{ href: SRC_HUBSPOT_DC, label: 'HubSpot data centre locations' }] },
  { category: 'rules', question: 'Do the privacy changes starting in December 2026 affect lead scoring?',
    answer: 'Possibly. Starting 10 December 2026, Australian Privacy Principle 1 (APP 1) asks for your privacy policy to cover computer programs that use personal information when making decisions that could significantly affect a person’s rights or interests. Scoring a business lead may fall short of that test, but credit, pricing or account decisions are closer. We document which decisions each agent makes, so your privacy officer can judge and update the policy.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC, APP guidelines chapter 1' }] },
  { category: 'rules', question: 'Which AI model runs the agent?',
    answer: 'Claude, GPT and Gemini are all options, and we pick one for each job. The model can only call the CRM actions our code defines, and our code checks each action before it reaches HubSpot or Salesforce. The model account can sit in your own Anthropic, OpenAI or Google Cloud account, under business terms your company signs, so customer records pass through a contract you control. FactoryJet is independent of all three providers.' },

  // ── Process ──
  { category: 'process', question: 'What should our brief or RFP include?',
    answer: 'Five things help most: which CRM and edition you run, the first job you want done, roughly how many leads or deals move each week, the other systems involved, such as Xero, MYOB, NetSuite or Cin7, and who approves the agent’s actions. If procurement has already written an RFP, send it unchanged. We answer it point by point, and you will not need to fill in a form of ours.' },
  { category: 'process', question: 'Can we watch the agent on our own records before signing?',
    answer: 'Yes. Before any contract, we run the agent on a sample of your own records, with names masked if you prefer. The session shows what it would decide for each record, the reason behind it, the point where a person takes over, and the exact fields it would touch. Sales leaders usually spot a missing rule in that session, which is cheaper to fix now than after launch.' },
  { category: 'process', question: 'How long does a HubSpot or Salesforce agent take to build?',
    answer: 'It depends on the job count and the systems involved. One job in one CRM is the shortest build. Two CRMs, an accounting connection or several jobs at once take longer, and the written scope shows a dated milestone for each one before you sign. Work starts in a HubSpot test portal or Salesforce sandbox, and you get a weekly demo inside your own CRM.' },

  // ── Cost ──
  { category: 'cost', question: 'How much does a CRM AI agent cost in Australia?',
    answer: 'Market figures vary. Flowtivity’s March 2026 Australian guide puts lead qualification and follow-up agents at A$8,000 to A$20,000, and multi-step agents that also update the CRM at A$15,000 to A$35,000. Web Video Digital’s August 2026 guide puts custom agents at A$15,000 to A$150,000. Neither guide says whether GST is included. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [
      { href: SRC_FLOWTIVITY, label: 'Flowtivity: Australian AI agent pricing guide' },
      { href: SRC_WVD, label: 'Web Video Digital: custom AI agent cost in Australia' },
    ] },
  { category: 'cost', question: 'Are there ongoing fees after launch?',
    answer: 'Only if you ask for support. You can hold the AI model and hosting accounts in your company’s name and pay those providers directly, at cost and without our markup. A defect that appears after go-live is fixed free during the cover period written into the scope. Past that period, we price each change on its own, you approve it first, and nothing is billed as a monthly minimum.' },
  { category: 'cost', question: 'Who owns the agent once it is built?',
    answer: 'Your company owns all of it from the first commit. The repository is created in your company’s own code account. The HubSpot app or the Salesforce integration user is registered to your organisation. Prompts and approval rules live in a plain-English document your team edits. If you ever move to another partner, they receive everything needed to run and change the agent. Until then, FactoryJet can keep looking after hosting, model updates and fixes, each change quoted first.' },
];

/* ─── What a CRM agent does (capability cards) ─── */
const AGENT_JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Score inbound leads against your rules', d: 'A trade show badge list arrives as a CSV, or a buyer fills in the quote form. Each new contact is compared with the profile your sales leader wrote, such as state, staff count and the brands they stock. The agent gives a score, assigns an owner and notes in two lines why.' },
  { n: '02', t: 'Keep deal stages honest', d: 'The Friday chase for stage updates goes away. When a buyer replies to a quote or a call note mentions a purchase order, the agent proposes the next stage and quotes the line that supports it. The owner accepts or rejects it, and only a rep can mark a deal won.' },
  { n: '03', t: 'Log every email and call to the right deal', d: 'Outlook and Gmail threads, call recordings and meeting notes are filed against the contact, the company and the open deal, with the next step written out. If a buyer has two company records, say one per state branch, or two deals could fit, a rep places the item from a review queue.' },
  { n: '04', t: 'Fill company records, ABN included', d: 'Missing industry, size and website fields come from sources you approve. ABNs are validated through the ABR’s ABN Lookup web services. Every value records where it came from, and a field a rep typed is never overwritten.' },
  { n: '05', t: 'Draft follow-ups that pass the Spam Act check', d: 'After a quote or a quiet fortnight, the agent drafts the next email from the deal history. Before drafting, it confirms consent and unsubscribe status and adds your sender details. The rep edits and sends.' },
  { n: '06', t: 'Read your other systems before a call', d: 'Open invoices in Xero or MYOB, stock in Cin7 or Unleashed, orders in NetSuite or Odoo, delivery status from Australia Post or StarTrack. The rep sees it on the account before dialling.' },
];

/* ─── Systems the agent reads and writes ─── */
const INTEGRATIONS: { t: string; d: string }[] = [
  { t: 'HubSpot', d: 'Contacts, companies, deals, tickets and custom objects, through an app installed in your portal with only the scopes the job needs.' },
  { t: 'Salesforce', d: 'Leads, accounts, contacts and opportunities, through a dedicated integration user and a permission set your administrator approves.' },
  { t: 'Xero and MYOB', d: 'Xero, MYOB Business and MYOB Acumatica: open invoices, credit status and last payment shown on the CRM account. Read-only unless a written rule says otherwise.' },
  { t: 'NetSuite, Odoo and QuickBooks', d: 'Orders, quotes and customer balances for teams on a larger ERP or on QuickBooks Online in Australia, matched to the CRM by one shared customer ID.' },
  { t: 'Cin7, Cin7 Core and Unleashed', d: 'Stock on hand and lead times, so a rep quoting a wholesale order sees what can ship this week.' },
  { t: 'Marketplaces and payments', d: 'Orders from Shopify, Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC, and payments from Stripe, Afterpay or Zip, summarised on the customer record.' },
  { t: 'Couriers', d: 'Australia Post, StarTrack and Sendle tracking, so account managers know about a late delivery before the customer rings.' },
  { t: 'Inbox, calendar and calls', d: 'Outlook or Gmail threads, meeting notes and call recordings, matched to the right deal and logged with next steps.' },
];

/* ─── Project steps (rendered as <details> expanders) ─── */
const BUILD_STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Send the brief or RFP',
    d: 'Tell us your CRM and edition, the first job, weekly lead or deal volume, the other systems involved and who approves the agent. A procurement RFP works as it is.',
    out: 'A written reply to every point in your brief, plus questions on anything missing.' },
  { n: '02', t: 'Demo on your own records',
    d: 'Ahead of any signature, we point the agent at a sample of your HubSpot or Salesforce records (masked if you prefer) and it shows every decision with its reasoning.',
    out: 'A recorded walkthrough your sales director can share internally.' },
  { n: '03', t: 'Fixed scope, rules and price',
    d: 'We write down the jobs, the fields the agent may change, the Spam Act checks and the approval rules, with one fixed price for the phase.',
    out: 'A signed scope for one phase. The next phase is priced only when you ask.' },
  { n: '04', t: 'Build in a sandbox',
    d: 'We build against a HubSpot test account or a Salesforce sandbox, never your live data first, and connect Xero, MYOB or your ERP read-only.',
    out: 'A weekly demo inside your own CRM, and code in your repository.' },
  { n: '05', t: 'Launch in suggestion mode',
    d: 'In suggestion mode the agent proposes and drafts but changes nothing alone. Reps approve, edit or reject each action, and we review the numbers every week with your RevOps lead (the person who runs your sales systems and reporting).',
    out: 'Accepted, edited and wrong counts from your own CRM, not ours.' },
  { n: '06', t: 'Loosen rules and hand over',
    d: 'Low-risk actions move to automatic once the review numbers support it. High-risk ones stay with a person. You get the documentation and the access keys.',
    out: 'A live agent you own. If you want, FactoryJet keeps managing the servers, model accounts, API changes and fixes, each change quoted first.' },
];

/* ─── House terms ─── */
const HOUSE_TERMS: { t: string; d: string }[] = [
  { t: 'Demo before you sign', d: 'Working software on your own CRM records before any contract.' },
  { t: 'You own the code', d: 'From the first commit, the repository, the HubSpot app or Salesforce integration user, and the rule book belong to your company.' },
  { t: 'Your accounts, at cost', d: 'Model and hosting accounts can sit in your company’s name, so you pay the providers directly at cost, with no markup from us.' },
  { t: 'Fixed price per phase', d: 'Every phase has its own scope, fixed price and signature. Stop after the first job if it is enough.' },
  { t: 'Defects fixed in the build price', d: 'If a defect shows up after go-live, we fix it at no extra charge during a cover period set in the scope before we start.' },
  { t: 'Support only if you want it', d: 'Later changes are priced one at a time and only go ahead once you approve. No monthly minimum applies.' },
];

/* ─── Related pages (agentdir) ─── */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/ai-agents', t: 'AI agents and automation', d: 'Agents for jobs outside the CRM: inbox triage, orders, bookings and month-end data.' },
  { h: '/au/ai-customer-service', t: 'AI customer service', d: 'Answers for chat and email, plus ticket triage, in Zendesk, Gorgias or HubSpot Service Hub.' },
  { h: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier invoices read into draft bills in Xero or MYOB, with approval before anything posts.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure the CRM is the right first job? A readiness assessment ranks the options.' },
  { h: '/au/ai-development', t: 'AI development', d: 'Bigger projects: AI built into your own software, new apps and deep system integration.' },
  { h: '/services/crm-ai-agents', t: 'CRM AI agents (US page)', d: 'The same service for US sales and RevOps teams.' },
];

/* ─── JSON-LD ──────────────────────────────────────────────────────
   The Organization is defined sitewide (src/data/organization.ts). This page
   references it only by @id and never redefines it. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'CRM AI Agents Australia: HubSpot and Salesforce AI Agent Development',
      serviceType: 'CRM AI agent development, HubSpot AI integration and Salesforce AI integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI agents for Australian sales teams that score leads, update deal stages, log emails and calls, validate ABNs and draft follow-ups inside HubSpot or Salesforce, with reads from Xero, MYOB, NetSuite and Cin7, Spam Act 2003 checks and human approval rules. The client owns the code.',
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['crm-ai-agents'] },
  openGraph: {
    title: TITLE,
    description:
      'HubSpot and Salesforce AI agents for Australian sales teams. Leads scored, deals updated, Xero and MYOB data on the account, Spam Act checks before every draft. Demo on your own records before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel icons (same order as the four spec rows). */
const HERO_ICONS = [
  'M4 19V9M10 19V5M16 19v-7M3 19h18',
  'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Zm-3 9 2 2 4-4',
  'M5 4h14v16H5zM9 9h6M9 13h6M9 17h3',
  'M5 12l4 4 10-10M4 20h16',
] as const;

/* Icons for the six capability cards (same order as AGENT_JOBS). */
const JOB_ICONS = [
  'M4 19V9M10 19V5M16 19v-7M3 19h18',
  'M4 6h16M4 12h10M4 18h6M17 15l3 3-3 3',
  'M4 5h16v14H4zM4 7l8 6 8-6',
  'M4 20V8l8-4 8 4v12M9 20v-6h6v6',
  'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Zm-3 9 2 2 4-4',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
] as const;

export default function CrmAiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-crm-ai-agents" type="application/ld+json"
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

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">HubSpot and Salesforce AI agents · Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your reps live in HubSpot or Salesforce, finance runs on Xero or MYOB, and orders sit in NetSuite,
                Cin7 or Shopify. We build AI agents that score leads, keep deals current and draft follow-ups across
                all of them, with Spam Act checks before every draft and your rep approving what matters. You own the code.
              </p>
              <HeroInlineForm region="au" source="au_crm_ai_agents_hero" submitLabel="See a demo on my data" />
              <p className="au-note">Working software on your own data before you sign.</p>
            </div>

            <form className="specpanel" role="group" aria-label="What each CRM agent checks before it acts">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EACH CRM AGENT CHECKS</span>
                <span className="sys"><span>HUBSPOT</span><span>SALESFORCE</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what each CRM agent checks">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crm-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">HubSpot or Salesforce</span>
                  <span className="title">Lead scored, reason written on the record</span>
                  <span className="tag">Suggest</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crm-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">Spam Act 2003</span>
                  <span className="title">Consent, sender details and unsubscribe checked</span>
                  <span className="tag">Before draft</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="crm-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">Xero or MYOB</span>
                  <span className="title">Open invoices read before the renewal call</span>
                  <span className="tag">Read only</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="crm-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[3]} /></svg></span>
                  <span className="idx">your rep</span>
                  <span className="title">Approves the stage change, sends the email</span>
                  <span className="tag">Person</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The agent drafts and suggests. Your rep sends and approves.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '5 business days', t: 'for an unsubscribe to take effect under the Spam Act, counted from the day it was sent', s: 'Spam Act, Sch 2', u: SRC_SPAM_ACT },
              { v: '30 days', t: 'minimum the unsubscribe address in a commercial email must keep working after sending', s: 'Spam Act, s18', u: SRC_SPAM_ACT },
              { v: '10 Dec 2026', t: 'start date for APP 1 privacy policy duties covering automated decisions that could significantly affect people', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
              { v: '1 of 5', t: 'HubSpot data centre locations is in Australia, and paid accounts can move there at no charge', s: 'HubSpot', u: SRC_HUBSPOT_DC },
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
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a CRM AI agent do for an Australian sales team?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A CRM AI agent keeps HubSpot or Salesforce accurate and moving: it scores new
                    leads, logs emails and calls, proposes deal stages and drafts follow-ups, inside rules your sales
                    leader writes.</span> In Australia it also has to respect the Spam Act 2003 on every email or SMS it
                    drafts, which means checking consent, sender details and unsubscribe status first.
                  </p>
                  <p data-speakable="true">
                    FactoryJet builds custom CRM AI agents for Australian sales teams on HubSpot and Salesforce, with
                    reads from Xero, MYOB, NetSuite and Cin7, and shows the agent working on your own records before
                    you sign.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Who this is for</div>
                    <p>
                      Established Australian companies with a sales team of five or more reps, a CRM that has drifted
                      out of date, and customer data split across Xero or MYOB, an ERP and an online store. Wholesalers,
                      distributors, manufacturers and B2B service firms are the usual fit. If the pipeline report needs a
                      Friday afternoon of clean-up before the Monday meeting, the agent has a job.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    HubSpot sells Breeze and Salesforce sells Agentforce, and both are worth a look when the work stays
                    inside one CRM. A custom agent fits when the job needs the ledger, the stock system or the courier
                    before it acts, or when you want approval rules and code that belong to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT THE AGENT DOES → capgrid ═══ */}
        <section className="section capabilities" id="what-it-does">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Six jobs, built one at a time</div>
              <h2>What a HubSpot or Salesforce AI agent does for your reps</h2>
              <p className="lead">
                Each job can be built and priced on its own. Most Australian teams start with lead scoring or activity
                logging, then add the next job once the first one shows its numbers in your own CRM.
              </p>
            </div>
            <div className="capgrid">
              {AGENT_JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{j.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS → ruled platform rows ═══ */}
        <section className="section platforms" id="integrations">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Where the agent reads and writes</div>
                <h2>Which systems can a CRM AI agent connect to?</h2>
              </div>
              <p>
                The agent connects to HubSpot and Salesforce through each platform’s official API, with a separate
                login that holds only the access the job needs. Accounting, stock and courier systems connect read-only
                unless a written rule says the agent may write.
              </p>
            </div>
            <div className="platlist" role="list">
              {INTEGRATIONS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              ABN checks use the Australian Business Register’s free{' '}
              <a href={SRC_ABN_LOOKUP} {...extLink}>ABN Lookup web services</a>, which need a one-time registration.
            </p>
          </div>
        </section>

        {/* ═══ SPAM ACT → facts + au-panel ═══ */}
        <section className="section facts au-top" id="spam-act">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Spam Act 2003</div>
              <h2>The Spam Act rules every AI sales agent in Australia has to follow</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The Spam Act covers commercial electronic messages with an Australian link, sent to an email,
                  instant messaging or phone account. That includes a follow-up email or an SMS an agent drafts in
                  HubSpot. Section 5 leaves out voice calls made over a standard telephone service.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Section 16 bans sending a commercial message without the account-holder’s consent. Schedule 2 says
                  consent is express, or reasonably inferred from conduct and business relationships. A published
                  address alone does not count as consent. There is one exception: a work or role address shown
                  clearly on a website. Even then, the message must relate to that person’s job. And the page must
                  not say they refuse unsolicited commercial messages.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    Section 17 requires each message to identify who authorised it, with contact details likely to stay
                    valid for at least 30 days. Section 18 requires a clear unsubscribe option that keeps working for the
                    same 30 days. The OAIC notes that where the Spam Act applies, Australian Privacy Principle 7
                    (APP 7, the Privacy Act rule on direct marketing) steps back.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_SPAM_ACT} {...extLink}>Spam Act 2003, Federal Register of Legislation</a>;{' '}
                    <a href={SRC_OAIC_APP7} {...extLink}>OAIC, APP guidelines chapter 7, direct marketing</a>.
                    We build to these rules. We do not give legal sign-off, so confirm your consent basis with your adviser.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What the agent checks before it drafts</div>
                <ul className="trigrows">
                  <li><span className="m">Consent basis recorded on the contact</span><span className="t">s16</span></li>
                  <li><span className="m">Published address relevant to their role</span><span className="t">Sch 2</span></li>
                  <li><span className="m">Sender name and contact details included</span><span className="t">s17</span></li>
                  <li><span className="m">Working unsubscribe link in every message</span><span className="t">s18</span></li>
                  <li><span className="m">Opt-outs synced across every system</span><span className="t">Sch 2</span></li>
                  <li><span className="m">Bought lists blocked by default</span><span className="t">Policy</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ APPROVAL RULES → facts with split rows ═══ */}
        <section className="section facts" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Approval rules</div>
              <h2>Your sales leader decides what the agent may change alone</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Every agent ships with a written list of actions it may take alone, actions that wait for a rep or
                  manager, and actions it can never take. Approvals arrive where your team already works: a task in
                  HubSpot, a Salesforce approval, or a Slack or Teams message with approve and edit buttons.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The log holds three things per action: the value before, the value after, and why the agent made the change. There is one
                  switch to pause it. In the first weeks we read a sample of those logs with your RevOps lead and only
                  loosen a rule when the accepted and edited counts support it.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <div className="factlabel">A typical split</div>
                  <ul className="trigrows">
                    <li><span className="m">Fill an empty field</span><span className="n">source logged on the record</span><span className="t">Automatic</span></li>
                    <li><span className="m">Log an email or call</span><span className="n">unclear matches go to review</span><span className="t">Automatic</span></li>
                    <li><span className="m">Move a deal stage</span><span className="n">reason attached</span><span className="t">Owner approves</span></li>
                    <li><span className="m">Send to a customer</span><span className="n">after Spam Act checks</span><span className="t">Rep sends</span></li>
                    <li><span className="m">Overwrite a field a rep typed</span><span className="n">unless your rules allow it</span><span className="t">Never</span></li>
                    <li><span className="m">Merge or delete records</span><span className="n">duplicates listed for review</span><span className="t">Never</span></li>
                  </ul>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a CRM agent project runs</div>
                <h2>Six steps from your brief to a live agent in HubSpot or Salesforce</h2>
                <p className="lead">
                  Open any step to see what happens and what you hold at the end of it. Every phase carries its own
                  fixed price, and stopping after any one of them is your call.
                </p>
              </div>
            </div>
            <div className="timeline timeline-4 timeline-3">
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
            headline={'Find the CRM job that costs your reps the most hours.'}
            sub={'Send your CRM edition, the first job and the systems around it. On a short call with the founder we will tell you whether a custom agent, Breeze or Agentforce, or a simple workflow is the right answer, and set up a demo on your own records.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ HOUSE TERMS + BRIEF ASK → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">How we work</div>
                <h2>What terms apply to a CRM agent build?</h2>
              </div>
              <p>
                Have a brief or an RFP? Send it as it is. We reply to each point in writing, and you never fill in a
                form of ours. These terms apply to every CRM agent we quote.
              </p>
            </div>
            <div className="platlist" role="list">
              {HOUSE_TERMS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>Custom CRM agent vs Breeze or Agentforce vs a Zapier or Make workflow</h2>
              <p className="lead">
                Match the option to the job, not the other way round.
              </p>
            </div>
            <p className="md:hidden au-note" style={{ marginBottom: 8 }}>Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                    <th>Breeze or Agentforce</th>
                    <th>Zapier or Make workflow</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Jobs that cross the CRM, ledger and stock system</td><td>Work that stays inside one CRM</td><td>Simple two-app hand-offs</td></tr>
                  <tr><th scope="row">Reads emails and call notes</th><td className="fj">Yes</td><td>Yes</td><td>With extra AI steps</td></tr>
                  <tr><th scope="row">HubSpot and Salesforce in one flow</th><td className="fj">Yes, one shared ID</td><td>One vendor each</td><td>Yes</td></tr>
                  <tr><th scope="row">Xero, MYOB, Cin7 or NetSuite before acting</th><td className="fj">Built in, read-only by default</td><td>Through connectors, where offered</td><td>Per zap or scenario</td></tr>
                  <tr><th scope="row">Spam Act checks before drafting</th><td className="fj">Built into every draft</td><td>You configure them</td><td>You build them</td></tr>
                  <tr><th scope="row">Approval rules per field</th><td className="fj">Written with your sales leader</td><td>Vendor settings</td><td>If you add them</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: code, app and rules</td><td>Licensed from the vendor</td><td>You, inside the tool</td></tr>
                  <tr><th scope="row">Pricing model</th><td className="fj">Fixed price per phase</td><td>Vendor licence or usage pricing</td><td>Plan tier by task volume</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ COST (market ranges only) → au-split ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Scope, not packages</div>
              <h2>How much does a CRM AI agent cost in Australia?</h2>
              <p className="lead">
                Published Australian guides put a lead qualification agent at A$8,000 to A$20,000 (
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, March 2026</a>) and custom agents at up to
                A$150,000 (<a href={SRC_WVD} {...extLink}>Web Video Digital, August 2026</a>). Those are market
                ranges, not our prices. FactoryJet quotes a fixed price per phase, in writing, after a short scoping
                call. The FAQ below gives the full ranges.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Demo on your records.</b> Before any contract, the agent runs on a masked sample of your CRM so you can judge it on your own data.</span></li>
                  <li><span><b>Single-job build.</b> One agent doing one job, such as lead scoring in HubSpot, taken through sandbox, suggestion mode and go-live.</span></li>
                  <li><span><b>Multi-system phase.</b> The agent adds reads from Xero, MYOB, your ERP or stock system, priced and signed as its own phase.</span></li>
                  <li><span><b>Support, if you choose it.</b> Each change after the defect cover period is quoted and approved first, with no monthly minimum.</span></li>
                </ol>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">One CRM or two</span><span className="t">Reach</span></li>
                  <li><span className="m">Systems read beyond the CRM</span><span className="t">Reach</span></li>
                  <li><span className="m">How messy the records are today</span><span className="t">Clean-up</span></li>
                  <li><span className="m">Fields the agent may write</span><span className="t">Control</span></li>
                  <li><span className="m">Automatic sends to customers</span><span className="t">Spam Act</span></li>
                  <li><span className="m">AI model and hosting</span><span className="t">Your account</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY + DATA LOCATION → facts ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act and data location</div>
              <h2>Where your CRM data lives, and what changes in December 2026</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  From 10 December 2026, Australian Privacy Principle 1 (APP 1) requires a privacy policy to describe computer programs that use
                  personal information to make, or help make, decisions that could significantly affect a person’s
                  rights or interests. Scoring a trade lead may sit below that line. Credit holds, pricing tiers and
                  account closures sit closer to it. Each agent we build comes with a plain list of the decisions it
                  makes, ready for your privacy officer.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Paid HubSpot accounts can move their data to HubSpot’s Australian data centre (see the FAQ below).
                  The AI model can run in a cloud account you choose, so records only pass through contracts your
                  company signed.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    The agent gets its own login with the fewest permissions the job needs. It cannot see objects
                    outside its scope, and API keys stay in your accounts.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP guidelines chapter 1</a>;{' '}
                    <a href={SRC_HUBSPOT_DC} {...extLink}>HubSpot data centre locations</a>.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WORKED EXAMPLE → definition copy ═══ */}
        <section className="section au-top" id="worked-example">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">What good looks like</div>
              <h2>A worked example: a Brisbane wholesaler’s Monday pipeline</h2>
              <p>
                This is an illustration of the kind of agent we build, not a client case study.
              </p>
              <p>
                A wholesaler sells to independent retailers. Sales runs in Salesforce, marketing in HubSpot, accounts
                in Xero and stock in Cin7. Every Friday the sales manager spends the afternoon chasing reps to update
                stages before the Monday meeting.
              </p>
              <p>
                The agent reads the week’s emails and call notes, proposes stage changes with the reason, and shows
                each account’s overdue Xero invoices and Cin7 stock on the opportunity. Retailers two invoices behind
                are flagged before a rep offers new terms. Follow-up drafts check consent and unsubscribe status first.
              </p>
              <p>
                On Monday the manager approves a short list of suggested moves instead of chasing eight people. The
                reps still own every account. They stop retyping the week into Salesforce.
              </p>
            </div>
            <div className="au-panel">
              <div className="eyebrow">Systems in this example</div>
              <ul className="trigrows">
                <li><span className="m">Salesforce opportunities</span><span className="t">Suggest</span></li>
                <li><span className="m">HubSpot marketing activity</span><span className="t">Read</span></li>
                <li><span className="m">Xero overdue invoices</span><span className="t">Read</span></li>
                <li><span className="m">Cin7 stock on hand</span><span className="t">Read</span></li>
                <li><span className="m">Follow-up emails</span><span className="t">Rep sends</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: is a CRM agent the right first build?</h2>
              <p>
                Open the description closest to your situation.
              </p>
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>Our reps spend hours keeping HubSpot or Salesforce up to date</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>This page is the right place.</b> Start with activity logging or lead scoring, then add deal stage suggestions once the first job shows its numbers.</p>
              </details>
              <details className="ventry">
                <summary><h3>The problem is customer questions by chat and email, not the pipeline</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Look at a support agent.</b> See our <a href="/au/ai-customer-service">AI customer service work for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>Finance keys supplier invoices into Xero or MYOB by hand</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is an accounts payable job.</b> See <a href="/au/accounts-payable-automation">accounts payable automation in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>Several teams want AI and nobody agrees where to start</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Start with advice, not a build.</b> See our <a href="/au/ai-consulting">AI consulting service</a>, which ranks the options by value and risk.</p>
              </details>
              <details className="ventry">
                <summary><h3>The job sits outside the CRM: orders, bookings or the shared inbox</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>A general AI agent fits better.</b> See <a href="/au/ai-agents">AI agents and automation in Australia</a>.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ RELATED → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>Other AI work for Australian businesses</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>AI services</h3>
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
          heading="CRM AI agents: questions Australian sales leaders ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_SPAM_ACT} {...extLink}>Spam Act 2003</a>
              <a href={SRC_OAIC_APP7} {...extLink}>OAIC, APP 7 direct marketing</a>
              <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>
              <a href={SRC_HUBSPOT_DC} {...extLink}>HubSpot data centres</a>
              <a href={SRC_ABN_LOOKUP} {...extLink}>ABR, ABN Lookup web services</a>
              <a href={SRC_HUBSPOT_AI} {...extLink}>HubSpot, AI agents and Agent Hub</a>
              <a href={SRC_AGENTFORCE} {...extLink}>Salesforce, Agentforce</a>
              <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity, AI agent pricing guide</a>
              <a href={SRC_WVD} {...extLink}>Web Video Digital, AI agent cost</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See a CRM agent work on your own HubSpot or Salesforce records</h2>
              <p>
                Send your name and work email, or your brief. The founder replies within 24 hours to book a short call
                about your CRM, the first job and the systems around it, then sets up a demo on a masked sample of your
                records.
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

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
