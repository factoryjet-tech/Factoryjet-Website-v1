import type { Metadata } from 'next';
import Script from 'next/script';
import { pricingAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
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

export const metadata: Metadata = {
  title: 'Website Design Cost & Pricing | How Much Does a Website Cost? | FactoryJet',
  description:
    'Transparent website design pricing for US small businesses. 5-page site from $1,499. Shopify stores from $2,999. Fixed price, 7-day delivery, 60–70% below US agency rates. Get a free quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Website Design Cost & Pricing | FactoryJet',
    description:
      'How much does a website cost? FactoryJet transparent pricing: 5-page site $1,499, 15-page site $3,500, Shopify from $2,999. Fixed price. 7-day delivery.',
    url: 'https://factoryjet.com/us/pricing',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Website Design Pricing USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design Cost & Pricing | FactoryJet',
    description: 'Transparent website pricing for US businesses. 5-page site from $1,499. Fixed price, 7-day delivery.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/pricing',
    languages: pricingAlternates,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
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
      name: 'How much does a website cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional small business website costs between $1,499 and $7,500 depending on scope, at FactoryJet. A basic 5-page site starts at $1,499. A growth-focused 15-page site with blog, lead capture, and CRM integration runs $3,500. Custom web applications start at $7,500. US agencies typically charge $8,000–$35,000 for comparable work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet so much cheaper than a US web design agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's engineering team is India-based, with 25+ years of experience serving US clients. We do not have a downtown office, account managers, or a sales department. Those costs are exactly what US agencies pass through to clients — often doubling or tripling the actual development cost. You get the same quality, the same technology stack, and the same 7-day delivery guarantee.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a website design cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet website pricing includes custom design, development, mobile responsiveness, on-page SEO setup, Google Analytics + Search Console setup, contact forms, speed optimization, and 30 days of post-launch support. E-commerce packages add product catalog setup, Shopify or WooCommerce configuration, payment gateway integration, and shipping/tax setup.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  offers: [
    { '@type': 'Offer', name: 'Starter Website', price: '1499', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Growth Website', price: '3500', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'E-Commerce Store', price: '2999', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://factoryjet.com/us/pricing' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Free Consultation & Quote',
    description: 'Tell us what you need. We scope the project, confirm page count, and send a fixed quote within 24 hours. No surprise change orders later.',
  },
  {
    number: '02',
    title: 'Design Review',
    description: 'We build a full homepage design first. You review, request changes, and approve before we write a single line of code.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Approved design goes straight to development. We build on Next.js or Shopify and wire in any integrations — CRM, forms, booking tools, payments.',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description: 'We apply your copy, set up meta titles, descriptions, schema markup, Google Search Console, and Analytics. Your site is findable from day one.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'Site goes live on your domain. You get a walkthrough recording, admin access, and 30 days of post-launch support. Most clients are live by day 7.',
  },
];

const PRICING_SECTORS = [
  {
    name: 'Page Count',
    description: 'Each page needs a design, content, and SEO structure. A 5-page site is fundamentally different from a 20-page site — scope your needs accurately.',
    example: 'Most SMBs start with 5–10 pages and expand over 6–12 months.',
  },
  {
    name: 'Custom Functionality',
    description: 'Booking systems, member portals, configurators, and custom calculators require engineering beyond design. Always quoted separately, always fixed price.',
    example: 'A simple booking integration adds $500–$1,500 to a project.',
  },
  {
    name: 'E-Commerce Complexity',
    description: 'Product count, variant logic, subscription billing, and multi-currency add meaningful development time to e-commerce builds.',
    example: 'A 50-product Shopify store vs. a 500-product store is a 2–3x scope difference.',
  },
  {
    name: 'Integrations',
    description: 'CRM syncs, email platform connections, booking tools, and payment gateways each require configuration. Simple takes hours; complex takes days.',
    example: 'Shopify Payments: 2 hours. Custom Salesforce sync: 2 weeks.',
  },
  {
    name: 'Copywriting',
    description: 'Content that converts requires a professional writer. Add $75–$150 per page if you need copy — or provide your own and we apply it.',
    example: 'A 10-page site with full copywriting adds $750–$1,500 to the total.',
  },
  {
    name: 'Rush Timeline',
    description: 'Rush projects under 5 business days add 20% to the base price. Standard 7-day delivery is included at no premium in all packages.',
    example: '3-day delivery on a 5-page site: base price + $300–$400.',
  },
];

const SERVICES_SECTORS = [
  {
    name: 'Website Redesign',
    description: 'Modernize your existing site with faster load times, better SEO, and a design that converts. Starting at $3,500.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/website-redesign',
  },
  {
    name: 'WordPress Development',
    description: 'Custom WordPress themes — no Elementor bloat, no performance ceiling. Starting at $1,999.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/wordpress-development',
  },
  {
    name: 'Web Application Development',
    description: 'Custom web apps — booking systems, member portals, SaaS MVPs. Starting at $7,500.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/web-application-development',
  },
  {
    name: 'AI Automation',
    description: 'Connect your tools. Eliminate manual workflows. Save 20+ hours per week. Starting at $2,500.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/ai-automation',
  },
  {
    name: 'Law Firm Website Design',
    description: 'Practice-area-specific landing pages built to rank and convert legal clients. Starting at $2,499.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/law-firm-website-design',
  },
  {
    name: 'Real Estate Website Design',
    description: 'IDX integration, neighborhood pages, and agent branding that drives listing inquiries. Starting at $2,499.',
    linkLabel: 'Learn more',
    linkHref: '/us/services/real-estate-website-design',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Web Agency' },
  { label: 'Freelancer' },
  { label: 'Wix / Squarespace' },
] as const;

const COMPARISON_ROWS = [
  { feature: 'Starting Price', values: ['$1,499 (one-time)', '$8,000+', '$1,500–$5,000', '$16–$49/mo forever'] },
  {
    feature: 'Fixed-Price Guarantee',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="diy" kind="yes" />],
  },
  {
    feature: '7-Day Delivery',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="no" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="diy" kind="yes" />],
  },
  {
    feature: 'Custom Design (No Templates)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Lighthouse 90+ Performance',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="partial" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'On-Page SEO Setup',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'You Own the Website',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="yes" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: '30-Day Post-Launch Support',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Dedicated Project Manager',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="yes" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: '500+ US Clients Served',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="us" kind="partial" />, <CompareIcon key="fl" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
] as const;

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $1,499',
    description: 'Perfect for service businesses, consultants, and local shops that need a professional web presence fast.',
    features: [
      'Up to 5 pages — custom design, no templates',
      'Mobile-responsive + Core Web Vitals optimized',
      'On-page SEO setup (meta, schema, Search Console)',
      'Contact form + Google Maps',
      'Google Analytics setup',
      '7-day delivery',
      '30 days post-launch support',
    ],
    cta: { label: 'Get Started', href: '/contact' },
  },
  {
    name: 'Growth',
    priceRange: 'From $3,500',
    description: 'For growing businesses that need a full content strategy, blog, and lead generation infrastructure.',
    features: [
      'Up to 15 pages + blog / resource center',
      'CRM integration (HubSpot, Salesforce)',
      'Email marketing integration',
      'Lead capture forms + automations',
      'Schema markup for Google rich results',
      'Booking / scheduling integration',
      '14-day delivery',
      '30 days post-launch support',
    ],
    cta: { label: 'Get Started', href: '/contact' },
    popular: true,
  },
  {
    name: 'E-Commerce',
    priceRange: 'From $2,999',
    description: 'Shopify or WooCommerce store with everything you need to sell — custom design, products, payments, and shipping.',
    features: [
      'Shopify or WooCommerce — custom design',
      'Up to 50 products configured',
      'Collections + navigation setup',
      'Payment gateway (Shopify / Stripe / PayPal)',
      'Shipping + tax configuration',
      'Email notifications + abandoned cart',
      '7-day delivery',
      '30 days post-launch support',
    ],
    cta: { label: 'Get Started', href: '/contact' },
  },
] as const;

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Website Cost Basics' },
  { key: 'ecommerce', label: 'E-Commerce Cost' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'vs-options', label: 'FactoryJet vs. Other Options' },
  { key: 'ongoing', label: 'Ongoing Costs' },
];

