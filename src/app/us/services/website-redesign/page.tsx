import type { Metadata } from 'next';
import Script from 'next/script';
import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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
  title: 'Website Redesign Services for US Small Businesses | FactoryJet',
  description:
    'FactoryJet delivers professional website redesign services for US small businesses — faster load times, modern design, and 7-day delivery for up to 5 pages. Starting at $1,499. 60–70% cheaper than US agencies.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Website Redesign Services for US Small Businesses | FactoryJet',
    description:
      'Your website is losing you customers. FactoryJet redesigns it — modern, fast, mobile-first — in 7 days. 60–70% cheaper than a US web design agency.',
    url: 'https://factoryjet.com/us/services/website-redesign',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Website Redesign Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Redesign Services for US Small Businesses | FactoryJet',
    description:
      'Modern redesign in 7 days. Fast, mobile-first, conversion-focused. FactoryJet — 60–70% cheaper than US agencies. Free redesign audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/website-redesign',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website redesign cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s website redesign services start at $1,499 for a up to 5-page professional redesign delivered in 7 days. Full business website redesigns with 10–20 pages, custom design, and CMS integration typically run $3,500–$7,500. E-commerce redesigns on Shopify or WooCommerce start at $4,999. These prices are 60–70% below comparable US web design agencies — our India-based engineering team has served US businesses for 25+ years while maintaining full US business hours communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a website redesign take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet delivers up to 5-page website redesigns in 7 business days. Larger sites of 10–20 pages typically take 3–4 weeks. E-commerce redesigns run 4–6 weeks depending on product catalog size and custom functionality. The timeline depends on how quickly you can provide content, approve designs, and give feedback — our process is structured around 24-hour feedback loops to keep projects moving without delays.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a website redesign service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A FactoryJet website redesign includes: custom visual design (not a template), mobile-first responsive build, page speed optimization (Lighthouse 90+ target), on-page SEO setup (meta titles, descriptions, heading structure, schema markup), contact forms and lead capture, CMS integration (you can update content without a developer), Google Analytics and Search Console setup, and 30 days of post-launch support. Every redesign is built from scratch to your brand — not a reskinned WordPress theme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my small business website need a redesign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reasons drive the decision for most small businesses: (1) Speed — Google research shows 53% of mobile visitors leave a site that takes more than 3 seconds to load. Old sites built on heavy page builders average 6–12 second load times. (2) Mobile — Over 60% of US web traffic is now mobile. Websites designed before 2020 often have serious mobile usability issues that suppress Google rankings. (3) Conversion — Design credibility is the #1 factor in whether a new visitor trusts a business enough to contact them. An outdated site is actively costing you leads every day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a website redesign hurt my Google rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professionally managed redesign should improve your rankings, not hurt them. The risks come from poorly handled URL structure changes, missing redirects, or content removed during the redesign. FactoryJet\'s process includes a pre-launch SEO audit, 301 redirects for any changed URLs, preservation of all existing meta data, and schema markup additions. Done correctly, a redesign that improves page speed and mobile experience almost always leads to ranking improvements within 60–90 days of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an AI website redesign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI website redesign uses AI tools to accelerate design decisions, generate content variations, audit competitor sites, and identify conversion optimization opportunities — while a skilled human designer and developer still own the final design and code. AI tools help us analyze your competitor landscape, generate copy drafts, test color and layout combinations faster, and identify the sections of your current site that are underperforming. The result is a redesign that is both faster to deliver and better informed by data than a traditional agency process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign just part of my website — not the whole thing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Partial redesigns are common when a business has a specific conversion problem: a homepage that isn\'t generating leads, a pricing page that is confusing visitors, or a service page that isn\'t ranking. We can redesign individual pages, landing pages, or sections — with or without changing the rest of the site. We\'ll audit the full site first and tell you honestly whether a targeted fix or a full redesign is the better investment for your goals.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Redesign Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Website Redesign',
  description:
    'FactoryJet delivers professional website redesign services for US small businesses — modern design, mobile-first builds, fast load times, and 7-day delivery for up to 5 pages. 60–70% cheaper than US agencies.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Redesign',
      price: '1499',
      priceCurrency: 'USD',
      description: 'Up to 5-page professional website redesign delivered in 7 business days.',
    },
    {
      '@type': 'Offer',
      name: 'Business Redesign',
      price: '3500',
      priceCurrency: 'USD',
      description: '10–20 page website redesign with custom design, CMS, and full SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'E-Commerce Redesign',
      price: '4999',
      priceCurrency: 'USD',
      description: 'Shopify or WooCommerce redesign with product catalog, checkout, and conversion optimization.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const REDESIGN_SERVICES = [
  {
    name: 'Homepage & Brand Refresh',
    description:
      'Your homepage is your highest-traffic, highest-stakes page. We redesign it with a clear value proposition above the fold, social proof positioned where trust decisions happen, and a conversion path that moves visitors from landing to contact — without friction or confusion.',
    example: 'Clients typically see 30–60% improvement in homepage engagement metrics within 30 days.',
    linkLabel: 'Get a free redesign audit',
    linkHref: '/contact',
  },
  {
    name: 'Service & Product Pages',
    description:
      'Service pages that only list features don\'t convert. We redesign them with outcome-focused copy, structured content that answers buyer questions in the right order, and CTAs placed where intent is highest — not just at the bottom of the page.',
    example: 'Well-structured service pages generate 2–3× more quote requests than feature-list pages.',
    linkLabel: 'See our process',
    linkHref: '#process',
  },
  {
    name: 'E-Commerce Store Redesign',
    description:
      'Cart abandonment, poor mobile checkout, and slow product pages are revenue problems, not design problems. We redesign Shopify and WooCommerce stores with conversion-focused layouts, optimized product pages, and mobile-first checkout flows that reduce drop-off.',
    example: 'E-commerce redesigns regularly recover 15–25% of revenue lost to cart abandonment.',
    linkLabel: 'See e-commerce redesign pricing',
    linkHref: '#pricing',
  },
  {
    name: 'Lead Generation Landing Pages',
    description:
      'A landing page that doesn\'t convert is expensive traffic with no return. We redesign landing pages with a single clear offer, social proof matched to the audience, and form design optimized for completion — not for looking impressive.',
    example: 'Optimized landing pages outperform original versions by 40–120% in form completion rate.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Mobile-First Responsive Rebuild',
    description:
      'Over 60% of US web traffic is now on mobile — and Google uses mobile page experience as a primary ranking signal. We audit your current mobile experience, identify every friction point, and rebuild your site to pass Core Web Vitals on every device, not just desktop.',
    example: 'Mobile-first rebuilds improve Google ranking positions for mobile searches within 60 days on average.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Page Speed & Performance Redesign',
    description:
      'Your current site may look fine but be failing invisibly — slow load times, poor Core Web Vitals scores, and bloated page builder output all suppress rankings and visitor retention. We diagnose the performance gaps and rebuild with clean, optimized code that loads fast on every connection.',
    example: 'Sites rebuilt from heavy page builders to clean code see 60–80% reduction in page load time.',
    linkLabel: 'Get a free speed audit',
    linkHref: '/contact',
  },
];

