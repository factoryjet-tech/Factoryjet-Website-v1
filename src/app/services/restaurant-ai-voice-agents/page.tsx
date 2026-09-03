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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/restaurant-ai-voice-agents';
const PAGE_TITLE = 'Restaurant AI Voice Agents & Phone Ordering | FactoryJet';
const PAGE_DESC =
  'Custom 24/7 AI voice phone ordering for US restaurants, pizzerias & franchises. Direct Toast, Square & Clover POS order injection. Zero missed calls. Get audit.';
const PAGE_MODIFIED = '2026-09-03';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Restaurant AI Voice Agents', url: CANONICAL_URL },
];

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
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
      "The AI voice agent answers on the first ring, in under 500 milliseconds. If the caller's number is already in your CRM or loyalty list, it greets them by name. It takes pickup and delivery orders, answers menu questions, books reservations, and sends anything tricky straight to your staff.",
  },
  {
    category: 'telephony',
    question: 'How many simultaneous phone calls can the AI agent handle during peak dinner rush?',
    answer:
      'The agent can take as many calls as come in, all at once. There is no busy signal and no hold time. Whether your restaurant gets 2 calls or 200 calls during Friday dinner rush, every caller gets answered right away.',
  },
  {
    category: 'telephony',
    question: 'How does the voice agent sound to calling customers?',
    answer:
      'The voice sounds like a real host, not a robot. It knows when to pause and when to talk. It handles interruptions without getting confused. It stays polite. It can also switch between American accents.',
  },
  {
    category: 'telephony',
    question: 'What happens if a customer speaks with heavy background noise or a strong accent?',
    answer:
      'The voice model filters out background noise, so a call from a car or a loud patio still comes through clearly. If it is not sure it heard an item right, it asks the caller to confirm before it sends the ticket to the kitchen.',
  },
  {
    category: 'pos',
    question: 'Which POS systems do your restaurant AI voice agents integrate with?',
    answer:
      'We build direct, two-way connections to Toast POS, Square for Restaurants, Clover, Brink POS, Aloha (NCR Voyix), Micros Simphony, SpotOn, Revel Systems, and Lightspeed. Orders flow in. Menu and price changes flow back out, automatically.',
  },
  {
    category: 'pos',
    question: 'How are completed phone orders sent to our kitchen display system (KDS)?',
    answer:
      "Once the customer confirms the order, and pays or picks pay-at-pickup, the agent sends it straight to your POS. The ticket prints right away at the expeditor station. It also shows up on your kitchen display screens (KDS), tagged 'Phone AI Order' so your team knows where it came from.",
  },
  {
    category: 'pos',
    question: 'Does the AI agent check real-time 86-ed items and sold-out specials?',
    answer:
      'Yes. The agent stays synced to your POS inventory through a live webhook connection. The moment your kitchen 86-es an item, such as wild salmon or a gluten-free crust, the agent stops offering it on the phone. It suggests a swap you have already approved instead.',
  },
  {
    category: 'pos',
    question: 'How does payment processing work for phone takeout and delivery orders?',
    answer:
      'While the customer is still on the phone, the agent can text them a secure, PCI DSS-compliant payment link. For loyalty members, it can charge a card already on file. Or it can just stage the order for pay-at-counter pickup, based on how your store likes to run.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI agent handle complex food allergies and custom preparation requests?',
    answer:
      'Yes. The agent knows your full allergen list: dairy, nuts, gluten, shellfish, soy, and anything else you flag. It warns a guest if their order contains an allergen. It also adds prep notes, like extra crispy, dressing on the side, or no onions, straight to the POS ticket.',
  },
  {
    category: 'modifiers',
    question: 'How does the agent handle upselling and combo upgrades?',
    answer:
      'The agent suggests pairings that make sense, like garlic knots with a pasta order, or a dessert special near the end of the call. The suggestions follow simple house rules, not guesswork, so they never feel pushy. Restaurants using this see ticket size grow by 14 to 22 percent.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI agent book table reservations and private banquet rooms?',
    answer:
      'Yes. The agent connects to OpenTable, Resy, SevenRooms, or your own booking calendar. It checks real table availability for the party size and time the caller wants, books the table, and texts a confirmation reminder.',
  },
  {
    category: 'modifiers',
    question: 'How does the voice agent handle large corporate catering inquiries?',
    answer:
      "For bigger catering orders, say 15 or more guests or $300 or more, the agent collects the event date, headcount, dietary needs, and delivery address. It sends that lead straight to your catering director by text and email, so a person can close the sale. If your team already runs Zapier or n8n for other workflows, we can wire this into that too.",
  },
  {
    category: 'pos',
    question: 'How does the voice agent handle third-party delivery services like DoorDash or Uber Eats?',
    answer:
      'The AI agent gently steers phone callers toward ordering direct, through your own phone line or website, instead of a delivery app that charges up to 30 percent commission. That saves your restaurant real money. It also builds your own customer list instead of the app building theirs.',
  },
  {
    category: 'modifiers',
    question: 'Can the AI voice agent recognize custom pizza half-and-half topping splits and crust substitutions?',
    answer:
      'Yes. The agent is built to handle split toppings, like pepperoni on the left half and mushrooms with extra mozzarella on the right. It also handles gluten-free or cauliflower crust swaps, and bake instructions like well-done. Every modifier maps to the right code on your kitchen printer.',
  },
  {
    category: 'pricing',
    question: 'What is the monthly return on investment (ROI) for an independent restaurant or pizzeria?',
    answer:
      'High-volume restaurants typically add $3,500 to $9,000 in monthly gross margin. That comes from three places: no more missed calls during dinner rush, more late-night phone orders captured, and a 16 percent higher average ticket from automatic upselling.',
  },
  {
    category: 'pricing',
    question: 'How is the restaurant AI voice agent priced compared to third-party call centers?',
    answer:
      'A traditional human call center charges $1.50 to $2.50 a minute, and the quality varies call to call. FactoryJet builds you a custom AI voice system for a fixed setup fee instead. After that, phone and AI compute run close to wholesale rate, usually $0.05 to $0.08 a minute.',
  },
  {
    category: 'pricing',
    question: 'Does our restaurant franchise own the AI voice agent software?',
    answer:
      'Yes. You get 100 percent ownership of the source code and every connector we build. Your prompts, your POS webhooks, your telephony accounts: all yours. You never pay us an ongoing per-store license fee.',
  },
  {
    category: 'pricing',
    question: 'How long does it take to train and launch our restaurant AI agent?',
    answer:
      'A single-location restaurant on Toast or Square POS can launch in 10 to 14 days. A franchise group with 10 to 50 locations usually takes 3 to 4 weeks, including staff training and moving your phone number over.',
  },
  {
    category: 'pos',
    question: 'How fast do phone orders appear on kitchen display screens (KDS) after the call ends?',
    answer:
      'The order hits your POS through a live webhook in under 1.5 seconds after the caller confirms it. Your kitchen screen and bar printer get the finished ticket right away, with the correct pickup or delivery time stamped on it.',
  },
  {
    category: 'telephony',
    question: 'Can the restaurant AI voice agent handle Spanish-speaking and bilingual customers?',
    answer:
      'Yes. Within the first three seconds, the agent figures out whether the caller speaks English or Spanish and switches automatically. It can run the whole order, including dietary questions and the delivery address, in fluent Spanish.',
  },
  {
    category: 'pricing',
    question: 'How does our manager monitor call recordings and transcripts?',
    answer:
      'You get a secure web dashboard. Store managers and owners can pull up call recordings, full text transcripts, order accuracy logs, and customer sentiment scores, all in real time. Access runs on role-based access control (RBAC), so a shift lead sees less than a franchise owner does, and everyone signs in through single sign-on (SSO).',
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
    itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

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
                  <span>
                    Live POS Order Injection.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We build AI phone agents for American restaurants, pizzerias, and multi-location franchises. Calls get answered in under 500 milliseconds, every time. The agent takes every takeout order during the dinner rush and sends the ticket straight into Toast, Square, Clover, or Brink. No hold music. No missed calls.
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
                      width={1376}
                      height={768}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
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
                A restaurant AI voice agent is software that answers your phone, day and night, with no hold time. It takes takeout and delivery orders, handles special requests, and checks which menu items are sold out in real time. It books table reservations too. Then it sends the order straight into your POS, such as Toast, Square, or Clover. No staff member has to touch it.
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

        {/* VERIFIED INDUSTRY RESEARCH */}
        <section className="py-16 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED RESTAURANT PHONE RESEARCH
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                Why Missed Calls and Order Accuracy Are the Two Metrics That Matter
              </h2>
            </div>

            <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  20%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Restaurant Calls That Go Unanswered
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  A 2025 Harris Poll of U.S. adults found that 63% still prefer calling a restaurant directly. But 20% say those calls are always or often ignored, and 69% say they will give up trying if no one picks up. Our{' '}
                  <Link href="/tools/ai-agent-roi-calculator" className="underline hover:text-[#F05A28]">
                    AI agent ROI calculator
                  </Link>{' '}
                  can show you what a missed call is really worth for your restaurant.
                </p>
                <a
                  href="https://theharrispoll.com/articles/state-of-beverages-2025-trend-report-how-does-gen-z-shop-restaurants-are-losing-business-by-not-answering-the-phone-should-workers-adapt-to-company-culture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: The Harris Poll &rarr;
                </a>
              </li>

              <li className="p-8 rounded-2xl bg-white border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#14110F] font-heading mb-2">
                  90%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Best-Case Order Accuracy, Even at Peak Brands
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Independent mystery-shop research across major chains found order accuracy slipping year over year. Even the best time of day topped out around 90 percent. Dinner was the worst time for mistakes.
                </p>
                <a
                  href="https://www.intouchinsight.com/blog/drive-thru-trends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Intouch Insight Drive-Thru Study &rarr;
                </a>
              </li>
            </ul>
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
                Neighborhood pizzerias get swamped with Friday night phone orders. Multi-unit franchise groups handle thousands of calls a day. Either way, we build voice AI tailored to how your kitchen runs.
              </p>
            </div>

            <ul className="space-y-16">
              {/* VERTICAL 1: High-Volume Pizzerias & Italian Trattorias */}
              <li className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. HIGH-VOLUME PIZZERIAS & TRATTORIAS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Complex Specialty Pizza Modifiers & Half-and-Half Toppings
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Pizza orders trip up most basic voice bots. Customers ask for half-and-half specialty pizzas, custom crusts (thin, deep dish, gluten-free), sauce on the side, and exact baking instructions.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our pizza voice agent handles complex crust, sauce, and topping combos correctly, every time. It works out the right modifier upcharge, suggests garlic knots or a 2-liter drink, and sends the ticket straight to your pizza oven station with no mistakes.
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
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </li>

              {/* VERTICAL 2: Fast-Casual Chains & Drive-Thru Locations */}
              <li className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/drive-thru-franchise-ai-voice.webp"
                      alt="Modern American fast casual drive-thru ordering lane with digital menu and AI headset system"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
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
                    Fast-casual brands run on speed. Every second saved on a phone order means faster kitchen turnaround and a happier customer.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our QSR voice agent recognizes a repeat caller&rsquo;s number and pulls up their favorite order. It applies loyalty points or discount codes on its own. The whole call takes under 35 seconds, and the order lands in Toast or Square right away. The same fast, transactional call pattern is what powers our{' '}
                    <Link href="/services/automotive-ai-voice-agents" className="underline hover:text-[#F05A28]">
                      automotive AI voice agents
                    </Link>{' '}
                    for service-writer phone intake at auto shops.
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
              </li>

              {/* VERTICAL 3: Fine Dining, Steakhouses & Upscale Bistros */}
              <li className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. FINE DINING & UPSCALE BISTROS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    OpenTable & Resy Table Reservations with VIP Guest Profiling
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Upscale dining rooms need warm, careful phone manners. When a guest calls during dinner service to book an anniversary table or ask about the dress code, the host is often busy seating people at the door.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our fine dining voice agent answers in a polished tone. It checks OpenTable or Resy for a real, open table. It notes seating choices, like booth versus patio. It also records anniversary or birthday details, then sends the guest a calendar invite.
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
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </li>

              {/* VERTICAL 4: Multi-Location Restaurant Franchises */}
              <li className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/restaurants/toast-pos-kitchen-display-ai.webp"
                      alt="Modern restaurant counter with Toast POS terminal and kitchen display screen"
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
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
                    Franchise groups with 5 to 50-plus stores often run one brand phone number, or separate lines per store. Menus, local sales tax, and hours can all differ once you cross a city line.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Our multi-unit system finds the closest store from the caller&rsquo;s address or zip code. It pulls up that store&rsquo;s exact menu and pricing, then sends the order into the right branch kitchen. Call routing happens on its own, with no dispatcher needed.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    The same routing engine powers our general{' '}
                    <Link href="/services/ai-customer-support-agents" className="underline hover:text-[#F05A28]">
                      AI customer support agents
                    </Link>{' '}
                    for text and web chat. Some franchise groups already run RingCentral, Genesys, Five9, Aircall, or Dialpad for their call center. We connect alongside it. You do not have to rip it out.
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
              </li>

              {/* VERTICAL 5: Corporate Catering, Party Platters & Large Events */}
              <li className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. CORPORATE CATERING & EVENT PLANNERS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Headcount Tier Pricing, Deposit Capture & Prep Buffer Rules
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Large catering orders, from $300 to $3,500 or more, need careful planning. That means headcounts, dietary mix (vegan, gluten-free, nut allergies), chafing dish equipment, delivery access notes, and at least 24 hours of lead time.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Our catering voice agent walks event planners through a short set of questions. It works out the right portions and enforces your kitchen&rsquo;s lead-time rules. Then it sends an instant email and text quote, and can collect a deposit securely through Stripe.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    The same after-hours lead-capture pattern shows up in home-service trades. See our{' '}
                    <Link href="/services/contractor-ai-receptionist" className="underline hover:text-[#F05A28]">
                      contractor AI receptionist
                    </Link>{' '}
                    page for that version. For the invoice itself, we can sync it to QuickBooks or send it straight through Toast.
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
                      width={1376}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* POS, RESERVATION & PAYMENT SYSTEM COVERAGE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Which POS, Reservation, and Payment Systems We Connect To
              </h2>
              <p className="text-lg text-[#46403B]">
                Every restaurant runs different software at the counter and the host stand. Here is what we connect to today, and what each connection does.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">POS &amp; Kitchen Display</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Toast POS</span>: order injection, modifiers, and menu sync through the Toast API.</li>
                  <li><span className="font-bold text-[#14110F]">Square for Restaurants</span>: ticket creation and live menu availability.</li>
                  <li><span className="font-bold text-[#14110F]">Clover</span>: order and payment sync for counter-service concepts.</li>
                  <li><span className="font-bold text-[#14110F]">Brink POS</span>: enterprise QSR and franchise order routing.</li>
                  <li><span className="font-bold text-[#14110F]">Aloha</span> (NCR Voyix): high-volume full-service and franchise ticketing.</li>
                  <li><span className="font-bold text-[#14110F]">Micros Simphony</span>: hotel, resort, and enterprise food service integration.</li>
                  <li><span className="font-bold text-[#14110F]">SpotOn, Revel Systems &amp; Lightspeed</span>: order injection and 86-item sync for independent and multi-location restaurants.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Reservations &amp; Table Management</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">OpenTable</span>: live table availability and guest profile lookup.</li>
                  <li><span className="font-bold text-[#14110F]">Resy</span>: real-time booking and VIP guest notes.</li>
                  <li><span className="font-bold text-[#14110F]">SevenRooms</span>: table and private event booking for hospitality groups.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Payments &amp; Back Office</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Stripe</span>: PCI DSS-compliant SMS payment links and deposit capture.</li>
                  <li><span className="font-bold text-[#14110F]">QuickBooks</span>: invoice and deposit sync for catering and events.</li>
                  <li><span className="font-bold text-[#14110F]">Toast Online Ordering</span>: card-on-file charges for loyalty members.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Running a system we have not listed? We scope a custom connector against its published API, or its export files if it does not have one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Still taking phone orders by hand during the rush?'}
          sub={'Tell us your POS platform and roughly how many calls you get on a Friday night. We will show you what the AI agent would have caught, and what it would have cost you not to.'}
          label={'Talk about your call volume'}
        />

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
                From menu setup to a live phone cutover, with no kitchen disruption, in 2 to 4 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Menu & Modifier Mapping</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We connect to your Toast, Square, or Clover POS API. We pull in your item list, modifier groups, combo rules, price overrides, and tax settings.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: POS data dictionary & conversational modifier trees
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Acoustic Tuning & SIP Setup</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We set up dedicated phone trunks with your carrier. We tune the voice pipeline to respond in under 500 milliseconds and sound natural. Then we train the model on your specific menu item names.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: High-fidelity voice agent & test telephony sandbox
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Kitchen Printer Simulation</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We run dozens of test calls, including ones with background noise. We check that your kitchen display screens (KDS) and thermal printers show every modifier correctly on the ticket.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: End-to-end POS ticket injection validation
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // GO-LIVE</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Overflow & Night Cutover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    You choose the rollout: call forwarding just during peak dinner rush, or full-time 24/7 coverage. We watch order volume in real time, fine-tune audio latency, and stay on call for support.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Zero missed customer calls & complete IP handover
                </div>
              </li>
            </ul>
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
                How we build sub-500ms voice agents with live POS syncing and kitchen ticket printing.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Carrier-Grade Low-Latency SIP Trunking',
                  desc: 'We connect through Twilio and Telnyx phone trunks, routed over WebRTC media gateways spread across regions. Total round-trip audio latency stays under 500 milliseconds.',
                },
                {
                  title: 'Bi-Directional Toast & Square POS Webhooks',
                  desc: 'Real-time API connectors keep your menu, modifiers, and pricing in sync with the POS every 60 seconds. Webhooks push 86-ed items back out just as fast.',
                },
                {
                  title: 'Acoustic Noise Filtering & Speech Isolation',
                  desc: 'The voice model filters out car engine noise, street traffic, and background chatter, so it can hear the caller clearly.',
                },
                {
                  title: 'Strict Allergen & Food Safety Guardrails',
                  desc: 'Fixed safety rules check what a customer says against your allergen list. If there is any risk of cross-contact, the agent gives a clear warning out loud, every single time.',
                },
                {
                  title: 'PCI DSS-Compliant SMS Payment Links',
                  desc: 'We text callers a secure, PCI DSS-compliant payment link through Stripe or Toast Online Ordering, both hosted on infrastructure like AWS or Google Cloud. Callers enter their card details on their own phone.',
                },
                {
                  title: 'Kitchen Display (KDS) & Printer Routing',
                  desc: 'Finished tickets format themselves with the right prep notes. They route straight to the kitchen expeditor screen and the bar printer.',
                },
                {
                  title: 'Automated 86-Item Substitution Logic',
                  desc: 'When your kitchen marks an item sold out, the agent offers the backup choice you already picked. Think sweet potato fries when regular fries run out.',
                },
                {
                  title: 'Warm Transfer with Context Screen-Pop',
                  desc: "When a caller asks for a manager, the agent starts a warm transfer right away. Your POS screen shows the caller's name and the full call transcript before you even pick up.",
                },
                {
                  title: 'OpenTable & Resy Real-Time API Sync',
                  desc: 'The system checks OpenTable or Resy for an open table and books the one the guest wants. It texts a reminder. Guests can cancel with one tap.',
                },
                {
                  title: '100% Client Code & Prompts Ownership',
                  desc: 'You get the full source code in Git, your custom voice prompts, and your own cloud accounts. No third party charges you a commission per order.',
                },
              ].map((item, idx) => (
                <li
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
                </li>
              ))}
            </ul>
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
                Why independent restaurants and multi-unit franchises replace manual call centers with a custom AI voice system. There is no legacy IVR tree to push through, and no cold transfer to a stranger.
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
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
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
                  Restaurant operations leave no room for friction. At FactoryJet, founder Bhavesh Barot leads every discovery call himself. In the first call, we cover your call volume, your POS setup, and how your menu modifiers work.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  You work directly with experienced engineers who build reliable, high-volume voice systems. What we build is yours to keep and run, with no recurring software fee.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You get that same senior team on every FactoryJet build, restaurants included, never a junior subcontractor. Browse our wider{' '}
                  <Link href="/services/ai-agent-development" className="underline hover:text-[#F05A28]">
                    AI agent development
                  </Link>{' '}
                  work to see the other industries we build for. Need your restaurant&rsquo;s website redone too? See our{' '}
                  <Link href="/services/restaurant-website-design" className="underline hover:text-[#F05A28]">
                    restaurant website design
                  </Link>{' '}
                  service.
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
              Book a 30-minute call with our founder. We will look at your phone call volume, review your POS setup, and send a fixed-scope proposal within 24 hours.
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
