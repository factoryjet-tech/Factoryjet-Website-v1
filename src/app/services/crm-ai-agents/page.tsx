import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import { twinAlternates } from '@/data/hreflangMap';
import { FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/crm-ai-agents';

export const metadata: Metadata = {
  title: 'AI Agents for Salesforce and HubSpot | FactoryJet',
  description:
    'Custom AI agents for HubSpot and Salesforce that qualify leads, update deals, log calls and enrich contacts. Your approval rules. Demo on your data first.',
  keywords: [
    'hubspot ai agent',
    'salesforce ai agent',
    'crm ai agent',
    'ai agent for crm',
    'ai agents for hubspot',
    'ai agents for salesforce',
    'hubspot ai integration',
    'salesforce ai integration',
    'ai lead qualification hubspot',
    'crm data enrichment ai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents for Salesforce and HubSpot | FactoryJet',
    description:
      'Agents that qualify leads, update deals, log activity and draft follow-ups in your CRM. Your rules decide what needs approval. Fixed price per phase.',
    url: CANONICAL_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-integration.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI agents for HubSpot and Salesforce',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Salesforce and HubSpot | FactoryJet',
    description:
      'Custom CRM agents with human approval rules. See a demo on your own records before you sign.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-integration.webp'],
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: twinAlternates['crm-ai-agents'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (WebPage + Service + HowTo + Breadcrumb). faqSchema is declared
   after FAQ_ITEMS below, since it derives mainEntity from that array via .map()
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-10-31';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: 'AI Agents for Salesforce and HubSpot',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents for HubSpot and Salesforce',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: [{ '@type': 'Country', name: 'United States' }],
  serviceType: 'CRM AI agent development',
  description:
    'Custom AI agents built for sales and RevOps teams that qualify inbound leads, update deal stages, log calls and emails, enrich contacts and draft follow-ups inside HubSpot or Salesforce, with human approval rules set per action.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Demo on your own records',
      description: 'The agent runs on a sample of your CRM records before you sign, so you see each decision it would make.',
    },
    {
      '@type': 'Offer',
      name: 'Fixed-price CRM agent build',
      description: 'One job or several, scoped, priced and signed one phase at a time, with defect cover inside the build price.',
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds an AI agent for HubSpot or Salesforce',
  description: 'The five steps from brief to a live CRM agent with approval rules.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Send the brief', text: 'You send your CRM edition, the first job, weekly volume and who approves the agent. An RFP is fine as is.' },
    { '@type': 'HowToStep', position: 2, name: 'Demo on your records', text: 'Before you sign, the agent runs on a sample of your records and shows each decision with its reason.' },
    { '@type': 'HowToStep', position: 3, name: 'Fixed scope and price', text: 'You get the scope, the approval rules and one fixed price per phase in writing.' },
    { '@type': 'HowToStep', position: 4, name: 'Build in a sandbox', text: 'We build against a HubSpot test account or Salesforce sandbox, with weekly demos.' },
    { '@type': 'HowToStep', position: 5, name: 'Launch with suggestions first', text: 'The agent starts by suggesting changes for approval, and rules loosen only when the review numbers support it.' },
  ],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'CRM AI Agents', url: CANONICAL_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${CANONICAL_URL}#breadcrumb`,
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AGENT_JOBS = [
  {
    name: '1. Qualify inbound leads',
    description:
      'A form fill or chat creates a contact. The agent reads the answers, the company website and past activity, scores the lead against rules you write in plain English, sets the owner and status, and writes the reason next to the score.',
    example: 'HubSpot contacts or Salesforce leads',
  },
  {
    name: '2. Update deal stages',
    description:
      'The agent reads replies, call notes and meeting outcomes, then proposes the next stage with the evidence attached. The deal owner approves with one click. Closed Won always stays with a person.',
    example: 'Deals or opportunities',
  },
  {
    name: '3. Log calls and emails',
    description:
      'Each email thread, call summary and meeting note is matched to the right contact, company and deal, then logged as an activity with next steps. When the match is unclear, it goes to a review list. The agent does not guess.',
    example: 'Calls, emails, meetings, notes',
  },
  {
    name: '4. Enrich contacts and companies',
    description:
      'Missing job titles, company size, industry and website are filled from sources you approve, such as the contact\'s own emails, the company site or a data provider you already pay for. Each value records where it came from.',
    example: 'Contact and company properties',
  },
  {
    name: '5. Draft follow-ups',
    description:
      'After a call or a quiet week, the agent drafts the follow-up from the deal history and the last conversation. The rep edits and sends it. Drafts sit on the record, so a manager can see what went out.',
    example: 'Email drafts and tasks',
  },
  {
    name: '6. Work across your other systems',
    description:
      'Check open invoices in QuickBooks or NetSuite before a renewal call, read Zendesk tickets before a deal review, or sync a lead between HubSpot marketing and Salesforce sales with one shared ID.',
    example: 'ERP, help desk, inbox',
  },
];

const APPROVAL_RULES = [
  { action: 'Draft a follow-up email', rule: 'Always drafted. A rep reviews and sends.' },
  { action: 'Move a deal stage', rule: 'Suggested with the reason. The owner approves. Low-risk early stages can run alone later.' },
  { action: 'Fill an empty field', rule: 'Runs alone, with the source logged on the record.' },
  { action: 'Change a field a rep typed', rule: 'Never, unless your written rules allow it for that field.' },
  { action: 'Merge or delete records', rule: 'Not allowed. Duplicates go to a review list.' },
  { action: 'Send an email to a customer', rule: 'Off by default. Narrow cases, such as a meeting confirmation, only if you switch them on.' },
];

const CRM_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Send the brief',
    description:
      'Tell us your CRM and edition, the first job, how many leads or deals a week, and who approves the agent. Have an RFP? Send it as is.',
  },
  {
    number: '02',
    title: 'Demo on your records',
    description:
      'Before you sign, the agent runs on a sample of your real records, with names removed if you prefer, and shows each decision with its reason.',
  },
  {
    number: '03',
    title: 'Fixed scope and price',
    description:
      'You get the jobs, the approval rules and one fixed price per phase in writing. Each phase is scoped, priced and signed on its own.',
  },
  {
    number: '04',
    title: 'Build in a sandbox',
    description:
      'We build against a HubSpot test account or a Salesforce sandbox, never your live data first, with a weekly demo inside your own CRM.',
  },
  {
    number: '05',
    title: 'Launch with suggestions',
    description:
      'The agent starts by suggesting changes. We review accepted, edited and wrong suggestions with your RevOps lead, then loosen rules where the numbers support it.',
  },
];

