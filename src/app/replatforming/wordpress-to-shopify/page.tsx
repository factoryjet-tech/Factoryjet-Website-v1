import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'WordPress to Shopify Migration Services | FactoryJet',
  description:
    'Migrate WordPress to Shopify without losing SEO. We transfer blogs, custom page layouts, and product catalogs with 301 redirects. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WordPress to Shopify Migration Services | FactoryJet',
    description:
      'Migrate WordPress to Shopify without losing SEO. We transfer blogs, custom page layouts, and product catalogs with 301 redirects.',
    url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'WordPress to Shopify Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress to Shopify Migration Services | FactoryJet',
    description: 'Migrate WordPress to Shopify without downtime or ranking loss.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify' },
  { key: 'content', label: 'Blog & Content Migration' },
  { key: 'speed', label: 'Speed & Security' },
  { key: 'cost', label: 'Costs & Fixed Pricing' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are businesses migrating from WordPress to Shopify?',
    answer:
      'Businesses migrate to Shopify to eliminate the constant vulnerability of hacked WordPress plugins, unexpected server downtime, slow database queries, and high ongoing developer maintenance retainers. Shopify provides fully hosted 99.99% uptime, built-in PCI Level 1 security, and the world’s highest-converting 1-click Shop Pay checkout.',
  },
  {
    category: 'basics',
    question: 'Can we move our entire website or just our store to Shopify?',
    answer:
      'You can move your entire website including all pages, blog posts, case studies, and e-commerce catalog to Shopify. Shopify Online Store 2.0 provides visual drag-and-drop sections that make managing marketing pages and editorial content easier than WordPress.',
  },
  {
    category: 'content',
    question: 'What happens to our WordPress blog posts, authors, and categories?',
    answer:
      'We extract 100% of your historical blog posts, featured images, author attribution, publish dates, tags, and categories into Shopify Blog. We ensure HTML formatting, image alt text, and internal link structures remain intact.',
  },
  {
    category: 'content',
    question: 'How do you migrate WordPress pages built with Elementor, Divi, or WPBakery?',
    answer:
      'We rebuild your page layouts into native, high-speed Shopify Liquid sections. This eliminates heavy page builder scripts, drastically improves Core Web Vitals scores, and gives your marketing team an intuitive visual editor in Shopify admin.',
  },
  {
    category: 'speed',
    question: 'How much faster will our site load after moving from WordPress to Shopify?',
    answer:
      'Most sites see a 50% to 75% improvement in page load speed. Shopify runs on a global CDN that automatically optimizes images, caches static assets edge-side, and delivers server responses in under 100 milliseconds worldwide.',
  },
  {
    category: 'speed',
    question: 'Is Shopify more secure than self-hosted WordPress?',
    answer:
      'Yes. WordPress is the most targeted CMS in the world for malware, brute-force attacks, and plugin vulnerabilities. Shopify is a closed, enterprise-grade cloud platform with Level 1 PCI-DSS compliance, continuous security monitoring, and automated patch management.',
  },
  {
    category: 'cost',
    question: 'How much does a WordPress to Shopify migration cost?',
    answer:
      'Our fixed-price migrations typically range from $6,000 to $20,000 depending on total page count, blog article volume, custom design complexity, and third-party integrations. We provide an exact fixed quote after an initial technical audit.',
  },
  {
    category: 'cost',
    question: 'How much do businesses save by eliminating WordPress hosting and plugin licenses?',
    answer:
      'Companies typically save $3,000 to $15,000 per year by eliminating premium managed hosting (e.g. WP Engine, Kinsta), annual plugin renewal licenses (ACF Pro, Elementor, WP Rocket), security firewalls, and monthly developer maintenance retainers.',
  },
  {
    category: 'seo',
    question: 'Will our organic search traffic drop when moving from WordPress to Shopify?',
    answer:
      'Not with our migration protocol. WordPress and Shopify have different URL structures for blogs and pages. We crawl every indexed URL on your WordPress site, create an exhaustive 1-to-1 redirect map, and deploy single-hop 301 redirects to protect all search engine equity.',
  },
  {
    category: 'seo',
    question: 'How do you handle Yoast SEO, Rank Math, or All in One SEO metadata?',
    answer:
      'We extract all custom title tags, meta descriptions, canonical URLs, and schema markup stored in Yoast or Rank Math database fields and import them directly into Shopify native SEO fields and structured JSON-LD data.',
  },
  {
    category: 'cutover',
    question: 'How long does a WordPress to Shopify migration take?',
    answer:
      'Standard projects take between 2 to 4 weeks from audit to launch. We complete all data extraction, theme building, and redirect testing in a private staging environment before conducting DNS cutover.',
  },
  {
    category: 'cutover',
    question: 'How do you execute the DNS cutover with zero downtime?',
    answer:
      'We run a final delta sync of latest blog posts and customer data, configure SSL certificates in advance, point your domain DNS records to Shopify during off-peak hours, and verify live URL routing and forms instantly.',
  },
];

