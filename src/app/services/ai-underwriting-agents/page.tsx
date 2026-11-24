import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
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
   /services/ai-underwriting-agents, built 2026-11-24.

   Why this page exists: US Google Ads volumes pulled 2026-11-24 (DataForSEO,
   location 2840): "ai underwriting" 390/mo ($65 CPC), "mortgage ai" 260,
   "automated underwriting system" 210, "automated underwriting" 90,
   "underwriting automation" 90, "ai underwriting software" 90, "ai mortgage
   underwriting" 40, "ai lending platform" 40, "loan underwriting software" 30,
   "mortgage underwriting automation" 30, "ai loan underwriting" 20, "ai for
   lending" 10, "ai credit decisioning" 10. Raw data and the pull script are in
   pipeline/research/data/us-december-pages-2026-11-24/ai-underwriting-agents/.

   Truth rules for anyone editing this file:
   * The five external sources (eCFR Regulation B x2, Fannie Mae x2, Freddie Mac) were fetched
     with curl on 2026-11-24 and the sentences used are logged in
     docs/reports/us-december-2026-11-24/ai-underwriting-agents/claim-ledger.md.
     Re-fetch before changing any sentence that rests on them.
   * No lender, bank or credit union is named or implied as a customer. No result,
     partner title or LOS connector claim. LOS names are examples of software
     buyers run, not integrations we claim.
   * No FactoryJet price. The only dollar figure is the ProductCrafters market
     range for a BUILD, in one FAQ answer.
   * The decision, the credit model and the adverse action notice stay with a
     named person at the lender. The agent prepares; a person decides.
   * Nothing on this page says where the FactoryJet team is.
   * Mirrors /services/insurance-ai-agents for components, props and schema.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList. FAQPage
   mainEntity is generated from the FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ai-underwriting-agents';
const PAGE_TITLE = 'AI Underwriting Agents for US Lenders | FactoryJet';
const PAGE_DESC =
  'AI underwriting agents that sort the loan file, read income and asset documents, compute DTI with sources and draft conditions. Your underwriter decides.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/ai-underwriting-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai underwriting',
    'mortgage ai',
    'ai mortgage underwriting',
    'ai loan underwriting',
    'ai lending platform',
    'ai for lending',
    'automated underwriting',
    'automated underwriting system',
    'underwriting automation',
    'mortgage underwriting automation',
    'loan underwriting software',
    'ai underwriting software',
    'ai credit decisioning',
    'ai underwriting agent',
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
        alt: 'FactoryJet, AI underwriting agents for US lenders and credit unions',
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
  { name: 'AI Underwriting Agents', url: CANONICAL_URL },
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
  name: 'AI Underwriting Agent Development for US Lenders and Credit Unions',
  serviceType:
    'AI underwriting agents, loan file preparation, DTI and cash flow worksheets, conditions list drafting',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, implements and supports software agents that do the file work around a loan underwriter: sorting the packet, reading income and asset documents, computing ratios with the source page shown, listing open conditions and drafting adverse action reasons. A named underwriter makes every credit decision.',
  url: CANONICAL_URL,
};

