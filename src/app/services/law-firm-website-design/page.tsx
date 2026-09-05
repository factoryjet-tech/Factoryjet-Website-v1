import type { Metadata } from 'next';
import Image from 'next/image';
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
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Law Firm Website Design for US Attorneys | FactoryJet',
  description:
    'Professional law firm websites that rank in local search and convert visitors into consultations. Fixed-price, milestone-paid, scoped to your build.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Law Firm Website Design for US Attorneys | FactoryJet',
    description:
      'Professional attorney website design built to rank, build trust, and generate consultation requests. FactoryJet',
    url: 'https://factoryjet.com/services/law-firm-website-design',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Law Firm Website Design USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Firm Website Design for US Attorneys | FactoryJet',
    description:
      'Law firm websites that rank locally, build trust, and convert visitors into consultations. FactoryJet Free consultation.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/law-firm-website-design',
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
   JSON-LD Schema, faqSchema is declared after FAQ_ITEMS below, since it
   derives mainEntity from that array via .map()
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/law-firm-website-design#webpage',
  url: 'https://factoryjet.com/services/law-firm-website-design',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Website Design Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Law Firm Website Design',
  description:
    'FactoryJet designs professional law firm websites for US attorneys and legal practices, custom design, practice area SEO, attorney profiles, consultation intake forms, and local schema markup. fixed-price, milestone-paid.',
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Law Firm Website Design', url: 'https://factoryjet.com/services/law-firm-website-design' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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

const LEGAL_SERVICES = [
  {
    name: 'Practice Area Pages.',
    description:
      'The single highest-ROI investment in a law firm website. Each practice area you want to rank for needs its own dedicated page. We design practice area pages with keyword-targeted content, local schema markup, and FAQ sections. Clear call-to-action buttons guide visitors toward consultations.',
    example: 'Firms with dedicated practice area pages capture 3-5× more local search queries.',
    linkLabel: 'Get a free SEO audit.',
    linkHref: '/contact',
  },
  {
    name: 'Attorney Profile Pages.',
    description:
      'Attorney profiles are the second most-visited pages on legal websites. We design attorney pages that function as trust anchors. They highlight professional photography, credentials, bar admissions, case outcomes, and verified testimonials. Each attorney bio includes a direct consultation booking form.',
    example: 'Authoritative attorney profile pages accelerate trust and boost consultation requests.',
    linkLabel: 'See example structure.',
    linkHref: '/contact',
  },
  {
    name: 'Consultation Intake Optimization.',
    description:
      'Most generic law firm contact forms create uncertainty. We build multi-step intake flows tailored to specific practice areas. Forms capture key details for legal intake teams and set clear response expectations. This reduces drop-off and increases consultation requests.',
    example: 'Multi-step intake forms convert 40-60% more consultation requests than basic forms.',
    linkLabel: 'Book a strategy call.',
    linkHref: '/contact',
  },
  {
    name: 'Local Legal SEO Architecture.',
    description:
      'Ranking for local legal searches requires dedicated search architecture. We implement LegalService, Attorney, and LocalBusiness schema markup. We build location pages for multi-office practices. We connect Google Business Profile data and optimize internal links to grow search authority.',
    example: 'Firms with complete legal schema rank in the local pack 60% more often.',
    linkLabel: 'Get a free local SEO audit.',
    linkHref: '/contact',
  },
  {
    name: 'Legal Blog & Thought Leadership.',
    description:
      'A targeted legal blog generates compounding organic search traffic over time. We design content architectures that address specific client questions. Articles link to relevant practice areas. They establish your attorneys as authoritative voices in their fields.',
    example: 'Targeted legal blogs generate 3-4× more organic search traffic within 12 months.',
    linkLabel: 'See content strategy services.',
    linkHref: '/contact',
  },
  {
    name: 'Contingency Fee & Pricing Pages.',
    description:
      'Prospective clients search for fee transparency before contacting a lawyer. We design clear fee structure pages explaining contingency arrangements, hourly rates, and retainers. Plain-language pricing reduces client hesitation and increases inquiry conversion.',
    example: 'Transparent fee pages increase consultation request rates by 25-35% across practice areas.',
    linkLabel: 'Start a conversation.',
    linkHref: '/contact',
  },
];

