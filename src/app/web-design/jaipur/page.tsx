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
  title: 'Web Design Company in Jaipur | FactoryJet',
  description:
    'Web design company in Jaipur for jewellers, gem exporters, block-print brands and heritage hotels. Next.js websites with 7-day delivery.',
  keywords: [
    'web design company in Jaipur',
    'website design Jaipur',
    'web development company Jaipur',
    'website design company Jaipur',
    'professional website design Jaipur',
    'web design Malviya Nagar',
    'web design C-Scheme',
    'jewellery website design Jaipur',
    'handicraft website design Jaipur',
    'tourism website design Jaipur',
    'Next.js web development Jaipur',
    'web design agency Jaipur',
    'Jaipur Pink City website design',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Jaipur | FactoryJet',
    description:
      'Web design company in Jaipur building Next.js sites for jewellers, craft exporters and hotels. SEO and GA4 set up, live in 7 days.',
    url: 'https://factoryjet.com/web-design/jaipur',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design for Jaipur jewellers, exporters and hotels',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Jaipur | FactoryJet',
    description:
      'Web design company in Jaipur. Next.js sites for jewellers and exporters, live in 7 days.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/jaipur',
    languages: webDesignCityAlternatesIN['jaipur'],
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
  '@id': 'https://factoryjet.com/web-design/jaipur#webpage',
  url: 'https://factoryjet.com/web-design/jaipur',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const JPR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Know the buyer',
    description:
      "First we pin down who opens your site. A gem buyer from Bangkok or New York, a couple planning a haveli stay, and a shopper on MI Road all want different things. We look at the Jaipur sellers they compare you with and fix the page list before any design.: Days 1–2",
  },
  {
    number: '02',
    title: 'Draw the pages',
    description:
      'Phone screens come first at 375px, then the desktop version at 1440px. Every product grid, enquiry form and booking button is checked against the one action you want. You sign off before coding begins.: Days 3–4',
  },
  {
    number: '03',
    title: 'Code the site',
    description:
      'We code in Next.js and serve pages from Cloudflare, so they open in under 1.5s on Indian 4G even with large jewellery photos. Catalogues, zoomable galleries, WhatsApp buttons and any outside tools you use are wired in during this stage.: Days 5–6',
  },
  {
    number: '04',
    title: 'Search groundwork',
    description:
      'We tighten the copy, convert photos to WebP, add meta tags, LocalBusiness and FAQPage schema and internal links, then submit the sitemap. Pages are set up for the Jaipur and export searches your buyers type.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch day',
    description:
      'DNS moves to Cloudflare, GA4 and GTM go live, and Search Console is verified. You get a recorded tour of how to run the site and 30 days of free fixes.: Day 7+',
  },
];

const JPR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Budget and timing' },
  { key: 'included',  label: "What you get" },
  { key: 'technical', label: 'Tech and search' },
  { key: 'local',     label: 'Pink City questions' },
  { key: 'support',   label: 'After launch' },
];

