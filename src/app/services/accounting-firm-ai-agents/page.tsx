import type { Metadata } from 'next';
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
import StickyCtaLabel from '@/components/v2/StickyCtaLabel';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/accounting-firm-ai-agents, built 2026-11-24.

   Why this page exists: US Google Ads volumes (DataForSEO, location 2840,
   pulled 2026-11-24): "ai for accounting firms" 140/mo ($63 CPC), "ai agents
   for accounting" 110 ($86), "ai for bookkeeping" 170, "ai for cpas" 90,
   "accounting firm automation" 20. "ai for cpa firms", "ai for bookkeeping
   firms", "ai tax preparation automation" and "ai client document collection"
   returned no volume and are used once each in natural wording.

   Buyer: managing partner or operations lead at a US CPA, tax or bookkeeping
   firm. In-house finance teams belong to /blog/ai-agents-for-finance-
   accounting-teams-2026 and the AP/AR pages, which this page links to.

   Truth rules for anyone editing this file:
   * No accounting firm, CPA or tax client is named or implied. FactoryJet
     capability wording is copied from existing pages; the claim ledger with
     file:line is in docs/reports/us-december-2026-11-24/accounting-firm-ai-agents/.
   * Rule statements (Circular 230, IRS Publication 4557, 16 CFR Part 314) are
     restated from the linked official text as fetched with curl on 2026-11-24.
     No claim that FactoryJet or its work meets any rule.
   * The only vendor fact is Karbon's API documentation. Canopy, TaxDome and
     Financial Cents are named as software firms use, with no claim about them.
   * Dollar figures appear only in the cost FAQ: Layer3 Labs and ProductCrafters
     build ranges (rows 4 and 1 of pipeline/research/MARKET-PRICE-RANGES-2026-09-30.md).
   * Nothing on this page says where the FactoryJet team is.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList. The FAQPage
   mainEntity is generated from the exact FAQ_ITEMS array the <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/accounting-firm-ai-agents';
const PAGE_TITLE = 'AI for Accounting Firms: Custom AI Agents | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US CPA, tax and bookkeeping firms. They chase client documents, file uploads and draft QuickBooks entries. A signing preparer signs.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/accounting-firm-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for accounting firms',
    'ai agents for accounting',
    'ai agents for accounting firms',
    'ai for cpa firms',
    'ai for cpas',
    'ai for bookkeeping firms',
    'ai for bookkeeping',
    'ai tax preparation automation',
    'ai client document collection',
    'accounting firm automation',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
        alt: 'FactoryJet, custom AI agents for US CPA, tax and bookkeeping firms',
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

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Accounting Firm AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for CPA, Tax and Bookkeeping Firms',
  serviceType:
    'AI agents for accounting firms, client document collection, document filing, practice management updates, bookkeeping categorization drafts, tax season email triage',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, implements and supports AI agents for US CPA, tax and bookkeeping firms: document requests, filing, practice management updates and bookkeeping drafts. Your signing preparer, usually the reviewing CPA or EA, checks and signs every return.',
  url: CANONICAL_URL,
};

/* ── Sources. Each URL fetched with curl on 2026-11-24 (HTTP 200) and the
   quoted wording read in the fetched text. Quotes are in the claim ledger. ── */
