import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-agents-for-healthcare: the HEALTHCARE VERTICAL application of
   our AI agent practice. ADMINISTRATIVE work only.

   RISK POSTURE (read before editing a single word):
     FactoryJet is a software services company. We are not a medical provider.
     Nothing on this page may read as clinical advice, diagnosis, triage by
     symptom severity, or a claim that an agent makes a medical decision. Every
     use case named here is administrative: scheduling, reminders, intake,
     forms, eligibility, referral and prior authorization paperwork, billing
     questions, and message routing that hands off rather than answers. The
     clinical boundary is stated in the hero, in the answer-first block, in its
     own section and in the FAQ. Do not soften it, do not add a clinical
     capability, and do not let a future edit turn "routes" into "triages".

     HIPAA here is substance, not decoration: Business Associate Agreements,
     minimum necessary, unique user identity, audit logging, encryption in
     transit and at rest, and the six year documentation retention rule. Every
     legal statement is sourced to eCFR and was fetch-verified on 2026-08-12.

     NO invented outcome numbers. There is no "cuts no-shows by X percent" on
     this page and there must never be one.

   Intent owned by THIS page:
     ai agents for healthcare (170/mo, KD 28) · ai agents in healthcare · ai
     agent for healthcare · ai for medical practices · ai patient scheduling ·
     ai medical intake · hipaa compliant ai agent.

   Does NOT own, and must not cannibalise:
     /services/ai-agent-development                      general agent building
     /services/ai-agent-development/ai-scheduling-agent  generic booking
     /services/ai-agent-development/ai-voice-agent       generic voice
     /services/ai-agent-development/ai-customer-support  generic support queue
     /services/healthcare-seo                            search visibility, a
                                                         different problem
   The split is stated in plain words in the answer-first block so a reader and
   a model both see it, and each page is linked rather than restated.

   Category note (2026-08-12 research): Google renders a LIVE AI Overview on
   this query. Cited pages measured SHORTER than ranking pages, so this page is
   deliberately kept inside the depth target and every section leads with the
   answer rather than warming up to it.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no TestimonialsSection (its US_STATS hardcodes a dollar figure),
   no shared files touched, alternates declared inline.

   Schema: WebPage + speakable, Service, ItemList (build steps), ItemList
   (vendor set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. All six reach a
   script tag in the component below. Verify by eye before editing.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/ai-agents-for-healthcare';
const HERO_IMAGE = 'https://factoryjet.com/images/us/ai-agents-for-healthcare/hero.webp';
const REVIEWED_DATE = 'August 12, 2026';
const PAGE_MODIFIED = '2026-08-12';

const X12_URL =
  'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-162/subpart-L/section-162.1202';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Agents for Healthcare: Scheduling & Intake | FactoryJet',
  description:
    'Administrative AI agents for US medical practices: patient scheduling, intake, and insurance eligibility under a signed BAA with audit logging. Free demo.',
  keywords: [
    'ai agents for healthcare',
    'ai agents in healthcare',
    'ai agent for healthcare',
    'healthcare ai agents',
    'ai agents for medical practices',
    'ai agent development for healthcare',
    'hipaa compliant ai agent',
    'ai patient scheduling',
    'ai medical intake',
    'ai insurance eligibility check',
    'ai front desk for clinics',
    'healthcare administrative automation',
    'ai agents for hospitals',
    'ai receptionist for medical practice',
    'ai for prior authorization paperwork',
    'ai patient communication',
    'ai referral coordination',
    'how are ai agents used in healthcare',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents for Healthcare: Scheduling, Intake and Eligibility | FactoryJet',
    description:
      'The healthcare build of our AI agent practice: administrative work only. Scheduling, intake, eligibility, referrals, billing questions and routing, under a signed BAA with a full audit trail and a licensed human on anything clinical.',
    url: PAGE_URL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1264,
        height: 848,
        alt: 'A clinic receptionist greets a visitor at a bright, uncluttered front desk',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Healthcare | FactoryJet',
    description:
      'Administrative AI agents for medical practices: scheduling, intake, eligibility, referrals and billing questions. Under a BAA, fully logged, no clinical decisions.',
    images: [HERO_IMAGE],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
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
   The six administrative workloads. Each tile is a self-contained factual
   statement so it stands up when a model quotes one without the rest of the
   page. NONE of these is clinical. Keep it that way.
───────────────────────────────────────────────────────────────────────────── */

type Workload = { tag: string; title: string; body: string; tint: string; accent: string };

const WORKLOADS: ReadonlyArray<Workload> = [
  {
    tag: '01',
    title: 'Books, reschedules and backfills',
    body:
      'Takes a request by phone, text or web, checks availability against your scheduling rules, holds the slot, sends the confirmation and reminder, handles the cancellation, and works the waitlist when a room would sit empty.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '02',
    title: 'Finishes intake before the visit',
    body:
      'Sends the forms, chases the ones nobody filled in, collects insurance and identity details through your own secure form, and flags what is missing on the morning of the visit.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '03',
    title: 'Checks eligibility and benefits',
    body:
      'Runs the coverage check through the standard payer route instead of a person on hold, records the answer against the appointment, and raises a human when the response is ambiguous.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '04',
    title: 'Moves referral and authorization paperwork',
    body:
      'Tracks which referrals were sent, acknowledged or are missing a document, and assembles and chases prior authorization submissions. The clinical justification is written by staff, never by the agent.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Answers account and billing questions',
    body:
      'Where a statement came from, what the plan said, how to arrange payment, how to request an itemised copy. These calls fill a front desk and need no clinical knowledge.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '06',
    title: 'Routes inbound messages, and only routes them',
    body:
      'Portal messages, voicemails and enquiries sorted by what the office does next: booking, billing, records, refill, or clinical. Clinical goes to your team in the patient’s own words.',
    tint: LAV_SOFT,
    accent: LAV,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Step = { n: string; title: string; body: string };

const STEPS: ReadonlyArray<Step> = [
  {
    n: '01',
    title: 'Execute a HIPAA Business Associate Agreement (BAA)',
    body:
      'A signed BAA is mandatory before moving any protected health information (PHI). We enforce BAAs across all cloud infrastructure and model providers (OpenAI, Anthropic, Google Cloud) with zero training data retention.',
  },
  {
    n: '02',
    title: 'Pick one queue, not the whole front office',
    body:
      'Appointment requests and reminders is the usual first: high volume, easy to measure, and where a practice loses most goodwill. Handing over the whole desk on day one fails in public.',
  },
  {
    n: '03',
    title: 'Write the clinical line down before you write a prompt',
    body:
      'One page, agreed with your clinical lead: no symptom questions, no advice, no urgency judgement, no medication guidance, no reading results. Each becomes a hard stop in code.',
  },
  {
    n: '04',
    title: 'Connect EHR and practice management via FHIR / HL7 APIs',
    body:
      'Direct bidirectional integration with major EHR platforms: Epic Systems, Cerner (Oracle Health), athenahealth, eClinicalWorks, NextGen Healthcare, Kareo (Tebra), Dentrix, and Allscripts. The agent interfaces via standard HL7 and FHIR REST endpoints using minimum-necessary data scopes.',
  },
  {
    n: '05',
    title: 'HIPAA-compliant escalation and emergency safeguards',
    body:
      'Strict protocol handoffs: clinical triage questions, acute distress, or 911 emergencies trigger instant voice transfer via Twilio SIP trunking to on-call clinical staff. Digital consent paperwork routes through DocuSign with audit trails.',
  },
  {
    n: '06',
    title: 'Keep patient data out of the model’s memory',
    body:
      'A deployment where prompts and responses are not retained for training, transcripts in systems you control, encryption in transit and at rest, and the configuration written down. You will be asked to prove it.',
  },
  {
    n: '07',
    title: 'Run it in shadow mode with staff approving',
    body:
      'At first the agent drafts and your team approves with one click. You watch the disagreement rate on real traffic before it sends anything alone.',
  },
  {
    n: '08',
    title: 'Log everything, then measure your own numbers',
    body:
      'Every trigger, tool call, message and record change, kept to a written schedule. Then track calls abandoned, time to first response and handoff rate in your own data. Not a vendor benchmark, ours included.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: how practices cover the front office today
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; ai: string; answering: string; bpo: string; ivr: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Available at 2am and on holidays',
    ai: 'Yes, at the same standard as midday',
    answering: 'Yes, but it takes a message',
    bpo: 'Only in the contracted hours',
    ivr: 'Yes, with menu options only',
  },
  {
    label: 'Books against live availability',
    ai: 'Yes, with your scheduling rules applied',
    answering: 'Rarely. Usually a callback request',
    bpo: 'Yes, if given system access',
    ivr: 'Only the simplest slot types',
  },
  {
    label: 'Checks insurance eligibility',
    ai: 'Yes, through the standard payer transaction',
    answering: 'No',
    bpo: 'Yes, manually, at human speed',
    ivr: 'No',
  },
  {
    label: 'Handles PHI under a signed BAA',
    ai: 'Required before anything is connected',
    answering: 'Should be. Ask to see it',
    bpo: 'Should be. Ask about subcontractors',
    ivr: 'Usually, through the phone vendor',
  },
  {
    label: 'Handles a clinical question',
    ai: 'Hands it over untouched. Never answers',
    answering: 'Takes a message for the nurse',
    bpo: 'Escalates per script',
    ivr: 'Offers a menu and hopes',
  },
  {
    label: 'Where it fails',
    ai: 'Bad data, no escalation rule, nobody reading logs',
    answering: 'Patients wait for a callback that slips',
    bpo: 'Turnover and thin knowledge of your practice',
    ivr: 'People press zero, or hang up',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   The vendor set visible on this query (also powers the second ItemList).
   Descriptions are how each one positions itself on the live United States
   results and AI Overview for this query, observed 2026-08-12. We have not
   audited any of these products. Never disparage.
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'hippocraticai.com',
    note: 'Ranks first, and leads with safety',
    detail:
      'Presents itself as a safety-focused generative AI healthcare agent company, and says so in its own page title. If you want a packaged product rather than a build against your systems, it is the first name you meet.',
  },
  {
    domain: 'notablehealth.com',
    note: 'A platform built for health systems',
    detail:
      'Positions itself as an AI platform purpose-built for healthcare, at health system scale. Platforms suit a broad problem and a real change-management budget, and suit one broken queue much less well.',
  },
  {
    domain: 'artera.io and cognigy.com',
    note: 'Communication platforms the AI Overview quotes',
    detail:
      'Both appear among the sources Google’s AI Overview draws on here, in patient communication and conversational AI. If your gap is messaging patients consistently rather than acting inside your scheduling system, a platform may cover it with no build.',
  },
  {
    domain: 'nature.com and pmc.ncbi.nlm.nih.gov',
    note: 'The literature, not a vendor',
    detail:
      'Peer-reviewed work on AI agents in healthcare ranks on page one and is quoted in the AI Overview. It is the only part of this results page with nothing to sell. Read it before any vendor, us included.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   External citations. Every URL was fetched and the claim confirmed on the page
   on 2026-08-12 (HTTP 200 each). hhs.gov itself returns 403 to automated
   requests, so every legal claim is sourced to the eCFR text, which is the
   regulation itself. Two further verified links sit inline in the body: the
   ASC X12N 270/271 standard (45 CFR 162.1202) and the CMS Interoperability and
   Prior Authorization final rule. Do not edit a claim without re-fetching.
───────────────────────────────────────────────────────────────────────────── */

type Citation = { src: string; title: string; body: string; href: string };

const CITATIONS: ReadonlyArray<Citation> = [
  {
    src: '45 CFR 164.504(e), eCFR',
    title: 'Why the BAA comes before the build',
    body:
      'The rule requires a contract establishing the permitted and required uses and disclosures of protected health information, and says a covered entity is not in compliance if it knew of a pattern of material breach and did not cure it or end the arrangement.',
    href: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.504',
  },
  {
    src: '45 CFR 164.312, eCFR',
    title: 'What the Security Rule actually requires',
    body:
      'Technical safeguards include access control with unique user identification, automatic logoff, encryption and decryption, audit controls that record and examine system activity, integrity checks, authentication and transmission security. Encryption is addressable, not required. We treat it as mandatory.',
    href: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.312',
  },
  {
    src: '45 CFR 164.316(b)(2)(i), eCFR',
    title: 'How long the paperwork has to live',
    body:
      'Documentation required by the Security Rule must be kept six years from the date it was created or last in effect, whichever is later. That is why a retention rule for agent logs belongs in the design.',
    href: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.316',
  },
];

const CMS_URL =
  'https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f';

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 23 items across 6 categories, grounded in the live United States
   People-Also-Ask set pulled 2026-08-12 for "ai agents for healthcare", "how is
   ai used in healthcare", "ai in medical practice" and "is ai safe in
   healthcare". One PAA question asked about a product price; it is answered
   qualitatively, because this site carries no currency values. Clinical
   questions are answered by stating the boundary, never by giving guidance.
   The FAQPage JSON-LD below is generated from THIS array. Never hand-write a
   second copy.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'uses', label: 'How it is used' },
  { key: 'limits', label: 'The clinical line' },
  { key: 'hipaa', label: 'HIPAA & data' },
  { key: 'systems', label: 'Systems & staff' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ─────────────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is an AI agent for healthcare?',
    answer:
      'An AI agent for healthcare is software that handles administrative work for a practice or health system: scheduling and reminders, patient intake and forms, insurance eligibility checks, referral coordination, billing questions and routing messages to the right team. It does not diagnose, treat or advise on care, and a licensed clinician stays in the loop on anything clinical.',
  },
  {
    category: 'basics',
    question: 'Which AI agent or platform is best for healthcare?',
    answer:
      'There is no single best one. The category covers patient communication, scheduling, revenue cycle work, clinical documentation and research tools. Pick by the queue costing you most, then ask each vendor what its agent is forbidden to do.',
  },
  {
    category: 'basics',
    question: 'How is this different from your other services?',
    answer:
      'AI agent development is the parent service and covers any industry. This page is the healthcare application: patient data, BAAs, EHR integration, payer transactions and a clinical boundary. Healthcare SEO is separate, and is about being found rather than what happens next.',
  },

  /* ── How it is used ─────────────────────────────────────────────────── */
  {
    category: 'uses',
    question: 'How are AI agents used in healthcare?',
    answer:
      'Mostly in the administrative layer: scheduling and rescheduling, reminders and waitlist backfill, intake and forms, insurance eligibility checks, referral and prior authorization follow-up, billing questions, records requests, and routing inbound messages.',
  },
  {
    category: 'uses',
    question: 'What are some examples of how AI is being used in healthcare?',
    answer:
      'An after-hours agent that books instead of taking a message. An intake agent that gets forms finished before arrival. An eligibility agent that confirms coverage before the visit. A router that separates billing, records and clinical.',
  },

  /* ── The clinical line ──────────────────────────────────────────────── */
  {
    category: 'limits',
    question: 'Does the AI agent make any medical decisions?',
    answer:
      'No. Nothing we build diagnoses, triages by symptom severity, interprets a result, recommends a treatment or changes a medication. Those are decisions for a licensed clinician. Anything clinical goes to your team in the patient’s own words.',
  },
  {
    category: 'limits',
    question: 'What happens if a patient describes symptoms to the agent?',
    answer:
      'It stops. The message goes to your clinical team intact and the patient is told a person will respond. The agent does not assess how urgent it sounds, because urgency judgement is clinical. Emergencies follow your escalation path immediately.',
  },
  {
    category: 'limits',
    question: 'What are the risks of using AI in healthcare?',
    answer:
      'Four that matter for administrative agents: a confidently wrong answer, patient data going somewhere it should not, a system that quietly drifts from the process staff think it follows, and over-reliance where nobody checks the output.',
  },
  {
    category: 'limits',
    question: 'Who is responsible if the agent gets something wrong?',
    answer:
      'Your organisation is accountable for what its systems do, exactly as for a script or a phone tree. That is why the design points are hard limits, human approval on anything sensitive, and a complete log.',
  },
  {
    category: 'limits',
    question: 'Will AI replace primary care doctors?',
    answer:
      'No, and nothing here is built on that idea. Primary care is examination, judgement, continuity and accountability. What is being taken over is the administrative middle: the scheduling, chasing and paperwork around care.',
  },

  /* ── HIPAA & data ───────────────────────────────────────────────────── */
  {
    category: 'hipaa',
    question: 'Is ChatGPT for healthcare HIPAA compliant?',
    answer:
      'No product is HIPAA compliant on its own. Compliance is a property of how a covered entity contracts, configures and uses a service. The test is whether the vendor will sign a Business Associate Agreement for the exact product and tier you plan to use, in writing, before any patient data moves.',
  },
  {
    category: 'hipaa',
    question: 'Will you sign a BAA?',
    answer:
      'Yes, before we connect to anything holding patient data. The regulation requires the contract to establish permitted and required uses and disclosures, and it must run down to subcontractors including the model provider. Vagueness there is your answer.',
  },
  {
    category: 'hipaa',
    question: 'Is patient data used to train the AI model?',
    answer:
      'Not in anything we build. We use deployments where prompts and responses are not retained for training, keep transcripts inside systems you control, and put it in the agreement. Ask for the setting, not the sentiment.',
  },
  {
    category: 'hipaa',
    question: 'How is the data protected, and how long do you keep it?',
    answer:
      'Encryption in transit and at rest, unique identity for every human and service, least-privilege access scoped to the queue, and full audit logging. Retention runs to a written schedule, and Security Rule documentation must be kept six years.',
  },
  {
    category: 'hipaa',
    question: 'Are you HIPAA certified?',
    answer:
      'Nobody is, in the sense people mean. There is no federal HIPAA certification programme, so a badge is a private audit, not a government seal. Ask what was audited and by whom, then ask about the BAA and the audit log.',
  },

  /* ── Systems & staff ────────────────────────────────────────────────── */
  {
    category: 'systems',
    question: 'Can you connect to our EHR or practice management system?',
    answer:
      'Where a documented API or standards-based interface exists, yes. Many systems expose FHIR endpoints and most large vendors run a partner programme whose approval, not the engineering, sets the timeline.',
  },
  {
    category: 'systems',
    question: 'Can an AI agent check insurance eligibility?',
    answer:
      'Yes. HIPAA adopts the ASC X12N 270/271 eligibility benefit inquiry and response as the named standard transaction, so the agent asks the payer in the format it already expects and records the answer against the appointment. Anything ambiguous goes to a person.',
  },
  {
    category: 'systems',
    question: 'Can it handle prior authorization?',
    answer:
      'It does the administrative half: assembling the submission, tracking status, chasing missing documents and flagging a stall. The clinical justification is written by clinical staff. CMS has set deadlines for payers to expose prior authorization through APIs.',
  },
  {
    category: 'systems',
    question: 'Does this replace our front desk staff?',
    answer:
      'It changes what they do rather than removing them. The agent absorbs after-hours volume, repeat questions and hold time. Your team keeps the conversations that need a person: the upset caller, the complicated insurance case.',
  },

  /* ── Working with us ────────────────────────────────────────────────── */
  {
    category: 'working',
    question: 'How to build AI agents for healthcare?',
    answer:
      'Sign the BAA, pick one queue, write down the clinical boundary, connect the practice system and scope access to the minimum, define the escalation path including emergencies, keep patient data out of model training, run in shadow mode, then log and measure.',
  },
  {
    category: 'working',
    question: 'How long does it take to build?',
    answer:
      'A single queue connected to a scheduling system is usually a matter of weeks, then a few more in shadow mode before it acts alone. Vendor API approval and your compliance review stretch the timeline.',
  },
  {
    category: 'working',
    question: 'What does an AI agent for a medical practice cost?',
    answer:
      'We do not put figures on a page, because a number written without seeing your setup is aimed at an average rather than at you. Scope depends on how many queues, which systems, whether they have usable APIs, and your compliance review.',
  },
  {
    category: 'working',
    question: 'Do we own what you build?',
    answer:
      'Yes. The repository, connectors, prompts, evaluation sets, logging and cloud accounts are yours. There is no proprietary runtime you lose if you stop working with us.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const below is rendered in the component. Do not add one here
   without adding its script tag.
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'AI Agents for Healthcare: Scheduling, Intake and Eligibility',
  description:
    'Administrative AI agents for US medical practices and health systems, covering scheduling and reminders, patient intake, insurance eligibility, referral and prior authorization paperwork, billing questions and message routing, built under a signed Business Associate Agreement with full audit logging and no clinical decision making.',
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'AI agents for healthcare' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: HERO_IMAGE,
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-an-ai-agent-for-healthcare'],
  },
  lastReviewed: PAGE_MODIFIED,
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents for Healthcare',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'AI Agents for Healthcare / Healthcare Administrative Automation / AI Patient Scheduling / AI Patient Intake / Insurance Eligibility Automation / Healthcare Message Routing',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US medical practices, clinics, dental and specialty groups, and health systems',
  },
  description:
    'Custom administrative AI agents for US healthcare organisations covering appointment scheduling and reminders, patient intake and forms, insurance eligibility and benefits checks, referral and prior authorization paperwork, billing and account questions, and inbound message routing. Built under a signed Business Associate Agreement with least-privilege access, encryption in transit and at rest, and complete audit logging. The agents perform no diagnosis, no triage by symptom severity and no clinical advice, and a licensed clinician remains in the loop on anything clinical.',
  url: PAGE_URL,
  isRelatedTo: {
    '@type': 'Service',
    name: 'AI Agent Development',
    url: 'https://factoryjet.com/services/ai-agent-development',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare AI agent build',
    itemListElement: STEPS.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'How to put an AI agent into a medical practice, in eight steps',
  description:
    'The eight steps of a healthcare administrative AI agent build, in the order they happen, from signing the Business Associate Agreement through writing down the clinical boundary to measuring your own operational numbers.',
  numberOfItems: STEPS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: STEPS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites and products visible on US searches for AI agents for healthcare',
  description:
    'Products, platforms and references appearing on the live United States results and Google AI Overview for AI agents for healthcare, observed on 12 August 2026, described by how each one positions itself.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.detail,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Agents for Healthcare', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AiAgentsForHealthcarePage() {
  return (
    <>
      <script
        id="hcag-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="hcag-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="hcag-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="hcag-vendors-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="hcag-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hcag-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">AI agents for healthcare &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                The front desk work, handled. <span style={{ color: ORANGE }}>The clinical work, untouched.</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Administrative AI agents for US practices and health systems: scheduling, intake, insurance
                eligibility, referral chasing, billing questions and message routing. Under a signed BAA,
                fully logged, with a hard stop on anything clinical.{' '}
                <b className="font-bold text-fj-ink">No diagnosis. No advice. No exceptions.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_ai_agents_for_healthcare_hero"
                submitLabel="Get a healthcare agent scope"
              />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the founder
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/services/ai-agent-development"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Not in healthcare? Start at the parent service
                </Link>
              </div>
            </div>

            {/* Right: hero image + the first-two-minutes sequence. No metrics, no PHI. */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/ai-agents-for-healthcare/hero.webp"
                  alt="A clinic receptionist in scrubs greets a visitor at a bright, uncluttered front desk, with a wall screen showing a scheduling panel"
                  width={1264}
                  height={848}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>

              <div
                className="relative z-10 mx-4 -mt-10 rounded-2xl border bg-white p-5 sm:mx-6 sm:p-6"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.10)' }}
              >
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  One appointment request, first two minutes
                </span>
                <ol className="mt-3 space-y-2.5">
                  {[
                    { k: 'Request arrives.', v: 'Phone, text or web form, at any hour.' },
                    { k: 'Identity confirmed.', v: 'Against your own verification rules.' },
                    { k: 'Availability checked.', v: 'Only slots your rules allow.' },
                    { k: 'Coverage checked.', v: 'Standard eligibility inquiry to the payer.' },
                    { k: 'Booked and logged.', v: 'Written to the practice system.' },
                    { k: 'Clinical question?', v: 'Handed over, in the patient’s words.' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">{row.v}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  A worked example, not a client result. No client names, no invented numbers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST BLUF ────────────────────────────────────── */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="what-is-an-ai-agent-for-healthcare"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is an AI agent for healthcare?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  An AI agent for healthcare is software that handles administrative work for a clinic or health system.
                </b>{' '}
                It manages patient scheduling, visit reminders, intake forms, insurance eligibility checks, and billing queries.
                It routes patient messages to front-desk staff. It never diagnoses, treats, or gives medical care advice.
                A licensed clinician handles all clinical decisions.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                The difference from a basic chatbot is action. A chatbot only answers basic office hours questions.
                An AI agent checks live calendar availability. It holds appointments, verifies insurance coverage, and writes records into your EHR.
                It interacts directly with patient data, which is why strict privacy guardrails belong in code.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                This page is the healthcare build.{' '}
                <Link
                  href="/services/ai-agent-development"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  AI agent development
                </Link>{' '}
                is the parent service, covering any industry including the generic{' '}
                <Link
                  href="/services/ai-agent-development/ai-scheduling-agent"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  scheduling
                </Link>
                ,{' '}
                <Link
                  href="/services/ai-agent-development/ai-voice-agent"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  voice
                </Link>{' '}
                and{' '}
                <Link
                  href="/services/ai-agent-development/ai-customer-support"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  support
                </Link>{' '}
                patterns. Here and not there: patient data, BAAs, EHR integration, payer transactions and a
                clinical boundary. If patients cannot find you at all, that is{' '}
                <Link
                  href="/services/healthcare-seo"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  healthcare SEO
                </Link>
                , a different job entirely.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. CAPABILITY ROW (proof without invented numbers) ──────── */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  t: 'BAA before anything connects.',
                  s: 'Signed first, covering subcontractors and the model provider.',
                },
                {
                  t: 'Administrative scope only.',
                  s: 'No diagnosis, no symptom triage, no treatment guidance.',
                },
                {
                  t: 'Every action logged.',
                  s: 'Trigger, tool calls, what was sent, what changed, who approved.',
                },
                {
                  t: 'You own the build.',
                  s: 'Repository, connectors, prompts, evaluations, cloud accounts.',
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.02rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {item.t}
                  </h3>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-[1.55] text-fj-neutral-700">{item.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. THE CLINICAL LINE (image + the boundary) ──────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/ai-agents-for-healthcare/front-desk.webp"
                alt="A practice administrator wearing a phone headset works through paper files at a bright front-office desk while a colleague walks past carrying folders"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                The line, before anything else
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Our agents do the paperwork. <span style={{ color: ORANGE }}>Your clinicians do the medicine.</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                FactoryJet is a software company. We are not a medical provider, we build no diagnostic tools,
                and nothing we ship makes a clinical decision. The moment an agent judges how serious a symptom
                sounds, you have built something needing evidence and clearance we do not have. So the boundary
                is agreed with your clinical lead on paper, then built as a hard stop: a blocked request is not
                discouraged, it is impossible, because no tool exists that could answer it.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="fj-display text-[1.05rem] font-bold text-fj-ink">What it does</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Books, reschedules, reminds, backfills.',
                      'Completes intake forms before the visit.',
                      'Confirms eligibility with the payer.',
                      'Tracks referral and authorization paperwork.',
                      'Answers account and records questions.',
                      'Routes messages to the right desk.',
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 font-fj-body text-[0.875rem] font-medium leading-[1.5] text-fj-ink"
                      >
                        <CheckCircle size={17} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(213,69,63,0.35)' }}>
                  <h3 className="fj-display text-[1.05rem] font-bold text-fj-ink">What it never does</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Diagnose, or suggest what a symptom means.',
                      'Judge how urgent a clinical problem sounds.',
                      'Recommend, change or explain a treatment.',
                      'Interpret a test result or a scan.',
                      'Advise on medication or dosage.',
                      'Answer a clinical question instead of handing it on.',
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 font-fj-body text-[0.875rem] font-medium leading-[1.5] text-fj-neutral-700"
                      >
                        <CrossCircle size={17} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. THE SIX WORKLOADS ────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six administrative jobs, not one product
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              What an AI agent actually does for a practice
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Most practices need one or two of these, not all six.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {WORKLOADS.map((w) => (
                <div key={w.tag} className="rounded-2xl p-7" style={{ background: w.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: w.accent }}>
                    {w.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {w.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{w.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Two of those run on named standards, not improvisation. HIPAA adopts the{' '}
              <a
                href={X12_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                ASC X12N 270/271 eligibility inquiry and response
              </a>{' '}
              as the standard transaction for asking whether someone is covered. And CMS has told impacted
              payers to implement parts of its{' '}
              <a
                href={CMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                Interoperability and Prior Authorization rule
              </a>{' '}
              by January 1, 2026, with API requirements due primarily by January 1, 2027. The layer your staff
              work by phone and fax is turning into software.
            </p>
          </div>
        </section>

        {/* ─── 6. HIPAA IN PRACTICE ────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
              The part most vendor pages reduce to a badge
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              HIPAA is a set of specific obligations, not a logo
            </h2>
            <p className="mt-4 max-w-[830px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              There is no federal HIPAA certification programme, so a badge is a private audit, not a
              government seal. Six questions sort a serious vendor from a confident one.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  q: 'Will you sign a BAA for this exact product, down to subcontractors?',
                  a: 'Signed before we connect to anything holding patient data, covering the model provider.',
                },
                {
                  q: 'What is the smallest slice of patient data the agent can see?',
                  a: 'Scoped to the queue. A scheduling agent gets a name, contact method, visit type, availability. Not the chart.',
                },
                {
                  q: 'Is every human and service on a unique identity, least privilege?',
                  a: 'Yes, and reviewed rather than assumed. Unique user identification is a required specification.',
                },
                {
                  q: 'Is the data encrypted in transit and at rest, provably?',
                  a: 'Yes. We treat encryption as a floor even though the Security Rule lists it as addressable.',
                },
                {
                  q: 'Is every action in an audit log, and for how long?',
                  a: 'Append-only log of every trigger, tool call, message and record change, on an agreed schedule.',
                },
                {
                  q: 'Are prompts and responses excluded from training, in writing?',
                  a: 'Yes, by deployment configuration and by the agreement, not verbally.',
                },
              ].map((item, i) => (
                <div key={item.q} className="rounded-2xl bg-white p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full font-fj-mono text-[11px] font-bold text-white"
                      style={{ background: LAV }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="fj-display text-[1rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.01em' }}>
                      {item.q}
                    </h3>
                  </div>
                  <p className="mt-2.5 pl-[34px] font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[840px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              None of this is legal advice. Your privacy officer and your lawyers own the compliance decision.
              Our job is to build a system whose behaviour they can inspect, prove and change.
            </p>
          </div>
        </section>

        {/* ─── 7. LISTICLE: the build in eight steps ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Eight steps to put an AI agent into a medical practice
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In the order they happen. A proposal that starts at step four is a demo, not something your
              compliance officer can sign off.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {s.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.02rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {s.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Front desk buried in scheduling calls?'}
          sub={'Tell us your systems and your patient volume. We will map the administrative work an agent can take, and what it never touches.'}
          label={'Talk about your front office'}
        />

        {/* ─── 8. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink md:text-[1.75rem]" style={{ letterSpacing: '-0.02em' }}>
                Want to know whether this is worth building for your practice?
              </h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                Bring one real queue and the system you run it in. We will walk the workflow, name the
                integrations, write down where the clinical line falls, and say plainly if buying beats
                building.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ─── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four ways practices cover the phones
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[860px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              AI agent vs answering service vs outsourced call centre vs phone menu
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Including where each fails. We sell the first column and will still tell you to keep an
              answering service if after-hours capture is all you need.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of an AI agent, an answering service, an outsourced call centre and a phone menu
                  across availability, booking, eligibility, BAA coverage, clinical questions and failure modes.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      AI agent
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Answering service
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Outsourced call centre
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Phone menu
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th
                        scope="row"
                        className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                      >
                        {row.label}
                      </th>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.ai}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.answering}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.bpo}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.ivr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              None of the four fixes a practice whose scheduling rules nobody has written down.
            </p>
          </div>
        </section>

        {/* ─── 10. THE VENDOR SET (named, fair, real SERP data) ─────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The other answers to this question, and what each one is good at
            </h2>
            <p className="mt-4 max-w-[780px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Pulled from the live US results and the Google AI Overview on 12 August 2026, described by how
              each positions itself. We have not audited these products, and several are the right answer for
              some organisations.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {r.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What we do differently</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We build against the systems you already run, not onto our platform',
                    'The clinical boundary is enforced by the tools the agent has, not by a prompt a clever question can talk around',
                    'You get the repository, connectors, logging and evaluations. Another team could take over tomorrow',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Where we honestly stand</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We had 53 referring domains when last measured, August 2026. Established vendors have far more',
                    'Not a healthcare-only shop. This is agent work we do across several industries, applied here',
                    'We build no clinical software, hold no medical device clearance, and decline briefs that need one',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. FIT CHECK ───────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When an AI agent is the wrong thing to buy
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Calls are abandoned in your queue, and appointments with them',
                    'Requests arrive outside the hours your desk is staffed',
                    'Your EHR or practice system has a documented interface',
                    'Someone owns compliance and will engage rather than wave it through',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You want a symptom checker or triage tool. We will not build it',
                    'Single provider, light call volume. An answering service is enough',
                    'Nobody will own escalations or read the logs after launch',
                    'You want every human removed from patient contact. That ends in a complaint',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If patients cannot find you at all, start with{' '}
                  <Link
                    href="/services/healthcare-seo"
                    className="font-semibold underline underline-offset-2"
                    style={{ color: ORANGE_DARK }}
                  >
                    healthcare SEO
                  </Link>{' '}
                  instead. An agent cannot answer a call that never comes in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12. CITATIONS ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the claims on this page come from
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Every legal statement above links to the regulation, not a summary of it.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {CITATIONS.map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.body}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
                    style={{ color: ORANGE_DARK }}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              The eligibility standard and CMS deadlines linked earlier were checked the same way. Nothing
              here is legal or medical advice.
            </p>
          </div>
        </section>

        {/* ─── 13. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[460px]">
              <img
                src="/images/us/ai-agents-for-healthcare/admin-team.webp"
                alt="Three colleagues reviewing printed process documents around a table in a bright office, with a workflow diagram on the whiteboard behind them"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 18px 40px rgba(40,30,90,0.18)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                Who you actually work with
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Integration people who know where to stop
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Almost none of the difficulty is the conversation. It is authentication against a practice
                system, vendor API approval, eligibility transactions, an audit trail compliance will accept,
                and deciding what the system may never say.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'The person who scopes the build does the analysis' },
                  { t: 'Boundaries before capability', s: 'What it must never do is agreed first' },
                  { t: 'Agents and websites in one team', s: 'If the booking flow is the bottleneck, we fix that too' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no promised outcomes' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={LAV} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
              </p>
              <div className="mt-6">
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 14. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related services
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'AI agent development',
                  href: '/services/ai-agent-development',
                  desc: 'The parent service. Agents for support, sales and back-office queues, any industry.',
                },
                {
                  label: 'AI scheduling agent',
                  href: '/services/ai-agent-development/ai-scheduling-agent',
                  desc: 'The generic booking pattern: real calendars, capacity rules, confirmations.',
                },
                {
                  label: 'AI voice agent',
                  href: '/services/ai-agent-development/ai-voice-agent',
                  desc: 'Inbound calls over Twilio, with routing to the right person.',
                },
                {
                  label: 'AI customer support',
                  href: '/services/ai-agent-development/ai-customer-support',
                  desc: 'The generic support queue: deflection where it helps, escalation where it matters.',
                },
                {
                  label: 'Healthcare SEO',
                  href: '/services/healthcare-seo',
                  desc: 'The other half. Being found by patients searching for a practice like yours.',
                },
                {
                  label: 'AI agents for real estate',
                  href: '/services/ai-agents-for-real-estate',
                  desc: 'The same practice at a brokerage: lead response, showings, follow-up.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[168px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 15. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="AI in healthcare FAQ"
          headline="The questions practice managers actually search"
          lead="Twenty-three answers on what an administrative AI agent does, where the clinical line falls, what HIPAA requires of any vendor touching patient data, and which systems it connects to."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="ONE QUEUE, PROPERLY"
          headline="Find out which part of your front office is actually leaking"
          sub="Bring one real queue and the system you run it in. We will walk the workflow, name the integrations, write down where the clinical line falls, and say plainly if buying beats building."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See AI agent development', href: '/services/ai-agent-development' }}
          objectionHandler="Founder-led. BAA before anything connects, administrative scope only, and you own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
