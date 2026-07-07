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
  title: 'Web Design Company in Kochi | FactoryJet',
  description:
    'Web design company in Kochi for IT firms, tourism businesses, exporters & startups. Fast, custom websites with a 7-day delivery guarantee. Serving Infopark, Kakkanad, MG Road & Fort Kochi.',
  keywords: [
    'web design company in Kochi',
    'website design Kochi',
    'web development company Kochi',
    'website design company Kochi',
    'affordable web design Kochi',
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
      'Professional website design company in Kochi — Next.js, SEO, and GA4 included. 7-day delivery. Serving Infopark, Kakkanad, MG Road Ernakulam, Fort Kochi & Edapally.',
    url: 'https://factoryjet.com/web-design/kochi',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Kochi',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Kochi | FactoryJet',
    description:
      'Website design company in Kochi. 7-day delivery. Next.js, SEO, GA4 included.',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Kochi building fast, SEO-optimized websites for IT firms, tourism businesses, exporters, and startups. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/kochi',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'City', name: 'Ernakulam' },
    { '@type': 'City', name: 'Kakkanad' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Kochi',
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
      name: 'How much does a website cost for a business in Kochi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Kochi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT companies at Infopark Kochi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — IT and software companies at Infopark and Technopark are a core client profile. We build websites optimised for B2B tech sales: service capability architecture, case study display, technology stack credentials, and lead flows designed for enterprise procurement cycles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Kochi business website rank on Google?',
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
      name: 'Who is the best web design agency in Kochi?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Kochi: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Kochi you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Kochi.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Kochi or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Kochi directly, agree the scope and price in writing first.' },
    },
],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const KOCHI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Kochi's market — whether that's an international buyer researching a Kerala seafood or spice exporter, a tourist planning a backwater trip through Fort Kochi, an enterprise procurement team evaluating an Infopark IT vendor, or an NRI business owner launching a new venture. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      "Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking systems for tourism businesses, product catalog systems for exporters, and any third-party APIs your business uses. Kerala's high internet-penetration audience expects fast, modern web experiences — performance budgets enforced from the first commit. — Days 5–6",
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Kochi-specific local SEO targeting built in — including bilingual search intent awareness for Malayalam + English queries. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const KOCHI_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Kochi Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const KOCHI_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Kochi?',
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
    question: 'What makes FactoryJet better value than a Kochi web agency?',
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
      "Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Kerala has India's highest internet penetration — your audience is online and actively searching. Branded searches typically rank within 1–2 weeks.",
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Kochi businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, booking enquiry clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Kochi Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT companies at Infopark Kochi?',
    answer:
      "Yes — IT and software companies at Infopark and the broader Kakkanad tech corridor are a core client profile. We build websites optimised for B2B tech sales: service capability architecture, case study and credentials display, technology stack showcase, and lead flows designed for enterprise procurement cycles. Kerala's IT sector is growing fast — a high-performance website is no longer optional.",
  },
  {
    category: 'local',
    question: 'Can you build tourism and hospitality websites for Fort Kochi and backwater operators?',
    answer:
      "Yes. Tourism is Kochi's headline industry — Fort Kochi's heritage quarter, Kumarakom's backwaters, Alappuzha houseboats, and Munnar hill stations attract hundreds of thousands of visitors each year. Tourism businesses need mobile-first booking flows, gallery-rich design, TripAdvisor review integration, and international buyer UX. We build for English-language international search as well as domestic travel searches.",
  },
  {
    category: 'local',
    question: "Do you know Kochi's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Kochi's business geography as part of discovery — from Infopark's IT cluster in Kakkanad and the Kochi Smart City precinct to MG Road Ernakulam's commercial high street, Fort Kochi's heritage tourism zone, and Edapally's emerging commercial corridor. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Kochi and Trivandrum web agencies?',
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
      'Every project includes a 30-day post-launch support window covering bug fixes and minor adjustments at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans covering development changes, priority same-day bug response, and a dedicated engineer who knows your codebase.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Kochi businesses?',
    answer:
      'Yes. Monthly retainers cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'support',
    question: 'Can NRI business owners work with FactoryJet remotely?',
    answer:
      "Absolutely. Kerala has one of India's largest NRI diaspora communities, and many Kochi businesses are NRI-owned or NRI-funded. Our entire process is remote-first — discovery calls, design previews, approvals, and handover all happen asynchronously or over video. We work across time zones by default.",
  },
  {
    category: 'local',
    question: 'Do you build websites for Kochi seafood and spice exporters?',
    answer:
      'Yes. Kochi is a key hub for Kerala seafood exports (one of India\'s largest seafood export corridors) and spice trade. Export businesses need websites that project certifications, product quality, processing capacity, and cold chain credentials to international buyers. We build B2B export sites with product catalog systems, inquiry forms optimised for global buyer flows, and SEO targeting English-language searches from procurement teams in the US, EU, and Middle East.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Kochi?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Kochi: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Kochi you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Kochi.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Kochi or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Kochi directly, agree the scope and price in writing first.',
  },
];

