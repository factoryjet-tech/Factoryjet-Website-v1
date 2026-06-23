import type { Metadata } from 'next';
import Script from 'next/script';
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
  title: 'SEO Company in Hyderabad | Best SEO Services Hyderabad | FactoryJet',
  description:
    'Looking for the best SEO company in Hyderabad? FactoryJet delivers SEO services in Hyderabad — technical SEO, local SEO, B2B pharma & IT SEO, ecommerce SEO. No long contracts. Book a free call.',
  keywords: [
    'seo company in hyderabad',
    'seo company hyderabad',
    'seo services in hyderabad',
    'best seo company in hyderabad',
    'seo agency hyderabad',
    'seo expert hyderabad',
    'digital marketing company in hyderabad',
    'local seo hyderabad',
    'ecommerce seo hyderabad',
    'pharma seo hyderabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Hyderabad | Best SEO Services | FactoryJet',
    description:
      'Expert SEO services in Hyderabad — local SEO, technical SEO, pharma & IT B2B SEO, and ecommerce SEO. 500+ businesses, 4.9-star rating. No long contracts.',
    url: 'https://factoryjet.com/seo/hyderabad',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Hyderabad' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Hyderabad | FactoryJet',
    description: 'Expert SEO in Hyderabad for pharma, IT, real estate, and local businesses. No lock-in. Book a free SEO check.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/hyderabad', languages: seoCityAlternatesIN['hyderabad'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/hyderabad#localbusiness',
  name: 'FactoryJet — SEO Company in Hyderabad',
  description:
    'FactoryJet provides SEO services in Hyderabad for pharma companies, IT services, real estate developers, healthcare providers, and local businesses across Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, HITEC City, and Secunderabad.',
  url: 'https://factoryjet.com/seo/hyderabad',
  telephone: '+919699977699',
  email: 'bhavesh@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'HITEC City' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  sameAs: ['https://factoryjet.com'],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/hyderabad#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Hyderabad by FactoryJet',
  description:
    'SEO services in Hyderabad for pharma, IT, real estate, healthcare, and local businesses. Serving Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, HITEC City, Ameerpet, and Secunderabad.',
  url: 'https://factoryjet.com/seo/hyderabad',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'City', name: 'Hyderabad' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/hyderabad#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/hyderabad',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const HYD_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Hyderabad SEO audit — find what is blocking your rankings today',
    description:
      'We audit your site across Hyderabad search terms in your specific industry — pharma, IT, real estate, healthcare, or local services. You see who ranks above you, why, and what the gap is. Plain-English report, clear priority list. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical foundation — mobile speed first, always',
    description:
      'Hyderabad has very high mobile search penetration. Slow pages, poor Core Web Vitals, crawl errors, duplicate content, and missing structured data all cap your ranking potential regardless of how good your content is. We fix the technical base first. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content matched to your Hyderabad buyer',
    description:
      'Whether you sell to pharma procurement teams, IT decision-makers, Hyderabad property buyers, or local customers in Banjara Hills — the content and keywords are completely different. We research and write for your specific buyer, not a generic template. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn real links from trusted Indian sources',
    description:
      'Links from credible Indian pharma publications, IT directories, local business listings, and industry associations tell Google your Hyderabad site deserves the first page. Real editorial links only — no farms, no bought links. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly report and call — plain English, five minutes to read',
    description:
      'Every month: your Hyderabad keyword rankings, organic traffic, enquiries from Google, and the three things we are doing next. A one-page report and a short call — not a 40-page PDF. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const HYD_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'hyd-market',     label: 'Hyderabad Market' },
];

const HYD_FAQ_ITEMS = [
  {
    category: 'getting-started',
    question: 'Is SEO worth it for a Hyderabad business?',
    answer:
      '"Seo company in hyderabad" has a keyword difficulty of just 14 out of 100 — lower than almost any major Indian city. That means it is genuinely winnable right now. Multiply that across the searches your own customers run and the opportunity becomes clear. Hyderabad\'s pharma, IT, real estate, and healthcare sectors all have significant search volume that most local companies are not capturing.',
  },
  {
    category: 'getting-started',
    question: 'How do I choose the best SEO company in Hyderabad?',
    answer:
      'Three questions to ask before you pay anyone: Can you show me ranking data for a Hyderabad client in my industry? Who does the actual technical SEO work? What will I see in the first 60 days? The best SEO company in Hyderabad answers all three clearly. Walk away from anyone offering fixed cheap packages and guaranteed rankings.',
  },
  {
    category: 'getting-started',
    question: 'What makes SEO in Hyderabad different from other Indian cities?',
    answer:
      "Hyderabad's top industries — pharma, IT, real estate, and healthcare — each have very specific buyer journeys and search patterns. A pharma buyer at Genome Valley searches differently from a software procurement team in HITEC City, and a property buyer in Jubilee Hills searches differently again. A generic SEO plan misses all of this. Hyderabad is also unusual in that it is still a relatively low-competition SEO market (KD 6 on seo services in hyderabad) despite its economic size.",
  },
  {
    category: 'getting-started',
    question: 'Do I need a Hyderabad-based SEO agency?',
    answer:
      "You need someone who understands Hyderabad's buyer mix and competitive landscape — not necessarily someone sitting in Madhapur. We are not based in Hyderabad, but we understand the city's pharma and IT buyer patterns, the role of Genome Valley and HITEC City in defining the B2B market, and what it takes to rank for Hyderabad searches.",
  },
  {
    category: 'services',
    question: 'What SEO services do you offer for Hyderabad businesses?',
    answer:
      'Technical SEO (site speed, Core Web Vitals, schema, crawlability), local SEO (Google Business Profile and map rankings for Banjara Hills, Jubilee Hills, Madhapur, and Secunderabad), B2B content SEO (pharma, IT services, and real estate), ecommerce SEO (product and category pages), and link building (Indian pharma publications, IT directories, local business listings). We combine these based on your specific Hyderabad industry.',
  },
  {
    category: 'services',
    question: 'Can you do SEO for a Hyderabad pharma or biotech company?',
    answer:
      'Yes. Hyderabad is one of India\'s most important pharma and biotech hubs — Genome Valley alone has 200+ life sciences companies. Pharma SEO in Hyderabad means B2B content targeting procurement and research teams, technical credibility signals, regulatory compliance in copy, and links from credible pharma publications and directories. This is a specialist niche we have worked in.',
  },
  {
    category: 'services',
    question: 'Can you do local SEO for my Hyderabad clinic, restaurant, or retail shop?',
    answer:
      'Yes. For businesses serving Hyderabad customers directly — clinics in Banjara Hills, restaurants in Jubilee Hills, retail in Secunderabad, or services in Ameerpet — we manage your Google Business Profile, fix your listing across all directories, earn real reviews, and build neighbourhood-specific pages. Local search in Hyderabad is very mobile-first and growing fast.',
  },
  {
    category: 'services',
    question: 'Do you offer SEO for Hyderabad real estate companies?',
    answer:
      'Yes. Real estate SEO in Hyderabad means neighbourhood-specific project pages (Gachibowli, Kondapur, Bachupally, Kukatpally), fast-loading property listing pages, schema markup for properties, and high-intent buyer search coverage across search terms like "apartments in Hyderabad under X crore" and "plots in Hyderabad". We understand the buyer journey for Hyderabad property search.',
  },
  {
    category: 'results',
    question: 'How long does SEO take to work in Hyderabad?',
    answer:
      'With keyword difficulty as low as KD 6 on primary terms, Hyderabad offers faster-than-average ranking potential in India. Technical fixes on a site with existing content can show ranking movement in 4–6 weeks. New content pages targeting Hyderabad keywords can reach page one in 2–4 months. This is significantly faster than Bangalore or Delhi where competition is higher.',
  },
  {
    category: 'results',
    question: 'What SEO results do Hyderabad businesses typically see?',
    answer:
      "Given Hyderabad's low competition on primary keywords, our clients often see first-page rankings faster than they expect — especially for industry-specific terms. The businesses that gain the most are those in pharma, IT, and real estate that start before their category gets saturated. We also see strong local SEO results for service businesses across Banjara Hills, Jubilee Hills, and Madhapur.",
  },
  {
    category: 'results',
    question: 'Can you guarantee page-one rankings in Hyderabad?',
    answer:
      "No honest agency can guarantee specific rankings — Google controls those. What we can tell you honestly is that Hyderabad's keyword difficulty scores are among the lowest of any major Indian city, which means the work we do produces results faster. We show you exactly what we are doing each month, and the direction of travel is visible from the first report.",
  },
  {
    category: 'results',
    question: 'How do you measure SEO success for a Hyderabad business?',
    answer:
      'Rankings for your Hyderabad target keywords, organic traffic month-on-month, enquiries and form fills from Google, and for local businesses — calls from your Google Business Profile. We connect Google Search Console and Analytics, and give you a one-page monthly report with the numbers that matter to your business.',
  },
  {
    category: 'cost',
    question: 'How much do SEO services cost in Hyderabad?',
    answer:
      'We do not sell fixed packages — a pharma exporter in Genome Valley needs different work from a clinic in Banjara Hills. Our SEO plans for Indian businesses start at ₹19,999 a month, scoped to what your site actually needs. We give you a free audit first so you know exactly what you are paying for before committing.',
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long-term contract with a Hyderabad SEO agency?',
    answer:
      'Not with us. Month to month, 30 days notice to pause or stop. Everything we build — your content pages, your structured data, your Google Business Profile, your links — belongs to you and stays with you. We keep clients because rankings go up, not because they are locked in.',
  },
  {
    category: 'cost',
    question: 'Is cheap SEO in Hyderabad worth it?',
    answer:
      'Very cheap SEO (under ₹5,000/month) is almost always a waste of money because it relies on low-quality links that either do nothing or create a penalty risk. Good SEO in Hyderabad is still affordable compared to major metro agencies — but it costs enough to do real work. We charge a fair price and show you exactly what we do every month.',
  },
  {
    category: 'cost',
    question: 'What does a monthly Hyderabad SEO plan from FactoryJet include?',
    answer:
      'Every month: keyword tracking for your Hyderabad target terms, technical checks and fixes, new or updated content, local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page report with a call. Same senior team every month — no account-management shuffle.',
  },
  {
    category: 'hyd-market',
    question: 'Which Hyderabad areas do you cover for SEO?',
    answer:
      'All of Hyderabad: Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, HITEC City, Ameerpet, Secunderabad, Kukatpally, Kondapur, Begumpet, Abids, and the Genome Valley bio cluster. For local service businesses we focus on your area and city-wide terms. For B2B pharma and IT companies we target national and global searches from a Hyderabad base.',
  },
  {
    category: 'hyd-market',
    question: 'Which industries benefit most from SEO in Hyderabad?',
    answer:
      "Any Hyderabad business where buyers search before they contact you. Top priority: pharma and biotech (Genome Valley), IT services and software (HITEC City, Gachibowli), real estate (Kondapur, Bachupally, Gachibowli corridor), healthcare and hospitals, education (IIIT Hyderabad catchment, coaching), and hospitality. Hyderabad's relatively low keyword competition means even a small investment in SEO has outsized returns right now.",
  },
  {
    category: 'hyd-market',
    question: 'Who is the best SEO agency in Hyderabad for a pharma company?',
    answer:
      "The best SEO company in Hyderabad for a pharma business understands procurement and research team buyer journeys, regulatory compliance in health and science copy, and what credible linking sources look like in the life sciences sector. FactoryJet has worked with health and science businesses. We do not treat pharma SEO like restaurant SEO — the content requirements, the trust signals, and the competition are fundamentally different.",
  },
  {
    category: 'hyd-market',
    question: 'Why is SEO in Hyderabad a bigger opportunity than most people realise?',
    answer:
      "Hyderabad's top industries are B2B-heavy and research-intensive — pharma buyers, IT procurement, property investors. These buyers research on Google extensively before they contact anyone. Yet Hyderabad's SEO competition is still much lower than Bangalore, Mumbai, or Delhi (KD 6 vs KD 22–37 in comparable terms). That gap between search volume and low competition is the opportunity. Companies that invest in SEO now will be the sites that are impossible to displace two years from today.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HYD_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison ──────────────────────────────────────────────────────────── */

const HYD_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Hyderabad Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const HYD_ROWS = [
  { feature: 'Lock-in contract', values: ['None, month to month', '6–12 months typical', 'Varies', 'None'] },
  { feature: 'Pharma & biotech SEO expertise', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Technical SEO (schema, CWV, speed)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Local SEO for Hyderabad areas', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real link building (no farms)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Monthly report + senior team call', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'One-page plain-English report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything we build', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

/* ─── Hero keyword card ───────────────────────────────────────────────────── */

function HydKeywordCard() {
  const kws = [
    { term: 'seo services in hyderabad', vol: '1,300', kd: 6 },
    { term: 'seo company in hyderabad',  vol: '1,300', kd: 14 },
    { term: 'seo company hyderabad',     vol: '1,300', kd: 11 },
    { term: 'seo expert hyderabad',      vol: '390',   kd: 0 },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p className="font-fj-mono font-bold uppercase text-fj-neutral-400" style={{ fontSize: '10px', letterSpacing: '0.14em' }}>Hyderabad · Monthly Search Demand</p>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold" style={{ background: '#F05A28', color: '#fff' }}>4,290+ / mo</span>
      </div>
      <div className="divide-y divide-fj-neutral-100">
        {kws.map((kw) => {
          const pct = kw.kd === 0 ? 3 : Math.min(Math.round((kw.kd / 50) * 100), 100);
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
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: '#22c55e' }} />
              </div>
              <p className="mt-1 font-fj-mono text-[10px] text-fj-neutral-400">KD {kw.kd}/100 · 🟢 Very Winnable</p>
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

export default function SeoHyderabad() {
  return (
    <>
      <Script id="hyd-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="hyd-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="hyd-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'SEO', url: 'https://factoryjet.com/seo' }, { name: 'Hyderabad', url: 'https://factoryjet.com/seo/hyderabad' }]} />

      <main className="bg-fj-cream">

        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_hyderabad_hero" />}
          eyebrow="SEO COMPANY IN HYDERABAD, INDIA"
          headline="The SEO Company in Hyderabad With the Lowest Competition Window in Any Major Indian City"
          lead="'Seo services in hyderabad' — 1,300 searches a month at a keyword difficulty of just 6 out of 100. That is extraordinary for a city of Hyderabad's economic size. FactoryJet delivers SEO services in Hyderabad for pharma, IT, real estate, and local businesses — before the window closes. No long contracts."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Pharma + IT + Local SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<HydKeywordCard />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="WHY HYDERABAD BUSINESSES TRUST US" headline="India's Trusted SEO Company — 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building" />

        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN HYDERABAD"
          headline="Six SEO Services We Deliver for Hyderabad Businesses"
          lead="Hyderabad has three distinct economic zones — the pharma and biotech cluster at Genome Valley, the IT and tech companies in HITEC City and Gachibowli, and the consumer and services market across the rest of the city. We match the SEO strategy to the zone your business operates in."
          sectors={[
            { name: 'Pharma & Biotech SEO', description: 'For Genome Valley life sciences companies, pharmaceutical manufacturers, and biotech startups. B2B content targeting procurement and research teams, regulatory-compliant copy, and links from credible pharma publications and directories.', example: 'Win tenders and enquiries from Google.' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema, mobile optimisation. With KD as low as 6 in Hyderabad, technical improvements alone can deliver fast ranking gains. We fix the foundation before adding content.', example: 'Fast, crawlable, trusted by Google.' },
            { name: 'Local SEO for Hyderabad', description: 'Google Business Profile management, map rankings, "near me" searches, and area-specific pages for Banjara Hills, Jubilee Hills, Madhapur, Ameerpet, and Secunderabad. Mobile-first local search is growing fast in Hyderabad.', example: 'Top 3 on Google maps for your area.' },
            { name: 'IT & B2B SEO', description: 'For IT services, software, and digital companies in HITEC City and Gachibowli. B2B content that reaches procurement decision-makers during the long research cycle before they issue an RFP or call for demos.', example: 'Inbound from enterprise IT buyers.' },
            { name: 'Real Estate SEO', description: 'Project and neighbourhood pages for Gachibowli, Kondapur, Bachupally, Kukatpally, and Jubilee Hills. High-intent property buyer searches, schema for projects, and fast-loading listing pages that work on mobile.', example: 'Property buyer search coverage.' },
            { name: 'SEO Audit', description: 'Not ranking despite decent content and a clean site? Something specific is blocking you. Our Hyderabad SEO audit identifies exactly what — and gives you a plain-English action list with a clear fix priority.', example: 'Find the blocker. Fix it fast.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="FACTORYJET VS A HYDERABAD SEO AGENCY"
          headline="Hyderabad Has Plenty of SEO Agencies. Very Few That Understand Pharma and B2B IT Search."
          lead="Most Hyderabad SEO companies use the same keyword sheet for a Genome Valley pharma company and a Secunderabad restaurant. The strategies, the content requirements, and the competition are completely different."
          body={
            <>
              <p>
                Hyderabad is not one market. A pharma procurement team at a Genome Valley company searches very differently from a restaurant discovery search in Banjara Hills. B2B buyers in HITEC City read white papers, comparison guides, and case studies for weeks before they contact anyone. Generic SEO misses all of this — keyword list, template content, monthly traffic report.
              </p>
              <p>
                We match the strategy to the market. For pharma and IT companies we build{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">technical SEO</a>{' '}
                foundations and{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">B2B content</a>{' '}
                that reaches decision-makers early. For local Hyderabad businesses we do the map rankings and neighbourhood pages. And unlike most{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO companies in India</a>,{' '}
                we run lean and do not lock you in.
              </p>
              <p>
                The Hyderabad SEO opportunity window is real and still open. KD 6 on primary search terms is exceptional for a city of this economic size. Act before the market catches up.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Hyderabad SEO by sector</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { sector: 'Pharma / Biotech', need: 'Regulatory-compliant B2B content, pharma directories', zone: 'GENOME VALLEY · KD 6' },
                  { sector: 'IT / Software',    need: 'Long research-cycle B2B content, tech media links', zone: 'HITEC CITY · GACHIBOWLI' },
                  { sector: 'Local services',   need: 'Google map, GBP, "near me", area pages', zone: 'BANJARA HILLS · JUBILEE HILLS' },
                ].map((row) => (
                  <div key={row.sector} className="px-7 py-5">
                    <p className="mb-1 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.sector}</p>
                    <p className="mb-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.zone}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="THE HYDERABAD SEO OPPORTUNITY"
          headline="KD 6. That Is the Keyword Difficulty for 'SEO Services in Hyderabad'. It Will Not Stay This Low."
          lead="Bangalore's primary term is KD 8. Delhi's is KD 23–37. Hyderabad's top SEO terms sit at KD 6 and KD 11 — the lowest among major Indian metro cities. This is not a quirk. It is a window. Hyderabad's economy is large and growing, but local businesses have not yet saturated the SEO space. The first-movers will be very difficult to displace."
          pillars={[
            { icon: '01', title: "Hyderabad's B2B buyers research for weeks before buying.", body: "Pharma procurement teams, IT decision-makers, property investors — they all do months of online research. Every search during that research window is an opportunity to reach them. Most Hyderabad businesses have no presence during this phase and lose the lead before they ever know they had it." },
            { icon: '02', title: 'Technical quality wins fast in a low-competition market.', body: 'When keyword difficulty is this low, fixing a slow site or broken crawl can deliver page-one rankings in weeks — not months. We have seen Hyderabad sites move 30+ positions from technical fixes alone in 60 days.' },
            { icon: '03', title: 'The window is open but not permanent.', body: "Major Delhi and Mumbai agencies are expanding to Hyderabad. Bangalore-based agencies already target Hyderabad keywords. In 18–24 months, Hyderabad's keyword difficulty will catch up with the rest of India. The businesses investing now will be the immovable top results when that happens." },
          ]}
        />

        <ServiceJourneyRow eyebrow="HOW IT WORKS" headline="How We Run SEO for Hyderabad Businesses, Step by Step" lead="Audit first. Fix the technical base. Build content. Earn real links. Show you the results every month." stages={HYD_JOURNEY} closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS" />

        <IndustriesGrid
          variant="cards"
          eyebrow="HYDERABAD AREAS WE COVER"
          headline="SEO Services Across Every Major Hyderabad Business Zone"
          lead="From the pharma cluster at Genome Valley to the IT parks of HITEC City and the premium residential markets of Banjara Hills — each Hyderabad zone is a different SEO problem."
          sectors={[
            { name: 'Banjara Hills & Jubilee Hills', description: 'Premium residential and commercial. High-intent searches for healthcare, education, restaurants, and professional services. Local SEO, Google Business Profile, and neighbourhood-specific pages drive most growth here.' },
            { name: 'HITEC City & Gachibowli', description: 'IT and tech companies, MNCs, and enterprise services. Long B2B research cycles, procurement team buyers. Content SEO and technical credibility signals are the main levers.' },
            { name: 'Madhapur & Kondapur', description: 'Startup-friendly corridor adjacent to HITEC City. Growing mix of tech companies, co-working spaces, and local services. B2B content + local map coverage both needed.' },
            { name: 'Genome Valley', description: 'One of India\'s largest pharma and biotech clusters. Regulatory-aware B2B content, pharma directories and publication links, and technical SEO for manufacturer and CRO websites.' },
            { name: 'Ameerpet & Secunderabad', description: 'Coaching institutes, IT training, retail, and local services. High-volume search catchment for education terms and local service searches. Local SEO and all-India student search coverage.' },
            { name: 'Kukatpally & Bachupally', description: 'Fast-growing residential corridor. Real estate and local services are the dominant verticals. Neighbourhood-specific pages and Google Business Profile management for property and service businesses.' },
          ]}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="HYDERABAD INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Hyderabad"
          lead="Each Hyderabad industry has its own buyer journey, keyword set, and competitive landscape. We do not sell generic plans."
          sectors={[
            { name: 'Pharma & Biotech', description: 'Genome Valley companies, API manufacturers, CROs, and medical devices. B2B content for procurement and R&D buyers, pharma publication links, regulatory-compliant copy.' },
            { name: 'IT & Software', description: 'HITEC City and Gachibowli tech companies. B2B content marketing, technical SEO for complex sites, and link building from credible Indian tech sources.' },
            { name: 'Real Estate', description: 'Developers, brokers, and property portals. Neighbourhood-specific project pages, fast mobile listings, schema markup, and high-intent buyer keyword coverage.' },
            { name: 'Healthcare', description: 'Apollo Hospitals neighbourhood, specialty clinics, diagnostic labs, and dental chains. Google map top-3, E-E-A-T health content, and Google Business Profile management.' },
            { name: 'Education & Training', description: 'IT training institutes in Ameerpet, coaching for IIT/NEET/UPSC, and ed-tech companies. National student search coverage, results-focused content, and direct brand SEO.' },
            { name: 'Hospitality & Food', description: 'Hotels, restaurants, and event venues across Hyderabad. Local map rankings, menu schema, event markup, and area-specific discovery pages.' },
          ]}
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RESULTS</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Real SEO results for Hyderabad businesses — case studies on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are building Hyderabad-specific case studies. Our broader track record — 500+ businesses, 4.9-star average — uses the same fundamentals we bring to every Hyderabad engagement. Pharma, IT, local services: the process is the same, the results are documented.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our full portfolio →</a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>Read case studies →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Hyderabad Agency vs. a Freelancer vs. Doing It Yourself"
          lead="Four ways to do SEO in Hyderabad. Here is the honest comparison — what you get, what you keep, and what happens when something goes wrong."
          pullQuote={{ stat: 'KD 6', caption: '"seo services in hyderabad" has a keyword difficulty of 6 out of 100 — one of the lowest of any major Indian metro. The window is still very wide open.' }}
          columns={HYD_COLUMNS}
          rows={HYD_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Hyderabad Businesses"
          lead="Looking for a specific type of SEO? We cover the full stack."
          sectors={[
            { name: 'Local SEO', description: 'Google map rankings, GBP management, "near me" searches, and area pages across all Hyderabad zones.', linkLabel: 'Explore local SEO', linkHref: '/seo/local-seo' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema — the foundation that unlocks everything else, especially in a low-KD market like Hyderabad.', linkLabel: 'Explore technical SEO', linkHref: '/seo/technical-seo' },
            { name: 'Ecommerce SEO', description: 'Product pages, category structure, Shopify and WooCommerce, and the keywords Hyderabad shoppers use before they buy.', linkLabel: 'Explore ecommerce SEO', linkHref: '/seo/ecommerce-seo' },
            { name: 'Link Building', description: 'Editorial links from trusted Indian pharma publications, IT directories, and local business sources — the authority signal Google relies on.', linkLabel: 'Explore link building', linkHref: '/seo/link-building' },
            { name: 'SEO Audit', description: 'Find what is blocking your Hyderabad site — technical issues, content gaps, or competitor advantages — and get a clear action list.', linkLabel: 'Explore SEO audit', linkHref: '/seo/seo-audit' },
            { name: 'SEO Hub India', description: 'Our full guide to SEO services in India — what to look for, how to compare agencies, and how to measure success.', linkLabel: 'Back to India SEO hub', linkHref: '/seo' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="HYDERABAD SEO QUESTIONS" headline="Every Question Hyderabad Business Owners Ask About SEO, Answered Simply" lead="25 years of answering these questions. Here are the ones Hyderabad businesses ask most." categories={HYD_FAQ_CATEGORIES} items={HYD_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN HYDERABAD"
          headline="Ready to Reach Page One for Your Hyderabad Customers?"
          sub="Start with a free SEO check. We will show you where you rank today, what is blocking you, and the three things we would fix first — whether you are a pharma company in Genome Valley, an IT services firm in HITEC City, or a clinic in Banjara Hills. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

      </main>
      <SiteFooter locale="in" />
    </>
  );
}