const SRC = {
  circular230: {
    short: 'IRS: Circular 230',
    label: 'Treasury Department Circular No. 230 (Rev. 6-2014), Regulations Governing Practice before the IRS (PDF)',
    url: 'https://www.irs.gov/pub/irs-pdf/pcir230.pdf',
  },
  pub4557: {
    short: 'IRS: Publication 4557',
    label: 'IRS Publication 4557 (Rev. 6-2024), Safeguarding Taxpayer Data: A Guide for Your Business (PDF)',
    url: 'https://www.irs.gov/pub/irs-pdf/p4557.pdf',
  },
  safeguards: {
    short: 'eCFR: 16 CFR Part 314',
    label: 'eCFR: 16 CFR Part 314, Standards for Safeguarding Customer Information (the FTC Safeguards Rule)',
    url: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314',
  },
  karbonApi: {
    short: 'Karbon: Developer Center',
    label: 'Karbon Developer Center: Build custom solutions with the Karbon API',
    url: 'https://developers.karbonhq.com/',
  },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_LINK_CLASS =
  'font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]';

/* ── FAQ. Single array, rendered by <FAQ> and mapped into the FAQPage JSON-LD.
   Questions come from People Also Ask on "ai for accounting firms", "ai agents
   for accounting" (serps_raw.json) and fresh pulls on 2026-11-24 for "ai for
   cpa firms", "ai for bookkeeping" and "ai for tax preparers", plus buyer
   questions. Job, salary, exam and stock questions were left out. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI in an accounting firm' },
  { key: 'jobs', label: 'Documents, books and email' },
  { key: 'rules', label: 'Signing, security and rules' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── AI in an accounting firm ─────────────────────────────────────
  {
    category: 'basics',
    question: 'Is there an AI made specifically for accounting firms?',
    answer:
      'Yes, in three forms. Accounting and practice management software ships AI features inside the product. Ready-made products sell single jobs, such as categorizing bank lines. FactoryJet builds the third kind, an agent around your own firm that chases documents, files them and drafts entries, with a person approving the result.',
  },
  {
    category: 'basics',
    question: 'What is the best AI tool for CPA firms?',
    answer:
      "The one that removes your firm's slowest step. If your current software already has the feature, switch it on. If the job runs across your portal, inbox, Karbon or Canopy and QuickBooks at once, a custom agent fits better. Ask any vendor, us included, to run it on last season's documents before you sign.",
  },
  {
    category: 'basics',
    question: 'How are small CPA firms using AI?',
    answer:
      'Most AI for CPAs starts with the work around the return: chasing missing client documents, filing uploads, replying to status emails and categorizing bank lines for bookkeeping clients. Each repeats hundreds of times a season and needs no tax judgment. What goes on the return, and what advice a client hears, stays with the preparer and the CPA.',
  },
  {
    category: 'basics',
    question: 'Will AI replace CPAs or take over accounting firms?',
    answer:
      'No. Circular 230 places the due diligence duty on the practitioner, a person. An agent from FactoryJet gathers documents and writes drafts, and people in your firm decide what is filed. Your signing preparer, usually the reviewing CPA or EA, checks and signs every return.',
  },
  {
    category: 'basics',
    question: 'Can ChatGPT do bookkeeping?',
    answer:
      "A chat assistant can explain an entry or suggest a category for a line you paste in. It does not log in to QuickBooks Online or Xero, keep a client's rules month to month or leave a review trail. An agent built for bookkeeping does those things inside your systems, and every draft waits for a staff accountant.",
  },
  {
    category: 'basics',
    question: 'Is it safe to put client bank statements into ChatGPT?',
    answer:
      'Check your written information security plan first. IRS Publication 4557 says the FTC Safeguards Rule requires tax preparers to have one. Ask where the data is stored, who can see it, whether it trains a model and what is logged. An agent we build can run in your own cloud account, so the same plan covers it.',
  },
  // ── Documents, books and email ───────────────────────────────────
  {
    category: 'jobs',
    question: 'Can AI collect missing client documents in tax season?',
    answer:
      "Yes, and most firms start here. The agent builds each client's checklist from last year's return, compares it with what has arrived and sends reminders naming the missing items, such as a 1099-B or a K-1 from a named partnership. A week before your cut-off, your staff get a list of clients who still have gaps.",
  },
  {
    category: 'jobs',
    question: 'Can AI prepare tax returns?',
    answer:
      'AI can prepare the file a preparer works from, which is where tax preparation automation pays off. The agent gathers documents, lists what changed from last year and flags gaps. Entering figures and judging positions stay with your preparers, who carry the due diligence duty in Circular 230. Your signing preparer, usually the reviewing CPA or EA, checks and signs every return.',
  },
  {
    category: 'jobs',
    question: 'How do I bring AI into bookkeeping?',
    answer:
      'Start AI for bookkeeping with one client group and one step, often monthly categorization in QuickBooks Online or Xero for clients with steady transactions. The agent drafts an account, a vendor and a one-line reason for each bank line, and a staff accountant approves the batch. A month of approvals shows where the drafts hold up and where the rules need work.',
  },
  {
    category: 'jobs',
    question: 'Does the agent work with Karbon, Canopy, TaxDome or Financial Cents?',
    answer:
      'It uses the route each system offers outside software. Karbon publishes a developer API that creates a work item from a title, assignee, client and start date. For Canopy, TaxDome and Financial Cents we confirm during scoping which records your plan opens to outside software. Where there is no write route, updates go to a queue your team already uses.',
  },
  {
    category: 'jobs',
    question: 'Can the agent post entries in QuickBooks Online or Xero?',
    answer:
      'It drafts them, and nothing posts until a staff accountant approves. Each draft shows the bank line, the suggested account and vendor, and the reason. Approved entries go to the books through the system API. Our QuickBooks work includes a Shopify store connected to QuickBooks Enterprise, and we build Xero integrations.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent answer client emails in tax season?',
    answer:
      "It answers the routine ones. Status questions get a reply from the work item, a sent document gets a confirmation, and attachments get filed. A tax question, such as whether an expense is deductible, goes to the assigned preparer with a two-line summary. We test those rules on a sample of last season's inbox before launch.",
  },
  // ── Signing, security and rules ──────────────────────────────────
  {
    category: 'rules',
    question: 'Who signs the return when an AI agent helped prepare it?',
    answer:
      "Your signing preparer, usually the reviewing CPA or EA, checks and signs every return, as before. Circular 230 section 10.22 says a practitioner must exercise due diligence in preparing, approving and filing returns, and section 10.36 asks whoever oversees a firm's tax practice to keep adequate procedures in effect. Write the agent's limits into those procedures. Nothing here is legal advice.",
  },
  {
    category: 'rules',
    question: "Does the FTC Safeguards Rule apply to an accounting firm's AI tools?",
    answer:
      'It applies to the firm, and so reaches the vendors it uses. 16 CFR Part 314 names an accountant or tax preparation service that completes income tax returns as a financial institution. It requires multi-factor authentication for anyone accessing an information system, unless the firm\'s Qualified Individual approves an equivalent control in writing, and asks firms to oversee service providers by contract. Treat an AI builder that touches client data as one of those providers.',
  },
  {
    category: 'rules',
    question: 'What should a firm check before an AI tool touches client data?',
    answer:
      'Start with your written information security plan. Then ask every vendor, us included, where files live, which staff can open them, what gets recorded and who checks the drafts. Put the safeguards in the contract, as the Safeguards Rule asks for service providers, and have your own counsel read it.',
  },
  {
    category: 'rules',
    question: 'Will the agent file a return or move money?',
    answer:
      "No. We write those as hard limits before the build starts. The agent does not e-file, sign, send a payment or change a return after it is filed. Filing, signing and anything that moves a client's money stay with named people in your firm. The agent is built without those actions, and the only writes it has are the ones listed in your scope document.",
  },
  {
    category: 'rules',
    question: 'How do you handle security for an accounting firm?',
    answer:
      'We design the agent to fit the controls you already follow, such as SOC 2 and the written information security plan the Safeguards Rule asks tax preparers to keep. The agent has its own login limited to its job, begins with read access only and records each action it takes.',
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does AI for an accounting firm cost?',
    answer:
      "It follows the number of systems and jobs. As market guides, Layer3 Labs' 2026 guide to US agencies puts a single-workflow automation at $5,000 to $15,000 and a multi-workflow project at $15,000 to $50,000. ProductCrafters, a development firm, gives $5,000 to more than $180,000 for one custom AI agent build in its 2026 pricing breakdown. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does it take to build an agent for a CPA firm?',
    answer:
      "A pilot on one narrow workflow usually takes two to four weeks, and a production agent with permissions, logging, approvals and monitoring usually takes six to twelve. A sensible firm pilot is document chasing for individual returns. Access to your portal, practice management system and last season's documents sets the pace.",
  },
  {
    category: 'working',
    question: 'Can we watch it work on our files first?',
    answer:
      "Yes. Ahead of any contract, a first working version handles your own files. For a firm that means last season's uploads read, named and filed for you to compare with what your staff did, or a month of one client's bank lines drafted for review.",
  },
  {
    category: 'working',
    question: 'Who looks after the agent after launch?',
    answer:
      'FactoryJet does. Portals, practice management systems, QuickBooks and AI models change, and the agent is tested again when they do. Its builders keep reading the logs and repair faults. FactoryJet quotes build and support as fixed prices in writing after scoping, and keeps managing the servers, AI models, APIs and maintenance.',
  },
  {
    category: 'working',
    question: 'Does our firm own the agent and the code?',
    answer:
      'Yes. Your firm owns the code, the rule sheet and the test files, and the agent can run in your own cloud account. Should you bring the agent in-house or hand it to another provider later, everything transfers with it, including the notes on how it works.',
  },
  {
    category: 'working',
    question: 'We are an in-house finance team, not a firm. Is this for us?',
    answer:
      'This page is for CPA, tax and bookkeeping firms that serve many clients. An in-house team should read our guide to AI agents for finance and accounting teams and our accounts payable and receivable automation pages, which cover invoices and payments inside one company.',
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

/* ── Hero figure: what arrives, what the agent does, who decides. ── */
const HERO_ROWS: ReadonlyArray<{ arrives: string; does: string; decides: string }> = [
  {
    arrives: 'A client uploads three of five forms.',
    does: 'The agent names the two still missing in a reminder.',
    decides: 'Your staff decide when to pick up the phone.',
  },
  {
    arrives: 'A K-1 lands in the inbox.',
    does: 'The agent files it and ticks the checklist item.',
    decides: 'The preparer opens a complete folder.',
  },
  {
    arrives: '300 bank lines reach QuickBooks Online.',
    does: 'The agent drafts an account and a reason for each.',
    decides: 'A staff accountant approves the batch.',
  },
  {
    arrives: 'A client asks where the return stands.',
    does: 'The agent replies from the work item status.',
    decides: 'Tax questions go to the CPA.',
  },
];

/* ── Six jobs. Numbered on purpose; also feeds the ItemList JSON-LD. ── */
const JOBS: ReadonlyArray<{ n: string; t: string; b: string; who: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    n: '01',
    t: 'Chasing missing documents',
    b: "AI client document collection starts with a checklist for each client, built from last year's return: W-2s, 1099s, K-1s, brokerage statements, mortgage interest forms. The agent compares what has arrived with that list and sends a short reminder naming each gap, on the schedule you set.",
    who: 'Your staff decide which clients get a call.',
    sources: [],
  },
  {
    n: '02',
    t: 'Reading and filing uploads',
    b: 'Files arrive through a portal, by email or as phone photos. The agent works out the client, the form and the tax year, renames each file to your convention and puts it in the right folder.',
    who: 'A staff member places anything the agent could not match, from a review queue.',
    sources: [],
  },
  {
    n: '03',
    t: 'Moving work in your practice management system',
    b: "When a checklist is complete, the agent moves the work item in Karbon, Canopy, TaxDome or Financial Cents to its next status and assigns the preparer. Karbon's developer documentation describes creating and updating work items through its API.",
    who: 'Your operations lead sets which statuses it may change.',
    sources: ['karbonApi'],
  },
  {
    n: '04',
    t: 'Bookkeeping drafts in QuickBooks Online or Xero',
    b: 'For monthly bookkeeping clients, the agent reads bank and card lines, suggests an account and a vendor for each and writes its reason beside the draft. Receipts are matched to transactions where they exist.',
    who: 'A staff accountant approves each batch before anything posts.',
    sources: [],
  },
  {
    n: '05',
    t: 'Sorting the tax season inbox',
    b: 'Shared inboxes fill with "did you get my 1099?" and "is my return done?". The agent sorts each email, answers status questions from the work item, files the attachments and sends tax questions to the assigned preparer with a summary.',
    who: 'The agent gives no tax advice.',
    sources: [],
  },
  {
    n: '06',
    t: 'A change list before the preparer starts',
    b: 'Before a return is opened, the agent lists what differs from last year: a new employer, a K-1 that has not come, a 1099 from a new payer. The preparer starts from a one-page summary.',
    who: 'The preparer prepares, and the signing CPA or EA reviews and signs.',
    sources: ['circular230'],
  },
];

const jobsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Six accounting firm jobs an AI agent can take the first pass on',
  itemListElement: JOBS.map((j, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: j.t,
  })),
};

/* ── What the rules say. Restated from the linked official text. ── */
const RULES: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'Circular 230, section 10.22',
    b: 'Section 10.22 says a practitioner must exercise due diligence in preparing, approving and filing tax returns. The agent assembles the file and a named preparer checks it.',
    sources: ['circular230'],
  },
  {
    t: 'Circular 230, section 10.36',
    b: "Whoever oversees a firm's tax practice must take reasonable steps to ensure the firm has adequate procedures in effect. The agent's written limits belong in those procedures.",
    sources: ['circular230'],
  },
  {
    t: 'IRS Publication 4557',
    b: 'The IRS guide says the Gramm-Leach-Bliley Act definition of financial institutions includes professional tax preparers, and that the FTC Safeguards Rule requires a written information security plan.',
    sources: ['pub4557'],
  },
  {
    t: 'The Safeguards Rule, 16 CFR Part 314',
    b: 'The rule names an accountant or other tax preparation service that completes income tax returns as a financial institution. It requires multi-factor authentication for anyone accessing an information system, unless the firm\'s Qualified Individual approves an equivalent control in writing, and asks firms to oversee service providers by contract.',
    sources: ['safeguards'],
  },
];

