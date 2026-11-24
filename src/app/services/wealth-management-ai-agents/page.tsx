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
   /services/wealth-management-ai-agents, built 2026-11-24.

   Why this page exists: US Google Ads volumes pulled 2026-11-24 (DataForSEO,
   location 2840): "ai for wealth management" 880/mo ($21 CPC; Dec 2025 590,
   Mar 2026 1,000), "ai in wealth management" 880 (same keyword cluster),
   "ai for financial advisors" 210 ($34), "ai tools for financial advisors"
   110, "ai agents for financial advisors" 20. "ai for ria", "ai meeting
   notes for financial advisors" and "ai for advisor client onboarding"
   returned no volume and are used only where the wording is natural.

   Angle: agents for the operations around advice, never the advice. Meeting
   prep, post-meeting notes and tasks, new-account paperwork and NIGO checks,
   client email triage. A licensed person decides advice, trades and anything a
   client reads as marketing.

   Truth rules for anyone editing this file:
   * No RIA, broker-dealer or family office client is named or implied.
   * Rule text (SEC 206(4)-1, SEC 204-2, FINRA 2210, FINRA Regulatory Notice
     24-09) is restated from the linked pages as read on 2026-11-24. The eCFR
     pages were fetched live with curl. finra.org answered curl with a
     Cloudflare challenge, so the two FINRA pages were read in Internet Archive
     copies dated 4 Nov 2026 (2210) and 17 Nov 2026 (24-09). The page never
     says FactoryJet or its work meets any rule.
   * Jump and Zocks facts come from their own homepages read 2026-11-24.
   * Capability wording matches existing FactoryJet pages; the ledger with
     file:line is in docs/reports/us-december-2026-11-24/wealth-management-ai-agents/.
   * No FactoryJet prices. The only dollar figure is the ProductCrafters build
     range (market-price row 1) in one FAQ answer.
   * Nothing on this page says where the FactoryJet team is.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList. The FAQPage
   mainEntity is generated from the exact FAQ_ITEMS array the visible <FAQ>
   component renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/wealth-management-ai-agents';
const PAGE_TITLE = 'AI for Wealth Management: AI Agents for RIAs | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US RIAs: meeting prep, CRM notes and tasks, NIGO (not in good order) paperwork checks and email triage. Advisors approve every draft.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/wealth-management-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for wealth management',
    'ai in wealth management',
    'ai for wealth managers',
    'ai for financial advisors',
    'ai tools for financial advisors',
    'ai agents for financial advisors',
    'ai for ria',
    'ai for registered investment advisors',
    'ai meeting notes for financial advisors',
    'ai for advisor client onboarding',
    'nigo checks ai',
    'wealth management ai agents',
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
        alt: 'FactoryJet, custom AI agents for US wealth management firms and advisor practices',
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
  { name: 'Wealth Management AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for Wealth Management Firms and Financial Advisors',
  serviceType:
    'AI agents for wealth management operations, meeting prep packs, post-meeting notes and follow-up tasks in advisor CRMs, new-account paperwork intake and NIGO (not in good order) checks, client email triage',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, implements and supports AI agents for US registered investment advisers, advisor practices, broker-dealer branches and family offices. The agents prepare meeting packs, draft CRM notes and tasks, check account paperwork and sort client email. A licensed person approves the output and keeps advice and trades.',
  url: CANONICAL_URL,
};

