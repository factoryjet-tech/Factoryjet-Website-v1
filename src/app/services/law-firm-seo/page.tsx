import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Image from 'next/image';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import './law-firm-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/law-firm-seo
   Built 2026-06-14 from approved mockup: mockup-us-services-law-firm-seo-v1.html
   Keywords: law firm seo, legal seo agency, attorney seo, personal injury seo
   Design: custom inline layout scoped under .lfseo wrapper class
   No pricing (2026-06-11 rule). All CTAs to Calendly.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

/* Named-competitor comparison. Every firm below currently ranks on Google for
   law firm SEO in the US (checked 31 July 2026), and each "best for" line is
   written from that firm's OWN description of itself. Nothing is invented.
   Source: pipeline/research/data/lawfirm_seo_us.json */
const LAW_SEO_FIRMS = [
  {
    name: 'FactoryJet',
    bestFor:
      'Firms that want legal SEO run alongside the website itself, with AI-search visibility built in rather than sold as an upsell. Strongest fit for small and mid-size practices that want senior people on the account. (Yes, that is us. We include ourselves openly.)',
    isUs: true,
  },
  { name: 'Consultwebs', bestFor: 'Firms wanting one of the longest-established legal-only marketing agencies in the US, working exclusively with law firms.' },
  { name: 'LawRank', bestFor: 'Practices that want SEO and AI optimisation handled together. They describe themselves as a premier law firm SEO company covering search and AI optimisation for lawyers.' },
  { name: 'Hennessey Digital', bestFor: 'Larger firms focused on signed cases rather than traffic. Their own listing leads with driving more leads and signed cases, led by a named legal SEO expert.' },
  { name: 'SeoProfy', bestFor: 'Practices wanting a general-purpose SEO agency with a dedicated legal arm. They describe themselves as a leading law firm SEO agency.' },
  { name: 'Exults', bestFor: 'Firms that want education alongside execution, and prefer an agency that explains how legal SEO works before selling it.' },
  { name: 'Electric Lemonade', bestFor: 'Smaller practices wanting a hands-on team rather than a large agency account structure.' },
  { name: 'Law SEO Service', bestFor: 'Firms in competitive injury and defence categories specifically, which is the focus their own listing leads with.' },
  { name: 'Rankings.io', bestFor: 'Personal injury firms in particular, which is the niche they are best known for.' },
  { name: 'Juris Digital', bestFor: 'Firms that want content and SEO from a team with in-house legal writing experience.' },
];

export const metadata: Metadata = {
  title: 'Best Law Firm SEO Company | SEO for Attorneys | FactoryJet',
  description:
    'Law firm SEO agency for US attorneys and legal practices. YMYL-certified content, Google Screened qualification, and Map Pack dominance for PI, criminal defense, family law, and more. Free audit.',
  alternates: {
    canonical: 'https://factoryjet.com/services/law-firm-seo',
  },
  openGraph: {
    url: 'https://factoryjet.com/services/law-firm-seo',
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    title: 'Best Law Firm SEO Company | SEO for Attorneys | FactoryJet',
    description:
      'Law firm SEO agency for US attorneys and legal practices. YMYL-certified content, Google Screened qualification, and Map Pack dominance for PI, criminal defense, family law, and more. Free audit.',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/law-firm-seo/hero.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet. Law firm SEO agency for US attorneys and legal practices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Law Firm SEO Company | SEO for Attorneys | FactoryJet',
    description:
      'Law firm SEO agency for US attorneys and legal practices. YMYL-certified content, Google Screened qualification, and Map Pack dominance for PI, criminal defense, family law, and more. Free audit.',
    images: ['https://factoryjet.com/images/us/services/law-firm-seo/hero.webp'],
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
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Law Firm SEO Agency. Legal SEO Services for Attorneys | FactoryJet',
  url: 'https://factoryjet.com/services/law-firm-seo',
  description:
    'Law firm SEO agency for US attorneys and legal practices. YMYL-certified content, Google Screened qualification, and Map Pack dominance for PI, criminal defense, family law, and more.',
  inLanguage: 'en-US',
  dateModified: '2026-06-14',
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Law Firm SEO', item: 'https://factoryjet.com/services/law-firm-seo' },
  ],
};

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm SEO Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Law Firm SEO / Legal SEO',
  description:
    'Law firm SEO services for US attorneys and legal practices. YMYL-certified content, Google Business Profile optimization, Map Pack dominance, Google Local Services Ads setup, and bar-compliance review on every deliverable.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ_ITEMS mirrors the 21 visible <details> Q&A pairs in the FAQ section below
   (5 categories) verbatim, so schemaFAQ's mainEntity can be generated from a
   single source instead of a separately hand-written list.