const STAT_CARDS = [
  { num: '75%', title: 'Faster Page Speed', desc: 'Replace heavy WordPress page builder scripts with clean, native Shopify sections.', icon: '⚡' },
  { num: 'Zero', title: 'Security Vulnerabilities', desc: 'No more malware scans, compromised PHP plugins, or manual security patching.', icon: '🛡️' },
  { num: '$8k+', title: 'Annual Savings', desc: 'Eliminate managed hosting bills, premium plugin fees, and emergency PHP fixes.', icon: '💰' },
  { num: '100%', title: 'SEO Equity Preserved', desc: 'Comprehensive 1-to-1 301 URL redirect mapping prevents traffic and ranking loss.', icon: '📈' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Constant Threat of WordPress Security Vulnerabilities',
    problem: 'Outdated PHP plugins, themes, and WordPress core files expose your business to malware, data breaches, and defacement.',
    solution: 'Shopify handles 100% of platform security, PCI compliance, and automated updates with enterprise-grade cloud protection.',
  },
  {
    num: '02',
    title: 'Eliminating Heavy Page Builder Bloat and Sluggish Load Times',
    problem: 'Plugins like Elementor, Divi, and WPBakery inject thousands of lines of messy CSS and JavaScript, slowing down your site.',
    solution: 'Shopify Online Store 2.0 uses clean, lightweight Liquid templates and global CDN caching to achieve sub-second page loads.',
  },
  {
    num: '03',
    title: 'Unlocking High-Converting Checkout for Monetization & Products',
    problem: 'WordPress shopping carts and checkout plugins are clunky, prone to database locking, and suffer from high abandonment.',
    solution: 'Shop Pay allows over 150 million shoppers to checkout in a single click, instantly increasing conversion rates.',
  },
  {
    num: '04',
    title: 'Giving Marketing Teams an Easy Visual Editor That Never Breaks',
    problem: 'Simple layout changes in WordPress often break site styling or require custom shortcode and CSS troubleshooting.',
    solution: 'Shopify drag-and-drop theme customizer allows your marketing team to build and launch new landing pages in minutes.',
  },
];

const PARTNERS = [
  'Shopify Partner',
  'Shop Pay Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Cloudflare Global CDN',
  'Judge.me Partner',
  'Yotpo Enterprise',
  'Google Cloud Infrastructure',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Content & Plugin Architecture Audit',
    d: 'We inventory all WordPress pages, blog articles, custom post types, and active plugins to design a clean Shopify architecture.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Sanitization & Extraction',
    d: 'We extract blog posts, author records, images, product data, and Yoast/Rank Math SEO metadata into clean Shopify formats.',
    icon: '🧹',
  },
  {
    n: '03',
    t: 'Custom Shopify 2.0 Theme Build',
    d: 'We build a modern, high-speed Shopify theme with modular drag-and-drop sections that match your brand identity perfectly.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & 301 Redirect Mapping',
    d: 'We crawl 100% of your indexed WordPress URLs to create single-hop 301 redirects, preserving all domain authority and rankings.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Launch',
    d: 'We perform a final delta sync of latest posts and data, switch DNS to Shopify during off-peak hours, and verify live routing.',
    icon: '🚀',
  },
];

const FAQ_SCHEMA = {
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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'WordPress to Shopify Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'CMS & E-Commerce Replatforming',
  description:
    'End-to-end migration from WordPress to Shopify with complete blog content preservation, theme modernization, and 100% SEO ranking protection.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WordPress to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'WordPress to Shopify Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating WordPress websites to Shopify.',
  url: 'https://factoryjet.com/replatforming/wordpress-to-shopify',
  dateModified: PAGE_MODIFIED,
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
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'WordPress to Shopify', item: 'https://factoryjet.com/replatforming/wordpress-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Technical Execution Model',
    factoryjet: 'Senior commerce systems architects write custom ETL scripts and Shopify Functions with 100% full IP ownership.',
    traditional: 'Junior agency generalists relying on generic third-party migration apps that cause database bloat.',
  },
  {
    label: 'SEO & 301 URL Preservation',
    factoryjet: '1-to-1 exact path mapping of 100% legacy URLs with single-hop 301 redirects and schema retention.',
    traditional: 'Wildcard home-page redirects that result in massive Google ranking and organic revenue drops.',
  },
  {
    label: 'ERP & Warehouse Synchronization',
    factoryjet: 'Direct GraphQL webhook pipeline syncing NetSuite, SAP, and Manhattan WMS in under 150ms.',
    traditional: 'Batch CSV file uploads or slow third-party middleware with frequent inventory sync failures.',
  },
  {
    label: 'Commercial Terms & Accountability',
    factoryjet: 'Transparent fixed-price milestone scope with guaranteed zero-downtime cutover SLA.',
    traditional: 'Open-ended hourly retainer billing with frequent scope creep and unexpected overages.',
  },
];

