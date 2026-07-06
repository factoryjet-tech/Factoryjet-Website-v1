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

export const metadata: Metadata = {
  title: 'Real Estate Website Design — IDX Sites in 7 Days | FactoryJet',
  description:
    'IDX-integrated real estate websites that rank locally. Agent, team, and brokerage sites. Live in 7 days, fixed-price, code ownership at handoff.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Real Estate Website Design — IDX Sites in 7 Days | FactoryJet',
    description:
      'IDX-integrated real estate websites that rank locally. Agent, team, and brokerage sites. Live in 7 days, fixed-price, code ownership at handoff.',
    url: 'https://factoryjet.com/services/real-estate-website-design',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet — Real Estate Website Design USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Website Design — IDX Sites in 7 Days | FactoryJet',
    description: 'IDX-integrated real estate websites that rank locally. Agent, team, and brokerage sites. Live in 7 days, fixed-price, code ownership at handoff.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/real-estate-website-design',
    languages: usServiceAlternates['real-estate-website-design'],
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
      name: 'How much does a real estate website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's real estate websites are fixed-price and scoped to your build. The main drivers are the site type (individual agent, team, brokerage, or property management), page count, the number of neighborhood pages, IDX integration, and any portal features. Every project is quoted up front after a free discovery call, so you know the full cost before work starts — and it comes in well below what US real estate web agencies charge for comparable work.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is IDX and do I need it on my real estate website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "IDX (Internet Data Exchange) lets your website display live MLS listings — updated in near-real-time. If you're an active agent who wants buyers to search listings directly on your site, IDX is essential. We integrate with iHomefinder, Showcase IDX, and RETS-based connections. IDX integration is scoped into your fixed-price quote based on your provider.",
      },
    },
    {
      '@type': 'Question',
      name: "Why doesn't a Zillow Premier Agent profile replace a real estate website?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zillow Premier Agent gets your profile in front of buyers on Zillow — but you're paying for leads, not building an asset you own. A custom website builds your own search visibility: when someone searches 'real estate agent in [city]' or '[neighborhood] homes for sale,' your site appears. Your Zillow profile doesn't. Over time, a website that ranks organically generates leads for free.",
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Real Estate Website Design',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: { '@type': 'Country', name: 'United States' },
    
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Real Estate Website Design', item: 'https://factoryjet.com/services/real-estate-website-design' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Market Strategy',
    description: 'We map your market — target neighborhoods, buyer vs. seller focus, competitor sites, and the search terms your clients use. Your site is built around your specific geography, not a generic real estate template.',
  },
  {
    number: '02',
    title: 'Design — Agent Brand First',
    description: 'Real estate is a relationship business. Your site leads with your face, your track record, and your market expertise — not just listings. We design a homepage that builds trust before it shows a search bar.',
  },
  {
    number: '03',
    title: 'IDX Integration',
    description: 'We connect your IDX provider, configure search filters for your MLS, and style the listing display to match your brand. No off-the-shelf widget look — listings look native to your site.',
  },
  {
    number: '04',
    title: 'Neighborhood Pages & Local SEO',
    description: 'Every target neighborhood gets its own page: market data, school info, what the area is like, and what you love about it. These pages are your primary organic search targets.',
  },
  {
    number: '05',
    title: 'Launch & Lead Flow Setup',
    description: 'Site goes live on your domain. CRM integration configured, contact forms connected, Google Analytics + Search Console set up. You start capturing leads on day one.',
  },
];

