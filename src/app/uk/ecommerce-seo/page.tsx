import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Script from 'next/script';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuthorCard from '@/components/v2/AuthorCard';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import './ecommerce-seo.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/ecommerce-seo';
const UPDATED = '2026-08-25';

/* ─── Breadcrumb: one array feeds both the visible trail and the JSON-LD, so they cannot drift. ─── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Ecommerce SEO Agency UK', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── External sources. Every URL below was fetched and confirmed to return HTTP 200 and to
   contain the claim attributed to it (checked 2026-08-25). Nothing on this page cites a source
   that was not opened first. ─── */
const SOURCES: { label: string; publisher: string; url: string; note: string }[] = [
  {
    label: 'Retail sales, Great Britain: July 2026',
    publisher: 'Office for National Statistics',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/july2026',
    note: 'The share of UK retail sales made online fell from 29.2% in June 2026 to 28.3% in July 2026. Released 21 August 2026.',
  },
  {
    label: 'SEO Best Practices for Ecommerce Sites',
    publisher: 'Google Search Central',
    url: 'https://developers.google.com/search/docs/specialty/ecommerce',
    note: 'Google’s own guidance for online shops. Names structured data, product data and URL structure as the key actions.',
  },
  {
    label: 'Pagination and incremental page loading',
    publisher: 'Google Search Central',
    url: 'https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading',
    note: 'Give each page in a list a unique URL. Do not index filtered or sorted copies of the same list.',
  },
  {
    label: 'Understanding Core Web Vitals and Google search results',
    publisher: 'Google Search Central',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    note: 'The good thresholds we work to: LCP under 2.5s, INP under 200ms, CLS under 0.1.',
  },
];

/* ─── FAQ source of truth. The visible accordion below is rendered FROM this array and the
   FAQPage JSON-LD is generated FROM this array. There is deliberately no second copy. ─── */
type FaqCat = 'choosing' | 'service' | 'pricing' | 'technical' | 'ai' | 'results';

const FAQ_CATS: { id: FaqCat; label: string; short: string }[] = [
  { id: 'choosing', label: 'CHOOSING AN AGENCY', short: 'Choosing' },
  { id: 'service', label: 'ABOUT THE SERVICE', short: 'Service' },
  { id: 'pricing', label: 'ENGAGEMENT & CONTRACTS', short: 'Engagement' },
  { id: 'technical', label: 'TECHNICAL SEO', short: 'Technical' },
  { id: 'ai', label: 'AI & FUTURE SEO', short: 'AI Search' },
  { id: 'results', label: 'RESULTS & REPORTING', short: 'Results' },
];

