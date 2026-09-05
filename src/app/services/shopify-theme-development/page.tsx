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
const CANONICAL = 'https://factoryjet.com/services/shopify-theme-development';

export const metadata: Metadata = {
  title: 'Custom Shopify Theme Development Agency | FactoryJet.',
  description: 'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes with 95+ Core Web Vitals, zero bloat, and GitHub code ownership.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Custom Shopify Theme Development Agency | FactoryJet.',
    description: 'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes with 95+ Core Web Vitals, zero bloat, and GitHub code ownership.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/shopify-theme/hero.webp',
        width: 1024,
        height: 1024,
        alt: 'Custom Shopify Theme Development Code Architecture and Mobile UX',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify Theme Development Agency | FactoryJet.',
    description: 'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes with 95+ Core Web Vitals, zero bloat, and GitHub code ownership.',
    images: ['https://factoryjet.com/images/us/shopify-theme/hero.webp'],
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Shopify Theme Development', url: CANONICAL },
];

const PARTNERS = [
  'Shopify Plus Certified.',
  'Online Store 2.0 Architecture.',
  'Shopify Functions & Extensibility.',
  'Custom Liquid & JSON Templates.',
  'Vanilla Web Components.',
  'Figma Design System Tokens.',
  'GitHub Actions CI/CD.',
  'Klaviyo & Gorgias APIs.',
];

const THEME_PILLARS = [
  {
    num: 'Sub-1.2s.',
    title: 'Largest Contentful Paint.',
    desc: 'Critical CSS inlining, native image srcset art direction, and zero render-blocking framework scripts for instant mobile rendering.',
    icon: '⚡',
  },
  {
    num: '95+.',
    title: 'Mobile Performance Score.',
    desc: 'Eliminate heavy multi-purpose marketplace theme bloat. Pure semantic HTML5 and vanilla JavaScript web components with zero jQuery.',
    icon: '📈',
  },
  {
    num: 'Zero App Bloat.',
    title: 'Native Feature Engineering.',
    desc: 'Slide-out cart drawers with tiered free shipping bars, swatch selectors, sticky ATC bars, and bundle builders coded directly into the theme.',
    icon: '🛡️',
  },
  {
    num: '100% IP.',
    title: 'Clean GitHub Repository.',
    desc: 'You own 100% of the Liquid source code, SCSS/CSS design tokens, and deployment pipelines with zero recurring agency subscription fees.',
    icon: '💎',
  },
];