const FAQ_ITEMS = [
  /* ── Cost Basics ── */
  {
    category: 'cost',
    question: 'How much does a website cost for a small business?',
    answer: "A professional small business website from FactoryJet starts at $1,499 for a 5-page site and goes up to $7,500 for a 15-page site with advanced SEO, blog, and CRM integrations. US agencies typically charge $8,000–$35,000 for the same scope. The cost is driven by three things: page count, custom functionality, and integrations. We'll give you a fixed quote within 24 hours — no estimate ranges, no billable hours.",
  },
  {
    category: 'cost',
    question: 'What is included in the website price?',
    answer: 'Every FactoryJet package includes: custom design (no templates), mobile responsiveness, on-page SEO setup (meta titles, descriptions, schema markup), Google Analytics + Search Console setup, contact forms, Core Web Vitals optimization, and 30 days of post-launch support. E-commerce packages add product catalog setup, payment gateway integration, and shipping/tax setup.',
  },
  {
    category: 'cost',
    question: 'Why is FactoryJet cheaper than US web design agencies?',
    answer: "FactoryJet's engineering team is India-based, with 25+ years of experience serving US clients. US agencies charge $150–$250/hour because they're paying for downtown office leases, account managers, and a sales team — none of which make your website better. Our fixed packages give you the same tech stack (Next.js, Shopify, React), the same design quality, and the same SEO rigor at 60–70% lower cost.",
  },
  {
    category: 'cost',
    question: 'Do you charge hourly or fixed price?',
    answer: "Fixed price — always. Every project starts with a scoped quote that covers everything in writing. We don't do time-and-materials billing, we don't send change orders for scope you already described, and we don't charge for revision rounds within the agreed scope. If you add net-new pages or features after the project starts, we quote those separately before touching them. No surprises.",
  },
  /* ── E-Commerce ── */
  {
    category: 'ecommerce',
    question: 'How much does a Shopify website cost?',
    answer: "A custom Shopify store from FactoryJet starts at $2,999. That covers custom theme development (no paid templates), up to 50 products configured, collections/navigation setup, payment gateway integration, shipping rates, email notification setup, and mobile optimization. Shopify monthly fees ($39–$399/month) are paid directly to Shopify. US agencies typically charge $12,000–$40,000 for comparable Shopify work.",
  },
  {
    category: 'ecommerce',
    question: 'How much does a WooCommerce website cost?',
    answer: 'WooCommerce development starts at $1,999 for a custom WordPress + WooCommerce site with up to 25 products. WooCommerce itself is free, but hosting costs $30–$100/month. Custom WooCommerce builds typically run $1,999–$6,000 at FactoryJet versus $10,000–$30,000 at US agencies. WooCommerce is better for content-heavy businesses that also sell; Shopify is better for pure e-commerce with higher product volume.',
  },
  {
    category: 'ecommerce',
    question: 'What e-commerce features are included in the E-Commerce package?',
    answer: 'The $2,999 E-Commerce package includes: custom store design, product catalog setup (up to 50 SKUs), collections and navigation, payment gateway integration, shipping rate configuration, tax setup, email receipts and order notifications, abandoned cart setup, and mobile optimization.',
  },
  {
    category: 'ecommerce',
    question: 'Can you migrate my existing store to Shopify?',
    answer: "Yes — Shopify migrations are common. We migrate product data, customer records, order history, and SEO URLs from WooCommerce, BigCommerce, Magento, or custom platforms. A typical WooCommerce to Shopify migration with up to 500 products runs $2,500–$4,000 and takes 7–14 days. We set up 301 redirects so you don't lose your existing search rankings.",
  },
  /* ── Process ── */
  {
    category: 'process',
    question: 'How long does it take to build a website?',
    answer: "FactoryJet delivers 5-page sites in 7 business days — that's our guarantee. A 15-page Growth site with blog and integrations typically takes 14–21 days. Custom web applications run 4–12 weeks depending on feature complexity. Timeline starts from design approval, not from the day you sign.",
  },
  {
    category: 'process',
    question: 'What do I need to provide to get started?',
    answer: "To kick off your project, we need: your brand assets (logo, brand colors, fonts), example websites you like the look of, your content (or tell us you want copywriting added on), and access to your domain registrar. We handle hosting setup, DNS, SSL certificates, and technical configuration.",
  },
  {
    category: 'process',
    question: 'What happens after the website launches?',
    answer: 'Every project includes 30 days of post-launch support — bug fixes, content updates, and any issues that come up after go-live. After 30 days, you can sign up for a monthly maintenance plan (starting at $149/month). Or manage it yourself — we provide full admin access and a walkthrough recording.',
  },
  {
    category: 'process',
    question: 'Do you offer payment plans?',
    answer: "Projects under $3,000 are typically 50% upfront and 50% on delivery. Larger projects use a three-payment structure: 40% to start, 30% at design approval, and 30% on launch. We accept ACH bank transfers, credit cards, and wire transfers. No annual contracts — each project is scoped and paid for independently.",
  },
  /* ── vs Options ── */
  {
    category: 'vs-options',
    question: 'How does FactoryJet compare to Wix or Squarespace?',
    answer: "Wix and Squarespace cost $16–$49/month and let you build on a template, on their platform, locked to their infrastructure. FactoryJet builds custom sites on Next.js or WordPress that you own outright, with no monthly platform fee and no performance ceiling. Wix/Squarespace sites often score 40–65 on Google's Lighthouse test. FactoryJet sites consistently hit 90+.",
  },
  {
    category: 'vs-options',
    question: 'How is FactoryJet different from hiring a freelancer?',
    answer: "A freelancer gives you one person's availability and one person's skill set — no backup if they go dark. FactoryJet is a team: designers, developers, SEO specialists, and QA, working under a project manager with a fixed deadline. You get a design review before development starts, a defined revision process, and 30-day post-launch support.",
  },
  {
    category: 'vs-options',
    question: 'What is the difference between a website redesign and a new website?',
    answer: "A new website starts from scratch — new design, new structure, new content strategy. A redesign keeps your existing domain, URL structure, and typically most of your content, but replaces the visual design, improves page speed, and restructures your navigation and CTAs. Redesigns are usually 20–30% cheaper than new builds of the same scope.",
  },
  {
    category: 'vs-options',
    question: 'Do you work with businesses outside the US?',
    answer: "FactoryJet is built for US SMBs — our pricing is in USD, our delivery timelines are in US business days, and our SEO work targets US search audiences. We do take clients from Canada, the UK, and Australia, but our core expertise is the US market.",
  },
  /* ── Ongoing ── */
  {
    category: 'ongoing',
    question: 'What does website hosting cost after launch?',
    answer: "For Next.js sites (our default), we recommend Cloudflare Pages — it's free for most small business traffic. For WordPress sites, managed hosting runs $30–$80/month. For Shopify, you pay Shopify directly at $39–$105/month. We set up your hosting during the build — the cost goes on your card directly so you own the relationship.",
  },
  {
    category: 'ongoing',
    question: 'What is the ongoing website maintenance cost?',
    answer: "FactoryJet's maintenance plans start at $149/month and cover: WordPress/plugin updates, security monitoring, uptime monitoring, monthly speed checks, and up to 1 hour of content changes. The $299/month plan adds priority support, 3 hours of content updates, and monthly performance reports.",
  },
  {
    category: 'ongoing',
    question: 'Do I need to pay for an SSL certificate?',
    answer: "No. SSL certificates are free and included in all modern hosting setups. We configure SSL during the build. If you're on Cloudflare Pages, SSL is automatic and free. If you're on managed WordPress hosting, SSL is included in your hosting plan.",
  },
  {
    category: 'ongoing',
    question: 'What are the hidden costs of building a website?',
    answer: "The most common surprises: (1) Domain name renewal — $10–$20/year. (2) Hosting — varies by platform. (3) Premium plugins — $50–$200/year for advanced functionality. (4) Copywriting — $75–$150 per page if you don't provide content. (5) Photography — $500–$2,000 for a professional shoot. We itemize all of these before you sign.",
  },
];