/* ── Sources. Fetched with curl on 2026-11-24; quotes in the claim ledger. ── */
const SRC = {
  regb: {
    label: 'eCFR: 12 CFR 1002.9 (Regulation B), notifications and statement of specific reasons',
    url: 'https://www.ecfr.gov/current/title-12/chapter-X/part-1002/section-1002.9',
  },
  regbComment: {
    label: 'eCFR: Supplement I to Part 1002, official interpretations, paragraph 9(b)(2)',
    url: 'https://www.ecfr.gov/current/title-12/chapter-X/part-1002/appendix-Supplement%20I%20to%20Part%201002',
  },
  du: {
    label: 'Fannie Mae Selling Guide B3-2-01: General Information on DU',
    url: 'https://selling-guide.fanniemae.com/sel/b3-2-01/general-information-du',
  },
  dti: {
    label: 'Fannie Mae Selling Guide B3-6-02: Debt-to-Income Ratios',
    url: 'https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios',
  },
  lpa: {
    label: 'Freddie Mac: Loan Product Advisor, the Freddie Mac automated underwriting system',
    url: 'https://sf.freddiemac.com/tools-learning/loan-advisor/our-solutions/loan-product-advisor',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered by <FAQ> AND mapped into FAQPage JSON-LD.
   Questions come from People Also Ask on "ai underwriting", "ai mortgage
   underwriting" and "automated underwriting" (DataForSEO, 2026-11-24) plus the
   buyer questions a head of credit asks. Borrower questions left out. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI underwriting basics' },
  { key: 'aus', label: 'DU, LPA and software' },
  { key: 'file', label: 'The file work' },
  { key: 'control', label: 'Decisions and notices' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is AI underwriting?',
    answer:
      'It is software that reads a loan file and prepares it for a credit decision. In the agents we build, it sorts the documents, reads income and assets, computes the ratios with the source page shown and lists open conditions. Some vendors also sell AI that scores the applicant. Our agents leave scoring to your existing credit model and the decision to your underwriter.',
  },
  {
    category: 'basics',
    question: 'What is lender AI?',
    answer:
      'Lender AI, or AI for lending, is a loose label for any AI used inside a lending operation: lead response, document reading, fraud checks, servicing calls or credit scoring. On this page it means an agent that takes the file work off your underwriters and processors while every approval, decline and counteroffer stays with a named person.',
  },
  {
    category: 'basics',
    question: 'Will AI take over mortgage underwriting?',
    answer:
      'Not the decision. Fannie Mae says the lender must confirm the borrower information is accurate and complete, document its assessment and decide to approve or decline. That duty stays with people. What AI mortgage underwriting changes is the hours before the decision. An agent can sort the packet, read the pay stubs and list open conditions, so the underwriter starts with a prepared file.',
  },
  {
    category: 'basics',
    question: 'Are banks using AI for underwriting?',
    answer:
      'Yes, in two broad ways. Some use AI models to score credit, which still has to meet the Regulation B rules on adverse action reasons. Others use AI for the paperwork around the decision: reading documents, checking figures and drafting conditions. The second kind is what we build, and the decision stays with a person.',
  },
  {
    category: 'basics',
    question: 'Is AI underwriting the same as automated underwriting?',
    answer:
      'No. Automated underwriting usually means an agency system such as DU or LPA that weighs the risk factors in the data you key in and returns a recommendation. AI underwriting is broader and covers reading the documents behind that data, so mortgage underwriting automation can cover both jobs.',
  },
  {
    category: 'aus',
    question: "What is the name of Fannie Mae's automated underwriting system?",
    answer:
      "Desktop Underwriter, usually shortened to DU. Fannie Mae's Selling Guide says DU evaluates mortgage delinquency risk and arrives at an underwriting recommendation. Its Underwriting Findings report lists the steps the lender must take to finish processing the file. Our agents read those findings and match each condition to a document, or mark it open.",
  },
  {
    category: 'aus',
    question: "What is Freddie Mac's automated underwriting system?",
    answer:
      "Loan Product Advisor, or LPA. Freddie Mac describes it as its automated underwriting system that assesses a mortgage's eligibility for purchase by Freddie Mac and returns a feedback certificate. Freddie Mac also lists Asset and Income Modeler, an LPA capability that automates income, asset and employment verifications for loans it fits.",
  },
  {
    category: 'aus',
    question: 'What are the three types of underwriting?',
    answer:
      'Lenders usually mean automated, manual and a mix of the two. For a mortgage, Fannie Mae names two routes: automated underwriting through DU, or manual underwriting. In practice many files combine them: the AUS gives a recommendation and an underwriter clears conditions by hand. That hand work, mostly reading and matching, is where an agent helps.',
  },
  {
    category: 'aus',
    question: 'Which loan underwriting software does the agent work with?',
    answer:
      'It works beside the loan origination system (LOS) you already run, such as Encompass for mortgage or nCino and Salesforce Financial Services Cloud for commercial lending. The LOS vendor decides what outside software can read and write, so the first question is what your subscription permits. Where nothing can be written back, the agent sends its worksheet to a queue your team already uses.',
  },
  {
    category: 'aus',
    question: 'What is an AI lending platform, and do we need one?',
    answer:
      'An AI lending platform is software you rent that runs origination, decisioning or both on the vendor\'s own rules and screens. If you are happy with your LOS, your AUS and your credit policy, an agent built around them does the file work without asking you to move systems.',
  },
  {
    category: 'file',
    question: 'Can AI read pay stubs, bank statements and tax returns?',
    answer:
      'Yes. The agent reads year-to-date pay from a pay stub, wages from a W-2, balances and deposits from bank statements and income from a 1040 or business return. Each figure is stored with its page. Fields the agent is unsure of go to a review queue for a person to confirm.',
  },
  {
    category: 'file',
    question: 'How does the agent calculate debt-to-income?',
    answer:
      "Fannie Mae defines DTI as total monthly obligations divided by the total monthly income used to qualify. The agent takes the debts from the credit report and application in your LOS, where access allows, and reads income from the pay stubs, W-2s and returns. Plain code then does the arithmetic, so the same inputs always give the same ratio. Each line of the worksheet links to its source page for the underwriter to check.",
  },
  {
    category: 'file',
    question: 'What about small business and commercial loans?',
    answer:
      'The same steps apply with different documents: business tax returns, interim financial statements, rent rolls and debt schedules. The agent builds the cash flow worksheet your credit policy asks for, with the page behind each figure. Your credit analyst reviews it and your credit committee decides.',
  },
  {
    category: 'file',
    question: 'What happens with a locked or password-protected bank statement?',
    answer:
      'The AI services that read documents expect files without a password. A locked statement goes to a person, who opens it or asks the borrower to send it again without the lock. The agent logs the request and keeps the condition open until the readable file arrives, so nothing is skipped silently.',
  },
  {
    category: 'file',
    question: 'How does an underwriter see where each number came from?',
    answer:
      'Every figure in the worksheet carries a link to the document and page it was read from. Each monthly income figure links to the pay stub page it came from. A log of every read and write lets an auditor retrace each step.',
  },
  {
    category: 'control',
    question: 'Does AI underwriting software make the credit decision?',
    answer:
      'Some products sold as AI credit decisioning do score and recommend. The agents we build do not. They prepare the file, and a named underwriter approves, declines or counters. Your credit model and AUS keep their current jobs, and one person answers for each decision.',
  },
  {
    category: 'control',
    question: 'Can AI write the adverse action notice?',
    answer:
      "It can draft the reasons. A person approves and sends the notice. Regulation B requires the statement of reasons to be specific and to give the principal reasons for the adverse action. Its official commentary says those reasons must describe the factors the creditor actually considered or scored. So the draft is built only from the factors your model or policy used.",
  },
  {
    category: 'control',
    question: 'Does the agent use or change our credit model?',
    answer:
      'No. Your credit model, scorecard or policy stays as it is, owned by your credit team. The agent reads its output and its reason codes so it can draft conditions and adverse action reasons. Any change to credit policy goes through your normal approval process.',
  },
  {
    category: 'control',
    question: 'How is borrower data kept secure?',
    answer:
      'We design the agent to fit the controls you already follow, such as SOC 2 and your own information security program. It signs in under its own account with access limited to the job. The first release reads records and cannot edit them. Every action is logged.',
  },
  {
    category: 'working',
    question: 'How much does an AI underwriting agent cost to build?',
    answer:
      "The price follows the number of document types, the systems the agent reads and whether it writes back. ProductCrafters, a software development firm, put custom AI agent builds at roughly $5,000 to $180,000 and up in its 2026 cost breakdown, across industries. FactoryJet gives you your own figure after a short scoping call, as a fixed price set down in writing.",
  },
  {
    category: 'working',
    question: 'How long does a build take?',
    answer:
      'A pilot covering one narrow job, such as sorting and reading purchase mortgage packets, takes two to four weeks in most cases. Getting to production, with permissions, logs, approval steps and monitoring in place, typically runs six to twelve weeks. Access to your LOS is the biggest variable.',
  },
  {
    category: 'working',
    question: 'Can we test it on our own loan files before signing?',
    answer:
      'Yes. You see working software on your own data before any contract. For a lender that means a set of closed files, with personal data handled the way your policy requires, run through a first version. Your underwriters compare its worksheet and conditions list with what they produced.',
  },
  {
    category: 'working',
    question: 'Who supports the agent after go-live?',
    answer:
      'FactoryJet does. The team that built it reviews its logs, re-runs its tests whenever your LOS, AUS or AI model changes, and fixes what breaks. Servers, AI models, API connections and maintenance stay with FactoryJet. Build and support each get their own fixed, written price.',
  },
  {
    category: 'working',
    question: 'Does the lender own the agent and its code?',
    answer:
      'Yes, you do. The code, the document rules, the worksheet templates and the written notes on how the agent works belong to you, and FactoryJet looks after it day to day if you want. Take it in-house or hand it to another firm later, and everything goes with you.',
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

/* ── Hero figure. What arrives, what the agent does, who decides. ── */
const HERO_ROWS: ReadonlyArray<{ arrives: string; does: string; decides: string }> = [
  {
    arrives: 'A borrower uploads one long PDF.',
    does: 'The agent splits it into pay stubs, W-2s, statements and returns.',
    decides: 'Your processor checks the split.',
  },
  {
    arrives: 'DU returns its findings.',
    does: 'The agent matches each condition to a document or marks it open.',
    decides: 'Your underwriter clears conditions.',
  },
  {
    arrives: 'Income does not tie out.',
    does: 'Both figures appear side by side with their page numbers.',
    decides: 'Your underwriter picks the figure.',
  },
  {
    arrives: 'A file is declined.',
    does: 'The agent drafts reasons from the factors your model used.',
    decides: 'A named person approves the notice.',
  },
];

/* ── The file work, in order. Numbered list on purpose; also feeds ItemList. ── */
const STEPS: ReadonlyArray<{ n: string; t: string; b: string; who: string }> = [
  {
    n: '01',
    t: 'Sort the packet',
    b: 'Borrowers send one long PDF, phone photos and email attachments. The agent names each document, marks the page where each one starts, and keeps them linked to the loan. A missing month of statements shows up on day one instead of the week before closing.',
    who: 'Your processor confirms the split.',
  },
  {
    n: '02',
    t: 'Read income and assets',
    b: 'Year-to-date pay from the pay stub, last year\'s wages from the W-2, balances and large deposits from bank statements, self-employed income from Schedule C or a business return. Each figure is saved with its page.',
    who: 'Your underwriter accepts or corrects each figure.',
  },
  {
    n: '03',
    t: 'Compute the ratios with the source shown',
    b: 'The model reads; plain code does the arithmetic, so the same inputs always give the same DTI. For a business loan the same step fills your cash flow worksheet. Each line links to the page behind it.',
    who: 'Your underwriter signs the worksheet.',
  },
  {
    n: '04',
    t: 'Check the file against itself',
    b: 'Pay stub income against the application, the name on each statement against the borrower, the appraisal address against the purchase contract. Every mismatch goes on a list with both pages side by side.',
    who: 'A person decides which figure is right.',
  },
  {
    n: '05',
    t: 'Draft the conditions list',
    b: 'The agent works through the AUS findings or your credit policy, marks each condition met by a document or still open, and drafts the request for the open ones. A file missing a required document is held, the same rule an accounts payable agent applies to a bill with no W-9 on file.',
    who: 'Your underwriter sets and clears conditions.',
  },
  {
    n: '06',
    t: 'Draft adverse action reasons for review',
    b: 'When a person declines or counters a file, the agent drafts the reason statement from the factors your model or policy actually used, in wording your compliance team approved. Each reason traces back to a factor that was actually used.',
    who: 'A named person approves and sends the notice.',
  },
];

const stepsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Six steps an AI underwriting agent takes before the underwriter decides',
  itemListElement: STEPS.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.t })),
};

