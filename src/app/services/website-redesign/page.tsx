import type { Metadata } from 'next';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
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
import ComparisonTable from '@/components/v2/ComparisonTable';
import MidPageCTA from '@/components/v2/MidPageCTA';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Website Redesign Services USA: 7-Day Refresh | FactoryJet',
  description:
    'Website redesign for growing businesses and online stores. Faster pages, clearer product and service pages, rankings kept with a full redirect map.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Website Redesign Services USA: 7-Day Refresh | FactoryJet',
    description:
      'Website redesign for growing businesses and online stores. Faster pages, product and service pages that sell, every ranking URL kept or redirected once. Fixed price per phase.',
    url: 'https://factoryjet.com/services/website-redesign',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Website Redesign Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Redesign Services USA: 7-Day Refresh | FactoryJet',
    description:
      'Website redesign for growing businesses and online stores. Faster pages, product and service pages that sell, every ranking URL kept or redirected once. Fixed price per phase.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/website-redesign',
    languages: usServiceAlternates['website-redesign'],
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

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-10-29';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/website-redesign#webpage',
  url: 'https://factoryjet.com/services/website-redesign',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Redesign Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Website Redesign',
  description:
    'Website redesign for growing US businesses and online stores: rebuilt templates, faster mobile pages, product and service pages that convert, and a full 301 redirect map so rankings carry over. Fixed price per phase; 7-day delivery for business sites of up to 5 pages; store redesigns in 3 to 8 weeks.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const REDESIGN_SERVICES = [
  {
    name: 'Homepage & Brand Refresh.',
    description:
      'Your homepage is your highest-stakes page. We redesign it with a clear value proposition above the fold. Social proof is positioned where trust decisions happen. The conversion path moves visitors from landing to contact without friction.',
    linkLabel: 'Get a free redesign audit',
    linkHref: '/contact',
  },
  {
    name: 'Service & Product Pages.',
    description:
      'Service pages that only list features fail to convert. We redesign them with outcome-focused copy and structured content answering buyer questions. Strategic CTAs appear where user intent is highest.',
    linkLabel: 'See our process',
    linkHref: '#process',
  },
  {
    name: 'E-Commerce Store Redesign.',
    description:
      'Cart abandonment, poor mobile checkout, and slow product pages hurt revenue. We redesign Shopify Plus, Shopify, and WooCommerce stores. We build conversion-focused layouts, fast catalog filtering, and mobile-first checkout flows.',
    linkLabel: 'See e-commerce redesign pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Lead Generation Landing Pages.',
    description:
      'A landing page that fails to convert wastes ad spend. We redesign landing pages with a single clear offer. We match social proof to your audience and optimize form design for rapid lead capture.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Mobile-First Responsive Rebuild.',
    description:
      'Most store and service traffic now arrives on a phone, and Google ranks pages on their mobile version. We audit your mobile experience and rebuild your site to pass Core Web Vitals on every device.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Page Speed & Performance Redesign.',
    description:
      'Your current site may look fine but fail due to slow load times and bloated page builder output. We rebuild with clean Next.js code that loads in under 2 seconds.',
    linkLabel: 'Get a free speed audit',
    linkHref: '/contact',
  },
];

const REDESIGN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Redesign Audit.',
    description:
      'We analyze your current site: Core Web Vitals, mobile usability, content hierarchy, competitor positioning, and conversion bottlenecks. You receive a plain-English summary of what is holding back your site before any commitment.',
  },
  {
    number: '02',
    title: 'Design & Content Strategy.',
    description:
      'We define your sitemap, page hierarchy, and content outline: what goes on each page, in what order, and why. You approve the strategy before design starts, ensuring messaging aligns with conversion goals.',
  },
  {
    number: '03',
    title: 'Visual Design Mockups.',
    description:
      'We design your homepage and key inner pages in Figma for both desktop and mobile screens. You review, request revisions, and sign off. Two revision rounds are included in the fixed scope.',
  },
  {
    number: '04',
    title: 'Development & CMS Build.',
    description:
      'We build your approved designs into production using Next.js or clean WordPress themes. We implement structured data, clean semantic markup, fast server-side rendering, and headless CMS integrations.',
  },
  {
    number: '05',
    title: 'QA, Launch & Handover.',
    description:
      'We run full QA across devices and browsers. We generate an automated 301 redirect map for all changed URLs. We also connect Google Analytics 4 and Google Search Console. Defects are fixed inside the build price for a cover period agreed before work starts.',
  },
];

