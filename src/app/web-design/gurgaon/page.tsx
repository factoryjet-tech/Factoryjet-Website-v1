import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
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
  title: 'Web Design Company in Gurgaon | FactoryJet',
  description:
    'Web design company in Gurgaon for corporate offices, BFSI firms, Udyog Vihar exporters and startups. Custom Next.js websites with 7-day delivery.',
  keywords: [
    'web design company in Gurgaon',
    'website design Gurgaon',
    'web development company Gurgaon',
    'website design company Gurugram',
    'professional website design Gurgaon',
    'web design Cyber City Gurgaon',
    'web design Golf Course Road',
    'BFSI website design Gurgaon',
    'GCC website design Gurgaon',
    'startup website design Gurgaon',
    'web design agency Gurugram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Gurgaon | FactoryJet',
    description:
      'Web design company in Gurgaon building Next.js sites with SEO and GA4 set up. 7-day delivery for firms in Cyber City, Udyog Vihar and Sohna Road.',
    url: 'https://factoryjet.com/web-design/gurgaon',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design work for Gurgaon businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Gurgaon | FactoryJet',
    description:
      'Web design company in Gurgaon. Next.js build, SEO and GA4 set up, 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/gurgaon',
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
  '@id': 'https://factoryjet.com/web-design/gurgaon#webpage',
  url: 'https://factoryjet.com/web-design/gurgaon',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const GGN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer mapping',
    description:
      "Day one and two go on your buyer. A vendor pitching a Cyber City capability centre, a garment unit in Udyog Vihar and a Sohna Road SaaS founder each get read by different people. We list who reads your site, check three rivals they will also open, and lock the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Screens in Figma',
    description:
      "We draw the phone layout first at 375px, then widen it to 1440px. Each screen is checked against one action: an RFP request, a demo booking or a sample order. Nothing moves to code until you sign off the screens.: Days 3–4",
  },
  {
    number: '03',
    title: 'Build and integrations',
    description:
      'Pages are coded in Next.js and served from the Cloudflare CDN, so they open in under 1.5s on Indian 4G. Forms, WhatsApp buttons and CRM hooks for Salesforce, HubSpot or Zoho go in during the build, with a page-weight budget checked on every commit.: Days 5–6',
  },
  {
    number: '04',
    title: 'Search setup',
    description:
      'Copy is tightened, images go to WebP, and every page gets meta tags, LocalBusiness and FAQPage schema and internal links. We submit the sitemap and target the area searches your buyers type, such as Cyber City, Golf Course Road or Udyog Vihar.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go live',
    description:
      'We move DNS to Cloudflare, connect GA4 and GTM and verify Search Console. You get a recorded walkthrough of the admin and a 30-day window for fixes after launch.: Day 7+',
  },
];

const GGN_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Cost and timing' },
  { key: 'included',  label: "Scope of work" },
  { key: 'technical', label: 'Speed, code and search' },
  { key: 'local',     label: 'Gurugram specifics' },
  { key: 'support',   label: 'Ownership and aftercare' },
];

