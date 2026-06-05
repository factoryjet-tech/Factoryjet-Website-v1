import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Ahmedabad | From ₹25,000 | FactoryJet',
  description:
    'Web design company in Ahmedabad for textile exporters & trading firms. Fast websites from ₹25,000. 7-day delivery. Serving SG Highway, Vastrapur & GIFT City.',
  keywords: [
    'web design company in Ahmedabad',
    'website design Ahmedabad',
    'web development company Ahmedabad',
    'website design company Ahmedabad',
    'affordable web design Ahmedabad',
    'professional website design Ahmedabad',
    'web design SG Highway',
    'web design GIFT City',
    'textile website design Ahmedabad',
    'trading company website Ahmedabad',
    'Next.js web development Ahmedabad',
    'web design agency Ahmedabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Ahmedabad | From ₹25,000 | FactoryJet',
    description:
      'Professional website design company in Ahmedabad — Next.js, SEO, and GA4 included. 7-day delivery. From ₹25,000. Serving SG Highway, Vastrapur, Bodakdev, GIFT City.',
    url: 'https://factoryjet.com/web-design/ahmedabad',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Ahmedabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Ahmedabad | FactoryJet',
    description:
      'Website design company in Ahmedabad. From ₹25,000. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/ahmedabad',
    languages: webDesignCityAlternatesIN['ahmedabad'],
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
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Ahmedabad building fast, SEO-optimized websites for textile exporters, trading firms, and growing businesses. From ₹25,000. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/ahmedabad',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'GIFT City' },
  ],
  serviceType: 'Web Design and Development',
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Ahmedabad',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        price: '25000',
        priceCurrency: 'INR',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        price: '50000',
        priceCurrency: 'INR',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '100000',
        priceCurrency: 'INR',
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
      name: 'How much does a website cost for a business in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Ahmedabad businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,00,000. Ahmedabad agency rates for comparable scope typically run ₹1,00,000–₹3,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for textile exporters and trading companies in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — textile exporters, trading companies, and MSME manufacturers are a core client profile for us in Ahmedabad. We build websites optimised for international B2B buyer research: export credentials display, product catalog with inquiry forms, and technical SEO targeting English-language searches from buyers in the US, EU, and UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Ahmedabad business website rank on Google?',
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
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const AMD_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Ahmedabad's market — whether that's an international buyer sourcing textiles or chemicals, a GIFT City financial services firm, or a local retail consumer. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Ahmedabad-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const AMD_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Ahmedabad Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const AMD_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Ahmedabad?',
    answer:
      "FactoryJet's web design for Ahmedabad businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,00,000. Ahmedabad agency rates for comparable scope typically run ₹1,00,000–₹3,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Ahmedabad web agency?',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Ahmedabad businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Ahmedabad Local ── */
  {
    category: 'local',
    question: 'Do you build websites for textile exporters and trading companies in Ahmedabad?',
    answer:
      "Yes — textile exporters, trading companies, and MSME manufacturers are a core client profile for us in Ahmedabad. We build websites optimised for international B2B buyer research: export credentials display, product catalog with inquiry forms, and technical SEO targeting English-language searches from buyers in the US, EU, Middle East, and Southeast Asia.",
  },
  {
    category: 'local',
    question: 'Can you build websites for GIFT City financial services firms?',
    answer:
      "Yes. GIFT City — India's first International Financial Services Centre — has unique requirements: compliance-aware content, regulatory credential display, and international client acquisition architecture. We build GIFT City financial services websites with proper schema, clear regulatory framework display, and lead flows designed for institutional buyers.",
  },
  {
    category: 'local',
    question: "Do you know Ahmedabad's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Ahmedabad's business geography as part of discovery — from SG Highway's corporate corridor and Vastrapur's premium retail to the Textile Market in Saraspur, GIDC Vatva's industrial estate, and GIFT City's IFSC zone. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Ahmedabad web agencies?',
    answer:
      "Ahmedabad web agencies typically charge ₹1,00,000–₹3,00,000 for a comparable project and deliver in 6–16 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at 60–70% less.",
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
      'Every project includes a 30-day post-launch support window covering bug fixes and minor adjustments at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Ahmedabad businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
];

