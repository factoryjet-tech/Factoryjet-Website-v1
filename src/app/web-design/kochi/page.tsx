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
  title: 'Web Design Company in Kochi | FactoryJet',
  description:
    'Web design company in Kochi for Infopark IT firms, Fort Kochi homestays and seafood or spice exporters. Custom Next.js websites with 7-day delivery.',
  keywords: [
    'web design company in Kochi',
    'website design Kochi',
    'web development company Kochi',
    'website design company Kochi',
    'professional website design Kochi',
    'web design Ernakulam',
    'web design Infopark',
    'IT company website design Kochi',
    'tourism website design Kochi',
    'Next.js web development Kochi',
    'web design agency Kochi Kerala',
    'website design Kerala',
    'web design Kakkanad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Kochi | FactoryJet',
    description:
      'Web design company in Kochi building fast Next.js sites for Infopark software firms, Kerala tourism operators and Kochi Port exporters. 7-day delivery.',
    url: 'https://factoryjet.com/web-design/kochi',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design for Kochi businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Kochi | FactoryJet',
    description:
      'Web design company in Kochi. Next.js sites for IT, tourism and export firms. 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/kochi',
    languages: webDesignCityAlternatesIN['kochi'],
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
  '@id': 'https://factoryjet.com/web-design/kochi#webpage',
  url: 'https://factoryjet.com/web-design/kochi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const KOCHI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer map',
    description:
      "Kochi buyers rarely look alike. A Rotterdam importer checking a shrimp processor, a Bengaluru family booking a Fort Kochi homestay and a US client shortlisting an Infopark vendor each arrive with different questions. In the first two days we list those questions, read the sites you lose to, and fix the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Layout drafts',
    description:
      'We draw each page at phone size first, then at laptop width. You see where the enquiry button sits, which photos lead and how a buyer reaches your price or booking step. No code starts until you sign off the drafts.: Days 3–4',
  },
  {
    number: '03',
    title: 'Build',
    description:
      "The site is coded in Next.js and served from Cloudflare, so pages open fast on mobile data in Ernakulam or on a hotel Wi-Fi in Europe. We wire in booking requests for stays, catalogue enquiry forms for exporters, WhatsApp chat and any tool you already pay for.: Days 5–6",
  },
  {
    number: '04',
    title: 'Search groundwork',
    description:
      'Page titles, descriptions, compressed images, schema for your business and FAQs, and links between related pages. We submit the sitemap to Search Console and write copy for both English searches and the way Malayalam speakers phrase queries in English.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go live',
    description:
      'We point your domain to Cloudflare, switch on GA4 and Tag Manager, and confirm Search Console. You get a recorded walkthrough of the admin side. Bug fixes stay free for the first 30 days.: Day 7+',
  },
];

const KOCHI_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Kochi Questions' },
  { key: 'support',   label: 'Support & Ownership' },
];