export default function WordPressToShopifyPage() {
  return (
    <>
      <script id="wordpress-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="wordpress-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="wordpress-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="wordpress-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="wordpress-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>WordPress to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from WordPress to Shopify with Zero Ranking Loss
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Eliminate vulnerable plugins, slow hosting servers, and ongoing maintenance. We transfer your blog content, pages, and products while boosting your speed and security.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Migration Audit" region="us" btnVariant="primary-dark" />
                  <a href="#architecture-blueprint" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/wordpress-hero-strategist.jpg"
                  alt="Digital commerce director reviewing WordPress to Shopify content migration roadmap"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; Ecosystem Partners</div>
              <div className="rv-ticker-line" />
            </div>
            
            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/replatforming/wordpress-team-coders.jpg"
                  alt="FactoryJet senior migration developers auditing WordPress content blocks and theme sections"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Discovery CTA Button */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>About FactoryJet</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Zero Downtime. Built for Growth.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We specialize in clean, reliable migrations from WordPress to Shopify. We preserve your entire blog archive, migrate your custom page layouts into high-speed Liquid sections, and eliminate server maintenance headaches forever.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions: Discovery Call CTA Button */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE WORDPRESS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The Direct Comparison</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Growing Brands Are Leaving WordPress
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                WordPress forces you into constant security maintenance and server management. Here is what changes when you upgrade to Shopify:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The WordPress Issue:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />
          </div>
        </section>

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// WORDPRESS TO SHOPIFY ARCHITECTURE BLUEPRINT"
            title="Enterprise Architecture: Replatforming WordPress to Shopify"
            subtitle="Extract WordPress blog content and pages, eliminate third-party PHP plugin dependencies, and unlock modern Shopify 2.0 sections with zero cutover downtime."
            legacySource="WordPress + PHP Plugins"
            targetStack="Shopify Modern Cloud Architecture"
            ctaLabel="Schedule WordPress Migration Scoping"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Side-by-Side Analysis</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                WordPress vs. Shopify
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare key operational, security, and performance factors side by side:
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>WordPress (Self-Hosted)</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Cloud Platform</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Security &amp; Maintenance</td>
                    <td>Frequent vulnerabilities requiring manual patching &amp; firewall plugins</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>100% managed security with Level 1 PCI-DSS compliance</td>
                    <td>Zero malware risk, no hacked plugins, and zero maintenance downtime</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Page Speed &amp; Hosting</td>
                    <td>Slow database queries and heavy page builder JavaScript</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Global multi-region CDN caching with sub-100ms response</td>
                    <td>Dramatically lower bounce rates and higher Google Core Web Vitals scores</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Commerce &amp; Monetization</td>
                    <td>Complex plugin setups with slow, multi-step checkouts</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native Shop Pay 1-click accelerated checkout</td>
                    <td>Higher checkout conversion with 150M+ pre-authenticated buyers</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Content Management</td>
                    <td>Fragile page builders that break when updating WordPress core</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Visual Online Store 2.0 drag-and-drop sections</td>
                    <td>Marketing launches new landing pages and blogs in minutes without code</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Total Cost of Ownership</td>
                    <td>High hosting fees, plugin subscriptions, and developer retainers</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Predictable SaaS pricing with zero hidden infrastructure costs</td>
                    <td>Saves thousands of dollars annually in developer and server expenses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 07. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
              
              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Our Working Process</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step Migration Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We execute every phase with strict engineering standards: content parity is verified before build, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your WordPress Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WORKING_STEPS.map((s) => (
                  <div key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 08. RITOVEX ENTERPRISE CLIENT PROOF & TESTIMONIALS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <span className="rv-badge-icon">⭐</span>
                <span>Verified Client Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Business Leaders Say About Our Migration
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from brand founders and marketing directors who moved from WordPress to Shopify:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We had over 400 blog posts and complex page layouts on WordPress. FactoryJet migrated everything into Shopify without a single broken link or lost Google ranking. Incredible work.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    LW
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Lauren Wright</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>VP of Content &amp; Brand, Lifestyle Media</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our WordPress site was infected with malware twice last year. Switching to Shopify eliminated all our security worries and saved us hundreds of dollars a month on server maintenance.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    MT
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Marcus Turner</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Founder, Direct-to-Consumer Brand</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our page speed jumped from 38 to 94 on mobile after moving to Shopify sections. Our organic traffic and e-commerce conversion rates both saw double-digit growth within weeks.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    AP
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Ashley Parker</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Head of Digital Marketing, Clean Beauty Brand</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        
        {/* ── AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Migration Partners: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare senior engineering replatforming against traditional design agency retainers before you commit:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off WordPress"
          lead="Everything marketing leaders, content managers, and founders ask when migrating to Shopify:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Migration Guarantee</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade WordPress to Shopify?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your WordPress site URL. We will audit your current theme, active plugins, and content architecture to deliver a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule WordPress Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
