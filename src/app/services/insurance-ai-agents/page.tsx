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

/* ─────────────────────────────────────────────────────────────────────────────
   /services/insurance-ai-agents, built 2026-10-11.

   Why this page exists: US monthly searches measured 2026-10-11 (DataForSEO,
   location 2840): "ai insurance" 2,900, "ai for insurance" 1,900 (KD 18),
   "insurance chatbot" 170, "ai for insurance agents" 170, "ai insurance agent"
   140, "insurance automation" 140, "ai agents for insurance" 110, "ai for
   insurance agencies" 90, "best ai for insurance agents" 90, "insurance ai
   agents" 50. FactoryJet had no insurance page.

   Truth rules for anyone editing this file:
   * Every fact about another company (product names, features, counts, prices)
     was read on that company's own page on 2026-10-11 and links to it through
     the SRC map below. All 31 URLs answered a request sent with a desktop
     browser user agent that day. If you change a fact, re-fetch the page first
     and update CHECKED_ON.
   * New sector. No insurance client is named and none is implied. Do not add a
     client, a result, a partner title or a connector claim. The management
     systems are named as software buyers use, from each vendor's own page.
   * No statement about insurance law, licensing rules or what an agent may
     say, and no claim that FactoryJet or its work meets any standard. The page
     says what the software does: it takes details, books and drafts, and hands
     advice and binding decisions to a licensed person. The one regulator link
     is the FCC release on AI voices, given as something the buyer checks with
     a lawyer.
   * No FactoryJet prices and no figure for what a custom agent costs after it
     is built. The dollar figures on the page are: the ProductCrafters market
     range for a BUILD in one FAQ answer, and list prices of two named
     ready-made products (Gail, HawkSoft Self-Service Certificates).
   * Nothing on this page says where the FactoryJet team is.
   * No video embed and no VideoObject schema.
   * Mirrors /services/construction-ai-agents for components, props and schema.
     The sentences are this page's own.

   Schema: WebPage + Service + FAQPage + ItemList + BreadcrumbList.
   Organization is rendered once sitewide by src/app/layout.tsx and referenced
   here by @id. The FAQPage mainEntity is generated from the exact FAQ_ITEMS
   array the visible <FAQ> component renders. There is no second array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/insurance-ai-agents';
const PAGE_TITLE = 'AI for Insurance: Custom AI Agents for Agencies | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US insurance agencies, MGAs and carriers. We design, build and support agents for claim calls, quote intake, certificates and renewals.';
const PAGE_PUBLISHED = '2026-10-11';
const PAGE_MODIFIED = '2026-10-11';
const CHECKED_ON = '11 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/insurance-ai-agents';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for insurance',
    'ai insurance',
    'ai agents for insurance',
    'insurance ai agents',
    'ai insurance agent',
    'ai for insurance agents',
    'ai for insurance agencies',
    'best ai for insurance agents',
    'insurance chatbot',
    'insurance automation',
    'ai receptionist for insurance agency',
    'first notice of loss ai',
    'certificate of insurance automation',
    'custom ai agent for insurance agency',
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
        alt: 'FactoryJet, AI agents for US insurance agencies, MGAs and carriers',
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Insurance AI Agents', url: CANONICAL_URL },
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
  name: 'AI Agent Development for Insurance Agencies, MGAs and Carriers',
  serviceType:
    'AI agents for insurance agencies, AI voice agents for first notice of loss intake, quote intake automation, policy service request handling, certificate of insurance request drafting, renewal reminders, insurance document checks',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet is a services company that designs, builds, implements and supports AI agents. This service is for independent insurance agencies, managing general agents and small carriers in the United States. An agent answers a call or reads a request, looks up the client and the policy, takes the details, books the next step and writes the note or the draft. Advice, coverage answers and binding decisions are handed to a licensed person. The engagement starts with a review of the AI the management system already includes, moves to a build that begins with read-only access, runs beside the team for an agreed period, and continues with support once the agent is live.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-11 and the supporting sentence read before the
   claim was written. The ledger with the quoted words is in the build notes. ── */
const APPLIED = 'https://www1.appliedsystems.com/en-us/solutions/for-agents';
const VERTAFORE = 'https://www.vertafore.com';
const HAWKSOFT = 'https://www.hawksoft.com';
const EZLYNX = 'https://www.ezlynx.com';
const BIG_I = 'https://www.independentagent.com';

