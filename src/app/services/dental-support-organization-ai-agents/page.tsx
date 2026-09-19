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

const CANONICAL_URL = 'https://factoryjet.com/services/dental-support-organization-ai-agents';
const PAGE_TITLE = 'AI Receptionist Agents for Dental Support Organizations | FactoryJet';
const PAGE_DESC =
  'Custom HIPAA-compliant AI receptionist and scheduling agents for dental support organizations (DSOs). Centralized answering across every location, synced with Denticon and Dentrix Ascend. Get an audit.';
const PAGE_MODIFIED = '2026-09-19';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Dental Support Organization AI Agents', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai receptionist for dental support organizations',
    'dso ai scheduling agent',
    'multi location dental ai receptionist',
    'ai voice agent for dental groups',
    'dental support organization software',
    'centralized dental scheduling',
    'dso call center',
    'dental answering service',
    'ai receptionist for dso',
    'multi-location dental practice ai',
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
        url: 'https://factoryjet.com/images/dso/dso-multi-location-reception.webp',
        width: 1600,
        height: 1067,
        alt: 'Modern dental office reception and waiting area representing centralized AI receptionist coverage for a multi-location dental support organization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/dso/dso-multi-location-reception.webp'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'compliance', label: 'HIPAA & Compliance' },
  { key: 'platforms', label: 'PMS & System Integration' },
  { key: 'operations', label: 'Centralized Operations & Roll-Ups' },
  { key: 'deployment', label: 'Deployment & Scale' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'operations',
    question: 'What is a dental support organization (DSO)?',
    answer:
      'A dental support organization is a company that provides the non-clinical side of running a dental practice, things like billing, HR, purchasing, marketing, and scheduling systems, to a group of affiliated dental offices. In most states, the dentists still own the clinical practice itself, because corporate-practice-of-dentistry laws restrict who can own a dental business. The DSO owns or manages everything around the clinical work instead, often across dozens or hundreds of locations under one parent company.',
  },
  {
    category: 'operations',
    question: 'How is an AI receptionist for a DSO different from one built for a single dental practice?',
    answer:
      'A single-practice AI receptionist only has to handle one office\'s hours, one calendar, and one system. A DSO-wide deployment has to keep dozens or hundreds of locations straight at once, each with its own hours, operatory rules, and sometimes its own consumer-facing brand name, while rolling everything up into one reporting view for a regional or corporate operations team. The underlying voice and booking technology is similar. The configuration, integration, and reporting layer around it is built for a portfolio, not one office.',
  },
  {
    category: 'compliance',
    question: 'Is an AI receptionist for a dental support organization HIPAA compliant?',
    answer:
      'It is built to support HIPAA compliance, which comes from contracts and controls rather than a label on the product. Every deployment runs under a signed Business Associate Agreement (BAA). Voice audio and patient data are encrypted in transit with TLS 1.3 and at rest with AES-256. We run zero data retention on every speech-to-text and language model endpoint, so patient information is never cached or used to train a public model.',
  },
  {
    category: 'compliance',
    question: 'Who signs the Business Associate Agreement, the DSO or each individual practice?',
    answer:
      'It depends on how your portfolio is legally structured, and that is a question for your compliance counsel, not us. Some DSOs sign one master BAA at the parent company level that covers every affiliated practice. Others need a separate BAA per practice entity, because each location is its own professional corporation under state corporate-practice-of-dentistry rules. We build the agreement structure around whichever model your legal team has already set up, not the other way around.',
  },
  {
    category: 'compliance',
    question: 'How do you handle HIPAA when different locations are separate legal entities under one DSO?',
    answer:
      'Each location\'s patient data stays logically separated inside our system, even when the same AI agent and the same corporate dashboard serve every practice. A regional manager can see call and booking activity across the region they oversee. A single location\'s front-desk staff see only their own practice\'s calls. Access is role-based and logged, so the fact that practices share infrastructure does not mean they share exposure to each other\'s patient records.',
  },
  {
    category: 'compliance',
    question: 'Where is patient data stored and processed during a call?',
    answer:
      'Patient data stays inside a dedicated, single-tenant private cloud environment hosted on AWS or Google Cloud, in a US healthcare-compliant data region. During the call itself, audio is processed in memory only. Structured appointment and message data gets written straight into the practice\'s practice management system through an encrypted API. There is no extra, unmanaged storage step sitting in between.',
  },
  {
    category: 'compliance',
    question: 'Does a newly acquired practice need its own BAA before the AI agent can answer its calls?',
    answer:
      'Yes. We do not connect any location, newly acquired or long-standing, until a countersigned BAA covering that practice is in place. For a DSO that is actively acquiring, this usually means the BAA structure gets set up once at the corporate or regional level, so adding a new location afterward is a configuration step rather than a fresh legal negotiation every time. Your compliance team decides which structure to use.',
  },
  {
    category: 'platforms',
    question: 'Which practice management systems do you integrate with for a multi-location dental group?',
    answer:
      'We build direct, two-way connectors for the cloud platforms most DSOs standardize on centrally, Denticon and Dentrix Ascend, plus the practice-level systems that newly acquired offices often still run when they join the group, including Open Dental, Eaglesoft, Curve Dental, and standalone Dentrix. Running something else? We scope a custom connector against its published API, or work from its scheduled export files if it does not have one.',
  },
  {
    category: 'platforms',
    question: 'Do DSOs typically use Denticon or Dentrix Ascend instead of single-office Dentrix?',
    answer:
      'Often, yes, for the locations that have been fully onboarded onto the DSO\'s central platform. Denticon (from Planet DDS) and Dentrix Ascend (from Henry Schein) are both cloud-based practice management systems marketed specifically at multi-location groups, with centralized reporting, organization-wide visibility, and implementation support built around group and DSO rollouts rather than a single office. That said, plenty of DSOs run a mix, some locations centralized, others not yet migrated, especially right after an acquisition.',
  },
  {
    category: 'platforms',
    question: 'What happens when a newly acquired practice still runs Eaglesoft or Open Dental?',
    answer:
      'We connect to whatever system that practice is running on day one of the acquisition, instead of waiting for it to migrate to the DSO\'s central platform first. That means patients at a newly acquired office keep getting the same call coverage and booking accuracy as a long-standing location, using a custom connector against Eaglesoft, Open Dental, Curve Dental, or whatever system is already in place. When the practice later migrates to Denticon or Dentrix Ascend, we cut the agent over to the new system without a gap in coverage.',
  },
  {
    category: 'platforms',
    question: 'Can the agent work across several different PMS platforms at the same time, one per location?',
    answer:
      'Yes. That is the normal state for a DSO in active acquisition mode. The agent runs the same voice pipeline and the same brand-consistent script everywhere, but the connector underneath is configured per location, reading and writing to whichever system, Denticon at one office, Eaglesoft at another, that location actually runs. Patients never notice a difference in how the call is handled.',
  },
  {
    category: 'platforms',
    question: 'How does it check operatory availability and hygienist-versus-doctor time blocks at each location?',
    answer:
      'Dental scheduling has its own rules that a generic calendar does not follow. The agent reads live operatory availability across separate hygienist and doctor columns, respects procedure-specific time blocks and same-day emergency slots, and books against each location\'s own appointment book, not a generic shared calendar. Those rules are configured per location, because a downtown practice and a suburban satellite office often run different operatory setups.',
  },
  {
    category: 'platforms',
    question: 'Can it verify dental insurance eligibility before the appointment?',
    answer:
      'Yes. The agent collects the patient\'s insurance carrier, member ID, group number, and date of birth by voice, then sends an automated 270/271 EDI eligibility check to your clearinghouse. Active coverage and estimated copay get confirmed before the visit is finalized, at whichever location the patient is calling.',
  },
  {
    category: 'operations',
    question: 'How does centralized scheduling work across dozens or hundreds of locations?',
    answer:
      'Callers can reach one central number that routes to the right location automatically, or each location can keep its own number with the same backend system answering all of them, whichever your DSO already operates on. Either way, the agent knows which practice it is answering for, pulls that location\'s real schedule and policies, and books directly into that location\'s calendar. Nothing gets funneled through a shared, generic queue that does not know which office a caller actually needs.',
  },
  {
    category: 'operations',
    question: 'Can each location or brand keep its own name, hours, and script while still running on one system?',
    answer:
      'Yes. Location-level configuration is the whole point of a DSO build. Each practice keeps its own name, hours, holiday schedule, and any brand-specific greeting, while the underlying voice pipeline, HIPAA controls, and reporting layer are shared across the portfolio. A patient calling a newly rebranded acquisition hears that brand\'s name, not the DSO\'s corporate name.',
  },
  {
    category: 'operations',
    question: 'What does the roll-up integration playbook for a newly acquired practice actually involve?',
    answer:
      'It is a templated onboarding sequence rather than a full rebuild each time. We confirm the BAA structure covers the new entity, connect to whatever PMS the practice already runs, load its hours and operatory rules, and configure its greeting and script inside the existing shared system. Because the voice pipeline, compliance controls, and reporting layer are already built for the rest of the portfolio, adding one more location is mostly configuration, not new engineering.',
  },
  {
    category: 'operations',
    question: 'How does a regional or corporate operations team see performance across the whole portfolio?',
    answer:
      'A rollup dashboard shows call volume, booking rates, and missed-call recovery by location, region, and portfolio-wide, with role-based access so a regional director sees their region and corporate leadership sees everything. Individual front-desk staff see only their own practice\'s activity. That gives an operations team one place to spot which locations are converting calls well and which need attention, instead of pulling reports from a dozen separate answering services.',
  },
  {
    category: 'operations',
    question: 'Can it handle multiple brands under one DSO with different consumer-facing names?',
    answer:
      'Yes. Many DSOs keep the local brand name of an acquired practice rather than renaming every location to match the parent company. The agent is configured per brand and per location, so a caller to one acquired practice hears that practice\'s name and gets that practice\'s specific policies, while the DSO still gets one unified system and one unified report across every brand it owns.',
  },
  {
    category: 'operations',
    question: 'Does every location need its own phone number, or can DSOs centralize the answering point?',
    answer:
      'Either model works. Some DSOs keep each acquired practice\'s existing phone number for continuity with patients who already know it. Others route everything through fewer central numbers to simplify marketing and directory listings. The agent identifies which location a call belongs to either way, so the choice comes down to your brand and patient-communication strategy, not a technical limitation.',
  },
  {
    category: 'operations',
    question: 'How does patient recall and reactivation work at DSO scale?',
    answer:
      'The agent scans each location\'s schedule for overdue cleanings and follow-ups, then places an outbound voice call or text within the calling-hour rules set by the Telephone Consumer Protection Act (TCPA). Because this runs from one system across the portfolio, a corporate operations team can see recall completion rates by location instead of relying on each office to run its own recall list separately.',
  },
  {
    category: 'operations',
    question: 'What happens to call volume during a location\'s transition period after acquisition?',
    answer:
      'The agent keeps answering that location\'s calls the entire time, against whatever system it is running that week, whether that is its original legacy PMS on day one or the DSO\'s central platform after migration. The goal is that patients never experience a gap in scheduling accuracy just because the practice changed ownership or is mid-migration to a new system.',
  },
  {
    category: 'deployment',
    question: 'How long does it take to deploy across a DSO with dozens of locations?',
    answer:
      'We start with one pilot location to prove out the integration and compliance structure, which usually takes three to five weeks from scoping to a live pilot, similar to a single-practice build. Rolling out to additional locations afterward is faster, because the voice pipeline, HIPAA structure, and reporting layer are already built. Each new location mostly needs its own PMS connection, hours, and script loaded in, which typically takes a few days per site rather than a full rebuild.',
  },
  {
    category: 'deployment',
    question: 'What does it cost to roll this out DSO-wide?',
    answer:
      'Cost mostly depends on three things: how many locations and call volume the portfolio has, how many different practice management systems it runs across those locations, and how much of the roll-up onboarding needs to happen up front versus phased in as acquisitions close. A DSO standardized on one PMS across most locations costs less to build than a portfolio running five different legacy systems from past acquisitions. Ask for a scoped quote based on your actual location count and systems, not a flat number that ignores your portfolio.',
  },
  {
    category: 'deployment',
    question: 'Do we own the code and workflow logic, or is this a rented SaaS product?',
    answer:
      'You own it. FactoryJet builds custom infrastructure that becomes your permanent asset: every workflow, every PMS connector, every location-level configuration. There is no vendor lock-in and no per-seat SaaS fee that scales against you as you add locations. If your DSO later wants to run this in-house or switch vendors, you get the full codebase, not just an export of your call data.',
  },
  {
    category: 'deployment',
    question: 'How do you handle a DSO that is actively acquiring new practices every quarter?',
    answer:
      'That is the normal case, not an edge case, for this kind of build. The system is designed so that adding a location is a repeatable, templated process rather than a one-off project each time. Once the first handful of locations are live, most DSOs in acquisition mode can bring a newly closed practice onto the system within the same onboarding cycle their broader integration team already runs for billing, HR, and branding.',
  },
  {
    category: 'deployment',
    question: 'What\'s the biggest risk of using AI receptionist agents across many dental locations at once?',
    answer:
      'The biggest risk is treating every location as identical when they are not. A location running on a different PMS, in a different state with different compliance requirements, or under a different local brand needs its own configuration, not a copy-paste rollout. We manage that by configuring each location individually inside one shared system, and by keeping a full transcript log per location so an operations team can catch a misconfigured office quickly instead of finding out from a patient complaint.',
  },
  {
    category: 'deployment',
    question: 'Which AI receptionist is the best for a dental support organization?',
    answer:
      'There is no single best answer. It depends on your location count, how many different practice management systems your portfolio runs, and how centralized your reporting needs to be. When evaluating any vendor for a DSO, check five things: does it sign a BAA structure that matches how your practices are legally organized, does it read and write to each location\'s actual PMS in real time, does it keep each location\'s own brand and hours while rolling data up into one dashboard, do you own the workflow and code or rent it monthly, and can it onboard a newly acquired practice without a multi-month rebuild. A tool built for a single dental office usually cannot answer yes to the portfolio-level questions.',
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
  name: 'Dental Support Organization AI Receptionist & Scheduling Agent Development',
  serviceType: 'Dental Support Organization AI Agent Development',
  description:
    'Custom HIPAA-compliant AI receptionist and scheduling agents for dental support organizations, centralizing answering across every location and integrating with Denticon, Dentrix Ascend, and practice-level legacy systems.',
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
    name: 'Dental Support Organization AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Centralized Multi-Location AI Receptionist for DSOs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roll-Up & Newly Acquired Practice Integration Agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Brand DSO Patient Scheduling & Recall Automation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate & Regional Operations Reporting Dashboard',
        },
      },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How We Build and Deploy AI Receptionist Agents Across a Dental Support Organization',
  description:
    'A structured four-phase engineering methodology for deploying HIPAA-compliant, PMS-synced AI receptionist agents across a multi-location dental group, with a repeatable playbook for newly acquired practices.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Corporate Discovery and Pilot Location Selection',
      text: 'We map the DSO\'s legal and BAA structure, review which PMS platforms are running across the portfolio, and select one pilot location to prove out the build.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Pilot Integration and HIPAA Structure',
      text: 'We connect the pilot location\'s PMS, configure its scheduling rules and brand script, and finalize the BAA structure that will extend to additional locations.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Phased Multi-Location Rollout',
      text: 'We roll the same system out location by location, configuring each practice\'s PMS connection, hours, and script while feeding results into one corporate dashboard.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Roll-Up Standard Operating Procedure for New Acquisitions',
      text: 'We hand off a repeatable onboarding checklist so a newly acquired practice can be added to the system on the same timeline as the DSO\'s other integration workstreams.',
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

