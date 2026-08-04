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
  title: 'Web Design Company in Rajkot | FactoryJet',
  description:
    'Web design company in Rajkot for auto component exporters, engineering manufacturers & MSME businesses. Fast, custom websites with a 7-day delivery guarantee. Serving GIDC Metoda, Shapar-Veraval & Aji.',
  keywords: [
    'web design company in Rajkot',
    'website design Rajkot',
    'web development Rajkot',
    'Rajkot website designer',
    'ecommerce website Rajkot',
    'affordable web design Rajkot',
    'web design for auto parts companies Rajkot',
    'MSME website design Rajkot',
    'engineering company website Rajkot',
    'GIDC Metoda business website',
    'Shapar Veraval industrial website',
    'web design agency Rajkot',
    'casting foundry website Rajkot',
    'pump valve manufacturer website Rajkot',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Rajkot | FactoryJet',
    description:
      "Professional website design company in Rajkot: Next.js, SEO, and GA4 included. 7-day delivery. Serving GIDC Metoda, Shapar-Veraval, Aji, and Rajkot's auto component & engineering clusters.",
    url: 'https://factoryjet.com/web-design/rajkot',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Rajkot',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Rajkot | FactoryJet',
    description:
      "Website design company in Rajkot for auto component exporters & engineering MSMEs. 7-day delivery.",
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/rajkot',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/rajkot',
      'x-default': 'https://factoryjet.com/web-design/rajkot',
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
  '@id': 'https://factoryjet.com/web-design/rajkot#webpage',
  url: 'https://factoryjet.com/web-design/rajkot',
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
    'Web design company in Rajkot building fast, SEO-optimized websites for auto component exporters, engineering manufacturers, foundry and casting units, pump and valve companies, and MSME businesses. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/rajkot',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Rajkot' },
    { '@type': 'City', name: 'Gondal' },
    { '@type': 'City', name: 'Morbi' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Rajkot',
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
        description: 'Custom Next.js build with product catalogs, export portals, or API integrations for Rajkot manufacturers.',
      },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const RJT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Rajkot's market, whether that's a German or Japanese OEM buyer sourcing auto components from GIDC Metoda, a domestic B2B buyer procuring pumps and valves, or a jeweller in Rajkot's gold market targeting retail consumers. We audit your top competitors and agree the sitemap and content plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, RFQ form, product inquiry field, and section reviewed against your conversion goal before a line of code is written. You approve the design before development starts.: Days 3–4',
  },
  {
    number: '03',
    title: 'Development',
    description:
      "Built in Next.js deployed to Cloudflare CDN: sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, product catalog systems, export inquiry portals, and any third-party APIs your engineering or manufacturing business uses. Performance budgets enforced from the first commit.: Days 5–6",
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Rajkot-specific local SEO and export-market keyword targeting built in.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included.: Day 7+',
  },
];

