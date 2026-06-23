import type { Metadata } from 'next';
import Script from 'next/script';
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

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Pune | | FactoryJet',
  description:
    'Web design company in Pune for IT, auto-tier suppliers, education & D2C brands. Fast websites from ₹25,000. 7-day delivery. Serving Hinjewadi, Koregaon Park & Baner.',
  keywords: [
    'web design company in pune',
    'website development company in pune',
    'web designer in pune',
    'best website development company in pune',
    'top website development company in pune',
    'website development agency in pune',
    'web design Hinjewadi',
    'web design Koregaon Park',
    'Next.js web development Pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Pune | | FactoryJet',
    description:
      'Professional website design company in Pune — Next.js, SEO, and GA4 included. 7-day delivery. Serving Hinjewadi, Koregaon Park, Baner & PCMC.',
    url: 'https://factoryjet.com/web-design/pune',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Pune',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Pune | FactoryJet',
    description: 'Website design company in Pune. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/pune',
    languages: webDesignCityAlternatesIN['pune'],
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/web-design/pune#localbusiness',
  name: 'FactoryJet — Web Design in Pune',
  image: 'https://factoryjet.com/images/services/web-design.webp',
  description:
    'Web design company in Pune building fast, SEO-optimised websites for IT services, auto-tier suppliers, education, and D2C businesses. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/pune',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Hinjewadi' },
  ],
  serviceType: 'Web Design and Development',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Pune',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter Website', description: '5-page business website, mobile-responsive, basic SEO, contact form.' },
      { '@type': 'Offer', name: 'Growth Website', description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.' },
      { '@type': 'Offer', name: 'Custom Website', description: 'Custom Next.js build with e-commerce, portals, booking systems, or AI integrations.' },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost for a small business in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Pune businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, dealer portals, or AI integrations start at ₹1,00,000. Pune agency rates for comparable scope typically run ₹75,000–₹3,00,000 — often without a published timeline or a codebase you own outright.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve IT companies in Hinjewadi and Kharadi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build fast, authority-first websites for IT services firms, SaaS products, and tech startups across Hinjewadi (Phases 1–3), Kharadi, and Wakad — designed to win global B2B tenders, not just look good.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website after it is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. You can take it to any developer or hosting provider at any time. No FactoryJet retainer required, no proprietary platform lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build B2B portals for Pune auto and engineering suppliers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — auto and engineering B2B is a core profile for us in Pune. We build capability websites, dealer and distributor portals, and product catalogues with datasheet downloads for tier-1 and tier-2 suppliers in Chakan, Talegaon, and Pimpri-Chinchwad, with technical SEO that surfaces capability to OEM procurement teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best web design agency in Pune?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Pune: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Pune you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Pune.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Pune or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Pune directly, agree the scope and price in writing first.' },
    },
],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://factoryjet.com/web-design/pune#howto',
  name: 'How FactoryJet builds your Pune website in 7 days',
  description: 'Our 7-day process for delivering a professional, AI-powered website for Pune businesses.',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', minValue: '25000' },
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Day 1 — Discovery Call', text: 'We learn your business, your Pune market, your goals, and what you need the website to do.' },
    { '@type': 'HowToStep', position: 2, name: 'Day 2 — Strategy & Structure', text: 'We map your site architecture, research your Pune competitors, identify your top keywords, and write the first draft of your page copy.' },
    { '@type': 'HowToStep', position: 3, name: 'Days 3–4 — Design', text: 'Your bespoke design is created — homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.' },
    { '@type': 'HowToStep', position: 4, name: 'Days 5–6 — Development & SEO', text: 'Your approved design is built in code — fast, mobile-first, and SEO-optimised. Pune local schema markup added. Google Analytics and Search Console connected.' },
    { '@type': 'HowToStep', position: 5, name: 'Day 7 — Launch', text: 'Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.' },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/pune#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/web-design/pune',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const PUNE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer against Pune's market — whether that's an OEM procurement lead sourcing from Chakan, a global IT buyer evaluating a Hinjewadi firm, or a parent researching a coaching institute. We audit your top three competitors and agree the sitemap and content plan. — Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, form field, and section reviewed against your conversion goal before a line of code is written. You approve the design before development starts. — Days 3–4',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, dealer portals, booking flows, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Pune-specific local SEO targeting built in — not sold as an add-on. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const PUNE_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Pune Local' },
  { key: 'support', label: 'Support & Ownership' },
];

