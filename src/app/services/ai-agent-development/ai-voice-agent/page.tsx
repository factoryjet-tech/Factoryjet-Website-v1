import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

export const metadata: Metadata = {
  title: 'AI Voice Agent Development for US Businesses | FactoryJet',
  description:
    'AI voice agent development for US businesses: English and Spanish callers for lead qualification, appointment booking, and inbound calls. Fixed price.',
  keywords: [
    'AI voice agent development',
    'AI voice agent development company USA',
    'AI phone agent development',
    'custom AI calling agent US',
    'voice AI agent developers',
    'AI outbound calling agent USA',
    'AI voice agent for lead qualification',
    'TCPA compliant AI calling',
    'conversational voice AI development USA',
    'AI voice agent HubSpot Salesforce integration',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agent Development for US Businesses | FactoryJet',
    description: 'AI voice agents in English and Spanish for lead qualification, appointment booking, and inbound calls. Fixed price. Live in 3–5 weeks.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp', width: 1200, height: 800, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agent Development USA | FactoryJet',
    description: 'AI callers in English and Spanish for lead qualification, appointments, and inbound calls. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Voice Agent Development USA',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  description: 'Custom AI voice agent development and integration for US businesses: English and Spanish AI callers for lead qualification, appointment booking, payment reminders, and inbound call handling, integrated with HubSpot or Salesforce.',
  areaServed: 'US',
  serviceType: 'AI Voice Agent Development',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
};

const VOICE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Use Case Discovery',
    description: 'We define the call objective, conversation flow, expected objections, and handoff triggers. We write the script in English and Spanish, confirm where consent for the call comes from, validate the CRM integration points, and agree on success metrics (answer rate, qualification rate, booking rate).',
  },
  {
    number: '02',
    title: 'Voice & Persona Design',
    description: 'We select the voice model, accent, pacing, and tone that fit your brand and your customers. For Spanish, we pick a dialect that matches your market and tune pronunciation of product names, street names, and city names. You approve voice samples before we build anything.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the voice agent on Twilio, Telnyx, or Vonage for telephony, connected to your HubSpot, Salesforce, Google Calendar, or Stripe as required. The agent is deployed to a test environment with a dedicated number so your team can call it before anyone else does.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run 100+ test calls against a controlled lead set, review transcripts, identify failure modes, and tune the conversation flow. Extra attention goes to accents, background noise, hands-free audio, and callers who switch between English and Spanish mid-sentence.',
  },
  {
    number: '05',
    title: 'Deploy & Scale',
    description: 'Full deployment with call monitoring, real-time transcript logging, CRM sync, and a performance dashboard. We set up alerting for low answer rates and high escalation rates, and tune the agent weekly during the first month.',
  },
];

const VOICE_STATS = [
  {
    value: '5 min',
    label: 'target response window: the agent calls a new lead within five minutes of form submission, day or night',
    microcopy: 'FactoryJet build standard on every voice deployment',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: '200+',
    label: 'calls per day handled by one AI voice agent, without additional headcount',
    microcopy: 'FactoryJet voice deployment data',
    categoryLabel: 'CALL VOLUME',
  },
  {
    value: '100%',
    label: 'of calls transcribed, dispositioned, and written back to your CRM, not a 5% supervisor sample',
    microcopy: 'FactoryJet build standard',
    categoryLabel: 'CALL COVERAGE',
  },
];

const VOICE_MARKET_STATS = [
  {
    value: '61%',
    label: 'of US residents who speak a language other than English at home speak Spanish, which is why English plus Spanish is the honest starting point for a US voice agent',
    sourceUrl: 'https://www.census.gov/newsroom/press-releases/2025/2017-2021-acs-language-use-tables.html',
    sourceLabel: 'US Census Bureau, American Community Survey 2017-2021',
  },
  {
    value: '8 AM–9 PM',
    label: 'the window FCC rules allow telephone solicitations to a residence, measured in the called party\'s local time, not yours',
    sourceUrl: 'https://www.law.cornell.edu/cfr/text/47/64.1200',
    sourceLabel: '47 CFR 64.1200(c)(1)',
  },
  {
    value: '2024',
    label: 'the year the FCC confirmed AI-generated voices count as "artificial" under the TCPA, so an AI call needs the same prior express consent as any prerecorded call',
    sourceUrl: 'https://www.fcc.gov/document/fcc-confirms-tcpa-applies-ai-technologies-generate-human-voices',
    sourceLabel: 'FCC Declaratory Ruling, February 2024',
  },
];

