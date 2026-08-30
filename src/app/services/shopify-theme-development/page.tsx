import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
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
  title: 'Custom Shopify Theme Development Agency | Sub-Second Liquid 2.0 | FactoryJet',
  description:
    'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes from scratch, delivering 95+ Core Web Vitals, zero app bloat, and full GitHub code ownership.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Custom Shopify Theme Development Agency | Sub-Second Liquid 2.0 | FactoryJet',
    description:
      'Custom Shopify theme development agency. We engineer bespoke Online Store 2.0 Liquid themes from scratch, delivering 95+ Core Web Vitals, zero app bloat, and full GitHub code ownership.',
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
    title: 'Custom Shopify Theme Development Agency | Sub-Second Liquid 2.0 | FactoryJet',
    description:
      'Custom Shopify theme development agency. Bespoke Liquid 2.0 theme engineering with sub-second mobile Core Web Vitals and zero app bloat.',
    images: ['https://factoryjet.com/images/us/shopify-theme/hero.webp'],
  },
};

const PARTNERS = [
  'Shopify Plus Certified',
  'Online Store 2.0 Architecture',
  'Shopify Functions & Extensibility',
  'Custom Liquid & JSON Templates',
  'Vanilla Web Components',
  'Figma Design System Tokens',
  'GitHub Actions CI/CD',
  'Klaviyo & Gorgias APIs',
];

const THEME_PILLARS = [
  {
    num: 'Sub-1.2s',
    title: 'Largest Contentful Paint',
    desc: 'Critical CSS inlining, native image srcset art direction, and zero render-blocking framework scripts for instant mobile rendering.',
    icon: '⚡',
  },
  {
    num: '95+',
    title: 'Mobile Performance Score',
    desc: 'Eliminate heavy multi-purpose marketplace theme bloat. Pure semantic HTML5 and vanilla JavaScript web components with zero jQuery.',
    icon: '📈',
  },
  {
    num: 'Zero App Bloat',
    title: 'Native Feature Engineering',
    desc: 'Slide-out cart drawers with tiered free shipping bars, swatch selectors, sticky ATC bars, and bundle builders coded directly into the theme.',
    icon: '🛡️',
  },
  {
    num: '100% IP',
    title: 'Clean GitHub Repository',
    desc: 'You own 100% of the Liquid source code, SCSS/CSS design tokens, and deployment pipelines with zero recurring agency subscription fees.',
    icon: '💎',
  },
];

const BENCHMARK_ROWS = [
  {
    factor: 'Mobile Largest Contentful Paint (LCP)',
    custom: '0.8s - 1.2s (Sub-second visual completion)',
    marketplace: '2.8s - 5.5s (Heavy render-blocking asset queues)',
    headless: '0.6s - 1.0s (Edge static prerendering)',
  },
  {
    factor: 'Third-Party JavaScript Overhead',
    custom: 'Sub-35KB minified Vanilla JS Web Components',
    marketplace: '450KB - 1.8MB unminified multi-purpose JS scripts',
    headless: '60KB - 120KB React 19 RSC streaming bundle',
  },
  {
    factor: 'Merchandiser Layout Flexibility',
    custom: '100% modular Section Schemas & block controls in JSON',
    marketplace: 'Rigid layout options constrained by author theme schema',
    headless: 'Managed via Headless CMS (Sanity / Contentful)',
  },
  {
    factor: 'Native Feature Integration (Cart, Swatches)',
    custom: 'Built directly into Liquid & CSS (Zero app subscriptions)',
    marketplace: 'Requires 8-15 third-party apps ($400-$1,200/mo extra)',
    headless: 'Engineered via custom React component API state',
  },
  {
    factor: 'Shopify Admin Theme Editor Compatibility',
    custom: '100% native live visual customizer with instant preview',
    marketplace: '100% native live visual customizer',
    headless: 'Requires separate CMS login & visual preview bridge',
  },
  {
    factor: 'Cumulative Layout Shift (CLS)',
    custom: '0.00 (Zero layout shifting with explicit aspect ratios)',
    marketplace: '0.18 - 0.45 (High shifting as third-party apps inject DOM)',
    headless: '0.00 (Zero layout shifting with static server components)',
  },
  {
    factor: 'Ongoing Total Cost of Ownership (TCO)',
    custom: 'Lowest ongoing TCO (Zero extra app fees, zero extra hosting)',
    marketplace: 'High TCO ($4.8k-$15k/yr in recurring app subscription stacks)',
    headless: 'Moderate TCO (Requires edge frontend hosting $20-$150/mo)',
  },
  {
    factor: 'Recommended Brand Revenue Scale',
    custom: 'Ideal for brands generating $1M - $25M annually',
    marketplace: 'Suitable only for early-stage stores (< $1M annually)',
    headless: 'Ideal for high-growth enterprise brands ($5M - $100M+)',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01. Modular JSON Template Scaffold',
    tech: 'Shopify Online Store 2.0 (OS 2.0) Architecture',
    desc: 'Every template (product, collection, page, article, cart) is architected as dynamic JSON schemas, allowing merchants to reorder, add, and customize modular sections anywhere on the page.',
    points: [
      'Reusable sections and nested content blocks with granular merchant controls',
      'Dynamic source metafield binding for technical specifications and dynamic badges',
      'Zero hardcoded page layouts, providing complete marketing autonomy',
    ],
  },
  {
    layer: '02. Ultra-Lean Asset Pipeline & CSS Tokens',
    tech: 'Modular Fluid CSS Variables + Zero Heavy Frameworks',
    desc: 'We discard bloated CSS frameworks like Bootstrap and unoptimized utility classes, coding a bespoke design system with fluid typography and CSS custom properties.',
    points: [
      'Critical path CSS inlined directly in theme.liquid for instantaneous render tree construction',
      'Native image srcset generation with automated WebP/AVIF format delivery',
      'Zero layout shifts (CLS = 0.00) using modern CSS aspect-ratio properties',
    ],
  },
  {
    layer: '03. Vanilla JS Web Components & Ajax Engine',
    tech: 'Custom Web Components + Shopify Section Rendering API',
    desc: 'High-performance interactive elements (slide-out cart drawer, collection faceted filters, variant image switchers) built using native browser Custom Elements.',
    points: [
      'Instant sub-50ms slide-out cart drawer updates via Section Rendering API',
      'Faceted collection filtering without full page refreshes or third-party apps',
      'Zero jQuery, zero Lodash, and zero heavy client-side JavaScript libraries',
    ],
  },
  {
    layer: '04. Shopify Functions & Extensibility Engine',
    tech: 'Shopify Functions (WebAssembly) + Checkout UI Extensions',
    desc: 'Leverages server-side Shopify Functions to execute custom bundle discounts, tier pricing, and shipping validation logic directly within Shopify’s checkout backend.',
    points: [
      'Server-side volume tiered pricing executed with zero client latency',
      'Post-purchase 1-click upsell offers built with Checkout UI Extensions',
      'Frictionless multi-currency and multi-language routing via Shopify Markets',
    ],
  },
];

