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
  title: 'Web Design Company in Mumbai | From ₹25,000 | 7-Day Delivery | FactoryJet',
  description:
    'FactoryJet is a web design company in Mumbai building fast, SEO-optimized websites for B2B exporters, D2C brands, and service businesses. From ₹25,000. 7-day delivery guarantee. Serving BKC, Andheri East, Lower Parel, and Navi Mumbai.',
  keywords: [
    'web design company in Mumbai',
    'website design Mumbai',
    'web development company Mumbai',
    'website design company Mumbai',
    'affordable web design Mumbai',
    'professional website design Mumbai',
    'web design BKC Mumbai',
    'web design Andheri Mumbai',
    'B2B website design Mumbai',
    'ecommerce website design Mumbai',
    'Next.js web development Mumbai',
    'web design agency Mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Mumbai | From ₹25,000 | FactoryJet',
    description:
      'Professional website design company in Mumbai — Next.js, SEO, and GA4 included. 7-day delivery. From ₹25,000. Serving BKC, Andheri, Lower Parel, Navi Mumbai.',
    url: 'https://factoryjet.com/web-design/mumbai',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Web Design Company in Mumbai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Mumbai | FactoryJet',
    description:
      'Website design company in Mumbai. From ₹25,000. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/mumbai',
    languages: webDesignCityAlternatesIN['mumbai'],
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
    'Web design company in Mumbai building fast, SEO-optimized websites for B2B exporters, D2C brands, and service businesses. From ₹25,000. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/mumbai',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', 'name': 'Mumbai' },
    { '@type': 'City', 'name': 'Navi Mumbai' },
    { '@type': 'City', 'name': 'Thane' },
  ],
  serviceType: 'Web Design and Development',
  priceRange: '₹₹',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Mumbai',
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
        description:
          '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '100000',
        priceCurrency: 'INR',
        description:
          'Custom Next.js build with e-commerce, booking systems, or AI integrations.',
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
      name: 'How much does a website cost for a small business in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Mumbai small businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, booking systems, or AI integrations start at ₹1,00,000. Mumbai agency rates for equivalent scope typically run ₹1,50,000–₹5,00,000 — often without a published timeline or a codebase you own outright.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website rank on Google India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every FactoryJet website includes technical SEO built in: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals optimisation for Indian 4G networks, internal linking, XML sitemap submission to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank within 1–2 weeks. Service + location queries like "web design company in Mumbai" take 3–6 months for a new domain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website after it is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every design asset in Figma, and all API credentials. You can take it to any developer or hosting provider at any time. No FactoryJet retainer required, no proprietary platform lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for B2B exporters in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — B2B and export-oriented businesses are a core client profile for us in Mumbai. We build websites optimised for international B2B buyer research: export credentials display, product catalog with datasheet downloads, RFQ inquiry forms, and technical SEO targeting English-language searches from global buyers. We have built for businesses in SEEPZ, MIDC Andheri, Bhandup, and Bhiwandi.',
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const MUMBAI_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Mumbai's market — whether that's an international B2B buyer sourcing from SEEPZ, a D2C shopper in Andheri, or a BFSI decision-maker in BKC. We audit your top three competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking flows, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Mumbai-specific local SEO targeting built in — not sold as an add-on. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const MUMBAI_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Mumbai Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const MUMBAI_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a small business in Mumbai?',
    answer:
      "FactoryJet's web design for Mumbai businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, booking systems, or AI integrations start at ₹1,00,000. Mumbai agency rates for comparable scope typically run ₹1,50,000–₹5,00,000 — often without a published timeline or a codebase you own outright.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace — not from the first conversation.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than Mumbai web agencies?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with account managers, strategy teams, and large office overheads in BKC. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. We have been building websites since 1999. You pay for the build, not our admin structure.",
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
      "We deploy to Cloudflare Pages, which is free for most projects (static Next.js builds). You set up and own your own Cloudflare account — we configure it for you. This means you are never on a shared hosting server that slows down under Mumbai's traffic spikes. There is no monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can add blog posts, update team pages, and change service descriptions without touching code. We configure the CMS and walk you through it in the handover session. Starter tier uses a lightweight approach you can manage with a simple pull request or we can set up on request.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank within 1–2 weeks. Service + location queries like "web design company in Mumbai" take 3–6 months for a new domain. The work that compresses that timeline is in every FactoryJet project by default.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on, and why does it matter?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN. Next.js generates static pages that load under 1.5 seconds on Indian 4G networks — significantly faster than WordPress, which renders server-side and is loaded with plugins. For Mumbai businesses competing on local search and Google's Core Web Vitals ranking signals, that performance gap over a WordPress competitor is real and measurable.",
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

  /* ── Mumbai Local ── */
  {
    category: 'local',
    question: 'Do you build websites for B2B exporters and manufacturers in Mumbai?',
    answer:
      "Yes — B2B and export-oriented businesses are a core client profile for us in Mumbai. We build websites optimised for international B2B buyer research: export credentials display, product catalogs with datasheet downloads, RFQ inquiry systems, and technical SEO targeting English-language searches from buyers in the US, UK, UAE, and EU. We have worked with businesses in SEEPZ, MIDC Andheri, Bhandup, and Bhiwandi.",
  },
  {
    category: 'local',
    question: 'Can you build websites for BFSI or fintech companies in BKC?',
    answer:
      "Yes. BKC is India's densest concentration of financial institutions, and the web design requirements there are distinct — compliance awareness, authority signals, and content architecture that answers regulatory and due-diligence questions before a prospect ever picks up the phone. We build BFSI websites with proper schema for financial services, clear regulatory credential display, and lead-capture flows designed for longer sales cycles.",
  },
  {
    category: 'local',
    question: "Do you know Mumbai's different business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Mumbai's business geography as part of discovery — from BKC's financial district and Lower Parel's media/startup corridor to Andheri East's MIDC industrial cluster, SEEPZ's export zone, and Navi Mumbai's Belapur CBD. Local specificity in copy and LocalBusiness schema (areaServed) improves relevance for neighbourhood-level and district-level searches, which is where many Mumbai B2B and professional services businesses win.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Mumbai web agencies?',
    answer:
      "Mumbai web agencies typically charge ₹1,50,000–₹5,00,000 for a comparable project and deliver in 8–20 weeks — without publishing their rates or timeline upfront. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. You get a faster website, a shorter timeline, and a codebase you own outright — at 60–70% less.",
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
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. After the support window, a maintenance retainer covers priority response. Because your site is on Cloudflare Pages (static files, global CDN), the most common causes of downtime — server crashes, plugin conflicts, database failures — simply do not apply. The last line of defence is already off the table.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Mumbai businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling, a dedicated engineer, and quarterly website health reports. Many of our Mumbai clients start with a project and move to a retainer once the site is live and generating leads.',
  },
];

