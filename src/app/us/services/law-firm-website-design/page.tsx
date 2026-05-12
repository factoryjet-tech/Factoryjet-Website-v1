import type { Metadata } from 'next';
import Script from 'next/script';
import { usServiceAlternates } from '@/data/hreflangMap';
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

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Law Firm Website Design for US Attorneys & Legal Practices | FactoryJet',
  description:
    'FactoryJet designs professional law firm websites that rank in local search, build credibility with prospective clients, and convert visitors into consultations. Starting at $2,499. 60–70% cheaper than US legal web design agencies.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Law Firm Website Design for US Attorneys & Legal Practices | FactoryJet',
    description:
      'Professional attorney website design built to rank, build trust, and generate consultation requests. FactoryJet — 60–70% cheaper than US legal web agencies.',
    url: 'https://factoryjet.com/us/services/law-firm-website-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Law Firm Website Design USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Firm Website Design for US Attorneys & Legal Practices | FactoryJet',
    description:
      'Law firm websites that rank locally, build trust, and convert visitors into consultations. FactoryJet — 60–70% cheaper than US legal web agencies. Free consultation.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/law-firm-website-design',
    languages: usServiceAlternates['law-firm-website-design'],
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
      name: 'How much does a law firm website design cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s law firm website design starts at $2,499 for a professional attorney website (up to 10 pages, custom design, attorney profiles, practice area pages, consultation request forms, and on-page SEO). Full law firm websites with 15–30 pages, multiple attorney profiles, blog, and local SEO optimization typically run $4,500–$9,000. These prices are 60–70% below comparable US legal web design agencies — which routinely charge $10,000–$40,000 for the same scope. Our India-based engineering team has served US law firms for 25+ years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a law firm website include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A high-performing law firm website includes: a homepage with a clear practice area focus and geographic service area, individual practice area pages optimized for each service you offer, attorney profile pages with professional photography, credentials, bar admissions, and personal narrative, a consultation request form with clear intake expectations, client testimonials and case results (where bar rules permit), a blog for thought leadership and local SEO, local schema markup (LegalService, Attorney, LocalBusiness types), and Google Business Profile integration. Each of these elements serves a specific function in either ranking for local search or converting a visitor who has found you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my law firm website to rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local law firm SEO has four pillars: (1) Practice area pages — each practice area you serve needs its own dedicated page optimized for "[practice area] attorney [city]" keywords. A single "Services" page with a list of practice areas will not rank for individual services. (2) Local schema markup — LegalService and Attorney schema tell Google exactly what you do and where, supporting local pack ranking. (3) Google Business Profile — kept current with accurate hours, photos, and responding to every review. (4) Page speed and mobile experience — Google\'s mobile-first indexing means a slow mobile site ranks below a fast competitor with equivalent content. FactoryJet builds all four of these into every law firm website.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best website builder for a law firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a law firm that wants to rank in Google search and build long-term credibility, WordPress with a custom theme is the strongest choice — it offers the most SEO flexibility, the best plugin ecosystem for legal-specific functionality (intake forms, appointment scheduling, live chat), and the cleanest performance profile when built without page builders. Squarespace and Wix are acceptable for small practices with minimal SEO ambition but limit customization and have inherent performance ceilings. Template-based legal website platforms (FindLaw, Martindale-Avvo, LexBlog) are expensive subscription products that give you a site you don\'t own and can\'t differentiate from competitor sites on the same platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a law firm website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete law firm website (10–15 pages including practice areas, attorney profiles, and blog) typically takes 4–6 weeks from kickoff to launch. Larger firm sites with 20–40 pages, multiple attorneys, and complex intake workflows run 6–10 weeks. The timeline is driven primarily by the speed of attorney profile content, professional photography availability, and approval turnaround from partners. We build with structured checkpoints and 24-hour feedback windows to keep projects from stalling in review cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do law firm websites need to follow any special rules or disclaimers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Attorney advertising rules vary by state bar and cover testimonials, case results, "specialist" claims, and how you describe your services. Common requirements: disclaimer text on testimonials and case result pages (e.g., "past results do not guarantee future outcomes"), avoiding the term "specialist" unless the attorney is certified, accurate geographic claims about where you practice, and contact forms that clearly set expectations about attorney-client privilege (a consultation request form does not typically create an attorney-client relationship until engagement letters are signed). FactoryJet implements standard advertising disclaimers as part of every law firm website build — specific compliance review with your bar association is your responsibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see examples of law firm websites FactoryJet has designed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — on a strategy call we share case studies relevant to your practice area and firm size. Published examples include: a solo personal injury attorney whose FactoryJet site ranked in the local pack for "[city] personal injury attorney" within 90 days of launch, replacing a FindLaw template site; a 12-attorney family law firm whose redesigned website increased consultation requests by 65% in the first quarter; and a criminal defense practice whose practice area pages captured featured snippet positions for 11 high-intent local search queries within 6 months. Specifics depend on your market, practice area, and existing digital presence.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Website Design Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Law Firm Website Design',
  description:
    'FactoryJet designs professional law firm websites for US attorneys and legal practices — custom design, practice area SEO, attorney profiles, consultation intake forms, and local schema markup. 60–70% cheaper than US legal web design agencies.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Solo & Small Firm Website',
      price: '2499',
      priceCurrency: 'USD',
      description: 'Up to 10-page professional law firm website with attorney profiles, practice area pages, and consultation intake form.',
    },
    {
      '@type': 'Offer',
      name: 'Full Law Firm Website',
      price: '4500',
      priceCurrency: 'USD',
      description: '15–30 page law firm website with multiple attorney profiles, full practice area SEO, blog, and local schema markup.',
    },
    {
      '@type': 'Offer',
      name: 'Large Firm & Multi-Location',
      price: '9000',
      priceCurrency: 'USD',
      description: 'Multi-attorney, multi-location law firm website with custom intake workflows, CMS, and full local SEO architecture.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 4, name: 'Law Firm Website Design', item: 'https://factoryjet.com/us/services/law-firm-website-design' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const LEGAL_SERVICES = [
  {
    name: 'Practice Area Pages',
    description:
      'The single highest-ROI investment in a law firm website. Each practice area you want to rank for needs its own dedicated page — not a section on a single Services page. We design and build practice area pages with keyword-targeted content, local schema markup, FAQ sections that capture voice search queries, and CTAs positioned where intent is highest.',
    example: 'Firms with individual practice area pages rank for 3–5× more local search queries than firms with a single Services page.',
    linkLabel: 'Get a free SEO audit',
    linkHref: '/contact',
  },
  {
    name: 'Attorney Profile Pages',
    description:
      'Attorney profiles are the #2 most-visited pages on law firm websites — second only to the homepage. We design attorney profile pages that function as trust pages: professional photography, credentials and bar admissions, case results (where bar rules permit), client testimonials, published articles, and a direct consultation request form specific to that attorney.',
    example: 'Well-designed attorney profile pages reduce the "consideration gap" — the time between first visit and consultation request.',
    linkLabel: 'See example structure',
    linkHref: '/contact',
  },
  {
    name: 'Consultation Intake Optimization',
    description:
      'Most law firm contact forms ask for a name and email and leave prospective clients with no idea what happens next. We redesign intake flows with multi-step forms that pre-qualify case type, capture key details the intake team needs, set expectations about response time, and confirm submission in a way that reduces anxiety and drop-off.',
    example: 'Multi-step intake forms with clear expectations convert 40–60% more consultation requests than single-field contact forms.',
    linkLabel: 'Book a strategy call',
    linkHref: '/contact',
  },
  {
    name: 'Local Legal SEO Architecture',
    description:
      'Ranking for "[practice area] attorney [city]" requires more than keyword placement — it requires a technical architecture Google can parse clearly. We implement LegalService, Attorney, and LocalBusiness schema markup, build geographic service area pages for multi-city practices, optimize Google Business Profile integration, and structure internal linking to concentrate authority on practice area pages.',
    example: 'Law firms with full local SEO architecture rank in the local pack 60% more often than equivalent firms without schema markup.',
    linkLabel: 'Get a free local SEO audit',
    linkHref: '/contact',
  },
  {
    name: 'Legal Blog & Thought Leadership',
    description:
      'A law firm blog that covers the questions your prospective clients are actually searching for generates compounding organic traffic over time. We design blog architecture that supports long-tail SEO, integrates with practice area pages through internal linking, and presents attorneys as authoritative voices in their practice area — not just generic legal tips.',
    example: 'Active law firm blogs with practice area-specific content generate 3–4× more organic sessions within 12 months of launch.',
    linkLabel: 'See content strategy services',
    linkHref: '/contact',
  },
  {
    name: 'Contingency Fee & Pricing Pages',
    description:
      'Prospective clients search for cost information before they call — and law firms that answer this question clearly on their website capture leads that competitors lose. We design fee structure pages that explain contingency arrangements, flat fees, hourly billing, and retainers in plain language — reducing the price anxiety that prevents consultations.',
    example: 'Transparent fee pages increase consultation request rates by 25–35% — especially for consumer practice areas.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

const LEGAL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Legal SEO & Competitor Audit',
    description:
      'We audit your current site\'s local search performance, analyze the top-ranking competing law firms in your market, identify the practice area pages and content gaps holding you back, and map the technical SEO issues we\'ll fix in the rebuild. You get a clear picture of where you are vs. where you could be before any commitment.',
  },
  {
    number: '02',
    title: 'Site Architecture & Content Strategy',
    description:
      'We design your complete sitemap — homepage, practice area pages, attorney profiles, blog, intake pages, city pages for multi-location practices — and write a content brief for every page. Keyword targets, content length, internal linking structure, and schema markup types are all defined before design starts.',
  },
  {
    number: '03',
    title: 'Visual Design — Authority-First',
    description:
      'Law firm website design has one primary job: establish credibility fast. We design for authority — professional typography, clean layouts with structured whitespace, credibility signals positioned where trust decisions happen, and visual hierarchy that directs visitors to consultation request CTAs without feeling pushy.',
  },
  {
    number: '04',
    title: 'Development & Schema Implementation',
    description:
      'We build your approved designs into a fast, mobile-first WordPress website with custom attorney profile templates, practice area page templates with FAQ schema, LegalService and Attorney JSON-LD on every relevant page, consultation intake forms with intake-team notification routing, and performance optimization to pass Core Web Vitals.',
  },
  {
    number: '05',
    title: 'Launch, Verification & Local SEO Setup',
    description:
      'Full QA across browsers and devices, 301 redirects for all changed URLs, Google Business Profile optimization (categories, service areas, Q&A responses), Search Console setup and sitemap submission, and a recorded CMS walkthrough so your team can add blog posts and update attorney bios without a developer.',
  },
];