const VOICE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'In-House Calling Team' },
  { label: 'Call Center Outsourcing' },
  { label: 'Basic IVR System' },
] as const;

const VOICE_COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: [
      'Fixed price after a scoping call',
      'Salary plus benefits, per person, every month',
      'Per-seat or per-hour monthly retainer',
      'Per-seat license plus a setup fee',
    ],
  },
  {
    feature: 'Speaks English and Spanish',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="partial" />,
      <CompareIcon key="cc" kind="yes" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'Calls within 5 minutes of lead submission',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'Handles 200+ calls per day without extra cost',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'HubSpot / Salesforce integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'TCPA-aware calling windows, DNC scrubbing, opt-out handling',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="yes" />,
      <CompareIcon key="cc" kind="yes" />,
      <CompareIcon key="iv" kind="yes" />,
    ],
  },
  {
    feature: 'Real-time call transcript and CRM update',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'Human handoff with context summary',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="yes" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="no" />,
      <CompareIcon key="iv" kind="partial" />,
    ],
  },
  {
    feature: 'You own the code & call infrastructure',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="no" />,
      <CompareIcon key="iv" kind="partial" />,
    ],
  },
];

const VOICE_INDUSTRIES = [
  {
    name: 'Real Estate',
    description: 'The agent calls every lead from Zillow, Realtor.com, and your paid campaigns within five minutes, qualifies on budget, timeline, and area, books the showing straight to the agent\'s calendar, and writes the record back to HubSpot or Follow Up Boss.',
    example: 'Every after-hours enquiry gets a real call back instead of waiting for Monday morning.',
  },
  {
    name: 'Home Services & Contractors',
    description: 'HVAC, plumbing, roofing, and electrical: the agent picks up estimate requests from Angi, Thumbtack, and your own forms, captures job type and service address, checks crew availability, and books the estimate window.',
    example: 'Storm-week call spikes get handled without putting your office manager on phone duty all day.',
  },
  {
    name: 'Financial Services & Lending',
    description: 'First-party payment reminders, past-due follow-ups, and application status updates, with recorded consent, call recording disclosure, and full audit trails. Built to the script your compliance team signs off on, not ours.',
    example: 'Reminder calls go out on schedule with a written record of exactly what was said on each one.',
  },
  {
    name: 'Automotive',
    description: 'The agent calls leads from your dealer site and third-party listing sites, qualifies on model, trade-in, and financing intent, books the test drive, and sends the confirmation by text before the BDC opens.',
    example: 'Overnight leads arrive at the sales desk already qualified and already scheduled.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Inbound appointment booking in English and Spanish, reason-for-visit and insurance capture, confirmations and reminders by text, and no-show follow-up, with protected health information kept to the minimum the call actually needs.',
    example: 'Front-desk staff stop choosing between the patient at the counter and the phone that will not stop ringing.',
  },
  {
    name: 'DTC E-Commerce',
    description: 'Calls on high-value abandoned carts, seasonal promotions, loyalty re-engagement, and post-delivery satisfaction checks, in the customer\'s preferred language, with follow-ups by text, email, or WhatsApp if that is where your customers already are.',
    example: 'A high-ticket cart gets a human-sounding phone follow-up instead of a fourth ignored email.',
  },
];

