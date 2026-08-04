import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import TalkToFounder from '@/components/v2/TalkToFounder';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/shopify-seo, Shopify SEO services page (2026-06-03)

   Cloned from /us/services/ai-seo template (shared v2 components, same schema
   pattern). Targets the Shopify-SEO commercial cluster: shopify seo services
   (4.4K), shopify seo agency (3.6K), shopify seo company (2.4K), shopify seo
   consultant (1.3K, KD5), seo shopify expert (880), hire a shopify seo expert.
   Pricing: quote-first tiers, no hard $ figures (per owner decision 2026-06-03).
   Schema: WebPage + BreadcrumbList + Service + FAQPage + Organization JSON-LD.
   Alternates: canonical-only (no India shopify-seo page to hreflang-pair yet).
───────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Shopify SEO Agency USA: Rank Your Store & Win AI Citations | FactoryJet',
  description:
    'Shopify SEO services & agency for US stores. We fix duplicate URLs, thin collection pages, and app bloat, then rank your products and earn AI citations. Free Shopify SEO audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify SEO Agency USA: Rank Your Store & Win AI Citations | FactoryJet',
    description:
      'Shopify SEO services & agency for US stores. We fix duplicate URLs, thin collections, and app bloat, then rank products and earn AI citations. Free Shopify SEO audit.',
    url: 'https://factoryjet.com/services/shopify-seo',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Shopify SEO services for US stores',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify SEO Agency USA: Rank Your Store & Win AI Citations | FactoryJet',
    description:
      'Shopify SEO services & agency for US stores. Fix duplicate URLs, rank products and collections, earn AI citations. Free Shopify SEO audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/shopify-seo',
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
   Section data, pillars, journey stages, pricing tiers
───────────────────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    title: 'Shopify creates duplicate URLs that quietly split your rankings',
    body:
      'By default Shopify serves every product on two paths, /products/x and /collections/y/products/x, plus paginated and tag-filtered collection URLs. Without canonical discipline, Google splits authority across duplicates and your real pages underperform. A generalist SEO audit rarely catches this; it is Shopify-specific plumbing.',
  },
  {
    title: 'Collection and product pages are thin by default',
    body:
      'Shopify themes ship collection pages as a grid of products with almost no indexable copy, and product descriptions are often manufacturer boilerplate. Thin, duplicated content does not rank and does not get cited by AI engines. Winning Shopify SEO means giving collections and products real, query-matched content.',
  },
  {
    title: 'App and theme bloat tanks Core Web Vitals',
    body:
      'Every review widget, upsell app, and pop-up injects JavaScript. Stack five apps and your mobile LCP collapses, and Core Web Vitals are a ranking and conversion factor. Fixing Shopify performance is engineering work, not a checklist an app can run for you.',
  },
];