const MARKET_STATS = [
  {
    value: '60–70%',
    label: 'below comparable US web agency rates — same quality, India-based cost structure',
    sourceUrl: 'https://factoryjet.com/us/pricing',
    sourceLabel: 'FactoryJet Pricing',
  },
  {
    value: '500+',
    label: 'US businesses served since 1999 — SMBs, DTC brands, professional service firms',
    sourceUrl: 'https://factoryjet.com',
    sourceLabel: 'FactoryJet',
  },
  {
    value: '7 Days',
    label: 'delivery guarantee for sites up to 5 pages — live site or full refund',
    sourceUrl: 'https://factoryjet.com/us/pricing',
    sourceLabel: 'FactoryJet',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        eyebrow="WEBSITE DESIGN COST — 2025"
        headline="How Much Does a Website Cost? Here's the Actual Number."
        lead="US agencies charge $8,000–$35,000 for a business website. FactoryJet builds the same quality site for $1,499–$7,500 — fixed price, 7-day delivery, no hidden fees. Here's the breakdown."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See All Packages', href: '#pricing' }}
        trustItems={['500+ US businesses served', '7-day delivery guarantee', '60–70% below US agency rates']}
        rightSlot={
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-white/50 mb-4">2025 Price Comparison</p>
            <div className="grid grid-cols-3 gap-2 text-xs font-fj-body mb-2">
              <span className="text-white/40">Service</span>
              <span className="text-fj-jet-blue font-semibold text-center">FactoryJet</span>
              <span className="text-white/40 text-center">US Agency</span>
            </div>
            {[
              ['5-Page Site', '$1,499', '$8K–$15K'],
              ['15-Page Site', '$3,500', '$15K–$35K'],
              ['Shopify Store', '$2,999', '$12K–$40K'],
              ['WordPress', '$1,999', '$10K–$30K'],
              ['Redesign', '$3,500', '$12K–$30K'],
              ['Web App MVP', '$7,500', '$30K–$80K'],
            ].map(([service, fj, us]) => (
              <div key={service} className="grid grid-cols-3 gap-2 py-2 border-t border-white/5 items-center">
                <span className="text-white/70 text-xs">{service}</span>
                <span className="text-green-400 font-semibold text-sm text-center">{fj}</span>
                <span className="text-white/40 text-xs text-center line-through">{us}</span>
              </div>
            ))}
            <p className="text-xs text-white/30 pt-2 font-fj-body">Fixed price. No hourly billing. No surprise invoices.</p>
          </div>
        }
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        eyebrow="TRANSPARENT PRICING"
        headline="Fixed price. 7-day delivery. 500+ US businesses served."
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHAT DRIVES WEBSITE COST"
        headline="Five factors determine what your website should actually cost"
        lead="Most website pricing quotes feel like guesswork — 'it depends' is not an answer you can budget around. Here's what actually moves the number, so you can scope your project before you call anyone."
        body={
          <>
            <p>
              Page count is the biggest lever. A 5-page site and a 20-page site are not five times more complex — but they are meaningfully different in design time, content work, and SEO structure. That&apos;s why our packages are scoped by page count.
            </p>
            <p>
              Custom functionality — booking systems, member portals, configurators, subscription billing — adds engineering time beyond the design cost. These are quoted separately and always fixed-price.
            </p>
            <p>
              Integrations (CRM, email platforms, payment gateways, booking tools) require configuration time. Shopify Payments takes 2 hours. A custom Salesforce sync takes 2 weeks. We scope these explicitly before the project starts, so there are no surprises mid-build.
            </p>
          </>
        }
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-4">All Services — Starting Prices</p>
            {[
              { label: '5-Page Business Site', price: '$1,499', note: '7-day delivery' },
              { label: '15-Page Growth Site', price: '$3,500', note: 'Blog + CRM + SEO' },
              { label: 'Shopify / WooCommerce', price: '$2,999', note: 'Up to 50 products' },
              { label: 'WordPress Development', price: '$1,999', note: 'Custom theme, no builders' },
              { label: 'Website Redesign', price: '$3,500', note: '10+ pages, speed + SEO' },
              { label: 'Web Application MVP', price: '$7,500', note: 'Custom functionality' },
              { label: 'AI Automation', price: '$2,500', note: 'Single workflow' },
            ].map(({ label, price, note }) => (
              <div key={label} className="flex items-center justify-between py-2 border-t border-fj-charcoal/10 first:border-0">
                <div>
                  <p className="text-sm font-semibold font-fj-body text-fj-ink">{label}</p>
                  <p className="text-xs text-fj-ink/50 font-fj-body">{note}</p>
                </div>
                <span className="text-fj-jet-blue font-bold font-fj-display text-base">{price}</span>
              </div>
            ))}
            <a href="/contact" className="block mt-4 text-center text-sm font-semibold text-fj-jet-blue font-fj-body hover:underline">
              Get a free quote →
            </a>
          </div>
        }
      />

      {/* ── 5. STRATEGIC DARK SECTION ── */}
      <StrategicDarkSection
        eyebrow="THE REAL REASON US AGENCIES COST SO MUCH"
        headline="You're not paying for a better website. You're paying for their office."
        lead="The average US web design agency bills $150–$250 per hour. Of that, maybe $60–$80 goes to the developer actually building your site. The rest covers downtown rent, a project manager who sends weekly update emails, an account executive who sold you the deal, and a business development team working on their next client. FactoryJet has none of that. Our engineering is India-based, 25+ years experienced, and our fixed-price model means we win when you launch on time — not when the project drags."
        pillars={[
          {
            title: 'No account manager markup',
            body: 'US agencies layer account managers, project managers, and client success reps between you and the engineer. Each layer adds 15–25% to your invoice. At FactoryJet, your project manager is the senior engineer — one layer, no markup.',
          },
          {
            title: 'No downtown office overhead',
            body: 'A San Francisco or New York design agency needs $15,000–$40,000/month in rent to exist. That cost is in your invoice whether you know it or not. Our team works from India — world-class engineering, zero real estate overhead.',
          },
          {
            title: 'Fixed price means we absorb the risk',
            body: "With hourly billing, every meeting, every revision, every back-and-forth email is on your tab. With our fixed-price model, we absorb the risk of underestimating. If it takes us longer, that's our problem — not yours.",
          },
        ]}
      />

      {/* ── 6. COST FACTORS ── */}
      <IndustriesGrid
        eyebrow="WHAT MOVES THE NUMBER"
        headline="Six factors that drive website design cost"
        lead="Understand these six variables and you can estimate your own project cost before talking to anyone."
        sectors={PRICING_SECTORS}
      />

      {/* ── 7. SERVICE JOURNEY ── */}
      <div id="process">
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Free Quote to Live Website: 5 Steps"
          lead="Every FactoryJet project follows the same five-stage process. You know exactly where you are at every point — no black-box development."
          stages={journeyStages}
          closingNote="5 STAGES · 7-DAY DELIVERY GUARANTEE · FREE QUOTE IN 24 HOURS"
        />
      </div>

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="SERVING US BUSINESSES"
        headline="Professional website design for US small businesses, starting from $1,499"
        leadParagraphs={[
          "FactoryJet works with small businesses across the United States. Whether you're a retail shop in Austin, a law firm in Miami, a DTC brand in Denver, or a service business in Charlotte — our process is built for US time zones, US audiences, and US search behavior.",
          "Our pricing is in USD, our delivery timelines run on US business days, and our SEO work targets US search audiences. Every package includes the same fixed price and 7-day delivery guarantee regardless of where your business is located.",
          "We've served 500+ US businesses since 1999 — from solo consultants to 50-person companies. The rate stays the same. The quality stays the same. The only variable is your scope.",
        ]}
        stats={MARKET_STATS}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. US Agency vs. Freelancer vs. DIY Builder"
        lead="Not all website options are equal. Here's what the decision looks like when you compare side by side — on price, quality, and what you're left with after launch."
        pullQuote={{ stat: '60–70%', caption: 'below US agency rates — same quality, India-based cost structure.' }}
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
        footer="Prices reflect typical US market ranges as of 2025. DIY platform monthly costs compound over time and include no ownership of the underlying site."
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="WEBSITE DESIGN PACKAGES"
          headline="Fixed-Price Website Packages: No Hourly Billing, No Surprises"
          lead="Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind. No discovery retainer. No surprise invoices."
          tiers={PRICING_TIERS}
          footnote="All prices in USD. Copywriting, custom photography, and premium plugin licenses are priced separately if needed — itemized before you sign."
        />
      </div>

      {/* ── 11. ALL SERVICES ── */}
      <IndustriesGrid
        eyebrow="ALL SERVICES"
        headline="Every service we offer, with transparent pricing"
        lead="FactoryJet builds websites, e-commerce stores, web applications, and AI automation systems. All fixed price. All delivered by the same team."
        sectors={SERVICES_SECTORS}
      />

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        eyebrow="CLIENT RESULTS"
        headline="What US business owners say about FactoryJet's pricing and quality."
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="PRICING FAQ"
        headline="Every question about website cost, answered honestly"
        lead="No jargon. No vendor-speak. Just clear answers to the questions every business owner asks before committing to a web project."
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        variant="dark"
        eyebrow="GET YOUR QUOTE"
        headline="Find out exactly what your website will cost, in 24 hours"
        sub="Tell us what you need. We'll send a fixed-price quote within one business day. No sales call required, no commitment to respond."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
        objectionHandler="Fixed price. 7-day delivery. 500+ US businesses served. Free quote in 24 hours."
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
