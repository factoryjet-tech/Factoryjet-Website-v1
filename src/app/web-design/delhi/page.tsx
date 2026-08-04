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
  title: 'Web Design Company in Delhi | FactoryJet',
  description:
    'Web design company in Delhi NCR for corporates & fashion brands. Fast, custom websites with a 7-day delivery guarantee. Serving Connaught Place, Gurgaon & Noida.',
  keywords: [
    'web design company in Delhi',
    'website design Delhi',
    'web development company Delhi',
    'website design company Delhi NCR',
    'affordable web design Delhi',
    'professional website design Delhi',
    'web design Connaught Place',
    'web design Gurgaon',
    'corporate website design Delhi',
    'government vendor website Delhi',
    'Next.js web development Delhi',
    'web design agency Delhi NCR',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Delhi NCR | FactoryJet',
    description:
      'Professional website design company in Delhi NCR: Next.js, SEO, and GA4 included. 7-day delivery. Serving Connaught Place, Gurgaon, Noida, South Delhi.',
    url: 'https://factoryjet.com/web-design/delhi',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Delhi',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Delhi | FactoryJet',
    description:
      'Website design company in Delhi NCR. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/delhi',
    languages: webDesignCityAlternatesIN['delhi'],
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
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/delhi#webpage',
  url: 'https://factoryjet.com/web-design/delhi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Delhi NCR building fast, SEO-optimized websites for corporates, government vendors, fashion brands, and growing businesses. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/delhi',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Noida' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Delhi',
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

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const DEL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Delhi NCR's market, whether that's a government procurement officer evaluating vendors, a corporate buyer in Gurgaon, or a consumer browsing on mobile in South Delhi. We audit your top competitors and agree the sitemap.: Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN: sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking flows, and any third-party APIs your business uses. Performance budgets enforced from the first commit.: Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Delhi-specific local SEO targeting built in.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included.: Day 7+',
  },
];