const SHOPIFY_SEO_JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We crawl your store the way Google does, duplicate URLs, canonical errors, thin collections, app-injected JS, broken schema, and the queries you should rank for but do not. Output: a Shopify SEO scorecard and a prioritized 90-day roadmap.',
  },
  {
    number: '02',
    title: 'Technical fixes',
    description:
      'We resolve Shopify duplicate-URL and canonical issues, clean up the collection/pagination architecture, add Product, BreadcrumbList, and FAQ schema, and trim app/theme bloat to recover Core Web Vitals. Structural surgery, not a theme rewrite.',
  },
  {
    number: '03',
    title: 'Content',
    description:
      'We write real, query-matched copy for your priority collection and product pages, plus buyer-intent blog content. Authored by people, structured so both Google and AI engines can extract answers, never thin LLM boilerplate.',
  },
  {
    number: '04',
    title: 'Authority & citations',
    description:
      'We earn links and named citations from sources Google and AI assistants trust, and structure your content so ChatGPT, Perplexity, and Google AI Overviews cite your store when buyers ask about your category.',
  },
  {
    number: '05',
    title: 'Measure',
    description:
      'Monthly: keyword rankings, organic and AI-referral sessions, indexed-page health, Core Web Vitals, and revenue where tracking is wired in. You see what is moving. We adjust scope monthly, no annual lock-in.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Shopify SEO Audit',
    price: 'Custom quote',
    cadence: 'one-time',
    description: 'Find every technical, content, and citation gap on your store before committing to a retainer.',
    features: [
      'Technical crawl: duplicate URLs, canonicals, indexation',
      'Collection & product content gap analysis',
      'Core Web Vitals + app-bloat review',
      'AI-citation check + 90-day roadmap',
      '1 strategy call with the founder',
    ],
    ctaLabel: 'Book the audit',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: false,
  },
  {
    name: 'Growth Retainer',
    price: 'Custom quote',
    cadence: 'per month',
    description: 'Engineered for growing Shopify stores. Audit fixes, monthly content, and reporting that compounds.',
    features: [
      'All Shopify SEO Audit deliverables',
      'Monthly collection & product page content',
      'Schema + technical SEO fixes',
      'Monthly keyword rank + AI-citation report',
    ],
    ctaLabel: 'Start Growth',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: false,
  },
  {
    name: 'Done-for-You',
    price: 'Custom quote',
    cadence: 'per month',
    description: 'Higher cadence for stores that want SEO, content, and conversion handled end to end.',
    features: [
      'Everything in Growth + higher content cadence',
      'Link & third-party citation acquisition',
      'Product-page conversion optimization (CRO)',
      'Bi-weekly review with the founder',
    ],
    ctaLabel: 'Talk to the Founder',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: true,
    isContact: false,
  },
  {
    name: 'Enterprise',
    price: 'Talk to the Founder',
    cadence: '',
    description: 'Custom scope for Shopify Plus, multi-store, or international stores. Dedicated engineer + strategist.',
    features: [
      'Custom scope, defined per engagement',
      'Shopify Plus / multi-store / international',
      'Dedicated senior engineer + strategist',
      'Quarterly executive review',
    ],
    ctaLabel: 'Talk to the Founder',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'what', label: 'What is Shopify SEO' },
  { key: 'technical', label: 'Technical & apps' },
  { key: 'method', label: 'Methodology' },
  { key: 'measure', label: 'Measurement' },
  { key: 'pricing', label: 'Pricing & engagement' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What is Shopify SEO ────────────────────────────────────────────────
  {
    category: 'what',
    question: 'What is Shopify SEO?',
    answer:
      'Shopify SEO is the practice of optimizing a Shopify store so it ranks in Google and gets cited by AI engines for the queries your buyers search. It covers Shopify-specific technical issues (duplicate URLs, canonicals, collection architecture), content on collection and product pages, Core Web Vitals, and authority signals like links and citations. It overlaps with general SEO but adds work that is specific to how Shopify generates pages.',
  },
  {
    category: 'what',
    question: 'Is Shopify good for SEO?',
    answer:
      'Shopify is capable of ranking very well, but it is not SEO-perfect out of the box. It handles SSL, mobile, and basic sitemaps automatically, but it also creates duplicate product URLs, ships thin collection pages, forces a /collections/ and /products/ URL structure, and limits some technical controls. A well-optimized Shopify store ranks excellently; an untouched one usually leaves rankings on the table. The gap is exactly what a Shopify SEO service closes.',
  },
  {
    category: 'what',
    question: 'Why does Shopify need specialized SEO instead of a generalist?',
    answer:
      'Because the highest-impact Shopify SEO problems are Shopify-specific. Duplicate /collections/*/products/* URLs, canonical handling, pagination and tag-filter bloat, Liquid theme performance, and app-injected JavaScript are not things a generalist SEO checklist surfaces. A Shopify SEO specialist knows the platform plumbing and fixes the issues that actually move rankings on Shopify.',
  },
  {
    category: 'what',
    question: 'What is the difference between Shopify SEO and general ecommerce SEO?',
    answer:
      'Ecommerce SEO is the broad discipline of ranking online stores on any platform; Shopify SEO applies those principles to the specific way Shopify builds and serves pages. If you run a Shopify store, the Shopify-specific work, duplicate URLs, theme performance, app bloat, collection architecture, is where most of the wins are. If you are on WooCommerce, Magento, or a custom platform, our broader ecommerce SEO service is the better fit.',
  },

  // ── Technical & apps ───────────────────────────────────────────────────
  {
    category: 'technical',
    question: 'Why does Shopify create duplicate URLs, and how do you fix them?',
    answer:
      'Shopify serves the same product at both /products/handle and /collections/collection/products/handle, and generates extra URLs for pagination, tags, and sorting. Left alone, Google splits ranking authority across these duplicates. We enforce correct canonical tags, fix internal linking so it points to the canonical product URL, control indexation of filtered and paginated pages, and verify the fixes in Google Search Console. This alone often lifts rankings on stores that have never had it done.',
  },
  {
    category: 'technical',
    question: 'Do Shopify SEO apps actually work?',
    answer:
      'SEO apps (Smart SEO, Plug in SEO, and similar) automate useful basics, bulk meta tags, alt text, simple schema, broken-link checks. They are worth having. But they cannot fix the work that actually moves rankings: collection and product content, duplicate-URL and canonical architecture, Core Web Vitals, internal linking strategy, or AI-citation positioning. Apps are a tool, not a strategy. We often keep a client on one app and do the high-impact work around it.',
  },
  {
    category: 'technical',
    question: 'How do you optimize Shopify collection and product pages?',
    answer:
      'Collection pages get real, query-matched intro and supporting copy (most themes ship them nearly empty), clean H1/title structure, and internal links to related collections. Product pages get unique descriptions instead of manufacturer boilerplate, Product and review schema for rich results, and trust/conversion elements above the fold. Both are structured so Google and AI engines can extract answers, not just crawl a product grid.',
  },
  {
    category: 'technical',
    question: 'Will my Shopify apps and theme hurt Core Web Vitals?',
    answer:
      'Often, yes. Each app typically injects its own JavaScript and CSS, and a heavy theme compounds it, which slows mobile load and drags down Core Web Vitals, a Google ranking and conversion factor. We audit what each app costs in performance, remove or defer what is not earning its weight, and optimize the theme so your store stays fast as you add functionality.',
  },

  // ── Methodology ────────────────────────────────────────────────────────
  {
    category: 'method',
    question: 'What does a Shopify SEO audit include?',
    answer:
      'The audit covers four areas: (1) technical, duplicate URLs, canonicals, indexation, sitemap, and crawl issues; (2) content, collection and product page gaps versus the queries you should rank for; (3) performance, Core Web Vitals and app/theme bloat; and (4) authority and AI, backlink profile, citation gaps, and whether AI engines reference your store. You get a written scorecard, a prioritized 90-day roadmap, and a strategy call with the founder.',
  },
  {
    category: 'method',
    question: 'Can I hire a dedicated Shopify SEO consultant or expert?',
    answer:
      'Yes. Every engagement gives you a dedicated Shopify SEO expert, not a rotating pool, who owns your audit, fixes, content, and reporting. If you want strategic input rather than full execution, you can hire a Shopify SEO consultant for the audit and roadmap and run it with your own team. Either way you work directly with a Shopify specialist, with founder access on every account.',
  },
  {
    category: 'method',
    question: 'How do you earn AI citations for a Shopify store?',
    answer:
      'We structure your collection, product, and blog content with clear question–answer formatting and schema (FAQ, Product, Article) that AI engines extract, then earn named third-party citations that build the credibility those engines weight. The result: when a buyer asks ChatGPT, Perplexity, or Google AI Overviews about your product category, your store is referenced. We report AI citations alongside Google rankings every month.',
  },
  {
    category: 'method',
    question: 'Do you write the content, or just tell me what to do?',
    answer:
      'Both options exist. On a retainer we write and publish collection copy, product descriptions, and blog content for you. If you prefer to keep content in-house, the audit and roadmap give your team exact briefs, target queries, structure, schema, and internal-linking instructions, so you can execute without guesswork.',
  },

  // ── Measurement ────────────────────────────────────────────────────────
  {
    category: 'measure',
    question: 'How do you measure Shopify SEO results?',
    answer:
      'A monthly report you can read in five minutes: keyword rankings for your target terms, organic and AI-referral sessions, indexed-page health, Core Web Vitals, and, where tracking is wired in, revenue and conversions from organic. Every metric ties back to the 90-day roadmap so you see progress against plan, not vanity numbers.',
  },
  {
    category: 'measure',
    question: 'How long does Shopify SEO take to work?',
    answer:
      'Technical fixes (canonical and duplicate-URL cleanup, schema, Core Web Vitals) can show impact within weeks because they let Google index and rank pages it was previously discounting. Content and authority work compounds over 3–6 months. Most stores see early movement in the first quarter and meaningful organic growth by months 4–6. SEO is a compounding asset, not a switch, we sequence the fast wins first.',
  },

  // ── Pricing & engagement ───────────────────────────────────────────────
  {
    category: 'pricing',
    question: 'How much does Shopify SEO cost?',
    answer:
      'We quote each store rather than publish fixed monthly prices, because the right scope depends on your catalog size, current technical health, and goals. Engagements start with a one-time audit, then move into a monthly retainer (Growth or Done-for-You) once you see where the opportunity is. You get a clear scope and price before any work starts, month-to-month, with no annual contract. Book a call and we will scope it on the spot.',
  },
  {
    category: 'pricing',
    question: 'Do you require annual contracts?',
    answer:
      'No. Shopify SEO retainers are month-to-month. SEO has to keep proving itself, and locking you into a 12-month contract removes our incentive to keep delivering. Cancel with one billing-cycle notice. Most retainers continue voluntarily because the rankings and revenue keep climbing, that is the bar we hold ourselves to.',
  },
  {
    category: 'pricing',
    question: 'Can I start with just the Shopify SEO audit?',
    answer:
      'Yes. The audit is a complete deliverable, many stores use it as a one-time strategic input, run the roadmap with their own team, and return for retainer support later. If you continue into a retainer within 30 days, the audit fee is credited toward your first month. You own all audit deliverables either way.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (WebPage + BreadcrumbList + Service + FAQPage + Organization)
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shopify SEO Agency USA: Rank Your Store & Win AI Citations',
  url: 'https://factoryjet.com/services/shopify-seo',
  description:
    'Shopify SEO services for US stores: fix duplicate URLs and canonicals, rank collection and product pages, recover Core Web Vitals, and earn AI citations. Senior-engineer-led, month-to-month.',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://factoryjet.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://factoryjet.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Shopify SEO',
      item: 'https://factoryjet.com/services/shopify-seo',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify SEO Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Shopify SEO / Ecommerce SEO',
  description:
    'Senior-engineer-led Shopify SEO services for US stores: duplicate-URL and canonical fixes, collection and product page optimization, Core Web Vitals, schema, and AI-citation positioning. Audit + monthly retainer, month-to-month.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Shopify SEO Audit',
      description: 'Technical, content, performance, and citation audit plus a 90-day roadmap. One-time engagement. Quoted per store.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Retainer',
      description: 'Monthly Shopify SEO retainer: audit fixes, collection/product content, schema, and monthly rank + AI-citation reporting. Quoted per store.',
    },
    {
      '@type': 'Offer',
      name: 'Done-for-You Retainer',
      description: 'Higher-cadence Shopify SEO, content, citation acquisition, and product-page CRO. Quoted per store.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise',
      description: 'Custom scope for Shopify Plus, multi-store, or international stores. Pricing on application.',
    },
  ],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components
