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
  title: 'Ecommerce Development in Jaipur | FactoryJet',
  description:
    'Ecommerce development in Jaipur for gem and silver jewellers, block-print and blue pottery brands, and exporters. Shopify, UPI, global checkout. 7-day delivery.',
  keywords: [
    'ecommerce development company jaipur',
    'ecommerce website development jaipur',
    'shopify development jaipur',
    'woocommerce development jaipur',
    'online store development jaipur',
    'custom ecommerce development jaipur',
    'ecommerce website cost jaipur',
    'd2c website jaipur',
    'razorpay shopify jaipur',
    'gems jewellery ecommerce jaipur',
    'handicraft ecommerce jaipur',
    'rajasthani textiles ecommerce jaipur',
    'b2b ecommerce jaipur',
    'marble ecommerce jaipur',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Company in Jaipur | FactoryJet',
    description:
      'Jaipur ecommerce stores for Johari Bazaar jewellers, Sanganer and Bagru block printers, blue pottery makers and wholesale exporters. 7-day delivery.',
    url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
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
    title: 'Ecommerce Development Jaipur | FactoryJet',
    description:
      'Jaipur ecommerce: gems, block print and craft stores with global checkout, UPI and GST.',
    images: ['https://factoryjet.com/images/services/card-ecommerce.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-development/jaipur',
    languages: ecommerceCityAlternatesIN['jaipur'],
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/jaipur#webpage',
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Development Jaipur',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development',
  areaServed: {
    '@type': 'City',
    name: 'Jaipur',
    '@id': 'https://www.wikidata.org/wiki/Q66485', // Wikidata label: Jaipur (capital of Rajasthan, India)
  },
  description:
    'Ecommerce development for Jaipur businesses: Shopify and WooCommerce stores for gemstone and silver jewellers, block-print textile and blue pottery brands, wholesale catalogues for overseas boutiques, GST invoicing. Lighthouse 95+.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet Ecommerce Development Jaipur',
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
  image: 'https://factoryjet.com/logo.png',
  description:
    'Ecommerce development company serving Jaipur jewellers, craft brands and exporters. Shopify, WooCommerce and custom builds with Razorpay, UPI, COD, international checkout and GST invoicing. 7-day delivery.',
  areaServed: [
    'Vaishali Nagar', 'Malviya Nagar', 'C-Scheme', 'Mansarovar', 'Jagatpura',
    'Sanganer', 'Bani Park', 'Tonk Road',
  ],
  
};

/* ─────────────────────────────────────────────────────────────────────────────
   Journey Stages
───────────────────────────────────────────────────────────────────────────── */

const JAIPUR_ECOM_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Markets and Platform',
    description:
      'We map where your buyers are: Rajasthan, the rest of India, overseas retail or overseas boutiques. That sets the currencies, couriers, wholesale rules and the platform we recommend.',
  },
  {
    number: '02',
    title: 'Design With Your Craft',
    description:
      'Figma screens built with your real products: close-ups, colour variants, maker notes and gift options. You approve layouts and trust details, including certificates, before development.',
  },
  {
    number: '03',
    title: 'Build, Payments and Shipping',
    description:
      'Store build, Razorpay for UPI, cards and COD, international payments, GST invoices with HSN codes, Shiprocket for India and a cross-border courier for exports, plus catalogue upload.',
  },
  {
    number: '04',
    title: 'Test Orders, Home and Abroad',
    description:
      'We test orders as an Indian buyer and an overseas buyer, check duty messages, invoices and labels, and run Lighthouse on mobile against a 90+ score.',
  },
  {
    number: '05',
    title: 'Launch and Handover',
    description:
      'Domain switch without downtime, sitemap submitted, code and logins handed over, team trained. Defects in our work are fixed at no charge within the agreed cover period.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────────── */

const JAIPUR_ECOM_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'platform',  label: 'Platform & Tech' },
  { key: 'india',     label: 'India-Specific' },
  { key: 'seo',       label: 'Speed & SEO' },
  { key: 'trust',     label: 'Process & Ownership' },
];

