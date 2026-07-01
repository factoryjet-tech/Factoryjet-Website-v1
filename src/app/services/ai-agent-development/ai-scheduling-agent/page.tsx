import type { Metadata } from 'next';
import Script from 'next/script';

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
  title: 'AI Scheduling Agent India | WhatsApp Booking | FactoryJet',
  description:
    'AI scheduling agents for Indian businesses — automate appointment booking and WhatsApp calendar management. Integrated with Zoho & Google Calendar. Fixed price.',
  keywords: [
    'AI scheduling agent India',
    'AI appointment booking India',
    'WhatsApp appointment booking India',
    'automated scheduling India',
    'AI booking bot India',
    'Zoho Bookings AI India',
    'clinic appointment AI India',
    'site visit scheduling AI India',
    'demo booking AI India',
    'calendar automation India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Scheduling Agent India | WhatsApp Appointment Booking AI | FactoryJet',
    description: 'AI that books site visits, demos, and appointments on WhatsApp — in Hindi and English, integrated with Google Calendar and Zoho. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
    images: [{ url: 'https://factoryjet.com/images/services/ai-agents.webp', width: 1200, height: 630, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scheduling Agent India | FactoryJet',
    description: 'Automate appointment booking on WhatsApp in Hindi and English. Google Calendar + Zoho integrated. Fixed price.',
    images: ['https://factoryjet.com/images/services/ai-agents.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI scheduling agent and how does it work for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI scheduling agent automates appointment booking end-to-end — on WhatsApp, your website, or inbound phone. It checks availability in real time, books slots to Google Calendar or Zoho Bookings, sends confirmation and reminder messages via WhatsApp, handles rescheduling requests, and updates your CRM. For Indian businesses, this means no more manual coordination for site visits, demos, clinic appointments, or test drives.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI scheduling agent cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet AI scheduling agents are fixed-price and scoped to your build — from a focused WhatsApp appointment booking flow (one service type, one calendar, confirmation messages) to multi-resource scheduling platforms with Zoho CRM integration and enterprise suites with multi-location, multi-service, and payment collection. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI scheduling agent book appointments on WhatsApp in Hindi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — WhatsApp booking in Hindi and English is our primary India deployment. A customer messages your WhatsApp asking for a clinic appointment, real estate site visit, or product demo. The AI checks availability, offers time slots, confirms the booking to Google Calendar, and sends a WhatsApp confirmation with date, time, and location — all within 60 seconds, in the customer\'s preferred language.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which calendar and booking tools does the AI integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with Google Calendar, Zoho Bookings, Zoho CRM, Calendly, Microsoft Outlook / Teams, and custom practice management or clinic management systems. For payment collection at booking, we integrate Razorpay for appointment deposits and fees. For CRM sync, we connect to Zoho CRM, LeadSquared, or Freshsales to create and update contact records on every booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI handle rescheduling and cancellations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — rescheduling and cancellation flows are standard in all our builds. A customer messages "reschedule my appointment" and the AI checks availability, offers alternatives, updates the calendar, and sends a new confirmation — all automatically. Cancellations trigger slot release, CRM update, and an optional re-engagement message offering a new time. Buffer times, cancellation policies, and refund triggers are all configurable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI handle multiple staff members or locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Multi-Resource Scheduling Platform supports multiple doctors, sales reps, advisors, or locations with individual calendars. The AI checks availability across all resources, routes the booking to the appropriate person based on your rules (round-robin, location preference, specialisation), and updates each resource\'s calendar independently. Ideal for clinics, real estate developer sales teams, and multi-branch service businesses.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Scheduling Agent Development India',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '150', bestRating: '5', worstRating: '1' } },
  description: 'Custom AI scheduling agents for Indian businesses — automate appointment booking on WhatsApp in Hindi and English with Google Calendar, Zoho Bookings, and Razorpay integration.',
  areaServed: 'IN',
  serviceType: 'AI Appointment Scheduling Automation',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
};

const SCHEDULING_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Scheduling Audit',
    description: 'We map your current booking flow — how customers request appointments, which staff manage calendars, how confirmations and reminders are sent, and where rescheduling creates friction. We design the AI flow to match your existing process.',
  },
  {
    number: '02',
    title: 'Conversation & Calendar Design',
    description: 'We design the booking conversation in Hindi and English — how the AI asks for preferences, presents time slots, handles conflicts, and confirms bookings. We configure availability rules, buffer times, and resource allocation logic in your calendar system.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the AI scheduling agent and connect it to your WhatsApp Business API, Google Calendar or Zoho Bookings, CRM, and Razorpay (if payment at booking is required). Full two-way calendar sync ensures no double bookings.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run 100+ test bookings across different scenarios — concurrent availability requests, edge-case time zones, rescheduling after confirmation, and cancellation flows. We tune Hindi speech patterns and slot-presentation logic until booking completion rates meet target.',
  },
  {
    number: '05',
    title: 'Deploy & Optimise',
    description: 'Live deployment with booking volume dashboard, no-show rate tracking, reminder effectiveness analytics, and a 30-day optimisation window. We review weekly to reduce drop-off points in the booking flow.',
  },
];

