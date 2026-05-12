import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
  description:
    'FactoryJet delivers web design services US businesses trust — custom Next.js, WordPress & Shopify websites. Launch in 7 days. Starting at $1,999. Full code ownership. Get a free technical audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
    description:
      'Custom websites for US small businesses. Next.js, WordPress & Shopify. 7-day delivery. 60–70% cheaper than US agencies. Starting at $1,999.',
    url: 'https://factoryjet.com/us/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
    description:
      'Custom websites for US small businesses. 7-day delivery. 60–70% cheaper than US agencies. Starting at $1,999.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design',
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
   JSON-LD Schema (FAQPage + Service)
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does FactoryJet take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small business websites — up to 5 pages — are designed, built, and launched within 7 business days of your approved design sign-off. Larger sites (6–15 pages) typically take 10–14 business days. E-commerce stores built on Shopify or Next.js with custom product logic take 3–5 weeks depending on catalog size and integration complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a custom website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s web design starts at $1,999 for a 5-page business website. A full business site with up to 15 pages, a blog, and CMS runs $3,999. E-commerce, custom Next.js apps, and larger projects start at $7,500. All prices are 60–70% lower than comparable US web agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platform will my website be built on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build on Next.js (for performance-critical business sites and web apps), WordPress (for content-driven sites with CMS needs), and Shopify (for e-commerce). We recommend the right platform after understanding your goals — not because we have a preferred vendor. All sites are mobile-first, Lighthouse 100 optimized, and Core Web Vitals green on delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website and code after the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. We transfer the full codebase to your GitHub repository on launch day. You own every line of code, all design files, and all hosting credentials. There are no monthly platform fees, no lock-in, and no dependencies on FactoryJet to keep your website running.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes FactoryJet cheaper than US web agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engineering and design team is based in India. Same quality — Next.js expertise, Figma design, Lighthouse 100 performance — at dramatically lower labor costs. We\'ve served US businesses since 1999. We don\'t have layers of account management, project coordinators, and sales reps inflating your invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every website we build includes technical SEO as standard: proper heading structure, meta tags, canonical URLs, schema markup, sitemap, robots.txt, and Core Web Vitals optimization. Page-level content SEO (keyword research, content strategy) is available as an add-on. We don\'t build websites that look good but load slowly — performance and SEO are baked in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing website instead of building from scratch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Redesigns are one of our most common engagements. We audit your current site, identify what\'s hurting performance and conversions, carry over any content worth keeping, and rebuild with modern standards. If your current site runs on WordPress, we can often migrate and redesign in place without disrupting your URL structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the web design process look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five stages: Discover (we map your goals, competitors, and site architecture in a 30-minute brief), Design (Figma wireframes and full visual mockups — you approve the look before we write code), Build (engineering in your chosen tech stack with daily commits), Review (two rounds of revisions on the live staging URL), and Ship (production launch with DNS transfer, monitoring, and a recorded handover).',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Services USA',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Web Design & Development',
  description:
    'Custom website design and development for US small businesses. Next.js, WordPress, and Shopify. 7-day delivery. Lighthouse 100 performance. 60–70% cheaper than US agencies. Starting at $1,999.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website',
      price: '1999',
      priceCurrency: 'USD',
      description: 'Up to 5-page business website, mobile-first, Lighthouse 100 optimized.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Website',
      price: '3999',
      priceCurrency: 'USD',
      description: 'Up to 15-page site with CMS, blog, and advanced SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website or E-Commerce',
      price: '7500',
      priceCurrency: 'USD',
      description: 'E-commerce stores, Next.js web apps, and large custom projects.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WEB_DESIGN_TYPES = [
  {
    name: 'Business Websites',
    description:
      'Clean, fast, conversion-focused websites for service businesses, consultants, and local companies. Built on Next.js or WordPress with a CMS so you can update content without touching code.',
    example: 'Avg. Lighthouse score 98–100 across all four categories on delivery.',
    linkLabel: 'Get a free audit',
    linkHref: '/contact',
  },
  {
    name: 'Landing Pages',
    description:
      'Single-purpose, high-converting landing pages for paid campaigns, product launches, or lead generation. Designed to a specific CTA, A/B-test ready, and built to load in under 1.5 seconds.',
    example: 'Clients report 30–45% improvement in form conversion vs. homepage CTA.',
    linkLabel: 'See examples',
    linkHref: '/contact',
  },
  {
    name: 'Shopify Stores',
    description:
      'Custom Shopify storefronts with branded themes, optimized product pages, upsell flows, and checkout customizations. Integrated with your inventory, email platform, and analytics from day one.',
    example: 'E-commerce clients average 2.3× improvement in mobile add-to-cart rate.',
    linkLabel: 'See Shopify work',
    linkHref: '/us/services/shopify-development',
  },
  {
    name: 'WordPress Sites',
    description:
      'Headless or traditional WordPress sites with custom block themes, ACF fields, and a content editor your team can actually use. Optimized for Core Web Vitals and long-term editorial flexibility.',
    example: 'Average Time-to-First-Byte under 180ms on shared hosting after optimization.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
  {
    name: 'Portfolio & Agency Sites',
    description:
      'Design-forward portfolio websites and agency sites that make your work the hero. Animated transitions, case study layouts, filterable project grids, and a CMS your team controls.',
    example: 'Built for creative studios, photographers, law firms, and consultants.',
    linkLabel: 'See our portfolio',
    linkHref: '/portfolio',
  },
  {
    name: 'Website Redesigns',
    description:
      'We audit your existing site, identify what\'s hurting performance and conversions, preserve your URL structure and SEO equity, and rebuild on a modern tech stack — with zero downtime on launch day.',
    example: 'Clients average 40% improvement in Google PageSpeed score post-redesign.',
    linkLabel: 'Book a free audit',
    linkHref: '/contact',
  },
];

