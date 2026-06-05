import type { Metadata } from 'next';
import Script from 'next/script';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceCityAlternatesIN } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ecommerce Development in Hyderabad | From ₹59,999 | FactoryJet',
  description:
    'Shopify & WooCommerce stores for Hyderabad brands. From ₹59,999. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery guarantee.',
  keywords: [
    'ecommerce development company hyderabad',
    'ecommerce website development hyderabad',
    'shopify development hyderabad',
    'woocommerce development hyderabad',
    'online store development hyderabad',
    'custom ecommerce development hyderabad',
    'affordable ecommerce development hyderabad',
    'ecommerce website cost hyderabad',
    'd2c website hyderabad',
    'razorpay shopify hyderabad',
    'b2b ecommerce hyderabad',
    'pearl jewellery ecommerce hyderabad',
    'pharma ecommerce hyderabad',
    'ecommerce agency hyderabad',
    'hitec city ecommerce',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Hyderabad | From ₹59,999 | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and custom ecommerce stores for Hyderabad businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery. From ₹59,999.',
    url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
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
    title: 'Ecommerce Development Hyderabad | From ₹59,999 | FactoryJet',
    description:
      'Shopify, WooCommerce & custom ecommerce for Hyderabad brands. Razorpay + GST + Shiprocket. From ₹59,999.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
    languages: ecommerceCityAlternatesIN['hyderabad'],
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
      name: 'How long does it take to launch a Hyderabad ecommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds (₹1,99,999+) take 8–16 weeks depending on scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does ecommerce development cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's ecommerce development starts at ₹59,999 for a Shopify or WooCommerce store — custom-designed in Figma, Razorpay and UPI integrated, GST-compliant invoicing, Shiprocket shipping, and full product catalogue import. Growth stores with subscription logic, B2B pricing, or omnichannel integrations start at ₹99,999. Custom platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999. All prices are 50–60% lower than comparable Hyderabad digital agencies.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which ecommerce platform is right for my Hyderabad business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify is the best default for most Hyderabad D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration. Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces. FactoryJet makes this recommendation during discovery at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you set up Razorpay, UPI, and Cash on Delivery for Hyderabad stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if preferred. Cash on Delivery is configured with prepaid-to-COD ratios you control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Hyderabad ecommerce store rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs, GST price display, Core Web Vitals green on mobile (LCP under 2.5s, CLS below 0.1), and sitemap submission to Google Search Console. LocalBusiness schema with Hyderabad geo-coordinates is included for local search visibility.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Hyderabad',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
    '@id': 'https://www.wikidata.org/wiki/Q1361',
  },
  description:
    'Custom ecommerce development for Hyderabad businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and custom stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+. Starting at ₹59,999.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Store',
      price: '59999',
      priceCurrency: 'INR',
      description: 'Shopify or WooCommerce store with Razorpay, GST invoicing, Shiprocket, and up to 50 products.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Store',
      price: '99999',
      priceCurrency: 'INR',
      description: 'Full-featured store with subscriptions, B2B pricing, omnichannel integrations, and advanced WhatsApp automation.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Platform',
      price: '199999',
      priceCurrency: 'INR',
      description: 'Custom Next.js D2C platform, multi-vendor marketplace, or quick-commerce app.',
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet — Ecommerce Development Hyderabad',
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Hyderabad businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery. From ₹59,999.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.3850,
    longitude: 78.4867,
  },
  areaServed: [
    'HITEC City', 'Madhapur', 'Gachibowli', 'Banjara Hills',
    'Jubilee Hills', 'Secunderabad', 'Kukatpally', 'Ameerpet',
  ],
  priceRange: '₹₹',
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