const KOCHI_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Kochi business?',
    answer:
      "Cost follows scope. A five-page site for a Mattancherry spice trader costs less than a homestay site with live room requests or an Infopark firm that needs case studies and a careers section. After a short call we send one fixed figure in writing, and that figure does not move.",
  },
  {
    category: 'pricing',
    question: 'How quickly can my Kochi site go live?',
    answer:
      'Seven days from kickoff. Days one and two cover research and page planning, days three and four cover layouts, days five and six cover the build, and day seven is launch. The count starts once your logo, photos and basic text are with us.',
  },
  {
    category: 'pricing',
    question: 'Why pick FactoryJet over a larger Kochi agency?',
    answer:
      "Your money goes into design and code. There is no account manager layer between you and the people building the site. You get Figma layouts, a Next.js build and a Lighthouse check before launch, priced as one fixed sum.",
  },
  {
    category: 'pricing',
    question: 'What exactly sits inside the 7-day window?',
    answer:
      'Design, build, copy placement and launch, which are the steps we run ourselves. Waiting on your content or approvals sits outside the clock. Across our projects, 97% have shipped on the agreed date.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What do I get with a Kochi web design project?",
    answer:
      'A page plan, Figma layouts, the Next.js build, starter copy, schema and sitemap setup, GA4 tracking and 30 days of free fixes after launch. The source code goes into your own GitHub account on launch day.',
  },
  {
    category: 'included',
    question: 'Will you write the words on my site?',
    answer:
      'We write the headlines, hero lines and short service blurbs. Longer search articles are an optional extra. Before the build starts you get a short brief listing the facts, photos and certificates we need from you.',
  },
  {
    category: 'included',
    question: 'Who hosts the site?',
    answer:
      "It runs on Cloudflare Pages under an account in your name. Most sites stay inside the free plan. We set it up and you pay us no hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my staff edit pages later?',
    answer:
      'Yes. Growth and Custom tier sites come with a Sanity or Contentful editor, so a homestay manager can swap room photos or an export team can add a product without a developer.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the site show up on Google?',
    answer:
      "Every build ships with schema, clean titles, a sitemap in Search Console, internal links, WebP images and passing Core Web Vitals on mobile. Searches for your own business name usually start showing the site within one to two weeks. Ranking for wider terms such as Kochi homestay or seafood exporter takes ongoing content.",
  },
  {
    category: 'technical',
    question: 'Which technology do you use?',
    answer:
      "Next.js pages served from Cloudflare's network. They usually load in under 1.5 seconds on Indian 4G, where a plugin-heavy WordPress theme often takes 4–6 seconds. Google counts that speed in its page experience signals.",
  },
  {
    category: 'technical',
    question: 'How will it work for guests and buyers on phones?',
    answer:
      'We design for a 375px screen before anything else. Each build has to score Lighthouse 90+ on mobile with green Core Web Vitals before launch. Images are served as WebP from Cloudflare and load only when scrolled into view.',
  },
  {
    category: 'technical',
    question: 'Is tracking set up for me?',
    answer:
      'Yes. GA4 and Tag Manager go live with the site. We record enquiry form sends, WhatsApp taps and booking request clicks as events from the first day, and we verify Search Console and submit the sitemap.',
  },

  /* ── Kochi Local ── */
  {
    category: 'local',
    question: 'Do you design sites for Infopark software companies?',
    answer:
      "Yes. Infopark and Kakkanad firms sell to buyers who never visit Kochi, so the site carries the pitch. We build service pages, case study layouts, a tech stack section, hiring pages and contact routes suited to long enterprise buying cycles.",
  },
  {
    category: 'local',
    question: 'Can you build sites for Fort Kochi homestays and backwater operators?',
    answer:
      "Yes. Travellers to Fort Kochi, Kumarakom, Alappuzha and Munnar decide on photos and reviews, often on a phone. We build image-led pages, quick room or cruise enquiry forms, WhatsApp chat and review sections, written for both foreign and domestic searches.",
  },
  {
    category: 'local',
    question: "Do you understand Kochi well enough to write local copy?",
    answer:
      "We study your area during discovery: Kakkanad and the Smart City site for tech, MG Road and Edapally for retail, Fort Kochi and Mattancherry for heritage travel and the spice trade, Willingdon Island for port businesses. That detail goes into the copy and your LocalBusiness schema.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet differ from Kochi and Trivandrum agencies?',
    answer:
      "Many Kerala agencies quote after a long discovery and run projects over several weeks. We send a fixed quote first, write the 7-day delivery date into the agreement and hand over a Next.js codebase you own.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Who owns the finished website?',
    answer:
      'You do, fully. The code lands in your GitHub on launch day, along with the Figma files and every login. There is no retainer to sign and no closed platform holding your site.',
  },
  {
    category: 'support',
    question: 'What help do I get once the site is live?',
    answer:
      'Thirty days of free fixes and small tweaks come with every build. After that you can move to a monthly maintenance plan with same-day bug response and one engineer who already knows your code.',
  },
  {
    category: 'support',
    question: 'What if the site breaks after launch?',
    answer:
      'During the first 30 days we fix bugs free, usually inside a day. The site is served as static files from Cloudflare, so server crashes and plugin conflicts are rare.',
  },
  {
    category: 'support',
    question: 'Can a Kochi business keep you on a monthly plan?',
    answer:
      'Yes. A retainer covers new pages, seasonal offers for the tourist season, content updates, search fixes and upkeep. Retainer clients are scheduled first and keep the same engineer.',
  },
  {
    category: 'support',
    question: 'Can I run the project from the Gulf or abroad?',
    answer:
      "Yes. Many Kochi businesses are run or funded by Keralites working in the Gulf. Every step works over video and shared links: calls, design previews, approvals and the final handover. Time zone gaps are normal for us.",
  },
  {
    category: 'local',
    question: 'Do you build sites for Kochi seafood and spice exporters?',
    answer:
      'Yes. Kochi\'s port and fishing harbour make it a base for seafood processors, and pepper and cardamom traders still work out of Mattancherry. Export sites need certificates, plant and cold storage details, product pages and enquiry forms built for importers in the US, EU, Japan and the Middle East.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Kochi?',
    answer:
      'There is no single answer, so test any shortlist. For a small or mid-sized firm, FactoryJet is a fair pick for the best web design company in Kochi: a custom build in 7 days and a fixed written price. Ask every agency for live sites you can open, speed scores you can run yourself and a quote that will not grow mid-project.',
  },
  {
    category: 'pricing',
    question: 'Should I hire a freelance web designer in Kochi or an agency?',
    answer:
      'For a one-page site a freelancer can work well. A business site needs design, code, search setup and support, and a small team covers all four at a fixed price. If you go freelance, put the scope and fee in writing before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: KOCHI_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const KOCHI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kerala Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const KOCHI_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Figma layouts made for you',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built on Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search setup included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse 90+',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager live',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed written quote',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code handed to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/kochi#howto`,
  name: `How a Kochi website goes from call to launch in 7 days`,
  description: `The seven-day build FactoryJet runs for Kochi IT, tourism and export businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Kickoff call',
      text: `We hear what you sell, who buys it, and what the new site has to make those buyers do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Page plan',
      text: `We list the pages, study the Kochi sites you compete with, choose search terms and draft first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Layouts',
      text: 'You get a preview link for the home page and inner pages. We turn your feedback around within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search setup',
      text: `The signed-off layouts become a fast mobile site. Kochi business schema goes in, and GA4 and Search Console are connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'We test on five devices, publish the site and walk you through it in a 30-minute session with written notes.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/kochi#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/kochi`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function KochiWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="kochi-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="kochi-faq-schema"
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
          { name: 'Kochi', url: 'https://factoryjet.com/web-design/kochi' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Kochi', url: 'https://factoryjet.com/web-design/kochi' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_kochi_hero" />}
          eyebrow="WEB DESIGN · KOCHI"
          headline="Website Design in Kochi for Infopark Tech Firms, Homestays, Exporters and New Kerala Brands"
          lead="Kochi mixes software parks in Kakkanad, heritage stays in Fort Kochi, seafood plants near the harbour and spice houses in Mattancherry. Each sells to a different buyer, and most of those buyers judge you on your website first. FactoryJet designs in Figma, builds in Next.js and launches in 7 days, and the code is yours."
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
          description="We have shipped sites for Shopify sellers, B2B manufacturers and direct-to-consumer brands in four countries. Every job has a fixed price agreed upfront, full code handover and 7-day delivery."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="KOCHI MARKET"
          headline="What Kochi Buyers Check Before They Call You"
          leadParagraphs={[
            "Kerala reads before it buys. The state has India's highest literacy rate, and customers here compare options online before they phone anyone. A homestay guest checks your photos and reviews. An importer checks your certificates. An Infopark client checks your case studies. Your site answers them, or a rival's does.",
            "The city runs on several engines at once. Infopark in Kakkanad holds hundreds of IT companies. Kerala Startup Mission backs thousands of young firms across Kochi and Thiruvananthapuram. The Kochi Metro and the Smart City project are pulling offices toward Kakkanad and Edapally. Fort Kochi draws foreign and domestic tourists, and the port and fishing harbour keep seafood and spice exporters busy.",
            "Many owners here have worked in the Gulf or still do. They have seen how Dubai and London firms present themselves online and expect the same from their own site. We build for that standard, with fast pages, clear proof and an obvious next step for the visitor.",
          ]}
          stats={[
            {
              value: '450+',
              label: "IT companies at Infopark Kochi, with 70,000+ people working there",
              sourceUrl: 'https://infopark.in/',
              sourceLabel: 'Infopark Kerala',
            },
            {
              value: '5,000+',
              label: "Startups backed by Kerala Startup Mission (KSUM), with Kochi a main base",
              sourceUrl: 'https://startupmission.kerala.gov.in/',
              sourceLabel: 'Kerala Startup Mission',
            },
            {
              value: '96.2%',
              label: "Kerala literacy rate, the highest in India. Buyers here read and compare before they contact you.",
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census of India',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · KOCHI"
          headline="What a Kochi Website Has to Do"
          lead="A software firm, a houseboat operator and a shrimp exporter in Kochi all need a website, but each one wins a different kind of buyer. We plan around that buyer before choosing a single layout."
          body={
            <>
              <p>
                
                Infopark and Kakkanad software firms sell to clients in other cities and countries. Their site has to show what the team has built, which stack they use, which certifications they hold and how to start a project. We give these sites clear service pages, case study layouts and an enquiry route that suits a procurement team.
              </p>
              <p>
                
                Homestays, boutique hotels and backwater cruise operators in Fort Kochi, Kumarakom and Alappuzha sell on photos and trust. Guests decide quickly on a phone. We build image-first pages, short enquiry forms, WhatsApp chat and review sections, and write copy that ranks for searches from foreign and Indian travellers.
              </p>
              <p>
                
                Seafood processors and spice traders near Kochi Port sell to importers who check a supplier for weeks. Their site needs export licences, quality certificates, plant capacity and a simple quote request. Startups from KSUM and Gulf-funded firms need a site that looks as sharp as the businesses their owners have seen abroad. Every Kochi project includes discovery, Figma layouts, the Next.js build, search setup, GA4 and 30 days of free fixes.
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
                  
                  Four Kochi buyers. Four site plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Software (Infopark)',
                    need: 'Case studies + stack + enterprise enquiry',
                    area: 'Infopark · Kakkanad · Kochi Smart City',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Photos + room or cruise enquiry + reviews',
                    area: 'Fort Kochi · Kumarakom · Alleppey',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Export & Trade',
                    need: 'Certificates + product pages + importer quote form',
                    area: 'Kochi Port · Willingdon Island · Mattancherry',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Startup & NRI Business',
                    need: 'Sharp design + fast pages + clear next step',
                    area: 'KSUM · Edapally · MG Road Ernakulam',
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
                  
                  One build standard. A plan shaped around your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Kochi Businesses Get From FactoryJet"
          lead="Many Kerala agencies take weeks to send a quote and longer to ship. We price the job before you commit, put the 7-day launch date in the contract and build in Next.js, so pages load faster, there are no plugin bills and the code belongs to you."
          pillars={[
            {
              icon: '⚡',
              title: 'Seven days, written into the contract.',
              body: "Tourist season, export orders and hiring drives do not wait for a twelve-week web project. We launch in 7 days and the date sits in the agreement you sign. Across our projects, 97% have shipped on the agreed date.",
            },
            {
              icon: '🏗️',
              title: 'Next.js speed for a Kerala audience on mobile.',
              body: "Most Kochi visitors arrive on a phone. A typical WordPress page runs PHP and dozens of database calls each time it loads. Next.js serves ready-made files from Cloudflare instead, which usually means under 1.5 seconds on 4G against 4–6 seconds for WordPress. Google measures that speed in Core Web Vitals.",
            },
            {
              icon: '📋',
              title: 'One price, fixed before work starts.',
              body: "You get a written quote before you commit. We charge no discovery fee and add no change-order surprises after launch. Scope and price are agreed once.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Kochi Website Gets Built in 7 Days"
          lead="We agree the buyer first, then the phone layouts, then the code. Tracking and search setup are in place before launch day."
          stages={KOCHI_JOURNEY_STAGES}
          closingNote="5 STEPS · 7 DAYS · NEXT.JS ON CLOUDFLARE · GA4 FROM DAY ONE · NO DOWNTIME AT LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two recent builds from our Indian client list."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "A Mumbai wholesaler of artificial plants and flowers, flower runners, home décor and LED lighting. We built its B2B quote-to-cash store on Commerceflo with trade price tiers, quote-to-order flows and ordering by customer account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'An MEP drafting and BIM consulting firm. We rebuilt its WordPress site around B2B project enquiries, with a credentials section, a project portfolio and technical SEO.',
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
          headline="FactoryJet, a Kerala Agency, a Freelancer or a Template Builder"
          lead="Kochi businesses have four common routes to a new website. This table sets out timeline, build method, search setup and what you own once it is live."
          pullQuote={{
            stat: '7 days',
            caption:
              'from first call to a live site, with Figma layouts, Next.js code, search setup and a Lighthouse check included.',
          }}
          columns={KOCHI_COMPARISON_COLUMNS}
          rows={KOCHI_COMPARISON_ROWS}
          footer="Every scope gets a fixed-price contract. A free consultation comes first, then a written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="KOCHI × WEB DESIGN"
          headline="Websites for the Sectors That Drive Kochi"
          lead="Kochi's money comes from software parks, tourism, the port, startups and healthcare. Each sector has a different buyer and a different job for its website. These are the six we plan for most often."
          sectors={[
            {
              name: 'Software & IT Services',
              description:
                "Infopark Kochi is home to 450+ IT and software firms. Their clients sit in the US, Europe and the Gulf and shortlist vendors online. A strong IT site shows services by industry, real project write-ups, team strength, the tech stack and a contact route for procurement teams.",
              example:
                'Product companies, outsourcing firms, SaaS teams and digital studios based at Infopark and in Kakkanad.',
            },
            {
              name: 'Tourism & Stays',
              description:
                "Kochi is where many Kerala trips start. Fort Kochi's old quarter, Alappuzha houseboats, Kumarakom resorts and Munnar tea country all draw visitors, and cruise ships call at the port. These businesses need photo-led pages, booking or enquiry forms, review sections and copy that works for foreign guests.",
              example:
                'Fort Kochi homestays and boutique hotels, houseboat owners, Ayurveda retreats and inbound tour operators.',
            },
            {
              name: 'Seafood & Spice Trade',
              description:
                "Cochin Fisheries Harbour and Kochi Port move frozen seafood to buyers in the US, EU, Japan and Southeast Asia. Pepper, cardamom and ginger still trade through Mattancherry and Jew Town. Export sites need certificates, cold chain details, product specs and quote forms aimed at importers.",
              example:
                'Seafood processors, spice exporters and commodity traders working from Willingdon Island and Kochi Port.',
            },
            {
              name: 'Startups & Fintech',
              description:
                "Kerala Startup Mission (KSUM) has backed 5,000+ startups, and Kochi hosts its Startup Village and Maker Village. Founders here build fintech, edtech, agritech and D2C products. Their sites need clear product pages, demo booking, investor-ready proof and pages that are easy to change between funding rounds.",
              example:
                "Early-stage tech firms, fintech teams, SaaS products and D2C brands growing out of KSUM and private incubators.",
            },
            {
              name: 'Hospitals & Ayurveda',
              description:
                "Kochi hospitals treat patients from across Kerala and the Gulf, and the state's Ayurveda centres draw wellness travellers from abroad. Healthcare sites need accreditation details, doctor profiles, appointment booking and pages that answer questions from patients travelling in.",
              example:
                'Multi-specialty hospitals, Ayurveda clinics and resorts, dental groups and wellness centres serving local and overseas patients.',
            },
            {
              name: 'Gulf-Linked Business & Professional Firms',
              description:
                "Many Kochi families have members working in the Gulf, and many local firms serve them. Chartered accountants, property developers and law practices need sites that look credible to a client in Dubai or Doha, with service pages, credentials and an easy way to book a call across time zones.",
              example:
                'CA and CS firms, flat and villa developers, law practices and advisory firms serving Kochi residents and Keralites abroad.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders across India on working with FactoryJet"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Kochi Businesses Ask Us"
          lead="Straight answers to the questions Kochi owners raise on a first call."
          categories={KOCHI_FAQ_CATEGORIES}
          items={KOCHI_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Kochi Website This Week"
          sub="Your next guest, importer or enterprise client will look you up before they write to you. In Kerala, where buyers read closely and compare carefully, a slow or dated site loses them to whoever looks sharper. Send us a brief today and you will have a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="One fixed price. Live in 7 days. Built in Next.js. The code is yours from launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="kochi" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