const VOICE_PRICING_TIERS = [
  {
    name: 'Outbound Voice AI',
    priceRange: '',
    description: 'A focused AI calling agent for one outbound use case, lead qualification or appointment booking.',
    features: [
      'One outbound calling flow (qualification or booking)',
      'English and Spanish support',
      'HubSpot, Salesforce, or Google Sheets update on call completion',
      'US telephony setup (Twilio, Telnyx, or Vonage) with registered caller ID',
      'National Do Not Call Registry and internal do-not-call scrubbing',
      'Calling windows enforced in the lead\'s local time zone',
      'Real-time call transcript logging',
      'Human handoff trigger',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Full Voice AI Platform',
    priceRange: '',
    description: 'Inbound + outbound voice AI with deep CRM integration, analytics, and multi-flow support.',
    features: [
      'Inbound and outbound calling flows',
      'English and Spanish, with dialect and voice selection',
      'HubSpot or Salesforce full integration (create, update, log)',
      'Google Calendar or Calendly appointment booking',
      'Call recording, transcript, and sentiment analysis',
      'Performance dashboard (answer rate, qualification rate, booking rate)',
      'Multi-campaign support (qualification + booking + follow-up)',
      'Consent and opt-out records written back to your CRM',
      'Human handoff with live context transfer',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise Voice AI',
    priceRange: '',
    description: 'Multi-campaign voice AI with full telephony infrastructure for high-volume businesses.',
    features: [
      'Calling flows & campaigns scoped per project brief',
      'Languages beyond English and Spanish where you have real demand',
      'Full telephony infrastructure setup (SIP trunk, number provisioning, STIR/SHAKEN attestation)',
      'State-by-state call recording disclosure handling',
      'Real-time supervisor monitoring and agent override',
      'Advanced analytics: call drop rate, sentiment trends, conversion funnel',
      'API access for custom CRM integrations',
      'Dedicated infrastructure (no shared cloud)',
      '90-day post-launch support + quarterly model updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

const VOICE_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Voice AI Basics' },
  { key: 'language', label: 'English & Spanish' },
  { key: 'compliance', label: 'TCPA & Compliance' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const VOICE_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI voice agent and how is it different from a basic IVR?',
    answer: "A basic IVR (press 1 for sales, press 2 for support) can only respond to keypad inputs and fails the moment a caller speaks naturally. An AI voice agent conducts a real conversation, it understands what the caller says in natural language, responds appropriately, handles objections, asks follow-up questions, and takes actions like booking an appointment or updating a CRM record. It behaves like a trained rep, not a phone menu.",
  },
  {
    category: 'basics',
    question: 'What call types can an AI voice agent handle?',
    answer: "The most common use cases we build: outbound lead qualification (calling fresh leads within five minutes), appointment and estimate booking, first-party payment reminders and past-due follow-ups, inbound calls for FAQs and order status, post-service satisfaction calls, and win-back calls to lapsed customers. Any call with a structured objective and a predictable conversation flow is a strong candidate.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle mid-call escalations to a human agent?',
    answer: "Yes, human handoff is a core feature. If the caller asks something outside the agent's scope, expresses frustration, or explicitly requests a human, the call is transferred in real time to a live agent with a full transcript and context summary. The live agent sees everything that was discussed so the caller does not have to repeat themselves. You set the escalation trigger threshold.",
  },
  {
    category: 'basics',
    question: 'How natural does the AI voice sound? Will customers know it is AI?',
    answer: "Modern neural text-to-speech voices (ElevenLabs, Play.ht, Azure Neural Voice) sound far more natural than old IVR audio, and most callers do not clock them on a short call. We build in a disclosure at the top of the call anyway. In February 2024 the FCC confirmed that AI-generated voices count as 'artificial' under the TCPA, so these calls sit squarely inside the prerecorded-voice rules. Being upfront is both the safer position and, in our experience, the one customers respond better to.",
  },
  {
    category: 'basics',
    question: 'Do you build the agent, or resell someone else\'s product?',
    answer: "We build and integrate. You get a voice agent assembled from the model, telephony, and CRM stack that fits your use case, deployed on accounts you own, with the orchestration code handed over at the end. That is different from renting a hosted answering product: nothing about your call flows, prompts, or data is locked behind a vendor you cannot leave.",
  },
  {
    category: 'language',
    question: 'Which languages do you build AI voice agents in?',
    answer: "English and Spanish. Those two cover the overwhelming majority of US business calls, and they are the two we can honestly say we tune to production quality: voice selection, dialect, pronunciation of your product and street names, and recognition testing against real call audio. If you have genuine volume in another language we will scope it, but we will tell you upfront that it needs its own pilot rather than pretending it comes for free.",
  },
  {
    category: 'language',
    question: 'Can the AI tell whether a caller wants English or Spanish and switch automatically?',
    answer: "Yes. We configure language detection at the start of the call so the agent answers in whichever language the caller uses, and we can also offer an explicit spoken choice on inbound calls. On outbound calls, the language preference can come from your CRM record so the very first sentence is already right.",
  },
  {
    category: 'language',
    question: 'How accurate is the speech recognition on a real phone call?',
    answer: "Phone audio is narrowband, noisy, and often hands-free, which is harder than clean microphone audio. We test recognition against your actual vocabulary before go-live: product names, street and city names, account and policy numbers, and the specific phrasings your customers use. Accents, speakerphone, and road noise are the usual failure modes, and we tune for them during the test-call phase rather than discovering them in production.",
  },
  {
    category: 'language',
    question: 'Can one agent handle a caller who switches between English and Spanish mid-call?',
    answer: "Yes. Bilingual households switch languages mid-sentence, and an agent that locks to the language of the first three words will break. We tune both the recognition layer and the response layer for code-switching, and we test specifically against mixed-language inputs so the agent follows the caller rather than forcing them to pick a lane.",
  },
  {
    category: 'compliance',
    question: 'Is it legal to use an AI voice agent for outbound calls in the US?',
    answer: "Yes, within the TCPA. In February 2024 the FCC confirmed that AI-generated voices are 'artificial' under the Act, so calls using them need the called party's prior express consent, and prior express written consent for marketing calls to cell phones. FCC rules also limit telephone solicitations to a residence to the hours of 8 a.m. to 9 p.m. in the called party's local time, and require the call to identify the business responsible for it. We build consent checks, calling windows, Do Not Call scrubbing, caller identification, and opt-out handling into the agent itself. This is how we build, not legal advice: have your counsel approve your consent language and scripts.",
  },
  {
    category: 'compliance',
    question: 'How do you handle consent and opt-out requests?',
    answer: "Consent is captured at the source, in your web form language, checkbox, or a recorded verbal agreement, and stored with a timestamp, the source, and the exact wording the person agreed to. The agent recognises opt-out phrasing in English and Spanish, confirms it on the call, stops immediately, and writes the suppression to your internal do-not-call list and CRM in the same run. FCC rules require honouring a revocation of consent made by any reasonable method, so we do not restrict opt-outs to one magic phrase.",
  },
  {
    category: 'compliance',
    question: 'How do you handle calling windows across US time zones?',
    answer: "The agent calls in the recipient's local time, not your office's. We derive the time zone from the area code and, where you have it, the address on the record, and we hold calls that fall outside the permitted window until the next allowed slot. You can narrow the window further than the rules require, and many clients do. Campaign schedules are configured per campaign, so a Denver list and an Atlanta list do not dial on the same clock.",
  },
  {
    category: 'compliance',
    question: 'Can we record calls, and what about all-party consent states?',
    answer: "Yes, and recording is how you get transcripts, QA, and dispute evidence. Some states require every party on the call to consent to recording, not just one. We build a recording disclosure into the opening of the call, and we can vary or disable recording by state based on the list your counsel gives us. We do not decide which states go on that list for you.",
  },
  {
    category: 'compliance',
    question: 'What about privacy rules like CCPA/CPRA, or HIPAA in healthcare?',
    answer: "Call recordings, transcripts, and CRM records are personal information under CCPA/CPRA, so we keep them in systems you control, keep the retention window explicit, and make deletion and access requests possible rather than an afterthought. For healthcare deployments we minimise the protected health information the call touches at all, and we work within a vendor stack that will sign a business associate agreement. We do not claim any certification, and your compliance team signs off before the agent dials anyone.",
  },
  {
    category: 'compliance',
    question: 'What is the actual exposure if we get consent wrong?',
    answer: "The TCPA gives the person called a private right of action worth $500 per violating call, or actual damages if higher, and a court can increase that up to three times ($1,500 per call) if it finds the violation willful or knowing. Multiply that by a list size and the reason we treat consent records as part of the build, not as paperwork, becomes obvious. That is a description of the statute, not legal advice.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI voice agent?',
    answer: "A focused outbound voice agent for one use case (lead qualification or appointment booking) takes 3–4 weeks from kickoff to live calls. Full inbound plus outbound platforms with CRM integration take 5–6 weeks. Enterprise deployments with custom telephony infrastructure take 8–10 weeks. Timeline depends on script complexity, number of integrations, and how much language tuning you need.",
  },
  {
    category: 'process',
    question: 'What do we need to provide to get started?',
    answer: "We need: your calling use case and current script (or we write one), sample call recordings from your existing reps for voice and style reference, API access to your CRM (HubSpot, Salesforce, Go High Level, or similar), where and how consent is captured today, lead data in CSV format for the initial test batch, and a 45-minute discovery call. We handle number provisioning, carrier registration, and the telephony setup from there.",
  },
  {
    category: 'process',
    question: 'How do we monitor the AI voice agent after it goes live?',
    answer: "You get a performance dashboard showing call volume, answer rates, qualification rates, call durations, escalation rates, and revenue attribution. Every call has a transcript accessible in the dashboard. You can listen to call recordings, review AI decisions, and adjust the conversation flow through a configuration panel. We set up weekly performance review calls during the first month.",
  },
  {
    category: 'process',
    question: 'What if the AI voice agent underperforms, who is responsible?',
    answer: "We guarantee a working AI voice agent that meets the agreed qualification or booking metrics in the test environment before go-live. If performance drops below agreed SLAs after launch, our post-launch support window covers diagnosis and remediation at no extra cost. Voice AI performance depends on call answer rates, which vary by lead quality and time of day, we document this clearly upfront so expectations are calibrated.",
  },
  {
    category: 'pricing',
    question: 'What does an AI voice agent cost to build?',
    answer: "Fixed price, quoted after a scoping call. We do not publish a number because the honest range depends on how many call flows you need, how many systems the agent writes to, whether it is outbound only or inbound as well, and how much language tuning the use case demands. You get the full figure in writing before we write any code, and it does not move unless you change the scope.",
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after the AI voice agent is built?',
    answer: "Three usage lines, all billed by the vendors directly to your own accounts at their published rates with no markup from us: per-minute telephony from your carrier (Twilio, Telnyx, or Vonage), LLM API usage for the conversation itself, and text-to-speech usage. Because they sit on your accounts you can see and control them. FactoryJet charges nothing ongoing unless you choose a maintenance retainer.",
  },
  {
    category: 'pricing',
    question: 'How should we think about the ROI on an AI voice agent?',
    answer: "Compare the shapes, not just the totals. One rep makes 50 to 80 dials a day, needs recruiting, training, and replacing, and that salary line repeats every month whether the lead flow is high or low. An AI voice agent is a one-time build plus per-minute usage that rises and falls with volume, and it handles 200+ calls a day at the same quality on the 500th call as the first. Bring your current cost per qualified lead to the scoping call and we will work the comparison against your real numbers.",
  },
  {
    category: 'pricing',
    question: 'Can we run a pilot before committing to the full build?',
    answer: "Yes. We offer a 2-week pilot covering one outbound calling campaign against a real lead segment. The pilot is offered at a fixed pilot price, credited against the full project if you proceed. You get full call recordings, transcripts, and a performance report showing qualification rate, answer rate, and CRM update accuracy. Most clients decide once they have read the first hundred transcripts.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a maintenance retainer after delivery?',
    answer: "Yes: an optional monthly maintenance retainer covers conversation flow tuning, new use case addition, telephony infrastructure management, and model updates. The retainer is fixed-price and scoped to your build, quoted up front after a free discovery call so you know the full cost before you commit. Many Full Voice AI Platform clients take a retainer during the first 6 months, then manage independently through the admin dashboard.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VOICE_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AIVoiceAgentUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-voice-agent-us-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-voice-agent-us-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Voice Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Voice Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
        ]} />

        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_voice_agent_hero" />}
          eyebrow="AI VOICE AGENT · USA"
          headline="An AI Caller in English and Spanish That Qualifies 200 Leads a Day, Without Adding Headcount"
          lead="We build and integrate AI voice agents that call your leads within five minutes of form submission, speak English and Spanish, write every call back to HubSpot or Salesforce, and book appointments to your calendar. Fixed price. TCPA rules built into the call flow, not bolted on."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'English + Spanish voice AI',
            'HubSpot, Salesforce, TCPA-aware calling',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI VOICE AGENT · LIVE CALL LOG
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                247 calls made today. 61 appointments booked. 0 extra headcount.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Zillow lead submitted 9:12 AM → AI called at 9:13 AM → showing booked for Saturday',
                  'Paid search lead in Denver → Spanish qualification call → budget and timeline captured → pushed to HubSpot as a hot lead',
                  'Past-due account → first-party reminder call → payment date confirmed → logged to the billing system',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Calls run 8 AM to 9 PM in the lead&rsquo;s own time zone. Do Not Call scrubbed. Every call transcribed and logged to your CRM.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and beyond" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites, storefronts, and AI systems built for businesses across the US and beyond: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI VOICE AGENT EXPLAINED"
          headline="Why an AI Voice Agent Is Nothing Like Your Current IVR"
          lead="A traditional IVR is a phone menu. An AI voice agent is a trained caller that holds a real conversation in English or Spanish, handles objections, books appointments, and updates your CRM, at the speed of 200+ calls per day."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Lead qualification', 'Appointment booking', 'Payment reminders', 'Inbound call handling', 'CRM sync', 'English + Spanish', 'TCPA aware', 'Human handoff'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                Every sales team knows the pattern: the lead that gets called back in minutes takes the appointment, and the one that gets called back tomorrow has already booked with someone else. The gap is not a motivation problem, it is a capacity problem. Your reps are on other calls, at lunch, or gone for the day. An AI voice agent calls within five minutes, every single time, at 9 PM on a Sunday and over the holiday weekend. For businesses handling 50 to 500 inbound leads per day, closing that gap changes the conversion math on its own.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '5 min', label: 'call response time' },
                  { value: '200+', label: 'calls/day per agent' },
                  { value: '100%', label: 'calls transcribed' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your AI caller never has a bad day, never calls in sick, and never forgets a follow-up.
                </p>
              </div>
              <p>
                FactoryJet AI voice agents are built on production speech-to-text models (Whisper, Deepgram, Azure), natural TTS voices in US English and Spanish, and LLM conversation engines tuned for the unpredictability of a real phone call: speakerphone audio, road noise, accents, callers who switch languages mid-sentence, and objections nobody scripted. They are deployed on US telephony you own, with registered caller ID and STIR/SHAKEN attestation, National Do Not Call scrubbing, and audit trails on every call.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>AI Voice vs. In-House Calling Team</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'New lead arrives at 8 PM', manual: 'No call until 9 AM tomorrow, lead has gone cold', ai: 'AI calls within five minutes, qualifies, logs to HubSpot' },
                  { scenario: '200 leads in one day', manual: '3 to 4 reps needed, recruiting, salary, training', ai: 'One AI agent handles all 200 calls before lunch' },
                  { scenario: 'Lead speaks Spanish', manual: 'Hit or miss on who is bilingual and on shift', ai: 'Native-sounding Spanish conversation, automatically' },
                  { scenario: 'CRM update after each call', manual: 'Depends on rep discipline, often skipped', ai: 'Automatic CRM update on every call completion' },
                  { scenario: 'Call quality monitoring', manual: 'Manual sampling, 5 to 10% of calls reviewed', ai: 'Full transcript of every call, searchable, always available' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>In-House Team</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Voice Agent</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your best leads go cold while your reps are stuck on the phone with worse ones"
          lead="Most inbound leads sit for hours before a human dials them, and the odds of a real conversation drop with every hour that passes. An AI voice agent removes the gap entirely: every lead, every time, in under five minutes."
          pillars={[
            {
              icon: '⏱️',
              title: 'Speed is the most underrated advantage in sales',
              body: "Someone who fills in an enquiry form at 11 PM is comparing three or four options at the same time. The business that calls back within five minutes gets the appointment. The ones calling the next morning are arguing about price for a lead that already picked somebody else. An AI voice agent calls every lead within five minutes, at midnight, on a Sunday, over a holiday weekend.",
            },
            {
              icon: '📞',
              title: 'Calling teams cannot scale with your lead volume',
              body: "One rep makes 50 to 80 dials per day. A single paid campaign can produce 200 leads in a day. Hiring three reps to cover the peak means paying three reps on the quiet days too. An AI voice agent scales instantly with call volume: 50 leads or 500 leads, the difference is per-minute telephony, not another salary.",
            },
            {
              icon: '📊',
              title: 'Call quality and CRM data are unreliable without AI',
              body: "Human calling teams have variable call quality, inconsistent CRM updates, and supervisor monitoring on maybe 5 to 10% of calls. An AI voice agent produces identical call quality on every call, updates the CRM automatically on completion, and provides a full transcript of every conversation, searchable, auditable, and never subject to selective memory.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From conversation design to 200 live calls per day in 3–5 weeks"
          stages={VOICE_JOURNEY_STAGES}
          closingNote="Every AI voice agent completes 100+ test calls before going live on your real lead database. You review call transcripts and validate before we flip the switch."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your English and Spanish AI voice agent"
          lead="We select the right speech-to-text model, TTS voice, LLM, and telephony provider for your languages, use case, and call volume. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI voice agent has five layers: a telephony layer (Twilio, Telnyx, or Vonage for US calling with registered caller ID), a speech-to-text layer (Whisper, Deepgram, or Azure for English and Spanish recognition), a conversation LLM (Claude or GPT-4o for natural dialogue), a text-to-speech layer (ElevenLabs or Azure Neural Voice for natural output in both languages), and an integration layer (HubSpot, Salesforce, Google Calendar, Stripe). We tune each layer for your specific use case and language mix, and the whole thing runs on accounts you own.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'Telephony (US)', tools: 'Twilio, Telnyx, Vonage, Amazon Connect' },
                      { layer: 'Speech-to-Text (EN/ES)', tools: 'Whisper, Deepgram, Azure Cognitive Services, Google STT' },
                      { layer: 'Conversation LLM', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'Text-to-Speech (EN/ES)', tools: 'ElevenLabs, Azure Neural Voice, Play.ht' },
                      { layer: 'CRM / Booking', tools: 'HubSpot, Salesforce, Go High Level, Google Calendar, Calendly' },
                      { layer: 'Orchestration', tools: 'Custom Python backend, LangGraph' },
                      { layer: 'Compliance', tools: 'National DNC Registry API, internal do-not-call list, STIR/SHAKEN caller ID attestation' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Five Voice AI Types We Build</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Lead Qualification AI Caller', desc: 'Calls fresh leads within five minutes, asks discovery questions in English or Spanish, scores the lead, and pushes it to HubSpot or Salesforce.' },
                  { name: 'Appointment & Estimate Booking AI', desc: 'Books showings, test drives, estimates, and consultations directly to Google Calendar or Calendly, then sends the confirmation by text.' },
                  { name: 'Payment Reminder AI', desc: 'First-party reminder and past-due calls carrying the amount, due date, and payment options, with consent records and full audit trails.' },
                  { name: 'Inbound Call Handling AI', desc: 'Natural-language inbound handling. Callers say what they need, the agent understands it and routes or resolves it without a keypad menu.' },
                  { name: 'Re-Engagement Caller', desc: 'Calls dormant leads and lapsed customers with personalised outreach: seasonal offers, product updates, or a simple check-in.' },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <section className="py-12 md:py-16" style={{ backgroundColor: '#FAFAF7', borderTop: '1.5px solid rgba(240,90,40,0.18)', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {VOICE_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#B23E13', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}>{stat.value}</p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>{stat.label}</p>
                  {stat.microcopy && <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{stat.microcopy}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityContextSection
          eyebrow="US VOICE AI MARKET"
          headline="The phone is still where US deals get closed, and AI just made it scale."
          leadParagraphs={[
            "Text, chat, and email keep growing, and the phone keeps closing. In real estate, home services, lending, automotive, and healthcare, the deal size justifies a conversation, and the buyer expects one. The problem has always been that conversations are expensive to scale: each rep handles 50 to 80 dials a day, needs training and management, and turns over faster than anyone budgets for.",
            "AI voice agents change that math permanently. One agent handles 200+ calls a day in English and Spanish, calls every lead within five minutes of submission, never has an off day, and produces a full transcript of every conversation for your CRM. The real constraint in the US is not the technology, it is doing it inside the TCPA: consent you can prove, calling windows in the recipient's time zone, Do Not Call scrubbing, and opt-outs that actually stick. That is the part we build in from the start.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The lead that gets a call in five minutes does not call your competitor.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'Home Services', 'Financial Services', 'Automotive', 'Healthcare', 'DTC E-Commerce'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={VOICE_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. In-House Team vs. Call Center vs. Basic IVR"
          lead="Fixed price, full code ownership, English and Spanish out of the box: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'An AI voice agent that calls 200 leads per day in English and Spanish, books appointments to your calendar, and updates HubSpot or Salesforce. No monthly salary, no sick leave, no turnover.' }}
          columns={VOICE_COMPARISON_COLUMNS}
          rows={VOICE_COMPARISON_ROWS}
          footer="Telephony, LLM, and text-to-speech usage are billed per minute by your own vendor accounts (Twilio, Telnyx, or Vonage) at their published rates. FactoryJet does not mark them up."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI voice agents for every high-call-volume US industry"
          lead="Every industry has different calling scripts, compliance requirements, and CRM integration needs. We build for yours."
          sectors={VOICE_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say about working with FactoryJet"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Deploy an AI Caller"
          lead="The questions we answer on every AI voice agent discovery call, answered honestly, with the compliance details included."
          categories={VOICE_FAQ_CATEGORIES}
          items={VOICE_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Voice Agent Strategy Call"
            sub="Tell us your current lead response time and daily call volume. We will map out exactly how an AI voice agent fits your use case, languages, and CRM, and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. English and Spanish. TCPA-aware calling. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