const USE_CASES = [
  {
    name: 'Individual Agents',
    description: 'Custom agent sites with IDX, neighborhood pages, home valuation lead capture, and personal branding. Fixed price, scoped to your build.',
    example: '7-day delivery. No ongoing platform fee. Lighthouse 90+ performance.',
    linkLabel: 'Get started',
    linkHref: '/contact',
  },
  {
    name: 'Agent Teams',
    description: 'Team roster pages, shared listing search, individual agent profiles, and a unified brand with per-agent lead routing.',
    example: 'Scoped to your team size. Fixed price quoted after a free discovery call.',
  },
  {
    name: 'Brokerages',
    description: 'Multi-office brokerage sites with full agent roster, recruitment pages, brand compliance controls, and office location pages.',
    example: 'Includes team management features. Fixed price, scoped to your build.',
    linkLabel: 'Get started',
    linkHref: '/contact',
  },
  {
    name: 'Property Management',
    description: 'Public marketing site + tenant portal (rent payments, maintenance) + owner portal (financials, vacancy). A web application build, not just a website.',
    example: 'Includes both tenant and owner portals. Fixed price, scoped to your build.',
    linkLabel: 'Learn more',
    linkHref: '/services/web-application-development',
  },
  {
    name: 'Commercial Real Estate',
    description: 'Commercial property listing sites, investment portfolio showcases, and market report pages for commercial brokers and investors.',
    example: 'Typically 10–15 pages with property showcase. Fixed price, scoped to your build.',
  },
  {
    name: 'Real Estate Developers',
    description: 'Project marketing sites for new developments — floor plans, reservation/waitlist capture, virtual tours, and broker co-op pages.',
    example: 'Includes waitlist capture and floor plan gallery. Fixed price, scoped to your build.',
    linkLabel: 'Get an estimate',
    linkHref: '/contact',
  },
];