const WEB_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute brief. We map your goals, audience, competitors, and site architecture — so the design solves a real business problem, not just looks good.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Full Figma wireframes and visual mockups. You approve every page before we write a line of code. Two rounds of revisions included — no surprises at launch.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering in Next.js, WordPress, or Shopify. Daily commits to your GitHub repo. Staging URL available within 48 hours so you can review on a real device.',
  },
  {
    number: '04',
    title: 'Review',
    description:
      'Live staging review with your team. Two rounds of content and design feedback. We test across Chrome, Safari, Firefox, iOS, and Android before you sign off.',
  },
  {
    number: '05',
    title: 'Ship',
    description:
      'Production launch with DNS transfer, SSL setup, sitemap submission, and a recorded handover walkthrough. Your code, your repo, your hosting — no dependencies on us.',
  },
];

const WEB_STATS = [
  {
    value: '7 days',
    label: 'average delivery from design sign-off to live launch',
    microcopy: 'for sites up to 5 pages on our Starter tier',
    categoryLabel: 'DELIVERY SPEED',
  },
  {
    value: '100/100',
    label: 'Lighthouse score target across performance, SEO, accessibility',
    microcopy: 'verified on every project before handover',
    categoryLabel: 'PERFORMANCE',
  },
  {
    value: '60–70%',
    label: 'cheaper than a comparable US web design agency',
    microcopy: 'same Next.js / Figma / Lighthouse quality, India-based cost structure',
    categoryLabel: 'COST ADVANTAGE',
  },
];

const US_WEB_STATS = [
  {
    value: '94%',
    label: 'of first impressions are design-related — users judge your credibility in 0.05 seconds',
    sourceUrl: 'https://www.tandfonline.com/doi/abs/10.1080/01449290500330448',
    sourceLabel: 'University of Surrey Study',
  },
  {
    value: '53%',
    label: 'of mobile users abandon a site that takes longer than 3 seconds to load',
    sourceUrl: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
    sourceLabel: 'Google / SOASTA Research',
  },
  {
    value: '$2,500',
    label: 'is what most US web agencies charge per page — before revisions, hosting, or ongoing fees',
    sourceUrl: 'https://www.upwork.com/resources/how-much-does-website-cost',
    sourceLabel: 'Upwork & Clutch market data',
  },
];

