import type { Metadata } from 'next';
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
  title: 'Web Design Company in Kolkata | FactoryJet',
  description:
    'Web design company in Kolkata for jute & tea traders, IT firms, and port logistics businesses. Fast, custom websites with a 7-day delivery guarantee. Serving Salt Lake, Rajarhat, Park Street & Dalhousie.',
  keywords: [
    'web design company in Kolkata',
    'website design Kolkata',
    'web development company Kolkata',
    'website design company Kolkata',
    'affordable web design Kolkata',
    'professional website design Kolkata',
    'web design Salt Lake Sector V',
    'web design Rajarhat New Town',
    'jute tea website design Kolkata',
    'logistics company website Kolkata',
    'Next.js web development Kolkata',
    'web design agency Kolkata',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Kolkata | FactoryJet',
    description:
      'Professional website design company in Kolkata — Next.js, SEO, and GA4 included. 7-day delivery. Serving Salt Lake Sector V, Rajarhat, Park Street, Dalhousie, and Burrabazar.',
    url: 'https://factoryjet.com/web-design/kolkata',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Kolkata',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Kolkata | FactoryJet',
    description:
      'Website design company in Kolkata. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/kolkata',
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
  '@id': 'https://factoryjet.com/web-design/kolkata#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Kolkata building fast, SEO-optimized websites for jute & tea traders, IT firms, logistics businesses, and growing SMBs. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/kolkata',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Howrah' },
    { '@type': 'City', name: 'Salt Lake' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Kolkata',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        description: 'Custom Next.js build with e-commerce, booking systems, or AI integrations.',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost for a business in Kolkata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Kolkata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for jute and tea trade businesses in Kolkata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — jute traders, tea exporters, and commodity trading businesses are a core client profile for us in Kolkata. We build websites optimised for international B2B buyer research: export credentials display, product catalog with inquiry forms, and technical SEO targeting English-language searches from buyers in the US, EU, and the Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Kolkata business website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is built in: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website after it is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No retainer required, no platform lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best web design agency in Kolkata?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Kolkata: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Kolkata you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Kolkata.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Kolkata or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Kolkata directly, agree the scope and price in writing first.' },
    },
],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const KOL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Kolkata's market — whether that's an international buyer sourcing jute or tea, an IT firm in Salt Lake Sector V, a logistics business near Kolkata Port, or a retail brand on Park Street. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, product catalog systems, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Kolkata-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const KOL_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Kolkata Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const KOL_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Kolkata?',
    answer:
      "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Kolkata web agency?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with large overhead. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. You pay for the build, not our admin structure.",
  },
  {
    category: 'pricing',
    question: 'What is the 7-day delivery guarantee?',
    answer:
      'If we miss the agreed delivery date, you do not pay. The guarantee applies to the development phase we control — design, build, content, and launch. We have delivered on time on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What's included in a web design project?",
    answer:
      'Every FactoryJet project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day.',
  },
  {
    category: 'included',
    question: 'Do you write the content for my website?',
    answer:
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content is available as an add-on. We send a content brief before development starts so you know exactly what to provide.',
  },
  {
    category: 'included',
    question: 'Do you provide website hosting?',
    answer:
      "We deploy to Cloudflare Pages, which is free for most projects. You own your own Cloudflare account — we configure it for you. No monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can update content without touching code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches typically rank within 1–2 weeks.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Kolkata businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
  },
  {
    category: 'technical',
    question: 'How does the site perform on mobile?',
    answer:
      'Mobile-first is the default. Every build targets Lighthouse 90+ and green Core Web Vitals on mobile before launch. We design at 375px before desktop, serve WebP images via Cloudflare CDN with lazy loading.',
  },
  {
    category: 'technical',
    question: 'Do you set up Google Analytics and Search Console?',
    answer:
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, product enquiry clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Kolkata Local ── */
  {
    category: 'local',
    question: 'Do you build websites for jute and tea trade businesses in Kolkata?',
    answer:
      "Yes — jute traders, tea exporters, and commodity businesses are a core client profile for us in Kolkata. We build websites optimised for international B2B buyer research: export credentials display, product catalog with inquiry forms, and technical SEO targeting English-language searches from buyers in the US, EU, Middle East, and Southeast Asia.",
  },
  {
    category: 'local',
    question: 'Can you build websites for IT and BPO companies in Salt Lake Sector V?',
    answer:
      "Yes. Salt Lake Sector V is one of India's largest IT hubs, and the businesses there — IT services firms, BPO operations, SaaS startups, and tech consultancies — need websites built for global client acquisition. We build with authority-first architecture, clear service capability pages, and lead flows designed for international sales cycles.",
  },
  {
    category: 'local',
    question: "Do you know Kolkata's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Kolkata's business geography as part of discovery — from Dalhousie and BBD Bagh's commercial core and Park Street's retail and hospitality strip, to Salt Lake Sector V's IT corridor, Burrabazar's wholesale trading district, and Rajarhat New Town's emerging tech and residential developments. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Kolkata web agencies?',
    answer:
      "Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. You get a faster website, a shorter timeline, and a codebase you own outright.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No retainer required. No proprietary platform lock-in.',
  },
  {
    category: 'support',
    question: 'What support do you provide after launch?',
    answer:
      'Every project includes a 30-day post-launch support window covering bug fixes and minor adjustments at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans covering development changes, priority same-day bug response, and a dedicated engineer who knows your codebase. Maintenance clients also get quarterly performance audits and Core Web Vitals checks.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Kolkata businesses?',
    answer:
      'Yes. Monthly retainers cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Kolkata?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Kolkata: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Kolkata you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Kolkata.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Kolkata or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Kolkata directly, agree the scope and price in writing first.',
  },
];