const MUMBAI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Mumbai Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const MUMBAI_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹1,50,000–₹5,00,000', '₹15,000–₹80,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ma" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function MumbaiWebDesignPage() {
  return (
    <>
      <Script
        id="mumbai-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mumbai-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Mumbai', url: 'https://factoryjet.com/web-design/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · MUMBAI"
          headline="Website Design in Mumbai That Converts Buyers — Not Just Looks Good"
          lead="Mumbai powers 40% of India's corporate tax revenue, houses the NSE, BSE, and RBI, and is home to over 2.5 lakh registered businesses. B2B exporters in SEEPZ, D2C startups in Andheri, and BFSI firms in BKC all compete for the same Google real estate. FactoryJet builds from ₹25,000 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="MUMBAI MARKET"
          headline="Why Your Mumbai Web Presence Is a Business Asset — Not a Line Item"
          leadParagraphs={[
            "Mumbai is India's commercial capital — contributing approximately ₹21 lakh crore to the national economy and housing the headquarters of every major Indian bank, insurer, and stock exchange. The Bandra-Kurla Complex (BKC) is home to the Reserve Bank of India, SEBI, Citibank, HSBC, JP Morgan India, and the regional offices of virtually every Fortune 500 company operating in the country. Lower Parel and Andheri East have become India's second-densest startup corridor, with D2C brands, SaaS companies, and fintech startups launching every week. SEEPZ and MIDC Andheri host thousands of export-oriented manufacturers — electronics, gems, garments, engineering goods — competing for international buyers on Google every day.",
            "This diversity creates a web design challenge unique to Mumbai: a gemstone exporter in Zaveri Bazaar needs a completely different site architecture from a fintech startup in Powai — different trust signals, different buyer journeys, different conversion flows. A hotel in Colaba needs a different mobile experience from a law firm in Nariman Point. FactoryJet builds for all of them, because we start every project with the buyer in mind, not the template.",
            "The businesses that win in Mumbai's competitive market are not necessarily the largest — they are the ones with a faster, better-structured web presence than their competitors. A 1-second improvement in page load time increases conversions by 7%. A properly structured FAQ section indexed by Google can double inbound enquiry volume. These are not abstract metrics — they are the difference between a website that earns its cost in a month and one that sits on a business card.",
          ]}
          stats={[
            {
              value: '₹21L Cr+',
              label: "Mumbai's annual GDP — India's single largest city economy",
              sourceUrl: 'https://mospi.gov.in/web/mospi/statistical-year-book-india',
              sourceLabel: 'MoSPI Statistical Year Book',
            },
            {
              value: '2.5L+',
              label: 'Registered companies in Mumbai — the highest concentration in any Indian city',
              sourceUrl: 'https://www.mca.gov.in/',
              sourceLabel: 'Ministry of Corporate Affairs',
            },
            {
              value: '20M+',
              label: 'Population in the Mumbai Metropolitan Region — India\'s largest metro by GDP',
              sourceUrl: 'https://censusindia.gov.in/',
              sourceLabel: 'Census India',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · MUMBAI"
          headline="What 'Web Design' Actually Means for a Mumbai Business"
          lead="Mumbai's economy runs on two very different buyer behaviours — B2B industrial buyers doing months of research before a vendor call, and D2C consumers making purchase decisions in under 10 seconds on mobile. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Mumbai&apos;s B2B exporters, manufacturers, and BFSI firms — businesses in SEEPZ,
                MIDC Andheri, BKC, and Nariman Point — a website needs to project export credentials,
                technical depth, and compliance awareness. International buyers from the US, UK, UAE,
                and EU research vendors for weeks before making contact. The site needs to answer their
                due-diligence questions clearly: certifications, manufacturing capacity, past clients,
                and a frictionless RFQ form. We build these sites with authority-first architecture,
                product catalog systems, datasheet downloads, and lead-capture flows designed for
                longer B2B sales cycles.
              </p>
              <p>
                For Mumbai&apos;s D2C brands, startups, and service businesses in Andheri West, Bandra,
                Lower Parel, and Powai — the challenge is the opposite. Consumers arriving on mobile
                from Instagram or Google search make decisions in seconds. The site needs to load
                under 1.5 seconds on a 4G connection, present the product or service above the fold,
                and make the next step obvious. We build these sites mobile-first, at 375px before
                1440px, with Lighthouse 90+ performance before launch.
              </p>
              <p>
                Every FactoryJet Mumbai project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you own,
                a design system you keep, and a site built to rank — not just to look good in a mockup.
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
                    type: 'B2B / Export',
                    need: 'Authority + credentials + RFQ',
                    area: 'SEEPZ · MIDC · BKC · Nariman Point',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Bandra · Andheri · Lower Parel · Powai',
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
          headline="Why Mumbai Businesses Choose FactoryJet Over Local Agencies"
          lead="Mumbai web agencies typically charge ₹1,50,000–₹5,00,000 for a comparable project and take 8–20 weeks to deliver — without publishing their rates or timeline upfront. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. At 60–70% below the Mumbai agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Mumbai's market moves fast. Waiting 16 weeks for an agency to deliver a website you briefed in April is not a plan — it's a liability. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN nodes in Mumbai, Singapore, and 300+ other locations. The result: sub-1.5s load times on Indian 4G networks versus 4–6s for a typical WordPress site. For Mumbai businesses competing on Google\'s Core Web Vitals signals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹25,000, ₹50,000, and ₹1,00,000+ — before you speak to us. No discovery fees, no 'it depends' quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your site running.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Mumbai Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={MUMBAI_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What Mumbai businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description:
                "Belle Maison is a premium interior décor brand based in Mumbai. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting Mumbai's high-value interior design search queries. Lighthouse 95+ on mobile before launch.",
              imageSrc: '/images/ecommerce/mumbai/portfolio-belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'B2B · Shopify E-Commerce',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier in Mumbai. FactoryJet built a dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on a unified Shopify backend. Razorpay + Shiprocket integrated. ₹1.5 Cr in sales within 12 months of launch.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: '7-day delivery',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with an authority-first architecture designed for B2B project enquiries — credentials display, project portfolio, and technical SEO targeting high-value engineering queries across India.',
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
          headline="FactoryJet vs. Mumbai Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Mumbai deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹3,00,000 Mumbai agency project.',
          }}
          columns={MUMBAI_COMPARISON_COLUMNS}
          rows={MUMBAI_COMPARISON_ROWS}
          footer="Prices reflect typical Mumbai market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="MUMBAI × WEB DESIGN"
          headline="Web Design for Mumbai's Key Industries"
          lead="From SEEPZ export manufacturers to BKC fintech startups to Bandra D2C brands — Mumbai's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Manufacturing & Export',
              description:
                "Mumbai's SEEPZ and MIDC Andheri house thousands of export-oriented manufacturers — electronics, gems, garments, chemicals, and engineering goods. These businesses need websites that project export credentials, quality certifications, and manufacturing capacity to international B2B buyers. RFQ forms, product catalogs with datasheet downloads, and EXIM certificate display — all standard.",
              example:
                'Exporters in SEEPZ, manufacturers in MIDC Andheri, Bhandup, Bhiwandi, and Thane targeting buyers in the US, EU, UAE, and Southeast Asia.',
            },
            {
              name: 'BFSI & Fintech',
              description:
                "BKC is India's financial nerve centre — home to the RBI, SEBI, every major private and foreign bank, and a growing fintech ecosystem. BFSI websites need to project compliance awareness, regulatory credentials, and technical authority. Lead-capture flows designed for longer B2B sales cycles, clear regulatory licence display, and schema markup for financial services.",
              example:
                'Fintech startups in Powai and Andheri, financial advisory firms, insurance tech companies, and professional services firms serving the BKC financial ecosystem.',
            },
            {
              name: 'D2C & Retail',
              description:
                "Mumbai is India's original D2C city — home to fashion brands, lifestyle companies, beauty startups, and specialty food businesses that sell direct to consumers. D2C websites need to convert mobile visitors in under 10 seconds. That means sub-1.5s load times, above-the-fold product display, Razorpay one-tap checkout, and Instagram integration. Mobile-first, every time.",
              example:
                'D2C fashion, lifestyle, and beauty brands in Bandra, Juhu, Andheri West, and Khar selling to consumers across India.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Mumbai's real estate market is one of the most competitive in Asia — Thane, Navi Mumbai, and BKC are seeing sustained project activity. Developers, brokers, and construction firms need websites with project gallery architecture, floor plan downloads, RERA details, and lead-capture forms that route enquiries to the right sales team. Local SEO targeting high-demand micro-markets is built in.",
              example:
                'Residential developers in Thane and Navi Mumbai, commercial real estate brokers in BKC, and construction firms operating across the MMR.',
            },
            {
              name: 'Healthcare & Pharma',
              description:
                "Mumbai houses India's largest concentration of pharmaceutical exporters, hospital groups, and healthcare technology companies. Pharma websites need compliance-aware copy, product documentation systems for API and bulk drug exports, and B2B lead flows designed for institutional procurement. Hospital and clinic websites need appointment booking integrations, doctor profile pages, and local SEO.",
              example:
                'Pharmaceutical exporters in Andheri and Malad, hospital groups, diagnostic chains, and healthcare SaaS companies.',
            },
            {
              name: 'Professional Services',
              description:
                "Mumbai's professional services market — CA firms, law firms, consulting practices, HR agencies, and marketing companies — is among the most competitive in India. For these businesses, the website is the first qualification filter: Does this firm look credible enough to call? We build authority-first sites with case study structures, credential display, and lead-capture flows that convert research into booked consultations.",
              example:
                'CA and CS firms, corporate law practices in Fort and Nariman Point, management consulting firms, and HR companies serving Mumbai\'s corporate ecosystem.',
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Mumbai Businesses"
            lead="Mumbai agency rates for comparable web projects run ₹1,50,000–₹5,00,000. FactoryJet Growth (₹50,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright. No retainer required. No proprietary platform. No surprise invoices."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹25,000',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for sole traders, service businesses, and small businesses in Mumbai who need a credible online presence quickly.',
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
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Mumbai SMBs scaling online who need the site to actively generate qualified enquiries.',
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
                  'Custom Next.js build with e-commerce, booking systems, AI integrations, or API connections. Best for established Mumbai businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'E-commerce (Razorpay, Shiprocket) or booking integrations',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Zoho, Tally, Salesforce)',
                  'Priority support + quarterly reviews',
                  'Dedicated engineering point of contact',
                ],
                cta: { label: 'Book a Discovery Call', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR inclusive of design, development, SEO setup, and GA4. Cloudflare Pages hosting is free for standard Next.js builds — no monthly hosting fee. Domain registration billed separately if required."
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
          headline="Common Questions from Mumbai Businesses"
          lead="The questions we answer on every Mumbai discovery call — answered here, without the runaround."
          categories={MUMBAI_FAQ_CATEGORIES}
          items={MUMBAI_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Mumbai Website?"
          sub="Mumbai's ₹21 lakh crore economy is home to India's most competitive businesses — and every one of them is competing for the same Google rankings, the same buyer first impression, and the same digital real estate. Every week without a high-performing website is ground you are giving to a competitor who showed up with a better one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