const HOUSE_TERMS = [
  { title: 'Demo before you sign', body: 'You see the agent working on your own records before any contract.' },
  { title: 'You own the code', body: 'The repository, the CRM app and the written rules are yours from day one.' },
  { title: 'Your accounts, at cost', body: 'The AI model and hosting can run in your own accounts, billed to you at cost with no markup.' },
  { title: 'Fixed price per phase', body: 'Each phase is scoped, priced and signed on its own, so you can stop after the first job.' },
  { title: 'Defects fixed in the build price', body: 'Defects found after launch are fixed inside the build price, for a cover period agreed before work starts.' },
  { title: 'Support only if you want it', body: 'After that, each change is quoted and approved before we do it. There is no monthly minimum.' },
];

const COMPARISON_COLUMNS = [
  { label: 'Custom agent (FactoryJet)', isFactoryJet: true },
  { label: 'CRM vendor agent (Breeze, Agentforce)' },
  { label: 'Zapier or Make workflow' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Reads free text, such as emails and call notes.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="vendor" kind="yes" />,
      <CompareIcon key="zap" kind="partial" />,
    ],
  },
  {
    feature: 'Works across HubSpot and Salesforce in one flow.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="vendor" kind="no" />,
      <CompareIcon key="zap" kind="yes" />,
    ],
  },
  {
    feature: 'Reads your ERP, help desk or inbox before acting.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="vendor" kind="partial" />,
      <CompareIcon key="zap" kind="partial" />,
    ],
  },
  {
    feature: 'Approval rules written per action and per field.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="vendor" kind="partial" />,
      <CompareIcon key="zap" kind="partial" />,
    ],
  },
  {
    feature: 'You own the code and can move it.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="vendor" kind="no" />,
      'The workflow stays in your Zapier or Make account and runs only there.',
    ],
  },
  {
    feature: 'Pricing model.',
    values: ['Fixed price per phase.', 'Vendor licence or credits.', 'Plan tier by task volume.'],
  },
];

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'What It Is' },
  { key: 'jobs', label: 'What It Does' },
  { key: 'safety', label: 'Rules & Data' },
  { key: 'process', label: 'Process' },
  { key: 'cost', label: 'Cost & Ownership' },
];

