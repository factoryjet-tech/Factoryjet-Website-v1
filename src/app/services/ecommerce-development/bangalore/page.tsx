import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
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
  title: 'Ecommerce Development in Bangalore | FactoryJet',
  description:
    'Shopify & WooCommerce stores for Bangalore brands. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery guarantee.',
  keywords: [
    'ecommerce development company bangalore',
    'ecommerce website development bangalore',
    'shopify development bangalore',
    'woocommerce development bangalore',
    'online store development bangalore',
    'custom ecommerce development bangalore',
    'affordable ecommerce development bangalore',
    'ecommerce website cost bangalore',
    'd2c website bangalore',
    'razorpay shopify bangalore',
    'b2b ecommerce bangalore',
    'whatsapp commerce bangalore',
    'fashion ecommerce bangalore',
    'tech d2c bangalore',
    'ecommerce agency bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Bangalore | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and custom ecommerce stores for Bangalore businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
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
    title: 'Ecommerce Development Bangalore | FactoryJet',
    description:
      'Shopify, WooCommerce & custom ecommerce for Bangalore brands. Razorpay + GST + Shiprocket.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/bangalore',
    languages: ecommerceCityAlternatesIN['bangalore'],
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
   JSON-LD Schema (Service + LocalBusiness), faqSchema is declared after FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/bangalore#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Bangalore',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Bangalore',
    '@id': 'https://www.wikidata.org/wiki/Q1070',
  },
  description:
    'Custom ecommerce development for Bangalore businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and custom stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet Ecommerce Development Bangalore',
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Bangalore businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    'Whitefield', 'Koramangala', 'HSR Layout', 'Indiranagar',
    'Electronic City', 'Hebbal', 'Marathahalli', 'Jayanagar',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const BANGALORE_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Platform Recommendation',
    description:
      'We map your products, target audience, logistics requirements, and revenue model. Platform recommendation (Shopify, WooCommerce, or custom) is made here, before we scope or price anything.',
  },
  {
    number: '02',
    title: 'Figma Design & Mockup Approval',
    description:
      'Custom Figma designs for your homepage, product pages, collection pages, and checkout. Mobile-first at 375px. India-specific UX: UPI placement, COD badge position, trust signals above the fold.',
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
      'End-to-end testing of every payment method (UPI, cards, COD, wallets). Lighthouse 90+ on mobile before we ship. Core Web Vitals green: LCP under 2.5s, CLS below 0.1.',
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

const BANGALORE_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const BANGALORE_ECOM_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How long does it take to launch a Bangalore ecommerce store?',
    answer:
      'FactoryJet delivers standard Shopify and WooCommerce stores in 7 business days for Starter and Growth builds. Day 1 is a discovery call to finalise your catalogue, payment preferences, and logistics setup. Days 2–3 are Figma design and mockup approval. Days 3–5 are development and integration. Day 6 is QA and Lighthouse testing. Day 7 is launch. Custom platform and marketplace builds take longer, usually 8 to 16 weeks depending on scope.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Bangalore?',
    answer:
      "FactoryJet ecommerce projects are fixed-price and scoped to your build. The main cost drivers are your platform (Shopify or WooCommerce vs a custom build), number of products, the payment and shipping integrations you need, and any custom features like subscriptions or B2B pricing. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts. The price is fixed and confirmed in writing, with no hourly billing and no scope creep.",
  },
  {
    category: 'pricing',
    question: 'Do you offer payment plans for the development cost?',
    answer:
      'Yes. All plans can be split 50% upfront and 50% on launch day. Growth and Custom plans can be structured as 40-30-30 across the build. We accept NEFT, RTGS, UPI, and all major credit cards. No interest or fees are charged on installment plans; it is simply a split of the quoted fixed price.',
  },
  {
    category: 'pricing',
    question: 'What happens if my store is not ready in 7 days?',
    answer:
      'If we miss the 7-day deadline for reasons within our control, we refund 20% of the project value automatically, no questions asked. We have delivered on time for 97% of all builds. The remaining 3% delays are almost always due to client-side delays in providing product images, content, or payment gateway credentials, which we flag upfront in the onboarding checklist.',
  },

  /* ── Platform & Tech ── */
  {
    category: 'platform',
    question: 'Which ecommerce platform is right for my Bangalore business?',
    answer:
      'Shopify is the best default for most Bangalore D2C and B2C brands: fast to launch, easy to manage, and natively supports Razorpay, PayU, and UPI. WooCommerce is the right choice when you are already on WordPress or need deep content-commerce integration (recipes, guides, editorial content). Custom Next.js platforms make sense for high-volume D2C brands, B2B wholesale portals with complex pricing rules, or multi-vendor marketplaces where Shopify and WooCommerce hit their ceiling. FactoryJet makes this recommendation during discovery at no charge.',
  },
  {
    category: 'platform',
    question: 'Do you set up Razorpay, UPI, and Cash on Delivery for all stores?',
    answer:
      'Yes, all India payment methods are configured in every plan. Razorpay is our primary gateway and covers UPI, net banking, cards, wallets (Paytm, PhonePe, Mobikwik), EMI on major cards, and BNPL (LazyPay, Simpl). We also integrate PayU, CCAvenue, or PhonePe Business if you have an existing relationship. Cash on Delivery is configured with prepaid-to-COD ratios you control. Razorpay\'s fraud detection rules are configured at launch to keep COD abuse low.',
  },
  {
    category: 'platform',
    question: 'Can you connect my Bangalore store to Amazon India and Flipkart?',
    answer:
      'Yes, this is included in the Growth plan and above. We use Cedcommerce or Unicommerce to sync your product catalogue, pricing, and inventory between your Shopify or WooCommerce store and your Amazon India and Flipkart seller accounts. Orders from all channels flow into one dashboard. When stock sells on Amazon, it is deducted from your store automatically, preventing overselling.',
  },
  {
    category: 'platform',
    question: 'Can you set up WhatsApp Commerce and automated order flows?',
    answer:
      'Yes. We integrate WhatsApp Business API via Interakt, Wati, or AiSensy to send order confirmations, shipping updates, and abandoned cart messages on WhatsApp, where open rates are 85%+ versus email\'s 20%. We also build conversational product discovery chatbots where customers browse and order directly in WhatsApp, with Razorpay payment links sent in-chat. This is included in Growth and Custom plans.',
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Do your stores support GST invoicing and compliance?',
    answer:
      'Yes, GST compliance is built into every Indian ecommerce store we deliver. This includes auto-generated GST invoices at order placement, GSTIN capture at checkout for B2B buyers, HSN code mapping per product category, state-wise IGST/CGST/SGST rate configuration, and monthly GSTR-1 export compatibility. We integrate with Tally, Zoho Books, or custom accounting exports on request.',
  },
  {
    category: 'india',
    question: 'Which logistics partner should I use for a Bangalore store?',
    answer:
      'Shiprocket is our default recommendation for most Bangalore ecommerce stores. It gives you access to Delhivery, Bluedart, XpressBees, Ekart, and Shadowfax under one integration, with automated NDR workflows, returns management, and weight dispute resolution. Delhivery directly via API is better for high-volume brands (10,000+ shipments per month) needing custom SLAs. For hyperlocal same-day delivery in Bangalore, Dunzo and Shadowfax are the right fit.',
  },
  {
    category: 'india',
    question: 'Can you add Kannada or Hindi language support to my store?',
    answer:
      'Yes, multi-language support is available for all platforms. For Shopify we use the Translate & Adapt app or Langify for regional language storefronts. For WooCommerce we implement WPML or TranslatePress. For custom platforms we build the i18n layer natively. Language-switched URLs follow SEO-safe hreflang patterns. We have built stores in Hindi, Kannada, Tamil, Gujarati, and Bengali.',
  },
  {
    category: 'india',
    question: 'How do you handle cart abandonment for Indian shoppers?',
    answer:
      'India has a 78% cart abandonment rate, higher than global averages because COD hesitancy and payment UX friction are common. We build a 3-touch recovery sequence: 1) WhatsApp message within 30 minutes with a direct Razorpay payment link, 2) SMS at 2 hours with a small discount, 3) email at 24 hours with a trust signal (reviews, return policy). Stores with this sequence recover 18–22% of abandoned carts on average.',
  },

  /* ── Speed & SEO ── */
  {
    category: 'seo',
    question: 'Will my Bangalore ecommerce store rank on Google?',
    answer:
      'Every store we build includes technical SEO from day one: Product and BreadcrumbList schema for Google Shopping eligibility, optimised title and meta templates, canonical URLs to prevent duplicate content (a common Shopify and WooCommerce issue), GST price display, Core Web Vitals green on mobile, and sitemap submission to Google Search Console. LocalBusiness schema with Bangalore geo-coordinates is included for local search visibility.',
  },
  {
    category: 'seo',
    question: 'Do you guarantee a Lighthouse score?',
    answer:
      'Yes, Lighthouse 90+ on Performance, Accessibility, Best Practices, and SEO is a contractual commitment on all builds. We achieve this by serving WebP images from CDN, deferring non-critical JavaScript, inlining critical CSS, using next-gen fonts with preload, and hosting on Cloudflare Pages with assets served from the nearest edge node to your customer. We QA the score before handover and fix any regression post-launch within 48 hours at no charge.',
  },
  {
    category: 'seo',
    question: 'What are Core Web Vitals and why do they matter for my store?',
    answer:
      'Core Web Vitals are Google\'s three page experience signals: LCP (Largest Contentful Paint, how fast the main content loads, target under 2.5s), INP (Interaction to Next Paint, how fast the page responds to clicks, target under 200ms), and CLS (Cumulative Layout Shift, whether elements jump around, target below 0.1). Google confirmed these are a ranking signal. More importantly, a 1-second delay in mobile load time reduces conversion rates by 20%. For a high-revenue store, that adds up to significant lost revenue every second of slowness.',
  },
  {
    category: 'seo',
    question: 'Can you optimise an existing Bangalore store that is already slow?',
    answer:
      'Yes, we offer a standalone Speed & SEO Audit + Fix package. We diagnose all Lighthouse failures, compress and convert your image library to WebP, remove render-blocking resources, fix CLS issues from unloaded fonts or images, and migrate your hosting to Cloudflare if needed. Most stores see a 30–60 point Lighthouse improvement within one sprint. We issue a written commitment: if we do not reach Lighthouse 90+ overall, we continue working at no additional charge.',
  },

  /* ── Process & Ownership ── */
  {
    category: 'trust',
    question: 'Do I own my store and all the code after launch?',
    answer:
      '100% yes. On launch day we transfer full ownership of the store account, the theme code, all integrations, and every custom component we built. You get GitHub repository access for all code assets and full admin credentials for every tool. We do not hold your store with ongoing fees. You can take the store to any developer after handover; we encourage it. What we hope is that you come back to us for the next phase.',
  },
  {
    category: 'trust',
    question: 'What does the handover process look like?',
    answer:
      'Day 7 is handover day. We schedule a 60–90 minute Zoom walkthrough covering: admin panel navigation, adding and editing products, processing orders, managing discounts, viewing analytics, and handling basic shipping issues. We deliver a handover document with all credentials, API keys, support contacts for each integration, and a first-30-days checklist. Post-handover, we are available on WhatsApp for 30 days for quick questions at no charge.',
  },
  {
    category: 'trust',
    question: 'Do you offer post-launch maintenance for Bangalore stores?',
    answer:
      'Yes. Our Care Plan covers plugin and platform updates, a monthly Lighthouse audit and performance fixes, uptime monitoring, a few hours of content or feature changes each month, and priority support with a 4-hour response SLA. Our Growth Retainer adds monthly A/B tests, conversion optimization, and new campaign landing pages. Both are month-to-month with no lock-in, and we share the exact monthly price on your free call.',
  },
  {
    category: 'trust',
    question: 'Can I manage and update the store myself after launch?',
    answer:
      'Absolutely, self-management is the goal. For Shopify stores, adding products, updating prices, creating discount codes, and reviewing orders requires zero coding knowledge. WooCommerce is slightly more technical but we set up a simplified admin workflow for non-technical founders. We build a short video library covering the 10 most common tasks your team will perform, so you are not dependent on a developer for day-to-day operations.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Bangalore?',
    answer:
      'For D2C brands and small businesses, FactoryJet makes a strong case: fixed written prices, senior engineers, and stores that launch in weeks. Any ecommerce website development company in Bangalore, or any ecommerce solution company in Bangalore, should pass three checks: who writes the code, is the price fixed, and do you own the store at the end. That is how to find the best ecommerce website development company in Bangalore and the best ecommerce solution company in Bangalore for your catalog.',
  },
  {
    category: 'pricing',
    question: 'Should I hire ecommerce developer in Bangalore or use an agency?',
    answer:
      'One developer can build a basic store, but a real shop needs design, payments, shipping, and SEO together. A small senior team covers all of it at a fixed price. If you do hire ecommerce developer in Bangalore directly, check store speed scores from their past work first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BANGALORE_ECOM_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/bangalore#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/bangalore',
};

