import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

/**
 * India e-commerce city pages, indexed near the foot of this page.
 *
 * The web-design cities are NOT listed here: this hub has rendered
 * IN_WEB_DESIGN_CITIES (from @/data/inWebDesignCities) since 2026-07-26, so those
 * pages already have a hub link. Only the /services/ecommerce-development/{city}
 * pages were footer-only, and they live under a US-owned parent hub with no India
 * index of their own, which is why they land here.
 *
 * Every slug below was checked against src/app on 2026-08-03. Do not add a city
 * here before its page exists: a linked-but-missing URL gets a 404 verdict cached
 * by Google that only a manual GSC recrawl clears.
 */
const IN_ECOM_CITIES: ReadonlyArray<{ slug: string; name: string }> = [
  { slug: 'mumbai', name: 'Mumbai' },
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'bangalore', name: 'Bangalore' },
  { slug: 'hyderabad', name: 'Hyderabad' },
  { slug: 'chennai', name: 'Chennai' },
  { slug: 'pune', name: 'Pune' },
  { slug: 'ahmedabad', name: 'Ahmedabad' },
  { slug: 'kolkata', name: 'Kolkata' },
  { slug: 'surat', name: 'Surat' },
  { slug: 'jaipur', name: 'Jaipur' },
  { slug: 'kochi', name: 'Kochi' },
  { slug: 'lucknow', name: 'Lucknow' },
  { slug: 'chandigarh', name: 'Chandigarh' },
];
import { webDesignAlternates } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';
import { IN_WEB_DESIGN_CITIES } from '@/data/inWebDesignCities';

/* Internal-linking data (added 2026-07-26 to fix orphaned city pages). */

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best Web Design Company in India (2026) | FactoryJet',
  description:
    'Looking for the best web design company in India? Compare the top 10, built from live search data. Mobile-first, Lighthouse 95+, full code ownership.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Web Design Company in India (2026) | FactoryJet',
    description:
      'Compare the top 10 web design companies in India, built from live search data. Next.js, WordPress and Shopify. Mobile-first, Lighthouse 95+.',
    url: 'https://factoryjet.com/web-design',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Company India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Web Design Company in India (2026) | FactoryJet',
    description: 'Custom websites for Indian businesses. Mobile-first. 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design',
    languages: webDesignAlternates,
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

/* Named-competitor comparison. Every company below currently ranks on Google
   for web design or web development in India (checked 31 July 2026), and each
   "best for" line is written from that company's OWN description of itself.
   We do not invent team sizes, client counts or specialisms. */
const IN_WEB_DESIGN_FIRMS = [
  {
    name: 'FactoryJet',
    bestFor:
      'Businesses that want a custom, mobile-first site with full code ownership on launch day and a fixed quote agreed before work starts. Strongest fit if the site has to rank as well as look good. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'Acodez',
    bestFor:
      'Companies wanting an award-winning firm handling web alongside software and mobile apps. They describe themselves as an international award-winning IT company based in India.',
  },
  {
    name: 'Webbitech',
    bestFor:
      'Buyers who value a long track record. Their own listing leads with more than fifteen years in website design and web development.',
  },
  {
    name: 'FODUU',
    bestFor:
      'Smaller budgets that want a packaged, low-entry-price website. They advertise entry pricing openly and describe fourteen-plus years of work.',
  },
  {
    name: 'Tenet',
    bestFor:
      'Brands whose priority is conversion rather than brochure design. They describe building high-performing, conversion-focused websites.',
  },
  {
    name: 'Webandcrafts',
    bestFor:
      'Larger builds needing both front-end and back-end depth in one team, which is how they describe their own capability.',
  },
  {
    name: 'OrangeMantra',
    bestFor:
      'Enterprises that want technology and marketing under one roof, and that are comparing against the large Indian IT firms.',
  },
  {
    name: 'Invoidea',
    bestFor:
      'Businesses wanting website design bundled with app development, UI/UX and digital marketing, which is the mix they list.',
  },
  {
    name: 'Matebiz',
    bestFor:
      'Companies wanting web design paired with ongoing search work. They cite Clutch recognition alongside a web and digital marketing offer.',
  },
  {
    name: 'Classic Informatics',
    bestFor:
      'Product and engineering-led builds rather than marketing sites, which is where their own positioning sits.',
  },
];


// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design#webpage',
  url: 'https://factoryjet.com/web-design',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const firmsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top 10 web design companies in India (2026)',
  numberOfItems: IN_WEB_DESIGN_FIRMS.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: IN_WEB_DESIGN_FIRMS.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.name,
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Services India',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: 'Web Design & Development',
  description:
    'Custom website design and development for Indian businesses. Next.js, WordPress, and Shopify. 7-day delivery on Starter tier. Lighthouse 95+ performance. Mobile-first, full code ownership.',
  
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/web-design',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data constants
───────────────────────────────────────────────────────────────────────────── */