/* ── Comparison: three routes. Cells describe typical patterns, not named firms. ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 AI inside your current software' },
  { label: '02 A ready-made accounting AI product' },
  { label: '03 A custom agent for your firm' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'AI features inside the accounting or practice management software you already pay for',
      'A subscription product that does one job, such as categorization or document requests',
      'An agent designed around your checklists, folders and systems, built for you',
    ],
  },
  {
    feature: 'What it covers',
    values: [
      'Work that happens inside that one product',
      'Its one job, in the systems it supports',
      'A job that crosses your portal, inbox, practice management system and books',
    ],
  },
  {
    feature: 'Who sets the rules',
    values: ['Set by the maker; you adjust options', 'The vendor, tuned to your firm', 'Your firm, on one page, before the build'],
  },
  {
    feature: 'Who approves and signs',
    values: [
      'Your staff and CPAs',
      'Your staff and CPAs',
      'Your staff and CPAs, with every hand-off named in writing',
    ],
  },
  {
    feature: 'How you pay',
    values: [
      'Often bundled with the plan, or sold as an extra',
      'Usually a subscription per user or per client',
      'Two written fixed prices, one to build and one to support, agreed after scoping',
    ],
  },
  {
    feature: 'Who fixes it',
    values: ['Whoever makes that software', 'Whoever sells that product', 'The engineers who built your agent'],
  },
  {
    feature: 'Pick it when',
    values: [
      'The whole job sits in one product',
      'The job is standard and the product supports your systems',
      'The job follows your own checklist or spans two or more systems',
    ],
  },
];

/* ── Process. Five steps in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Map one season',
    b: "What clients send and where it lands, read from last season's portal, inbox and work items.",
  },
  {
    n: '02',
    t: 'Check what you already own',
    b: 'If your practice management system or accounting software covers the job, we say so and the project ends there.',
  },
  {
    n: '03',
    t: 'Choose one queue and put its limits on paper',
    b: 'One job, such as document chasing for individual returns. What the agent may send, file and change, and who receives each hand-off, fits on one page.',
  },
  {
    n: '04',
    t: 'See it on your own documents',
    b: "A first version runs on a copy of last season's uploads before you sign anything.",
  },
  {
    n: '05',
    t: 'Read-only first, then support',
    b: 'The agent starts by reading. Each write permission is switched on separately after your team reviews its drafts. After launch, its builders keep reading the logs and repair faults.',
  },
];

/* ── What FactoryJet brings. Wording matches existing pages (see ledger). ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'Bookkeeping and ERP work',
    kind: 'Odoo · NetSuite · SAP Business One · ERPNext',
    what: 'On Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, our agents have handled RFQs (requests for quote), quoting, purchase orders, sales orders and daily bookkeeping. Our integration work covers HubSpot, WhatsApp, Xero and EDI (electronic data interchange).',
    href: '/services/ai-agent-development',
    cta: 'See AI agent development',
    span: 'lg:col-span-7',
  },
  {
    t: 'QuickBooks',
    kind: 'QuickBooks Enterprise · QuickBooks Online',
    what: "Exaco's Shopify store for its European Garden brand is connected to QuickBooks Enterprise, and the store and the QuickBooks link are both live. A Shopify to QuickBooks Online connection is in progress.",
    href: '/services/shopify-quickbooks-integration',
    cta: 'See our QuickBooks work',
    span: 'lg:col-span-5',
  },
  {
    t: 'A demo before the contract',
    kind: 'Working software on your data',
    what: "You see working software running on your own data before any contract is signed. For a firm, that means last season's uploads filed for you to check.",
    href: '/contact',
    cta: 'Book a demo on your own documents',
    span: 'lg:col-span-5',
  },
  {
    t: 'Track record',
    kind: 'Founded 2014 · 500+ businesses served · 97% on-time delivery',
    what: 'Since 2014, more than 500 businesses have hired FactoryJet. Prices are set per phase, in writing, before work begins, and the code belongs to you.',
    href: '/about',
    cta: 'Read about FactoryJet',
    span: 'lg:col-span-7',
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'PDFs, forms and attachments read and filed, any industry.' },
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: 'Vendor invoices matched and routed inside one company.' },
  { href: '/services/accounts-receivable-automation', t: 'Accounts receivable automation', b: 'Reminders, cash application and disputes in-house.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Store orders and payouts posted to QuickBooks.' },
  { href: '/services/financial-services-ai-agents', t: 'Financial services AI agents', b: 'Agents for banks, lenders and advisory firms.' },
  { href: '/blog/ai-agents-for-finance-accounting-teams-2026', t: 'AI agents for finance and accounting teams', b: 'Our guide for in-house finance departments.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for any industry.' },
  { href: '/services/ai-customer-support-agents', t: 'AI customer support agents', b: 'Chat and email replies that check the record first.' },
];

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

export default function AccountingFirmAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    CPA, TAX AND BOOKKEEPING FIRMS &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.1rem]">
                  AI for accounting firms: agents that chase the documents, file them and draft the books for your CPAs to approve.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet designs, builds, implements and supports custom AI agents for CPA, tax and bookkeeping
                  firms with 10 to 200 staff.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_accounting_firm_ai_agents_hero"
                    service="Accounting Firm AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  An agent asks for the missing W-2 or K-1, files each upload and moves the work item in Karbon, Canopy,
                  TaxDome or Financial Cents. In QuickBooks Online or Xero it drafts categorized transactions for a staff
                  accountant to approve. Your signing preparer, usually the reviewing CPA or EA (enrolled agent), checks and signs every return.
                </p>

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
                  <span>Your files, a working demo, then a contract</span>
                  <span>500+ businesses served</span>
                  <span>97% on-time delivery</span>
                  <span>Founded 2014</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-tax-season-desk.webp`}
                    alt="A man in his fifties with close cropped gray hair and a charcoal quarter zip stands at a scanning station feeding a stack of client papers into a document scanner, beside an orange mug"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                      From the inbox to a named person
                    </div>
                    <ul className="mt-3 grid gap-2.5 font-fj-body text-[13px] leading-snug text-fj-ink">
                      {HERO_ROWS.map((r) => (
                        <li key={r.arrives} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                          <span>
                            <span className="font-semibold">{r.arrives}</span> {r.does}{' '}
                            <span className="text-fj-neutral-600">{r.decides}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </figcaption>
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
                For most accounting firms, the first useful AI job is the document chase around each return; the tax
                judgment stays with your CPAs. FactoryJet builds agents that request missing W-2s, 1099s and K-1s, file every
                upload to the right client folder and practice management task, and draft bookkeeping entries. A staff
                accountant approves. Your signing preparer, usually the reviewing CPA or EA, checks and signs every return.
              </p>
              <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                You see the agent working on last season&rsquo;s documents before you sign. Each phase has a fixed
                price in writing, and your firm owns the code.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIX JOBS (numbered list) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Six jobs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Which jobs can AI agents take on in an accounting firm?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  AI agents for accounting firms take the first pass on six jobs that pile up before the April and
                  October deadlines: chasing documents, filing them, moving work items, drafting bookkeeping entries,
                  sorting email and summarizing changes. None of them signs, files or advises.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  For document reading outside accounting, see{' '}
                  <Link
                    href="/services/document-intake-ai-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    document intake AI agents
                  </Link>
                  .
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {JOBS.map((j) => (
                  <li key={j.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {j.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{j.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{j.b}</p>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span className="font-semibold">Who decides.</span> {j.who}
                      </p>
                      <SourceLinks ids={j.sources} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. WHO SIGNS: THE RULES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Who signs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Who signs a return when an agent helped prepare it?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your signing preparer, usually the reviewing CPA or EA, checks and signs every return. The agent prepares and a named person decides.
                  Two sets of federal rules shape how we set that up: Treasury Circular 230 for anyone who practices
                  before the IRS, and the FTC Safeguards Rule, which covers firms that complete income tax returns.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  We design the agent to fit the controls you already follow, such as SOC 2 and your written
                  information security plan. Each statement here was read in the official text on {CHECKED_ON}.
                  Nothing on this page is legal advice.
                </p>
              </div>
              <ul className="grid gap-4 lg:col-span-7">
                {RULES.map((r) => (
                  <li key={r.t} className="rounded-2xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream px-6 py-5">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{r.b}</p>
                    <SourceLinks ids={r.sources} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON */}
        <ComparisonTable
          eyebrow="Three routes"
          headline="Use the AI in your software, rent a product, or commission an agent."
          lead="Accounting firm automation comes in three shapes. On the scoping call you hear which one we would choose in your seat, with reasons."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Columns describe typical patterns for each route, not any named vendor."
          scrollRegionLabel="Comparison of three ways an accounting firm can add AI"
        />

        <MidPageCTA
          headline="Send us last season's worst week. We will tell you which part an agent should take."
          sub="Missing documents, misfiled uploads, a bookkeeping backlog or a full inbox. We reply with what your software covers, what deserves a build and a written fixed quote for that piece."
          label="Scope my agent"
        />

        {/* 6. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for CPA and tax firms, and for bookkeeping firms.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  AI for CPA firms and AI for bookkeeping firms suit offices that run a client portal, a practice management system and QuickBooks Online or
                  Xero. Firms doing both returns and monthly books usually start with whichever queue is longer in
                  January.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                <li className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/client-dropoff-orange-folder.webp`}
                    alt="A woman in her thirties with curly red hair and a mustard sweater uploads photos of tax forms from her phone at a kitchen table, beside an orange notebook"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">CPA and tax firms</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                      Individual and business returns, extensions and amended returns. The agent runs the document
                      chase and files every upload, so preparers open a complete folder.
                    </p>
                  </div>
                </li>
                <li className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/bookkeeping-review-laptop.webp`}
                    alt="A woman in her fifties with a silver bob in a green blazer points at a laptop while a man in his thirties with short black hair in a navy sweater looks on, beside a closed orange folder on a white table"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Bookkeeping firms</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                      Monthly close for many small clients in QuickBooks Online or Xero. The agent drafts categories and
                      matches receipts, and a staff accountant approves each batch.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How long does it take to get an agent working?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions,
                  logging, approvals and monitoring usually takes six to twelve weeks. A pilot started in early December can
                  be tested on copies of last season&rsquo;s uploads before January.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
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

        {/* 8. WHAT FACTORYJET BRINGS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">FactoryJet</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              The work behind these agents.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {EXPERIENCE.map((w) => (
                <li key={w.t} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-white p-6 ${w.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.t}</h3>
                  <div className="mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600">
                    {w.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{w.what}</p>
                  <Link
                    href={w.href}
                    className="mt-4 inline-flex min-h-11 min-w-11 items-center gap-1.5 py-2 font-fj-body text-sm font-semibold text-[#B23E13] hover:underline"
                  >
                    {w.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. RELATED */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Related pages</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Other finance and agent work beside this.
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

        {/* 10. SOURCES */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Rule statements come from the IRS and eCFR text linked here, and the Karbon detail from its developer
                  documentation. These texts change, so check each link again before acting on a detail.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              {/* Literal hrefs on purpose: each URL was fetched with curl on 2026-11-24. Keep in step with SRC. */}
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                <li>
                  <a href="https://www.irs.gov/pub/irs-pdf/pcir230.pdf" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                    {SRC.circular230.label}
                  </a>
                </li>
                <li>
                  <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                    {SRC.pub4557.label}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SOURCE_LINK_CLASS}
                  >
                    {SRC.safeguards.label}
                  </a>
                </li>
                <li>
                  <a href="https://developers.karbonhq.com/" target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
                    {SRC.karbonApi.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <FAQ
          eyebrow="AI for accounting firms FAQ"
          headline="Straight answers for CPA, tax and bookkeeping firms."
          lead="Questions from managing partners and operations leads before the season starts."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 12. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for accounting firms"
          headline="Keep the judgment with your CPAs. Give the document chase to an agent."
          sub="Name the queue that eats most of your season. We check what your software already does, run a first version on last season's documents and stay on after go-live."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="See it run on your own files before signing, with a written fixed price for each phase."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