const REDESIGN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Redesign Audit',
    description:
      'We analyze your current site: page speed scores, mobile usability, content structure, competitor positioning, and conversion bottlenecks. You get a plain-English summary of exactly what\'s holding back your site — before any money changes hands.',
  },
  {
    number: '02',
    title: 'Design & Content Strategy',
    description:
      'We define your sitemap, page hierarchy, and content brief — what goes on each page, in what order, and why. You approve the strategy before we touch the design. This is the step most agencies skip, which is why most redesigns don\'t improve conversion.',
  },
  {
    number: '03',
    title: 'Visual Design Mockups',
    description:
      'We design your homepage and key inner pages in Figma — desktop and mobile. You review, request revisions, and sign off. Nothing goes to development until you\'re satisfied with how it looks. Two revision rounds included.',
  },
  {
    number: '04',
    title: 'Development & CMS Build',
    description:
      'We build your approved designs into a production website — clean code, fast load times, CMS integration so your team can update content, SEO structure implemented from the first line. No page builders. No theme bloat.',
  },
  {
    number: '05',
    title: 'QA, Launch & Handover',
    description:
      'Full QA across browsers and devices, 301 redirects for any changed URLs, Google Analytics and Search Console connected, and a recorded walkthrough of your CMS. We go live when you\'re ready — and stay available for 30 days after.',
  },
];

