import type { Metadata } from 'next';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
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
  title: 'AI Voice Agent India | Hindi AI Calling Bot | FactoryJet',
  description:
    'AI voice agents for Indian businesses — Hindi-speaking callers for lead qualification, appointment booking & inbound IVR. Fixed price. Live in 3–5 weeks.',
  keywords: [
    'AI voice agent India',
    'Hindi AI calling bot India',
    'AI IVR India',
    'AI phone agent India',
    'automated calling India',
    'AI telecaller India',
    'voice bot India',
    'AI lead qualification call India',
    'AI collection calls India',
    'conversational AI voice India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agent India | Hindi AI Calling Bot | FactoryJet',
    description: 'Hindi AI voice agents for lead qualification, appointment booking, and collection follow-ups. Fixed price. Live in 3–5 weeks.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [{ url: 'https://factoryjet.com/images/services/ai-agents.webp', width: 1200, height: 630, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agent India | FactoryJet',
    description: 'Hindi AI callers for lead qualification, appointments, and collections. Fixed price.',
    images: ['https://factoryjet.com/images/services/ai-agents.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI voice agent and how does it work for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI voice agent is software that conducts real phone calls autonomously — speaking naturally, understanding responses, handling objections, and taking actions like booking appointments or updating CRM records. For Indian businesses, this means a Hindi-speaking AI caller that can qualify 200 leads per day, follow up with overdue customers, or handle inbound enquiries 24/7 — without adding telecaller headcount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI voice agent speak Hindi and other Indian languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build AI voice agents with text-to-speech and speech-to-text models optimised for Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, and Kannada. The agent detects the language the customer uses and responds in kind. For markets like Tier 2 and Tier 3 cities where Hindi is the primary business language, a Hindi-native AI caller significantly outperforms an English-only bot.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI voice agent cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet AI voice agents start from ₹3,00,000 for a focused outbound calling use case (lead qualification or appointment booking). Full inbound + outbound platforms with Zoho CRM integration start from ₹6,00,000. Enterprise deployments with multi-language support and telephony infrastructure start from ₹12,00,000. All are fixed-price — no hourly billing surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'What call use cases can an AI voice agent handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common India deployments: outbound lead qualification (calling fresh leads within 5 minutes of form submission), appointment booking for clinics, real estate site visits, and test drives, payment collection follow-ups (EMI reminders and overdue balance calls), inbound IVR handling with natural language understanding, and post-delivery customer satisfaction calls. Any structured call with a consistent objective and conversation flow can be handled by an AI voice agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it legal to use AI voice agents for calling in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, subject to TRAI regulations. For outbound calls, you must use registered commercial headers and call only during permitted hours (9 AM–9 PM). Numbers on the DND registry must be filtered. FactoryJet builds all AI voice agents with TRAI-compliant infrastructure: registered headers, DND scrubbing, call time restrictions, and mandatory opt-out handling. For collection calls in BFSI, we also incorporate RBI fair practice guidelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when the AI voice agent cannot handle a call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every AI voice agent includes a human handoff trigger. If the customer asks something outside the scope of the script, expresses frustration, or requests a human, the call is transferred to a live agent — with a real-time transcript and context summary so the agent does not ask the customer to repeat themselves. You control the escalation threshold and the handoff destination.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Voice Agent Development India',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '150', bestRating: '5', worstRating: '1' } },
  description: 'Custom AI voice agents for Indian businesses — Hindi AI callers for lead qualification, appointment booking, collection follow-ups, and inbound IVR with Zoho CRM integration.',
  areaServed: 'IN',
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
    description: 'We define the call objective, conversation flow, expected objections, and handoff triggers. We design the script in Hindi and English, validate the CRM integration points, and agree on success metrics (answer rate, qualification rate, booking rate).',
  },
  {
    number: '02',
    title: 'Voice & Persona Design',
    description: 'We select the voice model, accent, pacing, and tone of voice that fits your brand and target audience. For Hindi-speaking markets, we tune pronunciation of product names, cities, and Indian-specific terminology. You approve voice samples before we build.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the voice agent using Twilio, Plivo, or Exotel for telephony, connected to your Zoho CRM, Google Calendar, or Razorpay as required. The agent is deployed in a test environment with a dedicated number for internal testing.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run 100+ test calls against a controlled lead set, review transcripts, identify failure modes, and tune the conversation flow. Special attention to Hindi speech recognition edge cases and regional accent handling.',
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
    label: 'lead response window — AI calls within 5 minutes vs. 4+ hours for manual telecallers',
    microcopy: 'Deloitte India Lead Response Study',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: '200+',
    label: 'calls per day handled by one AI voice agent — without additional headcount',
    microcopy: 'FactoryJet voice deployment data',
    categoryLabel: 'CALL VOLUME',
  },
  {
    value: '21×',
    label: 'higher conversion when leads are contacted within 5 minutes of enquiry',
    microcopy: 'Harvard Business Review, replicated in India context',
    categoryLabel: 'CONVERSION LIFT',
  },
];

