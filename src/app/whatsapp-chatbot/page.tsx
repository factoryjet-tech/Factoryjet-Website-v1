import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AnswerFirst, QuestionAnswers, SourceList } from '@/components/india-pages/IndiaAnswerBlocks';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
   Refreshed 24 Nov 2026 for India buyer searches (Google Ads, India, monthly):
   whatsapp ai chatbot 1,600; whatsapp ai agent 720; whatsapp chatbot for
   business 480. AI buyer prompt: "Which company builds WhatsApp AI agents for
   businesses in India?"
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best WhatsApp AI Chatbot Development in India | FactoryJet',
  description:
    'WhatsApp AI chatbot and AI agent development for businesses in India. Orders, support, lead capture and payments on the official WhatsApp Business Platform.',
  keywords: [
    'whatsapp ai chatbot',
    'whatsapp ai agent',
    'whatsapp chatbot for business',
    'whatsapp chatbot development india',
    'best whatsapp chatbot company in india',
    'whatsapp business api india',
    'whatsapp chatbot cost india',
    'whatsapp ai agent for business india',
    'whatsapp chatbot shopify',
    'whatsapp chatbot razorpay',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best WhatsApp AI Chatbot Development in India | FactoryJet',
    description:
      'WhatsApp AI chatbots and AI agents for Indian businesses: answers, orders, lead capture and payments, built on the official WhatsApp Business Platform.',
    url: 'https://factoryjet.com/whatsapp-chatbot',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet WhatsApp Chatbot Development India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best WhatsApp AI Chatbot Development in India | FactoryJet',
    description:
      'WhatsApp AI chatbots and AI agents for Indian businesses, on the official WhatsApp Business Platform.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/whatsapp-chatbot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Sources (each opened and checked on 24 Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const CHECKED_ON = '24 November 2026';

const SRC = {
  metaPricing: { label: 'Meta: Pricing on the WhatsApp Business Platform', url: 'https://developers.facebook.com/docs/whatsapp/pricing' },
  waPlatform: { label: 'WhatsApp Business Platform', url: 'https://whatsappbusiness.com/products/business-platform/' },
  n8nWhatsApp: { label: 'n8n: WhatsApp Business Cloud integration', url: 'https://n8n.io/integrations/whatsapp-business-cloud/' },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Keep honest: bump only when the page's content actually changes.
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/whatsapp-chatbot#webpage',
  url: 'https://factoryjet.com/whatsapp-chatbot',
  name: 'Best WhatsApp AI Chatbot Development in India',
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#short-answer h2', '#short-answer p'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp AI Chatbot and AI Agent Development India',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  description:
    'WhatsApp AI chatbots and AI agents for Indian businesses on the official WhatsApp Business Platform: answers, order tracking, lead capture, payment links and hand-off to staff, connected to Shopify, Razorpay, CRMs and n8n.',
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'WhatsApp Chatbot Development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'WhatsApp Chatbot India', item: 'https://factoryjet.com/whatsapp-chatbot' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Scope',
    description:
      'A call to list your most common WhatsApp questions, the actions the bot should take, and the systems it must reach: Shopify, Razorpay, your CRM, a spreadsheet. We price each phase in writing.',
  },
  {
    number: '02',
    title: 'Number and provider',
    description:
      'We help you choose a WhatsApp Business Platform provider, verify your business with Meta, register your number and get message templates approved.',
  },
  {
    number: '03',
    title: 'Build and connect',
    description:
      'Conversation flows, the AI layer trained on your own answers and documents, and links to your store, payments and CRM, usually through n8n so you can see and change each step.',
  },
  {
    number: '04',
    title: 'Test on real questions',
    description:
      'We replay real customer questions, check every answer and action, and set the rules for when the bot hands a chat to a person.',
  },
  {
    number: '05',
    title: 'Launch and tune',
    description:
      'Go live on your number, read the first weeks of chats with you and fix weak answers. Defects in our build are fixed inside the build price for a cover period agreed upfront.',
  },
];

