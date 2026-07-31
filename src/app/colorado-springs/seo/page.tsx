import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import './colorado-springs-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/colorado-springs/seo — "Pikes Peak" Colorado Springs local-SEO city page.
   Built 2026-06-14. Layout: split hero with real photo + glass chips, stats
   bento, industries bento, dark landscape section, neighborhood chips scroll,
   5-step process, team dark section, sidebar FAQ, orange final CTA.
   Scoped .cosseo. SiteHeader/SiteFooter. No pricing. CTA = Calendly.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/colorado-springs/seo';

export const metadata: Metadata = {
  title: 'Colorado Springs SEO Company | Local SEO | FactoryJet',
  description:
    'Colorado Springs SEO company for aerospace, military, home services, and local businesses. Map Pack dominance, neighborhood targeting, and 10 years of precision SEO. Free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Colorado Springs SEO Company | Local SEO | FactoryJet',
    description:
      'Colorado Springs SEO company for aerospace, military, home services, and local businesses. Map Pack dominance, neighborhood targeting, and 10 years of precision SEO. Free audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Springs SEO Company | Local SEO in Colorado Springs, CO',
    description:
      'Colorado Springs SEO company for aerospace, military, home services, and local businesses. Map Pack dominance, neighborhood targeting, and 10 years of precision SEO. Free audit.',
    images: ['https://factoryjet.com/images/us/colorado-springs/seo/hero.webp'],
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

/* FAQ data — FAQPage schema below is generated FROM this array via .flatMap()
   so the visible FAQ section and the structured data can never drift apart. */
type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'faq-basics',
    label: 'COS SEO Basics',
    items: [
      {
        q: 'Is SEO actually worth it in Colorado Springs?',
        a: 'Yes, and the market makes it more valuable than most mid-size cities. The combination of military, aerospace, healthcare, and a fast-growing population creates sustained local search demand across almost every service category. If buyers are searching for what you sell, SEO is the highest ROI channel you have.',
      },
      {
        q: 'How is Colorado Springs SEO different from Denver SEO?',
        a: 'Colorado Springs has distinct audience segments that Denver does not. Military-adjacent services, aerospace B2B, and defense contractor procurement searches are COS-specific. Ranking in this market requires understanding the local economy, not just applying a generic local SEO playbook built for a retail-heavy city.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Technical fixes and GBP optimization can move rankings within 30 to 60 days. Content-driven ranking improvements for competitive terms typically show meaningful movement at the 90-day mark, with compounding gains through month six. We show you exactly where you stand every month.',
      },
      {
        q: 'Do I need a local Colorado Springs address to rank?',
        a: 'For Google Business Profile and Map Pack rankings, yes. You need a verifiable local address in the service area. For organic search, your domain authority, content quality, and local link profile matter far more than your registered business address.',
      },
    ],
  },
  {
    id: 'faq-rankings',
    label: 'Local Rankings + Map Pack',
    items: [
      {
        q: 'What is the Map Pack and why does it matter?',
        a: 'The Map Pack is the block of three local business listings that appears at the top of Google search results for local intent queries. It is usually shown above all organic results and gets a disproportionate share of clicks. For service businesses in Colorado Springs, getting into the Map Pack for your primary service is often worth more than ranking organically.',
      },
      {
        q: "How do you get a business into Google's Map Pack?",
        a: 'The core factors are: a fully optimized Google Business Profile, citation consistency across major directories, review velocity and sentiment, proximity to the searcher, and on-page relevance signals from your website. We optimize all of these systematically, not just the easy checkbox items.',
      },
      {
        q: 'Can I rank in multiple COS neighborhoods at once?',
        a: 'Yes. With dedicated neighborhood landing pages, proper internal linking, and location-specific content, you can rank for area-specific searches across Briargate, Powers Corridor, Rockrimmon, and other neighborhoods simultaneously. This is often the highest-leverage work for service businesses.',
      },
      {
        q: 'My competitor is outranking me even though I have better reviews. Why?',
        a: 'Reviews are one factor. Google also weighs domain authority, backlink profile, GBP completeness, citation volume, content relevance, and website technical health. A competitor with weaker reviews can outrank you if their technical and content signals are stronger. A proper audit usually identifies the specific gap within a few hours.',
      },
    ],
  },
  {
    id: 'faq-industries',
    label: 'Industries',
    items: [
      {
        q: 'Can you do SEO for defense contractors and aerospace companies?',
        a: 'Yes. We have experience building content strategies for technically complex B2B industries. Defense and aerospace SEO is fundamentally about long-tail informational content that builds authority with procurement teams and facility managers. It requires writers who understand the sector, not generalists who will summarize Wikipedia articles.',
      },
      {
        q: 'We serve military families near Fort Carson. Can you help with that?',
        a: 'Absolutely. Military community SEO has a specific rhythm. PCS season drives demand spikes in housing, moving, childcare, and services. We build content calendars and landing pages that align with military move cycles, not just general seasonal trends.',
      },
      {
        q: 'Do you work with home service companies (HVAC, plumbing, roofing)?',
        a: 'Home services is one of our highest-volume categories in Colorado Springs. The neighborhood-level page strategy we use for Briargate, Woodmen Road, and Powers Corridor has produced consistent Map Pack placements for HVAC and plumbing clients.',
      },
      {
        q: 'We are a tourism-related business near Pikes Peak. What should we prioritize?',
        a: 'For Pikes Peak and Garden of the Gods-adjacent businesses, the priority is seasonal content, voice search optimization, and schema markup for events and attractions. Ranking for "things to do near Pikes Peak" and adjacent queries requires structured content that Google can pull into its AI-generated answers at the top of search results.',
      },
    ],
  },
  {
    id: 'faq-content',
    label: 'Content + Keywords',
    items: [
      {
        q: 'What keywords should a Colorado Springs business be targeting?',
        a: 'It depends entirely on your service, your margins, and your geographic coverage. The keyword strategy starts with identifying the highest-intent searches in your category, then layering in neighborhood terms, comparison queries, and FAQ content that captures mid-funnel buyers. We do this analysis in week one before writing a single word.',
      },
      {
        q: 'Is AI-generated content OK to use for SEO?',
        a: "AI-generated content without human expertise layered in is a signal risk. Google's E-E-A-T standards reward first-hand experience and genuine expertise. We use AI tools to accelerate research and drafting, but every piece of content is reviewed, edited, and enriched by humans who understand your industry and your market.",
      },
      {
        q: 'How many blog posts or landing pages do we need?',
        a: 'Quality over volume, always. A single well-researched, properly optimized neighborhood page outperforms five thin city-level pages. We build a content map based on keyword opportunity and competitive gaps, then prioritize based on potential traffic value, not arbitrary monthly post counts.',
      },
      {
        q: 'Should I build separate pages for each neighborhood?',
        a: 'For service businesses with a physical service area in Colorado Springs, yes. Neighborhood pages that go beyond just swapping the city name, that include local references, relevant search intent, and neighborhood-specific content, consistently outperform generic city-level pages in local search.',
      },
    ],
  },
  {
    id: 'faq-working',
    label: 'Working with FactoryJet',
    items: [
      {
        q: 'How does engagement work and what does it cost?',
        a: 'Scope depends on your industry, how many neighborhoods and service areas to target, your current domain authority, and how competitive your specific keywords are. Book a free 30-minute audit call to scope the project together. We will pull your current rankings, show you your actual competitors, and give you a clear picture of what it will take.',
      },
      {
        q: 'What does the first week look like?',
        a: 'Week one is a full competitive audit. We map your keyword gaps against your top three local competitors, assess your technical health, review your GBP setup, and deliver a prioritized action plan before we write a single page. You know exactly what we are doing and why before we start producing anything.',
      },
      {
        q: 'Do I need to be available for regular calls?',
        a: 'We keep it light. A monthly strategy call plus async updates via email. You do not need to manage us closely. We document everything and flag you when we need a decision or information only you can provide.',
      },
      {
        q: 'What happens if we are not seeing results in three months?',
        a: 'We do a full diagnostic. If rankings are not moving within 90 days on the pages we have optimized, we identify exactly why and adjust the strategy. SEO is not always linear, but lack of progress always has a diagnosable cause. We find it and fix it rather than just sending a report and moving on.',
      },
      {
        q: 'Are you based in Colorado Springs?',
        a: 'We are not based in Colorado Springs, and we are transparent about that. What we bring is a dedicated national team with deep local market research, category expertise, and the production capacity to move faster than any local agency. We have ranked businesses in specialized local markets across the US and we know what it takes in competitive metros.',
      },
      {
        q: 'Can you work alongside our existing marketing team?',
        a: 'Yes. We integrate well with in-house marketing teams. If you have existing content, brand guidelines, or paid search running alongside SEO, we coordinate so that everything reinforces each other rather than working in silos.',
      },
    ],
  },
];

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
      name: 'Local SEO Services in Colorado Springs, CO',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: {
        '@type': 'City',
        name: 'Colorado Springs',
        containedInPlace: { '@type': 'State', name: 'Colorado' },
      },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Colorado Springs', item: 'https://factoryjet.com/colorado-springs' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Colorado Springs SEO Company | Local SEO Services in Colorado Springs, CO',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhaveshbarot/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_GROUPS.flatMap((g) =>
        g.items.map((it) => ({
          '@type': 'Question' as const,
          name: it.q,
          acceptedAnswer: { '@type': 'Answer' as const, text: it.a },
        }))
      ),
    },
  ],
};

