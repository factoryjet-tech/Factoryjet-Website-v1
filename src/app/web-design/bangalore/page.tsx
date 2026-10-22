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
  title: 'Web Design Company in Bangalore | FactoryJet',
  description:
    'Web design company in Bangalore for startups, IT firms & D2C brands. Fast, SEO-optimized websites with 7-day delivery. Serving Koramangala & Whitefield.',
  keywords: [
    'web design company in Bangalore',
    'website design Bangalore',
    'web development company Bangalore',
    'website design company Bangalore',
    'affordable web design Bangalore',
    'startup website design Bangalore',
    'web design Koramangala',
    'web design Whitefield',
    'IT company website design Bangalore',
    'SaaS website design Bangalore',
    'Next.js web development Bangalore',
    'web design agency Bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Bangalore | FactoryJet',
    description:
      'Professional website design company in Bangalore: Next.js, SEO, and GA4 included. 7-day delivery. Serving Koramangala, Whitefield, HSR Layout, Electronic City.',
    url: 'https://factoryjet.com/web-design/bangalore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Bangalore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Bangalore | FactoryJet',
    description:
      'Website design company in Bangalore. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/bangalore',
    languages: webDesignCityAlternatesIN['bangalore'],
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
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/bangalore#webpage',
  url: 'https://factoryjet.com/web-design/bangalore',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const BLR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Bangalore's market, whether that's an enterprise IT buyer evaluating vendors in Whitefield, a SaaS prospect researching tools in Koramangala, or a D2C consumer shopping on mobile. We audit your top three competitors and agree the sitemap and content plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, form field, and section reviewed against your conversion goal before a line of code is written. You approve the design before development starts.: Days 3–4',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN: sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking flows, demo request systems, and any third-party APIs your business uses. Performance budgets enforced from the first commit.: Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Bangalore-specific local SEO targeting built in, not sold as an add-on.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included.: Day 7+',
  },
];