/* ── Sources. One map for inline links and the Sources list. ── */
const SRC = {
  secMarketing: {
    short: 'SEC Marketing Rule, 17 CFR 275.206(4)-1',
    url: 'https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1',
  },
  secRecords: {
    short: 'SEC books and records, 17 CFR 275.204-2',
    url: 'https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2',
  },
  finra2210: {
    short: 'FINRA Rule 2210',
    url: 'https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210',
  },
  finra2409: {
    short: 'FINRA Regulatory Notice 24-09',
    url: 'https://www.finra.org/rules-guidance/notices/24-09',
  },
  jump: {
    short: 'Jump',
    url: 'https://jumpapp.com/',
  },
  zocks: {
    short: 'Zocks',
    url: 'https://www.zocks.io/',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly and mapped into the FAQPage JSON-LD.
   Questions come from People Also Ask on US Google results pulled 2026-11-24
   ("ai for wealth management", "ai for financial advisors", "ai tools for
   financial advisors") plus buyer questions. Career, salary and consumer
   questions left out. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI for advisors' },
  { key: 'jobs', label: 'Notes, paperwork and email' },
  { key: 'rules', label: 'Rules and control' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── AI for advisors ─────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is AI for wealth management?',
    answer:
      'In an advisory firm it means software that does one routine operations job and hands off before any advice. It builds a meeting prep pack, drafts notes and tasks into the CRM, checks account paperwork before it goes to the custodian or sorts client email. A person approves each result.',
  },
  {
    category: 'basics',
    question: 'How can a financial advisor use AI?',
    answer:
      'Start with the hours around a client meeting. Before it, an agent gathers the last notes, open tasks and account activity into one page. After it, the agent drafts the notes, tasks and recap email for the advisor to edit. Recommendations stay with the advisor.',
  },
  {
    category: 'basics',
    question: 'Will financial planners be replaced by AI?',
    answer:
      'The agents FactoryJet builds leave planners in charge: they prepare and draft, and a licensed person decides. At a broker-dealer, FINRA Rule 2210 requires a qualified principal to approve each retail communication (one sent to more than 25 retail investors in 30 days) before use, and FINRA says its content standards apply whether a person or a technology tool wrote it.',
  },
  {
    category: 'basics',
    question: 'Can I use ChatGPT for financial advice?',
    answer:
      'For a firm, ask which jobs a model may touch. A public chat tool cannot see your CRM, and client data pasted into it leaves your systems. The agents we build run on Claude, GPT or Gemini behind your approval rules, and advice stays with the advisor.',
  },
  {
    category: 'basics',
    question: 'What is the best AI agent for financial advice?',
    answer:
      'We build none that gives advice, so we group options by job. For meeting notes and follow-ups, Jump and Zocks each sell an assistant built for advisors. Your CRM may include AI of its own. A custom agent fits when one job crosses your CRM, your portfolio system and your own checklist.',
  },
  {
    category: 'basics',
    question: 'Is there a ChatGPT for finance?',
    answer:
      'ChatGPT, Claude and Gemini handle finance text well but know nothing about your households until software connects them to your records. Jump and Zocks make that connection for meetings. A custom agent makes it for the workflow your firm runs.',
  },
  {
    category: 'basics',
    question: 'What are AI agents for financial advisors?',
    answer:
      'Programs that carry one operations job to a hand-off. A prep agent writes a meeting brief from CRM and portfolio records. A notes agent turns a transcript into notes and tasks in your template. A paperwork agent checks an account packet for gaps. Each waits for a person.',
  },
  // ── Notes, paperwork and email ──────────────────────────────────
  {
    category: 'jobs',
    question: 'Which AI tools do financial advisors use for meeting notes?',
    answer:
      'Advisor meeting assistants. Jump lists a notetaker, an auto-generated meeting brief, post-meeting data sync into your CRM and follow-up emails. Zocks says it schedules the meeting, preps you, takes notes, updates your CRM and planning tools and writes a follow-up email. For one meeting workflow, try those first.',
  },
  {
    category: 'jobs',
    question: 'When does a custom agent make more sense than a meeting-note app?',
    answer:
      'When the work after the meeting spreads across systems and people: notes in your own Wealthbox template, an operations task for an account transfer and a compliance flag on any complaint. If an app covers your whole flow, use it.',
  },
  {
    category: 'jobs',
    question: 'Can an agent write notes and tasks into Redtail, Wealthbox or Salesforce?',
    answer:
      'Yes, through the access each vendor provides. The agent gets its own login, limited to what the job requires. Each note lands on the right household, and an unclear match goes to a review list. Name your CRM and edition, and before quoting we check which reads and writes its API permits.',
  },
  {
    category: 'jobs',
    question: 'Can AI help with advisor client onboarding?',
    answer:
      'Yes, on the paperwork side. An agent reads each form in a new-account packet, checks names, dates, signatures and beneficiaries against the CRM record and your custodian checklist, and lists gaps before submission. Operations fixes and submits. The advice behind the account stays with the advisor.',
  },
  {
    category: 'jobs',
    question: 'What does NIGO mean?',
    answer:
      'NIGO stands for not in good order. The custodian, the firm that holds the client assets, sends back a form that is missing a signature, a date, an account number or a field it requires. A check before submission catches those gaps while the packet is still with your team.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent sort and answer client emails?',
    answer:
      'Yes, with a person approving replies. It reads the message with its history, finds the household and labels it as a document request, service task, money movement, complaint or advice question. The last three go to a person. It starts in shadow mode, drafting while your team sends. After that, replies go out only after a person approves them, unless your compliance lead writes narrower rules.',
  },
  // ── Rules and control ───────────────────────────────────────────
  {
    category: 'rules',
    question: 'Does the SEC Marketing Rule cover content an AI drafts?',
    answer:
      'The rule, 17 CFR 275.206(4)-1, defines an advertisement by what it does, such as a communication to more than one person that offers advisory services. The definition describes the communication and says nothing about the tool that drafted it. It bars untrue statements of material fact. So we leave marketing out of agent scope, and your compliance team decides how the rule applies.',
  },
  {
    category: 'rules',
    question: 'What does FINRA say about firms using generative AI?',
    answer:
      'FINRA Regulatory Notice 24-09 says its rules are meant to be technologically neutral and apply to AI as to any other tool. Citing Rule 3110 on supervision, it says a firm using generative AI in its supervisory system should have policies covering model risk management, data privacy and integrity, and the reliability and accuracy of the AI model.',
  },
  {
    category: 'rules',
    question: 'Are AI drafts and notes part of our books and records?',
    answer:
      'Ask your chief compliance officer. The SEC books-and-records rule, 17 CFR 275.204-2, requires an adviser to keep copies of written communications sent that relate to any recommendation or advice given. We log every draft, edit and send for your archive.',
  },
  {
    category: 'rules',
    question: 'Will the agent place trades or move money?',
    answer:
      'No. Trades, transfers, withdrawals and changes to an investment plan go on the written hand-off list before any build work. When a client asks for one, the agent logs the request, attaches the record and passes it to the named person. It never confirms a transfer to a client.',
  },
  {
    category: 'rules',
    question: 'How is client data protected?',
    answer:
      'We design the agent to fit the controls you already follow, such as SOC 2 and your written information security policy. It has its own limited login, the model can sit in a cloud or Anthropic or OpenAI account your firm holds, and every action is logged with its reason.',
  },
  // ── Working with us ─────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom AI agent for an RIA cost?',
    answer:
      "It follows the work, mainly how many systems the agent reads and writes. For a market reference, ProductCrafters, a development firm, prices custom AI agent builds at $5,000 to $180,000 or more in its 2026 cost guide. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a wealth management AI agent take to build?',
    answer:
      'A pilot on one job usually runs two to four weeks; post-meeting notes for two advisors is a sensible first one. Going to production, once access limits, logs, sign-off steps and monitoring are in, takes six to twelve weeks. CRM access sets the pace.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before any contract, the agent works through a sample from your files, anonymized if you like: ten past transcripts turned into notes in your template, say, or twenty old packets checked for the gaps your custodian flagged. You compare the output with what your team did.',
  },
  {
    category: 'working',
    question: 'Who supports the agent after launch, and who owns it?',
    answer:
      'FactoryJet keeps running the hosting, models, API links and upkeep, and re-tests the agent whenever your CRM or the model changes. After scoping, you get build and support as two fixed written prices. The code, the prompts and the written rules belong to your firm.',
  },
  {
    category: 'working',
    question: 'Does this suit a family office or a broker-dealer branch?',
    answer:
      'Yes. In a family office the agent sorts each statement and entity document into the right entity\'s records and lists what is missing. In a broker-dealer branch, drafts route to the principal your firm names under FINRA supervision. In both, the agent prepares and a person decides.',
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

/* ── Hero figure. What comes in, what the agent drafts, who signs off. ── */
const HERO_ROWS: ReadonlyArray<{ arrives: string; does: string; decides: string }> = [
  {
    arrives: 'A review meeting is tomorrow.',
    does: 'The agent builds the prep pack from the CRM and portfolio records.',
    decides: 'The advisor sets the agenda.',
  },
  {
    arrives: 'The meeting ends.',
    does: 'The agent drafts notes, tasks and the recap email.',
    decides: 'The advisor edits and approves.',
  },
  {
    arrives: 'A new-account packet arrives.',
    does: 'The agent lists the NIGO (not in good order) gaps it finds before submission.',
    decides: 'Operations fixes and submits.',
  },
  {
    arrives: 'A client emails about a transfer.',
    does: 'The agent labels it and attaches the record.',
    decides: 'A named person acts on it.',
  },
];

/* ── Four jobs, numbered on purpose (the listicle section). No wealth client
   is claimed. Each ends with a hand-off. ── */
type Job = { n: string; title: string; body: string; items: ReadonlyArray<string>; note: string; sources: ReadonlyArray<SrcKey>; span: string };

const JOBS: ReadonlyArray<Job> = [
  {
    n: '01',
    title: 'Meeting prep packs',
    body: 'Before a review, someone opens four screens to gather notes, tasks, balances and money movement. The agent writes that page.',
    items: [
      'Reads the last notes and open tasks in Redtail, Wealthbox or Salesforce Financial Services Cloud',
      'Adds positions and cash flows from Orion, Black Diamond or a custodian file, wherever your access allows. We confirm what each system\'s API allows before we quote.',
      'Lists unsigned forms and service requests still open for the household',
      'Saves the pack to the CRM record the evening before, once writes are switched on',
    ],
    note: 'Jump lists an auto-generated meeting brief and Zocks says it preps you. A custom agent fits when the pack also needs portfolio data and your checklist.',
    sources: ['jump', 'zocks'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Post-meeting notes and follow-up tasks',
    body: 'The agent turns the transcript your firm already captures into notes in your template, then drafts each follow-up task with an owner and a due date.',
    items: [
      'Matches the notes to the right household and contact, and sends an unclear match to a review list',
      'Drafts tasks for operations, such as a beneficiary update or an account transfer form',
      'Drafts the recap email for the advisor to edit and send',
      'Saves nothing until the advisor approves it',
    ],
    note: 'Jump lists post-meeting data sync into your CRM and automatic follow-ups. Zocks says it updates your CRM and planning tools. A custom agent fits when tasks fan out to several teams by rules only your firm uses.',
    sources: ['jump', 'zocks'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'New-account paperwork and NIGO checks',
    body: 'NIGO means not in good order: the custodian sends back a form with a missing signature, date or field. The agent checks the packet first.',
    items: [
      'Sorts a mixed PDF into each form it holds',
      'Reads every field you list and checks it against the CRM record',
      'Marks each field sure or unsure, and shows a reviewer the doubtful ones beside the page',
      'Leaves submission to your operations team',
    ],
    note: 'Jump lists real-time account opening that prefills applications. A checking agent suits a firm with several custodians, or a checklist built from its own past rejections. Our document intake page explains the reading and checking steps.',
    sources: ['jump'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Client email triage',
    body: 'A shared service inbox mixes document requests, address changes, transfer questions and advisor notes. The agent sorts each one.',
    items: [
      'Reads each email with its history and finds the household in the CRM',
      'Labels it and opens a task in the right queue',
      'Drafts a reply for routine requests from what the record shows',
      'Sends money movement, complaints and advice questions straight to a named person',
    ],
    note: 'It starts in shadow mode, drafting while your team sends. After that, replies go out only after a person approves them, unless your compliance lead writes narrower rules. Every draft and send is logged for your records.',
    sources: ['secRecords'],
    span: 'lg:col-span-7',
  },
];

/* ── Who decides. What the rule text says, and the line the agent keeps. ── */
const RULES: ReadonlyArray<{ rule: string; says: string; line: string; source: SrcKey }> = [
  {
    rule: 'SEC Marketing Rule',
    says: 'An advertisement includes a communication to more than one person that offers advisory services. It may not include any untrue statement of a material fact.',
    line: 'The agent drafts no marketing. Recap emails to one household go to the advisor before sending.',
    source: 'secMarketing',
  },
  {
    rule: 'FINRA Rule 2210',
    says: 'An appropriately qualified registered principal must approve each retail communication (one sent to more than 25 retail investors within 30 days) before its use or filing with FINRA, whichever comes first.',
    line: 'In a broker-dealer branch, drafts route to the principal your firm names.',
    source: 'finra2210',
  },
  {
    rule: 'FINRA Regulatory Notice 24-09',
    says: 'The content standards of Rule 2210 apply whether a person or a technology tool generated the communication.',
    line: 'An AI draft gets the same review as one a person wrote.',
    source: 'finra2409',
  },
  {
    rule: 'SEC books and records',
    says: 'An adviser keeps copies of written communications sent relating to any recommendation or advice given.',
    line: 'Every draft, edit and send is logged for your archive.',
    source: 'secRecords',
  },
];

/* ── Comparison: three routes to AI for financial advisors. Cells describe
   typical patterns. Named facts come from the vendors' own pages. ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 A meeting-note assistant' },
  { label: '02 AI inside your CRM' },
  { label: '03 An agent built for your firm' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'A subscription made for advisors, such as Jump or Zocks',
      'Features your CRM vendor adds, as in Wealthbox, which calls itself an AI-powered CRM workspace',
      'An agent designed around your workflow and systems, built for you',
    ],  },
  {
    feature: 'Who writes the rules',
    values: ['The vendor, with settings you choose', 'The CRM vendor', 'Your firm, on paper, before the build'],
  },
  {
    feature: 'Who approves output',
    values: ['Your advisors', 'Your advisors', 'A named person per job, written into the hand-off list'],
  },
  {
    feature: 'How you pay',
    values: ['A subscription per user, typically', 'Inside your CRM plan or as an add-on', 'Fixed prices in writing for build and support, after scoping'],
  },
  {
    feature: 'Right call when',
    values: ['The job is meeting notes and follow-up', 'Everything the job needs lives in the CRM', 'Your process spans several systems or uses your own checklist'],
  },
];

/* ── Five questions to ask before you buy AI tools for financial advisors. ── */
const ASK: ReadonlyArray<{ n: string; t: string; b: string }> = [
  { n: '01', t: 'Which job costs the most hours a week?', b: 'Count prep, notes, paperwork rework and inbox sorting for one week. Start with the largest.' },
  { n: '02', t: 'Does one app already cover it?', b: 'If the job is meeting notes inside one CRM, trial an advisor notetaker first.' },
  { n: '03', t: 'How many systems does it touch?', b: 'Two or more, such as the CRM, a portfolio system and custodian forms, is where a custom agent starts to make sense.' },
  { n: '04', t: 'Can the hand-off list fit on one page?', b: 'List what the agent may draft. Advice, trades and marketing always go to a person.' },
  { n: '05', t: 'Who signs off each hand-off?', b: 'Name one person per queue before the build. Your compliance lead should read the list too.' },
];

/* ── Controls. Three we set up, two your people keep. ── */
const GUARDS: ReadonlyArray<{ rule: string; who: 'build' | 'person'; note: string }> = [
  { rule: 'Read first, write later', who: 'build', note: 'Version one reads your records and cannot change them. Writes are added after you review its drafts.' },
  { rule: 'Its own login', who: 'build', note: 'The agent has its own account, scoped so it cannot open records outside its job.' },
  { rule: 'A log of every action', who: 'build', note: 'Each note, task, draft and send is logged with what changed and why.' },
  { rule: 'Advice and trades', who: 'person', note: 'Recommendations, trades, transfers and plan changes stay with your advisors and the people they name.' },
  { rule: 'Client-facing words', who: 'person', note: 'Anything a client could read as marketing goes through the approval your firm already runs.' },
];

/* ── Who this suits. Kinds of office, not a client list. ── */
const FITS: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/ria-ops-paperwork-check.webp`,
    alt: 'A woman in her fifties with a white pixie cut and a teal blouse checks a paper form against a clipboard checklist at a round meeting table, with an orange cable reel on a cabinet behind her',
    t: 'RIAs and multi-advisor practices',
    b: 'Several advisors share one operations team. The agent drafts for each advisor and checks every packet before submission.',
  },
  {
    img: `${IMG}/branch-office-advisor-tasks.webp`,
    alt: 'A man in his forties with curly black hair and a light blue shirt reviews a laptop screen of simple gray blocks at a wooden desk, holding an orange mug, while a woman in her twenties with a ponytail stands beside him with a notebook',
    t: 'Broker-dealer branches',
    b: 'Work runs under FINRA supervision. Drafts route to the principal your firm names, and every send is logged.',
  },
  {
    img: `${IMG}/family-office-ops-table.webp`,
    alt: 'A woman in her sixties with silver hair and a cream cardigan and a man in his thirties with a beard and a green sweater sort paper files at a long pale table beside an orange cable reel',
    t: 'Family office operations',
    b: 'One family, many entities. The agent sorts each statement and entity document into the right entity\'s records and lists what is missing.',
  },
];

const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  { n: '01', t: 'Map one week of operations work', b: 'What arrives, and where each record lives.' },
  { n: '02', t: 'Check what you already own', b: 'If your CRM or a notetaker covers the job, we say so and you can stop there.' },
  { n: '03', t: 'See it on your own records', b: 'A first version runs on past transcripts or packets before signing.' },
  { n: '04', t: 'Build read-only, then add writes', b: 'One job, its own login and a written hand-off list, with each write switched on separately.' },
  { n: '05', t: 'Shadow, then support', b: 'Your team reviews every draft for an agreed period. After go-live we read the logs and re-test after each change.' },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Four AI agent jobs in wealth management operations',
  itemListElement: JOBS.map((j, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: j.title,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/financial-services-ai-agents', t: 'Financial services AI agents', b: 'Agents for banks, credit unions and lenders.' },
  { href: '/services/crm-ai-agents', t: 'CRM AI agents', b: 'Activity logging and follow-up drafts in HubSpot or Salesforce.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'Sorting, reading and checking inbound forms.' },
  { href: '/services/ai-customer-support-agents', t: 'AI customer support agents', b: 'Email and chat replies that look up the record first.' },
  { href: '/blog/best-ai-agent-companies-financial-services', t: 'AI agent companies for financial services', b: 'Builders of agents for finance, compared.' },
  { href: '/blog/ai-agent-security-risks-controls-2026', t: 'AI agent security risks and controls', b: 'Controls to ask about before an agent touches client data.' },
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

export default function WealthManagementAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />
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
                    AI FOR WEALTH MANAGEMENT &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI for wealth management: custom agents for the operations around advice, with the advisor deciding.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet designs, builds, implements and supports AI agents for registered investment advisers
                  (RIAs), multi-advisor practices, broker-dealer branches and family office operations teams in the
                  United States.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_wealth_management_ai_agents_hero"
                    service="Wealth Management AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="See the agent on your own records before signing. The founder answers within 24 hours."
                  />
                </div>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  The agents draft into Redtail, Wealthbox or Salesforce for your people to approve. Advice, trades and anything a client reads as marketing stay with a licensed person.
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
                  <span>Working demo first, contract second</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>You own the code</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-ops-desk-review.webp`}
                    alt="A woman in her forties with shoulder length brown hair and a navy blazer reviews a laptop screen of simple gray blocks at a pale wooden desk while a man in his thirties with short dark hair and a white shirt holds a printed page turned away from the camera, beside an orange mug"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                      What comes in, what the agent drafts, who signs off
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
                AI for wealth management works best on the operations around advice. FactoryJet builds custom agents
                that prepare meeting packs, draft notes and tasks into your CRM, check account paperwork for NIGO (not in good order) gaps
                and sort client email. The advisor or an operations lead approves every draft. Advice, trades and
                marketing stay with licensed people.
              </p>
              <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                You watch it run on your own records before signing, every phase is priced in writing up front, and your firm owns the code.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FOUR JOBS (numbered listicle) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Four jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What can AI agents for financial advisors do in an RIA?
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Agents for financial advisors take on four operations jobs, and each one ends with a person. Each card shows what an off-the-shelf tool already covers and where a build makes sense. For the general CRM pattern
              outside wealth management, see{' '}
              <Link href="/services/crm-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                CRM AI agents
              </Link>
              ; for the paperwork steps, see{' '}
              <Link href="/services/document-intake-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                document intake AI agents
              </Link>
              .
            </p>

            <ol className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {JOBS.map((s) => (
                <li key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-white p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                    {s.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{s.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-fj-cream px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Check first.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. RULES: WHO DECIDES */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who decides</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Which rules shape AI in wealth management?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Four texts mark what an agent may draft and what a person approves, restated from the linked pages as read on {CHECKED_ON}. Your chief compliance officer decides how they apply. Nothing here is legal advice.
                </p>
              </div>
              <ul className="grid gap-4 lg:col-span-8">
                {RULES.map((r) => (
                  <li key={r.rule} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{r.rule}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">{r.says}</p>
                    <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                      <span className="font-semibold text-fj-ink">The line we build:</span> {r.line}
                    </p>
                    <SourceLinks ids={[r.source]} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON */}
        <ComparisonTable
          eyebrow="Three routes"
          headline="AI tools for financial advisors: a notetaker, your CRM, or a custom agent."
          lead="During scoping we tell you which route we would pick for your workflow, and why."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Jump, Zocks and Wealthbox descriptions come from their homepages, read ${CHECKED_ON}. Other cells describe typical patterns.`}
          scrollRegionLabel="Comparison of three ways a wealth management firm can add AI"
        />

        {/* 6. FIVE QUESTIONS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Buy, switch on or build</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five questions to ask before you choose.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If question two ends in a notetaker trial, stop there. Question three is where a build begins.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {ASK.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
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

        <MidPageCTA
          headline="Send us one operations job. We will tell you the shortest route."
          sub="Meeting notes, NIGO rework or a crowded service inbox. Our reply says what your CRM or a notetaker already handles and gives a fixed written quote for the rest."
          label="Scope my agent"
        />

        {/* 7. CONTROLS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Controls</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How does an agent stay inside its lane?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  With a limited login, read-only access at first and a written hand-off list. We design the agent to
                  fit the controls you already follow, such as SOC 2 and your written information security policy. For
                  the full list of questions to put to any builder, read our guide to{' '}
                  <Link
                    href="/blog/ai-agent-security-risks-controls-2026"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent security risks and controls
                  </Link>
                  .
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-8">
                {GUARDS.map((k) => (
                  <li
                    key={k.rule}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.who === 'build' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                      <div
                        className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                          k.who === 'build' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {k.who === 'build' ? 'We set up' : 'Your licensed people keep'}
                      </div>
                    </div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. WHO THIS SUITS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Who this suits</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Three kinds of firm where an operations agent fits.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Banks and lenders have their own page:{' '}
              <Link
                href="/services/financial-services-ai-agents"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                financial services AI agents
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {FITS.map((f) => (
                <li key={f.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={f.img}
                    alt={f.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{f.t}</h3>
                    <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{f.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. PROCESS + WHAT WE BRING */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five steps from mapping the work to go-live.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Plan on two to four weeks for a one-job pilot and six to twelve for production. After launch,{' '}
                  <Link href="/services/ai-agent-monitoring" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent monitoring and support
                  </Link>{' '}
                  takes over.
                </p>
                <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">What FactoryJet brings</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                    Founded in 2014, FactoryJet has served more than 500 businesses with 97% on-time delivery. Published work is in our{' '}
                    <Link href="/case-studies" className="font-semibold text-fj-ink underline underline-offset-4">
                      case studies
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <ol className="grid gap-4 lg:col-span-7">
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

        {/* 10. RELATED */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Related pages</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Other pages for finance and operations teams.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-white p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. SOURCES */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The SEC rules were read on the eCFR, the official online Code of Federal Regulations. The two FINRA
                  pages were read in Internet Archive copies dated 4 and 17 November 2026. Vendor descriptions come from
                  each vendor&rsquo;s own homepage. Follow the link and read the current version before you rely on a
                  detail.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                <li>
                  <a href="https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    eCFR: 17 CFR 275.206(4)-1, the SEC Marketing Rule
                  </a>
                </li>
                <li>
                  <a href="https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    eCFR: 17 CFR 275.204-2, adviser books and records
                  </a>
                </li>
                <li>
                  <a href="https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    FINRA Rule 2210, Communications with the Public
                  </a>
                </li>
                <li>
                  <a href="https://www.finra.org/rules-guidance/notices/24-09" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    FINRA Regulatory Notice 24-09 on generative AI
                  </a>
                </li>
                <li>
                  <a href="https://jumpapp.com/" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    Jump homepage
                  </a>
                </li>
                <li>
                  <a href="https://www.zocks.io/" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    Zocks homepage
                  </a>
                </li>
                <li>
                  <a href="https://www.wealthbox.com/" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    Wealthbox homepage
                  </a>
                </li>
                <li>
                  <a href="https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/" target="_blank" rel="noopener noreferrer" className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]">
                    ProductCrafters: AI agent development cost, 2026
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="AI for wealth management FAQ"
          headline="Straight answers on AI for wealth management."
          lead={`Rule and vendor answers reflect the linked pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for wealth management"
          headline="Keep advice with your advisors. Give the prep, notes and paperwork checks to an agent."
          sub="Name the operations job that takes the most hours. We check what your tools already do, then build and support the part worth building."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Email connect@factoryjet.com', href: '/contact' }}
          objectionHandler="Demo on your records before any contract. Fixed written price per phase. The code is yours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