const FAQ_ITEMS: { cat: FaqCat; question: string; answer: string }[] = [
  // ── Choosing an agency ──
  { cat: 'choosing', question: 'What does an ecommerce SEO agency UK actually do?',
    answer: 'It grows the sales your shop gets from unpaid Google results. Four parts. Technical SEO fixes what stops Google crawling and indexing the shop. Category page SEO targets the big buying searches. Product page SEO targets the long specific ones. Links and content build the authority that makes it rank.' },
  { cat: 'choosing', question: 'How do I choose an ecommerce SEO agency in the UK?',
    answer: 'Three tests. Ask what they measure. If the answer is rankings rather than revenue, keep looking. Ask for Google Search Console screenshots from a real client, not a rank tracker. Search Console is Google’s own data. Then ask what happens in month one, before anything ranks.' },
  { cat: 'choosing', question: 'What should I ask an ecommerce SEO agency before signing?',
    answer: 'Six. Who does the work, and are they on this call? What is the notice period? Do you fix code yourselves or hand it back to our developer? How do you attribute revenue in GA4? What sort of site would a link come from? What would you refuse to do? The last one tells you most.' },
  { cat: 'choosing', question: 'Do you work with UK ecommerce brands outside London?',
    answer: 'Yes. We work with shops across the UK, including Manchester, Birmingham, Leeds, Bristol, Liverpool, Edinburgh, Glasgow and Nottingham. Ecommerce SEO is not local the way a plumber is. Your buyers search nationally, so we chase national buying searches, not city ones. Work runs remotely with a monthly call.' },

  // ── About the service ──
  { cat: 'service', question: 'What is included in FactoryJet ecommerce SEO services UK?',
    answer: 'A full technical crawl and a prioritised fix list in month one. Category page work: keyword mapping, H1 and meta rewrites, copy above the grid, internal linking and FAQ schema. Product long-tail targeting and Product structured data. Editorial links. Core Web Vitals. Monthly reporting from Google Search Console and GA4.' },
  { cat: 'service', question: 'What is not included in an ecommerce SEO engagement?',
    answer: 'Paid search and paid social are a separate service. Photography and video are not included. Writing every description for a huge catalogue is scoped on its own, because at thousands of products that is a content project. We do not buy links. We do not promise a ranking position, because nobody controls Google.' },
  { cat: 'service', question: 'How long does ecommerce SEO take to work in the UK?',
    answer: 'Technical and on-page work usually moves rankings first, at around six to eight weeks. Category pages on competitive terms take three to four months. Revenue that outpaces your paid channels normally takes six to nine. SEO compounds, so the second half of a year beats the first on the same effort.' },
  { cat: 'service', question: 'Which ecommerce platforms does FactoryJet support for SEO?',
    answer: 'Shopify including Shopify Plus, WooCommerce, Magento, now Adobe Commerce, and BigCommerce. Because we have developers in house we go past the audit. On Shopify we fix Liquid directly: wrong canonical tags, content that only appears after JavaScript runs, theme-generated duplicates. On WooCommerce we work in WordPress, Yoast or RankMath.' },
  { cat: 'service', question: 'What does month one of an ecommerce SEO engagement include?',
    answer: 'Foundation work, and it is included. A full crawl, twelve months of Google Search Console data and a GA4 ecommerce event audit. Then a prioritised fix list. It covers canonical tags, sitemaps, redirect chains, Core Web Vitals, schema gaps and platform-generated duplicates. We name the ten to twenty pages worth fixing first.' },

  // ── Engagement & contracts ──
  { cat: 'pricing', question: 'How is an ecommerce SEO engagement priced in the UK?',
    answer: 'We quote after the free audit call, never before. Four things set the shape: catalogue size, how much is already broken, how competitive your category is, and how much ongoing work you want. Most UK work runs as a monthly retainer, though a one-off audit or fixed-price migration milestones both work.' },
  { cat: 'pricing', question: 'Do you offer month-to-month ecommerce SEO contracts?',
    answer: 'Yes. Every engagement is month-to-month with no annual lock-in. Monthly terms line our incentives up with yours, and they stop the common pattern of selling a twelve-month contract on a pitch and then coasting. Only a large migration needs a longer runway, and we explain why before asking.' },
  { cat: 'pricing', question: 'What happens to the work if we stop the engagement?',
    answer: 'Everything stays yours. The code is in your theme. The content is on your site. The schema is in your templates. We host nothing of yours, and we use no script that dies when invoices stop. Search Console and GA4 stay in your accounts. On the last day you get the fix log and the keyword map.' },

  // ── Technical SEO ──
  { cat: 'technical', question: 'How does Shopify ecommerce SEO differ from WooCommerce SEO?',
    answer: 'They break in different ways. Shopify creates duplicate product URLs, because one product sits under both /products/ and /collections/. It also generates filter pages that eat crawl budget, and it limits canonical tag control. WooCommerce runs through Yoast or RankMath: more flexible, easier to misconfigure. Wrong canonicals and a stray noindex are the faults we find most.' },
  { cat: 'technical', question: 'How do you stop Shopify filter pages wasting crawl budget?',
    answer: 'Filtered and sorted collection views are near-duplicates. Google says plainly not to index them. We crawl first, because there are always more filter URLs than the client expects. Then we canonical those views back to the clean collection. Noise parameters get blocked. Filters people actually search for stay indexable.' },
  { cat: 'technical', question: 'What is category page SEO and why does it matter for UK ecommerce?',
    answer: 'It means optimising collection pages, the ones like Women’s Trainers or Artificial Plants, for the searches people use when they are ready to buy. Category pages carry most commercial search traffic, because Google reads them as the best match for a query like "buy artificial plants UK". No H1 strategy, no copy and no internal links means invisible.' },
  { cat: 'technical', question: 'What schema markup do you implement for ecommerce SEO?',
    answer: 'Product structured data with price, availability and review aggregation. That is what makes a listing eligible for rich results and Google Merchant Center feeds. FAQPage schema on category pages. BreadcrumbList so the hierarchy shows in results. Organization on the homepage. All of it checked in the Rich Results Test before shipping.' },
  { cat: 'technical', question: 'How do you handle Core Web Vitals for ecommerce stores?',
    answer: 'As SEO work, not a side project, because Google feeds them into ranking. The good thresholds are Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1. The three failures we see most are heavy category hero images, content that shifts as it loads, and third-party scripts.' },

  // ── AI & future SEO ──
  { cat: 'ai', question: 'What is AEO and why does it matter for UK ecommerce?',
    answer: 'AEO means Answer Engine Optimisation. It is shaping content so it can be quoted in AI answers from ChatGPT, Perplexity and Google AI Overviews, not just the ten blue links. For a shop that means three things. Clear FAQ content on category pages. Product structured data an AI can read. Being named on sites you do not own.' },
  { cat: 'ai', question: 'Will AI Overviews hurt my UK ecommerce organic traffic?',
    answer: 'They cut clicks on research searches, where the reader gets the whole answer and never clicks. On buying searches, where most shop revenue comes from, Google usually shows shopping carousels and product listings instead. So the effect is milder. This is still moving, so we watch Search Console for pages losing clicks while keeping impressions.' },
  { cat: 'ai', question: 'How do you optimise ecommerce stores for AI shopping recommendations?',
    answer: 'AI suggestions run on different signals from rankings. Four things matter. Accurate Product structured data with real price, stock and reviews. How often your brand is named in editorial content you do not own. Category FAQ content answering "what is the best" questions. Correct Google Business Profile data.' },

  // ── Results & reporting ──
  { cat: 'results', question: 'Who is the best ecommerce SEO agency in the UK?',
    answer: 'There is no single answer. An agency claiming the title without seeing your shop is selling, not advising. The right fit depends on your platform, catalogue size, organic baseline and budget. Whoever you shortlist, do three things. Ask for Search Console screenshots, not rank tracker dashboards. Get the notice period in writing. Ask what month one looks like.' },
  { cat: 'results', question: 'How does FactoryJet measure ecommerce SEO success?',
    answer: 'Organic revenue is the headline. We track it through Google Analytics 4 ecommerce events with correct source and medium attribution. Behind it sit organic sessions from Search Console, conversion rate, organic share of total revenue, and position movement on the terms we target. Monthly reports say plainly when sessions rose but revenue did not.' },
  { cat: 'results', question: 'How much UK retail actually happens online?',
    answer: 'Just under a third. The Office for National Statistics put the online share of retail sales at 28.3% in July 2026. That is down from 29.2% in June. Online spending was 6.5% higher than July 2025. Share moves month to month with promotions and weather, so one month is a poor basis for a decision.' },
];