/* ── Who keeps control. ── */
const GUARDS: ReadonlyArray<{ rule: string; note: string }> = [
  {
    rule: 'The credit decision',
    note: 'Approve, decline or counter belongs to a named underwriter or credit committee. The agent gets the file ready; they make the call.',
  },
  {
    rule: 'The credit model',
    note: 'Your scorecard, AUS and policy stay as they are. The agent reads their output and reason codes and cannot change a setting.',
  },
  {
    rule: 'The adverse action notice',
    note: 'The agent drafts reasons from the factors actually used. A person approves the wording and sends it.',
  },
  {
    rule: 'Look before it writes',
    note: 'The first version has read access only. Write access comes one permission at a time, after your team has checked its worksheets.',
  },
  {
    rule: 'A source page for every figure',
    note: 'Each number links to the document and page it came from, and every action goes in a log a reviewer can follow.',
  },
  {
    rule: 'A person for anything unsure',
    note: 'Fields with low confidence, locked statements and documents the agent cannot classify go to a review queue built for your team.',
  },
];

/* ── Who it suits. Kinds of lender, not a client list. ── */
const LENDERS: ReadonlyArray<{ t: string; b: string }> = [
  {
    t: 'Mortgage lenders',
    b: 'DU or LPA findings, purchase contracts, appraisals and income documents for each borrower. The agent ties the findings to the file and lists what is still open.',
  },
  {
    t: 'Credit unions',
    b: 'Mortgage, auto and member business loans often share one small team. One agent can sort and read all three, each on its own checklist.',
  },
  {
    t: 'Small business lenders',
    b: 'Business returns, interim statements and debt schedules become a cash flow worksheet with sources, ready for the credit analyst.',
  },
  {
    t: 'Equipment finance and private credit',
    b: 'Invoices, financial statements and guarantor documents checked against the deal terms, with gaps listed before the credit memo.',
  },
];

