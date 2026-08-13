import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-agents-for-real-estate: the REAL ESTATE VERTICAL application of
   our AI agent practice.

   Intent owned by THIS page:
     ai agents for real estate (390/mo, KD 8) · ai for realtors · ai for real
     estate agents · ai real estate agent · ai for real estate leads · ai for
     real estate marketing · ai agents for real estate reddit · free ai tools
     for real estate agents · will ai replace real estate agents.

   Does NOT own, and must not cannibalise:
     /services/ai-agent-development            general agent building, the parent
     /services/ai-agent-development/ai-sales-agent      generic inbound lead agent
     /services/ai-agent-development/ai-voice-agent      generic voice
     /services/ai-agent-development/ai-scheduling-agent generic booking
     /services/ai-agent-development/ai-chatbot          generic site chat
     /services/real-estate-website-design               the website build
   Each is linked up or across rather than restated. The split is stated in the
   answer-first block in plain words so a reader and a model both see it.

   Category note (2026-08-12 research): Google renders a live AI Overview on
   this query, and 91% of vendors AI engines name do not rank in Google's top
   ten. Cited pages measured SHORTER than ranking pages, so this page is
   deliberately not padded. Every section leads with the answer.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no TestimonialsSection (its US_STATS hardcodes a dollar figure),
   no shared files touched, alternates declared inline.

   Schema: WebPage + speakable, Service, ItemList (build steps), ItemList
   (vendor set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. All six reach a
   script tag in the component below. Verify by eye before editing.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/ai-agents-for-real-estate';
const HERO_IMAGE = 'https://factoryjet.com/images/us/ai-agents-for-real-estate/hero.webp';
const REVIEWED_DATE = 'August 12, 2026';
const PAGE_MODIFIED = '2026-08-12';

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
  title: 'AI Agents for Real Estate: Lead Response, Showings & Follow-Up | FactoryJet',
  description:
    'AI agents built for brokerages and real estate teams. Answer every inbound lead in seconds, qualify it, book the showing, keep the follow-up alive for months, and write it all back into Follow Up Boss, Lofty or Sierra. Fair housing guardrails in the tools, a licensed human on anything material.',
  keywords: [
    'ai agents for real estate',
    'ai agent for real estate',
    'ai for real estate agents',
    'ai for realtors',
    'ai real estate agent',
    'best ai agents for real estate',
    'ai agents for real estate agents',
    'ai for real estate leads',
    'ai for real estate marketing',
    'ai for real estate listings',
    'ai tools for real estate agents',
    'ai lead response real estate',
    'real estate ai assistant',
    'ai isa real estate',
    'ai showing scheduling',
    'real estate crm ai integration',
    'will ai replace real estate agents',
    'ai for brokerages',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents for Real Estate: Lead Response, Showings & Follow-Up | FactoryJet',
    description:
      'The real estate build of our AI agent practice: seconds-not-hours lead response, honest qualification, showing scheduling, long-cycle follow-up and CRM enrichment, with fair housing limits written into the tools.',
    url: PAGE_URL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1264,
        height: 848,
        alt: 'Two real estate professionals working at a bright office desk, one taking a call and writing notes',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Real Estate | FactoryJet',
    description:
      'AI agents that answer real estate leads in seconds, book showings, and keep a long nurture alive, wired into the CRM and MLS feed you already run.',
    images: [HERO_IMAGE],
  },
  alternates: {
    canonical: PAGE_URL,
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
   The six workloads. Each is a self-contained factual statement so it stands up
   when a model quotes one tile without the rest of the page.
───────────────────────────────────────────────────────────────────────────── */

type Workload = { tag: string; title: string; body: string; tint: string; accent: string };

const WORKLOADS: ReadonlyArray<Workload> = [
  {
    tag: '01',
    title: 'Answers a new lead in seconds, at any hour',
    body:
      'A portal enquiry at 11pm gets a real reply at 11pm, by text or email, in your brokerage voice. The agent reads the enquiry, matches it to the property, answers the question asked, and asks one qualifying question back.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Qualifies without interrogating',
    body:
      'Timeline, area, whether they have a home to sell, whether they have spoken to a lender, and whether they already have an agent. Five things, asked across a conversation rather than fired as a form, then written to named CRM fields so routing rules can use them.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Books the showing against a real calendar',
    body:
      'The agent checks live availability in Google Calendar or Outlook, offers slots that exist, and writes the appointment. Where the brokerage runs ShowingTime or BrokerBay, it requests through that instead of around it, so the listing side stays in the loop.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Keeps the long nurture alive',
    body:
      'Most buyers and sellers are months out, and that is the part humans drop, because it is a hundred small touches with no immediate payoff. An agent runs a twelve month cadence and pulls a person in the moment the signal turns real.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Enriches and cleans the CRM',
    body:
      'Duplicate contacts merged, stage moved when the evidence says so, source recorded properly, and a short written summary of every conversation attached to the record. The difference between a database you can market to and forty thousand rows nobody trusts.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'Handles listing and MLS data properly',
    body:
      'Status, price changes, days on market and photos pulled from your MLS feed, so the agent answers from current data instead of guessing. That means the RESO Web API where your MLS has moved to it, or a licensed IDX feed, under your MLS display rules.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Step = { n: string; title: string; body: string };

const STEPS: ReadonlyArray<Step> = [
  {
    n: '01',
    title: 'Pick one queue, not the whole business',
    body:
      'Inbound buyer enquiries from your website and portals: high volume, measurable, and where slow response costs most. Handing an agent everything on day one is the reliable way to fail in public.',
  },
  {
    n: '02',
    title: 'Write down what a good response actually says',
    body:
      'Pull thirty of your best recent conversations and thirty bad ones. That is the standard the agent gets measured against, and where you discover your team already disagrees about what qualifying means.',
  },
  {
    n: '03',
    title: 'Connect the CRM as the system of record',
    body:
      'Follow Up Boss, Lofty, Sierra Interactive, kvCORE and BoldTrail, Real Geeks, HubSpot or Salesforce. The agent reads the contact, writes back to named fields, and logs every message. Without CRM writeback you have a chat widget.',
  },
  {
    n: '04',
    title: 'Connect the listing data through the right door',
    body:
      'Your MLS feed via the RESO Web API, a distributor such as MLS Grid, Trestle or Bridge Interactive, or your IDX provider. Which door is open depends on your MLS, so it gets settled in scoping.',
  },
  {
    n: '05',
    title: 'Give it a calendar and a booking path',
    body:
      'Google Calendar or Microsoft Outlook for the agent side, plus ShowingTime or BrokerBay where the brokerage uses one. Then the booking rules, which decide whether the calendar stays usable once volume arrives.',
  },
  {
    n: '06',
    title: 'Write the fair housing limits into the tools',
    body:
      'Not into a prompt, into the tool definitions and a blocklist. The agent may not describe a neighbourhood in terms of the people who live there, may not steer, may not answer questions about schools, crime or demographics, and may not vary its behaviour by any protected characteristic. Those requests get one neutral reply and a handoff.',
  },
  {
    n: '07',
    title: 'Decide the handoff rule before launch',
    body:
      'Price advice, contract terms, financing, repairs, disclosure, anything emotional, and anyone who asks for a person. Those leave the agent immediately with a summary attached. A handoff rule written after launch is a rule written during an incident.',
  },
  {
    n: '08',
    title: 'Run it in shadow mode first',
    body:
      'For the first stretch the agent drafts and a person approves with one click. You watch the disagreement rate on real leads before it sends anything alone. It costs a few weeks and it is why these projects survive.',
  },
  {
    n: '09',
    title: 'Log every run so you can answer for it',
    body:
      'Trigger, each tool call, what came back, what was sent, which records changed. When a client or your broker asks what the system told someone, you open the log instead of guessing. This is also what makes a fair housing review possible at all.',
  },
  {
    n: '10',
    title: 'Measure speed to first reply, then contact rate',
    body:
      'Median seconds to first response, share of leads reached, share qualified, appointments set, and how many were still worked at day thirty and day ninety. Not message volume. Sending more and reaching fewer makes things worse.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: how teams cover inbound today
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; ai: string; isa: string; answering: string; autoresponder: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Speed to first reply',
    ai: 'Seconds, every hour of every day',
    isa: 'Fast in shift hours, nothing outside them',
    answering: 'Fast, but the reply is a message taken',
    autoresponder: 'Instant and identical to everyone',
  },
  {
    label: 'Depth of the conversation',
    ai: 'Reads the record, answers the actual question',
    isa: 'The best option. A person who knows the market',
    answering: 'Name, number, nothing more',
    autoresponder: 'One template, no listening at all',
  },
  {
    label: 'Works the twelve month nurture',
    ai: 'Yes, and it does not get bored',
    isa: 'In theory. In practice it is dropped first',
    answering: 'No',
    autoresponder: 'Sends on a timer regardless of behaviour',
  },
  {
    label: 'Writes back to the CRM',
    ai: 'Named fields, stage and a written summary',
    isa: 'When they have time and remember',
    answering: 'Rarely, and usually by email',
    autoresponder: 'A timestamp',
  },
  {
    label: 'Cost behaviour as volume grows',
    ai: 'Rises gently. Mostly usage, not headcount',
    isa: 'Rises in steps. You hire another person',
    answering: 'Rises with call volume',
    autoresponder: 'Flat, and so is the result',
  },
  {
    label: 'Fair housing exposure',
    ai: 'Controllable if limits are in the tools and logged',
    isa: 'Managed by training and supervision',
    answering: 'Low. It says almost nothing',
    autoresponder: 'Low, unless the template itself is wrong',
  },
  {
    label: 'Where it fails',
    ai: 'Bad data, no handoff rule, nobody reading logs',
    isa: 'Turnover, shift gaps and burnout on follow-up',
    answering: 'Leads go cold between message and callback',
    autoresponder: 'People spot it instantly and stop replying',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   The vendor set actually visible on this query (also powers the second
   ItemList). Descriptions are how each one presents itself, observed on the
   live US results for this query on 2026-08-12. Never disparage.
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'nar.realtor',
    note: 'The trade body, not a vendor',
    detail:
      'The National Association of REALTORS® publishes guidance on AI in real estate rather than selling a product, which makes it the closest thing this category has to a neutral reference.',
  },
  {
    domain: 'withjoy.ai',
    note: 'A packaged AI real estate assistant',
    detail:
      'Sells itself as an AI real estate agent: a ready-made product you switch on rather than a build. If your workflow matches what it does, buying beats building.',
  },
  {
    domain: 'realestatecontent.ai',
    note: 'Marketing content, not lead handling',
    detail:
      'Focused on social media and marketing content for agents, which is a different job from the one on this page. Content tools do not touch your CRM records or book anything.',
  },
  {
    domain: 'mindstudio.ai',
    note: 'A build-your-own agent platform',
    detail:
      'A general platform for assembling AI agents and workflows, with a widely read roundup of real estate use cases. Where teams struggle is the second half: authentication, MLS rules, evaluation and the audit trail.',
  },
  {
    domain: 'voiceflow.com',
    note: 'Conversation design tooling',
    detail:
      'A platform for designing and shipping conversational agents, with real estate as one use case. The integration and compliance layer around it is still yours to solve.',
  },
  {
    domain: 'chatbot.com',
    note: 'Website chat, well executed',
    detail:
      'A mature chatbot product with a clear explainer on AI real estate agents. If what you need is website chat that captures and routes, this is cheaper than a custom build.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   External citations. Every URL was fetched and the claim confirmed on the page
   on 2026-08-12. Do not edit a claim here without re-fetching the source.
───────────────────────────────────────────────────────────────────────────── */

type Citation = { src: string; title: string; body: string; href: string };

const CITATIONS: ReadonlyArray<Citation> = [
  {
    src: 'Harvard Business Review, March 2011',
    title: 'Why the first hour decides the lead',
    body:
      'Oldroyd, McElheran and Elkington are the source for the seven times and sixty times figures quoted above, drawn from 1.25 million leads across 42 US companies. The same article reports a separate audit of 2,241 US companies where average response time, among those that replied at all, was 42 hours.',
    href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
  },
  {
    src: 'United States Code, 42 U.S.C. § 3604(c)',
    title: 'What the law says about the words you publish',
    body:
      'The Fair Housing Act makes it unlawful to make, print or publish any notice, statement or advertisement about the sale or rental of a dwelling that indicates any preference, limitation or discrimination based on race, colour, religion, sex, handicap, familial status or national origin. An automated message is a statement.',
    href: 'https://www.law.cornell.edu/uscode/text/42/3604',
  },
  {
    src: 'National Association of REALTORS®',
    title: 'The human stays in the loop',
    body:
      'NAR describes consumers as increasingly relying on REALTORS® as the human in the loop for AI-assisted tasks such as home searches and price estimates, says risks remain including data bias and privacy, and states that its federal advocacy is aimed at safeguarding fair housing, consumer privacy and copyright.',
    href: 'https://www.nar.realtor/artificial-intelligence',
  },
  {
    src: 'Real Estate Standards Organization',
    title: 'How listing data is meant to move',
    body:
      'RESO describes the Web API as the modern way to transport real estate data, built on open standards including OData, and says companies are moving away from older deprecated transports such as RETS. This is the door an agent should read listing data through.',
    href: 'https://www.reso.org/reso-web-api/',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 22 items across 6 categories, grounded in the live US
   People-Also-Ask set pulled 2026-08-12. Two PAA questions arrived with dollar
   figures in the question text; they are asked here without the figure, because
   this site carries no currency values. The FAQPage JSON-LD below is generated
   from THIS array. Never hand-write a second copy.

   Trimmed 2026-08-12 from 37 items. Removed: three questions that restated the
   answer-first block almost verbatim, four that repeated a workload tile or a
   fit-check bullet, and eight off-intent ones (general AI trivia, commission
   arithmetic, unrelated rules of thumb). The "rules" category went with them and
   its one surviving question moved into "jobs". Every remaining category still
   has items, so no nav tab renders empty. Never drop below 20 items.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'jobs', label: 'What it actually does' },
  { key: 'systems', label: 'CRMs, MLS & tools' },
  { key: 'limits', label: 'Fair housing & limits' },
  { key: 'career', label: 'Agents, jobs & commission' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ─────────────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'Which AI agent is best for real estate?',
    answer:
      'No single one wins, because the category covers four different jobs: lead response, content writing, valuation and transaction admin. Pick by the job that is costing you money. If enquiries sit unanswered for hours, fix lead response first and ignore everything else until it works.',
  },
  {
    category: 'basics',
    question: 'Which AI is best for realtors?',
    answer:
      'For most individual agents, a general assistant such as ChatGPT, Claude or Gemini for writing, plus the automation already inside your CRM. A custom agent only pays off when volume genuinely outruns a person, which usually means a team or a brokerage rather than a solo agent.',
  },
  {
    category: 'basics',
    question: 'Is there a ChatGPT for real estate agents?',
    answer:
      'Several products wrap a general model in a real estate interface, and agents use ChatGPT itself for drafting. The gap is not the writing. A chat window cannot see your CRM, your calendar or your MLS feed, so it cannot act. That connection is what makes something an agent.',
  },

  /* ── What it actually does ──────────────────────────────────────────── */
  {
    category: 'jobs',
    question: 'How are real estate agents using AI?',
    answer:
      'Four clusters, in rough order of adoption. Writing: listing copy, emails, social posts. Answering: website chat and instant replies to portal leads. Admin: summarising calls, drafting follow-ups, cleaning the database. Analysis: comparable properties and market questions. The first three are settled practice. The fourth still needs checking.',
  },
  {
    category: 'jobs',
    question: 'Can the agent book showings on my calendar?',
    answer:
      'Yes, and the booking rules matter more than the connection. Before launch you set how far ahead it may book, the buffer between showings, which agents cover which areas, and what happens when nobody is free. It handles the confirmation, the reminder and the reschedule too.',
  },
  {
    category: 'jobs',
    question: 'Will the agent write listing descriptions?',
    answer:
      'It can draft them from the property record, and a person must read every one before publication. Listing copy is advertising, and advertising is where fair housing language rules bite hardest. Draft by machine, approve by human, every time, with no exception for a busy week.',
  },
  {
    category: 'jobs',
    question: 'Does this replace our inside sales agents?',
    answer:
      'Usually it changes what they do rather than removing them. The agent takes first response, basic qualification and the long nurture, which is the grinding part. Your people take the conversations needing judgement, market knowledge and a relationship. Teams that clear the ISA desk on launch day tend to regret it.',
  },
  {
    category: 'jobs',
    question: 'What is the 3-3-3 rule in real estate?',
    answer:
      'An informal coaching habit rather than an official rule, used a few different ways. The common version is a follow-up cadence: contact a new lead three times in three days, then three times in three weeks, then three times in three months. Agents intend to run that. Software actually does.',
  },

  /* ── CRMs, MLS & tools ──────────────────────────────────────────────── */
  {
    category: 'systems',
    question: 'Which real estate CRMs can you connect an agent to?',
    answer:
      'Follow Up Boss, Lofty, Sierra Interactive, kvCORE and BoldTrail, Real Geeks, Wise Agent, plus general platforms such as HubSpot and Salesforce. Where a documented API exists we use it. Where it does not, we say so during scoping rather than discovering it three weeks in.',
  },
  {
    category: 'systems',
    question: 'Can the agent read our MLS data?',
    answer:
      'Yes, through the proper door. Your MLS display rules decide what may be shown, to whom, and how fresh it has to be, and we read those rules before writing the integration. We do not scrape portals, which breaks quietly and usually violates a licence.',
  },
  {
    category: 'systems',
    question: 'Which lead sources can the agent work?',
    answer:
      'Anything that produces a record: your own website forms, Zillow and Realtor.com enquiries, Homes.com, social lead forms, open house sign-ins and referral submissions. The important part is that every source is tagged accurately, because you cannot judge a lead source you cannot separate.',
  },

  /* ── Fair housing & limits ──────────────────────────────────────────── */
  {
    category: 'limits',
    question: 'What is AI not allowed to do in real estate?',
    answer:
      'It may not steer. The Fair Housing Act makes it unlawful to publish any statement about the sale or rental of a dwelling indicating a preference or limitation based on a protected characteristic, and an automated message is a statement. So the agent never describes an area by who lives there, and never answers demographic, crime or school questions.',
  },
  {
    category: 'limits',
    question: 'How do you stop the agent from breaking fair housing rules?',
    answer:
      'Three layers, none of them a prompt. A classifier catches protected-characteristic questions before generation. The tools themselves cannot return demographic data. Every outbound message is logged so your broker can audit what was said. Flagged requests get one neutral reply and an immediate handoff to a licensed person.',
  },
  {
    category: 'limits',
    question: 'Can the agent give advice on price, contracts or financing?',
    answer:
      'No, and it refuses clearly rather than hedging. Pricing advice, contract terms, repair negotiation, disclosure questions, tax and mortgage advice all leave the agent immediately with a summary attached to the record. Those are licensed conversations, and several of them are legal or financial advice no automated system should give.',
  },
  {
    category: 'limits',
    question: 'What happens when the agent gets something wrong?',
    answer:
      'You are accountable, exactly as you would be for an assistant or a script, which is why the design points are boundaries, approvals and logs. No AI system is right every time. Good design makes mistakes visible, small and correctable rather than silent. Every run is replayable from the log.',
  },

  /* ── Agents, jobs & commission ──────────────────────────────────────── */
  {
    category: 'career',
    question: 'Is AI a threat to real estate agents?',
    answer:
      'It threatens the parts of the job that are typing and chasing, and little else. Nobody hires an agent because they are good at sending follow-up texts. The real risk is not being replaced by AI, it is competing against a team that answers in seconds while you answer in hours.',
  },
  {
    category: 'career',
    question: 'Are realtors being replaced with AI?',
    answer:
      'Not currently. Transactions still involve licensure, fiduciary duty, negotiation, disclosure and a large emotional purchase, and NAR itself frames the REALTOR® as the human in the loop for AI-assisted tasks. What is being replaced is the administrative middle of the job, which most agents are happy to lose.',
  },
  {
    category: 'career',
    question: 'Can I use AI instead of a real estate agent?',
    answer:
      'For research, yes. AI is good at explaining process, comparing areas on published data and drafting questions. For the transaction itself you need someone licensed and accountable. AI carries no fiduciary duty, cannot hold earnest money, will not attend the inspection and cannot be sued for bad advice.',
  },
  {
    category: 'career',
    question: 'Do realtors still get 6% commission?',
    answer:
      'Commission rates are not set by law or by any association and never have been. They are negotiable between the parties, and since the 2024 practice changes buyers sign a written agreement with their agent before touring, while offers of compensation are no longer published in the MLS. An AI agent should never quote a rate.',
  },

  /* ── Working with us ────────────────────────────────────────────────── */
  {
    category: 'working',
    question: 'How long does it take to build?',
    answer:
      'A single queue with a CRM and a calendar connected is usually a matter of weeks, then a few more weeks in shadow mode before it acts alone. Adding MLS data and voice lengthens it. What moves the timeline most is access: API credentials, sample conversations, and one decision maker.',
  },
  {
    category: 'working',
    question: 'How much does an AI agent for a real estate team cost?',
    answer:
      'We will not put a figure on a page, because a number written without seeing your setup is aimed at an average rather than at you. Scope depends on how many queues and systems, whether those systems have clean APIs, whether MLS data is involved, and how much conversation design you need.',
  },
  {
    category: 'working',
    question: 'Do we own what you build?',
    answer:
      'Yes. The repository, the connectors, the prompts, the evaluation sets and the cloud accounts are yours. There is no proprietary runtime you lose access to if you stop working with us, and nothing an ordinary engineering team could not maintain.',
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
  name: 'AI Agents for Real Estate: Lead Response, Showings and Follow-Up',
  description:
    'AI agents built for US brokerages and real estate teams: instant lead response, honest qualification, showing scheduling, long-cycle follow-up, CRM enrichment and MLS data handling, with fair housing limits written into the tools.',
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'AI agents for real estate' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: HERO_IMAGE,
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-an-ai-agent-for-real-estate'],
  },
  lastReviewed: PAGE_MODIFIED,
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents for Real Estate',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'AI Agents for Real Estate / Real Estate Lead Response Automation / AI Showing Scheduling / Real Estate CRM Integration / AI Follow-Up for Brokerages',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US real estate brokerages, teams and property companies',
  },
  description:
    'Custom AI agents for real estate teams covering instant inbound lead response, qualification, showing scheduling against live calendars, long-cycle follow-up, CRM enrichment and MLS or IDX data handling, with fair housing limits enforced in the tool layer and a licensed human on anything material.',
  url: PAGE_URL,
  isRelatedTo: {
    '@type': 'Service',
    name: 'AI Agent Development',
    url: 'https://factoryjet.com/services/ai-agent-development',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real estate AI agent build',
    itemListElement: STEPS.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'How to put an AI agent into a real estate team, in ten steps',
  description:
    'The ten steps of a real estate AI agent build, in the order they happen, from picking a single queue through fair housing limits to measuring speed to first reply.',
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
  name: 'Sites and products visible on US searches for AI agents for real estate',
  description:
    'Products, platforms and references appearing on the live United States results for AI agents for real estate, observed on 12 August 2026, with what each one is actually good at.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Agent Development',
      item: 'https://factoryjet.com/services/ai-agent-development',
    },
    { '@type': 'ListItem', position: 4, name: 'AI Agents for Real Estate', item: PAGE_URL },
  ],
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

export default function AiAgentsForRealEstatePage() {
  return (
    <>
      <script
        id="reag-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="reag-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="reag-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="reag-vendors-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="reag-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="reag-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">AI agents for real estate &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Every lead answered in seconds, <span style={{ color: ORANGE }}>including the ones at midnight</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                We build AI agents for brokerages and real estate teams. They answer inbound enquiries
                immediately, qualify honestly, book the showing, and keep the follow-up alive for months.
                Fair housing limits live in the tools, and a licensed person still handles anything that
                matters.{' '}
                <b className="font-bold text-fj-ink">Built into your CRM, not a new one.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_ai_agents_for_real_estate_hero"
                submitLabel="Get a real estate agent scope"
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
                  Not in real estate? Start at the parent service
                </Link>
              </div>
            </div>

            {/* Right: hero image + the first-minute timeline. No metrics, no glow. */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/ai-agents-for-real-estate/hero.webp"
                  alt="Two real estate professionals working at a bright office desk, one taking a call and writing notes while a colleague reviews a property on a laptop"
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
                  One inbound enquiry, first minute
                </span>
                <ol className="mt-3 space-y-2.5">
                  {[
                    { k: 'Portal enquiry lands', v: 'Property matched, contact created' },
                    { k: 'Reply sent', v: 'Answers the question asked, in your voice' },
                    { k: 'Two questions back', v: 'Timeline and area, not an interrogation' },
                    { k: 'Calendar checked', v: 'Only slots that genuinely exist' },
                    { k: 'CRM updated', v: 'Named fields, stage, written summary' },
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
                  A worked example of the sequence, not a result from a named brokerage.
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
                id="what-is-an-ai-agent-for-real-estate"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is an AI agent for real estate?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  An AI agent for real estate is software that works your inbound leads the way a good
                  assistant would.
                </b>{' '}
                It replies to a new enquiry in seconds, asks qualifying questions, books a showing on a real
                calendar, updates the CRM record and keeps following up for months. A licensed human still
                handles advice, negotiation and anything material.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                The difference from a chatbot is that an agent takes an action. A chatbot can tell someone a
                home has four bedrooms. An agent books Tuesday at six, writes the appointment into Follow Up
                Boss and flags the lead for a call. It writes to real records, which is why its limits have
                to be real.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                This page is the real estate build.{' '}
                <Link
                  href="/services/ai-agent-development"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  AI agent development
                </Link>{' '}
                is the parent service and covers agents in any industry, including the generic{' '}
                <Link
                  href="/services/ai-agent-development/ai-sales-agent"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  sales
                </Link>
                ,{' '}
                <Link
                  href="/services/ai-agent-development/ai-scheduling-agent"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  scheduling
                </Link>{' '}
                and{' '}
                <Link
                  href="/services/ai-agent-development/ai-voice-agent"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  voice
                </Link>{' '}
                patterns. What is here and not there: portal lead behaviour, showing logistics, MLS and IDX
                data rules, and fair housing constraints.
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
                  t: 'Writes into your CRM',
                  s: 'Follow Up Boss, Lofty, Sierra Interactive, kvCORE and BoldTrail, Real Geeks, HubSpot, Salesforce',
                },
                {
                  t: 'Reads listing data properly',
                  s: 'RESO Web API, MLS Grid, Trestle, Bridge Interactive or your IDX feed, under your MLS display rules',
                },
                {
                  t: 'Fair housing in the tool layer',
                  s: 'Protected-characteristic questions blocked before generation, not discouraged in a prompt',
                },
                {
                  t: 'You own the build',
                  s: 'Repository, connectors, prompts, evaluation sets and cloud accounts all handed over',
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

        {/* ─── 4. SPEED SECTION (image + the mechanism) ─────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/ai-agents-for-real-estate/showing.webp"
                alt="A real estate agent holding keys greets a couple arriving at the front door of a bright suburban home"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Why speed dominates everything else
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                The lead you answer in an hour is a <span style={{ color: ORANGE }}>different lead</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A Harvard Business Review study of 1.25 million sales leads across 42 US companies found that
                firms contacting a lead within an hour were nearly seven times as likely to reach a decision
                maker as those that tried an hour later, and more than sixty times as likely as those who
                waited a day.
              </p>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Real estate makes that harder than most industries. Enquiries arrive in evenings and at
                weekends, the same lead usually goes to more than one agent, and the person enquiring has
                another thirty listings open. Being second is close to being nowhere.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Nobody loses to a better follow-up email',
                    s: 'They lose to whoever replied first, and the reply only had to be competent',
                  },
                  {
                    t: 'The nurture is where humans quit',
                    s: 'Most buyers are months out, and month four is where a person stops',
                  },
                  {
                    t: 'Speed only helps if it is not rubbish',
                    s: 'An instant template that ignores the question is worse than a slow answer',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5. THE SIX WORKLOADS ────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six jobs, not one product
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              What an AI agent actually does for a brokerage
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Most teams need one or two of these, not all six. Picking the one costing you money is a better
              first project than a platform that does everything badly.
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
          </div>
        </section>

        {/* ─── 6. FAIR HOUSING AND HARD LIMITS ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
              The part most vendor pages skip
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Fair housing law applies to a machine exactly as it applies to you
            </h2>
            <p className="mt-4 max-w-[830px] font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              The Fair Housing Act makes it unlawful to make, print or publish any notice, statement or
              advertisement about the sale or rental of a dwelling that indicates a preference, limitation or
              discrimination based on race, colour, religion, sex, handicap, familial status or national
              origin. An automated text message is a statement. So is a listing description a model drafted at
              two in the morning. If a vendor cannot tell you how their system handles that, it does not
              handle it.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-7 md:p-8">
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What our agents never do</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Describe a neighbourhood in terms of the people who live there',
                    'Answer questions about crime, school quality or demographics, all of which are common steering proxies',
                    'Recommend or withhold areas based on anything about the person asking',
                    'Give pricing, contract, repair, disclosure, tax or mortgage advice',
                    'Quote a commission rate, which is negotiable and set by your brokerage, not by us',
                    'Publish a listing description or advertisement without a human approving it first',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-7 md:p-8">
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">How that is actually enforced</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'A classifier screens the incoming message before any answer is generated, so a risky question never reaches the writing step',
                    'The tools themselves cannot return demographic data, because we do not connect the agent to it',
                    'Flagged requests get one neutral reply and an immediate handoff to a licensed person, with the transcript attached',
                    'Every outbound message is written to an append-only log your broker can audit later',
                    'Listing and advertising copy is drafted by machine and approved by a human, with no exception for a busy week',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CheckCircle size={18} fill={LAV} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  None of this is legal advice, and we are not your lawyers. Your broker and your counsel own
                  the compliance decision. Our job is to build a system whose behaviour they can actually
                  inspect and change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. LISTICLE: the build in ten steps ─────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Ten steps to put an AI agent into a real estate team
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In the order they happen. A proposal that starts at step three and skips two, six and eight is a
              demo, not a system.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {s.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {s.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 8. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink md:text-[1.75rem]" style={{ letterSpacing: '-0.02em' }}>
                Want to know whether this is worth building for your team?
              </h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                Bring one real queue and the CRM you run. We will walk the workflow end to end, name the
                integrations it needs, and tell you plainly if buying a product beats building one. Free, and
                with the founder.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Leads going cold overnight?'}
          sub={'Tell us your CRM and how enquiries arrive. We will map what an agent can answer and where a human must take over.'}
          label={'Talk about your lead flow'}
        />

        {/* ─── 9. COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four ways teams cover inbound
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              AI agent vs an ISA desk vs an answering service vs a CRM auto-responder
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              An honest side by side, including where each one fails. We sell the first column and will still
              tell you to keep the second.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of an AI agent, an inside sales agent desk, an answering service and a CRM
                  auto-responder across speed, depth, follow-up, CRM writeback, cost, fair housing exposure
                  and failure modes.
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
                      ISA desk
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Answering service
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      CRM auto-responder
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
                        {row.isa}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.answering}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.autoresponder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. An agent wins on speed, coverage and stamina, a
              good ISA still wins on judgement, and neither saves a team that cannot write to a CRM.
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
              We pulled the live US results for this query on 12 August 2026. Several of these are the right
              answer for some teams, and you should know that before you talk to us.
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
                    'We build against your existing CRM and MLS feed rather than moving you onto our platform',
                    'Fair housing limits are enforced in the tool layer and the classifier, not in a prompt',
                    'You get the repository, the connectors and the evaluation sets, so another team could take over',
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
                    'FactoryJet had 53 referring domains in August 2026. Established competitors have far more, and we will not pretend otherwise',
                    'We are not a real-estate-only shop. Our agent work spans several industries, and this is the vertical application of it',
                    'We publish no client names, no invented case study numbers and no testimonials we cannot stand behind',
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
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A mismatched build wastes your season and our reputation.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You get more inbound enquiries than your people can answer within the hour',
                    'You already run a real CRM and the data in it is roughly trustworthy',
                    'Evenings and weekends are where your enquiries land and where you are least covered',
                    'You want the agent writing into your systems, not living in a separate dashboard',
                    'Your broker will engage with the fair housing and audit questions',
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
                    'You are a solo agent with a handful of leads a month. A packaged tool is cheaper and enough',
                    'Your leads live in a shared inbox and a spreadsheet. Fix the system of record first',
                    'You want to remove every human from the conversation. That version ends in a complaint',
                    'Nobody on your side will read the logs or own the escalations after launch',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the real problem is that your website does not convert the traffic it gets, start with{' '}
                  <Link
                    href="/services/real-estate-website-design"
                    className="font-semibold underline underline-offset-2"
                    style={{ color: ORANGE_DARK }}
                  >
                    real estate website design
                  </Link>{' '}
                  instead. An agent cannot answer an enquiry that never gets made.
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
              Do not take a vendor&rsquo;s word for how lead response or fair housing works. Four primary
              sources back the claims above.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
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

            <p className="mt-8 max-w-[840px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              The vendor list is what appeared on the live US results on 12 August 2026. Nothing on this page
              is legal advice.
            </p>
          </div>
        </section>

        {/* ─── 13. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[460px]">
              <img
                src="/images/us/ai-agents-for-real-estate/team.webp"
                alt="Three real estate professionals reviewing a printed architectural floor plan together at a table in a light office"
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
                Integration people, not a chat widget vendor
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Almost none of the difficulty in this work is the conversation. It is authentication against a
                CRM, MLS display rules, calendar edge cases, and deciding what the system is forbidden to say.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'Whoever scopes the build does the analysis' },
                  { t: 'Agents and websites in one team', s: 'If the site is the bottleneck we fix that too' },
                  { t: 'Boundaries before capability', s: 'What it must never do gets written before what it will do' },
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
                  desc: 'The parent service. Custom agents for support, sales and back-office queues.',
                },
                {
                  label: 'AI sales agent',
                  href: '/services/ai-agent-development/ai-sales-agent',
                  desc: 'The generic inbound lead pattern: enrich, qualify, route, write back to the CRM.',
                },
                {
                  label: 'AI scheduling agent',
                  href: '/services/ai-agent-development/ai-scheduling-agent',
                  desc: 'Booking, rescheduling and confirmation against real calendar and capacity rules.',
                },
                {
                  label: 'AI voice agent',
                  href: '/services/ai-agent-development/ai-voice-agent',
                  desc: 'Inbound calls handled over Twilio, routed to the right person.',
                },
                {
                  label: 'Real estate website design',
                  href: '/services/real-estate-website-design',
                  desc: 'The site the agent answers for. Fast on mobile, forms people actually finish.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named and cited inside ChatGPT, Perplexity and Google AI Overviews.',
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
          eyebrow="AI in real estate FAQ"
          headline="The questions agents and brokers actually search"
          lead="Twenty-two answers on what an AI agent does for a real estate team, which CRMs and MLS feeds it connects to, and what fair housing law will not let any automated system say."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="ONE QUEUE, PROPERLY"
          headline="Find out which part of your lead flow is actually leaking"
          sub="Book a call with the founder. Bring one real queue and the CRM you run. We will walk the workflow end to end, name the integrations it needs, and tell you what an agent must never be allowed to say."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See AI agent development', href: '/services/ai-agent-development' }}
          objectionHandler="Founder-led. Fair housing limits built in, no promised results, no invented case studies, and you own the code and the connectors."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
