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
  title: 'Ecommerce Development in Chennai | FactoryJet',
  description:
    'Ecommerce development in Chennai for Kanchipuram silk sellers, T. Nagar jewellers and auto parts suppliers. Shopify, WooCommerce, UPI, GST. 7-day delivery.',
  keywords: [
    'ecommerce development company chennai',
    'ecommerce website development chennai',
    'shopify development chennai',
    'woocommerce development chennai',
    'online store development chennai',
    'custom ecommerce development chennai',
    'ecommerce website cost chennai',
    'd2c website chennai',
    'razorpay shopify chennai',
    'b2b ecommerce chennai',
    'automotive ecommerce chennai',
    'textile ecommerce chennai',
    'ecommerce agency chennai',
    'omr it ecommerce',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Chennai | FactoryJet',
    description:
      'Chennai ecommerce stores: silk sarees and gold jewellery with Tamil storefronts, dealer portals for Ambattur and Oragadam suppliers. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/chennai',
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
    title: 'Ecommerce Development Chennai | FactoryJet',
    description:
      'Chennai ecommerce: silk, jewellery and auto parts stores with Tamil, UPI, COD and GST invoicing.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/chennai',
    languages: ecommerceCityAlternatesIN['chennai'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/chennai#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/chennai',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Chennai',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Chennai',
    '@id': 'https://www.wikidata.org/wiki/Q1352', // Wikidata label: Chennai (capital of Tamil Nadu, India)
  },
  description:
    'Ecommerce development for Chennai businesses: Shopify and WooCommerce stores for silk, jewellery and food brands, Tamil storefronts, dealer portals for auto component makers, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Chennai',
  url: 'https://factoryjet.com/services/ecommerce-development/chennai',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Chennai retailers, D2C brands and manufacturers. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing. 7-day delivery.',
  areaServed: [
    'Anna Nagar', 'T. Nagar', 'Velachery', 'Sholinganallur',
    'Nungambakkam', 'Adyar', 'OMR', 'Ambattur',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const CHENNAI_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Products, Buyers and Platform',
    description:
      'We go through your catalogue and how it sells: retail in Tamil Nadu, NRIs abroad, or dealers across India. Silk and jewellery need detail-heavy product pages. Auto parts need search by part number. The platform follows from that.',
  },
  {
    number: '02',
    title: 'Design Approval',
    description:
      'We design home, category, product and checkout screens on your own products, phone first. You approve price breakups, size and length info, Tamil labels and trust badges before we build.',
  },
  {
    number: '03',
    title: 'Development and Integrations',
    description:
      'Store build, Razorpay with UPI, cards, wallets and COD, GST invoices with HSN codes, courier links and product import. Dealer portals get logins, account pricing and fast reorder.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'We run real test orders through each payment option, check every invoice and label, and test speed on mobile. Our goal is Lighthouse 90+ and LCP under 2.5 seconds.',
  },
  {
    number: '05',
    title: 'Launch and Training',
    description:
      'We move the domain without downtime, submit the sitemap, hand over the code and all logins, and train your staff. Any defect in our work is fixed free for the cover period agreed at the start.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const CHENNAI_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const CHENNAI_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How soon can my Chennai store go live?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days after you share products, photos and gateway approval. A custom-designed theme takes 3 to 5 weeks. Dealer portals and stores with daily gold-rate pricing take 5 to 8 weeks. Fully custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'How much does ecommerce development cost in Chennai?',
    answer:
      'It depends on what the store must do. Daily gold-rate pricing, a Tamil storefront, dealer price lists, international shipping and ERP links all add scope. A simple retail store costs far less. We quote a fixed price in writing after a short call about your catalogue.',
  },
  {
    category: 'pricing',
    question: 'Can I pay in stages?',
    answer:
      'Yes. Work is split into phases, and each phase is scoped, priced and signed before it starts. A silk store might launch retail first and add NRI shipping next. Payment by NEFT, RTGS or UPI, never by the hour.',
  },
  {
    category: 'pricing',
    question: 'Will I see the store before I sign a contract?',
    answer:
      'Yes. We build a draft with a few of your real products and show it working, from product page to payment. You and your family or partners can test it on your own phones. If you are not happy, you owe nothing.',
  },
  {
    category: 'platform',
    question: 'Which platform is best for a Chennai silk or saree store?',
    answer:
      'Shopify suits most saree stores. It handles colours, blouse options and lengths as variants, supports video on product pages, and takes UPI, COD and international cards. WooCommerce works if you already run a WordPress site with a lot of content.',
  },
  {
    category: 'platform',
    question: "Can my jewellery store show prices based on today's gold rate?",
    answer:
      'Yes. Product prices can update from a daily gold rate you set, using weight, purity and making charges. Each product page shows the price breakup, the hallmark and HUID, and insured shipping. Dealers can get a login-only catalogue with trade rates.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our standard gateway and covers UPI, cards, net banking, wallets and EMI. We can connect PayU, CCAvenue or PhonePe if you already have one. COD can be limited by value, pincode or product, which matters for high-value jewellery.',
  },
  {
    category: 'platform',
    question: 'Can auto component makers take dealer orders online?',
    answer:
      'Yes. Dealers and workshops log in, search by part number or vehicle, see their own price and credit terms, and reorder past orders quickly. The portal raises GST invoices and can export orders to Tally, Zoho Books or your ERP.',
  },
  {
    category: 'india',
    question: 'How does GST work on a Chennai store?',
    answer:
      'Orders within Tamil Nadu carry CGST and SGST. Orders to other states carry IGST. The store applies the right split automatically, prints HSN codes, and lets business buyers enter a GSTIN. Data exports line up with GSTR-1 filing.',
  },
  {
    category: 'india',
    question: 'Which courier is best for shipping from Chennai?',
    answer:
      'Most Chennai stores start with Shiprocket, which brings Delhivery, Blue Dart, Xpressbees, DTDC and others into one panel with returns handling. High-value jewellery needs insured shipping through a specialist service. For same-day delivery inside Chennai, a local partner works for food and gifts.',
  },
  {
    category: 'india',
    question: 'Can my store be in Tamil?',
    answer:
      'Yes. We can run a full Tamil version next to English, each on its own URL so Google can index both. We test Tamil fonts on low-cost Android phones before launch. Product names and descriptions should be written by a Tamil speaker, not machine-translated.',
  },
  {
    category: 'india',
    question: 'How do I sell silk and jewellery to NRIs from Chennai?',
    answer:
      'Shopify Markets shows prices in dollars, pounds or Singapore dollars, and we connect a cross-border courier such as Shiprocket X or DHL. Checkout shows duties and delivery times. Wedding buyers order weeks ahead, so we add clear dispatch dates and a WhatsApp line for questions.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Chennai searches?',
    answer:
      'It can. We set up product and breadcrumb schema, clear titles, canonical tags and a sitemap at launch. If you have a showroom in T. Nagar, Mylapore or Anna Nagar, we link the store to your Google Business Profile so you appear in local results too.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes, before handover. We test the main pages on mobile with Lighthouse and share the report, aiming for 90+ with LCP under 2.5 seconds. Heavy saree photos and videos are where most of the tuning goes.',
  },
  {
    category: 'seo',
    question: 'Our existing store is slow. Can you fix it?',
    answer:
      'Yes. We audit the slowest pages and list each cause: image sizes, apps loading scripts everywhere, theme code, chat or review widgets. You get the fixes in order of impact with a fixed price. Removing unused apps often helps most.',
  },
  {
    category: 'seo',
    question: 'Can product videos work without slowing the store?',
    answer:
      'Yes. We host videos so they stream instead of loading in full, show a light preview image first, and play only when the buyer taps. Saree drape and jewellery close-up videos stay on the page without hurting load time.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are registered in your business name. You get the code repository and every admin login. Hosting and apps can bill your own account at cost, and you can move developers whenever you choose.',
  },
  {
    category: 'trust',
    question: 'What happens at handover?',
    answer:
      'We train your team on adding products, updating prices, handling orders, returns and offers. You receive a document with every login, integration contacts and a checklist for the first month after launch.',
  },
  {
    category: 'trust',
    question: 'What support do I get after the store is live?',
    answer:
      'Defects in our work are fixed inside the build price for a cover period agreed before we start. After that, support is optional. Each change gets a quote that you approve first, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my shop staff manage the store without coding?',
    answer:
      'Yes. On Shopify, adding sarees, changing prices, setting up Aadi or Deepavali offers and processing orders need no coding. We create staff logins and short training videos for the tasks they repeat.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Chennai?',
    answer:
      'For silk houses, jewellers and component makers, a good ecommerce website development company in Chennai should tell you who writes the code, fix the price in writing and give you full ownership. FactoryJet does all three and shows a draft before you sign. Hold every ecommerce solution company in Chennai to the same standard.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Chennai or an agency?',
    answer:
      'A single developer can build a basic store. Running one well takes design, payments, couriers, GST, Tamil content and SEO together, which few individuals cover. A small senior team handles all of it at a fixed price. If you hire an ecommerce developer in Chennai, open two of their stores on your phone and time them.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHENNAI_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/chennai#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/chennai',
};

export default function ChennaiEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="chennai-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="chennai-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="chennai-ecom-local-schema"
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
          { name: 'Chennai', url: 'https://factoryjet.com/services/ecommerce-development/chennai' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Chennai', url: 'https://factoryjet.com/services/ecommerce-development/chennai' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_chennai_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · CHENNAI"
          headline="Ecommerce Development in Chennai: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Chennai silk, jewellery and food brands, with Tamil where your buyers want it, and dealer portals for auto component makers from Ambattur to Oragadam. Razorpay, UPI and COD at checkout, Lighthouse 90+ on mobile. 7-day delivery."
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
          description="From D2C labels to component suppliers, we have built for businesses in India, the US, the UK and the UAE. Chennai clients get a fixed price per phase, the complete codebase, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · CHENNAI"
          headline="Matching the Platform to a Chennai Business"
          lead="A T. Nagar silk house selling to NRIs in Singapore, a filter coffee brand on subscription and an Oragadam supplier taking repeat orders from dealers need different builds. We look at your products and buyers, then recommend a platform with a fixed price."
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
                Chennai buyers are careful with money and want full details before they pay. For silk that means weave, zari type and length. For gold, it means weight, purity, making charges and the hallmark. For an auto part, it means the part number and the vehicles it fits. A store that hides any of this gets a phone call at best and a lost sale at worst.
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
                  In Chennai, trust is built with detail. The store has to show it before the buyer asks.
                </p>
              </div>

              <p>
                We design Chennai stores so the answer is on the page: spec tables beside the price, video of the saree drape, a price breakup for jewellery, and WhatsApp for the questions that remain. Checkout leads with UPI, keeps COD where it makes sense, and shows the delivery date by pincode.
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
                  Chennai platform guide
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
                  We choose the platform your products need, not the dearest one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Chennai Businesses Choose FactoryJet"
          lead="Chennai owners tend to ask hard questions about cost and timing before they commit. We answer with a fixed price per phase in writing, 7-day delivery for standard stores in the agreement, and a working draft built on your own products before you sign anything."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'A standard store for a Chennai business is live in 7 days from the day products, photos and payment gateway approval reach us. That date goes into the agreement. We have hit our deadline on 97% of builds.',
            },
            {
              icon: '📱',
              title: 'Made for mobile and for detail.',
              body: 'Most Chennai buyers will see your store on a phone. We design at 375px first and still fit the detail they need: spec tables that scroll cleanly, zoomable photos of the weave, and a checkout that finishes in a few taps.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Scope and price for each phase are written down and signed before we begin. You will not see hourly charges or a bigger bill at launch. Support afterwards is optional, priced change by change.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Chennai Store Moves From Brief to Launch"
          lead="Platform choice, design on your own products, then test orders on every payment method and courier before we switch the domain."
          stages={CHENNAI_ECOM_STAGES}
          closingNote="5 STAGES · TAMIL-READY · RAZORPAY + GST + COURIERS · LIGHTHOUSE 90+ · CODE AND LOGINS HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="CHENNAI ECOMMERCE MARKET"
          headline="How Chennai Commerce Is Moving Online"
          leadParagraphs={[
            "Chennai is one of India's main auto and manufacturing centres. The belt from Ambattur and Guindy out to Sriperumbudur and Oragadam is full of component makers, tool rooms and suppliers to the big vehicle plants. Many sell aftermarket parts to dealers too, and they are replacing phone orders and spreadsheets with trade portals.",
            "The city's retail core is just as strong. T. Nagar, around Ranganathan Street and Pondy Bazaar, is packed with silk and gold jewellery stores, and Kanchipuram silk draws buyers from across the world. Mylapore and Anna Nagar shoppers buy coffee, sweets and pooja items online, and families abroad, in Singapore, the Gulf and the US, order silk and jewellery for weddings back home.",
            'Two dates shape the year for Chennai retail: the Aadi month sales and Deepavali, with Pongal and wedding seasons close behind. Gold buying peaks around Akshaya Tritiya. We plan launches and stock pages around those dates, and we build in Tamil where your buyers prefer it, so the store reads as local as your showroom.',
          ]}
          stats={[
            {
              value: '4,000+',
              label: 'Auto component manufacturers in Chennai: India\'s automotive manufacturing capital',
              sourceUrl: 'https://www.ibef.org/states/tamil-nadu',
              sourceLabel: 'IBEF Tamil Nadu',
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
          eyebrow="CHENNAI × ECOMMERCE"
          headline="Chennai Sectors We Build For"
          lead="These six sectors cover most Chennai ecommerce work, from component makers in Oragadam to silk houses in T. Nagar and coffee brands in Mylapore."
          sectors={[
            {
              name: 'Automotive & Components',
              description:
                'Suppliers in Ambattur, Guindy and Oragadam sell parts to dealers and workshops. Portals need part number search, fitment by vehicle, price by dealer and GST invoices.',
              example:
                'Aftermarket parts sellers, tool rooms, EV and two-wheeler component makers.',
            },
            {
              name: 'Silk & Textiles',
              description:
                'Kanchipuram and Arani silk sells on detail and trust. Stores need drape videos, zari and weave notes, Tamil labels and careful international shipping for NRI buyers.',
              example:
                'Silk saree houses, cotton handloom labels, Tiruppur knitwear brands.',
            },
            {
              name: 'Gold & Jewellery',
              description:
                'T. Nagar jewellers need product pages with weight, purity, making charges and HUID, prices linked to the daily gold rate, and insured delivery.',
              example:
                'Gold and diamond jewellers, temple jewellery makers, silver article sellers.',
            },
            {
              name: 'Electronics & Appliances',
              description:
                'Chennai has a large electronics manufacturing base around Sriperumbudur. Retail and D2C sellers need spec filters, EMI on the product page and warranty registration.',
              example:
                'Appliance retailers, mobile accessory brands, electrical goods distributors.',
            },
            {
              name: 'Coffee, Sweets & Food',
              description:
                'Filter coffee, Chettinad spice mixes and sweets ship across India. Stores need FSSAI details, shelf-life notes, festival gift boxes and subscriptions.',
              example:
                'Filter coffee roasters, spice mix brands, sweet and savoury shops.',
            },
            {
              name: 'Pharma & Healthcare',
              description:
                'Chennai has a strong hospital and pharma trade. B2B portals let pharmacies and clinics log in, see their rates and reorder, with drug licence capture at sign-up.',
              example:
                'Medical supply distributors, ayurvedic and siddha brands, OTC health makers.',
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
          headline="What founders say after their store launches"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Chennai Owners Ask Before Signing"
          lead="Clear answers to the questions Chennai retailers and manufacturers bring to a first call, covering timing, price, Tamil, GST and ownership."
          categories={CHENNAI_ECOM_FAQ_CATEGORIES}
          items={CHENNAI_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Chennai Store, Live in 7 Days"
          sub="500+ businesses in India, the US, the UK and the UAE have worked with FactoryJet. Share what you sell and who buys it. We will recommend a platform, put the price for each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. Tamil-ready, with UPI, COD and GST. Your code, your accounts."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