const SCHEDULING_STATS = [
  {
    value: '35%',
    label: 'more appointments booked per week with AI vs. manual WhatsApp scheduling — FactoryJet client data',
    microcopy: 'FactoryJet scheduling deployment data',
    categoryLabel: 'BOOKING LIFT',
  },
  {
    value: '40%',
    label: 'reduction in appointment no-shows with AI reminder sequences',
    microcopy: 'across FactoryJet scheduling deployments',
    categoryLabel: 'NO-SHOW REDUCTION',
  },
  {
    value: '24/7',
    label: 'appointment booking — customers book at 11 PM on Sunday, confirmed instantly',
    microcopy: 'always available, no front-desk required',
    categoryLabel: 'AVAILABILITY',
  },
];

const SCHEDULING_MARKET_STATS = [
  {
    value: '500M+',
    label: 'WhatsApp users in India — your customers expect to book appointments there too',
    sourceUrl: 'https://meta.com/business/whatsapp-india-report-2024',
    sourceLabel: 'Meta Business India 2024',
  },
  {
    value: '3 hrs',
    label: 'average time Indian SMBs spend daily on manual appointment coordination — addressable with AI',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM SMB Productivity Report',
  },
  {
    value: '₹3,500 Cr+',
    label: 'India online appointment scheduling market projected by 2027',
    sourceUrl: 'https://nasscom.in/knowledge-center/publications',
    sourceLabel: 'NASSCOM India Digital Report 2024',
  },
];

const SCHEDULING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Manual WhatsApp Booking' },
  { label: 'Calendly / Zoho Bookings Alone' },
  { label: 'Receptionist / Coordinator' },
] as const;

const SCHEDULING_COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: [
      'Fixed one-time price',
      '₹0 (but ₹15,000–₹25,000/month in staff time)',
      '₹800–₹3,000/month (no WhatsApp, no AI)',
      '₹15,000–₹30,000/month salary',
    ],
  },
  {
    feature: 'Books appointments on WhatsApp in Hindi',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="partial" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Available 24/7 including weekends and festivals',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Sends automated reminders',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="partial" />,
    ],
  },
  {
    feature: 'Zoho CRM / LeadSquared sync',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Handles rescheduling and cancellations',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="partial" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Razorpay deposit collection at booking',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Multi-staff / multi-location routing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & workflow',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
];

