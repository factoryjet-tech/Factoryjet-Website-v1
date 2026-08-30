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

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/raleigh/web-design';

export const metadata: Metadata = {
  title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
  description:
    'Best Raleigh web design agency. Top custom Next.js websites, sub-second load speeds, mobile conversion flows, and 100% full IP code ownership for Research Triangle businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
    description:
      'Premier Raleigh web design agency. Custom Next.js websites, sub-second load speeds, and full code ownership for Research Triangle businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Raleigh Web Design Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
    description: 'Custom Next.js web design in Raleigh NC. 7-day launch and 100% full IP code ownership.',
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
  { num: '95+', title: 'Mobile Lighthouse Score', desc: 'Sub-second mobile loading speeds engineered for high conversion rates across the Research Triangle.', icon: '🚀' },
  { num: '500+', title: 'Websites Launched', desc: 'Custom web platforms delivered across biopharma, enterprise SaaS, and research spinouts.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean Next.js repository, Figma files, and hosting configuration.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'Research Triangle Park & I-40 Tech Corridor',
    query: 'biopharma web design rtp raleigh',
    focus: 'Biopharma, Clinical CROs & AgTech',
    desc: 'The largest dedicated research park in North America. Demands interactive clinical trial gateways, research paper libraries, and sub-second edge performance.',
  },
  {
    corridor: 'Downtown Raleigh & Warehouse District',
    query: 'saas website design downtown raleigh',
    focus: 'Software SaaS, Clean Energy & Digital Startups',
    desc: 'High-growth tech and creative corridor. Tech companies require interactive component libraries, clear documentation portals, and high-converting product demo funnels.',
  },
  {
    corridor: 'North Hills & Midtown Raleigh',
    query: 'corporate headquarters web design north hills',
    focus: 'Corporate Regional HQs, Private Equity & Commercial Real Estate',
    desc: 'High-density corporate commercial district. Features executive credential directories, transaction portfolios, and enterprise accessibility compliance.',
  },
  {
    corridor: 'Downtown Durham & American Tobacco Campus',
    query: 'healthtech web design durham',
    focus: 'Healthtech, AI Analytics & Creative Studios',
    desc: 'Innovation and life science center. High-speed spec sheet downloads, platform capability matrices, and rapid RFQ calculators.',
  },
  {
    corridor: 'Cary & Western Wake Tech Park',
    query: 'enterprise software web design cary',
    focus: 'Enterprise Software, Game Development & Fintech',
    desc: 'Global enterprise software corridor. High-speed interactive product configurators, global CDN image delivery, and sub-second page loads.',
  },
  {
    corridor: 'Chapel Hill & University Innovation Corridor',
    query: 'university spinout web design chapel hill',
    focus: 'Biomedical Commercialization, Education Tech & Venture Spinouts',
    desc: 'Premier university research spinout cluster. Features scientific publication hubs, investor presentation decks, and sub-second edge hosting.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Biopharma, Clinical Research & Life Sciences',
    headline: 'Engineering High-Trust Scientific Flagships for Research Triangle Leaders',
    description:
      'RTP biopharma and clinical research organizations demand websites that speak to global pharmaceutical sponsors, FDA regulators, and clinical trial investigators. We build custom Next.js web applications featuring interactive pipeline tables, downloadable scientific whitepapers, and sub-second edge speeds.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'Raleigh biopharma and life sciences web design engineering',
    points: [
      'Interactive clinical pipeline matrices and downloadable peer-reviewed research',
      'Frictionless multi-step sponsor inquiry forms routing to business development teams',
      'Lightweight server-rendered Next.js architecture deployed to Cloudflare Edge nodes',
    ],
  },
  {
    sector: 'Healthcare Systems, Specialized Clinics & Surgery Centers',
    headline: 'High-Trust Patient & Provider Digital Experiences Across the Triangle',
    description:
      'From private practices in North Hills to surgical clinics in Cary, credibility drives patient acquisition. We engineer HIPAA-aware medical websites featuring searchable physician directories, specialty procedure overviews, insurance plan matrices, and lightning-fast appointment scheduling flows.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'Raleigh healthcare medical practice and surgical clinic website design',
    points: [
      'Searchable provider directories with clinical specialty credentials and hospital affiliations',
      'HIPAA-aware consultation intake forms and click-to-call mobile patient actions',
      'Flawless responsive performance achieving 95+ Core Web Vitals across mobile networks',
    ],
  },
  {
    sector: 'Corporate Law, Venture Capital & IP Litigation',
    headline: 'Projecting Institutional Stature for Downtown Raleigh Practices',
    description:
      'High-stakes intellectual property and venture capital law firms in the Research Triangle cannot afford generic visual templates. We craft bespoke digital flagships featuring practice area content hubs, partner biographical repositories with bar admission schema, verified transaction track records, and secure client communication endpoints.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'Raleigh corporate law firm intellectual property and venture capital web design',
    points: [
      'Deep practice area knowledge graphs and structured legal case victory portfolios',
      'Attorney profile schema with state bar admissions and published industry insights',
      'Secure lead capture workflows routing confidential inquiries to specific partners',
    ],
  },
  {
    sector: 'Clean Tech, Advanced Automation & AgTech',
    headline: 'Engineering Technical Authority for Triangle Innovators',
    description:
      'From clean energy startups to automated agriculture technology leaders across Wake County, technical buyers demand precision. We develop high-performance web applications featuring structured capability tables, instant RFQ calculators, downloadable spec sheets, and sub-second edge hosting.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Raleigh clean tech and automated agtech web design engineering',
    points: [
      'Interactive equipment capability matrices and downloadable CAD/PDF engineering data',
      'Frictionless multi-step RFQ form workflows routing directly to estimating teams',
      'Lightweight server-rendered Next.js architecture deployed to Cloudflare Edge nodes',
    ],
  },
  {
    sector: 'Enterprise Analytics, Clean Energy & Smart Grid Technology',
    headline: 'Engineering Digital Authority for Raleigh Clean Tech Leaders',
    description:
      'From smart grid engineers in Raleigh to SAS enterprise analytics spinouts in Cary, technical B2B buyers require interactive proof of performance. We build custom Next.js web applications featuring real-time data visualization components, ESG reporting repositories, and enterprise procurement lead funnels.',
    image: '/images/services/card-real-estate.webp',
    alt: 'Raleigh clean tech smart grid and enterprise analytics website design',
    points: [
      'Interactive energy infrastructure project maps and downloadable ESG compliance data',
      'Enterprise RFP and contractor bid submission portals with secure file uploads',
      'Sub-second page rendering with 100/100 Core Web Vitals on mobile and desktop',
    ],
  },
  {
    sector: 'University Research Spinouts, Intellectual Property & Deep Tech',
    headline: 'Academic Stature & Commercial Pitch Portals for Triangle Spinouts',
    description:
      'Commercialization teams from NC State, Duke, and UNC Chapel Hill spinning out deep tech ventures demand high-credibility digital flagships. We construct interactive platforms featuring scientific publication hubs, researcher profile schemas, grant funding track records, and venture capital presentation portals.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Raleigh university research spinout and intellectual property web design',
    points: [
      'Searchable scientific publication repositories with DOI links and author citations',
      'Interactive technology readiness level (TRL) matrices and patent portfolio silos',
      'Secure investor presentation portals with gated data rooms and analytics tracking',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Eliminating Slow WordPress Themes & Fragile Plugin Stacks',
    problem: 'Traditional Raleigh agencies install bloated multi-purpose themes loaded with 35+ unmaintained plugins that cause 4 to 6 second load times and frequent security breaches.',
    solution: 'We engineer custom Next.js 15 architectures with pure TypeScript and Tailwind CSS, pre-rendering static HTML pages that load in under 600 milliseconds on mobile networks.',
  },
  {
    num: '02',
    title: 'Ending Proprietary CMS Lock-In & Recurring Platform Surcharges',
    problem: 'Many local web firms build on proprietary site-builder platforms, holding your design assets and database hostage under mandatory monthly hosting contracts.',
    solution: 'You receive 100% intellectual property ownership of your Figma design system, clean GitHub source code, and Cloudflare Edge hosting accounts upon launch.',
  },
  {
    num: '03',
    title: 'Replacing Protracted 16-Week Timelines with Focused 7-Day Sprints',
    problem: 'Traditional agencies route your feedback through multiple layers of account managers, dragging simple corporate website builds into 4 to 6 month ordeals.',
    solution: 'We work in dedicated daily sprints with direct senior engineering access, moving from approved Figma prototype to live production deployment in 7 calendar days.',
  },
  {
    num: '04',
    title: 'Building Built-In Search & AI Citation Architecture from Day One',
    problem: 'Basic agencies treat SEO as an afterthought or an expensive add-on, leaving your site with missing JSON-LD schema, broken canonicals, and poor Core Web Vitals.',
    solution: 'Every page includes server-rendered LocalBusiness, Service, and FAQPage schema, speakable selectors for AI search engines, and sub-second performance.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Architectural Scope & Figma Prototyping',
    desc: 'We analyze your Raleigh competitors, map conversion pathways, and design a custom desktop and mobile prototype in Figma.',
    deliverables: ['Competitive local search audit', 'Bespoke Figma UI component design', 'Conversion wireframes and content plan', 'Client milestone approval'],
  },
  {
    phase: 'Phase 02',
    title: 'Headless Next.js 15 & React Engineering',
    desc: 'We code your website using clean, type-safe Next.js 15 App Router components with modular Tailwind styling and zero plugin bloat.',
    deliverables: ['Custom React 19 component library', 'Type-safe TypeScript architecture', 'Mobile responsive touch optimization', 'Lightweight headless CMS integration'],
  },
  {
    phase: 'Phase 03',
    title: 'Edge Deployment & Local SEO Integration',
    desc: 'We deploy your site to Cloudflare Global Edge nodes and implement rich JSON-LD structured data for Google and AI engines.',
    deliverables: ['Cloudflare Edge CDN caching', 'Structured JSON-LD schema graph', 'Google Analytics 4 & Tag Manager setup', 'Enterprise security header configuration'],
  },
  {
    phase: 'Phase 04',
    title: 'Core Web Vitals QA, Handoff & Launch',
    desc: 'We execute comprehensive multi-device cross-browser testing, verify 95+ Lighthouse scores, transfer all code, and go live.',
    deliverables: ['95+ Google Lighthouse verification', 'Cross-browser device QA testing', 'Full GitHub & Figma asset transfer', 'Recorded video training & 30-day warranty'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Source Code Ownership',
    factoryjet: '100% Full IP Ownership. You receive the complete GitHub repository, Figma source files, and hosting credentials.',
    traditional: 'Proprietary Lock-in. Agencies retain code rights or charge high recurring license fees to keep your website live.',
  },
  {
    label: 'Mobile Speed SLA',
    factoryjet: 'Guaranteed 95+ Mobile Lighthouse score with sub-second page rendering on 4G/5G mobile connections.',
    traditional: 'Heavy WordPress themes averaging 3 to 6 second load times and failing Google Core Web Vitals assessments.',
  },
  {
    label: 'Sprint Timeline',
    factoryjet: 'Strict 7-day sprint delivery with daily progress updates and direct senior developer communication.',
    traditional: '12 to 24 week protracted build cycles plagued by scope drift and endless account manager meetings.',
  },
  {
    label: 'Structured Data & AI Readiness',
    factoryjet: 'Deep server-rendered JSON-LD schema (LocalBusiness, ProfessionalService, WebPage, speakable, FAQPage).',
    traditional: 'Basic auto-generated meta tags without entity knowledge graphs, breadcrumb markup, or AI answer formatting.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Scope' },
  { key: 'timeline', label: 'Timeline & Sprint' },
  { key: 'technical', label: 'Tech Stack & Performance' },
  { key: 'local', label: 'Raleigh Market Focus' },
  { key: 'ownership', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does a custom Raleigh web design project cost?',
    answer:
      'Project pricing is based on your required page volume, interactive features, custom integrations, and content scope. A high-converting 5 to 10 page corporate website built in Next.js is delivered on a transparent fixed-price quote with zero hidden agency surcharges. Large enterprise platforms with complex database portals or multi-location architectures are scoped with clear milestone deliverables. Every quote includes custom Figma design, Next.js engineering, local SEO schema, and 100% code ownership.',
  },
  {
    category: 'pricing',
    question: 'Are there any recurring hosting fees or ongoing platform royalties?',
    answer:
      'No. Because we build using modern static generation and serverless Next.js deployed to Cloudflare Pages or Vercel, your ongoing hosting infrastructure costs are virtually zero. You own your hosting accounts directly and never pay mandatory monthly agency platform fees.',
  },
  {
    category: 'pricing',
    question: 'How does your fixed-price quote protect our business from budget overruns?',
    answer:
      'We complete a thorough technical scope and wireframe review before beginning development. Your written proposal specifies all deliverables, design revisions, technical integrations, and launch timelines. The agreed price is guaranteed and will only adjust if you explicitly request expanded features during the sprint.',
  },
  {
    category: 'timeline',
    question: 'How can you deliver a custom Next.js website in 7 days without cutting corners?',
    answer:
      'We eliminate agency bureaucracy and account manager bottlenecks. By assigning dedicated senior engineers and UI designers who work directly with your leadership team using modular design tokens, we execute focused daily sprint milestones. Day 1-2 covers architecture and Figma approval; Day 3-4 completes Next.js engineering; Day 5-6 integrates local schema and edge deployment; Day 7 handles QA and launch.',
  },
  {
    category: 'timeline',
    question: 'What do you need from our team before starting the 7-day sprint?',
    answer:
      'To maintain our 7-day delivery SLA, we require high-resolution brand assets (logos and brand guidelines), existing photography or video assets, approved copy direction or core service descriptions, and access to your domain DNS or hosting accounts. Once these assets are in our shared project workspace, the sprint begins immediately.',
  },
  {
    category: 'timeline',
    question: 'What happens if we need design revisions during the sprint?',
    answer:
      'Our sprint includes dedicated review milestones on Days 2 and 6. Because we prototype in Figma before writing code, visual adjustments to layout, typography, and color schemes are made rapidly without causing development delays.',
  },
  {
    category: 'technical',
    question: 'Why choose Next.js over traditional WordPress for a Raleigh business?',
    answer:
      'WordPress websites rely on bloated server runtime PHP, heavy database queries, and vulnerable third-party plugins that degrade page load speed and invite security exploits. Next.js pre-renders pages into static HTML and modern JavaScript, deploying directly to global edge networks. This delivers sub-second page loads, near-instant mobile browsing, impenetrable security, and significantly higher conversion rates for competitive Raleigh search queries.',
  },
  {
    category: 'technical',
    question: 'How do you guarantee a 95+ Google Lighthouse mobile score?',
    answer:
      'We optimize image compression with modern WebP formats, eliminate render-blocking JavaScript, implement CSS containment, and deploy assets globally via Cloudflare Edge CDN to achieve Lighthouse performance scores of 95+.',
  },
  {
    category: 'technical',
    question: 'What content management system (CMS) do you connect for easy client updates?',
    answer:
      'We connect intuitive headless CMS platforms like Sanity, Contentful, or Strapi that allow your marketing team to edit text, upload photos, and publish blog articles effortlessly without touching code or risking site layout breaks.',
  },
  {
    category: 'technical',
    question: 'How do you handle website hosting and security certificates?',
    answer:
      'We deploy your website to Cloudflare Pages or Vercel, providing enterprise-grade DDoS protection, automated global SSL certificates, and 99.99% uptime with zero hosting maintenance fees for most small and mid-sized business applications.',
  },
  {
    category: 'local',
    question: 'Do you build B2B websites for RTP biopharma and life sciences companies?',
    answer:
      'Yes. We build high-conversion B2B websites tailored for Research Triangle biopharma, clinical CROs, and agtech enterprises, complete with pipeline charts, downloadable clinical whitepapers, and automated CRM lead routing.',
  },
  {
    category: 'local',
    question: 'Can you design websites for Cary and Downtown Raleigh software startups?',
    answer:
      'Yes. We build modern SaaS websites featuring interactive product demos, API documentation hubs, and frictionless demo scheduling workflows.',
  },
  {
    category: 'local',
    question: 'Can you integrate e-commerce capabilities into our North Carolina business site?',
    answer:
      'Yes. Whether you require a simple Stripe checkout for service retainers or a full Shopify storefront integration for consumer goods, we build secure, high-conversion e-commerce workflows into your custom web architecture.',
  },
  {
    category: 'local',
    question: 'How does your web design optimize for local Raleigh search rankings?',
    answer:
      'We embed structured LocalBusiness JSON-LD schema, configure Google Analytics 4 conversion tracking, optimize Core Web Vitals, and architect localized service area landing pages for Raleigh, Durham, Cary, Chapel Hill, and Apex.',
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
  {
    category: 'ownership',
    question: 'Can any developer maintain our Next.js website in the future?',
    answer:
      'Yes. Next.js and React are the global industry standard for modern web engineering. Because we write clean, documented TypeScript without proprietary plugins, any competent software engineer can maintain or extend your codebase.',
  },
  {
    category: 'ownership',
    question: 'How do you train our internal team to manage site content?',
    answer:
      'Upon launch, we record a personalized video walkthrough demonstrating exactly how to update copy, add new team members, publish articles, and view analytics data, giving your team complete operational independence.',
  },
  {
    category: 'architecture',
    question: 'How do you engineer clinical trial gateways and biopharma hubs for Research Triangle Park (RTP) leaders?',
    answer:
      'We build static React Server Component architectures with structured MedicalBusiness and ClinicalTrial schemas, searchable protocol repositories, investigator application forms, and sub-second page performance across global research networks.',
  },
  {
    category: 'technical',
    question: 'Why is Next.js 15 preferred by Downtown Raleigh and Durham B2B SaaS startups over legacy CMS platforms?',
    answer:
      'Tech startups in the Triangle demand developer-grade documentation portals, interactive product demo tours, automated CRM lead routing, and sub-600ms load speeds. Next.js 15 eliminates the security risks and bloat of legacy PHP plugins while supporting modern TypeScript component architecture.',
  },
  {
    category: 'design',
    question: 'Can you design investor pitch portals and patent repositories for university spinouts in Chapel Hill and Raleigh?',
    answer:
      'Yes. We build structured commercialization portals featuring scientific publication hubs, patent portfolios, technology readiness matrices, and password-protected investor data rooms.',
  },
  {
    category: 'process',
    question: 'How do you guarantee sub-600ms load speeds and 100/100 Core Web Vitals in North Carolina?',
    answer:
      'We optimize every asset from the foundation up: automatic WebP/AVIF image transcoding, critical CSS inlining, font subsetting, zero render-blocking scripts, and static HTML pre-generation delivered from global edge servers across the Research Triangle.',
  },
  {
    category: 'ownership',
    question: 'What design files and tokens are delivered during the Figma design system handover?',
    answer:
      'You receive full edit access to a complete Figma design system containing typography scales, color tokens, responsive mobile/desktop wireframes, custom icon sets, component variants, and interactive prototype flows that your marketing team owns forever.',
  },
  {
    category: 'local',
    question: 'How do you configure Schema.org JSON-LD structured data for Google Rich Results in the Triangle?',
    answer:
      'We embed granular Schema.org JSON-LD structured data on every page, including Organization, ProfessionalService, LocalBusiness, FAQPage, BreadcrumbList, and WebSite schemas. These explicit semantic annotations enable Google to generate rich snippet cards, sitelinks, and AI search citations.',
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
  name: 'FactoryJet - Raleigh Web Design Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Raleigh',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.7796,
    longitude: -78.6382,
  },
  areaServed: [
    { '@type': 'City', name: 'Raleigh' },
    { '@type': 'City', name: 'Durham' },
    { '@type': 'City', name: 'Cary' },
    { '@type': 'City', name: 'Chapel Hill' },
    { '@type': 'City', name: 'Apex' },
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
  name: 'Raleigh Web Design & Next.js Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Web Design, Frontend Engineering & Conversion Optimization',
  description:
    'Senior engineering-led custom Next.js web design, sub-second page performance, mobile conversion optimization, and full IP ownership for Research Triangle businesses.',
  areaServed: { '@type': 'State', name: 'North Carolina' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Raleigh Web Design Agency | Fast Next.js Sites | FactoryJet',
  description: 'Custom Next.js websites, sub-second load speeds, and full code ownership for Raleigh NC businesses.',
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
    { '@type': 'ListItem', position: 3, name: 'Raleigh', item: CANONICAL },
  ],
};

export default function RaleighWebDesignPage() {
  return (
    <>
      <script id="rdu-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="rdu-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="rdu-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="rdu-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="rdu-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Raleigh Web Design &amp; Frontend Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Raleigh Web Design Agency for Growing Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Turn website visitors into paying clients with custom Next.js architecture, sub-second load speeds, and mobile conversion flows. 7-day delivery with 100% full IP code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#rdu-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Triangle Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/raleigh/hero-raleigh.webp"
                  alt="Raleigh North Carolina modern web design engineering and custom Next.js website mockup"
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
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet senior frontend engineers building custom Next.js web solutions in Raleigh"
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
                  <span>Speed, Polish &amp; Conversion</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Websites Built for the Triangle&apos;s High-Value Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From RTP biopharma leaders to Cary enterprise software firms and Downtown Raleigh startups, Triangle businesses need sites that project authority and convert high-ticket decision-makers.
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
                  <ModalCTAButton label="Schedule Web Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. RALEIGH DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="rdu-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Research Triangle Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Web Design for Raleigh&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From RTP research centers to Downtown Raleigh SaaS firms and Cary software campuses:
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
                Specialized Web Architectures for Triangle Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector in the Research Triangle demands tailored user experiences, technical credibility, and conversion paths:
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
                Why Raleigh Companies Choose FactoryJet Web Design
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

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Raleigh" vertical="web-design" />
          </div>
        </section>

        <div id="web-architecture-blueprint">
          <WebDesignArchitectureBlueprint
            badge="// RALEIGH MODERN WEB ARCHITECTURE BLUEPRINT"
            title="High-Performance Frontend: From Code to Conversion"
            subtitle="Explore how custom Next.js components, Cloudflare Edge caching, structured JSON-LD schema, and conversion tracking work together seamlessly."
            city="Raleigh"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 7-DAY DELIVERY ROADMAP MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Guaranteed 7-Day Sprint</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 7-Day Delivery Sprint Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From initial kickoff and Figma prototyping to production code and zero-downtime launch in 7 calendar days:
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
                Evaluating Raleigh Web Design Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led Next.js development against traditional design agencies before you commit:
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

        {/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}
        <WebDesignValueCalculator city="Raleigh" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="RALEIGH WEB DESIGN INTELLIGENCE"
          headline="Frequently Asked Questions About Web Design in Raleigh NC"
          lead="Direct, plain English answers to what Raleigh business owners and marketing leaders ask about website projects:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <WebDesignCityLinksUS currentCity="raleigh" />
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
              Ready to Upgrade Your Raleigh Business Website?
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

      <SiteFooter locale="us" />
    </>
  );
}