const US_REDESIGN_STATS = [
  {
    value: '88%',
    label: 'of US consumers say they will not return to a site after a bad user experience (Adobe Research).',
    sourceUrl: 'https://business.adobe.com/resources/reports/state-of-content.html',
    sourceLabel: 'Adobe',
  },
  {
    value: '53%',
    label: 'of mobile visitors abandon a site that takes more than 3 seconds to load (Google Research).',
    sourceUrl: 'https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf',
    sourceLabel: 'Google',
  },
  {
    value: '75%',
    label: 'of consumers judge business credibility based on website design (Stanford Web Credibility).',
    sourceUrl: 'https://credibility.stanford.edu/',
    sourceLabel: 'Stanford Web Credibility Research',
  },
];

/* Redesign vs rebuild vs replatform (replaced the FactoryJet vs agency vs
   theme vs freelancer table on 2026-10-29: that table sold a brochure-site
   buyer, and this page now speaks to businesses and stores that already trade). */
const COMPARISON_COLUMNS = [
  { label: 'Redesign', isFactoryJet: true },
  { label: 'Rebuild' },
  { label: 'Replatform' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'What it means.',
    values: [
      'New design and templates on the platform you already run. Content, products and accounts stay.',
      'New code from the ground up, usually because the old build cannot be fixed. Content is carried over.',
      'The whole site or store moves to different software, for example WooCommerce or Magento to Shopify.',
    ],
  },
  {
    feature: 'Pick it when.',
    values: [
      'The platform does the job and the pages, speed or mobile layout do not.',
      'The theme or page builder is so patched that every change breaks something.',
      'The platform itself blocks how you sell: pricing rules, catalogue size, integrations or support ending.',
    ],
  },
  {
    feature: 'Typical timeline.',
    values: [
      '7-day delivery for business sites up to 5 pages; 3 to 5 weeks for a custom-theme store.',
      '3 to 5 weeks for a platform store; 8 to 14 weeks for headless or custom.',
      '5 to 8 weeks for a store migration with subscriptions or B2B pricing.',
    ],
  },
  {
    feature: 'URLs that change.',
    values: [
      'A few, each mapped to one 301 redirect.',
      'Many, depending on the new structure.',
      'Most, so the redirect map is the biggest single task.',
    ],
  },
  {
    feature: 'Customer accounts and orders.',
    values: [
      'Untouched.',
      'Untouched if the platform stays the same.',
      'Migrated, then checked against the old store before launch.',
    ],
  },
  {
    feature: 'Ranking risk.',
    values: [
      'Low with a redirect map.',
      'Medium: needs URL parity checks.',
      'Highest: needs the full map, testing and two weeks of Search Console checks.',
    ],
  },
  {
    feature: 'Where to read more.',
    values: [
      'This page.',
      'Our ecommerce development page.',
      'Our replatforming guides.',
    ],
  },
];

/* House terms (approved sitewide 15-16 Oct 2026). Reused verbatim in meaning,
   written fresh for this page. */
const HOUSE_TERMS = [
  { k: 'Before you sign', v: 'We show working software on your own data. For a store, that is a draft theme built with your real products, prices and collections.' },
  { k: 'How it is priced', v: 'Each phase is scoped, priced and signed on its own, as a fixed price in writing. You can stop after any phase.' },
  { k: 'What you own', v: 'The code and the repository, from day one. Hosting, apps and AI tools can run in your own accounts at cost, with no markup.' },
  { k: 'After launch', v: 'Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: each change is quoted and approved, with no monthly minimum.' },
] as const;

