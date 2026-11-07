import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';
import WebDesignCityLinksIN from '@/components/v2/WebDesignCityLinksIN';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Delhi | FactoryJet',
  description:
    'Web design company in Delhi for government vendors, traders, coaching institutes and retail brands. Next.js sites in 7 days on a fixed quote.',
  keywords: [
    'web design company in Delhi',
    'website design Delhi',
    'web development company Delhi',
    'website design company Delhi NCR',
    'professional website design Delhi',
    'web design Connaught Place',
    'web design Gurgaon',
    'corporate website design Delhi',
    'government vendor website Delhi',
    'Next.js web development Delhi',
    'web design agency Delhi NCR',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Delhi NCR | FactoryJet',
    description:
      'Web design company in Delhi NCR for firms in Connaught Place, Okhla, Nehru Place and South Delhi. Next.js, SEO and GA4 set up, 7-day delivery.',
    url: 'https://factoryjet.com/web-design/delhi',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Delhi website design by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Delhi | FactoryJet',
    description:
      'Delhi website design: written price, 7-day delivery, Next.js build, code handed to you.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/delhi',
    languages: webDesignCityAlternatesIN['delhi'],
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

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/delhi#webpage',
  url: 'https://factoryjet.com/web-design/delhi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const DEL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Pin down the buyer',
    description:
      "A tender committee at a ministry, a wholesale buyer from Chandni Chowk and a UPSC aspirant in Mukherjee Nagar want very different pages. We choose the reader that brings you revenue, study the rival sites they will compare, and settle the sitemap.: Days 1–2",
  },
  {
    number: '02',
    title: 'Screens you can click',
    description:
      'Figma layouts start at a 375px phone and scale to 1440px. You click through, leave comments against each block and approve. No code is written until that approval is in.: Days 3–4',
  },
  {
    number: '03',
    title: 'Code and connections',
    description:
      'We code in Next.js and publish through Cloudflare, so pages load in under 1.5 seconds on Indian 4G. Enquiry forms, WhatsApp, booking or batch registration and your existing software are linked at this stage.: Days 5–6',
  },
  {
    number: '04',
    title: 'On-page SEO',
    description:
      'We tidy the copy, compress images to WebP and write titles and metas page by page. LocalBusiness and FAQPage schema and internal links are added, and Search Console receives the sitemap. Delhi locality targeting is part of every build.: Day 6–7',
  },
  {
    number: '05',
    title: 'Live, with a walkthrough',
    description:
      'DNS is switched to Cloudflare, GA4 and Tag Manager are running and Search Console is verified. You get a recorded tour of the site and 30 days of post-launch fixes.: Day 7+',
  },
];

