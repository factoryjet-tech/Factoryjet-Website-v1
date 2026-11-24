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
  title: "Best Ecommerce Website Development in Mumbai | FactoryJet",
  description:
    "Ecommerce website development company in Mumbai for fashion, jewellery and FMCG brands. Shopify developers, Bhiwandi warehouse sync, UPI, COD and GST.",
  keywords: [
    'ecommerce development company mumbai',
    'ecommerce website development mumbai',
    'shopify development mumbai',
    'woocommerce development mumbai',
    'online store development mumbai',
    'custom ecommerce development mumbai',
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
    title: "Ecommerce Website Development Company in Mumbai | FactoryJet",
    description:
      "Shopify and WooCommerce stores for Mumbai fashion, jewellery and FMCG brands, with Bhiwandi warehouse sync, UPI, COD and GST. A draft store before you sign.",
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
    title: "Ecommerce Website Development Company in Mumbai | FactoryJet",
    description:
      "Mumbai ecommerce: fashion, jewellery and FMCG stores with warehouse sync, UPI, COD and GST.",
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
const PAGE_MODIFIED = '2026-11-24';
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
    'Ecommerce development for Mumbai businesses: Shopify and WooCommerce stores for fashion, beauty and FMCG brands, jewellery catalogues with gold-rate pricing, omnichannel stock with outlets, warehouse integrations, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Mumbai',
  url: 'https://factoryjet.com/services/ecommerce-development/mumbai',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Mumbai, Thane and Navi Mumbai businesses. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD, warehouse sync and GST invoicing.',
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
    title: 'Channels and Stock Map',
    description:
      'We list every place you sell and every place stock sits: website, marketplaces, outlets, Bhiwandi or a 3PL. That map decides the platform, the inventory tool and the order routing.',
  },
  {
    number: '02',
    title: 'Design on Your Range',
    description:
      'Home, collection, product and checkout screens designed with your real products, phone first. You approve size guides, exchange flows, price breakups and trust details before build.',
  },
  {
    number: '03',
    title: 'Build and System Links',
    description:
      'Store build, Razorpay with UPI, cards, wallets and COD, GST invoicing, warehouse and outlet sync, marketplace connectors, courier setup and catalogue import.',
  },
  {
    number: '04',
    title: 'Test Orders and Stock Sync',
    description:
      'We place orders from each channel, check that stock updates everywhere, test invoices and labels, and run Lighthouse on mobile against a 90+ target.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch with no downtime, sitemap submitted, code and logins handed to your team, staff trained. Defects in our build are fixed free for the cover period agreed upfront.',
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
      "A Mumbai store with a custom-designed theme takes 3 to 5 weeks once we have your products, photos and payment gateway approval. Fashion labels with hundreds of size and colour variants need a few extra days for product data. Omnichannel builds that share stock with your retail outlets take 5 to 8 weeks. Custom platforms and marketplaces take 8 to 14 weeks.",
  },
  {
    category: 'pricing',
    question: "How much does ecommerce development cost in Mumbai?",
    answer:
      "It depends on what the store has to do. In Mumbai the biggest price drivers are large fashion catalogues, one stock count shared between your website and your outlets, integration with a Bhiwandi warehouse or 3PL, and selling abroad. A small catalogue with one warehouse costs far less than an omnichannel brand. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'pricing',
    question: 'How is a Mumbai build billed?',
    answer:
      'Phase by phase. The storefront might be phase one, and warehouse or outlet sync phase two. Each phase has a written scope and a fixed price you sign before it starts, so the bill never grows with hours. Bank transfer by NEFT or RTGS, or UPI, all work.',
  },
  {
    category: 'pricing',
    question: 'Do we get to see a working store before signing?',
    answer:
      'Yes. We set up a draft on a handful of your real products, so your team can browse, add to cart and reach payment on their own phones. If the draft does not fit your brand, there is no contract to cancel and nothing to pay.',
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
    question: 'Which payment methods can a Mumbai store accept?',
    answer:
      'UPI, cards, net banking, wallets, EMI and pay-later options through one Razorpay account, which is our usual starting point. If your finance team already uses PayU, Cashfree or PhonePe, we connect that instead. COD runs with rules you choose, such as a value cap or prepaid-only for first orders.',
  },
  {
    category: 'platform',
    question: 'Can my store share stock with Myntra, Ajio, Amazon and Flipkart?',
    answer:
      'Yes. An inventory tool such as Unicommerce or EasyEcom sits between your store and each marketplace, so one stock count feeds every channel. Orders land in a single dashboard and route to the right warehouse. During a sale, the last piece in a size cannot be sold twice.',
  },
  {
    category: 'india',
    question: 'How are GST invoices set up for Mumbai orders?',
    answer:
      'Orders inside Maharashtra carry CGST and SGST, and orders to other states carry IGST. The invoice is raised automatically with HSN codes and, for business buyers, their GSTIN. If your turnover puts you under e-invoicing, B2B invoices get an IRN through your e-invoicing setup. Exports go to Tally or Zoho Books.',
  },
  {
    category: 'india',
    question: "Can my store be in Marathi or Hindi?",
    answer:
      "Yes. Shopify's translation tools and WooCommerce plugins such as WPML can run Marathi and Hindi versions next to English, each on its own URL so Google can index all of them. We test Devanagari rendering on low-cost Android phones before launch. Product copy should be written or checked by a person, because machine translation gets fabric and fit terms wrong.",
  },
  {
    category: 'india',
    question: 'How do Mumbai exporters reach overseas buyers?',
    answer:
      'Retail buyers abroad see prices in their own currency through Shopify Markets, with a cross-border courier such as DHL or Shiprocket X and duties shown before payment. Overseas stores and distributors get a separate login with trade prices. Jewellery and leather exporters often run both side by side.',
  },
  {
    category: 'india',
    question: 'What courier setup works for a Mumbai store?',
    answer:
      'Most Mumbai stores ship from Bhiwandi through Shiprocket or a 3PL, which gives Delhivery, Blue Dart, Xpressbees and others under one panel. Brands at volume often sign a direct contract later. Same-day delivery inside the city suits food, beauty and gifts. In the monsoon we lengthen delivery estimates automatically.',
  },
  {
    category: 'india',
    question: 'How can a Mumbai store bring down COD returns?',
    answer:
      'Send a WhatsApp confirmation for each COD order before it leaves the warehouse, take a token prepaid amount on larger orders, and switch COD off for pincodes and products with high refusal rates. Exchange-first returns for fashion also help, because buyers who can swap a size rarely refuse the parcel.',
  },
  {
    category: 'india',
    question: "Can Mumbai food and FMCG brands sell online?",
    answer:
      "Yes. Food brands must show the FSSAI licence number on every product page, along with ingredients and shelf life. FMCG brands that sell through distributors often need two things: a retail store for consumers and a reorder portal where retailers and distributors log in, see their own prices and place repeat orders without phone calls.",
  },
  {
    category: 'seo',
    question: 'Can my store show up in Mumbai local searches?',
    answer:
      'Yes, with the right setup at launch: product and breadcrumb schema, clean titles, canonical tags and a sitemap in Search Console. Brands with outlets in Andheri, Thane or Navi Mumbai get a store locator with one page per outlet, each tied to its Google Business Profile, so you appear on the map in each area.',
  },
  {
    category: 'seo',
    question: 'Is the store speed checked before launch?',
    answer:
      'Yes. We run Lighthouse on mobile for home, collection, product and cart pages and send you the report. The target is 90+, with LCP below 2.5 seconds and little layout shift. Fashion catalogues need the most image work, and app scripts are the next usual cause.',
  },
  {
    category: 'seo',
    question: 'Our Mumbai store is slow. What can you do?',
    answer:
      'Start with an audit of the slowest templates. We list each cause, such as oversized photos, apps loading on every page, review or chat widgets and theme code, then quote a fixed price for the fixes in order of impact. Many stores speed up most from dropping apps they no longer use.',
  },
  {
    category: 'trust',
    question: 'Who owns the store, code and accounts?',
    answer:
      'Your company does, from the first day. The store, domain, gateway, courier and warehouse accounts are registered to you, and the code lives in your own repository with every admin login handed over. Hosting and app bills can sit on your cards at cost. You can bring in another developer whenever you like.',
  },
  {
    category: 'trust',
    question: 'What happens after the store is live?',
    answer:
      'Defects in anything we built are fixed within the build price during a cover period agreed before work starts. After that you decide. Each change is quoted and approved before we do it, and there is no monthly minimum to keep us on.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Mumbai?',
    answer:
      'Before you pick an ecommerce website development company in Mumbai, ask three things: which engineer writes the code, is the price fixed in writing, and will you own the store outright. FactoryJet says yes to all three for fashion, jewellery and FMCG brands, and builds a draft of your store before you sign. Ask every ecommerce solution company in Mumbai the same.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Mumbai or an agency?',
    answer:
      'A freelancer can put up a basic store. A Mumbai brand usually also needs warehouse sync, marketplace connectors, payments, GST, couriers and SEO, which is more than one person covers well. A small senior team handles it for a fixed price. If you do hire an ecommerce developer in Mumbai, load two of their live stores on your phone first.',
  },
  {
    category: "platform",
    question: "Who is the best Shopify developer in Mumbai?",
    answer:
      "Look for a Shopify developer or team in Mumbai who has built stores with variants, outlet stock and warehouse sync, not only themes. FactoryJet is a registered Shopify Partner with senior developers who write the code, and we build a draft on your own products before you sign, so you can judge the work first.",
  },
  {
    category: "pricing",
    question: "What is the top ecommerce development company in Mumbai for B2B wholesale?",
    answer:
      "For B2B, pick a firm that has built login-only trade catalogues with customer-specific prices, minimum order quantities and reorder lists. We build these on Shopify Plus B2B or on Commerceflo, our own B2B platform. Belle Maison, a home decor wholesaler, takes trade orders on a Commerceflo store we built.",
  },
  {
    category: "platform",
    question: "Should a Mumbai brand sell on Amazon and Myntra or on its own website?",
    answer:
      "Both, for most brands. Marketplaces bring buyers who are already shopping, but they own the customer and set the fees. Your own Shopify store keeps the customer list and the margin. The key is one stock count across all of them, so a size sold on Myntra disappears from your website at the same moment.",
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
    q: "How much does an ecommerce website cost in Mumbai?",
    a: ["The build price depends on catalogue size, how many channels share stock, warehouse or outlet sync, and whether you sell abroad. A single-warehouse store costs far less than an omnichannel fashion brand. Running costs are separate: Shopify's India page lists Basic at ₹1,499 a month on yearly billing, and Razorpay lists a 2% fee per domestic transaction plus GST on the fee. We quote the build as a fixed price per phase after a short scoping call."],
    sources: [CITY_SRC.shopifyPricing, CITY_SRC.razorpay],
  },
  {
    q: "Shopify or WooCommerce for a Mumbai brand?",
    a: ["Shopify suits most Mumbai D2C fashion and beauty labels: variants, size charts, Instagram shops and Shopify POS for outlets all work well. WooCommerce suits a brand that already runs a busy WordPress blog or needs custom logic Shopify makes hard. Jewellers with daily gold-rate pricing can use either, with a price feed. We pick after seeing your catalogue, channels and warehouse."],
  },
  {
    q: "How long does it take to build an ecommerce website in Mumbai?",
    a: ["A store with a custom-designed theme takes 3 to 5 weeks. Stores with outlet stock sync, B2B pricing or a migration take 5 to 8 weeks, and headless or custom platforms take 8 to 14. For most Mumbai brands the deadline is Diwali, so brief us about two months ahead and avoid switching couriers in the middle of the monsoon."],
  },
  {
    q: "What should you check before hiring a Shopify developer in Mumbai?",
    a: ["Ask which engineer writes your code, ask for two live stores to test on your phone, and ask how they would sync stock with your Bhiwandi warehouse or 3PL. Ask for the price in writing and for the store, code and accounts in your company name. A good Shopify developer in Mumbai will happily build a draft on your products first."],
  },
];