const SPRINT_ROADMAP = [
  {
    phase: 'Phase 1: UX/UI Design & Design System Tokenization',
    timeline: 'Weeks 1 - 2',
    desc: 'We translate your Figma or Adobe XD brand designs into a comprehensive e-commerce design system, defining responsive typographic scales, color tokens, and interactive component states.',
    deliverables: [
      'Complete desktop and mobile UX/UI wireframe and prototype sign-off',
      'Design token dictionary (colors, typography, spacing, border radii, shadows)',
      'High-converting Product Detail Page (PDP) layout blueprint with sticky ATC and trust badges',
      'Interactive collection page filtering and sorting state specification',
    ],
  },
  {
    phase: 'Phase 2: Core Liquid Architecture & Section Scaffold',
    timeline: 'Weeks 3 - 4',
    desc: 'We build the foundational Online Store 2.0 theme structure using Shopify CLI, creating clean JSON templates, global layout wrappers, and reusable section schema definitions.',
    deliverables: [
      'Clean GitHub repository initialized with Shopify CLI and automated linting',
      'Modular header, announcement bar, navigation drawer, and mega-menu architecture',
      'Dynamic footer with multi-column links, currency selectors, and newsletter capture',
      'Global typography and CSS token compilation with zero unminified styles',
    ],
  },
  {
    phase: 'Phase 3: High-Converting PDP & Quick-Buy Engineering',
    timeline: 'Weeks 5 - 6',
    desc: 'Our engineers develop pixel-perfect, accessible Product Detail Pages with real-time variant switching, dynamic stock status badges, video media galleries, and sticky purchase bars.',
    deliverables: [
      'Sub-second PDP with real-time color swatch selection and variant image filtering',
      'Dynamic bundle builder and quantity tiered pricing display with instant price updates',
      'Accordion tabs for product details, ingredients, sizing charts, and shipping policies',
      'Sticky Add-to-Cart bar on mobile viewport scroll for maximum conversion capture',
    ],
  },
  {
    phase: 'Phase 4: Slide-Out Cart Drawer & Native App Replacements',
    timeline: 'Weeks 7 - 8',
    desc: 'We engineer high-impact conversion features natively into the theme, eliminating expensive third-party apps for cart drawers, progress bars, and product upsells.',
    deliverables: [
      'High-converting slide-out Ajax cart drawer with dynamic free shipping progress bar',
      'In-cart 1-click cross-sell recommendations driven by Shopify Search & Discovery API',
      'Native gift-with-purchase (GWP) and coupon code validation input directly in the cart',
      'Decommissioning of 8-12 redundant third-party apps, saving $300-$1,000/month',
    ],
  },
  {
    phase: 'Phase 5: Shopify Functions & App Stack Integration',
    timeline: 'Week 9',
    desc: 'We connect your essential marketing and operations platforms (Klaviyo, Gorgias, Reviews, ERP) and build custom server-side discount logic using Shopify Functions.',
    deliverables: [
      'Frictionless integration of customer review widgets (Okendo, Yotpo, Junip) with zero CLS',
      'Klaviyo back-in-stock notifications and custom email event tracking integration',
      'Shopify Functions for custom tiered wholesale discounts and VIP customer pricing',
      'Gorgias live chat integration with deferred script loading for zero performance drag',
    ],
  },
  {
    phase: 'Phase 6: Core Web Vitals Optimization & Cross-Device QA',
    timeline: 'Week 10',
    desc: 'We perform deep speed profiling using Chrome DevTools and automated Lighthouse CI, verifying 95+ mobile performance scores across real iOS and Android devices.',
    deliverables: [
      'Comprehensive cross-browser and cross-device automated regression testing',
      'Core Web Vitals validation (LCP < 1.2s, CLS = 0.00, INP < 50ms on mobile)',
      'WCAG 2.1 AA accessibility compliance audit and keyboard navigation verification',
      'Technical SEO schema verification (Product, AggregateOffer, BreadcrumbList, FAQPage)',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime Theme Publish & 30-Day Hypercare',
    timeline: 'Launch Day & Post-Launch',
    desc: 'We publish the custom theme live with zero downtime, verify live transactions, monitor real-time user sessions, and provide 30 days of dedicated engineering hypercare.',
    deliverables: [
      'Instant live theme publication with zero customer-facing downtime or broken links',
      'Real-time checkout and payment settlement verification across credit cards and Shop Pay',
      'Merchant team training session on managing Section Schemas and custom metafields',
      '30-day dedicated post-launch hypercare engineering retainer with guaranteed SLA response',
    ],
  },
];

const FAQS = [
  {
    q: 'What is custom Shopify theme development?',
    a: 'Custom Shopify theme development is the process of engineering a bespoke e-commerce storefront from the ground up tailored precisely to your brand’s UX/UI designs, catalog structure, and business logic. Unlike generic commercial off-the-shelf themes bought on the Shopify Theme Store or Envato, a custom theme contains zero unneeded code, zero bloat, native conversion features (slide-out cart, swatches, bundles), and achieves 95+ Google Lighthouse mobile performance scores.',
  },
  {
    q: 'How does a custom Shopify theme differ from a commercial marketplace theme?',
    a: 'Commercial marketplace themes (like Prestige, Impulse, or Warehouse) are built to serve thousands of different businesses. To appeal to everyone, they bundle hundreds of unused features, generic layout options, and massive JavaScript/CSS libraries that execute on every page load regardless of whether you use them. A custom FactoryJet theme is engineered strictly for your specific brand requirements using lean Online Store 2.0 JSON templates, custom CSS tokens, and vanilla Web Components, resulting in 3x faster page loads and significantly higher mobile conversion rates.',
  },
  {
    q: 'Why should we avoid installing 15+ third-party apps for simple theme features?',
    a: 'Every third-party app installed from the Shopify App Store injects its own external JavaScript files, CSS stylesheets, and tracking pixels into your store’s critical rendering path. Having 15-20 apps creates severe script conflicts, increases mobile page weight to 5MB+, degrades Core Web Vitals scores, and introduces perpetual monthly SaaS subscription costs ($400-$1,500/mo). FactoryJet codes features like slide-out cart drawers, swatch selectors, sticky ATC bars, accordion tabs, and bundle builders natively into your theme source code with zero app fees.',
  },
  {
    q: 'Will our marketing team be able to customize page layouts without coding?',
    a: 'Yes, 100%. We architect every template using Shopify Online Store 2.0 (OS 2.0) Section Schemas. Your merchandisers and marketing team can add, delete, reorder, and configure dynamic visual sections (banners, lookbooks, product carousels, video modules, FAQ accordions) directly inside the native Shopify Theme Editor visual customizer with instant live preview and zero technical assistance required.',
  },
  {
    q: 'How fast will our custom Shopify theme load on mobile devices?',
    a: 'We guarantee sub-1.2 second Largest Contentful Paint (LCP) and 95+ Google Lighthouse mobile performance scores on core product and collection templates. We achieve this by inlining critical CSS, utilizing modern CSS aspect-ratio properties to eliminate Cumulative Layout Shift (CLS = 0.00), implementing native image srcset responsive compression, and executing interactive logic via ultra-lean Vanilla JS Web Components.',
  },
  {
    q: 'How long does a custom Shopify theme development project take?',
    a: 'A complete bespoke Shopify Online Store 2.0 theme development sprint typically takes 6 to 10 weeks from initial UX/UI design tokenization to live zero-downtime publication. FactoryJet operates with dedicated senior engineering teams and clear weekly milestone sprint reviews.',
  },
  {
    q: 'Can you migrate our existing store data to the new custom theme without downtime?',
    a: 'Yes. All custom theme development takes place in a private staging environment linked to your Shopify store or a development clone. Your live store remains 100% active and continues taking orders without interruption. When the custom theme is approved, publishing it is an instantaneous, zero-downtime 1-click operation in the Shopify admin.',
  },
  {
    q: 'How does custom theme development support B2B wholesale on Shopify Plus?',
    a: 'For Shopify Plus merchants, we build custom B2B storefront experiences natively into the theme. We integrate customer-specific price lists, quantity tiered breaks, Net payment terms, parent-child company location selectors, and quick-order wholesale forms without requiring third-party wholesale apps or duplicate clone stores.',
  },
  {
    q: 'What is the pricing model for a custom Shopify theme build?',
    a: 'FactoryJet operates on transparent, fixed-price sprint pricing based on the scope of your custom design, page template count, and custom feature requirements. There are zero hourly billing surprises or perpetual agency software licensing fees. You receive a guaranteed fixed scope and delivery timeline.',
  },
  {
    q: 'Who owns the theme source code after launch?',
    a: 'You do. 100%. All Liquid templates, JSON schemas, SCSS/CSS design tokens, JavaScript modules, and GitHub Actions CI/CD workflows are committed directly to your private company GitHub or GitLab repository with complete intellectual property ownership transferred upon project sign-off.',
  },
  {
    q: 'How do custom themes handle Shopify metaobjects and custom metafields?',
    a: 'We utilize native Shopify Metafields and Metaobjects to build sophisticated dynamic content systems. Whether you need technical specification tables, size guides, designer profiles, ingredient lists, or color swatch hex mappings, we bind metafields directly into our modular Liquid section schemas for effortless merchant editing.',
  },
  {
    q: 'Can we use Shopify Functions for custom cart discounts with our theme?',
    a: 'Yes. Shopify Functions allow us to build custom server-side business logic, such as tiered spend-and-get discounts, volume pricing breaks, bundle discounts, and custom shipping validation rules, that execute in WebAssembly within Shopify’s checkout backend at sub-50ms speeds with zero client-side JavaScript delay.',
  },
  {
    q: 'How do you ensure our custom theme is accessible and WCAG compliant?',
    a: 'We build all theme components adhering to WCAG 2.1 AA accessibility guidelines. This includes semantic HTML5 element hierarchy, high-contrast color ratios, full keyboard navigability for interactive modals and drawers, descriptive ARIA labels for screen readers, and focus-visible indicators across all interactive elements.',
  },
  {
    q: 'How does custom theme development compare to headless Next.js 15?',
    a: 'A custom Liquid 2.0 theme is the fastest, most cost-effective path to sub-second performance for brands generating $1M to $25M annually who want to manage 100% of their site within the native Shopify Theme Editor without maintaining external hosting infrastructure. Headless Next.js 15 is recommended for brands with complex omnichannel needs, custom non-Shopify backends, or editorial lookbooks requiring decoupled CMS architecture.',
  },
  {
    q: 'How do you prevent theme code conflicts when multiple developers work on our store?',
    a: 'We establish a professional Git workflow using GitHub or GitLab connected to the Shopify CLI. Developers work in isolated feature branches, run automated Theme Check linters and unit tests via GitHub Actions, and deploy to preview themes for QA before merging into the main branch, eliminating overwrites and production regressions.',
  },
  {
    q: 'Will our custom theme support international multi-currency and multi-language selling?',
    a: 'Yes. Our custom themes natively support Shopify Markets. We build dynamic currency selectors, geolocation popups, language switchers, and localized pricing displays that integrate directly with Shopify’s native multi-market catalog and checkout routing.',
  },
  {
    q: 'How are customer reviews and UGC integrated into custom themes?',
    a: 'We integrate leading customer review platforms (Okendo, Yotpo, Junip, Judge.me) using clean, asynchronous markup with explicit container dimensions. This prevents Cumulative Layout Shift (CLS) when reviews load and ensures complete review rich snippet JSON-LD schema indexation in Google search results.',
  },
  {
    q: 'What ongoing maintenance is required for a custom Shopify theme?',
    a: 'Because a custom theme contains zero fragile third-party app scripts and uses clean, standard Liquid 2.0 architecture, maintenance overhead is minimal. FactoryJet provides ongoing conversion rate optimization (CRO) sprints, seasonal campaign builds, and feature enhancement retainers to continually strengthen your store’s performance.',
  },
  {
    q: 'Can you build custom product configurators and 3D visualizers into our theme?',
    a: 'Yes. We engineer interactive 2D/3D product customizers, live preview engraving tools, and visual bundle configurators using lightweight WebGL, Canvas, and vanilla JavaScript that fluidly attach custom line item properties to the Shopify cart without slowing down initial page loads.',
  },
  {
    q: 'Who executes the theme development on our account?',
    a: 'All engineering is led directly by senior Shopify Plus developers and frontend architects under the direct technical supervision of founder Bhavesh Barot. We never outsource your theme codebase to junior offshore contractors, ensuring elite code quality and architectural integrity.',
  },
  {
    q: 'Can custom themes handle complex B2B quantity price tiers on Shopify Plus?',
    a: 'Yes. For Shopify Plus brands selling wholesale, we build native B2B catalog tables directly into the product template. Wholesale buyers can view volume tiered discount tables (e.g., 50+ units: $14/ea, 200+ units: $11/ea), select multi-location shipping addresses, and submit quick purchase orders without third-party wholesale apps or duplicate store databases.',
  },
  {
    q: 'How do you handle custom typography without slowing down page load speeds?',
    a: 'We convert your brand’s custom typography files into optimized, modern WOFF2 formats with full character subsetting. Rather than loading external render-blocking font files from Google Fonts or Adobe Typekit, we host the WOFF2 files directly on Shopify’s global CDN and apply CSS font-display: swap with local font fallbacks, eliminating FOIT (Flash of Invisible Text) and 300ms+ font latency.',
  },
  {
    q: 'What is the process for auditing and deprecating old apps before theme launch?',
    a: 'During Phase 4 of our sprint roadmap, we perform a line-by-line audit of your existing store apps. We identify redundant apps providing features (such as cart drawers, swatch selectors, sticky ATC bars, and size charts) that are now built natively into your custom theme. We safely uninstall those apps, delete legacy orphaned Liquid snippets from your store files, and eliminate hundreds of dollars in monthly SaaS fees.',
  },
  {
    q: 'Do custom Shopify themes support video galleries and 3D AR product models?',
    a: 'Yes, 100%. We engineer native media gallery components that support responsive YouTube, Vimeo, and MP4 video players, as well as interactive 3D AR models using Shopify’s model-viewer API. Video players and 3D models are lazy-loaded via IntersectionObserver, ensuring zero impact on initial above-the-fold mobile load times.',
  },
  {
    q: 'How do you handle accessibility and ADA / WCAG compliance in custom themes?',
    a: 'We engineer all theme components strictly to WCAG 2.1 AA accessibility standards. This includes full keyboard navigation support, focus trapping within open slide-out cart drawers and quick-view modals, high-contrast color ratios, dynamic ARIA live regions for variant stock updates, and descriptive screen reader tags across all interactive elements.',
  },
  {
    q: 'Can we keep our existing customer accounts and order history when switching to a custom theme?',
    a: 'Yes, absolutely. Switching themes changes only the frontend presentation layer of your online store. Your underlying Shopify customer accounts, order histories, active gift cards, discount codes, inventory levels, and product catalogs remain 100% intact and unaffected in your Shopify admin.',
  },
];

const JSON_LD = {
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
        logo: 'https://factoryjet.com/images/logo.png',
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
      description:
        'Custom Shopify theme development agency. We engineer sub-second Online Store 2.0 Liquid themes from scratch, delivering 95+ Core Web Vitals, zero app bloat, and full GitHub code ownership.',
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
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <SiteHeader />

      <main className="pp-main">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" />
            BESPOKE LIQUID 2.0 &amp; SUB-SECOND PERFORMANCE
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
              submitLabel="Request Free Theme Performance Audit →"
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#theme-architecture"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>📐</span> Explore Theme Architecture
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
                  When you launch with a generic theme, your customers’ mobile browsers must download and parse megabytes of unused code on every page load. Worse, when you install 10 to 20 third-party apps to add missing features, like slide-out cart drawers, swatch selectors, and bundle builders, your mobile speed plummets below 40 on Google Lighthouse, directly increasing bounce rates and paid ad acquisition costs.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>FactoryJet engineers bespoke Shopify Online Store 2.0 themes tailored specifically to your brand.</strong> We write clean, lightweight Liquid markup, modular fluid CSS variables, and native Vanilla JS Web Components. 
                </p>
                <p>
                  We engineer high-converting e-commerce features natively into the theme source code, eliminating $400 to $1,200 per month in bloated third-party app subscriptions while delivering guaranteed <strong>sub-1.2s Largest Contentful Paint (LCP)</strong> and <strong>0.00 Cumulative Layout Shift (CLS)</strong>. Your marketing team gains complete visual layout flexibility through modular Section Schemas, while your business enjoys higher conversion rates and total GitHub code ownership.
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
              <span className="pp-badge">ENGINEERING DEEP DIVE</span>
              <h2 className="pp-section-title">The Hidden Architectural Flaws of Generic Shopify Themes</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                When an e-commerce merchant purchases a pre-built commercial theme from the Shopify Theme Store, they are purchasing software designed to satisfy the broadest possible market. To support apparel, electronics, beauty, furniture, and food brands in a single product, the theme author includes dozens of alternative header styles, multi-level dropdowns, parallax banners, collection grid layouts, and third-party JavaScript libraries (such as jQuery, Slick Carousel, Flickity, and Lodash).
              </p>
              <p>
                Even if your brand uses only 15% of those features, your customers’ mobile browsers must parse and execute 100% of that JavaScript on every single page view. The browser’s main thread becomes heavily congested, causing significant <strong>Interaction to Next Paint (INP)</strong> delays and delayed visual paint times.
              </p>
              <p>
                Furthermore, as your marketing team attempts to add functionality, such as countdown timers, sticky add-to-cart bars, currency selectors, and product review badges, they install third-party apps from the Shopify App Store. Each app injects additional external script tags into the <code>theme.liquid</code> layout file. Within 12 months, the average Shopify store loads over 45 external script requests, resulting in mobile load times exceeding 5.5 seconds on 4G connections and devastating paid ad return on ad spend (ROAS).
              </p>
              <p>
                This cycle creates a severe drag on growth. Search engines like Google continuously evaluate real user field metrics (Core Web Vitals) via the Chrome User Experience Report (CrUX). When your store suffers from sluggish LCP and high CLS scores, your organic keyword rankings drop while Google Ads CPCs increase due to lower landing page experience quality scores.
              </p>
              <p>
                By replacing this fragile patchwork of third-party scripts with a bespoke, purpose-built Shopify Online Store 2.0 theme, brands routinely witness a 15% to 35% lift in mobile conversion rates while permanently slashing recurring app overhead.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMERCE ROI CALCULATOR */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">FINANCIAL MODELING</span>
              <h2 className="pp-section-title">Calculate Your Theme Speed Conversion Uplift</h2>
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
              <span className="pp-badge">THEME ARCHITECTURE</span>
              <h2 className="pp-section-title">The 4-Pillar Online Store 2.0 Theme Engineering Architecture</h2>
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

        {/* SECTION 2: THE SUB-SECOND RENDERING BLUEPRINT */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">PERFORMANCE ENGINEERING</span>
              <h2 className="pp-section-title">The Sub-Second Mobile Performance Blueprint: How We Guarantee 95+ Lighthouse</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Achieving a true sub-second Largest Contentful Paint (LCP) on mobile requires systematic optimization of every millisecond in the browser's critical rendering path. FactoryJet applies four core engineering principles to every custom theme build:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>1. Critical Path CSS Inlining</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    We extract and inline critical above-the-fold CSS directly within the HTML document header, allowing the browser to construct the render tree immediately upon receiving the initial HTML payload without waiting for external stylesheet downloads.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>2. Native Responsive Image Art Direction</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    Every product image, collection banner, and hero visual uses native HTML5 <code>&lt;picture&gt;</code> and <code>srcset</code> markup with Shopify image CDN filters, serving modern WebP and AVIF formats sized precisely for the visitor’s device display density.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>3. Zero Cumulative Layout Shift (CLS = 0.00)</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    We enforce explicit aspect ratios and dimension attributes on all media elements, product cards, dynamic review containers, and announcement bars, eliminating jarring layout shifts when assets finish rendering.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>4. Vanilla JS Web Components</h3>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                    Interactive elements (variant pickers, quantity steppers, cart drawers) are built as lightweight Custom Elements (&lt;product-form&gt;, &lt;cart-drawer&gt;) using native browser APIs. Zero framework overhead, zero jQuery, and sub-35KB total JavaScript payload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ZERO-APP NATIVE FEATURE ENGINEERING */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">FEATURE CONSOLIDATION</span>
              <h2 className="pp-section-title">Zero-App Native Feature Engineering: Eliminate 10+ Monthly App Subscriptions</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                One of the most powerful financial and performance benefits of a custom Shopify theme is the elimination of fragile third-party app scripts. We engineer the industry's highest-converting e-commerce features directly into your theme’s native Liquid, CSS, and Section Rendering codebase:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Slide-Out Ajax Cart Drawer with Tiered Free Shipping Bar (Saves $300-$600/yr):</strong> An ultra-fast, sub-50ms slide-out cart drawer that recalculates free shipping progress dynamically as items are added, featuring 1-click in-cart cross-sells and coupon code validation.
                </li>
                <li>
                  <strong>Visual Swatch Selectors &amp; Multi-Variant Image Grouping (Saves $240-$480/yr):</strong> Native color swatch buttons, image swatches, and pill selectors that filter the product media gallery to show only images relevant to the selected color variant without third-party swatch apps.
                </li>
                <li>
                  <strong>Sticky Mobile Add-to-Cart Bar (Saves $180-$360/yr):</strong> A persistent, high-converting sticky purchase bar that smoothly docks at the bottom of mobile screens when the user scrolls past the main Buy button, capturing impulse mobile purchases.
                </li>
                <li>
                  <strong>Dynamic Product Bundle Builders &amp; Volume Tier Tables (Saves $400-$1,200/yr):</strong> Custom spend-and-save tiered discount tables and mix-and-match bundle builders powered directly by native Shopify Functions without third-party bundle apps slowing down the DOM.
                </li>
                <li>
                  <strong>Accessible Product Accordion Tabs &amp; Sizing Modals (Saves $120-$240/yr):</strong> Native, semantic accordion tabs for materials, care instructions, ingredients, and interactive sizing charts bound directly to product metafields.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: LIQUID 2.0 VS HEADLESS NEXT.JS 15 DECISION FRAMEWORK */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">ARCHITECTURAL DECISION</span>
              <h2 className="pp-section-title">Custom Liquid 2.0 vs. Headless Next.js 15: When to Build Custom Liquid</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                A frequent strategic question facing e-commerce founders and CTOs is whether to invest in a bespoke Shopify Online Store 2.0 Liquid theme or a fully decoupled Headless Next.js 15 storefront. Both architectures deliver exceptional sub-second mobile speeds, but they serve different operational scales and business models:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                  <h3 style={{ color: '#f97316', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Choose Custom Liquid 2.0 If:</h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#cbd5e1' }}>
                    <li>Your annual e-commerce revenue is between $1M and $25M and your primary focus is maximizing conversion rate while minimizing operational complexity.</li>
                    <li>Your non-technical marketing and merchandising teams need 100% visual WYSIWYG control in the native Shopify Theme Editor without managing a separate headless CMS.</li>
                    <li>You want native, out-of-the-box compatibility with the Shopify App Store, customer accounts, and localized Shopify Markets without custom API middleware.</li>
                    <li>You want zero recurring frontend edge hosting costs (such as Vercel or AWS CloudFront) and zero external API failure points.</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Choose Headless Next.js 15 If:</h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#cbd5e1' }}>
                    <li>Your annual e-commerce revenue exceeds $10M-$50M+ with complex multi-region catalogs, omnichannel POS integrations, or custom ERP pricing engines.</li>
                    <li>You manage rich editorial lookbooks and multi-brand storytelling requiring advanced Headless CMS workflows in Sanity.io or Contentful.</li>
                    <li>You require complete frontend decoupling to run multiple digital touchpoints (mobile apps, IoT kiosks, smart vending) from a single unified GraphQL API.</li>
                    <li>You have a dedicated in-house engineering team capable of managing React 19, edge middleware, and custom frontend deployment pipelines.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SECTION SCHEMAS & MERCHANT FREEDOM */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">MERCHANT AUTONOMY</span>
              <h2 className="pp-section-title">The Section Schema Blueprint: 100% Marketing Freedom Without Developer Tickets</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                In poorly architected themes, simple marketing updates, such as changing a banner background, adding an announcement strip, or creating a seasonal product landing page, require submitting a developer ticket and waiting days for code deployment. 
              </p>
              <p>
                FactoryJet builds every template using <strong>Shopify Online Store 2.0 JSON templates</strong> and granular Liquid <code>schema</code> definitions. We structure your theme into reusable modular sections (Hero Banners, Split Features, Product Grids, Testimonial Carousels, Video Showcases, FAQ Accordions) and configurable content blocks.
              </p>
              <p>
                Your marketing and merchandising teams can dynamically drag and drop sections, adjust typography and color overlays, configure dynamic metaobject bindings, and publish high-converting campaign pages in minutes, all within the visual Shopify Theme Editor, with zero code edits and zero risk of breaking store layouts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: ENTERPRISE PERFORMANCE ENGINEERING */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">SPEED OPTIMIZATION</span>
              <h2 className="pp-section-title">Enterprise Speed Engineering: Eliminating the 5 Critical Performance Killers</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Our performance engineering team conducts rigorous waterfall audits on every template to eliminate the five most common bottlenecks that degrade Shopify store speeds:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>1. Render-Blocking Fonts</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    We eliminate external Google Font downloads by hosting subsetted WOFF2 web fonts locally on Shopify’s global CDN with <code>font-display: swap</code>, eliminating text flash and 300ms+ font latency.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>2. Unconstrained App Scripts</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    We audit third-party analytics and marketing pixels, deferring non-critical tracking scripts (like Hotjar, TikTok Pixel, and Gorgias) until after the main thread completes visual rendering.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>3. Heavy Media Payloads</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    We implement native image <code>fetchpriority="high"</code> on above-the-fold hero images while applying native lazy-loading (<code>loading="lazy"</code>) and WebP conversion to all below-the-fold assets.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>4. DOM Inefficiency</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    We utilize modern CSS <code>content-visibility: auto</code> on large collection grids and long product descriptions, allowing the browser to skip rendering off-screen DOM nodes until the user scrolls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: GIT CI/CD WORKFLOW */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">DEVSECOPS</span>
              <h2 className="pp-section-title">Git-Backed CI/CD: Professional Multi-Environment Theme Deployment</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Most Shopify stores suffer from fragile development practices where multiple developers edit code directly in the live Shopify theme customizer, resulting in overwritten files, broken checkouts, and untracked bugs.
              </p>
              <p>
                FactoryJet establishes an enterprise-grade Git CI/CD workflow connected directly to your private GitHub or GitLab repository using the official Shopify CLI:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Isolated Feature Branches:</strong> Every developer works in local Docker/Shopify CLI sandbox environments and pushes to isolated feature branches without touching production.
                </li>
                <li>
                  <strong>Automated Theme Check Linting:</strong> GitHub Actions automatically run Shopify Theme Check linters on every pull request, catching deprecated Liquid tags, unescaped output, and missing schema translations.
                </li>
                <li>
                  <strong>Automated Lighthouse CI Regression Testing:</strong> Pull requests must pass automated performance budgets (guaranteeing 90+ mobile score) before code can be merged into staging.
                </li>
                <li>
                  <strong>1-Click Zero-Downtime Production Deployment:</strong> Merging into the main branch triggers automated deployment to the live Shopify theme with zero downtime and complete rollback history.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8: SHOPIFY FUNCTIONS & WEBASSEMBLY */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">SERVER-SIDE LOGIC</span>
              <h2 className="pp-section-title">Shopify Functions &amp; WebAssembly: Server-Side Discounts &amp; Checkout Extensibility</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Historically, Shopify merchants relied on client-side JavaScript apps or legacy Ruby Script Editor scripts to implement custom discounts, tiered pricing, and checkout validation. Client-side apps are notoriously fragile, they cause delayed price calculations, flicker on page load, and can be bypassed by tech-savvy users. Legacy Script Editor scripts are officially deprecated by Shopify.
              </p>
              <p>
                FactoryJet builds custom server-side business logic using <strong>Shopify Functions</strong>, compiled to WebAssembly (Wasm) and executed directly on Shopify’s global edge servers during cart operations and checkout:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Volume Tiered Discounts</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Automatic spend-and-save tier discounts (e.g., Buy 2 get 10% off, Buy 3 get 20% off) applied server-side instantly with zero client JavaScript delay or price flickering.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Gift-With-Purchase (GWP)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Automated free gift injection when customer cart thresholds ($100+, $200+) are reached, with automated item removal if cart subtotal drops below the qualification limit.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Cart &amp; Checkout Validation</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Server-side validation enforcing minimum order quantities, maximum order limits on limited-edition releases, and regional shipping compliance rules prior to payment capture.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 style={{ color: '#f97316', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Custom Delivery &amp; Payment Options</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Dynamically hide, reorder, or rename payment gateways (e.g., hiding Cash on Delivery for specific postal codes) and calculate bespoke carrier shipping rates on the fly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: ADVANCED LIQUID 2.0 & SECTION RENDERING API */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">CODE ARCHITECTURE</span>
              <h2 className="pp-section-title">Advanced Liquid 2.0 Engineering &amp; The Section Rendering API</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Our theme codebase follows strict architectural standards that ensure high runtime performance and long-term maintainability:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Section Rendering API for Dynamic UI:</strong> Instead of fetching large raw JSON responses and re-rendering HTML with client-side JavaScript templates, we use Shopify’s Section Rendering API. When a user changes a collection filter or adds an item to cart, we fetch the updated server-rendered HTML section directly from Shopify’s edge cache, updating the DOM in under 40 milliseconds with zero client CPU overhead.
                </li>
                <li>
                  <strong>Strict Liquid Optimization:</strong> We eliminate expensive Liquid anti-patterns such as nested <code>for</code> loops across full product catalogs, redundant string captures, and unindexed metafield queries. Data logic is consolidated at the top of each section file using clean <code>&#123;%- liquid ... -%&#125;</code> syntax blocks.
                </li>
                <li>
                  <strong>Bespoke CSS Custom Properties (Design Tokens):</strong> Global colors, typographic scales, button radii, and spacing systems are declared as CSS custom properties in a single centralized design token dictionary. Changing brand styles across the entire store requires editing a single line of CSS with zero stylesheet recompilation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: TECHNICAL SEO & STRUCTURED DATA GRAPHS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">TECHNICAL SEO</span>
              <h2 className="pp-section-title">Technical SEO Architecture &amp; Structured JSON-LD Entity Graphs</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Fast page speed is only half of the organic growth equation. Your theme must also communicate clean semantic data to Google, Bing, and AI search crawlers. Every FactoryJet custom theme includes deep technical SEO architecture out of the box:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Complete JSON-LD Schema Graphs:</strong> We output fully synchronized <code>Product</code>, <code>AggregateOffer</code>, <code>Brand</code>, <code>BreadcrumbList</code>, <code>Organization</code>, and <code>FAQPage</code> structured data directly into the HTML payload for maximum Google Rich Snippet eligibility (star ratings, pricing, in-stock badges).
                </li>
                <li>
                  <strong>Strict Semantic HTML5 Structure:</strong> Exactly one <code>&lt;h1&gt;</code> per page, proper semantic heading hierarchy (<code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>), accessible ARIA landmarks (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>), and descriptive alt attributes on all product media.
                </li>
                <li>
                  <strong>Clean Canonical Tagging &amp; Pagination:</strong> Automated canonical URL generation that strips tracking parameters and collection sort tags, preventing duplicate content dilution and preserving link equity across large product catalogs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 11: SHOPIFY MARKETS & INTERNATIONALIZATION */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">GLOBAL COMMERCE</span>
              <h2 className="pp-section-title">Shopify Markets &amp; Multi-Currency Internationalization Architecture</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Expanding into international markets across North America, Europe, the UK, and Asia-Pacific often causes severe theme bloat when brands use third-party translation and currency switcher apps that inject heavy client-side scripts on every page load.
              </p>
              <p>
                FactoryJet builds multi-currency and multi-language capabilities directly into the theme using native <strong>Shopify Markets</strong>:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Native Currency &amp; Region Selectors:</strong> Lightweight, accessible dropdown selectors that switch customer markets with instant page updates without heavy third-party currency conversion apps.
                </li>
                <li>
                  <strong>Sub-Second Localized Translation Layer:</strong> Clean integration with Shopify Translate &amp; Adapt, delivering translated product titles, descriptions, and checkout strings directly from the server payload.
                </li>
                <li>
                  <strong>Dynamic Market-Specific Merchandising:</strong> Modular Liquid section schemas that allow marketing teams to display region-specific announcement bars, promotional banners, and localized shipping thresholds based on customer country tags.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 12: CONTINUOUS CRO & ITERATIVE ENHANCEMENTS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">CONVERSION OPTIMIZATION</span>
              <h2 className="pp-section-title">Continuous Conversion Rate Optimization (CRO) &amp; A/B Testing Framework</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Launching a custom Shopify theme is not the finish line, it is the foundation for continuous data-driven growth. Our post-launch engineering sprints focus on systematic conversion rate experimentation:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Native Server-Side A/B Split Testing:</strong> Testing alternative PDP layouts, CTA button placements, and pricing displays with native Liquid conditional logic, achieving true 50/50 traffic splits without client-side DOM flickering or anti-flicker script performance penalties.
                </li>
                <li>
                  <strong>High-Fidelity Funnel Analytics:</strong> Real-time tracking of cart additions, drawer opens, checkout starts, and checkout completions synchronized directly with Google Analytics 4 (GA4) and Klaviyo via clean data layer events.
                </li>
                <li>
                  <strong>Quarterly Core Web Vitals Audits:</strong> Ongoing performance monitoring to ensure new product releases, video assets, and marketing tags never cause Core Web Vitals scores to regress below 90.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 13: ACCESSIBILITY & WCAG 2.1 AA COMPLIANCE */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">ACCESSIBILITY (A11Y)</span>
              <h2 className="pp-section-title">Inclusive Commerce: WCAG 2.1 AA &amp; ADA Accessibility Engineering</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Ensuring your e-commerce storefront is accessible to all users, including those with visual, auditory, motor, or cognitive disabilities, is both a legal necessity under ADA compliance standards and a proven driver of conversion rate optimization.
              </p>
              <p>
                Every component in our custom theme is built strictly adhering to <strong>WCAG 2.1 AA guidelines</strong>:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Full Keyboard Trapping &amp; Navigation:</strong> Users can effortlessly navigate the entire store, open mega-menus, select product variants, open the slide-out cart drawer, and complete checkout using only a keyboard with clear visual focus indicators.
                </li>
                <li>
                  <strong>Dynamic ARIA Live Announcements:</strong> When customers select color swatches, change quantities, or add items to the cart, dynamic <code>aria-live</code> regions announce stock availability and cart totals to screen readers in real time.
                </li>
                <li>
                  <strong>High-Contrast Color Audits:</strong> All typography, button labels, badges, and interactive form inputs are tested to maintain a minimum 4.5:1 contrast ratio against background surfaces for optimal legibility.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 14: CODEBASE CLEANLINESS & THE DE-SLOP STANDARD */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '1000px' }}>
            <div className="pp-section-header">
              <span className="pp-badge">CODE EXCELLENCE</span>
              <h2 className="pp-section-title">The Anti-Commodity Codebase Standard: Zero Slop, Zero Hidden Technical Debt</h2>
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Commodity agencies frequently copy and paste unvetted third-party JavaScript libraries, outdated jQuery snippets, and messy CSS overrides into merchant theme files. Over time, this creates severe technical debt that makes future site updates expensive and bug-prone.
              </p>
              <p>
                FactoryJet adheres to a strict <strong>Zero-Slop Engineering Standard</strong>:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e2e8f0' }}>
                <li>
                  <strong>Semantic Modern CSS:</strong> We use native CSS custom properties, modern Flexbox and Grid layouts, CSS subgrid, and modern <code>:has()</code> pseudo-selectors, completely eliminating bloated utility frameworks and redundant CSS declarations.
                </li>
                <li>
                  <strong>Modular Architecture:</strong> Every section, snippet, and asset file has a single, well-defined responsibility with complete inline developer documentation and automated Theme Check linter compliance.
                </li>
                <li>
                  <strong>Full Source Code Handover:</strong> You receive a clean, production-ready repository with 100% intellectual property ownership, detailed architectural documentation, and zero dependency on proprietary agency plugins.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CUSTOM THEME VS MARKETPLACE VS HEADLESS COMPARISON TABLE */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">HEAD-TO-HEAD BENCHMARK</span>
              <h2 className="pp-section-title">Custom Liquid 2.0 Theme vs. Marketplace Theme vs. Headless</h2>
              <p className="pp-section-sub">
                An objective architectural comparison across speed, code bloat, merchandiser flexibility, and total cost of ownership.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architectural Dimension</th>
                    <th style={{ color: '#f97316' }}>Custom Liquid 2.0 (FactoryJet)</th>
                    <th>Commercial Marketplace Theme</th>
                    <th>Headless Next.js 15 Commerce</th>
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
              <span className="pp-badge">SPRINT METHODOLOGY</span>
              <h2 className="pp-section-title">The 10-Week Custom Theme Engineering Sprint Roadmap</h2>
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
              items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
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
              <span className="pp-badge">US REGIONAL COVERAGE</span>
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
