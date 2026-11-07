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
    'Ecommerce development in Ahmedabad for textile and denim brands, GIDC manufacturers and Kutch craft sellers. Shopify, WooCommerce, UPI, GST. 7-day delivery.',
  keywords: [
    'ecommerce development company ahmedabad',
    'ecommerce website development ahmedabad',
    'shopify development ahmedabad',
    'woocommerce development ahmedabad',
    'online store development ahmedabad',
    'custom ecommerce development ahmedabad',
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
      'Ahmedabad ecommerce: Shopify stores for textile and craft brands, wholesale portals for GIDC factories in Vatva, Naroda and Odhav, NRI checkout. 7-day delivery.',
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
      'Ahmedabad ecommerce: textile, craft and GIDC wholesale stores with Gujarati, UPI and GST.',
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
const PAGE_MODIFIED = '2026-11-07';
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
    'Ecommerce development for Ahmedabad businesses: Shopify and WooCommerce stores for textile, denim and Kutch craft brands, wholesale ordering portals for GIDC manufacturers, NRI checkout, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Ahmedabad',
  url: 'https://factoryjet.com/services/ecommerce-development/ahmedabad',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Ahmedabad and Gandhinagar businesses, from SG Highway brands to GIDC estates. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
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
    title: 'Retail, Wholesale or Both',
    description:
      'We go through how you sell today, from counter and dealers to exports, and decide what the first phase covers. A GIDC unit may start with a dealer portal. A craft label may start with an NRI-ready store.',
  },
  {
    number: '02',
    title: 'Design With Your Catalogue',
    description:
      'Screens for home, collection, product and checkout or reorder, designed with your real products and price lists, phone first. You approve fabric details, Gujarati labels and trust signals.',
  },
  {
    number: '03',
    title: 'Build and Accounting Links',
    description:
      'Store build, Razorpay with UPI, cards, wallets and COD, GST invoices with HSN codes, Tally or Zoho Books export, courier setup, and buyer logins with account-wise prices for wholesale.',
  },
  {
    number: '04',
    title: 'Testing Orders and Invoices',
    description:
      'We place retail and wholesale test orders, check every invoice and its GST split, test courier labels and run Lighthouse on mobile against a 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Training',
    description:
      'Domain switch with no downtime, sitemap submitted, code and every login handed over, and your team trained. Defects in our work are fixed free for the cover period agreed before we began.',
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
          headline="Ecommerce Development in Ahmedabad: Store Live in 7 Days"
          lead="FactoryJet builds Shopify and WooCommerce stores for Ahmedabad textile, denim and Kutch craft brands, and wholesale portals for GIDC manufacturers in Vatva, Naroda and Odhav. Gujarati storefronts, UPI and COD at checkout, NRI shipping, Lighthouse 90+. 7-day delivery."
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
          description="Retail stores and B2B portals for businesses in India, the US, the UK and the UAE. Ahmedabad owners get a fixed price per phase, every line of code in their name, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · AHMEDABAD"
          headline="The Platform Behind an Ahmedabad Store"
          lead="A Relief Road fabric trader, a Naroda chemicals unit selling to distributors and a bandhani label shipping to New Jersey need three different builds. We study your catalogue, buyers and price lists, then recommend a platform with a fixed price."
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
                Ahmedabad owners count every rupee and expect the store to pay its way. That means a store that turns visitors into orders on a phone, and a portal that turns phone orders into typed-in, invoiced orders without staff time. The two goals pull in different directions, so we decide early which one comes first for your business.
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
                  An Ahmedabad store is judged on orders and margins, never on how pretty it looks.
                </p>
              </div>

              <p>
                For retail we build fast product pages with fabric, colour and size detail, UPI first at checkout and COD with limits. For wholesale we build buyer logins, price lists per account, minimum order quantities and GST invoices that flow into Tally. Many Ahmedabad businesses need both, sharing one stock count.
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
                  We choose for your margins, not for the costliest platform.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Ahmedabad Owners Choose FactoryJet"
          lead="Ahmedabad founders ask for the price on the first call and expect it to hold. We give a fixed price for each phase in writing, put 7-day delivery for standard stores into the agreement, and show a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'A standard Shopify or WooCommerce store for an Ahmedabad business is live in 7 days once products, photos and gateway approval arrive. The date goes into the agreement, and 97% of our builds have shipped on time.',
            },
            {
              icon: '📱',
              title: 'Retail and wholesale on one phone.',
              body: 'Your retail buyer and your dealer both order from a phone. We design at 375px first: product pages that load fast on 4G, and a dealer reorder screen that takes two taps.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is priced in writing before work starts, and the number does not change with hours. After launch, support is optional and every change is quoted for your approval.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How an Ahmedabad Store Gets Built"
          lead="We settle retail, wholesale or both first, design on your products, and test every payment, invoice and courier before launch."
          stages={AHMEDABAD_ECOM_STAGES}
          closingNote="5 STAGES · RETAIL + WHOLESALE · UPI + GST + TALLY · LIGHTHOUSE 90+ · CODE IN YOUR NAME"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="AHMEDABAD ECOMMERCE MARKET"
          headline="How Ahmedabad Business Is Moving Online"
          leadParagraphs={[
            "Ahmedabad built its name on textiles, and the trade is still everywhere: fabric markets around Relief Road and Kalupur, garment makers, and large denim and processing mills on the city's edge. Next to them, the GIDC estates of Vatva, Naroda and Odhav hold chemical, plastics, engineering and pharma manufacturers that sell mostly to distributors and other factories.",
            'Most of this trade still runs on phone calls, WhatsApp and paper. The step many Ahmedabad businesses are taking now is a portal where trade buyers log in, see their own prices and minimum quantities, reorder past orders and receive GST invoices without anyone typing them up. A retail store often follows, aimed at buyers in India and abroad.',
            "Gujarat's crafts and its diaspora shape the retail side. Kutch embroidery, bandhani, Patola and block-printed fabrics sell to Gujarati families in the US, UK, Canada and Africa, with peaks before Navratri, Diwali and the wedding season. Uttarayan brings its own rush for kites and festive food in January. We plan stores around those dates, in Gujarati where buyers want it.",
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
          headline="Ahmedabad Sectors We Build For"
          lead="From Kalupur fabric traders to Naroda chemical units and Kutch craft labels, these six sectors bring most of the Ahmedabad work we scope."
          sectors={[
            {
              name: 'Textiles, Denim & Garments',
              description:
                'Fabric traders, denim mills and garment makers need wholesale catalogues with MOQ and price slabs, plus retail stores with fabric, colour and size detail.',
              example:
                'Fabric wholesalers, denim and shirting mills, kurta and ethnic wear makers.',
            },
            {
              name: 'Diamonds & Jewellery',
              description:
                'Jewellers and diamond traders need certificate display, HUID on gold, price breakups, insured shipping and login-only catalogues for trade buyers.',
              example:
                'Diamond traders, gold jewellers, silver and imitation jewellery wholesalers.',
            },
            {
              name: 'Pharma & Healthcare',
              description:
                'GIDC pharma makers sell to distributors and chemists. Portals capture drug licence numbers, show batch and expiry details and raise GST invoices automatically.',
              example:
                'Pharma formulators, API makers selling B2B, surgical and diagnostic suppliers.',
            },
            {
              name: 'Food, Snacks & Spices',
              description:
                'Gujarati snacks, spices and sweets ship across India and abroad. Stores need FSSAI details, shelf-life notes, festival gift boxes and export rules for food.',
              example:
                'Farsan and namkeen makers, spice brands, khakhra and sweet shops.',
            },
            {
              name: 'Kutch Crafts & Bandhani',
              description:
                'Hand embroidery, bandhani and Patola sell to the diaspora and gift buyers. Stores need maker stories, close-ups, NRI checkout and careful shipping.',
              example:
                'Kutch embroidery collectives, bandhani studios, Patola and craft sellers.',
            },
            {
              name: 'Chemicals, Plastics & Engineering',
              description:
                'GIDC manufacturers need RFQ forms, technical data sheets, buyer-specific catalogues, bulk orders and GST B2B invoices that export to Tally.',
              example:
                'Chemical and dye makers, plastic moulders, pumps and engineering goods suppliers.',
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
          headline="What founders say after their store goes live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Ahmedabad Founders Ask Before They Sign"
          lead="The questions Ahmedabad traders, manufacturers and craft brands raise on a first call, answered with straight numbers where we have them."
          categories={AHMEDABAD_ECOM_FAQ_CATEGORIES}
          items={AHMEDABAD_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Ahmedabad Store, Live in 7 Days"
          sub="FactoryJet has worked with 500+ businesses in India, the US, the UK and the UAE. Tell us what you sell and who buys it, retail or trade. We will recommend a platform, fix the price for each phase in writing and show you a draft before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, GST and Tally connected. Every account and file stays yours."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