const KOL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kolkata Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const KOL_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ka" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
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
  '@id': `https://factoryjet.com/web-design/kolkata#howto`,
  name: `How FactoryJet builds your Kolkata website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Kolkata businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Kolkata market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Kolkata competitors, identify your top keywords, and write the first draft of your page copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'Your bespoke design is created — homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Kolkata local schema markup added. Google Analytics and Search Console connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/kolkata#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/kolkata`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function KolkataWebDesignPage() {
  return (
    <>
      <script
        id="kol-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="kol-faq-schema"
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
          { name: 'Kolkata', url: 'https://factoryjet.com/web-design/kolkata' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_kolkata_hero" />}
          eyebrow="WEB DESIGN · KOLKATA"
          headline="Website Design in Kolkata for Jute & Tea Traders, IT Firms, and East India's Growing Businesses"
          lead="Kolkata is East India's commercial capital — home to India's oldest port, the country's largest jute industry, Salt Lake's thriving IT hub, and one of India's most resilient MSME ecosystems. From Dalhousie's heritage commercial core and Burrabazar's wholesale trading to Salt Lake Sector V's IT corridor and Rajarhat New Town's emerging business district, Kolkata businesses compete nationally and internationally. FactoryJet builds Figma-designed, Next.js-built websites with a 7-day delivery guarantee, your codebase delivered in full."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery guarantee',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="KOLKATA MARKET"
          headline="Why Your Kolkata Web Presence Is a Business Asset"
          leadParagraphs={[
            "Kolkata is East India's commercial capital — a city with a GDP exceeding $150 billion and one of the most diverse business ecosystems in India. The city's heritage trading roots run through Burrabazar's wholesale markets and Dalhousie's BBD Bagh commercial district, while modern Kolkata has built a thriving IT and BPO sector in Salt Lake Sector V and the rising Rajarhat New Town corridor. Kolkata Port — the oldest and one of the busiest ports in India — serves as the gateway for jute, tea, and commodity exports flowing out of East and Northeast India.",
            "This creates a web design landscape unique to Kolkata: a jute exporter in Burrabazar needs a completely different site architecture from an IT services company in Salt Lake Sector V, a logistics firm near the Port Trust area, or a retail brand on Park Street. International buyers sourcing jute, tea, and commodities research Indian vendors for weeks before making contact. An IT firm pitching US clients needs a site that projects technical capability and credibility at a global standard. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template.",
            "Kolkata's business community has historically invested cautiously in digital — which means the gap between businesses with a high-performing website and those without is widening rapidly. The businesses that act now capture the search rankings, the buyer first impressions, and the digital credibility their slower competitors are conceding every week.",
          ]}
          stats={[
            {
              value: '$150B+',
              label: 'Kolkata Metro GDP — East India\'s largest city economy and commercial gateway',
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
            {
              value: 'Kolkata Port',
              label: 'India\'s oldest major port — East India\'s gateway for jute, tea, and commodity exports',
              sourceUrl: 'https://www.kolkataporttrust.gov.in/',
              sourceLabel: 'Kolkata Port Trust',
            },
            {
              value: '5L+ MSMEs',
              label: 'Micro, small, and medium enterprises in West Bengal — one of India\'s largest MSME bases',
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · KOLKATA"
          headline="What 'Web Design' Actually Means for a Kolkata Business"
          lead="Kolkata's economy runs on two very different buyer behaviours — B2B international buyers doing weeks of vendor research for jute, tea, and commodities, and domestic consumers and retail buyers deciding quickly on mobile. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Kolkata&apos;s jute exporters, tea traders, commodity businesses, and
                manufacturing firms — the website needs to project export credentials, product
                range, and supply capacity to international B2B buyers in the US, EU, Middle East,
                and Southeast Asia. These buyers research vendors for weeks before making contact.
                The site needs to answer their due-diligence questions: certifications, production
                capacity, past clients, and a frictionless RFQ form. We build these sites with
                authority-first architecture, product catalog systems, and lead-capture flows
                designed for B2B sales cycles.
              </p>
              <p>
                For IT services firms and BPO operations in Salt Lake Sector V, logistics companies
                near Kolkata Port, and consumer retail brands on Park Street and New Market — the
                challenge is different. IT firms pitching US and EU clients need global-standard
                credibility signals and service capability pages. Logistics businesses need
                operations display and trade documentation. Consumer retail needs mobile-first
                speed and conversion-optimised checkout flows.
              </p>
              <p>
                Every FactoryJet Kolkata project covers discovery, Figma prototyping, Next.js
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
                    type: 'B2B / Export & Trading',
                    need: 'Credentials + catalog + RFQ',
                    area: 'Burrabazar · Dalhousie · BBD Bagh · Port Trust Area',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT / Tech & Services',
                    need: 'Authority + capability + global lead flow',
                    area: 'Salt Lake Sector V · Rajarhat New Town · Eco Park',
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
          headline="Why Kolkata Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront — no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Kolkata's business community moves on results, not schedules. Waiting 12 weeks for a website briefed in April is not acceptable when the export season is already underway. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For businesses competing on Google\'s Core Web Vitals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Kolkata Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={KOL_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description:
                "Belle Maison is a premium interior décor brand. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value search queries. Lighthouse 95+ on mobile before launch.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with authority-first architecture designed for B2B project enquiries — credentials display, project portfolio, and technical SEO.',
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
          headline="FactoryJet vs. Kolkata Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Kolkata deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={KOL_COMPARISON_COLUMNS}
          rows={KOL_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="KOLKATA × WEB DESIGN"
          headline="Web Design for Kolkata's Key Industries"
          lead="From jute and tea exporters and port logistics firms to IT companies in Salt Lake and retail brands on Park Street — Kolkata's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Jute & Tea Trade',
              description:
                "Kolkata is the global hub of the jute industry and a primary auction centre for Indian tea. Exporters and traders need websites that project product quality, export credentials, and supply capacity to international buyers in the US, EU, Bangladesh, and Southeast Asia. Product catalog systems, sample inquiry forms, and B2B lead capture are standard — alongside technical SEO targeting English-language buyer searches.",
              example:
                'Jute manufacturers and tea exporters in Burrabazar, Strand Road, and Kolkata Port Trade Area targeting international wholesale buyers.',
            },
            {
              name: 'IT & BPO',
              description:
                "Salt Lake Sector V is one of India's largest IT hubs — home to IT services firms, BPO operations, KPO companies, SaaS startups, and tech consultancies. These businesses need websites built for global client acquisition: authority-first positioning, service capability pages, case study architecture, and lead flows designed for international sales cycles with US, UK, and EU clients.",
              example:
                'IT services companies, BPO operations, and tech startups in Salt Lake Sector V, Rajarhat New Town, and Eco Park targeting international clients.',
            },
            {
              name: 'Logistics & Port Services',
              description:
                "Kolkata Port is India's oldest major port and the primary gateway for East and Northeast India's trade. Logistics companies, freight forwarders, customs brokers, and supply chain firms need websites that display operational capabilities, certification credentials, trade lane coverage, and RFQ forms — optimised for both domestic shippers and international trading partners.",
              example:
                'Freight forwarders, customs brokers, and logistics companies operating around Kolkata Port and serving East India trade corridors.',
            },
            {
              name: 'Retail & FMCG',
              description:
                "Kolkata has one of India's most vibrant retail cultures — from Park Street's landmark stores and New Market's heritage retail to the growing e-commerce brands emerging from the city. Consumer retail brands, FMCG distributors, and D2C businesses need mobile-first websites with fast load times, product showcase systems, and conversion-optimised checkout flows for both online and click-to-call buyers.",
              example:
                'Consumer retail brands, FMCG distributors, and D2C businesses on Park Street, New Market, and growing in online channels.',
            },
            {
              name: 'Healthcare & Education',
              description:
                "Kolkata is home to some of India's most respected medical institutions and a growing EdTech ecosystem. Hospitals, specialist clinics, diagnostic centres, schools, and EdTech platforms need websites that build patient and student trust: doctor credentials, facility showcases, appointment booking flows, and content strategies that rank for high-intent health and education queries.",
              example:
                'Private hospitals, specialist clinics, diagnostic centres, and EdTech platforms serving Kolkata and East India.',
            },
            {
              name: 'Manufacturing & Engineering',
              description:
                "Howrah and Kolkata's industrial corridors house a deep manufacturing and engineering base — steel fabricators, industrial equipment manufacturers, printing and packaging companies, and engineering services firms. B2B manufacturers need websites with product catalog architecture, technical specification display, certifications, and inquiry flows designed for industrial procurement cycles.",
              example:
                'Steel fabricators, industrial equipment manufacturers, and engineering services firms in Howrah and Kolkata industrial corridors.',
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
          headline="Common Questions from Kolkata Businesses"
          lead="The questions we answer on every Kolkata discovery call — answered here, without the runaround."
          categories={KOL_FAQ_CATEGORIES}
          items={KOL_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Kolkata Website?"
          sub="Kolkata's jute and tea trade, IT ecosystem in Salt Lake, port logistics network, and vibrant MSME base mean every serious business is competing for the same international buyer impressions and the same Google rankings. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="kolkata" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
