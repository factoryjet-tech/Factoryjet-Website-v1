import type { Metadata } from 'next';
import Link from 'next/link';
import { webDesignAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
import ServiceHeroImageBand from '@/components/v2/ServiceHeroImageBand';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Agency USA: Custom Sites in 7 Days | FactoryJet',
  description:
    'Web design agency for US small businesses. Custom Next.js, WordPress & Shopify sites built for speed, SEO, and conversions, live in 7 days. Get a quote today.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Agency USA: Custom Sites in 7 Days | FactoryJet',
    description:
      'Web design agency for US small businesses. Custom Next.js, WordPress & Shopify sites built for speed, SEO, and conversions, live in 7 days. Get a quote today.',
    url: 'https://factoryjet.com/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Agency USA: Custom Sites in 7 Days | FactoryJet',
    description:
      'Web design agency for US small businesses. Custom Next.js, WordPress & Shopify sites built for speed, SEO, and conversions, live in 7 days. Get a quote today.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design',
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
   JSON-LD Schema (Service + HowTo), faqSchema is declared after FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Services USA',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Web Design & Development',
  description:
    'Custom website design and development for US small businesses. Next.js, WordPress, and Shopify. 7-day delivery. Lighthouse 95+ performance. Fixed-price, milestone-paid. Get a quote on a free discovery call.',
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
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://factoryjet.com/services/web-design#breadcrumb',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WEB_DESIGN_TYPES = [
  {
    name: 'B2B & Corporate Websites',
    description:
      'Websites designed for complex buying committees, procurement review, and lead generation. Built on Next.js or WordPress with full CMS control.',
    example: 'Built for B2B enterprises, professional services, and high-consideration sales.',
    linkLabel: 'See B2B web design',
    linkHref: '/services/b2b-website-design',
  },
  {
    name: 'Manufacturing & Industrial',
    description:
      'Custom websites for precision manufacturers, OEMs, and distributors with RFQ capture, CAD file specs, and ERP integration.',
    example: 'Avg. Lighthouse score 98-100 across performance and accessibility.',
    linkLabel: 'Explore manufacturing web design',
    linkHref: '/services/manufacturing-website-design',
  },
  {
    name: 'SaaS & Tech Platforms',
    description:
      'Product marketing websites for B2B SaaS companies. Interactive product tours, pricing matrices, and CRM lead capture.',
    example: 'Optimized for high-velocity signups and demo request conversion.',
    linkLabel: 'See SaaS web design',
    linkHref: '/services/saas-website-design',
  },
  {
    name: 'Nonprofit Organizations',
    description:
      'Engaging, accessible websites for non-profits and foundations with secure recurring donation portals and donor CRM sync.',
    example: 'WCAG 2.1 AA compliant, integrated with Stripe and donor platforms.',
    linkLabel: 'See nonprofit web design',
    linkHref: '/services/nonprofit-website-design',
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
      'We audit your existing site, identify what\'s hurting performance and conversions, preserve your URL structure and SEO equity, and rebuild on a modern tech stack, with zero downtime on launch day.',
    example: 'Clients average 40% improvement in Google PageSpeed score post-redesign.',
    linkLabel: 'Book an audit',
    linkHref: '/services/website-redesign',
  },
];

const WEB_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute brief. We map your goals, audience, competitors, and site architecture, so the design solves a real business problem, not just looks good.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Full Figma wireframes and visual mockups. You approve every page before we write a line of code. Two rounds of revisions included, no surprises at launch.',
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
      'Production launch with DNS transfer, SSL setup, sitemap submission, and a recorded handover walkthrough. Your code, your repo, your hosting, no dependencies on us.',
  },
];

