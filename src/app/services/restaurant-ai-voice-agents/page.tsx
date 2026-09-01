import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/restaurant-ai-voice-agents';
const PAGE_TITLE = 'Restaurant AI Voice Agents & Phone Ordering | FactoryJet';
const PAGE_DESC =
  'Custom 24/7 AI voice phone ordering for US restaurants, pizzerias & franchises. Direct Toast, Square & Clover POS order injection. Zero missed calls. Get audit.';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai voice agent for restaurants',
    'restaurant ai phone ordering',
    'restaurant ai receptionist',
    'ai phone answering for restaurants',
    'toast pos ai integration',
    'restaurant voice ordering ai',
    'pizzeria ai phone ordering',
    'drive thru ai voice agent',
    'ai reservation system restaurants',
    'square pos restaurant ai agent',
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/images/restaurants/restaurant-ai-phone-ordering.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Restaurant AI Voice Agents and POS Phone Ordering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/restaurants/restaurant-ai-phone-ordering.webp'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'telephony', label: 'Telephony & Orders' },
  { key: 'pos', label: 'POS & Toast/Square Sync' },
  { key: 'modifiers', label: 'Menu & Modifiers' },
  { key: 'pricing', label: 'Pricing & Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'telephony',
    question: 'How does the restaurant AI voice agent handle incoming customer calls?',
    answer:
      'The AI voice agent answers on the first ring with sub-500ms natural conversational latency. It greets callers by name if their number exists in your CRM or loyalty database, takes pickup or delivery orders, handles menu modifier questions, takes reservations, and routes complex inquiries to staff.',
  },
  {
    category: 'telephony',
    question: 'How many simultaneous phone calls can the AI agent handle during peak dinner rush?',
    answer:
      'The agent scales elastically to handle unlimited concurrent phone calls with zero busy signals and zero hold times. Whether your restaurant receives 2 calls or 200 simultaneous calls during Friday dinner peak, every customer is served instantly.',
  },
  {
    category: 'telephony',
    question: 'How does the voice agent sound to calling customers?',
    answer:
      'We utilize ultra-realistic neural speech synthesis engineered specifically for hospitality pacing. The voice includes natural turn-taking, intelligent interruption handling, polite confirmations, and customizable regional American accents.',
  },
  {
    category: 'telephony',
    question: 'What happens if a customer speaks with heavy background noise or a strong accent?',
    answer:
      'Our acoustic models employ advanced noise filtering tuned for noisy environments (such as in-car calling or outdoor chatter). If confidence on an item falls below threshold, the agent politely asks for clarification before confirming the ticket.',
  },
  {
    category: 'pos',
    question: 'Which POS systems do your restaurant AI voice agents integrate with?',
    answer:
      'We engineer native bi-directional integrations with Toast POS, Square for Restaurants, Clover, Brink POS, Aloha (NCR Voyix), Micros Simphony, SpotOn, Revel Systems, and Lightspeed.',
  },
  {
    category: 'pos',
    question: 'How are completed phone orders sent to our kitchen display system (KDS)?',
    answer:
      'Once the customer confirms the order and completes payment or selects pay-at-pickup, the agent fires an authenticated API call directly to your POS. The ticket prints immediately at the expeditor station and appears on kitchen display screens (KDS) tagged as Phone AI Order.',
  },
  {
    category: 'pos',
    question: 'Does the AI agent check real-time 86-ed items and sold-out specials?',
    answer:
      'Yes. The agent maintains live webhook synchronization with your POS inventory. If your kitchen 86-es an item (such as wild salmon or gluten-free crust), the agent immediately stops offering it on the phone and suggests designated alternative menu items.',
  },
  {
    category: 'pos',
    question: 'How does payment processing work for phone takeout and delivery orders?',
    answer:
      'The agent can text a secure, PCI-compliant payment link via SMS while the customer is on the phone, process vaulted cards for loyalty members, or stage the order for pay-at-counter pickup based on your store operational preferences.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI agent handle complex food allergies and custom preparation requests?',
    answer:
      'Yes. The agent is trained on your complete allergen matrix (dairy, nuts, gluten, shellfish, soy). It warns guests if requested items contain allergens and accurately adds prep notes (such as extra crispy, dressing on side, or no onions) to the POS ticket.',
  },
  {
    category: 'modifiers',
    question: 'How does the agent handle upselling and combo upgrades?',
    answer:
      'The agent naturally suggests high-margin pairings based on rule-based hospitality logic (such as suggesting garlic knots with pasta, appetizers, beverages, or dessert specials) without feeling pushy, increasing average ticket value by 14 to 22 percent.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI agent book table reservations and private banquet rooms?',
    answer:
      'Yes. The agent connects to OpenTable, Resy, SevenRooms, or your custom booking calendar, verifying available table inventory for requested party sizes and times, and texting SMS confirmation reminders.',
  },
  {
    category: 'modifiers',
    question: 'How does the voice agent handle large corporate catering inquiries?',
    answer:
      'For catering orders above designated thresholds (such as 15+ people or $300+), the agent captures event date, headcount, dietary restrictions, and delivery address, and instantly routes a structured lead to your catering sales director via SMS and email.',
  },
  {
    category: 'pos',
    question: 'How does the voice agent handle third-party delivery services like DoorDash or Uber Eats?',
    answer:
      'The AI agent actively nudges phone callers to order directly through your in-house phone or website delivery channel rather than 30% commission third-party apps, saving your restaurant thousands in marketplace commissions while building your direct first-party customer marketing list.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI voice agent recognize custom pizza half-and-half topping splits and crust substitutions?',
    answer:
      'Yes. Our conversational state engine specifically handles split toppings (such as pepperoni on the left half, mushrooms and extra mozzarella on the right), gluten-free or cauliflower crust swaps, and well-done bake instructions, properly mapping each modifier code to your kitchen thermal ticket printer.',
  },
  {
    category: 'pricing',
    question: 'What is the monthly return on investment (ROI) for an independent restaurant or pizzeria?',
    answer:
      'High-volume restaurants typically capture an additional $3,500 to $9,000 in monthly gross margin by eliminating missed dinner rush calls, capturing late-night phone orders, and achieving a 16% higher average ticket value through intelligent automated upselling.',
  },
  {
    category: 'pricing',
    question: 'How is the restaurant AI voice agent priced compared to third-party call centers?',
    answer:
      'Traditional human call centers charge $1.50 to $2.50 per minute with unpredictable quality. FactoryJet builds custom AI voice infrastructure with a fixed implementation fee. Direct telephony and LLM compute runs at actual wholesale cost (typically $0.05 to $0.08 per minute).',
  },
  {
    category: 'pricing',
    question: 'Does our restaurant franchise own the AI voice agent software?',
    answer:
      'Yes. You receive 100 percent source code and connector ownership. You own your prompts, POS webhooks, and telephony accounts. You never pay ongoing per-store software license royalties to us.',
  },
  {
    category: 'pricing',
    question: 'How long does it take to train and launch our restaurant AI agent?',
    answer:
      'A single-location restaurant with Toast or Square POS launches in 10 to 14 days. Multi-unit franchise groups with 10 to 50 locations deploy within 3 to 4 weeks, including staff training and phone carrier porting.',
  },
  {
    category: 'pos',
    question: 'How fast do phone orders appear on kitchen display screens (KDS) after the call ends?',
    answer:
      'Orders are injected via real-time webhooks in under 1.5 seconds from caller confirmation. Kitchen expeditor screens and bar printers receive the finalized ticket instantly, with accurate pickup or delivery time stamps.',
  },
  {
    category: 'telephony',
    question: 'Can the restaurant AI voice agent handle Spanish-speaking and bilingual customers?',
    answer:
      'Yes. The agent automatically detects whether the caller speaks English or Spanish within three seconds and switches dynamically, executing the entire menu ordering, dietary confirmation, and address collection process in fluent Spanish.',
  },
  {
    category: 'pricing',
    question: 'How does our manager monitor call recordings and transcripts?',
    answer:
      'We provide a secure web dashboard where store managers and operators can review call audio recordings, full text transcripts, order accuracy logs, and customer sentiment metrics in real time.',
  },
];