const INDUSTRIES = [
  {
    name: 'Home Services & Contractors',
    description:
      'Fast-loading local business sites with click-to-call, Google Maps integration, service area pages, and review widgets. Built to rank in local search and convert mobile visitors into calls.',
    example: 'HVAC, plumbing, landscaping, and cleaning clients report 2× more inbound calls.',
    linkLabel: 'See how it works',
    linkHref: '/contact',
  },
  {
    name: 'Professional Services',
    description:
      'Law firms, accounting practices, consultants, and financial advisors. Trust-driven design with clear credentials, practice area pages, and compliant lead capture forms.',
    example: 'Typically includes attorney bio pages, practice area landing pages, and intake forms.',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'HIPAA-conscious web design for medical practices, therapists, and wellness brands. Patient-friendly booking integrations, service pages, and insurance information layouts.',
    example: 'Average 35% increase in online appointment booking after redesign.',
  },
  {
    name: 'E-Commerce & Retail',
    description:
      'Custom Shopify or Next.js Commerce stores with branded product pages, collection filters, upsell widgets, and checkout optimization. Built for conversion, not just aesthetics.',
    example: 'DTC brands average 2.3× improvement in mobile add-to-cart rate.',
  },
  {
    name: 'Restaurants & Hospitality',
    description:
      'Visually rich restaurant and hospitality sites with online menus, reservation integrations (OpenTable, Resy), event pages, and photo-forward design that captures atmosphere.',
    example: 'Google PageSpeed 95+ maintained even with high-resolution food photography.',
  },
  {
    name: 'Real Estate',
    description:
      'Agent and brokerage sites with IDX property search integration, neighborhood landing pages, lead capture forms, and a CMS agents can update without developer help.',
    example: 'Clients report 40% more contact form submissions after switching from template sites.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Squarespace/Wix)' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '$1,999',
      '$8,000–$25,000',
      '$3,000–$8,000',
      '$16–$49/month (forever)',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 business days', '6–12 weeks', '4–8 weeks (unreliable)', '~1 day (but you build it)'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 100 performance',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & hosting',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Figma design approval before build',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile-first + Core Web Vitals green',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $1,999',
    description:
      'A clean, fast, conversion-focused website for small businesses that need to look professional and generate leads without breaking the budget.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact + 1 more)',
      'Custom Figma design — not a template',
      'Next.js or WordPress (your choice)',
      'Mobile-first, Lighthouse 95+ guaranteed',
      'Technical SEO: meta tags, schema, sitemap, robots.txt',
      'Contact form with email notifications',
      '2 rounds of design revisions',
      'Full code ownership — transferred to your GitHub on launch',
      '7-business-day delivery from design sign-off',
    ],
    cta: { label: 'Book a Free Audit Call', href: '/contact' },
  },
  {
    name: 'Growth',
    priceRange: 'From $3,999',
    description:
      'A full business website with a content management system, blog, and advanced SEO setup. The most popular tier for growing US companies.',
    features: [
      'Up to 15 pages including service and location pages',
      'CMS integration — update content without touching code',
      'Blog setup with category and tag architecture',
      'Advanced SEO: page-level keyword targeting, internal link map',
      'Google Analytics 4 + Search Console setup',
      'Lead capture forms with CRM integration (HubSpot, Pipedrive)',
      'Lighthouse 98–100 across all four categories',
      '3 rounds of design revisions',
      'Team content training walkthrough (recorded)',
      'Full code ownership on launch day',
    ],
    cta: { label: 'Get a Custom Quote', href: '/contact' },
    popular: true,
  },
  {
    name: 'Custom',
    priceRange: 'From $7,500',
    description:
      'E-commerce stores, Next.js web applications, large marketing sites, and complex builds with third-party API integrations.',
    features: [
      'Unlimited pages — scoped per project',
      'Shopify, Next.js Commerce, or custom e-commerce',
      'Third-party API integrations (Stripe, Twilio, HubSpot, etc.)',
      'Custom animations and interactive UI components',
      'Multi-language or multi-region site architecture',
      'Headless CMS setup (Sanity, Contentful, or WordPress)',
      'Dedicated engineering point of contact',
      'Performance SLA: Core Web Vitals green on launch',
      '30-day post-launch support window',
    ],
    cta: { label: 'Schedule a Scoping Call', href: '/contact' },
  },
] as const;

