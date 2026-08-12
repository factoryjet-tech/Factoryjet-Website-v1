import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';

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
      'A portal enquiry at 11pm gets a real reply at 11pm, by text or email, in your brokerage voice. The agent reads the enquiry, matches it to the property, answers the question that was asked, and asks one qualifying question back. Nothing about this needs a person awake, and the whole advantage disappears if it waits for morning.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Qualifies without interrogating',
    body:
      'Timeline, area, whether they have a home to sell, whether they have spoken to a lender, and whether they already have an agent. Five things, asked across a conversation rather than fired as a form. The answers go into named CRM fields, not into a note nobody reads, so routing rules can actually use them.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Books the showing against a real calendar',
    body:
      'The agent checks live availability in Google Calendar or Outlook, offers slots that exist, writes the appointment, sends the confirmation and the reminder, and handles the reschedule. Where the brokerage runs ShowingTime or BrokerBay, it requests through that instead of around it, so the listing side stays in the loop.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Keeps the long nurture alive',
    body:
      'Most buyers and sellers are months out. That is the part humans drop, because it is a hundred small touches with no immediate payoff. An agent can run a twelve month cadence, notice when someone re-opens a saved search or clicks a listing, change the message accordingly, and pull a person in the moment the signal turns real.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Enriches and cleans the CRM',
    body:
      'Duplicate contacts merged, stage moved when the evidence says so, source recorded properly, and a short written summary of every conversation attached to the record. Unglamorous, and it is the difference between a database you can market to and forty thousand rows nobody trusts.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'Handles listing and MLS data properly',
    body:
      'Pulling status, price changes, days on market and photos from your MLS feed so the agent answers from current data instead of guessing. That means the RESO Web API where your MLS has moved to it, or a licensed IDX feed, under your MLS display rules. Never scraped from a portal, which breaks and is usually a licence violation.',
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
      'Inbound buyer enquiries from your website and portals is the usual first queue, because it is high volume, it is measurable, and slow response is where teams bleed most. Sellers, past clients and sphere follow-up come second. Handing an agent everything on day one is the most reliable way to make it fail in public.',
  },
  {
    n: '02',
    title: 'Write down what a good response actually says',
    body:
      'Pull thirty of your best recent conversations and thirty bad ones. That is the standard the agent gets measured against, and it is also where you discover your team already disagrees about what qualifying means. This step is boring and it is the one that decides whether anyone trusts the output.',
  },
  {
    n: '03',
    title: 'Connect the CRM as the system of record',
    body:
      'Follow Up Boss, Lofty, Sierra Interactive, kvCORE and BoldTrail, Real Geeks, HubSpot or Salesforce. The agent reads the contact, writes back to named fields, and logs every message. If it cannot write to the CRM, you have bought a chat widget, not an agent.',
  },
  {
    n: '04',
    title: 'Connect the listing data through the right door',
    body:
      'Your MLS feed via the RESO Web API, a distributor such as MLS Grid, Trestle or Bridge Interactive, or your IDX provider. Your MLS display rules govern what can be shown, to whom, and how fresh it has to be. We read those rules before we write the integration, not after somebody complains.',
  },
  {
    n: '05',
    title: 'Give it a calendar and a booking path',
    body:
      'Google Calendar or Microsoft Outlook for the agent side, plus ShowingTime or BrokerBay where the brokerage uses one. Rules matter more than the connection: how far ahead it may book, buffer between showings, which agents cover which areas, and what happens when nobody is free.',
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
      'For the first stretch the agent drafts and a person approves with one click. You watch the disagreement rate on real leads before it sends anything on its own. This costs a few weeks and it is the single biggest reason these projects survive contact with an actual client.',
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
      'Median seconds to first response, share of leads reached, share qualified, appointments set, and how many were still worked at day thirty and day ninety. Not message volume. An agent that sends more messages and reaches fewer people has made your database worse.',
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
  {
    label: 'Best when',
    ai: 'Volume outruns the people you can staff on it',
    isa: 'You have the headcount and the market knowledge',
    answering: 'You mainly need calls captured, not worked',
    autoresponder: 'You are one person and need any safety net',
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
      'The National Association of REALTORS® publishes guidance on AI in real estate rather than selling a product. It is the closest thing this category has to a neutral reference, it describes REALTORS® as the human in the loop for AI-assisted tasks, and it flags data bias and privacy as live risks. Read it before you read any vendor page, including this one.',
  },
  {
    domain: 'withjoy.ai',
    note: 'A packaged AI real estate assistant',
    detail:
      'Sells itself as an AI real estate agent: a ready-made product you switch on rather than a build. If your workflow matches what the product does, buying beats building, and we will say so on the call. The trade is that you take their conversation design and their integration list.',
  },
  {
    domain: 'realestatecontent.ai',
    note: 'Marketing content, not lead handling',
    detail:
      'Focused on social media and marketing content for agents. Different job from the one on this page. Plenty of teams need both, and content tools do not touch your CRM records or book anything.',
  },
  {
    domain: 'mindstudio.ai',
    note: 'A build-your-own agent platform',
    detail:
      'A general platform for assembling AI agents and workflows, with a widely read roundup of real estate agent use cases. Genuinely useful if you have someone in-house willing to own the build and maintain it. Where teams struggle is the second half: authentication, MLS rules, evaluation and the audit trail.',
  },
  {
    domain: 'voiceflow.com',
    note: 'Conversation design tooling',
    detail:
      'A platform for designing and shipping conversational agents, with real estate presented as one of its use cases. Strong at the conversation layer. The integration and compliance layer around it is still your problem to solve.',
  },
  {
    domain: 'chatbot.com',
    note: 'Website chat, well executed',
    detail:
      'A mature chatbot product with a clear explainer on AI real estate agents. If what you actually need is a good website chat that captures and routes, this is a reasonable answer and cheaper than a custom build.',
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
      'Oldroyd, McElheran and Elkington studied 1.25 million sales leads across 42 US companies. Firms that tried to contact a lead within an hour were nearly seven times as likely to have a meaningful conversation with a decision maker as those that tried an hour later, and more than sixty times as likely as those who waited a day. A separate audit of 2,241 US companies found the average response time, among those that responded at all, was 42 hours.',
    href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
  },
  {
    src: 'United States Code, 42 U.S.C. § 3604(c)',
    title: 'What the law says about the words you publish',
    body:
      'The Fair Housing Act makes it unlawful to make, print or publish any notice, statement or advertisement about the sale or rental of a dwelling that indicates any preference, limitation or discrimination based on race, colour, religion, sex, handicap, familial status or national origin. An automated message is a statement. That is the whole reason the limits on this page are written into the tools.',
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
      'RESO describes the Web API as the modern way to transport real estate data, built on open standards including OData, and says companies are moving away from older deprecated transports such as RETS. This is the door an agent should read listing data through, rather than scraping a portal.',
    href: 'https://www.reso.org/reso-web-api/',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 36 items across 7 categories, grounded in the live US
   People-Also-Ask set pulled 2026-08-12. Two PAA questions arrived with dollar
   figures in the question text; they are asked here without the figure, because
   this site carries no currency values. The FAQPage JSON-LD below is generated
   from THIS array. Never hand-write a second copy.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'jobs', label: 'What it actually does' },
  { key: 'systems', label: 'CRMs, MLS & tools' },
  { key: 'limits', label: 'Fair housing & limits' },
  { key: 'career', label: 'Agents, jobs & commission' },
  { key: 'rules', label: 'Rules people ask about' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── The basics ─────────────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is an AI agent for real estate?',
    answer:
      'An AI agent for real estate is software that works your inbound leads the way a good assistant would. It replies to a new enquiry in seconds, asks qualifying questions, books a showing on a real calendar, updates the CRM record and keeps following up for months. A licensed human still handles advice, negotiation and anything material.',
  },
  {
    category: 'basics',
    question: 'What is the difference between an AI agent and a real estate chatbot?',
    answer:
      'A chatbot writes an answer. An agent takes an action. The chatbot on your website can explain that a home has four bedrooms. An agent checks the calendar, books Tuesday at six, writes the appointment into Follow Up Boss, sends the confirmation, and tells a person which lead needs a call.',
  },
  {
    category: 'basics',
    question: 'Which AI agent is best for real estate?',
    answer:
      'There is no single best one, because the category covers four different jobs: lead response, content writing, valuation and transaction admin. Pick by the job you are losing money on. If your leads sit unanswered for hours, buy or build lead response and ignore everything else until that is fixed.',
  },
  {
    category: 'basics',
    question: 'Which AI is best for realtors?',
    answer:
      'For most individual agents the honest answer is a general assistant such as ChatGPT, Claude or Gemini for writing and thinking, plus whatever automation is already inside your CRM. A custom agent only pays off when volume is large enough that a person genuinely cannot keep up, which usually means a team or a brokerage rather than a solo agent.',
  },
  {
    category: 'basics',
    question: 'Is there a ChatGPT for real estate agents?',
    answer:
      'Several products wrap a general model in a real estate interface, and ChatGPT itself is widely used by agents for drafting. The gap is not the writing. It is that a chat window cannot see your CRM, your calendar or your MLS feed, so it cannot act. That connection is what makes something an agent.',
  },
  {
    category: 'basics',
    question: 'How is this different from your general AI agent development service?',
    answer:
      'Same engineering practice, different domain. Our parent page covers building agents for support, sales and back-office queues in any industry. This page is the real estate application: portal leads, showing scheduling, MLS data rules and fair housing limits. If you want the general version, start at AI agent development.',
  },

  /* ── What it actually does ──────────────────────────────────────────── */
  {
    category: 'jobs',
    question: 'How are real estate agents using AI?',
    answer:
      'Four clusters, in rough order of adoption. Writing: listing copy, emails, social posts. Answering: website chat and instant replies to portal leads. Admin: summarising calls, drafting follow-ups, cleaning the database. Analysis: comparable properties and market questions. The first three are settled practice. The fourth still needs a person checking the output.',
  },
  {
    category: 'jobs',
    question: 'How can I use AI as a realtor?',
    answer:
      'Start with the thing you are worst at, which for most agents is follow-up. Automate the first reply so nobody waits, and automate the ninety day nurture so nobody is forgotten. Keep the showing, the pricing conversation and the negotiation entirely human. That split gets you most of the value with almost none of the risk.',
  },
  {
    category: 'jobs',
    question: 'Can an AI agent answer leads at night and on weekends?',
    answer:
      'Yes, and that is usually where it earns its keep. Portal enquiries arrive heavily in evenings and at weekends, which is exactly when a team is least covered. The agent replies immediately, holds a short conversation, books if the person is ready, and leaves a briefed lead for the morning.',
  },
  {
    category: 'jobs',
    question: 'Can the agent book showings on my calendar?',
    answer:
      'Yes. It reads live availability from Google Calendar or Outlook, offers only slots that exist, writes the appointment, and sends confirmations and reminders. Where your brokerage runs ShowingTime or BrokerBay, it requests through that system so the listing side is not bypassed.',
  },
  {
    category: 'jobs',
    question: 'Can it call leads, not just text them?',
    answer:
      'It can, over a voice platform such as Twilio, and we would usually ask you to wait. Text and email are lower risk, easier to review and better received on a first touch. Voice is worth adding once the text agent is proven and you have the consent and recording rules sorted with your broker.',
  },
  {
    category: 'jobs',
    question: 'Will the agent write listing descriptions?',
    answer:
      'It can draft them from the property record, and a person must read every one before it is published. Listing copy is advertising, and advertising is exactly where fair housing language rules bite hardest. Draft by machine, approve by human, every time, with no exceptions for a busy week.',
  },
  {
    category: 'jobs',
    question: 'Does this replace our inside sales agents?',
    answer:
      'Usually it changes what they do rather than removing them. The agent takes first response, basic qualification and the long nurture, which is the grinding part. Your people take the conversations that need judgement, market knowledge and a relationship. Teams that fire the ISA desk on launch day tend to regret it within a quarter.',
  },
  {
    category: 'jobs',
    question: 'How is Zillow using AI?',
    answer:
      'Zillow has used machine learning for years in its valuation estimate, and has added natural language search, AI-assisted listing tools and virtual touring features. Portals are building AI into the search experience itself. That is a reason to be fast and useful when a lead reaches you, not a reason to panic.',
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
      'Yes, through the proper door: your MLS feed over the RESO Web API, a distributor such as MLS Grid, Trestle or Bridge Interactive, or your IDX provider. Your MLS display rules decide what may be shown and how fresh it must be. We do not scrape portals, which breaks quietly and usually violates a licence.',
  },
  {
    category: 'systems',
    question: 'What if our brokerage runs on spreadsheets and a shared inbox?',
    answer:
      'Then fix that first, and we will tell you so. An agent needs a system of record to write to. Without one you get fast replies that nobody can see, which is worse than slow replies everyone can. A simple CRM properly set up beats an agent bolted onto chaos.',
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
      'It may not steer. Under the Fair Housing Act it is unlawful to publish any statement about the sale or rental of a dwelling indicating a preference or limitation based on race, colour, religion, sex, handicap, familial status or national origin. An automated message is a statement, so the agent must never describe an area by who lives there, or answer questions about demographics, crime or school quality.',
  },
  {
    category: 'limits',
    question: 'How do you stop the agent from breaking fair housing rules?',
    answer:
      'Three layers, none of them a prompt. A classifier catches protected-characteristic questions before generation. The tools themselves cannot return demographic data. And every outbound message is logged so your broker can audit what was actually said. Flagged requests get one neutral reply and an immediate handoff to a licensed person.',
  },
  {
    category: 'limits',
    question: 'Can the agent give advice on price, contracts or financing?',
    answer:
      'No, and it should refuse clearly rather than hedge. Pricing advice, contract terms, repair negotiation, disclosure questions, tax and mortgage advice all leave the agent immediately with a summary attached to the record. Those are licensed conversations, and in several cases they are legal or financial advice that no automated system should be giving.',
  },
  {
    category: 'limits',
    question: 'What happens when the agent gets something wrong?',
    answer:
      'You are accountable, exactly as you would be for an assistant or a script, which is why the design points are boundaries, approvals and logs. No AI system is right every time. What good design gives you is mistakes that are visible, small, and correctable rather than silent. Every run is replayable from the log.',
  },
  {
    category: 'limits',
    question: 'What is the 30% rule in AI?',
    answer:
      'There is no formal thirty percent rule in AI. The phrase circulates loosely, usually meaning that a model gets you part of the way and a person finishes the job. The useful version for real estate is simpler: never hand an agent a task where you cannot check the output.',
  },
  {
    category: 'limits',
    question: 'What did Stephen Hawking say about AI before he died?',
    answer:
      'In a 2014 BBC interview he warned that full artificial intelligence could, in his words, "spell the end of the human race", while also noting that the basic forms in use were already useful. He was talking about general machine intelligence, not about a scheduling assistant that books showings inside your calendar.',
  },

  /* ── Agents, jobs & commission ──────────────────────────────────────── */
  {
    category: 'career',
    question: 'Is AI a threat to real estate agents?',
    answer:
      'It is a threat to the parts of the job that are typing and chasing, and not much of a threat to the rest. Nobody hires an agent because they are good at sending follow-up texts. The risk is not being replaced by AI, it is competing against a team that answers in seconds while you answer in hours.',
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
      'For research, yes. AI is genuinely good at explaining process, comparing areas on published data and drafting questions. For the transaction itself you still need someone licensed and accountable. AI does not carry fiduciary duty, cannot hold earnest money, will not attend the inspection and cannot be sued for bad advice.',
  },
  {
    category: 'career',
    question: 'Is being a real estate agent still worth it in 2026?',
    answer:
      'It depends entirely on lead flow and cost discipline, as it always has. The change is that the gap between organised agents and disorganised ones has widened, because tooling now multiplies whoever is already systematic. If you have a database and a follow-up habit, this is a good moment. If you have neither, tooling will not save you.',
  },
  {
    category: 'career',
    question: 'Do realtors still get 6% commission?',
    answer:
      'Commission rates are not set by law or by any association, and never have been. They are negotiable between the parties, and following the industry practice changes that took effect in 2024, buyers sign a written agreement with their agent before touring and offers of compensation are no longer published in the MLS. Your brokerage sets its own rates, and an AI agent should never quote one.',
  },
  {
    category: 'career',
    question: 'How much does a realtor make on a home sale?',
    answer:
      'It depends on the negotiated rate, the split with the brokerage, any referral fee, and the costs the agent carries themselves. That is why a single figure is misleading. The number that actually moves an agent income is not the rate, it is the share of enquiries that turn into conversations, which is the part this page is about.',
  },
  {
    category: 'career',
    question: 'How many homes a year does an agent need to sell to reach a six figure year?',
    answer:
      'The arithmetic depends on your average sale price, your split and your expenses, so anyone quoting a universal number is guessing. The more useful question is the one behind it: of the enquiries you already received this year, how many did you actually reach within an hour? For most teams that answer, not the transaction count, is the constraint.',
  },

  /* ── Rules people ask about ─────────────────────────────────────────── */
  {
    category: 'rules',
    question: 'What is the 3-3-3 rule in real estate?',
    answer:
      'It is an informal coaching habit rather than an official rule, and it is used a few different ways. The common version is a follow-up cadence: contact a new lead three times in three days, then three times in three weeks, then three times in three months. That cadence is exactly the kind of thing people intend to run and an agent actually runs.',
  },
  {
    category: 'rules',
    question: 'What is the 7% rule in real estate?',
    answer:
      'There is no single official seven percent rule, and the phrase is used loosely for several unrelated ideas, including a rough allowance for total selling costs and various investing heuristics. Treat any version you see as a rule of thumb from whoever wrote it, not an industry standard, and never let an automated system state one as fact.',
  },
  {
    category: 'rules',
    question: 'What is Warren Buffett’s number one rule?',
    answer:
      'The line usually quoted is never lose money, with rule two being never forget rule one. It is about protecting capital rather than chasing upside. Applied here it argues for the boring version of AI: one queue, hard limits, a human on anything material, and a log you can read afterwards.',
  },

  /* ── Working with us ────────────────────────────────────────────────── */
  {
    category: 'working',
    question: 'How long does it take to build?',
    answer:
      'A single queue with a CRM and a calendar connected is usually a matter of weeks, then a few more weeks in shadow mode before it acts alone. Adding MLS data and voice lengthens it. The variable that moves the timeline most is access: API credentials, sample conversations, and one person who can decide what a good reply looks like.',
  },
  {
    category: 'working',
    question: 'How much does an AI agent for a real estate team cost?',
    answer:
      'We will not put a figure on a page, because a number written without seeing your setup is aimed at an average rather than at you. Scope is driven by how many queues, how many systems, whether those systems have clean APIs, whether MLS data is involved, and how much conversation design your brand needs. Book a call and you get a fixed proposal instead of a range.',
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
                immediately, qualify honestly, book the showing on a real calendar, and keep the follow-up
                alive for months. Fair housing limits live in the tools, and a licensed person still handles
                anything that matters.{' '}
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
                  A worked example of the sequence, not a result from a named brokerage. We publish no client
                  names and no invented case study numbers.
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
                home has four bedrooms. An agent checks your calendar, books Tuesday at six, writes the
                appointment into Follow Up Boss, sends the confirmation, and flags to a person that this lead
                is worth a call. It reads and writes real records, which is also why the limits on it have to
                be real.
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
                is the parent service and covers building agents in any industry, including the generic{' '}
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
                data rules, and fair housing constraints that do not apply to a software company automating a
                help desk.
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
                firms contacting a lead within an hour were nearly seven times as likely to have a meaningful
                conversation with a decision maker as those that tried an hour later, and more than sixty times
                as likely as those who waited a day. A separate audit of 2,241 companies put the average
                response time, among those that replied at all, at 42 hours.
              </p>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Real estate makes that harder than most industries. Enquiries arrive in evenings and at
                weekends. The same lead usually goes to more than one agent. And the person enquiring is
                sitting on a portal with another thirty listings open. Being second is close to being nowhere.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Nobody loses to a better follow-up email',
                    s: 'They lose to whoever replied first, and the reply usually only had to be competent',
                  },
                  {
                    t: 'Evenings and weekends are the gap',
                    s: 'That is when portal enquiries peak and when a team is least covered',
                  },
                  {
                    t: 'The nurture is where humans quit',
                    s: 'Most buyers are months out, and month four is where a person stops and software does not',
                  },
                  {
                    t: 'Speed only helps if it is not rubbish',
                    s: 'An instant template that ignores the question is worse than a slow real answer',
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
              Most teams need one or two of these, not all six. Picking the one that is costing you money and
              ignoring the rest is a better first project than a platform that does everything badly.
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
              In the order they happen. If a proposal starts at step three and skips steps two, six and eight,
              you are buying a demo rather than a system.
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
                integrations it needs, and tell you plainly if buying a product beats building one. That
                conversation is free and it is with the founder, not a salesperson.
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
              Four ways teams cover inbound
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              AI agent vs an ISA desk vs an answering service vs a CRM auto-responder
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              An honest side by side, including where each one fails. We sell the first column and we will
              still tell you to keep the second if you have good people on it. Most teams that get this right
              run two of the four together.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of an AI agent, an inside sales agent desk, a human answering service and a CRM
                  auto-responder across response speed, conversation depth, long-term follow-up, CRM writeback,
                  cost behaviour, fair housing exposure and failure modes.
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
              Scroll the table sideways on smaller screens. The honest summary: an agent wins on speed,
              coverage and stamina, a good ISA still wins on judgement, and neither one saves a team that
              cannot write to a CRM.
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
              We pulled the live US results for this query on 12 August 2026. Here is who shows up and what
              they actually do. Several of them are the right answer for some teams. You should know that
              before you talk to us, not after.
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
                    'We build against your existing CRM and MLS feed rather than asking you to move onto our platform',
                    'Fair housing limits are enforced in the tool layer and the classifier, not written as a polite instruction in a prompt',
                    'One senior person runs the account. The founder scopes it, does the analysis and shows up on the calls',
                    'You get the repository, the connectors and the evaluation sets, so a different team could take it over tomorrow',
                    'We will tell you when buying a packaged product beats building one, even though building is what we sell',
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
                    'FactoryJet had 53 referring domains when we last measured, in August 2026. Established competitors in this space have far more. We are the challenger and we will not pretend otherwise',
                    'We are not a real-estate-only shop. Our agent work spans support, sales and back-office queues across several industries, and this is the vertical application of it',
                    'We publish no client names, no invented case study numbers and no testimonials we cannot stand behind, including on this page',
                    'If you want a product you can switch on this week rather than a build, a packaged tool will get you there faster and we will say so',
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
              A mismatched build wastes your season and our reputation. Read both columns before you book a
              call.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You get more inbound enquiries than your people can answer within the hour',
                    'You already run a real CRM and your data in it is roughly trustworthy',
                    'Your database has thousands of contacts nobody has spoken to in a year',
                    'Evenings and weekends are where your enquiries land and where you are least covered',
                    'You want the agent to write into your systems, not to live in a separate dashboard',
                    'Your broker will engage with the fair housing and audit questions rather than wave them through',
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
                    'You are a solo agent with a handful of leads a month. A packaged tool or your CRM automation is cheaper and enough',
                    'Your leads live in a shared inbox and a spreadsheet. Fix the system of record first',
                    'You want it to negotiate, price, advise or close. It must not, and we will not build that',
                    'You want to remove every human from the conversation. That is the version that ends in a complaint',
                    'Nobody on your side will read the logs or own the escalations after launch',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the real problem is that your website does not convert the traffic it already gets, start
                  with{' '}
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
              You should not take a vendor&rsquo;s word for how lead response or fair housing works. Four
              primary sources back the specific claims above. Open them before you hire anyone, including us.
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
              Search volume and keyword difficulty quoted for this topic come from DataForSEO, United States,
              pulled August 2026. The vendor list is what appeared on the live results for this query on the
              same date. Results move, so treat it as a snapshot. Nothing on this page is legal advice.
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
                That is engineering and judgement, and it is what we actually do.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'The person who scopes the build is the person who does the analysis' },
                  { t: 'Agents and websites in one team', s: 'If the site is the bottleneck we can fix that too, rather than filing a ticket' },
                  { t: 'Boundaries before capability', s: 'What it must never do gets written before what it will do' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no promised results' },
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
                  desc: 'The parent service. Custom agents for support, sales and back-office queues in any industry.',
                },
                {
                  label: 'AI sales agent',
                  href: '/services/ai-agent-development/ai-sales-agent',
                  desc: 'The generic inbound lead pattern: enrich, qualify, route, and write the reasoning into the CRM.',
                },
                {
                  label: 'AI scheduling agent',
                  href: '/services/ai-agent-development/ai-scheduling-agent',
                  desc: 'Booking, rescheduling and confirmation against real calendar and capacity rules, in any industry.',
                },
                {
                  label: 'AI voice agent',
                  href: '/services/ai-agent-development/ai-voice-agent',
                  desc: 'Inbound calls handled over Twilio, with collection and routing to the right person.',
                },
                {
                  label: 'Real estate website design',
                  href: '/services/real-estate-website-design',
                  desc: 'The site the agent answers for. Fast on mobile, honest search, forms people actually finish.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named and cited inside ChatGPT, Perplexity and Google AI Overviews, not just ranked.',
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
          lead="Thirty-six answers covering what an AI agent does for a real estate team, which CRMs and MLS feeds it connects to, what fair housing law will not let any automated system say, and the career questions that come with all of this. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="ONE QUEUE, PROPERLY"
          headline="Find out which part of your lead flow is actually leaking"
          sub="Book a call with the founder. Bring one real queue and the CRM you run. We will walk the workflow end to end, name the integrations it needs, tell you what an agent must never be allowed to say, and tell you plainly if buying a packaged product beats building one for you."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See AI agent development', href: '/services/ai-agent-development' }}
          objectionHandler="Founder-led. Fair housing limits built in, no promised results, no invented case studies, and you own the code and the connectors."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
