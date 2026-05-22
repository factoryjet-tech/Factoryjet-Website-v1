import type { Metadata } from 'next';
import Script from 'next/script';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { websiteCostAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
   Primary:   "how much does a website cost" (2,400/mo) · "website design cost" (1,900)
              "squarespace website pricing" (22,200) · "wix website pricing" (9,900)
   Secondary: "website design prices" (1,900) · "web design cost" (1,900)
              "website creation cost" (1,900) · "web design fees" (1,900)
   LSI:       "how much should a website cost" · "cost of squarespace website"
              "how much is a squarespace website" · "how much does a squarespace website cost"
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in 2025? | FactoryJet',
  description:
    'Honest website cost breakdown for US small businesses. Squarespace from $16/mo, custom sites from $1,999. See what you get at each price point.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'How Much Does a Website Cost in 2025? | FactoryJet',
    description:
      'Squarespace pricing, Wix pricing, WordPress costs, freelancer rates, and agency fees — all compared honestly. Custom websites from $1,999 with FactoryJet.',
    url: 'https://factoryjet.com/us/website-cost',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'Website Cost Guide 2025 — FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost in 2025? | FactoryJet',
    description:
      'Squarespace, Wix, WordPress, freelancer, and agency pricing — compared honestly. Custom websites from $1,999.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/website-cost',
    languages: websiteCostAlternates,
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
   JSON-LD Schemas — FAQPage · WebPage · BreadcrumbList
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A website costs anywhere from $0 to $150,000+ depending on how you build it and who builds it. DIY website builders like Squarespace start at $16/month (you build it yourself). A freelance web designer charges $1,000–$10,000 for a small business site. A US web design agency charges $5,000–$50,000+. FactoryJet builds custom websites for US small businesses starting at $1,999 — professionally designed, mobile-first, and delivered in 7 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Squarespace cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Squarespace plans cost $16–$65 per month (billed annually) for the software itself. The Personal plan is $16/mo, Business is $23/mo, and Commerce plans run $27–$49/mo. However, those prices are for you to build and maintain the site yourself. If you hire a Squarespace designer to build it, expect to pay $1,500–$5,000+ for the design work on top of the monthly subscription. FactoryJet builds custom Squarespace sites starting at $1,999, fully designed and ready to launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Wix website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wix website pricing starts at $17/month for the Light plan and goes up to $159/month for the Business Elite plan (billed annually). Like Squarespace, those subscription fees assume you\'re building and managing the site yourself. Professional Wix design services typically run $1,000–$4,000 for small business sites. If you want a professionally built website without the Wix monthly subscription, FactoryJet builds custom sites on WordPress, Webflow, or Next.js starting at $1,999 — you own it outright, no monthly platform fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a WordPress website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress software is free, but you\'ll need hosting ($5–$50/month), a domain ($12–$20/year), and usually a premium theme ($50–$200 one-time) or page builder plugin ($50–$300/year). A DIY WordPress site can cost as little as $100–$500/year in total. A professionally built WordPress site by a freelancer runs $2,000–$10,000. A custom WordPress build by a US agency typically costs $8,000–$40,000+. FactoryJet builds custom WordPress websites for US small businesses starting at $2,499 — fully designed, SEO-configured, and delivered in 7 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should a website cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small business website that\'s professionally designed, mobile-optimized, SEO-ready, and actually converts visitors into leads should cost $1,500–$8,000 for most businesses. That range covers a freelance designer on the low end and a boutique web design agency like FactoryJet in the middle. US agencies typically charge $8,000–$40,000 for equivalent work. The cheapest option (DIY builders) will save money upfront but cost you in time, design quality, and often in lost conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average cost of a website design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost of website design depends heavily on who you hire. Freelance designers average $2,000–$8,000 for a small business site. Boutique web design agencies like FactoryJet charge $1,999–$8,999. Mid-size US agencies charge $8,000–$25,000. Large agencies and enterprise web studios charge $25,000–$150,000+. The sweet spot for most US small businesses is $2,000–$6,000 — enough to get a genuinely professional site without overpaying for agency overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is web design so expensive at big agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US web design agencies are expensive because they carry significant overhead: Manhattan or San Francisco office space, large teams with project managers, account managers, UX researchers, and copywriters — all billing at US salaries. A $20,000 website project at a US agency might involve 8–12 people each billing $150–$300/hour. FactoryJet is structured differently: a lean, senior-only team based in India, serving US clients at 60–70% lower cost without the overhead. Same engineering quality, fundamentally different cost structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a $500 website worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A $500 website is rarely worth it for a business that depends on its website to generate leads or revenue. At that price, you\'re typically getting a template with your logo swapped in, minimal customization, no SEO work, and no conversion optimization. It will look generic, load slowly, and probably won\'t rank for anything. The exception is a truly minimal "digital business card" for a business that gets all its work through referrals and just needs something to exist online. For anything beyond that, budget at least $1,500–$2,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does FactoryJet charge for a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds custom websites for US small businesses starting at $1,999 for a 5-page site, delivered in 7 days. E-commerce sites start at $2,999. Web application development starts at $7,999. Every project is fixed-price — no hourly billing, no scope creep, no surprise invoices. Compared to US agencies charging $8,000–$40,000 for equivalent work, FactoryJet delivers the same professional quality at 60–70% lower cost. Book a free strategy call to get a custom quote for your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between a cheap website and an expensive one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The difference between a $500 website and a $5,000 website is usually in four areas: custom design vs. generic templates, conversion optimization vs. just looking nice, technical SEO vs. no optimization, and support vs. figure it out yourself. A cheap website exists. An expensive one works — it ranks in search, loads fast, looks professional on every device, and converts visitors into leads. The price gap between a $2,000 professionally built site and a $10,000 agency site is mostly overhead, not quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use Squarespace or hire a web designer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Squarespace yourself if you have the time to build and maintain a site, your business doesn\'t depend heavily on web traffic, and you\'re comfortable with a template-based design. Hire a web designer if your website is a primary lead source, you need custom functionality, you want to rank in Google, or you simply don\'t have 40+ hours to build a site yourself. The subscription savings from going DIY ($200–$800/year) don\'t justify the time and quality trade-off for most businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A DIY website builder can produce something in a weekend, but a professionally designed small business site typically takes 3–8 weeks at most US agencies. FactoryJet delivers 5-page websites in 7 days — a hard delivery guarantee. Larger projects (e-commerce, web apps) take 2–6 weeks. The timeline varies based on how quickly you provide content, feedback, and approvals, but our project structure is designed to minimize delays and keep everything moving.',
      },
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How Much Does a Website Cost in 2025?',
  url: 'https://factoryjet.com/us/website-cost',
  description:
    'Honest website cost breakdown: Squarespace pricing, Wix pricing, WordPress costs, freelancer rates, agency fees, and FactoryJet custom website pricing for US small businesses.',
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '1999',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  dateModified: '2025-05-15',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Website Cost Guide', item: 'https://factoryjet.com/us/website-cost' },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
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

