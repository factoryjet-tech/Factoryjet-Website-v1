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
  title: 'Web Design Company in Mumbai | FactoryJet',
  description:
    'Web design company in Mumbai for exporters, BFSI firms and D2C brands. Custom Next.js sites in 7 days, fixed quote first, code handed over at launch.',
  keywords: [
    'web design company in Mumbai',
    'website design Mumbai',
    'web development company Mumbai',
    'website design company Mumbai',
    'professional website design Mumbai',
    'web design BKC Mumbai',
    'web design Andheri Mumbai',
    'B2B website design Mumbai',
    'ecommerce website design Mumbai',
    'Next.js web development Mumbai',
    'web design agency Mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Mumbai | FactoryJet',
    description:
      'Web design company in Mumbai building Next.js sites for BKC, Andheri, Lower Parel and Navi Mumbai firms. SEO and GA4 set up. 7-day delivery.',
    url: 'https://factoryjet.com/web-design/mumbai',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Website design for Mumbai businesses by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Mumbai | FactoryJet',
    description:
      'Mumbai website design with a fixed quote, 7-day delivery and full code ownership.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/mumbai',
    languages: webDesignCityAlternatesIN['mumbai'],
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
  '@id': 'https://factoryjet.com/web-design/mumbai#webpage',
  url: 'https://factoryjet.com/web-design/mumbai',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const MUMBAI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer map and sitemap',
    description:
      "Who decides on your site? A sourcing manager in Rotterdam checking a SEEPZ jeweller, a shopper in Thane on her phone, or a compliance head at a BKC NBFC. We name that person, study three rival sites they will also open, and lock the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Figma screens',
    description:
      'Phone layouts come first at 375px, then tablet and 1440px desktop. You click through the prototype, comment on each screen and sign off. Code only starts after that sign-off.: Days 3–4',
  },
  {
    number: '03',
    title: 'Build on Next.js',
    description:
      'Static Next.js pages go out through the Cloudflare network so they open fast on a local train 4G signal. Enquiry forms, WhatsApp buttons, booking tools and any CRM or ERP link you already run are wired in here.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy, schema and search setup',
    description:
      'Page copy is tightened, images go to WebP, and each page gets its own meta title. We add LocalBusiness and FAQPage schema, link pages to each other and send the sitemap to Search Console. Mumbai area targeting is part of the base build.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go-live and training',
    description:
      'We move DNS to Cloudflare, connect GA4 and Tag Manager, and verify Search Console. You get a recorded walkthrough of the code and CMS, plus 30 days of post-launch fixes.: Day 7+',
  },
];