const WEB_STATS = [
  {
    value: '7 days',
    label: 'Average delivery from design sign-off to live launch.',
    microcopy: 'Applies to sites up to 5 pages on our Starter tier.',
    categoryLabel: 'DELIVERY SPEED',
  },
  {
    value: '100/100',
    label: 'Target Lighthouse score across performance, SEO, and accessibility.',
    microcopy: 'Verified on every project before final handover.',
    categoryLabel: 'PERFORMANCE',
  },
  {
    value: 'Fixed Price',
    label: 'Milestone-paid web design with full code ownership.',
    microcopy: 'Predictable pricing from initial quote to launch.',
    categoryLabel: 'PRICING MODEL',
  },
];

const US_WEB_STATS = [
  {
    value: '94%',
    label: 'First impressions are design-related. Users judge credibility in 0.05 seconds.',
    sourceUrl: 'https://www.tandfonline.com/doi/abs/10.1080/01449290500330448',
    sourceLabel: 'University of Surrey Study',
  },
  {
    value: '53%',
    label: 'Mobile users abandon a site that takes longer than 3 seconds to load.',
    sourceUrl: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
    sourceLabel: 'Google / SOASTA Research',
  },
  {
    value: 'Per page',
    label: 'Most US web agencies bill per page with open-ended revision fees.',
    sourceUrl: 'https://www.upwork.com/resources/how-much-does-website-cost',
    sourceLabel: 'Upwork & Clutch market data',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Traditional Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Squarespace/Wix)' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model.',
    values: [
      'Fixed-price, quoted upfront.',
      'Multiples higher, often hourly.',
      'Hourly, no ceiling.',
      'Cheap monthly fee (you build it).',
    ],
  },
  {
    feature: 'Delivery timeline.',
    values: ['7 business days.', '6–12 weeks.', '4–8 weeks (unreliable).', '~1 day (self-built).'],
  },
  {
    feature: 'Custom design (not a template).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 95+ performance.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & hosting.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Figma design approval before build.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile-first + Core Web Vitals green.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO included.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee.',
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
    priceRange: 'Get a quote',
    description:
      'A clean, fast, conversion-focused website for small businesses that need to look professional and generate leads without breaking the budget.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact, and Blog).',
      'Custom Figma design tailored to your brand.',
      'Next.js or WordPress built for maximum speed.',
      'Mobile-first layout with Lighthouse 95+ guaranteed.',
      'Complete technical SEO including metadata and schema.',
      'Functional contact form with instant notifications.',
      'Two rounds of structured design revisions.',
      'Seven business days delivery from design approval.',
    ],
    cta: { label: 'Book an Audit Call', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'Get a quote',
    description:
      'A full business website with a content management system, blog, and advanced SEO setup. The most popular tier for growing US companies.',
    features: [
      'Up to 15 pages including service and location pages.',
      'CMS integration allowing content edits without code.',
      'Blog architecture with categories and author bios.',
      'Advanced technical and on-page SEO targeting.',
      'Google Analytics 4 and Search Console integration.',
      'Lead capture forms connected to your CRM.',
      'Lighthouse 98 to 100 performance across all pages.',
      'Three rounds of design revisions.',
      'Recorded team training session for content management.',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Custom',
    priceRange: 'Talk to the founder',
    description:
      'E-commerce stores, Next.js web applications, large marketing sites, and complex builds with third-party API integrations.',
    features: [
      'Custom page count and architecture tailored to scope.',
      'Shopify, Next.js Commerce, or custom shopping cart.',
      'Third-party API integrations for Stripe and CRMs.',
      'Interactive animations and custom UI components.',
      'Multi-language or multi-region site structure.',
      'Headless CMS setup on Sanity, Contentful, or WordPress.',
      'Dedicated senior engineer as single point of contact.',
      'Performance SLA ensuring green Core Web Vitals.',
      '30-day post-launch technical support window.',
    ],
    cta: { label: 'Schedule a Scoping Call', modal: true, region: 'us' },
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
      'Most small business sites up to 5 pages launch within 7 business days of design approval. Larger sites with 6 to 15 pages typically require 10 to 14 business days. Custom e-commerce stores on Shopify or Next.js run 3 to 5 weeks depending on catalog complexity. We confirm a binding delivery schedule upfront after your scoping brief.',
  },
  {
    category: 'process',
    question: 'What does your web design process look like?',
    answer:
      'Our process runs in five clear stages. First is Discover: a 30-minute brief mapping goals and site architecture. Second is Design: full Figma mockups you approve before code starts. Third is Build: engineering in Next.js, WordPress, or Shopify with daily commits. Fourth is Review: two structured feedback rounds on live staging. Fifth is Ship: production launch, SSL setup, and training.',
  },
  {
    category: 'process',
    question: 'Do I get to approve the design before you start building?',
    answer:
      'Yes, always. We present complete Figma mockups for every template before writing code. If you want changes, we revise the design first. This eliminates costly rebuilds later and keeps your launch on schedule.',
  },
  {
    category: 'process',
    question: 'Can you redesign my existing website instead of building from scratch?',
    answer:
      'Yes, redesigns are one of our core service areas. We audit your site, pinpoint conversion barriers, and modernize the design. If you run on WordPress, we can redesign in place. We preserve your URL structure and search rankings throughout.',
  },

  /* ── Pricing & Ownership ── */
  {
    category: 'pricing',
    question: 'How much does a custom website cost?',
    answer:
      'Costs depend directly on project scope. A 5-page marketing site, a multi-page CMS site, and a custom e-commerce store require different engineering hours. Every FactoryJet project is fixed-price and milestone-paid. Schedule a brief call to receive a firm quote within 24 hours.',
  },
  {
    category: 'pricing',
    question: 'Do I own the website and code after the project is done?',
    answer:
      'Yes, you own 100% of your assets. We transfer the complete code repository to your GitHub account on launch day. You also receive full Figma files and hosting credentials. FactoryJet charges zero platform lock-in fees.',
  },
  {
    category: 'pricing',
    question: 'What are the ongoing costs after launch?',
    answer:
      'You only pay standard infrastructure fees. These include your annual domain registration and your monthly hosting plan. Next.js sites run affordably on Cloudflare Pages or Vercel. We require no mandatory retainer to keep your site live.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep web design pricing fixed and predictable?',
    answer:
      'We work exclusively on fixed-price contracts. Every project is scoped upfront with zero hourly billing. Serving US businesses for 12+ years means our estimates are accurate from day one. You collaborate directly with the engineers and designers building your site, eliminating account overhead.',
  },

  /* ── Technical & Performance ── */
  {
    category: 'technical',
    question: 'What platform will my website be built on?',
    answer:
      'We build on Next.js, WordPress, and Shopify. Next.js powers performance-focused sites and custom web apps. WordPress fits content teams needing familiar editorial controls. Shopify serves our e-commerce clients. We recommend the best platform for your goals, ensuring fast mobile speeds and full code ownership.',
  },
  {
    category: 'technical',
    question: 'What Lighthouse score will my website get?',
    answer:
      'Our Starter tier guarantees Lighthouse 95+ across Performance, Accessibility, Best Practices, and SEO. Our custom builds routinely hit 98 to 100. We test Core Web Vitals during QA before launch. You review verified audit scores before final sign-off.',
  },
  {
    category: 'technical',
    question: 'Will my website work on mobile?',
    answer:
      'Every site is engineered mobile-first. We design smartphone layouts before desktop views. We test on physical iOS and Android hardware across diverse screen sizes. We validate tap targets, font scales, and form inputs against strict mobile UX guidelines.',
  },
  {
    category: 'technical',
    question: 'Can I update my website content without a developer?',
    answer:
      'Yes. Every build includes intuitive content editing. WordPress and Shopify clients use native admin dashboards. Next.js clients receive a headless CMS like Sanity or Contentful. We provide a custom video walkthrough showing your staff how to edit pages.',
  },

  /* ── SEO & Visibility ── */
  {
    category: 'seo',
    question: 'Will my website rank on Google?',
    answer:
      'Every site includes full technical SEO out of the box. We implement semantic headings, optimized metadata, canonical URLs, and structured schema. We also configure XML sitemaps, robots.txt, and Core Web Vitals optimization. Keyword strategy and content expansion are available as dedicated growth add-ons.',
  },
  {
    category: 'seo',
    question: 'Will a redesign hurt my existing Google rankings?',
    answer:
      'No, when handled properly search rankings remain protected. We map existing high-performing URLs before redesigning. We establish 301 redirects for any altered paths. Most clients experience ranking gains because page speed and Core Web Vitals improve significantly.',
  },

  /* ── Trust & Results ── */
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US web agency?',
    answer:
      'We differ on three key measures. First is pricing: fixed-price contracts with no unexpected invoices. Second is speed: 7-day launch on standard sites, compared to 8–12 weeks at traditional firms. Third is ownership: you own the code from day one. We bring over 500 completed client projects across the US and international markets.',
  },
  {
    category: 'trust',
    question: 'Do you have examples of websites you\'ve built?',
    answer:
      'Yes, view our live work at factoryjet.com/portfolio. Our portfolio features B2B corporate sites, local service sites, and e-commerce stores. On our discovery call, we share case studies closely aligned with your industry.',
  },
  {
    category: 'technical',
    question: 'Do you build websites with AI features, AI chatbots, or AI-powered functionality?',
    answer:
      'Yes, AI capabilities are now standard elements of modern sites. We integrate OpenAI and Anthropic chatbots trained on your internal documentation. We also build automated lead-routing forms and AEO-optimized content modules. AI features are available across Next.js, WordPress, and Shopify stacks with upfront pricing.',
  },
  {
    category: 'seo',
    question: 'How do you optimize a website for Google and AI search (AEO)?',
    answer:
      'We build two distinct search layers: standard technical SEO and Answer Engine Optimization (AEO). Technical SEO ensures fast indexing, Core Web Vitals compliance, and schema markup. AEO structures content to be cited directly by ChatGPT, Perplexity, and Google AI Overviews. This positions your brand prominently in AI-generated answers.',
  },
  {
    category: 'process',
    question: 'Can you build a website with booking, scheduling, payment, or intake form capabilities?',
    answer:
      'Yes, interactive functionality is built into our core workflows. We integrate Calendly, Acuity, or custom booking schedulers. We connect intake forms to CRMs like HubSpot and Salesforce. We also embed secure Stripe payment checkout for client billing and digital deposits.',
  },
  {
    category: 'trust',
    question: 'Does FactoryJet offer website maintenance and ongoing support after launch?',
    answer:
      'Yes, every site includes 30 days of post-launch technical support. For ongoing needs, we provide monthly maintenance retainers. Retainers cover security updates, automated backups, uptime checks, and monthly developer hours. Clients receive dedicated support from the original build team.',
  },

  // ── Money-query coverage, added 2026-06-11 ──
  {
    category: 'trust',
    question: 'Who is the best web design agency in USA?',
    answer:
      'For small and mid-market firms, FactoryJet provides senior engineering, fixed pricing, and verified 95+ Lighthouse scores. The best agency for your business depends on operational fit. We recommend evaluating three criteria: upfront fixed quotes, live audit scores, and unencumbered code ownership.',
  },
  {
    category: 'trust',
    question: 'What are the top 10 web design companies in USA?',
    answer:
      'Many agency directories feature paid promotional placements. We advise evaluating agencies using measurable metrics rather than directory rankings. FactoryJet competes on clear criteria: transparent pricing, verified performance, and rapid 7-day delivery for standard sites.',
  },
  {
    category: 'pricing',
    question: 'How much does website design cost in USA?',
    answer:
      'Web design costs in the US vary by scope and platform. Freelancers and agencies charge varying rates based on customization. FactoryJet operates with transparent, fixed pricing agreed upon before work begins. Schedule a discovery call to receive a comprehensive quote with no surprise fees.',
  },
  {
    category: 'process',
    question: 'Can I really get a website in 7 days?',
    answer:
      'Yes. Our 7-day turnaround applies to custom sites up to 5 pages. We work from an organized brief on day one, deliver Figma mockups by day two, and launch inside seven business days. This speed relies on focused engineer collaboration and rapid client feedback.',
  },
  {
    category: 'trust',
    question: 'Which agency should I hire to build my website?',
    answer:
      'Hire based on verifiable evidence. We recommend shortlisting three agencies. Require each firm to provide fixed pricing upfront, verified Lighthouse audit results, and reachable client references. FactoryJet provides all three upfront before any contract is signed.',
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

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function WebDesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id="web-design-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="web-design-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="web-design-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="web-design-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="speakable-schema-web-design-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://factoryjet.com/services/web-design#webpage",
          "dateModified": "2026-08-04",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'Web Design', href: '/services/web-design' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book an Audit', modal: true, region: 'us' }}
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_web_design_hero" />}
          eyebrow="WEB DESIGN · USA"
          headline="A Website That Converts, Launched in 7 Days"
          lead="Most US small businesses are losing customers to slow, outdated websites. FactoryJet builds custom, high-performance websites in Next.js, WordPress, and Shopify, designed in Figma, built to Lighthouse 95+, and delivered fixed-price with full code ownership at handoff."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ websites delivered',
            'Fixed-price, quoted upfront',
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
                Load fast. Look sharp. Turn visitors into customers.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Load in under 2 seconds on mobile, or 53% of visitors leave before it finishes',
                  'Score 95+ on Lighthouse: Google ranks fast, accessible, technically clean sites higher',
                  'Convert at 2-4% or better: most template sites convert below 1%',
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
                  FactoryJet sites average Lighthouse 98-100 on delivery. Verified.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 1b. SERVICE HERO IMAGE BAND ─────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/web-design-hero-band.webp"
          imageAlt="FactoryJet web design team working on a custom website for a US small business"
          stats={[
            { value: '500+', label: 'Websites Delivered' },
            { value: '7 Days', label: 'Delivery Guarantee' },
            { value: 'Fixed Price', label: 'Confirmed Upfront, No Surprises' },
            { value: '10+ Yrs', label: 'Web Design Expertise' },
          ]}
        />

        {/* ── 2. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites delivered. 12 years of building. US businesses trust the results."
        />

        {/* ── 3. WHAT MAKES A GREAT WEBSITE ───────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN EXPLAINED"
          headline="What a Great Business Website Actually Does"
          lead="Most small business websites look okay and perform terribly. Yours should do the opposite: fast enough to rank, clear enough to convert, and simple enough for your team to manage."
          body={
            <>
              {/* Performance chip strip, aria-hidden decorative */}
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Lighthouse 95+',
                  'Core Web Vitals green',
                  'Mobile-first',
                  'Schema markup',
                  'Sub-2s load time',
                  'Zero cookie bloat',
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
                A business website has one job: turn the right visitors into paying customers. That means it needs to load fast enough that people don&apos;t leave before they see it, look professional enough that they trust you, and make the next step obvious enough that they take it. Most template-built sites fail on all three counts.
              </p>

              {/* 3-col mini stats, aria-hidden decorative */}
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

              {/* Pull-quote, aria-hidden decorative */}
              <div className="border-l-2 pl-5 py-1" style={{ borderLeftColor: '#F05A28' }} aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Performance and design aren&apos;t in tension. The best websites are both.
                </p>
              </div>
              <p>
                FactoryJet approaches web design the way modern SaaS companies do: Figma-first design, then engineering in Next.js or WordPress, with Lighthouse 95+ as a non-negotiable target. We don&apos;t use page builders, visual editors, or bloated themes. The result is a site that loads fast, ranks well, and looks intentional, because it was designed for your specific business, not adapted from someone else&apos;s template.
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
              {/* Footer */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
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
              body: '53% of mobile users abandon a site that takes more than 3 seconds to load. Most template-built WordPress and Squarespace sites load in 4-6 seconds on mobile 4G. That\'s not a minor inconvenience, it\'s more than half your paid ad traffic gone before they see a single word.',
            },
            {
              icon: '📉',
              title: 'Template sites convert at under 1%',
              body: 'The average small business website built on a theme or template converts at 0.5-0.8%. A conversion-optimized custom site converts at 2-4%. On 1,000 monthly visitors at a $500 average sale, that\'s the difference between $5,000/month and $20,000/month in revenue, from the same traffic.',
            },
            {
              icon: '💸',
              title: 'Traditional agencies charge several times more for the same work',
              body: 'A mid-tier US web agency bills a multiple of what we charge per page before revisions, project management fees, and hosting markup. FactoryJet delivers the same Figma-first design, Next.js engineering, and Lighthouse 95+ performance: fixed-price, milestone-paid, with full code ownership at handoff. 12 years serving US clients means we scope accurately on the first call.',
            },
          ]}
        />

        {/* ── 5. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six Types of Websites We Build for US Businesses"
          lead="Not every business needs the same thing. We match the right platform and design approach to your specific goals, whether you need a lead-gen site, an e-commerce store, or a complete web app."
          sectors={WEB_DESIGN_TYPES}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Brief to Live Website in 5 Stages"
          lead="A clear, predictable process where you approve the design before we build, so there are no surprises and no blown timelines."
          stages={WEB_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 BUSINESS DAYS TO LAUNCH · FIGMA APPROVAL BEFORE BUILD BEGINS"
        />

        {/* ── 7. PERFORMANCE STATS ─────────────────────────────────────────── */}
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
                {WEB_STATS.map((stat) => (
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
                        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-3 font-fj-body font-semibold text-fj-ink"
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
                <img
                  src="/images/services/web-design-stats-photo.webp"
                  alt="FactoryJet team reviewing a newly launched website with a client"
                  width={600}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FULL TECH STACK ───────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR TECH STACK"
          headline="Modern Web Technologies: Zero Black-Box Builders"
          lead="We build with the same tools that power Stripe, Vercel, and Linear, not page builders, visual editors, or bloated themes. Your site loads fast because the code is clean."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Next.js', 'React', 'TypeScript', 'WordPress', 'Shopify', 'Tailwind CSS', 'Figma', 'Sanity CMS'].map((tech) => (
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
                <strong className="font-semibold text-fj-ink">Next.js & React</strong>: Our default for performance-critical business sites and web applications. Static generation, edge caching, and server components mean your pages serve in milliseconds from Cloudflare&apos;s global network.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WordPress (Headless or Traditional)</strong>, When your team needs a full CMS with editorial workflows, we build on WordPress with custom block themes or a headless setup connected to Next.js on the frontend.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Shopify</strong>: For e-commerce, Shopify is our default platform. We build custom Liquid themes or headless Shopify storefronts using the Storefront API, depending on your catalog complexity and performance requirements.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Figma</strong>: Every design starts in Figma. You get a shareable design file, a component library, and desktop + mobile mockups for every page before we open a code editor.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Tailwind CSS + TypeScript</strong>: We write typed, maintainable frontend code. Future engineers, yours or ours, can extend the codebase without archaeology.
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
                  { category: 'E-Commerce', tools: 'Shopify, Shopify Headless' },
                  { category: 'Design', tools: 'Figma, component libraries' },
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

        {/* ── 9. US MARKET CONTEXT ─────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US MARKET"
          headline="US Small Businesses Can't Afford a Bad Website in 2025"
          leadParagraphs={[
            "94% of first impressions are design-related. Your potential customers decide whether to trust you in 0.05 seconds, before they read a single word. If your website looks outdated, loads slowly, or doesn't work on mobile, that impression doesn't get a second chance.",
            "FactoryJet has been building websites for US small businesses. We've served companies in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and across the country. We understand what a 10-person service business needs from a website, not enterprise-level complexity, but professional design, fast performance, and a clear path to contact.",
            "The businesses that invest in a well-built website don't just look better, they convert better, rank better, and spend less on paid traffic to get the same results. A professionally built website that converts at 3% outperforms a cheap template site converting at 0.5% on almost any traffic level.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }} aria-hidden="true">
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  Your website is your hardest-working sales rep, and it&apos;s on 24/7.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {['Austin TX', 'Miami FL', 'Denver CO', 'Nashville TN', 'Portland OR', 'Charlotte NC', 'Raleigh NC', 'Tampa FL'].map((city) => (
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
          stats={US_WEB_STATS}
        />

        {/* ── 9b. INTERACTIVE VALUE CALCULATOR ───────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <WebDesignValueCalculator city="USA" region="us" />
          </div>
        </section>

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Traditional Agency vs. Freelancer vs. Templates"
          lead="Not all web design options are the same. Here's what the decision looks like when you compare the real tradeoffs side by side."
          pullQuote={{
            stat: 'Fixed price',
            caption: 'quoted upfront. Same Figma design, Next.js engineering, and Lighthouse 95+ quality as a traditional agency project that costs several times more.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Timelines reflect typical US market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers, quoted upfront after a free discovery call."
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their site"
        />

        {/* ── 13. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price Web Design"
            lead="No hourly billing. No scope surprises. Every tier includes a fixed scope, fixed price, and a delivery timeline we stand behind."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Hosting is billed directly by your provider (Cloudflare, Vercel, or WP Engine), not marked up by FactoryJet. Custom scopes quoted after a free discovery call. You own all code, design files, and hosting credentials on launch day."
          />
        </div>

        {/* ── 13. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a template shop with a custom logo. That's the point."
          lead="FactoryJet has built 500+ production websites for real businesses across the US, UK, UAE and India. Every site starts in Figma, gets built with clean code, and ships with a Lighthouse audit you can verify yourself."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery | not 12 weeks',
              body: 'traditional agencies take 6-12 weeks because they have account managers, project coordinators, and approval layers between your brief and the keyboard. We don\'t. When you brief us, a designer and an engineer work on it. That\'s why we ship in 7 days.',
            },
            {
              icon: '🎯',
              title: 'Figma-first. Build nothing until you approve the design.',
              body: 'We present full desktop and mobile mockups before writing a line of code. If you don\'t love the direction, we revise, not after launch. This eliminates the expensive rework that burns both time and budget at agencies that build first and ask later.',
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
          lead="The questions we answer on every discovery call, answered here, straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Cities We Serve, internal linking for SEO */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Serving the US</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Web Design Services by City</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { city: 'Austin, TX', href: '/austin/web-design' },
                { city: 'Miami, FL', href: '/miami/web-design' },
                { city: 'Denver, CO', href: '/denver/web-design' },
                { city: 'Nashville, TN', href: '/nashville/web-design' },
                { city: 'Portland, OR', href: '/portland/web-design' },
                { city: 'Charlotte, NC', href: '/charlotte/web-design' },
                { city: 'Raleigh, NC', href: '/raleigh/web-design' },
                { city: 'Tampa, FL', href: '/tampa/web-design' },
                { city: 'New York, NY', href: '/new-york/web-design' },
                { city: 'Cleveland, OH', href: '/cleveland/web-design' },
              ].map(({ city, href }) => (
                <Link key={href} href={href} className="px-4 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/nyc-b2b-corporate-web-design-guide-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">NYC B2B corporate web design buyer guide for 2026</p>
              </Link>
              <Link href="/blog/custom-web-development-vs-wordpress-us-small-business-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">Custom web development vs WordPress for US small businesses</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START"
            headline="Book a Website Audit, No Obligation"
            sub="In 30 minutes, we'll audit your current site, show you exactly what's hurting performance and conversions, and give you a fixed price to fix it. No pitch. No pressure. Just an honest assessment from engineers who build for a living."
            primaryCta={{ label: 'Book Your Free Audit', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Lighthouse 95+ guaranteed. Full code ownership. 7-day delivery. Fixed price."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