const JPR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a Jaipur business?',
    answer:
      "Each quote is built from your page count, how crowded your search terms are, and extras such as a store, a booking engine or an AI chat. After a free call you get one fixed price in writing, and the code is yours when we finish.",
  },
  {
    category: 'pricing',
    question: 'How quickly can my site go live?',
    answer:
      'In seven days from kickoff. Buyer work and screens take days one and two, coding runs from day three to six, and search setup plus launch happen on day seven. The count starts once your photos, logo and product details are in the shared folder.',
  },
  {
    category: 'pricing',
    question: 'Why choose FactoryJet over a Jaipur agency?',
    answer:
      "One small team of engineers handles your project end to end, without account managers or a big office in the fee. You still get Figma screens, Next.js code and a Lighthouse check before launch, priced for the work done.",
  },
  {
    category: 'pricing',
    question: 'What does the 7-day window cover?',
    answer:
      'It covers the work in our hands: design, code, copy and launch. We have met the agreed date on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What is part of a website project?",
    answer:
      'Buyer research, Figma screens, Next.js code, starter copy, schema and sitemap, GA4 tracking and 30 days of post-launch fixes. The complete code goes into your own GitHub on launch day.',
  },
  {
    category: 'included',
    question: 'Will you write the text for my site?',
    answer:
      'Yes for the basics: headlines, the opening block and service or collection summaries. Long SEO articles are an add-on. We send a short list of what we need from you before the build starts.',
  },
  {
    category: 'included',
    question: 'Do you host the website?',
    answer:
      "We put it on Cloudflare Pages, which is free for most business sites. The account is in your name, we do the setup, and we bill no monthly hosting.",
  },
  {
    category: 'included',
    question: 'Can my staff add products or edit pages?',
    answer:
      'Yes. Growth and Custom tier builds include a headless CMS, Sanity or Contentful, so your staff can add new designs, change prices on enquiry pages or update text without a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can a Jaipur website rank on Google India?',
    answer:
      'Each build ships with JSON-LD schema, title and meta templates, green Core Web Vitals on phones, internal links, WebP images and a submitted XML sitemap. Searches for your brand name usually find the site within 1–2 weeks.',
  },
  {
    category: 'technical',
    question: 'Which technology do you use?',
    answer:
      "Next.js on Cloudflare's CDN. Pages open in under 1.5s on Indian 4G, against 4–6s for a typical WordPress site. Jewellery and hotel sites carry heavy photos, so that speed decides whether a buyer waits for the gallery or leaves.",
  },
  {
    category: 'technical',
    question: 'How does it look and load on a phone?',
    answer:
      'We design the phone version first at 375px. Images are WebP and lazy-loaded through Cloudflare, and every build aims for Lighthouse 90+ with green Core Web Vitals on mobile before it goes live.',
  },
  {
    category: 'technical',
    question: 'Will I know where enquiries come from?',
    answer:
      'Yes. GA4 and Google Tag Manager are live before launch, with form sends, WhatsApp taps and product enquiry clicks tracked from day one. Search Console is verified and the sitemap submitted.',
  },

  /* ── Jaipur Local ── */
  {
    category: 'local',
    question: 'Do you build sites for Jaipur jewellers and gemstone exporters?',
    answer:
      "Yes, and this is the most common Jaipur brief we see. Coloured gemstone cutting and jewellery making are the city's best known trades, centred on Johri Bazaar and the Sitapura area. We build catalogues with stone and metal details, hallmark and certification sections, and RFQ forms for wholesale buyers in the US, Europe and the Gulf.",
  },
  {
    category: 'local',
    question: 'Can you build websites for Jaipur hotels and tour operators?',
    answer:
      "Yes. Jaipur sits on the Golden Triangle with Delhi and Agra and drew 5M+ tourists a year by the figure on this page. Havelis, boutique hotels and tour firms need direct booking, room and tour galleries, content in more than one language and pages that rank for overseas travel searches.",
  },
  {
    category: 'local',
    question: "Will the copy mention the parts of Jaipur my buyers know?",
    answer:
      "Yes. Discovery covers the areas tied to your trade: Johri Bazaar and Sitapura for gems, Sanganer and Bagru for hand block printing, MI Road and C-Scheme for retail and offices, Malviya Nagar for IT firms, and Amer Road for heritage stays. Named areas in copy and LocalBusiness schema help local searches.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from other Jaipur web firms?',
    answer:
      "Many firms in the city take months and share a price only after several meetings. We send a fixed quote first, write the 7-day launch date into the agreement and build in Next.js. The site is faster, it arrives sooner and you own the code.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Will I own my website?',
    answer:
      'Fully. On launch day the Next.js code goes into your GitHub, with all Figma files and API keys. There is no retainer to sign and no platform holding your site.',
  },
  {
    category: 'support',
    question: 'What happens after the site is live?',
    answer:
      'For 30 days, bug fixes and small changes are free. After that, a monthly plan gives you development hours, same-day priority on bugs and one engineer who knows your code, plus a quarterly speed and Core Web Vitals review.',
  },
  {
    category: 'support',
    question: 'What if something stops working?',
    answer:
      'During the 30-day window we fix bugs at no charge, usually inside 24 hours. Because the site is static files on Cloudflare Pages, plugin clashes and server outages do not apply.',
  },
  {
    category: 'support',
    question: 'Can we hire you monthly for a Jaipur business?',
    answer:
      'Yes. Monthly plans cover new pages, product and content updates, SEO work and upkeep. Plan clients get first place in the queue and the same engineer each time.',
  },
  {
    category: 'support',
    question: 'Can my website bring in overseas buyers for Jaipur products?',
    answer:
      "Yes. Most Jaipur exporters we speak to want wholesale buyers from the US, UK, Europe and the UAE. We write English pages with export details, GJEPC membership where you hold it, international payment options and search targeting for phrases buyers use, such as wholesale gemstone jewellery from Jaipur.",
  },
  {
    category: 'pricing',
    question: 'Can I pay in parts?',
    answer:
      'Yes. Standard terms are half before we start and half at launch. Larger custom builds can be split into three milestone payments. We never ask for the full amount up front.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Jaipur?',
    answer:
      'The best web design company in Jaipur is the one whose work you can check. Open sites it has built, test their speed yourself, and get a price that stays fixed during the build. FactoryJet builds custom websites in 7 days at a written fixed price, and we welcome that check.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Jaipur or use an agency?',
    answer:
      'A freelancer can handle a one-page site. A business site needs design, code, SEO and support, which a small senior team delivers at one fixed price. If you hire web designer in Jaipur directly, agree the scope and fee in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: JPR_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const JPR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Typical Jaipur agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const JPR_COMPARISON_ROWS = [
  {
    feature: 'Time until launch',
    values: ['7 days', '4–12 weeks', '3–10 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Original Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Coded in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema and sitemap done',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '90+ Lighthouse on phones',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and GTM tracking',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed price before work',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Source code in your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Live within 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ja" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/jaipur#howto`,
  name: `How a Jaipur website goes live in 7 days`,
  description: `FactoryJet's seven-day plan for designing and launching a fast website for a Jaipur business.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | First call',
      text: `We learn what you sell, who buys it, and what the website must do for your Jaipur business.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Site plan',
      text: `We study the Jaipur sellers you compete with, choose target search terms, and draft the page list and first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Screens',
      text: 'Home and inner pages are designed in Figma and shared by preview link. Your notes are worked in within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Build and SEO',
      text: `Approved screens are coded for speed on phones. Jaipur local schema is added, with GA4 and Search Console connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Go live',
      text: 'We test on five devices, launch, and hand over written notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/jaipur#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/jaipur`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function JaipurWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="jpr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="jpr-faq-schema"
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
          { name: 'Jaipur', url: 'https://factoryjet.com/web-design/jaipur' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Jaipur', url: 'https://factoryjet.com/web-design/jaipur' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_jaipur_hero" />}
          eyebrow="WEB DESIGN · JAIPUR"
          headline="Website Design in Jaipur for Jewellers, Gem Exporters, Craft Brands and Heritage Hotels"
          lead="Jaipur sells to the world. Gem buyers check Johri Bazaar and Sitapura suppliers online, travellers book havelis from abroad, and boutiques order Sanganer prints by email. FactoryJet designs in Figma, codes in Next.js and launches your site in 7 days, and you receive all of the code."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE use sites we built" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="We have built for Shopify stores, B2B companies and DTC brands in India, the US, the UK and the UAE. Every client got a fixed price before work, a seven-day launch and the full code."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="JAIPUR BUYERS"
          headline="Who Buys from Jaipur, and What They Check First"
          leadParagraphs={[
            "Jaipur's economy rests on craft and travel. The city is one of the world's main centres for cutting coloured gemstones, with traders in Johri Bazaar and export units in the Sitapura area. Sanganer and nearby Bagru are known for hand block printing, and blue pottery is a Jaipur speciality. The walled Pink City is a UNESCO World Heritage Site, and Amer Fort and the palace hotels draw visitors all year.",
            "Each trade has its own reader. A wholesale gem buyer wants stone details, certifications and a quick way to ask for a quote. A boutique buyer in Europe wants to see print ranges, minimum orders and lead times. A traveller wants rooms, photos and a booking button. A single website rarely serves all three, so we pick the reader before we design anything.",
            "Jaipur also has a growing tech scene. Malviya Nagar holds many software firms, Mahindra World City hosts IT and export units, and the state's iStart programme backs new founders. These firms need product pages and demo forms, and they compete with Bengaluru and Pune startups for the same clients.",
          ]}
          stats={[
            {
              value: '5M+',
              label: 'Tourists visiting Jaipur each year, a stop on the Golden Triangle with Delhi and Agra',
              sourceUrl: 'https://tourism.rajasthan.gov.in/',
              sourceLabel: 'Rajasthan Tourism',
            },
            {
              value: '₹40,000 Cr+',
              label: "Jewellery export value linked to Jaipur, the country's largest jewellery making and export centre",
              sourceUrl: 'https://www.gjepc.org/',
              sourceLabel: 'GJEPC',
            },
            {
              value: '10,000+',
              label: 'Startups registered under iStart Rajasthan, with Jaipur at the centre of the state\'s tech scene',
              sourceUrl: 'https://istart.rajasthan.gov.in/',
              sourceLabel: 'iStart Rajasthan',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · PINK CITY"
          headline="What a Jaipur Website Has to Do"
          lead="Jaipur sites serve three readers: overseas wholesale buyers, travellers booking a stay, and local shoppers on phones. We build for the one that brings your revenue."
          body={
            <>
              <p>
                
                Jewellers, gem dealers and craft exporters sell to buyers who cannot touch the product. The site has to stand in for the showroom: clear photos, stone and metal details, hallmark and GJEPC information, minimum order sizes and an RFQ form that accepts a design reference. We structure catalogues so a buyer can filter by stone, style or price band and send one enquiry for several pieces.
              </p>
              <p>
                
                Havelis, boutique hotels and tour operators want direct bookings instead of paying commission on every room. We add a booking engine, room and experience galleries, pages in more than one language, and search targeting for travellers in the UK, US and Europe who plan trips months ahead.
              </p>
              <p>
                
                IT firms and startups in Malviya Nagar and Mahindra World City need a homepage that explains the product fast and a demo form that works. Every Jaipur build covers discovery, Figma screens, Next.js code, SEO, GA4 and 30 days of fixes, and the code is yours at the end.
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
                  
                  Three readers to plan for
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / Export & Trading',
                    need: 'Stone details, certificates, RFQ',
                    area: 'Johri Bazaar · Sitapura · Sanganer',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Direct booking, galleries, languages',
                    area: 'Amer Road · Walled City · Civil Lines',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'IT / D2C / Startup',
                    need: 'Product demo, fast pages',
                    area: 'Malviya Nagar · C-Scheme · Mahindra World City',
                    colour: '#8B5CF6',
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
                  
                  One build standard. Each plan fits its reader.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Jaipur Businesses Get from FactoryJet"
          lead="Jaipur agencies often need two or three months and quote only after several meetings. We send a fixed price first, put the 7-day launch date in the agreement and code in Next.js, so pages open faster, there are no monthly plugin bills and you keep the code."
          pillars={[
            {
              icon: '⚡',
              title: 'Launch date in the agreement',
              body: "Trade fair season and the winter tourist rush will not wait ten weeks for a website. We launch in seven days and write that date into the contract. Across all projects we have met the agreed date 97% of the time.",
            },
            {
              icon: '🏗️',
              title: 'Next.js keeps photo-heavy pages quick',
              body: "WordPress runs PHP and 40–60 database queries for each page view. Next.js serves prebuilt pages from Cloudflare's CDN, so they load in under 1.5s on Indian 4G against 4–6s for typical WordPress. Jewellery and hotel galleries are heavy, and an overseas buyer will not wait for a slow one.",
            },
            {
              icon: '📋',
              title: 'Price fixed on day one',
              body: "You receive one fixed quote before work starts. There is no paid discovery and no extra invoice after launch for the agreed scope.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="THE SEVEN DAYS"
          headline="Your Jaipur Website, One Day at a Time"
          lead="Buyer agreed first, phone screens signed off second, search and tracking in place before launch."
          stages={JPR_JOURNEY_STAGES}
          closingNote="BUYER · SCREENS · NEXT.JS CODE · SEARCH SETUP · LIVE ON DAY 7"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two builds for Indian trade businesses"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison is a Mumbai wholesaler of artificial plants, flowers, flower runners, home décor and LED lighting. On Commerceflo we built its B2B store with trade price tiers, quotes that convert into orders, and account-based ordering for repeat buyers.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts works in MEP drafting and BIM consulting. We rebuilt its website on WordPress for B2B project enquiries, adding a credentials section, a project portfolio and technical SEO.',
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
          eyebrow="SIDE BY SIDE"
          headline="FactoryJet Against a Jaipur Agency, a Freelancer and a Site Builder"
          lead="Four routes to a website in Jaipur, set against each other on launch time, build quality, price certainty and code ownership."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch, with Figma screens, Next.js code, schema setup and a Lighthouse check that larger agencies spread over months.',
          }}
          columns={JPR_COMPARISON_COLUMNS}
          rows={JPR_COMPARISON_ROWS}
          footer="Any scope can be priced as a fixed contract. You see the figure after a free call and before you commit."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="JAIPUR TRADES"
          headline="Website Design for Jaipur's Main Trades"
          lead="Gems and jewellery, printed textiles, heritage tourism, IT, retail and property each sell to a different buyer, so each needs a different first screen."
          sectors={[
            {
              name: 'Gems and Jewellery',
              description:
                "Jaipur is best known for cutting coloured stones and making jewellery for export. Buyers in the US, Europe, the Gulf and East Asia shortlist suppliers online. Sites need filterable catalogues, stone and metal details, BIS hallmark and GJEPC information, and RFQ forms for wholesale orders.",
              example:
                'Jewellery makers, gem cutters and wholesale dealers in Johri Bazaar, Sitapura and along Sirsi Road.',
            },
            {
              name: 'Block Prints and Handicrafts',
              description:
                "Sanganer and Bagru hand block printing, blue pottery, quilts and leather goods go to boutiques and home stores abroad. These sellers need range pages, production lead times, custom order options and enquiry forms in clear English for overseas buyers.",
              example:
                'Printing units in Sanganer and Bagru and craft exporters across Jaipur selling to boutique buyers in the US and Europe.',
            },
            {
              name: 'Heritage Hotels and Travel',
              description:
                "Jaipur drew 5M+ tourists a year by the Rajasthan Tourism figure above. Havelis, palace hotels and tour firms need direct booking engines, galleries, content in several languages and travel search pages, plus WhatsApp booking for guests from within India.",
              example:
                'Havelis, boutique and palace hotels, tour operators and experience hosts around the walled city and Amer.',
            },
            {
              name: 'IT and Startups',
              description:
                "Malviya Nagar has long held Jaipur's software firms, and Mahindra World City hosts IT units. iStart Rajasthan lists 10,000+ registered startups. Founders need homepages that explain the product, proof of customers, demo forms and pages that stay fast as they grow.",
              example:
                "Software firms, SaaS startups and fintech founders in Malviya Nagar, C-Scheme and Mahindra World City.",
            },
            {
              name: 'Retail and D2C',
              description:
                "MI Road and C-Scheme carry the city's main shops, and many Jaipur labels sell printed clothing, home décor and spices online. D2C sites need fast product pages, Razorpay checkout, Shiprocket shipping and pages that reach NRI buyers.",
              example:
                'Fashion labels, home décor brands and food sellers in Jaipur reaching shoppers across India and NRI buyers abroad.',
            },
            {
              name: 'Property and Construction',
              description:
                "Mansarovar, Vaishali Nagar, Jagatpura and the Ajmer Road side see steady new housing, and commercial projects follow the Delhi road. Developers and brokers need project galleries, floor plans, RERA numbers and call-back forms that reach sales quickly.",
              example:
                'Developers, brokers and builders working across Jaipur and the Delhi–Jaipur corridor.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on their new FactoryJet websites"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="JAIPUR FAQ"
          headline="Jaipur Website Questions, Answered"
          lead="What Jaipur jewellers, hoteliers and founders ask before they sign, with direct answers."
          categories={JPR_FAQ_CATEGORIES}
          items={JPR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Jaipur Website This Week"
          sub="Overseas gem buyers, boutique stores and travellers all look you up before they write. Book a call, and within 72 hours you will have a page plan and a fixed price for a site that goes live seven days after kickoff."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="One fixed price. Live in 7 days. Coded in Next.js. Every line of code handed over at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="jaipur" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