export const metadata: Metadata = {
  title: 'Ecommerce SEO Agency UK: Revenue First | FactoryJet',
  description:
    'Ecommerce SEO agency UK. Ecommerce SEO services for Shopify, WooCommerce and Magento shops, measured in organic revenue rather than rankings. Free audit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Ecommerce SEO Agency UK: Revenue First | FactoryJet',
    description:
      'Ecommerce SEO agency UK. Ecommerce SEO services for Shopify, WooCommerce and Magento shops, measured in organic revenue rather than rankings. Free audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ecommerce-seo-og.webp', width: 1200, height: 630, alt: 'Ecommerce SEO Services UK: FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce SEO Agency UK',
      serviceType: 'Ecommerce SEO services',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Ecommerce SEO Agency UK',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      /* Freshness is weighted by Perplexity and Google AI Overviews, and this page carries
         ONS figures that are re-published monthly. Keep this in step with UPDATED. */
      datePublished: '2026-08-24',
      dateModified: UPDATED,
      citation: SOURCES.map((s) => ({
        '@type': 'CreativeWork',
        name: s.label,
        url: s.url,
        publisher: { '@type': 'Organization', name: s.publisher },
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

/* Chevron used by every FAQ row. Declared once, rendered from the loop. */
function FaqChevron() {
  return (
    <span className="chevron">
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function EcommerceSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="uk-eseo">
<main>

<Breadcrumbs items={crumbs} />



{/* ════════════════════════════════════════════════
  1. HERO; Light cream, wider text focus
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <div className="flex-wrap mb-3">
          <span className="chip-green"><span className="dot dot-green"></span>UK Ecommerce SEO Agency</span>
          <span className="chip">Revenue-Focused SEO</span>
        </div>
        <h1>Ecommerce SEO Agency UK: Organic Revenue, Not Just Rankings</h1>
        <p className="lead mt-4" style={{ maxWidth: '580px' }}>Most UK ecommerce SEO agencies show you rankings. We show you revenue. Category architecture, product page optimisation and technical SEO Google can actually crawl, on Shopify, WooCommerce and Magento.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
          <HeroInlineForm region="uk" source="uk_ecommerce_seo_hero" submitLabel="Get my free SEO audit" />
          <a href="#services" className="btn btn-outline">See Our SEO Services</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
          <span className="trust-pill"><span className="dot dot-green"></span> 500+ ecommerce stores served</span>
          <span className="trust-pill"><span className="dot dot-green"></span> Month-to-month contracts</span>
          <span className="trust-pill"><span className="dot dot-green"></span> No ranking without revenue</span>
        </div>
      </div>

      {/* Right: Revenue scorecard; green theme, distinct from Shopify dev page */}
      <div className="card card-top-green">
        <p className="eyebrow" style={{ color: 'var(--green)' }}>AVERAGE ECOMMERCE SEO RESULTS</p>
        <p className="pull-quote-green" style={{ fontSize: '17px' }}>Rankings are vanity. Organic revenue is the metric.</p>
        <div style={{ marginTop: '20px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Organic Revenue Growth</div>
              <div className="scorecard-note">month 3 vs month 1, client average</div>
            </div>
            <div className="scorecard-val">+42%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Category Page Rankings</div>
              <div className="scorecard-note">average gain on target terms</div>
            </div>
            <div className="scorecard-val">+18 pos</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Organic Conversion Rate</div>
              <div className="scorecard-note">organic sessions to transactions, FactoryJet client average</div>
            </div>
            <div className="scorecard-val">2.1%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Time to First Rankings Lift</div>
              <div className="scorecard-note">technical and on-page work</div>
            </div>
            <div className="scorecard-val">6–8 wks</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Contract Commitment</div>
              <div className="scorecard-note">no annual lock-in</div>
            </div>
            <div className="scorecard-val">Month-to-month</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--n100)', marginTop: '4px', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Results vary by market, competition, and site authority. Ranges based on FactoryJet client data 2022–2026.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  2. ANSWER-FIRST BLOCK; the direct answer to "ecommerce seo agency uk",
     placed immediately under the hero so it is the first thing after the H1.
     Light by design; the page keeps exactly one dark section (the closing CTA).
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--n200)', borderBottom: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '780px' }}>
      <span className="eyebrow">THE SHORT ANSWER</span>
      <h2 style={{ marginTop: '12px', fontSize: 'clamp(1.4rem,2.8vw,2rem)' }}>What an ecommerce SEO agency in the UK actually does</h2>
      <p className="lead" style={{ marginTop: '16px' }}>
        An <strong style={{ color: 'var(--ink)' }}>ecommerce SEO agency in the UK</strong> grows the sales your shop gets
        from unpaid Google results. FactoryJet does it in four moves. Fix what stops Google crawling
        and indexing the shop. Optimise the category pages that carry the buying searches. Optimise
        product pages for the long specific ones. Then build the links and content that make it all
        rank. We have developers in house, so a theme code fix does not need a separate developer.
      </p>
      <div className="two-up" style={{ marginTop: '28px' }}>
        <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '22px 24px' }}>
          <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>ECOMMERCE SEO SERVICES UK: WHAT YOU GET</p>
          <ul className="check-list">
            <li><strong>Technical SEO audit</strong> in month one, as a prioritised fix list</li>
            <li><strong>Category page SEO</strong>: keyword mapping, H1 and meta rewrites, on-page copy</li>
            <li><strong>Product page SEO</strong>: long-tail targeting and Product structured data</li>
            <li><strong>Editorial link building</strong>, never paid directories</li>
            <li><strong>Content</strong> for the research searches above your buying pages</li>
            <li><strong>Core Web Vitals</strong> work on the pages that earn money</li>
            <li><strong>Monthly reporting</strong> that opens with organic revenue</li>
          </ul>
        </div>
        <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '22px 24px' }}>
          <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>WHO THIS IS FOR</p>
          <ul className="check-list">
            <li>UK shops on <strong>Shopify, WooCommerce, Magento, BigCommerce</strong></li>
            <li>Brands whose <strong>organic revenue is flat</strong> while paid spend rises</li>
            <li>Anyone whose last agency <strong>reported rankings, never revenue</strong></li>
            <li>Shops that have <strong>never had a technical SEO audit</strong></li>
            <li>Category pages with <strong>no copy above the product grid</strong></li>
            <li>Teams who want <strong>month-to-month terms</strong>, not a lock-in</li>
          </ul>
        </div>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '18px' }}>
        Monthly retainer, one-off audit, or fixed-price migration milestones. Last reviewed {UPDATED}.
      </p>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  2b. IMAGE BAND; light cream, four proof figures beside the image
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--cream)', padding: '0', borderBottom: '1px solid var(--n200)' }}>
  {/* The band now sits below the answer-first block rather than directly under the hero,
      so this image is no longer the LCP candidate. Lazy, normal priority: a high-priority
      fetch here would compete with the real above-the-fold content for bandwidth. */}
  <div className="wrap band-split">
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img width="1200" height="800" loading="lazy" decoding="async" src="https://im.runware.ai/image/os/a02d21/ws/3/ii/cea4b179-9321-4a20-b849-4cae7995f000.webp"
        alt="Ecommerce SEO dashboard showing organic traffic and revenue growth for a UK online store, FactoryJet"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to right,transparent 62%,#FAFAF7 100%)' }}></div>
    </div>
    <div style={{ padding: '48px 24px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>+42%</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>Organic Revenue · Month 3 Avg</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>6&#8211;8 Wks</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>First Rankings Lift</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>500+</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>Ecommerce Stores Served</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>M-T-M</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>No Annual Lock-In</div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3. RANK TRACKER VISUAL; unique section (replaces trust strip)
     Shows actual keyword position movements; distinct from Page 1
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--white)', padding: '56px 0', borderBottom: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <span className="eyebrow">KEYWORD POSITION TRACKER</span>
      <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px' }}>The categories that drive UK ecommerce revenue</h2>
    </div>
    <div className="col-4" style={{ gap: '16px' }}>
      <div className="rank-card">
        <div className="rank-kw">Category: Women's Trainers UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#3</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', textDecoration: 'line-through' }}>#47</div>
        </div>
        <div className="rank-change">↑ 44 positions · 8 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '88%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Category: Artificial Plants UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#5</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', textDecoration: 'line-through' }}>#62</div>
        </div>
        <div className="rank-change">↑ 57 positions · 6 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '80%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Product: Leather Sofa UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#2</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', textDecoration: 'line-through' }}>#31</div>
        </div>
        <div className="rank-change">↑ 29 positions · 5 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '95%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Branded: B2B Plant Wholesale</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#1</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', textDecoration: 'line-through' }}>#18</div>
        </div>
        <div className="rank-change">↑ 17 positions · 4 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '99%' }}></div></div>
      </div>
    </div>
    <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--n400)' }}>Illustrative. Results depend on competition, authority and content volume. Positions verified in Google Search Console.</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  4. WHY ECOMMERCE SEO; 60/40 with revenue timeline
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">WHY ECOMMERCE SEO</span>
        <h2 style={{ marginBottom: '20px' }}>Paid stops the moment you stop paying. Organic compounds.</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>Paid search is rented traffic. Stop the budget and the traffic stops, while the cost per click only moves one way. Organic is the one channel where last year's work still earns this year.</p>

        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Technical SEO Audit</span><span className="chip">Category Page SEO</span>
          <span className="chip">Product Page Optimisation</span><span className="chip">Link Building</span>
          <span className="chip">Schema Markup</span><span className="chip">Content Strategy</span>
        </div>

        <div className="stack">
          <p>Ecommerce SEO is a more technical job than it was five years ago. Google rewards shops that pass Core Web Vitals. That means Largest Contentful Paint under 2.5 seconds and Interaction to Next Paint under 200 milliseconds [4]. It also rewards correct structured data [2], and categories organised the way shoppers search.</p>
          <div className="pull-quote-green">The UK shops winning organic now built the foundation two years ago.</div>
          <p>We start with a technical audit, not keyword research, because nothing ranks on a shop Google cannot index. Crawl budget and Core Web Vitals first, then category architecture, product pages and links. The result compounds, and it does not evaporate when a budget is paused.</p>
          {/* Visual: Platform expertise + sectors served */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px' }}>PLATFORMS</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Shopify</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>WooCommerce</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Magento</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>BigCommerce</span>
              </div>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px' }}>SECTORS</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Home Décor</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Fashion</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>B2B Wholesale</span>
                <span style={{ padding: '4px 10px', background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '999px', fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>Food &amp; Drink</span>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Compound growth visual; redesigned right panel */}
      <div>
        <div className="card card-top-green" style={{ padding: '0', overflow: 'hidden' }}>

          {/* Header */}
          <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--n100)' }}>
            <span className="eyebrow" style={{ color: 'var(--green)', margin: '0', display: 'block' }}>ORGANIC REVENUE: COMPOUND GROWTH</span>
            <p style={{ fontSize: '12px', color: 'var(--n400)', margin: '6px 0 0', lineHeight: '1.5' }}>Representative of FactoryJet engagements. Results depend on competition and authority.</p>
          </div>

          {/* Bar chart */}
          <div style={{ padding: '20px 24px 0' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '96px' }}>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.11', borderRadius: '3px 3px 0 0', height: '10%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.20', borderRadius: '3px 3px 0 0', height: '18%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.30', borderRadius: '3px 3px 0 0', height: '28%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.42', borderRadius: '3px 3px 0 0', height: '40%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.54', borderRadius: '3px 3px 0 0', height: '53%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.66', borderRadius: '3px 3px 0 0', height: '64%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.78', borderRadius: '3px 3px 0 0', height: '75%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', opacity: '.90', borderRadius: '3px 3px 0 0', height: '85%' }}></div>
              <div style={{ flex: '1', background: 'var(--green)', borderRadius: '3px 3px 0 0', height: '100%' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--n200)', paddingTop: '5px' }}>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M1</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M2</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M3</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M4</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M5</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M6</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M7</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M8</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.08em', color: 'var(--n400)' }}>M9+</span>
            </div>
          </div>

          {/* Milestone 2x2 grid */}
          <div style={{ borderTop: '1px solid var(--n100)', marginTop: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--n100)' }}>
              <div style={{ padding: '14px 20px', borderRight: '1px solid var(--n100)' }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--green)', lineHeight: '1' }}>Wk 3–4</div>
                <div style={{ fontSize: '11px', color: 'var(--n600)', marginTop: '4px', lineHeight: '1.4' }}>First ranking improvements</div>
              </div>
              <div style={{ padding: '14px 20px' }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--green)', lineHeight: '1' }}>Month 3</div>
                <div style={{ fontSize: '11px', color: 'var(--n600)', marginTop: '4px', lineHeight: '1.4' }}>Revenue lift visible in GA4</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '14px 20px', borderRight: '1px solid var(--n100)' }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--green)', lineHeight: '1' }}>Month 6</div>
                <div style={{ fontSize: '11px', color: 'var(--n600)', marginTop: '4px', lineHeight: '1.4' }}>Organic outpaces paid CPCs</div>
              </div>
              <div style={{ padding: '14px 20px' }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--green)', lineHeight: '1' }}>Month 9+</div>
                <div style={{ fontSize: '11px', color: 'var(--n600)', marginTop: '4px', lineHeight: '1.4' }}>Compounding without ad spend</div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div style={{ padding: '12px 20px', background: 'rgba(5,150,105,.05)', borderTop: '1px solid rgba(5,150,105,.15)' }}>
            <p style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', margin: '0' }}>Month-to-month. No lock-in. Results hold us accountable.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. DARK PROBLEM SECTION
