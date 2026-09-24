import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/property-management-ai-agents';
const PAGE_TITLE = 'AI Leasing Agents for Property Management | FactoryJet';
const PAGE_DESC =
  'Custom AI leasing agents for property management companies. Answer prospect calls, texts, and web chats 24/7, qualify leads, and sync live with AppFolio, Yardi, and RealPage. Get an audit.';
const PAGE_MODIFIED = '2026-09-19';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Property Management AI Agents', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai leasing agent',
    'leasing ai',
    'ai for property managers',
    'ai agents for property management',
    'ai property management chatbot',
    'fair housing compliant ai leasing agent',
    'ai apartment leasing assistant',
    'ai receptionist for property management',
    'multifamily ai leasing agent',
    'ai leasing agent cost',
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
        url: 'https://factoryjet.com/images/property-management/apartment-leasing-office-ai-agent.webp',
        width: 1600,
        height: 1067,
        alt: 'Modern apartment community exterior representing AI leasing agent coverage for property management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/property-management/apartment-leasing-office-ai-agent.webp'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'fair-housing', label: 'Fair Housing & Compliance' },
  { key: 'pms', label: 'PMS & System Integration' },
  { key: 'leasing-ops', label: 'Leasing Operations' },
  { key: 'deployment', label: 'Deployment & Cost' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'fair-housing',
    question: 'Can an AI leasing agent legally answer questions from prospective tenants?',
    answer:
      'Yes, as long as it sticks to facts and applies them the same way to every caller. The Fair Housing Act prohibits discrimination in housing because of race, color, religion, sex, national origin, familial status, or disability. Our leasing agents run on a deterministic script. It gives the same pricing, availability, and policy information to every caller, with no free-form commentary that could be read as steering.',
  },
  {
    category: 'fair-housing',
    question: 'How do you stop the AI from making a Fair Housing violation, like steering a caller toward or away from a unit?',
    answer:
      'The agent never improvises an answer about who lives in a community, what a neighborhood is "like," or which building might "suit" a caller. Those are the exact patterns the Department of Justice flags as unlawful steering. Every response comes from a fixed, reviewed answer set covering price, availability, floor plan, pet policy, and amenities. There is no open-ended model generating opinions about location or demographics.',
  },
  {
    category: 'fair-housing',
    question: 'What happens if a caller asks something that sounds like a Fair Housing test call?',
    answer:
      'The agent is built to recognize common test-call patterns, such as asking whether children, a disability, or a specific ethnic group would be welcome in a building. It gives the same neutral, factual policy answer it would give any caller, then flags the interaction for a compliance officer to review. Nothing about the call changes based on who is asking.',
  },
  {
    category: 'fair-housing',
    question: 'Does the AI treat every caller with the same script regardless of accent, name, or what they ask?',
    answer:
      'Yes. The underlying logic does not read tone, name, or accent as an input to what it says. Two callers asking the identical question get the identical factual answer, in the same order, with the same follow-up questions about budget and move-in timing. That consistency is the point: it removes the human variability that most Fair Housing complaints are actually about.',
  },
  {
    category: 'fair-housing',
    question: 'Is the AI restricted from discussing protected classes like familial status, race, or disability?',
    answer:
      'Yes. The agent is hard-coded to redirect any question about a protected class straight to a factual policy statement (for example, occupancy limits that apply to every applicant) and never to a subjective comment. It cannot ask a caller about children, religion, or national origin, and it cannot answer speculative questions about the makeup of a community.',
  },
  {
    category: 'fair-housing',
    question: 'Who is legally responsible if the AI leasing agent says something wrong?',
    answer:
      'Your management company stays responsible for how the community is leased and for its own Fair Housing compliance. FactoryJet is responsible for building the guardrails correctly and keeping a complete log of what the agent said on every call. Good design limits the risk on both sides: a fixed answer set, human escalation for anything unusual, and a searchable record of every conversation. This is not legal advice.',
  },
  {
    category: 'fair-housing',
    question: 'Do you provide documentation we can show a Fair Housing attorney or auditor?',
    answer:
      'Yes. Every deployment ships with the full answer set the agent is allowed to give, a change log showing when it was last reviewed, and call-by-call transcripts. Your compliance team or outside counsel can audit exactly what the agent said on any call, on any date, without relying on our word for it.',
  },
  {
    category: 'pms',
    question: 'Which property management systems do you integrate with?',
    answer:
      'We build direct, two-way connectors for the platforms most property management companies already run: AppFolio, Yardi (Voyager and Breeze), RealPage, Buildium, and Entrata. That covers reading live unit availability and pricing, and writing back completed tours, qualified leads, and applicant details. Running a smaller or regional PMS? We scope a custom connector against its published API, or work from its scheduled export files if it does not have one.',
  },
  {
    category: 'pms',
    question: 'Can the AI check real-time unit availability and pricing before quoting a prospect?',
    answer:
      'Yes. Instead of quoting from a static rent roll that goes stale within a day, the agent reads live availability and current pricing straight from your PMS API. That means it never offers a unit that already has an application on it, and it never quotes last week\'s rent.',
  },
  {
    category: 'pms',
    question: 'Can it book a self-guided or agent-led tour directly into our leasing calendar?',
    answer:
      'Yes. The agent reads real open tour slots from your leasing calendar, whether that is a self-guided tour system, a smart-lock provider, or a shared staff calendar. It books the slot, sends the prospect a confirmation by text, and updates the calendar in the same call, so two agents can never double-book the same unit tour.',
  },
  {
    category: 'pms',
    question: 'Does it update the PMS automatically when a tour is booked or a lead qualifies?',
    answer:
      'Yes. As soon as a caller is qualified, that guest card gets created or updated in your PMS with their budget, desired move-in date, unit-type preference, and pet details. There is no separate manual data-entry step for your leasing staff to catch up on later.',
  },
  {
    category: 'pms',
    question: 'What if our portfolio uses a property management system that is not on your list?',
    answer:
      'We still take the project. Most PMS platforms publish a developer API, and we scope a custom connector against it the same way we do for AppFolio or Yardi. For older or smaller systems without an API, we build against the scheduled export and import files the platform already supports.',
  },
  {
    category: 'pms',
    question: 'Can it handle a multi-property portfolio with different pricing and policies at each site?',
    answer:
      'Yes. The agent is configured per property, not per portfolio. Pricing, pet policy, amenity list, and available floor plans are pulled independently for each community, so a caller asking about your downtown high-rise gets that building\'s real numbers, not a blended answer across your whole portfolio.',
  },
  {
    category: 'leasing-ops',
    question: 'What does an AI leasing agent actually do, day to day?',
    answer:
      'It answers incoming calls, texts, and web chat inquiries from prospective tenants around the clock. It schedules tours, qualifies leads on budget, desired move-in date, pets, and unit-type preference, answers factual questions about availability, pricing, and amenities, and follows up automatically with prospects who did not book a tour after their first inquiry.',
  },
  {
    category: 'leasing-ops',
    question: 'Will AI replace leasing agents?',
    answer:
      'It changes what your leasing staff spends their day on more than it removes them. The AI takes the repetitive, after-hours, and first-contact volume: "what is available," "what does it cost," "can I see it tomorrow." Your leasing team keeps the conversations that need a person, like closing a lease, handling a hesitant applicant, or resolving a special request. Their time shifts toward the calls that actually convert.',
  },
  {
    category: 'leasing-ops',
    question: 'Is getting an AI leasing agent worth it for a property management company?',
    answer:
      'That depends on how many calls, texts, and web inquiries your properties field outside business hours, and how many of those currently go unanswered. Published multifamily industry data shows a large share of prospect inquiries come in by phone and that most callers who reach voicemail will not leave a message or call back. If that pattern matches your portfolio, an agent that answers every one of those contacts on the first ring usually pays for itself in recovered tours and leases, not in staff replaced.',
  },
  {
    category: 'leasing-ops',
    question: 'How does it handle tour no-shows?',
    answer:
      'The agent sends an automated reminder before the scheduled tour time, and if a prospect does not show up, it follows up the same day to reschedule or ask what changed. Prospects who go quiet after a missed tour get added to a re-engagement sequence instead of falling out of the pipeline entirely.',
  },
  {
    category: 'leasing-ops',
    question: 'Can it cover multiple time zones and true after-hours coverage, not just extended business hours?',
    answer:
      'Yes. The agent runs on the same logic at 2 p.m. and 2 a.m., in any time zone your portfolio operates in. A prospect searching for an apartment after their own workday ends gets the same accurate answer a daytime caller would, instead of a voicemail box or a "call back during business hours" message.',
  },
  {
    category: 'leasing-ops',
    question: 'How does it qualify a lead before handing it to a human leasing agent?',
    answer:
      'It walks every caller through the same qualification questions: move-in budget, target move-in date, desired unit type and bedroom count, and whether they have pets. That structured data gets written to the guest card in your PMS, so your leasing team opens a qualified lead file instead of a blank message slip.',
  },
  {
    category: 'leasing-ops',
    question: 'Can it handle lease renewal conversations, or only new prospect leads?',
    answer:
      'The core build focuses on new-prospect leasing calls, since that is where after-hours volume and missed calls hurt the most. We also build renewal reminder and reactivation call flows on request, for practices that want automated outreach ahead of a resident\'s renewal date, using the same PMS connection.',
  },
  {
    category: 'leasing-ops',
    question: 'Does it text prospects, or only handle phone calls?',
    answer:
      'Both, plus web chat. Many prospects now prefer texting or filling out a web form over calling, especially outside business hours. The agent answers the same qualification and availability questions across phone, SMS, and your website chat widget, and every channel writes back to the same PMS guest card.',
  },
  {
    category: 'leasing-ops',
    question: 'What happens when a caller asks something outside the agent\'s scope, like a maintenance emergency or a legal dispute?',
    answer:
      'The agent recognizes when a request is not a leasing inquiry and routes it correctly instead of guessing. A maintenance emergency gets the same escalation path your maintenance team already uses. A legal, fair housing, or resident-dispute question gets routed straight to a property manager, with no attempt by the AI to resolve it itself.',
  },
  {
    category: 'deployment',
    question: 'How long does it take to build and deploy a custom AI leasing agent?',
    answer:
      'A standard single-property or small-portfolio deployment takes three to five weeks, from scoping to a live pilot. That covers PMS API authentication, fair housing guardrail configuration, tour-calendar integration, and staff escalation workflows. Larger portfolios on enterprise systems like Yardi Voyager or RealPage sometimes need extra time for API credentialing on the platform side, which we cannot speed up even when our own build work is ready.',
  },
  {
    category: 'deployment',
    question: 'How much do AI agents cost a month?',
    answer:
      'Cost mostly depends on three things: how many units and properties the agent covers, how many systems it connects to (your PMS, your tour-calendar or smart-lock platform, your call and text lines), and how much fair housing guardrail configuration your portfolio needs. A single small community connecting to one PMS costs far less to build than a multi-state portfolio needing custom connectors and per-property pricing logic. Weigh that against what missed after-hours calls and unqualified walk-in traffic already cost your leasing pipeline. Ask any vendor for a scoped quote based on your own unit count and systems, not a flat number that ignores your portfolio.',
  },
  {
    category: 'deployment',
    question: 'Do we own the AI agent code and the fair housing guardrail logic?',
    answer:
      'Yes. FactoryJet builds custom infrastructure that you own outright. Every workflow, PMS connector, and guardrail rule set stays your permanent asset, with no vendor lock-in. If your company later wants to bring the system in-house or switch vendors, you get the full codebase, not just an export of your data.',
  },
  {
    category: 'deployment',
    question: 'How do we monitor call quality and agent performance across our portfolio?',
    answer:
      'We provide a dashboard showing call and text volume, tour booking rates, and lead-to-tour conversion by property. Property managers can review call transcripts and adjust qualification rules per community. Dashboard access uses role-based permissions, so a regional manager sees portfolio-wide metrics while a single-site leasing office sees only its own property.',
  },
  {
    category: 'deployment',
    question: 'How long does integration setup take across a multi-property portfolio?',
    answer:
      'The PMS connector itself is built once per platform, not once per property, so a portfolio standardized on one system (all AppFolio, for example) can roll out to additional properties faster than the first pilot site. Each new property still needs its own pricing, availability, and policy configuration loaded in, which usually takes a few days per site rather than the full initial build timeline.',
  },
  {
    category: 'deployment',
    question: 'How is prospective tenant and applicant data secured?',
    answer:
      'Call and chat data is encrypted in transit and at rest. Applicant information such as income details or Social Security numbers is never spoken back by the agent and is written directly to your PMS or screening provider through an encrypted API connection, not stored in a separate database we control. Access to transcripts and logs is role-based and logged for every view.',
  },
  {
    category: 'deployment',
    question: 'Which AI leasing agent is the best?',
    answer:
      'There is no single best answer. It depends on your portfolio size, your PMS platform, and how much of your prospect volume already comes in after hours. When evaluating any AI leasing agent, check five things: does it read and write to your actual PMS in real time, does it run hard, deterministic Fair Housing guardrails rather than an open-ended chatbot, do you own the workflow and code or rent it monthly, can it work across phone, text, and web chat, and can you see a real call transcript or demo before committing. A generic customer-service bot can handle simple FAQ traffic. A portfolio juggling fair housing risk and PMS accuracy usually needs something built specifically for leasing, not a retrofitted general-purpose bot.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  datePublished: '2026-09-19T00:00:00Z',
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
  name: 'AI Leasing Agent & Property Management AI Development',
  serviceType: 'Property Management AI Agent Development',
  description:
    'Custom AI leasing agents for property management companies, integrated with AppFolio, Yardi, RealPage, Buildium, and Entrata, with deterministic Fair Housing Act guardrails.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Property Management AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Leasing Agent for Multifamily & Apartment Communities',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Single-Family & Build-to-Rent AI Leasing Assistant',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Student Housing AI Leasing & Renewal Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Affordable & Workforce Housing Fair-Housing-Compliant AI Leasing Agent',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How We Build and Deploy Fair-Housing-Compliant AI Leasing Agents',
  description:
    'A structured four-phase engineering methodology for deploying PMS-synced, deterministic AI leasing agents for property management portfolios.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Leasing Workflow Audit and PMS API Architecture',
      text: 'We map property pricing rules, tour-calendar availability, lead qualification criteria, and authenticate secure API endpoints with your PMS.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Multi-Channel Intake and Fair Housing Guardrail Configuration',
      text: 'We configure phone, SMS, and web chat intake channels, then load the deterministic Fair Housing answer set and test-call flagging rules.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Lead Qualification Logic and Tour Booking Integration',
      text: 'We build the qualification flow for budget, move-in date, pets, and unit type, and connect self-guided or agent-led tour scheduling.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pilot Shadowing and Live Property Cutover',
      text: 'We run the agent alongside leasing staff during a shadow period, calibrate qualification accuracy, then cut over live calls and texts.',
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

export default function PropertyManagementAiAgentsPage() {
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
                    // AI LEASING AGENTS FOR PROPERTY MANAGEMENT
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Leasing Agents with Live PMS Integration.
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We build private AI leasing agents for property management companies, multifamily owners, and build-to-rent portfolios. The agent answers calls, texts, and web chat inquiries around the clock, qualifies prospects on budget, move-in date, pets, and unit type, and books tours directly into your calendar. It reads and writes live to AppFolio, Yardi, RealPage, Buildium, and Entrata, and every response runs inside deterministic Fair Housing Act guardrails.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="property-management-ai-agents"
                    region="us"
                    submitLabel="Request Leasing AI Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Fair Housing Guardrails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Live PMS-Synced Availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Phone, SMS & Web Chat Coverage.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/property-management/apartment-leasing-office-ai-agent.webp"
                      alt="Modern apartment community exterior representing 24/7 AI leasing agent coverage for property management"
                      width={1600}
                      height={1067}
                      priority
                      fetchPriority="high"
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E7DED6] mt-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E655F] mb-1">
                      <span>LIVE LEASING INTAKE.</span>
                      <span className="text-[#10B981] font-bold">24/7 ACTIVE</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      AppFolio + RealPage Availability Sync Active.
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
                // Definition: What is an AI Leasing Agent?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI leasing agent is custom software that answers a property&apos;s incoming calls, texts, and web chat inquiries on its own. It qualifies prospective tenants on budget, move-in date, pets, and unit type, books tours directly into the leasing calendar, and answers factual questions about availability, pricing, and amenities. It reads and writes live to the property management system. It runs on a deterministic, rule-based script so every caller gets the same factual information, which keeps it inside the guardrails of the Fair Housing Act. Anything outside its scope, like a legal dispute or a maintenance emergency, gets routed straight to a human on the leasing team.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED MULTIFAMILY INDUSTRY BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">The Cost of Unanswered Calls in Property Management.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  87%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Callers Who Reach Voicemail and Hang Up.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Data cited by the National Apartment Association shows about 87% of prospective renters who reach a leasing office&apos;s voicemail will not leave a message, and most never call back. Every one of those is a lead the property never gets a second chance at.
                </p>
                <a
                  href="https://naahq.org/news-publications/apartment-industry-embraces-automated-leasing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: National Apartment Association &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  50%+
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Prospect Inquiries That Happen By Phone.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The same National Apartment Association coverage reports that more than half of leasing prospect inquiries still happen over the phone, not just through online listing forms. A leasing office that cannot answer that volume is losing tours before a prospect ever sees a unit.
                </p>
                <a
                  href="https://naahq.org/news-publications/apartment-industry-embraces-automated-leasing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: National Apartment Association &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  PMS-Synced
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  No Stale Availability or Pricing.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent reads live unit availability and current pricing straight from your PMS, not from a static rent roll printed that morning. That means it never quotes a unit that already has an application on it, and never gives out last week&apos;s rent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE PROPERTY MANAGEMENT CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Volume Leasing Offices and Portfolios.</h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate prospect intake safely, without drifting into Fair Housing risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">24/7 Multi-Channel Leasing Agent.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming phone calls, SMS texts, and website chat inquiries on the first contact, day or night. Understands prospect questions about availability, pricing, amenities, and directions.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero call hold times
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Phone, SMS, and web chat in one system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Natural conversational interruptions
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional Live PMS Sync.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to AppFolio, Yardi, RealPage, Buildium, and Entrata. Reads live unit availability and current pricing, then writes completed tours and qualified guest cards straight back.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Real-time pricing and availability reads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-property portfolio support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant guest card creation
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Structured Lead Qualification.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Captures budget, target move-in date, desired unit type and bedroom count, and pet details on every inquiry, so your leasing team opens a qualified lead instead of a blank message slip.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Consistent qualification questions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automatic PMS guest card sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Lead scoring by move-in urgency
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Fair Housing Guardrail Engine.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Runs on a deterministic answer set so every caller gets the same factual information. Flags any question that sounds like a Fair Housing test call for human compliance review.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Rule-based guardrails against steering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> No commentary on demographics or "who lives here"
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Full transcript audit trail
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Self-Scheduled Tour Booking.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Books self-guided or agent-led tours straight into your calendar during the same call or text thread, then follows up automatically if the prospect does not show.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Instant SMS tour confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> No-show re-engagement sequence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero double-booked tour slots
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Multi-Property Portfolio Routing.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Handles inbound contacts for an entire portfolio from one system, with pricing, policies, and availability configured independently per property, and reporting rolled up by region or asset.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Per-property pricing and policy logic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Portfolio-wide reporting dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Regional manager rollup views
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VERTICAL USE CASES */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED PORTFOLIO TYPES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Specialized Configurations for Every Rental Housing Type.</h2>
              <p className="text-lg text-[#46403B]">
                Leasing volume and lead behavior differ a lot between a downtown high-rise and a single-family rental portfolio. We configure the agent&apos;s logic to fit your property type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // MULTIFAMILY & APARTMENT COMMUNITIES
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">High-Volume Call Handling for Stabilized Apartment Portfolios.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Large communities and multi-site portfolios field the heaviest call and text volume in property management, especially on weekends and evenings. The agent connects to Yardi, RealPage, or Entrata, answers floor-plan and pricing questions per building, and books tours across multiple leasing offices without double-booking a unit.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Yardi / RealPage / Entrata Sync.</li>
                  <li>&bull; Multi-Site Tour Routing.</li>
                  <li>&bull; Weekend & Evening Coverage.</li>
                  <li>&bull; Portfolio-Wide Reporting.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // SINGLE-FAMILY & BUILD-TO-RENT
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Scattered-Site Coverage Without a Centralized Front Desk.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Single-family rental and build-to-rent operators manage homes spread across many addresses, with no on-site leasing office to answer a call. Our agent connects to AppFolio or Buildium, gives address-specific answers for each listing, and coordinates self-guided tour access with smart-lock or lockbox codes.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; AppFolio / Buildium Sync.</li>
                  <li>&bull; Address-Level Listing Detail.</li>
                  <li>&bull; Self-Guided Tour Coordination.</li>
                  <li>&bull; Scattered-Site Lead Routing.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // STUDENT HOUSING
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Seasonal Pre-Lease Surges and Parent-Guarantor Calls.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Student housing leasing compresses most of the year&apos;s volume into a few pre-lease months. The agent handles the surge in inquiries from both students and parent guarantors, explains by-the-bed lease terms and roommate matching policy, and keeps availability accurate as unit-fill rates change daily.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Pre-Lease Volume Scaling.</li>
                  <li>&bull; By-the-Bed Lease Explanation.</li>
                  <li>&bull; Roommate Matching FAQ.</li>
                  <li>&bull; Guarantor Call Handling.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // AFFORDABLE & WORKFORCE HOUSING
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Heightened Fair Housing Discipline for Income-Restricted Properties.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Affordable and workforce housing communities carry extra compliance weight, since income limits and waitlist rules must be applied identically to every applicant. The agent explains eligibility criteria and waitlist status using only the property&apos;s approved language, and every income or eligibility question gets logged for your compliance file.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Income-Limit Script Discipline.</li>
                  <li>&bull; Waitlist Status Automation.</li>
                  <li>&bull; Compliance-Ready Call Logs.</li>
                  <li>&bull; Uniform Eligibility Answers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PMS COVERAGE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Which Property Management Systems We Connect To.</h2>
              <p className="text-lg text-[#46403B]">
                Every portfolio runs different leasing software. Here is exactly what we connect to today, and what each connection actually does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Enterprise & Multifamily PMS.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Yardi</span> (Voyager and Breeze): live unit availability, pricing, and guest card creation.</li>
                  <li><span className="font-bold text-[#14110F]">RealPage</span>: availability sync and lead routing through its leasing API.</li>
                  <li><span className="font-bold text-[#14110F]">Entrata</span>: floor-plan pricing, tour scheduling, and prospect data sync.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Mid-Market & Small Portfolio PMS.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">AppFolio</span>: availability, pricing, and guest card sync built for growing portfolios.</li>
                  <li><span className="font-bold text-[#14110F]">Buildium</span>: tenant inquiry routing and applicant data sync for smaller portfolios.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Both platforms cover single-family, build-to-rent, and smaller multifamily portfolios well.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Custom & Other Systems.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Running a regional or legacy PMS not listed here? We scope a custom connector against its published API. For smaller vendors without one, we work from its scheduled export and import files instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure which calls a leasing agent should handle?"
          sub="Tell us your unit count and PMS platform. We'll map exactly what the agent answers, books, and escalates to your leasing team."
          label="Get a property management AI audit"
        />

        {/* TECHNICAL ARCHITECTURE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TECHNICAL ARCHITECTURE & COMPLIANCE SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">The Leasing Telephony, Messaging & PMS Integration Stack.</h2>
              <p className="text-lg text-[#46403B]">
                How we hit real-time PMS accuracy, deterministic Fair Housing guardrails, and reliable multi-channel intake.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS & SIP ROUTING.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Carrier-Grade SIP Trunking & Audio Streaming.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We deploy dedicated SIP trunks with Session Border Controller redundancy, so one carrier path failing does not drop calls. Some portfolios already run RingCentral, Genesys, or Aircall as a call center platform. We connect alongside it through a SIP handoff, so you do not have to replace it.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // MULTI-CHANNEL INTAKE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Unified Phone, SMS, and Web Chat Pipeline.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Leasing prospects contact a property across three channels almost interchangeably. Our agent runs the same qualification logic and the same Fair Housing guardrails across phone calls, SMS threads, and your website&apos;s chat widget, all writing to one guest card.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // DETERMINISTIC FAIR HOUSING GUARDRAIL ENGINE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Rule-Based Answer Set, Not an Open-Ended Model.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We never connect a raw generative model straight to a leasing call without guardrails around it. A fixed, reviewed answer set covers pricing, policy, and availability. It cannot improvise commentary on neighborhood demographics or a caller&apos;s protected-class status.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // PMS BI-DIRECTIONAL AVAILABILITY & PRICING SYNC.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Real-Time Unit Data, Not a Static Rent Roll.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent reads live floor-plan pricing and unit availability straight from your PMS API. When it books a tour or qualifies a lead, it writes the guest card and tour appointment back immediately, per property.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // LEAD QUALIFICATION & SCORING LOGIC.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Structured Capture of Budget, Timing, and Preferences.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every inquiry walks through the same qualification sequence: budget range, move-in date, unit-type preference, and pets. That structured data drives a simple urgency score your leasing team can sort by.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // SELF-SCHEDULED TOUR BOOKING & CALENDAR SYNC.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Direct Integration With Tour and Smart-Lock Systems.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent reads real open tour slots, whether from a shared staff calendar, a self-guided tour platform, or a smart-lock provider, and books the appointment on the call so two prospects never get scheduled for the same unit at once.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // NO-SHOW FOLLOW-UP & RE-ENGAGEMENT.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Automated Recovery for Missed Tours and Cold Leads.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Prospects who miss a scheduled tour, or who never book one after their first inquiry, get an automated follow-up sequence by text and call, instead of quietly dropping out of the leasing pipeline.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // APPLICANT DATA SECURITY.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Encrypted Transit, Encrypted Storage, No Third-Party Archive.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Applicant details such as income information are never read back by the agent and are written directly to your PMS or screening provider through an encrypted API. Nothing sits in a third-party archive outside your control.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // MULTI-PROPERTY / PORTFOLIO ROUTING.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Per-Property Configuration on One Shared System.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Pricing, policy, and availability are configured independently per property. Regional managers see portfolio-wide reporting, while each leasing office sees only its own property&apos;s activity.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // IMMUTABLE AUDIT LOGGING & TEST-CALL FLAGGING.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Every Call and Text Written to a Searchable Record.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every inbound call, text, and web chat gets logged into an immutable transcript store. Any interaction that resembles a Fair Housing test call is separately flagged for a compliance officer to review directly.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ONBOARDING TIMELINE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ROLLOUT PROCESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Onboarding Timeline: From Kickoff to Live Leasing Cutover.</h2>
              <p className="text-lg text-[#46403B]">
                Every property management deployment follows the same four phases. Most single properties go live in three to five weeks. Enterprise PMS credentialing can add time for larger portfolios.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 1 // WEEK 1.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Leasing Workflow Audit & PMS API Architecture.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We map your pricing rules, tour-calendar availability, and lead qualification criteria, and request API access to your PMS.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 2 // WEEKS 2 TO 3.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Multi-Channel Intake & Fair Housing Guardrail Configuration.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We connect phone, SMS, and web chat intake, and load the deterministic Fair Housing answer set and test-call flagging rules for your compliance officer to review.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 3 // WEEKS 3 TO 4.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Lead Qualification Logic & Tour Booking Integration.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We build the qualification flow for budget, move-in date, pets, and unit type, then connect self-guided or agent-led tour scheduling.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 4 // WEEKS 4 TO 5.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Pilot Shadowing & Live Property Cutover.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent shadows live calls and texts next to your leasing staff first. Once qualification accuracy holds steady, we cut over live intake, usually overnight or on a weekend.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ARCHITECTURAL EVALUATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom AI Agents vs Traditional Alternatives.</h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built leasing AI infrastructure outperforms generic chatbots and outsourced call centers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">EVALUATION CRITERIA.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET CUSTOM AI.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS LEASING BOTS.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">OUTSOURCED CALL CENTERS.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Fair Housing Guardrails & Audit Trail.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Deterministic answer set, full call log
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Open-ended, unreviewed responses.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Depends on individual agent training.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Live PMS Availability & Pricing Sync.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Bi-directional (AppFolio, Yardi, RealPage)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Static forms or basic webhook.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual message taking.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Channel Coverage.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Phone, SMS, and web chat, unified
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Usually web chat only.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Phone only.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">After-Hours Coverage.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      True 24/7, same logic every hour
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Chat widget only, no phone/SMS.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-minute overnight surcharge.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Code Ownership.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Client Owned (No lock-in)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Perpetual monthly SaaS fee.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-minute call billing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAIR HOUSING COMPLIANCE / VENDOR DUE DILIGENCE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                {'// FAIR HOUSING COMPLIANCE'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">How an AI Leasing Agent Stays Inside the Fair Housing Act.</h2>
              <p className="text-lg text-[#46403B]">
                The Fair Housing Act prohibits discrimination in housing because of race, color, religion, sex, national origin, familial status, or disability. The Department of Justice specifically calls out{' '}
                <a
                  href="https://www.justice.gov/crt/fair-housing-act-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#F05A28]"
                >
                  steering homeseekers to certain areas
                </a>{' '}
                as a form of unlawful discrimination. Here is what that means for how we build the agent. None of this is legal advice; your fair housing counsel makes the final call.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 01</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">The same factual information, every time.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent gives identical pricing, availability, and policy answers to every caller asking the identical question. There is no version of the script that varies based on how a caller sounds or what they mention about themselves.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 02</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">No commentary on neighborhood demographics or "who lives here."</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The agent cannot generate an opinion about a community&apos;s residents, safety by association, or "fit." Those are the exact themes the DOJ names as unlawful steering, so they are excluded from the answer set entirely, not filtered after the fact.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 03</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Test-call detection and human escalation.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Questions that resemble a Fair Housing tester call, such as asking whether children or a specific group would be welcome, get the same neutral factual answer and are separately flagged for your compliance officer to review.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 04</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">A complete, searchable transcript of every call.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every call, text, and chat is logged in full. If a complaint or audit ever comes up, your team can pull the exact transcript instead of relying on a staff member&apos;s memory of the conversation.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 05</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Uniform occupancy and eligibility rules.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Occupancy limits, income requirements, and application criteria are stated as fixed policy, applied the same way regardless of who is asking, never adjusted informally on the call.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">GUARDRAIL 06</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Your compliance officer reviews the answer set before launch.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We do not treat the guardrail script as a black box. Your team reviews and signs off on the exact factual answer set before the agent goes live, and again any time it changes.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-white p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot.</div>
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
                  // DIRECT FOUNDER OVERSIGHT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Leadership from Discovery to Deployment.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Leasing offices cannot afford a vendor that treats Fair Housing risk as an afterthought. At FactoryJet, founder Bhavesh Barot runs every property management discovery session himself. In the first meeting, we review your call and text volume, your PMS platform, and your portfolio&apos;s compliance requirements.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have already built high-scale voice and messaging pipelines. We never hand your leasing infrastructure to junior salespeople or offshore contractors. The same senior-only approach runs across our broader{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  practice, not just property management. The same after-hours capture pattern also shows up in{' '}
                  <Link href="/services/ai-agents-for-real-estate" className="underline hover:text-[#F05A28]">
                    AI agents for real estate
                  </Link>{' '}
                  more broadly.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Architecture Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request Leasing Scoping Proposal."
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
          eyebrow="// PROPERTY MANAGEMENT AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on AI Leasing Agents."
          lead="Everything property managers, regional directors, and portfolio owners need to know about Fair Housing compliance, PMS integration, and leasing operations."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // ZERO MISSED PROSPECTS &bull; BUILT FOR FAIR HOUSING COMPLIANT OPERATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Portfolio with Custom Leasing AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will audit your current call and text volume and evaluate your PMS integration requirements. Then we deliver a fixed-scope architecture proposal within 24 hours.
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
                label="Request Custom Portfolio Audit"
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