const VOICE_MARKET_STATS = [
  {
    value: '₹8,500 Cr+',
    label: 'India conversational AI market projected by 2027, growing at 35% CAGR',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM AI Report 2024',
  },
  {
    value: '67%',
    label: 'of Indian B2B leads never receive a second follow-up call — a volume problem AI solves',
    sourceUrl: 'https://www.deloitte.com/in/en/research-studies/india-ai-readiness.html',
    sourceLabel: 'Deloitte India 2024',
  },
  {
    value: '500M+',
    label: 'phone users in India — voice remains the primary communication channel in Tier 2/3 cities',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'TRAI India Telecom Report',
  },
];

const VOICE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'In-House Telecaller Team' },
  { label: 'Call Centre Outsourcing' },
  { label: 'Basic IVR System' },
] as const;

const VOICE_COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: [
      '₹3,00,000 one-time',
      '₹18,000–₹30,000/month per telecaller',
      '₹25,000–₹60,000/month (variable quality)',
      '₹50,000–₹2,00,000 (scripted only)',
    ],
  },
  {
    feature: 'Speaks Hindi and regional languages',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="yes" />,
      <CompareIcon key="cc" kind="partial" />,
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
    feature: 'Zoho CRM / LeadSquared integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="tc" kind="no" />,
      <CompareIcon key="cc" kind="partial" />,
      <CompareIcon key="iv" kind="no" />,
    ],
  },
  {
    feature: 'TRAI-compliant outbound calling',
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
    description: 'AI calls every lead from 99acres, MagicBricks, and Facebook within 5 minutes — qualifies by budget, timeline, and location preference, books site visits automatically to your calendar, and logs to Zoho CRM.',
    example: 'Builders qualify 3–4× more leads per week without adding telecallers.',
  },
  {
    name: 'EdTech & Coaching',
    description: 'AI calls fresh enquiries to answer course FAQs, collect requirements, assess budget fit, and book counsellor calls — handling the high-volume first touch so your team focuses only on warm leads.',
    example: 'EdTech platforms reduce cost-per-enrolment by 40% with AI first-touch qualification.',
  },
  {
    name: 'Financial Services & NBFC',
    description: 'AI calls for EMI payment reminders, overdue balance follow-ups, and loan application status updates — with RBI fair practice compliance, DND filtering, and full call recording for audit.',
    example: 'NBFCs recover 20–30% more on-time payments with AI reminder call sequences.',
  },
  {
    name: 'Automotive',
    description: 'AI calls leads from car aggregators and Facebook, qualifies by model preference and budget, books test drives, and sends confirmation WhatsApp — all before the sales manager reaches their desk.',
    example: 'Auto dealerships book 2× more test drives per month with AI first-contact calls.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'AI handles inbound appointment booking calls in Hindi and English, checks doctor availability, confirms slots, sends WhatsApp reminders, and follows up on no-shows — freeing front-desk staff for in-person patients.',
    example: 'Clinics reduce missed appointments by 35% with AI reminder call sequences.',
  },
  {
    name: 'D2C E-Commerce',
    description: 'AI calls high-value customers for cart abandonment follow-up, Diwali sale personalised outreach, loyalty programme re-engagement, and post-delivery satisfaction checks — in the customer\'s preferred language.',
    example: 'D2C brands recover 15–25% of abandoned high-value carts with AI outreach calls.',
  },
];