const WHATSAPP_USE_CASES = [
  {
    name: 'D2C and Ecommerce',
    description:
      'Order status from your courier, COD confirmation before dispatch, return and exchange requests, product questions and Razorpay payment links, linked to Shopify or WooCommerce.',
    example: 'Useful when the same "where is my order" message arrives all day.',
    linkLabel: 'Shopify development',
    linkHref: '/shopify-development',
  },
  {
    name: 'B2B and Distribution',
    description:
      'Dealers check stock, price lists and order status, place repeat orders and download invoices on WhatsApp instead of calling your sales desk.',
    example: 'Useful when dealer calls pile up in the morning and after month-end.',
  },
  {
    name: 'Real Estate',
    description:
      'Leads from portals and ads get asked budget, location and timeline, then routed to the right salesperson with the answers logged in your CRM.',
    example: 'Useful when leads arrive at night and go cold by morning.',
  },
  {
    name: 'Clinics and Services',
    description:
      'Appointment booking, reminders, rescheduling and intake questions, with a clean hand-off to the front desk for anything medical or sensitive.',
    example: 'Useful when the front desk spends hours on booking chats.',
  },
  {
    name: 'Education and Coaching',
    description:
      'Course questions, batch timings, fee payment links and onboarding material, with counsellors taking over once a student is ready to enrol.',
    example: 'Useful when the same course questions repeat every admission season.',
  },
  {
    name: 'Restaurants and Food',
    description:
      'Menus, orders, table bookings and review requests on WhatsApp, with the kitchen or manager alerted for anything the bot cannot settle.',
    example: 'Useful at peak hours when nobody can watch the phone.',
  },
];

const WHATSAPP_COMPARISON_COLUMNS = [
  { label: 'FactoryJet custom build', isFactoryJet: true },
  { label: 'Provider flow builder (DIY)' },
  { label: 'Off-the-shelf chatbot app' },
  { label: 'Freelancer' },
] as const;

