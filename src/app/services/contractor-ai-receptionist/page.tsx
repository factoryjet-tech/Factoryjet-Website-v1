import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/contractor-ai-receptionist';
const PAGE_TITLE = 'Contractor AI Receptionist & Voice Dispatch | FactoryJet';
const PAGE_DESC =
  'Custom 24/7 AI voice receptionists for general contractors, HVAC, roofing, and plumbing companies. Direct ServiceTitan & Jobber dispatch. Get an audit.';
const PAGE_MODIFIED = '2026-09-01';

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
    answer: 'We build direct bi-directional API connectors for leading contractor software platforms. These include ServiceTitan, Jobber, Housecall Pro, FieldEdge, Buildertrend, Procore, Workiz, simPRO, and HubSpot for Contractors. Jobs, customers, and invoices sync back to your FSM in real time, not through a nightly batch export. If your business runs a platform outside this list, we scope a custom connector against its API during discovery instead of declining the integration.',
  },
  {
    category: 'dispatch',
    question: 'How does the AI book estimate appointments and emergency service calls?',
    answer: 'The AI agent queries your live field technician schedule, service zones, and job duration windows directly from your FSM API. It verifies homeowner address availability, books the job in your dispatch board, and immediately sends a calendar invite and SMS confirmation to the customer.',
  },
  {
    category: 'dispatch',
    question: 'Can the AI qualify project budget and homeowner scope before booking an estimate?',
    answer: 'Yes. For general contractors and roofing companies, the AI asks custom qualifying questions regarding property square footage, project timeline, insurance claim status, and estimated budget range. High-value qualified leads are booked immediately, while out-of-scope inquiries receive polite referral guidance. The qualifying questions are configured to your business, not a generic script, so a roofer and a kitchen remodeler ask for different details before a job ever reaches the estimator\'s calendar.',
  },
  {
    category: 'dispatch',
    question: 'What happens when a technician is fully booked or outside the service area?',
    answer: 'The AI checks your geofenced service zip codes and technician capacity in real time. If a caller is outside your service area, it explains your geographical coverage politely. If your team is booked for the day, it offers the next available priority slot or logs an urgent callback.',
  },
  {
    category: 'voice',
    question: 'How does the AI handle emergency after-hours calls like burst pipes or no-heat situations?',
    answer: 'The AI identifies urgent emergency keywords such as active water leaks, zero furnace heat in freezing temperatures, or dangerous electrical sparks. It flags the call as high-priority, collects emergency access instructions, and initiates an immediate warm phone transfer or SMS dispatch alert to your on-call technician.',
  },
  {
    category: 'voice',
    question: 'How natural does the contractor AI voice receptionist sound to homeowners?',
    answer: 'We engineer sub-500ms voice pipelines with realistic American conversational cadence, natural background adaptation, and instant interruption handling. Homeowners speak naturally without awkward robotic delays or rigid push-button menus. Callers can interrupt mid-sentence to correct an address or add a second problem, and the agent adjusts without restarting the conversation, which is usually the moment homeowners stop treating it like an automated system and just describe what they need.',
  },
  {
    category: 'voice',
    question: 'Can the AI voice agent speak multiple languages, including Spanish?',
    answer: 'Yes. The system automatically detects whether a caller speaks English or Spanish within three seconds. It conducts the entire scheduling and emergency triage conversation in fluent Spanish while logging translated English notes inside your dispatch software. This matters most for emergency calls, where asking a panicked homeowner to find an English speaker before help gets dispatched can cost real time; the agent instead handles the entire triage conversation in whichever language the caller opened with.',
  },
  {
    category: 'voice',
    question: 'Can the AI send follow-up text messages and quote confirmation links during the call?',
    answer: 'Yes. While speaking on the phone, the AI can trigger automated SMS messages containing photo upload links for damage assessment, Google review requests, or calendar confirmation details directly to the caller’s mobile phone. For storm damage or insurance claims, the photo upload link lets the homeowner send pictures the same day rather than waiting on a technician site visit just to assess scope, which speeds up both the estimate and the adjustor conversation.',
  },
  {
    category: 'trades',
    question: 'Can you customize the AI for roofing storm restoration and insurance claim workflows?',
    answer: 'Yes. Our roofing AI voice agents capture storm damage dates, insurance carrier names, claim numbers, roof pitch details, and adjustor meeting schedules. It tags insurance claims appropriately inside your CRM for specialized storm restoration estimators. After a hailstorm, call volume can spike from a handful of calls a day to hundreds within hours, and the agent captures every claim detail consistently at that volume instead of office staff falling behind under pressure.',
  },
  {
    category: 'trades',
    question: 'How does the AI handle HVAC seasonal maintenance and equipment diagnostic inquiries?',
    answer: 'For HVAC contractors, the AI asks structured diagnostic questions regarding AC cooling failure, heat pump error codes, furnace age, and filter status. It books tune-up visits, upsells seasonal maintenance agreements, and prioritizes complete system breakdown calls. A complete no-cool call in July or a no-heat call in January is flagged and bumped ahead of routine filter-change or tune-up requests automatically, since the agent understands the difference between a comfort inconvenience and a genuine equipment failure.',
  },
  {
    category: 'trades',
    question: 'How does the AI support commercial electrical and plumbing dispatching?',
    answer: 'The agent distinguishes between residential service calls and commercial property management accounts. It collects facility manager names, purchase order numbers, building access codes, and routes commercial emergency dispatch requests directly to assigned commercial service teams. Commercial accounts often run on net-30 purchase order terms instead of pay-at-completion, so the agent captures the PO number and billing contact upfront rather than treating every call like a standard residential visit that gets paid on-site.',
  },
  {
    category: 'trades',
    question: 'Can the AI filter out spam calls, supply vendors, and cold sales pitches?',
    answer: 'Yes. The AI automatically screens out unsolicited vendor pitches, recruitment inquiries, and telemarketing spam. It routes vendor invoices to your accounting email while ensuring 100% of legitimate customer project calls reach your booking board. This alone recovers real time for a small office, since a two- or three-person front desk otherwise spends a meaningful part of the day fielding solar, insurance, and staffing cold calls that have nothing to do with booking actual jobs.',
  },
  {
    category: 'roi',
    question: 'What is the typical return on investment for an independent trade contractor?',
    answer: 'Contractors typically recover their investment in the first thirty days. In the home services industry, a single booked roof replacement ($12,000 to $25,000) or new HVAC system install ($8,000 to $18,000) captured after hours pays for the entire AI infrastructure for the year.',
  },
  {
    category: 'roi',
    question: 'How does this compare to human answering services like Ruby or AnswerConnect?',
    answer: 'Traditional answering services charge expensive per-minute fees ($800 to $2,500+ monthly), put callers on long hold times, and only take basic text messages. Our AI agent actively books appointments inside your dispatch software, answers technical trade questions, and operates 24/7 with zero per-minute penalty.',
  },
  {
    category: 'roi',
    question: 'How long does it take to build and deploy our contractor AI receptionist?',
    answer: 'A standard contractor AI deployment takes three to five weeks. We map your service menu, integrate your ServiceTitan or Jobber account, configure telephony phone forwarding, and test emergency dispatch scenarios before taking live calls. The pace is usually set by how quickly your office can hand over FSM API credentials and a written price list; contractors who have both ready on day one tend to land at the three-week end rather than the five-week end.',
  },
  {
    category: 'roi',
    question: 'Do we own the AI agent code, telephony workflows, and system prompts?',
    answer: 'Yes. FactoryJet builds custom AI infrastructure that you own completely. All workflow logic, webhook connectors, API mapping scripts, and prompt architectures are your permanent company assets with zero vendor lock-in. That ownership is not contingent on staying on a subscription, since there is no subscription; you get the Git repository and configuration files outright, so a different developer or agency could pick up and maintain the system without needing our involvement at all.',
  },
  {
    category: 'dispatch',
    question: "How exactly does the agent create a job in ServiceTitan versus Jobber — is the integration the same?",
    answer: "No, we build to each platform's own data model. In ServiceTitan, the agent creates a Job tied to a Customer and Location record and drops it onto the Dispatch Board with a business unit and campaign tag. In Jobber, it creates a Client and Request that your office can convert to a Job. The underlying phone conversation is the same; the API calls and field mapping are built separately for each system.",
  },
  {
    category: 'dispatch',
    question: 'Who decides which calls count as a true emergency versus something that can wait for a normal appointment?',
    answer: "We build the emergency triage rules with you before launch, using your own dispatch team's real definitions, not a generic list. A no-heat call in freezing weather or an active water leak routes as an emergency; a routine tune-up or a cosmetic concern books as a normal appointment. Anything the agent isn't confident about gets flagged to a human rather than guessed at.",
  },
  {
    category: 'dispatch',
    question: "Can the agent check which technician is actually closest or best-suited for a job, not just who's free?",
    answer: 'Yes, when your FSM exposes that data. ServiceTitan and Jobber both expose technician skill tags, zone assignments, and route or location data through their APIs. Where your team maintains that data, the agent uses it to route the call to a qualified, nearby technician instead of just the next open calendar slot.',
  },
  {
    category: 'voice',
    question: "What happens if the agent can't understand the caller or the call drops?",
    answer: 'If speech recognition confidence drops or the conversation stalls, the agent does not keep guessing. It offers a direct warm transfer to your office line or on-call number. If the call disconnects entirely, our telephony layer logs the caller\'s number and whatever details were captured so far, and can trigger an outbound callback or an alert to your dispatcher within the same shift.',
  },
  {
    category: 'roi',
    question: 'Does the agent replace our office manager, or work alongside them?',
    answer: 'Alongside. The agent handles the repetitive first-contact work, answering, qualifying, booking, and triaging, so your office manager spends less time on the phone and more time on estimates, follow-ups, and the calls that actually need a human judgment call. Most of our contractor clients keep their office staff and redeploy their time rather than cut the role.',
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
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://factoryjet.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://factoryjet.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contractor AI Receptionist',
        item: CANONICAL_URL,
      },
    ],
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Contractors & Trades.
                  </span>
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
                      fill
                      priority
                      className="object-cover"
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
                An AI receptionist for contractors is an automated conversational voice system that answers incoming trade service phone calls 24 hours a day, qualifies homeowner project scopes and budgets, and books estimate appointments directly inside field management software such as ServiceTitan and Jobber. It eliminates missed after-hours calls, routes urgent plumbing and HVAC emergencies, and sends automated SMS confirmations.
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
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Most homeowners who reach a contractor's voicemail do not leave a message — they hang up and call the next business on the results page instead.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  One Job
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Can Cover a Year of Call Coverage
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A single captured emergency call or storm-damage estimate is often worth more than what a fully staffed answering solution costs for the entire year — the math favors picking up the phone.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  7x
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  More Likely to Qualify a Lead Within the Hour
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Callers contacted within an hour of first reaching out are far more likely to turn into a real, booked job than callers reached even an hour later — and the odds fall off a cliff after 24 hours.
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
                Capture every profitable job, qualify homeowner budgets, and dispatch crews automatically while your hands are on the tools.
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
                  Answers incoming telephone inquiries on the very first ring, even during midnight storms, holiday freezes, or busy Sunday mornings. Speaks with authentic human warmth, captures homeowner emergency details with precision, and prevents high-ticket customer churn to local competitors.
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
                  Reads real-time technician zone calendars, driving buffers, and on-call availability. Automatically inserts new customer profiles, addresses, job categories, and estimate appointments directly onto your dispatch board with zero manual office double-entry.
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
                  Validates property zip codes against your service area. Gathers essential project details like roof age, HVAC system brand, plumbing fixture type, square footage, home addition architectural blueprints, and insurance claim involvement before scheduling field visits.
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
                  Sends instant calendar text confirmations, technician arrival tracking notices, and secure photo upload links so homeowners can submit damage photos of their breaker panel, leaking pipe, or damaged roof shingles before the technician arrives.
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
                  When a severe commercial water main break or critical electrical failure occurs, the AI identifies the severity, collects site access codes, and dials your on-call technician immediately.
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
                  Screens out telemarketers, cold supply vendor pitches, and recruitment spam automatically. Ensures your office staff only spend time on high-margin customer project calls.
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
                        fill
                        className="object-cover"
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
                    When heat waves or winter freeze events hit, HVAC phone lines are overwhelmed with emergency calls. Our AI receptionist identifies whether the caller has a complete AC breakdown or needs routine maintenance, checks technician service zones, books emergency diagnostic windows in ServiceTitan, and dispatches on-call techs immediately.
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
                    Following severe hail and wind storms, roofing companies receive hundreds of inbound calls in 48 hours. Our AI agent captures storm damage dates, insurance carrier details, claim numbers, and homeowner contact info. It schedules drone inspection estimates and routes high-probability insurance replacement jobs directly to your top project managers.
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
                        fill
                        className="object-cover"
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
                        fill
                        className="object-cover"
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
                    Plumbers and electricians cannot afford to miss high-margin emergency service calls. Our system instructs homeowners on water main shutoff steps during active floods, collects breaker box details, and routes commercial property manager emergency requests with PO numbers directly to assigned field technicians.
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
                    General contractors spend hours filtering unqualified leads for small handyman jobs when seeking six-figure kitchen, bathroom, and custom home additions. Our AI screens homeowner budgets, verifies architectural blueprint readiness, and books formal design consultations with your estimator.
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
                        fill
                        className="object-cover"
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
                        fill
                        className="object-cover"
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
                    Commercial facility maintenance operators manage strict Service Level Agreements (SLAs) for apartment complexes, retail plazas, and corporate office parks. When a tenant reports a major HVAC chiller failure or roof leak, our AI identifies commercial account codes, captures authorized PO billing limits, and routes the work order to designated commercial service teams with guaranteed sub-15-minute response logs.
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
                  We configure carrier-grade SIP trunks connecting directly with your existing business numbers. The AI can act as your 24/7 primary receptionist, handle simultaneous rollover calls during morning peak bursts, or take over after 5 PM and on weekends with zero dropped connections.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // FIELD SERVICE MANAGEMENT (FSM) SYNC</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Bi-Directional ServiceTitan &amp; Jobber Integration</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The AI communicates directly with ServiceTitan, Jobber, and Housecall Pro APIs. It checks real-time technician zone calendars, verifies travel buffers, creates customer records, and books appointment slots atomically without manual double-entry.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // EMERGENCY TRIAGE &amp; ON-CALL WARM TRANSFER</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Instantaneous Technician Phone Routing</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  When a caller experiences an urgent heating failure in freezing weather or a burst commercial water pipe, the AI recognizes the urgency, collects the property address, and dials your on-call technician line immediately while briefing the tech on caller details.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // GEOFENCING &amp; SERVICE RADIUS VALIDATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Postal Code &amp; Territory Filtering</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Avoid sending estimators to jobs outside your profitable driving radius. The AI verifies homeowner zip codes against your custom service territory database, politely declining out-of-area requests or applying designated long-distance travel fee disclosures.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // PROJECT BUDGET &amp; SCOPE QUALIFICATION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Custom Estimator Lead Qualification Matrix</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  For roofing, remodeling, and electrical panel upgrades, the AI collects property size, equipment age, insurance involvement, and timeline expectations. High-value qualified leads are fast-tracked to senior estimators while handyman requests receive custom guidance.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // AUTOMATED SMS &amp; PHOTO UPLOAD PIPELINE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Pre-Estimate Visual Data Capture via Text</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  While concluding the phone conversation, the AI instantly dispatches an automated SMS message to the homeowner containing a secure photo upload link. Homeowners upload high-resolution photos of their electrical breaker panel, leaking under-sink pipe, HVAC unit model tags, or hail-damaged roof shingles. These images attach automatically to the work order ticket so technicians arrive prepared with the exact replacement parts.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // BILINGUAL ENGLISH &amp; SPANISH VOICE</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Dynamic Conversational Language Detection</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  In major US markets across Texas, Florida, California, and the Southwest, bilingual communication is vital. The AI identifies English or Spanish speech dynamically within three seconds. It conducts the estimate booking conversation in natural Spanish while writing standardized English job notes and dispatch tickets inside your CRM.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // SPAM &amp; VENDOR CALL DEFLECTION</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Robo-Call Blocking &amp; Material Supplier Routing</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Contractors receive dozens of daily telemarketing pitches from online lead brokers, recruitment agencies, and directory listing sales reps. The AI deflects cold sales pitches automatically and routes material supply delivery confirmations to your office manager email, keeping your phone lines free for high-margin jobs.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // COMMERCIAL PROPERTY MANAGER ACCOUNTS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Purchase Order &amp; Facility Access Capture</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Commercial trade accounts operate differently than homeowners. The AI captures facility management commercial account IDs, authorized PO numbers, building lockbox codes, and emergency billing authorizations.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // OPERATIONAL TELEMETRY &amp; CALL RECORDINGS</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Complete Dispatch Board &amp; Lead Conversion Analytics</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Access comprehensive dashboards displaying daily call volumes, booking conversion percentages, average handle times, technician route efficiency, and de-identified call transcripts to monitor customer satisfaction continuously.
                </p>
              </li>
            </ul>
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
                      fill
                      quality={95}
                      className="object-cover"
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
                  Trade contractors cannot afford lost phone calls or misrouted jobs. At FactoryJet, founder Bhavesh Barot leads every discovery and dispatch architecture call directly. We analyze your ServiceTitan or Jobber setup, evaluate your emergency call procedures, and map your custom voice logic before writing a single line of code.
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
