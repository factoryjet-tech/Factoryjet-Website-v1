import type { Metadata } from 'next';
import Script from 'next/script';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceHeroImageBand from '@/components/v2/ServiceHeroImageBand';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'WordPress Development for US Businesses | FactoryJet',
  description:
    'US-focused WordPress agency — custom themes, no page builders, fast loads & mobile-first builds. Fixed-price, milestone-paid, quoted upfront.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WordPress Development for US Businesses | FactoryJet',
    description:
      'Custom WordPress websites for US small businesses — no page builders, fast loads, built to rank. FactoryJet: fixed-price, milestone-paid.',
    url: 'https://factoryjet.com/services/wordpress-development',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — WordPress Website Design Agency USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Development for US Businesses | FactoryJet',
    description:
      'Custom WordPress. No page builders. Fast, mobile-first, SEO-ready. FactoryJet — fixed-price, milestone-paid. Free consultation.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/wordpress-development',
    languages: usServiceAlternates['wordpress-development'],
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a custom WordPress website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s custom WordPress website design is fixed-price and scoped to your build. The main cost drivers are page count (a focused business site vs. a 15–30 page site with custom post types and advanced functionality) and whether you need WordPress e-commerce on WooCommerce. Fixed-price and milestone-paid, with the full number confirmed on a free consultation before work starts — our experienced team has built WordPress sites for US businesses for 12+ years with the same engineering quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a custom WordPress theme and a page builder theme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom WordPress theme is built from scratch in code — it loads only what your site needs, produces clean HTML and CSS, and typically achieves Lighthouse scores of 85–100. A page builder theme (Elementor, Divi, WPBakery, Beaver Builder) generates bloated markup, often loads 10–25 unnecessary scripts and stylesheets, and routinely produces Lighthouse performance scores of 30–60. The difference in page load time on mobile is typically 3–8 seconds. Since Google uses Core Web Vitals as a ranking signal and 53% of mobile visitors abandon sites that take more than 3 seconds to load, the choice between a page builder and a custom theme is not a style preference — it is a business performance decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a custom WordPress website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom WordPress business website (10–15 pages) typically takes 3–5 weeks. Larger sites with 20–40 pages, custom post types, and membership or directory functionality run 6–10 weeks. WooCommerce stores take 4–8 weeks depending on product catalog size and custom functionality. Timelines are driven primarily by the speed of content delivery and feedback from your side — our engineering process is built around 24-hour feedback loops to keep projects from stalling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WordPress still a good choice for a small business website in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — when built correctly. WordPress powers 43% of all websites on the internet and has the largest plugin ecosystem, the most flexibility for content management, and the strongest SEO plugin support (Yoast, RankMath) of any CMS. The problems people associate with WordPress — slow load times, security vulnerabilities, difficult maintenance — are almost always caused by page builders and poorly coded themes, not WordPress itself. A custom-built WordPress site with a clean theme, minimal plugins, and proper hosting can achieve Lighthouse scores of 90–100 and outperform most SaaS website builders on every performance metric.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a WordPress web design agency do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A WordPress web design agency handles the full design and development lifecycle: information architecture (what pages you need and how they\'re structured), visual design (custom design in Figma, not a purchased template), WordPress development (custom theme or plugin development, no page builders), on-page SEO (meta tags, schema markup, site structure), performance optimization (Core Web Vitals, image optimization, caching), and ongoing maintenance. The right agency also does discovery work upfront — understanding your business, customers, and conversion goals — before touching a design tool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fix or redesign my existing WordPress site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WordPress redesigns are a significant portion of our work. Whether your site is built on Elementor, Divi, a purchased theme, or an older custom theme, we can redesign it — either on a fresh custom WordPress build or migrate your content to a better architecture. We start with an audit of what\'s causing the current problems (usually performance, mobile usability, or conversion structure) and scope the redesign around fixing those specific issues rather than rebuilding everything unnecessarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What WordPress plugins does FactoryJet use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build with a minimal, maintained plugin stack: Yoast SEO or RankMath for SEO, WooCommerce for e-commerce (where needed), Gravity Forms or WPForms for lead capture, WP Rocket or Perfmatters for caching and performance, Wordfence or Solid Security for security, and UpdraftPlus for backups. We avoid: Elementor, Divi, WPBakery, and any page builders; bloated multipurpose themes; and plugin stacks with known performance overhead. Every plugin we install has a specific function, is actively maintained, and has been tested against your theme for conflicts before launch.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress Website Design & Development Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'WordPress Web Design and Development',
  description:
    'FactoryJet is a US-focused WordPress web design and development agency — custom themes, no page builders, fast load times, mobile-first builds, and full SEO setup. Fixed-price, milestone-paid.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WP_SERVICES = [
  {
    name: 'Custom WordPress Theme Development',
    description:
      'We build WordPress themes from scratch in PHP, HTML, CSS, and JavaScript — no page builders, no purchased templates. Every theme is written specifically for your site\'s content structure, which means clean code, fast load times, and a Lighthouse score that reflects engineering discipline, not luck.',
    example: 'Custom themes load 60–80% faster than equivalent page builder builds on the same hosting.',
    linkLabel: 'Get a free consultation',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Website Redesign',
    description:
      'Your current Elementor or Divi site is probably costing you organic traffic and converting visitors at a fraction of what it could. We redesign WordPress sites from page builders into clean custom themes — keeping your content, improving your speed, and rebuilding the conversion architecture from the ground up.',
    example: 'Elementor-to-custom-theme migrations improve Lighthouse performance scores from 35–55 to 85–95+.',
    linkLabel: 'See redesign services',
    linkHref: '/services/website-redesign',
  },
  {
    name: 'WooCommerce Store Design',
    description:
      'WooCommerce is the most flexible e-commerce platform on WordPress — and the most commonly under-optimized. We design and build WooCommerce stores with custom product pages, mobile-first checkout, cart abandonment recovery, and performance optimization that doesn\'t require an expensive premium hosting plan to achieve decent load times.',
    example: 'Optimized WooCommerce stores convert at 2–3% vs. 0.5–1% for default theme builds.',
    linkLabel: 'See WooCommerce options',
    linkHref: '#pricing',
  },
  {
    name: 'WordPress Plugin Development',
    description:
      'When off-the-shelf plugins don\'t do exactly what your business needs, we build custom WordPress plugins. Custom post types, custom taxonomies, API integrations, membership systems, booking engines, directory listings, and workflow-specific functionality — built to your spec and integrated cleanly with your theme.',
    example: 'Custom plugins eliminate the performance overhead of 3–5 general-purpose plugins covering the same function.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Performance Optimization',
    description:
      'Slow WordPress sites almost always share the same problems: a bloated theme, too many plugins, unoptimized images, no caching, and shared hosting. We audit, diagnose, and fix — implementing WP Rocket or Perfmatters caching, image optimization, database cleanup, and code minification to move your Lighthouse score from failing to passing.',
    example: 'Most WordPress performance audits uncover 4–7 specific issues that account for 90% of the speed problem.',
    linkLabel: 'Get a free speed audit',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Multisite & Enterprise Builds',
    description:
      'Multi-location businesses, franchise networks, and organizations with regional sites benefit from WordPress Multisite — one installation, many distinct sites, shared users and content where appropriate, separate branding and admin where needed. We architect and build Multisite networks for organizations that need the flexibility of separate sites with the efficiency of unified management.',
    example: 'WordPress Multisite reduces content management overhead by 40–60% for multi-location businesses.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

const WP_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We audit your current site (if you have one), analyze your competitors\' WordPress builds, define your sitemap and page types, and write a content brief for every page. You know exactly what will be built — and why — before we touch Figma or code.',
  },
  {
    number: '02',
    title: 'WordPress Architecture',
    description:
      'We design the technical structure of your WordPress build — theme architecture, custom post types, taxonomy structure, plugin selection, and hosting environment. The right architecture at this stage determines whether your site is fast and maintainable or a technical liability in 18 months.',
  },
  {
    number: '03',
    title: 'Visual Design in Figma',
    description:
      'Desktop and mobile designs for your homepage and key inner pages — designed in Figma, not WordPress. You review, request revisions, and approve before development begins. Two revision rounds included. We don\'t build a single line of theme code until designs are signed off.',
  },
  {
    number: '04',
    title: 'Custom Theme Development',
    description:
      'We build your approved designs into a custom WordPress theme — PHP templates, clean CSS, vanilla JS where needed. No page builders. No theme frameworks. No inherited technical debt. Every component is documented so future developers can understand and extend the theme without guessing.',
  },
  {
    number: '05',
    title: 'QA, Launch & Handover',
    description:
      'Full QA across browsers and devices, security hardening, performance optimization, SEO plugin configuration, Google Analytics 4 setup, 301 redirects for any changed URLs, and a recorded CMS walkthrough. Your team can manage content from day one — no developer required for copy updates or new page creation.',
  },
];