/* ─────────────────────────────────────────────────────────────────────────────
   Section Data
───────────────────────────────────────────────────────────────────────────── */

const COST_FACTORS = [
  {
    factor: 'Number of pages',
    cheap: '1–3 pages',
    mid: '5–10 pages',
    premium: '10–30+ pages',
  },
  {
    factor: 'Custom design',
    cheap: 'Template only',
    mid: 'Semi-custom',
    premium: 'Fully custom',
  },
  {
    factor: 'E-commerce',
    cheap: 'None',
    mid: 'Basic store',
    premium: 'Full custom store',
  },
  {
    factor: 'SEO setup',
    cheap: 'None',
    mid: 'On-page basics',
    premium: 'Full technical SEO',
  },
  {
    factor: 'Mobile optimization',
    cheap: 'Responsive template',
    mid: 'Tested & optimized',
    premium: 'Mobile-first design',
  },
  {
    factor: 'Support included',
    cheap: 'None',
    mid: '30 days',
    premium: '90 days+',
  },
];

const PLATFORM_PRICING = [
  {
    platform: 'Squarespace (DIY)',
    monthly: '$16–$65/mo',
    oneTime: 'Your time to build',
    total: '$192–$780/yr',
    note: 'You build and maintain it',
  },
  {
    platform: 'Wix (DIY)',
    monthly: '$17–$159/mo',
    oneTime: 'Your time to build',
    total: '$204–$1,908/yr',
    note: 'You build and maintain it',
  },
  {
    platform: 'WordPress (DIY)',
    monthly: '$5–$50/mo hosting',
    oneTime: '$50–$200 theme',
    total: '$110–$800/yr',
    note: 'Free software, you manage everything',
  },
  {
    platform: 'Freelance Designer',
    monthly: 'Your hosting ($5–$50)',
    oneTime: '$1,000–$10,000',
    total: '$1,060–$10,600',
    note: 'Quality varies widely',
  },
  {
    platform: 'FactoryJet',
    monthly: 'Your hosting ($5–$50)',
    oneTime: 'From $1,999',
    total: 'From $2,059',
    note: '7-day delivery, fixed price',
  },
  {
    platform: 'US Web Design Agency',
    monthly: 'Your hosting',
    oneTime: '$8,000–$50,000+',
    total: '$8,000–$50,000+',
    note: '6–16 week timelines typical',
  },
];

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description:
      'A 30-minute call to understand your goals, audience, and must-have functionality. We scope the project, discuss the design direction, and give you a fixed price before you commit to anything. No obligation.',
  },
  {
    number: '02',
    title: 'Design & Content',
    description:
      'You provide your logo, photos, and copy (or we write copy for you). We design the site using your brand — desktop and mobile. You review and approve the design before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build & QA',
    description:
      'We build the approved design on your chosen platform — WordPress, Webflow, Next.js, or Shopify. We test across browsers and devices, run Lighthouse audits for speed and SEO, and handle all technical configuration.',
  },
  {
    number: '04',
    title: 'Launch in 7 Days',
    description:
      'We deploy to your domain, configure SSL, submit your sitemap to Google, and hand over full access. The 7-day delivery clock starts the moment you send us your content. Most 5-page sites launch on or before day 7.',
  },
  {
    number: '05',
    title: '30-Day Support',
    description:
      'Every project includes 30 days of post-launch support — text changes, image swaps, layout tweaks, and bug fixes at no additional charge. You\'re never left to figure out a new website on your own.',
  },
];

