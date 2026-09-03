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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/contractor-ai-receptionist';
const PAGE_TITLE = 'Contractor AI Receptionist & Voice Dispatch | FactoryJet';
const PAGE_DESC =
  'Custom 24/7 AI voice receptionists for general contractors, HVAC, roofing, and plumbing companies. Direct ServiceTitan & Jobber dispatch. Get an audit.';
const PAGE_MODIFIED = '2026-09-03';

// Single source of truth for the breadcrumb trail. Feeds both the visible
// <Breadcrumbs> component and the BreadcrumbList JSON-LD below so the two
// can never drift apart (see components/v2/Breadcrumbs.tsx for why that matters).
const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Contractor AI Receptionist', url: CANONICAL_URL },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai receptionist for contractors',
    'ai receptionist for hvac',
    'roofing ai receptionist',
    'plumbing ai phone agent',
    'ai for general contractors',
    'ai answering service for contractors',
    'construction ai voice agent',
    'electrician ai answering service',
    'field service ai automation',
    'servicetitan ai integration',
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
        url: 'https://factoryjet.com/images/contractors/contractor-jobsite-dispatch-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Receptionist for Contractors, Roofing, Plumbing, and HVAC Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/contractors/contractor-jobsite-dispatch-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'dispatch', label: 'Field Dispatch & FSM' },
  { key: 'voice', label: 'Voice & Emergency Triage' },
  { key: 'trades', label: 'Trade-Specific Logic' },
  { key: 'roi', label: 'Setup & Business Value' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
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
    question: 'What happens when a technician is fully booked or outside the service area?',
    answer: 'The AI checks your geofenced service zip codes and technician capacity in real time. If a caller is outside your service area, it explains your coverage politely. If your team is booked for the day, it offers the next available priority slot. It can also log an urgent callback for your office.',
  },
  {
    category: 'voice',
    question: 'How does the AI handle emergency after-hours calls like burst pipes or no-heat situations?',
    answer: 'The AI listens for emergency keywords: an active water leak, no furnace heat in freezing weather, or a dangerous electrical spark. It flags the call as high priority right away, then collects emergency access instructions from the caller. From there it starts a warm phone transfer or sends an SMS dispatch alert to your on-call technician.',
  },
  {
    category: 'voice',
    question: 'How natural does the contractor AI voice receptionist sound to homeowners?',
    answer: 'We engineer sub-500ms voice pipelines with a natural American conversational cadence. The agent adapts to background noise and handles interruptions instantly. Homeowners speak normally, with no awkward robotic delays or rigid IVR menus. A caller can interrupt mid-sentence to correct an address or add a second problem. The agent adjusts without restarting the conversation. That is usually the moment homeowners stop treating it like a machine and just describe what they need.',
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
    question: 'What is the typical return on investment for an independent trade contractor?',
    answer: 'Contractors typically recover their investment in the first thirty days. In home services, a single booked roof replacement ($12,000 to $25,000) or new HVAC system install ($8,000 to $18,000) captured after hours can pay for the entire AI build for the year. Call volume and average job size both change the math, so the payback window moves with them.',
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
    answer: 'Alongside. The agent handles the repetitive first-contact work: answering, qualifying, booking, and triaging. Your office manager spends less time on the phone and more time on estimates, follow-ups, and the calls that actually need a human judgment call. Most of our contractor clients keep their office staff and redeploy their time rather than cut the role.',
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

export default function ContractorAiReceptionistPage() {
  const schemaWebPage = {
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

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${CANONICAL_URL}#service`,
    name: 'AI Receptionist & Voice Dispatch for Contractors & Trades',
    serviceType: 'Contractor AI Voice Agent Development',
    description:
      'Custom 24/7 AI voice receptionists for general contractors, HVAC, roofing, and plumbing companies integrated with ServiceTitan, Jobber, and Housecall Pro.',
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
      name: 'Contractor AI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Contractor Emergency Voice Dispatch Agent',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC & Plumbing ServiceTitan Integrated Receptionist',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roofing Storm Damage Estimate Scheduling Agent',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'General Contractor Subcontractor & Lead Qualifier',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How We Build and Deploy 24/7 Contractor AI Voice Receptionists',
    description:
      'A structured four-phase engineering framework for deploying live ServiceTitan and Jobber-synced AI voice agents.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Trade Service Scope and FSM API Mapping',
        text: 'We map your service offerings, pricing ranges, emergency dispatch tiers, technician zones, and connect live API webhooks to ServiceTitan or Jobber.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Ultra-Low Latency Voice Telephony Architecture',
        text: 'We configure dedicated SIP trunking, Deepgram speech models, and realistic American voice synthesis capable of handling conversational interruptions.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Emergency Triage and SMS Follow-Up Automation',
        text: 'We program deterministic emergency warm transfer rules for urgent plumbing leaks and no-heat calls, plus automated SMS address confirmation.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Parallel Call Testing and Zero-Downtime Phone Cutover',
        text: 'We test live call scenarios with your field dispatchers, calibrate background noise handling, and route after-hours or overflow phone lines.',
      },
    ],
  };

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const schemaFAQ = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <SiteHeader />

      <main className="min-h-screen bg-white text-[#14110F]">
        <Breadcrumbs items={BREADCRUMB_ITEMS.map((item) => ({ name: item.name, url: item.url }))} />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                    // 24/7 TRADE & CONTRACTOR AI VOICE RECEPTIONISTS
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Voice Receptionists for{' '}
                  <span className="text-[#F05A28]">Contractors &amp; Trades.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We engineer 24/7 AI voice phone agents for American general contractors, HVAC, roofing, plumbing, and electrical companies. Never lose an after-hours emergency call, qualify homeowner project budgets, and book jobs directly into ServiceTitan and Jobber.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="contractor-ai-receptionist"
                    region="us"
                    submitLabel="Request Contractor AI Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>ServiceTitan & Jobber Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>24/7 Emergency Dispatch</span>
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
                      src="/images/contractors/contractor-jobsite-dispatch-ai.jpg"
                      alt="American general contractor on jobsite reviewing automated AI job dispatch dashboard"
                      width={1376}
                      height={768}
                      priority
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>FIELD DISPATCH BOARD</span>
                      <span className="text-[#10B981] font-bold">LIVE TELEPHONY</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      ServiceTitan Live Booking & Emergency Routing Active
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
                // Definition: What is an AI Receptionist for Contractors?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI receptionist for contractors is an automated conversational voice system that answers trade service phone calls 24 hours a day. It qualifies homeowner project scope and budget, then books estimate appointments directly inside field service management software such as ServiceTitan and Jobber. It eliminates missed after-hours calls, routes urgent plumbing and HVAC emergencies, and sends automated SMS confirmations.
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
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Revenue Impact of Speed-to-Lead in Trade Services
              </h2>
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
                  Home services businesses miss an average of 27% of inbound calls, according to Invoca research. Most homeowners do not leave a voicemail. They just hang up and call the next contractor on the results page.
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
                  One captured emergency call can cover a full year of phone coverage. A single storm-damage estimate often does too. Missed calls alone cost the average HVAC company an estimated $45,000 to $120,000 a year in lost business. Picking up the phone pays for itself.
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
                  Callers contacted within the first hour are far more likely to become a real, booked job. Wait even one more hour and the odds drop. Wait a full day and they fall off a cliff.
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

        {/* 6-CARD TRADE CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // CONTRACTOR FIELD CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Residential and Commercial Contractors
              </h2>
              <p className="text-lg text-[#46403B]">
                Capture every profitable job, qualify homeowner budgets, and dispatch crews automatically while your hands are on the tools. None of that helps if homeowners cannot find you first. If the phone is not ringing enough yet, our{' '}
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  24/7/365 Live Emergency Call Answering
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers every call on the first ring, even during midnight storms or busy Sunday mornings. It speaks with real warmth and captures emergency details with precision. That prevents high-ticket customer churn to whichever competitor picks up first.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero voicemail hold times or abandoned rings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Sub-500ms conversational voice response latency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant emergency caller priority classification
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Direct ServiceTitan &amp; Jobber Sync
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Reads real-time technician zone calendars, driving buffers, and on-call availability. It writes new customer profiles, addresses, job categories, and estimate appointments straight onto your dispatch board. Your office does zero manual double-entry.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time technician schedule locks and zone routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Housecall Pro, FieldEdge and Buildertrend support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Complete elimination of manual office paperwork
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Address &amp; Project Scope Pre-Qualification
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Validates property zip codes against your service area. Before scheduling a field visit, it gathers the key details: roof age, HVAC system brand, plumbing fixture type, square footage, blueprint status, and insurance claim involvement.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Service radius geofencing &amp; driving zones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Minimum project budget range confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Insurance claim carrier and claim number capture
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Automated SMS Confirmations &amp; Photo Links
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Sends instant calendar text confirmations, arrival tracking notices, and secure photo upload links. Homeowners can submit damage photos of a breaker panel, a leaking pipe, or damaged roof shingles ahead of time. The technician shows up already knowing what to expect.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Damage photo upload links attached to work orders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated calendar reminder &amp; arrival window SMS
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  On-Call Crew Warm Transfers
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  A severe commercial water main break or a critical electrical failure gets flagged instantly. The AI collects site access codes, then dials your on-call technician right away.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Rule-based emergency phone routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Subcontractor escalation trees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Urgent SMS dispatcher alerts
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Vendor & Spam Call Filtering
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Screens out telemarketers, cold vendor pitches, and recruitment spam automatically. Your office staff spend their time on high-margin customer project calls instead.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated robo-call deflection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Vendor invoice email routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Clean dispatch board hygiene
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Wondering how this fits your dispatch board?"
          sub="Tell us your trade, call volume, and ServiceTitan or Jobber setup. We'll map exactly which calls the agent should book, triage, or hand off."
          label="Get a contractor AI audit"
        />

        {/* 5 TRADE VERTICAL USE CASES WITH PHOTOREALISTIC IMAGERY */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SPECIALIZED TRADE ARCHITECTURES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Tailored Workflows for Every Specialty Contractor
              </h2>
              <p className="text-lg text-[#46403B]">
                HVAC emergency dispatch requires different diagnostic logic than residential roofing estimates. We configure custom trade logic for your business.
              </p>
            </div>

            <div className="space-y-16">
              {/* TRADE 1: HVAC & HEATING / COOLING */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/hvac-technician-service-van-ai.jpg"
                        alt="American HVAC service technician standing by service van checking automated emergency call dispatch"
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
                    // HVAC & REFRIGERATION CONTRACTORS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    24/7 Seasonal Emergency Dispatch & Maintenance Upsells
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    When heat waves or winter freezes hit, HVAC phone lines get overwhelmed with emergency calls. Our AI receptionist tells a complete AC breakdown apart from routine maintenance in seconds. It checks technician service zones, books emergency diagnostic windows in ServiceTitan, and dispatches on-call techs immediately. The same sub-500ms voice pipeline also runs our{' '}
                    <Link href="/services/automotive-ai-voice-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      automotive dealership service-lane agents
                    </Link>
                    , so the underlying engineering is proven well outside HVAC too.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Sub-60s Emergency Response</li>
                    <li>&bull; ServiceTitan Job Booking</li>
                    <li>&bull; Maintenance Agreement Upsell</li>
                    <li>&bull; System Age & Brand Capture</li>
                  </ul>
                </div>
              </div>

              {/* TRADE 2: ROOFING CONTRACTORS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // ROOFING & STORM RESTORATION CONTRACTORS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    Storm Damage Lead Capture & Insurance Claim Qualification
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    After a severe hail or wind storm, roofing companies can get hundreds of inbound calls within 48 hours. Our AI agent captures storm damage dates, insurance carrier details, claim numbers, and homeowner contact info. It schedules drone inspection estimates and routes high-probability insurance replacement jobs straight to your top project managers. Storm season also spikes homeowner search volume; our{' '}
                    <Link href="/services/roofing-seo" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                      roofing SEO
                    </Link>{' '}
                    service is built for that same surge.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Storm Surge Call Scaling</li>
                    <li>&bull; Insurance Claim Qualification</li>
                    <li>&bull; Automated Inspection Booking</li>
                    <li>&bull; Drone Estimate Scheduling</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/roofing-contractor-drone-estimate.jpg"
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    Burst Pipe Emergency Triage & Commercial Account Routing
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Plumbers and electricians cannot afford to miss a high-margin emergency call. During an active flood, the system walks the homeowner through the water main shutoff steps and collects breaker box details. Commercial property manager requests route straight to assigned field technicians, PO number included.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Active Flood Shutoff Guidance</li>
                    <li>&bull; Commercial Facility PO Capture</li>
                    <li>&bull; Housecall Pro / Jobber Sync</li>
                    <li>&bull; Real-Time Tech Dispatch SMS</li>
                  </ul>
                </div>
              </div>

              {/* TRADE 4: GENERAL CONTRACTORS & REMODELING */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                    // GENERAL CONTRACTORS &amp; LUXURY REMODELERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    High-End Remodel Lead Qualification &amp; Subcontractor Inquiries
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    General contractors lose hours filtering small handyman requests out of six-figure kitchen, bathroom, and home addition leads. Our AI screens homeowner budgets and verifies blueprint readiness up front. It books formal design consultations directly with your estimator.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Minimum Budget Qualification</li>
                    <li>&bull; Buildertrend / Procore Sync</li>
                    <li>&bull; Architectural Plan Screening</li>
                    <li>&bull; Subcontractor Call Routing</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-2 shadow-lg overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                      <Image
                        src="/images/contractors/contractor-office-manager-calls.jpg"
                        alt="American construction operations dispatcher reviewing real-time call logs and Jobber bookings"
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] mb-4">
                    Property Manager Emergency Billing &amp; Recurring Service SLA Routing
                  </h3>
                  <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                    Commercial facility operators manage strict Service Level Agreements (SLAs) for apartment complexes, retail plazas, and office parks. When a tenant reports a major HVAC chiller failure or a roof leak, our AI logs the commercial account code and the authorized PO billing limit. It routes the work order to the right commercial service team, with a sub-15-minute response logged for the SLA record.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                    <li>&bull; Commercial Account Verification</li>
                    <li>&bull; Authorized PO Limit Capture</li>
                    <li>&bull; Building Lockbox &amp; Gate Code Intake</li>
                    <li>&bull; Guaranteed SLA Telemetry Logging</li>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                The Contractor AI Voice &amp; Dispatch Integration Stack
              </h2>
              <p className="text-lg text-[#46403B]">
                How we achieve zero hold times, real-time ServiceTitan and Jobber calendar sync, and intelligent emergency technician escalation.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS &amp; OVERFLOW ROUTING</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Dedicated SIP Trunking &amp; Smart Hunt Groups</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We configure carrier-grade SIP trunks through Twilio, wired directly into your existing business numbers. The same Twilio connection that carries the call also carries the SMS confirmations after it. That means one telephony vendor to manage, not three. The AI can run as your full-time 24/7 receptionist. Or it can just handle rollover calls during a morning peak, or take over after 5 PM and on weekends. Either way, zero dropped connections.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // FIELD SERVICE MANAGEMENT (FSM) SYNC</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Bi-Directional ServiceTitan &amp; Jobber Integration</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The AI reaches ServiceTitan, Jobber, and Housecall Pro through direct function calling against their APIs, not screen-scraping. It checks real-time technician zone calendars, verifies travel buffers, creates customer records, and books appointment slots. There is no manual double-entry.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // EMERGENCY TRIAGE &amp; ON-CALL WARM TRANSFER</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Instantaneous Technician Phone Routing</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  An urgent heating failure in freezing weather, or a burst commercial water pipe, gets recognized right away. The AI collects the property address, then dials your on-call technician line immediately. It briefs the tech on the caller's details before they even pick up.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // GEOFENCING &amp; SERVICE RADIUS VALIDATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Postal Code &amp; Territory Filtering</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Avoid sending estimators outside your profitable driving radius. The AI checks homeowner zip codes against your service territory database. Out-of-area requests get a polite decline, or a clear long-distance travel fee disclosure, whichever your business runs.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // PROJECT BUDGET &amp; SCOPE QUALIFICATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Custom Estimator Lead Qualification Matrix</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  For roofing, remodeling, and electrical panel upgrades, the AI collects property size, equipment age, insurance involvement, and timeline. High-value leads get fast-tracked to senior estimators. Handyman-scale requests get custom guidance instead.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // AUTOMATED SMS &amp; PHOTO UPLOAD PIPELINE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Pre-Estimate Visual Data Capture via Text</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Before the call even ends, the AI sends an automated SMS with a secure photo upload link. Homeowners can photograph a breaker panel, a leaking under-sink pipe, an HVAC model tag, or hail-damaged shingles. Those images attach automatically to the work order, so the technician arrives with the right replacement parts already on the truck.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // BILINGUAL ENGLISH &amp; SPANISH VOICE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Dynamic Conversational Language Detection</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Bilingual communication matters most in Texas, Florida, California, and across the Southwest. The AI detects English or Spanish speech within three seconds. It runs the entire booking conversation in natural Spanish, then writes standardized English job notes and dispatch tickets inside your CRM. The same language-detection layer runs bilingual phone ordering on our{' '}
                  <Link href="/services/restaurant-ai-voice-agents" className="underline decoration-[#F05A28]/40 hover:text-[#F05A28]">
                    restaurant voice agents
                  </Link>
                  .
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // SPAM &amp; VENDOR CALL DEFLECTION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Robo-Call Blocking &amp; Material Supplier Routing</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Contractors get dozens of daily telemarketing pitches: lead brokers, recruitment agencies, directory listing sales reps. The AI deflects cold pitches automatically. Material supply delivery confirmations route to your office manager's email instead, so your phone lines stay free for high-margin jobs.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // COMMERCIAL PROPERTY MANAGER ACCOUNTS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Purchase Order &amp; Facility Access Capture</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Commercial trade accounts do not work like homeowner calls. The AI captures the facility's commercial account ID, the authorized PO number, building lockbox codes, and emergency billing authorization, all before the call ends.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // OPERATIONAL TELEMETRY &amp; CALL RECORDINGS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Complete Dispatch Board &amp; Lead Conversion Analytics</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  You get a live dashboard of daily call volumes, booking conversion rates, average handle times, and technician route efficiency. De-identified call transcripts are included too, so you can track customer satisfaction on an ongoing basis, not just at renewal time. Staff sign in through single sign-on, and role-based access control keeps a dispatcher's view separate from an owner's. We also run periodic penetration testing against the telephony stack, the same practice we hold every voice deployment to.
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
                // INTEGRATION DEEP DIVE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                How the ServiceTitan and Jobber Integrations Actually Work
              </h2>
              <p className="text-lg text-[#46403B]">
                ServiceTitan and Jobber do not share a data model. We build to each platform separately, not to one generic FSM API.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Job, Customer, Location, Dispatch Board</h3>
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Client, Request, and the Convert-to-Job Step</h3>
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
              The phone conversation a homeowner hears is identical either way. Only the field mapping and the API calls underneath change. Both platforms authenticate the connection through OAuth, not a shared login, so you can revoke access instantly if you ever need to. The agent's tool use also stays scoped to a short, named list of actions: check the schedule, create the job, send the SMS. There is no open-ended access to your FSM. If your business runs both platforms, or switches between them, we rebuild the mapping layer instead of asking your team to change how they work. This is the same connector-first approach behind our broader{' '}
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Contractor AI vs Traditional Answering Services
              </h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built field service AI voice infrastructure outperforms generic phone answering centers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">KEY CAPABILITY</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET CONTRACTOR AI</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">HUMAN ANSWERING (RUBY/ETC)</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS PHONE BOTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">ServiceTitan / Jobber Live Booking</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Direct 2-way dispatch calendar sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Takes handwritten text messages</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic webhook form posts only</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Emergency Warm Phone Transfer</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Instant on-call tech phone routing
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Delayed manual pager alert</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not supported</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Address Geofencing & Scope Filter</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Automated zip code & budget checks
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Passes all callers through</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Rigid menu options</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Response Latency & Conversational Speed</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Sub-500ms real-time voice
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Long hold times during surges</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1.5s - 3.0s robotic lag</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Pricing Model</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Fixed build fee, zero per-minute tax
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$1.50 - $2.50 per minute billing</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Monthly recurring subscription</td>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                How We Roll Out Your Contractor AI Receptionist
              </h2>
              <p className="text-lg text-[#46403B]">
                Four phases, three to five weeks, no downtime on your existing phone number. Here is what happens in each one.
              </p>
            </div>

            <ol className="space-y-6">
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">1</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Trade Service Scope &amp; FSM API Mapping</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We map your service menu, pricing ranges, and emergency dispatch tiers. We connect live API webhooks to ServiceTitan or Jobber and confirm your technician zones. This phase sets the data both sides will rely on later.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">2</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Voice &amp; Telephony Architecture</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We configure dedicated SIP trunking, Deepgram speech models, and natural American voice synthesis. The pipeline is tuned to handle mid-sentence interruptions, job-site background noise, and callers who talk over the greeting.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">3</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Emergency Triage &amp; SMS Automation</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We program deterministic warm transfer rules for burst pipes, no-heat calls, and other true emergencies, built around your own dispatch team's definitions. Automated SMS address confirmations and photo links get wired in during this phase too.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F05A28] text-white font-bold font-mono flex items-center justify-center">4</div>
                <div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Parallel Testing &amp; Zero-Downtime Cutover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    We run the agent through a call-scenario evaluation harness with your field dispatchers before it ever touches a real customer. Background noise handling gets calibrated on real recordings. Your phone number stays live the entire time, since we route after-hours or overflow lines first and cut over fully once every scenario passes.
                  </p>
                </div>
              </li>
            </ol>

            <p className="mt-10 text-sm sm:text-base text-[#46403B] leading-relaxed max-w-3xl mx-auto text-center">
              Curious what this looks like for your own call volume and job mix? Run your numbers through our{' '}
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
                  // DIRECT CONTRACTOR ARCHITECTURE DISCOVERY
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Trade contractors cannot afford a lost phone call or a misrouted job. At FactoryJet, founder Bhavesh Barot leads every discovery call himself. We review your ServiceTitan or Jobber setup, walk through your emergency call procedures, and map your custom voice logic. All of that happens before we write a single line of code.
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
                    label="Request Contractor AI Proposal"
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
          eyebrow="// CONTRACTOR AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on Contractor AI Receptionists"
          lead="Everything trade business owners, general contractors, and service dispatchers need to know about ServiceTitan sync, emergency dispatching, and ROI."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // NEVER MISS A HIGH-MARGIN TRADE JOB
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Automate Your Contractor Phone Dispatch?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will evaluate your current phone volume, review your FSM integration requirements, and deliver a fixed-scope architecture proposal within 24 hours.
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
                label="Request Custom Contractor Audit"
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