const US_REDESIGN_STATS = [
  {
    value: '88%',
    label: 'of US consumers say they won\'t return to a site after a bad user experience — Adobe, 2023',
    sourceUrl: 'https://business.adobe.com/resources/reports/state-of-content.html',
    sourceLabel: 'Adobe',
  },
  {
    value: '53%',
    label: 'of mobile visitors abandon a site that takes more than 3 seconds to load — Google Research',
    sourceUrl: 'https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf',
    sourceLabel: 'Google',
  },
  {
    value: '75%',
    label: 'of consumers judge a business\'s credibility based on website design — Stanford Web Credibility Research',
    sourceUrl: 'https://credibility.stanford.edu/',
    sourceLabel: 'Stanford Web Credibility Research',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Web Agency' },
  { label: 'WordPress Theme' },
  { label: 'Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['$1,499', '$8,000–$30,000', '$500–$2,000', '$2,000–$8,000'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days (5-page)', '6–16 weeks', '2–4 weeks (with customization)', '4–10 weeks (variable)'],
  },
  {
    feature: 'Custom design (not a theme)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="wpt" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'Mobile-first build + Core Web Vitals',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="wpt" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'On-page SEO included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="wpt" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: 'CMS — edit without a developer',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="wpt" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="wpt" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="wpt" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
    ],
  },
  {
    feature: '500+ SMB projects delivered',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="wpt" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter Redesign',
    priceRange: 'From $1,499',
    description:
      'A complete redesign of up to 5 pages — delivered in 7 business days. Custom design, mobile-first build, basic SEO setup, and contact form. The fastest way to go from outdated to professional.',
    features: [
      'Up to 5 pages redesigned (Home, About, Services, Contact + 1 more)',
      'Custom visual design — not a template or theme',
      'Mobile-first responsive build',
      'Page speed optimized (Lighthouse 90+ target)',
      'On-page SEO: meta titles, descriptions, heading structure',
      'Contact form with email notifications',
      'Google Analytics + Search Console setup',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Redesign Audit', modal: true, region: 'us' },
  },
  {
    name: 'Business Redesign',
    priceRange: 'From $3,500',
    description:
      'A full redesign of 10–20 pages with custom design, CMS integration, conversion-focused copywriting guidance, internal linking structure, and full SEO setup. The most popular choice for service businesses and professional firms.',
    features: [
      '10–20 pages fully redesigned',
      'Custom design system (typography, colors, components)',
      'CMS integration — update content without a developer',
      'Conversion-focused page structure and CTA placement',
      'Full on-page SEO (schema markup, canonical tags, sitemaps)',
      '301 redirects for all changed URLs',
      'Two rounds of design revisions included',
      'Google Analytics 4 with event tracking',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'E-Commerce Redesign',
    priceRange: 'From $4,999',
    description:
      'A conversion-focused redesign of your Shopify or WooCommerce store — product pages, collections, mobile checkout, and performance optimization. Built to reduce cart abandonment and increase average order value.',
    features: [
      'Full Shopify or WooCommerce redesign',
      'Product page redesign with conversion-optimized layout',
      'Mobile-first checkout flow optimization',
      'Collection and category page architecture',
      'Site speed optimization — Core Web Vitals pass',
      'Product schema markup for Google Shopping',
      'Abandoned cart recovery setup',
      'Payment gateway and shipping configuration review',
      '30-day post-launch support',
    ],
    cta: { label: 'Schedule an E-Commerce Consultation', modal: true, region: 'us' },
  },
] as const;

const INDUSTRIES = [
  {
    name: 'Professional Services',
    description:
      'Law firms, accounting firms, consultants, and agencies need websites that establish credibility immediately. We redesign professional service sites with authority-first layouts, case study integration, team profiles that build trust, and clear service tier structures that make it easy to understand what you offer and who it\'s for.',
    example: 'Professional service firm redesigns typically generate 40–80% more contact form submissions within 60 days.',
    linkLabel: 'See law firm redesigns',
    linkHref: '/us/services/law-firm-website-design',
  },
  {
    name: 'Retail & E-Commerce',
    description:
      'Slow product pages, confusing navigation, and broken mobile checkout lose you customers every day. We redesign retail and e-commerce sites with performance-first architecture, conversion-optimized product pages, and mobile checkout flows that reduce abandonment.',
    example: 'E-commerce redesigns recover an average of 18% of revenue previously lost to cart abandonment.',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'Medical practices, clinics, and wellness businesses need sites that communicate trust before patients call. We redesign healthcare sites with HIPAA-aware contact forms, appointment booking integration, provider profiles, and clear insurance and service information.',
    example: 'Healthcare redesigns increase online appointment bookings by 35–55% in the first quarter.',
  },
  {
    name: 'Real Estate',
    description:
      'Real estate websites live and die on listing presentation and lead capture. We redesign agent and broker sites with IDX integration, lead magnet landing pages, neighborhood guides, and search experiences that keep buyers on your site instead of Zillow.',
    example: 'Real estate site redesigns generate 2–3× more buyer inquiries from organic traffic within 90 days.',
    linkLabel: 'See real estate web design',
    linkHref: '/us/services/real-estate-website-design',
  },
  {
    name: 'Restaurants & Hospitality',
    description:
      'Restaurant sites need fast load times on mobile (people searching while hungry), easy menu access, and frictionless reservation paths. We redesign food and hospitality sites with mobile-first layouts, online ordering integration, and Google Maps and review platform connections.',
    example: 'Restaurant redesigns see 25–40% increase in online reservation completions within 30 days.',
  },
  {
    name: 'Home Services & Contractors',
    description:
      'Plumbers, electricians, roofers, and HVAC companies compete on Google local search — and lose or win based on how fast their site loads and how easy it is to call or book from a phone. We redesign home service sites for local SEO, click-to-call, and online estimate request conversion.',
    example: 'Home service redesigns increase mobile call conversions by 40–70% within 45 days.',
  },
];

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-is-redesign', label: 'What Is a Website Redesign' },
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
      'A website redesign service involves rebuilding your existing website — its visual design, page structure, code, and content layout — to better serve your current business goals and meet modern web standards. This goes beyond updating colors or swapping images. A proper redesign addresses the underlying architecture: how pages are structured for SEO, how fast the site loads on mobile, how clearly it communicates your value to a first-time visitor, and how easy it makes it for someone to become a lead or customer. Most small business websites built before 2021 fail on at least two of these dimensions.',
  },
  {
    category: 'what-is-redesign',
    question: 'How do I know if my website needs a redesign vs. a refresh?',
    answer:
      'A refresh updates the look: new photos, updated copy, a color palette change. A redesign addresses structural and technical problems a refresh can\'t fix. Signs you need a redesign rather than a refresh: your site takes more than 3 seconds to load on mobile, visitors land on your homepage but don\'t know what you do within 5 seconds, your Google rankings have been declining despite good content, your site was built with a page builder that creates bloated code (Elementor, Divi, WPBakery), or your mobile experience has significant usability issues. We\'ll tell you honestly which you need after a free audit.',
  },
  {
    category: 'what-is-redesign',
    question: 'What is an AI website redesign and how is it different?',
    answer:
      'An AI website redesign uses artificial intelligence tools as part of the design and strategy process — not to replace human designers, but to make better decisions faster. We use AI to analyze competitor sites at scale, identify the content gaps your current site has vs. what top-ranking competitors include, generate and test copy variations, and audit your current site\'s conversion path. The design and development work is still done by experienced humans — AI accelerates the research and strategy phase, which typically produces a more informed redesign than an agency that relies purely on intuition.',
  },
  {
    category: 'what-is-redesign',
    question: 'Can a website redesign help my Google rankings?',
    answer:
      'Yes — when done correctly. A redesign that improves Core Web Vitals, mobile usability, page structure, and on-page SEO will almost always improve rankings within 60–90 days. The risks come from poor execution: not implementing 301 redirects for changed URLs, removing content that was ranking, or changing page structure in ways that fragment internal linking. FactoryJet\'s redesign process includes a pre-launch SEO audit, full 301 redirect mapping, and preservation of all ranking signals — so you launch with the SEO floor intact and improvements in place to build from.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the website redesign process look like from start to finish?',
    answer:
      'Five stages: Redesign Audit (free — we analyze your current site\'s speed, mobile experience, content structure, and competitor positioning), Design & Content Strategy (sitemap and page briefs you approve before design starts), Visual Design Mockups (desktop and mobile designs in Figma, two revision rounds), Development & CMS Build (clean code, no page builders, CMS integration), and QA, Launch & Handover (full browser/device testing, 301 redirects, Analytics setup, 30-day support). Nothing gets built until you\'ve approved the strategy. Nothing goes live until you\'ve signed off on QA.',
  },
  {
    category: 'process',
    question: 'How long does a website redesign take?',
    answer:
      'FactoryJet delivers up to 5-page redesigns in 7 business days. Business website redesigns of 10–20 pages typically take 3–4 weeks. E-commerce redesigns run 4–6 weeks depending on catalog size and custom functionality. The timeline is driven by two things: your content readiness and the speed of your feedback. Our process has structured checkpoints with 24-hour feedback windows — clients who respond quickly consistently hit the fast end of these timelines.',
  },
  {
    category: 'process',
    question: 'What do I need to provide for a website redesign?',
    answer:
      'Access to your current site, your branding assets (logo files, brand colors if defined), and clarity on your goals — who your customers are, what you want the site to achieve, and what you don\'t want carried over from the current version. We handle content audit and gap analysis, and we can work with your existing copy or provide copywriting guidance as part of the project. You don\'t need to come in with a brief or a spec — we build that with you in the strategy phase.',
  },
  {
    category: 'process',
    question: 'Do you work with my existing content or write new copy?',
    answer:
      'Both. We audit your existing content and identify what to keep, what to restructure, and where there are gaps. For most small business redesigns, we reorganize and optimize existing content rather than starting from scratch — which keeps costs down and preserves any SEO value your current pages have built. If you need net-new copy for new pages or a significantly expanded site, we offer copywriting as an add-on service. We\'ll scope this clearly in the strategy phase so you know the cost before we start.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does a website redesign cost for a small business?',
    answer:
      'FactoryJet\'s website redesign services start at $1,499 for up to 5 pages delivered in 7 days. Business website redesigns (10–20 pages with custom design and CMS) typically run $3,500–$7,500. E-commerce redesigns on Shopify or WooCommerce start at $4,999. These prices are 60–70% below comparable US agencies — our India-based engineering team has served US businesses for 25+ years without the overhead of a US agency.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a website redesign?',
    answer:
      'The most direct returns: lead volume (better conversion path and SEO), lead quality (clearer positioning attracts better-fit prospects), and operational time (a CMS you can actually use saves the ongoing cost of paying a developer to update copy). Service businesses regularly report 40–80% more contact form submissions after a conversion-focused redesign. E-commerce clients see 15–25% improvement in conversion rate. At typical small business revenue levels, a 20% improvement in lead conversion from a $3,500 redesign pays back in weeks, not months.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after a website redesign?',
    answer:
      'Yes — hosting, domain renewal, and any SaaS tools you use (booking software, live chat, email marketing). These exist regardless of who builds your site. FactoryJet does not lock you into proprietary hosting — you own your site and can host it anywhere. Typical small business hosting runs $20–$80/month. Ongoing maintenance (security updates, plugin updates, small content changes) is available as an optional monthly retainer, or you can self-manage if your team has the bandwidth.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'What technologies do you use to build redesigned websites?',
    answer:
      'We select the technology stack based on your needs. For content-heavy business sites we use Next.js (React) for maximum performance — static generation, sub-second load times, and Lighthouse 90+ scores. For clients who need a familiar CMS, we use WordPress with a custom theme (no page builders). For e-commerce we work with Shopify and WooCommerce. We don\'t use Elementor, Divi, WPBakery, or other page builders — they produce bloated code that fails Core Web Vitals and inflates page size 3–5× unnecessarily.',
  },
  {
    category: 'technical',
    question: 'What happens to my SEO during a website redesign?',
    answer:
      'A properly managed redesign should protect and improve your SEO. Our process: pre-launch audit of all ranking pages and their URLs, full 301 redirect map for any changed URLs, preservation of existing meta titles and descriptions (unless we\'re improving them), schema markup added for relevant page types, and XML sitemap submitted to Google Search Console on launch day. We track ranking positions for 30 days post-launch and flag any drops for immediate investigation. The goal is to launch with your current rankings intact and improvements in place that compound over the following 60–90 days.',
  },
  {
    category: 'technical',
    question: 'Will my redesigned site work on all devices and browsers?',
    answer:
      'Yes. We QA every site across Chrome, Firefox, Safari, and Edge on desktop, and on iOS Safari and Android Chrome on mobile — which covers over 95% of US web traffic. Mobile testing is done on real devices, not just browser emulation, because emulation misses touch target issues, font rendering differences, and scroll behavior that only appear on actual hardware. We don\'t launch until the site passes QA on all test environments.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US website redesign agency?',
    answer:
      'Three differences: price (60–70% cheaper — India-based engineers serving US businesses since 1999, no layers of account managers and PMs inflating your bill), speed (we deliver 5-page redesigns in 7 days — US agencies averaging 8–16 weeks for the same scope), and SMB focus (500+ small business projects means we understand the operational reality of your size — you don\'t need enterprise features, you need a site that generates leads and loads fast on a phone). We also own your outcome, not your timeline: fixed prices mean you know the cost before you commit, not after.',
  },
  {
    category: 'trust',
    question: 'Can I see examples of website redesigns you\'ve done?',
    answer:
      'Yes — on a strategy call we share before/after case studies relevant to your industry. Published results: a professional services firm whose redesigned site generated 3× more contact form submissions in the first 60 days; a home services contractor whose mobile redesign increased click-to-call conversion by 65%; an e-commerce brand that recovered $40,000 in monthly revenue from cart abandonment after a checkout redesign. We\'ll share examples from your specific vertical during the free audit.',
  },
  {
    category: 'trust',
    question: 'Who owns the website after FactoryJet builds it?',
    answer:
      'You do. You own all design files, code, content, and domain. We deliver everything at handoff — Figma design files, source code repository access, CMS admin credentials, and all third-party platform connections. We don\'t use proprietary builders or platforms that would trap you in an ongoing relationship. If you want to take the project to another developer after launch, you have everything you need to do that. We prefer to earn your ongoing business through results, not contracts.',
  },
  {
    category: 'trust',
    question: 'What if I\'m not happy with the redesign direction?',
    answer:
      'Every project includes two rounds of design revisions before development begins. If the first mockup isn\'t the right direction, you tell us — that\'s what the revision rounds are for. We\'ve found that redesigns that go through the proper strategy phase (sitemap approval, content brief, competitive analysis) very rarely produce a first mockup that needs a full direction change, because the design is grounded in decisions you\'ve already made and approved. We also do a free kickoff call before any design work starts to align on style references so there are no surprises when the first mockup arrives.',
  },

  {
    category: 'process',
    question: 'Can a website redesign add e-commerce, booking, or payment capabilities I don\'t have now?',
    answer:
      'Yes — adding new functional capabilities is one of the most common reasons clients come to FactoryJet for a redesign rather than just a refresh. We add: Shopify e-commerce to an existing service or content site (product catalog, checkout, payments), appointment booking and scheduling (Calendly, Cal.com, or custom-built), online payment for services (Stripe Checkout), client intake forms with CRM routing, membership and gated content sections, event registration with payment, and AI chatbot integration. The redesign process treats new functionality as a first-class requirement — not an afterthought bolted onto an existing template. New features are scoped in the discovery phase so pricing is fixed before design begins.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer ongoing support and maintenance after a website redesign?',
    answer:
      'Yes — every redesign project includes a 14–30 day post-launch support window for bug fixes, content corrections, and minor adjustments at no additional charge. Beyond that, FactoryJet offers website maintenance plans from $199/month: security updates (critical for WordPress sites), plugin and dependency updates, daily automated backups, uptime monitoring, and 2 hours of content and minor design changes per month. We also offer a 90-day redesign performance review: a structured analysis of before-and-after conversion rates, organic traffic, and Core Web Vitals to verify the redesign is delivering measurable business results. Redesign clients who skip maintenance typically see performance degradation within 12 months as outdated dependencies accumulate security vulnerabilities.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebsiteRedesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="website-redesign-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-redesign-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'Website Redesign', href: '/us/services/website-redesign' },
          { label: 'WordPress', href: '/us/services/wordpress-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Free Redesign Audit', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEBSITE REDESIGN SERVICES · USA"
          headline="Website Redesign Services That Actually Generate Leads"
          lead="Your current website is costing you customers every day — slow load times, poor mobile experience, and a homepage that doesn't convert visitors into leads. FactoryJet redesigns your site with modern design, mobile-first builds, and conversion-focused structure. Up to 5 pages in 7 days. Starting at $1,499. 60–70% cheaper than a US agency."
          primaryCta={{ label: 'Book a Free Redesign Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ redesigns delivered',
            '7-day delivery (up to 5 pages)',
            'Starting at $1,499',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT YOUR CURRENT SITE IS COSTING YOU
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                Before vs. After Redesign
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'Homepage loads in 8 seconds on mobile — 53% of visitors leave',
                    after: 'Rebuilt to load in under 2 seconds — Core Web Vitals pass on all devices',
                  },
                  {
                    before: 'Visitor lands on homepage and doesn\'t know what you do',
                    after: 'Clear value proposition above the fold — what you do, for whom, why you\'re different',
                  },
                  {
                    before: 'Contact form buried at the bottom — 2% of visitors convert',
                    after: 'CTAs placed where intent is highest — conversion rate doubles within 30 days',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Before</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#F05A28]">After</p>
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
          imageAlt="Before and after website redesign shown side by side in a browser — FactoryJet website redesign"
          stats={[
            { value: '500+', label: 'Redesigns Delivered' },
            { value: '7 Days', label: 'Delivery Guarantee' },
            { value: '60–70%', label: 'Cheaper Than US Agencies' },
            { value: '25 Yrs', label: 'Web Design Expertise' },
          ]}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ redesigns. 25 years of building. Modern sites that convert."
        />

        {/* ── 4. WHAT IS A WEBSITE REDESIGN ────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE REDESIGN EXPLAINED"
          headline="What a Website Redesign Service Actually Does, and Why Most Sites Need One by Year Three"
          lead="A website redesign is not a visual refresh. It's a structural rebuild that addresses the underlying reasons your current site isn't generating the leads and revenue it should — slow load times, poor mobile experience, weak conversion architecture, and SEO gaps that compound over time. The design is the last thing we touch, not the first."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Next.js', 'React', 'WordPress', 'Shopify', 'WooCommerce', 'Tailwind CSS', 'Figma', 'Core Web Vitals'].map((tool) => (
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
                Most small business websites are built fast and revisited rarely. By year three, they carry the weight of every shortcut taken at launch: page builder bloat that makes them slow, a mobile experience designed as an afterthought, and a homepage that describes what you do rather than communicating why a visitor should care. None of that is fixed by a new color palette.
              </p>
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  75% of consumers judge your business&apos;s credibility based on your website design. Your site is your most-visited salesperson — and it&apos;s working 24/7 whether it&apos;s converting or not.
                </p>
              </div>
              <p>
                FactoryJet starts every redesign with a performance and conversion audit of your current site — not because we want to add scope, but because the specific problems driving your lost leads are always unique. A restaurant site and a law firm site have completely different conversion bottlenecks. A site built on Elementor has different performance problems than one built on a static generator. We diagnose first, then design.
              </p>
              <p>
                Our redesigns are built without page builders — using clean Next.js or custom WordPress themes that load fast, pass Core Web Vitals, and give Google exactly the mobile experience signals it needs to rank your site. For <a href="/us/services/wordpress-development" className="text-[#F05A28] underline underline-offset-2">WordPress projects</a>, we build custom themes from scratch. For businesses needing maximum performance, we build on Next.js with static generation. The tech stack follows your requirements — not our preferences.
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
                borderTopColor: '#0052CC',
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
                  { category: 'Design', tools: 'Custom — no templates or themes' },
                  { category: 'Mobile', tools: 'Mobile-first, Core Web Vitals pass' },
                  { category: 'Speed', tools: 'Lighthouse 90+ target, clean code' },
                  { category: 'SEO', tools: 'Meta tags, schema, sitemap, redirects' },
                  { category: 'CMS', tools: 'Edit content without a developer' },
                  { category: 'Analytics', tools: 'GA4 + Search Console configured' },
                  { category: 'Forms', tools: 'Lead capture with email notifications' },
                  { category: 'Support', tools: '14–30 days post-launch included' },
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
          eyebrow="THE REAL COST OF AN OUTDATED WEBSITE"
          headline="A site that loads in 8 seconds loses 53% of mobile visitors before they see a single word you wrote."
          lead="Google research shows 53% of mobile visitors abandon a site that takes more than 3 seconds to load. The average small business website built on a heavy page builder loads in 6–12 seconds on mobile. That means more than half your mobile visitors — your highest-growth traffic segment — are leaving before your business has said anything. A website redesign isn't a marketing expense. It's plugging a leak."
          pillars={[
            {
              title: 'Your site\'s first impression happens in 50 milliseconds',
              body: 'Research from the Missouri University of Science and Technology shows that visitors form an opinion of your website in 50 milliseconds — 0.05 seconds. Design quality is the #1 credibility signal at that moment, before a single word is read. 75% of consumers admit to judging a business\'s credibility from its website design alone. An outdated site doesn\'t just look old — it signals to potential customers that the business behind it may not be professional, current, or trustworthy. That judgment happens before they read your headline.',
            },
            {
              title: 'Google ranks mobile experience, not desktop',
              body: 'Google uses mobile-first indexing — meaning it evaluates and ranks your site based on the mobile version, not the desktop version. Sites with poor Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) are actively downranked relative to competitors who pass. If your site was built before 2021 without explicit mobile optimization, it is almost certainly underperforming in search relative to what your content would otherwise earn. A redesign that passes Core Web Vitals is an SEO investment, not just a visual one.',
            },
            {
              title: 'US agencies charge enterprise prices for SMB problems',
              body: 'The average US web design agency charges $15,000–$50,000 for a business website redesign, with 8–16 week timelines and hourly billing that makes the final cost unpredictable. That pricing was built for companies with design directors, multiple stakeholder reviews, and RFP processes. FactoryJet delivers the same quality of engineering for 60–70% less — because our India-based team has served US businesses for 25+ years with none of the overhead. Fixed-price contracts mean you know the cost before we start, not after.',
            },
          ]}
        />

        {/* ── 6. WHAT WE REDESIGN ──────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE REDESIGN"
          headline="Six Types of Website Redesign Projects We Deliver for US Small Businesses"
          lead="Every redesign starts with a specific problem. Here are the six most common — and what the solution actually looks like."
          sectors={REDESIGN_SERVICES}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <div id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Free Audit to Live Redesign: 5 Structured Stages"
          lead="We don't start designing until we understand your goals. Every stage ends with a deliverable you review and approve — so no design work, no development, and no launch happens without your sign-off."
          stages={REDESIGN_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS (5-PAGE) TO 6 WEEKS (E-COMMERCE) · FREE AUDIT BEFORE ANY COMMITMENT"
        />
        </div>

        {/* ── 8. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="WHY US SMALL BUSINESSES ARE REDESIGNING NOW"
          headline="Website Redesign Has Shifted from Optional to Competitive Requirement"
          leadParagraphs={[
            "The combination of Google\'s mobile-first indexing, Core Web Vitals as a ranking factor, and AI-driven search results surfacing structured content has made 2024–2025 the most significant period of website obsolescence for small businesses since the mobile revolution. Sites built before 2021 — when Core Web Vitals weren\'t ranking signals and mobile indexing wasn\'t default — are increasingly outranked by competitors who\'ve rebuilt for the current environment.",
            "In high-competition local markets — Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, and Tampa — the gap between businesses with optimized sites and those without has widened significantly. Google\'s local pack and organic results increasingly favor sites with fast load times, mobile usability passes, and structured data. A 3-second load time advantage over a local competitor is not a UX improvement — it\'s a ranking advantage.",
            "FactoryJet has delivered 500+ website redesigns for US small businesses across every major market. The pattern is consistent: businesses that invest in a proper redesign see lead volume increase within 60–90 days, not because of magic, but because the structural improvements address the exact signals Google uses to determine which site deserves the top position.",
          ]}
          stats={US_REDESIGN_STATS}
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Agency vs. WordPress Theme vs. Freelancer"
          lead="Website redesign options vary dramatically in quality, cost, and delivery time. Here's what the decision actually looks like when you compare side by side."
          pullQuote={{
            stat: '7 days',
            caption: 'to a fully redesigned, mobile-optimized, SEO-ready website — for up to 5 pages, starting at $1,499.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect typical market ranges as of 2026. FactoryJet fixed-price contracts cover full scope — no hourly overages. US agency timelines reflect project management and approval cycle overhead, not engineering hours."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price Website Redesign: Know the Cost Before You Commit"
            lead="No hourly billing. No discovery retainers. No 'it depends.' Every tier has a fixed scope, a fixed price, and a delivery timeline we put in writing."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Hosting ($20–$80/month), domain registration, and third-party SaaS tools (booking, live chat, email marketing) are separate ongoing costs — we don't mark these up. You own all design files, source code, and CMS credentials at handoff."
          />
        </div>

        {/* ── 11. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE REDESIGN FOR"
          headline="Website Redesign Built for the Way Your Industry Actually Converts"
          lead="A restaurant site and a law firm site have completely different conversion patterns. We redesign for your industry's specific buyer behavior — not a generic template."
          sectors={INDUSTRIES}
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses we've redesigned."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Every Question We Get Before a Website Redesign, Answered Straight"
          lead="No jargon. No design-speak. Clear answers to the questions every business owner asks before committing to a redesign."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE AUDIT"
          headline="Book a Free Website Redesign Audit and Walk Away With a Plan"
          sub="In 30 minutes, we'll audit your current site's speed, mobile experience, and conversion gaps — then tell you exactly what a redesign would include, how long it takes, and what it costs. No pitch. No pressure. Just a straight assessment from a team that's redesigned 500+ small business websites — and knows what actually moves the needle."
          primaryCta={{ label: 'Book Your Free Redesign Audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See WordPress Development', href: '/us/services/wordpress-development' }}
          objectionHandler="Starts at $1,499. Up to 5 pages in 7 days. Fixed price. Free audit first."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