const DEL_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Delhi NCR Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const DEL_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How is website pricing worked out for a Delhi firm?',
    answer:
      "Every quote is built for the job. Page count, how contested your keywords are, and extras like a product catalogue, payment gateway, course booking or AI assistant set the number. After a free call you receive one fixed figure in writing, and the code is yours after launch.",
  },
  {
    category: 'pricing',
    question: 'How long will my Delhi website take?',
    answer:
      'Seven days for a standard build. The first two days go to research and structure, days three to six to design and code, and the last day to SEO checks and launch.',
  },
  {
    category: 'pricing',
    question: 'How is FactoryJet different from a full-service Delhi agency?',
    answer:
      "Full-service agencies in Gurgaon or Connaught Place carry account teams and office costs, and those costs are built into their fees. We are a small engineering team that designs and codes directly. You still get Figma design, a Next.js build and a Lighthouse audit before launch, and your money goes on the build.",
  },
  {
    category: 'pricing',
    question: 'What is inside the 7-day delivery promise?',
    answer:
      'It covers what sits with us: design, code, content setup and launch. We have delivered on time on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What do I get at handover?',
    answer:
      'Strategy, Figma screens, a Next.js site, starter copy, schema, meta and sitemap setup, GA4 and 30 days of support. The code is moved to your GitHub on launch day.',
  },
  {
    category: 'included',
    question: 'Do you handle the website text?',
    answer:
      'We draft headlines, the hero and short service text. Long-form SEO pages are an extra. You get a content brief before coding that lists what to send us.',
  },
  {
    category: 'included',
    question: 'Who hosts the site?',
    answer:
      "Cloudflare Pages, on an account in your name that we configure. Most builds fit its free plan, and we charge no hosting fee.",
  },
  {
    category: 'included',
    question: 'Can we edit the site in-house?',
    answer:
      'Yes. Growth and Custom builds include Sanity or Contentful, so your staff can change text and images from a browser without a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the site appear in Delhi search results?',
    answer:
      'Each build ships with schema, unique titles and metas, Core Web Vitals passing on mobile, internal links, a submitted sitemap and WebP images. Searches for your brand name normally find the site within 1–2 weeks.',
  },
  {
    category: 'technical',
    question: 'Which platform do you build on?',
    answer:
      "Next.js, served from Cloudflare. Pages open in under 1.5 seconds on Indian 4G, where an average WordPress site takes 4–6 seconds. Google weighs that gap through Core Web Vitals, which matters in crowded Delhi results.",
  },
  {
    category: 'technical',
    question: 'Is the site built for phones?',
    answer:
      'Yes. We design for a 375px screen first and require Lighthouse 90+ and passing Core Web Vitals on mobile before handover. Images are WebP and load lazily from Cloudflare.',
  },
  {
    category: 'technical',
    question: 'Will GA4 and Search Console be ready at launch?',
    answer:
      'Yes. GA4 and Tag Manager are installed, and form sends, WhatsApp taps and calls count as conversions from day one. Search Console is verified with the sitemap submitted.',
  },

  /* ── Delhi NCR Local ── */
  {
    category: 'local',
    question: 'Can you build sites for government contractors and PSU suppliers in Delhi?',
    answer:
      "Yes. Firms bidding for ministry, PSU, defence or infrastructure work are judged on paper and online. We build pages for empanelments, registrations, completed project lists, certifications and key personnel, so an evaluating officer can check you quickly. A clear tender enquiry route sits on every page.",
  },
  {
    category: 'local',
    question: 'Do you design for fashion labels and retailers in Delhi?',
    answer:
      "Yes. Delhi has designer labels in Hauz Khas and Shahpur Jat, retail streets in Lajpat Nagar and Karol Bagh, and D2C brands shipping from Okhla and Noida. Their visitors are on phones, so we build quick product pages, Razorpay checkout and Instagram links, designed at 375px first.",
  },
  {
    category: 'local',
    question: "Will my copy reflect the Delhi areas my buyers search from?",
    answer:
      "Yes. We list the areas your customers use in searches: Connaught Place and Barakhamba Road for offices, Nehru Place for IT trade, Chandni Chowk and Sadar Bazaar for wholesale, Okhla and Mayapuri for industry, and South Delhi markets for retail. Those names go into the copy and LocalBusiness schema.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare with agencies in Delhi?',
    answer:
      "Many Delhi agencies take months and only reveal a price after several meetings. We give a fixed quote first, put the 7-day date in the agreement and build on Next.js. You launch sooner, load faster and keep the code.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Is the website mine once it is finished?',
    answer:
      'Yes. The Next.js code goes to your GitHub on launch day, with the Figma files and every API key. No retainer and no locked platform.',
  },
  {
    category: 'support',
    question: 'What support is there after go-live?',
    answer:
      'Thirty days of free bug fixes and small changes after launch. Then a monthly maintenance plan is available, with same-day bug priority, an engineer who knows your code and a quarterly performance and Core Web Vitals review.',
  },
  {
    category: 'support',
    question: 'What if the site stops working?',
    answer:
      'In the first 30 days we fix bugs free, usually within 24 hours. Since the site is static files on Cloudflare Pages, there is no server to crash, no plugin to clash and no database to fail.',
  },
  {
    category: 'support',
    question: 'Can Delhi clients keep FactoryJet on retainer?',
    answer:
      'Yes. A monthly plan covers new pages, content changes, SEO work and upkeep, with priority scheduling and a named engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'How should I pick the best web design agency in Delhi?',
    answer:
      'Put every website design company in Delhi on your list through the same three checks. Open sites they built and use them on a phone. Test those sites in PageSpeed Insights yourself. Get a fixed price in writing that will not grow during the project. FactoryJet builds custom sites in 7 days at a fixed price and welcomes those checks.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Delhi on my own or use a team?',
    answer:
      'For one landing page, a freelancer can do the job. A company site needs design, code, SEO and support, which a small senior team handles at one fixed price. If you hire web designer in Delhi directly, write down scope, deadline and fee before starting.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DEL_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const DEL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Delhi Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const DEL_COMPARISON_ROWS = [
  {
    feature: 'Brief to launch',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Figma design for your brand',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js build',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema, metas and sitemap',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '90+ Lighthouse on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and GTM configured',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed price before you sign',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code transferred to you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Seven-day launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/delhi#howto`,
  name: `Delhi website delivery: the seven-day schedule`,
  description: `How FactoryJet plans, designs, codes and launches a fast website for a Delhi company in one week.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Kickoff call',
      text: `We cover what you sell, who buys it across Delhi and the NCR, and the one action the site must drive.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Structure and keywords',
      text: `We fix the page list, check the Delhi competitors your buyers also visit, select keywords and draft the copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Visual design',
      text: 'Figma screens for the home and inner pages arrive as a preview link, and your notes are applied within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Build and SEO',
      text: `We code the approved screens mobile first, add schema listing your Delhi service areas, and link GA4 and Search Console.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Go live',
      text: 'Testing on five devices, launch, handover notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/delhi#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/delhi`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function DelhiWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="del-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="del-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Delhi', url: 'https://factoryjet.com/web-design/delhi' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Delhi', url: 'https://factoryjet.com/web-design/delhi' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_delhi_hero" />}
          eyebrow="WEB DESIGN · DELHI NCR"
          headline="Website Design in Delhi for Government Vendors, Traders, Institutes and Retail Brands"
          lead="Delhi buys from tender files, wholesale lanes, coaching hubs and shopping streets. A PSU evaluator wants empanelment proof, a student wants batch times, and a shopper wants the product on screen at once. FactoryJet designs in Figma, builds on Next.js, launches in 7 days and hands over all the code."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE launched with FactoryJet" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="We have built for Indian traders and manufacturers, US Shopify sellers and UK service firms. Every client gets a fixed quote, a 7-day delivery date and a handover that moves the code into their own GitHub."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="DELHI NCR MARKET"
          headline="Ministries, Markets and Classrooms: How Delhi Buys"
          leadParagraphs={[
            "Delhi is where central government buys. Ministries, PSUs and defence offices issue tenders, many through the Government e-Marketplace, and suppliers across the city compete for them. The old city runs some of India's oldest wholesale trade: textiles and electronics in Chandni Chowk, spices at Khari Baoli, general goods in Sadar Bazaar. Nehru Place trades IT hardware, Okhla and Mayapuri host factories and export units, and Mukherjee Nagar and Old Rajinder Nagar are packed with civil services coaching classes. Beyond the city line, Gurgaon and Noida add corporate offices and IT firms to the same region.",
            "Each of these buyers reads a website for something else. A tender evaluator checks registrations, past projects and certificates. A retailer sourcing from Sadar Bazaar wants a price list and a phone number. An aspirant compares results, faculty and fees. So we choose the page plan, proof and call to action for your buyer before any screen is drawn.",
            "Search results in Delhi are crowded in almost every category. The firms that get enquiries usually have pages that open quickly on a phone, answer the buyer's checklist in plain text and make contact easy. That is the brief we build to.",
          ]}
          stats={[
            {
              value: '32M+',
              label: "People living across the National Capital Region",
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census India',
            },
            {
              value: '₹15L Cr+',
              label: "Estimated economic output of Delhi NCR",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
            {
              value: '#1',
              label: "Delhi's ranking as an Indian consumer market",
              sourceUrl: 'https://dpiit.gov.in/',
              sourceLabel: 'DPIIT',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · DELHI NCR"
          headline="Tender Buyers and Phone Shoppers Need Different Sites"
          lead="Government and corporate buyers in Delhi take weeks and want proof. Shoppers and students decide on a phone in seconds. We build for whichever one pays your bills, and often for both."
          body={
            <>
              <p>
                Government contractors, PSU suppliers and B2B firms around Connaught Place,
                Okhla, Gurgaon and Noida face evaluators who read everything. Before shortlisting,
                a procurement officer wants empanelments, registrations, completed project lists
                and quality certificates in one place. We build these sites around that checklist,
                with a document section, project case pages and an enquiry form shaped for tender
                and RFP conversations, so a long B2G or B2B process starts with the right
                information.
              </p>
              <p>
                Fashion labels, restaurants, clinics and coaching classes in South Delhi, Karol
                Bagh, Lajpat Nagar and Mukherjee Nagar meet people who choose quickly. They arrive
                from Instagram or Maps on a phone. The page must open in under 1.5 seconds on 4G,
                show the product, menu or batch details at once and keep the booking button close
                to the thumb. We draw these at 375px before 1440px and clear Lighthouse 90+
                before launch.
              </p>
              <p>
                Both types of Delhi project include research, Figma screens, Next.js code, SEO,
                GA4 and 30 days of support. The code and design files stay in your accounts
                after launch.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Delhi buyer groups
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Government / B2B',
                    need: 'Empanelments, project proof, tender enquiry',
                    area: 'Connaught Place · Gurgaon · Noida Sector 62',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Shoppers / Students',
                    need: 'Fast phone pages and one clear button',
                    area: 'South Delhi · Hauz Khas · Saket · Lajpat Nagar',
                    colour: '#0F0F12',
                  },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: row.colour }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {row.type}
                      </p>
                    </div>
                    <p
                      className="font-fj-body text-fj-neutral-500 mb-1"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {row.need}
                    </p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                    >
                      {row.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  One engineering standard, planned around your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Delhi Clients Get From FactoryJet"
          lead="A fixed quote before you commit, a launch date written into the agreement, and a Next.js site with no plugins to maintain. The code is yours from launch day, and the price only moves if the scope does."
          pillars={[
            {
              icon: '⚡',
              title: 'A date you can hold us to',
              body: "Tender deadlines, admission cycles and festive sales in Delhi do not wait for a slow agency. We commit to 7 days and write that date into the agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Static pages, quick loads',
              body: 'WordPress usually runs PHP and many database queries for each visit. Next.js prepares pages ahead of time and Cloudflare serves them as files. On Indian 4G that means under 1.5 seconds compared with the 4–6 seconds common for WordPress, and Core Web Vitals reward it.',
            },
            {
              icon: '📋',
              title: 'Price fixed in writing',
              body: "You see the full price before signing. There is no paid discovery stage and no surprise bill after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="A Live Delhi Website in Seven Days"
          lead="Buyer and sitemap first, phone screens approved next, then search and tracking set up before anyone sees the site."
          stages={DEL_JOURNEY_STAGES}
          closingNote="BUYER · SCREENS · CODE · SEO + TRACKING · LIVE BY DAY 7"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent B2B builds from India"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison supplies artificial plants, flowers, flower runners, home décor and LED lighting to trade buyers from its Mumbai base. Its B2B store on Commerceflo, built by us, gives each buyer a trade price tier, turns quotes into orders and lets accounts reorder.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts works in MEP drafting and BIM consulting. We rebuilt its site on WordPress for B2B project enquiries, with credentials up front, a project portfolio and technical SEO.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Delhi Website Options Compared"
          lead="Agency, freelancer, template builder or FactoryJet: this table compares time to launch, what each includes and what you keep in Delhi NCR."
          pullQuote={{
            stat: '7 days',
            caption:
              'from brief to live site, including Figma screens, Next.js code, schema and a Lighthouse audit.',
          }}
          columns={DEL_COMPARISON_COLUMNS}
          rows={DEL_COMPARISON_ROWS}
          footer="Each scope gets one fixed price. A free call comes first, then the written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="DELHI NCR × WEB DESIGN"
          headline="Delhi Sectors We Build For"
          lead="Tender bidders, wholesalers, coaching institutes, clinics, IT firms and restaurants in Delhi NCR each need a different site."
          sectors={[
            {
              name: 'Government Contractors & PSU Suppliers',
              description:
                "Ministries, PSUs and defence bodies in Delhi buy from a large supplier base. Those suppliers need empanelments, registrations, certifications and completed projects visible online, because evaluators check. We build document sections, project pages and tender enquiry routes.",
              example:
                'Infrastructure, defence, IT and facility contractors bidding for central government and PSU work.',
            },
            {
              name: 'Wholesale, Fashion & Retail',
              description:
                "Chandni Chowk, Sadar Bazaar, Karol Bagh and Lajpat Nagar trade at every level, and designer labels work out of Hauz Khas and Shahpur Jat. Retail buyers want catalogues and price enquiry forms. Shoppers want quick product pages, Razorpay checkout and Instagram links.",
              example:
                'Wholesalers, designer labels, garment traders and D2C apparel brands shipping across India.',
            },
            {
              name: 'Coaching & Training',
              description:
                "Mukherjee Nagar and Old Rajinder Nagar are known for civil services coaching, and the city has many more exam and skill institutes. Their sites need course pages, batch schedules, faculty profiles and enquiry forms, with local search pages for each exam.",
              example:
                'UPSC, SSC, banking and law entrance coaching, plus skill and language institutes.',
            },
            {
              name: 'Hospitals & Clinics',
              description:
                "Delhi has large hospital groups, specialist clinics, diagnostic chains and wellness brands. Patients look for the doctor, the speciality and a slot. We build doctor profiles, speciality pages, appointment booking and local search pages for each area served.",
              example:
                'Specialist clinics, multi-speciality hospitals, lab chains and wellness centres across Delhi NCR.',
            },
            {
              name: 'IT, Hardware & Consulting',
              description:
                "Nehru Place trades IT hardware, while Gurgaon and Noida hold software firms and consultancies. Their buyers want service lines, case studies and how an engagement works. We build sites that answer those questions for enterprise and overseas clients.",
              example:
                'IT resellers in Nehru Place, software firms in Noida and consultancies in Gurgaon.',
            },
            {
              name: 'Restaurants & Hotels',
              description:
                "From restaurant groups in South Delhi to hotels near the airport, diners and guests book on their phones. We build menus, table and event booking, and local pages for dining searches, all tuned for mobile.",
              example:
                'Restaurant groups, cafés, banquet halls and hotels across Delhi NCR.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Clients on building with FactoryJet"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions Delhi Businesses Ask Us"
          lead="Cost, timing, hosting, ownership and Delhi-specific questions, answered directly."
          categories={DEL_FAQ_CATEGORIES}
          items={DEL_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Delhi Website Now"
          sub="Send your brief and you will have a page plan within 72 hours, then a fixed quote. Seven days after kickoff your Delhi site can be live, quick on any phone and set up for search."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed quote, 7-day delivery, Next.js, and your code in your GitHub on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="delhi" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
