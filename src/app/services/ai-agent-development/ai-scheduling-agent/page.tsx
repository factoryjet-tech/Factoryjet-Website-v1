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
  title: 'AI Scheduling Agent for US Businesses | FactoryJet',
  description:
    'AI scheduling agents for US businesses. Automate appointment booking, SMS and email reminders, and two-way sync with Google Calendar, Outlook and Calendly. Fixed price.',
  keywords: [
    'AI scheduling agent',
    'AI appointment booking USA',
    'automated appointment scheduling US',
    'AI booking agent for small business',
    'appointment reminder automation US',
    'Google Calendar AI scheduling',
    'Outlook calendar AI booking',
    'clinic appointment scheduling AI',
    'demo booking automation US',
    'AI scheduling assistant USA',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Scheduling Agent for US Businesses | Appointment Booking AI | FactoryJet',
    description: 'AI that books demos, service calls, and appointments by text and email, in English and Spanish, synced to Google Calendar and Outlook. Fixed price.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
    images: [{ url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp', width: 1200, height: 800, alt: 'FactoryJet AI Agent Development Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scheduling Agent for US Businesses | FactoryJet',
    description: 'Automate appointment booking and reminders by text and email, in English and Spanish. Google Calendar and Outlook integrated. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Scheduling Agent Development USA',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  description: 'Custom AI scheduling agents for US businesses, automate appointment booking by SMS, email, and web chat in English and Spanish with Google Calendar, Outlook, and Calendly integration.',
  areaServed: 'US',
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
    description: 'We map your current booking flow, how customers request appointments, which staff manage calendars, how confirmations and reminders are sent, and where rescheduling creates friction. We design the AI flow to match your existing process.',
  },
  {
    number: '02',
    title: 'Conversation & Calendar Design',
    description: 'We design the booking conversation in English and Spanish, how the AI asks for preferences, presents time slots, handles conflicts, and confirms bookings. We configure availability rules, buffer times, and resource allocation logic in your calendar system.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build the AI scheduling agent and connect it to your SMS and email channels, Google Calendar or Outlook, your booking system, your CRM, and your payment processor (if a deposit at booking is required). Full two-way calendar sync ensures no double bookings.',
  },
  {
    number: '04',
    title: 'Test & Tune',
    description: 'We run 100+ test bookings across different scenarios: concurrent availability requests, customers in a different time zone from the location they are booking, daylight saving transitions, rescheduling after confirmation, and cancellation flows. We tune slot-presentation logic until booking completion rates meet target.',
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
    label: 'more appointments booked per week with AI vs. manual phone and email scheduling: FactoryJet client data',
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
    label: 'appointment booking, customers book at 11 PM on Sunday, confirmed instantly',
    microcopy: 'always available, no front-desk required',
    categoryLabel: 'AVAILABILITY',
  },
];

const SCHEDULING_MARKET_STATS = [
  {
    value: '2 clock changes',
    label: 'US clocks move on the second Sunday in March and the first Sunday in November, and Arizona and Hawaii do not move at all. A scheduling agent that stores the wrong offset books the wrong hour twice a year',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/15/260a',
    sourceLabel: '15 U.S.C. 260a',
  },
  {
    value: 'TCPA',
    label: 'automated appointment texts and calls to US mobile numbers need prior express consent and a working opt-out. We build consent capture and STOP handling into the booking flow',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/47/227',
    sourceLabel: '47 U.S.C. 227',
  },
  {
    value: '24/7',
    label: 'coverage from Eastern to Pacific, so a request that lands at 11 PM in Los Angeles is already a confirmed appointment when your Atlanta team logs in',
    sourceUrl: 'https://factoryjet.com/services/ai-agent-development',
    sourceLabel: 'FactoryJet scheduling deployments',
  },
];

const SCHEDULING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Manual Phone & Email Booking' },
  { label: 'Calendly / Acuity Alone' },
  { label: 'Receptionist / Coordinator' },
] as const;

