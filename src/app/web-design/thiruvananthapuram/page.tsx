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
  title: 'Web Design Company in Thiruvananthapuram | | FactoryJet',
  description:
    'Web design company in Thiruvananthapuram (Trivandrum) for IT startups, government contractors, ISRO ecosystem firms & tourism businesses. Fast websites from ₹29,999. 7-day delivery. Serving Technopark, Kazhakuttam & Pattom.',
  keywords: [
    'web design company in Thiruvananthapuram',
    'website design Trivandrum',
    'web development Thiruvananthapuram',
    'website design company Thiruvananthapuram',
    'Trivandrum website designer',
    'Technopark startup website design',
    'affordable web design Kerala capital',
    'web design Trivandrum',
    'web design for startups Trivandrum',
    'Kerala Startup Mission website design',
    'KSUM startup website Thiruvananthapuram',
    'web design agency Thiruvananthapuram',
    'Next.js web development Trivandrum',
    'government contractor website design Thiruvananthapuram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Thiruvananthapuram | | FactoryJet',
    description:
      "Professional website design company in Thiruvananthapuram (Trivandrum) — Next.js, SEO, and GA4 included. 7-day delivery. Serving Technopark, Kazhakuttam, Pattom & Kerala's capital business district.",
    url: 'https://factoryjet.com/web-design/thiruvananthapuram',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Thiruvananthapuram',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Thiruvananthapuram | FactoryJet',
    description:
      'Website design company in Thiruvananthapuram (Trivandrum). 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/thiruvananthapuram',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/thiruvananthapuram',
      'x-default': 'https://factoryjet.com/web-design/thiruvananthapuram',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    "Web design company in Thiruvananthapuram (Trivandrum) building fast, SEO-optimized websites for IT startups, government contractors, ISRO ecosystem firms, tourism businesses, and Ayurveda brands. 7-day delivery guarantee.",
  url: 'https://factoryjet.com/web-design/thiruvananthapuram',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thiruvananthapuram',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Thiruvananthapuram' },
    { '@type': 'City', name: 'Trivandrum' },
    { '@type': 'City', name: 'Kazhakuttam' },
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
    name: 'Web Design Services Thiruvananthapuram',
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
      name: 'How much does a website cost for a business in Thiruvananthapuram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Thiruvananthapuram (Trivandrum) businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Thiruvananthapuram and Kochi agency rates for comparable scope typically run ₹1,20,000–₹3,50,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Thiruvananthapuram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT startups at Technopark Trivandrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — IT startups and software companies at Technopark (India's first IT park, established 1990) are a core client profile. We build websites optimised for B2B tech sales: service capability architecture, technology stack credentials, case study display, and lead flows designed for enterprise procurement and investor evaluation cycles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Thiruvananthapuram business website rank on Google?',
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