const BLR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Bangalore Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const BLR_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: "How much does a website cost for a startup in Bangalore?",
    answer:
      "It depends on what the site has to do. For Bangalore startups the price moves with the number of page templates, the SaaS pages most brochure sites skip (pricing, product tour, security, changelog), CRM integration with HubSpot or Zoho, and whether you want a Kannada version. A five-page launch site costs far less than a full SaaS site. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'pricing',
    question: "How fast can a Bangalore startup get a new website live?",
    answer:
      "Sites of up to five pages go live in 7 days, counted from the day your logo, brand colours and content reach us. Larger SaaS sites with case studies, docs and a blog are scoped on the call and take longer. If you are timing the site to a funding announcement or a product launch, tell us the date first. We have delivered on time on 97% of projects.",
  },
  {
    category: 'pricing',
    question: "Can we see a draft before we sign a contract?",
    answer:
      "Yes. Before any contract, we build a working draft of your homepage on your own content and show it to you in a browser, not as a slide. You judge the design, the copy and the speed on a real page. If it is not right for you, you have spent nothing and you keep the feedback.",
  },
  {
    category: 'pricing',
    question: "How do payments work for a web design project?",
    answer:
      "The work is split into phases. Each phase is scoped, priced and signed on its own, and the price is fixed in writing, so it does not grow with hours. You approve one phase before the next one starts. That suits Bangalore founders who need to show a board or an investor exactly what each rupee bought.",
  },
  {
    category: 'included',
    question: "What does a SaaS website need that a brochure site does not?",
    answer:
      "Six pages most templates skip: a pricing page that answers the plan question without a call, a product tour or demo request flow, case studies with named results, a security page that states your SOC 2 or ISO 27001 status honestly, an integrations directory, and a changelog. Enterprise buyers check the security page and case studies before they ever book a demo.",
  },
  {
    category: 'included',
    question: "Do you write the website copy?",
    answer:
      "Yes, for the core pages. We interview the founder, then draft headlines, the homepage and service or product pages in plain English that a buyer in Ohio or Berlin reads the same way as one in Bengaluru. You edit and approve every line. Blog articles and long guides are quoted separately, because they need research of their own.",
  },
  {
    category: 'included',
    question: "Can our marketing team edit the site without an engineer?",
    answer:
      "Yes. We connect a headless CMS such as Sanity or Contentful, or use WordPress where your team already knows it. Your marketers can publish blog posts, add case studies and change page copy without touching code. We set up the editing screens around your content, then walk the team through it in a recorded handover session.",
  },
  {
    category: 'included',
    question: "Do you host the website?",
    answer:
      "We deploy to Cloudflare Pages in a Cloudflare account that belongs to you. Its free plan covers most marketing sites, so many clients pay nothing for hosting. The domain stays in your name too. We never put your site on an account you do not control, and we do not add a markup to hosting.",
  },
  {
    category: 'technical',
    question: "Will the site rank on Google in India and abroad?",
    answer:
      "It starts with the right build: schema markup, clean titles, fast pages and a sitemap in Search Console. Bangalore companies that sell to the US and India often need separate pages for each market, linked with hreflang tags so Google shows the right one. Ranking for competitive terms then depends on content and links built over months, not on launch day.",
  },
  {
    category: 'technical',
    question: "Why do you build on Next.js, and when is WordPress better?",
    answer:
      "Next.js produces static pages that load fast, have no plugins to patch, and suit the product and pricing pages SaaS companies change often. WordPress is the better choice when a non-technical team publishes several posts a week and wants the editor it already knows. We recommend one on the scoping call based on who will edit the site.",
  },
  {
    category: 'technical',
    question: "Will the site be fast on Indian mobile networks?",
    answer:
      "We test on a mid-range Android phone over 4G, not only on a fibre connection in an office. The targets are Google's Core Web Vitals: LCP under 2.5 seconds, INP under 200 milliseconds and CLS under 0.1. We design at 375 pixels wide first, serve compressed images and load chat and tracking scripts only after the page is usable.",
  },
  {
    category: 'technical',
    question: "Can the site send leads to HubSpot, Zoho or Salesforce?",
    answer:
      "Yes. Contact and demo request forms post straight into your CRM with the page, campaign and UTM source attached, so your sales team sees where each lead came from. GA4 and Search Console are set up before launch, with form submissions and demo requests tracked as conversions from the first day.",
  },
  {
    category: 'local',
    question: "Do you build websites for Bangalore IT services firms selling to US and European clients?",
    answer:
      "Yes. A firm in Whitefield or Electronic City pitching a US bank is judged on its website before any call. The site needs case studies by industry, certifications such as ISO 27001 shown with their scope, a clear delivery model and an RFP contact route that reaches the right person fast. Generic stock photos of handshakes cost more trust than they win.",
  },
  {
    category: 'local',
    question: "How do you design websites for SaaS startups in Koramangala and HSR Layout?",
    answer:
      "It depends on how you sell. A product-led startup needs a sign-up button above the fold, a pricing page and short product videos. A sales-led one needs a demo request flow, case studies and a security page for enterprise buyers. Many Bangalore SaaS teams run both motions, so we design two clear paths and track which one each visitor takes.",
  },
  {
    category: 'local',
    question: "Do you build sites for global capability centres in Whitefield and Manyata Tech Park?",
    answer:
      "Yes. Most global capability centres need a careers and employer brand site rather than a sales site: open roles pulled from the applicant tracking system, team stories, office locations and a clear explanation of what the Bangalore centre builds for the parent company. Approvals often run through the parent's brand team, so we plan for that review step.",
  },
  {
    category: 'local',
    question: "Can you build websites for D2C brands in Indiranagar and Jayanagar?",
    answer:
      "Yes. Consumer brands usually sell on Shopify, so we build or redesign the store with fast product pages, UPI and COD through Razorpay, and Instagram product sync. If you need a content-heavy brand site next to the store, we build that on Next.js and link the two. Our ecommerce development page for Bangalore covers stores in more detail.",
  },
  {
    category: 'local',
    question: "Can our website have a Kannada version?",
    answer:
      "Yes. We add Kannada pages on their own URLs, tagged with hreflang so Google indexes both languages, and use a Kannada font that renders cleanly on low-cost Android phones. The Kannada copy should be written or checked by a native speaker, not machine-translated. Most B2B tech companies keep English only, while consumer and local service brands gain the most from Kannada.",
  },
  {
    category: 'local',
    question: "What privacy rules apply to a Bangalore company website?",
    answer:
      "India's Digital Personal Data Protection Act, 2023 covers the names, emails and phone numbers your forms collect, so every form gets a plain notice saying what you collect and why, linked to a privacy policy. If you market to visitors in Europe, GDPR consent rules apply to tracking cookies too. This is general information, not legal advice.",
  },
  {
    category: 'support',
    question: "Do we own the website after it is built?",
    answer:
      "Yes. The full codebase sits in a GitHub repository in your name, along with the Figma design files. The domain, the Cloudflare account and every analytics login belong to you. There is no platform lock-in and no fee to keep the site running, so you can hand it to any developer later.",
  },
  {
    category: 'support',
    question: "What support do we get after launch?",
    answer:
      "Defects in what we built are fixed inside the build price for a cover period agreed before work starts. After that, support is optional. Each change is quoted and approved by you before we do it, and there is no monthly minimum. Teams that ship product updates every sprint often ask us for a fixed monthly scope, which we quote separately.",
  },
  {
    category: 'support',
    question: "What happens if something breaks after launch?",
    answer:
      "A static site on Cloudflare has fewer things that can break than a plugin-heavy WordPress install: no database to crash and no plugin updates to conflict. If a defect in our work shows up during the cover period, we fix it at no cost. Problems caused by later changes or third-party tools are quoted before we touch them.",
  },
  {
    category: 'support',
    question: "Can you keep building pages for us after launch?",
    answer:
      "Yes. Bangalore startups often need new landing pages for each campaign, feature launch or new market. We can build them on request, each one quoted before work starts, or on a fixed monthly scope if you know the volume ahead. Either way your team keeps the ability to publish routine updates itself through the CMS.",
  },
  {
    category: 'pricing',
    question: "Who is the best web design agency in Bangalore?",
    answer:
      "For startups, IT services firms and D2C brands, FactoryJet makes a strong case as the best web design company in Bangalore: a draft of your site before you sign, 7-day delivery for sites up to five pages, and a fixed written price. Any website design company in Bangalore you compare should pass three checks: live sites you can test, a fixed price, and full ownership at the end.",
  },
  {
    category: 'pricing',
    question: "Should I hire a web designer in Bangalore or use an agency?",
    answer:
      "A freelancer can be right for a one-page launch site. A company website also needs design, development, SEO, analytics and support working together, and one person rarely covers all five. A small senior team does, at a fixed price. If you hire a web designer in Bangalore directly, test two of their live sites on your phone and agree the scope in writing first.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BLR_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const BLR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bangalore Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const BLR_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/bangalore#howto`,
  name: `How FactoryJet builds your Bangalore website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Bangalore businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: `We learn your business, your Bangalore market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: `We map your site architecture, research your Bangalore competitors, identify your top keywords, and write the first draft of your page copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Design',
      text: 'Your bespoke design is created, homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Development & SEO',
      text: `Your approved design is built in code, fast, mobile-first, and SEO-optimised. Bangalore local schema markup added. Google Analytics and Search Console connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/bangalore#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/bangalore`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function BangaloreWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="blr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="blr-faq-schema"
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
          { name: 'Bangalore', url: 'https://factoryjet.com/web-design/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Bangalore', url: 'https://factoryjet.com/web-design/bangalore' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_bangalore_hero" />}
          eyebrow="WEB DESIGN · BANGALORE"
          headline="Website Design in Bangalore Built for Startups, IT Companies, and D2C Brands"
          lead="Bangalore drives $20B+ in annual IT exports, hosts 15,000+ registered startups, and is India's fastest-growing D2C city. Koramangala, Whitefield, HSR Layout, and Electronic City are home to businesses that compete globally, and your website is the first impression every buyer gets. FactoryJet builds Figma-designed, Next.js-built websites with 7-day delivery, your codebase delivered in full."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and 7-day delivery."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BANGALORE MARKET"
          headline="Why Your Bangalore Web Presence Is a Competitive Advantage, Not a Checkbox"
          leadParagraphs={[
            "Bangalore is India's technology capital, contributing $20B+ annually in IT and software exports and housing over 15,000 registered startups as of 2024. The city's ecosystem spans enterprise IT outsourcing firms in Whitefield and Electronic City, SaaS product companies and D2C brands in Koramangala and HSR Layout, and a rapidly growing medtech and edtech sector across Indiranagar and Jayanagar. More than any other Indian city, Bangalore's businesses compete for global buyers, US enterprise procurement teams evaluating offshore IT vendors, international investors screening SaaS companies, and Indian consumer segments reached primarily through digital channels.",
            "This creates a web design challenge unique to Bangalore: an IT services firm targeting Fortune 500 US clients needs a completely different site architecture from a D2C health brand selling to Indian consumers on Instagram. A SaaS startup pitching seed-stage investors needs different content hierarchy from an established engineering services company building its RFP response pipeline. FactoryJet builds for all of them, because we start every project with the buyer journey in mind, not the template.",
            "Bangalore's competitive density means the gap between a high-performing website and an average one is measured in qualified leads per month, not aesthetics. A 1-second load improvement increases conversion by 7%. A properly structured case study page indexed by Google can become your highest-converting sales asset. These are the outcomes FactoryJet is engineered to deliver, in 7 days.",
          ]}
          stats={[
            {
              value: '$20B+',
              label: "Bangalore's annual IT and software exports: India's largest tech city by export value",
              sourceUrl: 'https://nasscom.in/knowledge-center/publications',
              sourceLabel: 'NASSCOM Annual Report',
            },
            {
              value: '15,000+',
              label: 'Registered startups in Bangalore: India\'s largest startup ecosystem',
              sourceUrl: 'https://www.startupindia.gov.in/',
              sourceLabel: 'Startup India Dashboard',
            },
            {
              value: '₹7.5L Cr',
              label: "Bangalore's estimated GDP: one of India's fastest-growing major city economies",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · BANGALORE"
          headline="What 'Web Design' Actually Means for a Bangalore Business"
          lead="Bangalore's economy runs on two very different buyer behaviours, B2B enterprise and SaaS buyers doing weeks of vendor research, and D2C consumers deciding in under 10 seconds on mobile. Both demand very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Bangalore&apos;s IT services firms, SaaS companies, and enterprise software
                businesses, companies in Whitefield, Electronic City, Manyata Tech Park, and
                Koramangala: a website needs to project technical credibility, delivery capability,
                and client track record. US and EU procurement teams research vendors for months
                before making contact. The site needs to answer their evaluation questions clearly:
                technology stack, engagement models, case studies, certifications, and a
                frictionless contact flow. We build these sites with authority-first architecture,
                product demo systems, case study libraries, and lead-capture flows designed for
                longer B2B sales cycles.
              </p>
              <p>
                For Bangalore&apos;s D2C brands, consumer startups, and service businesses in
                Indiranagar, Bandra, Koramangala, and Jayanagar: the challenge is entirely
                different. Consumers arriving on mobile from Instagram or Google search make
                decisions in seconds. The site needs to load under 1.5 seconds on a 4G connection,
                present the product or service above the fold, and make the next step obvious. We
                build these sites mobile-first, at 375px before 1440px, with Lighthouse 90+
                performance before launch.
              </p>
              <p>
                Every FactoryJet Bangalore project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own, a design system you keep, and a site built to rank and convert.
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
                  Two buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / IT & SaaS',
                    need: 'Credibility + case studies + demo flow',
                    area: 'Whitefield · Electronic City · Koramangala · MTP',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Indiranagar · HSR · Bandra · Jayanagar',
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
                  Same engineering quality. Strategy tailored to your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Bangalore Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, puts 7-day delivery in writing, and builds in Next.js rather than WordPress, faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront, no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: "Bangalore moves fast: a startup waiting 16 weeks for a website they briefed in April is losing ground to the competitor that shipped in week one. FactoryJet delivers in 7 days, with the delivery date written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN nodes globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Bangalore businesses competing on Google's Core Web Vitals signals, that gap directly affects rankings.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your site running.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Bangalore Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={BLR_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison is a Mumbai wholesale distributor of artificial plants, flowers, flower runners, home décor, and LED lighting. FactoryJet built their B2B quote-to-cash store on Commerceflo, with trade pricing tiers, quote-to-order workflows, and account-based ordering.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on WordPress with an authority-first architecture designed for B2B project enquiries, credentials display, project portfolio, and technical SEO targeting high-value engineering queries.',
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
          headline="FactoryJet vs. Bangalore Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Bangalore deliver the same output. Here is the honest comparison, scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch, same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={BLR_COMPARISON_COLUMNS}
          rows={BLR_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="BANGALORE × WEB DESIGN"
          headline="Web Design for Bangalore's Key Industries"
          lead="From Whitefield IT parks to Koramangala startups to Indiranagar D2C brands, Bangalore's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT Services & Software',
              description:
                "Bangalore is India's largest IT outsourcing hub, home to Infosys, Wipro, TCS campuses, and thousands of mid-size and boutique IT services firms. These businesses compete for US, EU, and APAC enterprise contracts. Their websites need to project technical delivery capability, CMMI and ISO certifications, client case studies, and frictionless contact flows for global procurement teams.",
              example:
                'IT outsourcing firms in Whitefield, Electronic City, and Manyata Tech Park targeting enterprise clients in the US, UK, and Europe.',
            },
            {
              name: 'SaaS & Product Startups',
              description:
                "Bangalore is home to India's most active SaaS ecosystem, from seed-stage startups to Series B companies scaling globally. SaaS websites need product demo flows, pricing page architecture, case study libraries, and lead-capture forms designed for free-trial and demo-request conversion. We build for both PLG and sales-led SaaS motions.",
              example:
                'B2B SaaS startups in Koramangala, HSR Layout, and Indiranagar targeting global SMB and enterprise buyers.',
            },
            {
              name: 'D2C & Consumer Brands',
              description:
                "Bangalore's D2C ecosystem has produced some of India's most successful consumer brands, health, wellness, lifestyle, and personal care companies that reach consumers directly through digital channels. D2C websites need to convert mobile visitors in under 10 seconds: sub-1.5s load times, above-the-fold product display, Razorpay one-tap checkout, and Instagram integration.",
              example:
                'D2C health, lifestyle, and personal care brands in Indiranagar, Koramangala, and Jayanagar selling to consumers across India.',
            },
            {
              name: 'Professional & Consulting',
              description:
                "Bangalore's management consulting, legal, CA/CS, and HR consulting sector is growing alongside its tech ecosystem. For these businesses, the website is the first qualification filter, does this firm look credible enough to engage? We build authority-first sites with service capability pages, team credentials, and lead-capture flows that convert research into booked consultations.",
              example:
                'Management consulting, legal, CA/CS firms, and HR companies serving Bangalore\'s corporate and startup ecosystem.',
            },
            {
              name: 'Healthcare & Medtech',
              description:
                "Bangalore has become India's medtech hub, home to a growing cluster of medical device companies, health-tech startups, and hospital groups. Medtech B2B websites need regulatory compliance awareness, clinical evidence display, and institutional procurement lead flows. Hospital and clinic websites need appointment booking integrations, doctor profiles, and local SEO.",
              example:
                'Medical device companies, health-tech startups, hospital groups, and diagnostic chains serving Bangalore and South India.',
            },
            {
              name: 'Education & EdTech',
              description:
                "Bangalore is home to some of India's most prestigious educational institutions and a thriving EdTech startup ecosystem. EdTech websites need course catalog architecture, demo-class booking flows, student testimonials, and lead-nurturing infrastructure. Traditional education institutions need authority-first positioning with admissions enquiry flows and programme detail pages.",
              example:
                "EdTech startups, coaching institutes, and educational institutions across Bangalore serving India's student market.",
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Bangalore Businesses"
          lead="The questions we answer on every Bangalore discovery call, answered here, without the runaround."
          categories={BLR_FAQ_CATEGORIES}
          items={BLR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Bangalore Website?"
          sub="Bangalore's 15,000+ startups and $20B+ IT ecosystem means every serious business is competing for the same Google rankings and the same first impression. The difference between winning and losing that competition is usually a faster, better-structured web presence. Every week without a high-performing website is market share you are handing to a competitor who shipped theirs first. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="bangalore" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