const SCHEDULING_INDUSTRIES = [
  {
    name: 'Healthcare & Clinics',
    description: 'WhatsApp appointment booking for multi-doctor clinics — real-time availability check, specialty-based routing, confirmation WhatsApp with doctor name and directions, reminder sequence, and rescheduling flow.',
    example: 'Clinics report 35% more appointments booked and 40% fewer no-shows after AI scheduling deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Site visit booking from 99acres, MagicBricks, and Facebook leads — AI books slots based on project and location, confirms via WhatsApp, sends directions, logs to Zoho CRM with lead qualification data.',
    example: 'Builders double site visit booking rates without adding coordinators.',
  },
  {
    name: 'EdTech & Coaching',
    description: 'Counsellor call and demo class booking — AI books based on course interest and counsellor availability, sends joining link via WhatsApp, and sends 1-hour and 10-minute reminders to reduce no-shows.',
    example: 'EdTech platforms see 3× more counsellor calls booked per week with AI scheduling.',
  },
  {
    name: 'Automotive',
    description: 'Test drive booking from lead ads and website — AI qualifies by model interest, books slots to showroom calendar, sends WhatsApp confirmation with location, and calls to confirm 24 hours before.',
    example: 'Dealerships book 2× more test drives per month without adding front-desk staff.',
  },
  {
    name: 'Professional Services',
    description: 'Consultation booking for CA firms, law firms, and financial advisors — AI books based on advisor availability and service type, collects pre-meeting details, sends Zoom or in-person confirmation, and reminder sequence.',
    example: 'Advisors recover 2–3 hours per week of calendar coordination time with AI scheduling.',
  },
  {
    name: 'Beauty & Wellness',
    description: 'Salon, spa, and wellness centre booking on WhatsApp — service selection, stylist preference, slot confirmation, payment link for deposit, reminder WhatsApp, and post-visit review request.',
    example: 'Salons increase repeat booking rate by 25% with AI reminder and rebooking sequences.',
  },
];

