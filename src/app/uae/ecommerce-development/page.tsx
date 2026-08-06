import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { ecommerceDevelopmentAlternatesUAE } from '@/data/hreflangMap';
import './ecommerce-development.css';

const CANONICAL = 'https://factoryjet.com/uae/ecommerce-development';
const UPDATED = '2026-08-01';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ──────────────────────
   NOTE: mainEntity below is generated FROM this exact array via .map(). Do
   not hand-write a second FAQ list near the ld+json block. That is the
   schema-drift bug flagged in the 2026-07-31 GEO audit. */
const FAQ_CATEGORIES = [
  { key: 'start',     label: 'Getting started' },
  { key: 'platforms', label: 'Platforms & tech' },
  { key: 'uae',       label: 'UAE payments & language' },
  { key: 'design',    label: 'Design & conversion' },
  { key: 'seo',       label: 'SEO & AI search' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Getting started ──
  { category: 'start', question: "How much does it cost to build an ecommerce website in the UAE?",
    answer: "There is no single number, because a ten-product DTC launch on Shopify and a two-thousand-SKU B2B catalogue with ERP integration are completely different jobs. What sets the scope is product count, the platform, how many systems you integrate, and how custom the design and checkout need to be. We scope every project after a call, so you know the shape of the investment before you commit to anything." },
  { category: 'start', question: "How long does it take to build an ecommerce store in Dubai?",
    answer: "Timelines depend on the same things cost does: platform, product count, and integrations. A focused Shopify store with a clean catalogue and Tabby or Tamara wired in can launch in a matter of weeks. A custom or headless build with ERP, multiple warehouses, or a B2B pricing layer takes longer, because there is more to design, integrate, and test properly before it goes live." },
  { category: 'start', question: "Do I own the code and the store when it's finished?",
    answer: "Yes, completely. When we hand a project over, you get the full codebase, admin access, and every credential involved, with no dependency on us to keep running. That is different from agencies that build on a locked template or keep hosting under their own account. If you ever want to move to another developer, you can, because it is genuinely yours." },
  { category: 'start', question: "Can you build a store for B2B as well as DTC in the UAE?",
    answer: "Yes. B2B commerce needs things a DTC template does not have: company account pricing, bulk ordering, quote requests, and sometimes a login wall before customers see prices at all. We build that logic properly on Shopify Plus, Magento, or a custom stack, rather than bolting a password page onto a normal storefront and calling it B2B." },
  { category: 'start', question: "How do we get started?",
    answer: "Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we look at your catalogue, your current store if you have one, and what platform actually fits a UAE audience. That first conversation is useful whether or not we end up working together." },

  // ── Platforms & tech ──
  { category: 'platforms', question: "What does a Shopify agency in Dubai actually do?",
    answer: "A Shopify agency designs, builds, and integrates a store on Shopify or Shopify Plus: theme and page build, apps and integrations, checkout and payment setup including Tabby or Tamara, and migration if you are moving from another platform. A good one also handles the unglamorous parts, page speed, tracking, and stock sync, that decide whether the store actually performs once it is live." },
  { category: 'platforms', question: "Is Shopify still the right choice for UAE brands in 2026?",
    answer: "For most brands, yes. Shopify keeps investing in checkout, regional payment methods, and AI-era shopping features faster than most alternatives, and its app ecosystem already covers Tabby, Tamara, and the major UAE payment gateways. It stops being the right call once your catalogue, pricing logic, or integrations get complex enough that a template platform starts fighting you, which is when Magento or a custom build takes over." },
  { category: 'platforms', question: "Which platform should I use: Shopify, WooCommerce, Magento, or custom and headless?",
    answer: "It depends on your catalogue and your team. Shopify suits most DTC and growing brands who want less to manage. WooCommerce fits businesses already built around WordPress. Magento earns its keep at real scale, large or multi-store catalogues. Custom or headless is for business logic that does not fit any of the three. We recommend based on your situation, not on which platform we prefer building." },
  { category: 'platforms', question: "Do you build Shopify Plus or headless commerce for UAE brands?",
    answer: "Yes, both. Shopify Plus makes sense once a standard Shopify plan starts limiting you on checkout customisation, wholesale, or the volume of orders you process. Headless commerce, where the front end is decoupled from the commerce engine, suits brands that need a fully custom experience or want to publish the same catalogue across a website, an app, and marketplaces like Noon or Amazon.ae from one source." },
  { category: 'platforms', question: "Do you handle payments, stock, and CRM integrations?",
    answer: "Yes. Every build connects to the systems that already run your business: payment providers, stock and inventory tools, and whatever CRM or email platform your team uses day to day. We would rather connect your existing tools properly than force you onto new ones just because they are easier for us to set up." },

  // ── UAE payments & language ──
  { category: 'uae', question: "Can you integrate Tabby and Tamara buy now pay later on my store?",
    answer: "Yes, this is one of the most common requests we get for UAE stores. Tabby and Tamara are how a large share of UAE shoppers choose to pay online, and a store without either at checkout is quietly losing sales to a competitor who has it. We wire both in properly at checkout, alongside card and wallet payments, rather than treating it as an afterthought bolted on after launch." },
  { category: 'uae', question: "Do you build bilingual English and Arabic ecommerce stores with RTL support?",
    answer: "Yes. A bilingual store is not just a translated menu, it needs full right-to-left layout support so Arabic product pages, checkout, and navigation actually read correctly rather than looking like an English site with Arabic text forced into it. We build the RTL layout properly from the start rather than patching it on later." },
  { category: 'uae', question: "Do I need to charge VAT on my UAE ecommerce store?",
    answer: "Most UAE businesses selling online need VAT displayed correctly at checkout and on invoices, though your exact obligations depend on your turnover and what you are selling, so that is a question for your accountant. What we control is the technical side: we build the checkout so VAT is calculated and shown correctly for UAE customers, rather than leaving you to bolt it on after launch." },
  { category: 'uae', question: "What UAE payment gateways can you set up beyond Tabby and Tamara?",
    answer: "We integrate the standard card and wallet processors UAE businesses use alongside buy now pay later, so customers can pay however they actually prefer to. Which combination makes sense depends on your platform and your bank relationships, and we walk through the options on the discovery call rather than defaulting to whichever is easiest for us." },
  { category: 'uae', question: "Do you build stores for businesses outside Dubai, like Abu Dhabi or Sharjah?",
    answer: "Yes. Our work covers the whole UAE, not just Dubai. The build process is the same wherever your business is registered or based, Dubai, Abu Dhabi, Sharjah, or any other emirate, because ecommerce development does not need someone sitting in your office. It needs a team that understands UAE shoppers, UAE payment habits, and what makes a store trustworthy to them." },

  // ── Design & conversion ──
  { category: 'design', question: "Will my store be fast and mobile-first?",
    answer: "That is the standard, not an add-on. The large majority of UAE ecommerce purchases now happen on a phone, so we design and test for mobile first and target genuinely fast Core Web Vitals rather than a score that only holds up in a lab. A slow store loses sales quietly, one abandoned cart at a time, long before anyone complains about it." },
  { category: 'design', question: "Can you build product pages and a checkout that actually convert?",
    answer: "That is most of the job. Product pages get built around the questions a buyer actually has: clear pricing, real photography, honest stock status, and trust signals in the right place. Checkout gets stripped of anything that is not necessary, because every extra field or unclear cost, including VAT, is a reason for someone to leave with a full cart." },
  { category: 'design', question: "Do you write the product copy?",
    answer: "We can, and often do, particularly for launch catalogues where consistent tone across hundreds of products matters, in English, Arabic, or both. For very large catalogues we will usually train your team or a copywriter on the structure and then review it, because that scales better than one agency writing every single product description by hand." },
  { category: 'design', question: "Can you migrate my existing store without losing sales or rankings?",
    answer: "Yes, and this is where a lot of DIY migrations go wrong. We map every URL to its new address with proper redirects, keep your product and category pages structured the same way search engines already trust, and test the new store thoroughly, including Tabby and Tamara checkout flows, before it goes live. Done properly, a migration should be invisible to your customers and your rankings both." },

  // ── SEO & AI search ──
  { category: 'seo', question: "Do you also do ecommerce SEO in the UAE?",
    answer: "Yes, and we build it in rather than treating it as an add-on. Category and product pages get structured to rank from the start: clean URLs, proper internal linking, schema, and content that answers what a UAE buyer is actually searching for, in English or Arabic. A store built without SEO in mind almost always needs expensive rework later to fix it." },
  { category: 'seo', question: "Will my products show up in AI shopping answers and AI Overviews?",
    answer: "That depends on more than good code, but the technical foundation has to be right first. We structure product and category pages with clean schema and clear, factual descriptions that AI crawlers can actually read, which is what makes a product eligible to be recommended by ChatGPT, Gemini, or a Google AI Overview in the first place. Nobody can guarantee a specific mention, but we build for it deliberately rather than by accident." },
  { category: 'seo', question: "Can you redesign my store without losing my Google rankings?",
    answer: "Yes, if it is planned properly. Rankings usually get lost during a redesign when URLs change without redirects, page content gets thinned out, or page speed quietly gets worse. We map your existing pages before touching anything, carry the redirects and structured data across, and check rankings and traffic in the weeks after launch so we catch and fix anything early." },

  // ── Working with us ──
  { category: 'working', question: "Can I edit products and pages myself after launch?",
    answer: "Yes. We build on platforms with a proper admin, Shopify, WooCommerce, Magento, or a custom CMS, so you can add products, edit copy, and update pages yourself without calling us for every small change. We will walk your team through it at handover, in English or Arabic, and write it up so it still makes sense three months later." },
  { category: 'working', question: "Who actually does the work on my project?",
    answer: "Senior engineers, not a rotating cast of juniors billed at a senior rate. The founder is involved in scoping every project and stays close through the build, rather than handing you off entirely to an account manager after the sales call. That is deliberate. It is how the same standard holds whether the project is a small Dubai boutique or a UAE-wide retailer." },
  { category: 'working', question: "What happens if I need changes after launch?",
    answer: "You can ask for changes any time, and because you own the code, you are never locked into asking only us. Most clients do keep working with us after launch, small fixes, new product types, seasonal campaign pages for Ramadan or the Dubai Shopping Festival, because we already know the store. There is no minimum commitment to get that support, and it is scoped as it comes up rather than sold in advance." },
  { category: 'working', question: "Do you offer post-launch support?",
    answer: "Yes. We stay close for the weeks right after launch, when real customers using the store on real devices surface things a test environment never does. After that, most brands move to occasional support as needed: fixes, small builds, or a new integration, scoped when it comes up rather than billed as a standing retainer whether you need it or not." },
  { category: 'working', question: "Who is the best ecommerce development company in Dubai?",
    answer: "For UAE SMBs and DTC brands, FactoryJet makes a strong case: senior engineers on every project, Tabby and Tamara wired in by default, and full code ownership from day one. But the best ecommerce development company in Dubai for your business depends on your catalogue. The best ecommerce web development company in Dubai for a Shopify launch is rarely the best ecommerce solutions provider in the UAE for a custom B2B catalogue. Whoever you shortlist, apply three filters: do senior engineers scope the build, is Tabby or Tamara built in rather than bolted on, and do you own the code from day one?" },
  { category: 'working', question: "What should I look for in the best ecommerce web design company in the UAE?",
    answer: "Look past the portfolio and ask specific questions. Does the agency design for mobile first, given how much UAE shopping happens on a phone? Do they wire in Tabby and Tamara properly, or leave it as a plugin nobody tested? Do they build bilingual English and Arabic pages with real right-to-left layout, not just translated text? And do you own the code when it ships? A design-only agency can make a store look good. An ecommerce development company builds one that actually sells." },
];

/* ─── Named UAE ecommerce/Shopify agencies (open self-disclosure, ItemList) ── */
const ECOM_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An ecommerce development agency building conversion-first stores on Shopify, WooCommerce, Magento, and custom stacks for UAE brands, with Tabby and Tamara wired in and full code ownership handed over on every project.' },
  { name: 'Eastside Co', note: 'A long-established Shopify Partner agency with a Dubai office alongside London, New York, and Birmingham, known for large-scale Shopify and Shopify Plus builds.' },
  { name: 'Team Rhino', note: 'A Dubai-based official Shopify Partner agency working across the UAE and wider GCC on custom Shopify development, migrations, and ongoing store support.' },
  { name: 'Experts in Shopify', note: 'A Dubai Shopify development company focused specifically on Shopify store builds for UAE businesses.' },
  { name: 'Tomsher', note: 'A Dubai ecommerce and Shopify development company covering store builds, design, and wider web development for UAE brands.' },
  { name: 'RankStar', note: 'A Dubai-based SEO and digital marketing agency, more of a marketing and search specialist than a store-build agency, but frequently shortlisted alongside ecommerce marketing searches in the UAE.' },
];