const IN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute brief where we map your business goals, target audience, key competitors, and site architecture. For Indian SMBs, this is where we define your local SEO strategy, city-level targeting for Mumbai, Bangalore, Delhi, or wherever your buyers search.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Full Figma wireframes and visual mockups for every key page, desktop and mobile. You approve the design before we write a line of code. Two revision rounds included. Mobile-first layout is non-negotiable: 70%+ of your visitors are on phones, often on 4G.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering in Next.js, WordPress, or Shopify. Daily commits to your GitHub repo. Staging URL available within 48 hours. WhatsApp button, Razorpay, PhonePe, and Indian payment gateway integrations are handled in this phase, not added on later.',
  },
  {
    number: '04',
    title: 'Review',
    description:
      'Live staging review with your team. Two rounds of content and design feedback. We test across Chrome, Safari, and the Android browsers your Indian audience actually uses, including bandwidth-aware testing for 4G conditions.',
  },
  {
    number: '05',
    title: 'Ship',
    description:
      'Production launch with DNS transfer, SSL setup, Google Search Console verification, GA4 configuration, and a recorded handover session. Your code, your repo, your hosting, no dependency on FactoryJet to keep the lights on.',
  },
];

const IN_WEB_DESIGN_TYPES = [
  {
    name: 'Business Websites',
    description:
      'Clean, fast, conversion-focused websites for Indian SMBs, service businesses, and local companies. Built on Next.js or WordPress with a CMS so your team can update content without touching code.',
    example: 'Avg. Lighthouse score 98–100 across all four categories on delivery.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'D2C & E-Commerce Stores',
    description:
      'Custom Shopify or WooCommerce storefronts for India\'s booming D2C market. Razorpay, PhonePe, and UPI payment integration. Branded product pages, upsell flows, and mobile checkout optimized for Indian buyers.',
    example: 'D2C clients average 2.3× improvement in mobile add-to-cart rate.',
    linkLabel: 'See e-commerce work',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Landing Pages',
    description:
      'Single-purpose, high-converting landing pages for paid campaigns, WhatsApp funnels, and lead generation. Designed to a specific CTA, A/B-test ready, and built to load in under 2 seconds on mobile.',
    example: 'Clients report 30–45% improvement in form conversion vs. homepage CTA.',
    linkLabel: 'Start a project',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Sites',
    description:
      'Custom WordPress websites with headless or traditional CMS setups, for businesses that need editorial control without developer dependency. WooCommerce, ACF, and plugin customization handled in-house. Security-hardened from the first commit.',
    example: 'Average TTFB under 180ms on shared hosting after our optimization pass.',
    linkLabel: 'Get a quote',
    linkHref: '/contact',
  },
  {
    name: 'Portfolio & Agency Sites',
    description:
      'Design-forward portfolio websites for creative studios, architects, CA firms, law practices, and consultancies. Animated transitions, case study layouts, and a CMS your team controls, no developer calls for routine updates.',
    example: 'Built for designers, architects, law firms, and professional service consultancies.',
    linkLabel: 'See our portfolio',
    linkHref: '/portfolio',
  },
  {
    name: 'Website Redesigns',
    description:
      'We audit your existing site, identify what\'s hurting performance and conversions, preserve your URL structure and SEO equity, and rebuild on a modern tech stack, with zero downtime on launch day.',
    example: 'Clients average 40% improvement in Google PageSpeed score post-redesign.',
    linkLabel: 'Book a free audit',
    linkHref: '/contact',
  },
];

const IN_WEB_STATS = [
  {
    value: '7 days',
    label: 'average delivery on Starter websites, from design sign-off to live launch',
    microcopy: 'for sites up to 5 pages; Growth and Custom scopes quoted post-brief',
    categoryLabel: 'DELIVERY SPEED',
  },
  {
    value: '100/100',
    label: 'Lighthouse score target across performance, SEO, accessibility, and best practices',
    microcopy: 'verified on mobile and desktop before every handover',
    categoryLabel: 'PERFORMANCE',
  },
  {
    value: 'You own it',
    label: 'full code ownership on launch day, no lock-in, no mandatory monthly fees',
    microcopy: 'every file, Figma asset, and credential transferred to you',
    categoryLabel: 'CODE OWNERSHIP',
  },
];

const IN_MARKET_STATS = [
  {
    value: '800M+',
    label: 'internet users in India, the world\'s single largest internet market',
    sourceUrl: 'https://www.statista.com/statistics/255146/number-of-internet-users-in-india/',
    sourceLabel: 'Statista / TRAI 2024',
  },
  {
    value: '70%+',
    label: 'of all Indian web traffic arrives via mobile. Google India uses mobile-first indexing',
    sourceUrl: 'https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india',
    sourceLabel: 'StatCounter India 2024',
  },
  {
    value: '94%',
    label: 'of first impressions are design-related, visitors judge your credibility in 0.05 seconds',
    sourceUrl: 'https://www.tandfonline.com/doi/abs/10.1080/01449290500330448',
    sourceLabel: 'University of Surrey Study',
  },
];

const IN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indian Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const IN_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days (Starter tier)', '6–12 weeks', '4–8 weeks', '~1 day (you build it)'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Figma approval before build',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile-first + Core Web Vitals green',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Indian payment gateway integration',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="in" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const IN_FAQ_CATEGORIES = [
  { key: 'process',    label: 'Process & Timeline' },
  { key: 'pricing',   label: 'Pricing & Cost' },
  { key: 'technical', label: 'Technical & Performance' },
  { key: 'seo',       label: 'SEO & Google Rankings' },
  { key: 'trust',     label: 'Trust & Ownership' },
  { key: 'india',     label: 'India-Specific' },
];