const KOCHI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kochi/Trivandrum Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const KOCHI_COMPARISON_ROWS = [
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
  '@id': `https://factoryjet.com/web-design/kochi#howto`,
  name: `How FactoryJet builds your Kochi website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Kochi businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Kochi market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Kochi competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Kochi local schema markup added. Google Analytics and Search Console connected.`,
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
      <Script
        id="kochi-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
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

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_kochi_hero" />}
          eyebrow="WEB DESIGN · KOCHI"
          headline="Website Design in Kochi for IT Firms, Tourism Businesses, Exporters, and Kerala's Growing Startups"
          lead="Kochi is Kerala's Smart City, the engine of India's most internet-literate state, and a city where Infopark's 450+ IT companies, Fort Kochi's tourism economy, a thriving seafood and spice export sector, and a fast-growing startup community all compete for the same digital attention. Kerala has India's highest internet penetration and highest literacy rate — your audience is online, informed, and comparing you against your competitors right now. FactoryJet builds Figma-designed, Next.js-built websites with a 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="KOCHI MARKET"
          headline="Why Your Kochi Web Presence Is a Business Asset"
          leadParagraphs={[
            "Kochi is Kerala's commercial capital and the state's digital frontline. Kerala consistently ranks as India's highest internet-penetrated state — with over 54% internet penetration against a national average of 43% — and has India's highest literacy rate at 96.2%. This is not a population that stumbles onto your website by accident. They are researching you, comparing you, and deciding whether to contact you — entirely online. A high-performing website in Kochi is not a nice-to-have; it is the first and most-scrutinised touchpoint in your sales process.",
            "Kochi's economy is multi-layered. Infopark — one of India's largest IT parks — houses 450+ companies employing over 70,000 professionals and generating billions in annual revenue. The Kerala Startup Mission (KSUM) has supported 5,000+ startups, with Kochi and Thiruvananthapuram as the primary hubs. The Kochi Smart City project and Kochi Metro are accelerating commercial development in Kakkanad and Edapally. Fort Kochi's heritage tourism draws international visitors and high-end NRI-funded hospitality businesses. And the Kochi Port and nearby Cochin Fisheries Harbour make the city a critical hub for seafood, spice, and commodity exports.",
            "Kerala's large NRI diaspora — over 20 lakh Keralites work abroad, mostly in the Gulf — means many Kochi businesses are NRI-owned or NRI-funded, and expect international-quality web presence as a baseline. A website that looks like it was built in 2015 is not competitive in a market where the business owner has been comparing it against Dubai and London competitors. FactoryJet builds websites that match the ambition of Kochi's most forward-thinking businesses.",
          ]}
          stats={[
            {
              value: '450+',
              label: "IT companies at Infopark Kochi — employing 70,000+ professionals",
              sourceUrl: 'https://infopark.in/',
              sourceLabel: 'Infopark Kerala',
            },
            {
              value: '5,000+',
              label: "Startups supported by Kerala Startup Mission (KSUM) — Kochi is the primary hub",
              sourceUrl: 'https://startupmission.kerala.gov.in/',
              sourceLabel: 'Kerala Startup Mission',
            },
            {
              value: '96.2%',
              label: "Kerala literacy rate — India's highest. Your customers research extensively before buying.",
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census of India',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · KOCHI"
          headline="What 'Web Design' Actually Means for a Kochi Business"
          lead="Kochi's economy spans IT services, tourism, exports, startups, and a large NRI business community — each with completely different buyer journeys and web strategies. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template."
          body={
            <>
              <p>
                For Kochi&apos;s IT and software companies at Infopark — the website needs to
                project technical capability, team credentials, and past project scope to
                enterprise procurement teams and international clients. IT services websites
                need case study architecture, technology stack display, certifications, and
                lead flows designed for longer B2B sales cycles. We build these sites with
                authority-first architecture and conversion flows optimised for enterprise RFQ.
              </p>
              <p>
                For tourism and hospitality businesses in Fort Kochi, Kumarakom, and the
                backwater corridor — the website needs gallery-rich, mobile-first design, fast
                booking flows, and international buyer UX. Tourism audiences make decisions
                on emotion and imagery. We build tourism sites that convert research into
                bookings, with TripAdvisor integration, WhatsApp inquiry flows, and SEO
                targeting English-language searches from international travellers.
              </p>
              <p>
                For seafood and spice exporters operating through Kochi Port — the challenge
                is international B2B credibility. Buyers in the US, EU, Japan, and the Middle
                East research Indian vendors for weeks. Export sites need certifications,
                product quality documentation, processing capacity display, and frictionless
                RFQ forms. For NRI-owned businesses and startups emerging from KSUM — the
                site needs to match the international quality benchmark their owners have
                experienced abroad. Every FactoryJet Kochi project covers discovery, Figma
                prototyping, Next.js development, SEO, GA4, and a 30-day support window.
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
                    type: 'IT & Software (Infopark)',
                    need: 'Credentials + case studies + enterprise RFQ',
                    area: 'Infopark · Kakkanad · Kochi Smart City',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Gallery + booking flow + international UX',
                    area: 'Fort Kochi · Kumarakom · Alleppey',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Export & Trade',
                    need: 'Certifications + catalog + global buyer RFQ',
                    area: 'Kochi Port · Willingdon Island · Mattancherry',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Startup & NRI Business',
                    need: 'International quality + speed + conversion',
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
                  Same engineering quality. Strategy tailored to your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Kochi Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront — no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Kerala's business community is fast-moving, informed, and impatient with poor execution. Waiting 12 weeks for a website that should have been live in March is not acceptable when your Infopark competitor already has one. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. Kerala\'s audience notices.',
              body: "Kerala has India's highest internet penetration — your audience is sophisticated and uses fast mobile connections. WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on 4G versus 4–6s for WordPress. For businesses competing on Google's Core Web Vitals, that gap directly affects rankings.",
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
          headline="How We Build Your Kochi Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={KOCHI_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Kochi/Trivandrum Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Kerala deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={KOCHI_COMPARISON_COLUMNS}
          rows={KOCHI_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="KOCHI × WEB DESIGN"
          headline="Web Design for Kochi's Key Industries"
          lead="From IT firms at Infopark and tourism operators in Fort Kochi to seafood exporters at Kochi Port and startups from KSUM — Kochi's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT & Software Services',
              description:
                "Infopark Kochi houses 450+ IT and software companies employing over 70,000 professionals. Kerala's IT sector — ITES, software products, and digital services — is one of India's fastest growing. IT services websites need authority-first architecture: service capability pages, technology stack display, team credentials, case studies, and lead flows designed for enterprise procurement cycles. International clients research for weeks before making contact.",
              example:
                'Software development companies, ITES firms, SaaS product startups, and digital agencies operating from Infopark and Kakkanad.',
            },
            {
              name: 'Tourism & Hospitality',
              description:
                "Kochi is the gateway to Kerala — one of India's top domestic and international tourism destinations. Fort Kochi's heritage quarter, the backwater houseboat network from Alappuzha, Munnar's hill stations, and Kochi's international cruise terminal together attract millions of visitors annually. Tourism businesses need gallery-rich mobile-first design, booking engine integration, TripAdvisor review display, and international buyer UX with multi-currency support.",
              example:
                'Heritage homestays and boutique hotels in Fort Kochi, backwater houseboat operators, Ayurvedic resorts, and inbound tourism agencies.',
            },
            {
              name: 'Seafood & Spice Exports',
              description:
                "Kochi is one of India's most important seafood export hubs — the Cochin Fisheries Harbour handles thousands of tonnes of processed seafood annually for markets in the US, EU, Japan, and Southeast Asia. Kerala's spice trade (pepper, cardamom, ginger) runs through Kochi's commodity markets. Export businesses need certifications display, product quality documentation, cold chain credentials, and B2B inquiry flows targeting international procurement buyers.",
              example:
                'Seafood processing and export companies, spice exporters, and commodity traders operating through Kochi Port and Willingdon Island.',
            },
            {
              name: 'Fintech & Startups',
              description:
                "Kerala Startup Mission (KSUM) has supported 5,000+ startups, with Kochi as the primary commercial hub. KSUM's T-Hub, Maker Village, and Startup Village ecosystems are producing fintech, edtech, agritech, and D2C startups at an accelerating rate. Startup websites need product-led architecture, investor credibility signals, demo request flows, and performance designed for rapid iteration and fundraise timelines.",
              example:
                "Tech startups, fintech companies, SaaS products, and D2C brands emerging from Kochi's KSUM and private startup ecosystem.",
            },
            {
              name: 'Healthcare & Wellness',
              description:
                "Kerala is India's healthcare tourism leader — with internationally accredited hospitals in Kochi and a globally recognised Ayurveda sector. Hospitals, specialty clinics, and Ayurvedic wellness centres serve a demanding mix of domestic patients, Gulf NRI medical tourists, and international wellness travellers. Healthcare websites need NABH credential display, doctor profile pages, appointment booking systems, and international patient UX.",
              example:
                'Multi-specialty hospitals, Ayurvedic resorts and clinics, dental chains, and wellness centres targeting domestic and international patients.',
            },
            {
              name: 'NRI Business & Professional Services',
              description:
                "Kerala's NRI diaspora — over 20 lakh Keralites working abroad, primarily in the Gulf — creates a distinctive business category: NRI-owned companies that require international-quality web presence as a baseline expectation. CA firms, real estate developers, legal practices, and professional services businesses serving Kochi's NRI community need authority-first sites with professional credential display, service capability pages, and lead-capture flows that convert international enquiries.",
              example:
                'CA and CS firms, real estate developers, corporate law practices, and professional services firms serving Kochi and the NRI community.',
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
          headline="Common Questions from Kochi Businesses"
          lead="The questions we answer on every Kochi discovery call — answered here, without the runaround."
          categories={KOCHI_FAQ_CATEGORIES}
          items={KOCHI_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Kochi Website?"
          sub="Kochi's IT companies, tourism operators, export businesses, and startups are all competing for the same Google rankings and the same first impressions from a digital audience that is more informed than anywhere else in India. Kerala has India's highest internet penetration and literacy rate — your audience is researching you right now. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