const SRC = {
  appliedEpic: {
    short: 'Applied: Applied Epic',
    label: 'Applied Systems: Applied Epic, insurance agency management software',
    url: `${APPLIED}/agency-management-system/applied-epic/`,
  },
  appliedAi: {
    short: 'Applied: AI',
    label: 'Applied Systems: AI-Powered Insurance Platform',
    url: `${APPLIED}/artificial-intelligence/`,
  },
  vertaforeAms360: {
    short: 'Vertafore: AMS360',
    label: 'Vertafore: AMS360 agency management system (Velocity AI agents in AMS360, Certificates in AgencyOne)',
    url: `${VERTAFORE}/products/agency-management-software/ams360`,
  },
  vertaforeAgentic: {
    short: 'Vertafore: Agentic Agency',
    label: 'Vertafore: The Agentic Agency, Velocity AI agents',
    url: `${VERTAFORE}/ai-vertafore/agentic-agency`,
  },
  vertaforeOrange: {
    short: 'Vertafore: Orange Partners',
    label: 'Vertafore: Orange Partner Program',
    url: `${VERTAFORE}/why-vertafore/orange-partner-program`,
  },
  vertaforeAim: {
    short: 'Vertafore: AIM',
    label: 'Vertafore: AIM, MGA management software',
    url: `${VERTAFORE}/products/mga-management-system/aim`,
  },
  hawksoftAms: {
    short: 'HawkSoft: management system',
    label: 'HawkSoft: Agency Management System',
    url: `${HAWKSOFT}/agency-management-system/`,
  },
  hawksoftPartners: {
    short: 'HawkSoft: partners',
    label: 'HawkSoft: Partners (API Partners and Strategic Partners)',
    url: `${HAWKSOFT}/about/partners/`,
  },
  hawksoftCerts: {
    short: 'HawkSoft: Self-Service Certificates',
    label: 'HawkSoft: Self-Service Certificates',
    url: `${HAWKSOFT}/self-service-certificates/`,
  },
  hawksoftComms: {
    short: 'HawkSoft: automated communications',
    label: 'HawkSoft: Automated communications with HawkSoft+ Rocket Referrals',
    url: `${HAWKSOFT}/automated-communications/`,
  },
  ezlynxAms: {
    short: 'EZLynx: management system',
    label: 'EZLynx: All-in-One Insurance Agency Management System',
    url: `${EZLYNX}/products/management-system/`,
  },
  ezlynxAi: {
    short: 'EZLynx: EVA',
    label: 'EZLynx: AI Solutions for Insurance Agents, EZLynx Virtual Assistant (EVA)',
    url: `${EZLYNX}/solutions/artificial-intelligence/`,
  },
  ezlynxRenew: {
    short: 'EZLynx: renewals',
    label: 'EZLynx: Renewals and Client Retention Software for Independent Agencies',
    url: `${EZLYNX}/solutions/renewals-client-retention/`,
  },
  ezlynxPartners: {
    short: 'EZLynx: technology partners',
    label: 'EZLynx: Technology Partners (EZLynx Connect)',
    url: `${EZLYNX}/partners/`,
  },
  acordForms: {
    short: 'ACORD: forms',
    label: 'ACORD: ACORD Forms',
    url: 'https://www.acord.org/forms-pages/acord-forms',
  },
  acordCoi: {
    short: 'ACORD: certificates FAQ',
    label: 'ACORD: Certificates of Insurance, Frequently Asked Questions (PDF)',
    url: 'https://www.acord.org/docs/default-source/forms/acordcertificatesfaq',
  },
  bigiSurvey: {
    short: 'Big "I": 2026 Tech Trends Report',
    label: 'Big "I" news release, 19 Feb 2026: Two-Thirds of Independent Agents Plan to Increase AI Use This Year (ACT Tech Trends Report)',
    url: `${BIG_I}/news/two-thirds-of-independent-agents-plan-to-increase-ai-use-this-year/`,
  },
  bigiEval: {
    short: 'Big "I": AI vendor evaluation',
    label: 'Big "I" Agents Council for Technology: AI Vendor Evaluation Resources for Independent Agents',
    url: `${BIG_I}/ai-evaluation-resources-for-independent-agents/`,
  },
  fcc: {
    short: 'FCC release on AI-voice calls, 8 Feb 2024',
    label: 'FCC news release of 8 Feb 2024, titled FCC Makes AI-Generated Voices in Robocalls Illegal',
    url: 'https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf',
  },
  sonant: {
    short: 'Sonant',
    label: 'Sonant: The AI Receptionist for Insurance',
    url: 'https://www.sonant.ai/',
  },
  sonantAms: {
    short: 'Sonant: integrations',
    label: 'Sonant: Agency management system integrations',
    url: 'https://www.sonant.ai/agency-management-systems',
  },
  gail: {
    short: 'Gail',
    label: 'Gail: AI for financial services',
    url: 'https://www.meetgail.com/en',
  },
  gailPricing: {
    short: 'Gail: pricing',
    label: 'Gail: Pricing',
    url: 'https://www.meetgail.com/en/pricing',
  },
  liberate: {
    short: 'Liberate',
    label: 'Liberate: Insurance runs on Liberate',
    url: 'https://www.liberate.ai/',
  },
  liberateFnol: {
    short: 'Liberate: FNOL',
    label: 'Liberate: FNOL, start every claim on the right foot',
    url: 'https://www.liberate.ai/claims/fnol',
  },
  strada: {
    short: 'Strada',
    label: 'Strada: Phone, Email, and Chat AI for Insurance Carriers and Brokers',
    url: 'https://www.getstrada.com/',
  },
  indemn: {
    short: 'Indemn',
    label: 'Indemn: Handle More Insurance Work With the Team You Already Have',
    url: 'https://www.indemn.ai/',
  },
  quandriRenewals: {
    short: 'Quandri: renewals',
    label: 'Quandri: AI for personal lines renewals',
    url: 'https://www.quandri.io/personal-lines-renewals',
  },
  bevaya: {
    short: 'Bevaya: agent library',
    label: 'Bevaya: Pre-Built AI Agent Library',
    url: 'https://www.bevaya.ai/platform/ai-agents',
  },
  sixfold: {
    short: 'Sixfold',
    label: 'Sixfold: AI for Insurance Underwriters',
    url: 'https://www.sixfold.ai/',
  },
  productCrafters: {
    short: 'ProductCrafters cost breakdown, 2026',
    label: 'ProductCrafters: AI Agent Development Cost, $5K to $180K+ (2026 Pricing Breakdown)',
    url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   The 9 Oct 2026 assistant runs asked no insurance question, so the questions
   come from People Also Ask on ten US Google searches pulled from DataForSEO
   on 2026-10-11 (location 2840, career and consumer shopping questions left
   out) and from the page's own keywords. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'jobs', label: 'What AI does in insurance' },
  { key: 'software', label: 'Agency management systems' },
  { key: 'phones', label: 'Calls, chat and reminders' },
  { key: 'control', label: 'Control and hand-offs' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What AI does in insurance ────────────────────────────────────
  {
    category: 'jobs',
    question: 'What is AI in insurance?',
    answer:
      'In an agency, MGA or carrier office, it means software given one routine job, which stops where judgment starts. It answers the phone, takes a first notice of loss, collects quote details, drafts a certificate request or checks a document against the record. Advice, coverage answers and binding stay with licensed people. Management systems now ship some of this themselves, and custom agents cover the jobs those leave open.',
  },
  {
    category: 'jobs',
    question: 'How can an insurance agent use AI?',
    answer:
      'Start with the jobs that repeat. In the Big "I" Agents Council for Technology 2026 report, the AI tools agencies named most were ChatGPT or other public models (45%), policy comparison tools (20%) and AI marketing tools (18%). Only 13% used AI chatbots or virtual assistants. In our view the service desk is the place to look next: answering calls, taking claim and quote details, drafting certificate requests and sending renewal reminders, each with a person approving the result.',
  },
  {
    category: 'jobs',
    question: 'What is the best AI tool for insurance agents?',
    answer:
      'It depends on the job, so we group tools by job and leave ranking aside. For work inside your management system, use what the vendor ships, such as the Velocity AI agents in AMS360 or EVA in EZLynx. For phone answering, Sonant, Gail and Liberate each sell a ready-made product. For renewals, look at Quandri. When the job runs on your own script or spans two systems, commission a custom agent.',
  },
  {
    category: 'jobs',
    question: 'Which AI is best for insurance?',
    answer:
      'The answer changes with the kind of firm. For an independent agency, the AI inside the management system and a phone agent are the two places to start. For an MGA, a sensible first job is submission intake and document checks, where Bevaya and Sixfold sell products. For a carrier it is claims intake, where Liberate and Strada do. Ask each vendor for a trial on your own calls or files before you choose.',
  },
  {
    category: 'jobs',
    question: 'Is AI going to replace insurance agents?',
    answer:
      "No. Google put this question, worded five different ways, on five of our ten searches of 11 Oct 2026, so it is on agents' minds. Vertafore's own answer is that insurance still depends on human expertise, judgment and relationships. The agents we build take details, book calls and draft paperwork. Advice, coverage answers and binding stay with a licensed person.",
  },
  {
    category: 'jobs',
    question: 'What does an AI agent do in an insurance agency?',
    answer:
      'Think of it as a program with one office job, which it carries from the first contact to the hand-off. A voice agent answers a call, confirms who is calling against your management system, asks the questions your staff would ask and writes the note to the client record. A document agent reads a policy or an application and lists what does not match. Each one hands advice and decisions to a person.',
  },
  {
    category: 'jobs',
    question: 'What is an insurance chatbot, and is it the same as an AI agent?',
    answer:
      'An insurance chatbot answers typed questions on a website or in a messaging app. An AI agent does a job. It looks up the client, takes a claim or quote request, books a call and writes the note to your system, and it can work by phone, text, web chat or WhatsApp. In US search data pulled on 11 Oct 2026, "insurance chatbot" drew about 170 searches a month and "ai for insurance" about 1,900.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent take a first notice of loss by phone?',
    answer:
      'Yes. The agent answers at any hour, confirms the caller and the policy, and asks what happened, when, where and who was involved. It writes one complete note and alerts the person on call. Whether the loss is covered and what happens next stay with the adjuster. Liberate and Strada sell ready-made products for this job, and a custom build fits when intake must follow your own script.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent handle certificate of insurance requests?',
    answer:
      "The reading and the drafting, yes. The agent pulls the holder's name and address from the request, checks what is asked for against the policy on file and prepares the certificate for a licensed person to review and issue. ACORD's own FAQ says a certificate is not a policy and does not alter one, so anything the policy does not show goes to a person.",
  },
  {
    category: 'jobs',
    question: 'How to use AI in insurance marketing?',
    answer:
      'Start with the tools in your management system. Vertafore says AMS360 includes Vertafore Client Communications, which drafts emails with AI for renewals and campaigns. EZLynx says EVA drafts an email to the length and formality you choose, for you to review before sending. HawkSoft bundles Rocket Referrals for automated client messages and review requests. A custom agent adds follow-up by phone, text or WhatsApp to people who asked you for a quote.',
  },
  // ── Agency management systems ────────────────────────────────────
  {
    category: 'software',
    question: 'What software do insurance agents use?',
    answer:
      'Most independent agencies run on an agency management system, or AMS. Vertafore describes an AMS as specialized software that helps agencies manage client policies, handle accounting such as billing and commissions, and automate workflows in one place. Four examples are Applied Epic, Vertafore AMS360, HawkSoft and EZLynx. Around it sit a rater for quotes, a phone system and often a CRM, which is a customer relationship management tool.',
  },
  {
    category: 'software',
    question: 'What is the best software for insurance agents?',
    answer:
      'We build agents and leave ranking management systems to the agencies that use them. The vendors describe their own fit. Applied says Applied Epic is for mid-size and enterprise independent agencies. EZLynx says it is made for independent agencies, not enterprise IT departments. HawkSoft says it was created by independent agents and is independently owned. Vertafore says thousands of agencies trust AMS360.',
  },
  {
    category: 'software',
    question: 'Does Applied Epic have AI?',
    answer:
      "Yes. Applied's page for Applied Epic lists automatic email summaries and data prefill, and an embedded renewals application that uses AI to highlight coverage gaps in commercial accounts. Applied Recon uses AI to match carrier statements and asks you to confirm its suggestions. Applied says it began its AI work in 2023, acquired the insurance AI company Planck in 2024, and keeps humans in control of AI-driven actions.",
  },
  {
    category: 'software',
    question: 'Does Vertafore AMS360 have AI agents?',
    answer:
      "Yes. On 11 Oct 2026 the AMS360 page showed five Velocity AI agents. Email Agent and Reconciliation Agent were marked Live. Coach Agent, Policy Intake Agent and Policy Check Agent were marked Early Adopter. Vertafore's wider Agentic Agency page listed eight agents in all. None of the eight descriptions mentions answering a phone call, which is the gap that voice products and custom voice agents fill.",
  },
  {
    category: 'software',
    question: 'Does HawkSoft have AI?',
    answer:
      'On the HawkSoft pages we read on 11 Oct 2026, AI comes mainly through partners. The partner page showed 26 partners labeled Two-way API Integrated, and five of them sell voice AI: Cara, Gail, Liberate, PolicyLift and Sonant. HawkSoft also bundles Rocket Referrals, which it says includes AI features that tailor outreach. If you run HawkSoft, read that partner page before you commission a build.',
  },
  {
    category: 'software',
    question: 'Does EZLynx have AI?',
    answer:
      'Yes. EZLynx calls it EVA, the EZLynx Virtual Assistant. Its page lists five features: Email Content Assist, Account Summarization, Product Assistance, Automated Text Replies, and email and account summaries inside Outlook. Automated Text Replies watches incoming texts for requests such as an ID card or coverage, vehicle or driver information and answers them. EZLynx says the email drafts are yours to review and edit before sending.',
  },
  {
    category: 'software',
    question: 'Can a custom AI agent connect to our agency management system?',
    answer:
      'Usually, through the route the vendor provides. Applied says APIs and granular security controls support integrations with third-party applications. Vertafore describes an open platform and APIs behind its Orange Partner Program. HawkSoft says its Partner API connections let agencies integrate third-party tools, and EZLynx runs a technology partner program called EZLynx Connect. The vendor grants the access, so step one is asking what your subscription lets an outside integration read and write.',
  },
  // ── Calls, chat and reminders ────────────────────────────────────
  {
    category: 'phones',
    question: 'Can AI calling agents be used for insurance companies?',
    answer:
      "Yes for answering your own line: claim intake, quote details, service requests and call-backs. Calling out is a separate question. The FCC's release of 8 February 2024 says AI-generated voices in calls count as 'artificial' under the TCPA, the Telephone Consumer Protection Act. It adds that FCC rules make telemarketers get prior express written consent from consumers before robocalling them. Get a lawyer's view before you run outbound calls. Nothing here is legal advice.",
  },
  {
    category: 'phones',
    question: 'How much does an AI receptionist for an insurance agency cost?',
    answer:
      "For a ready-made product, one of the vendors we read shows a list price. Gail's pricing page on 11 Oct 2026 listed its Gail Agent plan at $425 a month billed annually, or $600 on a monthly plan, with 50 hours of voice time a month. On the pages we read, Sonant and Liberate showed no list price and asked you to book a demo. A voice agent written for your office is priced as a project. FactoryJet sets a fixed price in writing for that project and for the support that follows, once a short scoping call is done.",
  },
  {
    category: 'phones',
    question: 'What happens when a caller asks a coverage question?',
    answer:
      'The agent takes the question down and hands it to a licensed person. If someone is free, it transfers the call with a short summary. If nobody is, it books a call-back and tells the caller when to expect it. We write these hand-off rules with you before launch and test them on sample calls. The agent does not tell a caller whether something is covered.',
  },
  {
    category: 'phones',
    question: 'Can an AI agent send renewal reminders?',
    answer:
      'Yes. It works from the renewal list in your management system, sends the reminder by email, text or WhatsApp, answers simple replies and books a review with the producer. Check your system first, because EZLynx says its renewal workflows can email lower-risk clients automatically. For reminders by phone, ask your lawyer about consent before an AI voice calls anyone.',
  },
  // ── Control and hand-offs ────────────────────────────────────────
  {
    category: 'control',
    question: 'Will the agent give advice or bind coverage?',
    answer:
      'No. We set it up to take details, book calls and draft paperwork. Advice, coverage answers, quotes, binding, endorsements and claim decisions are written down as hand-offs before the build starts, and each one goes to a named licensed person. The vendors draw a similar line. Applied says humans retain ultimate control over any AI-driven action, and Indemn says it routes consequential decisions to the right person.',
  },
  {
    category: 'control',
    question: 'Where do call notes and documents go?',
    answer:
      'Onto the client record in your management system, wherever its access allows. Each call leaves a summary, the details collected and the next step, filed against the right client and policy. Where a system will not accept a write from outside software, the agent sends the note to a shared inbox or task list your team already works from, and we tell you that at the start.',
  },
  {
    category: 'control',
    question: 'What should an agency check before an AI tool handles client data?',
    answer:
      'Start with the Big "I" Agents Council for Technology, which publishes 20 questions to ask when evaluating AI tools and a vendor checklist. Its 2026 report found that 55% of agencies had no written AI use policy, so write yours first. Ask every vendor, us included, where client data is stored, who can see it, what is logged and how a person reviews the output. Have your own counsel read the contract.',
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'What is the price of a custom-built AI agent for an insurance agency?',
    answer:
      "The price follows the work, meaning how many channels the agent covers, which systems it reads and whether it writes back to them. As a market guide, development firm ProductCrafters' 2026 breakdown puts a custom AI agent build between about $5,000 and more than $180,000 across all industries. Your own figure comes from FactoryJet in writing after a short scoping call, with the build and the support each priced at a fixed amount.",
  },
  {
    category: 'working',
    question: 'How many weeks does an insurance AI agent take to build?',
    answer:
      'A single-job pilot typically takes two to four weeks. Production work, with permissions, logging, hand-off rules and monitoring in place, typically takes six to twelve weeks. For an insurance office the pilot could be after-hours claim intake. Access to your management system and phone system is the biggest variable, and work moves fastest when you can share a test login and your call script at the start.',
  },
  {
    category: 'working',
    question: 'Can we watch the agent work before signing a contract?',
    answer:
      'Yes. A working first version, running on your own material, comes before any contract. For an insurance office that would be a first version of the voice agent running your claim or quote script on a test line, or a batch of your past certificate requests drafted for you to compare with what your team issued.',
  },
  {
    category: 'working',
    question: 'Who looks after the agent once it is live?',
    answer:
      'FactoryJet does. Management systems, phone systems and AI models all change, and an agent has to be tested again when they do. The people who built your agent keep reading its logs, test it again after each change and repair faults. Servers, AI models, API connections and maintenance all stay with FactoryJet, which leaves your office free of them.',
  },
  {
    category: 'working',
    question: 'Does our agency own the agent and the code?',
    answer:
      'Yes. The agent is built for your office, and the code, the call scripts and the written notes on how it works belong to you. Day-to-day care of the agent stays with FactoryJet. If you later take the work in-house or move it to another firm, all of it goes with you.',
  },
  {
    category: 'working',
    question: 'Does this work for MGAs and carriers as well as agencies?',
    answer:
      'Yes. The pattern is the same in each: collect, check, write the note and hand the decision to a person. For an MGA a sensible first job is submission intake, which means reading ACORD forms, loss runs and schedules and listing what is missing before an underwriter opens the file. For a small carrier it is first notice of loss by phone and claim status calls.',
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
    arrives: 'A policyholder calls after an accident.',
    does: 'The agent takes the first notice of loss and writes one note.',
    decides: 'Your claims contact takes it from there.',
  },
  {
    arrives: 'A prospect asks for a quote.',
    does: 'The agent collects the details your rater needs.',
    decides: 'A licensed agent quotes and advises.',
  },
  {
    arrives: 'A contractor needs a certificate today.',
    does: 'The agent drafts it from the policy on file.',
    decides: 'Your account manager reviews and issues it.',
  },
  {
    arrives: 'A renewal date is coming up.',
    does: 'The agent sends the reminder and books a review.',
    decides: 'Your producer runs the review.',
  },
];

/* ── What the agency management systems already ship for AI. Each card restates
   the vendor's own pages as read on 2026-10-11. Nothing here is our opinion of
   the product. ── */
const SHIPS: ReadonlyArray<{
  name: string;
  kind: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'Applied Epic',
    kind: 'Agency management system · Applied Systems',
    says: "Applied calls Applied Epic the world's most widely used agency management system for mid-size and enterprise independent agencies. Its page lists automatic email summaries, data prefill and an embedded renewals application that uses AI to highlight coverage gaps in commercial accounts. Applied Recon matches carrier statements with AI and asks you to confirm its suggestions. Applied says it acquired the insurance AI company Planck in 2024, and that humans retain ultimate control over any AI-driven action.",
    sources: ['appliedEpic', 'appliedAi'],
    span: 'lg:col-span-7',
  },
  {
    name: 'Vertafore AMS360',
    kind: 'Agency management system · Vertafore',
    says: "The AMS360 page showed five Velocity AI agents inside the product. Two were marked Live when we read it. Email Agent interprets incoming emails, summarizes them and triggers the right workflow. Reconciliation Agent matches carrier statements to agency transactions. Coach, Policy Intake and Policy Check were marked Early Adopter. The same page describes Certificates in AgencyOne, which creates and issues certificates from AMS360 data.",
    sources: ['vertaforeAms360', 'vertaforeAgentic'],
    span: 'lg:col-span-5',
  },
  {
    name: 'HawkSoft',
    kind: 'Agency management system · independently owned',
    says: 'HawkSoft says it has made management systems since 1995 and is independently owned. On the pages we read, AI comes mainly through partners. Its partner page showed 26 partners labeled Two-way API Integrated when we counted, and five of them sell voice AI. HawkSoft also sells Self-Service Certificates, a portal where insureds add certificate holders and generate certificates themselves, for a flat $49 a month per agency. Its HawkSoft+ bundle adds Rocket Referrals for automated client messages.',
    sources: ['hawksoftAms', 'hawksoftPartners', 'hawksoftCerts', 'hawksoftComms'],
    span: 'lg:col-span-5',
  },
  {
    name: 'EZLynx',
    kind: 'Agency management system · part of Applied Systems',
    says: "EZLynx describes an all-in-one management system made for independent agencies. Its AI tool is the EZLynx Virtual Assistant, EVA. EVA drafts emails for you to review and edit, summarizes a client's emails, texts and notes, and watches incoming texts for requests such as an ID card or coverage details, then replies. For renewals, EZLynx says its workflows can email lower-risk clients automatically and that Automated Renewal Quoting retrieves remarketed rates, meaning fresh quotes from other carriers, for at-risk policies.",
    sources: ['ezlynxAms', 'ezlynxAi', 'ezlynxRenew'],
    span: 'lg:col-span-7',
  },
];

/* ── Five questions that decide the route. A numbered list on purpose. ── */
const DECIDE_STEPS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Does the job live inside your management system?',
    b: 'Email triage, account summaries, renewal emails and statement reconciliation ship inside AMS360 and EZLynx today. Switch those on before you subscribe to or build anything.',
  },
  {
    n: '02',
    t: 'Is it standard phone answering?',
    b: "Ready-made voice products exist, and several connect to the main systems. Sonant names six management systems on its integrations page. HawkSoft's partner page showed five voice AI partners with two-way API integration when we counted.",
  },
  {
    n: '03',
    t: 'Does it need your own script, or your phone line and two systems at once?',
    b: "This is custom agent territory. Examples are a claim intake that follows your carrier's questions, a certificate drafted from your own policy records, and a reminder that goes out on WhatsApp and is logged in HubSpot.",
  },
  {
    n: '04',
    t: 'Can the hand-off rules be written down?',
    b: 'List what the agent may answer from the record and what it must pass to a licensed person. If your service team can agree that list on one page, an agent can follow it.',
  },
  {
    n: '05',
    t: 'Who receives each hand-off?',
    b: 'Name one person or one queue for claims, one for service requests and one for certificates before anything is built. A hand-off with no owner becomes a call nobody returns.',
  },
];