const RJT_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Rajkot Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const RJT_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Rajkot?',
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
    question: 'What makes FactoryJet better value than a Rajkot web agency?',
    answer:
      "We are a specialised web engineering team, not a full-service agency with large overhead. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch, at a fixed price confirmed upfront. You pay for the build, not our admin structure.",
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
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content and export-facing product copy for auto components or engineering products is available as an add-on. We send a content brief before development starts so you know exactly what to provide.',
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
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can update product listings, certifications, and content without touching code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India and international search?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches typically rank within 1–2 weeks. For auto component exporters, we target English-language searches from buyers in the US, Germany, and Japan.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Rajkot engineering and manufacturing businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings and international buyer impressions.",
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
      'Yes, GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (RFQ form submissions, WhatsApp clicks, product enquiry clicks, catalog download clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Rajkot Local ── */
  {
    category: 'local',
    question: 'Do you build websites for auto component exporters in Rajkot?',
    answer:
      "Yes, auto component exporters are a core client profile for us in Rajkot. The city is India's #1 cluster for auto parts including bearings, castings, and forgings, exporting to OEMs in the USA, Germany, and Japan. We build export-facing websites with product catalog systems, quality certification display (IATF, ISO), and B2B inquiry flows designed for international automotive procurement teams.",
  },
  {
    category: 'local',
    question: 'Can you build websites for engineering manufacturers in GIDC Metoda or Shapar-Veraval?',
    answer:
      "Yes. GIDC Metoda and Shapar-Veraval are home to thousands of engineering MSMEs, machine tool manufacturers, die and mould makers, pump and valve companies, and precision casting units. We build B2B company profile sites with product range display, manufacturing capability pages, and inquiry forms designed for industrial procurement buyers.",
  },
  {
    category: 'local',
    question: "Do you know Rajkot's industrial clusters well enough to write relevant copy?",
    answer:
      "Yes. We research Rajkot's business geography as part of discovery, from GIDC Aji (the oldest industrial estate), GIDC Metoda (auto components), and GIDC Shapar-Veraval (one of Asia's largest industrial estates by area), to Rajkot's gold jewellery market and the city's trading community. Local specificity in copy and LocalBusiness schema improves relevance for industry-level and neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Rajkot web agencies?',
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
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Rajkot businesses?',
    answer:
      'Yes. Monthly retainers cover ongoing development work, content updates, new product pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Rajkot?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Rajkot: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Rajkot you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Rajkot.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Rajkot or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Rajkot directly, agree the scope and price in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: RJT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const RJT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Rajkot Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const RJT_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/rajkot#howto`,
  name: `How FactoryJet builds your Rajkot website in 7 days`,
  description: `Our 7-day process for delivering a professional, export-ready website for Rajkot engineering and manufacturing businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: `We learn your business, your Rajkot market, your goals, and what you need the website to do, whether you are targeting OEM buyers in Germany, distributors in the US, or domestic B2B procurement teams.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: `We map your site architecture, research your Rajkot and sector competitors, identify your top export and local keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code, fast, mobile-first, and SEO-optimised. Rajkot local schema markup added. Product catalog, RFQ form, and export inquiry systems built. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/rajkot#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/rajkot`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function RajkotWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="rjt-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="rjt-faq-schema"
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
          { name: 'Rajkot', url: 'https://factoryjet.com/web-design/rajkot' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Rajkot', url: 'https://factoryjet.com/web-design/rajkot' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_rajkot_hero" />}
          eyebrow="WEB DESIGN · RAJKOT"
          headline="Website Design in Rajkot for Auto Component Exporters, Engineering Manufacturers, and MSME Businesses"
          lead="Rajkot is Gujarat's engineering powerhouse, home to 250,000+ MSMEs, India's #1 auto parts cluster, and GIDC Shapar-Veraval, one of Asia's largest industrial estates. From machine tool makers in GIDC Metoda to gold jewellers in the city centre, Rajkot businesses compete for international buyers and domestic contracts every day. FactoryJet builds Figma-designed, Next.js-built websites with a 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="RAJKOT MARKET"
          headline="Why Your Rajkot Web Presence Is an Export Asset"
          leadParagraphs={[
            "Rajkot is called the Manchester of Saurashtra, and for good reason. The city is India's undisputed capital for auto component manufacturing, home to more than 3,500 engineering units producing bearings, castings, forgings, dies and molds, pumps, valves, and machine tools that export to OEMs in the USA, Germany, and Japan. With 250,000+ registered MSMEs: the highest MSME density per capita in India, Rajkot's industrial spine runs through GIDC Aji (the oldest), GIDC Metoda (auto components), and GIDC Shapar-Veraval, one of the largest industrial estates in Asia by land area. Gold jewellery is the city's second major export pillar, Rajkot is Gujarat's second-largest gold jewellery market after Surat.",
            "This manufacturing depth creates a specific web design problem: most Rajkot MSMEs still rely on WhatsApp, trade directories, and word-of-mouth to reach buyers. International procurement teams from Bosch, Toyota, Cummins, and Caterpillar search Google before they ever send an RFQ. A foundry or precision machining unit with no website, or a slow, outdated one, is invisible to those buyers. The businesses that invest in a credible, fast, export-ready website today are capturing the first-page real estate their competitors are conceding.",
            "The opportunity is significant and the competitive bar in Rajkot is still low. Most engineering and manufacturing businesses in the city either have no website or one built on a dated template. FactoryJet builds export-ready, technically sound websites for exactly this market, with authority-first architecture, product catalog systems, and international buyer SEO built in.",
          ]}
          stats={[
            {
              value: '250K+',
              label: 'Registered MSMEs in Rajkot district, highest MSME density per capita in India',
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: '3,500+',
              label: "Engineering units in Rajkot: India's #1 auto parts manufacturing cluster",
              sourceUrl: 'https://rajkot.nic.in/',
              sourceLabel: 'Rajkot District NIC',
            },
            {
              value: 'Asia #1',
              label: 'GIDC Shapar-Veraval: one of Asia\'s largest industrial estates by land area',
              sourceUrl: 'https://gidc.gujarat.gov.in/',
              sourceLabel: 'GIDC Gujarat',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · RAJKOT"
          headline="What 'Web Design' Actually Means for a Rajkot Manufacturing or Engineering Business"
          lead="Rajkot's economy runs on two very different buyer types, international OEM and B2B procurement teams doing weeks of vendor research, and domestic traders and distributors deciding faster. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Rajkot&apos;s auto component exporters, foundry and casting units, pump and
                valve manufacturers, and precision engineering MSMEs: the website needs to project
                manufacturing capability, quality certifications (IATF 16949, ISO 9001, TS),
                export credentials, and product range to international procurement teams in the US,
                Germany, and Japan. These buyers research vendors for weeks before making contact.
                The site needs to answer their due-diligence questions: production capacity, past
                clients, quality standards, and a frictionless RFQ form. We build these sites with
                authority-first architecture, product catalog systems, and lead-capture flows
                designed for long B2B sales cycles.
              </p>
              <p>
                For Rajkot&apos;s gold jewellers, traders, retail businesses, and service
                companies: the challenge is different. Consumer and domestic B2B buyers need
                mobile-first speed, clear product or service presentation, and instant contact
                options. WhatsApp integration, clean product showcase, and conversion-optimised
                inquiry forms are the priority. We build for both buyer types because we start
                every project with the buyer journey in mind, not the template.
              </p>
              <p>
                Every FactoryJet Rajkot project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own, a design system you keep, and a site built to rank and convert, whether your
                buyer is in Rajkot, Mumbai, or Düsseldorf.
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
                    type: 'B2B / Export & Industrial',
                    need: 'Credentials + catalog + RFQ',
                    area: 'GIDC Metoda · GIDC Shapar-Veraval · GIDC Aji',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Rajkot City Centre · Gondal Road · Kalawad Road',
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
          headline="Why Rajkot Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress, faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront, no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Rajkot's engineering and manufacturing businesses operate on tight delivery schedules: the website should be no different. Waiting 12 weeks for a site briefed in March is not acceptable when the export season is already underway. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Rajkot manufacturers competing for international buyers on Google, that performance gap directly affects rankings and first impressions.",
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
          headline="How We Build Your Rajkot Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={RJT_JOURNEY_STAGES}
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
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with authority-first architecture designed for B2B project enquiries, credentials display, project portfolio, and technical SEO.',
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
          headline="FactoryJet vs. Rajkot Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Rajkot deliver the same output. Here is the honest comparison, scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch, same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={RJT_COMPARISON_COLUMNS}
          rows={RJT_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="RAJKOT × WEB DESIGN"
          headline="Web Design for Rajkot's Key Industries"
          lead="From auto component exporters and precision engineering manufacturers to gold jewellers, traders, and professional services, Rajkot's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Auto Components & Engineering',
              description:
                "Rajkot is India's #1 auto component cluster, home to 3,500+ units manufacturing bearings, castings, forgings, dies, molds, and precision parts for OEMs in the USA, Germany, and Japan. These exporters need websites that project manufacturing capability, quality certifications (IATF, ISO), production capacity, and a frictionless RFQ flow. We build export-ready sites with product catalog systems and international buyer SEO.",
              example:
                'Auto component manufacturers and exporters in GIDC Metoda, Aji, and Shapar-Veraval targeting OEM buyers in the US, Germany, and Japan.',
            },
            {
              name: 'Foundry, Casting & Forging',
              description:
                "Rajkot's foundry and casting sector is one of the largest in India, producing grey iron, ductile iron, and alloy steel castings for automotive, agricultural, and industrial applications. These businesses compete for domestic and export contracts where a professional website with process capability display, tolerance specifications, and metallurgy certifications is a key qualification signal.",
              example:
                'Foundry units, casting manufacturers, and forging companies in GIDC Metoda and Shapar-Veraval targeting B2B procurement across India and overseas.',
            },
            {
              name: 'Pumps, Valves & Fluid Equipment',
              description:
                "Rajkot is a major manufacturing hub for industrial pumps, valves, and fluid handling equipment, supplying the oil & gas, chemical, water treatment, and agriculture sectors. These businesses need websites that communicate product range, pressure and flow specifications, industry certifications, and dealer network coverage. B2B product catalog systems and inquiry portals are standard.",
              example:
                'Pump manufacturers, valve producers, and fluid equipment suppliers targeting process industry buyers across India and international markets.',
            },
            {
              name: 'Gold Jewellery & Retail',
              description:
                "Rajkot is Gujarat's second-largest gold jewellery market, with a dense concentration of jewellers, bullion traders, and fine jewellery manufacturers in the city centre. Retail jewellers need websites that showcase product collections with quality photography, communicate purity and hallmarking credentials, and drive store footfall and WhatsApp inquiries. Consumer-first design with mobile speed is the priority.",
              example:
                'Gold jewellers, bullion traders, and fine jewellery manufacturers in Rajkot city centre targeting retail and wholesale buyers.',
            },
            {
              name: 'Machine Tools & Dies',
              description:
                "Rajkot has a strong machine tool and die & mould manufacturing cluster supplying the auto and engineering industries. These businesses need B2B authority sites that showcase tooling capability, precision tolerances, material compatibility, and project experience to industrial procurement teams. Technical product specifications and capability documentation are key website assets.",
              example:
                'Machine tool manufacturers, die and mould makers, and precision engineering units in Rajkot GIDC industrial zones.',
            },
            {
              name: 'Trading & Professional Services',
              description:
                "Rajkot's commercial base includes FMCG distributors, commodity traders, and a strong CA, legal, and consulting community serving Gujarat's large MSME sector. For trading businesses, the website projects scale and reliability. For professional services, it is the first qualification filter. We build authority-first sites with clear service pages and lead-capture flows.",
              example:
                "Traders, distributors, CA firms, legal practices, and management consultants serving Rajkot's business community.",
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
          headline="Common Questions from Rajkot Businesses"
          lead="The questions we answer on every Rajkot discovery call, answered here, without the runaround."
          categories={RJT_FAQ_CATEGORIES}
          items={RJT_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Rajkot Website?"
          sub="Rajkot's 250,000+ MSMEs, India's #1 auto component cluster, and GIDC Shapar-Veraval's industrial scale mean serious businesses are competing for the same international buyer impressions and the same Google rankings every day. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="rajkot" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