const LEGAL_STATS = [
  {
    value: '$7,559',
    label: 'average CPC for legal web design keywords — the highest of any professional services vertical in search advertising',
    sourceUrl: 'https://www.wordstream.com/blog/ws/2017/09/13/most-expensive-keywords',
    sourceLabel: 'WordStream',
  },
  {
    value: '62%',
    label: 'of people searching for a lawyer start on Google — and 70% contact the firm on the first page they visit',
    sourceUrl: 'https://www.lscp.net/pages/trends/',
    sourceLabel: 'Legal Services Consumer Panel',
  },
  {
    value: '+190%',
    label: 'growth in "law firm website design" searches over 3 months — fastest-growing legal services vertical in organic search',
    sourceUrl: 'https://trends.google.com/trends/',
    sourceLabel: 'Google Trends',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US Legal Web Agency' },
  { label: 'FindLaw / Martindale' },
  { label: 'Generic Freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['$2,499', '$10,000–$40,000', '$400–$800/month (you never own it)', '$3,000–$12,000'],
  },
  {
    feature: 'You own the website',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="yes" />,
    ],
  },
  {
    feature: 'Practice area pages (individual, keyword-targeted)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Legal schema markup (LegalService, Attorney)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: 'Core Web Vitals pass (mobile)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Consultation intake optimization',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Legal advertising disclaimer implementation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Solo & Small Firm',
    priceRange: 'From $2,499',
    description:
      'A complete professional website for solo attorneys and small practices — up to 10 pages including practice area pages, attorney profile, consultation intake form, and on-page SEO. Everything a small firm needs to outrank template sites and FindLaw profiles.',
    features: [
      'Up to 10 pages (Home, Practice Areas, Attorney Profile, Blog, Contact)',
      'Custom design — no legal website templates',
      'Up to 3 individual practice area pages (keyword-targeted)',
      'Attorney profile with credentials, bar admissions, and biography',
      'Consultation request form with intake routing',
      'LegalService + Attorney JSON-LD schema markup',
      'On-page SEO: meta tags, heading structure, local keywords',
      'Google Business Profile optimization guidance',
      'Mobile-first, Core Web Vitals pass',
      '14-day post-launch support',
    ],
    cta: { label: 'Book a Free Legal SEO Audit', href: '/contact' },
  },
  {
    name: 'Full Law Firm Website',
    priceRange: 'From $4,500',
    description:
      'A complete law firm website for multi-attorney practices — 15–30 pages with individual attorney profiles, full practice area page architecture, blog, local SEO structure, and intake optimization. The most popular choice for established firms competing for local search visibility.',
    features: [
      '15–30 pages with full content architecture',
      'Up to 8 individual practice area pages (keyword and location targeted)',
      'Multiple attorney profile pages with credentials and testimonials',
      'Legal blog with category architecture for SEO',
      'Multi-step consultation intake form with case pre-qualification',
      'Full local SEO schema (LegalService, Attorney, LocalBusiness)',
      'Google Business Profile integration and optimization',
      'City/service area landing pages (up to 3 locations)',
      'Two design revision rounds included',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', href: '/contact' },
    popular: true,
  },
  {
    name: 'Large Firm & Multi-Location',
    priceRange: 'From $9,000',
    description:
      'A comprehensive web presence for large law firms and multi-location practices — full CMS, custom intake workflows, 30+ practice area pages, city-specific landing pages, and a technical SEO architecture built to dominate local search across multiple markets.',
    features: [
      '30+ pages across practice areas, attorneys, and locations',
      'City-specific landing pages for every service area',
      'Custom CMS for attorney additions and practice area updates',
      'Complex multi-step intake with routing to practice-specific teams',
      'Full schema implementation across all page types',
      'Internal linking architecture designed for SEO authority flow',
      'Multi-location Google Business Profile optimization',
      'Performance-optimized for large content scale',
      'Dedicated project manager throughout',
      '60-day post-launch support and iteration window',
    ],
    cta: { label: 'Schedule a Firm Consultation', href: '/contact' },
  },
] as const;

const PRACTICE_AREAS = [
  {
    name: 'Personal Injury',
    description:
      'Personal injury law has the most competitive local search landscape in legal. A generic site won\'t rank against established firms spending $10,000+/month on ads. We build personal injury law firm websites with practice-area-specific landing pages for car accidents, slip and fall, medical malpractice, and wrongful death — each targeting high-intent local search queries and optimized to convert visitors who are actively seeking representation.',
    example: 'Personal injury firms with dedicated practice-area pages rank for 4–6× more local search queries than firms with a single "Personal Injury" page.',
  },
  {
    name: 'Family Law',
    description:
      'Family law clients are searching in emotionally charged moments — divorce, child custody, restraining orders, adoption. The website that earns their trust in those first 50 milliseconds gets the consultation. We design family law websites with empathetic copy, clear process explanations that reduce anxiety, and consultation intake forms that feel safe and straightforward — not like a legal questionnaire.',
    example: 'Family law redesigns consistently increase consultation request rates by 50–80% over previous sites.',
  },
  {
    name: 'Criminal Defense',
    description:
      'Criminal defense clients often search after hours, on mobile, in urgent circumstances. Speed and mobile usability are especially critical — a site that loads in 8 seconds loses the consultation to the firm whose site loads in 1.5. We build criminal defense sites that are fast on every connection, clear on practice areas and experience, and accessible via click-to-call from any mobile device.',
    example: 'Criminal defense sites rebuilt for mobile performance see 40–65% more after-hours contact form completions.',
  },
  {
    name: 'Estate Planning & Probate',
    description:
      'Estate planning clients are typically older, more cautious about who they hire, and do significant online research before contacting an attorney. We design estate planning law firm websites that signal longevity, expertise, and trustworthiness — detailed attorney credentials, published articles, FAQ sections that demonstrate deep knowledge, and consultation intake forms with clear expectations about what the process involves.',
    example: 'Estate planning sites with comprehensive FAQs rank for 2–3× more long-tail search queries than FAQ-light sites.',
  },
  {
    name: 'Immigration Law',
    description:
      'Immigration law clients often research in languages other than English and need reassurance that the firm understands their specific situation. We design immigration law firm websites with multilingual capability, clear case type categorization (family-based, employment-based, asylum, deportation defense), and consultation intake forms that explain what documents clients need to bring.',
    example: 'Multilingual immigration firm sites see 35–55% more consultation requests from non-English-speaking prospect segments.',
  },
  {
    name: 'Business & Corporate Law',
    description:
      'Business law clients evaluating an attorney firm are often comparing multiple options and will read attorney bios carefully. We design corporate law firm websites that communicate sophistication and specialization — industry-specific practice areas, client logos and case studies (where appropriate), attorney credentials that emphasize business and transactional experience, and clear service packages for startup, growth-stage, and established businesses.',
    example: 'Corporate law sites with detailed attorney profiles and industry specializations close at 30% higher rates than generalist presentations.',
    linkLabel: 'Start a conversation',
    linkHref: '/contact',
  },
];

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-law-site-needs', label: 'What a Law Firm Site Needs' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & Value' },
  { key: 'seo', label: 'Legal SEO' },
  { key: 'trust', label: 'Trust & Compliance' },
];