const CITY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: "Typical Mumbai agency" },
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
    feature: "Bhiwandi warehouse or 3PL sync planned before design",
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="agency" kind="partial" />, <CompareIcon key="freelancer" kind="no" />, <CompareIcon key="marketplace" kind="no" />],
  },
  {
    feature: "Outlet and Myntra or Ajio stock on one count",
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
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Mumbai", url: 'https://factoryjet.com/services/ecommerce-development/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Ecommerce Development India', url: 'https://factoryjet.com/ecommerce-development' },
          { name: "Mumbai", url: 'https://factoryjet.com/services/ecommerce-development/mumbai' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_mumbai_hero" />}
          eyebrow="ECOMMERCE WEBSITE DEVELOPMENT · MUMBAI"
          headline="Ecommerce Website Development Company in Mumbai for Fashion, Jewellery and FMCG Brands"
          lead="FactoryJet builds Shopify stores for Mumbai fashion, beauty and FMCG brands, jewellery catalogues for Zaveri Bazaar houses, and omnichannel setups that share stock between your outlets and a Bhiwandi warehouse. UPI and COD at checkout, GST invoices, and a draft of your store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Draft store before you sign',
            'Razorpay + UPI + COD ready',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">WHAT A MUMBAI STORE USUALLY NEEDS</p>
              <ul className="mt-5 space-y-3">
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Stock</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">One count across website, outlets, Myntra and a Bhiwandi warehouse</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Fashion</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Size charts and exchange-first returns</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Jewellery</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Gold-rate pricing, HUID details, insured shipping</p></li>
                <li className="border-b border-fj-neutral-100 pb-3"><p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">Checkout</p><p className="mt-0.5 font-fj-body text-[0.875rem] text-fj-neutral-600">Razorpay with UPI, cards and COD rules</p></li>
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.</p>
            </div>
          }
        />

        {/* ── 1b. ANSWER FIRST ─────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question={"Which is the best ecommerce website development company in Mumbai?"}
          answer={[
            "The best ecommerce website development company in Mumbai for your brand is one that plans the store around where your stock sits, writes the code with its own senior developers, and fixes the price in writing. FactoryJet builds Mumbai stores warehouse first: Bhiwandi or 3PL sync, outlet stock, Myntra and Ajio feeds, then the storefront. You see a working draft on your own products before you sign.",
            "We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews. Before choosing any Mumbai firm, open two of its live stores on your phone and place a test order.",
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
          description="Stores, catalogues and B2B portals for businesses in India, the US, the UK and the UAE. Mumbai brands get a fixed price per phase, full ownership of code and accounts, and a draft store before they sign."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · MUMBAI"
          headline="Getting the Stack Right for a Mumbai Brand"
          lead="A Bandra fashion label with three outlets, a Zaveri Bazaar jeweller pricing by the daily gold rate and an FMCG brand shipping from Bhiwandi each need a different setup. We look at your catalogue, channels and warehouse first, then propose a platform and a fixed price."
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
                Mumbai brands rarely sell through one channel. A label might sell on its own site, on Myntra and Ajio, on Instagram and in two malls, all from stock held in Bhiwandi. If those channels do not share one stock count, the same size sells twice and someone gets a refund instead of a kurta. The store is the hub that keeps them honest.
              </p>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  In Mumbai, the store is only as good as the stock count behind it.
                </p>
              </div>

              <p>
                We connect Mumbai stores to the systems that hold the stock: warehouse software, outlet billing and marketplaces. Orders route to the right location, stock updates everywhere, and buyers see real delivery dates. On the front end, fashion gets exchange-first returns, jewellery gets price breakups and FMCG gets subscriptions and reorder buttons.
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
                  We fit the stack to your channels, not to the priciest quote.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4b. BUYER QUESTIONS ──────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow={"WHAT MUMBAI BUYERS ASK BEFORE HIRING"}
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={CITY_QUESTIONS}
          bgClassName="bg-white"
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Mumbai Brands Work With FactoryJet"
          lead="Mumbai brands live by launch dates: a drop, a sale, a season. We put a fixed price on each phase in writing, agree the launch date before work starts, and show you a working draft on your own products before you sign."
          pillars={[
            {
              icon: '⚡',
              title: 'A draft store before you sign.',
              body: 'We build a draft on a handful of your real products so your team can test it on their phones. The launch date goes into the agreement, and 97% of our projects have been delivered on time or early.',
            },
            {
              icon: '📱',
              title: 'Designed for the local train scroll.',
              body: 'Mumbai buyers shop in short bursts on the move. We design at 375px first, with fast photos on patchy networks, sticky Add to Cart, and a checkout that finishes before the next station.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Scope and price for each phase are written and signed before work begins. No hourly meter and no launch-day extras. Support afterwards is optional, with each change quoted first.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Launch a Mumbai Store"
          lead="We map channels and stock first, design on your products second, and test orders, stock sync and couriers before go-live."
          stages={MUMBAI_ECOM_STAGES}
          closingNote="5 STAGES · ONE STOCK COUNT · UPI + COD + GST · LIGHTHOUSE 90+ · ACCOUNTS AND CODE IN YOUR NAME"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="MUMBAI ECOMMERCE MARKET"
          headline="How Mumbai Sells Online"
          leadParagraphs={[
            "Mumbai is home to many of India's fashion, beauty and consumer brands, and a lot of the country's online retail is run from offices in Lower Parel, Andheri and BKC. Bandra's Linking Road and Hill Road are street-fashion landmarks, and the city's D2C brands sell across India through their own stores and marketplaces such as Myntra, Ajio and Nykaa.",
            "The city's older trades are moving online too. Zaveri Bazaar is one of India's best-known jewellery markets, and SEEPZ in Andheri hosts gems and jewellery exporters. Lamington Road sells electronics and components, Dharavi makes leather goods sold across the world, and Kalbadevi's cloth markets supply retailers. Each of these needs a store or a trade portal built for how it actually sells.",
            'Behind almost every Mumbai brand sits a warehouse in Bhiwandi or a 3PL, and that is where stores succeed or fail. Stock must sync, orders must route and delivery dates must be honest, especially in the monsoon when deliveries slow down. We build Mumbai stores around the warehouse first and the storefront second.',
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
          headline={"Choosing an Ecommerce Developer in Mumbai"}
          lead={"Four ways to get an online store in Mumbai, compared on what decides the result."}
          columns={CITY_COMPARISON_COLUMNS}
          rows={CITY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="MUMBAI × ECOMMERCE"
          headline="Mumbai Sectors We Build For"
          lead="From Bandra fashion labels to Zaveri Bazaar jewellers and Bhiwandi-stocked FMCG brands, these six sectors cover most Mumbai briefs."
          sectors={[
            {
              name: 'Fashion & Apparel',
              description:
                'Labels selling online and in outlets need size guides, exchange-first returns, marketplace sync with Myntra and Ajio, and one stock count across every channel.',
              example:
                'D2C fashion labels in Bandra and Lower Parel, ethnic wear houses, kidswear brands.',
            },
            {
              name: 'Jewellery & Diamonds',
              description:
                'Zaveri Bazaar and SEEPZ businesses need gold-rate pricing, HUID and certificate display, insured shipping, video consultations and login-only trade catalogues.',
              example:
                'Gold and diamond jewellers, gem exporters, lab-grown jewellery labels.',
            },
            {
              name: 'FMCG & Food',
              description:
                'Brands shipping from Bhiwandi need FSSAI details, subscriptions, reorder buttons and a separate portal where retailers and distributors place repeat orders.',
              example:
                'Packaged food brands, health snack makers, home care and personal care FMCG.',
            },
            {
              name: 'Beauty & Personal Care',
              description:
                'D2C beauty brands need shade finders, ingredient lists, sampling kits, subscriptions and marketplace sync with Nykaa and Amazon.',
              example:
                "Skincare and haircare brands, cosmetics labels, men's grooming brands.",
            },
            {
              name: 'Electronics & Components',
              description:
                'Lamington Road dealers need spec filters, bulk quotes for companies, EMI for consumers and GST invoices for business buyers.',
              example:
                'Electronics and component dealers, CCTV and networking suppliers, accessory brands.',
            },
            {
              name: 'Leather & Lifestyle',
              description:
                'Dharavi leather makers and lifestyle brands need product close-ups, care notes, gift options and wholesale ordering for boutiques in India and abroad.',
              example:
                'Leather bag and wallet makers, footwear brands, home and gifting labels.',
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
          headline={"See your Mumbai store before you sign."}
          sub={"Send your catalogue or current store link. We will build a draft on a few of your real products and price each phase in writing."}
          label="See a draft of my store"
        />
        {/* ── 11. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we launch their store"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Mumbai Founders Ask Before They Sign"
          lead="The questions Mumbai brands, jewellers and distributors ask on a first call, from Bhiwandi stock sync to monsoon delivery dates."
          categories={MUMBAI_ECOM_FAQ_CATEGORIES}
          items={MUMBAI_ECOM_FAQ_ITEMS}
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
          headline="Your Mumbai Store, Built Around Your Stock"
          sub="500+ businesses across India, the US, the UK and the UAE have worked with FactoryJet. Tell us where you sell and where your stock sits. We will recommend a platform, price each phase in writing and show you a draft of your store before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. Draft before contract. Stock synced, UPI and GST set up. Your code and accounts from day one."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
