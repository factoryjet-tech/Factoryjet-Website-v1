import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Script from 'next/script';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './ecommerce-seo.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/ecommerce-seo';
const UPDATED = '2026-08-01';

/* ─── FAQ source of truth (drives FAQPage schema; visible accordion below mirrors this content) ─── */
const FAQ_ITEMS: { question: string; answer: string }[] = [
  // ── About the service ──
  { question: 'What does an ecommerce SEO agency actually do for UK brands?',
    answer: 'An ecommerce SEO agency drives organic revenue from your existing product catalogue by improving how search engines find, crawl, index, and rank your store pages. Concretely: technical audits that fix crawlability issues, category page optimisation that targets commercial search queries, product page SEO targeting long-tail transactional searches, link building to grow domain authority, and content strategy for informational queries that sit above your commercial pages in the purchase funnel. FactoryJet also builds the actual Shopify or WooCommerce store where needed; meaning our SEO work and development work are integrated, not siloed.' },
  { question: 'How long does ecommerce SEO take to work in the UK?',
    answer: 'Technical SEO and on-page work; canonicalisation, sitemap fixes, Core Web Vitals, meta and H1 rewrites; typically produces first ranking improvements in 6–8 weeks. For UK ecommerce category pages targeting competitive terms like “home decor UK” or “women’s trainers online”, meaningful position improvements typically appear in 3–4 months. Organic revenue growth that outpaces your paid channels takes 6–9 months in most UK markets. SEO compounds over time; months 6–12 typically produce better results than months 1–6 from the same fixed monthly investment.' },
  { question: 'How does FactoryJet measure ecommerce SEO success?',
    answer: 'Organic revenue is the primary metric; tracked via GA4 ecommerce events with proper source/medium attribution to organic search. Secondary metrics are: organic sessions (from Google Search Console), organic conversion rate (GA4), organic share of total revenue, and keyword position movements on commercial terms (GSC query data). We do not lead our reporting with third-party rank tracker data; it is inaccurate and not your revenue source. Every client engagement begins with a GA4 ecommerce event audit to ensure revenue attribution is working before we start reporting it.' },
  { question: 'Which ecommerce platforms does FactoryJet support for SEO?',
    answer: 'Shopify (all plans including Shopify Plus), WooCommerce, Magento (1.x and 2.x), and BigCommerce. As a Shopify SEO agency with an in-house development team, we go past the audit stage: for Shopify clients we fix Liquid-level issues directly; incorrect canonical tag implementations, JavaScript-rendered content that Googlebot cannot crawl, theme-generated duplicate pages; within the same engagement. For WooCommerce, we work directly with the site’s WordPress installation, Yoast/RankMath configuration, and custom post type SEO. Magento SEO includes faceted navigation handling, enterprise crawl budget management, and category tree optimisation.' },
  // ── Pricing & contracts ──
  { question: 'How much does ecommerce SEO cost in the UK?',
    answer: 'FactoryJet prices ecommerce SEO engagements based on: the size of your product catalogue, your current organic baseline (a store with 200 technical SEO issues needs more initial work than one with 20), the competitive landscape for your category keywords, and the scope of ongoing work you need. We quote after the free audit call; not before; because ecommerce SEO pricing requires understanding what is broken before we can tell you what it costs to fix. We are competitive in the UK market; ask us on the call.' },
  { question: 'Do you offer month-to-month ecommerce SEO contracts?',
    answer: 'Yes. All FactoryJet ecommerce SEO engagements are month-to-month. There is no annual lock-in. We believe monthly contracts are the right model for SEO: they align our incentives with your results, they prevent the common UK agency pattern of selling 12-month contracts on a pitch and then coasting, and they keep us accountable every single month. The only time we ask for a longer commitment is for larger technical migrations that require a known runway; and we will explain the reason clearly before asking.' },
  { question: 'Is a technical SEO audit included, or is it an additional charge?',
    answer: 'The technical audit in month one is included in the monthly engagement cost. We do not charge separately for the audit that we need to do the work correctly; that would be like a doctor charging for a diagnosis before deciding whether to treat you. The audit is our baseline. The free pre-engagement audit (available via the discovery call) covers your GSC performance, Core Web Vitals status, and top indexation issues. The full technical audit in month one is deeper: a complete crawl, canonical mapping, duplicate content analysis, schema validation, and site speed profiling.' },
  { question: 'What does month 1 of an ecommerce SEO engagement include?',
    answer: 'Month 1 is foundation work. We run a full technical crawl of your ecommerce store, pull 12 months of Google Search Console data, audit your GA4 ecommerce event setup, and deliver a prioritised fix list. The technical audit covers: crawlability issues (canonicals, sitemaps, robots.txt, redirect chains), Core Web Vitals status on your top commercial pages, schema markup gaps, and duplicate content from platform-generated URLs. We also analyse your current organic keyword rankings and identify the 10–20 category or product pages with highest priority for immediate optimisation. Quick wins implemented in month 1 typically include meta title and H1 rewrites on your highest-traffic pages and schema markup fixes for Google Shopping eligibility. First ranking movements typically appear in weeks 6–8 after technical fixes are indexed.' },
  // ── Technical SEO ──
  { question: 'How does Shopify ecommerce SEO differ from WooCommerce SEO?',
    answer: 'Shopify and WooCommerce generate different default technical SEO issues. Shopify creates duplicate product URLs (products appearing under both /products/ and /collections/), faceted navigation pages that waste crawl budget, and has limited canonical tag flexibility within the platform. WooCommerce SEO is managed through the WordPress layer; Yoast or RankMath; and has more flexibility but also more common configuration errors (wrong canonical settings, noindex accidentally applied to category pages). FactoryJet’s in-house Shopify dev team handles Shopify-specific Liquid issues directly; our WooCommerce work goes through the WordPress and WP-admin layer.' },
  { question: 'What is category page SEO and why does it matter most for UK ecommerce?',
    answer: 'Category page SEO is the practice of optimising collection or category pages (e.g., “Women’s Trainers”, “Artificial Plants”, “Leather Sofas”) for high-volume commercial search terms. These pages typically rank for the highest-volume queries in ecommerce (“women’s trainers UK”, “buy artificial plants UK”) because Google reads category pages as the most relevant match for category-intent searches. An unoptimised category page; no H1, no above-the-fold content, no FAQ, no internal links; is invisible to Google for competitive terms. Category pages typically drive 55–65% of ecommerce organic revenue. They are where we start.' },
  { question: 'What schema markup do you implement for ecommerce SEO?',
    answer: 'For UK ecommerce stores: Product schema with price, availability, and review aggregation for Google Shopping eligibility and rich results. FAQPage schema on category pages targeting informational queries. BreadcrumbList schema for correct display of your site hierarchy in Google search results. Organization schema on the homepage. Where relevant: AggregateRating for stores with reviews, Offer for price and availability, and VideoObject for product demonstration videos. All schema is validated through Google’s Rich Results Test before deployment and monitored in Google Search Console for errors.' },
  { question: 'How do you handle Core Web Vitals for ecommerce stores?',
    answer: 'Core Web Vitals are part of every ecommerce SEO engagement. The most common failures for UK ecommerce stores: LCP above 2.5 seconds caused by unoptimised hero images on category pages (we fix with next-gen image formats, explicit dimensions, and fetchpriority preloading); CLS above 0.1 caused by dynamic content loading without reserved space (we fix with explicit image and container dimensions in theme templates); and INP above 200ms caused by third-party scripts (we audit and defer non-essential scripts). We test using PageSpeed Insights with mobile throttling, which uses real Chrome UX field data. Core Web Vitals directly affect your Google search rankings, so we treat them as SEO work, not a separate technical project.' },
  // ── AI & future SEO ──
  { question: 'What is AEO and why does it matter for UK ecommerce?',
    answer: 'AEO (Answer Engine Optimisation) is optimising your ecommerce content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and other AI search interfaces. For UK ecommerce, this means: structured FAQ content on category pages targeting “what is the best [product] UK” queries; Product schema that AI search engines can parse for price and availability; and brand mention optimisation that builds the signals AI systems use to recommend products. FactoryJet includes AEO signals; schema, FAQ structure, and answer-first content; in every ecommerce SEO engagement as standard.' },
  { question: 'Will AI Overviews hurt my UK ecommerce organic traffic?',
    answer: 'Google AI Overviews have reduced click-through rates for some informational queries; search types like “how to clean trainers” where users get the answer in the Overview without clicking. For UK ecommerce commercial queries (“buy women’s trainers UK”, “best leather sofa under £500 UK”) Google AI Overviews typically show shopping carousels and product listings, not AI-generated text answers. The effect is less severe for transactional ecommerce queries than for informational content. We monitor UK client GSC data for AI Overview overlap and adjust content strategy where needed.' },
  { question: 'How do you optimise ecommerce stores for AI shopping recommendations?',
    answer: 'AI shopping recommendations from ChatGPT, Perplexity, and Google Shopping Graph require a different optimisation approach from traditional SEO. The key signals are: structured Product schema with accurate price, availability, and review data that AI systems can reliably parse; brand mention frequency in third-party editorial content (review sites, press coverage, industry directories); category-level FAQ content targeting “what is the best [product category] UK” queries; and accurate business data in Google Business Profile. FactoryJet includes AI citation optimisation as standard in ecommerce SEO engagements. We track AI mentions alongside GSC data and adjust content strategy based on which AI-cited queries are sending referral traffic.' },
  { question: 'What is the difference between AEO and traditional SEO?',
    answer: 'Traditional SEO optimises for 10 blue links in Google search results; AEO (Answer Engine Optimisation) optimises for AI-generated answers in ChatGPT, Google AI Overviews, and Perplexity. For ecommerce they are complementary. Traditional SEO targets transactional queries (“buy leather sofa UK”) where users click through to browse products; AEO targets informational queries at the top of the funnel (“what is the best leather sofa for a small living room UK”) where AI answers now appear. AEO signals include FAQPage schema, answer-first structured content, citation-worthy statistics and named sources, and brand authority signals. FactoryJet integrates AEO into every ecommerce SEO engagement because AI is now a primary product discovery channel for UK consumers.' },
  // ── Results & reporting ──
  { question: 'Who is the best ecommerce SEO agency in the UK?',
    answer: 'For UK ecommerce brands that want revenue-focused SEO with month-to-month contracts and an in-house Shopify development team, FactoryJet makes a strong case. The best ecommerce SEO company UK for your store depends on platform (Shopify, WooCommerce, Magento), catalogue size, current organic baseline, and budget. Whoever you consider among UK ecommerce SEO companies, ask to see Google Search Console screenshots; not rank tracker dashboards; for client case studies, ask for the contract terms explicitly, and ask what happens in month one before any rankings move. Those three questions separate genuine ecommerce SEO agencies from agencies that sell SEO.' },
  { question: 'What results can UK ecommerce brands expect from FactoryJet SEO?',
    answer: 'Results depend on your starting point, platform, and category competitiveness. Typical outcomes for UK ecommerce clients: technical SEO fixes drive first ranking improvements in weeks 6–8; category page optimisation produces measurable position improvements in months 2–4; organic revenue growth visible in GA4 typically appears in months 4–6 as new rankings send consistent traffic; months 6–12 typically produce 2–4x the organic sessions of months 1–3 as rankings compound and content matures. We do not guarantee specific ranking positions because Google’s algorithm is not within our control. We do guarantee the quality and scope of the work delivered each month, and our month-to-month contracts mean you can assess progress after month 2 and decide whether to continue.' },
  { question: 'Do you provide monthly reports, and what do they include?',
    answer: 'Yes. Monthly reports cover: organic sessions (GSC, month-over-month and year-over-year), organic revenue and transactions (GA4 ecommerce events with source/medium breakdown), keyword position movements for the priority commercial terms we target, Core Web Vitals status (PageSpeed Insights mobile and desktop), work completed in the month (Liquid edits, schema updates, content additions), and work planned for next month with rationale. We do not pad reports with metrics disconnected from revenue. If organic sessions went up but organic revenue did not, we say so and explain why. Reports are delivered in Google Slides or Notion, with a monthly video call to walk through the data.' },
  { question: 'Can you help UK brands expand ecommerce SEO internationally?',
    answer: 'Yes, though international ecommerce SEO is a separate engagement from UK-only SEO. For UK brands expanding to the EU, US, or Australia, the key components are: hreflang tag implementation across the site to tell Google which version to serve in each country; country-specific keyword research (search volume and intent differ significantly between UK and US for the same product category); separate URL structures for each market (/, /eu/, /au/ subdirectories or ccTLDs); and localised on-page content with correct spelling, pricing, and cultural references for each target market. FactoryJet has built international ecommerce SEO structures for clients expanding beyond the UK. We recommend starting with one international market and proving the model before scaling to multiple regions.' },
];