════════════════════════════════════════════════ */}
<section className="light-band">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">THE PROBLEM WITH MOST UK ECOMMERCE SEO</span>
      <h2 style={{ marginTop: '12px' }}>You're ranking for terms nobody searches, or searches that don't buy.</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Three failure modes we find on almost every UK ecommerce SEO audit.</p>
    </div>
    <div className="col-3">
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>📊</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>Rankings without revenue intent</h3>
        <p>Ranking for "how to clean trainers" when you sell trainers is vanity SEO. Guides have their place. Most of the effort belongs on the searches people make when they are ready to buy, like "buy women's trainers UK". Most agencies optimise for what ranks easily, not for what converts.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🕷️</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>Crawl budget wasted on duplicate pages</h3>
        <p>Shopify and WooCommerce generate hundreds of near-duplicate URLs by default: filtered collections, pagination, sort variants, tracking parameters. Google says give each page in a list a unique URL. It also says do not index filtered or sorted copies [3]. Until that is fixed, crawl budget goes on pages nobody buys from.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🏗️</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>Category pages without content</h3>
        <p>A collection page with 24 thumbnails, no copy above the grid, no H1 strategy and no internal links is invisible to Google. Category pages catch the highest-volume buying searches. That makes them the pages carrying most of a shop's organic revenue. Most UK shops still treat them as grid containers.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6. SERVICES GRID; 6 ecommerce SEO services