const BENCHMARK_ROWS = [
  {
    factor: 'Mobile Largest Contentful Paint (LCP).',
    custom: '0.8s - 1.2s (Sub-second visual completion).',
    marketplace: '2.8s - 5.5s (Heavy render-blocking asset queues).',
    headless: '0.6s - 1.0s (Edge static prerendering).',
  },
  {
    factor: 'Third-Party JavaScript Overhead.',
    custom: 'Sub-35KB minified Vanilla JS Web Components.',
    marketplace: '450KB - 1.8MB unminified multi-purpose JS scripts.',
    headless: '60KB - 120KB React 19 RSC streaming bundle.',
  },
  {
    factor: 'Merchandiser Layout Flexibility.',
    custom: '100% modular Section Schemas & block controls in JSON.',
    marketplace: 'Rigid layout options constrained by author theme schema.',
    headless: 'Managed via Headless CMS (Sanity / Contentful).',
  },
  {
    factor: 'Native Feature Integration (Cart, Swatches).',
    custom: 'Built directly into Liquid & CSS (Zero app subscriptions).',
    marketplace: 'Requires 8-15 third-party apps ($400-$1,200/mo extra).',
    headless: 'Engineered via custom React component API state.',
  },
  {
    factor: 'Shopify Admin Theme Editor Compatibility.',
    custom: '100% native live visual customizer with instant preview.',
    marketplace: '100% native live visual customizer.',
    headless: 'Requires separate CMS login & visual preview bridge.',
  },
  {
    factor: 'Cumulative Layout Shift (CLS).',
    custom: '0.00 (Zero layout shifting with explicit aspect ratios).',
    marketplace: '0.18 - 0.45 (High shifting as third-party apps inject DOM).',
    headless: '0.00 (Zero layout shifting with static server components).',
  },
  {
    factor: 'Ongoing Total Cost of Ownership (TCO).',
    custom: 'Lowest ongoing TCO (Zero extra app fees, zero extra hosting).',
    marketplace: 'High TCO ($4.8k-$15k/yr in recurring app subscription stacks).',
    headless: 'Moderate TCO (Requires edge frontend hosting $20-$150/mo).',
  },
  {
    factor: 'Recommended Brand Revenue Scale.',
    custom: 'Ideal for brands generating $1M - $25M annually.',
    marketplace: 'Suitable only for early-stage stores (< $1M annually).',
    headless: 'Ideal for high-growth enterprise brands ($5M - $100M+).',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01. Modular JSON Template Scaffold.',
    tech: 'Shopify Online Store 2.0 (OS 2.0) Architecture.',
    desc: 'Every template (product, collection, page, article, cart) is architected as dynamic JSON schemas, allowing merchants to reorder, add, and customize modular sections anywhere on the page.',
    points: [
      'Reusable sections and nested content blocks with granular merchant controls.',
      'Dynamic source metafield binding for technical specifications and dynamic badges.',
      'Zero hardcoded page layouts, providing complete marketing autonomy.',
    ],
  },
  {
    layer: '02. Ultra-Lean Asset Pipeline & CSS Tokens.',
    tech: 'Modular Fluid CSS Variables + Zero Heavy Frameworks.',
    desc: 'We discard bloated CSS frameworks like Bootstrap and unoptimized utility classes, coding a bespoke design system with fluid typography and CSS custom properties.',
    points: [
      'Critical path CSS inlined directly in theme.liquid for instantaneous render tree construction.',
      'Native image srcset generation with automated WebP/AVIF format delivery.',
      'Zero layout shifts (CLS = 0.00) using modern CSS aspect-ratio properties.',
    ],
  },
  {
    layer: '03. Vanilla JS Web Components & Ajax Engine.',
    tech: 'Custom Web Components + Shopify Section Rendering API.',
    desc: 'High-performance interactive elements (slide-out cart drawer, collection faceted filters, variant image switchers) built using native browser Custom Elements.',
    points: [
      'Instant sub-50ms slide-out cart drawer updates via Section Rendering API.',
      'Faceted collection filtering without full page refreshes or third-party apps.',
      'Zero jQuery, zero Lodash, and zero heavy client-side JavaScript libraries.',
    ],
  },
  {
    layer: '04. Shopify Functions & Extensibility Engine.',
    tech: 'Shopify Functions (WebAssembly) + Checkout UI Extensions.',
    desc: 'Uses server-side Shopify Functions to execute custom bundle discounts, tier pricing, and shipping validation logic directly within Shopify’s checkout backend.',
    points: [
      'Server-side volume tiered pricing executed with zero client latency.',
      'Post-purchase 1-click upsell offers built with Checkout UI Extensions.',
      'Frictionless multi-currency and multi-language routing via Shopify Markets.',
    ],
  },
];