/* ── Six jobs. One card each. The jobs are the ones named in the brief for
   independent agencies, MGAs and small carriers. No insurance client is
   claimed. Every job ends with a hand-off to a licensed person. ── */
type Job = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  note: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const JOBS: ReadonlyArray<Job> = [
  {
    n: '01',
    title: 'First notice of loss by phone',
    body: 'A policyholder calls after a crash, a break-in or a burst pipe, often when the office is closed. A voice agent answers and takes the first notice of loss (FNOL), which is the first report of a claim, then passes it on as one complete note.',
    items: [
      'Confirms who is calling and finds the policy in your management system',
      'Asks what your claims contact would ask: what happened, when and where, who was involved and whether anyone was hurt',
      'Writes one note to the client record and alerts the person on call',
      'Puts the call through to a person if the caller reports an injury, is distressed or asks for someone',
    ],
    note: 'Whether a loss is covered and what happens next stay with the adjuster and the carrier. The agent collects and hands over. Ready-made products exist for this job. Liberate says its voice AI handles FNOL from first hello to filed claim and hands off with context when a situation needs human judgment. Strada lists full first notice of loss intake over phone, chat or email. A custom build fits when intake has to follow your own script and land in your own systems.',
    sources: ['liberateFnol', 'strada'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Quote intake',
    body: 'A prospect calls, fills in a web form or sends a message asking for a price. The agent collects what your rater needs, so a licensed agent can quote without calling back for missing details. A rater is the tool that compares prices across carriers.',
    items: [
      'Asks the questions for that line of business, such as drivers and vehicles for auto or the address and year built for a home',
      'Checks the answers for gaps before a person sees them, for example a missing date of birth or VIN (vehicle identification number)',
      'Opens the prospect in your management system or CRM and books a call with a producer, the person who sells the policy',
      'Leaves the price, the coverage advice and the choice of carrier to the licensed agent',
    ],
    note: "Rating is already inside two of the systems. Applied's page lists personal and commercial lines quoting within Applied Epic, and EZLynx describes an embedded comparative personal lines rater and a commercial submission tool. Sonant lists quote intake from a call into your AMS or rater. A custom agent stops where the rater starts.",
    sources: ['appliedEpic', 'ezlynxAms', 'sonant'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'Policy service questions',
    body: 'Many calls and texts to a service desk are routine: an ID card, a payment date, a new address, a lender update. The agent answers what the record already shows and takes a clean request for everything else.',
    items: [
      'Looks up the client and the policy before it answers anything',
      'Sends a document the record already holds, such as an ID card',
      'Takes a change request, such as a new vehicle or driver, as a task for a licensed person to process',
      'Hands any question about what a policy covers to a person',
    ],
    note: 'Check your system before anyone builds. EZLynx says EVA watches incoming texts for requests such as an ID card or coverage, vehicle or driver information and answers them automatically. Vertafore marks its Email Agent as Live. It interprets incoming emails, summarizes them and triggers the right workflow. A custom agent covers the channels and requests those leave open, starting with the phone.',
    sources: ['ezlynxAi', 'vertaforeAms360'],
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Certificate of insurance requests',
    body: 'A certificate of insurance tells a third party what coverage a client holds. ACORD, which publishes the standard forms the industry uses, says millions are issued every year. The agent drafts each one for your account manager to review and issue.',
    items: [
      "Reads the request, whether it arrives by email, portal or phone, and pulls out the name and address of the certificate holder, the party asking for proof",
      'Checks what the requester asks for against the policy on file and lists anything the policy does not show',
      'Prepares the certificate in your management system for a licensed person to review and issue',
      'Sends the issued certificate to the requester and files a copy on the client record',
    ],
    note: "ACORD's own FAQ says a certificate is not an insurance policy and does not amend, extend or alter one. So the agent reads coverage from the policy on file, never from the request. Two vendors ship certificate tools. HawkSoft's Self-Service Certificates lets insureds add holders and generate certificates in a portal, for a flat $49 a month per agency. Vertafore describes Certificates in AgencyOne, which uses AMS360 data.",
    sources: ['acordCoi', 'acordForms', 'hawksoftCerts', 'vertaforeAms360'],
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Renewal reminders',
    body: 'Every policy has a renewal date, and each one is a reason to speak to the client. The agent sends the reminder, answers the simple replies and books the review.',
    items: [
      'Works from the renewal list in your management system',
      'Sends the reminder by the channel the client chose, whether email, text or WhatsApp',
      'Books a review call with the producer when the client wants to talk',
      'Logs each message on the client record',
    ],
    note: 'Start with what you own. EZLynx says its renewal workflows can automatically email lower-risk clients, and that Automated Renewal Quoting retrieves remarketed rates for at-risk renewals. Quandri says it reviews every renewing policy and drafts policy-specific emails. A custom agent fits when reminders go out by WhatsApp or phone, or follow rules of your own. Ask your lawyer about consent before an AI voice calls anyone.',
    sources: ['ezlynxRenew', 'quandriRenewals', 'fcc'],
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Document checks',
    body: 'Policies, endorsements, applications and loss runs arrive as PDFs. A loss run is a carrier report of past claims. The agent reads each document against what your system holds and lists the differences.',
    items: [
      'Compares an issued policy with the quote or application it came from',
      'Flags a limit, a date, a name or an address that does not match the record',
      'Checks that a submission holds every document on your checklist',
      'Lists what it found and changes nothing. A person decides what to correct',
    ],
    note: 'Vertafore lists a Policy Check Agent, marked Early Adopter when we read the page, that compares issued policies against AMS360 data and source documents and recommends corrections for review. Bevaya lists pre-built agents for ACORD form extraction, loss run processing and policy to policy comparison. Sixfold sells AI for underwriters that reads loss runs and statements of values. A custom agent fits a checklist that is yours alone.',
    sources: ['vertaforeAgentic', 'bevaya', 'sixfold'],
    span: 'lg:col-span-5',
  },
];

/* ── Who keeps control. Three the software provides, three we set up, two the
   licensed team keeps. Vendor facts are from the linked pages. ── */
type Keeper = 'software' | 'build' | 'person';

const KEEPER_LABEL: Record<Keeper, string> = {
  software: 'Your software provides',
  build: 'We set up',
  person: 'Your licensed people keep',
};

const GUARDS: ReadonlyArray<{ rule: string; keeper: Keeper; note: string }> = [
  {
    rule: 'A login with limits',
    keeper: 'software',
    note: "Applied's page lists client and user-based permissions and branch and group hierarchies under Applied Epic's flexible configuration, and granular security controls for integrations.",
  },
  {
    rule: 'AI output a person confirms',
    keeper: 'software',
    note: "The vendors build review in. Applied says you confirm the suggestions Applied Recon makes. EZLynx says you review EVA's email draft and edit it before sending. Vertafore's Policy Check Agent recommends corrections for review.",
  },
  {
    rule: 'Certificates you can pull back',
    keeper: 'software',
    note: 'HawkSoft says its Self-Service Certificates portal lets an agency choose who receives access links and revoke a certificate from the web portal at any time.',
  },
  {
    rule: 'A written hand-off list',
    keeper: 'build',
    note: 'Advice, coverage answers, binding, endorsements (changes to a policy) and claim decisions are listed as hand-offs before the build starts. When a caller raises one, the agent takes the details and passes the call or the note to a licensed person.',
  },
  {
    rule: 'Look before it writes',
    keeper: 'build',
    note: 'Version one can look at your records and cannot change them. Each write permission is added later, once you have reviewed the notes and drafts it produces.',
  },
  {
    rule: 'A log of every call and draft',
    keeper: 'build',
    note: 'Each call is logged with its summary, the record the agent looked up and the note it wrote, so a reviewer can see what was said and what was done.',
  },
  {
    rule: 'Advice and binding',
    keeper: 'person',
    note: 'What a policy covers, which carrier to place with and when coverage starts stay with your licensed people. The agent prepares the file and they decide.',
  },
  {
    rule: 'Claim decisions',
    keeper: 'person',
    note: 'The agent takes the first notice of loss. Whether a loss is covered, what it is worth and what happens next belong to the adjuster and the carrier.',
  },
];

/* ── Where insurance AI projects go wrong. Five come from the linked pages.
   Three are our own advice and carry no source link. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'A coverage question answered on the phone',
    b: 'A caller asks whether a loss is covered. The agent should write the question down word for word and pass it to a licensed person. Set that rule before launch and test it on sample calls.',
    sources: [],
  },
  {
    t: 'A certificate drafted from the request',
    b: "ACORD's own FAQ says a certificate of insurance is not an insurance policy and does not amend, extend or alter one. The draft has to come from the policy on file, and anything the requester wants that the policy does not show goes to a person.",
    sources: ['acordCoi'],
  },
  {
    t: 'Public chat tools and no written policy',
    b: 'In the Big "I" Agents Council for Technology 2026 report, 45% of agencies said they use ChatGPT or other public AI models, and 55% had no written AI use policy. Write the policy before client data goes anywhere new. The same council publishes 20 questions to ask an AI vendor.',
    sources: ['bigiSurvey', 'bigiEval'],
  },
  {
    t: 'Paying twice for what your system already does',
    b: 'Vertafore marks its Email Agent and Reconciliation Agent as Live in AMS360. EZLynx ships EVA for email drafts, account summaries and text replies. HawkSoft sells self-service certificates as an add-on. Read the feature list you already pay for before a build.',
    sources: ['vertaforeAms360', 'ezlynxAi', 'hawksoftCerts'],
  },
  {
    t: 'Call notes that live outside the client record',
    b: 'If the voice agent writes its summary to an inbox or a separate app, your team has two places to read. Every call, text and draft should land on the client record in the management system.',
    sources: [],
  },
  {
    t: 'Outbound calls with an AI voice',
    b: "A 2024 FCC ruling treats an AI-generated voice on a call as 'artificial' under the TCPA, the law the FCC uses to limit junk calls. The FCC says telemarketers need prior express written consent from consumers before robocalling them. Take legal advice before an AI voice dials out to anyone.",
    sources: ['fcc'],
  },
  {
    t: 'A storm weekend with no plan behind the phone',
    b: 'Claims calls arrive together after hail or a flood. A voice agent can take many calls at once, but the hand-off behind it has to be planned: who is on call, what counts as urgent and when each caller will hear back.',
    sources: [],
  },
  {
    t: 'No named person for hand-offs',
    b: 'Applied says humans retain ultimate control over any AI-driven action, and Vertafore says its AI has human-in-the-loop controls. Build the same rule into a custom agent and put a name against claims, service requests and certificates.',
    sources: ['appliedAi', 'vertaforeAgentic'],
  },
];

/* ── What FactoryJet brings, stated plainly. No client is named on this page,
   no insurance client is claimed and no result is claimed. The first card is
   Bhavesh's own statement of 2026-10-09 and 2026-10-11. The second and fourth
   use wording he approved. The third is the confirmed founding year and the
   confirmed "500+ businesses" figure. ── */
const EXPERIENCE: ReadonlyArray<{ t: string; kind: string; what: string; href: string; cta: string; span: string }> = [
  {
    t: 'What we build',
    kind: 'Voice agents · ERP agents · integrations',
    what: 'FactoryJet builds AI voice agents for call centers as well as small offices. On Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, our agents have handled RFQs (requests for quote), quoting, purchase orders, sales orders and daily bookkeeping. Our integration work covers HubSpot, WhatsApp, Xero and EDI (electronic data interchange). An insurance office needs the same parts: a phone line, a record system and a queue of documents.',
    href: '/services/ai-agent-development',
    cta: 'See AI agent development',
    span: 'lg:col-span-7',
  },
  {
    t: 'A demo before the contract',
    kind: 'A demo on your own material',
    what: 'You see working software running on your own data before any contract is signed. For an insurance office that would be your call script on a test line, or a set of your past requests drafted for you to check against what your team sent.',
    href: '/contact',
    cta: 'Book a demo on your own calls and files',
    span: 'lg:col-span-5',
  },
  {
    t: 'How long we have been at it',
    kind: 'Founded 2014 · 500+ businesses served',
    what: 'The company started in 2014. Since then it has delivered work for more than 500 businesses, and today it is an ecommerce and AI services firm that designs, builds, implements and supports what it ships.',
    href: '/about',
    cta: 'Read about FactoryJet',
    span: 'lg:col-span-5',
  },
  {
    t: 'Who looks after it',
    kind: 'Managed after launch',
    what: 'A short scoping call comes first. Then FactoryJet puts two fixed prices in writing, one to build the agent and one to support it. After go-live FactoryJet stays responsible for the servers, AI models, API connections and maintenance behind the agent. You own what we build.',
    href: '/services/ai-agent-monitoring',
    cta: 'See monitoring and support',
    span: 'lg:col-span-7',
  },
];

/* ── Who this is for. Examples of the kinds of office the work suits, not a
   client list. Pictures were generated on 2026-10-11 and checked at the size
   they ship. The people in them are not FactoryJet staff or clients. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/independent-agency-client-table.webp`,
    alt: 'A man with gray hair and glasses in a light blue shirt holds sheets of paper at a round wooden table while a woman with long braids in a mustard sweater sits opposite holding an orange pen',
    t: 'Independent agencies',
    b: 'Phones, texts and email compete with the client sitting in front of you. A voice agent answers, takes the details and books the call-back, and the note lands on the client record.',
  },
  {
    img: `${IMG}/contractor-certificate-counter.webp`,
    alt: 'A woman with a blonde ponytail in a white shirt hands an orange folder across a reception counter to a man in a tan work jacket who holds a white hard hat under his arm',
    t: 'Agencies with a commercial book',
    b: 'Contractors and landlords ask for certificates the same day. The agent drafts each one from the policy on file for an account manager to review and issue.',
  },
  {
    img: `${IMG}/underwriting-desk-paper-files.webp`,
    alt: 'A man in a charcoal sweater holds an open manila file while a silver-haired woman in a burgundy blazer points at it, beside an orange box of paper files on a white table',
    t: 'MGAs and wholesale brokers',
    b: 'Submissions arrive by email with ACORD forms, loss runs and schedules attached. The agent checks each one is complete and lists what is missing before an underwriter opens it.',
  },
  {
    img: `${IMG}/claims-visit-ceiling-stain.webp`,
    alt: 'A woman in a navy fleece jacket holding a clipboard and a man in a green plaid shirt stand in a living room, and the man points up at a brown water stain on the ceiling above an orange bucket',
    t: 'Small and regional carriers',
    b: 'Claims calls peak after a storm. A voice agent takes each first notice of loss in full and hands the adjuster one complete note to start from.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List a week of calls, messages and paperwork',
    b: 'Which calls, emails and forms come in, and how long each takes. We ask where the records live and what your management system lets outside software read and write.',
  },
  {
    n: '02',
    t: 'Check what your system already ships',
    b: 'If Applied, Vertafore, HawkSoft or EZLynx already covers the job, or one of their partners does, we tell you which one and you can stop there.',
  },
  {
    n: '03',
    t: 'Pick one job and write its script',
    b: 'One job, such as after-hours claim intake or certificate requests. The questions to ask, the hand-off list and the named person who receives each hand-off go on paper.',
  },
  {
    n: '04',
    t: 'See it on your own material',
    b: 'A first version runs on your own material before you sign anything: your call script on a test line, a past certificate request or a month of past renewals.',
  },
  {
    n: '05',
    t: 'Start the build in read-only mode',
    b: 'The agent signs in under its own account, limited to what the job requires. Reading comes first, and each kind of write is switched on separately.',
  },
  {
    n: '06',
    t: 'Shadow your team first, then keep supporting it',
    b: 'For an agreed period your team reviews every note and draft, and the script is corrected where it falls short. After go-live, its builders keep reading the logs, test it again whenever your systems or the AI model are updated, and repair faults.',
  },
];

/* ── Comparison: three ways to get AI into an insurance office ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: '01 AI inside your management system' },
  { label: '02 A ready-made insurance AI product' },
  { label: '03 An agent built around your office' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'What it is',
    values: [
      'Agents and assistants shipped inside Applied Epic, AMS360 or EZLynx',
      'A phone, renewal or document product you subscribe to, such as Sonant, Gail or Quandri',
      'An agent designed around your script and your systems, built for you',
    ],
  },
  {
    feature: 'What starts the work',
    values: [
      'An email, a text or a carrier statement arriving in that system',
      'A forwarded phone call, or a renewal date coming up in your book',
      'Whatever arrives: a call, a certificate request, a claim report or a PDF',
    ],
  },
  {
    feature: 'Who writes the script',
    values: ['The vendor writes it and you pick the settings', 'The vendor, tuned to your agency', 'Your office, on paper, ahead of the build'],
  },
  {
    feature: 'Who advises and binds',
    values: [
      'Your licensed people. Applied says humans retain ultimate control over AI-driven actions',
      'Your licensed people. Sonant lists call transfer to human agents',
      'Your licensed people. The hand-off list is written before the build',
    ],
  },
  {
    feature: 'How you pay',
    values: [
      'Inside your subscription, or as an add-on from the vendor',
      'A subscription. Gail lists its Gail Agent plan at $425 a month billed annually',
      'Two fixed prices in writing, for the build and for support, agreed after a scoping call',
    ],
  },
  {
    feature: 'Who fixes it',
    values: ['The system vendor', 'The product vendor', 'The team that built it'],
  },
  {
    feature: 'Right call when',
    values: [
      'Everything the job needs sits in that one system',
      'The job is standard phone answering or renewal outreach',
      'The job follows your own script, or crosses your phone line and two systems',
    ],
  },
];

/* ── Ready-made insurance AI products, grouped by job. Each line restates the
   vendor's own page as read on 2026-10-11. FactoryJet sells none of them.
   Feeds the visible list AND the ItemList JSON-LD. ── */
const OTHERS: ReadonlyArray<{ name: string; focus: string; says: string; source: SrcKey; more?: SrcKey }> = [
  {
    name: 'Sonant',
    focus: 'Phone answering · agencies and brokers',
    says: 'Calls itself the AI receptionist for insurance, for property and casualty agencies, brokers and distributors. Its site lists call transfer to human agents, quote intake into your AMS or rater, appointment scheduling and post-call notes. Its integrations page names AMS360, Applied Epic, EZLynx, HawkSoft, Momentum AMP and QQCatalyst.',
    source: 'sonant',
    more: 'sonantAms',
  },
  {
    name: 'Gail',
    focus: 'Voice, text, chat and email · list price shown',
    says: 'Describes conversational AI, workflow automation and AI assistants in a single platform, built for insurance, banking and lending. Its pricing page lists a free tier and a Gail Agent plan at $425 a month billed annually, or $600 on a monthly plan, with 50 hours of voice time a month.',
    source: 'gail',
    more: 'gailPricing',
  },
  {
    name: 'Liberate',
    focus: 'Claims, service and sales by voice',
    says: 'Says its voice AI answers every call and resolves FNOL, claim status and policy questions, and hands off with context when a situation needs human judgment. Its site says it connects to Guidewire, Duck Creek, Applied, Vertafore and Snapsheet, and that customers go live in 6 to 8 weeks.',
    source: 'liberate',
    more: 'liberateFnol',
  },
  {
    name: 'Strada',
    focus: 'Claims and servicing · carriers, TPAs and MGAs',
    says: 'Says its agents complete claims and servicing work for carriers, TPAs (third-party administrators) and MGAs inside the systems they already run on. Its site lists full first notice of loss intake over phone, chat or email, and certificate of insurance issuance that validates coverage and delivers the certificate to the requester.',
    source: 'strada',
  },
  {
    name: 'Indemn',
    focus: 'Intake, quoting, service and renewals',
    says: 'Says it handles repetitive intake, quoting, service and renewal work for retail agencies, carriers and MGAs. Its site says that when a case requires judgment, a relationship or a consequential decision, it routes the case to the right person with the context attached.',
    source: 'indemn',
  },
  {
    name: 'Quandri',
    focus: 'Renewals · agencies',
    says: 'Its renewals page lists policy checking, remarketing and renewal outreach. Quandri says it connects to your agency management system, reviews every renewing policy and drafts policy-specific emails so each client hears from you before renewal.',
    source: 'quandriRenewals',
  },
  {
    name: 'Bevaya',
    focus: 'Documents · underwriting, claims and policy servicing',
    says: 'Lists a library of pre-built agents for insurance documents, including submission intake, loss run processing, ACORD form extraction and policy to policy comparison. The roots.ai address redirected to bevaya.ai when we opened it, and the page footer reads Roots Automation, Inc. dba Bevaya.',
    source: 'bevaya',
  },
  {
    name: 'Sixfold',
    focus: 'Underwriting · carriers and MGAs',
    says: 'Calls itself AI for insurance underwriters. Its site says it reads documents such as loss runs and statements of values and cites every fact to its source. Its life and health section says underwriters review and own the final call.',
    source: 'sixfold',
  },
];

const othersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ready-made AI products for insurance agencies, MGAs and carriers: phone answering, renewals, documents and underwriting',
  itemListElement: OTHERS.map((o, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: o.name,
    url: SRC[o.source].url,
  })),
};

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/ai-receptionist', t: 'AI receptionist', b: 'A custom voice agent for the front desk that answers, takes details and books the call-back.' },
  { href: '/services/ai-call-center-agents', t: 'AI call center agents', b: 'Voice agents for contact centers and lines with high call volume.' },
  { href: '/services/document-intake-ai-agents', t: 'Document intake AI agents', b: 'Reading inbound PDFs, forms and email attachments, checking the fields and filing the result.' },
  { href: '/services/ai-customer-support-agents', t: 'AI customer support agents', b: 'Support by chat, email and messaging that looks up the record before it answers.' },
  { href: '/services/ai-agent-development', t: 'AI agent development', b: 'Custom agents for sales, service and operations in any industry.' },
  { href: '/services/ai-agent-monitoring', t: 'AI agent monitoring and support', b: 'How an agent is watched, re-tested and repaired once it is live.' },
];