════════════════════════════════════════════════ */}
<section id="services" className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">ECOMMERCE SEO SERVICES UK</span>
      <h2 style={{ marginTop: '12px' }}>Six ecommerce SEO services that move revenue, not just rankings</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Every engagement starts with a technical audit. Then we prioritise by what moves revenue fastest, not by what is most billable.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Ecommerce Technical SEO Audit</h3>
        <p style={{ fontSize: '14px' }}>Full crawl of your Shopify, WooCommerce or Magento shop: canonical tag errors, crawl budget waste, Core Web Vitals failures, duplicate pages and schema gaps. A prioritised fix list, not a 90-page PDF.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Every engagement starts here.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Category Page SEO</h3>
        <p style={{ fontSize: '14px' }}>Keyword-mapped category hierarchy, H1 and meta rewrites, copy above the grid, FAQ schema, internal linking and pagination. Where UK shops win or lose organic search.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Category pages carry most of the buying searches.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Product Page Optimisation</h3>
        <p style={{ fontSize: '14px' }}>Long-tail targeting per product, Product structured data with price, availability and review aggregation for Google Merchant Center, plus FAQ content answering the "is this worth buying" questions.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Structured data is what makes a listing eligible for rich results [2].</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>UK Link Building for Ecommerce</h3>
        <p style={{ fontSize: '14px' }}>Editorial links from UK lifestyle and trade publications. Supplier and manufacturer requests. Digital PR with angles that earn links rather than buy them.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Authority is the multiplier on every on-page fix.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Ecommerce Content Strategy</h3>
        <p style={{ fontSize: '14px' }}>Buying guides, comparisons and how-to articles for the research searches above your product pages. Builds topical authority.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Catches shoppers before they have decided.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>AI Search Optimisation (AEO)</h3>
        <p style={{ fontSize: '14px' }}>Structured data, FAQ schema and answer-first formats that get your shop quoted in ChatGPT, Google AI Overviews and Perplexity.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Answer-first content and clean schema are what AI can quote.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6b. HOW THE ENGAGEMENT RUNS; five numbered stages, each with its own deliverables