const PUNE_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a small business in Pune?',
    answer:
      "FactoryJet's web design for Pune businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, dealer portals, or AI integrations start at ₹1,00,000. Pune agency rates for comparable scope typically run ₹75,000–₹3,00,000 — often without a published timeline or a codebase you own outright.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace — not from the first conversation.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Pune web agency?',
    answer:
      'We are a specialised web engineering team — not a full-service agency with account managers, strategy teams, and office overheads in Baner or Koregaon Park. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at a fraction of the cost. We have been building websites since 1999. You pay for the build, not our admin structure.',
  },
  {
    category: 'pricing',
    question: 'What is the 7-day delivery guarantee?',
    answer:
      'If we miss the agreed delivery date, you do not pay. The guarantee applies to the development phase we control — design, build, content, and launch. If your internal approvals take longer, we agree a revised schedule upfront and the guarantee applies to the rescheduled date. We have delivered on time on 97% of all projects.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: "What's included in a web design project?",
    answer:
      'Every FactoryJet project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day, the Figma design files, and a recorded handover walkthrough.',
  },
  {
    category: 'included',
    question: 'Do you write the content for my website?',
    answer:
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content — detailed service pages, blog posts, and city landing pages — is available as an add-on. We send a content brief before development starts so you know exactly what to provide and what we will write.',
  },
  {
    category: 'included',
    question: 'Do you provide website hosting?',
    answer:
      "We deploy to Cloudflare Pages, which is free for most projects (static Next.js builds). You set up and own your own Cloudflare account — we configure it for you. This means you are never on a shared hosting server that slows down under traffic spikes. There is no monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can add blog posts, update pages, and change service descriptions without touching code. We configure the CMS and walk you through it in the handover session. Starter tier uses a lightweight approach you can manage simply, or we can set up on request.',
  },
  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank within 1–2 weeks. Service + location queries like "web design company in Pune" take 3–6 months for a new domain. The work that compresses that timeline is in every FactoryJet project by default.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on, and why does it matter?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN. Next.js generates static pages that load under 1.5 seconds on Indian 4G networks — significantly faster than WordPress, which renders server-side and is loaded with plugins. For Pune businesses competing on local search and Google's Core Web Vitals ranking signals, that performance gap over a WordPress competitor is real and measurable.",
  },
  {
    category: 'technical',
    question: 'How does the site perform on mobile for Indian users?',
    answer:
      'Mobile-first is the default. Every build targets Lighthouse 90+ and green Core Web Vitals on mobile before launch. We design at 375px before desktop, serve WebP images via Cloudflare CDN with lazy loading, and build thumb-friendly tap targets throughout. Given that 70%+ of Indian web traffic is mobile — often on 4G with variable speeds — mobile performance is non-negotiable and tested before delivery.',
  },
  {
    category: 'technical',
    question: 'Do you set up Google Analytics and Search Console?',
    answer:
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, phone clicks) are configured from day one so you are tracking revenue-relevant actions, not just page views. Search Console is verified and the sitemap submitted. We walk you through both in the handover.',
  },
  /* ── Pune Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT companies in Hinjewadi and Kharadi?',
    answer:
      "Yes. We build authority-first websites for IT services firms, SaaS products, and tech startups across Hinjewadi (Phases 1–3), Kharadi, and Wakad. Pune IT firms compete with Bangalore for global tenders, so we build sites that project capability and depth to international B2B buyers — clear service capabilities, case studies, and client logos.",
  },
  {
    category: 'local',
    question: 'Can you build websites for auto manufacturers in Chakan and PCMC?',
    answer:
      'Absolutely. We design B2B supplier portals, capability websites, and product catalogues for tier-1 and tier-2 automotive component manufacturers in Chakan, Talegaon, and Pimpri-Chinchwad. Datasheet downloads, RFQ inquiry systems, and technical SEO that surfaces your capability to OEM procurement teams — all standard.',
  },
  {
    category: 'local',
    question: 'Do you work with coaching institutes and colleges in Pune?',
    answer:
      "Yes. Pune is the Oxford of the East, with 200+ engineering and management colleges and a dense coaching ecosystem. We build lead-generating websites for JEE/NEET coaching, MBA prep, colleges, and ed-tech platforms — optimised to capture enquiries and convert them into admissions.",
  },
  {
    category: 'local',
    question: "Do you know Pune's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Pune's business geography as part of discovery — from the Hinjewadi and Kharadi IT corridors to the Chakan and PCMC auto belt, and the premium D2C and hospitality scene in Koregaon Park, Kalyani Nagar, Baner, and Aundh. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches, where many Pune B2B and professional services businesses win.",
  },
  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. You can take it to any developer or hosting provider at any time. No FactoryJet retainer required to keep your site running. No proprietary platform lock-in.',
  },
  {
    category: 'support',
    question: 'What support do you provide after launch?',
    answer:
      'Every project includes a 30-day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month: up to 3 hours of development changes, priority same-day bug response, and a dedicated engineer who knows your codebase. Maintenance clients also get quarterly performance audits and Core Web Vitals checks.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. After the support window, a maintenance retainer covers priority response. Because your site is on Cloudflare Pages (static files, global CDN), the most common causes of downtime — server crashes, plugin conflicts, database failures — simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Pune businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling, a dedicated engineer, and quarterly website health reports. Many of our Pune clients start with a project and move to a retainer once the site is live and generating leads.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Pune?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Pune: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Pune you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Pune.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Pune or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Pune directly, agree the scope and price in writing first.',
  },
];

const PUNE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Pune Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const PUNE_COMPARISON_ROWS = [
  { feature: 'Starting price', values: ['Get a Quote', '₹75,000–₹3,00,000', '₹15,000–₹40,000', '₹0–₹15,000 (you build it)'] },
  { feature: 'Delivery timeline', values: ['7 days', '6–16 weeks', '3–8 weeks (unreliable)', '1–2 weeks (you build it)'] },
  {
    feature: 'Custom Figma design',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Technical SEO built in',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="yes" />],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: '7-day delivery guarantee',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="no" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="tp" kind="no" />],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function PuneWebDesignPage() {
  return (
    <>
      <Script id="pune-local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="pune-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Pune', url: 'https://factoryjet.com/web-design/pune' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_pune_hero" />}
          eyebrow="WEB DESIGN · PUNE"
          headline="Website Design in Pune That Wins B2B Tenders — Not Just Page Views"
          lead="Pune is India's #2 IT export hub, the auto OEM and tier-1 supplier capital, and the Oxford of the East with 200+ engineering and management colleges. IT firms in Hinjewadi compete with Bangalore for global tenders, auto suppliers in Chakan compete on capability, and D2C brands in Koregaon Park compete with Mumbai. FactoryJet builds from ₹25,000 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={['Websites from ₹25,000', '7-day delivery guarantee', '500+ businesses built']}
          rightSlot={<HeroBrowserMockup badgeCity="Pune" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="PUNE MARKET"
          headline="The Oxford of the East, Now a Premier Tech & Auto Hub"
          leadParagraphs={[
            "Pune has transformed from a pensioner's paradise into one of India's most dynamic business cities. With thousands of technology companies in the Hinjewadi and Kharadi IT corridors, a massive automotive cluster in Chakan and Pimpri-Chinchwad, and 200+ engineering and management colleges, Pune sits at a rare intersection of talent, manufacturing, and innovation.",
            "This diversity creates a web design challenge unique to Pune: an OEM tier-1 supplier in Chakan needs a completely different site from a SaaS startup in Hinjewadi — different trust signals, different buyer journeys, different conversion flows. A coaching institute needs a different mobile experience from a premium D2C brand in Koregaon Park. FactoryJet builds for all of them, because we start every project with the buyer in mind, not the template.",
            "In a city where competition is intense across every sector, your website is often the first — and sometimes only — impression you make on a client, partner, or hire. A slow, outdated site costs you business. A fast, well-structured one builds authority before a single call is made.",
          ]}
          stats={[
            {
              value: '#2',
              label: "India's IT export hub by revenue, after Bangalore",
              sourceUrl: 'https://stpi.in/',
              sourceLabel: 'STPI',
            },
            {
              value: '200+',
              label: 'Engineering & management colleges in and around Pune',
              sourceUrl: 'https://www.aicte-india.org/',
              sourceLabel: 'AICTE',
            },
            {
              value: '₹5.5L Cr',
              label: 'Pune metro GDP — one of India\'s largest urban economies',
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (two buyer types) ─────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · PUNE"
          headline="Pune Has Two Speeds — We Design for Both"
          lead="Pune's economy spans enterprise IT services, fast-moving startups, industrial manufacturers, and a thriving education sector. Each evaluates and converts differently — so each needs a tailored web strategy. FactoryJet builds for both speeds."
          body={
            <>
              <p>
                For Pune&apos;s IT, auto, and manufacturing firms — in Hinjewadi, Kharadi, Chakan, and PCMC —
                a website needs to project capability, technical depth, and credibility. Enterprise buyers
                and OEM procurement teams research vendors with scrutiny before a call. The site must answer
                their due-diligence questions clearly: capabilities, certifications, case studies, client
                logos, and a frictionless RFQ or enquiry form. We build these with authority-first
                architecture, product and datasheet systems, and lead flows designed for longer B2B cycles.
              </p>
              <p>
                For Pune&apos;s D2C brands, coaching institutes, and consumer businesses in Koregaon Park,
                Baner, Aundh, and Kalyani Nagar, the challenge is the opposite. Consumers and students arrive
                on mobile and decide in seconds. The site needs to load under 1.5 seconds on 4G, present the
                product, programme, or service above the fold, and make the next step obvious. We build these
                mobile-first, at 375px before 1440px, with Lighthouse 90+ performance before launch.
              </p>
              <p>
                Every FactoryJet Pune project covers discovery, Figma prototyping, Next.js development, SEO,
                GA4, and a 30-day support window. You leave with a codebase you own, a design system you keep,
                and a site built to rank — not just to look good in a mockup.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Two buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'IT / Auto / B2B', need: 'Authority + capability + RFQ', area: 'Hinjewadi · Kharadi · Chakan · PCMC', colour: '#F05A28' },
                  { type: 'D2C / Education / Consumer', need: 'Speed + mobile + instant CTA', area: 'Koregaon Park · Baner · Aundh', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500 mb-1" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.area}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Same engineering quality. Strategy tailored to your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Pune Businesses Choose FactoryJet Over Local Agencies"
          lead="Pune web agencies typically charge ₹75,000–₹3,00,000 for a comparable project and take 6–16 weeks to deliver — without publishing their rates or timeline upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Pune moves fast — talent, startups, and tenders do not wait. Waiting 16 weeks for an agency to deliver a website you briefed in spring is not a plan, it is a liability. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN nodes near Pune and worldwide. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Pune businesses competing on Google Core Web Vitals signals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your site running.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Pune Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={PUNE_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'MEP / BIM Consulting · Pune',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm in Pune. FactoryJet rebuilt their website on Next.js with an authority-first architecture for B2B project enquiries — credentials display, project portfolio, and technical SEO targeting high-value engineering queries.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description:
                'Belle Maison is a premium interior décor brand. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value interior design queries. Lighthouse 95+ on mobile before launch.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Pune Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Pune deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption: 'starting price — the same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹1,50,000+ Pune agency project.',
          }}
          columns={PUNE_COMPARISON_COLUMNS}
          rows={PUNE_COMPARISON_ROWS}
          footer="Prices reflect typical Pune market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="PUNE × WEB DESIGN"
          headline="Web Design for Pune's Key Industries"
          lead="From Hinjewadi IT firms to Chakan auto suppliers to Koregaon Park D2C brands — Pune's economy spans industries with very different digital requirements. FactoryJet has built for each."
          sectors={[
            {
              name: 'IT & Software',
              description: 'Modern, authority-first websites for IT services companies, SaaS products, and tech startups in Hinjewadi, Kharadi, and Wakad — built to win global B2B tenders.',
              example: 'IT services firms and SaaS startups across the Hinjewadi and Kharadi corridors competing for global mandates.',
            },
            {
              name: 'Automotive & Engineering',
              description: 'B2B supplier portals, capability sites, and product catalogues for auto OEM suppliers and engineering firms in Chakan, Talegaon, and PCMC.',
              example: 'Tier-1 and tier-2 automotive component manufacturers and engineering firms across the Chakan–PCMC belt.',
            },
            {
              name: 'Education & EdTech',
              description: 'Lead-generating websites for coaching institutes, colleges, and ed-tech platforms targeting Pune and Maharashtra — built to convert enquiries into admissions.',
              example: 'JEE/NEET coaching, MBA prep, colleges, and ed-tech platforms across Pune, the Oxford of the East.',
            },
            {
              name: 'Manufacturing & MSME',
              description: 'Credibility-first websites for PCMC manufacturers, MSME exporters, and industrial suppliers — with technical SEO that surfaces capability to procurement buyers.',
              example: 'Industrial suppliers and MSME exporters across Pimpri-Chinchwad and the wider Pune industrial belt.',
            },
            {
              name: 'D2C & Premium Retail',
              description: 'Conversion-focused, mobile-first websites for D2C brands, hospitality, and lifestyle businesses in Koregaon Park, Kalyani Nagar, and Viman Nagar.',
              example: 'Premium D2C, lifestyle, and hospitality brands across Pune\'s upmarket eastern neighbourhoods.',
            },
            {
              name: 'Professional Services',
              description: 'Clean, trust-building websites for CA firms, law practices, HR consultancies, and management advisory businesses serving Pune\'s corporate ecosystem.',
              example: 'CA and CS firms, corporate law practices, consulting firms, and HR companies across Pune.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say after we build their site" region="in" />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Pune Businesses"
          lead="The questions we answer on every Pune discovery call — answered here, without the runaround."
          categories={PUNE_FAQ_CATEGORIES}
          items={PUNE_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build a Website Pune Is Proud Of?"
          sub="Pune's IT, auto, and education economy is home to some of India's most competitive businesses — and every one of them is competing for the same Google rankings, the same buyer first impression, and the same digital real estate. Every week without a high-performing website is ground you are giving to a competitor who showed up with a better one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
