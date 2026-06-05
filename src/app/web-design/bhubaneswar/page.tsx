import type { Metadata } from 'next';
import Script from 'next/script';
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

/* ─────────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
──────────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Bhubaneswar | From ₹29,999 | FactoryJet',
  description:
    'Web design company in Bhubaneswar for IT firms, government contractors & Odisha businesses. Fast websites from ₹29,999. 7-day delivery. Serving Infocity IT Park, STPI & Startup Odisha ecosystem.',
  keywords: [
    'web design company in Bhubaneswar',
    'website design Bhubaneswar',
    'web development Bhubaneswar',
    'web development company Bhubaneswar',
    'website design company Bhubaneswar',
    'affordable web design Bhubaneswar',
    'professional website design Bhubaneswar',
    'Bhubaneswar website designer',
    'IT company website design Bhubaneswar',
    'web design Infocity Bhubaneswar',
    'Infocity startup website design',
    'Odisha government contractor website',
    'web design for IT companies Bhubaneswar',
    'Next.js web development Bhubaneswar',
    'web design agency Bhubaneswar',
    'web design Odisha',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Bhubaneswar | From ₹29,999 | FactoryJet',
    description:
      'Professional website design company in Bhubaneswar — Next.js, SEO, and GA4 included. 7-day delivery. From ₹29,999. Serving Infocity IT Park, STPI Bhubaneswar, KIIT University zone, and Startup Odisha ecosystem.',
    url: 'https://factoryjet.com/web-design/bhubaneswar',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Bhubaneswar',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Bhubaneswar | FactoryJet',
    description:
      'Website design company in Bhubaneswar, Odisha. From ₹29,999. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/bhubaneswar',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/bhubaneswar',
      'x-default': 'https://factoryjet.com/web-design/bhubaneswar',
    },
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

/* ─────────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
──────────────────────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Bhubaneswar building fast, SEO-optimized websites for IT companies, government contractors, education institutions, tourism businesses, and Odisha exporters. From ₹29,999. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/bhubaneswar',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Bhubaneswar' },
    { '@type': 'City', name: 'Cuttack' },
    { '@type': 'State', name: 'Odisha' },
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
    name: 'Web Design Services Bhubaneswar',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        price: '29999',
        priceCurrency: 'INR',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        price: '80000',
        priceCurrency: 'INR',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '150000',
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
      name: 'How much does a website cost for a business in Bhubaneswar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Bhubaneswar businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Bhubaneswar agency rates for comparable scope typically run ₹70,000–₹2,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Bhubaneswar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT companies and startups in Bhubaneswar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — IT/ITeS companies, software firms, and Startup Odisha-registered startups in Infocity IT Park and STPI Bhubaneswar are a core client profile for us. Bhubaneswar is now Eastern India's fastest-growing IT hub, overtaking Kolkata in tech talent supply. Businesses that build a strong web presence now will own rankings as the ecosystem scales.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Bhubaneswar business website rank on Google?',
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

/* ─────────────────────────────────────────────────────────────────────────────────
   Section data
──────────────────────────────────────────────────────────────────────────────── */

const BBSR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Bhubaneswar's market — whether that's an IT company in Infocity IT Park, a government contractor serving Odisha departments, a tourism or hospitality business near the Temple City heritage strip, or a startup in the Startup Odisha ecosystem. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Bhubaneswar-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const BBSR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Bhubaneswar Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const BBSR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Bhubaneswar?',
    answer:
      "FactoryJet's web design for Bhubaneswar businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Bhubaneswar agency rates for comparable scope typically run ₹70,000–₹2,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Bhubaneswar web agency?',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Bhubaneswar businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Bhubaneswar Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT companies and startups in Bhubaneswar?',
    answer:
      "Yes — IT/ITeS companies, software firms, and startups in Infocity IT Park, STPI Bhubaneswar, and the Startup Odisha ecosystem are a core client profile. Bhubaneswar is now Eastern India's fastest-growing IT hub, with Infosys, TCS, Wipro, and Mindtree all operating significant centres in Infocity. The businesses that establish strong digital presence now will own the search rankings as the ecosystem continues to scale.",
  },
  {
    category: 'local',
    question: 'Can you build websites for Odisha government contractors and public sector firms?',
    answer:
      "Yes. Odisha has one of India's most tech-forward state governments — eDistrict, the MO (Moving On) bus app, and Odisha One portals reflect a government that procures and communicates digitally. Government contractors, consultancy firms serving Odisha departments, and public sector adjacent businesses need websites that project compliance credentials, project credentials, and institutional credibility clearly.",
  },
  {
    category: 'local',
    question: "Do you know Bhubaneswar's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Bhubaneswar's business geography as part of discovery — from Infocity IT Park's tech corridor and STPI Bhubaneswar's software zone to Nalco Nagar, the Janpath commercial corridor, Patia and Nayapalli business areas, and the Temple City heritage belt. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Bhubaneswar web agencies?',
    answer:
      "Bhubaneswar web agencies typically charge ₹70,000–₹2,00,000 for a comparable project and deliver in 6–14 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at a fixed, published price.",
  },
  {
    category: 'local',
    question: 'Do you build websites for tourism and hospitality businesses in Bhubaneswar?',
    answer:
      "Absolutely. Bhubaneswar is known as the Temple City of India — home to 700+ temples including the famous Lingaraj, Mukteshwar, and Rajarani. Tourism operators, hotels, heritage tour companies, and hospitality businesses need mobile-first websites with booking systems, local SEO for temple circuit tourism, and conversion-optimised architecture for travellers researching itineraries online.",
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
    question: 'Do you offer ongoing retainer services for Bhubaneswar businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'support',
    question: 'Can FactoryJet help Odisha exporters and handicraft businesses build a global web presence?',
    answer:
      "Yes. Odisha has a rich export base — handicrafts, agri-products, stone crafts, and textiles are key sectors. Odisha exporters need websites that project product quality, export credentials, and artisan story to international B2B buyers and D2C consumers in the US, EU, and Southeast Asia. We build export-ready websites with B2B inquiry flows, product catalog systems, and SEO targeting English-language international buyer searches.",
  },
];

