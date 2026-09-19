import type { Metadata } from 'next';
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

const CANONICAL_URL = 'https://factoryjet.com/services/ai-receptionist';
const PAGE_TITLE = 'AI Receptionist | Custom 24/7 AI Phone Answering | FactoryJet';
const PAGE_DESC =
  'A custom AI receptionist that answers every call 24/7, qualifies the caller, and books the job straight into your CRM or scheduling software. Built for your business, not a template. Get a free call audit.';
const PAGE_MODIFIED = '2026-09-07';

// Single source of truth for the breadcrumb trail. Feeds both the visible
// <Breadcrumbs> component and the BreadcrumbList JSON-LD below so the two
// can never drift apart (see components/v2/Breadcrumbs.tsx for why that matters).
const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Receptionist', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai receptionist',
    'ai answering service',
    'ai phone answering service',
    'ai virtual receptionist',
    'ai phone receptionist',
    'automated receptionist',
    'ai receptionist for small business',
    '24/7 ai receptionist',
    'ai receptionist for contractors',
    'ai answering service for hvac and plumbing',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/images/ai-receptionist/ai-receptionist-front-office.jpg',
        width: 1200,
        height: 630,
        alt: 'AI receptionist answering and booking calls for a business front office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/ai-receptionist/ai-receptionist-front-office.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'AI Receptionist Basics' },
  { key: 'industries', label: 'Industries & Use Cases' },
  { key: 'voice', label: 'Voice Quality & Escalation' },
  { key: 'dispatch', label: 'Integrations & Scheduling' },
  { key: 'trades', label: 'Trades: Vertical Logic' },
  { key: 'roi', label: 'Setup & Business Value' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is an AI receptionist?',
    answer: 'An AI receptionist is an automated voice system that answers your business phone line 24 hours a day and holds a real spoken conversation with the caller. It greets them, answers routine questions, works out what they need, books the appointment inside your CRM or scheduling software, and passes urgent calls to a human. It is not a phone menu and not a chatbot. The caller talks normally and the system responds in natural speech, then finishes the task on the call rather than taking a message.',
  },
  {
    category: 'basics',
    question: 'What is the difference between an AI receptionist and a traditional answering service?',
    answer: 'A traditional answering service employs people who pick up, write down a message, and pass it to your team to action later. You are paying for message-taking, and the caller still waits for a callback. An AI receptionist completes the task on the call: it checks your live calendar, books the slot, updates your CRM, and texts a confirmation before the caller hangs up. It also answers every line at once, so a rush of simultaneous calls never queues, and it costs the same at 3am on a Sunday as it does at midday on a Tuesday.',
  },
  {
    category: 'basics',
    question: 'What kinds of businesses use an AI receptionist?',
    answer: 'Any business where a missed call is a missed sale. We build most often for home services and trades, medical and dental practices, law firms, property managers, auto dealerships and service centres, restaurants, and B2B companies with high inbound call volume. The pattern that matters is not the industry, it is the call profile: lots of inbound calls, a booking or intake at the end of them, and a scheduling system the agent can write into.',
  },
  {
    category: 'basics',
    question: 'Can an AI receptionist transfer a call to a real person?',
    answer: 'Yes, and it should. We configure explicit escalation rules: named emergency keywords, a caller who asks for a human, a request outside the agent\'s scope, or repeated confusion on the line. Any of those trigger a warm transfer to whoever is on call, with the context already captured so your team member does not start the conversation from nothing. If nobody picks up, the agent takes the details and fires an SMS alert instead of dropping the caller into voicemail.',
  },
  {
    category: 'basics',
    question: 'Does the AI virtual receptionist really work 24/7, including weekends and holidays?',
    answer: 'Yes. The agent runs continuously and has no shift pattern, so nights, weekends, and public holidays are handled the same as a Tuesday morning. This is where most of the value shows up, because after-hours calls are the ones that currently go to voicemail and never come back. You can also set different behaviour by time of day. During office hours the agent might transfer more calls to your team, while after hours it handles the full booking itself and only escalates genuine emergencies.',
  },
  {
    category: 'basics',
    question: 'How many calls can an AI phone answering service handle at the same time?',
    answer: 'All of them. The agent is not a single person on a single line, so ten simultaneous callers get ten simultaneous conversations with no hold queue. This matters most during a spike: a storm for a roofer, a product recall for a retailer, a busy Monday morning for a clinic. Those are exactly the moments a human front desk drops calls, and exactly the moments the calls are worth the most.',
  },
  {
    category: 'industries',
    question: 'Can an AI receptionist handle medical or dental patient calls under HIPAA?',
    answer: 'Yes, under a signed BAA and with the call flow scoped so the agent only ever handles what it is cleared to handle. It books, reschedules and cancels appointments, captures reason for visit and insurance details, answers opening hours and location questions, and routes anything clinical to a human immediately. It does not give clinical advice or triage symptoms. Recordings and transcripts are handled under the same agreement, and anything a practice wants excluded from storage is excluded at the pipeline, not filtered afterwards.',
  },
  {
    category: 'industries',
    question: 'How does an AI receptionist work for a law firm?',
    answer: 'New matter intake is the main job. The agent captures the caller\'s name, the matter type, the other parties involved so your conflict check can run, and the basic facts, then books a consultation into your case management system and sends the caller confirmation. It is explicitly scoped never to give legal advice or comment on the merits of a matter, and it says so plainly if asked. Existing clients asking about an open matter get routed to whoever owns it rather than answered by the agent.',
  },
  {
    category: 'industries',
    question: 'Can a restaurant use an AI receptionist for reservations and takeaway orders?',
    answer: 'Yes, and the dinner rush is exactly when it earns its keep, because it answers every line at once instead of one at a time. It takes reservations against your live table availability, handles takeaway orders into your point of sale, and answers the repetitive questions that eat a host stand: opening hours, parking, allergens, whether you take large groups. Anything unusual goes to a person, so nobody gets stuck arguing with a machine about a birthday cake.',
  },
  {
    category: 'industries',
    question: 'We are a B2B company, not a consumer business. Is this still relevant?',
    answer: 'Yes, though the job changes. For B2B the value is less about after-hours emergencies and more about speed and routing: qualifying an inbound enquiry against your ICP while intent is still hot, recognising existing account holders and sending them to their account manager, and booking a real meeting onto the right calendar rather than promising a callback. If your priority is outbound rather than inbound, our AI SDR and BDR agents cover that side instead.',
  },
  {
    category: 'dispatch',
    question: 'Which field service management (FSM) systems and CRMs do you integrate with?',
    answer: 'We build direct, bi-directional API connectors to the leading contractor platforms: ServiceTitan, Jobber, Housecall Pro, FieldEdge, Buildertrend, Procore, Workiz, simPRO, and HubSpot for Contractors. Jobs, customers, and invoices sync back to your FSM in real time, not through a nightly batch file. If your software is not on this list, we scope a custom connector against its API during discovery. Sometimes that means middleware like Zapier or n8n, when a direct API is not available. We rarely just decline an integration.',
  },
  {
    category: 'dispatch',
    question: 'How does the AI book estimate appointments and emergency service calls?',
    answer: "The AI agent checks your live technician schedule, service zones, and job duration windows straight from your FSM API. It confirms the homeowner's address is inside your coverage area. Then it books the job on your dispatch board and sends a calendar invite and SMS confirmation right away.",
  },
  {
    category: 'dispatch',
    question: 'Can the AI qualify project budget and homeowner scope before booking an estimate?',
    answer: "Yes. For general contractors and roofing companies, the AI asks custom qualifying questions about square footage, project timeline, insurance claim status, and budget range. High-value leads get booked right away. Out-of-scope inquiries get a polite referral instead. The questions are configured to your business, not a generic script. A roofer and a kitchen remodeler end up asking homeowners for different details, tuned before a job ever reaches the estimator's calendar.",
  },
  {
    category: 'dispatch',
    question: 'What happens when you are fully booked, or the caller is outside what you cover?',
    answer: 'The agent checks your real availability and your coverage rules live, whatever those are: a service radius, an accepted-insurance list, a practising jurisdiction, a minimum job size. A caller outside them gets a polite, honest explanation rather than a booking you cannot honour. If you are simply full that day, it offers the next real slot or logs a priority callback for your team.',
  },
  {
    category: 'voice',
    question: 'How does the AI handle emergency after-hours calls like burst pipes or no-heat situations?',
    answer: 'The AI listens for emergency keywords: an active water leak, no furnace heat in freezing weather, or a dangerous electrical spark. It flags the call as high priority right away, then collects emergency access instructions from the caller. From there it starts a warm phone transfer or sends an SMS dispatch alert to your on-call technician.',
  },
  {
    category: 'voice',
    question: 'How natural does the AI receptionist actually sound to callers?',
    answer: 'We engineer sub-500ms voice pipelines with a natural American conversational cadence. The agent adapts to background noise and handles interruptions instantly. Callers speak normally, with no awkward robotic delays and no rigid phone menu. A caller can interrupt mid-sentence to correct a detail or raise a second issue. The agent adjusts without restarting the conversation. That is usually the moment homeowners stop treating it like a machine and just describe what they need.',
  },
  {
    category: 'voice',
    question: 'Can the AI voice agent speak multiple languages, including Spanish?',
    answer: 'Yes. The system detects whether a caller speaks English or Spanish within three seconds, then runs the entire scheduling and emergency triage conversation in fluent Spanish. English notes still get logged inside your dispatch software automatically. This matters most on emergency calls, where asking a panicked homeowner to find an English speaker before help gets dispatched can cost real time. The same multi-language pipeline that handles English and Spanish today can add a third language later without a rebuild.',
  },
  {
    category: 'voice',
    question: 'Can the AI send follow-up text messages and quote confirmation links during the call?',
    answer: "Yes. While still on the phone, the AI can trigger automated SMS messages: photo upload links, Google review requests, or calendar confirmations, sent straight to the caller's mobile phone. For storm damage or insurance claims, the photo link lets the homeowner send pictures the same day. Nobody has to wait on a technician site visit just to assess scope. For jobs that need a deposit before scheduling, like a full roof or HVAC replacement, the agent can also text a secure Stripe payment link instead of taking a card number out loud. Card details stay compliant with PCI DSS rules and never touch a call transcript.",
  },
  {
    category: 'trades',
    question: 'Can you customize the AI for roofing storm restoration and insurance claim workflows?',
    answer: 'Yes. Our roofing AI voice agents capture storm damage dates, insurance carrier names, claim numbers, roof pitch details, and adjustor meeting schedules. It tags each claim correctly inside your CRM for your storm restoration estimators. After a hailstorm, call volume can jump from a handful of calls a day to hundreds within hours. The agent captures every claim detail at that volume. Office staff do not fall behind under the pressure.',
  },
  {
    category: 'trades',
    question: 'How does the AI handle HVAC seasonal maintenance and equipment diagnostic inquiries?',
    answer: 'For HVAC contractors, the AI asks structured diagnostic questions about AC cooling failure, heat pump fault codes, furnace age, and filter status. It books tune-up visits and upsells seasonal maintenance agreements. Complete system breakdown calls get priority automatically. A no-cool call in July, or a no-heat call in January, gets flagged and bumped ahead of routine filter-change requests. The agent understands the difference between a comfort inconvenience and a genuine equipment failure.',
  },
  {
    category: 'trades',
    question: 'How does the AI support commercial electrical and plumbing dispatching?',
    answer: 'The agent tells residential service calls apart from commercial property management accounts. It collects facility manager names, purchase order numbers, and building access codes. Then it routes commercial emergency requests straight to your assigned commercial service teams. Commercial accounts often run on net-30 purchase order terms instead of pay-at-completion. The agent captures the PO number and billing contact upfront. It never treats the call like a standard residential visit.',
  },
  {
    category: 'trades',
    question: 'Can the AI filter out spam calls, supply vendors, and cold sales pitches?',
    answer: 'Yes. The AI automatically screens out unsolicited vendor pitches, recruitment calls, and telemarketing spam, and routes vendor invoices to your accounting email. Every legitimate customer project call still reaches your booking board. This alone recovers real time for a small office. A two- or three-person front desk otherwise spends a real chunk of the day on solar, insurance, and staffing cold calls that have nothing to do with booking actual jobs.',
  },
  {
    category: 'roi',
    question: 'How quickly does an AI receptionist pay for itself?',
    answer: 'It depends almost entirely on what one captured call is worth to you, so the honest answer is arithmetic rather than a promise. Work out your average value per booked customer, then how many calls a month currently reach voicemail. In home services that maths moves fast, because a single roof replacement ($12,000 to $25,000) or HVAC install ($8,000 to $18,000) caught after hours covers a year. A clinic filling recurring appointment slots or a firm capturing one extra matter gets there differently but on the same logic. Call volume and average customer value both move the payback window, so we run your real numbers during discovery rather than quoting a generic figure.',
  },
  {
    category: 'roi',
    question: 'How does this compare to human answering services like Ruby or AnswerConnect?',
    answer: 'Traditional answering services charge steep per-minute fees, often $800 to $2,500 or more a month. Callers still sit on hold. The service only takes basic messages anyway. Our AI agent actively books appointments inside your dispatch software. It answers technical trade questions and runs 24/7 with zero per-minute penalty.',
  },
  {
    category: 'roi',
    question: 'How long does it take to build and deploy our contractor AI receptionist?',
    answer: 'A standard contractor AI deployment takes three to five weeks. We map your service menu, connect your ServiceTitan or Jobber account, configure telephony call routing, and test emergency dispatch scenarios before taking live calls. The pace is usually set by your office, not by us. Contractors who hand over FSM API credentials and a written price list on day one tend to land near the three-week end. Everyone else lands closer to five.',
  },
  {
    category: 'roi',
    question: 'Do we own the AI agent code, telephony workflows, and system prompts?',
    answer: 'Yes. FactoryJet builds custom AI infrastructure that you own completely. All workflow logic, webhook connectors, API mapping scripts, and prompt engineering are your permanent company assets, with zero vendor lock-in. That ownership does not depend on staying on a subscription, because there is no subscription. You get the Git repository and configuration files outright. A different developer or agency could pick up and maintain the system without needing us at all.',
  },
  {
    category: 'dispatch',
    question: 'How exactly does the agent create a job in ServiceTitan versus Jobber? Is the integration the same?',
    answer: "No, we build to each platform's own data model. In ServiceTitan, the agent creates a Job tied to a Customer and Location record. It drops that Job onto the Dispatch Board with a business unit and campaign tag. In Jobber, it creates a Client and Request instead, which your office can convert to a Job. The phone conversation itself is identical either way. The API calls and field mapping underneath are built separately for each system.",
  },
  {
    category: 'dispatch',
    question: 'Who decides which calls count as a true emergency versus something that can wait for a normal appointment?',
    answer: "We build the emergency triage rules with you before launch. These are the guardrails that decide what counts as urgent. They come from your own dispatch team's real definitions, not a generic list. A no-heat call in freezing weather or an active water leak routes as an emergency. A routine tune-up or a cosmetic concern books as a normal appointment instead. Anything the agent is not confident about gets flagged to a human in the loop, not guessed at.",
  },
  {
    category: 'dispatch',
    question: "Can the agent check which technician is actually closest or best-suited for a job, not just who's free?",
    answer: 'Yes, when your FSM exposes that data. ServiceTitan and Jobber both expose technician skill tags, zone assignments, and route data through their APIs. Where your team maintains that data, the agent uses it to find a qualified, nearby technician. It does not just grab the next open calendar slot.',
  },
  {
    category: 'voice',
    question: "What happens if the agent can't understand the caller or the call drops?",
    answer: "If speech recognition confidence drops or the conversation stalls, the agent does not keep guessing. It offers a direct warm transfer to your office line or on-call number. If the call disconnects entirely, our telephony layer logs the caller's number and whatever details it captured so far. It can trigger an outbound callback, or an alert to your dispatcher, within the same shift.",
  },
  {
    category: 'roi',
    question: 'Does the agent replace our office manager, or work alongside them?',
    answer: 'Alongside. The agent handles the repetitive first-contact work: answering, qualifying, booking, and triaging. Your office manager spends less time on the phone and more time on estimates, follow-ups. The calls that actually need a human judgment call. Most of our contractor clients keep their office staff and redeploy their time rather than cut the role.',
  },
  {
    category: 'dispatch',
    question: 'How does the AI know our exact prices, service menu, and warranty terms instead of guessing?',
    answer: "The agent's answers are grounded in retrieval augmented generation (RAG) over your own price list, service menu, and warranty documents, not general training data. It looks up your content at answer time, so if you change a price next week, the agent quotes the new one immediately. Nothing gets baked into a fixed script that goes stale.",
  },
  {
    category: 'trades',
    question: 'Can one agent handle a business that runs HVAC, plumbing, and electrical under the same roof?',
    answer: 'Yes. For multi-trade contractors, agent orchestration keeps the HVAC diagnostic questions separate from the plumbing and electrical ones. Each set of questions matches whichever service the caller actually asked about. The caller never notices a handoff between trade logic. Each trade still books into its own crew and its own slice of the dispatch board.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: '2026-09-01T00:00:00Z',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://factoryjet.com/logo.png',
    },
  },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'FactoryJet',
    },
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'AI Receptionist',
  serviceType: 'AI Receptionist and AI Phone Answering Service Development',
  description:
    'Custom-built AI receptionists that answer inbound calls 24/7, qualify and route the caller, and book appointments directly inside the CRM or scheduling software a business already runs.',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Receptionist Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 AI Receptionist and Call Answering Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM-Integrated AI Virtual Receptionist',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Appointment Booking and Scheduling Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Call Qualification and Lead Routing Agent',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How We Build and Deploy a Custom 24/7 AI Receptionist',
  description:
    'A structured four-phase engineering framework for deploying a live, CRM-synced AI receptionist on a business phone line.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Call Scope and System-of-Record Mapping',
      text: 'We map the calls the business receives, what each should end in, and which must reach a person, then connect live API webhooks to the CRM, scheduling, practice or case management system it already runs.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Ultra-Low Latency Voice Telephony Architecture',
      text: 'We configure dedicated SIP trunking, Deepgram speech models, and realistic American voice synthesis capable of handling conversational interruptions and noisy environments.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Urgency Triage and SMS Follow-Up Automation',
      text: 'We program deterministic warm transfer rules around the business own definition of an urgent call, plus automated SMS confirmations and secure links.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Parallel Call Testing and Zero-Downtime Phone Cutover',
      text: 'We test live call scenarios with the front-line team, calibrate background noise handling, and route after-hours or overflow phone lines before full cutover.',
    },
  ],
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

