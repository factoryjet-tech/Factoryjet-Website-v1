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
  title: 'Ecommerce Development in Ahmedabad | FactoryJet',
  description:
    'Shopify & WooCommerce stores for Ahmedabad brands. Razorpay, UPI & COD. GST-compliant. Shiprocket integrated. 7-day delivery.',
  keywords: [
    'ecommerce development company ahmedabad',
    'ecommerce website development ahmedabad',
    'shopify development ahmedabad',
    'woocommerce development ahmedabad',
    'online store development ahmedabad',
    'custom ecommerce development ahmedabad',
    'affordable ecommerce development ahmedabad',
    'ecommerce website cost ahmedabad',
    'd2c website ahmedabad',
    'razorpay shopify ahmedabad',
    'b2b ecommerce ahmedabad',
    'textile ecommerce ahmedabad',
    'diamond jewellery ecommerce ahmedabad',
    'ecommerce agency ahmedabad',
    'gujarat pharma ecommerce',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Ahmedabad | FactoryJet',
    description:
      'Shopify, WooCommerce, D2C, and custom ecommerce stores for Ahmedabad businesses. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
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
    title: 'Ecommerce Development Ahmedabad | FactoryJet',
    description:
      'Shopify, WooCommerce & custom ecommerce for Ahmedabad brands. Razorpay + GST + Shiprocket.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
    languages: ecommerceCityAlternatesIN['ahmedabad'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/ahmedabad#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Ahmedabad',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Ahmedabad',
    '@id': 'https://www.wikidata.org/wiki/Q1070', // Wikidata label: Ahmedabad (city in Gujarat, India)
  },
  description:
    'Custom ecommerce development for Ahmedabad businesses. Shopify, WooCommerce, D2C platforms, B2B portals, and custom stores. Razorpay & UPI integrated. GST-compliant. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Ahmedabad',
  url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Ahmedabad businesses. Shopify, WooCommerce, and custom stores. Razorpay + UPI + COD integrated. GST-compliant. 7-day delivery.',
  areaServed: [
    'SG Highway', 'Prahlad Nagar', 'CG Road', 'Satellite',
    'Navrangpura', 'Bopal', 'Maninagar', 'Vastrapur',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const AHMEDABAD_ECOM_STAGES: ServiceJourneyStage[] = [
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

const AHMEDABAD_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const AHMEDABAD_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: "How long does it take to launch an ecommerce store in Ahmedabad?",
    answer:
      "A standard Shopify or WooCommerce store for an Ahmedabad brand goes live in 7 days once we have your products, photos and payment gateway approval. Gateway approval is the step most often late, so start it the day you sign. Wholesale portals for GIDC manufacturers and textile traders take 5 to 8 weeks, because buyer-specific prices and GST invoices need testing. Custom marketplaces take 8 to 14 weeks.",
  },
  {
    category: 'pricing',
    question: "How much does ecommerce development cost in Ahmedabad?",
    answer:
      "It depends on what the store has to do. In Ahmedabad the things that move the price most are wholesale pricing for trade buyers, a Gujarati storefront, international shipping for NRI customers, and syncing stock with Amazon and Flipkart. A retail store with none of these costs far less than a B2B portal with all of them. FactoryJet quotes a fixed price in writing after a short scoping call.",
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
    question: "What if I need the store live before Navratri or Diwali?",
    answer:
      "Brief us at least 8 weeks before the festival. That leaves time to build, get payment approval, test courier pickups and run real orders before demand spikes. We have delivered on time on 97% of builds, and the late ones were almost always waiting on product photos or gateway approval. A festival launch is the one deadline we plan backwards from.",
  },
  {
    category: 'platform',
    question: "Which platform suits an Ahmedabad textile or saree brand?",
    answer:
      "Shopify, for most retail brands. It handles fabric, colour and size variants well, takes UPI and COD out of the box, and lets you share products to a WhatsApp catalogue. If you also sell wholesale to shops, we either add a trade price list for logged-in buyers or build a separate wholesale portal, depending on how different the two price lists are.",
  },
  {
    category: 'platform',
    question: "Can you build a wholesale ordering portal for my GIDC factory?",
    answer:
      "Yes. Trade buyers log in and see their own price list, minimum order quantities and credit terms. They can reorder past orders in two clicks or request a quote for a custom batch. We capture each buyer's GSTIN, raise GST invoices automatically and export orders to Tally or Zoho Books. Manufacturers in Vatva, Naroda and Odhav estates often start here instead of with a retail store.",
  },
  {
    category: 'platform',
    question: "Can diamond and jewellery traders sell online safely?",
    answer:
      "Yes, with two different setups. Retail jewellery needs high-trust product pages, BIS hallmark details including the HUID number on gold pieces, insured shipping and COD limits. B2B diamond trade needs a login-only catalogue, so prices and stock are visible to approved dealers only. We build both on Shopify or a custom platform, depending on how many stones and certificates you list.",
  },
  {
    category: 'platform',
    question: "Do you set up Razorpay, UPI and Cash on Delivery?",
    answer:
      "Yes, on every store. Razorpay is our default gateway and covers UPI, cards, net banking, wallets and EMI in one account. We connect PayU, CCAvenue or PhonePe if you already use one. Cash on Delivery is switched on with the limits you choose, such as a maximum order value or pincodes where COD is off.",
  },
  {
    category: 'platform',
    question: "Can you sync my Ahmedabad store with Amazon and Flipkart?",
    answer:
      "Yes. We connect your store to your Amazon and Flipkart seller accounts through a multi-channel tool such as Unicommerce or CedCommerce. Products, prices and stock stay in step, and orders from every channel land in one dashboard. When an item sells on Amazon, stock drops on your own store too, so you do not oversell during a sale.",
  },
  {
    category: 'india',
    question: "Do your stores handle GST invoicing?",
    answer:
      "Yes. Every store raises a GST invoice when an order is placed, with HSN codes per product and the right IGST, or CGST and SGST, split for the buyer's state. B2B buyers can enter a GSTIN at checkout. If your turnover puts you inside GST e-invoicing, we connect the store to your e-invoicing setup so B2B invoices carry an IRN. Orders export to Tally or Zoho Books.",
  },
  {
    category: 'india',
    question: "Can my store be in Gujarati?",
    answer:
      "Yes. Shopify's translation tools and WooCommerce plugins such as WPML can run a Gujarati version next to English, each on its own URL so Google can index both. Gujarati script needs a font that renders it cleanly on cheap Android phones, so we test the theme on real devices before we quote. Product names and descriptions should be written by a person, not machine-translated.",
  },
  {
    category: 'india',
    question: "How do I sell to NRI customers in the US and UK from Ahmedabad?",
    answer:
      "Shopify Markets shows prices in the buyer's own currency and handles international checkout. We connect a cross-border courier, such as Shiprocket X or DHL, and show duties and delivery times at checkout so nothing surprises the buyer. Kutch embroidery, Patola and bandhani sell well to the Gujarati diaspora, and those buyers expect clear photos of the weave and honest delivery dates.",
  },
  {
    category: 'india',
    question: "Which courier should an Ahmedabad store use?",
    answer:
      "Shiprocket is the default for most stores. One account gives you Delhivery, Blue Dart, Xpressbees, Ekart and others, with automatic courier choice, return handling and non-delivery follow-up. Brands shipping high volumes often move to a direct Delhivery contract later. For same-day delivery inside Ahmedabad, a hyperlocal partner such as Porter works for food, gifts and urgent B2B parts.",
  },
  {
    category: 'india',
    question: "How do I cut COD returns on an Ahmedabad store?",
    answer:
      "Three changes do most of the work. Ask for a small prepaid amount on COD orders, confirm each COD order by WhatsApp before it ships, and switch COD off for pincodes and order values where returns are high. We also show a clear returns policy at checkout, because unclear terms are a common reason buyers refuse a parcel at the door.",
  },
  {
    category: 'india',
    question: "Can pharma and food brands from Ahmedabad sell online?",
    answer:
      "Food brands can, and the FSSAI licence number must be shown on every product page, along with ingredients and shelf life. Pharma is different. We build B2B ordering portals for GIDC pharma makers that sell to licensed distributors and chemists, with each buyer's drug licence number captured at sign-up. Selling prescription medicines to consumers online needs legal advice first, before any build.",
  },
  {
    category: 'seo',
    question: "Will my store rank for Ahmedabad and Gujarat searches?",
    answer:
      "It can, if the basics are right from launch. We add product and breadcrumb schema, clean titles, canonical URLs and a sitemap submitted to Search Console. If you have a showroom on SG Highway or in Manek Chowk, we link the store to your Google Business Profile so you show on the map too. Gujarati pages give you a second set of searches most competitors ignore.",
  },
  {
    category: 'seo',
    question: "Do you test the store speed before handover?",
    answer:
      "Yes. Before handover we test the main pages against Google's Core Web Vitals: LCP under 2.5 seconds, INP under 200 milliseconds and CLS under 0.1, on a mobile connection. We share the Lighthouse report with you. Most of the work is in images, apps and theme code, so we keep apps to the ones your store actually uses.",
  },
  {
    category: 'seo',
    question: "Can you fix an Ahmedabad store that is already slow?",
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
    question: "Who is the best ecommerce development company in Ahmedabad?",
    answer:
      "For D2C brands, textile traders and GIDC manufacturers, FactoryJet makes a strong case: a fixed written price, senior engineers, a draft of your store before you sign, and you own everything at the end. Any ecommerce website development company in Ahmedabad, or ecommerce solution company in Ahmedabad, should pass three checks: who writes the code, is the price fixed, and do you own the store.",
  },
  {
    category: 'pricing',
    question: "Should I hire an ecommerce developer in Ahmedabad or use an agency?",
    answer:
      "One developer can build a simple store. A real shop also needs design, payments, couriers, GST and SEO working together, and one person rarely covers all five. A small senior team does, at a fixed price. If you hire an ecommerce developer in Ahmedabad directly, open two of their past stores on your phone and check how fast they load first.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AHMEDABAD_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/ahmedabad#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
};

export default function AhmedabadEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ahmedabad-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ahmedabad-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ahmedabad-ecom-local-schema"
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
          { name: 'Ahmedabad', url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Ahmedabad', url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_ahmedabad_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · AHMEDABAD"
          headline="Ahmedabad's Most Trusted Ecommerce Agency: Store Live in 7 Days"
          lead="FactoryJet builds Shopify, WooCommerce, and custom D2C stores for Ahmedabad brands: Razorpay and UPI integrated, GST-compliant, Shiprocket connected, and Lighthouse 90+ before we hand you the keys. 7-day delivery."
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
          eyebrow="ECOMMERCE DEVELOPMENT · AHMEDABAD"
          headline="The Right Platform for Every Ahmedabad Business Model"
          lead="Ahmedabad's ecommerce market spans D2C textile brands on SG Highway, diamond jewellers in Prahlad Nagar, pharma manufacturers in GIDC, and artisan craft brands from Kutch. Each needs a different platform strategy. FactoryJet recommends the right one before we quote."
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
                  Ahmedabad platform guide
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
          headline="Why Ahmedabad Brands Choose FactoryJet Over Local Agencies"
          lead="Ahmedabad ecommerce agencies often charge several times more for a comparable project and take 10 to 20 weeks to deliver, usually without telling you the price upfront. FactoryJet gives you a fixed quote before you speak to us, puts 7-day delivery in writing, and builds to Lighthouse 90+ on mobile. The price is fixed and confirmed in writing, and the codebase is yours to keep."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: "Ahmedabad's market moves fast. Waiting 16 weeks for an agency to deliver a store you briefed in April is not a plan; it is a liability. FactoryJet delivers Shopify and WooCommerce stores in 7 days, with the delivery date written into the project agreement. We have delivered on time for 97% of all builds.",
            },
            {
              icon: '📱',
              title: "India's ecommerce is 65% mobile. Most stores are not built for it.",
              body: 'Most Ahmedabad ecommerce stores are designed on a desktop and adapted down. The result: 0.4% mobile conversion rates on template stores versus 2.1% on properly designed custom builds. FactoryJet designs every store mobile-first at 375px: tap targets, product image sizing, checkout flow, and UPI placement all optimised for the phone your customer actually uses.',
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
          stages={AHMEDABAD_ECOM_STAGES}
          closingNote="5 STAGES · 7 DAYS · RAZORPAY + GST + SHIPROCKET · LIGHTHOUSE 90+ · ZERO-DOWNTIME LAUNCH"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AHMEDABAD ECOMMERCE MARKET"
          headline="Why Ahmedabad Is Gujarat's Ecommerce Engine"
          leadParagraphs={[
            "Ahmedabad's ecommerce market is anchored by the city's extraordinary manufacturing depth: textiles, diamonds, pharmaceuticals, food processing, and industrial chemicals. Gujarat's entrepreneurial culture, combined with the state's dominant position in India's export economy, creates a unique ecommerce market where wholesale-to-D2C transitions, B2B procurement portals, and international export stores all represent major opportunities.",
            "Ahmedabad's ecommerce transitions are accelerating. SG Highway textile traders are launching Shopify stores with NRI-targeted international shipping and COD-heavy domestic checkout. GIDC pharma manufacturers are building B2B procurement portals with CDSCO-compliant product pages. Prahlad Nagar food brands are building D2C subscription operations with FSSAI compliance. And Kutch artisan cooperatives are reaching global buyers through Shopify international with automatic currency conversion and GST export invoicing.",
            "Gujarat's entrepreneurial culture means Ahmedabad business owners are fast decision-makers who demand transparency in pricing and delivery timelines. FactoryJet's transparent pricing, fixed project scope, and 7-day delivery are precisely the signals that resonate with Ahmedabad founders who have dealt with agencies that charge discovery fees and deliver after 20 weeks.",
          ]}
          stats={[
            {
              value: '90%',
              label: "World's diamond polishing handled by Ahmedabad and Surat: a unique B2B ecommerce market",
              sourceUrl: 'https://www.ibef.org/states/gujarat',
              sourceLabel: 'IBEF Gujarat',
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
          eyebrow="AHMEDABAD × ECOMMERCE"
          headline="Ecommerce Development for Ahmedabad's Key Commerce Verticals"
          lead="From SG Highway textile traders to GIDC pharma manufacturers to Kutch artisan brands , and Ahmedabad's commerce ecosystem spans verticals with very different platform requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Textiles & Garments',
              description:
                "Ahmedabad is India's textile capital. Surat Road and Ring Road textile businesses are building D2C Shopify stores and B2B wholesale portals. WhatsApp catalogue commerce, COD flows, bulk order management.",
              example:
                'Garment manufacturers, fabric wholesalers going D2C, ethnic wear brands.',
            },
            {
              name: 'Diamonds & Gems',
              description:
                'Ahmedabad and Surat together handle 90% of the world\'s diamond polishing. Diamond jewellery ecommerce needs high-trust checkout, COD with insured shipping, and B2B diamond trading portals.',
              example:
                'Diamond jewellery brands, gem traders, B2B diamond polishing businesses.',
            },
            {
              name: 'Pharmaceuticals',
              description:
                "Ahmedabad's GIDC houses India's second-largest pharma manufacturing cluster. B2B pharma procurement, online pharmacy, and OTC health D2C brands.",
              example:
                'Pharma manufacturers, OTC health brands, B2B medical supplies.',
            },
            {
              name: 'Food Processing & FMCG',
              description:
                "Gujarat's agri-based food processing industry (spices, dairy, snacks, packaged foods) is one of India's largest. FSSAI compliance, subscription commerce, and export-ready B2B portals.",
              example:
                'Spice brands, dairy product companies, packaged snack D2C labels.',
            },
            {
              name: 'Handicrafts & Artisan Products',
              description:
                "Gujarat's rich craft tradition (Patola silk, Kutch embroidery, bandhani) is finding global buyers through ecommerce. Artisan product stores need international shipping, high-trust product photography, and NRI-targeted marketing.",
              example:
                'Patola silk brands, Kutch craft D2C labels, artisan jewellery companies.',
            },
            {
              name: 'Industrial & Chemical B2B',
              description:
                "GIDC's industrial estates house chemical, plastic, and engineering goods manufacturers building B2B procurement portals. GST B2B invoicing, bulk order flows, and buyer-specific catalogues.",
              example:
                'Chemical manufacturers, plastic component suppliers, industrial goods B2B portals.',
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
          headline="Everything Ahmedabad Founders Ask Before They Sign"
          lead="The questions we answer on every Ahmedabad ecommerce discovery call, answered here, without the runaround."
          categories={AHMEDABAD_ECOM_FAQ_CATEGORIES}
          items={AHMEDABAD_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Ahmedabad Ecommerce Store. Live in 7 Days."
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
