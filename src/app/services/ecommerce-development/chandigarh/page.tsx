import type { Metadata } from 'next';
import Script from 'next/script';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceCityAlternatesIN } from '@/data/hreflangMap';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development in Chandigarh | | FactoryJet',
  description:
    'Shopify & WooCommerce stores for Chandigarh brands. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery guarantee.',
  keywords: [
    'ecommerce development company chandigarh',
    'ecommerce website development chandigarh',
    'shopify development chandigarh',
    'woocommerce development chandigarh',
    'online store development chandigarh',
    'custom ecommerce development chandigarh',
    'affordable ecommerce development chandigarh',
    'ecommerce website cost chandigarh',
    'd2c website chandigarh',
    'razorpay shopify chandigarh',
    'pharma ecommerce chandigarh',
    'agri ecommerce punjab',
    'fashion ecommerce chandigarh',
    'b2b ecommerce chandigarh',
    'auto parts ecommerce mohali',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Chandigarh | | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and custom ecommerce stores for Chandigarh businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-ecommerce.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Ecommerce Development Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Chandigarh | | FactoryJet',
    description:
      'Shopify, WooCommerce & custom ecommerce for Chandigarh brands. Razorpay + GST + Shiprocket.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
    languages: ecommerceCityAlternatesIN['chandigarh'],
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to launch a Chandigarh ecommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds take longer, usually 8 to 16 weeks depending on scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does ecommerce development cost in Chandigarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet ecommerce projects are fixed-price and scoped to your build. The main cost drivers are your platform (Shopify or WooCommerce vs a custom build), number of products, the payment and shipping integrations you need, and any custom features like subscriptions or B2B pricing. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts. The price is fixed and confirmed in writing — no hourly billing and no scope creep.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which ecommerce platform is right for my Chandigarh business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify is the best default for most Chandigarh D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration. Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces. FactoryJet makes this recommendation during discovery at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you set up Razorpay, UPI, and Cash on Delivery for Chandigarh stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if preferred. Cash on Delivery is configured with prepaid-to-COD ratios you control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Chandigarh ecommerce store rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs, GST price display, Core Web Vitals green on mobile (LCP under 2.5s, CLS below 0.1), and sitemap submission to Google Search Console. LocalBusiness schema with Chandigarh geo-coordinates is included for local search visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best ecommerce development company in Chandigarh?',
      acceptedAnswer: { '@type': 'Answer', text: 'For D2C brands and small businesses, FactoryJet makes a strong case: fixed written prices, senior engineers, and stores that launch in weeks. Any ecommerce website development company in Chandigarh — or any ecommerce solution company in Chandigarh — should pass three checks: who writes the code, is the price fixed, and do you own the store at the end. That is how to find the best ecommerce website development company in Chandigarh and the best ecommerce solution company in Chandigarh for your catalog.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire ecommerce developer in Chandigarh or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'One developer can build a basic store, but a real shop needs design, payments, shipping, and SEO together. A small senior team covers all of it at a fixed price. If you do hire ecommerce developer in Chandigarh directly, check store speed scores from their past work first.' },
    },
],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Chandigarh',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chandigarh',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Chandigarh',
    '@id': 'https://www.wikidata.org/wiki/Q43009',
  },
  description:
    'Custom ecommerce development for Chandigarh businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and custom stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet — Ecommerce Development Chandigarh',
  url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Chandigarh businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandigarh',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.7333,
    longitude: 76.7794,
  },
  areaServed: [
    'Sector 17', 'Sector 22', 'Sector 35', 'IT Park', 'Industrial Area Phase 1',
    'Mohali', 'Panchkula', 'Zirakpur',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const CHANDIGARH_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Platform Recommendation',
    description:
      'We map your products, target audience, logistics requirements, and revenue model. Platform recommendation (Shopify, WooCommerce, or custom) is made here — before we scope or price anything.',
  },
  {
    number: '02',
    title: 'Figma Design & Mockup Approval',
    description:
      'Custom Figma designs for your homepage, product pages, collection pages, and checkout. Mobile-first at 375px. India-specific UX — UPI placement, COD badge position, trust signals above the fold.',
  },
  {
    number: '03',
    title: 'Development & Payment Integration',
    description:
      'Platform setup, theme or custom development, Razorpay / PayU integration, UPI configuration, GST auto-invoicing, Shiprocket wiring, and product catalogue import.',
  },
  {
    number: '04',
    title: 'QA & Lighthouse Audit',
    description:
      'End-to-end testing of every payment method (UPI, cards, COD, wallets). Lighthouse 90+ on mobile before we ship. Core Web Vitals green — LCP under 2.5s, CLS below 0.1.',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'Zero-downtime DNS switch. Sitemap submitted to Google Search Console. Full codebase delivered to your GitHub. 60-minute Zoom walkthrough. 30-day post-launch support window.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const CHANDIGARH_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const CHANDIGARH_ECOM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How long does it take to launch a Chandigarh ecommerce store?',
    answer:
      'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds take longer, usually 8 to 16 weeks depending on scope.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Chandigarh?',
    answer:
      "FactoryJet ecommerce projects are fixed-price and scoped to your build. The main cost drivers are your platform (Shopify or WooCommerce vs a custom build), number of products, the payment and shipping integrations you need, and any custom features like subscriptions or B2B pricing. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts. The price is fixed and confirmed in writing — no hourly billing and no scope creep.",
  },
  {
    category: 'pricing',
    question: 'Do you offer payment plans for the development cost?',
    answer:
      'Yes. All plans can be split 50% upfront and 50% on launch day. Growth and Custom plans can be structured as 40-30-30 across the build. We accept NEFT, RTGS, UPI, and all major credit cards. No interest or fees are charged on installment plans — it is simply a split of the quoted fixed price.',
  },
  {
    category: 'pricing',
    question: 'What happens if my store is not ready in 7 days?',
    answer:
      'If we miss the 7-day deadline for reasons within our control, we refund 20% of the project value automatically — no questions asked. We have delivered on time for 97% of all builds. The remaining 3% delays are almost always due to client-side delays in providing product images, content, or payment gateway credentials — which we flag upfront in the onboarding checklist.',
  },

  /* ── Platform & Tech ── */
  {
    category: 'platform',
    question: 'Which ecommerce platform is right for my Chandigarh business?',
    answer:
      'Shopify is the best default for most Chandigarh D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration (recipes, guides, editorial content). Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces where Shopify and WooCommerce hit their ceiling. FactoryJet makes this recommendation during discovery at no charge.',
  },
  {
    category: 'platform',
    question: 'Do you set up Razorpay, UPI, and Cash on Delivery for all stores?',
    answer:
      'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI on major cards, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if you have an existing relationship. Cash on Delivery is configured with prepaid-to-COD ratios you control. Razorpay\'s fraud detection rules are configured at launch to keep COD abuse low.',
  },
  {
    category: 'platform',
    question: 'Can you connect my Chandigarh store to Amazon India and Flipkart?',
    answer:
      'Yes — this is included in the Growth plan and above. We use Cedcommerce or Unicommerce to sync your product catalogue, pricing, and inventory between your Shopify or WooCommerce store and your Amazon India and Flipkart seller accounts. Orders from all channels flow into one dashboard. When stock sells on Amazon, it is deducted from your store automatically — no overselling.',
  },
  {
    category: 'platform',
    question: 'Can you set up WhatsApp Commerce and automated order flows?',
    answer:
      'Yes. We integrate WhatsApp Business API via Interakt, Wati, or AiSensy to send order confirmations, shipping updates, and abandoned cart messages on WhatsApp — open rates are 85%+ versus email\'s 20%. We also build conversational product discovery chatbots where customers browse and order directly in WhatsApp, with Razorpay payment links sent in-chat. This is included in Growth and Custom plans.',
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Do your stores support GST invoicing and compliance?',
    answer:
      'Yes — GST compliance is built into every Indian ecommerce store we deliver. This includes auto-generated GST invoices at order placement, GSTIN capture at checkout for B2B buyers, HSN code mapping per product category, state-wise IGST/CGST/SGST rate configuration, and monthly GSTR-1 export compatibility. We integrate with Tally, Zoho Books, or custom accounting exports on request.',
  },
  {
    category: 'india',
    question: 'Which logistics partner should I use for a Chandigarh store?',
    answer:
      'Shiprocket is our default recommendation for most Chandigarh ecommerce stores — it gives you access to Delhivery, Bluedart, XpressBees, Ekart, and Shadowfax under one integration, with automated NDR workflows, returns management, and weight dispute resolution. Delhivery directly via API is better for high-volume brands (10,000+ shipments per month) needing custom SLAs. For hyperlocal same-day delivery in Chandigarh, Dunzo and Shadowfax are the right fit.',
  },
  {
    category: 'india',
    question: 'Can you add Hindi or Punjabi language support to my store?',
    answer:
      'Yes — multi-language support is available for all platforms. For Shopify we use the Translate & Adapt app or Langify for regional language storefronts. For WooCommerce we implement WPML or TranslatePress. For custom platforms we build the i18n layer natively. Language-switched URLs follow SEO-safe hreflang patterns. We have built stores in Hindi, Marathi, Tamil, Gujarati, and Bengali.',
  },
  {
    category: 'india',
    question: 'How do you handle cart abandonment for Indian shoppers?',
    answer:
      'India has a 78% cart abandonment rate — higher than global averages because COD hesitancy and payment UX friction are common. We build a 3-touch recovery sequence: 1) WhatsApp message within 30 minutes with a direct Razorpay payment link, 2) SMS at 2 hours with a small discount, 3) email at 24 hours with a trust signal (reviews, return policy). Stores with this sequence recover 18–22% of abandoned carts on average.',
  },

  /* ── Speed & SEO ── */
  {
    category: 'seo',
    question: 'Will my Chandigarh ecommerce store rank on Google?',
    answer:
      'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs to prevent duplicate content (a common Shopify and WooCommerce issue), GST price display, Core Web Vitals green on mobile, and sitemap submission to Google Search Console. LocalBusiness schema with Chandigarh geo-coordinates is included for local search visibility.',
  },
  {
    category: 'seo',
    question: 'Do you guarantee a Lighthouse score?',
    answer:
      'Yes — Lighthouse 90+ on Performance, Accessibility, Best Practices, and SEO is a contractual commitment on all builds. We achieve this by serving WebP images from CDN, deferring non-critical JavaScript, inlining critical CSS, using next-gen fonts with preload, and hosting on Cloudflare Pages with assets served from the nearest edge node to your customer. We QA the score before handover and fix any regression post-launch within 48 hours at no charge.',
  },
  {
    category: 'seo',
    question: 'What are Core Web Vitals and why do they matter for my store?',
    answer:
      'Core Web Vitals are Google\'s three page experience signals: LCP (Largest Contentful Paint — how fast the main content loads, target under 2.5s), INP (Interaction to Next Paint — how fast the page responds to clicks, target under 200ms), and CLS (Cumulative Layout Shift — whether elements jump around, target below 0.1). Google confirmed these are a ranking signal. More importantly, a 1-second delay in mobile load time reduces conversion rates by 20%. For a store doing ₹50 lakh per month, that is ₹10 lakh in lost revenue every second of slowness.',
  },
  {
    category: 'seo',
    question: 'Can you optimise an existing Chandigarh store that is already slow?',
    answer:
      'Yes — we offer a standalone Speed & SEO Audit + Fix package. We diagnose all Lighthouse failures, compress and convert your image library to WebP, remove render-blocking resources, fix CLS issues from unloaded fonts or images, and migrate your hosting to Cloudflare if needed. Most stores see a 30–60 point Lighthouse improvement within one sprint. We issue a written commitment: if we do not reach Lighthouse 90+ overall, we continue working at no additional charge.',
  },

  /* ── Process & Ownership ── */
  {
    category: 'trust',
    question: 'Do I own my store and all the code after launch?',
    answer:
      '100% yes. On launch day we transfer full ownership of the store account, the theme code, all integrations, and every custom component we built. You get GitHub repository access for all code assets and full admin credentials for every tool. We do not hold your store with ongoing fees. You can take the store to any developer after handover — we encourage it. What we hope is that you come back to us for the next phase.',
  },
  {
    category: 'trust',
    question: 'What does the handover process look like?',
    answer:
      'Day 7 is handover day. We schedule a 60–90 minute Zoom walkthrough covering: admin panel navigation, adding and editing products, processing orders, managing discounts, viewing analytics, and handling basic shipping issues. We deliver a handover document with all credentials, API keys, support contacts for each integration, and a first-30-days checklist. Post-handover, we are available on WhatsApp for 30 days for quick questions at no charge.',
  },
  {
    category: 'trust',
    question: 'Do you offer post-launch maintenance for Chandigarh stores?',
    answer:
      'Yes. Our Care Plan covers plugin and platform updates, a monthly Lighthouse audit and performance fixes, uptime monitoring, a few hours of content or feature changes each month, and priority support with a 4-hour response SLA. Our Growth Retainer adds monthly A/B tests, conversion optimization, and new campaign landing pages. Both are month-to-month with no lock-in, and we share the exact monthly price on your free call.',
  },
  {
    category: 'trust',
    question: 'Can I manage and update the store myself after launch?',
    answer:
      'Absolutely — self-management is the goal. For Shopify stores, adding products, updating prices, creating discount codes, and reviewing orders requires zero coding knowledge. WooCommerce is slightly more technical but we set up a simplified admin workflow for non-technical founders. We build a short video library covering the 10 most common tasks your team will perform, so you are not dependent on a developer for day-to-day operations.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Chandigarh?',
    answer:
      'For D2C brands and small businesses, FactoryJet makes a strong case: fixed written prices, senior engineers, and stores that launch in weeks. Any ecommerce website development company in Chandigarh — or any ecommerce solution company in Chandigarh — should pass three checks: who writes the code, is the price fixed, and do you own the store at the end. That is how to find the best ecommerce website development company in Chandigarh and the best ecommerce solution company in Chandigarh for your catalog.',
  },
  {
    category: 'pricing',
    question: 'Should I hire ecommerce developer in Chandigarh or use an agency?',
    answer:
      'One developer can build a basic store, but a real shop needs design, payments, shipping, and SEO together. A small senior team covers all of it at a fixed price. If you do hire ecommerce developer in Chandigarh directly, check store speed scores from their past work first.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/chandigarh#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/chandigarh',
};