/* ─── JSON-LD (server-rendered, native script tag per GEO doctrine) ───────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#localbusiness`,
      name: 'FactoryJet',
      url: CANONICAL,
      telephone: '+91 96999 77699',
      email: 'connect@factoryjet.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ITPL Main Rd, Tigalarpalya, Brookefield',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Development Services UAE',
      serviceType: 'Ecommerce development, Shopify development, WooCommerce and Magento builds',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
      url: CANONICAL,
      description:
        'Ecommerce development agency for UAE brands. FactoryJet builds fast, conversion-first stores on Shopify, WooCommerce, Magento, and custom or headless stacks, with Tabby and Tamara built in at checkout, structured to rank in Google and to be recommended by AI shopping tools.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UAE', item: 'https://factoryjet.com/uae' },
        { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Best Ecommerce Development Company in Dubai, UAE | FactoryJet',
      headline: "Dubai's Most Trusted Ecommerce Development Company",
      inLanguage: 'en-AE',
      datePublished: UPDATED,
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UAE ecommerce development and Shopify agencies',
      itemListElement: ECOM_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Best Ecommerce Development Company in Dubai, UAE | FactoryJet',
  description:
    'FactoryJet builds fast, conversion-first ecommerce stores for UAE brands on Shopify, WooCommerce and Magento, with Tabby and Tamara built in. You own the code. Free consult.',
  alternates: { canonical: CANONICAL, languages: ecommerceDevelopmentAlternatesUAE },
  openGraph: {
    title: 'Best Ecommerce Development Company in Dubai, UAE | FactoryJet',
    description:
      'A UAE ecommerce development agency building fast, conversion-first stores on Shopify, WooCommerce, Magento, and custom or headless stacks, with Tabby and Tamara built in. You own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Development Company in Dubai, UAE by FactoryJet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Ecommerce Development Company in Dubai, UAE | FactoryJet',
    description:
      'A UAE ecommerce development agency building fast, conversion-first Shopify, WooCommerce and Magento stores, with Tabby and Tamara built in.',
    images: ['https://factoryjet.com/og-default.png'],
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

export default function EcommerceDevelopmentUAEPage() {
  return (
    <>
      <script id="ld-uae-ecommerce-development" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="uae" />

      <div className="uae-ecomdev">
      <main>

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UAE Ecommerce Development Agency</span>
                  <span className="chip">Shopify · WooCommerce · Magento</span>
                  <span className="chip">Dubai · Abu Dhabi · Sharjah</span>
                </div>
                <h1>Dubai&apos;s Most Trusted Ecommerce Development Company</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an ecommerce development company for UAE brands. We build fast, conversion-first
                  stores on Shopify, WooCommerce, Magento, and custom or headless stacks, with Tabby and Tamara
                  wired in at checkout from day one. You own every line of code when we hand it over, and the
                  store is built to rank in Google and show up when AI tools recommend where to buy.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />1 August 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="ae" source="uae_ecommerce_development_hero" submitLabel="Get my free store consult" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What every build ships with</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Core Web Vitals</div><div className="scorecard-note">fast on mobile, not just desktop</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Green</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Code ownership</div><div className="scorecard-note">yours, not rented</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>100%</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Tabby &amp; Tamara</div><div className="scorecard-note">wired in at checkout</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Platform fit</div><div className="scorecard-note">Shopify, WooCommerce, Magento, custom</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Matched</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Who builds it</div><div className="scorecard-note">senior engineers, founder involved</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Always</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is ecommerce development?</span>
              <p>
                Ecommerce development is the work of planning, building, and integrating an online store: product
                pages, cart, checkout, payments, and stock, so it actually converts visitors into paying customers.
                For a UAE store in 2026, it also means wiring in Tabby and Tamara at checkout, supporting Arabic
                and English properly, and structuring the store so AI shopping tools can recommend it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              For years, ecommerce development in the UAE meant one thing: get the store live, make it look sharp,
              and hope the traffic finds it. That is no longer enough. Shoppers now compare products inside a
              chatbot before they open your site, pay with Tabby or Tamara instead of a card, and expect Arabic
              and English to both work properly. A store built today has to convert the visitor who lands on it,
              and earn a mention from the AI tools deciding where that visitor should go next. A good ecommerce
              development company in Dubai now builds for both from day one.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Senior engineers build it, not junior subcontractors</div>
              <div className="trust-pill"><span className="dot dot-orange" />You own 100% of the code and the store</div>
              <div className="trust-pill"><span className="dot dot-orange" />Tabby and Tamara wired in, not bolted on later</div>
              <div className="trust-pill"><span className="dot dot-orange" />Bilingual English/Arabic builds with real RTL</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why ecommerce development, why now</span>
                <h2>Retail is moving online across the UAE, and buyers now ask AI before they buy</h2>
                <div className="stack mt-6">
                  <p>
                    UAE shoppers moved online fast, and they are not moving back. FactoryJet&apos;s own work in the
                    Dubai market lines up with what the wider numbers show: online shopping adoption has grown
                    sharply since 2020, and the large majority of UAE residents now shop online every month, most
                    of them from a phone rather than a laptop.
                  </p>
                  <p>
                    Two independent figures back this up. Seventy percent of UAE residents now shop online at
                    least once a month, and more than three in four of those purchases happen on a smartphone, not
                    a desktop. A store that is not built mobile-first is fighting the market it is trying to sell to.
                  </p>
                  <p>
                    At the same time, the way people shop is changing again. A growing share of your customers are
                    asking ChatGPT, Gemini, or Google&apos;s AI Overview to compare products or recommend a store
                    before they ever type a search query. A store that only performs well on Google is optimised
                    for half the buyer journey. That is the gap FactoryJet builds for: a store fast and clear
                    enough to convert the visitor in front of it, wired for how UAE shoppers actually pay, and
                    structured well enough to be the one an AI tool recommends before that visitor even arrives.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UAE · Ecommerce in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '70%', t: 'of UAE residents shop online at least once a month', s: 'Digital Commerce 360, citing Dubai Dept. of Economy & Tourism, May 2025', u: 'https://www.digitalcommerce360.com/2025/05/29/dubais-ecommerce-market-13-billion-by-2029/' },
                    { v: '75%+', t: 'of UAE online purchases are completed on a smartphone', s: 'Digital Commerce 360, citing Dubai Dept. of Economy & Tourism, May 2025', u: 'https://www.digitalcommerce360.com/2025/05/29/dubais-ecommerce-market-13-billion-by-2029/' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4.5. SENIOR TEAM + REAL CASE STUDY (E-E-A-T) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually builds it</span>
                <h2>Senior engineers, not a rotating cast of juniors</h2>
                <div className="stack mt-6">
                  <p>
                    Plenty of agency work in Dubai gets handed to junior developers once the sales call ends,
                    built from the same template as the last five projects. That is how so many UAE stores end up
                    looking and behaving alike. We do it differently. Senior engineers write the actual code on
                    your store, and the founder stays involved on every build, not just the pitch.
                  </p>
                  <p>
                    We have delivered 500+ projects for real businesses, including UAE ecommerce brands, and the
                    standard does not drop because a project is smaller. You get the same code quality, the same
                    review, and full ownership of everything we build, on Shopify, WooCommerce, Magento, or a
                    custom stack.
                  </p>
                </div>
              </div>
              <div className="result-card">
                <span className="eyebrow">Real build, UAE E-Commerce Retailer</span>
                <h3 style={{ marginTop: 8 }}>Shopify, 500+ products, Tabby and Tamara</h3>
                <div className="stack mt-4">
                  <p><b style={{ color: 'var(--ink)' }}>Challenge:</b> manual inventory, a poor checkout experience, and limited payment options were quietly costing sales.</p>
                  <p><b style={{ color: 'var(--ink)' }}>Solution:</b> a Shopify store with 500+ products, Tabby and Tamara integration, and mobile-first optimisation.</p>
                </div>
                <div className="col-2 mt-6" style={{ gap: 14 }}>
                  <div className="dark-card" style={{ background: 'var(--n100)', border: '1px solid var(--n200)' }}>
                    <div className="stat-num" style={{ fontSize: 26 }}>6.2%</div>
                    <div className="scorecard-note" style={{ marginTop: 4 }}>conversion rate</div>
                  </div>
                  <div className="dark-card" style={{ background: 'var(--n100)', border: '1px solid var(--n200)' }}>
                    <div className="stat-num" style={{ fontSize: 26 }}>40%</div>
                    <div className="scorecard-note" style={{ marginTop: 4 }}>of revenue from mobile</div>
                  </div>
                </div>
                <p className="scorecard-note mt-4">Live in 8 weeks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. PLATFORMS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Platform fit</span>
              <h2>Shopify, WooCommerce, Magento, or custom: we build all four properly</h2>
              <p className="lead mt-4">
                Whether you are searching for an ecommerce web design company in Dubai or a specific platform
                partner, the right choice depends on your catalogue, your team, and where you plan to sell, not
                on which one we happen to prefer. Here is how we think about each.
              </p>
            </div>
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Shopify</span><span className="plat-pill">DTC &amp; SCALING</span></div>
                <p>The fastest route to a reliable, well-supported store, and the platform most of our Shopify
                website design work happens on. Strong app ecosystem, a straightforward path to Shopify Plus, and
                Tabby and Tamara both available as proven, well-tested apps.</p>
                <p className="plat-best"><b>Best for:</b> DTC brands, growing catalogues, teams who want less to maintain.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">WooCommerce</span><span className="plat-pill">WORDPRESS</span></div>
                <p>Ecommerce built on top of WordPress, which suits brands that already publish a lot of content
                or need full control of hosting. Our WooCommerce work focuses on keeping it fast, since Woo can
                get sluggish without real performance engineering behind it.</p>
                <p className="plat-best"><b>Best for:</b> content-heavy brands, teams already invested in WordPress.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Magento</span><span className="plat-pill">ENTERPRISE</span></div>
                <p>Still the right call for complex, high-SKU catalogues and multi-store setups that need deep
                customisation. We mostly meet this platform on migrations and replatforming, where a UAE business
                has outgrown a simpler tool.</p>
                <p className="plat-best"><b>Best for:</b> large catalogues, multi-store or multi-currency operations.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom &amp; headless</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your business logic, integrations, or performance needs do not fit a template. Custom
                ecommerce on a headless stack gives you full control of the front end while keeping a proper
                commerce engine, and payment stack, underneath.</p>
                <p className="plat-best"><b>Best for:</b> complex B2B, marketplace selling on Noon or Amazon.ae, brands with real engineering needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">What is included</span>
              <h2>Six things every FactoryJet UAE ecommerce build includes</h2>
              <p className="lead mt-4">
                No build skips these, regardless of platform or catalogue size.
              </p>
            </div>
            <div className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Platform selection matched to your catalogue', d: 'We do not default to our favourite platform. We look at your catalogue, integrations, and team before recommending Shopify, WooCommerce, Magento, or custom, and we will tell you if a simpler option saves you money and hassle.' },
                { n: '02', t: 'Tabby and Tamara wired in at checkout', d: 'Buy now pay later is not optional in the UAE market anymore. We integrate both properly at checkout, tested end to end, alongside card and wallet payments.' },
                { n: '03', t: 'Bilingual English and Arabic, built properly', d: 'Real right-to-left layout for Arabic pages and checkout, not a translation plugin bolted onto an English template.' },
                { n: '04', t: 'Mobile-first performance engineering', d: 'Most UAE ecommerce traffic, and most UAE ecommerce revenue, now happens on a phone. We build and test for mobile first, targeting genuinely fast Core Web Vitals rather than a score that only holds up on a fast desktop connection.' },
                { n: '05', t: 'On-page and technical ecommerce SEO', d: 'Category and product pages structured to rank, plus the technical foundation, site speed, crawlability, structured data, that Google and AI engines both need to trust a store.' },
                { n: '06', t: 'Full code handover with a walkthrough', d: 'When we hand the project over, you get the full codebase and a proper walkthrough of how it works, not just a login and a wave goodbye.' },
              ].map((s) => (
                <div key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs a typical Dubai ecommerce agency vs a template or DIY store</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Typical Dubai/ecommerce agency</th>
                    <th>Template / DIY store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom, conversion-first build</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Template only</span></td></tr>
                  <tr><td className="feat">You own 100% of the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Often locked</span></td><td><span className="no">Rented platform</span></td></tr>
                  <tr><td className="feat">Tabby and Tamara built in at checkout</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Rare</span></td></tr>
                  <tr><td className="feat">Bilingual English/Arabic with real RTL</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Fast on mobile (green Core Web Vitals)</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td><span className="no">Rare</span></td></tr>
                  <tr><td className="feat">Ecommerce SEO + AI search visibility built in</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers</span></td><td><span className="partial">Often juniors</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From first call to launched store in four stages</h2>
            </div>
            <div className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <div className="card"><span className="stage-num">01</span><h3>Discovery &amp; platform fit</h3><p className="mt-4">We look at your catalogue, integrations, and goals, including which UAE payment methods matter most to your customers, and recommend the platform that actually fits.</p></div>
              <div className="card"><span className="stage-num">02</span><h3>Design &amp; build</h3><p className="mt-4">Conversion-first product pages, checkout, and bilingual design work, built by senior engineers on the platform we agreed on.</p></div>
              <div className="card"><span className="stage-num">03</span><h3>Integration &amp; QA</h3><p className="mt-4">Tabby, Tamara, card payments, stock, and CRM connected and tested properly, on real devices, before anything goes near customers.</p></div>
              <div className="card"><span className="stage-num">04</span><h3>Launch &amp; handover</h3><p className="mt-4">Your store goes live, you get the full codebase and a walkthrough, and we stay close for the weeks right after launch.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UAE brands whose stores need to work harder</h2>
              <p className="lead mt-4">
                Ecommerce development pays off fastest for businesses whose stores carry real weight in the
                business. Three groups make up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>DTC and consumer brands</h3>
                <p className="mt-4">Brands selling direct to UAE consumers who need a fast, trustworthy store and a checkout that does not leak sales at the Tabby or Tamara step. We build for conversion first, brand second, because a beautiful store that does not sell is not doing its job.</p>
              </div>
              <div className="svc-card">
                <h3>B2B and wholesale brands</h3>
                <p className="mt-4">Businesses selling to other businesses across the UAE, often with company account pricing, bulk ordering, or a quote process layered on top of a normal storefront. We build the commerce logic B2B actually needs, not a DTC template with a login wall.</p>
              </div>
              <div className="svc-card">
                <h3>Multi-channel retailers</h3>
                <p className="mt-4">Brands selling across their own site, Noon, Amazon.ae, and Instagram Shop, who need a store and stock system that stays in sync everywhere they sell.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UAE MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The UAE ecommerce development market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses across the UAE are already searching for the best ecommerce development company. Most results still read like a template</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for ecommerce development help in the UAE is real, and a meaningful share of it
                    is explicitly superlative. Business owners are not just searching &quot;ecommerce development
                    company&quot;, they are searching &quot;best ecommerce website development company&quot; and
                    &quot;best ecommerce web design&quot;, actively comparing options before they ever fill out a
                    form.
                  </p>
                  <p>
                    Terms like &quot;ecommerce development company dubai&quot; are lower volume but easier to win
                    outright, and we already write for both. This page exists to answer that demand properly, for
                    brands in Dubai, Abu Dhabi, Sharjah, and across the UAE, with the same senior team on every
                    account.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uae">Back to UAE overview</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UAE · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'shopify development partner', v: '880', w: '100%', kd: 'KD 16 · Winnable' },
                    { kw: 'ecommerce web design dubai', v: '590', w: '67%', kd: 'KD 0 · Quick win' },
                    { kw: 'ecommerce website development dubai', v: '390', w: '44%', kd: 'KD 21 · Winnable' },
                    { kw: 'ecommerce development company dubai', v: '210', w: '24%', kd: 'KD 0 · Quick win' },
                    { kw: 'best ecommerce website development company', v: '30', w: '3%', kd: 'LOW comp · Superlative' },
                    { kw: 'best ecommerce web design', v: '20', w: '2%', kd: 'KD 53 · Superlative' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Arab Emirates, August 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UAE ecommerce development and Shopify agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are agencies doing
                real ecommerce build and marketing work in the UAE, including us. Talk to a few and pick the fit.
              </p>
            </div>
            <div className="stack mt-10" style={{ maxWidth: 900 }}>
              {ECOM_AGENCIES.map((a, i) => (
                <div key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UAE search results and search demand for ecommerce development terms,
              August 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing figures) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an ecommerce development engagement in the UAE</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size ecommerce packages, because a Starter Shopify launch and an Enterprise
                    multi-vendor marketplace are not the same job wearing different branding. What actually shapes
                    the work is your product count, how many payment methods and systems you need connected, and
                    how custom the design and checkout need to be.
                  </p>
                  <p>
                    A brand moving onto Shopify with a clean catalogue and Tabby or Tamara at checkout often needs
                    mostly design and integration work. A business replatforming from an ageing system, or
                    building out multi-channel selling across Noon and Amazon.ae, needs migration and integration
                    planning first, so nothing breaks and no rankings get lost in the move. We scope it after a
                    short call, so the plan matches your store rather than a generic tier.
                  </p>
                </div>
                <div className="mt-8">
                  {/* region="in" mirrors ContactModalContext's ModalRegion union, which has no
                      'ae'/'uae' value yet, and matches the existing UaePage homepage's own
                      openModal('in') calls (src/lib/legacy-pages/UaePage/App.tsx). Lead capture
                      itself is correctly region-tagged 'ae' via HeroInlineForm in the hero above. */}
                  <ModalCTAButton label="Get my free store consult" region="in" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Product count and catalogue complexity</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Payment methods: Tabby, Tamara, cards, wallets</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Multi-channel selling: Noon, Amazon.ae, Instagram</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How custom the design and checkout are</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free store consult before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce development questions UAE founders actually ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="in" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <details key={f.question} className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Get a straight answer on your UAE ecommerce build</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free store consult: what
              your build actually needs, which platform fits, and how to wire in Tabby and Tamara properly. No
              spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free store consult" region="in" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uae" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See the UAE overview</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="uae" />
    </>
  );
}
