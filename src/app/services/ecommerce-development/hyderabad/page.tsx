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
  title: "Best Ecommerce Website Development in Hyderabad | FactoryJet",
  description:
    "Ecommerce website development company in Hyderabad for pearl jewellers, ikat weavers, food brands and pharma distributors. Shopify, UPI, COD and GST.",
  keywords: [
    'ecommerce development company hyderabad',
    'ecommerce website development hyderabad',
    'shopify development hyderabad',
    'woocommerce development hyderabad',
    'online store development hyderabad',
    'custom ecommerce development hyderabad',
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
    title: "Ecommerce Development Company in Hyderabad | FactoryJet",
    description:
      "Stores for Pathergatti pearl jewellers, Pochampally ikat weavers and Hyderabadi food brands, plus login portals for pharma distributors. Telugu or Urdu on request. A draft before you sign.",
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
    title: "Ecommerce Development Company in Hyderabad | FactoryJet",
    description:
      "Hyderabad ecommerce: pearl, ikat, food and pharma B2B stores with UPI, COD and GST.",
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
   JSON-LD Schema (Service + LocalBusiness), faqSchema is declared after FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/hyderabad#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Hyderabad',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
    '@id': 'https://www.wikidata.org/wiki/Q1361', // Wikidata label: Hyderabad (capital of Telangana, India)
  },
  description:
    'Ecommerce development for Hyderabad businesses: Shopify and WooCommerce stores for pearl jewellers, ikat and handloom sellers and food brands, B2B ordering portals for pharma distributors, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Hyderabad',
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Hyderabad and Secunderabad businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD and GST invoicing.',
  areaServed: [
    'HITEC City', 'Madhapur', 'Gachibowli', 'Banjara Hills',
    'Jubilee Hills', 'Secunderabad', 'Kukatpally', 'Ameerpet',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const HYDERABAD_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Catalogue and Buyer Review',
    description:
      'We go through what you sell and who buys it: city shoppers, NRIs, kirana stores or pharmacies. Pearls need grading details, sarees need weave notes, pharma needs licence checks. The platform follows from that.',
  },
  {
    number: '02',
    title: 'Design on Your Products',
    description:
      'We design home, category, product and checkout screens with your real photos and prices, phone first. You approve layouts, language labels and trust details before code begins.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay for UPI, cards, wallets and COD, GST invoices with HSN codes, Shiprocket or a cross-border courier, and catalogue import. B2B portals get buyer logins and price lists.',
  },
  {
    number: '04',
    title: 'Testing Before Launch',
    description:
      'We place orders with each payment method, check invoices and courier labels, and test mobile speed with Lighthouse. Target: 90+ and LCP under 2.5 seconds.',
  },
  {
    number: '05',
    title: 'Launch and Training',
    description:
      'We switch the domain without downtime, submit the sitemap, hand over code and logins, and train your staff. Defects in what we built are fixed free during the agreed cover period.',
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
  {
    category: 'pricing',
    question: 'How long does a Hyderabad ecommerce store take to build?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once products, photos and gateway approval are ready. B2B pharma portals or stores with subscriptions take 5 to 8 weeks, and custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does ecommerce development cost in Hyderabad?',
    answer:
      'The cost depends on what the store needs. In Hyderabad the main factors are NRI selling with international shipping, B2B buyer pricing, licence checks for pharma buyers, Telugu or Urdu storefronts and the size of the catalogue. We give a fixed written price after a scoping call.',
  },
  {
    category: 'pricing',
    question: 'How is payment for the build structured?',
    answer:
      'In phases. Each phase, such as the retail store or a B2B portal, has a written scope and a fixed price that you sign before it begins. NEFT, RTGS and UPI all work. There are no hourly charges.',
  },
  {
    category: 'pricing',
    question: 'Can I try the store before committing?',
    answer:
      'Yes. We build a draft using some of your real products and show you browsing, cart and checkout working. Test it on your own phone. If it does not feel right, there is no contract and no payment.',
  },
  {
    category: 'platform',
    question: 'Which platform is best for a pearl or bangle business?',
    answer:
      'Shopify suits most. It handles variants like pearl size, colour and strand length, supports video and certificate images, and takes UPI, COD and international cards. If you also sell wholesale to other jewellers, we add a login-only trade catalogue.',
  },
  {
    category: 'platform',
    question: 'Can a pharma distributor take orders from pharmacies online?',
    answer:
      'Yes. Each pharmacy, clinic or hospital registers with its drug licence and GSTIN, then sees its own rates, batch and expiry details and stock. Orders produce GST invoices and can export to your billing software. Selling prescription drugs to consumers needs legal advice before any build.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default gateway, with UPI, cards, net banking, wallets and EMI. We can connect PayU, CCAvenue or PhonePe if you already use one. COD can be limited by order value or pincode.',
  },
  {
    category: 'platform',
    question: 'Can my store sync with Amazon, Flipkart and Meesho?',
    answer:
      'Yes. A multichannel tool such as Unicommerce or EasyEcom connects your store to your marketplace accounts. Stock and prices stay aligned and orders collect in one dashboard, so a saree that sells on Flipkart is marked sold on your store too.',
  },
  {
    category: 'india',
    question: 'How is GST handled on a Hyderabad store?',
    answer:
      'Orders within Telangana carry CGST and SGST, and orders to other states carry IGST. The store applies the right split automatically, prints HSN codes and lets business buyers add a GSTIN. Exports line up with GSTR-1 and can sync with Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: 'Which couriers should a Hyderabad store use?',
    answer:
      'Most stores start on Shiprocket, which gives Delhivery, Blue Dart, Xpressbees, Ekart and others in one account, with returns handled. Pearls and gold need insured shipping. For same-day delivery inside Hyderabad, a local partner such as Porter works for food and gifts.',
  },
  {
    category: 'india',
    question: 'Can my store be in Telugu or Urdu?',
    answer:
      'Yes. A Telugu or Urdu version can sit next to English on its own URL. Urdu needs right-to-left layout, which we build and test properly. We check fonts on low-cost Android phones and recommend that product text is written by a native speaker.',
  },
  {
    category: 'india',
    question: 'How do I sell to NRI buyers in the US and Gulf?',
    answer:
      'Shopify Markets shows prices in dollars or dirhams and handles international checkout. We add a cross-border courier, such as Shiprocket X or DHL, and show duties and delivery times before payment. Festive and wedding buyers order early, so clear dispatch dates matter.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Hyderabad searches?',
    answer:
      'It can, if the basics are right. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. If you have a shop near Charminar or in Banjara Hills, we link the store to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you check speed before handover?',
    answer:
      'Yes. We test the home, category and product pages on mobile with Lighthouse and share the report. We aim for 90+ and LCP under 2.5 seconds. Image sizes and extra apps cause most slowdowns.',
  },
  {
    category: 'seo',
    question: 'Can you fix a Hyderabad store that is slow?',
    answer:
      'Yes. We audit your slowest pages and list what slows them: large images, unused apps, theme code and widgets. You get a ranked fix list with a fixed price. Removing apps you no longer use often gives the biggest gain.',
  },
  {
    category: 'seo',
    question: 'Does an Urdu or Telugu version slow the store down?',
    answer:
      'Not if it is built well. We load only the fonts each language needs, keep both versions on the same fast theme and serve images at the right size. Speed is tested on each language before launch.',
  },
  {
    category: 'trust',
    question: 'Will I own the store and code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are registered to your business, and you receive the code repository and every login. Hosting and app bills can sit in your accounts at cost. You can switch developers at any time.',
  },
  {
    category: 'trust',
    question: 'What is included at handover?',
    answer:
      'Training for your team on products, prices, orders, returns and B2B accounts, plus a handover file with every login, integration contacts and a first-month checklist.',
  },
  {
    category: 'trust',
    question: 'What support is there after launch?',
    answer:
      'Defects in our build are fixed within the build price for a cover period agreed upfront. After that, support is optional. Each change gets a quote for you to approve, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my team run the store themselves?',
    answer:
      'Yes. On Shopify, adding products, changing prices, creating Ramzan or Diwali offers and processing orders need no coding. We set up staff accounts and record short videos of the tasks they do most.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Hyderabad?',
    answer:
      'A strong ecommerce website development company in Hyderabad should say who writes the code, fix the price in writing and hand you full ownership at launch. FactoryJet does all three for jewellers, weavers, distributors and D2C brands, and builds a draft before you sign. Ask the same of any ecommerce solution company in Hyderabad.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Hyderabad or an agency?',
    answer:
      'One developer can set up a simple store. Selling well also needs design, payments, couriers, GST and SEO, plus language work for Telugu or Urdu, which rarely sits with one person. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Hyderabad, test their live stores on your phone first.',
  },
  {
    category: "pricing",
    question: "What is the top ecommerce development company in Hyderabad for B2B ordering?",
    answer:
      "For B2B, pick a firm that has built login-only catalogues with buyer-wise prices, credit terms and quick reorder. That is the setup we scope for pharma distributors and Begum Bazaar wholesalers. Commerceflo is our own B2B platform, and Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "platform",
    question: "Who is the best Shopify developer in Hyderabad for a pearl jewellery store?",
    answer:
      "Look for Shopify work with pearl size, colour and strand length as variants, certificate images, insured shipping and NRI checkout in dollars or dirhams. FactoryJet is a registered Shopify Partner. We build a draft on a few of your own pieces before you sign, so you can see how grading and price details look on a phone.",
  },
  {
    category: "india",
    question: "Can my Hyderabad food brand ship pickles and masalas across India?",
    answer:
      "Yes. Product pages show FSSAI details and shelf life, and festival hampers can be set up as bundles. Shiprocket covers most routes with returns handled, and same-day partners such as Porter suit deliveries inside Hyderabad. We set packaging rules for long routes so jars and sweets arrive in good shape.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HYDERABAD_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/hyderabad#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/hyderabad',
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
    q: "How much does ecommerce development cost in Hyderabad?",
    a: ["What you pay for the build depends on scope: NRI selling with international shipping, buyer-wise pricing for B2B, drug licence checks for pharmacies, a Telugu or Urdu storefront, and catalogue size. Platform and payment fees are extra and published. Shopify's India page lists Basic at ₹1,499 a month on yearly billing. Razorpay lists a 2% fee per domestic transaction, plus GST on the fee. You get a fixed written price per phase after a scoping call."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Shopify, WooCommerce or custom: what suits a Hyderabad pharma distributor?",
    a: ["A distributor selling to pharmacies, clinics and hospitals needs a login-only portal, not a public shop. We build these on Shopify Plus B2B or on Commerceflo, our own B2B platform, with buyer-wise rates, licence capture at sign-up and GST invoices. WooCommerce can suit a smaller distributor already on WordPress. A custom build fits when batch, expiry and stock rules live in your own billing software. Selling prescription drugs to consumers needs legal advice first."],
  },
  {
    q: "How long does it take to launch an ecommerce store in Hyderabad?",
    a: ["A store with a custom-designed theme takes 3 to 5 weeks. B2B pharma portals and stores with subscriptions take 5 to 8 weeks, and headless or custom platforms take 8 to 14. Hyderabadi food and festive sales peak around Ramzan, Sankranti and Diwali, so brief us about two months before the season you are aiming at, with photos and shelf-life details ready."],
  },
  {
    q: "What should I check before hiring an ecommerce developer in Hyderabad?",
    a: ["Ask whether they have built a Telugu version or right-to-left Urdu, and open it on a low-cost Android phone. If you sell to pharmacies or kirana shops, ask to see a B2B portal with buyer logins. Find out who writes the code and get each phase priced in writing. Make sure the store, domain, Razorpay and courier accounts are registered to your business, so you can change developers later."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Hyderabad agency" },
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
    feature: "Pharmacy logins with drug licence and GSTIN checks",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Telugu or right-to-left Urdu storefront next to English",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="no" />],
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

export default function HyderabadEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="hyderabad-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hyderabad-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
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
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Hyderabad", url: 'https://factoryjet.com/services/ecommerce-development/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Hyderabad", url: 'https://factoryjet.com/services/ecommerce-development/hyderabad' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_hyderabad_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · HYDERABAD"
          headline="Ecommerce Website Development Company in Hyderabad for Jewellers, Weavers and Pharma Distributors"
          lead="FactoryJet builds online stores for Pathergatti pearl jewellers, Pochampally and Gadwal weavers and Hyderabadi food brands, plus login-only ordering portals where pharmacies and clinics buy from distributors. Telugu or Urdu storefronts on request, UPI and COD at checkout, GST on every invoice, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A HYDERABAD STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Pearls</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Grading details, close-up video, certificates, insured shipping</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Pharma</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Drug licence and GSTIN at sign-up, batch and expiry shown</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">NRI buyers</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Prices in dollars or dirhams, duties shown before payment</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Language</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Telugu, or right-to-left Urdu, next to English</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Hyderabad?"}
          answer={[
            "Hyderabad has two kinds of buyer: app-native shoppers in HITEC City and Gachibowli, and old-city and Telangana buyers who check prices on WhatsApp and often pay on delivery. A good partner builds one store that works for both. FactoryJet starts from your catalogue and your buyers, fixes the price for each phase in writing, and puts a draft built on your own products in front of you before you sign.",
            "FactoryJet is a registered Shopify Partner, founded in 2014, with ratings of 5.0 on Clutch (4 reviews) and 5.0 on GoodFirms (5 reviews). When you compare Hyderabad firms, ask each one for a live store where you can place a test order yourself, once by UPI and once by COD.",
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
          description="We have shipped stores and B2B portals for businesses in India, the US, the UK and the UAE. Hyderabad clients get the same terms: fixed price per phase, complete code ownership, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · HYDERABAD"
          headline="Which Platform Suits a Hyderabad Business"
          lead="A Pathergatti pearl shop selling to NRIs in Dallas, a Begum Bazaar wholesaler supplying kirana stores and a Gachibowli fitness brand on subscription each need a different setup. We study the catalogue and the buyer first, then name a platform and a fixed price."
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
                Hyderabad has two kinds of online buyer. In HITEC City and Gachibowli, tech workers order everything on apps and leave any store that feels slow or clumsy. In the old city and across Telangana, buyers want to see the real product, check the price on WhatsApp and often pay on delivery. A store has to work for both without feeling built for neither.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Pearls, ikat and biryani sell on trust. The store has to prove the product is real.
                </p>
              </div>

              <p>
                We build Hyderabad stores with close-up photos and video, clear grading for pearls, weave and fabric details for sarees, and FSSAI and shelf-life details for food. Checkout leads with UPI and keeps COD with sensible limits. B2B buyers, such as pharmacies ordering from a distributor, get a login with their own rates.
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
                  Hyderabad platform guide
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
                  We match the platform to your products, not to the biggest invoice.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT HYDERABAD BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Hyderabad Businesses Choose FactoryJet"
          lead="Hyderabad owners want to know three things before they start: the final price, the launch date and who owns the store. Each phase gets a fixed price in writing, the launch date is written into the agreement, and you see a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft on a few of your real products and you test it on your own phone, from browsing to checkout. The launch date is written into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Built for both halves of the city.',
              body: 'Fast enough for an app-native buyer in Madhapur, clear enough for a first-time online buyer in Secunderabad. We design at 375px first, with large photos, UPI up front and WhatsApp a tap away.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Before each phase begins, scope and price are agreed in writing. You will not be billed by the hour or surprised at launch. Support after go-live is optional, with each change quoted first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Hyderabad Store Gets Built"
          lead="Platform first, design on your products next, then real test orders on every payment and courier before we go live."
          stages={HYDERABAD_ECOM_STAGES}
          closingNote="5 STAGES · TELUGU OR URDU READY · UPI + COD + GST · LIGHTHOUSE 90+ · CODE IN YOUR NAME"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="HYDERABAD ECOMMERCE MARKET"
          headline="What Hyderabad Sells Online"
          leadParagraphs={[
            "Hyderabad is known as the City of Pearls, and the shops of Pathergatti and the lanes around Charminar still trade pearls, along with the lac bangles of Laad Bazaar. Telangana's handlooms, Pochampally ikat and Gadwal sarees among them, draw buyers across India and abroad. These products sell on trust, so the store has to show grading, weave and origin clearly.",
            'The city is also a large pharma and life sciences base, from bulk drug makers to the research firms of Genome Valley. Distributors here serve pharmacies, hospitals and clinics across South India, and many are moving their phone and WhatsApp orders into login-only portals that check licences and raise GST invoices automatically. Begum Bazaar traders face a similar shift with their kirana and retail buyers.',
            'In the west of the city, HITEC City, Madhapur and Gachibowli hold a large tech workforce that buys fitness gear, gadgets, fashion and food online. Hyderabadi food travels well too: biryani masalas, pickles, Osmania biscuits and festive sweets ship across India, with peaks around Ramzan, Sankranti and Diwali. We build for each of these buyers differently.',
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
          headline={"Choosing an Ecommerce Developer in Hyderabad"}
          lead={"Four ways to get an online store in Hyderabad, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="HYDERABAD × ECOMMERCE"
          headline="Hyderabad Sectors We Build For"
          lead="From pearl shops near Charminar to pharma distributors in the industrial belts and D2C brands in Gachibowli, these are the six sectors behind most Hyderabad briefs."
          sectors={[
            {
              name: 'Pearls & Jewellery',
              description:
                'Pearl and bangle sellers need grading details, close-up video, certificate display, insured shipping and NRI checkout. Gold pieces need HUID and price breakups.',
              example:
                'Pearl jewellers in Pathergatti, Laad Bazaar bangle makers, gold and silver jewellers.',
            },
            {
              name: 'Pharma & Life Sciences',
              description:
                'Distributors and makers sell to pharmacies, hospitals and labs. Portals need licence capture, batch and expiry details, buyer-wise pricing and GST invoicing.',
              example:
                'Pharma distributors, surgical and lab supply firms, nutraceutical brands.',
            },
            {
              name: 'Tech D2C & Fitness',
              description:
                'HITEC City buyers expect app-level speed. Gadget and fitness brands need spec comparison, EMI, subscriptions and fast delivery inside the city.',
              example:
                'Fitness equipment brands, gadget accessory labels, supplement makers.',
            },
            {
              name: 'Ikat, Handloom & Ethnic Wear',
              description:
                'Pochampally and Gadwal weaves sell on detail. Stores need weave close-ups, drape video, blouse options, Telugu labels and NRI shipping.',
              example:
                'Ikat saree weavers and cooperatives, Gadwal and Narayanpet sellers, ethnic wear boutiques.',
            },
            {
              name: 'Hyderabadi Food Brands',
              description:
                'Masalas, pickles, biscuits and sweets ship nationwide. Stores need FSSAI details, shelf-life notes, festival hampers and safe packaging rules for long routes.',
              example:
                'Biryani masala brands, pickle makers, bakeries and sweet shops.',
            },
            {
              name: 'Wholesale & Building Supplies',
              description:
                'Begum Bazaar traders and construction suppliers sell to shops and contractors. Portals need price slabs, bulk quotes, credit terms and GST B2B invoices.',
              example:
                'Kirana wholesalers, hardware and sanitaryware suppliers, building material dealers.',
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
          headline={"Try your Hyderabad store before you sign."}
          sub={"Send your catalogue or current website. We will build a draft on a handful of your real products and price each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after their launch"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Hyderabad Founders Ask Before They Sign"
          lead="The questions Hyderabad jewellers, weavers, distributors and D2C founders ask on a first call, answered without jargon."
          categories={HYDERABAD_ECOM_FAQ_CATEGORIES}
          items={HYDERABAD_ECOM_FAQ_ITEMS}
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
          headline="Your Hyderabad Store, Built for Both Halves of the City"
          sub="500+ businesses in India, the US, the UK and the UAE have built with FactoryJet. Tell us what you sell in Hyderabad and who buys it. We will recommend a platform, price each phase in writing and show you a draft of the store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. UPI, COD and GST set up. Your store, your code, your accounts."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
