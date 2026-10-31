import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/ai-call-center-agents';
const PAGE_TITLE = 'AI Call Center Agents: Custom Voice AI for Contact Centers | FactoryJet';
const PAGE_DESC =
  "FactoryJet builds and supports custom AI voice agents on your call center's own phone system and CRM: service calls, overflow, after-hours, reminders and warm transfer to a person.";
const PAGE_MODIFIED = '2026-10-11';
const OG_IMAGE = 'https://factoryjet.com/images/us/ai-call-center-agents/hero-contact-center-team-og.jpg';

// Single source of truth for the breadcrumb trail. Feeds both the visible
// <Breadcrumbs> component and the BreadcrumbList JSON-LD below so the two
// can never drift apart (see components/v2/Breadcrumbs.tsx for why that matters).
const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Call Center Agents', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai call center',
    'ai contact center',
    'ai call center agent',
    'ai call center agents',
    'ai call center solutions',
    'ai call center software',
    'ai call agent',
    'ai voice agent for customer service',
    'ai voice agents for call centers',
    'custom ai voice agent for contact center',
    'contact center voice ai',
    'call center ai voice agent development',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    locale: 'en_US',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Four contact center agents wearing headsets at a long white desk while a team lead stands behind them holding an orange folder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI Call Center Basics' },
  { key: 'fit', label: 'Buy a Product or Have One Built' },
  { key: 'calls', label: 'Call Types' },
  { key: 'handoff', label: 'Transfer to a Person' },
  { key: 'systems', label: 'Phone System & CRM' },
  { key: 'cost', label: 'Cost & Support' },
  { key: 'rules', label: 'Calling Rules & Testing' },
];