const STATS = [
  {
    value: '$1,999',
    label: 'starting price for a 5-page custom website',
    microcopy: 'fixed price, delivered in 7 days',
    categoryLabel: 'OUR STARTING PRICE',
  },
  {
    value: '60–70%',
    label: 'cheaper than US web design agencies',
    microcopy: 'same engineering quality, leaner team structure',
    categoryLabel: 'COST ADVANTAGE',
  },
  {
    value: '7 days',
    label: 'delivery guarantee for 5-page websites',
    microcopy: 'vs. 6–16 weeks at most US agencies',
    categoryLabel: 'DELIVERY SPEED',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'DIY Builder' },
  { label: 'Freelancer' },
  { label: 'US Agency' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: ['From $1,999', 'Free–$200 + time', '$1,000–$10,000', '$8,000–$50,000+'],
  },
  {
    feature: 'Delivery time',
    values: ['7 days', 'Your weekends', '4–8 weeks', '6–16 weeks'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
    ],
  },
  {
    feature: 'Mobile-first & Lighthouse 100',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
    ],
  },
  {
    feature: 'Technical SEO included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed price — no hourly billing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: 'You own the code — no lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: '500+ projects delivered',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $1,999',
    description:
      'A professionally designed 5-page website, delivered in 7 days. Built for service businesses, consultants, local businesses, and anyone who needs a fast, professional online presence that actually converts.',
    features: [
      'Up to 5 custom-designed pages',
      'Mobile-first, Lighthouse 100 performance',
      'On-page SEO — meta tags, schema, sitemap',
      'Contact form + Google Maps integration',
      'SSL, domain connection, Google Analytics setup',
      'WordPress, Webflow, or Next.js — your choice',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'From $3,499',
    description:
      'A larger website for growing businesses — more pages, more functionality, and deeper SEO setup. The most common choice for businesses replacing an outdated site or building something more ambitious than a basic brochure.',
    features: [
      'Up to 15 custom-designed pages',
      'Blog setup with CMS for easy content publishing',
      'Advanced SEO — schema markup, local SEO, page speed',
      'Integrations: CRM, email marketing, booking systems',
      'Custom animations and interactive elements',
      'Team training session — manage your own site',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'E-Commerce',
    priceRange: 'From $2,999',
    description:
      'A Shopify or WooCommerce store built for conversion — product pages designed to sell, checkout flows that don\'t leak revenue, and the technical SEO foundation to bring in organic traffic.',
    features: [
      'Shopify or WooCommerce — your platform',
      'Up to 50 products configured and uploaded',
      'Custom theme design — not a template',
      'Payment gateway + shipping setup',
      'Product page conversion optimization',
      'E-commerce SEO — collections, product schema',
      'Full store ownership — no agency dependency',
      '30-day post-launch support',
    ],
    cta: { label: 'Get an E-Commerce Quote', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ Categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'platform-costs',    label: 'Platform Costs' },
  { key: 'agency-costs',      label: 'Agency & Freelancer' },
  { key: 'what-affects-cost', label: 'What Affects Price' },
  { key: 'factoryjet',        label: 'FactoryJet Pricing' },
  { key: 'buying-guide',      label: 'Buying Guide' },
];

const FAQ_ITEMS = [
  // ── Platform Costs ─────────────────────────────────────────────────────
  {
    question: 'How much does Squarespace actually cost per year?',
    answer: `Squarespace costs $192–$780 per year depending on your plan (Personal at $16/mo to Commerce Advanced at $65/mo, billed annually). That's just the platform fee — you build and manage the site yourself. If you hire a Squarespace designer, add $1,500–$5,000 for their time. There's also a transaction fee (0–3%) on sales depending on your plan tier. Over 3 years, a Squarespace Business plan costs roughly $830 in subscription fees — and that doesn't include your time maintaining it.`,
    category: 'platform-costs',
  },
  {
    question: `What's included in Wix website pricing?`,
    answer: `Wix pricing covers the platform subscription only ($17–$159/mo billed annually). That includes website hosting, SSL, and access to Wix's drag-and-drop builder. It doesn't include professional design, SEO work, copywriting, or ongoing updates. The higher Wix tiers (Business and Business Elite) add e-commerce features and priority customer support. For most small businesses, the Business plan at $36/mo is the relevant tier — but you're still building and maintaining the site yourself at that price.`,
    category: 'platform-costs',
  },
  {
    question: 'Is Wix or Squarespace cheaper for a small business?',
    answer: `Wix starts slightly cheaper ($17/mo vs. Squarespace's $16/mo) but the difference is negligible. Squarespace generally produces better-looking results for non-designers because its templates are more opinionated and harder to break. Wix is more flexible but that flexibility means you can also make a mess. For a small business that's going to DIY their site, Squarespace is usually the safer choice. For a small business hiring a professional, neither platform matters much — the designer makes the difference, not the builder.`,
    category: 'platform-costs',
  },
  {
    question: 'How much does WordPress cost per year?',
    answer: `WordPress software is free, but running a WordPress site costs $60–$600 per year in infrastructure: hosting ($5–$50/month), a domain ($12–$20/year), and usually a premium theme ($50–$200 one-time) or page builder ($50–$300/year). Managed WordPress hosting (WP Engine, Kinsta) runs $25–$100/month but includes better performance and support. A basic WordPress site costs about $120–$400/year to run. A fully managed, professionally built WordPress site from FactoryJet starts at $2,499 — you own it outright and pay only your hosting afterward.`,
    category: 'platform-costs',
  },
  {
    question: 'Is a Squarespace website worth it for a small business?',
    answer: `Squarespace is worth it for a small business if: you have the time to build and maintain a site, your business doesn't rely heavily on organic search traffic, and you don't need custom functionality. It's not worth it if: your website is your primary lead generation channel, you want to rank well in Google (Squarespace's SEO ceiling is low), or you need anything beyond what their templates support. For businesses that need a site that actually works — meaning it ranks, converts, and runs fast — a professionally built custom site is worth the extra investment.`,
    category: 'platform-costs',
  },

  // ── Agency & Freelancer ────────────────────────────────────────────────
  {
    question: 'Why do web design agencies charge so much?',
    answer: `US web design agencies charge $8,000–$50,000+ because they carry significant overhead: US salaries, office space in major cities, large teams (account managers, project managers, UX researchers, copywriters, QA testers), and enterprise-level processes for projects that often don't need them. A $20,000 agency project might involve 10 people each billing $150–$250/hour. FactoryJet is structured differently — a senior-only engineering team based in India, no agency overhead, US-facing service. That's how we deliver the same quality at 60–70% lower cost.`,
    category: 'agency-costs',
  },
  {
    question: 'How much does a freelance web designer charge?',
    answer: `Freelance web designers typically charge $50–$150/hour in the US, or $1,000–$10,000 flat for a small business website. Junior freelancers on platforms like Upwork charge $25–$50/hour; experienced US-based freelancers charge $75–$150/hour. Budget freelancers from overseas platforms charge $10–$30/hour but quality is inconsistent. The risk with freelancers is that one person handles everything — and if they get sick, go quiet, or just do poor work, you have limited recourse. Fixed-price projects with an agency carry more accountability.`,
    category: 'agency-costs',
  },
  {
    question: 'Is it worth hiring a web designer or should I just use a website builder?',
    answer: `Hire a web designer if your website is going to generate leads or revenue for your business — the difference between a $0 DIY site and a $2,000 professionally designed site is visible in conversion rates, Google rankings, and how your brand comes across. Use a website builder yourself if your business is purely referral-based, you need something to exist rather than something to convert, and you're happy to spend 30–50 hours building and maintaining it. For any business where the website is a growth channel, professional design pays for itself quickly.`,
    category: 'agency-costs',
  },
  {
    question: 'What does a $5,000 website get you vs. a $500 website?',
    answer: `A $500 website typically gets you a template with your content swapped in, minimal SEO setup, no conversion optimization, and no meaningful support after launch. A $5,000 website gets you a custom design built around your brand and audience, technical SEO that actually gives you a shot at ranking, performance optimization (Lighthouse 90+ scores), conversion-focused layouts, proper analytics setup, and 30+ days of post-launch support. The real-world difference in leads generated and customer perception is far larger than the price gap.`,
    category: 'agency-costs',
  },

  // ── What Affects Price ────────────────────────────────────────────────
  {
    question: 'What makes a website more expensive to build?',
    answer: `Several factors drive website cost up: the number of pages (more pages = more design and development time), custom functionality (booking systems, calculators, member portals, API integrations), e-commerce (product catalogs, payment processing, inventory management), custom photography or video, advanced animations, multilingual support, and the need for ongoing maintenance contracts. The biggest cost driver at agencies is complexity that could be avoided with better scoping. At FactoryJet, we scope carefully upfront so your fixed price includes everything and surprises don't appear mid-project.`,
    category: 'what-affects-cost',
  },
  {
    question: 'Does the platform I choose affect how much my website costs?',
    answer: `Yes, significantly. WordPress and Webflow are the most cost-efficient platforms for professionally built sites — they have mature ecosystems that reduce custom development time. Shopify is the right choice for e-commerce but adds a monthly platform fee. Next.js and custom React builds are the most powerful but also the most time-intensive. DIY builders like Squarespace and Wix are cheapest upfront but the ongoing subscription fees and maintenance time add up over 3–5 years. FactoryJet builds on WordPress, Webflow, Next.js, and Shopify — we'll recommend the right platform for your use case and budget.`,
    category: 'what-affects-cost',
  },
  {
    question: 'Does SEO cost extra when building a website?',
    answer: `At FactoryJet, on-page SEO is included in every website project — meta titles, descriptions, schema markup, sitemap generation, image alt text, header structure, Core Web Vitals optimization, and Google Search Console submission. What's not included in a standard build is ongoing SEO (content strategy, link building, monthly rankings work) — that's a separate service. Many agencies charge extra for even basic on-page SEO setup. We think that's wrong — a website that isn't set up for search from day one is a website that doesn't perform.`,
    category: 'what-affects-cost',
  },
  {
    question: 'How much does website copywriting cost?',
    answer: `Professional website copywriting typically costs $75–$200 per page from a freelance copywriter, or $500–$2,000 for a full 5-page website. Many web design projects don't include copy — you're expected to provide your own text. FactoryJet includes basic copywriting guidance and can connect you with copywriting partners, but most projects rely on client-provided content. If writing isn't your strength, budgeting $500–$1,500 for a copywriter alongside your website design spend is worth it — the words on your site matter as much as the design.`,
    category: 'what-affects-cost',
  },

  // ── FactoryJet Pricing ────────────────────────────────────────────────
  {
    question: 'How much does FactoryJet charge to build a website?',
    answer: `FactoryJet's website pricing starts at $1,999 for a custom 5-page website, delivered in 7 days. E-commerce stores start at $2,999. Larger sites with 10–15 pages start at $3,499. Web application development starts at $7,999. All projects are fixed price — you know the number before we start, and it doesn't change. Compared to US agencies charging $8,000–$40,000 for equivalent work, FactoryJet delivers the same professional quality at 60–70% lower cost because our engineering team is based in India while we serve US clients directly.`,
    category: 'factoryjet',
  },
  {
    question: 'How can FactoryJet be so much cheaper than US agencies?',
    answer: `FactoryJet's engineering team is based in India, where senior developer salaries are 70–80% lower than US equivalents. We don't carry US office overhead, large account management teams, or enterprise-level process bureaucracy. We're a lean, senior-only team that has built 500+ websites since 1999 — we're fast and accurate because we've solved most problems before. The savings go directly to you. The work quality is the same: the same Next.js, the same WordPress, the same Lighthouse 100 scores your US agency would deliver.`,
    category: 'factoryjet',
  },
  {
    question: 'Does FactoryJet really deliver websites in 7 days?',
    answer: `Yes — for 5-page websites, 7 business days from the moment we receive your content (text, logo, images). The clock starts when your content is in, not when you sign the contract. Most projects hit the 7-day target. Larger projects (10+ pages, e-commerce, web apps) take 2–4 weeks depending on scope. The 7-day guarantee is backed by our track record — we've delivered 500+ websites since 1999 and our processes are built around moving fast without sacrificing quality.`,
    category: 'factoryjet',
  },
  {
    question: 'What platforms does FactoryJet build websites on?',
    answer: `FactoryJet builds on WordPress, Webflow, Next.js, and Shopify — whichever is the right fit for your use case. For most small business sites, we recommend WordPress (widest ecosystem, easiest for you to manage) or Webflow (cleaner CMS, no plugin maintenance). For e-commerce, we build on Shopify or WooCommerce. For high-performance custom applications, we use Next.js on Cloudflare. We don't build on Squarespace or Wix for client projects — those platforms cap what we can achieve for you technically.`,
    category: 'factoryjet',
  },

  // ── Buying Guide ──────────────────────────────────────────────────────
  {
    question: 'How do I know if a web design quote is fair?',
    answer: `A fair web design quote should be itemized enough that you know what you're paying for. Red flags: vague "discovery" fees with no defined deliverable, hourly billing with no cap, "design" and "development" billed separately at $150+/hour each, and maintenance retainers required to keep your site working. A fair quote includes a clear scope, a fixed price or hard estimate, defined deliverables, and a payment schedule tied to milestones. FactoryJet quotes are fully fixed — scope, price, and timeline agreed before work starts.`,
    category: 'buying-guide',
  },
  {
    question: 'Should I pay monthly for a website or own it outright?',
    answer: `Own it outright wherever possible. Monthly "website as a service" arrangements from agencies (typically $200–$500/month) sound affordable but add up to $2,400–$6,000/year — and if you stop paying, the website disappears because you never owned the code. A $2,000–$5,000 website you own outright pays for itself in under two years vs. a monthly arrangement, and you're never dependent on a single vendor. FactoryJet delivers full code ownership on launch day — your site, your GitHub repo, your hosting account.`,
    category: 'buying-guide',
  },
  {
    question: 'What questions should I ask before hiring a web design agency?',
    answer: `Ask these before signing anything: Is the price fixed or hourly? Who owns the code when the project ends? What platform are you building on and can I take it elsewhere? Do you include SEO setup or is that extra? What does the post-launch support cover and for how long? Who is my point of contact and how quickly do you respond? Can I see 5 recent websites you've built that are live? A good agency answers these clearly and confidently. Vague answers to pricing and ownership questions are a red flag.`,
    category: 'buying-guide',
  },
  {
    question: 'How much should I budget for website maintenance?',
    answer: `Budget $50–$150/month for self-managed website maintenance (hosting, domain, plugin updates, backups). If you want someone else to handle it, managed maintenance services run $100–$500/month depending on scope. FactoryJet includes 30 days of post-launch support in every project at no extra charge. After that, simple maintenance (WordPress updates, plugin management, minor content changes) can be handled by most non-technical business owners with a tool like ManageWP, or by a VA for $100–$200/month.`,
    category: 'buying-guide',
  },
  {
    question: 'Is now a good time to build or redesign a website?',
    answer: `Yes — and the reason is AI search. Google's AI Overviews, ChatGPT, and Perplexity are now the first stop for many business searches. Websites that are technically sound, fast, and structured with proper schema markup are the ones getting cited in AI answers. Websites built on outdated platforms, loading slowly, or missing structured data are becoming invisible. The businesses investing in quality websites now — not templates, not website builders — are the ones who'll dominate local and category search in the next 3–5 years.`,
    category: 'buying-guide',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebsiteCostPage() {
  return (
    <>
      <Script
        id="website-cost-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-cost-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="website-cost-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="website-cost-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Web Design', href: '/us/services/web-design' },
          { label: 'E-Commerce', href: '/us/services/ecommerce-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEBSITE COST GUIDE · 2025"
          headline={<>How Much Does a<br className="hidden lg:block" /> Website Really Cost?<br className="hidden lg:block" /> The Honest Answer.</>}
          lead="Squarespace from $16/mo. Wix from $17/mo. Freelancers from $1,000. US agencies from $8,000. FactoryJet from $1,999. Here's what you actually get at each price point — and the trade-offs no one talks about."
          primaryCta={{ label: 'Get a Free Custom Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Pricing', href: '#pricing' }}
          trustItems={['Fixed price, always', '7-day delivery', '60–70% cheaper than US agencies', '500+ websites built']}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              {/* Header */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Website Cost at a Glance — 2025
                </p>
              </div>
              {/* Rows */}
              <div className="divide-y divide-fj-neutral-100">
                {PLATFORM_PRICING.map(({ platform, oneTime, total, note }) => (
                  <div key={platform} className="flex items-center justify-between gap-4 px-7 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{platform}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">{note}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p
                        className="font-fj-mono font-medium text-[#F05A28]"
                        style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                      >
                        {oneTime}
                      </p>
                      <p
                        className="font-fj-mono text-fj-neutral-400"
                        style={{ fontSize: '10px', letterSpacing: '0.04em' }}
                      >
                        {total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">
                  Prices current as of 2025. DIY builder costs exclude your time. Agency costs vary by market.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ US businesses trust FactoryJet — from Austin and Miami to Denver, Nashville, and Portland" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="WHY FACTORYJET"
          headline="Professional websites from $1,999. Delivered in 7 days. 60–70% less than US agencies."
        />

        {/* ── 4. THE HONEST COST BREAKDOWN ─────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="THE HONEST BREAKDOWN"
          headline="What You Actually Get at Each Website Price Point"
          lead="Every website option has a real cost — but most comparisons only show the sticker price, not what's hidden behind it. Here's what you actually get (and give up) at each tier."
          body={
            <>
              <p>
                A Squarespace subscription costs $192–$780 per year. That's the platform fee. What you don't see in that number: the 30–50 hours you'll spend building it, the ongoing hours maintaining it, the SEO ceiling that keeps you off the first page of Google, and the design limitations that make it look like ten thousand other Squarespace sites. The platform is cheap. Your time isn't.
              </p>

              <p>
                Freelancers on Upwork or Fiverr quote $300–$1,500 for a website. What you usually get at that price: a pre-built template with your content swapped in, no custom design thinking, no SEO setup, and no accountability if the final product doesn't work. The best freelancers charge $3,000–$10,000 and deliver genuinely good work — but the range is enormous and vetting is hard.
              </p>

              {/* Cost factors table */}
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white shadow-sm">
                <div className="border-b border-fj-neutral-100 px-6 py-3">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    What You Get at Each Tier
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-100">
                  <div className="grid grid-cols-4 gap-2 px-6 py-2">
                    {['Feature', 'Budget ($500–)', 'Mid ($2k–$5k)', 'Premium ($8k+)'].map((h) => (
                      <p key={h} className="font-fj-mono font-semibold uppercase text-fj-neutral-400" style={{ fontSize: '9px', letterSpacing: '0.10em' }}>{h}</p>
                    ))}
                  </div>
                  {COST_FACTORS.map(({ factor, cheap, mid, premium }) => (
                    <div key={factor} className="grid grid-cols-4 gap-2 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-medium text-fj-ink">{factor}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{cheap}</p>
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-[#F05A28]">{mid}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-600">{premium}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-6 py-3">
                  <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">
                    FactoryJet sits in the mid-tier on price — and delivers premium-tier output. That&apos;s the point.
                  </p>
                </div>
              </div>

              <p>
                US web design agencies charge $8,000–$50,000+ not because they build better websites, but because they carry enormous overhead. Office rent in New York or San Francisco, teams of 10–15 people billing $150–$300/hour each, enterprise-level account management for projects that don't need it. You're paying for their cost structure, not their output.
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
                  The Real Cost of "Free" or Cheap
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { item: 'DIY builder (3 years)', visible: '$576–$2,340', hidden: '120+ hrs of your time' },
                  { item: 'Budget freelancer', visible: '$500–$1,500', hidden: 'No SEO, no support, no accountability' },
                  { item: 'Template designer', visible: '$800–$2,000', hidden: 'Looks like 10,000 other sites' },
                  { item: 'Offshore Upwork hire', visible: '$300–$800', hidden: 'Revision hell, missed deadlines' },
                  { item: 'US agency "starter" pkg', visible: '$8,000–$15,000', hidden: 'Junior team, senior billing rate' },
                ].map(({ item, visible, hidden }) => (
                  <div key={item} className="py-3.5">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item}</p>
                    <div className="mt-1 flex items-start gap-3">
                      <div>
                        <p className="font-fj-mono text-[0.75rem] font-medium text-fj-neutral-500">Listed: {visible}</p>
                        <p className="font-fj-mono text-[0.75rem] text-fj-neutral-400">Hidden: {hidden}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Cheap websites are never as cheap as they look.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY PRICING IS BROKEN (DARK) ──────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM WITH WEBSITE PRICING"
          headline="Three Reasons Website Quotes Are Almost Always Misleading"
          lead="The web design industry has a pricing transparency problem. Here's what's actually happening behind most quotes — and what to watch for before you sign anything."
          pillars={[
            {
              title: 'The hourly billing trap',
              body: `Most agencies quote hourly rates ($100–$300/hour) with estimated hours — but estimates are just that. Scope creep is industry-standard: "we underestimated the integrations" adds $2,000. "The client requested revisions" adds another $1,500. By the time the site launches, you've paid 30–40% more than the estimate. FactoryJet quotes fixed prices. The number you see is the number you pay.`,
            },
            {
              title: `"Design" fees that don't include development`,
              body: `Many web design agencies separate design (wireframes, mockups) from development (building the actual site) and bill each independently. A $3,000 design phase leads to a $7,000 development phase — billed separately, starting fresh. What you thought was a $3,000 website becomes a $10,000 website. Every FactoryJet quote covers design and development together. No phase games, no surprise second invoice.`,
            },
            {
              title: 'Monthly retainers that hold your website hostage',
              body: `A growing number of agencies offer "website as a service" — a monthly fee ($200–$500) that covers hosting and maintenance. Sound reasonable? Until you try to cancel: many of these arrangements mean you never owned the website code. Cancel the retainer, lose the site. FactoryJet delivers full code ownership on launch day. Your code, your hosting account, your GitHub repo. No dependency on us to keep your site running.`,
            },
          ]}
        />

        {/* ── 6. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. DIY Builder vs. Freelancer vs. US Agency"
          lead="Four ways to get a website built. They're not equal — here's what the decision actually looks like when you compare on the things that matter for a growing business."
          pullQuote={{
            stat: '$1,999',
            caption: 'starting price for a professionally built 5-page website, delivered in 7 days. US agencies start at $8,000 for equivalent work.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect 2025 US market rates. DIY builder costs exclude time investment. Agency costs vary by market and firm size."
        />

        {/* ── 7. STATS ─────────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={STATS} align="center" />
        </div>

        {/* ── 8. WHAT MAKES US DIFFERENT ───────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="HOW WE PRICE DIFFERENTLY"
          headline="Fixed Price. 7-Day Delivery. Full Ownership. No Asterisks."
          lead="Every other pricing model in the web design industry has a catch. Ours doesn't. Here's how we make that possible — and what it means for you as a client."
          reverseOnDesktop
          body={
            <>
              <p>
                FactoryJet has been building websites for US small businesses since 1999. That's 25 years of refining a process that moves fast, catches problems early, and delivers consistently. We've built 500+ websites — enough volume that we know exactly how long things take, what the common problems are, and how to price accurately.
              </p>

              <p>
                Our engineering team is based in India, serving US clients directly. No US office overhead, no bloated account management team, no junior developers billing at senior rates. Senior engineers doing the work on every project. The cost savings go to you, not to our office lease in Manhattan.
              </p>

              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  60–70% cheaper than a US agency. Same engineering quality. The math isn't complicated.
                </p>
              </div>

              <p>
                Every website we build hits Lighthouse 100 for performance and accessibility. Every site is mobile-first — not mobile-responsive as an afterthought. Every project includes on-page SEO, schema markup, sitemap submission, and Google Analytics setup. These aren't premium add-ons. They're the baseline of a website that actually works.
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
                  Every FactoryJet Website Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { item: 'Custom design', detail: 'Not a template — built around your brand' },
                  { item: 'Mobile-first', detail: 'Designed for phones before desktops' },
                  { item: 'Lighthouse 100', detail: 'Performance, SEO, accessibility — all green' },
                  { item: 'On-page SEO', detail: 'Meta, schema, sitemap, alt text — all done' },
                  { item: 'Analytics setup', detail: 'Google Analytics + Search Console connected' },
                  { item: 'Full code ownership', detail: 'Your repo, your hosting, your site' },
                  { item: '30-day support', detail: 'Changes and fixes after launch, included' },
                ].map(({ item, detail }) => (
                  <div key={item} className="flex items-center justify-between gap-4 px-7 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">{detail}</p>
                    </div>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(240,90,40,0.12)]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path d="M1 4L3.5 6.5L9 1" stroke="#F05A28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">
                  All included from $1,999. No add-on fees for SEO, mobile optimization, or analytics.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 9. PRICING ───────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="FACTORYJET PRICING"
            headline="Fixed-Price Websites From $1,999 — Know Your Number Before We Start"
            lead="No hourly billing. No scope creep. No 'we underestimated' conversations mid-project. Every tier has a fixed scope, a fixed price, and a 7-day delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Larger projects quoted after a free strategy call. 30-day post-launch support included in every tier. Full code ownership on launch day."
          />
        </div>

        {/* ── 10. HOW IT WORKS ─────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Quote to Live Website — Here's Every Step"
          lead="No surprises, no black boxes. Every stage has a deliverable you review and approve. Fixed scope, fixed price, and a live website at the end — not a mood board about one."
          stages={JOURNEY_STAGES}
          closingNote="5 STAGES · 7-DAY DELIVERY ON 5-PAGE SITES · FREE STRATEGY CALL BEFORE ANY COMMITMENT"
        />

        {/* ── 11. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 500+ projects. Real results from real businesses."
        />

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <div id="faq">
          <FAQ
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            headline="Every Website Cost Question, Answered Straight"
            lead="Platform pricing, agency fees, what's worth paying for, what isn't — all the questions we hear on every strategy call, answered without the runaround."
            categories={FAQ_CATEGORIES}
            items={FAQ_ITEMS}
          />
        </div>

        {/* ── 13. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="GET A FIXED PRICE"
          headline="Tell Us What You Need — We'll Quote a Fixed Price in 24 Hours"
          sub="No hourly estimates. No 'it depends.' Book a free 30-minute call and walk away with a fixed price, a delivery timeline, and a clear picture of what you're getting. 500+ websites built. 25 years in business. We've priced this before."
          primaryCta={{ label: 'Get My Free Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
          objectionHandler="Fixed price confirmed upfront. 7-day delivery on 5-page sites. Full code ownership. 30-day post-launch support. Free call before any commitment."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
