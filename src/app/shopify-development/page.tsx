import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AnswerFirst, QuestionAnswers, SourceList } from '@/components/india-pages/IndiaAnswerBlocks';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
   Refreshed 24 Nov 2026 for India buyer searches (Google Ads, India, monthly):
   shopify developer 3,600; shopify development services 1,600; shopify website
   development 1,300; shopify development company 1,000; shopify plus company 880;
   shopify app development 880; hire shopify developers 720; shopify expert 590;
   shopify expert in india 320; best/top shopify development company in india.
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best Shopify Development Company in India | FactoryJet',
  description:
    'Hire Shopify developers and Shopify experts in India for custom stores, Shopify Plus, apps and migrations. Razorpay, UPI, GST and Shiprocket set up and tested.',
  keywords: [
    'shopify developer',
    'shopify development company india',
    'best shopify development company in india',
    'top shopify development company in india',
    'shopify development services',
    'shopify website development',
    'hire shopify developers',
    'shopify expert in india',
    'shopify plus company',
    'shopify app development',
    'shopify agency india',
    'shopify store development india',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Shopify Development Company in India | FactoryJet',
    description:
      'Shopify developers and experts for Indian D2C and B2B brands: custom themes, Shopify Plus, apps, migrations. A draft in your own store before you sign.',
    url: 'https://factoryjet.com/shopify-development',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-shopify-store-laptop-bottles.webp',
        width: 1200,
        height: 750,
        alt: 'FactoryJet Shopify Development Services India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Shopify Development Company in India | FactoryJet',
    description:
      'Hire Shopify developers in India for custom stores, Shopify Plus and apps. Razorpay, UPI, GST and Shiprocket set up and tested.',
    images: ['https://factoryjet.com/images/services/card-shopify-store-laptop-bottles.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/shopify-development',
    languages: {
      'en-IN': 'https://factoryjet.com/shopify-development',
      'x-default': 'https://factoryjet.com/shopify-development',
    },
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
   Sources (each opened and checked on 24 Nov 2026)
───────────────────────────────────────────────────────────────────────────── */

const CHECKED_ON = '24 November 2026';

const SRC = {
  shopifyPricing: { label: 'Shopify India pricing', url: 'https://www.shopify.com/in/pricing' },
  shopifyGst: { label: 'Shopify Help: GST in India', url: 'https://help.shopify.com/en/manual/taxes/india-gst' },
  razorpay: { label: 'Razorpay pricing', url: 'https://razorpay.com/pricing/' },
  ibef: { label: 'IBEF: E-commerce industry in India', url: 'https://www.ibef.org/industry/ecommerce' },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Keep honest: bump only when the page's content actually changes.
const PAGE_MODIFIED = '2026-11-24';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/shopify-development#webpage',
  url: 'https://factoryjet.com/shopify-development',
  name: 'Best Shopify Development Company in India',
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#short-answer h2', '#short-answer p'],
  },
};

const SHOPIFY_serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Development Services in India',
  serviceType: 'Shopify development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'India' },
  description:
    'Shopify website development, custom Shopify themes, Shopify Plus builds, Shopify app development and store migrations for Indian D2C and B2B brands, with Razorpay, UPI, COD, GST invoicing and Shiprocket set up and tested.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SHOPIFY_SERVICES = [
  {
    name: 'Shopify Website Development',
    description:
      'A full store from an empty Shopify account: theme, collections, product import, payments, shipping, taxes, policies and launch. You get a store your team can run from the Shopify admin.',
    example: 'For brands opening their first serious online store or leaving a marketplace-only setup.',
    linkLabel: 'See a draft of my store',
    linkHref: '/contact',
  },
  {
    name: 'Custom Shopify Theme Development',
    description:
      'A theme designed in Figma for your products and coded in Liquid, Shopify\'s theme language, with sections your team can edit without a developer. Built phone first.',
    example: 'For brands whose bought theme looks like everyone else\'s, or fights their catalogue.',
    linkLabel: 'Talk about a custom theme',
    linkHref: '/contact',
  },
  {
    name: 'Shopify Plus Development',
    description:
      'Checkout changes with Checkout Extensibility, B2B company accounts with their own price lists, several storefronts from one admin, and Shopify Flow automations.',
    example: 'For high-volume brands and wholesalers who need features only Plus offers.',
    linkLabel: 'Ask if you need Plus',
    linkHref: '/contact',
  },
  {
    name: 'Shopify App Development',
    description:
      'Private apps that connect Shopify to your ERP, warehouse or accounting software, and custom features the app store does not offer. We also set up and theme the apps you already use.',
    example: 'For stores that run on spreadsheets between Shopify and Tally, Zoho or a warehouse system.',
    linkLabel: 'Scope an app',
    linkHref: '/contact',
  },
  {
    name: 'Migration to Shopify',
    description:
      'Products, variants, customers, order history and reviews moved from WooCommerce, Magento, OpenCart, Wix or a custom site, with a 301 redirect for every changed URL before the domain switches.',
    example: 'For brands whose old platform is slow, costly to patch or hard to extend.',
    linkLabel: 'Plan a migration',
    linkHref: '/contact',
  },
  {
    name: 'Headless Shopify (Hydrogen)',
    description:
      'A custom storefront built with Hydrogen, Shopify\'s React framework, while Shopify still runs products, orders and checkout. Full design freedom, more code to maintain.',
    example: 'For brands where a theme cannot do what the shopping experience needs.',
    linkLabel: 'Ask if headless fits',
    linkHref: '/contact',
  },
];

