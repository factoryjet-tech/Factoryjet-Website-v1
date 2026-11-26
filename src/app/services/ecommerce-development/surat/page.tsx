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
  title: "Best Ecommerce Website Development in Surat | FactoryJet",
  description:
    "Ecommerce website development company in Surat for saree traders, diamond dealers and farsan brands. Reseller logins, UPI, COD and GST invoices.",
  keywords: [
    'ecommerce development company surat',
    'ecommerce website development surat',
    'shopify development surat',
    'woocommerce development surat',
    'online store development surat',
    'custom ecommerce development surat',
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
    title: "Ecommerce Website Development Company in Surat | FactoryJet",
    description:
      "Shopify and WooCommerce stores for Ring Road textile traders, private catalogues for diamond dealers and stores for Surti food brands. A draft store before you sign.",
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
    title: "Ecommerce Website Development Company in Surat | FactoryJet",
    description:
      "Surat ecommerce: reseller catalogues for textile traders, private diamond portals and Surti food stores, with UPI and GST.",
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
   JSON-LD Schema (Service + LocalBusiness), faqSchema is declared after FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-development/surat#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/surat',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Surat',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: [{
    '@type': 'City',
    name: 'Surat',
    '@id': 'https://www.wikidata.org/wiki/Q4629', // Wikidata label: Surat (city in Gujarat, India)
  }, 'Althan', 'Adajan', 'Vesu', 'Udhna', 'Varachha', 'Ring Road', 'Katargam', 'Sachin GIDC'],
  description:
    'Ecommerce development for Surat businesses: Shopify and WooCommerce stores for saree and dress material brands, catalogues for resellers, private portals for natural and lab-grown diamond dealers, GST invoicing. Lighthouse 95+.',
};