export default function AiReceptionistPage() {
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

      <main className="min-h-screen bg-white text-[#14110F]">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                    // CUSTOM 24/7 AI RECEPTIONISTS & AI ANSWERING SERVICES
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">Custom AI Receptionists That{' '}
                  <span className="text-[#F05A28]">Answer Every Call.</span></h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We build the AI receptionist around your business, your call flow, and the software you already run. It answers 24/7, qualifies the caller, handles the urgent ones first, and books the job straight into your CRM or dispatch board. No hold music, no voicemail, no lost after-hours lead.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="ai-receptionist"
                    region="us"
                    submitLabel="Get a free call audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Two-Way CRM Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>24/7 Live Answering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Sub-500ms Voice Speed</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/ai-receptionist/ai-receptionist-front-office.webp"
                      alt="Receptionist wearing a headset answering a call at a bright front-office desk"
                      width={1376}
                      height={768}
                      priority
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>LIVE CALL BOARD</span>
                      <span className="text-[#10B981] font-bold">LIVE TELEPHONY</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      Live Booking, Qualification & Escalation Active
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
              <div className="font-mono text-xs uppercase tracking-wider text-[#F05A28] font-bold mb-3">
                // Definition: What is an AI Receptionist?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI receptionist is an automated voice system that answers a business phone line 24 hours a day, holds a natural spoken conversation with the caller, and completes the task the caller rang about. It greets the caller, answers routine questions, qualifies the enquiry, books the appointment inside the CRM or scheduling software the business already uses, and transfers urgent calls to a human. Unlike a traditional answering service, which takes a message for someone else to action later, an AI receptionist finishes the job on the call itself, at any hour, on every line at once.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED FIELD SERVICE BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">The Revenue Impact of Answering Every Call.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  No Voicemail
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Most Callers Won't Leave One
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Home services businesses miss an average of 27% of inbound calls, according to Invoca research. That is the sector where call data is measured most closely, and the caller behaviour behind it is not sector-specific: most people do not leave a voicemail. They hang up and ring whoever answers next.
                </p>
                <a
                  href="https://www.servicetitan.com/blog/ai-virtual-agents-in-hvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Invoca research, via ServiceTitan &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  One Job
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Can Cover a Year of Call Coverage
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Where the value of a single customer is high, one captured call can cover a year of phone coverage on its own. Missed calls alone cost the average HVAC company an estimated $45,000 to $120,000 a year in lost business. Run the same arithmetic on your own average customer value and the shape of the answer rarely changes.
                </p>
                <a
                  href="https://www.servicetitan.com/blog/ai-virtual-agents-in-hvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: ServiceTitan contractor call data &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  7x
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  More Likely to Qualify a Lead Within the Hour
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Callers reached within the first hour are far more likely to convert into real, booked business. Wait even one more hour and the odds drop. Wait a full day and they fall off a cliff.
                </p>
                <a
                  href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Harvard Business Review &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CORE CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // CORE AI RECEPTIONIST CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for Businesses That Live on the Phone.</h2>
              <p className="text-lg text-[#46403B]">
                Answer every call, qualify the caller, and book the work automatically while your team gets on with the job. None of that helps if people cannot find you in the first place. If the phone is not ringing enough yet, our{' '}
                <Link href="/services/local-seo" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                  local SEO
                </Link>{' '}
                service covers that half of the funnel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">24/7/365 Live Call Answering.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers on the first ring at 2am on a Sunday exactly as it does at 2pm on a Tuesday. It speaks with real warmth, captures the detail accurately, and never puts anyone on hold. That stops the caller doing what they otherwise do, which is hang up and ring whoever answers next.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero voicemail hold times or abandoned rings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Sub-500ms conversational voice response latency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Urgent callers classified and prioritised instantly
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Two-Way CRM and Scheduling Sync.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Reads live availability out of whatever you already run, then writes the contact, the notes, and the confirmed appointment straight back into it. HubSpot and Salesforce for B2B, ServiceTitan and Jobber for the trades, practice management for clinics, case management for law firms. Nobody rekeys anything.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Live calendar reads with real availability locks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Custom connector built when no direct API exists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> No manual double-entry for your front office
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Caller Qualification and Intake.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Asks the questions your best receptionist would ask, in your words, before anything reaches a calendar. A clinic captures insurance and reason for visit. A law firm captures matter type and conflict-check details. A contractor captures scope and service area. Out-of-scope callers get a straight answer instead of a wasted appointment.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Qualifying script configured to your business
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Service-area and eligibility checks on the call
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Structured intake fields written to your system
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Automated SMS Confirmations and Secure Links.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Texts the confirmation, the reminder, and any link the caller needs while they are still on the phone. Intake forms for a clinic, an engagement letter for a firm, a photo upload for a contractor, a secure payment link where a deposit is required. Whoever handles the appointment starts it already knowing the context.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Photo, form, and document links sent mid-call
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated calendar reminder and arrival window SMS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Post-service Google review generation requests
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Warm Transfers and Human Escalation.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Some calls should reach a person, and the agent knows which. A named emergency, a caller who asks for a human, anything outside its scope. It captures the context first, then dials whoever is on call so your colleague does not start the conversation from nothing.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Rule-based escalation you define, not a black box
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-step on-call and fallback trees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Urgent SMS alerts when nobody picks up
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Vendor & Spam Call Filtering.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Screens out telemarketers, cold vendor pitches, and recruitment spam automatically. Your team spends its time on the callers who are actually worth money.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated robo-call deflection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Supplier and vendor calls routed, not dropped
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Clean CRM records with no junk entries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Wondering how this fits your setup?"
          sub="Tell us your industry, your call volume, and the CRM or scheduling system you run. We'll map exactly which calls the agent should book, qualify, or hand to a person."
          label="Get a free call audit"
        />

        {/* INDUSTRIES: broadens the page past the trades vertical it launched as,
            and links the sibling vertical pages into one cluster. */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // WHO WE BUILD AI RECEPTIONISTS FOR
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Every Industry Where a Missed Call Is a Missed Sale.</h2>
              <p className="text-lg text-[#46403B]">
                The trades are where we started and where our deepest dispatch logic lives. The same AI receptionist architecture now answers phones in clinics, law firms, dealerships, and restaurants. What changes is the intake script, the compliance boundary, and the system it books into. What stays the same is that nobody reaches a voicemail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { h: 'Home services and trades', d: 'HVAC, roofing, plumbing, electrical, and general contracting. Emergency triage, service-area geofencing, and booking straight onto the dispatch board.', href: null },
                { h: 'Medical and dental practices', d: 'Patient intake, insurance verification, and appointment booking inside the practice management system, under a HIPAA BAA.', href: '/services/healthcare-ai-agents' },
                { h: 'Law firms', d: 'New matter intake, conflict-check questions, and consultation booking synced to the case management system.', href: '/services/legal-ai-agents' },
                { h: 'Restaurants and hospitality', d: 'Reservations, takeaway orders, and opening-hours questions answered on every line at once during the dinner rush.', href: '/services/restaurant-ai-voice-agents' },
                { h: 'Auto dealerships and service centres', d: 'Service bookings, parts availability, and trade-in enquiries routed to the right department instead of a hold queue.', href: '/services/automotive-ai-voice-agents' },
                { h: 'Manufacturers and distributors', d: 'Inbound RFQ capture, order status calls, and supplier routing handled without pulling anyone off the floor.', href: '/services/manufacturing-ai-agents' },
                { h: 'Property management and leasing', d: 'Prospective-tenant tours, application FAQs, and fair-housing-safe screening booked straight into AppFolio or Yardi.', href: '/services/property-management-ai-agents' },
              ].map((x) => (
                <div key={x.h} className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{x.h}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-3">{x.d}</p>
                  {x.href ? (
                    <Link href={x.href} className="text-sm font-bold text-[#B23E13] underline hover:text-[#F05A28]">
                      See the {x.h.toLowerCase()} build &rarr;
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 TRADE VERTICAL USE CASES WITH PHOTOREALISTIC IMAGERY */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEEPEST VERTICAL: HOME SERVICES &amp; THE TRADES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Worked in Depth: Home Services and the Trades.</h2>
              <p className="text-lg text-[#46403B]">
                This is the vertical we have built the most, so it is the one we can show in full detail. Read it as a worked example of how deep the call logic goes, not as a limit on who we build for. HVAC emergency dispatch needs different diagnostic logic than a roofing estimate, and both differ again from patient intake or new-matter intake. The engineering underneath is the same.
              </p>
            </div>

            <div className="space-y-16">
              {/* TRADE 1: HVAC & HEATING / COOLING */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/hvac-technician-service-van-ai.webp"
                        alt="American HVAC service technician standing by service van checking automated emergency call dispatch"
                        width={1228}
                        height={768}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // HVAC & REFRIGERATION CONTRACTORS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">24/7 Seasonal Emergency Dispatch & Maintenance Upsells.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    When heat waves or winter freezes hit, HVAC phone lines get overwhelmed with emergency calls. Our AI receptionist tells a complete AC breakdown apart from routine maintenance in seconds. It checks technician service zones, books emergency diagnostic windows in ServiceTitan, and dispatches on-call techs immediately. The same sub-500ms voice pipeline also runs our{' '}
                    <Link href="/services/automotive-ai-voice-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      automotive dealership service-lane agents
                    </Link>
                    , so the underlying engineering is proven well outside HVAC too.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Sub-60s Emergency Response.</li>
                    <li>&bull; ServiceTitan Job Booking.</li>
                    <li>&bull; Maintenance Agreement Upsell.</li>
                    <li>&bull; System Age & Brand Capture.</li>
                  </ul>
                </div>
              </div>

              {/* TRADE 2: ROOFING CONTRACTORS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // ROOFING & STORM RESTORATION CONTRACTORS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Storm Damage Lead Capture & Insurance Claim Qualification.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    After a severe hail or wind storm, roofing companies can get hundreds of inbound calls within 48 hours. Our AI agent captures storm damage dates, insurance carrier details, claim numbers, and homeowner contact info. It schedules drone inspection estimates and routes high-probability insurance replacement jobs straight to your top project managers. Storm season also spikes homeowner search volume. our{' '}
                    <Link href="/services/roofing-seo" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      roofing SEO
                    </Link>{' '}
                    service is built for that same surge.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Storm Surge Call Scaling.</li>
                    <li>&bull; Insurance Claim Qualification.</li>
                    <li>&bull; Automated Inspection Booking.</li>
                    <li>&bull; Drone Estimate Scheduling.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/roofing-contractor-drone-estimate.webp"
                        alt="American roofing company project manager reviewing digital roof estimate calculations on tablet"
                        width={1376}
                        height={768}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* TRADE 3: PLUMBING & ELECTRICAL */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/plumbing-electrical-field-dispatch.jpg"
                        alt="American master plumber and commercial electrician reviewing dispatch routes in contractor office"
                        width={1376}
                        height={768}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // PLUMBING & COMMERCIAL ELECTRICAL
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Burst Pipe Emergency Triage & Commercial Account Routing.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Plumbers and electricians cannot afford to miss a high-margin emergency call. During an active flood, the system walks the homeowner through the water main shutoff steps and collects breaker box details. Commercial property manager requests route straight to assigned field technicians, PO number included.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Active Flood Shutoff Guidance.</li>
                    <li>&bull; Commercial Facility PO Capture.</li>
                    <li>&bull; Housecall Pro / Jobber Sync.</li>
                    <li>&bull; Real-Time Tech Dispatch SMS.</li>
                  </ul>
                </div>
              </div>

              {/* TRADE 4: GENERAL CONTRACTORS & REMODELING */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // GENERAL CONTRACTORS &amp; LUXURY REMODELERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">High-End Remodel Lead Qualification &amp; Subcontractor Inquiries.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    General contractors lose hours filtering small handyman requests out of six-figure kitchen, bathroom, and home addition leads. Our AI screens homeowner budgets and verifies blueprint readiness up front. It books formal design consultations directly with your estimator.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Minimum Budget Qualification.</li>
                    <li>&bull; Buildertrend / Procore Sync.</li>
                    <li>&bull; Architectural Plan Screening.</li>
                    <li>&bull; Subcontractor Call Routing.</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/contractor-office-manager-calls.webp"
                        alt="Contracting company office manager on a headset call reviewing a colour-coded job schedule"
                        width={1376}
                        height={768}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* TRADE 5: COMMERCIAL FACILITIES & MULTI-UNIT PROPERTY DISPATCH */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/contractor-jobsite-dispatch-ai.jpg"
                        alt="Commercial contractor field supervisor coordinating multi-property maintenance dispatch"
                        width={1376}
                        height={768}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // COMMERCIAL PROPERTY &amp; FACILITIES MAINTENANCE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">Property Manager Emergency Billing &amp; Recurring Service SLA Routing.</h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Commercial facility operators manage strict Service Level Agreements (SLAs) for apartment complexes, retail plazas, and office parks. When a tenant reports a major HVAC chiller failure or a roof leak, our AI logs the commercial account code and the authorized PO billing limit. It routes the work order to the right commercial service team, with a sub-15-minute response logged for the SLA record.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Commercial Account Verification.</li>
                    <li>&bull; Authorized PO Limit Capture.</li>
                    <li>&bull; Building Lockbox &amp; Gate Code Intake.</li>
                    <li>&bull; Guaranteed SLA Telemetry Logging.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT FIELD TELEPHONY & FSM INTEGRATION BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TECHNICAL DISPATCH SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">The AI Receptionist Voice &amp; Integration Stack.</h2>
              <p className="text-lg text-[#46403B]">
                How we get to zero hold times, live two-way sync with whatever system you already run, and reliable escalation to a human when the call warrants one.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS &amp; OVERFLOW ROUTING</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Dedicated SIP Trunking &amp; Smart Hunt Groups.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We configure carrier-grade SIP trunks through Twilio, wired directly into your existing business numbers. The same Twilio connection that carries the call also carries the SMS confirmations after it. That means one telephony vendor to manage, not three. The AI can run as your full-time 24/7 receptionist. Or it can just handle rollover calls during a morning peak, or take over after 5 PM and on weekends. Either way, zero dropped connections.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // CRM, SCHEDULING &amp; RECORDS SYNC</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Bi-Directional Sync With Your System of Record.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent reaches your system through direct function calling against its API, not screen-scraping. HubSpot and Salesforce for B2B pipelines, ServiceTitan and Jobber for field service, practice management for clinics, case management for law firms. It reads live availability, creates the record, and books the slot. There is no manual double-entry.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // URGENCY DETECTION &amp; WARM TRANSFER</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Instant Routing to the Right Human.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You define what counts as urgent and the agent listens for it. A patient describing chest pain, a client past a filing deadline, a burst pipe in a commercial building. It captures the details, dials whoever is on call, and briefs them on the caller before they pick up.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // ELIGIBILITY &amp; COVERAGE VALIDATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Eligibility and Territory Filtering.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Stop booking appointments you cannot serve. The agent checks the caller against whatever your boundary actually is: a service radius for field work, a catchment or accepted-insurance list for a clinic, a practising jurisdiction for a firm. Callers outside it get a polite, honest answer instead of a wasted slot.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // CALLER QUALIFICATION MATRIX</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Custom Qualification Logic Per Call Type.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Each call type gets its own set of questions, written to match how your team already qualifies. Scope and timeline for a project enquiry, reason for visit and coverage for an appointment, matter type for an intake. High-value callers get fast-tracked to the right person. Smaller enquiries get a useful answer rather than a calendar slot.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // AUTOMATED SMS &amp; SECURE LINK PIPELINE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Forms, Documents and Photos Captured Mid-Call.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Before the call ends, the agent texts a secure link for whatever you need in advance. A new-patient intake form, an engagement letter, an insurance card photo, a picture of the fault. Whatever comes back attaches automatically to the right record, so the person handling the appointment starts it prepared instead of gathering basics on arrival.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // BILINGUAL ENGLISH &amp; SPANISH VOICE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Dynamic Conversational Language Detection.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Bilingual answering matters most in Texas, Florida, California, and across the Southwest. The agent detects English or Spanish within three seconds and runs the whole conversation in natural Spanish, then writes standardised English notes back into your CRM so your team reads one consistent record. The same language-detection layer runs bilingual phone ordering on our{' '}
                  <Link href="/services/restaurant-ai-voice-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                    restaurant voice agents
                  </Link>
                  .
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // SPAM &amp; VENDOR CALL DEFLECTION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Robo-Call Blocking and Supplier Routing.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Any business with a public number fields dozens of daily pitches: lead brokers, recruitment agencies, directory listing reps. The agent deflects cold pitches automatically, while genuine supplier and delivery calls route to the right inbox instead of being blocked. Your lines stay clear for callers worth money.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // ACCOUNT-HOLDER &amp; B2B CALL HANDLING</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Account Verification and Authorisation Capture.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Existing account holders do not call like new prospects. The agent recognises them, verifies the account, and captures whatever authorisation your process needs before the call ends: a PO number, a billing approval, an access code, a named authorised contact.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // OPERATIONAL TELEMETRY &amp; CALL RECORDINGS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Complete Call and Conversion Analytics.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You get a live dashboard of daily call volumes, booking conversion rates, average handle times, and where calls drop off. De-identified call transcripts are included too. You can track customer satisfaction on an ongoing basis, not just at renewal time. Staff sign in through single sign-on. Role-based access control keeps a front-desk view separate from an owner view. We also run periodic penetration testing against the telephony stack, the same practice we hold every voice deployment to.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SERVICETITAN VS JOBBER INTEGRATION DEEP DIVE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // WORKED INTEGRATION EXAMPLE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">A Worked Example: ServiceTitan and Jobber, Side by Side.</h2>
              <p className="text-lg text-[#46403B]">
                We build to each platform's own data model rather than to one generic API, and this pair shows why that matters. The same discipline applies whether the system of record is Salesforce, a practice management system, or a case management system: we map to how it actually models a record, not to how we wish it did.
              </p>
            </div>

            <div className="mb-16">
              <p className="text-center text-xs font-mono uppercase tracking-wider text-[#6E655F] mb-4">
                // The same connector layer, discussed above, also reaches:
              </p>
              <ul className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto list-none">
                {[
                  'ServiceTitan', 'Jobber', 'Housecall Pro', 'FieldEdge', 'Buildertrend', 'Procore',
                  'Workiz', 'simPRO', 'HubSpot', 'Twilio', 'Stripe', 'QuickBooks', 'Xero',
                  'RingCentral', 'Dialpad', 'Pipedrive', 'Zapier', 'n8n',
                ].map((name) => (
                  <li
                    key={name}
                    className="px-3 py-1.5 rounded-full bg-[#FAFAF7] border border-[#E7DED6] text-xs font-mono text-[#46403B]"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-3">
                  // SERVICETITAN DATA MODEL
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Job, Customer, Location, Dispatch Board.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  In ServiceTitan, the agent creates a Customer record first, then a Location tied to that Customer. It opens a Job against both, tags it with the right business unit and campaign, and drops it onto the Dispatch Board. A technician sees the same Job your office would see if a dispatcher had typed it in by hand.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Customer and Location records created first
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Job tagged with business unit and campaign
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Posted straight to the Dispatch Board
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-3">
                  // JOBBER DATA MODEL
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Client, Request. The Convert-to-Job Step.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Jobber works differently. The agent creates a Client, then a Request against that Client. Your office reviews the Request and converts it to a Job on its own schedule. That extra approval step is deliberate. It matches how most Jobber shops already run morning triage.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Client and Request created by the agent
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Office converts Request to Job manually
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Matches existing Jobber triage habits
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-10 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-4xl mx-auto text-center">
              The same connector pattern extends past the FSM itself. If your office phone system already runs on RingCentral, Dialpad, or a traditional PBX, we port the number over with no downtime. If your FSM already pushes completed jobs into QuickBooks or Xero, that pass-through keeps working exactly as it does today. If a larger commercial bid pipeline lives in Pipedrive instead of your FSM, we can wire that in too.
            </p>
            <p className="mt-6 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-4xl mx-auto text-center">
              The phone conversation a homeowner hears is identical either way. Only the field mapping and the API calls underneath change. Both platforms authenticate the connection through OAuth, not a shared login. You can revoke access instantly if you ever need to. The agent's tool use also stays scoped to a short, named list of actions: check the schedule, create the job, send the SMS. There is no open-ended access to your FSM. If your business runs both platforms, or switches between them, we rebuild the mapping layer instead of asking your team to change how they work. This is the same connector-first approach behind our broader{' '}
              <Link href="/services/ai-agent-development" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                AI agent development
              </Link>{' '}
              practice: real API integrations and webhook connectors, not a chatbot wrapper bolted onto your phone line.
            </p>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ARCHITECTURAL COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">AI Receptionist vs a Traditional Answering Service.</h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built field service AI voice infrastructure outperforms generic phone answering centers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">KEY CAPABILITY.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET AI RECEPTIONIST.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">HUMAN ANSWERING (RUBY/ETC).</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS PHONE BOTS.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Live Booking Into Your Own System.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Direct 2-way calendar and CRM sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Takes handwritten text messages.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic webhook form posts only.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Emergency Warm Phone Transfer.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Instant on-call tech phone routing
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Delayed manual pager alert.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Address Geofencing & Scope Filter.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Automated zip code & budget checks
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Passes all callers through.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Rigid menu options.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Response Latency & Conversational Speed.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Sub-500ms real-time voice
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Long hold times during surges.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1.5s - 3.0s robotic lag.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Pricing Model.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Fixed build fee, zero per-minute tax
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$1.50 - $2.50 per minute billing.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Monthly recurring subscription.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROLLOUT PROCESS - MIRRORS THE HOWTO SCHEMA ABOVE, IN VISIBLE PROSE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ROLLOUT PROCESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">How We Build and Roll Out Your AI Receptionist.</h2>
              <p className="text-lg text-[#46403B]">
                Four phases, three to five weeks, no downtime on your existing phone number. Here is what happens in each one.
              </p>
            </div>

            <ol className="space-y-6">
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">1</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Call Scope &amp; System-of-Record Mapping.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We map the calls you actually get, what each one should end in, and which ones must reach a person. Then we connect live API webhooks to your system of record, whether that is a CRM, a scheduling platform, or practice or case management software, and confirm the availability rules it holds. This phase sets the data both sides rely on later.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">2</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Voice &amp; Telephony Architecture.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We configure dedicated SIP trunking, Deepgram speech models, and natural American voice synthesis. The pipeline is tuned to handle mid-sentence interruptions, noisy environments, and callers who talk over the greeting.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">3</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Urgency Triage &amp; SMS Automation.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We program deterministic warm transfer rules around your own definition of urgent, whatever that is in your business. Automated SMS confirmations and any secure links the caller needs get wired in during this phase too.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">4</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Parallel Testing &amp; Zero-Downtime Cutover.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We run the agent through a call-scenario evaluation harness with your own front-line team before it ever touches a real caller. Background noise handling gets calibrated on real recordings. Your phone number stays live the entire time, since we route after-hours or overflow lines first and cut over fully once every scenario passes.
                  </p>
                </div>
              </li>
            </ol>

            <p className="mt-10 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-3xl mx-auto text-center">
              Curious what this looks like for your own call volume and mix of enquiries? Run your numbers through our{' '}
              <Link href="/tools/ai-agent-roi-calculator" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                AI agent ROI calculator
              </Link>{' '}
              before you book a call.
            </p>
          </div>
        </section>

        {/* TEAM & FOUNDER LEADERSHIP SECTION */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
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
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder & CEO, FactoryJet
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#F05A28] hover:underline"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // DIRECT ARCHITECTURE DISCOVERY
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Oversight with Founder Bhavesh Barot.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  No business that runs on inbound calls can afford a lost one or a misrouted one. At FactoryJet, founder Bhavesh Barot leads every discovery call himself. We review the system your bookings actually live in, walk through how your team handles the calls that matter most, and map your custom voice logic. All of that happens before we write a single line of code.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You partner with senior systems engineers who build reliable, fault-tolerant voice pipelines. We build infrastructure that you own and operate permanently.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Strategy Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request an AI receptionist proposal"
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
          eyebrow="// AI RECEPTIONIST QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions About AI Receptionists"
          lead="What an AI receptionist actually does, how it differs from an answering service, what it connects to, and what it takes to get one live on your line."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // NEVER MISS ANOTHER INBOUND CALL
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Stop Losing Calls?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will look at your current call volume, review what the agent needs to integrate with, and deliver a fixed-scope architecture proposal within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-lg text-base"
              >
                Book 30-Min Discovery Call
              </a>
              <ModalCTAButton
                label="Get a free call audit"
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