const SPRINT_ROADMAP = [
  {
    phase: 'Phase 1: UX/UI Design & Design System Tokenization.',
    timeline: 'Weeks 1 - 2.',
    desc: 'We translate your Figma or Adobe XD brand designs into a comprehensive e-commerce design system, defining responsive typographic scales, color tokens, and interactive component states.',
    deliverables: [
      'Complete desktop and mobile UX/UI wireframe and prototype sign-off.',
      'Design token dictionary (colors, typography, spacing, border radii, shadows).',
      'High-converting Product Detail Page (PDP) layout blueprint with sticky ATC and trust badges.',
      'Interactive collection page filtering and sorting state specification.',
    ],
  },
  {
    phase: 'Phase 2: Core Liquid Architecture & Section Scaffold.',
    timeline: 'Weeks 3 - 4.',
    desc: 'We build the foundational Online Store 2.0 theme structure using Shopify CLI, creating clean JSON templates, global layout wrappers, and reusable section schema definitions.',
    deliverables: [
      'Clean GitHub repository initialized with Shopify CLI and automated linting.',
      'Modular header, announcement bar, navigation drawer, and mega-menu architecture.',
      'Dynamic footer with multi-column links, currency selectors, and newsletter capture.',
      'Global typography and CSS token compilation with zero unminified styles.',
    ],
  },
  {
    phase: 'Phase 3: High-Converting PDP & Quick-Buy Engineering.',
    timeline: 'Weeks 5 - 6.',
    desc: 'Our engineers develop pixel-perfect, accessible Product Detail Pages with real-time variant switching, dynamic stock status badges, video media galleries, and sticky purchase bars.',
    deliverables: [
      'Sub-second PDP with real-time color swatch selection and variant image filtering.',
      'Dynamic bundle builder and quantity tiered pricing display with instant price updates.',
      'Accordion tabs for product details, ingredients, sizing charts, and shipping policies.',
      'Sticky Add-to-Cart bar on mobile viewport scroll for maximum conversion capture.',
    ],
  },
  {
    phase: 'Phase 4: Slide-Out Cart Drawer & Native App Replacements.',
    timeline: 'Weeks 7 - 8.',
    desc: 'We engineer high-impact conversion features natively into the theme, eliminating expensive third-party apps for cart drawers, progress bars, and product upsells.',
    deliverables: [
      'High-converting slide-out Ajax cart drawer with dynamic free shipping progress bar.',
      'In-cart 1-click cross-sell recommendations driven by Shopify Search & Discovery API.',
      'Native gift-with-purchase (GWP) and coupon code validation input directly in the cart.',
      'Decommissioning of 8-12 redundant third-party apps, saving $300-$1,000/month.',
    ],
  },
  {
    phase: 'Phase 5: Shopify Functions & App Stack Integration.',
    timeline: 'Week 9.',
    desc: 'We connect your essential marketing and operations platforms (Klaviyo, Gorgias, Reviews, ERP) and build custom server-side discount logic using Shopify Functions.',
    deliverables: [
      'Frictionless integration of customer review widgets (Okendo, Yotpo, Junip) with zero CLS.',
      'Klaviyo back-in-stock notifications and custom email event tracking integration.',
      'Shopify Functions for custom tiered wholesale discounts and VIP customer pricing.',
      'Gorgias live chat integration with deferred script loading for zero performance drag.',
    ],
  },
  {
    phase: 'Phase 6: Core Web Vitals Optimization & Cross-Device QA.',
    timeline: 'Week 10.',
    desc: 'We perform deep speed profiling using Chrome DevTools and automated Lighthouse CI, verifying 95+ mobile performance scores across real iOS and Android devices.',
    deliverables: [
      'Comprehensive cross-browser and cross-device automated regression testing.',
      'Core Web Vitals validation (LCP < 1.2s, CLS = 0.00, INP < 50ms on mobile).',
      'WCAG 2.1 AA accessibility compliance audit and keyboard navigation verification.',
      'Technical SEO schema verification (Product, AggregateOffer, BreadcrumbList, FAQPage).',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime Theme Publish & 30-Day Hypercare.',
    timeline: 'Launch Day & Post-Launch.',
    desc: 'We publish the custom theme live with zero downtime, verify live transactions, monitor real-time user sessions, and provide 30 days of dedicated engineering hypercare.',
    deliverables: [
      'Instant live theme publication with zero customer-facing downtime or broken links.',
      'Real-time checkout and payment settlement verification across credit cards and Shop Pay.',
      'Merchant team training session on managing Section Schemas and custom metafields.',
      '30-day dedicated post-launch hypercare engineering retainer with guaranteed SLA response.',
    ],
  },
];

const FAQS = [
  {
    question: "What is custom Shopify theme development?",
    answer: "Custom Shopify theme development builds a tailored store from scratch. We design to your exact specs and catalog rules. A custom theme contains zero unneeded code and zero bloat. It runs native conversion tools and hits 95+ mobile speed scores.",
  },
  {
    question: "How does a custom Shopify theme differ from a commercial marketplace theme?",
    answer: "Marketplace themes bundle hundreds of unused settings for generic stores. These unused scripts load on every page and slow down checkout. A custom theme runs lean Liquid 2.0 JSON templates. It delivers 3x faster speeds and higher mobile conversions.",
  },
  {
    question: "Why should we avoid installing 15+ third-party apps for simple theme features?",
    answer: "Each app injects external JavaScript and tracking pixels into your store. 15 apps create script conflicts and slow down mobile pages. We code cart drawers, swatches, and bundles directly into the theme. You get zero app fees and clean code.",
  },
  {
    question: "Will our marketing team be able to customize page layouts without coding?",
    answer: "Yes. We build every template using Shopify Online Store 2.0 Section Schemas. Marketers can add, reorder, and edit sections in the theme customizer. You get instant live previews with zero code edits.",
  },
  {
    question: "How fast will our custom Shopify theme load on mobile devices?",
    answer: "We target sub-1.2 second LCP and 95+ mobile performance scores on core templates. We achieve this by inlining critical CSS and using modern aspect ratios. We also use responsive image srcset and vanilla Web Components.",
  },
  {
    question: "How long does a custom Shopify theme development project take?",
    answer: "A complete custom theme project takes 6 to 10 weeks from design sign-off to launch. We work in structured weekly milestones with senior engineers. We guarantee clear progress and zero delays.",
  },
  {
    question: "Can you migrate our existing store data to the new custom theme without downtime?",
    answer: "Yes. All development occurs in a private staging environment. Your live store remains active and processes customer orders normally. Publishing the theme is an instant one-click switch in the admin.",
  },
  {
    question: "How does custom theme development support B2B wholesale on Shopify Plus?",
    answer: "For Shopify Plus brands, we build B2B wholesale features directly into the theme. We configure customer price lists, tiered breaks, and Net terms. We also build wholesale forms with zero extra app fees.",
  },
  {
    question: "What is the pricing model for a custom Shopify theme build?",
    answer: "We work on transparent fixed-price milestone contracts based on scope. You get a clear statement of work and delivery timeline. There are no hourly billing surprises or hidden agency fees.",
  },
  {
    question: "Who owns the theme source code after launch?",
    answer: "You own 100% of the source code. All Liquid files, JSON schemas, styles, and GitHub CI/CD workflows transfer to your repository. You retain complete intellectual property ownership.",
  },
  {
    question: "How do custom themes handle Shopify metaobjects and custom metafields?",
    answer: "We use native Shopify Metafields and Metaobjects for dynamic content. We bind tech specs, size guides, and ingredient lists into section schemas. Your marketing team can update them easily.",
  },
  {
    question: "Can we use Shopify Functions for custom cart discounts with our theme?",
    answer: "Yes. Shopify Functions run custom server-side discount logic via WebAssembly. We build volume pricing, spend tiers, and cart rules that execute in sub-50ms with zero script delay.",
  },
  {
    question: "How do you ensure our custom theme is accessible and WCAG compliant?",
    answer: "We build all theme elements to meet WCAG 2.1 AA guidelines. We use semantic HTML5 elements and high contrast ratios. We also provide full keyboard navigation and clear ARIA labels.",
  },
  {
    question: "How does custom theme development compare to headless Next.js 15?",
    answer: "A custom Liquid 2.0 theme is the fastest path to sub-second speeds for brands making $1M to $25M. You manage everything in the Shopify Theme Editor without extra hosting. Headless Next.js 15 fits complex multi-channel systems.",
  },
  {
    question: "How do you prevent theme code conflicts when multiple developers work on our store?",
    answer: "We use professional Git workflows with GitHub and the Shopify CLI. Developers work in isolated branches and test with Theme Check linters. Automated checks prevent broken code in production.",
  },
  {
    question: "Will our custom theme support international multi-currency and multi-language selling?",
    answer: "Yes. Our themes natively support Shopify Markets. We build dynamic currency pickers and region selectors. Content translates smoothly using server-side localized strings.",
  },
  {
    question: "How are customer reviews and UGC integrated into custom themes?",
    answer: "We integrate review platforms like Okendo, Yotpo, and Junip with asynchronous scripts. We set explicit container heights to prevent layout shifts. Google indexes product rich snippets cleanly.",
  },
  {
    question: "What ongoing maintenance is required for a custom Shopify theme?",
    answer: "Custom themes have minimal maintenance needs because they avoid fragile third-party scripts. We provide ongoing conversion optimization sprints and seasonal campaign updates as needed.",
  },
  {
    question: "Can you build custom product configurators and 3D visualizers into our theme?",
    answer: "Yes. We build lightweight 2D and 3D product visualizers using Canvas and vanilla JavaScript. Customers customize products live, and custom details attach to cart items cleanly.",
  },
  {
    question: "Who executes the theme development on our account?",
    answer: "Senior Shopify Plus developers lead all engineering under founder Bhavesh Barot. We never outsource your theme codebase to junior contractors. You get expert guidance throughout.",
  },
  {
    question: "Can custom themes handle complex B2B quantity price tiers on Shopify Plus?",
    answer: "Yes. We build native volume pricing tables into product templates for wholesale buyers. Clients see tiered discounts like $14 each for 50 units. Orders process smoothly.",
  },
  {
    question: "How do you handle custom typography without slowing down page load speeds?",
    answer: "We convert fonts to WOFF2 formats with subsetting. We host font files on Shopify’s CDN with font-display swap. This eliminates text flash and avoids external font delays.",
  },
  {
    question: "What is the process for auditing and deprecating old apps before theme launch?",
    answer: "We audit your active store apps line by line. We identify redundant apps replaced by native theme code. We uninstall them and clean up old Liquid files, saving monthly app fees.",
  },
  {
    question: "Do custom Shopify themes support video galleries and 3D AR product models?",
    answer: "Yes. We build media galleries that support MP4 videos and 3D AR models. Media assets lazy-load with IntersectionObserver so they do not slow down initial page rendering.",
  },
  {
    question: "How do you handle accessibility and ADA / WCAG compliance in custom themes?",
    answer: "We test themes against WCAG 2.1 AA standards. We verify keyboard focus traps in cart drawers and modals. Screen readers receive dynamic updates when variants change.",
  },
  {
    question: "Can we keep our existing customer accounts and order history when switching to a custom theme?",
    answer: "Yes. Switching themes updates only the frontend layout. Customer accounts, order histories, gift cards, and product data remain completely intact in your Shopify admin.",
  },
];

const themePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Custom Shopify Theme Development Services',
      description:
        'Custom Shopify Online Store 2.0 theme development agency engineering sub-second Liquid themes from scratch with 95+ Core Web Vitals, zero app bloat, and full GitHub code ownership.',
      provider: {
        '@type': 'Organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
        logo: 'https://factoryjet.com/FinalLogo.svg',
      },
      serviceType: 'E-Commerce Development',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Custom Shopify Theme Development Agency | Sub-Second Liquid 2.0 | FactoryJet',
      description: 'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes with 95+ Core Web Vitals, zero bloat, and GitHub code ownership.',
      datePublished: '2026-01-15',
      dateModified: PAGE_MODIFIED,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & Principal E-Commerce Architect',
        url: 'https://factoryjet.com/about',
      },
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

