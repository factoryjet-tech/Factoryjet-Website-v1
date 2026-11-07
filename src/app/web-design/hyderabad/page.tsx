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
  title: 'Web Design Company in Hyderabad | FactoryJet',
  description:
    'Web design company in Hyderabad for IT services firms, pharma and biotech makers, and city retailers. Next.js websites, live in 7 days.',
  keywords: [
    'web design company in Hyderabad',
    'website design Hyderabad',
    'web development company Hyderabad',
    'website design company Hyderabad',
    'professional website design Hyderabad',
    'web design HITEC City',
    'web design Gachibowli',
    'IT company website design Hyderabad',
    'pharma website design Hyderabad',
    'Next.js web development Hyderabad',
    'web design agency Hyderabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Hyderabad | FactoryJet',
    description:
      'Web design company in Hyderabad building Next.js sites for HITEC City IT firms and Genome Valley pharma. SEO and GA4 set up, 7-day delivery.',
    url: 'https://factoryjet.com/web-design/hyderabad',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design for Hyderabad IT, pharma and retail firms',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Hyderabad | FactoryJet',
    description:
      'Web design company in Hyderabad. Next.js sites for IT and pharma firms, live in 7 days.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/hyderabad',
    languages: webDesignCityAlternatesIN['hyderabad'],
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
  '@id': 'https://factoryjet.com/web-design/hyderabad#webpage',
  url: 'https://factoryjet.com/web-design/hyderabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const HYD_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Reader and rival check',
    description:
      "We start with the person who will judge your site. That might be a vendor manager in New Jersey shortlisting HITEC City partners, a quality head checking a Genome Valley supplier, or a shopper in Banjara Hills on a phone. We open the sites they will compare you with and settle the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Figma layouts',
    description:
      'Layouts start on a 375px phone frame and grow to 1440px. Each block is tested against the action you need, such as an RFP, a dossier request or a table booking. Code waits until you approve the layouts.: Days 3–4',
  },
  {
    number: '03',
    title: 'Engineering',
    description:
      'We write the site in Next.js and serve it through Cloudflare, so pages open in under 1.5s on Indian 4G. Forms, WhatsApp, booking flows and the third-party tools you already pay for are connected now, and page weight is checked on every commit.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy and search',
    description:
      'Copy is edited, images go to WebP, and pages receive meta tags, LocalBusiness and FAQPage schema and internal links. The sitemap goes to Search Console, and we target the Hyderabad searches your buyers make.: Day 6–7',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'We point DNS at Cloudflare, switch on GA4 and GTM and verify Search Console. You receive a recorded admin walkthrough and 30 days of free fixes.: Day 7+',
  },
];

const HYD_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Price and schedule' },
  { key: 'included',  label: "Deliverables" },
  { key: 'technical', label: 'Code, speed, SEO' },
  { key: 'local',     label: 'Hyderabad and Cyberabad' },
  { key: 'support',   label: 'Ownership and care' },
];

