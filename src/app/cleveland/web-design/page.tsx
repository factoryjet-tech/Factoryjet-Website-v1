import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/cleveland/web-design';

export const metadata: Metadata = {
  title: 'Cleveland Web Design Agency | Fast Next.js Sites | FactoryJet',
  description:
    'Cleveland web design agency. Custom Next.js websites, sub-second load speeds, mobile conversion flows, and full code ownership for Cleveland OH businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Cleveland Web Design Agency | Fast Next.js Sites | FactoryJet',
    description:
      'Cleveland web design agency. Custom Next.js websites, sub-second load speeds, and full code ownership for Cleveland OH businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Cleveland Web Design Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleveland Web Design Agency | Fast Next.js Sites | FactoryJet',
    description: 'Custom Next.js web design in Cleveland OH. 7-day launch and 100% full IP code ownership.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Next.js 15 & React',
  'TypeScript Enterprise',
  'Tailwind CSS',
  'Figma Design Systems',
  'Cloudflare Global Edge',
  'Stripe Payments',
  'Google Analytics 4',
  'PostgreSQL & Vercel',
];

const STAT_CARDS = [
  { num: '7 Days', title: 'Launch Delivery SLA', desc: 'From signed scope to live production deployment with zero agency delays.', icon: '⚡' },
  { num: '95+', title: 'Mobile Lighthouse Score', desc: 'Sub-second mobile loading speeds engineered for high conversion rates.', icon: '🚀' },
  { num: '500+', title: 'Websites Launched', desc: 'Custom web platforms delivered across healthcare, manufacturing, and B2B.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean Next.js repository, Figma files, and hosting configuration.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & Public Square',
    query: 'cleveland corporate law website',
    focus: 'Legal, Corporate Services & Commercial Real Estate',
    desc: 'Dense corporate center in central Cleveland. B2B buyers evaluate design polish, partner credentials, and sub-second page performance before picking up the phone.',
  },
  {
    corridor: 'University Circle & Health-Tech',
    query: 'medical specialist website cleveland',
    focus: 'Healthcare, Life Sciences & Specialty Clinics',
    desc: 'Anchored by the Cleveland Clinic and Case Western Reserve. Healthcare websites require HIPAA compliance awareness, intuitive patient booking, and clear provider profiles.',
  },
  {
    corridor: 'Independence, Solon & Manufacturing',
    query: 'manufacturing b2b website cleveland',
    focus: 'Industrial Equipment, Fabrication & Supply Chain',
    desc: 'Precision manufacturing hubs along Cuyahoga County. Technical capability matrices, downloadable spec sheets, and fast RFQ request forms drive corporate procurement.',
  },
  {
    corridor: 'Ohio City & Tremont Corridor',
    query: 'hospitality web design cleveland',
    focus: 'Hospitality, Dining, Breweries & Boutiques',
    desc: 'Fast-moving food and beverage scene along West 25th. Visual storytelling, live reservation embeds, and rapid mobile load times capture high-volume weekend dining foot traffic.',
  },
  {
    corridor: 'Lakewood & West Shore',
    query: 'local contractor web design cleveland',
    focus: 'Home Services, Contractors & Professional Practices',
    desc: 'High-density commercial artery along Detroit Avenue. Streamlined mobile quotes, verified customer reviews, and local service area landing pages capture residential demand.',
  },
  {
    corridor: 'Beachwood & Chagrin Highlands',
    query: 'wealth management web design beachwood',
    focus: 'Financial Advisory, Med Spas & Private Wealth',
    desc: 'Affluent eastern suburbs where high-ticket clients research executive credentials, private advisory services, and brand trust before initiating consultations.',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Bloated WordPress Sites That Crash and Fail Core Web Vitals',
    problem: 'Legacy themes crammed with 40 active plugins lead to slow page loads, mobile layout shifts, security vulnerabilities, and high bounce rates.',
    solution: 'We build bespoke Next.js and React web applications deployed to Cloudflare Edge CDN that load under 1 second with flawless 95+ Core Web Vitals scores.',
  },
  {
    num: '02',
    title: 'Eliminating 6-Month Agency Delivery Delays with Guaranteed 7-Day Sprints',
    problem: 'Traditional agencies take months of endless discovery meetings, bill by the hour, and stall your market launch while burning your marketing budget.',
    solution: 'FactoryJet operates on fixed-price, milestone-based sprints. We deliver your production-ready, fully responsive website in 7 days from kickoff.',
  },
  {
    num: '03',
    title: 'Retaining 100% Code and Asset Ownership with Zero CMS Platform Lock-Ins',
    problem: 'Many agencies trap clients inside proprietary website builders or charge expensive monthly maintenance fees just to make basic text and image edits.',
    solution: 'You retain full intellectual property and ownership of your Figma design system, Git repository, and headless CMS content layer from day one.',
  },
  {
    num: '04',
    title: 'Converting Mobile Traffic into Booked Consultations and Qualified Leads',
    problem: 'Websites that look decent on desktop often break on mobile phones, hiding phone numbers and burying contact forms under clumsy popups.',
    solution: 'We engineer mobile-first user journeys with persistent tap-to-call bars, streamlined lead capture forms, and frictionless conversion paths.',
  },
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Strategy & Brand Architecture',
    d: 'We establish your conversion goals, target customer personas, sitemap structure, and technical requirements on our kickoff call.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Figma Prototype & Design System',
    d: 'We craft high-fidelity desktop and mobile prototypes with bespoke typography, colors, and UI components for your direct approval.',
    icon: '🎨',
  },
  {
    n: '03',
    t: 'Next.js & Cloudflare Development',
    d: 'We code your site using clean, type-safe Next.js and React components with sub-second asset delivery on Cloudflare Global Edge.',
    icon: '⚙️',
  },
  {
    n: '04',
    t: 'Content, Schema & Tracking Integration',
    d: 'We integrate your copy, high-resolution photography, JSON-LD schema markup, and Google Analytics 4 conversion event tracking.',
    icon: '✍️',
  },
  {
    n: '05',
    t: 'Production Launch & Handover Session',
    d: 'We run pre-launch QA, connect your custom domain with zero downtime, and record a video training session for your team.',
    icon: '🚀',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'technical', label: 'Tech Stack & Speed' },
  { key: 'local', label: 'Cleveland Market' },
  { key: 'ownership', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does a custom website cost for a Cleveland business?',
    answer:
      'Our websites are delivered on transparent fixed-price milestones based on your specific requirements and page count. We provide an exact written quote and scope before any work begins, with no surprise add-ons or hidden hourly fees.',
  },
  {
    category: 'pricing',
    question: 'Can you really build and launch a custom website in 7 days?',
    answer:
      'Yes. Our 7-day delivery sprint is built on dedicated engineering workflows: discovery and Figma UI design in days 1 to 2, Next.js component development in days 3 to 5, and content population, SEO schema, and QA launch on days 6 and 7.',
  },
  {
    category: 'technical',
    question: 'Why do you build on Next.js instead of WordPress?',
    answer:
      'Next.js generates lightweight static pages that load in under 1 second on mobile devices, requires no fragile third-party plugins, has zero security vulnerabilities from outdated WordPress themes, and delivers superior Google Core Web Vitals rankings.',
  },
  {
    category: 'technical',
    question: 'How do you ensure our website passes Google Core Web Vitals?',
    answer:
      'We optimize image compression with modern AVIF/WebP formats, eliminate render-blocking JavaScript, implement CSS containment, and deploy assets globally via Cloudflare Edge CDN to achieve Lighthouse performance scores of 95+.',
  },
  {
    category: 'local',
    question: 'Do you build B2B websites for Cleveland manufacturers and industrial suppliers?',
    answer:
      'Yes. We build high-conversion B2B websites tailored for Cleveland manufacturers, precision machinists, and chemical suppliers, complete with downloadable spec sheets, technical capability matrices, and seamless RFQ inquiry forms.',
  },
  {
    category: 'local',
    question: 'Can you design websites for Cleveland healthcare and dental practices?',
    answer:
      'Yes. We build modern, HIPAA-aware websites for healthcare clinics, dental groups, and med spas across Greater Cleveland, featuring doctor bio directories, insurance plan listings, and frictionless appointment booking integrations.',
  },
  {
    category: 'ownership',
    question: 'Do we own the website code and design assets after launch?',
    answer:
      'Yes, 100%. You receive full intellectual property ownership of your Figma design system, clean GitHub repository, and Cloudflare hosting configuration. You are never locked into proprietary platforms or mandatory maintenance contracts.',
  },
  {
    category: 'ownership',
    question: 'What kind of support is included after the website goes live?',
    answer:
      'Every project includes a 30-day post-launch warranty covering any bug fixes, technical adjustments, and recorded video handover training to ensure your team is completely confident managing the site.',
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

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FactoryJet - Cleveland Web Design Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.4993,
    longitude: -81.6944,
  },
  areaServed: [
    { '@type': 'City', name: 'Cleveland' },
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Beachwood' },
    { '@type': 'City', name: 'Solon' },
    { '@type': 'City', name: 'Independence' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cleveland Web Design & Next.js Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Web Design, Frontend Engineering & Conversion Optimization',
  description:
    'Senior engineering-led custom Next.js web design, sub-second page performance, mobile conversion optimization, and full IP ownership for Cleveland businesses.',
  areaServed: { '@type': 'State', name: 'Ohio' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cleveland Web Design Agency | Fast Next.js Sites | FactoryJet',
  description: 'Custom Next.js websites, sub-second load speeds, and full code ownership for Cleveland OH businesses.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Cleveland', item: CANONICAL },
    { '@type': 'ListItem', position: 3, name: 'Web Design', item: CANONICAL },
  ],
};