const HYDERABAD_ECOM_STAGES: ServiceJourneyStage[] = [
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

const HYDERABAD_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const HYDERABAD_ECOM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How long does it take to launch a Hyderabad ecommerce store?',
    answer:
      'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds (₹1,99,999+) take 8–16 weeks depending on scope.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Hyderabad?',
    answer:
      "FactoryJet's ecommerce development starts at ₹59,999 for a Shopify or WooCommerce store — custom-designed in Figma, Razorpay and UPI integrated, GST-compliant invoicing, Shiprocket shipping, and full product catalogue import. Growth stores with subscription logic, B2B pricing, or omnichannel integrations start at ₹99,999. Custom platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999. All prices are 50–60% lower than comparable Hyderabad digital agencies.",
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
    question: 'Which ecommerce platform is right for my Hyderabad business?',
    answer:
      'Shopify is the best default for most Hyderabad D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration (recipes, guides, editorial content). Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces where Shopify and WooCommerce hit their ceiling. FactoryJet makes this recommendation during discovery at no charge.',
  },
  {
    category: 'platform',
    question: 'Do you set up Razorpay, UPI, and Cash on Delivery for all stores?',
    answer:
      'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI on major cards, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if you have an existing relationship. Cash on Delivery is configured with prepaid-to-COD ratios you control. Razorpay\'s fraud detection rules are configured at launch to keep COD abuse low.',
  },
  {
    category: 'platform',
    question: 'Can you connect my Hyderabad store to Amazon India and Flipkart?',
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
    question: 'Which logistics partner should I use for a Hyderabad store?',
    answer:
      'Shiprocket is our default recommendation for most Hyderabad ecommerce stores — it gives you access to Delhivery, Bluedart, XpressBees, Ekart, and Shadowfax under one integration, with automated NDR workflows, returns management, and weight dispute resolution. Delhivery directly via API is better for high-volume brands (10,000+ shipments per month) needing custom SLAs. For hyperlocal same-day delivery in Hyderabad, Dunzo and Shadowfax are the right fit.',
  },
  {
    category: 'india',
    question: 'Can you add Telugu or Hindi language support to my store?',
    answer:
      'Yes — multi-language support is available for all platforms. For Shopify we use the Translate & Adapt app or Langify for regional language storefronts. For WooCommerce we implement WPML or TranslatePress. For custom platforms we build the i18n layer natively. Language-switched URLs follow SEO-safe hreflang patterns. We have built stores in Hindi, Telugu, Tamil, Gujarati, and Bengali.',
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
    question: 'Will my Hyderabad ecommerce store rank on Google?',
    answer:
      'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs to prevent duplicate content (a common Shopify and WooCommerce issue), GST price display, Core Web Vitals green on mobile, and sitemap submission to Google Search Console. LocalBusiness schema with Hyderabad geo-coordinates is included for local search visibility.',
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
    question: 'Can you optimise an existing Hyderabad store that is already slow?',
    answer:
      'Yes — we offer a standalone Speed & SEO Audit + Fix package starting at ₹12,999. We diagnose all Lighthouse failures, compress and convert your image library to WebP, remove render-blocking resources, fix CLS issues from unloaded fonts or images, and migrate your hosting to Cloudflare if needed. Most stores see a 30–60 point Lighthouse improvement within one sprint. We issue a written commitment: if we do not reach Lighthouse 90+ overall, we continue working at no additional charge.',
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
    question: 'Do you offer post-launch maintenance for Hyderabad stores?',
    answer:
      'Yes. Our Care Plan (₹9,999/month) covers plugin and platform updates, monthly Lighthouse audit and performance fixes, uptime monitoring, 4 hours of content or feature changes per month, and priority support with a 4-hour response SLA. Our Growth Retainer (₹19,999/month) adds monthly A/B tests, conversion optimisation, and new campaign landing pages. Both are month-to-month with no lock-in.',
  },
  {
    category: 'trust',
    question: 'Can I manage and update the store myself after launch?',
    answer:
      'Absolutely — self-management is the goal. For Shopify stores, adding products, updating prices, creating discount codes, and reviewing orders requires zero coding knowledge. WooCommerce is slightly more technical but we set up a simplified admin workflow for non-technical founders. We build a short video library covering the 10 most common tasks your team will perform, so you are not dependent on a developer for day-to-day operations.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/hyderabad#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
};