export default function ColoradoSpringsSEOPage() {
  return (
    <>
      <SiteHeader />

      <div className="cosseo">
        <div id="cursorGlow" className="cursor-glow" aria-hidden="true"></div>

        {/* ===== HERO ===== */}
        <section className="hero-section">
          <div className="hero-grid">
            {/* LEFT */}
            <div className="hero-left">
              <span className="eyebrow reveal">Colorado Springs SEO Company</span>
              <h1 className="hero-h1 reveal d1">
                Colorado Springs runs on{' '}
                <span className="g-text">precision.</span>
              </h1>

              <div className="hero-proof-chips" id="proofChips">
                <span className="proof-chip" id="chip1">
                  <span className="chip-dot" />
                  250+ Aerospace Companies -- COS Market
                </span>
                <span className="proof-chip" id="chip2">
                  <span className="chip-dot" />
                  4 Military Installations
                </span>
              </div>

              <p className="hero-sub reveal d2">
                From defense contractors in Briargate to restaurants in Old Colorado City, this market rewards businesses that show up exactly when buyers search. We make sure that is you.
              </p>

              <HeroInlineForm region="us" source="colorado_springs_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="hero-ctas reveal d3">
                <a href={CALENDLY} className="btn-ghost">Talk to the founder</a>
                <a href="#process" className="btn-ghost">
                  See Local Results
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              <div className="hero-trust reveal d4">
                <span>500+ businesses ranked</span>
                <span className="hero-trust-dot" />
                <span>10 years of SEO expertise</span>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="hero-right">
              <div className="hero-img-wrap">
                <Image
                  src="/images/us/colorado-springs/seo/hero.webp"
                  alt="Aerial view of Colorado Springs with Pikes Peak at sunset"
                  className="hero-img"
                  width={800}
                  height={600}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>

              {/* Glass floating chips */}
              <div className="hero-glass-chips">
                <div className="glass-chip gc1" id="gc1">
                  <div className="gc-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div>Home Services Briargate</div>
                    <div className="gc-label">#1 local result</div>
                  </div>
                </div>
                <div className="glass-chip gc2" id="gc2">
                  <div className="gc-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div>HVAC Fort Carson Area</div>
                    <div className="gc-label">Map Pack</div>
                  </div>
                </div>
                <div className="glass-chip gc3" id="gc3">
                  <div className="gc-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div>Defense Contractor COS</div>
                    <div className="gc-label">Page 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOCAL MARKET STATS ===== */}
        <section className="stats-section">
          <div className="wrap">
            <div className="stats-headline">
              <span className="eyebrow reveal">By The Numbers</span>
              <h2 className="reveal d1">The Colorado Springs market by the numbers.</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card card-hover reveal">
                <div className="stat-num">
                  <span className="stat-counter" data-target="500" data-suffix="K+">0K+</span>
                </div>
                <div className="stat-label">City population -- 2nd largest in Colorado</div>
              </div>
              <div className="stat-card card-hover reveal d1">
                <div className="stat-num">
                  <span className="stat-counter" data-target="250" data-suffix="+">0+</span>
                </div>
                <div className="stat-label">Aerospace and defense companies in the metro</div>
              </div>
              <div className="stat-card card-hover reveal d2">
                <div className="stat-num">
                  <span className="stat-counter" data-target="4" data-suffix="">0</span>
                </div>
                <div className="stat-label">US military installations -- Peterson, Schriever, Carson, Air Force Academy</div>
              </div>
              <div className="stat-card card-hover reveal d3">
                <div className="stat-num">
                  $<span className="stat-counter" data-target="130" data-suffix="K">0K</span>
                </div>
                <div className="stat-label">Average aerospace sector wage -- the highest-intent B2B buyers in the market</div>
              </div>
            </div>

            <div className="stats-note reveal">
              This is not a typical regional market. The defense and aerospace sector alone generates B2B demand that most local agencies do not know how to capture. The buyers are specific, the search terms are technical, and the content has to earn their trust.
            </div>
          </div>
        </section>

        {/* ===== INDUSTRIES BENTO ===== */}
        <section className="industries-section">
          <div className="wrap">
            <span className="eyebrow reveal">Industry SEO</span>
            <h2 className="reveal d1">Every Colorado Springs industry searches differently. We rank for all of them.</h2>

            <div className="bento-grid">
              {/* Large dark tile: Aerospace */}
              <div className="bento-card bc-dark card-hover reveal">
                <span className="b-eyebrow">Aerospace + Defense</span>
                <h3>High-value B2B searches that require technical authority.</h3>
                <p style={{ marginTop: '14px' }}>
                  &quot;Defense contractor facility management COS&quot; pulls decision-makers with real budgets. Ranking here requires topic depth, E-E-A-T authorship, and technical content that generic agencies cannot produce. We build it.
                </p>
              </div>

              {/* Large orange tile: Military */}
              <div className="bento-card bc-orange card-hover reveal d1">
                <span className="b-eyebrow">Military + Gov Services</span>
                <h3>Four bases mean constant PCS demand. That requires hyper-local targeting.</h3>
                <p style={{ marginTop: '14px' }}>
                  Peterson Space Force Base. Schriever. Fort Carson. The Air Force Academy. Service providers near each installation compete for a rotating audience of military families who need to make decisions fast. Location-specific pages win this.
                </p>
              </div>

              {/* Regular tiles */}
              <div className="bento-card bc-lav card-hover reveal d2">
                <h3>Healthcare</h3>
                <p style={{ color: 'var(--n700)' }}>
                  UCHealth and Centura dominate. Private practices and specialists compete for &quot;near me&quot; intent queries. That is a winnable game with the right content and citation strategy.
                </p>
              </div>

              <div className="bento-card bc-green card-hover reveal d1">
                <h3>Home Services</h3>
                <p style={{ color: 'var(--n700)' }}>
                  High competition, high volume. HVAC, plumbing, roofing. Neighborhood-level pages targeting Briargate, Rockrimmon, and Powers Corridor are the differentiator that separates top results from page three.
                </p>
              </div>

              <div className="bento-card bc-peach card-hover reveal d2">
                <h3>Tourism + Hospitality</h3>
                <p style={{ color: 'var(--n700)' }}>
                  5 million visitors per year. Garden of the Gods. Pikes Peak. The Air Force Academy. Seasonal SEO and voice search optimization are not optional for businesses in this segment.
                </p>
              </div>

              <div className="bento-card bc-paper card-hover reveal d3">
                <h3>Real Estate</h3>
                <p style={{ color: 'var(--n600)' }}>
                  Military PCS moves create predictable demand spikes. Ranking for &quot;homes near Fort Carson&quot; captures buyers who have 30 days to close. Timing and hyper-local targeting matter more here than almost anywhere else.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEARCH LANDSCAPE ===== */}
        <section className="landscape-section">
          <div className="wrap">
            <span className="eyebrow-d reveal">Competitive Landscape</span>
            <h2 className="reveal d1">Your competitors have a head start. Here is how to close the gap.</h2>

            <div style={{ height: '32px' }} />

            <p className="landscape-opener reveal">
              Elite SEO Consulting and Intero Digital have deep roots in Colorado Springs. We are not pretending local competition does not exist.
            </p>

            <div className="landscape-pivot reveal d1">
              What we bring that local agencies cannot: a dedicated national team running competitive gap analysis, content production, and technical SEO in parallel. Not one person juggling all three.
            </div>

            <div className="dark-cards-grid">
              <div className="dark-card reveal">
                <div className="dark-card-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>Competitor Intelligence</h3>
                <p>
                  Full keyword gap analysis on your top 3 local competitors. Not just head terms. The long-tail neighborhood and intent keywords they rank for that you are currently invisible on. Delivered in week one.
                </p>
              </div>
              <div className="dark-card reveal d1">
                <div className="dark-card-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Production Speed</h3>
                <p>
                  7-day campaign launch. Most Colorado Springs agencies spend four to six weeks on onboarding before touching your rankings. We start with your most valuable pages on day one and build from there.
                </p>
              </div>
              <div className="dark-card reveal d2">
                <div className="dark-card-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>E-E-A-T Standards</h3>
                <p>
                  Every page written to Google&apos;s highest quality standard. Expertise, experience, authoritativeness, trustworthiness. These are the signals that determine who wins competitive local markets like COS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEIGHBORHOODS ===== */}
        <section className="neighborhoods-section">
          <div className="wrap">
            <span className="eyebrow reveal">Neighborhood SEO</span>
            <h2 className="reveal d1">Your customers search by neighborhood. We target every one.</h2>
            <p className="lead reveal d2">
              &quot;Near me&quot; searches have grown 200% in three years. Ranking for &quot;Colorado Springs HVAC company&quot; is good. Ranking for &quot;HVAC repair Briargate&quot; is better and less competitive.
            </p>

            <div className="chips-scroll" id="chipsScroll">
              <span className="n-chip">Downtown COS</span>
              <span className="n-chip">Broadmoor</span>
              <span className="n-chip">Briargate</span>
              <span className="n-chip">Old Colorado City</span>
              <span className="n-chip">Manitou Springs</span>
              <span className="n-chip">Woodmen Road</span>
              <span className="n-chip">Fountain</span>
              <span className="n-chip">Black Forest</span>
              <span className="n-chip">Rockrimmon</span>
              <span className="n-chip">Northgate</span>
              <span className="n-chip">Chapel Hills</span>
              <span className="n-chip">Academy Blvd</span>
              <span className="n-chip">Powers Corridor</span>
              <span className="n-chip">Monument</span>
              <span className="n-chip">Security-Widefield</span>
              <span className="n-chip">Interquest</span>
            </div>

            <div className="neighborhoods-note reveal">
              We create dedicated landing pages for the neighborhoods where your revenue actually comes from. Not just the generic city term that every competitor is also chasing.
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="process-section" id="process">
          <div className="wrap">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="reveal d1">What a Colorado Springs SEO campaign actually looks like.</h2>

            <div className="process-steps">
              <div className="process-step reveal">
                <div className="step-num">1</div>
                <div>
                  <div className="step-week">Wk 1</div>
                  <div className="step-title">Competitive Audit</div>
                  <div className="step-desc">Keyword gaps, technical debt, local citation health, competitor positioning.</div>
                </div>
              </div>
              <div className="process-step reveal d1">
                <div className="step-num">2</div>
                <div>
                  <div className="step-week">Wk 1 - 2</div>
                  <div className="step-title">Technical Foundation</div>
                  <div className="step-desc">Core Web Vitals, schema markup, crawl coverage, site architecture clean-up.</div>
                </div>
              </div>
              <div className="process-step reveal d2">
                <div className="step-num">3</div>
                <div>
                  <div className="step-week">Wk 2 - 3</div>
                  <div className="step-title">GBP Optimization</div>
                  <div className="step-desc">Google Business Profile, Map Pack targeting, local citation builds for COS neighborhoods.</div>
                </div>
              </div>
              <div className="process-step reveal d3">
                <div className="step-num">4</div>
                <div>
                  <div className="step-week">Wk 2 - 8</div>
                  <div className="step-title">Content Production</div>
                  <div className="step-desc">Neighborhood pages, service pages, topical authority content. Written by humans, reviewed for E-E-A-T.</div>
                </div>
              </div>
              <div className="process-step reveal d4">
                <div className="step-num">5</div>
                <div>
                  <div className="step-week">Ongoing</div>
                  <div className="step-title">Authority Building</div>
                  <div className="step-desc">Link acquisition, digital PR, review velocity, and monthly ranking reports with clear attribution.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section className="team-section">
          <div className="wrap">
            <span className="eyebrow-d reveal">The Team</span>
            <h2 className="reveal d1">The SEO team Colorado Springs businesses hire when they are serious about growth.</h2>

            <div className="team-grid">
              <div className="team-img-wrap reveal">
                <Image
                  src="/images/us/colorado-springs/seo/team.webp"
                  alt="FactoryJet SEO team Colorado Springs"
                  width={600}
                  height={500}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="team-right reveal d1">
                <div className="founder-card">
                  <div className="founder-name">Bhavesh Barot</div>
                  <div className="founder-role">Founder, FactoryJet</div>
                  <p className="founder-quote">
                    &quot;Returns on your time. If your rankings are not moving within 90 days, we find out why and we fix it.&quot;
                  </p>
                </div>

                <div className="team-trust-chips">
                  <span className="trust-chip"><span className="tc-dot" />500+ businesses ranked</span>
                  <span className="trust-chip"><span className="tc-dot" />12+ years expertise</span>
                  <span className="trust-chip"><span className="tc-dot" />7-day launch guarantee</span>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14.5px', lineHeight: '1.65' }}>
                  Every campaign gets a dedicated strategist, a content writer with category expertise, and a technical SEO lead. Not a junior account manager relaying messages to a team you never meet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq-section">
          <div className="wrap">
            <span className="eyebrow reveal">FAQs</span>
            <h2 className="reveal d1">Questions Colorado Springs business owners ask us before they start.</h2>

            <div className="faq-layout">
              {/* Sidebar nav */}
              <nav className="faq-nav">
                {FAQ_GROUPS.map((g, i) => (
                  <a key={g.id} href={`#${g.id}`} className={i === 0 ? 'faq-nav-link active' : 'faq-nav-link'}>{g.label}</a>
                ))}
              </nav>

              {/* FAQ content */}
              <div className="faq-content">
                {FAQ_GROUPS.map((g) => (
                  <div className="faq-category reveal" id={g.id} key={g.id}>
                    <span className="faq-cat-label">{g.label}</span>
                    {g.items.map((it) => (
                      <details key={it.q}>
                        <summary>{it.q}</summary>
                        <div className="faq-answer">{it.a}</div>
                      </details>
                    ))}
                  </div>
                ))}
              </div>{/* /faq-content */}
            </div>{/* /faq-layout */}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="final-cta">
          <div className="wrap">
            <h2 className="reveal">See exactly who is outranking you in Colorado Springs.</h2>
            <p className="lead reveal d1">
              Free 30-minute audit. We will pull your Google positions for your top 10 keywords, show you your real competitors, and give you a clear action plan.
            </p>
            <a href={CALENDLY} className="btn-white reveal d2">
              Get My Free COS Audit
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <p style={{ marginTop: '28px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
              Also in Colorado Springs:{' '}
              <Link href="/services/web-design" style={{ color: 'rgba(255,255,255,0.8)' }}>web design</Link>
              {' '}and{' '}
              <Link href="/services/seo" style={{ color: 'rgba(255,255,255,0.8)' }}>US SEO services</Link>.
            </p>
          </div>
        </section>

      </div>{/* /cosseo */}

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />

      {/* ===== JSON-LD SCHEMA ===== */}
      <script
        id="schema-cos-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== ANIMATION JS ===== */}
      <Script id="cos-seo-animations" strategy="afterInteractive">{`
// 1. Cursor glow
(function() {
  var glow = document.getElementById('cursorGlow');
  if (glow) {
    document.addEventListener('mousemove', function(e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }
})();

// 2. IntersectionObserver for reveals
(function() {
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.cosseo .reveal').forEach(function(el) {
    revealObserver.observe(el);
  });
})();

// 3. Counter animation
function cosCountUp(el, target, suffix) {
  var parentEl = el.parentElement;
  var obsrv = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting) return;
    obsrv.disconnect();
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 1800, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      var val = Math.round(ease * target);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, { threshold: 0.5 });
  obsrv.observe(parentEl);
}

document.querySelectorAll('.cosseo .stat-counter').forEach(function(el) {
  var target = parseFloat(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  el.textContent = '0' + suffix;
  cosCountUp(el, target, suffix);
});

// 4. Parallax for hero image -- desktop only (mobile: kills perf + causes layout issues)
if (window.innerWidth > 768) {
  var heroImg = document.querySelector('.cosseo .hero-img');
  if (heroImg) {
    window.addEventListener('scroll', function() {
      heroImg.style.transform = 'translateY(' + (window.scrollY * 0.15) + 'px)';
    }, { passive: true });
  }
}

// 5. Hero proof chips stagger
(function() {
  var chip1 = document.getElementById('chip1');
  var chip2 = document.getElementById('chip2');
  setTimeout(function() { if (chip1) chip1.classList.add('show'); }, 600);
  setTimeout(function() { if (chip2) chip2.classList.add('show'); }, 850);
})();

// 6. Glass chips stagger
(function() {
  ['gc1','gc2','gc3'].forEach(function(id, i) {
    var el = document.getElementById(id);
    if (el) setTimeout(function() { el.classList.add('show'); }, 800 + i * 200);
  });
})();

// 7. Neighborhood chips horizontal scroll
(function() {
  var chipsScroll = document.getElementById('chipsScroll');
  if (chipsScroll) {
    chipsScroll.addEventListener('wheel', function(e) {
      e.preventDefault();
      chipsScroll.scrollLeft += e.deltaY;
    }, { passive: false });
  }
})();

// 8. FAQ nav active state on scroll
(function() {
  var faqLinks = document.querySelectorAll('.cosseo .faq-nav-link');
  var faqCats = document.querySelectorAll('.cosseo .faq-category');
  if (faqCats.length > 0) {
    var faqScrollObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          faqLinks.forEach(function(link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });
    faqCats.forEach(function(cat) { faqScrollObserver.observe(cat); });
  }
})();

// 9. Prefers reduced motion check
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cosseo .reveal').forEach(function(el) {
      el.classList.add('revealed');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    document.querySelectorAll('.cosseo .proof-chip').forEach(function(el) { el.classList.add('show'); });
    document.querySelectorAll('.cosseo .glass-chip').forEach(function(el) { el.classList.add('show'); });
  }
})();
`}</Script>
    </>
  );
}
