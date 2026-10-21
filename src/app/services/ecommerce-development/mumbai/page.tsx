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
  title: 'Ecommerce Development in Mumbai | FactoryJet',
  description:
    'Shopify, WooCommerce & AI-native stores for Mumbai brands. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery.',
  keywords: [
    'ecommerce development company mumbai',
    'ecommerce website development mumbai',
    'shopify development mumbai',
    'woocommerce development mumbai',
    'online store development mumbai',
    'custom ecommerce development mumbai',
    'affordable ecommerce development mumbai',
    'ecommerce website cost mumbai',
    'd2c website mumbai',
    'razorpay shopify mumbai',
    'ai ecommerce development mumbai',
    'whatsapp commerce mumbai',
    'fashion ecommerce mumbai',
    'jewellery ecommerce website mumbai',
    'b2b ecommerce mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Mumbai | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and AI-native ecommerce stores for Mumbai businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/mumbai',
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
    title: 'Ecommerce Development Mumbai | FactoryJet',
    description:
      'Shopify, WooCommerce & AI ecommerce for Mumbai brands. Razorpay + GST + Shiprocket.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/mumbai',
    languages: ecommerceCityAlternatesIN['mumbai'],
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
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/mumbai#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/mumbai',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Mumbai',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
    '@id': 'https://www.wikidata.org/wiki/Q1156', // Wikidata label: Mumbai (capital of Maharashtra, India)
  },
  description:
    'Custom ecommerce development for Mumbai businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and AI-native stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Mumbai',
  url: 'https://factoryjet.com/services/ecommerce-development/mumbai',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Mumbai businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
  areaServed: [
    'Andheri', 'Bandra', 'BKC', 'Lower Parel', 'Navi Mumbai',
    'Thane', 'Powai', 'Malad', 'Goregaon', 'Kurla',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const MUMBAI_ECOM_STAGES: ServiceJourneyStage[] = [
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

const MUMBAI_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const MUMBAI_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: "How long does it take to launch an ecommerce store in Mumbai?",
    answer:
      "A standard Shopify or WooCommerce store for a Mumbai brand goes live in 7 days once we have your products, photos and payment gateway approval. Fashion labels with hundreds of size and colour variants need a few extra days for product data. Omnichannel builds that share stock with your retail outlets take 5 to 8 weeks. Custom platforms and marketplaces take 8 to 14 weeks.",
  },
  {
    category: 'pricing',
    question: "How much does ecommerce development cost in Mumbai?",
    answer:
      "It depends on what the store has to do. In Mumbai the biggest price drivers are large fashion catalogues, one stock count shared between your website and your outlets, integration with a Bhiwandi warehouse or 3PL, and selling abroad. A small catalogue with one warehouse costs far less than an omnichannel brand. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'pricing',
    question: "How do I pay for an ecommerce build?",
    answer:
      "We split the build into phases. Each phase is scoped, priced and signed on its own, so you never pay for work that has not been agreed. The price is fixed in writing and does not move with hours. You can pay by NEFT, RTGS or UPI.",
  },
  {
    category: 'pricing',
    question: "Can I see my store before I sign a contract?",
    answer:
      "Yes. Before a contract, we build a draft of your store on your own products and show it to you working. You judge the design, the product pages and the checkout on real items, not a sample theme. If it is not right, you have spent nothing.",
  },
  {
    category: 'pricing',
    question: "When should a Mumbai brand plan its launch?",
    answer:
      "Plan backwards from your biggest sales window. For most Mumbai brands that is the run-up to Diwali, so brief us 8 weeks before. Avoid launching a new courier setup in the middle of the monsoon, when deliveries across the city slow down. We have delivered on time on 97% of builds, and late ones were almost always waiting on photos or gateway approval.",
  },
  {
    category: 'platform',
    question: "Which platform suits a Mumbai fashion label?",
    answer:
      "Shopify, for most D2C fashion brands from Bandra to Lower Parel. It handles size and colour variants, size charts and exchange flows well, and syncs products to Instagram and Facebook shops. We build an exchange-first returns flow, because fashion buyers swap sizes far more often than they want refunds, and every exchange you keep is revenue you do not lose.",
  },
  {
    category: 'platform',
    question: "Can my website and my retail outlets share one stock count?",
    answer:
      "Yes. With Shopify POS in your outlets, or a sync to the billing software you already use, the website and every store draw from one inventory. A customer can buy online and pick up in store, or return an online order at an outlet. This matters for Mumbai brands with stores on Linking Road or in malls, where an oversold size costs a sale and a customer.",
  },
  {
    category: 'platform',
    question: "Can Zaveri Bazaar jewellers sell online?",
    answer:
      "Yes. Retail jewellery stores need product pages with BIS hallmark details and the HUID number on gold pieces, prices that update with the daily gold rate, video consultation booking for high-value pieces, and insured shipping. Dealers selling to other jewellers need a login-only wholesale catalogue, so trade prices stay private. We build both on Shopify or a custom platform.",
  },
  {
    category: 'platform',
    question: "Can you connect my store to a Bhiwandi warehouse or 3PL?",
    answer:
      "Yes. Most Mumbai brands keep stock in Bhiwandi, so the store has to pass orders straight to the warehouse and get stock and tracking back. We connect to the warehouse system by API where it has one, or by scheduled file exchange where it does not. Orders route automatically, and the store never shows stock the warehouse does not have.",
  },
  {
    category: 'platform',
    question: "Do you set up Razorpay, UPI and Cash on Delivery?",
    answer:
      "Yes, on every store. Razorpay is our default gateway and covers UPI, cards, net banking, wallets and EMI in one account. We connect PayU, CCAvenue or PhonePe if you already use one. Cash on Delivery is switched on with the limits you choose, such as a maximum order value or pincodes where COD is off.",
  },
  {
    category: 'platform',
    question: "Can you sync my Mumbai store with Amazon, Flipkart, Myntra and Ajio?",
    answer:
      "Yes. A multi-channel tool such as Unicommerce connects your store to the marketplaces you sell on, including Myntra and Ajio for fashion. Products, prices and stock stay in step, and orders from every channel land in one dashboard. That stops the classic oversell: the last piece in a size selling on two channels within minutes during a sale.",
  },
  {
    category: 'india',
    question: "Do your stores handle GST invoicing?",
    answer:
      "Yes. Every store raises a GST invoice when an order is placed, with HSN codes per product and the right IGST, or CGST and SGST, split for the buyer's state. B2B buyers can enter a GSTIN at checkout. If your turnover puts you inside GST e-invoicing, we connect the store to your e-invoicing setup so B2B invoices carry an IRN. Orders export to Tally or Zoho Books.",
  },
  {
    category: 'india',
    question: "Can my store be in Marathi or Hindi?",
    answer:
      "Yes. Shopify's translation tools and WooCommerce plugins such as WPML can run Marathi and Hindi versions next to English, each on its own URL so Google can index all of them. We test Devanagari rendering on low-cost Android phones before launch. Product copy should be written or checked by a person, because machine translation gets fabric and fit terms wrong.",
  },
  {
    category: 'india',
    question: "How do Mumbai exporters sell to buyers abroad?",
    answer:
      "Shopify Markets shows prices in each buyer's currency and handles international checkout. We connect a cross-border courier, such as Shiprocket X or DHL, and show duties and delivery times before payment. Jewellery and fashion exporters often run two storefronts: retail for overseas consumers and a login-only wholesale catalogue for overseas stores, each with its own prices.",
  },
  {
    category: 'india',
    question: "Which courier should a Mumbai store use?",
    answer:
      "Shiprocket is the default for most stores. One account gives you Delhivery, Blue Dart, Xpressbees, Ekart and others, with automatic courier choice and return handling. Brands shipping from a Bhiwandi warehouse at volume often sign direct contracts later. For same-day delivery inside Mumbai, a hyperlocal partner works for food and gifts. During the monsoon, we show buyers longer delivery estimates.",
  },
  {
    category: 'india',
    question: "How do I cut COD returns on a Mumbai store?",
    answer:
      "Three changes do most of the work. Ask for a small prepaid amount on COD orders, confirm each COD order by WhatsApp before it ships, and switch COD off for pincodes and order values where returns are high. We also show a clear returns policy at checkout, because unclear terms are a common reason buyers refuse a parcel at the door.",
  },
  {
    category: 'india',
    question: "Can Mumbai food and FMCG brands sell online?",
    answer:
      "Yes. Food brands must show the FSSAI licence number on every product page, along with ingredients and shelf life. FMCG brands that sell through distributors often need two things: a retail store for consumers and a reorder portal where retailers and distributors log in, see their own prices and place repeat orders without phone calls.",
  },
  {
    category: 'seo',
    question: "Will my store rank for Mumbai searches?",
    answer:
      "It can, if the basics are right from launch. We add product and breadcrumb schema, clean titles, canonical URLs and a sitemap submitted to Search Console. If you have outlets in Andheri, Thane or Navi Mumbai, a store locator with one page per outlet, linked to each Google Business Profile, helps you show on the map in each area.",
  },
  {
    category: 'seo',
    question: "Do you test the store speed before handover?",
    answer:
      "Yes. Before handover we test the main pages against Google's Core Web Vitals: LCP under 2.5 seconds, INP under 200 milliseconds and CLS under 0.1, on a mobile connection. We share the Lighthouse report with you. Most of the work is in images, apps and theme code, so we keep apps to the ones your store actually uses.",
  },
  {
    category: 'seo',
    question: "Can you fix a Mumbai store that is already slow?",
    answer:
      "Yes. We start with an audit of the slowest pages: image sizes, apps loading scripts on every page, theme code and third-party chat or review widgets. You get a written list of fixes in order of impact, with a fixed price for doing them. Often the biggest gain comes from removing apps nobody uses any more.",
  },
  {
    category: 'trust',
    question: "Do I own the store and all the code?",
    answer:
      "Yes, from day one. The store account, domain, payment gateway and courier accounts sit in your business name, and you get the code repository and every admin login. Hosting and app bills can run in your own accounts at cost, with no markup from us. You can move to another developer whenever you like.",
  },
  {
    category: 'trust',
    question: "What support do I get after launch?",
    answer:
      "Defects in what we built are fixed inside the build price for a cover period agreed before work starts. After that, support is optional. Each change is quoted and approved by you before we do it, and there is no monthly minimum. If you want us to keep running updates and checks, we quote that as a fixed price too.",
  },
  {
    category: 'pricing',
    question: "Who is the best ecommerce development company in Mumbai?",
    answer:
      "For D2C fashion, jewellery and FMCG brands, FactoryJet makes a strong case: a fixed written price, senior engineers, a draft of your store before you sign, and you own everything at the end. Any ecommerce website development company in Mumbai, or ecommerce solution company in Mumbai, should pass three checks: who writes the code, is the price fixed, and do you own the store.",
  },
  {
    category: 'pricing',
    question: "Should I hire an ecommerce developer in Mumbai or use an agency?",
    answer:
      "One developer can build a simple store. A real shop also needs design, payments, couriers, GST and SEO working together, and one person rarely covers all five. A small senior team does, at a fixed price. If you hire an ecommerce developer in Mumbai directly, open two of their past stores on your phone and check how fast they load first.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MUMBAI_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/mumbai#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/mumbai',
};

export default function MumbaiEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="mumbai-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="mumbai-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="mumbai-ecom-local-schema"
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
          { name: 'Mumbai', url: 'https://factoryjet.com/services/ecommerce-development/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Mumbai', url: 'https://factoryjet.com/services/ecommerce-development/mumbai' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_mumbai_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · MUMBAI"
          headline="Mumbai's Most Trusted Ecommerce Agency: Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Mumbai brands: Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. 7-day delivery."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ stores launched. 12 years of ecommerce engineering. 7-day delivery."
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and 7-day delivery."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · MUMBAI"
          headline="The Right Platform for Every Mumbai Business Model"
          lead="Mumbai's ecommerce market spans D2C fashion brands in Bandra, B2B exporters in SEEPZ, FMCG distributors in Bhiwandi, and jewellery houses in Zaveri Bazaar. Each needs a different platform strategy. FactoryJet recommends the right one before we quote."
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
                  Mumbai platform guide
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
          headline="Why Mumbai Brands Choose FactoryJet Over Local Agencies"
          lead="Mumbai ecommerce agencies often charge several times more for a comparable project and take 10 to 20 weeks to deliver, usually without telling you the price upfront. FactoryJet gives you a fixed quote before you speak to us, puts 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. The price is fixed and confirmed in writing, and the codebase is yours to keep."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: "Mumbai's market moves fast. Waiting 16 weeks for an agency to deliver a store you briefed in April is not a plan; it is a liability. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the delivery date written into the project agreement. We have delivered on time for 97% of all builds.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Mumbai ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px: tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
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
          stages={MUMBAI_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="MUMBAI ECOMMERCE MARKET"
          headline="Why Mumbai Is India's Most Competitive Ecommerce Market"
          leadParagraphs={[
            "Mumbai drives more ecommerce transactions than any other Indian city. The Bandra-Kurla Complex houses the Indian headquarters of every global logistics, payment, and retail technology company. Andheri East and Goregaon are home to India's largest garment and lifestyle brand operations. Dharavi, often called the world's largest informal manufacturing cluster, is undergoing rapid digital commerce adoption, with thousands of leather goods, textile, and pottery manufacturers launching online stores for the first time.",
            "Mumbai's ecommerce verticals are as diverse as the city itself. Zaveri Bazaar jewellers are building direct-to-consumer Shopify stores with COD and Razorpay Turbo checkout. Fashion brands from Linking Road and Bandra are running omnichannel operations across their own store, Instagram Shop, and Myntra simultaneously. FMCG distributors in Bhiwandi are building B2B portals with tiered dealer pricing and GST-split invoicing. And D2C supplement and beauty brands in Malad and Goregaon are scaling subscription commerce to eight-figure annual run rates.",
            "The brands winning in Mumbai's ecommerce market are not the ones with the biggest marketing budgets; they are the ones with the fastest stores, the cleanest checkout experience, and the most India-ready payment stack. FactoryJet has built for all of these verticals and knows exactly what each one needs before the first discovery call.",
          ]}
          stats={[
            {
              value: '23%',
              label: "India's projected ecommerce market growth rate, year over year through 2030",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '3.5L+',
              label: 'Registered businesses in Mumbai: India\'s densest commercial ecosystem',
              sourceUrl: 'https://www.mca.gov.in/',
              sourceLabel: 'Ministry of Corporate Affairs',
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
          eyebrow="MUMBAI × ECOMMERCE"
          headline="Ecommerce Development for Mumbai's Key Commerce Verticals"
          lead="From Zaveri Bazaar jewellers to Bandra fashion labels to Bhiwandi FMCG distributors , and Mumbai's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Fashion & Apparel',
              description:
                "Mumbai is India's fashion capital, home to Linking Road, Hill Road, and the largest garment export cluster in Asia at SEEPZ. D2C fashion brands need Shopify stores with AI size recommendations, try-before-you-buy flows, WhatsApp-native lookbooks, and Myntra + Instagram Shop integration. B2B exporters need order management portals with buyer-specific pricing and digital tech-pack uploads.",
              example:
                'D2C fashion brands in Bandra and Andheri, ethnic wear labels, garment exporters in SEEPZ targeting US, EU, and Middle East buyers.',
            },
            {
              name: 'Jewellery & Luxury',
              description:
                "Zaveri Bazaar is India's largest jewellery market and is rapidly going digital. Jewellery ecommerce requires hallmark compliance display, video consultation booking, COD with insured shipping options, and high-trust checkout design. B2B gold and diamond dealers need private catalogues with RTGS payment flows and GST B2B invoicing.",
              example:
                'Jewellery retailers in Zaveri Bazaar and Dhantoli, custom jewellery brands targeting NRI buyers, B2B diamond and gemstone traders.',
            },
            {
              name: 'FMCG & Grocery',
              description:
                "Bhiwandi and Navi Mumbai house thousands of FMCG distributors and manufacturers scaling online. FMCG ecommerce needs FSSAI-compliant labelling, subscription replenishment flows, hyperlocal delivery routing, and retail distributor portals with territory-based pricing.",
              example:
                'FMCG brands in Bhiwandi and Turbhe, direct-to-consumer grocery and health food brands, subscription box companies.',
            },
            {
              name: 'Pharmaceuticals & Health',
              description:
                "Mumbai houses India's largest pharma export cluster in Andheri and Malad. Online pharmacy stores require prescription upload flows, CDSCO-compliant product pages, temperature-sensitive logistics integration, and B2B procurement portals for hospital and clinic buyers.",
              example:
                'Pharmaceutical exporters in MIDC Andheri, OTC health brands, ayurvedic and wellness D2C brands, B2B pharma distributors.',
            },
            {
              name: 'Electronics & Tech',
              description:
                "Lamington Road and SP Road are India's original electronics retail corridors now going digital. Electronics ecommerce requires EMI checkout at the product page level, warranty registration flows, service centre integration, and complex specification filtering for technical buyers.",
              example:
                'Electronics retailers in Lamington Road and SP Road, component suppliers, consumer electronics D2C brands, IT hardware distributors.',
            },
            {
              name: 'Home, Décor & Lifestyle',
              description:
                "Mumbai's premium interior market (Pali Hill, Powai, and Worli) is driving demand for high-AOV home décor ecommerce. These stores need AR product preview, room visualiser integrations, white-glove delivery options, and a product discovery experience designed for considered, high-value purchases.",
              example:
                'Home décor brands, furniture companies, art and gifting stores, premium lifestyle brands targeting Mumbai\'s upper-middle and luxury segments.',
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
              imageSrc: '/images/work/impulse-branding-desktop.webp',
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
          headline="Everything Mumbai Founders Ask Before They Sign"
          lead="The questions we answer on every Mumbai ecommerce discovery call, answered here, without the runaround."
          categories={MUMBAI_ECOM_FAQ_CATEGORIES}
          items={MUMBAI_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Mumbai Ecommerce Store. Live in 7 Days."
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