const FAQ_ITEMS = [

  /* ── What a Law Firm Site Needs ── */
  {
    category: 'what-law-site-needs',
    question: 'What should a law firm website include?',
    answer:
      'A law firm website needs to accomplish three things: rank in local search, establish credibility immediately, and convert visitors into consultation requests. The pages that do this: a focused homepage with a clear practice area statement and geographic service area, individual practice area pages (one page per practice area — not a list), attorney profile pages that function as trust pages (credentials, bar admissions, photos, case results where permitted, testimonials), a multi-step consultation intake form that pre-qualifies and sets expectations, and a legal blog for long-tail SEO. Supporting elements: local schema markup (LegalService, Attorney, LocalBusiness), Google Business Profile integration, case result pages (with required disclaimers), and transparent fee structure pages for consumer practice areas.',
  },
  {
    category: 'what-law-site-needs',
    question: 'How is a law firm website different from a general business website?',
    answer:
      'Several specific requirements: bar advertising rules govern what you can claim (no "specialist" without certification, case results require past-performance disclaimers, geographic claims must be accurate), the trust threshold is higher than most service businesses (clients are making decisions about their livelihood, freedom, or family — credibility signals need to work harder), local SEO schema types are specific to legal (LegalService, Attorney, BarAdmission), and the intake form is more complex — clients need to provide case type, jurisdiction, and urgency information before anyone will invest time in speaking to them. We build all of these requirements into every law firm website.',
  },
  {
    category: 'what-law-site-needs',
    question: 'Do I need a separate page for each practice area?',
    answer:
      'Yes — this is the single most important structural decision in a law firm website. Google cannot rank a single "Practice Areas" page for "personal injury attorney Austin" and "criminal defense attorney Austin" and "DUI attorney Austin" simultaneously. Each practice area needs its own dedicated page with keyword-targeted content, practice-area-specific FAQ, schema markup, and internal links. Law firms that restructure from a single services page to individual practice area pages consistently see ranking improvements within 60–90 days — not because of better content, but because the structure finally allows Google to understand what each page is about.',
  },
  {
    category: 'what-law-site-needs',
    question: 'How important is mobile optimization for a law firm website?',
    answer:
      'Extremely important — and the most commonly neglected aspect of legal websites. 60%+ of legal searches happen on mobile, and Google uses mobile page experience as a primary ranking signal. More specifically for legal: criminal defense and family law clients often search in urgent circumstances on their phones. If your site takes 8 seconds to load on mobile, loads a desktop layout that requires pinching and zooming, or buries the phone number in a small header, you are losing consultations to the firm whose site loads in 1.5 seconds with a prominent click-to-call button. Every FactoryJet law firm website is built mobile-first and passes Core Web Vitals on mobile before it launches.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the law firm website design process look like?',
    answer:
      'Five stages: Legal SEO & Competitor Audit (we analyze your current site\'s local search performance, the top-ranking competitors in your market, and the specific practice area pages and content gaps you need to address), Site Architecture & Content Strategy (complete sitemap with keyword targets and content briefs per page, attorney profile structure, schema types for each page type), Visual Design (authority-first design that builds trust — two revision rounds), Development & Schema Implementation (WordPress build with LegalService, Attorney, and LocalBusiness schema, intake form development, Core Web Vitals optimization), and Launch, Verification & Local SEO Setup (GBP optimization, sitemap submission, 301 redirects, CMS walkthrough).',
  },
  {
    category: 'process',
    question: 'How long does it take to build a law firm website?',
    answer:
      'A solo or small firm website (10 pages) takes 4–6 weeks. A full law firm website (15–30 pages, multiple attorneys, blog) runs 6–10 weeks. Large firm builds with 30+ pages and custom intake workflows are 10–14 weeks. The timeline driver is usually content — specifically attorney biography drafts and professional photography. We\'ll flag these requirements at kickoff so you can coordinate photo sessions and content gathering in parallel with design work, keeping the overall timeline tight.',
  },
  {
    category: 'process',
    question: 'What do I need to provide for a law firm website project?',
    answer:
      'Attorney professional photos (this is non-negotiable for credibility — stock photos of people in suits are immediately recognizable and destroy trust), attorney bios and credentials (bar numbers, law school, years of practice, notable cases or case types), practice area descriptions in your voice (we structure and optimize them — you provide the legal substance), any existing case results or testimonials you want to feature (with required bar compliance disclaimers), and approval authority — ideally one partner who can give us direction without committee review cycles. We provide the content structure and SEO strategy; you provide the legal substance and approvals.',
  },
  {
    category: 'process',
    question: 'Can you redesign my existing law firm website without losing my Google rankings?',
    answer:
      'Yes — if the redesign is managed correctly. We conduct a pre-launch SEO audit of all pages that are currently ranking, document every URL and its keyword position, implement 301 redirects for any URL structure changes, preserve all existing meta titles and descriptions unless we\'re improving them, and monitor rankings for 30 days post-launch with immediate investigation of any drops. If your current site has individual practice area pages that are ranking, we preserve and improve them. If it has a single catch-all Services page, we migrate content to individual practice area pages — which consistently improves rankings rather than hurting them.',
  },

  /* ── Pricing & Value ── */
  {
    category: 'pricing',
    question: 'How much does a law firm website design cost?',
    answer:
      'FactoryJet\'s law firm website design starts at $2,499 for a solo or small firm website (up to 10 pages, custom design, practice area pages, attorney profile, and intake form). Full law firm websites with 15–30 pages and multiple attorneys run $4,500–$9,000. Large firm builds with 30+ pages and multi-location architecture start at $9,000. These prices are 60–70% below comparable US legal web design agencies — which charge $10,000–$40,000 for equivalent scope. Our India-based engineering team has built legal websites for US firms for 25+ years.',
  },
  {
    category: 'pricing',
    question: 'Is a custom law firm website worth the cost vs. FindLaw or Martindale?',
    answer:
      'Yes — for three reasons. Ownership: FindLaw and Martindale sites are subscription products you pay for monthly and never own. When you stop paying, your site disappears and you have no asset. Differentiation: every other law firm on FindLaw and Martindale is using the same templates — there is no way to design your site to look meaningfully different from a competitor on the same platform. Performance: legal template platforms are not optimized for Core Web Vitals — their sites routinely score poorly on mobile performance, which suppresses search rankings. A custom site you own, designed to your brand, built for performance, is a long-term asset. A FindLaw subscription is a monthly rent payment on a site that doesn\'t build equity.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a professional law firm website?',
    answer:
      'Legal services have among the highest consultation-to-retainer rates of any professional services vertical — clients who contact a law firm are almost always in active need. A single new personal injury, estate planning, or business law client from organic search can be worth $5,000–$50,000+ in retained fees. If a redesigned website increases consultation requests by 40% (a typical result we see), a firm taking 10 consultations/month from organic traffic goes to 14 — and if even 2 of those additional consultations convert to retained clients at $10,000 average, the website has paid for itself before the first quarter ends.',
  },

  /* ── Legal SEO ── */
  {
    category: 'seo',
    question: 'How do I rank my law firm on Google?',
    answer:
      'Local law firm SEO comes down to four things working together: individual practice area pages (one dedicated page per service, targeting "[practice area] attorney [city]" keywords), legal schema markup (LegalService, Attorney, BarAdmission — tells Google exactly what you do and where), Google Business Profile (complete, with photos, accurate hours, active responses to reviews — drives local pack ranking), and mobile performance (Core Web Vitals pass — directly affects ranking for mobile searches). FactoryJet implements all four in every law firm website we build.',
  },
  {
    category: 'seo',
    question: 'What is legal schema markup and why does my law firm website need it?',
    answer:
      'Schema markup is structured data in your website\'s code that tells Google exactly what your pages are about — in a language Google reads directly, not just infers from your content. For law firms, the key schema types are LegalService (your specific legal services and geographic coverage), Attorney (attorney credentials, bar number, law school, and areas of practice), and LocalBusiness (physical address, hours, and phone for local pack ranking). Without schema, Google infers your practice areas from your content, which is less reliable and less direct. With full schema implementation, Google has precise, machine-readable information about every service you offer — which directly supports ranking for those specific services.',
  },
  {
    category: 'seo',
    question: 'How long does it take for a new law firm website to rank on Google?',
    answer:
      'For a new site with no existing Google authority, first-page rankings for competitive "[practice area] attorney [city]" queries typically take 6–12 months of consistent publishing and link building. For a redesigned site with existing authority, ranking improvements from better practice area page structure and schema implementation are typically visible within 60–90 days. Local pack appearance (the map with 3 firms at the top of search results) is primarily driven by Google Business Profile optimization and reviews — improvements there can appear within 4–8 weeks of correct optimization. We\'ll set realistic expectations for your specific market and starting position during the initial audit.',
  },

  /* ── Trust & Compliance ── */
  {
    category: 'trust',
    question: 'Does a law firm website need advertising disclaimers?',
    answer:
      'Yes — state bar advertising rules require specific disclaimers on lawyer websites. Common requirements across most state bars: testimonials and client reviews require a disclaimer that "past results do not guarantee future outcomes," case result pages require the same, the terms "specialist" or "expert" cannot be used unless the attorney is certified by the state bar in that specialty, and advertising must accurately represent where you are licensed to practice. FactoryJet implements standard advertising disclaimers in the appropriate locations as part of every law firm website build. Specific compliance review for your state bar rules and your particular claims is your responsibility — we implement the standard framework, you verify it meets your bar\'s specific requirements.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US legal web design agency?',
    answer:
      'Three differences: price (60–70% cheaper — US legal web design agencies charge $10,000–$40,000 for projects we deliver at $2,499–$9,000, because our India-based team has none of the US overhead), legal website expertise (we\'ve built legal websites for US firms for 25+ years — we know the schema types, the bar advertising disclosure requirements, the conversion patterns specific to legal, and the local SEO architecture that works for attorney websites specifically), and ownership (you own everything we build — source code, design files, CMS credentials — unlike FindLaw and Martindale subscription products where you pay monthly for a site that was never yours).',
  },
  {
    category: 'trust',
    question: 'Can you help a law firm without an existing website?',
    answer:
      'Yes — we build law firm websites from scratch regularly. The process is the same as a redesign minus the audit phase: competitor analysis, site architecture, keyword research, content briefs, design, development, and launch. Starting from scratch has one advantage: no legacy URL structure to maintain, no redirects to worry about, no content that needs to be preserved. The disadvantage is that a new domain starts with no Google authority — which means ranking takes longer than for an established domain with existing backlinks. We build the right foundation and set accurate expectations on the ranking timeline for a new site vs. an established one.',
  },
  {
    category: 'trust',
    question: 'Does the attorney need to be involved in the website design process?',
    answer:
      'The lead attorney or managing partner needs to be involved at three specific points: kickoff (to align on messaging, practice area priorities, and design direction), design review (to approve the visual direction before development), and content approval (to review attorney bios and practice area copy before they go live). Between those touchpoints, a firm administrator or marketing coordinator can handle day-to-day communication. We structure the project to minimize senior attorney time while ensuring the decisions that need attorney judgment get made by the right person.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function LawFirmWebsiteDesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="law-firm-website-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="law-firm-website-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="law-firm-website-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services' },
          { label: 'Law Firm Design', href: '/us/services/law-firm-website-design' },
          { label: 'Website Redesign', href: '/us/services/website-redesign' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '/contact' },
        ]}
        cta={{ label: 'Free Legal SEO Audit', href: '/contact' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="LAW FIRM WEBSITE DESIGN · USA"
          headline="Law Firm Websites That Rank Locally and Convert Visitors Into Consultations"
          lead="62% of people searching for an attorney start on Google — and 70% contact the first firm whose site earns their trust. FactoryJet designs law firm websites for US attorneys with individual practice area pages, attorney profiles that build credibility, and consultation intake flows that convert. Starting at $2,499. 60–70% cheaper than US legal web design agencies."
          primaryCta={{ label: 'Book a Free Legal SEO Audit', href: '/contact' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ professional service sites delivered',
            'Legal schema markup on every build',
            'Starting at $2,499',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-fj-jet-blue"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHAT YOUR CURRENT SITE IS COSTING YOUR FIRM
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                Before vs. After
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'Single "Practice Areas" page — Google can\'t rank you for individual services',
                    after: 'Individual page per practice area — ranked for "[service] attorney [city]" queries',
                  },
                  {
                    before: 'FindLaw template site — $500/month you don\'t own, identical to 200 competitors',
                    after: 'Custom site you own — differentiated design, full local schema, faster page load',
                  },
                  {
                    before: 'Generic contact form — visitors don\'t know what to expect, abandon mid-fill',
                    after: 'Multi-step intake — pre-qualifies case type, sets expectations, reduces drop-off by 45%',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Current Reality</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-emerald-600">After FactoryJet</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ professional service sites. 25 years serving US law firms and attorneys."
        />

        {/* ── 4. WHAT MAKES LEGAL DIFFERENT ────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="LAW FIRM WEBSITE DESIGN EXPLAINED"
          headline="Why a Law Firm Website Is Different From a General Business Site — and What That Means for the Build"
          lead="A law firm website has a higher credibility threshold, more specific SEO requirements, bar advertising rules governing what you can claim, and a more complex intake process than most business types. Building one correctly requires understanding these requirements before touching a design tool — not discovering them after launch."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['LegalService Schema', 'Attorney Schema', 'Practice Area SEO', 'GBP Optimization', 'Intake Forms', 'Bar Compliance', 'Mobile-First', 'Core Web Vitals'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-fj-jet-blue/25 bg-fj-jet-blue/8 px-3 py-1 font-fj-mono font-semibold uppercase text-fj-jet-blue"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                Legal is the highest-CPC vertical in professional services search — at $7,559 average cost-per-click, the organic ranking that replaces a paid click is worth more in legal than in almost any other industry. That competitive intensity means the bar for what a law firm website needs to do is higher than a general business site — and the gap between a well-built site and a poorly built one shows up directly in consultation volume.
              </p>
              <div
                className="border-l-2 border-fj-jet-blue pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  70% of people searching for an attorney contact the first firm whose site earns their trust. That trust decision happens in the first 5 seconds — on mobile, on a slow connection, often in a stressful moment.
                </p>
              </div>
              <p>
                FactoryJet builds law firm websites with three primary goals: rank in local search for your specific practice areas and geography, establish credibility the moment a visitor arrives, and convert that visitor into a consultation request with as little friction as possible. The specific technical requirements for each: individual practice area pages with LegalService schema (ranking), authority-first design with professional photography and credentials (credibility), and multi-step intake forms with clear process expectations (conversion).
              </p>
              <p>
                For firms currently on FindLaw, Martindale, or Avvo subscription sites: you are paying a monthly fee for a template you don't own, designed identically to your competitors, that performs poorly on Core Web Vitals. We regularly help firms migrate off these platforms to custom sites — preserving their review history through Google Business Profile and rebuilding their search presence on a foundation they actually own. For firms needing a <a href="/us/services/website-redesign" className="text-fj-jet-blue underline underline-offset-2">full website redesign</a> from an existing template, we handle that migration as well.
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
                  Every Law Firm Site Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'Structure', tools: 'Individual practice area pages' },
                  { category: 'Schema', tools: 'LegalService + Attorney + LocalBusiness' },
                  { category: 'Profiles', tools: 'Attorney pages with credentials' },
                  { category: 'Intake', tools: 'Multi-step consultation form' },
                  { category: 'Local SEO', tools: 'GBP optimization guidance' },
                  { category: 'Compliance', tools: 'Bar advertising disclaimers' },
                  { category: 'Mobile', tools: 'Mobile-first, Core Web Vitals pass' },
                  { category: 'Analytics', tools: 'GA4 + consultation tracking' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-fj-jet-blue/50" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-fj-jet-blue" aria-hidden="true" />
                <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                  You own the site. No monthly subscription fees.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM WITH LEGAL WEBSITES (DARK) ────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE LEGAL WEBSITE PROBLEM"
          headline="A single 'Practice Areas' page cannot rank for 'personal injury attorney Austin' and 'criminal defense attorney Austin' simultaneously. Neither can any other page on your site."
          lead="Google's ranking system works at the page level, not the site level. If you want to rank for 6 different practice areas in your city, you need 6 pages — one for each — with content, schema, and internal linking dedicated to that specific service. Law firms with a single services page are effectively choosing not to compete for any individual practice area keyword. This is the most common and most expensive SEO mistake in legal web design."
          pillars={[
            {
              title: 'Legal template platforms are $500/month rent on a site you don\'t own',
              body: 'FindLaw, Martindale, Avvo, and their competitors offer subscription products that appear in attorney search results. What they don\'t tell you: you\'re renting a template identical to every other firm on the platform, your site disappears the moment you stop paying, and the platform owns the SEO authority you\'ve built. After five years of $500/month payments — $30,000 — you own nothing. A $4,500 custom site built by FactoryJet is an asset you own outright, with source code and design files delivered at handoff.',
            },
            {
              title: 'Mobile performance is a consultation problem, not just a ranking problem',
              body: 'Criminal defense clients search in urgent moments on their phones. Family law clients research late at night from mobile devices. Personal injury clients search immediately after accidents — often on slow connections. If your site takes 8 seconds to load on a 4G connection, displays a desktop layout that requires zooming, or buries the phone number in a cramped mobile header, you are losing consultations in the moments when prospective clients are most motivated to act. Mobile-first design and Core Web Vitals compliance aren\'t technical preferences — they\'re consultation protection.',
            },
            {
              title: 'Local pack ranking is determined before visitors see your site',
              body: 'The Google local pack (the map with 3 law firms at the top of search results) is the most-clicked area of the search results page for local legal searches — and it\'s determined almost entirely by Google Business Profile quality, not your website. Firms with complete, regularly updated GBPs — with photos, accurate hours, active review responses, and correct practice area categories — appear in the local pack. Those without accurate GBP information don\'t, regardless of website quality. FactoryJet optimizes GBP as part of every law firm website launch.',
            },
          ]}
        />

        {/* ── 6. WHAT WE BUILD FOR LAW FIRMS ───────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD FOR LAW FIRMS"
          headline="Six Essential Elements of a High-Performing Law Firm Website"
          lead="Each element serves a specific function in the ranking-to-conversion path. Here's what we build and why each one matters."
          sectors={LEGAL_SERVICES}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Legal SEO Audit to Live Law Firm Website — in 5 Structured Stages"
          lead="Every law firm website starts with understanding your market — who you compete with, what queries you should rank for, and where your current site is falling short. Design doesn't start until strategy is approved."
          stages={LEGAL_JOURNEY_STAGES}
          closingNote="5 STAGES · 4 WEEKS (SMALL FIRM) TO 14 WEEKS (LARGE FIRM) · FREE SEO AUDIT BEFORE ANY COMMITMENT"
        />

        {/* ── 8. US LEGAL MARKET CONTEXT ───────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US LEGAL WEB DESIGN MARKET"
          headline="Legal Is the Highest-Competition, Highest-Value Vertical in Local Search"
          leadParagraphs={[
            "At an average CPC of $7,559, legal keywords are the most expensive in Google Ads — which means the organic ranking that replaces a paid click is worth more in legal than in any other professional services category. Law firms that invest in proper website architecture for local SEO are systematically replacing $10,000+/month in ad spend with organic rankings that compound in value over time.",
            "The search data tells the same story: 'law firm website design' searches have grown +190% in the last 3 months, driven by attorneys who recognize that their current site — whether a FindLaw template, an outdated custom site, or a page builder build — is not competitive in their local market. The firms making this transition now are capturing organic positions before their competitors do the same.",
            "FactoryJet has delivered professional service websites for US firms across Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, and nationwide since 1999. We understand the local SEO dynamics specific to legal, the bar advertising rules that vary by state, and the trust-building requirements that make legal website design fundamentally different from other verticals. A law firm consultation is free. Come in and see what your current site is leaving on the table.",
          ]}
          stats={LEGAL_STATS}
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US Legal Agency vs. FindLaw/Martindale vs. Generic Freelancer"
          lead="Law firm website options vary dramatically in quality, ownership terms, and long-term value. Here's the honest comparison."
          pullQuote={{
            stat: '60–70%',
            caption: 'cheaper than a comparable US legal web design agency — same engineering depth, legal schema expertise, India-based cost structure.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="FindLaw/Martindale subscription pricing ranges from $400–$2,000/month — you never own the site. FactoryJet fixed-price contracts cover full scope; you own the code and design files at handoff. US agency prices reflect typical legal vertical market rates as of 2026."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Fixed-Price Law Firm Website Design — Know the Cost Before You Commit"
            lead="No hourly billing. No monthly subscriptions on a site you don't own. Fixed scope, fixed price, and a site your firm owns outright at handoff."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. Hosting ($30–$150/month), domain registration, and third-party integrations (booking software, live chat) are separate. You own all source code, design files, and CMS credentials at handoff — no ongoing payments to FactoryJet required after launch."
          />
        </div>

        {/* ── 11. PRACTICE AREAS WE DESIGN FOR ─────────────────────────────── */}
        <IndustriesGrid
          eyebrow="PRACTICE AREAS WE DESIGN FOR"
          headline="Law Firm Website Design for Every Major Practice Area"
          lead="Each practice area has different search intent, different trust signals, and different conversion dynamics. We design for yours specifically."
          sectors={PRACTICE_AREAS}
        />

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 150+ reviews from US businesses and professional practices."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Every Question Attorneys Ask Before Starting a Website Project — Answered Straight"
          lead="No agency spin. No legal jargon. Clear answers to what law firms actually need to know before committing to a website project."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE LEGAL SEO AUDIT"
          headline="Book a Free Legal SEO Audit — Walk Away With a Clear Picture of Where You Stand"
          sub="In 30 minutes, we'll audit your current site's local search performance, analyze the top-ranking competing firms in your market, identify the practice area pages and schema gaps that are costing you organic traffic, and tell you exactly what it costs to fix. No agency pitch. No retainer required to get started. Just a straight assessment from a team that's built law firm websites for US attorneys for 25 years."
          primaryCta={{ label: 'Book Your Free Legal SEO Audit', href: '/contact' }}
          secondaryCta={{ label: 'See All Website Redesign Services', href: '/us/services/website-redesign' }}
          objectionHandler="Solo firm starts at $2,499. You own everything at handoff. Free audit first. No commitment until you\'ve seen the plan."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