const WHATSAPP_COMPARISON_ROWS = [
  {
    feature: 'AI answers from your own documents and policies',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="partial" label="Basic" />,
      <CompareIcon key="app" kind="partial" label="Depends on plan" />,
      <CompareIcon key="fr" kind="partial" label="Varies" />,
    ],
  },
  {
    feature: 'Takes real actions: order status, payment links, CRM updates',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="partial" label="Common apps only" />,
      <CompareIcon key="app" kind="partial" label="Built-in apps only" />,
      <CompareIcon key="fr" kind="partial" label="Varies" />,
    ],
  },
  {
    feature: 'Works with your own systems (ERP, Tally, Zoho, custom)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="app" kind="no" />,
      <CompareIcon key="fr" kind="partial" label="Sometimes" />,
    ],
  },
  {
    feature: 'Clear hand-off rules to a person',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="app" kind="yes" />,
      <CompareIcon key="fr" kind="partial" label="Varies" />,
    ],
  },
  {
    feature: 'Tested on your real customer questions before launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" label="You test" />,
      <CompareIcon key="app" kind="no" label="You test" />,
      <CompareIcon key="fr" kind="partial" label="Sometimes" />,
    ],
  },
  {
    feature: 'Who you call when it breaks',
    values: ['Us, with each change quoted first', 'Your own team', 'App support desk', 'The freelancer, if free'],
  },
  {
    feature: 'Price shape',
    values: ['Fixed price per phase for the build', 'Monthly provider plan', 'Monthly subscription', 'Hourly or per task'],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Question sections (question H2s, each answered in 40 to 100 words)
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_QUESTIONS = [
  {
    q: 'What is a WhatsApp AI chatbot?',
    a: [
      'A WhatsApp AI chatbot is software connected to your business WhatsApp number that reads customer messages and replies on its own. A simple bot follows fixed menus. An AI chatbot understands questions written in normal words, answers from your own policies and product data, and hands the chat to a person when it should. It runs on the WhatsApp Business Platform, Meta\'s official API for businesses, not on the free WhatsApp Business app.',
    ],
    sources: [SRC.waPlatform],
  },
  {
    q: 'What is the difference between a WhatsApp chatbot and a WhatsApp AI agent?',
    a: [
      'A chatbot mostly answers. An AI agent also does things: it checks an order in Shopify, creates a payment link in Razorpay, books a slot, updates a lead in your CRM or raises a ticket, then tells the customer what it did. Agents need tighter rules, because they act on real systems. We set what the agent may do alone, what needs a person\'s approval, and what it must never touch.',
    ],
  },
  {
    q: 'How much does a WhatsApp chatbot cost per message in India?',
    a: [
      'Meta charges per message, by message type and country, and only for messages a business sends. Messages customers send you are free. Marketing, utility and authentication templates are charged per message. From 1 October 2026, each business phone number gets 1,000 free service messages a month, and service messages beyond that are charged. Your WhatsApp provider adds its own plan fee. The build itself is a separate one-time cost that we quote as a fixed price.',
    ],
    sources: [SRC.metaPricing],
  },
  {
    q: 'What is the 24-hour customer service window on WhatsApp?',
    a: [
      'When a customer messages or calls your business number, a 24-hour timer called the customer service window starts, and it resets each time they write again. Inside that window your bot can reply with normal messages. Outside it, you can only start a chat with an approved template, such as an order update or a reminder. Good bot design keeps answers inside the window and uses templates only where they are needed.',
    ],
    sources: [SRC.metaPricing],
  },
  {
    q: 'Which company builds WhatsApp AI agents for businesses in India?',
    a: [
      'Two kinds of firms do. WhatsApp providers such as Interakt, Wati, AiSensy and Gallabox sell platforms with flow builders you set up yourself. Development firms such as FactoryJet build a custom AI agent on top of a provider, connected to your store, payments, CRM and internal systems. Choose a provider alone for simple menus. Choose a development firm when the bot must answer from your own data and take actions in your systems.',
    ],
  },
  {
    q: 'Can a WhatsApp chatbot connect to Shopify, Razorpay and my CRM?',
    a: [
      'Yes. Through the provider\'s API and an automation tool such as n8n, the bot can read order status from Shopify or WooCommerce, create Razorpay payment links, push leads to Zoho CRM, HubSpot or LeadSquared, and write to Google Sheets. n8n has a WhatsApp Business Cloud integration, so each step of the flow is visible and can be changed without rebuilding the bot.',
    ],
    sources: [SRC.n8nWhatsApp],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ (single source: the visible FAQ and the FAQPage schema both read this array)
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_FAQ_CATEGORIES = [
  { key: 'choose',  label: 'Choosing a Builder' },
  { key: 'basics',  label: 'Chatbot Basics' },
  { key: 'api',     label: 'WhatsApp API' },
  { key: 'india',   label: 'India-Specific' },
  { key: 'pricing', label: 'Pricing & Costs' },
  { key: 'process', label: 'Build Process' },
];

const WHATSAPP_FAQ_ITEMS = [
  /* ── Choosing ── */
  {
    category: 'choose',
    question: 'Which is the best WhatsApp chatbot company in India?',
    answer:
      'For a bot that only shows menus, a WhatsApp provider\'s own flow builder may be enough. For an AI chatbot or AI agent that answers from your data and works inside your systems, pick a firm that writes the integration code, tests on your real questions and fixes the price in writing. FactoryJet does all three, and we show you a working demo on your own questions before you sign.',
  },
  {
    category: 'choose',
    question: 'What is the best WhatsApp AI chatbot for business?',
    answer:
      'The best one answers your customers\' real questions correctly and does the job they came for: track an order, pay, book, or reach a person. That depends far more on how it is trained and connected than on the brand of the platform. Ask any builder to run your ten most common questions through a demo before you decide.',
  },
  {
    category: 'choose',
    question: 'Can we see a demo before we sign?',
    answer:
      'Yes. We build a short demo on your own questions and documents so your team can try it before any contract. If it does not fit, there is nothing to cancel.',
  },
  {
    category: 'choose',
    question: 'Do you also build AI chatbots for websites and other channels?',
    answer:
      'Yes. The same AI layer can answer on your website, in email or inside internal tools. See our AI chatbot development page for chatbots beyond WhatsApp, and AI automation for back-office workflows.',
  },

  /* ── Basics ── */
  {
    category: 'basics',
    question: 'How is a WhatsApp chatbot different from the WhatsApp Business app?',
    answer:
      'The free WhatsApp Business app is for a person replying by hand from a phone, with simple quick replies and away messages. A chatbot runs on the WhatsApp Business Platform (the API), replies on its own at any hour, and can connect to your store, payments and CRM.',
  },
  {
    category: 'basics',
    question: 'What happens when the chatbot cannot answer?',
    answer:
      'It hands the chat to a person, with the conversation so far, through your provider\'s team inbox. We set clear rules for this: angry customers, refunds over a limit, medical or legal questions, and anything the bot is unsure about go to staff.',
  },
  {
    category: 'basics',
    question: 'Will the AI make up answers?',
    answer:
      'We reduce that risk by making the bot answer only from your approved content, telling it to say it does not know when the answer is missing, and testing it on real questions before launch. Anything about money, refunds or policy exceptions goes to a person.',
  },
  {
    category: 'basics',
    question: 'Can the chatbot send broadcasts and offers?',
    answer:
      'Yes, using approved marketing templates sent to customers who opted in. Meta charges marketing templates per message, and sending too many can hurt your number\'s quality rating, so we keep broadcasts targeted.',
  },

  /* ── API ── */
  {
    category: 'api',
    question: 'What is the WhatsApp Business API?',
    answer:
      'It is Meta\'s official way for businesses to connect software to WhatsApp, now called the WhatsApp Business Platform. Most businesses reach it through a provider such as Interakt, Wati, AiSensy or Gallabox, which supplies the inbox, templates and billing.',
  },
  {
    category: 'api',
    question: 'Does my business need Meta approval?',
    answer:
      'Yes. Your business is verified in Meta Business Manager, your phone number is registered on the platform, and each message template is approved before use. We guide you through each step. How long Meta takes is outside our control.',
  },
  {
    category: 'api',
    question: 'Which WhatsApp provider is best for Indian businesses: Interakt, Wati or AiSensy?',
    answer:
      'Each bills in rupees and connects to common Indian tools. The right one depends on your message volume, how many agents use the inbox, and the integrations you need. We compare them for your case during scoping.',
  },
  {
    category: 'api',
    question: 'Can I keep my existing business number?',
    answer:
      'Usually yes. A number used on the WhatsApp Business app can be moved to the platform, but chat history on the phone does not move with it, and the number then works only through the platform.',
  },
  {
    category: 'api',
    question: 'Will my number get banned?',
    answer:
      'Numbers get restricted when people block or report them, usually after unwanted broadcasts. We build on the official platform only, send templates only to opted-in customers and keep marketing light to protect your quality rating.',
  },

  /* ── India ── */
  {
    category: 'india',
    question: 'Can the chatbot reply in Hindi or Hinglish?',
    answer:
      'Yes. Current AI models handle Hindi and Hinglish well, and we test answers in the languages your customers use before launch. For other Indian languages we test first and tell you honestly how well it works for your content.',
  },
  {
    category: 'india',
    question: 'Can the chatbot take payments through Razorpay?',
    answer:
      'Yes. The bot creates a Razorpay payment link for an order, invoice or booking, sends it in the chat and confirms once the payment succeeds. UPI, cards and net banking all work through the link.',
  },
  {
    category: 'india',
    question: 'Can it confirm COD orders before dispatch?',
    answer:
      'Yes. After a COD order is placed, the bot asks the customer to confirm or cancel. Unconfirmed orders can be held, and confirmed ones flow to your courier as usual. This cuts parcels sent to buyers who never meant to pay.',
  },
  {
    category: 'india',
    question: 'Can it track orders with Shiprocket or Delhivery?',
    answer:
      'Yes. The bot reads the tracking status from your courier panel or store and replies with the latest update, so customers do not need to call you for a delivery date.',
  },
  {
    category: 'india',
    question: 'Can it work with Tally or Zoho?',
    answer:
      'Yes, where those systems expose the data. Zoho has APIs. Tally needs a connector on the machine or server running it. We check what your setup allows before we promise a flow.',
  },

  /* ── Pricing ── */
  {
    category: 'pricing',
    question: 'How much does WhatsApp chatbot development cost in India?',
    answer:
      'The build is a one-time price that depends on the number of flows, the AI layer, and the systems it connects to. We quote it as a fixed price per phase after a scoping call. Running costs are separate: Meta\'s per-message charges and your provider\'s plan.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after launch?',
    answer:
      'Meta\'s message charges, your WhatsApp provider\'s plan, AI model usage and hosting for any automation. These bills can sit in your own accounts at cost. Support from us is optional, with each change quoted first and no monthly minimum.',
  },
  {
    category: 'pricing',
    question: 'Are customer messages free on WhatsApp?',
    answer:
      'Meta does not charge for messages customers send to you. It charges for messages a business sends, by category. From 1 October 2026, each business number gets 1,000 free service messages a month, and service messages beyond that are charged.',
  },

  /* ── Process ── */
  {
    category: 'process',
    question: 'How long does it take to launch a WhatsApp chatbot?',
    answer:
      'It depends on Meta verification, template approval and how many systems the bot connects to. We agree the timeline in writing at scoping. 97% of our projects have been delivered on time or early.',
  },
  {
    category: 'process',
    question: 'What do you need from us to start?',
    answer:
      'Your most common customer questions, your policies and product data, access to the systems the bot should use, and someone who can approve answers. A Meta Business Manager account helps, and we can set one up with you.',
  },
  {
    category: 'process',
    question: 'Who owns the chatbot and the data?',
    answer:
      'You do. The WhatsApp number, provider account, automation workflows and code are in your company name, and chat data stays in your provider and systems. You can change builders at any time.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WHATSAPP_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function WhatsAppChatbotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="wa-chatbot-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="wa-chatbot-in-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="wa-chatbot-in-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'WhatsApp Bot', href: '/whatsapp-chatbot' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'See a demo on my data', modal: true, region: 'in' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'WhatsApp Chatbot India', url: 'https://factoryjet.com/whatsapp-chatbot' },
        ]}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'WhatsApp Chatbot India', url: 'https://factoryjet.com/whatsapp-chatbot' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="in" source="whatsapp_chatbot_hero" />}
          eyebrow="WHATSAPP AI CHATBOT AND AI AGENT DEVELOPMENT · INDIA"
          headline="WhatsApp AI Chatbot and AI Agent Development for Businesses in India"
          lead="FactoryJet builds WhatsApp AI chatbots that answer your customers from your own policies and product data, and AI agents that act on it: order status, COD confirmation, Razorpay payment links, bookings and CRM updates. Built on the official WhatsApp Business Platform, with clear rules for when a person takes over."
          secondaryCta={{ label: 'See a demo on my data', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Official WhatsApp Business Platform',
            'Demo on your questions before you sign',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                A WHATSAPP AI AGENT AT WORK
              </p>
              <div className="mt-5 space-y-3 font-fj-body text-[0.9rem] leading-snug">
                <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#E7F7EE] px-4 py-2.5 text-fj-ink">
                  Hi, where is my order? I ordered on Monday.
                </p>
                <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-fj-neutral-100 px-4 py-2.5 text-fj-ink">
                  Found it. Your order left the warehouse yesterday and the courier shows delivery by Thursday. Want the tracking link?
                </p>
                <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#E7F7EE] px-4 py-2.5 text-fj-ink">
                  Yes. Also can I change size to M?
                </p>
                <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-fj-neutral-100 px-4 py-2.5 text-fj-ink">
                  Here is the link. A size change needs our team, so I have passed your chat to them with your order details.
                </p>
              </div>
              <p className="mt-5 font-fj-body text-[0.8125rem] text-fj-neutral-600">
                Illustration of a typical flow: it reads the order, answers, and hands over what it should not decide.
              </p>
            </div>
          }
        />

        {/* ── 2. ANSWER FIRST ──────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question="Which company builds the best WhatsApp AI chatbots for businesses in India?"
          answer={[
            'The best WhatsApp AI chatbot for an Indian business is one that answers from your own data, takes the actions customers ask for, and hands over to a person at the right moment. FactoryJet builds these on the official WhatsApp Business Platform, connects them to your store, payments and CRM, tests them on your real customer questions, and shows you a working demo before you sign.',
            'WhatsApp providers such as Interakt, Wati and AiSensy sell the platform and a flow builder. We build the custom AI layer and integrations on top of the provider you choose, at a fixed price per phase.',
          ]}
          factsTitle="FactoryJet at a glance"
          facts={[
            { k: 'Platform', v: 'Official WhatsApp Business Platform, through the provider you choose' },
            { k: 'Reviews', v: 'Clutch 5.0 (4 reviews), GoodFirms 5.0 (5 reviews)' },
            { k: 'Track record', v: '500+ businesses served, 97% of projects on time or early, founded 2014' },
            { k: 'Before you sign', v: 'A demo on your own questions and documents' },
            { k: 'Ownership', v: 'Number, accounts, workflows and code in your company name' },
          ]}
          links={[
            { label: 'AI chatbot development', href: '/ai-chatbot-development' },
            { label: 'AI automation services', href: '/ai-automation' },
            { label: 'n8n automation', href: '/n8n-automation' },
          ]}
        />

        {/* ── 3. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 4. WHAT IT DOES ──────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHATSAPP CHATBOT FOR BUSINESS"
          headline="What a WhatsApp Chatbot for Business Should Do"
          lead="Most WhatsApp traffic is the same few questions: where is my order, what does it cost, is it in stock, can I book, can I pay. A good bot settles those in the chat and passes the rest to your team with the context already written down."
          body={
            <>
              <p>
                We start from your real chats, not a template. The top questions become answers the AI gives from your
                approved content. The top requests become actions: reading an order, sending a payment link, booking a
                slot, logging a lead. Everything else goes to a person.
              </p>
              <p>
                The bot runs on the WhatsApp Business Platform through a provider such as Interakt, Wati, AiSensy or
                Gallabox. We usually wire the actions through n8n, an automation tool where each step is visible, so your
                team can see why the bot did something and change it later.
              </p>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Order status', 'COD confirmation', 'Payment links', 'Lead capture', 'Bookings', 'Returns', 'Dealer orders', 'Hand-off to staff'].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fj-neutral-500">
                  How WhatsApp charges businesses (Meta)
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { k: 'Messages customers send you', v: 'Free' },
                  { k: 'Marketing, utility, authentication templates', v: 'Charged per message, by country' },
                  { k: 'Service replies', v: '1,000 free a month per number from 1 Oct 2026, then charged' },
                  { k: 'Customer service window', v: '24 hours from the customer’s last message' },
                ].map((row) => (
                  <div key={row.k} className="py-3.5">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{row.k}</p>
                    <p className="mt-0.5 font-fj-body text-[0.8125rem] text-fj-neutral-600">{row.v}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] leading-snug text-fj-neutral-600">
                  Source:{' '}
                  <a href={SRC.metaPricing.url} target="_blank" rel="noopener noreferrer" className="underline">
                    Meta WhatsApp pricing docs
                  </a>
                  , checked {CHECKED_ON}. Your provider adds its own plan fee.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. BUYER QUESTIONS ───────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow="WHAT INDIAN BUYERS ASK ABOUT WHATSAPP AI CHATBOTS"
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Message charges quoted here are Meta's, not ours."
          items={WHATSAPP_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 6. USE CASES ─────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHERE IT HELPS"
          headline="WhatsApp AI Agents for the Businesses That Get the Most Chats"
          lead="Each industry asks different questions and needs different actions. We build for your flows, not a generic menu."
          sectors={WHATSAPP_USE_CASES}
        />

        {/* ── 7. COMPARISON ────────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW TO CHOOSE"
          headline="Custom WhatsApp AI Agent vs Flow Builder vs Chatbot App vs Freelancer"
          lead="Four ways to put a chatbot on your business WhatsApp number, compared on what decides whether customers get their answer."
          columns={WHATSAPP_COMPARISON_COLUMNS}
          rows={WHATSAPP_COMPARISON_ROWS}
          footer="Non-FactoryJet cells are general patterns, not claims about any one product or person. Many businesses start with a flow builder and add a custom AI layer later."
        />

        {/* ── 8. MID-PAGE CTA ──────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Try it on your own questions first."
          sub="Send us your ten most common WhatsApp questions. We will build a short demo that answers them from your content, then price each phase in writing."
          label="See a demo on my data"
        />

        {/* ── 9. PROCESS ───────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Your Real Chats to a Live WhatsApp AI Agent"
          lead="Scope and price first. Meta verification and templates next. Tested on real questions before it talks to a customer."
          stages={WHATSAPP_JOURNEY_STAGES}
          closingNote="5 STAGES · OFFICIAL WHATSAPP BUSINESS PLATFORM · FIXED PRICE PER PHASE · ACCOUNTS IN YOUR NAME"
        />

        {/* ── 10. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after working with FactoryJet"
        />

        {/* ── 11. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="WhatsApp AI Chatbots in India: Questions Buyers Ask"
          lead="From choosing the best WhatsApp chatbot company in India to Meta charges, Razorpay and COD, answered plainly."
          categories={WHATSAPP_FAQ_CATEGORIES}
          items={WHATSAPP_FAQ_ITEMS}
        />

        {/* ── 12. SOURCES ──────────────────────────────────────────────────── */}
        <SourceList
          checkedOn={CHECKED_ON}
          sources={[
            { ...SRC.metaPricing, note: 'per-message charges, free customer messages, 1,000 free service messages a month from 1 Oct 2026, and the 24-hour customer service window' },
            { ...SRC.waPlatform, note: 'what the WhatsApp Business Platform is' },
            { ...SRC.n8nWhatsApp, note: 'n8n integration for WhatsApp Business Cloud' },
          ]}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="See Your WhatsApp AI Agent Answer Your Own Customers"
            sub="Tell us what your customers ask most and which systems hold the answers. We will recommend a provider, price each phase in writing and show you a demo on your own questions before you sign."
            primaryCta={{ label: 'See a demo on my data', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Official platform. Fixed price per phase. Demo before contract. Accounts in your name."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
