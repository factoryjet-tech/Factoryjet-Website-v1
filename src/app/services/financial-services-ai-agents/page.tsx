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
   /services/financial-services-ai-agents, built 2026-11-24.

   Why this page exists: US Google Ads volumes pulled for the December batch
   (pipeline/research/data/us-december-pages-2026-11-24/ads_volume.json):
   "ai for banking" 1,900/mo ($18 CPC; Dec 2025 720, Oct 2026 5,400),
   "ai in banking" 1,900, "ai for financial services" 720, "ai in financial
   services" 720. FactoryJet had no banking page.

   Truth rules for anyone editing this file:
   * No bank, credit union, lender or fintech client is named or implied.
   * The four regulator sources were fetched with curl on 2026-11-24 and the
     quoted words are in docs/reports/us-december-2026-11-24/
     financial-services-ai-agents/claim-ledger.md (main checkout). SR 26-2
     (17 Apr 2026) supersedes SR 11-7 and SR 21-8. CFPB Circular 2022-03 was
     withdrawn on 12 May 2025 (90 FR 20084), so the page cites Regulation B
     itself, not the circular.
   * Core, LOS and CRM products are named as systems banks run. No connector,
     partner status or integration with any of them is claimed.
   * Every FactoryJet process claim restates wording on an existing service
     page; file:line is in the ledger.
   * No FactoryJet prices. The only dollar ranges are ProductCrafters (row 1)
     and CMARIX (row 3) build ranges, named in the sentence. The $5,000 and
     $30 billion figures are regulatory thresholds quoted from the rule text.
   * Nothing on this page says where the FactoryJet team is.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList. The FAQPage
   mainEntity is generated from the FAQ_ITEMS array the visible <FAQ> renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/financial-services-ai-agents';
const PAGE_TITLE = 'AI for Banking: Agents for Financial Services | FactoryJet';
const PAGE_DESC =
  'AI agents for US banks, credit unions, lenders and fintechs. The agent prepares KYC, AML, loan and service work in your systems. A named person decides.';