const DEL_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Delhi NCR Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const DEL_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Delhi?',
    answer:
      "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Delhi web agency?',
    answer:
      "We are a specialised web engineering team, not a full-service agency with large account management overhead in Gurgaon or CP. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch, at 60–70% lower cost. You pay for the build, not our admin structure.",
  },
  {
    category: 'pricing',
    question: 'What is the 7-day delivery guarantee?',
    answer:
      'If we miss the agreed delivery date, you do not pay. The guarantee applies to the development phase we control, design, build, content, and launch. We have delivered on time on 97% of all projects.',
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
      "We deploy to Cloudflare Pages, which is free for most projects. You own your own Cloudflare account, we configure it for you. No monthly hosting fee to us.",
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
      "We build on Next.js deployed to Cloudflare's global CDN: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Delhi businesses competing on Google's Core Web Vitals signals, that performance gap directly affects rankings.",
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
      'Yes, GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, phone clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Delhi NCR Local ── */
  {
    category: 'local',
    question: 'Do you build websites for government contractors and PSU vendors in Delhi?',
    answer:
      "Yes, government contractors, PSU vendors, and defence and infrastructure companies are part of our Delhi client base. These businesses need websites that project credibility, past project portfolios, empanelment credentials, and compliance documentation. We build with authority-first architecture designed for government procurement evaluation.",
  },
  {
    category: 'local',
    question: 'Can you build websites for fashion, lifestyle, and D2C brands in Delhi?',
    answer:
      "Yes. Delhi NCR's fashion and lifestyle ecosystem is one of India's most vibrant, from designer labels in Hauz Khas and Khan Market to D2C brands in Saket and Noida. Consumer-facing websites need sub-1.5s load times on 4G, above-the-fold product display, Razorpay one-tap checkout, and Instagram integration. We build these mobile-first, every time.",
  },
  {
    category: 'local',
    question: "Do you know Delhi NCR's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Delhi NCR's business geography as part of discovery, from Connaught Place's corporate hub and South Delhi's premium retail to Gurgaon's Cyber City IT corridor, Noida's Sector 18 commercial zone, and Okhla's industrial estate. Local specificity in copy and LocalBusiness schema improves relevance for district-level and neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Delhi web agencies?',
    answer:
      "Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. You get a faster website, a shorter timeline, and a codebase you own outright.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes, 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No retainer required. No proprietary platform lock-in.',
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
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages, the most common causes of downtime, server crashes, plugin conflicts, database failures, simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Delhi businesses?',
    answer:
      'Yes. Monthly retainers cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Delhi?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Delhi: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Delhi you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Delhi.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Delhi or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Delhi directly, agree the scope and price in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DEL_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const DEL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Delhi Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const DEL_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="da" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/delhi#howto`,
  name: `How FactoryJet builds your Delhi website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Delhi businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: `We learn your business, your Delhi market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: `We map your site architecture, research your Delhi competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code, fast, mobile-first, and SEO-optimised. Delhi local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/delhi#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/delhi`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function DelhiWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="del-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="del-faq-schema"
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
          { name: 'Delhi', url: 'https://factoryjet.com/web-design/delhi' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Delhi', url: 'https://factoryjet.com/web-design/delhi' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_delhi_hero" />}
          eyebrow="WEB DESIGN · DELHI NCR"
          headline="Website Design in Delhi NCR for Corporates, Government Vendors, Fashion Brands, and Growing Businesses"
          lead="Delhi NCR is India's largest consumer market, national capital, and home to India's densest concentration of government contractors, corporate headquarters, and D2C brands. Connaught Place, Gurgaon Cyber City, Noida Sector 18, and South Delhi's premium retail all compete for the same digital real estate. FactoryJet builds Figma-designed, Next.js-built websites with a 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="DELHI NCR MARKET"
          headline="Why Your Delhi NCR Web Presence Is a Competitive Advantage"
          leadParagraphs={[
            "Delhi NCR is India's political capital, its largest consumer market, and one of its fastest-growing technology and startup hubs. The National Capital Region spans New Delhi, Gurgaon (Gurugram), Noida, Faridabad, and Ghaziabad: a combined economy of over ₹15 lakh crore and a population of 32 million. Connaught Place and the CBD host India's highest concentration of government ministry contractors, corporate headquarters, and professional services firms. Gurgaon's Cyber City and DLF Cyberhub are home to the India offices of every major global consulting firm, BFSI company, and tech company. Noida's Sector 18 and Sector 62 house India's second-largest media and IT corridor after Bangalore's Electronic City.",
            "This creates a web design requirement unique to Delhi NCR: a government contractor in Connaught Place needs a completely different site architecture from a fashion D2C brand in Hauz Khas or a fintech startup in Gurgaon. Government contractors need compliance-aware content and project credential portfolios. Fashion brands need mobile-first speed and Instagram-integrated product discovery. SaaS startups need demo request flows and investor credibility signals. FactoryJet builds for all of them.",
            "Delhi NCR's competitive market is unforgiving: the businesses with a faster, better-structured web presence consistently win the first impression. A 1-second load improvement increases conversions by 7%. A properly structured service capability page indexed by Google can double inbound enquiry volume. These outcomes are engineered into every FactoryJet project from day one, not sold as add-ons.",
          ]}
          stats={[
            {
              value: '32M+',
              label: "Delhi NCR population, India's largest metropolitan region by size and economic output",
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census India',
            },
            {
              value: '₹15L Cr+',
              label: "Delhi NCR's estimated GDP: India's third-largest city economy",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
            {
              value: '#1',
              label: "Delhi is India's largest consumer market and the country's most competitive retail geography",
              sourceUrl: 'https://dpiit.gov.in/',
              sourceLabel: 'DPIIT',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · DELHI NCR"
          headline="What 'Web Design' Actually Means for a Delhi Business"
          lead="Delhi NCR's economy spans government and PSU clients with compliance-first requirements, corporate and BFSI buyers with long evaluation cycles, and D2C consumers deciding in under 10 seconds on mobile. FactoryJet builds for all three."
          body={
            <>
              <p>
                For Delhi NCR&apos;s government contractors, PSU vendors, and corporate B2B
                businesses in Connaught Place, Gurgaon, and Noida: a website needs to project
                credibility, delivery capability, and project track record. Government procurement
                teams and enterprise buyers evaluate vendors for weeks. The site needs to display
                empanelment credentials, past project portfolios, compliance certifications, and
                provide a frictionless inquiry form. We build these sites with authority-first
                architecture designed for B2G and B2B sales cycles.
              </p>
              <p>
                For Delhi NCR&apos;s fashion brands, D2C companies, hospitality businesses, and
                consumer service providers in South Delhi, Gurgaon, and Noida: the challenge is
                entirely different. Consumers arrive on mobile from Instagram or Google and decide
                in seconds. The site needs to load under 1.5 seconds on 4G, present the product or
                service above the fold, and make the next step obvious. We build these mobile-first,
                every time, at 375px before 1440px, with Lighthouse 90+ performance before launch.
              </p>
              <p>
                Every FactoryJet Delhi project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own and a site built to rank and convert.
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
                    type: 'B2B / B2G / Corporate',
                    need: 'Credentials + compliance + RFP flow',
                    area: 'Connaught Place · Gurgaon · Noida Sector 62',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Speed + mobile + instant CTA',
                    area: 'South Delhi · Hauz Khas · Saket · Lajpat Nagar',
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
          headline="Why Delhi Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress, faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront, no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Delhi moves fast: a corporate or government vendor waiting 16 weeks for a website they briefed in Q1 is losing procurement cycles to competitors who already have one. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Delhi businesses competing on Google\'s Core Web Vitals, that gap directly affects rankings.',
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
          headline="How We Build Your Delhi Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={DEL_JOURNEY_STAGES}
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
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with authority-first architecture for B2B project enquiries, credentials display, project portfolio, and technical SEO.',
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
          headline="FactoryJet vs. Delhi Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Delhi NCR deliver the same output. Here is the honest comparison, scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch, same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={DEL_COMPARISON_COLUMNS}
          rows={DEL_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="DELHI NCR × WEB DESIGN"
          headline="Web Design for Delhi NCR's Key Industries"
          lead="From Connaught Place government contractors to Gurgaon BFSI firms to Hauz Khas fashion brands, Delhi NCR's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Government & PSU Vendors',
              description:
                "Delhi's status as India's national capital means it houses the largest concentration of government ministry contractors, defence vendors, and PSU suppliers in the country. These businesses need websites projecting credibility, past project portfolios, empanelment credentials, quality certifications, and compliance documentation to satisfy government procurement evaluation. Authority-first architecture, not template designs.",
              example:
                'Government contractors, defence and infrastructure vendors, and PSU suppliers operating from Delhi and competing for central government procurement.',
            },
            {
              name: 'Fashion & Retail',
              description:
                "Delhi NCR is India's fashion capital, home to Sarojini Nagar wholesale markets, Lajpat Nagar retail corridors, Hauz Khas designer labels, and a rapidly growing D2C fashion ecosystem in Noida and Gurgaon. Fashion and retail websites need mobile-first speed, Instagram product integration, Razorpay checkout, and conversion-optimised product display.",
              example:
                'Fashion brands, retail businesses, and D2C apparel companies serving consumers across Delhi NCR and selling nationally.',
            },
            {
              name: 'Education & Coaching',
              description:
                "Delhi NCR is home to India's largest concentration of coaching institutes, professional training companies, and educational institutions. Education websites need course catalog architecture, batch booking flows, teacher profiles, and result-focused testimonials. Local SEO targeting competitive exam and course keywords is built in.",
              example:
                'Competitive exam coaching institutes, skill training companies, and educational institutions serving Delhi NCR\'s student population.',
            },
            {
              name: 'Healthcare & Wellness',
              description:
                "Delhi NCR's healthcare sector spans corporate hospital groups, specialist clinics, diagnostic chains, and a growing wellness and medtech sector. Healthcare websites need appointment booking integrations, doctor profile pages, specialty service pages, and local SEO targeting high-intent healthcare queries across the NCR.",
              example:
                'Specialist clinics, multi-specialty hospitals, diagnostic centres, and wellness businesses serving Delhi NCR\'s large consumer population.',
            },
            {
              name: 'IT & Consulting',
              description:
                "Gurgaon's Cyber City and Noida's Sector 62 house the India offices of every major global consulting firm and a growing ecosystem of IT services companies, SaaS startups, and tech-enabled service businesses. These companies need websites projecting technical capability, client case studies, and engagement model transparency for enterprise B2B sales cycles.",
              example:
                'IT services companies, management consulting firms, and SaaS businesses operating from Gurgaon and Noida targeting Indian and global enterprise clients.',
            },
            {
              name: 'F&B & Hospitality',
              description:
                "Delhi NCR's F&B and hospitality sector is one of India's most competitive, from premium restaurant groups in South Delhi to hotel chains across the NCR. F&B websites need reservation flows, menu architecture, event booking systems, and local SEO targeting high-intent dining and event queries. Mobile experience is non-negotiable.",
              example:
                'Restaurant groups, hotel properties, and hospitality businesses serving Delhi NCR\'s large and high-spending consumer market.',
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
          headline="Common Questions from Delhi Businesses"
          lead="The questions we answer on every Delhi discovery call, answered here, without the runaround."
          categories={DEL_FAQ_CATEGORIES}
          items={DEL_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Delhi Website?"
          sub="Delhi NCR's 32 million consumers, India's largest corporate hub, and the national capital's government contracting ecosystem means every serious business is competing for the same Google rankings and buyer first impressions. Every week without a high-performing website is market share you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="delhi" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