════════════════════════════════════════════════ */}
<section id="process" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-6040" style={{ alignItems: 'start' }}>
      <div>
        <span className="eyebrow">HOW A FACTORYJET ENGAGEMENT RUNS</span>
        <h2 style={{ marginTop: '12px', marginBottom: '16px' }}>Five stages, and what lands at the end of each</h2>
        <p className="lead" style={{ marginBottom: '28px' }}>
          Most SEO proposals describe activity. This one describes deliverables. If you cannot point
          at the thing produced, the stage did not happen.
        </p>
        <ol className="step-list">
          <li>
            <h3>Discovery call and free pre-engagement audit</h3>
            <p>Thirty minutes. Beforehand we pull what we can see from outside, plus any access you share. It is free.</p>
            <ul className="check-list">
              <li>Google Search Console performance, last twelve months</li>
              <li>Core Web Vitals status on your top commercial pages</li>
              <li>The biggest indexing problems visible from outside</li>
              <li>Which category pages carry traffic today, and which carry none</li>
              <li>An honest read on whether we are the right fit</li>
            </ul>
          </li>
          <li>
            <h3>Month one: full technical audit and fix list</h3>
            <p>A full crawl, then a fix list ordered by revenue impact, not by how easy each item is.</p>
            <ul className="check-list">
              <li>Canonical tag mapping across products and collections</li>
              <li>Sitemap, robots.txt and redirect chain review</li>
              <li>Duplicate content from platform-generated URLs</li>
              <li>Schema markup gaps, checked in the Rich Results Test</li>
              <li>GA4 ecommerce event audit, so revenue can be attributed</li>
              <li>The ten to twenty pages worth fixing first, named</li>
            </ul>
          </li>
          <li>
            <h3>Months one to two: quick wins and the crawl fix</h3>
            <p>The changes that move first, shipped while the deeper work is still running.</p>
            <ul className="check-list">
              <li>Meta title and H1 rewrites on your top commercial pages</li>
              <li>Canonical tags on filtered and sorted collection views</li>
              <li>Noise parameter patterns blocked from crawling</li>
              <li>Product structured data fixed for Google Merchant Center</li>
              <li>The worst Core Web Vitals offenders on category pages</li>
            </ul>
          </li>
          <li>
            <h3>Months two to four: category and product page work</h3>
            <p>The pages carrying the buying searches become landing pages, not grid containers.</p>
            <ul className="check-list">
              <li>Keyword-mapped category hierarchy, one primary term per page</li>
              <li>Copy above the product grid that answers the search</li>
              <li>FAQ content and FAQPage schema on category pages</li>
              <li>Internal linking between categories and buying guides</li>
              <li>Long-tail targeting on products with real search demand</li>
              <li>Pagination fixed so every page in a list has a unique URL</li>
            </ul>
          </li>
          <li>
            <h3>Month four onwards: authority, content and compounding</h3>
            <p>Once the shop is sound and the money pages are optimised, the work shifts to earning authority.</p>
            <ul className="check-list">
              <li>Editorial links from UK trade and lifestyle publications</li>
              <li>Supplier and manufacturer link requests, the win most shops never ask for</li>
              <li>Buying guides and comparisons for the research searches</li>
              <li>Answer-first content and schema so AI engines can quote you</li>
              <li>Monthly reporting on revenue, sessions and conversion rate</li>
              <li>A video call to walk through what moved and what did not</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="card" style={{ position: 'sticky', top: '96px' }}>
        <p className="eyebrow" style={{ color: 'var(--green)' }}>REPORTING CADENCE</p>
        <ul className="check-list" style={{ marginTop: '4px' }}>
          <li><strong>Weekly</strong>: a short note on what shipped</li>
          <li><strong>Monthly</strong>: full report plus a video call to walk through it</li>
          <li><strong>Quarterly</strong>: a re-crawl, so new technical debt does not build up</li>
          <li><strong>On request</strong>: raw Search Console and GA4 exports</li>
        </ul>
        <div style={{ borderTop: '1px solid var(--n200)', marginTop: '18px', paddingTop: '18px' }}>
          <p className="eyebrow" style={{ color: 'var(--green)' }}>ACCESS WE ASK FOR</p>
          <ul className="check-list" style={{ marginTop: '4px' }}>
            <li>Google Search Console, read and manage</li>
            <li>Google Analytics 4, read access</li>
            <li>Your platform admin, or a staff account</li>
            <li>Theme code access, if we are fixing Liquid</li>
          </ul>
          <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '14px' }}>
            Access stays in your accounts, and you can revoke it at any time.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6c. INCLUDED / NOT INCLUDED; the scope boundary written down
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
      <span className="eyebrow">SCOPE</span>
      <h2 style={{ marginTop: '12px' }}>What is in an engagement, and what is not</h2>
      <p className="lead" style={{ marginTop: '16px' }}>
        Scope arguments in month five start with a vague proposal in month zero. Here is the
        boundary in writing, before you ask.
      </p>
    </div>
    <div className="two-up">
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '26px 28px' }}>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '14px' }}>INCLUDED AS STANDARD</p>
        <ul className="check-list">
          <li>Full technical crawl and prioritised fix list, month one</li>
          <li>Implementation of those fixes, not just a document describing them</li>
          <li>Liquid, theme and template edits on Shopify, in the same engagement</li>
          <li>WordPress, Yoast and RankMath configuration on WooCommerce</li>
          <li>Category keyword mapping, H1 and meta rewrites, on-page copy</li>
          <li>Product page long-tail targeting and Product structured data</li>
          <li>FAQPage, BreadcrumbList and Organization schema, validated before shipping</li>
          <li>Core Web Vitals work on the pages that earn revenue</li>
          <li>Editorial link building and digital PR outreach</li>
          <li>Buying guides and comparisons for research searches</li>
          <li>GA4 ecommerce event audit and attribution repair</li>
          <li>Monthly reporting and a monthly video call</li>
        </ul>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '26px 28px' }}>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '14px' }}>NOT INCLUDED, AND WHY</p>
        <ul className="cross-list">
          <li><strong>Paid search and paid social.</strong> A different discipline. Quoted separately.</li>
          <li><strong>Photography and video.</strong> We will say which pages need better imagery. We will not shoot it.</li>
          <li><strong>Every description for a large catalogue.</strong> At thousands of products that is a content project, scoped on its own.</li>
          <li><strong>Bought links and paid directories.</strong> They work until they do not, and the cleanup costs more than the links did.</li>
          <li><strong>A guaranteed ranking position.</strong> Nobody controls Google. An agency promising one is guessing with your money.</li>
          <li><strong>A full site rebuild.</strong> Our development team quotes that as fixed-price milestones, not folded into a retainer.</li>
          <li><strong>Marketplace listings.</strong> Amazon Seller Central and eBay follow different rules from Google. Separate scope.</li>
        </ul>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '16px' }}>
          Any of it can be added as its own piece of work. It is just not silently assumed.
        </p>
      </div>
    </div>
  </div>
</section>

{/* fj-embed: this page scopes its styles with element selectors (.uk-eseo a, .uk-eseo p),
    which out-specify the single Tailwind utility classes a shared v2 component relies on.
    Without the wrapper the CTA button loses its white label. See ecommerce-seo.css. */}
<div className="fj-embed">
  <MidPageCTA
    headline={'Want to know what is actually broken on your store?'}
    sub={'Send the URL. We pull your Google Search Console data, run a crawl, and bring the three organic revenue problems we can see to the call. No commitment.'}
    label={'Get a free ecommerce SEO audit'}
    note={'Bhavesh replies within one business day.'}
  />
</div>