/** Small inline source links. Same visual pattern as /services/construction-ai-agents.
 *  Renders nothing when a claim is our own and has no source.
 *  py-1 makes each link 24.5px tall, which clears the 24px tap-target check
 *  when links wrap onto stacked rows. */
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
          className="inline-flex items-center gap-1.5 py-1 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
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

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function InsuranceAiAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(othersSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    AI FOR INSURANCE &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI agents for insurance that take the call, gather the details and hand advice to a licensed person.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We design, build, implement and support AI agents for independent agencies, MGAs (managing general
                  agents) and small carriers. An agent answers the phone, takes a first notice of loss, collects quote
                  details, drafts certificate requests and sends renewal reminders. Advice, coverage answers and
                  binding, which means putting coverage in force, stay with your licensed people. Some of this needs
                  nothing built, since Applied, Vertafore and EZLynx include AI in their management systems. Where a
                  job needs your own script and your own systems, we build it and stay on after launch. Before any
                  work starts, you hold a fixed quote in writing.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_insurance_ai_agents_hero"
                    service="Insurance AI Agents"
                    submitLabel="Scope my agent"
                  />
                </div>

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
                  <span>Working demo on your data, then the contract</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>31 source pages read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <img
                    src={`${IMG}/hero-agency-headset-notepad.webp`}
                    alt="A woman with dark curly hair wearing a black telephone headset and a navy cardigan writes on a notepad at a wooden desk, beside an orange folder, a stack of manila folders and a white mug"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5 sm:p-6">
                    <div className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                      What arrives, what the agent does, who decides
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
                AI for insurance, in an agency or MGA office, is software that does one routine job and stops where
                judgment starts. It answers the phone, takes a first notice of loss, collects quote details, drafts a
                certificate request or sends a renewal reminder. Then it hands advice and binding decisions to a
                licensed person.
              </p>
              <p className="mt-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                Two-thirds of independent agencies plan to use more AI in the next 12 months, and 8% say it is already
                part of daily work, according to the Big &ldquo;I&rdquo; Agents Council for Technology 2026 Tech
                Trends Report. Your management system may cover part of the job. Our count on Vertafore&rsquo;s site
                on {CHECKED_ON} found eight Velocity AI agents, five of them marked Live. None of the eight
                descriptions mentions answering a phone call.
              </p>
              <SourceLinks ids={['bigiSurvey', 'vertaforeAgentic']} />
            </div>
          </div>
        </section>

        {/* 3. WHAT YOUR MANAGEMENT SYSTEM ALREADY SHIPS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Already in your system</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What four agency management systems already ship for AI.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              An agency management system, or AMS, holds an agency&rsquo;s clients, policies and accounting. Read
              this section before you spend anything. The cards repeat what each vendor&rsquo;s own pages said on{' '}
              {CHECKED_ON}. Where one of them covers your job, switching it on beats building. For what a build
              involves, see{' '}
              <Link
                href="/services/ai-agent-development"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                AI agent development
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {SHIPS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    {c.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              All four publish a route for outside software, usually an API, the technical name for a controlled
              doorway between two programs. Applied says APIs and granular security controls support
              integrations with third-party applications. Vertafore describes an open platform and APIs behind its
              Orange Partner Program. HawkSoft points to its Partner API connections, and EZLynx calls its technology
              partner program EZLynx Connect. The vendor grants the access, so a custom build starts by asking what
              your subscription lets an integration read and write.
            </p>
            <SourceLinks ids={['appliedEpic', 'vertaforeOrange', 'hawksoftAms', 'ezlynxPartners']} />

            <div className="mt-8 rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 sm:p-8">
              <div className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                What we found on {CHECKED_ON}
              </div>
              <h3 className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">
                Four counts from that day.
              </h3>
              <ul className="mt-4 grid max-w-3xl gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Ten US Google searches on AI and insurance, run that day, each came back with an AI Overview. The
                  Big &ldquo;I&rdquo; ranked first on two of them, and Applied&rsquo;s site was on the first page for
                  five.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  On five of the ten, Google&rsquo;s question box asked whether AI will take over insurance
                  agents&rsquo; jobs. The wording differed each time.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  Vertafore&rsquo;s Agentic Agency page listed eight Velocity AI agents, five marked Live and three
                  Early Adopter. None of the eight descriptions mentions a phone call or a first notice of loss.
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                  HawkSoft&rsquo;s partner page showed 26 partners labeled Two-way API Integrated. Five of the 26
                  sell voice AI: Cara, Gail, Liberate, PolicyLift and Sonant.
                </li>
              </ul>
              <SourceLinks ids={['vertaforeAgentic', 'hawksoftPartners']} />
            </div>
          </div>
        </section>

        {/* 4. FIVE QUESTIONS THAT DECIDE THE ROUTE */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Switch on, subscribe or build</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Five questions that settle whether to switch on, subscribe or build.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Take them in order. For many offices the search stops at question one or two, with a setting to
                  switch on or a product to trial.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  Our work starts at question three, with a job that needs your own script, your own records or more
                  than one system.
                </p>
                <SourceLinks ids={['vertaforeAms360', 'ezlynxAi', 'sonantAms', 'hawksoftPartners']} />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {DECIDE_STEPS.map((p) => (
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

        {/* 5. COMPARISON: three routes */}
        <ComparisonTable
          eyebrow="Three routes"
          headline="Switch on what you own, subscribe to a product, or have an agent built."
          lead="Each route suits a different office. During scoping you hear which route we would pick if the office were ours, with the reasons."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Read on each vendor's own site on ${CHECKED_ON}. Prices are list prices and can change.`}
          scrollRegionLabel="Comparison of three ways an insurance office can add AI"
        />

        {/* 6. SIX JOBS */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Six jobs</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Six jobs in an insurance office where an agent takes the first pass.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              On each card you will find the agent&rsquo;s part, the part your system or a subscription product
              already handles, and the point where a build makes sense. Every job ends with a hand-off to a licensed
              person. For the phone jobs, see our{' '}
              <Link href="/services/ai-receptionist" className="font-semibold text-fj-ink underline underline-offset-4">
                AI receptionist
              </Link>{' '}
              page. For the paperwork, see{' '}
              <Link
                href="/services/document-intake-ai-agents"
                className="font-semibold text-fj-ink underline underline-offset-4"
              >
                document intake AI agents
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {JOBS.map((s) => (
                <div key={s.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${s.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
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
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Check first.</span> {s.note}
                  </p>
                  <SourceLinks ids={s.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These are the jobs behind the searches. US search data from {CHECKED_ON} puts &ldquo;ai for
              insurance&rdquo; at about 1,900 searches a month. Three searches that name agents (&ldquo;ai insurance
              agent&rdquo;, &ldquo;ai for insurance agents&rdquo; and &ldquo;ai agents for insurance&rdquo;) added
              about 420 between them.
            </p>
            <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              The vendor details in the notes date from {CHECKED_ON}.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline="Send us one job from your service desk. We will tell you the shortest route."
          sub="Claim calls after hours, certificate requests, renewal reminders or quote intake. Our reply sets out what your management system or a subscription product already handles, the part worth building, and a fixed written quote for that part."
          label="Scope my agent"
        />

        {/* 7. WHO KEEPS CONTROL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who keeps control</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  A written hand-off list, read-only access and a named owner keep an agent in its lane.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your management system sees an agent as one more user account. Its login sets the limit of what it
                  can touch. Applied says
                  humans retain ultimate control over any AI-driven action, and Vertafore describes
                  human-in-the-loop controls in its own AI.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  There are eight controls here. Three come with your software, three we set up, and two stay with
                  your licensed people.
                </p>
                <SourceLinks ids={['appliedEpic', 'appliedAi', 'ezlynxAi', 'vertaforeAgentic', 'hawksoftCerts']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {GUARDS.map((k) => (
                  <li
                    key={k.rule}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-fj-cream px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      k.keeper === 'build' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{k.rule}</div>
                      <div
                        className={`mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider ${
                          k.keeper === 'build' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {KEEPER_LABEL[k.keeper]}
                      </div>
                    </div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{k.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. WHERE IT GOES WRONG */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Where it goes wrong</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places an insurance AI project goes wrong.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Five rest on the linked pages from vendors, the Big &ldquo;I&rdquo;, ACORD and the FCC. Three are advice
              from us and carry no link.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BREAKS.map((l) => (
                <li key={l.t} className="rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-white px-5 py-4">
                  <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
                  <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
                  <SourceLinks ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. WHAT FACTORYJET BRINGS. No client is named on this page. */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Who you would work with</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              What FactoryJet brings to the build.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              FactoryJet has been in business since 2014, and more than 500 businesses have used its services.
              Published client work is in our{' '}
              <Link href="/case-studies" className="font-semibold text-fj-ink underline underline-offset-4">
                case studies
              </Link>
              .
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {EXPERIENCE.map((w) => (
                <li key={w.t} className={`flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${w.span}`}>
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{w.t}</h3>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    {w.kind}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{w.what}</p>
                  <Link
                    href={w.href}
                    className="mt-4 inline-flex items-center gap-1.5 py-1 font-fj-body text-sm font-semibold text-[#B23E13] hover:underline"
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

        {/* 10. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Four kinds of insurance office this suits.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  ACORD says millions of certificates of insurance are issued every year, primarily in the United
                  States, and that most are issued at policy renewal. That one document shows how the whole office
                  works. A request arrives, someone looks up the policy, someone types the answer.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An MGA, or managing general agent, underwrites and manages policies on behalf of carriers, the
                  trade&rsquo;s word for insurance companies. MGAs and wholesale brokers have systems of their own.
                  Vertafore sells one called AIM, which it says brings underwriting, policy administration,
                  accounting, claims and reporting together and integrates through an API library.
                </p>
                <SourceLinks ids={['acordCoi', 'vertaforeAim']} />
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  For a claims or service line with high call volume, see{' '}
                  <Link
                    href="/services/ai-call-center-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI call center agents
                  </Link>
                  .
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                    <img
                      src={ind.img}
                      alt={ind.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{ind.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{ind.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 11. PROCESS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Six steps from a week of calls to a live agent.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  We start with what your management system already does. Then one job is chosen, shown on your own
                  material and built with read-only access. Once it is live,{' '}
                  <Link
                    href="/services/ai-agent-monitoring"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI agent monitoring and support
                  </Link>{' '}
                  takes over, with a re-test after every change to your software or the AI models. For chat and email
                  on the same desk, see{' '}
                  <Link
                    href="/services/ai-customer-support-agents"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    AI customer support agents
                  </Link>
                  .
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A single-job pilot typically takes two to four weeks. Production work, with permissions, logging,
                  hand-off rules and monitoring in place, typically takes six to twelve weeks.
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

        {/* 12. READY-MADE PRODUCTS */}
        <section className="border-t border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Products you can subscribe to</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Eight ready-made AI products for insurance, by job.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet wrote this list and sells none of these products. Every entry was read on the
                  vendor&rsquo;s own site on {CHECKED_ON}. Three answer phones, one handles renewals, two read
                  documents and two cover several jobs. Figures and claims in each line are the vendor&rsquo;s own.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The order follows the job each product does and implies no ranking. An agent we build can sit
                  beside one of them. It covers the script, the channel or the system the product leaves open.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {OTHERS.map((o, i) => (
                  <li key={o.name} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{o.name}</h3>
                      <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                        {o.focus}
                      </div>
                      <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-ink">{o.says}</p>
                      <SourceLinks ids={o.more ? [o.source, o.more] : [o.source]} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 13. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Related pages</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Other AI agent work that sits beside this.
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

        {/* 14. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, read on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Anything said here about another company, whether a product name, a feature, a count or a price,
                  comes from that company&rsquo;s own pages as they stood that day. The agent counts are ours, made
                  on the linked pages. These pages change. Follow the link and read the current version before you
                  rely on a detail.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Search volumes are monthly US figures from DataForSEO for that day. The ten Google result pages
                  came through the same service, set to US and desktop. The survey figures are from the Big
                  &ldquo;I&rdquo; news release of 19 February 2026 on its Agents Council for Technology report. The
                  FCC release was read in the FCC&rsquo;s own text copy of the same document.
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

        {/* 15. FAQ */}
        <FAQ
          eyebrow="AI for insurance FAQ"
          headline="Straight answers on AI for insurance."
          lead={`Questions from agency owners, operations leads and MGA managers who are weighing up an agent. Where an answer cites a vendor, it reflects that vendor's own pages on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 16. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="AI for insurance"
          headline="Keep advice with your licensed people. Give the routine calls and paperwork to an agent."
          sub="Name the one job that eats most of your service desk's day. We look at what your management system includes, build a first version you can test on your own material, and keep supporting it once it is live."
          primaryCta={{ label: 'Scope my agent', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="A working demo on your data comes before the contract. Fixed quote in writing. You own what we build."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
