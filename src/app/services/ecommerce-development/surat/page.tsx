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
  title: 'Ecommerce Development in Surat | From ₹59,999 | FactoryJet',
  description:
    'Shopify & WooCommerce stores for Surat brands. From ₹59,999. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery guarantee.',
  keywords: [
    'ecommerce development company surat',
    'ecommerce website development surat',
    'shopify development surat',
    'woocommerce development surat',
    'online store development surat',
    'custom ecommerce development surat',
    'affordable ecommerce development surat',
    'ecommerce website cost surat',
    'd2c website surat',
    'razorpay shopify surat',
    'diamond ecommerce surat',
    'textile ecommerce surat',
    'jewellery ecommerce website surat',
    'b2b ecommerce surat',
    'fabric wholesale portal surat',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Surat | From ₹59,999 | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and custom ecommerce stores for Surat businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery. From ₹59,999.',
    url: 'https://factoryjet.com/services/ecommerce-development/surat',
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
    title: 'Ecommerce Development Surat | From ₹59,999 | FactoryJet',
    description:
      'Shopify, WooCommerce & custom ecommerce for Surat brands. Razorpay + GST + Shiprocket. From ₹59,999.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/surat',
    languages: ecommerceCityAlternatesIN['surat'],
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
      name: 'How long does it take to launch a Surat ecommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds (₹1,99,999+) take 8–16 weeks depending on scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does ecommerce development cost in Surat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's ecommerce development starts at ₹59,999 for a Shopify or WooCommerce store — custom-designed in Figma, Razorpay and UPI integrated, GST-compliant invoicing, Shiprocket shipping, and full product catalogue import. Growth stores with subscription logic, B2B pricing, or omnichannel integrations start at ₹99,999. Custom platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999. All prices are 50–60% lower than comparable Surat digital agencies.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which ecommerce platform is right for my Surat business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify is the best default for most Surat D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration. Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces. FactoryJet makes this recommendation during discovery at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you set up Razorpay, UPI, and Cash on Delivery for Surat stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if preferred. Cash on Delivery is configured with prepaid-to-COD ratios you control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Surat ecommerce store rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs, GST price display, Core Web Vitals green on mobile (LCP under 2.5s, CLS below 0.1), and sitemap submission to Google Search Console. LocalBusiness schema with Surat geo-coordinates is included for local search visibility.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Surat',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Surat',
    '@id': 'https://www.wikidata.org/wiki/Q170166',
  },
  description:
    'Custom ecommerce development for Surat businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and custom stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+. Starting at ₹59,999.',
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
  name: 'FactoryJet — Ecommerce Development Surat',
  url: 'https://factoryjet.com/services/ecommerce-development/surat',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Surat businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery. From ₹59,999.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.1702,
    longitude: 72.8311,
  },
  areaServed: [
    'Althan', 'Adajan', 'Vesu', 'Udhna', 'Varachha',
    'Ring Road', 'Katargam', 'Sachin GIDC',
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

const SURAT_ECOM_STAGES: ServiceJourneyStage[] = [
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

const SURAT_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const SURAT_ECOM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How long does it take to launch a Surat ecommerce store?',
    answer:
      'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds (₹1,99,999+) take 8–16 weeks depending on scope.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Surat?',
    answer:
      "FactoryJet's ecommerce development starts at ₹59,999 for a Shopify or WooCommerce store — custom-designed in Figma, Razorpay and UPI integrated, GST-compliant invoicing, Shiprocket shipping, and full product catalogue import. Growth stores with subscription logic, B2B pricing, or omnichannel integrations start at ₹99,999. Custom platforms, multi-vendor marketplaces, and quick-commerce apps start at ₹1,99,999. All prices are 50–60% lower than comparable Surat digital agencies.",
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
    question: 'Which ecommerce platform is right for my Surat business?',
    answer:
      'Shopify is the best default for most Surat D2C and B2C brands — fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration (recipes, guides, editorial content). Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces where Shopify and WooCommerce hit their ceiling. FactoryJet makes this recommendation during discovery at no charge.',
  },
  {
    category: 'platform',
    question: 'Do you set up Razorpay, UPI, and Cash on Delivery for all stores?',
    answer:
      'Yes — all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI on major cards, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if you have an existing relationship. Cash on Delivery is configured with prepaid-to-COD ratios you control. Razorpay\'s fraud detection rules are configured at launch to keep COD abuse low.',
  },
  {
    category: 'platform',
    question: 'Can you connect my Surat store to Amazon India and Flipkart?',
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
    question: 'Which logistics partner should I use for a Surat store?',
    answer:
      'Shiprocket is our default recommendation for most Surat ecommerce stores — it gives you access to Delhivery, Bluedart, XpressBees, Ekart, and Shadowfax under one integration, with automated NDR workflows, returns management, and weight dispute resolution. Delhivery directly via API is better for high-volume brands (10,000+ shipments per month) needing custom SLAs. For hyperlocal same-day delivery in Surat, Dunzo and Shadowfax are the right fit.',
  },
  {
    category: 'india',
    question: 'Can you add Hindi or Gujarati language support to my store?',
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
    question: 'Will my Surat ecommerce store rank on Google?',
    answer:
      'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs to prevent duplicate content (a common Shopify and WooCommerce issue), GST price display, Core Web Vitals green on mobile, and sitemap submission to Google Search Console. LocalBusiness schema with Surat geo-coordinates is included for local search visibility.',
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
    question: 'Can you optimise an existing Surat store that is already slow?',
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
    question: 'Do you offer post-launch maintenance for Surat stores?',
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/surat#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/surat',
};

export default function SuratEcommercePage() {
  return (
    <>
      <Script
        id="surat-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="surat-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="surat-ecom-local-schema"
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
          { name: 'Surat', url: 'https://factoryjet.com/services/ecommerce-development/surat' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="ECOMMERCE DEVELOPMENT · SURAT"
          headline="Surat's Most Trusted Ecommerce Agency — Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Surat brands — Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. From ₹59,999. 7-day delivery guarantee."
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
          eyebrow="ECOMMERCE DEVELOPMENT · SURAT"
          headline="The Right Platform for Every Surat Business Model"
          lead="Surat's ecommerce market spans D2C textile brands in Katargam, B2B diamond trading portals in Ring Road, fabric wholesalers in Varachha, and food manufacturers in Sachin GIDC. Each needs a different platform strategy. FactoryJet recommends the right one — before we quote."
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
                  Platform guide — Surat
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
          headline="Why Surat Brands Choose FactoryJet Over Local Agencies"
          lead="Surat ecommerce agencies typically charge ₹2,00,000–₹10,00,000 for a comparable project and take 10–20 weeks to deliver. FactoryJet publishes all three tiers before you speak to us, guarantees 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. At 50–60% below the Surat agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay the balance.',
              body: "Surat's business community moves at Gujarat speed — decisions are made fast and execution is expected to match. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the guarantee written into the project agreement. We have delivered on time for 97% of all builds since 2005.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Surat ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px — tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
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
          stages={SURAT_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="SURAT ECOMMERCE MARKET"
          headline="Why Surat Is Gujarat's Diamond of Ecommerce Opportunity"
          leadParagraphs={[
            "Surat is one of the world's fastest-growing cities and India's diamond city — handling 90% of global diamond polishing and supplying 40% of India's synthetic textile market. This manufacturing supremacy is creating one of India's most concentrated B2B ecommerce opportunities, with diamond traders, textile wholesalers, and fabric manufacturers all building digital-first procurement portals for the first time.",
            "Surat's ecommerce opportunity is defined by the B2B-to-B2C transition at scale. Ring Road fabric traders are building Shopify stores with international shipping and dollar-denominated pricing for export buyers. Katargam embroidery manufacturers are launching D2C bridal fabric stores with WhatsApp-native product catalogues. Diamond polishing businesses are creating private B2B portals with RTGS payment flows. And GIDC food manufacturers are building D2C subscription operations with FSSAI compliance and pan-India logistics.",
            "Surat's business community is characterised by Gujarat's entrepreneurial speed — decisions are made fast and execution is expected to match. FactoryJet's 7-day delivery guarantee, published pricing, and fixed-scope builds are the exact signals Surat founders respond to. We have built for the Surat textile and diamond ecosystem and understand the specific B2B and D2C requirements that each vertical demands.",
          ]}
          stats={[
            {
              value: '₹12.5L Cr',
              label: "India's projected ecommerce market by 2030, growing at 23% annually",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
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
        <IndustriesGrid
          eyebrow="SURAT × ECOMMERCE"
          headline="Ecommerce Development for Surat's Key Commerce Verticals"
          lead="From Ring Road fabric traders to Katargam embroidery manufacturers to GIDC food producers — Surat's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Diamond Polishing & Trading',
              description:
                "Surat polishes 90% of the world's diamonds. B2B diamond trading portals need private catalogues, RTGS payment flows, GST B2B invoicing, and international shipping with customs documentation.",
              example:
                'Diamond polishing businesses, B2B diamond traders, jewellery component exporters.',
            },
            {
              name: 'Synthetic Textiles & Fabric',
              description:
                "Surat is India's largest synthetic fabric producer, supplying 40% of India's textile market. B2B fabric wholesale portals with sample order flows, bulk pricing, and export documentation.",
              example:
                'Fabric manufacturers, textile wholesalers, embroidery and printing houses.',
            },
            {
              name: 'Embroidery & Zari',
              description:
                "Surat's Katargam and Ring Road areas produce India's largest share of embroidered fabric and zari work. D2C and B2B stores for embroidered sarees, dress materials, and bridal fabric.",
              example:
                'Embroidery manufacturers, zari work brands, bridal fabric wholesalers.',
            },
            {
              name: 'Garments & Readymade Apparel',
              description:
                "Surat's garment manufacturing cluster ships readymade apparel across India. D2C fashion stores with WhatsApp catalogue commerce, COD, and pan-India logistics.",
              example:
                'Garment manufacturers going D2C, readymade saree brands, wholesale-to-retail transitions.',
            },
            {
              name: 'Jewellery & Gold',
              description:
                "Surat's proximity to the diamond trade drives a large gold and diamond jewellery retail market. Hallmark compliance, COD with insured shipping, and high-trust checkout design.",
              example:
                'Gold jewellery retailers, diamond jewellery brands, B2B jewellery component traders.',
            },
            {
              name: 'Food Processing & Namkeen',
              description:
                "Gujarat's food processing industry — namkeen, farsan, sweets — is a major D2C and gifting opportunity. FSSAI compliance, subscription boxes, and gifting SKUs for festivals and corporate orders.",
              example:
                'Namkeen brands, Gujarati sweet companies, packaged farsan D2C labels.',
            },
          ]}
        />

        {/* ── 9. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Surat brands we have launched."
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
              industry: 'B2B Wholesale · WooCommerce',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a WooCommerce wholesale portal with volume pricing tiers, GST B2B invoicing, bulk order flows, and a D2C consumer-facing storefront — both running from one backend.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: 'WooCommerce · B2B',
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

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Ecommerce Plans for Every Surat Business Stage"
            lead="Surat agency rates for comparable ecommerce projects run ₹2,00,000–₹10,00,000. FactoryJet Growth (₹99,999) delivers a full-featured Shopify or WooCommerce store with subscriptions, B2B pricing, omnichannel integrations, Razorpay, GST invoicing, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter Store',
                priceRange: 'From ₹59,999',
                description:
                  'A professionally designed Shopify or WooCommerce store ready to sell on launch day. The right starting point for D2C brands and Surat retailers going online for the first time.',
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
                  'A full-featured store with subscription logic, B2B pricing, a product configurator, or multi-channel inventory sync — for Surat brands with more complex selling models.',
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
                  'Regional language support (Hindi, Gujarati + more)',
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
          headline="What Surat founders say after we build their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Surat Founders Ask Before They Sign"
          lead="The questions we answer on every Surat ecommerce discovery call — answered here, without the runaround."
          categories={SURAT_ECOM_FAQ_CATEGORIES}
          items={SURAT_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Surat Ecommerce Store. Live in 7 Days."
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