const JAIPUR_ECOM_FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How long will it take to launch my Jaipur store?',
    answer:
      'A standard Shopify or WooCommerce store goes live in 7 days once products, photos and gateway approval arrive. A custom theme takes 3 to 5 weeks. Wholesale catalogues for overseas boutiques take 5 to 8 weeks, and fully custom platforms take 8 to 14 weeks.',
  },
  {
    category: 'pricing',
    question: 'What does an ecommerce store cost in Jaipur?',
    answer:
      'It depends on scope. For Jaipur businesses, the largest factors are overseas selling in several currencies, wholesale rules for boutiques, the number of products and colourways, and certificate handling for stones. We quote a fixed price in writing after a short call.',
  },
  {
    category: 'pricing',
    question: 'How do I pay for the project?',
    answer:
      'Phase by phase. Each phase, such as the retail store and then a wholesale portal, is scoped and priced in writing, and you sign it before work starts. Pay by NEFT, RTGS or UPI. Nothing is billed by the hour.',
  },
  {
    category: 'pricing',
    question: 'Can I see the store working before I sign?',
    answer:
      'Yes. We build a draft with a few of your real products and walk you through it, from product page to payment. You can test it as a buyer would. If it does not show your craft well, you owe us nothing.',
  },
  {
    category: 'platform',
    question: 'Which platform suits a block-print or blue pottery brand?',
    answer:
      'Shopify for most. It handles colours, sizes and sets as variants, shows prices in overseas currencies through Shopify Markets, and takes UPI, COD and international cards. WooCommerce fits if you already have a WordPress site with lots of craft stories.',
  },
  {
    category: 'platform',
    question: 'Can overseas boutiques order wholesale from my store?',
    answer:
      'Yes. Approved boutiques log in to see trade prices, minimum order quantities and lead times, request quotes for custom colours or sizes, and pay by card or bank transfer. Retail buyers never see the trade prices.',
  },
  {
    category: 'platform',
    question: 'Do you set up UPI, cards and COD?',
    answer:
      'Yes. Razorpay is our default gateway, covering UPI, cards, net banking, wallets and EMI in India, with international cards for approved accounts. PayPal or Stripe can be added for overseas buyers. COD can be limited by order value.',
  },
  {
    category: 'platform',
    question: 'Can gem dealers sell online safely?',
    answer:
      'Yes. Each stone gets a certificate image, carat and cut details and close-up video. High-value pieces can be made enquiry-only, with insured shipping and COD switched off. Trade buyers see a login-only catalogue with dealer rates.',
  },
  {
    category: 'india',
    question: 'How does GST work on a Jaipur store?',
    answer:
      'Orders within Rajasthan carry CGST and SGST, and orders from other states carry IGST. Exports are handled as zero-rated supplies with the right invoice format. The store prints HSN codes and lets business buyers add a GSTIN.',
  },
  {
    category: 'india',
    question: 'Which couriers work for Jaipur shipments?',
    answer:
      'Shiprocket for Indian orders, with Delhivery, Blue Dart, Xpressbees and others in one account and returns handled. For overseas orders we connect a cross-border courier such as DHL, FedEx or Shiprocket X. Fragile pottery and marble need packaging rules and insurance set per product.',
  },
  {
    category: 'india',
    question: 'Can my store be in Hindi?',
    answer:
      'Yes. A Hindi version can run next to English on its own URL. Overseas stores can also add French or German storefronts if you sell to European boutiques. We test fonts on budget phones and recommend a person writes the product text.',
  },
  {
    category: 'india',
    question: 'How do I handle colour variation in hand-made products?',
    answer:
      'Say it clearly on every product page and in the cart: hand-printed and hand-glazed pieces vary slightly. We add a short note, a photo showing two real pieces side by side, and a returns policy that explains how variation is treated.',
  },
  {
    category: 'seo',
    question: 'Will my store rank for Jaipur and craft searches?',
    answer:
      'It can. We set up product and breadcrumb schema, clean titles, canonical tags and a sitemap from launch. Craft and process pages help you rank for searches like block print bedsheets. A showroom in C-Scheme or Johari Bazaar gets linked to your Google Business Profile.',
  },
  {
    category: 'seo',
    question: 'Do you test the store speed?',
    answer:
      'Yes. Before handover we test the main pages on mobile with Lighthouse and share the report. We aim for 90+ with LCP under 2.5 seconds, which takes careful work on image-heavy craft stores.',
  },
  {
    category: 'seo',
    question: 'Can you speed up an existing slow store?',
    answer:
      'Yes. We audit the slowest pages, find what slows them, such as large photos, unused apps or heavy themes, and give you ranked fixes at a fixed price. Often a handful of changes recovers most of the speed.',
  },
  {
    category: 'seo',
    question: 'Will close-up craft photos slow the site?',
    answer:
      'Not when they are prepared properly. We serve modern formats sized for each screen, load zoom images only when tapped and lazy-load photos further down the page. You keep the detail without the wait.',
  },
  {
    category: 'trust',
    question: 'Do I own the store and the code?',
    answer:
      'Yes. The store, domain, payment and courier accounts are in your business name, and you get the code repository and every admin login. Hosting and apps can bill your account at cost. You are free to change developers whenever you wish.',
  },
  {
    category: 'trust',
    question: 'What happens at handover?',
    answer:
      'We train your team on adding products, updating prices, handling domestic and overseas orders and managing wholesale accounts. You get a handover file with every login, integration contacts and a first-month checklist.',
  },
  {
    category: 'trust',
    question: 'What support do you offer after launch?',
    answer:
      'Defects in our build are fixed within the build price during a cover period agreed at the start. After that, support is optional. Changes are quoted one at a time and approved first, with no monthly minimum.',
  },
  {
    category: 'trust',
    question: 'Can my workshop staff update the store?',
    answer:
      'Yes. On Shopify, adding products, updating stock and prices, and processing orders need no coding. We set up staff accounts and record short videos of the tasks they repeat, such as adding a new print in several colours.',
  },
  {
    category: 'pricing',
    question: 'Who is the best ecommerce development company in Jaipur?',
    answer:
      'Before choosing an ecommerce website development company in Jaipur, ask who writes the code, whether the price is fixed in writing and whether you own the store at the end. FactoryJet answers all three plainly and builds a draft before you sign. Ask every ecommerce solution company in Jaipur the same three questions.',
  },
  {
    category: 'pricing',
    question: 'Should I hire an ecommerce developer in Jaipur or an agency?',
    answer:
      'A single developer can make a basic store. Selling crafts at home and abroad also needs design, payments in several currencies, export shipping, GST and SEO. A small senior team covers it at a fixed price. If you hire an ecommerce developer in Jaipur, check two of their stores on your phone first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: JAIPUR_ECOM_FAQ_ITEMS.map((item) => ({
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
  '@id': 'https://factoryjet.com/services/ecommerce-development/jaipur#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ecommerce-development/jaipur',
};