const PAGE_PUBLISHED = '2026-11-24';
const PAGE_MODIFIED = '2026-11-24';
const CHECKED_ON = '24 Nov 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/financial-services-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for banking',
    'ai in banking',
    'ai for financial services',
    'ai in financial services',
    'ai agents for financial services',
    'ai agents for banking',
    'ai agents in banking',
    'ai chatbot for banking',
    'conversational ai for banking',
    'generative ai in banking',
    'ai kyc',
    'ai aml',
    'ai for credit unions',
    'banking software development company',
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
        alt: 'FactoryJet, AI agents for US banks, credit unions, lenders and fintechs',
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
  { name: 'Financial Services AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for Banks, Credit Unions, Lenders and Fintechs',
  serviceType:
    'AI agents for banking: KYC files, AML alert summaries, loan packets, adverse action drafts, member service',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet designs, builds, implements and supports AI agents as a services company, here for community banks, credit unions, consumer and commercial lenders and fintechs in the United States. Each agent prepares one job in the core, loan origination system or CRM the institution already runs, through the API access its vendors license. Credit decisions, account approvals and suspicious activity reports stay with a named person.',
  url: CANONICAL_URL,
};

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Questions come from Google People Also Ask (serps_raw.json, plus
   paa_fresh.json and paa_fresh2.json pulled 2026-11-24) and buyer questions. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI in banking' },
  { key: 'jobs', label: 'Jobs an agent does' },
  { key: 'rules', label: 'Federal texts and control' },
  { key: 'working', label: 'Cost and working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is AI for banking?',
    answer:
      'It means software that does a routine piece of bank work and hands the decision to a person: reading a loan packet, gathering the history behind an AML alert, drafting a reply to a member or logging a call in the CRM. Start with one queue, such as AML alerts, where one named team owns the decision.',
  },
  {
    category: 'basics',
    question: 'How is AI helping the banking industry?',
    answer:
      'Mostly by preparing work people used to assemble by hand. An agent splits a loan packet into its documents, pulls the transactions behind an alert into one summary or answers a branch hours question at night. The person who decides gets a complete file sooner.',
  },
  {
    category: 'basics',
    question: 'What type of AI is used in banking?',
    answer:
      'Three kinds show up most. Scoring models have been used in fraud and credit for years. Large language models read and write text, so they suit documents, emails and chat. AI agents add logins and steps, so the model can look up a record, fill a form and pass a case to a person.',
  },
  {
    category: 'basics',
    question: 'Can you explain generative AI in banking in a simple way?',
    answer:
      'Generative AI writes new text from what it has read. In a bank it drafts: a case summary for an analyst, a reply to a member, a first version of a notice. Generative AI in banking is safest when a person approves every draft that reaches a customer or a regulator.',
  },
  {
    category: 'basics',
    question: 'Can AI replace bankers?',
    answer:
      'No. The agents we build prepare files and drafts. Approving an account, making a credit decision, filing a suspicious activity report and giving advice stay with named people. Federal rules on adverse action notices and suspicious activity reports put those duties on the institution.',
  },
  {
    category: 'basics',
    question: 'Which AI tool is best for banking and finance?',
    answer:
      'Check what your core, LOS or CRM vendor already ships before you buy anything. For a standard FAQ chatbot, a ready-made product may be enough. When the job follows your own procedures or spans two systems, a custom agent fits.',
  },
  {
    category: 'basics',
    question: 'Can AI access my bank account?',
    answer:
      'Not on its own. An AI agent at your bank sees only what the bank lets it see. An agent we build gets its own login with only the permissions its job needs, and it starts read-only. Write access is added one type at a time. Every lookup is logged.',
  },
  {
    category: 'jobs',
    question: 'What can AI agents in banking do?',
    answer:
      'Six jobs cover most first projects: preparing a KYC file, summarizing an AML alert, reading a loan packet, drafting an adverse action notice, answering member questions and logging banker calls in the CRM. AI agents in banking each take one job and hand the decision to a named person.',
  },
  {
    category: 'jobs',
    question: 'How does an AI chatbot for banking handle a card dispute?',
    answer:
      'It takes the intake and stops there. The agent confirms who is asking, asks for the card, the date, the merchant and the amount, and opens a case for your disputes team with those details. It does not promise a refund or a provisional credit. Your disputes staff decide.',
  },
  {
    category: 'jobs',
    question: 'Can AI help with KYC?',
    answer:
      'Yes, with the preparation. KYC, short for know your customer, is how a bank confirms who a new customer is. An AI KYC agent reads the application and ID, checks that names, dates and addresses match across documents and lists anything missing. Your onboarding or BSA staff approve the account.',
  },
  {
    category: 'jobs',
    question: 'Will AML jobs be replaced by AI?',
    answer:
      'Not by the agents we build. An AI AML agent gathers the transactions, account details and earlier alerts behind each alert into one case summary for an analyst. Deciding whether activity is suspicious, and filing a suspicious activity report with FinCEN, stays with your BSA officer. The rule also bars disclosing that a report exists.',
  },
  {
    category: 'jobs',
    question: 'What is the AML KYC process?',
    answer:
      'KYC happens when an account opens: confirm identity and understand the customer. AML (anti-money laundering) continues for the life of the account: monitor activity, review alerts and report suspicious activity. Both sit under the Bank Secrecy Act. An agent prepares the files for a person to review.',
  },
  {
    category: 'jobs',
    question: 'Does AI work for credit unions?',
    answer:
      'Yes. AI for credit unions usually starts with member service and lending. A conversational agent answers balance, payment and branch hours questions and routes the rest. A document agent reads loan packets for the lending team. The pattern matches a bank: the agent prepares and a named staff member decides.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent help with underwriting?',
    answer:
      'With the preparation, yes. The agent reads pay stubs, bank statements and tax returns, lays the figures side by side and lists gaps before an underwriter opens the file. The underwriter decides. Our AI underwriting agents page covers that job in depth.',
  },
  {
    category: 'jobs',
    question: 'How is AI used in financial services outside banks?',
    answer:
      'AI for financial services reaches lenders, fintechs, wealth firms and insurers too. Lenders use it for packet intake and notices, fintechs for support and onboarding. Advisory firms use it for meeting notes and account paperwork, which our wealth management AI agents page covers.',
  },
  {
    category: 'rules',
    question: 'Does the GLBA Safeguards Rule apply to an AI agent?',
    answer:
      'The rule applies to the institution, and the agent handles customer information, so it falls inside your program. The FTC Safeguards Rule (16 CFR Part 314) covers mortgage lenders, finance companies and other firms not under another federal regulator. It requires a Qualified Individual to oversee security and controls to monitor and log the activity of authorized users.',
  },
  {
    category: 'rules',
    question: 'Can AI make credit decisions?',
    answer:
      'Regulation B allows automated decisions but requires specific reasons, sent within 30 days of a completed application. Saying the applicant missed an internal standard or a qualifying score is not enough. In the agents we build, a credit officer still decides and records those reasons, and the agent drafts the notice from them.',
  },
  {
    category: 'rules',
    question: 'Does SR 11-7 still apply to AI models?',
    answer:
      'SR 11-7 has been replaced. On 17 April 2026 the Federal Reserve issued SR 26-2, revised model risk guidance from the Fed, OCC and FDIC that supersedes SR 11-7 and SR 21-8. The letter says it is most relevant to banking organizations with over $30 billion in total assets regulated by the Federal Reserve. It is guidance, not an enforceable rule, and it puts generative and agentic AI models outside its scope. Your own risk management should still cover an agent.',
  },
  {
    category: 'rules',
    question: 'Is an AI agent safe with customer data?',
    answer:
      'We design the agent to fit the controls you already follow, such as SOC 2, the California Consumer Privacy Act (CCPA) and PCI DSS for card payments. The agent never stores full card numbers. It can run in a cloud account that is yours, so your auditors can review it alongside the rest of your systems.',
  },
  {
    category: 'rules',
    question: 'What happens when the agent is unsure?',
    answer:
      'Only the doubtful part goes to a person. The reviewer sees the page, the field, what the agent extracted and the reason for the flag. They fix or confirm it, and each fix is recorded with the reviewer\'s name and a timestamp. Nothing unsure is filed to your core or LOS until someone has looked at it.',
  },
  {
    category: 'working',
    question: 'How much does AI for banking cost to build?',
    answer:
      'ProductCrafters puts 2026 custom AI agent builds at about $5,000 to $180,000+. CMARIX puts a fully custom AI chatbot at $20,000 to $80,000, and $50,000 to $200,000 or more in North America. The number of systems the agent touches moves the price most. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'working',
    question: 'How long does a first banking AI project take?',
    answer:
      'Expect two to four weeks for a pilot on one job. Production takes six to twelve weeks, once permissions, logging, hand-off rules and monitoring are in place. Your own vendor management and information security review often sets the pace, so start it early.',
  },
  {
    category: 'working',
    question: 'Which banking systems can the agent work with?',
    answer:
      'Whatever your systems let outside software read and write. Banks commonly run a core from FIS, Fiserv or Jack Henry, a loan origination system (LOS) such as Encompass, nCino or MeridianLink, and a CRM such as Salesforce Financial Services Cloud. Send the system names with your brief and we confirm what each API allows before we quote.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who supports it after launch?',
    answer:
      'You own the code and the repository from day one. FactoryJet keeps managing the servers, AI models, APIs and maintenance, and re-tests the agent whenever one of your systems changes. Build and support are quoted as fixed prices in writing after scoping.',
  },
  {
    category: 'working',
    question: 'How do we choose a banking software development company?',
    answer:
      'Ask for a working demo on your own documents before you sign, a fixed price per phase, and code you own. If you are comparing fintech software development companies, ask each one which decisions its agent makes alone. The right answer for credit, accounts and suspicious activity is none.',
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

/* ── Hero figure. What arrives, what the agent prepares, who decides. ── */
const HERO_ROWS: ReadonlyArray<{ arrives: string; does: string; decides: string }> = [
  { arrives: 'A loan packet lands.', does: 'The agent splits it and lines up the figures.', decides: 'The underwriter decides.' },
  { arrives: 'An AML alert fires.', does: 'The agent writes the case summary.', decides: 'The BSA officer decides on a SAR.' },
  { arrives: 'A member disputes a charge.', does: 'The agent takes the intake.', decides: 'Your disputes team handles the case.' },
];

/* ── Six jobs. System + rule + named decider per job. No client claimed. ── */
type Job = {
  n: string;
  title: string;
  body: string;
  system: string;
  rule: string;
  decides: string;
  span: string;
};

const JOBS: ReadonlyArray<Job> = [
  {
    n: '01',
    title: 'KYC file preparation',
    body: 'The agent reads a new account application and its ID, checks that the name, date of birth and address match across every document, and lists what is missing before staff open the file.',
    system: 'Account opening in your core (FIS, Fiserv or Jack Henry) or Salesforce Financial Services Cloud',
    rule: 'KYC checks sit inside your Bank Secrecy Act (BSA) and AML program',
    decides: 'Your onboarding or BSA staff approve or decline the account',
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'AML alert case summaries',
    body: 'When monitoring software raises an alert, the agent pulls the transactions, account details and earlier alerts into one case summary for the analyst.',
    system: 'Your transaction monitoring tool and core',
    rule: 'The SAR rule, 31 CFR 1020.320: filing within 30 calendar days of detection, and confidentiality of every report',
    decides: 'Your BSA officer decides whether to file a suspicious activity report (SAR)',
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Loan packet intake',
    body: 'One file holds the application, an ID, two pay stubs and a bank statement. The agent separates the documents, reads each one and puts the income and balance figures next to each other for review. A password-locked statement goes to a person to open.',
    system: 'Your loan origination system (LOS), such as Encompass, nCino or MeridianLink',
    rule: 'Customer data handling under GLBA security standards',
    decides: 'Your loan officer or underwriter',
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Adverse action notice drafts',
    body: 'Once a credit officer records a decline and its principal reasons, the agent drafts the notice from those reasons and the applicant record. It never picks the reasons itself.',
    system: 'Your LOS and document templates',
    rule: 'ECOA and Regulation B, 12 CFR 1002.9: notice within 30 days, with specific reasons',
    decides: 'Your credit officer approves and sends the notice',
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Member and customer service',
    body: 'A conversational agent answers balance, payment and branch hours questions after confirming who is asking, takes card dispute intake, and routes everything else to the right team with a summary attached.',
    system: 'Your digital banking chat, phone line or help desk, with account data from the core where access allows',
    rule: 'GLBA security standards for customer information',
    decides: 'Your service, card and disputes teams',
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Banker CRM updates',
    body: 'Each call summary and meeting note is logged to the right contact with next steps. The agent drafts follow-ups and a banker reviews and sends them.',
    system: 'Your CRM, such as Salesforce Financial Services Cloud',
    rule: 'Your own CRM permissions and record policies',
    decides: 'The relationship banker',
    span: 'lg:col-span-5',
  },
];

/* ── Four rules. Each quotes the fetched source; ledger has the exact words. ── */
const RULES: ReadonlyArray<{ t: string; says: string; build: string; href: string; cite: string }> = [
  {
    t: 'GLBA Safeguards Rule',
    says: 'The FTC version (16 CFR Part 314) covers financial institutions not under another regulator, and names mortgage lenders, payday lenders, finance companies and mortgage brokers. It requires a Qualified Individual to oversee the security program and controls to monitor and log the activity of authorized users. Banks and federally insured credit unions follow their own regulators’ GLBA standards.',
    build: 'The agent gets its own user, so its activity sits in the same logs as any employee.',
    href: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314',
    cite: 'eCFR: 16 CFR Part 314',
  },
  {
    t: 'ECOA and Regulation B',
    says: 'Section 1002.9 says a creditor must notify an applicant of action taken within 30 days of a completed application. The statement of reasons must be specific, and saying the applicant failed internal standards or a qualifying score is insufficient.',
    build: 'A person records the real reasons. The agent drafts from them and cannot invent one.',
    href: 'https://www.ecfr.gov/current/title-12/chapter-X/part-1002/section-1002.9',
    cite: 'eCFR: 12 CFR 1002.9',
  },
  {
    t: 'BSA suspicious activity reports',
    says: 'Section 1020.320 covers transactions of at least $5,000 that a bank suspects, sets filing no later than 30 calendar days after initial detection (up to 60 if no suspect is identified), and says a SAR and any information that would reveal it are confidential.',
    build: 'The agent prepares the case. It never contacts the customer about it and never files.',
    href: 'https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320',
    cite: 'eCFR: 31 CFR 1020.320',
  },
  {
    t: 'Model risk guidance, SR 26-2',
    says: 'Issued 17 April 2026 by the Fed, OCC and FDIC, it replaces SR 11-7 and SR 21-8. It is guidance, not an enforceable rule, and it says generative and agentic AI models are outside its scope. Your own risk management and governance should still cover them.',
    build: 'We supply the test set, the logs and the written hand-off rules your risk and governance teams ask for.',
    href: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
    cite: 'Federal Reserve: SR 26-2',
  },
];

/* ── Controls. Each restates wording from an existing FactoryJet page. ── */
const CONTROLS: ReadonlyArray<{ t: string; b: string }> = [
  {
    t: 'Its own login, read-only first',
    b: 'The agent gets its own login with only the permissions its job needs. It starts read-only, and write access is added one type at a time, after review.',
  },
  {
    t: 'Shadow mode before go-live',
    b: 'The agent works on real cases but sends nothing. It drafts, and your staff review every draft before any reply, notice or note goes live.',
  },
  {
    t: 'A trace of every run',
    b: 'Every run is traced: the prompt, every tool call, the reply from each system and the agent’s next step. Each fix a reviewer makes is recorded with a name and a timestamp.',
  },
  {
    t: 'Payment detail changes stop',
    b: 'In our accounts payable builds, any bill showing bank details that differ from the vendor record is held until a named person phones the vendor on a number already in your files.',
  },
  {
    t: 'A written hand-off list',
    b: 'Credit decisions, account approvals, SAR decisions, fee waivers and advice go on the hand-off list, each with a named person or queue, before any build work begins.',
  },
];

/* ── Comparison: three routes, typical patterns, no named firms ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 AI your core or LOS vendor ships' },
  { label: '02 A ready-made banking chatbot' },
  { label: '03 An agent built around your jobs', isFactoryJet: true },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it usually is',
    values: [
      'Features switched on inside the core, LOS or CRM you license',
      'A chat or voice product trained on your FAQ',
      'An agent designed around your procedures and your systems',
    ],
  },
  {
    feature: 'Systems it reads',
    values: ['That one vendor’s system', 'Your FAQ and, often, a few account lookups', 'Whatever mix the job needs and your vendors’ APIs allow'],
  },
  {
    feature: 'Who writes the rules',
    values: ['The vendor, with your settings', 'The vendor, tuned to your FAQ', 'Your team, on paper, before the build'],
  },
  {
    feature: 'Who decides credit, accounts and SARs',
    values: ['Your staff', 'Your staff, after the bot hands off', 'Your staff, named on the hand-off list'],
  },
  {
    feature: 'How you pay',
    values: ['Inside your license or as an add-on', 'A subscription', 'A fixed price per phase, in writing'],
  },
  {
    feature: 'Right call when',
    values: [
      'The job lives entirely in that one system',
      'Questions are standard and need little account data',
      'The job follows your procedures or crosses two systems',
    ],
  },
];

/* ── ItemList: the six jobs, mirrored in JSON-LD. ── */
const jobsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Six banking jobs where an AI agent prepares the work and a named person decides',
  itemListElement: JOBS.map((j, i) => ({ '@type': 'ListItem', position: i + 1, name: j.title })),
};