const GGN_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What will a website cost my Gurgaon company?',
    answer:
      "It depends on page count, how crowded your search terms are, and add-ons such as a store, a booking flow or an AI assistant. After a free call we send one fixed figure in writing. You keep the code when the project ends.",
  },
  {
    category: 'pricing',
    question: 'How many days does a build take?',
    answer:
      'Seven, counted from kickoff. Days one and two cover buyer mapping and screens, days three to six cover the build, and day seven is search setup and launch. The count starts once your logo, photos and text sit in the shared folder.',
  },
  {
    category: 'pricing',
    question: 'Why pick FactoryJet over a large Gurgaon agency?',
    answer:
      'A small engineering team works on your project from start to finish. There are no account managers in between and no glass-tower rent in the fee. You get Figma design, Next.js code and a Lighthouse check before launch, priced for the work itself.',
  },
  {
    category: 'pricing',
    question: 'What is covered in the 7-day delivery?',
    answer:
      'The seven days cover the part we control: screens, code, copy and launch. Across all projects we have hit the agreed date 97% of the time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "Which parts of the project do you handle?",
    answer:
      "Buyer mapping, Figma screens, Next.js code, starter copy, schema and sitemap setup, GA4, and 30 days of fixes after launch. On launch day the full code moves into a GitHub account you control.",
  },
  {
    category: 'included',
    question: 'Will you write the words on the site?',
    answer:
      'Starter copy is part of the job: headlines, the hero block and service summaries. Longer SEO articles cost extra. Before the build we send a short brief listing what we need from you.',
  },
  {
    category: 'included',
    question: 'Is hosting part of the deal?',
    answer:
      'Sites run on Cloudflare Pages, which costs nothing for most business sites. The Cloudflare account sits in your name and we set it up. We charge no monthly hosting fee.',
  },
  {
    category: 'included',
    question: 'Can my marketing team edit pages later?',
    answer:
      'Yes. Growth and Custom tier builds come with a headless CMS, Sanity or Contentful, so a marketing manager can change text and images without a developer. Gurgaon corporate teams usually hand this to one owner.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can a Gurgaon business site rank on Google India?',
    answer:
      'Ranking basics ship with every build: JSON-LD schema, title and meta templates, green Core Web Vitals on phones, internal links, WebP images and a submitted XML sitemap. Searches for your brand name usually show the site within 1–2 weeks.',
  },
  {
    category: 'technical',
    question: 'What do you build the site with?',
    answer:
      "Next.js on Cloudflare's CDN. Pages load in under 1.5s on Indian 4G, where a typical WordPress site takes 4–6s. When a procurement analyst opens your site on a phone between meetings, that gap shapes their first view of your firm.",
  },
  {
    category: 'technical',
    question: 'Will it work well on phones?',
    answer:
      'Phones come first. We lay out each screen at 375px before desktop, compress images to WebP, lazy-load them through Cloudflare, and aim for Lighthouse 90+ with green Core Web Vitals on mobile before launch.',
  },
  {
    category: 'technical',
    question: 'Will I see which pages bring enquiries?',
    answer:
      'Yes. GA4 and Google Tag Manager are live before launch. Form sends, WhatsApp taps and demo-request clicks are tracked as events from the first day, and Search Console is verified with the sitemap in place.',
  },

  /* ── Gurgaon Local ── */
  {
    category: 'local',
    question: 'Can you build for capability centres and enterprise vendors in Cyber City?',
    answer:
      'Yes. IT and ITES firms, BFSI companies and vendors selling into the capability centres around Cyber City and Golf Course Road need sites that survive a procurement check. We put certifications, service pages, case studies and a clear RFP path where a reviewer expects to find them.',
  },
  {
    category: 'local',
    question: 'Do you work with Gurgaon startups and D2C brands?',
    answer:
      "Yes. Founders along Sohna Road, in Sector 29 and in the DLF co-working spaces need a site that explains the product in one screen and books demos. D2C brands need fast product pages and a checkout that works on a cheap Android phone. We scope each of these differently.",
  },
  {
    category: 'local',
    question: "Will the copy reflect Gurgaon's business areas?",
    answer:
      "Yes. Discovery includes the parts of the city your buyers know: Cyber City and Cyber Hub offices, Golf Course Road towers, MG Road retail, Udyog Vihar factories and export units, and the newer Sohna Road belt. Naming the right area in copy and LocalBusiness schema helps area-level searches.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from other Gurgaon web firms?',
    answer:
      "Many local firms quote after weeks of meetings and run to months of build time. We send a fixed price before you commit, write the 7-day date into the agreement and code in Next.js. You end up with a faster site sooner, and the code is yours.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Who owns the site once it is live?',
    answer:
      'You do, fully. The Next.js code lands in your GitHub on launch day, along with the Figma files and every API key. No retainer is required and nothing ties you to our platform.',
  },
  {
    category: 'support',
    question: 'What help do I get after launch?',
    answer:
      'The first 30 days of bug fixes and small changes are free. After that you can take a monthly plan with development hours, same-day priority on bugs and one engineer who already knows your code. Plan clients also get a quarterly speed and Core Web Vitals check.',
  },
  {
    category: 'support',
    question: 'What if the site breaks after launch?',
    answer:
      'Inside the 30-day window we fix bugs free, usually within 24 hours. The site runs as static files on Cloudflare Pages, so server crashes and plugin conflicts are off the table.',
  },
  {
    category: 'support',
    question: 'Can we keep you on a monthly plan in Gurgaon?',
    answer:
      'Yes. A monthly plan covers new landing pages, content edits, SEO work and upkeep. Plan clients jump the queue and work with a named engineer, which suits corporate teams with tight review cycles.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Gurgaon?',
    answer:
      'The best web design company in Gurgaon for you is the one that passes three tests. Can you open live sites they built? Can you check their speed scores yourself? Will the price stay fixed once work starts? FactoryJet offers custom websites in 7 days at a written fixed price, and we invite that test.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Gurgaon or use an agency?',
    answer:
      'For a single landing page, a freelancer is often enough. A company site needs design, code, SEO and aftercare, and a small senior team covers all four at one fixed price. If you hire web designer in Gurgaon on your own, put the scope and fee in writing before work begins.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GGN_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const GGN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Large Gurgaon agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const GGN_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Designed from scratch in Figma',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Schema and sitemap set up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse score 90+',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Analytics events tracked',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price fixed before work',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code handed to you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/gurgaon#howto`,
  name: `Seven days from kickoff to a live Gurgaon website`,
  description: `The day-by-day plan FactoryJet follows to launch a fast website for a Gurgaon business.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Kickoff call',
      text: `We hear what the site must achieve: getting onto a vendor panel, booking demos, or selling products online.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Page plan',
      text: `We study the Gurgaon firms you compete with, pick the search terms worth owning, and draft the page list and first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Screens',
      text: 'Home and inner screens are drawn in Figma and shared as a preview link. Your comments go back into the screens within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search',
      text: `Signed-off screens become Next.js pages. Local schema for Gurgaon goes in, and GA4 plus Search Console are connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Live',
      text: 'We test on five devices, launch, and hand over written notes plus a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/gurgaon#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/gurgaon`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function GurgaonWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="gurgaon-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="gurgaon-faq-schema"
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
          { name: 'Gurgaon', url: 'https://factoryjet.com/web-design/gurgaon' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Gurgaon', url: 'https://factoryjet.com/web-design/gurgaon' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_gurgaon_hero" />}
          eyebrow="WEB DESIGN · GURGAON"
          headline="Web Design in Gurgaon for Corporate Vendors, BFSI Firms, Exporters and Startups"
          lead="Gurgaon buyers judge a firm by its website before they take a meeting. Procurement teams in Cyber City, investors on Golf Course Road and garment buyers sourcing from Udyog Vihar all check you online first. FactoryJet designs in Figma, codes in Next.js and launches in 7 days, and the full code is handed to you."
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
          description="Shopify stores, B2B firms and DTC brands across India, the US, the UK and the UAE. Each one got a price fixed before work began, a launch inside seven days, and the full source code."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="GURUGRAM BUYERS"
          headline="Who Checks a Gurgaon Company's Website, and What They Look For"
          leadParagraphs={[
            "Gurgaon packs very different businesses into a small area. Cyber City and Cyber Hub hold the offices and capability centres of large multinational firms. Golf Course Road and the DLF phases carry banks, insurers and consulting firms. Udyog Vihar mixes BPO floors with garment export units, and the Manesar side of the district is a major hub for car and two-wheeler parts. Sohna Road and Sector 29 are where many younger startups sit.",
            "Each group has a different reader. A procurement analyst wants certifications and a vendor contact. An overseas apparel buyer wants factory photos, compliance details and a sample request form. An investor wants to see what the product does in ten seconds. A site built for one of these readers will fail the other two, so we decide the reader before we draw a single screen.",
            "The city also moves fast. Funded D2C brands, SaaS firms and fintech startups launch campaigns that send sudden traffic, and a slow page loses that spend. We scope everything from a five-page site for a boutique consultancy to a larger Next.js build for a brand running paid campaigns across NCR.",
          ]}
          stats={[
            {
              value: '250+',
              label: 'Fortune 500 capability centres in Gurgaon, per NASSCOM',
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '#2',
              label: "Gurgaon's rank among Indian cities for startup capital raised, behind Bengaluru",
              sourceUrl: 'https://www.startupindia.gov.in/',
              sourceLabel: 'Startup India',
            },
            {
              value: '₹4.5L Cr',
              label: "Estimated size of Gurgaon's economy, the largest city economy in Haryana",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · GURUGRAM"
          headline="What a Gurgaon Website Has to Do"
          lead="Three kinds of buyer read Gurgaon websites: enterprise procurement teams, investors and B2B clients, and phone-first consumers. We plan the site around whichever one pays your bills."
          body={
            <>
              <p>
                
                Vendors to capability centres, BFSI firms and IT services companies around Cyber City face a procurement desk. That desk asks for proof: certifications, service scope, named sectors served and a way to send an RFP. We place each item where a reviewer looks for it and write case study pages that answer the follow-up questions before they are asked.
              </p>
              <p>
                
                Startups in Sector 29, on Sohna Road and in DLF co-working spaces face investors and early enterprise clients. Both groups open the site before the first call. The homepage must explain the product fast, show who uses it and offer a demo slot, and it must stay quick when a news story sends a traffic spike.
              </p>
              <p>
                
                Consumer brands, clinics, restaurants and consultancies around MG Road and Sector 14 need phone-first pages, short forms and analytics that show which ad drove which lead. Every Gurgaon build includes discovery, Figma screens, Next.js code, SEO, GA4 and 30 days of fixes, and you own the code at the end.
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
                  
                  Who reads your site
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Enterprise & GCC',
                    need: 'Certifications, scope, RFP form',
                    area: 'Cyber City · Golf Course Road · Udyog Vihar',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Startup & BFSI',
                    need: 'Product demo, proof of traction',
                    area: 'Sector 29 · Sohna Road · Cyber Hub',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'D2C & Retail',
                    need: 'Fast pages, short forms, ad tracking',
                    area: 'MG Road · Sector 14 · South City',
                    colour: '#888880',
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
                  
                  One build standard. The plan changes with the reader.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Gurgaon Firms Get from FactoryJet"
          lead="Gurgaon agencies with big offices often need months and quote only after several meetings. We send a fixed price first, write the 7-day launch date into the agreement and build in Next.js, so pages load faster, there are no plugin bills each month and the code belongs to you."
          pillars={[
            {
              icon: '⚡',
              title: 'Launch date written into the contract',
              body: "A vendor panel review or a funding round will not wait sixteen weeks for a website. We launch in seven days and put that date in the project agreement. Across all projects we have met the agreed date 97% of the time.",
            },
            {
              icon: '🏗️',
              title: 'Static Next.js pages load faster than WordPress',
              body: "A WordPress page runs PHP and 40–60 database queries each time it opens. A Next.js page is prebuilt and served from Cloudflare's CDN, so it loads in under 1.5s where WordPress often takes 4–6s. A reviewer at a global bank reads a slow site as a small, stretched team.",
            },
            {
              icon: '📋',
              title: 'One price, agreed up front',
              body: "You get a single fixed quote before any work starts. There is no paid discovery phase and no surprise invoice for extra scope. Gurgaon procurement teams can file it exactly as written.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="THE SEVEN DAYS"
          headline="Your Gurgaon Website, Day by Day"
          lead="We agree the buyer first, sign off phone screens second, and wire SEO and tracking before the site goes live."
          stages={GGN_JOURNEY_STAGES}
          closingNote="BUYER MAP · FIGMA · NEXT.JS · SEARCH SETUP · LAUNCH ON DAY 7"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds for Indian B2B firms"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison sells artificial plants, flowers, flower runners, home décor and LED lighting wholesale from Mumbai. We built its B2B store on Commerceflo, covering trade price tiers, quotes that turn into orders, and ordering through customer accounts.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts does MEP drafting and BIM consulting. We rebuilt its site on WordPress around B2B project enquiries, with a credentials section, a project portfolio and technical SEO.',
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
          headline="FactoryJet Compared with a Large Gurgaon Agency, a Freelancer and Wix"
          lead="Four ways to get a website in Gurgaon, compared on time to launch, build quality, price certainty and who owns the result."
          pullQuote={{
            stat: '7 days',
            caption:
              'to go from kickoff to a live site, with the same Figma screens, Next.js code, schema setup and Lighthouse check a large agency would charge months for.',
          }}
          columns={GGN_COMPARISON_COLUMNS}
          rows={GGN_COMPARISON_ROWS}
          footer="Every scope can be quoted at a fixed price. You get the figure after a free call, before you commit."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="GURGAON SECTORS"
          headline="Website Design for the Sectors That Run Gurgaon"
          lead="Banks and fintechs, IT vendors, developers, auto parts makers, garment exporters and consumer startups all buy websites in Gurgaon, and each needs a different first screen."
          sectors={[
            {
              name: 'Banking, Insurance and Fintech',
              description:
                "Golf Course Road and Cyber City hold many banks, insurers and fintech companies. Their sites need careful wording, visible registrations and licences, and enquiry forms that route to the right desk. Small design slips here make a cautious buyer close the tab.",
              example:
                'Fintech startups, insurance brokers, NBFCs and wealth managers with offices in Cyber City and on Golf Course Road.',
            },
            {
              name: 'IT Services and Capability Centre Vendors',
              description:
                "Firms selling into the capability centres of global companies must pass vendor onboarding. The site has to show service lines, ISO or SOC certifications, delivery models and case studies in a form a procurement reviewer can scan in minutes.",
              example:
                'IT services firms, staffing agencies, BPO and KPO providers and tech consultancies pitching to procurement teams in Cyber City and Udyog Vihar.',
            },
            {
              name: 'Real Estate',
              description:
                "Golf Course Extension Road, Dwarka Expressway, Sohna Road and the DLF phases see constant new launches. Developer and broker sites need project galleries, floor plan downloads, RERA numbers, location maps and a call-back form that reaches sales the same day.",
              example:
                'Developers, channel partners, brokers and construction firms selling projects across Gurgaon and NCR.',
            },
            {
              name: 'Auto Components and Manufacturing',
              description:
                "The Gurgaon and Manesar belt supplies parts to large car and two-wheeler makers. Component makers need sites that list capabilities, machines, quality certifications and OEM-ready processes, with an RFQ form that accepts drawings. Export buyers check these pages before any plant visit.",
              example:
                'Auto parts makers, tool rooms, sheet metal and plastics units in Manesar, IMT and Udyog Vihar.',
            },
            {
              name: 'Startups and D2C Brands',
              description:
                "SaaS, fintech, healthtech and D2C founders in Gurgaon need a site that explains the product quickly and books demos. D2C brands need fast product pages, Razorpay checkout and tracking on every add-to-cart from launch day.",
              example:
                'Seed and Series A startups and D2C brands working out of Sohna Road, Sector 29 and DLF co-working spaces.',
            },
            {
              name: 'Garment Exports and Consulting',
              description:
                "Udyog Vihar is known for apparel export units that sell to overseas brands, and the city also hosts many consulting and staffing firms. Exporters need compliance details, factory photos and sample request forms. Consultancies need service pages, partner profiles and an easy way to book a first meeting.",
              example:
                'Apparel exporters in Udyog Vihar, management consultants, HR and staffing firms and executive search practices in Gurgaon.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on how their new FactoryJet site performs"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="GURGAON FAQ"
          headline="Gurgaon Website Questions, Answered"
          lead="What Gurgaon founders and marketing heads ask us before they sign, with straight answers."
          categories={GGN_FAQ_CATEGORIES}
          items={GGN_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Gurgaon Website This Week"
          sub="Your next vendor review, investor call or overseas buyer will open your website before they reply. Book a call, and within 72 hours you will have a page plan and a fixed price for a site that goes live seven days after kickoff."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="One fixed price. Live in 7 days. Built in Next.js. All code handed over at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="gurgaon" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