const RELATED_SERVICES = [
  {
    name: 'Website Redesign',
    description: 'Already have a site? Modernize it with faster load times, new design, and better SEO — without losing your existing rankings.',
    linkLabel: 'Learn more',
    linkHref: '/services/website-redesign',
  },
  {
    name: 'Law Firm Website Design',
    description: 'Looking for real estate attorney website design? We specialize in practice-area-specific legal sites.',
    linkLabel: 'Learn more',
    linkHref: '/services/law-firm-website-design',
  },
  {
    name: 'Transparent Pricing',
    description: 'See all FactoryJet service pricing — fixed packages, no hourly billing, no surprise invoices.',
    linkLabel: 'See pricing',
    linkHref: '/pricing',
  },
  {
    name: 'AI Automation',
    description: 'Automate your lead follow-up, listing alerts, and client communication workflows. Fixed price, scoped to your build.',
    linkLabel: 'Learn more',
    linkHref: '/services/ai-automation',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Real Geeks / kvCORE' },
  { label: 'Generic Web Agency' },
  { label: 'DIY (Squarespace)' },
] as const;

const COMPARISON_ROWS = [
  { feature: 'Starting Price', values: ['Fixed, one-time', 'Recurring monthly fee', 'Several times more', 'Low monthly DIY fee'] },
  {
    feature: 'IDX Integration',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="yes" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Custom Design',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="no" />, <CompareIcon key="ga" kind="yes" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Neighborhood Pages',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="partial" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Lighthouse Score 90+',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="no" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'You Own the Site Outright',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="no" />, <CompareIcon key="ga" kind="yes" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'CRM Choice (Any)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="no" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Home Valuation Lead Capture',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="yes" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: '7-Day Delivery',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="no" />, <CompareIcon key="ga" kind="no" />, <CompareIcon key="diy" kind="yes" />],
  },
  {
    feature: 'Local SEO Strategy',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="rg" kind="partial" />, <CompareIcon key="ga" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
] as const;

const PRICING_TIERS = [
  {
    name: 'Agent',
    priceRange: 'Fixed price, scoped to your build',
    description: 'Custom website for individual agents with IDX, neighborhood pages, and lead capture. Live in 7 days.',
    features: [
      'Up to 8 pages — custom design, your brand',
      'IDX integration (your provider)',
      'Up to 5 neighborhood pages',
      'Home valuation lead capture',
      'Buyer + seller resource pages',
      'CRM integration',
      'On-page SEO setup',
      'Mobile-optimized',
      '7-day delivery',
      '30 days post-launch support',
    ],
    cta: { label: 'Get Started', modal: true, region: 'us' },
  },
  {
    name: 'Team / Brokerage',
    priceRange: 'Fixed price, scoped to your build',
    description: 'Multi-agent site with team roster, individual profiles, combined listing search, and recruitment page.',
    features: [
      'Up to 20 pages',
      'Team roster with agent profiles',
      'Combined IDX listing search',
      'Up to 10 neighborhood pages',
      'Recruitment / careers page',
      'Office location pages',
      'Advanced lead routing by agent',
      'Blog + market reports setup',
      '14-day delivery',
      '30 days post-launch support',
    ],
    cta: { label: 'Get Started', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Property Management',
    priceRange: 'Fixed price, scoped to your build',
    description: 'Marketing site + tenant portal + owner portal. Online rent, maintenance requests, and financial reporting.',
    features: [
      'Public marketing site',
      'Tenant portal (rent pay, maintenance)',
      'Owner portal (reports, vacancy)',
      'Online rent payment (Stripe)',
      'Maintenance request workflow',
      'Lease document storage',
      'Email notification system',
      'Owner financial reporting',
      '4–6 week delivery',
      '60 days post-launch support',
    ],
    cta: { label: 'Get Started', modal: true, region: 'us' },
  },
] as const;

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Real Estate Website Basics' },
  { key: 'seo', label: 'SEO for Real Estate' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'leads', label: 'Lead Generation & CRM' },
  { key: 'platforms', label: 'Platforms & Technology' },
];

const FAQ_ITEMS = [
  /* ── Basics ── */
  {
    category: 'basics',
    question: 'What should a real estate agent website include?',
    answer: "A high-performing real estate agent website needs: a strong above-the-fold section with your photo, your market, and a clear CTA (home valuation or search listings); a neighborhood page for every area you work in; an IDX listing search with map view; a buyer and seller resource section; past sales and testimonials that demonstrate local market knowledge; and lead capture that offers something valuable (home valuation, neighborhood guide) in exchange for contact information.",
  },
  {
    category: 'basics',
    question: 'How much does a real estate agent website cost?',
    answer: "A custom real estate agent website from FactoryJet is fixed-price and scoped to your build — a custom 8-page site with IDX integration, neighborhood pages, lead capture forms, mobile optimization, and on-page SEO setup. The main cost drivers are the site type (agent, brokerage, or property management), page count, and the number of neighborhood pages. We quote the full price up front after a free discovery call, and it comes in well below what US real estate web agencies charge for comparable work.",
  },
  {
    category: 'basics',
    question: 'Do I need a website if I have a Zillow Premier Agent profile?',
    answer: "Zillow and a website serve different purposes. Zillow puts you in front of buyers already on Zillow — you pay per lead, and the moment you stop paying, you disappear. A website builds organic search visibility: when someone searches 'real estate agent in [neighborhood]' or '[city] homes for sale,' your site ranks — not your Zillow profile. Over 3–5 years, a website that ranks generates leads at near-zero cost. Zillow leads keep costing you per contact. The top-producing agents run both — but the website builds an asset. Zillow is a rental.",
  },
  {
    category: 'basics',
    question: 'What is IDX integration and how does it work on my website?',
    answer: "IDX (Internet Data Exchange) is the data-sharing agreement that lets your website display live MLS listings. When a buyer searches for homes on your site, they see real-time listing data from the MLS — the same data on Zillow, but on your branded website where you control the experience. We integrate with iHomefinder, Showcase IDX, Homes.com IDX, and direct RETS/RESO connections depending on your MLS. IDX integration is scoped into your fixed-price quote based on your provider.",
  },
  /* ── SEO ── */
  {
    category: 'seo',
    question: 'How do I rank on Google for real estate searches in my city?',
    answer: "Local real estate SEO is about neighborhood-specific content. Google does not rank generic pages ('Denver homes for sale') highly unless you have enormous domain authority. What ranks are specific pages: 'Washington Park Denver homes for sale,' 'Cherry Creek Denver condos,' '[specific neighborhood] market report.' FactoryJet builds a dedicated page for every neighborhood you target — with your expert commentary, market statistics, school information, and an IDX search filtered to that area.",
  },
  {
    category: 'seo',
    question: 'How long does it take to rank on Google for real estate terms?',
    answer: "New websites typically take 3–6 months to establish domain authority and begin ranking meaningfully. Highly competitive terms like '[major city] real estate agent' may take 12–18 months. Neighborhood-specific terms are less competitive and rank faster — often within 60–90 days of launch. The SEO work we do at launch sets the foundation. Consistent content additions accelerate the timeline.",
  },
  {
    category: 'seo',
    question: 'Do you write the content for neighborhood pages?',
    answer: "We can write neighborhood page content as an add-on, scoped per neighborhood page. However, the best neighborhood pages have your voice and your local knowledge. We provide a content template for each neighborhood that prompts you with exactly what to fill in. Most agents do a 30-minute voice memo per neighborhood and we write from that — the result is content that's authentically yours.",
  },
  {
    category: 'seo',
    question: 'Should my real estate website have a blog?',
    answer: "Yes — a real estate blog done well is one of the highest-ROI SEO investments available to agents. The right content: monthly market reports for each neighborhood, buyer and seller guides, answers to questions your clients ask repeatedly, and hyperlocal posts. This content ranks for long-tail searches and positions you as the local expert. We build the blog infrastructure into your site.",
  },
  /* ── Process ── */
  {
    category: 'process',
    question: 'How long does it take to build a real estate website?',
    answer: "FactoryJet delivers custom real estate agent websites in 7 business days for sites up to 10 pages. Brokerage sites with team rosters take 14–21 days. Property management platforms with tenant/owner portals take 3–6 weeks. Timeline starts from design approval.",
  },
  {
    category: 'process',
    question: 'What do I need to provide to start?',
    answer: "To kick off your real estate website: your logo and headshots (professional photo is critical for real estate sites), a list of the neighborhoods you work in, your IDX provider login credentials, your license number and brokerage information, and examples of real estate sites you like. We provide a simple intake form that collects all of this in under 20 minutes.",
  },
  {
    category: 'process',
    question: 'Can you redesign my current real estate website?',
    answer: "Yes — redesigns are common. Many agents have sites on older platforms (Agent Image, Real Geeks, BoomTown) that are slow, look dated, or can't be customized without paying per change. We redesign onto Next.js or WordPress, keeping your domain, migrating your content, setting up 301 redirects to preserve your existing search rankings. Redesign pricing is typically 20–30% lower than a new build of the same scope.",
  },
  {
    category: 'process',
    question: 'Do you build sites for property management companies as well?',
    answer: "Yes — property management is a distinct use case from agent sites. They need: a public marketing site for owner acquisition and tenant search, a tenant portal (online rent payment, maintenance requests, lease documents), and an owner portal (financial reporting, vacancy status, maintenance updates). This is a web application build — fixed-price and scoped to your portals and feature set.",
  },
  /* ── Leads ── */
  {
    category: 'leads',
    question: 'How does a real estate website generate leads?',
    answer: "The highest-converting real estate lead magnets: (1) Instant home valuation — 'Find out what your home is worth' captures seller leads with high intent. (2) Neighborhood guides — buyers trade their email for a PDF about the area they're researching. (3) Listing alerts — 'Get notified when homes matching your criteria hit the market.' (4) Mortgage calculator — keeps buyers on your site longer. FactoryJet builds all four into your site and connects your CRM so leads flow directly.",
  },
  {
    category: 'leads',
    question: 'Can you integrate my real estate website with my CRM?',
    answer: "Yes — CRM integration is standard on all real estate site builds. We connect to Follow Up Boss, BoomTown, kvCORE, HubSpot, Salesforce, and Pipedrive. When a buyer fills out a home search form or a seller requests a home valuation, the lead goes directly to your CRM with source tracking so you know which page generated the lead.",
  },
  {
    category: 'leads',
    question: 'How do I capture home seller leads on my website?',
    answer: "Seller lead capture starts with a home valuation tool — a form where homeowners enter their address and get a preliminary estimate. We integrate with Homebot, HouseCanary, or Cloud CMA, or implement a simple form that captures the address and promises a manual follow-up within 24 hours. In our experience, the manual follow-up promise converts better than the instant AVM alone — it creates a reason to contact the lead.",
  },
  {
    category: 'leads',
    question: 'What makes a real estate website convert visitors into leads?',
    answer: "The three conversion killers on most real estate websites: (1) Generic stock photography — nobody trusts a real estate site that uses the same Getty Images photo as every other agent. (2) A single contact form at the bottom — multiple lead capture points matched to where the visitor is in their journey dramatically outperform a single form. (3) No social proof specific to your market — 'I sold 23 homes in Washington Park last year' converts better than national reviews.",
  },
  /* ── Platforms ── */
  {
    category: 'platforms',
    question: 'What platform do you build real estate websites on?',
    answer: "We build on Next.js (for performance-first sites with excellent Core Web Vitals) or WordPress (for agents who want to update content themselves). Next.js sites consistently score 90+ on Google Lighthouse — critical for a competitive local SEO landscape. WordPress sites use a lightweight custom theme, never Elementor or Divi page builders.",
  },
  {
    category: 'platforms',
    question: 'What IDX providers do you work with?',
    answer: "FactoryJet integrates with all major IDX providers: iHomefinder, Showcase IDX, Homes.com IDX, Diverse Solutions (dsIDXpress), Wolfnet, and direct RETS/RESO API connections. We recommend Showcase IDX for Next.js builds and iHomefinder for WordPress builds. IDX setup is scoped into your fixed-price quote based on your provider. The IDX provider's own monthly service fee is paid directly to them, separate from your build.",
  },
  {
    category: 'platforms',
    question: 'How does your real estate website compare to Real Geeks, kvCORE, or BoomTown?',
    answer: "Real Geeks, kvCORE, and BoomTown bundle a website with CRM and lead generation tools. The tradeoffs: a recurring monthly platform fee, the websites look identical to every other agent on the platform, performance scores are typically 40–65 Lighthouse, and you can't meaningfully customize the design. FactoryJet builds a custom site you own outright, integrated with whatever CRM you prefer. Higher upfront cost, zero ongoing platform fee.",
  },
  {
    category: 'platforms',
    question: 'Do you build real estate websites for teams and brokerages?',
    answer: "Yes — brokerage and team sites need: a team roster with individual agent profiles and bios, a listings page that aggregates listings across all team members, office location pages, a recruitment page targeting agent talent, and often co-branded templates that individual agents can personalize. Brokerage sites are fixed-price and scoped to your team size and feature set.",
  },
];

const MARKET_STATS = [
  {
    value: 'Fixed price',
    label: 'scoped to your build for a custom agent site with IDX — well below US real estate web agency rates',
    sourceUrl: 'https://factoryjet.com/services/real-estate-website-design',
    sourceLabel: 'FactoryJet',
  },
  {
    value: '90+',
    label: 'Lighthouse performance score on FactoryJet real estate sites — vs. 40–65 on most platform-built sites',
    sourceUrl: 'https://factoryjet.com/services/real-estate-website-design',
    sourceLabel: 'FactoryJet',
  },
  {
    value: '$0/mo',
    label: 'ongoing FactoryJet platform fee — you own the site outright, pay only for hosting',
    sourceUrl: 'https://factoryjet.com/pricing',
    sourceLabel: 'FactoryJet',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your real estate website in 7 days',
  description: 'Our proven 7-day process for delivering professional, lead-generating real estate websites for US agents and brokerages.',
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
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function RealEstateWebsiteDesignPage() {
  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_real_estate_website_design_hero" />}
        eyebrow="REAL ESTATE WEBSITE DESIGN"
        headline="Real Estate Websites That Rank Locally and Convert Visitors Into Leads"
        lead="Custom agent, team, and brokerage websites with IDX integration and neighborhood pages — built to outrank generic templates on local search. Fixed price, scoped to your build. 7-day delivery. No ongoing platform fees."
        secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
        trustItems={['IDX integration included', '7-day delivery guarantee', 'No ongoing platform fees']}
        rightSlot={
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-white/50">Platform Comparison</p>
            <div className="grid grid-cols-3 gap-2 text-xs font-fj-body pb-2 border-b border-white/10">
              <span className="text-white/40"></span>
              <span className="text-[#F05A28] font-semibold text-center">FactoryJet</span>
              <span className="text-white/40 text-center">Real Geeks / kvCORE</span>
            </div>
            {[
              ['Monthly Cost', '$0 after build', 'Recurring monthly fee'],
              ['Lighthouse Score', '90+', '40–65'],
              ['Custom Design', '✓ Fully custom', '✗ Template only'],
              ['You Own the Site', '✓ Outright', '✗ Subscription'],
              ['CRM Choice', '✓ Any CRM', '✗ Locked to theirs'],
              ['Neighborhood Pages', '✓ Scoped per brief', '✗ Limited'],
            ].map(([feature, fj, other]) => (
              <div key={feature} className="grid grid-cols-3 gap-2 py-2 border-t border-white/5 items-center text-xs font-fj-body">
                <span className="text-white/50">{feature}</span>
                <span className="text-[#F05A28] text-center">{fj}</span>
                <span className="text-white/40 text-center">{other}</span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
      <ServiceHeroImageBand
        imageSrc="/images/services/card-real-estate.webp"
        imageAlt="Real estate agent website with property listings on a MacBook — FactoryJet real estate website design"
        stats={[
          { value: '500+', label: 'Agent Sites Built' },
          { value: '7 Days', label: 'Delivery Guarantee' },
          { value: 'Fixed Price', label: 'Scoped to Your Build, IDX Included' },
          { value: '25 Yrs', label: 'Real Estate Web Expertise' },
        ]}
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        eyebrow="REAL ESTATE WEBSITE DESIGN"
        headline="Fixed-price agent site. IDX included. 7-day delivery. Lighthouse 90+. No ongoing platform fee."
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHY MOST REAL ESTATE WEBSITES FAIL"
        headline="Generic template sites don't rank. Neighborhood-specific sites do."
        lead="The problem with most real estate website platforms — Real Geeks, Agent Image, even custom WordPress builds from non-specialist agencies — is that they're built for every agent in every market. Which means they're optimized for none of them."
        body={
          <>
            <p>
              Google&apos;s local search algorithm rewards specificity. A page titled &apos;Washington Park Denver Homes for Sale&apos; with original market commentary, local school data, and a neighborhood-specific listing search will out-rank a generic &apos;Denver Real Estate&apos; homepage every time.
            </p>
            <p>
              FactoryJet builds real estate sites around your specific markets. Every neighborhood you work in gets its own page. Every page is written with your voice and your local knowledge. IDX is filtered to that specific area. The result is a site that ranks for the exact searches your clients are making — not the generic searches every other agent is also trying to win.
            </p>
            <p>
              We&apos;ve built real estate sites for agents in Austin, Miami, Denver, Nashville, Charlotte, Portland, Raleigh, and Tampa. The formula is the same in every market: neighborhood depth beats homepage generality, every time.
            </p>
          </>
        }
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-3">Every Site Includes</p>
            {[
              { item: 'Custom homepage with agent branding', note: 'Your photo, track record, market' },
              { item: 'IDX listing search', note: 'iHomefinder, Showcase IDX, or yours' },
              { item: 'Neighborhood pages (up to 5)', note: 'Market data, schools, local expertise' },
              { item: 'Home valuation lead capture', note: 'Seller lead magnet built in' },
              { item: 'Buyer & seller resource pages', note: 'Content that converts fence-sitters' },
              { item: 'CRM integration', note: 'Follow Up Boss, HubSpot, and more' },
              { item: 'On-page SEO setup', note: 'Schema markup, meta, Search Console' },
              { item: '7-day delivery', note: 'Agent sites up to 10 pages' },
            ].map(({ item, note }) => (
              <div key={item} className="flex items-start gap-3 py-2 border-t border-fj-charcoal/10 first:border-0">
                <div className="w-2 h-2 rounded-full bg-[#F05A28] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold font-fj-body text-fj-ink">{item}</p>
                  <p className="text-xs text-fj-ink/50 font-fj-body">{note}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 5. STRATEGIC DARK SECTION ── */}
      <StrategicDarkSection
        eyebrow="THE PLATFORM TRAP"
        headline="Paying a hefty monthly fee for a platform that makes every agent's site look the same is not a marketing strategy."
        lead="Real estate technology platforms have convinced agents that the answer to lead generation is a better CRM or a higher Zillow spend. It's not. The agents generating the most organic leads in every market have one thing in common: a website with deep, specific content about the exact neighborhoods their clients are searching. Not a platform. Not a template. A real website that Google has a reason to rank."
        pillars={[
          {
            title: 'Platform sites look identical — Google knows it',
            body: "Real Geeks, BoomTown, and kvCORE generate thousands of nearly identical sites. Google's algorithm deprioritizes thin, duplicate content. Your neighborhood pages compete not just with other agents, but with thousands of sites on the same template. A custom site with original content is a different signal entirely.",
          },
          {
            title: 'You pay forever but own nothing',
            body: "Platform subscriptions carry a steep recurring monthly fee. Over a few years, that adds up to many times the cost of a one-time build — for a site you can't take with you if you switch brokerages, and that disappears the moment you stop paying. A FactoryJet site is built once, owned forever.",
          },
          {
            title: 'Platform performance scores hurt your rankings',
            body: "Real estate platform sites typically score 40–65 on Google Lighthouse — well below the 90+ threshold Google favors. Page speed is a direct Google ranking signal. If your platform-built site loads slower than a competitor's custom site, Google notices and ranks you accordingly.",
          },
        ]}
      />

      {/* ── 6. SERVICE JOURNEY ── */}
      <div id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Market Strategy to Live Site: 5 Stages"
          lead="Every real estate website FactoryJet builds starts with your market, not a template. Here's how a typical agent site comes together in 7 days."
          stages={journeyStages}
          closingNote="5 STAGES · 7-DAY DELIVERY · IDX INTEGRATION INCLUDED · FREE QUOTE IN 24 HOURS"
        />
      </div>

      {/* ── 7. WHO WE BUILD FOR ── */}
      <IndustriesGrid
        eyebrow="WHO WE BUILD FOR"
        headline="Real estate websites for every business model in the industry"
        lead="Agent sites, team sites, brokerage platforms, and property management portals — each with a different structure, different lead strategy, and different price point."
        sectors={USE_CASES}
      />

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="MARKETS WE SERVE"
        headline="Real estate website design for agents across the US"
        leadParagraphs={[
          "FactoryJet builds real estate websites for agents, teams, and brokerages in every US market. Our SEO work is US-market-specific — we research neighborhood-level search terms in your city and build pages that target them.",
          "We've built sites for agents in competitive markets including Austin, Miami, Denver, Nashville, Charlotte, Portland, Raleigh, and Tampa. Each market has different neighborhood vocabulary, different search intent patterns, and different IDX providers — we know the nuances.",
          "Our 7-day delivery guarantee applies to agent sites up to 10 pages. Every site includes the same fixed-price package: IDX integration, neighborhood pages, lead capture, CRM connection, and on-page SEO setup.",
        ]}
        stats={MARKET_STATS}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. Real Estate Platforms vs. Generic Web Agencies"
        lead="Not all real estate website options are equal. Here's what the decision looks like when you compare side by side — on price, quality, and what you're left with long-term."
        pullQuote={{ stat: '$0/mo', caption: 'ongoing FactoryJet platform fee — you pay once and own the site outright.' }}
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
        footer="Real Geeks, kvCORE, and BoomTown monthly fees are recurring and typically increase over time. FactoryJet is a one-time build fee — a small monthly hosting cost goes directly to your host."
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="REAL ESTATE WEBSITE PRICING"
          headline="Fixed-Price Real Estate Websites: No Ongoing Platform Fees"
          lead="Every tier includes a fixed scope, a fixed price, and a delivery timeline we stand behind. You own the site outright — no platform lock-in, no monthly subscription to FactoryJet."
          tiers={PRICING_TIERS}
          footnote="The IDX provider's own monthly fee is paid directly to your IDX provider — not FactoryJet. No ongoing FactoryJet fees after launch."
        />
      </div>

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        region="us"
        eyebrow="CLIENT RESULTS"
        headline="What real estate professionals say about FactoryJet."
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="REAL ESTATE WEBSITE FAQ"
        headline="Everything real estate professionals ask about website design"
        lead="No jargon. Clear answers to the questions every agent and broker asks before committing to a new website."
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        variant="dark"
        eyebrow="START YOUR PROJECT"
        headline="Get a custom real estate website that ranks in your market, in 7 days"
        sub="Tell us your market, your neighborhoods, and your IDX provider. We'll send a free quote within 24 hours. No sales call required."
        primaryCta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
        secondaryCta={{ label: 'See All Pricing', href: '/pricing' }}
        objectionHandler="7-day delivery. IDX integration included. No ongoing platform fees. Free quote in 24 hours."
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
