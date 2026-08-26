import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/new-york/web-design';

export const metadata: Metadata = {
  title: 'New York Web Design Agency | Custom Next.js & UI/UX | FactoryJet',
  description:
    'New York web design agency. High-converting Next.js websites, sub-second load times, and custom Figma UI/UX for NYC enterprises and high-growth brands.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'New York Web Design Agency | Custom Next.js & UI/UX | FactoryJet',
    description:
      'New York web design agency. High-converting Next.js websites, sub-second load times, and custom Figma UI/UX for NYC enterprises and high-growth brands.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'New York Web Design Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Web Design Agency | Custom Next.js & UI/UX | FactoryJet',
    description: 'Custom Next.js web design and engineering in New York City. Sub-second performance, full IP code ownership, 7-day delivery.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Next.js 15 App Router',
  'React 19 Server Components',
  'TypeScript Enterprise',
  'Tailwind CSS & Vanilla Design Tokens',
  'Cloudflare Edge Network',
  'Sanity & Strapi Headless CMS',
  'Figma Design Systems',
  'Core Web Vitals SLA (95+)',
];

const STAT_CARDS = [
  { num: '7 Days', title: 'Average Turnaround Time', desc: 'From approved Figma UI/UX prototypes to fully tested, production-deployed Next.js code.', icon: '⚡' },
  { num: '98+', title: 'Lighthouse Performance Score', desc: 'Engineered for sub-second first contentful paint and flawless Core Web Vitals.', icon: '📈' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean GitHub repository, design assets, and deployment infrastructure.', icon: '🛡️' },
  { num: '0', title: 'WordPress Plugin Bloat', desc: 'Zero vulnerable third-party dependencies, slow PHP execution, or monthly maintenance bloat.', icon: '💎' },
];

const DISTRICTS = [
  {
    corridor: 'Silicon Alley & Flatiron Tech Corridor',
    query: 'venture tech enterprise saas web design flatiron nyc',
    focus: 'Enterprise SaaS, Venture Tech & High-Growth Startups',
    desc: 'The vibrant heart of Manhattan technology. Demands high-speed corporate flagships, interactive product demos, and sub-second edge hosting.',
  },
  {
    corridor: 'Midtown & Grand Central Corporate Core',
    query: 'corporate legal management consulting web design midtown manhattan',
    focus: 'Management Consulting, Corporate Law & Global Headquarters',
    desc: 'The executive business capital of New York. Demands refined editorial typography, practice group silos, and SOC2-compliant client portals.',
  },
  {
    corridor: 'Financial District & Wall Street',
    query: 'fintech private equity asset management web design fidi nyc',
    focus: 'FinTech, Private Equity, Hedge Funds & Capital Markets',
    desc: 'The global financial epicenter. Requires institutional data visualizations, real-time market API feeds, and uncompromising web security.',
  },
  {
    corridor: 'DUMBO & Brooklyn Navy Yard Creative Hub',
    query: 'creative agency media studio architecture web design dumbo',
    focus: 'Creative Agencies, Media Studios & Modern Architecture',
    desc: 'Brooklyn premier innovation and creative corridor. Features tactile portfolio showcases, bespoke interaction design, and fluid motion.',
  },
  {
    corridor: 'Long Island City & Queens Innovation Spine',
    query: 'advanced manufacturing biotech logistics web design lic queens',
    focus: 'Urban Manufacturing, Life Sciences & Commercial Logistics',
    desc: 'Rapidly expanding commercial and biotech hub. Features equipment specification matrices, facility showcases, and automated RFQ intake.',
  },
  {
    corridor: 'Meatpacking & SoHo Flagship District',
    query: 'luxury retail direct to consumer fashion web design soho nyc',
    focus: 'Luxury Retail, Modern D2C & High-End Fashion Flagships',
    desc: 'The world luxury retail showcase. Demands ultra-responsive lookbooks, interactive styling visualizers, and seamless digital commerce.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'FinTech, Private Equity & Capital Markets',
    headline: 'Institutional-Grade Digital Flagships for Wall Street Leaders',
    description:
      'From Wall Street investment banks to Silicon Alley fintech disruptors, digital presence reflects fiduciary excellence. We engineer custom Next.js web applications with interactive financial modelers, compliance-ready investor data rooms, real-time market data integration, and sub-second global edge performance.',
    image: '/images/us/b2b-website-design/hero.webp',
    alt: 'New York City Wall Street fintech private equity and investment banking web design engineering',
    points: [
      'Interactive asset allocation visualizers and financial portfolio modelers',
      'Encrypted investor data rooms and multi-tier institutional access controls',
      'Compliance-first architectures with sub-second global edge CDN caching',
    ],
  },
  {
    sector: 'Corporate Law, Litigation & Management Consulting',
    headline: 'Authoritative Digital Flagships for Midtown Manhattan Practices',
    description:
      'Midtown legal firms, commercial litigation boutiques, and executive consulting practices demand digital presences that project institutional authority. We design bespoke typography scales, interactive practice area silos, verified case outcome repositories, and secure client portal integrations.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'New York City Midtown Manhattan corporate law firm and management consulting website design',
    points: [
      'Refined editorial typography and interactive practice area directories',
      'Encrypted client portal integration with multi-factor authentication routing',
      '100% intellectual property ownership with full source code transfer',
    ],
  },
  {
    sector: 'Enterprise SaaS, Media & Digital Publishing',
    headline: 'High-Conversion Growth Engines for Silicon Alley Innovators',
    description:
      'Fast-growing software companies and modern digital media brands across Flatiron and Chelsea need web applications that convert enterprise buyers. We engineer high-speed marketing websites with interactive pricing calculators, product feature matrices, and seamless CRM integrations.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'New York City Silicon Alley enterprise SaaS and digital media marketing web design',
    points: [
      'Interactive pricing configurators and dynamic product tour visualizers',
      'Frictionless lead routing directly into HubSpot, Salesforce, and Marketo',
      'Sub-second first contentful paint ensuring maximum paid acquisition ROI',
    ],
  },
  {
    sector: 'Architecture, Real Estate Development & Design Studios',
    headline: 'Tactile Portfolio Showcases for DUMBO & SoHo Creators',
    description:
      'Premier architecture firms, luxury residential developers, and creative design studios across DUMBO and SoHo demand visual perfection. We build bespoke digital galleries with fluid page transitions, interactive floor plan viewers, and high-resolution media optimization.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'New York City DUMBO architecture luxury real estate and creative studio website design',
    points: [
      'Fluid interactive project galleries and 3D architectural floor plan viewers',
      'High-resolution WebP and AVIF image optimization with zero layout shift',
      'Structured RealEstateAgent and ArchitecturalOffice schema markup integration',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Slow WordPress Themes & Bloated Plugin Stacks',
    problem: 'Traditional New York agencies build on bloated WordPress templates with 30+ plugins, resulting in sluggish load times, security vulnerabilities, and constant breakages.',
    solution: 'We engineer custom Next.js 15 web applications on modern edge networks, achieving sub-second load times and zero dependency bloat.',
  },
  {
    num: '02',
    title: 'Eliminating Endless 6-Month Agency Timelines & Scope Creep',
    problem: 'Legacy digital agencies trap clients in endless discovery meetings and protracted timelines, taking 6 to 9 months to launch basic corporate websites.',
    solution: 'Our disciplined 7-day agile sprint model delivers fully custom Figma UI/UX designs and production-ready React code within guaranteed milestone windows.',
  },
  {
    num: '03',
    title: 'Overcoming Fragile Mobile Experiences That Hurt Lead Conversion',
    problem: 'Poorly coded desktop-first designs break on mobile devices, with slow forms, misaligned buttons, and confusing navigation that drives prospects away.',
    solution: 'We engineer mobile-first responsive interfaces with frictionless touch navigation, instant autocompleting forms, and clean Core Web Vitals.',
  },
  {
    num: '04',
    title: 'Stopping Agency Code Hostage & Hidden Licensing Fees',
    problem: 'Many agencies lock your website into proprietary platforms or charge ongoing licensing fees to keep your own code operational.',
    solution: 'You receive 100% full intellectual property ownership, the complete GitHub repository, and documented deployment configurations upon project completion.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Discovery, Information Architecture & Strategy',
    desc: 'We analyze your commercial positioning, audience intent, competitor landscape, and technical requirements to define a high-conversion digital blueprint.',
    deliverables: ['Information architecture and page hierarchy map', 'Competitor visual benchmark and positioning gap analysis', 'Technical requirements and third-party API scope', 'Project milestone timeline and delivery SLA'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Figma UI/UX Design & Design Tokens',
    desc: 'We design bespoke desktop and mobile prototypes in Figma, complete with typography tokens, spacing scales, and custom brand visual assets.',
    deliverables: ['High-fidelity interactive Figma prototypes', 'Mobile responsive component wireframes', 'Design tokens and typography scales', 'Client design review and revision approval'],
  },
  {
    phase: 'Phase 03',
    title: 'Next.js 15 Engineering & Headless CMS Integration',
    desc: 'We transform approved designs into production React 19 code with TypeScript, Tailwind CSS, structured schema markup, and headless CMS integrations.',
    deliverables: ['Custom Next.js 15 App Router architecture', 'Sanity/Strapi headless content management setup', 'JSON-LD structured schema graph implementation', 'Cross-browser and multi-device QA validation'],
  },
  {
    phase: 'Phase 04',
    title: 'Core Web Vitals Optimization, Launch & Handover',
    desc: 'We execute speed benchmarking, set up Cloudflare edge routing, execute production domain cutover, and transfer full code ownership.',
    deliverables: ['Lighthouse 95+ performance optimization', 'Cloudflare DNS cutover and SSL deployment', 'Full GitHub repository and asset transfer', '30-day post-launch warranty and team training'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Engineering Stack',
    factoryjet: 'Modern Next.js 15, React 19, TypeScript, and Tailwind CSS on Cloudflare Edge.',
    traditional: 'Outdated monolithic WordPress, Elementor, or heavy Webflow templates.',
  },
  {
    label: 'Delivery Speed',
    factoryjet: 'Rapid 7-day agile sprint with fixed-price milestone delivery.',
    traditional: '4 to 8 months of protracted discovery meetings and frequent timeline slippages.',
  },
  {
    label: 'Mobile Speed SLA',
    factoryjet: 'Guaranteed 95+ Google Lighthouse Core Web Vitals mobile performance.',
    traditional: 'Sub-60 mobile performance scores with heavy render-blocking scripts.',
  },
  {
    label: 'IP & Code Ownership',
    factoryjet: '100% full intellectual property ownership. You receive the complete GitHub repository.',
    traditional: 'Proprietary platform lock-in or agency-retained code repositories.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Scope' },
  { key: 'timeline', label: 'Timeline & Process' },
  { key: 'tech', label: 'Next.js Tech Stack' },
  { key: 'local', label: 'New York City Focus' },
  { key: 'ownership', label: 'Code & Support' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does custom web design cost for a New York City business?',
    answer:
      'Project investments are based on total page count, interactive feature complexity, custom API integrations, and content scope. Every project is scoped with a transparent, fixed-price milestone agreement. Focused corporate websites are delivered with full Figma UI/UX, custom Next.js engineering, and 100% code ownership with zero surprise overages.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden monthly maintenance fees or recurring agency retainers?',
    answer:
      'No. We believe you should own your website outright. You contract directly with your preferred hosting provider such as Cloudflare or Vercel and pay zero monthly agency licensing fees.',
  },
  {
    category: 'pricing',
    question: 'How do you guarantee that project budgets remain fixed without overages?',
    answer:
      'We complete an exhaustive scope definition and architectural plan before writing a single line of code. All design components, page templates, and integrations are documented in a binding scope of work that guarantees delivery at the agreed investment level.',
  },
  {
    category: 'pricing',
    question: 'What payment schedules do you offer for corporate engagements?',
    answer:
      'We structure payments around clear project milestones: an initial deposit upon project kickoff, a design milestone approval payment, and final payment upon successful production deployment and code transfer.',
  },
  {
    category: 'timeline',
    question: 'How can you deliver a custom Next.js website in just 7 days?',
    answer:
      'We eliminate bloated agency bureaucracy and junior account layers. Our senior full-stack engineers and Figma UI/UX designers work directly with you through focused, daily milestone sprints to design, build, and deploy your site in parallel.',
  },
  {
    category: 'timeline',
    question: 'What is required from our internal team during the 7-day sprint?',
    answer:
      'We require brand assets such as logos and style guides, key service copy, and prompt feedback on the Figma design prototypes during scheduled milestone check-ins to ensure rapid project delivery.',
  },
  {
    category: 'timeline',
    question: 'What happens if we need design revisions during the process?',
    answer:
      'Every project includes dedicated design revision cycles during the Figma prototype phase, ensuring you approve every layout, color choice, and typography detail before development begins.',
  },
  {
    category: 'timeline',
    question: 'Can you accommodate urgent launch deadlines for upcoming funding rounds or events?',
    answer:
      'Yes. Our sprint-based engineering model is specifically designed for high-velocity teams needing to launch in time for product announcements, venture rounds, or industry conferences.',
  },
  {
    category: 'tech',
    question: 'Why choose Next.js 15 over WordPress or Webflow?',
    answer:
      'Next.js 15 delivers unbeatable performance with sub-second page loads, superior SEO through server-side rendering, rock-solid security without vulnerable plugins, and infinite scalability that monolithic page builders cannot match.',
  },
  {
    category: 'tech',
    question: 'Can our marketing team edit text and images without touching code?',
    answer:
      'Yes. We integrate intuitive headless CMS platforms like Sanity or Strapi, allowing your marketing team to create blog posts, update service copy, and upload images through an easy visual dashboard.',
  },
  {
    category: 'tech',
    question: 'How do you ensure our website achieves 95+ Core Web Vitals scores?',
    answer:
      'We optimize every asset using modern WebP/AVIF image formats, eliminate render-blocking JavaScript, implement static page pre-rendering, and deploy on Cloudflare global edge networks.',
  },
  {
    category: 'tech',
    question: 'How do you handle SEO migration to prevent traffic loss?',
    answer:
      'We build comprehensive 1-to-1 301 redirect maps for every legacy URL, preserve existing URL slugs, implement structured JSON-LD schemas, and validate all meta tags prior to DNS cutover.',
  },
  {
    category: 'local',
    question: 'Do you have experience with New York financial and fintech firms?',
    answer:
      'Yes. We build high-credibility digital experiences for Wall Street investment practices, private equity managers, and Silicon Alley fintech platforms requiring interactive data visualizers and secure portals.',
  },
  {
    category: 'local',
    question: 'Can you design websites tailored for Midtown Manhattan corporate law practices?',
    answer:
      'Yes. We develop sophisticated digital flagships for corporate trial attorneys, commercial litigators, and executive advisory firms featuring practice area silos, executive bio schemas, and client portals.',
  },
  {
    category: 'local',
    question: 'Can you integrate custom CRM and lead capture workflows like HubSpot or Salesforce?',
    answer:
      'Yes. We build webhook-driven form integrations that instantly route leads, quote inquiries, and consultation requests directly into your CRM, Slack, or email marketing automation platform.',
  },
  {
    category: 'local',
    question: 'Can you build luxury portfolio websites for DUMBO and SoHo design studios?',
    answer:
      'Yes. We engineer tactile digital galleries with fluid transitions, interactive 3D architectural floor plans, and high-resolution visual storytelling for premier creative studios.',
  },
  {
    category: 'ownership',
    question: 'Do we own the full source code and intellectual property after launch?',
    answer:
      'Yes, 100%. Upon final milestone completion, you receive complete ownership of the GitHub repository, Figma design assets, and deployment configurations with zero vendor lock-in.',
  },
  {
    category: 'ownership',
    question: 'What warranty and post-launch support do you provide?',
    answer:
      'Every project includes a 30-day comprehensive post-launch warranty covering any bug fixes, performance tuning, and recorded video training for your internal staff.',
  },
  {
    category: 'ownership',
    question: 'How do you train our internal team on managing the website?',
    answer:
      'We deliver custom recorded video walkthroughs and documentation explaining how to update content in the CMS, view form submissions, and manage media assets.',
  },
  {
    category: 'ownership',
    question: 'Can any software engineer maintain our Next.js codebase in the future?',
    answer:
      'Yes. We write clean, modular, and fully typed TypeScript and React code adhering to global standards, ensuring any modern web developer can easily maintain and extend your application.',
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
  name: 'FactoryJet - New York Web Design Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7128,
    longitude: -74.006,
  },
  areaServed: [
    { '@type': 'City', name: 'New York' },
    { '@type': 'City', name: 'Manhattan' },
    { '@type': 'City', name: 'Brooklyn' },
    { '@type': 'City', name: 'Queens' },
    { '@type': 'City', name: 'Long Island City' },
  ],
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
  name: 'New York Web Design & Next.js Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Web Design, Next.js Development, UI/UX Design & Headless CMS',
  description:
    'Custom Next.js web design and engineering in New York City. Sub-second performance, full IP code ownership, and rapid 7-day delivery for NYC businesses.',
  areaServed: [{ '@type': 'State', name: 'New York' }],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'New York Web Design Agency | Custom Next.js & UI/UX | FactoryJet',
  description: 'New York web design agency. High-converting Next.js websites, sub-second load times, and custom Figma UI/UX for NYC enterprises and high-growth brands.',
  url: CANONICAL,
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Web Design', item: 'https://factoryjet.com/services/web-design' },
    { '@type': 'ListItem', position: 3, name: 'New York', item: CANONICAL },
  ],
};

export default function NewYorkWebDesignPage() {
  return (
    <>
      <script id="ny-web-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="ny-web-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="ny-web-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="ny-web-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="ny-web-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>New York Web Design &amp; Full-Stack Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  New York Web Design Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Custom Next.js 15 websites, bespoke Figma UI/UX, and sub-second performance engineered for NYC leaders. 7-day agile delivery with 100% intellectual property code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#ny-web-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore New York Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/b2b-website-design/hero.webp"
                  alt="New York City web design and custom Next.js web application development"
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
              <div className="rv-ticker-label">Modern Frontend &amp; Cloud Infrastructure</div>
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
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/b2b-website-design/sales-enablement.webp"
                  alt="FactoryJet senior UI UX designers collaborating on custom New York web design sprint"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Speed, Craft &amp; Performance</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Web Design Engineered for New York Market Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Wall Street fintech leaders to Midtown law firms, Silicon Alley software scale-ups, and SoHo fashion houses, we build high-converting web applications that elevate your brand equity.
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

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Web Design Consultation" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. NEW YORK DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="ny-web-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>New York Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Web Design for New York&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Silicon Alley software firms to Wall Street institutions, Midtown practices, and Brooklyn creative studios:
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

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Web Architectures for New York Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across the five boroughs demands tailored user flows, design tokens, and performance metrics:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '320px', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why New York Leaders Choose FactoryJet Web Design
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile WordPress page builders with high-performance Next.js engineering:
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="web-design-blueprint">
          <WebDesignArchitectureBlueprint
            badge="// NEW YORK FRONTEND STACK &amp; CORE WEB VITALS BLUEPRINT"
            title="Next.js 15 App Router to Global Cloudflare Edge"
            subtitle="Explore how custom Figma UI/UX, React 19 Server Components, headless content management, and Cloudflare edge caching operate together seamlessly."
            city="New York"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE SPRINT PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven 7-Day Sprint Model</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Rapid Web Design Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for zero-delay deliveries and high-conversion web launches:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
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
                Evaluating New York Web Design Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led Next.js development against traditional template agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Template Agencies</div>
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

        {/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}
        <WebDesignValueCalculator city="New York" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="NEW YORK WEB DESIGN INTELLIGENCE"
          headline="Frequently Asked Questions About Web Design in New York City"
          lead="Direct, plain English answers to what New York business owners and marketing leaders ask about website design and engineering:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <WebDesignCityLinksUS currentCity="new-york" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; 7-Day Delivery</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your New York Web Presence?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand goals. We will provide a comprehensive fixed-price proposal, clear sprint schedule, and interactive Figma preview.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Proposal" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