const MUMBAI_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Mumbai Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const MUMBAI_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Mumbai business?',
    answer:
      "There is no rate card. Cost moves with page count, how crowded your search terms are, and extras such as a product catalogue, payments or an AI enquiry assistant. After one free call you receive a fixed written quote. The finished code belongs to you.",
  },
  {
    category: 'pricing',
    question: 'How quickly can my Mumbai website go live?',
    answer:
      'Most builds launch 7 days after kickoff. Days one and two cover research and layout, days three to six cover screens and code, and day seven is copy, SEO checks and launch. Day one is the day your logo, photos and text arrive in the shared folder.',
  },
  {
    category: 'pricing',
    question: 'Why would a Mumbai firm pick FactoryJet over a big agency?',
    answer:
      "Big Mumbai agencies carry account managers, pitch teams and expensive floor space, and that cost lands in your quote. FactoryJet is a small engineering team. You still get Figma design, Next.js code and a Lighthouse check before launch, and you only pay for that work.",
  },
  {
    category: 'pricing',
    question: 'What exactly is covered by 7-day delivery?',
    answer:
      'The seven days cover the work in our hands: design, code, content setup and launch. If sign-off on your side needs more time, we fix a new start date together and the seven days run from there. We have delivered on time on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: 'Which deliverables do I get at the end?',
    answer:
      'You get a page plan, Figma screens, the Next.js build, starter copy, schema and sitemap setup, GA4 tracking and 30 days of fixes. On launch day the code lands in your GitHub, along with the Figma file and a recorded walkthrough.',
  },
  {
    category: 'included',
    question: 'Who writes the words on the site?',
    answer:
      'We write headlines, the hero block and short service blurbs. Longer SEO pages, blog posts and area pages can be added for an extra fee. Before the build, you get a brief that lists what we need from you and what we will draft.',
  },
  {
    category: 'included',
    question: 'Where is the site hosted, and who pays?',
    answer:
      "The site runs on Cloudflare Pages, and most static builds sit inside its free plan. The Cloudflare account is opened in your name and we set it up. Nothing is parked on a crowded shared server, and FactoryJet charges no hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my staff edit pages without a developer?',
    answer:
      'Yes. Growth and Custom tier builds come with a headless CMS (Sanity or Contentful), so staff can post news, swap photos and edit service text in a browser. We set it up and show you how in the handover. Starter tier sites are edited through a simple pull request, or we can add a CMS on request.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the new site show up on Google for Mumbai searches?',
    answer:
      'Every build ships with schema markup, unique titles and meta descriptions, passing Core Web Vitals on mobile, internal links, a sitemap in Search Console and WebP images with alt text. Searches for your brand name usually show the site within 1–2 weeks. A phrase like "web design company in Mumbai" takes 3–6 months for a fresh domain, and the groundwork for it is already in place.',
  },
  {
    category: 'technical',
    question: 'Why Next.js instead of a WordPress theme?',
    answer:
      "Next.js outputs ready-made pages that Cloudflare serves from the edge, so there is no PHP or database to wait on, and pages open under 1.5 seconds on Indian 4G. A plugin-heavy WordPress theme does more work on every visit. Google measures that speed through Core Web Vitals, so the faster site starts ahead.",
  },
  {
    category: 'technical',
    question: 'How will the site behave on a phone?',
    answer:
      'Screens are drawn for a 375px phone first. Before handover each build has to reach Lighthouse 90+ and pass Core Web Vitals on mobile. Images are WebP and load lazily, and buttons are sized for a thumb. Most Mumbai visitors arrive on a phone, often on a patchy signal, so we test there first.',
  },
  {
    category: 'technical',
    question: 'Is tracking set up before launch?',
    answer:
      'Yes. GA4 and Google Tag Manager go live with the site, and form sends, WhatsApp taps and call clicks are logged as conversions from the first day. Search Console is verified with the sitemap submitted, and the handover covers how to read both.',
  },

  /* ── Mumbai Local ── */
  {
    category: 'local',
    question: 'Do you design sites for exporters in SEEPZ, Bhiwandi and MIDC?',
    answer:
      "Yes. For export firms the site works as a sales file for overseas buyers. We build product catalogues with downloadable spec sheets, show certifications and export codes clearly, add RFQ forms, and target the English searches buyers in the US, UK, UAE and EU type when they shortlist suppliers.",
  },
  {
    category: 'local',
    question: 'Can you build for NBFCs, brokers and fintech firms around BKC?',
    answer:
      "Yes. BKC holds SEBI, the NSE and a long list of bank and fintech offices, and buyers there check a firm closely before they call. We build pages that show registration numbers and licences up front, answer due-diligence questions in plain text, use financial services schema, and give enquiry forms that suit a slow, multi-person decision.",
  },
  {
    category: 'local',
    question: "Will the copy reflect where my customers are in Mumbai?",
    answer:
      "Yes. Discovery covers the parts of the city your buyers search from: the BKC and Nariman Point finance belt, Lower Parel offices, Andheri East and SEEPZ, Powai, Thane and the Belapur side of Navi Mumbai. Those areas go into the copy and into areaServed in your schema, which helps on searches that name a suburb.",
  },
  {
    category: 'local',
    question: 'How do you differ from a typical Mumbai web agency?',
    answer:
      "Many agencies quote after weeks of meetings and deliver over several months. We quote a fixed price first, write the 7-day delivery date into the agreement and build on Next.js. The result is a quicker launch, a faster site and code you can take anywhere.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Who owns the code and design files?',
    answer:
      'You do. On launch day the Next.js repository moves to your GitHub, with every file, the Figma designs and all API keys. Any developer or host can pick it up later. The site keeps running with no FactoryJet contract and no locked platform.',
  },
  {
    category: 'support',
    question: 'What help do I get once the site is live?',
    answer:
      'The first 30 days after launch are covered: bug fixes, small tweaks and questions, at no charge. After that you can move to a monthly maintenance plan with same-day priority on bugs, an engineer who already knows your code, and a quarterly speed and Core Web Vitals review.',
  },
  {
    category: 'support',
    question: 'If the site breaks, how fast is it fixed?',
    answer:
      'During the first 30 days, bugs are fixed free, usually inside 24 hours. After that a maintenance plan gives you priority. Static files on Cloudflare Pages remove the usual causes of outages, such as a crashed server, a plugin clash or a failed database.',
  },
  {
    category: 'support',
    question: 'Can we keep FactoryJet on a monthly plan?',
    answer:
      'Yes. A monthly plan covers new features, content edits, fresh landing pages, SEO work and upkeep. Plan clients get first place in the schedule, a named engineer and a quarterly health report on the site.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'How do I choose the best web design agency in Mumbai?',
    answer:
      'Run every shortlisted website design company in Mumbai through three tests. Open sites they have shipped and use them on your phone. Check their speed scores yourself in PageSpeed Insights. Ask for a fixed written price that cannot creep up mid-project. FactoryJet offers custom sites in 7 days with that fixed price, and we are happy to be tested the same way.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Mumbai as a freelancer or go to a team?',
    answer:
      'For a single landing page, a freelancer may be enough. A business site needs design, code, SEO and support, and a small senior team covers all four on one fixed price. If you hire web designer in Mumbai on your own, put the scope, deadline and price in writing before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MUMBAI_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const MUMBAI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Mumbai Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const MUMBAI_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Design drawn in Figma for you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built on Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema, sitemap and meta included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse score of 90+',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Analytics and Tag Manager set up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price fixed before work starts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code handed to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch in a week',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/mumbai#howto`,
  name: `Mumbai website build plan: seven days from brief to launch`,
  description: `The day-by-day steps FactoryJet follows to design, code and launch a fast website for a Mumbai company.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Brief and buyer',
      text: `We go through what you sell, who buys it in and around Mumbai, and which action the site must drive.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Page plan and keywords',
      text: `We draft the sitemap, review the Mumbai sites you compete with, choose target search terms and write first-pass copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Screen design',
      text: 'Home and inner page screens are drawn in Figma and shared as a clickable link. Your comments are worked in within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search setup',
      text: `The signed-off screens are coded mobile first. Schema with Mumbai service areas goes in, and GA4 plus Search Console are linked.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Go-live',
      text: 'We test on five devices, launch, and hand over written notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/mumbai#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/mumbai`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function MumbaiWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="mumbai-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="mumbai-faq-schema"
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
          { name: 'Mumbai', url: 'https://factoryjet.com/web-design/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Mumbai', url: 'https://factoryjet.com/web-design/mumbai' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_mumbai_hero" />}
          eyebrow="WEB DESIGN · MUMBAI"
          headline="Website Design in Mumbai for Exporters, Finance Firms and D2C Brands"
          lead="A Mumbai buyer might be a jewellery importer checking a SEEPZ supplier, a compliance team vetting a BKC fintech, or a Bandra shopper deciding in seconds. Each needs a different site. FactoryJet designs in Figma, builds on Next.js, launches in 7 days, and hands you the full code."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses have launched sites with FactoryJet in India, the US, the UK and the UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="From Mumbai wholesalers to US Shopify brands, our builds cover B2B portals, D2C stores and service sites. Each one starts with a fixed price, ships in 7 days and ends with the code in the client's own account."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="MUMBAI MARKET"
          headline="What a Website Has to Do in Mumbai"
          leadParagraphs={[
            "Mumbai is where India's money sits. SEBI and the National Stock Exchange are in Bandra-Kurla Complex, the BSE is on Dalal Street, and the Reserve Bank's head office is in Fort. Around them work banks, insurers, brokers and the advisers who serve them. North of the island, SEEPZ in Andheri East exports gems and jewellery, Zaveri Bazaar trades gold, and Bhiwandi's warehouses feed retail stock across western India. Jawaharlal Nehru Port in Navi Mumbai moves a large share of the country's container cargo.",
            "Each of these buyers reads a website differently. A jewellery importer wants hallmark and certification details. A fund distributor in BKC needs to show SEBI registration before anyone fills a form. A café in Bandra needs a menu, map and booking button that load on a weak signal. So the page plan, proof points and call to action change with the business, and we settle them before any design work.",
            "Search results in Mumbai are crowded for almost every service. The firms that pick up enquiries tend to have pages that load quickly on a phone, answer the obvious buyer questions in plain text, and make the next step easy. Those three things are what we build for.",
          ]}
          stats={[
            {
              value: '₹21L Cr+',
              label: "Mumbai's yearly economic output, the largest of any Indian city",
              sourceUrl: 'https://mospi.gov.in/web/mospi/statistical-year-book-india',
              sourceLabel: 'MoSPI Statistical Year Book',
            },
            {
              value: '2.5L+',
              label: 'Companies registered in Mumbai, more than in any other Indian city',
              sourceUrl: 'https://www.mca.gov.in/',
              sourceLabel: 'Ministry of Corporate Affairs',
            },
            {
              value: '20M+',
              label: 'People living across the Mumbai Metropolitan Region',
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census India',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · MUMBAI"
          headline="Two Kinds of Mumbai Buyer, Two Kinds of Website"
          lead="Some Mumbai buyers spend weeks comparing suppliers before one call. Others decide on a phone in a few seconds. A site has to be built for the one you sell to, and many firms need both paths on the same domain."
          body={
            <>
              <p>
                Exporters, manufacturers and finance firms in SEEPZ, MIDC Andheri, BKC and
                Nariman Point sell to cautious buyers. An importer in Europe or a procurement
                head in Dubai will read your site several times before writing. They look for
                certificates, plant capacity, product specs and named compliance steps. We
                structure these sites around proof: catalogue pages with spec downloads,
                certification blocks and RFQ forms that ask for the details your sales team
                needs, so a long B2B
                cycle starts with a qualified lead.
              </p>
              <p>
                Brands, restaurants, salons and clinics in Bandra, Andheri West, Lower Parel
                and Powai face the opposite buyer. A visitor taps through from Instagram or
                Google Maps and decides almost at once. The page must open under 1.5 seconds
                on 4G, show the product or service straight away and put the booking or buy
                button within reach of a thumb. We draw these screens at 375px first and
                check Lighthouse 90+ before launch.
                For a full online shop, read about our{' '}
                <a href="/services/ecommerce-development/mumbai" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">ecommerce development in Mumbai</a>{' '}
                covering fashion catalogues, outlet stock sync and Bhiwandi warehouse links.
              </p>
              <p>
                Either way, a Mumbai project includes research, Figma screens, Next.js code,
                SEO setup, GA4 and 30 days of support. The code, design files and accounts
                stay with you after launch.
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
                  Where Mumbai buyers sit
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Export & finance',
                    need: 'Proof, specs and an RFQ path',
                    area: 'SEEPZ · MIDC · BKC · Nariman Point',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Shoppers & walk-ins',
                    need: 'Fast load, phone layout, one clear button',
                    area: 'Bandra · Andheri · Lower Parel · Powai',
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
                  One build standard, shaped around who is buying.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="How FactoryJet Works With Mumbai Companies"
          lead="You get a fixed quote before any commitment, a launch date written into the agreement and a Next.js site that needs no plugin updates. The code is yours from launch day. If the scope stays the same, the price stays the same."
          pillars={[
            {
              icon: '⚡',
              title: 'A launch date you can plan around',
              body: "Product launches, trade fairs and festival sales in Mumbai run on fixed dates. A site that arrives four months after the brief misses them. We commit to 7 days and put that date in the agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Static pages that load fast',
              body: 'A WordPress page usually runs PHP and many database queries on every visit. A Next.js build is prepared in advance and served as static files from Cloudflare. On Indian 4G that means under 1.5 seconds against the 4–6 seconds common on WordPress, and Google counts that speed in Core Web Vitals.',
            },
            {
              icon: '📋',
              title: 'One price, written down',
              body: "The quote arrives before you sign and does not change unless the scope does. There is no paid discovery phase and no invoice waiting after launch. You also do not need a retainer to keep the site online.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Seven Days From Brief to a Live Mumbai Website"
          lead="We agree the buyer first, sign off phone screens next, and set up tracking and search before the site goes public."
          stages={MUMBAI_JOURNEY_STAGES}
          closingNote="BRIEF · FIGMA · NEXT.JS BUILD · SEO + GA4 · LAUNCH ON DAY 7"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two builds for Indian B2B firms"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison sells artificial plants, flowers, flower runners, home décor and LED lighting to trade buyers from Mumbai. We built its B2B store on Commerceflo so buyers see their own trade price tier, raise a quote that turns into an order, and reorder from their account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts does MEP drafting and BIM consulting. We rebuilt its site on WordPress so project enquiries arrive with context: credentials up front, a project portfolio, and technical SEO aimed at engineering searches across India.',
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
          headline="Mumbai Web Design Options Side by Side"
          lead="A Mumbai business can hire an agency, a freelancer, a template builder or FactoryJet. This table sets out timing, what is included and what you own at the end."
          pullQuote={{
            stat: '7 days',
            caption:
              'to go from brief to launch, with Figma design, Next.js code, schema and a Lighthouse check included.',
          }}
          columns={MUMBAI_COMPARISON_COLUMNS}
          rows={MUMBAI_COMPARISON_ROWS}
          footer="Every scope gets a fixed price. Book a free call and the written quote follows."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="MUMBAI × WEB DESIGN"
          headline="Mumbai Sectors We Design For"
          lead="Gem exporters, NBFCs, fashion labels, developers, pharma firms and law practices all sell in Mumbai, and each needs a different site."
          sectors={[
            {
              name: 'Exporters & Manufacturers',
              description:
                "SEEPZ in Andheri East is known for gem and jewellery exports, and MIDC estates around the city make engineering goods, chemicals and garments. Overseas buyers want to see certifications, capacity and product specs before they ask for a price. We build catalogue pages, spec sheet downloads and RFQ forms for that.",
              example:
                'SEEPZ jewellers, MIDC Andheri units and Bhiwandi or Thane plants selling to the US, EU, UAE and South-East Asia.',
            },
            {
              name: 'Banking, Broking & Fintech',
              description:
                "BKC is home to SEBI and the NSE, with banks, brokers and fintech firms around them. Their sites have to show registrations and licences clearly, explain products in plain words and handle enquiries that pass through several people. We add financial services schema and forms that collect the right details.",
              example:
                'Fintech teams in Powai and Andheri, wealth advisers, insurtech firms and the service providers that work with BKC finance houses.',
            },
            {
              name: 'Fashion, Beauty & D2C',
              description:
                "Bandra, Khar and Andheri West are full of fashion, beauty and food brands that sell direct. Their visitors arrive from Instagram on a phone and leave fast if nothing loads. We build for quick load, products shown straight away, Razorpay checkout and Instagram links.",
              example:
                'Clothing, skincare and gourmet labels in Bandra, Juhu, Khar and Andheri West shipping across India.',
            },
            {
              name: 'Property & Construction',
              description:
                "New projects keep launching in Thane, Navi Mumbai and the western suburbs. Buyers expect galleries, floor plans, RERA numbers and a quick way to reach sales. We build project pages that send each enquiry to the right sales desk and target the micro-market names people search.",
              example:
                'Housing developers in Thane and Navi Mumbai, office brokers around BKC and contractors working across the MMR.',
            },
            {
              name: 'Pharma & Healthcare',
              description:
                "Mumbai has a long list of drug makers, exporters, hospitals and diagnostic chains. Pharma buyers want product documents, regulatory details and a procurement-friendly enquiry path. Hospitals and clinics need doctor profiles, appointment booking and local search pages.",
              example:
                'Drug exporters in Andheri and Malad, hospital groups, lab chains and health software firms.',
            },
            {
              name: 'Law, Audit & Consulting',
              description:
                "CA firms, law chambers, consultants and HR agencies in Mumbai compete for the same corporate clients. A prospect decides from the website whether the firm is worth a call. We build sites with clear practice pages, partner credentials, case notes and booking forms.",
              example:
                'CA and CS practices, corporate lawyers in Fort and Nariman Point, consultancies and HR firms serving Mumbai companies.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on working with FactoryJet"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions Mumbai Businesses Ask Us"
          lead="Price, timing, hosting, ownership and Mumbai-specific questions, with direct answers."
          categories={MUMBAI_FAQ_CATEGORIES}
          items={MUMBAI_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Mumbai Website This Week"
          sub="Send us your brief and we will return a page plan within 72 hours, followed by a fixed quote. Seven days after kickoff your Mumbai site can be live, fast on a phone and set up for search."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Written price, 7-day delivery, Next.js build, and the code in your GitHub at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="mumbai" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