export default function BangaloreEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="bangalore-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="bangalore-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="bangalore-ecom-local-schema"
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
          { name: 'Bangalore', url: 'https://factoryjet.com/services/ecommerce-development/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Bangalore', url: 'https://factoryjet.com/services/ecommerce-development/bangalore' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_bangalore_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · BANGALORE"
          headline="Bangalore's Most Trusted Ecommerce Agency: Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Bangalore brands: Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. 7-day delivery guarantee."
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
          headline="500+ stores launched. 12 years of ecommerce engineering. One 7-day guarantee."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · BANGALORE"
          headline="The Right Platform for Every Bangalore Business Model"
          lead="Bangalore's ecommerce market spans D2C tech brands in Whitefield, B2B manufacturers in Electronic City, fashion labels in Koramangala, and health brands in Indiranagar. Each needs a different platform strategy. FactoryJet recommends the right one before we quote."
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
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                The average Indian ecommerce store converts at 0.8–1.2%. The top quartile converts at
                3–5%. The difference is not the product; it is the store. Slow load times on 4G
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
                  A great ecommerce store is an engineering project measured in revenue, not a
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
                  Bangalore platform guide
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
                        className="fj-display flex-shrink-0 font-bold text-[#B23E13]"
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
          headline="Why Bangalore Brands Choose FactoryJet Over Local Agencies"
          lead="Bangalore ecommerce agencies often charge several times more for a comparable project and take 10 to 20 weeks to deliver, usually without telling you the price upfront. FactoryJet gives you a fixed quote before you speak to us, guarantees 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. The price is fixed and confirmed in writing, and the codebase is yours to keep."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay the balance.',
              body: "Bangalore's market moves fast. Waiting 16 weeks for an agency to deliver a store you briefed in April is not a plan; it is a liability. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the guarantee written into the project agreement. We have delivered on time for 97% of all builds.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Bangalore ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px: tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your store running.",
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Platform Decision to Live Store in 7 Days"
          lead="Platform recommendation before we scope. Design approval before we build. Full payment and logistics testing before we launch."
          stages={BANGALORE_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BANGALORE ECOMMERCE MARKET"
          headline="Why Bangalore Is India's Most Tech-Forward Ecommerce Market"
          leadParagraphs={[
            "Bangalore drives more technology-native D2C ecommerce than any other Indian city. The city's 13,000+ startups, 500+ multinational tech companies, and 1.5 million tech workers create the most demanding and digitally sophisticated consumer base in India, one that expects sub-2-second load times, seamless UPI checkout, and post-purchase WhatsApp updates as a baseline, not a differentiator.",
            "Bangalore's ecommerce verticals reflect the city's diversity. Koramangala and HSR Layout D2C brands are running sophisticated Shopify Plus operations with international shipping and multi-currency pricing. Electronic City manufacturers are building B2B procurement portals with tiered dealer pricing and GST B2B invoicing. Health and wellness brands in Indiranagar are scaling subscription commerce with AI-driven personalisation and cold-chain logistics. And fashion brands from UB City and Sadashivanagar are targeting premium buyers across India with mobile-first Shopify stores and Instagram Shop integrations.",
            "The brands winning in Bangalore's ecommerce market share one trait: they treat their store as an engineering project, not a design project. Fast load times on Bangalore's 5G-forward mobile users, frictionless UPI and card checkout, and a mobile product page built for a 375px screen. These are the decisions that separate high-performing stores from the rest. FactoryJet has built for Bangalore's most demanding verticals and applies that experience to every new build.",
          ]}
          stats={[
            {
              value: '13,000+',
              label: 'Active startups in Bangalore: India\'s most digitally sophisticated consumer base',
              sourceUrl: 'https://www.ibef.org/states/karnataka',
              sourceLabel: 'IBEF Karnataka',
            },
            {
              value: '23%',
              label: "India's projected ecommerce market growth rate, year over year through 2030",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '500M+',
              label: 'UPI transactions per month in India: the payment rail your store must support',
              sourceUrl: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
              sourceLabel: 'NPCI UPI Statistics',
            },
          ]}
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="BANGALORE × ECOMMERCE"
          headline="Ecommerce Development for Bangalore's Key Commerce Verticals"
          lead="From Whitefield tech D2C brands to Koramangala fashion labels to Electronic City B2B manufacturers , and Bangalore's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Tech D2C & SaaS Products',
              description:
                "Bangalore's startup ecosystem produces India's most sophisticated D2C brands: premium electronics, IoT devices, software tools, and subscription SaaS products. These stores need tiered pricing, licence key delivery, subscription management, and integration with Stripe/Razorpay for international billing.",
              example:
                'D2C electronics brands in Whitefield, SaaS product companies selling physical merchandise, IoT device manufacturers.',
            },
            {
              name: 'Fashion & Apparel',
              description:
                'Koramangala and Indiranagar house Bangalore\'s premium independent fashion scene. D2C fashion needs AI size guides, try-at-home flows, Instagram Shop and Myntra integration, and WhatsApp-native lookbooks.',
              example:
                'Premium lifestyle brands in Indiranagar, ethnic wear D2C brands, sportswear startups.',
            },
            {
              name: 'Electronics & Components',
              description:
                'SP Road Bangalore and Electronic City are supply hubs for consumer electronics and components. Electronics ecommerce needs EMI at product page level, warranty registration, and complex specification filtering for technical buyers.',
              example:
                'Electronics retailers, component suppliers for hardware startups, IT peripherals distributors.',
            },
            {
              name: 'Health, Wellness & Nutrition',
              description:
                "Bangalore's fitness-conscious tech population drives India's largest D2C health market. Health stores need subscription replenishment, FSSAI-compliant product pages, cold-chain logistics integration, and personalised bundle builders.",
              example:
                'Supplement brands, ayurvedic D2C companies, organic food brands targeting Bangalore\'s premium segment.',
            },
            {
              name: 'Home & Interior',
              description:
                'Indiranagar and Koramangala premium interior market drives high-AOV home décor ecommerce. These stores need AR product preview, room visualiser integrations, and white-glove delivery scheduling.',
              example:
                'Premium home décor brands, furniture D2C companies, artisan lifestyle brands.',
            },
            {
              name: 'B2B Manufacturing & Industrial',
              description:
                'Electronic City and Peenya Industrial Area house thousands of B2B manufacturers going digital. B2B portals need tiered dealer pricing, GST B2B invoicing, bulk order flows, and buyer-specific catalogues.',
              example:
                'Industrial component manufacturers, MSME exporters, B2B chemical and raw material suppliers.',
            },
          ]}
        />

        {/* ── 9. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Brands we have launched."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison · Mumbai',
              description:
                'Belle Maison is a Mumbai wholesale distributor of artificial plants, flowers, flower runners, home décor, and LED lighting. FactoryJet built their B2B quote-to-cash store on Commerceflo, with trade pricing tiers, quote-to-order workflows, and account-based ordering.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Live in 7 days',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'Print Branding · Web',
              title: 'Impulse Branding · Mumbai',
              description:
                'Impulse Branding is a Mumbai print branding and general contracting company. FactoryJet built impulsebranding.in and is now building their next-generation site.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Launched in 6 days',
              stat2: 'Web · SEO',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        <GetFreeQuoteCTA />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything Bangalore Founders Ask Before They Sign"
          lead="The questions we answer on every Bangalore ecommerce discovery call, answered here, without the runaround."
          categories={BANGALORE_ECOM_FAQ_CATEGORIES}
          items={BANGALORE_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Bangalore Ecommerce Store. Live in 7 Days."
          sub="Join 500+ brands across India, the US, the UK and the UAE who chose FactoryJet. We will scope your build, recommend the right platform, and deliver a Razorpay-integrated, GST-compliant, Lighthouse 90+ store in 7 business days. Free strategy call, no commitment required."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Razorpay + GST + Shiprocket. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
