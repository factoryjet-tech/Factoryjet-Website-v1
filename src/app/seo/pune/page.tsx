import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { seoCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

export const metadata: Metadata = {
  title: 'SEO Company in Pune | Best SEO Services Pune | FactoryJet',
  description:
    'Looking for the best SEO company in Pune? FactoryJet delivers SEO services in Pune, technical SEO, local SEO, IT & auto B2B SEO, ecommerce SEO for Hinjewadi, Kharadi, Baner, and all of Pune. No long contracts. Book a free call.',
  keywords: [
    'seo company in pune',
    'seo company pune',
    'seo agency pune',
    'seo services in pune',
    'best seo company in pune',
    'seo expert pune',
    'digital marketing company in pune',
    'local seo pune',
    'ecommerce seo pune',
    'hinjewadi seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Pune | Best SEO Services | FactoryJet',
    description:
      'Expert SEO services in Pune, local SEO, technical SEO, IT & auto B2B SEO, ecommerce SEO. 500+ businesses, 4.9-star rating. No long contracts. Serving Hinjewadi, Kharadi, Baner, Koregaon Park.',
    url: 'https://factoryjet.com/seo/pune',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Pune' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Pune | FactoryJet',
    description: 'Expert SEO in Pune for IT, auto, manufacturing, real estate, and local businesses. No lock-in. Book a free SEO check.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/pune', languages: seoCityAlternatesIN['pune'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/pune#webpage',
  url: 'https://factoryjet.com/seo/pune',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/pune#localbusiness',
  name: 'FactoryJet | SEO Company in Pune',
  description:
    'FactoryJet provides SEO services in Pune for IT companies, automotive suppliers, manufacturing firms, real estate developers, education businesses, and local service providers across Hinjewadi, Kharadi, Baner, Koregaon Park, Viman Nagar, Pimple Saudagar, and Wakad.',
  url: 'https://factoryjet.com/seo/pune',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Hinjewadi' },
    { '@type': 'City', name: 'Kharadi' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/pune#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Pune by FactoryJet',
  description:
    'SEO services in Pune for IT companies, auto suppliers, manufacturing firms, real estate developers, education institutions, and local businesses. Serving Hinjewadi, Kharadi, Baner, Koregaon Park, Viman Nagar, Wakad, Pimple Saudagar, and Pimpri-Chinchwad.',
  url: 'https://factoryjet.com/seo/pune',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'City', name: 'Pune' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/pune#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/pune',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const PUNE_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Pune SEO audit | see exactly where you stand and why',
    description:
      'We audit your site across your specific Pune search terms: IT services, auto suppliers, real estate, education, or local services. You get a clear picture of who ranks above you, what their content and link advantages are, and a prioritised list of what to fix first. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical foundation | Pune runs on mobile',
    description:
      'Hinjewadi startup teams, Kharadi IT professionals, Viman Nagar residents, everyone in Pune is searching on mobile. Slow pages, broken Core Web Vitals, crawl errors, and missing schema all prevent your site from ranking regardless of how good your content is. We fix the technical base before writing a single word. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content matched to your Pune buyer',
    description:
      'A Hinjewadi IT services company and a Pimpri-Chinchwad auto manufacturer have completely different buyers with completely different search patterns. We research your specific buyer, what they search before they contact anyone, what content builds trust in your sector, what questions they need answered. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn real links from trusted Pune and Indian sources',
    description:
      'Links from credible Pune IT publications, Maharashtra business associations, auto industry directories, real estate portals, and education platforms tell Google that your Pune site is authoritative. Real editorial links only, no farms, no spam. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly report | your rankings, traffic, and three next things',
    description:
      'Every month: your Pune keyword rankings, organic traffic, enquiries from Google, and the three things we are doing next month. One page, a short call, no jargon. We show you exactly what happened and why. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const PUNE_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'pune-market',     label: 'Pune Market' },
];

const PUNE_FAQ_ITEMS = [
  {
    category: 'getting-started',
    question: 'Is SEO worth it for a Pune business?',
    answer:
      '"Seo company in pune" gets 3,600 searches a month at a keyword difficulty of just 18, significantly lower than Mumbai (where equivalent terms are KD 40+). "Seo expert pune" has a KD of 6, extremely winnable. Pune\'s IT, automotive, education, and real estate sectors all have significant search volume that most local businesses are not capturing. The opportunity is real and the competition is still manageable.',
  },
  {
    category: 'getting-started',
    question: 'How do I choose the best SEO company in Pune?',
    answer:
      'Three questions before you hire anyone: Can you show me ranking data for a Pune IT or B2B client in my sector? Who does the technical SEO work: a senior or a junior team? What will I see in the first 60 days? The best SEO company in Pune answers all three clearly and specifically. Walk away from anyone promising guaranteed page-one rankings or offering identical packages across different industries.',
  },
  {
    category: 'getting-started',
    question: 'What makes SEO for Pune different from other Indian cities?',
    answer:
      "Pune is genuinely multi-sector in a way most Indian cities are not. Hinjewadi has IT and software companies. Pimpri-Chinchwad has Tata Motors, Bajaj Auto, and automotive suppliers. Koregaon Park has consumer businesses and hospitality. The city also has a massive student and education market: IIT Pune, Symbiosis, Fergusson catchment, and hundreds of coaching institutes. Each of these is a different SEO problem with different buyers, keywords, and content needs.",
  },
  {
    category: 'getting-started',
    question: 'Do I need a Pune-based SEO agency?',
    answer:
      "You need someone who understands Pune's sectors and the buyer journeys in each: Hinjewadi IT procurement cycles, Pimpri-Chinchwad OEM supplier search, Pune student searches for coaching and colleges. We are not based in Pune, but we understand these buyer patterns and the competitive landscape across Pune's different zones. And unlike most local agencies, we do not lock you in.",
  },
  {
    category: 'services',
    question: 'What SEO services do you provide for Pune businesses?',
    answer:
      'Technical SEO (Core Web Vitals, schema, crawl errors, site speed), local SEO (Google Business Profile and map rankings for Baner, Kharadi, Viman Nagar, Koregaon Park, and Wakad), IT and B2B content SEO (Hinjewadi procurement-cycle content), auto and manufacturing supplier SEO (Pimpri-Chinchwad supplier pages), ecommerce SEO, and link building from credible Indian sources. We build a plan matched to your specific Pune sector.',
  },
  {
    category: 'services',
    question: 'Can you do SEO for a Pune IT company in Hinjewadi or Kharadi?',
    answer:
      "Yes. Pune's IT corridors: Hinjewadi, Kharadi, Magarpatta, and the newer Phursungi and Wagholi zones, have IT services, software companies, and startups with long B2B research cycles. Buyers in these markets research for weeks before contacting a vendor. We build the content that reaches them during that research phase, comparison guides, solution pages, case studies, and the technical SEO that makes the site credible and fast.",
  },
  {
    category: 'services',
    question: 'Can you do SEO for a Pune automotive or manufacturing supplier?',
    answer:
      'Yes. Pimpri-Chinchwad has Tata Motors, Bajaj Auto, and hundreds of auto component suppliers. Getting found by procurement teams from these companies, or by OEMs overseas, requires B2B supplier content that explains capabilities, certifications, production capacities, and quality standards in the language those procurement teams use. We understand that content requirement.',
  },
  {
    category: 'services',
    question: 'Do you do local SEO for Pune restaurants, clinics, and retail?',
    answer:
      "Yes. For consumer-facing businesses across Baner, Koregaon Park, Viman Nagar, Aundh, Kalyani Nagar, and Magarpatta, we manage Google Business Profile, build area-specific pages, earn real reviews, and get you into the top three on Google Maps. Pune's consumer market is highly mobile-first and 'near me' searches are growing fast across hospitality, healthcare, and retail.",
  },
  {
    category: 'services',
    question: 'Do you do education SEO for Pune coaching institutes and colleges?',
    answer:
      "Pune's education market is enormous: IIT and JEE coaching, MBA preparation, engineering colleges, and professional certifications. Education SEO in Pune means targeting the student and parent search journey: from 'best coaching in pune for IIT' through to specific admission and course terms. High-intent education keywords in Pune are still manageable in terms of competition.",
  },
  {
    category: 'results',
    question: 'How long does SEO take to work in Pune?',
    answer:
      "With primary terms at KD 18 (seo company in pune) and KD 6 (seo expert pune), Pune is more accessible than Mumbai but more competitive than Hyderabad. For technical fixes on sites with existing content, ranking movement is visible in 4–8 weeks. New content pages targeting specific Pune B2B keywords can reach page one in 2–4 months. For the most competitive Pune terms (digital marketing company, KD 70), 6–12 months.",
  },
  {
    category: 'results',
    question: 'What results can a Pune business expect from SEO?',
    answer:
      "First-page rankings for core Pune service terms within 3–6 months, steady organic traffic growth, and more qualified enquiries from Google. For Pune B2B companies: IT, auto suppliers, manufacturing: the biggest impact is often content that reaches procurement teams during the research phase. For local Pune businesses, map rankings in the top three drive phone calls and walk-ins.",
  },
  {
    category: 'results',
    question: 'Can you guarantee page-one rankings in Pune?',
    answer:
      "No honest SEO company in Pune, or anywhere, can guarantee specific rankings. Google controls those. What we can tell you is that Pune's keyword difficulty on most primary terms is still at a level where well-executed technical SEO and real content produce visible, measurable results within months. We show you exactly what we are doing and why in monthly reports.",
  },
  {
    category: 'results',
    question: 'How do you measure SEO success for a Pune business?',
    answer:
      'Rankings for your Pune target keywords, organic traffic month-on-month, enquiries and form fills from Google, and for local businesses, Google Business Profile calls and direction requests. We connect Google Search Console and Analytics from day one and give you a one-page report on the numbers that matter to your specific Pune business.',
  },
  {
    category: 'cost',
    question: 'How much do SEO services cost in Pune?',
    answer:
      "We do not sell fixed packages: a Hinjewadi IT services company needs different work from a Pimpri auto supplier or a Koregaon Park restaurant. We scope a monthly plan to what your Pune site actually needs. We give you a free audit first so you know exactly what you are paying for.",
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long-term SEO contract in Pune?',
    answer:
      'Not with us. Month to month, 30 days notice to pause or stop. Everything we build stays yours: your content pages, your structured data, your Google Business Profile, your links. We earn clients by improving rankings, not by locking them in.',
  },
  {
    category: 'cost',
    question: 'Is cheap SEO in Pune worth it?',
    answer:
      'Very cheap SEO almost always uses link farms and template content, both harmful. In Pune\'s B2B IT and auto sectors especially, a penalised site or a site with thin placeholder content is worse than no SEO at all. Real SEO in Pune requires budget for real work. We charge a fair rate and show you exactly what we do every month.',
  },
  {
    category: 'cost',
    question: 'What does a FactoryJet Pune SEO plan include each month?',
    answer:
      'Keyword tracking for your Pune target terms, technical checks and fixes, new or updated content, local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page monthly report with a short call. The same senior team every month, no account shuffles.',
  },
  {
    category: 'pune-market',
    question: 'Which Pune areas do you cover for SEO?',
    answer:
      'All of Pune: Hinjewadi, Baner, Kharadi, Viman Nagar, Koregaon Park, Aundh, Kalyani Nagar, Magarpatta, Wagholi, Wakad, Pimple Saudagar, Hadapsar, Camp, Shivajinagar, and the Pimpri-Chinchwad industrial corridor. For local service businesses we focus on your specific area. For B2B IT and manufacturing companies we target national and export searches from a Pune base.',
  },
  {
    category: 'pune-market',
    question: 'Which Pune industries benefit most from SEO?',
    answer:
      "Any Pune business where buyers search before they contact you. Highest impact: IT services and software (Hinjewadi, Kharadi, Magarpatta), automotive and manufacturing (Pimpri-Chinchwad), real estate (Baner, Wakad, Kharadi growth corridors), education (coaching, professional training, MBA), hospitality and F&B (Koregaon Park, Viman Nagar, Baner), and healthcare (Apollo Pune, Jahangir Hospital neighbourhood, clinics across the city).",
  },
  {
    category: 'pune-market',
    question: 'What is the SEO opportunity in Pune compared to Mumbai and Bangalore?',
    answer:
      "Pune sits between Hyderabad (very low competition) and Mumbai/Bangalore (very high competition). Primary terms like 'seo company in pune' are at KD 18 and 'seo expert pune' at KD 6, manageable competition with substantial search volume. The biggest opportunity is in Pune's IT and auto B2B sectors where most company websites are significantly under-optimised. Pune is growing faster than most Indian cities, and the companies investing in SEO now will be very difficult to displace in 2–3 years.",
  },
  {
    category: 'pune-market',
    question: 'Who is the best SEO company in Pune for an IT services company?',
    answer:
      "The best SEO company in Pune for IT services understands B2B procurement research cycles, what a technology solutions page needs versus a brochure page, and how to reach decision-makers during the weeks they spend researching before they send an RFP. FactoryJet has worked with IT services companies and understands the content and technical quality requirements that enterprise B2B buyers expect.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PUNE_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison ──────────────────────────────────────────────────────────── */

const PUNE_COLUMNS = [{ label: 'FactoryJet', isFactoryJet: true }, { label: 'Pune Agency' }, { label: 'Freelancer' }, { label: 'DIY' }] as const;

const PUNE_ROWS = [
  { feature: 'Lock-in contract', values: ['None, month to month', '6–12 months typical', 'Varies', 'None'] },
  { feature: 'IT & B2B procurement content SEO', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Technical SEO (schema, CWV, speed)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Local SEO for Pune areas', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real link building (no farms)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Monthly report + senior team call', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'One-page plain-English report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything we build', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

/* ─── Hero keyword card ───────────────────────────────────────────────────── */

function PuneKeywordCard() {
  const kws = [
    { term: 'seo company in pune',    vol: '3,600', kd: 18 },
    { term: 'seo agency pune',        vol: '3,600', kd: 38 },
    { term: 'seo services in pune',   vol: '880',   kd: 14 },
    { term: 'seo expert pune',        vol: '390',   kd: 6 },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p className="font-fj-mono font-bold uppercase text-fj-neutral-400" style={{ fontSize: '10px', letterSpacing: '0.14em' }}>Pune · Monthly Search Demand</p>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold" style={{ background: '#B23E13', color: '#fff' }}>8,470+ / mo</span>
      </div>
      <div className="divide-y divide-fj-neutral-100">
        {kws.map((kw) => {
          const pct = Math.min(Math.round((kw.kd / 50) * 100), 100);
          const color = kw.kd < 20 ? '#22c55e' : kw.kd < 35 ? '#F05A28' : '#F3A07A';
          const badge = kw.kd < 20 ? 'Very Winnable 🟢' : kw.kd < 35 ? 'Winnable 🟠' : 'Competitive';
          return (
            <div key={kw.term} className="px-5 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-fj-body text-[0.8125rem] font-medium leading-snug text-fj-ink" style={{ maxWidth: '62%' }}>{kw.term}</p>
                <div className="flex-shrink-0 text-right">
                  <p className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{kw.vol}</p>
                  <p className="font-fj-mono text-[10px] text-fj-neutral-400">searches/mo</p>
                </div>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-fj-neutral-100">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
              </div>
              <p className="mt-1 font-fj-mono text-[10px] text-fj-neutral-400">KD {kw.kd}/100 · {badge}</p>
            </div>
          );
        })}
      </div>
      <div className="border-t border-fj-neutral-100 px-5 py-3 text-center">
        <p className="font-fj-body text-[0.75rem] text-fj-neutral-400">Source: DataForSEO · June 2026 · India</p>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function SeoPune() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="pune-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="pune-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="pune-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'SEO', url: 'https://factoryjet.com/seo' }, { name: 'Pune', url: 'https://factoryjet.com/seo/pune' }]} />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'SEO', url: 'https://factoryjet.com/seo' }, { name: 'Pune', url: 'https://factoryjet.com/seo/pune' }]} />

        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_pune_hero" />}
          eyebrow="SEO COMPANY IN PUNE, INDIA"
          headline="The SEO Company in Pune Built for Hinjewadi IT, Pimpri Auto, and Every Pune Business in Between"
          lead="Pune's buyer mix is unlike any Indian city: IT procurement teams in Hinjewadi, Tata-Bajaj supply chain in Pimpri-Chinchwad, student searches across a massive education market, and fast-growing residential consumer zones in Baner and Kharadi. FactoryJet delivers SEO in Pune matched to each market. No long contracts."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['IT + Auto + Local SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<PuneKeywordCard />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="WHY PUNE BUSINESSES TRUST US" headline="India's Trusted SEO Company, 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building" />

        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN PUNE"
          headline="Six SEO Services We Deliver for Pune Businesses"
          lead="Pune runs on IT, auto, manufacturing, real estate, and education: five sectors, five completely different SEO strategies. We build the right one for your market."
          sectors={[
            { name: 'IT & Software B2B SEO', description: 'For IT services, SaaS, and software companies in Hinjewadi, Kharadi, and Magarpatta. Content that reaches procurement decision-makers during the long research cycle | solution guides, comparison pages, case studies. Technical SEO for modern web stacks.', example: 'Win enterprise IT deals from Google.' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema markup, mobile optimisation. With Pune terms at KD 6–18, a clean technical foundation can unlock fast first-page results. We fix the base before writing content.', example: 'Fast, crawlable, trusted by Google.' },
            { name: 'Local SEO for Pune', description: 'Google Business Profile, map rankings, "near me" searches, and area-specific pages for Baner, Koregaon Park, Viman Nagar, Aundh, Wakad, Kalyani Nagar, and Kharadi. Pune\'s consumer market is highly mobile-first.', example: 'Top 3 on Google Maps in your area.' },
            { name: 'Auto & Manufacturing SEO', description: 'For Pimpri-Chinchwad auto component suppliers, OEM sub-contractors, and Pune manufacturing companies. B2B supplier pages, capability and certification content, and search terms procurement teams actually use.', example: 'OEM supplier search coverage.' },
            { name: 'Education SEO', description: 'Coaching institutes, MBA programmes, engineering colleges, and professional training centres across Pune\'s massive student market. High-intent search coverage for IIT/JEE, MBA, UPSC, and professional certification terms.', example: 'Reach students before competitors do.' },
            { name: 'SEO Audit', description: 'Not ranking despite doing everything right? Something specific is blocking you | technical issues, content gaps, or competitor link advantages. Our Pune SEO audit identifies exactly what with a clear priority list.', example: 'Find the blocker. Fix it fast.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="FACTORYJET VS A PUNE SEO AGENCY"
          headline="Pune Has Dozens of SEO Agencies. Very Few That Understand Both Hinjewadi IT Buyers and Pimpri Auto Procurement."
          lead="Most Pune SEO companies sell the same keyword plan and content template to every client, regardless of whether they are a Hinjewadi SaaS startup, a Pimpri automotive supplier, or a Koregaon Park restaurant."
          body={
            <>
              <p>
                Pune is genuinely five different markets operating in the same city. A Hinjewadi IT services company and a Pimpri-Chinchwad auto component supplier have buyers with completely different research behaviours, trust signals, and content expectations. Generic SEO collapses these into one template and misses all of them.
              </p>
              <p>
                We build{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">technical SEO</a>{' '}
                foundations and sector-specific content for each Pune market. For IT and software companies in Hinjewadi, that means long-form research-cycle content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">authoritative links</a>{' '}
                from Indian tech publications. For auto suppliers in Pimpri, it means capability pages and certification content. For local businesses in Baner and Koregaon Park, it means{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">local SEO</a>{' '}
                that puts you on Google Maps. One plan per client, not one plan for all of Pune.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Pune SEO by zone + sector</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { zone: 'Hinjewadi · Kharadi',        sector: 'IT & SaaS B2B SEO',          kd: 'KD 6–18' },
                  { zone: 'Pimpri-Chinchwad',            sector: 'Auto & Manufacturing Supplier', kd: 'B2B Procurement' },
                  { zone: 'Baner · Koregaon Park',       sector: 'Local & Consumer SEO',         kd: 'Local Maps' },
                  { zone: 'Pune-wide (education)',        sector: 'Coaching & College SEO',       kd: 'Student Search' },
                ].map((row) => (
                  <div key={row.zone} className="px-7 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem' }}>{row.zone}</p>
                        <p className="mt-0.5 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem' }}>{row.sector}</p>
                      </div>
                      <span className="flex-shrink-0 rounded-full bg-orange-50 px-2.5 py-0.5 font-fj-mono text-[10px] font-bold text-[#B23E13]">{row.kd}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE PUNE SEO OPPORTUNITY"
          headline="8,470 Monthly Searches for SEO in Pune at KD 6–18. The Window Is Open Right Now."
          lead="'Seo company in pune', 3,600 searches a month at KD 18. 'Seo expert pune' at KD 6. These are some of the most accessible competition levels of any major Indian metro city with this volume. But Pune is growing fast, more companies are moving here, more agency expansion from Mumbai and Bangalore, and that window narrows every year."
          pillars={[
            { icon: '01', title: "Pune's IT and auto buyers research online before every decision.", body: "Hinjewadi procurement teams spend weeks reading comparison pages, solution guides, and technical blogs before they issue an RFP. Pimpri-Chinchwad supply chain managers search for certified suppliers before they visit a factory. The content that shows up during that research phase wins the shortlist. Most Pune websites have no content for those searches." },
            { icon: '02', title: "Pune's consumer zones are high-growth and still relatively easy to rank in.", body: "Baner, Kharadi, Wakad, and Viman Nagar have grown enormously in the last five years | new residential developments, new businesses, and rapidly growing local search volume. Map rankings and local SEO in these areas are still relatively low competition. The businesses investing now will be the immovable top results in two years." },
            { icon: '03', title: 'Pune is catching Mumbai for tech talent | and overtaking it for SEO opportunity.', body: "Mumbai's primary SEO terms are KD 35–50. Pune's are KD 6–18. Same buyer quality, lower competition, more growth. For IT and B2B businesses especially, Pune's SEO opportunity in 2026 looks like Bangalore's did in 2018 | before it got competitive." },
          ]}
        />

        <ServiceJourneyRow eyebrow="HOW IT WORKS" headline="How We Run SEO for Pune Businesses, Step by Step" lead="Audit first. Fix the technical base. Build sector-specific content. Earn real links. Show you the numbers every month." stages={PUNE_JOURNEY} closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS" />

        <IndustriesGrid
          variant="cards"
          eyebrow="PUNE AREAS WE COVER"
          headline="SEO Services Across Every Major Pune Business and Consumer Zone"
          lead="From Hinjewadi's IT parks to the Pimpri-Chinchwad auto corridor to the consumer zones of Baner and Koregaon Park: each Pune zone is a different SEO problem."
          sectors={[
            { name: 'Hinjewadi & Wakad', description: 'IT parks, software companies, SaaS startups. Long B2B research-cycle content, procurement-team buyer journeys, and technical credibility signals. The most important SEO territory for Pune IT businesses.' },
            { name: 'Kharadi & Viman Nagar', description: 'Fast-growing IT corridor and premium residential zone. Mix of IT companies, real estate developers, and consumer services. B2B IT content and local SEO both needed.' },
            { name: 'Baner, Balewadi & Aundh', description: 'Premium residential, F&B, fitness, healthcare, and retail. Mobile-first local search drives most discovery. Google Business Profile management and "near me" search coverage are the key growth levers here.' },
            { name: 'Koregaon Park & Kalyani Nagar', description: 'Hospitality, restaurants, lifestyle brands, and professional services. High-value consumer searches and premium brand SEO. Destination searches and local discovery both important.' },
            { name: 'Pimpri-Chinchwad', description: 'Auto and manufacturing | Tata Motors, Bajaj Auto, and hundreds of component suppliers. B2B supplier SEO, certification and capability pages, and OEM procurement team search coverage.' },
            { name: 'Hadapsar, Magarpatta & Camp', description: 'Magarpatta IT campus, Camp commercial and hospitality, and the Hadapsar manufacturing and residential mix. Both B2B IT content and local consumer SEO relevant depending on your business.' },
          ]}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="PUNE INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Pune"
          lead="Five sectors, five completely different SEO strategies. We build the right one for your market."
          sectors={[
            { name: 'IT & Software', description: 'Hinjewadi, Kharadi, and Magarpatta IT companies. Long B2B research-cycle content, comparison and solution pages, case studies, and technical SEO for modern Next.js and React stacks.' },
            { name: 'Automotive & Manufacturing', description: 'Pimpri-Chinchwad auto component suppliers, OEM sub-contractors, and industrial manufacturers. B2B supplier qualification pages, capability and certifications content, and procurement team search coverage.' },
            { name: 'Real Estate', description: 'Residential developers, brokers, and property portals across Baner, Kharadi, Wakad, and the outer ring road growth corridors. Neighbourhood-specific project pages, property schema, and buyer search coverage.' },
            { name: 'Education & Coaching', description: 'IIT/JEE and NEET coaching, MBA prep, engineering colleges, and professional training. High-intent student search coverage, course-specific pages, and direct brand search SEO.' },
            { name: 'Hospitality & Food', description: 'Restaurants, cafés, hotels, and event venues across Koregaon Park, Viman Nagar, Baner, and Camp. Local map rankings, menu schema, and Pune food discovery search coverage.' },
            { name: 'Healthcare', description: 'Hospitals, specialty clinics, diagnostic labs, and dental chains across Pune. Local map top-3, E-E-A-T health content, Google Business Profile management, and appointment-intent search coverage.' },
          ]}
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RESULTS</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Real SEO results for Pune businesses, case studies on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are building Pune-specific case studies. Our broader track record, 500+ businesses, 4.9-star average, uses the same technical foundations and content strategy we bring to every Pune engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our full portfolio →</a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>Read case studies →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Pune Agency vs. a Freelancer vs. Doing It Yourself"
          lead="Four ways to do SEO in Pune. Here is the honest comparison, what you get, what you keep, and what the risk is."
          pullQuote={{ stat: 'KD 6', caption: '"seo expert pune" has a keyword difficulty of just 6 out of 100: one of the lowest for any major Indian city keyword. Extremely winnable right now.' }}
          columns={PUNE_COLUMNS}
          rows={PUNE_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Pune Businesses"
          lead="Looking for a specific type of SEO? We cover the full stack."
          sectors={[
            { name: 'Local SEO', description: 'Google map rankings, GBP management, "near me" searches, and area pages across all Pune zones.', linkLabel: 'Explore local SEO', linkHref: '/seo/local-seo' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema | especially important for Pune IT companies on modern stacks.', linkLabel: 'Explore technical SEO', linkHref: '/seo/technical-seo' },
            { name: 'Ecommerce SEO', description: 'Product pages, category structure, Shopify and WooCommerce optimisation for Pune-based online retailers.', linkLabel: 'Explore ecommerce SEO', linkHref: '/seo/ecommerce-seo' },
            { name: 'Link Building', description: 'Editorial links from Indian IT publications, Maharashtra business associations, and auto industry directories.', linkLabel: 'Explore link building', linkHref: '/seo/link-building' },
            { name: 'SEO Audit', description: 'Find exactly what is blocking your Pune site | technical issues, content gaps, or competitor advantages | with a clear action list.', linkLabel: 'Explore SEO audit', linkHref: '/seo/seo-audit' },
            { name: 'SEO Hub India', description: 'Our full guide to SEO services in India | what to look for, how to compare agencies, and what results look like.', linkLabel: 'Back to India SEO hub', linkHref: '/seo' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="PUNE SEO QUESTIONS" headline="Every Question Pune Business Owners Ask About SEO, Answered Simply" lead="12 years of answering these questions. Here are the ones Pune businesses ask most." categories={PUNE_FAQ_CATEGORIES} items={PUNE_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN PUNE"
          headline="Ready to Reach Page One for Your Pune Customers?"
          sub="Start with a free SEO check. We will show you where you rank today, who ranks above you and why, and the first three things we would fix, whether you are a Hinjewadi IT company, a Pimpri auto supplier, or a Baner restaurant. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

        {/* Hub link-back (silo fix, 31 Jul 2026) */}

        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">

          <div className="mx-auto max-w-3xl">

            <p className="text-base leading-relaxed text-fj-ink/75">

              We work well beyond Pune. See{' '}

              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">

                what our SEO company in India covers

              </a>{' '}

              and how the work is structured.

            </p>

          </div>

        </section>


      </main>
      <SiteFooter locale="in" />
    </>
  );
}