const LEGAL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Legal SEO & Competitor Audit',
    description:
      'We audit your current local search performance and study competing firms. We identify practice area page gaps and uncover technical SEO barriers. You receive a comprehensive diagnosis before making any project commitment.',
  },
  {
    number: '02',
    title: 'Site Architecture & Content Strategy',
    description:
      'We define complete sitemaps, practice area hierarchies, and attorney profile structures. We prepare keyword blueprints, internal linking plans, and JSON-LD schema models before visual design starts.',
  },
  {
    number: '03',
    title: 'Visual Design | Authority-First',
    description:
      'We establish visual authority using clean legal typography and structured whitespace. Credibility badges, bar association credentials, and client testimonials are placed strategically to maximize trust.',
  },
  {
    number: '04',
    title: 'Development & Schema Implementation',
    description:
      'We code custom, high-speed templates for practice areas and attorney bios. We embed LegalService and LocalBusiness schema markup. Every page is optimized to pass Core Web Vitals assessments.',
  },
  {
    number: '05',
    title: 'Launch, Verification & Local SEO Setup',
    description:
      'We perform thorough cross-device QA and implement 301 redirect maps. We optimize Google Business Profile categories and submit sitemaps to Search Console. We also provide CMS training for your legal staff.',
  },
];

const LEGAL_STATS = [
  {
    // Corrected 2026-08-04. The page previously showed $7,559, which is not a
    // cost-per-click for any keyword. WordStream benchmarks the Attorneys and
    // Legal Services category at roughly $8.58 average CPC, the highest of any
    // industry, which is the real and still-striking number.
    value: '$8.58',
    label: 'average CPC for the Attorneys & Legal Services category. The highest of any industry in Google Ads.',
    sourceUrl: 'https://www.wordstream.com/blog/ws/2016/02/29/google-adwords-industry-benchmarks',
    sourceLabel: 'WordStream',
  },
  {
    value: '62%',
    label: 'of people searching for a lawyer start on Google. 70% contact the firm on the first page they visit.',
    sourceUrl: 'https://www.lscp.net/pages/trends/',
    sourceLabel: 'Legal Services Consumer Panel',
  },
  {
    value: '+190%',
    label: 'growth in "law firm website design" searches over 3 months. Fastest-growing legal services vertical in organic search.',
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
    feature: 'Starting price.',
    values: ['Fixed, scoped to your build.', 'Several times more.', 'Recurring monthly fee (you never own it).', 'Varies widely.'],
  },
  {
    feature: 'You own the website.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="yes" />,
    ],
  },
  {
    feature: 'Practice area pages (individual, keyword-targeted).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Legal schema markup (LegalService, Attorney).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: 'Core Web Vitals pass (mobile).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Consultation intake optimization.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="gen" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="gen" kind="partial" />,
    ],
  },
  {
    feature: 'Legal advertising disclaimer implementation.',
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
    name: 'Solo & Small Firm.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'A complete professional website for solo attorneys and small practices. Up to 10 pages including dedicated practice areas, attorney bio, intake form, and on-page SEO. Built to outrank template directories and FindLaw profiles.',
    features: [
      'Up to 10 pages (Home, Practice Areas, Attorney Profile, Blog, Contact).',
      'Custom design, no legal website templates.',
      'Up to 3 individual practice area pages (keyword-targeted).',
      'Attorney profile with credentials, bar admissions, and biography.',
      'Consultation request form with intake routing.',
      'LegalService + Attorney JSON-LD schema markup.',
      'On-page SEO: meta tags, heading structure, local keywords.',
      'Google Business Profile optimization guidance.',
      'Mobile-first, Core Web Vitals pass.',
      '14-day post-launch support.',
    ],
    cta: { label: 'Book a Legal SEO Audit.', modal: true, region: 'us' },
  },
  {
    name: 'Full Law Firm Website.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'A comprehensive website for multi-attorney practices. Up to 30 pages with individual attorney profiles, full practice area architecture, legal blog, and intake routing. The standard choice for firms expanding local search share.',
    features: [
      '15-30 pages with full content architecture.',
      'Up to 8 individual practice area pages (keyword and location targeted).',
      'Multiple attorney profile pages with credentials and testimonials.',
      'Legal blog with category architecture for SEO.',
      'Multi-step consultation intake form with case pre-qualification.',
      'Full local SEO schema (LegalService, Attorney, LocalBusiness).',
      'Google Business Profile integration and optimization.',
      'City/service area landing pages (up to 3 locations).',
      'Two design revision rounds included.',
      '30-day post-launch support.',
    ],
    cta: { label: 'Get a Custom Quote.', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Large Firm & Multi-Location.',
    priceRange: 'Fixed price, scoped to your build.',
    description:
      'An enterprise web presence for large law firms and multi-location practices. Features 30+ pages, city landing pages, custom CMS workflows, and advanced multi-step intake logic across regional markets.',
    features: [
      '30+ pages across practice areas, attorneys, and locations.',
      'City-specific landing pages for every service area.',
      'Custom CMS for attorney additions and practice area updates.',
      'Complex multi-step intake with routing to practice-specific teams.',
      'Full schema implementation across all page types.',
      'Internal linking architecture designed for SEO authority flow.',
      'Multi-location Google Business Profile optimization.',
      'Performance-optimized for large content scale.',
      'Dedicated project manager throughout.',
      '60-day post-launch support and iteration window.',
    ],
    cta: { label: 'Schedule a Firm Consultation.', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'what-law-site-needs', label: 'What a Law Firm Site Needs.' },
  { key: 'process', label: 'Process & Timeline.' },
  { key: 'pricing', label: 'Pricing & Value.' },
  { key: 'seo', label: 'Legal SEO.' },
  { key: 'trust', label: 'Trust & Compliance.' },
];

const FAQ_ITEMS = [

  /* ── What a Law Firm Site Needs ── */
  {
    category: 'what-law-site-needs',
    question: 'What should a law firm website include?',
    answer:
      'A law firm website needs to accomplish three primary goals. It must rank in local search. It must establish credibility immediately. It must also convert visitors into consultation requests. Core pages include a focused homepage with a clear practice area statement. Each practice area requires its own dedicated page. Attorney profile pages function as trust anchors with credentials, bar admissions, headshots, case results, and verified testimonials. A multi-step consultation intake form pre-qualifies prospective clients and sets expectations. Supporting elements include local schema markup, Google Business Profile integration, case result pages, and clear fee structures.',
  },
  {
    category: 'what-law-site-needs',
    question: 'How is a law firm website different from a general business website?',
    answer:
      'Several specific legal requirements exist. Bar advertising rules strictly govern what you can claim. You cannot use the word "specialist" without official certification. Past case results require prominent past-performance disclaimers. Geographic practice claims must be verified. In addition, the trust threshold is far higher than most service businesses. Clients are making life-altering decisions about their livelihood, freedom, or family. Credibility signals must work much harder. Schema markup requires dedicated LegalService, Attorney, and BarAdmission types. Finally, intake forms must capture case type, jurisdiction, and urgency before any attorney commits time. We build all of these requirements into every law firm website.',
  },
  {
    category: 'what-law-site-needs',
    question: 'Do I need a separate page for each practice area?',
    answer:
      'Yes. Dedicated practice area pages are essential. Google ranks pages for distinct keyword intents. A single page cannot rank for multiple legal specialties at once. Each practice area requires its own dedicated page. We include keyword-targeted content, practice FAQs, schema markup, and internal links. Firms switching to dedicated pages see ranking gains within 60 to 90 days. The clear site hierarchy helps search engines index each practice accurately.',
  },
  {
    category: 'what-law-site-needs',
    question: 'How important is mobile optimization for a law firm website?',
    answer:
      'Mobile optimization is critical for attorney websites. More than 60% of legal searches now happen on mobile devices. Google also uses mobile page experience as a primary ranking signal. In urgent fields like criminal defense or family law, prospective clients search from mobile phones during emergencies. A site that takes eight seconds to load loses consultations immediately. Pinch-to-zoom layouts and buried contact numbers drive clients straight to competing firms. Every FactoryJet law firm site is built mobile-first. Each build passes Google Core Web Vitals assessments before launch.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'What does the law firm website design process look like?',
    answer:
      'Our build process follows five structured stages. Stage one is the Legal SEO & Competitor Audit. We analyze your local rankings, study competing practices, and identify content gaps. Stage two covers Site Architecture & Content Strategy. We define sitemaps, practice area keyword targets, attorney profile templates, and schema types. Stage three is Visual Design. We deliver authoritative, custom design concepts across two feedback rounds. Stage four is Development & Schema Implementation. We code the site with LegalService and LocalBusiness schema while optimizing Core Web Vitals. Stage five handles Launch, 301 redirects, Google Business Profile optimization, and CMS training.',
  },
  {
    category: 'process',
    question: 'How long does it take to build a law firm website?',
    answer:
      'A solo or small firm website with up to ten pages takes four to six weeks. A full multi-attorney firm site with 15 to 30 pages takes six to ten weeks. Large practices with multiple office locations or complex intake workflows require 10 to 14 weeks. The primary timeline factor is content preparation. Attorney biographies and professional headshots often take the longest to assemble. We identify these needs during kickoff. This allows photography and bio drafts to proceed in parallel with custom design work.',
  },
  {
    category: 'process',
    question: 'What do I need to provide for a law firm website project?',
    answer:
      'We require five core assets from your firm. First, professional attorney photography is essential. Stock photos of models in suits undermine trust immediately. Second, attorney bios and bar credentials provide necessary verification. Third, we need practice area outlines in your voice. Our team structures the copy and handles on-page SEO. Fourth, we need case outcomes or testimonials alongside state bar disclaimers. Finally, we need a single designated point of contact with decision authority. This structure prevents committee delays and keeps delivery on schedule.',
  },
  {
    category: 'process',
    question: 'Can you redesign my existing law firm website without losing my Google rankings?',
    answer:
      'Yes. Preserving search equity is our top priority during any redesign. We begin with a complete pre-launch crawl of all ranking URLs. We record every keyword position and map existing pages to new destinations. We create one-to-one 301 redirects for any modified URL structures. We preserve proven metadata, page titles, and body content unless improvements are approved. After launch, we monitor search console metrics daily for 30 days. Transitioning to dedicated practice area URLs consistently improves overall organic search rankings.',
  },

  /* ── Pricing & Value ── */
  {
    category: 'pricing',
    question: 'How much does a law firm website design cost?',
    answer:
      'FactoryJet delivers law firm website design on a transparent, fixed-price basis. Every project is scoped to your exact specifications. Key cost drivers include total page count, practice area depth, attorney profiles, and multi-location needs. Custom intake logic and legal blog setups also factor into scope. We provide a guaranteed upfront quote following a complimentary discovery call. Our fixed fees come in well below traditional legal agency hourly rates. Our engineering team brings over 12 years of specialized legal web design experience to every build.',
  },
  {
    category: 'pricing',
    question: 'Is a custom law firm website worth the cost vs. FindLaw or Martindale?',
    answer:
      'Yes, for three fundamental reasons. First is ownership. FindLaw and Martindale platforms charge ongoing monthly fees for templates you never own. If you cancel your subscription, your website disappears completely. Second is differentiation. Directory platforms force competing attorneys into identical layouts. A custom site establishes a distinctive brand. Third is technical performance. Directory templates rarely pass modern Core Web Vitals checks on mobile devices. Poor technical metrics harm search visibility. A custom site is an appreciating firm asset with complete source code ownership.',
  },
  {
    category: 'pricing',
    question: 'What is the ROI of a professional law firm website?',
    answer:
      'Legal services offer exceptional return on investment due to high case values. Prospective clients searching online have urgent, high-intent needs. A single personal injury or estate retainer can generate $5,000 to $50,000 in legal fees. Increasing inquiries by 40% produces substantial revenue. Moving from 10 to 14 monthly inquiries yields two extra retained clients, covering the build quickly. Most firms achieve full cost recovery within ninety days.',
  },

  /* ── Legal SEO ── */
  {
    category: 'seo',
    question: 'How do I rank my law firm on Google?',
    answer:
      'Local law firm search rankings depend on four integrated components. First, you need individual practice area pages. Each page must target specific city and legal service terms. Second, structured schema markup is essential. Schema explicitly informs search crawlers about attorney credentials and locations. Third, Google Business Profile optimization drives local map pack rankings. Active review management, verified categories, and accurate hours are critical. Fourth, mobile performance and Core Web Vitals ensure rapid page loading. FactoryJet implements all four components across every client build.',
  },
  {
    category: 'seo',
    question: 'What is legal schema markup and why does my law firm website need it?',
    answer:
      'Schema markup is structured code embedded directly into your website pages. It provides search engines with explicit, machine-readable data about your legal practice. Essential schemas include LegalService for practice areas, Attorney for bar numbers, and LocalBusiness for physical offices. Without schema, search engines must guess your specialties based on page text alone. Explicit structured markup eliminates ambiguity. It helps search engines rank your firm for specific legal queries. It also enhances visibility in rich search snippets.',
  },
  {
    category: 'seo',
    question: 'How long does it take for a new law firm website to rank on Google?',
    answer:
      'Ranking timelines depend on domain age and local competition. Completely new domains usually require six to twelve months of active publishing and citation building. Redesigned websites with existing domain authority often see noticeable improvements within 60 to 90 days. Restructuring generic pages into dedicated practice area URLs accelerates indexing. Google Business Profile map pack positions can improve in four to eight weeks with consistent reviews. We establish realistic ranking benchmarks during our initial discovery audit.',
  },

  /* ── Trust & Compliance ── */
  {
    category: 'trust',
    question: 'Does a law firm website need advertising disclaimers?',
    answer:
      'Yes. State bar associations enforce strict advertising ethics rules for attorney websites. Case results and testimonials require visible disclaimers. Past outcomes cannot guarantee future results. Terms like "expert" or "specialist" are prohibited unless formal board certification exists. Sites must also clarify exact jurisdictions of bar licensure. FactoryJet builds standard ethical disclaimer modules into footers, intake forms, and case result templates. We implement the technical structure while you verify local bar compliance.',
  },
  {
    category: 'trust',
    question: 'How is FactoryJet different from a US legal web design agency?',
    answer:
      'FactoryJet differs in three meaningful ways. First is our transparent pricing model. We work on fixed-price, milestone-based contracts with no open-ended billing. Traditional legal agencies frequently bill high hourly retainers. Second is our specialized technical focus. We possess over 12 years of experience designing high-speed legal websites and schema architectures. Third is true client ownership. We deliver complete source code, design files, and hosting credentials upon completion. You never pay monthly licensing fees to maintain access to your website.',
  },
  {
    category: 'trust',
    question: 'Can you help a law firm without an existing website?',
    answer:
      'Yes. We regularly build new websites for launching practices and spin-off partnerships. Brand-new sites benefit from clean architecture without legacy technical debt or broken redirect chains. The main consideration is building initial search authority. New domains require disciplined local SEO, directory citations, and content publishing to build trust. We guide you through Google Business Profile verification, legal directory listings, and review acquisition. This foundation helps new firms establish early local search traction efficiently.',
  },
  {
    category: 'trust',
    question: 'Does the attorney need to be involved in the website design process?',
    answer:
      'We respect attorney schedules and streamline partner involvement down to three key stages. First is the initial kickoff meeting to define practice goals and firm positioning. Second is visual design review to confirm branding and page layouts. Third is final content approval to review attorney credentials and practice descriptions. Routine communications and asset collection can be handled by practice administrators or legal assistants. This process protects partner billable hours while ensuring complete ethical and stylistic accuracy.',
  },
  {
    category: 'trust',
    question: 'Can you build a law firm website with a client intake form, client portal, or scheduling integration?',
    answer:
      'Yes. Purpose-built client intake significantly increases website conversion rates. We design multi-step intake workflows with conditional question logic tailored by practice area. Personal injury inquiries see different fields than corporate filings. We integrate consultation scheduling tools like Calendly or Cal.com directly into booking flows. We also connect secure client portal solutions including Clio, MyCase, or custom authenticated portals. Furthermore, intake submissions can link directly to Clio or Lawmatics CRM records. This automation eliminates manual data entry and improves response speed.',
  },
  {
    category: 'trust',
    question: 'What ongoing support does FactoryJet offer after a law firm website launches?',
    answer:
      'Every project includes 30 days of comprehensive post-launch support. We handle bug fixes, minor content tweaks, and team onboarding. Following launch, we offer optional monthly maintenance arrangements. These plans cover core security updates, daily offsite backups, and uptime monitoring. We also track Google Search Console for crawl anomalies and provide ongoing speed audits. You retain full site ownership at all times. Retaining our ongoing maintenance is entirely optional and never required.',
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
  name: 'How FactoryJet builds your law firm website',
  description: 'Our proven 7-day process for delivering professional, conversion-optimized law firm websites for US attorneys.',
  // Aligned 2026-08-04 to the page's own band: 4 weeks (small firm) to
  // 14 weeks (large firm). P7D contradicted the visible process and FAQ.
  totalTime: 'P98D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Stage 1 | Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Stage 2 | Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Stage 3 | Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Stage 4 | Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Stage 5 | Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function LawFirmWebsiteDesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="law-firm-website-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="law-firm-website-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="law-firm-website-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="law-firm-website-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'Law Firm Design', href: '/services/law-firm-website-design' },
          { label: 'Website Redesign', href: '/services/website-redesign' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Free Legal SEO Audit', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_law_firm_website_design_hero" />}
          eyebrow="LAW FIRM WEBSITE DESIGN · USA."
          headline="Law Firm Websites That Rank Locally and Convert Visitors Into Consultations."
          lead="62% of people searching for an attorney start on Google. 70% contact the first firm whose site earns their trust. FactoryJet designs law firm websites for US attorneys. We build dedicated practice area pages, trustworthy attorney bios, and intake flows that convert. Fixed-price, milestone-paid, scoped to your build."
          secondaryCta={{ label: 'See Pricing.', href: '#pricing' }}
          trustItems={[
            '500+ professional service sites delivered.',
            'Legal schema markup on every build.',
            'Fixed price, scoped to your build.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
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
                    before: 'Single "Practice Areas" page. Google cannot rank you for individual legal services.',
                    after: 'Individual page per practice area. Ranked for keyword and location queries.',
                  },
                  {
                    before: 'FindLaw template site. A monthly fee for a site you never own, identical to competitors.',
                    after: 'Custom site you own outright. Differentiated design, full local schema, faster page load.',
                  },
                  {
                    before: 'Generic contact form. Visitors do not know what to expect and abandon mid-fill.',
                    after: 'Multi-step intake. Pre-qualifies case type, sets expectations, and boosts conversion rates.',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-red-400">Current Reality</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#B23E13]">After FactoryJet</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/card-law-firm.webp"
          imageAlt="Professional law firm website homepage on a MacBook. FactoryJet law firm website design."
          stats={[
            { value: '500+', label: 'Professional Sites Built.' },
            { value: '7 Days', label: 'Delivery Guarantee.' },
            { value: 'Fixed Price', label: 'Scoped to Your Build, Confirmed Upfront.' },
            { value: '10+ Yrs', label: 'Legal Web Expertise.' },
          ]}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE." />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ professional service sites. 12 years serving US law firms and attorneys."
        />

        {/* ── 4. WHAT MAKES LEGAL DIFFERENT ────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="LAW FIRM WEBSITE DESIGN EXPLAINED"
          headline="Why a Law Firm Website Is Different From a General Business Site. What That Means for the Build."
          lead="A law firm website has a higher credibility threshold and specific SEO requirements. State bar advertising rules strictly govern what you can claim. The consultation intake process is also more complex than standard businesses. Building a site correctly requires understanding these rules before design begins."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['LegalService Schema', 'Attorney Schema', 'Practice Area SEO', 'GBP Optimization', 'Intake Forms', 'Bar Compliance', 'Mobile-First', 'Core Web Vitals'].map((tool) => (
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
                Legal is the highest-CPC vertical in professional services search. It averages roughly $8.58 per click according to WordStream data. An organic ranking that replaces a paid click provides immense long-term value. That competitive intensity means the bar for a law firm website is exceptionally high. The gap between a well-built site and a template shows up directly in consultation volume.
              </p>
              <div
                className="border-l-2 border-[#F05A28] pl-5 py-1"
                aria-hidden
              >
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  70% of people searching for an attorney contact the first firm whose site earns their trust. That trust decision happens in the first 5 seconds on mobile. It often happens in a stressful moment.
                </p>
              </div>
              <p>
                FactoryJet builds law firm websites with three primary goals. First, rank in local search for your specific practice areas. Second, establish immediate credibility. Third, convert visitors into consultations with low friction. Dedicated practice area pages with LegalService schema support rankings. Authority-first design with verified credentials builds credibility. Multi-step intake forms ensure conversion efficiency.
              </p>
              <p>
                Firms on FindLaw, Martindale, or Avvo pay monthly fees for templates they never own. These platforms perform poorly on Core Web Vitals and lack distinctive design. We regularly help firms migrate off these platforms to custom websites. We preserve your review history through Google Business Profile. We rebuild your search presence on an owned foundation. For firms needing a <a href="/services/website-redesign" className="text-[#B23E13] underline underline-offset-2">full website redesign</a> from an existing template, we handle that migration completely.
              </p>

              <div style={{ marginTop: '28px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E5E0', maxWidth: 860 }}>
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet lead designer conducting a live legal website UX audit and technical SEO review"
                  width={860}
                  height={480}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
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
                  Every Law Firm Site Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'Structure', tools: 'Individual practice area pages.' },
                  { category: 'Schema', tools: 'LegalService + Attorney + LocalBusiness.' },
                  { category: 'Profiles', tools: 'Attorney pages with credentials.' },
                  { category: 'Intake', tools: 'Multi-step consultation form.' },
                  { category: 'Local SEO', tools: 'GBP optimization guidance.' },
                  { category: 'Compliance', tools: 'Bar advertising disclaimers.' },
                  { category: 'Mobile', tools: 'Mobile-first, Core Web Vitals pass.' },
                  { category: 'Analytics', tools: 'GA4 + consultation tracking.' },
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
                  You own the site. No monthly subscription fees.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM WITH LEGAL WEBSITES (DARK) ────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE LEGAL WEBSITE PROBLEM."
          headline="A single 'Practice Areas' page cannot rank for 'personal injury attorney Austin' and 'criminal defense attorney Austin' simultaneously. Neither can any other page on your site."
          lead="Google ranks pages individually, not whole sites at once. To rank for six distinct practice areas in your market, you need six dedicated pages. Each page must feature tailored content, schema markup, and internal links. Law firms with a single services page fail to compete for individual keywords. This remains the most costly mistake in legal website architecture."
          pillars={[
            {
              title: 'Legal template platforms are monthly rent on a site you do not own.',
              body: 'FindLaw, Martindale, and Avvo offer subscription products for attorney searches. However, you rent a template identical to competing firms. Your site disappears the moment you stop paying. After years of monthly fees, you build zero asset equity. A custom site built by FactoryJet is an asset you own outright. We deliver complete source code and design files at handoff.',
            },
            {
              title: 'Mobile performance is a direct consultation issue, not just a technical metric.',
              body: 'Criminal defense and personal injury clients search during stressful moments on mobile phones. If your site takes eight seconds to load on a mobile connection, clients click away. Desktop layouts that require zooming or bury phone numbers lose high-value cases. Mobile-first engineering and Core Web Vitals compliance protect your consultation pipeline.',
            },
            {
              title: 'Local pack ranking is determined before visitors ever click your website.',
              body: 'The Google map pack is the most-clicked area of local search results. Map rankings depend on Google Business Profile quality and review signals. Firms with complete, verified profiles and prompt review responses dominate local search. Incomplete listings struggle to gain visibility. FactoryJet optimizes your GBP profile as an essential component of every launch.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Legal SEO Audit to Live Law Firm Website: Five Structured Stages."
          lead="Every law firm website starts with understanding your market. We study your competition, keyword opportunities, and current weaknesses. Design begins only after strategy is approved."
          stages={LEGAL_JOURNEY_STAGES}
          closingNote="5 STAGES. 4 WEEKS (SMALL FIRM) TO 14 WEEKS (LARGE FIRM). FREE SEO AUDIT BEFORE ANY COMMITMENT."
        />

        {/* ── 7. WHAT WE BUILD FOR LAW FIRMS ───────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT WE BUILD FOR LAW FIRMS"
          headline="Six Essential Elements of a High-Performing Law Firm Website."
          lead="Each element serves a specific function in the ranking-to-conversion path. Here is what we build and why each element matters."
          sectors={LEGAL_SERVICES}
        />

        {/* ── 8. US LEGAL MARKET CONTEXT ───────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US LEGAL WEB DESIGN MARKET."
          headline="Legal Is the Highest-Competition, Highest-Value Vertical in Local Search."
          leadParagraphs={[
            "Legal keywords average $8.58 per click in Google Ads. Organic rankings replacing paid ads deliver immense cost savings. Proper site architecture drives local SEO success. Firms replace high ad spend with compounding search authority.",
            "The search data tells the same story. Legal website design searches have grown +190% over recent months. Attorneys recognize that template platforms and outdated sites fail to compete in local markets. Proactive firms capture organic search positions before their competitors take action.",
            "FactoryJet delivers professional service websites for US firms nationwide. We serve practices in Austin, Miami, Denver, Nashville, Charlotte, and beyond. We understand local legal SEO dynamics and bar compliance rules. Our initial discovery audit is completely free. We reveal where your current website leaves money on the table.",
          ]}
          stats={LEGAL_STATS}
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 my-10">
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E5E0', maxWidth: 860, margin: '0 auto' }}>
            <Image
              src="/images/services/healthcare-seo-map-pack.webp"
              alt="Local legal search map pack rankings and Google Business Profile visibility audit"
              width={860}
              height={480}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* ── 8B. INTERACTIVE VALUE ESTIMATOR ──────────────────────────────── */}
        <section className="bg-[#FFF8F5] py-16 md:py-24 border-y border-[#E7DED6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider text-[#F05A28] uppercase font-fj-mono">
                Interactive Consultation & Revenue Estimator.
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F0F12] sm:text-4xl font-fj-display">
                Estimate Your Law Firm Website ROI.
              </h2>
              <p className="mt-4 text-lg text-[#333333] font-fj-body">
                Calculate estimated organic search traffic value. Project consultation request lift and client retainer payback from an authoritative practice website.
              </p>
            </div>
            <WebDesignValueCalculator region="us" />
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE."
          headline="FactoryJet vs. US Legal Agency vs. FindLaw/Martindale vs. Generic Freelancer."
          lead="Law firm website options vary dramatically in quality, ownership terms, and long-term value. Here is an honest comparison."
          pullQuote={{
            stat: 'Fixed Price.',
            caption: 'Milestone-paid websites with full code ownership. Deep legal schema expertise. Predictable delivery from quote to launch.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="FindLaw and Martindale charge recurring monthly subscriptions where you never own the site. FactoryJet fixed-price contracts cover full scope. You own all code and design files at handoff. Traditional agency rates reflect typical legal vertical market averages."
        />

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING."
            headline="Fixed-Price Law Firm Website Design: Know the Cost Before You Commit."
            lead="No hourly billing. No monthly subscriptions on a site you do not own. Fixed scope, fixed price, and a site your firm owns outright at handoff."
            tiers={PRICING_TIERS}
            footnote="All prices in USD. A small monthly hosting fee, domain registration, and third-party integrations are separate. You own all source code, design files, and CMS credentials at handoff. No ongoing payments to FactoryJet are required after launch."
          />
        </div>

        {/* ── 12. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY."
          headline="Rated 4.9/5 on Google across 500+ projects."
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Frequently Asked Questions: Law Firm Website Design Answered Straight."
          lead="No agency spin. No legal jargon. Clear answers to what law firms actually need to know before committing to a website project."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related Reading, internal linking to blog posts */}
        <section className="py-10 bg-[#FAFAF7]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-widest mb-3">Related Reading.</p>
            <h2 className="text-2xl font-bold text-[#0F0F12] mb-6">Keep learning before you commit.</h2>
            <div className="grid grid-cols-1">
              <a href="/blog/nyc-b2b-corporate-web-design-guide-2026" className="block p-5 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#F05A28] transition-colors">
                <p className="text-sm font-semibold text-[#0F0F12] leading-snug">NYC B2B corporate web design buyer guide for 2026.</p>
              </a>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="START WITH A FREE LEGAL SEO AUDIT."
          headline="Book a Legal SEO Audit and Walk Away With a Clear Picture of Where You Stand."
          sub="In 30 minutes, we audit your local search rankings. We analyze top-ranking competitors in your market. We identify practice area page gaps and missing schema markup. You receive an exact quote to fix every issue. No sales pitch or retainers are required. Just an honest evaluation from a team with 12 years of legal web experience."
          primaryCta={{ label: 'Book Your Free Legal SEO Audit.', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See All Website Redesign Services.', href: '/services/website-redesign' }}
          objectionHandler="Fixed price, scoped to your build. You own everything at handoff. Free audit first. No commitment until you have seen the plan."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