const AMD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Ahmedabad Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const AMD_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹1,00,000–₹3,00,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/ahmedabad#howto`,
  name: `How FactoryJet builds your Ahmedabad website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Ahmedabad businesses.`,
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    minValue: '25000',
  },
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Ahmedabad market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Ahmedabad competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Ahmedabad local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/ahmedabad#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/ahmedabad`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AhmedabadWebDesignPage() {
  return (
    <>
      <Script
        id="amd-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="amd-faq-schema"
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
          { name: 'Ahmedabad', url: 'https://factoryjet.com/web-design/ahmedabad' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · AHMEDABAD"
          headline="Website Design in Ahmedabad for Textile Exporters, Trading Firms, and Growing Businesses"
          lead="Ahmedabad is India's textile capital, Gujarat's commercial hub, and home to GIFT City — India's first International Financial Services Centre. From the Textile Market and GIDC Vatva to SG Highway's corporate corridor and GIFT City's IFSC zone, Ahmedabad businesses compete globally. FactoryJet builds from ₹25,000 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'Websites from ₹25,000',
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
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AHMEDABAD MARKET"
          headline="Why Your Ahmedabad Web Presence Is a Business Asset"
          leadParagraphs={[
            "Ahmedabad is India's textile and trading capital — Gujarat contributes 18% of India's total exports, with textiles, chemicals, pharmaceuticals, and engineering goods leading. The city's business ecosystem spans the Textile Market and Raipur Mills in the old city, GIDC Vatva and Naroda's industrial estates, SG Highway's growing corporate corridor, and GIFT City — India's first International Financial Services Centre — just 12km away in Gandhinagar. Ahmedabad's MSME sector is one of the most vibrant in India, with thousands of trading and manufacturing businesses competing for both domestic and international buyers.",
            "This creates a web design opportunity unique to Ahmedabad: a textile exporter in the Textile Market needs a completely different site architecture from a pharma manufacturer in GIDC Vatva or a wealth management firm in GIFT City. B2B buyers from the US, EU, and Middle East research Indian vendors for weeks before making contact. A consumer retail business on SG Highway needs mobile-first speed and Razorpay checkout. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template.",
            "Ahmedabad's business community has historically been conservative about digital investment — which means the gap between businesses with a high-performing website and those without is widening. The businesses that act now capture the search rankings, the buyer first impressions, and the digital credibility that their slower competitors are conceding every week.",
          ]}
          stats={[
            {
              value: '18%',
              label: "Gujarat's share of India's total exports — Ahmedabad is the state's commercial engine",
              sourceUrl: 'https://commerce.gov.in/',
              sourceLabel: 'Ministry of Commerce & Industry',
            },
            {
              value: 'GIFT City',
              label: "India's first International Financial Services Centre — 12km from Ahmedabad in Gandhinagar",
              sourceUrl: 'https://www.giftgujarat.in/',
              sourceLabel: 'GIFT City',
            },
            {
              value: '₹3.5L Cr',
              label: "Ahmedabad's estimated GDP — Gujarat's largest city economy",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · AHMEDABAD"
          headline="What 'Web Design' Actually Means for an Ahmedabad Business"
          lead="Ahmedabad's economy runs on two very different buyer behaviours — B2B international buyers doing weeks of vendor research, and domestic consumers and retail buyers deciding quickly on mobile. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Ahmedabad&apos;s textile exporters, trading companies, chemical manufacturers,
                and MSME businesses — the website needs to project export credentials, product
                range, and manufacturing capability to international B2B buyers in the US, EU,
                Middle East, and Southeast Asia. These buyers research vendors for weeks before
                making contact. The site needs to answer their due-diligence questions: certificates,
                production capacity, past clients, and a frictionless RFQ form. We build these sites
                with authority-first architecture, product catalog systems, and lead-capture flows
                designed for B2B sales cycles.
              </p>
              <p>
                For GIFT City financial services firms, corporate businesses on SG Highway, and
                consumer retail brands across Vastrapur and Navrangpura — the challenge is different.
                GIFT City clients need compliance-aware content and international buyer acquisition
                architecture. Corporate businesses need authority-first positioning. Consumer retail
                needs mobile-first speed and conversion-optimised checkout flows.
              </p>
              <p>
                Every FactoryJet Ahmedabad project covers discovery, Figma prototyping, Next.js
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
                    area: 'GIDC Vatva · Naroda · SG Highway · GIFT City',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Vastrapur · Navrangpura · CG Road · Prahlad Nagar',
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
          headline="Why Ahmedabad Businesses Choose FactoryJet Over Local Agencies"
          lead="Ahmedabad web agencies typically charge ₹1,00,000–₹3,00,000 for a comparable project and take 6–16 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. At 60–70% below the Ahmedabad agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Ahmedabad's business community moves on results, not schedules. Waiting 12 weeks for a website briefed in April is not acceptable when the export season is already underway. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For businesses competing on Google\'s Core Web Vitals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹25,000, ₹50,000, and ₹1,00,000+ — before you speak to us. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Ahmedabad Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={AMD_JOURNEY_STAGES}
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
              industry: 'B2B · Commerceflo',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on Commerceflo — an AI-native unified commerce platform. Razorpay + Shiprocket integrated.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: '7-day delivery',
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
          headline="FactoryJet vs. Ahmedabad Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Ahmedabad deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,00,000 Ahmedabad agency project.',
          }}
          columns={AMD_COMPARISON_COLUMNS}
          rows={AMD_COMPARISON_ROWS}
          footer="Prices reflect typical Ahmedabad market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="AHMEDABAD × WEB DESIGN"
          headline="Web Design for Ahmedabad's Key Industries"
          lead="From textile exporters and MSME manufacturers to GIFT City financial firms and SG Highway corporates — Ahmedabad's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Textile & Apparel',
              description:
                "Ahmedabad is India's textile capital — home to thousands of fabric manufacturers, garment exporters, and apparel brands. Textile exporters need websites that project product range, quality certifications, and manufacturing capacity to international buyers in the US, EU, UAE, and Southeast Asia. Product catalog systems, fabric sample inquiry forms, and B2B lead capture are standard.",
              example:
                'Textile manufacturers and garment exporters in Saraspur, Raipur Mills, and GIDC Vatva targeting international wholesale buyers.',
            },
            {
              name: 'Pharmaceuticals & Chemicals',
              description:
                "Gujarat is India's largest pharmaceutical and chemical producer, and Ahmedabad's GIDC Vatva and Naroda industrial estates house thousands of pharma and speciality chemical companies. These businesses need regulatory-compliant copy, product documentation systems, GMP certification display, and B2B lead flows for institutional procurement.",
              example:
                'Pharma manufacturers, API producers, and chemical exporters in GIDC Vatva and Naroda targeting domestic and international buyers.',
            },
            {
              name: 'Trading & FMCG',
              description:
                "Ahmedabad's strong trading community spans FMCG distribution, agro-commodity trading, and wholesale goods. Trading businesses need websites that project scale, reliability, and product breadth. B2B lead capture, bulk inquiry forms, and product range display — optimised for both domestic buyers and international trading partners.",
              example:
                'FMCG distributors, commodity traders, and wholesale businesses operating from Ahmedabad and targeting national and international buyers.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Ahmedabad's real estate market is one of Gujarat's most active — from SG Highway's premium residential projects to commercial developments in GIFT City and the Naroda-Vastral corridor. Developers, brokers, and construction firms need websites with project gallery architecture, floor plan downloads, RERA details, and lead-capture forms.",
              example:
                'Residential developers, commercial real estate firms, and construction companies operating across Ahmedabad and Gandhinagar.',
            },
            {
              name: 'Startup & Tech',
              description:
                "Ahmedabad's startup ecosystem is growing fast — supported by IIM Ahmedabad's entrepreneurship ecosystem, GUSEC, and a rising generation of tech founders in SaaS, fintech, agritech, and D2C. Startup websites need product-led architecture, investor credibility signals, demo request flows, and performance designed for rapid iteration.",
              example:
                "Tech startups, SaaS companies, and D2C brands emerging from Ahmedabad's entrepreneurship ecosystem.",
            },
            {
              name: 'Professional Services',
              description:
                "Ahmedabad has a strong CA, legal, and consulting community serving Gujarat's large business sector. For these businesses, the website is the first qualification filter — does this firm look credible enough to engage? We build authority-first sites with service capability pages, credential display, and lead-capture flows that convert research into booked consultations.",
              example:
                "CA and CS firms, corporate law practices, management consulting firms, and HR companies serving Ahmedabad's business community.",
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Ahmedabad Businesses"
            lead="Ahmedabad agency rates for comparable web projects run ₹1,00,000–₹3,00,000. FactoryJet Growth (₹50,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹25,000',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, traders, and sole practitioners in Ahmedabad who need a credible online presence quickly.',
                features: [
                  '5 pages, mobile-responsive',
                  'Basic SEO & LocalBusiness schema',
                  'Contact form + WhatsApp integration',
                  'GA4 setup',
                  '2 revision rounds',
                  '30-day post-launch support',
                ],
                cta: { label: 'Get a Quote', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹50,000',
                description:
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Ahmedabad SMBs and exporters scaling online who need the site to actively generate qualified enquiries.',
                features: [
                  '10–15 pages with blog CMS',
                  'Advanced SEO — schema, meta templates, internal links',
                  'Lead capture + email automation',
                  'GA4 + GTM + Search Console',
                  '3 revision rounds',
                  '30-day support + CMS training session',
                ],
                cta: { label: 'Get a Quote', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹1,00,000+',
                description:
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, or API connections. Best for established Ahmedabad businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'Product catalog or e-commerce (Razorpay, Shiprocket)',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Tally, Zoho)',
                  'Priority support + quarterly reviews',
                  'Dedicated engineering point of contact',
                ],
                cta: { label: 'Book a Discovery Call', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR inclusive of design, development, SEO setup, and GA4. Cloudflare Pages hosting is free for standard Next.js builds — no monthly hosting fee."
          />
        </div>

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Ahmedabad Businesses"
          lead="The questions we answer on every Ahmedabad discovery call — answered here, without the runaround."
          categories={AMD_FAQ_CATEGORIES}
          items={AMD_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Ahmedabad Website?"
          sub="Ahmedabad's textile exports, GIFT City financial ecosystem, and MSME manufacturing base mean every serious business is competing for the same international buyer impressions and the same Google rankings. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