const SCHEDULING_COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: [
      'Fixed price after a scoping call',
      'No software cost, paid for in front-desk hours every single day',
      'Monthly subscription per seat, no SMS conversation, no AI',
      'Full-time salary plus benefits and cover for time off',
    ],
  },
  {
    feature: 'Books by SMS and email in English and Spanish',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="partial" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="rc" kind="yes" />,
    ],
  },
  {
    feature: 'Available 24/7 across every US time zone, weekends and holidays included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="no" />,
    ],
  },
  {
    feature: 'Sends automated SMS and email reminders',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="mw" kind="no" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="rc" kind="partial" />,
    ],
  },
  {
    feature: 'HubSpot / Salesforce sync on every booking',
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
    feature: 'Card deposit collected at time of booking',
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
    description: 'Appointment booking by text, web chat, and email for multi-provider practices: real-time availability check, specialty-based routing, confirmation with provider name and directions, reminder sequence, and rescheduling flow. Built to respect HIPAA on what the agent stores and sends.',
    example: 'Clinics report 35% more appointments booked and 40% fewer no-shows after AI scheduling deployment.',
  },
  {
    name: 'Real Estate',
    description: 'Showing and tour booking from Zillow, Realtor.com, and paid social leads: the AI books slots by property and neighborhood, confirms by text, sends the address and access instructions, and logs to your CRM with the qualification answers attached.',
    example: 'Agents double showing booking rates without adding a coordinator.',
  },
  {
    name: 'Education & Training',
    description: 'Advisor call and trial class booking: the AI books on program interest and advisor availability, sends the Zoom or Teams link by text and email, and sends 24-hour and 10-minute reminders to reduce no-shows.',
    example: 'Education providers see 3× more advisor calls booked per week with AI scheduling.',
  },
  {
    name: 'Automotive',
    description: 'Test drive booking from lead ads and the dealership website: the AI qualifies by model interest, books slots to the showroom calendar, texts a confirmation with the address, and follows up 24 hours before to confirm.',
    example: 'Dealerships book 2× more test drives per month without adding front-desk staff.',
  },
  {
    name: 'Professional Services',
    description: 'Consultation booking for CPA firms, law firms, and financial advisors: the AI books on advisor availability and service type, collects pre-meeting details, sends a Zoom or in-office confirmation, and runs the reminder sequence.',
    example: 'Advisors recover 2–3 hours per week of calendar coordination time with AI scheduling.',
  },
  {
    name: 'Home Services & Field Work',
    description: 'Service call scheduling for HVAC, plumbing, electrical, and pest control: the AI checks technician availability by ZIP code, books the arrival window, collects a card deposit where you require one, and texts an on-the-way update.',
    example: 'Home service companies cut dispatch coordination time and fill same-day cancellation slots automatically.',
  },
];