export default function RestaurantAiVoiceAgentsPage() {
  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${CANONICAL_URL}#webpage`,
    url: CANONICAL_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    dateModified: PAGE_MODIFIED,
    publisher: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/FinalLogo.svg',
    },
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      jobTitle: 'Founder & CEO, FactoryJet',
    },
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${CANONICAL_URL}#service`,
    name: 'Restaurant AI Voice Agents & Phone Ordering Automation',
    serviceType: 'Hospitality AI Voice Agent Development',
    provider: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: PAGE_DESC,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Restaurant Voice Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 AI Phone Ordering with Toast, Square & Clover POS Sync',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real-Time 86-Item Menu & Allergen Modifier Logic',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'OpenTable & Resy Automated Table Reservations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Catering & Banquet Lead Qualification',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Deploys Restaurant AI Voice Phone Ordering',
    description:
      'A 4-step engineering blueprint to eliminate missed phone calls and automate order entry into your restaurant POS.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'POS Menu Matrix & Telephony SIP Configuration',
        text: 'We connect to your Toast, Square, or Clover POS API, ingest your complete menu modifiers and pricing, and configure carrier SIP trunking.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Acoustic Model & Modifier Engine Calibration',
        text: 'We train custom conversational prompts with sub-500ms latency, upselling logic, and strict allergen validation checks.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Kitchen Display (KDS) & Payment Webhook Testing',
        text: 'We execute end-to-end test calls, verifying that tickets print correctly at the expeditor station with accurate tax and modifiers.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Production Rollout & Real-Time Call Analytics',
        text: 'We switch live phone traffic to the AI voice agent, providing your management team with a live dashboard of recordings and order metrics.',
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
        name: 'Restaurant AI Voice Agents',
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
                    // 24/7 RESTAURANT AI PHONE ORDERING & POS SYNC
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom Restaurant AI Voice Agents with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Live POS Order Injection.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer natural, sub-500ms AI voice receptionists for American restaurants, pizzerias, and multi-unit franchises. Answer 100 percent of phone calls, capture every peak-dinner takeout order, and inject tickets directly into Toast, Square, Clover, and Brink POS with zero human hold times.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="restaurant-ai-voice-agents-hero"
                    region="us"
                    submitLabel="Request Restaurant AI Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Toast, Square & Clover POS Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Zero Missed Phone Calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Sub-500ms Latency</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/restaurants/restaurant-ai-phone-ordering.webp"
                      alt="American restaurant hostess managing dining room with modern Toast POS ordering system"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE TELEPHONY INTAKE</span>
                      <span className="text-[#F05A28] font-bold">100% ANSWERED</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      Toast POS &bull; 14 Phone Orders Injected (Peak Rush)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DIRECT DEFINITION BLOCK (AEO & GEO OPTIMIZED) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#F05A28]/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // EXECUTIVE SUMMARY & SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Restaurant AI Voice Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A restaurant AI voice agent is an autonomous phone receptionist that answers customer calls 24/7 without hold times. It handles takeout and delivery orders, processes complex modifiers, checks real-time 86-ed inventory, books table reservations, and injects tickets directly into POS systems like Toast, Square, and Clover with zero manual staff intervention.
              </p>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-12 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Inbound call answer rate
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  +18%
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Average ticket size via AI upsell
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  &lt; 500ms
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Voice conversational latency
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  0 Sec
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Caller hold time during dinner rush
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 SUB-VERTICAL RESTAURANT SHOWCASES */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // HOSPITALITY VERTICAL SPECIALTIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Volume Food & Beverage Concepts
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From neighborhood pizzerias overwhelmed with Friday night phone orders to multi-unit franchise groups managing thousands of daily calls, we engineer voice AI tailored to your kitchen operations.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: High-Volume Pizzerias & Italian Trattorias */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. HIGH-VOLUME PIZZERIAS & TRATTORIAS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Complex Specialty Pizza Modifiers & Half-and-Half Toppings
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Pizza ordering is notoriously difficult for basic voice bots. Customers order half-and-half specialty pizzas, custom crusts (thin, deep dish, gluten-free), extra sauce on side, and specific baking instructions.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our pizza voice agent understands intricate crust, sauce, and topping combinations. It calculates exact modifier upcharges, suggests garlic knots or 2-liter drinks, and sends the ticket straight to your kitchen pizza oven station with zero errors.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Half/Half Pizza Modifiers
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Drink & Side Upselling
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Delivery Zone Verification
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/pizzeria-kitchen-ai-ticket.webp"
                      alt="American chef taking artisanal pizza from brick oven with digital kitchen display screen in background"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Fast-Casual Chains & Drive-Thru Locations */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/drive-thru-franchise-ai-voice.webp"
                      alt="Modern American fast casual drive-thru ordering lane with digital menu and AI headset system"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. FAST-CASUAL & QUICK-SERVICE (QSR)
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Sub-30-Second Rapid Order Taking & Loyalty Number Recognition
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Fast-casual brands thrive on speed. Every second saved taking a phone order translates directly to faster kitchen throughput and higher customer satisfaction.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our QSR voice agent recognizes repeat caller phone numbers, recalls past favorite orders, applies loyalty points or discount codes, and completes order intake in under 35 seconds with immediate Toast or Square kitchen injection.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Caller ID Past Order Reorder
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Loyalty Points Redemption
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Curbside Pickup Vehicle Notes
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 3: Fine Dining, Steakhouses & Upscale Bistros */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. FINE DINING & UPSCALE BISTROS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    OpenTable & Resy Table Reservations with VIP Guest Profiling
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Upscale dining rooms require sophisticated, warm phone etiquette. When guests call during service to book anniversary tables or verify dress codes, hosts are frequently busy seating guests at the front door.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our fine dining voice agent answers with polished tone, queries OpenTable or Resy API for live table availability, records guest seating preferences (booth vs patio), captures anniversary or birthday notes, and sends calendar invites.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      OpenTable & Resy API Sync
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Dietary & Allergen Profiling
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Dress Code & Corkage Info
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/catering-banquet-ai-booking.webp"
                      alt="American hospitality event coordinator reviewing reservation calendar in upscale dining room"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Multi-Location Restaurant Franchises */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/toast-pos-kitchen-display-ai.webp"
                      alt="Modern restaurant counter with Toast POS terminal and kitchen display screen"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. MULTI-LOCATION FRANCHISE OPERATORS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Geo-Location Smart Routing & Store-Specific Menu Pricing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Franchise groups with 5 to 50+ stores often manage a single brand phone number or individual store lines where store menus, local sales tax, and operating hours differ across city lines.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our multi-unit voice infrastructure automatically identifies the closest store location based on caller address or zip code, references that specific location POS menu and pricing tier, and injects the order into the proper branch kitchen.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Multi-Store Centralized Telephony
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Store-Level Tax & Pricing
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Unified Franchise Dashboard
                    </span>
                  </div>
                </div>
              </div>

              {/* VERTICAL 5: Corporate Catering, Party Platters & Large Events */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. CORPORATE CATERING & EVENT PLANNERS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Headcount Tier Pricing, Deposit Capture & Prep Buffer Rules
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Large catering orders ($300 to $3,500+) require detailed logistics: headcounts, dietary mix (vegan, gluten-free, nut allergies), chafing dish hardware, delivery access instructions, and minimum 24-hour lead times.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our catering voice agent guides event planners through structured order questionnaires, calculates required portions, enforces kitchen prep lead-time rules, sends instant email and SMS quote breakdowns, and collects deposit payments securely via Stripe or Toast invoicing.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F]">
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Headcount & Platter Calculators
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Automated 24h Lead-Time Enforcer
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Digital Invoice & Deposit Sync
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/catering-banquet-ai-booking.webp"
                      alt="Catering and banquet table service preparation with corporate luncheon platters"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-PHASE TELEPHONY & POS DEPLOYMENT LIFECYCLE */}
        <section className="py-20 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase Restaurant AI Telephony Implementation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From menu hierarchy extraction to live phone cutover with zero kitchen disruption in 2 to 4 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Menu & Modifier Mapping</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We connect to your Toast, Square, or Clover POS API, pulling item SKUs, nested modifier groups, combo rules, price overrides, and tax configurations.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: POS data dictionary & conversational modifier trees
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Tuning & SIP Setup</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We provision dedicated carrier SIP trunks, configure sub-500ms voice pipelines with natural conversational inflection, and train custom phonetic models on your unique menu names.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: High-fidelity voice agent & test telephony sandbox
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Kitchen Printer Simulation</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We execute dozens of test phone orders under noisy background conditions, verifying that kitchen display screens (KDS) and thermal printers print tickets with exact modifier formatting.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: End-to-end POS ticket injection validation
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // GO-LIVE</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Overflow & Night Cutover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We enable conditional call forwarding during peak dinner rush or 100% full-time 24/7 call answering. We monitor real-time order volume, calibrate audio latency, and provide 24/7 support.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Zero missed customer calls & complete IP handover
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE & INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Enterprise Restaurant AI Telephony Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect sub-500ms voice agents with live POS synchronization and kitchen printing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Carrier-Grade Low-Latency SIP Trunking',
                  desc: 'Direct Twilio and Telnyx SIP trunking with geo-distributed WebRTC media gateways ensuring under 500ms total round-trip audio latency.',
                },
                {
                  title: 'Bi-Directional Toast & Square POS Webhooks',
                  desc: 'Real-time REST API connectors that sync menu hierarchies, modifiers, pricing tiers, and 86-ed inventory items every 60 seconds.',
                },
                {
                  title: 'Acoustic Noise Filtering & Speech Isolation',
                  desc: 'Deep neural noise cancellation algorithms tuned to filter car engine noise, street traffic, and background conversation from caller audio.',
                },
                {
                  title: 'Strict Allergen & Food Safety Guardrails',
                  desc: 'Deterministic safety rules verify customer allergy statements against your menu database, forcing explicit verbal warnings on cross-contamination.',
                },
                {
                  title: 'PCI-Compliant SMS Payment Links',
                  desc: 'Instant SMS text links sent via Stripe or Toast Online Ordering allowing callers to enter credit card details securely on mobile.',
                },
                {
                  title: 'Kitchen Display (KDS) & Printer Routing',
                  desc: 'Completed tickets automatically format with correct preparation modifiers and route directly to the kitchen expeditor and bar printers.',
                },
                {
                  title: 'Automated 86-Item Substitution Logic',
                  desc: 'When kitchen staff mark an ingredient sold out, the voice agent suggests predefined alternatives (such as sweet potato fries when regular fries are out).',
                },
                {
                  title: 'Warm Call Transfer with Context Screen-Pop',
                  desc: 'When a caller requests a manager, the agent executes an immediate SIP warm transfer, displaying the full call transcript and caller name on POS.',
                },
                {
                  title: 'OpenTable & Resy Real-Time API Sync',
                  desc: 'Direct calendar integration to book dining room tables, check party availability, and send SMS confirmation reminders with one-click cancellation.',
                },
                {
                  title: '100% Client Code & Prompts Ownership',
                  desc: 'You receive complete Git source code, custom voice prompts, and direct cloud accounts. Zero third-party per-order commission fees.',
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] hover:border-[#F05A28]/50 transition-colors"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    VOICE-0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM AI VS 3RD PARTY CALL CENTERS */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom AI Voice vs. Third-Party Call Centers
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why independent restaurants and multi-unit franchises replace manual call centers with custom AI voice infrastructure.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Feature / Metric</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Restaurant AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Offshore Call Center
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      In-Store Host / Kitchen Staff
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Answer Rate (Peak Rush)</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% (Instant, 0s Hold)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">80% - 90% (Hold Times)</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">60% - 75% (Rings Out)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Direct POS Kitchen Injection</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Direct Toast & Square API
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Re-Entry into POS</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Handwritten Paper Tickets</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Real-Time 86-ed Item Sync</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Instant Webhook Sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Delayed Daily Emails</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Verbal Shouting in Kitchen</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Cost per Call Minute</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      $0.05 - $0.08 / min (Wholesale)
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$1.50 - $2.50 / min</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$15 - $20 / hr staff labor</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Source Code & IP Ownership</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned by Restaurant
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Proprietary Black Box</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">N/A</td>
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
                  // DIRECT FOUNDER CONSULTATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Leadership with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Restaurant operations require zero-friction execution. At FactoryJet, founder Bhavesh Barot leads every hospitality discovery and POS integration session directly. We review your current phone volume, Toast or Square POS configuration, and menu modifier structure in the very first conversation.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with experienced systems architects who build reliable, high-throughput voice pipelines. We build infrastructure that you own and operate permanently without recurring software royalties.
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
                    label="Request Restaurant AI Proposal"
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
          eyebrow="// RESTAURANT AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on Restaurant AI Voice Agents"
          lead="Everything restaurant owners, general managers, and franchise operators need to know about POS integration, modifier accuracy, and voice quality."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // NEVER MISS ANOTHER PHONE ORDER &bull; ZERO HOLD TIMES
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Restaurant Phone Ordering with Custom AI?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical discovery call with our founder. We will evaluate your current phone call volume, review your POS setup, and deliver a fixed-scope architecture proposal within 24 hours.
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
                label="Request Custom Restaurant Audit"
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