/* ─── FAQ items. One array: rendered by <FAQ> and mapped into FAQPage JSON-LD. ── */
const FAQ_ITEMS = [
  /* ── What It Is ── */
  {
    category: 'basics',
    question: 'Can an AI agent read and update HubSpot or Salesforce records?',
    answer:
      'Yes. Both CRMs let approved apps read and write records through their APIs. HubSpot organises its CRM into objects such as contacts, companies, deals and tickets, and its MCP server gives AI tools read and write access to them. In Salesforce, the agent signs in through a connected app with its own user and permission set. We decide with you which objects and fields the agent may change. Everything else stays read-only or hidden.',
  },
  {
    category: 'basics',
    question: 'What is a CRM AI agent?',
    answer:
      'A CRM AI agent is software that reads your CRM, decides on a next step and acts on it. Examples are scoring a new lead, moving a deal stage or drafting a follow-up email. An AI model such as Claude or GPT does the reading and writing. Rules you set decide what the agent may change alone and what a person must approve first.',
  },
  {
    category: 'basics',
    question: 'How is a custom agent different from HubSpot Breeze or Salesforce Agentforce?',
    answer:
      'Breeze and Agentforce are agents the CRM vendors sell inside their own products. They suit teams whose work stays inside one CRM. A custom agent fits when the job crosses systems, such as reading a quote in your ERP before updating a deal, or when you want your own approval rules and code you own. Our Agentforce pricing guide compares the two on cost and fit.',
  },
  {
    category: 'basics',
    question: 'Is a CRM agent the same as an AI SDR?',
    answer:
      'They do different jobs. An SDR is a sales development rep, the person who works new leads. An AI SDR works at the edge of the CRM: it writes to new prospects, replies to inbound leads fast and books meetings. A CRM agent works on the records your team already has, keeping them accurate and moving deals forward. Many sales teams run both, and they can share the same lead scoring rules.',
  },
  {
    category: 'basics',
    question: 'Do we need Agentforce to run an AI agent in Salesforce?',
    answer:
      'No. Agentforce is Salesforce\'s own agent platform, and you can use it if it fits. A Salesforce AI agent can also be built outside it. The Salesforce REST API lets an approved app create, read, update and delete records, so a custom agent signs in through its own connected app and works on leads, contacts and opportunities. Our Agentforce pricing guide compares the cost of each route.',
  },
  {
    category: 'basics',
    question: 'Do you build agents for Dynamics 365, Zoho or Pipedrive?',
    answer:
      'This page covers HubSpot and Salesforce. Microsoft Dynamics 365, Zoho CRM and Pipedrive each publish an API for reading and writing records, so an agent connects to them the same way: its own login, limited permissions and your approval rules. Send the CRM name with your brief and we confirm what its API allows before we quote.',
  },
  {
    category: 'basics',
    question: 'Will AI agents replace our CRM or our CRM admin?',
    answer:
      'No. The agent works inside the CRM you already pay for, and the records stay there. It takes over repeat work such as logging calls, filling empty fields and drafting follow-ups. Your CRM admin still owns the fields, the pipeline stages and the rules the agent follows. Your admin reviews the agent\'s suggestion log instead of fixing stale records by hand.',
  },

  /* ── What It Does ── */
  {
    category: 'jobs',
    question: 'Which CRM tasks can an AI agent handle?',
    answer:
      'Six jobs cover most of the requests we get. Qualifying inbound leads against your ideal customer rules. Updating deal stages when an email or call shows progress. Logging calls, meetings and emails to the right record. Enriching contacts and companies with missing fields. Drafting follow-ups for a rep to send. Reading your ERP or help desk before acting. Each one can be built alone, or several can be combined into one agent.',
  },
  {
    category: 'jobs',
    question: 'Can the agent qualify inbound leads in HubSpot?',
    answer:
      'Yes. When a form or chat creates a contact, the agent reads the form answers, the company website and any past activity. It scores the lead against rules you write in plain English, then sets the lead status and owner. It also adds a short note that explains the score, so a rep can read the reason before calling.',
  },
  {
    category: 'jobs',
    question: 'Will the agent move deals between stages on its own?',
    answer:
      'Only if you allow it. Most teams start with suggestions. The agent reads a reply or call notes, proposes a stage change with the reason, and the deal owner approves it in one click. Once suggestions prove right for a few weeks, you can let low-risk moves happen without approval, such as Discovery to Demo Booked. Closed Won stays with a person.',
  },
  {
    category: 'jobs',
    question: 'How does contact enrichment work, and where does the data come from?',
    answer:
      'The agent fills missing fields such as job title, company size, industry and website from sources you approve. Those can be the contact\'s own emails, the company website, or a data provider you already pay for, such as Apollo or ZoomInfo. It records where each value came from. It never overwrites a field a rep typed by hand unless your rules allow it.',
  },
  {
    category: 'jobs',
    question: 'Does the agent send emails to customers by itself?',
    answer:
      'Not by default. The agent drafts the follow-up inside the CRM, using the deal history and the last conversation, and a rep reviews and sends it. Some teams later allow automatic sends for narrow cases, such as a meeting confirmation. You set those rules in writing before launch, and every email the agent sends is logged on the record.',
  },
  {
    category: 'jobs',
    question: 'Can one agent work across HubSpot and Salesforce at the same time?',
    answer:
      'Yes. Some companies run marketing in HubSpot and sales in Salesforce. The agent can read a lead\'s marketing activity in HubSpot, then update the matching lead or opportunity in Salesforce, using one shared ID so the records stay matched. Before the build, we agree which system owns each field, so the two never overwrite each other.',
  },
  {
    category: 'jobs',
    question: 'Can the agent use data from our ERP, help desk or inbox?',
    answer:
      'Yes, and this is often the reason to build a custom agent. It can check open invoices in QuickBooks or NetSuite before a renewal call, read Zendesk tickets before a deal review, or attach a quote from your ERP to the opportunity. Each extra system gets its own permissions, read-only unless the job needs to write.',
  },

  /* ── Rules & Data ── */
  {
    category: 'safety',
    question: 'What approval rules can we set?',
    answer:
      'You decide per action. Common rules: drafts always need a rep to send them. Stage changes need the deal owner\'s approval above a deal value you choose. Empty fields may be filled without approval, but a field a person typed is never overwritten. Merges and deletes are not allowed. Every action is logged with the old value, the new value and the reason.',
  },
  {
    category: 'safety',
    question: 'Is our CRM data safe with an AI agent?',
    answer:
      'The agent gets its own user with the fewest permissions the job needs, so it cannot see or change objects outside its scope. API keys stay in your accounts. The AI model can run in your own Anthropic, OpenAI or cloud account, so records pass through a contract you control. HubSpot\'s own MCP server also leaves out properties marked as sensitive data.',
  },
  {
    category: 'safety',
    question: 'Which AI model do you use, and do you build CRM agents on Claude?',
    answer:
      'We build on Claude, GPT or Gemini and pick per task, and many of our agents run on the Anthropic API. With tool use, the model can only ask to run functions we define. Our code checks each request against your rules before anything reaches the CRM. The model sits behind that code layer, so you can switch providers later without a rebuild. FactoryJet is an independent services company, not part of Anthropic.',
  },
  {
    category: 'safety',
    question: 'How do we know the agent is doing a good job?',
    answer:
      'Every action is logged with the reason the agent gave. In the first weeks we review a sample with your sales or RevOps lead: how many suggestions were accepted, how many were edited and how many were wrong. Rules tighten or loosen based on that review, and the numbers come from your own CRM.',
  },

  /* ── Process ── */
  {
    category: 'process',
    question: 'How long does it take to build a CRM AI agent?',
    answer:
      'A single focused job, such as lead qualification in HubSpot, usually goes live one to three weeks after the scope is signed, the same range we give for our other AI integrations. An agent that covers several jobs or two CRMs takes longer. The written scope has dated milestones, and you see a demo inside your own CRM every week.',
  },
  {
    category: 'process',
    question: 'What do you need from us to start?',
    answer:
      'A short brief: which CRM and edition you use, the job you want done first, how many leads or deals move each week, and who approves the agent\'s actions. Test or sandbox access helps. If you already have an RFP or a requirements document, send it as it is. We answer the questions in it, so you do not have to fill in a form of ours.',
  },
  {
    category: 'process',
    question: 'Can we see it work before we sign?',
    answer:
      'Yes. Before you sign, we run the agent on a small set of your real records, with names removed if you prefer. You see each decision it would make and the reason for it, where it hands off to a person, and exactly which fields it would change in the CRM.',
  },
  {
    category: 'process',
    question: 'What happens when HubSpot or Salesforce changes its API?',
    answer:
      'Both vendors version their APIs and announce changes ahead of time. The agent calls the CRM through one small layer of code, so a change is usually fixed in one place. Failed calls send an alert to Slack or email. If you choose support, we watch those notices and quote any needed change before doing it.',
  },

  /* ── Cost & Ownership ── */
  {
    category: 'cost',
    question: 'How much does a custom CRM AI agent cost?',
    answer:
      'Market figures vary widely. Development firm ProductCrafters, in the FAQ of its February 2026 cost guide, puts custom-built AI agents with integrations at $15,000 to $75,000, and enterprise multi-agent systems higher. FactoryJet does not publish a price list. We quote a fixed price per phase in writing after a short scoping call. Later changes are quoted and approved one request at a time.',
  },
  {
    category: 'cost',
    question: 'Are there monthly fees after launch?',
    answer:
      'Not from us unless you choose support. The AI model and hosting can run in your own accounts, billed to you at cost with no markup. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. If you choose support, we keep managing the servers, model bills, updates and security, quoted as a fixed price. Each change is quoted and approved first, and there is no monthly minimum.',
  },
  {
    category: 'cost',
    question: 'Who owns the agent and its code?',
    answer:
      'You do, from day one. The code lives in a repository you own. The HubSpot app or Salesforce connected app is registered in your account, and the prompts and approval rules are written down in plain English. If you bring the work in-house later, your team has everything it needs to run and change the agent.',
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

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

/** Market price sources named in the cost FAQ. Not FactoryJet prices. */
const MARKET_PRICE_SOURCES = [
  {
    label: 'ProductCrafters: AI Agent Development Cost, February 2026',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
    note: 'Custom-built agents with integrations at $15K to $75K, per its FAQ.',
  },
  {
    label: 'Salesforce: REST API Developer Guide, working with records',
    url: 'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_records.htm',
    note: 'How an app creates, reads, updates and deletes Salesforce records.',
  },
  {
    label: 'Microsoft: Dataverse Web API overview (Dynamics 365)',
    url: 'https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview',
    note: 'The Web API for Dataverse, the data platform behind Dynamics 365 sales apps.',
  },
  {
    label: 'Zoho CRM API documentation',
    url: 'https://www.zoho.com/crm/developer/docs/api/v8/',
    note: 'Zoho CRM record APIs.',
  },
  {
    label: 'Pipedrive API reference',
    url: 'https://developers.pipedrive.com/docs/api/v1',
    note: 'Pipedrive deals, persons and activities APIs.',
  },
];

/** Vendor pages behind the comparison table. */
const COMPARISON_SOURCES = [
  { label: 'Salesforce Agentforce developer guide', url: 'https://developer.salesforce.com/docs/ai/agentforce/guide' },
  { label: 'HubSpot AI (Breeze)', url: 'https://www.hubspot.com/products/artificial-intelligence' },
  { label: 'Zapier', url: 'https://zapier.com' },
  { label: 'Make', url: 'https://www.make.com' },
];

const LINK_CLASS = 'font-semibold underline underline-offset-2 text-[#B23E13]';

export default function CrmAiAgentsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="crm-ai-agents-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="crm-ai-agents-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="crm-ai-agents-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="crm-ai-agents-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        cta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          formSlot={
            <>
              <HeroInlineForm
                region="us"
                source="us_services_crm_ai_agents_hero"
                service="CRM AI Agents"
                submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Bhavesh replies within 24 hours."
              />
              <p className="mt-3 max-w-[540px] font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                Have a brief or RFP? Attach it at step 2. We scope, price and sign each phase on its own.
              </p>
            </>
          }
          eyebrow="CRM AI AGENTS · HUBSPOT · SALESFORCE"
          headline="AI agents that qualify leads and update records in HubSpot and Salesforce"
          lead="Your reps spend the end of each day logging calls, fixing fields and chasing stale deals. We build agents that do that work inside HubSpot or Salesforce: they score inbound leads, move deal stages, log activity, fill missing contact data and draft follow-ups. Your rules decide which actions need a person to approve them."
          trustItems={['500+ businesses served', '97% on-time delivery', 'Fixed price per phase', 'You own the code']}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                ONE LEAD, FOUR ACTIONS
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-fj-ink">
                A demo request arrives at 9:02. The CRM is up to date by 9:03.
              </p>
              <ol className="mt-6 space-y-3">
                {[
                  'Contact created from the form. Company size and industry filled from the website, source logged.',
                  'Scored against your ideal customer rules. Owner set, reason written on the record.',
                  'Follow-up email drafted in the owner\'s name. Waiting for the rep to send.',
                  'Deal created at Discovery. Stage changes later need the owner\'s one-click approval.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-600">
                  Illustration of a typical lead flow. Your rules and fields set the real steps.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. ANSWER FIRST ──────────────────────────────────────────────── */}
        <section className="border-y border-fj-neutral-200 bg-white py-12 md:py-14">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                  THE SHORT ANSWER
                </p>
                <h2 className="fj-display mt-3 text-2xl font-bold tracking-tight text-fj-ink md:text-3xl">
                  What does an AI agent do inside a CRM?
                </h2>
                <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink">
                  An AI agent for HubSpot or Salesforce reads your CRM records, decides on a next step and makes the
                  change through the CRM&apos;s own API. It can qualify leads, update deal stages, log calls and emails,
                  enrich contacts and draft follow-ups. Your rules decide which actions need a person&apos;s approval
                  first.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet builds custom AI agents for HubSpot and Salesforce that qualify leads, update deal stages,
                  log calls and emails and enrich contacts, with a demo on your own records before you sign. AI agents
                  for CRM are a type of agentic AI, meaning AI that takes actions in your systems after reading them.
                </p>
                <p className="mt-4 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Updated 31 October 2026 &middot; Written by{' '}
                  <a href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </a>
                  , Founder &amp; CEO
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-fj-neutral-600">
                  WHO THIS IS FOR
                </p>
                <ul className="mt-3 space-y-2 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  <li>Sales leaders and RevOps (revenue operations) leads who run a CRM for a team of reps.</li>
                  <li>Companies on HubSpot Sales Hub, Salesforce Sales Cloud, or both.</li>
                  <li>Teams where CRM data goes stale because logging comes last.</li>
                  <li>Buyers with a written brief or RFP who want a fixed price.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. TRUST STATS (page-local, left-aligned tiles) ──────────────── */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-10 md:py-12">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
              BY THE NUMBERS
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { stat: '500+', label: 'businesses served' },
                { stat: '97%', label: 'of projects delivered on time' },
                { stat: '2014', label: 'the year FactoryJet started building' },
              ].map((t) => (
                <li key={t.stat} className="rounded-2xl border border-fj-neutral-200 bg-white p-5 text-left">
                  <p className="font-fj-display text-3xl font-extrabold tracking-[-0.03em] text-fj-ink">{t.stat}</p>
                  <p className="mt-1 font-fj-body text-[0.9375rem] leading-relaxed text-fj-neutral-600">{t.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. WHAT THE AGENT DOES ───────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six CRM jobs an AI agent can take on"
          lead="Start with one. Each job is scoped and priced as its own phase, so you can prove it on your data before adding the next."
          sectors={AGENT_JOBS}
        />

        {/* ── 5. HOW IT CONNECTS ───────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="HOW IT CONNECTS"
          headline="How a Salesforce AI agent or HubSpot AI agent connects to your CRM"
          lead="No new screen for your reps. The agent writes to the records they already open, and every change shows up in the record history."
          body={
            <>
              <p>
                In HubSpot, the CRM is built from objects, records and properties. A contact is a record of the
                contact object, an email address is a property, and a contact links to its company and deals through
                associations. HubSpot explains this model in its{' '}
                <a
                  href="https://developers.hubspot.com/docs/api-reference/latest/crm/understanding-the-crm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  guide to the CRM APIs
                </a>
                . The agent reads and writes those same objects. HubSpot also runs an{' '}
                <a
                  href="https://developers.hubspot.com/mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  MCP server
                </a>{' '}
                that gives AI tools read and write access to contacts, companies, deals, tickets and activities, under
                the scopes of an app you approve. MCP (Model Context Protocol) is a standard way for an AI tool to call
                an app&apos;s functions.
              </p>
              <p>
                In Salesforce, the agent signs in through a connected app, which is an app registered in your org with
                its own keys. It uses an integration user, a Salesforce login kept only for the agent. A permission set,
                the list of what that login may see and change, limits it to the objects and fields the job needs, such
                as Lead, Contact and Opportunity. Switch on field history tracking for the fields the agent edits, and
                Salesforce shows each change on the record. The agent&apos;s own action log also records every change
                with its reason.
              </p>
              <p>
                The model itself (
                <a href="/services/claude-ai-agent-development" className={LINK_CLASS}>
                  Claude
                </a>
                , GPT or Gemini) never touches the CRM directly. It uses{' '}
                <a
                  href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  tool use
                </a>{' '}
                to ask for an action by name. Our code checks that action against your rules, and only then does the API
                call run. If the job also needs your ERP or help desk, our{' '}
                <a href="/services/ai-integration-services" className={LINK_CLASS}>
                  AI integration services
                </a>{' '}
                and our{' '}
                <a href="/services/erp-ai-agents" className={LINK_CLASS}>
                  ERP AI agents
                </a>{' '}
                cover those links, and our guide to a{' '}
                <a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026" className={LINK_CLASS}>
                  custom MCP server for your ERP or CRM
                </a>{' '}
                explains when you need one.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-600"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Approval rules we set with you
                </p>
              </div>
              <ul className="divide-y divide-fj-neutral-100 px-7">
                {APPROVAL_RULES.map((r) => (
                  <li key={r.action} className="py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}>
                      {r.action}
                    </p>
                    <p className="mt-1 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                      {r.rule}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-600">
                  Every action is logged with the old value, the new value and the reason.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. HOW A PROJECT RUNS ────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW A PROJECT RUNS"
          headline="From your brief to a live CRM agent in five steps"
          lead="The agent earns trust in stages. It suggests first, and acts alone only where the review numbers from your own CRM support it."
          stages={CRM_JOURNEY_STAGES}
          closingNote="5 STEPS · DEMO BEFORE YOU SIGN · ONE FIXED PRICE PER PHASE"
        />

        {/* ── 7. MID-PAGE CTA ──────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Get a CRM agent demo on your own records"
          sub="Send your brief or RFP. Tell us your CRM, the first job you want off your reps' plates and who approves changes. We reply with what we would build and a date for a demo on your records."
          label="See a demo on my data"
          note="Bhavesh replies within 24 hours."
        />

        {/* ── 8. HOUSE TERMS ───────────────────────────────────────────────── */}
        <section className="border-b border-fj-neutral-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                  HOW WE WORK
                </p>
                <h2 className="fj-display mt-3 text-2xl font-bold tracking-tight text-fj-ink md:text-3xl lg:text-4xl">
                  What terms do you sign before the build starts?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet quotes the build, and any support you choose, as fixed prices. We design the agent,
                  build it, launch it and stay on to support it if you want us to.
                </p>
              </div>
              <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                {HOUSE_TERMS.map((t, i) => (
                  <li key={t.title} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <p className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="fj-display mt-2 text-lg font-bold text-fj-ink">{t.title}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{t.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="YOUR OPTIONS"
          headline="Custom agent vs CRM vendor agent vs a Zapier workflow"
          lead="Each one fits a different team. Agentforce is Salesforce's own agent platform, and Breeze is HubSpot's set of AI tools. A vendor agent like these suits work that stays in one CRM. A Zapier or Make workflow suits fixed if-this-then-that steps. A custom agent suits jobs that read free text, cross systems or need your own rules."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          scrollRegionLabel="Comparison of a custom agent, a CRM vendor agent and a Zapier workflow"
          footer={
            <div className="font-fj-body text-[0.8125rem] leading-relaxed text-fj-neutral-600">
              <p className="md:hidden">Swipe the table sideways to see every column.</p>
              <p className="mt-2">
                Vendor details checked on 31 October 2026 against:{' '}
                {COMPARISON_SOURCES.map((src, i) => (
                  <span key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      {src.label}
                    </a>
                    {i < COMPARISON_SOURCES.length - 1 ? ', ' : '.'}
                  </span>
                ))}{' '}
                Vendors change their products often, so check the linked page before you decide.
              </p>
            </div>
          }
        />

        {/* ── 10. RELATED + PROOF ──────────────────────────────────────────── */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                  AGENT WORK WE HAVE SHIPPED
                </p>
                <h2 className="fj-display mt-3 text-2xl font-bold tracking-tight text-fj-ink md:text-3xl">
                  What agent work has FactoryJet already shipped?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For Washington Law Group, a US law firm, we built an AI agent that finds serious crashes involving
                  commercial vehicles in published news and police sources, checks the facts against the article
                  text, merges duplicate reports into one record and emails the firm. Lawyers review every lead in a
                  private console. A CRM agent follows the same pattern: it gathers and checks, and your team decides.
                </p>
                <p className="mt-4">
                  <a href="/case-studies/washington-law-group-accident-detection-agent" className={LINK_CLASS}>
                    Read the Washington Law Group case study
                  </a>
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-fj-neutral-600">
                  RELATED PAGES
                </p>
                <ul className="mt-3 space-y-3 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  <li>
                    <a href="/services/ai-sdr" className={LINK_CLASS}>AI SDR agents</a> for outbound prospecting and
                    fast replies to new leads.
                  </li>
                  <li>
                    <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026" className={LINK_CLASS}>
                      Agentforce pricing vs a custom AI agent
                    </a>{' '}
                    for the Salesforce cost question.
                  </li>
                  <li>
                    <a href="/services/ai-agent-development" className={LINK_CLASS}>AI agent development</a> for
                    agents outside sales, such as quoting and order entry.
                  </li>
                  <li>
                    <a href="/services/netsuite-ai-agents" className={LINK_CLASS}>NetSuite AI agents</a> when the
                    renewal or invoice data lives in NetSuite.
                  </li>
                  <li>
                    <a href="/services/ai-customer-support-agents" className={LINK_CLASS}>AI customer support agents</a>{' '}
                    for help desk work such as Zendesk tickets.
                  </li>
                  <li>
                    <a href="/services/ai-agent-monitoring" className={LINK_CLASS}>AI agent monitoring</a> for
                    watching an agent&apos;s actions and errors after launch.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions sales and RevOps leaders ask about CRM AI agents"
          lead="Straight answers on what the agent can change, who approves it, and what you own."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 11b. PRICE SOURCES (named in the cost FAQ) ───────────────────── */}
        <section className="border-b border-fj-neutral-200 bg-white py-8">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-fj-neutral-600">
              SOURCES FOR THE ANSWERS ABOVE, CHECKED 31 OCTOBER 2026
            </p>
            <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-relaxed text-fj-neutral-600">
              {MARKET_PRICE_SOURCES.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                    {src.label}
                  </a>
                  . {src.note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 12. FINAL CTA ────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="SEE IT ON YOUR RECORDS"
            headline="Watch the agent work on your own CRM data before you sign"
            sub="Send the first job you want handled. We run it on a sample of your HubSpot or Salesforce records and show you every decision and its reason."
            primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See all AI services', href: '/services' }}
            objectionHandler="Demo before you sign. Fixed price per phase. You own the code. No monthly minimum."
          />
        </div>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