const SCHEDULING_PRICING_TIERS = [
  {
    name: 'WhatsApp Booking AI',
    priceRange: '',
    description: 'A focused AI appointment booking agent on WhatsApp — single service type, single calendar, with confirmation and reminder messages.',
    features: [
      'WhatsApp Business API booking flow',
      'Single service type and calendar',
      'Real-time availability check (Google Calendar or Zoho Bookings)',
      'Hindi + English language support',
      'Booking confirmation WhatsApp message',
      '24-hour and 1-hour reminder WhatsApp messages',
      'Rescheduling and cancellation handling',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Multi-Resource Scheduling Platform',
    priceRange: '',
    description: 'Multi-staff, multi-service scheduling with CRM sync, reminders, and no-show reduction flows.',
    features: [
      'Multiple staff members / resources',
      'Multiple service types with custom durations',
      'Zoho CRM / LeadSquared sync on every booking',
      'Razorpay deposit collection at booking',
      'Round-robin or rule-based staff routing',
      'Multi-step reminder sequence (24hr, 1hr, post-visit)',
      'Rescheduling and cancellation with slot release',
      'Booking analytics dashboard',
      '30-day post-launch support + optimisation',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'Enterprise Scheduling Suite',
    priceRange: '',
    description: 'Multi-location, multi-language scheduling for high-volume Indian businesses with full CRM and payment integration.',
    features: [
      'Multi-location, multi-branch scheduling',
      'Multi-language support (up to 5 regional languages)',
      'Full Zoho CRM / HIS / PMS integration',
      'Razorpay full payment collection and refunds',
      'AI waitlist management (auto-fills cancellations)',
      'Custom booking rules per service and location',
      'Advanced no-show analytics and recovery flows',
      'API access for custom CRM and ERP integration',
      '90-day post-launch support + quarterly optimisation',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'in' as const },
  },
] as const;

const SCHEDULING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Scheduling AI Basics' },
  { key: 'whatsapp', label: 'WhatsApp & Channels' },
  { key: 'india', label: 'India-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SCHEDULING_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What exactly does an AI scheduling agent do?',
    answer: "An AI scheduling agent handles the complete appointment booking flow autonomously — on WhatsApp, website, or inbound call. When a customer asks for an appointment, the AI checks real-time availability, presents available slots, confirms the booking to your calendar system, sends a WhatsApp confirmation with details and directions, triggers reminders before the appointment, and handles rescheduling or cancellation requests — all without any manual coordination.",
  },
  {
    category: 'basics',
    question: 'How is this different from just using Calendly or Zoho Bookings?',
    answer: "Calendly and Zoho Bookings are booking pages — they work if the customer visits a URL, selects a service, picks a slot, and fills out a form. Most Indian customers do not follow that flow. They message your WhatsApp, ask for an appointment in conversation, and expect a response. An AI scheduling agent meets them where they are — on WhatsApp, in Hindi, in a natural conversation — and the calendar booking happens as an outcome of that conversation, not a separate step.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle multiple types of appointments — like different services or different doctors?',
    answer: "Yes. Our Multi-Resource Scheduling Platform supports multiple service types with different durations (15-minute follow-ups vs. 60-minute consultations), multiple staff members with individual calendars, and routing rules based on service type, location preference, or round-robin assignment. The AI asks the right qualifying questions to determine which service and which resource the customer needs before presenting availability.",
  },
  {
    category: 'basics',
    question: 'What happens when all slots are full?',
    answer: "The AI offers the next available slot, offers to add the customer to a waitlist (if you enable this), or presents alternative locations or staff members with availability. For businesses with high demand — clinics during flu season, real estate site visits during project launches — the AI also manages a waitlist that auto-fills from cancellations, reducing wasted slots and no-shows.",
  },
  {
    category: 'whatsapp',
    question: 'Can customers book appointments by messaging your WhatsApp in Hindi?',
    answer: "Yes — this is the primary use case for Indian businesses. A customer messages 'doctor ka appointment chahiye' or 'I want to book a site visit for Saturday' and the AI conducts the full booking conversation in Hindi or English, confirms the slot, and adds it to your calendar. No URL to click, no form to fill — just a natural WhatsApp conversation that ends with a confirmed appointment.",
  },
  {
    category: 'whatsapp',
    question: 'Can the AI send appointment reminders on WhatsApp automatically?',
    answer: "Yes. Using WhatsApp template messages (Meta-approved), the AI sends a confirmation immediately on booking, a 24-hour reminder the day before, a 1-hour reminder on the day, and (optionally) a post-appointment feedback request. For healthcare and real estate, the 24-hour + 1-hour reminder combination reduces no-shows by 35–45% in our deployments.",
  },
  {
    category: 'whatsapp',
    question: 'Can customers reschedule by messaging on WhatsApp?',
    answer: "Yes — rescheduling conversations are fully automated. A customer messages 'please reschedule my appointment' and the AI identifies their existing booking, checks availability for alternative times, presents options, confirms the change to your calendar, and sends a new confirmation. The original slot is automatically freed for other customers. Cancellations follow the same flow with optional refund trigger if a Razorpay deposit was collected.",
  },
  {
    category: 'whatsapp',
    question: 'Can the AI also send appointment reminders via voice call?',
    answer: "Yes — for high-value appointments (real estate site visits, high-ticket service consultations), we can add an automated voice reminder call 24 hours before the appointment using our AI Voice Agent module. The AI calls in Hindi or English, confirms the appointment details, and gives the customer an option to reschedule by pressing a key or responding. This combination of WhatsApp text + voice call reminder achieves the lowest no-show rates in our deployments.",
  },
  {
    category: 'india',
    question: 'Can the AI collect a booking deposit via Razorpay?',
    answer: "Yes. For services where a deposit reduces no-shows (clinics, salons, high-demand site visits), we integrate Razorpay payment link generation into the booking flow. After the customer confirms a slot, the AI sends a Razorpay payment link on WhatsApp, confirms receipt on payment, and the booking is only finalised after payment. Cancellations trigger the refund flow based on your configured refund policy.",
  },
  {
    category: 'india',
    question: 'Does the AI sync appointments to Zoho CRM or LeadSquared?',
    answer: "Yes. Every booking creates or updates a contact record in Zoho CRM, LeadSquared, or Freshsales — with the customer name, phone, appointment type, date, time, and staff assignment. For real estate and EdTech, this also updates the lead pipeline stage (e.g., from 'contacted' to 'site visit booked'). Sales managers see the booking pipeline in CRM without anyone entering data manually.",
  },
  {
    category: 'india',
    question: 'Can the AI handle multi-language booking for businesses operating in multiple states?',
    answer: "Yes. Our Enterprise Scheduling Suite supports up to 5 regional languages — Hindi, Marathi, Tamil, Telugu, Gujarati, Kannada — with automatic language detection at the start of the booking conversation. For businesses with locations in Mumbai, Chennai, and Hyderabad, the AI routes to the appropriate language model based on the customer's phone number prefix or the first message they send.",
  },
  {
    category: 'india',
    question: 'How does the scheduling AI handle Indian public holidays and festival dates?',
    answer: "The AI calendar configuration includes Indian public holidays (national and state-specific) and any custom blocked dates you define. During festival periods, you can configure reduced hours, emergency-only slots, or complete closure — the AI automatically stops offering those slots and informs customers of the next available date. Diwali, Holi, Eid, and other major festival closures can be pre-configured annually.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI scheduling agent?',
    answer: "A focused WhatsApp booking agent (single service, one calendar) goes live in 1–2 weeks. Multi-resource platforms with CRM and Razorpay integration take 3–4 weeks. Enterprise suites with multi-location and multi-language support take 5–7 weeks. The fastest path is to start with one service type, validate the booking flow with real customers, and then expand to multi-service and multi-staff.",
  },
  {
    category: 'process',
    question: 'What do you need from us to build the scheduling AI?',
    answer: "We need: API access to your calendar system (Google Calendar or Zoho Bookings), your WhatsApp Business account access (we can set this up), your service list with durations and staff assignments, business hours and holiday schedule, and a 30-minute discovery call to map the booking conversation flow. We handle all technical setup from there.",
  },
  {
    category: 'process',
    question: 'Can we update availability and services without technical help?',
    answer: "Yes. After deployment, you manage service types, staff availability, business hours, and holiday schedules through the admin dashboard — no code required. Adding a new doctor, changing a service duration, or blocking dates for Diwali can all be done by a non-technical staff member. For changes to the conversation flow or new integrations, we handle those on retainer.",
  },
  {
    category: 'process',
    question: 'How do we measure the performance of the scheduling AI?',
    answer: "You get a booking analytics dashboard showing total bookings per day/week, source channel (WhatsApp vs. website), no-show rate, rescheduling rate, drop-off point in the booking conversation (where customers abandon), and revenue collected via Razorpay. Most businesses see booking volume increase 25–40% in the first month as the 24/7 availability captures demand that previously went unbooked outside business hours.",
  },
  {
    category: 'pricing',
    question: 'How do I calculate the ROI of an AI scheduling agent?',
    answer: "The simplest ROI calculation: count the staff hours spent per week on appointment coordination (calls, WhatsApp replies, reminder messages, reschedule management), multiply by hourly cost, and project monthly savings. For most Indian businesses with 20–50 appointments per day, the AI saves 2–4 hours of coordination time daily — ₹10,000–₹25,000/month in staff time. At our fixed build price, payback typically lands within a few months. Secondary ROI: 24/7 availability books appointments that were previously missed outside business hours.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the scheduling agent is built?',
    answer: "LLM API costs for conversation processing are minimal for scheduling (₹1,500–₹5,000/month for 100–300 bookings/day). WhatsApp message costs (Meta charges per conversation or template message via your BSP) are the main variable cost. FactoryJet charges nothing ongoing unless you choose a maintenance retainer. Google Calendar and Zoho Bookings are free or already part of your existing subscriptions.",
  },
  {
    category: 'pricing',
    question: 'Can we start with just WhatsApp booking and add the reminder sequence and Razorpay later?',
    answer: "Yes — modular expansion is standard. Start with the WhatsApp Booking AI, run it for 4–6 weeks to establish baseline metrics, then add the multi-reminder sequence to reduce no-shows, and Razorpay deposit collection to improve show rate further. Each module is priced at the incremental cost of the addition. Most clients expand to the full reminder + payment module within 60 days of the initial deployment.",
  },
  {
    category: 'pricing',
    question: 'Can we pilot the scheduling AI before committing to the full build?',
    answer: "Yes. For businesses wanting validation before committing, we offer a 2-week pilot: a WhatsApp booking flow for one service type deployed to your live WhatsApp number. The pilot is offered at a fixed price, credited against the full project. Seeing real customer booking conversations and the calendar entries they generate is typically the fastest way to build internal confidence in the ROI.",
  },
];

export default function AISchedulingAgentINPage() {
  return (
    <>
      <Script id="ai-scheduling-agent-in-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ai-scheduling-agent-in-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
          { name: 'AI Scheduling Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
        ]}
      />

      <main className="bg-fj-cream">

        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ai_agent_development_ai_scheduling_agent_hero" />}
          eyebrow="AI SCHEDULING AGENT · INDIA"
          headline="AI That Books Site Visits, Demos, and Clinic Appointments on WhatsApp — 24/7 in Hindi"
          lead="AI scheduling agents that check availability, book slots to Google Calendar, collect Razorpay deposits, and send WhatsApp reminders — all from a single customer message on WhatsApp, in Hindi or English. No coordinator needed. Fixed price."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ businesses served',
            'WhatsApp + Google Calendar + Zoho',
            'Hindi & English booking flows',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI SCHEDULING AGENT · LIVE
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                42 appointments booked today. 0 coordinators involved.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "Sunday ke liye site visit book karna hai" → AI checks availability → books slot → sends WhatsApp confirmation',
                  'Clinic patient asks for Dr. Mehta appointment → AI checks schedule → offers 3 slots → patient picks → confirmed to calendar',
                  'No-show reminder: 24hr WhatsApp sent to 8 patients → 6 confirmed attendance → no-show rate down 40%',
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
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Books appointments 24/7. Syncs to Google Calendar. Reminds via WhatsApp. Runs itself.</p>
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
          eyebrow="AI SCHEDULING EXPLAINED"
          headline="Why AI Scheduling Is Different From Calendly or a WhatsApp Receptionist"
          lead="Calendly and Zoho Bookings require customers to visit a URL, fill a form, and pick a slot. Most Indian customers message your WhatsApp instead. An AI scheduling agent meets them there — in Hindi, in conversation, with your live calendar."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['WhatsApp booking', 'Hindi scheduling', 'Google Calendar', 'Zoho Bookings', 'Razorpay deposit', 'Reminders', 'Multi-doctor', 'Rescheduling'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                The scheduling friction for most Indian businesses happens on WhatsApp — customers ask for an appointment, the coordinator checks the calendar, messages back 2–3 times to confirm, and eventually books manually. This takes 15–20 minutes per booking and breaks down entirely outside business hours. An AI scheduling agent compresses this to 60 seconds, 24/7, without any human involved.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '35%', label: 'more bookings' },
                  { value: '40%', label: 'fewer no-shows' },
                  { value: '24/7', label: 'availability' },
                ].map((b) => (
                  <div key={b.value} className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm">
                    <p className="font-fj-display font-bold text-[#F05A28]" style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}>{b.value}</p>
                    <p className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}>{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  A customer who books at 11 PM is still a confirmed appointment at 9 AM.
                </p>
              </div>
              <p>
                FactoryJet AI scheduling agents connect to your WhatsApp Business API, Google Calendar or Zoho Bookings, CRM, and Razorpay. The booking conversation happens naturally in the customer's preferred language. The calendar entry, CRM update, Razorpay deposit, and reminder sequence happen automatically — no coordinator, no back-and-forth, no missed appointments.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Manual vs. AI Scheduling</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { scenario: 'Customer asks for appointment on WhatsApp', manual: 'Coordinator checks calendar, replies, customer picks, confirms manually — 15–20 min', ai: 'AI checks availability, offers slots, books, sends confirmation — 60 seconds' },
                  { scenario: 'Appointment request at 11 PM on Sunday', manual: 'No response until Monday morning — customer may book elsewhere', ai: 'AI books the appointment immediately, calendar updated, confirmation sent' },
                  { scenario: 'Customer wants to reschedule', manual: 'Coordinator back-and-forth, manual calendar update — 10 min', ai: 'AI rescheduling conversation, calendar updated, new confirmation sent — 90 sec' },
                  { scenario: 'Reminder for tomorrow\'s appointments', manual: 'Coordinator manually messages each patient/customer — 30 min daily', ai: 'AI sends 24hr WhatsApp reminder automatically to all appointments' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#F05A28]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
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
          headline="Your coordinators are spending 3 hours a day on appointment management that should take zero"
          lead="Manual scheduling on WhatsApp is one of the most expensive hidden costs in Indian businesses. It requires constant attention, has high error rates, stops outside business hours, and creates a poor customer experience. AI scheduling eliminates it entirely."
          pillars={[
            {
              icon: '📅',
              title: 'Manual scheduling bleeds 3 hours a day',
              body: "The average Indian SMB with 20–50 appointments per day spends 2–4 hours of coordinator or front-desk time daily on scheduling: checking calendars, responding to WhatsApp booking requests, sending confirmations, managing reschedules, and manually following up for reminders. This is 100% addressable by AI — none of it requires human judgment once the system is built.",
            },
            {
              icon: '🌙',
              title: 'You are losing appointments booked outside business hours',
              body: "35–40% of appointment requests in India arrive outside 9 AM–6 PM — evenings, weekends, and festival days when coordinators are offline. These leads either book with a competitor who responds first, or are followed up too late. An AI scheduling agent books 24/7, including at 11 PM on Diwali, and the appointment is confirmed to your calendar before your team arrives the next morning.",
            },
            {
              icon: '🚫',
              title: 'No-shows are costing you revenue every day',
              body: "The average Indian business sees 20–35% no-show rates on appointments booked via manual WhatsApp coordination. Most of these are recoverable with a well-timed reminder sequence. An AI scheduling agent with a 24-hour WhatsApp reminder + 1-hour WhatsApp reminder consistently reduces no-show rates to 10–15% — recovering significant revenue from slots that would otherwise be wasted.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From booking flow design to live WhatsApp appointments in 1–4 weeks"
          stages={SCHEDULING_JOURNEY_STAGES}
          closingNote="We run 100+ test bookings before your customers see the AI. You validate the conversation flow and calendar accuracy — we fix any edge cases before go-live."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI scheduling agent"
          lead="We pick the right conversational AI, calendar integration, and reminder stack for your service type, booking volume, and customer language preferences. Everything is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI scheduling agent has five layers: a conversational AI for the booking dialogue (Claude or GPT-4o), a calendar integration layer (Google Calendar, Zoho Bookings, or custom), a WhatsApp delivery layer (Interakt, Wati, or AiSensy), a reminder orchestration layer, and a CRM sync layer (Zoho CRM, LeadSquared). We design the handoffs between layers to be reliable, with error recovery at each step so a failed API call never results in a missed booking.
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
                      { layer: 'Conversational AI', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'WhatsApp Delivery', tools: 'Interakt, Wati, AiSensy' },
                      { layer: 'Calendar / Booking', tools: 'Google Calendar, Zoho Bookings, Calendly, custom' },
                      { layer: 'CRM Sync', tools: 'Zoho CRM, LeadSquared, Freshsales, HubSpot' },
                      { layer: 'Payment Collection', tools: 'Razorpay (deposit + refund workflows)' },
                      { layer: 'Reminder Orchestration', tools: 'n8n, custom scheduler with WhatsApp API' },
                      { layer: 'Analytics', tools: 'Custom dashboard, Google Sheets export' },
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
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Five Scheduling AI Types We Build</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Clinic & Healthcare Booking', desc: 'Multi-doctor appointment booking on WhatsApp — specialty routing, Hindi/English, Razorpay fees, DPDP-compliant data handling.' },
                  { name: 'Real Estate Site Visit Booking', desc: 'Lead-to-site-visit automation from 99acres, Facebook, and WhatsApp — slot booking, CRM update, pre-visit WhatsApp with location.' },
                  { name: 'Demo & Counsellor Call Booking', desc: 'EdTech and B2B demo booking — qualification questions, counsellor routing, Zoom link, multi-step reminder sequence.' },
                  { name: 'Test Drive & Showroom Booking', desc: 'Automotive appointment booking from lead ads — model preference, showroom routing, date/time confirmation, 24hr reminder.' },
                  { name: 'Service & Consultation Booking', desc: 'Professional services booking (CA, lawyer, advisor, salon) — service selection, deposit collection, multi-reminder, post-visit review request.' },
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
              {SCHEDULING_STATS.map((stat) => (
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
          eyebrow="INDIA SCHEDULING AI MARKET"
          headline="500M WhatsApp users who prefer to book appointments by messaging — not by clicking a link."
          leadParagraphs={[
            "The Indian customer journey for booking appointments is fundamentally different from the Western model. Indian customers do not fill out booking forms — they message. Real estate buyers message before visiting, patients message before booking, students message before enrolling. Businesses that respond to these messages with a fast, frictionless booking flow win; those that ask customers to 'click the link and fill the form' lose them.",
            "FactoryJet AI scheduling agents are built for the Indian WhatsApp-first booking behaviour — natural conversation in Hindi or English, live calendar check, instant confirmation, automated reminders. For businesses in healthcare, real estate, EdTech, automotive, and professional services, where appointment volume drives revenue directly, AI scheduling is one of the highest-ROI technology investments available.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The appointment booked at midnight is still a confirmed revenue event at 9 AM.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Healthcare & Clinics', 'Real Estate', 'EdTech', 'Automotive', 'Professional Services', 'Beauty & Wellness'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SCHEDULING_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Manual WhatsApp vs. Calendly vs. Receptionist"
          lead="Fixed price, WhatsApp-native, Hindi-speaking scheduling AI — the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'AI scheduling agent that books appointments on WhatsApp in Hindi and English, syncs to Google Calendar, sends WhatsApp confirmations and reminders, and reduces no-shows by 40%. No monthly fee to FactoryJet.' }}
          columns={SCHEDULING_COMPARISON_COLUMNS}
          rows={SCHEDULING_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market rates as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI scheduling agents for every appointment-driven Indian business"
          lead="Every industry has different booking flows, calendar systems, and compliance requirements. We build for yours."
          sectors={SCHEDULING_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian founders say after automating their appointment scheduling"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate Appointment Booking"
          lead="The questions we answer on every Indian AI scheduling discovery call — answered honestly, with real use case examples."
          categories={SCHEDULING_FAQ_CATEGORIES}
          items={SCHEDULING_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Scheduling Strategy Call"
            sub="Tell us your appointment volume, how customers currently book, and your biggest scheduling friction. We will map out exactly how an AI scheduling agent reduces that friction and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919876543210' }}
            objectionHandler="Fixed price. Full code ownership. WhatsApp + Google Calendar + Zoho + Razorpay ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
