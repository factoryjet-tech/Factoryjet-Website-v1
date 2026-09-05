import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/services/shopify-seo';

export const metadata: Metadata = {
  title: 'Shopify SEO Agency USA | Rank & Win AI | FactoryJet',
  description:
    'Shopify SEO agency for US brands. We fix duplicate URLs, optimize collection pages, boost Core Web Vitals, and win AI citations across Google and ChatGPT.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify SEO Agency USA | Rank & Win AI Citations | FactoryJet',
    description:
      'Shopify SEO agency for US brands. We fix duplicate URLs, optimize collection pages, boost Core Web Vitals, and win AI citations across Google and ChatGPT.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/seo/hero-seo.webp',
        width: 1200,
        height: 630,
        alt: 'Shopify SEO Technical Architecture and Rankings Dashboard',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify SEO Agency USA | Rank & Win AI Citations | FactoryJet',
    description:
      'Shopify SEO agency for US brands. Fix duplicate URLs, optimize collections, and earn AI engine citations.',
    images: ['https://factoryjet.com/images/us/services/seo/hero-seo.webp'],
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify SEO', url: CANONICAL },
];

const PARTNERS = [
  'Google Search Console.',
  'Ahrefs Enterprise.',
  'Semrush Rank Tracking.',
  'Screaming Frog Spider.',
  'Cloudflare Workers.',
  'Shopify Markets.',
  'Klaviyo Data Sync.',
  'Algolia InstantSearch.',
];

const STAT_CARDS = [
  {
    num: '+38%.',
    title: 'Organic Revenue Lift.',
    desc: 'Average revenue lift within 6 months. Driven by resolving duplicate URLs and optimizing collections.',
    icon: '📈',
  },
  {
    num: '0.00.',
    title: 'Duplicate URL Factor.',
    desc: 'Eliminates duplicate collection paths. Strict Liquid code removes pagination dilution.',
    icon: '🎯',
  },
  {
    num: 'Sub-1.2s.',
    title: 'Mobile LCP Speed.',
    desc: 'We prune third-party tracking apps. We remove render-blocking scripts to pass Core Web Vitals.',
    icon: '⚡',
  },
  {
    num: '100%.',
    title: 'AI Answer Citations.',
    desc: 'Structured JSON-LD schema graphs. Positions your catalog in Google AI Overviews and ChatGPT.',
    icon: '🤖',
  },
];