// The ONLY FAQ array on this page. The visible <FAQ> block and the FAQPage JSON-LD
// are both generated from it, so the schema can never say something the page does not.
const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is an AI call center agent?',
    answer:
      "An AI call center agent is a voice program that answers or places phone calls for a call center. It talks with the caller in plain speech, looks things up in the center's own systems, completes routine tasks such as an order status check or an appointment change, and passes the caller to a human agent when the call needs one. FactoryJet builds custom ones on the phone system and CRM (customer record system) a center already runs, and supports them after launch.",
  },
  {
    category: 'basics',
    question: 'How can AI be used in call centers?',
    answer:
      'Five jobs cover most of it. Answering routine inbound service calls. Taking overflow calls when every human agent is busy, and calls that arrive after hours. Placing outbound reminder and follow-up calls to people who agreed to be called. Writing the call summary and updating the CRM after each call. Handing the caller to a person with the notes attached, which call centers call a warm transfer. Contact center products also sell tools that coach human agents during a call, which is a different product from a voice agent.',
  },
  {
    category: 'basics',
    question: 'Do call centers use AI?',
    answer:
      "Yes. Every contact center product we checked for it on 11 Oct 2026 lists an AI agent of its own. Genesys Cloud includes virtual agents from its first plan, Talkdesk sells Autopilot, RingCentral sells AIR Pro, and Five9, Dialpad and Aircall each list AI agents. That is six vendors out of six. The open question for a center is which calls to hand over first, and whether the vendor's built-in agent can reach the systems those calls depend on.",
  },
  {
    category: 'basics',
    question: 'Is FactoryJet an AI call center software company?',
    answer:
      'No. FactoryJet is a services company. We design, build, implement and support a custom AI voice agent for one call center at a time, on the phone system and CRM that center already uses. You own what we build: the call flows, the prompts, the connectors and the code. If a ready-made contact center product would do the job, we say so on this page and on the scoping call, before you spend anything with us.',
  },
  {
    category: 'basics',
    question: 'What is the difference between an AI call center agent and an AI receptionist?',
    answer:
      'Team size and the phone system behind it. An AI receptionist answers the main line of a small office and books the appointment. An AI call center agent works inside a center with a team of human agents, queues, a contact center platform and supervisors. It has to transfer into the right queue and write notes the next agent can use. FactoryJet builds both. Small offices should read our AI receptionist page at factoryjet.com/services/ai-receptionist.',
  },
  {
    category: 'fit',
    question: 'Which AI call center agent is the best?',
    answer:
      "It depends on where your calls already live. If your center runs Genesys Cloud, Five9, NiCE CXone or Talkdesk and the calls you want handled are standard ones, that vendor's built-in agent is the first thing to test, because it is already inside your platform. A custom agent is the better choice when the call depends on a system your platform has no connector for, or when you run two phone platforms and want one set of call rules across both. A fair ranking needs your call recordings, which is why scoping starts there.",
  },
  {
    category: 'fit',
    question: 'When should a call center buy a ready-made AI product instead of a custom build?',
    answer:
      "Buy the product when four things are true. Your contact center platform sells its own AI agent. The calls you want handled are common ones, such as an order status check or a password reset. The answers live in systems that platform already connects to. You want one vendor contract and one support desk. In that case a custom build adds work you do not need, and your platform's own agent is the sensible first step. The list prices we read on 11 Oct 2026 are in the table on this page.",
  },
  {
    category: 'fit',
    question: 'When is a custom AI voice agent the better choice?',
    answer:
      'A custom build fits when the call cannot be finished without data from a system your contact center product does not reach, such as a custom ERP or an in-house order system. It also fits when your call rules are your own (who may change a delivery address, which accounts go straight to a named person) or when you run more than one phone platform. With a custom build you own the call flows, the prompts, the connectors and the code.',
  },
  {
    category: 'fit',
    question: 'What software do most call centers use?',
    answer:
      'We could not find a public count we trust, so here is what we measured. In nine Google searches for AI call center terms on 11 Oct 2026, we counted the contact center platforms on each first page. Genesys appeared on four, and NiCE, Salesforce and Aircall on three each. That shows who ranks, which is a different thing from who has the most customers. Other contact center platforms whose pricing pages we read that day include Five9, Talkdesk, RingCentral RingCX, Twilio Flex and Amazon Connect. Their list prices are in the table on this page.',
  },
  {
    category: 'fit',
    question: 'Can an outsourced call center (BPO) use this for several client programs?',
    answer:
      "Yes. Each client program gets its own call flows, its own hand-over rules and its own connection to that client's systems, while the phone connection and the reporting are shared. That keeps one program's rules out of another program's calls. The scoping call covers how many programs start first and who approves each script. We also build white-label for agencies and outsourcers.",
  },
  {
    category: 'calls',
    question: 'Can an AI agent make calls?',
    answer:
      'Yes. A voice agent can place outbound calls as well as answer inbound ones: appointment reminders, delivery windows, payment-due notices, and a follow-up after a service visit. In the US these calls fall under federal calling rules, because the FCC ruled on 8 February 2024 that AI-generated voices count as artificial voices under the Telephone Consumer Protection Act. So the list of who may be called, and when, comes from your consent records and your own legal counsel. We build the agent to follow the policy you give us.',
  },
  {
    category: 'calls',
    question: 'Are AI calls illegal?',
    answer:
      'No. An AI voice on a call is legal in the US, but it is regulated. On 8 February 2024 the FCC ruled that calls made with AI-generated voices are artificial voice calls under the Telephone Consumer Protection Act, effective immediately. FCC rules require prior express written consent before telemarketing calls that use an artificial voice, and bar telephone solicitations to homes before 8am or after 9pm local time (47 CFR 64.1200). This is a summary of public rules and is not legal advice. Your counsel sets your calling policy.',
  },
  {
    category: 'calls',
    question: 'Can the AI agent take overflow calls when every human agent is busy?',
    answer:
      'Yes. Overflow means calls that arrive when all your agents are on other calls. Your phone platform sends those calls to the voice agent the same way it would send them to another queue. The agent handles the call types you approved and passes the rest back into your queue with a note, so the next agent does not ask the caller to repeat it. Many centers aim to answer 80% of calls in 20 seconds, the traditional service level according to Call Centre Helper. Overflow is about the other 20%.',
  },
  {
    category: 'calls',
    question: 'What happens to calls after hours?',
    answer:
      'After your team logs off, the platform routes calls to the voice agent. It finishes the calls it is allowed to finish, such as an order status check or a booking. For anything else it takes the details, tells the caller when a person will call back, and opens a ticket or callback task in your CRM so the morning shift starts with a list. If you have an on-call person for emergencies, the agent can transfer those calls to that phone using the rules you set.',
  },
  {
    category: 'calls',
    question: 'Which calls should an AI voice agent not take?',
    answer:
      "Calls that need a person's judgment or carry real distress. A caller disputing a charge, reporting a safety problem, asking for medical or legal advice, or closing an account after a death in the family should reach a human agent quickly. So should any caller who asks for a person. We write these as hand-over rules before launch, with your supervisors, and the agent follows them on every call. Gartner's survey of 5,728 customers found the top worry about AI in customer service is that reaching a person gets harder.",
  },
  {
    category: 'handoff',
    question: 'How does a warm transfer from the AI agent to a person work?',
    answer:
      'A warm transfer hands over the caller and the notes together. The agent tells the caller it is bringing in a person, writes a short note (what the caller asked and what was already done), then transfers the call into the right queue or to a named person. The note reaches the human agent through the phone connection itself or on the CRM record that opens with the call, depending on your platform. The caller does not repeat the story.',
  },
  {
    category: 'handoff',
    question: 'Do call centers still need human agents after an AI voice agent goes live?',
    answer:
      'Yes. The voice agent takes the routine calls you assign to it, and your people take the calls that need judgment or the authority to make an exception. A Gartner survey of 5,728 customers (December 2023, published 9 July 2024) found 64% would prefer companies did not use AI in customer service. Their top concern was that it becomes harder to reach a person. A center that keeps a fast route to a human agent answers that concern.',
  },
  {
    category: 'handoff',
    question: 'Will callers know they are talking to an AI?',
    answer:
      'Yes. We build the agent to say so at the start of every call, along with your company name. FCC rules for artificial voice messages already require the business to identify itself at the beginning of the message (47 CFR 64.1200(b)). Beyond the rule, callers should know what they are talking to, and that they can ask for a person at any point in the call. Any caller who asks for a person gets one.',
  },
  {
    category: 'handoff',
    question: 'What does the AI agent write in the call summary?',
    answer:
      'A short note in the layout your team already uses. A typical one has the caller and how they were matched to an account, the reason for the call, what the agent did, the outcome (answered, booked, transferred or callback promised) and any follow-up owed. It is saved to the contact or ticket in your CRM when the call ends, with the transcript linked. Your supervisors decide the fields, because they are the ones who will read the notes.',
  },
  {
    category: 'systems',
    question: 'Which phone systems can a custom AI voice agent connect to?',
    answer:
      "Any platform that can pass a call over SIP, the standard way phone systems hand calls to each other. Vendor documents we read on 11 Oct 2026 show the routes. Genesys Cloud offers BYOC Cloud trunks and an Audio Connector that streams call audio to a third-party voice bot. Amazon Connect transfers calls to queues or outside phone numbers through quick connects. Twilio can transfer a call back to a company's own SIP system. FactoryJet builds on Twilio or Telnyx and confirms the route for your platform during scoping.",
  },
  {
    category: 'systems',
    question: 'Which CRMs and business systems can the agent read and update?',
    answer:
      'Any system with an API, which is the doorway software offers to other software. FactoryJet builds HubSpot integrations and has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, so an order status call can read the live order and a booking call can write the appointment. For every system in scope, we read its API documents during scoping and put in writing what the agent will read and what it will change.',
  },
  {
    category: 'systems',
    question: 'Do we have to switch contact center platforms?',
    answer:
      'No. The voice agent is added beside the platform you have. Your platform keeps the phone numbers, the queues, the human agents and the reporting. It sends chosen calls to the voice agent and receives transfers back, the same way it would with another queue or an outside number. Your human agents keep the desktop they know. That is the main reason to build on your own phone system and CRM.',
  },
  {
    category: 'systems',
    question: 'Do we own the AI agent FactoryJet builds?',
    answer:
      'Yes. You own what we build: the call flows, the prompts, the connectors to your systems and the code. It is built for your center alone, and you do not rent it from us. FactoryJet stays on to support it, and we can keep managing the servers, AI models, APIs and maintenance so your team does not have to. If you later want another firm to take it over, the work is yours to hand them.',
  },
  {
    category: 'cost',
    question: 'How much does an AI call center cost?',
    answer:
      'It depends on whether you buy a product or have an agent built. Ready-made contact center products list seat prices: Genesys Cloud CX $75 to $240 per user a month, NiCE CXone $110 to $249 per agent, Talkdesk $85 to $225 per user, and Five9 $119 or $159 a seat with a 50-seat minimum (vendor pricing pages, 11 Oct 2026). A custom voice agent is a one-off build, which development firm Kanopy Labs puts at $15,000 to $200,000 or more (April 2026). FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'How much does an AI voice agent cost?',
    answer:
      'For a custom build, development firm Kanopy Labs gives three bands (27 April 2026): $15,000 to $40,000 for a simple agent that routes calls and answers common questions, $40,000 to $100,000 for an agent with multi-turn conversation and CRM integration, and $100,000 to $200,000 or more for a multilingual enterprise agent. ProductCrafters puts custom AI agents of all kinds at $5,000 to more than $180,000. These are market ranges for the build. FactoryJet quotes its own price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'Who looks after the AI agent after it goes live?',
    answer:
      'FactoryJet does. We can keep managing the servers, the AI models, the phone and API connections and the maintenance, so your team does not have to. That includes reviewing transcripts with your supervisors and adding call types when you are ready. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call, so you know both figures before you commit.',
  },
  {
    category: 'cost',
    question: 'How long does it take to add an AI voice agent to a call center?',
    answer:
      'The time depends on how many call types go live first and how many systems the agent must read or update. One call type on one phone platform and one CRM is the shortest route, and each extra system adds integration work. We put the timeline in writing with the fixed price after scoping. Go-live starts with overflow or after-hours calls, then widens once your supervisors are happy with the transcripts.',
  },
  {
    category: 'rules',
    question: 'How do we test the AI agent before it takes real calls?',
    answer:
      'On a private phone number first. Your own agents and supervisors call it the way customers do, with interruptions and the awkward questions your center gets. They read the transcripts, mark what was wrong, and we fix it. The agent then goes live on a narrow slice, usually overflow or after-hours calls for one call type, and widens when your supervisors sign off. Before a contract, we can show a working demo agent built on your own call scripts.',
  },
  {
    category: 'rules',
    question: 'What is the 80/20 rule in call centers?',
    answer:
      'It is a service level target: answer 80% of calls within 20 seconds. Call Centre Helper, an industry publication, calls it the traditional service level and notes that many centers now aim for 90% in 15 seconds. The target says nothing about how long the remaining callers wait. A voice agent on overflow is one way to shorten that wait, because it picks up calls that would otherwise sit in the queue.',
  },
  {
    category: 'rules',
    question: 'How do you create an AI call agent?',
    answer:
      "Four parts. Speech recognition turns the caller's words into text. A language model works out what the caller wants and decides what to say or do. Speech synthesis turns the reply into a voice. A phone connection carries the audio both ways. Services such as Twilio ConversationRelay handle the speech parts so a developer can focus on the logic, per Twilio's documentation. In a call center the larger share of the work comes after that: connecting to your CRM, writing the hand-over rules and testing with real calls.",
  },
];