const VOICE_PRICING_TIERS = [
  {
    name: 'Outbound Voice AI',
    priceRange: '',
    description: 'A focused AI calling agent for one outbound use case — lead qualification or appointment booking.',
    features: [
      'One outbound calling flow (qualification or booking)',
      'Hindi + English language support',
      'Zoho CRM or Google Sheets update on call completion',
      'TRAI-compliant outbound infrastructure (Exotel / Plivo)',
      'DND registry filtering',
      'Real-time call transcript logging',
      'Human handoff trigger',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Full Voice AI Platform',
    priceRange: '',
    description: 'Inbound + outbound voice AI with deep CRM integration, analytics, and multi-flow support.',
    features: [
      'Inbound IVR + outbound calling flows',
      'Hindi + English + one regional language',
      'Zoho CRM / LeadSquared full integration (create, update, log)',
      'Google Calendar appointment booking',
      'Call recording, transcript, and sentiment analysis',
      'Performance dashboard (answer rate, qualification rate, booking rate)',
      'Multi-campaign support (qualification + booking + follow-up)',
      'Human handoff with live context transfer',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise Voice AI',
    priceRange: '',
    description: 'Multi-language, multi-campaign voice AI with full telephony infrastructure for high-volume businesses.',
    features: [
      'Calling flows & campaigns scoped per project brief',
      'Multi-language support (up to 5 languages)',
      'Full telephony infrastructure setup (SIP trunk, number provisioning)',
      'BFSI collection compliance (RBI fair practice guidelines)',
      'Real-time supervisor monitoring and agent override',
      'Advanced analytics: call drop rate, sentiment trends, conversion funnel',
      'API access for custom CRM integrations',
      'Dedicated infrastructure (no shared cloud)',
      '90-day post-launch support + quarterly model updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const VOICE_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Voice AI Basics' },
  { key: 'language', label: 'Hindi & Languages' },
  { key: 'india', label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const VOICE_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI voice agent and how is it different from a basic IVR?',
    answer: "A basic IVR (press 1 for sales, press 2 for support) can only respond to keypad inputs and fails the moment a caller speaks naturally. An AI voice agent conducts a real conversation — it understands what the caller says in natural language, responds appropriately, handles objections, asks follow-up questions, and takes actions like booking an appointment or updating a CRM record. It behaves like a trained telecaller, not a phone menu.",
  },
  {
    category: 'basics',
    question: 'What call types can an AI voice agent handle?',
    answer: "The most common India use cases: outbound lead qualification (calling fresh leads within 5 minutes), appointment or site-visit booking, EMI payment reminders and collection follow-ups, inbound customer support for FAQs and order status, post-delivery satisfaction calls, and re-engagement calls for inactive customers. Any call with a structured objective and predictable conversation flow is a strong AI voice agent candidate.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle mid-call escalations to a human agent?',
    answer: "Yes — human handoff is a core feature. If the caller asks something outside the agent's scope, expresses frustration, or explicitly requests a human, the call is transferred in real time to a live agent with a full transcript and context summary. The live agent sees everything that was discussed so the caller does not have to repeat themselves. You set the escalation trigger threshold.",
  },
  {
    category: 'basics',
    question: 'How natural does the AI voice sound? Will customers know it is AI?',
    answer: "Modern neural text-to-speech voices (ElevenLabs, Play.ht, Azure Neural Voice) are significantly more natural than older IVR voices. For Hindi, we use voices trained on native Hindi speakers with natural intonation patterns. That said, many Indian businesses choose to disclose that the caller is an AI — particularly for lead qualification — because transparency builds trust and customers appreciate the quick response time regardless.",
  },
  {
    category: 'language',
    question: 'How good is the Hindi speech recognition?',
    answer: "Hindi speech recognition has improved significantly with models like Whisper (OpenAI), Azure Cognitive Services, and Google Speech-to-Text. We test recognition accuracy against your specific use case vocabulary — product names, city names, Indian financial terms, and Hinglish mixing patterns — before go-live. For most business call contexts, we achieve 90%+ word accuracy. Regional accents (Bihari Hindi, Rajasthani Hindi) require additional tuning.",
  },
  {
    category: 'language',
    question: 'Can the AI detect whether a caller is speaking Hindi or English and switch automatically?',
    answer: "Yes. We configure language auto-detection at the start of the call — the AI responds to the caller in whichever language they use. If a caller starts in Hindi and switches to English mid-call, the agent follows. This is essential for Indian business calls where code-switching between Hindi and English is the norm rather than the exception.",
  },
  {
    category: 'language',
    question: 'Which regional languages are supported?',
    answer: "We build AI voice agents in Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati, and Kannada — alongside English. Accuracy and voice naturalness vary by language. Hindi and Marathi are our strongest deployments. Tamil, Telugu, and Kannada require more tuning time but are fully functional. We recommend a language-specific pilot before full deployment for regional language builds.",
  },
  {
    category: 'language',
    question: 'Can the AI handle Hinglish — mixing Hindi and English naturally?',
    answer: "Yes — Hinglish handling is specifically tuned in our builds because it is the dominant language pattern in Indian urban business calls. The AI uses Hinglish naturally in both text-to-speech output and intent recognition. We test specifically against Hinglish inputs like 'mujhe ek demo book karna hai' mixed with 'I want to know about pricing' to ensure the agent handles both without breaking.",
  },
  {
    category: 'india',
    question: 'Is using AI for outbound calling legal in India?',
    answer: "Yes, subject to TRAI regulations. For commercial outbound calls, you must use registered telemarketer headers, call only during permitted hours (9 AM–9 PM), and scrub numbers against the DND registry before calling. FactoryJet builds all AI voice agents with TRAI-compliant infrastructure: registered headers via Exotel or Plivo, automated DND scrubbing, call time enforcement, and mandatory opt-out handling. For BFSI collection calls, we also incorporate RBI fair practice code requirements.",
  },
  {
    category: 'india',
    question: 'Which telephony providers do you use for Indian deployments?',
    answer: "We use Exotel, Plivo, or Twilio India for telephony infrastructure, all of which are registered with TRAI and support Indian PSTN calling. For high-volume deployments (1,000+ calls/day), we recommend Exotel or a direct SIP trunk arrangement for better cost economics. The choice depends on your call volume, geographic coverage (some BSNL regions have better Exotel coverage), and whether you need inbound + outbound or outbound only.",
  },
  {
    category: 'india',
    question: 'Can the AI integrate with Zoho CRM to log calls and update lead status?',
    answer: "Yes — Zoho CRM integration is standard in our Full Voice AI Platform. After each call, the AI automatically creates or updates the contact record, logs the call outcome, records the disposition (qualified/not interested/callback requested), attaches the call transcript, and moves the lead to the appropriate pipeline stage. For real estate, it also books site visits directly to Google Calendar or Zoho Bookings.",
  },
  {
    category: 'india',
    question: 'Can the AI do collection calls for EMI reminders and overdue follow-ups?',
    answer: "Yes — NBFC and BFSI collection is a common deployment. The AI makes payment reminder calls with personalised EMI and overdue balance information, offers payment options, captures promises-to-pay, and logs outcomes to your collection management system. All collection flows are built with RBI fair practice guidelines: no harassment, calls only during permitted hours, mandatory opt-out handling, and full audit trails.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI voice agent?',
    answer: "A focused outbound voice agent for one use case (lead qualification or appointment booking) takes 3–4 weeks from kickoff to live calls. Full inbound + outbound platforms with Zoho integration take 5–6 weeks. Enterprise deployments with multi-language support and custom telephony infrastructure take 8–10 weeks. Timeline depends on script complexity, number of integrations, and language tuning requirements.",
  },
  {
    category: 'process',
    question: 'What do we need to provide to get started?',
    answer: "We need: your calling use case and current conversation script (or we design one), sample call recordings from your existing telecallers (for voice and style reference), API access to your CRM (Zoho, LeadSquared, or similar), lead data in CSV format for initial test batch, and a 45-minute discovery call. We handle TRAI registration setup and telephony infrastructure from there.",
  },
  {
    category: 'process',
    question: 'How do we monitor the AI voice agent after it goes live?',
    answer: "You get a performance dashboard showing call volume, answer rates, qualification rates, call durations, escalation rates, and revenue attribution. Every call has a transcript accessible in the dashboard. You can listen to call recordings, review AI decisions, and adjust the conversation flow through a configuration panel. We set up weekly performance review calls during the first month.",
  },
  {
    category: 'process',
    question: 'What if the AI voice agent underperforms — who is responsible?',
    answer: "We guarantee a working AI voice agent that meets the agreed qualification or booking metrics in the test environment before go-live. If performance drops below agreed SLAs after launch, our post-launch support window covers diagnosis and remediation at no extra cost. Voice AI performance depends on call answer rates, which vary by lead quality and time of day — we document this clearly upfront so expectations are calibrated.",
  },
  {
    category: 'pricing',
    question: 'How does the ROI calculation work for an AI voice agent?',
    answer: "The most direct calculation: one telecaller at ₹18,000–₹25,000/month handles 50–80 calls/day. An AI voice agent handles 200+ calls/day at the cost of a one-time build plus telephony fees (₹0.50–₹1.50/call on Exotel or Plivo). For a business making 100 qualification calls/day, the AI pays back in 3–5 months and eliminates the recruitment and management overhead of a telecaller team entirely.",
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after the AI voice agent is built?',
    answer: "Telephony costs are charged per call by your provider: Exotel charges ₹0.50–₹1.00/minute for outbound calls; Plivo is similar. LLM API costs for conversation processing are typically ₹5,000–₹15,000/month for 100–200 calls/day. Text-to-speech costs (ElevenLabs, Azure) add ₹3,000–₹8,000/month. FactoryJet charges nothing ongoing unless you choose a maintenance retainer.",
  },
  {
    category: 'pricing',
    question: 'Can we run a pilot before committing to the full build?',
    answer: "Yes. We offer a 2-week pilot covering one outbound calling campaign — 500–1,000 calls to a real lead segment. The pilot costs ₹80,000 and is credited against the full project if you proceed. You get full call recordings, transcripts, and a performance report showing qualification rate, answer rate, and CRM update accuracy. Most clients convert immediately after seeing the first 100 call transcripts.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a maintenance retainer after delivery?',
    answer: "Yes — an optional monthly maintenance retainer covers conversation flow tuning, new use case addition, telephony infrastructure management, and model updates. Most Full Voice AI Platform clients take a retainer at ₹20,000–₹45,000/month during the first 6 months. After that, most businesses manage independently through the admin dashboard.",
  },
];

export default function AIVoiceAgentINPage() {
  return (
    <>
      <Script id="ai-voice-agent-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ai-voice-agent-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
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

        <Hero
          eyebrow="AI VOICE AGENT · INDIA"
          headline="A Hindi-Speaking AI Caller That Qualifies 200 Leads a Day — Without Adding Telecallers"
          lead="AI voice agents that call your leads within 5 minutes of form submission, speak in Hindi and English, update Zoho CRM automatically, and book appointments to your calendar — 24/7, at a fraction of telecaller cost. Fixed price. TRAI-compliant."
          primaryCta={{ label: 'Book a Free Voice AI Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'Hindi + regional language AI',
            'Zoho CRM + TRAI compliant',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI VOICE AGENT · LIVE CALL LOG
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                247 calls made today. 61 site visits booked. 0 telecallers needed.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  '99acres lead submitted 9:12 AM → AI called at 9:13 AM → site visit booked for Saturday',
                  'Facebook ad lead in Pune → Hindi qualification call → budget ₹85L, 2BHK → pushed to Zoho CRM as hot lead',
                  'Overdue EMI customer → AI reminder call → payment promise received → logged to collection dashboard',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#F05A28]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Runs 9 AM–9 PM. TRAI-compliant. DND filtered. Every call transcribed and logged to CRM.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 25 years of building. One goal: your results."
        />

        <ServiceExplanation
          eyebrow="AI VOICE AGENT EXPLAINED"
          headline="Why an AI Voice Agent Is Nothing Like Your Current IVR"
          lead="A traditional IVR is a phone menu. An AI voice agent is a trained Hindi-speaking caller that understands natural conversation, handles objections, books appointments, and updates your CRM — at the speed of 200+ calls per day."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Lead qualification', 'Appointment booking', 'Collection calls', 'Inbound IVR', 'CRM sync', 'Hindi AI', 'TRAI compliant', 'Human handoff'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                Research shows leads contacted within 5 minutes of enquiry convert 21× better than those contacted after an hour. Most Indian telecaller teams respond in 4–6 hours, on a good day. An AI voice agent calls within 5 minutes, every single time — at 9 PM on a Sunday, during Diwali, when your entire team is off. For businesses handling 50–500 inbound leads per day, this speed advantage alone changes the conversion economics.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '5 min', label: 'call response time' },
                  { value: '200+', label: 'calls/day per agent' },
                  { value: '21×', label: 'conversion lift' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your AI telecaller never has a bad day, never calls in sick, and never forgets a follow-up.
                </p>
              </div>
              <p>
                FactoryJet AI voice agents are built on enterprise speech-to-text models (Whisper, Azure), natural TTS voices trained on Hindi speakers, and LLM conversation engines that handle the unpredictability of real Indian phone calls — Hinglish code-switching, background noise, regional accents, and unexpected objections. Deployed on TRAI-compliant telephony infrastructure via Exotel or Plivo with full DND filtering and audit trails.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>AI Voice vs. Telecaller Team</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'New lead arrives at 9 PM', manual: 'No call until 9 AM next day — lead has gone cold', ai: 'AI calls within 5 minutes, qualifies, logs to Zoho CRM' },
                  { scenario: '200 leads in one day', manual: '3–4 telecallers needed — recruitment, salary, training', ai: 'One AI agent handles all 200 calls before lunch' },
                  { scenario: 'Lead speaks in Hindi', manual: 'Hit or miss on telecaller language fit', ai: 'Native Hindi conversation, naturally — automatic' },
                  { scenario: 'CRM update after each call', manual: 'Depends on telecaller discipline — often missed', ai: 'Automatic CRM update on every call completion' },
                  { scenario: 'Call quality monitoring', manual: 'Manual sampling — 5–10% of calls reviewed', ai: 'Full transcript of every call, searchable, always available' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Telecaller Team</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#F05A28]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Voice Agent</p>
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
          headline="Your best leads go cold while your telecallers are busy with bad ones"
          lead="The average Indian lead response time is 4–6 hours. Research shows conversion drops 90% after the first hour. An AI voice agent eliminates the response time gap entirely — every lead, every time, in under 5 minutes."
          pillars={[
            {
              icon: '⏱️',
              title: 'Speed is the most underrated advantage in Indian sales',
              body: "A lead who submits an enquiry form at 11 PM is comparing 3–4 options simultaneously. The business that calls within 5 minutes gets the appointment. The ones that call the next morning are competing on price for a lead that has already chosen someone else. An AI voice agent calls every lead within 5 minutes — at midnight, on weekends, during Diwali.",
            },
            {
              icon: '📞',
              title: 'Telecaller teams cannot scale with your lead volume',
              body: "One telecaller makes 50–80 calls per day. Your Facebook campaign can generate 200 leads in a day. Hiring 3 telecallers to handle peak volume means paying for 3 telecallers on low-volume days. An AI voice agent scales instantly with call volume — 50 leads or 500 leads, the cost difference is telephony per-minute, not salary.",
            },
            {
              icon: '📊',
              title: 'Call quality and CRM data are unreliable without AI',
              body: "Telecaller teams have variable call quality, inconsistent CRM updates, and supervisor-only monitoring of 5–10% of calls. An AI voice agent produces identical call quality on every call, updates CRM automatically on completion, and provides a full transcript of every conversation — searchable, auditable, and never subject to selective memory.",
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
          headline="The technology stack behind your Hindi AI voice agent"
          lead="We select the right speech-to-text model, TTS voice, LLM, and telephony provider for your language, use case, and call volume. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI voice agent has five layers: a telephony layer (Exotel or Plivo for TRAI-compliant Indian calling), a speech-to-text layer (Whisper or Azure for Hindi recognition), a conversation LLM (Claude or GPT-4o for natural dialogue), a text-to-speech layer (ElevenLabs or Azure Neural Voice for natural Hindi output), and an integration layer (Zoho CRM, Google Calendar, Razorpay). We tune each layer for your specific use case and language requirements.
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
                      { layer: 'Telephony (India)', tools: 'Exotel, Plivo, Twilio India (TRAI registered)' },
                      { layer: 'Speech-to-Text (Hindi)', tools: 'Whisper, Azure Cognitive Services, Google STT' },
                      { layer: 'Conversation LLM', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'Text-to-Speech (Hindi)', tools: 'ElevenLabs, Azure Neural Voice, Play.ht' },
                      { layer: 'CRM / Booking', tools: 'Zoho CRM, LeadSquared, Google Calendar, Zoho Bookings' },
                      { layer: 'Orchestration', tools: 'Custom Python backend, LangGraph' },
                      { layer: 'Compliance', tools: 'DND registry API, TRAI registered headers' },
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
                  { name: 'Lead Qualification AI Caller', desc: 'Calls fresh leads within 5 minutes, asks discovery questions in Hindi, scores, and pushes qualified leads to Zoho CRM.' },
                  { name: 'Appointment Booking AI', desc: 'Books site visits, test drives, and consultation appointments directly to Google Calendar — confirmed WhatsApp sent automatically.' },
                  { name: 'Collection Follow-Up AI', desc: 'RBI-compliant EMI reminders and overdue follow-ups — personalised by customer name, amount, and due date.' },
                  { name: 'Inbound IVR AI', desc: 'Natural language inbound IVR — customers speak their query, the AI understands and routes without pressing buttons.' },
                  { name: 'Re-Engagement Caller', desc: 'Calls dormant leads and lapsed customers with personalised outreach — festival offers, product updates, or check-in calls.' },
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
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#F05A28', background: 'rgba(240,90,40,0.06)', border: '1px solid rgba(240,90,40,0.22)' }}>
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
          eyebrow="INDIA VOICE AI MARKET"
          headline="Phone is still the primary sales channel in India — and AI just made it scale."
          leadParagraphs={[
            "Despite WhatsApp and chat growth, voice calling remains the dominant sales and support channel in Indian business — particularly in real estate, NBFC, insurance, automotive, and EdTech, where the deal size warrants a conversation and not just a message thread. The problem is that calls are expensive to scale: each telecaller handles 50–80 calls per day, needs training, management, and periodic replacement.",
            "AI voice agents change the economics permanently. One AI agent handles 200+ calls per day in Hindi and English, calls every lead within 5 minutes of submission, never has off days, and produces a full transcript of every conversation for your CRM. The businesses deploying AI voice agents now are building a structural speed advantage over competitors still managing telecaller teams.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The lead that gets a call in 5 minutes does not call your competitor.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'EdTech', 'NBFC / Finance', 'Automotive', 'Healthcare', 'D2C E-Commerce'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={VOICE_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Telecaller Team vs. Call Centre vs. Basic IVR"
          lead="Fixed price, full code ownership, Hindi AI out of the box — the honest comparison."
          pullQuote={{ stat: '₹3,00,000', caption: 'one-time — AI voice agent that calls 200 leads per day in Hindi and English, books appointments to your calendar, and updates Zoho CRM. No monthly salary, no sick leave, no turnover.' }}
          columns={VOICE_COMPARISON_COLUMNS}
          rows={VOICE_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. Telephony costs (₹0.50–₹1.50/call) are additional and billed by Exotel/Plivo."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI voice agents for every high-call-volume Indian industry"
          lead="Every industry has different calling scripts, compliance requirements, and CRM integration needs. We build for yours."
          sectors={VOICE_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after deploying our AI voice agents"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Deploy an AI Caller"
          lead="The questions we answer on every Indian AI voice agent discovery call — answered honestly, with compliance details."
          categories={VOICE_FAQ_CATEGORIES}
          items={VOICE_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Voice Agent Strategy Call"
            sub="Tell us your current lead response time and daily call volume. We will map out exactly how an AI voice agent fits your use case, languages, and CRM — and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919876543210' }}
            objectionHandler="Fixed price. Full code ownership. Hindi + Zoho + TRAI-compliant. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