/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const SURAT_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Selling Model and Platform',
    description:
      'We map how you sell: direct to buyers, through resellers, wholesale to shops or private trade for diamonds. Each model needs different pricing, logins and checkout, and that sets the platform.',
  },
  {
    number: '02',
    title: 'Design on Your Own Designs',
    description:
      'We design home, catalogue, product and checkout screens with your real sarees, sets or stones, phone first. You approve set-wise pricing, reseller views and trust details before development.',
  },
  {
    number: '03',
    title: 'Build and Integrations',
    description:
      'Store build, Razorpay with UPI, cards and COD, GST invoices with HSN codes, bulk upload tools, reseller logins and margins, Shiprocket, and private catalogues for diamond trade.',
  },
  {
    number: '04',
    title: 'Testing Every Buyer Type',
    description:
      'We place orders as a retail buyer, a reseller and a wholesale shop, check invoices, margins and labels, and test mobile speed against a Lighthouse 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch with no downtime, sitemap submitted, code and logins handed over, your team trained on uploads and orders. Defects in our build are fixed free during the agreed cover period.',
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
  {
    category: 'pricing',
    question: 'How quickly can a Surat trader get a store live?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks once products, photos and gateway approval are ready. Reseller catalogues or diamond trade portals take 5 to 8 weeks, and fully custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does an ecommerce store cost in Surat?',
    answer:
      'It depends on what you need. For Surat businesses the biggest factors are reseller logins with margins, set-wise wholesale pricing, bulk upload tools, private diamond catalogues and Gujarati storefronts. We give a fixed written price after a short call about how you sell.',
  },
  {
    category: 'pricing',
    question: 'How do payments for the project work?',
    answer:
      'We split the work into phases, such as the retail store first and the reseller catalogue second. Each phase has its own written scope and fixed price, signed before work starts. Payment by NEFT, RTGS or UPI, never hourly.',
  },
  {
    category: 'pricing',
    question: 'Can I try the store on my own designs first?',
    answer:
      'Yes. We build a draft with a few of your real designs and show it working, from catalogue to payment. Share it with a few resellers and see what they think. If it does not work for you, you owe nothing.',
  },
  {
    category: 'platform',
    question: 'Can resellers order from my store and share my catalogue?',
    answer:
      'Yes. Resellers register and log in to see their own prices, share product links or images on WhatsApp, and place orders shipped straight to their customers. You set margins by reseller or group, and every order raises a GST invoice.',
  },
  {
    category: 'platform',
    question: 'Can diamond dealers sell online without showing prices publicly?',
    answer:
      'Yes. We build a private catalogue where only approved buyers can log in. Each stone shows its certificate, carat, cut, colour and clarity. Buyers request quotes for single stones or parcels and pay by bank transfer. Nothing is visible to the public.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default, covering UPI, cards, net banking, wallets and EMI. We can use PayU, CCAvenue or PhonePe instead. COD can be limited by order value, pincode or buyer type, and switched off for reseller orders if you prefer prepaid.',
  },
  {
    category: 'platform',
    question: 'Can my store sync with Meesho, Amazon and Flipkart?',
    answer:
      'Yes. A multichannel tool such as Unicommerce or EasyEcom links your store with your marketplace accounts. Stock and prices stay aligned and orders arrive in one dashboard, so a design that sells out on one channel is marked sold out everywhere.',
  },
  {
    category: 'india',
    question: 'How does GST work on a Surat store?',
    answer:
      'Orders within Gujarat carry CGST and SGST, and orders to other states carry IGST. The store applies the right rate for each fabric or product type, prints HSN codes and lets business buyers add a GSTIN. Exports use zero-rated invoices.',
  },
  {
    category: 'india',
    question: 'Which couriers suit a Surat textile business?',
    answer:
      'Shiprocket covers most orders, with Delhivery, Blue Dart, Xpressbees, Ekart and others in one account, including reseller drop-shipping with your brand on the label. Bulk wholesale bales usually go by transport. Diamonds need specialist insured shipping.',
  },
  {
    category: 'india',
    question: 'Can my store be in Gujarati?',
    answer:
      'Yes. A Gujarati version can sit next to English and Hindi, each on its own URL so search engines index all of them. We test Gujarati fonts on budget Android phones and suggest that a person writes the product text.',
  },
  {
    category: 'india',
    question: 'How do I upload hundreds of new designs quickly?',
    answer:
      'Through bulk upload. Your team fills a sheet with design codes, colours, set sizes and prices, drops in photos, and the store creates the products. On a phone, a single design can be added with photos in a few minutes.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Surat and saree searches?',
    answer:
      'It can. We add product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. Collection pages for fabric types and occasions help you rank for searches like Navratri chaniya choli. A shop in a Ring Road market gets linked to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes. Before launch we run Lighthouse on mobile for the home, catalogue and product pages and share the report, aiming for 90+ and LCP under 2.5 seconds. Large catalogues need careful image handling, so that is where most of the work goes.',
  },
  {
    category: 'seo',
    question: 'Can you fix a slow Surat store?',
    answer:
      'Yes. We audit the slowest pages, list the causes, from huge photos to unused apps and heavy themes, and give a fixed price for the fixes in order of impact. Big catalogues often gain the most from image and filter fixes.',
  },
  {
    category: 'seo',
    question: 'Will thousands of products slow my store down?',
    answer:
      'Not if the store is built for it. We use paged and filtered collections, fast search by design code, and images sized for each screen. Buyers and resellers find a design quickly without loading the whole catalogue.',
  },
  {
    category: 'trust',
    question: 'Do I own my store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are registered to your business, and the code repository and every login are handed to you. Hosting and app costs can run in your accounts at cost. You are free to change developers at any time.',
  },
  {
    category: 'trust',
    question: 'What does handover include?',
    answer:
      'We train your team on bulk uploads, pricing, reseller accounts, orders and returns. You get a handover file with every login, integration contacts and a checklist for the first month.',
  },
  {
    category: 'trust',
    question: 'Is there support after launch?',
    answer:
      'Yes. Defects in our work are fixed inside the build price for a cover period we agree upfront. After that, support is optional. You approve a quote for each change, and there is no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my staff manage designs and orders themselves?',
    answer:
      'Yes. On Shopify, adding designs, changing prices, approving resellers and processing orders need no coding. We set up staff logins with the right access and record short videos for the daily tasks.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Surat?',
    answer:
      'When you compare any ecommerce website development company in Surat, ask who writes the code, whether the price is fixed in writing and whether the store is yours at the end. FactoryJet says yes on all three for textile, diamond and food businesses, and builds a draft before you sign. Ask any ecommerce solution company in Surat the same.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Surat or use an agency?',
    answer:
      'One developer can start a simple store. A Surat store with resellers, wholesale pricing, bulk uploads, couriers, GST and SEO needs more hands than that. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Surat, open two stores they built on your phone first.',
  },
  {
    category: "platform",
    question: "Who is the best Shopify developer in Surat for reseller catalogues?",
    answer:
      "Choose a Shopify developer who has built stores where resellers log in, see their own margins and share product links on WhatsApp, not only retail themes. FactoryJet is a registered Shopify Partner. We build a draft on a few of your real designs before you sign, so you and your resellers can try it first.",
  },
  {
    category: "platform",
    question: "Can a Surat fabric wholesaler take trade orders online?",
    answer:
      "Yes. Approved shops log in to see set-wise prices, minimum quantities and their past orders, then reorder in a few taps. We build this on Shopify Plus B2B or on Commerceflo, our own B2B platform. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "india",
    question: "Should a Surat trader sell on Meesho or on its own website?",
    answer:
      "Most do both. Meesho and other marketplaces bring resellers and buyers who are already shopping, but they set the fees and keep the customer details. Your own store keeps the reseller list and the margin. Link both to one stock count with a tool such as Unicommerce or EasyEcom, so a design that sells out on Meesho shows sold out on your site too.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SURAT_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/surat#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/surat',
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
    q: "What does an ecommerce website cost for a Surat business?",
    a: ["Three things move the build price most in Surat: reseller logins with margins, set-wise wholesale pricing, and how many designs you upload each week. A private diamond catalogue or a Gujarati storefront adds work too. Running costs come on top. Shopify's India page lists the Basic plan at ₹1,499 a month on yearly billing, and Razorpay charges 2% per domestic transaction plus GST on that fee. We give a fixed written price for each phase after one call about how you sell."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Shopify or WooCommerce for a Surat saree and dress material trader?",
    a: ["For most Ring Road traders we suggest Shopify. It copes with large catalogues, takes bulk uploads from a sheet, and supports reseller logins and wholesale price lists. WooCommerce fits a trader who already runs a WordPress site with lots of content. A diamond dealer with private trade and parcel quotes may need a custom portal instead. We decide after we see how your orders come in today."],
  },
  {
    q: "How long does it take to build an online store in Surat?",
    a: ["A Surat store with a custom-designed theme takes 3 to 5 weeks. Reseller catalogues and diamond trade portals take 5 to 8 weeks, and headless or fully custom platforms take 8 to 14. Chaniya choli and festive wear sell in one short season, so brief us about two months before Navratri. That leaves time for the build, payment gateway approval and test orders from a reseller account."],
  },
  {
    q: "What should I ask an ecommerce developer in Surat before hiring?",
    a: ["Ask them to show a store where resellers log in and see their own prices, and test it on your phone. Ask how your team will upload fifty new designs in one go. Ask who writes the code, and get the price for each phase in writing. Finally, make sure the store, domain and payment accounts are registered in your company name from day one."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Surat agency" },
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
    feature: "Reseller logins with their own margins and shareable links",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="partial" />, <CompareIcon key="marketplace" kind="partial" />],
  },
  {
    feature: "Private, login-only catalogue for diamond trade",
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

export default function SuratEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="surat-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="surat-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
          { name: "Surat", url: 'https://factoryjet.com/services/ecommerce-development/surat' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Surat", url: 'https://factoryjet.com/services/ecommerce-development/surat' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_surat_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · SURAT"
          headline="Ecommerce Website Development Company in Surat for Textile, Diamond and Food Businesses"
          lead="FactoryJet builds Shopify and WooCommerce stores for Ring Road saree and dress material traders, with reseller logins and catalogues they can share on WhatsApp. Diamond dealers get private, login-only catalogues with a certificate on every stone. Surti farsan and ghari brands get festival boxes and shipping across Gujarat. You see a draft on your own designs before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A SURAT STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Resellers</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Own logins, own margins, product links they can share on WhatsApp</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Uploads</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Hundreds of new designs from one sheet, or one design from a phone in minutes</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Diamonds</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Approved buyers only, a certificate on every stone, parcel quotes</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Checkout</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">UPI first, COD with limits, GST invoices with HSN codes</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Surat?"}
          answer={[
            "Pick the firm that builds around how Surat trades. For a Ring Road textile house that means reseller logins, set-wise wholesale prices and bulk uploads, all planned before any design work. For a diamond dealer it means a private catalogue the public never sees. FactoryJet maps your selling model first, prices each phase in writing, and builds a draft on your own designs before you sign.",
            "We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews, and we have served 500+ businesses since 2014. Before you choose anyone in Surat, ask to see a reseller or wholesale store they built and place a test order on your phone.",
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
          description="Stores, reseller catalogues and trade portals for businesses in India, the US, the UK and the UAE. Surat traders get a fixed price per phase, the code and every login, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · SURAT"
          headline="Picking the Right Build for a Surat Business"
          lead="A Ring Road saree trader supplying thousands of resellers, a Varachha lab-grown diamond maker selling to jewellers abroad and a farsan shop shipping across Gujarat need different stores. We look at how you sell today, then name a platform and a fixed price."
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
                Surat textile trade moves through resellers. A trader posts a new design in a WhatsApp group in the morning and has orders by noon. The store has to fit that rhythm: new designs live in minutes, catalogues resellers can share, set-wise wholesale prices, and dispatch the same day. A slow upload screen or a clumsy cart breaks the chain.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  In Surat, the store that uploads a new design fastest wins the reseller.
                </p>
              </div>

              <p>
                We build Surat stores so your team can add a design with photos, colours and set sizes in a few minutes. Resellers get a login, their own margins and shareable product links. Retail buyers get a clean checkout with UPI first and COD with limits. Diamond dealers get a private catalogue, certificates on every stone and quote requests for parcels.
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
                  Surat platform guide
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
                  We match the platform to your trade, not to the biggest budget.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT SURAT BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Surat Traders Work With FactoryJet"
          lead="Surat business is decided quickly and judged on delivery. So we give you a fixed price for each phase in writing, agree the launch date before work starts, and build a working draft on your own designs before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft on a few of your real designs, with a reseller login, so you and your resellers can test it on a phone. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Fast uploads for a fast trade.',
              body: 'New designs drop daily in Surat. We set up bulk upload from your sheets, quick photo resizing and set-wise pricing, so a design can go live in minutes on a phone as well as a desktop.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase is scoped and priced in writing up front. No hourly billing, no surprise bill when you launch. Support after launch is optional, with every change quoted for approval.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How a Surat Store Gets Built"
          lead="We fix the platform and selling model first, design on your own designs next, and test retail, reseller and wholesale orders before launch."
          stages={SURAT_ECOM_STAGES}
          closingNote="5 STAGES · RETAIL + RESELLER + WHOLESALE · UPI + COD + GST · LIGHTHOUSE 90+ · FULL CODE HANDOVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="SURAT ECOMMERCE MARKET"
          headline="How Surat Trades Online"
          leadParagraphs={[
            "Surat is the centre of India's synthetic textile trade. The markets along Ring Road sell sarees, dress materials, kurtis and Navratri wear to shops and resellers across the country, while mills and processing units in Pandesara and Sachin produce the fabric. Surat zari, which carries a GI tag, and embroidery work add to the mix. Much of this trade already runs on WhatsApp and marketplaces such as Meesho.",
            "The city is also one of the world's main diamond cutting and polishing centres. Varachha, Katargam and Mahidharpura are full of units, and the Surat Diamond Bourse has added a large trading hub. Lab-grown diamonds are a fast-growing part of the business. Diamond trade online needs privacy: approved buyers only, certificates on every stone, and quotes for parcels rather than a public price list.",
            'Surti food has its own following. Ghari, farsan, namkeen and sweets ship across Gujarat and to Gujarati families in the US, UK and Africa, with peaks at Diwali and Chandani Padvo. We build Surat stores for these three trades, each with its own pricing, logins and checkout, and in Gujarati where buyers prefer it.',
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
          headline={"Choosing an Ecommerce Developer in Surat"}
          lead={"Four ways to get an online store in Surat, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="SURAT × ECOMMERCE"
          headline="Surat Sectors We Build For"
          lead="From Ring Road saree traders to Varachha diamond units and farsan shops, these six sectors cover nearly every Surat brief we see."
          sectors={[
            {
              name: 'Diamonds & Lab-Grown Stones',
              description:
                'Private catalogues for approved buyers, certificate images and numbers on every stone, parcel quotes, and payment by bank transfer against a GST invoice.',
              example:
                'Natural diamond traders, lab-grown diamond makers, Diamond Bourse offices.',
            },
            {
              name: 'Sarees & Dress Materials',
              description:
                'Ring Road traders need fast design uploads, set-wise wholesale prices, retail checkout with COD, and catalogues resellers can share on WhatsApp.',
              example:
                'Saree and dress material traders, kurti makers, fabric wholesalers.',
            },
            {
              name: 'Zari & Embroidery',
              description:
                'Zari and embroidered fabrics sell to designers and boutiques. Stores need close-ups, per-metre pricing, sample orders and bulk quotes.',
              example:
                'Zari makers, embroidery units, lace and border suppliers.',
            },
            {
              name: 'Navratri & Ethnic Wear',
              description:
                'Chaniya cholis and festive wear sell in one big season. Stores need pre-orders, size sets, stock that switches on before Navratri, and fast dispatch.',
              example:
                'Chaniya choli makers, festive wear brands, lehenga wholesalers.',
            },
            {
              name: 'Jewellery Retail',
              description:
                'Jewellers selling diamond and gold pieces need certificate display, HUID on gold, price breakups, insured shipping and COD limits.',
              example:
                'Diamond jewellery brands, gold jewellers, lab-grown jewellery labels.',
            },
            {
              name: 'Ghari, Farsan & Namkeen',
              description:
                'Surti sweets and snacks ship across India and abroad. Stores need FSSAI details, shelf-life notes, festival boxes and delivery zones for fresh items.',
              example:
                'Ghari and sweet shops, farsan and namkeen brands, dry snack makers.',
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
          headline={"Try your Surat store with your resellers first."}
          sub={"Send a few designs or your current catalogue. We will build a draft with a reseller login and price each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say once we launch their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Surat Traders Ask Before They Sign"
          lead="Direct answers to what Surat textile traders, diamond dealers and food brands ask on a first call, from reseller catalogues to GST."
          categories={SURAT_ECOM_FAQ_CATEGORIES}
          items={SURAT_ECOM_FAQ_ITEMS}
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
          headline="Your Surat Store, Built for Resellers and Trade"
          sub="500+ businesses across India, the US, the UK and the UAE have worked with FactoryJet. Tell us how you sell, retail, resellers or trade, and we will propose a platform, price each phase in writing and show you a draft of the store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. Reseller logins, UPI, COD and GST. The code and accounts stay in your name."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