const SHOPIFY_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Scope',
    description:
      'A short call on your catalogue, channels, payment gateway, courier and accounting software. We recommend a Shopify plan and an architecture, then write a fixed price for each phase.',
  },
  {
    number: '02',
    title: 'Draft',
    description:
      'Before you sign, we build a draft theme on a handful of your real products, often inside your own Shopify store, so your team can browse it on their phones.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Liquid theme, product import, Razorpay with UPI, cards and COD rules, GST settings, Shiprocket or your courier, and any apps or integrations in the scope. Commits go to a repository in your name.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Real test orders through every payment method, shipping rates by pincode, tax lines on the invoice, and a Lighthouse speed check on mobile for home, collection, product and cart pages.',
  },
  {
    number: '05',
    title: 'Launch and support',
    description:
      'Domain switch, redirects, sitemap in Search Console, and a recorded handover. Defects in our build are fixed inside the build price for a cover period agreed before work starts.',
  },
];

const SHOPIFY_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Large Indian agency' },
  { label: 'Freelance Shopify developer' },
  { label: 'Theme you set up yourself' },
] as const;

const SHOPIFY_COMPARISON_ROWS = [
  {
    feature: 'Who writes the code',
    values: ['Our own senior Shopify developers', 'Varies: ask who will code', 'One person', 'You'],
  },
  {
    feature: 'Draft in your own store before you sign',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" label="Sometimes" />,
      <CompareIcon key="fr" kind="partial" label="Sometimes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed price per phase, in writing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" label="Varies" />,
      <CompareIcon key="fr" kind="partial" label="Varies" />,
      <CompareIcon key="tp" kind="yes" label="Theme price only" />,
    ],
  },
  {
    feature: 'Razorpay, UPI, COD rules, GST and courier tested with real orders',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" label="Depends on the person" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Shopify Plus, B2B and custom app work',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" label="Rarely" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Code and accounts in your company name',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" label="Ask" />,
      <CompareIcon key="fr" kind="partial" label="Ask" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Support after launch',
    values: ['Optional, each change quoted, no monthly minimum', 'Monthly retainer is common', 'If the person is free', 'Theme author forum'],
  },
  {
    feature: 'Typical time for a custom-theme store',
    values: ['3 to 5 weeks', 'Often longer', 'Varies', 'Days, with a stock look'],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Question sections (question H2s, each answered in 40 to 100 words)
───────────────────────────────────────────────────────────────────────────── */

const SHOPIFY_QUESTIONS = [
  {
    q: 'What does a Shopify developer do?',
    a: [
      'A Shopify developer builds and changes the code behind a Shopify store. That means the theme (written in Liquid, Shopify\'s template language), custom sections, app integrations, checkout changes on Shopify Plus, and private apps that link Shopify to an ERP, warehouse or accounting tool. A Shopify expert usually also advises on plan choice, apps, speed and conversion. Setting up products and settings is admin work. Writing and fixing code is developer work.',
    ],
  },
  {
    q: 'Should you hire Shopify developers, a Shopify expert or a Shopify development company?',
    a: [
      'Hire one Shopify developer for small, clear tasks: a section, a bug, an app setting. Hire a Shopify development company when the job spans design, code, payments, GST, couriers, migration and launch, because one person rarely covers all of it well and nobody covers them when they are away. Either way, ask who writes the code, ask for two live stores to test on your phone, and get the price in writing before work starts.',
    ],
  },
  {
    q: 'How much does it cost to have a Shopify website per month in India?',
    a: [
      'Shopify\'s own India page lists, on yearly billing: Basic ₹1,499 a month, Grow ₹5,599, Advanced ₹22,680, and Plus from ₹1,75,000. Monthly billing costs more (Basic is ₹1,994). If you use a third-party gateway instead of Shopify Payments, Shopify adds a fee of 2% on Basic, 1% on Grow and 0.6% on Advanced. Razorpay lists a 2% platform fee per domestic transaction plus GST on the fee. Paid apps, a theme and courier charges come on top. These are Shopify\'s and Razorpay\'s prices, not ours.',
    ],
    sources: [SRC.shopifyPricing, SRC.razorpay],
  },
  {
    q: 'Is Shopify still worth it in 2026?',
    a: [
      'For most Indian D2C brands, yes. Shopify runs hosting, security, checkout and updates, so your team spends time on products and marketing instead of servers. It is less suited to a business that needs deep custom logic on every order, or one that wants no monthly fee at all. The real question is fit: count your channels, catalogue size, B2B needs and the apps you would pay for, then compare the total with WooCommerce or a custom build.',
    ],
  },
  {
    q: 'What are the disadvantages of Shopify?',
    a: [
      'Four come up most. Monthly plan fees never stop. Paid apps add up, and each one can slow the store. Using a gateway like Razorpay instead of Shopify Payments adds a Shopify transaction fee on Basic, Grow and Advanced. And Shopify does not create a GST-compliant bill by itself, so Indian stores need an app or accounting link for proper invoices. A good build keeps the app list short and sets up invoicing on day one.',
    ],
    sources: [SRC.shopifyPricing, SRC.shopifyGst],
  },
  {
    q: 'Is Amazon better or Shopify?',
    a: [
      'They do different jobs. Amazon brings buyers who are already shopping, but it owns the customer, sets the fees and lets rivals sit next to your listing. Shopify gives you your own store, your own customer list and your own brand, but you must bring the traffic. Most Indian brands that grow do both: marketplaces for reach, Shopify for margin and repeat buyers, with one stock count shared between them.',
    ],
  },
  {
    q: 'Shopify or WooCommerce for an Indian business?',
    a: [
      'Pick Shopify when you want a managed platform, a fast launch and a team that edits the store without a developer. Pick WooCommerce when you already run WordPress, want full control of the code and hosting, or need custom logic Shopify makes hard. WooCommerce has no platform fee, but you pay for hosting, security and updates instead. We build on both and recommend one after looking at your catalogue and channels.',
    ],
  },
  {
    q: 'Does Shopify handle GST in India?',
    a: [
      'Partly. Shopify\'s India GST help page sets default tax rates you can adjust, and HSN codes go in each product\'s HS tariff code field. But Shopify says it does not create a GST-compliant bill on its own. So we set the tax rates for your state, add HSN codes to products, capture a buyer\'s GSTIN for B2B orders, and connect an invoicing app or your accounting software so every order has a proper GST invoice.',
    ],
    sources: [SRC.shopifyGst],
  },
  {
    q: 'When does a brand need a Shopify Plus company?',
    a: [
      'When you need what only Plus offers: checkout changes through Checkout Extensibility, B2B company accounts with their own price lists and payment terms, many storefronts from one admin, or high-volume automation with Shopify Flow. Plus starts at ₹1,75,000 a month on Shopify\'s India page, so it only pays off at real scale. A good Shopify Plus company will tell you if Advanced is enough.',
    ],
    sources: [SRC.shopifyPricing],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ (single source: the visible FAQ and the FAQPage schema both read this array)
───────────────────────────────────────────────────────────────────────────── */

const SHOPIFY_FAQ_CATEGORIES = [
  { key: 'choose',    label: 'Choosing a Shopify Partner' },
  { key: 'cost',      label: 'Cost & Timeline' },
  { key: 'india',     label: 'India: Payments, GST, Shipping' },
  { key: 'platform',  label: 'Platform & Features' },
  { key: 'migration', label: 'Migrations' },
  { key: 'trust',     label: 'Working With Us' },
];

const SHOPIFY_FAQ_ITEMS = [
  /* ── Choosing ── */
  {
    category: 'choose',
    question: 'Which is the best Shopify development company in India?',
    answer:
      'The best Shopify development company in India for you is the one whose own developers write the code, who quotes a fixed price in writing and who shows you working pages before you sign. FactoryJet does all three and builds a draft theme inside your own Shopify store before any contract. We are a registered Shopify Partner, rated 5.0 on Clutch (4 reviews) and 5.0 on GoodFirms (5 reviews).',
  },
  {
    category: 'choose',
    question: 'What are the top Shopify development companies in India?',
    answer:
      'Top lists usually rank firms by size or portfolio count. For a buyer, three checks matter more: who writes the code, whether the price is fixed in writing, and how the firm\'s live stores perform on a phone. Shopify\'s Partner Directory, Clutch and GoodFirms all list Indian Shopify agencies with reviews. FactoryJet is on all three checks, and we are happy to be compared on them.',
  },
  {
    category: 'choose',
    question: 'How do I hire a Shopify developer in India?',
    answer:
      'Write down what you need (new store, theme change, app, migration), ask each candidate for two live Shopify stores they built, test those stores on your phone, and ask who will write your code. Ask for a fixed price and a written scope. For anything beyond a small fix, ask to see a draft on your own products before you pay.',
  },
  {
    category: 'choose',
    question: 'What does a Shopify expert in India do differently from a developer?',
    answer:
      'A Shopify expert advises as well as builds: which plan, which apps to keep or drop, how to set up payments, GST and shipping for India, and what is slowing the store or losing carts. A developer writes the code. On our projects the same senior people do both, so the advice and the build come from one place.',
  },
  {
    category: 'choose',
    question: 'Is FactoryJet a Shopify Partner?',
    answer:
      'Yes. FactoryJet is a registered Shopify Partner. That lets us create development stores, work inside your store with collaborator access you control, and hand the store over to your account at launch.',
  },
  {
    category: 'choose',
    question: 'Which Shopify stores has FactoryJet built?',
    answer:
      'Recent Shopify work includes the European Garden store for Exaco, connected to QuickBooks Enterprise; a custom theme for DTF Virginia, a print shop where buyers build their own gang sheets; and a custom theme for Shop Holistico, a whole-food supplement brand with Subscribe & Save. We also build B2B stores on Commerceflo, our own platform, for wholesale distributors.',
  },

  /* ── Cost & Timeline ── */
  {
    category: 'cost',
    question: 'How much does a Shopify website cost in India?',
    answer:
      'Two costs add up. The build is a one-time price that depends on design, catalogue size, integrations and migration. Running costs come every month: Shopify\'s India page lists Basic at ₹1,499 a month on yearly billing, Grow at ₹5,599 and Advanced at ₹22,680, plus paid apps and gateway fees. FactoryJet quotes the build as a fixed price per phase after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'Is Shopify free in India?',
    answer:
      'No. After any trial Shopify offers, you need a paid plan to sell. Shopify\'s India pricing page lists the plans in rupees, with lower prices for yearly billing than monthly billing.',
  },
  {
    category: 'cost',
    question: 'How long does it take to build a Shopify store?',
    answer:
      'A store with a custom-designed theme takes 3 to 5 weeks. An advanced store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks. Headless Hydrogen builds take 8 to 14 weeks. The clock runs fastest when products, photos and gateway approval are ready.',
  },
  {
    category: 'cost',
    question: 'How is a Shopify project billed?',
    answer:
      'Phase by phase. Each phase has a written scope and a fixed price you sign before it starts, so the bill does not grow with hours. Bank transfer and UPI both work.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to run an ecommerce website on Shopify each month?',
    answer:
      'Add the Shopify plan, paid apps, any theme licence, the gateway fee per order (Razorpay lists 2% plus GST on the fee), the Shopify third-party transaction fee if you do not use Shopify Payments, and courier charges. Marketing is usually the biggest cost of all, and it is separate from the store.',
  },

  /* ── India ── */
  {
    category: 'india',
    question: 'Does Shopify work with Razorpay and UPI?',
    answer:
      'Yes. Razorpay\'s Shopify integration covers UPI, cards, net banking, wallets, EMI and pay-later in one checkout. PayU, Cashfree and PhonePe are options if your finance team already uses them. We set COD rules too, such as a value cap or prepaid-only for first orders.',
  },
  {
    category: 'india',
    question: 'Can you set up Shiprocket or Delhivery on my Shopify store?',
    answer:
      'Yes. Shiprocket gives you Delhivery, Blue Dart, Xpressbees and other couriers from one panel, with labels, rates at checkout and tracking updates. High-volume brands often add a direct courier contract later, which we can connect as well.',
  },
  {
    category: 'india',
    question: 'Can you reduce COD returns on Shopify?',
    answer:
      'Yes. Common fixes are a WhatsApp or SMS confirmation before a COD order ships, a small prepaid amount on large orders, COD switched off for pincodes with high refusal, and an exchange-first returns flow for fashion so buyers swap sizes instead of refusing parcels.',
  },
  {
    category: 'india',
    question: 'Can you add WhatsApp order updates and cart reminders to Shopify?',
    answer:
      'Yes, through a WhatsApp Business Platform provider such as Interakt, Wati or AiSensy. Typical flows are order confirmation, dispatch and delivery updates, COD confirmation and abandoned cart reminders, each with opt-in at checkout. For a WhatsApp assistant that answers questions, see our WhatsApp chatbot page.',
  },
  {
    category: 'india',
    question: 'Can my Shopify store be in Hindi or another Indian language?',
    answer:
      'Yes. Shopify Markets and translation apps such as Translate and Adapt run Hindi or other language versions next to English, each on its own URL. Product copy should be written or checked by a person, because machine translation gets size and material terms wrong.',
  },
  {
    category: 'india',
    question: 'Can an Indian brand sell abroad on Shopify?',
    answer:
      'Yes. Shopify Markets shows prices in the buyer\'s currency, and a cross-border courier ships the order with duties shown before payment. Brands selling to overseas stores can also get a separate trade login with their own prices.',
  },

  /* ── Platform ── */
  {
    category: 'platform',
    question: 'Do I need Shopify Plus, or will a standard plan work?',
    answer:
      'Most Indian D2C brands do well on Basic, Grow or Advanced. Plus is worth it when you need checkout changes, B2B company accounts with their own prices and terms, many storefronts or heavy automation. We tell you if Advanced is enough.',
  },
  {
    category: 'platform',
    question: 'Can you build a B2B wholesale store on Shopify?',
    answer:
      'Yes. Shopify Plus has B2B tools: company accounts, buyer logins, price lists, minimum quantities and payment terms. On other plans we use wholesale apps or a separate trade storefront that shares one inventory with retail.',
  },
  {
    category: 'platform',
    question: 'Do you build custom Shopify apps?',
    answer:
      'Yes. Most are private apps that link Shopify to an ERP, warehouse or accounting tool, or add a feature no public app offers. We have connected Shopify to QuickBooks Enterprise for a live client store.',
  },
  {
    category: 'platform',
    question: 'What is Shopify Hydrogen and should my brand use it?',
    answer:
      'Hydrogen is Shopify\'s React framework for a custom storefront, while Shopify still runs products, orders and checkout. It gives full design freedom but means more code to maintain. Most brands get what they need from a well-built theme.',
  },
  {
    category: 'platform',
    question: 'Which Shopify apps should an Indian D2C brand start with?',
    answer:
      'Keep the list short: a gateway (often Razorpay), a shipping app (often Shiprocket), a GST invoicing app or accounting link, reviews, and a WhatsApp or email tool. Each extra app adds a monthly fee and can slow the store, so add more only when the numbers ask for it.',
  },
  {
    category: 'platform',
    question: 'Can ChatGPT build me a Shopify store?',
    answer:
      'It can write product copy, suggest a layout and explain settings, and Shopify has its own AI tools. It cannot test payments, set GST correctly for your state, connect your courier or answer for the result. Use AI for drafts and a developer for the build.',
  },

  /* ── Migration ── */
  {
    category: 'migration',
    question: 'Can you migrate my WooCommerce or Magento store to Shopify?',
    answer:
      'Yes. We move products with variants and images, customers, order history and reviews from WooCommerce, Magento, OpenCart, Wix and custom sites. Every changed URL gets a 301 redirect before the domain switches, and payments and shipping are tested on the new store first.',
  },
  {
    category: 'migration',
    question: 'Will my Google rankings survive a move to Shopify?',
    answer:
      'They usually do when the move is careful. We list every URL that gets search traffic, map each to its new address with a 301 redirect, submit the new sitemap on launch day and watch Search Console afterwards. A short dip can happen. Missing redirects cause lasting losses.',
  },

  /* ── Trust ── */
  {
    category: 'trust',
    question: 'Can we see a draft before we sign?',
    answer:
      'Yes. We build a draft theme on a few of your real products, often inside your own Shopify store, so your team can browse it on their own phones. If it does not fit, there is no contract to cancel.',
  },
  {
    category: 'trust',
    question: 'Do I own my Shopify theme code?',
    answer:
      'Yes. The store, domain, gateway and app accounts are in your company name, and the theme code sits in a repository you own. Any Shopify developer can maintain it after us.',
  },
  {
    category: 'trust',
    question: 'What support do you offer after launch?',
    answer:
      'Defects in our build are fixed inside the build price during a cover period agreed before work starts. After that, support is optional: each change is quoted and approved first, with no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'How often do you deliver on time?',
    answer:
      '97% of our projects have been delivered on time or early. When a launch slips, it is usually waiting on product photos, content or payment gateway approval, so we agree those dates at the start.',
  },
];

const SHOPIFY_faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SHOPIFY_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SHOPIFY_howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://factoryjet.com/shopify-development#howto',
  name: 'How FactoryJet builds a Shopify store for an Indian brand',
  description: 'Five stages from scoping to launch. A custom-theme store takes 3 to 5 weeks.',
  step: SHOPIFY_JOURNEY_STAGES.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.description,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="shopify-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SHOPIFY_serviceSchema) }}
      />
      <script
        id="shopify-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SHOPIFY_faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SHOPIFY_howToSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Shopify Development', url: 'https://factoryjet.com/shopify-development' },
        ]}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Shopify Development', url: 'https://factoryjet.com/shopify-development' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="in" source="shopify_development_hero" />}
          eyebrow="SHOPIFY DEVELOPMENT COMPANY · INDIA"
          headline="Shopify Development Company in India: Hire Shopify Developers Who Build Stores That Sell"
          lead="FactoryJet's Shopify developers and experts design, build and support custom Shopify and Shopify Plus stores for Indian D2C and B2B brands. Razorpay, UPI, COD rules, GST settings and your courier are set up and tested with real orders. We build a draft in your own store before you sign."
          secondaryCta={{ label: 'See a draft of my store', modal: true as const, region: 'in' as const }}
          trustItems={[
            'Registered Shopify Partner',
            'Clutch 5.0 from 4 reviews',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT A FACTORYJET SHOPIFY BUILD INCLUDES
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.025em] text-fj-ink">
                One team for design, code, payments and launch.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { k: 'Theme', v: 'Designed for your products, coded in Liquid' },
                  { k: 'Payments', v: 'Razorpay or your gateway, UPI, cards, COD rules' },
                  { k: 'Tax', v: 'GST rates, HSN codes, invoices through an app or your books' },
                  { k: 'Shipping', v: 'Shiprocket or your courier, rates by pincode' },
                  { k: 'Ownership', v: 'Store, code and accounts in your company name' },
                ].map((row) => (
                  <li key={row.k} className="flex items-start justify-between gap-4 border-b border-fj-neutral-100 pb-3">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{row.k}</p>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">{row.v}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3 font-fj-body text-[0.875rem] font-semibold text-[#B23E13]">
                Custom-theme stores take 3 to 5 weeks. Fixed price per phase, in writing.
              </p>
            </div>
          }
        />

        {/* ── 2. ANSWER FIRST ──────────────────────────────────────────────── */}
        <AnswerFirst
          eyebrow="THE SHORT ANSWER"
          question="Which is the best Shopify development company in India?"
          answer={[
            'The best Shopify development company in India for your brand is one whose own developers write the code, who fixes the price in writing and who shows you working pages before you sign. FactoryJet does all three: we build a draft theme inside your own Shopify store before any contract, quote each phase at a fixed price, and hand over the code and accounts in your name.',
            'We are a registered Shopify Partner, rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews. Whoever you shortlist, open two of their live stores on your phone and try the checkout before you decide.',
          ]}
          factsTitle="FactoryJet at a glance"
          facts={[
            { k: 'Shopify status', v: 'Registered Shopify Partner' },
            { k: 'Reviews', v: 'Clutch 5.0 (4 reviews), GoodFirms 5.0 (5 reviews)' },
            { k: 'Track record', v: '500+ businesses served, 97% of projects on time or early, founded 2014' },
            { k: 'Timelines', v: 'Custom-theme store 3 to 5 weeks; advanced store 5 to 8; headless 8 to 14' },
            { k: 'Before you sign', v: 'A draft on your real products' },
          ]}
          links={[
            { label: 'Ecommerce development in India', href: '/ecommerce-development' },
            { label: 'Best Shopify development companies in India', href: '/blog/best-shopify-development-companies-india' },
            { label: 'Ecommerce website cost in India', href: '/blog/ecommerce-website-development-cost-india' },
          ]}
        />

        {/* ── 3. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 4. SERVICES ──────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="SHOPIFY DEVELOPMENT SERVICES"
          headline="Shopify Development Services for Indian D2C and B2B Brands"
          lead="From a first store to a Shopify Plus build with B2B accounts, we scope the work to your catalogue, channels and stage."
          sectors={SHOPIFY_SERVICES}
        />

        {/* ── 5. BUYER QUESTIONS ───────────────────────────────────────────── */}
        <QuestionAnswers
          eyebrow="WHAT INDIAN BUYERS ASK BEFORE HIRING A SHOPIFY DEVELOPER"
          intro="Short answers to the questions buyers type into Google and ask AI assistants. Prices quoted here are Shopify's and Razorpay's published prices, not ours."
          items={SHOPIFY_QUESTIONS}
        />

        {/* ── 6. INDIA STACK ───────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="SHOPIFY FOR INDIAN BUSINESSES"
          headline="Shopify Website Development Set Up for How India Pays and Ships"
          lead="An Indian store has to take UPI, handle COD without losing money on returns, raise GST invoices and quote honest delivery dates by pincode. We set up and test each of these before launch."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Shopify Liquid', 'Shopify Plus', 'Razorpay', 'UPI', 'COD rules', 'GST', 'Shiprocket', 'WhatsApp updates'].map((cap) => (
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
                <strong className="font-semibold text-fj-ink">Payments.</strong> Razorpay is our usual starting point
                because one account covers UPI, cards, net banking, wallets, EMI and pay-later. If you already use PayU,
                Cashfree or PhonePe, we connect that instead. COD runs on rules you choose.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">GST.</strong> We set tax rates for your state, add HSN
                codes, capture GSTIN for business buyers and connect an invoicing app or your accounting software, because
                Shopify does not create a GST-compliant bill by itself.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shipping.</strong> Shiprocket or your courier, with rates
                at checkout, labels, tracking messages and serviceable pincodes checked before launch.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Speed.</strong> Themes are designed phone first. We check
                Lighthouse on mobile for home, collection, product and cart pages and keep the app list short, because
                every app script slows the store.
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
                  Shopify plans in India (Shopify&apos;s prices, yearly billing)
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { plan: 'Basic', best: 'New stores testing the market', price: '₹1,499/mo' },
                  { plan: 'Grow', best: 'Growing brands with a small team', price: '₹5,599/mo' },
                  { plan: 'Advanced', best: 'Scale, deeper reports, lower third-party fee', price: '₹22,680/mo' },
                  { plan: 'Plus', best: 'B2B, many storefronts, checkout changes', price: 'From ₹1,75,000/mo' },
                ].map((item) => (
                  <div key={item.plan} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.plan}</p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#B23E13]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.price}
                      </p>
                    </div>
                    <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-500" style={{ letterSpacing: '0.04em' }}>
                      {item.best}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] leading-snug text-fj-neutral-600">
                  Source:{' '}
                  <a href={SRC.shopifyPricing.url} target="_blank" rel="noopener noreferrer" className="underline">
                    shopify.com/in/pricing
                  </a>
                  , checked {CHECKED_ON}. Monthly billing costs more. These are Shopify&apos;s fees, not FactoryJet&apos;s.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 7. PROOF ─────────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT SHOPIFY WORK"
          headline="Stores our Shopify developers built and support."
          cards={[
            {
              industry: 'Supplements · Shopify',
              title: 'Shop Holistico',
              description:
                'A custom Shopify theme for a brand selling whole-food vitamin D and calcium. Shoppers pick Subscribe & Save or buy the vitamin D and calcium bundle.',
              imageSrc: '/images/work/shopholistico-desktop.webp',
              stat1: 'Custom theme',
              stat2: 'Subscribe & Save',
            },
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison',
              description:
                'A wholesale distributor of artificial plants, flowers, home décor and LED lighting. Their B2B quote-to-cash store runs on Commerceflo, our own platform, not Shopify, with trade price tiers and account-based ordering.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'B2B ordering',
              stat2: 'Built on Commerceflo',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 8. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW TO CHOOSE"
          headline="Shopify Development Company vs Agency vs Freelancer vs Doing It Yourself"
          lead="Four ways to get a Shopify store built in India, compared on what decides the result."
          pullQuote={{
            stat: 'Draft first',
            caption:
              'We build a draft on your real products, often in your own Shopify store, before you sign anything.',
          }}
          columns={SHOPIFY_COMPARISON_COLUMNS}
          rows={SHOPIFY_COMPARISON_ROWS}
          footer="Agency and freelancer cells are general patterns, not claims about any one firm. Ask every firm you shortlist the same questions."
        />

        {/* ── 9. MID-PAGE CTA ──────────────────────────────────────────────── */}
        <MidPageCTA
          headline="See your store before you sign."
          sub="Send us your catalogue or your current store link. We will build a draft on a few of your real products and price each phase in writing."
          label="See a draft of my store"
        />

        {/* ── 10. PROCESS ──────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How Our Shopify Developers Take a Store From Scope to Launch"
          lead="Price agreed before design. Draft before contract. Real test orders before launch."
          stages={SHOPIFY_JOURNEY_STAGES}
          closingNote="5 STAGES · CUSTOM-THEME STORE IN 3 TO 5 WEEKS · RAZORPAY, UPI, GST TESTED · CODE IN YOUR NAME"
        />

        {/* ── 11. INDIA MARKET + CITY LINKS ────────────────────────────────── */}
        <CityContextSection
          eyebrow="SHOPIFY EXPERTS FOR BRANDS ACROSS INDIA"
          headline="Shopify Developers for Brands in Every Indian City"
          leadParagraphs={[
            "India's e-commerce market keeps growing. The India Brand Equity Foundation puts it at Rs 10,82,875 crore (US$ 125 billion) in 2024 and projects Rs 29,88,735 crore (US$ 345 billion) by 2030. More of that money is moving to brand-owned stores, where the brand keeps the customer and the margin.",
            'We work with brands remotely across India, so your city does not limit who builds your store. Each city page below covers what sellers there usually need: jewellery pricing in Mumbai, textile catalogues in Surat, B2B portals for Delhi and Ahmedabad traders, and more.',
          ]}
          bodySlot={
            <>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { label: 'Mumbai', slug: 'mumbai' },
                  { label: 'Delhi', slug: 'delhi' },
                  { label: 'Bangalore', slug: 'bangalore' },
                  { label: 'Hyderabad', slug: 'hyderabad' },
                  { label: 'Chennai', slug: 'chennai' },
                  { label: 'Pune', slug: 'pune' },
                  { label: 'Ahmedabad', slug: 'ahmedabad' },
                  { label: 'Surat', slug: 'surat' },
                  { label: 'Jaipur', slug: 'jaipur' },
                  { label: 'Kolkata', slug: 'kolkata' },
                  { label: 'Lucknow', slug: 'lucknow' },
                  { label: 'Chandigarh', slug: 'chandigarh' },
                  { label: 'Kochi', slug: 'kochi' },
                ].map(({ label, slug }) => (
                  <a
                    key={slug}
                    href={`/services/ecommerce-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <p className="mt-5 font-fj-body text-[0.9375rem] leading-relaxed text-fj-neutral-600">
                Building on something other than Shopify? See{' '}
                <a href="/ecommerce-development" className="font-semibold text-fj-ink underline underline-offset-4">
                  ecommerce development in India
                </a>{' '}
                or{' '}
                <a href="/whatsapp-chatbot" className="font-semibold text-fj-ink underline underline-offset-4">
                  WhatsApp chatbots for stores
                </a>
                .
              </p>
            </>
          }
          stats={[
            {
              value: 'US$ 345B',
              label: "India's projected e-commerce market by 2030, up from US$ 125 billion in 2024",
              sourceUrl: SRC.ibef.url,
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '₹1,499',
              label: 'a month for Shopify Basic in India on yearly billing',
              sourceUrl: SRC.shopifyPricing.url,
              sourceLabel: 'Shopify India pricing',
            },
            {
              value: '2%',
              label: 'Razorpay platform fee per domestic transaction, plus GST on the fee',
              sourceUrl: SRC.razorpay.url,
              sourceLabel: 'Razorpay pricing',
            },
          ]}
        />

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their store"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Shopify Development in India: Questions Buyers Ask"
          lead="From choosing the best Shopify development company in India to GST, COD and Shopify Plus, answered plainly."
          categories={SHOPIFY_FAQ_CATEGORIES}
          items={SHOPIFY_FAQ_ITEMS}
        />

        {/* ── 14. SOURCES ──────────────────────────────────────────────────── */}
        <SourceList
          checkedOn={CHECKED_ON}
          sources={[
            { ...SRC.shopifyPricing, note: 'plan prices in rupees and third-party transaction fees' },
            { ...SRC.shopifyGst, note: 'default GST settings, HSN codes, and the note that Shopify does not create a GST-compliant bill' },
            { ...SRC.razorpay, note: '2% platform fee on domestic transactions, plus GST on the fee' },
            { ...SRC.ibef, note: 'India e-commerce market size for 2024 and projection for 2030' },
          ]}
        />

        {/* ── 15. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO BUILD"
            headline="Hire Shopify Developers Who Show You the Store First"
            sub="Tell us what you sell, where you sell it and what slows you down. We will recommend a Shopify plan and payment setup, price each phase in writing, and build a draft on your own products before you sign."
            primaryCta={{ label: 'See a draft of my store', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price per phase. Draft before contract. Code and accounts in your name."
          />
        </div>
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