const ARCHITECTURE_PILLARS = [
  {
    layer: 'Pillar 1: Canonical Surgery & Duplicate URL Elimination.',
    tech: 'Liquid Template Code + Cloudflare Edge Rewrite Rules.',
    desc: 'Shopify natively duplicates products on collection paths. We fix Liquid code. Internal links point directly to primary product handles.',
    points: [
      'Removal of collection filters in Liquid code. Enforces single canonical product paths.',
      'Edge 301 redirect mapping. Cleans up historical tag filters, pagination parameters, and dead URLs.',
      'Search Console crawl budget optimization. Focuses crawlers on high-converting catalog pages.',
    ],
  },
  {
    layer: 'Pillar 2: Collection Page Content & Faceted Navigation.',
    tech: 'Shopify Online Store 2.0 Section Schemas + Metafields.',
    desc: 'Collection pages drive high-intent commercial searches. We transform thin product grids into buying guides with modular sections.',
    points: [
      'Dual-zone content layout. Introductory copy above the fold with detailed guides below the grid.',
      'Clean URL parameter rules. Prevents infinite crawl traps on variant filters and sort orders.',
      'Automated internal links. Connects parent categories to high-margin sub-collections.',
    ],
  },
  {
    layer: 'Pillar 3: Structured Data Graphs & Answer Engine Optimization.',
    tech: 'JSON-LD Schema Graphs + Semantic HTML5 Architecture.',
    desc: 'We build structured data graphs. Connects Product, Brand, and FAQ entities. Secures rich snippets and AI search citations.',
    points: [
      'Real-time price and stock schema. Embedded directly into server-rendered Liquid.',
      'Question-answer content pairs. Engineered specifically for Google AI Overviews and ChatGPT.',
      'BreadcrumbList schema. Aligned with site structure for rich search sitelinks.',
    ],
  },
  {
    layer: 'Pillar 4: Core Web Vitals & Speed Optimization.',
    tech: 'Asset Pipeline Modernization + App Script Rationalization.',
    desc: 'Page speed directly influences Google rankings and mobile conversions. We audit and remove render-blocking app bloat.',
    points: [
      'Third-party script audit. Removes orphaned JavaScript tags left behind by uninstalled apps.',
      'Critical CSS inlining. Modern WebP and AVIF compression on Shopify CDN.',
      'Server-side tracking via Cloudflare Workers. Reduces mobile browser load through Google Tag Manager.',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    factor: 'Primary SEO Focus.',
    factoryjet: 'Shopify code engineering, canonical surgery, and AEO citations.',
    generalist: 'Generic checklists, off-site guest posts, and blog filler.',
    apps: 'Automated meta tag templates and rigid sitemap generators.',
  },
  {
    factor: 'Duplicate URL Fixes.',
    factoryjet: 'Direct Liquid theme modifications eliminating duplicate links.',
    generalist: 'Surface-level canonical tag recommendations without code fixes.',
    apps: 'Cannot alter internal Liquid linking patterns within themes.',
  },
  {
    factor: 'Core Web Vitals Approach.',
    factoryjet: 'Senior developers audit code, remove unused apps, and inline CSS.',
    generalist: 'Suggests hiring a developer or installing another caching app.',
    apps: 'Adds another external JavaScript script that slows pages down.',
  },
  {
    factor: 'AI Search & Citation Strategy.',
    factoryjet: 'Deep JSON-LD graphs and structured Q&A for ChatGPT and Perplexity.',
    generalist: 'Old-school keyword density and repetitive long-tail blog posts.',
    apps: 'Basic JSON-LD output missing rich relational entity graphs.',
  },
  {
    factor: 'Contract & Pricing Terms.',
    factoryjet: 'Month-to-month retainers with dedicated senior engineers.',
    generalist: 'Mandatory 6 to 12 month lock-in contracts with junior staff.',
    apps: 'Monthly recurring app subscription fees with zero human support.',
  },
];

const SPRINT_ROADMAP = [
  {
    phase: 'Phase 1: Technical Crawl & Duplicate URL Audit.',
    timeline: 'Weeks 1 - 2.',
    desc: 'We crawl your store using Screaming Frog and Ahrefs. We catalog all duplicate URLs, canonical errors, and indexation leaks.',
    deliverables: [
      'Comprehensive Shopify technical audit covering all indexable templates.',
      'Inventory of duplicate collection-product URLs and parameter crawl traps.',
      'Core Web Vitals baseline report across mobile and desktop devices.',
      'Prioritized 90-day technical engineering roadmap with clear impact metrics.',
    ],
  },
  {
    phase: 'Phase 2: Liquid Canonical Surgery & Script Cleanup.',
    timeline: 'Weeks 3 - 4.',
    desc: 'We modify theme code directly. We remove duplicate links. We eliminate orphaned scripts from uninstalled apps.',
    deliverables: [
      'Liquid template updates pointing all links to canonical product handles.',
      'Cleanup of deprecated JavaScript files in theme.liquid and asset folders.',
      'Edge 301 redirect rules for outdated URL paths and broken backlinks.',
      'Google Search Console parameter handling and XML sitemap optimization.',
    ],
  },
  {
    phase: 'Phase 3: High-Intent Collection & Product Optimization.',
    timeline: 'Weeks 5 - 6.',
    desc: 'We optimize priority collection pages and high-volume products. We add query-matched content and structured buying guides.',
    deliverables: [
      'Rich editorial content blocks deployed above and below collection grids.',
      'Optimized product title tags, meta descriptions, and unique feature bullets.',
      'Internal linking matrix connecting top landing pages to category hubs.',
      'Faceted navigation rules preventing crawl waste on variant filter URLs.',
    ],
  },
  {
    phase: 'Phase 4: Enterprise Schema & Answer Engine Optimization.',
    timeline: 'Weeks 7 - 8.',
    desc: 'We deploy advanced JSON-LD structured data. We optimize content formatting so AI engines extract direct answers.',
    deliverables: [
      'Nested JSON-LD schema for Product, Offer, Brand, and BreadcrumbList.',
      'FAQPage schema on high-intent product and category landing pages.',
      'Question-answer formatting engineered for ChatGPT and Google AI Overviews.',
      'Rich snippet testing across Google Rich Results testing tools.',
    ],
  },
  {
    phase: 'Phase 5: Authority Link Building & Brand PR.',
    timeline: 'Weeks 9 - 10.',
    desc: 'We earn high-quality editorial backlinks and digital brand citations. We secure links from authoritative industry publications.',
    deliverables: [
      'Targeted digital PR outreach securing contextual editorial placements.',
      'High-authority brand mentions that validate trust for Google and AI engines.',
      'Competitor backlink gap analysis identifying easy acquisition wins.',
      'Disavow review and toxic link monitoring to protect domain equity.',
    ],
  },
  {
    phase: 'Phase 6: Shopify Markets & Global SEO.',
    timeline: 'Week 11.',
    desc: 'For international stores, we configure Shopify Markets. We set up automated hreflang tags and localized currency selectors.',
    deliverables: [
      'Automated hreflang XML sitemap and HTML tag configuration.',
      'Multi-currency and multi-language routing with geo-IP edge detection.',
      'International subfolder structure aligned with search best practices.',
      'Google Search Console international targeting property setup.',
    ],
  },
  {
    phase: 'Phase 7: Ongoing Monitoring & Conversion Sprints.',
    timeline: 'Ongoing Monthly.',
    desc: 'We track keyword positions, AI citations, and organic revenue. We continuously test and refine page templates for growth.',
    deliverables: [
      'Monthly executive ranking, organic traffic, and revenue performance reports.',
      'Ongoing keyword expansion targeting new commercial category searches.',
      'Continuous Core Web Vitals monitoring and speed patch deployments.',
      'Bi-weekly strategy call with founder and senior technical architect.',
    ],
  },
];

const FAQS = [
  {
    question: 'What is Shopify SEO?',
    answer: 'Shopify SEO ranks your store in Google. It wins citations in AI search engines. It fixes duplicate URLs and thin collections. It improves site speed for higher revenue.',
  },
  {
    question: 'Is Shopify good for SEO out of the box?',
    answer: 'Shopify handles basics like SSL and sitemaps cleanly. However, it creates duplicate URLs and ships thin collection templates. Our specialized service closes these gaps to maximize search traffic.',
  },
  {
    question: 'Why does Shopify create duplicate product URLs?',
    answer: 'Shopify serves products under both /products/ and /collections/*/products/ paths. This splits link authority across multiple URLs. We edit Liquid templates so all links point to canonical product paths.',
  },
  {
    question: 'Why should we hire a specialized Shopify SEO agency instead of a generalist?',
    answer: 'Generalist agencies follow generic checklists and miss platform quirks. We understand Liquid code, theme architecture, and app script bloat. We resolve the exact issues that hold Shopify stores back.',
  },
  {
    question: 'Do automated Shopify SEO apps solve my search ranking issues?',
    answer: 'No. Automated apps only edit basic meta tags. They cannot modify internal Liquid links, clean up app bloat, or write custom collection content. Professional SEO requires hands-on code engineering.',
  },
  {
    question: 'How do you fix Core Web Vitals on a Shopify store?',
    answer: 'We audit active and deprecated app scripts in theme.liquid. We remove orphaned tracking tags and inline critical CSS. We optimize images with WebP formats on Shopify CDN to hit sub-1.2s LCP.',
  },
  {
    question: 'How do you earn citations in Google AI Overviews and ChatGPT?',
    answer: 'We format collection and product pages with clear question-answer structures. We deploy rich JSON-LD schema graphs that AI models parse easily. This earns brand citations when buyers search product categories.',
  },
  {
    question: 'How do you optimize collection pages for commercial search queries?',
    answer: 'We add rich editorial content blocks above and below product grids. We create dedicated sub-collection landing pages for high-volume keywords. This gives search engines deep text to index.',
  },
  {
    question: 'How do you handle faceted navigation without wasting crawl budget?',
    answer: 'Filter parameters can generate thousands of thin, duplicate URLs. We implement canonical rules and robots directives on low-value filter combos. High-value filters become clean indexable sub-collections.',
  },
  {
    question: 'What happens to discontinued or out-of-stock product pages?',
    answer: 'We keep temporary out-of-stock items live with back-in-stock forms. For permanently retired products, we place 301 redirects to the closest collection. This preserves 100% of accumulated link equity.',
  },
  {
    question: 'How does Shopify structured data help search visibility?',
    answer: 'Structured data provides explicit product details to search engines. We embed JSON-LD graphs with live prices, stock levels, and ratings. This displays rich star snippets in Google search results.',
  },
  {
    question: 'How long does it take to see results from Shopify SEO?',
    answer: 'Technical code fixes show impact in 3 to 6 weeks as Google recrawls pages. Content updates and authority link building compound over 3 to 6 months. Most clients see significant traffic gains by month 4.',
  },
  {
    question: 'Do you require long-term annual contracts?',
    answer: 'No. All our Shopify SEO retainers operate on flexible month-to-month agreements. We earn your business every month through transparent deliverables and measurable revenue growth.',
  },
  {
    question: 'Can we start with a standalone Shopify SEO audit?',
    answer: 'Yes. We offer comprehensive one-time technical audits with 90-day engineering roadmaps. If you join a monthly retainer within 30 days, we credit your audit fee toward your first month.',
  },
  {
    question: 'How do you optimize product images for Google Images search?',
    answer: 'We configure descriptive hyphenated file names and contextual alt text. We define explicit image dimensions to stop layout shifts. Shopify CDN serves modern WebP and AVIF formats automatically.',
  },
  {
    question: 'How do you handle international SEO with Shopify Markets?',
    answer: 'We set up automated hreflang tags across all international domains. Search engines direct shoppers to localized currencies and languages. This avoids duplicate content penalties across regional stores.',
  },
  {
    question: 'How do you track and measure Shopify SEO success?',
    answer: 'We provide monthly dashboards showing keyword rankings, organic traffic, and revenue. We track Google Search Console index health and AI referral traffic so you see clear return on investment.',
  },
  {
    question: 'Who executes the SEO work on our account?',
    answer: 'All technical code changes and strategy are led by senior engineers under founder Bhavesh Barot. We never hand off your store to junior account managers. You get direct access to experienced specialists.',
  },
  {
    question: 'How does Shopify SEO differ from headless Next.js SEO?',
    answer: 'Liquid themes require code surgery within theme.liquid and section files. Headless Next.js stores handle routing and rendering on the server edge. Both benefit from our technical schema and content strategies.',
  },
  {
    question: 'Can you work alongside our in-house marketing team or developers?',
    answer: 'Yes. We frequently collaborate with internal teams. We can handle code implementation directly or supply detailed engineering tickets and content briefs for your developers to deploy.',
  },
  {
    question: 'How do you prevent theme updates from wiping out custom SEO code?',
    answer: 'We use professional Git workflows and the Shopify CLI. We document all custom snippets and section schemas in private repositories. Theme updates merge cleanly without losing custom optimizations.',
  },
  {
    question: 'What is the pricing model for your Shopify SEO retainers?',
    answer: 'We quote custom fixed prices based on your catalog size and technical scope. You get complete price certainty with no hourly overages. Every deliverable is mapped to a clear sprint schedule.',
  },
];

const shopifySeoPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify SEO Agency Services',
      description:
        'Technical Shopify SEO agency engineering services for US stores: duplicate URL elimination, collection page architecture, Core Web Vitals speed optimization, and AI answer engine citations.',
      provider: {
        '@type': 'Organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
      },
      areaServed: 'US',
      serviceType: 'Shopify SEO & Answer Engine Optimization',
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Shopify SEO Agency USA | Rank & Win AI Citations | FactoryJet',
      description:
        'Shopify SEO agency for US brands. We fix duplicate URLs, optimize collection pages, boost Core Web Vitals, and win AI citations across Google and ChatGPT.',
      datePublished: '2026-01-15',
      dateModified: PAGE_MODIFIED,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & Principal Technical Architect',
        url: 'https://factoryjet.com/about',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumbs`,
      itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `https://factoryjet.com${item.url}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ],
};