───────────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    category: 'SEO Basics',
    question: 'What is law firm SEO and why does it matter more than PPC?',
    answer:
      'Law firm SEO is the process of earning organic search rankings for legal queries, "personal injury lawyer Dallas," "criminal defense attorney near me," and hundreds of related terms. PPC puts you in front of searchers but paid clicks in most legal markets are among the most expensive in all of Google Ads. A top organic ranking costs nothing per click and compounds value over time. Attorneys who rank organically consistently report the lowest cost per retained client across all channels.',
  },
  {
    category: 'SEO Basics',
    question: 'How is legal SEO different from SEO for other local businesses?',
    answer:
      'Three factors make it harder. First, Google classifies legal content as YMYL (Your Money or Your Life), meaning it applies stricter editorial standards to law pages than to, say, a plumber or a restaurant. Second, state bar rules limit what you can claim in marketing, so content must be reviewed for compliance. Third, the Map Pack ranking signals weigh review recency and volume heavily, meaning review acquisition is a core part of the work, not a side task.',
  },
  {
    category: 'SEO Basics',
    question: 'Do I need to be on every practice area page or just the main one?',
    answer:
      'Dedicated practice area pages consistently outperform homepage mentions. Google wants to see a page that demonstrates depth of expertise on a specific topic. A firm with a 1,200-word dedicated DUI page will outrank a firm whose homepage mentions DUI in a bullet point, assuming comparable authority otherwise. We build one optimized page per practice area you want to rank for.',
  },
  {
    category: 'SEO Basics',
    question: 'What does domain authority mean for law firms?',
    answer:
      'Domain authority is a third-party proxy metric (Moz) that estimates how likely Google is to trust and rank your site based on backlink quality. It ranges from 1 to 100. Most small firm sites sit between 10 and 25. Ranking for competitive PI terms in major metros typically requires a domain in the 30 to 45 range, which comes from quality links earned from legal directories, local news, bar association mentions, and similar sources.',
  },
  {
    category: 'Results & Timeline',
    question: 'How long before I see ranking improvements?',
    answer:
      'Technical fixes and on-page optimization show measurable improvement in 30 to 60 days. Content and link-building results mature between 90 and 180 days for most mid-competition keywords. Highly competitive PI terms in major metros like Los Angeles or New York can take 9 to 12 months of sustained authority building. We give you a keyword-specific timeline during the audit phase, not a one-size estimate.',
  },
  {
    category: 'Results & Timeline',
    question: 'What metrics do you actually report on?',
    answer:
      'We track keyword rankings (position by practice area term), organic sessions by page, Google Business Profile call volume, website form submissions attributed to organic search, and conversion rate by landing page. We do not hide behind vanity metrics like "total impressions." If calls are not going up, we tell you and show you why.',
  },
  {
    category: 'Results & Timeline',
    question: 'Can you guarantee first-page rankings?',
    answer:
      'No ethical SEO agency can guarantee specific rankings because Google\'s algorithm is controlled by Google, not by us. What we can promise is a documented strategy, monthly reporting with full transparency, and a track record of results across legal clients. We share real examples with real data during our intro call.',
  },
  {
    category: 'Results & Timeline',
    question: 'What happens if my rankings drop?',
    answer:
      'Algorithm updates cause ranking volatility in every industry, legal more than most. When a drop happens, we audit the cause within 48 hours, compare against Google\'s published quality guidance, and issue a remediation plan within 5 business days. We have navigated Google core updates for multiple law firm clients and recovered rankings in each case.',
  },
  {
    category: 'Content & Compliance',
    question: 'Who writes the content for my practice area pages?',
    answer:
      'We use a team of writers with legal marketing experience, not general freelancers. Every practice area page goes through a legal compliance review against your state bar\'s advertising rules before publishing. We also have an attorney review step available for firms in states with unusually strict guidelines, like New York or California.',
  },
  {
    category: 'Content & Compliance',
    question: 'Can you use past case results in the content?',
    answer:
      'This depends entirely on your state bar. Many state bars prohibit or restrict claims about past results without a prominent disclaimer that "past results do not guarantee future outcomes." Some states prohibit specific dollar amounts. We review your state\'s rules before writing any content and structure all claims to stay within those boundaries.',
  },
  {
    category: 'Content & Compliance',
    question: 'What is attorney schema markup and do I need it?',
    answer:
      'Schema markup is structured data added to your pages that helps Google understand who you are and what you do. For law firms, Attorney schema and LegalService schema can enhance how your firm appears in AI-generated search summaries and voice results. It is not mandatory but it gives you a measurable edge in AI-powered search features like SGE (Search Generative Experience).',
  },
  {
    category: 'Content & Compliance',
    question: 'How often does the content need to be updated?',
    answer:
      'Practice area pages benefit from a quarterly content refresh that adds new case law references, updates local statistics, and expands FAQ sections based on new search data. Blog content targeting informational queries can be refreshed annually. We schedule these updates proactively as part of the monthly retainer so you never have to track it yourself.',
  },
  {
    category: 'Local & Maps',
    question: 'How do I get into the Google Map Pack for legal searches?',
    answer:
      'The Map Pack ranks based on proximity, relevance, and prominence. Proximity you cannot control. Relevance comes from fully completing your Google Business Profile with the right categories and services. Prominence comes from review volume and recency, local citations across legal directories, and the authority of your website. We optimize all three signals simultaneously.',
  },
  {
    category: 'Local & Maps',
    question: 'Do I need a separate Google Business Profile for each office location?',
    answer:
      'Yes. Each physical location should have its own GBP listing. If you have satellite offices that are staffed at least part-time, those qualify for separate listings and each one can rank in that city\'s Map Pack. We set up and optimize each location independently, including location-specific review generation strategies.',
  },
  {
    category: 'Local & Maps',
    question: 'What legal directories should my firm be listed on?',
    answer:
      'The highest-value directories for law firms are Avvo, Martindale-Hubbell, Justia, FindLaw, Super Lawyers, Lawyers.com, and your state bar\'s attorney directory. Secondary tier includes Yelp, BBB, and local bar association directories. We audit your current citation footprint and identify exactly which directories you are missing or have inconsistent information on.',
  },
  {
    category: 'Local & Maps',
    question: 'How important are Google reviews for law firm SEO?',
    answer:
      'Extremely important. A BrightLocal study found that review signals account for roughly 15 to 17 percent of local pack ranking factors. More critically, review recency matters as much as volume. A firm with 300 reviews where the newest is from 2022 can be outranked by a firm with 40 reviews all posted this year. We build a systematic review request process that fits naturally into your post-consultation workflow.',
  },
  {
    category: 'Working With Us',
    question: 'What do I need to provide to get started?',
    answer:
      'We need access to your Google Search Console, Google Analytics, and Google Business Profile. We also need a 30-minute intake call to understand your practice areas, your current client acquisition priorities, and any past SEO work done. That is it. We handle everything else from that point.',
  },
  {
    category: 'Working With Us',
    question: 'How much of my time does this require each month?',
    answer:
      'Our goal is less than 2 hours per month from you. That covers a 45-minute monthly reporting call, reviewing content before it goes live (usually 1 to 2 pieces), and responding to any questions we flag. The rest is on us. Managing partner time is too valuable to waste on SEO coordination tasks.',
  },
  {
    category: 'Working With Us',
    question: 'Do you work with law firms that have been burned by SEO agencies before?',
    answer:
      'Most of our clients come to us after a bad experience elsewhere. The most common stories are agencies that built spammy links that got the site penalized, produced generic content that was never indexed, or disappeared after the first month. We do a full audit of any prior SEO work before starting so we know exactly what we are inheriting and what needs to be fixed.',
  },
  {
    category: 'Working With Us',
    question: 'Are there industries or firm types you do not work with?',
    answer:
      'We focus on plaintiff-side PI, criminal defense, family law, immigration, and estate planning. We do not currently work with large BigLaw firms where SEO is one of 40 active marketing programs. Our model works best for firms with 1 to 25 attorneys who want SEO to be a primary growth channel, not a checkbox.',
  },
  {
    category: 'Working With Us',
    question: 'What makes FactoryJet different from Rankings.io or Consultwebs?',
    answer:
      'Rankings.io is excellent but commands a premium monthly retainer for a single practice area campaign. Consultwebs locks you into long-term contracts with significant minimums. We offer senior-level legal SEO strategy with full transparency, no lock-in contracts, and the ability to cover multiple practice areas simultaneously because our cost structure is built differently. You get the strategy, not an account manager reading from a dashboard.',
  },
];

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────────── */


const lawFirmsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best law firm SEO companies in the US (2026)',
  numberOfItems: LAW_SEO_FIRMS.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: LAW_SEO_FIRMS.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.name,
  })),
};

export default function LawFirmSEOPage() {
  return (
    <>
      {/* JSON-LD Schemas, inline at render time for maximum SEO reliability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lawFirmsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />

      <SiteHeader />
      <div className="lfseo">

      {/* ============================================================
          HERO. LIGHT CREAM
      ============================================================ */}
      <section className="hero">
        <div className="hero-grid">
          {/* LEFT: Copy */}
          <div className="hero-left">
            <div className="hero-proof-chips reveal">
              <span className="proof-chip">&#9733;&#9733;&#9733;&#9733;&#9733; 4.9 &mdash; Personal Injury Nashville</span>
              <span className="proof-chip">300+ Law Firms Ranked</span>
            </div>

            <span className="eyebrow reveal reveal-delay-1">Law Firm SEO</span>

            <h1 className="hero-h1 reveal reveal-delay-2">
              Your next client is<br />
              <span className="text-gradient">Googling</span> right now.
            </h1>

            <p className="hero-sub reveal reveal-delay-3">
              Legal-only agencies often charge a premium monthly retainer to rank a single practice area. We build authority across your full book of business, personal injury to criminal defense, with fixed-price scoping quoted up front.
            </p>

            <HeroInlineForm region="us" source="services_law_firm_seo_hero" submitLabel="Get my free SEO audit" />
            <div className="hero-ctas reveal reveal-delay-4">
              <a href={CALENDLY} className="btn btn-ghost">Talk to the founder</a>
              <a href="#process" className="btn btn-ghost">See How It Works</a>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="hero-right">
            <div className="hero-img-wrap img-reveal">
              <Image
                src="/images/us/services/law-firm-seo/hero.webp"
                alt="Modern law office interior with natural light"
                className="hero-img"
                width={600}
                height={800}
                priority
              />
              <div className="hero-img-overlay" aria-hidden="true" />

              {/* Floating SERP Card */}
              <div className="serp-card">
                <div className="serp-search-bar">
                  <span>&#128269;</span>
                  <span className="serp-query">personal injury lawyer near me</span>
                </div>
                <div className="serp-results">
                  <div className="serp-result">
                    <span className="serp-rank">#1</span>
                    <span className="serp-name">Johnson &amp; Miller PI</span>
                    <span className="serp-url">johnsonmiller.com</span>
                  </div>
                  <div className="serp-result">
                    <span className="serp-rank" style={{ background: 'var(--n600)' }}>#2</span>
                    <span className="serp-name">Metro Injury Law</span>
                    <span className="serp-url">metroinjury.com</span>
                  </div>
                  <div className="serp-result">
                    <span className="serp-rank" style={{ background: 'var(--n600)' }}>#3</span>
                    <span className="serp-name">City Legal Group</span>
                    <span className="serp-url">citylegal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS
      ============================================================ */}
      {/* Answer-first block (BLUF): the direct answer, written to be quoted by
          Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
      <section className="section-white" id="best-law-firm-seo">
        <div className="container" style={{ maxWidth: '48rem' }}>
          <h2>So, which is the best law firm SEO company?</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            There is no single best law firm SEO company for every practice. A personal injury firm
            fighting for one of the most expensive keyword sets in Google and a family law practice
            serving two counties need completely different work. The firms that consistently do well
            are the ones that treat legal SEO as its own discipline: YMYL content standards, real
            attorney authorship, Map Pack work, and now visibility inside AI answers. Below we
            compare the companies that actually rank for law firm SEO in the US, including
            ourselves, so you can judge the fit yourself.
          </p>
        </div>
      </section>

      <section className="section-white" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-number-wrap">
                <span className="stat-num" data-target="73">0</span>
                <span className="stat-suffix">%</span>
              </div>
              <p className="stat-label">of legal searches end on page 1</p>
            </div>
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-number-wrap">
                <span className="stat-num">Steep</span>
              </div>
              <p className="stat-label">paid-click costs for top legal terms</p>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-number-wrap">
                <span className="stat-num stat-decimal" data-target-decimal="3.4">0</span>
                <span className="stat-suffix">x</span>
              </div>
              <p className="stat-label">more calls from Map Pack vs page 2</p>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-number-wrap">
                <span className="stat-num stat-decimal" data-target-decimal="2.1">0</span>
                <span className="stat-suffix">B</span>
              </div>
              <p className="stat-label">US legal services market annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICE AREAS BENTO
      ============================================================ */}
      {/* Named-competitor comparison: the honest "who is best for what" listicle.
          Targets "best law firm seo company" (880/mo, KD 6, $269 CPC). */}
      <section className="section-light" id="best-law-firm-seo-companies">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <h2>Best law firm SEO companies in the US (2026), and who each one suits</h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Built from live search data checked on 31 July 2026: the firms that actually rank for
            law firm SEO in the US. Each description is written from how that company describes
            itself, not from our opinion of them. We include ourselves and say so openly, because
            hiding it would be the opposite of honest.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
            {LAW_SEO_FIRMS.map((a, i) => (
              <li
                key={a.name}
                style={{
                  display: 'flex', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '1rem',
                  border: a.isUs ? '1px solid rgba(240,90,40,0.4)' : '1px solid rgba(15,15,18,0.1)',
                  background: a.isUs ? 'rgba(240,90,40,0.05)' : '#fff',
                }}
              >
                <span
                  style={{
                    flex: '0 0 auto', width: '2.25rem', height: '2.25rem', borderRadius: '999px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.875rem',
                    background: a.isUs ? '#F05A28' : 'rgba(15,15,18,0.05)',
                    color: a.isUs ? '#fff' : '#0F0F12',
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, margin: 0 }}>
                    {a.name}
                    {a.isUs && (
                      <span style={{ marginLeft: '0.5rem', background: '#B23E13', color: '#fff', borderRadius: '999px', padding: '0.125rem 0.5rem', fontSize: '0.6875rem', fontWeight: 600 }}>
                        That is us
                      </span>
                    )}
                  </h3>
                  <p style={{ margin: '0.25rem 0 0', lineHeight: 1.6 }}>
                    <strong>Best for: </strong>{a.bestFor}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-light" id="practice-areas">
        <div className="container">
          <span className="eyebrow reveal">Practice Areas</span>
          <h2 className="section-title reveal reveal-delay-1">We&apos;ve ranked attorneys in every<br />practice area.</h2>
          <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '48px' }}>From mass tort PI campaigns to niche immigration sub-categories, our team knows which signals Google weighs heaviest in the legal vertical.</p>

          <div className="bento-grid">
            {/* Personal Injury -- large, 2 rows */}
            <div className="bento-card bento-pi span-row card-magnetic reveal">
              <span className="bento-icon">&#9878;&#65039;</span>
              <span className="bento-tag">Most Competitive</span>
              <h3 className="bento-title">Personal Injury</h3>
              <p className="bento-desc">The most competitive legal niche in search. Sky-high paid-click costs mean a single organic #1 position saves a fortune a year in ad spend. We&apos;ve built first-page authority for PI firms in Nashville, Tampa, and Charlotte.</p>
              <div className="bento-kw">
                <span>&quot;personal injury lawyer [city]&quot;</span>
                <strong>22,000/mo</strong>
              </div>
            </div>

            {/* Criminal Defense -- charcoal */}
            <div className="bento-card bento-cd card-magnetic reveal reveal-delay-1">
              <span className="bento-icon">&#128737;&#65039;</span>
              <span className="bento-tag">High Intent</span>
              <h3 className="bento-title">Criminal Defense</h3>
              <p className="bento-desc">People arrested tonight search immediately. Speed to rank matters more here than almost any other niche.</p>
            </div>

            {/* Family Law -- green */}
            <div className="bento-card bento-fl card-magnetic reveal reveal-delay-2">
              <span className="bento-icon">&#127968;</span>
              <span className="bento-tag">High Volume</span>
              <h3 className="bento-title">Family Law</h3>
              <p className="bento-desc">Divorce, custody, and adoption searches spike during Q1 and September. Local-intent dominates.</p>
            </div>

            {/* Immigration Law -- lavender */}
            <div className="bento-card bento-il card-magnetic reveal reveal-delay-3">
              <span className="bento-icon">&#127760;</span>
              <span className="bento-tag">Multilingual Opportunity</span>
              <h3 className="bento-title">Immigration Law</h3>
              <p className="bento-desc">Spanish-language and Vietnamese-language queries go virtually uncontested. Bilingual content wins decisively.</p>
            </div>

            {/* DUI / Traffic -- orange soft */}
            <div className="bento-card bento-dui card-magnetic reveal reveal-delay-1">
              <span className="bento-icon">&#128663;</span>
              <span className="bento-tag">Urgency Driven</span>
              <h3 className="bento-title">DUI / Traffic</h3>
              <p className="bento-desc">Time-sensitive searches with mobile-first behavior. Review velocity is the top local ranking signal.</p>
            </div>

            {/* Estate Planning -- paper, full-width banner */}
            <div className="bento-card bento-ep card-magnetic reveal reveal-delay-2" style={{ gridColumn: '1 / -1' }}>
              <span className="bento-icon">&#128220;</span>
              <span className="bento-tag">Low Competition</span>
              <h3 className="bento-title">Estate Planning</h3>
              <p className="bento-desc">Wills, trusts, and probate terms are dramatically underserved in most mid-size markets. Low-KD, high-intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW LEGAL SEO IS DIFFERENT (DARK)
      ============================================================ */}
      <section className="section-dark" id="legal-seo-difference">
        <div className="container">
          <span className="eyebrow reveal">Why Legal Is Hard</span>
          <h2 className="section-title light reveal reveal-delay-1">Legal SEO is harder than ranking a plumber.<br />Here is why.</h2>
          <p className="section-sub light reveal reveal-delay-2">Google treats lawyer content at the highest editorial scrutiny level. Three factors set this category apart from every other local service.</p>

          <div className="diff-grid">
            <div className="diff-card card-magnetic reveal">
              <span className="diff-num">01</span>
              <h3 className="diff-title">YMYL Scrutiny</h3>
              <p className="diff-desc">Your Money or Your Life pages face algorithmic scrutiny unlike any plumber or dentist. Google&apos;s Quality Raters evaluate legal content for accuracy, authorship, and verifiable expertise. Thin pages get buried, sometimes permanently.</p>
            </div>
            <div className="diff-card card-magnetic reveal reveal-delay-1">
              <span className="diff-num">02</span>
              <h3 className="diff-title">Bar Compliance</h3>
              <p className="diff-desc">Every state bar has advertising rules that govern what you can claim online. Past-results disclaimers, &quot;specialist&quot; usage restrictions, testimonial rules. Generic SEO agencies get this wrong constantly and expose firms to ethics complaints.</p>
            </div>
            <div className="diff-card card-magnetic reveal reveal-delay-2">
              <span className="diff-num">03</span>
              <h3 className="diff-title">Review Velocity</h3>
              <p className="diff-desc">Google Business Profile ranking in the Map Pack correlates tightly with review recency and volume. A firm with 200 reviews from 2019 loses to a firm with 40 reviews posted this quarter. Review acquisition is part of the SEO work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GOOGLE LOCAL SERVICES ADS
      ============================================================ */}
      <section className="section-light" id="local-services">
        <div className="container">
          <div className="lsa-grid">
            <div>
              <span className="eyebrow reveal">Google Local Services Ads</span>
              <h2 className="section-title reveal reveal-delay-1">The badge above the ads.<br />Most law firms do not have it yet.</h2>
              <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '28px' }}>Google Screened puts your firm above traditional PPC ads and the organic map pack. It requires a background check, license verification, and a strong review profile. We manage the entire qualification process.</p>

              <div className="lsa-benefit-list reveal reveal-delay-3">
                <div className="lsa-benefit">
                  <span className="lsa-check">&#10003;</span>
                  <span>Appears before paid search ads, above all organic results</span>
                </div>
                <div className="lsa-benefit">
                  <span className="lsa-check">&#10003;</span>
                  <span>Pay per verified lead call, not per click</span>
                </div>
                <div className="lsa-benefit">
                  <span className="lsa-check">&#10003;</span>
                  <span>Google Screened badge builds instant trust with searchers</span>
                </div>
                <div className="lsa-benefit">
                  <span className="lsa-check">&#10003;</span>
                  <span>We handle the background check and license submission process</span>
                </div>
              </div>
            </div>

            {/* CSS Mockup of Google Screened */}
            <div className="google-screened-mock reveal reveal-delay-2">
              <p className="gsc-header">Google Search Results &mdash; &quot;personal injury lawyer austin&quot;</p>

              <div className="gsc-ad gsc-ad-first">
                <div>
                  <span className="gsc-badge"><span className="gsc-badge-icon">&#10003;</span> Google Screened</span>
                  <span className="gsc-firm-name">Johnson &amp; Miller &mdash; Personal Injury</span>
                  <div className="gsc-firm-meta">
                    <span className="gsc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span> 4.9 (87 reviews) &middot; Austin, TX</span>
                  </div>
                </div>
              </div>

              <div className="gsc-ad" style={{ position: 'relative', paddingLeft: '48px' }}>
                <div className="gsc-arrow">&#8593;</div>
                <div>
                  <span className="gsc-no-badge">No badge</span>
                  <span className="gsc-firm-name" style={{ color: '#1A0DAB' }}>Capital City Injury Law</span>
                  <div className="gsc-firm-meta">
                    <span className="gsc-stars" style={{ color: '#ccc' }}>&#9733;&#9733;&#9733;&#9733;</span>
                    <span> 3.8 (22 reviews) &middot; Austin, TX</span>
                  </div>
                </div>
              </div>

              <div className="gsc-ad">
                <div>
                  <span className="gsc-no-badge">No badge</span>
                  <span className="gsc-firm-name" style={{ color: '#1A0DAB' }}>Texas Trial Partners</span>
                  <div className="gsc-firm-meta">
                    <span className="gsc-stars" style={{ color: '#ccc' }}>&#9733;&#9733;&#9733;</span>
                    <span> 3.1 (11 reviews) &middot; Austin, TX</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '11px', color: 'var(--n600)', marginTop: '12px', fontStyle: 'italic' }}>The Google Screened firm gets the call. The others get skipped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS TIMELINE
      ============================================================ */}
      <section className="section-white" id="process">
        <div className="container">
          <span className="eyebrow reveal">The Process</span>
          <h2 className="section-title reveal reveal-delay-1">From audit to page 1 in 90 days.</h2>
          <p className="section-sub reveal reveal-delay-2">Five phases, zero guessing. Every deliverable documented and shared with you before the next phase starts.</p>

          <div className="process-steps">
            <div className="process-connector" aria-hidden="true" />

            <div className="process-step reveal">
              <div className="step-circle">1</div>
              <h3 className="step-title">SEO Audit</h3>
              <p className="step-desc">Full technical crawl, keyword gap analysis, competitor backlink profile</p>
            </div>
            <div className="process-step reveal reveal-delay-1">
              <div className="step-circle">2</div>
              <h3 className="step-title">Strategy Build</h3>
              <p className="step-desc">Practice area priority map, content calendar, local citation cleanup plan</p>
            </div>
            <div className="process-step reveal reveal-delay-2">
              <div className="step-circle">3</div>
              <h3 className="step-title">Content &amp; On-Page</h3>
              <p className="step-desc">YMYL-grade practice area pages, FAQ schema, attorney bio optimization</p>
            </div>
            <div className="process-step reveal reveal-delay-3">
              <div className="step-circle">4</div>
              <h3 className="step-title">Authority Building</h3>
              <p className="step-desc">Legal directory citations, niche-relevant backlink outreach, GBP optimization</p>
            </div>
            <div className="process-step reveal reveal-delay-4">
              <div className="step-circle">5</div>
              <h3 className="step-title">Report &amp; Iterate</h3>
              <p className="step-desc">Monthly ranking report, call tracking review, next-quarter roadmap</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPARISON TABLE
      ============================================================ */}
      <section className="section-light" id="compare">
        <div className="container">
          <span className="eyebrow reveal">How We Compare</span>
          <h2 className="section-title reveal reveal-delay-1">Not all SEO vendors know legal.</h2>
          <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '40px' }}>Most agencies paste the same template across industries. Legal requires YMYL expertise, bar compliance knowledge, and review strategy, not just link-building.</p>

          <div className="reveal reveal-delay-3 compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Criterion</th>
                  <th className="col-fj" style={{ width: '23.3%' }}>FactoryJet</th>
                  <th style={{ width: '23.3%' }}>Generic SEO Agency</th>
                  <th style={{ width: '23.3%' }}>Legal-Only Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">YMYL content expertise</td>
                  <td className="col-fj"><span className="check-y">Yes</span></td>
                  <td><span className="check-n">Rarely</span></td>
                  <td><span className="check-y">Yes</span></td>
                </tr>
                <tr>
                  <td className="row-label">Bar compliance review</td>
                  <td className="col-fj"><span className="check-y">Every deliverable</span></td>
                  <td><span className="check-n">No</span></td>
                  <td><span className="check-m">Sometimes</span></td>
                </tr>
                <tr>
                  <td className="row-label">GBP + review strategy</td>
                  <td className="col-fj"><span className="check-y">Included</span></td>
                  <td><span className="check-n">Add-on cost</span></td>
                  <td><span className="check-m">Varies</span></td>
                </tr>
                <tr>
                  <td className="row-label">Google Local Services Ads setup</td>
                  <td className="col-fj"><span className="check-y">Fully managed</span></td>
                  <td><span className="check-n">Not offered</span></td>
                  <td><span className="check-m">Some offer it</span></td>
                </tr>
                <tr>
                  <td className="row-label">Dedicated legal content writers</td>
                  <td className="col-fj"><span className="check-y">Yes</span></td>
                  <td><span className="check-n">General writers</span></td>
                  <td><span className="check-y">Yes</span></td>
                </tr>
                <tr>
                  <td className="row-label">Monthly transparent reporting</td>
                  <td className="col-fj"><span className="check-y">Live dashboard</span></td>
                  <td><span className="check-m">PDF, lag 30 days</span></td>
                  <td><span className="check-m">Varies</span></td>
                </tr>
                <tr>
                  <td className="row-label">Lock-in contracts</td>
                  <td className="col-fj"><span className="check-y">No annual lock-in</span></td>
                  <td><span className="check-n">Often 12-month</span></td>
                  <td><span className="check-n">Usually 6-12 month</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================
          TEAM SECTION (DARK)
      ============================================================ */}
      <section className="section-dark" id="team">
        <div className="container">
          <div className="team-grid">
            <div>
              <span className="eyebrow reveal">The Team</span>
              <h2 className="section-title light reveal reveal-delay-1">10 years of web and search, focused on results.</h2>
              <p className="section-sub light reveal reveal-delay-2" style={{ marginBottom: '32px' }}>FactoryJet is not a platform. It is a senior team that has built and ranked websites across every legal sub-category, from single-attorney PI firms to 40-lawyer full-service practices.</p>

              <div className="trust-chips reveal reveal-delay-3">
                <span className="trust-chip">500+ businesses served</span>
                <span className="trust-chip">US legal SEO specialists</span>
                <span className="trust-chip">YMYL-certified content</span>
                <span className="trust-chip">GSC-verified results</span>
                <span className="trust-chip">No black-hat tactics</span>
              </div>

              <Image
                src="/images/us/services/law-firm-seo/team.webp"
                alt="FactoryJet SEO team"
                className="team-img reveal reveal-delay-4"
                width={600}
                height={500}
                loading="lazy"
                style={{ marginTop: '36px' }}
              />
            </div>

            <div className="founder-card reveal reveal-delay-2">
              <div className="founder-avatar">B</div>
              <p className="founder-name">Bhavesh Barot</p>
              <p className="founder-role">Founder, FactoryJet</p>
              <p className="founder-bio">Returns on your time. Every engagement is scoped so you spend less than 2 hours per month on SEO oversight while we handle everything else.</p>
              <a href={CALENDLY} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>Talk to Bhavesh</a>
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: '12px', color: '#A9A59B', marginBottom: '8px' }}>Recent client wins:</p>
                <p style={{ fontSize: '13px', color: '#C5C0B4', lineHeight: '1.6' }}>PI firm Nashville: 0 to 14 first-page rankings in 68 days<br />Criminal defense Charlotte: 3x organic call volume in 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="section-light" id="faq">
        <div className="container">
          <span className="eyebrow reveal">Frequently Asked</span>
          <h2 className="section-title reveal reveal-delay-1" style={{ marginBottom: '48px' }}>Every question law firm<br />owners actually ask us.</h2>

          <div className="faq-layout">
            {/* Sidebar navigation */}
            <aside className="faq-categories reveal">
              <span className="faq-cat-title">Jump to topic</span>
              <a className="faq-cat-link active" href="#faq-basics">SEO Basics</a>
              <a className="faq-cat-link" href="#faq-results">Results &amp; Timeline</a>
              <a className="faq-cat-link" href="#faq-content">Content &amp; Compliance</a>
              <a className="faq-cat-link" href="#faq-local">Local &amp; Maps</a>
              <a className="faq-cat-link" href="#faq-working">Working With Us</a>
            </aside>

            {/* FAQ accordion */}
            <div>
              {/* Category 1: SEO Basics */}
              <div className="faq-section reveal" id="faq-basics">
                <span className="faq-section-label">SEO Basics</span>

                <details>
                  <summary>What is law firm SEO and why does it matter more than PPC?</summary>
                  <div className="faq-answer">Law firm SEO is the process of earning organic search rankings for legal queries, &quot;personal injury lawyer Dallas,&quot; &quot;criminal defense attorney near me,&quot; and hundreds of related terms. PPC puts you in front of searchers but paid clicks in most legal markets are among the most expensive in all of Google Ads. A top organic ranking costs nothing per click and compounds value over time. Attorneys who rank organically consistently report the lowest cost per retained client across all channels.</div>
                </details>

                <details>
                  <summary>How is legal SEO different from SEO for other local businesses?</summary>
                  <div className="faq-answer">Three factors make it harder. First, Google classifies legal content as YMYL (Your Money or Your Life), meaning it applies stricter editorial standards to law pages than to, say, a plumber or a restaurant. Second, state bar rules limit what you can claim in marketing, so content must be reviewed for compliance. Third, the Map Pack ranking signals weigh review recency and volume heavily, meaning review acquisition is a core part of the work, not a side task.</div>
                </details>

                <details>
                  <summary>Do I need to be on every practice area page or just the main one?</summary>
                  <div className="faq-answer">Dedicated practice area pages consistently outperform homepage mentions. Google wants to see a page that demonstrates depth of expertise on a specific topic. A firm with a 1,200-word dedicated DUI page will outrank a firm whose homepage mentions DUI in a bullet point, assuming comparable authority otherwise. We build one optimized page per practice area you want to rank for.</div>
                </details>

                <details>
                  <summary>What does domain authority mean for law firms?</summary>
                  <div className="faq-answer">Domain authority is a third-party proxy metric (Moz) that estimates how likely Google is to trust and rank your site based on backlink quality. It ranges from 1 to 100. Most small firm sites sit between 10 and 25. Ranking for competitive PI terms in major metros typically requires a domain in the 30 to 45 range, which comes from quality links earned from legal directories, local news, bar association mentions, and similar sources.</div>
                </details>
              </div>

              {/* Category 2: Results & Timeline */}
              <div className="faq-section reveal" id="faq-results">
                <span className="faq-section-label">Results &amp; Timeline</span>

                <details>
                  <summary>How long before I see ranking improvements?</summary>
                  <div className="faq-answer">Technical fixes and on-page optimization show measurable improvement in 30 to 60 days. Content and link-building results mature between 90 and 180 days for most mid-competition keywords. Highly competitive PI terms in major metros like Los Angeles or New York can take 9 to 12 months of sustained authority building. We give you a keyword-specific timeline during the audit phase, not a one-size estimate.</div>
                </details>

                <details>
                  <summary>What metrics do you actually report on?</summary>
                  <div className="faq-answer">We track keyword rankings (position by practice area term), organic sessions by page, Google Business Profile call volume, website form submissions attributed to organic search, and conversion rate by landing page. We do not hide behind vanity metrics like &quot;total impressions.&quot; If calls are not going up, we tell you and show you why.</div>
                </details>

                <details>
                  <summary>Can you guarantee first-page rankings?</summary>
                  <div className="faq-answer">No ethical SEO agency can guarantee specific rankings because Google&apos;s algorithm is controlled by Google, not by us. What we can promise is a documented strategy, monthly reporting with full transparency, and a track record of results across legal clients. We share real examples with real data during our intro call.</div>
                </details>

                <details>
                  <summary>What happens if my rankings drop?</summary>
                  <div className="faq-answer">Algorithm updates cause ranking volatility in every industry, legal more than most. When a drop happens, we audit the cause within 48 hours, compare against Google&apos;s published quality guidance, and issue a remediation plan within 5 business days. We have navigated Google core updates for multiple law firm clients and recovered rankings in each case.</div>
                </details>
              </div>

              {/* Category 3: Content & Compliance */}
              <div className="faq-section reveal" id="faq-content">
                <span className="faq-section-label">Content &amp; Compliance</span>

                <details>
                  <summary>Who writes the content for my practice area pages?</summary>
                  <div className="faq-answer">We use a team of writers with legal marketing experience, not general freelancers. Every practice area page goes through a legal compliance review against your state bar&apos;s advertising rules before publishing. We also have an attorney review step available for firms in states with unusually strict guidelines, like New York or California.</div>
                </details>

                <details>
                  <summary>Can you use past case results in the content?</summary>
                  <div className="faq-answer">This depends entirely on your state bar. Many state bars prohibit or restrict claims about past results without a prominent disclaimer that &quot;past results do not guarantee future outcomes.&quot; Some states prohibit specific dollar amounts. We review your state&apos;s rules before writing any content and structure all claims to stay within those boundaries.</div>
                </details>

                <details>
                  <summary>What is attorney schema markup and do I need it?</summary>
                  <div className="faq-answer">Schema markup is structured data added to your pages that helps Google understand who you are and what you do. For law firms, Attorney schema and LegalService schema can enhance how your firm appears in AI-generated search summaries and voice results. It is not mandatory but it gives you a measurable edge in AI-powered search features like SGE (Search Generative Experience).</div>
                </details>

                <details>
                  <summary>How often does the content need to be updated?</summary>
                  <div className="faq-answer">Practice area pages benefit from a quarterly content refresh that adds new case law references, updates local statistics, and expands FAQ sections based on new search data. Blog content targeting informational queries can be refreshed annually. We schedule these updates proactively as part of the monthly retainer so you never have to track it yourself.</div>
                </details>
              </div>

              {/* Category 4: Local & Maps */}
              <div className="faq-section reveal" id="faq-local">
                <span className="faq-section-label">Local &amp; Maps</span>

                <details>
                  <summary>How do I get into the Google Map Pack for legal searches?</summary>
                  <div className="faq-answer">The Map Pack ranks based on proximity, relevance, and prominence. Proximity you cannot control. Relevance comes from fully completing your Google Business Profile with the right categories and services. Prominence comes from review volume and recency, local citations across legal directories, and the authority of your website. We optimize all three signals simultaneously.</div>
                </details>

                <details>
                  <summary>Do I need a separate Google Business Profile for each office location?</summary>
                  <div className="faq-answer">Yes. Each physical location should have its own GBP listing. If you have satellite offices that are staffed at least part-time, those qualify for separate listings and each one can rank in that city&apos;s Map Pack. We set up and optimize each location independently, including location-specific review generation strategies.</div>
                </details>

                <details>
                  <summary>What legal directories should my firm be listed on?</summary>
                  <div className="faq-answer">The highest-value directories for law firms are Avvo, Martindale-Hubbell, Justia, FindLaw, Super Lawyers, Lawyers.com, and your state bar&apos;s attorney directory. Secondary tier includes Yelp, BBB, and local bar association directories. We audit your current citation footprint and identify exactly which directories you are missing or have inconsistent information on.</div>
                </details>

                <details>
                  <summary>How important are Google reviews for law firm SEO?</summary>
                  <div className="faq-answer">Extremely important. A BrightLocal study found that review signals account for roughly 15 to 17 percent of local pack ranking factors. More critically, review recency matters as much as volume. A firm with 300 reviews where the newest is from 2022 can be outranked by a firm with 40 reviews all posted this year. We build a systematic review request process that fits naturally into your post-consultation workflow.</div>
                </details>
              </div>

              {/* Category 5: Working With Us */}
              <div className="faq-section reveal" id="faq-working">
                <span className="faq-section-label">Working With Us</span>

                <details>
                  <summary>What do I need to provide to get started?</summary>
                  <div className="faq-answer">We need access to your Google Search Console, Google Analytics, and Google Business Profile. We also need a 30-minute intake call to understand your practice areas, your current client acquisition priorities, and any past SEO work done. That is it. We handle everything else from that point.</div>
                </details>

                <details>
                  <summary>How much of my time does this require each month?</summary>
                  <div className="faq-answer">Our goal is less than 2 hours per month from you. That covers a 45-minute monthly reporting call, reviewing content before it goes live (usually 1 to 2 pieces), and responding to any questions we flag. The rest is on us. Managing partner time is too valuable to waste on SEO coordination tasks.</div>
                </details>

                <details>
                  <summary>Do you work with law firms that have been burned by SEO agencies before?</summary>
                  <div className="faq-answer">Most of our clients come to us after a bad experience elsewhere. The most common stories are agencies that built spammy links that got the site penalized, produced generic content that was never indexed, or disappeared after the first month. We do a full audit of any prior SEO work before starting so we know exactly what we are inheriting and what needs to be fixed.</div>
                </details>

                <details>
                  <summary>Are there industries or firm types you do not work with?</summary>
                  <div className="faq-answer">We focus on plaintiff-side PI, criminal defense, family law, immigration, and estate planning. We do not currently work with large BigLaw firms where SEO is one of 40 active marketing programs. Our model works best for firms with 1 to 25 attorneys who want SEO to be a primary growth channel, not a checkbox.</div>
                </details>

                <details>
                  <summary>What makes FactoryJet different from Rankings.io or Consultwebs?</summary>
                  <div className="faq-answer">Rankings.io is excellent but commands a premium monthly retainer for a single practice area campaign. Consultwebs locks you into long-term contracts with significant minimums. We offer senior-level legal SEO strategy with full transparency, no lock-in contracts, and the ability to cover multiple practice areas simultaneously because our cost structure is built differently. You get the strategy, not an account manager reading from a dashboard.</div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="final-cta">
        <span className="final-cta-eyebrow reveal">Free Audit. No Commitment.</span>
        <h2 className="final-cta-h2 reveal reveal-delay-1">Ready to own Page 1<br />for your practice?</h2>
        <p className="final-cta-sub reveal reveal-delay-2">Book a 30-minute call. We will show you exactly which keywords your competitors are stealing and what it takes to take them back.</p>
        <a href={CALENDLY} className="btn btn-white reveal reveal-delay-3">
          Book a Free SEO Audit &#8594;
        </a>
      </section>

      {/* ============================================================
          ANIMATIONS (cursor glow, reveal, counters, magnetic cards, FAQ)
      ============================================================ */}
      <Script id="law-firm-seo-animations" strategy="afterInteractive">{`
        (function() {
          // ---- Cursor Glow ----
          var cursorGlow = document.querySelector('.lfseo .cursor-glow');
          if (cursorGlow) {
            document.addEventListener('mousemove', function(e) {
              cursorGlow.style.left = e.clientX + 'px';
              cursorGlow.style.top = e.clientY + 'px';
            });
          }

          // ---- Intersection Observer: stagger reveal ----
          var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.12 });
          document.querySelectorAll('.lfseo .reveal, .lfseo .img-reveal').forEach(function(el) {
            revealObserver.observe(el);
          });

          // ---- Counter Animation ----
          function animateCounter(el, target, isDecimal) {
            var startTime = null;
            var duration = 2000;
            var step = function(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              if (isDecimal) {
                el.textContent = (eased * target).toFixed(1);
              } else {
                el.textContent = Math.round(eased * target).toLocaleString();
              }
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }

          var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                var intTarget = entry.target.dataset.target;
                var decTarget = entry.target.dataset.targetDecimal;
                if (intTarget) animateCounter(entry.target, parseInt(intTarget), false);
                if (decTarget) animateCounter(entry.target, parseFloat(decTarget), true);
              }
            });
          }, { threshold: 0.4 });

          document.querySelectorAll('.lfseo [data-target], .lfseo [data-target-decimal]').forEach(function(el) {
            counterObserver.observe(el);
          });

          // ---- Card Magnetic Effect ----
          document.querySelectorAll('.lfseo .card-magnetic').forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
              var rect = card.getBoundingClientRect();
              var x = (e.clientX - rect.left - rect.width / 2) / rect.width * 8;
              var y = (e.clientY - rect.top - rect.height / 2) / rect.height * 8;
              card.style.transform = 'perspective(800px) rotateX(' + (-y) + 'deg) rotateY(' + x + 'deg) translateZ(4px)';
            });
            card.addEventListener('mouseleave', function() {
              card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
              card.style.transition = 'transform 0.4s ease, box-shadow 0.3s ease';
            });
            card.addEventListener('mouseenter', function() {
              card.style.transition = 'transform 0.05s linear, box-shadow 0.3s ease';
            });
          });

          // ---- FAQ category sidebar active state ----
          var faqSections = document.querySelectorAll('.lfseo .faq-section');
          var catLinks = document.querySelectorAll('.lfseo .faq-cat-link');

          var faqObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var id = entry.target.id;
                catLinks.forEach(function(link) {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                  }
                });
              }
            });
          }, { threshold: 0.4 });

          faqSections.forEach(function(sec) { faqObserver.observe(sec); });

          // ---- FAQ smooth details animation ----
          document.querySelectorAll('.lfseo details').forEach(function(det) {
            det.addEventListener('toggle', function() {
              if (det.open) {
                var content = det.querySelector('.faq-answer');
                if (content) {
                  content.style.animation = 'none';
                  void content.offsetHeight;
                  content.style.animation = 'lfseo-fadeSlideIn 0.25s ease forwards';
                }
              }
            });
          });
        })();
      `}</Script>

      {/* Cursor glow element */}
      <div className="cursor-glow" aria-hidden="true" />
    </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