const WP_STATS = [
  {
    value: '43%',
    label: 'of all websites on the internet run on WordPress — the largest platform by a factor of 3',
    sourceUrl: 'https://w3techs.com/technologies/details/cm-wordpress',
    sourceLabel: 'W3Techs',
  },
  {
    value: '60–80%',
    label: 'faster: custom WordPress themes vs. page builder builds on identical hosting environments',
    sourceUrl: 'https://developers.google.com/web/tools/lighthouse',
    sourceLabel: 'Google Lighthouse',
  },
  {
    value: '$8B+',
    label: 'WordPress agency market size in 2025 — 50% YoY growth in demand for custom theme development',
    sourceUrl: 'https://wpengine.com/resources/wordpress-trends/',
    sourceLabel: 'WP Engine',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US WordPress Agency' },
  { label: 'Page Builder (Elementor)' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    values: ['Fixed-price, quoted upfront', 'Multiples higher, often hourly', 'Cheap, but bloated page-builder code', 'Hourly, no ceiling'],
  },
  {
    feature: 'Delivery timeline',
    values: ['3–5 weeks (10 pages)', '8–20 weeks', '2–4 weeks', '4–12 weeks (unreliable)'],
  },
  {
    feature: 'Custom theme (no page builder)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Lighthouse 85+ score',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Core Web Vitals pass',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'On-page SEO + schema included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="pb" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '500+ WordPress projects delivered',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="pb" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter WordPress',
    priceRange: 'Get a quote',
    description:
      'Up to 10 pages on a custom WordPress theme — no page builders, no purchased templates. Mobile-first, fast, SEO-ready, and fully manageable by your team without developer help.',
    features: [
      'Up to 10 pages on a custom WordPress theme',
      'No page builders — clean PHP, CSS, and JS',
      'Mobile-first responsive design',
      'Lighthouse 85+ performance target',
      'On-page SEO: Yoast/RankMath, meta tags, heading structure',
      'Contact form with email and CRM forwarding',
      'Google Analytics 4 + Search Console setup',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Consultation', modal: true, region: 'us' },
  },
  {
    name: 'Business WordPress',
    priceRange: 'Get a quote',
    description:
      'A full 15–30 page custom WordPress website with custom post types, advanced content architecture, schema markup, and a design system your team can grow without breaking. The most popular choice for service businesses and growing companies.',
    features: [
      '15–30 pages with custom post types and templates',
      'Custom WordPress design system (typography, colors, components)',
      'Advanced content architecture — blog, team, case studies, FAQs',
      'Full on-page SEO: schema markup, canonical tags, XML sitemaps',
      '301 redirects for all changed URLs (redesign projects)',
      'Two rounds of design revisions included',
      'Performance optimization: caching, image compression, CDN setup',
      'Google Analytics 4 with custom event tracking',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'WooCommerce Store',
    priceRange: 'Talk to the founder',
    description:
      'A custom WooCommerce store — product pages designed for conversion, mobile-first checkout, payment gateway integration, and performance built to pass Core Web Vitals with a full product catalog loaded.',
    features: [
      'Full custom WooCommerce store design and development',
      'Product and collection page templates (conversion-optimized)',
      'Mobile-first checkout with friction reduction',
      'Payment gateway integration (Stripe, PayPal, Square)',
      'Product schema markup for Google Shopping',
      'Inventory management and order notification configuration',
      'Abandoned cart recovery setup',
      'Core Web Vitals pass with full catalog',
      '30-day post-launch support',
    ],
    cta: { label: 'Schedule a WooCommerce Consultation', modal: true, region: 'us' },
  },
] as const;

const INDUSTRIES = [
  {
    name: 'Professional Services',
    description:
      'Law firms, consultants, accountants, and agencies need WordPress sites that establish authority and convert visitors into consultations. We build professional service sites with team and attorney profiles, practice area pages with schema markup, client testimonials structured for credibility, and contact flows optimized for high-value inquiry.',
    example: 'Professional service WordPress sites generate 40–80% more qualified leads than template builds.',
    linkLabel: 'See law firm website design',
    linkHref: '/services/law-firm-website-design',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'Medical practices, therapists, and wellness businesses need WordPress sites that communicate trust and make appointment booking friction-free. We build healthcare WordPress sites with HIPAA-aware contact forms, provider profiles, service pages with medical schema markup, and telemedicine or booking integrations.',
    example: 'Healthcare WordPress sites increase online appointment bookings by 35–55% within 90 days of launch.',
  },
  {
    name: 'Real Estate',
    description:
      'Real estate agents, brokers, and property developers need WordPress sites with IDX or MLS integration, property search, and lead capture optimized for buyer and seller intent. We build real estate WordPress sites that rank for local search and convert property browsers into active prospects.',
    example: 'IDX-integrated WordPress sites generate 2–3× more buyer inquiries from organic traffic vs. generic agency sites.',
    linkLabel: 'See real estate web design',
    linkHref: '/services/real-estate-website-design',
  },
  {
    name: 'Education & E-Learning',
    description:
      'Schools, training providers, and online course creators need WordPress sites with course catalog management, learner registration, and payment processing. We build education WordPress sites on LearnDash or LifterLMS with custom course pages, instructor profiles, and membership-gated content.',
    example: 'Custom course page design increases course enrollment rates by 25–45% over default plugin themes.',
  },
  {
    name: 'Non-Profit & Community',
    description:
      'Non-profits need WordPress sites that communicate mission, display impact, and convert visitors into donors or volunteers. We build non-profit WordPress sites with donation platform integration, event management, program pages, and impact metrics — without the donor-management software overhead most non-profits don\'t need.',
    example: 'Non-profit WordPress sites with clear impact metrics convert 30% more visitors to donors than mission-statement-only sites.',
  },
  {
    name: 'Media & Publishing',
    description:
      'Blogs, news sites, podcasts, and media brands need WordPress sites that scale content gracefully — category architecture, author profiles, tag and taxonomy structure, newsletter integration, and advertising layout that doesn\'t destroy the reading experience. We build media WordPress sites designed for high-volume content management and audience retention.',
    example: 'Media sites rebuilt on custom WordPress themes see 40–60% lower bounce rates vs. bloated theme predecessors.',
  },
];

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-is-wp', label: 'WordPress for Small Business' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & Value' },
  { key: 'technical', label: 'Technical Details' },
  { key: 'trust', label: 'Trust & Results' },
];

const FAQ_ITEMS = [

  /* ── WordPress for Small Business ── */
  {
    category: 'what-is-wp',
    question: 'Is WordPress still the best choice for a small business website?',
    answer:
      'WordPress is still the most flexible CMS available for small businesses in 2025. It powers 43% of all websites and has the most robust plugin ecosystem, the strongest SEO support, and the most extensive community of developers. The choice isn\'t between WordPress and something better — it\'s between WordPress built correctly (custom theme, minimal plugins, good hosting) and WordPress built incorrectly (page builders, bloated themes, shared hosting). A properly built custom WordPress site outperforms most SaaS website builders on performance, SEO, and flexibility. The businesses that have bad experiences with WordPress almost always have bad experiences with their implementation, not with the platform itself.',
  },
  {
    category: 'what-is-wp',
    question: 'What is a custom WordPress theme and why does it matter?',
    answer:
      'A custom WordPress theme is PHP and CSS code written specifically for your site — it includes exactly the components your site needs and nothing else. Page builder themes (Elementor, Divi, WPBakery) take the opposite approach: they load a full framework with hundreds of features your site won\'t use, generating bloated HTML that search engines struggle to parse and browsers load slowly. The performance difference is significant: page builder sites routinely score 30–55 on Lighthouse performance. Custom theme sites built by FactoryJet target 85–100. That gap translates directly to mobile load time, Core Web Vitals scores, and Google ranking signals.',
  },
  {
    category: 'what-is-wp',
    question: 'What is a WordPress web design agency?',
    answer:
      'A WordPress web design agency handles the full lifecycle of a WordPress project: strategy (what do you need the site to do, who is it for, how will it be found), design (custom visual design in Figma), development (custom WordPress theme and plugin development), SEO setup (meta tags, schema markup, sitemap, redirects), and ongoing support (maintenance, updates, content changes, new pages). The right WordPress agency brings both design and engineering discipline to the project — not just someone who knows how to install Elementor.',
  },
  {
    category: 'what-is-wp',
    question: 'Should I use WordPress or Shopify for my e-commerce site?',
    answer:
      'WordPress with WooCommerce is the better choice when: you have more than 500 products and need custom taxonomy structures, you need complex custom product configurations, you want full control over your checkout flow without Shopify\'s transaction fees, or you need to tightly integrate your store with a content marketing strategy. Shopify is the better choice when: you\'re starting out and want the fastest time to a working store, you have a smaller catalog and don\'t need custom functionality, and you prefer lower maintenance overhead. We build both — and we\'ll give you an honest assessment of which fits your specific situation after a free consultation.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the WordPress website development process look like?',
    answer:
      'Five stages: Discovery & Strategy (competitor audit, sitemap, content brief — you approve before any design starts), WordPress Architecture (technical structure, plugin selection, hosting environment), Visual Design in Figma (desktop and mobile designs for all key page types — two revision rounds before development), Custom Theme Development (PHP, CSS, JS — no page builders, every template documented), and QA, Launch & Handover (browser/device testing, security hardening, SEO plugin setup, Analytics, 301 redirects, recorded CMS walkthrough). You own the design files, the code, and the CMS from day one.',
  },
  {
    category: 'process',
    question: 'How long does it take to build a custom WordPress website?',
    answer:
      'A standard business WordPress site of 10–15 pages takes 3–5 weeks. Sites with 20–40 pages and custom post types (team profiles, case studies, resources, events) run 6–10 weeks. WooCommerce stores take 4–8 weeks. The timeline is primarily driven by the speed of your content and approvals — our engineering process has structured 24-hour checkpoints to keep projects moving. Clients who come in with existing content and give fast feedback routinely hit the faster end of these timelines.',
  },
  {
    category: 'process',
    question: 'Can you migrate my existing site to WordPress?',
    answer:
      'Yes. We handle migrations from Wix, Squarespace, Webflow, Drupal, Joomla, and older WordPress builds. The migration process includes content audit and cleanup (we don\'t migrate junk), URL mapping and 301 redirect implementation, SEO metadata preservation, image optimization on import, and performance testing on the new WordPress build before anything goes live. If you\'re migrating from another WordPress build (like a page builder theme), we preserve your content and rebuild the theme around it — you don\'t lose your Google history.',
  },
  {
    category: 'process',
    question: 'Do I need to provide content for my WordPress website?',
    answer:
      'You need to provide your core messaging — what your business does, who it serves, what makes you different. We structure and optimize that content into the page format that works best for conversion and SEO. For most projects, we do a content audit of what you already have (existing site, social media, any marketing materials) and use that as the starting point — which keeps costs down and preserves SEO value. If you need significant new copy written, we offer copywriting as an add-on. We\'ll scope this clearly in the strategy phase.',
  },

  /* ── Pricing & Value ── */
  {
    category: 'pricing',
    question: 'How much does a custom WordPress website cost?',
    answer:
      'FactoryJet\'s custom WordPress websites are fixed-price and scoped to your build. The main cost drivers are page count (a focused site with a custom theme, no page builders, mobile-first build, and full SEO setup vs. a 15–30 page site with custom post types) and whether you need a WooCommerce store. Fixed-price and milestone-paid, with the full number confirmed on a free consultation before work starts — our engineering team has built WordPress sites for US businesses for 12+ years with the same engineering standards, leaner operations.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a custom WordPress website vs. a page builder site?',
    answer:
      'Three return dimensions: SEO (custom themes pass Core Web Vitals, page builders don\'t — and Core Web Vitals are a direct ranking signal), conversion (faster sites convert better: 1 second of load time improvement = 5–7% improvement in conversion rate), and maintenance (custom themes have no plugin update conflicts, no page builder compatibility issues, and fewer security vulnerabilities — reducing ongoing maintenance costs). Most clients who switch from a page builder to a custom WordPress theme recover the redesign cost within 12 months from the combination of improved organic traffic and reduced developer maintenance time.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs for a custom WordPress website?',
    answer:
      'Yes — hosting (a monthly fee paid to the host, scaling with traffic), domain renewal (a small yearly fee), and security/maintenance (modest annual licenses for a premium security plugin and a backup solution). These are platform-level costs that exist regardless of who builds your site. Optional ongoing: a FactoryJet maintenance retainer (scoped and quoted up front) for WordPress core and plugin updates, security monitoring, and content changes. Most clients with small teams choose a maintenance retainer; larger teams with internal technical staff often self-manage after handover.',
  },

  /* ── Technical Details ── */
  {
    category: 'technical',
    question: 'What hosting do you recommend for a custom WordPress website?',
    answer:
      'For most small businesses we recommend managed WordPress hosting: WP Engine, Kinsta, or Flywheel where reliability is critical, all of which charge a monthly fee paid to the host. For budget-conscious builds, SiteGround or Cloudways on DigitalOcean offer a good balance of performance and cost at a lower monthly fee. We avoid cheap shared hosting — it\'s the single biggest source of slow WordPress sites. We configure the hosting environment as part of every project, not just hand you the code and leave you to figure it out.',
  },
  {
    category: 'technical',
    question: 'How do you handle WordPress security?',
    answer:
      'Security is configured at delivery — not an afterthought. Standard on every project: Wordfence or Solid Security installed and configured, login URL changed from the default /wp-admin, file permissions hardened, database table prefixes randomized, XML-RPC disabled, user enumeration blocked, automatic updates enabled for core and minor releases, and UpdraftPlus configured for automated daily backups to an off-site location. For industries with compliance requirements (healthcare, finance, legal), we apply additional controls appropriate to the regulatory environment.',
  },
  {
    category: 'technical',
    question: 'Can I update my WordPress site content without a developer?',
    answer:
      'Yes — that\'s a core requirement in every project we deliver. We use WordPress\'s native block editor (Gutenberg) with a set of custom blocks built for your design system. You can update every text field, image, and content section on your site from the WordPress admin — without touching code or needing developer access. We also deliver a recorded CMS walkthrough specific to your site, not a generic WordPress tutorial, so your team knows exactly where everything is and how to make every type of change you\'ll realistically need to make.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US WordPress agency?',
    answer:
      'Three differences: pricing model (fixed-price and milestone-paid — specialized engineers serving US businesses, leaner operations), engineering standards (we build to the same spec a good traditional agency would — custom theme, no page builders, Core Web Vitals target, documented code — without the inflated timeline), and SMB-specific experience (500+ small business projects means we know what a 10-person company actually needs from WordPress and what it doesn\'t — you won\'t get oversold on features that a $50M company uses but you\'ll never touch). We also don\'t use proprietary tools: everything we build runs on standard WordPress and can be maintained by any competent developer after handover.',
  },
  {
    category: 'trust',
    question: 'Can I see examples of WordPress websites you\'ve built?',
    answer:
      'Yes — on a consultation call we share examples relevant to your industry and project type. Published results: a professional services firm whose custom WordPress build ranked #1 for their target local keyword within 90 days of launch (a page builder competitor had held that position for two years); an e-commerce brand whose WooCommerce redesign improved conversion rate from 0.8% to 2.4% within 45 days; a healthcare practice whose WordPress site increased new patient appointment requests by 55% in the first quarter. We\'ll share vertical-specific examples during your free consultation.',
  },
  {
    category: 'trust',
    question: 'What happens if I need changes after my WordPress site launches?',
    answer:
      'Content changes: your team makes them directly in the CMS — that\'s the point of the training and documentation we deliver at launch. Design or structural changes within the 30-day support window: covered under your project. Changes after 30 days: available on a time-and-materials basis or as part of a monthly maintenance retainer. We also document the custom blocks and template structure so any competent WordPress developer can work on your site after handover — you\'re not dependent on us, even if you choose to stay.',
  },
  {
    category: 'trust',
    question: 'Who owns my WordPress website after FactoryJet builds it?',
    answer:
      'You own everything: the WordPress installation, the custom theme code (delivered via a private GitHub repository), the design files (Figma access shared at handover), all plugin licenses, your hosting account, and your domain. We don\'t retain any ownership or access after the project ends. You can take the project to another agency or in-house developer at any time — we deliver everything they\'d need to continue working on it without having to reverse-engineer or rebuild from scratch.',
  },

  {
    category: 'technical',
    question: 'Can you build a WordPress e-commerce site with WooCommerce for selling products online?',
    answer:
      'Yes — WooCommerce is the world\'s most-used e-commerce platform by install count, powering 35%+ of all online stores. FactoryJet builds WooCommerce stores integrated into custom WordPress themes: product catalog with unlimited variants and custom attributes, Stripe and PayPal payment gateway integration, subscription products via WooCommerce Subscriptions, B2B wholesale pricing via WholesaleX or Wholesale Gorilla, Australian and US sales tax configuration via TaxJar or Avalara, and product SEO including schema markup for Google Shopping eligibility. WooCommerce makes the most sense when: you need a content-heavy store (recipes, tutorials, how-tos alongside products), you already have significant WordPress SEO equity, or you need specific WooCommerce-only integrations your CRM or ERP supports. For pure e-commerce without a content dependency, Shopify usually delivers a faster build and lower maintenance overhead.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing WordPress maintenance and support after launch?',
    answer:
      'Yes — WordPress maintenance is essential, not optional. WordPress is the world\'s most targeted CMS for security vulnerabilities — sites running outdated plugins and core versions are actively exploited. FactoryJet\'s WordPress maintenance plans (scoped and quoted up front) include: weekly WordPress core, theme, and plugin updates tested on a staging environment before applying to production; daily UpdraftPlus backups stored off-site; uptime monitoring with immediate alerts; Google Search Console monitoring for crawl errors and indexing issues; malware scanning via Wordfence or Sucuri; and 2 hours of content and minor design updates per month. Maintenance clients have never experienced a WordPress hack while under our care. Unmanaged WordPress sites are typically compromised within 18–24 months of launch as security patches go unapplied.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your WordPress website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized WordPress websites for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/wordpress-development#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'US Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'WordPress Development', item: 'https://factoryjet.com/services/wordpress-development' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WordPressDevelopmentPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="wordpress-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="wordpress-development-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="wordpress-development-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="wordpress-development-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'WordPress', href: '/services/wordpress-development' },
          { label: 'Website Redesign', href: '/services/website-redesign' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Free WordPress Consultation', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_wordpress_development_hero" />}
          eyebrow="WORDPRESS WEB DESIGN AGENCY · USA"
          headline="Custom WordPress Websites That Load Fast, Rank, and Convert"
          lead="Most WordPress agencies build on Elementor or Divi — page builders that produce bloated code, fail Core Web Vitals, and hurt your Google rankings. FactoryJet builds custom WordPress themes from scratch: clean code, fast load times, and mobile-first design. Fixed-price and milestone-paid, quoted upfront after a free consultation."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ WordPress projects delivered',
            'No page builders — custom themes only',
            'Fixed-price, quoted upfront',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                PAGE BUILDER VS. CUSTOM THEME
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                What Your Build Quality Costs You
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'Elementor build: Lighthouse score 38, loads in 9.2 seconds on mobile',
                    after: 'Custom theme build: Lighthouse score 94, loads in 1.6 seconds on the same hosting',
                  },
                  {
                    before: 'Page builder generates 847KB of CSS — most unused by your site',
                    after: 'Custom theme generates 28KB of CSS — only what your pages actually use',
                  },
                  {
                    before: 'Core Web Vitals FAIL — LCP 8.4s, CLS 0.31 — suppresses Google ranking',
                    after: 'Core Web Vitals PASS — LCP 1.8s, CLS 0.02 — ranking signal working for you',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Page Builder</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#F05A28]">Custom Theme</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/card-wordpress.webp"
          imageAlt="WordPress Gutenberg editor on a MacBook with a clean editorial site — FactoryJet WordPress development"
          stats={[
            { value: '500+', label: 'WordPress Projects Delivered' },
            { value: '7 Days', label: 'Delivery Guarantee' },
            { value: 'Fixed Price', label: 'Confirmed Upfront, No Surprises' },
            { value: '25 Yrs', label: 'WordPress Expertise' },
          ]}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ WordPress projects. 12 years of custom theme development."
        />

        {/* ── 4. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WORDPRESS DEVELOPMENT EXPLAINED"
          headline="Why Custom WordPress Themes Outperform Page Builders, and Why Most Agencies Still Use Them"
          lead="Page builders make agencies faster and more profitable — not you. They ship faster because they're templating with a drag-and-drop framework, but the output is bloated code that loads slowly, fails Core Web Vitals, and produces Lighthouse scores that actively suppress your search rankings. Custom theme development takes longer because it's built to your spec — and it performs accordingly."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['WordPress', 'WooCommerce', 'PHP', 'Gutenberg', 'Yoast SEO', 'WP Rocket', 'Figma', 'Custom Themes'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                WordPress is the most powerful CMS in the world when built correctly. It's also the most commonly botched when agencies take shortcuts. The shortcut is always a page builder — Elementor, Divi, WPBakery — tools that enable faster delivery for the agency at the cost of your site's performance, SEO, and long-term maintainability.
              </p>
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A page builder theme loads 847KB of CSS on average. A custom theme for the same site loads 28KB. That&apos;s not a style preference — it&apos;s a 9-second difference in mobile load time.
                </p>
              </div>
              <p>
                FactoryJet builds WordPress themes in PHP with Gutenberg custom blocks — the native WordPress block editor, extended with components designed to your brand system. No page builder framework. No inherited CSS from a parent theme. No plugin dependency for layout control. Your site loads what it needs and nothing else, which is why our WordPress builds consistently pass Core Web Vitals on the same shared hosting that makes page builder sites fail.
              </p>
              <p>
                For businesses needing e-commerce, we build on WooCommerce with custom product and checkout templates — not the default WooCommerce theme or a storefront theme. Our WooCommerce builds target 2–3% conversion rates vs. the 0.5–1% typical of default theme implementations. If you need a <a href="/services/website-redesign" className="text-[#F05A28] underline underline-offset-2">website redesign</a> from an existing page builder, we handle that migration as well — preserving your content and Google history while rebuilding the performance and design from the ground up.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Our WordPress Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'CMS', tools: 'WordPress (custom theme, no builders)' },
                  { category: 'E-Commerce', tools: 'WooCommerce (custom templates)' },
                  { category: 'SEO', tools: 'Yoast SEO / RankMath' },
                  { category: 'Performance', tools: 'WP Rocket / Perfmatters + CDN' },
                  { category: 'Security', tools: 'Wordfence / Solid Security' },
                  { category: 'Forms', tools: 'Gravity Forms / WPForms' },
                  { category: 'Backups', tools: 'UpdraftPlus (daily, off-site)' },
                  { category: 'Analytics', tools: 'GA4 + Google Search Console' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                  Every site. Lighthouse 85+. Core Web Vitals pass.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY PAGE BUILDERS FAIL (DARK) ─────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PAGE BUILDER PROBLEM"
          headline="The average Elementor site scores 38 on Lighthouse. Google uses that score as a ranking signal."
          lead="Page builders don't just make your site slow — they produce code that is structurally poor for SEO. Div-heavy markup without semantic HTML, CSS specificity conflicts that require inline overrides, JavaScript that blocks rendering, and image handling that ignores modern formats. These aren't technical pedantry. They're the specific signals Google uses to determine which site gets the top position and which gets page two."
          pillars={[
            {
              title: 'Core Web Vitals is a ranking signal — and page builders fail it',
              body: 'Google\'s Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) have been a ranking signal since 2021. Sites that fail Core Web Vitals are actively disadvantaged in search results relative to sites that pass — all else being equal. The vast majority of Elementor and Divi builds fail at least two of the three Core Web Vitals thresholds on mobile. Custom WordPress themes built with performance discipline pass all three. If you\'re on a page builder, you\'re paying a tax on every organic search result your site could be ranking for.',
            },
            {
              title: 'Page builder maintenance is a compounding cost',
              body: 'Every Elementor or Divi update has the potential to break your layout. Plugin conflicts multiply as your site ages. The CSS overrides your last agency added to make the builder do something it wasn\'t designed for become a compatibility problem with the next plugin update. Most small businesses on page builders accumulate hundreds to thousands of dollars a year in developer time just managing update conflicts and visual breakages — costs that don\'t exist with a properly built custom theme that has no external framework dependency.',
            },
            {
              title: 'You can\'t hire a generalist developer to fix a page builder site',
              body: 'Page builder sites require a developer who knows that specific builder — its proprietary CSS classes, its templating system, its widget structure. A generalist WordPress developer who doesn\'t know Elementor can\'t easily work on an Elementor site. A custom theme built with standard WordPress PHP templates can be maintained by any competent WordPress developer in the world. You\'re not dependent on finding someone who knows the specific tool your agency happened to prefer.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Discovery to Custom WordPress Launch: 5 Structured Stages"
          lead="Nothing gets built without a plan. Nothing launches without sign-off. Every stage produces a deliverable you review before we move to the next one."
          stages={WP_JOURNEY_STAGES}
          closingNote="5 STAGES · 3 WEEKS (10 PAGES) TO 10 WEEKS (LARGE CUSTOM BUILDS) · FREE CONSULTATION FIRST"
        />

        {/* ── 7. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Types of Custom WordPress Projects We Deliver"
          lead="Every WordPress project is different. Here are the six most common types we build — and what makes each one technically distinct."
          sectors={WP_SERVICES}
        />

        {/* ── 8. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US WORDPRESS MARKET"
          headline="WordPress Demand Is Growing, But Most of It Is Still Built on Page Builders"
          leadParagraphs={[
            "WordPress powers 43% of the internet and continues to grow market share. The demand for WordPress web design agencies has increased 50% year-over-year as small businesses recognize the flexibility and SEO advantages of a properly built WordPress site over closed SaaS platforms. But the majority of that demand is still being met by agencies using page builders — which means most WordPress websites being built in 2025 are starting with a performance deficit they\'ll carry for the life of the site.",
            "In competitive markets — Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, and Tampa — the performance gap between page builder sites and custom theme sites translates directly into search ranking differences. Two businesses in the same city with the same content quality will rank differently if one has a custom WordPress theme passing Core Web Vitals and one has an Elementor build failing them. That\'s a mechanical advantage that compounding over time.",
            "FactoryJet has built custom WordPress sites for US businesses across every major market. Our recommendation on every project: build it right the first time, even if it takes 2–3 more weeks than a page builder alternative. The performance and SEO returns are realized over years — not quarters.",
          ]}
          stats={WP_STATS}
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US WordPress Agency vs. Page Builder vs. Freelancer"
          lead="Not all WordPress development is the same. Here's how the options compare on the metrics that actually affect your business."
          pullQuote={{
            stat: '85+',
            caption: 'Lighthouse performance score on every FactoryJet WordPress build — vs. 38 average for page builder sites.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Lighthouse scores reflect real-world measurements from comparable builds. Page builder performance scores vary by host and configuration but consistently underperform custom builds. FactoryJet fixed-price contracts cover full project scope."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price Custom WordPress Development: No Hourly Billing"
            lead="Fixed scope. Fixed price. Fixed timeline. You know what you're getting and what it costs before any work begins."
            tiers={PRICING_TIERS}
            footnote="Hosting (a monthly fee paid to the host), domain registration, and ongoing plugin license costs are separate. Maintenance retainer available post-launch for updates and content changes. You own all source code, design files, and CMS credentials at handoff."
          />
        </div>

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses we've built on WordPress."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Every Question We Get About Custom WordPress Development, Answered Straight"
          lead="No jargon. No agency spin. Clear answers to the questions every business owner asks before starting a WordPress project."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading — internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#F05A28] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/custom-web-development-vs-wordpress-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Custom web development vs WordPress: when each one wins</p>
              </a>
              <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce: which fits a WP-based business?</p>
              </a>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE CONSULTATION"
          headline="Book a WordPress Consultation and Get a Scope and Quote in 48 Hours"
          sub="In 30 minutes, we'll review your current site, understand your goals, and tell you exactly what a custom WordPress build would include — the page structure, technical architecture, timeline, and fixed cost. No pitch deck. No discovery retainer. Just a straight assessment from engineers who've built 500+ WordPress sites for US businesses."
          primaryCta={{ label: 'Book Your Free WordPress Consultation', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Website Redesign Services', href: '/services/website-redesign' }}
          objectionHandler="Fixed price, quoted upfront. Custom theme, no page builders. Free consultation first."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