export default function HyderabadEcommercePage() {
  return (
    <>
      <Script
        id="hyderabad-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="hyderabad-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="hyderabad-ecom-local-schema"
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
          { name: 'Hyderabad', url: 'https://factoryjet.com/services/ecommerce-development/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="ECOMMERCE DEVELOPMENT · HYDERABAD"
          headline="Hyderabad's Most Trusted Ecommerce Agency — Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Hyderabad brands — Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. From ₹59,999. 7-day delivery guarantee."
          primaryCta={{ label: 'Book a Free Store Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'From ₹59,999',
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
          eyebrow="ECOMMERCE DEVELOPMENT · HYDERABAD"
          headline="The Right Platform for Every Hyderabad Business Model"
          lead="Hyderabad's ecommerce market spans D2C tech brands in HITEC City, pearl jewellers in Laad Bazaar, pharma manufacturers in Genome Valley, and ethnic wear brands in Charminar. Each needs a different platform strategy. FactoryJet recommends the right one — before we quote."
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
                  Platform guide — Hyderabad
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'Shopify', best: 'DTC brands, fashion, beauty, fast launch', starting: '₹59,999' },
                  { platform: 'WooCommerce', best: 'WordPress-first, content-commerce', starting: '₹59,999' },
                  { platform: 'Shopify Plus', best: 'Scale, B2B wholesale, custom checkout', starting: '₹1,99,999' },
                  { platform: 'Headless Next.js', best: 'Performance-critical, custom UX', starting: '₹1,99,999' },
                  { platform: 'Multi-Vendor Marketplace', best: 'Aggregator model, multi-seller', starting: '₹5,00,000' },
                  { platform: 'Quick Commerce App', best: 'Sub-30-min delivery, dark stores', starting: '₹3,00,000' },
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
          headline="Why Hyderabad Brands Choose FactoryJet Over Local Agencies"
          lead="Hyderabad ecommerce agencies typically charge ₹2,00,000–₹10,00,000 for a comparable project and take 10–20 weeks to deliver — without publishing their pricing upfront. FactoryJet publishes all three tiers before you speak to us, guarantees 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. At 50–60% below the Hyderabad agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay the balance.',
              body: "Hyderabad's market moves fast. Waiting 16 weeks for an agency to deliver a store you briefed in April is not a plan — it is a liability. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the guarantee written into the project agreement. We have delivered on time for 97% of all builds since 2005.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Hyderabad ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px — tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: 'We publish all three tiers — ₹59,999, ₹99,999, and ₹1,99,999+ — before you speak to us. No discovery fees, no "it depends" quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your store running.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 7 Days"
          lead="Platform recommendation before we scope. Design approval before we build. Full payment and logistics testing before we launch."
          stages={HYDERABAD_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="HYDERABAD ECOMMERCE MARKET"
          headline="Why Hyderabad Is India's Rising Ecommerce Hub"
          leadParagraphs={[
            "Hyderabad has emerged as one of India's fastest-growing ecommerce markets, driven by the convergence of a 1-million-strong IT workforce in HITEC City, a deep wholesale base in Laad Bazaar and Charminar, and a rapidly expanding middle class in the outer ring road corridors. The city's ecommerce growth rate has outpaced Mumbai and Bangalore in the past three years, making it a priority market for any India-focused D2C brand.",
            "Hyderabad's ecommerce verticals are uniquely diverse. Pearl jewellery traders in the old city are launching Shopify stores with international shipping and video consultation flows for NRI buyers. Pharma manufacturers in Genome Valley are building B2B procurement portals with CDSCO-compliant product pages. HITEC City tech brands are running sophisticated D2C subscription operations. And Pochampally silk weavers are digitising centuries-old craft supply chains for the first time.",
            "The brands winning in Hyderabad's ecommerce market combine the city's deep manufacturing expertise with digital-native selling — fast stores, India-ready payment stacks, and localised trust signals. FactoryJet has built across every Hyderabad vertical and understands the specific requirements that Hyderabad buyers, both B2C and B2B, bring to the checkout experience.",
          ]}
          stats={[
            {
              value: '1M+',
              label: 'IT professionals in HITEC City — one of India\'s most digitally sophisticated consumer bases',
              sourceUrl: 'https://www.ibef.org/states/telangana',
              sourceLabel: 'IBEF Telangana',
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
          eyebrow="HYDERABAD × ECOMMERCE"
          headline="Ecommerce Development for Hyderabad's Key Commerce Verticals"
          lead="From Laad Bazaar pearl jewellers to HITEC City tech brands to Genome Valley pharma manufacturers — Hyderabad's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Pearls & Jewellery',
              description:
                'Hyderabad is the global centre of the pearl trade. Jewellery ecommerce needs hallmark display, COD with insured shipping, video consultation, and high-trust checkout.',
              example:
                'Pearl jewellery brands, Laad Bazaar jewellers, B2B gem and pearl traders targeting international buyers.',
            },
            {
              name: 'Pharmaceuticals & Biotech',
              description:
                "Hyderabad's Genome Valley is India's largest biotech and pharma cluster. Online pharmacy and B2B pharma procurement portals need prescription uploads, CDSCO compliance, and temperature-sensitive logistics.",
              example:
                'Pharma manufacturers, OTC health brands, biotech companies selling research supplies.',
            },
            {
              name: 'IT Products & Tech D2C',
              description:
                'HITEC City and Madhapur produce India\'s most technically sophisticated D2C brands and SaaS product companies. Subscription management, international billing, and tiered pricing.',
              example:
                'SaaS companies, tech hardware brands, IT product D2C labels.',
            },
            {
              name: 'Fashion & Ethnic Wear',
              description:
                "Hyderabad's Pochampally silk weaving cluster and the Charminar market are going digital. Ethnic wear stores need WhatsApp-native product catalogues, COD flows, and Myntra integration.",
              example:
                'Pochampally silk brands, ethnic wear D2C labels, bridal wear companies.',
            },
            {
              name: 'Food & Biryani Brands',
              description:
                "Hyderabad's iconic food culture drives a growing D2C packaged food market. FSSAI compliance, cold-chain logistics, subscription boxes, and gifting SKUs.",
              example:
                'Hyderabadi biryani brands, packaged spice companies, organic food D2C labels.',
            },
            {
              name: 'Real Estate & Construction Supplies B2B',
              description:
                "Hyderabad's rapid real estate growth creates a massive B2B market for construction materials and interior supplies. B2B portals with bulk pricing, GST invoicing, and contractor-specific catalogues.",
              example:
                'Building materials suppliers, interior product distributors, construction equipment B2B portals.',
            },
          ]}
        />

        {/* ── 9. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Hyderabad brands we have launched."
          cards={[
            {
              industry: 'Home Décor · Shopify',
              title: 'Belle Maison — Hyderabad',
              description:
                'Belle Maison is a premium interior décor brand. FactoryJet built their Shopify store with a Figma-designed product showcase, Razorpay integration, WhatsApp inquiry flow, and Shiprocket connected on day one. Launched in 7 days.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Live in 7 days',
              stat2: 'Shopify · Razorpay',
            },
            {
              industry: 'B2B Wholesale · WooCommerce',
              title: 'Bombay Petals — Hyderabad',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a WooCommerce wholesale portal with volume pricing tiers, GST B2B invoicing, bulk order flows, and a D2C consumer-facing storefront — both running from one backend.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: 'WooCommerce · B2B',
            },
            {
              industry: 'Fashion · Shopify Plus',
              title: 'Impulse Branding — Hyderabad',
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

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Ecommerce Plans for Every Hyderabad Business Stage"
            lead="Hyderabad agency rates for comparable ecommerce projects run ₹2,00,000–₹10,00,000. FactoryJet Growth (₹99,999) delivers a full-featured Shopify or WooCommerce store with subscriptions, B2B pricing, omnichannel integrations, Razorpay, GST invoicing, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter Store',
                priceRange: 'From ₹59,999',
                description:
                  'A professionally designed Shopify or WooCommerce store ready to sell on launch day. The right starting point for D2C brands and Hyderabad retailers going online for the first time.',
                features: [
                  'Platform of your choice: Shopify or WooCommerce',
                  'Custom Figma design — homepage, PDP, collections, cart',
                  'Razorpay / PayU: UPI, cards, net banking, wallets',
                  'GST-compliant auto-invoicing at checkout',
                  'Shiprocket integration with real-time shipping rates',
                  'Up to 50 products imported and configured',
                  'WhatsApp order notifications via Interakt or Wati',
                  'Technical SEO: schema markup, sitemaps, meta tags',
                  'Google Analytics 4 + Search Console setup',
                ],
                cta: { label: 'Book a Store Audit', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth Store',
                priceRange: 'From ₹99,999',
                description:
                  'A full-featured store with subscription logic, B2B pricing, a product configurator, or multi-channel inventory sync — for Hyderabad brands with more complex selling models.',
                features: [
                  'Everything in Starter Store, plus:',
                  'Subscription products (recurring orders, auto-renewal)',
                  'B2B wholesale portal with tiered dealer pricing',
                  'Product configurator or bundle builder',
                  'Advanced WhatsApp automation (abandoned cart, win-back)',
                  'Multi-channel inventory sync (Amazon India, Flipkart, or 3PL)',
                  'Reviews platform integration (Stamped, Okendo, or Judge.me)',
                  'Post-purchase upsell flow and loyalty points setup',
                  '30-day post-launch support window',
                ],
                cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom Platform',
                priceRange: 'From ₹1,99,999',
                description:
                  'A custom-built D2C platform, multi-vendor marketplace, or quick-commerce app — for businesses where Shopify and WooCommerce hit their ceiling.',
                features: [
                  'Custom Next.js / React Native frontend',
                  'Custom commerce backend or Shopify headless API',
                  'Sub-1-second page loads (streaming SSR + edge caching)',
                  'Multi-vendor marketplace with commission & payout logic',
                  'Quick-commerce: dark store management + route optimisation',
                  'ERP / Tally / Zoho Books integration',
                  'Regional language support (Telugu, Hindi + more)',
                  'Dedicated engineering point of contact throughout',
                  '90-day post-launch support and iteration',
                ],
                cta: { label: 'Schedule a Discovery Call', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR. Cloudflare Pages hosting is free for Next.js builds — no monthly hosting fee. Platform subscription fees (Shopify, WooCommerce plugins) billed separately. Domain registration included on request."
          />
        </div>

        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Hyderabad founders say after we build their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Hyderabad Founders Ask Before They Sign"
          lead="The questions we answer on every Hyderabad ecommerce discovery call — answered here, without the runaround."
          categories={HYDERABAD_ECOM_FAQ_CATEGORIES}
          items={HYDERABAD_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Hyderabad Ecommerce Store. Live in 7 Days."
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
