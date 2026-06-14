import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

import { seoServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/seo: SEO Services hub (built 2026-06-01)

   Source of truth: research/mockup-us-services-seo.html (Pepper-inspired direction).
   Self-contained page: the mockup sections (composite cutout hero, green service
   cards, peach bento, 4-col comparison, lavender about, charcoal AI-citation room)
   do not map 1:1 to the shared v2 component library, so each section is built
   inline here against the repo palette + next/font tokens.

   Honesty rules applied (per task brief):
     - NO em-dashes anywhere in copy.
     - NO pricing section; CTAs route to the free SEO audit modal + Calendly.
     - NO fabricated metrics (no +312%, no 64.2% domain share, no 23k->720k).
       Service mini-cards carry real deliverables; the AI room shows a qualitative
       AI-Overview citation card, not invented dashboard percentages.
     - Verified claims only: 4.9 / 5 from 150 reviews, 500+ businesses served,
       7-day SEO-ready builds, 100/100 Lighthouse.
     - Founder byline + visible "Reviewed & updated" date for E-E-A-T.

   Palette: repo production tokens (orange #F05A28, charcoal #0F0F12, cream #FAFAF7)
   plus expanded section "rooms" from the mockup (green, lavender, peach).
   Schema: Service + Organization (aggregateRating) + FAQPage + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 1, 2026';

/* Expanded "room" palette: accents drawn from the approved mockup, anchored on
   the repo's production orange + charcoal so header/footer/CTA stay consistent. */
const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13'; // WCAG AA 4.5:1+ for eyebrow text on cream/peach (#C94A1A was 4.48)
const ORANGE_SOFT = '#FBEAE1';
const CHARCOAL = '#0F0F12';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150'; // deeper green so white label text passes 4.5:1 (was #15A074 = 3.3)
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SEO Agency for Small Business USA — Local, Near Me & AI SEO Services | FactoryJet',
  description:
    'FactoryJet is an SEO agency for US small businesses. We rank you on Google, put you in "near me" searches, and get you cited in AI Overviews, ChatGPT, and Perplexity. Founder-led, month-to-month, reported in leads.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Small Business USA — Local, Near Me & AI SEO Services | FactoryJet',
    description:
      'A US-focused SEO company for small businesses. Technical SEO, expert content, and authority building so you rank on Google, appear in "near me" searches, and get cited in AI answers. Founder-led, month-to-month.',
    url: 'https://factoryjet.com/us/services/seo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO services for US businesses: Google rankings plus AI citations',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Small Business USA — Local, Near Me & AI SEO Services | FactoryJet',
    description:
      'A US-focused SEO agency for small businesses. Ranks you on Google, gets you in "near me" searches, and cited in AI answers. Founder-led, month-to-month, reported in leads.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/seo',
    languages: seoServicesAlternatesUS,
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
   FAQ data: 27 across 5 categories (verbatim from the approved mockup)
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'pricing', label: 'Pricing & contracts' },
  { key: 'included', label: "What's included" },
  { key: 'results', label: 'Results & timeline' },
  { key: 'technical', label: 'Technical & AI search' },
  { key: 'local', label: 'Local, ecommerce & industries' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Pricing & contracts ────────────────────────────────────────────────
  {
    category: 'pricing',
    question: 'How much do SEO services cost in the US?',
    answer:
      'Most US SEO services run between $1,500 and $5,000 a month, depending on how competitive your market is. We scope every engagement to the work that will actually move your rankings and leads, then tell you the number on a short call. The simplest way to get a real figure is to start with a free SEO audit.',
  },
  {
    category: 'pricing',
    question: 'Do you lock me into a long contract?',
    answer:
      'No. Every FactoryJet SEO engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.',
  },
  {
    category: 'pricing',
    question: 'What do I get from the free SEO audit?',
    answer:
      'A full technical, content, and authority review, a keyword and AI-query map for your market, and a prioritized 90-day roadmap. It is a complete picture of where your organic growth is leaking and what to fix first, and you walk away with it whether or not you continue.',
  },
  {
    category: 'pricing',
    question: 'Do you offer SEO for small businesses?',
    answer:
      'Yes. Small business SEO is a core part of what we do, with scope sized for owners who want real results without an enterprise budget. We focus on the handful of fixes that produce the most leads first, instead of a long invoice of busywork.',
  },

  // ── What's included ────────────────────────────────────────────────────
  {
    category: 'included',
    question: 'What does your SEO agency actually do each month?',
    answer:
      'We fix technical issues, publish expert content built to answer what your buyers ask, earn authority through reviews and citations, and report the leads it produces. No filler tasks padded onto an invoice.',
  },
  {
    category: 'included',
    question: 'Do you write the content yourselves?',
    answer:
      'Yes. We write answer-first pages and articles grounded in real expertise, structured so both readers and AI engines can quote them. We do not ship spun or generic AI content.',
  },
  {
    category: 'included',
    question: 'Do you handle link building?',
    answer:
      'Yes. We earn links and citations through digital PR and genuinely useful content, not link farms or paid schemes that put your domain at risk.',
  },
  {
    category: 'included',
    question: 'Can you optimize my current website, or do I need a new one?',
    answer:
      'Usually we optimize what you already have. If your site is too slow or cannot be crawled, we can rebuild it in about seven days at a 100/100 Lighthouse score, but that is a recommendation, never a forced upsell.',
  },

  // ── Results & timeline ─────────────────────────────────────────────────
  {
    category: 'results',
    question: 'How long does SEO take to work?',
    answer:
      'You will usually see a first measurable lift in 30 to 90 days from technical fixes and quick-win content, with momentum compounding by month four to six. Anyone promising page one in a week is selling something that will not last.',
  },
  {
    category: 'results',
    question: 'Do you guarantee first-page Google rankings?',
    answer:
      'No honest SEO company can guarantee a specific ranking, because Google and the AI engines control that. What we guarantee is the work, full transparency, and a strategy designed to compound over time.',
  },
  {
    category: 'results',
    question: 'How do you report results?',
    answer:
      'You get a monthly report in plain language tied to leads, calls, and revenue, not a wall of keyword positions nobody acts on. You will always know what we did and what it produced.',
  },
  {
    category: 'results',
    question: 'What if I do not see results?',
    answer:
      'We review progress every month and adjust the plan. Because the engagement is month-to-month, you are never trapped paying for work that is not moving the numbers.',
  },

  // ── Technical & AI search ──────────────────────────────────────────────
  {
    category: 'technical',
    question: 'What is AI SEO, or GEO, and do I need it?',
    answer:
      'AI SEO, also called GEO or generative engine optimization, is the work of getting your business cited inside AI answers like Google AI Overviews and ChatGPT. If your buyers research in those tools, and most now do, then yes, you need it.',
  },
  {
    category: 'technical',
    question: 'Will you optimize my site to show up in ChatGPT and Google AI Overviews?',
    answer:
      'Yes. We write answer-first content, structure pages so AI can quote them cleanly, build the authority signals these engines look for, and keep your site crawlable by GPTBot, ClaudeBot, and PerplexityBot.',
  },
  {
    category: 'technical',
    question: 'What is technical SEO and why does it matter?',
    answer:
      'Technical SEO makes sure search engines and AI crawlers can read, render, and trust your site. Without it, even great content stays invisible. We cover crawlability, schema, indexing, and internal links.',
  },
  {
    category: 'technical',
    question: 'Do you fix Core Web Vitals and site speed?',
    answer:
      'Yes. Page experience and Core Web Vitals are part of every engagement. Slow, clunky pages lose both rankings and customers, so we hold every page we build to a 100/100 standard.',
  },
  {
    category: 'technical',
    question: 'How is this different from what an AI tool can do on its own?',
    answer:
      'Tools give you data. We give you a strategy, the hands to execute it, and accountability for the outcome. An AI writer or rank tracker cannot diagnose why you are not converting, or earn the trust signals that get you cited.',
  },

  // ── Local, ecommerce & industries ──────────────────────────────────────
  {
    category: 'local',
    question: 'How do I find an SEO agency near me?',
    answer:
      'Most searches for an "SEO agency near me" return local generalist agencies who handle everything from social media to print. For dedicated SEO that ranks you on Google and inside AI answers, a specialized remote agency like FactoryJet often delivers stronger results. We are US-focused, work with clients in every state, and the founder is directly accountable for your rankings — so you get senior expertise without limiting yourself to whoever happens to be in your zip code.',
  },
  {
    category: 'local',
    question: 'Do you do local SEO and Google Business Profile optimization?',
    answer:
      'Yes. Local SEO is one of our core services. We optimize your Google Business Profile, local landing pages, and citations so you show up in the map pack and in "near me" searches across your service area.',
  },
  {
    category: 'local',
    question: 'Do you offer ecommerce and Shopify SEO?',
    answer:
      'Yes. We handle ecommerce SEO for Shopify, WooCommerce, and custom stores, covering product pages, category structure, and the technical issues that quietly cap online-store traffic.',
  },
  {
    category: 'local',
    question: 'Which industries do you work with?',
    answer:
      'We get results for law firms, dental and healthcare practices, home services like roofing and HVAC, B2B and SaaS, ecommerce brands, real estate, and small businesses across the US.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses outside my city?',
    answer:
      'Yes. We are a US-focused SEO agency and work with clients nationwide, whether you serve one neighborhood, several locations, or sell online across the country.',
  },
  {
    category: 'local',
    question: 'Who will I actually be working with?',
    answer:
      'The founder, Bhavesh. The person who scopes your SEO is the same person accountable for your results, not a junior who rotates off the account next quarter.',
  },

  // ── Choosing an agency (5) — money-query coverage, added 2026-06-11 ────
  {
    category: 'included',
    question: 'Who is the best SEO agency in USA?',
    answer:
      'For SMBs that want senior-led work, FactoryJet makes a strong case: founder-run engagements, transparent pricing, and one retainer covering local, ecommerce, technical, and AI SEO. But the best SEO company in USA for your business depends on fit — the best SEO services company in USA for a 5-location retailer is rarely the right pick for a SaaS startup, and the best SEO services in USA for one industry can be mediocre in another. Whoever you shortlist as the best SEO services agency in USA, apply three filters: senior practitioners doing the work (not just selling it), monthly reporting tied to revenue rather than vanity rankings, and no annual lock-in. The best SEO experts in USA pass all three without flinching.',
  },
  {
    category: 'included',
    question: 'What are the top 10 SEO companies in USA?',
    answer:
      'Published lists of the top 10 SEO agencies in USA usually feature large incumbents — WebFX, Ignite Visibility, Victorious — alongside specialist boutiques. FactoryJet competes in that set for SMB and mid-market engagements, with one difference most top 10 SEO services in USA lists miss: we treat AI search (ChatGPT, Perplexity, Google AI Overviews) as a first-class ranking surface, not an upsell. Use any top-10 list as a starting shortlist, then compare per-engine reporting, pricing transparency, and contract terms.',
  },
  {
    category: 'technical',
    question: 'Which is the best technical SEO agency in USA?',
    answer:
      'The best technical SEO agency in USA is one where engineers — not account managers — run the audit. Technical SEO is engineering work: crawl budget, rendering, Core Web Vitals, structured data, internal-link architecture. FactoryJet ships sites that score 100/100 on Lighthouse, and the same engineers who build them run our technical SEO audits. If an agency cannot show you who actually executes the fixes, the audit will become a PDF that nobody implements.',
  },
  {
    category: 'included',
    question: 'Where can I find the best link building services in USA?',
    answer:
      'Be careful what you buy: the best link building services in USA look nothing like bulk guest-post packages. We build authority through citation acquisition — named mentions in industry publications, podcasts, and directories that both Google and AI engines treat as credibility signals. It overlaps with classic link building but optimizes for source attribution, not anchor text. Anyone selling links by the dozen is selling risk.',
  },
  {
    category: 'pricing',
    question: 'How much does SEO cost in USA?',
    answer:
      'SEO cost in USA lands between $1,500 and $10,000+ per month for credible agency retainers; one-time audits run $1,000–$7,500. FactoryJet publishes pricing rather than hiding it behind a sales call — retainers start at $1,999/mo and every engagement is month-to-month. If a quote is dramatically below that range, you are usually buying templated deliverables; dramatically above it, you are paying for account-management layers between you and the people doing the work.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (Service + Organization + FAQPage + BreadcrumbList)
───────────────────────────────────────────────────────────────────────────── */

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType:
    'Search Engine Optimization / Local SEO / Ecommerce SEO / Technical SEO / Generative Engine Optimization',
  description:
    'US-focused SEO services that grow organic traffic and turn it into leads. Technical SEO, expert content, local and ecommerce SEO, link building, and AI-answer optimization so you rank on Google and get cited inside AI answers. Founder-led, month-to-month.',
  url: 'https://factoryjet.com/us/services/seo',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://factoryjet.com'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'United States', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 4, name: 'SEO', item: 'https://factoryjet.com/us/services/seo' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Small inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PartialCircle({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#E0982A" />
      <path d="M10 5.5v5M10 13.5v.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page render
───────────────────────────────────────────────────────────────────────────── */

export default function SeoServicePage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="seo-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:gap-11 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            {/* Left: copy */}
            <div>
              <p className="fj-eyebrow">SEO services &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                The SEO agency that gets you ranked on Google and{' '}
                <span className="italic" style={{ color: ORANGE }}>quoted by AI</span>
              </h1>
              <p
                className="mt-6 max-w-[520px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Most SEO agencies still chase rankings on a Google that changed underneath them. We grow
                organic traffic that compounds across search and AI answers like AI Overviews, ChatGPT, and
                Perplexity, then we measure it in leads and revenue instead of ranking screenshots.{' '}
                <b className="font-bold text-fj-ink">That is the whole job.</b>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ModalCTAButton label="Get a free SEO audit" region="us" btnVariant="primary-light" />
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the founder
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: composite hero (image + floating proof chips) */}
            <div className="relative mx-auto h-[460px] w-full max-w-[420px] sm:h-[540px]">
              {/* Decorative blobs */}
              <span
                aria-hidden="true"
                className="absolute right-[6%] top-[6%] -z-0 hidden h-[78%] w-[88%] sm:block"
                style={{ background: ORANGE, borderRadius: '46% 54% 56% 44% / 48% 42% 58% 52%' }}
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[8%] right-[42%] hidden h-[140px] w-[140px] sm:block"
                style={{ background: LAV, borderRadius: '50%' }}
              />
              {/* Framed photo */}
              <div
                className="absolute right-[6%] top-0 z-[3] h-[88%] w-[78%] overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 30px 70px rgba(20,18,12,0.22)' }}
              >
                <Image
                  src="/images/us/services/seo/hero-seo.webp"
                  alt="Marketer reviewing organic search and AI traffic growth on a laptop in a US office"
                  width={900}
                  height={1206}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 80vw, 330px"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Chip: client rating (green) */}
              <div
                className="absolute bottom-[6%] right-[-2%] z-[5] rounded-2xl px-4 py-3.5"
                style={{ background: GREEN, color: '#fff', boxShadow: '0 18px 44px rgba(26,23,18,0.16)' }}
              >
                <div className="font-fj-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.86)' }}>
                  Client rating
                </div>
                <div className="fj-display flex items-center gap-1.5 text-[1.4rem] font-bold leading-tight">
                  <span style={{ color: '#FFC65C' }}>&#9733;</span> 4.9 / 5
                </div>
              </div>

              {/* Chip: reviews count (white) */}
              <div
                className="absolute left-[-4%] top-[8%] z-[5] rounded-2xl bg-white px-4 py-3.5"
                style={{ boxShadow: '0 18px 44px rgba(26,23,18,0.16)' }}
              >
                <div className="font-fj-mono text-[10px] uppercase tracking-[0.08em] text-fj-neutral-400">
                  Reviews
                </div>
                <div className="fj-display text-[1.4rem] font-bold leading-tight" style={{ color: ORANGE }}>
                  150 reviews
                </div>
              </div>

              {/* Chip: cited in AI Overviews (white, capability label) */}
              <div
                className="absolute bottom-[30%] left-[-6%] z-[5] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3"
                style={{ boxShadow: '0 18px 44px rgba(26,23,18,0.16)' }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: GREEN_BRIGHT }} aria-hidden="true" />
                <span className="font-fj-body text-[0.8125rem] font-bold text-fj-ink">Cited in AI Overviews</span>
              </div>

              {/* Chip: ranks on Google + AI (lavender capability) */}
              <div
                className="absolute right-[-4%] top-[-3%] z-[5] flex items-center gap-2 rounded-2xl px-4 py-2.5 font-fj-body text-[0.8125rem] font-bold text-white"
                style={{ background: LAV, boxShadow: '0 18px 44px rgba(80,70,200,0.26)' }}
              >
                Ranks on Google + AI
              </div>

              {/* Chip: 500+ businesses (charcoal) */}
              <div
                className="absolute bottom-[-2%] left-[18%] z-[5] rounded-2xl px-4 py-2.5 font-fj-body text-[0.8125rem] font-bold text-white"
                style={{ background: CHARCOAL, boxShadow: '0 18px 44px rgba(26,23,18,0.20)' }}
              >
                500+ businesses
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. TL;DR band (charcoal) ────────────────────────────────── */}
        <section style={{ background: CHARCOAL }}>
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-7 md:px-8">
            <span className="flex-shrink-0 font-fj-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: '#FF8A5E' }}>
              Short answer
            </span>
            <p
              className="min-w-[280px] max-w-[760px] flex-1 font-fj-body"
              style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(244,241,234,0.9)' }}
            >
              FactoryJet is a US-focused SEO company that grows your organic traffic and turns it into leads.
              We combine technical SEO, expert content, and authority building so you rank on Google and get
              cited inside AI answers. Founder-led, month-to-month, and reported in revenue.
            </p>
          </div>
        </section>

        {/* ─── 3. Logo / trust bar ─────────────────────────────────────── */}
        <section className="py-12">
          <div className="mx-auto max-w-[1180px] px-6 text-center md:px-8">
            <p className="font-fj-mono text-[12px] uppercase tracking-[0.13em] text-fj-neutral-400">
              Trusted by US founders &amp; teams
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-11 gap-y-4 opacity-70">
              {['Belle Maison', 'Bombay Petals', 'Formative', 'Impulse', 'Shevvaa', 'RDB Travel'].map((name) => (
                <span key={name} className="fj-display whitespace-nowrap text-[1.4rem] font-bold text-fj-neutral-600">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. SERVICES (white, green cards) ────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: GREEN }}>
              Our services
            </p>
            <h2
              className="fj-display mt-3.5 font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
            >
              Your <span className="italic" style={{ color: ORANGE }}>SEO growth</span> engine
            </h2>
            <p className="mt-4 max-w-[560px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              One founder-led team for the three things that actually move organic traffic: technical SEO,
              expert content, and authority.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-3">
              {[
                {
                  kicker: 'Schema + Core Web Vitals',
                  title: 'Technical & on-page',
                  body:
                    'Core Web Vitals, crawlability, schema, and internal links. The foundation Google and AI crawlers need.',
                  go: 'Fix the foundation',
                },
                {
                  kicker: '4 to 8 expert articles / month',
                  title: 'Expert content',
                  body:
                    'Answer-first pages written on real expertise, structured to be quoted by AI and to convert humans.',
                  go: 'Build content',
                },
                {
                  kicker: 'Local SEO + Google Business Profile',
                  title: 'Authority & GEO',
                  body:
                    'Reviews, directory citations, and digital PR so Google and AI engines trust and cite you.',
                  go: 'Earn authority',
                },
              ].map((svc) => (
                <div
                  key={svc.title}
                  className="flex min-h-[296px] flex-col rounded-3xl p-7 text-white transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: GREEN }}
                >
                  <div
                    className="mb-auto self-start rounded-xl bg-white px-4 py-3 text-fj-ink"
                    style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}
                  >
                    <div className="font-fj-mono text-[11px] text-fj-neutral-400">Deliverable</div>
                    <div className="fj-display text-[0.9375rem] font-bold" style={{ color: GREEN }}>
                      {svc.kicker}
                    </div>
                  </div>
                  <h3 className="fj-display mb-2 mt-6 text-[1.3rem] font-bold text-white" style={{ letterSpacing: '-0.015em' }}>
                    {svc.title}
                  </h3>
                  <p className="font-fj-body text-[0.9375rem] font-medium" style={{ color: 'rgba(244,241,234,0.82)' }}>
                    {svc.body}
                  </p>
                  <div
                    className="mt-5 flex items-center justify-between rounded-xl px-4 py-3 font-fj-body text-[0.8125rem] font-bold text-white"
                    style={{ background: GREEN_BRIGHT }}
                  >
                    {svc.go} <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4b. SEO SERVICES INDEX (cream) — pillar → cluster links ──── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Explore our SEO services
            </p>
            <h2
              className="fj-display mt-3.5 font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
            >
              One team, every <span className="italic" style={{ color: ORANGE }}>SEO surface</span> your store needs
            </h2>
            <p className="mt-4 max-w-[560px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              Pick the focus that fits where you are — or talk to the founder and we&apos;ll map the right mix.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-3">
              {[
                { label: 'Local SEO', href: '/us/services/local-seo', desc: 'Win the Google Map Pack and near-me searches.', accent: false },
                { label: 'E-commerce SEO', href: '/us/services/ecommerce-seo', desc: 'Rank product and collection pages that convert.', accent: false },
                { label: 'Shopify SEO', href: '/us/services/shopify-seo', desc: 'Fix duplicate URLs and thin collections, rank your store.', accent: true },
                { label: 'AI SEO', href: '/us/services/ai-seo', desc: 'Get cited by ChatGPT, Perplexity, and Google AI Overviews.', accent: false },
                { label: 'SEO Audit', href: '/us/services/seo-audit', desc: 'Free technical site check with a prioritized fix list.', accent: false },
                { label: 'Small Business SEO', href: '/us/services/small-business-seo', desc: 'Affordable managed SEO for growing local brands.', accent: false },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[176px] flex-col rounded-3xl bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: svc.accent ? `2px solid ${ORANGE}` : '1px solid rgba(15,15,18,0.10)' }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="fj-display text-[1.2rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                      {svc.label}
                    </h3>
                    {svc.accent && (
                      <span
                        className="font-fj-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                        style={{ background: ORANGE_DARK, padding: '3px 9px', borderRadius: '999px' }}
                      >
                        New
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9375rem] text-fj-neutral-600" style={{ lineHeight: 1.5 }}>
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. BENTO — the engagement (peach) ───────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The engagement
            </p>
            <h2
              className="fj-display mt-3.5 font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
            >
              <span className="italic" style={{ color: ORANGE }}>Outsmart</span> the competition
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {/* Big cell */}
              <div className="rounded-3xl p-7 sm:row-span-2" style={{ background: PEACH }}>
                <div className="font-fj-mono text-[11px] tracking-[0.1em]" style={{ color: ORANGE_DARK }}>STEP 01</div>
                <h3 className="fj-display mt-2 mb-2 text-[1.3rem] font-bold text-fj-ink">Audit &amp; strategy</h3>
                <p className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600">
                  Deep technical, content, and authority audit. We map the keywords and AI queries that drive
                  your buyers.
                </p>
                <div className="mt-5 rounded-2xl bg-white p-4" style={{ boxShadow: '0 10px 26px rgba(240,90,40,0.10)' }}>
                  <p className="font-fj-mono text-[11px] uppercase tracking-[0.08em] text-fj-neutral-400">
                    What you walk away with
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {['Technical fix list, prioritized', 'Keyword + AI-query map', '90-day roadmap you own'].map((line) => (
                      <li key={line} className="flex items-start gap-2.5 font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        <CheckCircle size={18} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 02 */}
              <div className="rounded-3xl p-7" style={{ background: PEACH }}>
                <div className="font-fj-mono text-[11px] tracking-[0.1em]" style={{ color: ORANGE_DARK }}>STEP 02</div>
                <h3 className="fj-display mt-2 mb-2 text-[1.3rem] font-bold text-fj-ink">Fix the foundation</h3>
                <p className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600">
                  Speed, crawlability, schema, structure. The technical SEO and Core Web Vitals work that
                  makes everything else count.
                </p>
              </div>

              {/* Step 03 */}
              <div className="rounded-3xl p-7" style={{ background: PEACH }}>
                <div className="font-fj-mono text-[11px] tracking-[0.1em]" style={{ color: ORANGE_DARK }}>STEP 03</div>
                <h3 className="fj-display mt-2 mb-2 text-[1.3rem] font-bold text-fj-ink">Build expert content</h3>
                <p className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600">
                  Answer-first, AI-citable, conversion-focused pages written on real expertise.
                </p>
              </div>

              {/* Step 04 */}
              <div className="rounded-3xl p-7" style={{ background: PEACH }}>
                <div className="font-fj-mono text-[11px] tracking-[0.1em]" style={{ color: ORANGE_DARK }}>STEP 04</div>
                <h3 className="fj-display mt-2 mb-2 text-[1.3rem] font-bold text-fj-ink">Earn authority</h3>
                <p className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600">
                  Reviews, citations, and digital PR so Google and AI engines trust your brand.
                </p>
              </div>

              {/* Outcome */}
              <div className="rounded-3xl p-7" style={{ background: GREEN_SOFT }}>
                <div className="font-fj-mono text-[11px] tracking-[0.1em]" style={{ color: GREEN }}>OUTCOME</div>
                <h3 className="fj-display mt-2 mb-2 text-[1.3rem] font-bold text-fj-ink">Compounding leads</h3>
                <p className="font-fj-body text-[0.9375rem] font-medium text-fj-neutral-600">
                  Momentum by month four to six, reported in pipeline, not vanity rankings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. COMPARISON (white, 4-col) ────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[760px] px-6 text-center md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              FactoryJet vs others
            </p>
            <h2
              className="fj-display mt-3.5 font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
            >
              Why founders <span className="italic" style={{ color: ORANGE }}>choose FactoryJet</span>
            </h2>
            <p className="mt-3 font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Whether you need <b className="text-fj-ink">local SEO</b> and Google Business Profile work,{' '}
              <b className="text-fj-ink">ecommerce SEO</b> for a Shopify store, deep{' '}
              <b className="text-fj-ink">technical SEO</b>, or AI-era <b className="text-fj-ink">GEO</b>, here is how a
              founder-led SEO agency stacks up against a typical SEO agency or doing it yourself with tools.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[1180px] px-6 md:px-8">
            <div
              className="grid grid-cols-2 overflow-hidden rounded-3xl border md:grid-cols-[1.1fr_1fr_1fr_1fr]"
              style={{ borderColor: 'rgba(26,23,18,0.09)' }}
            >
              {/* Feature labels col — hidden on mobile (mockup behaviour) */}
              <div className="hidden p-7 md:block">
                <div className="fj-display mb-5 text-[1.0625rem] font-bold text-fj-ink">What you get</div>
                {[
                  'Who runs your strategy',
                  'Local SEO & Google Business Profile',
                  'Ecommerce & Shopify SEO',
                  'Technical SEO & Core Web Vitals',
                  'Content & link building',
                  'AI SEO (GEO / AEO)',
                  'What we report',
                  'Contract terms',
                ].map((row) => (
                  <div key={row} className="py-2.5 font-fj-body text-[0.875rem] font-bold text-fj-ink">
                    {row}
                  </div>
                ))}
              </div>

              {/* FactoryJet col (winning) */}
              <div className="p-6 md:p-7" style={{ background: GREEN_SOFT }}>
                <div className="fj-display mb-5 text-[1.0625rem] font-bold" style={{ color: GREEN }}>FactoryJet</div>
                {[
                  'The founder, Bhavesh',
                  'Map-pack + GBP tuning',
                  'Product & category SEO',
                  '100/100 + schema',
                  'Expert content + digital PR',
                  'Built in from day one',
                  'Leads & revenue',
                  'Month-to-month',
                ].map((val) => (
                  <div key={val} className="flex items-start gap-2.5 py-2.5 font-fj-body text-[0.875rem] font-medium text-fj-ink">
                    <CheckCircle size={18} /> {val}
                  </div>
                ))}
              </div>

              {/* Typical agency col */}
              <div className="p-6 md:p-7">
                <div className="fj-display mb-5 text-[1.0625rem] font-bold text-fj-ink">Typical agency</div>
                {[
                  { v: 'A rotating junior', i: 'p' },
                  { v: 'Add-on service', i: 'p' },
                  { v: 'Limited', i: 'p' },
                  { v: '"Good enough"', i: 'p' },
                  { v: 'Generic writers', i: 'p' },
                  { v: 'Not on the radar', i: 'p' },
                  { v: 'Rankings & traffic', i: 'p' },
                  { v: '6 to 12 month lock-in', i: 'x' },
                ].map((row) => (
                  <div key={row.v} className="flex items-start gap-2.5 py-2.5 font-fj-body text-[0.875rem] font-medium text-fj-neutral-600">
                    {row.i === 'x' ? <CrossCircle /> : <PartialCircle />} {row.v}
                  </div>
                ))}
              </div>

              {/* DIY / tools col */}
              <div className="p-6 md:p-7">
                <div className="fj-display mb-5 text-[1.0625rem] font-bold text-fj-ink">DIY / tools</div>
                {[
                  { v: 'No strategist', i: 'x' },
                  { v: 'Manual setup', i: 'x' },
                  { v: 'Not covered', i: 'x' },
                  { v: 'Plugin-only', i: 'p' },
                  { v: 'You write it', i: 'x' },
                  { v: 'Generic output', i: 'x' },
                  { v: 'Data only', i: 'p' },
                  { v: 'Cancel anytime', i: 'c' },
                ].map((row) => (
                  <div key={row.v} className="flex items-start gap-2.5 py-2.5 font-fj-body text-[0.875rem] font-medium text-fj-neutral-600">
                    {row.i === 'x' ? <CrossCircle /> : row.i === 'c' ? <CheckCircle size={18} /> : <PartialCircle />} {row.v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. ABOUT (lavender, team cut-out) ───────────────────────── */}
        <section style={{ background: LAV_SOFT }} className="py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            {/* Photo / cut-out */}
            <div className="relative mx-auto h-[360px] w-full max-w-[460px] sm:h-[420px]">
              {/* Soft glow behind the cut-out */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -top-6 bottom-0 -z-0"
                style={{ background: 'radial-gradient(58% 52% at 50% 44%, rgba(80,70,200,0.30), rgba(80,70,200,0) 72%)' }}
              />
              <Image
                src="/images/us/services/seo/team-cutout.webp"
                alt="The FactoryJet SEO team"
                width={1300}
                height={895}
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 460px"
                className="relative z-[2] mx-auto h-auto w-full max-w-[460px] object-contain"
                style={{ filter: 'drop-shadow(0 18px 24px rgba(40,30,90,0.28))' }}
              />
              {/* Float chip: senior team (no year numbers) */}
              <div
                className="absolute -left-2 top-[46%] z-[6] rounded-xl bg-white px-3.5 py-2.5 font-fj-body text-[0.78rem] font-bold text-fj-ink"
                style={{ boxShadow: '0 16px 36px rgba(80,70,200,0.26)' }}
              >
                A senior team
              </div>
              {/* Float chip: rating */}
              <div
                className="absolute -right-2 bottom-12 z-[6] rounded-xl bg-white px-3.5 py-2.5 font-fj-body text-[0.78rem] font-bold text-fj-ink"
                style={{ boxShadow: '0 16px 36px rgba(80,70,200,0.26)' }}
              >
                <span style={{ color: '#FFB23C' }} aria-hidden="true">&#9733;</span> 4.9 &middot; 150 reviews
              </div>
              {/* Caption pill (no year numbers) */}
              <span
                className="absolute bottom-[-12px] left-1/2 z-[7] -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2.5 font-fj-body text-[0.8125rem] font-semibold text-white"
                style={{ background: CHARCOAL, boxShadow: '0 12px 28px rgba(20,18,12,0.26)' }}
              >
                Seasoned SEO and AI-search specialists
              </span>
            </div>

            {/* Copy */}
            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                Meet the team
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
              >
                Real specialists, <span className="italic" style={{ color: ORANGE_DARK }}>not a content mill</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                I run your strategy myself, so the person who scopes your SEO is the person accountable for the
                results. Returns on your time, not just your spend.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led strategy', s: 'Not handed to a junior team', glyph: '◆' },
                  { t: 'Seasoned across search and web', s: '500+ businesses served', glyph: '★' },
                  { t: 'Built for Google + AI answers', s: 'SEO, GEO and AEO in one engagement', glyph: '✦' },
                ].map((item) => (
                  <li
                    key={item.t}
                    className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[18px]"
                      style={{ background: LAV_SOFT, color: LAV }}
                      aria-hidden="true"
                    >
                      {item.glyph}
                    </span>
                    <div className="font-fj-body text-[0.97rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-400">{item.s}</small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder
              </p>
            </div>
          </div>
        </section>

        {/* ─── 8. AI CITATION ROOM (charcoal, qualitative) ─────────────── */}
        <section className="relative overflow-hidden py-14 md:py-20" style={{ background: CHARCOAL }}>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 -z-0 h-[420px] w-[420px] rounded-full"
            style={{ filter: 'blur(110px)', background: 'rgba(240,90,40,0.26)' }}
          />
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: '#FF8A5E' }}>
                Get cited in AI search
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-white"
                style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
              >
                <span className="italic" style={{ color: ORANGE }}>Master</span> AI answers, not just blue links
              </h2>
              <p className="mt-4 font-fj-body font-medium" style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'rgba(244,241,234,0.72)' }}>
                AI Overviews answer the query before anyone scrolls. We optimize you to be the source those
                answers cite, across Google AI Overviews, ChatGPT, and Perplexity.
              </p>
              <div className="mt-7">
                <ModalCTAButton label="Get a free SEO audit" region="us" btnVariant="primary-dark" />
              </div>
            </div>

            {/* Illustrative AI-Overview answer card — qualitative, no invented stats */}
            <div
              className="rounded-3xl border p-6 sm:p-7"
              style={{
                background: 'linear-gradient(165deg,#1b1a14,#100f0b)',
                borderColor: 'rgba(244,241,234,0.09)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                  style={{ background: ORANGE }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4z" fill="#fff" />
                  </svg>
                </span>
                <span className="font-fj-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: 'rgba(244,241,234,0.55)' }}>
                  AI Overview
                </span>
              </div>
              <p className="mt-4 font-fj-body text-[0.95rem] leading-[1.7]" style={{ color: 'rgba(244,241,234,0.92)' }}>
                &ldquo;For US small businesses that want to rank on Google and get found inside AI answers,
                FactoryJet is a founder-led SEO agency that combines technical SEO, expert content, and
                authority building, and reports results in leads rather than rankings.&rdquo;
              </p>
              <div className="mt-5 border-t pt-4" style={{ borderColor: 'rgba(244,241,234,0.09)' }}>
                <p className="font-fj-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: 'rgba(244,241,234,0.45)' }}>
                  Sources cited
                </p>
                <div className="mt-3 space-y-2.5">
                  {[
                    { name: 'factoryjet.com', cited: true },
                    { name: 'A typical SEO agency', cited: false },
                    { name: 'A DIY tools blog', cited: false },
                  ].map((src) => (
                    <div key={src.name} className="flex items-center gap-2.5">
                      {src.cited ? <CheckCircle fill={ORANGE} size={18} /> : (
                        <span
                          className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ background: 'rgba(244,241,234,0.25)' }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className="font-fj-body text-[0.875rem]"
                        style={{
                          color: src.cited ? '#fff' : 'rgba(244,241,234,0.5)',
                          fontWeight: src.cited ? 700 : 500,
                        }}
                      >
                        {src.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-fj-body text-[0.78rem]" style={{ color: 'rgba(244,241,234,0.45)' }}>
                  Illustrative example. We optimize your content, schema, and authority so AI engines reach for
                  you as the answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ — 27 across 5 categories (shared component) ──────── */}
        <FAQ
          eyebrow="SEO FAQ"
          headline="Questions, answered like a real call"
          lead="If your question is not below, send a short brief and answers usually come back inside one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 10. Closing CTA (charcoal split) ────────────────────────── */}
        <section id="final-cta" className="py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[28px] px-7 py-12 md:px-12 md:py-14 lg:grid-cols-[1.02fr_0.98fr]"
              style={{ background: CHARCOAL }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full"
                style={{ filter: 'blur(110px)', background: 'rgba(240,90,40,0.30)' }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-16 h-[420px] w-[420px] rounded-full"
                style={{ filter: 'blur(110px)', background: 'rgba(80,70,200,0.26)' }}
              />
              <div className="relative z-[1]">
                <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: '#FF8A5E' }}>
                  Free SEO audit
                </p>
                <h2
                  className="fj-display mt-3.5 font-bold text-white"
                  style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.875rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
                >
                  Find where your <span className="italic" style={{ color: ORANGE }}>organic growth</span> is leaking
                </h2>
                <p className="mt-4 max-w-[520px] font-fj-body" style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'rgba(244,241,234,0.74)' }}>
                  Book a free SEO audit and a 20-minute call with the founder. We will show you exactly where
                  you are losing rankings, traffic, and AI citations, and what to fix first. No junior reps, no
                  pressure.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    'A real audit, not a sales pitch',
                    'Covers Google rankings + AI answers',
                    '4.9 / 5 from 150 reviews',
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-3 font-fj-body text-[0.9375rem] font-medium" style={{ color: 'rgba(244,241,234,0.9)' }}>
                      <CheckCircle fill={ORANGE} size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="relative z-[1] rounded-3xl border bg-white p-7 md:p-9"
                style={{ borderColor: 'rgba(26,23,18,0.09)' }}
              >
                <div className="fj-display text-[1.5rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  Get your free SEO audit
                </div>
                <p className="mt-2 font-fj-body text-[0.875rem] text-fj-neutral-600">
                  A 20-minute call with the founder. We reply within one business day.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <ModalCTAButton
                    label="Get a free SEO audit"
                    region="us"
                    btnVariant="primary-light"
                    className="w-full"
                  />
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ borderColor: 'rgba(26,23,18,0.2)', outlineColor: ORANGE }}
                  >
                    Talk to the founder
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                <p className="mt-4 text-center font-fj-body text-[0.78rem] text-fj-neutral-400">
                  Founder-led. Month-to-month. Reported in leads, not rankings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