export default function ClevelandWebDesignPage() {
  return (
    <>
      <script id="cle-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="cle-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="cle-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="cle-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="cle-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Cleveland Web Design &amp; Development</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Cleveland Web Design Agency for Growing Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Turn website visitors into paying clients with custom Next.js architecture, sub-second load speeds, and mobile conversion flows. 7-day delivery with 100% full IP code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#cle-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Cleveland Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/commerce/ecommerce-for-manufacturers-factory-floor.webp"
                  alt="Cleveland Ohio modern web design engineering and custom Next.js development"
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
              <div className="rv-ticker-label">Modern Frontend Engineering Stack</div>
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
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="FactoryJet senior frontend engineers building custom Next.js web solutions in Cleveland"
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
                  <span>Speed, Polish &amp; Conversion</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Websites Built for Cleveland&apos;s High-Value Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From global healthcare suppliers to precision manufacturers and law firms, Cleveland businesses need sites that project engineering authority and convert high-ticket decision-makers.
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
                  <ModalCTAButton label="Schedule Web Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. CLEVELAND DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="cle-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Cleveland Industry Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Web Design for Cleveland&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown law firms to University Circle medical practices and manufacturing hubs:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', color: '#8E8E9F' }}>
                      {d.query}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. CORE DRIVERS & PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Cleveland Companies Choose FactoryJet Web Design
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace outdated WordPress themes and bloated retainers with modern engineering:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Typical Agency Frustration:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Engineering Approach:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="web-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// CLEVELAND MODERN WEB ARCHITECTURE BLUEPRINT"
            title="High-Performance Frontend: From Code to Conversion"
            subtitle="Explore how custom Next.js components, Cloudflare Edge caching, structured JSON-LD schema, and conversion tracking work together seamlessly."
            legacySource="Bloated Monolithic CMS & Plugin Chains"
            targetStack="High-Speed Next.js & Cloudflare Edge Engine"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

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
                  <span>Step-by-Step Delivery</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 7-Day Sprint Delivery Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From discovery and Figma design to full Next.js development, QA testing, and live domain launch in 7 calendar days.
                </p>
                <ModalCTAButton label="Start Your Project" region="us" btnVariant="primary-dark" />
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

        {/* ── 08. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="CLEVELAND WEB DESIGN INTELLIGENCE"
          headline="Frequently Asked Questions About Web Design in Cleveland OH"
          lead="Direct, plain English answers to what Cleveland business owners and marketing leaders ask about website projects:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 09. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <WebDesignCityLinksUS currentCity="cleveland" />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; 7-Day Delivery</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Cleveland Business Website?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand goals. We will provide a comprehensive fixed-price proposal, clear timeline, and interactive Figma preview.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Quote" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
