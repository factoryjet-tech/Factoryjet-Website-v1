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
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import CityContextSection from '@/components/v2/CityContextSection';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'WhatsApp Chatbot Development India | WhatsApp Business API Integration | FactoryJet',
  description:
    'Build WhatsApp chatbots for your India business. Automate orders, support, lead capture with WhatsApp Business API. Fixed-price, scoped after a free call. 7-day delivery. 500+ businesses served.',
  keywords: [
    'WhatsApp chatbot development India',
    'WhatsApp Business API India',
    'WhatsApp chatbot India',
    'WhatsApp automation India',
    'WhatsApp chatbot banana',
    'WhatsApp bot development India',
    'WhatsApp chatbot for business India',
    'WhatsApp chatbot service India',
    'WhatsApp Business API integration',
    'WhatsApp chatbot cost India',
    'WhatsApp bot Hindi',
    'WhatsApp chatbot Razorpay',
    'n8n WhatsApp automation India',
    'WhatsApp chatbot D2C India',
    'WhatsApp chatbot restaurant India',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WhatsApp Chatbot Development India | FactoryJet',
    description:
      'WhatsApp chatbots built for Indian businesses, automate support, orders, lead capture & payments. Fixed-price, scoped after a free call. 7-day delivery. Hindi, Tamil, Telugu & more.',
    url: 'https://factoryjet.com/whatsapp-chatbot/',
    images: [
      {
        url: 'https://factoryjet.com/images/services/whatsapp-chatbot.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet WhatsApp Chatbot Development India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Chatbot Development India | FactoryJet',
    description:
      'WhatsApp chatbots for Indian businesses. Automate orders, support & lead capture. Fixed-price, scoped after a free call. 7-day delivery.',
    images: ['https://factoryjet.com/images/services/whatsapp-chatbot.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/whatsapp-chatbot/',
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
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/whatsapp-chatbot#webpage',
  url: 'https://factoryjet.com/whatsapp-chatbot',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp Chatbot Development India',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    
  },
  description:
    'WhatsApp chatbot development and WhatsApp Business API integration for Indian businesses. Automate orders, support, lead capture and payments. Fixed-price, scoped after a free call.',
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'WhatsApp Chatbot Development',
};

const breadcrumbSchema = {
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
      name: 'WhatsApp Chatbot India',
      item: 'https://factoryjet.com/whatsapp-chatbot/',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/whatsapp-chatbot/#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/whatsapp-chatbot/',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'Day 1. A 45-minute call where we map your business flow, top WhatsApp queries, conversion steps, existing tools (Shopify, Razorpay, CRM). We identify the highest-ROI chatbot flows and fix the scope before a single line of code is written.',
  },
  {
    number: '02',
    title: 'API Setup & Architecture',
    description:
      'Days 2–3. We select your BSP (Interakt, Wati, or AiSensy based on your volume and budget), complete Meta Business API verification, and design your conversation flows and n8n automation architecture: all approved by you before build.',
  },
  {
    number: '03',
    title: 'Build, Integrate & Train',
    description:
      'Days 4–6. We build your chatbot flows, connect Razorpay, Shiprocket, Shopify, Google Sheets, or your CRM, and train the bot on your FAQs, products, and pricing. Every integration tested end-to-end with real data before handover.',
  },
  {
    number: '04',
    title: 'Go Live + 30-Day Support',
    description:
      'Day 7. Your chatbot goes live on your WhatsApp Business number. We monitor conversation logs for the first 30 days, tune underperforming responses, and run a training session so your team can manage the bot confidently.',
  },
];

const WHATSAPP_STATS = [
  {
    value: '535M+',
    label: 'WhatsApp users in India: the world\'s largest market',
    microcopy: 'Meta India, 2026',
    categoryLabel: 'INDIA USERS',
  },
  {
    value: '98%',
    label: 'Open rate for WhatsApp messages vs. 22% for email',
    microcopy: 'AiSensy marketing statistics 2026',
    categoryLabel: 'OPEN RATE',
  },
  {
    value: '78%',
    label: 'of Indian SMBs already use WhatsApp for business communication',
    microcopy: 'Hyperleap AI India stats 2026',
    categoryLabel: 'SMB ADOPTION',
  },
];

const WHATSAPP_MARKET_STATS = [
  {
    value: '7 days',
    label: 'Standard delivery for a FactoryJet WhatsApp chatbot: fixed-price, scoped up front',
    sourceUrl: 'https://factoryjet.com/pricing',
    sourceLabel: 'FactoryJet Pricing',
  },
  {
    value: '7 Days',
    label: 'Average build-to-live time for a FactoryJet WhatsApp chatbot, fastest in India',
    sourceUrl: 'https://factoryjet.com/india/7-day-website-delivery/',
    sourceLabel: 'FactoryJet Track Record',
  },
  {
    value: '60–80%',
    label: 'of incoming WhatsApp queries handled automatically by well-designed chatbots, no human required',
    sourceUrl: 'https://robylon.ai/blog/whatsapp-automation-stats',
    sourceLabel: 'Robylon AI Report 2026',
  },
] as const;

const WHATSAPP_INDUSTRIES = [
  {
    name: 'Restaurants & Food',
    description:
      'Show your digital menu on WhatsApp, take orders, confirm reservations, handle table bookings, and collect customer reviews: all automatically, even during peak hours. No app download needed for your customers.',
    example: 'Restaurants report 25% more completed orders during peak times with chatbot ordering.',
    linkLabel: 'Learn more',
    linkHref: '/whatsapp-chatbot/',
  },
  {
    name: 'D2C & Ecommerce',
    description:
      'Automate order tracking via Shiprocket, process return requests, browse product catalogs, send Razorpay payment links, confirm COD orders, and recover abandoned carts, integrated directly with Shopify or WooCommerce.',
    example: 'D2C brands report 70%+ WhatsApp support ticket deflection within 30 days.',
  },
  {
    name: 'Real Estate',
    description:
      'Qualify leads from 99acres, MagicBricks, and Google Ads by asking budget, location, and timeline questions. Route hot leads to your sales team with full context logged to Zoho CRM or LeadSquared automatically.',
    example: 'Builders see 35–50% more site visit bookings without adding telecallers.',
  },
  {
    name: 'Coaching & EdTech',
    description:
      'Answer course queries, collect student details, process Razorpay enrollment fees, send onboarding material, and manage batch registration, reducing counsellor workload by 60%+ without growing your team.',
    example: 'EdTech platforms report 3× faster lead-to-enrollment conversion with WhatsApp bots.',
  },
  {
    name: 'Healthcare & Clinics',
    description:
      'Book doctor appointments, check availability, send 24-hour reminders, handle rescheduling, and collect patient intake forms: all on WhatsApp, DPDP-compliant, with full audit trails for every interaction.',
    example: 'Clinics recover 3–4 hours of front-desk staff time every single day.',
  },
  {
    name: 'Travel Agencies',
    description:
      'Share itineraries and quotes, answer destination FAQs, collect booking details, process payments, and send pre-departure reminders: all automated on WhatsApp, reducing manual back-and-forth by 70%.',
    example: 'Travel agents handle 3× more inquiries without adding staff.',
  },
  {
    name: 'Manufacturing & B2B',
    description:
      'Let your dealers place orders, check stock levels, track delivery status, download GST invoices, and get price lists on WhatsApp, without calling your sales team or waiting for business hours.',
    example: 'B2B distributors report 40% fewer inbound sales calls after WhatsApp bot launch.',
  },
  {
    name: 'Retail',
    description:
      'Run WhatsApp sale campaigns, send product launch alerts, handle loyalty program queries, collect review requests, and manage customer service, replacing expensive SMS campaigns with 98% open-rate WhatsApp messages.',
    example: 'Retail brands see 5–10× higher response rates on WhatsApp vs. email campaigns.',
  },
];

const WHATSAPP_FAQ_CATEGORIES = [
  { key: 'basics',     label: 'Chatbot Basics' },
  { key: 'api',        label: 'WhatsApp API' },
  { key: 'india',      label: 'India-Specific' },
  { key: 'process',    label: 'Build Process' },
  { key: 'pricing',    label: 'Pricing & Costs' },
];

const WHATSAPP_FAQ_ITEMS = [
  /* ── Chatbot Basics ── */
  {
    category: 'basics',
    question: 'What exactly is a WhatsApp chatbot?',
    answer:
      'A WhatsApp chatbot is an automated messaging system built on the WhatsApp Business API that responds to customer messages instantly, without a human typing. It can answer FAQs, capture leads, track orders, process payments, book appointments, and escalate to a real person when needed. Unlike the WhatsApp Business app where your team replies manually, a chatbot works 24/7 with zero delay.',
  },
  {
    category: 'basics',
    question: 'How is a WhatsApp chatbot different from just using the WhatsApp Business app?',
    answer:
      'The WhatsApp Business app requires someone to manually type and send every reply. A chatbot built on the WhatsApp Business API responds instantly and automatically to any message, even at 2 AM on a Sunday. It also integrates with your Shopify store, Razorpay, and CRM to take real actions, not just send text. The difference is 4-hour human response times vs. 3-second automated replies.',
  },
  {
    category: 'basics',
    question: 'What can a WhatsApp chatbot actually do for my business?',
    answer:
      'The most common tasks: answering repeated WhatsApp queries (pricing, availability, order status), qualifying inbound leads from ads and capturing them to your CRM, sending Razorpay payment links and confirming receipt, processing returns by checking Shopify orders, booking appointments without a human, and sending proactive notifications like shipment updates and payment reminders. If your team does it more than a few times a day, a chatbot can handle it.',
  },
  {
    category: 'basics',
    question: 'What happens when the chatbot cannot answer a question?',
    answer:
      'Every FactoryJet chatbot includes a human escalation path. When the bot is not confident, it hands off to a human agent, passing the full conversation history so the customer does not have to repeat themselves. You control where escalations go: a specific WhatsApp number, a Freshdesk ticket, a Zoho CRM task, or a Slack notification to your team.',
  },

  /* ── WhatsApp API ── */
  {
    category: 'api',
    question: 'What is the difference between WhatsApp Business app and WhatsApp Business API?',
    answer:
      'The WhatsApp Business app is free and designed for very small businesses: one device, manual replies, quick replies and away messages only. The WhatsApp Business API is for businesses that need automation at scale: chatbots, bulk template messaging, multi-agent team inboxes, and integrations with CRM and ecommerce tools. The API requires a Meta-approved BSP and has per-conversation charges from Meta.',
  },
  {
    category: 'api',
    question: 'Does my business need Meta approval to use WhatsApp Business API?',
    answer:
      'Yes, WhatsApp Business API requires Meta Business verification. FactoryJet handles the entire process: BSP selection, Meta Business Manager setup, document submission, and approval tracking. Most Indian businesses are verified and live within 5–7 business days of submitting their GST certificate, business registration, and phone number documents.',
  },
  {
    category: 'api',
    question: 'WhatsApp Business API approval mein kitna time lagta hai?',
    answer:
      'Meta Business verification aur WhatsApp API approval mein generally 3–7 business days lagte hain, agar documents sahi ho. FactoryJet poora process handle karta hai, BSP selection se le kar Meta approval tak. Aapko separately kuch apply nahi karna, hum sab sambhal lete hain aur aapko live hone ki date confirm karte hain.',
  },
  {
    category: 'api',
    question: 'Which WhatsApp BSP is best for Indian businesses: Interakt, Wati, or AiSensy?',
    answer:
      'For most Indian SMBs, Interakt and AiSensy offer the best value: INR pricing, strong Razorpay and Shopify integration, and India-focused support teams. Wati is better for larger teams needing advanced CRM-style team inbox features. For enterprise workflows with complex automation, we pair any of these BSPs with n8n as the automation backbone. FactoryJet recommends the right BSP after your discovery call.',
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Kya mera chatbot Hindi mein baat kar sakta hai?',
    answer:
      'Haan, bilkul. FactoryJet ke WhatsApp chatbots Hindi, Hinglish, Tamil, Telugu, Marathi, Gujarati, aur doosri Indian languages support karte hain. Language automatic detect hoti hai, customer jis bhi language mein type kare, chatbot usi mein jawab deta hai. Ek hi bot sab languages handle karta hai, alag-alag bots nahi chahiye.',
  },
  {
    category: 'india',
    question: 'Can the chatbot integrate with Razorpay for payments?',
    answer:
      'Yes. FactoryJet integrates Razorpay webhooks so your chatbot can generate and send payment links on WhatsApp when a customer confirms an order, receive payment success notifications, confirm the transaction to the customer, and log the payment to your CRM or accounting system automatically. UPI payment links and COD confirmation workflows are also fully supported.',
  },
  {
    category: 'india',
    question: 'Can the chatbot handle order tracking with Shiprocket or Delhivery?',
    answer:
      'Yes. FactoryJet connects your WhatsApp chatbot to Shiprocket, Delhivery, or any logistics platform with an API. When a customer asks "where is my order" or types anything similar, the chatbot queries the logistics API and replies with the live tracking link and status in under 3 seconds, 24/7, without any human intervention.',
  },
  {
    category: 'india',
    question: 'What is n8n and why do you use it instead of Zapier for Indian businesses?',
    answer:
      'n8n is an open-source workflow automation tool, similar in concept to Zapier but self-hosted, dramatically cheaper at scale, and far more flexible for complex Indian business logic. For workflows involving Razorpay + Zoho CRM + Shiprocket triggers, n8n can handle conditions that SaaS tools cannot. You own the workflows, there are no per-operation fees, and the automation keeps running without third-party subscriptions.',
  },

  /* ── Build Process ── */
  {
    category: 'process',
    question: 'How long does it take to build and launch a WhatsApp chatbot?',
    answer:
      'FactoryJet delivers WhatsApp chatbots in 7 days. Day 1 is the discovery call. Days 2–3 cover API setup and architecture approval. Days 4–6 are build, integration, and testing. Day 7 is go-live. 30-day post-launch support is included in every project. No other India agency matches this delivery timeline at this quality level.',
  },
  {
    category: 'process',
    question: 'What information do you need from me before you start building?',
    answer:
      'We need: access to your WhatsApp Business number (or we set up a new one), API keys for tools we integrate (Shopify, Razorpay, Zoho, etc.), your FAQ content and pricing information (even a Google Doc works), and your brand guidelines for tone and language. We send a structured onboarding form after the discovery call: most clients complete it in 20 minutes.',
  },
  {
    category: 'process',
    question: 'Do you provide support and maintenance after the chatbot goes live?',
    answer:
      'Every FactoryJet WhatsApp chatbot project includes 30 days of post-launch support: conversation log review, response tuning, integration fixes, and a team training session. After 30 days, you manage the bot through your BSP dashboard. Optional monthly retainers are available for ongoing optimisation, new conversation flows, and seasonal campaign setup.',
  },

  /* ── Pricing & Costs ── */
  {
    category: 'pricing',
    question: 'How much does WhatsApp chatbot development cost in India?',
    answer:
      'FactoryJet WhatsApp chatbot pricing is fixed-price and scoped to your build. The main drivers are flow complexity and integrations: the Starter tier is a FAQ and lead-capture bot; the Business tier adds multi-flow logic, order tracking, Razorpay, and CRM sync; and the Enterprise tier adds AI NLP, multi-language support, n8n automation, and custom integrations. Every project is quoted up front after a free discovery call, no hourly billing, no scope creep surprises.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after a WhatsApp chatbot is built?',
    answer:
      'Two recurring costs go to third parties, not to us: your BSP subscription (Interakt, Wati, or AiSensy charge a monthly fee depending on plan and message volume) and Meta\'s per-conversation charges (marketing and utility messages carry a small per-conversation fee, while customer-initiated service conversations are free). FactoryJet charges nothing ongoing unless you choose an optional retainer.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a WhatsApp chatbot for an Indian business?',
    answer:
      'The clearest ROI: a chatbot handling 60–70% of WhatsApp queries replaces 1–2 support executives at a fraction of the cost, payback in 3–6 months for most businesses. Secondary ROI: leads getting an instant reply instead of waiting 6 hours convert at significantly higher rates. Indian D2C brands report 200–300% ROI on WhatsApp marketing vs. traditional channels, with chatbots amplifying that further.',
  },
  {
    category: 'pricing',
    question: 'Is my customer data safe with a WhatsApp chatbot?',
    answer:
      'Yes. FactoryJet builds on Meta-approved BSPs that comply with GDPR and India\'s DPDP Act. All data integrations use API-level connections (no screen scraping), least-privilege access controls, and full audit trails on every action. For healthcare and financial services, stricter data residency controls are available on request.',
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
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WhatsAppChatbotINPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="wa-chatbot-in-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="wa-chatbot-in-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="wa-chatbot-in-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="in"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'WhatsApp Bot', href: '/whatsapp-chatbot/' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'in' },
        ]}
        cta={{ label: 'Get a Free Demo', modal: true, region: 'in' }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'WhatsApp Chatbot India', url: 'https://factoryjet.com/whatsapp-chatbot/' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'WhatsApp Chatbot India', url: 'https://factoryjet.com/whatsapp-chatbot/' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="whatsapp_chatbot_hero" />}
          eyebrow="WHATSAPP CHATBOT DEVELOPMENT · INDIA"
          headline="WhatsApp Chatbot Development India"
          lead="India has 535 million WhatsApp users. 98% of your WhatsApp messages get opened. And 78% of Indian SMBs already use WhatsApp for business, yet most are still typing every reply by hand. Automate your orders, support, lead capture, and payments with a WhatsApp Business API chatbot. Fixed-price, scoped to your build. Live in 7 days."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-Day Delivery',
            '500+ Businesses Served',
            'Fixed-Price Quotes',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHATSAPP CHATBOT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Automated on WhatsApp, while you sleep.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "Order kahan hai?" → Bot checks Shiprocket → tracking link in 3 seconds',
                  'Lead from Instagram ad asks price → Bot qualifies → books demo to Zoho CRM automatically',
                  'Restaurant customer → Bot shows menu → confirms order → Razorpay link sent instantly',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Runs 24/7 in Hindi, English, Tamil, Telugu and more, no salary, no sick leave.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. STATS BENTO (DARK) ─────────────────────────────────────────── */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: '#0F0F12' }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-bold uppercase text-[#F05A28]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              WHY WHATSAPP IS NON-NEGOTIABLE IN INDIA
            </p>
            <h2
              className="mt-4 font-fj-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '640px' }}
            >
              The numbers that make WhatsApp automation obvious.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {[
                { stat: '535M', label: 'WhatsApp users in India', sub: 'World\'s largest market' },
                { stat: '98%', label: 'Message open rate', sub: 'vs. 22% for email' },
                { stat: '78%', label: 'Indian SMBs on WhatsApp', sub: 'Already using it for business' },
                { stat: '15M', label: 'WhatsApp Business accounts', sub: 'Globally on the platform' },
                { stat: 'Fixed', label: 'Fixed-price quotes', sub: 'Scoped up front, no hourly billing' },
                { stat: '7 Days', label: 'Average build time', sub: 'Fastest delivery in India' },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {item.stat}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-white" style={{ fontSize: '0.9375rem', lineHeight: 1.4 }}>
                    {item.label}
                  </p>
                  <p className="mt-1 font-fj-body text-white/40" style={{ fontSize: '0.8125rem' }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. WHAT IS A WHATSAPP CHATBOT (GEO/AEO ANCHOR) ──────────────── */}
        <ServiceExplanation
          eyebrow="WHAT IS A WHATSAPP CHATBOT"
          headline="What Is a WhatsApp Chatbot, and Why Does Your Business Need One?"
          lead="A WhatsApp chatbot is an automated messaging system that uses the WhatsApp Business API to respond to customer messages instantly, take actions in your business systems, and work 24/7 without human intervention."
          body={
            <>
              <p>
                A WhatsApp chatbot is software connected to the official WhatsApp Business API (provided by Meta) that receives customer messages, processes them, and sends automated replies, without any human typing a response. Unlike the free WhatsApp Business app where your team replies manually, a chatbot works around the clock, handles hundreds of simultaneous conversations, and integrates with your Shopify store, Razorpay account, CRM, and logistics platform to take real actions.
              </p>
              <p>
                For Indian businesses, WhatsApp chatbots are particularly powerful because your customers are already on WhatsApp, it is their default messaging app. You are not asking them to download a new app, visit a website, or call a helpline. You meet them where they already are, and you respond in the language they prefer.
              </p>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Order Tracking',
                  'Lead Capture',
                  'FAQ Automation',
                  'Appointment Booking',
                  'Product Catalog',
                  'Payment Reminders',
                  'COD Confirmation',
                  'Return Processing',
                ].map((cap) => (
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
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  6 Core WhatsApp Chatbot Use Cases
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    icon: '📦',
                    title: 'Order Tracking',
                    desc: 'Connects to Shiprocket/Delhivery and gives customers live tracking without human help.',
                  },
                  {
                    icon: '🎯',
                    title: 'Lead Capture',
                    desc: 'Qualifies ad leads, collects contact details, and pushes them to your CRM automatically.',
                  },
                  {
                    icon: '❓',
                    title: 'FAQ Automation',
                    desc: 'Answers your 50 most repeated questions instantly, pricing, availability, policies.',
                  },
                  {
                    icon: '📅',
                    title: 'Appointment Booking',
                    desc: 'Checks availability and confirms bookings for clinics, coaches, and service businesses.',
                  },
                  {
                    icon: '🛍️',
                    title: 'Product Catalog',
                    desc: 'Lets customers browse products, ask questions, and get Razorpay payment links on WhatsApp.',
                  },
                  {
                    icon: '💳',
                    title: 'Payment Reminders',
                    desc: 'Sends Razorpay links, confirms payments, and follows up on pending invoices automatically.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 px-7 py-4">
                    <span className="text-xl" aria-hidden="true">{item.icon}</span>
                    <div>
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.title}</p>
                      <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 6. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="You are answering the same WhatsApp messages, on repeat, every day"
          lead="The biggest hidden cost in most Indian businesses is not salary, it is repetition. Your team spends 60–70% of their WhatsApp time answering questions with the same 10 answers. An automated chatbot eliminates that entirely."
          pillars={[
            {
              icon: '💬',
              title: 'Manual WhatsApp is your most expensive bottleneck',
              body: '535 million Indians use WhatsApp. Your customers message you there. Your team manages it manually, typing the same tracking links, pricing answers, and booking confirmations all day. One WhatsApp chatbot handles 60–80% of these automatically, in the customer\'s language, while your team focuses on what actually needs a human.',
            },
            {
              icon: '⏱️',
              title: 'Leads go cold while your team is offline',
              body: 'A lead who messages your business at 11 PM and gets a reply at 9 AM the next morning has already contacted three competitors. Research shows responding within 5 minutes increases conversion 21×. A WhatsApp chatbot responds in under 3 seconds, around the clock, qualifying and capturing the lead before any competitor even sees the message.',
            },
            {
              icon: '🌐',
              title: 'Language barriers are costing you customers',
              body: 'India has 22 official languages and hundreds of dialects. Customers message in Hindi, Hinglish, Tamil, Telugu, Marathi, and your English-only support team misses the nuance or delays replies. A multilingual WhatsApp chatbot detects the language automatically and responds in kind, making every customer feel like you built the service specifically for them.',
            },
          ]}
        />

        {/* ── 7. HOW IT WORKS ──────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From discovery to live WhatsApp chatbot in 7 days"
          stages={WHATSAPP_JOURNEY_STAGES}
          closingNote="Every project ends with a working chatbot on your WhatsApp Business number, and 30 days of post-launch support included as standard."
        />

        {/* ── 8. INDIA MARKET CONTEXT ───────────────────────────────────────── */}
        <CityContextSection
          eyebrow="INDIA WHATSAPP MARKET"
          headline="535 million users. 98% open rates. The channel Indian businesses cannot ignore."
          leadParagraphs={[
            "India is the world's largest WhatsApp market, 535 million monthly active users, growing year on year. WhatsApp messages achieve a 98% open rate versus 22% for email, and 45% response rates versus 6% for email. For Indian businesses, this is not a marketing channel, it is the primary customer communication layer. The businesses automating it now are compounding an advantage their manual competitors cannot easily close.",
            "78% of Indian SMBs already use WhatsApp for business, and 65% report increased sales after adoption. The gap is not in adoption, it is in automation. Most businesses are still handling every WhatsApp conversation manually, capping their capacity at whatever their team can type. A WhatsApp chatbot removes that ceiling entirely.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A chatbot handles 60–80% of your WhatsApp queries without a single human reply.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'D2C & Ecommerce',
                  'Real Estate',
                  'Restaurants',
                  'Healthcare',
                  'EdTech',
                  'Manufacturing',
                  'Travel',
                  'Retail',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={WHATSAPP_MARKET_STATS}
        />

        {/* ── 9. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="INDUSTRIES WE BUILD FOR"
          headline="WhatsApp chatbots built for every major Indian industry"
          lead="Every industry has different conversation patterns, integrations, and compliance requirements. We build for yours, not a generic template."
          sectors={WHATSAPP_INDUSTRIES}
        />

        {/* ── 10. API FEATURES (LIGHT) ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHATSAPP API FEATURES"
          headline="Official WhatsApp Business API, everything your business needs"
          lead="We build exclusively on the official Meta-approved WhatsApp Business API, not unofficial workarounds that risk your account getting banned."
          reverseOnDesktop
          body={
            <>
              <p>
                The WhatsApp Business API supports far more than plain text messages. Your chatbot can send interactive buttons, scrollable lists, product catalogs, PDFs and images, appointment confirmation cards, and payment links, creating a richer customer experience than most businesses realise is possible on WhatsApp.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Feature</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { feature: 'Message Types',       detail: 'Text, Buttons, Lists, Images, PDFs, Video, Templates, Flows' },
                      { feature: 'Integrations',        detail: 'Razorpay, Shiprocket, Shopify, WooCommerce, Google Sheets, n8n' },
                      { feature: 'Languages',           detail: 'English, Hindi, Tamil, Telugu, Marathi, Gujarati, Kannada + more' },
                      { feature: 'CRM Connectors',      detail: 'Zoho CRM, HubSpot, LeadSquared, Freshdesk, Google Sheets' },
                      { feature: 'Uptime',              detail: '99.9%: Meta-grade infrastructure, BSP-backed delivery' },
                      { feature: 'Compliance',          detail: 'GDPR compliant, India DPDP Act ready, full audit trail' },
                      { feature: 'Automation Engine',   detail: 'n8n workflows for complex multi-step business logic' },
                    ].map((row) => (
                      <tr key={row.feature}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.feature}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.detail}</td>
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
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Why FactoryJet for WhatsApp Chatbots
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    title: '500+ businesses served across India, the US, the UK and the UAE',
                    desc: '12+ years building for Indian businesses. We know Razorpay, Zoho, Shiprocket, and the Indian payments stack inside out.',
                  },
                  {
                    title: '7-day delivery | fastest in India',
                    desc: 'Discovery to live chatbot in 7 days. No other agency at this quality level matches this timeline.',
                  },
                  {
                    title: 'Senior team, no agency overhead',
                    desc: 'You work directly with the engineers who build your chatbot, no account managers or project coordinators inflating invoices. Production-grade work, fixed price upfront.',
                  },
                  {
                    title: 'India-specific stack knowledge',
                    desc: 'Razorpay, UPI, COD workflows, Shiprocket, Indian language support, baked into every chatbot we build.',
                  },
                  {
                    title: '30-day post-launch support included',
                    desc: 'We monitor, tune, and fix after go-live. You are not handed a chatbot and left to figure it out.',
                  },
                ].map((item) => (
                  <div key={item.title} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.title}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 11. STATS BAND ─────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {WHATSAPP_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#B23E13',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                      {stat.microcopy}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. CASE STUDIES / SOCIAL PROOF (DARK) ───────────────────────── */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: '#0F0F12' }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-bold uppercase text-[#F05A28]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              RESULTS IN THE REAL WORLD
            </p>
            <h2
              className="mt-4 font-fj-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '640px' }}
            >
              What actually happened when Indian businesses deployed WhatsApp chatbots.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  industry: 'D2C Brand: Mumbai',
                  problem: 'Support team manually answering 400+ WhatsApp messages per day, mostly order status queries. Response time: 3–6 hours.',
                  solution: 'FactoryJet built a WhatsApp chatbot connected to Shiprocket for live tracking, Shopify for order data, and Razorpay for payment confirmations.',
                  result: '72% of support queries deflected automatically. Response time dropped from 3 hours to 8 seconds. Support team reduced manual WhatsApp time by 5 hours per day.',
                },
                {
                  industry: 'Coaching Institute: Bangalore',
                  problem: 'Counsellors spending 70% of their day answering the same course questions on WhatsApp. Peak enrollment season required 3 extra temp hires.',
                  solution: 'WhatsApp chatbot built to handle course FAQs, collect student details, process Razorpay enrollment payments, and push qualified leads to Zoho CRM.',
                  result: '3× faster lead-to-enrollment conversion. Zero temp hires needed during peak enrollment. ₹2.8 lakh saved in seasonal staffing costs in the first cycle.',
                },
                {
                  industry: 'Real Estate Developer: Delhi NCR',
                  problem: 'Leads from 99acres and Google Ads arriving on WhatsApp after hours, no one responding until 9 AM. Competitors capturing the same leads overnight.',
                  solution: 'WhatsApp lead qualification bot that engaged every inbound lead instantly, asked budget and timeline questions, and booked site visits to Google Calendar, logged to LeadSquared.',
                  result: '47% more site visits booked in month one. After-hours leads converted at 2.3× the rate of the previous manual follow-up process.',
                },
              ].map((item) => (
                <div
                  key={item.industry}
                  className="rounded-2xl p-7"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(240,90,40,0.25)',
                    borderLeft: '3px solid #F05A28',
                  }}
                >
                  <p
                    className="font-fj-mono font-bold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    {item.industry}
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="font-fj-mono font-semibold uppercase text-white/40" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>Problem</p>
                      <p className="mt-1 font-fj-body text-white/70" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{item.problem}</p>
                    </div>
                    <div>
                      <p className="font-fj-mono font-semibold uppercase text-white/40" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>Solution</p>
                      <p className="mt-1 font-fj-body text-white/70" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{item.solution}</p>
                    </div>
                    <div>
                      <p className="font-fj-mono font-semibold uppercase text-[#F05A28]" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>Result</p>
                      <p className="mt-1 font-fj-body font-semibold text-white" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GetFreeQuoteCTA />
        {/* ── 14. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian businesses say after we build their WhatsApp chatbots"
        />

        {/* ── 15. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every WhatsApp chatbot discovery call, answered honestly, in plain language, without the runaround."
          categories={WHATSAPP_FAQ_CATEGORIES}
          items={WHATSAPP_FAQ_ITEMS}
        />

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="535 Million People Are On WhatsApp. Is Your Business Ready?"
            sub="Get a free WhatsApp chatbot demo built for your business. No commitment, no fluff, just a working prototype in 48 hours showing exactly how automation would work for your specific use case. Fixed price, 7-day delivery, 30-day support included."
            primaryCta={{ label: 'Book My Free Demo', modal: true, region: 'in' }}
            secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
            objectionHandler="Fixed price. 7-day delivery. India-specific stack. 30-day post-launch support included."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