/* ── Process. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Scoping call',
    b: 'Loan types, documents, LOS and AUS, and where a person must approve. Then a fixed price in writing.',
  },
  {
    n: '02',
    t: 'Demo on your own closed files',
    b: 'Before you sign, a first version runs on a sample of your closed loans, so your underwriters can compare its worksheet with theirs.',
  },
  {
    n: '03',
    t: 'Pilot with read-only access',
    b: 'One loan type live in your systems, with every worksheet and conditions list approved by your team. Paid at milestones.',
  },
  {
    n: '04',
    t: 'Production and support',
    b: 'Higher volume, plus the unusual files the pilot surfaced, then monitoring, a re-test after every change and fixes.',
  },
];

/* ── Comparison. Cells describe typical patterns of each route, not named firms. ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 The AUS in your LOS (DU or LPA)' },
  { label: '02 A rented AI underwriting platform' },
  { label: '03 An agent built around your file' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it does',
    values: [
      'Returns a recommendation and a list of conditions from the data keyed into the loan',
      'Typically runs scoring or decisioning on the vendor\'s own rules and screens',
      'Sorts and reads the documents, builds the worksheet and drafts conditions',
    ],
  },
  {
    feature: 'Reads the documents',
    values: [
      'Mostly no. It works from the data entered, with some verification services added',
      'Varies by product; often a separate module',
      'Yes. Reading the packet is the core of the job',
    ],
  },
  {
    feature: 'Where the rules come from',
    values: ['Fannie Mae or Freddie Mac', 'The vendor, with settings you choose', 'Your credit policy and checklists'],
  },
  {
    feature: 'Who decides',
    values: [
      'Your underwriter, who must clear the conditions in the findings',
      'Depends on how you configure it; some products auto-decide',
      'Your named underwriter, every time',
    ],
  },
  {
    feature: 'Adverse action reasons',
    values: ['From your own process', 'Typically reason codes from the vendor model', 'Drafted from the factors you used, approved by a person'],
  },
  {
    feature: 'How you pay',
    values: [
      'Set by the agency and your LOS vendor',
      'Typically a subscription or a fee per loan',
      'A written fixed price for the build and another for support',
    ],
  },
  {
    feature: 'Right call when',
    values: [
      'The loan is an agency-eligible mortgage',
      'You want to replace your decisioning process',
      'You keep your LOS and policy and want the file work done faster',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/financial-services-ai-agents', t: 'Financial services AI agents', b: 'All the agents we build for lenders, banks, credit unions, advisors and accounting firms.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'The general method for reading inbound PDFs, scoring each field and filing the result.' },
  { href: '/services/accounts-payable-automation', t: 'Accounts payable automation', b: 'Hold-and-check rules for invoices, the same pattern an underwriting agent uses for conditions.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'Logs, re-tests and fixes for an agent once it is live.' },
  { href: '/blog/best-ai-agent-companies-financial-services', t: 'AI agent companies for financial services', b: 'Who builds AI agents for lenders and banks, and how they differ.' },
  { href: '/blog/ai-agent-security-risks-controls-2026', t: 'AI agent security risks and controls', b: 'The controls to ask any builder about before an agent touches borrower data.' },
];

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function AiUnderwritingAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stepsSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-fj-cream text-fj-ink`}>
        <StickyCtaLabel label="See a demo on my files" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className={`${styles.hero} relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16`}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    AI UNDERWRITING &middot; US LENDERS
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI underwriting agents that prepare the loan file. Your underwriter makes the call.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  FactoryJet, a services company, designs, builds, implements and supports underwriting agents for
                  US mortgage, small business, consumer and equipment lenders, private credit funds and credit unions.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_ai_underwriting_agents_hero"
                    service="AI Underwriting Agents"
                    submitLabel="See a demo on my files"
                    trustText="See it work on your own loan files first. The founder replies within 24 hours."
                  />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  The agent sorts the packet, reads pay stubs, bank statements, tax returns and appraisals, computes
                  DTI and cash flow with the source page shown, and drafts the conditions list. Approvals, declines,
                  your credit model and every adverse action notice stay with a named person at your lender.
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
                  <span>Demo on your files before any contract</span>
                  <span>You own the code</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-underwriter-loan-file-review.webp`}
                    alt="A woman in her forties with short gray hair and a navy blazer reads a laptop at a pale oak desk while holding a pen, beside a stack of manila folders and an orange mug"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                      File in, agent work, human decision
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

        {/* 2. SHORT ANSWER */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                An AI underwriting agent does the file work around a loan decision. It sorts the borrower&rsquo;s
                documents, reads income and assets, computes DTI or cash flow with the source page for every figure,
                lists open conditions and drafts adverse action reasons. A named underwriter reviews that work and
                makes the credit decision.
              </p>
              <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                FactoryJet builds these agents around the LOS, AUS and credit policy you already run. You see one
                working on your own closed files before you sign, and every phase is quoted at a fixed price, in writing.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIX STEPS (numbered list) */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The file work</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What does an AI underwriting agent do before the underwriter opens the file?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Six jobs, in the order a processor would do them. Each one ends with a person checking the result.
                  None of them is the credit decision itself, and none touches your credit model.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Steps one and two use the same reading method as our{' '}
                  <Link href="/services/document-intake-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                    document intake AI agents
                  </Link>
                  . Steps three to six are specific to lending.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {STEPS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                      <p className="mt-2 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{p.who}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. AUS EXPLAINED */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">DU, LPA and the agent</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How is this different from Desktop Underwriter or Loan Product Advisor?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Desktop Underwriter (DU) and Loan Product Advisor (LPA) are automated underwriting systems, or AUS.
                  They take the data your team keys into the loan and return a recommendation. The agent works on the
                  documents behind that data and on the conditions the AUS sends back. It sits on both sides of the
                  AUS and replaces neither.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  <a href="https://selling-guide.fanniemae.com/sel/b3-2-01/general-information-du" className="font-semibold text-fj-ink underline underline-offset-4" target="_blank" rel="noopener noreferrer">Fannie Mae&rsquo;s Selling Guide</a> says DU evaluates mortgage delinquency risk and arrives at an
                  underwriting recommendation. Its Underwriting Findings report lists the steps the lender must take
                  to finish the file, and the lender must comply with every verification message and approval
                  condition in it. <a href="https://sf.freddiemac.com/tools-learning/loan-advisor/our-solutions/loan-product-advisor" className="font-semibold text-fj-ink underline underline-offset-4" target="_blank" rel="noopener noreferrer">Freddie Mac describes LPA</a> as its automated underwriting system for judging whether
                  a mortgage is eligible for purchase, returned as a feedback certificate.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Ratios follow the agency definitions. <a href="https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios" className="font-semibold text-fj-ink underline underline-offset-4" target="_blank" rel="noopener noreferrer">Fannie Mae defines DTI</a> as total monthly obligations, including
                  the new mortgage payment, over the total monthly income used to qualify. It sets a 50% maximum for
                  files underwritten through DU and 36% for manual underwriting, stretchable to 45% with the credit
                  score and reserves its matrix requires. The agent computes the figure; your underwriter applies the
                  limit.
                </p>
              </div>
              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/credit-union-desk-statements.webp`}
                    alt="A man in his thirties with a short black beard and a light blue shirt sorts printed pages into piles on a white table in a bright office, next to an orange folder"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON */}
        <ComparisonTable
          eyebrow="Three routes"
          headline="The AUS you have, a platform you rent, or an agent built around your file."
          lead="Mortgage lenders selling to Fannie Mae or Freddie Mac keep the first either way. For the work around it, and for other loan types, the choice is between the second and the third."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Column 2 describes typical patterns of rented platforms, not any named product. Column 1 rests on the Fannie Mae and Freddie Mac pages cited here."
          scrollRegionLabel="Comparison of three ways a lender can add AI to underwriting"
        />

        <MidPageCTA
          headline="Send us five closed loan files. We will show you the worksheet the agent builds."
          sub="Pick one loan type. We run a first version on your files, with personal data handled the way your policy requires, and your underwriters compare its figures and conditions with their own."
          label="Scope my underwriting agent"
        />

        {/* 6. CONTROL + ADVERSE ACTION */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Who decides</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Who makes the credit decision when an agent works the file?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  A named underwriter or your credit committee, every time. The agent prepares and drafts. It does not
                  approve, decline, price or counter. Fannie Mae puts the decision on the lender, and Regulation B puts
                  the reasons for a decline on the creditor.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  <a href="https://www.ecfr.gov/current/title-12/chapter-X/part-1002/section-1002.9" className="font-semibold text-fj-ink underline underline-offset-4" target="_blank" rel="noopener noreferrer">Regulation B</a>, the federal rule under the Equal Credit Opportunity Act, requires the
                  statement of reasons for a decline to be specific and to name the principal reasons. Its{' '}
                  <a href="https://www.ecfr.gov/current/title-12/chapter-X/part-1002/appendix-Supplement%20I%20to%20Part%201002" className="font-semibold text-fj-ink underline underline-offset-4" target="_blank" rel="noopener noreferrer">official commentary</a> adds that the reasons must describe the factors actually
                  considered or scored. So the agent drafts reasons only from factors your model or policy used, and a
                  person signs off.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For the wider list of controls to ask any builder about, read our guide to{' '}
                  <Link href="/blog/ai-agent-security-risks-controls-2026" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent security risks and controls
                  </Link>
                  .
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {GUARDS.map((k) => (
                  <li
                    key={k.rule}
                    className="grid grid-cols-1 gap-2 rounded-2xl border border-fj-neutral-200 bg-fj-cream px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-5"
                  >
                    <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. WHO IT SUITS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Who this is for</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Which lenders get the most from AI loan underwriting help?
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Lenders whose underwriters spend more time reading documents than judging risk. Mortgage AI is the
              best-known case, but the packet problem is the same in every loan type. For insurance underwriting, see
              our{' '}
              <Link href="/services/insurance-ai-agents" className="font-semibold text-fj-ink underline underline-offset-4">
                insurance AI agents
              </Link>{' '}
              page instead.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {LENDERS.map((l, i) => (
                <li
                  key={l.t}
                  className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
                >
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{l.t}</h3>
                  <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{l.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. PROCESS + WHAT WE BRING */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How a build runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How does an AI underwriting build start?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  With one loan type. Pilots run two to four weeks on one narrow job. Production, once permissions,
                  logs, approvals and monitoring are added, runs six to twelve weeks.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Since 2014, more than 500 businesses have hired FactoryJet. Once the agent is live, our{' '}
                  <Link href="/services/ai-agent-monitoring" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent monitoring and support
                  </Link>{' '}
                  team re-runs its tests whenever your LOS, your AUS or the AI model changes. The code is yours. Our
                  general method is on the{' '}
                  <Link href="/services/ai-agent-development" className="font-semibold text-fj-ink underline underline-offset-4">
                    AI agent development
                  </Link>{' '}
                  page.
                </p>
                <img
                  src={`${IMG}/equipment-lender-file-handoff.webp`}
                  alt="Two colleagues stand at a tall white table in a sunny office, a woman in her twenties with a dark ponytail and a green sweater handing an orange folder to a man in his fifties with a gray mustache and a tan cardigan"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
              <ol className="grid content-start gap-4 lg:col-span-7">
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

        {/* 9. RELATED */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Related pages</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Other AI agent work for lenders and finance teams.
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

        {/* 10. SOURCES */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Agency rules and Regulation B are quoted from those pages as they stood that day. They state
                  what the rules say, not a legal opinion, so ask your compliance counsel how they apply to you.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-y-2.5 lg:col-span-7">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <FAQ
          eyebrow="AI underwriting FAQ"
          headline="Straight answers on AI underwriting."
          lead="Questions from heads of credit, lending operations leads and credit union managers weighing up an agent."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* 12. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI underwriting"
          headline="Give the reading to an agent. Keep the decision with your underwriter."
          sub="Name one loan type where files wait on paperwork. We build a first version for you to try on your own closed files, and support it after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Email the founder', href: '/contact' }}
          objectionHandler="Demo on your closed files first. Fixed written quote. The code is yours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