const IN_FAQ_ITEMS = [
  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build a website in India?',
    answer:
      'FactoryJet\'s Starter tier (up to 5 pages) delivers in 7 business days from design sign-off. Growth tier (10–15 pages with CMS) typically takes 10–14 business days. Custom builds, e-commerce stores, web apps, and enterprise sites, are scoped individually and usually take 4–10 weeks. We give you a firm timeline after the discovery brief, not before, because scope drives everything.',
  },
  {
    category: 'process',
    question: 'What does your web design process look like?',
    answer:
      'Five stages: Discover (30-minute brief where we map your goals, audience, competitors, and site architecture), Design (full Figma wireframes for desktop and mobile, you approve the look before we write code), Build (engineering in Next.js, WordPress, or Shopify with daily commits and a staging URL within 48 hours), Review (two rounds of content and design feedback on the live staging site), and Ship (production launch with DNS transfer, SSL, GA4 setup, and a recorded handover session).',
  },
  {
    category: 'process',
    question: 'Do I get to see and approve the design before you start building?',
    answer:
      'Yes, always. We deliver full Figma mockups for every key page before writing a line of code. Desktop and mobile layouts both. If you don\'t like the direction, we revise before we build, not after. This is how we avoid the expensive rework that blows up timelines and budgets at most agencies.',
  },
  {
    category: 'process',
    question: 'Can you redesign my existing website without losing my Google rankings?',
    answer:
      'Yes. Before any redesign, we audit your current URL structure, identify which pages have existing search equity, and architect the new site to preserve all high-value URLs. Where redirects are needed, we implement 301 redirects correctly. Most clients see rankings improve after a FactoryJet redesign because their Lighthouse scores and Core Web Vitals improve significantly.',
  },
  {
    category: 'process',
    question: 'Can you integrate booking, payment, WhatsApp, and lead capture?',
    answer:
      'Yes. Standard integrations include: WhatsApp Business API button, contact forms with email routing, Razorpay/PhonePe/PayU payment processing, Google Calendar or Calendly appointment booking, and GA4 conversion tracking. HubSpot, Zoho, and Salesforce CRM routing are available on Growth and Custom tiers. Complex ERP integrations are handled at Custom tier with a dedicated scoping call.',
  },

  /* ── Pricing & Cost ── */
  {
    category: 'pricing',
    question: 'How much does a website cost in India?',
    answer:
      "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
  },
  {
    category: 'pricing',
    question: 'Do I own the website and code after the project?',
    answer:
      'Yes, 100%. We transfer the full codebase to your GitHub repository on launch day. You own every line of code, all Figma design files, and all hosting credentials. There are no monthly platform fees owed to FactoryJet, no lock-in, and no dependency on us to keep your website running. If you hire a developer later, they can work with the code directly.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after launch?',
    answer:
      'Domain registration (paid directly to your registrar) and hosting (paid directly to the hosting provider, not to FactoryJet, the amount depends on traffic and platform). WordPress and Next.js sites can be hosted on Cloudflare Pages, Vercel, or any standard provider. Ongoing FactoryJet support is optional, not mandatory.',
  },
  {
    category: 'pricing',
    question: 'Do you offer website maintenance contracts (AMC)?',
    answer:
      'Yes. AMC plans come in three tiers: Basic (security updates, SSL renewal, uptime monitoring, monthly health report), Standard (adds content updates, SEO optimization, performance monitoring), and Premium (content updates as per agreed SLA, active SEO strategy, design refresh, dedicated account manager). Each plan is quoted up front, and AMC is optional, your website continues to run without it.',
  },

  /* ── Technical & Performance ── */
  {
    category: 'technical',
    question: 'What platform will my website be built on?',
    answer:
      'We build on Next.js (performance-critical business sites and web apps), WordPress (content-driven sites where non-technical teams need full CMS control), Shopify (e-commerce), Webflow and Framer (design-forward brands). We recommend the right platform after understanding your goals, not because we prefer one. All are configured for Core Web Vitals green, mobile-first, and full code ownership.',
  },
  {
    category: 'technical',
    question: 'What Lighthouse score will my website get?',
    answer:
      'Starter tier guarantees Lighthouse 95+ across all four categories (Performance, Accessibility, Best Practices, SEO). Growth and Custom tiers target 98–100. We run PageSpeed Insights and Core Web Vitals checks as part of QA before every launch, you see the scores before you sign off. These scores directly affect your Google rankings.',
  },
  {
    category: 'technical',
    question: 'Will my website be mobile-friendly for Indian users?',
    answer:
      'Every website is built mobile-first, we design for mobile before desktop, not the other way around. We specifically test for Indian 4G conditions (slower networks, higher latency) because 70%+ of your visitors are on phones. We test on physical Android devices, the most common browser environment in India, not just desktop emulators.',
  },
  {
    category: 'technical',
    question: 'Can I update my website content without a developer?',
    answer:
      'Yes. Every site includes a way for non-technical users to update content. WordPress and Shopify clients get a native CMS. Next.js clients get a headless CMS setup (Sanity or Contentful) or a Markdown-based content layer. We include a recorded CMS walkthrough on launch day so your team is fully self-sufficient from day one.',
  },
  {
    category: 'technical',
    question: 'What does your tech stack include?',
    answer:
      'Frontend: Next.js, React, TypeScript. Styling: Tailwind CSS with custom design tokens. CMS: WordPress, Sanity, or Contentful. E-commerce: Shopify or WooCommerce. Design: Figma (full component library). Hosting: Cloudflare Pages, Vercel, or WP Engine. Analytics: Google Analytics 4 + Search Console. Payments: Razorpay, PhonePe, PayU, UPI integrations. All code is clean, typed, and maintainable by any future developer.',
  },

  /* ── SEO & Google Rankings ── */
  {
    category: 'seo',
    question: 'Will my website rank on Google India?',
    answer:
      'Every website we deliver includes technical SEO as standard: correct heading structure (H1/H2/H3), optimized meta titles and descriptions, canonical URLs, Open Graph tags, schema markup (Organization, LocalBusiness, FAQPage as appropriate), XML sitemap, robots.txt, and Core Web Vitals optimization. Content-level SEO, keyword research, page-level copy optimization, and content strategy, is available as a Growth-tier add-on or standalone engagement.',
  },
  {
    category: 'seo',
    question: 'How long until my website ranks on Google?',
    answer:
      'Branded searches (your business name) typically rank within 1–2 weeks of launch. Local service queries like "web design company in Mumbai" or "CA firm in Delhi" take 3–6 months for a new domain. The work that compresses this timeline, schema markup, internal linking, content depth, technical performance, Google Search Console submission, is built into every FactoryJet project, not sold as an add-on after launch.',
  },
  {
    category: 'seo',
    question: 'Do you optimize for Google Business Profile and local search?',
    answer:
      'Yes. Local SEO for Indian businesses includes Google Business Profile optimization guidance, location-specific schema markup, NAP (Name, Address, Phone) consistency across the site, and location pages for multi-city businesses. For businesses with multiple locations across Mumbai, Delhi, Bangalore, Chennai, and other metros, we build location-specific landing pages with locally relevant content and schema.',
  },
  {
    category: 'seo',
    question: 'Will a redesign hurt my existing Google rankings?',
    answer:
      'Not if done properly, and we do it properly. We audit your current URL structure before any redesign, identify which pages have ranking equity, and architect the new site to preserve all high-value URLs. Where URL changes are unavoidable, we implement 301 redirects correctly. Most clients see rankings improve post-redesign because Lighthouse scores and Core Web Vitals improve significantly.',
  },

  /* ── Trust & Ownership ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a local Indian web agency?',
    answer:
      'Three differences that matter: speed (7-day delivery on Starter projects, most Indian agencies quote 6–12 weeks), quality (Next.js + Figma + Lighthouse 95+, the same stack used by India\'s top product companies), and ownership (full codebase transferred to your GitHub on launch day, no retainer required to keep the site online). We\'ve delivered 500+ websites across India, the US, and the UK.',
  },
  {
    category: 'trust',
    question: 'Do you have portfolio examples of Indian business websites?',
    answer:
      'Yes, our portfolio at factoryjet.com/portfolio covers business websites, e-commerce stores, landing pages, and web applications across multiple Indian industries. On discovery calls we share sector-specific examples relevant to your business type and city.',
  },
  {
    category: 'trust',
    question: 'Do you offer post-launch support?',
    answer:
      'Every project includes a 30-day post-launch support window for bug fixes and minor adjustments. After that, our AMC plans provide ongoing maintenance, security updates, content updates, and performance monitoring, quoted up front. There is no obligation to continue with FactoryJet after launch, you own the code and can take it anywhere.',
  },
  {
    category: 'trust',
    question: 'How do you handle revisions? Can I request changes during the project?',
    answer:
      'Starter tier includes 2 revision rounds during the design phase and 1 post-build content round. Growth and Custom tiers include 3 design revision rounds plus additional content feedback cycles. Revision rounds are structured so you review complete, polished layouts, not half-finished screens. We don\'t charge for fixing bugs or issues caused by our implementation.',
  },

  /* ── India-Specific ── */
  {
    category: 'india',
    question: 'Can you integrate Razorpay, PhonePe, or UPI payment gateways?',
    answer:
      'Yes. Razorpay, PhonePe, Paytm Business, PayU, and UPI-native flows are standard integrations for our e-commerce and custom-tier builds. We also handle subscription billing, EMI options, and split-payment logic for Indian D2C brands. Indian payment gateway integration is included at no extra charge for Custom tier projects.',
  },
  {
    category: 'india',
    question: 'Can you add a WhatsApp Business API button and chat widget?',
    answer:
      'Yes. A click-to-WhatsApp button is a standard element on every FactoryJet India project. For businesses that need it, we also integrate full WhatsApp Business API chatbots that can qualify leads, answer FAQs, and route inquiries, a significant conversion upgrade for high-inquiry-volume businesses in healthcare, real estate, and education.',
  },
  {
    category: 'india',
    question: 'Do you build multi-language websites (Hindi, Marathi, Tamil, etc.)?',
    answer:
      'Yes. Multi-language site architecture is handled at the Custom tier. We have built bilingual (English + Hindi) and multi-language sites for businesses targeting regional audiences across India. Language-specific SEO, hreflang tags, and content management for non-English content are all part of the scope.',
  },
  {
    category: 'india',
    question: 'Do you build city-specific landing pages for Indian metros?',
    answer:
      'Yes. For businesses targeting multiple Indian cities, we build location-specific landing pages with locally relevant copy, local schema markup, and city-level SEO targeting. This is how service businesses win organic traffic in competitive metro markets, "CA firm in Bandra", "physiotherapist in Koramangala", or "lawyer in Connaught Place" searches all have real volume that location pages can capture.',
  },
  {
    category: 'india',
    question: 'Can you migrate my website from Wix, Squarespace, or an old platform?',
    answer:
      'Yes. We handle website migration from Wix, Squarespace, older WordPress setups, and custom-built legacy sites. Migration includes content transfer, SEO redirect mapping (301s for all existing URLs), and post-launch performance testing to ensure no rankings are lost in the transition.',
  },
  {
    category: 'india',
    question: 'Are you based in India? Can I meet you in person?',
    answer:
      'Yes. FactoryJet Technologies is headquartered in India. We work with clients across India primarily via video calls, WhatsApp, and shared project workspaces, which is how we maintain the efficiency needed to deliver in 7 days. For strategic engagements, we do meet clients in person in select cities. Most clients find the async-plus-video workflow faster and more structured than in-person agency meetings.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'trust',
    question: 'Who is the best web design agency in India?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case: websites delivered in 7 days, 100/100 Google speed scores, and a fixed price agreed before work starts. But the best web design company in India for you depends on fit, the best website design agency in India for an online store is different from the best website design company in India for a doctor or a factory. Whoever you compare for the best web design services in India or the best website design services in India, check three things: live websites you can click, speed scores you can test yourself, and a price in writing.',
  },
  {
    category: 'trust',
    question: 'What are the top 10 web design companies in India?',
    answer:
      'Most lists of the top 10 web design agencies in India, and the matching top 10 website design companies in India, are written by the companies on them. FactoryJet competes in that set for small businesses, and we are open about how to judge us: test our live pages for speed, count the days from brief to launch, and compare the written price. Use any top-10 list as a shortlist, never as the decision.',
  },
  {
    category: 'pricing',
    question: 'How much does website design cost in India?',
    answer:
      'Website design cost in India depends on scope, a simple template site costs far less than a custom business website with e-commerce or web app features. If you are asking how much a website costs all-in, remember hosting and yearly upkeep too. FactoryJet agrees a fixed price before work starts, so the cost never grows in the middle of the project.',
  },
  /* ── Added from live People-Also-Ask on Google India, 31 July 2026.
        Source: pipeline/research/data/webdesign_in.json ── */
  {
    category: 'technical',
    question: 'Which is the best website builder in India?',
    answer:
      'For a hobby page or a first test, Wix or Squarespace are fine and cheap. The catch is that you are renting, not owning: you cannot move the site, page speed is capped by their platform, and technical SEO is limited to whatever they expose. Once a website is genuinely bringing in business, most companies move to WordPress or a custom build for the control.',
  },
  {
    category: 'technical',
    question: 'What are the top 3 website builders?',
    answer:
      'By usage, WordPress, Wix and Squarespace, with Shopify dominating anything selling products. WordPress powers the largest share of the web because it is flexible and you can host it anywhere. Wix and Squarespace trade that flexibility for a simpler editor. Which is right depends entirely on whether you need to own and move the site later.',
  },
  {
    category: 'technical',
    question: 'What are the big 3 of web development?',
    answer:
      'HTML, CSS and JavaScript. HTML is the structure of a page, CSS is how it looks, and JavaScript is what makes it interactive. Every website, whatever platform it is built on, ends up as those three in the browser. Frameworks like Next.js and React are tools for producing them more reliably at scale.',
  },
  {
    category: 'india',
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the work has shifted. Nobody needs a static brochure site any more, and AI can produce a passable-looking template in minutes. What businesses now pay for is a site that loads fast on a mobile connection, ranks on Google, gets cited by AI assistants, and converts visitors into enquiries. That is engineering and judgement, not decoration.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  // Mirrors IN_FAQ_ITEMS exactly. Previously hand-written with only 13 of the
  // page's questions, so most on-page FAQs were invisible to search engines.
  mainEntity: IN_FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebDesignServicePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="in-web-design-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="in-web-design-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="in-web-design-firms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firmsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_hero" />}
          eyebrow="WEB DESIGN COMPANY · INDIA"
          headline="Web Design Company in India That Builds Websites Which Actually Convert"
          lead="70%+ of Indian web traffic is mobile. Paid ad costs are rising. Competitors are outranking you on Google. FactoryJet builds custom, high-performance websites in Next.js, WordPress, and Shopify, designed in Figma, built to Lighthouse 95+, with a fixed quote agreed before work starts."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '500+ websites delivered',
            'Full code ownership',
            '7-day delivery guarantee',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                WHAT YOUR WEBSITE SHOULD DO
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Load fast on mobile. Build trust instantly. Convert India&apos;s mobile buyers.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Load in under 2 seconds on mobile, 70%+ of Indian traffic is mobile; slow sites lose visitors before they see you',
                  'Score 95+ on Lighthouse. Google India ranks fast, accessible, technically clean sites significantly higher',
                  'Convert at 2–4% or better, most Indian business sites built on templates convert below 1%',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  FactoryJet sites average Lighthouse 98–100 on delivery. Verified before every handover.
                </p>
              </div>
            </div>
          }
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best web design company in India?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best web design company for every Indian
              business. A B2B manufacturer needing a technical catalogue and a D2C brand needing a
              fast Shopify store want different things. For businesses that want a custom,
              mobile-first site with full code ownership and a fixed quote agreed before work
              starts, FactoryJet is a strong choice. Below we compare the companies that actually
              rank in India, including ourselves, so you can decide for yourself.
            </p>
          </div>
        </section>

        {/* ── 2. LOGO BAR ───────────────────────────────────────────────────────── */}
        <LogoBar
          tagline="Trusted by 500+ businesses across India, US, UK, and UAE"
        />

        {/* ── 3. BIG THREE TRUST BLOCK ──────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="India's Trusted Web Design Company, 500+ Websites Delivered, 12+ Years of Building"
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. WHAT GREAT WEB DESIGN ACTUALLY DOES ───────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN EXPLAINED"
          headline="What a Great Business Website Actually Does"
          lead="Most Indian business websites look passable and perform terribly. Yours should do the opposite: fast enough to rank on Google India, clear enough to convert mobile visitors, and simple enough for your team to manage without calling a developer."
          body={
            <>
              {/* Performance chip strip */}
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Lighthouse 95+',
                  'Core Web Vitals green',
                  'Mobile-first',
                  'Schema markup',
                  'Sub-2s load time',
                  'WhatsApp ready',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                A business website has one job: turn the right visitors into paying customers. That means it needs to load fast enough that people don&apos;t leave before they see it, on mobile, not just your office Wi-Fi, look credible enough that they trust you, and make the next step obvious enough that they take it. Most template-built sites fail on all three.
              </p>
              {/* 3-col mini stats */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.05s', label: 'to form first impression' },
                  { value: '70%+', label: 'Indian traffic is mobile' },
                  { value: '94%', label: 'judge trust by design' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em', color: '#F05A28' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
              {/* Pull quote */}
              <div className="border-l-2 pl-5 py-1" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Performance and design aren&apos;t in tension. The best websites are both.
                </p>
              </div>
              <p>
                FactoryJet approaches web design the way India&apos;s top product companies do: Figma-first design, then engineering in Next.js or WordPress, with Lighthouse 95+ as a non-negotiable target. We don&apos;t use page builders, visual editors, or bloated themes. The result is a site that loads fast on mobile, ranks well on Google India, and looks intentional, because it was designed for your specific business, not adapted from someone else&apos;s template.
              </p>
              <p>
                We&apos;ve built for SMBs, D2C brands, healthcare providers, real estate developers, CA firms, law practices, coaching institutes, and SaaS companies across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and beyond. The design language changes with each business; the standard of craft doesn&apos;t. Every project gets the same full Figma design process, the same engineering rigour, and the same Lighthouse audit before launch.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  FactoryJet Site Scorecard
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { metric: 'Lighthouse Performance', score: '99', note: 'avg. on delivery' },
                  { metric: 'Lighthouse Accessibility', score: '100', note: 'WCAG AA compliant' },
                  { metric: 'Lighthouse SEO', score: '100', note: 'technical SEO included' },
                  { metric: 'Largest Contentful Paint', score: '<1.8s', note: 'mobile. India' },
                  { metric: 'Cumulative Layout Shift', score: '0.02', note: 'well below 0.1 threshold' },
                  { metric: 'Interaction to Next Paint', score: '<200ms', note: "Google's good threshold" },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.metric}
                      </p>
                      <p className="font-fj-mono text-[0.6875rem] text-fj-neutral-400" style={{ letterSpacing: '0.04em' }}>
                        {item.note}
                      </p>
                    </div>
                    <p className="fj-display flex-shrink-0 font-bold" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em', color: '#F05A28' }}>
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Verified before every handover.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your website is costing you customers. You might not know it yet."
          lead="An outdated, slow, or mobile-broken website doesn't just look unprofessional. In India's mobile-first market, it actively loses you leads on every page load, every Google result you don't appear in, and every visitor who arrived from your Instagram bio and left in 3 seconds."
          pillars={[
            {
              icon: '📱',
              title: 'India is mobile-first. Most business websites aren\'t.',
              body: '70%+ of Indian web traffic is mobile, and most of it is on 4G, not fibre. Template-built WordPress sites routinely load in 5–8 seconds on Indian 4G. That\'s not a minor performance gap. That\'s more than half your traffic gone before they saw your offering. Google India tracks this. Your rankings reflect it.',
            },
            {
              icon: '📉',
              title: 'Template sites convert at under 1%',
              body: 'A business website built on Wix, a free WordPress theme, or a generic template typically converts at 0.5–0.8%. A conversion-optimised custom site converts at 2–4%. On 1,000 monthly visitors, that difference is the gap between 5 qualified leads and 30. From the same traffic spend.',
            },
            {
              icon: '💸',
              title: 'Most agencies hide their rates and timelines',
              body: 'A typical web agency quotes a business website without a published timeline, without guaranteed Lighthouse performance, and without a codebase you own. FactoryJet gives you a fixed-price quote before you commit, delivers the same Figma-first design, Next.js engineering, and Lighthouse 95+ quality, and backs it with a 7-day delivery guarantee in writing.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS (white, dark rhythm buffer) ───────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Brief to Live Website in 5 Stages"
          lead="A clear, predictable process where you approve the design before we build, so there are no surprises, no blown timelines, and no budget overruns."
          stages={IN_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 BUSINESS DAYS TO LAUNCH · FIGMA APPROVAL BEFORE BUILD BEGINS"
        />

        {/* ── 7. TECH STACK (white) ────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR TECH STACK"
          headline="Modern Web Technologies: Zero Black-Box Builders"
          lead="We build with the same tools that power India's top product companies, not page builders, visual editors, or bloated themes. Your site loads fast because the code is clean."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Next.js', 'React', 'TypeScript', 'WordPress', 'Shopify', 'Tailwind CSS', 'Figma', 'Sanity CMS', 'Razorpay', 'WhatsApp API'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Next.js &amp; React</strong>: Our default for performance-critical business sites and web applications. Static generation, edge caching, and server components mean your pages serve in milliseconds from Cloudflare&apos;s global network, including India edge nodes.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WordPress (Headless or Traditional)</strong>: When your team needs a full CMS with editorial workflows, we build on WordPress with custom block themes or a headless setup connected to Next.js on the frontend. Security-hardened and maintained.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify &amp; WooCommerce</strong>: For e-commerce, we build custom Shopify themes or headless storefronts using the Storefront API. WooCommerce for WordPress-based stores. Both integrate natively with Razorpay, PhonePe, and PayU.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Figma</strong>: Every design starts in Figma. You get a shareable design file, a component library, and desktop + mobile mockups for every page before we open a code editor. You approve the look before we build it.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Tailwind CSS + TypeScript</strong>: We write typed, maintainable frontend code. Future engineers, yours or ours, can extend the codebase without archaeology. No mystery CSS, no !important hacks.
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
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Technology Stack
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Frontend', tools: 'Next.js, React, TypeScript' },
                  { category: 'Styling', tools: 'Tailwind CSS, custom design tokens' },
                  { category: 'CMS', tools: 'WordPress, Sanity, Contentful' },
                  { category: 'E-Commerce', tools: 'Shopify, WooCommerce (Headless option)' },
                  { category: 'Payments', tools: 'Razorpay, PhonePe, PayU, UPI' },
                  { category: 'Design', tools: 'Figma, full component libraries' },
                  { category: 'Hosting', tools: 'Cloudflare Pages, Vercel, WP Engine' },
                  { category: 'Analytics', tools: 'Google Analytics 4, Search Console' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]/50" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  You own the repo. Zero lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 8. PERFORMANCE STATS BAND ────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16">
              {/* Stats */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {IN_WEB_STATS.map((stat) => (
                  <div key={stat.value}>
                    {stat.categoryLabel && (
                      <div
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.13em',
                          color: '#B23E13',
                          background: 'rgba(240,90,40,0.06)',
                          border: '1px solid rgba(240,90,40,0.22)',
                        }}
                      >
                        <span
                          className="inline-block h-1 w-1 rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        />
                        {stat.categoryLabel}
                      </div>
                    )}
                    <p
                      className="fj-display font-bold"
                      style={{
                        fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-2 font-fj-body font-semibold text-fj-ink"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                    >
                      {stat.label}
                    </p>
                    {stat.microcopy && (
                      <p
                        className="mt-1.5 font-fj-body text-fj-neutral-400"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                      >
                        {stat.microcopy}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {/* Photo */}
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '5 / 3' }}
              >
                <Image
                  src="/images/web-design-stats-photo.webp"
                  alt="FactoryJet team reviewing a newly launched website with an Indian client"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. INDIA MARKET CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="INDIA'S DIGITAL MARKET"
          headline="Indian Businesses Can't Afford a Bad Website in 2025"
          leadParagraphs={[
            "94% of first impressions are design-related. Your potential customers decide whether to trust you in 0.05 seconds, before they read a single word. If your website looks outdated, loads slowly, or doesn't work on a mid-range Android phone, that impression doesn't get a second chance.",
            "India now has 800M+ internet users, the world's single largest internet market, and 70%+ of that traffic arrives via mobile. Google India uses mobile-first indexing, which means your site's mobile performance directly determines where you appear in search results. A site that loads in 5 seconds on mobile isn't just inconvenient; it's invisible.",
            "FactoryJet has been building websites for businesses across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and beyond. We understand what an Indian SMB needs from a website, not enterprise-level complexity, but professional design, fast mobile performance, and a clear path to WhatsApp or a form submission. The businesses that invest in this don't just look better, they rank better and convert better from the same traffic.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your website is your hardest-working salesperson, and it works 24/7.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat'].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </>
          }
          stats={IN_MARKET_STATS}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle.
            Targets "top 10 web design companies in India". */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-fj-mono text-xs uppercase tracking-widest text-[#B23E13]">
              INDIAN WEB DESIGN COMPANIES, COMPARED HONESTLY
            </p>
            <h2 className="font-fj-display text-3xl font-bold tracking-[-0.02em] text-fj-ink md:text-4xl">
              Top 10 web design companies in India (2026), and who each one suits
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
              Most &ldquo;top 10&rdquo; lists in this category are written by the companies that put
              themselves at number one. This one is built from live search data checked on 31 July
              2026: the firms that actually rank in India for web design and web development. Each
              description is written from how that company describes itself, not from our opinion of
              them. We include ourselves and say so openly.
            </p>

            <ol className="mt-10 space-y-4">
              {IN_WEB_DESIGN_FIRMS.map((a, i) => (
                <li
                  key={a.name}
                  className={`flex gap-4 rounded-2xl border p-5 md:p-6 ${
                    a.isUs ? 'border-[#F05A28]/40 bg-[#F05A28]/5' : 'border-fj-neutral-200 bg-white'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-fj-mono text-sm font-bold ${
                      a.isUs ? 'bg-[#F05A28] text-white' : 'bg-fj-ink/5 text-fj-ink'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-fj-display text-lg font-bold text-fj-ink">
                      {a.name}
                      {a.isUs && (
                        <span className="ml-2 rounded-full bg-[#B23E13] px-2 py-0.5 font-fj-mono text-xs font-semibold text-white">
                          That is us
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 font-fj-body leading-relaxed text-fj-neutral-600">
                      <span className="font-semibold text-fj-ink">Best for: </span>
                      {a.bestFor}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indian Agency vs. Freelancer vs. Templates"
          lead="Not all web design options are the same. Here's what the decision looks like when you compare the real trade-offs side by side, price, delivery, quality, and ownership."
          pullQuote={{
            stat: '7 days',
            caption: 'from kickoff to launch. Same Figma design, Next.js engineering, and Lighthouse 95+ quality as a big-agency project, with a fixed quote agreed before work starts.',
          }}
          columns={IN_COMPARISON_COLUMNS}
          rows={IN_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ───────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six Types of Website Design We Build for Indian Businesses"
          lead="Not every business needs the same thing. We match the right platform and design approach to your specific goals, whether you need a local service site, a D2C store, or a full web application."
          sectors={IN_WEB_DESIGN_TYPES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their site."
        />

        {/* ── 14. FAQ (light, buffer) ──────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every discovery call, answered here, straight."
          categories={IN_FAQ_CATEGORIES}
          items={IN_FAQ_ITEMS}
        />

        {/* ── 14b. CITIES WE SERVE ─────────────────────────────────────────────
            Added 2026-07-26: a link audit found all 22 web-design city pages had
            zero inbound in-content links from anywhere on the site. */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-semibold uppercase tracking-[0.13em] text-[#B23E13]">
              CITIES WE SERVE
            </p>
            <h2
              className="font-fj-display mt-3 font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
            >
              Web design, city by city
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-relaxed text-fj-neutral-600">
              What a website has to do changes with the market it sells into. These pages cover the
              buyers, the competition, and the search demand in each city we work in.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {IN_WEB_DESIGN_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/web-design/${c.slug}`}
                    className="inline-flex items-center rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink transition-colors hover:border-[#F05A28]/50 hover:text-[#B23E13]"
                  >
                    Web Design in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 15. FINAL CTA (DARK) ─────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Book a Free Website Audit. No Obligation"
          sub="In 30 minutes, we'll audit your current site, show you exactly what's hurting your performance and Google rankings, and give you a fixed INR price to fix it. No pitch. No pressure. Just an honest assessment from engineers and designers who build for a living."
          primaryCta={{ label: 'Book Your Free Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Lighthouse 95+ guaranteed. Full code ownership on launch day. 7-day delivery on Starter tier. Fixed price confirmed upfront."
        />

        {/* E-commerce city index.
            Replaces the 13-item "E-Commerce Cities" column that used to sit in the
            India footer. Measured with scripts/footer-orphan-risk.mjs: those pages
            had NO other inbound internal link, so the column could not simply be
            deleted. Their parent hub (/services/ecommerce-development) is US-owned
            and indexes US cities, so this India entry point is the right host.

            The web-design cities are deliberately absent: this page already renders
            IN_WEB_DESIGN_CITIES higher up. If you remove this section, re-run that
            script first. */}
        <section className="border-t border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1120px]">
            <h2
              className="font-fj-display font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              E-commerce development in your city
            </h2>
            <p className="mt-3 max-w-[62ch] font-fj-body text-[1rem] leading-[1.7] text-fj-neutral-600">
              Store builds, migrations and marketplace setup, with the payment gateways and
              logistics partners each market actually uses.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {IN_ECOM_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/ecommerce-development/${c.slug}`}
                    className="inline-flex items-center rounded-full border border-fj-ink/15 bg-fj-cream px-4 py-2 font-fj-body text-[0.9rem] font-medium text-fj-ink transition-colors hover:border-[#F05A28]/50 hover:text-[#B23E13]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