export default function ShopifySeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifySeoPageSchema) }}
      />
      <SiteHeader />

      <main className="pp-main">
        <div className="pp-container" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>

        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" />
            TECHNICAL SHOPIFY SEO &amp; AI CITATIONS.
          </div>
          <h1 className="pp-hero-title">
            Shopify SEO Agency USA: Rank Higher &amp; Win AI Citations.
          </h1>
          <p className="pp-hero-sub">
            Eliminate duplicate collection-product URLs, thin collection pages, and app bloat. We engineer custom Liquid code. We optimize category pages and build structured schema. Your store ranks in Google and wins AI citations.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Shopify SEO Hero Lead"
              region="us"
              submitLabel="Request Free Shopify SEO Audit →."
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#seo-architecture"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>📐</span> Explore Technical SEO Blueprint.
              </a>
              <ModalCTAButton
                label="Book Technical Strategy Call"
                className="pp-btn-secondary"
              />
            </div>
          </div>

          <div className="pp-partner-bar">
            {PARTNERS.map((p, i) => (
              <span key={i} className="pp-partner-tag">
                {p}
              </span>
            ))}
          </div>

          {/* Context-Aware Bespoke Hero Visual */}
          <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '1000px', margin: '2.5rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image
              src="/images/us/services/seo/hero-seo.webp"
              alt="Shopify SEO Technical Performance and Revenue Telemetry"
              width={1200}
              height={630}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* ANSWER-FIRST EXECUTIVE BRIEF */}
        <section className="pp-section" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="pp-container" style={{ maxWidth: '1080px' }}>
            <div className="pp-section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="pp-badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#f97316', border: '1px solid rgba(234, 88, 12, 0.3)' }}>
                EXECUTIVE BRIEF.
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Traditional SEO Fails on Shopify Stores.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  Most SEO agencies treat Shopify like a generic blog website. They write repetitive blog posts. They ignore technical flaws inside your Liquid templates.
                </p>
                <p>
                  Shopify serves products on two conflicting paths. These are root product paths and nested collection paths. This splits internal link equity in half. Crawlers waste crawl budget on duplicate links while rankings stall.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>FactoryJet approaches Shopify SEO as a technical engineering discipline.</strong> We modify your Liquid code directly to eliminate duplicate collection-product URLs. We enforce clean internal links. Ranking power channels directly to canonical pages.
                </p>
                <p>
                  We build modular section schemas. Thin collection grids become high-converting category guides. Our team cleans up bloated app scripts. Stores maintain fast Core Web Vitals. We embed rich JSON-LD schema graphs. AI search engines cite your products directly in search answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE TELEMETRY STATS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-grid-4">
              {STAT_CARDS.map((s, i) => (
                <div key={i} className="pp-card pp-stat-card">
                  <div className="pp-stat-icon">{s.icon}</div>
                  <div className="pp-stat-num">{s.num}</div>
                  <div className="pp-stat-title">{s.title}</div>
                  <p className="pp-stat-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-PILLAR TECHNICAL SEO ARCHITECTURE */}
        <section id="seo-architecture" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">ENGINEERING ARCHITECTURE.</span>
              <h2 className="pp-section-title">The 4 Pillars of High-Performance Shopify SEO.</h2>
              <p className="pp-section-sub">
                A technical blueprint. Resolves platform bottlenecks, expands collection rankings, and lifts organic revenue.
              </p>
            </div>

            <div className="pp-grid-2">
              {ARCHITECTURE_PILLARS.map((l, i) => (
                <div key={i} className="pp-card pp-arch-card">
                  <div className="pp-arch-layer">{l.layer}</div>
                  <div className="pp-arch-tech">{l.tech}</div>
                  <p className="pp-arch-desc">{l.desc}</p>
                  <ul className="pp-arch-points">
                    {l.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDITORIAL DEEP DIVE: DUPLICATE URL SURGERY */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">CODE-LEVEL ARCHITECTURE.</span>
              <h2 className="pp-section-title">The Mechanics of Shopify Duplicate URLs and Liquid Surgery.</h2>
              <p className="pp-section-sub">
                Why canonical tags fail on duplicate links. How direct code changes restore ranking authority.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Shopify themes generate duplicate URLs by default. When buyers click collection products, themes link to nested paths. For example, stores serve products under collection URLs. At the same time, primary versions live at root product paths.
              </p>
              <p>
                Shopify attempts to solve this with canonical tags in the header. However, Google treats canonical tags as suggestions, not commands. Internal links on collection grids point to nested URLs. Google crawlers get mixed signals. Crawlers split ranking power between both paths. As a result, neither page builds full authority.
              </p>
              <p>
                FactoryJet performs direct code surgery inside Liquid templates. We edit collection grid files and product cards. We strip out the collection URL filter. Every internal link points directly to the root product path. Crawlers discover only clean canonical URLs. Your product pages build authority and climb search rankings quickly.
              </p>
            </div>
          </div>
        </section>

        {/* EDITORIAL DEEP DIVE: ANSWER ENGINE OPTIMIZATION */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">ANSWER ENGINE OPTIMIZATION.</span>
              <h2 className="pp-section-title">Winning Brand Real Estate in Google AI Overviews and ChatGPT.</h2>
              <p className="pp-section-sub">
                How modern buyers use AI to discover products. How structured entities guarantee brand citations.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Search behavior is shifting toward conversational AI assistants. Shoppers ask ChatGPT and Perplexity for product advice. Google AI Overviews delivers direct recommendations. These tools do not rely on traditional keyword counts. Instead, they extract verified entities from knowledge graphs. Authoritative content earns direct citations.
              </p>
              <p>
                We build rich JSON-LD schema graphs directly into your Shopify theme. We link Product schemas with Brand data. We add AggregateOffer details and merchant reviews. We structure product specifications into clear tabular data. This allows AI engines to parse product attributes with high confidence.
              </p>
              <p>
                We also craft clear question-answer content blocks across your category pages. AI crawlers evaluate your site. They find direct answers to buyer questions. Your brand gets cited as an authoritative source. AI search responses highlight your products. This drives high-intent referral traffic that converts into paying customers.
              </p>
            </div>
          </div>
        </section>

        {/* EDITORIAL DEEP DIVE: COLLECTION PAGE ARCHITECTURE */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">COLLECTION ARCHITECTURE.</span>
              <h2 className="pp-section-title">Turning Thin Collection Grids into Revenue-Generating Hubs.</h2>
              <p className="pp-section-sub">
                How dual-zone content layouts work. Automated sub-collection hubs rank commercial queries.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Collection pages generate over 70% of non-brand search revenue. Yet default Shopify themes show collection pages as simple product grids. They include zero helpful text. Search crawlers view these thin pages as low value. Stores struggle to rank against major retailers.
              </p>
              <p>
                We build a dual-zone content layout using section schemas. We place concise introductory copy above the fold. Shoppers see key product benefits right away. We place buying guides below the grid. Sizing tips and FAQs provide deep context.
              </p>
              <p>
                This layout provides deep text for search engines. It keeps product cards visible on mobile screens. We also build internal linking hubs connecting parent collections to sub-categories. This internal link flow lifts rankings across your entire catalog.
              </p>
            </div>
          </div>
        </section>

        
        {/* EDITORIAL DEEP DIVE: CORE WEB VITALS & TECHNICAL INFRASTRUCTURE */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">PERFORMANCE ENGINEERING.</span>
              <h2 className="pp-section-title">Core Web Vitals Engineering and App Bloat Removal.</h2>
              <p className="pp-section-sub">
                How our developers eliminate render-blocking JavaScript. Stores hit sub-1.2 second mobile page speeds.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Mobile speed directly drives search rankings and user conversions. Over time, stores accumulate dozens of marketing apps. Each app injects external JavaScript tags into your theme layout. Even when apps are uninstalled, residual scripts remain in theme code.
              </p>
              <p>
                Our engineering team conducts line-by-line theme audits. We identify and remove orphaned script tags. We replace third-party apps with native Liquid. Clean JavaScript runs without bloat. We inline critical above-the-fold CSS styles directly in document headers.
              </p>
              <p>
                We also optimize product media delivery across Shopify CDN. Images use modern WebP and AVIF formats with responsive srcset rules. Browsers download exact image sizes. Pages load fast on every screen. Your store achieves sub-1.2 second LCP and perfect mobile stability.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI CALCULATOR */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">ORGANIC GROWTH MODELING.</span>
              <h2 className="pp-section-title">Calculate Your Organic Revenue Potential.</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate your direct revenue gains. Calculate lift from fixing duplicate URLs and speeding up mobile page loads.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">HEAD-TO-HEAD COMPARISON.</span>
              <h2 className="pp-section-title">FactoryJet Technical SEO vs. Generalist Agencies vs. Apps.</h2>
              <p className="pp-section-sub">
                An objective breakdown. Compares code-level engineering against checklist agencies and apps.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria.</th>
                    <th style={{ color: '#f97316' }}>FactoryJet Technical SEO.</th>
                    <th>Traditional SEO Agency.</th>
                    <th>Automated Shopify SEO Apps.</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((r, i) => (
                    <tr key={i}>
                      <td className="pp-table-factor">{r.factor}</td>
                      <td className="pp-table-headless">{r.factoryjet}</td>
                      <td className="pp-table-liquid">{r.generalist}</td>
                      <td className="pp-table-hydrogen">{r.apps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7-PHASE SPRINT ROADMAP */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SPRINT METHODOLOGY.</span>
              <h2 className="pp-section-title">The 90-Day Shopify SEO Engineering Sprint Roadmap.</h2>
              <p className="pp-section-sub">
                A milestone-driven roadmap. Focused on rapid technical wins and authority building.
              </p>
            </div>

            <div className="pp-roadmap-grid">
              {SPRINT_ROADMAP.map((m, i) => (
                <div key={i} className="pp-card pp-roadmap-card">
                  <div className="pp-roadmap-header">
                    <span className="pp-roadmap-phase">{m.phase}</span>
                    <span className="pp-roadmap-time">{m.timeline}</span>
                  </div>
                  <p className="pp-roadmap-desc">{m.desc}</p>
                  <div className="pp-roadmap-deliv-title">Sprint Deliverables:</div>
                  <ul className="pp-roadmap-delivs">
                    {m.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE 22 PAA FAQS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <FAQ
              headline="Frequently Asked Questions"
              lead="Transparent answers to the most critical technical, content, and commercial Shopify SEO questions."
              items={FAQS}
            />
          </div>
        </section>

        {/* AUTHOR CARD */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '850px' }}>
            <AuthorCard variant="dark" />
          </div>
        </section>

        {/* US REGIONAL SILO LINKS */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container">
            <div className="pp-section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="pp-badge">US REGIONAL COVERAGE.</span>
              <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>
                Local E-Commerce SEO Teams Serving Key US Markets.
              </h2>
            </div>
            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