// Fit table. Rendered below in the buy-or-build section.
const FIT_ROWS: ReadonlyArray<{ q: string; product: string; custom: string; receptionist: string }> = [
  {
    q: 'Best fit',
    product: "A center already on that vendor's platform, with standard call types",
    custom: 'A center whose calls depend on its own CRM, ERP or in-house systems',
    receptionist: 'One front desk or a small office line',
  },
  {
    q: 'Who sets it up',
    product: "Your admin or the vendor's services team, inside the vendor's builder",
    custom: 'FactoryJet designs, builds and implements it with your supervisors',
    receptionist: 'FactoryJet, or a ready-made receptionist product',
  },
  {
    q: 'Where it runs',
    product: "Inside the vendor's platform",
    custom: 'Beside your platform, connected through your phone system',
    receptionist: 'On the office phone number',
  },
  {
    q: 'What you pay for',
    product: 'Seat licenses, often with metered AI features on top (list prices below)',
    custom: 'A fixed build price and a fixed support price, both quoted in writing after scoping',
    receptionist: 'Covered on the AI receptionist page',
  },
  {
    q: 'Who owns it',
    product: 'The vendor owns the product. You own your settings.',
    custom: 'You own the call flows, prompts, connectors and code',
    receptionist: 'Depends on the route you choose',
  },
  {
    q: 'Hand-over to people',
    product: "Built into the platform's own routing",
    custom: 'Warm transfer into your existing queues, with the note attached',
    receptionist: 'Transfer to whoever is on call',
  },
];

// Vendor list prices. Every row was read on the vendor's own pricing page on 11 Oct 2026.
// Seat prices of named off-the-shelf products only, as rule B of the 11 Oct 2026 brief allows.
// Nothing about what a custom agent costs after launch belongs in this table or on this page.
const PRODUCT_PRICES: ReadonlyArray<{ product: string; price: string; covers: string; href: string; source: string }> = [
  {
    product: 'Genesys Cloud CX',
    price: '$75 to $240',
    covers: 'Per user a month, billed annually. Four plans, CX 1 to CX 4, named license.',
    href: 'https://www.genesys.com/pricing',
    source: 'genesys.com/pricing',
  },
  {
    product: 'NiCE CXone',
    price: '$110 to $249',
    covers: 'Per agent a month. Five packages, Omnichannel Suite to Ultimate Suite.',
    href: 'https://www.nice.com/pricing',
    source: 'nice.com/pricing',
  },
  {
    product: 'Talkdesk',
    price: '$85 to $225',
    covers: 'Per user a month. Digital Essentials to Industry Experience Clouds.',
    href: 'https://www.talkdesk.com/pricing/',
    source: 'talkdesk.com/pricing',
  },
  {
    product: 'Five9',
    price: '$119 or $159',
    covers: 'Per concurrent seat a month for the Digital and Core bundles, with a 50-seat minimum. Three higher bundles are quoted by sales.',
    href: 'https://www.five9.com/products/pricing',
    source: 'five9.com/products/pricing',
  },
  {
    product: 'RingCentral RingCX',
    price: 'From $65',
    covers: 'Per user a month.',
    href: 'https://www.ringcentral.com/ringcx.html',
    source: 'ringcentral.com/ringcx.html',
  },
  {
    product: 'Aircall',
    price: 'From $30 or $50',
    covers: 'Starting price per license a month, billed annually, for the Essentials and Professional plans.',
    href: 'https://aircall.io/pricing/',
    source: 'aircall.io/pricing',
  },
  {
    product: 'Twilio Flex',
    price: '$150',
    covers: 'Per named user a month. The other option is $1 per active user hour.',
    href: 'https://www.twilio.com/en-us/flex/pricing',
    source: 'twilio.com/en-us/flex/pricing',
  },
  {
    product: 'Amazon Connect',
    price: 'Usage based',
    covers: 'Billed by usage. AWS states no seat-based licensing, no minimums and no long-term contracts.',
    href: 'https://aws.amazon.com/products/connect/customer/pricing/',
    source: 'aws.amazon.com (Connect pricing)',
  },
];

