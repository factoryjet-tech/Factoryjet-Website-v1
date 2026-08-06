import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ecommerceSeoServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import EcomFx from './EcomFx';
import './ecommerce-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/ecommerce-seo, built 2026-06-02. Page #4 of the US SEO program.

   Design: reference-grade (aurora-gradient depth, Google product rich-result hero,
   distinct 3D crystal-glass "three layers" cards, glass platform strip,
   rankings→sessions→revenue funnel). Shopify-led, reported in revenue. Brand
   palette + brand next/font only. Source: research/mockup-...-ecommerce-seo-v2.html.

   Perf (100/100 target): CSS-only hero (no image) → text LCP. All motion is CSS +
   a tiny client island (EcomFx: IntersectionObserver reveals + pointer-region
   glass cards). NO GSAP/Framer. Team image lazy + reserved. Scoped CSS (.eseo) in
   the external cached route bundle. See reference_animation_stack + perf playbook.

   Honesty: no pricing; CTAs → free ecommerce SEO audit modal + Calendly; verified
   claims only (4.9/5, 500+, 7-day/Lighthouse 95+); SERP + funnel labeled
   illustrative; no em-dashes. Anti-cannibalization: owns ecommerce/Shopify/Woo/
   Magento + product/collection/technical SEO (distinct from /ecommerce-development
   and /shopify-development which BUILD stores).
   Schema: Service + Organization + FAQPage(22) + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 2, 2026';

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & contracts',
    items: [
      {
        q: 'How much do ecommerce SEO services cost in the US?',
        a: 'FactoryJet pricing is fixed and scoped to your goals. The main drivers are your catalog size, platform, and how competitive your category is. We scope every engagement to the work that will actually move revenue, then quote it up front on a short call so you know the full cost before work starts. The simplest way to get a real figure is to start with a free ecommerce SEO audit.',
      },
      {
        q: 'Do you lock me into a long contract?',
        a: 'No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.',
      },
      {
        q: 'What do I get from the free ecommerce SEO audit?',
        a: 'A full review of your collection and product pages, technical health, schema, and the competitors outranking you, plus a prioritized 90-day roadmap tied to revenue. You walk away with it whether or not you continue.',
      },
      {
        q: 'How do I choose the best ecommerce SEO company?',
        a: 'The best ecommerce SEO companies fix the whole store, not just product tags: collection pages, product schema, technical health, and content. Ask any ecommerce SEO expert or consultant to report results in revenue and transactions, not rankings, and to work month-to-month.',
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      {
        q: 'What does ecommerce SEO with FactoryJet include each month?',
        a: 'We optimize collection and product pages, fix technical and crawl issues, add and maintain Product and Review schema, publish buying-guide content, earn links, and report the revenue it produces. No filler tasks padded onto an invoice.',
      },
      {
        q: 'Do you optimize collection and category pages?',
        a: 'Yes, and it is usually where the biggest wins are. Category pages tend to outrank product pages, so we give them real unique intros, clean hierarchy, and internal links following category-page SEO best practices.',
      },
      {
        q: 'Do you add schema and rich results?',
        a: 'Yes. We add Product, Offer, and Review schema so your listings can show star ratings and price directly in search, which lifts click-through before anyone reaches your store.',
      },
      {
        q: 'Do you handle product page SEO and descriptions?',
        a: 'Yes. We write unique, search-aware product descriptions and fix duplicate and thin content, following product-page SEO best practices, so your products can rank instead of cannibalizing each other.',
      },
      {
        q: 'Do you fix site speed and Core Web Vitals?',
        a: 'Yes. Page experience is part of every engagement. Slow product and collection pages lose both rankings and sales, so we hold the store to a 100/100 standard wherever the platform allows.',
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & timeline',
    items: [
      {
        q: 'How long does ecommerce SEO take to work?',
        a: 'You will usually see a first measurable lift in 30 to 90 days from technical fixes and collection optimization, with momentum compounding by month four to six as content and authority build. Anyone promising overnight revenue is selling something that will not last.',
      },
      {
        q: 'Do you guarantee first-page rankings or sales?',
        a: 'No honest ecommerce SEO company can guarantee a specific ranking or revenue number, because Google and your market control that. What we guarantee is the work, full transparency, and a strategy designed to compound.',
      },
      {
        q: 'How do you report results?',
        a: 'You get a monthly report tied to organic revenue, transactions, and assisted conversions from your analytics, not a wall of keyword positions nobody acts on.',
      },
      {
        q: 'What if I do not see results?',
        a: 'We review progress every month and adjust the plan. Because the engagement is month-to-month, you are never trapped paying for work that is not moving the numbers.',
      },
    ],
  },
  {
    id: 'faq-platforms',
    label: 'Platforms & migrations',
    items: [
      {
        q: 'Do you offer Shopify SEO?',
        a: 'Yes. Shopify SEO is where we go deepest, covering collections, theme and Liquid issues, app bloat and speed, and schema. We also build Shopify stores, so we know the platform from the inside.',
      },
      {
        q: 'Do you do WooCommerce and Magento SEO?',
        a: 'Yes. We handle WooCommerce SEO on WordPress and Magento SEO for large catalogs, including faceted-nav and indexation control, plus custom and headless storefronts.',
      },
      {
        q: 'Can you help with a replatform or migration without losing rankings?',
        a: 'Yes. Migrations are where stores quietly lose traffic. We map redirects, preserve URLs and schema, and monitor indexation so you keep the rankings and revenue you already earned.',
      },
      {
        q: 'Do you do international ecommerce SEO?',
        a: 'Yes. We set up hreflang, currency and regional structure, and localized content so you rank in each market you sell to, instead of competing with yourself.',
      },
    ],
  },
  {
    id: 'faq-technical',
    label: 'Rich results & industries',
    items: [
      {
        q: 'What are rich results and why do they matter for ecommerce?',
        a: 'Rich results are the star ratings, price, and stock that show under your listing in Google. They lift click-through before the visit, so two stores at the same position do not get the same traffic. We earn them with correct Product and Review schema.',
      },
      {
        q: 'Will you optimize my store for Google Shopping and AI answers?',
        a: 'We focus on organic ecommerce SEO. Clean product data and schema also help your products surface in Google Shopping and in AI shopping answers, which pull from the same structured data we maintain.',
      },
      {
        q: 'Which ecommerce industries do you work with?',
        a: 'We work with DTC and retail brands across apparel, home and decor, beauty and wellness, food and supplements, and B2B and industrial catalogs across the US.',
      },
      {
        q: 'Who will I actually be working with?',
        a: 'The founder, Bhavesh. The person who scopes your ecommerce SEO is the same person accountable for the revenue it earns, not a junior who rotates off the account next quarter.',
      },
      {
        q: 'Who is the best ecommerce SEO agency in USA?',
        a: 'For product-based SMBs, FactoryJet makes a strong case: engineers who build ecommerce stores run the SEO on them, so technical fixes actually ship instead of dying in an audit PDF. The best ecommerce SEO services in USA share three traits worth filtering for, product and collection page expertise (not just blog content), structured data that wins rich results, and reporting tied to revenue rather than rankings. Whoever you shortlist, ask to see a before/after on a product catalog comparable to yours.',
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export const metadata: Metadata = {
  title: 'Best Ecommerce SEO Agency in USA: Rank Products & Collections | FactoryJet',
  description:
    'FactoryJet is a US-focused ecommerce SEO agency. We optimize your Shopify, WooCommerce, and Magento collection and product pages so your store ranks, wins rich results, and grows revenue. Founder-led, month-to-month.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Ecommerce SEO Agency in USA: Rank Products & Collections | FactoryJet',
    description:
      'A US-focused ecommerce SEO company and Shopify SEO agency. Collection and product page SEO, schema and rich results, technical ecommerce SEO. Reported in revenue. Founder-led, month-to-month.',
    url: 'https://factoryjet.com/services/ecommerce-seo',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet ecommerce SEO services for US stores' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Ecommerce SEO Agency in USA: Rank Products & Collections | FactoryJet',
    description:
      'A US-focused ecommerce SEO agency for Shopify, WooCommerce, and Magento. Collections, products, schema, technical. Reported in revenue.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce-seo',
    languages: ecommerceSeoServicesAlternatesUS,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ecommerce-seo#webpage',
  url: 'https://factoryjet.com/services/ecommerce-seo',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce SEO Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Ecommerce SEO / Shopify SEO / WooCommerce SEO / Magento SEO / Product Page SEO / Collection Page SEO / Technical Ecommerce SEO',
  description:
    'US-focused ecommerce SEO services that optimize collection pages, product pages, and the technical foundation across Shopify, WooCommerce, and Magento so your store ranks, wins rich results, and grows revenue. Founder-led, month-to-month, reported in revenue and transactions.',
  url: 'https://factoryjet.com/services/ecommerce-seo',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_FLAT.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'United States', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Ecommerce SEO', item: 'https://factoryjet.com/services/ecommerce-seo' },
  ],
};

function Check({ fill = '#0C7150' }: { fill?: string }) {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Partial() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#E0982A" />
      <path d="M10 5.5v5M10 13.5v.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const SCORE_ROWS = ['Who runs your strategy', 'Collection page SEO', 'Product schema & rich results', 'Technical / Core Web Vitals', 'Shopify & platform expertise', 'Content & link building', 'What we report', 'Contract terms'];
const SCORE_FJ = ['The founder, Bhavesh', 'Core focus', 'Built in', '100/100 + schema', 'We also build the stores', 'Guides + digital PR', 'Revenue & transactions', 'Month-to-month'];
const SCORE_AG = [['A rotating junior', 'p'], ['Products only', 'p'], ['Sometimes', 'p'], ['Limited', 'p'], ['Reads docs', 'p'], ['Generic content', 'p'], ['Rankings & traffic', 'p'], ['6 to 12 month lock-in', 'x']] as const;
const SCORE_DIY = [['No strategist', 'x'], ['Manual', 'x'], ['App-dependent', 'p'], ['Not covered', 'x'], ['One platform', 'p'], ['You write it', 'x'], ['Data only', 'p'], ['Cancel anytime', 'c']] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Additive GEO pass (2026-07-25): cited stats, ranked ranking-factor listicle,
   and honestly-worded named-competitor references. ADD-ONLY. Every stat links to
   a real, resolving source that was opened and verified.
───────────────────────────────────────────────────────────────────────────── */
const ECOM_SEO_STATS = [
  {
    value: '53%',
    label:
      'Share of all website traffic that comes from organic search, more than any other channel. For retail stores specifically it runs around 41%.',
    sourceUrl:
      'https://searchengineland.com/organic-search-responsible-for-53-of-all-site-traffic-paid-15-study-322298',
    sourceLabel: 'BrightEdge study, Search Engine Land',
  },
  {
    value: '58%',
    label:
      'Share of clicks that went to listings with rich results (stars, price, stock) in a study of ecommerce search pages. Plain listings with no rich result got just 41%.',
    sourceUrl: 'https://digitalchakra.co.uk/blog/ecommerce-schema-markup-research-study',
    sourceLabel: 'Digital Chakra schema study',
  },
  {
    value: '35%',
    label:
      'Conversion lift the average large store can gain from a better-built checkout and product experience, on top of an average cart-abandonment rate of about 70%.',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    sourceLabel: 'Baymard Institute',
  },
];

const ECOM_SEO_FACTORS = [
  {
    title: 'Collection and category pages',
    body: 'These usually rank for the high-intent terms buyers search, so unique intros, clean hierarchy, and internal links matter more here than anywhere else on the store.',
  },
  {
    title: 'Product page content',
    body: 'Unique, search-aware descriptions instead of the manufacturer copy every other store also pasted in. Thin and duplicate product text is what holds most catalogs back.',
  },
  {
    title: 'Product and review schema',
    body: 'Structured data that earns the star rating, price, and stock shown right in the search result, so your listing gets picked before anyone even clicks.',
  },
  {
    title: 'Site speed and Core Web Vitals',
    body: 'Slow product and collection pages lose both rankings and sales. Page experience is a real ranking input, not a nice-to-have.',
  },
  {
    title: 'Crawl and index control',
    body: 'Faceted navigation, canonicals, and duplicate-URL cleanup so Google spends its crawl budget on the pages you actually want to rank.',
  },
  {
    title: 'Internal linking',
    body: 'Links from blog posts and buying guides into your money pages pass authority to the collections and products that need to rank.',
  },
  {
    title: 'Buying-guide and comparison content',
    body: 'Content that captures research-stage demand and links down into the store, instead of a blog that never sends a single sale.',
  },
  {
    title: 'Off-site authority',
    body: 'Digital PR and genuine links that build the category trust Google rewards. Quality over volume, every time.',
  },
];

const ECOM_SEO_COMPETITORS: ReadonlyArray<{ name: string; known: string; us?: boolean }> = [
  {
    name: 'FactoryJet',
    known: 'Founder-led ecommerce SEO from a team that also builds Shopify stores, so technical fixes actually ship. Reported in revenue, month-to-month.',
    us: true,
  },
  {
    name: 'WebFX',
    known: 'Large full-service digital marketing agency with a big team and its own in-house reporting software.',
  },
  {
    name: 'Victorious SEO',
    known: 'SEO-specialist agency focused purely on organic search across many industries.',
  },
  {
    name: 'Thrive Internet Marketing Agency',
    known: 'Full-service agency spanning SEO, PPC, social, and web across a wide client base.',
  },
  {
    name: '1Digital Agency',
    known: 'Ecommerce-only agency known for its BigCommerce and Magento SEO work.',
  },
];

export default function EcommerceSeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ecom-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ecom-seo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="ecom-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ecom-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="eseo">
        {/* 1. HERO */}
        <section className="hero">
          <div className="aurora" aria-hidden="true"><i className="a1" /><i className="a2" /><i className="a3" /></div>
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18v4H3z" /><path d="M3 9h18v12H3z" opacity=".25" /></svg>
                Ecommerce SEO services &middot; United States
              </span>
              <h1 className="rise d2">The best ecommerce SEO agency that turns product pages into <span className="it">revenue</span></h1>
              <p className="lead rise d3">
                Most ecommerce SEO stops at rankings. We optimize your collection pages, product pages, and Shopify
                technical foundation so you rank for what buyers search, win the rich result with stars and price, and
                we report it in revenue and transactions, not screenshots. <b>That is the whole job.</b>
              </p>
              <HeroInlineForm region="us" source="services_ecommerce_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Talk to the founder
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hstat rise d5">
                <div className="s"><span className="n"><span className="star">&#9733;</span> 4.9</span><span className="l">Google review rating</span></div>
                <span className="sep" />
                <div className="s"><span className="n">500+</span><span className="l">businesses served</span></div>
                <span className="sep" />
                <div className="s"><span className="n">Shopify</span><span className="l">+ Woo, Magento, custom</span></div>
              </div>
            </div>
            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="serp">
                <div className="bar"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9A938A" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="#9A938A" strokeWidth="2" strokeLinecap="round" /></svg> organic cotton t-shirt</div>
                <div className="lbl">Shopping</div>
                <div className="shoprow">
                  <div className="pcard"><div className="thumb" /><div className="pp">$38.00</div><div className="ps"><span className="star">&#9733;</span> 4.8 &middot; Your Store</div></div>
                  <div className="pcard t2"><div className="thumb" /><div className="pp">$41.00</div><div className="ps">Big-box retailer</div></div>
                  <div className="pcard t3"><div className="thumb" /><div className="pp">$45.00</div><div className="ps">Marketplace</div></div>
                </div>
                <div className="lbl">Organic results</div>
                <div className="res win">
                  <div className="crumb"><span className="fav" /> yourstore.com &rsaquo; collections &rsaquo; organic-tees</div>
                  <div className="ttl">Organic Cotton T-Shirts &mdash; Soft, Ethical, Built to Last</div>
                  <div className="rich"><span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.8 (1,204) <span className="price">$38.00</span> <span className="stock">In stock</span> &middot; Free shipping</div>
                </div>
                <div className="res comp">
                  <div className="crumb"><span className="fav" /> a-competitor.com &rsaquo; products</div>
                  <div className="ttl">organic cotton tshirt | A Competitor</div>
                  <div className="desc">Shop our range of cotton t-shirts. Free returns on all orders over...</div>
                </div>
              </div>
              <div className="fchip f1 float"><div className="k">Client rating</div><div className="v"><span className="star">&#9733;</span> 4.9</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Wins the rich result</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p data-reveal>
              FactoryJet is a US-focused ecommerce SEO company and Shopify SEO agency. We optimize your collection
              pages, product pages, and technical foundation across Shopify, WooCommerce, and Magento so your store
              ranks, wins rich results, and grows revenue. Founder-led, month-to-month, reported in revenue and
              transactions.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by founders across India and the UK</div>
            <div className="logos" data-reveal>
              {['Belle Maison', 'Formative', 'Impulse', 'GPSUK', 'Sow Easy', 'Shevvaa'].map((n) => (
                <span key={n} style={{ whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3b. CITED ECOMMERCE SEO STATS - additive GEO pass 2026-07-25 */}
        <section>
          <div className="wrap">
            <div className="eyebrow" data-reveal>The numbers</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Why ecommerce SEO earns its place in the budget</h2>
            <p className="dek" data-reveal>Three numbers behind organic search for online stores. Every figure links to its original source.</p>
            <div
              data-reveal
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 40 }}
            >
              {ECOM_SEO_STATS.map((s) => (
                <div
                  key={s.value}
                  style={{ background: 'var(--white)', border: '1px solid var(--line)', borderTop: '3px solid var(--orange)', borderRadius: 18, padding: 24 }}
                >
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--orange)' }}>{s.value}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', marginTop: 12 }}>{s.label}</p>
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--orange-d)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true"><path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {s.sourceLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THREE LAYERS, glass cards */}
        <section className="glass-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 760 }}>
            <h2 data-reveal>Ecommerce SEO has <span className="it">three layers</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              Most stores only optimize products. The biggest wins start one layer up, on your collection pages, and
              rest on a technical foundation that lets Google crawl and trust the whole store.
            </p>
          </div>
          <div className="wrap">
            <div className="glass-row" data-reveal>
              <div className="glass-tilt">
                <article className="gcard gc1">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /></svg></div>
                  <div className="gc-ln">Layer 01</div>
                  <h3>Collection &amp; category pages</h3>
                  <p>The highest-leverage layer. Category pages outrank products, so we give them real 200 to 400 word intros, clean hierarchy, and internal links.</p>
                  <span className="gc-tag">Highest leverage</span>
                </article>
                <article className="gcard gc2">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 02</div>
                  <h3>Product pages</h3>
                  <p>Unique descriptions plus Product, Offer, and Review schema, so you win the rich result with stars and price before anyone clicks.</p>
                  <span className="gc-tag">Wins the click</span>
                </article>
                <article className="gcard gc3">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5z" strokeLinejoin="round" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 03</div>
                  <h3>Technical foundation</h3>
                  <p>Faceted-nav and canonical control, crawl budget, duplicate-content cleanup, and Core Web Vitals, so Google can read and trust the whole store.</p>
                  <span className="gc-tag">Makes it count</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow" data-reveal>Our services</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Your <span className="it">ecommerce growth</span> engine</h2>
            <p className="dek" data-reveal>Expert ecommerce SEO services for Shopify, WooCommerce, and Magento, built around the four things that turn organic traffic into revenue.</p>
            <div className="bento2" data-reveal>
              <div className="tile feat">
                <span className="badge">Highest leverage</span>
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /></svg></div>
                <div className="kk">Collection / category SEO</div>
                <h3>Collection page SEO</h3>
                <p>Category-page SEO best practices: unique intros, clean hierarchy, and internal linking, so your collections rank for the high-intent terms buyers actually search.</p>
              </div>
              <div className="tile">
                <div className="ic ic-g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" strokeLinejoin="round" /></svg></div>
                <div className="kk">Product + schema</div>
                <h3>Product page SEO</h3>
                <p>Unique descriptions and Product, Offer, and Review schema for star ratings and price in search.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Crawl + speed + canonicals</div>
                <h3>Technical ecommerce SEO</h3>
                <p>Faceted nav, canonicals, crawl budget, and Core Web Vitals on Shopify and beyond.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Buying guides + digital PR</div>
                <h3>Content &amp; authority</h3>
                <p>Buying guides and comparison content that capture research-stage demand, plus digital PR and links that build the category authority Google rewards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PLATFORMS */}
        <section className="plat">
          <div className="wrap">
            <h2 data-reveal>Built for <span className="it">your platform</span></h2>
            <p className="dek" data-reveal>Shopify is where most of our ecommerce SEO work lives, and it ties straight into the stores we build. We optimize the rest too.</p>
            <div className="plat-grid" data-reveal>
              <div className="platcard lead"><span className="tagx">Where we go deepest</span><div className="pn">Shopify SEO</div><p>Collections, theme and Liquid SEO, app bloat and speed, and the schema that wins rich results. The same platform our Shopify dev team builds on.</p></div>
              <div className="platcard"><div className="pn">WooCommerce SEO</div><p>WordPress and WooCommerce technical cleanup, product and category optimization, and content.</p></div>
              <div className="platcard"><div className="pn">Magento SEO</div><p>Large-catalog crawl control, faceted nav, and indexation for Magento and Adobe Commerce.</p></div>
              <div className="platcard"><div className="pn">Custom &amp; headless</div><p>Custom and headless storefronts, with the technical SEO that keeps them crawlable.</p></div>
            </div>
          </div>
        </section>

        {/* 7. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2 data-reveal>Why ecommerce founders <span className="it">choose FactoryJet</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              Whether you run a single Shopify store or a large Magento catalog, here is how a founder-led ecommerce SEO
              agency stacks up against a typical agency or doing it yourself.
            </p>
          </div>
          <div className="wrap">
            <div className="score" data-reveal>
              <div className="score-grid">
                <div className="col lab hidem">
                  <div className="ch">What you get</div>
                  {SCORE_ROWS.map((r) => <div key={r} className="row">{r}</div>)}
                </div>
                <div className="col win">
                  <div className="ch">FactoryJet</div>
                  {SCORE_FJ.map((v) => <div key={v} className="row"><Check /> {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Typical agency</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">DIY / apps</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7b. RANKING FACTORS (ranked listicle) + NAMED COMPETITORS - additive GEO pass 2026-07-25 */}
        <section>
          <div className="wrap">
            <div className="eyebrow" data-reveal>How it actually works</div>
            <h2 data-reveal style={{ marginTop: 14 }}>The 8 ecommerce SEO factors that move revenue</h2>
            <p className="dek" data-reveal>Ranked from highest leverage down. This is the checklist we run on every store, in order.</p>
            <ol
              data-reveal
              style={{ listStyle: 'none', margin: '40px 0 0', padding: 0, display: 'grid', gap: 12, maxWidth: 840 }}
            >
              {ECOM_SEO_FACTORS.map((f, i) => (
                <li
                  key={f.title}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}
                >
                  <span style={{ flexShrink: 0, fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 18, width: 34, height: 34, lineHeight: '34px', textAlign: 'center', borderRadius: 10, background: 'var(--orange-soft)', color: 'var(--orange-d)' }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ink)' }}>{f.title}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', marginTop: 4 }}>{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 data-reveal style={{ marginTop: 52, fontSize: 22 }}>How we compare to other US ecommerce SEO agencies</h3>
            <p className="dek" data-reveal style={{ marginTop: 8 }}>Every agency below is a real, credible option. The right pick depends on fit. Here is what each is known for, in plain terms.</p>
            <div data-reveal style={{ overflowX: 'auto', marginTop: 24 }}>
              <table style={{ width: '100%', minWidth: 620, borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', borderBottom: '1px solid var(--line)' }}>Agency</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', borderBottom: '1px solid var(--line)' }}>What they are known for</th>
                  </tr>
                </thead>
                <tbody>
                  {ECOM_SEO_COMPETITORS.map((c) => (
                    <tr key={c.name} style={c.us ? { background: 'var(--orange-soft)' } : undefined}>
                      <th scope="row" style={{ textAlign: 'left', verticalAlign: 'top', padding: '14px 16px', fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 15, color: 'var(--ink)', borderBottom: '1px solid var(--line)' }}>{c.name}</th>
                      <td style={{ padding: '14px 16px', fontSize: 14, lineHeight: 1.55, color: 'var(--n600)', borderBottom: '1px solid var(--line)' }}>{c.known}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: 'var(--n400)', marginTop: 14 }}>Positioning reflects each agency&apos;s publicly stated focus as of 2026 and is directional, not a scorecard.</p>
          </div>
        </section>

        {/* 8. REVENUE FUNNEL */}
        <section className="rev">
          <span className="orb" aria-hidden="true" />
          <div className="wrap rev-grid">
            <div>
              <div className="eyebrow" data-reveal>Reported in revenue</div>
              <h2 data-reveal style={{ marginTop: 14 }}>Rankings are the <span className="it">start</span>, not the scorecard</h2>
              <p className="lead" data-reveal>
                A ranking only matters if it turns into sessions, and sessions only matter if they turn into orders. We
                tie every change back to revenue and transactions, so you always know what your ecommerce SEO is
                actually earning.
              </p>
              <div className="cta-row" data-reveal><ModalCTAButton label="Get a free ecommerce SEO audit" region="us" btnVariant="primary-dark" /></div>
            </div>
            <div className="funnel" data-reveal>
              <div className="fstage s1"><div><div className="fl">Rankings &amp; rich results</div><div className="fs">Collections + products win the SERP</div></div><div className="fv">Stage 1</div></div>
              <div className="fstage s2"><div><div className="fl">Qualified sessions</div><div className="fs">High-intent shoppers land on the right page</div></div><div className="fv">Stage 2</div></div>
              <div className="fstage s3"><div><div className="fl">Revenue &amp; transactions</div><div className="fs">What we actually report on</div></div><div className="fv">Stage 3</div></div>
              <div className="rev-fine">Illustrative funnel. We report on the real numbers from your analytics; results vary by store, margin, and market.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis" data-reveal>
              <div className="photo">
                <Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet ecommerce SEO team" fill loading="lazy" sizes="(max-width: 880px) 90vw, 460px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average Google review rating</div>
            </div>
            <div>
              <h2 data-reveal>Specialists who <span className="it">build and rank</span> stores</h2>
              <p className="lead" data-reveal>
                I run your strategy myself, so the person who scopes your ecommerce SEO is the person accountable for
                the revenue it earns. Returns on your time, not just your spend.
              </p>
              <ul className="feat-list" data-reveal>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span><div>Founder-led strategy<small>Not handed to a junior team</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v4H3zM3 9h18v12H3z" /></svg></span><div>Ecommerce SEO experts &amp; consultants<small>We build Shopify stores too, so we know the stack</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" /></svg></span><div>Collections, products, and technical<small>The full ecommerce SEO engine, in one place</small></div></li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow" data-reveal>Ecommerce SEO FAQ</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Questions, <span className="it">answered like a real call</span></h2>
            <div className="faq-wrap">
              <aside className="faq-nav">
                {FAQ_GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
              </aside>
              <div className="faq-list">
                {FAQ_GROUPS.map((g, gi) => (
                  <div className="faq-grp" id={g.id} key={g.id} data-reveal>
                    <div className="faq-cat">{g.label}</div>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={gi === 0 && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-card" data-reveal>
              <span className="orb o1" aria-hidden="true" /><span className="orb o2" aria-hidden="true" />
              <div>
                <div className="eyebrow" style={{ color: '#FF9C72' }}>Free ecommerce SEO audit</div>
                <h2 style={{ marginTop: 14 }}>Find out where your store is <span className="it">leaving revenue</span></h2>
                <p className="lead">
                  Book a free ecommerce SEO audit and a 20-minute call with the founder. We will show you exactly which
                  collection and product pages are underperforming and what to fix first. No junior reps, no pressure.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real audit, not a sales pitch</li>
                  <li><Check fill="#F05A28" /> Covers collections, products, and technical</li>
                  <li><Check fill="#F05A28" /> 4.9 / 5 average Google review rating</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free ecommerce SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get a free ecommerce SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50" style={{ borderColor: 'rgba(26,23,18,0.18)' }}>
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. Reported in revenue, not rankings.</div>
              </div>
            </div>
          </div>
        </section>

        <EcomFx />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