const BBSR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bhubaneswar Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const BBSR_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹29,999', '₹70,000–₹2,00,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
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
  '@id': `https://factoryjet.com/web-design/bhubaneswar#howto`,
  name: `How FactoryJet builds your Bhubaneswar website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Bhubaneswar businesses.`,
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    minValue: '29999',
  },
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Bhubaneswar market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Bhubaneswar competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Bhubaneswar local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/bhubaneswar#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/bhubaneswar`,
};

/* ─────────────────────────────────────────────────────────────────────────────────
   Page
──────────────────────────────────────────────────────────────────────────────── */

export default function BhubaneswarWebDesignPage() {
  return (
    <>
      <Script
        id="bbsr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="bbsr-faq-schema"
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
          { name: 'Bhubaneswar', url: 'https://factoryjet.com/web-design/bhubaneswar' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ───────────────────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · BHUBANESWAR"
          headline="Website Design in Bhubaneswar for IT Companies, Odisha Startups, and Growing Businesses"
          lead="Bhubaneswar is Eastern India's fastest-growing IT hub — India's first planned Smart City, home to Infocity IT Park (Infosys, TCS, Wipro, Mindtree), STPI Bhubaneswar, 1,500+ registered startups, and one of India's most tech-forward state governments. From the Infocity tech corridor and KIIT University zone to the Temple City heritage district and Odisha's export businesses, FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'Websites from ₹29,999',
            '7-day delivery guarantee',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ─────────────────────────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ────────────────────────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BHUBANESWAR MARKET"
          headline="Why Your Bhubaneswar Web Presence Is a Strategic Business Asset"
          leadParagraphs={[
            "Bhubaneswar is Odisha's capital and India's first planned Smart City — and it is now the fastest-growing IT hub in all of Eastern India, overtaking even Kolkata in the pace of tech talent supply and IT investment. Infocity IT Park hosts major operations from Infosys, TCS, Wipro, and Mindtree. STPI Bhubaneswar and the Nalco Nagar Tech Zone add further depth. The Startup Odisha initiative has registered over 1,500 startups, supported by the Odisha Startup Policy 2016 — one of India's earliest and most progressive state-level startup frameworks.",
            "Bhubaneswar's economy is genuinely diverse. IT/ITeS is the fastest-growing sector, but the city's economy also spans steel and mining (SAIL, Tata Steel operations nearby), education (AIIMS Bhubaneswar, IIT Bhubaneswar, KIIT University, XIMB — Xavier Institute of Management), and a significant tourism economy anchored by the city's 700+ temples. The Odisha government's digital-first approach — eDistrict, MO bus app, Odisha One portals — has created a procurement environment where digital credentials matter for government contractors and public sector adjacent businesses.",
            "This creates a web design landscape that is both more competitive and more opportunity-rich than most people outside Odisha realise. An IT company in Infocity needs a completely different site from a temple circuit tour operator, an MEP contractor bidding on government infrastructure, or a handicraft exporter selling Odisha art globally. FactoryJet builds for all of them — because every project starts with the buyer journey, not the template.",
          ]}
          stats={[
            {
              value: '#1',
              label: "Eastern India's fastest-growing IT hub — Bhubaneswar now leads Kolkata in tech talent supply and IT investment growth",
              sourceUrl: 'https://www.nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '1,500+',
              label: "Registered startups under Startup Odisha — one of India's most active state-level startup ecosystems",
              sourceUrl: 'https://startupodisha.gov.in/',
              sourceLabel: 'Startup Odisha',
            },
            {
              value: '700+',
              label: 'Temples in Bhubaneswar — the Temple City tourism economy anchors a major hospitality and tourism business sector',
              sourceUrl: 'https://www.odishatourism.gov.in/',
              sourceLabel: 'Odisha Tourism',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ─────────────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · BHUBANESWAR"
          headline="What 'Web Design' Actually Means for a Bhubaneswar Business"
          lead="Bhubaneswar's economy runs on four very different buyer types — IT and B2B enterprise clients, government and institutional procurement, domestic and international tourists, and international buyers of Odisha's export products. Each needs a fundamentally different website strategy."
          body={
            <>
              <p>
                For IT companies, software firms, and startups in Infocity IT Park and STPI
                Bhubaneswar — the website is a credibility and lead-generation tool for enterprise
                sales. Product-led architecture, case study display, service capability pages, and
                conversion flows designed for enterprise decision-makers are the standard. These
                sites need to position Bhubaneswar-based firms as credible technology partners for
                clients across India and internationally.
              </p>
              <p>
                For government contractors, MEP consultancies, and infrastructure firms bidding on
                Odisha government projects — the website needs to project institutional credibility,
                project credentials, compliance documentation, and the kind of authority that makes
                procurement managers confident. For tourism and hospitality businesses near the
                Temple City heritage belt — mobile-first speed, booking system integration, and
                local SEO for temple circuit searches are non-negotiable.
              </p>
              <p>
                For Odisha exporters — handicrafts, agri-products, stone crafts, textiles — the
                site needs to project product quality and artisan story to international B2B buyers
                and D2C consumers with product catalog systems and B2B inquiry flows. Every
                FactoryJet Bhubaneswar project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window.
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
                  Four buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Tech Companies',
                    need: 'Product-led + case studies + enterprise CTA',
                    area: 'Infocity IT Park · STPI · Startup Odisha',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Government & Institutional',
                    need: 'Credentials + compliance + authority',
                    area: 'Odisha Govt Contractors · MEP · Education',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Speed + mobile + booking system',
                    area: 'Temple City · Heritage Belt · Hotels',
                    colour: '#6B6B6B',
                  },
                  {
                    type: 'Exporters & Handicrafts',
                    need: 'Catalog + B2B inquiry + global SEO',
                    area: 'Odisha Handicrafts · Agri · Stone Crafts',
                    colour: '#999999',
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

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Bhubaneswar Businesses Choose FactoryJet Over Local Agencies"
          lead="Bhubaneswar web agencies typically charge ₹70,000–₹2,00,000 for a comparable project and take 6–14 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. Pricing is fixed and published upfront for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Bhubaneswar's IT ecosystem moves fast — Startup Odisha companies are pitching investors, IT firms are responding to RFPs, and government contractors are building credibility for the next tender cycle. Waiting 12 weeks for a website that should have been live last quarter is not a strategy. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Bhubaneswar businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹29,999, ₹80,000, and ₹1,50,000+ — before you speak to us. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ──────────────────────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Bhubaneswar Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={BBSR_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ──────────────────────────────────────────────────────────────────── */}
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

        {/* ── 9. COMPARISON TABLE ────────────────────────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Bhubaneswar Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Bhubaneswar deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹1,50,000 Bhubaneswar agency project.',
          }}
          columns={BBSR_COMPARISON_COLUMNS}
          rows={BBSR_COMPARISON_ROWS}
          footer="Prices reflect typical Bhubaneswar market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ──────────────────────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="BHUBANESWAR × WEB DESIGN"
          headline="Web Design for Bhubaneswar's Key Industries"
          lead="From IT companies in Infocity and Startup Odisha-backed startups to government contractors, KIIT and IIT Bhubaneswar adjacent businesses, temple tourism operators, steel and mining sector firms, and Odisha exporters — Bhubaneswar's economy is broader and faster-growing than most people outside the state realise. FactoryJet builds for each of them."
          sectors={[
            {
              name: 'IT & Software Companies',
              description:
                "Infocity IT Park is Bhubaneswar's flagship technology hub — housing major operations from Infosys, TCS, Wipro, and Mindtree, alongside a growing ecosystem of mid-size IT services companies and product startups. STPI Bhubaneswar and Nalco Nagar Tech Zone add further depth. IT companies need product-led websites with service capability pages, case study systems, and lead flows designed for enterprise sales cycles — not generic agency brochure sites.",
              example:
                'IT services companies, software product firms, BPO and KPO operations, and tech startups in Infocity IT Park, STPI Bhubaneswar, and the broader Odisha IT corridor.',
            },
            {
              name: 'Startups & Entrepreneurship',
              description:
                "Startup Odisha has registered over 1,500 startups under the Odisha Startup Policy 2016 — making Bhubaneswar one of India's most active state-level startup ecosystems outside the major metros. KIIT University's TBI (Technology Business Incubator) and IIT Bhubaneswar's incubation centre add further momentum. Startup websites need investor-credibility architecture, product-led design, demo request flows, and performance built for rapid iteration.",
              example:
                "Startup Odisha-registered ventures, KIIT TBI-incubated companies, IIT Bhubaneswar spinouts, and early-stage tech and D2C companies across the Bhubaneswar startup ecosystem.",
            },
            {
              name: 'Government Contractors & Consulting',
              description:
                "Odisha has one of India's most tech-forward state governments — eDistrict, the MO bus app, Odisha One portals, and a digital-first procurement approach. Government contractors, MEP consultancies, infrastructure and construction firms bidding on Odisha government projects, and public sector consulting firms need websites that project institutional credibility, project track record, compliance credentials, and authority signals that matter in procurement decisions.",
              example:
                'Engineering and infrastructure contractors, MEP consultancies, IT system integrators, and management consulting firms serving Odisha state government departments and PSUs.',
            },
            {
              name: 'Education & EdTech',
              description:
                "Bhubaneswar has one of India's densest concentrations of premier institutions — AIIMS Bhubaneswar, IIT Bhubaneswar, KIIT University (deemed university, 30,000+ students), and XIMB (Xavier Institute of Management). This ecosystem creates demand for education-adjacent businesses: coaching institutes, EdTech platforms, student accommodation, and professional services targeting the student and faculty community.",
              example:
                "Coaching centres, EdTech platforms, student housing providers, and professional services businesses serving the KIIT, IIT Bhubaneswar, AIIMS, and XIMB academic communities.",
            },
            {
              name: 'Tourism & Temple Hospitality',
              description:
                "Bhubaneswar is India's Temple City — home to 700+ temples including Lingaraj, Mukteshwar, Rajarani, and dozens of others of architectural and historic significance. Odisha Tourism actively promotes the Golden Triangle (Bhubaneswar–Puri–Konark). Tourism operators, hotels, heritage tour companies, and restaurants serving this heritage belt need mobile-first websites with booking systems, rich photo galleries, and local SEO targeting temple circuit and Odisha tourism searches.",
              example:
                "Heritage hotels, temple circuit tour operators, restaurants near Lingaraj and Mukteshwar, and travel businesses targeting domestic and international tourists visiting the Odisha Golden Triangle.",
            },
            {
              name: 'Steel, Mining & Industrial',
              description:
                "Odisha is India's leading producer of iron ore and a major steel-producing state — with SAIL and Tata Steel operating large nearby facilities. Bhubaneswar's business community includes hundreds of steel sector suppliers, mining equipment vendors, logistics companies, and industrial services businesses serving this ecosystem. These businesses need websites that project capability, compliance certifications, and supply track record to institutional procurement teams.",
              example:
                'Steel sector suppliers, mining equipment vendors, industrial logistics companies, and raw material traders serving SAIL, Tata Steel, and the broader Odisha minerals and metals ecosystem.',
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Bhubaneswar Businesses"
            lead="Bhubaneswar agency rates for comparable web projects run ₹70,000–₹2,00,000. FactoryJet Growth (₹80,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹29,999',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, IT consultants, and sole practitioners in Bhubaneswar who need a credible online presence quickly.',
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
                priceRange: '₹80,000',
                description:
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Bhubaneswar IT companies, government contractors, and startups scaling online who need the site to actively generate qualified enquiries.',
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
                priceRange: '₹1,50,000+',
                description:
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, or API connections. Best for established Bhubaneswar businesses with complex requirements and a real digital revenue line.',
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

        {/* ── 12. TESTIMONIALS (DARK) ─────────────────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 13. FAQ ────────────────────────────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Bhubaneswar Businesses"
          lead="The questions we answer on every Bhubaneswar discovery call — answered here, without the runaround."
          categories={BBSR_FAQ_CATEGORIES}
          items={BBSR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ────────────────────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Bhubaneswar Website?"
          sub="Bhubaneswar is Eastern India's fastest-growing IT hub — with Infocity's major tech operations, 1,500+ Startup Odisha companies, a tech-forward state government, and a tourism economy anchored by 700+ temples. The businesses that invest in a high-performing web presence now will own the search rankings as the city's digital economy continues to accelerate. Every week without a strong website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