export const metadata: Metadata = {
  title: 'Ecommerce SEO Agency UK | Organic Revenue, Not Just Rankings | FactoryJet',
  description: 'FactoryJet is a UK ecommerce SEO agency specialising in Shopify, WooCommerce, and Magento SEO. Technical audits, category page optimisation, and product page SEO for UK brands. Get a free SEO audit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Ecommerce SEO Agency UK | Organic Revenue, Not Just Rankings | FactoryJet',
    description: 'FactoryJet is a UK ecommerce SEO agency specialising in Shopify, WooCommerce, and Magento SEO. Technical audits, category page optimisation, and product page SEO for UK brands. Get a free SEO audit.',
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
      name: 'Ecommerce SEO Services UK',
      serviceType: 'Ecommerce search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Ecommerce SEO', item: 'https://factoryjet.com/uk/ecommerce-seo' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Ecommerce SEO Agency UK | Organic Revenue, Not Just Rankings | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
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

export default function EcommerceSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-eseo">
<main>


{/* ════════════════════════════════════════════════
  HEADER
════════════════════════════════════════════════ */}


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
        <p className="lead mt-4" style={{ maxWidth: '580px' }}>Most ecommerce SEO agencies in the UK show you rankings. FactoryJet shows you revenue. We build organic traffic that compounds month over month for Shopify, WooCommerce, and Magento stores; category page architecture, product page optimisation, and technical SEO that Google can actually crawl.</p>
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
        <p className="pull-quote-green" style={{ fontSize: '17px' }}>Rankings are vanity. Revenue from organic is the metric.</p>
        <div style={{ marginTop: '20px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Organic Revenue Growth</div>
              <div className="scorecard-note">month-3 vs month-1 average across clients</div>
            </div>
            <div className="scorecard-val">+42%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Category Page Rankings</div>
              <div className="scorecard-note">avg. positions gained on target terms</div>
            </div>
            <div className="scorecard-val">+18 pos</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Organic Conversion Rate</div>
              <div className="scorecard-note">vs. UK ecommerce avg of 1.3%</div>
            </div>
            <div className="scorecard-val">2.1%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Time to First Rankings Lift</div>
              <div className="scorecard-note">for technical SEO and on-page work</div>
            </div>
            <div className="scorecard-val">6–8 wks</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Contract Commitment</div>
              <div className="scorecard-note">no annual lock-in; results hold us accountable</div>
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
  2. HERO IMAGE BAND; full-width image + 4 green-tinted stats
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--ink)', padding: '0' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', minHeight: '340px' }}>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img width="1200" height="800" fetchPriority="high" loading="eager" src="https://im.runware.ai/image/os/a02d21/ws/3/ii/cea4b179-9321-4a20-b849-4cae7995f000.webp"
        alt="Ecommerce SEO dashboard showing organic traffic and revenue growth for a UK online store; FactoryJet"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a01d21/ws/3/ii/b206ae12-daef-4fd8-94a0-ff875d021d90.webp" width="1200" height="800" alt="FactoryJet web development UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to right,transparent 60%,#0F0F12 100%)' }}></div>
    </div>
    <div style={{ padding: '48px 24px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>+42%</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>Organic Revenue · Month 3 Avg</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>6–8 Wks</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>First Rankings Lift</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>500+</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>Ecommerce Stores Served</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: '700', lineHeight: '1', letterSpacing: '-.04em', color: 'var(--green)' }}>M-T-M</div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: '6px' }}>No Annual Lock-In</div>
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
      <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px' }}>The categories that drive UK ecommerce revenue; and what FactoryJet SEO does to them</h2>
    </div>
    <div className="col-4" style={{ gap: '16px' }}>
      <div className="rank-card">
        <div className="rank-kw">Category: Women's Trainers UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#3</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through' }}>#47</div>
        </div>
        <div className="rank-change">↑ 44 positions · 8 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '88%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Category: Artificial Plants UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#5</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through' }}>#62</div>
        </div>
        <div className="rank-change">↑ 57 positions · 6 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '80%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Product: Leather Sofa UK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#2</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through' }}>#31</div>
        </div>
        <div className="rank-change">↑ 29 positions · 5 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '95%' }}></div></div>
      </div>
      <div className="rank-card">
        <div className="rank-kw">Branded: B2B Plant Wholesale</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div className="rank-pos">#1</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through' }}>#18</div>
        </div>
        <div className="rank-change">↑ 17 positions · 4 months</div>
        <div className="rank-bar"><div className="rank-fill" style={{ width: '99%' }}></div></div>
      </div>
    </div>
    <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--n400)' }}>Illustrative of typical client results. Individual results depend on competition, domain authority, and content volume. Rankings verified via Google Search Console.</p>
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
        <h2 style={{ marginBottom: '20px' }}>Paid ads stop the moment you stop paying. Organic compounds.</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>UK ecommerce brands spend an average of 22% of revenue on paid acquisition. Google Ads CPCs for competitive ecommerce categories in the UK have increased 61% since 2020. Organic search; done correctly; is the only customer acquisition channel that gets cheaper over time.</p>

        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Technical SEO Audit</span><span className="chip">Category Page SEO</span>
          <span className="chip">Product Page Optimisation</span><span className="chip">Link Building</span>
          <span className="chip">Schema Markup</span><span className="chip">Content Strategy</span>
        </div>

        <div className="stack">
          <p>The UK ecommerce SEO landscape in 2026 is more technical than it was in 2020. Google's ranking systems reward stores that pass Core Web Vitals, implement structured data correctly, and organise category hierarchies in a way that matches how UK shoppers actually search. Most UK ecommerce stores fail all three.</p>
          <div className="pull-quote-green">The UK ecommerce stores winning in organic in 2026 built their SEO foundation in 2024.</div>
          <p>FactoryJet starts every ecommerce SEO engagement with a technical audit; not keyword research. We fix the crawlability and Core Web Vitals issues first because ranking improvements are impossible on a store that Google can't index properly. Then we move to category page architecture, product page optimisation, and link building. The result is organic revenue growth that compounds month over month and doesn't evaporate when you pause a budget.</p>
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
              <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px' }}>UK SECTORS</p>
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
            <span className="eyebrow" style={{ color: 'var(--green)', margin: '0', display: 'block' }}>ORGANIC REVENUE; COMPOUND GROWTH</span>
            <p style={{ fontSize: '12px', color: 'var(--n400)', margin: '6px 0 0', lineHeight: '1.5' }}>Representative of FactoryJet ecommerce engagements. Results depend on competition and domain authority.</p>
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
            <p style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', margin: '0' }}>Month-to-month contracts. No lock-in. Results hold us accountable.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. DARK PROBLEM SECTION