const SCHEDULING_PRICING_TIERS = [
  {
    name: 'Text & Email Booking AI',
    priceRange: '',
    description: 'A focused AI appointment booking agent on SMS, email, and web chat: single service type, single calendar, with confirmation and reminder messages.',
    features: [
      'SMS, email, and website chat booking flow',
      'Single service type and calendar',
      'Real-time availability check (Google Calendar or Outlook)',
      'English + Spanish language support',
      'Booking confirmation by text with a calendar invite attached',
      '24-hour and 1-hour reminders with TCPA opt-out handling',
      'Rescheduling and cancellation handling',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Multi-Resource Scheduling Platform',
    priceRange: '',
    description: 'Multi-staff, multi-service scheduling with CRM sync, reminders, and no-show reduction flows.',
    features: [
      'Multiple staff members / resources',
      'Multiple service types with custom durations',
      'HubSpot / Salesforce sync on every booking',
      'Card deposit collected at time of booking',
      'Round-robin or rule-based staff routing',
      'Multi-step reminder sequence (24hr, 1hr, post-visit)',
      'Rescheduling and cancellation with slot release',
      'Booking analytics dashboard',
      '30-day post-launch support + optimisation',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise Scheduling Suite',
    priceRange: '',
    description: 'Multi-location, multi-time-zone scheduling for high-volume US businesses with full CRM and payment integration.',
    features: [
      'Multi-location, multi-branch scheduling',
      'Multi-time-zone booking with correct daylight saving handling',
      'Full CRM, EHR, or PMS integration',
      'Full payment collection and refunds through your processor',
      'AI waitlist management (auto-fills cancellations)',
      'Custom booking rules per service and location',
      'Advanced no-show analytics and recovery flows',
      'API access for custom CRM and ERP integration',
      '90-day post-launch support + quarterly optimisation',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

const SCHEDULING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'Scheduling AI Basics' },
  { key: 'channels', label: 'Channels & Reminders' },
  { key: 'us', label: 'US-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const SCHEDULING_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What exactly does an AI scheduling agent do?',
    answer: "An AI scheduling agent handles the complete appointment booking flow autonomously, by text message, email, website chat, or inbound call. When a customer asks for an appointment, the AI checks real-time availability, presents open slots in the customer's own time zone, writes the booking to your calendar, sends a confirmation text and a calendar invite with the address, triggers reminders before the appointment, and handles rescheduling or cancellation requests: all without any manual coordination.",
  },
  {
    category: 'basics',
    question: 'How is this different from just using Calendly or Acuity?',
    answer: "Calendly and Acuity are booking pages. They work if the customer visits a URL, selects a service, picks a slot, and fills out a form. Plenty of people never finish that. They text the number on your website, they reply to the ad, they call and leave a voicemail, or they email asking if Thursday works. An AI scheduling agent meets them in those channels, holds a normal conversation, and the calendar booking happens as the outcome of that conversation rather than as a separate step the customer has to take on their own.",
  },
  {
    category: 'basics',
    question: 'Can the AI handle multiple types of appointments, like different services or different providers?',
    answer: "Yes. Our Multi-Resource Scheduling Platform supports multiple service types with different durations (15-minute follow-ups vs. 60-minute consultations), multiple staff members with individual calendars, and routing rules based on service type, location preference, or round-robin assignment. The AI asks the right qualifying questions to determine which service and which resource the customer needs before presenting availability.",
  },
  {
    category: 'basics',
    question: 'What happens when all slots are full?',
    answer: "The AI offers the next available slot, offers to add the customer to a waitlist (if you enable this), or presents alternative locations or staff members with availability. For businesses with seasonal demand spikes, clinics in flu season or HVAC companies in the first heat wave: the AI also manages a waitlist that auto-fills from cancellations, reducing wasted slots and no-shows.",
  },
  {
    category: 'channels',
    question: 'Which channels can customers book through?',
    answer: "Text message, email, your website chat widget, and inbound phone calls if you add the voice module. Text is usually the workhorse in the US, because the reply rate is high and the customer does not have to leave whatever they were doing. Web chat catches people already on your site. Email suits B2B and longer scheduling threads. WhatsApp is available too if a meaningful share of your customers use it, but we would not build the whole flow around it in a US-only market.",
  },
  {
    category: 'channels',
    question: 'Can the AI send appointment reminders by text and email automatically?',
    answer: "Yes. The AI sends a confirmation immediately on booking with a calendar invite attached, a 24-hour reminder the day before, a 1-hour reminder on the day, and (optionally) a post-appointment feedback request. For healthcare and home services, the 24-hour plus 1-hour reminder combination reduces no-shows by 35–45% in our deployments. Every message carries an opt-out, and an opt-out is honored immediately across every future sequence.",
  },
  {
    category: 'channels',
    question: 'Can customers reschedule by replying to a text?',
    answer: "Yes, rescheduling conversations are fully automated. A customer texts back 'need to move this to next week' and the AI identifies their existing booking, checks availability for alternative times, presents options, writes the change to your calendar, and sends an updated confirmation and calendar invite. The original slot is automatically freed for other customers. Cancellations follow the same flow, with an optional refund trigger if a card deposit was collected.",
  },
  {
    category: 'channels',
    question: 'Can the AI also confirm appointments by voice call?',
    answer: "Yes, for high-value appointments (property showings, big-ticket service estimates), we can add an automated voice confirmation call 24 hours before using our AI Voice Agent module. The AI calls in English or Spanish, confirms the appointment details, and gives the customer the option to reschedule by pressing a key or just saying so. Text plus a voice confirmation gets the lowest no-show rates in our deployments. Outbound calls follow the same consent and calling-window rules as the text reminders.",
  },
  {
    category: 'us',
    question: 'How does the AI handle customers in different time zones?',
    answer: "Every appointment is stored in the location's time zone and displayed to the customer in theirs, detected from their area code or asked outright when it is ambiguous. So a customer in Phoenix booking a call with your Atlanta office sees Mountain time, your team sees Eastern, and the calendar invite carries the right offset for both. We also test the two daylight saving transitions specifically, and account for Arizona and Hawaii, which do not change their clocks at all.",
  },
  {
    category: 'us',
    question: 'Is texting appointment reminders to customers a TCPA problem?',
    answer: "It is a rule the build has to respect, not a blocker. Automated texts and calls to US mobile numbers need prior express consent from the person you are contacting, and an opt-out that actually works. So the booking flow captures consent at the point the customer gives you their number, records when and how they gave it, includes opt-out language in the messages, and processes STOP and UNSUBSCRIBE replies immediately across every sequence. We also respect calling windows for voice. We build to those rules, but we are not attorneys, so run your final message templates and consent language past your own counsel.",
  },
  {
    category: 'us',
    question: 'Can the AI collect a card deposit at the time of booking?',
    answer: "Yes. For services where a deposit reduces no-shows (clinics, salons, high-demand service calls), we build payment link generation into the booking flow using your existing payment processor. After the customer picks a slot, the AI sends a payment link, confirms on receipt, and only finalizes the booking after payment clears. Cancellations trigger the refund flow based on the policy you configure.",
  },
  {
    category: 'us',
    question: 'Does the AI sync appointments to HubSpot or Salesforce?',
    answer: "Yes. Every booking creates or updates a contact record in HubSpot, Salesforce, Pipedrive, or whatever CRM you already run, with the customer name, phone, appointment type, date, time, and staff assignment. For real estate and B2B sales, this also moves the deal stage (for example from 'contacted' to 'showing booked'). Managers see the booking pipeline in the CRM without anyone typing it in.",
  },
  {
    category: 'us',
    question: 'What about patient data, is this HIPAA-safe for a medical practice?',
    answer: "For healthcare clients we design the agent so protected health information stays inside systems covered by a business associate agreement, and the outbound text says only what it needs to: who, when, where, and how to reschedule. No diagnosis, no reason for visit, no results in a text message. We will work within the BAAs your practice already has with its EHR and messaging vendors. We are not a HIPAA certification body and we do not claim to be one, so your compliance officer signs off on the final message templates and data flow.",
  },
  {
    category: 'us',
    question: 'Can the AI take bookings in Spanish?',
    answer: "Yes. English and Spanish are the two languages we build and test properly for US deployments, with automatic detection from the customer's first message. The whole flow works in either: qualifying questions, slot presentation, confirmation, reminders, and rescheduling. If a large share of your customers speak another language, tell us on the scoping call and we will tell you honestly whether we can support it to the same standard.",
  },
  {
    category: 'us',
    question: 'How does the scheduling AI handle US holidays and reduced-hours days?',
    answer: "The calendar configuration includes federal holidays plus any custom blocked dates you define, per location. Around Thanksgiving, Christmas, and July 4th you can configure reduced hours, emergency-only slots, or a full closure: the AI stops offering those slots and tells customers the next date you are actually open. A multi-location business can run different holiday calendars per site, which matters when your Chicago office closes and your Austin office does not.",
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI scheduling agent?',
    answer: "A focused text and email booking agent (single service, one calendar) goes live in 1–2 weeks. Multi-resource platforms with CRM and payment integration take 3–4 weeks. Enterprise suites with multi-location and multi-time-zone support take 5–7 weeks. The fastest path is to start with one service type, validate the booking flow with real customers, and then expand to multi-service and multi-staff.",
  },
  {
    category: 'process',
    question: 'What do you need from us to build the scheduling AI?',
    answer: "We need: API access to your calendar system (Google Calendar, Outlook or Microsoft 365, Calendly, or your existing booking software), a business texting number (we can provision and register one), your service list with durations and staff assignments, business hours, time zones, and holiday schedule per location, and a 30-minute discovery call to map the booking conversation. We handle all technical setup from there.",
  },
  {
    category: 'process',
    question: 'Can we update availability and services without technical help?',
    answer: "Yes. After deployment, you manage service types, staff availability, business hours, and holiday schedules through the admin dashboard, no code required. Adding a new provider, changing a service duration, or blocking the week of Thanksgiving can all be done by a non-technical staff member. For changes to the conversation flow or new integrations, we handle those on retainer.",
  },
  {
    category: 'process',
    question: 'How do we measure the performance of the scheduling AI?',
    answer: "You get a booking analytics dashboard showing total bookings per day and week, source channel (text vs. web chat vs. email), no-show rate, rescheduling rate, drop-off point in the booking conversation (where customers abandon), and deposits collected. Most businesses see booking volume increase 25–40% in the first month as the 24/7 availability captures demand that previously went unbooked outside business hours.",
  },
  {
    category: 'pricing',
    question: 'How do I calculate the ROI of an AI scheduling agent?',
    answer: "The simplest calculation: count the staff hours spent per week on appointment coordination (calls, callbacks, reminder texts, reschedule management), multiply by your fully loaded hourly cost, and project the monthly saving. For most businesses running 20–50 appointments per day, the AI takes back 2–4 hours of coordination time daily. We quote a fixed price after a scoping call, so you can hold that number against the saving before you commit. The second half of the ROI is the appointments you were never capturing at all because nobody was answering at 9 PM.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the scheduling agent is built?',
    answer: "Three small ones, all paid to vendors rather than to us: LLM API usage for the conversation (modest at scheduling volumes), your SMS provider's per-message cost, and whatever your calendar and CRM subscriptions already cost. FactoryJet charges nothing ongoing unless you choose a maintenance retainer. We size the vendor costs for your actual booking volume during scoping so there are no surprises after launch.",
  },
  {
    category: 'pricing',
    question: 'Can we start with just text booking and add the reminder sequence and deposits later?',
    answer: "Yes, modular expansion is standard. Start with the Text & Email Booking AI, run it for 4–6 weeks to establish baseline metrics, then add the multi-step reminder sequence to reduce no-shows, and deposit collection to improve show rate further. Each module is priced at the incremental cost of the addition. Most clients expand to the full reminder plus payment module within 60 days of the initial deployment.",
  },
  {
    category: 'pricing',
    question: 'Can we pilot the scheduling AI before committing to the full build?',
    answer: "Yes. For businesses wanting validation before committing, we offer a 2-week pilot: a text booking flow for one service type deployed to your live business number. The pilot is offered at a fixed price, credited against the full project. Seeing real customer booking conversations and the calendar entries they generate is typically the fastest way to build internal confidence in the ROI.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SCHEDULING_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AISchedulingAgentUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ai-scheduling-agent-us-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-scheduling-agent-us-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
          { name: 'AI Scheduling Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Scheduling Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent' },
        ]} />

        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_scheduling_agent_hero" />}
          eyebrow="AI SCHEDULING AGENT · USA"
          headline="AI That Books Demos, Showings, and Clinic Appointments by Text and Email, 24/7"
          lead="AI scheduling agents that check availability, write the slot to Google Calendar or Outlook, send the calendar invite, collect a card deposit where you need one, and run the reminder sequence: all from one customer message, in English or Spanish, in the right time zone. No coordinator needed. Fixed price."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'Google Calendar + Outlook + Calendly',
            'English & Spanish booking flows',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                AI SCHEDULING AGENT · LIVE
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                42 appointments booked today. 0 coordinators involved.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer texts "any chance you can come out Saturday?" → AI checks the crew calendar → books the window → texts back a confirmation and a calendar invite',
                  'Patient asks for a Dr. Reyes appointment → AI checks the schedule → offers 3 slots in the patient\'s own time zone → patient picks → written to the calendar',
                  'No-show prevention: 24hr reminder texted to 8 patients → 6 confirm, 1 reschedules into an open slot → no-show rate down 40%',
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
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">Books appointments 24/7. Syncs to Google Calendar and Outlook. Reminds by text and email. Runs itself.</p>
              </div>
            </div>
          }
        />

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        <ServiceExplanation
          eyebrow="AI SCHEDULING EXPLAINED"
          headline="Why AI Scheduling Is Different From Calendly or a Front-Desk Coordinator"
          lead="Calendly and Acuity require the customer to open a URL, fill a form, and pick a slot. Plenty of people never finish that. They text, they call, they email. An AI scheduling agent meets them in those channels, in conversation, against your live calendar."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['SMS booking', 'Spanish scheduling', 'Google Calendar', 'Outlook & Microsoft 365', 'Card deposits', 'Reminders', 'Multi-provider', 'Rescheduling'].map((cap) => (
                  <span key={cap} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.10em' }}>{cap}</span>
                ))}
              </div>
              <p>
                The scheduling friction for most US businesses happens in the gap between the request and the confirmation. A customer texts or calls asking for an appointment, the coordinator checks the calendar, plays phone tag or messages back 2–3 times to settle on a time, and eventually books it by hand. That is 15–20 minutes per booking, and it stops entirely at 5 PM local, which is 2 PM for a third of the country. An AI scheduling agent compresses it to 60 seconds, 24/7, without a human in the loop.
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
                FactoryJet AI scheduling agents connect to your texting number and inbox, Google Calendar or Outlook, your booking system, your CRM, and your payment processor. The booking conversation happens naturally in English or Spanish. The calendar entry, the invite, the CRM update, the deposit, and the reminder sequence all happen on their own: no coordinator, no back-and-forth, no missed appointments.
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
                  { scenario: 'Customer texts asking for an appointment', manual: 'Coordinator checks calendar, replies, customer picks, confirms by hand, 15–20 min', ai: 'AI checks availability, offers slots, books, sends confirmation and invite, 60 seconds' },
                  { scenario: 'Request lands at 11 PM Pacific on a Sunday', manual: 'No response until Monday, and by then they have called a competitor', ai: 'AI books it immediately, calendar updated, confirmation sent' },
                  { scenario: 'Customer in a different time zone from the location', manual: 'Coordinator does the math in their head, sometimes wrong, both parties show up an hour apart', ai: 'AI shows the customer their time zone, stores the location time zone, invite carries the right offset' },
                  { scenario: 'Reminders for tomorrow\'s appointments', manual: 'Coordinator messages each customer by hand, 30 min daily', ai: 'AI texts and emails the 24hr reminder automatically, with opt-out handled' },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
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
          lead="Manual scheduling is one of the most expensive hidden costs in a US small business. It needs constant attention, has a high error rate, stops dead outside office hours, and gives the customer a worse experience than a competitor who answers instantly. AI scheduling removes it."
          pillars={[
            {
              icon: '📅',
              title: 'Manual scheduling bleeds 3 hours a day',
              body: "A business running 20–50 appointments per day spends 2–4 hours of coordinator or front-desk time daily on scheduling: checking calendars, returning booking calls and texts, sending confirmations, handling reschedules, and chasing reminders by hand. Almost none of it needs human judgment once the system is built, which is exactly what makes it a good candidate for automation.",
            },
            {
              icon: '🌙',
              title: 'You are losing the appointments people try to book after hours',
              body: "A large share of appointment requests arrive outside 9 to 5, in the evening, on weekends, and from customers three time zones away who are still at their desk when your office has closed. Those requests either go to whoever answers first or get followed up too late to matter. An AI scheduling agent books at 11 PM on a Sunday, and the appointment is on your calendar before your team gets in.",
            },
            {
              icon: '🚫',
              title: 'No-shows are costing you revenue every day',
              body: "No-show rates on manually coordinated appointments run high, and most of those are recoverable with a well-timed reminder. An AI scheduling agent that texts 24 hours out and again an hour before, with an easy one-tap reschedule instead of a dead end, consistently pulls no-show rates down in our deployments and recovers revenue from slots that would otherwise sit empty.",
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From booking flow design to live appointments in 1–4 weeks"
          stages={SCHEDULING_JOURNEY_STAGES}
          closingNote="We run 100+ test bookings before your customers see the AI. You validate the conversation flow and calendar accuracy, we fix any edge cases before go-live."
        />

        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI scheduling agent"
          lead="We pick the right conversational AI, calendar integration, and reminder stack for your service type, booking volume, and customer language preferences. Everything is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI scheduling agent has five layers: a conversational AI for the booking dialogue (Claude or GPT-4o), a calendar integration layer (Google Calendar, Outlook and Microsoft 365, Calendly, or your own booking system), a message delivery layer (Twilio, MessageBird, or your existing business texting provider), a reminder orchestration layer, and a CRM sync layer (HubSpot, Salesforce, Pipedrive). We design the handoffs between layers to be reliable, with error recovery at each step so a failed API call never results in a missed booking.
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
                      { layer: 'Message Delivery', tools: 'Twilio, MessageBird, transactional email, WhatsApp Business API where your customers use it' },
                      { layer: 'Calendar / Booking', tools: 'Google Calendar, Outlook & Microsoft 365, Calendly, Acuity, custom' },
                      { layer: 'CRM Sync', tools: 'HubSpot, Salesforce, Pipedrive, Zoho CRM' },
                      { layer: 'Payment Collection', tools: 'Your processor (deposit + refund workflows)' },
                      { layer: 'Reminder Orchestration', tools: 'n8n, custom scheduler with SMS and email APIs' },
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
                  { name: 'Clinic & Healthcare Booking', desc: 'Multi-provider appointment booking by text and web chat | specialty routing, English/Spanish, copay collection, HIPAA-aware message design.' },
                  { name: 'Real Estate Showing Booking', desc: 'Lead-to-showing automation from Zillow, Realtor.com, and paid social | slot booking, CRM update, pre-visit text with the address and access notes.' },
                  { name: 'Demo & Advisor Call Booking', desc: 'B2B and education demo booking | qualification questions, rep routing, Zoom or Teams link, multi-step reminder sequence.' },
                  { name: 'Test Drive & Showroom Booking', desc: 'Automotive appointment booking from lead ads | model preference, store routing, date and time confirmation, 24hr reminder.' },
                  { name: 'Service & Consultation Booking', desc: 'Professional and home services booking (CPA, attorney, advisor, HVAC) | service selection, deposit collection, multi-reminder, post-visit review request.' },
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
          eyebrow="US SCHEDULING AI MARKET"
          headline="A country four time zones wide, where the person booking is rarely in the same one as the person taking the booking."
          leadParagraphs={[
            "US scheduling has a specific shape. Your customer texts instead of filling out a form. They do it at 9 PM their time, which may be midnight yours. Half of them are in a different time zone from the location they are booking, and twice a year the whole country moves its clocks except Arizona and Hawaii. Businesses that answer instantly and get the hour right win the appointment. Businesses that reply Monday morning with 'what time works for you?' lose it to whoever answered first.",
            "FactoryJet AI scheduling agents are built for that reality: a natural conversation over text, email, or web chat in English or Spanish, a live calendar check, an instant confirmation with a calendar invite carrying the correct offset, and a reminder sequence that respects consent and opt-out. For healthcare, real estate, home services, automotive, and professional services, where appointment volume is revenue, scheduling is usually the first thing worth automating.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  The appointment booked at midnight is still a confirmed revenue event at 9 AM.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Healthcare & Clinics', 'Real Estate', 'Education & Training', 'Automotive', 'Professional Services', 'Home Services'].map((ind) => (
                  <span key={ind} className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>{ind}</span>
                ))}
              </div>
            </>
          }
          stats={SCHEDULING_MARKET_STATS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Manual Booking vs. Calendly vs. a Receptionist"
          lead="Fixed price, text-native, English and Spanish scheduling AI: the honest comparison."
          pullQuote={{ stat: 'Fixed price', caption: 'An AI scheduling agent that books by text and email in English and Spanish, syncs two ways with Google Calendar and Outlook, sends confirmations, invites and reminders, and cuts no-shows. No monthly fee to FactoryJet.' }}
          columns={SCHEDULING_COMPARISON_COLUMNS}
          rows={SCHEDULING_COMPARISON_ROWS}
          footer="We quote a fixed price after a scoping call. Comparison reflects the typical shape of each option, not a quote from any named vendor."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI scheduling agents for every appointment-driven US business"
          lead="Every industry has different booking flows, calendar systems, and compliance requirements. We build for yours."
          sectors={SCHEDULING_INDUSTRIES}
        />


        <GetFreeQuoteCTA />
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say about working with FactoryJet"
        />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Automate Appointment Booking"
          lead="The questions we answer on every AI scheduling discovery call, answered honestly, with real use case examples."
          categories={SCHEDULING_FAQ_CATEGORIES}
          items={SCHEDULING_FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Scheduling Strategy Call"
            sub="Tell us your appointment volume, how customers currently book, and your biggest scheduling friction. We will map out exactly how an AI scheduling agent reduces that friction and give you a fixed-price estimate before writing a single line of code."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price after a scoping call. Full code ownership. SMS + email + Google Calendar + Outlook ready. 500+ businesses served."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