const HYD_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a business website cost in Hyderabad?',
    answer:
      "We price each job on its own: number of pages, how hard your search terms are, and add-ons such as a store, booking or an AI assistant. A free call ends with one fixed figure in writing. The code stays with you.",
  },
  {
    category: 'pricing',
    question: 'How long until the site is live?',
    answer:
      'Seven days from kickoff. Days one and two cover research and layouts, days three to six cover engineering, and day seven covers search setup and launch. The clock begins once your logo, photos and content reach the shared folder.',
  },
  {
    category: 'pricing',
    question: 'Why use FactoryJet instead of a Hyderabad agency?',
    answer:
      "You deal with a small engineering team that does the work itself. There are no layers of account staff to pay for. Figma layouts, Next.js code and a Lighthouse audit before launch are all included, priced for the build.",
  },
  {
    category: 'pricing',
    question: 'What sits inside the 7-day delivery?',
    answer:
      'The seven days cover what we control: layouts, code, copy and launch. Our record across all projects is 97% delivered on the agreed date.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What does a project include?",
    answer:
      'Research, Figma layouts, Next.js code, starter copy, schema and sitemap, GA4 and 30 days of fixes after launch. The full code is moved to your GitHub when the site goes live.',
  },
  {
    category: 'included',
    question: 'Do you write the website copy?',
    answer:
      'Starter copy is included for headlines, the top section and service summaries. Long-form SEO content is an add-on. You get a brief before the build listing what we need from you.',
  },
  {
    category: 'included',
    question: 'Is hosting included?',
    answer:
      "The site runs on Cloudflare Pages, free for most static Next.js builds. We set up the account in your name, and there is no monthly hosting charge from us.",
  },
  {
    category: 'included',
    question: 'Can my team update the site?',
    answer:
      'Yes. Growth and Custom tier builds include a headless CMS, Sanity or Contentful, so your team can post blogs, change the people page and edit services without a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my site show up on Google India?',
    answer:
      'Every build includes JSON-LD schema, title and meta templates, green Core Web Vitals on phones, internal links, WebP images with alt text and a submitted XML sitemap. Brand searches usually find the site in 1–2 weeks. Service plus location terms take 3–6 months on a new domain.',
  },
  {
    category: 'technical',
    question: 'What stack do you use?',
    answer:
      "Next.js served from Cloudflare's CDN. Static pages open in under 1.5 seconds on Indian 4G, well ahead of a typical WordPress build. Google reads Core Web Vitals as a ranking signal, so that speed helps a Hyderabad firm in search.",
  },
  {
    category: 'technical',
    question: 'How fast is the site for visitors on Indian phones?',
    answer:
      'Phones come first. Layouts start at 375px, images are WebP and lazy-loaded through Cloudflare, and buttons are sized for thumbs. Each build aims for Lighthouse 90+ and green Core Web Vitals on mobile before launch.',
  },
  {
    category: 'technical',
    question: 'Can I track enquiries from the site?',
    answer:
      'Yes. GA4 and Google Tag Manager go live before launch, tracking form sends, WhatsApp taps and phone clicks from the first day. Search Console is verified and the sitemap submitted.',
  },

  /* ── Hyderabad Local ── */
  {
    category: 'local',
    question: 'Do you build websites for Hyderabad pharma and biotech companies?',
    answer:
      "Yes. Hyderabad is widely called India's bulk drug capital, and Genome Valley is its life sciences cluster. We write careful, regulation-aware copy, set up product and dossier sections for API and formulation exports, and build enquiry paths for institutional buyers. We work with firms in Genome Valley, Patancheru, IDA Nacharam and Mallapur.",
  },
  {
    category: 'local',
    question: 'Can you build for IT firms in HITEC City and Gachibowli?',
    answer:
      "Yes. HITEC City, Madhapur, Gachibowli and the Financial District hold a large share of the city's IT services firms, product companies and capability centres. These firms need capability pages, engagement models, case studies and an RFP path that an overseas vendor manager can scan quickly.",
  },
  {
    category: 'local',
    question: "Will the copy use the Hyderabad areas my buyers know?",
    answer:
      "Yes. Discovery covers the areas tied to your trade: HITEC City and the Financial District for tech, Genome Valley and Patancheru for pharma, Banjara Hills and Jubilee Hills for premium retail, Begum Bazaar for wholesale, and Secunderabad for older trading firms. Named areas help local searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet differ from other Hyderabad web firms?',
    answer:
      "Many firms here quote after several meetings and take months to build. We send a fixed price first, write the 7-day launch date into the agreement and code in Next.js. The result is a faster site, delivered sooner, with code that belongs to you.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the finished website?',
    answer:
      'Yes, completely. The Next.js code lands in your GitHub on launch day with every Figma file and API key. No retainer is required and you are not tied to any platform of ours.',
  },
  {
    category: 'support',
    question: 'What support comes after launch?',
    answer:
      'The first 30 days of bug fixes, small changes and launch questions are free. After that, a monthly plan gives you development hours, same-day priority on bugs and an engineer who already knows your code.',
  },
  {
    category: 'support',
    question: 'What if the site goes down?',
    answer:
      'In the 30-day window we fix bugs free, usually within 24 hours. The site is static files on Cloudflare Pages, so the usual causes of outages, such as server crashes, plugin clashes and database failures, do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer a monthly plan for Hyderabad firms?',
    answer:
      'Yes. Monthly plans cover new landing pages, content edits, SEO work and upkeep. Plan clients get priority in the queue and the same engineer each month.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Hyderabad?',
    answer:
      'The best web design company in Hyderabad is one you can verify. Ask for live sites to open, test their speed yourself, and insist the price stays fixed through the build. FactoryJet builds custom websites in 7 days at a written fixed price and is happy to be judged that way.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Hyderabad or use an agency?',
    answer:
      'A freelancer can manage a single page. A company website needs design, code, SEO and aftercare, and a small senior team gives you all four for one fixed price. If you hire web designer in Hyderabad yourself, write down the scope and fee before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HYD_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const HYD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Typical Hyderabad agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const HYD_COMPARISON_ROWS = [
  {
    feature: 'Weeks to launch',
    values: ['7 days', '8–16 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Bespoke Figma layouts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js codebase',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema and sitemap included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Phone Lighthouse 90 or above',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and GTM events',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price agreed up front',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code delivered to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Seven-day launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/hyderabad#howto`,
  name: `Seven days to a live Hyderabad website`,
  description: `How FactoryJet plans, designs and launches a fast website for a Hyderabad business in one week.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Intro call',
      text: `We learn what you sell in Hyderabad, who buys it, and what the website has to win.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Page map',
      text: `We review the Hyderabad firms you compete with, pick search terms and draft the page list and first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Layouts',
      text: 'Homepage and inner layouts are made in Figma and shared by link. Your notes are applied within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and SEO',
      text: `Approved layouts become fast Next.js pages. Hyderabad local schema is added and GA4 plus Search Console are linked.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'We test on five devices, go live, and hand over written notes with a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/hyderabad#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/hyderabad`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function HyderabadWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="hyd-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="hyd-faq-schema"
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
          { name: 'Hyderabad', url: 'https://factoryjet.com/web-design/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Hyderabad', url: 'https://factoryjet.com/web-design/hyderabad' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_hyderabad_hero" />}
          eyebrow="WEB DESIGN · HYDERABAD"
          headline="Website Design in Hyderabad for IT Services Firms, Pharma Makers and City Retailers"
          lead="Hyderabad exports two things at scale: software and medicines. 8,000+ IT and ITES firms work out of HITEC City and Gachibowli, and Genome Valley anchors the life sciences trade. FactoryJet designs in Figma, codes in Next.js and launches your site in 7 days, with every line of code handed to you."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE run on sites we built" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Shopify stores, B2B firms and DTC brands across India, the US, the UK and the UAE. Each got a fixed price before work started, a seven-day launch and the complete code."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="HYDERABAD BUYERS"
          headline="Who Judges a Hyderabad Company Online"
          leadParagraphs={[
            "Two industries shape Hyderabad's business web. HITEC City, Madhapur, Gachibowli and the Financial District hold the India offices of many global tech firms and a long tail of mid-size IT services and product companies. Genome Valley and the older industrial belts at Patancheru and IDA Nacharam host drug makers, bulk drug producers and biotech labs. T-Hub in the Knowledge City area supports a busy startup scene.",
            "Around them sits an older trading city. Begum Bazaar handles wholesale goods, the lanes near Charminar are known for pearls and bangles, and Banjara Hills and Jubilee Hills carry premium shops, clinics and restaurants. Each of these businesses has a different buyer, and each buyer looks for different proof on a website.",
            "So we plan the site around one reader. An IT firm's site is read by an overseas vendor manager who wants delivery models and case studies. A pharma maker's site is read by a quality or sourcing head who wants certificates. A Jubilee Hills restaurant's site is read on a phone by someone deciding where to eat tonight.",
          ]}
          stats={[
            {
              value: '8,000+',
              label: "IT and ITES companies across the Cyberabad corridor, per NASSCOM",
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '200+',
              label: 'Pharma and biotech companies in Genome Valley, per the Telangana government',
              sourceUrl: 'https://www.telangana.gov.in/',
              sourceLabel: 'Government of Telangana',
            },
            {
              value: '₹12L Cr+',
              label: "Estimated size of Hyderabad's economy, among the fastest growing large city economies",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · CYBERABAD"
          headline="What a Hyderabad Website Has to Do"
          lead="Hyderabad sites face three readers: overseas tech buyers who research for months, pharma procurement teams with strict checks, and phone users who decide in seconds. We build for the reader who pays you."
          body={
            <>
              <p>
                
                IT services firms, product companies and capability centres in HITEC City and Gachibowli sell to procurement teams in the US, Europe and Asia-Pacific. Those teams want the tech stack, engagement models, delivery locations, certifications and case studies with real scope. We set out capability pages so a vendor manager can tick boxes quickly, and we keep the RFP form short.
              </p>
              <p>
                
                Pharma and biotech firms in Genome Valley and IDA Nacharam face a buyer who must verify before ordering. Hospital buyers and overseas importers check GMP status, WHO-GMP or other approvals, product lists and capacity. We build product and document sections that answer those checks and route enquiries to the right person.
              </p>
              <p>
                
                Every Hyderabad build covers discovery, Figma layouts, Next.js code, SEO, GA4 and 30 days of fixes. You keep the code and the design files at the end.
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
                  
                  Two buyers, two site plans
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Enterprise',
                    need: 'Capability pages, case studies, RFP',
                    area: 'HITEC City · Gachibowli · Financial District',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Pharma & Biotech',
                    need: 'Certificates, product lists, enquiry routing',
                    area: 'Genome Valley · Patancheru · IDA Nacharam',
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
                  
                  One build standard. The plan follows the buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Hyderabad Firms Get from FactoryJet"
          lead="Hyderabad agencies often take months and share prices only after meetings. We give you a fixed price first, write the 7-day launch date into the agreement and code in Next.js, so pages load faster, there are no monthly plugin costs and the code is yours."
          pillars={[
            {
              icon: '⚡',
              title: 'Launch date written down',
              body: "A vendor review or a product launch does not wait three months for a website. We launch in seven days and put the date in the agreement. Across all projects we have hit the agreed date 97% of the time.",
            },
            {
              icon: '🏗️',
              title: 'Prebuilt pages beat WordPress on speed',
              body: 'WordPress runs PHP and 40–60 database queries per page view. Next.js pages are built ahead and served from Cloudflare\'s CDN, loading in under 1.5s on Indian 4G against 4–6s for typical WordPress. Google counts Core Web Vitals in ranking, so speed shows up in search.',
            },
            {
              icon: '📋',
              title: 'Fixed quote before work',
              body: "One fixed quote arrives before we start. There is no paid discovery phase and no surprise bill after launch for the agreed scope.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="THE SEVEN DAYS"
          headline="Your Hyderabad Website, Day by Day"
          lead="Reader agreed first, phone layouts approved second, search and tracking live before launch."
          stages={HYD_JOURNEY_STAGES}
          closingNote="READER · LAYOUTS · NEXT.JS · SEARCH · LIVE ON DAY 7"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds for Indian B2B companies"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison wholesales artificial plants, flowers, flower runners, home décor and LED lighting from Mumbai. We built its B2B ordering store on Commerceflo with trade price tiers, quote-to-order conversion and buyer accounts.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts provides MEP drafting and BIM consulting. We rebuilt its site on WordPress to bring in B2B project enquiries, with a credentials section, a project portfolio and technical SEO.',
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
          headline="FactoryJet Compared with a Hyderabad Agency, a Freelancer and a DIY Builder"
          lead="Four ways to get a website in Hyderabad, set side by side on launch time, build quality, price certainty and code ownership."
          pullQuote={{
            stat: '7 days',
            caption:
              'to move from kickoff to a live site, including Figma layouts, Next.js code, schema setup and a Lighthouse audit that larger agencies stretch across months.',
          }}
          columns={HYD_COMPARISON_COLUMNS}
          rows={HYD_COMPARISON_ROWS}
          footer="Any scope can be quoted at a fixed price. You get the number after a free call and before you commit."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="HYDERABAD SECTORS"
          headline="Website Design for Hyderabad's Main Sectors"
          lead="IT services, pharma, public sector suppliers, property, retail and professional firms each sell to a different buyer in Hyderabad, so each needs a different first screen."
          sectors={[
            {
              name: 'IT Services and Product Firms',
              description:
                "Hyderabad hosts large campuses of global tech companies and thousands of mid-size IT services and product firms. These firms chase overseas contracts. Their sites need delivery models, case studies, security and quality certifications, and a short RFP form for US and European buyers.",
              example:
                'IT services firms, capability centres and product companies in HITEC City, Gachibowli, Madhapur, Kondapur and the Financial District.',
            },
            {
              name: 'Pharma and Life Sciences',
              description:
                "Many of India's large drug makers are headquartered in Hyderabad, and Genome Valley hosts biotech and research firms. Sites need GMP and other approval details, product lists, dossier request flows and enquiry routing for overseas importers and hospital buyers.",
              example:
                'Drug makers, API producers and biotech labs in Genome Valley, Patancheru, IDA Nacharam and Mallapur.',
            },
            {
              name: 'Government Suppliers',
              description:
                "As capital of Telangana, Hyderabad has many state departments and public sector units. Contractors, infrastructure consultants and PSU vendors need sites that list past projects, empanelments and compliance papers in a form a tender committee can check.",
              example:
                'Government contractors, infrastructure consultants and PSU vendors working across Telangana.',
            },
            {
              name: 'Property and Construction',
              description:
                "Housing demand follows the tech offices, from Gachibowli and Kokapet to Kukatpally and Miyapur. Developers and brokers need project galleries, floor plans, RERA numbers and call-back forms, with local search pages for each micro-market.",
              example:
                'Developers, brokers and construction firms working across Hyderabad and Cyberabad.',
            },
            {
              name: 'Retail, Food and D2C',
              description:
                "Banjara Hills and Jubilee Hills hold premium stores and restaurants, and the Charminar area is known for pearls and bangles. Consumer sites must load in under 1.5s on a phone, show the product straight away, take Razorpay payments and link to Instagram.",
              example:
                'Fashion and jewellery stores, pearl sellers, restaurants and D2C brands selling to Hyderabad shoppers.',
            },
            {
              name: 'Professional Firms',
              description:
                "CA practices, law firms, HR companies and consultants serve the city's growing company base. A prospect reads their site before calling. We build pages that show credentials and services clearly and make booking a first consultation simple.",
              example:
                "CA and CS firms, corporate lawyers, consultants and HR companies serving Hyderabad businesses.",
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
          eyebrow="HYDERABAD FAQ"
          headline="Hyderabad Website Questions, Answered"
          lead="What Hyderabad founders, plant heads and marketing teams ask before signing, answered plainly."
          categories={HYD_FAQ_CATEGORIES}
          items={HYD_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Hyderabad Website This Week"
          sub="A vendor manager abroad, a hospital buyer or a Jubilee Hills diner will look you up before they get in touch. Book a call, and within 72 hours you will have a page plan and a fixed price for a site that goes live seven days after kickoff."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="One fixed price. Live in 7 days. Built in Next.js. All code yours at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="hyderabad" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