{/* ════════════════════════════════════════════════
  7. STATS BAND; green-tinted, revenue focused
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div className="col-4">
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Organic Revenue</div>
        <div className="stat-num-green">+42%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>average organic revenue growth by month 3</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>vs. month 1 of engagement</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Rankings Lift</div>
        <div className="stat-num-green">+18 pos</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>average category page position gain</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>on target commercial keywords</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Platform Coverage</div>
        <div className="stat-num-green">3</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>core platforms: Shopify, WooCommerce, Magento</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>plus BigCommerce and custom builds</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Contract Type</div>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>M-T-M</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>month-to-month, no annual lock-in</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>results keep us, not a clause</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  8. TECH STACK; Reversed 40/60 with tools panel
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-4060">
      {/* Tools panel 40% */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ color: 'var(--green)', marginBottom: '0' }}>SEO TOOLS WE USE</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row">
            <div className="scorecard-metric">Technical Audits</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Screaming Frog, Semrush</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Keyword Research</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Semrush, Ahrefs, Keyword Planner</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Rank Data</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Google Search Console</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Performance</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>PageSpeed Insights</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Content</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Surfer SEO, Clearscope</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Schema Validation</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Rich Results Test, Google Merchant Center</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Analytics</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Google Analytics 4, Google Tag Manager</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--green)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Every claim backed by Google Search Console, not a rank tracker.</p>
        </div>
      </div>

      {/* Right 60%: text */}
      <div>
        <span className="eyebrow">HOW WE MEASURE SEO SUCCESS</span>
        <h2 style={{ marginBottom: '20px' }}>We track organic revenue in GA4. Not positions in a rank tracker.</h2>
        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Google Search Console</span><span className="chip">GA4 Ecommerce</span>
          <span className="chip">Semrush</span><span className="chip">Ahrefs</span>
          <span className="chip">Screaming Frog</span><span className="chip">Core Web Vitals</span>
        </div>
        <div className="stack">
          <p className="lead"><strong style={{ color: 'var(--ink)' }}>Organic revenue, sessions and conversion rate</strong> are the three metrics every monthly report opens with. Position tracking supports them. It is never the headline.</p>

          {/* Visual: 3 metric source cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>🔍</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>Google Search Console, our primary source</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Real UK impressions and clicks. A rank tracker can put the same keyword at position 4 and 11 in one week, depending on the data centre it sampled.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>📊</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>GA4 ecommerce, the closed loop</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Sessions, add-to-carts, transactions and revenue. If we cannot trace a keyword to a sale, we do not count it.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>📈</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>Organic share of revenue</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>What share of total revenue comes from organic search. The most useful metric you are probably not tracking.</p>
              </div>
            </div>
          </div>

          <div className="pull-quote-green" style={{ marginTop: '8px' }}>Position 1 on a keyword nobody searches is worthless. Position 5 on one that converts is your business.</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  9. UK MARKET CONTEXT
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 48px' }}>
      <span className="eyebrow">UK ECOMMERCE SEO MARKET</span>
      <h2 style={{ marginTop: '12px' }}>The UK opportunity, and why organic compounds while paid does not</h2>
      <div className="stack" style={{ marginTop: '24px' }}>
        <p className="lead">Just under a third of UK retail now happens online. The Office for National Statistics put the online share at 28.3% in July 2026, down from 29.2% in June, with online spending 6.5% higher than a year earlier [1]. Share wobbles with promotions and weather. Spend does not.</p>
      </div>

      {/* Visual: UK categories grid */}
      <div style={{ marginTop: '24px' }}>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>UK CATEGORIES WE WORK IN</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Home Décor</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Plants, furniture, soft furnishings</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Fashion</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Clothing, trainers, accessories</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>B2B Wholesale</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Trade plants, promotional goods</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Food &amp; Drink</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>D2C, subscription, gifting</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Professional Services</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Service ecommerce, booking</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--green)', textAlign: 'center' }}>Each has its own keyword architecture and feed signals</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>28.3%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>of all UK retail sales were made online in July 2026</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>Office for National Statistics, Retail sales Great Britain, July 2026 [1]</p>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>+6.5%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>online spending in July 2026 versus July 2025</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>same ONS release: online spend keeps growing [1]</p>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>29.2%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>the online share one month earlier, in June 2026</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>one month is never enough to judge a trend [1]</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  10. COMPARISON TABLE
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">HOW WE COMPARE</span>
      <h2 style={{ marginTop: '12px' }}>FactoryJet Ecommerce SEO vs. UK alternatives</h2>
      <p className="lead" style={{ marginTop: '16px' }}>What to ask when comparing UK ecommerce SEO agencies, and how we answer each.</p>
    </div>
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="cmp-table" style={{ minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={{ width: '32%' }}>What to ask</th>
            <th className="fj">FactoryJet</th>
            <th>Large UK SEO Agency</th>
            <th>Freelancer</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="feat">Reports organic revenue, not just rankings</td><td className="fj yes">✓ Revenue-first</td><td className="partial">Rankings first</td><td className="partial">Varies</td></tr>
          <tr><td className="feat">Technical SEO audit in month 1</td><td className="fj yes">✓ Always</td><td className="yes">✓ Yes</td><td className="partial">Often extra</td></tr>
          <tr><td className="feat">Shopify-specific SEO: Liquid, canonicals, schema</td><td className="fj yes">✓ Native Shopify dev team</td><td className="partial">Generic</td><td className="partial">Varies</td></tr>
          <tr><td className="feat">Category page copy and on-page SEO</td><td className="fj yes">✓ Included</td><td className="partial">Often add-on</td><td className="partial">Separate scope</td></tr>
          <tr><td className="feat">Editorial links, not paid directories</td><td className="fj yes">✓ Editorial UK links</td><td className="partial">Varies</td><td className="no">✗ Rarely</td></tr>
          <tr><td className="feat">Month-to-month, no annual lock-in</td><td className="fj yes">✓ Month-to-month</td><td className="no">✗ 12-month minimum</td><td className="yes">✓ Flexible</td></tr>
          <tr><td className="feat">Same team from audit onwards</td><td className="fj yes">✓ Yes</td><td className="no">✗ Often rotated</td><td className="yes">✓ Yes</td></tr>
          <tr><td className="feat">AI search optimisation (AEO/GEO)</td><td className="fj yes">✓ Schema + AEO included</td><td className="partial">Emerging</td><td className="no">✗ Rarely</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  12. FOUNDER + HIRE SECTION
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">ECOMMERCE SEO AGENCY UK</span>
        <h2 style={{ marginBottom: '20px' }}>Hire an ecommerce SEO agency that ties deliverables to revenue</h2>
        <div className="stack">
          <p className="lead">When you hire an <strong style={{ color: 'var(--ink)' }}>ecommerce SEO agency in the UK</strong> you are buying one outcome: more organic revenue from the catalogue you already have. We scope by what moves revenue, not by how many "SEO tasks" we can bill.</p>
          {/* Visual: 2 differentiator cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>🔧</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>In-house Shopify dev</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>When Liquid blocks Googlebot from indexing a category page, we fix it that week.</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>📅</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Month-to-month only</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>No lock-in. We earn the next month. If revenue is not growing there is no clause to hide behind.</p>
            </div>
          </div>
          <div className="pull-quote" style={{ fontSize: '17px' }}>Month-to-month contracts. No lock-in. Results keep us.</div>
        </div>
        <div style={{ marginTop: '28px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>When UK brands call us</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Organic revenue is flat while paid spend holds steady</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• A previous agency showed rankings but never revenue</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• The shop has never had a technical SEO audit</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Category pages have no copy above the product grid</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Search Console shows crawl errors nobody has fixed</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#FF5C00 0%,#FF8C00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '3px solid rgba(255,92,0,.2)', flexShrink: '0' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: '1' }}>B</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Bhavesh</h3>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '16px' }}>Founder · FactoryJet</p>
        <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time. If I cannot show you in Search Console where the organic revenue came from, we are working on the wrong things."</p>
        </div>
        <ModalCTAButton label="Book a Free SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30 minutes. We audit your Search Console performance before the call.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. WHY FACTORYJET; Second dark section
════════════════════════════════════════════════ */}
<section className="light-band">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">WHY FACTORYJET FOR ECOMMERCE SEO</span>
      <h2 style={{ marginTop: '12px' }}>We build Shopify shops. We know why they do not rank.</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Most ecommerce SEO agencies have never written a line of Liquid. When they audit your shop they see what the crawler shows them. We see what we built.</p>
    </div>
    <div className="col-3">
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🔧</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>In-house Shopify dev team</h3>
        <p>Ecommerce SEO keeps surfacing Liquid problems. Theme bugs that block indexing. Content that loads only after JavaScript. Canonical tags hardcoded into theme logic. Most agencies hand those back to your developer. We fix them ourselves.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>📈</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>Revenue reporting from day one</h3>
        <p>Onboarding includes a Google Analytics 4 ecommerce event audit. If GA4 is not tracking organic sessions through to transactions we fix that first, because without attribution nobody can prove what works.</p>
      </div>
      <div className="light-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🏆</span>
        <h3 style={{ color: 'var(--ink)', marginBottom: '12px' }}>Twelve years of ecommerce, every algorithm shift</h3>
        <p>Over a decade of building and optimising shops. Every major Google update from Florida to the Helpful Content system. Migrations from static HTML to Shopify Liquid. The shift from keyword density to entity-based SEO.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14. FAQ; rendered FROM FAQ_ITEMS. The FAQPage JSON-LD in `jsonLd` maps the SAME array,
      so the visible questions and the structured data cannot drift apart. Do not
      hand-write a second copy of these questions anywhere on this page.
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px' }}>
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h2 style={{ marginTop: '12px' }}>Questions UK brands ask before hiring an agency</h2>
      <p className="lead" style={{ marginTop: '16px' }}>
        {FAQ_ITEMS.length} questions we answer on every discovery call, including the ones most
        agencies would rather you did not ask.
      </p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      {FAQ_CATS.map((c) => (
        <a key={c.id} href={`#faq-${c.id}`}>
          {c.short} <span className="pill-count">{FAQ_ITEMS.filter((f) => f.cat === c.id).length}</span>
        </a>
      ))}
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          {FAQ_CATS.map((c) => (
            <a key={c.id} href={`#faq-${c.id}`}>
              {c.label} <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.cat === c.id).length}</span>
            </a>
          ))}
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Can&#8217;t find it? Talk to the founder &#8594;</a>
          <p>{FAQ_ITEMS.length} questions answered</p>
        </div>
      </aside>

      {/* Accordion */}
      <div>
        {FAQ_CATS.map((cat) => {
          const items = FAQ_ITEMS.filter((f) => f.cat === cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} id={`faq-${cat.id}`} style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
              <div className="faq-cat-header">
                <div className="faq-cat-bar"></div>
                <p className="faq-cat-label">{cat.label}</p>
              </div>
              <ul className="faq-list">
                {items.map((f) => (
                  <li key={f.question}>
                    <details className="faq-item">
                      <summary>
                        <span className="q-text">{f.question}</span>
                        <FaqChevron />
                      </summary>
                      <div className="faq-ans"><p>{f.answer}</p></div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14b. SOURCES; every URL below was fetched and confirmed before being cited
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)', borderTop: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '820px' }}>
      <span className="eyebrow">SOURCES</span>
      <h2 style={{ marginTop: '12px', fontSize: 'clamp(1.25rem,2.5vw,1.75rem)' }}>Where the outside numbers on this page come from</h2>
      <p style={{ marginTop: '12px', marginBottom: '24px' }}>
        Each link below was opened and checked on {UPDATED}. Figures about FactoryJet client
        results are our own data and are labelled where they appear.
      </p>
      <ul className="src-list">
        {SOURCES.map((s, i) => (
          <li key={s.url}>
            <span style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', marginRight: '8px' }}>[{i + 1}]</span>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
            <span style={{ color: 'var(--n400)' }}> &#183; {s.publisher}</span>
            <br />
            {s.note}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  15. UK CITIES + RELATED
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Ecommerce SEO services across the UK</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
      <a href="/uk/london" className="city-pill">London</a>
      <a href="/uk/manchester" className="city-pill">Manchester</a>
      <a href="/uk/birmingham" className="city-pill">Birmingham</a>
      <a href="/uk/leeds" className="city-pill">Leeds</a>
      <a href="/uk/bristol" className="city-pill">Bristol</a>
      <a href="/uk/sheffield" className="city-pill">Sheffield</a>
      <a href="/uk/liverpool" className="city-pill">Liverpool</a>
      <a href="/uk/edinburgh" className="city-pill">Edinburgh</a>
      <a href="/uk/glasgow" className="city-pill">Glasgow</a>
      <a href="/uk/nottingham" className="city-pill">Nottingham</a>
    </div>
    <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Related Services</h3>
    <div className="col-3">
      <a href="/uk/shopify-seo" className="blog-card">
        <p>Shopify SEO Agency UK: optimisation specific to the platform →</p>
      </a>
      <a href="/uk/shopify-development" className="blog-card">
        <p>Need the shop built first? UK Shopify development →</p>
      </a>
      <a href="/blog/ecommerce-seo-vs-paid-ads-uk-2026" className="blog-card">
        <p>UK ecommerce SEO vs paid ads: the maths in 2026</p>
      </a>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  16. FINAL CTA
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--dark)', padding: '80px 0' }}>
  <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
    <span className="eyebrow" style={{ color: 'rgba(5,150,105,.9)' }}>READY TO GROW ORGANIC REVENUE</span>
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Get a free ecommerce SEO audit and see what is costing you revenue</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.65)', fontSize: '16px', lineHeight: '1.7' }}>Before the call we pull your Search Console data and name your three biggest organic revenue problems: crawl issues on category pages, buying searches stuck on page two, and schema gaps keeping you out of Merchant Center.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Get Your Free SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/uk/shopify-development" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>See Shopify Development Services</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.55)', marginTop: '20px' }}>Month-to-month. No lock-in. 500+ ecommerce stores served.</p>
  </div>
</section>


</main>
</div>
      <Footer />
    </>
  );
}