/* ── Process. Mirrors the phases on /services/ai-agent-development. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  { n: '01', t: 'Scoping call', b: 'Bhavesh runs it. What starts the work, which systems it touches, how often it happens and where a person must approve.' },
  { n: '02', t: 'Demo on your data', b: 'The agent works through a sample of your own packets, alerts or messages before any contract, so you can judge where it is right and where it hands off.' },
  { n: '03', t: 'Pilot', b: 'One job live in your systems, with every draft approved by your staff. Paid at milestones.' },
  { n: '04', t: 'Production', b: 'More volume and the edge cases the pilot found, with monitoring and an alert when a step fails.' },
  { n: '05', t: 'Rollout and support', b: 'More jobs, branches or systems, each scoped and priced on its own. Each time your systems or the AI model update, the agent is tested again.' },
];

const RELATED: ReadonlyArray<{ href: string; t: string }> = [
  { href: '/services/ai-underwriting-agents', t: 'AI underwriting agents' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents' },
  { href: '/services/ai-customer-support-agents', t: 'AI customer support agents' },
  { href: '/services/crm-ai-agents', t: 'CRM AI agents' },
  { href: '/blog/best-ai-agent-companies-financial-services', t: 'AI agent companies for financial services' },
  { href: '/blog/ai-agent-security-risks-controls-2026', t: 'AI agent security risks and controls' },
  { href: '/blog/ai-agent-governance-policy-mid-sized-companies-2026', t: 'AI agent governance policy' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support' },
];

const linkCls = 'font-semibold text-fj-ink underline underline-offset-4';

export default function FinancialServicesAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-fj-cream text-fj-ink`}>
        <StickyCtaLabel label="See a demo on my data" title="Demo first" />
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className={`${styles.hero} relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16`}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    AI FOR BANKING &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI for banking and financial services: agents that prepare the file, so a named person decides.
                </h1>

                <p className={`${styles.heroLead} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  FactoryJet designs, builds, implements and supports AI agents for community banks, credit unions,
                  lenders and fintechs in the United States.
                </p>

                <div className={`${styles.heroForm} mt-6`}>
                  <HeroInlineForm
                    region="us"
                    source="services_financial_services_ai_agents_hero"
                    service="Financial Services AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="See it run on your own data before any contract. The founder replies within 24 hours."
                  />
                </div>

                <p className={`${styles.heroDetails} mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600`}>
                  Each agent takes one job and works through the access your systems allow, such as a KYC file, an AML alert or a
                  loan packet. It does the gathering and the first draft. Your staff make every decision.
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
                  <span>Demo on your data before you sign</span>
                  <span>500+ businesses served</span>
                  <span>97% on-time delivery</span>
                  <span>Founded 2014</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-loan-operations-desk.webp`}
                    alt="A woman in her forties with short dark hair and a gray blazer sorts a stack of paper forms at a pale wooden desk while a man in his fifties with a white beard and a navy sweater points at one page, beside an orange folder"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                      What arrives, what the agent prepares, who decides
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
                AI for banking works best as agents that prepare one job and hand the decision to a named person.
                FactoryJet builds AI agents for financial services that assemble KYC files, summarize AML alerts,
                read loan packets and answer member questions, working through the access your core, LOS or CRM allows. Credit decisions,
                account approvals and suspicious activity reports stay with your staff.
              </p>
              <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                Before you sign, the agent runs on your own data so you can judge it. Every phase is priced in
                writing at a fixed figure, and the code is yours.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIX JOBS, numbered */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Which banking jobs can AI agents take on?
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Six, for most first projects. AI agents for banking do the gathering, checking and drafting, and each
              card names where the job lives, the rule that governs the job and the person who decides. A
              core is the system that holds accounts and transactions. An LOS, or loan origination system, runs a
              loan from application to closing. How far an agent can reach into a core or LOS depends on the API
              access your vendor licenses to you; we confirm it in scoping, before any quote. For the paperwork side,
              see{' '}
              <Link href="/services/document-intake-ai-agents" className={linkCls}>
                document intake AI agents
              </Link>
              .
            </p>

            <ol className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {JOBS.map((s) => (
                <li key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {s.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{s.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink/80">{s.body}</p>
                  <dl className="mt-4 grid gap-2 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <div>
                      <dt className="inline font-semibold">System: </dt>
                      <dd className="inline">{s.system}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Rule: </dt>
                      <dd className="inline">{s.rule}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-[#B23E13]">Decides: </dt>
                      <dd className="inline">{s.decides}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Underwriting prep belongs on this list too, and it gets its own page:{' '}
              <Link href="/services/ai-underwriting-agents" className={linkCls}>
                AI underwriting agents
              </Link>{' '}
              covers income checks and file summaries for underwriters. If you run the finance team inside a company
              rather than a bank, read{' '}
              <Link href="/blog/ai-agents-for-finance-accounting-teams-2026" className={linkCls}>
                AI agents for finance and accounting teams
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 4. FOUR RULES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Where the agent stops</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Which federal texts shape what AI in financial services may do?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Four federal texts shape where we draw the line between what the agent prepares and what your staff decide. Each card quotes the text as
                  published on the day we read it, {CHECKED_ON}, then says how we build around it. This is a summary
                  of public text, not legal advice. Your compliance officer and counsel make the call.
                </p>
                <img
                  src={`${IMG}/bsa-review-table.webp`}
                  alt="Two colleagues, a man in his thirties with black hair in a white shirt and a woman in her sixties with silver hair in a burgundy cardigan, read printed pages at a white table in a bright room, with an orange binder between them"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {RULES.map((r, i) => (
                  <li key={r.t} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-ink/80">{r.says}</p>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span className="font-semibold">How we build: </span>
                        {r.build}
                      </p>
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
                      >
                        {r.cite}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON */}
        <ComparisonTable
          eyebrow="Three routes"
          headline="Switch on what your vendor ships, subscribe to a chatbot, or have an agent built."
          lead="Typical patterns for each route, not facts about any named vendor. During scoping we say which route we would pick for your job."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Ask each vendor what its product does on your own data."
          scrollRegionLabel="Comparison of three ways a bank or credit union can add AI"
        />

        <MidPageCTA
          headline="Send us one job your operations team repeats every day. We will tell you the shortest route."
          sub="A KYC queue, AML alerts, loan packets or member questions. Our reply covers what your vendors already handle and a fixed written quote for the part worth building."
          label="Scope my agent"
        />

        {/* 6. MEMBER AND CUSTOMER SERVICE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">Member and customer service</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What should an AI chatbot for banking answer, and what should it pass on?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink/80">
                  It should answer what the record shows and pass on anything that needs judgment. Conversational AI
                  for banking confirms who is asking before it reads an account. Then it gives a balance, a payment
                  due date or branch hours, takes card dispute intake, and routes fee questions, hardship requests
                  and complaints to the right team with the conversation attached.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink/80">
                  For a credit union, the same agent speaks to members by name and follows your member service
                  scripts. It starts in shadow mode: drafts only, your staff approve each one. For the general
                  pattern across industries, see{' '}
                  <Link href="/services/ai-customer-support-agents" className={linkCls}>
                    AI customer support agents
                  </Link>
                  .
                </p>
              </div>
              <div className="lg:col-span-5">
                <img
                  src={`${IMG}/member-service-desk.webp`}
                  alt="A man in his thirties with short brown hair and a green quarter-zip sweater wears a telephone headset and types at a laptop on a pale desk in a bright office, next to an orange mug"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTROLS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who keeps control</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five controls we build into an agent for a bank or credit union.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We design the agent to fit the controls you already follow, such as SOC 2, CCPA and PCI DSS for
                  card payments. Your vendor management and security teams review it like any other system. Read our
                  notes on{' '}
                  <Link href="/blog/ai-agent-security-risks-controls-2026" className={linkCls}>
                    AI agent security risks and controls
                  </Link>{' '}
                  and on{' '}
                  <Link href="/blog/ai-agent-governance-policy-mid-sized-companies-2026" className={linkCls}>
                    writing an AI agent governance policy
                  </Link>
                  .
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-8">
                {CONTROLS.map((k) => (
                  <li key={k.t} className="grid grid-cols-1 gap-2 rounded-2xl border border-fj-neutral-200 bg-white px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-5">
                    <div className="font-fj-display text-base font-semibold text-fj-ink">{k.t}</div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-ink/80">{k.b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. PROCESS + WHAT FACTORYJET BRINGS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How a project runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How does a first banking AI project run?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink/80">
                  In five phases, each scoped, priced and signed on its own. A pilot on one job usually runs two to four
                  weeks. Once live,{' '}
                  <Link href="/services/ai-agent-monitoring" className={linkCls}>
                    AI agent monitoring and support
                  </Link>{' '}
                  keeps the agent traced and re-tested.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink/80">
                  FactoryJet was founded in 2014 and has served 500+ businesses, with 97% on-time delivery. Our agent
                  work includes the Washington Law Group agent that finds commercial-vehicle accident reports. More
                  on{' '}
                  <Link href="/services/ai-agent-development" className={linkCls}>
                    AI agent development
                  </Link>
                  . The code is yours from day one, and FactoryJet keeps managing the servers, AI models, APIs
                  and maintenance after launch.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-7">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-ink/80">{p.b}</p>
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
              Other pages for banks, lenders and fintechs.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Advisory and RIA firms have their own page:{' '}
              <Link href="/services/wealth-management-ai-agents" className={linkCls}>
                wealth management AI agents
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-white p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
              Federal text read on eCFR and federalreserve.gov on {CHECKED_ON}. Reviewed {PAGE_MODIFIED} &middot;{' '}
              <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                Bhavesh Barot
              </Link>
              , Founder
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQ
          eyebrow="AI for banking FAQ"
          headline="Straight answers on AI for banking and financial services."
          lead="Questions from operations, lending and digital leads at banks, credit unions, lenders and fintechs. Rule summaries reflect the federal text as read on 24 Nov 2026."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 11. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for banking"
          headline="Keep every decision with your staff. Give the gathering and drafting to an agent."
          sub="Name the one queue that takes most of your operations team's day. We build a first version on your own data for you to test, then support it after launch."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Demo on your own data first, contract second. Each phase at a fixed written price. The code is yours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