export default function ShopifyThemeDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(themePageSchema) }}
      />
      <SiteHeader />

      <main className="pp-main">
        <div className="pp-container" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" /> BESPOKE LIQUID 2.0 &amp; SUB-SECOND PERFORMANCE.
          </div>
          <h1 className="pp-hero-title">
            Custom Shopify Theme Development Agency: Sub-Second Performance, Zero App Bloat
          </h1>
          <p className="pp-hero-sub">
            Escape bloated marketplace themes and slow page load times. We engineer custom, bespoke Shopify Online Store 2.0 Liquid themes from scratch, delivering 95+ Google Lighthouse mobile scores, modular Section Schemas for effortless marketing customization, and 100% full GitHub source code ownership.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Shopify Theme Hero Lead"
              region="us"
              submitLabel="Request Free Theme Performance Audit →."
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#theme-architecture"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>📐</span> Explore Theme Architecture.
              </a>
              <ModalCTAButton
                label="Book Technical Discovery"
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
              src="/images/us/shopify-theme/hero.webp"
              alt="Bespoke Shopify Online Store 2.0 Theme Engineering Workspace"
              width={1024}
              height={1024}
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
                EXECUTIVE BRIEF
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Commercial Marketplace Themes Hurt High-Growth Brands
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  Commercial themes purchased from the Shopify Theme Store or Envato are designed to appeal to thousands of different businesses across dozens of industries. To achieve broad appeal, theme authors bundle hundreds of configurable settings, generic scripts, heavy slider libraries, and unminified CSS frameworks into a single massive codebase.
                </p>
                <p>
                  Generic themes force mobile browsers to download megabytes of unused code. When you add 10 to 20 third-party apps for cart drawers and swatches, speed collapses. Mobile Lighthouse scores drop below 40. Bounce rates surge while paid ad acquisition costs skyrocket.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>FactoryJet engineers bespoke Shopify Online Store 2.0 themes tailored specifically to your brand.</strong> We write clean, lightweight Liquid markup, modular fluid CSS variables, and native Vanilla JS Web Components. 
                </p>
                <p>
                  We engineer high-converting features natively into the theme source code. This eliminates $400 to $1,200 per month in third-party app fees. We deliver guaranteed <strong>sub-1.2s Largest Contentful Paint (LCP)</strong> and <strong>0.00 Cumulative Layout Shift (CLS)</strong>. Your marketing team gains full layout control through modular Section Schemas. Your business enjoys higher conversion rates and full GitHub code ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE THEME PILLARS TELEMETRY */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-grid-4">
              {THEME_PILLARS.map((s, i) => (
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

        {/* SECTION 1: THE CORE PROBLEM WITH COMMERCIAL THEMES */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">ENGINEERING DEEP DIVE.</span>
              <h2 className="pp-section-title">The Hidden Architectural Flaws of Generic Shopify Themes.</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Pre-built commercial themes try to serve every possible industry in a single file. Theme authors pack dozens of header styles, mega menus, and slider scripts into the codebase. They bundle heavy libraries like jQuery, Slick, and Lodash directly into core templates.
              </p>
              <p>
                Your store may use only 15% of those features. Yet mobile browsers must parse and execute 100% of that code on every page view. The main thread clogs up quickly. This causes painful <strong>Interaction to Next Paint (INP)</strong> lag and slow screen repaints.
              </p>
              <p>
                Marketers often install apps for countdowns, sticky add-to-cart bars, and currency pickers. Each app injects new scripts into <code>theme.liquid</code>. Soon, the store fires over 45 third-party script requests. Mobile load times exceed 5.5 seconds on mobile networks, destroying ad return on spend.
              </p>
              <p>
                This script drag harms search rankings. Google tracks real user field data through the Chrome User Experience Report. Poor LCP and CLS scores hurt organic rankings. Google Ads costs rise as landing page quality scores fall.
              </p>
              <p>
                Bespoke Online Store 2.0 themes eliminate this fragile patchwork. Our custom builds deliver 15% to 35% lifts in mobile conversion rates. At the same time, they permanently eliminate recurring app subscriptions.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMERCE ROI CALCULATOR */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">FINANCIAL MODELING.</span>
              <h2 className="pp-section-title">Calculate Your Theme Speed Conversion Uplift.</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate the direct annual revenue lift from eliminating render-blocking theme scripts and upgrading to sub-second mobile page loads.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* 4-LAYER CUSTOM THEME ARCHITECTURE */}
        <section id="theme-architecture" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">THEME ARCHITECTURE.</span>
              <h2 className="pp-section-title">The 4-Pillar Online Store 2.0 Theme Engineering Architecture.</h2>
              <p className="pp-section-sub">
                Built from the ground up for sub-second mobile Core Web Vitals, maximum merchandiser autonomy, and zero app dependency.
              </p>
            </div>

            <div className="pp-grid-2">
              {ARCHITECTURE_LAYERS.map((l, i) => (
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

            <div style={{ marginTop: '3rem', width: '100%', maxWidth: '1000px', margin: '3rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src="/images/us/shopify-theme/theme-architecture.webp"
                alt="Modular Shopify Online Store 2.0 Section Schema Hierarchy and Asset Pipeline Architecture"
                width={1200}
                height={896}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: SUB-SECOND PERFORMANCE & CRITICAL PATH */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">PERFORMANCE ENGINEERING.</span>
              <h2 className="pp-section-title">The Sub-Second Mobile Performance Blueprint.</h2>
              <p className="pp-section-sub">
                How we achieve 95+ mobile scores by optimizing every step of the critical rendering path.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Sub-second LCP on mobile requires strict critical path control. We inline critical CSS directly in document headers so browsers construct render trees immediately. Every image uses native picture and srcset markup to serve WebP and AVIF formats sized for the device screen.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>Critical CSS Inlining.</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    We inline above-the-fold styles directly in HTML. Browsers paint the hero section without waiting for external stylesheets.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>Zero Layout Shift (CLS = 0.00).</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    We enforce strict aspect ratios on images and banners. The page layout remains stable while assets load.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>Vanilla Web Components.</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    Interactive cart drawers and swatch pickers run on native browser APIs. Scripts stay under 35KB with zero framework bloat.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>Asset Prioritization.</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    We prioritize hero images with fetchpriority high. Below-the-fold media lazy-loads as shoppers scroll down the page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: NATIVE FEATURE ENGINEERING & ZERO APP SUBSCRIPTIONS */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">FEATURE CONSOLIDATION.</span>
              <h2 className="pp-section-title">Zero-App Native Feature Engineering.</h2>
              <p className="pp-section-sub">
                Replace 10+ paid app subscriptions with clean, native Liquid and JavaScript code.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Third-party apps inject slow scripts and tracking pixels into store layouts. We build high-converting features directly into theme templates to cut monthly SaaS bills.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Slide-Out Cart Drawer:</strong> Tiered free shipping meters, dynamic order notes, and one-click cross-sells run natively via the Ajax Cart API.
                </li>
                <li>
                  <strong>Color &amp; Image Swatches:</strong> Instant variant selection updates product pricing, inventory badges, and main media gallery with zero page reloads.
                </li>
                <li>
                  <strong>Sticky Add-to-Cart Bar:</strong> Persistent purchasing actions reveal automatically when buyers scroll past primary mobile call-to-actions.
                </li>
                <li>
                  <strong>Bundle &amp; Tiered Pricing UI:</strong> Quantity-based volume discounts and pre-packaged kits calculate directly in theme Liquid with zero app lag.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: SECTION SCHEMAS & MARKETING INDEPENDENCE */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">MERCHANT AUTONOMY.</span>
              <h2 className="pp-section-title">Section Schemas &amp; Marketing Independence.</h2>
              <p className="pp-section-sub">
                Enable your marketing team to build high-converting landing pages without developer tickets.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Our theme templates utilize modular Online Store 2.0 Section Schemas. Marketers can drag, drop, and configure sections across any page template.
              </p>
              <p>
                Every section features intuitive presets, granular spacing controls, and responsive visibility toggles. Marketing teams launch seasonal campaigns and promo banners in minutes without editing code.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SHOPIFY FUNCTIONS & WEBASSEMBLY */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">SERVER-SIDE LOGIC.</span>
              <h2 className="pp-section-title">Shopify Functions &amp; WebAssembly Execution.</h2>
              <p className="pp-section-sub">
                Run complex B2B pricing, cart validations, and tier discounts server-side at under 50ms.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Legacy client-side discount scripts cause price flicker and checkout errors. We build server-side business rules using Shopify Functions compiled to WebAssembly. These rules execute at sub-50ms speeds directly in core checkout.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Volume Tier Discounts.</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Automatic spend tiers apply instantly in cart without client-side calculation delays.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Gift-With-Purchase Rules.</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Automated free gifts add when cart totals qualify, and remove if items are deleted.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Checkout Validation.</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Enforce order minimums and maximum unit limits server-side before payment capture.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Payment &amp; Shipping Rules.</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Dynamically display or hide payment options and calculate custom freight rates live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TECHNICAL SEO & GLOBAL COMMERCE */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">GLOBAL COMMERCE &amp; SEO.</span>
              <h2 className="pp-section-title">Technical SEO &amp; Multi-Market Architecture.</h2>
              <p className="pp-section-sub">
                Enterprise search visibility, multi-currency localization, and WCAG accessibility.
              </p>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Page speed drives conversions, but search visibility drives discovery. Every custom theme includes rich JSON-LD schema graphs for Product, Offer, Brand, and BreadcrumbList entities. This maximizes Google rich snippet eligibility for reviews, prices, and stock status.
              </p>
              <p>
                We build multi-currency and multi-language support directly into the theme using Shopify Markets. Shoppers see localized prices and currencies with instant switching. All components follow WCAG 2.1 AA standards for keyboard access and screen readers.
              </p>
            </div>
          </div>
        </section>
        {/* CUSTOM THEME VS MARKETPLACE VS HEADLESS COMPARISON TABLE */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">HEAD-TO-HEAD BENCHMARK.</span>
              <h2 className="pp-section-title">Custom Liquid 2.0 Theme vs. Marketplace Theme vs. Headless.</h2>
              <p className="pp-section-sub">
                An objective architectural comparison across speed, code bloat, merchandiser flexibility, and total cost of ownership.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architectural Dimension.</th>
                    <th style={{ color: '#f97316' }}>Custom Liquid 2.0 (FactoryJet).</th>
                    <th>Commercial Marketplace Theme.</th>
                    <th>Headless Next.js 15 Commerce.</th>
                  </tr>
                </thead>
                <tbody>
                  {BENCHMARK_ROWS.map((r, i) => (
                    <tr key={i}>
                      <td className="pp-table-factor">{r.factor}</td>
                      <td className="pp-table-headless">{r.custom}</td>
                      <td className="pp-table-liquid">{r.marketplace}</td>
                      <td className="pp-table-hydrogen">{r.headless}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7-PHASE SPRINT ROADMAP (35+ DELIVERABLES) */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SPRINT METHODOLOGY.</span>
              <h2 className="pp-section-title">The 10-Week Custom Theme Engineering Sprint Roadmap.</h2>
              <p className="pp-section-sub">
                A structured, milestone-driven theme engineering process designed for complete transparency, pixel perfection, and zero launch day risk.
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

        {/* COMPREHENSIVE 20+ PAA FAQS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <FAQ
              headline="Frequently Asked Questions"
              lead="Granular, transparent answers to the most critical technical, commercial, performance, and operational custom Shopify theme questions."
              items={FAQS}
            />
          </div>
        </section>

        {/* FOUNDER E-E-A-T AUTHOR CARD */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '850px' }}>
            <AuthorCard variant="dark" />
          </div>
        </section>

        {/* REGIONAL SILO INTERLINKING */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container">
            <div className="pp-section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="pp-badge">US REGIONAL COVERAGE.</span>
              <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>
                Local E-Commerce Engineering Teams Across Major US Markets
              </h2>
            </div>
            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