// One example call, start to finish. Illustrative sequence, not a client project.
const EXAMPLE_CALL_STEPS: ReadonlyArray<{ name: string; text: string }> = [
  {
    name: 'The call arrives.',
    text: 'Every human agent is busy, so your platform routes the call to the voice agent over SIP.',
  },
  {
    name: 'The caller is recognized.',
    text: 'The agent looks up the phone number in your CRM, greets the caller with your company name and says it is an AI assistant.',
  },
  {
    name: 'The question is answered.',
    text: 'The caller asks where an order is. The agent confirms the order number, reads the status from the ERP and gives the delivery date.',
  },
  {
    name: 'The call moves past what the agent may do.',
    text: 'The caller asks to change the delivery address. Your policy says a person approves address changes.',
  },
  {
    name: 'The hand-over.',
    text: 'The agent says a person is coming, writes the note and transfers the call into the order support queue.',
  },
  {
    name: 'The note is saved.',
    text: 'The human agent sees who is calling and what was already done. When the call ends, the summary and the transcript are on the ticket.',
  },
];

// Single source for the rollout steps. Feeds the visible <ol> and the HowTo JSON-LD.
const ROLLOUT_STEPS: ReadonlyArray<{ name: string; text: string }> = [
  {
    name: 'Call Review and Scope',
    text: 'We read a sample of your call recordings or transcripts and your report of top call reasons. Then we agree with your supervisors which call types go first, what the agent may do, and what it must hand over.',
  },
  {
    name: 'Phone and System Connections',
    text: 'We connect the agent to your phone platform over SIP and to your CRM or ERP through their APIs, in a test setup first. You get a written list of what the agent will read and what it will change.',
  },
  {
    name: 'Call Flows, Hand-Over Rules and Note Format',
    text: 'We build the conversation for each call type, the rules for transferring to a person, and the summary the agent saves after every call.',
  },
  {
    name: 'Testing on a Private Number',
    text: 'Your own agents and supervisors call the agent the way customers do. They read the transcripts and mark what was wrong, and we fix and retest.',
  },
  {
    name: 'Narrow Go-Live, Then Support',
    text: 'The agent starts on overflow or after-hours calls for one call type and widens when your supervisors sign off. FactoryJet stays on and can keep managing the servers, AI models, APIs and maintenance.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: '2026-10-11T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  inLanguage: 'en-US',
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & CEO',
    worksFor: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'AI Call Center Agents',
  serviceType: 'Custom AI Voice Agent Development for Call Centers and Contact Centers',
  description:
    'Custom AI voice agents built and supported on the phone system and CRM a call center already runs. They take routine inbound service calls, overflow and after-hours calls, place outbound reminder calls, write call summaries and transfer callers to a human agent with the notes attached.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Call Center Agent Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inbound Service Call Voice Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Overflow and After-Hours Call Voice Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Outbound Reminder and Follow-Up Call Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Call Summary and CRM Update Integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Warm Transfer From Voice Agent to Human Agent',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet Builds and Rolls Out a Call Center Voice Agent',
  description:
    'The five phases FactoryJet follows to add a custom AI voice agent to a call center that keeps its existing phone system and CRM.',
  step: ROLLOUT_STEPS.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function AiCallCenterAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main className={`${styles.page} min-h-screen bg-white text-[#14110F]`}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className={`${styles.hero} relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden`}>
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`${styles.heroCopy} lg:col-span-7`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#B23E13] font-bold tracking-wide">
                    // CUSTOM AI VOICE AGENTS FOR CALL CENTERS &amp; CONTACT CENTERS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">AI Call Center Agents, Built on{' '}
                  <span className="text-[#F05A28]">Your Phone System and CRM.</span></h1>

                <p className={`${styles.heroLead} text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl`}>
                  Most searches for an AI call center lead to software.
                </p>

                <div className={`${styles.heroForm} mb-8`}>
                  <HeroInlineForm
                    source="ai-call-center-agents"
                    region="us"
                    submitLabel="See a demo on my data"
            trustText="Working software on your own data before you sign. Founder replies within 24 hours."
          />
                </div>

                <p className={`${styles.heroDetails} text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl`}> This page describes a service. FactoryJet designs, builds, implements and supports a custom AI voice agent inside the phone system and CRM your center already runs. It takes routine service calls, overflow and after-hours calls, places reminder calls, writes the call summary, and passes the caller to a person with the notes attached. Further down we say when a ready-made product is the better buy.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Runs on Your Phone System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Warm Transfer With Notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>You Own the Build</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/us/ai-call-center-agents/hero-contact-center-team.webp"
                      alt="Four contact center agents wearing headsets sit at a long white desk while a team lead stands behind them holding an orange folder"
                      width={1200}
                      height={800}
                      priority
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>WHAT THE VOICE AGENT TAKES</span>
                      <span className="text-[#0F7A55] font-bold">ROUTINE CALLS</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      Service calls, overflow, after-hours and reminders. People take the rest.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST EXTRACTION BLOCK (AEO / AIO ENGINE TARGET) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#F05A28]/30 shadow-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-[#B23E13] font-bold mb-3">
                // Short answer: what is an AI call center agent?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI call center agent is a voice program that answers or places calls for a call center, completes routine tasks in the center&apos;s own systems, and transfers the caller to a human agent when needed. FactoryJet builds and supports custom ones on your existing phone system and CRM. If your platform&apos;s built-in agent covers your calls, buy that instead.
              </p>
            </div>
          </div>
        </section>

        {/* THREE CHECKED FACTS, EACH WITH ITS SOURCE */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // READ ON 11 OCT 2026
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">Three Facts We Checked Before Writing This Page.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  7 of 10
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Google Results Were Software Vendors
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  On 11 Oct 2026 we read the first page of Google for the search ai call center. Seven of the ten results were pages from software and platform companies: NextLevel, NiCE, Zendesk, Genesys, IBM, Salesforce and ElevenLabs. The other three were a vendor list, a Reddit thread and an open-source project on GitHub. A center that wants an agent built on its own systems has to look further.
                </p>
                <p className="text-xs font-mono text-[#6E655F]">
                  Source: FactoryJet reading of US Google results, 11 Oct 2026
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  80 / 20
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  The Traditional Answer Target
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Call Centre Helper describes the traditional service level as 80% of calls answered in 20 seconds. The target is silent on how long everyone else waits. Overflow calls, the ones that arrive when every agent is busy, are where a voice agent is simplest to add and simplest to measure.
                </p>
                <a
                  href="https://www.callcentrehelper.com/industry-standards-metrics-125584.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#B23E13] hover:underline"
                >
                  Source: Call Centre Helper, industry standard metrics &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  64%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Of Customers Would Prefer No AI in Service
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Gartner surveyed 5,728 customers in December 2023. 64% said they would prefer companies did not use AI in customer service, and the top concern was that reaching a person gets harder. So we design the route to a human agent first, including what that agent already knows when they pick up.
                </p>
                <a
                  href="https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#B23E13] hover:underline"
                >
                  Source: Gartner press release, 9 July 2024 &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BUY OR BUILD: FIT TABLE + VENDOR LIST PRICES */}
        <section id="buy-or-build" className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // SOFTWARE OR A BUILD
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">When to Buy a Contact Center Product, and When to Have an Agent Built.</h2>
              <p className="text-lg text-[#46403B]">
                Both are sound choices for different centers. The first table helps you place yours. The second lists what the products cost, taken from each vendor&apos;s own pricing page. If you run one front desk and no queue, skip both and read our{' '}
                <Link href="/services/ai-receptionist" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                  AI receptionist
                </Link>{' '}
                page.
              </p>
            </div>

            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="When to Buy a Contact Center Product, and When to Have an Agent Built.">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <caption className="sr-only">
                  How a ready-made contact center AI product, a custom voice agent built by FactoryJet and an AI receptionist for a small office compare
                </caption>
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">QUESTION.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">READY-MADE CONTACT CENTER AI.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#B23E13] bg-[#FFF8F5]">CUSTOM VOICE AGENT, BUILT BY FACTORYJET.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">AI RECEPTIONIST, SMALL OFFICE.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  {FIT_ROWS.map((row) => (
                    <tr key={row.q}>
                      <th scope="row" className="p-4 sm:p-6 font-bold text-[#14110F]">{row.q}</th>
                      <td className="p-4 sm:p-6">{row.product}</td>
                      <td className="p-4 sm:p-6 font-semibold text-[#14110F] bg-[#FFF8F5]">{row.custom}</td>
                      <td className="p-4 sm:p-6">{row.receptionist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 max-w-3xl mb-8">
              <h3 className="text-2xl font-extrabold text-[#14110F] mb-3">List Prices of Eight Contact Center Products.</h3>
              <p className="text-base text-[#46403B] leading-relaxed">
                US dollars, read on each vendor&apos;s pricing page on 11 Oct 2026. These are seat prices. Phone usage, AI features and setup are often extra, so check the vendor page before you budget.
              </p>
            </div>

            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="List Prices of Eight Contact Center Products.">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <caption className="sr-only">
                  List prices of eight contact center products, read on each vendor pricing page on 11 Oct 2026
                </caption>
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">PRODUCT.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">LISTED PRICE.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">WHAT THE PRICE COVERS.</th>
                    <th scope="col" className="p-4 sm:p-6 font-bold text-[#14110F]">SOURCE.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  {PRODUCT_PRICES.map((row) => (
                    <tr key={row.product}>
                      <th scope="row" className="p-4 sm:p-6 font-bold text-[#14110F]">{row.product}</th>
                      <td className="p-4 sm:p-6 font-semibold text-[#14110F] whitespace-nowrap">{row.price}</td>
                      <td className="p-4 sm:p-6">{row.covers}</td>
                      <td className="p-4 sm:p-6">
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#B23E13] underline hover:text-[#F05A28]"
                        >
                          {row.source}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-[#46403B] leading-relaxed max-w-4xl">
              Three details from those pages change a budget. Five9 sets a 50-seat minimum on its listed bundles. Genesys meters some AI features through AI Experience tokens on top of the seat price. Dialpad prices its AI Agent per conversation, through credits, and its pricing page shows no figure for it.
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#6E655F] font-bold uppercase tracking-wider mb-3">
                  // BUY THE PRODUCT WHEN
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-4">Your Platform&apos;s Own Agent Already Reaches the Answer.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Your contact center platform sells its own AI agent.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> The calls are common ones, such as an order status check or a password reset.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> The answers sit in systems that platform already connects to.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> You want one vendor contract and one support desk.
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#F05A28]/40">
                <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-3">
                  // HAVE ONE BUILT WHEN
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-4">The Call Depends on Systems Only You Run.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> The call needs data from a custom ERP or an in-house order system with no ready connector.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> You run two phone platforms and want one set of call rules across both.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Your hand-over rules are your own and do not fit a product&apos;s builder.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#F05A28]">&bull;</span> You want to own the call flows, the prompts, the connectors and the code.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY GRID */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // WHAT THE VOICE AGENT DOES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Six Jobs We Build the Agent to Do.</h2>
              <p className="text-lg text-[#46403B]">
                Each job is scoped with your supervisors before any code is written. Voice is one channel. If most of your contacts arrive by chat or email, our{' '}
                <Link href="/services/ai-customer-support-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                  AI customer support agents
                </Link>{' '}
                service covers the written side.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Inbound Service Calls.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers the routine calls your team gets most: where is my order, can I move my appointment, what are your hours, how do I reset this. It looks up the answer in your systems and finishes the task on the call.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Caller matched to an account by phone number
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Live data read from your CRM or ERP
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Overflow and After-Hours.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Takes the calls that arrive when every human agent is busy, and the ones that come in after your team logs off. Your platform sends them over like any other queue.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Callback tasks waiting for the morning shift
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> On-call transfer for emergencies you define
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Outbound Reminders and Follow-Up.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Calls people who agreed to be called, for appointment reminders, delivery windows, payment-due notices and a check-in after a service visit. Calling hours and opt-outs follow the policy your counsel sets.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Call list drawn from your consent records
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> A spoken stop request is written to the record
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Call Summaries and CRM Updates.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Writes a short note after every call and saves it to the contact or ticket: who called, why, what was done and what is owed. Supervisors choose the fields.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Transcript linked to the record
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> An outcome field your reports can count
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Warm Transfer to a Person.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Passes the caller to a human agent with the notes attached, so nobody asks the caller to repeat the story. The agent says a person is coming, then transfers into the right queue.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Hand-over rules written with your supervisors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Any caller who asks for a person gets one
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#B23E13] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Call Review for Supervisors.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Every call leaves a transcript and an outcome, plus the reason for the transfer where there was one. Supervisors review them the way they review human calls, and their notes become our fix list.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Wrong answers corrected, then retested
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> New call types added when you approve them
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Send us your top five call reasons."
          sub="Tell us your phone platform, your CRM and the calls your team gets most. We will tell you which ones a voice agent can take, and whether your platform's own agent would do the job."
          label="Get a free call flow review"
        />

        {/* WHERE IT FITS: keeps this page about centers with a team of agents and
            points small offices and written-channel teams at their own pages. */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // WHERE A CUSTOM VOICE AGENT FITS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Centers With a Team of Agents, a Queue and Their Own Systems.</h2>
              <p className="text-lg text-[#46403B]">
                A call center agent and a receptionist are different builds. This page is for centers with a team of human agents and a contact center platform. The cards show the setups we build for, and where another FactoryJet page is the better read. If you run the phone line of an insurance agency or carrier, see{' '}
                <Link href="/services/insurance-ai-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                  AI agents for insurance
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { h: 'In-house customer service centers', d: 'A retail or service company with its own agents. The voice agent reads orders and bookings from the systems the company already runs.', href: null, cta: null },
                { h: 'Centers running two phone platforms', d: 'One set of call rules and one note format across both platforms, while each keeps its own queues and its own reporting.', href: null, cta: null },
                { h: 'Outsourced centers and BPOs', d: 'Several client programs on one floor. Each program gets its own call flows and hand-over rules, and its own connections to the systems of that client.', href: null, cta: null },
                { h: 'Order and delivery support lines', d: 'Order status and delivery windows read live from the store or the ERP. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs.', href: '/services/erp-ai-agents', cta: 'See ERP AI agents' },
                { h: 'Chat and email support teams', d: 'If most contacts are written, an agent for chat and email is the better first build, with voice added later.', href: '/services/ai-customer-support-agents', cta: 'See AI customer support agents' },
                { h: 'Small offices and front desks', d: 'One main line, a booking at the end of most calls and no queue. That is an AI receptionist, a smaller build.', href: '/services/ai-receptionist', cta: 'See the AI receptionist service' },
              ].map((x) => (
                <div key={x.h} className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{x.h}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">{x.d}</p>
                  {x.href ? (
                    <Link href={x.href} className="text-sm font-bold text-[#B23E13] underline hover:text-[#F05A28]">
                      {x.cta} &rarr;
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE FIVE CALL TYPES, ONE BY ONE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // THE FIVE CALL TYPES, ONE BY ONE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">What Each Call Looks Like When the Agent Takes It.</h2>
              <p className="text-lg text-[#46403B]">
                Each one is written the way we scope it: what the agent does for the caller, and where it stops.
              </p>
            </div>

            <div className="space-y-16">
              {/* CALL TYPE 1: INBOUND SERVICE CALLS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/us/ai-call-center-agents/inbound-service-caller.webp"
                        alt="A man in a grey sweatshirt stands beside a white washing machine holding a phone to his ear and a folded paper booklet in his other hand"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                    // 01 INBOUND SERVICE CALLS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Routine Service Calls, Finished on the Call.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    A caller wants to know where an order is. The agent matches the phone number to an account, confirms one detail to be sure it has the right person, reads the order from your system and gives the date. If the caller then asks to change the delivery address and your policy says a person approves that, the agent hands over with the note already written. Where the order data sits in an ERP, our{' '}
                    <Link href="/services/erp-ai-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      ERP AI agents
                    </Link>{' '}
                    page covers that side of the build.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Account Matched by Phone Number.</li>
                    <li>&bull; One Identity Check Before Details.</li>
                    <li>&bull; Live Read From CRM or ERP.</li>
                    <li>&bull; Hand-Over When Policy Requires.</li>
                  </ul>
                </div>
              </div>

              {/* CALL TYPE 2: OVERFLOW AND AFTER-HOURS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                    // 02 OVERFLOW AND AFTER-HOURS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">The Calls That Arrive When Nobody Is Free.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    The traditional target of 80% of calls answered in 20 seconds leaves the other callers waiting, and after closing time every caller waits until morning. Your platform routes both groups to the voice agent. It finishes what it is allowed to finish. For the rest it takes the details, says when a person will call back, and opens the callback task in your CRM.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Routed by Your Platform, Like a Queue.</li>
                    <li>&bull; Callback Tasks Ready for the Morning.</li>
                    <li>&bull; On-Call Transfer for Emergencies.</li>
                    <li>&bull; Same Rules as Daytime Calls.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/us/ai-call-center-agents/after-hours-empty-floor.webp"
                        alt="An empty contact center floor at dusk with headsets resting on two rows of white desks and one orange desk lamp switched on"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CALL TYPE 3: OUTBOUND REMINDERS AND FOLLOW-UP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/us/ai-call-center-agents/outbound-reminder-call.webp"
                        alt="A woman with a silver bob in a denim shirt holds a phone to her ear in a sunlit kitchen and touches a blank paper wall calendar"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                    // 03 OUTBOUND REMINDERS AND FOLLOW-UP
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Reminder and Follow-Up Calls People Agreed To.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Appointment reminders and delivery windows are calls customers expect. In the US they are regulated. The{' '}
                    <a
                      href="https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                    >
                      FCC ruled on 8 February 2024
                    </a>{' '}
                    that AI-generated voices count as artificial voices under the Telephone Consumer Protection Act, and{' '}
                    <a
                      href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                    >
                      47 CFR 64.1200
                    </a>{' '}
                    bars telephone solicitations to homes before 8am or after 9pm local time. Your counsel sets the consent and calling policy. We build the agent to follow it and to log every opt-out.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Call List From Your Consent Records.</li>
                    <li>&bull; Calling Window Set by Your Policy.</li>
                    <li>&bull; Spoken Opt-Outs Written to the CRM.</li>
                    <li>&bull; Business Named at the Start of the Call.</li>
                  </ul>
                </div>
              </div>

              {/* CALL TYPE 4: CALL SUMMARIES AND CRM UPDATES (example note card, no photograph) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                    // 04 CALL SUMMARIES AND CRM UPDATES
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">A Note Your Team Can Use, Saved Where They Already Look.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    After each call the agent writes a short note and saves it to the contact or ticket in your CRM, with the transcript linked. Supervisors choose the fields. FactoryJet builds HubSpot integrations and connects other CRMs and ticket systems through their APIs, as part of our{' '}
                    <Link href="/services/ai-integration-services" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      AI integration services
                    </Link>
                    .
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Saved When the Call Ends.</li>
                    <li>&bull; Transcript Linked to the Record.</li>
                    <li>&bull; Outcome Field for Your Reports.</li>
                    <li>&bull; Fields Chosen by Supervisors.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-6 sm:p-8 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-4">
                      <span>EXAMPLE NOTE LAYOUT</span>
                      <span className="font-bold text-[#B23E13]">NOT A REAL CALL</span>
                    </div>
                    <dl className="divide-y divide-[#E7DED6] rounded-xl border border-[#E7DED6] bg-white text-sm">
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <dt className="font-mono text-xs uppercase text-[#6E655F]">Caller</dt>
                        <dd className="col-span-2 text-[#14110F]">Matched to an account by phone number</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <dt className="font-mono text-xs uppercase text-[#6E655F]">Reason</dt>
                        <dd className="col-span-2 text-[#14110F]">Delivery date for an open order</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <dt className="font-mono text-xs uppercase text-[#6E655F]">Action</dt>
                        <dd className="col-span-2 text-[#14110F]">Read the order status and gave the date</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <dt className="font-mono text-xs uppercase text-[#6E655F]">Outcome</dt>
                        <dd className="col-span-2 text-[#14110F]">Answered, no transfer</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <dt className="font-mono text-xs uppercase text-[#6E655F]">Follow-up</dt>
                        <dd className="col-span-2 text-[#14110F]">Text confirmation sent</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* CALL TYPE 5: WARM TRANSFER TO A PERSON */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/us/ai-call-center-agents/warm-transfer-handover.webp"
                        alt="A seated woman in a headset writes on a notepad with an orange pen while a man standing beside her puts on a second headset"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                    // 05 WARM TRANSFER TO A PERSON
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Hand-Over to a Person, With the Notes Attached.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    A warm transfer hands over the caller and the notes together. The agent tells the caller a person is coming, writes the note, and transfers into the right queue. Twilio&apos;s documentation describes a header called{' '}
                    <a
                      href="https://www.twilio.com/docs/voice/api/sip-interface"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                    >
                      User-to-User Information
                    </a>{' '}
                    that carries context with a call. Where a platform does not pass it, the note is written to the CRM record that opens when the call arrives.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Any Caller Can Ask for a Person.</li>
                    <li>&bull; Note Written Before the Transfer.</li>
                    <li>&bull; Transfer Into Your Existing Queues.</li>
                    <li>&bull; Rules Agreed With Supervisors.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT CONNECTS: 8-POINT PHONE AND SYSTEM BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // HOW IT CONNECTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">How the Agent Plugs Into Your Phone System and CRM.</h2>
              <p className="text-lg text-[#46403B]">
                No platform swap. The agent is added beside what you run. The three vendor routes below come from each vendor&apos;s own documentation, read on 11 Oct 2026, and we confirm the route for your platform during scoping.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">01 // PHONE CONNECTION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Calls Arrive Over SIP.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  SIP is the standard way phone systems hand calls to each other. Your platform sends chosen calls to the voice agent the way it would send them to another queue or an outside number. Your numbers stay where they are. FactoryJet builds on Twilio or Telnyx.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">02 // GENESYS CLOUD</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">BYOC Cloud and Audio Connector.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Genesys documents two routes.{' '}
                  <a
                    href="https://help.genesys.cloud/articles/about-byoc-cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                  >
                    BYOC Cloud
                  </a>{' '}
                  defines SIP trunks between Genesys Cloud and outside carriers.{' '}
                  <a
                    href="https://help.genesys.cloud/articles/about-audio-connector/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                  >
                    Audio Connector
                  </a>{' '}
                  streams call audio both ways to a third-party voice bot and passes call data such as the caller&apos;s number and a conversation ID.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">03 // AMAZON CONNECT</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Quick Connects for Transfers.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  AWS, which now labels the product Amazon Connect Customer, documents{' '}
                  <a
                    href="https://docs.aws.amazon.com/connect/latest/adminguide/transfer.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                  >
                    transfers to queues and to outside phone numbers
                  </a>{' '}
                  through quick connects. An outside phone number is one way to reach a voice agent that sits beside the platform.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">04 // TWILIO</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">SIP Transfer Back to Your System.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Twilio&apos;s{' '}
                  <a
                    href="https://www.twilio.com/docs/voice/twiml/refer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                  >
                    Refer instruction
                  </a>{' '}
                  transfers a caller from Twilio back to a company&apos;s own SIP system. That is how a call the voice agent answered returns to your queue for a human agent.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">05 // CALLER LOOKUP</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">The Account Is Found While the Call Connects.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent looks up the caller&apos;s number in your CRM as the call connects, so a known customer is not asked for details you already hold. Unknown numbers get the questions your team would ask.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">06 // SYSTEMS OF RECORD</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Reads and Writes Through APIs.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Orders, bookings, tickets and accounts are read and updated through each system&apos;s API, the doorway software offers to other software. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, and we build HubSpot integrations.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">07 // ALLOWED ACTIONS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">A Short, Named List of What the Agent May Do.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Check an order, move an appointment, open a ticket, send a text. Anything off the list is a hand-over to a person. The list is agreed in writing before launch and changed only when you approve it.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">08 // CALL REVIEW</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">A Transcript and an Outcome for Every Call.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Each call leaves a transcript and an outcome, plus a transfer reason where there was one. Supervisors read them, and what they flag becomes the fix list for the next release.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* BEFORE YOU BUILD: speed, US calling rules, when to skip the build */}
        <section id="before-you-build" className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // BEFORE ANY VOICE AGENT TAKES YOUR CALLS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Reply Speed, US Calling Rules and When to Skip the Build.</h2>
              <p className="text-lg text-[#46403B]">
                Callers judge a voice agent on how fast it replies. Regulators judge its outbound calls. And some centers should not commission a build at all.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#14110F] mb-2">A Reply Has to Land in Under a Second.</h3>
              <p className="text-sm text-[#46403B] mb-6 max-w-3xl">
                Development firm{' '}
                <a
                  href="https://kanopylabs.com/blog/how-much-does-it-cost-to-build-an-ai-voice-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]"
                >
                  Kanopy Labs
                </a>{' '}
                puts the limit at about 800 milliseconds of silence before a phone reply starts to feel broken (27 April 2026). Three steps share that time on every turn.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">STEP 1 // LISTEN</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">Speech becomes text.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">The caller&apos;s words are written down as they speak, with a word list for your product names and order codes.</p>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">STEP 2 // DECIDE</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">The model picks the next move.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">It works out what the caller wants and checks your CRM or ERP through its API when it needs a fact.</p>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">STEP 3 // SPEAK</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">Text becomes a voice.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">The reply is spoken while it is still being produced, so the agent starts talking without a gap.</p>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">WHEN A LOOKUP RUNS LONG</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">A short holding line.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">If your system takes longer to answer, the agent says it is checking, so the caller is not left in silence.</p>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#14110F] mb-2">US Rules for Outbound Calls.</h3>
              <p className="text-sm text-[#46403B] mb-6 max-w-3xl">
                Answering calls people make to you is one thing. Calling them is regulated. This is a summary of public rules, read on 11 Oct 2026. It is not legal advice, and your counsel sets your policy.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0">
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">FCC RULING, 8 FEB 2024</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">AI voices count as artificial voices.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">The FCC ruled that calls made with AI-generated voices are artificial under the Telephone Consumer Protection Act, effective immediately. Telemarketing calls with an artificial voice need prior express written consent.</p>
                  <a
                    href="https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#B23E13] hover:underline"
                  >
                    Source: FCC news release &rarr;
                  </a>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">CALLING WINDOW</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">No solicitation calls to homes before 8am or after 9pm.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">47 CFR 64.1200(c) sets the window in the called person&apos;s local time. We build the dialing schedule around the time zone of the person being called.</p>
                  <a
                    href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#B23E13] hover:underline"
                  >
                    Source: eCFR, 47 CFR 64.1200 &rarr;
                  </a>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">IDENTITY AND OPT-OUT</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">The business is named at the start.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">47 CFR 64.1200(b) requires artificial voice messages to state who is calling at the beginning. The same section lets a person revoke consent by any reasonable method, so a spoken stop request is written to the record.</p>
                  <a
                    href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#B23E13] hover:underline"
                  >
                    Source: eCFR, 47 CFR 64.1200 &rarr;
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#14110F] mb-2">When a Custom Build Is the Wrong Choice.</h3>
              <p className="text-sm text-[#46403B] mb-6 max-w-3xl">Some centers should buy a product, and one kind of call should stay with people.</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0">
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">YOUR PLATFORM ALREADY DOES IT</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">The built-in agent covers your calls.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">If your vendor&apos;s own AI agent reaches the systems your calls depend on, turn that on first. A custom build would repeat work your platform already offers.</p>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">ONE FRONT DESK</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">A small office with no queue.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    That is a receptionist job, and a smaller build. Our{' '}
                    <Link href="/services/ai-receptionist" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      AI receptionist service
                    </Link>{' '}
                    covers it, and our{' '}
                    <Link href="/blog/best-ai-receptionist-small-business" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      guide to AI receptionists for small business
                    </Link>{' '}
                    compares the ready-made options.
                  </p>
                </li>
                <li className="p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="font-mono text-xs text-[#B23E13] font-bold mb-2">JUDGMENT CALLS</div>
                  <p className="text-base font-bold text-[#14110F] mb-2">Advice only a licensed person may give.</p>
                  <p className="text-sm text-[#46403B] leading-relaxed">A voice agent should not give medical, legal, tax or financial advice. In those centers it books and routes, then hands the caller to a person.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WORKED EXAMPLE: ONE CALL, RING TO NOTE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // WORKED EXAMPLE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">One Order Status Call, From First Ring to Saved Note.</h2>
              <p className="text-lg text-[#46403B]">
                An example sequence, written to show the order of events. It is not a client project.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
              {EXAMPLE_CALL_STEPS.map((step, index) => (
                <li key={step.name} className="flex gap-4 p-6 rounded-2xl bg-white border border-[#E7DED6]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 text-[#B23E13] font-bold font-mono flex items-center justify-center">{index + 1}</div>
                  <div>
                    <h3 className="text-base font-bold text-[#14110F] mb-1">{step.name}</h3>
                    <p className="text-sm text-[#46403B] leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-3xl">
              Steps four and five are where a build is won or lost. The rule that a person approves address changes came from the center, and the agent followed it without arguing with the caller. Every center has rules like that one, and writing them down is most of the scoping work.
            </p>
          </div>
        </section>

        {/* ROLLOUT PROCESS: RENDERED FROM THE SAME ARRAY AS THE HOWTO SCHEMA */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                // ROLLOUT PROCESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">How We Build and Roll Out a Call Center Voice Agent.</h2>
              <p className="text-lg text-[#46403B]">
                Five phases. Your phone numbers and queues stay live throughout. The timeline and the fixed price are given in writing after the scoping call.
              </p>
            </div>

            <ol className="space-y-6">
              {ROLLOUT_STEPS.map((step, index) => (
                <li key={step.name} className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B23E13] text-white font-bold font-mono flex items-center justify-center">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#14110F] mb-2">{step.name}.</h3>
                    <p className="text-sm text-[#46403B] leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-3xl">
              Before a contract, we can show a working demo agent built on your own call scripts and sample data. The method is the same one behind our wider{' '}
              <Link href="/services/ai-agent-development" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                AI agent development
              </Link>{' '}
              practice: connect to the systems a business already runs, and agree in writing what the agent may do. If you are comparing builders, our{' '}
              <Link href="/blog/best-ai-voice-agent-development-companies-2026" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                list of AI voice agent development companies
              </Link>{' '}
              sets the main firms side by side.
            </p>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_card-832.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#B23E13] font-bold">
                      Founder &amp; CEO, FactoryJet
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#B23E13] hover:underline"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-[#B23E13] font-bold uppercase tracking-wider mb-2">
                  // SCOPING WITH THE FOUNDER
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Scoping Calls Are Led by Founder Bhavesh Barot.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  A voice agent that mishandles one kind of call costs the trust the other calls earned, so scoping is done by the person accountable for the build. Bhavesh leads the scoping call himself. We go through your phone platform, your CRM, your top call reasons and the calls that must always reach a person, before any code is written.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  We work remotely with US clients and schedule calls in US business hours. FactoryJet has delivered projects for more than 500 businesses, and what we build for your center is yours.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#B23E13] text-white font-bold hover:bg-[#8F3210] transition-colors shadow-md text-sm"
                  >
                    Book a Scoping Call With Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request a call center agent proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// AI CALL CENTER QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions About AI Call Center Agents"
          lead="What an AI call center agent does, when to buy a product and when to have one built, how it connects to your phone system and CRM, what it costs and which US calling rules apply."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#B23E13] font-bold tracking-wide">
                // START WITH YOUR CALL REASONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Bring Your Top Call Reasons. We Map the First Call Type.
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute scoping call with our founder. We look at your phone platform, your CRM and the calls your team gets most, then tell you whether to turn on your platform&apos;s own agent or have one built. If a build fits, you get a fixed price in writing.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#B23E13] text-white font-bold hover:bg-[#8F3210] transition-colors shadow-lg text-base"
              >
                Book a 30-Minute Scoping Call
              </a>
              <ModalCTAButton
                label="Get a free call flow review"
                region="us"
                modalVariant="ai"
                btnVariant="secondary-light"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