════════════════════════════════════════════════ */}
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">THE PROBLEM WITH MOST UK ECOMMERCE SEO</span>
      <h2 style={{ marginTop: '12px' }}>You're ranking for terms nobody searches, or searches that don't buy.</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'rgba(255,255,255,.6)' }}>The three failure modes we diagnose on every UK ecommerce SEO audit. They're more common than you'd think; and they explain why most UK ecommerce stores' organic revenue is flat.</p>
    </div>
    <div className="col-3">
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>📊</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Rankings without revenue intent</h3>
        <p>Ranking on page 1 for "how to clean trainers" when your store sells trainers is vanity SEO. Informational content has its place; but the majority of your SEO effort should target commercial and transactional queries: "buy women's trainers UK", "best trainers under £100 UK", and brand+category terms with shopping intent. Most UK ecommerce SEO agencies optimise for what's easiest to rank, not what converts.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🕷️</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Crawl budget wasted on duplicate pages</h3>
        <p>Shopify and WooCommerce generate hundreds of duplicate and near-duplicate URLs by default; filtered collection pages, pagination, sort-order variants, ?ref= parameters, and faceted search pages. Google wastes its crawl budget on these and deprioritises your actual money pages. Fixing crawl architecture is the single highest-impact technical SEO intervention for UK ecommerce stores.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🏗️</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Category pages without content</h3>
        <p>A collection page with 24 product thumbnails, no above-the-fold text, no H1 strategy, no internal links, and no FAQ content is invisible to Google. Category pages are where 60% of UK ecommerce organic revenue comes from; they rank for the highest-volume commercial queries. Yet most UK Shopify stores treat them as grid containers, not SEO-optimised landing pages.</p>
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
      <h2 style={{ marginTop: '12px' }}>Six ecommerce SEO services that move organic revenue, not just rankings</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Every engagement starts with a technical audit. Then we prioritise based on what will move your organic revenue fastest; not what's most billable.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Ecommerce Technical SEO Audit</h3>
        <p style={{ fontSize: '14px' }}>Full crawl of your Shopify, WooCommerce, or Magento store: canonical URL issues, crawl budget waste, Core Web Vitals failures, duplicate content, sitemap errors, and schema markup gaps. Delivered as a prioritised fix list, not a 90-page PDF.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Every engagement starts here. No exceptions.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Category Page SEO</h3>
        <p style={{ fontSize: '14px' }}>Keyword-mapped category hierarchy, H1 and meta rewrite, above-the-fold content strategy, FAQ schema, internal link structure, and pagination handling. Category pages are where UK ecommerce brands win or lose in organic search.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>60% of ecommerce organic revenue comes from category pages.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Product Page Optimisation</h3>
        <p style={{ fontSize: '14px' }}>Long-tail keyword targeting for individual SKUs, Product schema with price, availability, and review aggregation for Google Shopping eligibility, review integration, and FAQ content targeting "is this worth buying" queries that convert at 4–6%.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Product pages with FAQ schema convert 40% better on average.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>UK Link Building for Ecommerce</h3>
        <p style={{ fontSize: '14px' }}>Editorial links from UK lifestyle, trade, and category-specific publications. Supplier and manufacturer link requests. Digital PR targeting product category keywords with newsworthy angles that earn links rather than buying them.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Domain authority is the multiplier on all on-page SEO work.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Ecommerce Content Strategy</h3>
        <p style={{ fontSize: '14px' }}>Buyer guides, comparison content, and how-to articles targeting informational queries that sit above your commercial pages in the purchase funnel; capturing UK shoppers earlier in the decision process and building category authority.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>Informational content drives 23% of ecommerce organic revenue in competitive markets.</p>
      </div>
      <div className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>SERVICE 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>AI Search Optimisation (AEO)</h3>
        <p style={{ fontSize: '14px' }}>Structured data, FAQ schema, and answer-first content formats that get your UK ecommerce store cited in ChatGPT, Google AI Overviews, and Perplexity; the fastest-growing product discovery channel for UK consumers in 2026.</p>
        <p style={{ fontSize: '13px', color: 'var(--green)', marginTop: '12px', fontWeight: '600' }}>AI citations for ecommerce product queries grew 340% in 12 months; UK data, 2026.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  7. STATS BAND; green-tinted, revenue focused
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div className="col-4">
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Organic Revenue</div>
        <div className="stat-num-green">+42%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>avg. organic revenue growth in month 3</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>vs. month 1 of engagement</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Rankings Lift</div>
        <div className="stat-num-green">+18 pos</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>avg. category page position improvements</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>on target commercial keywords</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Platform Coverage</div>
        <div className="stat-num-green">3</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>ecommerce platforms: Shopify, WooCommerce, Magento</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>+ BigCommerce and custom platforms</p>
      </div>
      <div style={{ textAlign: 'center', padding: '16px', borderLeft: '1px solid rgba(5,150,105,.15)' }}>
        <div className="chip-green" style={{ marginBottom: '12px', justifyContent: 'center' }}><span className="dot dot-green"></span>Contract Type</div>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>M-T-M</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>month-to-month with no annual lock-in</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>results keep us; not a contract</p>
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
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Semrush, Ahrefs, Google Planner</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Ranking Tracking</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Google Search Console (primary)</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Performance</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>PageSpeed Insights, Core Web Vitals</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Content</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Surfer SEO, Clearscope</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Schema Validation</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Google Rich Results Test</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Analytics</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>GA4 ecommerce events, GTM</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--green)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Every claim backed by Google Search Console data. Not rank trackers.</p>
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
          <p className="lead"><strong style={{ color: 'var(--ink)' }}>Organic revenue, organic sessions, and organic conversion rate</strong> are the three metrics our monthly reports open with. Position tracking is a supporting tool, not the headline.</p>

          {/* Visual: 3 metric source cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>🔍</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>Google Search Console; primary source</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Actual UK impressions and clicks. Third-party rank trackers can show the same keyword at position 4 and 11 in the same week depending on the data centre sampled.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>📊</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>GA4 Ecommerce; revenue closed loop</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Organic sessions, add-to-carts, transactions, and revenue. If we can't close the loop from keyword to sale, we don't count it.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '16px' }}>📈</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginBottom: '2px' }}>Organic share of wallet; long-term metric</p>
                <p style={{ fontSize: '12px', color: 'var(--n400)' }}>What percentage of your total revenue comes from organic search. The most meaningful ecommerce SEO metric you're probably not tracking.</p>
              </div>
            </div>
          </div>

          <div className="pull-quote-green" style={{ marginTop: '8px' }}>Position 1 for a 50-search-per-month UK keyword is worthless. Position 5 for a 5,000-search term with 3% conversion is your business.</div>
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
      <h2 style={{ marginTop: '12px' }}>The UK ecommerce SEO opportunity; and why organic search compounds while paid doesn't</h2>
      <div className="stack" style={{ marginTop: '24px' }}>
        <p className="lead">UK ecommerce organic search volume in competitive categories has increased 38% since 2020 while Google Ads CPCs in the same categories have increased 61%. Paid acquisition gets more expensive every year; organic compounds if you invest early.</p>
      </div>

      {/* Visual: UK categories grid */}
      <div style={{ marginTop: '24px' }}>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>UK CATEGORIES WE WORK IN</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Home Décor</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Artificial plants, furniture, soft furnishings</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Fashion</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Women's clothing, trainers, accessories</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>B2B Wholesale</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Trade plants, promotional products</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Food &amp; Drink</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>D2C, subscription, gifting</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Professional Services</p>
            <p style={{ fontSize: '11px', color: 'var(--n400)' }}>Service ecommerce, booking platforms</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--green)', textAlign: 'center' }}>Each has distinct keyword architecture + Google Shopping signals</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>£262B</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>UK ecommerce market value in 2024</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>2nd largest in Europe; IMRG 2024</p>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>+61%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>UK ecommerce Google Ads CPC increase since 2020</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>making organic search the only channel that gets cheaper</p>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num-green" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>38%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>growth in UK ecommerce organic search volume since 2020</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>across fashion, home, B2B, and specialist categories</p>
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
      <p className="lead" style={{ marginTop: '16px' }}>What to actually ask when evaluating UK ecommerce SEO agencies; and how we answer each question.</p>
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
          <tr><td className="feat">Reports on organic revenue, not just rankings</td><td className="fj yes">✓ Revenue-first</td><td className="partial">Partial (rankings primary)</td><td className="partial">Varies</td></tr>
          <tr><td className="feat">Technical SEO audit included in month 1</td><td className="fj yes">✓ Always</td><td className="yes">✓ Yes</td><td className="partial">Often extra</td></tr>
          <tr><td className="feat">Shopify-specific SEO (Liquid, canonical, schema)</td><td className="fj yes">✓ Native Shopify dev team</td><td className="partial">Generic</td><td className="partial">Varies</td></tr>
          <tr><td className="feat">Category page content + on-page SEO</td><td className="fj yes">✓ Included</td><td className="partial">Often add-on</td><td className="partial">Scoped separately</td></tr>
          <tr><td className="feat">Link building; editorial, not paid directories</td><td className="fj yes">✓ Editorial UK links</td><td className="partial">Varies by package</td><td className="no">✗ Rarely</td></tr>
          <tr><td className="feat">Month-to-month contract (no annual lock-in)</td><td className="fj yes">✓ Month-to-month</td><td className="no">✗ 12-month minimum</td><td className="yes">✓ Flexible</td></tr>
          <tr><td className="feat">Same team from audit to ongoing work</td><td className="fj yes">✓ Yes</td><td className="no">✗ Often rotated</td><td className="yes">✓ Yes</td></tr>
          <tr><td className="feat">AI search optimisation (AEO/GEO)</td><td className="fj yes">✓ Schema + AEO included</td><td className="partial">Emerging</td><td className="no">✗ Rarely</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. CLIENT RESULTS
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
      <span className="eyebrow">CLIENT RESULTS</span>
      <h2 style={{ marginTop: '12px' }}>UK ecommerce brands on what FactoryJet SEO changed</h2>
    </div>
    <div className="col-3">
      <div className="card">
        <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--green)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', letterSpacing: '-.03em' }}>+57 positions</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>on "artificial plants UK"; 6 months</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"Our organic traffic was zero when we started. FactoryJet fixed the technical issues first; turns out Shopify was indexing 400 duplicate filter pages; then rebuilt our category content. We're now getting 2,800 organic sessions per month to categories that were invisible before."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Vishal; Director, Bombay Petals</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>B2B artificial plants, London</p>
        </div>
      </div>
      <div className="card">
        <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--green)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', letterSpacing: '-.03em' }}>3.2× organic revenue</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>in 8 months vs. baseline</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"Every other SEO agency we'd spoken to showed us ranking dashboards. FactoryJet opened with a GA4 ecommerce breakdown and asked why our organic sessions weren't converting. That framing changed everything; we ended up with better traffic, not just more of it."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Ricky B; Founder, Belle Maison</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Home décor ecommerce, UK</p>
        </div>
      </div>
      <div className="card">
        <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green-bd)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.10em', color: 'var(--green)' }}>RESULT</div>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', letterSpacing: '-.03em' }}>Page 1 · 6 target terms</div>
          <div style={{ fontSize: '12px', color: 'var(--n600)', marginTop: '2px' }}>none were ranked before engagement</div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"We'd been doing SEO with a UK agency for 18 months; paying a hefty monthly retainer; and had nothing to show for it in Search Console. FactoryJet's audit found 11 technical issues the previous agency had missed entirely. We switched, and were on page 1 for our core terms inside 6 months."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Kiran M; Founder, Impulse Branding</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Promotional products, UK</p>
        </div>
      </div>
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
        <h2 style={{ marginBottom: '20px' }}>Hire an ecommerce SEO agency that ties every deliverable to organic revenue</h2>
        <div className="stack">
          <p className="lead">When you hire an <strong style={{ color: 'var(--ink)' }}>ecommerce SEO agency in the UK</strong>, you're buying a specific outcome: more organic revenue from your existing product catalogue. FactoryJet's engagement model is built around that outcome; we scope work by what will move revenue, not by the number of "SEO tasks" we can bill.</p>
          {/* Visual: 2 differentiator cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>🔧</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>In-house Shopify dev</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>When a Liquid issue blocks GoogleBot from indexing your category pages, we fix it in the same week; not in a separate agency project.</p>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '18px', marginBottom: '8px' }}>📅</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Month-to-month only</p>
              <p style={{ fontSize: '12px', color: 'var(--n400)' }}>No lock-in contracts. We have to earn the next month. If organic revenue isn't growing, there's no clause to fall back on.</p>
            </div>
          </div>
          <div className="pull-quote" style={{ fontSize: '17px' }}>Month-to-month contracts. No lock-in. Results keep us.</div>
        </div>
        <div style={{ marginTop: '28px', background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>When UK brands hire FactoryJet for ecommerce SEO</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Organic revenue is flat despite steady paid acquisition</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Previous UK SEO agency showed rankings but not revenue results</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Shopify or WooCommerce store has never had a technical SEO audit</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Category pages have no content above the product grid</li>
            <li style={{ fontSize: '14px', color: 'var(--n600)' }}>• Google Search Console shows crawl errors nobody has fixed</li>
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
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time; that's what I hold every project to. If I can't show you where the organic revenue came from in Search Console, we're working on the wrong things."</p>
        </div>
        <ModalCTAButton label="Book a Free SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30 minutes. We'll audit your current organic performance in GSC before the call.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. WHY FACTORYJET; Second dark section
════════════════════════════════════════════════ */}
<section className="dark-sec">
  <div className="wrap">
    <div style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
      <span className="eyebrow">WHY FACTORYJET FOR ECOMMERCE SEO</span>
      <h2 style={{ marginTop: '12px' }}>We built the Shopify stores. We know why they don't rank.</h2>
      <p className="lead" style={{ marginTop: '16px', color: 'rgba(255,255,255,.6)' }}>Most ecommerce SEO agencies have never written a line of Liquid or configured a Shopify sitemap. When they audit your store, they see what Screaming Frog shows them. We see what we built.</p>
    </div>
    <div className="col-3">
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🔧</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>In-house Shopify dev team</h3>
        <p>Ecommerce SEO often surfaces Liquid code issues; theme rendering bugs that prevent GoogleBot from indexing, JavaScript-loaded content that Googlebot can't crawl, incorrect canonical tags baked into Shopify theme logic. Most Shopify SEO agencies send you back to your own developer for fixes like these. We fix them ourselves, in the same engagement, without creating a separate development project. This is rare.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>📈</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Revenue reporting from day one</h3>
        <p>Our onboarding call includes a GA4 ecommerce event audit. If GA4 isn't tracking organic sessions to transactions, we fix that first; because without revenue attribution, we can't prove what's working and you can't justify the investment. Every monthly report opens with organic revenue, not a ranking dashboard screenshot.</p>
      </div>
      <div className="dark-card">
        <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>🏆</span>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>12+ years of ecommerce, every algorithm shift navigated</h3>
        <p>FactoryJet has been building and optimising ecommerce stores; over a decade of UK ecommerce context. That covers every major Google algorithm update from Florida through to the Helpful Content system, every platform migration from static HTML to Shopify Liquid, and the shift from keyword density to entity-based SEO and AI search citations. That institutional knowledge is a genuine competitive advantage when you're making long-term SEO investments.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14. FAQ
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '640px' }}>
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h2 style={{ marginTop: '12px' }}>What UK ecommerce brands ask before starting SEO</h2>
      <p className="lead" style={{ marginTop: '16px' }}>20 questions we answer on every UK ecommerce SEO discovery call; including the ones most agencies dodge.</p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      <a href="#faq-service">Service <span className="pill-count">4</span></a>
      <a href="#faq-pricing">Pricing <span className="pill-count">4</span></a>
      <a href="#faq-technical">Technical <span className="pill-count">4</span></a>
      <a href="#faq-ai">AI Search <span className="pill-count">4</span></a>
      <a href="#faq-results">Results <span className="pill-count">4</span></a>
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          <a href="#faq-service">ABOUT THE SERVICE <span className="faq-nav-count">4</span></a>
          <a href="#faq-pricing">PRICING & CONTRACTS <span className="faq-nav-count">4</span></a>
          <a href="#faq-technical">TECHNICAL SEO <span className="faq-nav-count">4</span></a>
          <a href="#faq-ai">AI &amp; FUTURE SEO <span className="faq-nav-count">4</span></a>
          <a href="#faq-results">RESULTS & REPORTING <span className="faq-nav-count">4</span></a>
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Can&#8217;t find it? Talk to the founder &#8594;</a>
          <p>20 questions answered</p>
        </div>
      </aside>

      {/* Accordion */}
      <div>
        <div id="faq-service" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">ABOUT THE SERVICE</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">What does an ecommerce SEO agency actually do for UK brands?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>An ecommerce SEO agency drives organic revenue from your existing product catalogue by improving how search engines find, crawl, index, and rank your store pages. Concretely: technical audits that fix crawlability issues, category page optimisation that targets commercial search queries, product page SEO targeting long-tail transactional searches, link building to grow domain authority, and content strategy for informational queries that sit above your commercial pages in the purchase funnel. FactoryJet also builds the actual Shopify or WooCommerce store where needed; meaning our SEO work and development work are integrated, not siloed.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How long does ecommerce SEO take to work in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Technical SEO and on-page work; canonicalisation, sitemap fixes, Core Web Vitals, meta and H1 rewrites; typically produces first ranking improvements in 6&#8211;8 weeks. For UK ecommerce category pages targeting competitive terms like &#8220;home decor UK&#8221; or &#8220;women&#8217;s trainers online&#8221;, meaningful position improvements typically appear in 3&#8211;4 months. Organic revenue growth that outpaces your paid channels takes 6&#8211;9 months in most UK markets. SEO compounds over time; months 6&#8211;12 typically produce better results than months 1&#8211;6 from the same fixed monthly investment.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How does FactoryJet measure ecommerce SEO success?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Organic revenue is the primary metric; tracked via GA4 ecommerce events with proper source/medium attribution to organic search. Secondary metrics are: organic sessions (from Google Search Console), organic conversion rate (GA4), organic share of total revenue, and keyword position movements on commercial terms (GSC query data). We do not lead our reporting with third-party rank tracker data; it is inaccurate and not your revenue source. Every client engagement begins with a GA4 ecommerce event audit to ensure revenue attribution is working before we start reporting it.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Which ecommerce platforms does FactoryJet support for SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify (all plans including Shopify Plus), WooCommerce, Magento (1.x and 2.x), and BigCommerce. As a Shopify SEO agency with an in-house development team, we go past the audit stage: for Shopify clients we fix Liquid-level issues directly; incorrect canonical tag implementations, JavaScript-rendered content that Googlebot cannot crawl, theme-generated duplicate pages; within the same engagement. For WooCommerce, we work directly with the site&#8217;s WordPress installation, Yoast/RankMath configuration, and custom post type SEO. Magento SEO includes faceted navigation handling, enterprise crawl budget management, and category tree optimisation.</p></div>
          </details>
        </div>

        <div id="faq-pricing" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">PRICING & CONTRACTS</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">How much does ecommerce SEO cost in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>FactoryJet prices ecommerce SEO engagements based on: the size of your product catalogue, your current organic baseline (a store with 200 technical SEO issues needs more initial work than one with 20), the competitive landscape for your category keywords, and the scope of ongoing work you need. We quote after the free audit call; not before; because ecommerce SEO pricing requires understanding what is broken before we can tell you what it costs to fix. We are competitive in the UK market; ask us on the call.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do you offer month-to-month ecommerce SEO contracts?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. All FactoryJet ecommerce SEO engagements are month-to-month. There is no annual lock-in. We believe monthly contracts are the right model for SEO: they align our incentives with your results, they prevent the common UK agency pattern of selling 12-month contracts on a pitch and then coasting, and they keep us accountable every single month. The only time we ask for a longer commitment is for larger technical migrations that require a known runway; and we will explain the reason clearly before asking.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Is a technical SEO audit included, or is it an additional charge?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>The technical audit in month one is included in the monthly engagement cost. We do not charge separately for the audit that we need to do the work correctly; that would be like a doctor charging for a diagnosis before deciding whether to treat you. The audit is our baseline. The free pre-engagement audit (available via the discovery call) covers your GSC performance, Core Web Vitals status, and top indexation issues. The full technical audit in month one is deeper: a complete crawl, canonical mapping, duplicate content analysis, schema validation, and site speed profiling.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What does month 1 of an ecommerce SEO engagement include?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Month 1 is foundation work. We run a full technical crawl of your ecommerce store, pull 12 months of Google Search Console data, audit your GA4 ecommerce event setup, and deliver a prioritised fix list. The technical audit covers: crawlability issues (canonicals, sitemaps, robots.txt, redirect chains), Core Web Vitals status on your top commercial pages, schema markup gaps, and duplicate content from platform-generated URLs. We also analyse your current organic keyword rankings and identify the 10&#8211;20 category or product pages with highest priority for immediate optimisation. Quick wins implemented in month 1 typically include meta title and H1 rewrites on your highest-traffic pages and schema markup fixes for Google Shopping eligibility. First ranking movements typically appear in weeks 6&#8211;8 after technical fixes are indexed.</p></div>
          </details>
        </div>

        <div id="faq-technical" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">TECHNICAL SEO</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">How does Shopify ecommerce SEO differ from WooCommerce SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Shopify and WooCommerce generate different default technical SEO issues. Shopify creates duplicate product URLs (products appearing under both /products/ and /collections/), faceted navigation pages that waste crawl budget, and has limited canonical tag flexibility within the platform. WooCommerce SEO is managed through the WordPress layer; Yoast or RankMath; and has more flexibility but also more common configuration errors (wrong canonical settings, noindex accidentally applied to category pages). FactoryJet&#8217;s in-house Shopify dev team handles Shopify-specific Liquid issues directly; our WooCommerce work goes through the WordPress and WP-admin layer.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is category page SEO and why does it matter most for UK ecommerce?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Category page SEO is the practice of optimising collection or category pages (e.g., &#8220;Women&#8217;s Trainers&#8221;, &#8220;Artificial Plants&#8221;, &#8220;Leather Sofas&#8221;) for high-volume commercial search terms. These pages typically rank for the highest-volume queries in ecommerce (&#8220;women&#8217;s trainers UK&#8221;, &#8220;buy artificial plants UK&#8221;) because Google reads category pages as the most relevant match for category-intent searches. An unoptimised category page; no H1, no above-the-fold content, no FAQ, no internal links; is invisible to Google for competitive terms. Category pages typically drive 55&#8211;65% of ecommerce organic revenue. They are where we start.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What schema markup do you implement for ecommerce SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>For UK ecommerce stores: Product schema with price, availability, and review aggregation for Google Shopping eligibility and rich results. FAQPage schema on category pages targeting informational queries. BreadcrumbList schema for correct display of your site hierarchy in Google search results. Organization schema on the homepage. Where relevant: AggregateRating for stores with reviews, Offer for price and availability, and VideoObject for product demonstration videos. All schema is validated through Google&#8217;s Rich Results Test before deployment and monitored in Google Search Console for errors.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How do you handle Core Web Vitals for ecommerce stores?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Core Web Vitals are part of every ecommerce SEO engagement. The most common failures for UK ecommerce stores: LCP above 2.5 seconds caused by unoptimised hero images on category pages (we fix with next-gen image formats, explicit dimensions, and fetchpriority preloading); CLS above 0.1 caused by dynamic content loading without reserved space (we fix with explicit image and container dimensions in theme templates); and INP above 200ms caused by third-party scripts (we audit and defer non-essential scripts). We test using PageSpeed Insights with mobile throttling, which uses real Chrome UX field data. Core Web Vitals directly affect your Google search rankings, so we treat them as SEO work, not a separate technical project.</p></div>
          </details>
        </div>

        <div id="faq-ai" style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">AI &amp; FUTURE SEO</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is AEO and why does it matter for UK ecommerce?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>AEO (Answer Engine Optimisation) is optimising your ecommerce content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and other AI search interfaces. For UK ecommerce, this means: structured FAQ content on category pages targeting &#8220;what is the best [product] UK&#8221; queries; Product schema that AI search engines can parse for price and availability; and brand mention optimisation that builds the signals AI systems use to recommend products. FactoryJet includes AEO signals; schema, FAQ structure, and answer-first content; in every ecommerce SEO engagement as standard.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Will AI Overviews hurt my UK ecommerce organic traffic?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Google AI Overviews have reduced click-through rates for some informational queries; search types like &#8220;how to clean trainers&#8221; where users get the answer in the Overview without clicking. For UK ecommerce commercial queries (&#8220;buy women&#8217;s trainers UK&#8221;, &#8220;best leather sofa under &#163;500 UK&#8221;) Google AI Overviews typically show shopping carousels and product listings, not AI-generated text answers. The effect is less severe for transactional ecommerce queries than for informational content. We monitor UK client GSC data for AI Overview overlap and adjust content strategy where needed.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">How do you optimise ecommerce stores for AI shopping recommendations?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>AI shopping recommendations from ChatGPT, Perplexity, and Google Shopping Graph require a different optimisation approach from traditional SEO. The key signals are: structured Product schema with accurate price, availability, and review data that AI systems can reliably parse; brand mention frequency in third-party editorial content (review sites, press coverage, industry directories); category-level FAQ content targeting &#8220;what is the best [product category] UK&#8221; queries; and accurate business data in Google Business Profile. FactoryJet includes AI citation optimisation as standard in ecommerce SEO engagements. We track AI mentions alongside GSC data and adjust content strategy based on which AI-cited queries are sending referral traffic.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What is the difference between AEO and traditional SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Traditional SEO optimises for 10 blue links in Google search results; AEO (Answer Engine Optimisation) optimises for AI-generated answers in ChatGPT, Google AI Overviews, and Perplexity. For ecommerce they are complementary. Traditional SEO targets transactional queries (&#8220;buy leather sofa UK&#8221;) where users click through to browse products; AEO targets informational queries at the top of the funnel (&#8220;what is the best leather sofa for a small living room UK&#8221;) where AI answers now appear. AEO signals include FAQPage schema, answer-first structured content, citation-worthy statistics and named sources, and brand authority signals. FactoryJet integrates AEO into every ecommerce SEO engagement because AI is now a primary product discovery channel for UK consumers.</p></div>
          </details>
        </div>

        <div id="faq-results" style={{ scrollMarginTop: '112px' }}>
          <div className="faq-cat-header">
            <div className="faq-cat-bar"></div>
            <p className="faq-cat-label">RESULTS & REPORTING</p>
          </div>
          <details className="faq-item">
            <summary>
              <span className="q-text">Who is the best ecommerce SEO agency in the UK?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>For UK ecommerce brands that want revenue-focused SEO with month-to-month contracts and an in-house Shopify development team, FactoryJet makes a strong case. The best ecommerce SEO company UK for your store depends on platform (Shopify, WooCommerce, Magento), catalogue size, current organic baseline, and budget. Whoever you consider among UK ecommerce SEO companies, ask to see Google Search Console screenshots; not rank tracker dashboards; for client case studies, ask for the contract terms explicitly, and ask what happens in month one before any rankings move. Those three questions separate genuine ecommerce SEO agencies from agencies that sell SEO.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">What results can UK ecommerce brands expect from FactoryJet SEO?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Results depend on your starting point, platform, and category competitiveness. Typical outcomes for UK ecommerce clients: technical SEO fixes drive first ranking improvements in weeks 6&#8211;8; category page optimisation produces measurable position improvements in months 2&#8211;4; organic revenue growth visible in GA4 typically appears in months 4&#8211;6 as new rankings send consistent traffic; months 6&#8211;12 typically produce 2&#8211;4x the organic sessions of months 1&#8211;3 as rankings compound and content matures. We do not guarantee specific ranking positions because Google&#8217;s algorithm is not within our control. We do guarantee the quality and scope of the work delivered each month, and our month-to-month contracts mean you can assess progress after month 2 and decide whether to continue.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Do you provide monthly reports, and what do they include?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes. Monthly reports cover: organic sessions (GSC, month-over-month and year-over-year), organic revenue and transactions (GA4 ecommerce events with source/medium breakdown), keyword position movements for the priority commercial terms we target, Core Web Vitals status (PageSpeed Insights mobile and desktop), work completed in the month (Liquid edits, schema updates, content additions), and work planned for next month with rationale. We do not pad reports with metrics disconnected from revenue. If organic sessions went up but organic revenue did not, we say so and explain why. Reports are delivered in Google Slides or Notion, with a monthly video call to walk through the data.</p></div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="q-text">Can you help UK brands expand ecommerce SEO internationally?</span>
              <span className="chevron"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div className="faq-ans"><p>Yes, though international ecommerce SEO is a separate engagement from UK-only SEO. For UK brands expanding to the EU, US, or Australia, the key components are: hreflang tag implementation across the site to tell Google which version to serve in each country; country-specific keyword research (search volume and intent differ significantly between UK and US for the same product category); separate URL structures for each market (/, /eu/, /au/ subdirectories or ccTLDs); and localised on-page content with correct spelling, pricing, and cultural references for each target market. FactoryJet has built international ecommerce SEO structures for clients expanding beyond the UK. We recommend starting with one international market and proving the model before scaling to multiple regions.</p></div>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  15. UK CITIES + RELATED
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Ecommerce SEO Services for UK Brands</h2>
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
        <p>Shopify SEO Agency UK; platform-specific Shopify search optimisation →</p>
      </a>
      <a href="/uk/shopify-development" className="blog-card">
        <p>Need a Shopify store first? See our UK Shopify development services →</p>
      </a>
      <a href="/blog/ecommerce-seo-vs-paid-ads-uk-2026" className="blog-card">
        <p>UK Ecommerce SEO vs. Paid Ads; the maths in 2026</p>
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
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Get a Free Ecommerce SEO Audit; See What's Costing You Revenue</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.65)', fontSize: '16px', lineHeight: '1.7' }}>Before the call, we'll pull your Google Search Console data and identify your top 3 organic revenue opportunities; category pages with crawl issues, commercial queries you're on page 2 for, and schema markup gaps leaving Google Shopping revenue on the table. The audit is free. The call is 30 minutes.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Get Your Free SEO Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/uk/shopify-development" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>See Shopify Development Services</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)', marginTop: '20px' }}>Month-to-month. No lock-in. 500+ ecommerce stores served. Revenue-first reporting.</p>
  </div>
</section>


</main>
</div>
      <Footer />
    </>
  );
}