const TVM_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Thiruvananthapuram's market — whether that's an enterprise procurement team evaluating a Technopark startup, a government or defence agency contractor, an ISRO ecosystem firm, a Kovalam tourism operator, or an Ayurveda wellness brand targeting international clients. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      "Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, government RFP inquiry flows, booking systems for tourism and Ayurveda businesses, and any third-party APIs your business uses. Thiruvananthapuram's highly educated, internet-literate audience expects fast, modern web experiences — performance budgets enforced from the first commit. — Days 5–6",
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Thiruvananthapuram-specific local SEO targeting built in — including both "Thiruvananthapuram" and "Trivandrum" search intent coverage. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const TVM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Trivandrum Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const TVM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Thiruvananthapuram?',
    answer:
      "FactoryJet's web design for Thiruvananthapuram (Trivandrum) businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Thiruvananthapuram and Kochi agency rates for comparable scope typically run ₹1,20,000–₹3,50,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Thiruvananthapuram web agency?',
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
      "Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Kerala has India's highest internet penetration and literacy rate — your audience is online, informed, and actively searching for services like yours. Branded searches typically rank within 1–2 weeks.",
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Thiruvananthapuram businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Trivandrum Local ── */
  {
    category: 'local',
    question: 'Is it "Thiruvananthapuram" or "Trivandrum" — which name should I use for SEO?',
    answer:
      'Both names matter for SEO and both are searched actively. "Trivandrum" is the historically anglicised name still widely used by locals, NRIs, and older businesses. "Thiruvananthapuram" is the official name used in formal, government, and institutional contexts. FactoryJet targets both names in your page copy, meta tags, and schema markup — so your site captures searchers using either term. You lose traffic if you pick only one.',
  },
  {
    category: 'local',
    question: 'Do you build websites for IT startups at Technopark Trivandrum?',
    answer:
      "Yes — IT and software companies at Technopark are a core client profile. Technopark is India's first IT park (established 1990) and houses 450+ companies including Infosys, UST Global, TCS, and IBS Group. We build websites optimised for B2B tech sales: service capability architecture, technology stack credentials, case study display, and lead flows designed for enterprise procurement cycles. Startups supported by Kerala Startup Mission (KSUM) — which has its HQ in Thiruvananthapuram — benefit from sites with investor-credibility signals and product-led architecture.",
  },
  {
    category: 'local',
    question: 'Can you build websites for government contractors and ISRO ecosystem firms?',
    answer:
      "Yes. Thiruvananthapuram hosts the Kerala Secretariat, all major state government departments, and ISRO's Vikram Sarabhai Space Centre (VSSC) — one of India's most important space research organisations. Government contractors and ISRO ecosystem firms (systems integrators, engineering consultants, technology suppliers) need authority-first websites: capability credentials, past project portfolio, compliance documentation, and RFP inquiry flows. We build for institutional buyers who research thoroughly before engaging.",
  },
  {
    category: 'local',
    question: "Do you know Thiruvananthapuram's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Thiruvananthapuram's business geography as part of discovery — from Technopark's IT campus at Kazhakuttam and the Pattom government quarter to Kovalam's beach tourism corridor, Vanchiyoor's legal and professional services precinct, and the emerging commercial belt along NH 66. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Thiruvananthapuram web agencies?',
    answer:
      "Thiruvananthapuram and Kochi web agencies typically charge ₹1,20,000–₹3,50,000 for a comparable project and deliver in 6–16 weeks. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at a fixed, published price.",
  },
  {
    category: 'local',
    question: 'Do you build websites for Ayurveda and wellness brands in Thiruvananthapuram?',
    answer:
      "Yes. Thiruvananthapuram is one of Kerala's most important Ayurveda and wellness hubs — home to internationally recognised hospitals, Ayurvedic resorts, and traditional vaidya practices. Ayurveda businesses targeting international wellness travellers and medical tourists need gallery-rich mobile-first design, online booking systems, international patient UX, and SEO targeting English-language searches from the US, UK, Germany, and the Gulf.",
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
    question: 'Do you offer ongoing retainer services for Thiruvananthapuram businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'support',
    question: 'Can NRI business owners work with FactoryJet remotely?',
    answer:
      "Absolutely. Kerala has one of India's largest NRI diaspora communities, and many Thiruvananthapuram businesses are NRI-owned or NRI-funded. Our entire process is remote-first — discovery calls, design previews, approvals, and handover all happen asynchronously or over video. We work across time zones by default.",
  },
];