export default function JaipurEcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="jaipur-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="jaipur-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="jaipur-ecom-local-schema"
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
          { name: 'Jaipur', url: 'https://factoryjet.com/services/ecommerce-development/jaipur' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Development', url: 'https://factoryjet.com/services/ecommerce-development' },
          { name: 'Jaipur', url: 'https://factoryjet.com/services/ecommerce-development/jaipur' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="services_ecommerce_development_jaipur_hero" />}
          eyebrow="ECOMMERCE DEVELOPMENT · JAIPUR"
          headline="Ecommerce Development in Jaipur: Store Live in 7 Days"
          lead="FactoryJet builds online stores for Jaipur gem and silver jewellers, block-print and blue pottery brands, and wholesale catalogues for exporters who sell to boutiques abroad. UPI and COD for Indian buyers, cards and local currency for overseas ones, Lighthouse 90+. 7-day delivery."
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
          description="Stores for craft brands, jewellers and exporters in India, the US, the UK and the UAE. Jaipur makers get a fixed price per phase, every file and login handed over, and 7-day delivery on standard stores."
        />

        {/* ── 4. PLATFORM EXPLANATION ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="ECOMMERCE DEVELOPMENT · JAIPUR"
          headline="The Right Store for a Jaipur Maker"
          lead="A Johari Bazaar emerald dealer, a Bagru block printer selling bedsheets to Europe and a blue pottery studio shipping gifts across India each need a different store. We look at your buyers and products first, then propose a platform and a fixed price."
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
                Jaipur products carry a story: a hand-carved block, a natural dye, a stone cut in the old city. Online, that story is most of the sale. A buyer in Paris or Pune cannot touch the fabric, so the photos, the maker details and the care notes have to do the work a shopkeeper does in Johari Bazaar. A generic template hides all of it.
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
                  A hand-made product needs a page that shows the hand that made it.
                </p>
              </div>

              <p>
                We design Jaipur stores around the craft. Close-up photos of the print and the glaze, maker and process notes, colour variation explained up front, and certificates for stones. Checkout offers UPI and COD at home and cards in local currency abroad. Wholesale buyers get a login, minimum order quantities and a quote request for custom runs.
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
                  Jaipur platform guide
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
                  We suggest the platform your craft needs, not the costliest option.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Jaipur Makers Work With FactoryJet"
          lead="Many Jaipur businesses have been burned by a site that looked fine and sold nothing abroad. We price each phase in writing, put 7-day delivery for standard stores into the agreement, and build a draft on your own products before you pay us anything."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing.',
              body: 'Standard stores for Jaipur brands go live in 7 days once products, photos and gateway approval are ready. The date sits in the agreement. We have delivered on time on 97% of builds.',
            },
            {
              icon: '📱',
              title: 'Craft that reads on a small screen.',
              body: 'Your overseas buyer and your Indian buyer both shop on phones. We design at 375px first, with zoomable photos of the print and glaze, clear size and colour notes, and a short checkout in their currency.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: 'Each phase has a written scope and fixed price before work starts. No hourly billing, no surprise bill at launch. Support after go-live is optional and quoted per change.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Workshop to Online Store in Jaipur"
          lead="We agree the platform and markets, design with your products, and test domestic and overseas orders before launch."
          stages={JAIPUR_ECOM_STAGES}
          closingNote="5 STAGES · INDIA + OVERSEAS CHECKOUT · UPI + CARDS + GST · LIGHTHOUSE 90+ · EVERY FILE HANDED OVER"
        />

        {/* ── 7. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="JAIPUR ECOMMERCE MARKET"
          headline="What Jaipur Sells to the World"
          leadParagraphs={[
            "Jaipur is one of the world's best-known centres for coloured gemstones, and Johari Bazaar and the old city workshops cut, set and trade emeralds and other stones for buyers at home and abroad. Silver and kundan jewellery sell alongside them. Online, this trade needs certificates, close-up video and insured shipping before a buyer will pay.",
            "The city's textile crafts are just as famous. Sanganer and Bagru print fabric by hand with wooden blocks, and leheriya and bandhej dyeing are sold in Bapu Bazaar next to mojaris and quilts. Blue pottery, carpets and dhurries, and marble work from Makrana round out a craft economy that already ships to boutiques in Europe, the US and Australia, often through email and spreadsheets.",
            'That is the opportunity. A Jaipur maker who moves wholesale orders into a portal and adds a retail store with global checkout can reach buyers directly. Tourists who visited once can reorder from home. Festive peaks around Teej, Diwali and wedding season drive domestic orders. We build for both markets and keep the store fast on a phone.',
          ]}
          stats={[
            {
              value: '23%',
              label: "India's projected ecommerce market growth rate, year over year through 2030",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '23%',
              label: "India's projected ecommerce market growth rate, year over year through 2030",
              sourceUrl: 'https://www.ibef.org/industry/ecommerce',
              sourceLabel: 'India Brand Equity Foundation',
            },
            {
              value: '500M+',
              label: "UPI transactions per month in India: the payment rail your store must support",
              sourceUrl: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
              sourceLabel: 'NPCI UPI Statistics',
            },
          ]}
        />

        {/* ── 8. INDUSTRIES (DARK) ─────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="JAIPUR × ECOMMERCE"
          headline="Jaipur Sectors We Build For"
          lead="From Johari Bazaar gem dealers to Bagru printers and Makrana marble carvers, these six sectors cover most of the Jaipur work we scope."
          sectors={[
            {
              name: 'Gems & Jewellery',
              description:
                'Gemstone and silver jewellers need certificate display, carat and cut details, close-up video, insured shipping and a login-only catalogue for trade buyers.',
              example:
                'Emerald and coloured stone dealers, silver and kundan jewellers, Sitapura jewellery exporters.',
            },
            {
              name: 'Block Print & Textiles',
              description:
                'Sanganer and Bagru printers sell bedsheets, quilts, kurtas and fabric by the metre. Stores need colour variation notes, fabric care, size charts and wholesale ordering.',
              example:
                'Block print studios, quilt and bedding brands, leheriya and bandhej sellers.',
            },
            {
              name: 'Blue Pottery & Home Decor',
              description:
                'Fragile, hand-made goods need careful product photos, breakage-safe packaging rules, gift messages and clear delivery dates.',
              example:
                'Blue pottery studios, home decor brands, carpet and dhurrie makers.',
            },
            {
              name: 'Mojaris & Fashion',
              description:
                'Bapu Bazaar mojaris and Rajasthani fashion sell to brides, tourists and gift buyers. Stores need size help for hand-made footwear and exchange flows.',
              example:
                'Mojari makers, Rajasthani ethnic wear labels, bridal accessory sellers.',
            },
            {
              name: 'Marble & Stone Craft',
              description:
                'Makrana marble and stone craft sells to homes, temples and designers. Stores need custom size requests, quote forms, freight options and export invoices.',
              example:
                'Marble idol and inlay makers, stone furniture brands, architectural stone suppliers.',
            },
            {
              name: 'Rajasthani Food & Spices',
              description:
                'Spices, pickles and sweets ship across India and to the diaspora. Stores need FSSAI details, shelf-life notes and festival gift boxes.',
              example:
                'Spice and masala brands, pickle makers, Rajasthani sweet and namkeen shops.',
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
          headline="What founders say once their store goes live"
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="What Jaipur Makers Ask Before They Sign"
          lead="Answers to the questions Jaipur jewellers, printers and exporters ask most, from overseas payments to wholesale minimums and GST."
          categories={JAIPUR_ECOM_FAQ_CATEGORIES}
          items={JAIPUR_ECOM_FAQ_ITEMS}
        />

        {/* ── 13. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO LAUNCH"
          headline="Your Jaipur Store, Live in 7 Days"
          sub="FactoryJet has worked with 500+ businesses across India, the US, the UK and the UAE. Tell us what you make and where your buyers are. We will recommend a platform, put the price per phase in writing and show you a working draft before you sign."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price per phase. 7-day delivery. UPI, COD and global checkout. The code and every account belong to you."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