───────────────────────────────────────────────────────────────────────────── */

function StatsRow() {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              value: '120+',
              suffix: 'Shopify stores',
              label: 'built & optimized',
              body: 'We know Shopify SEO because we build Shopify stores, duplicate URLs, theme performance, and app bloat are problems we have already solved at the code level.',
            },
            {
              value: '0',
              suffix: 'annual contracts',
              label: 'month-to-month, always',
              body: 'Cancel with one billing-cycle notice. Most retainers continue voluntarily because the rankings keep climbing, not because of contract teeth.',
            },
            {
              value: 'Google + AI',
              suffix: 'both covered',
              label: 'on every report',
              body: 'We rank your store in Google AND position it to be cited by ChatGPT, Perplexity, and Google AI Overviews, reported side by side every month.',
            },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="flex items-baseline gap-2">
                <p
                  className="fj-display font-bold"
                  style={{
                    color: '#F05A28',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-fj-body font-semibold"
                  style={{
                    color: '#0F0F12',
                    fontSize: '1.0625rem',
                    letterSpacing: '0.005em',
                  }}
                >
                  {stat.suffix}
                </p>
              </div>
              <p
                className="mt-1 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.65)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
              <p
                className="mt-4 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.72)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopifySeoPricingGrid() {
  return (
    <section
      id="pricing"
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.068) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">SHOPIFY SEO PRICING</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Quote-first pricing, scoped to your store and goals.
          </h2>
          <p
            className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Start with an audit. Move into a retainer when you see where the opportunity is. We quote each store on catalog size, technical health, and goals, you get a clear scope and price before any work starts. No annual contracts. Full code and data ownership from day one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const isContact = tier.isContact;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  isPopular ? 'lg:-mt-3' : ''
                }`}
                style={{
                  backgroundColor: isPopular ? '#0F0F12' : '#FFFFFF',
                  border: isPopular ? 'none' : '1px solid rgba(15,15,18,0.10)',
                  boxShadow: isPopular
                    ? '0 12px 48px rgba(240,90,40,0.25), 0 4px 16px rgba(15,15,18,0.20)'
                    : '0 1px 3px rgba(15,15,18,0.04)',
                }}
              >
                <div
                  style={{
                    height: '3px',
                    backgroundColor: '#F05A28',
                  }}
                  aria-hidden="true"
                />

                {isPopular && (
                  <div
                    className="absolute"
                    style={{
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: '#B23E13',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div className="flex-1 flex flex-col p-7">
                  <p
                    className="font-fj-body font-semibold"
                    style={{
                      color: isPopular ? '#FAFAF7' : '#0F0F12',
                      fontSize: '0.9375rem',
                      letterSpacing: '0.005em',
                    }}
                  >
                    {tier.name}
                  </p>

                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <p
                      className="fj-display font-bold"
                      style={{
                        color: '#F05A28',
                        fontSize: isContact ? '1.5rem' : '1.75rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {tier.price}
                    </p>
                    {tier.cadence && (
                      <p
                        className="font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.70)' : 'rgba(15,15,18,0.55)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {tier.cadence}
                      </p>
                    )}
                  </div>

                  <p
                    className="mt-4 font-fj-body"
                    style={{
                      color: isPopular ? 'rgba(250,250,247,0.80)' : 'rgba(15,15,18,0.70)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.55,
                    }}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.85)' : 'rgba(15,15,18,0.80)',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        >
                          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="#FFFFFF"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Link
                      href={tier.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        background: isPopular ? '#B23E13' : 'transparent',
                        color: isPopular ? '#FFFFFF' : '#B23E13',
                        border: isPopular ? 'none' : '1.5px solid #B23E13',
                        outlineColor: '#F05A28',
                        boxShadow: isPopular ? '0 4px 16px rgba(178,62,19,0.30)' : 'none',
                      }}
                    >
                      {tier.ctaLabel}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="mt-10 text-center font-fj-body"
          style={{
            color: 'rgba(15,15,18,0.55)',
            fontSize: '0.8125rem',
            letterSpacing: '0.04em',
            fontWeight: 500,
          }}
        >
          Month-to-month. Full code &amp; data ownership from day one. Start with an audit, no required retainer.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page render
───────────────────────────────────────────────────────────────────────────── */

export default function ShopifySeoServicePage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        id="shopify-seo-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="shopify-seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="shopify-seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="shopify-seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="shopify-seo-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />

      {/* ─── 1. Hero ─────────────────────────────────────────────────────── */}
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_shopify_seo_hero" />}
        eyebrow="SHOPIFY SEO SERVICES"
        headline={
          <>
            Shopify SEO that grows store revenue, <br className="hidden md:block" />
            not just rankings.
          </>
        }
        lead="We fix the Shopify-specific issues that quietly cap your rankings, duplicate URLs, thin collections, app bloat, then rank your products and collections in Google and get your store cited by AI engines. One retainer. Monthly reports you can read in five minutes."
        secondaryCta={{
          label: 'See pricing',
          href: '#pricing',
        }}
        trustItems={[
          'Senior engineers who build Shopify stores',
          'Month-to-month, no annual lock-in',
          'Google rankings + AI citations on one report',
        ]}
      />

      {/* ─── 2. Stats row ────────────────────────────────────────────────── */}
      <StatsRow />

      {/* ─── 3. Service explanation, what Shopify SEO is ────────────────── */}
      <ServiceExplanation
        eyebrow="WHAT SHOPIFY SEO COVERS"
        headline="Shopify can rank brilliantly. Out of the box, it usually doesn't."
        lead="Shopify handles SSL, mobile, and sitemaps for you, then quietly works against you with duplicate product URLs, thin collection pages, and app-injected JavaScript that drags down Core Web Vitals. A generalist SEO audit rarely catches the Shopify-specific issues. That gap is exactly what we close."
        body={
          <>
            <p
              className="mt-6 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              We work the full stack of Shopify SEO: the technical plumbing (canonicals, duplicate URLs, collection architecture, schema), real content on the collection and product pages that ship nearly empty, Core Web Vitals recovery, and the authority and structure that get your store cited by Google AI Overviews, ChatGPT, and Perplexity. Because we also{' '}
              <Link href="/services/shopify-development" className="text-[#B23E13] font-medium underline underline-offset-2">build Shopify stores</Link>, we fix performance and theme issues at the code level, not with another plugin.
            </p>
            <p
              className="mt-4 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              On a different platform? Our broader{' '}
              <Link href="/services/ecommerce-seo" className="text-[#B23E13] font-medium underline underline-offset-2">ecommerce SEO service</Link>{' '}
              covers WooCommerce, Magento, and custom stores with the same playbook.
            </p>
          </>
        }
        rightSlot={
          <div
            className="rounded-2xl border p-7"
            style={{
              borderColor: 'rgba(15,15,18,0.10)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
            }}
          >
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
            >
              Our approach
            </p>
            <p
              className="mt-4 fj-display font-bold"
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Fix the plumbing first.
            </p>
            <p
              className="mt-3 font-fj-body font-semibold"
              style={{ color: '#0F0F12', fontSize: '1rem' }}
            >
              Technical wins ship in weeks, content compounds for months.
            </p>
            <p
              className="mt-3 font-fj-body"
              style={{
                color: 'rgba(15,15,18,0.65)',
                fontSize: '0.875rem',
                lineHeight: 1.55,
              }}
            >
              We sequence the fast technical wins, canonical and duplicate-URL fixes, schema, Core Web Vitals, before the slower-compounding content and authority work, so you see movement early.
            </p>
          </div>
        }
      />

      {/* ─── 4. Strategic dark, why Shopify needs specialist SEO ────────── */}
      <StrategicDarkSection
        eyebrow="WHY SHOPIFY NEEDS SPECIALIST SEO"
        headline="Three Shopify problems a generalist SEO audit will miss."
        lead="The highest-impact Shopify SEO issues live in how Shopify itself builds and serves pages. Here is what most SEO agencies and apps never fix."
        pillars={PILLARS}
      />

      {/* ─── 5. Service journey, 5-step process ─────────────────────────── */}
      <ServiceJourneyRow
        eyebrow="OUR 5-STEP SHOPIFY SEO PROCESS"
        headline="From audit to compounding rankings and citations."
        lead="Every engagement follows the same five steps. The audit defines the roadmap. The roadmap drives the retainer. Everything is measured monthly. No black boxes."
        stages={SHOPIFY_SEO_JOURNEY}
        closingNote="Every step ships a deliverable. Every month you see what changed and what it moved."
      />

      {/* ─── 6. Comparison vs apps / freelancer / generalist agency ──────── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs SEO apps, freelancers, and generalist agencies."
        lead="The four ways most Shopify stores try to do SEO, and where a Shopify-specialist, engineer-led model differs."
        columns={[
          { label: 'FactoryJet', isFactoryJet: true },
          { label: 'SEO Apps' },
          { label: 'Freelancer' },
          { label: 'Generalist Agency' },
        ]}
        rows={[
          {
            feature: 'Pricing model',
            values: ['Custom quote, month-to-month', 'Monthly app fee', 'Hourly', 'Retainer (often annual)'],
          },
          {
            feature: 'Shopify-specific expertise',
            values: [
              <CompareIcon key="fj-exp" kind="yes" />,
              <CompareIcon key="app-exp" kind="partial" />,
              <CompareIcon key="free-exp" kind="partial" />,
              <CompareIcon key="gen-exp" kind="no" />,
            ],
          },
          {
            feature: 'Fixes duplicate-URL & canonical issues',
            values: [
              <CompareIcon key="fj-dup" kind="yes" />,
              <CompareIcon key="app-dup" kind="no" />,
              <CompareIcon key="free-dup" kind="partial" />,
              <CompareIcon key="gen-dup" kind="partial" />,
            ],
          },
          {
            feature: 'Collection & product page content',
            values: [
              <CompareIcon key="fj-con" kind="yes" />,
              <CompareIcon key="app-con" kind="no" />,
              <CompareIcon key="free-con" kind="partial" />,
              <CompareIcon key="gen-con" kind="partial" />,
            ],
          },
          {
            feature: 'AI citations (ChatGPT / Perplexity / AIO)',
            values: [
              <CompareIcon key="fj-ai" kind="yes" />,
              <CompareIcon key="app-ai" kind="no" />,
              <CompareIcon key="free-ai" kind="no" />,
              <CompareIcon key="gen-ai" kind="partial" />,
            ],
          },
          {
            feature: 'Code & data ownership Day 1',
            values: [
              <CompareIcon key="fj-own" kind="yes" />,
              <CompareIcon key="app-own" kind="partial" />,
              <CompareIcon key="free-own" kind="yes" />,
              <CompareIcon key="gen-own" kind="partial" />,
            ],
          },
          {
            feature: 'Contract terms',
            values: ['Month-to-month', 'Per app', 'Hourly', 'Annual common'],
          },
        ]}
        footer="Comparison reflects typical offerings in each category as of 2026-06-03. Individual providers vary."
      />

      {/* ─── 7. Pricing, custom 4-card grid ─────────────────────────────── */}
      <ShopifySeoPricingGrid />

      {/* ─── 8. Industries served (DARK) ─────────────────────────────────── */}
      <IndustriesGrid />

      {/* ─── 9. FAQ ──────────────────────────────────────────────────────── */}
      <FAQ
        eyebrow="SHOPIFY SEO FAQ"
        headline="Shopify SEO questions, answered the way Bhavesh would on a call."
        lead="If your question is not below, send a written brief, answers usually come back inside 24 hours."
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* ─── 10. Closing CTA, TalkToFounder full dark ───────────────────── */}
      <TalkToFounder
        variant="full"
        theme="dark"
        eyebrow="FOUNDER ACCESS"
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