const TVM_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Trivandrum/Kochi Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const TVM_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['Get a Quote', '₹1,20,000–₹3,50,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ta" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/thiruvananthapuram#howto`,
  name: `How FactoryJet builds your Thiruvananthapuram website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Thiruvananthapuram (Trivandrum) businesses.`,
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
      text: `We learn your business, your Thiruvananthapuram market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Trivandrum competitors, identify your top keywords (covering both "Thiruvananthapuram" and "Trivandrum" search terms), and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Thiruvananthapuram local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/thiruvananthapuram#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/thiruvananthapuram`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ThiruvananthapuramWebDesignPage() {
  return (
    <>
      <Script
        id="tvm-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="tvm-faq-schema"
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
          { name: 'Thiruvananthapuram', url: 'https://factoryjet.com/web-design/thiruvananthapuram' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · THIRUVANANTHAPURAM"
          headline="Website Design in Thiruvananthapuram for IT Startups, Government Contractors, ISRO Ecosystem Firms, and Kerala's Capital City Businesses"
          lead="Thiruvananthapuram — Kerala's capital and India's startup-first city — is home to Technopark (India's first IT park), Kerala Startup Mission HQ, ISRO's Vikram Sarabhai Space Centre, and the nerve centre of state governance. From Technopark's 450+ companies and 75,000+ IT professionals to Kovalam's tourism economy and Thiruvananthapuram's Ayurveda corridor — this city runs on ambition and academic excellence. Businesses here search both 'Thiruvananthapuram' and 'Trivandrum' — FactoryJet targets both. — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
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
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THIRUVANANTHAPURAM MARKET"
          headline="Why Your Thiruvananthapuram Web Presence Is a Business Asset"
          leadParagraphs={[
            "Thiruvananthapuram — known to millions as Trivandrum — is not just Kerala's administrative capital; it is the state's intellectual and startup engine. India's first IT park, Technopark, was established here in 1990 — decades before 'startup ecosystem' was a common phrase. Today it houses 450+ companies employing 75,000+ IT professionals, including global names like Infosys, UST Global, TCS, and IBS Group. Kerala Startup Mission (KSUM) has its headquarters here, having supported 4,500+ startups across the state. ISRO's Vikram Sarabhai Space Centre — one of India's most prestigious research institutions — drives a significant space technology and engineering ecosystem in the city. This is not a city of traders; it is a city of engineers, academics, and institution-builders. And that means the quality bar for digital presence is exceptionally high.",
            "Thiruvananthapuram's economy spans several completely distinct sectors. The IT and software sector at Technopark and the broader Kazhakuttam corridor competes for international enterprise clients. The government and public sector — Kerala Secretariat, KSITIL, and dozens of state agencies — drives a large ecosystem of contractors and consultants. Tourism anchors around Kovalam beach, the Padmanabhaswamy Temple heritage circuit, and the Kerala backwater gateway. And Thiruvananthapuram's Ayurveda and wellness sector — internationally recognised for authentic traditional practice — attracts medical tourists from Europe, the Gulf, and the US. Each of these sectors requires a completely different web architecture, buyer psychology, and SEO strategy.",
            "A critical nuance for search: the city is searched as both 'Thiruvananthapuram' (official, formal) and 'Trivandrum' (widely used locally, by NRIs, and in colloquial English). Businesses that target only one variant lose a significant share of search traffic. FactoryJet builds sites that capture both — with dual-keyword coverage in meta tags, body copy, and LocalBusiness schema. Every week without a properly optimised web presence is search traffic conceded to a competitor who already has one.",
          ]}
          stats={[
            {
              value: '450+',
              label: "Companies at Technopark Trivandrum — India's first IT park, employing 75,000+ professionals",
              sourceUrl: 'https://www.technopark.org/',
              sourceLabel: 'Technopark Kerala',
            },
            {
              value: '4,500+',
              label: "Startups supported by Kerala Startup Mission (KSUM) — HQ in Thiruvananthapuram",
              sourceUrl: 'https://startupmission.kerala.gov.in/',
              sourceLabel: 'Kerala Startup Mission',
            },
            {
              value: 'VSSC',
              label: "ISRO's Vikram Sarabhai Space Centre — major employer and space tech ecosystem anchor",
              sourceUrl: 'https://www.vssc.gov.in/',
              sourceLabel: 'ISRO VSSC',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · THIRUVANANTHAPURAM"
          headline="What 'Web Design' Actually Means for a Thiruvananthapuram Business"
          lead="Thiruvananthapuram's economy runs on four very different buyer profiles — IT enterprise procurement, government contracting, international tourism, and Ayurveda medical tourism. Each needs a completely different web strategy. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template."
          body={
            <>
              <p>
                For IT and software companies at Technopark — the website needs to project
                technical capability, team credentials, and past project scope to enterprise
                procurement teams and international clients. These buyers research for weeks.
                IT services sites need case study architecture, technology stack display,
                certifications, and lead flows designed for longer B2B sales cycles. Startups
                backed by KSUM need investor-credibility signals alongside product-led
                conversion flows.
              </p>
              <p>
                For government contractors, ISRO ecosystem firms, and consultants serving
                Kerala&apos;s public sector — the website is a capability statement.
                Institutional buyers evaluate credentials, past project portfolio, compliance
                documentation, and team expertise before issuing RFPs. We build authority-first
                sites with credentials display and inquiry flows optimised for government
                procurement research timelines.
              </p>
              <p>
                For tourism operators along the Kovalam corridor, Ayurveda wellness centres,
                and hospitality businesses in Thiruvananthapuram — the website is the booking
                engine. International travellers from Europe, the Gulf, and the US research
                experiences on mobile, compare galleries, read reviews, and book entirely
                online. We build gallery-rich, mobile-first sites with fast booking flows
                and international buyer UX. Every FactoryJet Thiruvananthapuram project
                covers discovery, Figma prototyping, Next.js development, SEO targeting
                both city name variants, GA4, and a 30-day support window.
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
                    type: 'IT & Software (Technopark)',
                    need: 'Credentials + case studies + enterprise RFQ',
                    area: 'Technopark · Kazhakuttam · KSUM',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Government & ISRO Ecosystem',
                    need: 'Capability statement + RFP inquiry flow',
                    area: 'Secretariat · VSSC · KSITIL · Pattom',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Gallery + booking flow + international UX',
                    area: 'Kovalam · Varkala · Padmanabhaswamy',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Ayurveda & Wellness',
                    need: 'Medical credibility + booking + international reach',
                    area: 'Thiruvananthapuram wellness corridor · NRI & EU travellers',
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
          headline="Why Thiruvananthapuram Businesses Choose FactoryJet Over Local Agencies"
          lead="Thiruvananthapuram and Kochi web agencies typically charge ₹1,20,000–₹3,50,000 for a comparable project and take 6–16 weeks to deliver. Trivandrum's business community — educated, technically literate, and internationally connected — has high standards for digital quality. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Pricing is fixed and agreed upfront — no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Thiruvananthapuram's Technopark companies, government contractors, and startup founders move fast. Waiting 14 weeks for a website that should have been live in April is not acceptable when KSUM's demo day is in three weeks. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: "Next.js, not WordPress. Trivandrum's audience notices.",
              body: "Thiruvananthapuram has India's most technically literate business population — Technopark engineers, ISRO researchers, and KSUM startup founders know exactly what a fast website feels like versus a slow one. WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on 4G versus 4–6s for WordPress. That gap is visible to your audience.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Thiruvananthapuram Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={TVM_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Trivandrum/Kochi Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Thiruvananthapuram deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,50,000 Trivandrum agency project.',
          }}
          columns={TVM_COMPARISON_COLUMNS}
          rows={TVM_COMPARISON_ROWS}
          footer="Prices reflect typical Kerala market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="THIRUVANANTHAPURAM × WEB DESIGN"
          headline="Web Design for Thiruvananthapuram's Key Industries"
          lead="From IT startups at Technopark and government contractors to Kovalam tourism operators and Ayurveda wellness brands — Thiruvananthapuram's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT & Software (Technopark)',
              description:
                "Technopark — India's first IT park, established in 1990 — houses 450+ companies employing 75,000+ professionals. From global IT giants like Infosys, TCS, and UST Global to ambitious product startups backed by KSUM, Thiruvananthapuram's IT sector is one of India's most established. IT services websites need authority-first architecture: capability pages, technology stack display, case studies, team credentials, and lead flows designed for enterprise procurement cycles. International clients research for weeks before engaging.",
              example:
                'Software development companies, ITES firms, SaaS product startups, and digital agencies operating from Technopark campus and the Kazhakuttam corridor.',
            },
            {
              name: 'Government & Public Sector',
              description:
                "Thiruvananthapuram hosts the Kerala Secretariat, all major state government departments, KSITIL (Kerala State IT Infrastructure Ltd), and the headquarters of dozens of public sector undertakings. This creates a large ecosystem of government contractors, systems integrators, engineering consultants, and technology suppliers. These businesses need websites that function as institutional capability statements — past project portfolio, team credentials, compliance documentation, and RFP inquiry flows.",
              example:
                'Government IT contractors, systems integrators, engineering consultants, and professional services firms serving Kerala public sector organisations.',
            },
            {
              name: 'ISRO & Space Tech Ecosystem',
              description:
                "ISRO's Vikram Sarabhai Space Centre (VSSC) in Thiruvananthapuram is one of India's most important space research and launch vehicle development centres. VSSC anchors a significant ecosystem of engineering firms, technology suppliers, precision manufacturers, and research institutions. Businesses in this ecosystem need websites that convey technical excellence, certifications, and institutional credibility — not consumer-facing design.",
              example:
                "Engineering firms, precision technology suppliers, testing laboratories, and research organisations serving ISRO and India's space technology sector.",
            },
            {
              name: 'Tourism & Hospitality',
              description:
                "Thiruvananthapuram is Kerala's tourism gateway — home to Kovalam beach (one of India's most famous international beach destinations), the Padmanabhaswamy Temple heritage circuit, and the southern backwaters near Varkala. Tourism businesses serve a demanding mix of domestic travellers, international leisure tourists, and NRI families visiting from the Gulf and Europe. Tourism sites need gallery-rich mobile-first design, fast booking flows, WhatsApp inquiry integration, and international buyer UX.",
              example:
                "Beach resorts, heritage homestays, tour operators, and travel agencies operating in and around Kovalam, Varkala, and Thiruvananthapuram's heritage zone.",
            },
            {
              name: 'Ayurveda & Wellness',
              description:
                "Thiruvananthapuram is one of Kerala's most important authentic Ayurveda destinations — home to internationally recognised hospitals, traditional vaidya practices, and wellness retreats attracting medical tourists from Europe, the Gulf, and the US. Ayurveda businesses competing for international clients need gallery-rich design, multi-language consideration, online booking systems, doctor and treatment credentials display, and SEO targeting English-language searches from international travellers.",
              example:
                'Ayurvedic hospitals, wellness retreats, traditional vaidya practices, and Panchakarma centres targeting domestic and international medical tourism patients.',
            },
            {
              name: 'Education & Professional Services',
              description:
                "Thiruvananthapuram hosts the College of Engineering Trivandrum (est. 1939), Kerala University, and dozens of professional colleges. The city's educated workforce supports a strong CA, legal, and consulting ecosystem. Professional services firms need authority-first sites that project credibility to institutional clients — credentials display, service capability pages, team profiles, and lead-capture flows that convert research into booked consultations.",
              example:
                "CA and CS firms, corporate law practices, management consultants, and HR firms serving Thiruvananthapuram's government, IT, and business community.",
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
          headline="Common Questions from Thiruvananthapuram Businesses"
          lead="The questions we answer on every Trivandrum discovery call — answered here, without the runaround."
          categories={TVM_FAQ_CATEGORIES}
          items={TVM_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Thiruvananthapuram Website?"
          sub="Thiruvananthapuram's IT companies, government contractors, ISRO ecosystem firms, tourism operators, and Ayurveda businesses are all competing for the same Google rankings and the same first impressions from a digitally sophisticated audience. Kerala has India's highest internet penetration and literacy rate — your ideal customer is researching you right now, comparing your site against every competitor in the city. Whether they search 'Thiruvananthapuram' or 'Trivandrum', FactoryJet makes sure they find you. Every week without a high-performing website is ground you are conceding. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