const PRICING_TIERS = [
  {
    name: 'Starter Redesign.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'A complete redesign of up to 5 pages, delivered in 7 business days. Custom design, mobile-first build, basic SEO setup, and contact form. The fastest way to go from outdated to professional.',
    features: [
      'Up to 5 pages redesigned in Next.js or clean WordPress.',
      'Custom visual design in Figma, not a template or theme.',
      'Mobile-first responsive build passing Core Web Vitals.',
      'Page speed optimized with a Lighthouse 90+ target.',
      'On-page SEO with meta titles, descriptions, and heading hierarchy.',
      'Contact form with email notifications and CRM routing.',
      'Google Analytics 4 and Google Search Console setup.',
      'Defects fixed inside the build price for an agreed cover period.',
    ],
    cta: { label: 'Book a Redesign Audit', modal: true, region: 'us' },
  },
  {
    name: 'Business Redesign.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'A full redesign of 10-20 pages with custom UX design and CMS integration. Includes conversion copywriting guidance, internal linking, and full SEO setup. The most popular choice for professional firms.',
    features: [
      '10-20 pages fully redesigned with modern UX architecture.',
      'Custom Figma design system with typography, colors, and components.',
      'Headless CMS or WordPress integration to update content without code.',
      'Conversion-focused page structure and strategic CTA placement.',
      'Full on-page SEO including schema markup, canonical tags, and sitemaps.',
      'Automated 301 redirect map for all legacy URLs to protect rankings.',
      'Two rounds of design revisions included prior to development.',
      'Google Analytics 4 event tracking for form submissions and calls.',
      'Defects fixed inside the build price for an agreed cover period.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'E-Commerce Redesign.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'A conversion-focused redesign of your Shopify or WooCommerce store, product pages, collections, mobile checkout, and performance optimization. Built to reduce cart abandonment and increase average order value.',
    features: [
      'Full Shopify Plus, Shopify, or WooCommerce store redesign.',
      'Product page redesign with conversion-optimized layout and trust badges.',
      'Mobile-first checkout flow optimization reducing cart abandonment.',
      'Collection and category page architecture with faceted filtering.',
      'Site speed optimization ensuring Core Web Vitals pass across devices.',
      'Product structured data and JSON-LD schema markup for rich results.',
      'Automated abandoned cart recovery flow configuration with Klaviyo.',
      'Stripe, Apple Pay, and payment gateway configuration review.',
      'Defects fixed inside the build price for an agreed cover period.',
    ],
    cta: { label: 'Schedule an E-Commerce Consultation', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-is-redesign', label: 'What Is a Website Redesign' },
  { key: 'choosing', label: 'Choosing a Redesign Partner' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'trust', label: 'Trust & Results' },
];

const FAQ_ITEMS = [
  /* ── What Is a Website Redesign ── */
  {
    category: 'what-is-redesign',
    question: 'What is a website redesign service?',
    answer:
      'A website redesign service rebuilds your digital presence across architecture, user interface, code, and content strategy. It is not a cosmetic visual edit. A professional redesign fixes poor Core Web Vitals and updates legacy code to modern Next.js or WordPress. It also implements structured data and aligns page hierarchy with conversion goals.',
  },
  {
    category: 'what-is-redesign',
    question: 'How do I know if my website needs a redesign vs. a refresh?',
    answer:
      'A visual refresh updates imagery and typography within existing templates. A redesign is required when your website fails mobile Core Web Vitals or takes over three seconds to load. It is also needed if you lack schema markup or suffer from high bounce rates. Finally, a rebuild is essential if you run on bloated builders like Elementor or Divi.',
  },
  {
    category: 'what-is-redesign',
    question: 'Can a website redesign help my Google rankings?',
    answer:
      'Yes. A search-focused redesign improves organic search performance. It optimizes Largest Contentful Paint and resolves Cumulative Layout Shift. We also establish clean semantic HTML and structured internal linking. In addition, an exact 301 redirect map for legacy URLs preserves accumulated backlink authority and search ranking signals.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the website redesign process look like from start to finish?',
    answer:
      'Our redesign process spans five structured phases. We begin with a speed and SEO audit, followed by sitemap wireframing and custom Figma mockups. Next, we write clean Next.js or WordPress code with CMS integrations. Finally, we run QA with automated 301 redirects and Google Search Console verification.',
  },
  {
    category: 'process',
    question: 'How long does a website redesign take?',
    answer:
      'FactoryJet offers 7-day delivery for business sites of up to 5 pages. Larger 10 to 20-page websites take 3 to 4 weeks. A custom-theme store redesign on Shopify or WooCommerce takes 3 to 5 weeks, stores with subscriptions, B2B pricing or a migration 5 to 8 weeks, and headless builds 8 to 14 weeks. Catalog size and ERP integrations move the timeline most.',
  },
  {
    category: 'process',
    question: 'What do I need to provide for a website redesign?',
    answer:
      'You provide domain registrar access and brand identity assets like logos. You also supply current hosting logins and existing photography. Our team conducts the technical audit, content inventory, and user flow mapping. We collaborate with you during discovery to refine copy and CTA placement.',
  },
  {
    category: 'process',
    question: 'Do you work with my existing content or write new copy?',
    answer:
      'We audit and restructure your existing content to protect current keyword rankings while improving conversion readability. We organize legacy text into scannable sections with structured data. If your project requires net-new service pages or revised value propositions, we offer conversion-focused copywriting as an integrated service.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does a website redesign cost for a growing business or online store?',
    answer:
      'A website redesign costs $3,000 to $75,000, with agencies charging $5,000 to $75,000 and freelancers $3,000 to $10,000, according to WebFX. The price depends on page volume, headless CMS or WordPress integration, e-commerce checkout requirements, and custom animations. FactoryJet quotes a fixed price up front after a free site audit, milestone-paid with no hourly billing surprises.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a website redesign?',
    answer:
      'A high-performance redesign delivers ROI by increasing lead conversion rates, reducing mobile bounce rates, and lifting organic search visibility. Google research shows 53% of mobile visitors leave a page that takes more than 3 seconds to load, so speed fixes alone keep more of the traffic you already pay for. We agree the numbers to track before work starts, so you can judge the return yourself.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after a website redesign?',
    answer:
      'You maintain direct ownership of your hosting and domain with zero proprietary lock-in. Ongoing costs include hosting, domain fees and SaaS tools like Klaviyo, Stripe, or Calendly, all of which can sit in your own accounts at cost. Support from us is optional: each change is quoted and approved before we do it, and there is no monthly minimum.',
  },
  {
    category: 'pricing',
    question: 'How much does website redesign cost in USA?',
    answer:
      'US website redesigns cost $3,000 to $75,000, with agencies charging $5,000 to $75,000, according to WebFX. Where you land depends on scope, from fixed-scope SMB marketing sites to large enterprise redesigns requiring custom API integrations. FactoryJet delivers fixed-price quotes following a technical audit. Milestone payments ensure accountability, and all contracts include full 301 redirect mapping.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'What technologies do you use to build redesigned websites?',
    answer:
      'We build high-performance marketing websites using Next.js, React, TypeScript, and Tailwind CSS for instant server-side rendering and sub-second page loads. For content teams requiring traditional admin dashboards, we build lightweight custom WordPress themes without page builders. For e-commerce, we develop on Shopify Plus and WooCommerce.',
  },
  {
    category: 'technical',
    question: 'What happens to my SEO during a website redesign?',
    answer:
      'We safeguard your organic search visibility through a systematic migration protocol. We inventory all indexed URLs and create an exact 1:1 301 redirect map. We also preserve existing meta descriptions and heading hierarchy. Finally, we inject JSON-LD structured data and submit updated XML sitemaps to Google Search Console on launch day.',
  },
  {
    category: 'technical',
    question: 'Will my redesigned site work on all devices and browsers?',
    answer:
      'Yes. Every build is rigorously tested across Chrome, Safari, Firefox, and Edge. We also validate iOS and Android mobile viewports. We verify touch targets, responsive breakpoints, and WCAG accessibility on mobile hardware. Anything that fails is fixed before launch.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US website redesign agency?',
    answer:
      'Traditional US web agencies bill unpredictable hourly rates across 8 to 16-week cycles. FactoryJet operates on transparent, milestone-paid fixed pricing with senior full-stack engineers. We ship 5-page redesigns in 7 business days. We protect SEO with 301 redirects and provide full source code ownership at launch.',
  },
  {
    category: 'trust',
    question: 'Can I see examples of website redesigns you have done?',
    answer:
      'Yes. On the first call we walk you through live sites and stores we have built, with the old and new versions side by side. You can also ask for a working draft of your own redesign before you sign.',
  },
  {
    category: 'trust',
    question: 'Who owns the website after FactoryJet builds it?',
    answer:
      'You own 100% of all deliverables upon final milestone payment. This includes Figma UI design files, production code repositories on GitHub, CMS admin credentials, and Google Analytics 4 accounts. We never use proprietary platforms or restrictive contracts that limit your ability to host or modify your code.',
  },
  {
    category: 'trust',
    question: 'What if I am not happy with the redesign direction?',
    answer:
      'Every project includes two structured revision cycles during the Figma design phase before development begins. We align on visual benchmarks, typography, and color palettes during initial discovery. This ensures the initial design matches your brand identity and conversion goals.',
  },
  {
    category: 'trust',
    question: 'Who is the best website redesign agency in USA?',
    answer:
      'Pick the agency that will show you a working draft before you sign, map a 301 redirect for every URL that changes, and quote a fixed price per phase. FactoryJet does all three. We also test Core Web Vitals before launch and hand you the full codebase, so you are never tied to us for changes.',
  },

  /* ── Choosing a Redesign Partner ── */
  {
    category: 'choosing',
    question: 'Which website redesign company should a growing business or online store choose?',
    answer:
      'Choose a web redesign agency that provides an upfront technical audit rather than generic estimates. Verify that their scope includes full 301 redirect mapping, mobile Core Web Vitals targets, complete code ownership, and fixed milestone pricing. Avoid providers that lock your site into proprietary builders or charge hosting markups.',
  },
  {
    category: 'choosing',
    question: 'What should I ask a website redesign agency before hiring them?',
    answer:
      'Ask five critical questions: Will you map 301 redirects for every changed URL? Will you test Core Web Vitals before launch? Do I receive full ownership of code and Figma design files? Is this project fixed-price or hourly? What technical warranty is provided post-launch? Clear answers identify dependable engineering partners.',
  },
  {
    category: 'choosing',
    question: 'Is it better to redesign my website or rebuild it on a new platform?',
    answer:
      'Redesign within your existing CMS if the platform meets operational needs and only requires modern UX and speed optimization. Replatform to Next.js, Shopify Plus, or headless architecture if your current CMS imposes performance bottlenecks. Replatforming is also best if plugin incompatibilities or high maintenance costs hinder business growth.',
  },
  {
    category: 'choosing',
    question: 'Can you redesign my online store while it keeps taking orders?',
    answer:
      'Yes. On Shopify we build the redesign as an unpublished theme inside your live store, so orders, customer logins and apps keep running the whole time. On WooCommerce we work on a staging copy. Launch is a theme switch or a staging push, followed by the redirect map for any product or collection URLs that changed. Shoppers never see a maintenance page.',
  },
  {
    category: 'choosing',
    question: 'Can I see a draft of my redesigned store before I sign a contract?',
    answer:
      'Yes. We show working software on your own data before you sign. For a store redesign that means a draft theme built with your real products, prices and collections, so you judge it on your own catalog rather than a mock-up. If it is right, we scope the full redesign and quote a fixed price for each phase.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet redesigns your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-safe website redesigns for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3-4 | Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5-6 | Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and training. Defects are fixed inside the build price for a cover period agreed before work starts.',
    },
  ],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Website Redesign', url: 'https://factoryjet.com/services/website-redesign' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/website-redesign#breadcrumb',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebsiteRedesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="website-redesign-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="website-redesign-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="website-redesign-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="website-redesign-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'Website Redesign', href: '/services/website-redesign' },
          { label: 'WordPress', href: '/services/wordpress-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Free Redesign Audit', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_website_redesign_hero"
          trustText="Working software on your own data before you sign. Founder replies within 24 hours."
        />}
          eyebrow="WEBSITE REDESIGN SERVICES · USA"
          headline="Website Redesign Services That Actually Generate Leads."
          lead="A redesign should win back the buyers your current site loses, without throwing away the pages that already rank. We rebuild slow templates, confusing navigation and thin product and service pages, keep or redirect every URL that earns traffic, and put a fixed price on each phase before work starts. Running an online store? You see a draft on your own products first."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ businesses served since 2014.',
            'Every ranking URL kept or redirected once.',
            'Fixed price per phase, in writing.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT YOUR CURRENT SITE IS COSTING YOU.
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                Before vs. After Redesign.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'Homepage loads in 8 seconds on mobile; 53% of visitors leave.',
                    after: 'Rebuilt to load in under 2 seconds: Core Web Vitals pass on all devices.',
                  },
                  {
                    before: 'Visitor lands on homepage and does not know what you do.',
                    after: 'Clear value proposition above the fold explaining your core services.',
                  },
                  {
                    before: 'Contact form buried at the bottom, where 2% of visitors convert.',
                    after: 'CTAs placed where intent is highest, doubling conversion within 30 days.',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Before</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#B23E13]">After</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/card-redesign.webp"
          imageAlt="Before and after website redesign shown side by side in a browser, FactoryJet website redesign"
          stats={[
            { value: '500+', label: 'Businesses Served' },
            { value: '97%', label: 'Delivered On Time' },
            { value: 'Fixed', label: 'Price Per Phase' },
            { value: '10+ Yrs', label: 'Web Design Expertise' },
          ]}
        />

        {/* ── 1c. STORE OWNERS ─────────────────────────────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">FOR STORES THAT ALREADY SELL</p>
                <h2 className="mt-6 font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.5rem]">
                  Redesigning an online store?
                </h2>
                <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                  A store redesign carries more risk than a brochure site: product URLs that rank, customer logins, apps wired into checkout, and orders that cannot stop while the work happens. On Shopify we build the new design as an unpublished theme in your live store, with your real products, so you approve it on your phone before anything changes for shoppers.
                </p>
                <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                  If the review shows the platform is the problem rather than the design, we say so and plan a move instead. Store builds run 3 to 5 weeks on a custom theme and 5 to 8 weeks with subscriptions, B2B pricing or a migration.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/services/ecommerce-development" className="inline-flex items-center rounded-full bg-[#B23E13] px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-white">
                    See ecommerce development
                  </a>
                  <a href="/replatforming" className="inline-flex items-center rounded-full border border-fj-neutral-200 bg-white px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-ink">
                    Compare replatforming routes
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7" style={{ borderTopWidth: '3px', borderTopColor: '#F05A28' }}>
                  <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                    What a store redesign keeps
                  </p>
                  <ul className="mt-5 space-y-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-ink">
                    <li>Products, variants, prices and reviews.</li>
                    <li>Customer accounts and order history.</li>
                    <li>Product and collection URLs, or a 301 for each one that changes.</li>
                    <li>Apps that still earn their place; the rest get removed.</li>
                    <li>Taking orders every day of the project.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses served. 12 years of building. Redesigns that keep what already works."
          description="Redesigns for growing businesses, Shopify stores, B2B companies and DTC brands. Fixed price per phase, every ranking URL kept or redirected once, and the full codebase handed to you at launch."
        />

        {/* ── 4. WHAT IS A WEBSITE REDESIGN ────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE REDESIGN EXPLAINED."
          headline="What a Website Redesign Service Actually Does, and Why Most Sites Need One by Year Three."
          lead="A website redesign is not a visual refresh. It is a structural rebuild addressing why your current site is not generating leads. We fix slow load times, poor mobile experience, weak conversion paths, and compounding SEO gaps. The visual design is the last thing we touch, not the first."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Next.js', 'React', 'WordPress', 'Shopify', 'WooCommerce', 'Tailwind CSS', 'Figma', 'Core Web Vitals'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                Most business websites and online stores are built fast and revisited rarely. By year three, they carry the weight of shortcuts taken at launch. Page builder bloat slows load times, mobile experience is treated as an afterthought, and homepages describe features rather than customer value. None of that is fixed by a new color palette.
              </p>
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  75% of consumers judge your business&apos;s credibility based on your website design. Your site is your most-visited salesperson, and it&apos;s working 24/7 whether it&apos;s converting or not.
                </p>
              </div>
              <p>
                FactoryJet starts every redesign with a performance and conversion audit of your current site. We do not add unnecessary scope. Instead, we diagnose the exact problems driving lost leads. A restaurant site and a law firm site have completely different conversion bottlenecks. A site built on Elementor has different performance problems than one built on a static generator. We diagnose first, then design.
              </p>
              <p>
                Our redesigns are built without page builders. We use clean Next.js or custom WordPress themes that load fast and pass Core Web Vitals. These modern builds give Google the exact mobile experience signals needed to rank your site. For <a href="/services/wordpress-development" className="text-[#B23E13] underline underline-offset-2">WordPress projects</a>, we build custom themes from scratch. For businesses needing maximum performance, we build on Next.js with static generation. The tech stack follows your requirements, not our preferences.
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
                  What Every Redesign Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'Design', tools: 'Custom, no templates or themes.' },
                  { category: 'Mobile', tools: 'Mobile-first, Core Web Vitals pass.' },
                  { category: 'Speed', tools: 'Lighthouse 90+ target, clean code.' },
                  { category: 'SEO', tools: 'Meta tags, schema, sitemap, redirects.' },
                  { category: 'CMS', tools: 'Edit content without a developer.' },
                  { category: 'Analytics', tools: 'GA4 + Search Console configured.' },
                  { category: 'Forms', tools: 'Lead capture with email notifications.' },
                  { category: 'Support', tools: 'Defect cover agreed up front.' },
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
                  Fixed price. You own everything at handoff.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE COST OF AN OUTDATED SITE (DARK) ───────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE REAL COST OF AN OUTDATED WEBSITE."
          headline="A site that loads in 8 seconds loses 53% of mobile visitors before they see a single word you wrote."
          lead="Google research shows 53% of mobile visitors abandon a site that takes more than 3 seconds to load. Sites built on heavy page builders often miss that 3 second mark on a phone. When they do, more than half of your mobile visitors leave before your page has said anything. A redesign that fixes load time stops that loss."
          pillars={[
            {
              title: "Your site's first impression happens in 50 milliseconds.",
              body: "Research shows visitors form an opinion of your website in 50 milliseconds. Design quality is the primary credibility signal before a single word is read. In fact, 75% of consumers judge credibility from web design alone. An outdated site does not just look old. It signals that your business may not be modern or trustworthy. That judgment happens before visitors read your headline.",
            },
            {
              title: 'Google ranks mobile experience, not desktop.',
              body: 'Google uses mobile-first indexing to evaluate and rank your site based on mobile performance. Sites with poor Core Web Vitals are actively downranked relative to competitors who pass. If your site was built before 2021 without mobile optimization, it underperforms in search. A redesign that passes Core Web Vitals is an essential SEO investment.',
            },
            {
              title: 'Hourly billing turns a redesign into an open-ended bill.',
              body: 'The average US web design agency charges several times more for a business website redesign. They work on 8-16 week timelines with unpredictable hourly billing. FactoryJet delivers senior engineering on fixed-price, milestone-paid terms. Our team has served US businesses for 12+ years with lean operations. You know the exact cost before we start.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <div id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS."
          headline="From Free Audit to Live Redesign: 5 Structured Stages."
          lead="We do not start designing until we understand your goals. Every stage ends with a deliverable you review and approve. No design work, development, or launch happens without your explicit sign-off."
          stages={REDESIGN_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS (UP TO 5 PAGES) TO 8 WEEKS (STORE WITH MIGRATION) · FREE AUDIT BEFORE ANY COMMITMENT."
        />
        </div>

        {/* ── 6b. MID-PAGE CTA ─────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Want to know if your site needs a redesign, a rebuild or a new platform?"
          sub="Send your site or store address. The founder looks at speed, mobile pages and the URLs that earn traffic, then tells you which of the three jobs fits and what each phase would involve."
          label="Get a redesign audit"
        />

        {/* ── 7. WHAT WE REDESIGN ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE REDESIGN"
          headline="Six Types of Website Redesign Projects We Deliver for Growing Businesses and Online Stores"
          lead="Every redesign starts with a specific problem. Here are the six most common, and what the solution actually looks like."
          sectors={REDESIGN_SERVICES}
          variant="cards"
        />

        {/* ── 8. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="WHY US BUSINESSES ARE REDESIGNING NOW."
          headline="Website Redesign Has Shifted from Optional to Competitive Requirement."
          leadParagraphs={[
            "Google uses mobile-first indexing and Core Web Vitals as primary ranking factors. Modern search results also surface structured schema content. Together, these standards make outdated business sites obsolete faster than ever. Sites built before 2021 lack these modern signals and are steadily outranked by competitors who rebuilt.",
            "In high-competition local markets like Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, and Tampa, the gap has widened significantly. Google local packs and organic results favor sites with fast load times, mobile usability passes, and structured data. A fast load time gives you a direct ranking advantage over competitors.",
            "FactoryJet has worked with 500+ businesses since 2014, most of them in commerce. On a store that already sells, the redesign is judged on two numbers: whether rankings hold through launch, and whether more phone visitors reach the basket. We plan the redirect map and the mobile product page before any visual design starts.",
          ]}
          stats={US_REDESIGN_STATS}
        />

        {/* ── 8B. INTERACTIVE VALUE CALCULATOR ────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive Revenue & Scope Estimator.
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Calculate the ROI of a High-Performance Website Redesign.
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Estimate how much revenue your current website is leaking and what a sub-second, conversion-optimized redesign delivers to your bottom line.
              </p>
            </div>
            <WebDesignValueCalculator region="us" />
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Redesign vs. Rebuild vs. Replatform: Which One Your Site Needs"
          lead="Three different jobs that often get sold under one name. They differ in what moves, how long they take, and how much they put your rankings and customer data at risk."
          pullQuote={{
            stat: '1 hop',
            caption: 'per redirect, whichever path you pick. Every URL that earns traffic is kept or forwarded once, never through a chain.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Timelines are the ranges we work to on our own projects. Not sure which column you are in? The free redesign audit answers that before you commit to any of them."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price Website Redesign: Know the Cost Before You Commit"
            lead="No hourly billing. No discovery retainers. No 'it depends.' Every tier has a fixed scope, a fixed price, and a delivery timeline we put in writing."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Domain registration and third-party SaaS tools are separate ongoing costs paid directly to those providers. We do not mark these up. You own all design files, source code, and CMS credentials at handoff."
          />
        </div>

        {/* ── 11. HOUSE TERMS ──────────────────────────────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="fj-eyebrow">TERMS ON EVERY REDESIGN</p>
              <h2 className="mt-6 font-fj-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-fj-ink md:text-[2.5rem]">
                How a FactoryJet redesign is priced and owned
              </h2>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {HOUSE_TERMS.map((t) => (
                <div key={t.k} className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
                  <dt className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>{t.k}</dt>
                  <dd className="mt-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink">{t.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="Rated 4.9/5 on Google across 500+ projects."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Frequently Asked Questions: Website Redesign Answered Straight"
          lead="No jargon. No design-speak. Clear answers to the questions every business owner asks before committing to a redesign."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/shopify-vs-woocommerce-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Shopify vs WooCommerce: should your redesign include a platform switch?</p>
              </a>
              <a href="/blog/austin-ecommerce-checkout-optimization-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Austin ecommerce checkout optimization: redesign-ready playbook</p>
              </a>
              <a href="/services/webflow-development#migration" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Moving platforms as part of the redesign? How to migrate to Webflow without losing rankings</p>
              </a>
              <a href="/services/website-maintenance" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Once the new site is live: website maintenance that keeps it updated and secure</p>
              </a>
              <a href="/replatforming/wix-to-shopify" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Redesigning a Wix store? What moves to Shopify and how the redirects work</p>
              </a>
              <a href="/replatforming/squarespace-to-shopify" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Outgrowing Squarespace Commerce? The Squarespace to Shopify migration steps</p>
              </a>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE AUDIT"
          headline="Book a Website Redesign Audit and Walk Away With a Plan."
          sub="In 30 minutes, we audit your site speed, mobile experience, and conversion gaps. We then outline exactly what a redesign includes, how long it takes, and what it costs. No pitch. No pressure. Just a straight assessment from a team that has worked with 500+ businesses since 2014."
          primaryCta={{ label: 'Book Your Free Redesign Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See WordPress Development', href: '/services/wordpress-development' }}
          objectionHandler="Fixed price per phase. You own the code. Support optional, no monthly minimum."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