/* ─── FAQ categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'process',    label: 'Process & Timeline' },
  { key: 'pricing',   label: 'Pricing & Ownership' },
  { key: 'technical', label: 'Technical & Performance' },
  { key: 'seo',       label: 'SEO & Visibility' },
  { key: 'trust',     label: 'Trust & Results' },
];

const FAQ_ITEMS = [

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build a website?',
    answer:
      'Most small business websites — up to 5 pages — are designed, built, and launched within 7 business days of your approved design sign-off. Larger sites (6–15 pages) typically take 10–14 business days. Shopify or Next.js e-commerce stores with custom product logic take 3–5 weeks depending on catalog size and integration requirements. We give you a firm timeline after the brief, not before, because scope drives everything.',
  },
  {
    category: 'process',
    question: 'What does your web design process look like?',
    answer:
      'Five stages: Discover (a 30-minute brief where we map your goals, audience, competitors, and site architecture), Design (full Figma wireframes and visual mockups — you approve the look before we write code), Build (engineering in Next.js, WordPress, or Shopify with daily commits and a staging URL within 48 hours), Review (two rounds of content and design feedback on the live staging site), and Ship (production launch with DNS transfer, SSL, sitemap submission, and a recorded handover walkthrough).',
  },
  {
    category: 'process',
    question: 'Do I get to approve the design before you start building?',
    answer:
      'Yes — always. We present full Figma mockups for every key page before writing a line of code. If you don\'t love the direction, we revise before we build — not after. This is how we avoid the expensive rework that blows up timelines at most agencies.',
  },
  {
    category: 'process',
    question: 'Can you redesign my existing website instead of building from scratch?',
    answer:
      'Yes, and redesigns are one of our most common engagements. We audit your current site, identify what\'s hurting performance and conversions, carry over any content worth keeping, and rebuild with modern standards. If your current site runs on WordPress, we can often redesign in place without disrupting your URL structure or existing SEO equity.',
  },

  /* ── Pricing & Ownership ── */
  {
    category: 'pricing',
    question: 'How much does a custom website cost?',
    answer:
      'FactoryJet\'s web design starts at $1,999 for a 5-page business website. A full business site with up to 15 pages, a blog, and CMS integration runs $3,999. E-commerce stores, custom Next.js applications, and larger projects start at $7,500 — scoped after a free discovery call. All prices are 60–70% lower than comparable US web agencies.',
  },
  {
    category: 'pricing',
    question: 'Do I own the website and code after the project is done?',
    answer:
      'Yes — 100%. We transfer the full codebase to your GitHub repository on launch day. You own every line of code, all design files in Figma, and all hosting credentials. There are no monthly platform fees owed to FactoryJet, no lock-in, and no dependencies on us to keep your website running. If you outgrow us, you walk away with an asset.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after launch?',
    answer:
      'Domain registration ($10–$20/year, you own it) and hosting ($10–$50/month depending on traffic and platform — you pay the hosting provider directly, not us). WordPress and Next.js sites can be hosted on Vercel, Cloudflare Pages, or any standard host. That\'s it — no monthly agency retainer required unless you want ongoing support.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet so much cheaper than US agencies?',
    answer:
      'Our design and engineering team is India-based. That\'s the answer. The same Next.js expertise, the same Figma design quality, the same Lighthouse 100 performance — at dramatically lower labor costs. We\'ve served US businesses since 1999. We don\'t have layers of account management, project coordinators, and sales reps inflating your invoice. You brief an engineer and a designer; they build it.',
  },

  /* ── Technical & Performance ── */
  {
    category: 'technical',
    question: 'What platform will my website be built on?',
    answer:
      'We build on Next.js (for performance-critical business sites, web apps, and headless setups), WordPress (for content-driven sites where non-technical editors need full CMS control), and Shopify (for e-commerce). We recommend the right platform after understanding your goals — not because we prefer one. All platforms are set up for Core Web Vitals green, mobile-first, and zero vendor lock-in.',
  },
  {
    category: 'technical',
    question: 'What Lighthouse score will my website get?',
    answer:
      'Our Starter tier guarantees Lighthouse 95+ across all four categories (Performance, Accessibility, Best Practices, SEO). Our Growth and Custom tiers target 98–100. We run PageSpeed Insights and Core Web Vitals checks as part of our QA process before every launch — you see the scores before you sign off.',
  },
  {
    category: 'technical',
    question: 'Will my website work on mobile?',
    answer:
      'Every website we build is mobile-first — we design for mobile before desktop, not the other way around. We test on physical iOS and Android devices, not just browser emulators, across multiple screen sizes. Tap targets, font sizes, form inputs, and navigation menus are all validated against mobile UX standards.',
  },
  {
    category: 'technical',
    question: 'Can I update my website content without a developer?',
    answer:
      'Yes. Every site we build includes a way for non-technical users to update content. WordPress and Shopify clients get a native CMS. Next.js clients get a headless CMS setup (Sanity or Contentful) or a simple Markdown-based content layer. We include a recorded walkthrough of your specific CMS on launch day.',
  },

  /* ── SEO & Visibility ── */
  {
    category: 'seo',
    question: 'Will my website rank on Google?',
    answer:
      'Every website we deliver includes technical SEO as standard: correct heading structure (H1/H2/H3), optimized meta titles and descriptions, canonical URLs, Open Graph tags, schema markup (Organization, LocalBusiness, FAQPage as appropriate), XML sitemap, robots.txt, and Core Web Vitals optimization. Content-level SEO — keyword research, page-level optimization, and content strategy — is available as a Growth tier add-on.',
  },
  {
    category: 'seo',
    question: 'Will a redesign hurt my existing Google rankings?',
    answer:
      'Not if we do it properly — and we do. Before any redesign, we audit your current URL structure, identify which pages have existing search equity, and architect the new site to preserve all high-value URLs. Where redirects are needed, we implement 301 redirects correctly. Most clients see rankings improve after redesign because their Lighthouse scores and Core Web Vitals improve significantly.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US web agency?',
    answer:
      'Three differences that matter: price (60–70% cheaper because our team is India-based, serving US businesses for 25+ years), speed (7-day delivery on standard sites — most US agencies quote 6–12 weeks), and ownership (you get the full codebase on launch day — no retainer required to keep your site online). We\'ve delivered 500+ websites for US businesses across every industry. We aren\'t selling you a template with a custom logo.',
  },
  {
    category: 'trust',
    question: 'Do you have examples of websites you\'ve built?',
    answer:
      'Yes — our portfolio is at factoryjet.com/portfolio and covers business websites, e-commerce stores, landing pages, and web applications across multiple industries. On strategy calls we\'ll share relevant examples for your specific industry and use case.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebDesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="web-design-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="web-design-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'Web Design', href: '/us/services/web-design' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '/contact' },
        ]}
        cta={{ label: 'Book a Free Audit', href: '/contact' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · USA"
          headline="A Website That Converts, Launched in 7 Days"
          lead="Most US small businesses are losing customers to slow, outdated websites. FactoryJet builds custom, high-performance websites in Next.js, WordPress, and Shopify — designed in Figma, built to Lighthouse 100, and delivered at 60–70% the cost of a US agency."
          primaryCta={{ label: 'Book a Free Website Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ websites delivered',
            'Starting at $1,999',
            '7-day delivery guarantee',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-fj-jet-blue"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT YOUR WEBSITE SHOULD DO
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Load fast. Look sharp. Turn visitors into customers.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Load in under 2 seconds on mobile — or 53% of visitors leave before it finishes',
                  'Score 95+ on Lighthouse — Google ranks fast, accessible, technically clean sites higher',
                  'Convert at 2–4% or better — most template sites convert below 1%',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-fj-jet-blue/10 font-fj-mono text-[10px] font-bold text-fj-jet-blue">
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
                  FactoryJet sites average Lighthouse 98–100 on delivery. Verified.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites delivered. 25 years of building. US businesses trust the results."
        />

        {/* ── 3. WHAT MAKES A GREAT WEBSITE ───────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN EXPLAINED"
          headline="What a Great Business Website Actually Does"
          lead="Most small business websites look okay and perform terribly. Yours should do the opposite: fast enough to rank, clear enough to convert, and simple enough for your team to manage."
          body={
            <>
              {/* Performance chip strip — aria-hidden decorative */}
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Lighthouse 100',
                  'Core Web Vitals green',
                  'Mobile-first',
                  'Schema markup',
                  'Sub-2s load time',
                  'Zero cookie bloat',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-fj-jet-blue/25 bg-fj-jet-blue/8 px-3 py-1 font-fj-mono font-semibold uppercase text-fj-jet-blue"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                A business website has one job: turn the right visitors into paying customers. That means it needs to load fast enough that people don&apos;t leave before they see it, look professional enough that they trust you, and make the next step obvious enough that they take it. Most template-built sites fail on all three counts.
              </p>

              {/* 3-col mini stats — aria-hidden decorative */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '0.05s', label: 'to form first impression' },
                  { value: '53%', label: 'abandon after 3s load' },
                  { value: '94%', label: 'judge trust by design' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-fj-jet-blue"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
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

              {/* Pull-quote — aria-hidden decorative */}
              <div className="border-l-2 border-fj-jet-blue pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Performance and design aren&apos;t in tension. The best websites are both.
                </p>
              </div>
              <p>
                FactoryJet approaches web design the way modern SaaS companies do: Figma-first design, then engineering in Next.js or WordPress, with Lighthouse 100 as a non-negotiable target. We don&apos;t use page builders, visual editors, or bloated themes. The result is a site that loads fast, ranks well, and looks intentional — because it was designed for your specific business, not adapted from someone else&apos;s template.
              </p>

              <p>
                We&apos;ve built for home service companies, law firms, medical practices, e-commerce brands, SaaS companies, and local restaurants across the US. The design language changes; the standard of craft doesn&apos;t. Every project gets the same full Figma design process, the same engineering rigor, and the same Lighthouse audit before launch.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  FactoryJet Site Scorecard
                </p>
              </div>
              {/* Score rows */}
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { metric: 'Lighthouse Performance', score: '99', note: 'avg. on delivery' },
                  { metric: 'Lighthouse Accessibility', score: '100', note: 'WCAG AA compliant' },
                  { metric: 'Lighthouse SEO', score: '100', note: 'technical SEO included' },
                  { metric: 'Largest Contentful Paint', score: '<1.8s', note: 'mobile 4G' },
                  { metric: 'Cumulative Layout Shift', score: '0.02', note: 'well below 0.1 threshold' },
                  { metric: 'First Input Delay', score: '<50ms', note: 'instant response to clicks' },
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
                    <p className="fj-display flex-shrink-0 font-bold text-fj-jet-blue" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-fj-jet-blue" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Verified before every handover.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your website is losing you customers. You might not know it yet."
          lead="An outdated, slow, or confusing website doesn't just look unprofessional. It actively costs you leads, conversions, and Google rankings. The good news: it's fixable in 7 days."
          pillars={[
            {
              icon: '🐢',
              title: 'Slow sites lose more than half their visitors',
              body: '53% of mobile users abandon a site that takes more than 3 seconds to load. Most template-built WordPress and Squarespace sites load in 4–6 seconds on mobile 4G. That\'s not a minor inconvenience — it\'s more than half your paid ad traffic gone before they see a single word.',
            },
            {
              icon: '📉',
              title: 'Template sites convert at under 1%',
              body: 'The average small business website built on a theme or template converts at 0.5–0.8%. A conversion-optimized custom site converts at 2–4%. On 1,000 monthly visitors at a $500 average sale, that\'s the difference between $5,000/month and $20,000/month in revenue — from the same traffic.',
            },
            {
              icon: '💸',
              title: 'US agencies charge $8,000–$25,000 for the same work',
              body: 'A mid-tier US web agency charges $2,500+ per page before revisions, project management fees, and hosting markup. FactoryJet delivers the same Figma-first design, Next.js engineering, and Lighthouse 100 performance — at 60–70% less — because our team is India-based with 25 years of serving US clients.',
            },
          ]}
        />

        {/* ── 5. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD"
          headline="Six Types of Websites We Build for US Businesses"
          lead="Not every business needs the same thing. We match the right platform and design approach to your specific goals — whether you need a lead-gen site, an e-commerce store, or a complete web app."
          sectors={WEB_DESIGN_TYPES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Brief to Live Website in 5 Stages"
          lead="A clear, predictable process where you approve the design before we build — so there are no surprises and no blown timelines."
          stages={WEB_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 BUSINESS DAYS TO LAUNCH · FIGMA APPROVAL BEFORE BUILD BEGINS"
        />

        {/* ── 7. PERFORMANCE STATS ─────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={WEB_STATS} align="center" />
        </div>

        {/* ── 8. FULL TECH STACK ───────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR TECH STACK"
          headline="Modern Web Technologies — Zero Black-Box Builders"
          lead="We build with the same tools that power Stripe, Vercel, and Linear — not page builders, visual editors, or bloated themes. Your site loads fast because the code is clean."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Next.js', 'React', 'TypeScript', 'WordPress', 'Shopify', 'Tailwind CSS', 'Figma', 'Sanity CMS'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-fj-jet-blue/25 bg-fj-jet-blue/8 px-3 py-1 font-fj-mono font-semibold uppercase text-fj-jet-blue"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Next.js & React</strong> — Our default for performance-critical business sites and web applications. Static generation, edge caching, and server components mean your pages serve in milliseconds from Cloudflare&apos;s global network.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WordPress (Headless or Traditional)</strong> — When your team needs a full CMS with editorial workflows, we build on WordPress with custom block themes or a headless setup connected to Next.js on the frontend.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify</strong> — For e-commerce, Shopify is our default platform. We build custom Liquid themes or headless Shopify storefronts using the Storefront API, depending on your catalog complexity and performance requirements.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Figma</strong> — Every design starts in Figma. You get a shareable design file, a component library, and desktop + mobile mockups for every page before we open a code editor.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Tailwind CSS + TypeScript</strong> — We write typed, maintainable frontend code. Future engineers — yours or ours — can extend the codebase without archaeology.
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
                  { category: 'E-Commerce', tools: 'Shopify, Shopify Headless' },
                  { category: 'Design', tools: 'Figma, component libraries' },
                  { category: 'Hosting', tools: 'Cloudflare Pages, Vercel, WP Engine' },
                  { category: 'Analytics', tools: 'Google Analytics 4, Search Console' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-fj-jet-blue/50" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-fj-jet-blue" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  You own the repo. Zero lock-in.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 9. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US MARKET"
          headline="US Small Businesses Can't Afford a Bad Website in 2025"
          leadParagraphs={[
            "94% of first impressions are design-related. Your potential customers decide whether to trust you in 0.05 seconds — before they read a single word. If your website looks outdated, loads slowly, or doesn't work on mobile, that impression doesn't get a second chance.",
            "FactoryJet has been building websites for US small businesses since 1999. We've served companies in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the country. We understand what a 10-person service business needs from a website — not enterprise-level complexity, but professional design, fast performance, and a clear path to contact.",
            "The businesses that invest in a well-built website don't just look better — they convert better, rank better, and spend less on paid traffic to get the same results. A $1,999 website that converts at 3% outperforms a $30/month template site converting at 0.5% on almost any traffic level.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-fj-jet-blue py-1 pl-5" aria-hidden="true">
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your website is your hardest-working sales rep — and it&apos;s on 24/7.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {['Austin TX', 'Miami FL', 'Denver CO', 'Nashville TN', 'Portland OR', 'Charlotte NC', 'Raleigh NC', 'Tampa FL'].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-full border border-fj-jet-blue/25 bg-fj-jet-blue/8 px-3 py-1 font-fj-mono font-medium text-fj-jet-blue"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </>
          }
          stats={US_WEB_STATS}
        />

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Agency vs. Freelancer vs. Templates"
          lead="Not all web design options are the same. Here's what the decision looks like when you compare the real tradeoffs side by side."
          pullQuote={{
            stat: '$1,999',
            caption: 'starting price. Same Figma design, Next.js engineering, and Lighthouse 100 quality as a $15,000 US agency project.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices and timelines reflect typical US market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="Web Design Built for the Way Your Industry Actually Works"
          lead="Home service companies need click-to-call and Google Maps. Law firms need trust signals and intake forms. E-commerce brands need conversion-optimized product pages. We build for the real workflow."
          sectors={INDUSTRIES}
        />

        {/* ── 12. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price Web Design"
            lead="No hourly billing. No scope surprises. Every tier includes a fixed scope, fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Hosting is billed directly by your provider (Cloudflare, Vercel, or WP Engine) — not marked up by FactoryJet. Custom scopes quoted after a free discovery call. You own all code, design files, and hosting credentials on launch day."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a template shop with a custom logo. That's the point."
          lead="FactoryJet has built 500+ production websites for real US businesses since 1999. Every site starts in Figma, gets built with clean code, and ships with a Lighthouse audit you can verify yourself."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery — not 12 weeks',
              body: 'US agencies take 6–12 weeks because they have account managers, project coordinators, and approval layers between your brief and the keyboard. We don\'t. When you brief us, a designer and an engineer work on it. That\'s why we ship in 7 days.',
            },
            {
              icon: '🎯',
              title: 'Figma-first. Build nothing until you approve the design.',
              body: 'We present full desktop and mobile mockups before writing a line of code. If you don\'t love the direction, we revise — not after launch. This eliminates the expensive rework that burns both time and budget at agencies that build first and ask later.',
            },
            {
              icon: '🔒',
              title: 'Full code ownership on launch day',
              body: 'Your codebase lands in your GitHub repository the day you go live. No monthly retainer required to keep the lights on. No proprietary platform you\'re stuck inside. If you hire a developer later, they can work with it. If you outgrow us, you walk away with a real asset.',
            },
          ]}
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every discovery call — answered here, straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a Free Website Audit — No Obligation"
            sub="In 30 minutes, we'll audit your current site, show you exactly what's hurting performance and conversions, and give you a fixed price to fix it. No pitch. No pressure. Just an honest assessment from engineers who build for a living."
            primaryCta={{ label: 'Book Your Free Audit', href: '/contact' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Lighthouse 100 guaranteed. Full code ownership. 7-day delivery. Fixed price."
          />
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
