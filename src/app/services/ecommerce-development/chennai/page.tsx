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
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceCityAlternatesIN } from '@/data/hreflangMap';
import MidPageCTA from '@/components/v2/MidPageCTA';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import { AnswerFirst, QuestionAnswers, SourceList } from '@/components/india-pages/IndiaAnswerBlocks';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Best Ecommerce Website Development in Chennai | FactoryJet",
  description:
    "Ecommerce website development company in Chennai for Kanchipuram silk sellers, T. Nagar jewellers and auto parts suppliers. Shopify, Tamil, UPI, GST.",
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
    title: "Ecommerce Website Development Company in Chennai | FactoryJet",
    description:
      "Silk saree and gold jewellery stores with Tamil storefronts, and dealer portals for Ambattur and Oragadam component makers. UPI, COD and GST. A draft before you sign.",
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
    title: "Ecommerce Website Development Company in Chennai | FactoryJet",
    description:
      "Chennai ecommerce: silk, jewellery and auto parts stores with Tamil, UPI, COD and GST.",
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
const PAGE_MODIFIED = '2026-11-24';
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
    'Ecommerce development company serving Chennai retailers, D2C brands and manufacturers. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing.',
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
      'A store with a custom-designed theme takes 3 to 5 weeks after you share products, photos and gateway approval. Dealer portals and stores with daily gold-rate pricing take 5 to 8 weeks. Fully custom platforms take 8 to 14 weeks.',
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
  {
    category: "platform",
    question: "Which is the best Shopify development company in Chennai for silk and jewellery?",
    answer:
      "Choose a Shopify team that has built variant-heavy saree catalogues, gold-rate pricing and Tamil storefronts, not only template installs. FactoryJet is a registered Shopify Partner. We design Chennai stores on your real products, test Tamil fonts on low-cost Android phones, and show you a working draft before any contract is signed.",
  },
  {
    category: "pricing",
    question: "What is the top ecommerce development company in Chennai for B2B dealer portals?",
    answer:
      "For dealer ordering, choose a firm that has built login-only catalogues with account pricing, credit terms and fast reorder. We build these on Shopify Plus B2B or on Commerceflo, our own B2B platform. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built. Ask any Chennai firm to show you a working portal like that.",
  },
  {
    category: "india",
    question: "Can my staff set up Aadi and Deepavali offers without a developer?",
    answer:
      "Yes. On Shopify your staff can create sale prices, festival collections and gift-box bundles from the admin, with no code. We set the store up so a banner, a collection page and a discount can go live together, and we record short videos of each step. Plan your stock pages a few weeks before the Aadi month begins.",
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

/* ─────────────────────────────────────────────────────────────────────────────
   India refresh, 24 Nov 2026: answer-first block, buyer questions, comparison,
   sources. Each source opened and checked on 24 Nov 2026.
───────────────────────────────────────────────────────────────────────────── */

const CITY_CHECKED_ON = '24 November 2026';

const CITY_SRC = {
  shopifyPricing: { label: 'Shopify India pricing', url: 'https://www.shopify.com/in/pricing' },
  razorpay: { label: 'Razorpay pricing', url: 'https://razorpay.com/pricing/' },
  ibef: { label: 'IBEF: E-commerce industry in India', url: 'https://www.ibef.org/industry/ecommerce' },
  shopifyGst: { label: 'Shopify Help: GST in India', url: 'https://help.shopify.com/en/manual/taxes/india-gst' },
} as const;

const CITY_QUESTIONS = [
  {
    q: "How much does it cost to build an ecommerce website in Chennai?",
    a: ["Scope sets the build price. For Chennai stores the big drivers are daily gold-rate pricing, a Tamil version, dealer price lists, NRI shipping and links to Tally or Zoho Books. A simple retail store costs much less than a dealer portal. Ongoing costs are separate: Shopify's India page lists Basic at ₹1,499 a month on yearly billing, and Razorpay lists 2% per domestic transaction plus GST on the fee. Every phase gets a fixed written price."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Is Shopify good for a Chennai silk saree or jewellery store?",
    a: ["Yes, for most. Shopify handles saree colours, lengths and blouse options as variants, plays drape video on product pages and takes UPI, COD and international cards for NRI buyers. Jewellers can price pieces from a daily gold rate. WooCommerce suits a store that already runs a content-heavy WordPress site. Auto component suppliers with large part catalogues usually need a dealer portal or a custom build."],
  },
  {
    q: "How long does an ecommerce website take to build in Chennai?",
    a: ["A custom-designed theme takes 3 to 5 weeks. Dealer portals, gold-rate pricing or a platform move take 5 to 8 weeks, and fully custom platforms take 8 to 14 weeks. Chennai retail peaks around the Aadi sales and Deepavali, and gold buying rises at Akshaya Tritiya. Start about two months before the date you care about, so photos and Tamil product text are ready in time."],
  },
  {
    q: "What should I ask an ecommerce developer in Chennai before hiring?",
    a: ["Ask to see a live store with a Tamil version and one dealer or B2B portal. Ask how they show gold price breakups and HUID, or part fitment by vehicle, depending on your trade. Check who writes the code and get the price for each phase in writing. The store, domain, payment and courier accounts should all be opened in your business name."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Chennai agency" },
  { label: 'Freelancer' },
  { label: 'Marketplace only' },
] as const;

const CITY_COMPARISON_ROWS = [
  {
    feature: 'Draft store on your products before you sign',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" label="Sometimes" />, <CompareIcon key="freelancer" kind="partial" label="Sometimes" />, <CompareIcon key="marketplace" kind="no" label="No own store" />],
  },
  {
    feature: 'Fixed price per phase, in writing',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" label="Varies" />, <CompareIcon key="freelancer" kind="partial" label="Varies" />, 'Fees per order'],
  },
  {
    feature: "Tamil storefront on its own URL, tested on budget phones",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Dealer portal with part number search and dealer pricing",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: 'Customer list and brand stay yours',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="yes" />, <CompareIcon key="freelancer" kind="yes" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: 'Typical time for a custom-theme store',
    values: ['3 to 5 weeks', 'Varies', 'Varies', 'Listing in days, no store'],
  },
];

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
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Chennai", url: 'https://factoryjet.com/services/ecommerce-development/chennai' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Chennai", url: 'https://factoryjet.com/services/ecommerce-development/chennai' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_chennai_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · CHENNAI"
          headline="Ecommerce Website Development Company in Chennai for Silk, Jewellery and Auto Parts Businesses"
          lead="FactoryJet builds online stores for T. Nagar silk and jewellery houses, Mylapore coffee and food brands, and dealer portals for auto component makers from Ambattur to Oragadam. Tamil storefronts where your buyers want them, gold-rate pricing, UPI and COD at checkout, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A CHENNAI STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Silk</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Drape video, zari and weave notes, blouse and length options</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Gold</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Daily gold-rate pricing, price breakup, hallmark and HUID</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Dealers</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Part number search, fitment by vehicle, dealer pricing</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Language</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Tamil next to English, each on its own URL</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Chennai?"}
          answer={[
            "Chennai buyers want every detail before they pay, so judge a developer by how much detail its stores show. A silk store needs weave and zari notes and drape video. A jeweller needs a price breakup tied to the daily gold rate. An Oragadam supplier needs part number search. FactoryJet plans those pages first, fixes the price of each phase in writing, and builds a draft on your own products before you sign.",
            "We are a registered Shopify Partner. Clutch rates us 5.0 from 4 reviews and GoodFirms 5.0 from 5 reviews, and 97% of our projects have been delivered on time or early. Before you pick any Chennai firm, ask to see a Tamil store it built and open it on a low-cost Android phone.",
          ]}
          factsTitle="FactoryJet at a glance"
          facts={[
            { k: 'Shopify status', v: 'Registered Shopify Partner' },
            { k: 'Reviews', v: 'Clutch 5.0 (4 reviews), GoodFirms 5.0 (5 reviews)' },
            { k: 'Track record', v: '500+ businesses served, 97% of projects on time or early, founded 2014' },
            { k: 'Timelines', v: 'Custom-theme store 3 to 5 weeks; advanced store 5 to 8; headless or custom 8 to 14' },
          ]}
          links={[
            { label: 'Ecommerce development in India', href: '/ecommerce-development' },
            { label: 'Shopify development company in India', href: '/shopify-development' },
            { label: 'Ecommerce website cost in India', href: '/blog/ecommerce-website-development-cost-india' },
          ]}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 97% on-time delivery. Founded 2014."
          description="From D2C labels to component suppliers, we have built for businesses in India, the US, the UK and the UAE. Chennai clients get a fixed price per phase, the complete codebase, and a draft store before they sign."
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

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT CHENNAI BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Chennai Businesses Choose FactoryJet"
          lead="Chennai owners tend to ask hard questions about cost and timing before they commit. We answer with a fixed price per phase in writing, a launch date agreed before work starts, and a working draft built on your own products before you sign anything."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft with a few of your real products, so you and your family or partners can try it on your phones. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
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
              value: 'US$ 345B',
              label: "India's projected e-commerce market by 2030, up from US$ 125 billion in 2024 (18.4% a year)",
              sourceUrl: CITY_SRC.ibef.url,
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '₹1,499',
              label: 'a month for Shopify Basic in India on yearly billing, before apps and fees',
              sourceUrl: CITY_SRC.shopifyPricing.url,
              sourceLabel: 'Shopify India pricing',
            },
            {
              value: '2%',
              label: 'Razorpay platform fee per domestic transaction, plus GST on the fee',
              sourceUrl: CITY_SRC.razorpay.url,
              sourceLabel: 'Razorpay pricing',
            },
          ]}
        />

        {/* ── 7b. COMPARISON ───────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW TO CHOOSE"
          headline={"Choosing an Ecommerce Developer in Chennai"}
          lead={"Four ways to get an online store in Chennai, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
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
              stat1: 'Trade price tiers',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'Print Branding · Web',
              title: 'Impulse Branding · Mumbai',
              description:
                'Impulse Branding is a Mumbai print branding and general contracting company. FactoryJet built impulsebranding.in and is now building their next-generation site.',
              imageSrc: '/images/work/impulse-branding-desktop.webp',
              stat1: '75+ page site',
              stat2: 'Web · SEO',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        <MidPageCTA
          headline={"Check your Chennai store on your phone before you sign."}
          sub={"Send a few product photos, your price list or your current website. We will build a draft on real products and write down the price for each phase."}
          label="See a draft of my store"
        />
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

        {/* ── 12b. SOURCES ─────────────────────────────────────────────────── */}
        <SourceList
          checkedOn={CITY_CHECKED_ON}
          sources={[
            { ...CITY_SRC.shopifyPricing, note: 'Shopify plan prices in rupees and third-party transaction fees' },
            { ...CITY_SRC.razorpay, note: '2% platform fee on domestic transactions, plus GST on the fee' },
            { ...CITY_SRC.ibef, note: 'India e-commerce market size for 2024 and projection for 2030' },
          ]}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="light"
          eyebrow="READY TO LAUNCH"
          headline="Your Chennai Store, With Every Detail on the Page"
          sub="500+ businesses in India, the US, the UK and the UAE have worked with FactoryJet. Share what you sell and who buys it. We will recommend a platform, put the price for each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. Tamil-ready, with UPI, COD and GST. Your code, your accounts."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