export default function ChandigarhEcommercePage() {
  return (
    <>
      <Script
        id="chandigarh-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="chandigarh-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="chandigarh-ecom-local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Chandigarh', url: 'https://factoryjet.com/services/ecommerce-development/chandigarh' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_chandigarh_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · CHANDIGARH"
          headline="Chandigarh's Most Trusted Ecommerce Agency — Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Chandigarh brands — Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. 7-day delivery guarantee."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery guarantee',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ stores launched. 25 years of ecommerce engineering. One 7-day guarantee."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · CHANDIGARH"
          headline="The Right Platform for Every Chandigarh Business Model"
          lead="Chandigarh's ecommerce market spans premium D2C fashion brands in Sector 17, Baddi pharma manufacturers, Punjab agri D2C brands, and Mohali IT companies. Each needs a different platform strategy. FactoryJet recommends the right one — before we quote."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Shopify',
                  'WooCommerce',
                  'Next.js Commerce',
                  'Razorpay',
                  'UPI',
                  'COD',
                  'Shiprocket',
                  'WhatsApp AI',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                The average Indian ecommerce store converts at 0.8–1.2%. The top quartile converts at
                3–5%. The difference is not the product — it is the store. Slow load times on 4G
                networks, a UPI checkout that requires too many steps, product pages that bury the buy
                button below three paragraphs of description, and a mobile layout that was clearly
                designed on a desktop. These are engineering and design problems, not marketing
                problems.
              </p>

              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.9%', label: 'India avg. ecommerce conversion rate' },
                  { value: '65%', label: 'India ecommerce traffic via mobile' },
                  { value: '78%', label: 'cart abandonment rate in India' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A great ecommerce store is an engineering project measured in revenue — not a
                  design project measured in compliments.
                </p>
              </div>

              <p>
                FactoryJet designs every store around Indian consumer behaviour: where the UPI button
                goes, when the WhatsApp chat trigger fires, how the mobile product page stacks on a
                375px screen, what trust signals appear above the fold, and how EMI is surfaced at
                checkout. We have built 120+ Shopify stores and hundreds of WooCommerce and custom
                builds for Indian brands. That data informs every decision we make on the next one.
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
                  Platform guide — Chandigarh
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'Shopify', best: 'DTC brands, fashion, beauty, fast launch', starting: 'Fast launch' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce', starting: 'WordPress-first' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, custom checkout', starting: 'Scale & B2B' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX', starting: 'Max performance' },
                  { platform: 'Multi-Vendor Marketplace', best: 'Aggregator model, multi-seller', starting: 'Multi-seller' },
                  { platform: 'Quick Commerce App', best: 'Sub-30-min delivery, dark stores', starting: 'Dark-store ready' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.platform}
                      </p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#F05A28]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.starting}
                      </p>
                    </div>
                    <p
                      className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400"
                      style={{ letterSpacing: '0.04em' }}
                    >
                      {item.best}
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
                  We recommend the right platform. Not the most expensive one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Chandigarh Brands Choose FactoryJet Over Local Agencies"
          lead="Chandigarh ecommerce agencies often charge several times more for a comparable project and take 10 to 20 weeks to deliver, usually without telling you the price upfront. FactoryJet gives you a fixed quote before you speak to us, guarantees 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. The price is fixed and confirmed in writing, and the codebase is yours to keep."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay the balance.',
              body: "Chandigarh buyers have high expectations — a slow store on a low-trust template is immediately disqualifying in this market. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the guarantee written into the project agreement. We have delivered on time for 97% of all builds since 2005.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Chandigarh ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px — tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your store running.",
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 7 Days"
          lead="Platform recommendation before we scope. Design approval before we build. Full payment and logistics testing before we launch."
          stages={CHANDIGARH_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="CHANDIGARH ECOMMERCE MARKET"
          headline="Why Chandigarh Is North India's Most Affluent Ecommerce Market"
          leadParagraphs={[
            "Chandigarh — and the Tricity of Chandigarh, Mohali, and Panchkula — punches well above its population weight in ecommerce. As one of India's highest per-capita income regions, Chandigarh consumers are among India's most premium buyers — willing to pay more for quality, authenticity, and a seamless purchase experience. Combined with Punjab's dominant agricultural economy and Baddi's massive pharmaceutical manufacturing cluster, the Chandigarh market represents both a premium B2C opportunity and a significant B2B ecommerce play.",
            "Chandigarh's ecommerce market is driven by its affluence and its agricultural hinterland. Sector 17 fashion retailers are transitioning to D2C Shopify operations with premium product photography and Instagram Shop integration. Baddi pharma manufacturers are building B2B procurement portals with CDSCO compliance. Punjab agri brands are launching D2C Basmati rice and premium honey stores targeting urban India and the global Punjabi diaspora. And Mohali IT companies are building B2B SaaS and hardware bundle portals.",
            "Chandigarh buyers — educated, mobile-first, high disposable income — have high expectations for store quality, load speed, and checkout experience. A slow store on a low-trust template is immediately disqualifying in this market. FactoryJet's Lighthouse 90+ commitment, custom Figma design, and seamless Razorpay checkout are the baseline that Chandigarh buyers expect. We build to that standard on every project.",
          ]}
          stats={[
            {
              value: '₹1.5L+',
              label: "Average per-capita income in Chandigarh — one of India's most affluent markets",
              sourceUrl: 'https://www.ibef.org/states/chandigarh',
              sourceLabel: 'IBEF Chandigarh',
            },
            {
              value: '₹12.5L Cr',
              label: "India's projected ecommerce market by 2030, growing at 23% annually",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '500M+',
              label: 'UPI transactions per month in India — the payment rail your store must support',
              sourceUrl: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
              sourceLabel: 'NPCI UPI Statistics',
            },
          ]}
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="CHANDIGARH × ECOMMERCE"
          headline="Ecommerce Development for Chandigarh's Key Commerce Verticals"
          lead="From Sector 17 premium fashion retailers to Baddi pharma manufacturers to Punjab agri brands — Chandigarh's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Agriculture & Punjab Produce',
              description:
                "Punjab is India's breadbasket. D2C agricultural brands, organic farm produce, and B2B agri-commodity portals. Basmati rice, honey, organic grains, and premium agri-products with FSSAI compliance and export documentation.",
              example:
                'Premium basmati brands, honey D2C companies, organic farming produce labels.',
            },
            {
              name: 'Pharmaceuticals & Healthcare',
              description:
                "Chandigarh's Baddi pharmaceutical cluster is one of Asia's largest. B2B pharma procurement, OTC health D2C, and online pharmacy with CDSCO compliance.",
              example:
                'Pharma manufacturers, OTC health brands, B2B medical supply portals.',
            },
            {
              name: 'Auto Parts & Engineering',
              description:
                "Chandigarh and Mohali's industrial areas house significant auto component manufacturing. B2B auto parts portals with specification search, bulk order flows, and GST B2B invoicing.",
              example:
                'Auto component manufacturers, engineering goods exporters, industrial supply companies.',
            },
            {
              name: 'Fashion & Lifestyle',
              description:
                "Chandigarh's affluent consumer base — one of India's highest per-capita income cities — drives demand for premium fashion and lifestyle D2C. Instagram Shop integration, premium product photography, and high-AOV checkout optimisation.",
              example:
                'Premium lifestyle brands, sustainable fashion D2C, ethnic wear labels.',
            },
            {
              name: 'Food & Punjabi Products',
              description:
                "Punjab's food culture drives a growing D2C market for premium Punjabi products — ghee, pickles, artisanal honey, Phulkari crafts, and premium spices. FSSAI compliance, gifting SKUs, and subscription boxes.",
              example:
                'Punjabi food brands, artisanal dairy companies, premium spice D2C labels.',
            },
            {
              name: 'Real Estate & Interior',
              description:
                "Chandigarh's planned city structure and high per-capita income drive significant home furnishing and interior D2C demand. High-AOV home décor stores with AR preview, white-glove delivery, and B2B interior supply portals.",
              example:
                'Interior product brands, premium furniture companies, home décor D2C labels.',
            },
          ]}
        />

        {/* ── 9. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Chandigarh brands we have launched."
          cards={[
            {
              industry: 'Home Décor · Shopify',
              title: 'Belle Maison — Mumbai',
              description:
                'Belle Maison is a premium interior décor brand. FactoryJet built their Shopify store with a Figma-designed product showcase, Razorpay integration, WhatsApp inquiry flow, and Shiprocket connected on day one. Launched in 7 days.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Live in 7 days',
              stat2: 'Shopify · Razorpay',
            },
            {
              industry: 'Fashion · Shopify Plus',
              title: 'Impulse Branding — Mumbai',
              description:
                'Impulse Branding is an ethnic fashion label. FactoryJet built a Shopify Plus store with Myntra and Instagram Shop sync, AI size recommendations, COD configured with Razorpay fraud rules, and a WhatsApp abandoned cart recovery sequence.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Launched in 6 days',
              stat2: 'Shopify Plus · Omnichannel',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        <GetFreeQuoteCTA />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Chandigarh founders say after we build their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Chandigarh Founders Ask Before They Sign"
          lead="The questions we answer on every Chandigarh ecommerce discovery call — answered here, without the runaround."
          categories={CHANDIGARH_ECOM_FAQ_CATEGORIES}
          items={CHANDIGARH_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Chandigarh Ecommerce Store. Live in 7 Days."
          sub="Join 500+ Indian brands who chose FactoryJet. We will scope your build, recommend the right platform, and deliver a Razorpay-integrated, GST-compliant, Lighthouse 90+ store — in 7 business days. Free strategy call, no commitment required."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Razorpay + GST + Shiprocket. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