export default function DentalSupportOrganizationAiAgentsPage() {
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
                    // AI RECEPTIONIST AGENTS FOR DENTAL SUPPORT ORGANIZATIONS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Receptionist &amp; Scheduling Agents for Dental Support Organizations.
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] font-normal leading-relaxed mb-8 max-w-2xl">
                  We build private AI voice agents for dental support organizations (DSOs), the groups that run dozens or hundreds of dental locations under one company. The agent answers every location&apos;s calls, books directly into each practice&apos;s real operatory schedule, and keeps each brand&apos;s name and script consistent. It syncs with Denticon, Dentrix Ascend, and whatever legacy system a newly acquired practice still runs, and rolls call and booking data up into one dashboard for your operations team.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="dental-support-organization-ai-agents"
                    region="us"
                    submitLabel="Request DSO AI Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>HIPAA BAA Structure for Multi-Entity DSOs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Denticon &amp; Dentrix Ascend Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Roll-Up Integration for New Acquisitions.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/dso/dso-multi-location-reception.webp"
                      alt="Modern dental office reception and waiting area representing centralized AI receptionist coverage for a multi-location dental support organization"
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
                      <span>PORTFOLIO-WIDE INTAKE.</span>
                      <span className="text-[#10B981] font-bold">24/7 ACTIVE</span>
                    </div>
                    <div className="text-sm font-bold text-[#14110F]">
                      Denticon + Dentrix Ascend Multi-Location Sync Active.
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
                // Definition: What Is an AI Receptionist for a Dental Support Organization?
              </div>
              <p className="text-base sm:text-lg text-[#14110F] leading-relaxed font-medium">
                An AI receptionist for a dental support organization (DSO) is custom software that answers phone calls for every practice inside a multi-location dental group from one system, instead of one receptionist per office. It reads each location&apos;s real operatory schedule from that location&apos;s practice management system, whether that is a centralized platform like Denticon or a legacy system a newly acquired office still runs. It keeps each location or brand&apos;s own name, hours, and script consistent, and it rolls call and booking data up into one dashboard for a regional or corporate operations team. Everything runs under a HIPAA Business Associate Agreement structured around how the DSO&apos;s practices are legally organized.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET STATISTICS */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED DSO INDUSTRY BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">How Large the DSO Category Actually Is.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  8.5K+
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Practices Inside Just 80 DSO Members.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  The Association of Dental Support Organizations counts more than 8,500 supported practices and roughly $18 billion in represented revenue across its 80 member organizations alone. That is the scale a single DSO contract can cover, dozens or hundreds of locations under one agreement instead of one deal per office.
                </p>
                <a
                  href="https://www.theadso.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Association of Dental Support Organizations &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  10%+
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Of All US Dentists Are DSO-Affiliated.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  ADA News, citing Association of Dental Support Organizations data, reported that more than 10% of all US dentists were affiliated with a DSO-supported practice as of 2019, and the share is higher among younger dentists: about 20% of dentists under 34, versus 10% of dentists over 50. The trend has been toward more consolidation since, not less.
                </p>
                <a
                  href="https://adanews.ada.org/ada-news/2022/march/main-types-of-dsos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: ADA News &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  59.3%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Of DSO Dentists Call Staffing Their Top Concern.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Industry survey data reported by Group Dentistry Now found 59.3% of DSO-affiliated dentists named staffing a leading concern, and a separate Q1 2026 read found 20.7% reporting inadequate administrative staffing specifically, the front-desk and phone-answering roles this kind of agent takes work off of.
                </p>
                <a
                  href="https://www.groupdentistrynow.com/dso-group-blog/dso-call-center-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline mt-4 inline-block"
                >
                  Source: Group Dentistry Now &rarr;.
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE DSO CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for Portfolios, Not Single Offices.</h2>
              <p className="text-lg text-[#46403B]">
                Everything required to centralize patient answering and scheduling across a multi-location dental group without losing each practice&apos;s own identity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Centralized Multi-Location Answering &amp; Scheduling.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  One system answers calls for every location, whether they route through central numbers or each practice&apos;s own line, and books directly into that location&apos;s real operatory calendar.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Location-aware call routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Per-location operatory booking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero call hold times, any location
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Bi-Directional Sync Across Denticon, Dentrix Ascend &amp; Legacy Systems.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Connects directly to the cloud platforms most DSOs standardize on, plus the practice-level systems a newly acquired office often still runs, all inside the same portfolio.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Denticon &amp; Dentrix Ascend APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Open Dental, Eaglesoft, Curve Dental
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> One location, one system, per site
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Standardized Patient Experience Across Brands.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Each acquired practice can keep its own local name and script, while every caller gets the same call quality, hold times, and booking accuracy, no matter which brand they dialed.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Per-brand greeting &amp; script
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Consistent voice quality portfolio-wide
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Shared compliance controls underneath
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Roll-Up &amp; Newly Acquired Practice Integration.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  A templated onboarding playbook connects a newly acquired office to its existing PMS on day one, then cuts it over cleanly once it migrates to the DSO&apos;s central platform.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Day-one legacy system connection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> No coverage gap during migration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Repeatable onboarding checklist
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Corporate &amp; Regional Reporting Rollup.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Call volume, booking rates, and missed-call recovery roll up by location, by region, and portfolio-wide, so an operations team can see the whole picture from one dashboard.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Location, region &amp; portfolio views
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Role-based dashboard access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Recall &amp; reactivation tracking
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">HIPAA Shield at Multi-Entity Scale.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Structured for how DSOs are actually organized legally, whether that means one master BAA at the corporate level or separate agreements per practice entity, with data kept logically separated per location.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> BAA structure matched to your entities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Zero vendor training-data retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Immutable per-location audit trails
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DSO SEGMENT USE CASES */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED DSO SEGMENTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Configured for How Your Portfolio Actually Grew.</h2>
              <p className="text-lg text-[#46403B]">
                A DSO with 200 locations acquired over a decade looks different from one adding five practices a quarter. We configure the rollout to match where your portfolio actually is.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // PRIVATE-EQUITY-BACKED ENTERPRISE DSOS
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">One Contract, Hundreds of Locations.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Large, private-equity-backed groups need one system that scales to hundreds of locations without hundreds of separate vendor relationships. We build a single deployment your corporate operations team manages centrally, with per-location configuration handled without a new contract for every office.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Single Master Agreement.</li>
                  <li>&bull; Portfolio-Wide Reporting.</li>
                  <li>&bull; Corporate Compliance Oversight.</li>
                  <li>&bull; Predictable Per-Location Rollout.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // REGIONAL &amp; EMERGING DSOS
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Built to Grow With Active Acquisition.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  A regional DSO adding a handful of practices a year needs the roll-up playbook more than anything else. We set up the first locations, then hand you a repeatable checklist so each new acquisition gets connected on the same timeline as your billing and HR onboarding.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Repeatable Onboarding Checklist.</li>
                  <li>&bull; Legacy PMS Day-One Coverage.</li>
                  <li>&bull; Regional Manager Dashboards.</li>
                  <li>&bull; Scales as You Acquire.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // MULTI-BRAND DSOS
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Different Names, One Backend.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Many DSOs keep an acquired practice&apos;s original local brand rather than renaming every location. The agent is configured per brand, so a patient calling a locally known name gets that practice&apos;s greeting and policies, while corporate still gets one unified system.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Per-Brand Greetings &amp; Scripts.</li>
                  <li>&bull; Local Name Continuity.</li>
                  <li>&bull; One Shared Compliance Layer.</li>
                  <li>&bull; Cross-Brand Reporting Rollup.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // ORTHODONTIC, PEDIATRIC &amp; SPECIALTY GROUPS
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14110F] mb-4">Specialty Scheduling Rules, Handled Correctly.</h3>
                <p className="text-sm sm:text-base text-[#46403B] leading-relaxed mb-6">
                  Orthodontic and pediatric groups run different visit types, longer consultation slots, guardian-consent questions, than a general dentistry DSO. We configure those rules per specialty and per location, instead of forcing a generic dental scheduling template onto a practice type it was not built for.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6] list-none">
                  <li>&bull; Specialty-Specific Visit Types.</li>
                  <li>&bull; Guardian &amp; Consent Handling.</li>
                  <li>&bull; Consultation Slot Logic.</li>
                  <li>&bull; New-Patient Intake Screening.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PMS COVERAGE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Which Dental Practice Management Systems We Connect To.</h2>
              <p className="text-lg text-[#46403B]">
                Most DSOs run more than one system at once, a central cloud platform for mature locations, and whatever an acquired practice already had, until it migrates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Cloud DSO-Native Platforms.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Denticon</span> (Planet DDS): cloud-based practice management built specifically to help DSOs scale, with organization-wide visibility across locations.</li>
                  <li><span className="font-bold text-[#14110F]">Dentrix Ascend</span> (Henry Schein): cloud-based system with multi-location dashboards and benchmarking built for DSOs and larger group practices.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Practice-Level &amp; Legacy Systems.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Open Dental</span>: open API access, common at independent practices before or after a DSO acquisition.</li>
                  <li><span className="font-bold text-[#14110F]">Eaglesoft</span>: chairside scheduling common at single-office and small-group practices a DSO has recently acquired.</li>
                  <li><span className="font-bold text-[#14110F]">Curve Dental</span> and standalone Dentrix: cloud-native or legacy scheduling still running at some newly acquired locations.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  These are the systems a location most often runs before it migrates to the DSO&apos;s central platform, and we connect to them from day one.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Custom &amp; Other Systems.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Running a regional or less common PMS not listed here? We scope a custom connector against its published API. For smaller vendors without one, we work from its scheduled export and import files instead, so a location is never left uncovered while it waits for a standard integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure what a DSO-wide rollout actually looks like?"
          sub="Tell us your location count and which practice management systems your portfolio runs today. We'll map exactly what a phased rollout looks like, location by location."
          label="Get a DSO AI audit"
        />

        {/* TECHNICAL ARCHITECTURE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TECHNICAL ARCHITECTURE &amp; COMPLIANCE SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">The Portfolio-Scale Telephony &amp; PMS Integration Stack.</h2>
              <p className="text-lg text-[#46403B]">
                How we hit reliable multi-location coverage, HIPAA structure that matches your entities, and centralized reporting across every practice.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">01 // TELEPHONY INGRESS AT PORTFOLIO SCALE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Multi-Location SIP Trunking.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We deploy dedicated SIP trunks with Session Border Controller redundancy across every location, whether calls route through central numbers or each practice keeps its own line. One carrier path failing at one location does not affect the rest of the portfolio.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">02 // PER-LOCATION CONFIGURATION ENGINE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">One Codebase, Independent Per-Location Rules.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Brand name, hours, greeting script, and operatory rules are configured independently per location, on top of one shared engineering codebase, so adding a location is configuration work, not new development.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">03 // DETERMINISTIC REASONING &amp; STATE MACHINE.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Rule-Based Guardrails on Every Call, Every Location.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We never connect a raw generative model straight to phone audio without guardrails. The state machine enforces each location&apos;s scheduling rules and collects required patient details in order, and it cannot invent policy that a location has not actually configured.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">04 // MULTI-PMS BRIDGE LAYER.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Denticon, Dentrix Ascend &amp; Legacy Connectors, Side by Side.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The bridge layer connects each location to whichever system it actually runs, a central cloud platform at mature locations and a legacy system at newly acquired ones, without forcing every office onto the same integration before it can go live.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">05 // ZERO-RETENTION HIPAA SHIELD FOR MULTI-ENTITY DSOS.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Encrypted Single-Tenant Cloud, Logically Separated Per Location.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  All audio processing and database sync happen inside an isolated, single-tenant private cloud in a US healthcare-compliant region. Patient data stays logically separated by location and legal entity, and we hold zero-data-retention agreements with every AI provider in the pipeline.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">06 // 270/271 EDI INSURANCE PRE-VERIFICATION.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Real-Time Eligibility Checks at Every Location.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  When a caller gives insurance details, the agent sends an automated 270 eligibility request to your clearinghouse and reads the 271 response back within seconds, at whichever location the caller reached.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">07 // ROLL-UP ONBOARDING AUTOMATION.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Templated Setup for Newly Acquired Practices.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A new acquisition gets a checklist-driven setup: confirm BAA coverage, connect the PMS it already runs, load hours and operatory rules, configure the greeting. Because the shared engine already exists, this is measured in days, not a rebuild.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">08 // CENTRALIZED REPORTING &amp; BI ROLLUP.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Location, Region &amp; Portfolio Dashboards.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Call volume, booking rates, and recall completion roll up automatically by location, by region, and across the whole DSO, so a corporate operations team is not stitching together reports from separate answering services.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">09 // ROLE-BASED ACCESS ACROSS CORPORATE, REGIONAL &amp; LOCATION TIERS.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Every Login Scoped to What It Should See.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A single location&apos;s front-desk staff see only their own practice&apos;s activity. A regional director sees their region. Corporate compliance sees everything, with a full audit trail of who viewed what.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">10 // IMMUTABLE AUDIT LOGGING &amp; TELEMETRY.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Every Call, Every Location, One Searchable Record.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every inbound call, booking, and eligibility check across the portfolio gets logged into an immutable, encrypted audit trail, so a compliance review or an underperforming location can be traced without relying on anyone&apos;s memory of the call.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ONBOARDING TIMELINE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ROLLOUT PROCESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Onboarding Timeline: From Corporate Discovery to Portfolio-Wide Coverage.</h2>
              <p className="text-lg text-[#46403B]">
                Every DSO deployment starts with one pilot location, then extends the same system outward, with a permanent playbook for future acquisitions.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 1 // WEEK 1.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Corporate Discovery &amp; Pilot Location Selection.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We map the DSO&apos;s legal and BAA structure, review which PMS platforms are running across the portfolio, and pick one pilot location to prove out the build before committing to a full rollout.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 2 // WEEKS 2 TO 3.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Pilot Integration &amp; HIPAA Structure.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We connect the pilot location&apos;s PMS, configure its scheduling rules and brand script, and finalize the BAA structure that will extend to additional locations as they come online.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 3 // WEEKS 4 TO 6.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Phased Multi-Location Rollout.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We roll the system out location by location, connecting each practice&apos;s PMS, loading its hours and operatory rules, and feeding its activity into the shared corporate dashboard.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 4 // ONGOING.</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Roll-Up Playbook for New Acquisitions.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  We hand off a repeatable onboarding checklist so your team, or ours, can add a newly acquired practice to the system on the same timeline as its billing, HR, and branding integration.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ARCHITECTURAL EVALUATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom AI Agents vs Traditional Alternatives.</h2>
              <p className="text-lg text-[#46403B]">
                Why purpose-built, portfolio-scale infrastructure outperforms a single-office chatbot or a per-location answering service.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E7DED6]">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FAFAF7] text-xs font-mono text-[#6E655F]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">EVALUATION CRITERIA.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">FACTORYJET CUSTOM AI.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">GENERIC SAAS DENTAL BOTS.</th>
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">PER-LOCATION ANSWERING SERVICES.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6] text-sm text-[#46403B]">
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Multi-Location Centralized Configuration.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      One system, unlimited locations
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Usually single-office only.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Separate contract per location.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">PMS Coverage Breadth.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Denticon, Dentrix Ascend + legacy systems
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Usually one PMS integration.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual message taking, no PMS sync.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Roll-Up Integration Speed.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Templated, days per new location
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Not designed for M&amp;A onboarding.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">New vendor contract each time.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">HIPAA Structure for Multi-Entity DSOs.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      BAA structure matched to your entities
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Single generic BAA, if any.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Varies by call center vendor.</td>
                  </tr>
                  <tr className="bg-[#FFF8F5]/30">
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Corporate/Regional Reporting Rollup.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      One dashboard, portfolio-wide
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-account dashboards, no rollup.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">No reporting, per-minute billing only.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-[#14110F]">Code Ownership.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Client Owned (No lock-in)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Perpetual per-location SaaS fee.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Per-minute call billing, per office.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VENDOR DUE DILIGENCE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                {'// VENDOR DUE DILIGENCE'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Six Questions to Ask Any AI Vendor Before a DSO-Wide Rollout.</h2>
              <p className="text-lg text-[#46403B]">
                A vendor&apos;s HIPAA claim is only as strong as the contract and the controls behind it, and that gets more complicated, not less, once dozens of legal entities are involved. These are the questions we expect a DSO&apos;s compliance officer to ask us, each with the regulation it comes from. None of this is legal advice. Your compliance counsel makes the final call.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 01</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Will you sign a business associate agreement that covers every practice in our portfolio?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  A vendor that creates, receives, maintains, or transmits protected health information (PHI) for any of your practices is a business associate under{' '}
                  <a
                    href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#F05A28]"
                  >
                    45 CFR 160.103
                  </a>
                  . The contract has to spell out how PHI may be used and disclosed, under 45 CFR 164.504(e), for every entity the vendor touches, not just one flagship location.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 02</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">How do you structure the BAA when each location is a separate legal entity?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  State corporate-practice-of-dentistry laws often keep each location&apos;s clinical practice as its own professional corporation, even under one DSO umbrella. Ask whether the vendor can work with one master agreement at the DSO level, separate agreements per practice, or both, depending on how your legal team has structured ownership.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 03</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">What is the smallest slice of patient data the agent can see at each location?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The minimum necessary standard in 45 CFR 164.502(b) asks for reasonable efforts to limit PHI to what a task needs. A scheduling agent needs a name, contact details, and open slots at that location, not every patient record across the portfolio.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 04</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Does every location and staff role get its own login?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Unique user identification is a required safeguard under{' '}
                  <a
                    href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#F05A28]"
                  >
                    45 CFR 164.312(a)(2)(i)
                  </a>
                  . Shared logins make it hard to trace who opened a record, which gets harder to manage, not easier, once dozens of locations share one platform.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 05</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Is every action, at every location, written to one auditable log?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  The audit controls standard in 45 CFR 164.312(b) calls for tools that record and examine activity in systems holding electronic PHI. Ask the vendor to show you a real log entry, and confirm the log spans every location, not just the ones onboarded first.
                </p>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">QUESTION 06</div>
                <h3 className="text-lg font-bold text-[#14110F] mb-2">How long are logs and compliance records kept, portfolio-wide?</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Security Rule documentation must be kept for 6 years from the date it was created or last in effect, whichever is later, under{' '}
                  <a
                    href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#F05A28]"
                  >
                    45 CFR 164.316(b)(2)(i)
                  </a>
                  . Retention has to hold for every location and every legal entity in the portfolio, including ones acquired years after the system first went live.
                </p>
              </li>
            </ol>
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
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Leadership from Discovery to Portfolio Rollout.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  A portfolio-wide deployment leaves no room for guesswork. At FactoryJet, founder Bhavesh Barot runs every DSO discovery session himself. In the first meeting, we review your location count, which practice management systems your portfolio actually runs, and how your legal entities and BAA structure are set up.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have already built high-scale voice pipelines and multi-tenant integrations. We never hand a portfolio-wide healthcare deployment to junior salespeople or offshore contractors. The same senior-only approach runs across our broader{' '}
                  <Link href="/services/healthcare-ai-agents" className="underline hover:text-[#F05A28]">
                    healthcare AI agents
                  </Link>{' '}
                  practice, and our wider{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  work, not just dental.
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
                    label="Request DSO Scoping Proposal."
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
          eyebrow="// DSO AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on AI Receptionist Agents for DSOs."
          lead="Everything regional and corporate operations leaders, compliance officers, and DSO founders need to know about HIPAA structure, PMS integration, and rolling out across a portfolio."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FAFAF7]"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // ONE CONTRACT, EVERY LOCATION &bull; BUILT FOR HIPAA-COMPLIANT MULTI-ENTITY OPERATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Centralize AI Receptionist Coverage Across Your DSO?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will review your location count, your practice management systems, and your BAA structure. Then we deliver a fixed-scope architecture proposal within 24 hours.
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
                label="Request Custom DSO Audit"
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
